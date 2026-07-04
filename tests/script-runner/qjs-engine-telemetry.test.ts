/**
 * #11 observability — engine telemetry counters + cross-worker aggregation.
 *
 * Covers the counter increments AT THEIR SITES (the ones reachable from an engine unit — cold-start,
 * in-VM OOM, evictions, over-cap-tolerated, self-invoke rejects) plus the `getEngineTelemetry()` live
 * pool snapshot and host-dispatcher's `aggregateEngineTelemetry` sum-vs-representative rules. The
 * child-entry attribution counters (quickjsRuns / asyncfnRuns / degradedRuns / timeouts) are exercised
 * end-to-end in e2e-coldstart-fallback.test.ts via the real dispatch path.
 *
 * setup.ts beforeEach runs _resetEngineTelemetryForTests() (zeros every counter + re-arms the over-cap
 * latch) and _disposeContextForTests() (drops the pool, resets contextModel to 'shared'), so each test
 * starts from a clean slate.
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  warmupQuickJS,
  evictIdleContext,
  disposeScriptVmHandlers,
  disposeContextForScript,
  getEngineTelemetry,
  noteEngineRun,
  noteDegradedRun,
  noteQuickjsRunError,
  noteQuickjsFireError,
  noteQuickjsTimeout,
  noteAsyncfnRunError,
  noteAsyncfnTimeout,
  _setContextModelForTests,
  _setPoolCapForTests,
  _setQuickJSAvailabilityForTests,
  _vmHandlerIdsForTests,
  type QuickJSRunOptions,
  type QuickJSFireOptions,
} from '../../src/script-runner/qjs-engine.js';
import { aggregateEngineTelemetry } from '../../src/script-runner/host-dispatcher.js';
import type { EngineTelemetry } from '../../src/types/script-runner-ipc.js';

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
describe('#11 observability — note* bumpers + getEngineTelemetry snapshot', () => {
  test('the note* helpers bump their counters and getEngineTelemetry reflects them', () => {
    noteEngineRun('quickjs'); noteEngineRun('quickjs'); noteEngineRun('asyncfn');
    noteDegradedRun();
    noteQuickjsRunError();
    noteQuickjsFireError(); noteQuickjsFireError();
    noteQuickjsTimeout();
    const t = getEngineTelemetry();
    expect(t.quickjsRuns).toBe(2);
    expect(t.asyncfnRuns).toBe(1);
    expect(t.degradedRuns).toBe(1);
    expect(t.quickjsRunErrors).toBe(1);
    expect(t.quickjsFireErrors).toBe(2);
    expect(t.quickjsTimeouts).toBe(1);
  });

  test('the asyncfn note* helpers bump their counters (parallel to the quickjs ones)', () => {
    noteAsyncfnRunError();
    noteAsyncfnTimeout(); noteAsyncfnTimeout();
    const t = getEngineTelemetry();
    expect(t.asyncfnRunErrors).toBe(1);
    expect(t.asyncfnTimeouts).toBe(2);
  });

  test('the live pool snapshot reads the shared-model defaults when quickjs is idle', () => {
    const t = getEngineTelemetry();
    expect(t.contextModel).toBe('shared');
    expect(t.liveContexts).toBe(0);
    expect(t.poolCap).toBe(8);
    expect(t.pinnedContexts).toBe(0);
    expect(t.reservedContexts).toBe(0);
    expect(t.perCtxLimitBytes).toBe(512 * 1024 * 1024);
    // No run has happened this test → every counter starts at 0 (reset by setup.ts).
    expect(t.quickjsRuns).toBe(0);
    expect(t.coldStartProbed).toBe(false);
  });

  test('warmupQuickJS records a one-time cold-start success', async () => {
    _setQuickJSAvailabilityForTests(undefined); // re-arm the real probe so the note fires
    expect(await warmupQuickJS()).toBe(true);
    const t = getEngineTelemetry();
    expect(t.coldStartProbed).toBe(true);
    expect(t.coldStartOk).toBe(true);
    expect(t.coldStartMs).toBeGreaterThanOrEqual(0);
  });
});

// NOTE: the inVmOom counter is asserted in qjs-engine-memory.test.ts, alongside the existing OOM /
// stack-overflow scenarios that produce it — duplicating the 100MB alloc here would both repeat that
// scenario AND (because the bad-state contexts would sit mid-file) trip QuickJS's debug
// `list_empty(gc_obj_list)` assertion when a later beforeEach disposes an OOM/stack-overflowed runtime.

describe('#11 observability — pool eviction + over-cap counters', () => {
  test('a real eviction bumps contextEvictions + lastEvictionAt', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('ev-A', `return 1;`));
    await runUserScriptInQuickJS(runOpts('ev-B', `return 2;`));
    expect(getEngineTelemetry().liveContexts).toBe(2);
    const before = Date.now();
    expect(evictIdleContext('ev-A')).toBe(true); // unpinned, not mid-run → evicts
    const t = getEngineTelemetry();
    expect(t.contextEvictions).toBe(1);
    expect(t.lastEvictionAt).toBeGreaterThanOrEqual(before);
    expect(t.liveContexts).toBe(1);
    disposeContextForScript('ev-B', true);
  });

  test('a fully-pinned pool over cap tallies overCapTolerated', async () => {
    _setContextModelForTests('per-script');
    _setPoolCapForTests(1); // cap of 1 so the 2nd pinned context forces the tolerate path
    // A pins its context via a registered handler; B does the same. Building B runs enforcePoolCap:
    // A is pinned + B is exempt (just-built) → no evictable victim → over-cap tolerated + counted.
    await runUserScriptInQuickJS(runOpts('oc-A', `api.commands.onInvoked(() => 'a'); return null;`));
    await runUserScriptInQuickJS(runOpts('oc-B', `api.commands.onInvoked(() => 'b'); return null;`));
    const t = getEngineTelemetry();
    expect(t.overCapTolerated).toBeGreaterThanOrEqual(1);
    expect(t.liveContexts).toBe(2);       // both retained (never force-evict a pinned context)
    expect(t.pinnedContexts).toBe(2);
    disposeScriptVmHandlers('oc-A'); disposeContextForScript('oc-A', true);
    disposeScriptVmHandlers('oc-B'); disposeContextForScript('oc-B', true);
  });

  // Audit follow-up (logs dimension) — the over-cap WARN is edge-triggered by an `overCapLogged` latch.
  // It must re-arm when the pool drops back within cap via ANY removal path, not only idle-eviction:
  // a pinned script leaving through the disable/delete path (disposeContextForScript) must also re-arm,
  // or a later genuine over-cap transition is silently un-warned.
  test('the over-cap WARN re-arms after a disable/delete removal (not just idle-eviction)', async () => {
    _setContextModelForTests('per-script');
    _setPoolCapForTests(1);
    const warns: string[] = [];
    const origWarn = console.warn;
    console.warn = ((...a: unknown[]) => { warns.push(a.map(String).join(' ')); }) as typeof console.warn;
    const overCapWarns = () => warns.filter((w) => w.includes('context pool over cap')).length;
    try {
      await runUserScriptInQuickJS(runOpts('lat-A', `api.commands.onInvoked(() => 'a'); return null;`));
      await runUserScriptInQuickJS(runOpts('lat-B', `api.commands.onInvoked(() => 'b'); return null;`));
      expect(overCapWarns()).toBe(1); // first over-cap transition warned; latch now set
      // Remove A via the DISABLE/DELETE path (not idle-eviction) → pool back within cap → latch must re-arm.
      disposeScriptVmHandlers('lat-A'); disposeContextForScript('lat-A', true);
      // Build C → B(pinned) + C over cap 1 again → tolerate → the WARN must fire AGAIN (latch re-armed).
      await runUserScriptInQuickJS(runOpts('lat-C', `api.commands.onInvoked(() => 'c'); return null;`));
      expect(overCapWarns()).toBe(2);
    } finally {
      console.warn = origWarn;
      disposeScriptVmHandlers('lat-B'); disposeContextForScript('lat-B', true);
      disposeScriptVmHandlers('lat-C'); disposeContextForScript('lat-C', true);
    }
  });
});

describe('#11 observability — reentrant reject counter', () => {
  test('a self-reentrant invoke fast-reject bumps reentrantRejects', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('rr-X', `api.commands.onInvoked(() => 'r'); return null;`));
    const hid = _vmHandlerIdsForTests('rr-X').find((i) => i.startsWith('commandsOnInvoked:'))!;
    // Park a body-run of X so its run holds the runChain (the self-invoke deadlock precondition).
    let unpark: () => void = () => {};
    const parked = runUserScriptInQuickJS(runOpts('rr-X', `await api.chat.getMessages(); return 'done';`,
      () => new Promise((res) => { unpark = () => res(undefined); })));
    await sleep(25);
    // Self-invoke (callerScriptId === owner) → fast-reject → reentrantRejects++.
    await expect(fireHandlerInQuickJS(fireOpts({ scriptId: 'rr-X', handlerId: hid, callerScriptId: 'rr-X' }))).rejects.toThrow();
    expect(getEngineTelemetry().reentrantRejects).toBe(1);
    unpark(); await parked;
    disposeScriptVmHandlers('rr-X'); disposeContextForScript('rr-X', true);
  });
});

describe('#11 observability — aggregateEngineTelemetry (cross-worker)', () => {
  const base = (over: Partial<EngineTelemetry> = {}): EngineTelemetry => ({
    coldStartProbed: false, coldStartOk: false, coldStartMs: 0,
    quickjsRuns: 0, asyncfnRuns: 0, degradedRuns: 0,
    quickjsRunErrors: 0, quickjsFireErrors: 0, quickjsTimeouts: 0,
    asyncfnRunErrors: 0, asyncfnTimeouts: 0,
    reentrantRejects: 0, inVmOom: 0, contextEvictions: 0, overCapTolerated: 0, lastEvictionAt: 0,
    streamsOpened: 0, streamsCancelled: 0,
    contextModel: 'shared', liveContexts: 0, poolCap: 8, pinnedContexts: 0, reservedContexts: 0,
    perCtxLimitBytes: 512 * 1024 * 1024, ...over,
  });

  test('returns undefined when no worker reported engine stats', () => {
    expect(aggregateEngineTelemetry([undefined, undefined])).toBeUndefined();
    expect(aggregateEngineTelemetry([])).toBeUndefined();
  });

  test('SUMS the summable counters + live gauges across workers', () => {
    const agg = aggregateEngineTelemetry([
      base({ quickjsRuns: 3, quickjsTimeouts: 1, liveContexts: 2, inVmOom: 1, asyncfnRunErrors: 2, asyncfnTimeouts: 1 }),
      base({ quickjsRuns: 5, quickjsTimeouts: 2, liveContexts: 4, inVmOom: 0, asyncfnRunErrors: 3, asyncfnTimeouts: 0 }),
      undefined, // a hung/older worker is skipped, not fatal
    ])!;
    expect(agg.quickjsRuns).toBe(8);
    expect(agg.quickjsTimeouts).toBe(3);
    expect(agg.liveContexts).toBe(6);
    expect(agg.inVmOom).toBe(1);
    expect(agg.asyncfnRunErrors).toBe(5);
    expect(agg.asyncfnTimeouts).toBe(1);
  });

  test('keeps per-child config REPRESENTATIVE (not summed) and folds cold-start correctly', () => {
    const agg = aggregateEngineTelemetry([
      base({ poolCap: 8, perCtxLimitBytes: 64 * 1024 * 1024, coldStartProbed: true, coldStartOk: true, coldStartMs: 90, lastEvictionAt: 100 }),
      base({ poolCap: 8, perCtxLimitBytes: 64 * 1024 * 1024, coldStartProbed: true, coldStartOk: false, coldStartMs: 110, lastEvictionAt: 500 }),
    ])!;
    expect(agg.poolCap).toBe(8);                 // representative, NOT 16
    expect(agg.perCtxLimitBytes).toBe(64 * 1024 * 1024);
    expect(agg.coldStartProbed).toBe(true);      // OR across workers
    expect(agg.coldStartOk).toBe(false);         // AND across PROBED workers — one degraded flips it
    expect(agg.coldStartMs).toBe(110);           // max
    expect(agg.lastEvictionAt).toBe(500);        // max
  });

  test('coldStartOk is true only when every PROBED worker succeeded; unprobed workers are ignored', () => {
    const agg = aggregateEngineTelemetry([
      base({ coldStartProbed: true, coldStartOk: true }),
      base({ coldStartProbed: false, coldStartOk: false }), // never probed → does not drag coldStartOk down
    ])!;
    expect(agg.coldStartProbed).toBe(true);
    expect(agg.coldStartOk).toBe(true);
  });
});
