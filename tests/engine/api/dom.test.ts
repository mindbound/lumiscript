import { describe, test, expect, beforeEach } from 'bun:test';
import type { DOMEventData } from '../../../src/types/script.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { buildDOMAPI } from '../../../src/engine/api/dom.js';
import {
  getElement,
  resolveStableId,
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
