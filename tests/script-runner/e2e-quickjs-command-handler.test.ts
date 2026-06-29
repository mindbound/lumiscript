/**
 * #11 P5 inc1 — end-to-end: an in-VM commands.onInvoked handler fires through the
 * REAL child path under the QuickJS engine. Exercises the full wiring:
 *   body run (quickjs) → in-VM interception → __hostRegisterHandler dups the fn +
 *   dispatchRegisterHandler sends the register-handler IPC → parent stores it →
 *   __sendRunHandlerRequestForTests fires a RunHandlerRequest → child's
 *   handleRunHandlerRequest routes by hasVmHandler → fireVmHandler → the persisted
 *   proxy + liveContextStore/runIdContext + fireHandlerInQuickJS → the handler's
 *   awaited api.* calls round-trip through the real proxy → HandlerResult.
 *
 * The asyncfn equivalent is covered by the rc.8 e2e handler tests; this proves the
 * quickjs path reaches parity end-to-end (not just the engine unit mechanism).
 */
import { describe, test, expect, afterEach } from 'bun:test';
import {
  dispatchRunScript,
  __sendRunHandlerRequestForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { RegisterHandler, UnregisterHandler } from '../../src/types/script-runner-ipc.js';
import type { ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';

function makeScript(id: string, code: string): Script {
  return {
    id, name: `Test ${id}`, code,
    enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}
function findCommandHandler(ipc: ScriptRunnerMockIpc): RegisterHandler | undefined {
  return ipc.parentInbox().find((m): m is RegisterHandler => {
    if (typeof m !== 'object' || m === null) return false;
    const r = m as RegisterHandler;
    return r.type === 'register-handler' && r.kind === 'commandsOnInvoked';
  });
}

afterEach(() => { _setEngineModeForTests(undefined); });

describe('#11 P5 e2e: quickjs commands.onInvoked', () => {
  test('register + fire: an awaited api.* round-trip inside the handler reaches the host', async () => {
    const { ipc } = await setupE2E();
    _setEngineModeForTests('quickjs');

    // The handler awaits scriptStorage.set then scriptStorage.get (no permission
    // needed) — proving the nested bridge works through the REAL proxy, not a stub.
    const code = `
      api.commands.onInvoked(async (commandId, ctx) => {
        await api.scriptStorage.set('cmd-last', commandId);
        return await api.scriptStorage.get('cmd-last');
      });
      return 'body-done';
    `;
    const scriptResult = await dispatchRunScript(makeScript('cmd-script', code), makeRequest());
    expect(scriptResult.ok).toBe(true);

    // The function-less register-handler IPC reached the parent.
    const reg = findCommandHandler(ipc);
    expect(reg).toBeDefined();
    expect(reg!.handlerId).toMatch(/^commandsOnInvoked:/);
    expect(reg!.hasHandler).toBe(true);

    // Fire it — args shape [commandId, ctx].
    const handlerResult = await __sendRunHandlerRequestForTests(
      'cmd-script', reg!.handlerId, 'commandsOnInvoked', ['my-command', { foo: 1 }], 5_000,
    );
    expect(handlerResult.ok).toBe(true);
    // The handler returned what it stored+read back through scriptStorage.
    expect(handlerResult.value).toBe('my-command');
  });

  test('a throwing in-VM handler yields HandlerResult{ok:false} with the error', async () => {
    const { ipc } = await setupE2E();
    _setEngineModeForTests('quickjs');
    const code = `api.commands.onInvoked(() => { throw new Error('cmd handler boom'); }); return null;`;
    expect((await dispatchRunScript(makeScript('cmd-throw', code), makeRequest())).ok).toBe(true);
    const reg = findCommandHandler(ipc);
    expect(reg).toBeDefined();
    const handlerResult = await __sendRunHandlerRequestForTests(
      'cmd-throw', reg!.handlerId, 'commandsOnInvoked', ['x', {}], 5_000,
    );
    expect(handlerResult.ok).toBe(false);
    expect(handlerResult.error?.message).toContain('cmd handler boom');
  });

  test('the in-VM unsub sends an unregister-handler IPC to the parent (parity)', async () => {
    const { ipc } = await setupE2E();
    _setEngineModeForTests('quickjs');
    // Register + stash the unsub on a user global (persists on the shared context).
    expect((await dispatchRunScript(
      makeScript('cmd-unsub', `globalThis.__u = api.commands.onInvoked(() => 'x'); return null;`), makeRequest(),
    )).ok).toBe(true);
    const reg = findCommandHandler(ipc);
    expect(reg).toBeDefined();
    // A later run of the same script calls the stashed unsub.
    expect((await dispatchRunScript(
      makeScript('cmd-unsub', `globalThis.__u(); return null;`), makeRequest(),
    )).ok).toBe(true);
    // The parent must receive the matching unregister-handler IPC (else it keeps a
    // ghost registration that errors on every later invoke).
    const unreg = ipc.parentInbox().find((m): m is UnregisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as { type?: unknown; kind?: unknown; handlerId?: unknown };
      return r.type === 'unregister-handler' && r.kind === 'commandsOnInvoked' && r.handlerId === reg!.handlerId;
    });
    expect(unreg).toBeDefined();
  });

  test('macros.registerInterceptor (inc2): register IPC carries options (+ a surviving RegExp matchTemplate) and the handler fires + returns', async () => {
    const { ipc } = await setupE2E();
    _setEngineModeForTests('quickjs');
    const code = `
      const h = api.macros.registerInterceptor((ctx) => 'X:' + ctx.text, { priority: 50, matchTemplate: /foo/gi });
      return h.id;
    `;
    expect((await dispatchRunScript(makeScript('mi-script', code), makeRequest())).ok).toBe(true);

    const reg = ipc.parentInbox().find((m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as RegisterHandler;
      return r.type === 'register-handler' && r.kind === 'macroInterceptor';
    });
    expect(reg).toBeDefined();
    const opts = (reg as { options?: { id?: string; priority?: number; matchTemplate?: unknown } }).options;
    // The child forwards options.id = handlerId so the returned handle.id matches the parent entry.
    expect(opts?.id).toBe(reg!.handlerId);
    expect(opts?.priority).toBe(50);
    // The RegExp matchTemplate survived the in-VM __lsEncode -> host marshalDecode -> IPC path.
    expect(opts?.matchTemplate instanceof RegExp).toBe(true);
    expect((opts?.matchTemplate as RegExp).source).toBe('foo');

    const handlerResult = await __sendRunHandlerRequestForTests(
      'mi-script', reg!.handlerId, 'macroInterceptor', [{ text: 'bar' }], 5_000,
    );
    expect(handlerResult.ok).toBe(true);
    expect(handlerResult.value).toBe('X:bar');
  });
});
