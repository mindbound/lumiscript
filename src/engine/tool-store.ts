/**
 * ============================================================================
 * LUMISCRIPT — TOOL STORE
 * ============================================================================
 * Module-level singleton that holds all active tool registrations from user
 * scripts. When Lumiverse invokes a LumiScript tool via the TOOL_INVOCATION
 * event, backend.ts dispatches to the handler stored here.
 *
 * Tools are keyed by bare tool name. LumiScript registers all tools under its
 * own extension_id with Lumiverse (via spindle.registerTool), so there is no
 * name-collision risk between different Lumiverse extensions.
 *
 * Lifecycle:
 *  - api.tools.register() → addTool() + spindle.registerTool()
 *  - api.tools.unregister() → removeTool() + spindle.unregisterTool()
 *  - Script delete / disable → clearByScriptId() + spindle.unregisterTool() × N
 */

import type { ToolInvocationContext } from '../types/script.js';

/** Internal record stored in the singleton map. */
export interface ToolEntry {
  name: string;
  displayName: string;
  description: string;
  /** JSON Schema for the tool's input parameters. */
  parameters?: Record<string, unknown>;
  councilEligible: boolean;
  /**
   * Wrapped handler: (args, ctx?) → string. The user's ToolHandler has already
   * been partially applied with the api reference via buildToolsAPI's getApi()
   * lazy getter, so callers supply only the raw args plus the optional
   * invocation context (populated when dispatched from TOOL_INVOCATION,
   * undefined when called via api.tools.invoke()).
   */
  handler: (
    args: Record<string, unknown>,
    ctx?: ToolInvocationContext,
  ) => string | Promise<string>;
  scriptId: string;
  scriptName: string;
}

// ─── Singleton ────────────────────────────────────────────────────────────────

const store = new Map<string, ToolEntry>();

// ─── Mutators ─────────────────────────────────────────────────────────────────

/**
 * Register a tool entry.
 *
 * Re-registration by the **same** script (e.g. a trigger script re-running)
 * is allowed and simply replaces the handler.
 *
 * Re-registration by a **different** script throws: allowing silent overwrites
 * would let Script B hijack Script A's tool and receive its invocation args.
 */
export function addTool(entry: ToolEntry): void {
  const existing = store.get(entry.name);
  if (existing && existing.scriptId !== entry.scriptId) {
    throw new Error(
      `api.tools.register: tool name "${entry.name}" is already registered by ` +
      `"${existing.scriptName}". Unregister it first or choose a different name.`,
    );
  }
  store.set(entry.name, entry);
}

/**
 * Remove a tool by name. Only removes the entry if it is owned by `scriptId`.
 * Returns `true` if the entry was removed, `false` if not found or not owned.
 */
export function removeTool(name: string, scriptId: string): boolean {
  const entry = store.get(name);
  if (!entry || entry.scriptId !== scriptId) return false;
  store.delete(name);
  return true;
}

/**
 * Admin-override removal: drop the tool entry by name, ignoring scriptId
 * ownership. Used by the Status-tab "Remove" action, which lets the user
 * strip a single stale registration without disabling the whole script.
 * Returns `true` if an entry was present and removed.
 *
 * Re-running the owning script will re-register the tool if the code
 * still calls `api.tools.register()`.
 */
export function removeByName(name: string): boolean {
  return store.delete(name);
}

/**
 * Remove all tools registered by the given script.
 * Returns the names of the removed tools so the caller can call
 * `spindle.unregisterTool(name)` for each.
 */
export function clearByScriptId(scriptId: string): string[] {
  const cleared: string[] = [];
  for (const [name, entry] of store) {
    if (entry.scriptId === scriptId) {
      store.delete(name);
      cleared.push(name);
    }
  }
  return cleared;
}

/**
 * Return the names of all tools owned by the given script.
 * Used for the pre-execution snapshot in the auto-cleanup diff:
 * callers compare this set against tools registered during the run to
 * detect stale registrations that the new code no longer creates.
 */
export function listNamesByScriptId(scriptId: string): string[] {
  const names: string[] = [];
  for (const [name, entry] of store) {
    if (entry.scriptId === scriptId) names.push(name);
  }
  return names;
}

/** Remove all tools regardless of script. */
export function clearAll(): void {
  store.clear();
}

// ─── Readers ──────────────────────────────────────────────────────────────────

/** Look up a tool by name. Returns undefined if not registered. */
export function getTool(name: string): ToolEntry | undefined {
  return store.get(name);
}

/** Return a snapshot array of all current entries. */
export function listAll(): ToolEntry[] {
  return [...store.values()];
}

// ─── Post-execution auto-cleanup ────────────────────────────────────────────

/**
 * Diff a pre-execution tool-name snapshot against the set of tools that were
 * actively registered during the run. Any tool that existed before the run
 * but was NOT re-registered is stale (the new code no longer creates it)
 * and gets removed from the store.
 *
 * Returns the names of removed tools so the caller can call
 * `spindle.unregisterTool(name)` for each.
 *
 * This is the engine behind automatic stale-tool cleanup on re-run: if a
 * user renames a tool in code from `roll_dice` to `roll_d20`, the old
 * `roll_dice` registration is detected and removed here — no manual trash
 * button click needed.
 */
export function diffAndCleanStaleTools(
  scriptId: string,
  preRunNames: readonly string[],
  registeredThisRun: ReadonlySet<string>,
): string[] {
  const stale: string[] = [];
  for (const name of preRunNames) {
    if (registeredThisRun.has(name)) continue;
    // Only remove if still owned by this script (another script could have
    // claimed the name during the run — unlikely but defensive).
    const entry = store.get(name);
    if (entry && entry.scriptId === scriptId) {
      store.delete(name);
      stale.push(name);
    }
  }
  return stale;
}
