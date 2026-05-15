/**
 * Phase 11.B.1 — host-dispatcher active-run lifetime tests.
 *
 * Direct coverage for the script-body activeRun parity fix that aligns
 * parent-side activeRuns lifetime with the Phase 9d.3 child-side proxy
 * lifetime (`__resetForTests`-resettable invariants):
 *
 *   1. `dispatchRunScript` installs an activeRun keyed by `runId` AND
 *      tracks it under `scriptBodyActiveRunByScript[scriptId]`.
 *   2. `handleRunResult` resolves the pendingRun but does NOT delete the
 *      activeRun — the script's setInterval / setTimeout / .then chains
 *      keep dispatching past `run-result`.
 *   3. The next `dispatchRunScript` for the same scriptId drops the
 *      previous run's activeRun (orphan-by-re-execution semantics).
 *   4. Different scriptIds don't interfere with each other.
 *   5. `unregisterScriptFromChild` sweeps activeRuns owned by that script
 *      AND clears the per-script tracker entry.
 *   6. Child-crash lifecycle (`failed` / `timed_out`) clears ALL activeRuns
 *      and ALL per-script tracker entries.
 *   7. `dispatchRunScript` before spawn rejects cleanly.
 *   8. Send-failure path rolls back the per-script tracker entry.
 */

import { describe, test, expect } from 'bun:test';
import type { Script } from '../../src/types/script.js';
import type { RunScriptRequest } from '../../src/types/script-runner-ipc.js';
import {
  dispatchRunScript,
  spawnScriptRunner,
  unregisterScriptFromChild,
  __getActiveRunIdsForTests,
  __hasActiveRunForTests,
  __getActiveRunScriptIdForTests,
  __getScriptBodyRunIdForTests,
  __getPendingRunIdsForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeScript(id: string, overrides: Partial<Script> = {}): Script {
  return {
    id,
    name: `Test Script ${id}`,
    code: '/* test body */',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: ['ls:startup'],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...overrides,
  };
}

function makeRequest() {
  return {
    data:               { __event: 'ls:startup' },
    timeoutMs:          5_000,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

/**
 * Install the mock IPC pair and spawn the child. Returns the IPC controller
 * for tests to drive child→parent messages and lifecycle events.
 *
 * Note: `spawnScriptRunner` reaches `spindle.backendProcesses.spawn()` which
 * resolves immediately on the mock (no real ready watchdog). After this
 * helper returns, `dispatchRunScript` is callable.
 */
async function setup(): Promise<ScriptRunnerMockIpc> {
  const spindleMock = (globalThis as unknown as { spindle: MockSpindle }).spindle;
  const ipc = installScriptRunnerMockIpc(spindleMock);
  await spawnScriptRunner('test-user');
  return ipc;
}

/**
 * Pull the runId out of the most recent `run-script` message in the child's
 * inbox. dispatchRunScript generates the runId internally; this is the test-
 * side way to capture it.
 */
function lastDispatchedRunId(ipc: ScriptRunnerMockIpc): string {
  const inbox = ipc.childInbox();
  for (let i = inbox.length - 1; i >= 0; i--) {
    const msg = inbox[i] as { type?: string; runId?: string };
    if (msg && msg.type === 'run-script' && typeof msg.runId === 'string') {
      return msg.runId;
    }
  }
  throw new Error('no run-script message in child inbox');
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('host-dispatcher: script-body activeRun lifetime', () => {
  test('dispatchRunScript installs activeRun + per-script tracker entry', async () => {
    const ipc = await setup();
    const script = makeScript('script-A');
    void dispatchRunScript(script, makeRequest());

    const runId = lastDispatchedRunId(ipc);

    expect(__hasActiveRunForTests(runId)).toBe(true);
    expect(__getActiveRunScriptIdForTests(runId)).toBe('script-A');
    expect(__getScriptBodyRunIdForTests('script-A')).toBe(runId);
    expect(__getPendingRunIdsForTests()).toContain(runId);
  });

  test('child run-script IPC carries the same runId installed in activeRuns', async () => {
    const ipc = await setup();
    const script = makeScript('script-A');
    void dispatchRunScript(script, makeRequest());

    // dispatchRunScript sends `broadcast-clear` first (broadcast-subscription
    // wipe at run-start, per `lumiscript_broadcast_bus.md`), then `run-script`.
    // Find the run-script message rather than indexing [0].
    const runScriptMsg = ipc.childInbox().find(
      (m): m is RunScriptRequest =>
        typeof m === 'object' && m !== null &&
        (m as { type?: unknown }).type === 'run-script',
    );
    expect(runScriptMsg).toBeDefined();
    expect(runScriptMsg!.scriptId).toBe('script-A');
    expect(__hasActiveRunForTests(runScriptMsg!.runId)).toBe(true);
  });

  test('handleRunResult resolves pendingRun but PRESERVES activeRun (lifetime parity fix)', async () => {
    const ipc = await setup();
    const script = makeScript('script-A');
    const runPromise = dispatchRunScript(script, makeRequest());
    const runId = lastDispatchedRunId(ipc);

    // Inject run-result from child
    ipc.childContext.send({
      type:       'run-result',
      runId,
      scriptId:   'script-A',
      ok:         true,
      durationMs: 5,
    });

    const result = await runPromise;
    expect(result.ok).toBe(true);

    // pendingRun is gone, but activeRun stays alive so post-run-result
    // setInterval / .then dispatches still resolve their runId at the parent.
    expect(__getPendingRunIdsForTests()).not.toContain(runId);
    expect(__hasActiveRunForTests(runId)).toBe(true);
    expect(__getScriptBodyRunIdForTests('script-A')).toBe(runId);
  });

  test('dispatchRunScript for the SAME scriptId drops the previous activeRun', async () => {
    const ipc = await setup();
    const script = makeScript('script-A');

    void dispatchRunScript(script, makeRequest());
    const runId1 = lastDispatchedRunId(ipc);

    // Don't send run-result — leave run 1 still "active" in the test sense.
    void dispatchRunScript(script, makeRequest());
    const runId2 = lastDispatchedRunId(ipc);

    expect(runId1).not.toBe(runId2);
    expect(__hasActiveRunForTests(runId1)).toBe(false);
    expect(__hasActiveRunForTests(runId2)).toBe(true);
    expect(__getScriptBodyRunIdForTests('script-A')).toBe(runId2);
  });

  test('dispatchRunScript for a DIFFERENT scriptId leaves the other run alone', async () => {
    const ipc = await setup();
    const scriptA = makeScript('script-A');
    const scriptB = makeScript('script-B');

    void dispatchRunScript(scriptA, makeRequest());
    const runIdA = lastDispatchedRunId(ipc);

    void dispatchRunScript(scriptB, makeRequest());
    const runIdB = lastDispatchedRunId(ipc);

    expect(__hasActiveRunForTests(runIdA)).toBe(true);
    expect(__hasActiveRunForTests(runIdB)).toBe(true);
    expect(__getScriptBodyRunIdForTests('script-A')).toBe(runIdA);
    expect(__getScriptBodyRunIdForTests('script-B')).toBe(runIdB);
    expect(__getActiveRunIdsForTests().length).toBe(2);
  });

  test('unregisterScriptFromChild drops activeRuns owned by that script + clears tracker', async () => {
    const ipc = await setup();
    const script = makeScript('script-A');
    const runPromise = dispatchRunScript(script, makeRequest());
    const runId = lastDispatchedRunId(ipc);

    ipc.childContext.send({
      type:       'run-result',
      runId,
      scriptId:   'script-A',
      ok:         true,
      durationMs: 1,
    });
    await runPromise;

    // activeRun is alive past run-result (lifetime parity); unregister drops it.
    expect(__hasActiveRunForTests(runId)).toBe(true);

    unregisterScriptFromChild('script-A');

    expect(__hasActiveRunForTests(runId)).toBe(false);
    expect(__getScriptBodyRunIdForTests('script-A')).toBeUndefined();
  });

  test('unregisterScriptFromChild for one script leaves another script\'s runs untouched', async () => {
    const ipc = await setup();
    const scriptA = makeScript('script-A');
    const scriptB = makeScript('script-B');

    void dispatchRunScript(scriptA, makeRequest());
    const runIdA = lastDispatchedRunId(ipc);
    void dispatchRunScript(scriptB, makeRequest());
    const runIdB = lastDispatchedRunId(ipc);

    unregisterScriptFromChild('script-A');

    expect(__hasActiveRunForTests(runIdA)).toBe(false);
    expect(__hasActiveRunForTests(runIdB)).toBe(true);
    expect(__getScriptBodyRunIdForTests('script-A')).toBeUndefined();
    expect(__getScriptBodyRunIdForTests('script-B')).toBe(runIdB);
  });

  test('child failed lifecycle clears ALL activeRuns + ALL per-script tracker entries', async () => {
    const ipc = await setup();
    const scriptA = makeScript('script-A');
    const scriptB = makeScript('script-B');

    void dispatchRunScript(scriptA, makeRequest()).catch(() => {});
    void dispatchRunScript(scriptB, makeRequest()).catch(() => {});

    expect(__getActiveRunIdsForTests().length).toBe(2);

    ipc.fireLifecycle({
      processId: ipc.childHandle.processId,
      entry:     ipc.childHandle.entry,
      kind:      ipc.childHandle.kind,
      key:       ipc.childHandle.key,
      state:     'failed',
      at:        new Date().toISOString(),
      error:     'simulated child crash',
    });

    expect(__getActiveRunIdsForTests().length).toBe(0);
    expect(__getScriptBodyRunIdForTests('script-A')).toBeUndefined();
    expect(__getScriptBodyRunIdForTests('script-B')).toBeUndefined();
  });

  test('child timed_out lifecycle clears ALL activeRuns + ALL per-script tracker entries', async () => {
    const ipc = await setup();
    const scriptA = makeScript('script-A');

    void dispatchRunScript(scriptA, makeRequest()).catch(() => {});
    expect(__getActiveRunIdsForTests().length).toBe(1);

    ipc.fireLifecycle({
      processId: ipc.childHandle.processId,
      entry:     ipc.childHandle.entry,
      kind:      ipc.childHandle.kind,
      key:       ipc.childHandle.key,
      state:     'timed_out',
      at:        new Date().toISOString(),
    });

    expect(__getActiveRunIdsForTests().length).toBe(0);
    expect(__getScriptBodyRunIdForTests('script-A')).toBeUndefined();
  });

  test('dispatchRunScript before spawn rejects with a clear error', async () => {
    // No setup() — child is not spawned.
    const script = makeScript('script-A');
    await expect(dispatchRunScript(script, makeRequest()))
      // Phase C1 (v1.0 runtime-isolation): error message now names the
      // worker that wasn't spawned.
      .rejects.toThrow(/worker '.*' not spawned/);
  });

  test('send failure rolls back the per-script tracker entry', async () => {
    const ipc = await setup();
    const script = makeScript('script-A');

    // Force handle.send to throw on the next call.
    const originalSend = ipc.childHandle.send;
    ipc.childHandle.send = () => { throw new Error('simulated channel down'); };

    await expect(dispatchRunScript(script, makeRequest()))
      .rejects.toThrow(/simulated channel down/);

    // After rollback the script should not be tracked, and no activeRun
    // should reference it.
    expect(__getScriptBodyRunIdForTests('script-A')).toBeUndefined();
    const remaining = __getActiveRunIdsForTests();
    for (const runId of remaining) {
      expect(__getActiveRunScriptIdForTests(runId)).not.toBe('script-A');
    }

    // Restore for hygiene (the next test gets a fresh IPC anyway, but
    // this keeps the suite's intent local and explicit).
    ipc.childHandle.send = originalSend;
  });

  test('rollback only fires when the latest tracker entry matches — earlier-script entries survive', async () => {
    const ipc = await setup();
    const scriptA = makeScript('script-A');
    const scriptB = makeScript('script-B');

    // Successful dispatch for A.
    void dispatchRunScript(scriptA, makeRequest());
    const runIdA = lastDispatchedRunId(ipc);
    expect(__getScriptBodyRunIdForTests('script-A')).toBe(runIdA);

    // Force send failure for B.
    ipc.childHandle.send = () => { throw new Error('simulated channel down'); };
    await expect(dispatchRunScript(scriptB, makeRequest()))
      .rejects.toThrow(/simulated channel down/);

    // A's tracker entry survives.
    expect(__getScriptBodyRunIdForTests('script-A')).toBe(runIdA);
    expect(__getScriptBodyRunIdForTests('script-B')).toBeUndefined();
  });
});
