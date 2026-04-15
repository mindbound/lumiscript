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
import type { ExecutorOptions } from './executor.js';
import { executeScript, HARD_LIMIT_MS } from './executor.js';
import { isAnyBindingSatisfied, getActiveContext } from './binding.js';
import { executionStatusStore } from './execution-status.js';
import { generateUUID } from '../utils/uuid.js';
import type { ScriptStorage } from '../storage/script-storage.js';
import { clearByScriptId as clearBroadcastByScriptId } from './broadcast-bus.js';
import { clearCommandHandlerByScriptId } from './api/commands.js';
import { listNamesByScriptId as toolNamesByScript, diffAndCleanStaleTools } from './tool-store.js';

// ─── Dependency factory ───────────────────────────────────────────────────────

export interface TriggerDeps {
  grantedPermissions: Set<string>;
  userId: string | null;
  scriptStorage: ScriptStorage;
  /** Forwarded to ExecutorOptions so api.tools.register/unregister push live updates. */
  onToolsChanged?: () => void;
  /**
   * Per-execution async timeout in milliseconds, sourced from
   * `LumiScriptSettings.scriptTimeoutMs`. Defaults to `SCRIPT_TIMEOUT_MS` when absent.
   */
  scriptTimeoutMs?: number;
}

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

export class TriggerRegistry {
  /** scriptId → { unsubs, events } — tracks live spindle.on() subscriptions */
  private cleanups = new Map<string, { unsubs: Array<() => void>; events: string[] }>();

  /**
   * Per-script count of currently-running concurrent invocations.
   * Used to suppress premature execution_ended messages: when multiple events
   * fire for the same script simultaneously (e.g., SETTINGS_UPDATED fires more
   * than once on chat open), a fast early-return from a guard check must not
   * mark the script as "done" while a slower invocation is still running.
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
    // Filter ls:startup out of the Spindle subscriptions — it's synthetic and
    // Spindle would silently no-op it. We dispatch it directly below.
    const spindleEvents = hasStartup ? events.filter(e => e !== LS_STARTUP) : events;

    // Capture the script ID only. The full script is fetched from storage at
    // invocation time so code changes take effect without re-registration.
    const scriptId = script.id;
    const unsubs: Array<() => void> = [];

    for (const event of spindleEvents) {
      const unsub = spindle.on(event, async (payload: unknown) => {
        // ── Fetch current script from storage ──────────────────────────────
        const { grantedPermissions, userId, scriptStorage, onToolsChanged, scriptTimeoutMs } = this.getDeps();
        const currentScript = scriptStorage.getScript(scriptId);

        // Bail if the script has been deleted, disabled, or is no longer a trigger.
        if (!currentScript || !currentScript.enabled || currentScript.type !== 'trigger') return;

        // ── Binding gate ───────────────────────────────────────────────────
        if (!isAnyBindingSatisfied(currentScript.bindings)) return;

        // ── Build execution context ────────────────────────────────────────
        const ctx = getActiveContext();
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
        // Snapshot tool names before execution for the auto-cleanup diff.
        const preRunToolNames = toolNamesByScript(scriptId);
        const toolsRegisteredThisRun = new Set<string>();

        const opts: ExecutorOptions = {
          grantedPermissions,
          userId,
          scriptStorage,
          activeContext: ctx,
          eventData,
          onConsole: (entry) =>
            this.sendToFrontend({ type: 'console_entry', scriptId: currentScript.id, runId, entry }),
          onToolsChanged,
          timeoutMs: scriptTimeoutMs,
          toolsRegisteredThisRun,
        };

        // Sync-loop watchdog: process.exit(1) is the only escape when the
        // worker event loop is blocked by a synchronous infinite loop.
        const syncWatchdogMs = (scriptTimeoutMs ?? HARD_LIMIT_MS) + 5_000;
        const syncWatchdog = setTimeout(() => {
          spindle.log.error(
            `[LumiScript] Trigger script "${currentScript.name}" blocked the worker with a synchronous infinite loop — terminating`,
          );
          process.exit(1);
        }, syncWatchdogMs);

        const result = await executeScript(currentScript, opts);
        clearTimeout(syncWatchdog);

        // ── Auto-cleanup stale tools ──────────────────────────────────────
        const staleTools = diffAndCleanStaleTools(scriptId, preRunToolNames, toolsRegisteredThisRun);
        for (const name of staleTools) {
          try { spindle.unregisterTool(name); } catch { /* swallow */ }
        }

        // ── Fold this invocation's result into the batch aggregates ───────
        const prevMax = this.batchMaxDuration.get(currentScript.id) ?? 0;
        this.batchMaxDuration.set(currentScript.id, Math.max(prevMax, result.duration));
        if (!result.success && !this.batchFirstError.has(currentScript.id)) {
          this.batchFirstError.set(currentScript.id, {
            message: result.error?.message ?? 'Unknown error',
            runId: result.runId,
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
            runId: batchError?.runId ?? result.runId,
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
    const { grantedPermissions, userId, scriptStorage, onToolsChanged, scriptTimeoutMs } = this.getDeps();
    const ctx = getActiveContext();
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

    const preRunToolNames = toolNamesByScript(script.id);
    const toolsRegisteredThisRun = new Set<string>();

    const opts: ExecutorOptions = {
      grantedPermissions,
      userId,
      scriptStorage,
      activeContext: ctx,
      eventData: { __event: LS_STARTUP },
      onConsole: (entry) =>
        this.sendToFrontend({ type: 'console_entry', scriptId: script.id, runId, entry }),
      onToolsChanged,
      timeoutMs: scriptTimeoutMs,
      toolsRegisteredThisRun,
    };

    const syncWatchdogMs = (scriptTimeoutMs ?? HARD_LIMIT_MS) + 5_000;
    const syncWatchdog = setTimeout(() => {
      spindle.log.error(
        `[LumiScript] Startup script "${script.name}" blocked the worker — terminating`,
      );
      process.exit(1);
    }, syncWatchdogMs);

    const result = await executeScript(script, opts);
    clearTimeout(syncWatchdog);

    const staleTools = diffAndCleanStaleTools(script.id, preRunToolNames, toolsRegisteredThisRun);
    for (const name of staleTools) {
      try { spindle.unregisterTool(name); } catch { /* swallow */ }
    }

    if (result.success) {
      executionStatusStore.markSuccess(script.id, result.duration);
    } else {
      executionStatusStore.markError(script.id, result.duration, result.error?.message ?? 'Unknown error');
    }

    this.sendToFrontend({
      type: 'execution_ended',
      scriptId: script.id,
      runId: result.runId,
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
