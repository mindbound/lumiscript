/**
 * #11 engine-toggle-wiring (backend half) — the dispatcher pins each RunScriptRequest's engineMode from
 * the live `engineModeReader` (wired from the settings store), so a settings change takes effect on the
 * next run with no respawn. This asserts the reader → dispatch → engine-selection path end-to-end: with
 * the reader returning 'quickjs' a dispatched run executes under QuickJS (its handler lands in the VM
 * registry), and the default reader keeps AsyncFunction (handler in the closure registry).
 *
 * We deliberately DON'T touch the child `_setEngineModeForTests` seam here — that would bypass the
 * backend reader we're testing (it takes precedence). __resetForTests restores engineModeReader to
 * () => 'asyncfn'. The `update_settings` engineMode-delta fire-reload branch (backend.ts) is verified by
 * code review against the mirrored reload_script path — the backend message loop has no test harness.
 */
import { describe, test, expect } from 'bun:test';
import { dispatchRunScript, __resetForTests, setEngineModeReader } from '../../src/script-runner/host-dispatcher.js';
import { _vmHandlerIdsForTests } from '../../src/script-runner/qjs-engine.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script } from '../../src/types/script.js';

function makeScript(id: string, code: string): Script {
  return {
    id, name: `Toggle ${id}`, code,
    enabled: true, allowDangerous: false, type: 'trigger',
    bindings: [], triggers: ['ls:startup'], createdAt: Date.now(), updatedAt: Date.now(),
  };
}
function makeRequest() {
  return { data: {}, timeoutMs: 5_000, grantedPermissions: new Set<string>(), userId: 'test-user' };
}
const HANDLER_BODY = `api.commands.onInvoked(() => 'x'); return null;`;

describe('#11 engine-toggle-wiring: engineModeReader → dispatch → engine selection', () => {
  test('reader "quickjs" makes a dispatched run execute under QuickJS', async () => {
    __resetForTests();
    setEngineModeReader(() => 'quickjs');
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'toggle-qjs';
      const runRes = await dispatchRunScript(makeScript(sid, HANDLER_BODY), makeRequest());
      expect(runRes.ok).toBe(true);
      // The handler registered as a dup'd VM fn handle → the run used the QuickJS engine.
      expect(_vmHandlerIdsForTests(sid).length).toBeGreaterThan(0);
    } finally {
      childCleanup();
      __resetForTests(); // restore engineModeReader → 'asyncfn'
    }
  });

  test('the default reader keeps AsyncFunction', async () => {
    __resetForTests(); // engineModeReader defaults to () => 'asyncfn'
    const { childCleanup } = await setupE2E();
    try {
      const sid = 'toggle-async';
      const runRes = await dispatchRunScript(makeScript(sid, HANDLER_BODY), makeRequest());
      expect(runRes.ok).toBe(true);
      // No VM handler → the run used the AsyncFunction engine (handler lives in the closure registry).
      expect(_vmHandlerIdsForTests(sid).length).toBe(0);
    } finally {
      childCleanup();
    }
  });
});
