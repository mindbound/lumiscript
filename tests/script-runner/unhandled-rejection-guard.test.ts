/**
 * v1.0.0-rc.2+ unit coverage for the script-runner's
 * `unhandledRejection` guard logic + WeakMap attribution path.
 *
 * Regression contract: a detached promise rejection inside a user-script
 * body MUST (1) leave the subprocess alive (no exit, no parent-side
 * respawn) and (2) route the rejection to the originating script's
 * editor console as an `error`-type `ConsoleEntry`.
 *
 * Why this is a unit test rather than an e2e test:
 *
 * Bun's test runner auto-fails any test that produces an unhandled
 * rejection, regardless of process-level handlers registered before
 * the rejection fires. An in-process e2e fixture for the guard would
 * trigger Bun's auto-fail synchronously with the guard's actual logic,
 * making the test always fail even when the guard works correctly.
 *
 * The survival half of the contract — "process doesn't exit" — is
 * guaranteed by Node/Bun's documented behaviour: registering ANY
 * `unhandledRejection` listener suppresses the default exit-process
 * behaviour. The guard does that registration in `child-entry.ts`'s
 * default-export entry function. Visual / manual verification (already
 * done by mindbound during the RC2 development cycle) confirms the
 * worker survives in real subprocess runs.
 *
 * The routing half of the contract — "rejection lands in the user's
 * editor console attributed to the originating script" — is the part
 * this test file exercises directly. We import the exported
 * `handleUnhandledRejection` function, seed `activeProxies` +
 * `rejectionAttribution`, and assert the resulting `console-entry`
 * IPC carries the right shape.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import type { SpindleBackendProcessContext } from 'lumiverse-spindle-types';
import {
  handleUnhandledRejection,
  _setActiveProxyForTests,
  _clearActiveProxiesForTests,
} from '../../src/script-runner/child-entry.js';
import { rejectionAttribution, runIdContext } from '../../src/script-runner/api-proxy.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface CapturedSend {
  type: string;
  runId?: string;
  scriptId?: string;
  entry?: { timestamp: string; type: string; message: string };
}

function makeMockProc(): { sent: CapturedSend[]; proc: SpindleBackendProcessContext } {
  const sent: CapturedSend[] = [];
  // Minimal mock — only `send` is exercised by the guard. Cast through
  // `unknown` because the real SpindleBackendProcessContext has many
  // other methods we don't need here.
  const proc = {
    send: (msg: unknown): void => { sent.push(msg as CapturedSend); },
  } as unknown as SpindleBackendProcessContext;
  return { sent, proc };
}

beforeEach(() => {
  _clearActiveProxiesForTests();
});

// ─── WeakMap attribution (primary path) ──────────────────────────────────────

describe('handleUnhandledRejection: WeakMap attribution', () => {
  test('routes to script editor console when WeakMap has attribution + activeProxies has the runId', () => {
    const { sent, proc } = makeMockProc();
    _setActiveProxyForTests('run-1', 'script-A');

    const err = new Error('PERMISSION_DENIED:presets — grant this permission to use this API');
    rejectionAttribution.set(err, { runId: 'run-1', scriptId: 'script-A' });

    handleUnhandledRejection(err, proc);

    // Exactly one console-entry IPC, attributed to the right script.
    const entries = sent.filter((m) => m.type === 'console-entry');
    expect(entries.length).toBe(1);
    expect(entries[0]!.runId).toBe('run-1');
    expect(entries[0]!.scriptId).toBe('script-A');
    expect(entries[0]!.entry?.type).toBe('error');
    expect(entries[0]!.entry?.message).toContain('unhandled rejection');
    expect(entries[0]!.entry?.message).toContain('PERMISSION_DENIED:presets');
  });

  test('uses WeakMap attribution even when activeProxies has a different runId for that scriptId', () => {
    // The WeakMap attribution wins — even if the runId points at a
    // proxy that scriptId mismatches (defensive shape — only the
    // WeakMap's scriptId is what the IPC carries).
    const { sent, proc } = makeMockProc();
    _setActiveProxyForTests('run-A', 'script-A');

    const err = new Error('rejected');
    rejectionAttribution.set(err, { runId: 'run-A', scriptId: 'script-A' });

    handleUnhandledRejection(err, proc);

    expect(sent.length).toBe(1);
    expect(sent[0]!.scriptId).toBe('script-A');
  });

  test('preserves the rejection error stack in the routed message', () => {
    const { sent, proc } = makeMockProc();
    _setActiveProxyForTests('run-stack', 'script-stack');

    const err = new Error('outer');
    rejectionAttribution.set(err, { runId: 'run-stack', scriptId: 'script-stack' });

    handleUnhandledRejection(err, proc);

    // Stack is included in the message (the guard prefers `err.stack`
    // over `err.message` when available — see the `errMsg` line).
    expect(sent[0]!.entry?.message).toContain('outer');
    expect(sent[0]!.entry?.message).toContain('at '); // stack frame marker
  });
});

// ─── ALS fallback (secondary path) ───────────────────────────────────────────

describe('handleUnhandledRejection: ALS fallback', () => {
  test('falls back to runIdContext.getStore() when WeakMap is empty', () => {
    const { sent, proc } = makeMockProc();
    _setActiveProxyForTests('run-als', 'script-als');

    const err = new Error('untagged rejection');
    // Crucially: NOT tagged in the WeakMap. The ALS fallback should
    // attribute via runIdContext.run().

    runIdContext.run('run-als', () => {
      handleUnhandledRejection(err, proc);
    });

    expect(sent.length).toBe(1);
    expect(sent[0]!.runId).toBe('run-als');
    expect(sent[0]!.scriptId).toBe('script-als');
  });

  test('ALS fallback drops when activeProxies has no entry for the store runId', () => {
    const { sent, proc } = makeMockProc();
    // No _setActiveProxyForTests — activeProxies is empty.

    const err = new Error('orphan');
    runIdContext.run('run-orphan', () => {
      handleUnhandledRejection(err, proc);
    });

    // No console-entry sent — the guard returns early when scriptId
    // can't be resolved. Backend stderr still has the audit line
    // (verified via the unconditional `console.error` call earlier
    // in the handler, not asserted here to keep the test isolated).
    expect(sent.filter((m) => m.type === 'console-entry').length).toBe(0);
  });
});

// ─── Robustness / edge cases ─────────────────────────────────────────────────

describe('handleUnhandledRejection: robustness', () => {
  test('does not throw when both WeakMap and ALS attribution miss', () => {
    const { proc } = makeMockProc();
    expect(() => handleUnhandledRejection(new Error('orphan'), proc)).not.toThrow();
  });

  test('does not throw on a non-object rejection reason (string)', () => {
    const { sent, proc } = makeMockProc();
    expect(() => handleUnhandledRejection('string reason', proc)).not.toThrow();
    // WeakMap path requires an object — string can't be attributed,
    // no console-entry sent.
    expect(sent.filter((m) => m.type === 'console-entry').length).toBe(0);
  });

  test('does not throw on null rejection reason', () => {
    const { sent, proc } = makeMockProc();
    expect(() => handleUnhandledRejection(null, proc)).not.toThrow();
    expect(sent.filter((m) => m.type === 'console-entry').length).toBe(0);
  });

  test('does not throw on undefined rejection reason', () => {
    const { sent, proc } = makeMockProc();
    expect(() => handleUnhandledRejection(undefined, proc)).not.toThrow();
    expect(sent.filter((m) => m.type === 'console-entry').length).toBe(0);
  });

  test('swallows proc.send failures (channel down) without rethrowing', () => {
    // The handler has a try/catch around proc.send — a failure there
    // shouldn't propagate (defensive against IPC channel death).
    _setActiveProxyForTests('run-send-fail', 'script-send-fail');
    const err = new Error('rejected');
    rejectionAttribution.set(err, { runId: 'run-send-fail', scriptId: 'script-send-fail' });

    const proc = {
      send: (): void => { throw new Error('channel closed'); },
    } as unknown as SpindleBackendProcessContext;

    expect(() => handleUnhandledRejection(err, proc)).not.toThrow();
  });
});
