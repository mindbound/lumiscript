/**
 * Bench-local bring-up of the parent dispatcher + child runtime over the
 * in-memory IPC pair — the same three steps as `tests/_infra/script-runner-fixture.ts`
 * (`setupE2E`), but WITHOUT the `bun:test` `afterEach` cleanup, so it can run
 * from a plain `bun run bench/...` script. Cleanup is manual via `cleanup()`.
 *
 * FIDELITY (R1): the child runs IN-PROCESS over an in-memory channel, not a
 * real Bun subprocess pipe — IPC latencies exclude kernel context-switch /
 * structured-clone-over-pipe, and memory readings are the COMBINED process
 * footprint (parent + child + harness). Good for relative/algorithmic
 * regressions + leak TREND; validate absolute numbers against the real app.
 */

import childEntry from '../../src/script-runner/child-entry.js';
import {
  spawnScriptRunner,
  __resetForTests as resetHostDispatcher,
} from '../../src/script-runner/host-dispatcher.js';
import { __resetForTests as resetApiProxy } from '../../src/script-runner/api-proxy.js';
import {
  _clearActiveProxiesForTests,
  _resetUnhandledRejectionRateStateForTests,
} from '../../src/script-runner/child-entry.js';
import { createMockSpindle } from '../../tests/_infra/mock-spindle.js';
import {
  installScriptRunnerMockIpc,
  type ScriptRunnerMockIpc,
} from '../../tests/_infra/script-runner-mock-ipc.js';

export interface BenchChild {
  ipc:     ScriptRunnerMockIpc;
  cleanup: () => void;
}

/** Reset the script-runner module singletons (mirrors the relevant subset of
 *  tests/_infra/setup.ts's beforeEach) so a bring-up starts/ends clean. */
function resetScriptRunnerState(): void {
  resetHostDispatcher();
  resetApiProxy();
  _clearActiveProxiesForTests();
  _resetUnhandledRejectionRateStateForTests();
}

/**
 * Install a fresh mock spindle on globalThis, bring up the child runtime, and
 * wire the parent. Resolves once `spawnScriptRunner` returns (childHandle set,
 * child `onMessage` registered, ready to route). Call `cleanup()` when done —
 * it clears the child heartbeat interval and resets module state.
 */
export async function setupBenchChild(userId = 'bench-user'): Promise<BenchChild> {
  resetScriptRunnerState();

  const spindle = createMockSpindle();
  (globalThis as { spindle?: unknown }).spindle = spindle;

  const ipc = installScriptRunnerMockIpc(spindle);

  // Child BEFORE spawn so its onMessage handler is registered when the
  // parent's first IPC arrives (mirrors setupE2E's ordering note).
  const childCleanup = childEntry(ipc.childContext);
  await spawnScriptRunner(userId);

  return {
    ipc,
    cleanup: () => {
      try {
        childCleanup();
      } catch {
        /* child already torn down — ignore */
      }
      resetScriptRunnerState();
    },
  };
}
