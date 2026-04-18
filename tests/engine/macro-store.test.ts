/**
 * macro-store tests. Structurally mirrors tool-store.test.ts, with added
 * coverage for:
 *   - push-mode vs pull-mode entry shape
 *   - reserved-name rejection (LS-internal macro names)
 *   - recordValue: push-mode OK, pull-mode throws, unknown name silent
 */

import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  addMacro,
  removeMacro,
  removeByName,
  clearByScriptId,
  clearAll,
  getMacro,
  listAll,
  listNamesByScriptId,
  recordValue,
  diffAndCleanStaleMacros,
  type MacroEntry,
} from '../../src/engine/macro-store.js';

beforeEach(() => clearAll());

/** Helper to create a push-mode MacroEntry with defaults. */
function pushEntry(overrides?: Partial<MacroEntry>): MacroEntry {
  return {
    name:        'test_macro',
    description: 'A test macro',
    category:    'extension:lumiscript:user',
    mode:        'push',
    scriptId:    'script-1',
    scriptName:  'Test Script',
    ...overrides,
  };
}

/** Helper to create a pull-mode MacroEntry with defaults. */
function pullEntry(overrides?: Partial<MacroEntry>): MacroEntry {
  return {
    name:        'test_macro',
    description: 'A test macro',
    category:    'extension:lumiscript:user',
    mode:        'pull',
    handler:     mock(() => 'resolved'),
    scriptId:    'script-1',
    scriptName:  'Test Script',
    ...overrides,
  };
}

// ─── addMacro ────────────────────────────────────────────────────────────────

describe('addMacro', () => {
  test('stores a push-mode entry retrievable via getMacro', () => {
    addMacro(pushEntry());
    const m = getMacro('test_macro');
    expect(m).toBeDefined();
    expect(m!.mode).toBe('push');
    expect(m!.handler).toBeUndefined();
  });

  test('stores a pull-mode entry with the handler preserved', () => {
    const handler = mock(() => 'resolved');
    addMacro(pullEntry({ handler }));
    const m = getMacro('test_macro');
    expect(m).toBeDefined();
    expect(m!.mode).toBe('pull');
    expect(m!.handler).toBe(handler);
  });

  test('same script can re-register (mode swap push → pull allowed)', () => {
    addMacro(pushEntry());
    addMacro(pullEntry());
    expect(listAll()).toHaveLength(1);
    expect(getMacro('test_macro')!.mode).toBe('pull');
  });

  test('different script cannot register a macro with the same name', () => {
    addMacro(pushEntry({ scriptId: 'script-1', scriptName: 'Script A' }));
    expect(() =>
      addMacro(pushEntry({ scriptId: 'script-2', scriptName: 'Script B' })),
    ).toThrow('already registered');
  });

  test('rejects reserved LumiScript-internal macro names', () => {
    // One exemplar from each reserved family — the full set is enumerated in
    // src/engine/reserved-macro-names.ts. Any attempt to shadow an internal
    // macro must fail at the store layer before it reaches Spindle.
    expect(() => addMacro(pushEntry({ name: 'lumiScriptActive' }))).toThrow('reserved');
    expect(() => addMacro(pushEntry({ name: 'getcvar'         }))).toThrow('reserved');
    expect(() => addMacro(pushEntry({ name: 'setcharvar'      }))).toThrow('reserved');
    expect(() => addMacro(pushEntry({ name: 'deletecvar'      }))).toThrow('reserved');
  });
});

// ─── removeMacro ─────────────────────────────────────────────────────────────

describe('removeMacro', () => {
  test('removes a macro owned by the given scriptId and returns true', () => {
    addMacro(pushEntry());
    expect(removeMacro('test_macro', 'script-1')).toBe(true);
    expect(getMacro('test_macro')).toBeUndefined();
  });

  test('returns false when the macro does not exist', () => {
    expect(removeMacro('nonexistent', 'script-1')).toBe(false);
  });

  test('returns false when the macro is owned by a different script', () => {
    addMacro(pushEntry({ scriptId: 'script-1' }));
    expect(removeMacro('test_macro', 'script-2')).toBe(false);
    expect(getMacro('test_macro')).toBeDefined(); // still there
  });
});

// ─── removeByName ────────────────────────────────────────────────────────────

describe('removeByName', () => {
  test('removes the macro regardless of scriptId and returns true', () => {
    addMacro(pushEntry({ scriptId: 'script-1' }));
    expect(removeByName('test_macro')).toBe(true);
    expect(getMacro('test_macro')).toBeUndefined();
  });

  test('returns false when the macro does not exist', () => {
    expect(removeByName('nonexistent')).toBe(false);
  });
});

// ─── clearByScriptId ─────────────────────────────────────────────────────────

describe('clearByScriptId', () => {
  test('removes all macros for the given script and returns their names', () => {
    addMacro(pushEntry({ name: 'a',       scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'b',       scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'other',   scriptId: 'script-2' }));

    const removed = clearByScriptId('script-1');
    expect(removed.sort()).toEqual(['a', 'b']);
    expect(listAll()).toHaveLength(1);
    expect(listAll()[0]!.name).toBe('other');
  });

  test('returns empty array for an unknown scriptId', () => {
    addMacro(pushEntry());
    expect(clearByScriptId('unknown')).toEqual([]);
    expect(listAll()).toHaveLength(1);
  });
});

// ─── listNamesByScriptId ─────────────────────────────────────────────────────

describe('listNamesByScriptId', () => {
  test('returns names of macros owned by the given script', () => {
    addMacro(pushEntry({ name: 'a', scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'b', scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'c', scriptId: 'script-2' }));
    expect(listNamesByScriptId('script-1').sort()).toEqual(['a', 'b']);
  });

  test('returns empty array for unknown scriptId', () => {
    addMacro(pushEntry());
    expect(listNamesByScriptId('nonexistent')).toEqual([]);
  });
});

// ─── recordValue ─────────────────────────────────────────────────────────────

describe('recordValue', () => {
  test('updates lastValue on a push-mode entry', () => {
    addMacro(pushEntry());
    recordValue('test_macro', 'hello');
    expect(getMacro('test_macro')!.lastValue).toBe('hello');
    recordValue('test_macro', 'world');
    expect(getMacro('test_macro')!.lastValue).toBe('world');
  });

  test('throws when called against a pull-mode entry', () => {
    addMacro(pullEntry());
    expect(() => recordValue('test_macro', 'nope')).toThrow('pull-mode');
  });

  test('silent no-op on unknown name', () => {
    expect(() => recordValue('ghost', 'value')).not.toThrow();
  });
});

// ─── clearAll ────────────────────────────────────────────────────────────────

describe('clearAll', () => {
  test('removes all macros regardless of script', () => {
    addMacro(pushEntry({ name: 'a', scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'b', scriptId: 'script-2' }));
    clearAll();
    expect(listAll()).toHaveLength(0);
  });
});

// ─── getMacro / listAll ──────────────────────────────────────────────────────

describe('getMacro', () => {
  test('returns the entry for a registered macro', () => {
    addMacro(pushEntry({ name: 'my_macro' }));
    expect(getMacro('my_macro')!.name).toBe('my_macro');
  });

  test('returns undefined for an unregistered macro', () => {
    expect(getMacro('nonexistent')).toBeUndefined();
  });
});

describe('listAll', () => {
  test('returns a snapshot array of all entries', () => {
    addMacro(pushEntry({ name: 'a' }));
    addMacro(pushEntry({ name: 'b', scriptId: 'script-2' }));
    expect(listAll()).toHaveLength(2);
  });

  test('returns empty array when the store is empty', () => {
    expect(listAll()).toEqual([]);
  });
});

// ─── diffAndCleanStaleMacros ─────────────────────────────────────────────────

describe('diffAndCleanStaleMacros', () => {
  test('removes macros present before the run but not re-registered during it', () => {
    addMacro(pushEntry({ name: 'old_a', scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'old_b', scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'other', scriptId: 'script-2' }));

    // Simulate: script-1 re-ran and only registered `new_a`.
    addMacro(pushEntry({ name: 'new_a', scriptId: 'script-1' }));
    const stale = diffAndCleanStaleMacros(
      'script-1',
      ['old_a', 'old_b'],
      new Set(['new_a']),
    );
    expect(stale.sort()).toEqual(['old_a', 'old_b']);
    expect(getMacro('old_a')).toBeUndefined();
    expect(getMacro('old_b')).toBeUndefined();
    expect(getMacro('new_a')).toBeDefined();
    expect(getMacro('other')).toBeDefined();
  });

  test('no-op when the script re-registered all its previous macros', () => {
    addMacro(pushEntry({ name: 'kept', scriptId: 'script-1' }));
    const stale = diffAndCleanStaleMacros('script-1', ['kept'], new Set(['kept']));
    expect(stale).toEqual([]);
    expect(getMacro('kept')).toBeDefined();
  });

  test('no-op when the script had no previous macros', () => {
    const stale = diffAndCleanStaleMacros('script-1', [], new Set(['new_one']));
    expect(stale).toEqual([]);
  });

  test('does not remove a macro if ownership has changed to another script', () => {
    // Edge case: script-1 owned "x" pre-run; during the run script-2 claimed
    // the name (unlikely but possible). Stale-diff must not clobber script-2.
    addMacro(pushEntry({ name: 'x', scriptId: 'script-2' }));
    const stale = diffAndCleanStaleMacros('script-1', ['x'], new Set());
    expect(stale).toEqual([]);
    expect(getMacro('x')).toBeDefined();
  });

  test('removes all previous macros when the re-run registers none', () => {
    addMacro(pushEntry({ name: 'a', scriptId: 'script-1' }));
    addMacro(pushEntry({ name: 'b', scriptId: 'script-1' }));
    const stale = diffAndCleanStaleMacros('script-1', ['a', 'b'], new Set());
    expect(stale.sort()).toEqual(['a', 'b']);
    expect(listAll()).toHaveLength(0);
  });
});
