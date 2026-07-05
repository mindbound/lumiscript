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

// ─── field-test hygiene: fallback-log dedup ────────────────────────────────────
//
// A leaked live-render interval (setInterval(() => handle.update())) that outlives its run reroutes
// on every fire (~1/sec forever). The routing is intended (the fallback exists to support exactly that
// pattern across run rotation), but logging it per-fire firehoses the backend log. The audit log is
// now deduped: FIRST reroute per orphan logs, identical repeats are suppressed. Routing is unchanged.

describe('resolveActiveRun: fallback-log dedup', () => {
  let cleanups: Array<() => void> = [];
  afterEach(() => { for (const c of cleanups) c(); cleanups = []; });

  const infoCalls = (): string[] => {
    const sp = (globalThis as unknown as { spindle: { log: { info: { mock: { calls: unknown[][] } } } } }).spindle;
    return sp.log.info.mock.calls.map((c) => c[0]).filter((m): m is string => typeof m === 'string');
  };

  test('a persistently-orphaned recurring reroute logs ONCE; routing still succeeds every time', () => {
    cleanups.push(__installFakeActiveRunForTests('script-Z', 'run-body-current', { isScriptBodyRun: true }));
    const deadRun = 'run-orphan-unique-42';
    const ctx = { scriptId: 'script-Z', runId: deadRun, runIdSource: 'context' as const, targetHandle: DOM_HANDLE };
    for (let i = 0; i < 5; i++) {
      expect(__resolveActiveRunForTests(ctx, 'api-request').resolved).toBe(true); // routing unchanged per fire
    }
    const matching = infoCalls().filter((m) => m.includes(deadRun));
    expect(matching.length).toBe(1); // 5 fires → 1 log line
    expect(matching[0]).toContain('further identical reroutes suppressed');
  });

  test('dedup is per-orphan, not global — a DIFFERENT dead run still logs', () => {
    cleanups.push(__installFakeActiveRunForTests('script-Z', 'run-body-current', { isScriptBodyRun: true }));
    __resolveActiveRunForTests({ scriptId: 'script-Z', runId: 'orphan-A', runIdSource: 'context', targetHandle: DOM_HANDLE }, 'api-request');
    __resolveActiveRunForTests({ scriptId: 'script-Z', runId: 'orphan-A', runIdSource: 'context', targetHandle: DOM_HANDLE }, 'api-request'); // repeat A
    __resolveActiveRunForTests({ scriptId: 'script-Z', runId: 'orphan-B', runIdSource: 'context', targetHandle: DOM_HANDLE }, 'api-request'); // distinct B
    const rerouteLogs = infoCalls().filter((m) => m.includes('no longer active'));
    expect(rerouteLogs.length).toBe(2); // A once + B once (A's repeat suppressed)
  });
});
