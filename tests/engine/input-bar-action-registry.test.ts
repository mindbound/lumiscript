import { describe, test, expect, beforeEach, mock } from 'bun:test';
import {
  registerAction,
  hasAction,
  getAction,
  updateLabel,
  updateEnabled,
  addClickHandler,
  destroyAction,
  dispatchClick,
  countByScript,
  listByScript,
  clearByScript,
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
