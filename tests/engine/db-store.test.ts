import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  DbStore,
  DbSizeExceededError,
  DB_SIZE_WARN_BYTES,
  classifyFilter,
  matchesFilter,
  type SizeWarnCallback,
} from '../../src/engine/db-store.js';
import type { UserStorageAdapter } from '../../src/storage/collection-store.js';
import type { DbRecord } from '../../src/types/script.js';

// ─── In-memory UserStorageAdapter ────────────────────────────────────────────

/**
 * Fake adapter backed by a Map<path, unknown>. Captures setJson calls for
 * assertions (e.g. "persist was not called when size exceeded").
 */
class FakeStorage implements UserStorageAdapter {
  public data = new Map<string, unknown>();
  public setJsonCalls: Array<{ path: string; value: unknown }> = [];

  async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
    if (this.data.has(path)) return this.data.get(path) as T;
    return opts.fallback;
  }

  async setJson(path: string, value: unknown): Promise<void> {
    this.setJsonCalls.push({ path, value });
    this.data.set(path, value);
  }
}

let storage: FakeStorage;

function makeStore(
  path = 'db/scripts/script-1/rolls.json',
  onSizeWarn?: SizeWarnCallback,
): DbStore {
  return new DbStore(path, storage, () => 'user-1', onSizeWarn);
}

beforeEach(() => {
  storage = new FakeStorage();
});

// ─── classifyFilter ──────────────────────────────────────────────────────────

describe('classifyFilter', () => {
  test('undefined → "all"', () => {
    expect(classifyFilter(undefined)).toBe('all');
  });

  test('function → "fn"', () => {
    expect(classifyFilter((r: DbRecord) => r.id === 'x')).toBe('fn');
  });

  test('object → "object"', () => {
    expect(classifyFilter({ foo: 'bar' })).toBe('object');
  });
});

// ─── matchesFilter ───────────────────────────────────────────────────────────

describe('matchesFilter', () => {
  const record: DbRecord = {
    id: 'r1',
    createdAt: 1,
    updatedAt: 2,
    foo: 'bar',
    nested: { a: { b: 42 } },
    arr: [1, 2, 3],
  };

  test('undefined filter matches all', () => {
    expect(matchesFilter(record, undefined)).toBe(true);
  });

  test('function filter delegates to the predicate', () => {
    expect(matchesFilter(record, r => r.foo === 'bar')).toBe(true);
    expect(matchesFilter(record, r => r.foo === 'nope')).toBe(false);
  });

  test('object filter exact-matches top-level fields', () => {
    expect(matchesFilter(record, { foo: 'bar' })).toBe(true);
    expect(matchesFilter(record, { foo: 'nope' })).toBe(false);
  });

  test('object filter uses dot-notation for nested paths', () => {
    expect(matchesFilter(record, { 'nested.a.b': 42 })).toBe(true);
    expect(matchesFilter(record, { 'nested.a.b': 99 })).toBe(false);
    expect(matchesFilter(record, { 'nested.a.missing': undefined })).toBe(true);
  });

  test('object filter compares arrays structurally', () => {
    expect(matchesFilter(record, { arr: [1, 2, 3] })).toBe(true);
    expect(matchesFilter(record, { arr: [1, 2, 4] })).toBe(false);
  });

  test('object filter requires ALL keys to match', () => {
    expect(matchesFilter(record, { foo: 'bar', 'nested.a.b': 42 })).toBe(true);
    expect(matchesFilter(record, { foo: 'bar', 'nested.a.b': 0 })).toBe(false);
  });

  test('throwing predicate is treated as no-match (does not propagate)', () => {
    expect(matchesFilter(record, () => {
      throw new Error('predicate blew up');
    })).toBe(false);
  });
});

// ─── insert ──────────────────────────────────────────────────────────────────

describe('DbStore.insert', () => {
  test('auto-generates id, createdAt, updatedAt', async () => {
    const store = makeStore();
    const record = await store.insert({ x: 1 } as DbRecord);

    expect(typeof record.id).toBe('string');
    expect(record.id.length).toBeGreaterThan(0);
    expect(typeof record.createdAt).toBe('number');
    expect(typeof record.updatedAt).toBe('number');
    expect(record.createdAt).toBe(record.updatedAt); // first insert
    expect(record.x).toBe(1);
  });

  test('preserves caller fields alongside injected ones', async () => {
    const store = makeStore();
    const record = await store.insert({ total: 18, notation: '1d20+3' } as DbRecord);

    expect(record.total).toBe(18);
    expect(record.notation).toBe('1d20+3');
  });

  test('honors caller-supplied id when present', async () => {
    const store = makeStore();
    const record = await store.insert({ id: 'custom-id', x: 1 } as DbRecord);

    expect(record.id).toBe('custom-id');
  });

  test('persists to the configured path', async () => {
    const store = makeStore('db/scripts/s-X/foo.json');
    await store.insert({ x: 1 } as DbRecord);

    expect(storage.setJsonCalls).toHaveLength(1);
    expect(storage.setJsonCalls[0]!.path).toBe('db/scripts/s-X/foo.json');
  });

  test('returns the full record including injected fields', async () => {
    const store = makeStore();
    const record = await store.insert({ x: 1 } as DbRecord);

    const found = await store.find();
    expect(found).toHaveLength(1);
    expect(found[0]!.id).toBe(record.id);
  });
});

// ─── find / findOne / count ──────────────────────────────────────────────────

describe('DbStore.find', () => {
  test('returns empty array when the collection is missing', async () => {
    const store = makeStore();
    expect(await store.find()).toEqual([]);
  });

  test('returns all records when filter is undefined', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);
    await store.insert({ x: 2 } as DbRecord);

    expect(await store.find()).toHaveLength(2);
  });

  test('filters by object predicate', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', margin: 3 } as DbRecord);
    await store.insert({ tier: 'easy', margin: 12 } as DbRecord);

    const hard = await store.find({ tier: 'hard' });
    expect(hard).toHaveLength(1);
    expect(hard[0]!.margin).toBe(3);
  });

  test('filters by function predicate', async () => {
    const store = makeStore();
    await store.insert({ margin: 3 } as DbRecord);
    await store.insert({ margin: -5 } as DbRecord);

    const positives = await store.find((r: DbRecord) => (r.margin as number) > 0);
    expect(positives).toHaveLength(1);
  });
});

describe('DbStore.findOne', () => {
  test('returns first match', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', n: 1 } as DbRecord);
    await store.insert({ tier: 'hard', n: 2 } as DbRecord);

    const result = await store.findOne({ tier: 'hard' });
    expect(result).not.toBeNull();
    expect(result!.n).toBe(1);
  });

  test('returns null when no match', async () => {
    const store = makeStore();
    await store.insert({ tier: 'easy' } as DbRecord);

    expect(await store.findOne({ tier: 'hard' })).toBeNull();
  });
});

describe('DbStore.count', () => {
  test('counts all records when filter undefined', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);
    await store.insert({ x: 2 } as DbRecord);

    expect(await store.count()).toBe(2);
  });

  test('counts filtered records', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard' } as DbRecord);
    await store.insert({ tier: 'easy' } as DbRecord);
    await store.insert({ tier: 'easy' } as DbRecord);

    expect(await store.count({ tier: 'easy' })).toBe(2);
  });
});

// ─── update ──────────────────────────────────────────────────────────────────

describe('DbStore.update', () => {
  test('updates matching records and returns count', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', note: 'a' } as DbRecord);
    await store.insert({ tier: 'hard', note: 'b' } as DbRecord);
    await store.insert({ tier: 'easy', note: 'c' } as DbRecord);

    const count = await store.update({ tier: 'hard' }, { note: 'updated' });
    expect(count).toBe(2);

    const hard = await store.find({ tier: 'hard' });
    expect(hard.every(r => r.note === 'updated')).toBe(true);
  });

  test('bumps updatedAt on match, preserves createdAt', async () => {
    const store = makeStore();
    const inserted = await store.insert({ x: 1 } as DbRecord);
    // Force time to advance so we can detect the bump.
    await new Promise<void>(r => setTimeout(r, 2));

    await store.update({ x: 1 }, { x: 2 } as DbRecord);

    const [record] = await store.find();
    expect(record!.createdAt).toBe(inserted.createdAt);
    expect(record!.updatedAt).toBeGreaterThan(inserted.updatedAt);
    expect(record!.x).toBe(2);
  });

  test('silently strips id / createdAt / updatedAt from the patch', async () => {
    const store = makeStore();
    const inserted = await store.insert({ x: 1 } as DbRecord);

    await store.update({ x: 1 }, {
      id: 'attacker-owned',
      createdAt: 0,
      updatedAt: 0,
      x: 99,
    } as Partial<DbRecord>);

    const [record] = await store.find();
    expect(record!.id).toBe(inserted.id);        // unchanged
    expect(record!.createdAt).toBe(inserted.createdAt); // unchanged
    expect(record!.updatedAt).toBeGreaterThanOrEqual(inserted.updatedAt); // bumped, not zeroed
    expect(record!.x).toBe(99);
  });

  test('returns 0 and does not persist when no match', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);
    storage.setJsonCalls = [];

    const count = await store.update({ x: 999 }, { x: 2 } as DbRecord);
    expect(count).toBe(0);
    expect(storage.setJsonCalls).toHaveLength(0);
  });
});

// ─── delete ──────────────────────────────────────────────────────────────────

describe('DbStore.delete', () => {
  test('deletes matching records and returns count', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard' } as DbRecord);
    await store.insert({ tier: 'hard' } as DbRecord);
    await store.insert({ tier: 'easy' } as DbRecord);

    const count = await store.delete({ tier: 'hard' });
    expect(count).toBe(2);

    const remaining = await store.find();
    expect(remaining).toHaveLength(1);
    expect(remaining[0]!.tier).toBe('easy');
  });

  test('returns 0 and does not persist when no match', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);
    storage.setJsonCalls = [];

    const count = await store.delete({ x: 999 });
    expect(count).toBe(0);
    expect(storage.setJsonCalls).toHaveLength(0);
  });
});

// ─── clear ───────────────────────────────────────────────────────────────────

describe('DbStore.clear', () => {
  test('empties the collection and persists an empty array', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);
    await store.insert({ x: 2 } as DbRecord);

    await store.clear();

    expect(await store.find()).toEqual([]);
    // The last setJson call should have persisted an empty array.
    const last = storage.setJsonCalls[storage.setJsonCalls.length - 1];
    expect(last!.value).toEqual([]);
  });
});

// ─── query (jsonquery pass-through) ──────────────────────────────────────────

describe('DbStore.query', () => {
  test('propagates jsonquery results', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', margin: 3 } as DbRecord);
    await store.insert({ tier: 'easy', margin: 10 } as DbRecord);
    await store.insert({ tier: 'easy', margin: -2 } as DbRecord);

    const count = await store.query<number>('filter(.margin > 0) | size()');
    expect(count).toBe(2);
  });

  test('propagates SyntaxError on malformed queries', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);

    await expect(store.query('|||invalid|||')).rejects.toThrow();
  });
});

// ─── Size governance ─────────────────────────────────────────────────────────

describe('DbStore size governance', () => {
  test('fires size-warn callback above 10 MB threshold', async () => {
    const onSizeWarn = mock<SizeWarnCallback>(() => {});
    const store = makeStore(undefined, onSizeWarn);

    // Craft a record whose stringified form will push the collection over 10 MB.
    const big = 'x'.repeat(DB_SIZE_WARN_BYTES + 1000);
    await store.insert({ blob: big } as DbRecord);

    expect(onSizeWarn).toHaveBeenCalledTimes(1);
    const call = onSizeWarn.mock.calls[0]!;
    expect(call[0]).toBeGreaterThan(DB_SIZE_WARN_BYTES);
  });

  test('does NOT fire size-warn below the threshold', async () => {
    const onSizeWarn = mock<SizeWarnCallback>(() => {});
    const store = makeStore(undefined, onSizeWarn);
    await store.insert({ x: 1 } as DbRecord);

    expect(onSizeWarn).toHaveBeenCalledTimes(0);
  });

  test('throws DbSizeExceededError above 50 MB and does not persist', async () => {
    const store = makeStore();
    await store.insert({ x: 1 } as DbRecord);
    storage.setJsonCalls = [];

    // One record just over the 50 MB hard limit.
    const huge = 'x'.repeat(60 * 1024 * 1024);

    await expect(store.insert({ blob: huge } as DbRecord))
      .rejects.toThrow(DbSizeExceededError);

    // Crucially, setJson was NOT called — the mutation was rolled back.
    expect(storage.setJsonCalls).toHaveLength(0);
  });

  test('a throwing size-warn listener does not abort the persist', async () => {
    const onSizeWarn = mock<SizeWarnCallback>(() => {
      throw new Error('listener blew up');
    });
    const store = makeStore(undefined, onSizeWarn);
    const big = 'x'.repeat(DB_SIZE_WARN_BYTES + 1000);

    // Should not throw — the listener's error is swallowed.
    const record = await store.insert({ blob: big } as DbRecord);
    expect(record.id).toBeDefined();

    const found = await store.find();
    expect(found).toHaveLength(1);
  });
});
