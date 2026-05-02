/**
 * Child-side proxy dispatch tests for api.rpc.*.
 *
 * Verifies that calling each `api.rpc.*` method through the proxy produces
 * the right outbound IPC envelope. Most surfaces are plain `mkAsync`-driven
 * dispatch (sync/read/unregister); `handle` is the interesting one — it
 * stashes a closure under a child-generated handlerId AND dispatches
 * `'rpc.handle'` with `[channel, handlerId, options]` so the parent's
 * special-case in `host-dispatcher.handleApiRequest` can build a
 * `RunHandlerRequest`-firing wrapper and call canonical
 * `api.rpc.handle()`.
 */

import { describe, test, expect, mock } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type {
  ChildToParentMessage,
  ApiProxyRequest,
  ApiProxyResponse,
} from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  registeredHandlers: Map<string, (...args: unknown[]) => unknown | Promise<unknown>>;
  unregisteredHandlerIds: string[];
  apiRequests(method?: string): ApiProxyRequest[];
  respond(requestId: string, value: unknown): void;
  rejectResponse(requestId: string, message: string): void;
}

function makeHarness(): Harness {
  const sent: ChildToParentMessage[] = [];
  const registeredHandlers = new Map<string, (...args: unknown[]) => unknown | Promise<unknown>>();
  const unregisteredHandlerIds: string[] = [];

  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'tracker',
    scriptName:         'Tracker',
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
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
    rejectResponse(requestId, message) {
      const msg: ApiProxyResponse = {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name: 'Error', message },
      };
      proxy.handleResponse(msg);
    },
  };
}

// ─── sync ────────────────────────────────────────────────────────────────────

describe('api-proxy: api.rpc.sync', () => {
  test('dispatches "rpc.sync" with [channel, value, options] args', () => {
    const h = makeHarness();
    void h.proxy.api.rpc.sync('state', { ok: true });
    const reqs = h.apiRequests('rpc.sync');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toBe('state');
    expect(reqs[0]!.args[1]).toEqual({ ok: true });
    expect(reqs[0]!.args[2]).toBeUndefined();
  });

  test('threads options.as through to the IPC envelope', () => {
    const h = makeHarness();
    void h.proxy.api.rpc.sync('state', 1, { as: 'world' });
    const req = h.apiRequests('rpc.sync')[0]!;
    expect(req.args[2]).toEqual({ as: 'world' });
  });

  test('resolves the Promise with the parent-supplied endpoint string', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.rpc.sync('state', 1);
    const req = h.apiRequests('rpc.sync')[0]!;
    h.respond(req.requestId, 'lumiscript.tracker.state');
    await expect(promise).resolves.toBe('lumiscript.tracker.state');
  });
});

// ─── read ────────────────────────────────────────────────────────────────────

describe('api-proxy: api.rpc.read', () => {
  test('dispatches "rpc.read" with the endpoint string', () => {
    const h = makeHarness();
    void h.proxy.api.rpc.read('foreign-extension.some-channel');
    const reqs = h.apiRequests('rpc.read');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toBe('foreign-extension.some-channel');
  });

  test('resolves with whatever the parent returned', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.rpc.read<{ value: number }>('foreign.endpoint');
    const req = h.apiRequests('rpc.read')[0]!;
    h.respond(req.requestId, { value: 42 });
    await expect(promise).resolves.toEqual({ value: 42 });
  });
});

// ─── unregister ──────────────────────────────────────────────────────────────

describe('api-proxy: api.rpc.unregister', () => {
  test('dispatches "rpc.unregister" with [channel, options] args', () => {
    const h = makeHarness();
    void h.proxy.api.rpc.unregister('state');
    const reqs = h.apiRequests('rpc.unregister');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toBe('state');
    expect(reqs[0]!.args[1]).toBeUndefined();
  });

  test('drops a previously-stashed handler closure for the same channel', async () => {
    const h = makeHarness();

    // Register a handle first; let it succeed.
    const handlePromise = h.proxy.api.rpc.handle('state', () => 'value');
    const handleReq = h.apiRequests('rpc.handle')[0]!;
    const handlerId = handleReq.args[1] as string;
    h.respond(handleReq.requestId, 'lumiscript.tracker.state');
    await handlePromise;

    expect(h.registeredHandlers.has(handlerId)).toBe(true);

    // Unregister — the proxy should drop the closure child-side.
    void h.proxy.api.rpc.unregister('state');

    expect(h.registeredHandlers.has(handlerId)).toBe(false);
    expect(h.unregisteredHandlerIds).toContain(handlerId);
  });

  test('honours options.as when matching a previously-stashed handler', async () => {
    const h = makeHarness();

    const handlePromise = h.proxy.api.rpc.handle('state', () => 'value', { as: 'world' });
    const handleReq = h.apiRequests('rpc.handle')[0]!;
    const handlerId = handleReq.args[1] as string;
    h.respond(handleReq.requestId, 'lumiscript.world.state');
    await handlePromise;

    void h.proxy.api.rpc.unregister('state', { as: 'world' });
    expect(h.registeredHandlers.has(handlerId)).toBe(false);
  });
});

// ─── handle ─────────────────────────────────────────────────────────────────

describe('api-proxy: api.rpc.handle', () => {
  test('stashes the user closure under a fresh handlerId AND dispatches "rpc.handle"', () => {
    const h = makeHarness();
    const handler = mock(() => 'response');
    void h.proxy.api.rpc.handle('history', handler);

    const reqs = h.apiRequests('rpc.handle');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toBe('history');
    const handlerId = reqs[0]!.args[1] as string;
    expect(typeof handlerId).toBe('string');
    expect(handlerId.length).toBeGreaterThan(0);

    // Same handlerId is registered child-side as a closure.
    expect(h.registeredHandlers.has(handlerId)).toBe(true);
  });

  test('threads options.as into the dispatch args[2]', () => {
    const h = makeHarness();
    void h.proxy.api.rpc.handle('history', () => 'response', { as: 'world' });
    const req = h.apiRequests('rpc.handle')[0]!;
    expect(req.args[2]).toEqual({ as: 'world' });
  });

  test('the stashed closure forwards args[0] to the user handler verbatim', async () => {
    const h = makeHarness();
    const userHandler = mock((ctx: { endpoint: string; requesterExtensionId: string }) =>
      `hello-${ctx.requesterExtensionId}`,
    );
    void h.proxy.api.rpc.handle('greet', userHandler);

    const req = h.apiRequests('rpc.handle')[0]!;
    const handlerId = req.args[1] as string;
    const stashed = h.registeredHandlers.get(handlerId)!;

    const result = await stashed({
      endpoint:             'lumiscript.tracker.greet',
      requesterExtensionId: 'foreign-ext',
    });
    expect(result).toBe('hello-foreign-ext');
    expect(userHandler).toHaveBeenCalledTimes(1);
  });

  test('resolves with the parent-supplied fully-qualified endpoint string', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.rpc.handle('history', () => 'response');
    const req = h.apiRequests('rpc.handle')[0]!;
    h.respond(req.requestId, 'lumiscript.tracker.history');
    await expect(promise).resolves.toBe('lumiscript.tracker.history');
  });

  test('drops the stashed closure when the parent rejects the dispatch', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.rpc.handle('history', () => 'response');
    const req = h.apiRequests('rpc.handle')[0]!;
    const handlerId = req.args[1] as string;

    expect(h.registeredHandlers.has(handlerId)).toBe(true);

    h.rejectResponse(req.requestId, 'invalid channel');

    await expect(promise).rejects.toThrow('invalid channel');
    expect(h.registeredHandlers.has(handlerId)).toBe(false);
  });

  test('replaces a prior handle() registration on the same channel', async () => {
    const h = makeHarness();

    // First handle() — succeeds.
    const p1 = h.proxy.api.rpc.handle('state', () => 'first');
    const r1 = h.apiRequests('rpc.handle')[0]!;
    const id1 = r1.args[1] as string;
    h.respond(r1.requestId, 'lumiscript.tracker.state');
    await p1;
    expect(h.registeredHandlers.has(id1)).toBe(true);

    // Second handle() on the same channel — the proxy should drop id1
    // before stashing id2.
    const p2 = h.proxy.api.rpc.handle('state', () => 'second');
    const r2 = h.apiRequests('rpc.handle')[1]!;
    const id2 = r2.args[1] as string;
    h.respond(r2.requestId, 'lumiscript.tracker.state');
    await p2;

    expect(id1).not.toBe(id2);
    expect(h.registeredHandlers.has(id1)).toBe(false);
    expect(h.registeredHandlers.has(id2)).toBe(true);
  });

  test('sync() over an existing handle() drops the prior handler closure', async () => {
    const h = makeHarness();

    const p1 = h.proxy.api.rpc.handle('state', () => 'first');
    const r1 = h.apiRequests('rpc.handle')[0]!;
    const id1 = r1.args[1] as string;
    h.respond(r1.requestId, 'lumiscript.tracker.state');
    await p1;

    // sync() on the same channel — drops the prior handlerId.
    void h.proxy.api.rpc.sync('state', 42);
    expect(h.registeredHandlers.has(id1)).toBe(false);
  });
});
