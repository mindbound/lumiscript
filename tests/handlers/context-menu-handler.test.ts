/**
 * Unit tests for `src/context-menu-handler.ts`.
 *
 * The handler is a pure request→response bridge: it listens for
 * `ls_context_menu_show`, calls `ctx.ui.showContextMenu(options)`, and echoes
 * the chosen key back via `ls_context_menu_result` keyed by `requestId`. There
 * is no module-level state and no DOM access, so these tests build a minimal
 * inline mock `ctx` (only `ui.showContextMenu`) and assert the ctx call + the
 * outgoing message. The handler body is `async` (awaits the showContextMenu
 * promise), so we `await` a microtask before asserting `sent[]`.
 *
 * Follows the `install()`/`sent[]` pattern from `tests/dom-handler-dom.test.ts`.
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { installContextMenuHandler } from '../../src/context-menu-handler.js';

let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
});

/** Yield to the microtask queue so an awaited ctx promise settles. */
const flush = () => new Promise<void>((r) => setTimeout(r, 0));

/**
 * Install the context-menu handler with an inline mock `ctx` exposing only
 * `ui.showContextMenu`. `result` controls what that mock resolves to (or pass
 * a rejected promise / thrown error via `reject`).
 */
function install(opts?: {
  result?: { selectedKey: string | null };
  reject?: unknown;
}) {
  const showContextMenu = mock((_options: unknown) => {
    if (opts?.reject !== undefined) return Promise.reject(opts.reject);
    return Promise.resolve(opts?.result ?? { selectedKey: null });
  });
  const ctx = { ui: { showContextMenu } } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  const unsub = mock(() => {});
  activeCleanup = installContextMenuHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return unsub; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, showContextMenu, unsub };
}

const showMsg = (overrides: Record<string, unknown> = {}) => ({
  type: 'ls_context_menu_show',
  requestId: 'req-1',
  options: {
    position: { x: 10, y: 20 },
    items: [
      { key: 'a', label: 'Alpha' },
      { key: 'b', label: 'Beta' },
    ],
  },
  ...overrides,
});

describe('context-menu-handler — request/response routing', () => {
  test('forwards position + items to ctx.ui.showContextMenu', async () => {
    const { handler, showContextMenu } = install({ result: { selectedKey: 'a' } });
    handler(showMsg());
    await flush();

    expect(showContextMenu).toHaveBeenCalledTimes(1);
    const arg = showContextMenu.mock.calls[0]![0] as any;
    expect(arg.position).toEqual({ x: 10, y: 20 });
    expect(arg.items).toEqual([
      { key: 'a', label: 'Alpha' },
      { key: 'b', label: 'Beta' },
    ]);
  });

  test('echoes the selected key back, correlated by requestId', async () => {
    const { handler, sent } = install({ result: { selectedKey: 'b' } });
    handler(showMsg({ requestId: 'req-42' }));
    await flush();

    const res = sent.find((m) => m.type === 'ls_context_menu_result');
    expect(res).toBeDefined();
    expect(res.requestId).toBe('req-42');
    expect(res.selectedKey).toBe('b');
  });

  test('echoes null when the menu was dismissed (selectedKey: null)', async () => {
    const { handler, sent } = install({ result: { selectedKey: null } });
    handler(showMsg());
    await flush();

    const res = sent.find((m) => m.type === 'ls_context_menu_result');
    expect(res.requestId).toBe('req-1');
    expect(res.selectedKey).toBeNull();
  });

  test('host throw resolves the request with null (never hangs the backend)', async () => {
    const { handler, sent } = install({ reject: new Error('bad options') });
    handler(showMsg({ requestId: 'req-err' }));
    await flush();

    // Per the handler doc: a host error falls through to a null result so the
    // backend's awaiting promise still resolves rather than hanging.
    const res = sent.find((m) => m.type === 'ls_context_menu_result');
    expect(res).toBeDefined();
    expect(res.requestId).toBe('req-err');
    expect(res.selectedKey).toBeNull();
  });

  test('ignores unrelated message types (no ctx call, nothing sent)', async () => {
    const { handler, sent, showContextMenu } = install();
    handler({ type: 'ls_modal_open', modalId: 'm1' });
    handler({ type: 'some_other_thing' });
    await flush();

    expect(showContextMenu).not.toHaveBeenCalled();
    expect(sent.length).toBe(0);
  });

  test('cleanup calls the onBackendMessage unsubscribe', async () => {
    const { unsub } = install({ result: { selectedKey: 'a' } });
    expect(unsub).not.toHaveBeenCalled();
    activeCleanup?.();
    activeCleanup = undefined;
    expect(unsub).toHaveBeenCalledTimes(1);
  });
});
