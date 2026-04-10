import { describe, test, expect, beforeEach } from 'bun:test';
import { buildChatsAPI } from '../../../src/engine/api/chats-session.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildChatsAPI(createTestDeps(overrides));
}

const chatDTO = {
  id: 'chat-1', character_id: 'char-1', name: 'Test Chat',
  metadata: { key: 'value' }, created_at: '2026-01-01', updated_at: '2026-01-02',
};

describe('list', () => {
  test('maps DTOs to camelCase', async () => {
    mockSpindle.chats.list.mockReturnValueOnce(
      Promise.resolve({ data: [chatDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list();
    expect(result.data[0]!.characterId).toBe('char-1');
    expect(result.data[0]!.characterId).toBe('char-1');
  });

  test('throws when chats permission denied', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.list()).rejects.toThrow('PERMISSION_DENIED');
  });
});

describe('get', () => {
  test('returns mapped session or null', async () => {
    mockSpindle.chats.get.mockReturnValueOnce(Promise.resolve(chatDTO));
    const api = buildApi();
    const result = await api.get('chat-1');
    expect(result!.name).toBe('Test Chat');
  });

  test('returns null when not found', async () => {
    mockSpindle.chats.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.get('missing')).toBeNull();
  });
});

describe('getActive', () => {
  test('returns the active chat session or null', async () => {
    mockSpindle.chats.getActive.mockReturnValueOnce(Promise.resolve(chatDTO));
    const api = buildApi();
    const result = await api.getActive();
    expect(result!.id).toBe('chat-1');
  });
});

describe('update', () => {
  test('delegates to spindle.chats.update and maps result', async () => {
    mockSpindle.chats.update.mockReturnValueOnce(Promise.resolve(chatDTO));
    const api = buildApi();
    const result = await api.update('chat-1', { name: 'New Name' });
    expect(result.id).toBe('chat-1');
  });
});

describe('delete', () => {
  test('delegates to spindle.chats.delete', async () => {
    mockSpindle.chats.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.delete('chat-1')).toBe(true);
  });
});

describe('getMemories', () => {
  test('delegates to spindle.chats.getMemories with chatId param', async () => {
    mockSpindle.chats.getMemories.mockReturnValueOnce(
      Promise.resolve({ results: [{ content: 'memory' }] }),
    );
    const api = buildApi();
    await api.getMemories('chat-99', { topK: 5 });
    const call = mockSpindle.chats.getMemories.mock.calls[0] as any;
    expect(call[0]).toBe('chat-99');
    expect(call[1].topK).toBe(5);
  });

  test('falls back to active chatId when not provided', async () => {
    mockSpindle.chats.getMemories.mockReturnValueOnce(
      Promise.resolve({ results: [] }),
    );
    const api = buildApi();
    await api.getMemories(undefined);
    const call = mockSpindle.chats.getMemories.mock.calls[0] as any;
    expect(call[0]).toBe('test-chat-id');
  });

  test('throws when no chatId available', async () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    await expect(api.getMemories(undefined)).rejects.toThrow('no active chat');
  });
});
