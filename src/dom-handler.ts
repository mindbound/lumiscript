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
  | { type: 'dom_update' }
  | { type: 'dom_remove' }
  | { type: 'dom_add_style' }
  | { type: 'dom_remove_style' }
  | { type: 'dom_listen' }
  | { type: 'dom_unlisten' }
  | { type: 'dom_cleanup_script' }
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
    }
  });

  // ── Cleanup ────────────────────────────────────────────────────────────
  return () => {
    unsubMessages();

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
