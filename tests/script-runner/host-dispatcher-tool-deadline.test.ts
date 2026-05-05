/**
 * v0.27.1 — tool wrapper honors `__deadlineMs` from invocation args.
 *
 * Lumiverse's Council passes the user-configured tool timeout as both:
 *   1. `args.__deadlineMs = Date.now() + settings.toolsSettings.timeoutMs`
 *      (council-execution.service.ts:313).
 *   2. The `invokeExtensionTool` host-side `timeoutMs` parameter
 *      (worker-host.ts:1782-1798).
 *
 * Pre-fix, our host-dispatcher's `tool` register-handler wrapper passed a
 * hard-coded 60_000ms to `sendRunHandlerRequest`, so any Council-configured
 * timeout above 60s was truncated by the child's `Promise.race` watchdog
 * (`Handler tool/<id> exceeded 60s timeout`). These tests pin the new
 * behaviour: the wrapper reads `args.__deadlineMs`, computes
 * `Math.max(1_000, deadline - Date.now())`, and passes that to
 * `sendRunHandlerRequest`. Direct invocation paths (no `__deadlineMs`)
 * continue to fall through to the historical 60_000ms default.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { setupLateRegisterScenario } from '../_infra/long-running-script.js';
import { clearAll as clearToolStore, getTool } from '../../src/engine/tool-store.js';
import type { RunHandlerRequest } from '../../src/types/script-runner-ipc.js';
import type { ScriptRunnerMockIpc } from '../_infra/script-runner-mock-ipc.js';

beforeEach(() => {
  clearToolStore();
});

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Pull the most recent `run-handler` IPC out of the child's inbox. */
function lastRunHandlerRequest(ipc: ScriptRunnerMockIpc): RunHandlerRequest | undefined {
  const inbox = ipc.childInbox();
  for (let i = inbox.length - 1; i >= 0; i--) {
    const m = inbox[i] as { type?: string };
    if (m && m.type === 'run-handler') return inbox[i] as RunHandlerRequest;
  }
  return undefined;
}

// ─── Tests ──────────────────────────────────────────────────────────────────
//
// `getTool(name).handler` is the canonical `api.tools.register` wrapper
// (engine/api/tools.ts:51-55), which has signature `(args, ctx?)` and calls
// the host-dispatcher's 3-arg wrapper internally with `getApi()` injected.
// Our tests fire that 2-arg surface with a constructed args object; the
// host wrapper's `__deadlineMs` extraction reads from `args` directly.

describe('host-dispatcher: tool wrapper honors args.__deadlineMs', () => {
  test('with __deadlineMs in args → run-handler timeoutMs ≈ (deadline - now)', async () => {
    const scn = await setupLateRegisterScenario();
    await scn.sendLateToolRegister('my-tool');

    const entry = getTool('my-tool');
    expect(entry).toBeDefined();

    // Spawn an invocation with a 100s deadline. Don't await — we just want
    // to capture the run-handler IPC the wrapper produced.
    const t0 = Date.now();
    void entry!.handler({ __deadlineMs: t0 + 100_000 });

    const req = lastRunHandlerRequest(scn.ipc);
    expect(req).toBeDefined();
    expect(req!.kind).toBe('tool');

    // Allow a small wall-clock fuzz between the test's `t0` and the
    // wrapper's `Date.now()` snapshot (microtask scheduling, GC). 250ms
    // is generous on any reasonable host.
    const remaining = req!.timeoutMs;
    expect(remaining).toBeLessThanOrEqual(100_000);
    expect(remaining).toBeGreaterThanOrEqual(100_000 - 250);
  });

  test('without __deadlineMs in args → falls through to 60_000ms default', async () => {
    const scn = await setupLateRegisterScenario();
    await scn.sendLateToolRegister('my-tool');

    const entry = getTool('my-tool');
    void entry!.handler({ /* no __deadlineMs */ });

    const req = lastRunHandlerRequest(scn.ipc)!;
    expect(req.timeoutMs).toBe(60_000);
  });

  test('with non-number __deadlineMs → falls through to 60_000ms default', async () => {
    const scn = await setupLateRegisterScenario();
    await scn.sendLateToolRegister('my-tool');

    const entry = getTool('my-tool');
    // Caller stuffed a string (or other non-number) into __deadlineMs —
    // ignore it and use the default rather than throwing or rolling NaN.
    void entry!.handler({ __deadlineMs: 'not-a-number' as unknown as number });

    const req = lastRunHandlerRequest(scn.ipc)!;
    expect(req.timeoutMs).toBe(60_000);
  });

  test('with stale (already-elapsed) __deadlineMs → clamped to 1_000ms floor', async () => {
    const scn = await setupLateRegisterScenario();
    await scn.sendLateToolRegister('my-tool');

    const entry = getTool('my-tool');
    // Deadline was 5s ago. A naive `deadline - Date.now()` would be
    // negative, racing the handler to immediate rejection. Floor to 1s
    // so the in-flight call gets a real chance to resolve.
    void entry!.handler({ __deadlineMs: Date.now() - 5_000 });

    const req = lastRunHandlerRequest(scn.ipc)!;
    expect(req.timeoutMs).toBe(1_000);
  });

  test('with __deadlineMs > 60s → run-handler timeoutMs > 60_000ms (the bug we fixed)', async () => {
    const scn = await setupLateRegisterScenario();
    await scn.sendLateToolRegister('my-tool');

    const entry = getTool('my-tool');
    // Council's max slider value is 120s. Pre-fix, this was capped at 60s
    // and timed out at the LumiScript layer well before Lumiverse would.
    void entry!.handler({ __deadlineMs: Date.now() + 120_000 });

    const req = lastRunHandlerRequest(scn.ipc)!;
    expect(req.timeoutMs).toBeGreaterThan(60_000);
    expect(req.timeoutMs).toBeLessThanOrEqual(120_000);
  });
});
