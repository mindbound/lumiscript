import { describe, test, expect } from 'bun:test';
import { createComponentsLibrary } from '../../../src/engine/builtins/components.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import { buildDOMAPI } from '../../../src/engine/api/dom.js';
import { getElement } from '../../../src/engine/dom-registry.js';

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Retrieve all calls to spindle.sendToFrontend from the preload mock. */
function sentMessages(): unknown[] {
  return ((globalThis as any).spindle.sendToFrontend as any).mock.calls.map(
    (call: unknown[]) => call[0],
  );
}

function messagesOfType(type: string): any[] {
  return sentMessages().filter((m: any) => m.type === type);
}

/**
 * Build a minimal api-like object that the components library needs.
 * The factory only touches `api.ui.dom`, so we just wire that up.
 */
function buildMockApi(depsOverrides?: Parameters<typeof createTestDeps>[0]) {
  const deps = createTestDeps(depsOverrides);
  return {
    ui: { dom: buildDOMAPI(deps) },
  } as any;
}

/** Create the library and type-cast for convenience. */
function createLib(apiOverrides?: Parameters<typeof createTestDeps>[0]) {
  return createComponentsLibrary(buildMockApi(apiOverrides)) as any;
}

// ─── messageFooter ──────────────────────────────────────────────────────────

describe('messageFooter', () => {
  test('sends dom_inject_at_message with wrapped HTML', () => {
    const lib = createLib();
    const footer = lib.messageFooter('msg-1', '<span>42 words</span>');

    expect(footer.id).toBeTruthy();
    const msgs = messagesOfType('dom_inject_at_message');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].messageId).toBe('msg-1');
    expect(msgs[0].html).toContain('ls-comp-msg-footer');
    expect(msgs[0].html).toContain('42 words');
    expect(msgs[0].position).toBe('footer');
  });

  test('returns a DOMHandle with id, update, remove, on', () => {
    const lib = createLib();
    const footer = lib.messageFooter('msg-1', '<span>Hi</span>');

    expect(typeof footer.id).toBe('string');
    expect(typeof footer.update).toBe('function');
    expect(typeof footer.remove).toBe('function');
    expect(typeof footer.on).toBe('function');
  });

  test('injects styles on first call only', () => {
    const lib = createLib();
    lib.messageFooter('msg-1', '<span>A</span>');
    lib.messageFooter('msg-2', '<span>B</span>');

    const styleMsgs = messagesOfType('dom_add_style');
    expect(styleMsgs).toHaveLength(1);
    expect(styleMsgs[0].css).toContain('ls-comp-msg-footer');
  });

  test('respects stable id option', () => {
    const lib = createLib();
    const h1 = lib.messageFooter('msg-1', '<span>V1</span>', { id: 'my-footer' });
    const h2 = lib.messageFooter('msg-1', '<span>V2</span>', { id: 'my-footer' });

    expect(h2.id).toBe(h1.id);
    expect(messagesOfType('dom_update')).toHaveLength(1);
  });

  test('respects className option', () => {
    const lib = createLib();
    lib.messageFooter('msg-1', '<span>Hi</span>', { className: 'custom' });
    expect(messagesOfType('dom_inject_at_message')[0].html).toContain('custom');
  });

  test('registers element in DOM registry', () => {
    const lib = createLib();
    const footer = lib.messageFooter('msg-1', '<span>Hi</span>');
    expect(getElement(footer.id)).toBeDefined();
  });

  test('requires app_manipulation permission', () => {
    const lib = createLib({ hasPerm: () => false });
    expect(() => lib.messageFooter('msg-1', '<span>Hi</span>')).toThrow('PERMISSION_DENIED');
  });
});

// ─── messageHeader ──────────────────────────────────────────────────────────

describe('messageHeader', () => {
  test('sends dom_inject_at_message with position header', () => {
    const lib = createLib();
    const header = lib.messageHeader('msg-1', '<span>Header</span>');

    expect(header.id).toBeTruthy();
    const msgs = messagesOfType('dom_inject_at_message');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].position).toBe('header');
    expect(msgs[0].html).toContain('ls-comp-msg-header');
    expect(msgs[0].html).toContain('Header');
  });

  test('returns a DOMHandle', () => {
    const lib = createLib();
    const header = lib.messageHeader('msg-1', '<span>Hi</span>');
    expect(typeof header.id).toBe('string');
    expect(typeof header.update).toBe('function');
    expect(typeof header.remove).toBe('function');
    expect(typeof header.on).toBe('function');
  });

  test('injects header styles separate from footer styles', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', '<span>A</span>');
    lib.messageFooter('msg-2', '<span>B</span>');

    const styleMsgs = messagesOfType('dom_add_style');
    expect(styleMsgs).toHaveLength(2);
    expect(styleMsgs[0].css).toContain('ls-comp-msg-header');
    expect(styleMsgs[1].css).toContain('ls-comp-msg-footer');
  });

  test('respects stable id and className', () => {
    const lib = createLib();
    const h1 = lib.messageHeader('msg-1', '<span>V1</span>', { id: 'hdr', className: 'extra' });
    const h2 = lib.messageHeader('msg-1', '<span>V2</span>', { id: 'hdr' });

    expect(h2.id).toBe(h1.id);
    expect(messagesOfType('dom_inject_at_message')[0].html).toContain('extra');
  });

  test('requires app_manipulation permission', () => {
    const lib = createLib({ hasPerm: () => false });
    expect(() => lib.messageHeader('msg-1', '<span>Hi</span>')).toThrow('PERMISSION_DENIED');
  });
});

// ─── badgeHtml ──────────────────────────────────────────────────────────────

describe('badgeHtml', () => {
  test('returns an HTML string with badge classes', () => {
    const lib = createLib();
    const html = lib.badgeHtml('Online');

    expect(typeof html).toBe('string');
    expect(html).toContain('ls-comp-badge');
    expect(html).toContain('ls-comp-badge--default');
    expect(html).toContain('ls-comp-badge--md');
    expect(html).toContain('Online');
  });

  test('applies variant class', () => {
    const lib = createLib();
    const html = lib.badgeHtml('Error', { variant: 'danger' });
    expect(html).toContain('ls-comp-badge--danger');
  });

  test('applies size class', () => {
    const lib = createLib();
    const html = lib.badgeHtml('Small', { size: 'sm' });
    expect(html).toContain('ls-comp-badge--sm');
  });

  test('renders dot indicator when dot: true', () => {
    const lib = createLib();
    const html = lib.badgeHtml('Active', { dot: true });
    expect(html).toContain('ls-comp-badge__dot');
  });

  test('does not render dot when dot: false or omitted', () => {
    const lib = createLib();
    const html = lib.badgeHtml('Plain');
    expect(html).not.toContain('ls-comp-badge__dot');
  });

  test('escapes HTML in text', () => {
    const lib = createLib();
    const html = lib.badgeHtml('<script>alert("xss")</script>');
    expect(html).not.toContain('<script>');
    expect(html).toContain('&lt;script&gt;');
  });

  test('applies custom className', () => {
    const lib = createLib();
    const html = lib.badgeHtml('Tag', { className: 'my-badge' });
    expect(html).toContain('my-badge');
  });

  test('injects badge styles lazily', () => {
    const lib = createLib();
    lib.badgeHtml('Test');

    const styleMsgs = messagesOfType('dom_add_style');
    expect(styleMsgs).toHaveLength(1);
    expect(styleMsgs[0].css).toContain('ls-comp-badge');
  });
});

// ─── statBarHtml ────────────────────────────────────────────────────────────

describe('statBarHtml', () => {
  test('returns an HTML string with stat bar structure', () => {
    const lib = createLib();
    const html = lib.statBarHtml('Health', 75);

    expect(typeof html).toBe('string');
    expect(html).toContain('ls-comp-stat-bar');
    expect(html).toContain('Health');
    expect(html).toContain('75/100');
  });

  test('clamps value to max', () => {
    const lib = createLib();
    const html = lib.statBarHtml('Over', 150, { max: 100 });
    expect(html).toContain('100/100');
    expect(html).toContain('width:100.0%');
  });

  test('clamps value to 0', () => {
    const lib = createLib();
    const html = lib.statBarHtml('Under', -10);
    expect(html).toContain('0/100');
    expect(html).toContain('width:0.0%');
  });

  test('respects custom max', () => {
    const lib = createLib();
    const html = lib.statBarHtml('MP', 25, { max: 50 });
    expect(html).toContain('25/50');
    expect(html).toContain('width:50.0%');
  });

  test('respects custom color', () => {
    const lib = createLib();
    const html = lib.statBarHtml('HP', 50, { color: '#e74c3c' });
    expect(html).toContain('background:#e74c3c');
  });

  test('hides value when showValue: false', () => {
    const lib = createLib();
    const html = lib.statBarHtml('Stealth', 42, { showValue: false });
    expect(html).not.toContain('ls-comp-stat-bar__value');
    expect(html).toContain('ls-comp-stat-bar--no-value');
  });

  test('respects custom height', () => {
    const lib = createLib();
    const html = lib.statBarHtml('Bar', 50, { height: 12 });
    expect(html).toContain('height:12px');
  });

  test('escapes label HTML', () => {
    const lib = createLib();
    const html = lib.statBarHtml('<b>Bold</b>', 50);
    expect(html).toContain('&lt;b&gt;Bold&lt;/b&gt;');
  });
});

// ─── keyValueHtml ───────────────────────────────────────────────────────────

describe('keyValueHtml', () => {
  test('returns an HTML string with key-value structure', () => {
    const lib = createLib();
    const html = lib.keyValueHtml('Location', 'Castle');

    expect(typeof html).toBe('string');
    expect(html).toContain('ls-comp-kv');
    expect(html).toContain('Location');
    expect(html).toContain('Castle');
  });

  test('applies muted class when muted: true', () => {
    const lib = createLib();
    const html = lib.keyValueHtml('Key', 'Val', { muted: true });
    expect(html).toContain('ls-comp-kv__value--muted');
  });

  test('does not apply muted class by default', () => {
    const lib = createLib();
    const html = lib.keyValueHtml('Key', 'Val');
    expect(html).not.toContain('ls-comp-kv__value--muted');
  });

  test('escapes both label and value', () => {
    const lib = createLib();
    const html = lib.keyValueHtml('<em>Key</em>', '<b>Value</b>');
    expect(html).toContain('&lt;em&gt;Key&lt;/em&gt;');
    expect(html).toContain('&lt;b&gt;Value&lt;/b&gt;');
  });

  test('applies custom className', () => {
    const lib = createLib();
    const html = lib.keyValueHtml('A', 'B', { className: 'my-kv' });
    expect(html).toContain('my-kv');
  });
});

// ─── progressBar ────────────────────────────────────────────────────────────

describe('progressBar', () => {
  test('injects at target and returns extended handle', () => {
    const lib = createLib();
    const bar = lib.progressBar('#container');

    expect(bar.id).toBeTruthy();
    expect(typeof bar.update).toBe('function');
    expect(typeof bar.remove).toBe('function');
    expect(typeof bar.on).toBe('function');
    expect(typeof bar.setValue).toBe('function');

    const msgs = messagesOfType('dom_inject');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].target).toBe('#container');
    expect(msgs[0].html).toContain('ls-comp-progress');
  });

  test('renders initial value and label', () => {
    const lib = createLib();
    lib.progressBar('#container', { value: 42, label: 'Loading...' });

    const msgs = messagesOfType('dom_inject');
    expect(msgs[0].html).toContain('42%');
    expect(msgs[0].html).toContain('Loading...');
    expect(msgs[0].html).toContain('width:42.0%');
  });

  test('setValue sends dom_update with new value', () => {
    const lib = createLib();
    const bar = lib.progressBar('#container', { value: 0, label: 'Start' });

    bar.setValue(75, 'Almost done');

    const updateMsgs = messagesOfType('dom_update');
    expect(updateMsgs).toHaveLength(1);
    expect(updateMsgs[0].html).toContain('75%');
    expect(updateMsgs[0].html).toContain('Almost done');
    expect(updateMsgs[0].html).toContain('width:75.0%');
  });

  test('setValue clamps to 0-100', () => {
    const lib = createLib();
    const bar = lib.progressBar('#container');

    bar.setValue(150);
    const msgs = messagesOfType('dom_update');
    expect(msgs[0].html).toContain('100%');
    expect(msgs[0].html).toContain('width:100.0%');
  });

  test('hides percent when showPercent: false', () => {
    const lib = createLib();
    lib.progressBar('#container', { showPercent: false, value: 50 });

    const msgs = messagesOfType('dom_inject');
    expect(msgs[0].html).not.toContain('ls-comp-progress__percent');
  });

  test('respects stable id', () => {
    const lib = createLib();
    const b1 = lib.progressBar('#container', { id: 'prog' });
    const b2 = lib.progressBar('#container', { id: 'prog' });

    expect(b2.id).toBe(b1.id);
    expect(messagesOfType('dom_update')).toHaveLength(1);
  });

  test('requires app_manipulation permission', () => {
    const lib = createLib({ hasPerm: () => false });
    expect(() => lib.progressBar('#container')).toThrow('PERMISSION_DENIED');
  });
});

// ─── floatingButton ─────────────────────────────────────────────────────────

describe('floatingButton', () => {
  test('injects at body with fixed positioning', () => {
    const lib = createLib();
    const btn = lib.floatingButton('Click me');

    expect(btn.id).toBeTruthy();
    const msgs = messagesOfType('dom_inject');
    expect(msgs).toHaveLength(1);
    expect(msgs[0].target).toBe('body');
    expect(msgs[0].html).toContain('position:fixed');
    expect(msgs[0].html).toContain('Click me');
    expect(msgs[0].html).toContain('ls-comp-fab');
  });

  test('applies default position (bottom-right)', () => {
    const lib = createLib();
    lib.floatingButton('Test');
    const html = messagesOfType('dom_inject')[0].html;
    expect(html).toContain('bottom:80px');
    expect(html).toContain('right:16px');
  });

  test('respects custom position', () => {
    const lib = createLib();
    lib.floatingButton('Test', { position: { top: '10px', left: '10px' } });
    const html = messagesOfType('dom_inject')[0].html;
    expect(html).toContain('top:10px');
    expect(html).toContain('left:10px');
  });

  test('applies variant class', () => {
    const lib = createLib();
    lib.floatingButton('Accent', { variant: 'accent' });
    expect(messagesOfType('dom_inject')[0].html).toContain('ls-comp-fab--accent');
  });

  test('applies ghost variant', () => {
    const lib = createLib();
    lib.floatingButton('Ghost', { variant: 'ghost' });
    expect(messagesOfType('dom_inject')[0].html).toContain('ls-comp-fab--ghost');
  });

  test('applies size class', () => {
    const lib = createLib();
    lib.floatingButton('Small', { size: 'sm' });
    expect(messagesOfType('dom_inject')[0].html).toContain('ls-comp-fab--sm');
  });

  test('renders icon-only mode when label is empty', () => {
    const lib = createLib();
    lib.floatingButton('', { icon: '<svg>icon</svg>' });
    const html = messagesOfType('dom_inject')[0].html;
    expect(html).toContain('ls-comp-fab--icon-only');
    expect(html).toContain('ls-comp-fab__icon');
    expect(html).not.toContain('ls-comp-fab__label');
  });

  test('renders both icon and label', () => {
    const lib = createLib();
    lib.floatingButton('Go', { icon: '<svg/>' });
    const html = messagesOfType('dom_inject')[0].html;
    expect(html).toContain('ls-comp-fab__icon');
    expect(html).toContain('ls-comp-fab__label');
    expect(html).not.toContain('ls-comp-fab--icon-only');
  });

  test('escapes label text', () => {
    const lib = createLib();
    lib.floatingButton('<script>xss</script>');
    expect(messagesOfType('dom_inject')[0].html).toContain('&lt;script&gt;');
  });

  test('respects stable id', () => {
    const lib = createLib();
    const b1 = lib.floatingButton('A', { id: 'fab' });
    const b2 = lib.floatingButton('B', { id: 'fab' });

    expect(b2.id).toBe(b1.id);
    expect(messagesOfType('dom_update')).toHaveLength(1);
  });

  test('requires app_manipulation permission', () => {
    const lib = createLib({ hasPerm: () => false });
    expect(() => lib.floatingButton('Test')).toThrow('PERMISSION_DENIED');
  });
});
