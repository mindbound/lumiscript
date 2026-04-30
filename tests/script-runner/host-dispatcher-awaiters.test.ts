/**
 * Phase 11.B.2 — host-dispatcher Option-B awaiter tests.
 *
 * Coverage for the four FE-confirmation echo awaiter tables. Each surface
 * (advanced modal open, input-bar action register, float-widget create,
 * drawer-tab register) blocks the api-response on a frontend echo confirming
 * the surface is fully wired before the proxy resolves dispatch — without
 * the gate, scripts dispatch follow-up methods (setLabel, moveTo, etc.)
 * before the FE side has bound the element to its backing handle.
 *
 * Surfaces under test:
 *   - `pendingAdvancedModalOpens`        (modalId-keyed)
 *   - `pendingInputBarActionRegisters`   (`${scriptId}:${actionId}`-keyed)
 *   - `pendingFloatWidgetCreates`        (widgetId-keyed)
 *   - `pendingDrawerTabRegisters`        (`${scriptId}:${tabId}`-keyed)
 *
 * Per surface the tests verify:
 *   - Awaiter is registered in the pending table on install.
 *   - Notify resolves the awaiter promise + drops the table entry.
 *   - Timeout (with shrunk override) rejects the awaiter promise + drops
 *     the table entry.
 *   - Notify on a missing key is a silent no-op (idempotent — late echo
 *     after timeout).
 *   - `unregisterScriptFromChild(scriptId)` rejects awaiters keyed by that
 *     script (input-bar + drawer-tab — keys carry scriptId; advanced modal
 *     and float widget keys are bare child-generated UUIDs and don't carry
 *     scriptId, so they're left to time out naturally per the documented
 *     limitation in `unregisterScriptFromChild`).
 *   - `notifyAdvancedModalOpenFailed` rejects the awaiter with the supplied
 *     reason (advanced-modal-only — the "open failed before FE could echo
 *     ls_modal_opened" path).
 */

import { describe, test, expect } from 'bun:test';
import {
  unregisterScriptFromChild,
  notifyAdvancedModalOpened,
  notifyAdvancedModalOpenFailed,
  notifyInputBarActionRegistered,
  notifyFloatWidgetCreated,
  notifyDrawerTabRegistered,
  __setOpenAwaitTimeoutForTests,
  __awaitAdvancedModalOpenForTests,
  __awaitInputBarActionRegisterForTests,
  __awaitFloatWidgetCreateForTests,
  __awaitDrawerTabRegisterForTests,
  __getPendingAdvancedModalOpenIdsForTests,
  __getPendingInputBarActionRegisterKeysForTests,
  __getPendingFloatWidgetCreateIdsForTests,
  __getPendingDrawerTabRegisterKeysForTests,
} from '../../src/script-runner/host-dispatcher.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Shrink the awaiter timeout to a value low enough for tests to drive
 * timeout paths without slowing the suite. 50ms is comfortably above
 * Node's setTimeout granularity and well below any meaningful test
 * latency; using 30ms or lower invites flakes.
 */
function fastTimeout(): void {
  __setOpenAwaitTimeoutForTests(50);
}

// ─── Advanced modal open ─────────────────────────────────────────────────────

describe('host-dispatcher: pendingAdvancedModalOpens awaiter', () => {
  test('install + notifyAdvancedModalOpened resolves and drops the entry', async () => {
    const promise = __awaitAdvancedModalOpenForTests('modal-A');
    expect(__getPendingAdvancedModalOpenIdsForTests()).toContain('modal-A');

    notifyAdvancedModalOpened('modal-A');
    await expect(promise).resolves.toBeUndefined();
    expect(__getPendingAdvancedModalOpenIdsForTests()).not.toContain('modal-A');
  });

  test('install + notifyAdvancedModalOpenFailed rejects with the supplied reason', async () => {
    const promise = __awaitAdvancedModalOpenForTests('modal-B');
    notifyAdvancedModalOpenFailed('modal-B', 'dismissed before open');
    await expect(promise).rejects.toThrow(/dismissed before open/);
    expect(__getPendingAdvancedModalOpenIdsForTests()).not.toContain('modal-B');
  });

  test('install + no notify times out (with shrunk timeout) and drops the entry', async () => {
    fastTimeout();
    const promise = __awaitAdvancedModalOpenForTests('modal-C');
    await expect(promise).rejects.toThrow(/timed out/);
    expect(__getPendingAdvancedModalOpenIdsForTests()).not.toContain('modal-C');
  });

  test('notifyAdvancedModalOpened on a missing modalId is a silent no-op', () => {
    expect(() => notifyAdvancedModalOpened('never-installed')).not.toThrow();
    expect(__getPendingAdvancedModalOpenIdsForTests()).not.toContain('never-installed');
  });

  test('notifyAdvancedModalOpenFailed on a missing modalId is a silent no-op', () => {
    expect(() => notifyAdvancedModalOpenFailed('never-installed', 'whatever')).not.toThrow();
  });

  test('two concurrent awaiters resolve independently', async () => {
    const a = __awaitAdvancedModalOpenForTests('modal-D');
    const b = __awaitAdvancedModalOpenForTests('modal-E');
    expect(__getPendingAdvancedModalOpenIdsForTests().length).toBe(2);

    notifyAdvancedModalOpened('modal-D');
    await a;
    expect(__getPendingAdvancedModalOpenIdsForTests()).toEqual(['modal-E']);

    notifyAdvancedModalOpened('modal-E');
    await b;
    expect(__getPendingAdvancedModalOpenIdsForTests()).toEqual([]);
  });
});

// ─── Input-bar action register ───────────────────────────────────────────────

describe('host-dispatcher: pendingInputBarActionRegisters awaiter', () => {
  test('install + notifyInputBarActionRegistered resolves and drops the entry', async () => {
    const promise = __awaitInputBarActionRegisterForTests('script-A', 'action-1');
    expect(__getPendingInputBarActionRegisterKeysForTests()).toContain('script-A:action-1');

    notifyInputBarActionRegistered('script-A', 'action-1');
    await expect(promise).resolves.toBeUndefined();
    expect(__getPendingInputBarActionRegisterKeysForTests()).not.toContain('script-A:action-1');
  });

  test('install + no notify times out and drops the entry', async () => {
    fastTimeout();
    const promise = __awaitInputBarActionRegisterForTests('script-A', 'action-1');
    await expect(promise).rejects.toThrow(/registerInputBarAction.*timed out/);
    expect(__getPendingInputBarActionRegisterKeysForTests()).not.toContain('script-A:action-1');
  });

  test('notify on a missing key is a silent no-op', () => {
    expect(() => notifyInputBarActionRegistered('script-A', 'never-installed')).not.toThrow();
  });

  test('unregisterScriptFromChild rejects awaiters keyed by that script', async () => {
    const promise = __awaitInputBarActionRegisterForTests('script-A', 'action-1');
    expect(__getPendingInputBarActionRegisterKeysForTests()).toContain('script-A:action-1');

    unregisterScriptFromChild('script-A');

    await expect(promise).rejects.toThrow(/script "script-A" unregistered before open echo arrived/);
    expect(__getPendingInputBarActionRegisterKeysForTests()).not.toContain('script-A:action-1');
  });

  test('unregisterScriptFromChild leaves another script\'s awaiter alone', async () => {
    const a = __awaitInputBarActionRegisterForTests('script-A', 'action-1');
    const b = __awaitInputBarActionRegisterForTests('script-B', 'action-2');

    unregisterScriptFromChild('script-A');

    await expect(a).rejects.toThrow(/script "script-A" unregistered/);
    // B should still be pending — confirm by resolving it.
    notifyInputBarActionRegistered('script-B', 'action-2');
    await expect(b).resolves.toBeUndefined();
  });
});

// ─── Float-widget create ─────────────────────────────────────────────────────

describe('host-dispatcher: pendingFloatWidgetCreates awaiter', () => {
  test('install + notifyFloatWidgetCreated resolves and drops the entry', async () => {
    const promise = __awaitFloatWidgetCreateForTests('widget-A');
    expect(__getPendingFloatWidgetCreateIdsForTests()).toContain('widget-A');

    notifyFloatWidgetCreated('widget-A');
    await expect(promise).resolves.toBeUndefined();
    expect(__getPendingFloatWidgetCreateIdsForTests()).not.toContain('widget-A');
  });

  test('install + no notify times out and drops the entry', async () => {
    fastTimeout();
    const promise = __awaitFloatWidgetCreateForTests('widget-A');
    await expect(promise).rejects.toThrow(/createFloatWidget.*timed out/);
    expect(__getPendingFloatWidgetCreateIdsForTests()).not.toContain('widget-A');
  });

  test('notify on a missing widgetId is a silent no-op', () => {
    expect(() => notifyFloatWidgetCreated('never-installed')).not.toThrow();
  });

  test('unregisterScriptFromChild does NOT clear bare-keyed widget awaiters (documented limitation)', () => {
    // pendingFloatWidgetCreates is keyed by a bare child-generated UUID
    // (no scriptId prefix), so unregisterScriptFromChild can't tell which
    // entries belong to the unregistering script. Per the comment in
    // unregisterScriptFromChild: "we let them time out naturally". This
    // test pins that contract so any future change is intentional.
    void __awaitFloatWidgetCreateForTests('widget-A').catch(() => {/* will time out */});
    expect(__getPendingFloatWidgetCreateIdsForTests()).toContain('widget-A');

    unregisterScriptFromChild('script-A');

    // Still present after unregister — caller must wait for the natural
    // timeout (or the FE-side late echo, which would land as a no-op).
    expect(__getPendingFloatWidgetCreateIdsForTests()).toContain('widget-A');
  });
});

// ─── Drawer-tab register ─────────────────────────────────────────────────────

describe('host-dispatcher: pendingDrawerTabRegisters awaiter', () => {
  test('install + notifyDrawerTabRegistered resolves and drops the entry', async () => {
    const promise = __awaitDrawerTabRegisterForTests('script-A', 'tab-1');
    expect(__getPendingDrawerTabRegisterKeysForTests()).toContain('script-A:tab-1');

    notifyDrawerTabRegistered('script-A', 'tab-1');
    await expect(promise).resolves.toBeUndefined();
    expect(__getPendingDrawerTabRegisterKeysForTests()).not.toContain('script-A:tab-1');
  });

  test('install + no notify times out and drops the entry', async () => {
    fastTimeout();
    const promise = __awaitDrawerTabRegisterForTests('script-A', 'tab-1');
    await expect(promise).rejects.toThrow(/registerDrawerTab.*timed out/);
    expect(__getPendingDrawerTabRegisterKeysForTests()).not.toContain('script-A:tab-1');
  });

  test('notify on a missing key is a silent no-op', () => {
    expect(() => notifyDrawerTabRegistered('script-A', 'never-installed')).not.toThrow();
  });

  test('unregisterScriptFromChild rejects awaiters keyed by that script', async () => {
    const promise = __awaitDrawerTabRegisterForTests('script-A', 'tab-1');
    expect(__getPendingDrawerTabRegisterKeysForTests()).toContain('script-A:tab-1');

    unregisterScriptFromChild('script-A');

    await expect(promise).rejects.toThrow(/script "script-A" unregistered before open echo arrived/);
    expect(__getPendingDrawerTabRegisterKeysForTests()).not.toContain('script-A:tab-1');
  });

  test('unregisterScriptFromChild leaves another script\'s drawer awaiter alone', async () => {
    const a = __awaitDrawerTabRegisterForTests('script-A', 'tab-1');
    const b = __awaitDrawerTabRegisterForTests('script-B', 'tab-2');

    unregisterScriptFromChild('script-A');

    await expect(a).rejects.toThrow(/script "script-A" unregistered/);
    notifyDrawerTabRegistered('script-B', 'tab-2');
    await expect(b).resolves.toBeUndefined();
  });
});

// ─── Cross-surface invariants ────────────────────────────────────────────────

describe('host-dispatcher: awaiter cross-surface invariants', () => {
  test('all four awaiter tables start empty (per __resetForTests in setup.ts)', () => {
    expect(__getPendingAdvancedModalOpenIdsForTests()).toEqual([]);
    expect(__getPendingInputBarActionRegisterKeysForTests()).toEqual([]);
    expect(__getPendingFloatWidgetCreateIdsForTests()).toEqual([]);
    expect(__getPendingDrawerTabRegisterKeysForTests()).toEqual([]);
  });

  test('__setOpenAwaitTimeoutForTests(null) restores production timeout (no observable test signal — just no throw)', () => {
    // No-op assertion: we're verifying the API accepts null without
    // throwing. The actual production-timeout value (3s) isn't exercised
    // here — covered by the implicit "default behaviour" of every other
    // test that doesn't call fastTimeout().
    expect(() => __setOpenAwaitTimeoutForTests(null)).not.toThrow();
  });
});
