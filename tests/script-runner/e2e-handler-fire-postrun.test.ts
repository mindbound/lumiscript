/**
 * Phase 11.D.2 — end-to-end registered-handler fire after run-result.
 *
 * Tests the Phase 9d.3 lifecycle: a script registers a macro / tool /
 * etc. handler, the script body completes, run-result lands, and SOMETIME
 * LATER the host fires the handler. The fire path:
 *
 *   1. Parent fires `sendRunHandlerRequest` (in production: from a
 *      wrapper closure registered with the canonical macro/tool/etc.
 *      store).
 *   2. Parent reads `lastDispatchByScript[scriptId]`, builds an api,
 *      installs an ephemeral activeRun keyed by a per-fire `handler-…`
 *      runId.
 *   3. Sends `run-handler` IPC to child.
 *   4. Child's `handleRunHandlerRequest` looks up the closure in
 *      `handlerClosures` and runs it inside `runIdContext.run(runId, …)`.
 *   5. Closure executes; any api.* calls inside dispatch with the
 *      per-fire runId (via `runIdContext.getStore()`).
 *   6. Closure returns; child sends `handler-result`.
 *   7. Parent drops the ephemeral activeRun + pendingHandlerCall; the
 *     `sendRunHandlerRequest` Promise resolves.
 *
 * Coverage:
 *   - Handler closure registered during the run survives `run-result`
 *     and fires correctly later.
 *   - The handler's return value reaches the wrapper via handler-result.
 *   - Throwing inside the handler lands as `ok: false`.
 *   - api.* calls inside the handler use the per-fire runId, not the
 *     originating script-body runId.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  __sendRunHandlerRequestForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { RegisterHandler, ApiProxyRequest } from '../../src/types/script-runner-ipc.js';
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

function makeRequest() {
  return {
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

function findRegisterHandler(
  ipc: ScriptRunnerMockIpc,
  kind: RegisterHandler['kind'],
  name?: string,
): RegisterHandler | undefined {
  return ipc.parentInbox().find(
    (m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as RegisterHandler;
      if (r.type !== 'register-handler') return false;
      if (r.kind !== kind) return false;
      if (name !== undefined && (r as { name?: string }).name !== name) return false;
      return true;
    },
  );
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: registered-handler fire after run-result', () => {
  test('macro handler closure registered in run survives run-result + fires correctly', async () => {
    const { ipc } = await setupE2E();

    const code = `
      api.macros.register('my-macro', {
        description: 'fired post-run',
        returnType:  'string',
      }, (ctx) => {
        // Use ctx.args[0] as a marker so we can verify args propagate.
        return 'fired:' + ctx.args[0];
      });
      return 'body-done';
    `;
    const result = await dispatchRunScript(makeScript('script-A', code), makeRequest());
    expect(result.ok).toBe(true);

    // Find the register-handler IPC the proxy emitted to extract the handlerId.
    const reg = findRegisterHandler(ipc, 'macro', 'my-macro');
    expect(reg).toBeDefined();
    const handlerId = reg!.handlerId;
    expect(typeof handlerId).toBe('string');

    // Fire the handler. The macro handler's IPC arg shape from production
    // is `[ctx]` where ctx has `args`, `characterId`, `chatId`, `userId`.
    // Mirror that here so ctx.args[0] resolves correctly inside the closure.
    const handlerResult = await __sendRunHandlerRequestForTests(
      'script-A',
      handlerId,
      'macro',
      [{ args: ['hello'], characterId: null, chatId: null, userId: 'test-user' }],
      5_000,
    );
    expect(handlerResult.ok).toBe(true);
    expect(handlerResult.value).toBe('fired:hello');
  });

  test('handler that throws lands as ok=false with serialized error', async () => {
    const { ipc } = await setupE2E();

    const code = `
      api.macros.register('bad-macro', {
        description: 'throws',
        returnType:  'string',
      }, () => {
        throw new Error('handler exploded');
      });
      return 'body-done';
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());
    const reg = findRegisterHandler(ipc, 'macro', 'bad-macro')!;

    const handlerResult = await __sendRunHandlerRequestForTests(
      'script-A',
      reg.handlerId,
      'macro',
      [{ args: [], characterId: null, chatId: null, userId: 'test-user' }],
      5_000,
    );
    expect(handlerResult.ok).toBe(false);
    expect(handlerResult.error?.message).toContain('handler exploded');
  });

  test('api.* call inside the handler uses the per-fire runId (runIdContext override)', async () => {
    const { ipc } = await setupE2E();

    // The handler closure makes an api.utils.macros.resolve call. The
    // dispatch uses `runIdContext.getStore()` (the per-fire handler runId)
    // rather than `ctx.runId` (the originating script-run runId).
    const code = `
      api.macros.register('marker-macro', {
        description: 'records the per-fire runId via an api call',
        returnType:  'string',
      }, async (ctx) => {
        await api.utils.macros.resolve('handler-marker').catch(() => {});
        return 'ok';
      });
      return 'body-done';
    `;
    const scriptResult = await dispatchRunScript(makeScript('script-A', code), makeRequest());
    expect(scriptResult.ok).toBe(true);

    // Snapshot the parent's view of api-requests BEFORE the handler fires,
    // so we can pick out the new one(s) emitted DURING the fire.
    const before = ipc.parentInbox().filter(
      (m): m is ApiProxyRequest => (m as { type?: unknown }).type === 'api-request',
    );

    const reg = findRegisterHandler(ipc, 'macro', 'marker-macro')!;
    const handlerResult = await __sendRunHandlerRequestForTests(
      'script-A',
      reg.handlerId,
      'macro',
      [{ args: [], characterId: null, chatId: null, userId: 'test-user' }],
      5_000,
    );
    expect(handlerResult.ok).toBe(true);

    const after = ipc.parentInbox().filter(
      (m): m is ApiProxyRequest => (m as { type?: unknown }).type === 'api-request',
    );
    const newDuringFire = after.filter((m) => !before.includes(m));
    // The handler's `api.utils.macros.resolve` dispatch should appear in newDuringFire.
    const markerDispatch = newDuringFire.find((m) => m.method === 'utils.macros.resolve');
    expect(markerDispatch).toBeDefined();
    // The dispatch's runId must be the per-fire `handler-…` runId, NOT the
    // originating script-body runId.
    expect(markerDispatch!.runId.startsWith('handler-')).toBe(true);
    expect(markerDispatch!.runId).not.toBe(scriptResult.runId);
  });

  test('handler closure persists across multiple fires (per-fire isolation)', async () => {
    const { ipc } = await setupE2E();

    const code = `
      let counter = 0;
      api.macros.register('counter-macro', {
        description: 'fires multiple times',
        returnType:  'string',
      }, () => {
        counter++;
        return String(counter);
      });
      return 'body-done';
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());
    const reg = findRegisterHandler(ipc, 'macro', 'counter-macro')!;

    // Fire three times — the closure's `counter` increments each time
    // because the proxy + closure stay alive past run-result.
    const r1 = await __sendRunHandlerRequestForTests('script-A', reg.handlerId, 'macro',
      [{ args: [], characterId: null, chatId: null, userId: 'test-user' }], 5_000);
    const r2 = await __sendRunHandlerRequestForTests('script-A', reg.handlerId, 'macro',
      [{ args: [], characterId: null, chatId: null, userId: 'test-user' }], 5_000);
    const r3 = await __sendRunHandlerRequestForTests('script-A', reg.handlerId, 'macro',
      [{ args: [], characterId: null, chatId: null, userId: 'test-user' }], 5_000);

    expect(r1.value).toBe('1');
    expect(r2.value).toBe('2');
    expect(r3.value).toBe('3');
  });
});
