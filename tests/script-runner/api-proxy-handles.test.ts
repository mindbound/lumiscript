/**
 * Phase 11.C.3 — api-proxy sync handle UUID-threading + stableId-cache tests.
 *
 * The proxy's sync-returning handle methods (inject*, showAdvancedModal,
 * createFloatWidget, registerDrawerTab) generate UUIDs child-side and
 * thread them via `_elementId`/`_modalId`/`_widgetId`/`_rootElementId`
 * @internal options fields. The canonical implementation honors these IDs,
 * so the proxy's child-allocated IDs and the canonical's parent-side IDs
 * agree by construction — letting the proxy return a sync-shaped handle
 * (no Promise) while the underlying dispatch is still async.
 *
 * Stable-id idempotency: `api.ui.dom.inject(target, html, {id: 'X'})` called
 * twice from the same script must resolve to the SAME elementId so the
 * canonical's `resolveStableId` block finds the existing element + updates
 * it in place. The proxy maintains a per-script `(stableId → elementId)`
 * cache for this. Cross-script same-stableId yields distinct elementIds
 * (no leakage).
 *
 * Tests verify:
 *   - Each handle method allocates a fresh UUID per call (when no stableId).
 *   - The UUID is threaded into the dispatched options.
 *   - Stable-id calls within the same script return the same elementId.
 *   - Stable-id calls in different scripts get distinct elementIds.
 *   - The handle's surface (modalId / widgetId / etc.) matches the
 *     allocated UUID.
 */

import { describe, test, expect } from 'bun:test';
import {
  buildProxiedAPI,
  __resetForTests as resetApiProxy,
  type ProxyContext,
  type ProxyHandle,
} from '../../src/script-runner/api-proxy.js';
import type { ChildToParentMessage, ApiProxyRequest, ApiProxyResponse } from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  apiRequests(method?: string): ApiProxyRequest[];
  respond(requestId: string, value: unknown): void;
}

function makeHarness(overrides: Partial<ProxyContext> = {}): Harness {
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
    ...overrides,
  };
  const proxy = buildProxiedAPI(ctx);
  return {
    proxy,
    sent,
    apiRequests: (method) =>
      sent.filter((m): m is ApiProxyRequest => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'api-request') return false;
        const r = m as ApiProxyRequest;
        return method === undefined ? true : r.method === method;
      }),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
  };
}

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// ─── ui.dom.inject — _elementId threading + stableId cache ──────────────────

describe('api-proxy: api.ui.dom.inject', () => {
  test('allocates a UUID elementId, threads it via options._elementId', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.inject('body', '<div/>');

    const req = h.apiRequests('ui.dom.inject')[0]!;
    const opts = req.args[2] as { _elementId?: string };
    expect(opts).toBeDefined();
    expect(opts._elementId).toBeDefined();
    expect(opts._elementId).toMatch(UUID_REGEX);
  });

  test('two inject calls with no stableId allocate DIFFERENT elementIds', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.inject('body', '<div/>');
    h.proxy.api.ui.dom.inject('body', '<span/>');

    const reqs = h.apiRequests('ui.dom.inject');
    const id1 = (reqs[0]!.args[2] as { _elementId: string })._elementId;
    const id2 = (reqs[1]!.args[2] as { _elementId: string })._elementId;
    expect(id1).not.toBe(id2);
  });

  test('two inject calls with the SAME stableId return the SAME elementId (cache hit)', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'my-stable' });
    h.proxy.api.ui.dom.inject('body', '<span/>', { id: 'my-stable' });

    const reqs = h.apiRequests('ui.dom.inject');
    const id1 = (reqs[0]!.args[2] as { _elementId: string })._elementId;
    const id2 = (reqs[1]!.args[2] as { _elementId: string })._elementId;
    expect(id1).toBe(id2);
  });

  test('two inject calls with DIFFERENT stableIds get distinct elementIds', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.inject('body', '<div/>', { id: 'A' });
    h.proxy.api.ui.dom.inject('body', '<span/>', { id: 'B' });

    const reqs = h.apiRequests('ui.dom.inject');
    const idA = (reqs[0]!.args[2] as { _elementId: string })._elementId;
    const idB = (reqs[1]!.args[2] as { _elementId: string })._elementId;
    expect(idA).not.toBe(idB);
  });

  test('cross-script: same stableId in different scripts yields DIFFERENT elementIds', () => {
    // Reset module-scope state so test starts clean (the
    // domStableIdToElementId map from setup.ts's reset is empty already,
    // but we double-down here for clarity).
    resetApiProxy();
    const h1 = makeHarness({ scriptId: 'script-A' });
    const h2 = makeHarness({ scriptId: 'script-B' });

    h1.proxy.api.ui.dom.inject('body', '<div/>', { id: 'shared-stable' });
    h2.proxy.api.ui.dom.inject('body', '<span/>', { id: 'shared-stable' });

    const reqA = h1.apiRequests('ui.dom.inject')[0]!;
    const reqB = h2.apiRequests('ui.dom.inject')[0]!;
    const idA = (reqA.args[2] as { _elementId: string })._elementId;
    const idB = (reqB.args[2] as { _elementId: string })._elementId;
    expect(idA).not.toBe(idB);
  });

  test('returned DOMHandle exposes the same elementId as the threaded one', () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.dom.inject('body', '<div/>');
    const req = h.apiRequests('ui.dom.inject')[0]!;
    const threadedId = (req.args[2] as { _elementId: string })._elementId;

    // DOMHandle exposes `id`.
    expect(handle.id).toBe(threadedId);
  });
});

// ─── ui.dom.injectAtMessage — same threading shape ──────────────────────────

describe('api-proxy: api.ui.dom.injectAtMessage', () => {
  test('threads _elementId via options', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.injectAtMessage('msg-1', '<p/>');

    const req = h.apiRequests('ui.dom.injectAtMessage')[0]!;
    const opts = req.args[2] as { _elementId?: string };
    expect(opts._elementId).toMatch(UUID_REGEX);
  });

  test('shares the same per-script stableId cache as inject()', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.inject('body', '<div/>',           { id: 'cache-key' });
    h.proxy.api.ui.dom.injectAtMessage('msg-1', '<span/>', { id: 'cache-key' });

    const injectReq        = h.apiRequests('ui.dom.inject')[0]!;
    const injectAtMsgReq   = h.apiRequests('ui.dom.injectAtMessage')[0]!;
    const idFromInject     = (injectReq.args[2]      as { _elementId: string })._elementId;
    const idFromAtMessage  = (injectAtMsgReq.args[2] as { _elementId: string })._elementId;
    expect(idFromInject).toBe(idFromAtMessage);
  });
});

// ─── ui.showAdvancedModal — _modalId + _rootElementId threading ─────────────

describe('api-proxy: api.ui.showAdvancedModal', () => {
  test('allocates UUIDs for modalId AND rootElementId, threads both via options', () => {
    const h = makeHarness();
    h.proxy.api.ui.showAdvancedModal({ title: 'T' });

    const req = h.apiRequests('ui.showAdvancedModal')[0]!;
    const opts = req.args[0] as { _modalId?: string; _rootElementId?: string };
    expect(opts._modalId).toMatch(UUID_REGEX);
    expect(opts._rootElementId).toMatch(UUID_REGEX);
    expect(opts._modalId).not.toBe(opts._rootElementId);
  });

  test('returned handle exposes the same modalId as threaded', () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.showAdvancedModal({ title: 'T' });

    const req = h.apiRequests('ui.showAdvancedModal')[0]!;
    const opts = req.args[0] as { _modalId: string };
    expect(handle.modalId).toBe(opts._modalId);
  });

  test('two showAdvancedModal calls allocate different ids (no caching for modals)', () => {
    const h = makeHarness();
    h.proxy.api.ui.showAdvancedModal({ title: 'T' });
    h.proxy.api.ui.showAdvancedModal({ title: 'T' });

    const reqs = h.apiRequests('ui.showAdvancedModal');
    const id1 = (reqs[0]!.args[0] as { _modalId: string })._modalId;
    const id2 = (reqs[1]!.args[0] as { _modalId: string })._modalId;
    expect(id1).not.toBe(id2);
  });
});

// ─── ui.createFloatWidget — _widgetId + _rootElementId threading ────────────

describe('api-proxy: api.ui.createFloatWidget', () => {
  test('allocates UUIDs for widgetId AND rootElementId, threads via options', () => {
    const h = makeHarness();
    h.proxy.api.ui.createFloatWidget({ width: 200, height: 100 });

    const req = h.apiRequests('ui.createFloatWidget')[0]!;
    const opts = req.args[0] as { _widgetId?: string; _rootElementId?: string };
    expect(opts._widgetId).toMatch(UUID_REGEX);
    expect(opts._rootElementId).toMatch(UUID_REGEX);
    expect(opts._widgetId).not.toBe(opts._rootElementId);
  });

  test('returned handle exposes the same widgetId as threaded', () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.createFloatWidget({ width: 200, height: 100 });

    const req = h.apiRequests('ui.createFloatWidget')[0]!;
    const opts = req.args[0] as { _widgetId: string };
    expect(handle.widgetId).toBe(opts._widgetId);
  });
});

// ─── ui.registerDrawerTab — _rootElementId threading (tabId is user-supplied) ─

describe('api-proxy: api.ui.registerDrawerTab', () => {
  test('allocates _rootElementId UUID + uses user-supplied id as tabId', () => {
    const h = makeHarness();
    h.proxy.api.ui.registerDrawerTab({
      id:    'my-tab',
      title: 'My Tab',
    });

    const req = h.apiRequests('ui.registerDrawerTab')[0]!;
    const opts = req.args[0] as { id?: string; _rootElementId?: string };
    expect(opts.id).toBe('my-tab');
    expect(opts._rootElementId).toMatch(UUID_REGEX);
  });
});
