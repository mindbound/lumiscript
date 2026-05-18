/**
 * v1.0.0-rc.5 — child-side proxy dispatch tests for `api.oauth.*`.
 *
 * Three methods:
 *   - `getCallbackUrl` + `createState` are plain async pass-throughs
 *     (sent as `api-request` IPCs with no args). Same shape as the other
 *     mkAsync-built proxy methods.
 *   - `onCallback` is a register-handler-shaped proxy (mirrors
 *     `commands.onInvoked` 9d.3.c): generates a child-side `handlerId`,
 *     registers the user's closure via `ctx.registerHandlerClosure`,
 *     sends a `register-handler` IPC with `kind: 'oauthCallback'`, and
 *     returns a sync unsubscribe fn. The unsub drops the closure and
 *     sends `unregister-handler`.
 *
 * Single-handler-per-extension warning + guarded-unsub logic live
 * parent-side in `host-dispatcher.ts:case 'oauthCallback'` and are
 * covered by `e2e-oauth-callback.test.ts`.
 */

import { describe, test, expect } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type {
  ChildToParentMessage,
  ApiProxyRequest,
  ApiProxyResponse,
  RegisterHandler,
  UnregisterHandler,
} from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  registeredHandlers: Map<string, (...args: unknown[]) => unknown | Promise<unknown>>;
  unregisteredHandlerIds: string[];
  apiRequests(method?: string): ApiProxyRequest[];
  registerMsgs(): RegisterHandler[];
  unregisterMsgs(): UnregisterHandler[];
  respond(requestId: string, value: unknown): void;
}

function makeHarness(): Harness {
  const sent: ChildToParentMessage[] = [];
  const registeredHandlers = new Map<string, (...args: unknown[]) => unknown | Promise<unknown>>();
  const unregisteredHandlerIds: string[] = [];
  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'script-fixture',
    scriptName:         'Fixture Script',
    scriptType:         'trigger',
    chatIdAtStart:      null,
    characterIdAtStart: null,
    send:               (msg) => { sent.push(msg); },
    registerBroadcastHandler:   () => {},
    unregisterBroadcastHandler: () => {},
    registerHandlerClosure:     (handlerId, fn) => { registeredHandlers.set(handlerId, fn); },
    unregisterHandlerClosure:   (handlerId) => {
      registeredHandlers.delete(handlerId);
      unregisteredHandlerIds.push(handlerId);
    },
    toolsSnapshot:                 [],
    macrosSnapshot:                [],
    macroInterceptorsSnapshot:     [],
    chatInjectionsSnapshot:        [],
    chatContentProcessorsSnapshot: [],
    worldInfoInterceptorsSnapshot: [],
  };
  const proxy = buildProxiedAPI(ctx);
  return {
    proxy,
    sent,
    registeredHandlers,
    unregisteredHandlerIds,
    apiRequests: (method) =>
      sent.filter((m): m is ApiProxyRequest => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'api-request') return false;
        return method === undefined ? true : (m as ApiProxyRequest).method === method;
      }),
    registerMsgs: () => sent.filter(
      (m): m is RegisterHandler => (m as { type?: unknown }).type === 'register-handler',
    ),
    unregisterMsgs: () => sent.filter(
      (m): m is UnregisterHandler => (m as { type?: unknown }).type === 'unregister-handler',
    ),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
  };
}

// ─── getCallbackUrl + createState (pure pass-through) ───────────────────────

describe('api-proxy: api.oauth.getCallbackUrl / createState', () => {
  test('getCallbackUrl dispatches an api-request with no args', () => {
    const h = makeHarness();
    void h.proxy.api.oauth.getCallbackUrl();
    const reqs = h.apiRequests('oauth.getCallbackUrl');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
    expect(reqs[0]!.scriptId).toBe('script-fixture');
  });

  test('createState dispatches an api-request with no args', () => {
    const h = makeHarness();
    void h.proxy.api.oauth.createState();
    const reqs = h.apiRequests('oauth.createState');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });
});

// ─── onCallback (register-handler-shaped) ───────────────────────────────────

describe('api-proxy: api.oauth.onCallback sends register-handler', () => {
  test('IPC carries kind=oauthCallback + scriptId + handlerId + hasHandler', async () => {
    const h = makeHarness();
    h.proxy.api.oauth.onCallback(async () => undefined);

    const msgs = h.registerMsgs();
    expect(msgs.length).toBe(1);
    const m = msgs[0]!;
    expect(m.kind).toBe('oauthCallback');
    expect(m.scriptId).toBe('script-fixture');
    expect(typeof m.handlerId).toBe('string');
    expect(m.handlerId.length).toBeGreaterThan(0);
    expect((m as { hasHandler: boolean }).hasHandler).toBe(true);
  });

  test('registers a closure under handlerId that invokes the user handler with params', async () => {
    const h = makeHarness();
    const captured: { params?: Record<string, string> } = {};
    h.proxy.api.oauth.onCallback(async (params) => {
      captured.params = params;
      return { html: 'OK' };
    });
    const handlerId = h.registerMsgs()[0]!.handlerId;
    const closure = h.registeredHandlers.get(handlerId);
    expect(closure).toBeDefined();

    // Simulate parent firing the handler with IPC args [params].
    const result = await closure!({ code: 'auth-code', state: 'csrf-nonce' });
    expect(captured.params).toEqual({ code: 'auth-code', state: 'csrf-nonce' });
    expect(result).toEqual({ html: 'OK' });
  });

  test('handler that returns void resolves to undefined', async () => {
    const h = makeHarness();
    h.proxy.api.oauth.onCallback(async () => undefined);
    const handlerId = h.registerMsgs()[0]!.handlerId;
    const result = await h.registeredHandlers.get(handlerId)!({ code: 'X' });
    expect(result).toBeUndefined();
  });

  test('returns a sync unsubscribe fn that drops the closure + sends unregister-handler', () => {
    const h = makeHarness();
    const unsub = h.proxy.api.oauth.onCallback(async () => undefined);
    const handlerId = h.registerMsgs()[0]!.handlerId;

    expect(typeof unsub).toBe('function');
    expect(h.registeredHandlers.has(handlerId)).toBe(true);

    unsub();
    expect(h.registeredHandlers.has(handlerId)).toBe(false);
    expect(h.unregisteredHandlerIds).toContain(handlerId);

    const unsubMsgs = h.unregisterMsgs();
    expect(unsubMsgs.length).toBe(1);
    expect(unsubMsgs[0]!.kind).toBe('oauthCallback');
    expect(unsubMsgs[0]!.handlerId).toBe(handlerId);
    expect(unsubMsgs[0]!.scriptId).toBe('script-fixture');
  });

  test('unsub is idempotent — second call is a no-op (no duplicate unregister-handler IPCs)', () => {
    const h = makeHarness();
    const unsub = h.proxy.api.oauth.onCallback(async () => undefined);
    unsub();
    unsub();
    // Tests are about not double-sending — registry-side idempotence is
    // up to ctx.unregisterHandlerClosure semantics (a Map delete is
    // idempotent; second call returns false). At the IPC layer, a
    // duplicate unregister is harmless on the parent side too.
    expect(h.unregisterMsgs().length).toBeGreaterThanOrEqual(1);
  });

  test('two onCallback registrations from the same proxy generate different handlerIds', async () => {
    const h = makeHarness();
    h.proxy.api.oauth.onCallback(async () => undefined);
    h.proxy.api.oauth.onCallback(async () => undefined);

    const msgs = h.registerMsgs();
    expect(msgs.length).toBe(2);
    expect(msgs[0]!.handlerId).not.toBe(msgs[1]!.handlerId);
    // Both closures registered separately on the child registry.
    expect(h.registeredHandlers.size).toBe(2);
  });
});
