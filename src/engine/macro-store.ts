/**
 * ============================================================================
 * LUMISCRIPT — MACRO STORE
 * ============================================================================
 * Module-level singleton holding user-script-registered macros. Structurally
 * mirrors `tool-store.ts`: `scriptId`-tagged entries, owner-scoped mutators,
 * lifecycle cleanup via `clearByScriptId`, auto-stale-diff on re-run.
 *
 * Macros are keyed by bare name. LumiScript's own internal macros (registered
 * at boot by `src/macros.ts`) are NOT held here — they live directly in the
 * Spindle macro engine and are protected via `RESERVED_MACRO_NAMES`, which
 * `addMacro` checks before allowing a user registration.
 *
 * Lifecycle:
 *   - api.macros.register()  → addMacro() + spindle.registerMacro()
 *   - api.macros.unregister() → removeMacro() + spindle.unregisterMacro()
 *   - Script delete / disable → clearByScriptId() + spindle.unregisterMacro() × N
 *   - Post-execution on re-run → diffAndCleanStaleMacros() auto-unregisters
 *     macros the updated script body no longer creates.
 */

import type { MacroContext } from '../types/script.js';
import { RESERVED_MACRO_NAMES } from './reserved-macro-names.js';

/** Internal record stored in the singleton map. */
export interface MacroEntry {
  name: string;
  description: string;
  category: string;
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  args?: { name: string; description?: string; required?: boolean }[];
  /** `'push'` = no handler, values set via `recordValue`; `'pull'` = handler-backed. */
  mode: 'push' | 'pull';
  /** Only present in `'pull'` mode. Called at macro resolution; may be async. */
  handler?: (ctx: MacroContext) => string | Promise<string>;
  /** Last value set via `recordValue`. Only meaningful in `'push'` mode. */
  lastValue?: string;
  scriptId: string;
  scriptName: string;
}

// ─── Singleton ────────────────────────────────────────────────────────────────

const store = new Map<string, MacroEntry>();

// ─── Mutators ─────────────────────────────────────────────────────────────────

/**
 * Register a macro entry.
 *
 * - Rejects reserved names (LumiScript-internal macro names).
 * - Re-registration by the **same** script is allowed and replaces the entry
 *   (supports re-runs where a trigger script re-invokes `api.macros.register`).
 * - Re-registration by a **different** script throws — silently overwriting
 *   would let Script B hijack a name owned by Script A.
 */
export function addMacro(entry: MacroEntry): void {
  if (RESERVED_MACRO_NAMES.has(entry.name)) {
    throw new Error(
      `api.macros.register: "${entry.name}" is a reserved LumiScript-internal macro name and cannot be overridden.`,
    );
  }
  const existing = store.get(entry.name);
  if (existing && existing.scriptId !== entry.scriptId) {
    throw new Error(
      `api.macros.register: macro name "${entry.name}" is already registered by ` +
      `"${existing.scriptName}". Unregister it first or choose a different name.`,
    );
  }
  store.set(entry.name, entry);
}

/**
 * Remove a macro by name. Only removes the entry if it is owned by `scriptId`.
 * Returns `true` if removed, `false` if not found or not owned.
 */
export function removeMacro(name: string, scriptId: string): boolean {
  const entry = store.get(name);
  if (!entry || entry.scriptId !== scriptId) return false;
  store.delete(name);
  return true;
}

/**
 * Admin-override removal: drop the macro entry by name, ignoring ownership.
 * Exposed for symmetry with `tool-store.removeByName`, not used by the API
 * surface today (there's no Status-tab "Remove macro" button yet). Returns
 * `true` if an entry was present.
 */
export function removeByName(name: string): boolean {
  return store.delete(name);
}

/**
 * Remove all macros registered by the given script. Returns the names of the
 * removed entries so the caller can loop `spindle.unregisterMacro(name)` for
 * each. Called from `backend.ts` on script disable/delete.
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
 * Return the names of all macros owned by the given script. Used for the
 * pre-execution snapshot in the auto-stale diff (see `diffAndCleanStaleMacros`).
 */
export function listNamesByScriptId(scriptId: string): string[] {
  const names: string[] = [];
  for (const [name, entry] of store) {
    if (entry.scriptId === scriptId) names.push(name);
  }
  return names;
}

/**
 * Update the cached `lastValue` for a push-mode macro. Called by
 * `api.macros.updateValue()` alongside `spindle.updateMacroValue()`.
 *
 * - Silent no-op when the name is unknown (matches the "only-if-owned" policy
 *   used at the API layer; the caller is expected to have already verified
 *   ownership).
 * - Throws when the entry exists but is pull-mode — push/pull collision is
 *   explicit so callers don't silently mask a handler-backed macro's output.
 */
export function recordValue(name: string, value: string): void {
  const entry = store.get(name);
  if (!entry) return;
  if (entry.mode === 'pull') {
    throw new Error(
      `macro-store.recordValue: "${name}" is pull-mode (handler-backed); updateValue is not valid.`,
    );
  }
  entry.lastValue = value;
}

/** Remove all macros regardless of script. Test-only (mirrors `tool-store.clearAll`). */
export function clearAll(): void {
  store.clear();
}

// ─── Readers ──────────────────────────────────────────────────────────────────

/** Look up a macro by name. Returns undefined if not registered. */
export function getMacro(name: string): MacroEntry | undefined {
  return store.get(name);
}

/** Snapshot of all current entries. */
export function listAll(): MacroEntry[] {
  return [...store.values()];
}

// ─── Post-execution auto-cleanup ──────────────────────────────────────────────

/**
 * Diff a pre-execution macro-name snapshot against the set of macros that
 * were actively registered during the run. Any macro that existed before the
 * run but was NOT re-registered is stale and gets removed from the store.
 *
 * Returns the names of removed macros so the caller can loop
 * `spindle.unregisterMacro(name)` for each. Mirrors `diffAndCleanStaleTools`
 * exactly — same semantics, same safety check (only remove if still owned by
 * `scriptId` in case another script claimed the name during the run).
 */
export function diffAndCleanStaleMacros(
  scriptId: string,
  preRunNames: readonly string[],
  registeredThisRun: ReadonlySet<string>,
): string[] {
  const stale: string[] = [];
  for (const name of preRunNames) {
    if (registeredThisRun.has(name)) continue;
    const entry = store.get(name);
    if (entry && entry.scriptId === scriptId) {
      store.delete(name);
      stale.push(name);
    }
  }
  return stale;
}
