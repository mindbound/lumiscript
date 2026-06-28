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
