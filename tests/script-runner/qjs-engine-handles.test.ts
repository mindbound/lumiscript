/**
 * #11 P4 — HandleRef bidirectional marshaling under QuickJS.
 *
 * A host method that returns a HandleRef crosses Boundary #2 as {$:'h'}; the
 * in-VM marshaler rebuilds a method-bearing handle proxy whose methods dispatch
 * via __hostHandleDispatch → activeRun.dispatchOnHandle (the SAME targetHandle IPC
 * the asyncfn path uses). Boundary #1 (child↔backend IPC) is unchanged.
 *
 * Increment 1: the {$:'h'} machinery + the generic in-VM handle proxy.
 * Increment 2: db.collection returns a SPECIALIZED validating wrapper (in-VM Zod
 *   validation + function-filter rejection + exact asyncfn arg shapes), NOT a
 *   passable handle — exactly like the asyncfn Collection. addStyle (StyleHandle)
 *   rides the generic path (async .remove(), a documented divergence from the
 *   asyncfn sync facade). The string-id DOM/component factory routes are P4b.
 */
import { describe, test, expect } from 'bun:test';
import { marshalEncode, marshalDecode } from '../../src/script-runner/vm-marshal.js';
import {
  runUserScriptInQuickJS,
  _vmObjectCountForTests,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';
import type { HandleRef } from '../../src/types/script-runner-ipc.js';

function makeOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch       ?? (async () => undefined),
    data:           over.data           ?? {},
    script:         over.script         ?? { id: 's', name: 'Handles', type: 'trigger' },
    console:        over.console        ?? { log() {}, warn() {}, error() {}, info() {} },
    timeoutMs:      over.timeoutMs      ?? 5_000,
    serializeError: over.serializeError ?? ((e: unknown) => ({
      name:    e instanceof Error ? e.name : 'Error',
      message: e instanceof Error ? e.message : String(e),
    })),
    allowDangerous:   over.allowDangerous,
    hostFetch:        over.hostFetch,
    dispatchOnHandle: over.dispatchOnHandle,
  };
}

/** Host stub: db.collection returns a Collection HandleRef; dispatchOnHandle
 *  records + answers method calls on the resolved handle. */
function collectionStub() {
  const topCalls: Array<{ method: string; args: unknown[] }> = [];
  const handleCalls: Array<{ target: HandleRef; method: string; args: unknown[] }> = [];
  const dispatch = async (method: string, args: unknown[]): Promise<unknown> => {
    topCalls.push({ method, args });
    if (method === 'db.collection') return { __handleRef: true, id: 'col-1', kind: 'Collection' } satisfies HandleRef;
    return undefined;
  };
  const dispatchOnHandle = async (target: HandleRef, method: string, args: unknown[]): Promise<unknown> => {
    handleCalls.push({ target, method, args });
    if (method === 'find')    return [{ id: 'r1', n: 1 }, { id: 'r2', n: 2 }];
    if (method === 'findOne') return { id: 'r1', n: 1 };
    if (method === 'insert')  return { id: 'r1' };
    if (method === 'count')   return 2;
    return undefined;
  };
  return { topCalls, handleCalls, dispatch, dispatchOnHandle };
}

/** Host stub for ui.dom.addStyle → a StyleHandle whose remove() dispatches. */
function styleStub() {
  const handleCalls: Array<{ target: HandleRef; method: string; args: unknown[] }> = [];
  const dispatch = async (method: string): Promise<unknown> => {
    if (method === 'ui.dom.addStyle') return { __handleRef: true, id: 'style-1', kind: 'StyleHandle' } satisfies HandleRef;
    return undefined;
  };
  const dispatchOnHandle = async (target: HandleRef, method: string, args: unknown[]): Promise<unknown> => {
    handleCalls.push({ target, method, args });
    return undefined;
  };
  return { handleCalls, dispatch, dispatchOnHandle };
}

// ─── Host twin ──────────────────────────────────────────────────────────────

describe('#11 P4 handles: host twin', () => {
  test('round-trips a HandleRef as {$:h} through a JSON hop', () => {
    const ref: HandleRef = { __handleRef: true, id: 'col-1', kind: 'Collection' };
    const encoded = marshalEncode(ref) as { $: string; id: string; kind: string };
    expect(encoded.$).toBe('h');
    expect(encoded.id).toBe('col-1');
    expect(encoded.kind).toBe('Collection');
    expect(marshalDecode(JSON.parse(JSON.stringify(encoded)))).toEqual(ref);
  });

  test('a non-handle object with __handleRef but non-string id/kind is NOT mistagged (twin lockstep)', async () => {
    // Lockstep with the host isHandleRef predicate (needs string id + kind). A decoy
    // must round-trip as a plain object in BOTH directions, not become a {$:h}.
    const decoy = { __handleRef: true, foo: 1, id: 42, kind: 7 };
    const v = await runUserScriptInQuickJS(makeOpts({
      data: { decoy },
      code: `return data.decoy;`,
    })) as typeof decoy;
    expect(v).toEqual(decoy);
  });
});

// ─── db.collection (the validating wrapper) ─────────────────────────────────

describe('#11 P4 handles: db.collection method dispatch', () => {
  test('methods route via dispatchOnHandle with the correct target + arg shapes', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `
        const c = await api.db.collection('notes');
        const rows = await c.find({ n: { $gt: 0 } });
        const one = await c.findOne({ id: 'r1' });
        const n = await c.count();
        return { rows, one, n };
      `,
    })) as { rows: unknown[]; one: unknown; n: number };
    expect(v.rows).toEqual([{ id: 'r1', n: 1 }, { id: 'r2', n: 2 }]);
    expect(v.one).toEqual({ id: 'r1', n: 1 });
    expect(v.n).toBe(2);
    expect(stub.topCalls.map((c) => c.method)).toEqual(['db.collection']);
    expect(stub.handleCalls.map((c) => c.method)).toEqual(['find', 'findOne', 'count']);
    expect(stub.handleCalls[0]?.target).toEqual({ __handleRef: true, id: 'col-1', kind: 'Collection' });
    expect(stub.handleCalls[0]?.args).toEqual([{ n: { $gt: 0 } }]);
  });

  test('arg shapes match the asyncfn proxy: find()/count() send [], find(f)/findOne(f) send [f]', async () => {
    const stub = collectionStub();
    await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const c = await api.db.collection('x');
             await c.find(); await c.find({ a: 1 }); await c.count(); await c.findOne({ id: 'r1' });
             return null;`,
    }));
    expect(stub.handleCalls[0]).toMatchObject({ method: 'find',    args: [] });
    expect(stub.handleCalls[1]).toMatchObject({ method: 'find',    args: [{ a: 1 }] });
    expect(stub.handleCalls[2]).toMatchObject({ method: 'count',   args: [] });
    expect(stub.handleCalls[3]).toMatchObject({ method: 'findOne', args: [{ id: 'r1' }] });
  });

  test('schemaless db.collection works (no validation, no schema in IPC opts)', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const c = await api.db.collection('x'); return await c.count();`,
    })) as number;
    expect(v).toBe(2);
  });

  test('a collection wrapper is NOT passable as a handle (parity: returning it fails loud)', async () => {
    const stub = collectionStub();
    let threw = false;
    try {
      await runUserScriptInQuickJS(makeOpts({
        dispatch:         stub.dispatch,
        dispatchOnHandle: stub.dispatchOnHandle,
        code: `return await api.db.collection('x');`,
      }));
    } catch (e) { threw = true; expect((e as Error).message).toContain('function'); }
    expect(threw).toBe(true);
  });
});

// ─── db.collection schema validation (the increment-2 headline) ─────────────

describe('#11 P4 inc2 handles: db.collection Zod schema validation (in-VM, child-side)', () => {
  const withSchema = (body: string) => `
    const Schema = z.object({ n: z.number(), tag: z.string().optional() });
    const c = await api.db.collection('notes', { schema: Schema });
    ${body}
  `;

  test('valid insert passes validation and dispatches', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: withSchema(`return await c.insert({ n: 5 });`),
    })) as unknown;
    expect(v).toEqual({ id: 'r1' });
    expect(stub.handleCalls.map((x) => x.method)).toEqual(['insert']);
    expect(stub.handleCalls[0]?.args).toEqual([{ n: 5 }]);
  });

  test('invalid insert throws a schema-validation error BEFORE dispatch', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: withSchema(`try { await c.insert({ n: 'not-a-number' }); return 'no-throw'; } catch (e) { return 'err:' + e.message; }`),
    })) as string;
    expect(v).toContain('schema validation failed on insert');
    expect(stub.handleCalls).toEqual([]); // never reached IPC
  });

  test('insertMany validates each element and reports the index', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: withSchema(`try { await c.insertMany([{ n: 1 }, { n: 'bad' }]); return 'no-throw'; } catch (e) { return e.message; }`),
    })) as string;
    expect(v).toContain('insertMany[1]');
    expect(stub.handleCalls).toEqual([]);
  });

  test('update patch is partial-validated for ZodObject schemas', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: withSchema(`try { await c.update({ id: 'r1' }, { n: 'bad' }); return 'no-throw'; } catch (e) { return e.message; }`),
    })) as string;
    expect(v).toContain('update (patch)');
    expect(stub.handleCalls).toEqual([]);
  });

  test('the Zod schema is stripped before IPC (db.collection opts carry no schema)', async () => {
    const stub = collectionStub();
    await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: withSchema(`return null;`),
    }));
    expect(stub.topCalls.map((c) => c.method)).toEqual(['db.collection']);
    const opts = stub.topCalls[0]?.args[1] as Record<string, unknown> | undefined;
    expect(opts && 'schema' in opts).toBeFalsy();
  });

  test('function-predicate filters fail loud with an actionable message', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const c = await api.db.collection('x'); try { await c.find(() => true); return 'no-throw'; } catch (e) { return e.message; }`,
    })) as string;
    expect(v).toContain('function predicates');
    expect(stub.handleCalls).toEqual([]);
  });
});

// ─── addStyle (generic StyleHandle path) + cross-run ────────────────────────

describe('#11 P4 inc2 handles: addStyle + cross-run', () => {
  test('addStyle returns a StyleHandle whose remove() dispatches (async divergence from the sync facade)', async () => {
    const stub = styleStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const h = await api.ui.dom.addStyle('.x { color: red }'); await h.remove(); return h.kind;`,
    })) as string;
    expect(v).toBe('StyleHandle');
    expect(stub.handleCalls.map((c) => c.method)).toEqual(['remove']);
    expect(stub.handleCalls[0]?.target).toEqual({ __handleRef: true, id: 'style-1', kind: 'StyleHandle' });
  });

  test('a collection stashed on globalThis still dispatches in a later run', async () => {
    const stub = collectionStub();
    await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `globalThis.__xc = await api.db.collection('x'); return null;`,
    }));
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `return await globalThis.__xc.count();`,
    })) as number;
    expect(v).toBe(2);
    expect(stub.handleCalls.some((c) => c.method === 'count')).toBe(true);
  });
});

// ─── errors + gating + freeze ───────────────────────────────────────────────

describe('#11 P4 handles: errors + gating + freeze', () => {
  test('a handle-method rejection surfaces in-VM with name + message', async () => {
    const dispatch = async (m: string): Promise<unknown> =>
      m === 'db.collection' ? ({ __handleRef: true, id: 'col-1', kind: 'Collection' } satisfies HandleRef) : undefined;
    const dispatchOnHandle = async (): Promise<unknown> => {
      const e = new Error('handle released'); e.name = 'HandleReleasedError'; throw e;
    };
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      dispatchOnHandle,
      code: `const c = await api.db.collection('x'); try { await c.find(); return 'no-throw'; } catch (e) { return e.name + ':' + e.message; }`,
    })) as string;
    expect(v).toBe('HandleReleasedError:handle released');
  });

  test('handle methods report unavailable when no handle dispatcher was granted', async () => {
    const dispatch = async (m: string): Promise<unknown> =>
      m === 'db.collection' ? ({ __handleRef: true, id: 'col-1', kind: 'Collection' } satisfies HandleRef) : undefined;
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch, // dispatchOnHandle omitted
      code: `const c = await api.db.collection('x'); try { await c.find(); return 'no-throw'; } catch (e) { return 'err:' + e.message; }`,
    })) as string;
    expect(v).toContain('unavailable');
  });

  test('__hostHandleDispatch / __lsVmHandleProxy are frozen', async () => {
    const v = await runUserScriptInQuickJS(makeOpts({
      code: `
        const out = [];
        try { globalThis.__hostHandleDispatch = () => 'X'; out.push('hhd:writable'); } catch (e) { out.push('hhd:locked'); }
        try { globalThis.__lsVmHandleProxy = () => 'X'; out.push('proxy:writable'); } catch (e) { out.push('proxy:locked'); }
        return out;
      `,
    })) as string[];
    expect(v).toEqual(['hhd:locked', 'proxy:locked']);
  });
});

// ─── leak oracle ────────────────────────────────────────────────────────────

describe('#11 P4 handles: leak oracle', () => {
  test('VM object count stays flat across 150 schema-bearing collection runs', async () => {
    const stub = collectionStub();
    // Exercise the increment-2 headline: a Zod schema captured in the wrapper's
    // closure (the in-VM object graph the oracle measures) + a validated insert.
    const opts = () => makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const Schema = z.object({ n: z.number() });
             const c = await api.db.collection('x', { schema: Schema });
             await c.insert({ n: 1 }); await c.count(); return null;`,
    });
    for (let i = 0; i < 10; i++) await runUserScriptInQuickJS(opts());
    const before = _vmObjectCountForTests();
    expect(before).not.toBeNull();
    for (let i = 0; i < 150; i++) await runUserScriptInQuickJS(opts());
    const after = _vmObjectCountForTests();
    expect((after as number) - (before as number)).toBeLessThan(50);
  }, 30_000);
});
