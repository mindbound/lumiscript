/**
 * v1.0.0-rc.3+ coverage-strengthening pass — api-proxy UI handle method
 * routers.
 *
 * The existing `api-proxy-handles.test.ts` covers UUID allocation +
 * stable-id cache + handle-id parity, but NOT what happens when user
 * code subsequently calls methods on the returned handle (handle.setTitle,
 * handle.moveTo, handle.dismiss, etc.). Those second-tier dispatches
 * all share the same shape — `openAck.then(() => dispatch('ui._<surface>.
 * <method>', [scope-id, ...args]))` — but each surface has its own set
 * of methods + the handler-IPC registration paths for onClick / onActivate
 * / onDragEnd / onDismiss have non-trivial per-surface scope-id wiring.
 *
 * This file covers ALL five UI handle types' method routers + handler-
 * registration paths:
 *
 *   - DrawerTab handle:        setTitle, setShortName, setBadge, activate, destroy + onActivate
 *   - InputBarAction handle:   setLabel, setSubtitle, setEnabled, destroy + onClick
 *   - addStyle handle:         .remove() (second-tier dispatchOnHandle path)
 *   - FloatWidget handle:      moveTo, setVisible, isVisible (sync read), getPosition (sync read), destroy + onDragEnd
 *   - AdvancedModal handle:    setTitle, dismiss + onDismiss (bus-style sync register)
 *
 * Shared patterns asserted across surfaces:
 *   1. Method dispatch carries the scope id (tabId / actionId / widgetId /
 *      modalId) as the first IPC arg, with method-args following.
 *   2. Methods chain through `openAck`, so they only dispatch AFTER the
 *      registration api-response arrives. Pre-ack calls queue.
 *   3. After `destroy()`, all subsequent method calls no-op silently.
 *   4. Handler-IPC registration sends `register-handler` with the right
 *      `kind` + `handlerId` + scope-id, and `unregister-handler` on
 *      cleanup; the closure is stashed via `ctx.registerHandlerClosure`.
 *   5. Handler-IPC unregister fires synchronously regardless of ack state
 *      (pre-ack unsubs land as no-op cleanup misses parent-side).
 */

import { describe, test, expect, mock } from 'bun:test';
import {
  buildProxiedAPI,
  __resetForTests as resetApiProxy,
  type ProxyContext,
  type ProxyHandle,
} from '../../src/script-runner/api-proxy.js';
import type {
  ChildToParentMessage,
  ApiProxyRequest,
  ApiProxyResponse,
  RegisterHandler,
  UnregisterHandler,
} from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy:                       ProxyHandle;
  sent:                        ChildToParentMessage[];
  registerHandlerClosure:      ReturnType<typeof mock>;
  unregisterHandlerClosure:    ReturnType<typeof mock>;
  apiRequests(method?: string): ApiProxyRequest[];
  registerHandlers(kind?: string): RegisterHandler[];
  unregisterHandlers(kind?: string): UnregisterHandler[];
  respond(requestId: string, value: unknown): void;
  rejectResponse(requestId: string, message: string): void;
}

function makeHarness(overrides: Partial<ProxyContext> = {}): Harness {
  const sent: ChildToParentMessage[] = [];
  const registerHandlerClosure   = mock(() => {});
  const unregisterHandlerClosure = mock(() => {});
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
    registerHandlerClosure,
    unregisterHandlerClosure,
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
    registerHandlerClosure,
    unregisterHandlerClosure,
    apiRequests: (method) =>
      sent.filter((m): m is ApiProxyRequest => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'api-request') return false;
        return method === undefined ? true : (m as ApiProxyRequest).method === method;
      }),
    registerHandlers: (kind) =>
      sent.filter((m): m is RegisterHandler => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'register-handler') return false;
        return kind === undefined ? true : (m as RegisterHandler).kind === kind;
      }),
    unregisterHandlers: (kind) =>
      sent.filter((m): m is UnregisterHandler => {
        const t = (m as { type?: unknown }).type;
        if (t !== 'unregister-handler') return false;
        return kind === undefined ? true : (m as UnregisterHandler).kind === kind;
      }),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
    rejectResponse(requestId, message) {
      const msg: ApiProxyResponse = {
        type: 'api-response', requestId, ok: false, error: { name: 'Error', message },
      };
      proxy.handleResponse(msg);
    },
  };
}

/** Flush a few microtasks so chained `.then()` callbacks fire. */
async function flush(): Promise<void> {
  for (let i = 0; i < 8; i++) await Promise.resolve();
}

// ─── Drawer tab handle method router ────────────────────────────────────────

describe('api-proxy: DrawerTab handle methods', () => {
  test('setTitle dispatches ui._drawerTab.setTitle with [tabId, title] after openAck', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'Initial' });

    const registerReq = h.apiRequests('ui.registerDrawerTab')[0]!;
    h.respond(registerReq.requestId, undefined);
    await flush();

    handle.setTitle('Renamed');
    await flush();

    const setTitleReq = h.apiRequests('ui._drawerTab.setTitle')[0]!;
    expect(setTitleReq).toBeDefined();
    expect(setTitleReq.args).toEqual(['my-tab', 'Renamed']);
  });

  test('setShortName / setBadge / activate each dispatch their canonical method+args', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });
    const reg = h.apiRequests('ui.registerDrawerTab')[0]!;
    h.respond(reg.requestId, undefined);
    await flush();

    handle.setShortName('short');
    handle.setBadge('42');
    handle.activate();
    await flush();

    expect(h.apiRequests('ui._drawerTab.setShortName')[0]!.args).toEqual(['my-tab', 'short']);
    expect(h.apiRequests('ui._drawerTab.setBadge')[0]!.args).toEqual(['my-tab', '42']);
    expect(h.apiRequests('ui._drawerTab.activate')[0]!.args).toEqual(['my-tab']);
  });

  test('setBadge accepts null to clear', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });
    h.respond(h.apiRequests('ui.registerDrawerTab')[0]!.requestId, undefined);
    await flush();

    handle.setBadge(null);
    await flush();

    expect(h.apiRequests('ui._drawerTab.setBadge')[0]!.args).toEqual(['my-tab', null]);
  });

  test('destroy() dispatches ui._drawerTab.destroy and gates subsequent calls', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });
    h.respond(h.apiRequests('ui.registerDrawerTab')[0]!.requestId, undefined);
    await flush();

    handle.destroy();
    await flush();
    expect(h.apiRequests('ui._drawerTab.destroy')[0]!.args).toEqual(['my-tab']);

    // Subsequent method calls are no-ops — no new api-requests.
    const sentBefore = h.apiRequests().length;
    handle.setTitle('after-destroy');
    handle.setBadge('99');
    await flush();
    expect(h.apiRequests().length).toBe(sentBefore);
  });

  test('methods called BEFORE openAck queue, dispatch after ack', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });

    // Call methods immediately, before responding.
    handle.setTitle('queued');
    handle.activate();
    await flush();

    // Nothing dispatched yet — openAck is still pending.
    expect(h.apiRequests('ui._drawerTab.setTitle').length).toBe(0);
    expect(h.apiRequests('ui._drawerTab.activate').length).toBe(0);

    // Resolve ack — queued dispatches now fly in registration order.
    h.respond(h.apiRequests('ui.registerDrawerTab')[0]!.requestId, undefined);
    await flush();

    expect(h.apiRequests('ui._drawerTab.setTitle')[0]!.args).toEqual(['my-tab', 'queued']);
    expect(h.apiRequests('ui._drawerTab.activate')[0]!.args).toEqual(['my-tab']);
  });

  test('openAck rejection skips method dispatches (catch branch)', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });

    handle.setTitle('queued');
    h.rejectResponse(h.apiRequests('ui.registerDrawerTab')[0]!.requestId, 'FE timed out');
    await flush();

    // setTitle's chain hits the catch branch — no dispatch.
    expect(h.apiRequests('ui._drawerTab.setTitle').length).toBe(0);
  });

  test('onActivate registers a handler closure + sends register-handler kind=drawerTabActivate', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });
    h.respond(h.apiRequests('ui.registerDrawerTab')[0]!.requestId, undefined);
    await flush();

    const unsub = handle.onActivate(() => {});
    await flush();

    expect(h.registerHandlerClosure).toHaveBeenCalledTimes(1);
    const regMsgs = h.registerHandlers('drawerTabActivate');
    expect(regMsgs).toHaveLength(1);
    expect(regMsgs[0]!.scriptId).toBe('script-fixture');
    expect((regMsgs[0] as RegisterHandler & { tabId: string }).tabId).toBe('my-tab');
    expect(regMsgs[0]!.hasHandler).toBe(true);

    // unsub: drops closure + sends unregister-handler.
    unsub();
    expect(h.unregisterHandlerClosure).toHaveBeenCalledTimes(1);
    const unregMsgs = h.unregisterHandlers('drawerTabActivate');
    expect(unregMsgs).toHaveLength(1);
    expect(unregMsgs[0]!.handlerId).toBe(regMsgs[0]!.handlerId);
  });

  test('onActivate after destroy returns a no-op unsub (handler never registered)', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerDrawerTab({ id: 'my-tab', title: 'T' });
    h.respond(h.apiRequests('ui.registerDrawerTab')[0]!.requestId, undefined);
    await flush();

    handle.destroy();
    await flush();
    h.registerHandlerClosure.mockClear();

    const unsub = handle.onActivate(() => {});
    expect(h.registerHandlerClosure).not.toHaveBeenCalled();
    expect(typeof unsub).toBe('function');
    // No register-handler IPC sent.
    expect(h.registerHandlers('drawerTabActivate').length).toBe(0);
  });
});

// ─── Input bar action handle method router ──────────────────────────────────

describe('api-proxy: InputBarAction handle methods', () => {
  test('setLabel / setSubtitle / setEnabled / destroy dispatch their canonical IPCs', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerInputBarAction({ id: 'act-1', label: 'Initial' });
    h.respond(h.apiRequests('ui.registerInputBarAction')[0]!.requestId, undefined);
    await flush();

    handle.setLabel('Renamed');
    handle.setSubtitle('A subtitle');
    handle.setEnabled(false);
    handle.destroy();
    await flush();

    expect(h.apiRequests('ui._inputBar.setLabel')[0]!.args).toEqual(['act-1', 'Renamed']);
    expect(h.apiRequests('ui._inputBar.setSubtitle')[0]!.args).toEqual(['act-1', 'A subtitle']);
    expect(h.apiRequests('ui._inputBar.setEnabled')[0]!.args).toEqual(['act-1', false]);
    expect(h.apiRequests('ui._inputBar.destroy')[0]!.args).toEqual(['act-1']);
  });

  test('setSubtitle without arg passes undefined (clear-subtitle semantics)', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerInputBarAction({ id: 'act-1', label: 'L' });
    h.respond(h.apiRequests('ui.registerInputBarAction')[0]!.requestId, undefined);
    await flush();

    handle.setSubtitle();
    await flush();

    expect(h.apiRequests('ui._inputBar.setSubtitle')[0]!.args).toEqual(['act-1', undefined]);
  });

  test('post-destroy method calls no-op silently', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerInputBarAction({ id: 'act-1', label: 'L' });
    h.respond(h.apiRequests('ui.registerInputBarAction')[0]!.requestId, undefined);
    await flush();

    handle.destroy();
    await flush();
    const sentBefore = h.apiRequests().length;
    handle.setLabel('nope'); handle.setEnabled(true);
    await flush();
    expect(h.apiRequests().length).toBe(sentBefore);
  });

  test('onClick registers a handler closure + sends register-handler kind=inputBarActionClick', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerInputBarAction({ id: 'act-1', label: 'L' });
    h.respond(h.apiRequests('ui.registerInputBarAction')[0]!.requestId, undefined);
    await flush();

    const unsub = handle.onClick(() => {});
    await flush();

    expect(h.registerHandlerClosure).toHaveBeenCalledTimes(1);
    const regs = h.registerHandlers('inputBarActionClick');
    expect(regs).toHaveLength(1);
    expect((regs[0] as RegisterHandler & { actionId: string }).actionId).toBe('act-1');
    expect(regs[0]!.scriptId).toBe('script-fixture');

    unsub();
    expect(h.unregisterHandlers('inputBarActionClick')).toHaveLength(1);
    expect(h.unregisterHandlers('inputBarActionClick')[0]!.handlerId).toBe(regs[0]!.handlerId);
  });

  test('onClick: openAck rejection drops the closure (catch branch)', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.registerInputBarAction({ id: 'act-1', label: 'L' });
    handle.onClick(() => {});  // queued; openAck still pending

    h.rejectResponse(h.apiRequests('ui.registerInputBarAction')[0]!.requestId, 'FE timed out');
    await flush();

    // Closure dropped via the openAck-reject catch branch.
    expect(h.unregisterHandlerClosure).toHaveBeenCalledTimes(1);
    // register-handler was never sent (ack rejected before buildAndSend ran).
    expect(h.registerHandlers('inputBarActionClick').length).toBe(0);
  });
});

// ─── addStyle handle .remove() lifecycle ────────────────────────────────────

describe('api-proxy: addStyle handle .remove()', () => {
  test('remove() awaits the handle promise, then dispatches handle-method remove', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.dom.addStyle('body { color: red }');

    // addStyle dispatches ui.dom.addStyle, awaits the HandleRef response.
    const addStyleReq = h.apiRequests('ui.dom.addStyle')[0]!;
    expect(addStyleReq.args).toEqual(['body { color: red }']);

    // Respond with a proper HandleRef shape — `__handleRef: true`, plus
    // `id` + `kind` strings (per `isHandleRef`). The kind for addStyle
    // is `'StyleHandle'` (see HandleKind union in script-runner-ipc.ts).
    h.respond(addStyleReq.requestId, {
      __handleRef: true, id: 'h-style-1', kind: 'StyleHandle',
    });
    await flush();

    handle.remove();
    await flush();

    // Removal dispatches via dispatchOnHandle, which sends an api-request
    // with method='remove' AND a `targetHandle` field referencing the
    // canonical HandleRef. We assert both — the method is 'remove' and
    // the targetHandle.id matches.
    const post = h.apiRequests().filter((r) => r.requestId !== addStyleReq.requestId);
    expect(post).toHaveLength(1);
    expect(post[0]!.method).toBe('remove');
    expect((post[0] as ApiProxyRequest & { targetHandle: { id: string } }).targetHandle.id).toBe('h-style-1');
  });

  test('remove() before handle promise resolves still waits and dispatches', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.dom.addStyle('span {}');
    const addStyleReq = h.apiRequests('ui.dom.addStyle')[0]!;

    // Call remove() BEFORE the handle promise resolves.
    handle.remove();
    await flush();

    // Nothing dispatched yet for removal — still waiting on handle.
    const beforeAck = h.apiRequests().filter((r) => r.requestId !== addStyleReq.requestId);
    expect(beforeAck.length).toBe(0);

    // Resolve the handle.
    h.respond(addStyleReq.requestId, {
      __handleRef: true, id: 'h-late', kind: 'StyleHandle',
    });
    await flush();

    const post = h.apiRequests().filter((r) => r.requestId !== addStyleReq.requestId);
    expect(post).toHaveLength(1);
    expect((post[0] as ApiProxyRequest & { targetHandle: { id: string } }).targetHandle.id).toBe('h-late');
  });

  test('remove() swallows handle-rejection silently (canonical: sync void)', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.dom.addStyle('p {}');
    const addStyleReq = h.apiRequests('ui.dom.addStyle')[0]!;

    h.rejectResponse(addStyleReq.requestId, 'addStyle host error');
    await flush();

    // Calling remove() after handle-rejection must not throw.
    expect(() => handle.remove()).not.toThrow();
    await flush();
  });

  test('opts.id (replace-by-id semantics) threads to canonical', async () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.addStyle('div {}', { id: 'theme-block' });
    const req = h.apiRequests('ui.dom.addStyle')[0]!;
    expect(req.args).toEqual(['div {}', { id: 'theme-block' }]);
  });
});

// ─── FloatWidget handle method router + position cache ──────────────────────

describe('api-proxy: FloatWidget handle methods', () => {
  test('moveTo updates local cache SYNC + dispatches ui._floatWidget.moveTo', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.createFloatWidget({ width: 200, height: 100 });
    h.respond(h.apiRequests('ui.createFloatWidget')[0]!.requestId, undefined);
    await flush();

    handle.moveTo(50, 60);
    // Sync read reflects the moveTo IMMEDIATELY (before microtask flush).
    expect(handle.getPosition()).toEqual({ x: 50, y: 60 });

    await flush();
    expect(h.apiRequests('ui._floatWidget.moveTo')[0]!.args).toEqual([
      (h.apiRequests('ui.createFloatWidget')[0]!.args[0] as { _widgetId: string })._widgetId,
      50, 60,
    ]);
  });

  test('setVisible / isVisible track local cache + dispatch IPC', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.createFloatWidget({ width: 100, height: 100 });
    h.respond(h.apiRequests('ui.createFloatWidget')[0]!.requestId, undefined);
    await flush();

    handle.setVisible(false);
    expect(handle.isVisible()).toBe(false);
    handle.setVisible(true);
    expect(handle.isVisible()).toBe(true);
    await flush();

    const visReqs = h.apiRequests('ui._floatWidget.setVisible');
    expect(visReqs).toHaveLength(2);
    expect(visReqs[0]!.args[1]).toBe(false);
    expect(visReqs[1]!.args[1]).toBe(true);
  });

  test('destroy dispatches ui._floatWidget.destroy and no-ops subsequent calls', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.createFloatWidget({ width: 100, height: 100 });
    h.respond(h.apiRequests('ui.createFloatWidget')[0]!.requestId, undefined);
    await flush();

    handle.destroy();
    await flush();
    expect(h.apiRequests('ui._floatWidget.destroy').length).toBe(1);

    const before = h.apiRequests().length;
    handle.moveTo(99, 99);
    handle.setVisible(false);
    await flush();
    expect(h.apiRequests().length).toBe(before);
  });

  test('onDragEnd registers a handler closure + sends register-handler kind=floatWidgetDragEnd', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.createFloatWidget({ width: 100, height: 100 });
    h.respond(h.apiRequests('ui.createFloatWidget')[0]!.requestId, undefined);
    await flush();

    const widgetId = (h.apiRequests('ui.createFloatWidget')[0]!.args[0] as { _widgetId: string })._widgetId;
    const unsub = handle.onDragEnd(() => {});
    await flush();

    expect(h.registerHandlerClosure).toHaveBeenCalledTimes(1);
    const regs = h.registerHandlers('floatWidgetDragEnd');
    expect(regs).toHaveLength(1);
    expect((regs[0] as RegisterHandler & { widgetId: string }).widgetId).toBe(widgetId);

    unsub();
    expect(h.unregisterHandlers('floatWidgetDragEnd')).toHaveLength(1);
  });
});

// ─── AdvancedModal handle method router + onDismiss bus pattern ─────────────

describe('api-proxy: AdvancedModal handle methods', () => {
  test('setTitle / dismiss dispatch their canonical method+args after openAck', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.showAdvancedModal({ title: 'Initial' });
    h.respond(h.apiRequests('ui.showAdvancedModal')[0]!.requestId, undefined);
    await flush();

    const modalId = (h.apiRequests('ui.showAdvancedModal')[0]!.args[0] as { _modalId: string })._modalId;
    handle.setTitle('Renamed');
    handle.dismiss();
    await flush();

    expect(h.apiRequests('ui._advModal.setTitle')[0]!.args).toEqual([modalId, 'Renamed']);
    expect(h.apiRequests('ui._advModal.dismiss')[0]!.args).toEqual([modalId]);
  });

  test('post-dismiss method calls no-op (dismissedRef gate)', async () => {
    // Trigger the dismissed flag via the open-dispatch rejection path.
    // Rejecting openAck flips dismissedRef.current = true and fires the
    // teardown listeners.
    const h = makeHarness();
    const handle = h.proxy.api.ui.showAdvancedModal({ title: 'T' });

    h.rejectResponse(h.apiRequests('ui.showAdvancedModal')[0]!.requestId, 'open failed');
    await flush();

    expect(handle.dismissed).toBe(true);

    const before = h.apiRequests().length;
    handle.setTitle('nope');
    handle.dismiss();
    await flush();
    expect(h.apiRequests().length).toBe(before);
  });

  test('onDismiss adds a sync listener; returned unsub is idempotent', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.showAdvancedModal({ title: 'T' });
    h.respond(h.apiRequests('ui.showAdvancedModal')[0]!.requestId, undefined);
    await flush();

    const fn = mock(() => {});
    const unsub = handle.onDismiss(fn);
    // No register-handler IPC for onDismiss — it's a bus-style sync register
    // local to the child runtime. Listeners fire via
    // notifyAdvancedModalDismissed (tested in api-proxy-notice-companions).
    expect(h.registerHandlers('advancedModalDismiss').length).toBe(0);
    expect(typeof unsub).toBe('function');

    // Idempotent unsub.
    unsub();
    unsub();  // second call must not throw
  });

  test('onDismiss on already-dismissed handle fires the listener on next microtask', async () => {
    const h = makeHarness();
    const handle = h.proxy.api.ui.showAdvancedModal({ title: 'T' });

    // Reject open → handle becomes dismissed with reason='teardown'.
    h.rejectResponse(h.apiRequests('ui.showAdvancedModal')[0]!.requestId, 'open fail');
    await flush();
    expect(handle.dismissed).toBe(true);

    const fn = mock(() => {});
    handle.onDismiss(fn);
    await flush();

    expect(fn).toHaveBeenCalledTimes(1);
    // Reason is 'teardown' from the open-dispatch failure synthesis.
    expect(fn).toHaveBeenCalledWith('teardown');
  });
});

// ─── Cross-script isolation reset ───────────────────────────────────────────

describe('api-proxy: handle module-state isolation', () => {
  test('resetApiProxy clears per-script handle state between tests', async () => {
    resetApiProxy();
    const h1 = makeHarness({ scriptId: 'script-X' });
    const handle = h1.proxy.api.ui.createFloatWidget({ width: 1, height: 1 });
    h1.respond(h1.apiRequests('ui.createFloatWidget')[0]!.requestId, undefined);
    await flush();

    handle.moveTo(5, 5);
    expect(handle.getPosition()).toEqual({ x: 5, y: 5 });

    resetApiProxy();

    // After reset, a fresh widget for the same script starts at the default
    // (0, 0) position cache.
    const h2 = makeHarness({ scriptId: 'script-X' });
    const handle2 = h2.proxy.api.ui.createFloatWidget({ width: 1, height: 1 });
    h2.respond(h2.apiRequests('ui.createFloatWidget')[0]!.requestId, undefined);
    await flush();
    expect(handle2.getPosition()).toEqual({ x: 0, y: 0 });
  });
});
