/**
 * v0.27.1 — child-side proxy dispatch tests for `api.ui.dom.delegate`.
 *
 * `delegate` is a register-handler-shaped proxy method (mirrors
 * `api.macros.registerInterceptor` and `api.worldInfo.registerInterceptor`):
 * generates a child-side `handlerId`, registers the user's closure via
 * `ctx.registerHandlerClosure`, sends a `register-handler` IPC with
 * `kind: 'domDelegate'` carrying the selector + event + options, and
 * returns a synchronous unsub fn. The unsub drops the closure and sends
 * `unregister-handler`.
 *
 * On match, the parent's host-dispatcher fires `RunHandlerRequest`
 * kind=`'domDelegate'` with `[data: DOMDelegatedEventData]` as args; the
 * child's stashed closure here unwraps args[0] and invokes the user
 * handler. These tests verify the closure routing surface.
 */

import { describe, test, expect, mock } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type {
  ChildToParentMessage,
  RegisterHandler,
  UnregisterHandler,
} from '../../src/types/script-runner-ipc.js';
import type { DOMDelegatedEventData } from '../../src/types/script.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  registeredHandlers:    Map<string, (...args: unknown[]) => unknown | Promise<unknown>>;
  unregisteredHandlerIds: string[];
}

function makeHarness(): Harness {
  const sent: ChildToParentMessage[] = [];
  const registeredHandlers = new Map<string, (...args: unknown[]) => unknown | Promise<unknown>>();
  const unregisteredHandlerIds: string[] = [];

  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'clickable-inputs',
    scriptName:         'Clickable Inputs',
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
  return {
    proxy: buildProxiedAPI(ctx),
    sent,
    registeredHandlers,
    unregisteredHandlerIds,
  };
}

function registerHandlerMessages(sent: ChildToParentMessage[]): RegisterHandler[] {
  return sent.filter(
    (m): m is RegisterHandler =>
      (m as { type?: unknown }).type === 'register-handler',
  );
}

function unregisterHandlerMessages(sent: ChildToParentMessage[]): UnregisterHandler[] {
  return sent.filter(
    (m): m is UnregisterHandler =>
      (m as { type?: unknown }).type === 'unregister-handler',
  );
}

// ─── register-handler IPC shape ──────────────────────────────────────────────

describe('api-proxy: api.ui.dom.delegate sends register-handler', () => {
  test('IPC carries kind=\'domDelegate\' + selector + event + scriptId + handlerId', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.delegate('button[data-clickable]', 'click', () => {});

    const msgs = registerHandlerMessages(h.sent);
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    expect(m.kind).toBe('domDelegate');
    expect((m as { kind: 'domDelegate' } & RegisterHandler).selector).toBe('button[data-clickable]');
    expect((m as { kind: 'domDelegate' } & RegisterHandler).event).toBe('click');
    expect(m.scriptId).toBe('clickable-inputs');
    expect(typeof m.handlerId).toBe('string');
    expect(m.handlerId.length).toBeGreaterThan(0);
    expect(m.hasHandler).toBe(true);
  });

  test('options are forwarded verbatim on the wire', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.delegate('a', 'click', () => {}, {
      root: 'document',
      messageId: 'msg-42',
      preventDefault: true,
      stopPropagation: false,
    });

    const m = registerHandlerMessages(h.sent)[0]! as RegisterHandler & { kind: 'domDelegate' };
    expect(m.options).toEqual({
      root: 'document',
      messageId: 'msg-42',
      preventDefault: true,
      stopPropagation: false,
    });
  });

  test('omitted options become an empty options object on the wire', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.delegate('button', 'click', () => {});

    const m = registerHandlerMessages(h.sent)[0]! as RegisterHandler & { kind: 'domDelegate' };
    expect(m.options).toEqual({});
  });

  test('registers the user closure under the same handlerId the IPC carries', () => {
    const h = makeHarness();
    h.proxy.api.ui.dom.delegate('button', 'click', () => {});

    const m = registerHandlerMessages(h.sent)[0]!;
    expect(h.registeredHandlers.has(m.handlerId)).toBe(true);
  });
});

// ─── closure routing ─────────────────────────────────────────────────────────

describe('api-proxy: stashed closure forwards args[0] to user handler', () => {
  test('user handler receives the DOMDelegatedEventData payload', async () => {
    const h = makeHarness();
    const userHandler = mock((data: DOMDelegatedEventData) => {
      // No-op; just verify args.
      void data;
    });
    h.proxy.api.ui.dom.delegate('button', 'click', userHandler);

    const m = registerHandlerMessages(h.sent)[0]!;
    const stashed = h.registeredHandlers.get(m.handlerId)!;

    const fakeData: DOMDelegatedEventData = {
      type: 'click',
      matched: {
        tagName: 'BUTTON',
        classList: [],
        dataset: { clickable: 'true' },
        attributes: {},
        textContent: 'Yes',
      },
      modifiers: { ctrl: false, shift: false, alt: false, meta: false },
    };

    await stashed(fakeData);

    expect(userHandler).toHaveBeenCalledTimes(1);
    expect(userHandler).toHaveBeenCalledWith(fakeData);
  });

  test('async user handler is awaited (fire-and-forget upstream still settles)', async () => {
    const h = makeHarness();
    let asyncCompleted = false;
    h.proxy.api.ui.dom.delegate('button', 'click', async () => {
      await new Promise((r) => setTimeout(r, 5));
      asyncCompleted = true;
    });

    const m = registerHandlerMessages(h.sent)[0]!;
    const stashed = h.registeredHandlers.get(m.handlerId)!;

    await stashed({} as DOMDelegatedEventData);
    expect(asyncCompleted).toBe(true);
  });
});

// ─── unsubscribe ─────────────────────────────────────────────────────────────

describe('api-proxy: unsubscribe', () => {
  test('returned unsub fn drops closure + sends unregister-handler kind=\'domDelegate\'', () => {
    const h = makeHarness();
    const unsub = h.proxy.api.ui.dom.delegate('button', 'click', () => {});

    const regMsg = registerHandlerMessages(h.sent)[0]!;
    expect(h.registeredHandlers.has(regMsg.handlerId)).toBe(true);

    unsub();

    const unregMsgs = unregisterHandlerMessages(h.sent);
    expect(unregMsgs).toHaveLength(1);
    const u = unregMsgs[0]!;
    expect(u.kind).toBe('domDelegate');
    expect(u.handlerId).toBe(regMsg.handlerId);
    expect(u.scriptId).toBe('clickable-inputs');

    expect(h.registeredHandlers.has(regMsg.handlerId)).toBe(false);
    expect(h.unregisteredHandlerIds).toContain(regMsg.handlerId);
  });

  test('multiple delegate() calls produce distinct handlerIds and independent unsubs', () => {
    const h = makeHarness();
    const unsub1 = h.proxy.api.ui.dom.delegate('button', 'click', () => {});
    const unsub2 = h.proxy.api.ui.dom.delegate('input', 'change', () => {});

    const msgs = registerHandlerMessages(h.sent);
    expect(msgs).toHaveLength(2);
    expect(msgs[0]!.handlerId).not.toBe(msgs[1]!.handlerId);

    // Unsubscribe only the first; the second's closure must remain.
    unsub1();
    expect(h.registeredHandlers.has(msgs[0]!.handlerId)).toBe(false);
    expect(h.registeredHandlers.has(msgs[1]!.handlerId)).toBe(true);

    unsub2();
    expect(h.registeredHandlers.has(msgs[1]!.handlerId)).toBe(false);
  });
});
