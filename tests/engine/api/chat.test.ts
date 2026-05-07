import { describe, test, expect, beforeEach, mock } from 'bun:test';
import { buildChatAPI } from '../../../src/engine/api/chat.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { listAll, clearAll as clearInjections } from '../../../src/engine/injection-store.js';
import { listAll as listProcessorEntries } from '../../../src/engine/message-content-processor-registry.js';
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

// ─── onInjectionsChanged callback (v0.27.2+) ─────────────────────────────────
//
// `inject` / `removeInjection` / `clearInjections` / `clearAllInjections` are
// supposed to fire `onInjectionsChanged` after mutating the injection store
// so the LumiScriptPanel's Active Injections section refreshes mid-execution
// (without waiting for a manual `get_injections` round-trip). Read-only
// methods (`getInjections`) must not fire it.

describe('onInjectionsChanged callback', () => {
  test('inject fires onInjectionsChanged once', () => {
    const onInjectionsChanged = mock(() => {});
    const api = buildApi({ onInjectionsChanged });
    api.inject('inj-1', 'content');
    expect(onInjectionsChanged).toHaveBeenCalledTimes(1);
  });

  test('removeInjection fires onInjectionsChanged once', () => {
    const onInjectionsChanged = mock(() => {});
    const api = buildApi({ onInjectionsChanged });
    api.inject('inj-1', 'content');
    onInjectionsChanged.mockClear();  // ignore the inject() fire above
    api.removeInjection('inj-1');
    expect(onInjectionsChanged).toHaveBeenCalledTimes(1);
  });

  test('clearInjections fires onInjectionsChanged once', () => {
    const onInjectionsChanged = mock(() => {});
    const api = buildApi({ onInjectionsChanged });
    api.inject('inj-1', 'a');
    api.inject('inj-2', 'b');
    onInjectionsChanged.mockClear();  // ignore the two inject() fires above
    api.clearInjections();
    expect(onInjectionsChanged).toHaveBeenCalledTimes(1);
  });

  test('clearAllInjections fires onInjectionsChanged once', () => {
    const onInjectionsChanged = mock(() => {});
    const api = buildApi({
      onInjectionsChanged,
      script: { allowDangerous: true },  // clearAllInjections gates on this
    });
    api.inject('inj-1', 'content');
    onInjectionsChanged.mockClear();
    api.clearAllInjections();
    expect(onInjectionsChanged).toHaveBeenCalledTimes(1);
  });

  test('getInjections does NOT fire onInjectionsChanged', () => {
    const onInjectionsChanged = mock(() => {});
    const api = buildApi({ onInjectionsChanged });
    api.inject('inj-1', 'content');
    onInjectionsChanged.mockClear();
    api.getInjections();
    expect(onInjectionsChanged).not.toHaveBeenCalled();
  });

  test('mutations are tolerant of an absent callback (no-op when undefined)', () => {
    // Some test fixtures or future internal callers may build the API without
    // wiring onInjectionsChanged. The mutation should still mutate the store
    // and not throw.
    const api = buildApi({ onInjectionsChanged: undefined });
    expect(() => {
      api.inject('inj-1', 'content');
      api.removeInjection('inj-1');
    }).not.toThrow();
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

// ─── registerContentProcessor ───────────────────────────────────────────────
//
// The thin layer above `message-content-processor-registry`. Registry-internal
// behaviour (priority sort, chain threading, extra-delta semantics, swipe-
// origin extra dropping, timeout isolation) is covered in
// `tests/engine/message-content-processor-registry.test.ts`. Concerns at this
// layer: permission gating, handle shape, validation passthrough.

describe('registerContentProcessor', () => {
  test('returns a handle with id and remove() when permission granted', () => {
    const api = buildApi();
    const handle = api.registerContentProcessor(() => undefined, { id: 'p1' });
    expect(handle.id).toBe('p1');
    expect(typeof handle.remove).toBe('function');
    expect(listProcessorEntries().length).toBe(1);
  });

  test('throws PERMISSION_DENIED when chat_mutation is denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.registerContentProcessor(() => undefined)).toThrow(
      /PERMISSION_DENIED:chat_mutation/,
    );
    expect(listProcessorEntries().length).toBe(0);
  });

  test('auto-generates id when omitted', () => {
    const api = buildApi();
    const handle = api.registerContentProcessor(() => undefined);
    expect(typeof handle.id).toBe('string');
    expect(handle.id.length).toBeGreaterThan(0);
  });

  test('propagates registry validation errors verbatim', () => {
    const api = buildApi();
    expect(() =>
      api.registerContentProcessor(undefined as unknown as () => void),
    ).toThrow(/handler must be a function/);
    expect(() =>
      api.registerContentProcessor(() => undefined, { priority: NaN }),
    ).toThrow(/priority must be finite/);
  });
});

describe('handle.remove (content processor)', () => {
  test('removes the entry from the registry', () => {
    const api = buildApi();
    const handle = api.registerContentProcessor(() => undefined, { id: 'p1' });
    expect(listProcessorEntries().length).toBe(1);
    handle.remove();
    expect(listProcessorEntries().length).toBe(0);
  });

  test('is idempotent', () => {
    const api = buildApi();
    const handle = api.registerContentProcessor(() => undefined);
    expect(() => {
      handle.remove();
      handle.remove();
    }).not.toThrow();
  });

  test('only removes the entry owned by the calling script', () => {
    const apiA = buildApi({ script: { id: 'script-1', name: 'A' } });
    const apiB = buildApi({ script: { id: 'script-2', name: 'B' } });
    apiB.registerContentProcessor(() => undefined, { id: 'shared' });
    const handleA = apiA.registerContentProcessor(() => undefined, { id: 'shared' });
    expect(listProcessorEntries().length).toBe(2);
    handleA.remove();
    const remaining = listProcessorEntries();
    expect(remaining.length).toBe(1);
    expect(remaining[0]!.scriptId).toBe('script-2');
  });
});

describe('listContentProcessors', () => {
  test('returns empty list when none are registered', () => {
    const api = buildApi();
    expect(api.listContentProcessors()).toEqual([]);
  });

  test('returns snapshots across all scripts', () => {
    const apiA = buildApi({ script: { id: 's1', name: 'A' } });
    const apiB = buildApi({ script: { id: 's2', name: 'B' } });
    apiA.registerContentProcessor(() => undefined, { id: 'a1', priority: 10, origin: 'create' });
    apiB.registerContentProcessor(() => undefined, { id: 'b1', priority: 50 });
    const list = apiA.listContentProcessors();
    expect(list.length).toBe(2);
    const a = list.find((e) => e.id === 'a1')!;
    expect(a.scriptId).toBe('s1');
    expect(a.priority).toBe(10);
    expect(a.origins).toEqual(['create']);
    const b = list.find((e) => e.id === 'b1')!;
    expect(b.origins).toBeNull();
  });

  test('does not require chat_mutation permission (un-gated diagnostic)', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.listContentProcessors()).not.toThrow();
  });
});
