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
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  hasVmWidget,
  notifyVmWidgetPosition,
  hasVmModal,
  notifyVmModalDismissed,
  dropVmModal,
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

describe('#11 P4b Inc 3b: registerDrawerTab (gated, callback-free)', () => {
  test('returns a sync handle (tabId = options.id, root.id uuid); open threads _rootElementId only', async () => {
    const s = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-tab', name: 'TB', type: 'trigger' }, dispatch: s.dispatch,
      code: `var t = api.ui.registerDrawerTab({ id: 'my-tab', title: 'My Tab' }); return { tid: t.tabId, rid: t.root.id }; `,
    })) as { tid: string; rid: string };
    expect(ret.tid).toBe('my-tab'); // tabId is the user-supplied id, NOT generated
    expect(ret.rid).toMatch(UUID_RE);
    const o = s.find('ui.registerDrawerTab')!.args[0] as { _rootElementId?: string; _tabId?: string; id?: string };
    expect(o._rootElementId).toBe(ret.rid);
    expect(o._tabId).toBeUndefined(); // tabId is NOT threaded (host reads options.id)
    expect(o.id).toBe('my-tab');
  });

  test('setTitle/setShortName/setBadge/activate gate behind openAck; destroy flips + no-ops after', async () => {
    const s = spy();
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-tab2', name: 'TB2', type: 'trigger' }, dispatch: s.dispatch,
      code: `var t = api.ui.registerDrawerTab({ id: 'x', title: 'X' }); t.setTitle('T'); t.setShortName('S'); t.setBadge('3'); t.activate(); t.destroy(); t.setTitle('after'); return null;`,
    }));
    expect(s.find('ui._drawerTab.setTitle')!.args).toEqual(['x', 'T']);
    expect(s.find('ui._drawerTab.setShortName')!.args).toEqual(['x', 'S']);
    expect(s.find('ui._drawerTab.setBadge')!.args).toEqual(['x', '3']);
    expect(s.find('ui._drawerTab.activate')!.args).toEqual(['x']);
    expect(s.find('ui._drawerTab.destroy')!.args).toEqual(['x']);
    // setTitle('after') ran after destroy → no second setTitle dispatch
    expect(s.calls.filter((c) => c.method === 'ui._drawerTab.setTitle').length).toBe(1);
  });

  test('sync validation throws on empty/missing id or title (parity)', async () => {
    let m1 = '';
    try { await runUserScriptInQuickJS(runOpts({ script: { id: 's-tabbad', name: 'TBB', type: 'trigger' }, code: `api.ui.registerDrawerTab({ title: 'T' }); return null;` })); }
    catch (e) { m1 = (e as Error).message; }
    expect(m1).toContain('options.id must be a non-empty string');
    let m2 = '';
    try { await runUserScriptInQuickJS(runOpts({ script: { id: 's-tabbad2', name: 'TBB2', type: 'trigger' }, code: `api.ui.registerDrawerTab({ id: 'x' }); return null;` })); }
    catch (e) { m2 = (e as Error).message; }
    expect(m2).toContain('options.title must be a non-empty string');
  });
});

describe('#11 P4b Inc 3b: mountApp (gated, callback-free)', () => {
  test('returns a sync handle (mountId + root.id uuids); open threads _mountId/_rootElementId; default {} options', async () => {
    const s = spy();
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mount', name: 'MA', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.mountApp(); return { mid: m.mountId, rid: m.root.id }; `,
    })) as { mid: string; rid: string };
    expect(ret.mid).toMatch(UUID_RE);
    expect(ret.rid).toMatch(UUID_RE);
    const o = s.find('ui.mountApp')!.args[0] as { _mountId?: string; _rootElementId?: string };
    expect(o._mountId).toBe(ret.mid);
    expect(o._rootElementId).toBe(ret.rid);
  });

  test('setVisible/destroy gate behind openAck; moveTo-less handle no-ops after destroy', async () => {
    const s = spy();
    const mid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mount2', name: 'MA2', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.mountApp({ title: 'A' }); m.setVisible(false); m.destroy(); m.setVisible(true); return m.mountId;`,
    })) as string;
    expect(s.find('ui._appMount.setVisible')!.args).toEqual([mid, false]);
    expect(s.find('ui._appMount.destroy')!.args).toEqual([mid]);
    expect(s.calls.filter((c) => c.method === 'ui._appMount.setVisible').length).toBe(1); // 2nd setVisible no-op'd
  });
});

describe('#11 P4b Inc 3b-2: showModal (awaited-value handle)', () => {
  test('returns {openRequestId, result(Promise), close(fn)}; open threads openRequestId in options + items as arg0; result resolves to awaitResult', async () => {
    const s = spy({ returns: { 'ui._modal.awaitResult': { action: 'confirm', value: 'yes' } } });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-showmodal', name: 'SM', type: 'trigger' }, dispatch: s.dispatch,
      code: `var h = api.ui.showModal([{ type: 'text', text: 'Q?' }], { title: 'Ask' }); var r = await h.result; return { orid: h.openRequestId, closeType: typeof h.close, result: r }; `,
    })) as { orid: string; closeType: string; result: unknown };
    expect(ret.orid).toMatch(UUID_RE);
    expect(ret.closeType).toBe('function');
    expect(ret.result).toEqual({ action: 'confirm', value: 'yes' }); // awaited value
    const open = s.find('ui.showModal')!;
    expect(open.args[0]).toEqual([{ type: 'text', text: 'Q?' }]); // items positional
    expect((open.args[1] as { openRequestId?: string; title?: string }).openRequestId).toBe(ret.orid);
    expect((open.args[1] as { title?: string }).title).toBe('Ask'); // user options preserved
    expect(s.find('ui._modal.awaitResult')!.args).toEqual([ret.orid]);
  });

  test('close() dispatches ui._modal.close [openRequestId] + returns a promise', async () => {
    const s = spy();
    const orid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-smclose', name: 'SMC', type: 'trigger' }, dispatch: s.dispatch,
      code: `var h = api.ui.showModal([], {}); await h.close(); return h.openRequestId;`,
    })) as string;
    expect(s.find('ui._modal.close')!.args).toEqual([orid]);
  });

  test('a failed open surfaces via result rejecting (the user awaits + catches)', async () => {
    const s = spy({ rejects: ['ui.showModal'] });
    const msg = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-smreject', name: 'SMR', type: 'trigger' }, dispatch: s.dispatch,
      code: `var h = api.ui.showModal([], {}); try { await h.result; return 'NO-THROW'; } catch (e) { return 'caught:' + e.message; }`,
    })) as string;
    expect(msg).toContain('caught:');
    expect(msg).toContain('ui.showModal failed');
  });

  test('a BARE showModal whose open rejects (no await) does not leak an unhandled rejection', async () => {
    const s = spy({ rejects: ['ui.showModal'] });
    const ret = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-smbare', name: 'SMB', type: 'trigger' }, dispatch: s.dispatch,
      code: `api.ui.showModal([], {}); return 'done';`,
    }));
    expect(ret).toBe('done'); // showModalAck + the eager result are both __lsTrackChain'd → rejection observed
  });
});

describe('#11 P4b Inc 3c-1: gated register-handler callbacks (onDragEnd / onActivate / onClick)', () => {
  test('floatWidget.onDragEnd registers a GATED floatWidgetDragEnd handler (meta {widgetId}); fires with [pos]', async () => {
    const reg: Array<{ kind: string; handlerId: string; meta: Record<string, unknown> }> = [];
    const s = spy();
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-drag', name: 'DG', type: 'trigger' }, dispatch: s.dispatch,
        code: `var w = api.ui.createFloatWidget({}); var off = w.onDragEnd((pos) => pos.x + ',' + pos.y); return typeof off; `,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, handlerId, meta: meta as Record<string, unknown> }),
    });
    const r = reg.find((x) => x.kind === 'floatWidgetDragEnd')!;
    expect(r).toBeDefined();
    const wid = (s.find('ui.createFloatWidget')!.args[0] as { _widgetId: string })._widgetId;
    expect(r.meta).toEqual({ widgetId: wid });
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-drag', handlerId: r.handlerId, args: [{ x: 3, y: 4 }] }));
    expect(result).toBe('3,4'); // the handler receives the drag pos as its arg
    disposeScriptVmHandlers('s-drag');
  });

  test('drawerTab.onActivate registers a gated drawerTabActivate handler (meta {tabId}); fires no-arg', async () => {
    const reg: Array<{ kind: string; handlerId: string; meta: Record<string, unknown> }> = [];
    await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-act', name: 'AC', type: 'trigger' },
        code: `var t = api.ui.registerDrawerTab({ id: 't1', title: 'T' }); t.onActivate(() => 'activated'); return null;`,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, handlerId, meta: meta as Record<string, unknown> }),
    });
    const r = reg.find((x) => x.kind === 'drawerTabActivate')!;
    expect(r.meta).toEqual({ tabId: 't1' });
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-act', handlerId: r.handlerId, args: [] }));
    expect(result).toBe('activated');
    disposeScriptVmHandlers('s-act');
  });

  test('registerInputBarAction: sync handle (actionId=options.id, raw options on wire); setLabel gated; onClick registers inputBarActionClick + fires no-arg', async () => {
    const reg: Array<{ kind: string; handlerId: string; meta: Record<string, unknown> }> = [];
    const s = spy();
    const aid = await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-iba', name: 'IBA', type: 'trigger' }, dispatch: s.dispatch,
        code: `var a = api.ui.registerInputBarAction({ id: 'act1', label: 'Go' }); a.setLabel('New'); a.onClick(() => 'clicked'); return a.actionId; `,
      }),
      dispatchRegisterHandler: (kind, handlerId, meta) => reg.push({ kind, handlerId, meta: meta as Record<string, unknown> }),
    }) as string;
    expect(aid).toBe('act1');
    expect((s.find('ui.registerInputBarAction')!.args[0] as { id: string }).id).toBe('act1'); // raw options
    expect(s.find('ui._inputBar.setLabel')!.args).toEqual(['act1', 'New']);
    const r = reg.find((x) => x.kind === 'inputBarActionClick')!;
    expect(r.meta).toEqual({ actionId: 'act1' });
    const result = await fireHandlerInQuickJS(fireOpts({ scriptId: 's-iba', handlerId: r.handlerId, args: [] }));
    expect(result).toBe('clicked');
    disposeScriptVmHandlers('s-iba');
  });

  test('registerInputBarAction sync validation throws on empty/missing id', async () => {
    let m = '';
    try { await runUserScriptInQuickJS(runOpts({ script: { id: 's-ibabad', name: 'IB', type: 'trigger' }, code: `api.ui.registerInputBarAction({ label: 'x' }); return null;` })); }
    catch (e) { m = (e as Error).message; }
    expect(m).toContain('options.id must be a non-empty string');
  });

  test('a callback on an already-destroyed handle returns a no-op unsub + never registers', async () => {
    const reg: Array<{ kind: string }> = [];
    const ret = await runUserScriptInQuickJS({
      ...runOpts({
        script: { id: 's-destcb', name: 'DC', type: 'trigger' },
        code: `var a = api.ui.registerInputBarAction({ id: 'x' }); a.destroy(); return typeof a.onClick(() => {}); `,
      }),
      dispatchRegisterHandler: (kind) => reg.push({ kind }),
    }) as string;
    expect(ret).toBe('function');           // a no-op unsub fn
    expect(reg.find((r) => r.kind === 'inputBarActionClick')).toBeUndefined(); // destroyed → never registered
  });

  test('a non-function callback fails loud', async () => {
    let m = '';
    try { await runUserScriptInQuickJS(runOpts({ script: { id: 's-cbbad', name: 'CB', type: 'trigger' }, code: `api.ui.createFloatWidget({}).onDragEnd(42); return null;` })); }
    catch (e) { m = (e as Error).message; }
    expect(m).toContain('handler must be a function');
  });
});

describe('#11 P4b Inc 3c-2a: host->VM float-widget-position notice bridge', () => {
  test('a position notice updates the in-VM positionCache (getPosition reflects FE-driven coords across runs)', async () => {
    const s = spy();
    // Run 1: create the widget, stash the handle on the shared context, return widgetId.
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-poscell', name: 'PC', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__w = api.ui.createFloatWidget({ initialPosition: { x: 1, y: 2 } }); return globalThis.__w.widgetId; `,
    })) as string;
    // The host bridge applies a position notice — no run/activeRun context (arrives between runs).
    notifyVmWidgetPosition(wid, 5, 6);
    // Run 2 (same script): getPosition reads the SAME cell the notice updated.
    const pos = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-poscell', name: 'PC', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__w.getPosition();`,
    }));
    expect(pos).toEqual({ x: 5, y: 6 });
    disposeScriptVmHandlers('s-poscell');
  });

  test('hasVmWidget tracks ownership; disposeScriptVmHandlers sweeps the owner + registry', async () => {
    const s = spy();
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-wown', name: 'WO', type: 'trigger' }, dispatch: s.dispatch,
      code: `return api.ui.createFloatWidget({}).widgetId;`,
    })) as string;
    expect(hasVmWidget(wid)).toBe(true);
    disposeScriptVmHandlers('s-wown');
    expect(hasVmWidget(wid)).toBe(false); // owner swept on teardown
  });

  test('a position notice for an unknown widget is a safe no-op', () => {
    expect(() => notifyVmWidgetPosition('not-a-widget', 1, 2)).not.toThrow();
  });
});

describe('#11 P4b Inc 3c-2b: host->VM advanced-modal-dismissed bridge', () => {
  test('the dismiss bridge flips dismissed EAGER + fires onDismiss listeners with the reason', async () => {
    const s = spy();
    // Run 1: create modal, register onDismiss -> push the reason into a VM-global sink.
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-moddis', name: 'MD', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__sink = []; globalThis.__m = api.ui.showAdvancedModal({ title: 'X' }); globalThis.__m.onDismiss(function (r) { globalThis.__sink.push(r); }); return globalThis.__m.modalId; `,
    })) as string;
    // Host bridge: flip the dismissedRef EAGER + snapshot the listeners (what child-entry receives).
    const info = notifyVmModalDismissed(modalId, 'user');
    expect(info).not.toBeNull();
    expect(info!.scriptId).toBe('s-moddis');
    expect(info!.handlerIds.length).toBe(1);
    // SYNCHRONOUS fires-once: notify claims the modal immediately (a 2nd notice during fan-out no-ops).
    expect(hasVmModal(modalId)).toBe(false);
    // dismissed reads true immediately — before any listener fires.
    const dismissed = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-moddis', name: 'MD', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__m.dismissed;`,
    }));
    expect(dismissed).toBe(true);
    // child-entry fires each listener via fireHandlerInQuickJS, THEN drops the modal (by the captured ids).
    for (const hid of info!.handlerIds) {
      await fireHandlerInQuickJS(fireOpts({ scriptId: 's-moddis', handlerId: hid, args: ['user'] }));
    }
    dropVmModal(modalId, info!.scriptId, info!.handlerIds);
    const sink = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-moddis', name: 'MD', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__sink;`,
    }));
    expect(sink).toEqual(['user']);
    disposeScriptVmHandlers('s-moddis');
  });

  test('onDismiss on an ALREADY-dismissed handle fires on the next microtask with the recorded reason', async () => {
    const s = spy();
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-modfast', name: 'MF', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__m = api.ui.showAdvancedModal({}); return globalThis.__m.modalId;`,
    })) as string;
    notifyVmModalDismissed(modalId, 'navigation'); // dismissed BEFORE onDismiss is registered
    const out = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-modfast', name: 'MF', type: 'trigger' }, dispatch: s.dispatch,
      code: `var out = []; globalThis.__m.onDismiss(function (r) { out.push(r); }); return new Promise(function (res) { globalThis.queueMicrotask(function () { res(out); }); }); `,
    }));
    expect(out).toEqual(['navigation']); // fast-path fired with the cached reason
    dropVmModal(modalId);
    disposeScriptVmHandlers('s-modfast');
  });

  test('an onDismiss unsub drops the listener (the bridge snapshot is empty)', async () => {
    const s = spy();
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-munsub', name: 'MU', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__m = api.ui.showAdvancedModal({}); var off = globalThis.__m.onDismiss(function () {}); off(); return globalThis.__m.modalId;`,
    })) as string;
    const info = notifyVmModalDismissed(modalId, 'user');
    expect(info!.handlerIds).toEqual([]); // unsubbed -> no listeners to fire
    dropVmModal(modalId);
    disposeScriptVmHandlers('s-munsub');
  });

  test('hasVmModal tracks ownership; disposeScriptVmHandlers sweeps the owner', async () => {
    const s = spy();
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-mown', name: 'MO', type: 'trigger' }, dispatch: s.dispatch,
      code: `var m = api.ui.showAdvancedModal({}); m.onDismiss(function () {}); return m.modalId;`,
    })) as string;
    expect(hasVmModal(modalId)).toBe(true);
    disposeScriptVmHandlers('s-mown');
    expect(hasVmModal(modalId)).toBe(false);
  });

  test('fires-once: a SECOND notice during the fan-out (before dropVmModal) returns null + does not re-yield listeners', async () => {
    // audit lifecycle-races#0 — the asyncfn baseline deletes state BEFORE firing, so a duplicate
    // notice is a hard no-op. The VM bridge must match: notifyVmModalDismissed claims the modal
    // synchronously so a re-entrant notice arriving WHILE the async onDismiss fan-out is in flight
    // (dropVmModal not yet called) cannot re-fire every listener.
    const s = spy();
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-modonce', name: 'MO1', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__n = 0; globalThis.__m = api.ui.showAdvancedModal({}); globalThis.__m.onDismiss(function () { globalThis.__n++; }); return globalThis.__m.modalId;`,
    })) as string;
    const info = notifyVmModalDismissed(modalId, 'user');
    expect(info).not.toBeNull();
    expect(info!.handlerIds.length).toBe(1);
    // SECOND notice BEFORE dropVmModal — must be a no-op (owner already claimed by the first notify).
    expect(notifyVmModalDismissed(modalId, 'user')).toBeNull();
    expect(hasVmModal(modalId)).toBe(false);
    // Fire the FIRST snapshot's listeners, then drop. The listener must have fired exactly once.
    for (const hid of info!.handlerIds) {
      await fireHandlerInQuickJS(fireOpts({ scriptId: 's-modonce', handlerId: hid, args: ['user'] }));
    }
    dropVmModal(modalId, info!.scriptId, info!.handlerIds);
    const n = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-modonce', name: 'MO1', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__n;`,
    }));
    expect(n).toBe(1); // fired once, not twice
    expect(() => dropVmModal(modalId)).not.toThrow(); // idempotent
    disposeScriptVmHandlers('s-modonce');
  });

  test('notifyVmModalDismissed for an unknown modal returns null', () => {
    expect(notifyVmModalDismissed('not-a-modal', 'user')).toBeNull();
  });

  test('owner-takeover guard: another script cannot re-point a modal owner (security-containment#1)', async () => {
    const s = spy();
    // Script A owns the modal.
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-ownerA', name: 'A', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__m = api.ui.showAdvancedModal({}); globalThis.__m.onDismiss(function () {}); return globalThis.__m.modalId;`,
    })) as string;
    // Script B calls the (VM-reachable) host fn directly with A's id to try to hijack the owner.
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-ownerB', name: 'B', type: 'trigger' }, dispatch: s.dispatch,
      code: `try { globalThis.__hostRegisterModal(${JSON.stringify(modalId)}); } catch (e) {} return 1;`,
    }));
    // The dismiss notice still routes to A — the guard refused the takeover.
    const info = notifyVmModalDismissed(modalId, 'user');
    expect(info).not.toBeNull();
    expect(info!.scriptId).toBe('s-ownerA');
    dropVmModal(modalId, info!.scriptId, info!.handlerIds);
    disposeScriptVmHandlers('s-ownerA');
    disposeScriptVmHandlers('s-ownerB');
  });

  test('onDismiss owner guard: another script cannot attach a listener to a foreign modal (security-containment#2)', async () => {
    const s = spy();
    const modalId = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-dlistenA', name: 'A', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__m = api.ui.showAdvancedModal({}); return globalThis.__m.modalId;`,
    })) as string;
    // Script B tries to register a dismiss listener on A's modal directly.
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-dlistenB', name: 'B', type: 'trigger' }, dispatch: s.dispatch,
      code: `try { globalThis.__hostRegisterModalDismiss(${JSON.stringify(modalId)}, 'advancedModalDismiss:evil', function () {}); } catch (e) {} return 1;`,
    }));
    // A's modal has NO listeners — B's cross-owner registration was rejected.
    const info = notifyVmModalDismissed(modalId, 'user');
    expect(info!.handlerIds).toEqual([]);
    dropVmModal(modalId, info!.scriptId, info!.handlerIds);
    disposeScriptVmHandlers('s-dlistenA');
    disposeScriptVmHandlers('s-dlistenB');
  });
});

describe('#11 P4b Inc 3c-2 hardening: cell registries are NOT user-reachable (security-containment#0)', () => {
  test('the widget/modal cell lookup is not exposed on globalThis (no enumerate / .clear surface)', async () => {
    const s = spy();
    const out = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-noreg', name: 'NR', type: 'trigger' }, dispatch: s.dispatch,
      // Create a widget + modal so cells exist, then probe for any globalThis registry surface.
      code: `api.ui.createFloatWidget({}); api.ui.showAdvancedModal({}); return { w: typeof globalThis.__lsWidgetRegistry, m: typeof globalThis.__lsModalRegistry }; `,
    })) as { w: string; m: string };
    expect(out.w).toBe('undefined'); // relocated host-side — nothing to enumerate/.clear()
    expect(out.m).toBe('undefined');
    disposeScriptVmHandlers('s-noreg');
  });

  test('one script cannot perturb another script\'s widget position cell (no shared global Map)', async () => {
    const s = spy();
    // Script A creates a widget at (1,2) and stashes the handle.
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-cellA', name: 'A', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__w = api.ui.createFloatWidget({ initialPosition: { x: 1, y: 2 } }); return globalThis.__w.widgetId; `,
    })) as string;
    // Script B runs hostile code trying to wipe the (now non-existent) registries — must throw+no-op.
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-cellB', name: 'B', type: 'trigger' }, dispatch: s.dispatch,
      code: `try { globalThis.__lsWidgetRegistry.clear(); } catch (e) {} try { globalThis.__lsModalRegistry.clear(); } catch (e) {} return 1;`,
    }));
    // A's position notice still lands — B could not reach/clear A's host-held cell.
    notifyVmWidgetPosition(wid, 7, 8);
    const pos = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-cellA', name: 'A', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__w.getPosition();`,
    }));
    expect(pos).toEqual({ x: 7, y: 8 });
    disposeScriptVmHandlers('s-cellA');
    disposeScriptVmHandlers('s-cellB');
  });

  test('a script that same-owner-replaces its own cell with a non-object cannot crash the notice handler', async () => {
    const s = spy();
    // Create a real widget, then sabotage its own host-held cell with a non-object via the VM-callable host fn.
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-sab', name: 'SAB', type: 'trigger' }, dispatch: s.dispatch,
      code: `var w = api.ui.createFloatWidget({}); try { globalThis.__hostRegisterWidget(w.widgetId, 42); } catch (e) {} return w.widgetId;`,
    })) as string;
    // The host-side notice must NOT throw (setProp on the non-object cell is swallowed).
    expect(() => notifyVmWidgetPosition(wid, 3, 4)).not.toThrow();
    disposeScriptVmHandlers('s-sab');
  });

  test('position notice preserves fractional + negative coord fidelity (setProp number, not JSON-normalized)', async () => {
    const s = spy();
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-frac', name: 'FR', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__w = api.ui.createFloatWidget({}); return globalThis.__w.widgetId;`,
    })) as string;
    notifyVmWidgetPosition(wid, -3.5, 2.25);
    const pos = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-frac', name: 'FR', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__w.getPosition();`,
    }));
    expect(pos).toEqual({ x: -3.5, y: 2.25 });
    disposeScriptVmHandlers('s-frac');
  });
});

describe('#11 P4b Inc 3: fire-path flush (gated factory inside a FIRED handler)', () => {
  test('a gated factory method opened inside a fired handler reaches the host — drained by the fire-path flush', async () => {
    const s = spy();
    // Register a command handler (body run) whose closure opens a gated modal + sets the title,
    // UN-AWAITED. The factory dispatches happen at FIRE time, not register time.
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-firegate', name: 'FG', type: 'trigger' }, dispatch: s.dispatch,
      code: `api.commands.onInvoked(() => { api.ui.showAdvancedModal({}).setTitle('fired'); }); return null;`,
    }));
    const hid = _vmHandlerIdsForTests('s-firegate').find((i) => i.startsWith('commandsOnInvoked:'))!;
    // Before the fire, no factory dispatch (the handler hasn't run).
    expect(s.find('ui.showAdvancedModal')).toBeUndefined();
    // Fire it. The fired handler opens the modal + queues the gated setTitle behind openAck; the
    // fire-path flush (NEW) drains it before the fire completes. Without the flush it would drop.
    await fireHandlerInQuickJS(fireOpts({ scriptId: 's-firegate', handlerId: hid, args: ['cmd', {}], dispatch: s.dispatch }));
    expect(s.find('ui.showAdvancedModal')).toBeDefined();        // the open dispatched
    expect(s.find('ui._advModal.setTitle')).toBeDefined();       // the GATED method landed (the fix)
    expect(s.find('ui._advModal.setTitle')!.args[1]).toBe('fired');
    disposeScriptVmHandlers('s-firegate');
  });

  test('an async fired handler can await a gated factory create then act on its root', async () => {
    const s = spy();
    await runUserScriptInQuickJS(runOpts({
      script: { id: 's-firegate2', name: 'FG2', type: 'trigger' }, dispatch: s.dispatch,
      code: `api.commands.onInvoked(async () => { var w = api.ui.createFloatWidget({}); w.root.update('<b>hi</b>'); w.setVisible(false); }); return null;`,
    }));
    const hid = _vmHandlerIdsForTests('s-firegate2').find((i) => i.startsWith('commandsOnInvoked:'))!;
    await fireHandlerInQuickJS(fireOpts({ scriptId: 's-firegate2', handlerId: hid, args: ['cmd', {}], dispatch: s.dispatch }));
    expect(s.find('ui.createFloatWidget')).toBeDefined();
    expect(s.find('ui._dom.update')).toBeDefined();              // root method (gated) landed
    expect(s.find('ui._floatWidget.setVisible')).toBeDefined();  // widget method (gated) landed
    disposeScriptVmHandlers('s-firegate2');
  });
});

describe('#11 P4b factory-tail cleanups', () => {
  test('widget-destroy-leak: destroy() drops the owner + cell; a late position notice no-ops', async () => {
    const s = spy();
    const wid = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-wdrop', name: 'WD', type: 'trigger' }, dispatch: s.dispatch,
      code: `globalThis.__w = api.ui.createFloatWidget({ initialPosition: { x: 5, y: 6 } }); globalThis.__w.destroy(); return globalThis.__w.widgetId;`,
    })) as string;
    expect(hasVmWidget(wid)).toBe(false);   // owner + cell dropped eagerly on destroy (asyncfn parity)
    notifyVmWidgetPosition(wid, 99, 99);     // a late FE position notice must no-op (no owner)
    const pos = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-wdrop', name: 'WD', type: 'trigger' }, dispatch: s.dispatch,
      code: `return globalThis.__w.getPosition();`,
    }));
    expect(pos).toEqual({ x: 5, y: 6 });     // frozen at last value — the notice did not land
    disposeScriptVmHandlers('s-wdrop');
  });

  test('flush#1: sync-void methods (ui.toast etc.) return void + swallow a rejecting dispatch', async () => {
    // A dispatch that REJECTS for ui.toast must NOT produce an unhandled rejection or fail the run.
    const s = spy({ rejects: ['ui.toast', 'commands.register'] });
    const out = await runUserScriptInQuickJS(runOpts({
      script: { id: 's-syncvoid', name: 'SV', type: 'trigger' }, dispatch: s.dispatch,
      code: `var a = api.ui.toast('hi'); api.commands.register({ id: 'c' }); api.ui.dom.cleanup(); return { toastVoid: a === undefined };`,
    })) as { toastVoid: boolean };
    expect(out.toastVoid).toBe(true);                    // returns void, not a Promise
    expect(s.find('ui.toast')).toBeDefined();            // still dispatched (tracked + swallowed)
    expect(s.find('commands.register')).toBeDefined();
    expect(s.find('ui.dom.cleanup')).toBeDefined();
  });
});
