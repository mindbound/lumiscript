/**
 * Real-child IPC benchmark (via the in-memory bring-up):
 *   A. dispatch latency — parent wall-clock per dispatchRunScript of a no-op
 *      script vs the child-reported durationMs (delta ~ IPC + scheduling);
 *   B. no-batch tax — a script doing K sequential vs K concurrent api.* calls
 *      (C6-03: every api.* is one round-trip, dependent calls serialize);
 *   C. proxy accumulation — child heapUsed across N dispatches of one script
 *      (C6-01: per-run proxies retained until script-unregister).
 *
 *   bun run bench/ipc/ipc.bench.ts
 *
 * FIDELITY (R1): in-memory IPC, NOT a real subprocess pipe — absolute latency
 * is UNDER-measured (no kernel context-switch / structured-clone-over-pipe);
 * trustworthy for relative/algorithmic shape. Memory is combined-process (R4).
 */

import { setupBenchChild } from '../_harness/e2e-bootstrap.js';
import { dispatchRunScript, queryRunnerStats } from '../../src/script-runner/host-dispatcher.js';
import { _activeProxyCountForTests } from '../../src/script-runner/child-entry.js';
import { Histogram, timeAsync } from '../_harness/timer.js';
import { renderTable, fmtMs, fmtMb } from '../_harness/report.js';
import type { Script } from '../../src/types/script.js';

// Capture Bun.gc before bring-up so post-GC retained-heap sampling is possible.
const bunGc = (globalThis as { Bun?: { gc?: (force: boolean) => void } }).Bun?.gc;

const PERMS = ['chat_mutation', 'chats', 'characters', 'generation', 'tools', 'world_books', 'databanks', 'memories', 'ephemeral_storage'];

function script(id: string, code: string): Script {
  return { id, name: id, code, enabled: true, allowDangerous: false, type: 'trigger', bindings: [], triggers: [], createdAt: Date.now(), updatedAt: Date.now() };
}
function request() {
  return { data: {}, timeoutMs: 10_000, grantedPermissions: new Set(PERMS), userId: 'bench-user' };
}

async function main(): Promise<void> {
  const child = await setupBenchChild();
  try {
    console.log('\n=== IPC (in-memory bring-up; R1: latency floor, R4: combined-process heap) ===\n');

    // A. dispatch latency — no-op script, parent wall-clock vs child durationMs.
    const noop = script('noop', 'return 1;');
    const sanity = await dispatchRunScript(noop, request());
    if (!sanity.ok) throw new Error(`no-op dispatch failed: ${JSON.stringify(sanity)}`);
    const parentHist = new Histogram();
    const childHist = new Histogram();
    for (let i = 0; i < 20; i++) await dispatchRunScript(noop, request());
    for (let i = 0; i < 200; i++) {
      const t0 = performance.now();
      const r = await dispatchRunScript(noop, request());
      parentHist.record(performance.now() - t0);
      const d = (r as { durationMs?: number }).durationMs;
      if (typeof d === 'number') childHist.record(d);
    }
    console.log('A. dispatch latency — no-op script (return 1):');
    console.log(renderTable(
      ['measured', 'p50', 'p95', 'p99', 'mean'],
      [
        ['parent wall-clock', fmtMs(parentHist.percentile(50)), fmtMs(parentHist.percentile(95)), fmtMs(parentHist.percentile(99)), fmtMs(parentHist.mean)],
        ['child durationMs', fmtMs(childHist.percentile(50)), fmtMs(childHist.percentile(95)), fmtMs(childHist.percentile(99)), fmtMs(childHist.mean)],
      ],
    ));

    // B. no-batch tax — K sequential vs K concurrent api.chats.getActive() round-trips.
    const K = 20;
    const seq = script('seq', `let n=0; for (let i=0;i<${K};i++){ try { await api.chats.getActive(); } catch {} n++; } return n;`);
    const con = script('con', `const ps=[]; for (let i=0;i<${K};i++) ps.push(api.chats.getActive().catch(()=>{})); await Promise.all(ps); return ${K};`);
    const one = script('one', `try { await api.chats.getActive(); } catch {} return 1;`);
    const tSeq = new Histogram(), tCon = new Histogram(), tOne = new Histogram();
    for (let i = 0; i < 5; i++) { await dispatchRunScript(seq, request()); await dispatchRunScript(con, request()); await dispatchRunScript(one, request()); }
    for (let i = 0; i < 50; i++) {
      await timeAsync(tSeq, () => dispatchRunScript(seq, request()));
      await timeAsync(tCon, () => dispatchRunScript(con, request()));
      await timeAsync(tOne, () => dispatchRunScript(one, request()));
    }
    const perCall = (tSeq.mean - tOne.mean) / (K - 1);
    console.log(`\nB. no-batch tax — ${K} api.chats.getActive() round-trips per dispatch (C6-03):`);
    console.log(renderTable(
      ['pattern', 'mean dispatch'],
      [
        ['1 call', fmtMs(tOne.mean)],
        [`${K} sequential`, fmtMs(tSeq.mean)],
        [`${K} concurrent`, fmtMs(tCon.mean)],
        ['-> per-call round-trip (from seq)', fmtMs(perCall)],
      ],
    ));

    // C. proxy accumulation — activeProxies.size (definitive cardinality via the
    //    child-entry test seam, not noisy heap) across N dispatches of one script (C6-01).
    const leak = script('leak', 'return 1;');
    const N = 4000, STEP = 1000;
    const rowsC: string[][] = [];
    let baseHeap = 0;
    for (let i = 0; i <= N; i++) {
      if (i % STEP === 0) {
        if (bunGc) bunGc(true);
        const s = await queryRunnerStats();
        const heap = s ? s.heapUsed : 0;
        if (i === 0) baseHeap = heap;
        rowsC.push([`${i}`, `${_activeProxyCountForTests()}`, fmtMb(heap), fmtMb(heap - baseHeap)]);
      }
      if (i < N) await dispatchRunScript(leak, request());
    }
    console.log('\nC. proxy accumulation — activeProxies.size across N no-op dispatches of ONE script (C6-01):');
    console.log(renderTable(['dispatches', 'activeProxies.size', 'heapUsed', 'heap delta'], rowsC));
    console.log('   (proxies keyed by runId, freed only at script-unregister; size == dispatch count would confirm the leak)');

    console.log('\n[ok] IPC bench complete.\n');
  } finally {
    child.cleanup();
  }
}

await main();
