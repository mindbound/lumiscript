/**
 * ============================================================================
 * SCRIPT STORAGE SECTION — pure logic
 * ============================================================================
 * The budget / sort / filter logic behind `ScriptStorageSection.tsx`,
 * extracted for unit-testing. Mirrors `collections-logic.ts` (the two admin
 * tables are near-twins) but with `api.scriptStorage`'s single-tier shape:
 * no scope dimension, a 1 MB per-script cap, and a name-resolving filter.
 *
 * `nextSort` is intentionally a small local copy of the collections one — the
 * two sections are kept independent rather than coupled through a shared util
 * for ~6 lines. If a third sortable table appears, promote it to a shared
 * `table-sort` helper.
 */

import type { ScriptStorageSummary } from '../../engine/api/script-storage.js';

/** Sortable column keys — must match the header `<span>` in render order. */
export type SortKey = 'script' | 'keys' | 'size' | 'modified';
export type SortDir = 'asc' | 'desc';

/**
 * Storage budget thresholds anchored to the 1 MB per-script cap defined
 * in `src/engine/api/script-storage.ts:SCRIPT_STORAGE_CAP_BYTES`. Pattern
 * matches the CollectionsSection sizeBudget: warn approaching the cap,
 * danger imminent at the cap.
 *
 *   - < 800 KB  — default (no concern)
 *   - 800–950 KB — warn tint (orange)
 *   - ≥ 950 KB  — danger tint (red) — cap is imminent
 */
export const SIZE_WARN_THRESHOLD_BYTES   = 800 * 1024;
export const SIZE_DANGER_THRESHOLD_BYTES = 950 * 1024;
export const SIZE_CAP_BYTES              = 1 * 1024 * 1024;

export function sizeBudget(bytes: number): { tier: 'normal' | 'warn' | 'danger'; color: string } {
  if (bytes >= SIZE_DANGER_THRESHOLD_BYTES) {
    return { tier: 'danger', color: 'var(--lumiverse-danger, rgb(246, 130, 130))' };
  }
  if (bytes >= SIZE_WARN_THRESHOLD_BYTES) {
    return { tier: 'warn',   color: 'rgb(246, 175, 125)' };
  }
  return   { tier: 'normal', color: 'inherit' };
}

/**
 * Compare two summaries by the given sort key. `localeCompare` for
 * strings, plain subtraction for numbers. Owner sort falls back to
 * `scriptId` when the script isn't currently loaded so unknown-owner
 * rows still sort deterministically.
 */
export function compareEntries(
  a: ScriptStorageSummary,
  b: ScriptStorageSummary,
  key: SortKey,
  scriptNameById: Map<string, string>,
): number {
  switch (key) {
    case 'script': {
      const an = scriptNameById.get(a.scriptId) ?? a.scriptId;
      const bn = scriptNameById.get(b.scriptId) ?? b.scriptId;
      return an.localeCompare(bn, undefined, { sensitivity: 'base' });
    }
    case 'keys':
      return a.keyCount - b.keyCount;
    case 'size':
      return a.sizeBytes - b.sizeBytes;
    case 'modified':
      return a.modifiedAtMs - b.modifiedAtMs;
  }
}

/** Client-side view state that drives {@link filterAndSortEntries}. */
export interface EntryViewState {
  searchQuery: string;
  sortBy: SortKey | null;
  sortDir: SortDir;
  scriptNameById: Map<string, string>;
}

/**
 * Filter by resolved owner-name substring, then sort. `null` entries (not
 * yet loaded) pass through as `null`; the sort slices before sorting so the
 * caller's array is never mutated. Filtering resolves each row's scriptId to
 * its script name (falling back to the raw id) so the user can search by the
 * name shown in the table rather than the opaque id.
 */
export function filterAndSortEntries(
  entries: ScriptStorageSummary[] | null,
  view: EntryViewState,
): ScriptStorageSummary[] | null {
  if (!entries) return null;
  let result: ScriptStorageSummary[] = entries;
  const q = view.searchQuery.trim().toLowerCase();
  if (q) {
    result = result.filter(e => {
      const name = view.scriptNameById.get(e.scriptId) ?? e.scriptId;
      return name.toLowerCase().includes(q);
    });
  }
  if (view.sortBy) {
    const dir = view.sortDir === 'asc' ? 1 : -1;
    const key = view.sortBy;
    result = result.slice().sort((a, b) => compareEntries(a, b, key, view.scriptNameById) * dir);
  }
  return result;
}

/**
 * Column-header three-state click cycle: null → asc → desc → null.
 * (Local copy of the collections-logic reducer — see file header.)
 */
export function nextSort(
  sortBy: SortKey | null,
  sortDir: SortDir,
  key: SortKey,
): { sortBy: SortKey | null; sortDir: SortDir } {
  if (sortBy !== key) return { sortBy: key, sortDir: 'asc' };
  if (sortDir === 'asc') return { sortBy: key, sortDir: 'desc' };
  return { sortBy: null, sortDir };
}
