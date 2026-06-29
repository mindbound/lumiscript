/**
 * #11 P5 — engine-level handler mechanism (the Kill-condition spike + unit coverage).
 *
 * Validates that a FIRED in-VM handler can `await` an api.* call through the nested
 * VM-Promise→Bun-Promise bridge while the fire holds the runChain slot (the body-run
 * proves the top-level pattern; a fire nests one level deeper). commands.onInvoked is
 * the canonical single-handler kind (HandlerKind 'commandsOnInvoked'); the in-VM
 * interception generates a UNIQUE handlerId per registration (mirrors the asyncfn
 * generateHandlerId), discovered here via _vmHandlerIdsForTests.
 *
 * This exercises the engine in isolation (fireHandlerInQuickJS called directly); the
 * end-to-end path through child-entry's handleRunHandlerRequest is covered separately.
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  hasVmHandler,
  hasVmBroadcast,
  disposeScriptVmHandlers,
  disposeScriptVmBroadcast,
  _vmHandlerIdsForTests,
  _vmBroadcastIdsForTests,
  _vmObjectCountForTests,
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
    script:         over.script ?? { id: 'spike', name: 'Spike', type: 'trigger' },
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

/** Register a commands.onInvoked handler in a fresh run, return its (scriptId, handlerId). */
async function register(scriptId: string, code: string, dispatch?: QuickJSRunOptions['dispatch']): Promise<string> {
  await runUserScriptInQuickJS(runOpts({ script: { id: scriptId, name: scriptId, type: 'trigger' }, dispatch, code }));
  const ids = _vmHandlerIdsForTests(scriptId);
  if (ids.length !== 1) throw new Error(`expected 1 handler, got ${ids.length}`);
  return ids[0]!;
}

// A host dispatch stub: api.echo(x) returns x.
const echo = async (method: string, args: unknown[]): Promise<unknown> => (method === 'echo' ? args[0] : undefined);

describe('#11 P5: commands.onInvoked registration + fire', () => {
  test('registration stores a uniquely-keyed handler; dispose clears it', async () => {
    const hid = await register('s-reg', `api.commands.onInvoked(() => {}); return null;`);
    expect(hid).toMatch(/^commandsOnInvoked:/);
    expect(hasVmHandler('s-reg', hid)).toBe(true);
    expect(hasVmHandler('s-reg', 'nope')).toBe(false);
    expect(disposeScriptVmHandlers('s-reg')).toBe(1);
    expect(hasVmHandler('s-reg', hid)).toBe(false);
  });

  test('non-function handler fails loud at registration', async () => {
    let msg = '';
    try {
      await runUserScriptInQuickJS(runOpts({ script: { id: 's-bad', name: 'Bad', type: 'trigger' }, code: `api.commands.onInvoked(42); return null;` }));
    } catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('handler must be a function');
  });

  test('KILL CONDITION — a fired handler awaits an api.* call and returns the result', async () => {
    const hid = await register('s-await', `api.commands.onInvoked(async (commandId, ctx) => { const v = await api.echo(ctx.n); return v + 1; }); return null;`, echo);
    const result = await fireHandlerInQuickJS(fireOpts({
      scriptId: 's-await', handlerId: hid, args: ['cmd-1', { n: 41 }], dispatch: echo,
    }));
    expect(result).toBe(42); // 41 (echoed via the nested bridge) + 1
    disposeScriptVmHandlers('s-await');
  });

  test('the handler receives the IPC args positionally ([commandId, ctx])', async () => {
    const hid = await register('s-args', `api.commands.onInvoked((commandId, ctx) => commandId + ':' + ctx.who); return null;`);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-args', handlerId: hid, args: ['greet', { who: 'world' }] }));
    expect(result).toBe('greet:world');
    disposeScriptVmHandlers('s-args');
  });

  test('a fired handler can make MULTIPLE awaited api.* calls in sequence', async () => {
    const adder = async (method: string, args: unknown[]): Promise<unknown> =>
      method === 'add' ? (args[0] as number) + (args[1] as number) : undefined;
    const hid = await register('s-multi', `api.commands.onInvoked(async () => { const a = await api.add(1, 2); const b = await api.add(a, 10); return b; }); return null;`, adder);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-multi', handlerId: hid, dispatch: adder }));
    expect(result).toBe(13);
    disposeScriptVmHandlers('s-multi');
  });

  test('a fired handler return value marshals with structured parity (Date)', async () => {
    const hid = await register('s-date', `api.commands.onInvoked((commandId, ctx) => new Date(ctx.t)); return null;`);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-date', handlerId: hid, args: ['c', { t: 1_717_000_000_000 }] }));
    expect(result).toBeInstanceOf(Date);
    expect((result as Date).getTime()).toBe(1_717_000_000_000);
    disposeScriptVmHandlers('s-date');
  });

  test('a throwing handler surfaces its error to the host', async () => {
    const hid = await register('s-throw', `api.commands.onInvoked(() => { throw new Error('handler boom'); }); return null;`);
    let msg = '';
    try { await fireHandlerInQuickJS(fireOpts({ scriptId: 's-throw', handlerId: hid })); }
    catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('handler boom');
    disposeScriptVmHandlers('s-throw');
  });

  test('firing an unregistered handler throws not-found', async () => {
    let msg = '';
    try { await fireHandlerInQuickJS(fireOpts({ scriptId: 's-none', handlerId: 'commandsOnInvoked:missing' })); }
    catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('no handler');
  });

  test('the handler can fire repeatedly (the dup survives across fires)', async () => {
    const hid = await register('s-rep', `api.commands.onInvoked(async (commandId, ctx) => { const v = await api.echo(ctx.n); return v * 2; }); return null;`, echo);
    for (let i = 0; i < 5; i++) {
      const r = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-rep', handlerId: hid, args: ['c', { n: i }], dispatch: echo }));
      expect(r).toBe(i * 2);
    }
    disposeScriptVmHandlers('s-rep');
  });

  test('the in-VM unsub disposes the handler (a later fire is not-found)', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-unsub', name: 'Unsub', type: 'trigger' },
      code: `globalThis.__unsub = api.commands.onInvoked(() => 'x'); return null;`,
    }));
    const hid = _vmHandlerIdsForTests('s-unsub')[0]!;
    expect(hasVmHandler('s-unsub', hid)).toBe(true);
    // calling the stashed unsub in a later run of the same script drops the dup
    await runUserScriptInQuickJS(runOpts({ script: { id: 's-unsub', name: 'Unsub', type: 'trigger' }, code: `globalThis.__unsub(); return null;` }));
    expect(hasVmHandler('s-unsub', hid)).toBe(false);
  });

  test('handler dups do not leak: obj_count returns to baseline after dispose', async () => {
    for (let i = 0; i < 5; i++) {
      await runUserScriptInQuickJS(runOpts({ script: { id: 's-warm', name: 'W', type: 'trigger' }, code: `return null;` }));
    }
    const before = _vmObjectCountForTests();
    expect(before).not.toBeNull();
    for (let i = 0; i < 30; i++) {
      const sid = 's-leak-' + i;
      const hid = await register(sid, `api.commands.onInvoked(async (commandId, ctx) => await api.echo(ctx.n)); return null;`, echo);
      await fireHandlerInQuickJS(fireOpts({ scriptId: sid, handlerId: hid, args: ['c', { n: 1 }], dispatch: echo }));
      disposeScriptVmHandlers(sid);
    }
    const after = _vmObjectCountForTests();
    expect((after as number) - (before as number)).toBeLessThan(50);
  }, 30_000);
});

// ─── P5 inc2: the interceptor family (return-valued handlers + {id, remove} handle) ──

describe('#11 P5 inc2: interceptors (macroInterceptor / contentProcessor / worldInfoInterceptor)', () => {
  test('macros.registerInterceptor returns an {id, remove} handle; the handler fires + returns a string', async () => {
    const reg = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mi', name: 'MI', type: 'trigger' },
      code: `const h = api.macros.registerInterceptor((ctx) => 'INTERCEPTED:' + ctx.text);
             return { id: h.id, hasRemove: typeof h.remove };`,
    })) as { id: string; hasRemove: string };
    expect(reg.id).toMatch(/^macroInterceptor:/);
    expect(reg.hasRemove).toBe('function');
    expect(hasVmHandler('s-mi', reg.id)).toBe(true);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-mi', handlerId: reg.id, args: [{ text: 'hi' }] }));
    expect(result).toBe('INTERCEPTED:hi');
    disposeScriptVmHandlers('s-mi');
  });

  test('an async content-processor handler returning void fires cleanly (string | void)', async () => {
    const id = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-cp', name: 'CP', type: 'trigger' },
      code: `return api.chat.registerContentProcessor(async (ctx) => { await Promise.resolve(); }).id;`,
    })) as string;
    expect(id).toMatch(/^contentProcessor:/);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-cp', handlerId: id, args: [{ content: 'x' }] }));
    expect(result).toBeUndefined();
    disposeScriptVmHandlers('s-cp');
  });

  test('a user-supplied options.id is preserved as the handle id', async () => {
    const id = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-uid', name: 'UID', type: 'trigger' },
      code: `return api.worldInfo.registerInterceptor((ctx) => 'wi', { id: 'my-custom-id', priority: 5 }).id;`,
    })) as string;
    expect(id).toBe('my-custom-id');
    expect(hasVmHandler('s-uid', 'my-custom-id')).toBe(true);
    disposeScriptVmHandlers('s-uid');
  });

  test('the interceptor {id, remove} handle disposes the handler', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-rm', name: 'RM', type: 'trigger' },
      code: `globalThis.__r = api.worldInfo.registerInterceptor((ctx) => 'wi'); return null;`,
    }));
    const id = _vmHandlerIdsForTests('s-rm')[0]!;
    expect(hasVmHandler('s-rm', id)).toBe(true);
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-rm', name: 'RM', type: 'trigger' },
      code: `globalThis.__r.remove(); return null;`,
    }));
    expect(hasVmHandler('s-rm', id)).toBe(false);
  });

  test('a non-function interceptor handler fails loud', async () => {
    let msg = '';
    try {
      await runUserScriptInQuickJS(runOpts({
        script: { id: 's-badi', name: 'BadI', type: 'trigger' },
        code: `api.macros.registerInterceptor('not-a-fn'); return null;`,
      }));
    } catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('handler must be a function');
  });
});

// ─── P5 inc3a: clean standalone subscription kinds (unsub-fn shape) ──────────

describe('#11 P5 inc3a: ui.events / oauth.onCallback / ui.dom.delegate', () => {
  test('ui.events.onKeyboardChange registers (unsub fn) + fires with the state arg', async () => {
    const seen: unknown[] = [];
    const dispatch = async (m: string, args: unknown[]): Promise<unknown> => { if (m === 'echo') { seen.push(args[0]); return args[0]; } return undefined; };
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-uk', name: 'UK', type: 'trigger' }, dispatch,
      code: `return typeof api.ui.events.onKeyboardChange(async (state) => { await api.echo(state.visible); });`,
    })) as string;
    expect(ret).toBe('function');
    const id = _vmHandlerIdsForTests('s-uk')[0]!;
    expect(id).toMatch(/^uiKeyboardChange:/);
    await fireHandlerInQuickJS(fireOpts({ scriptId: 's-uk', handlerId: id, args: [{ visible: true }], dispatch }));
    expect(seen).toEqual([true]);
    disposeScriptVmHandlers('s-uk');
  });

  test('oauth.onCallback registers (unsub fn) + fires with params, returning a value', async () => {
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-oc', name: 'OC', type: 'trigger' },
      code: `return typeof api.oauth.onCallback((params) => params.code);`,
    })) as string;
    expect(ret).toBe('function');
    const id = _vmHandlerIdsForTests('s-oc')[0]!;
    expect(id).toMatch(/^oauthCallback:/);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-oc', handlerId: id, args: [{ code: 'xyz' }] }));
    expect(result).toBe('xyz');
    disposeScriptVmHandlers('s-oc');
  });

  test('ui.dom.delegate registers a handler (handler is arg[2]) + fires with event data', async () => {
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-dd', name: 'DD', type: 'trigger' },
      code: `return typeof api.ui.dom.delegate('.btn', 'click', (e) => e.kind, { capture: true });`,
    })) as string;
    expect(ret).toBe('function');
    const id = _vmHandlerIdsForTests('s-dd')[0]!;
    expect(id).toMatch(/^domDelegate:/);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-dd', handlerId: id, args: [{ kind: 'click' }] }));
    expect(result).toBe('click');
    disposeScriptVmHandlers('s-dd');
  });

  test('each subscription kind generates a uniquely-keyed handler (multiple per channel)', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-multi-sub', name: 'MS', type: 'trigger' },
      code: `api.ui.events.onDrawerChange(() => {}); api.ui.events.onDrawerChange(() => {}); return null;`,
    }));
    const ids = _vmHandlerIdsForTests('s-multi-sub');
    expect(ids.length).toBe(2);
    expect(ids.every((i) => i.startsWith('uiDrawerChange:'))).toBe(true);
    disposeScriptVmHandlers('s-multi-sub');
  });
});

describe('#11 P5 inc3b: broadcast.on (separate per-run registry)', () => {
  test('registration stores a sub in the SEPARATE broadcast registry (not the handler registry)', async () => {
    const subs: Array<{ subId: string; event: string }> = [];
    const ret = await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-bc', name: 'BC', type: 'trigger' },
        code: `return typeof api.broadcast.on('ping', (payload) => payload);`,
      }),
      dispatchBroadcastSubscribe: (subId, event) => subs.push({ subId, event }),
    }) as string;
    expect(ret).toBe('function'); // returns a sync unsub fn
    const ids = _vmBroadcastIdsForTests('s-bc');
    expect(ids.length).toBe(1);
    expect(ids[0]).toMatch(/^sub:/);
    expect(hasVmBroadcast('s-bc', ids[0]!)).toBe(true);
    // The sub must NOT leak into the persistent-handler registry (distinct lifecycle).
    expect(hasVmHandler('s-bc', ids[0]!)).toBe(false);
    expect(_vmHandlerIdsForTests('s-bc')).toEqual([]);
    // The subscribe IPC carried the subId + event verbatim.
    expect(subs).toEqual([{ subId: ids[0]!, event: 'ping' }]);
    disposeScriptVmBroadcast('s-bc');
  });

  test('a fired broadcast handler receives the payload + can await an api.* call (nested bridge)', async () => {
    const seen: unknown[] = [];
    const dispatch = async (m: string, args: unknown[]): Promise<unknown> => { if (m === 'echo') { seen.push(args[0]); return args[0]; } return undefined; };
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-bc-fire', name: 'BF', type: 'trigger' }, dispatch,
      code: `api.broadcast.on('evt', async (payload) => { await api.echo(payload.n); }); return null;`,
    }));
    const subId = _vmBroadcastIdsForTests('s-bc-fire')[0]!;
    await fireHandlerInQuickJS(fireOpts({ scriptId: 's-bc-fire', handlerId: subId, args: [{ n: 99 }], dispatch }));
    expect(seen).toEqual([99]);
    disposeScriptVmBroadcast('s-bc-fire');
  });

  test('disposeScriptVmBroadcast (broadcast-clear at run-start) drops ONLY broadcast subs; persistent handlers survive', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mix', name: 'MIX', type: 'trigger' },
      code: `api.commands.onInvoked(() => 'h'); api.broadcast.on('e', () => 'b'); return null;`,
    }));
    const hid = _vmHandlerIdsForTests('s-mix')[0]!;
    const subId = _vmBroadcastIdsForTests('s-mix')[0]!;
    expect(hasVmHandler('s-mix', hid)).toBe(true);
    expect(hasVmBroadcast('s-mix', subId)).toBe(true);
    // broadcast-clear drops the sub but leaves the persistent command handler intact.
    expect(disposeScriptVmBroadcast('s-mix')).toBe(1);
    expect(hasVmBroadcast('s-mix', subId)).toBe(false);
    expect(hasVmHandler('s-mix', hid)).toBe(true);
    // full teardown then drops the handler too (broadcast already gone -> count 1).
    expect(disposeScriptVmHandlers('s-mix')).toBe(1);
    expect(hasVmHandler('s-mix', hid)).toBe(false);
  });

  test('full teardown (disposeScriptVmHandlers) drops BOTH handlers and broadcast subs', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-both', name: 'BOTH', type: 'trigger' },
      code: `api.commands.onInvoked(() => {}); api.broadcast.on('e', () => {}); return null;`,
    }));
    expect(_vmHandlerIdsForTests('s-both').length).toBe(1);
    expect(_vmBroadcastIdsForTests('s-both').length).toBe(1);
    expect(disposeScriptVmHandlers('s-both')).toBe(2); // 1 broadcast + 1 handler
    expect(_vmHandlerIdsForTests('s-both')).toEqual([]);
    expect(_vmBroadcastIdsForTests('s-both')).toEqual([]);
  });

  test('the returned unsub disposes the sub + dispatches a matching broadcast-unsubscribe IPC', async () => {
    const subbed: string[] = [];
    const unsubbed: string[] = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-bc-unsub', name: 'UN', type: 'trigger' },
        code: `var off = api.broadcast.on('e', () => {}); off(); return null;`,
      }),
      dispatchBroadcastSubscribe: (subId) => subbed.push(subId),
      dispatchBroadcastUnsubscribe: (subId) => unsubbed.push(subId),
    });
    expect(subbed.length).toBe(1);
    expect(unsubbed).toEqual(subbed); // unsub dispatched the SAME subId it subscribed
    expect(_vmBroadcastIdsForTests('s-bc-unsub')).toEqual([]); // disposed in-run
  });

  test('multiple broadcast.on subs on one script are each uniquely keyed', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-bc-multi', name: 'BM', type: 'trigger' },
      code: `api.broadcast.on('a', () => {}); api.broadcast.on('b', () => {}); return null;`,
    }));
    const ids = _vmBroadcastIdsForTests('s-bc-multi');
    expect(ids.length).toBe(2);
    expect(new Set(ids).size).toBe(2);
    expect(ids.every((i) => i.startsWith('sub:'))).toBe(true);
    disposeScriptVmBroadcast('s-bc-multi');
  });

  test('non-function handler fails loud at api.broadcast.on', async () => {
    let msg = '';
    try {
      await runUserScriptInQuickJS(runOpts({ script: { id: 's-bc-bad', name: 'BAD', type: 'trigger' }, code: `api.broadcast.on('e', 42); return null;` }));
    } catch (e) { msg = (e as Error).message; }
    expect(msg).toContain('handler must be a function');
  });
});

describe('#11 P5 inc3c: macros.register / tools.register (named, void, unregister-by-name)', () => {
  test('macros.register (pull) stores a macro-kind handler; register IPC carries {name, def}; fires with MacroContext', async () => {
    const reg: Array<{ kind: string; handlerId: string; meta: unknown }> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-macro', name: 'M', type: 'trigger' },
        code: `var r = api.macros.register('greet', { description: 'hi' }, (ctx) => 'H:' + ctx.args[0]); return typeof r;`,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, handlerId, meta }),
    });
    expect(reg.length).toBe(1);
    expect(reg[0]!.kind).toBe('macro');
    expect(reg[0]!.handlerId).toMatch(/^macro:/);
    expect(reg[0]!.meta).toEqual({ name: 'greet', def: { description: 'hi' } });
    const hid = _vmHandlerIdsForTests('s-macro')[0]!;
    expect(hid).toBe(reg[0]!.handlerId);
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-macro', handlerId: hid, args: [{ args: ['world'] }] }));
    expect(result).toBe('H:world');
    disposeScriptVmHandlers('s-macro');
  });

  test('macros.register returns sync void (NOT an unsub fn / Promise) in both modes', async () => {
    const pull = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mv1', name: 'V1', type: 'trigger' },
      code: `return typeof api.macros.register('g', {}, () => 'x');`,
    })) as string;
    expect(pull).toBe('undefined');
    const push = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mv2', name: 'V2', type: 'trigger' },
      code: `return typeof api.macros.register('g', {});`,
    })) as string;
    expect(push).toBe('undefined');
    disposeScriptVmHandlers('s-mv1'); disposeScriptVmHandlers('s-mv2');
  });

  test('macros.register (push, no handler) sends NO register-handler IPC + creates no VM dup (generic passthrough)', async () => {
    const reg: unknown[] = [];
    const dispatched: Array<[string, unknown[]]> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-push', name: 'P', type: 'trigger' },
        dispatch: async (m, a) => { dispatched.push([m, a]); return undefined; },
        code: `api.macros.register('pm', { description: 'push' }); return null;`,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, handlerId, meta }),
    });
    expect(reg.length).toBe(0);
    expect(_vmHandlerIdsForTests('s-push')).toEqual([]);
    const pushDispatch = dispatched.find(([m]) => m === 'macros.register');
    expect(pushDispatch).toBeDefined();
    expect(pushDispatch![1]).toEqual(['pm', { description: 'push' }]);
  });

  test('macros.unregister(name) sends a NAME-keyed unregister IPC (no handlerId); the dup survives until teardown (parity)', async () => {
    const unreg: Array<{ kind: string; name: string }> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-unreg', name: 'U', type: 'trigger' },
        code: `api.macros.register('g', { description: 'd' }, () => 'x'); api.macros.unregister('g'); return null;`,
      }),
      dispatchUnregisterHandlerNamed: (kind, name) => unreg.push({ kind, name }),
    });
    expect(unreg).toEqual([{ kind: 'macro', name: 'g' }]);
    // asyncfn parity: unregister(name) does NOT dispose the VM dup — it is reaped at
    // teardown (a stale dup never fires once the host drops the name from its store).
    expect(_vmHandlerIdsForTests('s-unreg').length).toBe(1);
    disposeScriptVmHandlers('s-unreg');
    expect(_vmHandlerIdsForTests('s-unreg')).toEqual([]);
  });

  test('tools.register fires the handler with (toolArgs, api, ctx) — api is the in-VM proxy; ctx present + absent', async () => {
    const reg: Array<{ kind: string; meta: unknown }> = [];
    const dispatch = async (m: string, a: unknown[]): Promise<unknown> => (m === 'echo' ? a[0] : undefined);
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-tool', name: 'T', type: 'trigger' }, dispatch,
        code: `api.tools.register('t', { description: 'd', parameters: {} }, async (args, api, ctx) => { var v = await api.echo(args.n); return 'R:' + v + ':' + (ctx ? ctx.id : 'noctx'); }); return null;`,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, meta }),
    });
    expect(reg.length).toBe(1);
    expect(reg[0]!.kind).toBe('tool');
    expect(reg[0]!.meta).toEqual({ name: 't', def: { description: 'd', parameters: {} } });
    const hid = _vmHandlerIdsForTests('s-tool')[0]!;
    expect(hid).toMatch(/^tool:/);
    // fire with [toolArgs, toolCtx] — proves api re-injection (api.echo round-trips) + ctx passthrough
    const r1 = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-tool', handlerId: hid, args: [{ n: 5 }, { id: 'call-1' }], dispatch }));
    expect(r1).toBe('R:5:call-1');
    // fire with [toolArgs] only — ctx is undefined (host omits it when absent)
    const r2 = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-tool', handlerId: hid, args: [{ n: 9 }], dispatch }));
    expect(r2).toBe('R:9:noctx');
    disposeScriptVmHandlers('s-tool');
  });

  test('a non-function handler fails loud for both macros.register (pull) and tools.register', async () => {
    let m1 = '';
    try { await runUserScriptInQuickJS(runOpts({ script: { id: 's-mbad', name: 'MB', type: 'trigger' }, code: `api.macros.register('m', {}, 42); return null;` })); }
    catch (e) { m1 = (e as Error).message; }
    expect(m1).toContain('api.macros.register: handler must be a function');
    let m2 = '';
    try { await runUserScriptInQuickJS(runOpts({ script: { id: 's-tbad', name: 'TB', type: 'trigger' }, code: `api.tools.register('t', {}, 42); return null;` })); }
    catch (e) { m2 = (e as Error).message; }
    expect(m2).toContain('api.tools.register: handler must be a function');
  });

  test('re-register of the same macro name generates a fresh handlerId (old dup orphaned — host fires latest by name)', async () => {
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-rereg', name: 'RR', type: 'trigger' },
      code: `api.macros.register('m', {}, () => 'a'); api.macros.register('m', {}, () => 'b'); return null;`,
    }));
    const ids = _vmHandlerIdsForTests('s-rereg');
    expect(ids.length).toBe(2);
    expect(new Set(ids).size).toBe(2);
    expect(ids.every((i) => i.startsWith('macro:'))).toBe(true);
    disposeScriptVmHandlers('s-rereg');
  });

  test('tools.unregister(name) sends a name-keyed unregister IPC (symmetric with macros)', async () => {
    const unreg: Array<{ kind: string; name: string }> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-tunreg', name: 'TU', type: 'trigger' },
        code: `api.tools.register('t', {}, () => 'x'); api.tools.unregister('t'); return null;`,
      }),
      dispatchUnregisterHandlerNamed: (kind, name) => unreg.push({ kind, name }),
    });
    expect(unreg).toEqual([{ kind: 'tool', name: 't' }]);
    disposeScriptVmHandlers('s-tunreg');
  });
});
