/**
 * Parent-side coverage for `api.presets.*`. Mirrors the world-info /
 * databanks pattern: each method gets two tests — one for pass-through
 * correctness (Spindle called with the right args, return shape preserved)
 * and one for permission gating (rejects with PERMISSION_DENIED when the
 * extension lacks the `presets` permission).
 *
 * The canonical layer for this namespace is a thin pass-through (DTO and
 * Info shapes are structurally identical — see `engine/api/presets.ts`
 * "DTO ↔ Info parity" note) so the test surface is correspondingly
 * focused on permission + arg-forwarding semantics rather than per-field
 * translation.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildPresetsAPI } from '../../../src/engine/api/presets.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildPresetsAPI(createTestDeps(overrides));
}

// ─── Fixtures ────────────────────────────────────────────────────────────────

const blockDTO = {
  id: 'block-1', name: 'System Prompt', content: 'You are a helpful assistant.',
  role: 'system', enabled: true, position: 'pre_history', depth: 0,
  marker: null, isLocked: false, color: null,
  injectionTrigger: [], group: null,
};

const categoryBlockDTO = {
  id: 'cat-1', name: 'Tone', content: '',
  role: 'system', enabled: true, position: 'pre_history', depth: 0,
  marker: 'category', isLocked: false, color: null,
  injectionTrigger: [], group: null,
  categoryMode: 'radio',
};

const presetDTO = {
  id: 'preset-1', name: 'My Preset', provider: 'loom', engine: 'classic',
  parameters:  { temperature: 0.7 },
  prompt_order: [blockDTO],
  prompts:     {},
  metadata:    { description: 'fixture' },
  created_at:  1_700_000_000,
  updated_at:  1_700_000_100,
};

// ─── Preset CRUD ─────────────────────────────────────────────────────────────

describe('list', () => {
  test('forwards options + returns mapped result', async () => {
    mockSpindle.presets.list.mockReturnValueOnce(
      Promise.resolve({ data: [presetDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list({ limit: 10, offset: 0 });
    expect(result.data[0]!.name).toBe('My Preset');
    expect(result.total).toBe(1);
    // Spindle should receive the merged options with userId forwarded.
    const callArgs = (mockSpindle.presets.list as any).mock.calls.at(-1)![0];
    expect(callArgs.limit).toBe(10);
    expect(callArgs.offset).toBe(0);
  });

  test('throws PERMISSION_DENIED when presets permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.list()).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('get', () => {
  test('returns the preset DTO untranslated (shapes identical)', async () => {
    mockSpindle.presets.get.mockReturnValueOnce(Promise.resolve(presetDTO));
    const api = buildApi();
    const result = await api.get('preset-1');
    expect(result!.id).toBe('preset-1');
    expect(result!.prompt_order.length).toBe(1);
    expect(result!.created_at).toBe(1_700_000_000);
  });

  test('returns null when not found', async () => {
    mockSpindle.presets.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    const result = await api.get('missing');
    expect(result).toBeNull();
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.get('any')).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('create', () => {
  test('forwards input + returns mapped preset', async () => {
    mockSpindle.presets.create.mockReturnValueOnce(Promise.resolve(presetDTO));
    const api = buildApi();
    const result = await api.create({ name: 'New', provider: 'loom' });
    expect(result.id).toBe('preset-1');
    const callArgs = (mockSpindle.presets.create as any).mock.calls.at(-1)![0];
    expect(callArgs.name).toBe('New');
    expect(callArgs.provider).toBe('loom');
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.create({ name: 'x', provider: 'loom' }))
      .rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('update', () => {
  test('forwards presetId + input + returns mapped preset', async () => {
    mockSpindle.presets.update.mockReturnValueOnce(Promise.resolve(presetDTO));
    const api = buildApi();
    const result = await api.update('preset-1', { metadata: { description: 'updated' } });
    expect(result.id).toBe('preset-1');
    const calls = (mockSpindle.presets.update as any).mock.calls.at(-1);
    expect(calls[0]).toBe('preset-1');
    expect(calls[1].metadata.description).toBe('updated');
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.update('preset-1', {})).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('delete', () => {
  test('forwards presetId and returns boolean', async () => {
    mockSpindle.presets.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.delete('preset-1')).toBe(true);
    expect((mockSpindle.presets.delete as any).mock.calls.at(-1)![0]).toBe('preset-1');
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.delete('preset-1')).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── Prompt-block CRUD ───────────────────────────────────────────────────────

describe('blocks.list', () => {
  test('forwards presetId + returns block array', async () => {
    mockSpindle.presets.blocks.list.mockReturnValueOnce(
      Promise.resolve([blockDTO, categoryBlockDTO]),
    );
    const api = buildApi();
    const result = await api.blocks.list('preset-1');
    expect(result.length).toBe(2);
    expect(result[0]!.id).toBe('block-1');
    expect(result[1]!.marker).toBe('category');
    expect((mockSpindle.presets.blocks.list as any).mock.calls.at(-1)![0]).toBe('preset-1');
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.blocks.list('preset-1')).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('blocks.get', () => {
  test('forwards presetId + blockId + returns block', async () => {
    mockSpindle.presets.blocks.get.mockReturnValueOnce(Promise.resolve(blockDTO));
    const api = buildApi();
    const block = await api.blocks.get('preset-1', 'block-1');
    expect(block!.name).toBe('System Prompt');
    const calls = (mockSpindle.presets.blocks.get as any).mock.calls.at(-1);
    expect(calls[0]).toBe('preset-1');
    expect(calls[1]).toBe('block-1');
  });

  test('returns null when block not found', async () => {
    mockSpindle.presets.blocks.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.blocks.get('preset-1', 'missing')).toBeNull();
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.blocks.get('preset-1', 'block-1')).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('blocks.create', () => {
  test('forwards presetId + input + no index when options.index undefined', async () => {
    mockSpindle.presets.blocks.create.mockReturnValueOnce(Promise.resolve(blockDTO));
    const api = buildApi();
    await api.blocks.create('preset-1', { name: 'Style', content: 'Be concise.' });
    const calls = (mockSpindle.presets.blocks.create as any).mock.calls.at(-1);
    expect(calls[0]).toBe('preset-1');
    expect(calls[1].name).toBe('Style');
    // Third arg is options bag — should NOT have `index` when caller omits it.
    expect('index' in calls[2]).toBe(false);
  });

  test('forwards options.index as a specific position when provided', async () => {
    mockSpindle.presets.blocks.create.mockReturnValueOnce(Promise.resolve(blockDTO));
    const api = buildApi();
    await api.blocks.create('preset-1', { name: 'First' }, { index: 0 });
    const calls = (mockSpindle.presets.blocks.create as any).mock.calls.at(-1);
    expect(calls[2].index).toBe(0);
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.blocks.create('preset-1', { name: 'x' }))
      .rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('blocks.update', () => {
  test('forwards presetId + blockId + input + returns block', async () => {
    mockSpindle.presets.blocks.update.mockReturnValueOnce(Promise.resolve(blockDTO));
    const api = buildApi();
    await api.blocks.update('preset-1', 'block-1', { enabled: false });
    const calls = (mockSpindle.presets.blocks.update as any).mock.calls.at(-1);
    expect(calls[0]).toBe('preset-1');
    expect(calls[1]).toBe('block-1');
    expect(calls[2].enabled).toBe(false);
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.blocks.update('preset-1', 'block-1', {}))
      .rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('blocks.delete', () => {
  test('forwards presetId + blockId and returns boolean', async () => {
    mockSpindle.presets.blocks.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.blocks.delete('preset-1', 'block-1')).toBe(true);
    const calls = (mockSpindle.presets.blocks.delete as any).mock.calls.at(-1);
    expect(calls[0]).toBe('preset-1');
    expect(calls[1]).toBe('block-1');
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.blocks.delete('preset-1', 'block-1'))
      .rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── Category grouping ──────────────────────────────────────────────────────

describe('categories.list', () => {
  test('forwards presetId + returns groups', async () => {
    mockSpindle.presets.categories.list.mockReturnValueOnce(
      Promise.resolve([
        { categoryBlock: null,             children: [blockDTO] },
        { categoryBlock: categoryBlockDTO, children: [blockDTO] },
      ]),
    );
    const api = buildApi();
    const groups = await api.categories.list('preset-1');
    expect(groups.length).toBe(2);
    // First group has null categoryBlock (uncategorized leading blocks).
    expect(groups[0]!.categoryBlock).toBeNull();
    expect(groups[1]!.categoryBlock!.marker).toBe('category');
    expect((mockSpindle.presets.categories.list as any).mock.calls.at(-1)![0]).toBe('preset-1');
  });

  test('throws PERMISSION_DENIED when permission missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.categories.list('preset-1')).rejects.toThrow('PERMISSION_DENIED');
  });
});
