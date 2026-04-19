/**
 * Covers `dispatchToolInvocation` — the single code path through which
 * Council-eligible tools' results reach the Council deliberation block.
 * The worker-runtime awaits this function's return value and posts it back
 * to the host as `tool_invocation_result`, so a regression here would
 * silently produce empty deliberation blocks.
 */

import { describe, test, expect, mock } from 'bun:test';
import { dispatchToolInvocation } from '../../src/engine/tool-invocation.js';
import { addTool, type ToolEntry } from '../../src/engine/tool-store.js';
import { on as busOn } from '../../src/engine/broadcast-bus.js';
import { executionStatusStore } from '../../src/engine/execution-status.js';

/**
 * Seed the tool-store with a registration whose handler the caller controls.
 * Mirrors the helper pattern used by tool-store.test.ts.
 */
function seedTool(overrides?: Partial<ToolEntry>): ToolEntry {
  const e: ToolEntry = {
    name:            'roll_dice',
    displayName:     'Roll Dice',
    description:     'A test tool',
    parameters:      { type: 'object', properties: {} },
    councilEligible: true,
    handler:         mock((): string => 'Rolled 2d6: [3, 4] = 7'),
    scriptId:        'script-1',
    scriptName:      'Dice Roller',
    ...overrides,
  };
  addTool(e);
  return e;
}

// ─── Return-value propagation ────────────────────────────────────────────────

describe('dispatchToolInvocation — return value', () => {
  test('returns the string produced by a sync handler', async () => {
    seedTool({ handler: () => 'Rolled 2d6: [3, 4] = 7' });
    const result = await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     { notation: '2d6' },
    });
    expect(result).toBe('Rolled 2d6: [3, 4] = 7');
  });

  test('awaits a Promise<string> handler and returns the resolved value', async () => {
    seedTool({
      handler: async () => {
        await Promise.resolve();
        return 'async-result';
      },
    });
    const result = await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     {},
    });
    expect(result).toBe('async-result');
  });

  test('empty-string results pass through unchanged', async () => {
    // e.g. the "No dice roll needed for this scene." pattern emits a real
    // string; a genuine empty string is also a legitimate handler return
    // value and must not be coerced away here.
    seedTool({ handler: () => '' });
    const result = await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     {},
    });
    expect(result).toBe('');
  });

  test('forwards the invocation args to the handler', async () => {
    const handler = mock((_args: Record<string, unknown>): string => 'ok');
    seedTool({ handler });
    await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     { notation: '3d6+2', reason: 'damage' },
    });
    // Check the first positional arg directly rather than using
    // toHaveBeenCalledWith — the handler is now called with (args, ctx),
    // and ctx is the responsibility of the dedicated "invocation context"
    // block below.
    expect(handler.mock.calls[0]![0]).toEqual({
      notation: '3d6+2',
      reason:   'damage',
    });
  });
});

// ─── Invocation context (councilMember + requestId) ──────────────────────────

describe('dispatchToolInvocation — invocation context', () => {
  test('forwards councilMember + requestId to the handler when the payload carries them', async () => {
    const handler = mock((_args: Record<string, unknown>): string => 'ok');
    seedTool({ handler });

    const councilMember = {
      memberId:       'cm-1',
      itemId:         'item-1',
      packId:         'pack-1',
      packName:       'Test Pack',
      name:           'Lyra',
      role:           'Plot Enforcer',
      chance:         75,
      avatarUrl:      null,
      definition:     'A sharp-eyed narrator.',
      personality:    'Precise, decisive.',
      behavior:       'Calls out inconsistencies.',
      genderIdentity: 1 as const,
    };

    await dispatchToolInvocation({
      toolName:  'roll_dice',
      args:      { notation: '2d6' },
      requestId: 'req-abc-123',
      councilMember,
    });

    const receivedCtx = handler.mock.calls[0]![1] as Record<string, unknown>;
    expect(receivedCtx).toBeDefined();
    expect(receivedCtx.requestId).toBe('req-abc-123');
    expect(receivedCtx.councilMember).toEqual(councilMember);
  });

  test('builds ctx with undefined fields when the payload omits councilMember and requestId', async () => {
    // Backward compatibility with pre-8d310f8 Lumiverse hosts that only send
    // { toolName, args }. Handler must still get a ctx object — just with
    // both fields undefined, not a missing second argument.
    const handler = mock((_args: Record<string, unknown>): string => 'ok');
    seedTool({ handler });

    await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     {},
    });

    const receivedCtx = handler.mock.calls[0]![1] as Record<string, unknown>;
    expect(receivedCtx).toBeDefined();
    expect(receivedCtx.requestId).toBeUndefined();
    expect(receivedCtx.councilMember).toBeUndefined();
  });

  test('includes councilMember on the ls:tool:invoked broadcast payload', async () => {
    seedTool({ scriptId: 'script-1', handler: () => 'ok' });
    const received: Array<unknown> = [];
    busOn('ls:tool:invoked', (payload) => { received.push(payload); }, 'listener-script');

    const councilMember = {
      memberId:       'cm-2',
      itemId:         'item-2',
      packId:         'pack-2',
      packName:       'Test Pack',
      name:           'Kai',
      role:           'Comic Relief',
      chance:         40,
      avatarUrl:      null,
      definition:     'A wry observer.',
      personality:    'Deflects with humour.',
      behavior:       'Cracks jokes at tense moments.',
      genderIdentity: 2 as const,
    };

    await dispatchToolInvocation({
      toolName:  'roll_dice',
      args:      { notation: 'd20' },
      requestId: 'req-xyz',
      councilMember,
    });

    expect(received).toHaveLength(1);
    const payload = received[0] as Record<string, unknown>;
    expect(payload.councilMember).toEqual(councilMember);
  });
});

// ─── Name resolution ─────────────────────────────────────────────────────────

describe('dispatchToolInvocation — name resolution', () => {
  test('strips "extensionId:" prefix before lookup (Council qualified name)', async () => {
    seedTool();
    const result = await dispatchToolInvocation({
      toolName: 'lumiscript:roll_dice',
      args:     {},
    });
    expect(result).toBe('Rolled 2d6: [3, 4] = 7');
  });

  test('accepts bare names unchanged (direct LLM function-call path)', async () => {
    seedTool();
    const result = await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     {},
    });
    expect(result).toBe('Rolled 2d6: [3, 4] = 7');
  });
});

// ─── Miss path ───────────────────────────────────────────────────────────────

describe('dispatchToolInvocation — unknown tool', () => {
  test('returns empty string and logs a warning when no handler is registered', async () => {
    const warn = (globalThis as any).spindle.log.warn as any;
    const result = await dispatchToolInvocation({
      toolName: 'does_not_exist',
      args:     {},
    });
    expect(result).toBe('');
    // At least one warn call, with a message referencing the tool name.
    const calls = warn.mock.calls as unknown[][];
    expect(calls.length).toBeGreaterThan(0);
    expect(String(calls[calls.length - 1]![0])).toContain("'does_not_exist'");
  });
});

// ─── Broadcast emission ──────────────────────────────────────────────────────

describe('dispatchToolInvocation — broadcast side-effect', () => {
  test('emits ls:tool:invoked with name, args, result, scriptId, callMs after a successful dispatch', async () => {
    seedTool({ scriptId: 'script-1', handler: () => 'ok' });
    const received: Array<unknown> = [];
    busOn('ls:tool:invoked', (payload) => { received.push(payload); }, 'listener-script');

    await dispatchToolInvocation({
      toolName: 'roll_dice',
      args:     { notation: 'd20' },
    });

    expect(received).toHaveLength(1);
    const payload = received[0] as Record<string, unknown>;
    expect(payload.name).toBe('roll_dice');
    expect(payload.args).toEqual({ notation: 'd20' });
    expect(payload.result).toBe('ok');
    expect(payload.scriptId).toBe('script-1');
    expect(typeof payload.callMs).toBe('number');
    expect(payload.callMs as number).toBeGreaterThanOrEqual(0);
  });

  test('does NOT emit ls:tool:invoked for an unknown tool', async () => {
    const received: unknown[] = [];
    busOn('ls:tool:invoked', (payload) => { received.push(payload); }, 'listener-script');
    await dispatchToolInvocation({ toolName: 'missing', args: {} });
    expect(received).toHaveLength(0);
  });
});

// ─── Error propagation ───────────────────────────────────────────────────────

describe('dispatchToolInvocation — handler errors', () => {
  test('rejects when the handler throws synchronously', async () => {
    seedTool({
      handler: () => { throw new Error('boom'); },
    });
    // The worker-runtime converts rejections into `tool_invocation_result
    // { error }` — we just need to confirm the rejection actually surfaces.
    await expect(
      dispatchToolInvocation({ toolName: 'roll_dice', args: {} }),
    ).rejects.toThrow('boom');
  });

  test('rejects when the handler returns a rejected promise', async () => {
    seedTool({
      handler: async () => { throw new Error('async-boom'); },
    });
    await expect(
      dispatchToolInvocation({ toolName: 'roll_dice', args: {} }),
    ).rejects.toThrow('async-boom');
  });

  test('flips the owning script to error status when the handler throws', async () => {
    seedTool({
      scriptId: 'script-1',
      handler: () => { throw new Error('boom'); },
    });
    await expect(
      dispatchToolInvocation({ toolName: 'roll_dice', args: {} }),
    ).rejects.toThrow('boom');

    const status = executionStatusStore.getStatus('script-1');
    expect(status.status).toBe('error');
    expect(status.errorMessage).toBe('boom');
  });

  test('sends execution_started + execution_ended to the frontend on handler throw', async () => {
    seedTool({
      scriptId:   'script-1',
      scriptName: 'Dice Roller',
      handler:    () => { throw new Error('boom'); },
    });
    const sendToFrontend = (globalThis as any).spindle.sendToFrontend as any;
    await expect(
      dispatchToolInvocation({ toolName: 'roll_dice', args: {} }),
    ).rejects.toThrow('boom');

    const calls = sendToFrontend.mock.calls.map((c: unknown[]) => c[0] as Record<string, unknown>);
    const started = calls.find((c) => c.type === 'execution_started' && c.scriptId === 'script-1');
    const ended   = calls.find((c) => c.type === 'execution_ended'   && c.scriptId === 'script-1');
    expect(started).toBeDefined();
    expect((started as any).scriptName).toBe('Dice Roller');
    expect(ended).toBeDefined();
    expect((ended as any).success).toBe(false);
    expect((ended as any).error).toBe('boom');
    // The two messages correlate via a shared synthesized runId.
    expect((started as any).runId).toBe((ended as any).runId);
  });

  test('fires a user-visible error toast identifying the script and tool on handler throw', async () => {
    seedTool({
      scriptId:   'script-1',
      scriptName: 'Dice Roller',
      name:       'roll_dice',
      handler:    () => { throw new Error('boom'); },
    });
    const toastError = (globalThis as any).spindle.toast.error as any;
    await expect(
      dispatchToolInvocation({ toolName: 'roll_dice', args: {} }),
    ).rejects.toThrow('boom');

    expect(toastError.mock.calls.length).toBeGreaterThan(0);
    const [message, opts] = toastError.mock.calls[toastError.mock.calls.length - 1]!;
    expect(message).toBe('boom');
    expect(String(opts?.title ?? '')).toContain('Dice Roller');
    expect(String(opts?.title ?? '')).toContain('roll_dice');
  });

  test('does not flip script status or fire toast on successful invocation', async () => {
    seedTool({ scriptId: 'script-1', handler: () => 'ok' });
    const toastError = (globalThis as any).spindle.toast.error as any;
    const beforeErrorToastCount = toastError.mock.calls.length;

    await dispatchToolInvocation({ toolName: 'roll_dice', args: {} });

    const status = executionStatusStore.getStatus('script-1');
    // Successful invocations must not touch the status (defaults to 'idle').
    expect(status.status).not.toBe('error');
    expect(toastError.mock.calls.length).toBe(beforeErrorToastCount);
  });
});
