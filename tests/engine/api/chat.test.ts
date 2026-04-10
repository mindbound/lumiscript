import { describe, test, expect, beforeEach, mock } from 'bun:test';
import { buildChatAPI } from '../../../src/engine/api/chat.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { listAll, clearAll as clearInjections } from '../../../src/engine/injection-store.js';
let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildChatAPI(createTestDeps(overrides));
}

// ─── getChatId ───────────────────────────────────────────────────────────────

describe('getChatId', () => {
  test('returns the active chatId', () => {
    const api = buildApi();
    expect(api.getChatId()).toBe('test-chat-id');
  });

  test('returns null when no chat is active', () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    expect(api.getChatId()).toBeNull();
  });
});

// ─── getMessages ─────────────────────────────────────────────────────────────

describe('getMessages', () => {
  test('delegates to spindle.chat.getMessages and maps to camelCase', async () => {
    const msgs = [
      { id: 'm1', role: 'user' as const, content: 'hi', metadata: undefined, swipe_id: 0, swipes: ['hi'] },
    ];
    mockSpindle.chat.getMessages.mockReturnValueOnce(Promise.resolve(msgs) as any);
    const api = buildApi();
    const result = await api.getMessages();
    expect(result).toHaveLength(1);
    expect(result[0]!.swipeId).toBe(0);   // mapped from swipe_id
    expect(result[0]!.swipes).toEqual(['hi']);
    expect((result[0] as any).swipe_id).toBeUndefined(); // snake_case removed
  });

  test('supports last option to slice from end', async () => {
    const msgs = [
      { id: 'm1', role: 'user' as const, content: 'a', swipe_id: 0, swipes: ['a'] },
      { id: 'm2', role: 'assistant' as const, content: 'b', swipe_id: 0, swipes: ['b'] },
      { id: 'm3', role: 'user' as const, content: 'c', swipe_id: 0, swipes: ['c'] },
    ];
    mockSpindle.chat.getMessages.mockReturnValueOnce(Promise.resolve(msgs) as any);
    const api = buildApi();
    const result = await api.getMessages({ last: 2 });
    expect(result).toHaveLength(2);
    expect(result[0]!.id).toBe('m2');
  });

  test('supports first option to slice from start', async () => {
    const msgs = [
      { id: 'm1', role: 'user' as const, content: 'a', swipe_id: 0, swipes: ['a'] },
      { id: 'm2', role: 'assistant' as const, content: 'b', swipe_id: 0, swipes: ['b'] },
    ];
    mockSpindle.chat.getMessages.mockReturnValueOnce(Promise.resolve(msgs) as any);
    const api = buildApi();
    const result = await api.getMessages({ first: 1 });
    expect(result).toHaveLength(1);
    expect(result[0]!.id).toBe('m1');
  });

  test('throws when chat_mutation permission is denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.getMessages()).toThrow('PERMISSION_DENIED');
  });

  test('throws when no active chat', () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    expect(() => api.getMessages()).toThrow('no active chat');
  });
});

// ─── sendMessage ─────────────────────────────────────────────────────────────

describe('sendMessage', () => {
  test('delegates to spindle.chat.appendMessage with default user role', async () => {
    const api = buildApi();
    await api.sendMessage('hello');
    expect(mockSpindle.chat.appendMessage).toHaveBeenCalledWith(
      'test-chat-id',
      { role: 'user', content: 'hello', metadata: undefined },
    );
  });

  test('uses specified role', async () => {
    const api = buildApi();
    await api.sendMessage('test', { role: 'system' });
    const call = mockSpindle.chat.appendMessage.mock.calls[0] as any;
    expect(call[1].role).toBe('system');
  });

  test('throws when permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.sendMessage('hi')).toThrow('PERMISSION_DENIED');
  });
});

// ─── editMessage ─────────────────────────────────────────────────────────────

describe('editMessage', () => {
  test('delegates to spindle.chat.updateMessage', async () => {
    const api = buildApi();
    await api.editMessage('msg-1', 'new content');
    expect(mockSpindle.chat.updateMessage).toHaveBeenCalledWith(
      'test-chat-id', 'msg-1', { content: 'new content' },
    );
  });
});

// ─── deleteMessage ───────────────────────────────────────────────────────────

describe('deleteMessage', () => {
  test('delegates to spindle.chat.deleteMessage', async () => {
    const api = buildApi();
    await api.deleteMessage('msg-1');
    expect(mockSpindle.chat.deleteMessage).toHaveBeenCalledWith('test-chat-id', 'msg-1');
  });
});

// ─── getMetadata ─────────────────────────────────────────────────────────────

describe('getMetadata', () => {
  test('reads a metadata key from the chat DTO', async () => {
    mockSpindle.chats.get.mockReturnValueOnce(
      Promise.resolve({ metadata: { key1: 'value1' } }) as any,
    );
    const api = buildApi();
    expect(await api.getMetadata('key1')).toBe('value1');
  });

  test('throws when the chat is not found', async () => {
    mockSpindle.chats.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    await expect(api.getMetadata('key')).rejects.toThrow('not found');
  });

  test('throws when chats permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.getMetadata('key')).toThrow('PERMISSION_DENIED');
  });
});

// ─── setMetadata ─────────────────────────────────────────────────────────────

describe('setMetadata', () => {
  test('performs read-modify-write to update a single metadata key', async () => {
    mockSpindle.chats.get.mockReturnValueOnce(
      Promise.resolve({ metadata: { existing: 'value' } }) as any,
    );
    const api = buildApi();
    await api.setMetadata('newKey', 'newValue');
    expect(mockSpindle.chats.update).toHaveBeenCalledTimes(1);
    const call = mockSpindle.chats.update.mock.calls[0] as any;
    expect(call[1]).toEqual({ metadata: { existing: 'value', newKey: 'newValue' } });
  });

  test('serialises concurrent setMetadata calls for the same chat', async () => {
    let callCount = 0;
    mockSpindle.chats.get.mockImplementation((() => {
      callCount++;
      return Promise.resolve({ metadata: { counter: callCount } });
    }) as any);
    const api = buildApi();
    // Fire two setMetadata calls concurrently
    await Promise.all([
      api.setMetadata('a', 1),
      api.setMetadata('b', 2),
    ]);
    // Both should have completed (two updates)
    expect(mockSpindle.chats.update).toHaveBeenCalledTimes(2);
  });
});

// ─── inject ──────────────────────────────────────────────────────────────────

describe('inject', () => {
  test('adds an injection to the store with defaults', () => {
    const api = buildApi();
    api.inject('inj-1', 'injected content');
    const injections = listAll();
    expect(injections).toHaveLength(1);
    expect(injections[0]!.mode).toBe('intercept');
    expect(injections[0]!.role).toBe('system');
    expect(injections[0]!.depth).toBe(0);
    expect(injections[0]!.ephemeral).toBe(false);
  });

  test('respects injection options', () => {
    const api = buildApi();
    api.inject('inj-1', 'content', { mode: 'context', role: 'user', depth: 3, ephemeral: true });
    const inj = listAll()[0]!;
    expect(inj.mode).toBe('context');
    expect(inj.role).toBe('user');
    expect(inj.depth).toBe(3);
    expect(inj.ephemeral).toBe(true);
  });

  test('throws when interceptor permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.inject('x', 'y')).toThrow('PERMISSION_DENIED');
  });
});

// ─── removeInjection ─────────────────────────────────────────────────────────

describe('removeInjection', () => {
  test('removes an injection by id (no permission required)', () => {
    const api = buildApi();
    api.inject('inj-1', 'content');
    api.removeInjection('inj-1');
    expect(listAll()).toHaveLength(0);
  });
});

// ─── clearInjections ─────────────────────────────────────────────────────────

describe('clearInjections', () => {
  test('clears only this script\'s injections', () => {
    const api = buildApi({ script: { id: 'script-A' } });
    api.inject('inj-a', 'a');

    // Add another script's injection directly
    const { addInjection } = require('../../../src/engine/injection-store.js');
    addInjection({ id: 'inj-b', content: 'b', mode: 'intercept', role: 'system', depth: 0, ephemeral: false, scriptId: 'script-B' });

    api.clearInjections();
    expect(listAll()).toHaveLength(1);
    expect(listAll()[0]!.scriptId).toBe('script-B');
  });
});

// ─── clearAllInjections ──────────────────────────────────────────────────────

describe('clearAllInjections', () => {
  test('clears all injections (requires interceptor + allowDangerous)', () => {
    const api = buildApi({ script: { allowDangerous: true } });
    api.inject('a', 'content-a');
    api.inject('b', 'content-b');
    api.clearAllInjections();
    expect(listAll()).toHaveLength(0);
  });

  test('throws when allowDangerous is false', () => {
    const api = buildApi({ script: { allowDangerous: false } });
    expect(() => api.clearAllInjections()).toThrow('Allow Dangerous');
  });
});

// ─── getInjections ───────────────────────────────────────────────────────────

describe('getInjections', () => {
  test('returns mapped injection info for all active injections', () => {
    const api = buildApi();
    api.inject('inj-1', 'content-1', { mode: 'intercept', role: 'system', depth: 2, ephemeral: true });
    api.inject('inj-2', 'content-2', { mode: 'context', role: 'user' });

    const injections = api.getInjections();
    expect(injections).toHaveLength(2);
    expect(injections[0]!.id).toBe('inj-1');
    expect(injections[0]!.mode).toBe('intercept');
    expect(injections[0]!.depth).toBe(2);
    expect(injections[0]!.ephemeral).toBe(true);
    expect(injections[1]!.id).toBe('inj-2');
    expect(injections[1]!.mode).toBe('context');
    expect(injections[1]!.role).toBe('user');
  });

  test('returns empty array when no injections exist', () => {
    const api = buildApi();
    expect(api.getInjections()).toEqual([]);
  });
});

// ─── setMessageHidden ────────────────────────────────────────────────────────

describe('setMessageHidden', () => {
  test('delegates to spindle.chat.setMessageHidden', async () => {
    const api = buildApi();
    await api.setMessageHidden('msg-1', true);
    expect(mockSpindle.chat.setMessageHidden).toHaveBeenCalledWith('test-chat-id', 'msg-1', true);
  });

  test('throws when chat_mutation permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.setMessageHidden('msg-1', true)).toThrow('PERMISSION_DENIED');
  });

  test('throws when no active chat', () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    expect(() => api.setMessageHidden('msg-1', true)).toThrow('no active chat');
  });
});

// ─── setMessagesHidden ───────────────────────────────────────────────────────

describe('setMessagesHidden', () => {
  test('delegates to spindle.chat.setMessagesHidden with array of ids', async () => {
    const api = buildApi();
    await api.setMessagesHidden(['msg-1', 'msg-2', 'msg-3'], false);
    expect(mockSpindle.chat.setMessagesHidden).toHaveBeenCalledWith(
      'test-chat-id', ['msg-1', 'msg-2', 'msg-3'], false,
    );
  });

  test('throws when chat_mutation permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.setMessagesHidden(['msg-1'], true)).toThrow('PERMISSION_DENIED');
  });
});

// ─── isMessageHidden ─────────────────────────────────────────────────────────

describe('isMessageHidden', () => {
  test('delegates to spindle.chat.isMessageHidden and returns result', async () => {
    mockSpindle.chat.isMessageHidden.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.isMessageHidden('msg-1')).toBe(true);
    expect(mockSpindle.chat.isMessageHidden).toHaveBeenCalledWith('test-chat-id', 'msg-1');
  });

  test('returns false for non-hidden messages', async () => {
    mockSpindle.chat.isMessageHidden.mockReturnValueOnce(Promise.resolve(false));
    const api = buildApi();
    expect(await api.isMessageHidden('msg-2')).toBe(false);
  });

  test('throws when chat_mutation permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.isMessageHidden('msg-1')).toThrow('PERMISSION_DENIED');
  });
});
