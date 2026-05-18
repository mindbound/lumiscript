/**
 * Parent-side coverage for `api.theme.*`. Pairs with the lower-level
 * `theme-store.test.ts` (which covers the merge math) by exercising the
 * builder's behaviour: per-script attribution flows, push-to-spindle on
 * mutation, permission gating, DTO↔Info translation, teardown flush.
 *
 * Pattern follows `presets.test.ts` — `createTestDeps` for the deps
 * stub, the global `mockSpindle` for the host API, one-test-per-method
 * for forwarding + permission gating, plus per-script behaviour tests
 * for the merge-and-push flow.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildThemeAPI, flushThemeOnTeardown } from '../../../src/engine/api/theme.js';
import * as themeStore from '../../../src/engine/theme-store.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
  themeStore.__resetForTests();
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildThemeAPI(createTestDeps(overrides));
}

// ─── apply ──────────────────────────────────────────────────────────────────

describe('apply', () => {
  test('records this script in theme-store + pushes merged variables to spindle', async () => {
    const api = buildApi({ script: { id: 'script-A', name: 'A' } });
    await api.apply({ variables: { '--lumiverse-accent': 'purple' } });

    // Spindle saw the merged result (one script → identity).
    const lastApply = (mockSpindle.theme.apply as any).mock.calls.at(-1)![0];
    expect(lastApply).toEqual({ variables: { '--lumiverse-accent': 'purple' } });
    // theme-store has the script's slot.
    expect(themeStore.hasStateByScriptId('script-A')).toBe(true);
  });

  test("two scripts apply → spindle sees the merged result (per-key last-wins)", async () => {
    const apiA = buildApi({ script: { id: 'script-A', name: 'A' } });
    const apiB = buildApi({ script: { id: 'script-B', name: 'B' } });
    await apiA.apply({ variables: { '--lumiverse-accent': 'purple', '--lumiverse-border': 'magenta' } });
    await apiB.apply({ variables: { '--lumiverse-accent': 'pink' } });

    // Last push reflects merge: A's border, B's accent.
    const lastApply = (mockSpindle.theme.apply as any).mock.calls.at(-1)![0];
    expect(lastApply.variables).toEqual({
      '--lumiverse-accent': 'pink',
      '--lumiverse-border': 'magenta',
    });
  });

  test('throws PERMISSION_DENIED when app_manipulation is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.apply({ variables: {} })).rejects.toThrow('PERMISSION_DENIED');
  });

  test('does NOT touch spindle.theme.applyPalette (separate slot)', async () => {
    const api = buildApi();
    (mockSpindle.theme.applyPalette as any).mockClear();
    await api.apply({ variables: { 'x': '1' } });
    expect(mockSpindle.theme.applyPalette).not.toHaveBeenCalled();
  });

  test('forwards userId to spindle.theme.apply (operator-scoped support)', async () => {
    // Counterpart to the upstream worker-runtime PR threading userId
    // through `spindle.theme.apply`. LumiScript passes uid as the
    // second arg so the host's `resolveEffectiveUserId` succeeds even
    // on operator-scoped installs.
    const api = buildApi({ userId: 'user-42' });
    await api.apply({ variables: { 'x': '1' } });
    const lastCall = (mockSpindle.theme.apply as any).mock.calls.at(-1)!;
    expect(lastCall[1]).toBe('user-42');
  });

  test('passes undefined userId through cleanly when no userId is set', async () => {
    const api = buildApi({ userId: null });
    await api.apply({ variables: { 'x': '1' } });
    const lastCall = (mockSpindle.theme.apply as any).mock.calls.at(-1)!;
    expect(lastCall[1]).toBeUndefined();
  });
});

// ─── applyPalette ──────────────────────────────────────────────────────────

describe('applyPalette', () => {
  test('records the palette + pushes the active palette to spindle', async () => {
    const api = buildApi({ script: { id: 'script-A' } });
    await api.applyPalette({ accent: { h: 280, s: 70, l: 60 } });
    const lastCall = (mockSpindle.theme.applyPalette as any).mock.calls.at(-1)!;
    expect(lastCall[0]).toEqual({ accent: { h: 280, s: 70, l: 60 } });
  });

  test('two scripts apply palettes → most-recent-script-wins', async () => {
    const apiA = buildApi({ script: { id: 'script-A' } });
    const apiB = buildApi({ script: { id: 'script-B' } });
    await apiA.applyPalette({ accent: { h: 280, s: 70, l: 60 } });
    await apiB.applyPalette({ accent: { h: 120, s: 50, l: 50 } });

    const lastCall = (mockSpindle.theme.applyPalette as any).mock.calls.at(-1)!;
    expect(lastCall[0]).toEqual({ accent: { h: 120, s: 50, l: 50 } });
  });

  test('passing null pushes null to spindle (clear sentinel)', async () => {
    const api = buildApi();
    await api.applyPalette(null);
    const lastCall = (mockSpindle.theme.applyPalette as any).mock.calls.at(-1)!;
    expect(lastCall[0]).toBeNull();
  });

  test('throws PERMISSION_DENIED when app_manipulation is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.applyPalette({ accent: { h: 0, s: 0, l: 0 } })).rejects.toThrow('PERMISSION_DENIED');
  });

  test('does NOT touch spindle.theme.apply (separate slot)', async () => {
    const api = buildApi();
    (mockSpindle.theme.apply as any).mockClear();
    await api.applyPalette({ accent: { h: 0, s: 0, l: 0 } });
    expect(mockSpindle.theme.apply).not.toHaveBeenCalled();
  });
});

// ─── clear ──────────────────────────────────────────────────────────────────

describe('clear', () => {
  test('clear without prior apply is a no-op (no spindle calls)', async () => {
    const api = buildApi();
    (mockSpindle.theme.apply as any).mockClear();
    (mockSpindle.theme.applyPalette as any).mockClear();
    await api.clear();
    expect(mockSpindle.theme.apply).not.toHaveBeenCalled();
    expect(mockSpindle.theme.applyPalette).not.toHaveBeenCalled();
  });

  test('clear after solo apply calls spindle.theme.clear (empty-store shortcut)', async () => {
    // v1.0.0-rc.5 fix: when the only contributing script clears, the
    // builder uses `spindle.theme.clear(uid)` directly instead of
    // pushing `apply({}) + applyPalette(null)`. The single-call clear
    // path threads `uid` through the IPC envelope, avoiding the host's
    // userId-required check that `spindle.theme.apply` can't satisfy
    // (its worker-runtime signature doesn't accept userId).
    const api = buildApi({ script: { id: 'script-A' } });
    await api.apply({ variables: { 'x': '1' } });
    (mockSpindle.theme.apply as any).mockClear();
    (mockSpindle.theme.clear as any).mockClear();

    await api.clear();
    expect(mockSpindle.theme.clear).toHaveBeenCalledTimes(1);
    expect(mockSpindle.theme.apply).not.toHaveBeenCalled();
  });

  test('clear after solo applyPalette calls spindle.theme.clear (empty-store shortcut)', async () => {
    const api = buildApi({ script: { id: 'script-A' } });
    await api.applyPalette({ accent: { h: 0, s: 0, l: 0 } });
    (mockSpindle.theme.apply as any).mockClear();
    (mockSpindle.theme.applyPalette as any).mockClear();
    (mockSpindle.theme.clear as any).mockClear();

    await api.clear();
    expect(mockSpindle.theme.clear).toHaveBeenCalledTimes(1);
    expect(mockSpindle.theme.apply).not.toHaveBeenCalled();
    expect(mockSpindle.theme.applyPalette).not.toHaveBeenCalled();
  });

  test("clear drops this script's slot but preserves other scripts' contributions", async () => {
    const apiA = buildApi({ script: { id: 'script-A' } });
    const apiB = buildApi({ script: { id: 'script-B' } });
    await apiA.apply({ variables: { 'a': '1' } });
    await apiB.apply({ variables: { 'b': '2' } });

    await apiA.clear();
    // After A clears, only B's keys remain in the merged result.
    const lastApply = (mockSpindle.theme.apply as any).mock.calls.at(-1)![0];
    expect(lastApply.variables).toEqual({ 'b': '2' });
  });

  test('throws PERMISSION_DENIED when app_manipulation is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.clear()).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── getCurrent ─────────────────────────────────────────────────────────────

describe('getCurrent', () => {
  test('returns the camelCase ThemeInfo from spindle', async () => {
    const api = buildApi();
    const info = await api.getCurrent();
    expect(info.id).toBe('lumiverse-purple');
    expect(info.mode).toBe('dark');
    expect(info.accent).toEqual({ h: 280, s: 70, l: 60 });
    expect(info.enableGlass).toBe(true);
  });

  test('forwards userId to spindle', async () => {
    const api = buildApi({ userId: 'user-42' });
    await api.getCurrent();
    expect((mockSpindle.theme.getCurrent as any).mock.calls.at(-1)![0]).toBe('user-42');
  });

  test('throws PERMISSION_DENIED when app_manipulation is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.getCurrent()).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── extractColors ──────────────────────────────────────────────────────────

describe('extractColors', () => {
  test('forwards imageId + returns the ColorExtractionInfo as-is', async () => {
    const api = buildApi();
    const result = await api.extractColors('image-abc');
    expect((mockSpindle.theme.extractColors as any).mock.calls.at(-1)![0]).toBe('image-abc');
    expect(result.dominant).toEqual({ r: 100, g: 50, b: 200 });
    expect(result.dominantHsl).toEqual({ h: 280, s: 70, l: 60 });
    expect(result.isLight).toBe(false);
  });

  test('throws PERMISSION_DENIED when app_manipulation is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.extractColors('image-abc')).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── generateVariables ──────────────────────────────────────────────────────

describe('generateVariables', () => {
  test('passes the config through to spindle.theme.generateVariables', async () => {
    const config = {
      accent:      { h: 280, s: 70, l: 60 },
      mode:        'dark' as const,
      enableGlass: true,
      radiusScale: 1.2,
    };
    const api = buildApi();
    await api.generateVariables(config);
    expect((mockSpindle.theme.generateVariables as any).mock.calls.at(-1)![0]).toEqual(config);
  });

  test('throws PERMISSION_DENIED when app_manipulation is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.generateVariables({ accent: { h: 0, s: 0, l: 0 }, mode: 'dark' })).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── flushThemeOnTeardown (called from backend.ts:teardownDisabledScript) ──

describe('flushThemeOnTeardown', () => {
  test("clears the script's state AND pushes the post-clear merge", async () => {
    const apiA = buildApi({ script: { id: 'script-A' } });
    const apiB = buildApi({ script: { id: 'script-B' } });
    await apiA.apply({ variables: { 'a': '1' } });
    await apiB.apply({ variables: { 'b': '2' } });

    (mockSpindle.theme.apply as any).mockClear();
    (mockSpindle.theme.applyPalette as any).mockClear();

    await flushThemeOnTeardown('script-A', null);

    // theme-store no longer has A's slot.
    expect(themeStore.hasStateByScriptId('script-A')).toBe(false);
    // B's slot survives.
    expect(themeStore.hasStateByScriptId('script-B')).toBe(true);
    // Push happened — only B's variables remain.
    const lastApply = (mockSpindle.theme.apply as any).mock.calls.at(-1)![0];
    expect(lastApply.variables).toEqual({ 'b': '2' });
    // Both apply + applyPalette were pushed (covering both layer types).
    expect(mockSpindle.theme.apply).toHaveBeenCalled();
    expect(mockSpindle.theme.applyPalette).toHaveBeenCalled();
  });

  test('no-op when the script never applied anything', async () => {
    (mockSpindle.theme.apply as any).mockClear();
    (mockSpindle.theme.applyPalette as any).mockClear();

    await flushThemeOnTeardown('script-never-applied', null);

    expect(mockSpindle.theme.apply).not.toHaveBeenCalled();
    expect(mockSpindle.theme.applyPalette).not.toHaveBeenCalled();
  });

  test('after teardown, the last script clearing reaches empty merged state via spindle.theme.clear', async () => {
    const apiA = buildApi({ script: { id: 'script-A' } });
    await apiA.apply({ variables: { 'a': '1' } });

    (mockSpindle.theme.apply as any).mockClear();
    (mockSpindle.theme.applyPalette as any).mockClear();
    (mockSpindle.theme.clear as any).mockClear();

    await flushThemeOnTeardown('script-A', null);

    expect(themeStore.isEmpty()).toBe(true);
    // Same empty-store shortcut as `clear()` — flushThemeOnTeardown
    // calls `spindle.theme.clear()` directly instead of the broken
    // `spindle.theme.apply({})` path.
    expect(mockSpindle.theme.clear).toHaveBeenCalledTimes(1);
    expect(mockSpindle.theme.apply).not.toHaveBeenCalled();
  });

  test('threads userId into spindle.theme.clear so the host FE-update event fires on operator-scoped installs', async () => {
    // Regression — disabling the only theme-applying script left the
    // override stuck in the host's themeOverrides slot because the
    // teardown call was passing `undefined` for userId, which the host's
    // resolveEffectiveUserId rejects on operator-scoped installs. The
    // visible symptom was a stale theme that only reverted on FE refresh.
    const apiA = buildApi({ script: { id: 'script-A' }, userId: 'user-42' });
    await apiA.apply({ variables: { 'a': '1' } });

    (mockSpindle.theme.clear as any).mockClear();

    await flushThemeOnTeardown('script-A', 'user-42');

    expect(mockSpindle.theme.clear).toHaveBeenCalledTimes(1);
    expect((mockSpindle.theme.clear as any).mock.calls.at(-1)![0]).toBe('user-42');
  });

  test('threads userId into the merged-state push when other scripts still contribute', async () => {
    const apiA = buildApi({ script: { id: 'script-A' }, userId: 'user-42' });
    const apiB = buildApi({ script: { id: 'script-B' }, userId: 'user-42' });
    await apiA.applyPalette({ accent: { h: 100, s: 50, l: 50 } });
    await apiB.applyPalette({ accent: { h: 200, s: 50, l: 50 } });

    (mockSpindle.theme.applyPalette as any).mockClear();

    await flushThemeOnTeardown('script-B', 'user-42');

    // After B's teardown, A's palette wins (most-recent-remaining). The
    // applyPalette push must carry userId so the host's FE-update event
    // fires on operator-scoped installs.
    const lastCall = (mockSpindle.theme.applyPalette as any).mock.calls.at(-1)!;
    expect(lastCall[1]).toBe('user-42');
  });
});

// ─── Host non-committing-macro-resolve race guard ──────────────────────────

describe('host macro-race retry (v1.0.0-rc.5)', () => {
  // The host's worker-runtime blocks mutating spindle.theme.* calls while
  // any macro is being resolved with `commit: false` (prompt previews,
  // chat-title regen, …). LumiScript's theme wrapper transparently retries
  // the call so user scripts triggered by chat-open events don't see
  // intermittent failures.

  test('applyPalette: retries on the host race error and succeeds on the next attempt', async () => {
    // First call throws the race error; second resolves. The wrapper's
    // retry should make the user-facing call succeed.
    let calls = 0;
    (mockSpindle.theme.applyPalette as any).mockImplementation(() => {
      calls += 1;
      if (calls === 1) {
        throw new Error('spindle.theme.applyPalette() is not allowed during non-committing macro resolution');
      }
      return Promise.resolve();
    });

    const api = buildApi();
    await expect(api.applyPalette({ accent: { h: 100, s: 50, l: 50 } })).resolves.toBeUndefined();
    expect(calls).toBe(2);
  });

  test('apply: same retry coverage on the variables-push path', async () => {
    let calls = 0;
    (mockSpindle.theme.apply as any).mockImplementation(() => {
      calls += 1;
      if (calls === 1) {
        throw new Error('spindle.theme.apply() is not allowed during non-committing macro resolution');
      }
      return Promise.resolve();
    });

    const api = buildApi();
    await expect(api.apply({ variables: { 'a': '1' } })).resolves.toBeUndefined();
    expect(calls).toBe(2);
  });

  test('clear: same retry coverage on the explicit-clear path', async () => {
    // Seed a contribution so clear() takes the spindle.theme.clear branch.
    const api = buildApi();
    await api.apply({ variables: { 'a': '1' } });

    let calls = 0;
    (mockSpindle.theme.clear as any).mockImplementation(() => {
      calls += 1;
      if (calls === 1) {
        throw new Error('spindle.theme.clear() is not allowed during non-committing macro resolution');
      }
      return Promise.resolve();
    });

    await expect(api.clear()).resolves.toBeUndefined();
    expect(calls).toBe(2);
  });

  test('non-race errors propagate immediately without retry', async () => {
    // Any error message that does not contain "non-committing macro
    // resolution" should bubble up on the first attempt.
    let calls = 0;
    (mockSpindle.theme.applyPalette as any).mockImplementation(() => {
      calls += 1;
      throw new Error('spindle.theme.applyPalette: permission denied');
    });

    const api = buildApi();
    await expect(
      api.applyPalette({ accent: { h: 100, s: 50, l: 50 } }),
    ).rejects.toThrow('permission denied');
    expect(calls).toBe(1);
  });

  test('exhausted retries surface the unresolved race to the caller', async () => {
    // Persistent race across all five attempts — the wrapper must give
    // up and re-throw rather than silently swallow forever.
    let calls = 0;
    (mockSpindle.theme.applyPalette as any).mockImplementation(() => {
      calls += 1;
      throw new Error('spindle.theme.applyPalette() is not allowed during non-committing macro resolution');
    });

    const api = buildApi();
    await expect(
      api.applyPalette({ accent: { h: 100, s: 50, l: 50 } }),
    ).rejects.toThrow('non-committing macro resolution');
    expect(calls).toBe(5);
  });
});
