/**
 * ============================================================================
 * LUMISCRIPT — DB API
 * ============================================================================
 * Implements api.db — the script-facing JSON micro-DB namespace.
 *
 * No permission required — collections live under the user's `spindle.userStorage`
 * scope. Ownership is enforced by baking `scriptId` into every collection
 * path: script A literally cannot name a path that resolves to script B's
 * data (see `db-paths.ts`).
 *
 * Architecture:
 *   - `db-paths.ts`  — scope → path resolver + name validator (pure)
 *   - `db-queue.ts`  — per-path mutation serialization primitive
 *   - `db-store.ts`  — filter / CRUD / timestamps / size-guard (no broadcast)
 *   - this file      — composes the three into the public `api.db` surface,
 *                      emits `ls:collection:*` broadcast events, logs size
 *                      warnings to the server console.
 *
 * Lifecycle:
 *   Collections persist across script disable / delete. Explicit `drop()` is
 *   the only user-driven deletion path. A disabled-then-re-enabled script
 *   finds its data intact — the usual case for troubleshooting toggles.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  Collection,
  CollectionOpts,
  DbAPI,
  DbFilter,
  DbRecord,
  DbRetention,
  ZodLike,
  DbScope,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import type { UserStorageAdapter } from '../../storage/collection-store.js';
import {
  resolvePath,
  resolveListPrefix,
  extractCollectionNames,
  assertValidName,
} from '../db-paths.js';
import { runExclusive } from '../db-queue.js';
import { dbCacheKey, invalidateDbCache } from '../db-cache.js';
import {
  DbStore,
  classifyFilter,
  type SizeWarnCallback,
} from '../db-store.js';
import { emit as busEmit } from '../broadcast-bus.js';
import {
  getCachedCollection,
  setCachedCollection,
  evictCollection,
} from '../collection-handle-cache.js';

// ─── Storage adapter ─────────────────────────────────────────────────────────

/**
 * Thin wrapper around `spindle.userStorage.getJson/setJson` matching
 * the `UserStorageAdapter` interface consumed by `DbStore` and
 * `CollectionStore`. We instantiate one per-`api.db` build because
 * the adapter has no per-script state — it just forwards to spindle.
 */
function makeStorageAdapter(): UserStorageAdapter {
  return {
    async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
      return spindle.userStorage.getJson<T>(path, opts);
    },
    async setJson(path: string, value: unknown, opts?: { indent?: number; userId?: string }): Promise<void> {
      return spindle.userStorage.setJson(path, value, opts);
    },
  };
}

/**
 * Validate a retention policy at `collection()` creation — fail loud at the
 * call site rather than silently ignoring a malformed bound at prune time.
 */
function assertValidRetention(retention: DbRetention | undefined): void {
  if (retention === undefined) return;
  const { maxRecords, maxAgeMs } = retention;
  if (maxRecords !== undefined && (!Number.isInteger(maxRecords) || maxRecords < 1)) {
    throw new Error('api.db: retention.maxRecords must be a positive integer');
  }
  if (maxAgeMs !== undefined && (typeof maxAgeMs !== 'number' || !Number.isFinite(maxAgeMs) || maxAgeMs <= 0)) {
    throw new Error('api.db: retention.maxAgeMs must be a positive number');
  }
}

// ─── buildDbAPI ──────────────────────────────────────────────────────────────

export function buildDbAPI(deps: APIBuildDeps): DbAPI {
  const { script, userId, activeContext } = deps;
  const storage = makeStorageAdapter();
  const getUserId = () => userId ?? undefined;

  const scopeContext = () => ({
    scriptId: script.id,
    chatId: activeContext.chatId,
    characterId: activeContext.characterId,
  });

  /**
   * Build the size-warn hook for a collection. Emits a broadcast event
   * AND logs to the server console — users can observe via either.
   */
  function makeSizeWarn(name: string, scope: DbScope): SizeWarnCallback {
    return (bytes: number) => {
      spindle.log.warn(
        `[LumiScript] api.db: collection "${name}" (scope="${scope}", ` +
        `script="${script.name}") is ${bytes} bytes — approaching 10 MB soft limit`,
      );
      busEmit('ls:collection:size-warning', {
        name,
        scope,
        scriptId: script.id,
        bytes,
      });
    };
  }

  function makeCollection<T extends DbRecord = DbRecord>(
    name: string,
    scope: DbScope,
    path: string,
    schema?: ZodLike<T>,
    retention?: DbRetention,
  ): Collection<T> {
    const store = new DbStore<T>(
      path,
      storage,
      getUserId,
      makeSizeWarn(name, scope),
      schema,
      retention,
    );

    return {
      async insert(record) {
        const result = await runExclusive(path, () => store.insert(record));
        busEmit('ls:collection:inserted', {
          name,
          scope,
          scriptId: script.id,
          id: result.id,
          record: result,
        });
        return result;
      },

      async insertMany(records) {
        if (!Array.isArray(records)) {
          throw new Error('api.db: insertMany requires an array of records');
        }
        const inserted = await runExclusive(path, () => store.insertMany(records));
        // Fire one ls:collection:inserted per record in insertion order,
        // AFTER the single persist has resolved. Keeps subscriber logic
        // uniform across insert() and insertMany() — no batch event.
        for (const record of inserted) {
          busEmit('ls:collection:inserted', {
            name,
            scope,
            scriptId: script.id,
            id: record.id,
            record,
          });
        }
        return inserted;
      },

      async find(filter) {
        return store.find(filter as DbFilter<T>);
      },

      async findOne(filter) {
        return store.findOne(filter as DbFilter<T>);
      },

      async update(filter, patch) {
        const count = await runExclusive(path, () => store.update(filter as DbFilter<T>, patch));
        if (count > 0) {
          busEmit('ls:collection:updated', {
            name,
            scope,
            scriptId: script.id,
            count,
            filterKind: classifyFilter(filter as DbFilter<DbRecord>),
          });
        }
        return count;
      },

      async delete(filter) {
        const count = await runExclusive(path, () => store.delete(filter as DbFilter<T>));
        if (count > 0) {
          busEmit('ls:collection:deleted', {
            name,
            scope,
            scriptId: script.id,
            count,
            filterKind: classifyFilter(filter as DbFilter<DbRecord>),
          });
        }
        return count;
      },

      async count(filter) {
        return store.count(filter as DbFilter<T>);
      },

      async clear() {
        // `clear()` is a mutation — serialize through the queue. Implemented
        // as "delete everything, then persist empty". We use `delete(undefined)`
        // semantics by calling store.clear() directly.
        await runExclusive(path, () => store.clear());
        busEmit('ls:collection:deleted', {
          name,
          scope,
          scriptId: script.id,
          count: -1,  // -1 sentinel — "cleared, count not tracked"
          filterKind: 'all',
        });
      },

      async query<R = unknown>(jsonQuery: string): Promise<R> {
        return store.query<R>(jsonQuery);
      },
    };
  }

  return {
    async collection<T extends DbRecord = DbRecord>(
      name: string,
      opts?: CollectionOpts<T>,
    ): Promise<Collection<T>> {
      const scope: DbScope = opts?.scope ?? 'script';
      // `resolvePath` validates name + throws on missing context — do this
      // eagerly at creation time so errors surface at the call site, not
      // deep inside a later method. Validate the retention policy here too
      // (before the handle cache) so a bad policy always throws, cached or not.
      assertValidRetention(opts?.retention);
      const path = resolvePath(scope, scopeContext(), name);

      // v0.26.1 — dedup by (scope, path) per-script. Pre-fix, every call
      // returned a fresh Collection wrapper, the dispatcher registered it
      // as a fresh persistent handle, and the per-script `persistentHandles`
      // table grew unbounded across long sessions. Now: same scope + path
      // → same wrapper → same handle id (via `registerHandle`'s obj-reuse
      // dedup). The schema from the FIRST call wins; subsequent calls with
      // a different `opts.schema` ignore the new schema (documented as a
      // user-side concern: inconsistent schemas across calls is a script
      // bug, surfacing via "first wins" is more useful than silently
      // diverging wrappers).
      const cached = getCachedCollection(script.id, scope, path);
      if (cached) {
        return cached as Collection<T>;
      }

      busEmit('ls:collection:created', {
        name,
        scope,
        scriptId: script.id,
        path,
      });

      const col = makeCollection<T>(name, scope, path, opts?.schema, opts?.retention);
      setCachedCollection(script.id, scope, path, col);
      return col;
    },

    async list(scope?: DbScope): Promise<string[]> {
      const actualScope: DbScope = scope ?? 'script';
      const prefix = resolveListPrefix(actualScope, scopeContext());
      const paths = await spindle.userStorage.list(prefix, userId ?? undefined);
      return extractCollectionNames(prefix, paths);
    },

    async drop(name: string, scope?: DbScope): Promise<void> {
      const actualScope: DbScope = scope ?? 'script';
      assertValidName(name);
      const path = resolvePath(actualScope, scopeContext(), name);
      // Snapshot the count before deletion for the broadcast payload.
      let deletedCount = 0;
      try {
        const existing = await spindle.userStorage.getJson<DbRecord[]>(path, {
          fallback: [],
          userId: userId ?? undefined,
        });
        deletedCount = Array.isArray(existing) ? existing.length : 0;
      } catch {
        // Snapshot-read failures are non-fatal — the drop still proceeds.
        deletedCount = 0;
      }

      await runExclusive(path, async () => {
        await spindle.userStorage.delete(path, userId ?? undefined);
        invalidateDbCache(dbCacheKey(userId ?? undefined, path));
      });

      // Drop the cached Collection wrapper for this (scope, path) too, releasing
      // its dispatcher persistent handle — otherwise a dropped collection leaves
      // a stale wrapper (and a leaked handle) that a later `collection()` call
      // would reuse, ignoring any new schema. (audit tail: drop()-evict)
      evictCollection(script.id, actualScope, path);

      busEmit('ls:collection:dropped', {
        name,
        scope: actualScope,
        scriptId: script.id,
        path,
        deletedCount,
      });
    },

    async exists(name: string, scope?: DbScope): Promise<boolean> {
      const actualScope: DbScope = scope ?? 'script';
      assertValidName(name);
      const path = resolvePath(actualScope, scopeContext(), name);
      // `spindle.userStorage.exists` is available from types 0.4.34+.
      // Defensive try/catch in case the upstream surface changes or the
      // underlying stat fails for reasons other than absence (permission
      // error on a malformed path, etc.) — return false on any failure.
      try {
        return await spindle.userStorage.exists(path, userId ?? undefined);
      } catch {
        return false;
      }
    },
  };
}
