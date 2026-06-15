/**
 * Unit tests for `src/drawer-tab-handler.ts`.
 *
 * The handler routes `ls_drawer_tab_*` messages to `ctx.ui.registerDrawerTab`,
 * keyed by `${scriptId}:${tabId}`. On register it: forwards the full options
 * object, stamps + binds the handle's `.root`, wires `handle.onActivate(...)`
 * to echo `ls_drawer_tab_activated`, and posts an `ls_drawer_tab_registered`
 * Option-B echo. set-title / set-short-name / set-badge / activate / destroy
 * route to the stored handle.
 *
 * Same `install()` template as `tests/dom-handler-dom.test.ts`; mock `ctx`
 * exposes only `ctx.ui.registerDrawerTab`. No `useDOM()` (only
 * `handle.root.setAttribute` + the Map-backed bind helpers are touched).
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { installDrawerTabHandler } from '../../src/drawer-tab-handler.js';

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

function install(opts?: { registerThrows?: boolean }) {
  // Capture the onActivate callback per handle so tests can fire it.
  const handles: Array<{
    root: ReturnType<typeof makeRoot>;
    onActivate: ReturnType<typeof mock>;
    setTitle: ReturnType<typeof mock>;
    setShortName: ReturnType<typeof mock>;
    setBadge: ReturnType<typeof mock>;
    activate: ReturnType<typeof mock>;
    destroy: ReturnType<typeof mock>;
    fireActivate?: () => void;
  }> = [];

  const registerDrawerTab = mock((_o: Record<string, unknown>) => {
    if (opts?.registerThrows) throw new Error('host rejected registerDrawerTab');
    const handle: any = {
      root: makeRoot(),
      onActivate: mock((cb: () => void) => { handle.fireActivate = cb; }),
      setTitle: mock((_t: string) => {}),
      setShortName: mock((_s: string) => {}),
      setBadge: mock((_b: string | null) => {}),
      activate: mock(() => {}),
      destroy: mock(() => {}),
    };
    handles.push(handle);
    return handle;
  });

  const ctx = { ui: { registerDrawerTab } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  activeCleanup = installDrawerTabHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return () => {}; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, registerDrawerTab, handles };
}

/** Register a single tab (s1:t1) and return the install result. */
function registerOne(opts?: Parameters<typeof install>[0]) {
  const inst = install(opts);
  inst.handler({
    type: 'ls_drawer_tab_register',
    scriptId: 's1', tabId: 't1', rootElementId: 'root-1',
    options: { id: 'tab-1', title: 'My Tab', shortName: 'MT', keywords: ['k'] },
  });
  return inst;
}

describe('drawer-tab-handler — register', () => {
  test('forwards the full options object to ctx.ui.registerDrawerTab', () => {
    const { registerDrawerTab } = registerOne();
    expect(registerDrawerTab).toHaveBeenCalledTimes(1);
    const arg = registerDrawerTab.mock.calls[0]![0];
    expect(arg).toMatchObject({ id: 'tab-1', title: 'My Tab', shortName: 'MT', keywords: ['k'] });
    // Fields not supplied are forwarded as undefined (the handler spreads them all).
    expect(arg).toHaveProperty('description');
    expect(arg).toHaveProperty('iconSvg');
  });

  test('stamps data-ls-script + data-ls-tab on the bound root', () => {
    const { handles } = registerOne();
    const root = handles[0]!.root;
    expect(root.setAttribute).toHaveBeenCalledWith('data-ls-script', 's1');
    expect(root.setAttribute).toHaveBeenCalledWith('data-ls-tab', 't1');
  });

  test('wires onActivate → ls_drawer_tab_activated echo and posts the registered confirm', () => {
    const { sent, handles } = registerOne();
    // Option-B registered echo present.
    expect(sent).toContainEqual({ type: 'ls_drawer_tab_registered', scriptId: 's1', tabId: 't1' });

    // onActivate was wired; firing it posts an activation echo.
    expect(handles[0]!.onActivate).toHaveBeenCalledTimes(1);
    handles[0]!.fireActivate!();
    expect(sent).toContainEqual({ type: 'ls_drawer_tab_activated', scriptId: 's1', tabId: 't1' });
  });

  test('registerDrawerTab throwing logs a warn and skips the echo', () => {
    const warn = mock(() => {});
    const orig = console.warn;
    console.warn = warn as any;
    try {
      const inst = registerOne({ registerThrows: true });
      expect(warn).toHaveBeenCalledTimes(1);
      expect(inst.sent.find((m) => m.type === 'ls_drawer_tab_registered')).toBeUndefined();
    } finally {
      console.warn = orig;
    }
  });

  test('duplicate (scriptId,tabId) register destroys the prior handle first', () => {
    const inst = registerOne();
    inst.handler({
      type: 'ls_drawer_tab_register',
      scriptId: 's1', tabId: 't1', rootElementId: 'root-2',
      options: { id: 'tab-1', title: 'Again' },
    });
    expect(inst.registerDrawerTab).toHaveBeenCalledTimes(2);
    expect(inst.handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(inst.handles[1]!.destroy).not.toHaveBeenCalled();
  });
});

describe('drawer-tab-handler — mutation routing', () => {
  test('set_title / set_short_name / set_badge / activate forward to the stored handle', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_drawer_tab_set_title', scriptId: 's1', tabId: 't1', title: 'New Title' });
    handler({ type: 'ls_drawer_tab_set_short_name', scriptId: 's1', tabId: 't1', shortName: 'NT' });
    handler({ type: 'ls_drawer_tab_set_badge', scriptId: 's1', tabId: 't1', badge: '3' });
    handler({ type: 'ls_drawer_tab_activate', scriptId: 's1', tabId: 't1' });

    const h = handles[0]!;
    expect(h.setTitle).toHaveBeenCalledWith('New Title');
    expect(h.setShortName).toHaveBeenCalledWith('NT');
    expect(h.setBadge).toHaveBeenCalledWith('3');
    expect(h.activate).toHaveBeenCalledTimes(1);
  });

  test('set_badge with null forwards null (clear)', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_drawer_tab_set_badge', scriptId: 's1', tabId: 't1', badge: null });
    expect(handles[0]!.setBadge).toHaveBeenCalledWith(null);
  });

  test('mutation messages for an unknown (scriptId,tabId) are no-ops', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_drawer_tab_set_title', scriptId: 's1', tabId: 'ghost', title: 'X' });
    handler({ type: 'ls_drawer_tab_activate', scriptId: 'other', tabId: 't1' });
    expect(handles[0]!.setTitle).not.toHaveBeenCalled();
    expect(handles[0]!.activate).not.toHaveBeenCalled();
  });

  test('the (scriptId,tabId) key disambiguates same tabId across scripts', () => {
    const inst = registerOne();
    inst.handler({
      type: 'ls_drawer_tab_register',
      scriptId: 's2', tabId: 't1', rootElementId: 'root-2',
      options: { id: 'tab-1', title: 'S2 Tab' },
    });
    // setTitle to s2:t1 hits only the second handle.
    inst.handler({ type: 'ls_drawer_tab_set_title', scriptId: 's2', tabId: 't1', title: 'Only S2' });
    expect(inst.handles[0]!.setTitle).not.toHaveBeenCalled();
    expect(inst.handles[1]!.setTitle).toHaveBeenCalledWith('Only S2');
  });
});

describe('drawer-tab-handler — destroy + cleanup', () => {
  test('ls_drawer_tab_destroy destroys + forgets the tab (later ops no-op)', () => {
    const { handler, handles } = registerOne();
    handler({ type: 'ls_drawer_tab_destroy', scriptId: 's1', tabId: 't1' });
    expect(handles[0]!.destroy).toHaveBeenCalledTimes(1);
    handler({ type: 'ls_drawer_tab_set_title', scriptId: 's1', tabId: 't1', title: 'gone' });
    expect(handles[0]!.setTitle).not.toHaveBeenCalled();
  });

  test('unrelated message types are ignored', () => {
    const { handler, registerDrawerTab, sent } = install();
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'r', options: {} });
    expect(registerDrawerTab).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });

  test('install cleanup destroys every live tab', () => {
    const inst = registerOne();
    inst.handler({
      type: 'ls_drawer_tab_register',
      scriptId: 's1', tabId: 't2', rootElementId: 'root-2', options: { id: 'tab-2', title: 'T2' },
    });
    activeCleanup!();
    activeCleanup = undefined;
    expect(inst.handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(inst.handles[1]!.destroy).toHaveBeenCalledTimes(1);
  });
});
