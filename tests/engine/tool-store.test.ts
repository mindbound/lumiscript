import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  addTool,
  removeTool,
  clearByScriptId,
  clearAll,
  getTool,
  listAll,
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
