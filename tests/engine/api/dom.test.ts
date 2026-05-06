import { describe, test, expect, beforeEach } from 'bun:test';
import type { DOMEventData } from '../../../src/types/script.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { buildDOMAPI } from '../../../src/engine/api/dom.js';
import {
  getElement,
  resolveStableId,
  getDelegation,
  __reset as resetDOMRegistry,
} from '../../../src/engine/dom-registry.js';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Retrieve all calls to spindle.sendToFrontend from the preload mock. */
function sentMessages(): unknown[] {
  return ((globalThis as any).spindle.sendToFrontend as any).mock.calls.map(
    (call: unknown[]) => call[0],
  );
}

/** Filter sent messages by type. */
function messagesOfType(type: string): any[] {
  return sentMessages().filter((m: any) => m.type === type);
}

// ─── Permission gate ────────────────────────────────────────────────────────

describe('permission gate', () => {
  test('inject throws without app_manipulation', () => {
    const dom = buildDOMAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => dom.inject('#target', '<p>hi</p>')).toThrow('PERMISSION_DENIED');
  });

  test('addStyle throws without app_manipulation', () => {
    const dom = buildDOMAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => dom.addStyle('.foo {}')).toThrow('PERMISSION_DENIED');
  });

  test('cleanup throws without app_manipulation', () => {
    const dom = buildDOMAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => dom.cleanup()).toThrow('PERMISSION_DENIED');
  });
});

// ─── inject ─────────────────────────────────────────────────────────────────

describe('inject', () => {
  test('sends dom_inject message and returns handle', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.inject('#chat', '<p>Hello</p>');

    expect(handle.id).toBeTruthy();
    const msgs = messagesOfType('dom_inject');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].scriptId).toBe('test-script-id');
    expect(msgs[0].target).toBe('#chat');
    expect(msgs[0].html).toBe('<p>Hello</p>');
    expect(msgs[0].position).toBe('beforeend');
  });

  test('respects position option', () => {
    const dom = buildDOMAPI(createTestDeps());
    dom.inject('#chat', '<p>Hi</p>', { position: 'afterbegin' });
    expect(messagesOfType('dom_inject')[0].position).toBe('afterbegin');
  });

  test('registers element in registry', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.inject('#chat', '<p>Hi</p>');
    expect(getElement(handle.id)).toBeDefined();
  });

  test('stable ID: first call creates, second call updates', () => {
    const dom = buildDOMAPI(createTestDeps());

    const h1 = dom.inject('#chat', '<p>V1</p>', { id: 'widget' });
    const injectMsgs = messagesOfType('dom_inject');
    expect(injectMsgs).toHaveLength(1);

    const h2 = dom.inject('#chat', '<p>V2</p>', { id: 'widget' });

    // Second call should update, not create a new inject
    expect(h2.id).toBe(h1.id);
    const updateMsgs = messagesOfType('dom_update');
    expect(updateMsgs).toHaveLength(1);
    expect(updateMsgs[0].html).toBe('<p>V2</p>');
  });

  test('stable ID update clears old listeners', () => {
    const dom = buildDOMAPI(createTestDeps());

    const h1 = dom.inject('#chat', '<p>V1</p>', { id: 'widget' });
    h1.on('click', () => {});
    expect(getElement(h1.id)!.listeners.size).toBe(1);

    dom.inject('#chat', '<p>V2</p>', { id: 'widget' });

    // Old listener should be cleared
    expect(getElement(h1.id)!.listeners.size).toBe(0);
    // Unlisten message sent to frontend
    const unlistenMsgs = messagesOfType('dom_unlisten');
    expect(unlistenMsgs.length).toBeGreaterThanOrEqual(1);
  });
});

// ─── handle.update ──────────────────────────────────────────────────────────

describe('handle.update', () => {
  test('sends dom_update message', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.inject('#chat', '<p>Old</p>');

    handle.update('<p>New</p>');
    const msgs = messagesOfType('dom_update');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].elementId).toBe(handle.id);
    expect(msgs[0].html).toBe('<p>New</p>');
  });
});

// ─── handle.remove ──────────────────────────────────────────────────────────

describe('handle.remove', () => {
  test('sends dom_remove message and unregisters', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.inject('#chat', '<p>Hi</p>');

    handle.remove();
    const msgs = messagesOfType('dom_remove');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].elementId).toBe(handle.id);
    expect(getElement(handle.id)).toBeUndefined();
  });
});

// ─── handle.on ──────────────────────────────────────────────────────────────

describe('handle.on', () => {
  test('sends dom_listen message and registers callback', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.inject('#chat', '<p>Hi</p>');

    const handler = () => {};
    const unsub = handle.on('click', handler);

    const msgs = messagesOfType('dom_listen');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].elementId).toBe(handle.id);
    expect(msgs[0].event).toBe('click');
    expect(typeof msgs[0].listenerId).toBe('string');

    expect(getElement(handle.id)!.listeners.size).toBe(1);
    expect(typeof unsub).toBe('function');
  });

  test('unsubscribe sends dom_unlisten and removes from registry', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.inject('#chat', '<p>Hi</p>');
    const unsub = handle.on('click', () => {});

    unsub();
    const msgs = messagesOfType('dom_unlisten');
    expect(msgs).toHaveLength(1);
    expect(getElement(handle.id)!.listeners.size).toBe(0);
  });
});

// ─── injectAtMessage ───────────────────────────────────────────────────────

describe('injectAtMessage', () => {
  test('sends dom_inject_at_message message and returns handle', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.injectAtMessage('msg-123', '<p>Footer</p>');

    expect(handle.id).toBeTruthy();
    const msgs = messagesOfType('dom_inject_at_message');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].scriptId).toBe('test-script-id');
    expect(msgs[0].messageId).toBe('msg-123');
    expect(msgs[0].html).toBe('<p>Footer</p>');
    expect(msgs[0].position).toBe('footer');
  });

  test('respects position option', () => {
    const dom = buildDOMAPI(createTestDeps());
    dom.injectAtMessage('msg-123', '<p>Header</p>', { position: 'header' });
    expect(messagesOfType('dom_inject_at_message')[0].position).toBe('header');
  });

  test('registers element in registry', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.injectAtMessage('msg-123', '<p>Hi</p>');
    expect(getElement(handle.id)).toBeDefined();
  });

  test('stable ID: first call creates, second call updates', () => {
    const dom = buildDOMAPI(createTestDeps());

    const h1 = dom.injectAtMessage('msg-123', '<p>V1</p>', { id: 'msg-widget' });
    const injectMsgs = messagesOfType('dom_inject_at_message');
    expect(injectMsgs).toHaveLength(1);

    const h2 = dom.injectAtMessage('msg-123', '<p>V2</p>', { id: 'msg-widget' });

    // Second call should update, not create a new inject
    expect(h2.id).toBe(h1.id);
    const updateMsgs = messagesOfType('dom_update');
    expect(updateMsgs).toHaveLength(1);
    expect(updateMsgs[0].html).toBe('<p>V2</p>');
  });

  test('stable ID update clears old listeners', () => {
    const dom = buildDOMAPI(createTestDeps());

    const h1 = dom.injectAtMessage('msg-123', '<p>V1</p>', { id: 'msg-widget' });
    h1.on('click', () => {});
    expect(getElement(h1.id)!.listeners.size).toBe(1);

    dom.injectAtMessage('msg-123', '<p>V2</p>', { id: 'msg-widget' });

    expect(getElement(h1.id)!.listeners.size).toBe(0);
    const unlistenMsgs = messagesOfType('dom_unlisten');
    expect(unlistenMsgs.length).toBeGreaterThanOrEqual(1);
  });

  test('throws without app_manipulation', () => {
    const dom = buildDOMAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => dom.injectAtMessage('msg-123', '<p>hi</p>')).toThrow('PERMISSION_DENIED');
  });

  test('handle.update sends dom_update message', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.injectAtMessage('msg-123', '<p>Old</p>');

    handle.update('<p>New</p>');
    const msgs = messagesOfType('dom_update');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].elementId).toBe(handle.id);
    expect(msgs[0].html).toBe('<p>New</p>');
  });

  test('handle.remove sends dom_remove and unregisters', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handle = dom.injectAtMessage('msg-123', '<p>Hi</p>');

    handle.remove();
    const msgs = messagesOfType('dom_remove');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].elementId).toBe(handle.id);
    expect(getElement(handle.id)).toBeUndefined();
  });
});

// ─── addStyle ───────────────────────────────────────────────────────────────

describe('addStyle', () => {
  test('sends dom_add_style message', () => {
    const dom = buildDOMAPI(createTestDeps());
    const style = dom.addStyle('.foo { color: red; }');

    const msgs = messagesOfType('dom_add_style');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].scriptId).toBe('test-script-id');
    expect(msgs[0].css).toBe('.foo { color: red; }');
    expect(typeof msgs[0].styleId).toBe('string');
    expect(typeof style.remove).toBe('function');
  });

  test('remove() sends dom_remove_style message', () => {
    const dom = buildDOMAPI(createTestDeps());
    const style = dom.addStyle('.foo {}');

    style.remove();
    const msgs = messagesOfType('dom_remove_style');
    expect(msgs).toHaveLength(1);
  });

  // v0.26.x — replace-by-id. Repeated `addStyle(css, { id })` calls with
  // the same id (within a script) auto-remove the prior stylesheet before
  // injecting the new one. Lets user scripts edit-and-rerun styles
  // without manual `globalThis` flag bookkeeping or extension toggles.
  describe('opts.id replace-by-id semantics', () => {
    test('first call with id behaves like a normal addStyle', () => {
      const dom = buildDOMAPI(createTestDeps());
      dom.addStyle('.foo { color: red; }', { id: 'main' });

      const adds    = messagesOfType('dom_add_style');
      const removes = messagesOfType('dom_remove_style');
      expect(adds).toHaveLength(1);
      expect(adds[0].css).toBe('.foo { color: red; }');
      expect(removes).toHaveLength(0);
    });

    test('second call with same id removes the first then adds the second', () => {
      const dom = buildDOMAPI(createTestDeps());
      dom.addStyle('.foo { color: red; }',  { id: 'main' });
      dom.addStyle('.foo { color: blue; }', { id: 'main' });

      const adds    = messagesOfType('dom_add_style');
      const removes = messagesOfType('dom_remove_style');
      expect(adds).toHaveLength(2);
      expect(adds[0].css).toBe('.foo { color: red; }');
      expect(adds[1].css).toBe('.foo { color: blue; }');
      expect(removes).toHaveLength(1);
      // The remove targets the first style's id.
      expect(removes[0].styleId).toBe(adds[0].styleId);
    });

    test('different ids coexist independently', () => {
      const dom = buildDOMAPI(createTestDeps());
      dom.addStyle('.a {}', { id: 'main' });
      dom.addStyle('.b {}', { id: 'overlay' });
      dom.addStyle('.c {}', { id: 'main' });    // replaces .a only
      dom.addStyle('.d {}', { id: 'overlay' }); // replaces .b only

      const adds    = messagesOfType('dom_add_style');
      const removes = messagesOfType('dom_remove_style');
      expect(adds).toHaveLength(4);
      expect(adds.map((m) => m.css)).toEqual(['.a {}', '.b {}', '.c {}', '.d {}']);
      // Two removes — one for .a (when .c arrives), one for .b (when .d arrives).
      expect(removes).toHaveLength(2);
      expect(removes[0].styleId).toBe(adds[0].styleId);  // .a
      expect(removes[1].styleId).toBe(adds[1].styleId);  // .b
    });

    test('addStyle without id continues to accumulate (unchanged behaviour)', () => {
      const dom = buildDOMAPI(createTestDeps());
      dom.addStyle('.a {}');
      dom.addStyle('.b {}');
      dom.addStyle('.c {}');

      const adds    = messagesOfType('dom_add_style');
      const removes = messagesOfType('dom_remove_style');
      expect(adds).toHaveLength(3);
      expect(removes).toHaveLength(0);
    });

    test('handle.remove() on an id-tracked style still works', () => {
      const dom = buildDOMAPI(createTestDeps());
      const handle = dom.addStyle('.foo {}', { id: 'main' });
      handle.remove();

      const removes = messagesOfType('dom_remove_style');
      expect(removes).toHaveLength(1);

      // After explicit remove, the next addStyle({id:'main'}) has no prior to remove.
      dom.addStyle('.bar {}', { id: 'main' });
      const removesAfter = messagesOfType('dom_remove_style');
      expect(removesAfter).toHaveLength(1);  // unchanged — no second remove fired
    });

    test('id is scoped per scriptId — two scripts with same id do not collide', () => {
      const domA = buildDOMAPI(createTestDeps({ script: { id: 'script-A' } }));
      const domB = buildDOMAPI(createTestDeps({ script: { id: 'script-B' } }));

      domA.addStyle('.a {}', { id: 'shared' });
      domB.addStyle('.b {}', { id: 'shared' });
      // Each script has its own .shared registration; no cross-script removal.
      const removes = messagesOfType('dom_remove_style');
      expect(removes).toHaveLength(0);

      // Now re-add in script A — should remove A's prior, not B's.
      domA.addStyle('.a2 {}', { id: 'shared' });
      const adds         = messagesOfType('dom_add_style');
      const removesAfter = messagesOfType('dom_remove_style');
      expect(adds).toHaveLength(3);
      expect(removesAfter).toHaveLength(1);
      // The remove targets script-A's first style.
      expect(removesAfter[0].styleId).toBe(adds[0].styleId);
    });
  });
});

// ─── cleanup ────────────────────────────────────────────────────────────────

describe('cleanup', () => {
  test('sends dom_cleanup_script message when state exists', () => {
    const dom = buildDOMAPI(createTestDeps());
    dom.inject('#chat', '<p>Hi</p>');
    dom.addStyle('.foo {}');

    dom.cleanup();
    const msgs = messagesOfType('dom_cleanup_script');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].scriptId).toBe('test-script-id');
  });

  test('does not send message when no state', () => {
    const dom = buildDOMAPI(createTestDeps());

    dom.cleanup();
    const msgs = messagesOfType('dom_cleanup_script');
    expect(msgs).toHaveLength(0);
  });

  test('clears all elements and styles from registry', () => {
    const dom = buildDOMAPI(createTestDeps());
    const h = dom.inject('#chat', '<p>Hi</p>', { id: 'widget' });
    dom.addStyle('.foo {}');

    dom.cleanup();
    expect(getElement(h.id)).toBeUndefined();
    expect(resolveStableId('test-script-id', 'widget')).toBeUndefined();
  });
});

// ─── delegate (v0.27.1) ──────────────────────────────────────────────────────
//
// `api.ui.dom.delegate(selector, event, handler, options?)` — capture-phase
// delegation for events on DOM the script didn't inject. See
// `notes/tracker-design-journal.md` for the design rationale; the path-4
// proposal section under the BlazeTracker exploration.

describe('delegate — permission gate', () => {
  test('throws without app_manipulation (default chat scope)', () => {
    const dom = buildDOMAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => dom.delegate('button', 'click', () => {})).toThrow('PERMISSION_DENIED');
  });

  test('throws without app_manipulation (document scope)', () => {
    const dom = buildDOMAPI(createTestDeps({ hasPerm: () => false }));
    expect(() =>
      dom.delegate('button', 'click', () => {}, { root: 'document' }),
    ).toThrow('PERMISSION_DENIED');
  });

  test('chat scope (default) works with app_manipulation', () => {
    const granted = new Set(['app_manipulation']);
    const dom = buildDOMAPI(
      createTestDeps({ hasPerm: (p) => granted.has(p) }),
    );
    expect(() => dom.delegate('button', 'click', () => {})).not.toThrow();
  });

  test('document scope works with app_manipulation (no extra permission required)', () => {
    const granted = new Set(['app_manipulation']);
    const dom = buildDOMAPI(
      createTestDeps({ hasPerm: (p) => granted.has(p) }),
    );
    expect(() =>
      dom.delegate('button', 'click', () => {}, { root: 'document' }),
    ).not.toThrow();
  });
});

describe('delegate — register message', () => {
  beforeEach(() => {
    // Reset the registry so per-test delegation counts are clean. Other
    // describes don't reset — they assert on per-test message dispatch
    // and don't care about residual entries from earlier test files —
    // but the delegation tests check `getDelegation()` return shapes,
    // and a fresh state is the easiest way to keep the assertions tight.
    resetDOMRegistry();
  });

  test('sends dom_delegate_register with the right shape', () => {
    const dom = buildDOMAPI(createTestDeps());
    dom.delegate('button[data-clickable]', 'click', () => {});

    const msgs = messagesOfType('dom_delegate_register');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].scriptId).toBe('test-script-id');
    expect(msgs[0].selector).toBe('button[data-clickable]');
    expect(msgs[0].event).toBe('click');
    expect(msgs[0].root).toBe('chat');
    expect(typeof msgs[0].delegationId).toBe('string');
    // Defaults absent on the wire: messageId, preventDefault, stopPropagation.
    expect(msgs[0].messageId).toBeUndefined();
    expect(msgs[0].preventDefault).toBeUndefined();
    expect(msgs[0].stopPropagation).toBeUndefined();
  });

  test('forwards root, messageId, preventDefault, stopPropagation', () => {
    const granted = new Set(['app_manipulation', 'dom_delegation']);
    const dom = buildDOMAPI(
      createTestDeps({ hasPerm: (p) => granted.has(p) }),
    );
    dom.delegate('a[href]', 'click', () => {}, {
      root: 'document',
      messageId: 'msg-123',
      preventDefault: true,
      stopPropagation: true,
    });

    const msg = messagesOfType('dom_delegate_register')[0];
    expect(msg.root).toBe('document');
    expect(msg.messageId).toBe('msg-123');
    expect(msg.preventDefault).toBe(true);
    expect(msg.stopPropagation).toBe(true);
  });

  test('registers entry in the dom-registry under delegationId', () => {
    const dom = buildDOMAPI(createTestDeps());
    const handler = (data: unknown) => { void data; };
    dom.delegate('button', 'click', handler);

    const msg = messagesOfType('dom_delegate_register')[0];
    const entry = getDelegation(msg.delegationId);
    expect(entry).toBeDefined();
    expect(entry!.scriptId).toBe('test-script-id');
    expect(entry!.selector).toBe('button');
    expect(entry!.event).toBe('click');
    expect(entry!.handler).toBe(handler);
  });
});

describe('delegate — unsubscribe', () => {
  beforeEach(() => { resetDOMRegistry(); });

  test('returned unsub fn sends dom_delegate_unregister and removes entry', () => {
    const dom = buildDOMAPI(createTestDeps());
    const unsub = dom.delegate('button', 'click', () => {});

    const registerMsg = messagesOfType('dom_delegate_register')[0];
    expect(getDelegation(registerMsg.delegationId)).toBeDefined();

    unsub();

    const unregMsgs = messagesOfType('dom_delegate_unregister');
    expect(unregMsgs).toHaveLength(1);
    expect(unregMsgs[0].delegationId).toBe(registerMsg.delegationId);
    expect(unregMsgs[0].event).toBe('click');
    expect(getDelegation(registerMsg.delegationId)).toBeUndefined();
  });

  test('unsub is idempotent (second call is a no-op, no second unregister fires)', () => {
    const dom = buildDOMAPI(createTestDeps());
    const unsub = dom.delegate('button', 'click', () => {});
    unsub();
    unsub();

    expect(messagesOfType('dom_delegate_unregister')).toHaveLength(1);
  });
});

describe('delegate — cleanup integration', () => {
  beforeEach(() => { resetDOMRegistry(); });

  test('cleanup() emits dom_delegate_unregister for every delegation', () => {
    const dom = buildDOMAPI(createTestDeps());
    dom.delegate('button', 'click', () => {});
    dom.delegate('input', 'change', () => {});
    dom.delegate('a[data-link]', 'click', () => {});

    dom.cleanup();

    const unregMsgs = messagesOfType('dom_delegate_unregister');
    expect(unregMsgs).toHaveLength(3);
    // One unregister per registered event.
    const eventsUnregistered = unregMsgs.map((m) => m.event).sort();
    expect(eventsUnregistered).toEqual(['change', 'click', 'click']);
  });

  test('cleanup() removes registry entries even when the script had no inject*/addStyle', () => {
    const dom = buildDOMAPI(createTestDeps());
    dom.delegate('button', 'click', () => {});
    const regMsg = messagesOfType('dom_delegate_register')[0];

    dom.cleanup();

    expect(getDelegation(regMsg.delegationId)).toBeUndefined();
    // No injects / styles were registered, so `dom_cleanup_script` wasn't
    // sent (matches the "no state" branch). The delegation unregister
    // still fires because cleanupScript() now returns delegations too.
    expect(messagesOfType('dom_cleanup_script')).toHaveLength(0);
    expect(messagesOfType('dom_delegate_unregister')).toHaveLength(1);
  });
});
