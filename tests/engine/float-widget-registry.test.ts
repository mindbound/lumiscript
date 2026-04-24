import { describe, test, expect, beforeEach } from 'bun:test';
import {
  registerWidget,
  getWidget,
  countLiveWidgetsByScript,
  updatePosition,
  updateVisibility,
  destroyWidget,
  dropEntry,
  liveWidgetsByScript,
  listReplayMessages,
  __reset,
} from '../../src/engine/float-widget-registry.js';

beforeEach(() => __reset());

// ─── registerWidget — options storage ────────────────────────────────────────

describe('registerWidget', () => {
  test('stores the full options object and seeds position from initialPosition', () => {
    registerWidget('w1', 'fw_1', 's1', {
      width: 200,
      height: 80,
      initialPosition: { x: 10, y: 20 },
      snapToEdge: true,
      tooltip: 'hello',
      chromeless: false,
    });
    const entry = getWidget('w1')!;
    expect(entry).toBeDefined();
    expect(entry.rootElementId).toBe('fw_1');
    expect(entry.scriptId).toBe('s1');
    expect(entry.options.width).toBe(200);
    expect(entry.options.height).toBe(80);
    expect(entry.options.initialPosition).toEqual({ x: 10, y: 20 });
    expect(entry.options.snapToEdge).toBe(true);
    expect(entry.options.tooltip).toBe('hello');
    expect(entry.x).toBe(10);
    expect(entry.y).toBe(20);
    expect(entry.visible).toBe(true);
    expect(entry.destroyed).toBe(false);
  });

  test('missing initialPosition seeds cache to (0, 0)', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    const entry = getWidget('w1')!;
    expect(entry.x).toBe(0);
    expect(entry.y).toBe(0);
  });
});

// ─── live-state mutators ─────────────────────────────────────────────────────

describe('updatePosition / updateVisibility', () => {
  test('updatePosition mutates x/y on a live entry', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    updatePosition('w1', 42, 99);
    const entry = getWidget('w1')!;
    expect(entry.x).toBe(42);
    expect(entry.y).toBe(99);
  });

  test('updateVisibility mutates visible flag', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    updateVisibility('w1', false);
    expect(getWidget('w1')!.visible).toBe(false);
  });

  test('mutators are no-ops on destroyed entries', () => {
    registerWidget('w1', 'fw_1', 's1', {
      width: 100, height: 50, initialPosition: { x: 5, y: 5 },
    });
    destroyWidget('w1');
    updatePosition('w1', 200, 300);
    updateVisibility('w1', false);
    const entry = getWidget('w1')!;
    expect(entry.x).toBe(5);
    expect(entry.y).toBe(5);
    expect(entry.visible).toBe(true);
  });
});

// ─── listReplayMessages ──────────────────────────────────────────────────────

describe('listReplayMessages', () => {
  test('empty registry returns []', () => {
    expect(listReplayMessages()).toEqual([]);
  });

  test('emits create with the original options for each live widget', () => {
    registerWidget('w1', 'fw_1', 's1', {
      width: 200, height: 80,
      initialPosition: { x: 10, y: 20 },
      snapToEdge: true,
      tooltip: 'tip',
      chromeless: true,
    });

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);  // no move (x/y still match initial), visible
    const msg = msgs[0]!;
    if (msg.type !== 'ls_float_widget_create') throw new Error('unreachable');
    expect(msg.scriptId).toBe('s1');
    expect(msg.widgetId).toBe('w1');
    expect(msg.rootElementId).toBe('fw_1');
    expect(msg.options.width).toBe(200);
    expect(msg.options.height).toBe(80);
    expect(msg.options.initialPosition).toEqual({ x: 10, y: 20 });
    expect(msg.options.snapToEdge).toBe(true);
    expect(msg.options.tooltip).toBe('tip');
    expect(msg.options.chromeless).toBe(true);
  });

  test('emits ls_float_widget_move iff cached (x, y) differs from initial', () => {
    registerWidget('w1', 'fw_1', 's1', {
      width: 100, height: 50, initialPosition: { x: 10, y: 20 },
    });
    updatePosition('w1', 100, 200);

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(2);
    expect(msgs[0]!.type).toBe('ls_float_widget_create');
    const move = msgs[1]!;
    if (move.type !== 'ls_float_widget_move') throw new Error('unreachable');
    expect(move.widgetId).toBe('w1');
    expect(move.x).toBe(100);
    expect(move.y).toBe(200);
  });

  test('no move message when cached position equals initial', () => {
    registerWidget('w1', 'fw_1', 's1', {
      width: 100, height: 50, initialPosition: { x: 10, y: 20 },
    });
    updatePosition('w1', 10, 20);  // same as initial
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_float_widget_create');
  });

  test('emits set_visible: false iff widget is hidden', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    updateVisibility('w1', false);

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(2);
    expect(msgs[0]!.type).toBe('ls_float_widget_create');
    const vis = msgs[1]!;
    if (vis.type !== 'ls_float_widget_set_visible') throw new Error('unreachable');
    expect(vis.visible).toBe(false);
  });

  test('no set_visible when widget is visible (default)', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    expect(msgs[0]!.type).toBe('ls_float_widget_create');
  });

  test('create + move + set_visible all interleave correctly', () => {
    registerWidget('w1', 'fw_1', 's1', {
      width: 100, height: 50, initialPosition: { x: 0, y: 0 },
    });
    updatePosition('w1', 50, 50);
    updateVisibility('w1', false);

    const msgs = listReplayMessages();
    expect(msgs.map(m => m.type)).toEqual([
      'ls_float_widget_create',
      'ls_float_widget_move',
      'ls_float_widget_set_visible',
    ]);
  });

  test('destroyed widgets are excluded from replay', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    registerWidget('w2', 'fw_2', 's1', { width: 200, height: 100 });
    destroyWidget('w1');

    const msgs = listReplayMessages();
    expect(msgs).toHaveLength(1);
    const msg = msgs[0]!;
    if (msg.type !== 'ls_float_widget_create') throw new Error('unreachable');
    expect(msg.widgetId).toBe('w2');
  });

  test('multiple live widgets all appear in replay', () => {
    registerWidget('w1', 'fw_1', 'script-A', { width: 100, height: 50 });
    registerWidget('w2', 'fw_2', 'script-B', { width: 200, height: 100 });
    expect(listReplayMessages()).toHaveLength(2);
    expect(countLiveWidgetsByScript('script-A')).toBe(1);
    expect(countLiveWidgetsByScript('script-B')).toBe(1);
  });

  test('dropped entries are gone from replay (belt + suspenders)', () => {
    registerWidget('w1', 'fw_1', 's1', { width: 100, height: 50 });
    destroyWidget('w1');
    dropEntry('w1');
    expect(listReplayMessages()).toEqual([]);
    expect(liveWidgetsByScript('s1')).toEqual([]);
  });
});
