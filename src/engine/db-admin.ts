/**
 * ============================================================================
 * LUMISCRIPT — DB ADMIN
 * ============================================================================
 * Host-side utilities that power the Storage panel tab.
 *
 * Unlike `api.db.list()` (owner-scoped — a script only sees its own
 * collections), `enumerateAllCollections` walks ALL three scope prefixes
 * across ALL owning scripts. This is the ADMIN/DEBUG view, equivalent in
 * spirit to how the Status tab surfaces Active Tools across scripts.
 *
 * Scripts cannot invoke these functions directly — they're exposed only
 * through Frontend → Backend messages (`list_collections`,
 * `inspect_collection`, `drop_collection` — handled in `backend.ts`).
 *
 * Design notes:
 *   - Unparseable paths are skipped defensively (not an error). Future
 *     scope additions or stray files won't crash the enumerator.
 *   - `stat()` failures degrade to zero-sized / epoch-0 modifiedAt rather
 *     than excluding the record. The collection still shows up in the list
 *     so users can drop it.
 *   - `inspectCollection` applies the text filter post-load (shallow
 *     top-level string match) and pagination post-filter, so users see
 *     "page N of M matching" rather than "page N of M total".
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { DbScope, DbRecord } from '../types/script.js';

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * Per-collection summary row for the Storage panel's Collections section.
 * Does NOT include the record count — that's lazy (loading every
 * collection to count records would be prohibitively expensive).
 */
export interface CollectionSummary {
  /** Full `spindle.userStorage` path — opaque to frontend but carried
   *  back in `inspect_collection` and `drop_collection` requests. */
  path: string;
  name: string;
  scope: DbScope;
  scriptId: string;
  /** Only set when scope === 'character'. */
  characterId?: string;
  /** Only set when scope === 'chat'. */
  chatId?: string;
  sizeBytes: number;
  modifiedAt: string;
}

export interface InspectOptions {
  textFilter?: string;
  limit?: number;
  offset?: number;
}

export interface InspectResult {
  /** Slice of records after filter + pagination. */
  records: DbRecord[];
  /** Total count AFTER filter, BEFORE pagination. Drives "N of M matching" UX. */
  total: number;
}

// ─── Path parsing ────────────────────────────────────────────────────────────

const SCRIPT_PATH_RE    = /^db\/scripts\/([^/]+)\/([^/]+)\.json$/;
const CHARACTER_PATH_RE = /^db\/characters\/([^/]+)\/([^/]+)\/([^/]+)\.json$/;
const CHAT_PATH_RE      = /^db\/chats\/([^/]+)\/([^/]+)\/([^/]+)\.json$/;

const SCOPE_PREFIXES = ['db/scripts/', 'db/characters/', 'db/chats/'] as const;

/**
 * Parse a userStorage path into a partial `CollectionSummary` (without
 * stat fields). Returns `null` for paths that don't match any known
 * scope template.
 */
function parsePath(path: string): Omit<CollectionSummary, 'sizeBytes' | 'modifiedAt'> | null {
  const scriptMatch = SCRIPT_PATH_RE.exec(path);
  if (scriptMatch) {
    return { path, scope: 'script', scriptId: scriptMatch[1]!, name: scriptMatch[2]! };
  }
  const charMatch = CHARACTER_PATH_RE.exec(path);
  if (charMatch) {
    return {
      path,
      scope: 'character',
      characterId: charMatch[1]!,
      scriptId: charMatch[2]!,
      name: charMatch[3]!,
    };
  }
  const chatMatch = CHAT_PATH_RE.exec(path);
  if (chatMatch) {
    return {
      path,
      scope: 'chat',
      chatId: chatMatch[1]!,
      scriptId: chatMatch[2]!,
      name: chatMatch[3]!,
    };
  }
  return null;
}

/**
 * Defensive path validator for Frontend → Backend requests. The panel's
 * `inspect_collection` and `drop_collection` messages carry a path
 * supplied by the frontend; this check prevents any other `userStorage`
 * path from being touched (e.g. `scripts.json`, `variables/*.json`).
 */
export function isValidCollectionPath(path: string): boolean {
  return SCRIPT_PATH_RE.test(path)
      || CHARACTER_PATH_RE.test(path)
      || CHAT_PATH_RE.test(path);
}

// ─── Enumeration ─────────────────────────────────────────────────────────────

/**
 * Walk the three scope prefixes and return a summary for every
 * collection file. Stat calls run in parallel; scope directories that
 * don't yet exist (never written to) return empty lists without error.
 *
 * **Path normalization** (two concerns):
 *   1. `spindle.userStorage.list(prefix)` is backed by `readdirSync(dir,
 *      { recursive: true })` on the Lumiverse host, which returns paths
 *      *relative to the prefix* (e.g. `scriptA/x.json` for
 *      `list('db/scripts/')`). We re-prefix defensively so the scope
 *      regexes downstream see absolute-from-userStorage-root paths.
 *      Paths that already carry the prefix pass through unchanged,
 *      keeping us compatible with future hosts that return full paths.
 *   2. On Windows, `readdirSync` returns platform-native separators
 *      (`\` not `/`), so a relative return `scriptA\x.json` would never
 *      match our forward-slash scope regexes. We normalize all
 *      backslashes to forward slashes before parsing.
 */
export async function enumerateAllCollections(userId?: string): Promise<CollectionSummary[]> {
  const pathSets = await Promise.all(
    SCOPE_PREFIXES.map(async (prefix) => {
      const raw = await spindle.userStorage.list(prefix, userId).catch(() => [] as string[]);
      return raw.map((p) => {
        // Normalize Windows-native backslash separators to forward slash
        // so scope regexes (which match `db/scripts/...`) work on any
        // host platform.
        const fwd = p.replace(/\\/g, '/');
        if (fwd.startsWith(prefix)) return fwd;
        // Strip any accidental leading slash before re-prefixing.
        const rel = fwd.replace(/^[\\/]+/, '');
        return prefix + rel;
      });
    }),
  );
  const allPaths = pathSets.flat();

  const summaries = await Promise.all(
    allPaths.map(async (path): Promise<CollectionSummary | null> => {
      const parsed = parsePath(path);
      if (!parsed) return null;
      let sizeBytes = 0;
      let modifiedAt = new Date(0).toISOString();
      try {
        const st = await spindle.userStorage.stat(path, userId);
        if (st.exists) {
          sizeBytes = st.sizeBytes;
          modifiedAt = st.modifiedAt;
        }
      } catch {
        // Stat failure is non-fatal — caller still sees the record with
        // zero size / epoch modifiedAt, and can drop the collection.
      }
      return { ...parsed, sizeBytes, modifiedAt };
    }),
  );

  return summaries.filter((s): s is CollectionSummary => s !== null);
}

// ─── Inspection ──────────────────────────────────────────────────────────────

/**
 * Load a collection from disk, apply an optional shallow text filter
 * across top-level string fields, then paginate. Non-existent paths
 * return an empty result (rather than throwing) — UI can show "no
 * records" instead of crashing on a stale path.
 */
export async function inspectCollection(
  path: string,
  opts: InspectOptions = {},
  userId?: string,
): Promise<InspectResult> {
  if (!isValidCollectionPath(path)) {
    throw new Error(`db-admin: invalid collection path "${path}"`);
  }

  const loaded = await spindle.userStorage.getJson<DbRecord[]>(path, {
    fallback: [] as DbRecord[],
    userId,
  });
  const records = Array.isArray(loaded) ? loaded : [];

  // Shallow case-insensitive text filter: matches when ANY top-level
  // string field includes the needle. Deep search is out of scope for
  // v1 — a script looking for a specific nested value can use
  // `api.db.collection().find((r) => ...)` in a script instead.
  const needleRaw = opts.textFilter?.trim();
  const needle = needleRaw ? needleRaw.toLowerCase() : '';
  const filtered = needle
    ? records.filter((r) => {
        for (const v of Object.values(r)) {
          if (typeof v === 'string' && v.toLowerCase().includes(needle)) return true;
        }
        return false;
      })
    : records;

  const offset = Math.max(0, opts.offset ?? 0);
  const rawLimit = opts.limit ?? filtered.length;
  const limit = Math.max(0, rawLimit);
  const slice = filtered.slice(offset, offset + limit);

  return { records: slice, total: filtered.length };
}
