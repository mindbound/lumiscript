/**
 * v1.0.0-rc.6 — end-to-end test for the state-sync-on-respawn flow.
 *
 * Counterpart to `e2e-dom-handle-post-eviction-alias.test.ts` (the rc.3
 * alias-storage hotfix regression test). Both tests simulate the same
 * eviction asymmetry — parent's dom-registry survives, child-side
 * `domStableIdToElementId` cache dies — but they assert opposite
 * properties:
 *
 *   - rc.3 alias-storage test: WITHOUT state-sync, the parent stores
 *     the canonical handle under TWO ids (firstElementId from run 1,
 *     plus the proxy's regenerated UUID from run 2). Asserts both ids
 *     resolve to the same handle in `pendingDomHandles`.
 *
 *   - rc.6 state-sync test (this file): WITH state-sync, the parent
 *     sends a snapshot of the stable-id mapping BEFORE the run-script
 *     IPC for the post-respawn dispatch. The proxy applies the snapshot,
 *     pre-populating `domStableIdToElementId[scriptId][stableId]` with
 *     the parent's existing elementId. The script's inject call then
 *     reuses that elementId via the cache-hit branch of
 *     `getOrAllocateElementId`. The proxy and parent agree on the
 *     elementId by construction — no divergence, no alias-storage
 *     branch firing.
 *
 * The alias-storage path remains in place as belt-and-suspenders; this
 * test asserts state-sync's preventative behaviour upstream of it.
 * Once state-sync has burned in for a release, the alias-storage path
 * can be removed (the rc.3 test will need updating then).
 *
 * Simulation method: clear ONLY the proxy's `domStableIdToElementId`
 * via `__clearScriptStableIdCacheForTests` between two consecutive
 * `dispatchRunScript` calls. The parent's dom-registry stays intact.
 * Matches the eviction asymmetry exactly without needing to fire the
 * lifecycle event + re-spawn the child.
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  DEFAULT_WORKER_KEY,
  __resetForTests,
  __hasPendingDomHandleForTests,
  __hasScriptBeenSeenOnWorkerForTests,
  __clearScriptsSeenPerWorkerForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { __clearScriptStableIdCacheForTests } from '../../src/script-runner/api-proxy.js';
import { __reset as resetDomRegistry } from '../../src/engine/dom-registry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';
import type { ApiProxyRequest } from '../../src/types/script-runner-ipc.js';
import type { ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';

// ─── Helpers ────────────────────────────────────────────────────────────────

function makeScript(id: string, code: string): Script {
  return {
    id,
    name:           `Test ${id}`,
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
    throw new Error(`inject IPC missing _elementId (args[2]: ${JSON.stringify(req.args[2])})`);
  }
  return options._elementId;
}

function findSyncMessageForScript(
  ipc:      ScriptRunnerMockIpc,
  scriptId: string,
): { snapshot: { scriptId: string; domStableIds?: Record<string, string> } } | undefined {
  return ipc.childInbox().find(
    (m): m is { type: 'script-state-sync'; snapshot: { scriptId: string; domStableIds?: Record<string, string> } } =>
      typeof m === 'object' &&
      m !== null &&
      (m as { type?: unknown }).type === 'script-state-sync' &&
      ((m as { snapshot?: { scriptId?: unknown } }).snapshot?.scriptId === scriptId),
  );
}

// ─── Tests ──────────────────────────────────────────────────────────────────

describe('e2e: state-sync-on-respawn — DOM stableId convergence', () => {
  test('post-respawn inject with same stableId reuses the parent\'s existing elementId', async () => {
    __resetForTests();
    resetDomRegistry();
    const { ipc } = await setupE2E();
    const scriptId = 'state-sync-script';

    // ── Run 1 — populate parent's dom-registry with stableId 'foo' ─────
    const body = `api.ui.dom.inject('body', '<div></div>', { id: 'foo' });`;
    const run1 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run1.ok).toBe(true);

    const injectReqs1 = collectInjectRequests(ipc);
    expect(injectReqs1.length).toBe(1);
    const firstElementId = extractElementId(injectReqs1[0]!);

    // No sync was sent on run 1 — the script hadn't injected anything
    // before this run, so dom-registry was empty when buildScriptStateSnapshot
    // ran (the dispatch precedes the inject).
    expect(findSyncMessageForScript(ipc, scriptId)).toBeUndefined();

    // ── Simulate eviction-respawn asymmetry ────────────────────────────
    // Worker eviction kills child-side state but leaves parent-side
    // dom-registry intact. The minimal simulation: clear the proxy's
    // stable-id cache (the child-side state that dies with the worker)
    // AND clear the parent's `scriptsSeenPerWorker` tracker (which is
    // what cleanupRunsForDeadWorker would clear on lifecycle 'failed').
    // Both clears are required for the next dispatch to behave as if
    // the worker was freshly respawned. The dom-registry stays intact
    // (DOM persistent state outlives worker death by design).
    __clearScriptStableIdCacheForTests(scriptId);
    __clearScriptsSeenPerWorkerForTests();

    // ── Run 2 — same body, proxy's cache empty, dom-registry still has 'foo' ───
    // Expected flow:
    //   1. dispatchRunScript builds snapshot from dom-registry →
    //      `{ scriptId, domStableIds: { foo: firstElementId } }`
    //   2. Sends `script-state-sync` BEFORE `run-script`
    //   3. Child's onMessage applies the snapshot, seeding
    //      `domStableIdToElementId[scriptId]['foo'] = firstElementId`
    //   4. Script body's inject({ id: 'foo' }) hits the cache → reuses
    //      firstElementId
    //   5. IPC carries `_elementId: firstElementId`
    const run2 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run2.ok).toBe(true);

    // ── The state-sync IPC fired ───────────────────────────────────────
    const syncMsg = findSyncMessageForScript(ipc, scriptId);
    expect(syncMsg).toBeDefined();
    expect(syncMsg!.snapshot.scriptId).toBe(scriptId);
    expect(syncMsg!.snapshot.domStableIds).toEqual({ foo: firstElementId });

    // ── The post-respawn inject reused the seeded elementId ────────────
    // Run 2's inject IPC must carry `_elementId: firstElementId` — same
    // as run 1, no divergence to repair via alias storage.
    const injectReqs2 = collectInjectRequests(ipc);
    expect(injectReqs2.length).toBe(2);
    const secondElementId = extractElementId(injectReqs2[1]!);
    expect(secondElementId).toBe(firstElementId);

    // ── Sanity: the script is now marked as seen on the worker ─────────
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, scriptId)).toBe(true);

    // ── pendingDomHandles state: single id, no alias entry ─────────────
    // With state-sync working, the proxy's `_elementId` matches the
    // canonical's id, so the rc.3 alias-storage branch in
    // `handleDomInjectRequest` (proxyElementId !== handle.id) does NOT
    // fire. Only firstElementId is in pendingDomHandles.
    expect(__hasPendingDomHandleForTests(scriptId, firstElementId)).toBe(true);
  });

  test('post-respawn inject for a script with no prior stable-id sees no sync (snapshot empty)', async () => {
    __resetForTests();
    resetDomRegistry();
    const { ipc } = await setupE2E();
    const scriptId = 'state-sync-bodyless';

    // Body that DOESN'T use a stableId — dom-registry stays empty for
    // this script.
    const body = `api.ui.dom.inject('body', '<div></div>');`;
    const run1 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run1.ok).toBe(true);

    // No sync on run 1 (snapshot empty — script had no prior state).
    expect(findSyncMessageForScript(ipc, scriptId)).toBeUndefined();

    // Simulate respawn — see the comment in the prior test for the
    // two-step clear rationale.
    __clearScriptStableIdCacheForTests(scriptId);
    __clearScriptsSeenPerWorkerForTests();

    const run2 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run2.ok).toBe(true);

    // Still no sync — dom-registry has no stable-id entries for this
    // script even after run 1 (run 1's inject was anonymous), so
    // `buildScriptStateSnapshot` returns null and the send is skipped.
    expect(findSyncMessageForScript(ipc, scriptId)).toBeUndefined();

    // But the script IS marked as seen on the worker — the "started
    // the conversation" semantic from dispatchRunScript fires
    // unconditionally on first dispatch.
    expect(__hasScriptBeenSeenOnWorkerForTests(DEFAULT_WORKER_KEY, scriptId)).toBe(true);
  });

  test('multiple stable-ids in a single script are all seeded post-respawn', async () => {
    __resetForTests();
    resetDomRegistry();
    const { ipc } = await setupE2E();
    const scriptId = 'state-sync-multi';

    // Run 1 — inject three elements with distinct stableIds.
    const body = `
      api.ui.dom.inject('body', '<div></div>', { id: 'header' });
      api.ui.dom.inject('body', '<div></div>', { id: 'footer' });
      api.ui.dom.inject('body', '<div></div>', { id: 'sidebar' });
    `;
    const run1 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run1.ok).toBe(true);

    const injectReqs1 = collectInjectRequests(ipc);
    expect(injectReqs1.length).toBe(3);
    const ids1 = injectReqs1.map(extractElementId);

    // Simulate respawn.
    __clearScriptStableIdCacheForTests(scriptId);
    __clearScriptsSeenPerWorkerForTests();

    // Run 2 — same body, expect each stableId to reuse its original elementId.
    const run2 = await dispatchRunScript(makeScript(scriptId, body), makeRequest());
    expect(run2.ok).toBe(true);

    // Snapshot carries all three mappings.
    const syncMsg = findSyncMessageForScript(ipc, scriptId);
    expect(syncMsg).toBeDefined();
    expect(syncMsg!.snapshot.domStableIds).toEqual({
      header:  ids1[0]!,
      footer:  ids1[1]!,
      sidebar: ids1[2]!,
    });

    // Run 2's inject IPCs carry the same elementIds as run 1.
    const injectReqs2 = collectInjectRequests(ipc);
    // 3 from run 1 + 3 from run 2 = 6 total.
    expect(injectReqs2.length).toBe(6);
    const ids2 = injectReqs2.slice(3).map(extractElementId);
    expect(ids2).toEqual(ids1);
  });
});
