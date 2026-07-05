/**
 * #11 P5-3 — the field-test Finding-4 leak fix, verified on BOTH engines. A user setInterval that
 * outlived its script (surviving a reload/disable) kept firing the old closure. handleScriptUnregister
 * now cancels a script's timers unconditionally: clearAllTimersForScript (quickjs Bun timers +
 * disposeScriptVmHandlers sweeps the dups) + clearAllAsyncfnTimersForScript (asyncfn tracked timers).
 *
 * These are real-timing e2e tests: dispatch a script that arms an interval, confirm it fires, unregister
 * the script, then confirm it STOPS. Cross-script isolation guards the attribution (A's teardown must
 * not touch B's timers). setupE2E runs the child default export (wires the timer scheduler + the asyncfn
 * monkeypatch); unregisterScriptFromChild sends the real script-unregister IPC.
 */
import { describe, test, expect } from 'bun:test';
import { dispatchRunScript, unregisterScriptFromChild, __resetForTests } from '../../src/script-runner/host-dispatcher.js';
import {
  _setEngineModeForTests, _asyncfnTimerCountForTests, _vmTimerCountForTests,
  _runInScriptContextForTests, _runInRunContextForTests,
} from '../../src/script-runner/child-entry.js';
import { on as busOn, emit as busEmit, clearAll as clearBroadcast } from '../../src/engine/broadcast-bus.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeScript(id: string, code: string, allowDangerous = false): Script {
  return {
    id, name: `T ${id}`, code,
    enabled: true, allowDangerous, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}
const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
async function waitUntil(cond: () => boolean, ms: number): Promise<boolean> {
  const end = Date.now() + ms;
  while (Date.now() < end) { if (cond()) return true; await sleep(10); }
  return cond();
}

for (const engine of ['asyncfn', 'quickjs'] as const) {
  describe(`#11 P5-3 Finding-4 leak fix (${engine})`, () => {
    test('a setInterval STOPS firing after the script is unregistered (reload)', async () => {
      __resetForTests();
      _setEngineModeForTests(engine);
      const { childCleanup } = await setupE2E();
      try {
        let ticks = 0;
        const ev = `p5-leak-${engine}`;
        busOn(ev, () => { ticks++; }, 'observer');
        await dispatchRunScript(
          makeScript(`leak-${engine}`, `setInterval(() => api.broadcast.emit('${ev}', 1), 15); return null;`),
          makeRequest(),
        );
        expect(await waitUntil(() => ticks >= 2, 3_000)).toBe(true); // the interval is live + firing
        // The field repro: unregister (reload) the script. The leaked interval must be cancelled.
        unregisterScriptFromChild(`leak-${engine}`, 'reload');
        const before = ticks;
        await sleep(120); // several interval periods
        expect(ticks).toBe(before); // NO further fires — Finding-4 fixed on this engine
      } finally {
        childCleanup(); _setEngineModeForTests(undefined); clearBroadcast();
      }
    });

    test('cross-script isolation: unregistering script A does NOT cancel script B\'s interval', async () => {
      __resetForTests();
      _setEngineModeForTests(engine);
      const { childCleanup } = await setupE2E();
      try {
        let aTicks = 0, bTicks = 0;
        const evA = `p5-iso-a-${engine}`, evB = `p5-iso-b-${engine}`;
        busOn(evA, () => { aTicks++; }, 'observer');
        busOn(evB, () => { bTicks++; }, 'observer');
        await dispatchRunScript(makeScript(`iso-a-${engine}`, `setInterval(() => api.broadcast.emit('${evA}', 1), 15); return null;`), makeRequest());
        await dispatchRunScript(makeScript(`iso-b-${engine}`, `setInterval(() => api.broadcast.emit('${evB}', 1), 15); return null;`), makeRequest());
        expect(await waitUntil(() => aTicks >= 1 && bTicks >= 1, 3_000)).toBe(true);
        unregisterScriptFromChild(`iso-a-${engine}`, 'disable'); // only A
        const aBefore = aTicks, bBefore = bTicks;
        await sleep(60);
        expect(aTicks).toBe(aBefore);                    // A stopped
        expect(await waitUntil(() => bTicks > bBefore, 2_000)).toBe(true); // B keeps firing (not collateral-cancelled)
      } finally {
        childCleanup(); _setEngineModeForTests(undefined); clearBroadcast();
      }
    });

    test('an interval armed INSIDE a broadcast handler is attributed to the script (armed→tracked, unregister→cleared)', async () => {
      __resetForTests();
      _setEngineModeForTests(engine);
      const { childCleanup } = await setupE2E();
      try {
        const sid  = `inhandler-${engine}`;
        const goEv = `p6-go-${engine}`;
        // Observe the timer store DIRECTLY per engine — observing via api.* would break after unregister
        // (the torn-down proxy drops the call) regardless of whether the timer was actually cancelled.
        const timerCount = () => engine === 'asyncfn' ? _asyncfnTimerCountForTests(sid) : _vmTimerCountForTests(sid);
        // The interval is armed INSIDE the broadcast handler's fire — the case #6 covered: under asyncfn the
        // fire has no runId->activeProxies mapping, so pre-fix the timer was unattributed (count stayed 0)
        // and survived unregister. A long delay so it never fires; we only assert on attribution.
        await dispatchRunScript(
          makeScript(sid, `api.broadcast.on('${goEv}', () => { setInterval(() => {}, 100000); }); return null;`),
          makeRequest(),
        );
        expect(timerCount()).toBe(0);        // nothing armed yet
        // Fire the handler: host bus -> per-script forwarder -> broadcast-fire IPC -> child handleBroadcastFire.
        busEmit(goEv, {});
        expect(await waitUntil(() => timerCount() === 1, 3_000)).toBe(true); // ATTRIBUTED (was 0 pre-fix under asyncfn)
        unregisterScriptFromChild(sid, 'disable');
        expect(timerCount()).toBe(0);        // cancelled + cleared on teardown
      } finally {
        childCleanup(); _setEngineModeForTests(undefined); clearBroadcast();
      }
    });
  });
}

// The asyncfn timer tracking set must not grow unboundedly: a timer the user CLEARS has to leave the set
// too (only a one-shot FIRE untracked it before), else repeated create+clear cycles accumulate dead ids
// until the script is unregistered. Asyncfn-only (the tracking set is the production timer-leak guard).
describe('asyncfn timer tracking untracks on clear (bounded set growth)', () => {
  test('creating then clearing timers in a run returns the tracked count to zero', async () => {
    __resetForTests();
    _setEngineModeForTests('asyncfn');
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'asyncfn-untrack';
      await dispatchRunScript(
        makeScript(sid, `
          for (let i = 0; i < 5; i++) { const t = setInterval(() => {}, 100000); clearInterval(t); }
          const one = setTimeout(() => {}, 100000); clearTimeout(one);
          return null;
        `),
        makeRequest(),
      );
      expect(_asyncfnTimerCountForTests(sid)).toBe(0); // all 6 cleared → set empty (was 6 before the clear-untrack fix)
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('an UNcleared interval stays tracked (teardown still relies on it to cancel the leak)', async () => {
    __resetForTests();
    _setEngineModeForTests('asyncfn');
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'asyncfn-keep';
      await dispatchRunScript(
        makeScript(sid, `setInterval(() => {}, 100000); return null;`),
        makeRequest(),
      );
      expect(_asyncfnTimerCountForTests(sid)).toBe(1);   // still tracked
      unregisterScriptFromChild(sid, 'disable');         // teardown cancels it (and clears the set)
      expect(_asyncfnTimerCountForTests(sid)).toBe(0);
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('a detached continuation of an UNREGISTERED script cannot arm a fresh (leaking) timer — handler/ALS path', async () => {
    __resetForTests();
    _setEngineModeForTests('asyncfn');
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'asyncfn-detached-als';
      // Register + arm a normal timer so attribution is proven live pre-unregister.
      await dispatchRunScript(makeScript(sid, `setInterval(() => {}, 100000); return null;`), makeRequest());
      expect(_asyncfnTimerCountForTests(sid)).toBe(1);
      unregisterScriptFromChild(sid, 'disable');       // teardown cancels the interval + marks recentlyUnregistered
      expect(_asyncfnTimerCountForTests(sid)).toBe(0);
      // Now simulate a detached continuation of the torn-down script (its scriptId still resolvable via the
      // executing ALS context) arming a fresh interval. It must be REFUSED — nothing would ever cancel it.
      let fired = false;
      _runInScriptContextForTests(sid, () => { setInterval(() => { fired = true; }, 5); });
      expect(_asyncfnTimerCountForTests(sid)).toBe(0); // not tracked (refused)
      await sleep(40);
      expect(fired).toBe(false);                        // never armed — no post-teardown leak
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('a detached continuation of an orphaned body run (proxy already dropped) cannot arm a timer — runId path', async () => {
    __resetForTests();
    _setEngineModeForTests('asyncfn');
    const { childCleanup } = await setupE2E();
    try {
      // No proxy is seeded for 'ghost-run', so the runId resolves to NO script — exactly the state after
      // unregister dropped a body run's proxy while a detached async was still in flight. A truly internal
      // timer (no runId at all) still passes through; this one must be refused.
      let fired = false;
      _runInRunContextForTests('ghost-run', () => { setInterval(() => { fired = true; }, 5); });
      await sleep(40);
      expect(fired).toBe(false); // refused — orphan runId never arms a leaking timer
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });

  test('a timer armed INSIDE a timer callback is attributed too (the callback runs under the owning scriptId)', async () => {
    __resetForTests();
    _setEngineModeForTests('asyncfn');
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'asyncfn-nested';
      // The interval fires from the event loop — outside any run context. Without running the callback under
      // the owning scriptId, the setTimeout it arms would be unattributed (armed after the body run ended)
      // and leak. Wrapping the callback attributes it: interval (1) + the nested one-shot (1) = 2 tracked.
      await dispatchRunScript(
        makeScript(sid, `let armed = false; setInterval(() => { if (!armed) { armed = true; setTimeout(() => {}, 100000); } }, 15); return null;`),
        makeRequest(),
      );
      expect(await waitUntil(() => _asyncfnTimerCountForTests(sid) >= 2, 3_000)).toBe(true); // nested one-shot attributed
      unregisterScriptFromChild(sid, 'disable');
      expect(_asyncfnTimerCountForTests(sid)).toBe(0);   // both cancelled + cleared on teardown
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });
});

// The three fire-and-forget quickjs paths (broadcast / modal-dismiss / timer) grant a fired handler bare
// fetch iff the OWNING script is allowDangerous. Bare fetch is now SSRF-guarded: it dispatches
// utils.http.request → the backend guardedCorsFetch (allowlisted local → direct; else cors → safeFetch), so
// a fired handler's fetch reaches the (mocked) cors path and comes back 200. A non-allowDangerous fire is
// gated up front by the in-VM __lsFetch (never reaches the backend). (modal-dismiss uses the broadcast path.)
describe('#11 fire-path bare fetch → SSRF-guarded backend path (quickjs)', () => {
  // Bare fetch dispatches utils.http.request → the backend requireHttp gate needs cors_proxy (which
  // allowDangerous maps to); grant it so the guarded path is exercised end-to-end against the mock cors.
  const corsReq = () => ({ ...makeRequest(), grantedPermissions: new Set<string>(['cors_proxy']) });
  // The default (shared) context model means one VM globalThis across runs — poll it via a reader run until
  // the async fire has settled its result.
  async function readGlobal(key: string): Promise<unknown> {
    for (let i = 0; i < 40; i++) {
      const res = await dispatchRunScript(makeScript(`rd-${key}`, `return globalThis.${key} ?? null;`), makeRequest()) as { value?: unknown };
      if (res.value != null) return res.value;
      await sleep(20);
    }
    return null;
  }
  const handlerBody = (event: string, slot: string) =>
    `api.broadcast.on('${event}', async () => { try { globalThis.${slot} = 'status:' + (await fetch('http://example.com/')).status; } catch (e) { globalThis.${slot} = 'blocked:' + e.message; } }); return null;`;

  test('an allowDangerous broadcast handler routes bare fetch through the guarded backend (cors mock → 200); a non-allowDangerous one is gated', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      // allowDangerous (+ cors_proxy) → the fired handler's bare fetch dispatches to guardedCorsFetch → mock cors → 200.
      await dispatchRunScript(makeScript('bcast-ad', handlerBody('bc-ad', '__bcAd'), true), corsReq());
      busEmit('bc-ad', {});
      expect(await readGlobal('__bcAd')).toBe('status:200');

      // non-allowDangerous → gated up front by __lsFetch (never reaches the backend).
      await dispatchRunScript(makeScript('bcast-nad', handlerBody('bc-nad', '__bcNad'), false), makeRequest());
      busEmit('bc-nad', {});
      expect(String(await readGlobal('__bcNad'))).toContain('Allow Dangerous');
    } finally {
      childCleanup(); _setEngineModeForTests(undefined); clearBroadcast();
    }
  });

  test('an allowDangerous timer callback routes bare fetch through the guarded backend (child-local fire path)', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      await dispatchRunScript(makeScript('tmr-ad',
        `setTimeout(async () => { try { globalThis.__tmrAd = 'status:' + (await fetch('http://example.com/')).status; } catch (e) { globalThis.__tmrAd = 'blocked:' + e.message; } }, 10); return null;`,
        true), corsReq());
      expect(await readGlobal('__tmrAd')).toBe('status:200');
    } finally {
      childCleanup(); _setEngineModeForTests(undefined);
    }
  });
});
