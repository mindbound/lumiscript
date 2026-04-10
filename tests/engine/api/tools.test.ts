import { describe, test, expect, mock, beforeEach } from 'bun:test';
import { buildToolsAPI } from '../../../src/engine/api/tools.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { clearAll, addTool, getTool, listAll } from '../../../src/engine/tool-store.js';
import type { LumiScriptAPI, ToolDefinition } from '../../../src/types/script.js';

const toolDef: ToolDefinition = {
  display_name: 'Test Tool',
  description: 'A test tool',
  parameters: { type: 'object', properties: { q: { type: 'string' } } },
  council_eligible: true,
};

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  const deps = createTestDeps(overrides);
  const fakeApi = {} as LumiScriptAPI;
  return { api: buildToolsAPI(deps, () => fakeApi), deps, fakeApi };
}

// ─── register ────────────────────────────────────────────────────────────────

describe('register', () => {
  test('registers a tool in the tool store and calls spindle.registerTool', () => {
    const { api } = buildApi();
    const handler = mock(() => 'result');

    api.register('my-tool', toolDef, handler);

    expect(getTool('my-tool')).toBeDefined();
    expect(getTool('my-tool')!.displayName).toBe('Test Tool');
    expect((globalThis as any).spindle.registerTool).toHaveBeenCalledTimes(1);
  });

  test('throws when tools permission is denied', () => {
    const { api } = buildApi({ hasPerm: () => false });
    expect(() => api.register('t', toolDef, mock(() => ''))).toThrow('PERMISSION_DENIED');
  });

  test('calls onToolsChanged after registration', () => {
    const onToolsChanged = mock(() => {});
    const deps = createTestDeps({ onToolsChanged });
    const api = buildToolsAPI(deps, () => ({} as LumiScriptAPI));

    api.register('t', toolDef, mock(() => ''));
    expect(onToolsChanged).toHaveBeenCalledTimes(1);
  });

  test('emits ls:tool:registered broadcast event', () => {
    const { emit, on } = require('../../../src/engine/broadcast-bus.js');
    const handler = mock(() => {});
    on('ls:tool:registered', handler, 'listener');

    const { api } = buildApi();
    api.register('my-tool', toolDef, mock(() => ''));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith({ name: 'my-tool', scriptId: 'test-script-id' });
  });
});

// ─── unregister ──────────────────────────────────────────────────────────────

describe('unregister', () => {
  test('removes a tool owned by the script and calls spindle.unregisterTool', () => {
    const { api } = buildApi();
    api.register('my-tool', toolDef, mock(() => ''));

    api.unregister('my-tool');

    expect(getTool('my-tool')).toBeUndefined();
    expect((globalThis as any).spindle.unregisterTool).toHaveBeenCalledWith('my-tool');
  });

  test('does nothing for a tool owned by a different script', () => {
    // Add a tool owned by a different script directly
    addTool({
      name: 'other-tool',
      displayName: 'Other',
      description: 'other',
      councilEligible: false,
      handler: mock(() => ''),
      scriptId: 'other-script',
      scriptName: 'Other Script',
    });

    const { api } = buildApi();
    api.unregister('other-tool');

    // Tool should still exist (not removed by a different script)
    expect(getTool('other-tool')).toBeDefined();
  });

  test('emits ls:tool:unregistered broadcast event', () => {
    const { on } = require('../../../src/engine/broadcast-bus.js');
    const handler = mock(() => {});
    on('ls:tool:unregistered', handler, 'listener');

    const { api } = buildApi();
    api.register('my-tool', toolDef, mock(() => ''));
    api.unregister('my-tool');

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler).toHaveBeenCalledWith({ name: 'my-tool', scriptId: 'test-script-id' });
  });
});

// ─── list ────────────────────────────────────────────────────────────────────

describe('list', () => {
  test('returns all registered tools as RegisteredToolInfo[]', () => {
    const { api } = buildApi();
    api.register('tool-a', toolDef, mock(() => ''));
    api.register('tool-b', { ...toolDef, display_name: 'Tool B' }, mock(() => ''));

    const list = api.list();
    expect(list).toHaveLength(2);
    expect(list[0]!.name).toBe('tool-a');
    expect(list[1]!.display_name).toBe('Tool B');
    expect(list[0]!.council_eligible).toBe(true);
    expect(list[0]!.scriptId).toBe('test-script-id');
  });

  test('returns empty array when no tools registered', () => {
    const { api } = buildApi();
    expect(api.list()).toEqual([]);
  });
});

// ─── invoke ──────────────────────────────────────────────────────────────────

describe('invoke', () => {
  test('calls the registered handler and returns its result', async () => {
    const { api } = buildApi();
    api.register('my-tool', toolDef, mock(() => 'tool output'));

    const result = await api.invoke('my-tool', { q: 'test' });
    expect(result).toBe('tool output');
  });

  test('rejects when the tool does not exist', async () => {
    const { api } = buildApi();
    await expect(api.invoke('nonexistent')).rejects.toThrow('no handler registered');
  });

  test('emits ls:tool:invoked broadcast event with timing', async () => {
    const { on } = require('../../../src/engine/broadcast-bus.js');
    const handler = mock(() => {});
    on('ls:tool:invoked', handler, 'listener');

    const { api } = buildApi();
    api.register('my-tool', toolDef, mock(() => 'done'));
    await api.invoke('my-tool', { q: 'hi' });

    expect(handler).toHaveBeenCalledTimes(1);
    const payload = (handler.mock.calls as any)[0][0];
    expect(payload.name).toBe('my-tool');
    expect(payload.result).toBe('done');
    expect(typeof payload.callMs).toBe('number');
  });

  test('handles async handlers', async () => {
    const { api } = buildApi();
    api.register('async-tool', toolDef, mock(async () => 'async result'));

    const result = await api.invoke('async-tool');
    expect(result).toBe('async result');
  });
});
