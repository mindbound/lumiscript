/**
 * makeGuardedHostFetch — the child's bare-`fetch` capability for allowDangerous runs. Instead of egressing
 * straight from the child, it dispatches `utils.http.request` (→ backend guardedCorsFetch → cors/safeFetch or
 * an allowlisted direct fetch) and rebuilds a standard Response so `.text()/.json()/.arrayBuffer()/.headers`
 * work. These test the reroute + Response reconstruction in isolation with a stub dispatch.
 */
import { describe, test, expect } from 'bun:test';
import { makeGuardedHostFetch } from '../../src/script-runner/child-entry.js';

describe('makeGuardedHostFetch', () => {
  test('dispatches utils.http.request (method/headers/body + arraybuffer) and rebuilds a Response', async () => {
    let dispatched: [string, unknown[]] | undefined;
    const dispatch = async (method: string, args: unknown[]) => {
      dispatched = [method, args];
      return { status: 200, statusText: 'OK', headers: { 'content-type': 'text/plain' }, body: new TextEncoder().encode('hello') };
    };
    const res = await makeGuardedHostFetch(dispatch)('http://example.com/x', {
      method: 'POST', headers: { 'X-A': '1' }, body: '{"a":1}',
    });
    expect(dispatched![0]).toBe('utils.http.request');
    const [url, opts] = dispatched![1] as [string, { method: string; headers: Record<string, string>; body: unknown; responseType: string }];
    expect(url).toBe('http://example.com/x');
    expect(opts.method).toBe('POST');
    expect(opts.headers['x-a']).toBe('1'); // Headers normalizes names to lowercase (case-insensitive; harmless)
    expect(opts.body).toBe('{"a":1}');
    expect(opts.responseType).toBe('arraybuffer');
    expect(res.status).toBe(200);
    expect(res.headers.get('content-type')).toBe('text/plain');
    expect(await res.text()).toBe('hello');
  });

  test('a null-body status (204/304) rebuilds a bodyless Response without throwing', async () => {
    const dispatch = async () => ({ status: 204, statusText: 'No Content', headers: {}, body: '' });
    const res = await makeGuardedHostFetch(dispatch)('http://x/');
    expect(res.status).toBe(204);
    expect(await res.text()).toBe('');
  });

  test('an out-of-range status (>=600) resolves fetch (clamped) instead of rejecting', async () => {
    // `new Response(body, { status })` accepts only 101 or [200,599]; a non-standard status a local server
    // put on the wire must still RESOLVE fetch (ok=false), never turn a completed response into a rejection.
    const dispatch = async () => ({ status: 600, statusText: 'Weird', headers: {}, body: new TextEncoder().encode('body') });
    const res = await makeGuardedHostFetch(dispatch)('http://127.0.0.1/x');
    expect(res.ok).toBe(false);
    expect(res.status).toBe(599); // clamped into the constructible range
    expect(await res.text()).toBe('body'); // body preserved
  });

  test('rebuilt Response exposes individual Set-Cookie values via getSetCookie()', async () => {
    // The dispatch return carries Set-Cookie split out in setCookies (direct path); the rebuilt Response
    // must re-add each so getSetCookie() returns them all rather than one collapsed value.
    const dispatch = async () => ({
      status: 200, statusText: 'OK', headers: { 'content-type': 'text/plain' },
      body: new TextEncoder().encode('ok'), setCookies: ['a=1; Path=/', 'b=2; HttpOnly'],
    });
    const res = await makeGuardedHostFetch(dispatch)('http://127.0.0.1/login');
    expect(res.headers.getSetCookie()).toEqual(['a=1; Path=/', 'b=2; HttpOnly']);
  });

  test('a signal routes through the signal-aware dispatch (cancellable); no signal uses plain dispatch', async () => {
    const calls: string[] = [];
    const ok = { status: 200, statusText: 'OK', headers: {}, body: '' };
    const dispatch = async () => { calls.push('plain'); return ok; };
    const dispatchWithSignal = async (_m: string, _a: unknown[], sig: AbortSignal | undefined) => {
      calls.push(sig ? 'signal' : 'signal-missing');
      return ok;
    };
    const fetchFn = makeGuardedHostFetch(dispatch, dispatchWithSignal);
    await fetchFn('http://127.0.0.1/a', { signal: new AbortController().signal });
    await fetchFn('http://127.0.0.1/b');
    expect(calls).toEqual(['signal', 'plain']);
  });

  test('URL / Request inputs resolve to a string url; default method is GET', async () => {
    let seen: { url: string; method: string } | undefined;
    const dispatch = async (_m: string, args: unknown[]) => {
      const [url, opts] = args as [string, { method: string }];
      seen = { url, method: opts.method };
      return { status: 200, statusText: 'OK', headers: {}, body: '' };
    };
    await makeGuardedHostFetch(dispatch)(new URL('http://x/y?z=1'));
    expect(seen).toEqual({ url: 'http://x/y?z=1', method: 'GET' });
  });
});
