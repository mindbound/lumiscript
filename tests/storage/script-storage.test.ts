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

  test('a duplicate does NOT inherit the original card-bundle identity (#12)', async () => {
    await storage.load();
    const original = await storage.store.create({
      id: 'orig-1', name: 'Bundled', code: 'x', enabled: false, allowDangerous: false,
      type: 'trigger', createdAt: 1, updatedAt: 1,
      bundledFrom: { bundleCardId: 'card-1', bundleId: 'mindbound.dice', sourceHash: 'h' },
    });
    const copy = await storage.duplicateScript(original.id);
    expect(copy).not.toBeNull();
    expect(copy!.bundledFrom).toBeUndefined();                        // copy is a fresh local script
    expect(storage.getScript('orig-1')!.bundledFrom?.bundleId).toBe('mindbound.dice'); // original untouched
  });
});

// ─── importScripts ──────────────────────────────────────────────────────────

describe('importScripts', () => {
  test('imports an array of entries and returns created scripts', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'Script A', code: 'console.log("a")', type: 'trigger' },
      { name: 'Script B', code: 'console.log("b")', type: 'library' },
    ]);

    expect(results).toHaveLength(2);
    expect(storage.getScripts()).toHaveLength(2);
    expect(results[0]!.name).toBe('Script A');
    expect(results[1]!.name).toBe('Script B');
  });

  test('forces enabled to false on all imported scripts', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'Dangerous', code: '', type: 'trigger' },
    ]);
    expect(results[0]!.enabled).toBe(false);
  });

  test('forces allowDangerous to false on all imported scripts', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'Sneaky', code: '', type: 'trigger' },
    ]);
    expect(results[0]!.allowDangerous).toBe(false);
  });

  test('generates fresh UUIDs (not from input)', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'A', code: '', type: 'trigger' },
      { name: 'B', code: '', type: 'trigger' },
    ]);
    // Each script gets a unique ID
    expect(results[0]!.id).toBeDefined();
    expect(results[1]!.id).toBeDefined();
    expect(results[0]!.id).not.toBe(results[1]!.id);
  });

  test('sets fresh timestamps', async () => {
    await storage.load();
    const before = Date.now();
    const results = await storage.importScripts([
      { name: 'Timestamped', code: '', type: 'trigger' },
    ]);
    expect(results[0]!.createdAt).toBeGreaterThanOrEqual(before);
    expect(results[0]!.updatedAt).toBeGreaterThanOrEqual(before);
  });

  test('deduplicates names against existing scripts', async () => {
    await storage.load();
    await storage.createScript('Existing');
    const results = await storage.importScripts([
      { name: 'Existing', code: '', type: 'trigger' },
    ]);
    expect(results[0]!.name).toBe('Existing (2)');
  });

  test('deduplicates names within the import batch', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'Same', code: 'a', type: 'trigger' },
      { name: 'Same', code: 'b', type: 'trigger' },
    ]);
    expect(results[0]!.name).toBe('Same');
    expect(results[1]!.name).toBe('Same (2)');
  });

  test('validates type — invalid value falls back to trigger', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'Bad Type', code: '', type: 'invalid' as any },
    ]);
    expect(results[0]!.type).toBe('trigger');
  });

  test('preserves optional fields when present', async () => {
    await storage.load();
    const results = await storage.importScripts([
      {
        name: 'Full',
        code: 'api.chat.sendMessage("hi")',
        type: 'trigger',
        triggers: ['MESSAGE_SENT'],
        bindings: [{ type: 'character', characterId: 'abc', displayName: 'Test' }],
        folder: 'Utils',
        metadata: { author: 'Someone', version: '1.0.0' },
      },
    ]);
    expect(results[0]!.triggers).toEqual(['MESSAGE_SENT']);
    expect(results[0]!.bindings).toEqual([{ type: 'character', characterId: 'abc', displayName: 'Test' }]);
    expect(results[0]!.folder).toBe('Utils');
    expect(results[0]!.metadata?.author).toBe('Someone');
  });

  test('defaults optional arrays to empty when omitted', async () => {
    await storage.load();
    const results = await storage.importScripts([
      { name: 'Minimal', code: '', type: 'trigger' },
    ]);
    expect(results[0]!.bindings).toEqual([]);
    expect(results[0]!.triggers).toEqual([]);
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
