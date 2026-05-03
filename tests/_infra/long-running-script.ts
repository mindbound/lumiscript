/**
 * v0.26.1 — late-IPC test fixture.
 *
 * Encapsulates the canonical "long-running script body produces an IPC that
 * arrives at the parent AFTER a follow-up dispatch dropped the originating
 * activeRun" scenario that the v0.26.1 fixes target. New tests for any
 * register-handler kind, persistent-handle kind, or run-tracking-set surface
 * should drive this fixture rather than re-implementing the dance.
 *
 * Background: see `notes/step-2-timing-model.md` for the invariants and
 * `notes/post-mortem-v0.26.1-late-ipc-bugs.md` for the bug class this
 * fixture covers.
 *
 * Two-phase shape:
 *
 *   1. `setupLateRegisterScenario` does everything up to and including the
 *      follow-up dispatch — by the time it returns, the originating run's
 *      activeRun has been dropped. The returned handle exposes BOTH runs'
 *      tracking-set Set references so the test can assert mutations on
 *      either.
 *
 *   2. The test calls `sendLateRegister` (or the kind-specific helpers) to
 *      simulate a register-handler IPC arriving with the originating runId.
 *      The fixture awaits a microtask tick so the parent's IPC handler has
 *      a chance to run before assertions.
 *
 * Example:
 *
 *   const scn = await setupLateRegisterScenario();
 *   await scn.sendLateMacroRegister('tracker');
 *   expect(scn.run1.macros.has('tracker')).toBe(true);  // dual-update
 *   expect(scn.run2.macros.has('tracker')).toBe(true);  // canonical via active
 */

import {
  dispatchRunScript,
  spawnScriptRunner,
} from '../../src/script-runner/host-dispatcher.js';
import { installScriptRunnerMockIpc, type ScriptRunnerMockIpc } from './script-runner-mock-ipc.js';
import type { MockSpindle } from './mock-spindle.js';
import type { Script, MacroDefinition, ToolDefinition } from '../../src/types/script.js';
import type { RegisterHandler } from '../../src/types/script-runner-ipc.js';

// ─── Public types ─────────────────────────────────────────────────────────

export interface RunTrackingSets {
  /** runId of the dispatch this snapshot belongs to. */
  runId:             string;
  tools:             Set<string>;
  macros:            Set<string>;
  macroInterceptors: Set<string>;
  contentProcessors: Set<string>;
  rpcEndpoints:      Set<string>;
}

export interface LateRegisterScenario {
  /**
   * The originating run. Its activeRun has already been DROPPED at the
   * parent (run2's dispatch did this). Any register-handler IPC carrying
   * `run1.runId` should engage the fallback path. Sets are alive and the
   * test can read them post-act to assert dual-update.
   */
  run1: RunTrackingSets;
  /**
   * The current/active run. Its activeRun is alive at the parent. Sets
   * are alive and the test can read them post-act to assert that the
   * canonical's register call populated them via `active.api.*.register`.
   */
  run2: RunTrackingSets;
  /**
   * The IPC pair powering parent ↔ "child" (no actual child runtime is
   * spun up — the test drives child→parent IPCs by calling
   * `ipc.childContext.send(msg)` directly).
   */
  ipc: ScriptRunnerMockIpc;
  /** scriptId all dispatches were keyed against. */
  scriptId: string;
  /**
   * Send a fully-typed register-handler IPC for the originating run.
   * `msg.runId` is auto-filled to `run1.runId`. Returns once the parent's
   * IPC handler has had a microtask tick to run.
   */
  sendLateRegister(msg: Omit<RegisterHandler, 'runId'>): Promise<void>;
  /**
   * Convenience: send a late register-handler for `kind: 'macro'`.
   * Auto-fills runId, scriptId, handlerId, and a default MacroDefinition
   * (`{ description: 'state' }`) — caller can override any field.
   */
  sendLateMacroRegister(
    name:        string,
    overrides?:  Partial<RegisterHandler & { kind: 'macro' }>,
  ): Promise<void>;
  /** Convenience: same as above for `kind: 'tool'`. */
  sendLateToolRegister(
    name:        string,
    overrides?:  Partial<RegisterHandler & { kind: 'tool' }>,
  ): Promise<void>;
  /** Convenience: same as above for `kind: 'macroInterceptor'`. */
  sendLateMacroInterceptorRegister(
    handlerId:   string,
    overrides?:  Partial<RegisterHandler & { kind: 'macroInterceptor' }>,
  ): Promise<void>;
  /** Convenience: same as above for `kind: 'contentProcessor'`. */
  sendLateContentProcessorRegister(
    handlerId:   string,
    overrides?:  Partial<RegisterHandler & { kind: 'contentProcessor' }>,
  ): Promise<void>;
}

export interface SetupOpts {
  /** scriptId for both dispatches. Defaults to `'script-A'`. */
  scriptId?: string;
  /**
   * If provided, skip `installScriptRunnerMockIpc` and assume the caller
   * has already done it. Useful for tests with their own multi-step setup
   * that want to interleave other steps.
   */
  ipc?: ScriptRunnerMockIpc;
  /**
   * If provided, skip `spawnScriptRunner`. Useful when the caller has
   * already spawned. Defaults to false (we'll spawn).
   */
  alreadySpawned?: boolean;
  /**
   * Permissions granted to the dispatched runs. Defaults cover every
   * register-handler-with-tracking-set kind so the canonical's `assertPerm`
   * check doesn't throw. Override with an empty Set or a narrower one when
   * the test specifically targets permission-denial behavior.
   */
  grantedPermissions?: ReadonlySet<string>;
}

// ─── Implementation ───────────────────────────────────────────────────────

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

/**
 * Permissions covering every register-handler-with-tracking-set kind so the
 * canonical register-h-and lers can run without `assertPerm` throwing. This
 * fixture is for parent-side reaction tests where the permissions plumbing
 * is incidental — opt into a stricter Set if your test specifically targets
 * permission-denial behavior.
 */
const DEFAULT_GRANTED_PERMISSIONS: ReadonlySet<string> = new Set([
  'tools',              // api.tools.register
  'chat_mutation',      // api.chat.registerContentProcessor
  'macro_interceptor',  // api.macros.registerInterceptor
  'interceptor',        // api.chat.registerInterceptor (sibling)
  'chats',              // api.chat.* readers
  'generation',         // api.llm.*
]);

function makeRequest(grantedPermissions?: ReadonlySet<string>) {
  return {
    data:               {},
    timeoutMs:          5_000,
    grantedPermissions: new Set(grantedPermissions ?? DEFAULT_GRANTED_PERMISSIONS),
    userId:             'test-user',
  };
}

function makeTrackingSets(runId: string): RunTrackingSets {
  return {
    runId,
    tools:             new Set<string>(),
    macros:            new Set<string>(),
    macroInterceptors: new Set<string>(),
    contentProcessors: new Set<string>(),
    rpcEndpoints:      new Set<string>(),
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
  throw new Error(
    '[long-running-script fixture] no run-script message in child inbox — ' +
    'did dispatchRunScript fail to send the IPC?',
  );
}

function nextTick(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

const DEFAULT_MACRO_DEF: MacroDefinition = { description: 'state' };
const DEFAULT_TOOL_DEF: ToolDefinition = {
  display_name: 'Test Tool',
  description:  'test tool',
};

/**
 * Bring up the parent dispatcher + IPC mock + run two dispatches such that
 * run-1's activeRun is dropped by run-2. Returns a handle the test uses to
 * drive late IPCs and inspect tracking-set mutations.
 *
 * Note: this fixture does NOT bring up the child runtime in-process. Tests
 * that need true end-to-end flows should use `setupE2E` from
 * `script-runner-fixture.ts` instead. This fixture is for parent-side
 * reaction tests.
 */
export async function setupLateRegisterScenario(opts: SetupOpts = {}): Promise<LateRegisterScenario> {
  const scriptId = opts.scriptId ?? 'script-A';
  const ipc = opts.ipc ?? installScriptRunnerMockIpc(
    (globalThis as unknown as { spindle: MockSpindle }).spindle,
  );

  if (!opts.alreadySpawned) {
    await spawnScriptRunner('test-user');
  }

  // Run-1: dispatch with its own tracking sets. The body's IPCs will land
  // against these sets if processed before run-2 drops the activeRun.
  const run1 = makeTrackingSets('');  // runId filled in below
  void dispatchRunScript(makeScript(scriptId), makeRequest(opts.grantedPermissions), {
    toolsRegisteredThisRun:             run1.tools,
    macrosRegisteredThisRun:            run1.macros,
    macroInterceptorsRegisteredThisRun: run1.macroInterceptors,
    contentProcessorsRegisteredThisRun: run1.contentProcessors,
    rpcEndpointsRegisteredThisRun:      run1.rpcEndpoints,
  });
  run1.runId = lastDispatchedRunId(ipc);

  // Run-2: dispatch with DIFFERENT tracking sets. This drops run-1's
  // activeRun (per `scriptBodyActiveRunByScript.set` replacing).
  const run2 = makeTrackingSets('');
  void dispatchRunScript(makeScript(scriptId), makeRequest(opts.grantedPermissions), {
    toolsRegisteredThisRun:             run2.tools,
    macrosRegisteredThisRun:            run2.macros,
    macroInterceptorsRegisteredThisRun: run2.macroInterceptors,
    contentProcessorsRegisteredThisRun: run2.contentProcessors,
    rpcEndpointsRegisteredThisRun:      run2.rpcEndpoints,
  });
  run2.runId = lastDispatchedRunId(ipc);

  if (run1.runId === run2.runId) {
    throw new Error(
      '[long-running-script fixture] run1.runId === run2.runId — generateRunId ' +
      'collision? this should not happen with the seq counter',
    );
  }

  return {
    run1,
    run2,
    ipc,
    scriptId,

    async sendLateRegister(msg) {
      ipc.childContext.send({
        ...msg,
        runId: run1.runId,
      } as RegisterHandler);
      await nextTick();
    },

    async sendLateMacroRegister(name, overrides) {
      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'macro',
        runId:      run1.runId,
        scriptId,
        handlerId:  overrides?.handlerId ?? `late-${name}-handler`,
        name,
        def:        DEFAULT_MACRO_DEF,
        hasHandler: true,
        ...overrides,
      };
      ipc.childContext.send(msg);
      await nextTick();
    },

    async sendLateToolRegister(name, overrides) {
      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'tool',
        runId:      run1.runId,
        scriptId,
        handlerId:  overrides?.handlerId ?? `late-${name}-handler`,
        name,
        def:        DEFAULT_TOOL_DEF,
        hasHandler: true,
        ...overrides,
      };
      ipc.childContext.send(msg);
      await nextTick();
    },

    async sendLateMacroInterceptorRegister(handlerId, overrides) {
      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'macroInterceptor',
        runId:      run1.runId,
        scriptId,
        handlerId,
        // Forward handlerId as the canonical id so removeEntry(scriptId, handlerId) works.
        options:    { id: handlerId },
        hasHandler: true,
        ...overrides,
      };
      ipc.childContext.send(msg);
      await nextTick();
    },

    async sendLateContentProcessorRegister(handlerId, overrides) {
      const msg: RegisterHandler = {
        type:       'register-handler',
        kind:       'contentProcessor',
        runId:      run1.runId,
        scriptId,
        handlerId,
        options:    { id: handlerId },
        hasHandler: true,
        ...overrides,
      };
      ipc.childContext.send(msg);
      await nextTick();
    },
  };
}
