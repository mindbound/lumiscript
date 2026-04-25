import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  registerAction,
  hasAction,
  getAction,
  updateLabel,
  updateSubtitle,
  updateEnabled,
  addClickHandler,
  destroyAction,
  dispatchClick,
  countByScript,
  listByScript,
  clearByScript,
  listReplayMessages,
  __reset,
} from '../../src/engine/input-bar-action-registry.js';

beforeEach(() => __reset());

// ─── registerAction: basic semantics ─────────────────────────────────────────

describe('registerAction', () => {
  test('creates an entry retrievable via getAction()', () => {
    registerAction('script-1', 'hello', 'Say Hello', true);
    const entry = getAction('script-1', 'hello');
    expect(entry).toBeDefined();
    expect(entry!.label).toBe('Say Hello');
    expect(entry!.enabled).toBe(true);
    expect(entry!.clickHandlers.size).toBe(0);
  });

  test('defaults: disabled entries stored as disabled', () => {
    registerAction('script-1', 'x', 'X', false);
    expect(getAction('script-1', 'x')!.enabled).toBe(false);
  });
});

// ─── Same-(scriptId, actionId) replace — the core v0.20.1 behaviour ─────────

describe('registerAction — replace semantics', () => {
  test('same-(scriptId, actionId) re-register silently replaces (no throw)', () => {
    registerAction('script-1', 'hello', 'First Label', true);
    // Prior behaviour: threw. New behaviour: replaces.
    expect(() => registerAction('script-1', 'hello', 'Second Label', true))
      .not.toThrow();
    expect(getAction('script-1', 'hello')!.label).toBe('Second Label');
  });

  test('replace updates the enabled flag', () => {
    registerAction('script-1', 'hello', 'X', true);
    registerAction('script-1', 'hello', 'X', false);
    expect(getAction('script-1', 'hello')!.enabled).toBe(false);
  });

  test('replace clears old click handlers (stale-closure hygiene)', () => {
    registerAction('script-1', 'hello', 'X', true);
    const oldHandler = mock(() => {});
    addClickHandler('script-1', 'hello', oldHandler);
    expect(getAction('script-1', 'hello')!.clickHandlers.size).toBe(1);

    // Re-register — old handler must be cleared. A stale closure from a
    // prior trigger run shouldn't fire when the user clicks the freshly
    // re-registered button.
    registerAction('script-1', 'hello', 'X', true);
    expect(getAction('script-1', 'hello')!.clickHandlers.size).toBe(0);

    // Simulate a click — old handler should NOT fire.
    dispatchClick('script-1', 'hello');
    expect(oldHandler).toHaveBeenCalledTimes(0);
  });

  test('replace does NOT increment the entry count', () => {
    registerAction('script-1', 'hello', 'X', true);
    expect(countByScript('script-1')).toBe(1);
    registerAction('script-1', 'hello', 'Y', false);
    expect(countByScript('script-1')).toBe(1);
  });

  test('two scripts can independently register the same actionId (no collision)', () => {
    registerAction('script-A', 'hello', 'A Label', true);
    registerAction('script-B', 'hello', 'B Label', true);
    expect(getAction('script-A', 'hello')!.label).toBe('A Label');
    expect(getAction('script-B', 'hello')!.label).toBe('B Label');
    expect(countByScript('script-A')).toBe(1);
    expect(countByScript('script-B')).toBe(1);
  });
});

// ─── hasAction — used by the API builder to gate the stack-limit check ──────

describe('hasAction', () => {
  test('returns false when the entry is absent', () => {
    expect(hasAction('script-1', 'nope')).toBe(false);
  });

  test('returns true after registerAction, false after destroyAction', () => {
    registerAction('script-1', 'x', 'X', true);
    expect(hasAction('script-1', 'x')).toBe(true);
    destroyAction('script-1', 'x');
    expect(hasAction('script-1', 'x')).toBe(false);
  });

  test('ownership-scoped — hasAction(otherScript, sameId) is false', () => {
    registerAction('script-A', 'x', 'X', true);
    expect(hasAction('script-B', 'x')).toBe(false);
  });
});

// ─── Click handlers + dispatch ───────────────────────────────────────────────

describe('addClickHandler + dispatchClick', () => {
  test('fans out to every registered handler', () => {
    registerAction('script-1', 'x', 'X', true);
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    addClickHandler('script-1', 'x', h1);
    addClickHandler('script-1', 'x', h2);

    dispatchClick('script-1', 'x');
    expect(h1).toHaveBeenCalledTimes(1);
    expect(h2).toHaveBeenCalledTimes(1);
  });

  test('returned unsubscribe removes just that handler', () => {
    registerAction('script-1', 'x', 'X', true);
    const h1 = mock(() => {});
    const h2 = mock(() => {});
    const off1 = addClickHandler('script-1', 'x', h1);
    addClickHandler('script-1', 'x', h2);
    off1();

    dispatchClick('script-1', 'x');
    expect(h1).toHaveBeenCalledTimes(0);
    expect(h2).toHaveBeenCalledTimes(1);
  });

  test('addClickHandler on an unknown action returns a no-op unsubscribe', () => {
    // Should not throw; returned function should be safely callable.
    const off = addClickHandler('script-1', 'missing', () => {});
    expect(() => off()).not.toThrow();
  });

  test('throwing handler does not stop sibling handlers from firing', () => {
    registerAction('script-1', 'x', 'X', true);
    const bad = mock(() => { throw new Error('boom'); });
    const good = mock(() => {});
    addClickHandler('script-1', 'x', bad);
    addClickHandler('script-1', 'x', good);

    dispatchClick('script-1', 'x');
    expect(bad).toHaveBeenCalledTimes(1);
    expect(good).toHaveBeenCalledTimes(1);
  });

  test('dispatchClick on an unknown action is a no-op (no throw)', () => {
    expect(() => dispatchClick('script-1', 'ghost')).not.toThrow();
  });
});

// ─── updateLabel / updateEnabled ─────────────────────────────────────────────

describe('updateLabel / updateEnabled', () => {
  test('updateLabel returns true and mutates the entry', () => {
    registerAction('script-1', 'x', 'Old', true);
    expect(updateLabel('script-1', 'x', 'New')).toBe(true);
    expect(getAction('script-1', 'x')!.label).toBe('New');
  });

  test('updateLabel on unknown action returns false, no mutation', () => {
    expect(updateLabel('script-1', 'ghost', 'Label')).toBe(false);
  });

  test('updateEnabled returns true and mutates the entry', () => {
    registerAction('script-1', 'x', 'X', true);
    expect(updateEnabled('script-1', 'x', false)).toBe(true);
    expect(getAction('script-1', 'x')!.enabled).toBe(false);
  });

  test('cross-script update attempts return false (ownership guard)', () => {
    registerAction('script-A', 'x', 'A', true);
    // getAction enforces ownership, so the update funnels through that
    expect(updateLabel('script-B', 'x', 'hijacked')).toBe(false);
    expect(getAction('script-A', 'x')!.label).toBe('A');
  });
});

// ─── destroyAction / clearByScript ───────────────────────────────────────────

describe('destroyAction', () => {
  test('returns true when entry existed, false otherwise', () => {
    registerAction('script-1', 'x', 'X', true);
    expect(destroyAction('script-1', 'x')).toBe(true);
    expect(destroyAction('script-1', 'x')).toBe(false);
  });

  test('clears click handlers on destroy', () => {
    registerAction('script-1', 'x', 'X', true);
    const h = mock(() => {});
    addClickHandler('script-1', 'x', h);
    destroyAction('script-1', 'x');
    // dispatchClick after destroy is a silent no-op
    dispatchClick('script-1', 'x');
    expect(h).toHaveBeenCalledTimes(0);
  });

  test('cross-script destroy attempt returns false (ownership guard)', () => {
    registerAction('script-A', 'x', 'X', true);
    expect(destroyAction('script-B', 'x')).toBe(false);
    expect(getAction('script-A', 'x')).toBeDefined();
  });
});

describe('clearByScript', () => {
  test('drops every entry owned by the script, leaves other scripts intact', () => {
    registerAction('script-A', 'one', '1', true);
    registerAction('script-A', 'two', '2', true);
    registerAction('script-B', 'three', '3', true);

    clearByScript('script-A');
    expect(countByScript('script-A')).toBe(0);
    expect(countByScript('script-B')).toBe(1);
    expect(getAction('script-B', 'three')).toBeDefined();
  });
});

describe('listByScript', () => {
  test('returns action IDs owned by the script in registration order', () => {
    registerAction('script-A', 'alpha', 'A', true);
    registerAction('script-A', 'beta', 'B', true);
    registerAction('script-B', 'gamma', 'G', true);
    expect(listByScript('script-A').sort()).toEqual(['alpha', 'beta']);
    expect(listByScript('script-B')).toEqual(['gamma']);
    expect(listByScript('script-C')).toEqual([]);
  });
});

// ─── listReplayMessages (frontend reconnect) ─────────────────────────────────

describe('listReplayMessages', () => {
  test('returns empty array when no actions are registered', () => {
    expect(listReplayMessages()).toEqual([]);
  });

  test('emits one ls_input_bar_action_register per live entry', () => {
    registerAction('s1', 'one', 'One', true, '<svg>one</svg>', undefined);
    registerAction('s1', 'two', 'Two', false, undefined, 'https://icon.png');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(2);

    const byAction = new Map(msgs.map(m => {
      if (m.type !== 'ls_input_bar_action_register') throw new Error('wrong type');
      return [m.actionId, m];
    }));

    const one = byAction.get('one')!;
    if (one.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(one.scriptId).toBe('s1');
    expect(one.options.label).toBe('One');
    expect(one.options.enabled).toBe(true);
    expect(one.options.iconSvg).toBe('<svg>one</svg>');
    expect(one.options.iconUrl).toBeUndefined();

    const two = byAction.get('two')!;
    if (two.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(two.options.label).toBe('Two');
    expect(two.options.enabled).toBe(false);
    expect(two.options.iconSvg).toBeUndefined();
    expect(two.options.iconUrl).toBe('https://icon.png');
  });

  test('folds post-register updateLabel into the register message', () => {
    registerAction('s1', 'x', 'Original', true);
    updateLabel('s1', 'x', 'Updated');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.options.label).toBe('Updated');
  });

  test('folds post-register updateEnabled into the register message', () => {
    registerAction('s1', 'x', 'X', true);
    updateEnabled('s1', 'x', false);

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.options.enabled).toBe(false);
  });

  test('destroyed actions are excluded from replay', () => {
    registerAction('s1', 'keep', 'K', true);
    registerAction('s1', 'drop', 'D', true);
    destroyAction('s1', 'drop');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.actionId).toBe('keep');
  });

  test('clearByScript prunes the script\'s entries from replay', () => {
    registerAction('s1', 'a', 'A', true);
    registerAction('s2', 'b', 'B', true);
    clearByScript('s1');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.scriptId).toBe('s2');
  });

  test('replay output is stable (idempotent between calls)', () => {
    registerAction('s1', 'x', 'X', true, '<svg/>');
    const first = listReplayMessages();
    const second = listReplayMessages();
    expect(second).toEqual(first);
  });

  test('multiple scripts\' actions all appear in replay', () => {
    registerAction('script-A', 'x', 'AX', true);
    registerAction('script-B', 'x', 'BX', true);
    registerAction('script-C', 'y', 'CY', false);
    expect(listReplayMessages()).toHaveLength(3);
  });
});

// ─── subtitle support ─────────────────────────────────────────────────────────

describe('subtitle', () => {
  test('registerAction stores subtitle when supplied', () => {
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'Last roll: 17');
    const entry = getAction('s1', 'x');
    expect(entry?.subtitle).toBe('Last roll: 17');
  });

  test('registerAction leaves subtitle undefined when not supplied', () => {
    registerAction('s1', 'x', 'X', true);
    const entry = getAction('s1', 'x');
    expect(entry?.subtitle).toBeUndefined();
  });

  test('updateSubtitle replaces the stored value', () => {
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'old');
    expect(updateSubtitle('s1', 'x', 'new')).toBe(true);
    expect(getAction('s1', 'x')?.subtitle).toBe('new');
  });

  test('updateSubtitle with undefined clears the stored value', () => {
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'set');
    expect(updateSubtitle('s1', 'x', undefined)).toBe(true);
    expect(getAction('s1', 'x')?.subtitle).toBeUndefined();
  });

  test('updateSubtitle returns false on unknown action (no-op)', () => {
    expect(updateSubtitle('s1', 'missing', 'x')).toBe(false);
  });

  test('updateSubtitle is ownership-scoped — different script can\'t mutate', () => {
    registerAction('script-A', 'x', 'X', true, undefined, undefined, 'A');
    expect(updateSubtitle('script-B', 'x', 'B')).toBe(false);
    expect(getAction('script-A', 'x')?.subtitle).toBe('A');
  });

  test('replace-on-re-register replaces subtitle alongside other fields', () => {
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'first');
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'second');
    expect(getAction('s1', 'x')?.subtitle).toBe('second');
  });

  test('replace-on-re-register without subtitle clears the prior value', () => {
    // Replace semantics build a fresh entry — a re-register that omits
    // subtitle should NOT keep the stale one (matches how iconSvg /
    // iconUrl are handled at the same layer).
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'first');
    registerAction('s1', 'x', 'X', true);
    expect(getAction('s1', 'x')?.subtitle).toBeUndefined();
  });

  test('listReplayMessages folds the current subtitle into the register message', () => {
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'set at register');
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.options.subtitle).toBe('set at register');
  });

  test('listReplayMessages folds post-register updateSubtitle into the register message', () => {
    registerAction('s1', 'x', 'X', true);
    updateSubtitle('s1', 'x', 'set later');
    const msgs = listReplayMessages();
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.options.subtitle).toBe('set later');
  });

  test('listReplayMessages emits subtitle as undefined when never set', () => {
    registerAction('s1', 'x', 'X', true);
    const msgs = listReplayMessages();
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.options.subtitle).toBeUndefined();
  });

  test('listReplayMessages folds a post-register clear into the register message', () => {
    // Subtitle set at register, then explicitly cleared via updateSubtitle —
    // replay should reflect the cleared state, not the original.
    registerAction('s1', 'x', 'X', true, undefined, undefined, 'will be cleared');
    updateSubtitle('s1', 'x', undefined);
    const msgs = listReplayMessages();
    const msg = msgs[0]!;
    if (msg.type !== 'ls_input_bar_action_register') throw new Error('unreachable');
    expect(msg.options.subtitle).toBeUndefined();
  });
});
