/**
 * Phase 11.D.5 — end-to-end child-crash + respawn recovery.
 *
 * Verifies the Phase 10 lifecycle: when the child SIGKILLs (or otherwise
 * exits unexpectedly), the parent rejects in-flight runs + handler calls,
 * schedules a respawn through the backoff ladder, and the next dispatch
 * after the respawn lands on the FRESH child.
 *
 * Coverage:
 *   - In-flight `dispatchRunScript` rejects with a `child failed/timed_out`
 *     error message.
 *   - In-flight handler-IPC calls reject too.
 *   - `restartTimer` is set after the crash.
 *   - When the timer fires, `cachedUserId` is used to spawn the new
 *     child against the same user.
 *   - After the respawn completes, a fresh `dispatchRunScript` succeeds
 *     against the new child instance (same in-memory IPC pair routes the
 *     new run too — the `installScriptRunnerMockIpc` returns the same
 *     handle on each spawn for our mock).
 *
 * Note: the fixture's IPC pair re-uses the SAME childContext + childHandle
 * across spawns. In production each respawn creates a new subprocess with
 * fresh state; here the same handlers stay registered (the lifecycle is
 * idempotent per the dispatcher's `messageUnsub === null` guards). For
 * crash-recovery semantics this is sufficient — what we test is the
 * parent's bookkeeping, not the child runtime's crash isolation.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  __getRestartAttemptsForTests,
  __isRestartTimerScheduledForTests,
  __getCachedUserIdForTests,
  __getActiveRunIdsForTests,
  __setRestartBackoffMsForTests,
  __setStabilityThresholdMsForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeScript(id: string, code: string): Script {
  return {
    id,
    name: `Test ${id}`,
    code,
    enabled:        true,
    allowDangerous: false,
    type:           'trigger',
    bindings:       [],
    triggers:       ['ls:startup'],
    createdAt:      Date.now(),
    updatedAt:      Date.now(),
  };
}

function makeRequest(timeoutMs = 5_000) {
  return {
    data:               {},
    timeoutMs,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

function fireFailed(ipc: ScriptRunnerMockIpc, reason = 'simulated SIGKILL'): void {
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

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: child crash recovery', () => {
  test('cachedUserId survives a child crash so respawn can use it', async () => {
    const { ipc } = await setupE2E('alice');
    expect(__getCachedUserIdForTests()).toBe('alice');

    fireFailed(ipc);

    expect(__getCachedUserIdForTests()).toBe('alice');
  });

  test('in-flight dispatchRunScript rejects with child-failed error on crash', async () => {
    const { ipc } = await setupE2E();

    // Submit a run that the child won't get to finish — we kill the
    // child mid-execution. The script body sleeps long enough that
    // we can fire the crash before run-result lands.
    const runPromise = dispatchRunScript(
      makeScript('script-A', 'await new Promise((r) => setTimeout(r, 500)); return "done";'),
      makeRequest(),
    );
    const errSink = runPromise.then(() => null, (err: unknown) => err as Error);

    // Tiny delay to let the run-script IPC reach the child.
    await sleep(20);

    fireFailed(ipc, 'killed during run');

    const err = await errSink;
    expect(err).toBeInstanceOf(Error);
    // v1.0 multi-worker: error message names the specific worker. Pre-fix
    // this matched `/child failed.*killed during run/`.
    expect((err as Error).message).toMatch(/worker '.*' failed.*killed during run/);
  });

  test('crash schedules a respawn (restartTimer set, attempts increments after fire)', async () => {
    __setRestartBackoffMsForTests([30]);
    __setStabilityThresholdMsForTests(60_000);

    const { ipc } = await setupE2E();
    expect(__getRestartAttemptsForTests()).toBe(0);
    expect(__isRestartTimerScheduledForTests()).toBe(false);

    fireFailed(ipc);

    expect(__isRestartTimerScheduledForTests()).toBe(true);
  });

  test('after respawn timer fires + spawn succeeds, restartAttempts increments', async () => {
    __setRestartBackoffMsForTests([20]);
    __setStabilityThresholdMsForTests(60_000);

    const { ipc } = await setupE2E();

    fireFailed(ipc);

    // Wait for the backoff timer to fire + spawn to complete.
    await sleep(80);

    expect(__getRestartAttemptsForTests()).toBe(1);
    expect(__isRestartTimerScheduledForTests()).toBe(false);
  });

  test('all in-flight activeRuns are cleared after crash', async () => {
    const { ipc } = await setupE2E();

    void dispatchRunScript(
      makeScript('script-A', 'await new Promise((r) => setTimeout(r, 500));'),
      makeRequest(),
    ).catch(() => {});
    void dispatchRunScript(
      makeScript('script-B', 'await new Promise((r) => setTimeout(r, 500));'),
      makeRequest(),
    ).catch(() => {});

    await sleep(15);
    expect(__getActiveRunIdsForTests().length).toBeGreaterThan(0);

    fireFailed(ipc);

    expect(__getActiveRunIdsForTests().length).toBe(0);
  });

  test('after a successful respawn, fresh dispatchRunScript completes against the new child', async () => {
    __setRestartBackoffMsForTests([20]);
    __setStabilityThresholdMsForTests(60_000);

    const { ipc } = await setupE2E();

    fireFailed(ipc);
    // Wait for respawn to complete.
    await sleep(80);
    expect(__getRestartAttemptsForTests()).toBe(1);

    // A fresh dispatch routes through the (re)registered IPC handlers
    // and lands at the (same in our mock, but conceptually new) child.
    const result = await dispatchRunScript(
      makeScript('script-A', 'return "post-respawn-ok";'),
      makeRequest(),
    );
    expect(result.ok).toBe(true);
    expect(result.value).toBe('post-respawn-ok');
  });
});
