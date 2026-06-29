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
  disposeScriptVmHandlers,
  _vmHandlerIdsForTests,
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
