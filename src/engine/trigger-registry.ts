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
  scriptHasActiveDispatch,
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
  /**
   * v1.0.0-rc.8 — full per-script state wipe used by `fireReload` to
   * bring the script back to a clean slate before the body re-runs.
   * Wired by `backend.ts` to `wipeScriptStateForReload`. Wipes every
   * pinning registry the disable path tears down (DOM listeners, UI
   * elements, modals, widgets, drawer tabs, input-bar actions,
   * world-info interceptors, injections, etc.) while preserving the
   * bits that should survive a reload (script storage, theme overrides,
   * collection handle cache).
   *
   * Optional for test rigs — when absent, `fireReload` falls back to
   * the pre-rc.8 partial wipe (broadcasts + commands + diff-cleaned
   * tools/macros/interceptors/processors/RPC). In-process tests that
   * don't exercise the missing surfaces don't need to wire this.
   */
  wipeScriptStateForReload?: (scriptId: string) => Promise<void>;
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
 * `ls:startup` is a synthetic trigger event marking the script entering its
 * "active" state. Symmetric partner to `ls:teardown` (which fires when the
 * script EXITS the active state). NOT dispatched through Spindle's event
 * bus — the TriggerRegistry fires it directly via `executeScript()`.
 *
 * Fires on:
 *   - LumiScript boot for each enabled script that declares it.
 *   - The disabled→enabled transition (user toggles the script back on)
 *     for each script that declares it — symmetric with `ls:teardown` on
 *     the enabled→disabled side. This is what lets scripts re-establish
 *     state that disable's cleanup wiped (most importantly bottom-of-body
 *     `api.broadcast.on(...)` registrations).
 *
 * Does NOT fire on:
 *   - Triggers-only edits (no transition into the active state).
 *   - Script creation, even when enabled at creation time (the contract
 *     is "explicit user transition into active state"; brand-new scripts
 *     usually have no body anyway).
 *   - `reloadAll()` cascades (the boot-side `startupFired` set is
 *     preserved across syncTriggers churn).
 *
 * Scripts whose bindings are unsatisfied at boot are deferred into
 * `startupPending` and retried on context change (chat open).
 *
 * Use for tool registration, cache pre-warming, broadcast subscription
 * setup, and other init that needs to run whenever the script enters the
 * running state. After a disable→enable round-trip, anything from the
 * previous run was wiped by `ls:teardown`, so re-running startup is
 * exactly what restores the script to a working state.
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

/**
 * `ls:reload` is a synthetic trigger event for hot-reload-on-edit (v1.0
 * Phase D — see notes/v1.0-runtime-isolation-and-hot-reload.md).
 *
 * Fires automatically after a code-only `update_script` IPC (debounced
 * by ~500ms on the backend side) for enabled trigger scripts that have
 * **opted in** via the `// @ls:reload-on-edit` directive and whose new
 * code is byte-different from the prior version. The script's body
 * re-runs end-to-end within its existing worker, so registrations
 * (broadcasts, commands, macros, tools, interceptors) get refreshed
 * closures pointing at the new code.
 *
 * Auto-reload is **opt-in by default** (post-design re-evaluation): the
 * failure mode of opt-out + forgotten directive (burned API quota,
 * duplicated DB rows, leaked timers) is too costly to make the default.
 * Scripts that benefit from auto-reload (UI scripts, idempotent
 * observers like trackers) add the directive explicitly; scripts with
 * non-idempotent module-scope work are protected by default.
 *
 * Semantics:
 *   - Fires once per code change (debounce-coalesced). Multiple rapid
 *     patches collapse to one fire.
 *   - Deferred while a real trigger run for the script is in flight;
 *     drains once the running count hits 0.
 *   - Skipped entirely if the script's code lacks the
 *     `// @ls:reload-on-edit` directive (the default — opt-in path).
 *   - Body branches on `data.__event === 'ls:reload'` if it wants to
 *     distinguish a hot-reload from a fresh boot (`ls:startup`).
 *   - Not dispatched through Spindle's event bus (synthetic, LS-internal).
 *   - Same routing as any other body run — uses the script's assigned
 *     worker (Phase C2).
 *
 * The manual "Reload script" palette/editor action always fires
 * (bypasses the directive check) — see `backend.ts`'s `reload_script`
 * IPC handler.
 */
const LS_RELOAD = 'ls:reload';

/**
 * Line-anchored regex matching the `@ls:reload-on-edit` opt-in directive.
 * Detects `// @ls:reload-on-edit` at the start of any line in the
 * script's code (after optional leading whitespace), followed by
 * end-of-line or whitespace. Detected at `update_script` time — no
 * persistence, no schema change.
 *
 * The `(?:\s|$)` lookahead-style guard rejects extended tokens like
 * `// @ls:reload-on-edit-disabled` or `// @ls:reload-on-edit2` — these
 * are clearly NOT the directive and shouldn't trigger opt-in. (A bare
 * `\b` word boundary would match between `edit` and `-`, since `-` is
 * a non-word character.)
 *
 * The `@ls:` prefix is the runtime-directive namespace — distinguishes
 * runtime-active directives from passive frontmatter tags like
 * `@description`, `@author`, `@version`, `@tags`. See
 * `notes/v1.0-user-facing-changes.md` § Runtime directives.
 */
const RELOAD_ON_EDIT_DIRECTIVE_REGEX = /^\s*\/\/\s*@ls:reload-on-edit(?:\s|$)/m;

/**
 * True if `code` opts IN to hot-reload-on-edit via the
 * `// @ls:reload-on-edit` directive.
 *
 * Exported for use by `backend.ts`'s `update_script` eligibility check —
 * the autosave path fires the auto-reload only when the directive is
 * present. Manual reload (via the "Reload script" palette action) calls
 * `fireReload` directly and is NOT gated by this check.
 */
export function hasReloadOnEditDirective(code: string): boolean {
  return RELOAD_ON_EDIT_DIRECTIVE_REGEX.test(code);
}

/**
 * Payload threaded into the `ls:reload` event's `data` object. Public so
 * `backend.ts`'s eligibility/debounce caller can construct it from the
 * pre-update + post-update script state.
 */
export interface LsReloadPayload {
  /** What triggered the reload. `'autosave'` from code-patch IPC, `'manual'` from a palette command. */
  reason:           'autosave' | 'manual';
  /** Short hash of the previous code (first 16 hex chars of sha256). */
  previousCodeHash: string;
  /** Short hash of the current code (first 16 hex chars of sha256). */
  currentCodeHash:  string;
  /** Length of the previous code. */
  previousLength:   number;
  /** Length of the current code. */
  currentLength:    number;
}

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

  /**
   * Phase D — scripts whose **manual** `ls:reload` fire was deferred because
   * work for the same script was in flight. The pending payload fires once
   * the script becomes idle, either via:
   *   1. The event-handler completion drain (`remaining === 0` branch
   *      in the Spindle event handler), for the case where the in-flight
   *      work IS a real trigger event; OR
   *   2. The polling drain (`pendingReloadPollTimers` below), for the
   *      case where the in-flight work is a handler invocation
   *      (broadcast / macro / tool / RPC) — those don't bump
   *      `runningCounts`, so they don't trigger drain path 1.
   *
   * Coalesces multiple rapid manual reloads to one fire (a later press's
   * payload overwrites the earlier pending entry).
   *
   * **Only the manual path queues.** Autosave-driven reloads
   * (`reason: 'autosave'`) drop outright when a run is in flight — the next
   * real trigger event will re-execute the body with the new code, so a
   * queued reload would be redundant + out-of-order vs. the user's
   * expectation that "I edited, the in-flight run keeps doing its thing,
   * normal events resume with the new code." Manual reloads
   * (`reason: 'manual'`) preserve queue-then-fire semantics because the
   * user explicitly requested the body re-run.
   */
  private pendingReload  = new Map<string, LsReloadPayload>();

  /**
   * Phase F follow-up — per-script setInterval timers polling for the
   * "in-flight work cleared" condition. Armed when `fireReload` defers a
   * **manual** reload because of an in-flight handler invocation (not a
   * real trigger). Cleared when the poll drain fires OR when an event-
   * handler completion drain fires first (whichever comes first wins).
   */
  private pendingReloadPollTimers = new Map<string, ReturnType<typeof setInterval>>();

  /**
   * Scripts whose registered live state must be wiped — WITHOUT re-running the
   * body — once their in-flight work drains. Queued by `fireEngineSwitchWipe`
   * when an engine switch hits a script mid-run; drained by the same two paths
   * as `pendingReload` (event-handler completion + the idle poll). A queued
   * full reload supersedes a queued wipe: the reload wipes before re-running,
   * so both drains consume this flag when a reload is also pending.
   */
  private pendingEngineSwitchWipe = new Set<string>();

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
    // Drop ONLY this script's Spindle event subs (`cleanups` entry) —
    // not its broadcast subscriptions, command handlers, or pending-reload
    // state. This is a trigger-config refresh, not a teardown.
    //
    // The reason this is gated: `register()` runs for EVERY enabled
    // script during a `syncTriggers` / `reloadAll` cycle, which is
    // triggered by ANY script's `enabled` or `triggers` change. Wiping
    // lifecycle subs here causes a "sibling script gets disabled →
    // every other enabled script loses its broadcasts" cascade, with
    // bodies not re-firing to re-register them. See `unregister`'s
    // JSDoc for the canonical bug (tracker / tracker-ui rerun spinner).
    //
    // True teardown paths (master toggle off via `unregisterAll`,
    // backend.ts disable / delete branches with explicit cleanup) keep
    // the default lifecycle-clear behaviour.
    this.unregister(script.id, { clearLifecycleSubs: false });
    if (!script.enabled || script.type !== 'trigger') return;

    const events = script.triggers ?? [];
    if (events.length === 0) return;

    const hasStartup = events.includes(LS_STARTUP);
    // Filter the whole `ls:*` namespace out of the Spindle subscriptions.
    // These are LumiScript-synthetic events fired directly via
    // `fireStartup` / `fireTeardown` / `fireReload`; none are dispatched
    // through Spindle's event bus, so calling `spindle.on('ls:...', ...)`
    // produces host-side "Unknown event" warnings. Using the prefix rule
    // (rather than enumerating LS_STARTUP / LS_TEARDOWN / LS_RELOAD /
    // future LS_* additions) also drops legacy / stale triggers-list
    // entries from older versions — e.g. `ls:enabled` from the pre-merge
    // RC iterations — instead of leaking them as Spindle subscriptions.
    const spindleEvents = events.filter(e => !e.startsWith('ls:'));

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

          // Phase D — drain any pending hot-reload for this script. A code
          // edit during this run's lifetime queued a reload payload via
          // `fireReload`; now that the run is fully drained, fire it.
          // Phase F follow-up — also cancel the polling drain (if armed)
          // so we don't have two drain paths racing; this event-handler
          // path wins for the trigger-event case.
          const pending = this.pendingReload.get(currentScript.id);
          // A queued engine-switch wipe is subsumed by a queued reload (the
          // reload wipes before re-running), so consume the flag either way.
          const wipeQueued = this.pendingEngineSwitchWipe.delete(currentScript.id);
          if (pending !== undefined) {
            this.pendingReload.delete(currentScript.id);
            this.clearPendingReloadPoll(currentScript.id);
            // Re-read the latest script from storage — code may have
            // changed again between the queue and the drain.
            const latest = this.getDeps().scriptStorage.getScript(currentScript.id);
            if (latest && latest.enabled && latest.type === 'trigger') {
              void this.fireReload(latest, pending);
            }
          } else if (wipeQueued) {
            this.clearPendingReloadPoll(currentScript.id);
            const latest = this.getDeps().scriptStorage.getScript(currentScript.id);
            if (latest && latest.enabled && latest.type === 'trigger') {
              // Re-checks in-flight internally — re-queues itself if another
              // run started between this drain check and the call.
              void this.fireEngineSwitchWipe(latest);
            }
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

  /**
   * Remove all spindle.on() subscriptions for a specific script.
   *
   * `opts.clearLifecycleSubs` (default `true`) controls whether the
   * script's "lifecycle" registrations are also cleared:
   *
   *   - **broadcast subscriptions** owned by the script (the script's own
   *     `api.broadcast.on(...)` handlers — but NOT other scripts'
   *     subscriptions to events this script emits)
   *   - **command handlers** owned by the script (`api.commands.register`)
   *   - **pending hot-reload** state for this script
   *
   * Set to `false` when called from `register()`'s "drop and re-add Spindle
   * event subs" path (the syncTriggers / reloadAll cycle). That path is a
   * trigger-config refresh, NOT a teardown — wiping broadcast/command
   * subs there has a serious side effect: when ANY script's `enabled` or
   * `triggers` changes, syncTriggers re-registers EVERY enabled script,
   * each going through `unregister()` first. That means a sibling
   * script's disable wipes THIS script's broadcast subs as a side effect
   * — bodies don't re-fire to re-register them, so the subs vanish until
   * the next real trigger event for each script. Canonical bug:
   * disabling tracker mid-rerun caused tracker-ui's `tracker:rerun-state-
   * changed` subscription to be wiped before tracker's `ls:teardown`
   * emit could reach it, leaving tracker-ui's spinner stuck.
   *
   * Callers that need true teardown (master toggle off via `unregisterAll`,
   * or backend.ts's explicit per-script cleanup on disable / delete) keep
   * the default `true`.
   */
  unregister(scriptId: string, opts: { clearLifecycleSubs?: boolean } = {}): void {
    const { clearLifecycleSubs = true } = opts;

    const entry = this.cleanups.get(scriptId);
    if (entry) {
      for (const u of entry.unsubs) u();
      this.cleanups.delete(scriptId);
    }

    if (clearLifecycleSubs) {
      // Remove any broadcast subscriptions and command handlers owned by
      // this script. See the JSDoc above for why this is gated.
      clearBroadcastByScriptId(scriptId);
      clearCommandHandlerByScriptId(scriptId);
      // Phase F follow-up — drop any pending-reload state for this script
      // (the script is going away; the deferred reload is moot).
      this.pendingReload.delete(scriptId);
      this.clearPendingReloadPoll(scriptId);
      // The script is going away, so a deferred engine-switch state-wipe queued
      // for it is moot too — drop it, else a stale entry could fire against a
      // later re-registration of the same id. Its poll timer (shared with the
      // pending-reload poll) was just cleared above.
      this.pendingEngineSwitchWipe.delete(scriptId);
    }
  }

  /**
   * Remove all registered subscriptions (all scripts).
   *
   * `opts.clearLifecycleSubs` (default `true`) is forwarded to per-script
   * `unregister()` calls. Same gating semantics — see `unregister()`'s
   * JSDoc for full reasoning.
   *
   * Default `true` (true teardown — used by master-toggle-off path):
   * clears Spindle event subs AND each script's broadcast subs, command
   * handlers, and pending-reload state.
   *
   * `false` (used by `reloadAll()` as the "drop everything before
   * rebuild" prep): clears Spindle event subs ONLY, preserves broadcast
   * subs / command handlers / pending-reload state. Critical for
   * `syncTriggers()`-driven re-registration cycles — without it, ANY
   * script's `enabled` or `triggers` change wipes EVERY enabled script's
   * lifecycle subs as a side effect, and bodies don't re-fire to
   * re-register them. Canonical bug: tracker / tracker-ui rerun spinner
   * stuck after disable, because tracker-ui's `tracker:rerun-state-changed`
   * subscription got wiped before tracker's `ls:teardown` emit could
   * reach it.
   *
   * Always clears `startupFired` / `startupPending` regardless of opt —
   * a subsequent `reloadAll()` will re-fire `ls:startup` for all eligible
   * scripts (and `register()`'s startup-fired guard is what prevents
   * re-firing for scripts that already ran this session, sourced from
   * the saved/restored sets in `reloadAll`).
   */
  unregisterAll(opts: { clearLifecycleSubs?: boolean } = {}): void {
    const { clearLifecycleSubs = true } = opts;
    for (const [id] of [...this.cleanups]) {
      this.unregister(id, { clearLifecycleSubs });
    }
    this.startupFired.clear();
    this.startupPending.clear();
    if (clearLifecycleSubs) {
      // Phase F follow-up — clear any pending reloads + their poll timers.
      // `unregister(id)` above already drops the per-script entries for
      // scripts that had subscriptions, but any leftover entries for scripts
      // that were already mid-deletion get swept here. Skipped on the
      // rebuild path (reloadAll) so deferred manual reloads survive a
      // syncTriggers cycle.
      this.pendingReload.clear();
      for (const t of this.pendingReloadPollTimers.values()) clearInterval(t);
      this.pendingReloadPollTimers.clear();
      // Drop any deferred engine-switch state-wipes too (their poll timers live
      // in the pending-reload timer map cleared just above).
      this.pendingEngineSwitchWipe.clear();
    }
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
    // Rebuild prep — clear Spindle event subs only. Preserves broadcast
    // subs, command handlers, and pending-reload state across the
    // unregister/re-register cycle. Without this, every `syncTriggers()`
    // call (any script's enabled/triggers change) would wipe every
    // enabled script's lifecycle subs as a side effect — bodies don't
    // re-fire here to re-register them. See `unregister()`'s JSDoc for
    // the canonical bug story.
    this.unregisterAll({ clearLifecycleSubs: false });
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
   * error) but without batch-aggregation — startup fires once per state
   * transition, not concurrently.
   *
   * Called from two paths:
   *   - Internal: `registerAll()` / `retryPendingStartups()` at LumiScript
   *     boot, after gating on `hasStartup` + `startupFired` + binding
   *     satisfaction. The internal trigger-list gate below is redundant on
   *     this path but harmless.
   *   - External: `backend.ts`'s `update_script` handler on the false→true
   *     `enabled` transition, fire-and-forget. The internal trigger-list
   *     gate is what enforces opt-in on this path (same shape as
   *     `fireTeardown`).
   *
   * Errors are logged via `executionStatusStore.markError`; no toast (this
   * fires on user-controlled lifecycle events, not on chat activity, so
   * the editor's status dot is the right surface).
   */
  async fireStartup(script: Script): Promise<void> {
    if (!(script.triggers ?? []).includes(LS_STARTUP)) return;

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

  // ─── ls:reload dispatch (Phase D) ─────────────────────────────────────────

  /**
   * Phase D — fire the synthetic `ls:reload` event for a script after its
   * code changed. The body re-runs end-to-end within its existing worker;
   * broadcasts + command handlers are wiped at fire-start and re-
   * registered by the body; macros/tools/interceptors/RPC endpoints are
   * idempotently overwritten by name; stale-diff cleanup drops any not
   * re-registered.
   *
   * In-flight semantics depend on `payload.reason`:
   *
   *   - **`'autosave'` + in-flight → DROP.** The autosave-driven reload is
   *     a "courtesy refresh" — its job is to make the live closures match
   *     the code on disk. When a real trigger run is mid-flight (or a
   *     long-running handler invocation like a broadcast LLM-extractor
   *     loop), the in-flight work is happily executing the body the user
   *     started — interrupting it with a queued reload to fire on idle
   *     just produces a redundant second run with stale `data` (the
   *     in-flight event has already been consumed). The NEXT real trigger
   *     for the script will pick up the new code naturally. So we just
   *     drop the autosave reload and let the world unfold.
   *
   *   - **`'manual'` + in-flight → DEFER.** Manual reload (Reload button)
   *     is an explicit user request. Dropping it would be confusing
   *     ("I pressed Reload, nothing happened"). Queue it in
   *     `pendingReload` and arm a polling drain; it fires once
   *     `runningCounts === 0` AND no handler invocations are in flight.
   *     Coalesces multiple rapid presses to one fire.
   *
   *   - **Either + idle → FIRE immediately.**
   *
   * "In flight" = real-trigger run (`runningCounts > 0`) OR
   * handler-call/script-body with a pending IPC await
   * (`scriptHasActiveDispatch`). Broadcast handlers in particular can run
   * for many seconds without bumping `runningCounts`; `scriptHasActiveDispatch`
   * covers those.
   *
   * Caller (`backend.ts`'s `update_script` handler for autosave;
   * `reload_script` IPC handler for manual) is responsible for the
   * eligibility check (byte-different code, enabled trigger, directive
   * absent, debounce). Manual reload bypasses the directive opt-out.
   */
  async fireReload(script: Script, payload: LsReloadPayload): Promise<void> {
    const inFlight = (this.runningCounts.get(script.id) ?? 0) > 0
                     || scriptHasActiveDispatch(script.id);
    if (inFlight) {
      if (payload.reason === 'autosave') {
        // Drop — the next real trigger will pick up the new code. See
        // JSDoc above for the full reasoning.
        return;
      }
      // Manual reload — queue + arm polling drain. Idempotent on both:
      // `pendingReload.set` overwrites a prior queued payload (coalesce);
      // `schedulePendingReloadPoll` is a no-op if a poll is already armed.
      this.pendingReload.set(script.id, payload);
      this.schedulePendingReloadPoll(script.id);
      return;
    }

    const deps = this.getDeps();

    // v1.0.0-rc.8 — full per-script state wipe BEFORE the body re-runs.
    // Pre-rc.8 fireReload only cleared broadcasts + commands and did a
    // diff-cleanup post-run for tools/macros/interceptors/processors/RPC;
    // 7 of the 13 pinning surfaces (DOM listeners, modals, float widgets,
    // drawer tabs, input-bar actions, world-info interceptors, injections)
    // leaked across reloads — stale handler closures from the previous
    // run kept firing alongside the freshly-registered ones, producing
    // the "Reload button doesn't pick up changes" symptom users had to
    // work around by toggling the extension off/on. The wipe — wired by
    // backend.ts via `wipeScriptStateForReload` — covers all 13 surfaces
    // while preserving the bits that should survive a reload (script
    // storage, theme overrides, collection handle cache). Falls back to
    // the pre-rc.8 partial path when the hook is absent (test rigs that
    // don't exercise the missing surfaces).
    if (deps.wipeScriptStateForReload) {
      await deps.wipeScriptStateForReload(script.id);
    }

    const { grantedPermissions, userId, scriptStorage, onToolsChanged, onInjectionsChanged, scriptTimeoutMs } = deps;
    const runId = generateUUID();

    executionStatusStore.markRunning(script.id);
    this.sendToFrontend({
      type: 'execution_started',
      scriptId: script.id,
      scriptName: script.name,
      runId,
    });

    // Belt-and-suspenders: when the wipe ran, these are no-ops. When the
    // wipe was absent (test rig), these preserve the pre-rc.8 partial
    // cleanup so existing in-process trigger-registry tests stay green
    // without needing to wire the wipe stub.
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

    void scriptStorage;
    const result = await this.runScript(
      script,
      {
        data: {
          __event:          LS_RELOAD,
          reason:           payload.reason,
          previousCodeHash: payload.previousCodeHash,
          currentCodeHash:  payload.currentCodeHash,
          previousLength:   payload.previousLength,
          currentLength:    payload.currentLength,
          triggeredAt:      Date.now(),
        },
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

    // Stale-diff cleanup — mirrors fireStartup's pattern.
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
      runId,
      success:  result.success,
      duration: result.duration,
      error:    result.error?.message,
    });

    if (!result.success) {
      spindle.toast.error(result.error?.message ?? 'Unknown error', {
        title:    `LumiScript — ${script.name} (reload)`,
        duration: 10_000,
      });
    }
  }

  /**
   * Engine-switch support — wipe a script's registered live state (handlers,
   * UI elements, timers, streams, injections…) on BOTH engines WITHOUT
   * re-running the body. Used for enabled event-driven scripts when the user
   * switches the script engine: their next natural trigger fire re-runs the
   * body under the new engine anyway, so an immediate auto re-run would only
   * burn cost (potentially real money — LLM calls, agentic loops) rebuilding
   * state the next fire rebuilds regardless. Startup-triggered scripts must
   * NOT take this path — their next natural run is the next extension
   * activation, so dropping their state without a re-run would leave them
   * inert (no panels, macros, or handlers) for the rest of the session; the
   * engine-switch fan-out sends those through the full `fireReload` instead.
   *
   * In-flight semantics mirror `fireReload`'s manual path: if the script has
   * a run or handler invocation in flight, DEFER (queue + poll) rather than
   * wipe immediately. Wiping mid-run would let the still-executing body
   * re-register state on the OLD engine after the wipe passed — recreating
   * exactly the split-brain the engine-switch fan-out exists to prevent.
   */
  async fireEngineSwitchWipe(script: Script): Promise<void> {
    const inFlight = (this.runningCounts.get(script.id) ?? 0) > 0
                     || scriptHasActiveDispatch(script.id);
    if (inFlight) {
      this.pendingEngineSwitchWipe.add(script.id);
      this.schedulePendingReloadPoll(script.id);
      return;
    }
    const deps = this.getDeps();
    if (deps.wipeScriptStateForReload) {
      await deps.wipeScriptStateForReload(script.id);
    } else {
      // Test-rig fallback — mirrors fireReload's partial wipe when the full
      // wipe hook isn't wired.
      clearBroadcastByScriptId(script.id);
      clearCommandHandlerByScriptId(script.id);
    }
  }

  /**
   * Phase F follow-up — armed by `fireReload` when a reload is deferred.
   * Polls every 1 s for the "script idle" condition (both `runningCounts`
   * cleared AND no entries in host-dispatcher's `activeRuns` for this
   * scriptId). When idle, drains `pendingReload`. Idempotent — calling
   * while a poll is already armed is a no-op (the existing timer keeps
   * running). Cleared on successful drain OR on the event-handler
   * completion drain path (whichever wins).
   */
  private schedulePendingReloadPoll(scriptId: string): void {
    if (this.pendingReloadPollTimers.has(scriptId)) return;

    const timer = setInterval(() => {
      // Still in flight? Keep polling.
      const stillInFlight = (this.runningCounts.get(scriptId) ?? 0) > 0
                            || scriptHasActiveDispatch(scriptId);
      if (stillInFlight) return;

      // Idle now — stop polling + drain.
      this.clearPendingReloadPoll(scriptId);
      const pending = this.pendingReload.get(scriptId);
      // A queued engine-switch wipe is subsumed by a queued reload (the
      // reload wipes before re-running), so consume the flag either way.
      const wipeQueued = this.pendingEngineSwitchWipe.delete(scriptId);
      if (pending === undefined) {
        if (wipeQueued) {
          const latest = this.getDeps().scriptStorage.getScript(scriptId);
          if (latest && latest.enabled && latest.type === 'trigger') {
            // Re-checks in-flight internally — re-queues itself if another
            // run started between this drain check and the call.
            void this.fireEngineSwitchWipe(latest);
          }
        }
        return;
      }
      this.pendingReload.delete(scriptId);
      const latest = this.getDeps().scriptStorage.getScript(scriptId);
      if (latest && latest.enabled && latest.type === 'trigger') {
        void this.fireReload(latest, pending);
      }
    }, 1_000);
    this.pendingReloadPollTimers.set(scriptId, timer);
  }

  /** Clear any pending-reload poll timer for `scriptId`. Idempotent. */
  private clearPendingReloadPoll(scriptId: string): void {
    const t = this.pendingReloadPollTimers.get(scriptId);
    if (t !== undefined) {
      clearInterval(t);
      this.pendingReloadPollTimers.delete(scriptId);
    }
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
