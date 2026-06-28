/**
 * #11 P2 — structured marshaling across Boundary #2 (vm-marshal.ts).
 *
 * Two layers:
 *   1. Host encode/decode round-trip (the TS twin in isolation).
 *   2. End-to-end through the real QuickJS bridge: api-call ARGS (VM encode →
 *      host decode), RETURN values (VM encode → host decode), and DATA (host
 *      encode → VM decode). These exercise BOTH twins against each other, so any
 *      format drift between the host TS and the VM_MARSHAL_BOOTSTRAP twin fails.
 *
 * Parity target = Boundary #1 (structured clone): Date / Map / Set / typed-array
 * / BigInt / RegExp / undefined-vs-null all survive intact, where P1's naive JSON
 * silently mangled them.
 */

import { describe, test, expect } from 'bun:test';
import { marshalEncode, marshalDecode } from '../../src/script-runner/vm-marshal.js';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Marshal', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

// ─── Host twin round-trip ──────────────────────────────────────────────────────

describe('#11 P2 marshaling: host encode/decode round-trip', () => {
  const cases: Array<[string, unknown]> = [
    ['string',           'hi'],
    ['number',           42],
    ['bool',             true],
    ['null',             null],
    ['undefined',        undefined],
    ['bigint',           123456789012345678901234567890n],
    ['date',             new Date(1_717_000_000_000)],
    ['regexp',           /ab+c/gi],
    ['map',              new Map<unknown, unknown>([['k', 1], [2, 'v']])],
    ['set',              new Set([1, 'a', true])],
    ['uint8',            new Uint8Array([1, 2, 3, 255])],
    ['int16',            new Int16Array([-1, 1000, 32_000])],
    ['nested',           { a: new Date(0), b: new Map([['x', new Set([1])]]), c: [undefined, 1n] }],
    ['dollar-collision', { $: 'd', v: 'a literal user object, not a Date' }],
  ];
  for (const [name, value] of cases) {
    test(`round-trips ${name} (through a JSON hop, as the wire does)`, () => {
      const decoded = marshalDecode(JSON.parse(JSON.stringify(marshalEncode(value))));
      expect(decoded).toEqual(value);
    });
  }

  test('a function / symbol / cycle fails loud on encode', () => {
    expect(() => marshalEncode(() => 1)).toThrow(/function/);
    expect(() => marshalEncode(Symbol('x'))).toThrow(/symbol/);
    const cyclic: Record<string, unknown> = {};
    cyclic.self = cyclic;
    expect(() => marshalEncode(cyclic)).toThrow(/circular/);
  });
});

// ─── End-to-end through the QuickJS bridge ─────────────────────────────────────

describe('#11 P2 marshaling: through the QuickJS bridge', () => {
  test('api-call ARGUMENTS preserve Date / Map / Set / Uint8Array / BigInt / undefined', async () => {
    let captured: unknown[] = [];
    await runUserScriptInQuickJS(makeOpts({
      dispatch: async (_m, a) => { captured = a; return 'ok'; },
      code: `return await api.foo(new Date(123), new Map([['k', 1]]), new Set([1, 2]), new Uint8Array([9, 8, 7]), 10n, undefined);`,
    }));
    expect(captured.length).toBe(6);
    expect(captured[0]).toBeInstanceOf(Date);
    expect((captured[0] as Date).getTime()).toBe(123);
    expect(captured[1]).toBeInstanceOf(Map);
    expect((captured[1] as Map<string, number>).get('k')).toBe(1);
    expect(captured[2]).toBeInstanceOf(Set);
    expect([...(captured[2] as Set<number>)]).toEqual([1, 2]);
    expect(captured[3]).toBeInstanceOf(Uint8Array);
    expect(Array.from(captured[3] as Uint8Array)).toEqual([9, 8, 7]);
    expect(captured[4]).toBe(10n);
    expect(captured[5]).toBeUndefined();
  });

  test('RETURN values preserve Date / Map / typed-array / BigInt / undefined-keyed fields', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return { d: new Date(456), m: new Map([['x', 1]]), bytes: new Uint8Array([1, 2]), big: 7n, u: undefined };`,
    })) as { d: Date; m: Map<string, number>; bytes: Uint8Array; big: bigint; u: undefined };
    expect(v.d).toBeInstanceOf(Date);
    expect(v.d.getTime()).toBe(456);
    expect(v.m).toBeInstanceOf(Map);
    expect(v.m.get('x')).toBe(1);
    expect(v.bytes).toBeInstanceOf(Uint8Array);
    expect(Array.from(v.bytes)).toEqual([1, 2]);
    expect(v.big).toBe(7n);
    expect('u' in v).toBe(true);
    expect(v.u).toBeUndefined();
  });

  test('DATA binding preserves Date + undefined (no JSON null-collapse)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      data: { d: new Date(789), u: undefined, n: null },
      code: `return [data.d instanceof Date, data.d.getTime(), ('u' in data), data.u, data.n];`,
    })) as [boolean, number, boolean, unknown, unknown];
    expect(v[0]).toBe(true);
    expect(v[1]).toBe(789);
    expect(v[2]).toBe(true);      // undefined-valued key survives (JSON would drop it)
    expect(v[3]).toBeUndefined();
    expect(v[4]).toBeNull();      // null stays null, distinct from undefined
  });

  test('a Uint8Array return survives the round-trip (the http-arraybuffer live bite)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      // simulate `(await api.utils.http.get(url,{responseType:'arraybuffer'})).body`
      dispatch: async () => new Uint8Array([0, 127, 128, 255]),
      code: `const body = await api.utils.http.get('x'); return body;`,
    }));
    expect(v).toBeInstanceOf(Uint8Array);
    expect(Array.from(v as Uint8Array)).toEqual([0, 127, 128, 255]);
  });
});

// ─── P2-audit fixes: H2 (non-finite numbers) + M1 (sparse arrays) ──────────────

describe('#11 P2 audit H2: NaN / ±Infinity / -0 survive (no JSON null-collapse)', () => {
  const rt = (v: unknown) => marshalDecode(JSON.parse(JSON.stringify(marshalEncode(v))));

  test('host twin preserves the non-finite family + -0', () => {
    expect(Number.isNaN(rt(NaN))).toBe(true);
    expect(rt(Infinity)).toBe(Infinity);
    expect(rt(-Infinity)).toBe(-Infinity);
    expect(Object.is(rt(-0), -0)).toBe(true);
    expect(Object.is(rt(0), 0)).toBe(true); // +0 stays +0 (not tagged)

    const nested = rt({ a: NaN, b: [Infinity, -Infinity], c: -0 }) as { a: number; b: number[]; c: number };
    expect(Number.isNaN(nested.a)).toBe(true);
    expect(nested.b).toEqual([Infinity, -Infinity]);
    expect(Object.is(nested.c, -0)).toBe(true);
  });

  test('non-finite return values survive the bridge', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return { x: NaN, y: Infinity, z: -Infinity, w: -0, ok: 1 / 0 };`,
    })) as { x: number; y: number; z: number; w: number; ok: number };
    expect(Number.isNaN(v.x)).toBe(true);
    expect(v.y).toBe(Infinity);
    expect(v.z).toBe(-Infinity);
    expect(Object.is(v.w, -0)).toBe(true);
    expect(v.ok).toBe(Infinity);
  });
});

describe('#11 P2 audit M1: sparse-array holes encode consistently (twins agree)', () => {
  test('a hole round-trips as undefined in the host twin AND every bridge direction', async () => {
    // host twin
    const hostRt = marshalDecode(JSON.parse(JSON.stringify(marshalEncode([1, , 3])))) as unknown[];
    expect(hostRt.length).toBe(3);
    expect(hostRt[1]).toBeUndefined();

    // return path (VM encode → host decode)
    const ret = await runUserScriptInQuickJS(makeOpts({ code: `const a = [1, , 3]; return a;` })) as unknown[];
    expect(ret.length).toBe(3);
    expect(ret[1]).toBeUndefined();

    // arg path (VM encode → host decode)
    let captured: unknown[] = [];
    await runUserScriptInQuickJS(makeOpts({
      dispatch: async (_m, a) => { captured = a; return 1; },
      code: `return await api.foo([1, , 3]);`,
    }));
    const argArr = captured[0] as unknown[];
    expect(argArr.length).toBe(3);
    expect(argArr[1]).toBeUndefined();

    // data path (host encode → VM decode) — the hole reads as undefined, NOT null
    const dataRt = await runUserScriptInQuickJS(makeOpts({
      data: { arr: [1, , 3] },
      code: `return [data.arr.length, data.arr[1] === undefined, data.arr[1] === null];`,
    })) as [number, boolean, boolean];
    expect(dataRt[0]).toBe(3);
    expect(dataRt[1]).toBe(true);   // undefined, consistent with the other directions
    expect(dataRt[2]).toBe(false);  // NOT null (the pre-fix host-.map behavior)
  });
});
