/**
 * v0.26.1 — host-dispatcher late-dispatch error diagnostics.
 *
 * When an `api-request` arrives at the parent for a runId whose `activeRuns`
 * entry has been deleted (orphan-by-re-execution OR unregister OR
 * lifecycle-failed), the parent sends back a `RunCompletedError` so the
 * child's pending-map can reject any still-awaiting promise.
 *
 * Pre-v0.26.1 the error message named only the runId — no method, no
 * scriptId, no requestId, no targetHandle. That's enough to know "something
 * fired late" but not enough to identify WHICH call site, in WHICH script,
 * is racing the next dispatchRunScript / unregister. These tests assert the
 * upgraded message format so a single line in the backend log is sufficient
 * to triangulate the leak in user code.
 */

import { describe, test, expect } from 'bun:test';
import type { Script } from '../../src/types/script.js';
import {
  dispatchRunScript,
  spawnScriptRunner,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { ApiProxyRequest, ApiProxyResponse, HandleRef } from '../../src/types/script-runner-ipc.js';

async function setup(): Promise<ScriptRunnerMockIpc> {
  const spindleMock = (globalThis as unknown as { spindle: MockSpindle }).spindle;
  const ipc = installScriptRunnerMockIpc(spindleMock);
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

/** Pull the api-response that the parent sent back for a given requestId. */
function findApiResponse(ipc: ScriptRunnerMockIpc, requestId: string): ApiProxyResponse | undefined {
  return ipc.childInbox().find(
    (m): m is ApiProxyResponse =>
      typeof m === 'object' && m !== null &&
      (m as { type?: unknown }).type === 'api-response' &&
      (m as ApiProxyResponse).requestId === requestId,
  );
}

/** Wait one tick so the parent's async handleApiRequest can run. */
function nextTick(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe('host-dispatcher: RunCompletedError error message', () => {
  test('includes the method, scriptId, runId, and requestId', async () => {
    const ipc = await setup();
    // No dispatchRunScript — activeRuns is empty. Any api-request will
    // hit the late-dispatch branch.
    const req: ApiProxyRequest = {
      type:      'api-request',
      requestId: 'req-late-1',
      runId:     'run-orphan-1',
      scriptId:  'tracker',
      method:    'broadcast.emit',
      args:      ['tracker:state-changed', { source: 'test' }],
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-1');
    expect(response).toBeDefined();
    expect(response!.ok).toBe(false);
    expect(response!.error?.name).toBe('RunCompletedError');

    const msg = response!.error!.message;
    // Critical diagnostic fields that pre-v0.26.1 were missing.
    expect(msg).toContain('"broadcast.emit"');     // method
    expect(msg).toContain('"tracker"');             // scriptId
    expect(msg).toContain('run-orphan-1');          // runId
    expect(msg).toContain('req-late-1');            // requestId
  });

  test('includes targetHandle info when the call was on a handle method', async () => {
    const ipc = await setup();
    const targetHandle: HandleRef = {
      __handleRef: true,
      id:          'handle-collection-99',
      kind:        'Collection',
    };
    const req: ApiProxyRequest = {
      type:      'api-request',
      requestId: 'req-late-2',
      runId:     'run-orphan-2',
      scriptId:  'tracker',
      method:    'insert',
      args:      [{ note: 'late' }],
      targetHandle,
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-2');
    expect(response).toBeDefined();
    expect(response!.error?.name).toBe('RunCompletedError');

    const msg = response!.error!.message;
    expect(msg).toContain('"insert"');
    expect(msg).toContain('targetHandle=Collection/handle-collection-99');
  });

  test('omits targetHandle info when the call was on the top-level api', async () => {
    const ipc = await setup();
    const req: ApiProxyRequest = {
      type:      'api-request',
      requestId: 'req-late-3',
      runId:     'run-orphan-3',
      scriptId:  'tracker',
      method:    'chat.getMessages',
      args:      [{ last: 5 }],
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-3');
    expect(response).toBeDefined();
    const msg = response!.error!.message;
    expect(msg).toContain('"chat.getMessages"');
    expect(msg).not.toContain('targetHandle=');
  });

  test('error name remains RunCompletedError so consumer code can branch on it', async () => {
    const ipc = await setup();
    const req: ApiProxyRequest = {
      type:      'api-request',
      requestId: 'req-late-4',
      runId:     'run-orphan-4',
      scriptId:  'tracker',
      method:    'broadcast.emit',
      args:      ['x'],
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-4');
    expect(response!.error?.name).toBe('RunCompletedError');
  });

  // ─── _runIdSource diagnostic ────────────────────────────────────────────────

  test('includes runIdSource=context when the dispatch resolved via runIdContext', async () => {
    const ipc = await setup();
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-late-5',
      runId:        'run-orphan-5',
      scriptId:     'tracker',
      method:       'db.collection',
      args:         ['rolls', { scope: 'character' }],
      _runIdSource: 'context',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-5');
    expect(response).toBeDefined();
    const msg = response!.error!.message;
    expect(msg).toContain('runIdSource=context');
  });

  test('includes runIdSource=latest when the dispatch resolved via latestRunIdByScript', async () => {
    const ipc = await setup();
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-late-6',
      runId:        'run-orphan-6',
      scriptId:     'tracker',
      method:       'chat.getMessages',
      args:         [],
      _runIdSource: 'latest',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-6');
    expect(response).toBeDefined();
    const msg = response!.error!.message;
    expect(msg).toContain('runIdSource=latest');
  });

  test('includes runIdSource=ctx when the dispatch resolved via the originating proxy', async () => {
    const ipc = await setup();
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-late-7',
      runId:        'run-orphan-7',
      scriptId:     'tracker',
      method:       'insert',
      args:         [{ x: 1 }],
      targetHandle: { __handleRef: true, id: 'h-1', kind: 'Collection' },
      _runIdSource: 'ctx',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-7');
    expect(response).toBeDefined();
    const msg = response!.error!.message;
    expect(msg).toContain('runIdSource=ctx');
    // Targets handle dispatch; both diagnostic fields should appear.
    expect(msg).toContain('targetHandle=Collection/h-1');
  });

  test('omits runIdSource when not supplied (forward-compat with older proxies)', async () => {
    const ipc = await setup();
    const req: ApiProxyRequest = {
      type:      'api-request',
      requestId: 'req-late-8',
      runId:     'run-orphan-8',
      scriptId:  'tracker',
      method:    'broadcast.emit',
      args:      ['evt'],
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-late-8');
    expect(response).toBeDefined();
    const msg = response!.error!.message;
    expect(msg).not.toContain('runIdSource=');
  });
});

// ─── stale-latest fallback routing ──────────────────────────────────────────

describe('host-dispatcher: stale-latest dispatch routing', () => {
  test('runIdSource=latest with a NEWER active run for the script routes to the new run', async () => {
    const ipc = await setup();

    // Run 1: fires + finishes its body. activeRuns[run-1] is alive (kept past
    // run-result via the v0.25.0 lifetime parity fix).
    const script = makeScript('script-A');
    void dispatchRunScript(script, {
      data: {}, timeoutMs: 5_000, grantedPermissions: new Set(), userId: 'test-user',
    });
    const runId1 = lastDispatchedRunId(ipc);
    ipc.childContext.send({
      type:       'run-result',
      runId:      runId1,
      scriptId:   'script-A',
      ok:         true,
      durationMs: 1,
    });
    await nextTick();

    // Run 2: the parent installs run-2's activeRun and DROPS run-1's
    // (orphan-by-re-execution semantics — host-dispatcher.ts:3649).
    void dispatchRunScript(script, {
      data: {}, timeoutMs: 5_000, grantedPermissions: new Set(), userId: 'test-user',
    });
    const runId2 = lastDispatchedRunId(ipc);
    expect(runId1).not.toBe(runId2);

    // Now simulate a stale-latest dispatch arriving from the CHILD with
    // runId=run-1 (the proxy hadn't yet seen run-2's RunScriptRequest, so
    // its `latestRunIdByScript[scriptId]` still pointed to run-1). Pre-fix
    // this would land at the late-dispatch error branch.
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-stale-1',
      runId:        runId1,
      scriptId:     'script-A',
      method:       'broadcast.emit',
      args:         ['x'],
      _runIdSource: 'latest',
    };
    ipc.childContext.send(req);
    await nextTick();

    // Expect SUCCESS (routed to run-2's api). The mock spindle's
    // broadcast.emit isn't an actual api method — but the api method
    // dispatch via `dispatchApiCall` will fail to find `broadcast.emit`
    // on the in-memory api object. Let's instead verify the fallback ran
    // by checking that the response is NOT a RunCompletedError.
    const response = findApiResponse(ipc, 'req-stale-1');
    expect(response).toBeDefined();
    expect(response!.error?.name).not.toBe('RunCompletedError');
  });

  test('runIdSource=latest with NO newer active run still produces RunCompletedError', async () => {
    const ipc = await setup();
    // No dispatchRunScript at all — scriptBodyActiveRunByScript is empty.
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-stale-2',
      runId:        'run-orphan-X',
      scriptId:     'script-A',
      method:       'broadcast.emit',
      args:         ['x'],
      _runIdSource: 'latest',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-stale-2');
    expect(response).toBeDefined();
    expect(response!.error?.name).toBe('RunCompletedError');
    expect(response!.error!.message).toContain('runIdSource=latest');
  });

  test('runIdSource=context does NOT trigger fallback routing (handler-fire scoping must be preserved)', async () => {
    const ipc = await setup();

    // Set up a live activeRun for the script so fallback would have a
    // candidate IF it were attempted. The runId in the request DOES NOT
    // match the active run.
    const script = makeScript('script-A');
    void dispatchRunScript(script, {
      data: {}, timeoutMs: 5_000, grantedPermissions: new Set(), userId: 'test-user',
    });
    await nextTick();

    // A handler-fire-scoped dispatch with a stale runId must NOT be
    // re-routed to the script's body run — that would corrupt the
    // ephemeral handler-fire activeRun's transient handle scoping.
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-stale-3',
      runId:        'handler-stale-1',
      scriptId:     'script-A',
      method:       'broadcast.emit',
      args:         ['x'],
      _runIdSource: 'context',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-stale-3');
    expect(response).toBeDefined();
    expect(response!.error?.name).toBe('RunCompletedError');
    expect(response!.error!.message).toContain('runIdSource=context');
  });

  test('runIdSource=ctx on a PERSISTENT handle (Collection) routes via fallback to script\'s current run', async () => {
    // v0.26.1 — Collection is now persistent (was transient pre-v0.26.1).
    // A handle-method dispatch under runIdSource=ctx with a stale runId
    // should re-route to the script's current active run because the
    // handle resolves via the per-script `persistentHandles` table —
    // which doesn't depend on the dispatch's runId.
    const ipc = await setup();

    const script = makeScript('script-A');
    void dispatchRunScript(script, {
      data: {}, timeoutMs: 5_000, grantedPermissions: new Set(), userId: 'test-user',
    });
    await nextTick();

    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-stale-4',
      runId:        'run-stale-ctx',
      scriptId:     'script-A',
      method:       'insert',
      args:         [{ x: 1 }],
      targetHandle: { __handleRef: true, id: 'h-1', kind: 'Collection' },
      _runIdSource: 'ctx',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-stale-4');
    expect(response).toBeDefined();
    // The dispatch routes to the current run's api. We expect it NOT to be
    // RunCompletedError. The actual call may still fail (handle id 'h-1'
    // isn't registered in this test), but the routing decision is what
    // we're testing here.
    expect(response!.error?.name).not.toBe('RunCompletedError');
  });

  test('runIdSource=ctx on a persistent handle with NO current active run still errors', async () => {
    const ipc = await setup();
    // No dispatchRunScript — the script has no active run on the parent.
    const req: ApiProxyRequest = {
      type:         'api-request',
      requestId:    'req-stale-5',
      runId:        'run-orphan-Y',
      scriptId:     'script-A',
      method:       'insert',
      args:         [{ x: 1 }],
      targetHandle: { __handleRef: true, id: 'h-1', kind: 'Collection' },
      _runIdSource: 'ctx',
    };
    ipc.childContext.send(req);
    await nextTick();

    const response = findApiResponse(ipc, 'req-stale-5');
    expect(response).toBeDefined();
    expect(response!.error?.name).toBe('RunCompletedError');
    expect(response!.error!.message).toContain('runIdSource=ctx');
  });
});
