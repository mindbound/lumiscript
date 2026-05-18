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
import type { DbRecord, DbFilter } from '../../src/types/script.js';

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

// ─── matchesFilter: deep-equality semantics (audit F-H3, v1.0.0-rc.7) ───────
//
// `deepEqual` (private to db-store) used to compare nested objects via
// `JSON.stringify(a) === JSON.stringify(b)`, which made comparisons
// key-order-sensitive (`{a:1,b:2}` vs `{b:2,a:1}` came back unequal),
// silently coerced `NaN`/`Infinity` to `null`, and dropped `undefined`
// properties. These tests pin the v1.0.0-rc.7 structural deep-equal —
// the public surface is matchesFilter on a nested-object filter value.

describe('matchesFilter — structural deep-equality (F-H3)', () => {
  test('nested object filter is key-order independent', () => {
    // Pre-rc.7: this came back as no-match because `JSON.stringify`
    // serialises in insertion order.
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      nested: { a: 1, b: 2 },
    };
    expect(matchesFilter(record, { nested: { a: 1, b: 2 } })).toBe(true);
    expect(matchesFilter(record, { nested: { b: 2, a: 1 } })).toBe(true);
  });

  test('nested arrays still compare position-by-position', () => {
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      arr: [1, 2, 3],
    };
    expect(matchesFilter(record, { arr: [1, 2, 3] })).toBe(true);
    expect(matchesFilter(record, { arr: [3, 2, 1] })).toBe(false);  // order matters in arrays
    expect(matchesFilter(record, { arr: [1, 2] })).toBe(false);     // length matters
  });

  test('deep nested objects compare recursively', () => {
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      config: { ui: { theme: 'dark', size: { width: 100, height: 50 } } },
    };
    expect(matchesFilter(record, {
      config: { ui: { theme: 'dark', size: { width: 100, height: 50 } } },
    })).toBe(true);
    // Different deep value → no match
    expect(matchesFilter(record, {
      config: { ui: { theme: 'dark', size: { width: 100, height: 51 } } },
    })).toBe(false);
    // Different top-level key order is still a match
    expect(matchesFilter(record, {
      config: { ui: { size: { height: 50, width: 100 }, theme: 'dark' } },
    })).toBe(true);
  });

  test('NaN-vs-NaN compares equal (treated as identical for filtering)', () => {
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      score: NaN,
    };
    expect(matchesFilter(record, { score: NaN })).toBe(true);
  });

  test('NaN vs Infinity is no longer falsely equal', () => {
    // Pre-rc.7: both serialised to `null`, so they compared equal under
    // JSON.stringify equality. Post-rc.7: typed comparison catches this.
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      score: NaN,
    };
    expect(matchesFilter(record, { score: Infinity })).toBe(false);
  });

  test('different key sets at the same level → no match', () => {
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      nested: { a: 1, b: 2 },
    };
    expect(matchesFilter(record, { nested: { a: 1 } })).toBe(false);            // record has extra key
    expect(matchesFilter(record, { nested: { a: 1, b: 2, c: 3 } })).toBe(false); // filter has extra key
  });

  test('object equality vs primitive equality at the same path', () => {
    const record: DbRecord = {
      id: 'r1', createdAt: 1, updatedAt: 2,
      nested: { a: 1 },
    };
    // Primitive `1` does not match the nested object `{a: 1}`
    expect(matchesFilter(record, { nested: 1 } as unknown as DbFilter)).toBe(false);
  });
});

// ─── matchesFilter: operator envelopes ───────────────────────────────────────

describe('matchesFilter — Mongo-style operators', () => {
  const record: DbRecord = {
    id: 'r1',
    createdAt: 1,
    updatedAt: 2,
    margin: 3,
    name: 'Alice',
    tier: 'hard',
    tags: ['a', 'b'],
    notes: null,
  };

  // ── Comparison operators ──────────────────────────────────────────────────

  test('$gt / $gte / $lt / $lte match numeric actuals', () => {
    expect(matchesFilter(record, { margin: { $gt: 2 } })).toBe(true);
    expect(matchesFilter(record, { margin: { $gt: 3 } })).toBe(false);
    expect(matchesFilter(record, { margin: { $gte: 3 } })).toBe(true);
    expect(matchesFilter(record, { margin: { $lt: 4 } })).toBe(true);
    expect(matchesFilter(record, { margin: { $lte: 3 } })).toBe(true);
    expect(matchesFilter(record, { margin: { $lte: 2 } })).toBe(false);
  });

  test('numeric comparison returns false on type mismatch (never throws)', () => {
    // actual is a number but arg is a string — no coercion, no throw
    expect(matchesFilter(record, { margin: { $gt: '2' } as unknown as number })).toBe(false);
    // actual is a string but arg is a number
    expect(matchesFilter(record, { name: { $gt: 5 } as unknown as string })).toBe(false);
    // missing field
    expect(matchesFilter(record, { nonexistent: { $gte: 0 } })).toBe(false);
  });

  test('numeric comparison with NaN is always false', () => {
    // Filter cast: TS infers `Partial<typeof record>`, narrowing `margin` to
    // `number`, so an operator-object filter ({ $gt }) doesn't satisfy the
    // typed contract — but the runtime supports it. The `DbFilter` cast
    // restores the wider DbRecord-shaped expectation that matchesFilter
    // implements.
    expect(matchesFilter({ ...record, margin: NaN as number }, { margin: { $gt: 0 } } as DbFilter)).toBe(false);
    expect(matchesFilter(record, { margin: { $gt: NaN as number } } as DbFilter)).toBe(false);
  });

  // ── $eq / $ne ─────────────────────────────────────────────────────────────

  test('$eq uses structural equality (explicit form of the literal default)', () => {
    expect(matchesFilter(record, { tier: { $eq: 'hard' } })).toBe(true);
    expect(matchesFilter(record, { tier: { $eq: 'easy' } })).toBe(false);
    expect(matchesFilter(record, { tags: { $eq: ['a', 'b'] } })).toBe(true);
    expect(matchesFilter(record, { tags: { $eq: ['a', 'c'] } })).toBe(false);
    // Same result as the literal form — $eq exists for Mongo-syntax symmetry
    expect(matchesFilter(record, { tier: { $eq: 'hard' } }))
      .toBe(matchesFilter(record, { tier: 'hard' }));
  });

  test('$ne uses structural inequality', () => {
    expect(matchesFilter(record, { tier: { $ne: 'easy' } })).toBe(true);
    expect(matchesFilter(record, { tier: { $ne: 'hard' } })).toBe(false);
    expect(matchesFilter(record, { tags: { $ne: ['a', 'b'] } })).toBe(false);
    expect(matchesFilter(record, { tags: { $ne: ['a', 'c'] } })).toBe(true);
  });

  // ── $in / $nin ────────────────────────────────────────────────────────────

  test('$in matches when actual equals one of the array entries', () => {
    expect(matchesFilter(record, { tier: { $in: ['hard', 'very_hard'] } })).toBe(true);
    expect(matchesFilter(record, { tier: { $in: ['easy', 'moderate'] } })).toBe(false);
  });

  test('$nin is the inverse of $in', () => {
    expect(matchesFilter(record, { tier: { $nin: ['easy', 'moderate'] } })).toBe(true);
    expect(matchesFilter(record, { tier: { $nin: ['hard'] } })).toBe(false);
  });

  test('$in/$nin throw when argument is not an array', () => {
    expect(() => matchesFilter(record, { tier: { $in: 'hard' as unknown as string[] } }))
      .toThrow(/\$in requires an array/);
    expect(() => matchesFilter(record, { tier: { $nin: 'hard' as unknown as string[] } }))
      .toThrow(/\$nin requires an array/);
  });

  test('$in on array-valued field compares whole-array (Mongo parity)', () => {
    // Record's `tags` is ['a', 'b']. $in: [['a','b'], 'other'] means
    // "is the whole tags array equal to one of these entries?" — YES.
    expect(matchesFilter(record, {
      tags: { $in: [['a', 'b'], ['c', 'd']] as unknown as string[] },
    })).toBe(true);
    // $in: ['a'] checks for membership of a string 'a' in the $in list —
    // actual is the whole ['a','b'] array which does NOT equal 'a'. FALSE.
    expect(matchesFilter(record, {
      tags: { $in: ['a'] as unknown as string[] },
    })).toBe(false);
  });

  // ── $exists ───────────────────────────────────────────────────────────────

  test('$exists distinguishes missing vs present fields', () => {
    expect(matchesFilter(record, { margin: { $exists: true } })).toBe(true);
    expect(matchesFilter(record, { nope: { $exists: false } })).toBe(true);
    expect(matchesFilter(record, { margin: { $exists: false } })).toBe(false);
    expect(matchesFilter(record, { nope: { $exists: true } })).toBe(false);
  });

  test('$exists treats null as present (distinct from missing)', () => {
    // record.notes is explicitly null
    expect(matchesFilter(record, { notes: { $exists: true } })).toBe(true);
    expect(matchesFilter(record, { notes: { $exists: false } })).toBe(false);
  });

  test('$exists works with dot-notation paths through missing intermediates', () => {
    expect(matchesFilter(record, { 'nested.missing.deep': { $exists: false } })).toBe(true);
  });

  // ── $regex ────────────────────────────────────────────────────────────────

  test('$regex with string pattern matches string actuals', () => {
    expect(matchesFilter(record, { name: { $regex: '^Al' } })).toBe(true);
    expect(matchesFilter(record, { name: { $regex: 'ice$' } })).toBe(true);
    expect(matchesFilter(record, { name: { $regex: 'bob' } })).toBe(false);
  });

  test('$regex honors $options sibling key', () => {
    expect(matchesFilter(record, { name: { $regex: 'alice', $options: 'i' } })).toBe(true);
    expect(matchesFilter(record, { name: { $regex: 'alice' } })).toBe(false); // case-sensitive
  });

  test('$regex accepts direct RegExp instance via envelope', () => {
    expect(matchesFilter(record, { name: { $regex: /ALICE/i } })).toBe(true);
  });

  test('$regex returns false on non-string actuals (no coercion, no throw)', () => {
    expect(matchesFilter(record, { margin: { $regex: '3' } })).toBe(false);
  });

  test('$regex throws on invalid pattern', () => {
    expect(() => matchesFilter(record, { name: { $regex: '[unclosed' } }))
      .toThrow(/invalid \$regex/);
  });

  test('$regex throws on non-string / non-RegExp argument', () => {
    expect(() => matchesFilter(record, { name: { $regex: 42 as unknown as string } }))
      .toThrow(/\$regex requires a string or RegExp/);
  });

  // ── Direct RegExp shorthand ───────────────────────────────────────────────

  test('direct RegExp value matches strings (shorthand for $regex)', () => {
    expect(matchesFilter(record, { name: /alice/i })).toBe(true);
    expect(matchesFilter(record, { name: /bob/ })).toBe(false);
    expect(matchesFilter(record, { margin: /3/ })).toBe(false); // non-string actual
  });

  // ── Envelope detection edge cases ─────────────────────────────────────────

  test('empty object falls through to literal equality', () => {
    expect(matchesFilter({ ...record, meta: {} as Record<string, unknown> }, { meta: {} })).toBe(true);
    expect(matchesFilter({ ...record, meta: { a: 1 } as Record<string, unknown> }, { meta: {} })).toBe(false);
  });

  test('nested plain object (no $-keys) is treated as literal deep-equal', () => {
    const r = { ...record, meta: { foo: 'bar' } as Record<string, unknown> };
    expect(matchesFilter(r, { meta: { foo: 'bar' } })).toBe(true);
    expect(matchesFilter(r, { meta: { foo: 'baz' } })).toBe(false);
  });

  test('mixed operator/literal envelope throws loudly', () => {
    expect(() => matchesFilter(record, {
      margin: { $gt: 0, foo: 1 } as unknown as number,
    })).toThrow(/mixed operator\/literal envelope/);
  });

  test('unknown operator throws', () => {
    expect(() => matchesFilter(record, {
      margin: { $bogus: 5 } as unknown as number,
    })).toThrow(/unknown operator "\$bogus"/);
  });

  // ── Composition with existing filter semantics ────────────────────────────

  test('multiple keys combine AND — mix of operator and literal', () => {
    expect(matchesFilter(record, {
      margin: { $gt: 0 },
      tier: 'hard',
    })).toBe(true);
    expect(matchesFilter(record, {
      margin: { $gt: 10 },
      tier: 'hard',
    })).toBe(false);
  });

  test('operators work with dot-notation paths', () => {
    const r = { ...record, meta: { score: 42 } as Record<string, unknown> };
    // Filter cast: dot-notation keys ('meta.score') aren't in the typed
    // record's surface keys, so `Partial<typeof r>` rejects them at type
    // level. The runtime path-traversal works regardless. Cast to
    // `DbFilter` to express the runtime contract.
    expect(matchesFilter(r, { 'meta.score': { $gt: 40 } } as DbFilter)).toBe(true);
    expect(matchesFilter(r, { 'meta.score': { $in: [42, 43] } } as DbFilter)).toBe(true);
  });
});

// ─── insert ──────────────────────────────────────────────────────────────────

describe('DbStore.insert', () => {
  test('auto-generates id, createdAt, updatedAt', async () => {
    const store = makeStore();
    const record = await store.insert({ x: 1 });

    expect(typeof record.id).toBe('string');
    expect(record.id.length).toBeGreaterThan(0);
    expect(typeof record.createdAt).toBe('number');
    expect(typeof record.updatedAt).toBe('number');
    expect(record.createdAt).toBe(record.updatedAt); // first insert
    expect(record.x).toBe(1);
  });

  test('preserves caller fields alongside injected ones', async () => {
    const store = makeStore();
    const record = await store.insert({ total: 18, notation: '1d20+3' });

    expect(record.total).toBe(18);
    expect(record.notation).toBe('1d20+3');
  });

  test('honors caller-supplied id when present', async () => {
    const store = makeStore();
    const record = await store.insert({ id: 'custom-id', x: 1 });

    expect(record.id).toBe('custom-id');
  });

  test('persists to the configured path', async () => {
    const store = makeStore('db/scripts/s-X/foo.json');
    await store.insert({ x: 1 });

    expect(storage.setJsonCalls).toHaveLength(1);
    expect(storage.setJsonCalls[0]!.path).toBe('db/scripts/s-X/foo.json');
  });

  test('returns the full record including injected fields', async () => {
    const store = makeStore();
    const record = await store.insert({ x: 1 });

    const found = await store.find();
    expect(found).toHaveLength(1);
    expect(found[0]!.id).toBe(record.id);
  });
});

// ─── insertMany ──────────────────────────────────────────────────────────────

describe('DbStore.insertMany', () => {
  test('inserts N records with a single persist call', async () => {
    const store = makeStore();
    storage.setJsonCalls = [];

    const inserted = await store.insertMany([
      { x: 1 },
      { x: 2 },
      { x: 3 },
    ]);

    expect(inserted).toHaveLength(3);
    expect(storage.setJsonCalls).toHaveLength(1); // ONE persist, not three
    const all = await store.find();
    expect(all).toHaveLength(3);
  });

  test('returns only the newly-inserted records, not the full collection', async () => {
    const store = makeStore();
    await store.insert({ pre: 'existing' });

    const inserted = await store.insertMany([
      { label: 'A' },
      { label: 'B' },
    ]);

    expect(inserted).toHaveLength(2);
    expect(inserted.map(r => (r as any).label)).toEqual(['A', 'B']);

    // The collection itself has 3 records (1 existing + 2 new)
    expect(await store.count()).toBe(3);
  });

  test('auto-injects id/createdAt/updatedAt per record', async () => {
    const store = makeStore();
    const inserted = await store.insertMany([
      { x: 1 },
      { x: 2 },
    ]);

    for (const r of inserted) {
      expect(typeof r.id).toBe('string');
      expect(r.id.length).toBeGreaterThan(0);
      expect(typeof r.createdAt).toBe('number');
      expect(r.updatedAt).toBe(r.createdAt); // fresh insert
    }
    // IDs are unique across the batch
    expect(new Set(inserted.map(r => r.id)).size).toBe(inserted.length);
  });

  test('all records in a batch share the same timestamp', async () => {
    const store = makeStore();
    const inserted = await store.insertMany([
      { x: 1 },
      { x: 2 },
      { x: 3 },
    ]);

    const timestamps = new Set(inserted.map(r => r.createdAt));
    expect(timestamps.size).toBe(1); // all same `now`
  });

  test('empty array is a fast no-op (no persist, returns empty array)', async () => {
    const store = makeStore();
    storage.setJsonCalls = [];

    const result = await store.insertMany([]);

    expect(result).toEqual([]);
    expect(storage.setJsonCalls).toHaveLength(0);
  });

  test('honors caller-supplied id / createdAt when provided', async () => {
    const store = makeStore();
    const inserted = await store.insertMany([
      { id: 'explicit-id', x: 1 },
      { createdAt: 42, x: 2 },
    ]);

    expect(inserted[0]!.id).toBe('explicit-id');
    expect(inserted[1]!.createdAt).toBe(42);
  });

  test('size-guard applies to the combined post-persist array (hard limit)', async () => {
    const store = makeStore();
    await store.insert({ v: 'small' });
    storage.setJsonCalls = [];

    // One oversized blob in the batch tips the whole collection past the limit.
    const huge = 'x'.repeat(60 * 1024 * 1024);
    await expect(store.insertMany([
      { ok: 'little' },
      { blob: huge },
    ])).rejects.toThrow(/DB_SIZE_EXCEEDED/);

    // Atomicity: neither new record lands on disk
    expect(storage.setJsonCalls).toHaveLength(0);
    expect(await store.count()).toBe(1); // only the pre-existing record
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
    await store.insert({ x: 1 });
    await store.insert({ x: 2 });

    expect(await store.find()).toHaveLength(2);
  });

  test('filters by object predicate', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', margin: 3 });
    await store.insert({ tier: 'easy', margin: 12 });

    const hard = await store.find({ tier: 'hard' });
    expect(hard).toHaveLength(1);
    expect(hard[0]!.margin).toBe(3);
  });

  test('filters by function predicate', async () => {
    const store = makeStore();
    await store.insert({ margin: 3 });
    await store.insert({ margin: -5 });

    const positives = await store.find((r: DbRecord) => (r.margin as number) > 0);
    expect(positives).toHaveLength(1);
  });
});

describe('DbStore.findOne', () => {
  test('returns first match', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', n: 1 });
    await store.insert({ tier: 'hard', n: 2 });

    const result = await store.findOne({ tier: 'hard' });
    expect(result).not.toBeNull();
    expect(result!.n).toBe(1);
  });

  test('returns null when no match', async () => {
    const store = makeStore();
    await store.insert({ tier: 'easy' });

    expect(await store.findOne({ tier: 'hard' })).toBeNull();
  });
});

describe('DbStore.count', () => {
  test('counts all records when filter undefined', async () => {
    const store = makeStore();
    await store.insert({ x: 1 });
    await store.insert({ x: 2 });

    expect(await store.count()).toBe(2);
  });

  test('counts filtered records', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard' });
    await store.insert({ tier: 'easy' });
    await store.insert({ tier: 'easy' });

    expect(await store.count({ tier: 'easy' })).toBe(2);
  });
});

// ─── update ──────────────────────────────────────────────────────────────────

describe('DbStore.update', () => {
  test('updates matching records and returns count', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard', note: 'a' });
    await store.insert({ tier: 'hard', note: 'b' });
    await store.insert({ tier: 'easy', note: 'c' });

    const count = await store.update({ tier: 'hard' }, { note: 'updated' });
    expect(count).toBe(2);

    const hard = await store.find({ tier: 'hard' });
    expect(hard.every(r => r.note === 'updated')).toBe(true);
  });

  test('bumps updatedAt on match, preserves createdAt', async () => {
    const store = makeStore();
    const inserted = await store.insert({ x: 1 });
    // Force time to advance so we can detect the bump.
    await new Promise<void>(r => setTimeout(r, 2));

    await store.update({ x: 1 }, { x: 2 });

    const [record] = await store.find();
    expect(record!.createdAt).toBe(inserted.createdAt);
    expect(record!.updatedAt).toBeGreaterThan(inserted.updatedAt);
    expect(record!.x).toBe(2);
  });

  test('silently strips id / createdAt / updatedAt from the patch', async () => {
    const store = makeStore();
    const inserted = await store.insert({ x: 1 });

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
    await store.insert({ x: 1 });
    storage.setJsonCalls = [];

    const count = await store.update({ x: 999 }, { x: 2 });
    expect(count).toBe(0);
    expect(storage.setJsonCalls).toHaveLength(0);
  });
});

// ─── delete ──────────────────────────────────────────────────────────────────

describe('DbStore.delete', () => {
  test('deletes matching records and returns count', async () => {
    const store = makeStore();
    await store.insert({ tier: 'hard' });
    await store.insert({ tier: 'hard' });
    await store.insert({ tier: 'easy' });

    const count = await store.delete({ tier: 'hard' });
    expect(count).toBe(2);

    const remaining = await store.find();
    expect(remaining).toHaveLength(1);
    expect(remaining[0]!.tier).toBe('easy');
  });

  test('returns 0 and does not persist when no match', async () => {
    const store = makeStore();
    await store.insert({ x: 1 });
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
    await store.insert({ x: 1 });
    await store.insert({ x: 2 });

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
    await store.insert({ tier: 'hard', margin: 3 });
    await store.insert({ tier: 'easy', margin: 10 });
    await store.insert({ tier: 'easy', margin: -2 });

    const count = await store.query<number>('filter(.margin > 0) | size()');
    expect(count).toBe(2);
  });

  test('propagates SyntaxError on malformed queries', async () => {
    const store = makeStore();
    await store.insert({ x: 1 });

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
    await store.insert({ blob: big });

    expect(onSizeWarn).toHaveBeenCalledTimes(1);
    const call = onSizeWarn.mock.calls[0]!;
    expect(call[0]).toBeGreaterThan(DB_SIZE_WARN_BYTES);
  });

  test('does NOT fire size-warn below the threshold', async () => {
    const onSizeWarn = mock<SizeWarnCallback>(() => {});
    const store = makeStore(undefined, onSizeWarn);
    await store.insert({ x: 1 });

    expect(onSizeWarn).toHaveBeenCalledTimes(0);
  });

  test('throws DbSizeExceededError above 50 MB and does not persist', async () => {
    const store = makeStore();
    await store.insert({ x: 1 });
    storage.setJsonCalls = [];

    // One record just over the 50 MB hard limit.
    const huge = 'x'.repeat(60 * 1024 * 1024);

    await expect(store.insert({ blob: huge }))
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
    const record = await store.insert({ blob: big });
    expect(record.id).toBeDefined();

    const found = await store.find();
    expect(found).toHaveLength(1);
  });
});

// ─── Schema validation on write ──────────────────────────────────────────────

describe('DbStore schema validation', () => {
  /**
   * Structural `ZodLike`-compatible validator we build by hand. Avoids
   * importing Zod into the test just to exercise the surface — the store
   * only cares about `.parse(data) → T` shape.
   */
  function stringNumberSchema(): { parse(data: unknown): DbRecord } {
    return {
      parse(data: unknown): DbRecord {
        if (typeof data !== 'object' || data === null) {
          throw new Error('expected object');
        }
        const d = data as Record<string, unknown>;
        if (typeof d.name !== 'string') throw new Error('name: expected string');
        if (typeof d.count !== 'number') throw new Error('count: expected number');
        return d as DbRecord;
      },
    };
  }

  /** Zod-like that transforms input — to verify the store honors the return value. */
  function trimmingSchema(): { parse(data: unknown): DbRecord } {
    return {
      parse(data: unknown): DbRecord {
        const d = data as Record<string, unknown>;
        if (typeof d.name !== 'string') throw new Error('name: expected string');
        // `as unknown as DbRecord`: the schema-parser path is downstream
        // of where reserved fields (id / createdAt / updatedAt) get
        // injected, so the synthesized return value here legitimately
        // doesn't carry them. The double-cast acknowledges the deliberate
        // type-broadening rather than papering over a bug.
        return { ...d, name: d.name.trim() } as unknown as DbRecord;
      },
    };
  }

  function makeSchemaStore(schema?: { parse(data: unknown): DbRecord }): DbStore {
    return new DbStore(
      'db/scripts/script-1/rolls.json',
      storage,
      () => 'user-1',
      undefined, // no size-warn
      schema as any,
    );
  }

  // ── insert ────────────────────────────────────────────────────────────────

  test('insert rejects records failing the schema, with wrapped error', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    await expect(store.insert({ name: 42, count: 1 } as unknown as DbRecord))
      .rejects.toThrow(/api\.db: schema validation failed on insert: name: expected string/);
  });

  test('insert does NOT persist when schema throws', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    storage.setJsonCalls = [];
    await expect(store.insert({ name: 42, count: 1 } as unknown as DbRecord))
      .rejects.toThrow(/schema validation failed/);
    expect(storage.setJsonCalls).toHaveLength(0);
  });

  test('insert passes valid records through unchanged', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    const result = await store.insert({ name: 'alice', count: 3 });
    expect(result.name).toBe('alice');
    expect(result.count).toBe(3);
  });

  test('insert honors schema-transformed values (return-value swap)', async () => {
    const store = makeSchemaStore(trimmingSchema());
    const result = await store.insert({ name: '  alice  ' });
    expect(result.name).toBe('alice'); // trimmed
  });

  // ── insertMany ────────────────────────────────────────────────────────────

  test('insertMany atomically rejects the batch on first invalid record', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    storage.setJsonCalls = [];
    await expect(store.insertMany([
      { name: 'ok', count: 1 },
      { name: 'also-ok', count: 2 },
      { name: 42, count: 3 } as unknown as DbRecord,   // bad
      { name: 'never-reached', count: 4 },
    ])).rejects.toThrow(/api\.db: schema validation failed on insertMany\[2\]: name: expected string/);

    // Atomicity: no persist, no records land
    expect(storage.setJsonCalls).toHaveLength(0);
    expect(await store.find()).toEqual([]);
  });

  test('insertMany with all-valid batch persists and returns transformed records', async () => {
    const store = makeSchemaStore(trimmingSchema());
    const result = await store.insertMany([
      { name: '  alice  ' },
      { name: 'bob' },
    ]);
    expect(result.map(r => r.name)).toEqual(['alice', 'bob']);
  });

  // ── update ────────────────────────────────────────────────────────────────

  test('update validates the MERGED record, not just the patch', async () => {
    // Pre-seed with a valid record
    const store = makeSchemaStore(stringNumberSchema());
    await store.insert({ name: 'alice', count: 3 });

    // Patch that's invalid in isolation ({ count: 'seven' }) AND invalid
    // when merged ({ name: 'alice', count: 'seven', ... }). Merged-record
    // validation catches this.
    await expect(store.update({ name: 'alice' }, { count: 'seven' } as unknown as Partial<DbRecord>))
      .rejects.toThrow(/schema validation failed on update \(id=[^)]+\): count: expected number/);
  });

  test('update is atomic — no records change on validation failure', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    const a = await store.insert({ name: 'alice', count: 1 });
    const b = await store.insert({ name: 'bob', count: 2 });

    storage.setJsonCalls = [];
    await expect(store.update({}, { count: 'bad' } as unknown as Partial<DbRecord>))
      .rejects.toThrow(/schema validation failed/);

    expect(storage.setJsonCalls).toHaveLength(0);
    // Both records unchanged
    const all = await store.find();
    expect(all.find(r => r.id === a.id)!.count).toBe(1);
    expect(all.find(r => r.id === b.id)!.count).toBe(2);
  });

  test('update error identifies the failing record by id', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    const a = await store.insert({ name: 'alice', count: 1 });
    await expect(store.update({ id: a.id }, { count: 'bad' } as unknown as Partial<DbRecord>))
      .rejects.toThrow(new RegExp(`id=${a.id}`));
  });

  test('update passes when the merged result is valid', async () => {
    const store = makeSchemaStore(stringNumberSchema());
    const a = await store.insert({ name: 'alice', count: 1 });
    const n = await store.update({ id: a.id }, { count: 99 } as Partial<DbRecord>);
    expect(n).toBe(1);
    const [r] = await store.find();
    expect(r!.count).toBe(99);
  });

  // ── No schema: existing behavior unchanged ────────────────────────────────

  test('without schema, all existing invariants hold (no validation)', async () => {
    const store = makeSchemaStore(); // no schema
    // Random-shaped records pass freely
    await store.insert({ whatever: 'goes', in_shape: true });
    await store.insertMany([{ x: 1 }, { y: 2 }]);
    await store.update({}, { z: 3 } as Partial<DbRecord>);

    const all = await store.find();
    expect(all).toHaveLength(3);
  });

  // ── Reserved-field preservation (Zod `z.object()` strips unknown) ────────

  // Validator that mimics real Zod `z.object({ name })` behavior: passes
  // `name` through, strips everything else. This is the default for Zod
  // object schemas and was the gap our hand-rolled validators missed.
  function strippingSchema(): { parse(data: unknown): DbRecord } {
    return {
      parse(data: unknown): DbRecord {
        const d = data as Record<string, unknown>;
        if (typeof d.name !== 'string') throw new Error('name: expected string');
        // Strip all unknown keys — mimics Zod's default strict object.
        // See the matching parser above for the `as unknown as DbRecord`
        // double-cast rationale.
        return { name: d.name } as unknown as DbRecord;
      },
    };
  }

  test('insert preserves reserved fields when schema strips unknown keys', async () => {
    const store = makeSchemaStore(strippingSchema());
    const result = await store.insert({ name: 'alice', extra: 'stuff' });

    expect(typeof result.id).toBe('string');
    expect(result.id.length).toBeGreaterThan(0);
    expect(result.createdAt).toBeGreaterThan(0);
    expect(result.updatedAt).toBe(result.createdAt);
    expect(result.name).toBe('alice');
    // User-declared schema stripped `extra` — that's fine and documented.
    expect((result as any).extra).toBeUndefined();
  });

  test('insertMany preserves reserved fields when schema strips unknown keys', async () => {
    const store = makeSchemaStore(strippingSchema());
    const results = await store.insertMany([
      { name: 'alice', extra: 1 },
      { name: 'bob',   extra: 2 },
    ]);

    for (const r of results) {
      expect(typeof r.id).toBe('string');
      expect(r.id.length).toBeGreaterThan(0);
      expect(typeof r.createdAt).toBe('number');
    }
    expect(new Set(results.map(r => r.id)).size).toBe(2); // unique
  });

  test('update preserves reserved fields (id + createdAt) when schema strips them', async () => {
    const store = makeSchemaStore(strippingSchema());
    const before = await store.insert({ name: 'alice' });
    await new Promise(r => setTimeout(r, 2)); // force clock advance

    await store.update({ id: before.id }, { name: 'renamed' } as Partial<DbRecord>);

    const [after] = await store.find();
    expect(after!.id).toBe(before.id);                 // id preserved
    expect(after!.createdAt).toBe(before.createdAt);   // createdAt preserved
    expect(after!.updatedAt).toBeGreaterThan(before.updatedAt); // bumped
    expect(after!.name).toBe('renamed');
  });

  // ── Attach-time no-op (schema does NOT validate existing records) ─────────

  test('attaching a schema does not validate pre-existing records at construction', async () => {
    // First: write garbage records with NO schema
    const lax = makeSchemaStore();
    await lax.insert({ garbage: 1 });
    await lax.insert({ nonsense: 2 });

    // Now construct a strict store over the same file — no error.
    const strict = makeSchemaStore(stringNumberSchema());
    const records = await strict.find(); // returns unvalidated existing data
    expect(records).toHaveLength(2);
  });
});
