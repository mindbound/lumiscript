/**
 * Unit tests for the per-script theme override registry + merge layer
 * (`src/engine/theme-store.ts`). No spindle interaction — exercises the
 * pure data structure + merge functions directly.
 *
 * Covers:
 *   - Single-script apply: variables flow through to merged result.
 *   - Two-script no-conflict: union of disjoint keys.
 *   - Two-script conflict: per-key last-applied-wins (apply-order
 *     determines the merge ordering — later script's keys win).
 *   - variablesByMode handled independently for dark / light slots.
 *   - Palette merge: most-recent-script-wins (NOT per-key — palettes
 *     are opaque, last call replaces).
 *   - Apply-order bumping: when a script re-applies, it moves to the
 *     end of the apply-order list (its keys now win against scripts
 *     that haven't touched the same key recently).
 *   - clearByScriptId drops both slots + removes from apply-order.
 *   - Empty-state helpers (`isEmpty`, `hasStateByScriptId`).
 *   - Diagnostics helper (`countContributionsByScriptId`,
 *     `listScriptIdsInApplyOrder`).
 *   - __resetForTests truly resets module state between cases.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import * as themeStore from '../../src/engine/theme-store.js';

beforeEach(() => {
  themeStore.__resetForTests();
});

// ─── Variables merge ────────────────────────────────────────────────────────

describe('theme-store: variables merge', () => {
  test('single script applies variables → merged result equals the script input', () => {
    themeStore.setVariables('script-A', { variables: { '--lumiverse-accent': 'purple' } });
    expect(themeStore.computeMergedVariables()).toEqual({
      variables: { '--lumiverse-accent': 'purple' },
    });
  });

  test('two scripts with disjoint keys → merged result is the union', () => {
    themeStore.setVariables('script-A', { variables: { '--lumiverse-accent': 'purple' } });
    themeStore.setVariables('script-B', { variables: { '--lumiverse-radius': '8px'    } });
    const merged = themeStore.computeMergedVariables();
    expect(merged.variables).toEqual({
      '--lumiverse-accent': 'purple',
      '--lumiverse-radius': '8px',
    });
  });

  test('two scripts conflicting on same key → later script wins (apply order)', () => {
    themeStore.setVariables('script-A', { variables: { '--lumiverse-accent': 'purple' } });
    themeStore.setVariables('script-B', { variables: { '--lumiverse-accent': 'pink'   } });
    expect(themeStore.computeMergedVariables().variables).toEqual({
      '--lumiverse-accent': 'pink',
    });
  });

  test('re-applying bumps a script to the END of apply-order — its keys now win', () => {
    themeStore.setVariables('script-A', { variables: { '--lumiverse-accent': 'purple' } });
    themeStore.setVariables('script-B', { variables: { '--lumiverse-accent': 'pink'   } });
    // Script A re-applies: its accent now wins over B's.
    themeStore.setVariables('script-A', { variables: { '--lumiverse-accent': 'cyan'   } });
    expect(themeStore.computeMergedVariables().variables).toEqual({
      '--lumiverse-accent': 'cyan',
    });
  });

  test('variablesByMode merges dark + light independently', () => {
    themeStore.setVariables('script-A', { variablesByMode: { dark:  { '--lumiverse-bg': '#000' } } });
    themeStore.setVariables('script-B', { variablesByMode: { light: { '--lumiverse-bg': '#fff' } } });
    const merged = themeStore.computeMergedVariables();
    expect(merged.variablesByMode).toEqual({
      dark:  { '--lumiverse-bg': '#000' },
      light: { '--lumiverse-bg': '#fff' },
    });
  });

  test('flat variables + variablesByMode coexist in the merged result', () => {
    themeStore.setVariables('script-A', {
      variables:       { '--lumiverse-radius': '8px' },
      variablesByMode: { dark: { '--lumiverse-bg': '#000' } },
    });
    const merged = themeStore.computeMergedVariables();
    expect(merged.variables).toEqual({ '--lumiverse-radius': '8px' });
    expect(merged.variablesByMode).toEqual({ dark: { '--lumiverse-bg': '#000' } });
  });

  test('mode-keyed conflicts follow the same last-applied-wins rule', () => {
    themeStore.setVariables('script-A', { variablesByMode: { dark: { '--lumiverse-bg': '#001' } } });
    themeStore.setVariables('script-B', { variablesByMode: { dark: { '--lumiverse-bg': '#002' } } });
    expect(themeStore.computeMergedVariables().variablesByMode).toEqual({
      dark: { '--lumiverse-bg': '#002' },
    });
  });

  test('no scripts → empty merged result', () => {
    expect(themeStore.computeMergedVariables()).toEqual({});
  });

  test('all scripts have only palette (no variables) → empty merged variables result', () => {
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    expect(themeStore.computeMergedVariables()).toEqual({});
  });
});

// ─── Palette merge ──────────────────────────────────────────────────────────

describe('theme-store: palette merge', () => {
  test('single script applies palette → that palette is active', () => {
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    expect(themeStore.computeActivePalette()).toEqual({ accent: { h: 280, s: 70, l: 60 } });
  });

  test('two scripts apply palettes → most-recently-applied wins (no merge)', () => {
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    themeStore.setPalette('script-B', { accent: { h: 120, s: 50, l: 50 } });
    expect(themeStore.computeActivePalette()).toEqual({ accent: { h: 120, s: 50, l: 50 } });
  });

  test('script that re-applies bumps to most-recent → its palette wins', () => {
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    themeStore.setPalette('script-B', { accent: { h: 120, s: 50, l: 50 } });
    themeStore.setPalette('script-A', { accent: { h: 40,  s: 90, l: 50 } });
    expect(themeStore.computeActivePalette()).toEqual({ accent: { h: 40, s: 90, l: 50 } });
  });

  test('passing null is the explicit clear sentinel — most-recent null wins', () => {
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    themeStore.setPalette('script-B', null);
    expect(themeStore.computeActivePalette()).toBeNull();
  });

  test('no scripts → active palette is null', () => {
    expect(themeStore.computeActivePalette()).toBeNull();
  });
});

// ─── clear + lifecycle ─────────────────────────────────────────────────────

describe('theme-store: clear lifecycle', () => {
  test('clearByScriptId drops both variables AND palette for the script', () => {
    themeStore.setVariables('script-A', { variables: { '--lumiverse-accent': 'purple' } });
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    expect(themeStore.hasStateByScriptId('script-A')).toBe(true);

    themeStore.clearByScriptId('script-A');
    expect(themeStore.hasStateByScriptId('script-A')).toBe(false);
    expect(themeStore.computeMergedVariables()).toEqual({});
    expect(themeStore.computeActivePalette()).toBeNull();
  });

  test('clearByScriptId removes the script from apply-order', () => {
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    themeStore.setVariables('script-B', { variables: { 'x': '2' } });
    themeStore.setVariables('script-C', { variables: { 'x': '3' } });
    expect(themeStore.listScriptIdsInApplyOrder()).toEqual(['script-A', 'script-B', 'script-C']);

    themeStore.clearByScriptId('script-B');
    expect(themeStore.listScriptIdsInApplyOrder()).toEqual(['script-A', 'script-C']);
    // After dropping B, the merged result reflects A then C — C wins on conflicts.
    expect(themeStore.computeMergedVariables().variables).toEqual({ 'x': '3' });
  });

  test('clearByScriptId returns true when state existed, false when not', () => {
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    expect(themeStore.clearByScriptId('script-A')).toBe(true);
    expect(themeStore.clearByScriptId('script-A')).toBe(false);
    expect(themeStore.clearByScriptId('script-never-existed')).toBe(false);
  });

  test('clearing the last script empties everything → isEmpty becomes true', () => {
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    expect(themeStore.isEmpty()).toBe(false);
    themeStore.clearByScriptId('script-A');
    expect(themeStore.isEmpty()).toBe(true);
  });
});

// ─── Diagnostics helpers ───────────────────────────────────────────────────

describe('theme-store: diagnostics helpers', () => {
  test('countContributionsByScriptId sums variables + variablesByMode + palette', () => {
    themeStore.setVariables('script-A', {
      variables:       { 'a': '1', 'b': '2' },                          // 2
      variablesByMode: { dark: { 'c': '3' }, light: { 'd': '4', 'e': '5' } },  // 1 + 2 = 3
    });
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });   // 1
    expect(themeStore.countContributionsByScriptId('script-A')).toBe(6);
  });

  test('countContributionsByScriptId is 0 for unknown script', () => {
    expect(themeStore.countContributionsByScriptId('script-never-existed')).toBe(0);
  });

  test('countContributionsByScriptId counts an explicit null palette as a contribution', () => {
    // null is "clear my palette" — it's still a contribution to the
    // merge (it sits in apply-order and influences computeActivePalette).
    themeStore.setPalette('script-A', null);
    expect(themeStore.countContributionsByScriptId('script-A')).toBe(1);
  });

  test('listScriptIdsInApplyOrder reflects most-recently-touched at the end', () => {
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    themeStore.setVariables('script-B', { variables: { 'x': '2' } });
    themeStore.setPalette('script-A', { accent: { h: 0, s: 0, l: 0 } });
    // script-A re-touched via setPalette → moves to end.
    expect(themeStore.listScriptIdsInApplyOrder()).toEqual(['script-B', 'script-A']);
  });

  test('hasStateByScriptId is true only when the script has a slot', () => {
    expect(themeStore.hasStateByScriptId('script-A')).toBe(false);
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    expect(themeStore.hasStateByScriptId('script-A')).toBe(true);
    themeStore.clearByScriptId('script-A');
    expect(themeStore.hasStateByScriptId('script-A')).toBe(false);
  });

  test('getContributionSummaryByScriptId returns the structured per-script breakdown', () => {
    themeStore.setVariables('script-A', {
      variables:       { 'a': '1', 'b': '2', 'c': '3' },                    // flat=3
      variablesByMode: { dark: { 'd': '4', 'e': '5' }, light: { 'f': '6' } }, // dark=2, light=1
    });
    themeStore.setPalette('script-A', { accent: { h: 280, s: 70, l: 60 } });
    const summary = themeStore.getContributionSummaryByScriptId('script-A');
    expect(summary).not.toBeNull();
    expect(summary!.flatVariables).toBe(3);
    expect(summary!.darkVariables).toBe(2);
    expect(summary!.lightVariables).toBe(1);
    expect(summary!.totalVariables).toBe(6);
    expect(summary!.palette).toBe('set');
  });

  test("getContributionSummaryByScriptId reports palette: 'cleared' for null sentinel", () => {
    themeStore.setPalette('script-A', null);
    const summary = themeStore.getContributionSummaryByScriptId('script-A');
    expect(summary!.palette).toBe('cleared');
    expect(summary!.totalVariables).toBe(0);
  });

  test("getContributionSummaryByScriptId reports palette: 'none' when no palette slot", () => {
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    const summary = themeStore.getContributionSummaryByScriptId('script-A');
    expect(summary!.palette).toBe('none');
    expect(summary!.totalVariables).toBe(1);
  });

  test('getContributionSummaryByScriptId returns null for unknown script', () => {
    expect(themeStore.getContributionSummaryByScriptId('script-never-existed')).toBeNull();
  });
});

// ─── __resetForTests sanity ────────────────────────────────────────────────

describe('theme-store: __resetForTests', () => {
  test('clears all state + apply-order', () => {
    themeStore.setVariables('script-A', { variables: { 'x': '1' } });
    themeStore.setPalette('script-B', { accent: { h: 0, s: 0, l: 0 } });

    themeStore.__resetForTests();

    expect(themeStore.isEmpty()).toBe(true);
    expect(themeStore.computeMergedVariables()).toEqual({});
    expect(themeStore.computeActivePalette()).toBeNull();
    expect(themeStore.listScriptIdsInApplyOrder()).toEqual([]);
  });
});
