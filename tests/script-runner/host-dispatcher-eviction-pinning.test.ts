/**
 * v1.0.0-rc.3+ — eviction-pinning policy tests.
 *
 * Verifies that workers hosting scripts with active long-lived
 * registrations (tools, macros, drawer tabs, RPC endpoints, etc.) are
 * exempt from both idle and memory eviction. The motivating scenario:
 *
 *   1. Script "Roll Dice" registers a tool via api.tools.register on
 *      `ls:startup`.
 *   2. Script body returns; worker has no in-flight runs.
 *   3. 30 min pass with no api.* activity.
 *   4. WITHOUT pinning: idle sweep evicts the worker → next tool
 *      invocation throws "worker not running" at
 *      `host-dispatcher.ts:sendRunHandlerRequest` → tool silently
 *      stops working until user manually re-toggles the script.
 *   5. WITH pinning (this test suite covers the WITH case): idle sweep
 *      sees the tool registration via `scriptHasPinningRegistrations`,
 *      skips eviction, bumps `totalEvictionsSkippedByPin` telemetry,
 *      worker stays alive.
 *
 * Each test installs a fake registration directly via the relevant
 * store's `addTool` / `addMacro` / etc. — no need to dispatch a real
 * script body; the registry state IS what the eviction sweep checks.
 *
 * Also verifies the new diagnostics fields (`pinnedByRegistrations`,
 * `pinningScripts`) are populated correctly in `getWorkerPoolDiagnostics()`.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  __resetForTests,
  __getWorkerForScriptForTests,
  __setWorkerLastActivityForTests,
  setWorkerCountReader,
  setEvictionConfigReader,
  evictionSweep,
  spawnScriptRunner,
  getWorkerPoolDiagnostics,
} from '../../src/script-runner/host-dispatcher.js';
import { addTool, clearAll as clearToolStore }       from '../../src/engine/tool-store.js';
import { addMacro, clearAll as clearMacroStore }     from '../../src/engine/macro-store.js';
import { addEndpoint, clearAll as clearRpcStore }    from '../../src/engine/rpc-store.js';
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

describe('v1.0.0-rc.3 — eviction pinning by active registrations', () => {
  let mock: MultiWorkerMockIpc;

  beforeEach(async () => {
    __resetForTests();
    clearToolStore();
    clearMacroStore();
    clearRpcStore();
    setWorkerCountReader(() => 4);
    setEvictionConfigReader(() => ({
      idleTimeoutMs:      100,                      // aggressive — instant idle eviction
      memoryCeilingBytes: 100 * 1024 * 1024 * 1024, // 100 GB — memory eviction inactive
    }));
    mock = installMultiWorkerMockIpc(getSpindle(), {
      workerKeys: ['worker-1', 'worker-2', 'worker-3', 'worker-4'],
    });
    await spawnScriptRunner('test-user', 'worker-1');
    await spawnScriptRunner('test-user', 'worker-2');
    await spawnScriptRunner('test-user', 'worker-3');
    await spawnScriptRunner('test-user', 'worker-4');
  });

  describe('idle eviction pass', () => {
    test('worker hosting a script with a registered tool is exempt from idle eviction', async () => {
      // Assign s1 to worker-1 (least-loaded picks worker-1 since all are
      // empty), then install a fake tool registration owned by s1.
      const w = __getWorkerForScriptForTests('s1');
      expect(w).toBe('worker-1');
      addTool({
        name:            'fake.roll-dice',
        displayName:     'Roll Dice',
        description:     'fake registration for pinning test',
        councilEligible: false,
        handler:         () => 'rolled',
        scriptId:        's1',
        scriptName:      'Roll Dice',
      });

      // Mark worker-1 as ancient → would normally trigger idle eviction.
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);

      await evictionSweep();

      // worker-1 must NOT have been stopped.
      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
      // Telemetry counter should reflect the skip.
      const diag = getWorkerPoolDiagnostics();
      expect(diag.evictionTelemetry.totalEvictionsSkippedByPin).toBeGreaterThanOrEqual(1);
      expect(diag.evictionTelemetry.totalEvictions).toBe(0);
    });

    test('pure-trigger script (no registrations) does not pin its worker', async () => {
      // Assign s1 to worker-1 with no registrations.
      __getWorkerForScriptForTests('s1');
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);

      await evictionSweep();

      // worker-1 IS evicted; no skip counter bump.
      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(1);
      const diag = getWorkerPoolDiagnostics();
      expect(diag.evictionTelemetry.totalEvictionsSkippedByPin).toBe(0);
    });

    test('macro registration pins the hosting worker', async () => {
      __getWorkerForScriptForTests('s1');
      addMacro({
        name:        'rolldice',
        description: 'fake macro for pinning test',
        category:    'general',
        mode:        'pull',
        handler:     () => '6',
        scriptId:    's1',
        scriptName:  'Roll Dice',
      });
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);

      await evictionSweep();

      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    });

    test('RPC endpoint registration pins the hosting worker', async () => {
      __getWorkerForScriptForTests('s1');
      addEndpoint({
        endpoint:   'lumiscript.test.endpoint',
        mode:       'handle',
        scriptId:   's1',
        scriptName: 'Test Script',
      });
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);

      await evictionSweep();

      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    });

    test('pinned worker stays alive while non-pinned workers are evicted in the same sweep', async () => {
      // s1 → worker-1 (pinned via tool), s2 → worker-2 (no registrations),
      // s3 → worker-3 (no registrations). All three are aged past the
      // threshold; floor=1 means we can evict up to 3.
      __getWorkerForScriptForTests('s1');
      __getWorkerForScriptForTests('s2');
      __getWorkerForScriptForTests('s3');
      addTool({
        name:            'fake.tool',
        displayName:     'Tool',
        description:     'pinning',
        councilEligible: false,
        handler:         () => 'x',
        scriptId:        's1',
        scriptName:      'S1',
      });

      const ancient = Date.now() - 10_000;
      __setWorkerLastActivityForTests('worker-1', ancient);
      __setWorkerLastActivityForTests('worker-2', ancient);
      __setWorkerLastActivityForTests('worker-3', ancient);
      __setWorkerLastActivityForTests('worker-4', ancient);

      await evictionSweep();

      // worker-1 stays; among 2/3/4, exactly 3 evict (floor=1). Which 3
      // doesn't matter — the important thing is worker-1 isn't one of them.
      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
      const stopCounts = [
        stopCallCount(mock.pairForKey('worker-2').childHandle),
        stopCallCount(mock.pairForKey('worker-3').childHandle),
        stopCallCount(mock.pairForKey('worker-4').childHandle),
      ];
      expect(stopCounts.reduce((a, b) => a + b, 0)).toBe(3);
    });

    test('clearing the registration makes the worker evictable again', async () => {
      __getWorkerForScriptForTests('s1');
      addTool({
        name:            'fake.tool',
        displayName:     'Tool',
        description:     'pinning',
        councilEligible: false,
        handler:         () => 'x',
        scriptId:        's1',
        scriptName:      'S1',
      });
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);

      await evictionSweep();
      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);

      // Clear the tool — simulates `api.tools.unregister` or
      // `clearByScriptId` on script disable.
      clearToolStore();
      // Re-arm the stale activity timestamp (the failed eviction didn't
      // touch it, but for clarity we reset it).
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);

      await evictionSweep();
      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(1);
    });
  });

  describe('memory eviction pass', () => {
    beforeEach(() => {
      setEvictionConfigReader(() => ({
        idleTimeoutMs:      60 * 60 * 1000,         // 1h — idle pass inactive
        memoryCeilingBytes: 250 * 1024 * 1024,      // 250 MB ceiling
      }));
    });

    test('pinned worker is not evicted to satisfy memory ceiling', async () => {
      __getWorkerForScriptForTests('s1');
      addTool({
        name:            'fake.tool',
        displayName:     'Tool',
        description:     'pinning',
        councilEligible: false,
        handler:         () => 'x',
        scriptId:        's1',
        scriptName:      'S1',
      });
      // All 4 workers report 100 MB → total 400 MB, 150 MB over ceiling.
      // Without pinning, the LRU-oldest 2 would evict. With pinning,
      // worker-1 is exempt; the other 3 are candidates.
      mock.setWorkerMemoryBytes('worker-1', 100 * 1024 * 1024);
      mock.setWorkerMemoryBytes('worker-2', 100 * 1024 * 1024);
      mock.setWorkerMemoryBytes('worker-3', 100 * 1024 * 1024);
      mock.setWorkerMemoryBytes('worker-4', 100 * 1024 * 1024);
      // Make worker-1 the LRU-oldest so it would be the first eviction
      // candidate without pinning.
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);
      __setWorkerLastActivityForTests('worker-2', Date.now() - 1_000);
      __setWorkerLastActivityForTests('worker-3', Date.now() - 1_000);
      __setWorkerLastActivityForTests('worker-4', Date.now() - 1_000);

      await evictionSweep();

      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
    });
  });

  describe('diagnostics surface', () => {
    test('getWorkerPoolDiagnostics reports pinning info', async () => {
      __getWorkerForScriptForTests('s1');
      addTool({
        name:            'fake.tool',
        displayName:     'Tool',
        description:     'pinning',
        councilEligible: false,
        handler:         () => 'x',
        scriptId:        's1',
        scriptName:      'S1',
      });
      addMacro({
        name:        'm1',
        description: 'fake',
        category:    'general',
        mode:        'pull',
        handler:     () => 'v',
        scriptId:    's1',
        scriptName:  'S1',
      });

      const diag = getWorkerPoolDiagnostics();
      const w1 = diag.workers.find((w) => w.workerKey === 'worker-1');
      expect(w1).toBeDefined();
      expect(w1!.pinnedByRegistrations).toBe(true);
      expect(w1!.pinningScripts).toHaveLength(1);
      expect(w1!.pinningScripts[0]!.scriptId).toBe('s1');
      expect(w1!.pinningScripts[0]!.counts.tools).toBe(1);
      expect(w1!.pinningScripts[0]!.counts.macros).toBe(1);
      expect(w1!.pinningScripts[0]!.counts.total).toBe(2);

      // The other workers have no assignments → no pinning scripts.
      const w2 = diag.workers.find((w) => w.workerKey === 'worker-2');
      expect(w2!.pinnedByRegistrations).toBe(false);
      expect(w2!.pinningScripts).toHaveLength(0);
    });

    test('totalEvictionsSkippedByPin increments per pinned worker per sweep pass', async () => {
      __getWorkerForScriptForTests('s1');
      __getWorkerForScriptForTests('s2');
      addTool({
        name:            't1',
        displayName:     'T1',
        description:     'pinning',
        councilEligible: false,
        handler:         () => 'x',
        scriptId:        's1',
        scriptName:      'S1',
      });
      addTool({
        name:            't2',
        displayName:     'T2',
        description:     'pinning',
        councilEligible: false,
        handler:         () => 'x',
        scriptId:        's2',
        scriptName:      'S2',
      });

      // The pinning census runs imperatively inside the candidate-build
      // loop and bumps the counter once per pinned worker per sweep
      // pass. With 2 pinned workers in the idle pass + the memory pass
      // returning early under the very-relaxed ceiling, exactly 2
      // bumps are expected per sweep.
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);
      __setWorkerLastActivityForTests('worker-2', Date.now() - 10_000);

      await evictionSweep();

      expect(stopCallCount(mock.pairForKey('worker-1').childHandle)).toBe(0);
      expect(stopCallCount(mock.pairForKey('worker-2').childHandle)).toBe(0);
      const diag = getWorkerPoolDiagnostics();
      expect(diag.evictionTelemetry.totalEvictions).toBe(0);
      // Idle pass contributes 2 bumps (worker-1 + worker-2 both pinned).
      // Memory pass returns early under the relaxed ceiling, so no
      // additional bumps.
      expect(diag.evictionTelemetry.totalEvictionsSkippedByPin).toBe(2);

      // Second sweep — counter is monotonic, should be 4 now.
      __setWorkerLastActivityForTests('worker-1', Date.now() - 10_000);
      __setWorkerLastActivityForTests('worker-2', Date.now() - 10_000);
      await evictionSweep();
      const diag2 = getWorkerPoolDiagnostics();
      expect(diag2.evictionTelemetry.totalEvictionsSkippedByPin).toBe(4);
    });
  });
});
