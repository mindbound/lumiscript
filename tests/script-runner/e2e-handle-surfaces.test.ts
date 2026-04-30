/**
 * Phase 11.E.1 — end-to-end Option-B handle-returning special-case routes.
 *
 * Tightens coverage on the parent's per-route happy-path machinery in
 * `handleApiRequest`'s switch:
 *
 *   - `ui.showAdvancedModal`        → handleShowAdvancedModalRequest
 *   - `ui.createFloatWidget`        → handleCreateFloatWidgetRequest
 *   - `ui.registerInputBarAction`   → handleRegisterInputBarActionRequest
 *   - `ui.registerDrawerTab`        → handleRegisterDrawerTabRequest
 *
 * Each route installs an Option B awaiter (FE-echo gate) before calling
 * the canonical, then awaits the matching `notifyXxx` to resolve. Tests
 * arrange a notify-on-arrival watcher so the awaiter clears as soon as
 * the api-request lands, letting run-result complete fast.
 *
 * These complement Phase 11.B's awaiter-machinery tests (which exercise
 * the awaiter table directly) by walking the FULL route end-to-end:
 * proxy → IPC → parent route → canonical → FE-echo wait → response.
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
    // Grant the permissions every UI special-case route checks. Without
    // these the canonical methods throw PERMISSION_DENIED before reaching
    // the awaiter wiring we're testing.
    grantedPermissions: new Set<string>([
      'ui_panels',           // createFloatWidget
      'app_manipulation',    // showAdvancedModal
    ]),
    userId:             'test-user',
  };
}

/**
 * Install a parent-side onMessage handler that calls the supplied
 * `onApiRequest` callback as soon as a matching api-request arrives.
 * Returns the registered unsubscribe so tests can clean up.
 */
function watchApiRequest(
  spindle: MockSpindle,
  method: string,
  onApiRequest: (req: ApiProxyRequest) => void,
): () => void {
  return spindle.backendProcesses.onMessage((event) => {
    const m = event.payload as { type?: unknown; method?: unknown };
    if (
      m && typeof m === 'object' &&
      m.type === 'api-request' &&
      m.method === method
    ) {
      onApiRequest(event.payload as ApiProxyRequest);
    }
  });
}

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: Option B handle-returning special-case routes', () => {
  test('ui.showAdvancedModal — full route: open echo → handle returns + handle.modalId matches threaded id', async () => {
    await setupE2E();
    const spindle = getSpindle();

    let observedModalId: string | null = null;
    const unsub = watchApiRequest(spindle, 'ui.showAdvancedModal', (req) => {
      const opts = req.args[0] as { _modalId: string };
      observedModalId = opts._modalId;
      // Simulate the FE echo arriving — resolves the parent's awaiter.
      notifyAdvancedModalOpened(observedModalId);
    });

    const result = await dispatchRunScript(
      makeScript('script-A', `
        const m = api.ui.showAdvancedModal({ title: 'Hello' });
        return m.modalId;
      `),
      makeRequest(),
    );

    unsub();
    expect(result.ok).toBe(true);
    // The modalId returned to the script body is exactly the one threaded
    // through the api-request, so it matches what the FE-echo watcher saw.
    expect(typeof result.value).toBe('string');
    expect(result.value).toBe(observedModalId);
  });

  test('ui.createFloatWidget — full route: create echo → handle returns + handle.widgetId matches', async () => {
    await setupE2E();
    const spindle = getSpindle();

    let observedWidgetId: string | null = null;
    const unsub = watchApiRequest(spindle, 'ui.createFloatWidget', (req) => {
      const opts = req.args[0] as { _widgetId: string };
      observedWidgetId = opts._widgetId;
      notifyFloatWidgetCreated(observedWidgetId);
    });

    const result = await dispatchRunScript(
      makeScript('script-A', `
        const w = api.ui.createFloatWidget({ width: 200, height: 100 });
        return w.widgetId;
      `),
      makeRequest(),
    );

    unsub();
    expect(result.ok).toBe(true);
    expect(result.value).toBe(observedWidgetId);
  });

  test('ui.registerInputBarAction — full route: register echo → handle returns + handle.actionId matches user-supplied id', async () => {
    await setupE2E();
    const spindle = getSpindle();

    const scriptId = 'script-A';
    const userActionId = 'my-action';
    const unsub = watchApiRequest(spindle, 'ui.registerInputBarAction', (req) => {
      // input-bar action ids are user-supplied (not child-generated).
      // The proxy ships them through directly.
      const opts = req.args[0] as { id: string };
      expect(opts.id).toBe(userActionId);
      notifyInputBarActionRegistered(scriptId, opts.id);
    });

    const result = await dispatchRunScript(
      makeScript(scriptId, `
        const a = api.ui.registerInputBarAction({ id: '${userActionId}', label: 'Click', onClick: () => {} });
        return a.actionId;
      `),
      makeRequest(),
    );

    unsub();
    expect(result.ok).toBe(true);
    expect(result.value).toBe(userActionId);
  });

  test('ui.registerDrawerTab — full route: register echo → handle returns + handle.tabId matches user-supplied id', async () => {
    await setupE2E();
    const spindle = getSpindle();

    const scriptId = 'script-A';
    const userTabId = 'my-tab';
    const unsub = watchApiRequest(spindle, 'ui.registerDrawerTab', (req) => {
      const opts = req.args[0] as { id: string };
      expect(opts.id).toBe(userTabId);
      notifyDrawerTabRegistered(scriptId, opts.id);
    });

    const result = await dispatchRunScript(
      makeScript(scriptId, `
        const t = api.ui.registerDrawerTab({ id: '${userTabId}', title: 'My Tab' });
        return t.tabId;
      `),
      makeRequest(),
    );

    unsub();
    expect(result.ok).toBe(true);
    expect(result.value).toBe(userTabId);
  });
});
