/**
 * #11 P5-2 — in-VM setTimeout/setInterval under the QuickJS engine.
 *
 * A timer is CHILD-LOCAL: the in-VM setTimeout registers the callback (dup'd into vmHandlerHandles by a
 * VM-generated timerId, NO parent IPC) + calls the injected VmTimerScheduler; the child arms a real Bun
 * timer whose expiry fires the callback via fireHandlerInQuickJS on its own runChain entry. These unit
 * tests drive the VM + host-fn contract with a MOCK scheduler (deterministic — no real timing): they
 * assert the schedule/clear calls, the in-VM registration + macrotask semantics, the context pinning,
 * and that a fired callback runs via fireHandlerInQuickJS. The real Bun-timer → fireVmTimer chain is
 * exercised end-to-end in e2e-timers.test.ts.
 *
 * setup.ts beforeEach runs _disposeContextForTests() + setVmTimerScheduler(undefined).
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  disposeContextForScript,
  isContextPinned,
  setVmTimerScheduler,
  _setContextModelForTests,
  _vmHandlerIdsForTests,
  type QuickJSRunOptions,
  type QuickJSFireOptions,
  type VmTimerScheduler,
} from '../../src/script-runner/qjs-engine.js';

const noopConsole = { log() {}, warn() {}, error() {}, info() {} };
const serializeError = (e: unknown) => ({ name: e instanceof Error ? e.name : 'Error', message: e instanceof Error ? e.message : String(e) });

interface Call { method: string; args: unknown[] }
function recorder(): { calls: Call[]; dispatch: QuickJSRunOptions['dispatch'] } {
  const calls: Call[] = [];
  return { calls, dispatch: async (method: string, args: unknown[]) => { calls.push({ method, args }); return undefined; } };
}
interface SchedCall { scriptId: string; timerId: string; ms: number; repeat: boolean }
function mockScheduler(): { scheduled: SchedCall[]; cleared: Array<{ scriptId: string; timerId: string }>; scheduler: VmTimerScheduler } {
  const scheduled: SchedCall[] = [];
  const cleared: Array<{ scriptId: string; timerId: string }> = [];
  return {
    scheduled, cleared,
    scheduler: {
      schedule: (scriptId, timerId, ms, repeat) => { scheduled.push({ scriptId, timerId, ms, repeat }); },
      clear:    (scriptId, timerId) => { cleared.push({ scriptId, timerId }); },
    },
  };
}
function runOpts(scriptId: string, code: string, dispatch: QuickJSRunOptions['dispatch']): QuickJSRunOptions {
  return { code, dispatch, data: {}, script: { id: scriptId, name: scriptId, type: 'trigger' }, console: noopConsole, timeoutMs: 5_000, serializeError };
}
function fireOpts(scriptId: string, handlerId: string, dispatch: QuickJSFireOptions['dispatch']): QuickJSFireOptions {
  return { scriptId, handlerId, args: [], timeoutMs: 5_000, dispatch, console: noopConsole, serializeError };
}
const timerIds = (scriptId: string): string[] => _vmHandlerIdsForTests(scriptId).filter((i) => i.startsWith('timer:'));

describe('#11 P5-2 in-VM timers', () => {
  test('setTimeout registers the callback in-VM + schedules (id, ms, repeat=false) + returns the id', async () => {
    _setContextModelForTests('per-script');
    const m = mockScheduler(); setVmTimerScheduler(m.scheduler);
    const rec = recorder();
    const id = await runUserScriptInQuickJS(runOpts('t-set',
      `return setTimeout(() => api.chat.sendMessage('fired'), 50);`, rec.dispatch)) as string;
    expect(typeof id).toBe('string');
    expect(id.startsWith('timer:')).toBe(true);
    expect(m.scheduled).toHaveLength(1);
    expect(m.scheduled[0]).toEqual({ scriptId: 't-set', timerId: id, ms: 50, repeat: false });
    expect(timerIds('t-set')).toContain(id);   // callback dup'd into the VM registry
    expect(isContextPinned('t-set')).toBe(true); // a pending timer pins the context (no idle eviction)
    disposeScriptVmHandlers('t-set'); disposeContextForScript('t-set', true);
  });

  test('the scheduled callback fires with no args via fireHandlerInQuickJS', async () => {
    _setContextModelForTests('per-script');
    const m = mockScheduler(); setVmTimerScheduler(m.scheduler);
    await runUserScriptInQuickJS(runOpts('t-fire',
      `setTimeout(() => api.chat.sendMessage('fired'), 10); return null;`, recorder().dispatch));
    const id = m.scheduled[0]!.timerId;
    const fireRec = recorder();
    await fireHandlerInQuickJS(fireOpts('t-fire', id, fireRec.dispatch)); // mirrors the child's Bun-timer expiry
    expect(fireRec.calls.some((c) => c.method === 'chat.sendMessage' && c.args[0] === 'fired')).toBe(true);
    disposeScriptVmHandlers('t-fire'); disposeContextForScript('t-fire', true);
  });

  test('setInterval schedules with repeat=true', async () => {
    _setContextModelForTests('per-script');
    const m = mockScheduler(); setVmTimerScheduler(m.scheduler);
    await runUserScriptInQuickJS(runOpts('t-int', `setInterval(() => {}, 100); return null;`, recorder().dispatch));
    expect(m.scheduled[0]!.repeat).toBe(true);
    expect(m.scheduled[0]!.ms).toBe(100);
    disposeScriptVmHandlers('t-int'); disposeContextForScript('t-int', true);
  });

  test('clearTimeout(id) calls scheduler.clear + disposes the dup (unpins the context)', async () => {
    _setContextModelForTests('per-script');
    const m = mockScheduler(); setVmTimerScheduler(m.scheduler);
    await runUserScriptInQuickJS(runOpts('t-clear',
      `const id = setTimeout(() => {}, 50); clearTimeout(id); return null;`, recorder().dispatch));
    expect(m.cleared).toHaveLength(1);
    expect(m.cleared[0]!.timerId).toBe(m.scheduled[0]!.timerId);
    expect(timerIds('t-clear')).toHaveLength(0); // dup disposed
    expect(isContextPinned('t-clear')).toBe(false);
    disposeContextForScript('t-clear', true);
  });

  test('setTimeout(fn, 0) is a MACROTASK — the callback does NOT run synchronously inside the run', async () => {
    _setContextModelForTests('per-script');
    const m = mockScheduler(); setVmTimerScheduler(m.scheduler);
    const rec = recorder();
    await runUserScriptInQuickJS(runOpts('t-macro',
      `setTimeout(() => api.chat.sendMessage('late'), 0); api.chat.sendMessage('sync'); return null;`, rec.dispatch));
    // Only the synchronous dispatch happened during the run; the timer callback is scheduled, not inlined.
    expect(rec.calls.some((c) => c.args[0] === 'sync')).toBe(true);
    expect(rec.calls.some((c) => c.args[0] === 'late')).toBe(false);
    expect(m.scheduled).toHaveLength(1);
    expect(m.scheduled[0]!.ms).toBe(0);
    disposeScriptVmHandlers('t-macro'); disposeContextForScript('t-macro', true);
  });

  test('a non-function callback throws a clear TypeError (setTimeout/setInterval)', async () => {
    _setContextModelForTests('per-script');
    setVmTimerScheduler(mockScheduler().scheduler);
    const r = await runUserScriptInQuickJS(runOpts('t-bad',
      `try { setTimeout(42, 10); return 'NO-THROW'; } catch (e) { return e.name + ':' + (e.message.indexOf('callback is not a function') >= 0); }`,
      recorder().dispatch));
    expect(r).toBe('TypeError:true');
    disposeContextForScript('t-bad', true);
  });

  test('teardown sweeps a still-pending timer dup', async () => {
    _setContextModelForTests('per-script');
    setVmTimerScheduler(mockScheduler().scheduler);
    await runUserScriptInQuickJS(runOpts('t-teardown', `setInterval(() => {}, 100); return null;`, recorder().dispatch));
    expect(timerIds('t-teardown')).toHaveLength(1);
    disposeScriptVmHandlers('t-teardown');
    expect(timerIds('t-teardown')).toHaveLength(0);
    disposeContextForScript('t-teardown', true);
  });
});
