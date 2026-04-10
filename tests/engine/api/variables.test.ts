import { describe, test, expect, beforeEach, mock } from 'bun:test';
import { buildVariablesAPI } from '../../../src/engine/api/variables.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildVariablesAPI(createTestDeps(overrides));
}

// ─── local ───────────────────────────────────────────────────────────────────

describe('local', () => {
  test('get delegates to spindle.variables.local.get with serialization', async () => {
    mockSpindle.variables.local.get.mockReturnValueOnce(Promise.resolve('42'));
    const api = buildApi();
    const result = await api.local.get('key');
    expect(result).toBe(42); // deserialized from JSON
    expect(mockSpindle.variables.local.get).toHaveBeenCalledWith('test-chat-id', 'key');
  });

  test('get returns default when no active chatId', async () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    const result = await api.local.get('key', 'fallback');
    expect(result).toBe('fallback');
  });

  test('get returns string values as-is (non-JSON)', async () => {
    mockSpindle.variables.local.get.mockReturnValueOnce(Promise.resolve('plain text'));
    const api = buildApi();
    const result = await api.local.get('key');
    expect(result).toBe('plain text');
  });

  test('set serializes and delegates to spindle.variables.local.set', async () => {
    const api = buildApi();
    await api.local.set('key', { complex: true });
    expect(mockSpindle.variables.local.set).toHaveBeenCalledWith(
      'test-chat-id', 'key', '{"complex":true}',
    );
  });

  test('set with string value passes it as-is', async () => {
    const api = buildApi();
    await api.local.set('key', 'hello');
    expect(mockSpindle.variables.local.set).toHaveBeenCalledWith(
      'test-chat-id', 'key', 'hello',
    );
  });

  test('delete returns true when key exists', async () => {
    mockSpindle.variables.local.has.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.local.delete('key')).toBe(true);
    expect(mockSpindle.variables.local.delete).toHaveBeenCalled();
  });

  test('delete returns false when key does not exist', async () => {
    mockSpindle.variables.local.has.mockReturnValueOnce(Promise.resolve(false));
    const api = buildApi();
    expect(await api.local.delete('key')).toBe(false);
  });

  test('has delegates to spindle.variables.local.has', async () => {
    mockSpindle.variables.local.has.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.local.has('key')).toBe(true);
  });

  test('clear deletes all keys from the chat scope', async () => {
    mockSpindle.variables.local.list.mockReturnValueOnce(
      Promise.resolve({ a: '1', b: '2' }),
    );
    const api = buildApi();
    await api.local.clear();
    expect(mockSpindle.variables.local.delete).toHaveBeenCalledTimes(2);
  });
});

// ─── global ──────────────────────────────────────────────────────────────────

describe('global', () => {
  test('get deserializes JSON value', async () => {
    mockSpindle.variables.global.get.mockReturnValueOnce(Promise.resolve('[1,2,3]'));
    const api = buildApi();
    expect(await api.global.get<number[]>('key')).toEqual([1, 2, 3]);
  });

  test('get returns default for empty string', async () => {
    mockSpindle.variables.global.get.mockReturnValueOnce(Promise.resolve(''));
    const api = buildApi();
    expect(await api.global.get('key', 'default')).toBe('default');
  });

  test('set serializes value', async () => {
    const api = buildApi();
    await api.global.set('key', 99);
    expect(mockSpindle.variables.global.set).toHaveBeenCalledWith('key', '99', 'test-user-id');
  });

  test('delete returns true when exists', async () => {
    mockSpindle.variables.global.has.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.global.delete('key')).toBe(true);
  });

  test('has delegates correctly', async () => {
    mockSpindle.variables.global.has.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.global.has('key')).toBe(true);
  });
});

// ─── character ───────────────────────────────────────────────────────────────

describe('character', () => {
  test('get reads from userStorage JSON file', async () => {
    mockSpindle.userStorage.getJson.mockReturnValueOnce(
      Promise.resolve({ score: 42 }),
    );
    const api = buildApi();
    expect(await api.character.get<number>('score')).toBe(42);
  });

  test('get returns default when no active character', async () => {
    const api = buildApi({ activeContext: { chatId: 'c', characterId: null } });
    expect(await api.character.get('key', 'fallback')).toBe('fallback');
  });

  test('set performs read-modify-write to userStorage', async () => {
    mockSpindle.userStorage.getJson.mockReturnValueOnce(
      Promise.resolve({ existing: 'value' }),
    );
    const api = buildApi();
    await api.character.set('newKey', 'newValue');
    expect(mockSpindle.userStorage.setJson).toHaveBeenCalledTimes(1);
    // Verify the stored object includes both old and new
    const storedValue = mockSpindle.userStorage.setJson.mock.calls[0] as any;
    expect(storedValue[1]).toEqual({ existing: 'value', newKey: 'newValue' });
  });

  test('delete returns false when key is not present', async () => {
    mockSpindle.userStorage.getJson.mockReturnValueOnce(
      Promise.resolve({}),
    );
    const api = buildApi();
    expect(await api.character.delete('missing')).toBe(false);
  });

  test('has checks key presence in userStorage JSON', async () => {
    mockSpindle.userStorage.getJson.mockReturnValueOnce(
      Promise.resolve({ exists: true }),
    );
    const api = buildApi();
    expect(await api.character.has('exists')).toBe(true);
  });

  test('clear writes empty object to userStorage', async () => {
    const api = buildApi();
    await api.character.clear();
    expect(mockSpindle.userStorage.setJson).toHaveBeenCalled();
    const storedValue = mockSpindle.userStorage.setJson.mock.calls[0] as any;
    expect(storedValue[1]).toEqual({});
  });

  test('delete returns true and persists when key exists', async () => {
    mockSpindle.userStorage.getJson.mockReturnValueOnce(
      Promise.resolve({ score: 42, other: 'keep' }),
    );
    const api = buildApi();
    expect(await api.character.delete('score')).toBe(true);
    // Verify the stored object no longer has the key
    const storedValue = mockSpindle.userStorage.setJson.mock.calls[0] as any;
    expect(storedValue[1]).toEqual({ other: 'keep' });
  });
});

// ─── global — additional coverage ────────────────────────────────────────────

describe('global (additional coverage)', () => {
  test('clear deletes all global variable keys', async () => {
    mockSpindle.variables.global.list.mockReturnValueOnce(
      Promise.resolve({ key1: 'v1', key2: 'v2', key3: 'v3' }),
    );
    const api = buildApi();
    await api.global.clear();
    expect(mockSpindle.variables.global.delete).toHaveBeenCalledTimes(3);
  });
});
