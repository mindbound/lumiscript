/**
 * Unit tests for `resolveActiveRun`'s `api-request` fallback policy.
 *
 * The e2e test fixture's mock IPC delivers messages synchronously and
 * doesn't reproduce the production race where `handleHandlerResultMessage`
 * drops the handler-fire `activeRun` between message receipt and
 * `handleApiRequest`'s sync `resolveActiveRun` call. These unit tests
 * exercise `resolveActiveRun` directly via the test-only export, so the
 * fallback rule is guarded against regression even where the e2e fixture
 * timing wouldn't catch it.
 *
 * Specific coverage:
 *   - v1.0.0-rc.5+ extension: `'context'` (handler-fire ALS) source with
 *     a persistent `targetHandle` now permits fallback to the script's
 *     current run. Pre-rc.5 this case was denied, causing every
 *     `handle.update()` from inside a `handle.on('click', cb)` body to
 *     bail with `RunCompletedError` (silently swallowed by the proxy's
 *     `.catch(() => {})`).
 *   - Negative cases that the broader rule must NOT loosen:
 *     `'context'` without a targetHandle still denies fallback. Hits the
 *     "transient handler-only state has nowhere to fall back to" invariant.
 *
 * Companion: `e2e-domhandle-handler-fire-update.test.ts` for the structural
 * proxy-side fix (DOMHandle dispatches now thread `targetHandle`).
 */

import { describe, test, expect, afterEach } from 'bun:test';
import {
  __resolveActiveRunForTests,
  __installFakeActiveRunForTests,
} from '../../src/script-runner/host-dispatcher.js';
import type { HandleRef } from '../../src/types/script-runner-ipc.js';

const DOM_HANDLE: HandleRef = {
  __handleRef: true,
  id:          'fake-element-id',
  kind:        'DOMHandle',
};

const COLLECTION_HANDLE: HandleRef = {
  __handleRef: true,
  id:          'fake-collection-id',
  kind:        'Collection',
};

describe('resolveActiveRun: api-request fallback policy', () => {
  let cleanups: Array<() => void> = [];
  afterEach(() => {
    for (const c of cleanups) c();
    cleanups = [];
  });

  test('direct hit returns the activeRun regardless of source / targetHandle', () => {
    cleanups.push(__installFakeActiveRunForTests('script-A', 'handler-1', {}));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'handler-1', runIdSource: 'context', targetHandle: DOM_HANDLE },
      'api-request',
    );
    expect(result.resolved).toBe(true);
    expect(result.scriptId).toBe('script-A');
  });

  test('rc.5 fix — context source + persistent DOMHandle falls back to script body run', () => {
    // Production race: handler-fire activeRun already dropped, dispatch
    // arrives with `runIdSource: 'context'` carrying the dead handler runId.
    // The persistent-handle fallback should resolve to the script's
    // current body run.
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'handler-dead-1', runIdSource: 'context', targetHandle: DOM_HANDLE },
      'api-request',
    );
    expect(result.resolved).toBe(true);
    expect(result.scriptId).toBe('script-A');
  });

  test('rc.5 fix — context source + persistent Collection handle falls back too (kind-agnostic across persistent kinds)', () => {
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'handler-dead-1', runIdSource: 'context', targetHandle: COLLECTION_HANDLE },
      'api-request',
    );
    expect(result.resolved).toBe(true);
  });

  test('ctx source + persistent handle falls back (pre-rc.5 behavior, unchanged)', () => {
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'orphan-1', runIdSource: 'ctx', targetHandle: DOM_HANDLE },
      'api-request',
    );
    expect(result.resolved).toBe(true);
  });

  test('latest source falls back regardless of targetHandle (top-level dispatches)', () => {
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'stale-latest-1', runIdSource: 'latest' },
      'api-request',
    );
    expect(result.resolved).toBe(true);
  });

  test('context source WITHOUT targetHandle AND non-factory method: no fallback (transient-state invariant preserved)', () => {
    // The rc.5 fix loosened the rule for persistent handles only. Bare
    // `'context'` dispatches (no targetHandle, no handle-returning method)
    // — e.g. a top-level api call from inside a handler body like
    // `api.variables.local.set(...)` — must still be denied fallback.
    // They legitimately represent handler-local intent against per-run state.
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'handler-dead-1', runIdSource: 'context', method: 'variables.local.set' },
      'api-request',
    );
    expect(result.resolved).toBe(false);
  });

  test('ctx source WITHOUT targetHandle AND non-factory method: no fallback (pre-rc.5 behavior, unchanged)', () => {
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'orphan-1', runIdSource: 'ctx', method: 'variables.local.set' },
      'api-request',
    );
    expect(result.resolved).toBe(false);
  });

  test('rc.7.1 fix — context source + db.collection factory call (no targetHandle) falls back', () => {
    // Cross-run-orphan window observed in tracker testing: MESSAGE_SENT and
    // GENERATION_ENDED firing 10 ms apart drop the MESSAGE_SENT run's
    // activeRun before its trailing `db.collection` factory call reaches the
    // parent. Pre-rc.7.1, the factory dispatch landed with `runIdSource:
    // 'context'` and no `targetHandle` (factories CREATE handles), so the
    // existing persistent-handle fallback didn't apply — even though the
    // factory's RESULT is a per-script-persistent handle. Now allowed.
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'orphan-1', runIdSource: 'context', method: 'db.collection' },
      'api-request',
    );
    expect(result.resolved).toBe(true);
    expect(result.scriptId).toBe('script-A');
  });

  test('rc.7.1 fix — ctx source + db.collection factory call (no targetHandle) falls back too', () => {
    // Same loosening for the `'ctx'` source variant — the proxy uses 'ctx'
    // when both ALS context AND latestRunIdByScript are unset (rare, but
    // possible for a brand-new proxy on the very first dispatch).
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'orphan-1', runIdSource: 'ctx', method: 'db.collection' },
      'api-request',
    );
    expect(result.resolved).toBe(true);
  });

  test('rc.7.1 fix — ui.dom.addStyle factory call also falls back (every handle-returning method counts)', () => {
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'orphan-1', runIdSource: 'context', method: 'ui.dom.addStyle' },
      'api-request',
    );
    expect(result.resolved).toBe(true);
  });

  test('rc.7.1 fix — non-factory method on context source still denied (negative case for the new rule)', () => {
    // The new factory-fallback rule must NOT loosen non-factory dispatches.
    // `broadcast.emit` is a void-returning side effect — orphaning it is
    // the correct behaviour (the run that emitted is gone, so the emit
    // semantics are dead with it).
    cleanups.push(__installFakeActiveRunForTests('script-A', 'run-body-1', { isScriptBodyRun: true }));

    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'orphan-1', runIdSource: 'context', method: 'broadcast.emit' },
      'api-request',
    );
    expect(result.resolved).toBe(false);
  });

  test('no script body run installed: even valid context+persistent input cant resolve', () => {
    // Defensive — if the script has no current body run (script genuinely
    // disabled / never dispatched), the fallback has nothing to point at.
    const result = __resolveActiveRunForTests(
      { scriptId: 'script-A', runId: 'handler-dead-1', runIdSource: 'context', targetHandle: DOM_HANDLE },
      'api-request',
    );
    expect(result.resolved).toBe(false);
  });
});
