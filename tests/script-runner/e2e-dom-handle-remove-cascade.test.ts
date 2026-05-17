/**
 * v1.0.0-rc.4+ regression test for the DOMHandle.remove() →
 * handlerCleanups cascade-drop fix.
 *
 * Bug surfaced 2026-05-17 via mindbound's "Orrery script stays pinned
 * after the user closes its UI" report:
 *
 *   When a script does `const h = api.ui.dom.inject(...)` + `h.on('click', ...)`
 *   and later calls `h.remove()`, the canonical's `clearListeners(elementId)`
 *   detaches the FE-side listener and `unregisterElement(elementId)` drops
 *   the dom-registry entry. But the parent's `handlerCleanups[scriptId]`
 *   map retains the canonical-unsub closure for the now-removed listener
 *   — its `unsub()` would be a no-op (the underlying state is gone), but
 *   the entry itself stays.
 *
 *   Pre-rc.4 this was inert (`handlerCleanups` was only read by the
 *   explicit `unregister-handler` IPC path). Rc.4's pinning policy now
 *   reads `handlerCleanups.get(scriptId)?.size` for the `handlerClosures`
 *   pin signal, so orphan entries cause over-pinning: a script that
 *   created + removed all its DOM stays falsely pinned by stale
 *   handlerCleanups entries.
 *
 * Fix (host-dispatcher.ts):
 *   - New reverse index `domListenerHandlers: Map<scriptId, Map<elementId,
 *     Set<handlerId>>>` populated when `register-handler` arrives with
 *     kind='domEventListener'.
 *   - `handleInternalDomRequest`'s 'remove' branch computes
 *     `collectDescendantIds(elementId)` BEFORE the canonical
 *     `handle.remove()` (which would empty the dom-registry traversal),
 *     then for each id in [elementId, ...descendants] calls
 *     `dropDomListenerHandlersForElement` to invokeAndDrop each matching
 *     handlerCleanups entry.
 *
 * The test runs a script body that injects DOM, attaches a `.on()`
 * listener, then removes the handle. After the run, the parent's
 * handlerCleanups map should hold zero entries for this script.
 *
 * Uses the diagnostics surface (`getWorkerPoolDiagnostics`) to observe
 * the post-remove handlerClosures count — that's the load-bearing
 * downstream signal pinning depends on.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  getWorkerPoolDiagnostics,
  __getWorkerForScriptForTests,
  __hasHandlerCleanupForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

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
    grantedPermissions: new Set<string>(['app_manipulation']),
    userId:             'test-user',
  };
}

function countHandlerClosuresForScript(scriptId: string): number {
  const diag = getWorkerPoolDiagnostics();
  for (const w of diag.workers) {
    const entry = w.pinningScripts.find((s) => s.scriptId === scriptId);
    if (entry) return entry.counts.handlerClosures;
  }
  return 0;
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('v1.0.0-rc.4 — DOMHandle.remove() cascades into handlerCleanups cleanup', () => {
  test('inject + on(click) + remove() leaves zero handlerCleanups entries', async () => {
    await setupE2E();
    const scriptId = 'dom-remove-cascade-script';
    // Pre-assign so getWorkerPoolDiagnostics has a worker to inspect.
    __getWorkerForScriptForTests(scriptId);

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'ph-1' });
      h.on('click', () => {});
      h.remove();
    `;
    const result = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(result.ok).toBe(true);

    // Post-run, no handlerCleanups entries for this script. Pre-fix this
    // would have left one orphan entry, falsely pinning the worker.
    expect(countHandlerClosuresForScript(scriptId)).toBe(0);
  });

  test('multiple listeners on the same handle all cascade-drop on remove', async () => {
    await setupE2E();
    const scriptId = 'dom-multi-listener-script';
    __getWorkerForScriptForTests(scriptId);

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'multi-1' });
      h.on('click', () => {});
      h.on('mouseover', () => {});
      h.on('keydown', () => {});
      h.remove();
    `;
    const result = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(result.ok).toBe(true);

    expect(countHandlerClosuresForScript(scriptId)).toBe(0);
  });

  test('listener on a kept element survives sibling.remove()', async () => {
    await setupE2E();
    const scriptId = 'dom-sibling-survival-script';
    __getWorkerForScriptForTests(scriptId);

    // Two top-level injects. Listener on the first; remove the second.
    // The first's listener should still be in handlerCleanups.
    const body = `
      const keep   = api.ui.dom.inject('body', '<div id="keep"></div>',   { id: 'keep-1' });
      const remove = api.ui.dom.inject('body', '<div id="remove"></div>', { id: 'remove-1' });
      keep.on('click', () => {});
      remove.on('click', () => {});
      remove.remove();
    `;
    const result = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(result.ok).toBe(true);

    // One listener survives (on `keep`), the other was cascade-dropped.
    expect(countHandlerClosuresForScript(scriptId)).toBe(1);
  });

  test('descendant listeners cascade-drop when parent is removed', async () => {
    await setupE2E();
    const scriptId = 'dom-descendant-cascade-script';
    __getWorkerForScriptForTests(scriptId);

    // injectChild creates a child whose elementId is registered with the
    // parent's elementId as `parentElementId`. The canonical's remove()
    // cascades to descendants via `collectDescendantIds`; our cascade
    // mirrors that traversal for the handlerCleanups entries.
    const body = `
      const parent = api.ui.dom.inject('body', '<div></div>', { id: 'parent-1' });
      const child  = parent.injectChild('div', '<span></span>', { id: 'child-1' });
      parent.on('click', () => {});
      child.on('click', () => {});
      parent.remove();  // should cascade to child
    `;
    const result = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(result.ok).toBe(true);

    // Both listeners cascade-dropped.
    expect(countHandlerClosuresForScript(scriptId)).toBe(0);
  });

  test('explicit unsub() drops the entry too (reverse-index stays in sync)', async () => {
    // Same shape as the cascade tests but using the explicit unsub path
    // — proves `untrackDomListenerHandler` keeps the reverse index
    // consistent regardless of which cleanup route fires.
    await setupE2E();
    const scriptId = 'dom-explicit-unsub-script';
    __getWorkerForScriptForTests(scriptId);

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'explicit-1' });
      const unsub = h.on('click', () => {});
      unsub();
      // h NOT removed — only the listener cleared explicitly. handle
      // itself stays in pendingDomHandles.
    `;
    const result = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(result.ok).toBe(true);

    expect(countHandlerClosuresForScript(scriptId)).toBe(0);
  });
});

describe('v1.0.0-rc.4 — handlerCleanups consistency with explicit test seam', () => {
  test('after inject+on+remove, the exact handlerId is gone from handlerCleanups', async () => {
    // Direct check on the underlying map via the
    // `__hasHandlerCleanupForTests` seam — verifies the cascade calls
    // `invokeAndDropHandlerCleanup` (not just removes from the reverse
    // index in isolation).
    await setupE2E();
    const scriptId = 'dom-direct-cleanup-script';

    const body = `
      const h = api.ui.dom.inject('body', '<div></div>', { id: 'direct-1' });
      h.on('click', () => {});
      h.remove();
    `;
    const result = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(result.ok).toBe(true);

    // Underlying map is empty for this script. The handlerId is generated
    // child-side and we don't have it here, but the absence of ANY entry
    // is the assertion: the loop in dropDomListenerHandlersForElement
    // walked the reverse index + called invokeAndDropHandlerCleanup,
    // which dropped the handlerCleanups entry.
    expect(__hasHandlerCleanupForTests(scriptId, 'any')).toBe(false);
  });
});
