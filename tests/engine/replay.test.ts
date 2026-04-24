/**
 * ============================================================================
 * LUMISCRIPT — REPLAY ORCHESTRATOR (integration)
 * ============================================================================
 * Integration test for `buildReplayMessages()` — the pure composition that
 * runs on `frontend_ready` when the backend worker survives a browser refresh.
 *
 * Each registry's own unit tests cover its individual `listReplayMessages()`
 * output; this file asserts the CROSS-registry ordering that keeps replay
 * visually clean:
 *
 *     styles → input-bar actions → drawer tabs → float widgets
 *       → standalone DOM injects → shell updates → listeners → draggable
 *
 * If this invariant regresses, scripts see a frame of unstyled /
 * unparented content on refresh.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildReplayMessages } from '../../src/engine/replay.js';
import {
  registerAction,
  __reset as resetActions,
} from '../../src/engine/input-bar-action-registry.js';
import {
  registerTab,
  updateBadge,
  __reset as resetTabs,
} from '../../src/engine/drawer-tab-registry.js';
import {
  registerWidget,
  updatePosition,
  updateVisibility,
  __reset as resetWidgets,
} from '../../src/engine/float-widget-registry.js';
import {
  registerElement,
  registerStyle,
  addListener,
  setDraggable,
  updateElementHtml,
  __reset as resetDOM,
} from '../../src/engine/dom-registry.js';

beforeEach(() => {
  resetActions();
  resetTabs();
  resetWidgets();
  resetDOM();
});

// ─── Empty-state ─────────────────────────────────────────────────────────────

describe('buildReplayMessages — empty state', () => {
  test('no registries populated → []', () => {
    expect(buildReplayMessages()).toEqual([]);
  });
});

// ─── Isolated registries ────────────────────────────────────────────────────

describe('buildReplayMessages — isolated registries', () => {
  test('only input-bar actions populated', () => {
    registerAction('s1', 'hello', 'Hello', true);
    const msgs = buildReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_input_bar_action_register');
  });

  test('only drawer tabs populated', () => {
    registerTab('s1', 't1', 'dt_1', 'Tab', undefined, {});
    const msgs = buildReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_drawer_tab_register');
  });

  test('only float widgets populated', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    const msgs = buildReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_float_widget_create');
  });

  test('only styles populated', () => {
    registerStyle('st_1', 's1', '.a { color: red }');
    const msgs = buildReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('dom_add_style');
  });

  test('only DOM injection populated', () => {
    registerElement('e1', 's1', undefined, {
      kind: 'selector', target: '#root', position: 'beforeend', initialHtml: '<div/>',
    });
    const msgs = buildReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('dom_inject');
  });
});

// ─── Cross-registry ordering (the critical invariant) ──────────────────────

describe('buildReplayMessages — cross-registry ordering', () => {
  test('styles arrive before every other message', () => {
    // Populate in an order deliberately opposite to the invariant to catch
    // any regression that relies on registration-time ordering.
    registerAction('s1', 'a', 'A', true);
    registerTab('s1', 't1', 'dt_1', 'Tab', undefined, {});
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    registerElement('e1', 's1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend', initialHtml: '<div/>',
    });
    registerStyle('st_1', 's1', '.a {}');

    const msgs = buildReplayMessages();
    expect(msgs[0]!.type).toBe('dom_add_style');
  });

  test('host-UI registers come before DOM injects / shell updates', () => {
    // Input-bar / drawer / widget registers must land before any dom_* that
    // targets their shell root elements. The inject for a standalone
    // selector element can appear at any point after its shell dependencies
    // are registered, but conventionally we put ALL non-shell injects
    // after ALL registers to avoid flash.
    registerStyle('st_1', 's1', '.a {}');
    registerAction('s1', 'a', 'A', true);
    registerTab('s1', 't1', 'dt_1', 'Tab', undefined, {});
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    registerElement('e1', 's1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend', initialHtml: '<div/>',
    });

    const types = buildReplayMessages().map(m => m.type);
    const ixStyle    = types.indexOf('dom_add_style');
    const ixAction   = types.indexOf('ls_input_bar_action_register');
    const ixTab      = types.indexOf('ls_drawer_tab_register');
    const ixWidget   = types.indexOf('ls_float_widget_create');
    const ixInject   = types.indexOf('dom_inject');

    expect(ixStyle).toBeLessThan(ixAction);
    expect(ixAction).toBeLessThan(ixTab);
    expect(ixTab).toBeLessThan(ixWidget);
    expect(ixWidget).toBeLessThan(ixInject);
  });

  test('shell dom_update comes AFTER its parent widget/tab register', () => {
    // Drawer tab rootElementId is a shell. The tab registers and allocates
    // the shell; when the user calls tab.root.update(html), we cache the HTML.
    // On replay, the register must land first so the shell's elementId
    // resolves when the follow-up dom_update arrives.
    const tabRoot = 'dt_shell_1';
    registerTab('s1', 't1', tabRoot, 'Tab', undefined, {});
    registerElement(tabRoot, 's1');  // shell, no extras
    updateElementHtml(tabRoot, '<div>tab body</div>');

    const msgs = buildReplayMessages();
    const ixRegister = msgs.findIndex(m => m.type === 'ls_drawer_tab_register');
    const ixUpdate   = msgs.findIndex(
      m => m.type === 'dom_update'
        && (m as { elementId?: string }).elementId === tabRoot,
    );

    expect(ixRegister).toBeGreaterThanOrEqual(0);
    expect(ixUpdate).toBeGreaterThanOrEqual(0);
    expect(ixRegister).toBeLessThan(ixUpdate);
  });

  test('dom_listen comes AFTER inject / shell-update for its target', () => {
    registerElement('e1', 's1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend', initialHtml: '<div/>',
    });
    addListener('e1', 'l1', 'click', () => {});

    const msgs = buildReplayMessages();
    const ixInject = msgs.findIndex(m => m.type === 'dom_inject');
    const ixListen = msgs.findIndex(m => m.type === 'dom_listen');

    expect(ixInject).toBeLessThan(ixListen);
  });

  test('dom_make_draggable is emitted last (after listeners)', () => {
    registerElement('e1', 's1', undefined, {
      kind: 'selector', target: '#r', position: 'beforeend', initialHtml: '<div/>',
    });
    addListener('e1', 'l1', 'click', () => {});
    setDraggable('e1', '.handle');

    const msgs = buildReplayMessages();
    const ixListen   = msgs.findIndex(m => m.type === 'dom_listen');
    const ixDraggable = msgs.findIndex(m => m.type === 'dom_make_draggable');

    expect(ixListen).toBeLessThan(ixDraggable);
  });

  test('shell body update comes BEFORE a shell-scoped child inject', () => {
    // Motivating bug: a shell-scoped `DOMHandle.injectChild()` (e.g.
    // `tab.root.injectChild('[data-grid]', html, { id })`) resolves its
    // target against the parent's inner DOM. If the shell body's update
    // replays AFTER the child inject, the target isn't there yet and the
    // inject silently drops. Fix: shell updates precede non-shell injects.

    // Parent shell — drawer tab body
    registerTab('s1', 'dash', 'dt_shell', 'Dashboard', undefined, {});
    registerElement('dt_shell', 's1');
    updateElementHtml('dt_shell', '<div><span data-grid></span></div>');

    // Child inject via injectChild — target resolves inside dt_shell's body
    registerElement('grid-child', 's1', undefined, {
      kind: 'selector',
      target: '[data-grid]',
      position: 'beforeend',
      initialHtml: '<div>icons here</div>',
      parentElementId: 'dt_shell',
    });

    const msgs = buildReplayMessages();
    const types = msgs.map(m => m.type);

    const ixTabRegister = types.indexOf('ls_drawer_tab_register');
    const ixShellUpdate = msgs.findIndex(
      m => m.type === 'dom_update' && (m as { elementId?: string }).elementId === 'dt_shell',
    );
    const ixChildInject = msgs.findIndex(
      m => m.type === 'dom_inject' && (m as { elementId?: string }).elementId === 'grid-child',
    );

    expect(ixTabRegister).toBeGreaterThanOrEqual(0);
    expect(ixShellUpdate).toBeGreaterThanOrEqual(0);
    expect(ixChildInject).toBeGreaterThanOrEqual(0);

    // Tab register → shell body populated → child inject can resolve its target.
    expect(ixTabRegister).toBeLessThan(ixShellUpdate);
    expect(ixShellUpdate).toBeLessThan(ixChildInject);
  });
});

// ─── Realistic dogfood (Roll-Dice-ish) ──────────────────────────────────────

describe('buildReplayMessages — realistic full session', () => {
  test('fully-populated state emits the complete expected sequence', () => {
    // Simulate a script like Roll Dice that has:
    //   - One input bar action
    //   - One CSS injection
    //   - One message-anchored DOM injection with a click listener
    //   - One float widget, dragged to a new position

    registerStyle('st_roll', 'roll-dice', '.roll-dice { padding: 4px }');

    registerAction(
      'roll-dice', 'roll', 'Roll Dice', true,
      '<svg>d6</svg>', undefined,
    );

    registerElement('e1', 'roll-dice', 'roll-footer-msg-1', {
      kind: 'message',
      messageId: 'msg-uuid-1',
      messagePosition: 'footer',
      initialHtml: '<span>+3 margin</span>',
    });
    addListener('e1', 'l1', 'click', () => {});

    registerWidget('w1', 'fw_roll', 'roll-dice', {
      width: 200, height: 80,
      initialPosition: { x: 10, y: 10 },
      snapToEdge: false,
    });
    updatePosition('w1', 300, 400);  // user dragged it
    updateVisibility('w1', false);    // user hid it

    const msgs = buildReplayMessages();
    const types = msgs.map(m => m.type);

    // Full expected sequence (order matters):
    expect(types).toEqual([
      'dom_add_style',                    // 1. styles first
      'ls_input_bar_action_register',     // 2. host-UI: popover rows
      // no drawer tab
      'ls_float_widget_create',           // 4. host-UI: widget
      'ls_float_widget_move',             //    (cached position differs)
      'ls_float_widget_set_visible',      //    (hidden)
      'dom_inject_at_message',            // 5. standalone DOM inject
      // no shell updates (no tab / widget body content pushed)
      'dom_listen',                       // 7. re-attach listener
      // no draggable
    ]);
  });

  test('shell-populated session interleaves shell updates correctly', () => {
    // A script with a drawer tab whose body has content:
    registerTab('dash-script', 'dashboard', 'dt_shell', 'Dashboard', 'Dash', {});
    updateBadge('dash-script', 'dashboard', '3');

    registerElement('dt_shell', 'dash-script');
    updateElementHtml('dt_shell', '<div class="dash-root">content</div>');

    const types = buildReplayMessages().map(m => m.type);
    expect(types).toEqual([
      'ls_drawer_tab_register',
      'ls_drawer_tab_set_badge',
      'dom_update',  // shell fill — tab body
    ]);
  });

  test('replay is idempotent (same output on repeated calls)', () => {
    registerStyle('st1', 's1', '.x {}');
    registerAction('s1', 'a', 'A', true);
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });

    const first = buildReplayMessages();
    const second = buildReplayMessages();
    expect(second).toEqual(first);
  });
});
