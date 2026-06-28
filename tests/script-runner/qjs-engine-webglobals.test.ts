/**
 * #11 P3 A1 — pure-JS Web-global polyfills in the QuickJS VM (vm-webglobals.ts).
 * QuickJS provides only core ES; these shims restore the no-host-bridge subset
 * the Bun child gives asyncfn scripts for free. Driven directly through
 * runUserScriptInQuickJS (the polyfills run in-VM; results marshal back).
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'WebGlobals', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('#11 P3 A1: Web-global polyfills', () => {
  test('all A1 globals are defined in the VM', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return ['btoa','atob','TextEncoder','TextDecoder','queueMicrotask','performance','structuredClone'].map(n => typeof globalThis[n]);`,
    })) as string[];
    expect(v).toEqual(['function', 'function', 'function', 'function', 'function', 'object', 'function']);
  });

  test('btoa / atob round-trip + known vectors', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return { enc: btoa('hello'), dec: atob('aGVsbG8='), rt: atob(btoa('The quick brown fox')) , pad: btoa('a') };`,
    })) as { enc: string; dec: string; rt: string; pad: string };
    expect(v.enc).toBe('aGVsbG8=');
    expect(v.dec).toBe('hello');
    expect(v.rt).toBe('The quick brown fox');
    expect(v.pad).toBe('YQ==');
  });

  test('TextEncoder / TextDecoder round-trip ASCII, multibyte, and emoji', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const te = new TextEncoder(), td = new TextDecoder();
        const s = 'ABC héllo — 日本語 🚀';
        const bytes = te.encode(s);
        return { isU8: bytes instanceof Uint8Array, ascii: Array.from(te.encode('AB')), roundTrip: td.decode(bytes), back: td.decode(te.encode(s)) === s };
      `,
    })) as { isU8: boolean; ascii: number[]; roundTrip: string; back: boolean };
    expect(v.isU8).toBe(true);
    expect(v.ascii).toEqual([65, 66]);
    expect(v.roundTrip).toBe('ABC héllo — 日本語 🚀');
    expect(v.back).toBe(true);
  });

  test('queueMicrotask schedules before a subsequent await continuation', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const order = [];
        queueMicrotask(() => order.push('micro'));
        order.push('sync');
        await Promise.resolve();
        order.push('after-await');
        return order;
      `,
    })) as string[];
    expect(v).toEqual(['sync', 'micro', 'after-await']);
  });

  test('performance.now returns a number', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return typeof performance.now() === 'number' && performance.now() >= 0;`,
    }));
    expect(v).toBe(true);
  });

  test('structuredClone deep-copies and preserves Date / Map / typed arrays', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const orig = { a: [1, 2], d: new Date(5), m: new Map([['k', 1]]), bytes: new Uint8Array([7, 8]) };
        const clone = structuredClone(orig);
        clone.a.push(3);
        clone.m.set('k', 99);
        return {
          isDate: clone.d instanceof Date, dtime: clone.d.getTime(),
          isMap: clone.m instanceof Map, cloneMval: clone.m.get('k'), origMval: orig.m.get('k'),
          isU8: clone.bytes instanceof Uint8Array,
          origLen: orig.a.length, cloneLen: clone.a.length,
        };
      `,
    })) as Record<string, unknown>;
    expect(v.isDate).toBe(true);
    expect(v.dtime).toBe(5);
    expect(v.isMap).toBe(true);
    expect(v.cloneMval).toBe(99);   // clone mutated
    expect(v.origMval).toBe(1);     // original untouched (deep copy)
    expect(v.isU8).toBe(true);
    expect(v.origLen).toBe(2);
    expect(v.cloneLen).toBe(3);
  });

  test('structuredClone throws on a function (DataCloneError-equivalent)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `try { structuredClone({ fn: () => 1 }); return 'no-throw'; } catch (e) { return 'threw'; }`,
    }));
    expect(v).toBe('threw');
  });
});

// ─── P3-audit fix: validating UTF-8 codec (H2 / M1 / M4) ───────────────────────

describe('#11 P3 audit: TextDecoder/TextEncoder reject ill-formed UTF-8', () => {
  test('TextDecoder maps overlong / surrogate / truncated sequences to U+FFFD (no smuggling)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const td = new TextDecoder();
        return {
          overlongA:     td.decode(new Uint8Array([0xC1, 0x81])),         // overlong 'A' → NOT 'A'
          overlongSlash: td.decode(new Uint8Array([0xC0, 0xAF])),         // overlong '/' → NOT '/'
          surrogate:     td.decode(new Uint8Array([0xED, 0xA0, 0x80])),   // D800 encoded → FFFD
          truncated:     td.decode(new Uint8Array([0xE2, 0x82])),         // truncated 3-byte → FFFD(s)
          stray:         td.decode(new Uint8Array([0x80])),               // stray continuation → FFFD
          valid:         td.decode(new Uint8Array([0xF0, 0x9F, 0x9A, 0x80])), // 🚀 still decodes
        };
      `,
    })) as { overlongA: string; overlongSlash: string; surrogate: string; truncated: string; stray: string; valid: string };
    // Each ill-formed sequence decodes to ONLY U+FFFD replacement chars — never
    // the smuggled short character (the security property).
    const onlyFFFD = (s: string) => s.length > 0 && /^[�]+$/.test(s);
    expect(v.overlongA).not.toContain('A');
    expect(onlyFFFD(v.overlongA)).toBe(true);
    expect(v.overlongSlash).not.toContain('/');
    expect(onlyFFFD(v.overlongSlash)).toBe(true);
    expect(onlyFFFD(v.surrogate)).toBe(true);
    expect(onlyFFFD(v.truncated)).toBe(true);
    expect(onlyFFFD(v.stray)).toBe(true);
    expect(v.valid).toBe('🚀');
  });

  test('TextEncoder maps a lone surrogate to U+FFFD (EF BF BD), not WTF-8', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const te = new TextEncoder();
        return {
          loneHigh: Array.from(te.encode(String.fromCharCode(0xD800))),
          loneLow:  Array.from(te.encode(String.fromCharCode(0xDC00))),
          pair:     Array.from(te.encode('🚀')),
        };
      `,
    })) as { loneHigh: number[]; loneLow: number[]; pair: number[] };
    expect(v.loneHigh).toEqual([0xEF, 0xBF, 0xBD]);
    expect(v.loneLow).toEqual([0xEF, 0xBF, 0xBD]);
    expect(v.pair).toEqual([0xF0, 0x9F, 0x9A, 0x80]);
  });
});
