import { describe, test, expect, mock } from 'bun:test';
import { buildBroadcastAPI } from '../../../src/engine/api/broadcast.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { emit, on, clearAll } from '../../../src/engine/broadcast-bus.js';

// ─── buildBroadcastAPI ───────────────────────────────────────────────────────

describe('buildBroadcastAPI', () => {
  const deps = createTestDeps({ script: { id: 'script-1' } });
  const api = buildBroadcastAPI(deps);

  // ─── emit ──────────────────────────────────────────────────────────────

  describe('emit', () => {
    test('delivers payload through the broadcast bus', () => {
      const handler = mock(() => {});
      on('custom-event', handler, 'listener-script');

      api.emit('custom-event', { data: 123 });

      expect(handler).toHaveBeenCalledWith({ data: 123 });
    });

    test('throws when event name starts with "ls:"', () => {
      expect(() => api.emit('ls:reserved', {})).toThrow('reserved');
    });

    test('allows events that contain "ls:" but do not start with it', () => {
      expect(() => api.emit('custom:ls:event', {})).not.toThrow();
    });
  });

  // ─── on ────────────────────────────────────────────────────────────────

  describe('on', () => {
    test('subscribes a handler to the broadcast bus', () => {
      const handler = mock(() => {});
      api.on('my-event', handler);

      emit('my-event', 'hello');

      expect(handler).toHaveBeenCalledWith('hello');
    });

    test('returns an unsubscribe function', () => {
      const handler = mock(() => {});
      const unsub = api.on('my-event', handler);

      unsub();
      emit('my-event', 'hello');

      expect(handler).toHaveBeenCalledTimes(0);
    });

    test('tags the subscription with the script id for lifecycle cleanup', () => {
      const handler = mock(() => {});
      api.on('lifecycle-test', handler);

      // clearByScriptId should remove this subscription
      const { clearByScriptId } = require('../../../src/engine/broadcast-bus.js');
      clearByScriptId('script-1');

      emit('lifecycle-test', 'data');
      expect(handler).toHaveBeenCalledTimes(0);
    });
  });
});
