import { describe, test, expect, beforeEach, mock } from 'bun:test';
import { CollectionStore } from '../../src/storage/collection-store.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';

interface Item {
  id: string;
  name: string;
  value: number;
}

let adapter: InMemoryStorageAdapter;
let store: CollectionStore<Item>;

beforeEach(() => {
  adapter = new InMemoryStorageAdapter();
  store = new CollectionStore<Item>('items.json', adapter, () => 'user-1');
});

// ─── load ────────────────────────────────────────────────────────────────────

describe('load', () => {
  test('loads empty array from storage when no data exists', async () => {
    await store.load();
    expect(store.getAll()).toEqual([]);
    expect(store.isLoaded).toBe(true);
  });

  test('loads existing data from storage', async () => {
    await adapter.setJson('items.json', [{ id: '1', name: 'a', value: 10 }], { userId: 'user-1' });
    await store.load();
    expect(store.getAll()).toHaveLength(1);
    expect(store.getAll()[0]!.name).toBe('a');
  });

  test('handles non-array stored data gracefully (falls back to empty)', async () => {
    await adapter.setJson('items.json', 'not-an-array', { userId: 'user-1' });
    await store.load();
    expect(store.getAll()).toEqual([]);
  });
});

// ─── getAll / getById / size ─────────────────────────────────────────────────

describe('read operations', () => {
  test('getAll returns a copy (mutations do not affect internal state)', async () => {
    await store.load();
    await store.create({ name: 'a', value: 1 });
    const all = store.getAll();
    all.pop();
    expect(store.getAll()).toHaveLength(1);
  });

  test('getById returns the item or null', async () => {
    await store.load();
    const created = await store.create({ name: 'a', value: 1 });
    expect(store.getById(created.id)).toBeDefined();
    expect(store.getById(created.id)!.name).toBe('a');
    expect(store.getById('nonexistent')).toBeNull();
  });

  test('size reflects the item count', async () => {
    await store.load();
    expect(store.size).toBe(0);
    await store.create({ name: 'a', value: 1 });
    expect(store.size).toBe(1);
  });
});

// ─── create ──────────────────────────────────────────────────────────────────

describe('create', () => {
  test('creates an item with auto-generated id', async () => {
    await store.load();
    const item = await store.create({ name: 'test', value: 42 });
    expect(item.id).toBeDefined();
    expect(item.name).toBe('test');
    expect(item.value).toBe(42);
    expect(store.size).toBe(1);
  });

  test('accepts a caller-provided id', async () => {
    await store.load();
    const item = await store.create({ id: 'custom-id', name: 'test', value: 1 });
    expect(item.id).toBe('custom-id');
  });

  test('persists to storage after create', async () => {
    await store.load();
    await store.create({ name: 'test', value: 1 });
    expect(adapter.has('items.json', 'user-1')).toBe(true);
  });
});

// ─── update ──────────────────────────────────────────────────────────────────

describe('update', () => {
  test('updates an existing item and returns it', async () => {
    await store.load();
    const item = await store.create({ name: 'original', value: 1 });
    const updated = await store.update(item.id, { name: 'modified' });
    expect(updated).not.toBeNull();
    expect(updated!.name).toBe('modified');
    expect(updated!.value).toBe(1); // untouched fields preserved
  });

  test('returns null when the item does not exist', async () => {
    await store.load();
    const result = await store.update('nonexistent', { name: 'nope' });
    expect(result).toBeNull();
  });

  test('persists after update', async () => {
    await store.load();
    const item = await store.create({ name: 'a', value: 1 });
    await store.update(item.id, { value: 99 });
    // Verify by reloading from storage
    const fresh = new CollectionStore<Item>('items.json', adapter, () => 'user-1');
    await fresh.load();
    expect(fresh.getById(item.id)!.value).toBe(99);
  });
});

// ─── delete ──────────────────────────────────────────────────────────────────

describe('delete', () => {
  test('deletes an existing item and returns true', async () => {
    await store.load();
    const item = await store.create({ name: 'a', value: 1 });
    expect(await store.delete(item.id)).toBe(true);
    expect(store.size).toBe(0);
  });

  test('returns false when the item does not exist', async () => {
    await store.load();
    expect(await store.delete('nonexistent')).toBe(false);
  });
});

// ─── subscribe ───────────────────────────────────────────────────────────────

describe('subscribe', () => {
  test('subscriber is called on create, update, and delete', async () => {
    await store.load();
    const sub = mock(() => {});
    store.subscribe(sub);

    const item = await store.create({ name: 'a', value: 1 });
    expect(sub).toHaveBeenCalledTimes(1);

    await store.update(item.id, { value: 2 });
    expect(sub).toHaveBeenCalledTimes(2);

    await store.delete(item.id);
    expect(sub).toHaveBeenCalledTimes(3);
  });

  test('unsubscribe stops future notifications', async () => {
    await store.load();
    const sub = mock(() => {});
    const unsub = store.subscribe(sub);

    await store.create({ name: 'a', value: 1 });
    expect(sub).toHaveBeenCalledTimes(1);

    unsub();
    await store.create({ name: 'b', value: 2 });
    expect(sub).toHaveBeenCalledTimes(1); // no additional call
  });

  test('subscriber error does not break the store', async () => {
    await store.load();
    store.subscribe(() => { throw new Error('bad subscriber'); });
    // Should not throw
    await expect(store.create({ name: 'a', value: 1 })).resolves.toBeDefined();
  });
});
