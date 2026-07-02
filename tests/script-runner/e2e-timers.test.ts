/**
 * #11 P5-2 — end-to-end timers under the QuickJS engine, exercising the REAL child-side chain that the
 * unit tests (qjs-engine-timers.test.ts) stub with a mock scheduler: in-VM setTimeout/setInterval →
 * __hostScheduleTimer → the injected scheduler → a real Bun timer in the child → fireVmTimer →
 * fireHandlerInQuickJS. setupE2E() runs the child's default export, which wires the real
 * setVmTimerScheduler. The callback's effect is observed via api.broadcast.emit → the engine bus.
 *
 * (The teardown/leak-fix — a pending interval cancelled on unregister — is covered for BOTH engines in
 * P5-3, the Finding-4 increment.)
 */
import { describe, test, expect } from 'bun:test';
import { dispatchRunScript, __resetForTests } from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { on as busOn, clearAll as clearBroadcast } from '../../src/engine/broadcast-bus.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeScript(id: string, code: string): Script {
  return {
    id, name: `Timer ${id}`, code,
    enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}
const withTimeout = <T>(p: Promise<T>, ms: number, label: string): Promise<T> =>
  Promise.race([p, new Promise<T>((_, rej) => setTimeout(() => rej(new Error(label)), ms))]);

describe('#11 P5-2 e2e timers (real Bun-timer → fireVmTimer)', () => {
  test('a real setTimeout fires its callback after the delay', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      let payload: unknown;
      const fired = new Promise<void>((resolve) => {
        busOn('p5-timeout-fired', (p) => { payload = p; resolve(); }, 'test-observer');
      });
      const res = await dispatchRunScript(
        makeScript('e2e-timeout', `setTimeout(() => api.broadcast.emit('p5-timeout-fired', { ok: true }), 15); return 'scheduled';`),
        makeRequest(),
      );
      expect(res.ok).toBe(true);
      expect(res.value).toBe('scheduled'); // body returns immediately; the callback fires later
      await withTimeout(fired, 3_000, 'setTimeout callback did not fire within 3s');
      expect(payload).toEqual({ ok: true });
    } finally {
      childCleanup(); _setEngineModeForTests(undefined); clearBroadcast();
    }
  });

  test('a real setInterval fires repeatedly and clearInterval stops it (self-clearing after 2 ticks)', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    const { childCleanup } = await setupE2E();
    try {
      const ticks: number[] = [];
      const gotTwo = new Promise<void>((resolve) => {
        busOn('p5-interval-tick', (p) => { ticks.push(p as number); if (ticks.length >= 2) resolve(); }, 'test-observer');
      });
      const res = await dispatchRunScript(
        makeScript('e2e-interval', `
          let n = 0;
          const id = setInterval(() => { n++; api.broadcast.emit('p5-interval-tick', n); if (n >= 2) clearInterval(id); }, 15);
          return null;
        `),
        makeRequest(),
      );
      expect(res.ok).toBe(true);
      await withTimeout(gotTwo, 3_000, 'setInterval did not tick twice within 3s');
      expect(ticks.slice(0, 2)).toEqual([1, 2]); // fired, re-armed, fired again
      // Give a further window to prove clearInterval actually stopped it (no 3rd tick).
      await new Promise((r) => setTimeout(r, 80));
      expect(ticks).toEqual([1, 2]);
    } finally {
      childCleanup(); _setEngineModeForTests(undefined); clearBroadcast();
    }
  });
});
