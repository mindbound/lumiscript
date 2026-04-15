/**
 * TriggerRegistry tests — focused on the concurrent-batch aggregation
 * semantics. Before batch aggregation, only the LAST-finishing closure in
 * a burst of concurrent invocations reported its own result, which meant:
 *   - a fast no-op (e.g. guard-returning SETTINGS_UPDATED handler for a
 *     non-matching key) rounding to 0 ms would hide the real invocation's
 *     duration when it happened to finish first;
 *   - a failure in one invocation would be silently swallowed if a later
 *     invocation succeeded and finished last.
 *
 * The tests below exercise the aggregator directly by capturing the handler
 * registered via `spindle.on` and invoking it with payloads that take
 * different durations / succeed vs. fail.
 */

import { describe, test, expect, mock } from 'bun:test';
import { TriggerRegistry, type TriggerDeps } from '../../src/engine/trigger-registry.js';
import type { Script } from '../../src/types/script.js';
import type { BackendToFrontend } from '../../src/types/messages.js';
import { ScriptStorage } from '../../src/storage/script-storage.js';
import { InMemoryStorageAdapter } from '../_infra/mock-storage-adapter.js';
import { setActiveContext } from '../../src/engine/binding.js';

function makeScript(code: string, overrides?: Partial<Script>): Script {
  return {
    id: 'trigger-test',
    name: 'Trigger Test',
    code,
    enabled: true,
    allowDangerous: false,
    type: 'trigger',
    bindings: [],
    triggers: ['TEST_EVENT'],
    createdAt: Date.now(),
    updatedAt: Date.now(),
    ...overrides,
  };
}

/**
 * Build a registry with a single trigger script, capture the handler that
 * was registered via `spindle.on`, and return the pieces needed to drive
 * invocations from the test body.
 */
async function setupRegistry(scriptCode: string, overrides?: Partial<Script>) {
  const adapter = new InMemoryStorageAdapter();
  const storage = new ScriptStorage(adapter, () => 'test-user');
  await storage.load();

  const seeded = makeScript(scriptCode, overrides);
  await storage.store.create(seeded);

  const deps: TriggerDeps = {
    grantedPermissions: new Set(),
    userId: 'test-user',
    scriptStorage: storage,
    scriptTimeoutMs: 5_000,
  };

  const sendToFrontend = mock((_msg: BackendToFrontend) => {});
  const registry = new TriggerRegistry(() => deps, sendToFrontend);

  setActiveContext({ chatId: 'test-chat', characterId: 'test-char' });

  await registry.register(seeded);

  // spindle.on was called once per trigger event. Grab the handler from the
  // mock's call history — that's what we invoke directly to simulate fires.
  const onMock = (globalThis as any).spindle.on as any;
  const lastCall = onMock.mock.calls.slice(-1)[0];
  const handler = lastCall[1] as (payload: unknown) => Promise<void>;

  return { registry, storage, handler, sendToFrontend };
}

function executionEnds(sendToFrontend: ReturnType<typeof mock>): any[] {
  return (sendToFrontend.mock.calls as any[][])
    .map(c => c[0] as any)
    .filter(m => m.type === 'execution_ended');
}

describe('TriggerRegistry — batch aggregation', () => {
  test('reports max duration across concurrent invocations', async () => {
    const { handler, sendToFrontend } = await setupRegistry(`
      if (data.key === 'slow') await new Promise(r => setTimeout(r, 50));
    `);

    // 2 fast + 1 slow, fired concurrently. Pre-aggregation, whichever
    // finished last would win — post-fix, the max (~50 ms) wins.
    await Promise.all([
      handler({ __event: 'TEST_EVENT', key: 'fast' }),
      handler({ __event: 'TEST_EVENT', key: 'slow' }),
      handler({ __event: 'TEST_EVENT', key: 'fast' }),
    ]);

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(true);
    expect(ends[0].duration).toBeGreaterThanOrEqual(45);
  });

  test('batch is marked failed when any invocation throws', async () => {
    const { handler, sendToFrontend } = await setupRegistry(`
      if (data.key === 'bad') throw new Error('boom');
    `);

    await Promise.all([
      handler({ __event: 'TEST_EVENT', key: 'ok' }),
      handler({ __event: 'TEST_EVENT', key: 'bad' }),
      handler({ __event: 'TEST_EVENT', key: 'ok' }),
    ]);

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(false);
    expect(ends[0].error).toBe('boom');
  });

  test('duration reflects real work even when a fast no-op finishes last', async () => {
    // This is the exact symptom that motivated the fix: the slow invocation
    // starts first and completes first; fast no-ops start a tick later and
    // therefore finish after. Pre-fix, the last-to-finish (fast no-op) dominated
    // the reported duration — so users saw 0 ms for meaningful work.
    const { handler, sendToFrontend } = await setupRegistry(`
      if (data.key !== 'target') return;
      await new Promise(r => setTimeout(r, 50));
    `);

    const slow = handler({ __event: 'TEST_EVENT', key: 'target' });
    // Schedule the fast no-ops slightly later so the slow one is NOT
    // the last to finish (its duration would then win trivially).
    await new Promise(r => setTimeout(r, 10));
    const fast1 = handler({ __event: 'TEST_EVENT', key: 'other' });
    const fast2 = handler({ __event: 'TEST_EVENT', key: 'other' });
    await Promise.all([slow, fast1, fast2]);

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].duration).toBeGreaterThanOrEqual(40);
  });

  test('toast fires once on batch failure with the first error message', async () => {
    const { handler } = await setupRegistry(`
      if (data.key === 'err1') throw new Error('first-error');
      if (data.key === 'err2') throw new Error('second-error');
    `);

    await Promise.all([
      handler({ __event: 'TEST_EVENT', key: 'ok' }),
      handler({ __event: 'TEST_EVENT', key: 'err1' }),
      handler({ __event: 'TEST_EVENT', key: 'err2' }),
    ]);

    const toastMock = (globalThis as any).spindle.toast.error as any;
    expect(toastMock.mock.calls.length).toBe(1);
    // Aggregator keeps the FIRST error that landed, regardless of which
    // invocation closure is the last to decrement the counter. Both err1
    // and err2 are valid "first" depending on scheduler order; either is
    // acceptable — what matters is that the toast fires exactly once and
    // carries one of the real error messages, not 'Unknown error'.
    const toastMsg = toastMock.mock.calls[0][0];
    expect(['first-error', 'second-error']).toContain(toastMsg);
  });

  test('consecutive batches do not bleed state into each other', async () => {
    const { handler, sendToFrontend } = await setupRegistry(`
      if (data.key === 'fail') throw new Error('fail');
    `);

    // Batch 1 — single failing invocation, drains to remaining === 0.
    await handler({ __event: 'TEST_EVENT', key: 'fail' });
    // Batch 2 — single successful invocation. Must not see batch 1's error.
    await handler({ __event: 'TEST_EVENT', key: 'ok' });

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(2);
    expect(ends[0].success).toBe(false);
    expect(ends[0].error).toBe('fail');
    expect(ends[1].success).toBe(true);
    expect(ends[1].error).toBeUndefined();
  });

  test('single invocation still reports its own duration (not zero)', async () => {
    const { handler, sendToFrontend } = await setupRegistry(`
      await new Promise(r => setTimeout(r, 40));
    `);

    await handler({ __event: 'TEST_EVENT' });

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(true);
    expect(ends[0].duration).toBeGreaterThanOrEqual(35);
  });
});
