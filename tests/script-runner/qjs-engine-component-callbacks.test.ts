/**
 * #11 P5-1 — component value-callbacks under the QuickJS engine.
 *
 * Component mount-options (onChange/onCommit/onToggle/...) carry FUNCTION callbacks the marshaler
 * can't encode — pre-P5-1 a mount threw "functions/callbacks are not yet marshaled" (field-test
 * Finding 3). The in-VM ui.components.mount* interceptor mirrors api-proxy.ts dispatchComponentMount:
 * it strips each fn out, registers it under the EXISTING componentCallback kind (dup'd into
 * vmHandlerHandles via __hostRegisterComponentCallback — NO register-handler IPC, since the parent
 * routes a fired component_callback via the componentCallbackRoutes map it builds from the mount's
 * `_callbacks`), threads the name->handlerId map, and dispatches the fn-less options. The fire path is
 * the generic sendRunHandlerRequest(... 'componentCallback', [value]) → hasVmHandler → fireVmHandler,
 * exercised here directly via fireHandlerInQuickJS.
 *
 * setup.ts beforeEach runs _disposeContextForTests() (drops the pool + resets contextModel).
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  disposeContextForScript,
  _setContextModelForTests,
  _vmHandlerIdsForTests,
  type QuickJSRunOptions,
  type QuickJSFireOptions,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

interface Call { method: string; args: unknown[] }
function recorder(): { calls: Call[]; dispatch: QuickJSRunOptions['dispatch'] } {
  const calls: Call[] = [];
  return { calls, dispatch: async (method: string, args: unknown[]) => { calls.push({ method, args }); return undefined; } };
}
function runOpts(scriptId: string, code: string, dispatch: QuickJSRunOptions['dispatch']): QuickJSRunOptions {
  return { code, dispatch, data: {}, script: { id: scriptId, name: scriptId, type: 'trigger' }, console: noopConsole, timeoutMs: 5_000, serializeError };
}
function fireOpts(scriptId: string, handlerId: string, args: unknown[], dispatch: QuickJSFireOptions['dispatch']): QuickJSFireOptions {
  return { scriptId, handlerId, args, timeoutMs: 5_000, dispatch, console: noopConsole, serializeError };
}
const cbIds = (scriptId: string): string[] => _vmHandlerIdsForTests(scriptId).filter((i) => i.startsWith('componentCallback:'));

describe('#11 P5-1 component value-callbacks', () => {
  test('mountSwitch strips onChange to _callbacks, registers it in-VM, and dispatches fn-less options', async () => {
    _setContextModelForTests('per-script');
    const rec = recorder();
    await runUserScriptInQuickJS(runOpts('cc-mount',
      `api.ui.components.mountSwitch({ id: 't' }, { label: 'T', value: false, onChange: (v) => api.chat.sendMessage('x:' + v) }); return null;`,
      rec.dispatch));
    const mount = rec.calls.find((c) => c.method === 'ui.components.mountSwitch');
    expect(mount).toBeDefined();
    const opts = mount!.args[1] as Record<string, unknown>;
    expect(opts.onChange).toBeUndefined();          // fn stripped — the marshaler never sees it
    expect(opts.label).toBe('T');                   // non-fn props preserved
    expect(typeof opts._componentId).toBe('string');
    const callbacks = opts._callbacks as Record<string, string>;
    expect(typeof callbacks.onChange).toBe('string');
    expect(cbIds('cc-mount')).toContain(callbacks.onChange!); // registered in-VM under that id
    disposeScriptVmHandlers('cc-mount'); disposeContextForScript('cc-mount', true);
  });

  test('a fired componentCallback runs the in-VM fn with the value (dispatchComponentCallback path)', async () => {
    _setContextModelForTests('per-script');
    const rec = recorder();
    await runUserScriptInQuickJS(runOpts('cc-fire',
      `api.ui.components.mountSwitch({ id: 't' }, { onChange: (v) => api.chat.sendMessage('changed:' + v) }); return null;`,
      rec.dispatch));
    const handlerId = (rec.calls.find((c) => c.method === 'ui.components.mountSwitch')!.args[1] as { _callbacks: Record<string, string> })._callbacks.onChange!;
    // Fire exactly as the host does: sendRunHandlerRequest(... 'componentCallback', [value]).
    const fireRec = recorder();
    await fireHandlerInQuickJS(fireOpts('cc-fire', handlerId, [true], fireRec.dispatch));
    const cb = fireRec.calls.find((c) => c.method === 'chat.sendMessage');
    expect(cb).toBeDefined();
    expect(cb!.args[0]).toBe('changed:true'); // onChange ran with the boolean
    disposeScriptVmHandlers('cc-fire'); disposeContextForScript('cc-fire', true);
  });

  test('handle.destroy() eagerly disposes the callback dups', async () => {
    _setContextModelForTests('per-script');
    const rec = recorder();
    await runUserScriptInQuickJS(runOpts('cc-destroy',
      `const sw = api.ui.components.mountSwitch({ id: 't' }, { onChange: () => {}, onCommit: () => {} }); sw.destroy(); return null;`,
      rec.dispatch));
    expect(cbIds('cc-destroy').length).toBe(0); // both dups reaped by destroy()
    // destroy also dispatched the ui._components.destroy teardown.
    expect(rec.calls.some((c) => c.method === 'ui._components.destroy')).toBe(true);
    disposeContextForScript('cc-destroy', true);
  });

  test('script teardown sweeps callbacks that outlived their run (no destroy called)', async () => {
    _setContextModelForTests('per-script');
    const rec = recorder();
    await runUserScriptInQuickJS(runOpts('cc-teardown',
      `api.ui.components.mountSwitch({ id: 't' }, { onChange: () => {} }); return null;`,
      rec.dispatch));
    expect(cbIds('cc-teardown').length).toBe(1); // survives the run (persistent — pins the context)
    disposeScriptVmHandlers('cc-teardown');       // teardown sweep
    expect(cbIds('cc-teardown').length).toBe(0);
    disposeContextForScript('cc-teardown', true);
  });

  test('handle shapes: value (getValue), base (no getValue), collapsible (body + expand)', async () => {
    _setContextModelForTests('per-script');
    const rec = recorder();
    const shapes = await runUserScriptInQuickJS(runOpts('cc-shapes', `
      const sw = api.ui.components.mountSwitch({ id: 't' }, {});
      const bd = api.ui.components.mountBadge({ id: 't' }, { text: 'hi' });
      const sec = api.ui.components.mountCollapsibleSection({ id: 't' }, { title: 'S' });
      return {
        valueHasGetValue: typeof sw.getValue === 'function' && typeof sw.update === 'function',
        baseNoGetValue:   typeof bd.update === 'function' && bd.getValue === undefined,
        collapsibleBody:  typeof sec.body === 'object' && typeof sec.body.update === 'function'
                          && typeof sec.expand === 'function' && typeof sec.isExpanded === 'function',
        bodyId:           sec.body.id,
      };
    `, rec.dispatch)) as Record<string, unknown>;
    expect(shapes.valueHasGetValue).toBe(true);
    expect(shapes.baseNoGetValue).toBe(true);
    expect(shapes.collapsibleBody).toBe(true);
    // The collapsible threaded its body elementId so the canonical body DOMHandle shares the id.
    const secMount = rec.calls.find((c) => c.method === 'ui.components.mountCollapsibleSection');
    expect((secMount!.args[1] as Record<string, unknown>)._bodyElementId).toBe(shapes.bodyId);
    disposeScriptVmHandlers('cc-shapes'); disposeContextForScript('cc-shapes', true);
  });

  test('a mount with NO function options registers nothing + still returns a usable handle', async () => {
    _setContextModelForTests('per-script');
    const rec = recorder();
    const ok = await runUserScriptInQuickJS(runOpts('cc-nofn',
      `const b = api.ui.components.mountBadge({ id: 't' }, { text: 'hi' }); b.update({ text: 'bye' }); return typeof b.id === 'string';`,
      rec.dispatch));
    expect(ok).toBe(true);
    expect(cbIds('cc-nofn').length).toBe(0);
    const mount = rec.calls.find((c) => c.method === 'ui.components.mountBadge');
    expect(Object.keys((mount!.args[1] as { _callbacks: object })._callbacks).length).toBe(0);
    disposeContextForScript('cc-nofn', true);
  });
});
