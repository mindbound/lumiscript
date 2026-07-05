/**
 * #11 P7-F4 (Tier 0) — self-reentrant-invoke fast-reject.
 *
 * A quickjs run that `await`s its OWN tool (api.tools.invoke of a tool it registered) would deadlock:
 * the tool-handler fire (fireHandlerInQuickJS) blocks on the per-script runChain the caller run still
 * holds, and the caller can't release it until the fire returns → deadlock → run-timeout → proc.fail →
 * whole-child respawn. Tier 0 detects the self-invoke (callerScriptId === owner AND the owner's own run
 * holds the lock) and FAST-REJECTS the fire with a `ReentrantToolInvokeError` BEFORE claiming the lock,
 * so the caller's `await api.tools.invoke(...)` throws a catchable error instead of deadlocking. (Full
 * parity — the invoke returning a value — awaits per-run isolation, P7-H1.)
 *
 * These are engine-unit tests: fireHandlerInQuickJS's reject gate is handler-kind-agnostic, so we use a
 * cheap commands.onInvoked handler; in production only the api.tools.invoke path sets `callerScriptId`.
 * The "owner's run holds the lock" precondition is created by PARKING a body-run on a never-resolving
 * dispatch (its activeRun + runChain stay held) — the exact state a real self-invoke is in.
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
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

function runOpts(scriptId: string, code: string, dispatch?: QuickJSRunOptions['dispatch']): QuickJSRunOptions {
  return {
    code, dispatch: dispatch ?? (async () => undefined), data: {},
    script: { id: scriptId, name: scriptId, type: 'trigger' },
    console: noopConsole, timeoutMs: 5_000, serializeError,
  };
}
function fireOpts(over: Partial<QuickJSFireOptions> & { scriptId: string; handlerId: string }): QuickJSFireOptions {
  return {
    scriptId: over.scriptId, handlerId: over.handlerId, args: over.args ?? [], timeoutMs: 5_000,
    dispatch: over.dispatch ?? (async () => undefined), console: noopConsole, serializeError,
    callerScriptId: over.callerScriptId,
  };
}
async function fireResult(opts: QuickJSFireOptions): Promise<{ ok: true; value: unknown } | { ok: false; err: Error }> {
  try { return { ok: true, value: await fireHandlerInQuickJS(opts) }; }
  catch (e) { return { ok: false, err: e as Error }; }
}

describe('#11 P7-F4 Tier 0 self-reentrant-invoke fast-reject', () => {
  test('a self-invoke while the owner\'s own run holds the lock fast-rejects (no deadlock)', async () => {
    _setContextModelForTests('per-script');
    // 1. Register a handler for X via a completed run.
    await runUserScriptInQuickJS(runOpts('rz-X', `api.commands.onInvoked(() => 'r'); return null;`));
    const hid = _vmHandlerIdsForTests('rz-X').find((i) => i.startsWith('commandsOnInvoked:'))!;
    // 2. PARK a body-run of X on a never-resolving dispatch — it holds activeRun + the runChain.
    let unpark: () => void = () => {};
    const parkDispatch = (): Promise<unknown> => new Promise((res) => { unpark = () => res(undefined); });
    const parked = runUserScriptInQuickJS(runOpts('rz-X', `await api.chat.getMessages(); return 'done';`, parkDispatch));
    await sleep(25); // let it claim activeRun + park at the dispatch
    // 3. Fire the handler as a SELF-reentrant invoke (callerScriptId === owner). It must reject FAST —
    //    if it hung on `await prior` (the parked run's runChain) this would time out the test.
    const res = await fireResult(fireOpts({ scriptId: 'rz-X', handlerId: hid, callerScriptId: 'rz-X' }));
    expect(res.ok).toBe(false);
    expect((res as { err: Error }).err.name).toBe('ReentrantToolInvokeError');
    // cleanup: unpark so the body-run completes + release everything.
    unpark();
    await parked;
    disposeScriptVmHandlers('rz-X');
    disposeContextForScript('rz-X', true);
  });

  test('a self-invoke with NO active run fires normally (the gate needs the owner\'s run to hold the lock)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('rz-N1', `api.commands.onInvoked(() => 'fired'); return null;`));
    const hid = _vmHandlerIdsForTests('rz-N1').find((i) => i.startsWith('commandsOnInvoked:'))!;
    // callerScriptId === owner, but no run is active (sc.activeRun undefined) → NOT a deadlock → fires.
    const res = await fireResult(fireOpts({ scriptId: 'rz-N1', handlerId: hid, callerScriptId: 'rz-N1' }));
    expect(res.ok).toBe(true);
    expect((res as { value: unknown }).value).toBe('fired');
    disposeScriptVmHandlers('rz-N1');
    disposeContextForScript('rz-N1', true);
  });

  test('a fire with a DIFFERENT callerScriptId (benign cross-script) is not rejected while a run is active', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('rz-N2', `api.commands.onInvoked(() => 'fired'); return null;`));
    const hid = _vmHandlerIdsForTests('rz-N2').find((i) => i.startsWith('commandsOnInvoked:'))!;
    // No active run here (so it fires rather than serializing) — the point is callerScriptId='other'
    // !== owner does NOT trip the self-reentrant gate.
    const res = await fireResult(fireOpts({ scriptId: 'rz-N2', handlerId: hid, callerScriptId: 'some-other-script' }));
    expect(res.ok).toBe(true);
    expect((res as { value: unknown }).value).toBe('fired');
    disposeScriptVmHandlers('rz-N2');
    disposeContextForScript('rz-N2', true);
  });

  test('a normal fire with no callerScriptId (host/event-initiated) is never rejected', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('rz-N3', `api.commands.onInvoked(() => 'fired'); return null;`));
    const hid = _vmHandlerIdsForTests('rz-N3').find((i) => i.startsWith('commandsOnInvoked:'))!;
    const res = await fireResult(fireOpts({ scriptId: 'rz-N3', handlerId: hid })); // callerScriptId undefined
    expect(res.ok).toBe(true);
    expect((res as { value: unknown }).value).toBe('fired');
    disposeScriptVmHandlers('rz-N3');
    disposeContextForScript('rz-N3', true);
  });
});
