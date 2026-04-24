import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  registerTab,
  hasTab,
  getTab,
  destroyTab,
  addActivateHandler,
  dispatchActivation,
  updateTitle,
  updateShortName,
  updateBadge,
  countByScript,
  clearByScript,
  listReplayMessages,
  __reset,
} from '../../src/engine/drawer-tab-registry.js';

beforeEach(() => __reset());

// ─── registerTab — live-state fields ────────────────────────────────────────

describe('registerTab', () => {
  test('creates an entry with title/shortName/options retained and badge null', () => {
    registerTab('s1', 'dash', 'dt_abc', 'Dashboard', 'Dash', {
      description: 'A dashboard tab',
      keywords:    ['stats', 'charts'],
      headerTitle: 'My Dashboard',
      iconSvg:     '<svg/>',
    });
    const entry = getTab('s1', 'dash')!;
    expect(entry).toBeDefined();
    expect(entry.rootElementId).toBe('dt_abc');
    expect(entry.title).toBe('Dashboard');
    expect(entry.shortName).toBe('Dash');
    expect(entry.badge).toBeNull();
    expect(entry.options.description).toBe('A dashboard tab');
    expect(entry.options.keywords).toEqual(['stats', 'charts']);
    expect(entry.options.headerTitle).toBe('My Dashboard');
    expect(entry.options.iconSvg).toBe('<svg/>');
  });

  test('two scripts can share the same tabId without collision', () => {
    registerTab('script-A', 'shared', 'dt_a', 'A', undefined, {});
    registerTab('script-B', 'shared', 'dt_b', 'B', undefined, {});
    expect(getTab('script-A', 'shared')!.title).toBe('A');
    expect(getTab('script-B', 'shared')!.title).toBe('B');
  });
});

// ─── Same-(scriptId, tabId) replace — v0.22.1 behaviour ─────────────────────

describe('registerTab — replace semantics', () => {
  test('same-(scriptId, tabId) re-register silently replaces (no throw)', () => {
    registerTab('s1', 'dash', 'dt_1', 'First', undefined, {});
    // Prior behaviour (v0.22.0): threw "duplicate tab id".
    // New behaviour (v0.22.1): silent replace — matches input-bar-action
    // registry so manual re-run of a script while iterating works.
    expect(() => registerTab('s1', 'dash', 'dt_2', 'Second', 'Sec', {
      description: 'updated',
    })).not.toThrow();
  });

  test('replace updates title / shortName / options / rootElementId', () => {
    registerTab('s1', 'x', 'dt_1', 'Old', 'Ol', {
      description: 'first version',
    });
    registerTab('s1', 'x', 'dt_2', 'New', 'Ne', {
      description:  'second version',
      iconSvg:      '<svg/>',
    });
    const entry = getTab('s1', 'x')!;
    expect(entry.rootElementId).toBe('dt_2');
    expect(entry.title).toBe('New');
    expect(entry.shortName).toBe('Ne');
    expect(entry.options.description).toBe('second version');
    expect(entry.options.iconSvg).toBe('<svg/>');
  });

  test('replace clears old activate handlers (stale-closure hygiene)', () => {
    registerTab('s1', 'x', 'dt_1', 'X', undefined, {});
    const oldHandler = mock(() => {});
    addActivateHandler('s1', 'x', oldHandler);
    expect(getTab('s1', 'x')!.activateHandlers.size).toBe(1);

    // Re-register — old handler must be cleared. A stale closure from a
    // prior trigger run shouldn't fire when the host activates the freshly
    // re-registered tab.
    registerTab('s1', 'x', 'dt_2', 'X', undefined, {});
    expect(getTab('s1', 'x')!.activateHandlers.size).toBe(0);

    // Simulate an activation — old handler should NOT fire.
    dispatchActivation('s1', 'x');
    expect(oldHandler).toHaveBeenCalledTimes(0);
  });

  test('replace resets badge to null (prior run\'s badge state cleared)', () => {
    registerTab('s1', 'x', 'dt_1', 'X', undefined, {});
    updateBadge('s1', 'x', '7');
    expect(getTab('s1', 'x')!.badge).toBe('7');
    registerTab('s1', 'x', 'dt_2', 'X', undefined, {});
    expect(getTab('s1', 'x')!.badge).toBeNull();
  });

  test('replace does NOT increment the entry count', () => {
    registerTab('s1', 'x', 'dt_1', 'X', undefined, {});
    expect(countByScript('s1')).toBe(1);
    registerTab('s1', 'x', 'dt_2', 'X', undefined, {});
    expect(countByScript('s1')).toBe(1);
  });

  test('two scripts can independently register the same tabId without collision', () => {
    registerTab('script-A', 'shared', 'dt_a', 'A Title', undefined, {});
    registerTab('script-B', 'shared', 'dt_b', 'B Title', undefined, {});
    expect(getTab('script-A', 'shared')!.title).toBe('A Title');
    expect(getTab('script-B', 'shared')!.title).toBe('B Title');
    expect(countByScript('script-A')).toBe(1);
    expect(countByScript('script-B')).toBe(1);
  });
});

// ─── hasTab — used by the API builder to gate the stack-limit checks ────────

describe('hasTab', () => {
  test('returns false when the entry is absent', () => {
    expect(hasTab('s1', 'nope')).toBe(false);
  });

  test('returns true after registerTab, false after destroyTab', () => {
    registerTab('s1', 'x', 'dt_1', 'X', undefined, {});
    expect(hasTab('s1', 'x')).toBe(true);
    destroyTab('s1', 'x');
    expect(hasTab('s1', 'x')).toBe(false);
  });

  test('ownership-scoped — hasTab(otherScript, sameId) is false', () => {
    registerTab('script-A', 'x', 'dt_a', 'X', undefined, {});
    expect(hasTab('script-B', 'x')).toBe(false);
  });
});

// ─── update{Title,ShortName,Badge} — live-state mutation ─────────────────────

describe('update helpers', () => {
  test('updateTitle sets live title and returns true', () => {
    registerTab('s1', 'x', 'dt_1', 'Old', undefined, {});
    expect(updateTitle('s1', 'x', 'New')).toBe(true);
    expect(getTab('s1', 'x')!.title).toBe('New');
  });

  test('updateShortName sets live shortName and returns true', () => {
    registerTab('s1', 'x', 'dt_1', 'X', 'Old', {});
    expect(updateShortName('s1', 'x', 'New')).toBe(true);
    expect(getTab('s1', 'x')!.shortName).toBe('New');
  });

  test('updateBadge sets live badge; null clears it', () => {
    registerTab('s1', 'x', 'dt_1', 'X', undefined, {});
    expect(updateBadge('s1', 'x', '3')).toBe(true);
    expect(getTab('s1', 'x')!.badge).toBe('3');
    expect(updateBadge('s1', 'x', null)).toBe(true);
    expect(getTab('s1', 'x')!.badge).toBeNull();
  });

  test('all helpers return false on unknown (scriptId, tabId)', () => {
    expect(updateTitle('s1', 'ghost', 'X')).toBe(false);
    expect(updateShortName('s1', 'ghost', 'X')).toBe(false);
    expect(updateBadge('s1', 'ghost', 'X')).toBe(false);
  });

  test('cross-script update returns false (ownership guard)', () => {
    registerTab('script-A', 'x', 'dt_1', 'A', undefined, {});
    expect(updateTitle('script-B', 'x', 'hijack')).toBe(false);
    expect(getTab('script-A', 'x')!.title).toBe('A');
  });
});

// ─── destroyTab ──────────────────────────────────────────────────────────────

describe('destroyTab', () => {
  test('removes entry and returns true; second call returns false', () => {
    registerTab('s1', 'x', 'dt_1', 'X', undefined, {});
    expect(destroyTab('s1', 'x')).toBe(true);
    expect(destroyTab('s1', 'x')).toBe(false);
    expect(getTab('s1', 'x')).toBeUndefined();
  });
});

// ─── listReplayMessages ──────────────────────────────────────────────────────

describe('listReplayMessages', () => {
  test('empty registry returns []', () => {
    expect(listReplayMessages()).toEqual([]);
  });

  test('register message folds current live title / shortName', () => {
    registerTab('s1', 'dash', 'dt_1', 'Original', 'OrigShort', {
      description: 'desc',
      iconSvg:     '<svg/>',
    });
    updateTitle('s1', 'dash', 'Renamed');
    updateShortName('s1', 'dash', 'RenSh');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_drawer_tab_register') throw new Error('unreachable');
    expect(msg.scriptId).toBe('s1');
    expect(msg.tabId).toBe('dash');
    expect(msg.rootElementId).toBe('dt_1');
    expect(msg.options.id).toBe('dash');
    expect(msg.options.title).toBe('Renamed');
    expect(msg.options.shortName).toBe('RenSh');
    expect(msg.options.description).toBe('desc');
    expect(msg.options.iconSvg).toBe('<svg/>');
  });

  test('set_badge follows register when a badge is live', () => {
    registerTab('s1', 'dash', 'dt_1', 'Dashboard', undefined, {});
    updateBadge('s1', 'dash', '42');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(2);

    expect(msgs[0]!.type).toBe('ls_drawer_tab_register');
    const badge = msgs[1]!;
    if (badge.type !== 'ls_drawer_tab_set_badge') throw new Error('unreachable');
    expect(badge.scriptId).toBe('s1');
    expect(badge.tabId).toBe('dash');
    expect(badge.badge).toBe('42');
  });

  test('null badge is NOT emitted as set_badge (default state)', () => {
    registerTab('s1', 'dash', 'dt_1', 'D', undefined, {});
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_drawer_tab_register');
  });

  test('cleared badge (set to null) is NOT emitted as set_badge on replay', () => {
    registerTab('s1', 'dash', 'dt_1', 'D', undefined, {});
    updateBadge('s1', 'dash', '5');
    updateBadge('s1', 'dash', null);
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_drawer_tab_register');
  });

  test('destroyed tabs are excluded from replay', () => {
    registerTab('s1', 'keep', 'dt_k', 'K', undefined, {});
    registerTab('s1', 'drop', 'dt_d', 'D', undefined, {});
    destroyTab('s1', 'drop');
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_drawer_tab_register') throw new Error('unreachable');
    expect(msg.tabId).toBe('keep');
  });

  test('clearByScript prunes the script from replay', () => {
    registerTab('script-A', 'a', 'dt_a', 'A', undefined, {});
    registerTab('script-B', 'b', 'dt_b', 'B', undefined, {});
    clearByScript('script-A');
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_drawer_tab_register') throw new Error('unreachable');
    expect(msg.scriptId).toBe('script-B');
  });

  test('multiple tabs with badges interleave correctly', () => {
    registerTab('s1', 'a', 'dt_a', 'A', undefined, {});
    registerTab('s1', 'b', 'dt_b', 'B', undefined, {});
    updateBadge('s1', 'a', 'A!');
    updateBadge('s1', 'b', 'B!');

    const msgs = listReplayMessages();
    // Each tab: 1 register + 1 set_badge, in Map iteration order (insertion)
    expect(msgs).toHaveLength(4);
    expect(msgs[0]!.type).toBe('ls_drawer_tab_register');
    expect(msgs[1]!.type).toBe('ls_drawer_tab_set_badge');
    expect(msgs[2]!.type).toBe('ls_drawer_tab_register');
    expect(msgs[3]!.type).toBe('ls_drawer_tab_set_badge');
  });
});
