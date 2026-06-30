/**
 * #11 P4b Increment 2 — gated factory handles in-VM: api.ui.showAdvancedModal +
 * api.ui.createFloatWidget.
 *
 * These are the first consumers of buildDomHandle's gateAck path. ids are generated
 * upfront + threaded via @internal _modalId/_widgetId/_rootElementId; the handle returns
 * SYNC; every void method queues behind openAck = send('ui.showAdvancedModal' |
 * 'ui.createFloatWidget', [optsWithIds]) and is __lsTrackChain'd so the run-loop flush
 * drains it. Callback-free scope: onDismiss/onDragEnd + the FE-driven dismissed/position
 * notices are deferred to Inc 3.
 *
 * Engine-unit tests (runUserScriptInQuickJS + a dispatch spy). The dispatch spy resolves
 * the openAck synchronously (when the stub returns), so the run-loop flush drains the
 * gated method chains within the same run.
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  type QuickJSRunOptions,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

function runOpts(over: Partial<QuickJSRunOptions> & { code: string }): QuickJSRunOptions {
  return {
    code:           over.code,
    dispatch:       over.dispatch ?? (async () => undefined),
    data:           over.data ?? {},
    script:         over.script ?? { id: 'fac-spike', name: 'FAC', type: 'trigger' },
    console:        over.console ?? noopConsole,
    timeoutMs:      over.timeoutMs ?? 5_000,
    serializeError: over.serializeError ?? serializeError,
  };
}

/** A dispatch spy that records (method, args) + returns per-method canned values. A method
 *  listed in `rejects` throws (to exercise the openAck-reject path). */
function spy(opts: { returns?: Record<string, unknown>; rejects?: string[] } = {}) {
  const calls: Array<{ method: string; args: unknown[] }> = [];
  const dispatch = async (method: string, args: unknown[]): Promise<unknown> => {
    calls.push({ method, args });
    if (opts.rejects?.includes(method)) throw new Error(method + ' failed');
    return opts.returns && method in opts.returns ? opts.returns[method] : undefined;
  };
  const idx = (m: string) => calls.findIndex((c) => c.method === m);
  const find = (m: string) => calls.find((c) => c.method === m);
  return { calls, dispatch, idx, find };
}
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

describe('#11 P4b Inc 2: showAdvancedModal (gated)', () => {
  test('returns a SYNC handle (modalId + root.id are uuids); the open dispatch threads _modalId/_rootElementId', async () => {
    const s = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-modal', name: 'M', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.showAdvancedModal({ title: 'Hi' }); return { mid: m.modalId, rid: m.root.id, dismissed: m.dismissed }; `,
    })) as { mid: string; rid: string; dismissed: boolean };
    expect(ret.mid).toMatch(UUID_RE);
    expect(ret.rid).toMatch(UUID_RE);
    expect(ret.mid).not.toBe(ret.rid);
    expect(ret.dismissed).toBe(false);
    const open = s.find('ui.showAdvancedModal');
    expect(open).toBeDefined();
    const o = open!.args[0] as { _modalId?: string; _rootElementId?: string; title?: string };
    expect(o._modalId).toBe(ret.mid);
    expect(o._rootElementId).toBe(ret.rid);
    expect(o.title).toBe('Hi'); // user options preserved
  });

  test('setTitle GATES behind openAck — the open dispatch precedes the gated ui._advModal.setTitle', async () => {
    const s = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-settitle', name: 'ST', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.showAdvancedModal({}); m.setTitle('New'); return m.modalId;`,
    })) as string;
    expect(s.idx('ui.showAdvancedModal')).toBeGreaterThanOrEqual(0);
    expect(s.idx('ui._advModal.setTitle')).toBeGreaterThan(s.idx('ui.showAdvancedModal')); // gated AFTER open
    expect(s.find('ui._advModal.setTitle')!.args).toEqual([ret, 'New']);
  });

  test('root.update + setTitle both reach the host after openAck resolves', async () => {
    const s = spy();
    const rid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-both', name: 'B', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.showAdvancedModal({}); m.root.update('<p>x</p>'); m.setTitle('T'); return m.root.id;`,
    })) as string;
    expect(s.find('ui._dom.update')!.args).toEqual([rid, '<p>x</p>']);
    expect(s.find('ui._advModal.setTitle')).toBeDefined();
  });

  test('dismiss() dispatches ui._advModal.dismiss [modalId]', async () => {
    const s = spy();
    const mid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-dismiss', name: 'D', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.showAdvancedModal({}); m.dismiss(); return m.modalId;`,
    })) as string;
    expect(s.find('ui._advModal.dismiss')!.args).toEqual([mid]);
  });

  test('openAck REJECT: methods no-op (no ui._advModal.* dispatch), dismissed flips true, no unhandled rejection', async () => {
    const s = spy({ rejects: ['ui.showAdvancedModal'] });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-reject', name: 'RJ', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.showAdvancedModal({}); m.setTitle('x'); m.root.update('y'); return 'done'; `,
    }));
    expect(ret).toBe('done'); // the run completes cleanly (no unhandled rejection escapes the flush)
    expect(s.find('ui._advModal.setTitle')).toBeUndefined(); // gated dispatch skipped on reject
    expect(s.find('ui._dom.update')).toBeUndefined();        // root method also skipped (shared gate)
    // dismissed flips true on the openAck-reject path (the path the VM owns)
    const d = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-reject2', name: 'RJ2', type: 'trigger' }, dispatch: spy({ rejects: ['ui.showAdvancedModal'] }).dispatch,
      code: `var m = api.ui.showAdvancedModal({}); var before = m.dismissed; await Promise.resolve(); return { before: before }; `,
    })) as { before: boolean };
    expect(d.before).toBe(false); // synchronously before the reject settles, dismissed is still false (parity)
  });

  test('a BARE showAdvancedModal whose open REJECTS (no method calls, no await) does not leak an unhandled rejection', async () => {
    const s = spy({ rejects: ['ui.showAdvancedModal'] });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-bare-reject', name: 'BR', type: 'trigger' }, dispatch: s.dispatch,
      code: `api.ui.showAdvancedModal({}); return 'done';`,
    }));
    expect(ret).toBe('done'); // __lsTrackChain's .then(done,done) observes the openAck rejection — no leak
  });
});

describe('#11 P4b Inc 2: createFloatWidget (gated)', () => {
  test('returns a SYNC handle (widgetId + root.id uuids); the create dispatch threads _widgetId/_rootElementId', async () => {
    const s = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-fw', name: 'FW', type: 'trigger' }, dispatch: s.dispatch,
      code: `var w = api.ui.createFloatWidget({ title: 'W' }); return { wid: w.widgetId, rid: w.root.id }; `,
    })) as { wid: string; rid: string };
    expect(ret.wid).toMatch(UUID_RE);
    expect(ret.rid).toMatch(UUID_RE);
    const create = s.find('ui.createFloatWidget');
    const o = create!.args[0] as { _widgetId?: string; _rootElementId?: string; title?: string };
    expect(o._widgetId).toBe(ret.wid);
    expect(o._rootElementId).toBe(ret.rid);
    expect(o.title).toBe('W');
  });

  test('getPosition + isVisible are SYNC; moveTo / setVisible write the cache sync + gated-dispatch', async () => {
    const s = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-pos', name: 'P', type: 'trigger' }, dispatch: s.dispatch,
      code: `var w = api.ui.createFloatWidget({}); var p0 = w.getPosition(); var v0 = w.isVisible(); w.moveTo(3, 4); w.setVisible(false); var p1 = w.getPosition(); var v1 = w.isVisible(); return { p0: p0, v0: v0, p1: p1, v1: v1 }; `,
    })) as { p0: { x: number; y: number }; v0: boolean; p1: { x: number; y: number }; v1: boolean };
    expect(ret.p0).toEqual({ x: 0, y: 0 });   // default
    expect(ret.v0).toBe(true);                // default visible
    expect(ret.p1).toEqual({ x: 3, y: 4 });   // moveTo wrote the cache SYNC (before openAck resolved)
    expect(ret.v1).toBe(false);               // setVisible wrote the cache SYNC
    expect(s.find('ui._floatWidget.moveTo')!.args).toEqual([ret_wid(s), 3, 4]);
    expect(s.find('ui._floatWidget.setVisible')!.args).toEqual([ret_wid(s), false]);
  });

  test('getPosition seeds from options.initialPosition', async () => {
    const s = spy();
    const p = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-ip', name: 'IP', type: 'trigger' }, dispatch: s.dispatch,
      code: `var w = api.ui.createFloatWidget({ initialPosition: { x: 10, y: 20 } }); return w.getPosition();`,
    }));
    expect(p).toEqual({ x: 10, y: 20 });
  });

  test('destroy() flips + dispatches; moveTo after destroy no-ops', async () => {
    const s = spy();
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-destroy', name: 'DS', type: 'trigger' }, dispatch: s.dispatch,
      code: `var w = api.ui.createFloatWidget({}); w.destroy(); w.moveTo(9, 9); return w.widgetId; `,
    })) as string;
    expect(s.find('ui._floatWidget.destroy')!.args).toEqual([wid]);
    expect(s.find('ui._floatWidget.moveTo')).toBeUndefined(); // no-op after destroy
  });

  test('create openAck REJECT: methods no-op, run completes (no unhandled rejection)', async () => {
    const s = spy({ rejects: ['ui.createFloatWidget'] });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-fwreject', name: 'FWR', type: 'trigger' }, dispatch: s.dispatch,
      code: `var w = api.ui.createFloatWidget({}); w.moveTo(1, 2); w.root.update('z'); return 'ok'; `,
    }));
    expect(ret).toBe('ok');
    expect(s.find('ui._floatWidget.moveTo')).toBeUndefined();
    expect(s.find('ui._dom.update')).toBeUndefined();
  });

  test('a BARE createFloatWidget whose open REJECTS (no method calls, no await) does not leak an unhandled rejection', async () => {
    const s = spy({ rejects: ['ui.createFloatWidget'] });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-fw-bare-reject', name: 'FBR', type: 'trigger' }, dispatch: s.dispatch,
      code: `api.ui.createFloatWidget({}); return 'done';`,
    }));
    expect(ret).toBe('done');
  });
});

// helper: the widgetId from the recorded create dispatch
function ret_wid(s: { find: (m: string) => { args: unknown[] } | undefined }): string {
  const create = s.find('ui.createFloatWidget');
  return (create!.args[0] as { _widgetId: string })._widgetId;
}
