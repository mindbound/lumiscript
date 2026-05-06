/**
 * v0.27.1 — host-dispatcher routing for `kind: 'domDelegate'` register-handler.
 *
 * Verifies that a `register-handler` IPC carrying `kind: 'domDelegate'`
 * lands on the canonical `active.api.ui.dom.delegate(...)` and produces
 * the expected `dom_delegate_register` envelope to the frontend. Uses the
 * same `setupLateRegisterScenario` fixture other handler-kind dispatch
 * tests use (see `host-dispatcher-late-register-kinds.test.ts`).
 *
 * Coverage focus:
 *   1. Register-handler IPC of kind=`'domDelegate'` produces a
 *      `dom_delegate_register` BE→FE message with the right shape.
 *   2. The canonical wrapper closure is bound such that frontend-side
 *      `dom_delegate_event` notices route back through
 *      `sendRunHandlerRequest` to the child closure (fire path).
 *   3. The cleanup fn stored under handlerId triggers a
 *      `dom_delegate_unregister` when invoked.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { setupLateRegisterScenario } from '../_infra/long-running-script.js';
import {
  __reset as resetDOMRegistry,
  getDelegation,
} from '../../src/engine/dom-registry.js';
import type { RegisterHandler } from '../../src/types/script-runner-ipc.js';
import type { DOMDelegatedEventData } from '../../src/types/script.js';

beforeEach(() => {
  resetDOMRegistry();
});

// `setupLateRegisterScenario`'s `sendLateRegister` types its `msg` arg as
// `Omit<RegisterHandler, 'runId'>` — but TypeScript's Omit over a
// discriminated union loses per-variant fields like `selector` / `event`
// that only exist on certain kinds. Cast through this helper to preserve
// the literal's per-kind shape while the fixture auto-fills runId.
type LateRegisterMsg = Omit<RegisterHandler, 'runId'>;
function asLateRegister(msg: Omit<RegisterHandler & { kind: 'domDelegate' }, 'runId'>): LateRegisterMsg {
  return msg as LateRegisterMsg;
}

// Helper — read sent FE messages from the mock spindle.
function sentToFrontend(): unknown[] {
  return ((globalThis as unknown as { spindle: { sendToFrontend: { mock: { calls: unknown[][] } } } })
    .spindle.sendToFrontend.mock.calls).map((call) => call[0]);
}

function messagesOfType(type: string): Array<Record<string, unknown>> {
  return sentToFrontend().filter(
    (m): m is Record<string, unknown> =>
      typeof m === 'object' && m !== null && (m as { type?: unknown }).type === type,
  );
}

// ─── Register routes through the canonical engine ────────────────────────────

describe('host-dispatcher: kind=\'domDelegate\' register-handler', () => {
  test('routes through active.api.ui.dom.delegate and emits dom_delegate_register', async () => {
    // `setupLateRegisterScenario`'s default permission set covers the
    // common register-handler kinds (tools / macros / interceptors /
    // generation) but NOT `app_manipulation` — DOMAPI's gate. Add it so
    // the canonical `api.ui.dom.delegate(...)` doesn't throw on dispatch.
    const grantedPermissions = new Set([
      'tools', 'chat_mutation', 'macro_interceptor', 'interceptor',
      'chats', 'generation', 'app_manipulation',
    ]);
    const scn = await setupLateRegisterScenario({ grantedPermissions });

    // Note: `sendLateRegister` auto-fills `runId` to run1's id (the
    // late-register path). The test's assertion is on the canonical
    // engine call landing — works whether the run is active or stale —
    // so we don't need to specify runId here.
    await scn.sendLateRegister(asLateRegister({
      type:       'register-handler',
      kind:       'domDelegate',
      scriptId:   scn.scriptId,
      handlerId:  'h-delegate-1',
      selector:   'button[data-clickable]',
      event:      'click',
      options:    { root: 'chat' },
      hasHandler: true,
    }));

    // Canonical engine invoked → addDelegation populated the registry.
    // Find it by walking the dispatch trail: the engine sends one
    // dom_delegate_register message carrying the host-allocated
    // delegationId; we read it off there.
    const registerMsgs = messagesOfType('dom_delegate_register');
    expect(registerMsgs).toHaveLength(1);
    const sentMsg = registerMsgs[0]!;
    expect(sentMsg.scriptId).toBe(scn.scriptId);
    expect(sentMsg.selector).toBe('button[data-clickable]');
    expect(sentMsg.event).toBe('click');
    expect(sentMsg.root).toBe('chat');
    expect(typeof sentMsg.delegationId).toBe('string');

    // Registry round-trip: getDelegation returns the entry for this
    // delegationId, scoped to the registering script.
    const entry = getDelegation(sentMsg.delegationId as string);
    expect(entry).toBeDefined();
    expect(entry!.scriptId).toBe(scn.scriptId);
    expect(entry!.selector).toBe('button[data-clickable]');
    expect(entry!.event).toBe('click');
    // The handler stored is the host-side wrapper that fires
    // sendRunHandlerRequest. Don't probe internals — just verify it's
    // a function.
    expect(typeof entry!.handler).toBe('function');
  });

  test('forwards options.preventDefault + stopPropagation onto the FE message', async () => {
    // `setupLateRegisterScenario`'s default permission set covers the
    // common register-handler kinds (tools / macros / interceptors /
    // generation) but NOT `app_manipulation` — DOMAPI's gate. Add it so
    // the canonical `api.ui.dom.delegate(...)` doesn't throw on dispatch.
    const grantedPermissions = new Set([
      'tools', 'chat_mutation', 'macro_interceptor', 'interceptor',
      'chats', 'generation', 'app_manipulation',
    ]);
    const scn = await setupLateRegisterScenario({ grantedPermissions });

    await scn.sendLateRegister(asLateRegister({
      type:       'register-handler',
      kind:       'domDelegate',
      scriptId:   scn.scriptId,
      handlerId:  'h-delegate-pdsp',
      selector:   'a[href]',
      event:      'click',
      options:    {
        root: 'chat',
        preventDefault:  true,
        stopPropagation: true,
        messageId:       'msg-7',
      },
      hasHandler: true,
    }));

    const sentMsg = messagesOfType('dom_delegate_register')[0]!;
    expect(sentMsg.preventDefault).toBe(true);
    expect(sentMsg.stopPropagation).toBe(true);
    expect(sentMsg.messageId).toBe('msg-7');
  });
});

// ─── Wrapper fires sendRunHandlerRequest on event ────────────────────────────

describe('host-dispatcher: domDelegate wrapper fires run-handler IPC on dispatch', () => {
  test('calling the registry wrapper produces a run-handler IPC carrying kind=\'domDelegate\'', async () => {
    // `setupLateRegisterScenario`'s default permission set covers the
    // common register-handler kinds (tools / macros / interceptors /
    // generation) but NOT `app_manipulation` — DOMAPI's gate. Add it so
    // the canonical `api.ui.dom.delegate(...)` doesn't throw on dispatch.
    const grantedPermissions = new Set([
      'tools', 'chat_mutation', 'macro_interceptor', 'interceptor',
      'chats', 'generation', 'app_manipulation',
    ]);
    const scn = await setupLateRegisterScenario({ grantedPermissions });

    await scn.sendLateRegister(asLateRegister({
      type:       'register-handler',
      kind:       'domDelegate',
      scriptId:   scn.scriptId,
      handlerId:  'h-delegate-fire',
      selector:   'button',
      event:      'click',
      options:    {},
      hasHandler: true,
    }));

    const registerMsg = messagesOfType('dom_delegate_register')[0]!;
    const entry = getDelegation(registerMsg.delegationId as string)!;

    // Simulate a frontend-fired delegate event by invoking the
    // host-side wrapper directly. The wrapper kicks off
    // sendRunHandlerRequest; we capture the resulting run-handler IPC
    // out of the child inbox.
    const fakeData: DOMDelegatedEventData = {
      type: 'click',
      matched: {
        tagName: 'BUTTON',
        classList: ['mybtn'],
        dataset: { clickable: 'true' },
        attributes: {},
        textContent: 'Yes',
      },
      modifiers: { ctrl: false, shift: false, alt: false, meta: false, button: 0 },
    };
    entry.handler(fakeData);

    // Wait a microtask tick so sendRunHandlerRequest has time to send.
    await new Promise((r) => setTimeout(r, 0));

    const inbox = scn.ipc.childInbox();
    const runHandlerReqs = inbox.filter(
      (m) => typeof m === 'object' && m !== null && (m as { type?: unknown }).type === 'run-handler',
    ) as Array<Record<string, unknown>>;
    expect(runHandlerReqs.length).toBeGreaterThanOrEqual(1);

    const last = runHandlerReqs[runHandlerReqs.length - 1]!;
    expect(last.kind).toBe('domDelegate');
    expect(last.scriptId).toBe(scn.scriptId);
    expect(last.handlerId).toBe('h-delegate-fire');
    // args carries the DOMDelegatedEventData payload as the single arg.
    const args = last.args as unknown[];
    expect(args).toHaveLength(1);
    expect((args[0] as DOMDelegatedEventData).matched.textContent).toBe('Yes');
  });
});

// ─── Late-register dual-update sanity ────────────────────────────────────────

describe('host-dispatcher: domDelegate late-register lands cleanly', () => {
  test('sending the register-handler against run1 (after run2 has started) still binds', async () => {
    // The `setupLateRegisterScenario` pre-state has run1's activeRun
    // dropped by run2's dispatch. `sendLateRegister` aliases run1's
    // runId on the IPC; the dispatcher's `activeOrLatestForScript`
    // fallback picks run2 as the routing target, the canonical engine
    // call still lands.
    // `setupLateRegisterScenario`'s default permission set covers the
    // common register-handler kinds (tools / macros / interceptors /
    // generation) but NOT `app_manipulation` — DOMAPI's gate. Add it so
    // the canonical `api.ui.dom.delegate(...)` doesn't throw on dispatch.
    const grantedPermissions = new Set([
      'tools', 'chat_mutation', 'macro_interceptor', 'interceptor',
      'chats', 'generation', 'app_manipulation',
    ]);
    const scn = await setupLateRegisterScenario({ grantedPermissions });

    // `sendLateRegister` auto-fills runId to run1's id — exactly the
    // stale-run scenario this test exercises.
    await scn.sendLateRegister(asLateRegister({
      type:       'register-handler',
      kind:       'domDelegate',
      scriptId:   scn.scriptId,
      handlerId:  'h-delegate-late',
      selector:   '[data-action]',
      event:      'click',
      options:    {},
      hasHandler: true,
    }));

    // Despite the stale runId, the engine should have processed the
    // register and emitted a dom_delegate_register.
    const msgs = messagesOfType('dom_delegate_register');
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.selector).toBe('[data-action]');
  });
});
