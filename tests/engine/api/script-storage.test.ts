/**
 * v1.0.0-rc.6 — canonical-side tests for `api.scriptStorage`.
 *
 * `script-storage.ts` is a module-scope `Map<scriptId, Map<key, value>>`
 * with an attached `ScriptStorageAPI` factory that scopes operations to
 * the building script. Tests exercise: basic CRUD semantics, broadcast
 * emissions on every mutation that actually mutates, per-script
 * isolation, size cap enforcement, lifecycle clear via
 * `clearScriptStorageForScript`, and the test-only seams.
 *
 * No spindle.userStorage stub needed — scriptStorage is purely in-memory.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  buildScriptStorageAPI,
  clearScriptStorageForScript,
  enumerateAllScriptStorage,
  inspectScriptStorage,
  deleteScriptStorageEntryAsAdmin,
  clearScriptStorageAsAdmin,
  __resetScriptStorageForTests,
  __getScriptStorageEntryForTests,
} from '../../../src/engine/api/script-storage.js';
import { on as busOn, clearAll as busClear } from '../../../src/engine/broadcast-bus.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import type { ScriptStorageAPI } from '../../../src/types/script.js';

function buildApi(scriptId = 'test-script-id'): ScriptStorageAPI {
  return buildScriptStorageAPI(createTestDeps({ script: { id: scriptId } }));
}

beforeEach(() => {
  __resetScriptStorageForTests();
  busClear();
});

// ─── Basic CRUD ─────────────────────────────────────────────────────────────

describe('api.scriptStorage — basic CRUD', () => {
  test('get returns undefined for a missing key (no default)', async () => {
    const api = buildApi();
    expect(await api.get('missing')).toBeUndefined();
  });

  test('get returns the default value for a missing key', async () => {
    const api = buildApi();
    expect(await api.get('missing', 'fallback')).toBe('fallback');
    expect(await api.get('missing', 0)).toBe(0);
    expect(await api.get('missing', null)).toBe(null);
  });

  test('set + get roundtrip for primitive values', async () => {
    const api = buildApi();
    await api.set('s', 'string');
    await api.set('n', 42);
    await api.set('b', true);
    await api.set('z', null);
    expect(await api.get<string>('s')).toBe('string');
    expect(await api.get<number>('n')).toBe(42);
    expect(await api.get<boolean>('b')).toBe(true);
    expect(await api.get<null>('z')).toBe(null);
  });

  test('set + get roundtrip for structured values', async () => {
    const api = buildApi();
    const obj = { a: 1, b: [2, 3], c: { nested: true } };
    await api.set('o', obj);
    expect(await api.get<typeof obj>('o')).toEqual(obj);

    const arr = [1, 'two', { three: 3 }, null];
    await api.set('a', arr);
    expect(await api.get<typeof arr>('a')).toEqual(arr);
  });

  test('set overwrites a prior value at the same key', async () => {
    const api = buildApi();
    await api.set('k', 1);
    expect(await api.get<number>('k')).toBe(1);
    await api.set('k', 2);
    expect(await api.get<number>('k')).toBe(2);
  });

  test('has returns true for existing keys, false for missing', async () => {
    const api = buildApi();
    expect(await api.has('k')).toBe(false);
    await api.set('k', 'v');
    expect(await api.has('k')).toBe(true);
  });

  test('has returns true for keys with falsy values', async () => {
    const api = buildApi();
    await api.set('zero', 0);
    await api.set('empty', '');
    await api.set('null', null);
    await api.set('false', false);
    expect(await api.has('zero')).toBe(true);
    expect(await api.has('empty')).toBe(true);
    expect(await api.has('null')).toBe(true);
    expect(await api.has('false')).toBe(true);
  });

  test('delete returns true for a present key, false for missing', async () => {
    const api = buildApi();
    await api.set('k', 'v');
    expect(await api.delete('k')).toBe(true);
    expect(await api.has('k')).toBe(false);
    expect(await api.delete('k')).toBe(false);
    expect(await api.delete('never-set')).toBe(false);
  });

  test('clear removes all keys', async () => {
    const api = buildApi();
    await api.set('a', 1);
    await api.set('b', 2);
    await api.set('c', 3);
    await api.clear();
    expect(await api.has('a')).toBe(false);
    expect(await api.has('b')).toBe(false);
    expect(await api.has('c')).toBe(false);
    expect(await api.keys()).toEqual([]);
  });

  test('keys returns insertion order', async () => {
    const api = buildApi();
    await api.set('first', 1);
    await api.set('second', 2);
    await api.set('third', 3);
    expect(await api.keys()).toEqual(['first', 'second', 'third']);
  });

  test('keys returns [] for a script with no entries', async () => {
    const api = buildApi();
    expect(await api.keys()).toEqual([]);
  });
});

// ─── Broadcast emissions ────────────────────────────────────────────────────

describe('api.scriptStorage — broadcasts', () => {
  test('set fires ls:scriptStorage:set with { scriptId, key, value }', async () => {
    const api = buildApi('script-A');
    const events: unknown[] = [];
    busOn('ls:scriptStorage:set', p => events.push(p), 'listener');

    await api.set('foo', { bar: 1 });
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({ scriptId: 'script-A', key: 'foo', value: { bar: 1 } });
  });

  test('delete fires ls:scriptStorage:delete only when entry existed', async () => {
    const api = buildApi('script-A');
    const events: unknown[] = [];
    busOn('ls:scriptStorage:delete', p => events.push(p), 'listener');

    // No entry → no broadcast.
    await api.delete('never-set');
    expect(events).toHaveLength(0);

    // After set → delete fires.
    await api.set('k', 'v');
    await api.delete('k');
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({ scriptId: 'script-A', key: 'k' });

    // Re-delete same key (no-op) → no additional broadcast.
    await api.delete('k');
    expect(events).toHaveLength(1);
  });

  test('clear fires ls:scriptStorage:clear only when entries existed', async () => {
    const api = buildApi('script-A');
    const events: unknown[] = [];
    busOn('ls:scriptStorage:clear', p => events.push(p), 'listener');

    // No entries → no broadcast.
    await api.clear();
    expect(events).toHaveLength(0);

    // After set → clear fires.
    await api.set('k', 'v');
    await api.clear();
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({ scriptId: 'script-A' });

    // Re-clear empty storage → no additional broadcast.
    await api.clear();
    expect(events).toHaveLength(1);
  });

  test('clearScriptStorageForScript fires clear broadcast if script had entries', () => {
    const api = buildApi('script-A');
    const events: unknown[] = [];
    busOn('ls:scriptStorage:clear', p => events.push(p), 'listener');

    // Prime with an entry, then call the teardown hook.
    void api.set('k', 'v');
    clearScriptStorageForScript('script-A');
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({ scriptId: 'script-A' });

    // No-op on a script with no entries (or never seen).
    clearScriptStorageForScript('never-existed');
    expect(events).toHaveLength(1);
  });
});

// ─── Cross-script isolation ─────────────────────────────────────────────────

describe('api.scriptStorage — cross-script isolation', () => {
  test('script A writes do not appear in script B reads', async () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    await apiA.set('shared-key', 'from-A');
    expect(await apiB.get('shared-key')).toBeUndefined();
    expect(await apiB.has('shared-key')).toBe(false);
    expect(await apiB.keys()).toEqual([]);
  });

  test('script A delete does not affect script B value at same key', async () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    await apiA.set('shared-key', 'A');
    await apiB.set('shared-key', 'B');
    await apiA.delete('shared-key');
    expect(await apiA.has('shared-key')).toBe(false);
    expect(await apiB.get<string>('shared-key')).toBe('B');
  });

  test('script A clear does not affect script B', async () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    await apiA.set('k', 1);
    await apiB.set('k', 2);
    await apiA.clear();
    expect(await apiA.keys()).toEqual([]);
    expect(await apiB.get<number>('k')).toBe(2);
  });

  test('clearScriptStorageForScript drops only the targeted script\'s slot', () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    void apiA.set('a', 1);
    void apiB.set('b', 2);
    clearScriptStorageForScript('script-A');
    expect(__getScriptStorageEntryForTests('script-A', 'a').has).toBe(false);
    expect(__getScriptStorageEntryForTests('script-B', 'b').has).toBe(true);
    expect(__getScriptStorageEntryForTests('script-B', 'b').value).toBe(2);
  });
});

// ─── Size cap enforcement ───────────────────────────────────────────────────

describe('api.scriptStorage — size cap', () => {
  test('set throws when the write would exceed the 1 MB cap', async () => {
    const api = buildApi();
    // Build a value that's just over 1 MB serialised. ~1.05 MB string of 'x'.
    const oversized = 'x'.repeat(1_100_000);
    await expect(api.set('big', oversized))
      .rejects.toThrow(/capacity exceeded/);
  });

  test('set succeeds when the write fits within the cap', async () => {
    const api = buildApi();
    // ~500 KB string — well under 1 MB.
    const fits = 'x'.repeat(500_000);
    await expect(api.set('medium', fits)).resolves.toBeUndefined();
    expect(await api.get<string>('medium')).toBe(fits);
  });

  test('cap accounts for the running total across all keys, not just the new write', async () => {
    const api = buildApi();
    // Two writes of ~600 KB each — first succeeds, second pushes over the cap.
    const chunk = 'y'.repeat(600_000);
    await api.set('first', chunk);
    await expect(api.set('second', chunk)).rejects.toThrow(/capacity exceeded/);
    // First write survives the rejected second.
    expect(await api.get<string>('first')).toBe(chunk);
    expect(await api.has('second')).toBe(false);
  });

  test('cap error message includes the offending key and the cap value', async () => {
    const api = buildApi();
    const oversized = 'z'.repeat(1_100_000);
    await expect(api.set('big-payload', oversized))
      .rejects.toThrow(/big-payload/);
    await expect(api.set('big-payload', oversized))
      .rejects.toThrow(/1048576/);  // 1 MB in bytes
  });

  test('cap error suggests api.variables / api.db migration', async () => {
    const api = buildApi();
    const oversized = 'q'.repeat(1_100_000);
    await expect(api.set('big', oversized))
      .rejects.toThrow(/api\.variables/);
    await expect(api.set('big', oversized))
      .rejects.toThrow(/api\.db/);
  });
});

// ─── Lifecycle teardown ─────────────────────────────────────────────────────

describe('api.scriptStorage — lifecycle', () => {
  test('clearScriptStorageForScript wipes the script\'s entries', async () => {
    const api = buildApi('script-A');
    await api.set('a', 1);
    await api.set('b', 2);
    clearScriptStorageForScript('script-A');
    expect(await api.has('a')).toBe(false);
    expect(await api.has('b')).toBe(false);
    expect(await api.keys()).toEqual([]);
  });

  test('clearScriptStorageForScript is idempotent on a missing script', () => {
    expect(() => clearScriptStorageForScript('never-existed')).not.toThrow();
    // And calling it twice is also fine.
    expect(() => clearScriptStorageForScript('never-existed')).not.toThrow();
  });

  test('after clearScriptStorageForScript, a fresh write rebuilds the slot', async () => {
    const api = buildApi('script-A');
    await api.set('k', 'first');
    clearScriptStorageForScript('script-A');
    await api.set('k', 'second');
    expect(await api.get<string>('k')).toBe('second');
  });

  test('__resetScriptStorageForTests wipes ALL scripts', async () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    await apiA.set('a', 1);
    await apiB.set('b', 2);
    __resetScriptStorageForTests();
    expect(await apiA.has('a')).toBe(false);
    expect(await apiB.has('b')).toBe(false);
  });
});

// ─── Test-only seam ─────────────────────────────────────────────────────────

describe('api.scriptStorage — __getScriptStorageEntryForTests', () => {
  test('returns { has: true, value } for a present key', async () => {
    const api = buildApi('script-A');
    await api.set('k', 'v');
    expect(__getScriptStorageEntryForTests('script-A', 'k')).toEqual({ has: true, value: 'v' });
  });

  test('returns { has: false, value: undefined } for a missing key', () => {
    expect(__getScriptStorageEntryForTests('script-A', 'never-set')).toEqual({ has: false, value: undefined });
  });

  test('returns { has: false, value: undefined } for a script with no entries', () => {
    expect(__getScriptStorageEntryForTests('never-existed', 'k')).toEqual({ has: false, value: undefined });
  });
});

// ─── Admin enumeration (v1.0.0-rc.6 — Storage tab) ──────────────────────────

describe('api.scriptStorage — enumerateAllScriptStorage', () => {
  test('returns [] when no scripts have stored entries', () => {
    expect(enumerateAllScriptStorage()).toEqual([]);
  });

  test('returns one row per script with entries (multi-script case)', async () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    const apiC = buildApi('script-C');
    await apiA.set('k', 1);
    await apiB.set('x', 'one');
    await apiB.set('y', 'two');
    await apiC.set('payload', { nested: true });

    const rows = enumerateAllScriptStorage();
    expect(rows.length).toBe(3);
    const byId = new Map(rows.map(r => [r.scriptId, r]));
    expect(byId.has('script-A')).toBe(true);
    expect(byId.has('script-B')).toBe(true);
    expect(byId.has('script-C')).toBe(true);
  });

  test('excludes scripts that never wrote anything', async () => {
    const apiA = buildApi('script-A');
    buildApi('script-B');  // never writes
    await apiA.set('k', 'v');

    const rows = enumerateAllScriptStorage();
    expect(rows.length).toBe(1);
    expect(rows[0]!.scriptId).toBe('script-A');
  });

  test('excludes scripts that wrote then deleted everything', async () => {
    const api = buildApi('script-A');
    await api.set('k', 'v');
    await api.delete('k');  // drops the outer slot via delete-of-last-entry

    expect(enumerateAllScriptStorage()).toEqual([]);
  });

  test('keyCount matches the script\'s key count', async () => {
    const api = buildApi('script-A');
    await api.set('a', 1);
    await api.set('b', 2);
    await api.set('c', 3);
    const rows = enumerateAllScriptStorage();
    expect(rows[0]!.keyCount).toBe(3);
  });

  test('sizeBytes matches JSON-serialised total of the slot', async () => {
    const api = buildApi('script-A');
    await api.set('foo', 'hello');
    await api.set('bar', 42);
    const rows = enumerateAllScriptStorage();
    // Reconstruct the expected serialisation manually and compare.
    const expected = JSON.stringify({ foo: 'hello', bar: 42 }).length;
    expect(rows[0]!.sizeBytes).toBe(expected);
  });

  test('modifiedAtMs is populated after a set', async () => {
    const before = Date.now();
    const api = buildApi('script-A');
    await api.set('k', 'v');
    const after = Date.now();
    const rows = enumerateAllScriptStorage();
    expect(rows[0]!.modifiedAtMs).toBeGreaterThanOrEqual(before);
    expect(rows[0]!.modifiedAtMs).toBeLessThanOrEqual(after);
  });

  test('modifiedAtMs advances on subsequent mutations', async () => {
    const api = buildApi('script-A');
    await api.set('k1', 'v1');
    const firstStamp = enumerateAllScriptStorage()[0]!.modifiedAtMs;

    // Tight loop — Bun's Date.now() resolution can be 0 here, so we
    // wait briefly to guarantee the second stamp differs.
    await new Promise(resolve => setTimeout(resolve, 2));
    await api.set('k2', 'v2');
    const secondStamp = enumerateAllScriptStorage()[0]!.modifiedAtMs;
    expect(secondStamp).toBeGreaterThanOrEqual(firstStamp);
  });
});

describe('api.scriptStorage — inspectScriptStorage', () => {
  test('returns entries for an existing script', async () => {
    const api = buildApi('script-A');
    await api.set('foo', 1);
    await api.set('bar', 'two');
    const entries = inspectScriptStorage('script-A');
    expect(entries).not.toBeNull();
    expect(entries!.length).toBe(2);
  });

  test('preserves insertion order', async () => {
    const api = buildApi('script-A');
    await api.set('first',  1);
    await api.set('second', 2);
    await api.set('third',  3);
    const entries = inspectScriptStorage('script-A')!;
    expect(entries.map(e => e.key)).toEqual(['first', 'second', 'third']);
    expect(entries.map(e => e.value)).toEqual([1, 2, 3]);
  });

  test('returns null for a script with no entries', () => {
    expect(inspectScriptStorage('never-existed')).toBeNull();
  });

  test('returns null after the script\'s slot is cleared', async () => {
    const api = buildApi('script-A');
    await api.set('k', 'v');
    expect(inspectScriptStorage('script-A')).not.toBeNull();
    await api.clear();
    expect(inspectScriptStorage('script-A')).toBeNull();
  });

  test('returns structured values verbatim (no serialisation pass)', async () => {
    const api = buildApi('script-A');
    const obj = { nested: { deep: [1, 2, 3] }, flag: true };
    await api.set('o', obj);
    const entries = inspectScriptStorage('script-A')!;
    expect(entries[0]!.value).toEqual(obj);
  });
});

describe('api.scriptStorage — deleteScriptStorageEntryAsAdmin', () => {
  test('returns true when the entry existed', async () => {
    const api = buildApi('script-A');
    await api.set('k', 'v');
    expect(deleteScriptStorageEntryAsAdmin('script-A', 'k')).toBe(true);
  });

  test('returns false when the entry didn\'t exist', () => {
    expect(deleteScriptStorageEntryAsAdmin('script-A', 'never-set')).toBe(false);
  });

  test('returns false for a script with no slot at all', () => {
    expect(deleteScriptStorageEntryAsAdmin('never-existed', 'k')).toBe(false);
  });

  test('fires ls:scriptStorage:delete with { scriptId, key }', async () => {
    const api = buildApi('script-A');
    await api.set('k', 'v');
    const events: unknown[] = [];
    busOn('ls:scriptStorage:delete', p => events.push(p), 'listener');

    deleteScriptStorageEntryAsAdmin('script-A', 'k');
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({ scriptId: 'script-A', key: 'k' });
  });

  test('does NOT fire broadcast when entry was absent', () => {
    const events: unknown[] = [];
    busOn('ls:scriptStorage:delete', p => events.push(p), 'listener');
    deleteScriptStorageEntryAsAdmin('never-existed', 'k');
    expect(events).toHaveLength(0);
  });

  test('drops the outer slot when the last entry is removed', async () => {
    const api = buildApi('script-A');
    await api.set('only', 'v');
    deleteScriptStorageEntryAsAdmin('script-A', 'only');
    // Slot is gone — admin enumeration excludes empty slots.
    expect(enumerateAllScriptStorage()).toEqual([]);
    expect(inspectScriptStorage('script-A')).toBeNull();
  });

  test('keeps the outer slot when other entries remain', async () => {
    const api = buildApi('script-A');
    await api.set('a', 1);
    await api.set('b', 2);
    deleteScriptStorageEntryAsAdmin('script-A', 'a');
    // b survives — slot still active.
    expect(await api.get<number>('b')).toBe(2);
    expect(await api.has('a')).toBe(false);
  });

  test('updates modifiedAt on non-final delete (slot survives)', async () => {
    const api = buildApi('script-A');
    await api.set('a', 1);
    await api.set('b', 2);
    const before = enumerateAllScriptStorage()[0]!.modifiedAtMs;
    await new Promise(resolve => setTimeout(resolve, 2));
    deleteScriptStorageEntryAsAdmin('script-A', 'a');
    const after = enumerateAllScriptStorage()[0]!.modifiedAtMs;
    expect(after).toBeGreaterThanOrEqual(before);
  });
});

describe('api.scriptStorage — clearScriptStorageAsAdmin', () => {
  test('delegates to clearScriptStorageForScript (slot drops + broadcast)', async () => {
    const api = buildApi('script-A');
    await api.set('a', 1);
    await api.set('b', 2);
    const events: unknown[] = [];
    busOn('ls:scriptStorage:clear', p => events.push(p), 'listener');

    clearScriptStorageAsAdmin('script-A');
    expect(events).toHaveLength(1);
    expect(events[0]).toEqual({ scriptId: 'script-A' });
    expect(enumerateAllScriptStorage()).toEqual([]);
    expect(inspectScriptStorage('script-A')).toBeNull();
  });

  test('idempotent on a script with no slot (no broadcast)', () => {
    const events: unknown[] = [];
    busOn('ls:scriptStorage:clear', p => events.push(p), 'listener');
    expect(() => clearScriptStorageAsAdmin('never-existed')).not.toThrow();
    expect(events).toHaveLength(0);
  });

  test('does NOT affect other scripts\' slots', async () => {
    const apiA = buildApi('script-A');
    const apiB = buildApi('script-B');
    await apiA.set('a', 1);
    await apiB.set('b', 2);
    clearScriptStorageAsAdmin('script-A');
    expect(inspectScriptStorage('script-A')).toBeNull();
    expect(inspectScriptStorage('script-B')).not.toBeNull();
    expect(await apiB.get<number>('b')).toBe(2);
  });
});
