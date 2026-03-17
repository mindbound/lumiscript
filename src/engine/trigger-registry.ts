/**
 * ============================================================================
 * LUMISCRIPT — TRIGGER REGISTRY
 * ============================================================================
 * Manages the lifecycle of trigger script event handlers.
 *
 * Two-phase model:
 *   Registration  — each enabled trigger script is executed once; any
 *                   script.on(event, handler) calls are intercepted and
 *                   wired to spindle.on() subscriptions.
 *   Invocation    — when a Lumiverse event fires, the stored handler is
 *                   called with a freshly built api object. Binding gate
 *                   and error isolation are applied per invocation.
 *
 * TriggerRegistry is instantiated once in backend.ts and reloaded whenever
 * the script list changes (CRUD, enable/disable) or the master enabled
 * setting is toggled.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import * as z from 'zod';
import type { Script, ScriptNamespace, ScriptEventHandler } from '../types/script.js';
import type { BackendToFrontend } from '../types/messages.js';
import type { ExecutorOptions } from './executor.js';
import {
  AsyncFunctionCtor,
  buildScriptAPI,
  buildScriptNamespace,
  executeHandler,
} from './executor.js';
import { isAnyBindingSatisfied, getActiveContext } from './binding.js';
import { executionStatusStore } from './execution-status.js';
import { generateUUID } from '../utils/uuid.js';
import type { ScriptStorage } from '../storage/script-storage.js';

// ─── Dependency factory ───────────────────────────────────────────────────────

/**
 * Called on every event invocation to get fresh deps. Captured as a factory
 * so that userId and grantedPermissions are always current at firing time.
 */
export interface TriggerDeps {
  grantedPermissions: Set<string>;
  userId: string | null;
  scriptStorage: ScriptStorage;
}

// ─── TriggerRegistry class ────────────────────────────────────────────────────

export class TriggerRegistry {
  /** scriptId → { unsubs, events } */
  private cleanups = new Map<string, { unsubs: Array<() => void>; events: string[] }>();

  constructor(
    private readonly getDeps: () => TriggerDeps,
    private readonly sendToFrontend: (msg: BackendToFrontend) => void,
  ) {}

  /**
   * Execute a trigger script in registration mode.
   * Any script.on(event, handler) calls will register real spindle.on()
   * subscriptions. The registrations replace any previous ones for this
   * script (unregister is called first).
   */
  async register(script: Script): Promise<void> {
    this.unregister(script.id);
    if (!script.enabled || script.type !== 'trigger') return;

    const captured: Array<() => void> = [];

    /**
     * Registration-mode implementation of script.on().
     * Registers a spindle.on() subscription that fires the user handler with
     * a fresh api object each time, after checking bindings.
     */
    const eventNames: string[] = [];

    const registrationOn: ScriptNamespace['on'] = <T>(
      event: string,
      handler: ScriptEventHandler<T>,
    ) => {
      eventNames.push(event);
      const unsub = spindle.on(event, async (payload: unknown) => {
        // ── Binding gate ────────────────────────────────────────────────────
        if (!isAnyBindingSatisfied(script.bindings)) return;

        // ── Fresh deps at invocation time ───────────────────────────────────
        const { grantedPermissions, userId, scriptStorage } = this.getDeps();
        const ctx = getActiveContext();
        const runId = generateUUID();

        // ── Notify frontend: execution starting ─────────────────────────────
        executionStatusStore.markRunning(script.id);
        this.sendToFrontend({
          type: 'execution_started',
          scriptId: script.id,
          scriptName: script.name,
          runId,
        });

        // ── Execute the handler ─────────────────────────────────────────────
        const opts: ExecutorOptions = {
          grantedPermissions,
          userId,
          scriptStorage,
          activeContext: ctx,
          onConsole: (entry) =>
            this.sendToFrontend({ type: 'console_entry', scriptId: script.id, runId, entry }),
        };

        const result = await executeHandler(script, handler as ScriptEventHandler, payload, opts);

        // ── Notify frontend: execution ended ────────────────────────────────
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

      captured.push(unsub);
    };

    // ── Registration run ────────────────────────────────────────────────────
    // Execute the script body so that script.on() calls are intercepted and
    // stored above. Libraries required here are captured in handler closures.
    const { grantedPermissions, userId, scriptStorage } = this.getDeps();
    const ctx = getActiveContext();
    const opts: ExecutorOptions = {
      grantedPermissions,
      userId,
      scriptStorage,
      activeContext: ctx,
    };

    const api = buildScriptAPI(script, opts);
    const scriptNS = buildScriptNamespace(script, opts, registrationOn);
    // Silent console during registration run — not an active execution.
    const silent = { log: () => {}, warn: () => {}, error: () => {}, info: () => {} };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const fn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
        'api',
        'script',
        '__console',
        'z',
        `"use strict";\nconst console = __console;\n${script.code}\n`,
      );
      await fn(api, scriptNS, silent, z);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      spindle.log.error(
        `[LumiScript] Trigger registration failed for "${script.name}": ${msg}`,
      );
      // Clean up any subscriptions that registered before the error.
      for (const u of captured) u();
      return;
    }

    if (captured.length > 0) {
      this.cleanups.set(script.id, { unsubs: captured, events: eventNames });
      spindle.log.info(
        `[LumiScript] Registered ${captured.length} handler(s) for trigger "${script.name}" (events: ${eventNames.join(', ')})`,
      );
    }
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
   * Full reload: unregister everything, then re-register all enabled triggers.
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

  /** Total number of live spindle.on() subscriptions across all scripts. */
  get handlerCount(): number {
    let n = 0;
    for (const [, entry] of this.cleanups) n += entry.unsubs.length;
    return n;
  }

  /**
   * Returns the currently registered event names per script.
   * scriptId → string[] of event names (may contain duplicates if script.on
   * was called multiple times for the same event).
   */
  getRegistrations(): Record<string, string[]> {
    const result: Record<string, string[]> = {};
    for (const [scriptId, entry] of this.cleanups) {
      result[scriptId] = [...entry.events];
    }
    return result;
  }
}
