/**
 * DOM-backed tests for `src/dom-handler.ts`.
 *
 * These run against a real document via scoped happy-dom (see
 * `tests/_infra/dom-env.ts`) — the sibling `dom-handler.test.ts` covers the
 * pure helpers that need no DOM; this file covers behaviour that does.
 *
 * Centrepiece: the rc.9 `data-message-id` → host-contract hardening. Message
 * resolution now goes through `ctx.dom.getMessageId` / `findMessageElement`
 * instead of reading the host-private attribute directly. These tests drive the
 * real handler with a host-faithful mock `ctx.dom` and assert the contract is
 * exercised across all three sites: delegated-event message context, the
 * chat-scope delegation filter, and `injectAtMessage`.
 */
import { describe, test, expect, afterEach, mock } from 'bun:test';
import { useDOM } from './_infra/dom-env.js';
import { installDOMHandler } from '../src/dom-handler.js';

useDOM();

// installDOMHandler returns a teardown that clears the module-level delegation
// listeners / maps / elements; call it between tests so dom-handler state never
// leaks across cases (the global preload doesn't reset dom-handler internals).
let activeCleanup: (() => void) | undefined;

afterEach(() => {
  activeCleanup?.();
  activeCleanup = undefined;
  document.body.innerHTML = '';
});

/**
 * Install the DOM handler with a host-faithful mock `ctx.dom`:
 *   - `getMessageId`        mirrors the host (closest + getAttribute)
 *   - `findMessageElement`  mirrors the host (document.querySelector)
 *   - `inject`              minimal: insert the html, return the element
 * Returns the captured backend-message `handler` plus the `sent` array of
 * messages the handler posts back to the "backend".
 */
function install() {
  const findMessageElement = mock((id: string) =>
    document.querySelector(`[data-message-id="${id}"]`),
  );
  const inject = mock((target: string | Element, html: string, position: InsertPosition) => {
    // Mirror the host: a selector string is resolved via querySelector; the
    // at-message path passes an Element directly.
    const targetEl = typeof target === 'string' ? document.querySelector(target) : target;
    if (!targetEl) return null;
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const el = (tmp.firstElementChild ?? tmp) as Element;
    targetEl.insertAdjacentElement(position, el);
    return el;
  });
  // addStyle returns a (trackable) remover, mirroring the host's ctx.dom.addStyle.
  const addStyle = mock((_css: string) => mock(() => {}));
  // Shared host-component bridge mock (api.ui.components.*). The handle methods
  // are mocks so comp_update / destroy / get_value / invoke can be asserted; the
  // mount fn is named `mountSelect` so a `kind: 'select'` message resolves to it.
  const compHandle = {
    update:   mock((_p: Record<string, unknown>) => {}),
    destroy:  mock(() => {}),
    getValue: mock(() => 'the-value'),
    focus:    mock(() => {}),
  };
  const mountSelect = mock((_el: HTMLElement, _opts: Record<string, unknown>) => compHandle);
  const ctx = {
    dom: {
      getMessageId: (el: Element) =>
        el.closest('[data-message-id]')?.getAttribute('data-message-id') ?? null,
      findMessageElement,
      inject,
      addStyle,
    },
    components: { mountSelect },
  } as any;

  let handler!: (msg: unknown) => void;
  const sent: any[] = [];
  activeCleanup = installDOMHandler(
    ctx,
    (h: (msg: unknown) => void) => { handler = h; return () => {}; },
    (m: any) => sent.push(m),
  );
  return { handler, sent, findMessageElement, inject, addStyle, mountSelect, compHandle };
}

/** Poll until `pred()` is true (or time out) — for the MutationObserver-driven
 *  deferred-injection path, which resolves a tick after the bubble mounts. */
async function waitFor(pred: () => boolean, timeoutMs = 1000): Promise<void> {
  const start = Date.now();
  while (!pred()) {
    if (Date.now() - start > timeoutMs) throw new Error('waitFor: condition not met in time');
    await new Promise((r) => setTimeout(r, 5));
  }
}

describe('DOM test environment (infra smoke)', () => {
  test('happy-dom exposes a working document', () => {
    document.body.innerHTML =
      '<div data-message-id="m1"><div data-part="character">hello</div></div>';
    const row = document.querySelector('[data-message-id="m1"]');
    expect(row).not.toBeNull();
    expect(row?.querySelector('[data-part]')?.getAttribute('data-part')).toBe('character');
  });

  test('MutationObserver is available (used by waitForElement)', () => {
    expect(typeof MutationObserver).toBe('function');
  });
});

describe('data-message-id hardening — resolution via the host contract', () => {
  test('chat-scope delegated click resolves the message id via ctx.dom.getMessageId', () => {
    document.body.innerHTML =
      '<div data-message-id="m1"><div data-part="character"><button class="probe">x</button></div></div>';
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register',
      scriptId: 's1', delegationId: 'd1', selector: '.probe', event: 'click', root: 'chat',
    });

    document.querySelector<HTMLElement>('.probe')!.dispatchEvent(
      new MouseEvent('click', { bubbles: true }),
    );

    const evt = sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd1');
    expect(evt).toBeDefined();
    expect(evt.data.message?.id).toBe('m1');
    // data-part="character" → assistant (only 'user' maps to 'user')
    expect(evt.data.message?.role).toBe('assistant');
  });

  test('chat-scope delegation skips clicks outside any message (getMessageId → null)', () => {
    document.body.innerHTML = '<div class="outside"><button class="probe">x</button></div>';
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register',
      scriptId: 's1', delegationId: 'd2', selector: '.probe', event: 'click', root: 'chat',
    });

    document.querySelector<HTMLElement>('.probe')!.dispatchEvent(
      new MouseEvent('click', { bubbles: true }),
    );

    expect(sent.find((m) => m.type === 'dom_delegate_event')).toBeUndefined();
  });

  test('dom_inject_at_message resolves the bubble via ctx.dom.findMessageElement', () => {
    document.body.innerHTML =
      '<div data-message-id="m1"><div data-part="character">hi</div></div>';
    const { handler, findMessageElement } = install();
    handler({
      type: 'dom_inject_at_message',
      scriptId: 's1', elementId: 'e1', messageId: 'm1',
      html: '<span class="pill">P</span>', position: 'footer',
    });

    expect(findMessageElement).toHaveBeenCalledWith('m1');
    expect(document.querySelector('[data-message-id="m1"] .pill')).not.toBeNull();
  });

  test('chat-scope delegation honours a messageId filter (fires only for the bound message)', () => {
    document.body.innerHTML =
      '<div data-message-id="m1"><div data-part="character"><button class="probe">a</button></div></div>' +
      '<div data-message-id="m2"><div data-part="character"><button class="probe">b</button></div></div>';
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register',
      scriptId: 's1', delegationId: 'd3', selector: '.probe', event: 'click', root: 'chat', messageId: 'm1',
    });

    // Click inside m2 — filtered out (resolved id 'm2' !== bound 'm1').
    document.querySelector<HTMLElement>('[data-message-id="m2"] .probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(sent.find((m) => m.type === 'dom_delegate_event')).toBeUndefined();

    // Click inside m1 — fires.
    document.querySelector<HTMLElement>('[data-message-id="m1"] .probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(sent.find((m) => m.type === 'dom_delegate_event')?.data.message?.id).toBe('m1');
  });

  test('injectAtMessage waits for a not-yet-mounted bubble, then injects (finder-based waitForElement)', async () => {
    document.body.innerHTML = ''; // m1 not in the DOM yet (virtualized / off-screen)
    const { handler, findMessageElement } = install();
    handler({
      type: 'dom_inject_at_message',
      scriptId: 's1', elementId: 'e2', messageId: 'm1',
      html: '<span class="pill-late">P</span>', position: 'footer',
    });
    expect(document.querySelector('.pill-late')).toBeNull(); // nothing yet — bubble absent

    // Mount the bubble; the handler's MutationObserver should resolve and inject.
    const row = document.createElement('div');
    row.setAttribute('data-message-id', 'm1');
    row.innerHTML = '<div data-part="character">hi</div>';
    document.body.appendChild(row);

    await waitFor(() => document.querySelector('[data-message-id="m1"] .pill-late') !== null);
    expect(document.querySelector('[data-message-id="m1"] .pill-late')).not.toBeNull();
    expect(findMessageElement).toHaveBeenCalledWith('m1');
  });
});

// NOTE: `dom_update` and the scoped-inject path run `sanitizeUserHtml` → DOMPurify,
// which is import-bound to no-DOM in the unit env (`.sanitize` would throw). The
// global preload (`tests/_infra/setup.ts`) mocks `dompurify` to a passthrough so
// these handlers can be exercised for routing + content placement. The sanitizer's
// real STRIP behaviour is covered separately by the pure `buildSanitizerStripDetail`
// tests (synthetic entries) in the sibling `dom-handler.test.ts`.
describe('dom-handler core message types — inject / update / remove', () => {
  test('dom_inject inserts the wrapped content at the target and tracks the element', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler, inject } = install();
    handler({
      type: 'dom_inject', scriptId: 's1', elementId: 'e1',
      target: '#host', html: '<span class="injected">x</span>', position: 'beforeend',
    });
    expect(inject).toHaveBeenCalled();
    expect(document.querySelector('#host [data-ls-el="e1"] .injected')).not.toBeNull();
  });

  test('dom_update replaces the tracked element’s inner content', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler } = install();
    handler({
      type: 'dom_inject', scriptId: 's1', elementId: 'e1',
      target: '#host', html: '<span class="old">x</span>', position: 'beforeend',
    });
    handler({ type: 'dom_update', elementId: 'e1', html: '<b class="fresh">y</b>' });
    expect(document.querySelector('[data-ls-el="e1"] .old')).toBeNull();
    expect(document.querySelector('[data-ls-el="e1"] .fresh')).not.toBeNull();
  });

  test('dom_update is a no-op for an unknown elementId', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler } = install();
    // Should not throw; nothing tracked under 'ghost'.
    handler({ type: 'dom_update', elementId: 'ghost', html: '<b>z</b>' });
    expect(document.querySelector('#host')!.children.length).toBe(0);
  });

  test('dom_remove removes the tracked element from the DOM', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler } = install();
    handler({
      type: 'dom_inject', scriptId: 's1', elementId: 'e1',
      target: '#host', html: '<span class="injected">x</span>', position: 'beforeend',
    });
    expect(document.querySelector('[data-ls-el="e1"]')).not.toBeNull();
    handler({ type: 'dom_remove', elementId: 'e1' });
    expect(document.querySelector('[data-ls-el="e1"]')).toBeNull();
  });

  test('dom_inject with parentElementId injects relative to the parent (orphan-safe scoped path)', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler } = install();
    handler({
      type: 'dom_inject', scriptId: 's1', elementId: 'parent',
      target: '#host', html: '<div class="slot"></div>', position: 'beforeend',
    });
    handler({
      type: 'dom_inject', scriptId: 's1', elementId: 'child', parentElementId: 'parent',
      target: '.slot', html: '<span class="child-content">y</span>', position: 'beforeend',
    });
    // Orphan-safe: the scoped path resolves the parent from elementMap (NOT
    // document.querySelector), querySelects `.slot` within it, and inserts there.
    expect(
      document.querySelector('[data-ls-el="parent"] .slot [data-ls-el="child"] .child-content'),
    ).not.toBeNull();
  });
});

describe('dom-handler — styles + script cleanup', () => {
  test('dom_add_style scopes the CSS and registers it via ctx.dom.addStyle', () => {
    const { handler, addStyle } = install();
    handler({ type: 'dom_add_style', scriptId: 's1', styleId: 'st1', css: '.x { color: red }' });
    expect(addStyle).toHaveBeenCalledTimes(1);
    expect(addStyle.mock.calls[0]![0]).toBe('@scope ([data-ls-script="s1"]) {\n.x { color: red }\n}');
  });

  test('dom_remove_style calls the remover returned by addStyle', () => {
    const { handler, addStyle } = install();
    handler({ type: 'dom_add_style', scriptId: 's1', styleId: 'st1', css: '.x{}' });
    const remover = addStyle.mock.results[0]!.value;
    expect(remover).not.toHaveBeenCalled();
    handler({ type: 'dom_remove_style', styleId: 'st1' });
    expect(remover).toHaveBeenCalledTimes(1);
  });

  test('dom_remove_style is a no-op for an unknown styleId', () => {
    const { handler } = install();
    // No throw, nothing to remove.
    handler({ type: 'dom_remove_style', styleId: 'nope' });
  });

  test('dom_cleanup_script removes all of a script’s elements and styles', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler, addStyle } = install();
    handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#host', html: '<span>a</span>', position: 'beforeend' });
    handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e2', target: '#host', html: '<span>b</span>', position: 'beforeend' });
    handler({ type: 'dom_add_style', scriptId: 's1', styleId: 'st1', css: '.x{}' });
    const remover = addStyle.mock.results[0]!.value;

    handler({ type: 'dom_cleanup_script', scriptId: 's1' });

    expect(document.querySelector('[data-ls-el="e1"]')).toBeNull();
    expect(document.querySelector('[data-ls-el="e2"]')).toBeNull();
    expect(remover).toHaveBeenCalledTimes(1);
  });
});

describe('dom-handler — direct listeners + DOM read', () => {
  test('dom_listen wires a listener that posts dom_event on fire', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler, sent } = install();
    handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#host', html: '<span>x</span>', position: 'beforeend' });
    handler({ type: 'dom_listen', elementId: 'e1', listenerId: 'l1', event: 'click' });

    document.querySelector<HTMLElement>('[data-ls-el="e1"]')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const evt = sent.find((m) => m.type === 'dom_event' && m.listenerId === 'l1');
    expect(evt).toBeDefined();
    expect(evt.elementId).toBe('e1');
    expect(evt.event).toBe('click');
  });

  test('dom_unlisten detaches the listener', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler, sent } = install();
    handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#host', html: '<span>x</span>', position: 'beforeend' });
    handler({ type: 'dom_listen', elementId: 'e1', listenerId: 'l1', event: 'click' });
    handler({ type: 'dom_unlisten', elementId: 'e1', listenerId: 'l1', event: 'click' });

    document.querySelector<HTMLElement>('[data-ls-el="e1"]')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(sent.find((m) => m.type === 'dom_event')).toBeUndefined();
  });

  test('dom_read_request returns a serialized snapshot of the element', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const { handler, sent } = install();
    handler({
      type: 'dom_inject', scriptId: 's1', elementId: 'e1',
      target: '#host', html: '<span class="read-me">hello</span>', position: 'beforeend',
    });
    handler({ type: 'dom_read_request', requestId: 'r1', elementId: 'e1', options: {} });

    const res = sent.find((m) => m.type === 'dom_read_response' && m.requestId === 'r1');
    expect(res).toBeDefined();
    expect(res.snapshot).not.toBeNull();
    expect(res.snapshot.text).toBe('hello');
  });

  test('dom_read_request returns a null snapshot for an unknown elementId', () => {
    const { handler, sent } = install();
    handler({ type: 'dom_read_request', requestId: 'r2', elementId: 'ghost', options: {} });
    const res = sent.find((m) => m.type === 'dom_read_response' && m.requestId === 'r2');
    expect(res).toBeDefined();
    expect(res.snapshot).toBeNull();
  });
});

describe('dom-handler — shared components bridge (comp_*)', () => {
  /** Inject a target element + mount a 'select' component on it. */
  function mountOn(install_: ReturnType<typeof install>) {
    document.body.innerHTML = '<div id="host"></div>';
    install_.handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#host', html: '<div></div>', position: 'beforeend' });
    install_.handler({ type: 'comp_mount', componentId: 'c1', targetElementId: 'e1', kind: 'select', props: { placeholder: 'pick' }, scriptId: 's1', callbackNames: ['onChange'] });
  }

  test('comp_mount resolves mount<Kind>, mounts on the target, and wires callbacks', () => {
    document.body.innerHTML = '<div id="host"></div>';
    const inst = install();
    inst.handler({ type: 'dom_inject', scriptId: 's1', elementId: 'e1', target: '#host', html: '<div></div>', position: 'beforeend' });
    inst.handler({ type: 'comp_mount', componentId: 'c1', targetElementId: 'e1', kind: 'select', props: { placeholder: 'pick' }, scriptId: 's1', callbackNames: ['onChange'] });

    expect(inst.mountSelect).toHaveBeenCalledTimes(1);
    const [targetArg, optsArg] = inst.mountSelect.mock.calls[0]!;
    expect(document.querySelector('[data-ls-el="e1"]')).toBe(targetArg);
    expect(optsArg.placeholder).toBe('pick');
    expect(typeof optsArg.onChange).toBe('function');

    // The wired callback posts a component_callback back to the backend.
    (optsArg.onChange as (v: unknown) => void)('chosen');
    expect(inst.sent.find((m) => m.type === 'component_callback'))
      .toMatchObject({ componentId: 'c1', callbackName: 'onChange', value: 'chosen' });
  });

  test('comp_mount no-ops on an unknown target element', () => {
    const inst = install();
    document.body.innerHTML = '<div id="host"></div>';
    inst.handler({ type: 'comp_mount', componentId: 'c1', targetElementId: 'ghost', kind: 'select', props: {}, scriptId: 's1' });
    expect(inst.mountSelect).not.toHaveBeenCalled();
  });

  test('comp_update forwards props to the mounted handle', () => {
    const inst = install();
    mountOn(inst);
    inst.handler({ type: 'comp_update', componentId: 'c1', props: { value: 'x' } });
    expect(inst.compHandle.update).toHaveBeenCalledWith({ value: 'x' });
  });

  test('comp_destroy destroys + forgets the handle (later update is a no-op)', () => {
    const inst = install();
    mountOn(inst);
    inst.handler({ type: 'comp_destroy', componentId: 'c1' });
    expect(inst.compHandle.destroy).toHaveBeenCalledTimes(1);
    inst.handler({ type: 'comp_update', componentId: 'c1', props: {} });
    expect(inst.compHandle.update).not.toHaveBeenCalled();
  });

  test('comp_get_value reads the handle method and posts comp_value_result', () => {
    const inst = install();
    mountOn(inst);
    inst.handler({ type: 'comp_get_value', requestId: 'r1', componentId: 'c1', method: 'getValue' });
    const res = inst.sent.find((m) => m.type === 'comp_value_result' && m.requestId === 'r1');
    expect(res).toBeDefined();
    expect(res.value).toBe('the-value');
  });

  test('comp_invoke calls the named handle method', () => {
    const inst = install();
    mountOn(inst);
    inst.handler({ type: 'comp_invoke', componentId: 'c1', method: 'focus', args: [] });
    expect(inst.compHandle.focus).toHaveBeenCalledTimes(1);
  });
});

// ── pierceShadow: delegation into open shadow-DOM islands (v1.6.0) ───────────
// Lumiverse isolates styled assistant HTML into open shadow roots; a delegation
// flagged `pierceShadow` attaches a capture listener INSIDE each island so its
// controls become reachable (incl. `change`, which is composed:false and never
// escapes the root). These tests drive the real handler against happy-dom shadow
// roots created under a [data-message-id] → [data-component="MessageContent"] row.

/** Build a message row containing a MessageContent host with an OPEN shadow root.
 *  Mirrors the host's IsolatedHtml shape closely enough for discovery + matching. */
function makeIsland(messageId: string, shadowHTML: string): { host: HTMLElement; shadow: ShadowRoot } {
  const row = document.createElement('div');
  row.setAttribute('data-message-id', messageId);
  const part = document.createElement('div');
  part.setAttribute('data-part', 'character');
  const mc = document.createElement('div');
  mc.setAttribute('data-component', 'MessageContent');
  const host = document.createElement('div');
  const shadow = host.attachShadow({ mode: 'open' });
  shadow.innerHTML = shadowHTML;
  mc.appendChild(host);
  part.appendChild(mc);
  row.appendChild(part);
  document.body.appendChild(row);
  return { host, shadow };
}

const PIERCE_BTN = '[data-component="MessageContent"] button';

describe('pierceShadow — delegation into open shadow-DOM islands', () => {
  test('click inside an island dispatches, with message resolved off the host', () => {
    const { shadow } = makeIsland('m1', '<button class="probe">go</button>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd1',
      selector: PIERCE_BTN, event: 'click', root: 'chat', pierceShadow: true,
    });

    shadow.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));

    const evt = sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd1');
    expect(evt).toBeDefined();
    expect(evt.data.matched.tagName).toBe('BUTTON');
    expect(evt.data.message?.id).toBe('m1');
    expect(evt.data.message?.role).toBe('assistant');
  });

  test('change on an islanded <select> dispatches (composed:false still caught)', () => {
    const { shadow } = makeIsland('m1',
      '<select class="sel"><option value="a">A</option><option value="b">B</option></select>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd2',
      selector: '[data-component="MessageContent"] select', event: 'change', root: 'chat', pierceShadow: true,
    });

    const sel = shadow.querySelector<HTMLSelectElement>('.sel')!;
    sel.value = 'b';
    sel.dispatchEvent(new Event('change', { bubbles: true })); // composed defaults false

    const evt = sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd2');
    expect(evt).toBeDefined();
    expect(evt.data.matched.value).toBe('b');
  });

  test('a composed click fires exactly once (no document.body double-dispatch)', () => {
    const { shadow } = makeIsland('m1', '<button class="probe">go</button>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd3',
      selector: PIERCE_BTN, event: 'click', root: 'chat', pierceShadow: true,
    });

    shadow.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));

    const hits = sent.filter((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd3');
    expect(hits.length).toBe(1);
  });

  test('still matches light-DOM controls when pierceShadow is on', () => {
    document.body.innerHTML =
      '<div data-message-id="m1"><div data-part="character"><div data-component="MessageContent">' +
      '<button class="probe">go</button></div></div></div>';
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd4',
      selector: PIERCE_BTN, event: 'click', root: 'chat', pierceShadow: true,
    });

    document.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd4')).toBeDefined();
  });

  test('a non-pierce delegation does NOT reach islanded controls', () => {
    const { shadow } = makeIsland('m1', '<button class="probe">go</button>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd5',
      selector: PIERCE_BTN, event: 'click', root: 'chat', // no pierceShadow
    });

    shadow.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));

    expect(sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd5')).toBeUndefined();
  });

  test('comma-separated MessageContent-scoped selector matches inside the island', () => {
    const { shadow } = makeIsland('m1', '<textarea class="note"></textarea>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd6',
      selector: '[data-component="MessageContent"] input, [data-component="MessageContent"] select, [data-component="MessageContent"] textarea',
      event: 'change', root: 'chat', pierceShadow: true,
    });

    const ta = shadow.querySelector<HTMLTextAreaElement>('.note')!;
    ta.value = 'hi';
    ta.dispatchEvent(new Event('change', { bubbles: true }));

    const evt = sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd6');
    expect(evt).toBeDefined();
    expect(evt.data.matched.tagName).toBe('TEXTAREA');
    expect(evt.data.matched.value).toBe('hi');
  });

  test('honours a messageId filter for in-shadow matches', () => {
    const a = makeIsland('m1', '<button class="probe">a</button>');
    const b = makeIsland('m2', '<button class="probe">b</button>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd7',
      selector: PIERCE_BTN, event: 'click', root: 'chat', messageId: 'm1', pierceShadow: true,
    });

    // Click in m2 — filtered out (host resolves to 'm2' !== bound 'm1').
    b.shadow.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    expect(sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd7')).toBeUndefined();

    // Click in m1 — fires.
    a.shadow.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    expect(sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd7')?.data.message?.id).toBe('m1');
  });

  test('cleanup detaches in-shadow listeners (no dispatch after teardown)', () => {
    const { shadow } = makeIsland('m1', '<button class="probe">go</button>');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd8',
      selector: PIERCE_BTN, event: 'click', root: 'chat', pierceShadow: true,
    });

    activeCleanup?.();           // tear the handler down
    activeCleanup = undefined;   // prevent the afterEach double-call

    shadow.querySelector<HTMLElement>('.probe')!
      .dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));

    expect(sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd8')).toBeUndefined();
  });

  test('an island appearing AFTER registration is discovered via the observer', async () => {
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd9',
      selector: PIERCE_BTN, event: 'click', root: 'chat', pierceShadow: true,
    });

    // No island present at registration. Mount one now — the MutationObserver
    // should discover it on the coalesced rescan.
    const { shadow } = makeIsland('m1', '<button class="probe">late</button>');
    await waitFor(() => {
      const probe = shadow.querySelector<HTMLElement>('.probe');
      probe?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
      return sent.some((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd9');
    });

    expect(sent.some((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd9')).toBe(true);
  });

  test('a selector with a comma inside an attribute value decomposes without corruption', () => {
    // The old split(',') decomposition turned this into a malformed selector that
    // made closest() throw; the prefix-strip approach keeps the list intact.
    const { shadow } = makeIsland('m1', '<input name="a,b" class="probe" />');
    const { handler, sent } = install();
    handler({
      type: 'dom_delegate_register', scriptId: 's1', delegationId: 'd10',
      selector: '[data-component="MessageContent"] input[name="a,b"]', event: 'change', root: 'chat', pierceShadow: true,
    });

    const inp = shadow.querySelector<HTMLInputElement>('.probe')!;
    inp.value = 'x';
    inp.dispatchEvent(new Event('change', { bubbles: true }));

    const evt = sent.find((m) => m.type === 'dom_delegate_event' && m.delegationId === 'd10');
    expect(evt).toBeDefined();
    expect(evt.data.matched.tagName).toBe('INPUT');
  });
});
