/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND DOM HANDLER
 * ============================================================================
 * Runs in the browser. Receives DOM command messages from the backend and
 * translates them into ctx.dom.* calls on the Spindle frontend context.
 *
 * Also handles the reverse direction: when a DOM event fires on an injected
 * element, serializes a safe DOMEventData subset and sends it back to the
 * backend via ctx.sendToBackend().
 */

import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';
import type { DOMEventData, DOMDelegatedEventData, ConditionalPreventDefault } from './types/script.js';

// ─── Types ───────────────────────────────────────────────────────────────────

type DOMMessage = Extract<BackendToFrontend,
  | { type: 'dom_inject' }
  | { type: 'dom_inject_at_message' }
  | { type: 'dom_update' }
  | { type: 'dom_remove' }
  | { type: 'dom_add_style' }
  | { type: 'dom_remove_style' }
  | { type: 'dom_listen' }
  | { type: 'dom_unlisten' }
  | { type: 'dom_delegate_register' }
  | { type: 'dom_delegate_unregister' }
  | { type: 'dom_cleanup_script' }
  | { type: 'dom_make_draggable' }
>;

function isDOMMessage(msg: unknown): msg is DOMMessage {
  const t = (msg as { type?: string })?.type;
  return typeof t === 'string' && t.startsWith('dom_');
}

// ─── State ───────────────────────────────────────────────────────────────────

/** elementId → injected DOM Element */
const elementMap = new Map<string, Element>();

// ─── External bindings (exposed for modal-handler) ───────────────────────────

/**
 * Bind a pre-existing DOM element to an `elementId` so subsequent `dom_update`
 * / `dom_listen` / `dom_remove` messages targeting that ID flow through the
 * existing pipeline.
 *
 * Used by `modal-handler.ts` to bind the advanced-modal body (which is created
 * by the host's `ctx.ui.showModal(...)`, not by `ctx.dom.inject(...)`). The
 * element is NOT registered in `elementScripts`, so a `dom_cleanup_script`
 * sweep will not remove it — modal lifetime is driven by `ls_modal_dismiss`,
 * not by DOM cleanup.
 */
export function bindExternalElement(elementId: string, el: Element): void {
  elementMap.set(elementId, el);
}

/**
 * Remove an external binding. Detaches any active listeners on this element.
 * Called by `modal-handler.ts` when the modal is dismissed so the elementId
 * is free for garbage collection.
 */
export function unbindExternalElement(elementId: string): void {
  const el = elementMap.get(elementId);
  for (const [lid, entry] of listenerMap) {
    if (entry.elementId === elementId) {
      if (el) el.removeEventListener(entry.event, entry.handler);
      listenerMap.delete(lid);
    }
  }
  elementMap.delete(elementId);
}

/** elementId → scriptId (for cleanup-by-script) */
const elementScripts = new Map<string, string>();

/** stableKey (scriptId:stableId) → elementId */
const stableIndex = new Map<string, string>();

/** styleId → removal function returned by ctx.dom.addStyle() */
const styleMap = new Map<string, () => void>();

/** styleId → scriptId */
const styleScripts = new Map<string, string>();

/** listenerId → { elementId, event, handler } for cleanup */
const listenerMap = new Map<string, { elementId: string; event: string; handler: EventListener }>();

// ─── Delegation registry (v0.27.1 — api.ui.dom.delegate) ─────────────────────

/**
 * Per-delegation entry. Stored on `dom_delegate_register`, removed on
 * `dom_delegate_unregister`. The capture-phase listener for a given
 * (root, event) tuple iterates this map at fire time and dispatches a
 * `dom_delegate_event` for each registration whose selector + scope match.
 */
interface DelegationEntry {
  delegationId:    string;
  scriptId:        string;
  selector:        string;
  event:           string;
  root:            'chat' | 'document';
  messageId?:      string;
  preventDefault?: boolean | ConditionalPreventDefault;
  stopPropagation?: boolean;
}
const delegationsByDelegationId = new Map<string, DelegationEntry>();

/**
 * Per-(root, event)-tuple installed listener. Reference-counted so a single
 * capture listener serves many simultaneous registrations under the same
 * tuple; detached when the last reference disappears.
 */
interface InstalledDelegationListener {
  handler: EventListener;
  count:   number;
}
const installedDelegationListeners = new Map<string, InstalledDelegationListener>();

function delegationKey(root: 'chat' | 'document', event: string): string {
  return `${root}::${event}`;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function stableKey(scriptId: string, stableId: string): string {
  return `${scriptId}:${stableId}`;
}

/**
 * Extract a safe serializable subset from a DOM event.
 */
function extractEventData(event: Event): DOMEventData {
  const target = event.target as HTMLElement | null;
  const data: DOMEventData = { type: event.type };

  if (target) {
    if (target.id) data.targetId = target.id;
    if ('value' in target) data.targetValue = (target as HTMLInputElement).value;
    if ('checked' in target) data.targetChecked = (target as HTMLInputElement).checked;
    if (target.dataset && Object.keys(target.dataset).length > 0) {
      const ds: Record<string, string> = {};
      for (const [k, v] of Object.entries(target.dataset)) {
        if (v !== undefined) ds[k] = v;
      }
      data.dataset = ds;
    }
  }

  // Viewport coordinates — populated for pointer-ish events so scripts can
  // position follow-up UI (e.g. `api.ui.showContextMenu`) at the cursor or
  // first-touch location. MouseEvent covers click / contextmenu / pointer*
  // (PointerEvent extends MouseEvent) via the shared `clientX` / `clientY`
  // surface; TouchEvent carries coordinates on `touches[0]` instead.
  if (event instanceof MouseEvent) {
    data.clientX = event.clientX;
    data.clientY = event.clientY;
  } else if (typeof TouchEvent !== 'undefined' && event instanceof TouchEvent) {
    const first = event.touches[0] ?? event.changedTouches[0];
    if (first) {
      data.clientX = first.clientX;
      data.clientY = first.clientY;
    }
  }

  if (event instanceof CustomEvent && event.detail !== undefined) {
    try {
      // Ensure detail is JSON-serializable
      JSON.stringify(event.detail);
      data.detail = event.detail;
    } catch {
      // Non-serializable detail — omit
    }
  }

  // KeyboardEvent fields — populated for keydown / keyup / keypress only.
  // `key` is the value (modifier-aware: 'a' / 'A'); `code` is the physical
  // key (layout-independent: 'KeyA' regardless of shift). Lets scripts
  // distinguish Enter-to-submit from arbitrary keypresses on text inputs
  // (the original motivating use case for v0.27.3).
  if (event instanceof KeyboardEvent) {
    data.key  = event.key;
    data.code = event.code;
  }

  return data;
}

/**
 * Build a serialized `DOMDelegatedEventData` for an event whose selector
 * matched. Walks the matched element to populate `matched.*`, the original
 * event for `target.*` + `modifiers`, and the closest `[data-message-id]`
 * ancestor (when present) for `message.*`.
 *
 * Skips `on*` and `data-*` from `matched.attributes` — `on*` would carry
 * inline-handler text (rare but theoretically present in LLM-emitted
 * markup), `data-*` is already exposed on `matched.dataset`.
 */
function buildDelegatedEventData(
  event:   Event,
  matched: HTMLElement,
): DOMDelegatedEventData {
  // Base — same target/dataset/value/coords as `extractEventData` for
  // backward compat; `DOMDelegatedEventData extends DOMEventData`.
  // `extractEventData` reads `event.target` directly — no need to thread
  // a separate target parameter through.
  const base = extractEventData(event);

  // matched.* — curated subset of the matched element's properties.
  const matchedDataset: Record<string, string> = {};
  for (const [k, v] of Object.entries(matched.dataset)) {
    if (v !== undefined) matchedDataset[k] = v;
  }
  const matchedAttributes: Record<string, string> = {};
  for (const attr of Array.from(matched.attributes)) {
    if (attr.name.startsWith('on'))   continue;  // skip inline handlers
    if (attr.name.startsWith('data-')) continue; // already in dataset
    matchedAttributes[attr.name] = attr.value;
  }

  const matchedField: DOMDelegatedEventData['matched'] = {
    tagName:     matched.tagName,
    classList:   Array.from(matched.classList),
    dataset:     matchedDataset,
    attributes:  matchedAttributes,
    textContent: (matched.textContent ?? '').trim(),
  };
  if (matched.id) matchedField.id = matched.id;

  // Form-input fields. `instanceof` checks scope us to the right element
  // types so we don't read .value off random elements.
  if (matched instanceof HTMLInputElement || matched instanceof HTMLTextAreaElement) {
    matchedField.value = matched.value;
    if (matched instanceof HTMLInputElement && (matched.type === 'checkbox' || matched.type === 'radio')) {
      matchedField.checked = matched.checked;
    }
  } else if (matched instanceof HTMLSelectElement) {
    matchedField.value         = matched.value;
    matchedField.selectedIndex = matched.selectedIndex;
    matchedField.selectedText  = matched.options[matched.selectedIndex]?.text;
  }

  // Resolve associated `<label>` text for labelable elements. `.labels`
  // is a NodeList accessor on input / textarea / select / output / meter
  // / progress / button — restrict to the form-input subset (matches
  // the elements that carry value / checked / selectedText above) since
  // those are the script-author surface where the label-as-form-field-
  // name convention applies. Both explicit `<label for="x">…</label>
  // <input id="x">` and implicit `<label>Notes <input></label>`
  // associations are picked up by the `.labels` accessor without extra
  // walking (delegated to the host).
  if (
    matched instanceof HTMLInputElement ||
    matched instanceof HTMLTextAreaElement ||
    matched instanceof HTMLSelectElement
  ) {
    const labelEl = matched.labels?.[0];
    const text    = labelEl?.textContent?.trim();
    if (text) matchedField.label = text;
  }

  // Modifier-key state. Pointer / mouse events carry button index too.
  const me = event as MouseEvent;        // cast — null-safe via instanceof
  const ke = event as KeyboardEvent;     // cast — null-safe via instanceof
  const modifiers: DOMDelegatedEventData['modifiers'] = {
    ctrl:  event instanceof MouseEvent || event instanceof KeyboardEvent ? me.ctrlKey  || ke.ctrlKey  : false,
    shift: event instanceof MouseEvent || event instanceof KeyboardEvent ? me.shiftKey || ke.shiftKey : false,
    alt:   event instanceof MouseEvent || event instanceof KeyboardEvent ? me.altKey   || ke.altKey   : false,
    meta:  event instanceof MouseEvent || event instanceof KeyboardEvent ? me.metaKey  || ke.metaKey  : false,
  };
  if (event instanceof MouseEvent) modifiers.button = event.button;

  // Optional message context — read from closest [data-message-id] ancestor.
  // The host stamps both the outer VirtualRow AND inner .card with this
  // attribute (per dom_inject_at_message comments above); `closest` returns
  // the nearest one in tree order, which is the inner .card — fine for
  // identifying the message id. Role comes from the [data-part] descendant
  // ('user' / 'character' / 'streaming') under the row.
  let message: DOMDelegatedEventData['message'] | undefined;
  const msgRow = matched.closest('[data-message-id]');
  if (msgRow) {
    const id = msgRow.getAttribute('data-message-id') ?? '';
    if (id) {
      // 'character' / 'streaming' / falsy → 'assistant'; only 'user' is user.
      const partEl = msgRow.querySelector('[data-part]') ?? msgRow;
      const part   = partEl.getAttribute?.('data-part') ?? 'character';
      const role: 'user' | 'assistant' = part === 'user' ? 'user' : 'assistant';
      // swipeId — placeholder. Backend resolves the actual active swipe
      // via `spindle.chat.getMessages(activeChatId)` in
      // `resolveDelegateEventAndDispatch` (backend.ts) before invoking
      // the wrapper. We can't resolve here on the FE without access to
      // the chat store; backend has direct host-API access and a single
      // resolution point keeps the per-event cost predictable.
      message = { id, role, swipeId: 0 };
    }
  }

  const out: DOMDelegatedEventData = {
    ...base,
    matched:   matchedField,
    modifiers,
  };
  if (message) out.message = message;
  return out;
}

/**
 * Evaluate a `preventDefault` rule against a fired event (v0.27.5+).
 *
 * Boolean rules pass through directly (`true` → always prevent, `false` /
 * undefined → never prevent). `ConditionalPreventDefault` rules check each
 * provided filter; ALL filters must match for `preventDefault` to fire
 * (AND semantics). Empty `{}` is treated as "always match" (consistent
 * with `preventDefault: true`).
 *
 * Filters reference `KeyboardEvent` / `MouseEvent` data. When a filter
 * requires a field the event doesn't carry (e.g. `onKeys` on a MouseEvent),
 * the rule fails to match — preventDefault does NOT fire for that event,
 * letting unrelated events through.
 *
 * Runs synchronously inside the capture-phase listener, BEFORE the
 * dispatch to the script handler. The synchronous evaluation is what
 * makes per-fire conditional prevention possible — the async worker-
 * boundary dispatch couldn't preventDefault in time.
 */
export function shouldPreventDefault(
  rule: boolean | ConditionalPreventDefault | undefined,
  event: Event,
): boolean {
  if (rule === undefined || rule === false) return false;
  if (rule === true) return true;

  // Conditional rule — narrow to the event-data fields each filter needs.
  const ke = event as Partial<KeyboardEvent>;
  const me = event as Partial<MouseEvent>;

  if (rule.onKeys !== undefined) {
    if (ke.key === undefined || !rule.onKeys.includes(ke.key)) return false;
  }
  if (rule.onCodes !== undefined) {
    if (ke.code === undefined || !rule.onCodes.includes(ke.code)) return false;
  }
  if (rule.onButtons !== undefined) {
    if (me.button === undefined || !rule.onButtons.includes(me.button)) return false;
  }
  if (rule.whenModifiers !== undefined) {
    // KeyboardEvent and MouseEvent both expose ctrl/shift/alt/meta keys
    // identically — Partial<KeyboardEvent> is sufficient to read all four.
    // Events lacking these fields (e.g. plain Event) are treated as
    // "no modifiers held".
    const state = {
      ctrl:  ke.ctrlKey  ?? false,
      shift: ke.shiftKey ?? false,
      alt:   ke.altKey   ?? false,
      meta:  ke.metaKey  ?? false,
    };
    const { require, exclude } = rule.whenModifiers;
    if (require) {
      for (const mod of require) {
        if (!state[mod]) return false;
      }
    }
    if (exclude) {
      for (const mod of exclude) {
        if (state[mod]) return false;
      }
    }
  }
  return true;
}

/**
 * Install (or increment ref-count on) a capture-phase listener for a
 * given (root, event) tuple. Listener iterates the delegation registry
 * at fire time and dispatches `dom_delegate_event` for each matching
 * registration.
 *
 * Both `'chat'` and `'document'` scope listeners attach at
 * `document.body` — capture phase sees all events regardless. The
 * difference is the per-event filtering: `'chat'` requires the matched
 * element to be inside a `[data-message-id]` ancestor.
 */
function installDelegationListenerIfNeeded(
  root:          'chat' | 'document',
  event:         string,
  sendToBackend: (msg: FrontendToBackend) => void,
): void {
  const key = delegationKey(root, event);
  const existing = installedDelegationListeners.get(key);
  if (existing) {
    existing.count++;
    return;
  }

  const handler: EventListener = (e: Event) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Iterate every delegation registered under this (root, event)
    // tuple. Most clicks won't match anything, so the inner `closest()`
    // walk + early-continue keeps the cost proportional to fired events,
    // not to total registered selectors.
    for (const reg of delegationsByDelegationId.values()) {
      if (reg.root !== root || reg.event !== event) continue;

      // Chat-scope filter: target must be inside a tracked message.
      if (root === 'chat') {
        const msgRow = target.closest('[data-message-id]');
        if (!msgRow) continue;
        if (reg.messageId && msgRow.getAttribute('data-message-id') !== reg.messageId) continue;
      }

      // Selector match. closest() walks from target upward, returning the
      // nearest ancestor (or self) matching the selector — exactly the
      // event-delegation pattern script authors expect.
      const matched = target.closest(reg.selector) as HTMLElement | null;
      if (!matched) continue;

      // Per-registration prevention flags. Applied on the first match —
      // the order delegations are iterated isn't user-controlled, so a
      // script that sets `preventDefault: true` on its registration is
      // promised the event WILL be prevented if its selector matches,
      // not that it's the only handler that runs. v0.27.5: `preventDefault`
      // can also be a `ConditionalPreventDefault` object that fires only
      // on matching event data — see `shouldPreventDefault` above.
      if (shouldPreventDefault(reg.preventDefault, e)) e.preventDefault();
      if (reg.stopPropagation) e.stopPropagation();

      const data = buildDelegatedEventData(e, matched);
      sendToBackend({ type: 'dom_delegate_event', delegationId: reg.delegationId, data });
    }
  };

  document.body.addEventListener(event, handler, true /* capture */);
  installedDelegationListeners.set(key, { handler, count: 1 });
}

/**
 * Decrement ref-count on a (root, event)-tuple's capture listener;
 * detach when it reaches zero. Idempotent — calling on a key that's
 * already gone is a no-op.
 */
function uninstallDelegationListenerIfUnused(
  root:  'chat' | 'document',
  event: string,
): void {
  const key = delegationKey(root, event);
  const entry = installedDelegationListeners.get(key);
  if (!entry) return;
  entry.count--;
  if (entry.count > 0) return;
  document.body.removeEventListener(event, entry.handler, true);
  installedDelegationListeners.delete(key);
}

/**
 * Wrap user CSS in an @scope rule scoped to elements injected by a specific script.
 */
function scopeCSS(css: string, scriptId: string): string {
  return `@scope ([data-ls-script="${scriptId}"]) {\n${css}\n}`;
}

// ─── Message-aware injection helpers ────────────────────────────────────────

/**
 * Wait for an element matching `selector` to appear in the DOM.
 * Checks immediately; falls back to a MutationObserver that resolves when the
 * element appears or rejects after `timeoutMs`.
 */
function waitForElement(selector: string, timeoutMs = 5000): Promise<Element> {
  const existing = document.querySelector(selector);
  if (existing) return Promise.resolve(existing);

  return new Promise((resolve, reject) => {
    let settled = false;

    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el && !settled) {
        settled = true;
        observer.disconnect();
        resolve(el);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(() => {
      if (!settled) {
        settled = true;
        observer.disconnect();
        reject(new Error(`waitForElement: timeout for "${selector}"`));
      }
    }, timeoutMs);
  });
}

/**
 * Find the bubble (content container) div inside a message element.
 * Both BubbleMessage and MinimalMessage use a CSS module `.bubble` class
 * whose mangled name contains `_bubble_`.
 */
function findBubble(messageEl: Element): Element | null {
  return messageEl.querySelector('[class*="_bubble_"]');
}

/** Pending message injection awaiting a MutationObserver. */
interface PendingMessageInjection {
  scriptId: string;
  cancel: () => void;
}

const pendingInjections = new Map<string, PendingMessageInjection>();
const MAX_PENDING_INJECTIONS = 50;

function trackPending(elementId: string, scriptId: string, cancel: () => void): void {
  if (pendingInjections.size >= MAX_PENDING_INJECTIONS) {
    // Evict oldest (Maps iterate in insertion order)
    const oldestKey = pendingInjections.keys().next().value;
    if (oldestKey) {
      pendingInjections.get(oldestKey)?.cancel();
      pendingInjections.delete(oldestKey);
    }
  }
  pendingInjections.set(elementId, { scriptId, cancel });
}

function cancelPendingForScript(scriptId: string): void {
  for (const [elId, entry] of pendingInjections) {
    if (entry.scriptId === scriptId) {
      entry.cancel();
      pendingInjections.delete(elId);
    }
  }
}

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the DOM command handler on the frontend message multiplexer.
 * Returns a cleanup function that removes all tracked DOM state.
 */
export function installDOMHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {

  const unsubMessages = onBackendMessage((raw) => {
    if (!isDOMMessage(raw)) return;
    const msg = raw as DOMMessage;

    switch (msg.type) {
      // ── Inject ─────────────────────────────────────────────────────
      case 'dom_inject': {
        const { scriptId, elementId, target, html, position, stableId, parentElementId } = msg;

        // Defensive idempotency guard. Replay on `frontend_ready` shouldn't
        // hit a pre-populated elementMap in normal flow (frontend is fresh
        // after mount), but if `frontend_ready` ever double-fires (dev HMR
        // quirks, rapid extension toggles) or the backend accidentally
        // double-emits, we'd otherwise insert the same element twice and
        // overwrite the elementMap ref, leaving the earlier element
        // orphaned in the DOM. Skip silently with a warn — the existing
        // entry is still valid and script ops routed via elementId will
        // still resolve correctly.
        if (elementMap.has(elementId)) {
          console.warn(`[LumiScript] dom_inject: elementId "${elementId}" already in elementMap — skipping duplicate insert`);
          break;
        }

        // Wrap HTML in a scoped container
        const wrappedHtml = `<div data-ls-script="${scriptId}" data-ls-el="${elementId}">${html}</div>`;

        let el: Element | null = null;

        if (parentElementId) {
          // ── Scoped inject (from `DOMHandle.injectChild`) ───────────
          // Resolve `target` relative to the parent element via the
          // element-map ref, not via `document.querySelector`. This is
          // the key affordance: `elementMap` holds the parent's ref
          // even while the parent is orphaned (drawer tab not yet
          // clicked, modal body pre-mount), so scripts can populate
          // their UI at startup instead of waiting for user activation.
          const parent = elementMap.get(parentElementId);
          if (!parent) {
            console.warn(
              `[LumiScript] dom_inject: parentElementId "${parentElementId}" not in elementMap — drop`,
            );
            break;
          }
          const targetEl = parent.querySelector(target);
          if (!targetEl) {
            console.warn(
              `[LumiScript] dom_inject: selector "${target}" not found within parent "${parentElementId}" — drop`,
            );
            break;
          }
          // Manual insert to mirror Spindle's wrapper nesting. `ctx.dom.inject`
          // uses `document.querySelector` which can't resolve inside orphaned
          // subtrees, so we can't delegate to it on this path. Note: this
          // bypasses the host's DOMPurify pass — acceptable here because
          // the content originates from user-written script code (already
          // trusted in LumiScript's model); the outer `data-ls-script` attr
          // still applies for scoped-CSS isolation via `@scope`.
          const spindleWrapper = document.createElement('div');
          spindleWrapper.setAttribute('data-spindle-ext', '');
          spindleWrapper.innerHTML = wrappedHtml;
          targetEl.insertAdjacentElement(position as InsertPosition, spindleWrapper);
          el = spindleWrapper;
        } else {
          el = ctx.dom.inject(target, wrappedHtml, position as InsertPosition);
        }

        if (el) {
          elementMap.set(elementId, el);
          elementScripts.set(elementId, scriptId);
          if (stableId) {
            stableIndex.set(stableKey(scriptId, stableId), elementId);
          }
        }
        break;
      }

      // ── Inject at Message ────────────────────────────────────────────
      case 'dom_inject_at_message': {
        const { scriptId, elementId, messageId, html, position, stableId } = msg;

        // Two distinct insertion strategies depending on `position`:
        //
        // - `'header'`: insert as the FIRST CHILD of the outer
        //   `[data-message-id]` element (the host's `VirtualRow`
        //   wrapper, see `frontend/src/components/chat/MessageList.tsx`
        //   `VirtualRow`). That wrapper sits OUTSIDE the message bubble's
        //   `.card` element, which is the host's `position: relative`
        //   ancestor for the absolutely-positioned BubbleActions pill
        //   (`top: 20px; right: 24px; z-index: 5` against `.card`).
        //   Inserting here gives the LS header a full-width banner
        //   position above the bubble, in normal flow within the
        //   virtualized row, with zero risk of overlap with the actions
        //   pill regardless of viewport / hover / touch state.
        //
        //   Both `.virtualRow` (outer) AND `.card` (inner) carry
        //   `data-message-id`. `document.querySelector` returns the
        //   outer one in tree order, so a plain
        //   `[data-message-id="..."]` selector on the row root is
        //   exactly what we want.
        //
        // - `'footer'`: placement depends on chat-style mode:
        //
        //     * Bubble mode (`data-component="BubbleMessage"`): append
        //       inside the bubble (`[class*="_bubble_"]`). In Bubble
        //       mode `.bubble` IS the full content container of the
        //       card (avatar + header + content + footer all live
        //       inside it), so footer-inside-bubble naturally spans
        //       the full message width. Below the actions-pill zone,
        //       no overlap concerns.
        //
        //     * Minimal mode (`data-component="MinimalMessage"`):
        //       append as the LAST CHILD of the outer
        //       `[data-message-id]` element (mirror of the header
        //       placement, but at the row's bottom). In Minimal mode
        //       `.bubble` is just the inner text-block flex item with
        //       `flex: 1; max-width: 85%`, sitting beside the avatar
        //       and `.actionsWrap` — so a footer inserted there would
        //       only span the text-block width, not the whole row.
        //       Inserting after `.card` in the `.virtualRow` wrapper
        //       gives the footer the full row width as users expect.
        //
        // Mode + tint detection (`data-ls-mode`, `data-ls-tint`): we
        // sniff the inner card's `data-component` and `data-part`
        // attributes (`MinimalMessage`/`BubbleMessage` and `'user'` /
        // `'character'` / `'streaming'` respectively) and stamp them
        // on the LS wrapper. Used by `ls:components`
        // messageHeader/messageFooter CSS to apply the matching
        // per-mode and per-tint variants so the inserted element
        // reads as a visual extension of the host's message frame.
        // Falls back to Bubble mode + `'character'` tint when the
        // card isn't found or carries no attribute — those are the
        // host's defaults and the safest assumption.
        const doInject = (rowEl: Element) => {
          const cardEl = rowEl.querySelector('[data-part]');
          const part = cardEl?.getAttribute('data-part') ?? 'character';
          const mode = cardEl?.getAttribute('data-component') === 'MinimalMessage'
            ? 'minimal'
            : 'bubble';

          const tintAttr = position === 'header' ? ` data-ls-tint="${part}"` : '';
          const modeAttr = ` data-ls-mode="${mode}"`;
          const wrappedHtml = `<div data-ls-script="${scriptId}" data-ls-el="${elementId}"${tintAttr}${modeAttr}>${html}</div>`;

          let target: Element;
          let insertPos: InsertPosition;
          if (position === 'header') {
            target = rowEl;
            insertPos = 'afterbegin';
          } else if (position === 'footer' && mode === 'minimal') {
            // Minimal mode: span full row width by escaping the
            // constrained `.bubble` flex item — see comment above.
            target = rowEl;
            insertPos = 'beforeend';
          } else {
            // Bubble mode footer: existing in-bubble placement.
            const bubble = findBubble(rowEl);
            target = bubble ?? rowEl;
            insertPos = 'beforeend';
          }
          const el = ctx.dom.inject(target as any, wrappedHtml, insertPos);
          elementMap.set(elementId, el);
          elementScripts.set(elementId, scriptId);
          if (stableId) {
            stableIndex.set(stableKey(scriptId, stableId), elementId);
          }
        };

        const selector = `[data-message-id="${messageId}"]`;
        const messageEl = document.querySelector(selector);

        if (messageEl) {
          doInject(messageEl);
          break;
        }

        // Message element not in DOM yet — wait for it
        let cancelled = false;
        const cancel = () => { cancelled = true; };
        trackPending(elementId, scriptId, cancel);

        waitForElement(selector)
          .then((msgEl) => {
            pendingInjections.delete(elementId);
            if (cancelled) return;
            doInject(msgEl);
          })
          .catch(() => {
            pendingInjections.delete(elementId);
          });
        break;
      }

      // ── Update ─────────────────────────────────────────────────────
      case 'dom_update': {
        const el = elementMap.get(msg.elementId);
        if (!el) break;
        // Update the inner content of the wrapper, preserving the wrapper attributes
        const inner = el.querySelector(`[data-ls-el="${msg.elementId}"]`) ?? el;
        inner.innerHTML = msg.html;
        break;
      }

      // ── Remove ─────────────────────────────────────────────────────
      case 'dom_remove': {
        removeElement(msg.elementId);
        break;
      }

      // ── Add Style ──────────────────────────────────────────────────
      case 'dom_add_style': {
        const { scriptId, styleId, css } = msg;
        const scoped = scopeCSS(css, scriptId);
        const removeFn = ctx.dom.addStyle(scoped);
        styleMap.set(styleId, removeFn);
        styleScripts.set(styleId, scriptId);
        break;
      }

      // ── Remove Style ───────────────────────────────────────────────
      case 'dom_remove_style': {
        const removeFn = styleMap.get(msg.styleId);
        if (removeFn) {
          removeFn();
          styleMap.delete(msg.styleId);
          styleScripts.delete(msg.styleId);
        }
        break;
      }

      // ── Listen ─────────────────────────────────────────────────────
      case 'dom_listen': {
        const { elementId, listenerId, event, preventDefault } = msg;
        const el = elementMap.get(elementId);
        if (!el) break;

        const handler: EventListener = (evt: Event) => {
          // Suppress the browser's default action synchronously — the
          // backend dispatch is async across the worker boundary and
          // returns too late to preventDefault on its own. v0.27.5:
          // `preventDefault` can be a `ConditionalPreventDefault` object
          // that fires only on matching event data.
          if (shouldPreventDefault(preventDefault, evt)) evt.preventDefault();
          const data = extractEventData(evt);
          sendToBackend({ type: 'dom_event', elementId, listenerId, event, data });
        };

        el.addEventListener(event, handler);
        listenerMap.set(listenerId, { elementId, event, handler });
        break;
      }

      // ── Unlisten ───────────────────────────────────────────────────
      case 'dom_unlisten': {
        const entry = listenerMap.get(msg.listenerId);
        if (!entry) break;
        const el = elementMap.get(entry.elementId);
        if (el) el.removeEventListener(entry.event, entry.handler);
        listenerMap.delete(msg.listenerId);
        break;
      }

      // ── Delegate register (v0.27.1 — api.ui.dom.delegate) ─────────
      // Add to the per-delegation registry; install (or ref-count) the
      // (root, event)-tuple's capture-phase listener.
      case 'dom_delegate_register': {
        const {
          delegationId, scriptId, selector, event, root,
          messageId, preventDefault, stopPropagation,
        } = msg;
        delegationsByDelegationId.set(delegationId, {
          delegationId, scriptId, selector, event, root,
          messageId, preventDefault, stopPropagation,
        });
        installDelegationListenerIfNeeded(root, event, sendToBackend);
        break;
      }

      // ── Delegate unregister ────────────────────────────────────────
      // Drop from registry; decrement listener ref-count (detach when
      // last delegation under this (root, event) tuple is removed).
      case 'dom_delegate_unregister': {
        const { delegationId, event } = msg;
        const reg = delegationsByDelegationId.get(delegationId);
        if (!reg) break;
        delegationsByDelegationId.delete(delegationId);
        uninstallDelegationListenerIfUnused(reg.root, event);
        break;
      }

      // ── Cleanup Script ─────────────────────────────────────────────
      case 'dom_cleanup_script': {
        const { scriptId } = msg;

        // Cancel any pending MutationObserver waits for this script
        cancelPendingForScript(scriptId);

        // Remove all elements for this script
        for (const [elId, sid] of elementScripts) {
          if (sid === scriptId) removeElement(elId);
        }

        // Remove all styles for this script
        for (const [sId, sid] of styleScripts) {
          if (sid === scriptId) {
            const removeFn = styleMap.get(sId);
            if (removeFn) removeFn();
            styleMap.delete(sId);
            styleScripts.delete(sId);
          }
        }

        // Clean stable index entries
        for (const [key] of stableIndex) {
          if (key.startsWith(scriptId + ':')) stableIndex.delete(key);
        }
        break;
      }

      // ── Make Draggable ──────────────────────────────────────────────
      case 'dom_make_draggable': {
        const { elementId, handleSelector } = msg;
        const wrapper = elementMap.get(elementId) as HTMLElement | undefined;
        if (!wrapper) break;

        // DOM nesting: ctx.dom.inject returns a Spindle wrapper
        // (<div data-spindle-ext>) which contains our LS wrapper
        // (<div data-ls-el>) which contains the user's actual content.
        // The user's positioned root is two levels deep.

        let dragging = false;
        let didMove = false;

        wrapper.addEventListener('pointerdown', (e: PointerEvent) => {
          if (e.button !== 0) return;

          // With a handle selector, only start drag from that element.
          if (handleSelector && !(e.target as Element).closest(handleSelector)) return;

          // Resolve the user's positioned content root (two levels deep:
          // Spindle wrapper → LS wrapper → user root).
          const moveEl = (
            wrapper.firstElementChild?.firstElementChild
            ?? wrapper.firstElementChild
            ?? wrapper
          ) as HTMLElement;

          // Neutralise CSS transforms and percentage positioning so that
          // pixel top/left values correspond directly to screen coords.
          const rect = moveEl.getBoundingClientRect();
          moveEl.style.transform = 'none';
          moveEl.style.top = `${rect.top}px`;
          moveEl.style.left = `${rect.left}px`;
          moveEl.style.bottom = 'auto';
          moveEl.style.right = 'auto';

          dragging = true;
          didMove = false;
          const startOffsetX = e.clientX - rect.left;
          const startOffsetY = e.clientY - rect.top;
          moveEl.style.cursor = 'grabbing';

          // Use document-level listeners for move/end — avoids pointer
          // capture quirks on wrapper elements that may be zero-sized.
          const onMove = (ev: PointerEvent) => {
            if (!dragging) return;
            didMove = true;
            moveEl.style.top = `${ev.clientY - startOffsetY}px`;
            moveEl.style.left = `${ev.clientX - startOffsetX}px`;
          };

          const onEnd = () => {
            if (!dragging) return;
            dragging = false;
            moveEl.style.cursor = '';
            document.removeEventListener('pointermove', onMove);
            document.removeEventListener('pointerup', onEnd);
            document.removeEventListener('pointercancel', onEnd);
          };

          document.addEventListener('pointermove', onMove);
          document.addEventListener('pointerup', onEnd);
          document.addEventListener('pointercancel', onEnd);
          e.preventDefault();
        });

        // Suppress the click event that fires after a drag so script
        // click handlers don't trigger on release.
        wrapper.addEventListener('click', (e: MouseEvent) => {
          if (didMove) {
            e.stopImmediatePropagation();
            e.preventDefault();
            didMove = false;
          }
        }, true);

        break;
      }
    }
  });

  // ── Cleanup ────────────────────────────────────────────────────────────
  return () => {
    unsubMessages();

    // Cancel all pending message injections
    for (const [, entry] of pendingInjections) {
      entry.cancel();
    }
    pendingInjections.clear();

    // Remove all listeners
    for (const [, entry] of listenerMap) {
      const el = elementMap.get(entry.elementId);
      if (el) el.removeEventListener(entry.event, entry.handler);
    }
    listenerMap.clear();

    // Remove all delegation capture listeners (v0.27.1). Iterate the
    // installed-listener map directly — each entry corresponds to a
    // distinct (root, event) tuple at `document.body`. Per-registration
    // entries in `delegationsByDelegationId` get cleared en masse.
    for (const [key, entry] of installedDelegationListeners) {
      // Key shape: '<root>::<event>' — extract event after the
      // delimiter. (Root is encoded but isn't needed here since both
      // roots share `document.body` as the actual listener target.)
      const event = key.split('::')[1] ?? '';
      if (event) document.body.removeEventListener(event, entry.handler, true);
    }
    installedDelegationListeners.clear();
    delegationsByDelegationId.clear();

    // Remove all elements
    for (const [, el] of elementMap) {
      try { el.remove(); } catch { /* ignore */ }
    }
    elementMap.clear();
    elementScripts.clear();
    stableIndex.clear();

    // Remove all styles
    for (const [, removeFn] of styleMap) {
      try { removeFn(); } catch { /* ignore */ }
    }
    styleMap.clear();
    styleScripts.clear();
  };
}

// ─── Internal helpers ────────────────────────────────────────────────────────

function removeElement(elementId: string): void {
  // Detach any listeners on this element
  for (const [lid, entry] of listenerMap) {
    if (entry.elementId === elementId) {
      const el = elementMap.get(elementId);
      if (el) el.removeEventListener(entry.event, entry.handler);
      listenerMap.delete(lid);
    }
  }

  const el = elementMap.get(elementId);
  if (el) {
    try { el.remove(); } catch { /* ignore */ }
  }
  elementMap.delete(elementId);
  elementScripts.delete(elementId);
}
