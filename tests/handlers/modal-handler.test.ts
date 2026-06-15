/**
 * Unit tests for `src/modal-handler.ts`.
 *
 * Unlike the context-menu / pick-file bridges, this handler is stateful: it
 * keeps a module-level `modalId → OpenModal` map, drives `ctx.ui.showModal`
 * (which returns a handle synchronously), binds the modal body element into the
 * shared DOM element map via `bindExternalElement`, tags `handle.root` with
 * `data-ls-script` / `data-ls-modal` attributes, wires the host `onDismiss`
 * echo, and posts `ls_modal_opened` / `ls_modal_dismissed` back.
 *
 * Because the handler calls `handle.root.setAttribute(...)`, the mock handle's
 * `root` must be a real Element — hence `useDOM()`. The handler is synchronous,
 * so no microtask flush is needed.
 *
 * The module-level `modals` map is NOT reset by the global preload; the install
 * cleanup (called in `afterEach`) dismisses every live modal and clears the
 * map, so state never leaks across cases.
 *
 * Follows the `install()`/`sent[]` pattern from `tests/dom-handler-dom.test.ts`.
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { useDOM } from '../_infra/dom-env.js';
import { installModalHandler } from '../../src/modal-handler.js';

useDOM();

let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
  document.body.innerHTML = '';
});

/**
 * Build a host-faithful mock SpindleModalHandle. `root` is a real <div> so the
 * handler's `setAttribute` calls work and we can assert the tags. `onDismiss`
 * captures the callback so a test can fire it (simulating a user close); it
 * returns an unsub mock. `dismissThrows` makes `dismiss()` throw to exercise the
 * synthesize-echo fallback in the `ls_modal_dismiss` path.
 */
function makeHandle(modalId: string, opts?: { dismissThrows?: boolean }) {
  const root = document.createElement('div');
  let dismissCb: (() => void) | undefined;
  const handle = {
    root,
    modalId,
    dismiss: mock(() => {
      if (opts?.dismissThrows) throw new Error('already dismissed host-side');
      // Mirror the host: dismiss() drives the registered onDismiss callback.
      dismissCb?.();
    }),
    setTitle: mock((_t: string) => {}),
    onDismiss: mock((cb: () => void) => {
      dismissCb = cb;
      return mock(() => {});
    }),
  };
  return {
    handle,
    /** Simulate a user-initiated close (host fires onDismiss out of band). */
    fireDismiss: () => dismissCb?.(),
  };
}

/**
 * Install the modal handler with an inline mock `ctx`. `showModal` returns the
 * provided handle (default: a fresh one per call keyed by the open message's
 * modalId). Pass `showModalThrows` to exercise the open-failure echo path.
 */
function install(opts?: {
  handleFor?: (modalId: string) => { handle: any; fireDismiss: () => void };
  showModalThrows?: boolean;
}) {
  // Map modalId → the harness handle bundle so a test can reach fireDismiss.
  const handles = new Map<string, { handle: any; fireDismiss: () => void }>();
  // The handler calls showModal with options only (no modalId). We assign the
  // handle on the NEXT open by tracking the last open message's modalId.
  let pendingModalId = '';
  const showModal = mock((_options: unknown) => {
    if (opts?.showModalThrows) throw new Error('stack limit');
    const bundle = opts?.handleFor
      ? opts.handleFor(pendingModalId)
      : makeHandle(pendingModalId);
    handles.set(pendingModalId, bundle);
    return bundle.handle;
  });
  const ctx = { ui: { showModal } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  const unsub = mock(() => {});
  activeCleanup = installModalHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return unsub; },
    (m: any) => sent.push(m),
  );

  const open = (msg: { scriptId: string; modalId: string; rootElementId: string; options: any }) => {
    pendingModalId = msg.modalId;
    handler({ type: 'ls_modal_open', ...msg });
  };

  return {
    handler,
    sent,
    showModal,
    unsub,
    open,
    handleFor: (modalId: string) => handles.get(modalId),
  };
}

const openMsg = (overrides: Partial<{ scriptId: string; modalId: string; rootElementId: string; options: any }> = {}) => ({
  scriptId: 's1',
  modalId: 'm1',
  rootElementId: 'root-m1',
  options: { title: 'Hello', width: 400, maxHeight: 500, persistent: false },
  ...overrides,
});

describe('modal-handler — open', () => {
  test('ls_modal_open calls ctx.ui.showModal with the option fields', () => {
    const { open, showModal } = install();
    open(openMsg());

    expect(showModal).toHaveBeenCalledTimes(1);
    const arg = showModal.mock.calls[0]![0] as any;
    expect(arg.title).toBe('Hello');
    expect(arg.width).toBe(400);
    expect(arg.maxHeight).toBe(500);
    expect(arg.persistent).toBe(false);
  });

  test('tags handle.root with data-ls-script + data-ls-modal and posts ls_modal_opened', () => {
    const { open, sent, handleFor } = install();
    open(openMsg({ scriptId: 'scriptX', modalId: 'mX' }));

    const bundle = handleFor('mX')!;
    expect(bundle.handle.root.getAttribute('data-ls-script')).toBe('scriptX');
    expect(bundle.handle.root.getAttribute('data-ls-modal')).toBe('mX');

    const opened = sent.find((m) => m.type === 'ls_modal_opened');
    expect(opened).toBeDefined();
    expect(opened.modalId).toBe('mX');
    expect(bundle.handle.onDismiss).toHaveBeenCalledTimes(1);
  });

  test('a duplicate open for the same modalId is ignored (no second showModal)', () => {
    const { open, showModal, sent } = install();
    open(openMsg({ modalId: 'dup' }));
    open(openMsg({ modalId: 'dup' }));

    expect(showModal).toHaveBeenCalledTimes(1);
    expect(sent.filter((m) => m.type === 'ls_modal_opened')).toHaveLength(1);
  });

  test('open failure (showModal throws) echoes ls_modal_dismissed, no ls_modal_opened', () => {
    const { open, sent } = install({ showModalThrows: true });
    open(openMsg({ modalId: 'mFail' }));

    expect(sent.find((m) => m.type === 'ls_modal_opened')).toBeUndefined();
    const dismissed = sent.find((m) => m.type === 'ls_modal_dismissed');
    expect(dismissed).toBeDefined();
    expect(dismissed.modalId).toBe('mFail');
  });
});

describe('modal-handler — set title', () => {
  test('ls_modal_set_title forwards to handle.setTitle for an open modal', () => {
    const { open, handler, handleFor } = install();
    open(openMsg({ modalId: 'm1' }));
    handler({ type: 'ls_modal_set_title', modalId: 'm1', title: 'Renamed' });

    expect(handleFor('m1')!.handle.setTitle).toHaveBeenCalledWith('Renamed');
  });

  test('ls_modal_set_title is a no-op for an unknown modalId', () => {
    const { open, handler, handleFor } = install();
    open(openMsg({ modalId: 'm1' }));
    // Should not throw, and the known modal's setTitle must not be touched.
    handler({ type: 'ls_modal_set_title', modalId: 'ghost', title: 'X' });
    expect(handleFor('m1')!.handle.setTitle).not.toHaveBeenCalled();
  });
});

describe('modal-handler — dismiss', () => {
  test('ls_modal_dismiss calls handle.dismiss(); the host onDismiss echo sends ls_modal_dismissed once', () => {
    const { open, handler, sent, handleFor } = install();
    open(openMsg({ modalId: 'm1' }));
    handler({ type: 'ls_modal_dismiss', modalId: 'm1' });

    // makeHandle's dismiss() fires the registered onDismiss callback (host-faithful),
    // which is the only path that sends the echo.
    expect(handleFor('m1')!.handle.dismiss).toHaveBeenCalledTimes(1);
    expect(sent.filter((m) => m.type === 'ls_modal_dismissed')).toHaveLength(1);
    expect(sent.find((m) => m.type === 'ls_modal_dismissed').modalId).toBe('m1');
  });

  test('user-initiated dismissal (host fires onDismiss) echoes exactly once', () => {
    const { open, sent, handleFor } = install();
    open(openMsg({ modalId: 'm1' }));

    handleFor('m1')!.fireDismiss();   // user closes the modal
    handleFor('m1')!.fireDismiss();   // double-fire — echoed guard must dedupe

    expect(sent.filter((m) => m.type === 'ls_modal_dismissed')).toHaveLength(1);
  });

  test('after dismissal the modal is forgotten (set_title becomes a no-op)', () => {
    const { open, handler, handleFor } = install();
    open(openMsg({ modalId: 'm1' }));
    const bundle = handleFor('m1')!;
    bundle.fireDismiss(); // forget it

    handler({ type: 'ls_modal_set_title', modalId: 'm1', title: 'late' });
    expect(bundle.handle.setTitle).not.toHaveBeenCalled();
  });

  test('ls_modal_dismiss when handle.dismiss() throws synthesizes the echo itself', () => {
    const { open, handler, sent, handleFor } = install({
      handleFor: (id) => makeHandle(id, { dismissThrows: true }),
    });
    open(openMsg({ modalId: 'm1' }));
    handler({ type: 'ls_modal_dismiss', modalId: 'm1' });

    // dismiss() threw → the catch branch sends the echo directly.
    expect(handleFor('m1')!.handle.dismiss).toHaveBeenCalledTimes(1);
    expect(sent.filter((m) => m.type === 'ls_modal_dismissed')).toHaveLength(1);
    expect(sent.find((m) => m.type === 'ls_modal_dismissed').modalId).toBe('m1');
  });

  test('ls_modal_dismiss is a no-op for an unknown modalId', () => {
    const { handler, sent } = install();
    // Nothing open under 'ghost' — must not throw, must not echo.
    handler({ type: 'ls_modal_dismiss', modalId: 'ghost' });
    expect(sent.find((m) => m.type === 'ls_modal_dismissed')).toBeUndefined();
  });
});

describe('modal-handler — cleanup', () => {
  test('cleanup dismisses every live modal and detaches the subscription', () => {
    const { open, unsub, handleFor } = install();
    open(openMsg({ modalId: 'm1' }));
    open(openMsg({ modalId: 'm2', rootElementId: 'root-m2' }));
    const h1 = handleFor('m1')!.handle;
    const h2 = handleFor('m2')!.handle;

    activeCleanup?.();
    activeCleanup = undefined;

    expect(h1.dismiss).toHaveBeenCalledTimes(1);
    expect(h2.dismiss).toHaveBeenCalledTimes(1);
    expect(unsub).toHaveBeenCalledTimes(1);
  });

  test('ignores unrelated message types (no showModal call)', () => {
    const { handler, showModal, sent } = install();
    handler({ type: 'ls_context_menu_show', requestId: 'x' });
    handler({ type: 'dom_inject', elementId: 'e1' });
    expect(showModal).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });
});
