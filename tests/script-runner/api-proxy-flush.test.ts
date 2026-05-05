/**
 * Phase 11.C.2 — api-proxy fire-and-forget drain (`flush()`) tests.
 *
 * The proxy's `outstandingChains` tracker captures every fire-and-forget
 * Promise the proxy queues — `mkSyncVoidFireForget` dispatches, gated
 * dispatches behind openAck, register-handler IPC chains, etc. The
 * `flush()` method (called from `child-entry.ts:runOne` BEFORE sending
 * `run-result`) drains every outstanding chain so the parent's
 * `activeRuns[runId]` entry is still alive when those chains' eventual
 * dispatches arrive.
 *
 * Without this drain, sync script-body code that queues a fire-and-forget
 * (e.g. `api.broadcast.emit(...)` returns sync void) would race the
 * `run-result` IPC: script body returns → run-result sent → activeRuns
 * deleted → fire-and-forget's actual `ctx.send` lands → parent returns
 * `RunCompletedError`.
 *
 * Tests drive the tracker via `api.broadcast.emit` (the simplest fire-and-
 * forget surface) and verify:
 *   - flush() resolves immediately when no chains are outstanding.
 *   - flush() awaits every currently-outstanding chain.
 *   - chains added DURING flush (cascading) are also drained (loop with
 *     safety budget).
 *   - settled chains are removed from the tracker (resolved + rejected).
 */

import { describe, test, expect } from 'bun:test';
import { buildProxiedAPI, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type { ChildToParentMessage, ApiProxyRequest, ApiProxyResponse } from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy: ProxyHandle;
  sent:  ChildToParentMessage[];
  apiRequests(): ApiProxyRequest[];
  respond(requestId: string, value: unknown): void;
  respondError(requestId: string, name: string, message: string): void;
}

function makeHarness(overrides: Partial<ProxyContext> = {}): Harness {
  const sent: ChildToParentMessage[] = [];
  const ctx: ProxyContext = {
    runId:              'run-fixture-1',
    scriptId:           'script-fixture',
    scriptName:         'Fixture Script',
    scriptType:         'trigger',
    chatIdAtStart:      null,
    characterIdAtStart: null,
    send:               (msg) => { sent.push(msg); },
    registerBroadcastHandler:   () => {},
    unregisterBroadcastHandler: () => {},
    registerHandlerClosure:     () => {},
    unregisterHandlerClosure:   () => {},
    toolsSnapshot:                 [],
    macrosSnapshot:                [],
    macroInterceptorsSnapshot:     [],
    chatInjectionsSnapshot:        [],
    chatContentProcessorsSnapshot: [],
    worldInfoInterceptorsSnapshot: [],
    ...overrides,
  };
  const proxy = buildProxiedAPI(ctx);
  return {
    proxy,
    sent,
    apiRequests: () =>
      sent.filter((m): m is ApiProxyRequest => (m as { type?: unknown }).type === 'api-request'),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
    respondError(requestId, name, message) {
      const msg: ApiProxyResponse = {
        type: 'api-response',
        requestId,
        ok:    false,
        error: { name, message },
      };
      proxy.handleResponse(msg);
    },
  };
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('api-proxy: flush()', () => {
  test('resolves immediately when no chains are outstanding', async () => {
    const h = makeHarness();
    const start = Date.now();
    await h.proxy.flush();
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(50);   // microtask-level
  });

  test('awaits a fire-and-forget chain to settle (resolution path)', async () => {
    const h = makeHarness();
    h.proxy.api.broadcast.emit('hello', { x: 1 });

    // The dispatch has been sent (it's in apiRequests) but the parent
    // hasn't responded — the chain is still pending.
    const req = h.apiRequests()[0]!;

    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });

    // Yield a microtask to let flush enter its `await Promise.allSettled`.
    await Promise.resolve();
    await Promise.resolve();
    expect(flushDone).toBe(false);

    // Resolve the dispatch — chain settles, flush should now resolve.
    h.respond(req.requestId, undefined);

    await flushPromise;
    expect(flushDone).toBe(true);
  });

  test('awaits a fire-and-forget chain to settle (rejection path)', async () => {
    const h = makeHarness();
    h.proxy.api.broadcast.emit('hello');
    const req = h.apiRequests()[0]!;

    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });

    await Promise.resolve();
    await Promise.resolve();
    expect(flushDone).toBe(false);

    // Reject — chain still settles (broadcast.emit's catch swallows).
    h.respondError(req.requestId, 'BusError', 'invalid event');

    await flushPromise;
    expect(flushDone).toBe(true);
  });

  test('awaits MULTIPLE concurrent chains', async () => {
    const h = makeHarness();
    h.proxy.api.broadcast.emit('a');
    h.proxy.api.broadcast.emit('b');
    h.proxy.api.broadcast.emit('c');
    expect(h.apiRequests().length).toBe(3);

    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });
    await Promise.resolve();
    await Promise.resolve();
    expect(flushDone).toBe(false);

    // Resolve in scrambled order — flush must wait for all.
    const reqs = h.apiRequests();
    h.respond(reqs[2]!.requestId, undefined);
    await Promise.resolve();
    expect(flushDone).toBe(false);

    h.respond(reqs[0]!.requestId, undefined);
    await Promise.resolve();
    expect(flushDone).toBe(false);

    h.respond(reqs[1]!.requestId, undefined);
    await flushPromise;
    expect(flushDone).toBe(true);
  });

  test('settled chains are removed from the tracker (subsequent flush is fast)', async () => {
    const h = makeHarness();
    h.proxy.api.broadcast.emit('a');
    const req = h.apiRequests()[0]!;
    h.respond(req.requestId, undefined);

    // Yield enough microtasks for the chain's .finally to fire and drop
    // the entry from outstandingChains.
    await Promise.resolve();
    await Promise.resolve();
    await Promise.resolve();

    const start = Date.now();
    await h.proxy.flush();
    expect(Date.now() - start).toBeLessThan(50);
  });

  test('chains added DURING flush are also drained (cascading-loop semantics)', async () => {
    const h = makeHarness();

    // Seed one chain, set up a cascading second chain via the response handler.
    h.proxy.api.broadcast.emit('first');
    const req1 = h.apiRequests()[0]!;

    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });
    await Promise.resolve();
    expect(flushDone).toBe(false);

    // Resolve the first chain. THIS handler synchronously starts a new
    // emit — which queues a new chain into outstandingChains. The flush()
    // loop should observe it and continue waiting.
    h.respond(req1.requestId, undefined);

    // Yield a microtask so the chain's .finally / .then gets a chance.
    // The chain's .finally drops it from outstandingChains; meanwhile in
    // the same tick we kick off a follow-up emit BEFORE flush wakes.
    h.proxy.api.broadcast.emit('second');
    const req2 = h.apiRequests()[1]!;

    await Promise.resolve();
    await Promise.resolve();
    expect(flushDone).toBe(false);

    h.respond(req2.requestId, undefined);
    await flushPromise;
    expect(flushDone).toBe(true);
  });

  test('flush() never throws even if an outstanding chain rejects', async () => {
    const h = makeHarness();
    h.proxy.api.broadcast.emit('a');
    const req = h.apiRequests()[0]!;

    h.respondError(req.requestId, 'BusError', 'simulated reject');

    // flush should still resolve (Promise.allSettled inside swallows).
    await expect(h.proxy.flush()).resolves.toBeUndefined();
  });

  // ─── v0.26.1 — auto-track every dispatch ──────────────────────────────────
  //
  // Pre-v0.26.1, `flush()` only drained chains that were explicitly wrapped
  // by callers via `trackChain` (broadcast.emit, gated FE-confirmation
  // chains, register-handler IPC chains). Awaitable dispatches like
  // `api.variables.local.get(...)` returned a Promise that the user was
  // expected to await — if they didn't, the dispatch escaped flush() and
  // arrived at the parent post-`run-result`, where it would either find a
  // still-alive activeRun (kept past run-result via the v0.25.0 lifetime
  // parity fix) OR fail with `RunCompletedError` once a subsequent
  // `dispatchRunScript` for the same script dropped the activeRun.
  //
  // Post-v0.26.1, EVERY dispatch is auto-tracked. Awaited code is unaffected
  // (user's await and flush() wait on the same Promise; total time = max =
  // unchanged). Unawaited code is now correctly drained before run-result.
  // These tests assert the new strict invariant.

  test('an unawaited dispatch (top-level method) is drained by flush()', async () => {
    const h = makeHarness();

    // Fire-and-forget — no `await`, no .catch(). Pre-v0.26.1 this would
    // leak past flush().
    void h.proxy.api.variables.local.get('test-key');
    expect(h.apiRequests().length).toBe(1);

    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });

    await Promise.resolve();
    await Promise.resolve();
    expect(flushDone).toBe(false);

    // Resolve the dispatch — flush() should now complete.
    const req = h.apiRequests()[0]!;
    h.respond(req.requestId, 'value');

    await flushPromise;
    expect(flushDone).toBe(true);
  });

  test('an awaited dispatch is drained without double-counting', async () => {
    const h = makeHarness();

    const userPromise = h.proxy.api.variables.local.get('k');
    const req = h.apiRequests()[0]!;

    // User awaits in their own code path...
    let userResolved = false;
    void userPromise.then((v) => { userResolved = true; void v; });

    // ...AND flush() also waits on the same Promise.
    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });

    h.respond(req.requestId, 'awaited-value');
    await flushPromise;

    // Both surfaces observe completion. Total elapsed time is the dispatch
    // round-trip's, not 2x.
    expect(flushDone).toBe(true);
    expect(userResolved).toBe(true);
  });

  test('multiple unawaited dispatches all drained before flush() resolves', async () => {
    const h = makeHarness();

    void h.proxy.api.variables.local.get('a');
    void h.proxy.api.variables.local.get('b');
    void h.proxy.api.variables.global.set('c', 1);
    expect(h.apiRequests().length).toBe(3);

    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });
    await Promise.resolve();
    expect(flushDone).toBe(false);

    const reqs = h.apiRequests();
    h.respond(reqs[0]!.requestId, 'av');
    h.respond(reqs[1]!.requestId, 'bv');
    await Promise.resolve();
    expect(flushDone).toBe(false);  // last one still pending

    h.respond(reqs[2]!.requestId, undefined);
    await flushPromise;
    expect(flushDone).toBe(true);
  });

  test('unawaited dispatch that rejects is still drained (chain settles)', async () => {
    const h = makeHarness();

    // Fire-and-forget; if it rejects we silently drop on the floor —
    // matches the "user forgot to await OR catch" reality.
    const p = h.proxy.api.variables.local.get('k');
    p.catch(() => { /* swallow */ });

    const req = h.apiRequests()[0]!;
    let flushDone = false;
    const flushPromise = h.proxy.flush().then(() => { flushDone = true; });
    await Promise.resolve();
    expect(flushDone).toBe(false);

    h.respondError(req.requestId, 'StorageError', 'simulated read failure');
    await flushPromise;
    expect(flushDone).toBe(true);
  });
});
