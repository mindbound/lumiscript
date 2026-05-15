/**
 * Phase C2 — multi-worker activation tests.
 *
 * Covers the assignment + pool-sizing logic promoted from C1 stubs:
 *   - `getKnownWorkerKeys()` derives from the `workerCount` setting,
 *     clamps to `[1, 16]`, returns `['worker-1', ..., 'worker-N']`.
 *   - `getWorkerForScript()` distributes via least-loaded with
 *     lower-index tiebreak; assignments are sticky across pool-size
 *     changes (an existing assignment is preserved).
 *   - `rebalanceWorkerPool()` is idempotent when no over-cap workers
 *     exist (decrease handler verified at unit level — over-cap
 *     spawn-and-shutdown is verified via routing tests once the
 *     multi-worker mock IPC lands).
 *
 * These are pure-logic unit tests — no IPC, no mock spindle, no spawn
 * machinery. The `setWorkerCountReader` setter is the entry point that
 * lets tests configure the pool size deterministically without setting
 * up a real settings store.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  __resetForTests,
  __getWorkerForScriptForTests,
  __releaseScriptFromWorkerForTests,
  __getKnownWorkerKeysForTests,
  __getAssignedScriptCountForTests,
  __sendBroadcastFireToChildForTests,
  setWorkerCountReader,
  rebalanceWorkerPool,
  spawnScriptRunner,
  shutdownScriptRunner,
  unregisterScriptFromChild,
  DEFAULT_WORKER_KEY,
} from '../../src/script-runner/host-dispatcher.js';
import {
  installMultiWorkerMockIpc,
  type MultiWorkerMockIpc,
} from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

describe('Phase C2 — getKnownWorkerKeys (settings + clamping)', () => {
  beforeEach(() => {
    __resetForTests();
    setWorkerCountReader(() => 1);  // restore the production default after each test
  });

  test('workerCount=1 → [worker-1]', () => {
    setWorkerCountReader(() => 1);
    expect(__getKnownWorkerKeysForTests()).toEqual(['worker-1']);
  });

  test('workerCount=2 → [worker-1, worker-2]', () => {
    setWorkerCountReader(() => 2);
    expect(__getKnownWorkerKeysForTests()).toEqual(['worker-1', 'worker-2']);
  });

  test('workerCount=4 → [worker-1, worker-2, worker-3, worker-4]', () => {
    setWorkerCountReader(() => 4);
    expect(__getKnownWorkerKeysForTests()).toEqual([
      'worker-1', 'worker-2', 'worker-3', 'worker-4',
    ]);
  });

  test('workerCount=16 → all 16 workers (host cap, not clamped)', () => {
    setWorkerCountReader(() => 16);
    expect(__getKnownWorkerKeysForTests()).toHaveLength(16);
    expect(__getKnownWorkerKeysForTests()[0]).toBe('worker-1');
    expect(__getKnownWorkerKeysForTests()[15]).toBe('worker-16');
  });

  test('workerCount=20 clamps to 16 (host MAX_BACKEND_PROCESSES cap)', () => {
    setWorkerCountReader(() => 20);
    expect(__getKnownWorkerKeysForTests()).toHaveLength(16);
  });

  test('workerCount=0 clamps to 1 (minimum)', () => {
    setWorkerCountReader(() => 0);
    expect(__getKnownWorkerKeysForTests()).toEqual(['worker-1']);
  });

  test('workerCount=-5 clamps to 1 (minimum, defensive)', () => {
    setWorkerCountReader(() => -5);
    expect(__getKnownWorkerKeysForTests()).toEqual(['worker-1']);
  });

  test('non-integer workerCount=2.7 floors to 2', () => {
    setWorkerCountReader(() => 2.7);
    expect(__getKnownWorkerKeysForTests()).toEqual(['worker-1', 'worker-2']);
  });
});

describe('Phase C2 — getWorkerForScript (least-loaded distribution)', () => {
  beforeEach(() => {
    __resetForTests();
    setWorkerCountReader(() => 1);
  });

  test('workerCount=1 — all scripts land on worker-1', () => {
    setWorkerCountReader(() => 1);
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('script-B')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('script-C')).toBe('worker-1');
  });

  test('workerCount=2 — two scripts distribute across two workers', () => {
    setWorkerCountReader(() => 2);
    // First assignment: tie at 0/0, lower-index wins → worker-1
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
    // Second assignment: worker-1 has 1, worker-2 has 0 → worker-2 wins
    expect(__getWorkerForScriptForTests('script-B')).toBe('worker-2');
  });

  test('workerCount=2 — three scripts: worker-1 gets 2, worker-2 gets 1 (lower-index tiebreak)', () => {
    setWorkerCountReader(() => 2);
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('script-B')).toBe('worker-2');
    // Third assignment: 1/1 tie, lower-index wins → worker-1
    expect(__getWorkerForScriptForTests('script-C')).toBe('worker-1');
  });

  test('workerCount=4 — round-robin-like distribution for 4 scripts', () => {
    setWorkerCountReader(() => 4);
    expect(__getWorkerForScriptForTests('s1')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('s2')).toBe('worker-2');
    expect(__getWorkerForScriptForTests('s3')).toBe('worker-3');
    expect(__getWorkerForScriptForTests('s4')).toBe('worker-4');
    // Fifth wraps to worker-1 (all at 1, lower-index tiebreak)
    expect(__getWorkerForScriptForTests('s5')).toBe('worker-1');
  });

  test('assignment is sticky across pool-size increase', () => {
    setWorkerCountReader(() => 1);
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
    // Grow pool — script-A's assignment is preserved.
    setWorkerCountReader(() => 4);
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
    // New scripts distribute across the new pool. With script-A on worker-1
    // (count 1) and workers 2-4 at 0, next assignment picks worker-2.
    expect(__getWorkerForScriptForTests('script-B')).toBe('worker-2');
  });

  test('release-then-relookup re-evaluates least-loaded', () => {
    setWorkerCountReader(() => 2);
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('script-B')).toBe('worker-2');
    // Release A; counts become worker-1=0, worker-2=1. New script lands on worker-1.
    __releaseScriptFromWorkerForTests('script-A');
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-1');
  });

  test('DEFAULT_WORKER_KEY stays "worker-1" regardless of pool size', () => {
    setWorkerCountReader(() => 4);
    expect(DEFAULT_WORKER_KEY).toBe('worker-1');
  });
});

describe('Phase C2 — rebalanceWorkerPool (no spawned workers)', () => {
  beforeEach(() => {
    __resetForTests();
    setWorkerCountReader(() => 1);
  });

  test('no-op when no over-cap workers exist', async () => {
    setWorkerCountReader(() => 4);
    // No workers spawned yet — nothing to rebalance.
    await expect(rebalanceWorkerPool()).resolves.toBeUndefined();
  });

  test('no-op when configured pool size equals zero spawned workers (idle state)', async () => {
    setWorkerCountReader(() => 2);
    // Decrease the configured pool. Nothing to do since nothing is spawned.
    setWorkerCountReader(() => 1);
    await expect(rebalanceWorkerPool()).resolves.toBeUndefined();
  });

  // rebalance-with-actual-over-cap-workers tests live in the
  // cross-worker IPC routing describe block below, since they require
  // the multi-worker mock to actually populate childHandles.
});

describe('Phase C2-polish — cross-worker IPC routing', () => {
  beforeEach(() => {
    __resetForTests();
  });

  async function setupTwoWorkers(): Promise<MultiWorkerMockIpc> {
    setWorkerCountReader(() => 2);
    const mock = installMultiWorkerMockIpc(getSpindle(), {
      workerKeys: ['worker-1', 'worker-2'],
    });
    await spawnScriptRunner('test-user', 'worker-1');
    await spawnScriptRunner('test-user', 'worker-2');
    return mock;
  }

  // Type-erased helper: `childHandle.stop` is declared as `() => Promise<void>`
  // on `BackendProcessHandle`, but at runtime the multi-worker mock wraps
  // each one in `mock(() => Promise.resolve())` so call counts are
  // observable. The cast lets tests assert on `.mock.calls.length` without
  // re-typing the field globally.
  function stopCallCount(handle: { stop: unknown }): number {
    const stop = handle.stop as { mock?: { calls?: unknown[] } };
    return stop.mock?.calls?.length ?? 0;
  }

  test('sendBroadcastFireToChild routes by subscribing script\'s worker', async () => {
    const mock = await setupTwoWorkers();

    // Force script-A onto worker-2. First, fill worker-1 with a decoy so
    // the least-loaded tiebreak picks worker-2 for script-A.
    __getWorkerForScriptForTests('decoy');                              // worker-1: 1, worker-2: 0
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-2');  // routes to worker-2

    __sendBroadcastFireToChildForTests({
      type:     'broadcast-fire',
      scriptId: 'script-A',
      event:    'test-event',
      payload:  { hello: 'world' },
      subId:    'sub-A-test-event',
    });

    const w1Inbox = mock.pairForKey('worker-1').childInbox();
    const w2Inbox = mock.pairForKey('worker-2').childInbox();

    const broadcastForA = (m: unknown): boolean =>
      typeof m === 'object' && m !== null &&
      (m as { type?: string }).type === 'broadcast-fire' &&
      (m as { scriptId?: string }).scriptId === 'script-A';

    expect(w2Inbox.some(broadcastForA)).toBe(true);
    expect(w1Inbox.some(broadcastForA)).toBe(false);
  });

  test('unregisterScriptFromChild routes script-unregister IPC to script\'s worker', async () => {
    const mock = await setupTwoWorkers();

    __getWorkerForScriptForTests('decoy');                              // worker-1: 1
    expect(__getWorkerForScriptForTests('script-A')).toBe('worker-2');

    unregisterScriptFromChild('script-A');

    const w1Inbox = mock.pairForKey('worker-1').childInbox();
    const w2Inbox = mock.pairForKey('worker-2').childInbox();

    const unregForA = (m: unknown): boolean =>
      typeof m === 'object' && m !== null &&
      (m as { type?: string }).type === 'script-unregister' &&
      (m as { scriptId?: string }).scriptId === 'script-A';

    expect(w2Inbox.some(unregForA)).toBe(true);
    expect(w1Inbox.some(unregForA)).toBe(false);
  });

  test('shutdownScriptRunner stops every spawned worker, not just the default', async () => {
    const mock = await setupTwoWorkers();

    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(0);

    await shutdownScriptRunner();

    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(1);
  });

  test('rebalanceWorkerPool shuts down over-cap workers and releases their scripts', async () => {
    // Set up a 4-worker pool, spawn all 4, distribute 4 scripts evenly.
    setWorkerCountReader(() => 4);
    const mock = installMultiWorkerMockIpc(getSpindle(), {
      workerKeys: ['worker-1', 'worker-2', 'worker-3', 'worker-4'],
    });
    await spawnScriptRunner('test-user', 'worker-1');
    await spawnScriptRunner('test-user', 'worker-2');
    await spawnScriptRunner('test-user', 'worker-3');
    await spawnScriptRunner('test-user', 'worker-4');

    expect(__getWorkerForScriptForTests('s1')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('s2')).toBe('worker-2');
    expect(__getWorkerForScriptForTests('s3')).toBe('worker-3');
    expect(__getWorkerForScriptForTests('s4')).toBe('worker-4');
    expect(__getAssignedScriptCountForTests()).toBe(4);

    // Decrease pool size to 2; trigger rebalance.
    setWorkerCountReader(() => 2);
    await rebalanceWorkerPool();

    // Workers 3 + 4 should have been stopped (over-cap).
    expect(stopCallCount(mock.pairForKey('worker-3').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(1);

    // Workers 1 + 2 should be untouched (in-pool).
    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(0);

    // s3 + s4 should have been released; s1 + s2 still assigned.
    expect(__getAssignedScriptCountForTests()).toBe(2);

    // Re-lookup of s3 picks from the new (smaller) pool.
    const reassignedS3 = __getWorkerForScriptForTests('s3');
    expect(['worker-1', 'worker-2']).toContain(reassignedS3);
  });
});
