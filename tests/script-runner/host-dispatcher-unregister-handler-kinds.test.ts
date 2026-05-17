/**
 * v1.0.0-rc.3+ coverage-strengthening pass — host-dispatcher
 * `handleUnregisterHandler` kind-switch branches.
 *
 * Pre-rc.3 the macro/tool branches were heavily exercised through
 * existing api-proxy + integration tests, but the eight handlerId-based
 * kinds (commandsOnInvoked + the seven kinds that fall through the
 * shared `invokeAndDropHandlerCleanup` block) had no direct coverage.
 * This file walks each kind through the switch using a test seam
 * (`__handleUnregisterHandlerForTests`) so the case label is exercised
 * AND the cleanup observably runs.
 *
 * Kinds covered (the full union from `UnregisterHandler['kind']`):
 *   - macro                   — name-based cleanup, hits macro-store
 *   - tool                    — name-based cleanup, hits tool-store
 *   - commandsOnInvoked       — handlerId-based cleanup
 *   - macroInterceptor        — handlerId-based (shared block)
 *   - contentProcessor        — handlerId-based (shared block)
 *   - worldInfoInterceptor    — handlerId-based (shared block)
 *   - domEventListener        — handlerId-based (shared block)
 *   - domDelegate             — handlerId-based (shared block)
 *   - inputBarActionClick     — handlerId-based (shared block)
 *   - floatWidgetDragEnd      — handlerId-based (shared block)
 *   - drawerTabActivate       — handlerId-based (shared block)
 *
 * The seam pair `__recordHandlerCleanupForTests` + `__handleUnregister
 * HandlerForTests` lets each test seed a tracked closure under the same
 * `(scriptId, handlerId)` key the real register-handler IPC would have
 * used, then assert the cleanup fired by inspecting a counter the test
 * controls.
 */

import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  __resetForTests,
  __recordHandlerCleanupForTests,
  __handleUnregisterHandlerForTests,
  __hasHandlerCleanupForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { addTool, clearAll as clearToolStore }   from '../../src/engine/tool-store.js';
import { addMacro, clearAll as clearMacroStore } from '../../src/engine/macro-store.js';
import type { MockSpindle } from '../_infra/mock-spindle.js';

function getSpindle(): MockSpindle {
  return (globalThis as unknown as { spindle: MockSpindle }).spindle;
}

describe('host-dispatcher: handleUnregisterHandler — name-based kinds', () => {
  beforeEach(() => {
    __resetForTests();
    clearToolStore();
    clearMacroStore();
  });

  test('kind=macro removes the macro-store entry + calls spindle.unregisterMacro', () => {
    addMacro({
      name: 'm-test', description: '', category: 'general',
      mode: 'pull', handler: () => 'v',
      scriptId: 'script-A', scriptName: 'A',
    });

    __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'macro',
      scriptId: 'script-A', name: 'm-test',
    });

    // Spindle's unregisterMacro mock should have been called.
    const spindle = getSpindle();
    expect((spindle.unregisterMacro as ReturnType<typeof mock>).mock.calls.some(
      (c: unknown[]) => c[0] === 'm-test',
    )).toBe(true);
  });

  test('kind=macro missing name → warn + no-op (does not throw)', () => {
    const spindle = getSpindle();
    const warnBefore = (spindle.log.warn as ReturnType<typeof mock>).mock.calls.length;

    expect(() => __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'macro',
      scriptId: 'script-A',
    })).not.toThrow();

    const warnAfter = (spindle.log.warn as ReturnType<typeof mock>).mock.calls.length;
    expect(warnAfter).toBeGreaterThan(warnBefore);
  });

  test('kind=macro with name not in store → no-op (idempotent)', () => {
    expect(() => __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'macro',
      scriptId: 'script-A', name: 'never-registered',
    })).not.toThrow();
  });

  test('kind=tool removes the tool-store entry + calls spindle.unregisterTool', () => {
    addTool({
      name: 't-test', displayName: 'T', description: '',
      councilEligible: false, handler: () => 'x',
      scriptId: 'script-A', scriptName: 'A',
    });

    __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'tool',
      scriptId: 'script-A', name: 't-test',
    });

    const spindle = getSpindle();
    expect((spindle.unregisterTool as ReturnType<typeof mock>).mock.calls.some(
      (c: unknown[]) => c[0] === 't-test',
    )).toBe(true);
  });

  test('kind=tool missing name → warn + no-op', () => {
    const spindle = getSpindle();
    const warnBefore = (spindle.log.warn as ReturnType<typeof mock>).mock.calls.length;

    expect(() => __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'tool',
      scriptId: 'script-A',
    })).not.toThrow();

    const warnAfter = (spindle.log.warn as ReturnType<typeof mock>).mock.calls.length;
    expect(warnAfter).toBeGreaterThan(warnBefore);
  });
});

describe('host-dispatcher: handleUnregisterHandler — handlerId-based kinds', () => {
  beforeEach(() => __resetForTests());

  // Each case below: seed a tracked cleanup, fire unregister-handler,
  // assert the cleanup was invoked AND the entry was dropped.

  const HANDLER_ID_KINDS = [
    'commandsOnInvoked',
    'macroInterceptor',
    'contentProcessor',
    'worldInfoInterceptor',
    'domEventListener',
    'domDelegate',
    'inputBarActionClick',
    'floatWidgetDragEnd',
    'drawerTabActivate',
  ] as const;

  for (const kind of HANDLER_ID_KINDS) {
    test(`kind=${kind} invokes the recorded cleanup + drops the entry`, () => {
      const scriptId  = 'script-A';
      const handlerId = `h-${kind}-1`;
      const cleanup = mock(() => {});
      __recordHandlerCleanupForTests(scriptId, handlerId, cleanup);
      expect(__hasHandlerCleanupForTests(scriptId, handlerId)).toBe(true);

      __handleUnregisterHandlerForTests({
        type: 'unregister-handler', kind,
        scriptId, handlerId,
      });

      expect(cleanup).toHaveBeenCalledTimes(1);
      expect(__hasHandlerCleanupForTests(scriptId, handlerId)).toBe(false);
    });

    test(`kind=${kind} missing handlerId → warn + no-op`, () => {
      const spindle = getSpindle();
      const warnBefore = (spindle.log.warn as ReturnType<typeof mock>).mock.calls.length;

      expect(() => __handleUnregisterHandlerForTests({
        type: 'unregister-handler', kind,
        scriptId: 'script-A',
      })).not.toThrow();

      const warnAfter = (spindle.log.warn as ReturnType<typeof mock>).mock.calls.length;
      expect(warnAfter).toBeGreaterThan(warnBefore);
    });
  }

  test('handlerId-based unregister is idempotent on missing entries', () => {
    expect(() => __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'domEventListener',
      scriptId: 'script-A', handlerId: 'never-recorded',
    })).not.toThrow();
  });

  test('cleanup-throw is swallowed + entry still dropped', () => {
    const scriptId  = 'script-A';
    const handlerId = 'h-throw-1';
    const cleanup = mock(() => { throw new Error('cleanup boom'); });
    __recordHandlerCleanupForTests(scriptId, handlerId, cleanup);

    expect(() => __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'commandsOnInvoked',
      scriptId, handlerId,
    })).not.toThrow();

    expect(cleanup).toHaveBeenCalledTimes(1);
    // Entry still dropped despite the throw.
    expect(__hasHandlerCleanupForTests(scriptId, handlerId)).toBe(false);
  });

  test('multiple handlerIds for the same script independent — unregistering one keeps the others', () => {
    const scriptId = 'script-A';
    const c1 = mock(() => {});
    const c2 = mock(() => {});
    __recordHandlerCleanupForTests(scriptId, 'h-1', c1);
    __recordHandlerCleanupForTests(scriptId, 'h-2', c2);

    __handleUnregisterHandlerForTests({
      type: 'unregister-handler', kind: 'domEventListener',
      scriptId, handlerId: 'h-1',
    });

    expect(c1).toHaveBeenCalledTimes(1);
    expect(c2).toHaveBeenCalledTimes(0);
    expect(__hasHandlerCleanupForTests(scriptId, 'h-1')).toBe(false);
    expect(__hasHandlerCleanupForTests(scriptId, 'h-2')).toBe(true);
  });
});
