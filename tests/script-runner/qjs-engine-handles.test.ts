/**
 * #11 P4 — HandleRef bidirectional marshaling under QuickJS.
 *
 * A host method that returns a HandleRef (db.collection) crosses Boundary #2 as
 * {$:'h'}; the in-VM marshaler rebuilds a method-bearing handle proxy whose
 * methods dispatch via __hostHandleDispatch → activeRun.dispatchOnHandle (the
 * SAME targetHandle IPC the asyncfn path uses). A held handle passed back as an
 * arg (or returned from the body) re-encodes to {$:'h'} (handle-IN). Boundary #1
 * (the child↔backend IPC) is unchanged.
 *
 * Scope (P4 Option A): the true-HandleRef returner db.collection. The string-id
 * DOM/component factory routes (inject/modal/widget/mount) are a tracked follow-up.
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

/** A host stub mimicking the dispatcher: db.collection returns a HandleRef;
 *  dispatchOnHandle records + answers method calls on the resolved handle. */
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
});

// ─── End-to-end through the real VM bridge ──────────────────────────────────

describe('#11 P4 handles: handle-OUT', () => {
  test('db.collection returns a working handle; methods route via dispatchOnHandle', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `
        const c = await api.db.collection('notes');
        const rows = await c.find({ n: { $gt: 0 } });
        const one = await c.findOne({ id: 'r1' });
        const n = await c.count();
        return { rows, one, n, kind: c.kind, id: c.id, isHandle: c.__handleRef };
      `,
    })) as { rows: unknown[]; one: unknown; n: number; kind: string; id: string; isHandle: boolean };
    expect(v.rows).toEqual([{ id: 'r1', n: 1 }, { id: 'r2', n: 2 }]);
    expect(v.one).toEqual({ id: 'r1', n: 1 });
    expect(v.n).toBe(2);
    expect(v.kind).toBe('Collection');
    expect(v.id).toBe('col-1');
    expect(v.isHandle).toBe(true);
    // db.collection through the top-level dispatch; methods through dispatchOnHandle
    expect(stub.topCalls.map((c) => c.method)).toEqual(['db.collection']);
    expect(stub.handleCalls.map((c) => c.method)).toEqual(['find', 'findOne', 'count']);
    // correct targetHandle + marshaled args reached the host
    expect(stub.handleCalls[0]?.target).toEqual({ __handleRef: true, id: 'col-1', kind: 'Collection' });
    expect(stub.handleCalls[0]?.args).toEqual([{ n: { $gt: 0 } }]);
  });

  test('two decodes of the same handle id yield the same in-VM object (identity)', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `
        const a = await api.db.collection('x');
        const b = await api.db.collection('x'); // host returns the same id
        return a === b;
      `,
    })) as boolean;
    expect(v).toBe(true);
  });

  test('returning a handle from the body marshals to a HandleRef (encode precedes the function-throw)', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `return await api.db.collection('x');`,
    })) as HandleRef;
    expect(v).toEqual({ __handleRef: true, id: 'col-1', kind: 'Collection' });
  });
});

describe('#11 P4 handles: marshaler lockstep (decoy parity)', () => {
  test('a non-handle object with __handleRef (but non-string id/kind) is NOT mistagged', async () => {
    // Lockstep with the host isHandleRef predicate (needs string id + kind). A decoy
    // must round-trip as a plain object in BOTH directions, not become a {$:h}.
    const decoy = { __handleRef: true, foo: 1, id: 42, kind: 7 };
    const v = await runUserScriptInQuickJS(makeOpts({
      data: { decoy },
      code: `return data.decoy;`,
    })) as typeof decoy;
    expect(v).toEqual(decoy); // foo preserved; id/kind intact (not dropped/retagged)
  });
});

describe('#11 P4 handles: db.collection Zod schema (clear message, P4 follow-up)', () => {
  test('a Zod schema arg fails loud with an actionable message (not the generic marshaler error)', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `try { await api.db.collection('x', { schema: z.object({ n: z.number() }) }); return 'no-throw'; }
             catch (e) { return 'err:' + e.message; }`,
    })) as string;
    expect(v).toContain('Zod schema is not yet supported');
    // failed before IPC — db.collection never dispatched
    expect(stub.topCalls).toEqual([]);
  });

  test('schemaless db.collection still works (regression guard for the special-case)', async () => {
    const stub = collectionStub();
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const c = await api.db.collection('x'); return await c.count();`,
    })) as number;
    expect(v).toBe(2);
    expect(stub.topCalls.map((c) => c.method)).toEqual(['db.collection']);
  });
});

describe('#11 P4 handles: handle-IN', () => {
  test('a held handle passed as an arg arrives host-side as a reconstructed HandleRef', async () => {
    let seenArg: unknown;
    const dispatch = async (method: string, args: unknown[]): Promise<unknown> => {
      if (method === 'db.collection') return { __handleRef: true, id: 'col-1', kind: 'Collection' } satisfies HandleRef;
      if (method === 'someApi.takesHandle') { seenArg = args[0]; return 'ok'; }
      return undefined;
    };
    const v = await runUserScriptInQuickJS(makeOpts({
      dispatch,
      dispatchOnHandle: async () => undefined,
      code: `
        const c = await api.db.collection('x');
        return await api.someApi.takesHandle(c);
      `,
    })) as string;
    expect(v).toBe('ok');
    expect(seenArg).toEqual({ __handleRef: true, id: 'col-1', kind: 'Collection' });
  });
});

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

describe('#11 P4 handles: leak oracle', () => {
  test('VM object count stays flat across 150 handle-creating + using runs', async () => {
    const stub = collectionStub();
    const opts = () => makeOpts({
      dispatch:         stub.dispatch,
      dispatchOnHandle: stub.dispatchOnHandle,
      code: `const c = await api.db.collection('x'); await c.find(); await c.count(); return c.id;`,
    });
    for (let i = 0; i < 10; i++) await runUserScriptInQuickJS(opts());
    const before = _vmObjectCountForTests();
    expect(before).not.toBeNull();
    for (let i = 0; i < 150; i++) await runUserScriptInQuickJS(opts());
    const after = _vmObjectCountForTests();
    // Per-run __lsVmHandles reset + acyclic refcount-free keeps the heap flat.
    expect((after as number) - (before as number)).toBeLessThan(50);
  }, 30_000);
});
