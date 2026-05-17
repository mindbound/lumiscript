/**
 * v1.0.0-rc.3+ coverage-strengthening pass — e2e parent-side internal
 * handle-request routers.
 *
 * Complements `e2e-handle-surfaces.test.ts` (which covers the Option-B
 * `ui.show*` / `ui.register*` / `ui.create*` registration routes) by
 * exercising the `ui._<surface>.<action>` second-tier routes that the
 * proxy's sync handle methods dispatch onto. Specifically:
 *
 *   - `handleInternalAdvancedModalRequest`   — `ui._advModal.setTitle/dismiss`
 *   - `handleInternalInputBarActionRequest`  — `ui._inputBar.setLabel/setSubtitle/setEnabled/destroy`
 *   - `handleInternalFloatWidgetRequest`     — `ui._floatWidget.moveTo/setVisible/destroy`
 *   - `handleInternalDrawerTabRequest`       — `ui._drawerTab.setTitle/setShortName/setBadge/activate/destroy`
 *
 * Each router is `async (req, active) → ApiProxyResponse` that
 * (a) extracts the scope-id from `req.args[0]`, (b) looks up the canonical
 * handle via `pendingXxx`, (c) routes by action-suffix into the canonical
 * method. Coverage gaps in pre-rc.3 were the action-switch branches; this
 * file walks each one through the full proxy → IPC → parent → canonical
 * loop using `dispatchRunScript` + an api-request watcher.
 *
 * NB: Method dispatches are fire-and-forget at the user-script level, but
 * `dispatchRunScript` waits for all outstanding chains (via api-proxy's
 * `trackChain`) before resolving — so by the time the script's run result
 * comes back, every method-dispatch IPC has already been processed
 * parent-side and the response delivered back to the child.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  notifyAdvancedModalOpened,
  notifyFloatWidgetCreated,
  notifyInputBarActionRegistered,
  notifyDrawerTabRegistered,
} from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { ApiProxyRequest } from '../../src/types/script-runner-ipc.js';

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
    grantedPermissions: new Set<string>([
      'ui_panels',         // createFloatWidget
      'app_manipulation',  // showAdvancedModal
    ]),
    userId:             'test-user',
  };
}

function watchApiRequest(
  spindle: MockSpindle,
  method: string,
  onReq: (req: ApiProxyRequest) => void,
): () => void {
  return spindle.backendProcesses.onMessage((event) => {
    const m = event.payload as { type?: unknown; method?: unknown };
    if (m && typeof m === 'object' && m.type === 'api-request' && m.method === method) {
      onReq(event.payload as ApiProxyRequest);
    }
  });
}

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

// ─── handleInternalAdvancedModalRequest ─────────────────────────────────────

describe('e2e: handleInternalAdvancedModalRequest', () => {
  test('setTitle routes to canonical with [modalId, title]', async () => {
    await setupE2E();
    const spindle = getSpindle();

    const unsubOpen = watchApiRequest(spindle, 'ui.showAdvancedModal', (req) => {
      const opts = req.args[0] as { _modalId: string };
      notifyAdvancedModalOpened(opts._modalId);
    });
    let setTitleArgs: unknown[] | null = null;
    const unsubSet = watchApiRequest(spindle, 'ui._advModal.setTitle', (req) => {
      setTitleArgs = req.args;
    });

    const result = await dispatchRunScript(
      makeScript('script-A', `
        const m = api.ui.showAdvancedModal({ title: 'Initial' });
        m.setTitle('Renamed');
        return m.modalId;
      `),
      makeRequest(),
    );

    unsubOpen(); unsubSet();
    expect(result.ok).toBe(true);
    expect(setTitleArgs).not.toBeNull();
    expect(setTitleArgs![0]).toBe(result.value);  // modalId
    expect(setTitleArgs![1]).toBe('Renamed');
  });

  test('dismiss routes to canonical with [modalId]', async () => {
    await setupE2E();
    const spindle = getSpindle();

    const unsubOpen = watchApiRequest(spindle, 'ui.showAdvancedModal', (req) => {
      const opts = req.args[0] as { _modalId: string };
      notifyAdvancedModalOpened(opts._modalId);
    });
    let dismissArgs: unknown[] | null = null;
    const unsubDismiss = watchApiRequest(spindle, 'ui._advModal.dismiss', (req) => {
      dismissArgs = req.args;
    });

    const result = await dispatchRunScript(
      makeScript('script-A', `
        const m = api.ui.showAdvancedModal({ title: 'T' });
        m.dismiss();
        return m.modalId;
      `),
      makeRequest(),
    );

    unsubOpen(); unsubDismiss();
    expect(result.ok).toBe(true);
    expect(dismissArgs).not.toBeNull();
    expect(dismissArgs![0]).toBe(result.value);
    expect(dismissArgs!.length).toBe(1);
  });
});

// ─── handleInternalInputBarActionRequest ────────────────────────────────────

describe('e2e: handleInternalInputBarActionRequest', () => {
  test('setLabel routes with [actionId, label]', async () => {
    await setupE2E();
    const spindle = getSpindle();
    const scriptId = 'script-A';
    const actionId = 'my-action';

    const unsubReg = watchApiRequest(spindle, 'ui.registerInputBarAction', () => {
      notifyInputBarActionRegistered(scriptId, actionId);
    });
    // Wrap captures in an object so TS doesn't narrow the bare variable
    // to its `null` initializer post-closure-declaration (control-flow
    // analysis treats closure-mutated locals as always-initial-value).
    const captured: { args?: unknown[] } = {};
    const unsubSet = watchApiRequest(spindle, 'ui._inputBar.setLabel', (req) => {
      captured.args = req.args;
    });

    const result = await dispatchRunScript(
      makeScript(scriptId, `
        const a = api.ui.registerInputBarAction({ id: '${actionId}', label: 'Initial', onClick: () => {} });
        a.setLabel('Renamed');
        return a.actionId;
      `),
      makeRequest(),
    );

    unsubReg(); unsubSet();
    expect(result.ok).toBe(true);
    expect(captured.args).toEqual([actionId, 'Renamed']);
  });

  test('setSubtitle / setEnabled / destroy all route with their args', async () => {
    await setupE2E();
    const spindle = getSpindle();
    const scriptId = 'script-A';
    const actionId = 'my-action';

    const unsubReg = watchApiRequest(spindle, 'ui.registerInputBarAction', () => {
      notifyInputBarActionRegistered(scriptId, actionId);
    });
    const captured: Record<string, unknown[]> = {};
    const unsubs = [
      unsubReg,
      watchApiRequest(spindle, 'ui._inputBar.setSubtitle', (req) => { captured.setSubtitle = req.args; }),
      watchApiRequest(spindle, 'ui._inputBar.setEnabled', (req) => { captured.setEnabled = req.args; }),
      watchApiRequest(spindle, 'ui._inputBar.destroy',    (req) => { captured.destroy    = req.args; }),
    ];

    const result = await dispatchRunScript(
      makeScript(scriptId, `
        const a = api.ui.registerInputBarAction({ id: '${actionId}', label: 'L', onClick: () => {} });
        a.setSubtitle('Sub');
        a.setEnabled(false);
        a.destroy();
        return a.actionId;
      `),
      makeRequest(),
    );

    for (const u of unsubs) u();
    expect(result.ok).toBe(true);
    expect(captured.setSubtitle).toEqual([actionId, 'Sub']);
    expect(captured.setEnabled).toEqual([actionId, false]);
    expect(captured.destroy).toEqual([actionId]);
  });
});

// ─── handleInternalFloatWidgetRequest ───────────────────────────────────────

describe('e2e: handleInternalFloatWidgetRequest', () => {
  test('moveTo / setVisible / destroy route with [widgetId, ...args]', async () => {
    await setupE2E();
    const spindle = getSpindle();

    let observedWidgetId: string | null = null;
    const unsubReg = watchApiRequest(spindle, 'ui.createFloatWidget', (req) => {
      observedWidgetId = (req.args[0] as { _widgetId: string })._widgetId;
      notifyFloatWidgetCreated(observedWidgetId);
    });
    const captured: Record<string, unknown[]> = {};
    const unsubs = [
      unsubReg,
      watchApiRequest(spindle, 'ui._floatWidget.moveTo',     (req) => { captured.moveTo     = req.args; }),
      watchApiRequest(spindle, 'ui._floatWidget.setVisible', (req) => { captured.setVisible = req.args; }),
      watchApiRequest(spindle, 'ui._floatWidget.destroy',    (req) => { captured.destroy    = req.args; }),
    ];

    const result = await dispatchRunScript(
      makeScript('script-A', `
        const w = api.ui.createFloatWidget({ width: 200, height: 100 });
        w.moveTo(50, 75);
        w.setVisible(false);
        w.destroy();
        return w.widgetId;
      `),
      makeRequest(),
    );

    for (const u of unsubs) u();
    expect(result.ok).toBe(true);
    expect(observedWidgetId).not.toBeNull();
    expect(captured.moveTo).toEqual([observedWidgetId, 50, 75]);
    expect(captured.setVisible).toEqual([observedWidgetId, false]);
    expect(captured.destroy).toEqual([observedWidgetId]);
  });
});

// ─── handleInternalDrawerTabRequest ─────────────────────────────────────────

describe('e2e: handleInternalDrawerTabRequest', () => {
  test('setTitle / setShortName / setBadge / activate / destroy route with [tabId, ...args]', async () => {
    await setupE2E();
    const spindle = getSpindle();
    const scriptId = 'script-A';
    const tabId = 'my-tab';

    const unsubReg = watchApiRequest(spindle, 'ui.registerDrawerTab', () => {
      notifyDrawerTabRegistered(scriptId, tabId);
    });
    const captured: Record<string, unknown[]> = {};
    const unsubs = [
      unsubReg,
      watchApiRequest(spindle, 'ui._drawerTab.setTitle',     (req) => { captured.setTitle     = req.args; }),
      watchApiRequest(spindle, 'ui._drawerTab.setShortName', (req) => { captured.setShortName = req.args; }),
      watchApiRequest(spindle, 'ui._drawerTab.setBadge',     (req) => { captured.setBadge     = req.args; }),
      watchApiRequest(spindle, 'ui._drawerTab.activate',     (req) => { captured.activate     = req.args; }),
      watchApiRequest(spindle, 'ui._drawerTab.destroy',      (req) => { captured.destroy      = req.args; }),
    ];

    const result = await dispatchRunScript(
      makeScript(scriptId, `
        const t = api.ui.registerDrawerTab({ id: '${tabId}', title: 'Initial' });
        t.setTitle('Renamed');
        t.setShortName('R');
        t.setBadge('42');
        t.activate();
        t.destroy();
        return t.tabId;
      `),
      makeRequest(),
    );

    for (const u of unsubs) u();
    expect(result.ok).toBe(true);
    expect(captured.setTitle).toEqual([tabId, 'Renamed']);
    expect(captured.setShortName).toEqual([tabId, 'R']);
    expect(captured.setBadge).toEqual([tabId, '42']);
    expect(captured.activate).toEqual([tabId]);
    expect(captured.destroy).toEqual([tabId]);
  });

  test('setBadge accepts null to clear (canonical accepts string | null)', async () => {
    await setupE2E();
    const spindle = getSpindle();
    const scriptId = 'script-A';
    const tabId = 'my-tab';

    const unsubReg = watchApiRequest(spindle, 'ui.registerDrawerTab', () => {
      notifyDrawerTabRegistered(scriptId, tabId);
    });
    const captured: { args?: unknown[] } = {};
    const unsubSet = watchApiRequest(spindle, 'ui._drawerTab.setBadge', (req) => {
      captured.args = req.args;
    });

    const result = await dispatchRunScript(
      makeScript(scriptId, `
        const t = api.ui.registerDrawerTab({ id: '${tabId}', title: 'T' });
        t.setBadge(null);
        return t.tabId;
      `),
      makeRequest(),
    );

    unsubReg(); unsubSet();
    expect(result.ok).toBe(true);
    expect(captured.args).toEqual([tabId, null]);
  });
});
