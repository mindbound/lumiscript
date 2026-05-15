/**
 * Phase E — host-dispatcher eviction tests.
 *
 * Covers the periodic sweep's two policies:
 *   - Idle eviction: workers whose last activity is older than the
 *     `workerIdleTimeoutMs` threshold get torn down (subject to
 *     `MIN_WARM_WORKERS` floor + active-run exemption).
 *   - Memory eviction: when total RSS across spawned workers exceeds
 *     `workerMemoryCeilingMb`, LRU eligible workers are evicted until
 *     the total drops under the ceiling.
 *
 * Uses `installMultiWorkerMockIpc` (Phase C2-polish) which auto-replies
 * to `diagnostic-stats-request` IPCs with a per-worker configurable RSS
 * value — lets these tests drive memory pressure deterministically.
 *
 * The sweep is exported (`evictionSweep`) so tests trigger it manually
 * rather than waiting for the 60 s interval. `setEvictionConfigReader`
 * lets tests pin the thresholds without setting up a real settings store.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  __resetForTests,
  __getWorkerForScriptForTests,
  __setWorkerLastActivityForTests,
  __getWorkerLastActivityForTests,
  __getAssignedScriptCountForTests,
  setWorkerCountReader,
  setEvictionConfigReader,
  evictionSweep,
  spawnScriptRunner,
} from '../../src/script-runner/host-dispatcher.js';
import {
  installMultiWorkerMockIpc,
  type MultiWorkerMockIpc,
} from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

function stopCallCount(handle: { stop: unknown }): number {
  const stop = handle.stop as { mock?: { calls?: unknown[] } };
  return stop.mock?.calls?.length ?? 0;
}

describe('Phase E — idle eviction', () => {
  let mock: MultiWorkerMockIpc;

  beforeEach(async () => {
    __resetForTests();
    setWorkerCountReader(() => 4);
    // Aggressive idle threshold (100 ms) + relaxed memory ceiling so memory
    // eviction never fires from these tests.
    setEvictionConfigReader(() => ({
      idleTimeoutMs:      100,
      memoryCeilingBytes: 100 * 1024 * 1024 * 1024,  // 100 GB
    }));
    mock = installMultiWorkerMockIpc(getSpindle(), {
      workerKeys: ['worker-1', 'worker-2', 'worker-3', 'worker-4'],
    });
    await spawnScriptRunner('test-user', 'worker-1');
    await spawnScriptRunner('test-user', 'worker-2');
    await spawnScriptRunner('test-user', 'worker-3');
    await spawnScriptRunner('test-user', 'worker-4');
  });

  test('worker idle past threshold gets evicted', async () => {
    // Make worker-4 look like it last did work 1 second ago (well past
    // the 100 ms threshold).
    __setWorkerLastActivityForTests('worker-4', Date.now() - 1_000);

    await evictionSweep();

    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(1);
  });

  test('workers within threshold are NOT evicted', async () => {
    // All workers were spawned just now — their lastActivity is fresh.
    await evictionSweep();

    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-3').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(0);
  });

  test('min-warm-workers floor (1) prevents evicting the last warm worker', async () => {
    // Make ALL workers idle past the threshold.
    const ancient = Date.now() - 1_000;
    __setWorkerLastActivityForTests('worker-1', ancient);
    __setWorkerLastActivityForTests('worker-2', ancient);
    __setWorkerLastActivityForTests('worker-3', ancient);
    __setWorkerLastActivityForTests('worker-4', ancient);

    await evictionSweep();

    // 3 should evict; 1 must stay (the warm floor).
    const stopCounts = [
      stopCallCount(mock.pairForKey('worker-1').childHandle),
      stopCallCount(mock.pairForKey('worker-2').childHandle),
      stopCallCount(mock.pairForKey('worker-3').childHandle),
      stopCallCount(mock.pairForKey('worker-4').childHandle),
    ];
    expect(stopCounts.reduce((a, b) => a + b, 0)).toBe(3);
  });

  test('eviction releases scripts assigned to the evicted worker', async () => {
    // Assign a script to each worker (4 scripts across 4 workers via
    // least-loaded distribution).
    expect(__getWorkerForScriptForTests('s1')).toBe('worker-1');
    expect(__getWorkerForScriptForTests('s2')).toBe('worker-2');
    expect(__getWorkerForScriptForTests('s3')).toBe('worker-3');
    expect(__getWorkerForScriptForTests('s4')).toBe('worker-4');
    expect(__getAssignedScriptCountForTests()).toBe(4);

    // Make worker-4 idle.
    __setWorkerLastActivityForTests('worker-4', Date.now() - 1_000);

    await evictionSweep();

    // worker-4 evicted; s4 should have been released.
    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(1);
    expect(__getAssignedScriptCountForTests()).toBe(3);

    // Re-lookup of s4 reassigns it. Note: worker-4 is still in the
    // configured pool (only the *process* was killed; the *pool slot*
    // remains). Least-loaded sees worker-4 has 0 scripts (it was the
    // emptiest now that s4 was released), so it can land back there;
    // the next dispatch will spawn-on-demand for that worker. The
    // important behaviour is that the assignment count came back to 4
    // (the released script got a fresh assignment), not WHICH worker
    // got picked.
    const reassignedS4 = __getWorkerForScriptForTests('s4');
    expect(['worker-1', 'worker-2', 'worker-3', 'worker-4']).toContain(reassignedS4);
    expect(__getAssignedScriptCountForTests()).toBe(4);
  });

  test('floor-binding ordering — youngest idle survives when all 4 are idle past threshold', async () => {
    // Mark all 4 idle, with different ages. Floor=1 means exactly 3 evict.
    // Sweep sorts oldest-first; youngest-idle survives.
    __setWorkerLastActivityForTests('worker-1', Date.now() - 5_000);  // oldest
    __setWorkerLastActivityForTests('worker-2', Date.now() - 200);    // youngest
    __setWorkerLastActivityForTests('worker-3', Date.now() - 1_000);  // middle
    __setWorkerLastActivityForTests('worker-4', Date.now() - 3_000);  // 2nd oldest

    await evictionSweep();

    // worker-2 (youngest) survives by virtue of being last in the sort
    // order; the floor stops the sweep before it reaches her.
    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-3').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(0);
  });
});

describe('Phase E — memory eviction', () => {
  let mock: MultiWorkerMockIpc;

  beforeEach(async () => {
    __resetForTests();
    setWorkerCountReader(() => 4);
    // Long idle threshold (1 hour) so idle eviction never fires.
    // 250 MB ceiling.
    setEvictionConfigReader(() => ({
      idleTimeoutMs:      60 * 60 * 1000,
      memoryCeilingBytes: 250 * 1024 * 1024,
    }));
    mock = installMultiWorkerMockIpc(getSpindle(), {
      workerKeys: ['worker-1', 'worker-2', 'worker-3', 'worker-4'],
    });
    await spawnScriptRunner('test-user', 'worker-1');
    await spawnScriptRunner('test-user', 'worker-2');
    await spawnScriptRunner('test-user', 'worker-3');
    await spawnScriptRunner('test-user', 'worker-4');
  });

  test('no eviction when total memory is under ceiling', async () => {
    mock.setWorkerMemoryBytes('worker-1',  50 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-2',  50 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-3',  50 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-4',  50 * 1024 * 1024);
    // Total: 200 MB, under 250 MB ceiling

    await evictionSweep();

    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-3').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(0);
  });

  test('LRU-evicts when total memory exceeds ceiling', async () => {
    mock.setWorkerMemoryBytes('worker-1', 100 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-2', 100 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-3', 100 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-4', 100 * 1024 * 1024);
    // Total: 400 MB, over 250 MB ceiling — need to evict ~2 workers.

    // Make worker-1 the LRU (oldest activity).
    __setWorkerLastActivityForTests('worker-1', Date.now() - 5_000);
    __setWorkerLastActivityForTests('worker-2', Date.now() - 4_000);
    __setWorkerLastActivityForTests('worker-3', Date.now() - 3_000);
    __setWorkerLastActivityForTests('worker-4', Date.now() - 2_000);

    await evictionSweep();

    // Should evict the oldest 2 (worker-1, worker-2). 4 - 2 = 2 alive, well above min-warm floor.
    // After: total = 200 MB ≤ 250 MB, sweep stops.
    expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(1);
    expect(stopCallCount(mock.pairForKey('worker-3').childHandle)).toBe(0);
    expect(stopCallCount(mock.pairForKey('worker-4').childHandle)).toBe(0);
  });

  test('memory eviction respects min-warm-workers floor', async () => {
    // Every worker very memory-heavy.
    mock.setWorkerMemoryBytes('worker-1', 500 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-2', 500 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-3', 500 * 1024 * 1024);
    mock.setWorkerMemoryBytes('worker-4', 500 * 1024 * 1024);
    // Total: 2000 MB; even after evicting 3 we'd be at 500 MB > 250 MB.

    const ancient = Date.now() - 60_000;
    __setWorkerLastActivityForTests('worker-1', ancient);
    __setWorkerLastActivityForTests('worker-2', ancient);
    __setWorkerLastActivityForTests('worker-3', ancient);
    __setWorkerLastActivityForTests('worker-4', ancient);

    await evictionSweep();

    // Must evict 3 (4 - MIN_WARM_WORKERS = 4 - 1 = 3 evictable).
    const stopCounts = [
      stopCallCount(mock.pairForKey('worker-1').childHandle),
      stopCallCount(mock.pairForKey('worker-2').childHandle),
      stopCallCount(mock.pairForKey('worker-3').childHandle),
      stopCallCount(mock.pairForKey('worker-4').childHandle),
    ];
    expect(stopCounts.reduce((a, b) => a + b, 0)).toBe(3);
  });
});

describe('Phase E — activity bumps', () => {
  beforeEach(() => {
    __resetForTests();
    setWorkerCountReader(() => 2);
  });

  test('spawn sets initial activity timestamp', async () => {
    installMultiWorkerMockIpc(getSpindle(), { workerKeys: ['worker-1'] });
    const before = Date.now();
    await spawnScriptRunner('test-user', 'worker-1');
    const after  = Date.now();

    const activity = __getWorkerLastActivityForTests('worker-1');
    expect(activity).not.toBeNull();
    expect(activity!).toBeGreaterThanOrEqual(before);
    expect(activity!).toBeLessThanOrEqual(after);
  });
});
