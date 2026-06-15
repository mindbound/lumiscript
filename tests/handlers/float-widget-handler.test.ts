/**
 * Unit tests for `src/float-widget-handler.ts`.
 *
 * The handler routes `ls_float_widget_*` messages to `ctx.ui.createFloatWidget`,
 * keyed by `widgetId`. On create it forwards the widget options, stamps + binds
 * the handle's `.root`, wires `handle.onDragEnd(pos => ...)` →
 * `ls_float_widget_drag_end` echo (carrying x/y from the pos arg), and posts an
 * `ls_float_widget_created` Option-B echo. move / set-visible / destroy route to
 * the stored handle.
 *
 * Same `install()` template as `tests/dom-handler-dom.test.ts`; mock `ctx`
 * exposes only `ctx.ui.createFloatWidget`. No `useDOM()` (only
 * `handle.root.setAttribute` + the Map-backed bind helpers are touched).
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { installFloatWidgetHandler } from '../../src/float-widget-handler.js';

let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
});

function makeRoot() {
  return {
    setAttribute: mock((_k: string, _v: string) => {}),
    removeEventListener: mock(() => {}),
  };
}

function install(opts?: { createThrows?: boolean }) {
  const handles: Array<{
    root: ReturnType<typeof makeRoot>;
    onDragEnd: ReturnType<typeof mock>;
    moveTo: ReturnType<typeof mock>;
    setVisible: ReturnType<typeof mock>;
    destroy: ReturnType<typeof mock>;
    fireDragEnd?: (pos: { x: number; y: number }) => void;
  }> = [];

  const createFloatWidget = mock((_o: Record<string, unknown>) => {
    if (opts?.createThrows) throw new Error('host rejected createFloatWidget');
    const handle: any = {
      root: makeRoot(),
      onDragEnd: mock((cb: (pos: { x: number; y: number }) => void) => { handle.fireDragEnd = cb; }),
      moveTo: mock((_x: number, _y: number) => {}),
      setVisible: mock((_v: boolean) => {}),
      destroy: mock(() => {}),
    };
    handles.push(handle);
    return handle;
  });

  const ctx = { ui: { createFloatWidget } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  activeCleanup = installFloatWidgetHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return () => {}; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, createFloatWidget, handles };
}

/** Create a single widget (w1). */
function createOne(opts?: Parameters<typeof install>[0]) {
  const inst = install(opts);
  inst.handler({
    type: 'ls_float_widget_create',
    scriptId: 's1', widgetId: 'w1', rootElementId: 'root-1',
    options: { width: 320, height: 240, snapToEdge: true, tooltip: 'tip', chromeless: false },
  });
  return inst;
}

describe('float-widget-handler — create', () => {
  test('forwards the widget options to ctx.ui.createFloatWidget', () => {
    const { createFloatWidget } = createOne();
    expect(createFloatWidget).toHaveBeenCalledTimes(1);
    expect(createFloatWidget.mock.calls[0]![0]).toMatchObject({
      width: 320, height: 240, snapToEdge: true, tooltip: 'tip', chromeless: false,
    });
  });

  test('stamps data-ls-script + data-ls-widget on the bound root', () => {
    const { handles } = createOne();
    const root = handles[0]!.root;
    expect(root.setAttribute).toHaveBeenCalledWith('data-ls-script', 's1');
    expect(root.setAttribute).toHaveBeenCalledWith('data-ls-widget', 'w1');
  });

  test('wires onDragEnd → ls_float_widget_drag_end (carrying pos x/y) and posts the created confirm', () => {
    const { sent, handles } = createOne();
    expect(sent).toContainEqual({ type: 'ls_float_widget_created', widgetId: 'w1' });

    expect(handles[0]!.onDragEnd).toHaveBeenCalledTimes(1);
    handles[0]!.fireDragEnd!({ x: 12, y: 34 });
    expect(sent).toContainEqual({ type: 'ls_float_widget_drag_end', widgetId: 'w1', x: 12, y: 34 });
  });

  test('createFloatWidget throwing logs a warn and skips the echo', () => {
    const warn = mock(() => {});
    const orig = console.warn;
    console.warn = warn as any;
    try {
      const inst = createOne({ createThrows: true });
      expect(warn).toHaveBeenCalledTimes(1);
      expect(inst.sent.find((m) => m.type === 'ls_float_widget_created')).toBeUndefined();
    } finally {
      console.warn = orig;
    }
  });

  test('duplicate create for the same widgetId destroys the prior handle first', () => {
    const inst = createOne();
    inst.handler({
      type: 'ls_float_widget_create',
      scriptId: 's1', widgetId: 'w1', rootElementId: 'root-2',
      options: { width: 100, height: 100 },
    });
    expect(inst.createFloatWidget).toHaveBeenCalledTimes(2);
    expect(inst.handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(inst.handles[1]!.destroy).not.toHaveBeenCalled();
  });
});

describe('float-widget-handler — move / set-visible / destroy routing', () => {
  test('ls_float_widget_move forwards x/y to handle.moveTo', () => {
    const { handler, handles } = createOne();
    handler({ type: 'ls_float_widget_move', widgetId: 'w1', x: 50, y: 60 });
    expect(handles[0]!.moveTo).toHaveBeenCalledWith(50, 60);
  });

  test('ls_float_widget_set_visible forwards to handle.setVisible', () => {
    const { handler, handles } = createOne();
    handler({ type: 'ls_float_widget_set_visible', widgetId: 'w1', visible: false });
    expect(handles[0]!.setVisible).toHaveBeenCalledWith(false);
  });

  test('move / set-visible for an unknown widgetId are no-ops', () => {
    const { handler, handles } = createOne();
    handler({ type: 'ls_float_widget_move', widgetId: 'ghost', x: 1, y: 2 });
    handler({ type: 'ls_float_widget_set_visible', widgetId: 'ghost', visible: true });
    expect(handles[0]!.moveTo).not.toHaveBeenCalled();
    expect(handles[0]!.setVisible).not.toHaveBeenCalled();
  });

  test('ls_float_widget_destroy destroys + forgets the widget (later ops no-op)', () => {
    const { handler, handles } = createOne();
    handler({ type: 'ls_float_widget_destroy', widgetId: 'w1' });
    expect(handles[0]!.destroy).toHaveBeenCalledTimes(1);
    handler({ type: 'ls_float_widget_move', widgetId: 'w1', x: 1, y: 1 });
    expect(handles[0]!.moveTo).not.toHaveBeenCalled();
  });
});

describe('float-widget-handler — filtering + cleanup', () => {
  test('unrelated message types are ignored', () => {
    const { handler, createFloatWidget, sent } = install();
    handler({ type: 'ls_drawer_tab_register', scriptId: 's1', tabId: 't1', rootElementId: 'r', options: { id: 'x', title: 'y' } });
    expect(createFloatWidget).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });

  test('install cleanup destroys every live widget', () => {
    const inst = createOne();
    inst.handler({
      type: 'ls_float_widget_create',
      scriptId: 's1', widgetId: 'w2', rootElementId: 'root-2', options: { width: 10, height: 10 },
    });
    activeCleanup!();
    activeCleanup = undefined;
    expect(inst.handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(inst.handles[1]!.destroy).toHaveBeenCalledTimes(1);
  });
});
