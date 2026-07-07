/**
 * #11 (v2.0.1) — method-level AbortSignal under the QuickJS engine. Signal-bearing api methods
 * (api.utils.http.* / api.llm.generate / api.llm.generateStructured — parity with the asyncfn proxy's
 * dispatchWithSignal) detect + strip the in-VM signal, mint an abortId, and route via
 * __hostDispatchWithSignal → run.dispatchWithSignal with a host AbortController keyed by the abortId; an
 * in-VM ctrl.abort() fires __lsMethodAbort → the host controller aborts (→ the child proxy sends an
 * AbortRequest). These drive the engine directly with a mock dispatchWithSignal — a cancellable request
 * that rejects when its host-side signal fires — the same contract api-proxy.dispatchWithSignal provides
 * in production. Cancellation takes effect on the direct/allowlisted-local egress path only (the cors path
 * carries no signal on EITHER engine — an accepted divergence documented in docs/api-stability.md).
 *
 * setup.ts beforeEach runs _disposeContextForTests().
 */
import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

function makeAbortError(): Error { const e = new Error('The operation was aborted'); e.name = 'AbortError'; return e; }

/** A dispatchWithSignal that hangs until its (host-side) signal aborts, then rejects with AbortError —
 *  simulating a cancellable request on the direct/allowlisted-local egress path. */
function cancellableDispatch(record?: (method: string) => void) {
  return (method: string, _args: unknown[], signal: AbortSignal | undefined): Promise<unknown> => {
    record?.(method);
    return new Promise((_resolve, reject) => {
      if (signal?.aborted) { reject(makeAbortError()); return; }
      signal?.addEventListener('abort', () => reject(makeAbortError()), { once: true });
    });
  };
}

function opts(over: Partial<QuickJSRunOptions> & { scriptId: string; code: string }): QuickJSRunOptions {
  return {
    code:               over.code,
    dispatch:           over.dispatch ?? (async () => undefined),
    dispatchWithSignal: over.dispatchWithSignal,
    data:               {},
    script:             { id: over.scriptId, name: over.scriptId, type: 'trigger' },
    console:            noopConsole,
    timeoutMs:          5_000,
    serializeError,
  };
}

describe('QuickJS method-level AbortSignal', () => {
  test('aborting an in-flight api.utils.http.get({signal}) rejects with AbortError', async () => {
    let dispatchedMethod: string | undefined;
    const r = await runUserScriptInQuickJS(opts({
      scriptId:           'ms-http',
      dispatchWithSignal: cancellableDispatch((m) => { dispatchedMethod = m; }),
      code: `const c = new AbortController();
        const p = api.utils.http.get('https://example.com/data', { signal: c.signal });
        c.abort();
        try { await p; return 'NO-THROW'; } catch (e) { return e.name; }`,
    }));
    expect(r).toBe('AbortError');
    expect(dispatchedMethod).toBe('utils.http.get'); // routed through the signal path (not plain dispatch)
  });

  test('a pre-aborted signal on api.llm.generate rejects immediately', async () => {
    const r = await runUserScriptInQuickJS(opts({
      scriptId:           'ms-preabort',
      dispatchWithSignal: cancellableDispatch(),
      code: `const c = new AbortController(); c.abort();
        try { await api.llm.generate([{ role: 'user', content: 'hi' }], { signal: c.signal }); return 'NO-THROW'; } catch (e) { return e.name; }`,
    }));
    expect(r).toBe('AbortError');
  });

  test('a signal that never aborts resolves normally (listener detaches on settle — no leak)', async () => {
    // The signal is never aborted; the request resolves. sendSignal must detach its in-VM abort listener on
    // settle, so a later abort of the (long-lived) controller is a harmless no-op.
    const r = await runUserScriptInQuickJS(opts({
      scriptId:           'ms-normal',
      dispatchWithSignal: () => Promise.resolve('OK'),
      code: `const c = new AbortController();
        const v = await api.utils.http.get('https://example.com', { signal: c.signal });
        c.abort(); // after settle — must be a no-op (no throw, no stale dispatch)
        return v;`,
    }));
    expect(r).toBe('OK');
  });

  test('a call WITHOUT a signal takes the plain-dispatch path (unchanged)', async () => {
    let sigCalls = 0;
    const r = await runUserScriptInQuickJS(opts({
      scriptId:           'ms-nosignal',
      dispatch:           async (method: string) => (method === 'utils.http.get' ? 'plain' : undefined),
      dispatchWithSignal: () => { sigCalls++; return Promise.resolve('signal'); },
      code: `return await api.utils.http.get('https://example.com');`,
    }));
    expect(r).toBe('plain'); // plain dispatch, not the signal path
    expect(sigCalls).toBe(0); // dispatchWithSignal NOT invoked for a signal-less call
  });
});
