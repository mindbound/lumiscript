/**
 * ============================================================================
 * LUMISCRIPT — THEME OVERRIDE STORE (v1.0.0-rc.5+)
 * ============================================================================
 * Per-script registry of theme overrides + deterministic merge layer for
 * the `api.theme` namespace. The host treats LumiScript as a single
 * extension — every call to `spindle.theme.apply` REPLACES the extension's
 * prior variables override, and every call to `spindle.theme.applyPalette`
 * REPLACES the prior palette. Without coordination, two scripts both
 * calling `apply` would have last-write-wins-overall semantics, where
 * Script B's call would wipe out Script A's contributions even when they
 * touched disjoint variable keys.
 *
 * This store fixes that. Each script gets its own slot. On any
 * apply/applyPalette/clear, the engine layer recomputes the merged
 * overrides + pushes them to spindle. Conflict resolution:
 *
 *   - **variables / variablesByMode** (from `api.theme.apply`):
 *     per-key, last-applied-wins. Apply-order is tracked so the merge
 *     is deterministic — later scripts' keys win against earlier
 *     scripts' same keys, scripts that haven't touched a key inherit
 *     the older value.
 *
 *   - **palette** (from `api.theme.applyPalette`): most-recent-script-
 *     wins overall. Palettes can't meaningfully merge per-key (a single
 *     accent HSL), so the apply-order most-recent palette becomes the
 *     pushed palette. Older scripts' palettes are inert until they
 *     touch the slot again.
 *
 * Two slots per script (variables / palette) because the host treats
 * them as independent override layers — a script can have ONE of each
 * active simultaneously, or just one or just the other.
 *
 * Lifecycle:
 *   - `api.theme.apply` / `applyPalette` → setVariables / setPalette
 *   - `api.theme.clear` → clearByScriptId (drops both slots for the script)
 *   - Script disable / delete → engine-layer teardown calls clearByScriptId
 *
 * Reset:
 *   - `__resetForTests` clears all state. Tests that exercise multi-
 *     script merge MUST reset between cases (or rely on the test-infra
 *     setup.ts which calls every module-level reset).
 */

import type {
  ThemeOverride,
  ThemePaletteConfig,
} from '../types/script.js';

// ─── State ──────────────────────────────────────────────────────────────────

export interface ScriptThemeState {
  /** Set by `api.theme.apply` — undefined when never set or cleared. */
  variables?: ThemeOverride;
  /**
   * Set by `api.theme.applyPalette` — `null` is the explicit "clear my
   * palette" sentinel passed by user scripts; `undefined` means the slot
   * has never been touched. Both result in this script contributing no
   * palette to the merge.
   */
  palette?: ThemePaletteConfig | null;
}

const stateByScript = new Map<string, ScriptThemeState>();

/**
 * Apply-order tracking. Most-recently-touched script is appended last.
 * Used for both deterministic per-key merge (variables) and last-wins
 * palette selection. A `setVariables`/`setPalette` on a script already
 * in the list moves it to the end.
 */
const applyOrder: string[] = [];

// ─── Internals ──────────────────────────────────────────────────────────────

function ensureState(scriptId: string): ScriptThemeState {
  let state = stateByScript.get(scriptId);
  if (!state) {
    state = {};
    stateByScript.set(scriptId, state);
  }
  return state;
}

function bumpOrder(scriptId: string): void {
  const idx = applyOrder.indexOf(scriptId);
  if (idx !== -1) applyOrder.splice(idx, 1);
  applyOrder.push(scriptId);
}

// ─── Mutators ───────────────────────────────────────────────────────────────

export function setVariables(scriptId: string, override: ThemeOverride): void {
  const state = ensureState(scriptId);
  state.variables = override;
  bumpOrder(scriptId);
}

export function setPalette(scriptId: string, palette: ThemePaletteConfig | null): void {
  const state = ensureState(scriptId);
  state.palette = palette;
  bumpOrder(scriptId);
}

/**
 * Drop both slots for `scriptId` + remove from apply-order. Returns
 * `true` if there WAS a slot (so the caller can decide whether to
 * trigger a re-flush to spindle), `false` if nothing was there.
 *
 * Called from:
 *   - `api.theme.clear()` — user script explicitly clearing
 *   - `teardownDisabledScript` in backend.ts — script disable / delete
 */
export function clearByScriptId(scriptId: string): boolean {
  const had = stateByScript.delete(scriptId);
  const idx = applyOrder.indexOf(scriptId);
  if (idx !== -1) applyOrder.splice(idx, 1);
  return had;
}

// ─── Merge readers ──────────────────────────────────────────────────────────

/**
 * Compute the merged variables override across all scripts in apply
 * order. Per-key last-wins (later scripts' keys overwrite earlier
 * scripts' same keys). Empty fields are omitted from the result.
 *
 * Returns `{}` when no script has any variables — the engine layer
 * detects this and pushes an empty override to spindle (clearing the
 * extension's variables slot WITHOUT touching the palette slot).
 */
export function computeMergedVariables(): ThemeOverride {
  const flat:  Record<string, string> = {};
  const dark:  Record<string, string> = {};
  const light: Record<string, string> = {};

  for (const scriptId of applyOrder) {
    const state = stateByScript.get(scriptId);
    if (!state?.variables) continue;
    if (state.variables.variables) Object.assign(flat, state.variables.variables);
    if (state.variables.variablesByMode?.dark)  Object.assign(dark,  state.variables.variablesByMode.dark);
    if (state.variables.variablesByMode?.light) Object.assign(light, state.variables.variablesByMode.light);
  }

  const result: ThemeOverride = {};
  if (Object.keys(flat).length > 0) result.variables = flat;
  if (Object.keys(dark).length > 0 || Object.keys(light).length > 0) {
    result.variablesByMode = {};
    if (Object.keys(dark).length  > 0) result.variablesByMode.dark  = dark;
    if (Object.keys(light).length > 0) result.variablesByMode.light = light;
  }
  return result;
}

/**
 * Return the palette of the most-recently-touched script whose slot
 * has an explicit palette (including `null` — that's a deliberate
 * "clear my palette" sentinel). When no script has ever set a palette,
 * returns `null` so the engine layer pushes a clearing call.
 */
export function computeActivePalette(): ThemePaletteConfig | null {
  for (let i = applyOrder.length - 1; i >= 0; i--) {
    const state = stateByScript.get(applyOrder[i]!);
    if (state?.palette !== undefined) return state.palette;
  }
  return null;
}

// ─── Observers ──────────────────────────────────────────────────────────────

/** True when no script has any state recorded. */
export function isEmpty(): boolean {
  return stateByScript.size === 0;
}

/** True when `scriptId` has at least one slot recorded. */
export function hasStateByScriptId(scriptId: string): boolean {
  return stateByScript.has(scriptId);
}

/**
 * Count of distinct variable contributions for `scriptId`. Used by the
 * diagnostics panel + future per-script attribution surfaces. Counts:
 *   - each variable key in `variables.variables`
 *   - each variable key in `variables.variablesByMode.dark`
 *   - each variable key in `variables.variablesByMode.light`
 *   - +1 if a palette is set (palette is opaque, count as a single unit)
 */
export function countContributionsByScriptId(scriptId: string): number {
  const state = stateByScript.get(scriptId);
  if (!state) return 0;
  let count = 0;
  if (state.variables?.variables)              count += Object.keys(state.variables.variables).length;
  if (state.variables?.variablesByMode?.dark)  count += Object.keys(state.variables.variablesByMode.dark).length;
  if (state.variables?.variablesByMode?.light) count += Object.keys(state.variables.variablesByMode.light).length;
  if (state.palette !== undefined)             count += 1;
  return count;
}

/**
 * Snapshot of every script that currently has theme state, in apply
 * order (oldest-first). Returned array is a new copy — callers may
 * iterate freely. Used by diagnostics + tests.
 */
export function listScriptIdsInApplyOrder(): string[] {
  return [...applyOrder];
}

/**
 * v1.0.0-rc.5+ — structured breakdown of `scriptId`'s contributions to
 * the merged theme state. Returns `null` when the script has no slot
 * recorded.
 *
 * Splits the variables count three ways (flat / dark-keyed / light-
 * keyed) so the diagnostics panel can show users which mode-specific
 * tracks are populated. `palette` reports a tri-state because the merge
 * semantics distinguish "this script set a palette" from "this script
 * explicitly cleared the palette via `applyPalette(null)`" — both are
 * apply-order entries that influence `computeActivePalette`, but they
 * have opposite user-facing semantics.
 *
 * Used by the diagnostics panel's "Active theme overrides" row to
 * surface theme attribution even for scripts whose workers have been
 * evicted (theme state lives parent-side; eviction doesn't tear it
 * down, but the script disappears from the worker / assignment views
 * entirely — this accessor closes that visibility gap).
 */
export interface ScriptThemeContributionSummary {
  /** Number of flat (mode-agnostic) variable overrides this script contributes. */
  flatVariables:  number;
  /** Number of `variablesByMode.dark` overrides this script contributes. */
  darkVariables:  number;
  /** Number of `variablesByMode.light` overrides this script contributes. */
  lightVariables: number;
  /** Sum of all three variable categories — caller convenience. */
  totalVariables: number;
  /**
   * Palette slot tri-state:
   * - `'set'`     — script called `applyPalette({...})` with a real palette
   * - `'cleared'` — script called `applyPalette(null)` explicitly (sentinel that wins the merge if most-recent)
   * - `'none'`    — script has no palette slot at all
   */
  palette:        'set' | 'cleared' | 'none';
}

export function getContributionSummaryByScriptId(scriptId: string): ScriptThemeContributionSummary | null {
  const state = stateByScript.get(scriptId);
  if (!state) return null;
  const flat  = state.variables?.variables              ? Object.keys(state.variables.variables).length              : 0;
  const dark  = state.variables?.variablesByMode?.dark  ? Object.keys(state.variables.variablesByMode.dark).length  : 0;
  const light = state.variables?.variablesByMode?.light ? Object.keys(state.variables.variablesByMode.light).length : 0;
  const palette: 'set' | 'cleared' | 'none' =
    state.palette === undefined ? 'none' :
    state.palette === null      ? 'cleared' : 'set';
  return {
    flatVariables:  flat,
    darkVariables:  dark,
    lightVariables: light,
    totalVariables: flat + dark + light,
    palette,
  };
}

// ─── Test seam ──────────────────────────────────────────────────────────────

/** @internal */
export function __resetForTests(): void {
  stateByScript.clear();
  applyOrder.length = 0;
}
