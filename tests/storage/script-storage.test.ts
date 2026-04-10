import { describe, test, expect, beforeEach } from 'bun:test';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';

let adapter: InMemoryStorageAdapter;
let storage: ScriptStorage;

beforeEach(() => {
  adapter = new InMemoryStorageAdapter();
  storage = new ScriptStorage(adapter, () => 'user-1');
});

// ─── createScript ────────────────────────────────────────────────────────────

describe('createScript', () => {
  test('creates a trigger script with sensible defaults', async () => {
    await storage.load();
    const script = await storage.createScript('My Script');

    expect(script.name).toBe('My Script');
    expect(script.type).toBe('trigger');
    expect(script.enabled).toBe(true);
    expect(script.allowDangerous).toBe(false);
    expect(script.code).toBe('');
    expect(script.bindings).toEqual([]);
    expect(script.triggers).toEqual([]);
    expect(script.id).toBeDefined();
  });

  test('creates a library script when type is specified', async () => {
    await storage.load();
    const script = await storage.createScript('My Lib', 'library');
    expect(script.type).toBe('library');
  });

  test('auto-deduplicates name if a script with the same name exists', async () => {
    await storage.load();
    await storage.createScript('Script');
    const second = await storage.createScript('Script');
    expect(second.name).toBe('Script (2)');
  });

  test('increments deduplication counter', async () => {
    await storage.load();
    await storage.createScript('Script');
    await storage.createScript('Script');   // → Script (2)
    const third = await storage.createScript('Script');
    expect(third.name).toBe('Script (3)');
  });
});

// ─── read operations ─────────────────────────────────────────────────────────

describe('read operations', () => {
  test('getScripts returns all scripts', async () => {
    await storage.load();
    await storage.createScript('A');
    await storage.createScript('B');
    expect(storage.getScripts()).toHaveLength(2);
  });

  test('getScript returns a script by id or null', async () => {
    await storage.load();
    const script = await storage.createScript('A');
    expect(storage.getScript(script.id)).toBeDefined();
    expect(storage.getScript('nonexistent')).toBeNull();
  });

  test('getByName returns a script by name (O(1) via name index)', async () => {
    await storage.load();
    await storage.createScript('Alpha');
    expect(storage.getByName('Alpha')).toBeDefined();
    expect(storage.getByName('Alpha')!.name).toBe('Alpha');
    expect(storage.getByName('Nonexistent')).toBeUndefined();
  });

  test('getTriggerScripts filters by type', async () => {
    await storage.load();
    await storage.createScript('Trigger', 'trigger');
    await storage.createScript('Library', 'library');
    expect(storage.getTriggerScripts()).toHaveLength(1);
    expect(storage.getTriggerScripts()[0]!.type).toBe('trigger');
  });

  test('getLibraryScripts filters by type', async () => {
    await storage.load();
    await storage.createScript('Trigger', 'trigger');
    await storage.createScript('Library', 'library');
    expect(storage.getLibraryScripts()).toHaveLength(1);
    expect(storage.getLibraryScripts()[0]!.type).toBe('library');
  });

  test('getEnabledTriggerScripts filters by type + enabled', async () => {
    await storage.load();
    const s1 = await storage.createScript('Enabled Trigger', 'trigger');
    const s2 = await storage.createScript('Disabled Trigger', 'trigger');
    await storage.updateScript(s2.id, { enabled: false });

    expect(storage.getEnabledTriggerScripts()).toHaveLength(1);
    expect(storage.getEnabledTriggerScripts()[0]!.id).toBe(s1.id);
  });
});

// ─── updateScript ────────────────────────────────────────────────────────────

describe('updateScript', () => {
  test('updates fields and sets updatedAt', async () => {
    await storage.load();
    const script = await storage.createScript('Original');
    const before = script.updatedAt;

    // Small delay to ensure updatedAt changes
    await new Promise(r => setTimeout(r, 5));
    const updated = await storage.updateScript(script.id, { name: 'Modified' });

    expect(updated).not.toBeNull();
    expect(updated!.name).toBe('Modified');
    expect(updated!.updatedAt).toBeGreaterThanOrEqual(before);
  });

  test('returns null for nonexistent id', async () => {
    await storage.load();
    expect(await storage.updateScript('nope', { name: 'x' })).toBeNull();
  });

  test('name index is updated after rename', async () => {
    await storage.load();
    const script = await storage.createScript('OldName');
    await storage.updateScript(script.id, { name: 'NewName' });
    expect(storage.getByName('NewName')).toBeDefined();
    expect(storage.getByName('OldName')).toBeUndefined();
  });
});

// ─── deleteScript ────────────────────────────────────────────────────────────

describe('deleteScript', () => {
  test('deletes a script and returns true', async () => {
    await storage.load();
    const script = await storage.createScript('Delete Me');
    expect(await storage.deleteScript(script.id)).toBe(true);
    expect(storage.getScripts()).toHaveLength(0);
  });

  test('name index is updated after delete', async () => {
    await storage.load();
    const script = await storage.createScript('Gone');
    await storage.deleteScript(script.id);
    expect(storage.getByName('Gone')).toBeUndefined();
  });
});

// ─── duplicateScript ─────────────────────────────────────────────────────────

describe('duplicateScript', () => {
  test('creates a copy with a new id and incremented name', async () => {
    await storage.load();
    const original = await storage.createScript('My Script');
    const copy = await storage.duplicateScript(original.id);

    expect(copy).not.toBeNull();
    expect(copy!.id).not.toBe(original.id);
    expect(copy!.name).toBe('My Script (copy)');
    expect(copy!.code).toBe(original.code);
  });

  test('returns null for nonexistent id', async () => {
    await storage.load();
    expect(await storage.duplicateScript('nonexistent')).toBeNull();
  });

  test('deduplicates the copy name if it already exists', async () => {
    await storage.load();
    const original = await storage.createScript('My Script');
    await storage.duplicateScript(original.id); // → My Script (copy)
    const copy2 = await storage.duplicateScript(original.id);
    expect(copy2!.name).toBe('My Script (copy) (2)');
  });
});

// ─── getUniqueName ───────────────────────────────────────────────────────────

describe('getUniqueName', () => {
  test('returns the base name if no collision', async () => {
    await storage.load();
    expect(await storage.getUniqueName('New Script')).toBe('New Script');
  });

  test('appends (2) if base name exists', async () => {
    await storage.load();
    await storage.createScript('Script');
    expect(await storage.getUniqueName('Script')).toBe('Script (2)');
  });
});
