/**
 * Phase 11.C.1 — api-proxy dispatch + IPC-envelope tests.
 *
 * Direct coverage for the proxy's `dispatch()` and `dispatchWithSignal()`
 * machinery — the layer all api method calls funnel through:
 *
 *   - Envelope shape (type, runId, requestId, scriptId, method, args).
 *   - `runIdContext.getStore() ?? ctx.runId` selection: bare dispatch uses
 *     `ctx.runId`; dispatch wrapped in `runIdContext.run(handlerRunId, …)`
 *     uses `handlerRunId` instead. The latter is how registered macro/tool/
 *     interceptor closures fire correctly after their originating run ends.
 *   - requestId uniqueness across dispatches.
 *   - `handleResponse` routing: matching requestId resolves, mismatch
 *     drops silently, ok=false reconstructs the error.
 *   - `cleanup()` rejects every pending dispatch with the supplied reason.
 *   - `dispatchWithSignal` flow: `hasSignal: true` flag, signal stripped
 *     from args before send, `abort-request` emitted on signal abort,
 *     pre-aborted signal fires sync.
 *
 * Tests drive dispatches via real api methods (rather than via a private
 * test inspector). `api.utils.macros.resolve` is the simplest async-value
 * dispatch; `api.llm.generate` is the simplest signal-bearing dispatch.
 */

import { describe, test, expect } from 'bun:test';
import { buildProxiedAPI, runIdContext, type ProxyContext, type ProxyHandle } from '../../src/script-runner/api-proxy.js';
import type { ChildToParentMessage, ApiProxyRequest, AbortRequest, ApiProxyResponse } from '../../src/types/script-runner-ipc.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface Harness {
  proxy:         ProxyHandle;
  sent:          ChildToParentMessage[];
  /** Convenience: pull all `api-request` IPCs sent so far. */
  apiRequests(): ApiProxyRequest[];
  /** Convenience: pull all `abort-request` IPCs sent so far. */
  abortRequests(): AbortRequest[];
  /** Send a synthesized api-response back into the proxy. */
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
    ...overrides,
  };
  const proxy = buildProxiedAPI(ctx);
  return {
    proxy,
    sent,
    apiRequests: () =>
      sent.filter((m): m is ApiProxyRequest => (m as { type?: unknown }).type === 'api-request'),
    abortRequests: () =>
      sent.filter((m): m is AbortRequest => (m as { type?: unknown }).type === 'abort-request'),
    respond(requestId, value) {
      const msg: ApiProxyResponse = { type: 'api-response', requestId, ok: true, value };
      proxy.handleResponse(msg);
    },
    respondError(requestId, name, message) {
      const msg: ApiProxyResponse = {
        type:      'api-response',
        requestId,
        ok:        false,
        error:     { name, message },
      };
      proxy.handleResponse(msg);
    },
  };
}

// ─── Envelope shape ──────────────────────────────────────────────────────────

describe('api-proxy: dispatch envelope shape', () => {
  test('an api method call sends an api-request with the expected fields', () => {
    const h = makeHarness();
    void h.proxy.api.utils.macros.resolve('hi');

    const reqs = h.apiRequests();
    expect(reqs.length).toBe(1);
    const req = reqs[0]!;
    expect(req.type).toBe('api-request');
    expect(req.runId).toBe('run-fixture-1');
    expect(req.scriptId).toBe('script-fixture');
    expect(req.method).toBe('utils.macros.resolve');
    // requestId: always present and string-shaped.
    expect(typeof req.requestId).toBe('string');
    expect(req.requestId.length).toBeGreaterThan(0);
    // No signal flag for non-signal-bearing dispatches.
    expect(req.hasSignal).toBeUndefined();
  });

  test('args array carries the user-supplied arguments verbatim', () => {
    const h = makeHarness();
    void h.proxy.api.utils.macros.resolve('template-x', { commit: false });
    const req = h.apiRequests()[0]!;
    expect(Array.isArray(req.args)).toBe(true);
    expect(req.args[0]).toBe('template-x');
    expect(req.args[1]).toEqual({ commit: false });
  });

  test('two dispatches produce distinct requestIds', () => {
    const h = makeHarness();
    void h.proxy.api.utils.macros.resolve('a');
    void h.proxy.api.utils.macros.resolve('b');
    const reqs = h.apiRequests();
    expect(reqs.length).toBe(2);
    expect(reqs[0]!.requestId).not.toBe(reqs[1]!.requestId);
  });
});

// ─── runIdContext override ───────────────────────────────────────────────────

describe('api-proxy: runIdContext override', () => {
  test('bare dispatch uses ctx.runId', () => {
    const h = makeHarness({ runId: 'run-script-body' });
    void h.proxy.api.utils.macros.resolve('hi');
    expect(h.apiRequests()[0]!.runId).toBe('run-script-body');
  });

  test('dispatch wrapped in runIdContext.run uses the per-fire id', async () => {
    const h = makeHarness({ runId: 'run-script-body' });

    await runIdContext.run('handler-fire-42', async () => {
      void h.proxy.api.utils.macros.resolve('hi-from-handler');
    });

    const req = h.apiRequests().at(-1)!;
    expect(req.runId).toBe('handler-fire-42');
  });

  test('dispatches outside the runIdContext.run block fall back to ctx.runId', async () => {
    const h = makeHarness({ runId: 'run-script-body' });

    await runIdContext.run('handler-fire-42', async () => {
      void h.proxy.api.utils.macros.resolve('inside');
    });
    void h.proxy.api.utils.macros.resolve('outside');

    const reqs = h.apiRequests();
    expect(reqs[0]!.runId).toBe('handler-fire-42');
    expect(reqs[1]!.runId).toBe('run-script-body');
  });
});

// ─── handleResponse routing ──────────────────────────────────────────────────

describe('api-proxy: handleResponse', () => {
  test('matching requestId + ok=true resolves the promise with the value', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.utils.macros.resolve('hi');
    const req = h.apiRequests()[0]!;

    h.respond(req.requestId, { text: 'resolved-payload', diagnostics: [] });

    const result = await promise;
    expect(result).toEqual({ text: 'resolved-payload', diagnostics: [] });
  });

  test('matching requestId + ok=false rejects with the reconstructed error', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.utils.macros.resolve('hi');
    const errSink = promise.then(() => null, (err: unknown) => err as Error);
    const req = h.apiRequests()[0]!;

    h.respondError(req.requestId, 'TypeError', 'boom');

    const err = await errSink;
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).name).toBe('TypeError');
    expect((err as Error).message).toBe('boom');
  });

  test('unknown requestId is a silent no-op', () => {
    const h = makeHarness();
    expect(() => h.respond('never-issued', 'whatever')).not.toThrow();
  });

  test('responding twice for the same requestId only acts once', async () => {
    const h = makeHarness();
    const promise = h.proxy.api.utils.macros.resolve('hi');
    const req = h.apiRequests()[0]!;

    h.respond(req.requestId, { text: 'first', diagnostics: [] });
    expect(() => h.respond(req.requestId, { text: 'second', diagnostics: [] })).not.toThrow();

    const result = await promise;
    expect(result.text).toBe('first');
  });
});

// ─── cleanup() ───────────────────────────────────────────────────────────────

describe('api-proxy: cleanup', () => {
  test('rejects every pending dispatch with the supplied reason', async () => {
    const h = makeHarness();
    const a = h.proxy.api.utils.macros.resolve('a');
    const b = h.proxy.api.utils.macros.resolve('b');

    // Pre-attach handlers so synchronous rejection in cleanup() doesn't
    // surface as an unhandled rejection.
    const ea = a.then(() => null, (err: unknown) => err as Error);
    const eb = b.then(() => null, (err: unknown) => err as Error);

    h.proxy.cleanup('script unregistered');

    const errA = await ea;
    const errB = await eb;
    expect(errA).toBeInstanceOf(Error);
    expect((errA as Error).message).toMatch(/script unregistered/);
    expect(errB).toBeInstanceOf(Error);
    expect((errB as Error).message).toMatch(/script unregistered/);
  });

  test('no-op when no dispatches are in-flight', () => {
    const h = makeHarness();
    expect(() => h.proxy.cleanup('whatever')).not.toThrow();
  });

  test('default reason when not supplied', async () => {
    const h = makeHarness();
    const a = h.proxy.api.utils.macros.resolve('a');
    const ea = a.then(() => null, (err: unknown) => err as Error);

    h.proxy.cleanup();

    const err = await ea;
    expect((err as Error).message).toMatch(/script run completed/);
  });
});

// ─── dispatchWithSignal ──────────────────────────────────────────────────────

describe('api-proxy: dispatchWithSignal', () => {
  test('signal-bearing api method sets hasSignal: true on the wire', () => {
    const h = makeHarness();
    const ac = new AbortController();
    void h.proxy.api.llm.generate([{ role: 'user', content: 'hi' }], { signal: ac.signal })
      .catch(() => {});

    const req = h.apiRequests()[0]!;
    expect(req.hasSignal).toBe(true);
    expect(req.method).toBe('llm.generate');
  });

  test('no signal supplied → hasSignal is false (production sets the flag explicitly)', () => {
    const h = makeHarness();
    void h.proxy.api.llm.generate([{ role: 'user', content: 'hi' }]).catch(() => {});
    const req = h.apiRequests()[0]!;
    // dispatchWithSignal always emits the field via `signal !== undefined`,
    // so absent signal lands as `false` (not undefined). The parent-side
    // gate is `req.hasSignal === true` so both shapes work, but pin the
    // current contract.
    expect(req.hasSignal).toBe(false);
  });

  test('signal field is stripped from opts before send (signals don\'t serialize)', () => {
    const h = makeHarness();
    const ac = new AbortController();
    void h.proxy.api.llm.generate([{ role: 'user', content: 'hi' }], {
      signal:      ac.signal,
      maxTokens:   100,
    }).catch(() => {});

    const req = h.apiRequests()[0]!;
    // args[1] is the opts object the proxy forwards. signal must be absent;
    // other fields preserved.
    const opts = req.args[1] as Record<string, unknown>;
    expect(opts).toBeDefined();
    expect('signal' in opts).toBe(false);
    expect(opts.maxTokens).toBe(100);
  });

  test('abort fires an `abort-request` IPC carrying the same requestId', async () => {
    const h = makeHarness();
    const ac = new AbortController();
    const promise = h.proxy.api.llm.generate([{ role: 'user', content: 'hi' }], { signal: ac.signal });
    const errSink = promise.then(() => null, (err: unknown) => err as Error);

    const req = h.apiRequests()[0]!;
    expect(h.abortRequests().length).toBe(0);

    ac.abort();

    // Synchronous: signal listener fires inline, abort-request lands in `sent`.
    const aborts = h.abortRequests();
    expect(aborts.length).toBe(1);
    expect(aborts[0]!.requestId).toBe(req.requestId);

    // Resolve via mock to clean up the in-flight promise (we don't care
    // which way the parent's response settles for this test — abort
    // signal delivery is what we're verifying).
    h.respondError(req.requestId, 'AbortError', 'aborted');
    await errSink;
  });

  test('pre-aborted signal fires the abort immediately after the api-request', () => {
    const h = makeHarness();
    const ac = new AbortController();
    ac.abort();   // BEFORE the dispatch
    void h.proxy.api.llm.generate([{ role: 'user', content: 'hi' }], { signal: ac.signal })
      .catch(() => {});

    // Both messages already in `sent` synchronously (api-request first, abort second).
    expect(h.apiRequests().length).toBe(1);
    expect(h.abortRequests().length).toBe(1);
    expect(h.abortRequests()[0]!.requestId).toBe(h.apiRequests()[0]!.requestId);
  });
});

// ─── send-failure handling ───────────────────────────────────────────────────

describe('api-proxy: dispatch send-failure rollback', () => {
  test('send-throw rejects the dispatch promise with the error', async () => {
    const h = makeHarness({
      send: () => { throw new Error('channel closed'); },
    });
    const promise = h.proxy.api.utils.macros.resolve('hi');
    const errSink = promise.then(() => null, (err: unknown) => err as Error);

    const err = await errSink;
    expect(err).toBeInstanceOf(Error);
    expect((err as Error).message).toMatch(/channel closed/);
  });
});
