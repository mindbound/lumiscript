/**
 * Unit tests for `src/app-mount-handler.ts`.
 *
 * The handler is a message-router: it consumes `ls_app_mount_*` messages from
 * the backend, calls `ctx.ui.mountApp(...)`, stamps + binds the returned
 * handle's `.root`, stores the handle in a module-level `mounts` map, and posts
 * an `ls_app_mount_created` Option-B echo back to the backend. set-visible /
 * destroy route to the stored handle.
 *
 * Mirrors the `install()` template from `tests/dom-handler-dom.test.ts`: a mock
 * `ctx` (cast `as any`) exposing ONLY the surface this handler touches
 * (`ctx.ui.mountApp`), the backend-message handler captured via the
 * `onBackendMessage` arg, and a `sent[]` array collecting `sendToBackend`.
 *
 * No `useDOM()` — the handler only calls `handle.root.setAttribute(...)` and
 * `bindExternalElement`/`unbindExternalElement` (a plain Map .set/.delete +
 * removeEventListener-on-an-element). A mock `.root` with `setAttribute` /
 * `removeEventListener` mocks satisfies both without a real DOM.
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { installAppMountHandler } from '../../src/app-mount-handler.js';

let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
});

/** A mock host `.root` element — supports the two methods the handler calls on
 *  it (`setAttribute`) plus `removeEventListener` (reached via
 *  `unbindExternalElement` on destroy if the id was ever listened on). */
function makeRoot() {
  return {
    setAttribute: mock((_k: string, _v: string) => {}),
    removeEventListener: mock(() => {}),
  };
}

function install(opts?: { mountAppThrows?: boolean }) {
  // Each mountApp call returns a fresh handle so multi-mount tests can assert
  // per-handle. The handle.root is the mock element bound into the DOM map.
  const handles: Array<{
    root: ReturnType<typeof makeRoot>;
    setVisible: ReturnType<typeof mock>;
    destroy: ReturnType<typeof mock>;
  }> = [];
  const mountApp = mock((_opts: Record<string, unknown>) => {
    if (opts?.mountAppThrows) throw new Error('host rejected mountApp');
    const handle = {
      root: makeRoot(),
      setVisible: mock((_v: boolean) => {}),
      destroy: mock(() => {}),
    };
    handles.push(handle);
    return handle;
  });

  const ctx = { ui: { mountApp } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  activeCleanup = installAppMountHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return () => {}; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, mountApp, handles };
}

describe('app-mount-handler — create', () => {
  test('ls_app_mount_create calls ctx.ui.mountApp, stamps the root, and echoes ls_app_mount_created', () => {
    const { handler, sent, mountApp, handles } = install();
    handler({
      type: 'ls_app_mount_create',
      scriptId: 's1', mountId: 'm1', rootElementId: 'root-1',
      options: { className: 'cls', position: 'end' },
    });

    // mountApp called with the forwarded options (className + position only).
    expect(mountApp).toHaveBeenCalledTimes(1);
    expect(mountApp.mock.calls[0]![0]).toEqual({ className: 'cls', position: 'end' });

    // root stamped for @scope CSS matching + mount targeting.
    const root = handles[0]!.root;
    expect(root.setAttribute).toHaveBeenCalledWith('data-ls-script', 's1');
    expect(root.setAttribute).toHaveBeenCalledWith('data-ls-mount', 'm1');

    // Option-B confirm echo.
    expect(sent).toContainEqual({ type: 'ls_app_mount_created', mountId: 'm1' });
  });

  test('mountApp throwing surfaces to console.warn and skips the echo (no created message)', () => {
    const warn = mock(() => {});
    const orig = console.warn;
    console.warn = warn as any;
    try {
      const { handler, sent } = install({ mountAppThrows: true });
      handler({
        type: 'ls_app_mount_create',
        scriptId: 's1', mountId: 'm1', rootElementId: 'root-1', options: {},
      });
      expect(warn).toHaveBeenCalledTimes(1);
      expect(sent.find((m) => m.type === 'ls_app_mount_created')).toBeUndefined();
    } finally {
      console.warn = orig;
    }
  });

  test('duplicate create for the same mountId destroys the prior handle before re-mounting', () => {
    const { handler, mountApp, handles } = install();
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'root-1', options: {} });
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'root-2', options: {} });

    // Two mounts requested; the first handle was torn down before the second.
    expect(mountApp).toHaveBeenCalledTimes(2);
    expect(handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(handles[1]!.destroy).not.toHaveBeenCalled();
  });
});

describe('app-mount-handler — set-visible / destroy routing', () => {
  test('ls_app_mount_set_visible forwards to the stored handle', () => {
    const { handler, handles } = install();
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'root-1', options: {} });
    handler({ type: 'ls_app_mount_set_visible', mountId: 'm1', visible: false });
    expect(handles[0]!.setVisible).toHaveBeenCalledWith(false);
  });

  test('ls_app_mount_set_visible is a no-op for an unknown mountId', () => {
    const { handler, handles } = install();
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'root-1', options: {} });
    handler({ type: 'ls_app_mount_set_visible', mountId: 'ghost', visible: true });
    expect(handles[0]!.setVisible).not.toHaveBeenCalled();
  });

  test('ls_app_mount_destroy destroys the handle and forgets it (later ops no-op)', () => {
    const { handler, handles } = install();
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'root-1', options: {} });
    handler({ type: 'ls_app_mount_destroy', mountId: 'm1' });
    expect(handles[0]!.destroy).toHaveBeenCalledTimes(1);

    // After destroy the id is gone — a follow-up set-visible finds nothing.
    handler({ type: 'ls_app_mount_set_visible', mountId: 'm1', visible: true });
    expect(handles[0]!.setVisible).not.toHaveBeenCalled();
  });

  test('ls_app_mount_destroy is a no-op for an unknown mountId', () => {
    const { handler } = install();
    // No throw, nothing tracked.
    expect(() => handler({ type: 'ls_app_mount_destroy', mountId: 'nope' })).not.toThrow();
  });
});

describe('app-mount-handler — filtering + cleanup', () => {
  test('unrelated message types are ignored (not routed to mountApp)', () => {
    const { handler, mountApp, sent } = install();
    handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#x', html: '', position: 'beforeend' });
    handler({ type: 'ls_float_widget_create' });
    expect(mountApp).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });

  test('install cleanup destroys every live mount', () => {
    const { handler, handles } = install();
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm1', rootElementId: 'root-1', options: {} });
    handler({ type: 'ls_app_mount_create', scriptId: 's1', mountId: 'm2', rootElementId: 'root-2', options: {} });

    activeCleanup!();
    activeCleanup = undefined;

    expect(handles[0]!.destroy).toHaveBeenCalledTimes(1);
    expect(handles[1]!.destroy).toHaveBeenCalledTimes(1);
  });
});
