import { describe, test, expect, beforeEach, mock } from 'bun:test';
import { buildCommandsAPI } from '../../../src/engine/api/commands.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildCommandsAPI(createTestDeps(overrides));
}

// ─── register ────────────────────────────────────────────────────────────────

describe('register', () => {
  test('delegates to spindle.commands.register with mapped commands', () => {
    const api = buildApi();
    api.register([
      { id: 'cmd-1', label: 'Test Command', description: 'A test', keywords: ['test'], scope: 'chat' },
    ]);
    expect(mockSpindle.commands.register).toHaveBeenCalledTimes(1);
    const call = mockSpindle.commands.register.mock.calls[0] as any;
    expect(call[0]).toHaveLength(1);
    expect(call[0][0].id).toBe('cmd-1');
    expect(call[0][0].scope).toBe('chat');
  });

  test('handles empty command list', () => {
    const api = buildApi();
    api.register([]);
    expect(mockSpindle.commands.register).toHaveBeenCalledWith([]);
  });
});

// ─── unregister ──────────────────────────────────────────────────────────────

describe('unregister', () => {
  test('delegates to spindle.commands.unregister with command IDs', () => {
    const api = buildApi();
    api.unregister(['cmd-1', 'cmd-2']);
    expect(mockSpindle.commands.unregister).toHaveBeenCalledWith(['cmd-1', 'cmd-2']);
  });

  test('delegates without args to unregister all', () => {
    const api = buildApi();
    api.unregister();
    expect(mockSpindle.commands.unregister).toHaveBeenCalledWith(undefined);
  });
});

// ─── onInvoked ───────────────────────────────────────────────────────────────

describe('onInvoked', () => {
  test('registers a handler via spindle.commands.onInvoked', () => {
    const api = buildApi();
    const handler = mock(() => {});
    api.onInvoked(handler);
    expect(mockSpindle.commands.onInvoked).toHaveBeenCalledTimes(1);
  });

  test('maps context fields from SpindleCommandContextDTO', () => {
    // Capture the wrapped handler that LS passes to spindle
    let capturedHandler: any;
    mockSpindle.commands.onInvoked.mockImplementation((h: any) => {
      capturedHandler = h;
      return mock(() => {});
    });

    const userHandler = mock(() => {});
    const api = buildApi();
    api.onInvoked(userHandler);

    // Simulate Spindle invoking the command
    capturedHandler('cmd-1', {
      route: '/chat/abc',
      chatId: 'chat-1',
      characterId: 'char-1',
      isGroupChat: false,
    });

    expect(userHandler).toHaveBeenCalledWith('cmd-1', {
      route: '/chat/abc',
      chatId: 'chat-1',
      characterId: 'char-1',
      isGroupChat: false,
    });
  });

  test('returns an unsubscribe function that cleans up', () => {
    const spindleUnsub = mock(() => {});
    mockSpindle.commands.onInvoked.mockReturnValueOnce(spindleUnsub);
    const api = buildApi();
    const unsub = api.onInvoked(mock(() => {}));
    unsub();
    expect(spindleUnsub).toHaveBeenCalledTimes(1);
  });

  test('auto-unsubscribes previous handler on re-invocation (dedup)', () => {
    const unsub1 = mock(() => {});
    const unsub2 = mock(() => {});
    mockSpindle.commands.onInvoked
      .mockReturnValueOnce(unsub1)
      .mockReturnValueOnce(unsub2);

    const api = buildApi();
    api.onInvoked(mock(() => {})); // first handler
    api.onInvoked(mock(() => {})); // second handler — should unsub first

    expect(unsub1).toHaveBeenCalledTimes(1); // old handler unsubscribed
    expect(unsub2).toHaveBeenCalledTimes(0); // new handler still active
  });
});
