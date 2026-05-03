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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyCollection = unknown;

// scriptId → ((scope::path) → Collection wrapper)
const cache = new Map<string, Map<string, AnyCollection>>();

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
  return cache.get(scriptId)?.get(makeKey(scope, path));
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
  scriptCache.set(makeKey(scope, path), col);
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
