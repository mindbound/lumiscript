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
import { isAnyBindingSatisfied, getActiveContext } from './binding.js';
import { executionStatusStore } from './execution-status.js';
import { generateUUID } from '../utils/uuid.js';
import type { ScriptStorage } from '../storage/script-storage.js';

// ─── Dependency factory ───────────────────────────────────────────────────────

export interface TriggerDeps {
  grantedPermissions: Set<string>;
  userId: string | null;
  scriptStorage: ScriptStorage;
}

// ─── TriggerRegistry class ────────────────────────────────────────────────────

export class TriggerRegistry {
  /** scriptId → { unsubs, events } — tracks live spindle.on() subscriptions */
  private cleanups = new Map<string, { unsubs: Array<() => void>; events: string[] }>();

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
        const { grantedPermissions, userId, scriptStorage } = this.getDeps();
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

        // ── Notify frontend ────────────────────────────────────────────────
        executionStatusStore.markRunning(currentScript.id);
        this.sendToFrontend({
          type: 'execution_started',
          scriptId: currentScript.id,
          scriptName: currentScript.name,
          runId,
        });

        // ── Execute the current script body ────────────────────────────────
        const opts: ExecutorOptions = {
          grantedPermissions,
          userId,
          scriptStorage,
          activeContext: ctx,
          eventData,
          onConsole: (entry) =>
            this.sendToFrontend({ type: 'console_entry', scriptId: currentScript.id, runId, entry }),
        };

        const result = await executeScript(currentScript, opts);

        // ── Update status ──────────────────────────────────────────────────
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
