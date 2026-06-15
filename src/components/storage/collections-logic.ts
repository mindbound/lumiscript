/**
 * ============================================================================
 * COLLECTIONS SECTION — pure logic
 * ============================================================================
 * The filter / sort / budget / tooltip logic behind `CollectionsSection.tsx`,
 * extracted from the component so it can be unit-tested without rendering.
 * The component owns the React state (search query, scope-filter set, sort
 * column + direction) and delegates every decision to the pure functions here:
 *
 *   - `sizeBudget`              — storage-budget tier + tint for a byte count
 *   - `scopeTooltip`            — resolved character / chat identity tooltip
 *   - `compareCollections`      — per-key sort comparator (sign like Array#sort)
 *   - `filterAndSortCollections`— the full visible-list pipeline (scope → name → sort)
 *   - `nextScopeFilter`         — scope-chip toggle reducer (never-empty guard)
 *   - `nextSort`                — column-header three-state cycle reducer
 *
 * Nothing here imports React — it's plain data-in / data-out.
 */

import type { CollectionSummary } from '../../engine/db-admin.js';

/** Sortable column keys — must match the header `<span>` render order. */
export type SortKey = 'name' | 'scope' | 'owner' | 'size' | 'updated';
export type SortDir = 'asc' | 'desc';
/** Available scope filter values — same set as `CollectionSummary['scope']`. */
export type Scope = CollectionSummary['scope'];
export const ALL_SCOPES: ReadonlyArray<Scope> = ['script', 'character', 'chat'];

/**
 * Storage budget thresholds, in bytes — anchored to the api.db.* size
 * governance constants from `db-store.ts`. The soft-warn threshold is
 * 10 MB (the host emits an `ls:collection:size-warning` broadcast); the
 * hard-stop is 50 MB (writes throw above that). Tinting:
 *   - < 10 MB        — default text color (no concern)
 *   - 10–40 MB       — warning tint (orange-ish, matches the
 *                      character-scope chip palette)
 *   - ≥ 40 MB        — danger tint (red, matches the trash-action color
 *                      token); the cap is imminent.
 * Helps admins spot collections about to hit the cap on a glance,
 * without changing the existing column layout. Tooltip on the cell
 * spells out the percentage so the user can verify their reading.
 */
export const SIZE_WARN_THRESHOLD_BYTES   = 10 * 1024 * 1024;
export const SIZE_DANGER_THRESHOLD_BYTES = 40 * 1024 * 1024;
export const SIZE_CAP_BYTES              = 50 * 1024 * 1024;

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
 * Build a scope-badge tooltip string that includes the resolved
 * character / chat identity when available. For script scope (or when
 * the host couldn't resolve a name), falls back to the full path.
 *
 * Surfacing the identity in the tooltip rather than adding a visible
 * column keeps the row layout compact; the InspectModal + DropConfirmDialog
 * show the name prominently in their own headers, which is where users
 * spend the most time when they need to disambiguate "which character
 * does this collection belong to?".
 */
export function scopeTooltip(c: CollectionSummary): string {
  if (c.scope === 'character') {
    if (c.characterName) return `character: ${c.characterName} (${c.characterId})\n${c.path}`;
    if (c.characterId)   return `character: ${c.characterId} (not currently loaded)\n${c.path}`;
  }
  if (c.scope === 'chat') {
    if (c.chatName) return `chat: ${c.chatName} (${c.chatId})\n${c.path}`;
    if (c.chatId)   return `chat: ${c.chatId} (not currently loaded)\n${c.path}`;
  }
  return c.path;
}

/**
 * Resolve a "Belongs to: <name>" line for character / chat scopes.
 * Returns null for script scope (the owner script name already covers
 * the identity), or when the host didn't resolve a name (deleted
 * character / chat, permission revoked) — caller can then fall back
 * to displaying just the path, which is enough for disambiguation.
 * Used by the DropConfirmDialog header.
 */
export function scopeIdentityLine(c: CollectionSummary): { label: string; name: string; id: string } | null {
  if (c.scope === 'character' && c.characterName && c.characterId) {
    return { label: 'Character', name: c.characterName, id: c.characterId };
  }
  if (c.scope === 'chat' && c.chatName && c.chatId) {
    return { label: 'Chat', name: c.chatName, id: c.chatId };
  }
  return null;
}

/**
 * Compare two collections by the given sort key. Returns a number whose
 * sign matches `a vs b` (negative = a-first, positive = b-first), like
 * `Array#sort`. Caller multiplies by the direction sign.
 *
 * String comparisons use `localeCompare` so non-ASCII names sort
 * naturally (case-insensitive). Numeric / date comparisons use plain
 * subtraction. Owner sort uses the resolved script name when known
 * (falls back to scriptId so unknown-owner rows still sort
 * deterministically).
 */
export function compareCollections(
  a: CollectionSummary,
  b: CollectionSummary,
  key: SortKey,
  scriptNameById: Map<string, string>,
): number {
  switch (key) {
    case 'name':
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    case 'scope':
      return a.scope.localeCompare(b.scope);
    case 'owner': {
      const an = scriptNameById.get(a.scriptId) ?? a.scriptId;
      const bn = scriptNameById.get(b.scriptId) ?? b.scriptId;
      return an.localeCompare(bn, undefined, { sensitivity: 'base' });
    }
    case 'size':
      return a.sizeBytes - b.sizeBytes;
    case 'updated':
      return new Date(a.modifiedAt).getTime() - new Date(b.modifiedAt).getTime();
  }
}

/** Client-side view state that drives {@link filterAndSortCollections}. */
export interface CollectionViewState {
  scopeFilter: Set<Scope>;
  searchQuery: string;
  sortBy: SortKey | null;
  sortDir: SortDir;
  scriptNameById: Map<string, string>;
}

/**
 * Apply scope filter, then name substring filter, then sort — the exact
 * pipeline the component renders. Empty filters short-circuit to the
 * original list (no allocation) for the common no-filter path. `null`
 * collections (not yet loaded) pass through as `null`. The sort slices
 * before sorting so the caller's array is never mutated.
 */
export function filterAndSortCollections(
  collections: CollectionSummary[] | null,
  view: CollectionViewState,
): CollectionSummary[] | null {
  if (!collections) return null;
  let result: CollectionSummary[] = collections;

  if (view.scopeFilter.size < ALL_SCOPES.length) {
    result = result.filter(c => view.scopeFilter.has(c.scope));
  }
  const q = view.searchQuery.trim().toLowerCase();
  if (q) {
    result = result.filter(c => c.name.toLowerCase().includes(q));
  }
  if (view.sortBy) {
    const dir = view.sortDir === 'asc' ? 1 : -1;
    // Slice before sorting — avoid mutating the parent's array.
    const key = view.sortBy;
    result = result.slice().sort((a, b) => compareCollections(a, b, key, view.scriptNameById) * dir);
  }
  return result;
}

/**
 * Scope-chip toggle reducer. Adds the scope if absent, removes it if
 * present. Guards against the zero-scope state (which would render an
 * "empty filtered" view with no obvious recovery) by re-enabling all
 * scopes when the user deselects the last one.
 */
export function nextScopeFilter(prev: Set<Scope>, scope: Scope): Set<Scope> {
  const next = new Set(prev);
  if (next.has(scope)) next.delete(scope);
  else next.add(scope);
  if (next.size === 0) return new Set(ALL_SCOPES);
  return next;
}

/**
 * Column-header three-state click cycle: null → asc → desc → null.
 * Per-column independent — selecting a different column starts fresh at
 * asc. When clearing (desc → null) the direction is left unchanged (it's
 * irrelevant while no column is active).
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
