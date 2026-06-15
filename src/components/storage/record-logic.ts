/**
 * ============================================================================
 * RECORD / INSPECT — pure logic
 * ============================================================================
 * Data-in / data-out helpers behind the api.db.* admin modals
 * (`InspectModal` + `EditRecordModal`), extracted so they can be unit-tested
 * without rendering:
 *
 *   - `prettyPrintUserData`  — strip reserved fields + pretty-print user data
 *                              (shared by both modals; was duplicated)
 *   - `parseRecordDraft`     — parse + validate the EditRecord textarea draft
 *   - `buildInspectRequest`  — build the `inspect_collection` request for the
 *                              current filter mode / query / page
 *   - `formatTopValue`       — Stats-tab chip formatter for a primitive value
 *   - `formatNum`            — Stats-tab numeric-range formatter
 *
 * Nothing here imports React.
 */

import type { FrontendToBackend } from '../../types/messages.js';
import type { DbRecord } from '../../types/script.js';

/** Filter mode — selected by the InspectModal segmented control. */
export type FilterMode = 'shallow' | 'deep' | 'jsonquery';

/**
 * Pretty-print only the user-data portion of a record — strip the
 * reserved fields (`id` / `createdAt` / `updatedAt`) the backend
 * re-injects on save. Used both for the InspectModal record body and to
 * hydrate the EditRecordModal textarea. The catch is effectively dead
 * (records originate from JSON storage, so they can't be circular) but
 * returns an empty object literal as a safe, still-valid-JSON fallback.
 */
export function prettyPrintUserData(record: DbRecord): string {
  const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, ...user } = record;
  void _id; void _createdAt; void _updatedAt;
  try {
    return JSON.stringify(user, null, 2);
  } catch {
    return '{}';
  }
}

/** Result of {@link parseRecordDraft} — a discriminated union. */
export type ParseRecordResult =
  | { ok: true; patch: Record<string, unknown> }
  | { ok: false; error: string };

/**
 * Parse + validate the EditRecord textarea draft. A record must be a
 * plain JSON object — arrays, null, and primitives are rejected with an
 * actionable message (rendered inline below the textarea). Parse errors
 * carry the underlying `JSON.parse` message so the user can locate the
 * syntax problem.
 */
export function parseRecordDraft(draft: string): ParseRecordResult {
  let parsed: unknown;
  try {
    parsed = JSON.parse(draft);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: `JSON parse error: ${msg}` };
  }
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return { ok: false, error: 'Record must be a JSON object — not an array, null, or primitive.' };
  }
  return { ok: true, patch: parsed as Record<string, unknown> };
}

/**
 * Build the `inspect_collection` request for the current filter state.
 * Mode determines which fields populate:
 *   - jsonquery: `jsonqueryFilter` carries the expression; `textFilter`
 *     / `deepFilter` are omitted (backend ignores them anyway).
 *   - deep / shallow: `textFilter` carries the needle; `deepFilter` is
 *     true only in deep mode.
 * Empty inputs collapse to `undefined` so the backend's "no filter"
 * path (return everything) takes precedence over filter-with-empty-string.
 */
export function buildInspectRequest(
  path: string,
  filterMode: FilterMode,
  debouncedFilter: string,
  page: number,
  pageSize: number,
): FrontendToBackend {
  const trimmed = debouncedFilter.trim();
  if (filterMode === 'jsonquery') {
    return {
      type:            'inspect_collection',
      path,
      jsonqueryFilter: trimmed || undefined,
      limit:           pageSize,
      offset:          page * pageSize,
    };
  }
  return {
    type:       'inspect_collection',
    path,
    textFilter: trimmed || undefined,
    deepFilter: filterMode === 'deep' || undefined,
    limit:      pageSize,
    offset:     page * pageSize,
  };
}

/**
 * Format a primitive value for the Stats-tab top-values chip list.
 * Strings get quoted (and truncated past 32 chars); null shows as the
 * literal `null`; numbers/booleans render as-is.
 */
export function formatTopValue(value: unknown): string {
  if (typeof value === 'string') {
    const inner = value.length > 32 ? value.slice(0, 30) + '…' : value;
    return `"${inner}"`;
  }
  if (value === null) return 'null';
  return String(value);
}

/**
 * Format a numeric range value — fixed to 2 decimals when fractional,
 * integer otherwise. Avoids "12.0000000001"-style noise. Non-finite
 * values render as an em dash.
 */
export function formatNum(n: number): string {
  if (!Number.isFinite(n)) return '—';
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}
