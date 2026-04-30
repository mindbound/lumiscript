/**
 * Phase 11.D.1 — end-to-end trigger-fire happy path.
 *
 * Drives the full dispatch round-trip with both parent and child wired
 * to a shared in-memory IPC pair:
 *
 *   parent.dispatchRunScript()
 *     → run-script IPC
 *     → child.runOne() (real AsyncFunction sandbox)
 *     → run-result IPC
 *     → parent's handleChildMessage resolves the pending Promise
 *
 * Coverage:
 *   - Clean noop body resolves with ok=true.
 *   - Body that returns a value puts it in the result.
 *   - Body that throws lands as ok=false with the serialized error.
 *   - Body that uses `data` parameter sees the trigger payload.
 *   - Concurrent dispatchRunScript calls each get a distinct runId and
 *     resolve independently.
 *   - Body that uses console.log emits ConsoleEntryNotice through the
 *     parent's onConsole callback.
 */

import { describe, test, expect } from 'bun:test';
import { dispatchRunScript } from '../../src/script-runner/host-dispatcher.js';
import { setupE2E } from '../_infra/script-runner-fixture.js';
import type { Script, ConsoleEntry } from '../../src/types/script.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function makeScript(id: string, code: string): Script {
  return {
    id,
    name: `Test ${id}`,
    code,
    enabled:        true,
    allowDangerous: false,
    type:           'trigger',
    bindings:       [],
    triggers:       ['ls:startup'],
    createdAt:      Date.now(),
    updatedAt:      Date.now(),
  };
}

function makeRequest(data: unknown = {}, timeoutMs = 5_000) {
  return {
    data,
    timeoutMs,
    grantedPermissions: new Set<string>(),
    userId:             'test-user',
  };
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('e2e trigger fire: happy path', () => {
  test('a noop script body completes with ok=true', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('script-A', '/* noop */'),
      makeRequest(),
    );
    expect(result.ok).toBe(true);
    expect(result.scriptId).toBe('script-A');
    expect(typeof result.durationMs).toBe('number');
  });

  test('script body that returns a value embeds it in result.value', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('script-A', 'return { hello: "world", n: 42 };'),
      makeRequest(),
    );
    expect(result.ok).toBe(true);
    expect(result.value).toEqual({ hello: 'world', n: 42 });
  });

  test('script body that throws lands as ok=false with serialized error', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('script-A', 'throw new Error("script crash");'),
      makeRequest(),
    );
    expect(result.ok).toBe(false);
    expect(result.error?.message).toContain('script crash');
  });

  test('script body sees `data` parameter from request', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('script-A', 'return data.payload + "!";'),
      makeRequest({ payload: 'hello' }),
    );
    expect(result.ok).toBe(true);
    expect(result.value).toBe('hello!');
  });

  test('script body sees `script.id` and `script.name` from request', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('xyz', 'return script.id + "/" + script.name;'),
      makeRequest(),
    );
    expect(result.ok).toBe(true);
    expect(result.value).toBe('xyz/Test xyz');
  });

  test('two concurrent dispatchRunScript calls resolve independently with distinct runIds', async () => {
    await setupE2E();
    const a = dispatchRunScript(
      makeScript('script-A', 'return 1;'),
      makeRequest(),
    );
    const b = dispatchRunScript(
      makeScript('script-B', 'return 2;'),
      makeRequest(),
    );

    const [resultA, resultB] = await Promise.all([a, b]);
    expect(resultA.value).toBe(1);
    expect(resultB.value).toBe(2);
    expect(resultA.runId).not.toBe(resultB.runId);
  });

  test('console.log inside the script body fires onConsole on the parent', async () => {
    await setupE2E();
    const entries: ConsoleEntry[] = [];

    const result = await dispatchRunScript(
      makeScript('script-A', 'console.log("hello from script", 42); return null;'),
      makeRequest(),
      { onConsole: (entry) => entries.push(entry) },
    );

    expect(result.ok).toBe(true);
    expect(entries.length).toBeGreaterThan(0);
    const logEntry = entries.find((e) => e.type === 'log');
    expect(logEntry).toBeDefined();
    expect(logEntry!.message).toContain('hello from script');
    expect(logEntry!.message).toContain('42');
  });

  test('async-loop body races against timeoutMs and lands as ok=false', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('script-A', 'while (true) await new Promise((r) => setTimeout(r, 5));'),
      makeRequest({}, 80),
    );
    expect(result.ok).toBe(false);
    expect(result.error?.message).toMatch(/exceeded the .* execution timeout/);
  });

  test('async-timeout error carries `ScriptTimeoutError` name (the marker `runOne` dispatches `proc.fail` against)', async () => {
    await setupE2E();
    const result = await dispatchRunScript(
      makeScript('script-A', 'while (true) await new Promise((r) => setTimeout(r, 5));'),
      makeRequest({}, 80),
    );
    expect(result.ok).toBe(false);
    // `runOne`'s zombie-protection branch is gated on `error.name ===
    // 'ScriptTimeoutError'` — the marker class defined in child-entry.ts.
    // If a future change renames or replaces it, the proc.fail respawn
    // path silently de-actives and orphan async-loop bodies pile up.
    // Pin the contract here.
    expect(result.error?.name).toBe('ScriptTimeoutError');
  });

  test('async-timeout fires `proc.fail` so the host kills the orphan child (Phase 12 Gate 3 production fix)', async () => {
    const { ipc } = await setupE2E();
    expect(ipc.failedError()).toBeNull();

    const result = await dispatchRunScript(
      makeScript('script-A', 'while (true) await new Promise((r) => setTimeout(r, 5));'),
      makeRequest({}, 80),
    );
    expect(result.ok).toBe(false);

    // After run-result lands, runOne should have called proc.fail with a
    // diagnostic message naming the offending script. The mock's
    // failedError() captures the supplied reason string.
    const failReason = ipc.failedError();
    expect(failReason).not.toBeNull();
    expect(failReason).toContain('async-timeout');
    expect(failReason).toContain('Test script-A');
    expect(failReason).toContain(result.runId);
  });

  test('regular script throw does NOT trigger `proc.fail` (only ScriptTimeoutError does)', async () => {
    const { ipc } = await setupE2E();

    const result = await dispatchRunScript(
      makeScript('script-A', 'throw new Error("normal user-script throw");'),
      makeRequest(),
    );
    expect(result.ok).toBe(false);
    expect(result.error?.message).toContain('normal user-script throw');
    // Body returned via throw; `fn()` exited cleanly. No orphan, no
    // need to kill the child. proc.fail must NOT have been called.
    expect(ipc.failedError()).toBeNull();
  });
});
