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
import { executeScript } from './executor.js';
import { isAnyBindingSatisfied, getActiveContext, setActiveContext } from './binding.js';
import { executionStatusStore } from './execution-status.js';
import { generateUUID } from '../utils/uuid.js';
import type { ScriptStorage } from '../storage/script-storage.js';
import { clearByScriptId as clearBroadcastByScriptId } from './broadcast-bus.js';

// ─── Dependency factory ───────────────────────────────────────────────────────

export interface TriggerDeps {
  grantedPermissions: Set<string>;
  userId: string | null;
  scriptStorage: ScriptStorage;
  /** Forwarded to ExecutorOptions so api.tools.register/unregister push live updates. */
  onToolsChanged?: () => void;
}

// ─── TriggerRegistry class ────────────────────────────────────────────────────

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

    // Capture the script ID only. The full script is fetched from storage at
    // invocation time so code changes take effect without re-registration.
    const scriptId = script.id;
    const unsubs: Array<() => void> = [];

    for (const event of events) {
      const unsub = spindle.on(event, async (payload: unknown) => {
        // ── Fetch current script from storage ──────────────────────────────
        const { grantedPermissions, userId, scriptStorage, onToolsChanged } = this.getDeps();
        const currentScript = scriptStorage.getScript(scriptId);

        // Bail if the script has been deleted, disabled, or is no longer a trigger.
        if (!currentScript || !currentScript.enabled || currentScript.type !== 'trigger') return;

        // ── Pre-resolve context for chat/character-changing events ─────────
        // SETTINGS_UPDATED { activeChatId } fires before CHAT_CHANGED has
        // resolved the new chat's character asynchronously. Resolve it here
        // so both chatId and characterId are correct at binding check time.
        // spindle.chats.get() is a lightweight IPC call (~5ms).
        if (event === 'SETTINGS_UPDATED' || event === 'CHAT_CHANGED') {
          let newChatId: string | null = null;
          if (event === 'SETTINGS_UPDATED') {
            const p = payload as { key?: string; value?: unknown } | null;
            if (p?.key === 'activeChatId') {
              newChatId = typeof p.value === 'string' ? p.value : null;
            }
          } else {
            const p = payload as { chatId?: string } | null;
            newChatId = p?.chatId ?? null;
          }
          if (newChatId) {
            try {
              const chat = await spindle.chats.get(newChatId, userId ?? undefined);
              setActiveContext({
                chatId: newChatId,
                characterId: (chat as { character_id?: string })?.character_id ?? null,
              });
            } catch { /* leave current context on error */ }
          }
          // null (closing): leave context unchanged so bound scripts can fire
        }

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

        // ── Notify frontend ────────────────────────────────────────────────
        executionStatusStore.markRunning(currentScript.id);
        this.sendToFrontend({
          type: 'execution_started',
          scriptId: currentScript.id,
          scriptName: currentScript.name,
          runId,
        });

        // ── Clear stale broadcast subscriptions from the previous invocation ─
        // Each trigger invocation is a fresh execution: subscriptions set up
        // by api.broadcast.on() in the previous run are wiped before the new
        // run starts, preventing handler accumulation across invocations.
        clearBroadcastByScriptId(scriptId);

        // ── Execute the current script body ────────────────────────────────
        const opts: ExecutorOptions = {
          grantedPermissions,
          userId,
          scriptStorage,
          activeContext: ctx,
          eventData,
          onConsole: (entry) =>
            this.sendToFrontend({ type: 'console_entry', scriptId: currentScript.id, runId, entry }),
          onToolsChanged,
        };

        const result = await executeScript(currentScript, opts);

        // ── Update status — only when the LAST concurrent invocation finishes
        const remaining = (this.runningCounts.get(currentScript.id) ?? 1) - 1;
        this.runningCounts.set(currentScript.id, remaining);

        if (remaining === 0) {
          if (result.success) {
            executionStatusStore.markSuccess(currentScript.id, result.duration);
          } else {
            executionStatusStore.markError(
              currentScript.id,
              result.duration,
              result.error?.message ?? 'Unknown error',
            );
          }

          this.sendToFrontend({
            type: 'execution_ended',
            scriptId: currentScript.id,
            runId: result.runId,
            success: result.success,
            duration: result.duration,
            error: result.error?.message,
          });
        }
      });

      unsubs.push(unsub);
    }

    this.cleanups.set(scriptId, { unsubs, events: [...events] });
    spindle.log.info(
      `[LumiScript] Subscribed "${script.name}" to: ${events.join(', ')}`,
    );
  }

  /** Remove all spindle.on() subscriptions for a specific script. */
  unregister(scriptId: string): void {
    const entry = this.cleanups.get(scriptId);
    if (entry) {
      for (const u of entry.unsubs) u();
      this.cleanups.delete(scriptId);
    }
    // Remove any broadcast subscriptions owned by this script.
    clearBroadcastByScriptId(scriptId);
  }

  /** Remove all registered subscriptions (all scripts). */
  unregisterAll(): void {
    for (const [id] of [...this.cleanups]) {
      this.unregister(id);
    }
  }

  /**
   * Full reload: unregister everything, then re-subscribe all enabled triggers.
   * Called on startup, on enabled/triggers changes, and on settings changes.
   */
  async reloadAll(scripts: Script[]): Promise<void> {
    this.unregisterAll();
    for (const script of scripts) {
      if (script.type === 'trigger' && script.enabled) {
        await this.register(script);
      }
    }
  }

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
