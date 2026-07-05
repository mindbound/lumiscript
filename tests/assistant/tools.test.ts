/**
 * Tests for the assistant tool dispatcher (`src/assistant/tools.ts`), focused on
 * the `read_diagnostics` tool — its registration and the three dispatch outcomes
 * (collector returns a report / no collector supplied / collector throws). The
 * memory + lookup tools have their own coverage via the engine + corpus tests.
 */
import { describe, test, expect } from 'bun:test';
import { dispatchAssistantTool, ASSISTANT_TOOLS } from '../../src/assistant/tools.js';
import type { CompactDiagnostics } from '../../src/engine/diagnostics.js';
import type { AssistantScriptLibrary } from '../../src/assistant/types.js';

const sample: CompactDiagnostics = {
  generatedAt: 1,
  summary: { failures: 0, warnings: 1, passes: 5, info: 2 },
  sections: [
    { name: 'Script-runner', checks: [{ label: 'Alive', status: 'pass', message: '2 workers alive' }] },
  ],
};

describe('read_diagnostics tool', () => {
  test('is registered in ASSISTANT_TOOLS with a no-arg schema', () => {
    const spec = ASSISTANT_TOOLS.find((t) => t.name === 'read_diagnostics');
    expect(spec).toBeDefined();
    expect((spec!.parameters as { required?: unknown }).required).toBeUndefined(); // takes no args
  });

  test('returns the collector\'s compact report as JSON content', async () => {
    const res = await dispatchAssistantTool('read_diagnostics', {}, {
      userId: 'u1',
      collectDiagnostics: async () => sample,
    });
    expect(res.isError).toBe(false);
    expect(JSON.parse(res.content)).toEqual(sample);
  });

  test('reports unavailable when no collector is wired into the turn', async () => {
    const res = await dispatchAssistantTool('read_diagnostics', {}, { userId: 'u1' });
    expect(res.isError).toBe(true);
    expect(res.content).toContain('unavailable');
  });

  test('surfaces a collector failure as an error envelope (does not throw)', async () => {
    const res = await dispatchAssistantTool('read_diagnostics', {}, {
      userId: 'u1',
      collectDiagnostics: async () => { throw new Error('probe boom'); },
    });
    expect(res.isError).toBe(true);
    expect(res.content).toContain('probe boom');
  });
});

const lib: AssistantScriptLibrary = {
  list: () => [
    { id: 's1', name: 'Dice', type: 'trigger', enabled: true },
    { id: 's2', name: 'Helpers', type: 'library', enabled: false },
  ],
  read: (id) =>
    id === 's1' ? { id: 's1', name: 'Dice', type: 'trigger', enabled: true, code: 'const x = 1;' } : null,
};

describe('list_scripts / read_script tools', () => {
  test('both are registered in ASSISTANT_TOOLS', () => {
    expect(ASSISTANT_TOOLS.some((t) => t.name === 'list_scripts')).toBe(true);
    expect(ASSISTANT_TOOLS.some((t) => t.name === 'read_script')).toBe(true);
  });

  test('list_scripts returns the library summaries (metadata, no code)', async () => {
    const res = await dispatchAssistantTool('list_scripts', {}, { userId: 'u1', scriptLibrary: lib });
    expect(res.isError).toBe(false);
    const data = JSON.parse(res.content);
    expect(data.count).toBe(2);
    expect(data.scripts[0]).toEqual({ id: 's1', name: 'Dice', type: 'trigger', enabled: true });
    expect(res.content).not.toContain('code'); // summaries carry no code
  });

  test('read_script returns full code for a known id', async () => {
    const res = await dispatchAssistantTool('read_script', { id: 's1' }, { userId: 'u1', scriptLibrary: lib });
    expect(res.isError).toBe(false);
    expect(JSON.parse(res.content).code).toBe('const x = 1;');
    expect(JSON.parse(res.content).truncated).toBeUndefined(); // small script, not truncated
  });

  test('read_script truncates oversized code INSIDE the field — valid JSON + real size, under the outer cap', async () => {
    const big = 'x'.repeat(50_000);
    const bigLib: AssistantScriptLibrary = {
      list: () => [],
      read: () => ({ id: 's1', name: 'Big', type: 'trigger', enabled: true, code: big }),
    };
    const res = await dispatchAssistantTool('read_script', { id: 's1' }, { userId: 'u1', scriptLibrary: bigLib });
    expect(res.isError).toBe(false);
    const parsed = JSON.parse(res.content); // must still be VALID JSON (the whole point)
    expect(parsed.truncated).toBe(true);
    expect(parsed.fullLength).toBe(50_000);
    expect(parsed.code.length).toBeLessThan(50_000);
    expect(parsed.code).toContain('truncated this script: 50000 characters total');
    expect(res.content.length).toBeLessThan(40_000); // stays under agent.ts's TOOL_RESULT_CHAR_CAP
  });

  test('read_script errors on an unknown id (points at list_scripts)', async () => {
    const res = await dispatchAssistantTool('read_script', { id: 'nope' }, { userId: 'u1', scriptLibrary: lib });
    expect(res.isError).toBe(true);
    expect(res.content).toContain('No script with id');
  });

  test('read_script requires an id', async () => {
    const res = await dispatchAssistantTool('read_script', {}, { userId: 'u1', scriptLibrary: lib });
    expect(res.isError).toBe(true);
    expect(res.content).toContain('requires an `id`');
  });

  test('both report unavailable when no library is wired into the turn', async () => {
    const a = await dispatchAssistantTool('list_scripts', {}, { userId: 'u1' });
    const b = await dispatchAssistantTool('read_script', { id: 's1' }, { userId: 'u1' });
    expect(a.isError).toBe(true);
    expect(b.isError).toBe(true);
    expect(a.content).toContain('unavailable');
  });
});

describe('dispatchAssistantTool — unknown tool', () => {
  test('returns an error envelope listing available tools (no throw)', async () => {
    const res = await dispatchAssistantTool('does_not_exist', {}, { userId: 'u1' });
    expect(res.isError).toBe(true);
    expect(res.content).toContain('read_diagnostics'); // available-tools list includes the new one
  });
});
