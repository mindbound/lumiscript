/**
 * Retention policy (C12-09) — lazy prune-on-insert via `CollectionOpts.retention`.
 * Exercises the `DbStore` directly (the api/db surface validation + broadcast
 * fan-out is covered in tests/engine/api/db.test.ts).
 *
 * Order per insert: expire EXISTING records by maxAgeMs → append new → cap to
 * maxRecords. So a freshly-inserted record is never pruned in its own call, and
 * `insertMany` returns only the records that survived the cap.
 */
import { describe, test, expect, beforeEach } from 'bun:test';
import { DbStore } from '../../src/engine/db-store.js';
import type { UserStorageAdapter } from '../../src/storage/collection-store.js';
import type { DbRecord, DbRetention } from '../../src/types/script.js';

class FakeStorage implements UserStorageAdapter {
  data = new Map<string, unknown>();
  async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
    return this.data.has(path) ? (this.data.get(path) as T) : opts.fallback;
  }
  async setJson(path: string, value: unknown): Promise<void> {
    this.data.set(path, value);
  }
}

const PATH = 'db/scripts/s-1/log.json';
let storage: FakeStorage;
const makeStore = (retention?: DbRetention): DbStore =>
  new DbStore(PATH, storage, () => 'user-1', undefined, undefined, retention);

beforeEach(() => { storage = new FakeStorage(); });

const nums = (recs: DbRecord[]): unknown[] => recs.map((r) => r.n);

describe('retention — maxRecords ring-buffer', () => {
  test('insert past the cap drops the oldest (insertion order)', async () => {
    const store = makeStore({ maxRecords: 3 });
    for (let n = 0; n < 5; n++) await store.insert({ n } as Partial<DbRecord>);
    expect(nums(await store.find())).toEqual([2, 3, 4]); // last 3 survive
  });

  test('insertMany of a batch larger than the cap returns only survivors', async () => {
    const store = makeStore({ maxRecords: 3 });
    const survivors = await store.insertMany(
      [0, 1, 2, 3, 4].map((n) => ({ n }) as Partial<DbRecord>),
    );
    expect(nums(survivors)).toEqual([2, 3, 4]);       // honest return
    expect(nums(await store.find())).toEqual([2, 3, 4]); // and what's persisted
  });

  test('insertMany within the cap returns the whole batch', async () => {
    const store = makeStore({ maxRecords: 3 });
    const survivors = await store.insertMany([{ n: 0 }, { n: 1 }] as Partial<DbRecord>[]);
    expect(nums(survivors)).toEqual([0, 1]);
  });

  test('insertMany caps existing + batch together (existing dropped, new survive)', async () => {
    const store = makeStore({ maxRecords: 3 });
    await store.insert({ n: 'a' } as Partial<DbRecord>);
    const survivors = await store.insertMany(
      ['b', 'c', 'd'].map((n) => ({ n }) as Partial<DbRecord>),
    );
    expect(nums(survivors)).toEqual(['b', 'c', 'd']);     // all 3 new survive
    expect(nums(await store.find())).toEqual(['b', 'c', 'd']); // 'a' dropped
  });
});

describe('retention — maxAgeMs TTL', () => {
  test('a record older than maxAgeMs is pruned on the next insert', async () => {
    const store = makeStore({ maxAgeMs: 5_000 });
    await store.insert({ n: 'old', createdAt: Date.now() - 10_000 } as Partial<DbRecord>);
    expect(nums(await store.find())).toEqual(['old']);   // survives ITS OWN insert
    await store.insert({ n: 'fresh' } as Partial<DbRecord>);
    expect(nums(await store.find())).toEqual(['fresh']); // 'old' expired
  });

  test('a freshly-inserted record is never expired in its own call (born-expired guard)', async () => {
    const store = makeStore({ maxAgeMs: 5_000 });
    const rec = await store.insert({ n: 'ancient', createdAt: Date.now() - 999_999 } as Partial<DbRecord>);
    expect(rec.n).toBe('ancient');
    expect(nums(await store.find())).toEqual(['ancient']); // persisted despite old ts
  });
});

describe('retention — combined + disabled', () => {
  test('maxAgeMs and maxRecords both apply', async () => {
    const store = makeStore({ maxRecords: 2, maxAgeMs: 5_000 });
    await store.insert({ n: 'stale', createdAt: Date.now() - 10_000 } as Partial<DbRecord>);
    await store.insert({ n: 'a' } as Partial<DbRecord>);
    await store.insert({ n: 'b' } as Partial<DbRecord>);
    await store.insert({ n: 'c' } as Partial<DbRecord>);
    // 'stale' expired by TTL on the first follow-up insert; then maxRecords:2
    // keeps the newest two of a/b/c.
    expect(nums(await store.find())).toEqual(['b', 'c']);
  });

  test('no retention policy keeps everything (unbounded default)', async () => {
    const store = makeStore();
    for (let n = 0; n < 6; n++) await store.insert({ n } as Partial<DbRecord>);
    expect((await store.find()).length).toBe(6);
  });
});
