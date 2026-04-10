import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  emit,
  on,
  clearByScriptId,
  clearAll,
} from '../../src/engine/broadcast-bus.js';

// clearAll is also called by setup.ts preload, but explicit for clarity
beforeEach(() => clearAll());

// ─── emit ────────────────────────────────────────────────────────────────────

describe('emit', () => {
  test('calls all handlers subscribed to the emitted event', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    on('test', h1, 'script-1');
    on('test', h2, 'script-2');

    emit('test', { data: 1 });

    expect(h1).toHaveBeenCalledTimes(1);
    expect(h2).toHaveBeenCalledTimes(1);
  });

  test('does nothing if no handlers are subscribed', () => {
    // Should not throw
    expect(() => emit('nonexistent', 'payload')).not.toThrow();
  });

  test('passes the payload to each handler', () => {
    const handler = mock(() => {});
    on('test', handler, 'script-1');

    emit('test', { key: 'value' });

    expect(handler).toHaveBeenCalledWith({ key: 'value' });
  });

  test('passes undefined when payload argument is omitted', () => {
    const handler = mock(() => {});
    on('test', handler, 'script-1');

    emit('test');

    expect(handler).toHaveBeenCalledWith(undefined);
  });

  test('catches error from one handler and still calls subsequent handlers', () => {
    const badHandler = mock(() => { throw new Error('boom'); });
    const goodHandler = mock(() => {});
    on('test', badHandler, 'script-1');
    on('test', goodHandler, 'script-2');

    emit('test', 'data');

    expect(badHandler).toHaveBeenCalledTimes(1);
    expect(goodHandler).toHaveBeenCalledTimes(1);
  });

  test('calls handlers in registration order', () => {
    const order: number[] = [];
    on('test', () => order.push(1), 'script-1');
    on('test', () => order.push(2), 'script-2');
    on('test', () => order.push(3), 'script-3');

    emit('test');

    expect(order).toEqual([1, 2, 3]);
  });
});

// ─── on ──────────────────────────────────────────────────────────────────────

describe('on', () => {
  test('subscribes a handler that receives subsequent emits', () => {
    const handler = mock(() => {});
    on('test', handler, 'script-1');

    emit('test', 'hello');

    expect(handler).toHaveBeenCalledWith('hello');
  });

  test('returns an unsubscribe function that stops future deliveries', () => {
    const handler = mock(() => {});
    const unsub = on('test', handler, 'script-1');

    emit('test');
    expect(handler).toHaveBeenCalledTimes(1);

    unsub();
    emit('test');
    expect(handler).toHaveBeenCalledTimes(1); // still 1, not called again
  });

  test('unsubscribe removes only the specific handler', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    const unsub1 = on('test', h1, 'script-1');
    on('test', h2, 'script-1');

    unsub1();
    emit('test');

    expect(h1).toHaveBeenCalledTimes(0);
    expect(h2).toHaveBeenCalledTimes(1);
  });

  test('allows multiple handlers on the same event', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    on('test', h1, 'script-1');
    on('test', h2, 'script-2');

    emit('test');

    expect(h1).toHaveBeenCalledTimes(1);
    expect(h2).toHaveBeenCalledTimes(1);
  });

  test('allows same scriptId to subscribe to different events', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    on('event-a', h1, 'script-1');
    on('event-b', h2, 'script-1');

    emit('event-a');
    emit('event-b');

    expect(h1).toHaveBeenCalledTimes(1);
    expect(h2).toHaveBeenCalledTimes(1);
  });
});

// ─── clearByScriptId ─────────────────────────────────────────────────────────

describe('clearByScriptId', () => {
  test('removes all subscriptions for a given scriptId', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    on('event-a', h1, 'script-1');
    on('event-b', h2, 'script-1');

    clearByScriptId('script-1');
    emit('event-a');
    emit('event-b');

    expect(h1).toHaveBeenCalledTimes(0);
    expect(h2).toHaveBeenCalledTimes(0);
  });

  test('does not affect subscriptions from a different scriptId', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    on('test', h1, 'script-1');
    on('test', h2, 'script-2');

    clearByScriptId('script-1');
    emit('test');

    expect(h1).toHaveBeenCalledTimes(0);
    expect(h2).toHaveBeenCalledTimes(1);
  });

  test('is a safe no-op for an unknown scriptId', () => {
    expect(() => clearByScriptId('unknown')).not.toThrow();
  });
});

// ─── clearAll ────────────────────────────────────────────────────────────────

describe('clearAll', () => {
  test('removes all subscriptions across all events and scripts', () => {
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    on('event-a', h1, 'script-1');
    on('event-b', h2, 'script-2');

    clearAll();
    emit('event-a');
    emit('event-b');

    expect(h1).toHaveBeenCalledTimes(0);
    expect(h2).toHaveBeenCalledTimes(0);
  });
});
