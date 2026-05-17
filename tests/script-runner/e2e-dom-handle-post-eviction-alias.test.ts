/**
 * v1.0.0-rc.3+ regression test for the post-eviction DOM handle alias
 * storage fix.
 *
 * Bug (surfaced 2026-05-17 via mindbound's "tracker UI silently broken
 * after 30 min idle, only backend restart recovers" report):
 *
 * When a worker is evicted (idle > 30 min by default) and respawned,
 * the parent's dom-registry retains every script's stableId → elementId
 * mappings (DOM persistent state outlives worker death by design). But
 * the proxy's child-side `domStableIdToElementId` cache dies with the
 * worker. Post-respawn, the proxy generates a fresh `_elementId` UUID
 * for the same stableId and threads it via `options._elementId`. The
 * canonical's stableId dedup path IGNORES `_elementId` and returns
 * the existing handle's id (correct from canonical's POV — the
 * dom-registry entry hasn't moved). The proxy's sync DOMHandle now
 * has `.id === _elementId` (the new UUID), and all subsequent handle
 * method dispatches (`handle.on('click', …)`, `handle.update(...)`,
 * etc.) carry the proxy's id — which `pendingDomHandles` doesn't have
 * an entry for. Result: register-handler IPCs land "DOM handle not
 * found" warnings + the registration silently drops, breaking
 * re-attached event listeners after eviction.
 *
 * Fix (host-dispatcher.ts handleDomInjectRequest + handleInternalDomRequest
 * injectChild branch): when canonical's dedup returns a handle whose
 * id differs from the proxy's `_elementId`, store the handle in
 * `pendingDomHandles` under BOTH ids. Both keys point at the same
 * handle ref; subsequent lookups via either id succeed.
 *
 * This test simulates the eviction by clearing JUST the proxy's
 * stableId cache (via `__clearScriptStableIdCacheForTests`) between
 * two consecutive script body runs — the parent's dom-registry stays
 * intact, exactly matching the eviction asymmetry that produces the
 * bug. Without the fix, the second-id lookup fails; with the fix, it
 * succeeds.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  __hasPendingDomHandleForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { __clearScriptStableIdCacheForTests } from '../../src/script-runner/api-proxy.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { ApiProxyRequest } from '../../src/types/script-runner-ipc.js';
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
    // app_manipulation gates api.ui.dom.inject — without it, the
    // canonical's `gate()` throws PERMISSION_DENIED before we ever
    // hit the alias-storage path.
    grantedPermissions: new Set<string>(['app_manipulation']),
    userId:             'test-user',
  };
}

function collectInjectRequests(ipc: ScriptRunnerMockIpc): ApiProxyRequest[] {
  return ipc.parentInbox().filter(
    (m): m is ApiProxyRequest =>
      typeof m === 'object' &&
      m !== null &&
      (m as { type?: unknown }).type === 'api-request' &&
      (m as { method?: unknown }).method === 'ui.dom.inject',
  );
}

function extractElementId(req: ApiProxyRequest): string {
  const options = req.args[2] as { _elementId?: string } | undefined;
  if (!options?._elementId) {
    throw new Error(`inject IPC missing _elementId in args[2] (got: ${JSON.stringify(req.args[2])})`);
  }
  return options._elementId;
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e: DOM handle post-eviction alias storage', () => {
  test('inject with the same stableId after proxy cache clear stores the handle under both elementIds', async () => {
    const { ipc } = await setupE2E();
    const scriptId = 'dom-alias-script';

    // ── Run 1 — populate parent's dom-registry with stableId 'foo' ─────
    const body = `api.ui.dom.inject('body', '<div></div>', { id: 'foo' });`;
    const run1 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run1.ok).toBe(true);

    const injectReqs1 = collectInjectRequests(ipc);
    expect(injectReqs1.length).toBe(1);
    const firstElementId = extractElementId(injectReqs1[0]!);

    // After run 1, pendingDomHandles has the first elementId.
    expect(__hasPendingDomHandleForTests(scriptId, firstElementId)).toBe(true);

    // ── Simulate eviction-respawn asymmetry ────────────────────────────
    // Worker eviction kills child-side state but leaves parent-side
    // dom-registry intact. We mimic this by clearing JUST the proxy's
    // domStableIdToElementId cache for this script — exactly what
    // dies when the worker process is torn down. The parent's
    // dom-registry entry for stableId 'foo' (with elementId =
    // firstElementId) survives.
    __clearScriptStableIdCacheForTests(scriptId);

    // ── Run 2 — same body, but proxy's cache is empty ──────────────────
    // The proxy will generate a fresh UUID and thread it via
    // `options._elementId`. The canonical's stableId dedup returns
    // the existing handle with `firstElementId` (ignoring _elementId).
    // The fix: parent stores the handle under BOTH the canonical's id
    // AND the proxy's `_elementId`.
    const run2 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run2.ok).toBe(true);

    const injectReqs2 = collectInjectRequests(ipc);
    expect(injectReqs2.length).toBe(2);
    const secondElementId = extractElementId(injectReqs2[1]!);

    // Sanity: cache clear forced a fresh UUID.
    expect(secondElementId).not.toBe(firstElementId);

    // ── The fix ───────────────────────────────────────────────────────
    // Both ids should now resolve to the same DOMHandle in
    // pendingDomHandles. Pre-fix, only firstElementId would resolve;
    // the proxy's secondElementId lookup would miss → "DOM handle
    // not found" warning + register-handler IPCs silently dropped.
    expect(__hasPendingDomHandleForTests(scriptId, firstElementId)).toBe(true);
    expect(__hasPendingDomHandleForTests(scriptId, secondElementId)).toBe(true);
  });

  test('inject without stableId (no dedup) only stores under the proxy id, no alias needed', async () => {
    // Sanity check: when there's no stableId, the canonical doesn't
    // dedup. The proxy's `_elementId` IS the canonical's elementId.
    // The alias-storage branch is a no-op (no spurious extra entries).
    const { ipc } = await setupE2E();
    const scriptId = 'dom-no-stableid-script';

    const body = `api.ui.dom.inject('body', '<div></div>');`;
    const run = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run.ok).toBe(true);

    const injectReqs = collectInjectRequests(ipc);
    expect(injectReqs.length).toBe(1);
    const elementId = extractElementId(injectReqs[0]!);

    expect(__hasPendingDomHandleForTests(scriptId, elementId)).toBe(true);
  });
});
