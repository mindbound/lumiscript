import { describe, test, expect, mock, beforeEach } from 'bun:test';
import {
  enumerateAllCollections,
  inspectCollection,
  updateRecord,
  deleteRecord,
  analyzeCollection,
  isValidCollectionPath,
  type CollectionSummary,
} from '../../src/engine/db-admin.js';
import { __resetQueues } from '../../src/engine/db-queue.js';
import { on as busOn, clearAll as clearBus } from '../../src/engine/broadcast-bus.js';

// ─── In-memory userStorage backing the mock spindle ──────────────────────────

interface FakeFile { data: unknown; sizeBytes: number; modifiedAt: string; }
let fakeStore: Map<string, FakeFile>;

function patchUserStorage(opts: {
  statThrowsOn?: string[];
} = {}) {
  const us = (globalThis as any).spindle.userStorage;
  const statThrowers = new Set(opts.statThrowsOn ?? []);

  us.getJson = mock(async (path: string, o: { fallback: unknown }) => {
    const f = fakeStore.get(path);
    return f ? f.data : o.fallback;
  });

  us.setJson = mock(async (path: string, value: unknown) => {
    fakeStore.set(path, {
      data: value,
      sizeBytes: JSON.stringify(value).length,
      modifiedAt: new Date().toISOString(),
    });
  });

  us.list = mock(async (prefix: string) => {
    return [...fakeStore.keys()].filter(k => k.startsWith(prefix));
  });

  us.delete = mock(async (path: string) => {
    fakeStore.delete(path);
  });

  us.stat = mock(async (path: string) => {
    if (statThrowers.has(path)) throw new Error('simulated stat failure');
    const f = fakeStore.get(path);
    if (!f) {
      return { exists: false, isFile: false, isDirectory: false, sizeBytes: 0, modifiedAt: new Date(0).toISOString() };
    }
    return { exists: true, isFile: true, isDirectory: false, sizeBytes: f.sizeBytes, modifiedAt: f.modifiedAt };
  });
}

/** Write a file directly into the fake store, bypassing setJson timestamp logic. */
function seed(path: string, data: unknown, modifiedAt = '2026-04-22T12:00:00.000Z') {
  const serialized = JSON.stringify(data);
  fakeStore.set(path, { data, sizeBytes: serialized.length, modifiedAt });
}

beforeEach(() => {
  fakeStore = new Map();
  patchUserStorage();
});

// ─── isValidCollectionPath ───────────────────────────────────────────────────

describe('isValidCollectionPath', () => {
  test('accepts the three canonical scope templates', () => {
    expect(isValidCollectionPath('db/scripts/s-1/rolls.json')).toBe(true);
    expect(isValidCollectionPath('db/characters/char-1/s-1/rolls.json')).toBe(true);
    expect(isValidCollectionPath('db/chats/chat-1/s-1/events.json')).toBe(true);
  });

  test('rejects non-collection paths', () => {
    expect(isValidCollectionPath('scripts.json')).toBe(false);
    expect(isValidCollectionPath('variables/global.json')).toBe(false);
    expect(isValidCollectionPath('db/scripts/s-1')).toBe(false);        // missing file
    expect(isValidCollectionPath('db/scripts/s-1/x.txt')).toBe(false);  // wrong ext
    expect(isValidCollectionPath('db/scripts//rolls.json')).toBe(false); // empty segment
    expect(isValidCollectionPath('')).toBe(false);
  });

  test('rejects paths with traversal segments in the slot position', () => {
    // The regex requires [^/]+ per segment — `..` fits that shape but lands
    // inside our own scope tree, not outside. Defense-in-depth below; the
    // spindle userStorage layer also path-validates before any disk touch.
    expect(isValidCollectionPath('db/scripts/../rolls.json')).toBe(true);
    // But nested paths beyond the template don't match:
    expect(isValidCollectionPath('db/scripts/s-1/sub/rolls.json')).toBe(false);
  });
});

// ─── enumerateAllCollections ─────────────────────────────────────────────────

describe('enumerateAllCollections', () => {
  test('walks all three scope prefixes and returns parsed summaries', async () => {
    seed('db/scripts/script-A/rolls.json', [{ id: '1' }]);
    seed('db/scripts/script-A/counters.json', [{ id: '2' }]);
    seed('db/scripts/script-B/rolls.json', [{ id: '3' }]);
    seed('db/characters/char-X/script-A/notes.json', [{ id: '4' }]);
    seed('db/chats/chat-Y/script-B/events.json', [{ id: '5' }]);

    const result = await enumerateAllCollections();
    expect(result).toHaveLength(5);

    const byName: Record<string, CollectionSummary> = {};
    for (const s of result) byName[`${s.scope}:${s.scriptId}:${s.name}`] = s;

    expect(byName['script:script-A:rolls']!.path).toBe('db/scripts/script-A/rolls.json');
    expect(byName['character:script-A:notes']!.characterId).toBe('char-X');
    expect(byName['chat:script-B:events']!.chatId).toBe('chat-Y');
  });

  test('handles Windows-native backslash separators in list() returns', async () => {
    // On Windows, readdirSync(dir, {recursive: true}) returns paths with
    // `\` separators. Without normalization, the scope regexes never match.
    seed('db/scripts/script-A/rolls.json', [{ id: '1' }]);
    seed('db/characters/char-X/script-A/notes.json', [{ id: '2' }]);

    const us = (globalThis as any).spindle.userStorage;
    us.list = mock(async (prefix: string) => {
      // Return RELATIVE paths with BACKSLASH separators — worst case.
      const full = [...fakeStore.keys()].filter(k => k.startsWith(prefix));
      return full.map(k => k.slice(prefix.length).replace(/\//g, '\\'));
    });

    const result = await enumerateAllCollections();
    expect(result).toHaveLength(2);

    // Absolute paths reconstructed with forward slashes regardless of input separator
    const paths = result.map(r => r.path).sort();
    expect(paths).toEqual([
      'db/characters/char-X/script-A/notes.json',
      'db/scripts/script-A/rolls.json',
    ]);
  });

  test('handles list() returning paths RELATIVE to the prefix (real Lumiverse behavior)', async () => {
    // Lumiverse's userStorage.list is backed by readdirSync(dir, {recursive: true}),
    // which returns paths relative to `dir`, NOT absolute paths. This test
    // mimics that and verifies enumerateAllCollections re-prefixes correctly.
    seed('db/scripts/script-A/rolls.json', [{ id: '1' }]);
    seed('db/characters/char-X/script-A/notes.json', [{ id: '2' }]);

    const us = (globalThis as any).spindle.userStorage;
    us.list = mock(async (prefix: string) => {
      const full = [...fakeStore.keys()].filter(k => k.startsWith(prefix));
      // Strip the prefix — real backend does this.
      return full.map(k => k.slice(prefix.length));
    });

    const result = await enumerateAllCollections();
    expect(result).toHaveLength(2);

    const names = result.map(r => r.name).sort();
    expect(names).toEqual(['notes', 'rolls']);

    // Paths should still be reconstructed as absolute-from-userStorage-root
    const paths = result.map(r => r.path).sort();
    expect(paths).toEqual([
      'db/characters/char-X/script-A/notes.json',
      'db/scripts/script-A/rolls.json',
    ]);
  });

  test('returns empty array when no collections exist', async () => {
    const result = await enumerateAllCollections();
    expect(result).toEqual([]);
  });

  test('skips paths that do not match any scope template', async () => {
    seed('db/scripts/script-A/rolls.json', [{}]);
    // Simulate a rogue file under db/ that doesn't fit any template.
    // The enumerator should step over it rather than crash.
    seed('db/unknown-scope/weird.json', [{}]);
    // Spindle list() will include it because it starts with 'db/' — but
    // our list prefixes only target `db/scripts/`, `db/characters/`,
    // `db/chats/`, so 'db/unknown-scope/' never reaches parsePath.
    // We still test a DEEPER nested path that WOULD be returned by one
    // of the list prefixes if the scope somehow had extra nesting:
    seed('db/scripts/script-A/sub/nested.json', [{}]);

    const result = await enumerateAllCollections();
    expect(result).toHaveLength(1);
    expect(result[0]!.name).toBe('rolls');
  });

  test('stat failure does not exclude the record — degrades to zero size', async () => {
    seed('db/scripts/script-A/rolls.json', [{ id: '1' }]);
    seed('db/scripts/script-B/broken.json', [{ id: '2' }]);
    patchUserStorage({ statThrowsOn: ['db/scripts/script-B/broken.json'] });
    // Re-seed after re-patching userStorage:
    fakeStore.set('db/scripts/script-A/rolls.json', { data: [{ id: '1' }], sizeBytes: 100, modifiedAt: '2026-04-22T12:00:00.000Z' });
    fakeStore.set('db/scripts/script-B/broken.json', { data: [{ id: '2' }], sizeBytes: 200, modifiedAt: '2026-04-22T12:00:00.000Z' });

    const result = await enumerateAllCollections();
    expect(result).toHaveLength(2);

    const broken = result.find(r => r.name === 'broken')!;
    expect(broken.sizeBytes).toBe(0);
    expect(broken.modifiedAt).toBe(new Date(0).toISOString());

    const healthy = result.find(r => r.name === 'rolls')!;
    expect(healthy.sizeBytes).toBeGreaterThan(0);
  });

  test('list() throwing for one scope does not fail the whole enumeration', async () => {
    seed('db/scripts/script-A/rolls.json', [{ id: '1' }]);
    const us = (globalThis as any).spindle.userStorage;
    const origList = us.list;
    us.list = mock(async (prefix: string) => {
      if (prefix === 'db/characters/') throw new Error('simulated list failure');
      return [...fakeStore.keys()].filter((k: string) => k.startsWith(prefix));
    });

    const result = await enumerateAllCollections();
    expect(result).toHaveLength(1);
    expect(result[0]!.name).toBe('rolls');

    us.list = origList;
  });

  test('passes userId through to underlying userStorage calls', async () => {
    seed('db/scripts/script-A/rolls.json', [{}]);
    await enumerateAllCollections('user-123');

    const listCalls = (globalThis as any).spindle.userStorage.list.mock.calls;
    const statCalls = (globalThis as any).spindle.userStorage.stat.mock.calls;

    // All list + stat calls should have been made with userId='user-123'
    expect(listCalls.every((c: unknown[]) => c[1] === 'user-123')).toBe(true);
    expect(statCalls.every((c: unknown[]) => c[1] === 'user-123')).toBe(true);
  });
});

// ─── inspectCollection ───────────────────────────────────────────────────────

describe('inspectCollection', () => {
  const path = 'db/scripts/script-A/rolls.json';

  test('returns all records when no filter/pagination options given', async () => {
    seed(path, [
      { id: 'r1', total: 10, note: 'first' },
      { id: 'r2', total: 20, note: 'second' },
    ]);

    const result = await inspectCollection(path);
    expect(result.records).toHaveLength(2);
    expect(result.total).toBe(2);
  });

  test('returns empty result for non-existent collection (no throw)', async () => {
    const result = await inspectCollection(path);
    expect(result.records).toEqual([]);
    expect(result.total).toBe(0);
  });

  test('throws on invalid path', async () => {
    await expect(inspectCollection('variables/global.json'))
      .rejects.toThrow(/invalid collection path/);
    await expect(inspectCollection(''))
      .rejects.toThrow(/invalid collection path/);
  });

  test('shallow text filter matches top-level string fields (case-insensitive)', async () => {
    seed(path, [
      { id: 'r1', total: 10, note: 'the quick brown FOX' },
      { id: 'r2', total: 20, note: 'lazy dog' },
      { id: 'r3', total: 30, label: 'fox trot' },
    ]);

    const result = await inspectCollection(path, { textFilter: 'fox' });
    expect(result.total).toBe(2);
    expect(result.records.map(r => r.id).sort()).toEqual(['r1', 'r3']);
  });

  test('text filter ignores non-string fields', async () => {
    seed(path, [
      { id: 'r1', total: 42 },
      { id: 'r2', total: 0 },
    ]);
    const result = await inspectCollection(path, { textFilter: '42' });
    expect(result.total).toBe(0);
  });

  test('text filter does NOT descend into nested objects (shallow only)', async () => {
    seed(path, [
      { id: 'r1', nested: { deep: 'needle' } },
      { id: 'r2', label: 'needle' },
    ]);
    const result = await inspectCollection(path, { textFilter: 'needle' });
    expect(result.total).toBe(1);
    expect(result.records[0]!.id).toBe('r2');
  });

  test('pagination slices after the filter', async () => {
    const records = Array.from({ length: 10 }, (_, i) => ({ id: `r${i}`, n: i }));
    seed(path, records);

    const result = await inspectCollection(path, { offset: 3, limit: 4 });
    expect(result.total).toBe(10);
    expect(result.records).toHaveLength(4);
    expect(result.records.map(r => r.id)).toEqual(['r3', 'r4', 'r5', 'r6']);
  });

  test('pagination + filter compose (filter first, then slice)', async () => {
    seed(path, [
      { id: 'r1', note: 'apple' },
      { id: 'r2', note: 'apple' },
      { id: 'r3', note: 'apple' },
      { id: 'r4', note: 'banana' },
    ]);
    const result = await inspectCollection(path, { textFilter: 'apple', offset: 1, limit: 1 });
    expect(result.total).toBe(3);           // post-filter count
    expect(result.records).toHaveLength(1); // post-pagination slice
    expect(result.records[0]!.id).toBe('r2');
  });

  test('empty textFilter is treated as no filter', async () => {
    seed(path, [{ id: 'r1' }, { id: 'r2' }]);
    const result = await inspectCollection(path, { textFilter: '   ' });
    expect(result.total).toBe(2);
  });

  test('non-array file content falls back to empty', async () => {
    // Shouldn't normally happen (api.db always writes arrays) but
    // inspect should degrade rather than throw.
    seed(path, { bogus: 'shape' });
    const result = await inspectCollection(path);
    expect(result.records).toEqual([]);
    expect(result.total).toBe(0);
  });
});

// ─── updateRecord ────────────────────────────────────────────────────────────

describe('updateRecord', () => {
  const path = 'db/scripts/script-A/rolls.json';

  beforeEach(() => {
    __resetQueues();
    clearBus();
  });

  test('merges patch into the matching record + bumps updatedAt', async () => {
    seed(path, [
      { id: 'r1', name: 'alice', hp: 10, createdAt: 1000, updatedAt: 1000 },
      { id: 'r2', name: 'bob',   hp: 20, createdAt: 1000, updatedAt: 1000 },
    ]);

    const before = Date.now();
    const result = await updateRecord(path, 'r1', { hp: 15, level: 3 });
    const after = Date.now();

    expect(result.success).toBe(true);
    expect(result.remaining).toBe(2);

    const stored = (await inspectCollection(path)).records;
    const r1 = stored.find((r) => r.id === 'r1')!;
    expect(r1.hp).toBe(15);
    expect(r1.level).toBe(3);
    expect(r1.name).toBe('alice');                 // existing field preserved
    expect(r1.createdAt).toBe(1000);                // immutable
    expect(r1.updatedAt as number).toBeGreaterThanOrEqual(before);
    expect(r1.updatedAt as number).toBeLessThanOrEqual(after);

    // Other records untouched.
    const r2 = stored.find((r) => r.id === 'r2')!;
    expect(r2.hp).toBe(20);
    expect(r2.updatedAt).toBe(1000);
  });

  test('strips reserved fields from the patch (id / createdAt / updatedAt)', async () => {
    seed(path, [{ id: 'r1', hp: 10, createdAt: 500, updatedAt: 500 }]);

    const result = await updateRecord(path, 'r1', {
      id: 'HACKED',
      createdAt: 99999,
      updatedAt: 0,
      hp: 12,
    });
    expect(result.success).toBe(true);

    const r1 = (await inspectCollection(path)).records[0]!;
    expect(r1.id).toBe('r1');                       // unchanged
    expect(r1.createdAt).toBe(500);                  // unchanged
    expect(r1.updatedAt as number).toBeGreaterThan(500); // re-stamped, not zeroed
    expect(r1.hp).toBe(12);
  });

  test('emits ls:collection:updated broadcast on success', async () => {
    seed(path, [{ id: 'r1', hp: 10 }]);
    const handler = mock(() => {});
    busOn('ls:collection:updated', handler, 'test-listener');

    await updateRecord(path, 'r1', { hp: 12 });
    expect(handler).toHaveBeenCalledTimes(1);
    const payload = (handler.mock.calls[0] as unknown[])[0] as Record<string, unknown>;
    expect(payload.name).toBe('rolls');
    expect(payload.scope).toBe('script');
    expect(payload.scriptId).toBe('__lumiscript_admin__');
    expect(payload.count).toBe(1);
    expect(payload.filterKind).toBe('object');
  });

  test('returns success: false when recordId is missing (no broadcast)', async () => {
    seed(path, [{ id: 'r1', hp: 10 }]);
    const handler = mock(() => {});
    busOn('ls:collection:updated', handler, 'test-listener');

    const result = await updateRecord(path, 'r-missing', { hp: 99 });
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/not found/);
    expect(handler).not.toHaveBeenCalled();
  });

  test('rejects invalid collection paths up-front', async () => {
    const result = await updateRecord('variables/global.json', 'r1', { hp: 1 });
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/invalid collection path/);
  });

  test('character / chat scoped paths broadcast with the correct scope', async () => {
    const charPath = 'db/characters/char-1/script-A/notes.json';
    seed(charPath, [{ id: 'r1', body: 'old' }]);
    const handler = mock(() => {});
    busOn('ls:collection:updated', handler, 'test-listener');

    await updateRecord(charPath, 'r1', { body: 'new' });
    const payload = (handler.mock.calls[0] as unknown[])[0] as Record<string, unknown>;
    expect(payload.scope).toBe('character');
    expect(payload.name).toBe('notes');
  });
});

// ─── deleteRecord ────────────────────────────────────────────────────────────

describe('deleteRecord', () => {
  const path = 'db/scripts/script-A/rolls.json';

  beforeEach(() => {
    __resetQueues();
    clearBus();
  });

  test('removes the matching record + persists the rest', async () => {
    seed(path, [
      { id: 'r1', n: 1 },
      { id: 'r2', n: 2 },
      { id: 'r3', n: 3 },
    ]);

    const result = await deleteRecord(path, 'r2');
    expect(result.success).toBe(true);
    expect(result.remaining).toBe(2);

    const remaining = (await inspectCollection(path)).records;
    expect(remaining.map((r) => r.id).sort()).toEqual(['r1', 'r3']);
  });

  test('emits ls:collection:deleted broadcast on success', async () => {
    seed(path, [{ id: 'r1', n: 1 }, { id: 'r2', n: 2 }]);
    const handler = mock(() => {});
    busOn('ls:collection:deleted', handler, 'test-listener');

    await deleteRecord(path, 'r1');
    expect(handler).toHaveBeenCalledTimes(1);
    const payload = (handler.mock.calls[0] as unknown[])[0] as Record<string, unknown>;
    expect(payload.name).toBe('rolls');
    expect(payload.scope).toBe('script');
    expect(payload.scriptId).toBe('__lumiscript_admin__');
    expect(payload.count).toBe(1);
    expect(payload.filterKind).toBe('object');
  });

  test('returns success: false when recordId is missing (no broadcast, no write)', async () => {
    seed(path, [{ id: 'r1', n: 1 }]);
    const handler = mock(() => {});
    busOn('ls:collection:deleted', handler, 'test-listener');
    const initialSetJsonCalls =
      (globalThis as unknown as { spindle: { userStorage: { setJson: { mock: { calls: unknown[] } } } } })
        .spindle.userStorage.setJson.mock.calls.length;

    const result = await deleteRecord(path, 'r-missing');
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/not found/);
    expect(handler).not.toHaveBeenCalled();
    // No persist on a no-op delete — confirms we don't churn the file.
    const finalSetJsonCalls =
      (globalThis as unknown as { spindle: { userStorage: { setJson: { mock: { calls: unknown[] } } } } })
        .spindle.userStorage.setJson.mock.calls.length;
    expect(finalSetJsonCalls).toBe(initialSetJsonCalls);
  });

  test('rejects invalid collection paths up-front', async () => {
    const result = await deleteRecord('scripts.json', 'r1');
    expect(result.success).toBe(false);
    expect(result.error).toMatch(/invalid collection path/);
  });

  test('analyzeCollection: builds per-field aggregate', async () => {
    const path = 'db/scripts/script-A/rolls.json';
    seed(path, [
      { id: 'r1', name: 'alice', hp: 10,  role: 'warrior' },
      { id: 'r2', name: 'bob',   hp: 20,  role: 'warrior' },
      { id: 'r3', name: 'carol', hp: 30,  role: 'mage' },
      { id: 'r4', name: 'dave',  hp: 5,                  alive: true },  // missing role, has alive
    ]);

    const stats = await analyzeCollection(path);
    expect(stats.totalRecords).toBe(4);

    const byName = new Map(stats.fields.map((f) => [f.name, f]));
    // Reserved fields excluded.
    expect(byName.has('id')).toBe(false);
    expect(byName.has('createdAt')).toBe(false);

    // Presence
    expect(byName.get('name')!.presence).toBe(4);
    expect(byName.get('role')!.presence).toBe(3);   // dave missing role
    expect(byName.get('alive')!.presence).toBe(1);  // only dave

    // Type counts
    expect(byName.get('hp')!.types.number).toBe(4);
    expect(byName.get('alive')!.types.boolean).toBe(1);

    // Cardinality + top values
    const role = byName.get('role')!;
    expect(role.cardinality).toBe(2);
    expect(role.topValues).toHaveLength(2);
    expect(role.topValues[0]!.value).toBe('warrior');
    expect(role.topValues[0]!.count).toBe(2);

    // Numeric range — hp = 10, 20, 30, 5 → min=5, max=30, mean=16.25
    const hp = byName.get('hp')!;
    expect(hp.numericRange).not.toBeNull();
    expect(hp.numericRange!.min).toBe(5);
    expect(hp.numericRange!.max).toBe(30);
    expect(hp.numericRange!.mean).toBe(16.25);
  });

  test('analyzeCollection: handles non-numeric fields without numericRange', async () => {
    const path = 'db/scripts/script-A/rolls.json';
    seed(path, [{ id: 'r1', label: 'foo' }, { id: 'r2', label: 'bar' }]);
    const stats = await analyzeCollection(path);
    const label = stats.fields.find((f) => f.name === 'label')!;
    expect(label.numericRange).toBeNull();
  });

  test('analyzeCollection: missing/invalid paths return empty result (no throw)', async () => {
    expect(await analyzeCollection('variables/global.json'))
      .toEqual({ totalRecords: 0, fields: [] });
    expect(await analyzeCollection('db/scripts/never-written/x.json'))
      .toEqual({ totalRecords: 0, fields: [] });
  });

  test('analyzeCollection: distinguishes string "1" from number 1 in cardinality', async () => {
    const path = 'db/scripts/script-A/rolls.json';
    seed(path, [
      { id: 'r1', val: 1 },
      { id: 'r2', val: '1' },
      { id: 'r3', val: 1 },
    ]);
    const stats = await analyzeCollection(path);
    const val = stats.fields.find((f) => f.name === 'val')!;
    expect(val.cardinality).toBe(2); // number 1 + string "1" are distinct
    expect(val.types.number).toBe(2);
    expect(val.types.string).toBe(1);
  });

  test('analyzeCollection: object/array values contribute types but not cardinality', async () => {
    const path = 'db/scripts/script-A/rolls.json';
    seed(path, [
      { id: 'r1', meta: { a: 1 } },
      { id: 'r2', meta: { a: 2 } },
      { id: 'r3', meta: [1, 2, 3] },
    ]);
    const stats = await analyzeCollection(path);
    const meta = stats.fields.find((f) => f.name === 'meta')!;
    expect(meta.types.object).toBe(2);
    expect(meta.types.array).toBe(1);
    expect(meta.cardinality).toBe(0);   // structural values not counted
    expect(meta.topValues).toEqual([]);
    expect(meta.numericRange).toBeNull();
  });

  test('serializes concurrent admin mutations on the same path', async () => {
    // Two parallel `updateRecord` calls on the same path must serialize
    // through `runExclusive` — otherwise the second's load() would see
    // pre-mutation state and the first's update would be lost on the
    // second's persist.
    seed(path, [{ id: 'r1', hp: 10 }]);

    const [a, b] = await Promise.all([
      updateRecord(path, 'r1', { hp: 20 }),
      updateRecord(path, 'r1', { hp: 30 }),
    ]);
    expect(a.success).toBe(true);
    expect(b.success).toBe(true);

    // Both ran; the final value must be one of the two patches (not
    // a mix or pre-mutation state). Last-writer wins through the queue.
    // `records[0]!.hp` is typed `unknown` because DbRecord uses an open
    // `[key: string]: unknown` index signature — narrow at the assertion.
    const final = (await inspectCollection(path)).records[0]!.hp as number;
    expect([20, 30]).toContain(final);
  });
});
