import { describe, test, expect, beforeEach } from 'bun:test';
import { SettingsStore } from '../../src/storage/settings-store.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';

interface TestSettings {
  enabled: boolean;
  threshold: number;
  label: string;
}

const DEFAULTS: TestSettings = {
  enabled: true,
  threshold: 10,
  label: 'default',
};

let adapter: InMemoryStorageAdapter;
let store: SettingsStore<TestSettings>;

beforeEach(() => {
  adapter = new InMemoryStorageAdapter();
  store = new SettingsStore<TestSettings>('settings.json', adapter, () => 'user-1', DEFAULTS);
});

// ─── load ────────────────────────────────────────────────────────────────────

describe('load', () => {
  test('loads defaults when no data exists in storage', async () => {
    await store.load();
    expect(store.get()).toEqual(DEFAULTS);
    expect(store.isLoaded).toBe(true);
  });

  test('merges stored values over defaults', async () => {
    await adapter.setJson('settings.json', { threshold: 99 }, { userId: 'user-1' });
    await store.load();
    expect(store.get().threshold).toBe(99);
    expect(store.get().enabled).toBe(true);   // default preserved
    expect(store.get().label).toBe('default'); // default preserved
  });

  test('new keys added in code get their default when loading old stored data', async () => {
    // Simulate old stored data that lacks the 'label' field
    await adapter.setJson('settings.json', { enabled: false, threshold: 5 }, { userId: 'user-1' });
    await store.load();
    expect(store.get().label).toBe('default'); // new field gets default
    expect(store.get().enabled).toBe(false);   // stored value preserved
  });
});

// ─── get / getField ──────────────────────────────────────────────────────────

describe('get', () => {
  test('returns a copy of the data', async () => {
    await store.load();
    const copy = store.get();
    copy.enabled = false;
    expect(store.get().enabled).toBe(true); // internal state unaffected
  });
});

describe('getField', () => {
  test('returns a specific field value', async () => {
    await store.load();
    expect(store.getField('threshold')).toBe(10);
    expect(store.getField('enabled')).toBe(true);
  });
});

// ─── update ──────────────────────────────────────────────────────────────────

describe('update', () => {
  test('patches the settings and persists', async () => {
    await store.load();
    await store.update({ threshold: 42 });
    expect(store.get().threshold).toBe(42);
    expect(store.get().enabled).toBe(true); // other fields untouched
  });

  test('persists to storage after update', async () => {
    await store.load();
    await store.update({ label: 'updated' });

    // Verify by reloading from storage
    const fresh = new SettingsStore<TestSettings>('settings.json', adapter, () => 'user-1', DEFAULTS);
    await fresh.load();
    expect(fresh.get().label).toBe('updated');
  });
});

// ─── flush ───────────────────────────────────────────────────────────────────

describe('flush', () => {
  test('saves current in-memory state to storage', async () => {
    await store.load();
    // Mutate via update then verify flush writes the same state
    await store.update({ enabled: false });
    await store.flush();

    const fresh = new SettingsStore<TestSettings>('settings.json', adapter, () => 'user-1', DEFAULTS);
    await fresh.load();
    expect(fresh.get().enabled).toBe(false);
  });
});
