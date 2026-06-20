/**
 * Tests for the api.db collection cache (`src/engine/db-cache.ts`) + its DbStore
 * integration. The cache must be BEHAVIOUR-INVISIBLE (the rest of the db suite
 * proves that by passing unchanged); these pin the cache-specific guarantees the
 * existing suite can't see: hit-avoids-getJson, write-refreshes, mutation-safety,
 * invalidation-forces-reread, and per-user isolation.
 *
 * The module-global cache is cleared between tests by the preload setup.ts.
 */
import { describe, test, expect, beforeEach } from 'bun:test';
import { DbStore } from '../../src/engine/db-store.js';
import {
  dbCacheKey, getDbCache, setDbCache, invalidateDbCache,
  _clearDbCache, _dbCacheSize, _dbCacheBytes,
} from '../../src/engine/db-cache.js';
import type { UserStorageAdapter } from '../../src/storage/collection-store.js';
import type { DbRecord } from '../../src/types/script.js';

interface Named { id?: string; createdAt?: number; updatedAt?: number; name?: string }

/** In-memory adapter that SCOPES by userId (like the real userStorage) and
 *  counts getJson / setJson so cache hits/misses are observable. Reads + writes
 *  deep-copy, mirroring a real parse/serialize round-trip (no shared refs). */
class CountingStorage implements UserStorageAdapter {
  data = new Map<string, unknown>();
  getJsonCalls = 0;
  setJsonCalls = 0;
  private key(userId: string | undefined, path: string): string { return `${userId ?? ''}::${path}`; }
  seed(userId: string | undefined, path: string, value: unknown): void {
    this.data.set(this.key(userId, path), structuredClone(value));
  }
  async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
    this.getJsonCalls++;
    const k = this.key(opts.userId, path);
    return this.data.has(k) ? (structuredClone(this.data.get(k)) as T) : opts.fallback;
  }
  async setJson(path: string, value: unknown, opts?: { userId?: string }): Promise<void> {
    this.setJsonCalls++;
    this.data.set(this.key(opts?.userId, path), structuredClone(value));
  }
}

const PATH = 'db/scripts/s-1/things.json';
let storage: CountingStorage;
const makeStore = (uid: string | undefined = 'u1'): DbStore => new DbStore(PATH, storage, () => uid);

beforeEach(() => { storage = new CountingStorage(); });

describe('db-cache module', () => {
  test('dbCacheKey namespaces by user', () => {
    expect(dbCacheKey('u1', 'p')).toBe('u1::p');
    expect(dbCacheKey(undefined, 'p')).toBe('::p');
    expect(dbCacheKey('u1', 'p')).not.toBe(dbCacheKey('u2', 'p'));
  });

  test('set / get / invalidate', () => {
    const recs = [{ id: 'a', createdAt: 1, updatedAt: 1 }] as DbRecord[];
    setDbCache('k', recs);
    expect(getDbCache('k')).toBe(recs);
    invalidateDbCache('k');
    expect(getDbCache('k')).toBeUndefined();
  });

  test('LRU stays bounded and evicts the oldest past the cap', () => {
    _clearDbCache();
    for (let i = 0; i < 100; i++) setDbCache(`k${i}`, []);
    expect(_dbCacheSize()).toBeLessThanOrEqual(64);
    expect(getDbCache('k0')).toBeUndefined();   // oldest evicted
    expect(getDbCache('k99')).toBeDefined();     // most-recent survives
  });
});

describe('db-cache memory budget', () => {
  beforeEach(() => { _clearDbCache(); });

  test('totalBytes tracks set / overwrite / invalidate', () => {
    expect(_dbCacheBytes()).toBe(0);
    setDbCache('k', [], 1000);
    expect(_dbCacheBytes()).toBe(1000);
    // Overwrite the SAME key — the prior 1000 must be replaced, not added.
    setDbCache('k', [], 250);
    expect(_dbCacheBytes()).toBe(250);
    invalidateDbCache('k');
    expect(_dbCacheBytes()).toBe(0);
  });

  test('a single oversized collection is left uncached (per-entry cap)', () => {
    setDbCache('huge', [], 5 * 1024 * 1024); // > 4 MB MAX_ENTRY_BYTES
    expect(getDbCache('huge')).toBeUndefined();
    expect(_dbCacheBytes()).toBe(0);
  });

  test('an oversized overwrite still drops the prior cached value (no stale read)', () => {
    setDbCache('k', [{ id: 'a', createdAt: 1, updatedAt: 1 }] as DbRecord[], 500);
    expect(getDbCache('k')).toBeDefined();
    // The collection grew past the per-entry cap — it must become UNCACHED,
    // not keep serving the stale small value.
    setDbCache('k', [], 5 * 1024 * 1024);
    expect(getDbCache('k')).toBeUndefined();
    expect(_dbCacheBytes()).toBe(0);
  });

  test('total-byte budget evicts LRU even while under the entry-count cap', () => {
    // 20 entries × 2 MB = 40 MB > 32 MB MAX_TOTAL_BYTES, but only 20 entries
    // (well under the 64 count cap) — so the BYTE budget is what forces eviction.
    for (let i = 0; i < 20; i++) setDbCache(`b${i}`, [], 2 * 1024 * 1024);
    expect(_dbCacheBytes()).toBeLessThanOrEqual(32 * 1024 * 1024);
    expect(_dbCacheSize()).toBeLessThan(20);     // some were evicted by bytes
    expect(getDbCache('b0')).toBeUndefined();    // oldest gone
    expect(getDbCache('b19')).toBeDefined();      // newest survives
  });

  test('byteSize is measured when approxBytes is omitted', () => {
    const recs = [{ id: 'x', createdAt: 1, updatedAt: 1, blob: 'y'.repeat(100) }] as DbRecord[];
    setDbCache('measured', recs);
    expect(_dbCacheBytes()).toBeGreaterThan(100);   // measured the actual payload
    expect(getDbCache('measured')).toBeDefined();
  });
});

describe('DbStore + cache integration', () => {
  test('a second read hits the cache — one getJson for two finds', async () => {
    const store = makeStore();
    await store.find();
    await store.find();
    expect(storage.getJsonCalls).toBe(1);
  });

  test('insert refreshes the cache — later reads see it without re-reading storage', async () => {
    const store = makeStore();
    await store.find();                                 // getJson #1 (miss → cache)
    await store.insert({ name: 'x' } as Partial<DbRecord>); // load=hit + persist=refresh
    const all = await store.find();                     // cache hit
    expect(all).toHaveLength(1);
    expect((all[0] as Named).name).toBe('x');
    expect(storage.getJsonCalls).toBe(1);               // never re-read after the first
  });

  test('returned records are private — mutating one cannot corrupt the cache', async () => {
    const store = makeStore();
    await store.insert({ name: 'orig' } as Partial<DbRecord>);
    const a = await store.find();
    (a[0] as Named).name = 'HACKED';
    const b = await store.find();
    expect((b[0] as Named).name).toBe('orig'); // unaffected by the caller's mutation
  });

  test('invalidateDbCache forces a re-read (simulates an out-of-band db-admin write)', async () => {
    const store = makeStore();
    await store.find();                                  // getJson #1 → cache
    // db-admin writes the file directly, then invalidates the cache.
    storage.seed('u1', PATH, [{ id: 'z', createdAt: 1, updatedAt: 1, name: 'admin' }]);
    invalidateDbCache(dbCacheKey('u1', PATH));
    const all = await store.find();                      // getJson #2 (re-read)
    expect(storage.getJsonCalls).toBe(2);
    expect(all).toHaveLength(1);
    expect((all[0] as Named).name).toBe('admin');
  });

  test('different users do not share a cached collection', async () => {
    await makeStore('u1').insert({ name: 'forU1' } as Partial<DbRecord>);
    const u2recs = await makeStore('u2').find();
    expect(u2recs).toHaveLength(0); // u2's (userId, path) key is separate → empty
  });

  test('delete persists + refreshes the cache (no stale read of the removed record)', async () => {
    const store = makeStore();
    const r = await store.insert({ name: 'gone' } as Partial<DbRecord>);
    await store.delete({ id: (r as Named).id });
    const all = await store.find();
    expect(all).toHaveLength(0);
  });
});
