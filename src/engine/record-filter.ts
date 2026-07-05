/**
 * ============================================================================
 * RECORD FILTER — shared pure filtering for api.db collection inspection
 * ============================================================================
 * The single source of truth for the three collection filter modes (shallow /
 * deep text + jsonquery). Used by BOTH:
 *
 *   - the backend Storage-panel path (`db-admin.ts inspectCollection`), which
 *     filters then paginates server-side; and
 *   - the frontend `InspectModal` client-side fast path, which loads a small
 *     collection once and filters in-memory per keystroke (no round-trip).
 *
 * Keeping the matchers + jsonquery handling here means the two paths can never
 * diverge — a record matches the same way whether the filter runs on the worker
 * or in the browser. Pure + framework-free so it bundles cleanly into both.
 */

import { jsonquery } from '@jsonquerylang/jsonquery';
import type { DbRecord } from '../types/script.js';

export interface RecordFilterOptions {
  /** Substring needle for shallow/deep text modes. Ignored when `jsonqueryFilter` is set. */
  textFilter?: string;
  /** When true (and no jsonquery), descend into nested objects/arrays. */
  deepFilter?: boolean;
  /** jsonquery expression — mutually exclusive with the text modes. */
  jsonqueryFilter?: string;
}

export interface RecordFilterResult {
  /** The matching records (NOT paginated — callers slice as needed). */
  records: DbRecord[];
  /** Set only for a failed jsonquery (parse / runtime / non-array result). */
  error: string | null;
}

/**
 * Shallow filter — top-level fields only, string-typed values, case-insensitive
 * substring match. `needle` is expected lowercased by the caller (we don't
 * lowercase per-call to keep the inner loop tight on large collections).
 */
export function matchesShallow(record: DbRecord, needle: string): boolean {
  for (const v of Object.values(record)) {
    if (typeof v === 'string' && v.toLowerCase().includes(needle)) return true;
  }
  return false;
}

/**
 * Deep filter — recursively walk objects + arrays, matching string values at
 * any depth. Returns early on the first match. String-only by design (numbers /
 * booleans aren't coerced — use jsonquery for typed matches like `filter(.hp > 50)`).
 */
export function matchesDeep(value: unknown, needle: string): boolean {
  if (typeof value === 'string') {
    return value.toLowerCase().includes(needle);
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      if (matchesDeep(item, needle)) return true;
    }
    return false;
  }
  if (value !== null && typeof value === 'object') {
    for (const v of Object.values(value)) {
      if (matchesDeep(v, needle)) return true;
    }
    return false;
  }
  return false;
}

/**
 * Apply a filter to a records array, returning the matches (unpaginated) plus a
 * jsonquery error if any. Mirrors `db-admin.ts inspectCollection`'s mode
 * precedence exactly: jsonquery wins when set; otherwise a trimmed text needle
 * filters shallow (default) or deep; an empty/absent filter returns everything.
 */
export function filterRecords(records: DbRecord[], opts: RecordFilterOptions): RecordFilterResult {
  const queryRaw = opts.jsonqueryFilter?.trim();
  if (queryRaw) {
    let queried: unknown;
    try {
      queried = jsonquery(records, queryRaw);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      return { records: [], error: `jsonquery error: ${msg}` };
    }
    if (!Array.isArray(queried)) {
      return {
        records: [],
        error: `jsonquery error: expression must return an array of records (got ${queried === null ? 'null' : typeof queried})`,
      };
    }
    return { records: queried as DbRecord[], error: null };
  }

  const needleRaw = opts.textFilter?.trim();
  const needle = needleRaw ? needleRaw.toLowerCase() : '';
  const filtered = needle
    ? records.filter((r) => (opts.deepFilter ? matchesDeep(r, needle) : matchesShallow(r, needle)))
    : records;
  return { records: filtered, error: null };
}
