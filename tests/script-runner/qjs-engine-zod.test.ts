/**
 * #11 P3 B — in-VM Zod + the schema-conversion bridge.
 *
 * `z` is bundled into the QuickJS context (vm-zod-bundle), so user code can call
 * `z.object(...)`. Because a Zod schema is a VM object with methods that cannot
 * cross IPC, the in-VM api proxy intercepts the schema-bearing llm methods,
 * converts the Zod schema → JSON Schema IN the VM (z.toJSONSchema) before
 * dispatch, and runs .parse on the response IN the VM. Mirrors the asyncfn
 * proxy's convertZodToJsonSchemaIfNeeded.
 */

import { describe, test, expect } from 'bun:test';
import { runUserScriptInQuickJS, type QuickJSRunOptions } from '../../src/script-runner/qjs-engine.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Zod', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
  };
}

describe('#11 P3 B: in-VM Zod', () => {
  test('z is available in-VM: object / parse / safeParse work', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const s = z.object({ n: z.string(), age: z.number().int() });
        const parsed = s.parse({ n: 'x', age: 5 });
        const bad = s.safeParse({ n: 'x', age: 'nope' });
        return { parsed, ok: bad.success, typeofZ: typeof z, typeofObject: typeof z.object };
      `,
    })) as Record<string, unknown>;
    expect(v.parsed).toEqual({ n: 'x', age: 5 });
    expect(v.ok).toBe(false);
    expect(v.typeofZ).toBe('object');
    expect(v.typeofObject).toBe('function');
  });

  test('a z.parse failure in the body rejects (validation error propagates)', async () => {
    let err: unknown;
    try {
      await runUserScriptInQuickJS(makeOpts({ code: `z.object({ a: z.string() }).parse({ a: 123 }); return 1;` }));
    } catch (e) { err = e; }
    expect(err).toBeInstanceOf(Error);
  });

  test('coercion + transforms run in-VM (real zod, not a stub)', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `return z.object({ n: z.coerce.number(), up: z.string().transform(s => s.toUpperCase()) }).parse({ n: '42', up: 'hi' });`,
    })) as { n: number; up: string };
    expect(v).toEqual({ n: 42, up: 'HI' });
  });
});

describe('#11 P3 B: generateStructured schema bridge', () => {
  test('a Zod schema is converted to JSON Schema in-VM; the response is parsed in-VM', async () => {
    let captured: { method: string; args: unknown[] } | null = null;
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async (method, args) => {
        captured = { method, args };
        return { name: 'Ada', age: 36 };           // the host's structured result (plain JSON)
      },
      code: `
        const schema = z.object({ name: z.string(), age: z.number().int() });
        return await api.llm.generateStructured([{ role: 'user', content: 'hi' }], schema);
      `,
    })) as { name: string; age: number };

    expect(v).toEqual({ name: 'Ada', age: 36 });
    expect(captured!.method).toBe('llm.generateStructured');
    // arg[1] is a plain JSON Schema (converted in-VM), NOT a Zod object
    const jsonSchema = captured!.args[1] as Record<string, unknown>;
    expect(jsonSchema.type).toBe('object');
    expect((jsonSchema.properties as Record<string, unknown>).name).toEqual({ type: 'string' });
    expect(typeof (jsonSchema as { parse?: unknown }).parse).toBe('undefined'); // not a Zod object
  });

  test('the in-VM .parse validates/coerces the host response', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async () => ({ count: '7' }),               // host returns a string...
      code: `
        const schema = z.object({ count: z.coerce.number() });   // ...schema coerces to number
        const r = await api.llm.generateStructured([], schema);
        return { count: r.count, isNumber: typeof r.count === 'number' };
      `,
    })) as { count: number; isNumber: boolean };
    expect(v.count).toBe(7);
    expect(v.isNumber).toBe(true);
  });

  test('a plain JSON schema passes through unchanged (no Zod conversion)', async () => {
    let captured: unknown[] = [];
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch: async (_m, args) => { captured = args; return { ok: true }; },
      code: `
        const schema = { type: 'object', properties: { ok: { type: 'boolean' } } };
        return await api.llm.generateStructured([], schema);
      `,
    })) as { ok: boolean };
    expect(v).toEqual({ ok: true });
    expect((captured[1] as Record<string, unknown>).type).toBe('object');
  });
});
