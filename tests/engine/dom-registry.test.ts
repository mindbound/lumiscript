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
  updateElementHtml,
  setDraggable,
  collectDescendantIds,
  listStyleReplayMessages,
  listElementInjectMessages,
  listShellUpdateMessages,
  listListenerReplayMessages,
  listDraggableReplayMessages,
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

  test('does NOT cascade on its own — caller must use collectDescendantIds', () => {
    // Contract test: unregisterElement is a leaf operation. The cascade
    // lives in the API layer (DOMHandle.remove) so callers that want a
    // single-element unregister (e.g. destroyed-element cleanup from a
    // different code path) aren't forced into cascade semantics.
    registerElement('parent', 'script1');
    registerElement('child',  'script1', undefined, {
      kind: 'selector', target: '[x]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'parent',
    });

    unregisterElement('parent');
    expect(getElement('parent')).toBeUndefined();
    expect(getElement('child')).toBeDefined();  // child NOT auto-removed here
  });
});

// ─── collectDescendantIds ───────────────────────────────────────────────────

describe('collectDescendantIds', () => {
  test('returns [] for a leaf element (no children)', () => {
    registerElement('leaf', 'script1');
    expect(collectDescendantIds('leaf')).toEqual([]);
  });

  test('returns direct children (one level)', () => {
    registerElement('parent', 'script1');
    registerElement('c1', 'script1', undefined, {
      kind: 'selector', target: '[a]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'parent',
    });
    registerElement('c2', 'script1', undefined, {
      kind: 'selector', target: '[b]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'parent',
    });
    const ids = collectDescendantIds('parent').sort();
    expect(ids).toEqual(['c1', 'c2']);
  });

  test('traverses nested descendants (grandchildren)', () => {
    registerElement('root', 'script1');
    registerElement('child', 'script1', undefined, {
      kind: 'selector', target: '[a]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'root',
    });
    registerElement('grandchild', 'script1', undefined, {
      kind: 'selector', target: '[b]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'child',
    });
    registerElement('ggrandchild', 'script1', undefined, {
      kind: 'selector', target: '[c]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'grandchild',
    });
    const ids = collectDescendantIds('root').sort();
    expect(ids).toEqual(['child', 'ggrandchild', 'grandchild']);
  });

  test('returns [] for an unknown parent id', () => {
    expect(collectDescendantIds('nonexistent')).toEqual([]);
  });

  test('excludes unrelated siblings (scoped to descendant tree)', () => {
    registerElement('a', 'script1');
    registerElement('b', 'script1');
    registerElement('a-child', 'script1', undefined, {
      kind: 'selector', target: '[x]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'a',
    });
    registerElement('b-child', 'script1', undefined, {
      kind: 'selector', target: '[y]', position: 'beforeend',
      initialHtml: '<i/>', parentElementId: 'b',
    });
    expect(collectDescendantIds('a')).toEqual(['a-child']);
    expect(collectDescendantIds('b')).toEqual(['b-child']);
  });

  test('handles self-loop defensively (never-terminates guard)', () => {
    // Synthetic state that shouldn't arise from the API but the
    // iterator should still terminate — proves the `seen` guard works.
    registerElement('self', 'script1');
    // Manually point an entry at itself to simulate a cycle.
    const entry = getElement('self')!;
    entry.parentElementId = 'self';
    expect(collectDescendantIds('self')).toEqual([]);  // itself isn't a descendant of itself
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

// ─── updateElementHtml / setDraggable — new helpers ─────────────────────────

describe('updateElementHtml', () => {
  test('updates lastHtml on a selector-kind element', () => {
    registerElement('e1', 's1', undefined, {
      kind: 'selector', target: '#root', position: 'beforeend', initialHtml: '<div/>',
    });
    expect(getElement('e1')!.lastHtml).toBe('<div/>');
    updateElementHtml('e1', '<span>new</span>');
    expect(getElement('e1')!.lastHtml).toBe('<span>new</span>');
  });

  test('updates lastHtml on a shell element (starts undefined)', () => {
    registerElement('e1', 's1');
    expect(getElement('e1')!.lastHtml).toBeUndefined();
    updateElementHtml('e1', '<p>content</p>');
    expect(getElement('e1')!.lastHtml).toBe('<p>content</p>');
  });

  test('no-ops on unknown element', () => {
    expect(() => updateElementHtml('ghost', '<x/>')).not.toThrow();
  });
});

describe('setDraggable', () => {
  test('flags element as draggable, stores handle selector', () => {
    registerElement('e1', 's1');
    setDraggable('e1', '.titlebar');
    const entry = getElement('e1')!;
    expect(entry.draggable).toBe(true);
    expect(entry.draggableHandleSelector).toBe('.titlebar');
  });

  test('handle selector is optional', () => {
    registerElement('e1', 's1');
    setDraggable('e1');
    expect(getElement('e1')!.draggable).toBe(true);
    expect(getElement('e1')!.draggableHandleSelector).toBeUndefined();
  });
});

// ─── listStyleReplayMessages ─────────────────────────────────────────────────

describe('listStyleReplayMessages', () => {
  test('empty registry returns []', () => {
    expect(listStyleReplayMessages()).toEqual([]);
  });

  test('emits one dom_add_style per style with cached css', () => {
    registerStyle('s1', 'script1', '.a { color: red }');
    registerStyle('s2', 'script1', '.b { color: blue }');
    const msgs = listStyleReplayMessages();
    expect(msgs).toHaveLength(2);

    for (const m of msgs) {
      if (m.type !== 'dom_add_style') throw new Error('unreachable');
      expect(m.scriptId).toBe('script1');
      expect(['.a { color: red }', '.b { color: blue }']).toContain(m.css);
    }
  });

  test('styles without cached css are skipped (legacy entries)', () => {
    registerStyle('s1', 'script1'); // no css — legacy
    registerStyle('s2', 'script1', '.b { }');
    const msgs = listStyleReplayMessages();
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    if (m.type !== 'dom_add_style') throw new Error('unreachable');
    expect(m.styleId).toBe('s2');
  });

  test('unregistered styles disappear from replay', () => {
    registerStyle('s1', 'script1', '.a {}');
    unregisterStyle('s1');
    expect(listStyleReplayMessages()).toEqual([]);
  });
});

// ─── listElementInjectMessages ───────────────────────────────────────────────

describe('listElementInjectMessages', () => {
  test('empty registry returns []', () => {
    expect(listElementInjectMessages()).toEqual([]);
  });

  test('emits dom_inject for selector-kind elements using lastHtml', () => {
    registerElement('e1', 'script1', 'stable-a', {
      kind: 'selector', target: '#root', position: 'beforeend', initialHtml: '<div>initial</div>',
    });
    updateElementHtml('e1', '<div>updated</div>');

    const msgs = listElementInjectMessages();
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    if (m.type !== 'dom_inject') throw new Error('unreachable');
    expect(m.scriptId).toBe('script1');
    expect(m.elementId).toBe('e1');
    expect(m.target).toBe('#root');
    expect(m.html).toBe('<div>updated</div>');
    expect(m.position).toBe('beforeend');
    expect(m.stableId).toBe('stable-a');
  });

  test('emits dom_inject_at_message for message-kind elements', () => {
    registerElement('e1', 'script1', undefined, {
      kind: 'message', messageId: 'msg-uuid', messagePosition: 'footer', initialHtml: '<p>hi</p>',
    });

    const msgs = listElementInjectMessages();
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    if (m.type !== 'dom_inject_at_message') throw new Error('unreachable');
    expect(m.messageId).toBe('msg-uuid');
    expect(m.position).toBe('footer');
    expect(m.html).toBe('<p>hi</p>');
  });

  test('shell-kind elements are excluded from inject replay', () => {
    registerElement('shell1', 'script1'); // default kind 'shell'
    registerElement('e1', 'script1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend', initialHtml: '<div/>',
    });

    const msgs = listElementInjectMessages();
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    if (m.type !== 'dom_inject') throw new Error('unreachable');
    expect(m.elementId).toBe('e1');
  });

  test('elements without lastHtml are skipped', () => {
    // This models a pathological state — selector element registered but
    // never sent HTML. Shouldn't happen in practice, but guards against
    // emitting a broken dom_inject with undefined html.
    registerElement('e1', 'script1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend',
    });
    expect(listElementInjectMessages()).toEqual([]);
  });

  test('injectChild-registered entries carry parentElementId on replay', () => {
    // Shell parent (drawer tab body, modal root, etc.)
    registerElement('shell1', 'script1');
    // Child injected via injectChild — tracks parentElementId so the
    // frontend can re-scope the selector lookup on reconnect.
    registerElement('child1', 'script1', undefined, {
      kind: 'selector',
      target: '[data-grid]',
      position: 'beforeend',
      initialHtml: '<div class="grid">…</div>',
      parentElementId: 'shell1',
    });

    const msgs = listElementInjectMessages();
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    if (m.type !== 'dom_inject') throw new Error('unreachable');
    expect(m.elementId).toBe('child1');
    expect(m.parentElementId).toBe('shell1');
    expect(m.target).toBe('[data-grid]');
  });

  test('document-scoped inject entries have undefined parentElementId on replay', () => {
    registerElement('e1', 'script1', undefined, {
      kind: 'selector', target: '#root', position: 'beforeend', initialHtml: '<div/>',
    });
    const msgs = listElementInjectMessages();
    const m = msgs[0]!;
    if (m.type !== 'dom_inject') throw new Error('unreachable');
    expect(m.parentElementId).toBeUndefined();
  });
});

// ─── listShellUpdateMessages ─────────────────────────────────────────────────

describe('listShellUpdateMessages', () => {
  test('empty registry returns []', () => {
    expect(listShellUpdateMessages()).toEqual([]);
  });

  test('emits dom_update for shell elements with lastHtml', () => {
    registerElement('shell1', 'script1'); // default kind 'shell'
    updateElementHtml('shell1', '<div>tab body</div>');

    const msgs = listShellUpdateMessages();
    expect(msgs).toHaveLength(1);
    const m = msgs[0]!;
    if (m.type !== 'dom_update') throw new Error('unreachable');
    expect(m.elementId).toBe('shell1');
    expect(m.html).toBe('<div>tab body</div>');
  });

  test('shells without lastHtml are skipped (never content-pushed)', () => {
    registerElement('shell1', 'script1');
    // no updateElementHtml
    expect(listShellUpdateMessages()).toEqual([]);
  });

  test('non-shell elements are excluded from shell-update replay', () => {
    registerElement('e1', 'script1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend', initialHtml: '<div/>',
    });
    expect(listShellUpdateMessages()).toEqual([]);
  });
});

// ─── listListenerReplayMessages ──────────────────────────────────────────────

describe('listListenerReplayMessages', () => {
  test('empty registry returns []', () => {
    expect(listListenerReplayMessages()).toEqual([]);
  });

  test('emits dom_listen per (elementId, listenerId) pair', () => {
    registerElement('e1', 'script1');
    registerElement('e2', 'script1');
    addListener('e1', 'l1', 'click', () => {});
    addListener('e1', 'l2', 'input', () => {});
    addListener('e2', 'l3', 'click', () => {});

    const msgs = listListenerReplayMessages();
    expect(msgs).toHaveLength(3);

    const keys = msgs.map(m => {
      if (m.type !== 'dom_listen') throw new Error('unreachable');
      return `${m.elementId}:${m.listenerId}:${m.event}`;
    }).sort();
    expect(keys).toEqual([
      'e1:l1:click',
      'e1:l2:input',
      'e2:l3:click',
    ]);
  });

  test('cleared listeners do not appear in replay', () => {
    registerElement('e1', 'script1');
    addListener('e1', 'l1', 'click', () => {});
    clearListeners('e1');
    expect(listListenerReplayMessages()).toEqual([]);
  });
});

// ─── listDraggableReplayMessages ─────────────────────────────────────────────

describe('listDraggableReplayMessages', () => {
  test('empty registry returns []', () => {
    expect(listDraggableReplayMessages()).toEqual([]);
  });

  test('emits dom_make_draggable for each flagged element', () => {
    registerElement('e1', 'script1');
    registerElement('e2', 'script1');
    setDraggable('e1', '.handle');
    setDraggable('e2');  // no handle selector

    const msgs = listDraggableReplayMessages();
    expect(msgs).toHaveLength(2);

    const byElement = new Map(msgs.map(m => {
      if (m.type !== 'dom_make_draggable') throw new Error('unreachable');
      return [m.elementId, m];
    }));

    const e1 = byElement.get('e1')!;
    if (e1.type !== 'dom_make_draggable') throw new Error('unreachable');
    expect(e1.handleSelector).toBe('.handle');

    const e2 = byElement.get('e2')!;
    if (e2.type !== 'dom_make_draggable') throw new Error('unreachable');
    expect(e2.handleSelector).toBeUndefined();
  });

  test('non-draggable elements are excluded', () => {
    registerElement('e1', 'script1');
    // never called setDraggable
    expect(listDraggableReplayMessages()).toEqual([]);
  });
});
