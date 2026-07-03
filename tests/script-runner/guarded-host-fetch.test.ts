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
