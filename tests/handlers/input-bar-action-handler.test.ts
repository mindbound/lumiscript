/**
 * Unit tests for `src/input-bar-action-handler.ts`.
 *
 * The handler routes `ls_input_bar_action_*` messages to
 * `ctx.ui.registerInputBarAction`, keyed by `${scriptId}:${actionId}`. On
 * register it forwards the options (with `id` set to actionId), stores the
 * handle, wires `handle.onClick(...)` → `ls_input_bar_action_click` echo, and
 * posts an `ls_input_bar_action_registered` Option-B echo. set-label /
 * set-subtitle / set-enabled / destroy route to the stored handle.
 *
 * Notable branch: set-subtitle has a `typeof handle.setSubtitle === 'function'`
 * forward-compat guard (older hosts lack the method) — covered below by a
 * handle whose `setSubtitle` is intentionally absent.
 *
 * No `useDOM()` — this handler never touches the DOM or `bindExternalElement`
 * (input-bar actions have no `.root`); it only holds Spindle handles.
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { installInputBarActionHandler } from '../../src/input-bar-action-handler.js';

let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
});

function install(opts?: { registerThrows?: boolean; omitSetSubtitle?: boolean }) {
  const handles: Array<{
    onClick: ReturnType<typeof mock>;
    setLabel: ReturnType<typeof mock>;
    setSubtitle?: ReturnType<typeof mock>;
    setEnabled: ReturnType<typeof mock>;
    destroy: ReturnType<typeof mock>;
    fireClick?: () => void;
  }> = [];

  const registerInputBarAction = mock((_o: Record<string, unknown>) => {
    if (opts?.registerThrows) throw new Error('host rejected registerInputBarAction');
    const handle: any = {
      onClick: mock((cb: () => void) => { handle.fireClick = cb; }),
      setLabel: mock((_l: string) => {}),
      setEnabled: mock((_e: boolean) => {}),
      destroy: mock(() => {}),
    };
    // Forward-compat: older hosts don't expose setSubtitle on the handle.
    if (!opts?.omitSetSubtitle) handle.setSubtitle = mock((_s: string | undefined) => {});
    handles.push(handle);
    return handle;
  });

  const ctx = { ui: { registerInputBarAction } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  activeCleanup = installInputBarActionHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return () => {}; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, registerInputBarAction, handles };
}

/** Register a single action (s1:a1). */
function registerOne(opts?: Parameters<typeof install>[0]) {
  const inst = install(opts);
  inst.handler({
    type: 'ls_input_bar_action_register',
    scriptId: 's1', actionId: 'a1',
    options: { label: 'Do It', subtitle: 'sub', enabled: true },
  });
  return inst;
}

describe('input-bar-action-handler — register', () => {
  test('forwards options (id = actionId) to ctx.ui.registerInputBarAction', () => {
    const { registerInputBarAction } = registerOne();
    expect(registerInputBarAction).toHaveBeenCalledTimes(1);
    expect(registerInputBarAction.mock.calls[0]![0]).toMatchObject({
      id: 'a1', label: 'Do It', subtitle: 'sub', enabled: true,
    });
  });

  test('wires onClick → ls_input_bar_action_click and posts the registered confirm', () => {
    const { sent, handles } = registerOne();
    expect(sent).toContainEqual({ type: 'ls_input_bar_action_registered', scriptId: 's1', actionId: 'a1' });

    expect(handles[0]!.onClick).toHaveBeenCalledTimes(1);
    handles[0]!.fireClick!();
    expect(sent).toContainEqual({ type: 'ls_input_bar_action_click', scriptId: 's1', actionId: 'a1' });
  });

  test('registerInputBarAction throwing logs a warn and skips the echo', () => {
    const warn = mock(() => {});
    const orig = console.warn;
    console.warn = warn as any;
    try {
      const inst = registerOne({ registerThrows: true });
      expect(warn).toHaveBeenCalledTimes(1);
      expect(inst.sent.find((m) => m.type === 'ls_input_bar_action_registered')).toBeUndefined();
    } finally {
      console.warn = orig;
    }
  });

  test('duplicate (scriptId,actionId) register destroys the prior handle first', () => {
    const inst = registerOne();
    inst.handler({
      type: 'ls_input_bar_action_register',
      scriptId: 's1', actionId: 'a1', options: { label: 'Again' },
    });
    expect(inst.registerInputBarAction).toHaveBeenCalledTimes(2);
    expect(inst.handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(inst.handles[1]!.destroy).not.toHaveBeenCalled();
  });
});

describe('input-bar-action-handler — mutation routing', () => {
  test('set_label / set_enabled forward to the stored handle', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_input_bar_action_set_label', scriptId: 's1', actionId: 'a1', label: 'New' });
    handler({ type: 'ls_input_bar_action_set_enabled', scriptId: 's1', actionId: 'a1', enabled: false });
    expect(handles[0]!.setLabel).toHaveBeenCalledWith('New');
    expect(handles[0]!.setEnabled).toHaveBeenCalledWith(false);
  });

  test('set_subtitle forwards the value (string) to the handle', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_input_bar_action_set_subtitle', scriptId: 's1', actionId: 'a1', subtitle: 'two' });
    expect(handles[0]!.setSubtitle).toHaveBeenCalledWith('two');
  });

  test('set_subtitle forwards undefined (clear) to the handle', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_input_bar_action_set_subtitle', scriptId: 's1', actionId: 'a1', subtitle: undefined });
    expect(handles[0]!.setSubtitle).toHaveBeenCalledWith(undefined);
  });

  test('set_subtitle is a no-op (no throw) when the handle lacks setSubtitle (older host)', () => {
    const inst = registerOne({ omitSetSubtitle: true });
    expect(inst.handles[0]!.setSubtitle).toBeUndefined();
    // typeof guard short-circuits before calling — must not throw.
    expect(() =>
      inst.handler({ type: 'ls_input_bar_action_set_subtitle', scriptId: 's1', actionId: 'a1', subtitle: 'x' }),
    ).not.toThrow();
  });

  test('mutation messages for an unknown key are no-ops', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_input_bar_action_set_label', scriptId: 's1', actionId: 'ghost', label: 'X' });
    expect(handles[0]!.setLabel).not.toHaveBeenCalled();
  });

  test('the (scriptId,actionId) key disambiguates same actionId across scripts', () => {
    const inst = registerOne();
    inst.handler({
      type: 'ls_input_bar_action_register',
      scriptId: 's2', actionId: 'a1', options: { label: 'S2' },
    });
    inst.handler({ type: 'ls_input_bar_action_set_label', scriptId: 's2', actionId: 'a1', label: 'Only S2' });
    expect(inst.handles[0]!.setLabel).not.toHaveBeenCalled();
    expect(inst.handles[1]!.setLabel).toHaveBeenCalledWith('Only S2');
  });
});

describe('input-bar-action-handler — destroy + cleanup', () => {
  test('ls_input_bar_action_destroy destroys + forgets the action', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_input_bar_action_destroy', scriptId: 's1', actionId: 'a1' });
    expect(handles[0]!.destroy).toHaveBeenCalledTimes(1);
    handler({ type: 'ls_input_bar_action_set_label', scriptId: 's1', actionId: 'a1', label: 'gone' });
    expect(handles[0]!.setLabel).not.toHaveBeenCalled();
  });

  test('unrelated message types are ignored', () => {
    const { handler, registerInputBarAction, sent } = install();
    handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#x', html: '', position: 'beforeend' });
    expect(registerInputBarAction).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });

  test('install cleanup destroys every live action', () => {
    const inst = registerOne();
    inst.handler({
      type: 'ls_input_bar_action_register',
      scriptId: 's1', actionId: 'a2', options: { label: 'A2' },
    });
    activeCleanup!();
    activeCleanup = undefined;
    expect(inst.handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(inst.handles[1]!.destroy).toHaveBeenCalledTimes(1);
  });
});
