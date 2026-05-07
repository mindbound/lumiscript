/**
 * ============================================================================
 * LUMISCRIPT — TRIGGER REGISTRY (Option 2: metadata-declared events)
 * ============================================================================
 * Manages spindle.on() subscriptions for trigger scripts.
 *
 * Execution model:
 *   Registration — reads `script.triggers` (declared in the editor UI) and
 *                  subscribes to those events via spindle.on(). No script body
 *                  is executed during registration.
 *   Invocation   — when an event fires, the CURRENT version of the script is
 *                  fetched from storage (so code / bindings changes take effect
 *                  immediately without re-registration). The script body is
 *                  then executed with `data` and `api` injected.
 *
 * syncTriggers() in backend.ts is only called when subscriptions need to
 * change (enabled toggle, triggers list change, create, delete, duplicate).
 * Code-only autosaves do NOT trigger re-registration.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { Script } from '../types/script.js';
import type { BackendToFrontend } from '../types/messages.js';
import { SCRIPT_TIMEOUT_MS } from './executor.js';
import {
  spawnScriptRunner,
  dispatchRunScript,
  type DispatchRunScriptOpts,
  type DispatchRunScriptRequest,
} from '../script-runner/host-dispatcher.js';
import { isAnyBindingSatisfied } from './binding.js';
import { executionStatusStore } from './execution-status.js';
import { generateUUID } from '../utils/uuid.js';
import type { ScriptStorage } from '../storage/script-storage.js';
import { clearByScriptId as clearBroadcastByScriptId } from './broadcast-bus.js';
import { clearCommandHandlerByScriptId } from './api/commands.js';
import { listNamesByScriptId as toolNamesByScript, diffAndCleanStaleTools } from './tool-store.js';
import { listNamesByScriptId as macroNamesByScript, diffAndCleanStaleMacros } from './macro-store.js';
import {
  listIdsByScriptId as macroInterceptorIdsByScript,
  diffAndCleanStale as diffAndCleanStaleMacroInterceptors,
} from './macro-interceptor-registry.js';
import {
  listIdsByScriptId as contentProcessorIdsByScript,
  diffAndCleanStale as diffAndCleanStaleContentProcessors,
} from './message-content-processor-registry.js';
import {
  listIdsByScriptId as worldInfoInterceptorIdsByScript,
  diffAndCleanStale as diffAndCleanStaleWorldInfoInterceptors,
} from './world-info-interceptor-registry.js';
import {
  listEndpointsByScriptId as rpcEndpointsByScript,
  diffAndCleanStaleEndpoints,
} from './rpc-store.js';
import { logCleanup } from './cleanup-log.js';

// ─── Dependency factory ───────────────────────────────────────────────────────

export interface TriggerDeps {
  grantedPermissions: Set<string>;
  userId: string | null;
  scriptStorage: ScriptStorage;
  /** Forwarded to ExecutorOptions so api.tools.register/unregister push live updates. */
  onToolsChanged?: () => void;
  /** Forwarded to ExecutorOptions so api.chat.inject / removeInjection / clearInjections / clearAllInjections push live updates. */
  onInjectionsChanged?: () => void;
  /**
   * Per-execution async timeout in milliseconds, sourced from
   * `LumiScriptSettings.scriptTimeoutMs`. Defaults to `SCRIPT_TIMEOUT_MS` when absent.
   */
  scriptTimeoutMs?: number;
}

// ─── Script-runner strategy (Phase 9c) ────────────────────────────────────────

/**
 * Phase 9c — pluggable script-execution strategy. Production injects
 * `runScriptViaChild` (dispatch through `spindle.backendProcesses` to the
 * supervised child subprocess); tests inject an in-process runner that
 * calls `executeScript` directly so they don't have to mock the entire
 * `spindle.backendProcesses` surface to validate trigger-registry's
 * batch-aggregation / lifecycle / cleanup orchestration.
 *
 * The strategy is the only place that knows about child vs. in-process —
 * everything around it (subscriptions, batch state, frontend messaging,
 * stale-handle diff cleanup) is identical regardless of where the script
 * actually runs.
 */
export type ScriptRunner = (
  script:  Script,
  request: Omit<DispatchRunScriptRequest, 'userId'> & { userId: string | null },
  opts:    DispatchRunScriptOpts,
) => Promise<{ success: boolean; duration: number; error?: { message: string } }>;

/**
 * Default `ScriptRunner` — dispatches through the script-runner child.
 *
 * Lifecycle:
 *   - `userId === null`: frontend handshake hasn't populated `activeUserId`
 *     yet. The host requires `userId` for spawning operator-scoped
 *     subprocesses, so we surface a clean failure rather than spawning
 *     blind. In practice this only fires if a Lumiverse event arrives
 *     between trigger registration and the first frontend message —
 *     a very narrow window where the user can't realistically be
 *     interacting yet.
 *   - `spawnScriptRunner` is idempotent (returns the existing handle if
 *     the child is already running), so calling it on every dispatch is
 *     cheap. First call per session pays the spawn latency (~100ms);
 *     subsequent calls are O(1).
 *   - Any error (spawn failure, channel write fail, unhandled rejection)
 *     becomes a clean `{success:false}` shaped result; the trigger fire
 *     path never throws to its `spindle.on` subscriber.
 */
export const runScriptViaChild: ScriptRunner = async (script, request, opts) => {
  const { userId } = request;
  if (userId === null) {
    return {
      success:  false,
      duration: 0,
      error:    { message: 'script-runner: userId not yet known (frontend handshake pending) — script run deferred' },
    };
  }
  try {
    await spawnScriptRunner(userId);
    const r = await dispatchRunScript(
      script,
      { ...request, userId },
      opts,
    );
    return {
      success:  r.ok,
      duration: r.durationMs,
      ...(r.error ? { error: { message: r.error.message } } : {}),
    };
  } catch (err) {
    return {
      success:  false,
      duration: 0,
      error:    { message: err instanceof Error ? err.message : String(err) },
    };
  }
};

// ─── TriggerRegistry class ────────────────────────────────────────────────────

// ─── Synthetic event constants ────────────────────────────────────────────────

/**
 * `ls:startup` is a synthetic trigger event. It is NOT dispatched through
 * Spindle's event bus (Spindle silently no-ops unknown event subscriptions).
 * Instead, the TriggerRegistry fires it directly via `executeScript()` during
 * the `register()` call.
 *
 * Semantics:
 *   - Fires once per session for each enabled script that declares it.
 *   - Does NOT re-fire on `reloadAll()` (startupFired set is preserved).
 *   - Re-fires after a full teardown (master toggle off → on clears the set).
 *   - Scripts whose bindings are unsatisfied at boot are deferred into
 *     `startupPending` and retried on context change (chat open).
 */
const LS_STARTUP = 'ls:startup';

/**
 * `ls:teardown` is a synthetic trigger event mirroring `ls:startup`. Fires
 * when a trigger script is about to be disabled or deleted — before any
 * state cleanup runs, so the handler can still use the full api (tools,
 * macros, world info, chat, etc.) for whatever final-housekeeping work
 * it needs (e.g. deleting dynamic world-book entries it created).
 *
 * Semantics:
 *   - Fires once per disable/delete for each script that declares it.
 *   - `data.reason` discriminates: `'disabled'` | `'deleted'`.
 *   - Hard 10-second timeout. Handler exceeding it is abandoned; teardown
 *     continues regardless. Handler errors are logged but don't block.
 *   - The handler CANNOT veto the teardown — user-initiated disable/delete
 *     always proceeds to completion.
 *   - Not dispatched through Spindle's event bus (synthetic, LS-internal).
 */
const LS_TEARDOWN = 'ls:teardown';

/** Hard ceiling on teardown handler runtime. Beyond this, LS abandons the
 *  handler and proceeds with cleanup — buggy or blocking teardown code
 *  must not stall disable/delete. */
const LS_TEARDOWN_TIMEOUT_MS = 10_000;

export class TriggerRegistry {
  /** scriptId → { unsubs, events } — tracks live spindle.on() subscriptions */
  private cleanups = new Map<string, { unsubs: Array<() => void>; events: string[] }>();

  /**
   * Per-script count of currently-running concurrent invocations.
   * Used to suppress premature execution_ended messages: when multiple events
   * fire for the same script in the same tick (e.g., a CHAT_SWITCHED arrives
   * alongside a SETTINGS_UPDATED for an unrelated key), a fast early-return
   * from a guard check must not mark the script as "done" while a slower
   * invocation is still running.
   */
  private runningCounts = new Map<string, number>();

  /**
   * Per-script batch-aggregation state for concurrent invocations. Without
   * this, only the LAST-finishing closure's result would be reported — which
   * is usually a fast no-op guard-return (rounding to 0 ms) and hides the
   * real invocation's duration, or swallows failures in earlier invocations
   * that later ones happen to succeed over.
   *
   * Semantics across a batch (multiple concurrent invocations of the same
   * trigger, delimited by runningCounts going 0 → N → 0):
   *   - duration: max across invocations ("slowest invocation in the burst")
   *   - success: AND — any failure marks the batch as failed
   *   - error:   first failure encountered (earliest is usually root cause)
   */
  private batchMaxDuration = new Map<string, number>();
  private batchFirstError  = new Map<string, { message: string; runId: string }>();

  /** Scripts whose `ls:startup` has already fired this session. */
  private startupFired   = new Set<string>();
  /** Scripts whose `ls:startup` was deferred because bindings weren't satisfied. */
  private startupPending = new Set<string>();

  constructor(
    private readonly getDeps: () => TriggerDeps,
    private readonly sendToFrontend: (msg: BackendToFrontend) => void,
    /**
     * Phase 9c — script-execution strategy. Defaults to the production
     * dispatch-through-child runner; tests inject an in-process runner
     * (see `tests/_infra/in-process-runner.ts`) so they can validate
     * trigger-registry's batch / cleanup / messaging logic without
     * having to mock the full `spindle.backendProcesses` surface.
     */
    private readonly runScript: ScriptRunner = runScriptViaChild,
  ) {}

  /**
   * Subscribe to the events declared in `script.triggers`.
   * No script body is executed; the body only runs when an event fires.
   *
   * The handler captures `script.id` only (not the full script object).
   * At invocation time it fetches the current script from scriptStorage so
   * that code / bindings / enabled changes take effect without re-registration.
   */
  async register(script: Script): Promise<void> {
    this.unregister(script.id);
    if (!script.enabled || script.type !== 'trigger') return;

    const events = script.triggers ?? [];
    if (events.length === 0) return;

    const hasStartup = events.includes(LS_STARTUP);
    // Filter synthetic LS events out of the Spindle subscriptions — neither
    // is dispatched via Spindle's event bus. `ls:startup` fires from
    // `register()` below; `ls:teardown` fires from `fireTeardown()` which
    // is invoked by backend.ts before disable/delete cleanup.
    const spindleEvents = events.filter(
      e => e !== LS_STARTUP && e !== LS_TEARDOWN,
    );

    // Capture the script ID only. The full script is fetched from storage at
    // invocation time so code changes take effect without re-registration.
    const scriptId = script.id;
    const unsubs: Array<() => void> = [];

    for (const event of spindleEvents) {
      const unsub = spindle.on(event, async (payload: unknown) => {
        // ── Fetch current script from storage ──────────────────────────────
        const { grantedPermissions, userId, scriptStorage, onToolsChanged, onInjectionsChanged, scriptTimeoutMs } = this.getDeps();
        const currentScript = scriptStorage.getScript(scriptId);

        // Bail if the script has been deleted, disabled, or is no longer a trigger.
        if (!currentScript || !currentScript.enabled || currentScript.type !== 'trigger') return;

        // ── Binding gate ───────────────────────────────────────────────────
        if (!isAnyBindingSatisfied(currentScript.bindings)) return;

        // ── Build execution context ────────────────────────────────────────
        // No `activeContext` snapshot — `buildScriptAPI` substitutes a
        // live-reading view sourced from `binding.ts`. See the comment
        // on `ExecutorOptions.activeContext` for the full rationale.
        const runId = generateUUID();

        const eventData: Record<string, unknown> = {
          __event: event,
          ...(payload !== null && typeof payload === 'object' ? payload as Record<string, unknown> : {}),
        };

        // ── Track concurrent invocations (issue: multiple events fire on chat
        //    open; a fast early-return from a guard check must not prematurely
        //    mark the script as done while a slower invocation is still running).
        const prevCount = this.runningCounts.get(currentScript.id) ?? 0;
        this.runningCounts.set(currentScript.id, prevCount + 1);

        // Initialize batch aggregates when this is the first invocation of a
        // new batch. Every subsequent concurrent invocation will fold its
        // result into these maps, and the last one out flushes them.
        if (prevCount === 0) {
          this.batchMaxDuration.set(currentScript.id, 0);
          this.batchFirstError.delete(currentScript.id);
        }

        // ── Notify frontend ────────────────────────────────────────────────
        executionStatusStore.markRunning(currentScript.id);
        this.sendToFrontend({
          type: 'execution_started',
          scriptId: currentScript.id,
          scriptName: currentScript.name,
          runId,
        });

        // ── Clear stale broadcast/command handlers from previous invocation ─
        // Each trigger invocation is a fresh execution: subscriptions set up
        // by api.broadcast.on() in the previous run are wiped before the new
        // run starts, preventing handler accumulation across invocations.
        // NOTE: DOM state is NOT cleaned here — scripts that early-return
        // (e.g. SETTINGS_UPDATED guard) must keep their DOM intact. Scripts
        // should call api.ui.dom.cleanup() explicitly when re-injecting.
        clearBroadcastByScriptId(scriptId);
        clearCommandHandlerByScriptId(scriptId);

        // ── Execute the current script body ────────────────────────────────
        // Snapshot tool + macro names AND interceptor / processor entry ids
        // before execution for the auto-cleanup diff.
        const preRunToolNames                        = toolNamesByScript(scriptId);
        const preRunMacroNames                       = macroNamesByScript(scriptId);
        const preRunMacroInterceptorIds              = macroInterceptorIdsByScript(scriptId);
        const preRunContentProcessorIds              = contentProcessorIdsByScript(scriptId);
        const preRunWorldInfoInterceptorIds          = worldInfoInterceptorIdsByScript(scriptId);
        const preRunRpcEndpoints                     = rpcEndpointsByScript(scriptId);
        const toolsRegisteredThisRun                 = new Set<string>();
        const macrosRegisteredThisRun                = new Set<string>();
        const macroInterceptorsRegisteredThisRun     = new Set<string>();
        const contentProcessorsRegisteredThisRun     = new Set<string>();
        const worldInfoInterceptorsRegisteredThisRun = new Set<string>();
        const rpcEndpointsRegisteredThisRun          = new Set<string>();

        // Phase 9c: dispatch through `spindle.backendProcesses` child instead
        // of in-process `executeScript`. Sync-loop recovery now works — the
        // host SIGKILLs a hung child via heartbeat watchdog without taking
        // down LumiScript itself. Async timeout continues to live inside
        // the child's `Promise.race` (same algorithmic behaviour, just
        // executed in the supervised subprocess).
        //
        // `scriptStorage` is intentionally NOT threaded into opts —
        // user-library `script.require()` IPC routing is Phase 9d; until
        // then non-`ls:*` requires throw with a clear message.
        // `scriptStorage` reference is unused on this path now.
        void scriptStorage;
        const result = await this.runScript(
          currentScript,
          {
            data:               eventData,
            timeoutMs:          scriptTimeoutMs ?? SCRIPT_TIMEOUT_MS,
            grantedPermissions,
            userId,
          },
          {
            onConsole: (entry) =>
              this.sendToFrontend({ type: 'console_entry', scriptId: currentScript.id, runId, entry }),
            onToolsChanged,
            onInjectionsChanged,
            toolsRegisteredThisRun,
            macrosRegisteredThisRun,
            macroInterceptorsRegisteredThisRun,
            contentProcessorsRegisteredThisRun,
            worldInfoInterceptorsRegisteredThisRun,
            rpcEndpointsRegisteredThisRun,
          },
        );

        // ── Auto-cleanup stale registrations ──────────────────────────────
        // Tools + macros: host-side unregister + audit log.
        // Interceptors + processors: LS-side only (one extension-level
        // registration with the host stays live), drop-only, no log.
        // RPC endpoints: spindle-side unregister + audit log (cross-
        // extension visibility makes orphans observable, hence the log).
        const staleTools = diffAndCleanStaleTools(scriptId, preRunToolNames, toolsRegisteredThisRun);
        for (const name of staleTools) {
          try { spindle.unregisterTool(name); } catch { /* swallow */ }
        }
        const staleMacros = diffAndCleanStaleMacros(scriptId, preRunMacroNames, macrosRegisteredThisRun);
        for (const name of staleMacros) {
          try { spindle.unregisterMacro(name); } catch { /* swallow */ }
        }
        diffAndCleanStaleMacroInterceptors(
          scriptId, preRunMacroInterceptorIds, macroInterceptorsRegisteredThisRun,
        );
        diffAndCleanStaleContentProcessors(
          scriptId, preRunContentProcessorIds, contentProcessorsRegisteredThisRun,
        );
        diffAndCleanStaleWorldInfoInterceptors(
          scriptId, preRunWorldInfoInterceptorIds, worldInfoInterceptorsRegisteredThisRun,
        );
        const staleRpcEndpoints = diffAndCleanStaleEndpoints(
          scriptId, preRunRpcEndpoints, rpcEndpointsRegisteredThisRun,
        );
        for (const endpoint of staleRpcEndpoints) {
          try { spindle.rpcPool.unregister(endpoint); } catch { /* swallow */ }
        }
        logCleanup('tool',  'stale after re-run', currentScript.name, staleTools);
        logCleanup('macro', 'stale after re-run', currentScript.name, staleMacros);
        logCleanup('rpc',   'stale after re-run', currentScript.name, staleRpcEndpoints);

        // ── Fold this invocation's result into the batch aggregates ───────
        const prevMax = this.batchMaxDuration.get(currentScript.id) ?? 0;
        this.batchMaxDuration.set(currentScript.id, Math.max(prevMax, result.duration));
        if (!result.success && !this.batchFirstError.has(currentScript.id)) {
          this.batchFirstError.set(currentScript.id, {
            message: result.error?.message ?? 'Unknown error',
            // Use the trigger-registry-side `runId` (used for execution_started /
            // console_entry messages) — the dispatcher's wire-side runId is an
            // internal IPC correlation key and isn't exposed to the frontend.
            runId,
          });
        }

        // ── Flush — only when the LAST concurrent invocation finishes ────
        const remaining = (this.runningCounts.get(currentScript.id) ?? 1) - 1;
        this.runningCounts.set(currentScript.id, remaining);

        if (remaining === 0) {
          const batchDuration = this.batchMaxDuration.get(currentScript.id) ?? result.duration;
          const batchError    = this.batchFirstError.get(currentScript.id);
          const batchSuccess  = !batchError;
          // Drop batch state before dispatching so the next concurrent burst
          // starts clean even if a synchronous handler re-fires during send.
          this.batchMaxDuration.delete(currentScript.id);
          this.batchFirstError.delete(currentScript.id);

          if (batchSuccess) {
            executionStatusStore.markSuccess(currentScript.id, batchDuration);
          } else {
            executionStatusStore.markError(
              currentScript.id,
              batchDuration,
              batchError.message,
            );
          }

          this.sendToFrontend({
            type: 'execution_ended',
            scriptId: currentScript.id,
            // Report the failing invocation's runId when the batch failed so
            // the console entry that gets appended ties back to the run that
            // actually produced the error. Otherwise use the closing run.
            runId: batchError?.runId ?? runId,
            success: batchSuccess,
            duration: batchDuration,
            error: batchError?.message,
          });
          // Surface failures as a user-visible toast. The sidebar dot and the
          // editor console already reflect the error, but those require the
          // user to be looking at the extension panel — a toast gives
          // immediate feedback regardless of which Lumiverse view is active.
          if (!batchSuccess) {
            spindle.toast.error(batchError.message, {
              title: `LumiScript — ${currentScript.name}`,
              duration: 10_000,
            });
          }
        }
      });

      unsubs.push(unsub);
    }

    this.cleanups.set(scriptId, { unsubs, events: [...events] });
    spindle.log.info(
      `[LumiScript] Subscribed "${script.name}" to: ${events.join(', ')}`,
    );

    // ── Synthetic ls:startup dispatch ───────────────────────────────────
    if (hasStartup && !this.startupFired.has(scriptId)) {
      if (isAnyBindingSatisfied(script.bindings)) {
        this.startupFired.add(scriptId);
        this.startupPending.delete(scriptId);
        // Fire-and-forget — don't block registration of remaining scripts.
        void this.fireStartup(script);
      } else {
        // Bindings not satisfied (e.g. no chat open yet). Defer until
        // retryPendingStartups() is called on context change.
        this.startupPending.add(scriptId);
      }
    }
  }

  /** Remove all spindle.on() subscriptions for a specific script. */
  unregister(scriptId: string): void {
    const entry = this.cleanups.get(scriptId);
    if (entry) {
      for (const u of entry.unsubs) u();
      this.cleanups.delete(scriptId);
    }
    // Remove any broadcast subscriptions and command handlers owned by this script.
    clearBroadcastByScriptId(scriptId);
    clearCommandHandlerByScriptId(scriptId);
  }

  /**
   * Remove all registered subscriptions (all scripts).
   * Clears startup tracking — a subsequent `reloadAll()` will re-fire
   * `ls:startup` for all eligible scripts. This gives "full teardown"
   * semantics: master toggle off → on restarts everything.
   */
  unregisterAll(): void {
    for (const [id] of [...this.cleanups]) {
      this.unregister(id);
    }
    this.startupFired.clear();
    this.startupPending.clear();
  }

  /**
   * Full reload: unregister everything, then re-subscribe all enabled triggers.
   * Called on startup, on enabled/triggers changes, and on settings changes.
   *
   * Preserves `startupFired` across the unregister/re-register cycle so that
   * `syncTriggers()` calls (from script mutations, code edits, etc.) do NOT
   * re-fire startup scripts that already ran this session. The
   * `unregisterAll()` call inside would normally clear the set; we save and
   * restore it here. A standalone `unregisterAll()` call (master toggle off)
   * DOES clear the set — giving fresh-start semantics.
   */
  async reloadAll(scripts: Script[]): Promise<void> {
    const savedFired   = new Set(this.startupFired);
    const savedPending = new Set(this.startupPending);
    this.unregisterAll();
    this.startupFired   = savedFired;
    this.startupPending = savedPending;

    for (const script of scripts) {
      if (script.type === 'trigger' && script.enabled) {
        await this.register(script);
      }
    }
  }

  // ─── ls:startup dispatch ──────────────────────────────────────────────────

  /**
   * Retry deferred `ls:startup` scripts whose bindings were previously
   * unsatisfied. Called by backend.ts when the active context changes
   * (chat open, character switch) so that character-bound startup scripts
   * get a second chance.
   */
  async retryPendingStartups(): Promise<void> {
    if (this.startupPending.size === 0) return;
    const { scriptStorage } = this.getDeps();
    for (const scriptId of [...this.startupPending]) {
      const script = scriptStorage.getScript(scriptId);
      if (!script || !script.enabled || script.type !== 'trigger') {
        this.startupPending.delete(scriptId);
        continue;
      }
      if (!isAnyBindingSatisfied(script.bindings)) continue; // still not satisfied
      this.startupPending.delete(scriptId);
      this.startupFired.add(scriptId);
      await this.fireStartup(script);
    }
  }

  /**
   * Execute a script's body for `ls:startup`. Mirrors the event-handler
   * execution path (watchdog, auto-cleanup, frontend notifications, toast on
   * error) but without batch-aggregation — startup fires once, not
   * concurrently.
   */
  private async fireStartup(script: Script): Promise<void> {
    const { grantedPermissions, userId, scriptStorage, onToolsChanged, onInjectionsChanged, scriptTimeoutMs } = this.getDeps();
    const runId = generateUUID();

    executionStatusStore.markRunning(script.id);
    this.sendToFrontend({
      type: 'execution_started',
      scriptId: script.id,
      scriptName: script.name,
      runId,
    });

    clearBroadcastByScriptId(script.id);
    clearCommandHandlerByScriptId(script.id);

    const preRunToolNames                    = toolNamesByScript(script.id);
    const preRunMacroNames                   = macroNamesByScript(script.id);
    const preRunMacroInterceptorIds          = macroInterceptorIdsByScript(script.id);
    const preRunContentProcessorIds          = contentProcessorIdsByScript(script.id);
    const preRunRpcEndpoints                 = rpcEndpointsByScript(script.id);
    const toolsRegisteredThisRun             = new Set<string>();
    const macrosRegisteredThisRun            = new Set<string>();
    const macroInterceptorsRegisteredThisRun = new Set<string>();
    const contentProcessorsRegisteredThisRun = new Set<string>();
    const rpcEndpointsRegisteredThisRun      = new Set<string>();

    // Phase 9c: dispatch through the script-runner child. `scriptStorage`
    // is unused on this path until 9d wires user-library `script.require()`
    // through IPC.
    void scriptStorage;
    const result = await this.runScript(
      script,
      {
        data:               { __event: LS_STARTUP },
        timeoutMs:          scriptTimeoutMs ?? SCRIPT_TIMEOUT_MS,
        grantedPermissions,
        userId,
      },
      {
        onConsole: (entry) =>
          this.sendToFrontend({ type: 'console_entry', scriptId: script.id, runId, entry }),
        onToolsChanged,
        onInjectionsChanged,
        toolsRegisteredThisRun,
        macrosRegisteredThisRun,
        macroInterceptorsRegisteredThisRun,
        contentProcessorsRegisteredThisRun,
        rpcEndpointsRegisteredThisRun,
      },
    );

    const staleTools = diffAndCleanStaleTools(script.id, preRunToolNames, toolsRegisteredThisRun);
    for (const name of staleTools) {
      try { spindle.unregisterTool(name); } catch { /* swallow */ }
    }
    const staleMacros = diffAndCleanStaleMacros(script.id, preRunMacroNames, macrosRegisteredThisRun);
    for (const name of staleMacros) {
      try { spindle.unregisterMacro(name); } catch { /* swallow */ }
    }
    diffAndCleanStaleMacroInterceptors(
      script.id, preRunMacroInterceptorIds, macroInterceptorsRegisteredThisRun,
    );
    diffAndCleanStaleContentProcessors(
      script.id, preRunContentProcessorIds, contentProcessorsRegisteredThisRun,
    );
    const staleRpcEndpoints = diffAndCleanStaleEndpoints(
      script.id, preRunRpcEndpoints, rpcEndpointsRegisteredThisRun,
    );
    for (const endpoint of staleRpcEndpoints) {
      try { spindle.rpcPool.unregister(endpoint); } catch { /* swallow */ }
    }
    logCleanup('tool',  'stale after re-run', script.name, staleTools);
    logCleanup('macro', 'stale after re-run', script.name, staleMacros);
    logCleanup('rpc',   'stale after re-run', script.name, staleRpcEndpoints);

    if (result.success) {
      executionStatusStore.markSuccess(script.id, result.duration);
    } else {
      executionStatusStore.markError(script.id, result.duration, result.error?.message ?? 'Unknown error');
    }

    this.sendToFrontend({
      type: 'execution_ended',
      scriptId: script.id,
      runId,                          // local runId — see comment in event-handler path
      success: result.success,
      duration: result.duration,
      error: result.error?.message,
    });

    if (!result.success) {
      spindle.toast.error(result.error?.message ?? 'Unknown error', {
        title: `LumiScript — ${script.name}`,
        duration: 10_000,
      });
    }
  }

  // ─── ls:teardown dispatch ────────────────────────────────────────────────

  /**
   * Fire `ls:teardown` for a script that's about to be disabled or deleted.
   * Called by backend.ts BEFORE any cleanup pass — at this point the
   * script's tools / macros / broadcast subscriptions / WI entries it
   * created etc. are all still live, so the handler has full api access
   * to do final housekeeping.
   *
   * Contract:
   *   - Runs synchronously (awaited by the caller) so cleanup can proceed
   *     after the handler completes or times out.
   *   - Hard `LS_TEARDOWN_TIMEOUT_MS` budget. Exceeding it logs a warning
   *     and returns; the handler keeps running orphaned but LS proceeds.
   *   - Handler errors are caught + logged. They do NOT surface as toasts
   *     (teardown shouldn't spam the user) and do NOT block cleanup.
   *   - Scripts that don't declare `ls:teardown` in their triggers list
   *     are skipped — no-op return.
   *
   * `reason` discriminates between disable and delete so handlers that
   * care about the distinction (e.g. freeze state on disable, nuke it
   * on delete) can branch on it.
   */
  async fireTeardown(
    script: Script,
    reason: 'disabled' | 'deleted',
  ): Promise<void> {
    // Skip scripts that don't opt in. Cheap guard, avoids any executor spin-up
    // for the common case of scripts that don't need teardown hooks.
    if (!(script.triggers ?? []).includes(LS_TEARDOWN)) return;
    // Skip disabled scripts on 'deleted' path — they were already torn down
    // on the earlier disable event, nothing to clean up a second time.
    if (!script.enabled && reason === 'deleted') return;

    const { grantedPermissions, userId, scriptStorage, onToolsChanged, onInjectionsChanged, scriptTimeoutMs } = this.getDeps();
    const runId = generateUUID();

    executionStatusStore.markRunning(script.id);
    this.sendToFrontend({
      type: 'execution_started',
      scriptId: script.id,
      scriptName: script.name,
      runId,
    });

    // Phase 9c: dispatch through the script-runner child. `scriptStorage`
    // unused here until 9d wires user-library `script.require()` IPC.
    void scriptStorage;

    // Race the dispatch against the hard teardown budget. If the handler
    // exceeds the budget, we abandon waiting and log a warning — the
    // dispatch promise keeps resolving in the background, but cleanup
    // proceeds immediately. The child's own async-timeout race fires
    // separately at `scriptTimeoutMs` and will emit a normal failure
    // result if the handler hangs on a stalled await.
    let timedOut = false;
    const timeoutPromise = new Promise<null>((resolve) => {
      setTimeout(() => {
        timedOut = true;
        resolve(null);
      }, LS_TEARDOWN_TIMEOUT_MS);
    });

    const execPromise = this.runScript(
      script,
      {
        data:               { __event: LS_TEARDOWN, reason, scriptId: script.id, scriptName: script.name },
        timeoutMs:          scriptTimeoutMs ?? SCRIPT_TIMEOUT_MS,
        grantedPermissions,
        userId,
      },
      {
        onConsole: (entry) =>
          this.sendToFrontend({ type: 'console_entry', scriptId: script.id, runId, entry }),
        onToolsChanged,
        onInjectionsChanged,
        // Intentionally no *RegisteredThisRun trackers — stale-diff cleanup
        // after a teardown run makes no sense; the whole script is about
        // to be unregistered anyway. (Applies to tools, macros, macro
        // interceptors, and content processors equally.)
      },
    );
    const result = await Promise.race([execPromise, timeoutPromise]);

    if (timedOut || result === null) {
      spindle.log.warn(
        `[LumiScript] ls:teardown handler for "${script.name}" exceeded ` +
        `${LS_TEARDOWN_TIMEOUT_MS / 1000}s budget — proceeding with cleanup ` +
        `(handler may still be running).`,
      );
      executionStatusStore.markError(
        script.id,
        LS_TEARDOWN_TIMEOUT_MS,
        'ls:teardown handler timeout',
      );
      this.sendToFrontend({
        type: 'execution_ended',
        scriptId: script.id,
        runId,
        success: false,
        duration: LS_TEARDOWN_TIMEOUT_MS,
        error: 'ls:teardown handler exceeded timeout budget',
      });
      return;
    }

    if (result.success) {
      executionStatusStore.markSuccess(script.id, result.duration);
    } else {
      // Log handler errors but DO NOT toast — teardown shouldn't spam the
      // user on script disable/delete. Errors still surface in the editor
      // console via the execution_ended message below.
      spindle.log.warn(
        `[LumiScript] ls:teardown handler for "${script.name}" failed: ` +
        `${result.error?.message ?? 'Unknown error'}`,
      );
      executionStatusStore.markError(script.id, result.duration, result.error?.message ?? 'Unknown error');
    }

    this.sendToFrontend({
      type: 'execution_ended',
      scriptId: script.id,
      runId,                          // local runId — see comment in event-handler path
      success: result.success,
      duration: result.duration,
      error: result.error?.message,
    });
  }

  // ─── Diagnostics ──────────────────────────────────────────────────────────

  /**
   * Returns the currently subscribed event names per script.
   * Derived from the live cleanups map (matches script.triggers at registration time).
   */
  getRegistrations(): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    for (const [scriptId, entry] of this.cleanups) {
      result[scriptId] = [...entry.events];
    }
    return result;
  }

  /** Total number of live spindle.on() subscriptions across all scripts. */
  get handlerCount(): number {
    let n = 0;
    for (const [, entry] of this.cleanups) n += entry.unsubs.length;
    return n;
  }
}
