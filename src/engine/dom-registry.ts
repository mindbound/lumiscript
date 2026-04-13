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

export interface DOMElementEntry {
  elementId: string;
  stableId?: string;
  scriptId: string;
  /** listenerId → { event, handler } */
  listeners: Map<string, { event: string; handler: (data: DOMEventData) => void }>;
}

export interface DOMStyleEntry {
  styleId: string;
  scriptId: string;
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
 */
export function registerElement(
  elementId: string,
  scriptId: string,
  stableId?: string,
): DOMElementEntry {
  const entry: DOMElementEntry = {
    elementId,
    stableId,
    scriptId,
    listeners: new Map(),
  };
  elements.set(elementId, entry);
  if (stableId) {
    stableIdIndex.set(stableKey(scriptId, stableId), elementId);
  }
  return entry;
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

export function registerStyle(styleId: string, scriptId: string): void {
  styles.set(styleId, { styleId, scriptId });
}

export function unregisterStyle(styleId: string): void {
  styles.delete(styleId);
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

// ─── Test-only reset ─────────────────────────────────────────────────────────

/** @internal — reset all state (for tests only) */
export function __reset(): void {
  elements.clear();
  styles.clear();
  stableIdIndex.clear();
}
