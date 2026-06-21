/**
 * ============================================================================
 * LUMISCRIPT — MESSAGE TAG HANDLER REGISTRY
 * ============================================================================
 * Backend-side state for message-tag interceptors registered via
 * `api.chat.onMessageTag()`. Each registration is identified by a unique `id`
 * (the child-generated handler id).
 *
 * The FRONTEND owns the actual host `ctx.messages.registerTagInterceptor`; this
 * registry (a) maps a fired-tag delivery — routed up from the FE keyed by `id` —
 * to the script's handler, (b) tracks ownership for teardown, and (c) supplies
 * the diagnostics interceptor count. Worker pinning for this kind rides the
 * host-dispatcher's handler-cleanup count (`script-pinning.ts` reads
 * `handlerCleanups`, populated by `recordHandlerCleanup`), NOT this registry.
 *
 * One host interceptor per registration: the host keeps a per-`tagName` LIST and
 * fires every registration (verified against the host source), so no multiplexing
 * is needed — two scripts can intercept the same tag without collision.
 *
 * Lifecycle:
 *   - `registerTagHandler` records an entry (the handler is the host-dispatcher
 *     wrapper that forwards a fire into the child).
 *   - `dispatchTagEvent` fires when the FE echoes `ls_tag_interceptor_fired`.
 *   - `removeTagHandler` / `clearByScriptId` drop entries; the CALLER is
 *     responsible for sending `ls_tag_interceptor_unregister` to the FE first
 *     (symmetric teardown — otherwise the host interceptor zombies).
 */

import type { MessageTagEvent, MessageTagOptions } from '../types/script.js';

export interface MessageTagHandlerEntry {
  id:         string;
  scriptId:   string;
  scriptName: string;
  tagName:    string;
  options?:   MessageTagOptions;
  handler:    (event: MessageTagEvent) => void | Promise<void>;
}

const handlers = new Map<string, MessageTagHandlerEntry>();

/** Register an interceptor. `id` is the child-generated handler id (unique). */
export function registerTagHandler(
  scriptId:   string,
  scriptName: string,
  id:         string,
  tagName:    string,
  handler:    (event: MessageTagEvent) => void | Promise<void>,
  options?:   MessageTagOptions,
): MessageTagHandlerEntry {
  const entry: MessageTagHandlerEntry = { id, scriptId, scriptName, tagName, options, handler };
  handlers.set(id, entry);
  return entry;
}

/** Drop an interceptor by id, ownership-scoped. Returns whether it existed. */
export function removeTagHandler(scriptId: string, id: string): boolean {
  const entry = handlers.get(id);
  if (!entry || entry.scriptId !== scriptId) return false;
  handlers.delete(id);
  return true;
}

/**
 * Dispatch a fired tag (routed up from the FE by id) to its handler. Ownership-
 * scoped (mirrors `dispatchClick` in input-bar-action-registry): the fired
 * message's `scriptId` must match the entry's owner, so the routing contract
 * can't misroute even under a future non-globally-unique id scheme. The handler
 * is the host-dispatcher wrapper that forwards into the child — fire-and-forget;
 * a rejected/throwing dispatch is swallowed here (the child surfaces script
 * errors via its own console / status indicator).
 */
export function dispatchTagEvent(scriptId: string, id: string, event: MessageTagEvent): void {
  const entry = handlers.get(id);
  if (!entry || entry.scriptId !== scriptId) return;
  try {
    const result = entry.handler(event);
    if (result && typeof (result as Promise<void>).catch === 'function') {
      (result as Promise<void>).catch(() => { /* child reports its own errors */ });
    }
  } catch {
    /* swallowed — see above */
  }
}

/** Count live interceptors owned by a script — surfaced in the diagnostics
 *  "Registrations" section. (Worker pinning rides the handler-cleanup count, not this.) */
export function countByScriptId(scriptId: string): number {
  let n = 0;
  for (const e of handlers.values()) if (e.scriptId === scriptId) n++;
  return n;
}

/** Every live interceptor owned by a script — used by the teardown sweep. */
export function listByScript(scriptId: string): MessageTagHandlerEntry[] {
  const out: MessageTagHandlerEntry[] = [];
  for (const e of handlers.values()) if (e.scriptId === scriptId) out.push(e);
  return out;
}

/** Drop every entry owned by a script (after FE-unregister messages are sent). */
export function clearByScriptId(scriptId: string): void {
  for (const [id, e] of handlers) if (e.scriptId === scriptId) handlers.delete(id);
}

/**
 * Re-register-message list for a freshly-mounted frontend (browser refresh).
 * Pure: does not mutate or send. The caller flushes via `spindle.sendToFrontend`.
 */
export function listReplayMessages(): import('../types/messages.js').BackendToFrontend[] {
  const out: import('../types/messages.js').BackendToFrontend[] = [];
  for (const e of handlers.values()) {
    out.push({
      type:      'ls_tag_interceptor_register',
      scriptId:  e.scriptId,
      handlerId: e.id,
      tagName:   e.tagName,
      ...(e.options !== undefined ? { options: e.options } : {}),
    });
  }
  return out;
}

/** @internal — reset all state (tests only). */
export function __reset(): void {
  handlers.clear();
}
