import { describe, test, expect, beforeEach } from 'bun:test';
import {
  registerElement,
  resolveStableId,
  unregisterElement,
  getElement,
  addListener,
  removeListener,
  clearListeners,
  dispatchEvent,
  registerStyle,
  unregisterStyle,
  cleanupScript,
  __reset,
} from '../../src/engine/dom-registry.js';

beforeEach(() => {
  __reset();
});

// ─── registerElement / getElement ────────────────────────────────────────────

describe('registerElement', () => {
  test('registers and retrieves an element', () => {
    registerElement('e1', 'script1');
    const entry = getElement('e1');
    expect(entry).toBeDefined();
    expect(entry!.elementId).toBe('e1');
    expect(entry!.scriptId).toBe('script1');
    expect(entry!.listeners.size).toBe(0);
  });

  test('registers with a stable ID', () => {
    registerElement('e1', 'script1', 'widget');
    const entry = getElement('e1');
    expect(entry!.stableId).toBe('widget');
  });

  test('returns undefined for unknown element', () => {
    expect(getElement('nonexistent')).toBeUndefined();
  });
});

// ─── resolveStableId ─────────────────────────────────────────────────────────

describe('resolveStableId', () => {
  test('resolves an existing stable ID', () => {
    registerElement('e1', 'script1', 'widget');
    expect(resolveStableId('script1', 'widget')).toBe('e1');
  });

  test('returns undefined for unknown stable ID', () => {
    expect(resolveStableId('script1', 'widget')).toBeUndefined();
  });

  test('stable IDs are scoped per-script', () => {
    registerElement('e1', 'script1', 'widget');
    registerElement('e2', 'script2', 'widget');
    expect(resolveStableId('script1', 'widget')).toBe('e1');
    expect(resolveStableId('script2', 'widget')).toBe('e2');
  });
});

// ─── unregisterElement ───────────────────────────────────────────────────────

describe('unregisterElement', () => {
  test('removes element from registry', () => {
    registerElement('e1', 'script1');
    unregisterElement('e1');
    expect(getElement('e1')).toBeUndefined();
  });

  test('clears stable ID index on unregister', () => {
    registerElement('e1', 'script1', 'widget');
    unregisterElement('e1');
    expect(resolveStableId('script1', 'widget')).toBeUndefined();
  });

  test('no-ops on unknown element', () => {
    expect(() => unregisterElement('nonexistent')).not.toThrow();
  });
});

// ─── addListener / removeListener ────────────────────────────────────────────

describe('listeners', () => {
  test('adds a listener to an element', () => {
    registerElement('e1', 'script1');
    addListener('e1', 'l1', 'click', () => {});
    const entry = getElement('e1');
    expect(entry!.listeners.size).toBe(1);
    expect(entry!.listeners.has('l1')).toBe(true);
  });

  test('removes a specific listener', () => {
    registerElement('e1', 'script1');
    addListener('e1', 'l1', 'click', () => {});
    addListener('e1', 'l2', 'input', () => {});
    removeListener('e1', 'l1');
    const entry = getElement('e1');
    expect(entry!.listeners.size).toBe(1);
    expect(entry!.listeners.has('l2')).toBe(true);
  });

  test('no-ops when adding to unknown element', () => {
    expect(() => addListener('nonexistent', 'l1', 'click', () => {})).not.toThrow();
  });

  test('no-ops when removing from unknown element', () => {
    expect(() => removeListener('nonexistent', 'l1')).not.toThrow();
  });
});

// ─── clearListeners ──────────────────────────────────────────────────────────

describe('clearListeners', () => {
  test('clears all listeners and returns their metadata', () => {
    registerElement('e1', 'script1');
    addListener('e1', 'l1', 'click', () => {});
    addListener('e1', 'l2', 'input', () => {});

    const cleared = clearListeners('e1');
    expect(cleared).toHaveLength(2);
    expect(cleared.map(c => c.listenerId).sort()).toEqual(['l1', 'l2']);
    expect(getElement('e1')!.listeners.size).toBe(0);
  });

  test('returns empty array for unknown element', () => {
    expect(clearListeners('nonexistent')).toEqual([]);
  });
});

// ─── dispatchEvent ───────────────────────────────────────────────────────────

describe('dispatchEvent', () => {
  test('invokes the correct handler with event data', () => {
    registerElement('e1', 'script1');
    let received: unknown = null;
    addListener('e1', 'l1', 'click', (data) => { received = data; });

    const eventData = { type: 'click', targetId: 'btn1' };
    dispatchEvent('l1', eventData);
    expect(received).toEqual(eventData);
  });

  test('does not throw if listener ID is unknown', () => {
    expect(() => dispatchEvent('nonexistent', { type: 'click' })).not.toThrow();
  });

  test('swallows errors from user callbacks', () => {
    registerElement('e1', 'script1');
    addListener('e1', 'l1', 'click', () => { throw new Error('boom'); });
    expect(() => dispatchEvent('l1', { type: 'click' })).not.toThrow();
  });

  test('dispatches to the correct listener among multiple elements', () => {
    registerElement('e1', 'script1');
    registerElement('e2', 'script1');
    let called1 = false, called2 = false;
    addListener('e1', 'l1', 'click', () => { called1 = true; });
    addListener('e2', 'l2', 'click', () => { called2 = true; });

    dispatchEvent('l2', { type: 'click' });
    expect(called1).toBe(false);
    expect(called2).toBe(true);
  });
});

// ─── styles ──────────────────────────────────────────────────────────────────

describe('styles', () => {
  test('registers and unregisters a style', () => {
    registerStyle('s1', 'script1');
    // No getter API — tested via cleanupScript
    unregisterStyle('s1');
    // After unregister, cleanup should not find it
    const result = cleanupScript('script1');
    expect(result.styleIds).toEqual([]);
  });
});

// ─── cleanupScript ───────────────────────────────────────────────────────────

describe('cleanupScript', () => {
  test('removes all elements and styles for a script', () => {
    registerElement('e1', 'script1', 'w1');
    registerElement('e2', 'script1');
    registerElement('e3', 'script2');
    registerStyle('s1', 'script1');
    registerStyle('s2', 'script2');

    const result = cleanupScript('script1');
    expect(result.elementIds.sort()).toEqual(['e1', 'e2']);
    expect(result.styleIds).toEqual(['s1']);

    // script1 elements gone
    expect(getElement('e1')).toBeUndefined();
    expect(getElement('e2')).toBeUndefined();
    expect(resolveStableId('script1', 'w1')).toBeUndefined();

    // script2 untouched
    expect(getElement('e3')).toBeDefined();
  });

  test('returns empty arrays when script has no DOM state', () => {
    const result = cleanupScript('nonexistent');
    expect(result.elementIds).toEqual([]);
    expect(result.styleIds).toEqual([]);
  });
});
