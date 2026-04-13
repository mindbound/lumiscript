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
import type { DOMEventData } from './types/script.js';

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

  if (event instanceof CustomEvent && event.detail !== undefined) {
    try {
      // Ensure detail is JSON-serializable
      JSON.stringify(event.detail);
      data.detail = event.detail;
    } catch {
      // Non-serializable detail — omit
    }
  }

  return data;
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
        const { scriptId, elementId, target, html, position, stableId } = msg;

        // Wrap HTML in a scoped container
        const wrappedHtml = `<div data-ls-script="${scriptId}" data-ls-el="${elementId}">${html}</div>`;

        const el = ctx.dom.inject(target, wrappedHtml, position as InsertPosition);
        elementMap.set(elementId, el);
        elementScripts.set(elementId, scriptId);

        if (stableId) {
          stableIndex.set(stableKey(scriptId, stableId), elementId);
        }
        break;
      }

      // ── Inject at Message ────────────────────────────────────────────
      case 'dom_inject_at_message': {
        const { scriptId, elementId, messageId, html, position, stableId } = msg;

        const doInject = (bubbleEl: Element) => {
          const wrappedHtml = `<div data-ls-script="${scriptId}" data-ls-el="${elementId}">${html}</div>`;
          // For 'header', inject right before the bubble's _header_ div
          // (avatar / name / meta-pill row), so our header sits above the
          // chat bubble header and clear of the actions pill.
          // For 'footer', append to the bubble itself.
          let target: Element = bubbleEl;
          let insertPos: InsertPosition;
          if (position === 'header') {
            const headerEl = bubbleEl.querySelector('[class*="_header_"]');
            if (headerEl) {
              target = headerEl;
              insertPos = 'beforebegin';
            } else {
              insertPos = 'afterbegin';
            }
          } else {
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
          const bubble = findBubble(messageEl);
          if (bubble) doInject(bubble);
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
            const bubble = findBubble(msgEl);
            if (bubble) doInject(bubble);
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
        const { elementId, listenerId, event } = msg;
        const el = elementMap.get(elementId);
        if (!el) break;

        const handler: EventListener = (evt: Event) => {
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
        const { elementId } = msg;
        const wrapper = elementMap.get(elementId);
        if (!wrapper) break;

        // The wrapper is the data-ls-el container; the actual button is inside.
        const el = (wrapper.querySelector('button') ?? wrapper) as HTMLElement;
        el.style.touchAction = 'none';

        let dragging = false;
        let didMove = false;
        let offsetX = 0;
        let offsetY = 0;

        const onPointerDown = (e: PointerEvent) => {
          if (e.button !== 0) return;
          dragging = true;
          didMove = false;
          offsetX = e.clientX - el.getBoundingClientRect().left;
          offsetY = e.clientY - el.getBoundingClientRect().top;
          el.style.cursor = 'grabbing';
          el.setPointerCapture(e.pointerId);
          e.preventDefault();
        };

        const onPointerMove = (e: PointerEvent) => {
          if (!dragging) return;
          didMove = true;
          el.style.top = `${e.clientY - offsetY}px`;
          el.style.left = `${e.clientX - offsetX}px`;
          el.style.bottom = 'auto';
          el.style.right = 'auto';
        };

        const onPointerUp = () => {
          if (!dragging) return;
          dragging = false;
          el.style.cursor = '';
        };

        // Suppress the click event that fires after a drag so script
        // click handlers don't trigger on release.
        const onClickCapture = (e: MouseEvent) => {
          if (didMove) {
            e.stopImmediatePropagation();
            e.preventDefault();
            didMove = false;
          }
        };

        el.addEventListener('pointerdown', onPointerDown);
        el.addEventListener('pointermove', onPointerMove);
        el.addEventListener('pointerup', onPointerUp);
        el.addEventListener('pointercancel', onPointerUp);
        el.addEventListener('click', onClickCapture, true);
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
