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
  _setContextModelForTests,
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
