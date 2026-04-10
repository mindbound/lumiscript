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
    expect(result.data[0]!.firstMessage).toBe('Hi!');
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
    const result = await api.create({ name: 'Alice', firstMessage: 'Hi!' });
    expect(result.name).toBe('Alice');
    // Verify the create call used snake_case
    const call = mockSpindle.characters.create.mock.calls[0] as any;
    expect(call[0].first_mes).toBe('Hi!');
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
