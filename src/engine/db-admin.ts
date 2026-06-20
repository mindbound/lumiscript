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

import { filterRecords } from './record-filter.js';
import { dbCacheKey, invalidateDbCache } from './db-cache.js';
import type { DbScope, DbRecord } from '../types/script.js';
import { runExclusive } from './db-queue.js';
import { emit as busEmit } from './broadcast-bus.js';
import { DB_SIZE_MAX_BYTES, DB_SIZE_WARN_BYTES, DbSizeExceededError } from './db-store.js';

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
  /**
   * Resolved character name when `scope === 'character'`. Resolved at
   * enumerate time via `spindle.characters.get`. Undefined when the
   * character no longer exists, the host returns null, or the lookup
   * throws (deleted character, permission revoked, etc.) — UI falls
   * back to displaying the truncated UUID in that case.
   */
  characterName?: string;
  /**
   * Resolved chat name when `scope === 'chat'`. Same caveats as
   * `characterName` — best-effort, undefined on miss.
   */
  chatName?: string;
  sizeBytes: number;
  modifiedAt: string;
}

export interface InspectOptions {
  textFilter?: string;
  /** When true, the text-filter walker descends into nested objects /
   *  arrays and matches string values at any depth. When false (default),
   *  only top-level string fields are checked — the original O(N) cheap
   *  pass that's fine for flat records. */
  deepFilter?: boolean;
  /**
   * Power-user mode — a jsonquery expression evaluated against the
   * records array (e.g. `filter(.hp > 50)`,
   * `pipe(filter(.tier == "hard"), sort(.created))`). Mutually
   * exclusive with `textFilter` / `deepFilter`: when set, those are
   * ignored. Errors (parse, runtime, non-array result) surface via
   * `InspectResult.error` rather than throwing.
   */
  jsonqueryFilter?: string;
  limit?: number;
  offset?: number;
}

export interface InspectResult {
  /** Slice of records after filter + pagination. */
  records: DbRecord[];
  /** Total count AFTER filter, BEFORE pagination. Drives "N of M matching" UX. */
  total: number;
  /**
   * Set when the request failed (currently only `jsonqueryFilter` mode
   * surfaces errors here — text/shallow/deep paths can't really fail
   * unless storage is broken, in which case we'd throw). `records` is
   * `[]` and `total` is `0` whenever `error` is non-empty.
   */
  error?: string;
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
  const collected = summaries.filter((s): s is CollectionSummary => s !== null);

  // ── Resolve character + chat names for friendlier display ────────────
  // The Storage panel's collection rows otherwise show raw UUIDs for
  // character / chat scopes (`5a7dee71-…`), which is unactionable for
  // users with multiple characters or chats. Resolve the unique IDs in
  // parallel and decorate the summaries — best-effort: if a lookup
  // fails (deleted character, permission revoked, host hiccup), the
  // name stays undefined and the UI falls back to the truncated UUID.
  //
  // Stateless: re-runs on every refresh. Cheap relative to stat() — a
  // typical session has ≤ tens of unique IDs across all collections.
  const characterIds = new Set<string>();
  const chatIds      = new Set<string>();
  for (const s of collected) {
    if (s.characterId) characterIds.add(s.characterId);
    if (s.chatId)      chatIds.add(s.chatId);
  }

  const [charNamesEntries, chatNamesEntries] = await Promise.all([
    Promise.all([...characterIds].map(async (id): Promise<[string, string | undefined]> => {
      try {
        const c = await spindle.characters.get(id, userId);
        return [id, c?.name];
      } catch {
        return [id, undefined];
      }
    })),
    Promise.all([...chatIds].map(async (id): Promise<[string, string | undefined]> => {
      try {
        const c = await spindle.chats.get(id, userId);
        return [id, c?.name];
      } catch {
        return [id, undefined];
      }
    })),
  ]);
  const characterNames = new Map(charNamesEntries);
  const chatNames      = new Map(chatNamesEntries);

  for (const s of collected) {
    if (s.characterId) {
      const name = characterNames.get(s.characterId);
      if (name) s.characterName = name;
    }
    if (s.chatId) {
      const name = chatNames.get(s.chatId);
      if (name) s.chatName = name;
    }
  }

  return collected;
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

  // Three filter modes:
  //   1. jsonquery (power-user) — when `jsonqueryFilter` is set, evaluate
  //      the expression against the records array via the same
  //      `@jsonquerylang/jsonquery` library that `api.db.collection().query()`
  //      uses. Mutually exclusive with text filters. Errors surface via
  //      `result.error` instead of throwing — the UI renders them inline
  //      so users can fix syntax without losing context.
  //   2. Shallow text (default) — matches when ANY top-level string field
  //      includes the needle. Cheapest path, fine for flat records.
  //   3. Deep text — descends into nested objects / arrays and matches
  //      string values at any depth. Bounded by the 50 MB collection
  //      cap. Numbers / booleans are NOT coerced to strings — parity
  //      with shallow ("text filter is for string content; use jsonquery
  //      for typed matches like `filter(.hp > 50)`").
  const offset   = Math.max(0, opts.offset ?? 0);

  // Mode precedence + matching live in the shared `record-filter` module so the
  // backend and the InspectModal client-side fast path can never diverge.
  const { records: filtered, error } = filterRecords(records, opts);
  if (error) {
    return { records: [], total: 0, error };
  }

  const rawLimit = opts.limit ?? filtered.length;
  const limit    = Math.max(0, rawLimit);
  const slice    = filtered.slice(offset, offset + limit);

  return { records: slice, total: filtered.length };
}

// ─── Aggregate stats ────────────────────────────────────────────────────────

/** Recognised JSON-value type tags surfaced in field-level stats. */
export type StatsTypeTag =
  | 'string'
  | 'number'
  | 'boolean'
  | 'null'
  | 'array'
  | 'object';

/**
 * Per-field aggregate emitted by `analyzeCollection`. Each entry is
 * the full picture of one top-level field's distribution across the
 * collection's records — type mix, presence rate, top primitive
 * values, and (if any values are numeric) a min/max/mean.
 *
 * Reserved fields (`id` / `createdAt` / `updatedAt`) are excluded
 * from the analysis — they're invariants on every record and would
 * just dominate the output without informing about user data.
 */
export interface FieldStats {
  name: string;
  /** Number of records that have this field set (i.e. `field in record`). */
  presence: number;
  /** Counts per JSON-value type — sums to `presence`. */
  types: Partial<Record<StatsTypeTag, number>>;
  /**
   * Number of distinct primitive values seen for this field. Computed
   * by hashing each primitive (string/number/boolean/null) into a
   * Set; objects and arrays are NOT included in cardinality (they
   * don't have a meaningful equality check at this level), so
   * `cardinality` reflects "distinct primitive values only". For
   * fields that are entirely objects/arrays this will be 0.
   */
  cardinality: number;
  /**
   * Top primitive values by count, descending. Truncated to
   * `STATS_TOP_VALUES_LIMIT` so the UI can render a small chip list
   * without unbounded scroll. Only populated if `cardinality > 0`.
   */
  topValues: Array<{ value: unknown; count: number }>;
  /** When at least one value is numeric, the min/max/mean across the
   *  numeric subset (NaN-safe; non-numeric values ignored). Null
   *  otherwise so the UI can omit the row. */
  numericRange: { min: number; max: number; mean: number } | null;
}

/** Aggregate emitted by `analyzeCollection`. */
export interface CollectionStats {
  /** Total record count after loading the file (no filter). */
  totalRecords: number;
  /** Per-field summaries, sorted by descending presence so the most
   *  common fields appear first in the UI. */
  fields: FieldStats[];
}

/** How many top values to retain per field — kept small so the
 *  Stats panel stays scannable. */
const STATS_TOP_VALUES_LIMIT = 5;

/** Reserved fields excluded from per-field stats — see `FieldStats` JSDoc. */
const STATS_RESERVED_FIELDS = new Set(['id', 'createdAt', 'updatedAt']);

/** Stats-typed JSON-value classifier. Mirrors the canonical JSON
 *  taxonomy used by `highlightJson` token classes. */
function classifyJsonValue(v: unknown): StatsTypeTag {
  if (v === null)             return 'null';
  if (Array.isArray(v))       return 'array';
  return typeof v as StatsTypeTag;
}

/**
 * Walk a collection and produce a per-field aggregate. Loads the
 * full file (bypassing pagination); the 50 MB collection cap bounds
 * cost. Used by the InspectModal's "Stats" view.
 *
 * Returns an empty result rather than throwing on missing /
 * malformed files — UI shows "no records" instead of crashing.
 *
 * Top-level fields only. Nested object/array fields show up with
 * their type counts (`array: N` / `object: N`) but no recursive
 * decomposition — the rationale matches `matchesShallow`'s: scripts
 * that need deeper aggregates can use `api.db.collection().query()`
 * with jsonquery `groupBy` / `count` operators.
 */
export async function analyzeCollection(
  path: string,
  userId?: string,
): Promise<CollectionStats> {
  if (!isValidCollectionPath(path)) {
    return { totalRecords: 0, fields: [] };
  }
  let records: DbRecord[];
  try {
    const loaded = await spindle.userStorage.getJson<DbRecord[]>(path, {
      fallback: [] as DbRecord[],
      userId,
    });
    records = Array.isArray(loaded) ? loaded : [];
  } catch {
    return { totalRecords: 0, fields: [] };
  }

  if (records.length === 0) return { totalRecords: 0, fields: [] };

  // Build per-field accumulators in a single pass. We track:
  //   - presence (how many records have the key at all)
  //   - per-type counts
  //   - primitive-value frequency map (keyed by a stable string repr)
  //   - numeric stats (sum / min / max / N) for the numeric subset
  interface Accum {
    presence: number;
    types:    Map<StatsTypeTag, number>;
    /** Stable string repr → { rawValue, count }. Stable repr lets us
     *  deduplicate "true" the boolean from `"true"` the string. */
    valueCounts: Map<string, { value: unknown; count: number }>;
    numericSum: number;
    numericMin: number;
    numericMax: number;
    numericN:   number;
  }
  const fieldAccum = new Map<string, Accum>();

  for (const rec of records) {
    if (rec === null || typeof rec !== 'object') continue;
    for (const [key, value] of Object.entries(rec)) {
      if (STATS_RESERVED_FIELDS.has(key)) continue;
      let acc = fieldAccum.get(key);
      if (!acc) {
        acc = {
          presence:    0,
          types:       new Map(),
          valueCounts: new Map(),
          numericSum:  0,
          numericMin:  Number.POSITIVE_INFINITY,
          numericMax:  Number.NEGATIVE_INFINITY,
          numericN:    0,
        };
        fieldAccum.set(key, acc);
      }
      acc.presence += 1;
      const tag = classifyJsonValue(value);
      acc.types.set(tag, (acc.types.get(tag) ?? 0) + 1);

      // Primitives contribute to value counts. Objects + arrays don't —
      // they don't have a meaningful equality story at this layer.
      if (tag === 'string' || tag === 'number' || tag === 'boolean' || tag === 'null') {
        // Include the type tag in the key so `1` (number) and `"1"`
        // (string) don't collide. JSON.stringify is the canonical
        // primitive serialization here.
        const reprKey = `${tag}:${JSON.stringify(value)}`;
        const existing = acc.valueCounts.get(reprKey);
        if (existing) existing.count += 1;
        else          acc.valueCounts.set(reprKey, { value, count: 1 });
      }

      if (tag === 'number' && Number.isFinite(value)) {
        const n = value as number;
        acc.numericSum += n;
        acc.numericN   += 1;
        if (n < acc.numericMin) acc.numericMin = n;
        if (n > acc.numericMax) acc.numericMax = n;
      }
    }
  }

  // Materialise FieldStats array. Sort topValues descending by count;
  // sort fields descending by presence for stable, scannable output.
  const fields: FieldStats[] = [];
  for (const [name, acc] of fieldAccum) {
    const sortedValues = [...acc.valueCounts.values()].sort((a, b) => b.count - a.count);
    const topValues = sortedValues.slice(0, STATS_TOP_VALUES_LIMIT);
    const cardinality = sortedValues.length;
    const types: Partial<Record<StatsTypeTag, number>> = {};
    for (const [tag, n] of acc.types) types[tag] = n;
    const numericRange = acc.numericN > 0
      ? {
          min:  acc.numericMin,
          max:  acc.numericMax,
          mean: acc.numericSum / acc.numericN,
        }
      : null;
    fields.push({
      name,
      presence: acc.presence,
      types,
      cardinality,
      topValues,
      numericRange,
    });
  }
  fields.sort((a, b) => b.presence - a.presence || a.name.localeCompare(b.name));

  return { totalRecords: records.length, fields };
}

/**
 * Count the records in a collection without paginating them. Loads the
 * file, returns the array length. Returns `-1` for missing / malformed
 * paths so the UI can distinguish "I don't know yet" from a legitimate
 * zero-record collection.
 *
 * Backs the drop-confirmation dialog's "you're about to delete N
 * records" message — a focused query so we don't have to repurpose
 * `inspectCollection` (which would also load + paginate the records).
 */
export async function countCollection(
  path: string,
  userId?: string,
): Promise<number> {
  if (!isValidCollectionPath(path)) return -1;
  try {
    const loaded = await spindle.userStorage.getJson<DbRecord[]>(path, {
      fallback: [] as DbRecord[],
      userId,
    });
    return Array.isArray(loaded) ? loaded.length : -1;
  } catch {
    return -1;
  }
}

// ─── Record mutations (admin-side) ───────────────────────────────────────────

/**
 * Sentinel scriptId for broadcast events emitted from admin-side
 * mutations. Scripts subscribed to `ls:collection:updated` /
 * `ls:collection:deleted` see this value in `payload.scriptId` and can
 * tell the change came from the Storage panel rather than another
 * script. Distinct from `__lumiscript_backend__` (the broadcast
 * forwarder's owner sentinel — different concept, different lifecycle).
 */
const ADMIN_BROADCAST_SCRIPT_ID = '__lumiscript_admin__';

/** Common shape for the mutation result returned to the backend handler. */
export interface RecordMutationResult {
  success: boolean;
  /** Populated only on success — number of records left in the
   *  collection after the mutation. Lets callers log a meaningful "now
   *  N records remain" line for debugging without re-reading the file. */
  remaining?: number;
  /** Populated only on failure — single-line human-readable reason. */
  error?: string;
}

/**
 * Parse a path's scope + collection name for broadcast payloads. The
 * `ls:collection:*` events carry `name` + `scope` so subscribers can
 * filter by collection without re-parsing the path themselves —
 * keeping admin mutations bus-compatible with `api.db.*`.
 */
function broadcastDescriptorFor(path: string): { name: string; scope: DbScope } | null {
  const m = SCRIPT_PATH_RE.exec(path);
  if (m)               return { scope: 'script',    name: m[2]! };
  const c = CHARACTER_PATH_RE.exec(path);
  if (c)               return { scope: 'character', name: c[3]! };
  const ch = CHAT_PATH_RE.exec(path);
  if (ch)              return { scope: 'chat',      name: ch[3]! };
  return null;
}

/**
 * Update a single record inside a collection by id. Reserved fields
 * (`id` / `createdAt` / `updatedAt`) on the patch are stripped silently
 * — `id` / `createdAt` are immutable, `updatedAt` is always re-stamped
 * to `Date.now()`. Same semantics as `DbStore.update()` on a single-id
 * filter, minus schema validation (admin doesn't have access to the
 * Zod schema attached at script-side `api.db.collection({ schema })`,
 * since schemas don't persist).
 *
 * The mutation runs inside `runExclusive(path, ...)` so admin writes
 * and `api.db.*` writes on the same collection serialize through the
 * same per-path lock.
 *
 * Returns `{ success, error?, remaining? }` rather than throwing so
 * the backend handler can route failures into a toast without noisy
 * stack-trace logging for user-recoverable cases (record not found,
 * size cap exceeded).
 */
export async function updateRecord(
  path: string,
  recordId: string,
  patch: Record<string, unknown>,
  userId?: string,
): Promise<RecordMutationResult> {
  if (!isValidCollectionPath(path)) {
    return { success: false, error: `invalid collection path "${path}"` };
  }
  // Strip reserved fields — same defensive filter `DbStore.update()`
  // does. We don't reject patches that contain them; just silently
  // ignore so the UI can pass a record-shaped object without sanitising.
  const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, ...cleanPatch } =
    patch as Record<string, unknown> & Partial<Pick<DbRecord, 'id' | 'createdAt' | 'updatedAt'>>;
  void _id; void _createdAt; void _updatedAt;

  return runExclusive(path, async (): Promise<RecordMutationResult> => {
    const loaded = await spindle.userStorage.getJson<DbRecord[]>(path, {
      fallback: [] as DbRecord[],
      userId,
    });
    const records = Array.isArray(loaded) ? loaded : [];
    const idx = records.findIndex((r) => r.id === recordId);
    if (idx < 0) {
      return { success: false, error: `record "${recordId}" not found in collection` };
    }
    const original = records[idx]!;
    const merged: DbRecord = {
      ...original,
      ...cleanPatch,
      id:        original.id,
      createdAt: original.createdAt,
      updatedAt: Date.now(),
    };
    records[idx] = merged;

    // Persist with the same size governance `DbStore.persist()` enforces —
    // admin mutations should neither push a collection past the hard cap
    // (throw) nor silently skip the soft-warn the script-side path emits.
    const serialized = JSON.stringify(records, null, 2);
    if (serialized.length > DB_SIZE_MAX_BYTES) {
      return { success: false, error: new DbSizeExceededError(serialized.length).message };
    }

    const desc = broadcastDescriptorFor(path);

    // C12-07 — mirror the script-side soft-warn (DbStore.persist → onSizeWarn
    // → api/db.ts makeSizeWarn). An admin edit that grows a collection past the
    // 10 MB soft threshold now emits the same `size-warning` broadcast scripts
    // get, instead of crossing it unobserved. (deleteRecord needs no guard — a
    // delete only shrinks the collection, so it can't cross either threshold.)
    if (serialized.length > DB_SIZE_WARN_BYTES && desc) {
      busEmit('ls:collection:size-warning', {
        name:     desc.name,
        scope:    desc.scope,
        scriptId: ADMIN_BROADCAST_SCRIPT_ID,
        bytes:    serialized.length,
      });
    }

    try {
      await spindle.userStorage.setJson(path, records, { indent: 2, userId });
    } catch (err) {
      return { success: false, error: err instanceof Error ? err.message : String(err) };
    }
    // Out-of-band write (bypasses DbStore) — drop its cache for this collection.
    invalidateDbCache(dbCacheKey(userId, path));

    if (desc) {
      busEmit('ls:collection:updated', {
        name:       desc.name,
        scope:      desc.scope,
        scriptId:   ADMIN_BROADCAST_SCRIPT_ID,
        count:      1,
        filterKind: 'object',
      });
    }
    return { success: true, remaining: records.length };
  });
}

/**
 * Delete a single record from a collection by id. Same lock + broadcast
 * semantics as `updateRecord` — runs inside `runExclusive`, emits
 * `ls:collection:deleted` with `count: 1` and `filterKind: 'object'`
 * (since "delete by id" is conceptually an object filter `{ id }`).
 *
 * No-op when the id is missing — returns `{ success: false }` rather
 * than throwing, so the caller can decide whether stale UI is worth a
 * toast (probably not — the broadcast refresh will reconcile).
 */
export async function deleteRecord(
  path: string,
  recordId: string,
  userId?: string,
): Promise<RecordMutationResult> {
  if (!isValidCollectionPath(path)) {
    return { success: false, error: `invalid collection path "${path}"` };
  }
  return runExclusive(path, async (): Promise<RecordMutationResult> => {
    const loaded = await spindle.userStorage.getJson<DbRecord[]>(path, {
      fallback: [] as DbRecord[],
      userId,
    });
    const records = Array.isArray(loaded) ? loaded : [];
    const before = records.length;
    const kept = records.filter((r) => r.id !== recordId);
    if (kept.length === before) {
      return { success: false, error: `record "${recordId}" not found in collection` };
    }
    try {
      await spindle.userStorage.setJson(path, kept, { indent: 2, userId });
    } catch (err) {
      return { success: false, error: err instanceof Error ? err.message : String(err) };
    }
    // Out-of-band write (bypasses DbStore) — drop its cache for this collection.
    invalidateDbCache(dbCacheKey(userId, path));
    const desc = broadcastDescriptorFor(path);
    if (desc) {
      busEmit('ls:collection:deleted', {
        name:       desc.name,
        scope:      desc.scope,
        scriptId:   ADMIN_BROADCAST_SCRIPT_ID,
        count:      1,
        filterKind: 'object',
      });
    }
    return { success: true, remaining: kept.length };
  });
}
