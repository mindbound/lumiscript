/**
 * ============================================================================
 * LUMISCRIPT — COLLECTION HANDLE CACHE (v0.26.1)
 * ============================================================================
 * Per-script (scope, path) → Collection wrapper cache. Backs the canonical
 * `api.db.collection(name, opts)` dedup so that repeated calls with the
 * same scope + name (resolving to the same path) return the SAME wrapper
 * object. Without this, every call creates a fresh wrapper, every wrapper
 * gets registered as a fresh persistent handle by the dispatcher, and the
 * per-script `persistentHandles` table grows unbounded across long sessions
 * where the script calls `api.db.collection` once per chat event.
 *
 * Lifecycle:
 *   - Lookup / write: per `api.db.collection` call inside `buildDbAPI`'s
 *     `collection()` method (`engine/api/db.ts`).
 *   - Cleanup: `clearByScriptId(scriptId)` is called from `backend.ts`'s
 *     `update_script` (disable) and `delete_script` paths AS PART OF the
 *     same teardown sweep that clears tools / macros / interceptors / rpc
 *     endpoints / etc. Mirrors `macro-store` / `tool-store` / `rpc-store`
 *     in shape and lifecycle.
 *
 * Schema-collision policy (intentional):
 *   The cache key is `(scope, path)` ONLY. If the user calls
 *   `api.db.collection('foo')` once without a schema and again with a
 *   schema (or vice versa), the FIRST call's wrapper wins — subsequent
 *   calls return the same wrapper, ignoring the new `opts.schema`.
 *   Documented in `api.db.collection`'s JSDoc.
 *
 *   Dedup-by-(scope, path, schema) was considered but rejected: schemas
 *   are class instances (Zod) without a stable hash, and inconsistent
 *   schemas across calls is a user-script bug; surfacing it via "first
 *   wins" is more useful than silently creating divergent wrappers.
 *
 * Test-only API (`__resetForTests`) clears the entire cache regardless
 * of script — mirrors the rpc-store / tool-store pattern.
 */

type AnyCollection = unknown;

// scriptId → ((scope::path) → Collection wrapper)
const cache = new Map<string, Map<string, AnyCollection>>();

// Per-script LRU cap (audit C13-01). A script that mints many DISTINCT
// collection names in one long run (e.g. `api.db.collection('chat_' + chatId)`
// per event) accumulates one cache entry + one dispatcher persistent handle per
// name, unbounded. Cap the per-script cache and, on eviction, release the
// evicted wrapper's persistent handle so the two tables stay in lockstep.
// Generous: normal scripts use a handful of collections and never evict.
const MAX_COLLECTIONS_PER_SCRIPT = 256;

// Set by backend.ts to `host-dispatcher.releasePersistentHandleByObj` so the
// engine layer doesn't import the script-runner directly (mirrors the pinning
// hooks). Invoked with the evicted Collection wrapper on LRU eviction.
let onEvictCollection: ((scriptId: string, col: AnyCollection) => void) | null = null;
export function setCollectionEvictHook(
  fn: ((scriptId: string, col: AnyCollection) => void) | null,
): void {
  onEvictCollection = fn;
}

function makeKey(scope: string, path: string): string {
  return `${scope}::${path}`;
}

/**
 * Look up a previously-registered Collection wrapper for the given
 * `(scriptId, scope, path)`. Returns `undefined` on miss.
 */
export function getCachedCollection(
  scriptId: string,
  scope:    string,
  path:     string,
): AnyCollection | undefined {
  const scriptCache = cache.get(scriptId);
  if (scriptCache === undefined) return undefined;
  const key = makeKey(scope, path);
  const col = scriptCache.get(key);
  // LRU touch: re-insert so this key moves to the most-recently-used (end)
  // position, so eviction targets genuinely cold entries first.
  if (col !== undefined) {
    scriptCache.delete(key);
    scriptCache.set(key, col);
  }
  return col;
}

/**
 * Store a Collection wrapper for `(scriptId, scope, path)`. Replaces any
 * prior entry for the same key (rare — would only happen if the canonical
 * builder's inner state was rebuilt for the same script + path, e.g. test
 * harness lifecycle).
 */
export function setCachedCollection(
  scriptId: string,
  scope:    string,
  path:     string,
  col:      AnyCollection,
): void {
  let scriptCache = cache.get(scriptId);
  if (!scriptCache) {
    scriptCache = new Map();
    cache.set(scriptId, scriptCache);
  }
  const key = makeKey(scope, path);
  // Re-insert so a replace also moves the key to the most-recently-used end.
  scriptCache.delete(key);
  scriptCache.set(key, col);
  // Evict the oldest (least-recently-used) entries past the cap, releasing each
  // evicted wrapper's persistent handle so `persistentHandles` doesn't keep
  // growing after the cache is bounded (audit C13-01).
  while (scriptCache.size > MAX_COLLECTIONS_PER_SCRIPT) {
    const oldestKey: string | undefined = scriptCache.keys().next().value;
    if (oldestKey === undefined) break;
    const evicted = scriptCache.get(oldestKey);
    scriptCache.delete(oldestKey);
    if (evicted !== undefined) onEvictCollection?.(scriptId, evicted);
  }
}

/**
 * Evict a SINGLE cached Collection wrapper for `(scriptId, scope, path)` and
 * release its persistent handle (same handle-release as LRU eviction). Called
 * from `api.db.collection().drop()` so a dropped collection doesn't strand its
 * wrapper + a leaked dispatcher persistent handle: the NEXT `collection()` call
 * for that name then rebuilds a fresh wrapper (picking up any new `opts.schema`
 * instead of the pre-drop "first wins" one). No-op on miss.
 */
export function evictCollection(scriptId: string, scope: string, path: string): void {
  const scriptCache = cache.get(scriptId);
  if (scriptCache === undefined) return;
  const key = makeKey(scope, path);
  const evicted = scriptCache.get(key);
  if (evicted === undefined) return;
  scriptCache.delete(key);
  if (scriptCache.size === 0) cache.delete(scriptId);
  onEvictCollection?.(scriptId, evicted);
}

/**
 * Drop every cached Collection wrapper for the given script. Called from
 * the canonical script-unregister teardown sweep.
 */
export function clearByScriptId(scriptId: string): void {
  cache.delete(scriptId);
}

/** @internal Test-only — clear the entire cache. */
export function __resetForTests(): void {
  cache.clear();
}

/** @internal Test-only — count cached entries for a script. */
export function __countForTests(scriptId: string): number {
  return cache.get(scriptId)?.size ?? 0;
}
