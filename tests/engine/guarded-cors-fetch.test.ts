/**
 * The single outbound-HTTP chokepoint (`guardedCorsFetch`): a user-allowlisted trusted-local host takes a
 * DIRECT fetch (the escape hatch for local model servers / LAN devices); everything else routes through
 * `spindle.cors` → the host's `safeFetch` (SSRF-hardened). The direct path is normalized to the same
 * response shape as cors so `decodeHttpResponse` handles both.
 */
import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import { guardedCorsFetch, setAllowedPrivateHostsReader } from '../../src/engine/api/utils.js';

describe('guardedCorsFetch — SSRF-guarded egress routing', () => {
  const realFetch = globalThis.fetch;
  const realSpindle = (globalThis as unknown as { spindle?: unknown }).spindle;
  let corsCalls: Array<[string, unknown]>;
  let fetchCalls: string[];

  beforeEach(() => {
    corsCalls = [];
    fetchCalls = [];
    (globalThis as unknown as { spindle: unknown }).spindle = {
      cors: async (url: string, opts: unknown) => {
        corsCalls.push([url, opts]);
        return { status: 200, statusText: 'OK', headers: {}, body: 'via-cors' };
      },
    };
    globalThis.fetch = (async (url: string | URL) => {
      fetchCalls.push(String(url));
      return new Response('via-direct', { status: 201, statusText: 'Created', headers: { 'x-test': 'y' } });
    }) as unknown as typeof globalThis.fetch;
  });

  afterEach(() => {
    globalThis.fetch = realFetch;
    (globalThis as unknown as { spindle?: unknown }).spindle = realSpindle;
    setAllowedPrivateHostsReader(() => []);
  });

  test('non-allowlisted host → hardened cors path (never a direct fetch)', async () => {
    setAllowedPrivateHostsReader(() => ['localhost:11434']);
    const r = await guardedCorsFetch('https://example.com/data', { method: 'GET' }) as { body: string };
    expect(corsCalls.length).toBe(1);
    expect(fetchCalls.length).toBe(0);
    expect(r.body).toBe('via-cors');
  });

  test('allowlisted trusted-local host → direct fetch (never cors), normalized to the cors shape', async () => {
    setAllowedPrivateHostsReader(() => ['localhost:11434']);
    const r = await guardedCorsFetch('http://localhost:11434/api', { method: 'GET' }) as {
      status: number; statusText: string; headers: Record<string, string>; body: string;
    };
    expect(fetchCalls).toEqual(['http://localhost:11434/api']);
    expect(corsCalls.length).toBe(0);
    expect(r.status).toBe(201);
    expect(r.statusText).toBe('Created');
    expect(r.headers['x-test']).toBe('y');
    expect(r.body).toBe('via-direct');
  });

  test('empty allowlist → a private host still goes through cors (default-safe)', async () => {
    setAllowedPrivateHostsReader(() => []);
    await guardedCorsFetch('http://localhost:11434/api', { method: 'GET' });
    expect(corsCalls.length).toBe(1);
    expect(fetchCalls.length).toBe(0);
  });

  test('a domain that resolves to an allowlisted IP still uses cors (literal match only, no rebinding bypass)', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1', 'localhost']);
    await guardedCorsFetch('http://evil.example.com/', { method: 'GET' });
    expect(corsCalls.length).toBe(1); // fails closed to the hardened path
    expect(fetchCalls.length).toBe(0);
  });

  test('direct path: arraybuffer response → base64 body + encoding flag', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']);
    globalThis.fetch = (async () => new Response(new Uint8Array([1, 2, 3]), { status: 200, statusText: 'OK' })) as unknown as typeof globalThis.fetch;
    const r = await guardedCorsFetch('http://127.0.0.1:8000/blob', { method: 'GET', responseType: 'arraybuffer' }) as {
      encoding?: string; body: string;
    };
    expect(r.encoding).toBe('base64');
    expect(atob(r.body)).toBe(String.fromCharCode(1, 2, 3));
  });

  test('SECURITY: a file:// URL to an allowlisted IP goes through cors, never a direct fetch', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']);
    await guardedCorsFetch('file://127.0.0.1/etc/passwd', { method: 'GET' });
    expect(corsCalls.length).toBe(1); // routed to the hardened path (where safeFetch rejects the scheme)
    expect(fetchCalls.length).toBe(0); // NOT the direct local-file read
  });

  test('direct path: an over-cap Content-Length is rejected before buffering the body', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']);
    const oversized = String(65 * 1024 * 1024); // 65 MiB > the 64 MiB direct-path cap
    globalThis.fetch = (async () => new Response(
      new ReadableStream({ start(c) { c.enqueue(new Uint8Array([1])); c.close(); } }),
      { status: 200, statusText: 'OK', headers: { 'content-length': oversized } },
    )) as unknown as typeof globalThis.fetch;
    await expect(
      guardedCorsFetch('http://127.0.0.1:8000/big', { method: 'GET', responseType: 'arraybuffer' }),
    ).rejects.toThrow(/exceeds/);
  });

  test('direct path preserves multiple Set-Cookie headers in setCookies', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']);
    globalThis.fetch = (async () => new Response('ok', {
      status: 200, statusText: 'OK',
      headers: [['set-cookie', 'a=1; Path=/'], ['set-cookie', 'b=2; HttpOnly']],
    })) as unknown as typeof globalThis.fetch;
    const r = await guardedCorsFetch('http://127.0.0.1:8000/login', { method: 'GET' }) as { setCookies?: string[] };
    expect(r.setCookies).toEqual(['a=1; Path=/', 'b=2; HttpOnly']);
  });

  test('direct path forwards the AbortSignal to the underlying fetch', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']);
    let seenSignal: unknown = 'unset';
    globalThis.fetch = (async (_url: string | URL, init?: RequestInit) => {
      seenSignal = init?.signal ?? undefined;
      return new Response('ok', { status: 200 });
    }) as unknown as typeof globalThis.fetch;
    const ctrl = new AbortController();
    await guardedCorsFetch('http://127.0.0.1:8000/x', { method: 'GET', signal: ctrl.signal });
    expect(seenSignal).toBe(ctrl.signal);
  });

  test('direct path: an already-aborted signal rejects (cancellation reaches the fetch)', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']);
    globalThis.fetch = (async (_url: string | URL, init?: RequestInit) => {
      if (init?.signal?.aborted) throw new DOMException('The operation was aborted.', 'AbortError');
      return new Response('ok', { status: 200 });
    }) as unknown as typeof globalThis.fetch;
    const ctrl = new AbortController();
    ctrl.abort();
    await expect(
      guardedCorsFetch('http://127.0.0.1:8000/x', { method: 'GET', signal: ctrl.signal }),
    ).rejects.toThrow(/abort/i);
  });

  test('cors path drops the AbortSignal (it cannot cross the worker boundary)', async () => {
    setAllowedPrivateHostsReader(() => ['127.0.0.1']); // example.com is NOT allowlisted → cors path
    await guardedCorsFetch('https://example.com/x', { method: 'GET', signal: new AbortController().signal });
    expect(corsCalls.length).toBe(1);
    const [, opts] = corsCalls[0]!;
    expect((opts as { signal?: unknown }).signal).toBeUndefined();
  });
});
