/**
 * Cache serialization fidelity — a WARM read must return the same record SHAPE
 * as a COLD re-read from disk.
 *
 * The cache stores what `persist()` hands it; if that were `structuredClone` of
 * the in-memory array, non-JSON values (Date, undefined props, NaN/Infinity)
 * would survive on a warm read but be JSON-coerced on a cold re-read — the same
 * find() returning different types depending on cache warmth. persist() instead
 * caches `JSON.parse(serialized)`, byte-identical to a fresh getJson.
 *
 * The repo's other db mocks (FakeStorage same-ref, CountingStorage
 * structuredClone) can't catch this — neither simulates real JSON-on-disk
 * normalization. This one stores JSON STRINGS like the real host does.
 */
import { describe, test, expect, beforeEach } from 'bun:test';
import { DbStore } from '../../src/engine/db-store.js';
import { _clearDbCache } from '../../src/engine/db-cache.js';
import type { UserStorageAdapter } from '../../src/storage/collection-store.js';
import type { DbRecord } from '../../src/types/script.js';

/** Stores JSON STRINGS keyed by userId::path — a faithful stand-in for the real
 *  host userStorage, which writes JSON files and JSON.parses them on read. */
class JsonDiskStorage implements UserStorageAdapter {
  disk = new Map<string, string>();
  private key(userId: string | undefined, path: string): string { return `${userId ?? ''}::${path}`; }
  async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
    const raw = this.disk.get(this.key(opts.userId, path));
    return raw === undefined ? opts.fallback : (JSON.parse(raw) as T);
  }
  async setJson(path: string, value: unknown, opts?: { userId?: string }): Promise<void> {
    this.disk.set(this.key(opts?.userId, path), JSON.stringify(value));
  }
}

const PATH = 'db/scripts/s/t.json';
let storage: JsonDiskStorage;
const makeStore = (): DbStore => new DbStore(PATH, storage, () => 'u1');

beforeEach(() => { storage = new JsonDiskStorage(); });

describe('cache serialization fidelity (warm == cold == JSON-on-disk)', () => {
  test('non-JSON values read back JSON-coerced on a WARM cache, not structured-clone-preserved', async () => {
    const store = makeStore();
    await store.insert({
      when: new Date('2020-01-01T00:00:00Z'),
      score: NaN,
      huge: Infinity,
      note: undefined,
    } as Partial<DbRecord>);

    // Served from the persist()-warmed cache.
    const warm = await store.find();
    expect(typeof warm[0]!.when).toBe('string');           // Date → ISO string, NOT a Date
    expect(warm[0]!.when).toBe('2020-01-01T00:00:00.000Z');
    expect(warm[0]!.score).toBeNull();                      // NaN → null
    expect(warm[0]!.huge).toBeNull();                       // Infinity → null
    expect('note' in warm[0]!).toBe(false);                 // undefined prop dropped

    // A cold re-read (cache dropped) must be byte-identical to the warm read.
    _clearDbCache();
    const cold = await store.find();
    expect(cold).toEqual(warm);
  });

  test('plain JSON records are identical warm vs cold (the common case)', async () => {
    const store = makeStore();
    await store.insert({ name: 'alice', hp: 10, tags: ['a', 'b'], nested: { x: 1, y: null } } as Partial<DbRecord>);
    const warm = await store.find();
    _clearDbCache();
    const cold = await store.find();
    expect(warm).toEqual(cold);
    expect(warm[0]!.name).toBe('alice');
  });
});
