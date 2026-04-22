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
import {
  DbStore,
  classifyFilter,
  type SizeWarnCallback,
} from '../db-store.js';
import { emit as busEmit } from '../broadcast-bus.js';

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
  ): Collection<T> {
    const store = new DbStore<T>(path, storage, getUserId, makeSizeWarn(name, scope));

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
      opts?: CollectionOpts,
    ): Promise<Collection<T>> {
      const scope: DbScope = opts?.scope ?? 'script';
      // `resolvePath` validates name + throws on missing context — do this
      // eagerly at creation time so errors surface at the call site, not
      // deep inside a later method.
      const path = resolvePath(scope, scopeContext(), name);

      busEmit('ls:collection:created', {
        name,
        scope,
        scriptId: script.id,
        path,
      });

      return makeCollection<T>(name, scope, path);
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
      });

      busEmit('ls:collection:dropped', {
        name,
        scope: actualScope,
        scriptId: script.id,
        path,
        deletedCount,
      });
    },
  };
}
