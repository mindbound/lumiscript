import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  addTool,
  removeTool,
  removeByName,
  clearByScriptId,
  clearAll,
  getTool,
  listAll,
  listNamesByScriptId,
  diffAndCleanStaleTools,
  type ToolEntry,
} from '../../src/engine/tool-store.js';

beforeEach(() => clearAll());

/** Helper to create a ToolEntry with defaults. */
function entry(overrides?: Partial<ToolEntry>): ToolEntry {
  return {
    name: 'test-tool',
    displayName: 'Test Tool',
    description: 'A test tool',
    parameters: { type: 'object', properties: {} },
    councilEligible: false,
    handler: mock(() => 'result'),
    scriptId: 'script-1',
    scriptName: 'Test Script',
    ...overrides,
  };
}

// ─── addTool ─────────────────────────────────────────────────────────────────

describe('addTool', () => {
  test('stores an entry that is retrievable via getTool()', () => {
    addTool(entry());
    const tool = getTool('test-tool');
    expect(tool).toBeDefined();
    expect(tool!.name).toBe('test-tool');
    expect(tool!.displayName).toBe('Test Tool');
  });

  test('same script can re-register a tool (replaces handler)', () => {
    addTool(entry({ handler: mock(() => 'v1') }));
    addTool(entry({ handler: mock(() => 'v2') }));
    expect(listAll()).toHaveLength(1);
  });

  test('different script cannot register a tool with the same name', () => {
    addTool(entry({ scriptId: 'script-1', scriptName: 'Script A' }));
    expect(() =>
      addTool(entry({ scriptId: 'script-2', scriptName: 'Script B' })),
    ).toThrow('already registered');
  });
});

// ─── removeTool ──────────────────────────────────────────────────────────────

describe('removeTool', () => {
  test('removes a tool owned by the given scriptId and returns true', () => {
    addTool(entry());
    expect(removeTool('test-tool', 'script-1')).toBe(true);
    expect(getTool('test-tool')).toBeUndefined();
  });

  test('returns false when the tool does not exist', () => {
    expect(removeTool('nonexistent', 'script-1')).toBe(false);
  });

  test('returns false when the tool is owned by a different script', () => {
    addTool(entry({ scriptId: 'script-1' }));
    expect(removeTool('test-tool', 'script-2')).toBe(false);
    expect(getTool('test-tool')).toBeDefined(); // still exists
  });
});

// ─── removeByName ────────────────────────────────────────────────────────────

describe('removeByName', () => {
  // Admin-override removal: forgets ownership entirely. Backs the Status-tab
  // "Remove" action, which drops a single Spindle registration without
  // touching the owning script.
  test('removes the tool regardless of scriptId and returns true', () => {
    addTool(entry({ scriptId: 'script-1' }));
    expect(removeByName('test-tool')).toBe(true);
    expect(getTool('test-tool')).toBeUndefined();
  });

  test('returns false when the tool does not exist', () => {
    expect(removeByName('nonexistent')).toBe(false);
  });

  test('removes an entry owned by a different script (admin override)', () => {
    // Contrast with removeTool, which gates on scriptId ownership.
    addTool(entry({ scriptId: 'script-1' }));
    expect(removeByName('test-tool')).toBe(true);
    expect(listAll()).toHaveLength(0);
  });
});

// ─── clearByScriptId ─────────────────────────────────────────────────────────

describe('clearByScriptId', () => {
  test('removes all tools for the given script and returns their names', () => {
    addTool(entry({ name: 'tool-a', scriptId: 'script-1' }));
    addTool(entry({ name: 'tool-b', scriptId: 'script-1' }));
    addTool(entry({ name: 'tool-c', scriptId: 'script-2' }));

    const removed = clearByScriptId('script-1');
    expect(removed).toContain('tool-a');
    expect(removed).toContain('tool-b');
    expect(removed).toHaveLength(2);
    expect(listAll()).toHaveLength(1);
    expect(listAll()[0]!.name).toBe('tool-c');
  });

  test('returns empty array for an unknown scriptId', () => {
    addTool(entry());
    expect(clearByScriptId('unknown')).toEqual([]);
    expect(listAll()).toHaveLength(1);
  });
});

// ─── clearAll ────────────────────────────────────────────────────────────────

describe('clearAll', () => {
  test('removes all tools regardless of script', () => {
    addTool(entry({ name: 'tool-a', scriptId: 'script-1' }));
    addTool(entry({ name: 'tool-b', scriptId: 'script-2' }));
    clearAll();
    expect(listAll()).toHaveLength(0);
  });
});

// ─── getTool ─────────────────────────────────────────────────────────────────

describe('getTool', () => {
  test('returns the entry for a registered tool', () => {
    addTool(entry({ name: 'my-tool' }));
    expect(getTool('my-tool')!.name).toBe('my-tool');
  });

  test('returns undefined for an unregistered tool', () => {
    expect(getTool('nonexistent')).toBeUndefined();
  });
});

// ─── listAll ─────────────────────────────────────────────────────────────────

describe('listAll', () => {
  test('returns a snapshot array of all entries', () => {
    addTool(entry({ name: 'a' }));
    addTool(entry({ name: 'b', scriptId: 'script-2' }));
    expect(listAll()).toHaveLength(2);
  });

  test('returns empty array when store is empty', () => {
    expect(listAll()).toEqual([]);
  });
});

// ─── listNamesByScriptId ────────────────────────────────────────────────────

describe('listNamesByScriptId', () => {
  test('returns names of tools owned by the given script', () => {
    addTool(entry({ name: 'a', scriptId: 'script-1' }));
    addTool(entry({ name: 'b', scriptId: 'script-1' }));
    addTool(entry({ name: 'c', scriptId: 'script-2' }));
    expect(listNamesByScriptId('script-1').sort()).toEqual(['a', 'b']);
  });

  test('returns empty array for unknown scriptId', () => {
    addTool(entry({ name: 'a' }));
    expect(listNamesByScriptId('nonexistent')).toEqual([]);
  });
});

// ─── diffAndCleanStaleTools ─────────────────────────────────────────────────

describe('diffAndCleanStaleTools', () => {
  // Simulates: script owned roll_dice + flip_coin before, now only registers
  // roll_d20. The diff should remove roll_dice and flip_coin.
  test('removes tools present before the run but not registered during it', () => {
    addTool(entry({ name: 'roll_dice',  scriptId: 'script-1' }));
    addTool(entry({ name: 'flip_coin',  scriptId: 'script-1' }));
    addTool(entry({ name: 'other_tool', scriptId: 'script-2' }));

    // Script ran and only registered roll_d20 (added manually to store first).
    addTool(entry({ name: 'roll_d20', scriptId: 'script-1' }));
    const registeredThisRun = new Set(['roll_d20']);
    const preRun = ['roll_dice', 'flip_coin'];

    const stale = diffAndCleanStaleTools('script-1', preRun, registeredThisRun);
    expect(stale.sort()).toEqual(['flip_coin', 'roll_dice']);
    expect(getTool('roll_dice')).toBeUndefined();
    expect(getTool('flip_coin')).toBeUndefined();
    // The new tool and the other script's tool are untouched.
    expect(getTool('roll_d20')).toBeDefined();
    expect(getTool('other_tool')).toBeDefined();
  });

  test('no-op when the script re-registered all its previous tools', () => {
    addTool(entry({ name: 'roll_dice', scriptId: 'script-1' }));
    const stale = diffAndCleanStaleTools('script-1', ['roll_dice'], new Set(['roll_dice']));
    expect(stale).toEqual([]);
    expect(getTool('roll_dice')).toBeDefined();
  });

  test('no-op when the script had no previous tools', () => {
    const stale = diffAndCleanStaleTools('script-1', [], new Set(['new_tool']));
    expect(stale).toEqual([]);
  });

  test('does not remove a tool if ownership has changed to another script', () => {
    // Edge case: script-1 owned roll_dice, but script-2 re-registered it
    // between snapshot and diff. diffAndCleanStaleTools should skip it.
    addTool(entry({ name: 'roll_dice', scriptId: 'script-2' }));
    const stale = diffAndCleanStaleTools('script-1', ['roll_dice'], new Set());
    expect(stale).toEqual([]);
    expect(getTool('roll_dice')).toBeDefined();
  });

  test('removes all tools when script re-run registers nothing (error or code change)', () => {
    addTool(entry({ name: 'a', scriptId: 'script-1' }));
    addTool(entry({ name: 'b', scriptId: 'script-1' }));
    const stale = diffAndCleanStaleTools('script-1', ['a', 'b'], new Set());
    expect(stale.sort()).toEqual(['a', 'b']);
    expect(listAll()).toHaveLength(0);
  });
});
