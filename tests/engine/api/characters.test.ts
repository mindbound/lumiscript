import { describe, test, expect, beforeEach } from 'bun:test';
import { buildCharactersAPI } from '../../../src/engine/api/characters.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildCharactersAPI(createTestDeps(overrides));
}

/** Minimal CharacterDTO from the Spindle API (snake_case). */
const charDTO = {
  id: 'char-1', name: 'Alice', description: 'desc', personality: 'nice',
  scenario: 'test', first_mes: 'Hi!', mes_example: '', creator_notes: '',
  system_prompt: '', post_history_instructions: '', tags: ['tag1'],
  alternate_greetings: [], creator: 'me', image_id: null,
  world_book_ids: ['wb-1', 'wb-2'],
  extensions: { 'my-script:state': { phase: 'intro' } },
  created_at: '2026-01-01', updated_at: '2026-01-02',
};

describe('list', () => {
  test('maps DTOs to camelCase and returns total', async () => {
    mockSpindle.characters.list.mockReturnValueOnce(
      Promise.resolve({ data: [charDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list();
    expect(result.total).toBe(1);
    expect(result.data[0]!.firstMessage).toBe('Hi!');
    expect(result.data[0]!.worldBookIds).toEqual(['wb-1', 'wb-2']);
  });

  test('throws when characters permission denied', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.list()).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('get', () => {
  test('returns mapped character or null', async () => {
    mockSpindle.characters.get.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    const result = await api.get('char-1');
    expect(result).not.toBeNull();
    expect(result!.name).toBe('Alice');
  });

  test('returns null when not found', async () => {
    mockSpindle.characters.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.get('missing')).toBeNull();
  });
});

describe('create', () => {
  test('maps input to snake_case DTO and returns mapped result', async () => {
    mockSpindle.characters.create.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    const result = await api.create({ name: 'Alice', firstMessage: 'Hi!', worldBookIds: ['wb-1'] });
    expect(result.name).toBe('Alice');
    // Verify the create call used snake_case
    const call = mockSpindle.characters.create.mock.calls[0] as any;
    expect(call[0].first_mes).toBe('Hi!');
    expect(call[0].world_book_ids).toEqual(['wb-1']);
  });
});

describe('update', () => {
  test('maps update input to snake_case DTO', async () => {
    mockSpindle.characters.update.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    await api.update('char-1', { name: 'Updated', postHistoryInstructions: 'new' });
    const call = mockSpindle.characters.update.mock.calls[0] as any;
    expect(call[1].post_history_instructions).toBe('new');
  });
});

// ─── extensions blob — read + write surfaces (spindle-types 0.4.39+) ────────
//
// CharacterDTO.extensions is a free-form namespaced map for extension-specific
// state attached directly to the character row. The host shallow-merges the
// `extensions` field on update; LumiScript's mapping layer just passes it
// through (no special serialization).

describe('extensions field', () => {
  test('mapCharacter exposes the full extensions blob on read', async () => {
    mockSpindle.characters.get.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    const result = await api.get('char-1');
    expect(result!.extensions).toEqual({ 'my-script:state': { phase: 'intro' } });
  });

  test('mapCharacter falls back to {} when DTO omits extensions (older host)', async () => {
    // Forward-compat: an older Lumiverse host or older spindle-types build
    // may not populate the field. The mapping layer fills in `{}` so scripts
    // can rely on the field being present without per-access guards.
    const legacyDTO = { ...charDTO, extensions: undefined };
    mockSpindle.characters.get.mockReturnValueOnce(Promise.resolve(legacyDTO));
    const api = buildApi();
    const result = await api.get('char-1');
    expect(result!.extensions).toEqual({});
  });

  test('toCreateDTO passes extensions through verbatim on create', async () => {
    mockSpindle.characters.create.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    await api.create({
      name: 'Alice',
      extensions: { 'my-script:state': { phase: 'intro' } },
    });
    const call = mockSpindle.characters.create.mock.calls[0] as any;
    expect(call[0].extensions).toEqual({ 'my-script:state': { phase: 'intro' } });
  });

  test('toUpdateDTO passes extensions through verbatim on update (host shallow-merges)', async () => {
    mockSpindle.characters.update.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    await api.update('char-1', {
      extensions: { 'my-script:state': { phase: 'climax' } },
    });
    const call = mockSpindle.characters.update.mock.calls[0] as any;
    expect(call[1].extensions).toEqual({ 'my-script:state': { phase: 'climax' } });
  });

  test('extensions can be omitted from update (other fields still flow through)', async () => {
    mockSpindle.characters.update.mockReturnValueOnce(Promise.resolve(charDTO));
    const api = buildApi();
    await api.update('char-1', { name: 'Renamed' });
    const call = mockSpindle.characters.update.mock.calls[0] as any;
    expect(call[1].name).toBe('Renamed');
    expect(call[1].extensions).toBeUndefined();
  });
});

describe('delete', () => {
  test('delegates to spindle.characters.delete', async () => {
    mockSpindle.characters.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.delete('char-1')).toBe(true);
  });
});

describe('getByName', () => {
  test('returns the first matching character by name', async () => {
    mockSpindle.characters.list.mockReturnValueOnce(
      Promise.resolve({ data: [charDTO, { ...charDTO, id: 'char-2', name: 'Bob' }], total: 2 }),
    );
    const api = buildApi();
    const result = await api.getByName('Alice');
    expect(result).not.toBeNull();
    expect(result!.id).toBe('char-1');
  });

  test('paginates to find a character on a later page', async () => {
    // First page: no match
    mockSpindle.characters.list.mockReturnValueOnce(
      Promise.resolve({ data: [{ ...charDTO, name: 'NotAlice' }], total: 200 }),
    );
    // Second page: match
    mockSpindle.characters.list.mockReturnValueOnce(
      Promise.resolve({ data: [charDTO], total: 200 }),
    );
    const api = buildApi();
    const result = await api.getByName('Alice');
    expect(result).not.toBeNull();
    expect(mockSpindle.characters.list).toHaveBeenCalledTimes(2);
  });

  test('returns null when no character matches', async () => {
    mockSpindle.characters.list.mockReturnValueOnce(
      Promise.resolve({ data: [charDTO], total: 1 }),
    );
    const api = buildApi();
    expect(await api.getByName('Nobody')).toBeNull();
  });
});
