/**
 * ============================================================================
 * LUMISCRIPT — DOM INJECTION API
 * ============================================================================
 * api.ui.dom — remote DOM manipulation proxy.
 *
 * Scripts run server-side in a Bun worker. This API generates messages that
 * are sent to the frontend via spindle.sendToFrontend(), where the frontend
 * DOM handler translates them into ctx.dom.* calls.
 *
 * All operations are fire-and-forget — the backend does not await confirmation
 * from the frontend.
 *
 * Requires the `app_manipulation` Spindle permission.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, DOMAddStyleOptions, DOMEventData, DOMHandle, DOMInjectOptions, DOMListenOptions, DOMMessageInjectOptions } from '../../types/script.js';
import type { BackendToFrontend } from '../../types/messages.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';
import {
  registerElement,
  resolveStableId,
  unregisterElement,
  registerStyle,
  unregisterStyle,
  lookupStyleByUserId,
  addListener,
  removeListener,
  clearListeners,
  cleanupScript,
  updateElementHtml,
  setDraggable,
  collectDescendantIds,
} from '../dom-registry.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

let _idCounter = 0;
export function nextDOMId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${(++_idCounter).toString(36)}`;
}

// Local alias retained for the rest of this module.
const nextId = nextDOMId;

function send(msg: BackendToFrontend): void {
  spindle.sendToFrontend(msg);
}

/**
 * Build a `DOMHandle` for the given `elementId` using the provided API build
 * dependencies. Exposed at module scope (rather than closed over inside
 * `buildDOMAPI`) so other API builders — e.g. `showAdvancedModal` in `ui.ts`
 * — can wrap elements they allocate via the existing DOM message pipeline
 * without duplicating the handle shape.
 *
 * The handle's permission gate and `deps.script.name` are resolved from `deps`
 * at call time, matching the behaviour of handles created inside `buildDOMAPI`.
 */
export function createDOMHandle(elementId: string, deps: APIBuildDeps): DOMHandle {
  function gate(): void {
    assertPerm('app_manipulation', deps.hasPerm, deps.script.name);
  }

  return {
    get id() { return elementId; },

    update(html: string): void {
      gate();
      // Keep the registry's `lastHtml` in sync so replay-on-reconnect
      // restores the most recent content, not the initial one.
      updateElementHtml(elementId, html);
      send({ type: 'dom_update', elementId, html });
    },

    remove(): void {
      gate();
      // Cascade to children first (entries registered via `injectChild`
      // with `parentElementId: elementId`). Without this, removing a
      // parent leaves orphan entries in the registry — on next replay,
      // those children would emit `dom_inject` with dead parent refs
      // and get dropped with a warn. Collected before unregistration so
      // Map iteration stays consistent.
      //
      // Per-child `dom_remove` ensures the frontend's `elementMap` also
      // sheds its entries. The parent's DOM removal cascades visually
      // (browser removes the subtree), but elementMap refs to detached
      // DOM would linger without explicit remove messages.
      const descendants = collectDescendantIds(elementId);
      for (const childId of descendants) {
        clearListeners(childId);
        unregisterElement(childId);
        send({ type: 'dom_remove', elementId: childId });
      }
      clearListeners(elementId);
      unregisterElement(elementId);
      send({ type: 'dom_remove', elementId });
    },

    on(
      event: string,
      handler: (data: DOMEventData) => void,
      options?: DOMListenOptions,
    ): () => void {
      gate();
      const listenerId = nextId('dl');
      addListener(elementId, listenerId, event, handler);
      send({
        type: 'dom_listen',
        elementId,
        listenerId,
        event,
        preventDefault: options?.preventDefault,
      });

      return () => {
        removeListener(elementId, listenerId);
        send({ type: 'dom_unlisten', elementId, listenerId, event });
      };
    },

    makeDraggable(handleSelector?: string): void {
      gate();
      // Flag the entry as draggable so replay-on-reconnect can re-emit the
      // same `dom_make_draggable` message after the element is re-injected.
      setDraggable(elementId, handleSelector);
      send({ type: 'dom_make_draggable', elementId, handleSelector });
    },

    injectChild(
      target: string,
      html: string,
      options: DOMInjectOptions = {},
    ): DOMHandle {
      gate();
      const scriptId = deps.script.id;
      const { position = 'beforeend', id: stableId } = options;

      // ── Idempotent injection via stable ID ───────────────────────────
      // Stable-IDs are scripted-scoped (not parent-scoped) — if the user
      // passes an ID that already resolves, we update that existing
      // element in place regardless of which parent it was originally
      // injected under. This is consistent with `api.ui.dom.inject` and
      // keeps the two entry points interchangeable for scripts that
      // switch between document-scoped and handle-scoped injection.
      if (stableId) {
        const existingId = resolveStableId(scriptId, stableId);
        if (existingId) {
          const cleared = clearListeners(existingId);
          for (const { listenerId, event } of cleared) {
            send({ type: 'dom_unlisten', elementId: existingId, listenerId, event });
          }
          updateElementHtml(existingId, html);
          send({ type: 'dom_update', elementId: existingId, html });
          return createDOMHandle(existingId, deps);
        }
      }

      // ── New injection, scoped to this parent ─────────────────────────
      // `parentElementId: elementId` tells the frontend to resolve `target`
      // via this handle's element-map ref, not via `document.querySelector`.
      // Works even when the parent is orphaned (drawer tab not yet clicked,
      // modal/widget body pre-mount) — the element-map holds the ref
      // regardless of live-tree membership.
      //
      // Phase 9d.4.c-1 sync-return repair — same `_elementId` threading
      // as `inject` above. Honor proxy-supplied id when present.
      const childId = options._elementId ?? nextDOMId('de');
      registerElement(childId, scriptId, stableId, {
        kind: 'selector',
        target,
        position,
        initialHtml: html,
        parentElementId: elementId,
      });
      send({
        type: 'dom_inject',
        scriptId,
        elementId: childId,
        target,
        html,
        position,
        stableId,
        parentElementId: elementId,
      });
      return createDOMHandle(childId, deps);
    },
  };
}

// ─── API builder ─────────────────────────────────────────────────────────────

export function buildDOMAPI(deps: APIBuildDeps): LumiScriptAPI['ui']['dom'] {
  const scriptId = deps.script.id;

  function gate(): void {
    assertPerm('app_manipulation', deps.hasPerm, deps.script.name);
  }

  const createHandle = (elementId: string): DOMHandle => createDOMHandle(elementId, deps);

  return {
    inject(
      target: string,
      html: string,
      options: DOMInjectOptions = {},
    ): DOMHandle {
      gate();
      const { position = 'beforeend', id: stableId } = options;

      // ── Idempotent injection via stable ID ───────────────────────────
      if (stableId) {
        const existingId = resolveStableId(scriptId, stableId);
        if (existingId) {
          // Element already exists — update in place, clear old listeners.
          const cleared = clearListeners(existingId);
          for (const { listenerId, event } of cleared) {
            send({ type: 'dom_unlisten', elementId: existingId, listenerId, event });
          }
          updateElementHtml(existingId, html);
          send({ type: 'dom_update', elementId: existingId, html });
          return createHandle(existingId);
        }
      }

      // ── New injection ────────────────────────────────────────────────
      // Phase 9d.4.c-1 sync-return repair — `options._elementId` is an
      // @internal opt-in for the script-runner child runtime. When the
      // child supplies it, we honor it as the elementId so the proxy-
      // side sync-shaped DOMHandle carries an id matching parent state.
      // Behaviourally identical when omitted (typical user-code path).
      const elementId = options._elementId ?? nextId('de');
      registerElement(elementId, scriptId, stableId, {
        kind: 'selector',
        target,
        position,
        initialHtml: html,
      });
      send({
        type: 'dom_inject',
        scriptId,
        elementId,
        target,
        html,
        position,
        stableId,
      });
      return createHandle(elementId);
    },

    injectAtMessage(
      messageId: string,
      html: string,
      options: DOMMessageInjectOptions = {},
    ): DOMHandle {
      gate();
      const { position = 'footer', id: stableId } = options;

      // ── Idempotent injection via stable ID ───────────────────────────
      if (stableId) {
        const existingId = resolveStableId(scriptId, stableId);
        if (existingId) {
          const cleared = clearListeners(existingId);
          for (const { listenerId, event } of cleared) {
            send({ type: 'dom_unlisten', elementId: existingId, listenerId, event });
          }
          updateElementHtml(existingId, html);
          send({ type: 'dom_update', elementId: existingId, html });
          return createHandle(existingId);
        }
      }

      // ── New injection ────────────────────────────────────────────────
      // Phase 9d.4.c-1 sync-return repair — same `_elementId` threading
      // as `inject` above.
      const elementId = options._elementId ?? nextId('de');
      registerElement(elementId, scriptId, stableId, {
        kind: 'message',
        messageId,
        messagePosition: position,
        initialHtml: html,
      });
      send({
        type: 'dom_inject_at_message',
        scriptId,
        elementId,
        messageId,
        html,
        position,
        stableId,
      });
      return createHandle(elementId);
    },

    addStyle(css: string, opts?: DOMAddStyleOptions): { remove(): void } {
      gate();

      // v0.26.x — replace-by-id semantics. When `opts.id` is supplied, a
      // subsequent `addStyle` call with the same `id` (within this script)
      // removes the prior stylesheet first, then injects the new one.
      // Without `id`, every call adds a fresh stylesheet (the original
      // accumulating behaviour — useful for situations where multiple
      // cumulative stylesheets are intentional).
      //
      // The motivating use case is dev iteration: an inject-once stylesheet
      // gated on a `globalThis` flag silently fails to refresh when the
      // user edits the CSS, because the flag is already set and the prior
      // stylesheet is still in the host DOM. With `id`, the script just
      // calls `addStyle(css, { id: 'foo' })` on every fire and trusts the
      // platform to handle replacement transparently.
      if (opts?.id !== undefined) {
        const priorStyleId = lookupStyleByUserId(scriptId, opts.id);
        if (priorStyleId) {
          unregisterStyle(priorStyleId);
          send({ type: 'dom_remove_style', styleId: priorStyleId });
        }
      }

      const styleId = nextId('ds');
      registerStyle(styleId, scriptId, css, opts?.id);
      send({ type: 'dom_add_style', scriptId, styleId, css });

      return {
        remove(): void {
          unregisterStyle(styleId);
          send({ type: 'dom_remove_style', styleId });
        },
      };
    },

    cleanup(): void {
      gate();
      const { elementIds, styleIds } = cleanupScript(scriptId);
      // Single message tells the frontend to remove everything for this script.
      // The frontend also removes individual elements/styles, but the bulk
      // message is simpler and handles race conditions.
      if (elementIds.length > 0 || styleIds.length > 0) {
        send({ type: 'dom_cleanup_script', scriptId });
      }
    },

  };
}
