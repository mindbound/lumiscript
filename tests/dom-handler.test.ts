/**
 * Unit tests for helpers in `src/dom-handler.ts`.
 *
 * Currently covers `shouldPreventDefault` (v0.27.5+) — the synchronous
 * predicate evaluator that gates `event.preventDefault()` on event-data
 * filters when a script passes the `ConditionalPreventDefault` shape via
 * `DOMDelegateOptions.preventDefault` or `DOMListenOptions.preventDefault`.
 *
 * The function uses `Partial<KeyboardEvent>` / `Partial<MouseEvent>` for
 * field access — it duck-types rather than `instanceof`-checks — so we
 * can test by passing plain objects cast to `Event`. No DOM environment
 * needed.
 */

import { describe, test, expect } from 'bun:test';
import { shouldPreventDefault } from '../src/dom-handler.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ev = (props: Record<string, any>) => props as unknown as Event;

describe('shouldPreventDefault — boolean rules', () => {
  test('undefined never prevents', () => {
    expect(shouldPreventDefault(undefined, ev({}))).toBe(false);
    expect(shouldPreventDefault(undefined, ev({ key: 'Enter' }))).toBe(false);
  });

  test('false never prevents', () => {
    expect(shouldPreventDefault(false, ev({}))).toBe(false);
    expect(shouldPreventDefault(false, ev({ key: 'Enter' }))).toBe(false);
  });

  test('true always prevents', () => {
    expect(shouldPreventDefault(true, ev({}))).toBe(true);
    expect(shouldPreventDefault(true, ev({ key: 'a' }))).toBe(true);
    expect(shouldPreventDefault(true, ev({ button: 0 }))).toBe(true);
  });
});

describe('shouldPreventDefault — empty conditional', () => {
  test('empty {} matches every event (equivalent to true)', () => {
    // No filters set → no constraint fails → match. Documents the
    // "always" semantics for users who reach for an empty config.
    expect(shouldPreventDefault({}, ev({}))).toBe(true);
    expect(shouldPreventDefault({}, ev({ key: 'a' }))).toBe(true);
    expect(shouldPreventDefault({}, ev({ button: 2 }))).toBe(true);
  });
});

describe('shouldPreventDefault — onKeys filter', () => {
  test('matches when event.key is in the array', () => {
    expect(shouldPreventDefault({ onKeys: ['Enter'] }, ev({ key: 'Enter' }))).toBe(true);
    expect(shouldPreventDefault({ onKeys: ['a', 'b', 'c'] }, ev({ key: 'b' }))).toBe(true);
  });

  test('does not match when event.key is not in the array', () => {
    expect(shouldPreventDefault({ onKeys: ['Enter'] }, ev({ key: 'Escape' }))).toBe(false);
    expect(shouldPreventDefault({ onKeys: ['a'] }, ev({ key: 'b' }))).toBe(false);
  });

  test('does not match when event has no key field (non-keyboard event)', () => {
    // The function explicitly opts out for non-keyboard events when
    // a keyboard-specific filter is requested. Otherwise mouse-only
    // delegations with conditional keyboard filters could leak through.
    expect(shouldPreventDefault({ onKeys: ['Enter'] }, ev({ button: 0 }))).toBe(false);
    expect(shouldPreventDefault({ onKeys: ['Enter'] }, ev({}))).toBe(false);
  });
});

describe('shouldPreventDefault — onCodes filter', () => {
  test('matches when event.code is in the array', () => {
    expect(shouldPreventDefault({ onCodes: ['KeyW'] }, ev({ code: 'KeyW' }))).toBe(true);
  });

  test('does not match when event.code is not in the array', () => {
    expect(shouldPreventDefault({ onCodes: ['KeyW'] }, ev({ code: 'KeyA' }))).toBe(false);
  });

  test('layout-independent — code differs from key under layouts/modifiers', () => {
    // The physical-key bind matches regardless of what character the
    // layout produces. Documents the "code vs key" distinction.
    expect(shouldPreventDefault({ onCodes: ['KeyA'] }, ev({ key: 'A', code: 'KeyA' }))).toBe(true);
    expect(shouldPreventDefault({ onKeys:  ['A'] },    ev({ key: 'A', code: 'KeyA' }))).toBe(true);
    expect(shouldPreventDefault({ onCodes: ['KeyA'] }, ev({ key: 'a', code: 'KeyA' }))).toBe(true);
    expect(shouldPreventDefault({ onKeys:  ['A'] },    ev({ key: 'a', code: 'KeyA' }))).toBe(false);
  });
});

describe('shouldPreventDefault — onButtons filter', () => {
  test('matches when event.button is in the array', () => {
    expect(shouldPreventDefault({ onButtons: [2] }, ev({ button: 2 }))).toBe(true);
    expect(shouldPreventDefault({ onButtons: [0, 1, 2] }, ev({ button: 1 }))).toBe(true);
  });

  test('does not match when event.button is not in the array', () => {
    expect(shouldPreventDefault({ onButtons: [2] }, ev({ button: 0 }))).toBe(false);
  });

  test('does not match when event has no button field (non-mouse event)', () => {
    expect(shouldPreventDefault({ onButtons: [2] }, ev({ key: 'Enter' }))).toBe(false);
    expect(shouldPreventDefault({ onButtons: [2] }, ev({}))).toBe(false);
  });
});

describe('shouldPreventDefault — whenModifiers.require', () => {
  test('matches when ALL required modifiers are held', () => {
    expect(shouldPreventDefault(
      { whenModifiers: { require: ['ctrl'] } },
      ev({ ctrlKey: true }),
    )).toBe(true);
    expect(shouldPreventDefault(
      { whenModifiers: { require: ['ctrl', 'shift'] } },
      ev({ ctrlKey: true, shiftKey: true }),
    )).toBe(true);
  });

  test('does not match when any required modifier is missing', () => {
    expect(shouldPreventDefault(
      { whenModifiers: { require: ['ctrl'] } },
      ev({ ctrlKey: false }),
    )).toBe(false);
    expect(shouldPreventDefault(
      { whenModifiers: { require: ['ctrl', 'shift'] } },
      ev({ ctrlKey: true, shiftKey: false }),
    )).toBe(false);
    expect(shouldPreventDefault(
      { whenModifiers: { require: ['ctrl'] } },
      ev({}),
    )).toBe(false);
  });
});

describe('shouldPreventDefault — whenModifiers.exclude', () => {
  test('matches when NONE of excluded modifiers are held', () => {
    expect(shouldPreventDefault(
      { whenModifiers: { exclude: ['shift'] } },
      ev({ shiftKey: false }),
    )).toBe(true);
    expect(shouldPreventDefault(
      { whenModifiers: { exclude: ['shift'] } },
      ev({}),
    )).toBe(true);
  });

  test('does not match when any excluded modifier is held', () => {
    expect(shouldPreventDefault(
      { whenModifiers: { exclude: ['shift'] } },
      ev({ shiftKey: true }),
    )).toBe(false);
    expect(shouldPreventDefault(
      { whenModifiers: { exclude: ['ctrl', 'alt'] } },
      ev({ altKey: true }),
    )).toBe(false);
  });
});

describe('shouldPreventDefault — combined filters (AND semantics)', () => {
  test('clickable-inputs case: plain Enter (no shift) on text input', () => {
    // The motivating use case for v0.27.5. Suppresses native newline on
    // Enter in a textarea while letting Shift+Enter pass through.
    const rule = {
      onKeys: ['Enter'],
      whenModifiers: { exclude: ['shift'] as Array<'shift' | 'ctrl' | 'alt' | 'meta'> },
    };
    expect(shouldPreventDefault(rule, ev({ key: 'Enter', shiftKey: false }))).toBe(true);
    expect(shouldPreventDefault(rule, ev({ key: 'Enter', shiftKey: true  }))).toBe(false);
    expect(shouldPreventDefault(rule, ev({ key: 'a',     shiftKey: false }))).toBe(false);
    expect(shouldPreventDefault(rule, ev({ key: 'a',     shiftKey: true  }))).toBe(false);
  });

  test('Ctrl+S override case: suppress browser Save dialog', () => {
    const rule = {
      onKeys: ['s', 'S'],
      whenModifiers: { require: ['ctrl'] as Array<'shift' | 'ctrl' | 'alt' | 'meta'> },
    };
    expect(shouldPreventDefault(rule, ev({ key: 's', ctrlKey: true  }))).toBe(true);
    expect(shouldPreventDefault(rule, ev({ key: 'S', ctrlKey: true  }))).toBe(true);
    expect(shouldPreventDefault(rule, ev({ key: 's', ctrlKey: false }))).toBe(false);
    expect(shouldPreventDefault(rule, ev({ key: 'a', ctrlKey: true  }))).toBe(false);
  });

  test('right-click only case', () => {
    const rule = { onButtons: [2] };
    expect(shouldPreventDefault(rule, ev({ button: 2 }))).toBe(true);
    expect(shouldPreventDefault(rule, ev({ button: 0 }))).toBe(false);
  });

  test('require + exclude combined (Ctrl held, Shift not held)', () => {
    const rule = {
      whenModifiers: {
        require: ['ctrl'] as Array<'shift' | 'ctrl' | 'alt' | 'meta'>,
        exclude: ['shift'] as Array<'shift' | 'ctrl' | 'alt' | 'meta'>,
      },
    };
    expect(shouldPreventDefault(rule, ev({ ctrlKey: true,  shiftKey: false }))).toBe(true);
    expect(shouldPreventDefault(rule, ev({ ctrlKey: true,  shiftKey: true  }))).toBe(false);
    expect(shouldPreventDefault(rule, ev({ ctrlKey: false, shiftKey: false }))).toBe(false);
  });
});
