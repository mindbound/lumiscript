/**
 * Phase 11.B.4 — host-dispatcher handler-IPC tests.
 *
 * Direct coverage for `sendRunHandlerRequest` — the per-fire handler
 * dispatch path used by every parent-side wrapper closure registered with
 * the host's macro / tool / commands / interceptor / DOM-listener / etc.
 * stores. Each fire of a handler:
 *   1. Reads `lastDispatchByScript[scriptId]` — fails with a clear error
 *      if no snapshot is present (handler can't be sourced without one).
 *   2. Generates a per-fire `handler-…`-prefixed runId.
 *   3. Builds a fresh api via `buildScriptAPI` using the snapshot's
 *      Script + permissions + userId.
 *   4. Installs an ephemeral activeRun keyed by the per-fire runId.
 *   5. Sends `RunHandlerRequest` IPC to the child.
 *   6. Awaits the matching `handler-result` arrival.
 *   7. On result: drops the activeRun + pendingHandlerCalls entry +
 *      resolves the Promise with the `HandlerResult` envelope.
 *
 * Lifecycle invariants under test:
 *   - Ephemeral activeRuns DO get deleted on handler-result (different
 *     from script-body activeRuns which persist past run-result).
 *   - lastDispatchByScript is populated on dispatchRunScript and dropped
 *     on unregisterScriptFromChild.
 *   - Concurrent handler fires for the same script get distinct
 *     ephemeral runIds (no overlap) and resolve independently.
 *   - Child crash rejects every pending handler call.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  spawnScriptRunner,
  unregisterScriptFromChild,
  __getActiveRunIdsForTests,
  __hasActiveRunForTests,
  __getActiveRunScriptIdForTests,
  __getScriptBodyRunIdForTests,
  __getPendingHandlerCallIdsForTests,
  __hasLastDispatchSnapshotForTests,
  __sendRunHandlerRequestForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { Script } from '../../src/types/script.js';
import type { RunHandlerRequest } from '../../src/types/script-runner-ipc.js';

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

/** Pull the most recent run-handler IPC out of the child's inbox. */
function lastRunHandlerRequest(ipc: ScriptRunnerMockIpc): RunHandlerRequest | undefined {
  const inbox = ipc.childInbox();
  for (let i = inbox.length - 1; i >= 0; i--) {
    const m = inbox[i] as { type?: string };
    if (m && m.type === 'run-handler') return inbox[i] as RunHandlerRequest;
  }
  return undefined;
}

// ─── lastDispatchByScript snapshot ───────────────────────────────────────────

describe('host-dispatcher: lastDispatchByScript', () => {
  test('starts empty', () => {
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
  });

  test('dispatchRunScript installs the snapshot', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    void ipc;
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(true);
  });

  test('survives run-result (snapshot is for handlers, not the run itself)', async () => {
    const ipc = await setup();
    const runPromise = dispatchRunScript(makeScript('script-A'), makeRequest());
    const runScriptMsg = ipc.childInbox().find(
      (m): m is { type: string; runId: string } =>
        typeof m === 'object' && m !== null && (m as { type?: unknown }).type === 'run-script',
    );
    expect(runScriptMsg).toBeDefined();

    ipc.childContext.send({
      type:       'run-result',
      runId:      runScriptMsg!.runId,
      scriptId:   'script-A',
      ok:         true,
      durationMs: 1,
    });
    await runPromise;

    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(true);
  });

  test('unregisterScriptFromChild drops the snapshot', async () => {
    await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(true);

    unregisterScriptFromChild('script-A');

    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);
  });
});

// ─── sendRunHandlerRequest: missing snapshot ─────────────────────────────────

describe('host-dispatcher: sendRunHandlerRequest snapshot lookup', () => {
  test('rejects when no lastDispatchByScript snapshot is present', async () => {
    await setup();
    expect(__hasLastDispatchSnapshotForTests('script-A')).toBe(false);

    await expect(
      __sendRunHandlerRequestForTests('script-A', 'handler-1', 'macro', [], 5_000),
    ).rejects.toThrow(/no dispatch snapshot for script script-A/);
  });

  test('rejects with clear error when child not running', async () => {
    // No setup() — no IPC pair, no spawn.
    await expect(
      __sendRunHandlerRequestForTests('script-A', 'handler-1', 'macro', [], 5_000),
    ).rejects.toThrow(/child not running/);
  });
});

// ─── sendRunHandlerRequest: ephemeral activeRun lifecycle ───────────────────

describe('host-dispatcher: handler-fire ephemeral activeRun', () => {
  test('installs an ephemeral activeRun keyed by a fresh handler-prefixed runId', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    const scriptBodyRunId = __getScriptBodyRunIdForTests('script-A');
    expect(scriptBodyRunId).toBeDefined();

    const beforeIds = __getActiveRunIdsForTests();
    void __sendRunHandlerRequestForTests('script-A', 'handler-1', 'macro', [], 5_000);

    const afterIds = __getActiveRunIdsForTests();
    const newIds = afterIds.filter((id) => !beforeIds.includes(id));
    expect(newIds.length).toBe(1);
    const handlerRunId = newIds[0]!;

    // Ephemeral runId is distinct from the script-body runId.
    expect(handlerRunId).not.toBe(scriptBodyRunId);
    // Ephemeral runId uses the handler-* prefix per generateHandlerCallId.
    expect(handlerRunId.startsWith('handler-')).toBe(true);
    // Ephemeral activeRun is owned by the same script.
    expect(__getActiveRunScriptIdForTests(handlerRunId)).toBe('script-A');

    void ipc;
  });

  test('emits a `run-handler` IPC to the child carrying the per-fire runId, scriptId, kind, args', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    void __sendRunHandlerRequestForTests('script-A', 'h-42', 'tool', ['arg-x'], 7_000);

    const req = lastRunHandlerRequest(ipc);
    expect(req).toBeDefined();
    expect(req!.scriptId).toBe('script-A');
    expect(req!.handlerId).toBe('h-42');
    expect(req!.kind).toBe('tool');
    expect(req!.args).toEqual(['arg-x']);
    expect(req!.timeoutMs).toBe(7_000);
    expect(req!.runId.startsWith('handler-')).toBe(true);
    // The runId in the IPC matches the activeRuns entry installed parent-side.
    expect(__hasActiveRunForTests(req!.runId)).toBe(true);
  });

  test('handler-result arrival drops both ephemeral activeRun + pendingHandlerCalls + resolves the promise', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    const promise = __sendRunHandlerRequestForTests('script-A', 'h-1', 'macro', [], 5_000);
    const req = lastRunHandlerRequest(ipc)!;
    expect(__hasActiveRunForTests(req.runId)).toBe(true);
    expect(__getPendingHandlerCallIdsForTests()).toContain(req.runId);

    ipc.childContext.send({
      type:       'handler-result',
      runId:      req.runId,
      ok:         true,
      value:      'ok-payload',
      durationMs: 12,
    });

    const result = await promise;
    expect(result.ok).toBe(true);
    expect(result.value).toBe('ok-payload');
    expect(__hasActiveRunForTests(req.runId)).toBe(false);
    expect(__getPendingHandlerCallIdsForTests()).not.toContain(req.runId);
  });

  test('handler-result with ok=false resolves with the error envelope', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    const promise = __sendRunHandlerRequestForTests('script-A', 'h-1', 'macro', [], 5_000);
    const req = lastRunHandlerRequest(ipc)!;

    ipc.childContext.send({
      type:       'handler-result',
      runId:      req.runId,
      ok:         false,
      error:      { name: 'TypeError', message: 'boom' },
      durationMs: 3,
    });

    const result = await promise;
    expect(result.ok).toBe(false);
    expect(result.error?.name).toBe('TypeError');
    expect(result.error?.message).toBe('boom');
  });
});

// ─── Concurrency ─────────────────────────────────────────────────────────────

describe('host-dispatcher: concurrent handler fires', () => {
  test('two concurrent handler fires get distinct ephemeral activeRuns', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    void __sendRunHandlerRequestForTests('script-A', 'h-1', 'macro', [], 5_000);
    void __sendRunHandlerRequestForTests('script-A', 'h-2', 'tool', [], 5_000);

    const handlerRuns = __getActiveRunIdsForTests().filter((id) => id.startsWith('handler-'));
    expect(handlerRuns.length).toBe(2);
    expect(new Set(handlerRuns).size).toBe(2);   // distinct
    void ipc;
  });

  test('concurrent fires resolve independently', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());

    const a = __sendRunHandlerRequestForTests('script-A', 'h-1', 'macro', [], 5_000);
    const inboxAfterA = ipc.childInbox().slice();
    const b = __sendRunHandlerRequestForTests('script-A', 'h-2', 'tool', [], 5_000);
    const inboxAfterB = ipc.childInbox().slice();

    const reqA = inboxAfterA[inboxAfterA.length - 1] as RunHandlerRequest;
    const reqB = inboxAfterB[inboxAfterB.length - 1] as RunHandlerRequest;
    expect(reqA.runId).not.toBe(reqB.runId);

    // Resolve B first, then A — ordering shouldn't matter.
    ipc.childContext.send({ type: 'handler-result', runId: reqB.runId, ok: true, value: 'B', durationMs: 1 });
    ipc.childContext.send({ type: 'handler-result', runId: reqA.runId, ok: true, value: 'A', durationMs: 1 });

    expect((await b).value).toBe('B');
    expect((await a).value).toBe('A');
  });
});

// ─── Crash rejection ─────────────────────────────────────────────────────────

describe('host-dispatcher: handler-IPC under child crash', () => {
  test('failed lifecycle rejects every pending handler call', async () => {
    const ipc = await setup();
    // dispatchRunScript creates a script-body pendingRun that the
    // failed-lifecycle handler also rejects; attach a .catch() to
    // absorb the rejection so Bun doesn't surface it as unhandled.
    void dispatchRunScript(makeScript('script-A'), makeRequest()).catch(() => {});

    const a = __sendRunHandlerRequestForTests('script-A', 'h-1', 'macro', [], 5_000);
    const b = __sendRunHandlerRequestForTests('script-A', 'h-2', 'tool', [], 5_000);

    expect(__getPendingHandlerCallIdsForTests().length).toBe(2);

    // Attach error catchers BEFORE fireLifecycle. The lifecycle handler
    // synchronously rejects every pendingHandlerCalls entry; without a
    // pre-attached handler, Bun's unhandled-rejection detection trips
    // (the `await expect(a).rejects` lower down catches the rejection
    // for assertion purposes but registers the handler too late).
    const errA = a.then(() => null, (err: unknown) => err as Error);
    const errB = b.then(() => null, (err: unknown) => err as Error);

    ipc.fireLifecycle({
      processId: ipc.childHandle.processId,
      entry:     ipc.childHandle.entry,
      kind:      ipc.childHandle.kind,
      key:       ipc.childHandle.key,
      state:     'failed',
      at:        new Date().toISOString(),
      error:     'crash',
    });

    const errAVal = await errA;
    const errBVal = await errB;
    expect(errAVal).toBeInstanceOf(Error);
    expect((errAVal as Error).message).toContain('child failed');
    expect(errBVal).toBeInstanceOf(Error);
    expect((errBVal as Error).message).toContain('child failed');
    expect(__getPendingHandlerCallIdsForTests().length).toBe(0);
  });
});
