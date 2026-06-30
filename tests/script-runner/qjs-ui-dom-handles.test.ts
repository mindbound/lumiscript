/**
 * #11 P4b Increment 1 — string-id DOM handles + the intra-run flush-drain harness, in-VM.
 *
 * api.ui.dom.inject / injectAtMessage return a SYNC DOMHandle whose methods lazy-dispatch
 * via plain send('ui._dom.*', [elementId, ...]) (the host routes by method-prefix + args[0],
 * ignoring targetHandle). The elementId is generated upfront + threaded via the @internal
 * `_elementId` option so the canonical adopts the same id; stable-id dedup is host-side
 * (cross-run). The run-loop drains un-awaited dispatches via __lsFlush before completing.
 *
 * These are engine-unit tests (runUserScriptInQuickJS with a dispatch spy) — the full
 * host round-trip is covered by the dual-engine parity harness once the asyncfn baseline
 * is wired in a later increment.
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  _vmHandlerIdsForTests,
  type QuickJSRunOptions,
  type QuickJSFireOptions,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

function runOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch ?? (async () => undefined),
    data:           over.data ?? {},
    script:         over.script ?? { id: 'dom-spike', name: 'DOM', type: 'trigger' },
    console:        over.console ?? noopConsole,
    timeoutMs:      over.timeoutMs ?? 5_000,
    serializeError: over.serializeError ?? serializeError,
  };
}

function fireOpts(over: Partial<QuickJSFireOptions> & { scriptId: string; handlerId: string }): QuickJSFireOptions {
  return {
    scriptId:       over.scriptId,
    handlerId:      over.handlerId,
    args:           over.args ?? [],
    timeoutMs:      over.timeoutMs ?? 5_000,
    dispatch:       over.dispatch ?? (async () => undefined),
    console:        over.console ?? noopConsole,
    serializeError: over.serializeError ?? serializeError,
  };
}

/** A dispatch spy: records every (method, args) and returns per-method canned values. */
function spy(returns: Record<string, unknown> = {}) {
  const calls: Array<{ method: string; args: unknown[] }> = [];
  const dispatch = async (method: string, args: unknown[]): Promise<unknown> => {
    calls.push({ method, args });
    return method in returns ? returns[method] : undefined;
  };
  return { calls, dispatch };
}
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

describe('#11 P4b Inc 1: ui.dom.inject string-id handle', () => {
  test('inject returns a SYNC handle (id + methods); the inject IPC threads _elementId === handle.id', async () => {
    const { calls, dispatch } = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-inj', name: 'I', type: 'trigger' }, dispatch,
      code: `var h = api.ui.dom.inject('#target', '<div>x</div>'); return { id: h.id, up: typeof h.update, rm: typeof h.remove, ic: typeof h.injectChild, rd: typeof h.read }; `,
    })) as { id: string; up: string; rm: string; ic: string; rd: string };
    expect(ret.id).toMatch(UUID_RE);
    expect(ret.up).toBe('function');
    expect(ret.rm).toBe('function');
    expect(ret.ic).toBe('function');
    expect(ret.rd).toBe('function');
    const inj = calls.find((c) => c.method === 'ui.dom.inject');
    expect(inj).toBeDefined();
    expect(inj!.args[0]).toBe('#target');
    expect(inj!.args[1]).toBe('<div>x</div>');
    expect((inj!.args[2] as { _elementId?: string })._elementId).toBe(ret.id);
  });

  test('update / remove dispatch to ui._dom.* with [elementId, ...]', async () => {
    const { calls, dispatch } = spy();
    const id = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-upd', name: 'U', type: 'trigger' }, dispatch,
      code: `var h = api.ui.dom.inject('#t', 'x'); h.update('<b>y</b>'); h.remove(); return h.id;`,
    })) as string;
    const upd = calls.find((c) => c.method === 'ui._dom.update');
    const rem = calls.find((c) => c.method === 'ui._dom.remove');
    expect(upd!.args).toEqual([id, '<b>y</b>']);
    expect(rem!.args).toEqual([id]);
  });

  test('makeDraggable threads the optional handle selector', async () => {
    const { calls, dispatch } = spy();
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-drag', name: 'D', type: 'trigger' }, dispatch,
      code: `var h = api.ui.dom.inject('#t', 'x'); h.makeDraggable('.bar'); var h2 = api.ui.dom.inject('#t2', 'y'); h2.makeDraggable(); return null;`,
    }));
    const md = calls.filter((c) => c.method === 'ui._dom.makeDraggable');
    expect(md.length).toBe(2);
    expect((md[0]!.args as unknown[]).length).toBe(2); // [elementId, '.bar']
    expect(md[0]!.args[1]).toBe('.bar');
    expect((md[1]!.args as unknown[]).length).toBe(1); // [elementId]
  });

  test('injectChild allocates a fresh child elementId, dispatches ui._dom.injectChild, returns a nested handle', async () => {
    const { calls, dispatch } = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-child', name: 'C', type: 'trigger' }, dispatch,
      code: `var h = api.ui.dom.inject('#t', 'x'); var c = h.injectChild('.slot', '<i>c</i>'); c.update('z'); return { parent: h.id, child: c.id }; `,
    })) as { parent: string; child: string };
    expect(ret.child).toMatch(UUID_RE);
    expect(ret.child).not.toBe(ret.parent);
    const ic = calls.find((c) => c.method === 'ui._dom.injectChild');
    expect(ic!.args[0]).toBe(ret.parent);
    expect(ic!.args[1]).toBe('.slot');
    expect((ic!.args[3] as { _elementId?: string })._elementId).toBe(ret.child);
    // the child handle's update targets the CHILD elementId
    const upd = calls.find((c) => c.method === 'ui._dom.update');
    expect(upd!.args).toEqual([ret.child, 'z']);
  });

  test('read awaits the host response value (ui._dom.read)', async () => {
    const el = { tag: 'div', text: 'hello', attrs: {}, children: [] };
    const { calls, dispatch } = spy({ 'ui._dom.read': el });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-read', name: 'R', type: 'trigger' }, dispatch,
      code: `var h = api.ui.dom.inject('#t', 'x'); return await h.read({ includeChildren: true });`,
    }));
    expect(ret).toEqual(el);
    const rd = calls.find((c) => c.method === 'ui._dom.read');
    expect((rd!.args[0] as string)).toMatch(UUID_RE);
    expect(rd!.args[1]).toEqual({ includeChildren: true });
  });

  test('injectAtMessage takes a messageId positionally + threads _elementId', async () => {
    const { calls, dispatch } = spy();
    const id = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-iam', name: 'M', type: 'trigger' }, dispatch,
      code: `var h = api.ui.dom.injectAtMessage('msg-42', '<span>hi</span>', { position: 'after' }); return h.id;`,
    })) as string;
    const iam = calls.find((c) => c.method === 'ui.dom.injectAtMessage');
    expect(iam!.args[0]).toBe('msg-42');
    expect(iam!.args[1]).toBe('<span>hi</span>');
    expect((iam!.args[2] as { _elementId?: string; position?: string })._elementId).toBe(id);
    expect((iam!.args[2] as { position?: string }).position).toBe('after');
  });
});

describe('#11 P4b Inc 1: stable-id dedup (host-side, cross-run)', () => {
  test('within a run, inject({id}) twice resolves to the SAME elementId', async () => {
    const { dispatch } = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-stable', name: 'S', type: 'trigger' }, dispatch,
      code: `var a = api.ui.dom.inject('#t', 'x', { id: 'panel' }); var b = api.ui.dom.inject('#t', 'y', { id: 'panel' }); return { a: a.id, b: b.id }; `,
    })) as { a: string; b: string };
    expect(ret.a).toBe(ret.b);
  });

  test('ACROSS runs of the same script, the same stable id reuses the elementId (cross-run dedup — the host-side map)', async () => {
    const s1 = spy();
    const id1 = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-xrun', name: 'X', type: 'trigger' }, dispatch: s1.dispatch,
      code: `return api.ui.dom.inject('#t', 'x', { id: 'sidebar' }).id;`,
    })) as string;
    const s2 = spy();
    const id2 = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-xrun', name: 'X', type: 'trigger' }, dispatch: s2.dispatch,
      code: `return api.ui.dom.inject('#t', 'y', { id: 'sidebar' }).id;`,
    })) as string;
    expect(id2).toBe(id1);
  });

  test('different stable ids → different elementIds; no id → a fresh uuid each call', async () => {
    const { dispatch } = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-diff', name: 'DF', type: 'trigger' }, dispatch,
      code: `var a = api.ui.dom.inject('#t','x',{id:'A'}); var b = api.ui.dom.inject('#t','y',{id:'B'}); var c = api.ui.dom.inject('#t','z'); var d = api.ui.dom.inject('#t','w'); return { ab: a.id===b.id, cd: c.id===d.id }; `,
    })) as { ab: boolean; cd: boolean };
    expect(ret.ab).toBe(false);
    expect(ret.cd).toBe(false);
  });
});

describe('#11 P4b Inc 1: flush-drain harness', () => {
  test('the run-loop flush drains an UN-AWAITED inject before the run completes', async () => {
    let injectSettled = false;
    const dispatch = async (method: string, args: unknown[]): Promise<unknown> => {
      if (method === 'ui.dom.inject') {
        await new Promise((r) => setTimeout(r, 15)); // deferred host response
        injectSettled = true;
        return (args[2] as { _elementId?: string })._elementId;
      }
      return undefined;
    };
    // The body does NOT await the inject — its dispatch chain is still in flight when the
    // body returns. Without the flush drain, the run would complete first and the chain
    // would settle after activeRun=undefined (silent drop). The flush makes the run wait.
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-flush', name: 'FL', type: 'trigger' }, dispatch,
      code: `api.ui.dom.inject('#t', '<div>x</div>'); return 'body-done';`,
    }));
    expect(injectSettled).toBe(true);
  });

  test('an un-awaited inject whose dispatch REJECTS does not surface as an unhandled rejection (swallowed)', async () => {
    const dispatch = async (method: string): Promise<unknown> => {
      if (method === 'ui.dom.inject') { await Promise.resolve(); throw new Error('FE down'); }
      return undefined;
    };
    // Should resolve cleanly — the in-VM .catch swallows it (sync-void contract), flush
    // uses allSettled, and no unhandled rejection escapes (the inc3b lesson).
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-flush-rej', name: 'FR', type: 'trigger' }, dispatch,
      code: `api.ui.dom.inject('#t', 'x'); return 'ok';`,
    }));
    expect(ret).toBe('ok');
  });

  test('the flush drains an un-awaited inject even when the body THROWS (error-path flush, audit fix)', async () => {
    let injectSettled = false;
    const dispatch = async (method: string, args: unknown[]): Promise<unknown> => {
      if (method === 'ui.dom.inject') {
        await new Promise((r) => setTimeout(r, 15));
        injectSettled = true;
        return (args[2] as { _elementId?: string })._elementId;
      }
      return undefined;
    };
    let msg = '';
    try {
      await runUserScriptInQuickJS(runOpts({
        script: { id: 's-flush-throw', name: 'FT', type: 'trigger' }, dispatch,
        code: `api.ui.dom.inject('#t', 'x'); throw new Error('body boom');`,
      }));
    } catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('body boom'); // the body error still propagates (flush doesn't mask it)
    expect(injectSettled).toBe(true);   // ...but the deferred inject was drained on the error path
  });
});

describe('#11 P4b Inc 1b: DOMHandle.on (domEventListener)', () => {
  test('.on registers a domEventListener (meta carries elementId/event/options); returns a sync unsub fn', async () => {
    const reg: Array<{ kind: string; handlerId: string; meta: Record<string, unknown> }> = [];
    const ret = await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-on', name: 'ON', type: 'trigger' },
        code: `var h = api.ui.dom.inject('#t', 'x'); return { eid: h.id, off: typeof h.on('click', (e) => e.type, { capture: true }) }; `,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, handlerId, meta: meta as Record<string, unknown> }),
    }) as { eid: string; off: string };
    expect(ret.off).toBe('function');
    expect(reg.length).toBe(1);
    expect(reg[0]!.kind).toBe('domEventListener');
    expect(reg[0]!.handlerId).toMatch(/^domEventListener:/);
    expect(reg[0]!.meta.elementId).toBe(ret.eid);
    expect(reg[0]!.meta.event).toBe('click');
    expect(reg[0]!.meta.options).toEqual({ capture: true });
    expect(_vmHandlerIdsForTests('s-on')).toContain(reg[0]!.handlerId);
    disposeScriptVmHandlers('s-on');
  });

  test('a fired domEventListener receives the DOMEventData as args[0]', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-onfire', name: 'OF', type: 'trigger' },
      code: `var h = api.ui.dom.inject('#t', 'x'); h.on('click', (e) => e.type + ':' + e.target); return null;`,
    }));
    const hid = _vmHandlerIdsForTests('s-onfire').find((i) => i.startsWith('domEventListener:'))!;
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-onfire', handlerId: hid, args: [{ type: 'click', target: 'btn' }] }));
    expect(result).toBe('click:btn');
    disposeScriptVmHandlers('s-onfire');
  });

  test('.on without options → meta omits the options key (asyncfn parity)', async () => {
    const reg: Array<{ meta: Record<string, unknown> }> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-onnoopt', name: 'ONO', type: 'trigger' },
        code: `var h = api.ui.dom.inject('#t', 'x'); h.on('mouseover', () => {}); return null;`,
      }),
      dispatchRegisterHandler: (_k, _h, meta) => reg.push({ meta: meta as Record<string, unknown> }),
    });
    expect(reg[0]!.meta.event).toBe('mouseover');
    expect('options' in reg[0]!.meta).toBe(false);
    disposeScriptVmHandlers('s-onnoopt');
  });

  test('the .on unsub disposes the VM dup + sends a handlerId-keyed unregister IPC', async () => {
    const unreg: Array<{ kind: string; handlerId: string }> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-onunsub', name: 'OU', type: 'trigger' },
        code: `var h = api.ui.dom.inject('#t', 'x'); var off = h.on('click', () => {}); off(); return null;`,
      }),
      dispatchUnregisterHandler: (kind, handlerId) => unreg.push({ kind, handlerId }),
    });
    expect(_vmHandlerIdsForTests('s-onunsub').filter((i) => i.startsWith('domEventListener:'))).toEqual([]);
    expect(unreg.length).toBe(1);
    expect(unreg[0]!.kind).toBe('domEventListener');
    expect(unreg[0]!.handlerId).toMatch(/^domEventListener:/);
  });

  test('a child handle (injectChild) can attach its own .on (keyed by the child elementId)', async () => {
    const reg: Array<{ meta: Record<string, unknown> }> = [];
    const ret = await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-onchild', name: 'OC', type: 'trigger' },
        code: `var h = api.ui.dom.inject('#t', 'x'); var c = h.injectChild('.s', '<i>c</i>'); c.on('click', () => {}); return c.id; `,
      }),
      dispatchRegisterHandler: (_k, _h, meta) => reg.push({ meta: meta as Record<string, unknown> }),
    }) as string;
    expect(reg.length).toBe(1);
    expect(reg[0]!.meta.elementId).toBe(ret); // the listener attaches to the CHILD element
    disposeScriptVmHandlers('s-onchild');
  });

  test('.on with a non-function handler fails loud', async () => {
    let msg = '';
    try {
      await runUserScriptInQuickJS(runOpts({ script: { id: 's-onbad', name: 'OB', type: 'trigger' }, code: `api.ui.dom.inject('#t','x').on('click', 42); return null;` }));
    } catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('handler must be a function');
  });
});
