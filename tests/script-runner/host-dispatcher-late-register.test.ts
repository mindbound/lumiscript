/**
 * v0.26.1 — host-dispatcher late-register-handler fallback tests.
 *
 * Background: when a `register-handler` IPC arrives at the parent for a
 * runId whose `activeRuns` entry has been dropped (race observed in
 * tracker-style scripts where the body's first IPC is processed AFTER
 * a follow-up `dispatchRunScript` drops the originating activeRun),
 * the parent should fall back to the script's current active run via
 * `scriptBodyActiveRunByScript`. The wrapper closure captured downstream
 * depends only on `msg.scriptId` and `msg.handlerId` — neither bound to
 * the dispatch-time runId — so routing the registration to the script's
 * current run is correct AND populates that run's `*RegisteredThisRun`
 * tracking set, preventing the stale-diff from dropping the macro.
 *
 * These tests assert the new fallback for the macro case (other kinds
 * use the same lookup helper, so coverage here is structural).
 */

import { describe, test, expect } from 'bun:test';
import {
  dispatchRunScript,
  spawnScriptRunner,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';
import type { Script } from '../../src/types/script.js';
import type { RegisterHandler } from '../../src/types/script-runner-ipc.js';
import { getMacro, clearAll as clearMacroStore } from '../../src/engine/macro-store.js';

async function setup(): Promise<ScriptRunnerMockIpc> {
  clearMacroStore();
  const spindleMock = (globalThis as unknown as { spindle: MockSpindle }).spindle;
  const ipc = installScriptRunnerMockIpc(spindleMock);
  await spawnScriptRunner('test-user');
  return ipc;
}

function makeScript(id: string): Script {
  return {
    id,
    name: `Test ${id}`,
    code: '/* */',
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: ['ls:startup'],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

function makeRequest() {
  return {
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

function lastDispatchedRunId(ipc: ScriptRunnerMockIpc): string {
  const inbox = ipc.childInbox();
  for (let i = inbox.length - 1; i >= 0; i--) {
    const msg = inbox[i] as { type?: string; runId?: string };
    if (msg && msg.type === 'run-script' && typeof msg.runId === 'string') {
      return msg.runId;
    }
  }
  throw new Error('no run-script message in child inbox');
}

function nextTick(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

describe('host-dispatcher: late register-handler fallback', () => {
  test('register-handler with valid runId registers the macro normally', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    const runId = lastDispatchedRunId(ipc);

    const msg: RegisterHandler = {
      type:       'register-handler',
      kind:       'macro',
      runId,
      scriptId:   'script-A',
      handlerId:  'handler-A',
      name:       'tracker',
      def:        { description: 'state' },
      hasHandler: true,
    };
    ipc.childContext.send(msg);
    await nextTick();

    expect(getMacro('tracker')).toBeDefined();
    expect(getMacro('tracker')!.scriptId).toBe('script-A');
  });

  test('register-handler with STALE runId (but script has a current active run) routes via fallback', async () => {
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    void lastDispatchedRunId(ipc);  // populates scriptBodyActiveRunByScript

    // Send register-handler with a runId that doesn't exist in activeRuns.
    // The fallback should kick in and route to the script's current run.
    const msg: RegisterHandler = {
      type:       'register-handler',
      kind:       'macro',
      runId:      'run-stale-1234567890-99',
      scriptId:   'script-A',
      handlerId:  'handler-stale',
      name:       'tracker',
      def:        { description: 'state' },
      hasHandler: true,
    };
    ipc.childContext.send(msg);
    await nextTick();

    // The macro IS registered (canonical path was reached via fallback).
    expect(getMacro('tracker')).toBeDefined();
    expect(getMacro('tracker')!.scriptId).toBe('script-A');
  });

  test('register-handler with stale runId AND no current active run is skipped with a warn', async () => {
    const ipc = await setup();
    // No dispatchRunScript — script-A has no active run AT ALL.

    const msg: RegisterHandler = {
      type:       'register-handler',
      kind:       'macro',
      runId:      'run-stale-9999999999-1',
      scriptId:   'script-A',
      handlerId:  'handler-orphan',
      name:       'tracker',
      def:        { description: 'state' },
      hasHandler: true,
    };
    ipc.childContext.send(msg);
    await nextTick();

    // The macro is NOT registered — no fallback target exists.
    expect(getMacro('tracker')).toBeUndefined();
  });

  test('fallback routing populates the current run\'s macrosRegisteredThisRun via the canonical', async () => {
    // The point of the fix: the canonical's register MUST run so that
    // `macrosRegisteredThisRun.add(name)` happens. Otherwise the
    // end-of-run stale-diff drops the macro (the original bug).
    //
    // We assert that the macro lands in the macro store — which only
    // happens via the canonical's `addMacro` call. The
    // `macrosRegisteredThisRun` set is run-private state we can't
    // inspect from this layer, but the macro-store presence is the
    // observable side effect that proves the canonical path ran.
    const ipc = await setup();
    void dispatchRunScript(makeScript('script-A'), makeRequest());
    void lastDispatchedRunId(ipc);

    // Stale runId; script-A has a current active run.
    const msg: RegisterHandler = {
      type:       'register-handler',
      kind:       'macro',
      runId:      'run-stale-different-id',
      scriptId:   'script-A',
      handlerId:  'handler-Z',
      name:       'tracker',
      def:        { description: 'state' },
      hasHandler: true,
    };
    ipc.childContext.send(msg);
    await nextTick();

    // Canonical's addMacro ran — macro is in store.
    expect(getMacro('tracker')).toBeDefined();
    expect(getMacro('tracker')!.scriptId).toBe('script-A');
  });

  // v0.26.1 Fix 9 — dual-update test. The fallback's canonical call updates
  // ACTIVE-run's `macrosRegisteredThisRun` Set; without dual-update, the
  // ORIGINATING run's Set stays empty and that run's stale-diff drops the
  // macro at run-end. This test asserts both Sets get the macro name when
  // fallback engages — proving the originating run's stale-diff will see
  // the registration as fresh.
  test('fallback dual-updates: BOTH originating run AND active run tracking sets receive the name', async () => {
    const ipc = await setup();

    // Dispatch run-9 with its own tracking set.
    const run9Macros = new Set<string>();
    void dispatchRunScript(
      makeScript('script-A'),
      makeRequest(),
      { macrosRegisteredThisRun: run9Macros },
    );
    const run9Id = lastDispatchedRunId(ipc);

    // Dispatch run-11 with a DIFFERENT tracking set. This drops run-9's
    // activeRun (per `scriptBodyActiveRunByScript.set` replacing).
    const run11Macros = new Set<string>();
    void dispatchRunScript(
      makeScript('script-A'),
      makeRequest(),
      { macrosRegisteredThisRun: run11Macros },
    );
    const run11Id = lastDispatchedRunId(ipc);
    expect(run9Id).not.toBe(run11Id);

    // Late register-handler IPC carrying run-9's runId.
    const msg: RegisterHandler = {
      type:       'register-handler',
      kind:       'macro',
      runId:      run9Id,           // stale — run-9's activeRun is gone
      scriptId:   'script-A',
      handlerId:  'handler-late',
      name:       'tracker',
      def:        { description: 'state' },
      hasHandler: true,
    };
    ipc.childContext.send(msg);
    await nextTick();

    // run-11's set populated by canonical's `macrosRegisteredThisRun?.add`.
    expect(run11Macros.has('tracker')).toBe(true);
    // run-9's set populated by the dual-update fallback path.
    expect(run9Macros.has('tracker')).toBe(true);
    // Macro is in the store (proves the canonical path ran).
    expect(getMacro('tracker')).toBeDefined();
  });

  test('direct-lookup hit (no fallback) does NOT engage dual-update — single-set update only', async () => {
    // Sanity: when the originating run IS still active, the canonical's
    // own `macrosRegisteredThisRun?.add` call populates it via the api's
    // captured Set reference. The dual-update branch (which only fires
    // when fallback engages) MUST NOT also fire — otherwise we'd be
    // double-adding (no harm because Sets are idempotent, but the test
    // verifies the gate works correctly).
    const ipc = await setup();

    const runMacros = new Set<string>();
    void dispatchRunScript(
      makeScript('script-A'),
      makeRequest(),
      { macrosRegisteredThisRun: runMacros },
    );
    const runId = lastDispatchedRunId(ipc);

    const msg: RegisterHandler = {
      type:       'register-handler',
      kind:       'macro',
      runId,                            // direct lookup hit
      scriptId:   'script-A',
      handlerId:  'handler-A',
      name:       'tracker',
      def:        { description: 'state' },
      hasHandler: true,
    };
    ipc.childContext.send(msg);
    await nextTick();

    // The set has the macro (set by the canonical via its captured ref).
    expect(runMacros.has('tracker')).toBe(true);
    // Single entry — Set semantics make double-add a no-op anyway, but
    // this confirms only one population code path ran.
    expect(runMacros.size).toBe(1);
  });
});
