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
 *   Invocation   — when an event fires the entire script body is executed via
 *                  executeScript() with `data` injected as a top-level
 *                  variable containing the event payload and `__event` name.
 *                  The full api.* object is available as usual.
 *
 * This completely eliminates the "registration-phase body execution" problem
 * that existed in the previous script.on() two-phase model.
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
   */
  async register(script: Script): Promise<void> {
    this.unregister(script.id);
    if (!script.enabled || script.type !== 'trigger') return;

    const events = script.triggers ?? [];
    if (events.length === 0) return;

    const unsubs: Array<() => void> = [];

    for (const event of events) {
      const unsub = spindle.on(event, async (payload: unknown) => {
        // ── Binding gate ──────────────────────────────────────────────────
        if (!isAnyBindingSatisfied(script.bindings)) return;

        // ── Build execution context ────────────────────────────────────────
        const { grantedPermissions, userId, scriptStorage } = this.getDeps();
        const ctx = getActiveContext();
        const runId = generateUUID();

        // Merge event name into the payload so scripts can use data.__event
        const eventData: Record<string, unknown> = {
          __event: event,
          ...(payload !== null && typeof payload === 'object' ? payload as Record<string, unknown> : {}),
        };

        // ── Notify frontend ────────────────────────────────────────────────
        executionStatusStore.markRunning(script.id);
        this.sendToFrontend({
          type: 'execution_started',
          scriptId: script.id,
          scriptName: script.name,
          runId,
        });

        // ── Execute the script body ────────────────────────────────────────
        const opts: ExecutorOptions = {
          grantedPermissions,
          userId,
          scriptStorage,
          activeContext: ctx,
          eventData,
          onConsole: (entry) =>
            this.sendToFrontend({ type: 'console_entry', scriptId: script.id, runId, entry }),
        };

        const result = await executeScript(script, opts);

        // ── Update status ──────────────────────────────────────────────────
        if (result.success) {
          executionStatusStore.markSuccess(script.id, result.duration);
        } else {
          executionStatusStore.markError(
            script.id,
            result.duration,
            result.error?.message ?? 'Unknown error',
          );
        }

        this.sendToFrontend({
          type: 'execution_ended',
          scriptId: script.id,
          runId: result.runId,
          success: result.success,
          duration: result.duration,
          error: result.error?.message,
        });
      });

      unsubs.push(unsub);
    }

    this.cleanups.set(script.id, { unsubs, events: [...events] });
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
   * Called on startup, on any script CRUD, and on settings changes.
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
