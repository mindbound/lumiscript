import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  emit,
  on,
  clearByScriptId,
  clearAll,
} from '../../src/engine/broadcast-bus.js';
import { executionStatusStore } from '../../src/engine/execution-status.js';

// clearAll is also called by setup.ts preload, but explicit for clarity
beforeEach(() => {
  clearAll();
  executionStatusStore.clear();
});

/** Microtask flush — settle any pending then-callbacks scheduled during emit. */
async function flushMicrotasks(): Promise<void> {
  // Two ticks: one for the inner .then on the user promise, one for the
  // wrapper's settlement-handler that calls markSuccess / markError.
  await Promise.resolve();
  await Promise.resolve();
}

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

// ─── async-tracking opt-in (v0.26.4+) ────────────────────────────────────────
//
// Handlers that return a thenable are tracked through executionStatusStore
// for the duration of the awaited work. Sync-returning handlers produce no
// status update.

describe('async-tracking opt-in', () => {
  test('sync handler returning void produces no status update', () => {
    on('test', () => { /* sync, no return */ }, 'script-1');
    emit('test');
    expect(executionStatusStore.getStatus('script-1').status).toBe('idle');
  });

  test('handler returning Promise marks running immediately, success on resolve', async () => {
    let resolveInner!: () => void;
    const innerPromise = new Promise<void>((r) => { resolveInner = r; });
    on('test', () => innerPromise, 'script-1');

    emit('test');
    // Immediately after emit returns, status should already be 'running'
    expect(executionStatusStore.getStatus('script-1').status).toBe('running');

    // Resolve the inner promise; wrapper should flip to 'success' on next tick.
    resolveInner();
    await flushMicrotasks();

    const status = executionStatusStore.getStatus('script-1');
    expect(status.status).toBe('success');
    expect(typeof status.duration).toBe('number');
  });

  test('handler returning rejected Promise marks error', async () => {
    // Suppress the broadcast-bus's console.error for this test — the
    // rejection is expected and shouldn't surface as a noisy warning.
    const originalError = console.error;
    console.error = () => {};
    try {
      let rejectInner!: (err: Error) => void;
      const innerPromise = new Promise<void>((_, r) => { rejectInner = r; });
      on('test', () => innerPromise, 'script-1');

      emit('test');
      expect(executionStatusStore.getStatus('script-1').status).toBe('running');

      rejectInner(new Error('boom'));
      await flushMicrotasks();

      const status = executionStatusStore.getStatus('script-1');
      expect(status.status).toBe('error');
      expect(status.errorMessage).toBe('boom');
      expect(typeof status.duration).toBe('number');
    } finally {
      console.error = originalError;
    }
  });

  test('sync handler that throws does not call markRunning (no Promise to track)', () => {
    // Suppress the expected console.error from the throw path.
    const originalError = console.error;
    console.error = () => {};
    try {
      on('test', () => { throw new Error('sync boom'); }, 'script-1');
      emit('test');
      expect(executionStatusStore.getStatus('script-1').status).toBe('idle');
    } finally {
      console.error = originalError;
    }
  });

  test('mix of sync and async handlers tracked independently', async () => {
    let resolveAsync!: () => void;
    const asyncPromise = new Promise<void>((r) => { resolveAsync = r; });

    on('test', () => { /* sync void */ }, 'sync-script');
    on('test', () => asyncPromise, 'async-script');

    emit('test');

    expect(executionStatusStore.getStatus('sync-script').status).toBe('idle');
    expect(executionStatusStore.getStatus('async-script').status).toBe('running');

    resolveAsync();
    await flushMicrotasks();

    expect(executionStatusStore.getStatus('sync-script').status).toBe('idle');
    expect(executionStatusStore.getStatus('async-script').status).toBe('success');
  });

  test('non-Promise object return is ignored (not a thenable)', () => {
    on('test', (() => ({ not: 'a promise' })) as unknown as (p: unknown) => void, 'script-1');
    emit('test');
    expect(executionStatusStore.getStatus('script-1').status).toBe('idle');
  });

  test('thenable-but-not-Promise (PromiseLike) is tracked', async () => {
    // Anything with a .then() method should be treated as a thenable.
    let invokedResolve: (() => void) | null = null;
    const customThenable = {
      then(resolve: () => void) {
        invokedResolve = resolve;
        return undefined as unknown as Promise<void>;
      },
    };
    on('test', (() => customThenable) as unknown as (p: unknown) => Promise<void>, 'script-1');
    emit('test');
    expect(executionStatusStore.getStatus('script-1').status).toBe('running');

    // Settle the thenable manually
    invokedResolve!();
    await flushMicrotasks();

    expect(executionStatusStore.getStatus('script-1').status).toBe('success');
  });
});
