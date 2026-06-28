/**
 * #11 P3 A2 — URL / URLSearchParams in the QuickJS VM (vm-webglobals.ts).
 * Pure-JS WHATWG-subset. Fixes the P3-audit L1 crash (zod's z.url() does
 * `new URL(s)`, which threw ReferenceError when URL was absent).
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'URL', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('#11 P3 A2: URL', () => {
  test('parses an absolute URL into components', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const u = new URL('https://user:pass@host.com:8080/a/b?q=1&r=2#frag');
        return { protocol: u.protocol, username: u.username, password: u.password, hostname: u.hostname,
                 port: u.port, host: u.host, pathname: u.pathname, search: u.search, hash: u.hash,
                 origin: u.origin, href: u.href };
      `,
    })) as Record<string, string>;
    expect(v).toEqual({
      protocol: 'https:', username: 'user', password: 'pass', hostname: 'host.com',
      port: '8080', host: 'host.com:8080', pathname: '/a/b', search: '?q=1&r=2', hash: '#frag',
      origin: 'https://host.com:8080', href: 'https://user:pass@host.com:8080/a/b?q=1&r=2#frag',
    });
  });

  test('drops the default port and defaults the path', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `const u = new URL('https://x.com:443'); return { port: u.port, host: u.host, pathname: u.pathname, href: u.href };`,
    })) as Record<string, string>;
    expect(v.port).toBe('');
    expect(v.host).toBe('x.com');
    expect(v.pathname).toBe('/');
    expect(v.href).toBe('https://x.com/');
  });

  test('throws on an invalid URL', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const out = [];
        for (const bad of ['not a url', 'http://', '/no-scheme', '']) {
          try { new URL(bad); out.push('ok'); } catch (e) { out.push('threw'); }
        }
        return out;
      `,
    })) as string[];
    expect(v).toEqual(['threw', 'threw', 'threw', 'threw']);
  });

  test('resolves relative URLs against a base', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        return {
          abs:  new URL('/x', 'https://host.com/a/b').href,
          rel:  new URL('y', 'https://host.com/a/b').href,
          q:    new URL('?k=1', 'https://host.com/a').href,
          dots: new URL('../z', 'https://host.com/a/b/c').href,
        };
      `,
    })) as Record<string, string>;
    expect(v.abs).toBe('https://host.com/x');
    expect(v.rel).toBe('https://host.com/a/y');
    expect(v.q).toBe('https://host.com/a?k=1');
    expect(v.dots).toBe('https://host.com/a/z');
  });

  test('z.url() validates (the P3-audit L1 fix — no more ReferenceError)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const schema = z.object({ site: z.url() });
        return {
          okValid:   schema.safeParse({ site: 'https://example.com/path' }).success,
          okInvalid: schema.safeParse({ site: 'definitely not a url' }).success,
        };
      `,
    })) as { okValid: boolean; okInvalid: boolean };
    expect(v.okValid).toBe(true);
    expect(v.okInvalid).toBe(false);
  });
});

describe('#11 P3 A2: URLSearchParams', () => {
  test('parse / get / getAll / has and a live url.search', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const u = new URL('https://x.com/?a=1&a=2&b=3');
        const sp = u.searchParams;
        const read = { get: sp.get('a'), all: sp.getAll('a'), hasB: sp.has('b'), hasZ: sp.has('z'), size: sp.size };
        sp.set('a', 'X');
        sp.delete('b');
        sp.append('c', '4');
        return { read, after: u.search, str: sp.toString() };
      `,
    })) as { read: Record<string, unknown>; after: string; str: string };
    expect(v.read.get).toBe('1');
    expect(v.read.all).toEqual(['1', '2']);
    expect(v.read.hasB).toBe(true);
    expect(v.read.hasZ).toBe(false);
    expect(v.read.size).toBe(3);
    expect(v.after).toBe('?a=X&c=4');   // live reflection of the mutations
    expect(v.str).toBe('a=X&c=4');
  });

  test('encodes / decodes values', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const sp = new URLSearchParams('q=hello+world&e=a%26b');
        sp.append('x', 'a b&c');
        return { q: sp.get('q'), e: sp.get('e'), str: sp.toString() };
      `,
    })) as { q: string; e: string; str: string };
    expect(v.q).toBe('hello world');
    expect(v.e).toBe('a&b');
    expect(v.str).toBe('q=hello+world&e=a%26b&x=a+b%26c');
  });
});
