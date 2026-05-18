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
import {
  shouldPreventDefault,
  pickReadTarget,
  buildSerializedDOMElement,
} from '../src/dom-handler.js';

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

// ─── DOM read snapshot helpers (v1.0.0-rc.6) ──────────────────────────────────
//
// `pickReadTarget` and `buildSerializedDOMElement` back the frontend's
// `dom_read_request` handler. They run in the browser against live DOM
// in production, but the helpers themselves duck-type — element refs are
// only accessed via well-known property names. Mock elements built as
// plain objects (with explicit shapes for `attributes`, `children`,
// `firstElementChild`, `querySelector`, `tagName`, `textContent`,
// `innerHTML`) cover the unit-level surface without needing a real DOM.

interface MockAttr { name: string; value: string }

interface MockElement {
  tagName:     string;
  attributes:  Iterable<MockAttr>;
  children:    { length: number; [index: number]: MockElement | undefined };
  firstElementChild: MockElement | null;
  textContent: string | null;
  innerHTML:   string;
  querySelector?: (selector: string) => MockElement | null;
}

function mockEl(opts: {
  tag?:        string;
  attrs?:      Record<string, string>;
  children?:   MockElement[];
  textContent?: string;
  innerHTML?:  string;
  queryReturn?: MockElement | null;
}): MockElement {
  const attrs: MockAttr[] = Object.entries(opts.attrs ?? {}).map(([name, value]) => ({ name, value }));
  const children = opts.children ?? [];
  return {
    tagName:    (opts.tag ?? 'div').toUpperCase(),
    attributes: attrs,
    children: Object.assign([...children], { length: children.length }),
    firstElementChild: children[0] ?? null,
    textContent: opts.textContent ?? '',
    innerHTML:   opts.innerHTML ?? '',
    querySelector: opts.queryReturn !== undefined ? () => opts.queryReturn ?? null : undefined,
  };
}

describe('pickReadTarget — descent rule', () => {
  test('descends to user root when LS wrapper has exactly one element child', () => {
    // Structure: outer (spindle wrapper) → LS wrapper → single user root.
    const userRoot = mockEl({ tag: 'button', attrs: { class: 'my-btn' } });
    const lsWrapper = mockEl({
      tag:   'div',
      attrs: { 'data-ls-el': 'el-1', 'data-ls-script': 's-1' },
      children: [userRoot],
    });
    const outer = mockEl({ tag: 'div', queryReturn: lsWrapper });

    const target = pickReadTarget(outer as unknown as Element, 'el-1');
    expect(target).toBe(userRoot as unknown as Element);
  });

  test('falls back to LS wrapper when there are zero element children (text-only injection)', () => {
    // Structure: outer → LS wrapper (textContent only, no element children).
    const lsWrapper = mockEl({
      tag:   'div',
      attrs: { 'data-ls-el': 'el-1', 'data-ls-script': 's-1' },
      children: [],
      textContent: 'Hello world',
    });
    const outer = mockEl({ tag: 'div', queryReturn: lsWrapper });

    const target = pickReadTarget(outer as unknown as Element, 'el-1');
    expect(target).toBe(lsWrapper as unknown as Element);
  });

  test('falls back to LS wrapper when there are multiple element children (multi-root injection)', () => {
    // Structure: outer → LS wrapper → [span, span] (multi-root content).
    const child1 = mockEl({ tag: 'span' });
    const child2 = mockEl({ tag: 'span' });
    const lsWrapper = mockEl({
      tag:   'div',
      attrs: { 'data-ls-el': 'el-1', 'data-ls-script': 's-1' },
      children: [child1, child2],
    });
    const outer = mockEl({ tag: 'div', queryReturn: lsWrapper });

    const target = pickReadTarget(outer as unknown as Element, 'el-1');
    expect(target).toBe(lsWrapper as unknown as Element);
  });

  test('falls back to outer when querySelector returns null (defensive against unwrapped binds)', () => {
    // External-bound elements (modal bodies, drawer roots) might not have
    // the LS wrapper inside. pickReadTarget's `?? el` fallback handles this.
    const outer = mockEl({ tag: 'section', queryReturn: null });

    const target = pickReadTarget(outer as unknown as Element, 'el-1');
    expect(target).toBe(outer as unknown as Element);
  });
});

describe('buildSerializedDOMElement — snapshot shape', () => {
  test('basic snapshot: tag + attrs + text + childCount', () => {
    const el = mockEl({
      tag:   'button',
      attrs: { class: 'primary', id: 'btn-1', 'aria-label': 'Submit' },
      children: [mockEl({ tag: 'span' })],
      textContent: 'Submit',
    });
    const snap = buildSerializedDOMElement(el as unknown as Element, false);
    expect(snap).toEqual({
      tag:        'button',
      attrs:      { class: 'primary', id: 'btn-1', 'aria-label': 'Submit' },
      text:       'Submit',
      childCount: 1,
    });
    // No html field when includeHtml is false.
    expect(snap.html).toBeUndefined();
  });

  test('innerHTML included when includeHtml is true', () => {
    const el = mockEl({
      tag:       'div',
      attrs:     { class: 'wrap' },
      children:  [mockEl({ tag: 'p' })],
      innerHTML: '<p>Hello</p>',
    });
    const snap = buildSerializedDOMElement(el as unknown as Element, true);
    expect(snap.html).toBe('<p>Hello</p>');
  });

  test('attribute names are lowercased', () => {
    // HTML attributes are case-insensitive in lookups but `attributes`
    // reports source-case. The builder normalises to lowercase so
    // `attrs.class` always works regardless of how the script wrote it.
    const el = mockEl({
      tag: 'div',
      attrs: { 'CLASS': 'x', 'Data-Foo': 'bar', 'ARIA-LABEL': 'hi' },
    });
    const snap = buildSerializedDOMElement(el as unknown as Element, false);
    expect(snap.attrs).toEqual({
      class: 'x',
      'data-foo': 'bar',
      'aria-label': 'hi',
    });
  });

  test('strips internal wrapper attributes (data-ls-el, data-ls-script, data-spindle-ext)', () => {
    // Relevant when pickReadTarget falls through to the LS wrapper.
    // Exposing these would leak elementId values + the Spindle marker.
    const wrapper = mockEl({
      tag: 'div',
      attrs: {
        'data-ls-el':       'el-internal',
        'data-ls-script':   'script-internal',
        'data-spindle-ext': '',
        'class':            'visible-only',
        'data-user-attr':   'kept',
      },
    });
    const snap = buildSerializedDOMElement(wrapper as unknown as Element, false);
    expect(snap.attrs).toEqual({
      class:          'visible-only',
      'data-user-attr': 'kept',
    });
  });

  test('empty attrs map for an element with no attributes set', () => {
    const el = mockEl({ tag: 'p', attrs: {} });
    const snap = buildSerializedDOMElement(el as unknown as Element, false);
    expect(snap.attrs).toEqual({});
    expect(snap.tag).toBe('p');
  });

  test('handles null textContent gracefully (empty string fallback)', () => {
    // textContent CAN be null per the DOM spec on some node kinds;
    // builder coerces to '' for predictable script-side reads.
    const el = mockEl({ tag: 'div' });
    el.textContent = null;
    const snap = buildSerializedDOMElement(el as unknown as Element, false);
    expect(snap.text).toBe('');
  });
});
