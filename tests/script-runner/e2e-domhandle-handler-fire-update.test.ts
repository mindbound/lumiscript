/**
 * v1.0.0-rc.5 regression test — DOMHandle methods called from inside the
 * same handle's `on(event, cb)` body must reach the canonical (and thus
 * the FE) cleanly, not silently bail with RunCompletedError.
 *
 * Bug (caught during rc.5 manual testing of `theme-picker-panel`):
 *
 *   1. `buildDOMHandleProxy` used plain `dispatch(method, args)` for
 *      `update / remove / makeDraggable / injectChild` — no `targetHandle`
 *      in the IPC envelope.
 *   2. Host's `resolveActiveRun('api-request')` denied fallback for
 *      `_runIdSource === 'context'` even when targeting a persistent
 *      handle. The handler-fire ALS context's runId is dropped on
 *      handler return; by the time the inner handle.update dispatch
 *      lands at the parent, the activeRun is gone.
 *
 *   Combined effect: every dispatch initiated from inside a click handler
 *   bailed with `RunCompletedError`, swallowed by the proxy's
 *   `.catch(() => {})` "sync void — drop errors" pattern. No log, no
 *   throw, no visible failure — the DOM just didn't update.
 *
 * Fix:
 *   - api-proxy.ts: DOMHandle methods now route through `dispatchOnHandle`
 *     with `targetHandle: { __handleRef: true, id: elementId, kind: 'DOMHandle' }`.
 *   - host-dispatcher.ts: `resolveActiveRun` extended to allow
 *     `'context'` source for persistent handles (was `'ctx'` only).
 *
 * Coverage:
 *   1. End-to-end — handle.update() called from inside handle.on('click')
 *      reaches the FE via spindle.sendToFrontend with a `dom_update` IPC
 *      carrying the new HTML.
 *   2. Structural — the api-request dispatched for `ui._dom.update`
 *      carries `targetHandle.kind === 'DOMHandle'` so the host's
 *      persistent-handle fallback can engage.
 *
 * Future-proofing: any refactor that strips `targetHandle` from DOMHandle
 * dispatches (e.g. reverting `dispatchOnHandle` → `dispatch`) or that
 * removes the `'context'` arm from the fallback rule will fail these
 * tests and surface the regression immediately.
 *
 * Full post-mortem: `notes/post-mortem-domhandle-handler-fire-runcompleted.md`.
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
    // app_manipulation gates `api.ui.dom.inject` + the DOMHandle methods.
    grantedPermissions: new Set<string>(['app_manipulation']),
    userId:             'test-user',
  };
}

function findDomListenerHandler(ipc: ScriptRunnerMockIpc): RegisterHandler | undefined {
  return ipc.parentInbox().find(
    (m): m is RegisterHandler => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as RegisterHandler;
      return r.type === 'register-handler' && r.kind === 'domEventListener';
    },
  );
}

function findUpdateRequest(ipc: ScriptRunnerMockIpc, sinceIdx: number = 0): ApiProxyRequest | undefined {
  return ipc.parentInbox().slice(sinceIdx).find(
    (m): m is ApiProxyRequest =>
      typeof m === 'object' && m !== null &&
      (m as { type?: unknown }).type === 'api-request' &&
      (m as { method?: unknown }).method === 'ui._dom.update',
  );
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: DOMHandle method dispatch from inside handler-fire (rc.5 regression)', () => {
  test('handle.update() called inside handle.on(click) reaches the FE via dom_update IPC', async () => {
    const { ipc } = await setupE2E();
    const mockSpindle = (globalThis as { spindle?: { sendToFrontend: ReturnType<typeof Object> } }).spindle!;
    const sendToFrontend = mockSpindle.sendToFrontend as unknown as { mock: { calls: unknown[][] } };

    const code = `
      const handle = api.ui.dom.inject(
        'body',
        '<div data-action="cycle">INITIAL</div>',
        { id: 'test-chip' }
      );
      handle.on('click', () => {
        handle.update('<div data-action="cycle">UPDATED</div>');
      });
      return 'body-done';
    `;
    const scriptResult = await dispatchRunScript(makeScript('script-A', code), makeRequest());
    expect(scriptResult.ok).toBe(true);

    const reg = findDomListenerHandler(ipc);
    expect(reg).toBeDefined();
    expect(reg!.kind).toBe('domEventListener');

    // Snapshot sendToFrontend calls before firing so we can isolate the
    // ones produced by the handler-fire chain.
    const callsBefore = sendToFrontend.mock.calls.length;

    // Fire the click handler — same shape as the production fire path
    // (handleRegisterHandler's wrapper at host-dispatcher.ts:2530).
    const handlerResult = await __sendRunHandlerRequestForTests(
      'script-A',
      reg!.handlerId,
      'domEventListener',
      [{ type: 'click', dataset: { action: 'cycle' } }],
      5_000,
    );

    // Without the fix, this would surface as ok=true at the handler level
    // (the closure didn't throw — the inner dispatch's .catch swallowed
    // the RunCompletedError) but no dom_update IPC would reach the FE.
    // The fix means the dispatch resolves cleanly AND the FE update happens.
    expect(handlerResult.ok).toBe(true);

    const newCalls = sendToFrontend.mock.calls.slice(callsBefore);
    const domUpdates = newCalls.filter(
      (call: unknown[]) =>
        typeof call[0] === 'object' && call[0] !== null &&
        (call[0] as { type?: unknown }).type === 'dom_update',
    );
    expect(domUpdates.length).toBe(1);
    const updateMsg = domUpdates[0]![0] as { type: 'dom_update'; html: string; elementId: string };
    expect(updateMsg.html).toContain('UPDATED');
    expect(typeof updateMsg.elementId).toBe('string');
    expect(updateMsg.elementId.length).toBeGreaterThan(0);
  });

  test('DOMHandle method dispatch IPC envelope carries targetHandle with kind=DOMHandle', async () => {
    // Structural check on the proxy fix: `dispatchOnHandle` (vs plain
    // `dispatch`) is what threads targetHandle into the api-request.
    // Without this, the host's `resolveActiveRun` has no signal to apply
    // the persistent-handle fallback even with the rule extension.
    const { ipc } = await setupE2E();

    const code = `
      const handle = api.ui.dom.inject('body', 'X', { id: 'h1' });
      handle.on('click', () => { handle.update('Y'); });
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());

    const reg = findDomListenerHandler(ipc)!;
    const inboxBeforeFire = ipc.parentInbox().length;

    await __sendRunHandlerRequestForTests(
      'script-A',
      reg.handlerId,
      'domEventListener',
      [{ type: 'click', dataset: {} }],
      5_000,
    );

    const updateReq = findUpdateRequest(ipc, inboxBeforeFire);
    expect(updateReq).toBeDefined();
    expect(updateReq!.targetHandle).toBeDefined();
    expect(updateReq!.targetHandle!.__handleRef).toBe(true);
    expect(updateReq!.targetHandle!.kind).toBe('DOMHandle');
    // The handle id in the IPC should be a non-empty string — the actual
    // value is allocated by the proxy via getOrAllocateElementId.
    expect(typeof updateReq!.targetHandle!.id).toBe('string');
    expect(updateReq!.targetHandle!.id.length).toBeGreaterThan(0);
    // _runIdSource should be 'context' — the handler-fire ALS captured
    // the runId. (If this ever changes to 'ctx' or 'latest', the fix's
    // condition `(source === 'ctx' || source === 'context')` still covers
    // it; this assertion just documents the observed source for clarity.)
    expect(updateReq!._runIdSource).toBe('context');
  });

  test('multiple sequential handle.update calls from repeat fires all reach the FE', async () => {
    // Defends against any future regression where the first call works
    // but subsequent ones drop (e.g. handle ref de-duped on a per-fire
    // basis, or fallback rule silently restricts to first-fire only).
    const { ipc } = await setupE2E();
    const mockSpindle = (globalThis as { spindle?: { sendToFrontend: ReturnType<typeof Object> } }).spindle!;
    const sendToFrontend = mockSpindle.sendToFrontend as unknown as { mock: { calls: unknown[][] } };

    const code = `
      let i = 0;
      const handle = api.ui.dom.inject('body', 'start', { id: 'counter' });
      handle.on('click', () => {
        i++;
        handle.update('clicked-' + i);
      });
    `;
    await dispatchRunScript(makeScript('script-A', code), makeRequest());
    const reg = findDomListenerHandler(ipc)!;

    const callsBefore = sendToFrontend.mock.calls.length;

    for (let n = 0; n < 3; n++) {
      const r = await __sendRunHandlerRequestForTests(
        'script-A',
        reg.handlerId,
        'domEventListener',
        [{ type: 'click', dataset: {} }],
        5_000,
      );
      expect(r.ok).toBe(true);
    }

    const newCalls = sendToFrontend.mock.calls.slice(callsBefore);
    const domUpdates = newCalls.filter(
      (call: unknown[]) =>
        typeof call[0] === 'object' && call[0] !== null &&
        (call[0] as { type?: unknown }).type === 'dom_update',
    );
    expect(domUpdates.length).toBe(3);
    expect((domUpdates[0]![0] as { html: string }).html).toContain('clicked-1');
    expect((domUpdates[1]![0] as { html: string }).html).toContain('clicked-2');
    expect((domUpdates[2]![0] as { html: string }).html).toContain('clicked-3');
  });
});
