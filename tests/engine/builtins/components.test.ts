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

// ─── messageHeader / messageFooter — collapsible ────────────────────────────

/**
 * Simulate a frontend click on the toggle bar by invoking the click listener
 * directly from the dom-registry. This is the same path `dispatchEvent()`
 * takes when a real `dom_event` message arrives from the browser.
 */
function simulateToggleClick(elementId: string): void {
  const entry = getElement(elementId);
  if (!entry) throw new Error(`no element ${elementId}`);
  for (const { event, handler } of entry.listeners.values()) {
    if (event === 'click') {
      handler({ type: 'click', dataset: { lsToggle: '1' } });
      return;
    }
  }
  throw new Error(`no click listener on ${elementId}`);
}

describe('messageHeader — collapsible', () => {
  test('injects wrapper with modifier class, toggle bar, and body', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', '<span>Body</span>', {
      collapsible: true,
      title: 'Stats',
    });

    const html = messagesOfType('dom_inject_at_message')[0].html;
    expect(html).toContain('ls-comp-msg-header--collapsible');
    expect(html).toContain('ls-comp-msg-header__toggle');
    expect(html).toContain('data-ls-toggle="1"');
    expect(html).toContain('aria-expanded="true"');
    expect(html).toContain('ls-comp-msg-header__title');
    expect(html).toContain('Stats');
    expect(html).toContain('ls-comp-msg-header__chevron');
    expect(html).toContain('ls-comp-msg-header__body');
    expect(html).toContain('Body');
    // Expanded initially — no ls-collapsed class on body
    expect(html).not.toContain('ls-comp-msg-header__body ls-collapsed');
  });

  test('defaultCollapsed: true starts with body hidden and down chevron', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', '<span>Body</span>', {
      collapsible: true,
      title: 'T',
      defaultCollapsed: true,
    });

    const html = messagesOfType('dom_inject_at_message')[0].html;
    expect(html).toContain('ls-comp-msg-header__body ls-collapsed');
    expect(html).toContain('aria-expanded="false"');
    // Down-chevron SVG path fragment
    expect(html).toContain('m6 9 6 6 6-6');
  });

  test('expanded initial state uses up-chevron', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', '<span>Body</span>', {
      collapsible: true, title: 'T',
    });
    const html = messagesOfType('dom_inject_at_message')[0].html;
    // Up-chevron SVG path fragment
    expect(html).toContain('m18 15-6-6-6 6');
  });

  test('returns CollapsibleDOMHandle with imperative methods', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' });

    expect(typeof h.id).toBe('string');
    expect(typeof h.update).toBe('function');
    expect(typeof h.remove).toBe('function');
    expect(typeof h.on).toBe('function');
    expect(typeof h.isCollapsed).toBe('function');
    expect(typeof h.setCollapsed).toBe('function');
    expect(typeof h.toggle).toBe('function');
    expect(typeof h.setTitle).toBe('function');
  });

  test('isCollapsed reflects initial and toggled state', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', {
      collapsible: true, title: 'T', defaultCollapsed: true,
    });
    expect(h.isCollapsed()).toBe(true);
    h.toggle();
    expect(h.isCollapsed()).toBe(false);
    h.toggle();
    expect(h.isCollapsed()).toBe(true);
  });

  test('setCollapsed sets explicit state and emits dom_update', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' });

    h.setCollapsed(true);
    const updates = messagesOfType('dom_update');
    expect(updates).toHaveLength(1);
    expect(updates[0].html).toContain('ls-collapsed');
    expect(updates[0].html).toContain('aria-expanded="false"');

    h.setCollapsed(false);
    expect(messagesOfType('dom_update')).toHaveLength(2);
    expect(messagesOfType('dom_update')[1].html).toContain('aria-expanded="true"');
  });

  test('toggle() flips state and re-renders', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' });
    h.toggle();
    const update = messagesOfType('dom_update')[0];
    expect(update.html).toContain('ls-collapsed');
    expect(h.isCollapsed()).toBe(true);
  });

  test('setTitle replaces the title, preserves collapsed state and body', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'OriginalBody', {
      collapsible: true, title: 'Old', defaultCollapsed: true,
    });
    h.setTitle('New');

    const update = messagesOfType('dom_update')[0];
    expect(update.html).toContain('New');
    expect(update.html).not.toContain('>Old<');
    expect(update.html).toContain('OriginalBody');
    expect(update.html).toContain('ls-collapsed');
    expect(h.isCollapsed()).toBe(true);
  });

  test('update(body) replaces the body, preserves title and collapsed state', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body-v1', {
      collapsible: true, title: 'MyTitle', defaultCollapsed: true,
    });
    h.update('Body-v2');

    const update = messagesOfType('dom_update')[0];
    expect(update.html).toContain('Body-v2');
    expect(update.html).not.toContain('Body-v1');
    expect(update.html).toContain('MyTitle');
    expect(update.html).toContain('ls-collapsed');
    expect(h.isCollapsed()).toBe(true);
  });

  test('simulated click with data-ls-toggle flips state via delegation', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' });
    expect(h.isCollapsed()).toBe(false);

    simulateToggleClick(h.id);
    expect(h.isCollapsed()).toBe(true);
    // First dom_update fired by the delegated handler
    expect(messagesOfType('dom_update')[0].html).toContain('ls-collapsed');

    simulateToggleClick(h.id);
    expect(h.isCollapsed()).toBe(false);
  });

  test('every dom_update preserves the wrapper modifier class', () => {
    // Regression: the Lumiverse frontend dom_update handler does
    //   inner.innerHTML = msg.html
    // on the data-ls-el container, so any state-change re-render MUST include
    // the .ls-comp-msg-header--collapsible wrapper div — otherwise our
    // descendant-scoped CSS (flex layout, font inheritance, pointer-events)
    // stops matching on the second render and layout/click both break.
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', {
      collapsible: true, title: 'T',
    });

    h.toggle();
    h.setTitle('New title');
    h.update('New body');
    h.setCollapsed(true);

    const updates = messagesOfType('dom_update');
    expect(updates.length).toBeGreaterThanOrEqual(4);
    for (const update of updates) {
      expect(update.html).toContain('ls-comp-msg-header--collapsible');
      expect(update.html).toContain('ls-comp-msg-header__toggle');
      expect(update.html).toContain('ls-comp-msg-header__body');
    }

    // Also assert the initial inject carries it, for symmetry.
    const inject = messagesOfType('dom_inject_at_message')[0];
    expect(inject.html).toContain('ls-comp-msg-header--collapsible');
  });

  test('click without data-ls-toggle does not toggle', () => {
    const lib = createLib();
    const h = lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' });

    const entry = getElement(h.id);
    for (const { event, handler } of entry!.listeners.values()) {
      if (event === 'click') handler({ type: 'click' }); // no dataset
    }
    expect(h.isCollapsed()).toBe(false);
    expect(messagesOfType('dom_update')).toHaveLength(0);
  });

  test('missing title renders empty title span (chevron-only bar)', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', 'Body', { collapsible: true });
    const html = messagesOfType('dom_inject_at_message')[0].html;
    expect(html).toContain('ls-comp-msg-header__title');
    expect(html).toContain('ls-comp-msg-header__chevron');
  });

  test('collapsible CSS is part of the injected style block', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' });
    const css = messagesOfType('dom_add_style')[0].css;
    expect(css).toContain('ls-comp-msg-header--collapsible');
    expect(css).toContain('ls-comp-msg-header__toggle');
    expect(css).toContain('ls-comp-msg-header__body.ls-collapsed');
    expect(css).toContain('pointer-events: none');
  });

  test('user-supplied className still lands on the wrapper', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', 'Body', {
      collapsible: true, title: 'T', className: 'my-extra',
    });
    const html = messagesOfType('dom_inject_at_message')[0].html;
    expect(html).toContain('my-extra');
    expect(html).toContain('ls-comp-msg-header--collapsible');
  });

  test('permissions still enforced on the collapsible path', () => {
    const lib = createLib({ hasPerm: () => false });
    expect(() =>
      lib.messageHeader('msg-1', 'Body', { collapsible: true, title: 'T' }),
    ).toThrow('PERMISSION_DENIED');
  });

  test('regression: non-collapsible path emits no wrapper modifier class', () => {
    const lib = createLib();
    lib.messageHeader('msg-1', '<span>Plain</span>');
    const html = messagesOfType('dom_inject_at_message')[0].html;
    expect(html).toContain('ls-comp-msg-header');
    expect(html).not.toContain('ls-comp-msg-header--collapsible');
    expect(html).not.toContain('ls-comp-msg-header__toggle');
    expect(html).not.toContain('data-ls-toggle');
  });
});

describe('messageFooter — collapsible', () => {
  test('injects wrapper with footer-scoped modifier class and toggle bar', () => {
    const lib = createLib();
    lib.messageFooter('msg-1', '<span>Body</span>', {
      collapsible: true, title: 'Stats',
    });

    const msg = messagesOfType('dom_inject_at_message')[0];
    expect(msg.position).toBe('footer');
    expect(msg.html).toContain('ls-comp-msg-footer--collapsible');
    expect(msg.html).toContain('ls-comp-msg-footer__toggle');
    expect(msg.html).toContain('ls-comp-msg-footer__body');
    expect(msg.html).toContain('Stats');
  });

  test('imperative methods work the same as on the header variant', () => {
    const lib = createLib();
    const h = lib.messageFooter('msg-1', 'Body-v1', {
      collapsible: true, title: 'Old',
    });

    h.setTitle('New');
    h.update('Body-v2');
    h.setCollapsed(true);

    const updates = messagesOfType('dom_update');
    // Last update should reflect all three mutations composed via closure.
    const final = updates[updates.length - 1].html;
    expect(final).toContain('New');
    expect(final).toContain('Body-v2');
    expect(final).toContain('ls-collapsed');
    expect(h.isCollapsed()).toBe(true);
  });

  test('simulated click toggles footer state', () => {
    const lib = createLib();
    const h = lib.messageFooter('msg-1', 'Body', {
      collapsible: true, title: 'T', defaultCollapsed: true,
    });
    expect(h.isCollapsed()).toBe(true);
    simulateToggleClick(h.id);
    expect(h.isCollapsed()).toBe(false);
  });

  test('every dom_update preserves the wrapper modifier class (footer)', () => {
    const lib = createLib();
    const h = lib.messageFooter('msg-1', 'Body', {
      collapsible: true, title: 'T',
    });
    h.toggle();
    h.setTitle('New');
    h.update('Body2');
    for (const update of messagesOfType('dom_update')) {
      expect(update.html).toContain('ls-comp-msg-footer--collapsible');
      expect(update.html).toContain('ls-comp-msg-footer__toggle');
    }
  });

  test('regression: non-collapsible footer path unchanged', () => {
    const lib = createLib();
    lib.messageFooter('msg-1', '<span>Plain</span>');
    const html = messagesOfType('dom_inject_at_message')[0].html;
    expect(html).toContain('ls-comp-msg-footer');
    expect(html).not.toContain('ls-comp-msg-footer--collapsible');
    expect(html).not.toContain('ls-comp-msg-footer__toggle');
  });

  test('permissions still enforced on the collapsible footer path', () => {
    const lib = createLib({ hasPerm: () => false });
    expect(() =>
      lib.messageFooter('msg-1', 'Body', { collapsible: true, title: 'T' }),
    ).toThrow('PERMISSION_DENIED');
  });
});
