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

// ─── ls:teardown dispatch ────────────────────────────────────────────────────

/**
 * Teardown path sets up the same way as event-handler path but invokes
 * `fireTeardown(script, reason)` directly instead of routing through a
 * captured spindle.on handler. Teardown isn't dispatched via Spindle's
 * event bus — it's a synthetic LS event fired by backend.ts before
 * disable/delete cleanup.
 */
async function setupForTeardown(
  scriptCode: string,
  overrides?: Partial<Script>,
) {
  const adapter = new InMemoryStorageAdapter();
  const storage = new ScriptStorage(adapter, () => 'test-user');
  await storage.load();

  const seeded = makeScript(scriptCode, {
    triggers: ['ls:teardown'],
    ...overrides,
  });
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

  // Registering subscribes to Spindle events — synthetic ls:teardown is
  // filtered out (as intended), so no spindle.on call is made. We then
  // invoke fireTeardown directly in the tests below.
  await registry.register(seeded);

  return { registry, storage, seeded, sendToFrontend };
}

describe('fireTeardown', () => {
  test('runs the handler body when the script declares ls:teardown', async () => {
    const { registry, seeded, sendToFrontend } = await setupForTeardown(`
      console.log(\`teardown: \${data.reason}\`);
    `);

    await registry.fireTeardown(seeded, 'disabled');

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(true);
  });

  test("passes reason discriminant into the handler's data payload", async () => {
    const { registry, seeded, sendToFrontend } = await setupForTeardown(`
      if (data.reason !== 'deleted') throw new Error('wrong reason: ' + data.reason);
    `);

    await registry.fireTeardown(seeded, 'deleted');

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(true);
  });

  test('no-ops when the script does not declare ls:teardown', async () => {
    const { registry, seeded, sendToFrontend } = await setupForTeardown(`
      throw new Error('should not run');
    `, { triggers: ['MESSAGE_SENT'] });  // declares a different trigger

    await registry.fireTeardown(seeded, 'disabled');

    // No execution_ended message — handler was never dispatched.
    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(0);
  });

  test('skips teardown when a disabled script is being deleted', async () => {
    // Disabled scripts were already torn down on the earlier disable event.
    // Deleting one should not re-fire teardown — the script's cleanup has
    // already happened, and re-running user code after disable is wrong.
    const { registry, seeded, sendToFrontend } = await setupForTeardown(`
      throw new Error('should not re-fire on delete');
    `, { enabled: false });

    await registry.fireTeardown(seeded, 'deleted');

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(0);
  });

  test('handler errors are logged but do not propagate (cleanup must proceed)', async () => {
    const { registry, seeded, sendToFrontend } = await setupForTeardown(`
      throw new Error('boom from teardown');
    `);

    // No throw here — fireTeardown swallows handler errors so backend.ts
    // can proceed with tool/macro/state cleanup regardless.
    await registry.fireTeardown(seeded, 'disabled');

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(false);
    expect(ends[0].error).toContain('boom from teardown');

    // Warning surfaces in server log (mock).
    const warnMock = (globalThis as any).spindle.log.warn as any;
    const warnCalls = (warnMock.mock.calls as unknown[][])
      .map(c => String(c[0]));
    expect(warnCalls.some(c => c.includes('ls:teardown handler'))).toBe(true);
  });

  test('teardown on an already-disabled script with disabled reason still runs', async () => {
    // Sanity: the "skip on delete-after-disable" guard is SPECIFIC to the
    // deleted reason. A disabled-reason teardown on an already-disabled
    // script is unusual but shouldn't be silently skipped — protects against
    // future lifecycle paths that might re-fire a disable event.
    const { registry, seeded, sendToFrontend } = await setupForTeardown(`
      /* empty handler */
    `, { enabled: false });

    await registry.fireTeardown(seeded, 'disabled');

    const ends = executionEnds(sendToFrontend);
    expect(ends).toHaveLength(1);
    expect(ends[0].success).toBe(true);
  });
});
