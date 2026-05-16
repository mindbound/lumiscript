/**
 * Phase 11.B.3 — host-dispatcher Phase 10 restart-logic tests.
 *
 * Covers the auto-respawn lifecycle the dispatcher installs around the
 * supervised child:
 *   - `cachedUserId`: stashed on first `spawnScriptRunner`, used by the
 *     scheduled-respawn path to spawn the new child.
 *   - `restartAttempts`: counter that drives backoff-ladder index lookup.
 *     Increments inside the timer callback (when the timer fires) — NOT
 *     when `scheduleRespawn` is called.
 *   - `restartTimer`: scheduled by `scheduleRespawn`, fires the respawn,
 *     cleared on graceful exit (`stopped` / `completed`).
 *   - `stabilityTimer`: set by `spawnScriptRunner` to fire after
 *     `STABILITY_THRESHOLD_MS`; on fire, resets `restartAttempts` to 0.
 *     Cleared on death and on the next spawn.
 *   - `failed` / `timed_out` lifecycle: rejects in-flight `pendingRuns`
 *     and `pendingHandlerCalls`, clears the stability timer, drops the
 *     `childHandle`, schedules a respawn.
 *   - `stopped` / `completed` lifecycle: clears restart + stability
 *     timers, drops `childHandle`. Does NOT schedule a respawn.
 *   - Backoff ladder values match the documented production constants.
 *   - `scheduleRespawn` is no-op when `cachedUserId` is null (rare —
 *     would only happen if the child died before the first spawn).
 *
 * Time-driven tests use `__setRestartBackoffMsForTests` and
 * `__setStabilityThresholdMsForTests` to drive the full failed → respawn
 * → stability cycle in milliseconds rather than minutes.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  spawnScriptRunner,
  __getCachedUserIdForTests,
  __getRestartAttemptsForTests,
  __isRestartTimerScheduledForTests,
  __isStabilityTimerScheduledForTests,
  __getChildHandlePresentForTests,
  __getPendingRunIdsForTests,
  __getProductionRestartBackoffMsForTests,
  __getProductionStabilityThresholdMsForTests,
  __setRestartBackoffMsForTests,
  __setStabilityThresholdMsForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { Script } from '../../src/types/script.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

async function setup(): Promise<ScriptRunnerMockIpc> {
  const ipc = installScriptRunnerMockIpc(getSpindle());
  await spawnScriptRunner('test-user');
  return ipc;
}

function makeScript(id: string): Script {
  return {
    id,
    name: `Test ${id}`,
    code: '/* */',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: ['ls:startup'],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

function makeRequest() {
  return {
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

function fireFailed(ipc: ScriptRunnerMockIpc, reason = 'simulated crash'): void {
  ipc.fireLifecycle({
    processId: ipc.childHandle.processId,
    entry:     ipc.childHandle.entry,
    kind:      ipc.childHandle.kind,
    key:       ipc.childHandle.key,
    state:     'failed',
    at:        new Date().toISOString(),
    error:     reason,
  });
}

function fireTimedOut(ipc: ScriptRunnerMockIpc): void {
  ipc.fireLifecycle({
    processId: ipc.childHandle.processId,
    entry:     ipc.childHandle.entry,
    kind:      ipc.childHandle.kind,
    key:       ipc.childHandle.key,
    state:     'timed_out',
    at:        new Date().toISOString(),
  });
}

function fireGraceful(ipc: ScriptRunnerMockIpc, state: 'stopped' | 'completed'): void {
  ipc.fireLifecycle({
    processId: ipc.childHandle.processId,
    entry:     ipc.childHandle.entry,
    kind:      ipc.childHandle.kind,
    key:       ipc.childHandle.key,
    state,
    at:        new Date().toISOString(),
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Documented production constants ────────────────────────────────────────

describe('host-dispatcher: Phase 10 production constants', () => {
  test('RESTART_BACKOFF_MS matches the documented ladder', () => {
    expect(__getProductionRestartBackoffMsForTests()).toEqual(
      [1_000, 2_000, 4_000, 8_000, 16_000, 30_000],
    );
  });

  test('STABILITY_THRESHOLD_MS matches the documented value (60s)', () => {
    expect(__getProductionStabilityThresholdMsForTests()).toBe(60_000);
  });
});

// ─── cachedUserId behaviour ──────────────────────────────────────────────────

describe('host-dispatcher: cachedUserId', () => {
  test('starts null', () => {
    expect(__getCachedUserIdForTests()).toBeNull();
  });

  test('first spawnScriptRunner stashes the userId', async () => {
    installScriptRunnerMockIpc(getSpindle());
    await spawnScriptRunner('alice');
    expect(__getCachedUserIdForTests()).toBe('alice');
  });

  test('survives a child crash so respawn can use it', async () => {
    const ipc = await setup();
    expect(__getCachedUserIdForTests()).toBe('test-user');
    fireFailed(ipc);
    expect(__getCachedUserIdForTests()).toBe('test-user');
  });

  test('latest spawn caller wins (multi-user operator-mode shape)', async () => {
    installScriptRunnerMockIpc(getSpindle());
    await spawnScriptRunner('alice');
    expect(__getCachedUserIdForTests()).toBe('alice');
    await spawnScriptRunner('bob');
    expect(__getCachedUserIdForTests()).toBe('bob');
  });
});

// ─── failed / timed_out: rejection + respawn schedule ───────────────────────

describe('host-dispatcher: failed / timed_out lifecycle', () => {
  test('rejects in-flight pendingRuns with a clear error', async () => {
    const ipc = await setup();
    const runPromise = dispatchRunScript(makeScript('script-A'), makeRequest());
    expect(__getPendingRunIdsForTests().length).toBe(1);

    fireFailed(ipc, 'kill -9 simulated');

    // v1.0 multi-worker: error message names the specific worker. Pre-fix
    // this matched `/child failed.*kill -9 simulated/` — the message used
    // to say `child failed (...)` regardless of worker.
    await expect(runPromise).rejects.toThrow(/worker '.*' failed.*kill -9 simulated/);
    expect(__getPendingRunIdsForTests().length).toBe(0);
  });

  test('drops childHandle on failed', async () => {
    const ipc = await setup();
    expect(__getChildHandlePresentForTests()).toBe(true);
    fireFailed(ipc);
    expect(__getChildHandlePresentForTests()).toBe(false);
  });

  test('drops childHandle on timed_out', async () => {
    const ipc = await setup();
    expect(__getChildHandlePresentForTests()).toBe(true);
    fireTimedOut(ipc);
    expect(__getChildHandlePresentForTests()).toBe(false);
  });

  test('failed schedules a respawn (restartTimer set)', async () => {
    // Override to a sane delay for the test's lifetime — we don't want
    // to actually wait the production 1s. 50ms is enough.
    __setRestartBackoffMsForTests([50]);
    const ipc = await setup();
    expect(__isRestartTimerScheduledForTests()).toBe(false);

    fireFailed(ipc);
    expect(__isRestartTimerScheduledForTests()).toBe(true);
  });

  test('timed_out schedules a respawn (restartTimer set)', async () => {
    __setRestartBackoffMsForTests([50]);
    const ipc = await setup();
    fireTimedOut(ipc);
    expect(__isRestartTimerScheduledForTests()).toBe(true);
  });

  test('clears stabilityTimer on failed (so it doesn\'t reset attempts mid-backoff)', async () => {
    __setStabilityThresholdMsForTests(60_000);   // production-ish — won't fire during test
    const ipc = await setup();
    expect(__isStabilityTimerScheduledForTests()).toBe(true);

    fireFailed(ipc);
    expect(__isStabilityTimerScheduledForTests()).toBe(false);
  });

  test('respawn timer fires + spawn succeeds → restartAttempts increments', async () => {
    __setRestartBackoffMsForTests([30]);
    __setStabilityThresholdMsForTests(60_000);
    const ipc = await setup();
    expect(__getRestartAttemptsForTests()).toBe(0);

    fireFailed(ipc);
    // Wait for backoff timer to fire + respawn to complete.
    await sleep(80);
    expect(__getRestartAttemptsForTests()).toBe(1);
    expect(__isRestartTimerScheduledForTests()).toBe(false);
    expect(__getChildHandlePresentForTests()).toBe(true);
  });
});

// ─── stopped / completed: graceful, no respawn ──────────────────────────────

describe('host-dispatcher: stopped / completed lifecycle', () => {
  test('stopped clears restartTimer (e.g. shutdown raced with a pending respawn)', async () => {
    __setRestartBackoffMsForTests([10_000]);   // long enough we observe the cancel
    const ipc = await setup();
    fireFailed(ipc);
    expect(__isRestartTimerScheduledForTests()).toBe(true);

    fireGraceful(ipc, 'stopped');

    expect(__isRestartTimerScheduledForTests()).toBe(false);
  });

  test('completed clears restartTimer', async () => {
    __setRestartBackoffMsForTests([10_000]);
    const ipc = await setup();
    fireFailed(ipc);
    expect(__isRestartTimerScheduledForTests()).toBe(true);

    fireGraceful(ipc, 'completed');

    expect(__isRestartTimerScheduledForTests()).toBe(false);
  });

  test('stopped clears stabilityTimer', async () => {
    __setStabilityThresholdMsForTests(60_000);
    const ipc = await setup();
    expect(__isStabilityTimerScheduledForTests()).toBe(true);

    fireGraceful(ipc, 'stopped');

    expect(__isStabilityTimerScheduledForTests()).toBe(false);
  });

  test('stopped does NOT schedule a respawn', async () => {
    __setRestartBackoffMsForTests([10_000]);
    const ipc = await setup();
    fireGraceful(ipc, 'stopped');
    expect(__isRestartTimerScheduledForTests()).toBe(false);
  });

  test('stopped drops childHandle', async () => {
    const ipc = await setup();
    expect(__getChildHandlePresentForTests()).toBe(true);
    fireGraceful(ipc, 'stopped');
    expect(__getChildHandlePresentForTests()).toBe(false);
  });
});

// ─── Idempotency ─────────────────────────────────────────────────────────────

describe('host-dispatcher: scheduleRespawn idempotency', () => {
  test('a second failed event while a respawn is already scheduled is a silent no-op', async () => {
    __setRestartBackoffMsForTests([10_000]);
    const ipc = await setup();
    fireFailed(ipc, 'first');
    expect(__isRestartTimerScheduledForTests()).toBe(true);
    const attemptsAfterFirst = __getRestartAttemptsForTests();   // still 0 — increments on fire

    fireFailed(ipc, 'second-while-pending');

    // Timer still scheduled, attempts unchanged — the duplicate trigger
    // was logged and dropped.
    expect(__isRestartTimerScheduledForTests()).toBe(true);
    expect(__getRestartAttemptsForTests()).toBe(attemptsAfterFirst);
  });

  test('failed BEFORE any spawn (cachedUserId null) does not schedule a respawn', () => {
    __setRestartBackoffMsForTests([10_000]);
    const ipc = installScriptRunnerMockIpc(getSpindle());
    expect(__getCachedUserIdForTests()).toBeNull();

    // Fire failed without ever having spawned. scheduleRespawn's guard
    // bails on null cachedUserId.
    fireFailed(ipc);

    expect(__isRestartTimerScheduledForTests()).toBe(false);
  });
});

// ─── Stability reset ─────────────────────────────────────────────────────────

describe('host-dispatcher: stability reset', () => {
  test('stability timer fires + restartAttempts > 0 → resets to 0', async () => {
    __setRestartBackoffMsForTests([20]);
    __setStabilityThresholdMsForTests(60);   // short threshold for test
    const ipc = await setup();

    // Drive one crash + respawn to bump restartAttempts to 1.
    fireFailed(ipc);
    await sleep(50);   // wait for backoff timer + respawn
    expect(__getRestartAttemptsForTests()).toBe(1);
    expect(__isStabilityTimerScheduledForTests()).toBe(true);

    // Wait past the stability threshold.
    await sleep(80);

    expect(__getRestartAttemptsForTests()).toBe(0);
    expect(__isStabilityTimerScheduledForTests()).toBe(false);
  });

  test('stability timer no-ops when restartAttempts is already 0', async () => {
    __setStabilityThresholdMsForTests(50);
    await setup();
    expect(__getRestartAttemptsForTests()).toBe(0);

    await sleep(80);

    // Still 0 — no log spam, no error path triggered.
    expect(__getRestartAttemptsForTests()).toBe(0);
    expect(__isStabilityTimerScheduledForTests()).toBe(false);
  });
});
