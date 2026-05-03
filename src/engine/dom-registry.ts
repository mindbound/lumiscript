/**
 * ============================================================================
 * LUMISCRIPT — DOM REGISTRY
 * ============================================================================
 * Tracks DOM injections, styles, and event listener callbacks per-script.
 *
 * Lifecycle:
 *   - Elements and styles persist across script re-executions.
 *   - When inject() is called with a stable ID that already exists, the element
 *     is updated in-place and old listeners are cleared.
 *   - When a script is disabled/deleted, all its DOM state is swept.
 *   - Event callbacks are stored here so the backend can dispatch incoming
 *     dom_event messages from the frontend.
 */

import type { DOMEventData } from '../types/script.js';

// ─── Types ───────────────────────────────────────────────────────────────────

/**
 * How an element entered the DOM registry.
 *
 * - `'selector'` — created by `api.ui.dom.inject(target, html, …)`; replay
 *   must re-emit a `dom_inject` message.
 * - `'message'`  — created by `api.ui.dom.injectAtMessage(messageId, html, …)`;
 *   replay uses `dom_inject_at_message`.
 * - `'shell'`    — root element allocated by a parent register (modal body,
 *   widget body, drawer-tab body). The frontend creates the shell when the
 *   parent register message fires; replay must NOT emit a `dom_inject` for
 *   it, but DOES re-emit `dom_update` if content was ever pushed.
 *
 * The default for bare `registerElement(id, scriptId, stableId?)` calls is
 * `'shell'` — the registry entry exists but no injection has happened.
 */
export type DOMElementKind = 'selector' | 'message' | 'shell';

export interface DOMElementEntry {
  elementId: string;
  stableId?: string;
  scriptId: string;
  /** How this element entered the registry. See `DOMElementKind`. */
  kind: DOMElementKind;
  /** Only for `kind: 'selector'`. CSS selector passed to `inject()`. */
  target?: string;
  /** Only for `kind: 'selector'`. Insertion position (`beforebegin`, etc.). */
  position?: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
  /** Only for `kind: 'message'`. Message UUID passed to `injectAtMessage()`. */
  messageId?: string;
  /** Only for `kind: 'message'`. `'header'` or `'footer'`. */
  messagePosition?: 'header' | 'footer';
  /**
   * Only for `kind: 'selector'` elements created via `DOMHandle.injectChild()`.
   * The elementId of the handle's bound element — frontend uses this to
   * scope the `target` selector via the element-map instead of
   * `document.querySelector`, so injects into orphaned parents (unmounted
   * drawer-tab bodies, etc.) resolve correctly.
   * On replay, re-emitted with the `dom_inject` message so the frontend
   * re-scopes the query after reconnect.
   */
  parentElementId?: string;
  /**
   * HTML last delivered to the frontend for this element:
   *   - For `kind: 'selector'` / `'message'`, set to the `html` arg on the
   *     initial `inject()` call and updated on every subsequent `update()`.
   *   - For `kind: 'shell'`, undefined until the parent's `.root.update()`
   *     is called for the first time.
   *
   * Used for replay: re-emit `dom_update` (or `dom_inject`, depending on
   * kind) with this value to restore the post-refresh content.
   */
  lastHtml?: string;
  /** True if `makeDraggable()` has been called on this element. */
  draggable?: boolean;
  /** Optional CSS selector passed to `makeDraggable()`. */
  draggableHandleSelector?: string;
  /** listenerId → { event, handler } */
  listeners: Map<string, { event: string; handler: (data: DOMEventData) => void }>;
}

export interface DOMStyleEntry {
  styleId: string;
  scriptId: string;
  /**
   * The CSS string originally passed to `addStyle()`. Used for replay — the
   * style element doesn't survive a frontend refresh, so we re-emit
   * `dom_add_style` with the cached CSS when the frontend reconnects.
   */
  css?: string;
  /**
   * Optional user-supplied id from `addStyle(css, { id })`. Scoped per
   * scriptId — different scripts can use the same `userId` without
   * colliding. When set, repeated `addStyle` calls with the same
   * `(scriptId, userId)` replace the prior stylesheet rather than
   * accumulating. Lookup is via `lookupStyleByUserId(scriptId, userId)`.
   */
  userId?: string;
}

/**
 * Extras accepted alongside `registerElement()` — describes how the element
 * entered the registry so the replay pipeline can reconstruct the correct
 * register message later. All fields optional; if absent the entry is treated
 * as a pure `'shell'` with no stored injection details.
 */
export interface DOMRegisterExtras {
  kind?: DOMElementKind;
  target?: string;
  position?: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
  messageId?: string;
  messagePosition?: 'header' | 'footer';
  initialHtml?: string;
  /**
   * When set, the `target` selector is resolved relative to the element
   * with this id (via the frontend's element-map), not via
   * `document.querySelector`. Used by `DOMHandle.injectChild()` so scripts
   * can inject into a parent that isn't yet in the live DOM (orphaned
   * modal / widget / drawer-tab bodies).
   */
  parentElementId?: string;
}

// ─── Registry state ──────────────────────────────────────────────────────────

/** elementId → entry */
const elements = new Map<string, DOMElementEntry>();

/** styleId → entry */
const styles = new Map<string, DOMStyleEntry>();

/** scriptId:stableId → elementId  (quick lookup for idempotent injection) */
const stableIdIndex = new Map<string, string>();

// ─── Element operations ──────────────────────────────────────────────────────

function stableKey(scriptId: string, stableId: string): string {
  return `${scriptId}:${stableId}`;
}

/**
 * Register a new element. If `stableId` is provided, indexes it for
 * later lookup via `resolveStableId()`.
 *
 * Pass `extras` to record injection metadata (kind + target/html/position/etc.)
 * needed for replay on frontend reconnect. Calls that omit `extras` create
 * a bare `'shell'` entry — the default for modal/widget/tab root elements.
 */
export function registerElement(
  elementId: string,
  scriptId: string,
  stableId?: string,
  extras?: DOMRegisterExtras,
): DOMElementEntry {
  const entry: DOMElementEntry = {
    elementId,
    stableId,
    scriptId,
    kind: extras?.kind ?? 'shell',
    target: extras?.target,
    position: extras?.position,
    messageId: extras?.messageId,
    messagePosition: extras?.messagePosition,
    parentElementId: extras?.parentElementId,
    lastHtml: extras?.initialHtml,
    listeners: new Map(),
  };
  elements.set(elementId, entry);
  if (stableId) {
    stableIdIndex.set(stableKey(scriptId, stableId), elementId);
  }
  return entry;
}

/**
 * Update the cached `lastHtml` on an element. Called from `handle.update(html)`
 * alongside the outbound `dom_update` message so the registry stays in sync
 * with what the frontend most recently rendered. Also called from
 * `inject/injectAtMessage` when an existing stable-id element is updated
 * in place. No-op on unknown elements.
 */
export function updateElementHtml(elementId: string, html: string): void {
  const entry = elements.get(elementId);
  if (!entry) return;
  entry.lastHtml = html;
}

/**
 * Mark an element as draggable. Called from `handle.makeDraggable(selector?)`
 * alongside the outbound `dom_make_draggable` message. Stores the optional
 * handle selector so replay can re-emit the full call. No-op on unknown
 * elements.
 */
export function setDraggable(elementId: string, handleSelector?: string): void {
  const entry = elements.get(elementId);
  if (!entry) return;
  entry.draggable = true;
  entry.draggableHandleSelector = handleSelector;
}

/**
 * Look up an existing element by stable ID for this script.
 * Returns the elementId if found, undefined otherwise.
 */
export function resolveStableId(scriptId: string, stableId: string): string | undefined {
  return stableIdIndex.get(stableKey(scriptId, stableId));
}

/**
 * Remove an element from the registry and clear its stable ID index entry.
 */
export function unregisterElement(elementId: string): void {
  const entry = elements.get(elementId);
  if (!entry) return;
  if (entry.stableId) {
    stableIdIndex.delete(stableKey(entry.scriptId, entry.stableId));
  }
  elements.delete(elementId);
}

/**
 * Walk the `parentElementId` tree rooted at `elementId` and return every
 * descendant's elementId. Traversal is iterative (stack-based — no recursion
 * depth cap) and pre-order: each element is listed before its own
 * descendants. Self-loops or cross-links are not possible by construction
 * (scripts can only inject a child of an already-existing handle), but if
 * one did occur the repeat-detection guard below prevents an infinite loop.
 *
 * Used by \`DOMHandle.remove()\` to cascade cleanup — without this, a script
 * that removes a parent (or destroys a shell whose body has children from
 * \`injectChild\`) would leave orphan entries in the registry with stale
 * \`parentElementId\` refs. On next replay those children would emit
 * \`dom_inject\` messages with dead parents, the frontend would drop them
 * with a warn, and the orphans would live until the next script disable.
 */
export function collectDescendantIds(elementId: string): string[] {
  const descendants: string[] = [];
  const seen = new Set<string>([elementId]);
  const stack: string[] = [elementId];
  while (stack.length > 0) {
    const current = stack.pop()!;
    for (const [id, entry] of elements) {
      if (entry.parentElementId === current && !seen.has(id)) {
        seen.add(id);
        descendants.push(id);
        stack.push(id);
      }
    }
  }
  return descendants;
}

/**
 * Get an element entry by ID.
 */
export function getElement(elementId: string): DOMElementEntry | undefined {
  return elements.get(elementId);
}

// ─── Listener operations ─────────────────────────────────────────────────────

/**
 * Register a listener callback on an element.
 */
export function addListener(
  elementId: string,
  listenerId: string,
  event: string,
  handler: (data: DOMEventData) => void,
): void {
  const entry = elements.get(elementId);
  if (!entry) return;
  entry.listeners.set(listenerId, { event, handler });
}

/**
 * Remove a specific listener from an element.
 */
export function removeListener(elementId: string, listenerId: string): void {
  const entry = elements.get(elementId);
  if (!entry) return;
  entry.listeners.delete(listenerId);
}

/**
 * Clear all listeners on an element. Returns the listener IDs and events
 * so the caller can send dom_unlisten messages to the frontend.
 */
export function clearListeners(elementId: string): Array<{ listenerId: string; event: string }> {
  const entry = elements.get(elementId);
  if (!entry) return [];
  const cleared: Array<{ listenerId: string; event: string }> = [];
  for (const [listenerId, { event }] of entry.listeners) {
    cleared.push({ listenerId, event });
  }
  entry.listeners.clear();
  return cleared;
}

/**
 * Dispatch an incoming dom_event from the frontend to the registered callback.
 */
export function dispatchEvent(listenerId: string, data: DOMEventData): void {
  // Linear scan — listener IDs are globally unique, but stored per-element.
  // Acceptable perf for the expected cardinality (dozens, not thousands).
  for (const entry of elements.values()) {
    const listener = entry.listeners.get(listenerId);
    if (listener) {
      try {
        listener.handler(data);
      } catch {
        // Swallow errors from user callbacks to prevent crashing the message handler.
      }
      return;
    }
  }
}

// ─── Style operations ────────────────────────────────────────────────────────

/**
 * Register a `<style>` injection.
 *
 * @param styleId   Internal style id (host-allocated; opaque to user code).
 * @param scriptId  Owning script. Cleanup is per-script via `cleanupScript`.
 * @param css       The CSS string. Pass to enable replay on frontend reconnect
 *                  — without it the style cannot be reconstructed after refresh.
 *                  Optional for backward-compat with earlier call sites.
 * @param userId    Optional user-supplied id from `addStyle(css, { id })`.
 *                  Scoped per scriptId. When set, the caller is expected to
 *                  have already removed any prior style with the same
 *                  `(scriptId, userId)` via `lookupStyleByUserId` +
 *                  `unregisterStyle` — `registerStyle` does not enforce
 *                  uniqueness on its own.
 */
export function registerStyle(
  styleId:  string,
  scriptId: string,
  css?:     string,
  userId?:  string,
): void {
  styles.set(styleId, { styleId, scriptId, css, userId });
}

export function unregisterStyle(styleId: string): void {
  styles.delete(styleId);
}

/**
 * Find the styleId for a `(scriptId, userId)` pair. Returns null when no
 * such style is registered. Used by `api.ui.dom.addStyle` to implement
 * replace-by-id semantics: if the caller supplies an `id`, look up the
 * prior styleId, unregister it, then register the new one.
 *
 * Linear scan over `styles` — fine for the expected scale (a single
 * script rarely registers more than a handful of stylesheets). Promote
 * to a dedicated index if it ever becomes a hot path.
 */
export function lookupStyleByUserId(scriptId: string, userId: string): string | null {
  for (const entry of styles.values()) {
    if (entry.scriptId === scriptId && entry.userId === userId) {
      return entry.styleId;
    }
  }
  return null;
}

// ─── Per-script cleanup ──────────────────────────────────────────────────────

/**
 * Remove all elements and styles for a given script.
 * Returns the IDs so the caller can send cleanup messages to the frontend.
 */
export function cleanupScript(scriptId: string): {
  elementIds: string[];
  styleIds: string[];
} {
  const elementIds: string[] = [];
  const styleIds: string[] = [];

  for (const [id, entry] of elements) {
    if (entry.scriptId === scriptId) {
      elementIds.push(id);
      if (entry.stableId) {
        stableIdIndex.delete(stableKey(scriptId, entry.stableId));
      }
      elements.delete(id);
    }
  }

  for (const [id, entry] of styles) {
    if (entry.scriptId === scriptId) {
      styleIds.push(id);
      styles.delete(id);
    }
  }

  return { elementIds, styleIds };
}

// ─── Replay (frontend reconnect) ─────────────────────────────────────────────

/**
 * Build `dom_add_style` messages for every live style. Should be emitted
 * FIRST on reconnect, before any `dom_inject` or register-family message,
 * so injected content doesn't flash unstyled while it waits for the CSS
 * that targets it to re-attach.
 *
 * Entries without a cached `css` string (legacy registrations from before
 * Phase 1) are skipped — we have no way to reconstruct them.
 */
export function listStyleReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of styles.values()) {
    if (entry.css === undefined) continue;
    out.push({
      type: 'dom_add_style',
      scriptId: entry.scriptId,
      styleId: entry.styleId,
      css: entry.css,
    });
  }
  return out;
}

/**
 * Build `dom_inject` / `dom_inject_at_message` messages for every non-shell
 * element — standalone injections the script made via `api.ui.dom.inject()`
 * or `api.ui.dom.injectAtMessage()`. Emitted AFTER the register-family
 * messages so parent shells exist before content is injected into them
 * (shells themselves don't appear here).
 *
 * The re-emitted messages use the original `stableId`, `target`/`messageId`,
 * `position`, and the most recent `lastHtml` — so post-refresh content
 * matches what the script last rendered, not the initial injection.
 */
export function listElementInjectMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of elements.values()) {
    if (entry.kind === 'shell') continue;
    if (entry.lastHtml === undefined) continue;
    if (entry.kind === 'selector') {
      // `parentElementId` only set for `DOMHandle.injectChild()` entries —
      // preserved on replay so the frontend re-scopes the selector lookup
      // to the (post-reconnect) parent element's subtree. Parent shell
      // registers (modal/widget/tab) are flushed earlier in the cross-
      // registry order, so by the time this inject replays, the parent
      // is already rebound in elementMap.
      out.push({
        type: 'dom_inject',
        scriptId: entry.scriptId,
        elementId: entry.elementId,
        target: entry.target ?? '',
        html: entry.lastHtml,
        position: entry.position ?? 'beforeend',
        stableId: entry.stableId,
        parentElementId: entry.parentElementId,
      });
    } else if (entry.kind === 'message') {
      out.push({
        type: 'dom_inject_at_message',
        scriptId: entry.scriptId,
        elementId: entry.elementId,
        messageId: entry.messageId ?? '',
        html: entry.lastHtml,
        position: entry.messagePosition ?? 'footer',
        stableId: entry.stableId,
      });
    }
  }
  return out;
}

/**
 * Build `dom_update` messages for every shell element that has cached
 * `lastHtml`. Shells (modal / widget / tab root bodies) are re-created by
 * their parent register message — replay populates their content AFTER the
 * parent is in place.
 *
 * Shells that never received a `handle.root.update(html)` call have no
 * cached HTML and are skipped (the frontend renders the shell empty, same
 * as it would on initial mount before any content was pushed).
 */
export function listShellUpdateMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of elements.values()) {
    if (entry.kind !== 'shell') continue;
    if (entry.lastHtml === undefined) continue;
    out.push({
      type: 'dom_update',
      elementId: entry.elementId,
      html: entry.lastHtml,
    });
  }
  return out;
}

/**
 * Build `dom_listen` messages for every registered listener, across every
 * live element. Emitted after inject / shell-update so the target elements
 * exist when the frontend wires the listeners.
 *
 * The handler closure itself lives in the backend registry entry —
 * the frontend only needs to know the `(elementId, listenerId, event)` so
 * it can route future `dom_event` messages back to the same `listenerId`.
 */
export function listListenerReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of elements.values()) {
    for (const [listenerId, { event }] of entry.listeners) {
      out.push({
        type: 'dom_listen',
        elementId: entry.elementId,
        listenerId,
        event,
      });
    }
  }
  return out;
}

/**
 * Build `dom_make_draggable` messages for every element flagged via
 * `handle.makeDraggable()`. Emitted after inject / shell-update — the
 * frontend's drag wiring needs the target element mounted.
 */
export function listDraggableReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const entry of elements.values()) {
    if (!entry.draggable) continue;
    out.push({
      type: 'dom_make_draggable',
      elementId: entry.elementId,
      handleSelector: entry.draggableHandleSelector,
    });
  }
  return out;
}

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  elements.clear();
  styles.clear();
  stableIdIndex.clear();
}
