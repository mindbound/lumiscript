/**
 * In-process storage benchmark — quantifies the db-store RMW hot path behind
 * api.db.* (Phase 1 findings C12-01 full-array re-serialize, C12-02 unindexed
 * scan, C12-09 monotonic O(N), + the critic's sequential-insert amplification).
 *
 *   bun run bench/engine/storage-ops.bench.ts
 *
 * FIDELITY (R3): backed by an in-memory adapter that serializes on write +
 * parses on read, so it reproduces the CPU cost of the RMW (JSON.stringify +
 * JSON.parse of the whole collection per op) but NOT real disk-write latency —
 * production spindle.userStorage adds disk I/O on top, so these are a LOWER
 * BOUND on real per-op latency.
 */

import { DbStore } from '../../src/engine/db-store.js';
import type { UserStorageAdapter } from '../../src/storage/collection-store.js';
import type { DbRecord } from '../../src/types/script.js';
import { timeBatch } from '../_harness/timer.js';
import { renderTable, fmtMs } from '../_harness/report.js';

/** In-memory adapter: serialize-on-write + parse-on-read mimics disk CPU (not latency). */
function makeAdapter(): UserStorageAdapter {
  const store = new Map<string, string>();
  return {
    async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
      const s = store.get(path);
      return s === undefined ? opts.fallback : (JSON.parse(s) as T);
    },
    async setJson(path: string, value: unknown): Promise<void> {
      store.set(path, JSON.stringify(value));
    },
  };
}

type SeedRecord = Omit<DbRecord, 'id' | 'createdAt' | 'updatedAt'>;
function rec(i: number): SeedRecord {
  return { name: `record-${i}`, value: i, tags: [`t${i % 10}`, `g${i % 5}`], note: `payload text for record number ${i} with some representative content` };
}

async function seed(n: number): Promise<DbStore> {
  const store = new DbStore('bench-coll', makeAdapter(), () => 'bench-user');
  await store.insertMany(Array.from({ length: n }, (_, i) => rec(i)));
  return store;
}

const SIZES = [100, 1000, 10000];
const REPS = 30;

async function main(): Promise<void> {
  console.log('\n=== db-store RMW scaling (in-process; serialize-on-write + parse-on-read; R3: no disk latency) ===\n');

  // Scenario 1 — single insert at size N: load(parse N) + push + persist(stringify N+1) = O(N) per op.
  const insertRows: string[][] = [];
  for (const N of SIZES) {
    const store = await seed(N);
    const ms = await timeBatch(REPS, () => store.insert(rec(1_000_000)));
    insertRows.push([`${N}`, fmtMs(ms)]);
  }
  console.log('single insert() — load+push+persist, expected O(N) per op (C12-01):');
  console.log(renderTable(['collection size', 'ms / insert'], insertRows));

  // Scenario 2 — find by unique id (full scan, no index) vs find-all, at size N.
  const findRows: string[][] = [];
  for (const N of SIZES) {
    const store = await seed(N);
    const all = await store.find();
    const mid = all[Math.floor(all.length / 2)];
    if (mid === undefined) throw new Error('seed produced empty collection');
    const targetId = mid.id;
    const msScan = await timeBatch(REPS, () => store.find({ id: targetId }));
    const msAll = await timeBatch(REPS, () => store.find());
    findRows.push([`${N}`, fmtMs(msScan), fmtMs(msAll)]);
  }
  console.log('\nfind({id}) full linear scan — no index even for unique-id lookup (C12-02):');
  console.log(renderTable(['collection size', 'find({id})', 'find() all'], findRows));

  // Scenario 3 — write amplification: M sequential insert() (each re-serializes the
  // growing array => O(M^2)) vs one insertMany(M) (single persist).
  const M = 500;
  const seqStore = new DbStore('seq', makeAdapter(), () => 'u');
  const t0 = performance.now();
  for (let i = 0; i < M; i++) await seqStore.insert(rec(i));
  const seqMs = performance.now() - t0;

  const batchStore = new DbStore('batch', makeAdapter(), () => 'u');
  const t1 = performance.now();
  await batchStore.insertMany(Array.from({ length: M }, (_, i) => rec(i)));
  const batchMs = performance.now() - t1;

  console.log(`\nwrite amplification — ${M} rows into an empty collection (C12-01 / db-queue non-coalescing):`);
  console.log(renderTable(
    ['approach', 'total', 'per row'],
    [
      [`${M}x insert() (sequential)`, fmtMs(seqMs), fmtMs(seqMs / M)],
      ['1x insertMany()', fmtMs(batchMs), fmtMs(batchMs / M)],
      ['amplification', `${(seqMs / batchMs).toFixed(0)}x`, ''],
    ],
  ));

  console.log('\n[ok] storage-ops bench complete.\n');
}

await main();
