/**
 * v1.0.0-rc.6 — child-side proxy dispatch tests for api.scriptStorage.*.
 *
 * Verifies that calling each `api.scriptStorage.*` method through the
 * proxy produces an api-request IPC with the matching dotted method
 * name and the user-supplied args. The proxy here is pure `mkAsync`
 * plumbing; the real work (Map mutation, size-cap enforcement,
 * broadcast emissions, cross-script isolation) happens parent-side
 * via `buildScriptStorageAPI` (covered in
 * `tests/engine/api/script-storage.test.ts`).
 *
 * Round-trip coverage: each method's response routes correctly back
 * to the awaiting promise via `proxy.handleResponse`.
 */

import { describe, test, expect } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type { ChildToParentMessage, ApiProxyRequest, ApiProxyResponse } from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  apiRequests(method?: string): ApiProxyRequest[];
  respond(requestId: string, value: unknown): void;
  rejectResponse(requestId: string, errorName: string, message: string): void;
}

function makeHarness(): Harness {
  const sent: ChildToParentMessage[] = [];
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
    registerHandlerClosure:     () => {},
    unregisterHandlerClosure:   () => {},
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
    rejectResponse(requestId, errorName, message) {
      const msg: ApiProxyResponse = {
        type:    'api-response',
        requestId,
        ok:      false,
        error:   { name: errorName, message },
      };
      proxy.handleResponse(msg);
    },
  };
}

// ─── Dispatch shape ──────────────────────────────────────────────────────────

describe('api-proxy: api.scriptStorage.* — IPC dispatch', () => {
  test('get dispatches with the key (no default)', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.get('foo');
    const reqs = h.apiRequests('scriptStorage.get');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toBe('foo');
  });

  test('get dispatches with key + default value', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.get('foo', 'fallback');
    const reqs = h.apiRequests('scriptStorage.get');
    expect(reqs[0]!.args[0]).toBe('foo');
    expect(reqs[0]!.args[1]).toBe('fallback');
  });

  test('set dispatches with key + value', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.set('foo', { count: 42 });
    const reqs = h.apiRequests('scriptStorage.set');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args[0]).toBe('foo');
    expect(reqs[0]!.args[1]).toEqual({ count: 42 });
  });

  test('delete dispatches with the key', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.delete('foo');
    const reqs = h.apiRequests('scriptStorage.delete');
    expect(reqs[0]!.args[0]).toBe('foo');
  });

  test('has dispatches with the key', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.has('foo');
    const reqs = h.apiRequests('scriptStorage.has');
    expect(reqs[0]!.args[0]).toBe('foo');
  });

  test('clear dispatches with no args', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.clear();
    const reqs = h.apiRequests('scriptStorage.clear');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });

  test('keys dispatches with no args', () => {
    const h = makeHarness();
    void h.proxy.api.scriptStorage.keys();
    const reqs = h.apiRequests('scriptStorage.keys');
    expect(reqs.length).toBe(1);
    expect(reqs[0]!.args).toEqual([]);
  });
});

// ─── Round-trip response routing ─────────────────────────────────────────────

describe('api-proxy: api.scriptStorage.* — response routing', () => {
  test('get resolves with the parent\'s value', async () => {
    const h = makeHarness();
    const p = h.proxy.api.scriptStorage.get<number>('foo');
    const reqs = h.apiRequests('scriptStorage.get');
    h.respond(reqs[0]!.requestId, 42);
    expect(await p).toBe(42);
  });

  test('get resolves with undefined when key is missing parent-side', async () => {
    const h = makeHarness();
    const p = h.proxy.api.scriptStorage.get('foo');
    const reqs = h.apiRequests('scriptStorage.get');
    h.respond(reqs[0]!.requestId, undefined);
    expect(await p).toBeUndefined();
  });

  test('set resolves with undefined on success', async () => {
    const h = makeHarness();
    const p = h.proxy.api.scriptStorage.set('foo', 'value');
    const reqs = h.apiRequests('scriptStorage.set');
    h.respond(reqs[0]!.requestId, undefined);
    expect(await p).toBeUndefined();
  });

  test('set rejects with the parent\'s capacity-exceeded error', async () => {
    const h = makeHarness();
    const p = h.proxy.api.scriptStorage.set('big', 'x'.repeat(10));
    const reqs = h.apiRequests('scriptStorage.set');
    h.rejectResponse(
      reqs[0]!.requestId,
      'Error',
      'api.scriptStorage: capacity exceeded — ...',
    );
    await expect(p).rejects.toThrow(/capacity exceeded/);
  });

  test('delete resolves with the parent\'s boolean', async () => {
    const h = makeHarness();
    const p1 = h.proxy.api.scriptStorage.delete('present');
    const p2 = h.proxy.api.scriptStorage.delete('missing');
    const reqs = h.apiRequests('scriptStorage.delete');
    h.respond(reqs[0]!.requestId, true);
    h.respond(reqs[1]!.requestId, false);
    expect(await p1).toBe(true);
    expect(await p2).toBe(false);
  });

  test('has resolves with the parent\'s boolean', async () => {
    const h = makeHarness();
    const p1 = h.proxy.api.scriptStorage.has('present');
    const p2 = h.proxy.api.scriptStorage.has('missing');
    const reqs = h.apiRequests('scriptStorage.has');
    h.respond(reqs[0]!.requestId, true);
    h.respond(reqs[1]!.requestId, false);
    expect(await p1).toBe(true);
    expect(await p2).toBe(false);
  });

  test('clear resolves with undefined', async () => {
    const h = makeHarness();
    const p = h.proxy.api.scriptStorage.clear();
    const reqs = h.apiRequests('scriptStorage.clear');
    h.respond(reqs[0]!.requestId, undefined);
    expect(await p).toBeUndefined();
  });

  test('keys resolves with the parent\'s string array', async () => {
    const h = makeHarness();
    const p = h.proxy.api.scriptStorage.keys();
    const reqs = h.apiRequests('scriptStorage.keys');
    h.respond(reqs[0]!.requestId, ['alpha', 'beta', 'gamma']);
    expect(await p).toEqual(['alpha', 'beta', 'gamma']);
  });
});
