/**
 * Phase 11.D test fixture — brings up BOTH the parent dispatcher and the
 * child runtime against a shared in-memory IPC pair so end-to-end script
 * dispatch flows can be driven from a single test entry point.
 *
 * Test flow:
 *   1. `installScriptRunnerMockIpc(spindle)` configures the parent's
 *      `spindle.backendProcesses` to return our connected handle.
 *   2. `await spawnScriptRunner(userId)` runs the parent's spawn path
 *      (resolves immediately on the mock; the parent now has `childHandle`
 *      and has wired up `onMessage` + `onLifecycle`).
 *   3. `childEntry(pair.childContext)` runs the child's default export,
 *      wiring up the child's `onMessage` handler + heartbeat interval.
 *   4. From here, `dispatchRunScript(script, request)` returns a Promise
 *      that resolves when the child finishes and sends `run-result` back
 *      through the IPC pipeline.
 *
 * Cleanup is automatic via `afterEach` — clears the child's heartbeat
 * interval to avoid timer leaks across test cases.
 */

import { afterEach } from 'bun:test';
import childEntry from '../../src/script-runner/child-entry.js';
import { spawnScriptRunner } from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from './script-runner-mock-ipc.js';
import type { MockSpindle } from './mock-spindle.js';

export interface E2EFixture {
  ipc:           ScriptRunnerMockIpc;
  childCleanup:  () => void;
}

let activeChildCleanup: (() => void) | null = null;

afterEach(() => {
  if (activeChildCleanup !== null) {
    try { activeChildCleanup(); }
    catch { /* swallow — test is over */ }
    activeChildCleanup = null;
  }
});

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

/**
 * Bring up a connected parent + child runtime. Resolves once
 * `spawnScriptRunner` has returned (parent's childHandle is set, the
 * child's onMessage handler is registered and ready to route).
 */
export async function setupE2E(userId = 'test-user'): Promise<E2EFixture> {
  const ipc = installScriptRunnerMockIpc(getSpindle());

  // Bring up the child BEFORE spawnScriptRunner so the child's onMessage
  // handler is registered when the parent's first IPC arrives. (In
  // production, spawn awaits proc.ready() — our mock resolves spawn
  // immediately, so we need to bootstrap the child first.)
  const childCleanup = childEntry(ipc.childContext);
  activeChildCleanup = childCleanup;

  await spawnScriptRunner(userId);

  return { ipc, childCleanup };
}
