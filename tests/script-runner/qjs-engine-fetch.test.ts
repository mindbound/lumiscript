/**
 * #11 P3 A2 — the in-VM `fetch` bridge (allowDangerous-gated).
 *
 * The VM has no network. A host newFunction (__lsFetch) calls opts.hostFetch and settles a
 * deferred promise with the response + body bytes; the in-VM wrapper rebuilds a Response
 * (text/json/arrayBuffer/bytes + Headers). These tests supply a MOCK hostFetch to exercise the
 * bridge in isolation. In production hostFetch is child-entry's makeGuardedHostFetch, which routes
 * the request through api.utils.http.request → the host cors proxy → safeFetch (the same SSRF-safe
 * egress as api.utils.http.*); only allowDangerous runs get a fetch capability at all.
 */

import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  _vmHandlerIdsForTests,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Fetch', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
    allowDangerous: over.allowDangerous,
    hostFetch:      over.hostFetch,
  };
}

describe('#11 P3 A2: fetch', () => {
  test('blocked when allowDangerous is absent (fail-safe default)', async () => {
    let called = false;
    const v = await runUserScriptInQuickJS(makeOpts({
      // allowDangerous omitted → defaults to false → fetch must be gated off
      hostFetch: async () => { called = true; return new Response('x'); },
      code: `try { await fetch('https://example.com'); return 'no-throw'; } catch (e) { return 'blocked:' + e.message; }`,
    })) as string;
    expect(v.startsWith('blocked:')).toBe(true);
    expect(v).toContain('Allow Dangerous');
    expect(called).toBe(false); // host fetch never invoked when gated
  });

  test('reports unavailable when allowDangerous but no host fetch was granted', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      // hostFetch omitted → host granted no fetch capability for this run
      code: `try { await fetch('https://example.com'); return 'no-throw'; } catch (e) { return 'err:' + e.message; }`,
    })) as string;
    expect(v).toContain('unavailable');
  });

  test('uses the passed host fetch, NOT a live globalThis.fetch (survives lockdown)', async () => {
    // Simulate installSandboxLockdown() having nulled globalThis.fetch in the
    // child realm. The bridge must use the captured opts.hostFetch instead — the
    // old live-read implementation threw TypeError here.
    const saved = globalThis.fetch;
    (globalThis as { fetch?: unknown }).fetch = undefined;
    try {
      const v = await runUserScriptInQuickJS(makeOpts({
        allowDangerous: true,
        hostFetch: async () => new Response('via-captured-ref'),
        code: `return await (await fetch('https://x')).text();`,
      })) as string;
      expect(v).toBe('via-captured-ref');
    } finally {
      globalThis.fetch = saved;
    }
  });

  test('GET returns a Response with ok/status/statusText/headers/json', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => new Response(JSON.stringify({ hi: 'there' }), {
        status: 200,
        statusText: 'OK',
        headers: { 'content-type': 'application/json', 'x-custom': 'v' },
      }),
      code: `
        const r = await fetch('https://example.com/data');
        const j = await r.json();
        return {
          ok: r.ok, status: r.status, statusText: r.statusText,
          ct: r.headers.get('content-type'),
          custom: r.headers.get('X-Custom'),     // case-insensitive lookup
          hasMissing: r.headers.has('nope'),
          missing: r.headers.get('nope'),
          body: j,
        };
      `,
    })) as {
      ok: boolean; status: number; statusText: string;
      ct: string; custom: string; hasMissing: boolean; missing: unknown; body: { hi: string };
    };
    expect(v.ok).toBe(true);
    expect(v.status).toBe(200);
    expect(v.statusText).toBe('OK');
    expect(v.ct).toContain('application/json');
    expect(v.custom).toBe('v');
    expect(v.hasMissing).toBe(false);
    expect(v.missing).toBeNull();
    expect(v.body).toEqual({ hi: 'there' });
  });

  test('text() / bytes() / arrayBuffer() all read the UTF-8 body', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => new Response('héllo'),
      code: `
        const t = await (await fetch('https://x')).text();
        const b = await (await fetch('https://x')).bytes();
        const ab = await (await fetch('https://x')).arrayBuffer();
        return { t, isU8: b instanceof Uint8Array, len: b.length, abLen: ab.byteLength };
      `,
    })) as { t: string; isU8: boolean; len: number; abLen: number };
    expect(v.t).toBe('héllo');
    expect(v.isU8).toBe(true);
    expect(v.len).toBe(6);   // 'héllo' = 6 bytes UTF-8 (é = 2 bytes)
    expect(v.abLen).toBe(6);
  });

  test('forwards method, headers and body to the host fetch', async () => {
    let seenUrl = '';
    let seenInit: RequestInit | undefined;
    await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async (url, init) => { seenUrl = url; seenInit = init; return new Response('ok'); },
      code: `await fetch('https://api.example.com/post', { method: 'POST', headers: { 'X-Token': 'abc' }, body: '{"a":1}' }); return null;`,
    }));
    expect(seenUrl).toBe('https://api.example.com/post');
    expect(seenInit?.method).toBe('POST');
    expect((seenInit?.headers as Record<string, string>)['X-Token']).toBe('abc');
    expect(seenInit?.body).toBe('{"a":1}');
  });

  test('a defaulted GET (no opts) sends method GET to the host', async () => {
    let seenInit: RequestInit | undefined;
    await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async (_url, init) => { seenInit = init; return new Response('ok'); },
      code: `await fetch('https://x'); return null;`,
    }));
    expect(seenInit?.method).toBe('GET');
    expect(seenInit?.body).toBeUndefined(); // null body is dropped, not forwarded
  });

  test('forwards the JSON-able RequestInit fields to the host (fetch-dropped-requestinit)', async () => {
    let seenInit: RequestInit | undefined;
    await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async (_url, init) => { seenInit = init; return new Response('ok'); },
      code: `await fetch('https://x', {
        method: 'POST', credentials: 'include', mode: 'cors', redirect: 'manual', cache: 'no-store',
        referrer: 'about:client', referrerPolicy: 'no-referrer', integrity: 'sha256-abc', keepalive: true,
        headers: { 'X-T': '1' }, body: 'b',
      }); return null;`,
    }));
    expect(seenInit?.method).toBe('POST');
    expect(seenInit?.credentials).toBe('include');
    expect(seenInit?.mode).toBe('cors');
    expect(seenInit?.redirect).toBe('manual');
    expect(seenInit?.cache).toBe('no-store');
    expect(seenInit?.referrer).toBe('about:client');
    expect(seenInit?.referrerPolicy).toBe('no-referrer');
    expect(seenInit?.integrity).toBe('sha256-abc');
    expect(seenInit?.keepalive).toBe(true);
    expect((seenInit?.headers as Record<string, string>)['X-T']).toBe('1');
    expect(seenInit?.body).toBe('b');
  });

  test('omitted RequestInit fields are NOT forwarded (no undefined junk in init)', async () => {
    let seenInit: RequestInit | undefined;
    await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async (_url, init) => { seenInit = init; return new Response('ok'); },
      code: `await fetch('https://x', { method: 'GET' }); return null;`,
    }));
    expect('credentials' in (seenInit ?? {})).toBe(false);
    expect('mode' in (seenInit ?? {})).toBe(false);
    expect('redirect' in (seenInit ?? {})).toBe(false);
    expect('keepalive' in (seenInit ?? {})).toBe(false);
  });

  test('host fetch rejection surfaces as an in-VM fetch rejection', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => { throw new Error('network down'); },
      code: `try { await fetch('https://x'); return 'no-throw'; } catch (e) { return 'caught:' + e.message; }`,
    })) as string;
    expect(v).toBe('caught:network down');
  });

  // ── 3b fetch-abortsignal ──────────────────────────────────────────────────
  test('AbortController / AbortSignal basics work in-VM', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        var c = new AbortController();
        var fired = false; c.signal.addEventListener('abort', function () { fired = true; });
        var before = c.signal.aborted;
        c.abort();
        var s2 = AbortSignal.abort();
        return { before: before, after: c.signal.aborted, fired: fired, reason: c.signal.reason.name, staticAborted: s2.aborted };
      `,
    })) as { before: boolean; after: boolean; fired: boolean; reason: string; staticAborted: boolean };
    expect(v).toEqual({ before: false, after: true, fired: true, reason: 'AbortError', staticAborted: true });
  });

  test('aborting an in-flight fetch cancels the host request + rejects with AbortError', async () => {
    let hostSignalAborted = false;
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      // A host fetch that never resolves unless its signal aborts (mirrors a real cancellable request).
      hostFetch: (_url, init) => new Promise((_resolve, reject) => {
        const sig = init?.signal;
        if (sig) sig.addEventListener('abort', () => {
          hostSignalAborted = true;
          reject(Object.assign(new Error('aborted'), { name: 'AbortError' }));
        });
      }),
      code: `
        var ctrl = new AbortController();
        var p = fetch('https://x', { signal: ctrl.signal });
        ctrl.abort();
        try { await p; return 'no-throw'; } catch (e) { return 'caught:' + e.name; }
      `,
    })) as string;
    expect(v).toBe('caught:AbortError');
    expect(hostSignalAborted).toBe(true);
  });

  test('fetch with an ALREADY-aborted signal rejects immediately without calling the host', async () => {
    let called = false;
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => { called = true; return new Response('x'); },
      code: `
        var ctrl = new AbortController(); ctrl.abort();
        try { await fetch('https://x', { signal: ctrl.signal }); return 'no-throw'; } catch (e) { return 'caught:' + e.name; }
      `,
    })) as string;
    expect(v).toBe('caught:AbortError');
    expect(called).toBe(false); // host fetch never invoked
  });

  // ── 3c fetch-binary-base64 ────────────────────────────────────────────────
  test('binary body round-trips via base64 (non-UTF8 bytes preserved)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => new Response(new Uint8Array([0, 1, 2, 254, 255, 128])),
      code: `
        var b = await (await fetch('https://x')).bytes();
        return { isU8: b instanceof Uint8Array, len: b.length, vals: Array.from(b) };
      `,
    })) as { isU8: boolean; len: number; vals: number[] };
    expect(v.isU8).toBe(true);
    expect(v.len).toBe(6);
    expect(v.vals).toEqual([0, 1, 2, 254, 255, 128]);
  });

  test('a response whose Content-Length exceeds the cap is rejected before the body read', async () => {
    let bodyRead = false;
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => {
        const r = new Response('x', { headers: { 'content-length': String(64 * 1024 * 1024 + 1) } });
        return new Proxy(r, { get(t, p) { if (p === 'arrayBuffer') { bodyRead = true; } return Reflect.get(t, p); } });
      },
      code: `try { await fetch('https://x'); return 'no-throw'; } catch (e) { return 'caught:' + e.message; }`,
    })) as string;
    expect(v).toContain('exceeds');
    expect(bodyRead).toBe(false); // rejected before pulling the body
  });

  test('fetch / Headers / Response globals are frozen', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      allowDangerous: true,
      hostFetch: async () => new Response('ok'),
      code: `
        const out = [];
        try { globalThis.fetch = () => 'HACKED'; out.push('fetch:writable'); } catch (e) { out.push('fetch:locked'); }
        try { globalThis.Response = function () {}; out.push('Response:writable'); } catch (e) { out.push('Response:locked'); }
        try { globalThis.Headers = function () {}; out.push('Headers:writable'); } catch (e) { out.push('Headers:locked'); }
        return out;
      `,
    })) as string[];
    expect(v).toEqual(['fetch:locked', 'Response:locked', 'Headers:locked']);
  });
});

describe('#11 fire-path fetch gating (allowdangerous-on-fire-path)', () => {
  const noop = { log() {}, warn() {}, error() {}, info() {} };
  const serr = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

  test('a FIRED handler honors the fire\'s allowDangerous + hostFetch (was hardcoded false)', async () => {
    // Register a command handler whose closure fetches. allowDangerous is NOT set at register time —
    // the fetch happens at FIRE time, gated by the fire's allowDangerous (threaded via RunHandlerRequest
    // -> fireVmHandler). The asyncfn engine bakes fetch into the closure at body-run time; quickjs
    // reads run.allowDangerous per-fire, so the fire MUST carry the flag.
    await runUserScriptInQuickJS(makeOpts({
      script: { id: 's-firefetch', name: 'FF', type: 'trigger' },
      code: `api.commands.onInvoked(async () => { try { globalThis.__r = 'ok:' + await (await fetch('https://x')).text(); } catch (e) { globalThis.__r = 'blocked:' + e.message; } }); return null;`,
    }));
    const hid = _vmHandlerIdsForTests('s-firefetch').find((i) => i.startsWith('commandsOnInvoked:'))!;

    // Fire WITH allowDangerous + a stub hostFetch → the handler's fetch reaches the stub.
    let called = false;
    await fireHandlerInQuickJS({
      scriptId: 's-firefetch', handlerId: hid, args: [], timeoutMs: 5_000,
      dispatch: async () => undefined, console: noop, serializeError: serr,
      allowDangerous: true, hostFetch: async () => { called = true; return new Response('hi'); },
    });
    const got1 = await runUserScriptInQuickJS(makeOpts({
      script: { id: 's-firefetch', name: 'FF', type: 'trigger' }, code: `return globalThis.__r;`,
    }));
    expect(called).toBe(true);
    expect(got1).toBe('ok:hi');

    // Fire WITHOUT allowDangerous → fetch is gated off (the host stub is never invoked).
    called = false;
    await fireHandlerInQuickJS({
      scriptId: 's-firefetch', handlerId: hid, args: [], timeoutMs: 5_000,
      dispatch: async () => undefined, console: noop, serializeError: serr,
      allowDangerous: false, hostFetch: async () => { called = true; return new Response('hi'); },
    });
    const got2 = await runUserScriptInQuickJS(makeOpts({
      script: { id: 's-firefetch', name: 'FF', type: 'trigger' }, code: `return globalThis.__r;`,
    })) as string;
    expect(called).toBe(false);
    expect(got2.startsWith('blocked:')).toBe(true);

    disposeScriptVmHandlers('s-firefetch');
  });
});

describe('#11 library fetch parity (libFetch = the gated in-VM fetch)', () => {
  const NET_LIB = `exports.ping = async (u) => (await fetch(u)).text();`;
  const libDispatch = (code: string) => async (method: string, args: unknown[]): Promise<unknown> => {
    if (method === 'script.fetchLibrary') return { id: 'id-net', name: args[0], code, allowDangerous: false };
    return undefined;
  };

  test('a required library CAN fetch when the run is allowDangerous (same gated fetch as the body)', async () => {
    // Pre-fix, libFetch hardcode-threw "cannot use fetch directly … yet", so this returned that error, not
    // the body. libFetch = globalThis.fetch routes the library through the same allowDangerous-gated __lsFetch.
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:       libDispatch(NET_LIB),
      allowDangerous: true,
      hostFetch:      async () => new Response('lib-fetched'),
      code: `const net = await script.require('net'); return await net.ping('https://x');`,
    }));
    expect(v).toBe('lib-fetched');
  });

  test('a required library fetch is GATED when the run is NOT allowDangerous (parity with the body)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: libDispatch(NET_LIB), // allowDangerous omitted → gated
      code: `const net = await script.require('net'); try { await net.ping('https://x'); return 'no-throw'; } catch (e) { return 'blocked:' + e.message; }`,
    })) as string;
    expect(v.startsWith('blocked:')).toBe(true);
    expect(v).toContain('Allow Dangerous'); // the SAME gate error the body gets, not the old "not yet" stub
  });
});
