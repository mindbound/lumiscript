/**
 * Phase 9d.4.x cross-run handle regression test.
 *
 * The bug: a DOMHandle (or any other handle) built by run N's proxy and
 * stashed on `globalThis` keeps run N's `ctx.runId` captured in its
 * dispatch closure. When run N+1's body invokes a method on that handle,
 * the IPC envelope carries run N's runId — which is no longer in
 * `activeRuns` (the Phase 9d.4.x lifetime fix drops the previous run's
 * activeRun on next-dispatch-for-same-script, by design). The parent
 * returns `RunCompletedError`; the proxy's fire-and-forget `.catch`
 * swallows it. The canonical never receives the call. User-visible
 * symptom in the tracker case: `previousHandle.remove()` silently no-ops
 * across chat-close+reopen, the canonical retains the old element, the
 * follow-up inject hits the idempotent-update branch on a stable id
 * keyed to the now-detached FE DOM node, and the footer "renders" on a
 * phantom.
 *
 * The fix (this test gates): the proxy's `dispatch` reads runId from a
 * three-tier fallback —
 *   1. `runIdContext.getStore()` (handler-fire ephemeral runId)
 *   2. `latestRunIdByScript.get(ctx.scriptId)` (latest script-body runId)
 *   3. `ctx.runId` (originating run; defensive fallback only)
 *
 * Tier 2 is what wins for cross-run handle invocations: every
 * `buildProxiedAPI` refreshes the script's entry, so old-run handles
 * automatically route their dispatches under the LATEST live activeRun.
 *
 * Test strategy: dispatch run #1 of a script that creates an
 * `api.ui.dom.inject` handle and stashes it on `globalThis`. Wait for
 * run-result. Dispatch run #2 of the same script that calls
 * `globalThis.handle.update(...)`. Inspect the api-request IPC for
 * `ui._dom.update`; assert its `runId` equals run #2's runId, not run
 * #1's.
 */

import { describe, test, expect } from 'bun:test';
import { dispatchRunScript } from '../../src/script-runner/host-dispatcher.js';
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
    grantedPermissions: new Set<string>(['app_manipulation']),
    userId:             'test-user',
  };
}

function findApiRequests(ipc: ScriptRunnerMockIpc, method: string): ApiProxyRequest[] {
  return ipc.parentInbox().filter(
    (m): m is ApiProxyRequest => {
      if (typeof m !== 'object' || m === null) return false;
      const r = m as ApiProxyRequest;
      return r.type === 'api-request' && r.method === method;
    },
  );
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e cross-run handle: stale-proxy dispatch routes via latest runId', () => {
  test('a DOMHandle built in run #1 + invoked from run #2 dispatches under run #2\'s runId', async () => {
    const { ipc } = await setupE2E();

    // Run #1: build a DOMHandle, stash on globalThis. The handle's
    // proxy closes over run #1's `ctx.runId` — under the buggy contract,
    // that runId is what gets stamped on every subsequent handle method.
    const result1 = await dispatchRunScript(
      makeScript('script-A', `
        globalThis.__regression_handle = api.ui.dom.inject('body', '<div/>');
        return globalThis.__regression_handle.id;
      `),
      makeRequest(),
    );
    expect(result1.ok).toBe(true);
    const run1Id = result1.runId;

    // The inject's api-request landed under run #1's runId — sanity check.
    const injectReq = findApiRequests(ipc, 'ui.dom.inject').at(0);
    expect(injectReq).toBeDefined();
    expect(injectReq!.runId).toBe(run1Id);

    // Run #2: invoke `.update()` on run #1's stashed handle.
    // Pre-fix, this dispatch would carry run #1's runId; post-fix, it
    // carries run #2's runId via the `latestRunIdByScript` lookup.
    const result2 = await dispatchRunScript(
      makeScript('script-A', `
        globalThis.__regression_handle.update('<span class="updated"/>');
        return 'ok';
      `),
      makeRequest(),
    );
    expect(result2.ok).toBe(true);
    const run2Id = result2.runId;
    expect(run2Id).not.toBe(run1Id);

    // Find the `ui._dom.update` request emitted from run #2's invocation.
    const updateReq = findApiRequests(ipc, 'ui._dom.update').at(-1);
    expect(updateReq).toBeDefined();
    // The critical assertion: the dispatch routes under run #2's runId,
    // NOT run #1's. This is what the latestRunIdByScript fallback guarantees.
    expect(updateReq!.runId).toBe(run2Id);
    expect(updateReq!.runId).not.toBe(run1Id);
  });

  test('a regular API call inside run #2\'s body uses run #2\'s runId (no regression)', async () => {
    const { ipc } = await setupE2E();

    await dispatchRunScript(
      makeScript('script-A', 'return "first";'),
      makeRequest(),
    );

    const result2 = await dispatchRunScript(
      makeScript('script-A', `
        await api.utils.macros.resolve('hello');
        return 'second';
      `),
      makeRequest(),
    );
    expect(result2.ok).toBe(true);

    // The macro-resolve dispatch from run #2 carries run #2's runId
    // (the common case — same as before this fix; no regression).
    const resolveReq = findApiRequests(ipc, 'utils.macros.resolve').at(-1);
    expect(resolveReq).toBeDefined();
    expect(resolveReq!.runId).toBe(result2.runId);
  });

  test('cross-run handle invocation continues to work across THREE consecutive runs', async () => {
    const { ipc } = await setupE2E();

    // Run #1: create the handle.
    const r1 = await dispatchRunScript(
      makeScript('script-A', `
        globalThis.__regression_handle = api.ui.dom.inject('body', '<div/>');
        return globalThis.__regression_handle.id;
      `),
      makeRequest(),
    );
    expect(r1.ok).toBe(true);

    // Run #2: invoke handle.update.
    const r2 = await dispatchRunScript(
      makeScript('script-A', `
        globalThis.__regression_handle.update('<div>r2</div>');
        return 'r2';
      `),
      makeRequest(),
    );
    expect(r2.ok).toBe(true);

    // Run #3: invoke handle.update again. Each cross-run invocation
    // should pick up the LATEST runId (r3.runId), not r1's or r2's.
    const r3 = await dispatchRunScript(
      makeScript('script-A', `
        globalThis.__regression_handle.update('<div>r3</div>');
        return 'r3';
      `),
      makeRequest(),
    );
    expect(r3.ok).toBe(true);

    const updates = findApiRequests(ipc, 'ui._dom.update');
    expect(updates.length).toBe(2);
    // The first update was from r2's body — should carry r2's runId.
    expect(updates[0]!.runId).toBe(r2.runId);
    // The second update was from r3's body — should carry r3's runId.
    expect(updates[1]!.runId).toBe(r3.runId);
  });
});
