/**
 * #11 cold-start-fallback — the QuickJS WASM module is instantiated ONCE per process (~106ms compile,
 * P7-3.3 bench). Two robustness properties (the P8-rollout blocker):
 *   1. warmupQuickJS() probes instantiability and caches the verdict; it is awaited at engine-selection
 *      OUTSIDE the run's raceWithTimeout, so the compile is never charged against a script's deadline.
 *   2. If the variant WON'T instantiate on a platform, runOne DEGRADES the run to the AsyncFunction
 *      engine instead of hard-failing every quickjs run (there is no other isolation layer).
 *
 * The degrade is observed via the QUICKJS-ONLY handler registry: a degraded run registers its handler
 * as an asyncfn closure (empty vmHandlerHandles for that script), whereas a real quickjs run populates
 * it. setup.ts beforeEach re-arms the real probe (_setQuickJSAvailabilityForTests(undefined)).
 */
import { describe, test, expect } from 'bun:test';
import {
  warmupQuickJS,
  _setQuickJSAvailabilityForTests,
  _vmHandlerIdsForTests,
} from '../../src/script-runner/qjs-engine.js';
import { dispatchRunScript, __resetForTests } from '../../src/script-runner/host-dispatcher.js';
import { _setEngineModeForTests } from '../../src/script-runner/child-entry.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeScript(id: string, code: string): Script {
  return {
    id, name: `Cold ${id}`, code,
    enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}

describe('#11 cold-start-fallback: warmupQuickJS probe', () => {
  test('returns true when the WASM module instantiates', async () => {
    _setQuickJSAvailabilityForTests(undefined); // re-arm the real probe
    expect(await warmupQuickJS()).toBe(true);
  });

  test('the forced-unavailable seam yields false; re-arming restores the real probe', async () => {
    _setQuickJSAvailabilityForTests(false);
    expect(await warmupQuickJS()).toBe(false);
    _setQuickJSAvailabilityForTests(undefined);
    expect(await warmupQuickJS()).toBe(true);
  });
});

describe('#11 cold-start-fallback: engine-selection degrade (runOne)', () => {
  test('a quickjs run DEGRADES to asyncfn when the module is unavailable (no hard-fail)', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    _setQuickJSAvailabilityForTests(false); // force the platform-unavailable path
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'coldstart-degrade';
      const runRes = await dispatchRunScript(
        makeScript(sid, `api.commands.onInvoked(() => 'x'); return null;`), makeRequest(),
      );
      expect(runRes.ok).toBe(true); // ran successfully (degraded), NOT a hard-fail
      // The handler landed in the asyncfn closure registry, NOT the quickjs VM registry → ran asyncfn.
      expect(_vmHandlerIdsForTests(sid).length).toBe(0);
    } finally {
      childCleanup();
      _setEngineModeForTests(undefined);
      _setQuickJSAvailabilityForTests(undefined);
    }
  });

  test('control: a quickjs run uses quickjs when the module IS available', async () => {
    __resetForTests();
    _setEngineModeForTests('quickjs');
    _setQuickJSAvailabilityForTests(true);
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'coldstart-ok';
      const runRes = await dispatchRunScript(
        makeScript(sid, `api.commands.onInvoked(() => 'x'); return null;`), makeRequest(),
      );
      expect(runRes.ok).toBe(true);
      // A real quickjs run registered the handler as a dup'd VM fn handle.
      expect(_vmHandlerIdsForTests(sid).length).toBeGreaterThan(0);
    } finally {
      childCleanup();
      _setEngineModeForTests(undefined);
      _setQuickJSAvailabilityForTests(undefined);
    }
  });
});
