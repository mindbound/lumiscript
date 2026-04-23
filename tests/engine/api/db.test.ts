import { describe, test, expect, mock, beforeEach } from 'bun:test';
import { buildDbAPI } from '../../../src/engine/api/db.js';
import { emit as busEmit, on as busOn, clearAll as busClear } from '../../../src/engine/broadcast-bus.js';
import { __resetQueues } from '../../../src/engine/db-queue.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import type { APIBuildDeps } from '../../../src/engine/api/shared.js';
import type { DbAPI, DbRecord } from '../../../src/types/script.js';

// ─── In-memory userStorage backing the mock spindle ──────────────────────────

interface Store { [path: string]: unknown; }
let fakeStore: Store;

function patchSpindleUserStorage() {
  const spindleAny = (globalThis as any).spindle;
  const us = spindleAny.userStorage;
  us.getJson = mock(async (path: string, opts: { fallback: unknown; userId?: string }) => {
    return path in fakeStore ? fakeStore[path] : opts.fallback;
  });
  us.setJson = mock(async (path: string, value: unknown) => {
    fakeStore[path] = value;
  });
  us.list = mock(async (prefix: string) => {
    const paths = Object.keys(fakeStore).filter(p => p.startsWith(prefix));
    return paths;
  });
  us.delete = mock(async (path: string) => {
    delete fakeStore[path];
  });
  us.exists = mock(async (path: string) => {
    return path in fakeStore;
  });
}

beforeEach(() => {
  fakeStore = {};
  busClear();
  __resetQueues();
  patchSpindleUserStorage();
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]): { api: DbAPI; deps: APIBuildDeps } {
  const deps = createTestDeps(overrides);
  return { api: buildDbAPI(deps), deps };
}

// ─── collection() — path resolution + scope errors ──────────────────────────

describe('api.db.collection — scope resolution', () => {
  test('default scope is "script"', async () => {
    const { api } = buildApi();
    const events: unknown[] = [];
    busOn('ls:collection:created', p => events.push(p), 'listener');

    await api.collection('rolls');
    expect(events).toHaveLength(1);
    expect((events[0] as any).scope).toBe('script');
    expect((events[0] as any).path).toBe('db/scripts/test-script-id/rolls.json');
  });

  test('scope: "character" bakes characterId into the path', async () => {
    const { api } = buildApi();
    const events: unknown[] = [];
    busOn('ls:collection:created', p => events.push(p), 'listener');

    await api.collection('rolls', { scope: 'character' });
    expect((events[0] as any).path).toBe('db/characters/test-char-id/test-script-id/rolls.json');
  });

  test('scope: "chat" bakes chatId into the path', async () => {
    const { api } = buildApi();
    const events: unknown[] = [];
    busOn('ls:collection:created', p => events.push(p), 'listener');

    await api.collection('events', { scope: 'chat' });
    expect((events[0] as any).path).toBe('db/chats/test-chat-id/test-script-id/events.json');
  });

  test('throws when scope: "chat" without active chat', async () => {
    const { api } = buildApi({ activeContext: { chatId: null, characterId: 'c1' } });
    await expect(api.collection('events', { scope: 'chat' }))
      .rejects.toThrow(/scope="chat" requires an active chat/);
  });

  test('throws when scope: "character" without active character', async () => {
    const { api } = buildApi({ activeContext: { chatId: 'c1', characterId: null } });
    await expect(api.collection('rolls', { scope: 'character' }))
      .rejects.toThrow(/scope="character" requires an active character/);
  });

  test('throws on invalid collection name', async () => {
    const { api } = buildApi();
    await expect(api.collection('../evil')).rejects.toThrow(/forbidden path characters/);
  });
});

// ─── Basic CRUD via the public API ───────────────────────────────────────────

describe('api.db.collection — CRUD round-trips', () => {
  test('insert → find returns the record with id + timestamps', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');

    const inserted = await col.insert({ total: 18 } as DbRecord);
    expect(inserted.id).toBeDefined();
    expect(inserted.createdAt).toBeDefined();
    expect(inserted.updatedAt).toBe(inserted.createdAt);
    expect(inserted.total).toBe(18);

    const all = await col.find();
    expect(all).toHaveLength(1);
    expect(all[0]!.id).toBe(inserted.id);
  });

  test('update matched records and bump updatedAt', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    const { id } = await col.insert({ tier: 'easy' } as DbRecord);

    const count = await col.update({ tier: 'easy' }, { tier: 'moderate' } as DbRecord);
    expect(count).toBe(1);
    const found = await col.findOne({ id });
    expect(found!.tier).toBe('moderate');
  });

  test('delete matched records', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ tier: 'hard' } as DbRecord);
    await col.insert({ tier: 'hard' } as DbRecord);
    await col.insert({ tier: 'easy' } as DbRecord);

    const count = await col.delete({ tier: 'hard' });
    expect(count).toBe(2);
    expect(await col.count()).toBe(1);
  });

  test('clear empties the collection', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ x: 1 } as DbRecord);
    await col.insert({ x: 2 } as DbRecord);

    await col.clear();
    expect(await col.find()).toEqual([]);
  });

  test('query runs a jsonquery against the collection', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ margin: 3 } as DbRecord);
    await col.insert({ margin: -1 } as DbRecord);
    await col.insert({ margin: 5 } as DbRecord);

    const positives = await col.query<number>('filter(.margin > 0) | size()');
    expect(positives).toBe(2);
  });
});

// ─── Broadcast events ────────────────────────────────────────────────────────

describe('api.db — broadcast events', () => {
  test('insert fires ls:collection:inserted with the record', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    const events: any[] = [];
    busOn('ls:collection:inserted', p => events.push(p), 'listener');

    const inserted = await col.insert({ x: 1 } as DbRecord);
    expect(events).toHaveLength(1);
    expect(events[0].name).toBe('rolls');
    expect(events[0].scope).toBe('script');
    expect(events[0].scriptId).toBe('test-script-id');
    expect(events[0].id).toBe(inserted.id);
    expect(events[0].record.x).toBe(1);
  });

  test('update fires ls:collection:updated with filterKind="object" when matched', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ tier: 'hard' } as DbRecord);

    const events: any[] = [];
    busOn('ls:collection:updated', p => events.push(p), 'listener');

    await col.update({ tier: 'hard' }, { tier: 'moderate' } as DbRecord);
    expect(events).toHaveLength(1);
    expect(events[0].count).toBe(1);
    expect(events[0].filterKind).toBe('object');
  });

  test('update does NOT fire ls:collection:updated when no match', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ tier: 'hard' } as DbRecord);

    const events: unknown[] = [];
    busOn('ls:collection:updated', p => events.push(p), 'listener');

    await col.update({ tier: 'nonexistent' }, { tier: 'moderate' } as DbRecord);
    expect(events).toHaveLength(0);
  });

  test('delete fires ls:collection:deleted with filterKind="fn" for function filters', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ x: 5 } as DbRecord);

    const events: any[] = [];
    busOn('ls:collection:deleted', p => events.push(p), 'listener');

    await col.delete((r: DbRecord) => (r as any).x === 5);
    expect(events).toHaveLength(1);
    expect(events[0].filterKind).toBe('fn');
  });

  test('clear fires ls:collection:deleted with count=-1 and filterKind="all"', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ x: 1 } as DbRecord);

    const events: any[] = [];
    busOn('ls:collection:deleted', p => events.push(p), 'listener');

    await col.clear();
    expect(events).toHaveLength(1);
    expect(events[0].count).toBe(-1);
    expect(events[0].filterKind).toBe('all');
  });

  test('filterKind is "object" / "fn" / "all" — never leaks the filter itself', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ secret: 'hunter2' } as DbRecord);

    const events: any[] = [];
    busOn('ls:collection:deleted', p => events.push(p), 'listener');

    await col.delete({ secret: 'hunter2' });
    expect(events).toHaveLength(1);
    expect(events[0]).not.toHaveProperty('filter');
    // Payload must not include the filter object (which would leak `secret: 'hunter2'`)
    expect(JSON.stringify(events[0])).not.toInclude('hunter2');
  });
});

// ─── Cross-script ownership isolation ────────────────────────────────────────

describe('api.db — cross-script ownership', () => {
  test('script B cannot see script A\'s script-scoped collection via list()', async () => {
    const { api: apiA } = buildApi({ script: { id: 'script-A' } });
    await (await apiA.collection('rolls')).insert({ x: 1 } as DbRecord);

    const { api: apiB } = buildApi({ script: { id: 'script-B' } });
    expect(await apiB.list()).toEqual([]);
  });

  test('each script sees its own script-scoped collections via list()', async () => {
    const { api: apiA } = buildApi({ script: { id: 'script-A' } });
    await (await apiA.collection('rolls')).insert({ x: 1 } as DbRecord);
    await (await apiA.collection('counters')).insert({ n: 0 } as DbRecord);

    expect((await apiA.list()).sort()).toEqual(['counters', 'rolls']);
  });

  test('character-scoped collections are segregated by scriptId even for same character', async () => {
    const ctx = { chatId: 'c1', characterId: 'char-X' };
    const { api: apiA } = buildApi({ script: { id: 'script-A' }, activeContext: ctx });
    const { api: apiB } = buildApi({ script: { id: 'script-B' }, activeContext: ctx });

    await (await apiA.collection('data', { scope: 'character' })).insert({ tag: 'A' } as DbRecord);
    await (await apiB.collection('data', { scope: 'character' })).insert({ tag: 'B' } as DbRecord);

    const fromA = await (await apiA.collection('data', { scope: 'character' })).find();
    const fromB = await (await apiB.collection('data', { scope: 'character' })).find();

    expect(fromA).toHaveLength(1);
    expect((fromA[0] as any).tag).toBe('A');
    expect(fromB).toHaveLength(1);
    expect((fromB[0] as any).tag).toBe('B');
  });

  test('script B\'s drop() targeting A\'s path does nothing (different resolved path)', async () => {
    const { api: apiA } = buildApi({ script: { id: 'script-A' } });
    await (await apiA.collection('rolls')).insert({ x: 1 } as DbRecord);

    const { api: apiB } = buildApi({ script: { id: 'script-B' } });
    await apiB.drop('rolls');  // no-op — B has no 'rolls' collection

    // A's collection is unchanged.
    const records = await (await apiA.collection('rolls')).find();
    expect(records).toHaveLength(1);
  });
});

// ─── Concurrency via per-path queue ──────────────────────────────────────────

describe('api.db — concurrency', () => {
  test('two parallel inserts on same collection both persist (no race)', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');

    await Promise.all([
      col.insert({ label: 'A' } as DbRecord),
      col.insert({ label: 'B' } as DbRecord),
    ]);

    const all = await col.find();
    expect(all).toHaveLength(2);
    const labels = all.map(r => (r as any).label).sort();
    expect(labels).toEqual(['A', 'B']);
  });

  test('mutations on different collections run concurrently', async () => {
    const { api } = buildApi();
    const a = await api.collection('a');
    const b = await api.collection('b');

    await Promise.all([
      a.insert({ x: 1 } as DbRecord),
      b.insert({ x: 2 } as DbRecord),
    ]);

    expect(await a.count()).toBe(1);
    expect(await b.count()).toBe(1);
  });
});

// ─── drop() ──────────────────────────────────────────────────────────────────

describe('api.db.drop', () => {
  test('removes the collection file', async () => {
    const { api } = buildApi();
    await (await api.collection('rolls')).insert({ x: 1 } as DbRecord);

    await api.drop('rolls');

    // list() no longer returns it
    expect(await api.list()).toEqual([]);
  });

  test('fires ls:collection:dropped with deletedCount', async () => {
    const { api } = buildApi();
    const col = await api.collection('rolls');
    await col.insert({ x: 1 } as DbRecord);
    await col.insert({ x: 2 } as DbRecord);

    const events: any[] = [];
    busOn('ls:collection:dropped', p => events.push(p), 'listener');

    await api.drop('rolls');
    expect(events).toHaveLength(1);
    expect(events[0].name).toBe('rolls');
    expect(events[0].deletedCount).toBe(2);
  });

  test('silently accepts drop of a non-existent collection', async () => {
    const { api } = buildApi();
    await expect(api.drop('never-created')).resolves.toBeUndefined();
  });

  test('throws on invalid collection name', async () => {
    const { api } = buildApi();
    await expect(api.drop('../evil')).rejects.toThrow();
  });
});

// ─── list() ──────────────────────────────────────────────────────────────────

describe('api.db.list', () => {
  test('returns empty array when no collections exist', async () => {
    const { api } = buildApi();
    expect(await api.list()).toEqual([]);
  });

  test('defaults to script scope', async () => {
    const { api } = buildApi();
    await (await api.collection('a')).insert({ x: 1 } as DbRecord);
    await (await api.collection('b', { scope: 'character' })).insert({ x: 2 } as DbRecord);

    // Default script scope sees only 'a', not 'b' (which is character-scoped).
    expect(await api.list()).toEqual(['a']);
  });

  test('character scope lists only character-scoped collections for the active character', async () => {
    const { api } = buildApi();
    await (await api.collection('rolls', { scope: 'character' })).insert({ x: 1 } as DbRecord);
    await (await api.collection('snapshot', { scope: 'character' })).insert({ x: 2 } as DbRecord);

    expect((await api.list('character')).sort()).toEqual(['rolls', 'snapshot']);
  });
});

// ─── insertMany ──────────────────────────────────────────────────────────────

describe('api.db.collection.insertMany', () => {
  test('persists all records in a single file-write', async () => {
    const { api } = buildApi();
    const c = await api.collection('t');

    // Mock setJson counter is on the shared spindle userStorage mock.
    const setJson = (globalThis as any).spindle.userStorage.setJson;
    const before = setJson.mock.calls.length;

    await c.insertMany([
      { label: 'A' } as DbRecord,
      { label: 'B' } as DbRecord,
      { label: 'C' } as DbRecord,
    ]);

    const after = setJson.mock.calls.length;
    expect(after - before).toBe(1); // one persist for the whole batch
    expect(await c.count()).toBe(3);
  });

  test('fires one ls:collection:inserted per record in insertion order', async () => {
    const { api } = buildApi();
    const c = await api.collection('t');

    const events: any[] = [];
    busOn('ls:collection:inserted', p => events.push(p), 'listener');

    const inserted = await c.insertMany([
      { label: 'A' } as DbRecord,
      { label: 'B' } as DbRecord,
      { label: 'C' } as DbRecord,
    ]);

    expect(events).toHaveLength(3);
    // Verify ORDER + payload content
    expect(events.map(e => e.id)).toEqual(inserted.map(r => r.id));
    expect(events.map(e => e.record.label)).toEqual(['A', 'B', 'C']);
    // All events carry the same collection metadata
    for (const e of events) {
      expect(e.name).toBe('t');
      expect(e.scope).toBe('script');
      expect(e.scriptId).toBe('test-script-id');
    }
  });

  test('empty array fires no events and does not persist', async () => {
    const { api } = buildApi();
    const c = await api.collection('t');

    const events: any[] = [];
    busOn('ls:collection:inserted', p => events.push(p), 'listener');

    const setJson = (globalThis as any).spindle.userStorage.setJson;
    const before = setJson.mock.calls.length;

    const result = await c.insertMany([]);

    expect(result).toEqual([]);
    expect(events).toHaveLength(0);
    expect(setJson.mock.calls.length - before).toBe(0);
  });

  test('throws on non-array argument', async () => {
    const { api } = buildApi();
    const c = await api.collection('t');

    await expect((c.insertMany as any)('not-an-array'))
      .rejects.toThrow(/insertMany requires an array/);
  });

  test('parallel insertMany + insert on same collection serialize cleanly', async () => {
    const { api } = buildApi();
    const c = await api.collection('t');

    await Promise.all([
      c.insertMany([{ batch: 1 } as DbRecord, { batch: 1 } as DbRecord]),
      c.insert({ single: true } as DbRecord),
      c.insertMany([{ batch: 2 } as DbRecord]),
    ]);

    expect(await c.count()).toBe(4);
  });
});

// ─── exists ──────────────────────────────────────────────────────────────────

describe('api.db.exists', () => {
  test('returns true after a collection has records', async () => {
    const { api } = buildApi();
    await (await api.collection('rolls')).insert({ x: 1 } as DbRecord);

    expect(await api.exists('rolls')).toBe(true);
  });

  test('returns false for a collection that has never been written', async () => {
    const { api } = buildApi();
    expect(await api.exists('never-created')).toBe(false);
  });

  test('returns false after drop', async () => {
    const { api } = buildApi();
    await (await api.collection('rolls')).insert({ x: 1 } as DbRecord);
    expect(await api.exists('rolls')).toBe(true);

    await api.drop('rolls');
    expect(await api.exists('rolls')).toBe(false);
  });

  test('defaults to script scope when scope omitted', async () => {
    const { api } = buildApi();
    await (await api.collection('rolls', { scope: 'character' })).insert({ x: 1 } as DbRecord);

    // rolls exists in CHARACTER scope, not script scope
    expect(await api.exists('rolls')).toBe(false);
    expect(await api.exists('rolls', 'character')).toBe(true);
  });

  test('throws on invalid collection name', async () => {
    const { api } = buildApi();
    await expect(api.exists('../evil')).rejects.toThrow(/forbidden path characters/);
  });

  test('throws when scope requires context the script lacks', async () => {
    const { api } = buildApi({ activeContext: { chatId: null, characterId: null } });
    await expect(api.exists('foo', 'chat')).rejects.toThrow(/scope="chat" requires an active chat/);
    await expect(api.exists('foo', 'character')).rejects.toThrow(/scope="character" requires an active character/);
  });

  test('ownership: script A cannot see script B\'s collection', async () => {
    const { api: apiA } = buildApi({ script: { id: 'script-A' } });
    await (await apiA.collection('rolls')).insert({ x: 1 } as DbRecord);

    const { api: apiB } = buildApi({ script: { id: 'script-B' } });
    expect(await apiB.exists('rolls')).toBe(false);
  });
});
