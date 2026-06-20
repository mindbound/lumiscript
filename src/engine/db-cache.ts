/**
 * ============================================================================
 * DB CACHE — process-global in-memory cache of api.db collection arrays
 * ============================================================================
 * Every `DbStore` op used to `getJson` the WHOLE collection file (a worker→host
 * IPC round-trip + full JSON.parse) — the audit's biggest *measured* storage
 * cost. This caches the parsed array per collection so back-to-back ops skip the
 * round-trip.
 *
 * Keyed by `userId::path` — collections are per-user, and the same path stores
 * different data for different users. The cached array is the CANONICAL copy and
 * is never handed out: `DbStore.load()` returns a `structuredClone` of it, and
 * `persist()` caches a clone of the just-written array — so the cache can never
 * share an object reference with caller-visible data (a script mutating a record
 * it got from `find()` can't reach back into the cache).
 *
 * Invalidation surface — every BACKEND write to a collection path must keep the
 * cache honest (there are no other writers; `userStorage` is this-extension-only):
 *   - `DbStore.persist()`        → refreshes the cache with the new array.
 *   - `db-admin.updateRecord`    → invalidates (writes raw, bypassing DbStore).
 *   - `db-admin.deleteRecord`    → invalidates.
 *   - `api.db.collection().drop()` → invalidates.
 *
 * Memory bound — eviction is always safe (a miss just re-reads storage), so the
 * cache caps itself on THREE axes, whichever bites first:
 *   - entry COUNT  (`MAX_ENTRIES`)      — keeps the Map small.
 *   - per-entry BYTES (`MAX_ENTRY_BYTES`) — a single oversized collection is left
 *     UNCACHED rather than allowed to dominate the budget (its clone cost would
 *     be high anyway, and large collections are rare). The prior cached value for
 *     that key is still dropped, so the cache never goes stale.
 *   - total BYTES (`MAX_TOTAL_BYTES`)   — the real guard against retained-memory
 *     blowup. Without it, COUNT alone would permit 64 collections each near the
 *     50 MB write-cap = multiple GB resident. Evicts LRU until back under budget.
 */

import type { DbRecord } from '../types/script.js';

interface Entry {
  readonly records: DbRecord[];
  readonly bytes: number;
}

const cache = new Map<string, Entry>();
/** Running sum of every live entry's `bytes` — kept in lockstep with the Map. */
let totalBytes = 0;

/** Max distinct collections held at once. Eviction only forces a re-read. */
const MAX_ENTRIES = 64;
/** A single collection serializing larger than this is never cached. */
const MAX_ENTRY_BYTES = 4 * 1024 * 1024; // 4 MB
/** Global retained-memory budget across all cached collections. */
const MAX_TOTAL_BYTES = 32 * 1024 * 1024; // 32 MB

/** Cache key for a collection — `userId::path` (collections are per-user). */
export function dbCacheKey(userId: string | undefined, path: string): string {
  return `${userId ?? ''}::${path}`;
}

/**
 * Cheap byte estimate for an array of records. Records are JSON-serialisable by
 * contract; a non-serialisable one (a bug) is treated as "too big to cache" so
 * the per-entry cap leaves it uncached — failing safe rather than throwing.
 */
function byteSize(records: DbRecord[]): number {
  try {
    return JSON.stringify(records).length;
  } catch {
    return Number.MAX_SAFE_INTEGER;
  }
}

/** Remove an entry (if present) and decrement the running byte total. */
function evict(key: string): void {
  const prev = cache.get(key);
  if (prev !== undefined) {
    totalBytes -= prev.bytes;
    cache.delete(key);
  }
}

/** The cached (canonical) array for `key`, or undefined on a miss. LRU-touches. */
export function getDbCache(key: string): DbRecord[] | undefined {
  const hit = cache.get(key);
  if (hit !== undefined) {
    cache.delete(key);
    cache.set(key, hit); // move to the tail (most-recently-used)
  }
  return hit?.records;
}

/**
 * Store `records` as the canonical cached array for `key`.
 *
 * `approxBytes` lets a caller that already serialized (e.g. `persist()`'s
 * size-guard) skip a re-serialize; omit it and the cache measures the array
 * itself. Either way the prior entry for `key` is dropped first, so a write
 * that's too large to cache still leaves NO stale value behind.
 */
export function setDbCache(key: string, records: DbRecord[], approxBytes?: number): void {
  evict(key); // drop any prior entry for this key + its byte contribution
  const bytes = approxBytes ?? byteSize(records);
  // Per-entry cap: leave an oversized collection uncached (key now absent →
  // next read re-fetches; correct, just unmemoized).
  if (bytes > MAX_ENTRY_BYTES) return;
  cache.set(key, { records, bytes });
  totalBytes += bytes;
  // Evict LRU (Map head) until BOTH the count and total-byte budgets hold.
  while (cache.size > MAX_ENTRIES || totalBytes > MAX_TOTAL_BYTES) {
    const oldest = cache.keys().next().value;
    if (oldest === undefined) break;
    if (oldest === key) break; // never evict the entry we just inserted
    evict(oldest);
  }
}

/** Drop the cached entry for `key` — call on any out-of-band write to its path. */
export function invalidateDbCache(key: string): void {
  evict(key);
}

/** Test seam — drop the whole cache (the preload `beforeEach` calls this). */
export function _clearDbCache(): void {
  cache.clear();
  totalBytes = 0;
}

/** Test seam — current entry count. */
export function _dbCacheSize(): number {
  return cache.size;
}

/** Test seam — current total retained bytes across all entries. */
export function _dbCacheBytes(): number {
  return totalBytes;
}
