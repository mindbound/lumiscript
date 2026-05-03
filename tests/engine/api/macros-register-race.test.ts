/**
 * v0.26.1 — `api.macros.register` race-tolerance against
 * "non-committing macro resolution" errors from `spindle.registerMacro`.
 *
 * Background: Spindle blocks `registerMacro` calls with this specific error
 * when ANY caller (another LumiScript user-script, or Lumiverse's own
 * prompt-assembly path) is concurrently running a `commit:false` macro
 * resolve. The block is temporary — the prior registration on Spindle's
 * side is still in force, so the macro continues to fire correctly.
 *
 * Pre-fix: the error propagated through the canonical `register`, skipping
 * `macrosRegisteredThisRun.add(name)`. The end-of-run stale-diff
 * (`diffAndCleanStaleMacros`) then dropped the macro on the assumption
 * that the user script forgot to register it. Concrete repro: tracker
 * pattern where one script registers `{{tracker}}` and a co-script
 * resolves it via `commit:false`. After every generation the macro got
 * orphaned, leaving co-script resolves returning the literal `{{tracker}}`.
 *
 * Post-fix: catch the specific error, log at info-level, fall through so
 * `macrosRegisteredThisRun` records the name. The prior Spindle-side
 * registration remains in force; the stale-diff no longer drops the macro.
 */

import { describe, test, expect, mock, beforeEach } from 'bun:test';
import { buildMacrosAPI } from '../../../src/engine/api/macros.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { clearAll as clearMacroStore, getMacro } from '../../../src/engine/macro-store.js';
import type { MacroDefinition } from '../../../src/types/script.js';

const macroDef: MacroDefinition = {
  description: 'Test macro for race-tolerance verification.',
};

beforeEach(() => {
  clearMacroStore();
});

describe('macros.register: spindle.registerMacro race tolerance', () => {
  test('"non-committing macro resolution" error is caught; macro stays in LumiScript store', () => {
    // Override spindle.registerMacro to simulate the race.
    (globalThis as any).spindle.registerMacro = mock(() => {
      throw new Error('non-committing macro resolution');
    });

    const tracker = new Set<string>();
    const api = buildMacrosAPI(
      createTestDeps({
        script: { id: 'tracker', name: 'Tracker' },
        macrosRegisteredThisRun: tracker,
      }),
    );

    // Should NOT throw — the canonical catches the race-error.
    expect(() => api.register('tracker', macroDef, () => 'hello')).not.toThrow();

    // The macro IS in LumiScript's store (addMacro succeeded).
    expect(getMacro('tracker')).toBeDefined();

    // The macro IS in macrosRegisteredThisRun — critical: this is what
    // prevents diffAndCleanStaleMacros from dropping it after run-end.
    expect(tracker.has('tracker')).toBe(true);
  });

  test('an unrelated registerMacro error still propagates', () => {
    (globalThis as any).spindle.registerMacro = mock(() => {
      throw new Error('something completely different blew up');
    });

    const tracker = new Set<string>();
    const api = buildMacrosAPI(
      createTestDeps({
        script: { id: 'tracker', name: 'Tracker' },
        macrosRegisteredThisRun: tracker,
      }),
    );

    expect(() => api.register('tracker', macroDef, () => 'hello')).toThrow(
      'something completely different blew up',
    );

    // macrosRegisteredThisRun MUST NOT contain the name when the error
    // wasn't the race signature — the user's script needs to know the
    // registration failed (and the stale-diff DROP behavior is correct
    // for genuinely-failed registrations).
    expect(tracker.has('tracker')).toBe(false);
  });

  test('successful registerMacro path is unchanged', () => {
    // Default mock — registerMacro doesn't throw.
    (globalThis as any).spindle.registerMacro = mock(() => {});

    const tracker = new Set<string>();
    const api = buildMacrosAPI(
      createTestDeps({
        script: { id: 'tracker', name: 'Tracker' },
        macrosRegisteredThisRun: tracker,
      }),
    );

    api.register('tracker', macroDef, () => 'hello');

    expect((globalThis as any).spindle.registerMacro).toHaveBeenCalledTimes(1);
    expect(getMacro('tracker')).toBeDefined();
    expect(tracker.has('tracker')).toBe(true);
  });

  test('race-tolerance logs at info level (not warn) — server-log audit without spam', () => {
    (globalThis as any).spindle.registerMacro = mock(() => {
      throw new Error('non-committing macro resolution');
    });
    const logInfo = mock(() => {});
    const logWarn = mock(() => {});
    (globalThis as any).spindle.log.info = logInfo;
    (globalThis as any).spindle.log.warn = logWarn;

    const api = buildMacrosAPI(
      createTestDeps({
        script: { id: 'tracker', name: 'Tracker' },
      }),
    );
    api.register('tracker', macroDef, () => 'hello');

    expect(logInfo).toHaveBeenCalledTimes(1);
    expect(logWarn).not.toHaveBeenCalled();

    const infoMsg = (logInfo.mock.calls as unknown as string[][])[0]![0];
    expect(infoMsg).toContain('api.macros.register');
    expect(infoMsg).toContain('tracker');
    expect(infoMsg).toContain('temporarily blocked');
  });

  test('race-tolerance still adds to LumiScript store across multiple consecutive race-errors', () => {
    // Simulates a long generation where every concurrent register is blocked.
    (globalThis as any).spindle.registerMacro = mock(() => {
      throw new Error('non-committing macro resolution');
    });

    const tracker = new Set<string>();
    const api = buildMacrosAPI(
      createTestDeps({
        script: { id: 'tracker', name: 'Tracker' },
        macrosRegisteredThisRun: tracker,
      }),
    );

    // Re-register pattern (matching the tracker's idempotent re-registration
    // on every trigger fire).
    api.register('tracker', macroDef, () => 'first');
    api.register('tracker', macroDef, () => 'second');
    api.register('tracker', macroDef, () => 'third');

    // Each registration replaced the prior in-store entry; all three
    // should have hit `macrosRegisteredThisRun.add` (same name, idempotent
    // on Set).
    expect(tracker.has('tracker')).toBe(true);
    // And the macro is still in the store.
    expect(getMacro('tracker')).toBeDefined();
  });
});
