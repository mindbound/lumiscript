/**
 * #11 P7-3.0 — bounded-pool GROUNDWORK (behavior-preserving; no eviction wired yet). Exercises the
 * three primitives the P7-3.1 idle sweep will drive, all under contextModel='per-script' (the pool
 * only exists there; 'shared' is a guarded no-op):
 *   - LRU recency: ScriptContext.lastUsedAt bumps on a getContextForScript cache-hit / body-run start /
 *     handler-fire start (read via _lastUsedAtForTests).
 *   - Pin predicate: isContextPinned(scriptId) is true iff the context holds a live cross-run handler
 *     dup / broadcast sub / factory owner — the four handle-bearing registries — so the sweep never
 *     evicts a context a later fire would reach (the use-after-free the pin gate exists to prevent).
 *   - Eviction primitive: evictIdleContext(scriptId) drops an UNPINNED, non-mid-run context (rebuilt
 *     lazily on next run) and REFUSES a pinned / mid-run / shared one.
 *
 * setup.ts beforeEach runs _disposeContextForTests() (disposes the per-script pool + resets to 'shared').
 */
import { describe, test, expect } from 'bun:test';
import {
  runUserScriptInQuickJS,
  fireHandlerInQuickJS,
  disposeScriptVmHandlers,
  disposeScriptVmBroadcast,
  disposeContextForScript,
  evictIdleContext,
  isContextPinned,
  sweepIdleContexts,
  _setContextModelForTests,
  _setPoolCapForTests,
  _reserveContextForTests,
  _vmHandlerIdsForTests,
  _scriptContextCountForTests,
  _lastUsedAtForTests,
  _vmObjectCountForTests,
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
function fireOpts(scriptId: string, handlerId: string, args: unknown[] = []): QuickJSFireOptions {
  return { scriptId, handlerId, args, timeoutMs: 5_000, dispatch: async () => undefined, console: noopConsole, serializeError };
}

describe('#11 P7-3.0 pool groundwork: LRU recency (lastUsedAt)', () => {
  test('lastUsedAt advances on a cache-hit + run + fire', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('pool-lru', `return null;`));
    const t1 = _lastUsedAtForTests('pool-lru');
    expect(typeof t1).toBe('number');
    await sleep(5);
    // 2nd run: getContextForScript cache-HIT bumps, then run-start bumps.
    await runUserScriptInQuickJS(runOpts('pool-lru', `api.commands.onInvoked(() => 'x'); return null;`));
    const t2 = _lastUsedAtForTests('pool-lru')!;
    expect(t2).toBeGreaterThan(t1!);
    const hid = _vmHandlerIdsForTests('pool-lru').find((i) => i.startsWith('commandsOnInvoked:'))!;
    const t3 = _lastUsedAtForTests('pool-lru')!;
    await sleep(5);
    await fireHandlerInQuickJS(fireOpts('pool-lru', hid)); // a fire is a use too
    expect(_lastUsedAtForTests('pool-lru')!).toBeGreaterThan(t3);
    disposeContextForScript('pool-lru', true);
    expect(_lastUsedAtForTests('pool-lru')).toBeNull(); // gone after teardown
  });
});

describe('#11 P7-3.0 pool groundwork: pin predicate (isContextPinned)', () => {
  test('a context with no registrations is NOT pinned', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('pin-none', `return 1;`));
    expect(isContextPinned('pin-none')).toBe(false);
    disposeContextForScript('pin-none', true);
  });

  test('a live command handler pins; sweeping it unpins (context still pooled)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('pin-h', `api.commands.onInvoked(() => 'x'); return null;`));
    expect(isContextPinned('pin-h')).toBe(true);
    disposeScriptVmHandlers('pin-h'); // sweep the handler dup only — context stays in the pool
    expect(isContextPinned('pin-h')).toBe(false);
    expect(_scriptContextCountForTests()).toBe(1);
    disposeContextForScript('pin-h', true);
  });

  test('a live broadcast sub pins; a broadcast-clear unpins (transient pin window)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('pin-b', `api.broadcast.on('ev', () => {}); return null;`));
    expect(isContextPinned('pin-b')).toBe(true);
    disposeScriptVmBroadcast('pin-b'); // the per-run broadcast-clear (BroadcastClearMessage)
    expect(isContextPinned('pin-b')).toBe(false);
    disposeContextForScript('pin-b', true);
  });

  test('a live float-widget owner pins; teardown unpins', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('pin-w', `api.ui.createFloatWidget({}); return null;`));
    expect(isContextPinned('pin-w')).toBe(true);
    disposeScriptVmHandlers('pin-w'); // sweeps the vmWidgetOwner record + cell
    expect(isContextPinned('pin-w')).toBe(false);
    disposeContextForScript('pin-w', true);
  });

  test('a modal with an onDismiss listener pins (critic gap: via its vmHandlerHandles dup + owner)', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('pin-m', `globalThis.__m = api.ui.showAdvancedModal({ title: 'X' }); globalThis.__m.onDismiss(function () {}); return null;`));
    expect(isContextPinned('pin-m')).toBe(true);
    disposeScriptVmHandlers('pin-m'); // sweeps the onDismiss dup + vmModalOwner
    expect(isContextPinned('pin-m')).toBe(false);
    disposeContextForScript('pin-m', true);
  });
});

describe('#11 P7-3.0 pool groundwork: evictIdleContext primitive', () => {
  test('evicts an unpinned idle context; getContextForScript rebuilds a FRESH one', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('ev-A', `globalThis.__x = 1; return null;`));
    expect(_scriptContextCountForTests()).toBe(1);
    expect(isContextPinned('ev-A')).toBe(false);
    expect(evictIdleContext('ev-A')).toBe(true);
    expect(_scriptContextCountForTests()).toBe(0);          // pool entry freed
    expect(_vmObjectCountForTests('ev-A')).toBeNull();      // context disposed (resolver returns undefined)
    // Next run rebuilds cleanly (proves BOTH pool maps were cleared — a stale promise would hand back
    // the disposed context and the run would throw). Fresh globalThis proves it's not the evicted one.
    const rebuilt = await runUserScriptInQuickJS(runOpts('ev-A', `return typeof globalThis.__x;`));
    expect(rebuilt).toBe('undefined');
    expect(_scriptContextCountForTests()).toBe(1);
    disposeContextForScript('ev-A', true);
  });

  test('REFUSES to evict a pinned context; the handler survives and still fires', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('ev-pin', `globalThis.__mark = 'M'; api.commands.onInvoked(() => globalThis.__mark); return null;`));
    const hid = _vmHandlerIdsForTests('ev-pin').find((i) => i.startsWith('commandsOnInvoked:'))!;
    expect(isContextPinned('ev-pin')).toBe(true);
    expect(evictIdleContext('ev-pin')).toBe(false);         // refused — pinned
    expect(_scriptContextCountForTests()).toBe(1);          // context survives
    const out = await fireHandlerInQuickJS(fireOpts('ev-pin', hid));
    expect(out).toBe('M');                                   // fires in its still-live context
    disposeScriptVmHandlers('ev-pin');
    disposeContextForScript('ev-pin', true);
  });

  test('is a no-op under contextModel="shared" (never disposes the reused shared record)', async () => {
    // 'shared' is the default after beforeEach; a run builds the ONE shared context.
    await runUserScriptInQuickJS(runOpts('ev-shared', `return null;`));
    expect(evictIdleContext('ev-shared')).toBe(false);
  });
});

describe('#11 P7-3.1 bounded pool: cap enforcement (enforcePoolCap on insert)', () => {
  test('over-cap insert evicts the LRU context and keeps the just-inserted one', async () => {
    _setContextModelForTests('per-script');
    _setPoolCapForTests(1);
    await runUserScriptInQuickJS(runOpts('cap-A', `return null;`));
    await sleep(5);
    await runUserScriptInQuickJS(runOpts('cap-B', `return null;`)); // insert B → over cap → evict LRU (A)
    expect(_scriptContextCountForTests()).toBe(1);
    expect(_lastUsedAtForTests('cap-A')).toBeNull();  // A (older) evicted
    expect(_lastUsedAtForTests('cap-B')).not.toBeNull(); // B (just-inserted, freshest) survives — critic gap #4
    disposeContextForScript('cap-B', true);
  });

  test('cap NEVER evicts a pinned context — it evicts the oldest EVICTABLE instead', async () => {
    _setContextModelForTests('per-script');
    _setPoolCapForTests(2);
    // A is the OLDEST but PINNED (live handler); B is the oldest EVICTABLE; C forces the over-cap evict.
    await runUserScriptInQuickJS(runOpts('cap-pA', `api.commands.onInvoked(() => 'x'); return null;`));
    await sleep(5);
    await runUserScriptInQuickJS(runOpts('cap-pB', `return null;`));
    await sleep(5);
    await runUserScriptInQuickJS(runOpts('cap-pC', `return null;`)); // size 3 > 2 → evict oldest evictable
    expect(_scriptContextCountForTests()).toBe(2);
    expect(isContextPinned('cap-pA')).toBe(true);
    expect(_lastUsedAtForTests('cap-pA')).not.toBeNull(); // pinned A survives despite being oldest
    expect(_lastUsedAtForTests('cap-pB')).toBeNull();     // oldest EVICTABLE (B) evicted
    expect(_lastUsedAtForTests('cap-pC')).not.toBeNull();
    disposeScriptVmHandlers('cap-pA');
    disposeContextForScript('cap-pA', true);
    disposeContextForScript('cap-pC', true);
  });
});

describe('#11 P7-3.1 bounded pool: idle sweep (sweepIdleContexts)', () => {
  test('reaps an idle unpinned context, keeps a fresh one and a pinned one', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('sw-idle', `return null;`)); // will be the IDLE one
    await sleep(5);
    await runUserScriptInQuickJS(runOpts('sw-pin', `api.commands.onInvoked(() => 'x'); return null;`)); // pinned
    await sleep(5);
    await runUserScriptInQuickJS(runOpts('sw-fresh', `return null;`)); // freshest
    const idleAt = _lastUsedAtForTests('sw-idle')!;
    const freshAt = _lastUsedAtForTests('sw-fresh')!;
    // Choose (now, idleMs) so ONLY sw-idle exceeds idleMs: now=freshAt makes sw-fresh's age 0.
    const reaped = sweepIdleContexts(freshAt, freshAt - idleAt - 1);
    expect(reaped).toBe(1);
    expect(_lastUsedAtForTests('sw-idle')).toBeNull();      // idle + unpinned → reaped
    expect(_lastUsedAtForTests('sw-fresh')).not.toBeNull(); // fresh → kept
    expect(_lastUsedAtForTests('sw-pin')).not.toBeNull();   // pinned → never reaped even if idle
    disposeScriptVmHandlers('sw-pin');
    disposeContextForScript('sw-pin', true);
    disposeContextForScript('sw-fresh', true);
  });

  test('is a no-op under contextModel="shared"', async () => {
    await runUserScriptInQuickJS(runOpts('sw-shared', `return null;`));
    expect(sweepIdleContexts(Date.now(), 0)).toBe(0);
  });

  test('cap backstop: an over-cap pool tolerated while all-pinned is reclaimed once a context unpins', async () => {
    _setContextModelForTests('per-script');
    _setPoolCapForTests(1);
    // Two PINNED contexts: the insert of B can't evict (both pinned) → over-cap tolerated (accept + retain).
    await runUserScriptInQuickJS(runOpts('bs-A', `api.commands.onInvoked(() => 'x'); return null;`));
    await sleep(5);
    await runUserScriptInQuickJS(runOpts('bs-B', `api.commands.onInvoked(() => 'x'); return null;`));
    expect(_scriptContextCountForTests()).toBe(2); // over cap=1, both pinned → retained
    // Unpin A; a large idleMs disables idle-reaping so ONLY the cap backstop acts.
    disposeScriptVmHandlers('bs-A');
    const reaped = sweepIdleContexts(Date.now(), 10 * 60_000);
    expect(reaped).toBe(1);
    expect(_lastUsedAtForTests('bs-A')).toBeNull();     // now-evictable + oldest → reclaimed by the backstop
    expect(_lastUsedAtForTests('bs-B')).not.toBeNull(); // still pinned → retained (still over... no: size now 1)
    expect(_scriptContextCountForTests()).toBe(1);
    disposeScriptVmHandlers('bs-B');
    disposeContextForScript('bs-B', true);
  });
});

describe('#11 P7-3.1 audit: acquisition-window reservation (microtask-race UAF guard)', () => {
  test('a RESERVED context is evicted by neither evictIdleContext nor the sweep, even when idle+unpinned', async () => {
    _setContextModelForTests('per-script');
    await runUserScriptInQuickJS(runOpts('resv-A', `return null;`));
    expect(isContextPinned('resv-A')).toBe(false); // unpinned — normally evictable
    const release = _reserveContextForTests('resv-A'); // simulate a body-run mid-acquisition (activeRun not yet set)
    expect(evictIdleContext('resv-A')).toBe(false);                  // reserved → refused
    expect(sweepIdleContexts(Date.now() + 10 * 60_000, 0)).toBe(0);  // idle but reserved → not reaped
    expect(_scriptContextCountForTests()).toBe(1);
    release();
    expect(evictIdleContext('resv-A')).toBe(true); // released → evictable again
  });

  test('cap-check will NOT evict a reserved sole-evictable context (the audit UAF scenario)', async () => {
    _setContextModelForTests('per-script');
    _setPoolCapForTests(1);
    await runUserScriptInQuickJS(runOpts('resv-sole', `return null;`)); // unpinned
    const release = _reserveContextForTests('resv-sole');              // it is mid-acquisition for its own run
    // Insert another context → over cap → enforcePoolCap. resv-sole is the ONLY non-exempt context, but it
    // is RESERVED → not evictable; without the reservation it would be disposed under its parked run (UAF).
    await runUserScriptInQuickJS(runOpts('resv-other', `return null;`));
    expect(_lastUsedAtForTests('resv-sole')).not.toBeNull(); // survived (reserved), not UAF-evicted
    expect(_scriptContextCountForTests()).toBe(2);           // over-cap tolerated instead of a bad evict
    release();
    disposeContextForScript('resv-sole', true);
    disposeContextForScript('resv-other', true);
  });
});
