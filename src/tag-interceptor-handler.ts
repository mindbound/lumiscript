/**
 * ============================================================================
 * LUMISCRIPT — FRONTEND MESSAGE-TAG INTERCEPTOR HANDLER
 * ============================================================================
 * Runs in the browser. Translates `ls_tag_interceptor_register` /
 * `ls_tag_interceptor_unregister` messages from the backend into host
 * `ctx.messages.registerTagInterceptor(...)` calls, and echoes matched tags
 * back to the backend (`ls_tag_interceptor_fired`) so the script's
 * `onMessageTag` handler fires.
 *
 * MULTIPLEXING (required — host-verified). The host dedupes delivery by a
 * key that includes only the `extensionId` (shared across ALL LumiScript
 * scripts), NOT a per-interceptor identity. So registering one host
 * interceptor per script-registration would make two scripts intercepting the
 * SAME tag collide — only the first would ever fire. We therefore register
 * exactly ONE host interceptor per `tagName` and fan a match out to every
 * registered handler locally. Per-handler `attrs` filtering is done in the
 * bridge (the host interceptor registers with no `attrs`, matching all `<tag>`);
 * `removeFromMessage` is OR-merged across the tag's handlers (any handler that
 * wants the tag stripped wins — matching the host's own multi-interceptor
 * semantics) and the host interceptor is re-registered if that merged value
 * changes.
 *
 * v1 delivery model (see notes/message-tag-delivery-roadmap.md):
 *   - Deliver ONLY completion fires (`!isStreaming`) — one delivery per
 *     completed message, no streaming flood.
 *   - The chat list is virtualized, so a completed message re-firing on remount
 *     would double-deliver. A PERSISTENT (module-level) dedup set keyed
 *     `scope:tagName:fullMatch:handlerId` collapses that to "once per distinct
 *     message-state per session"; `fullMatch` makes an edit re-fire correctly.
 */

import type { SpindleFrontendContext } from 'lumiverse-spindle-types';
import type { BackendToFrontend, FrontendToBackend } from './types/messages.js';

// The host payload shape (`SpindleMessageTagIntercept`) — declared structurally
// to avoid coupling to the exact type name across host versions.
interface HostTagIntercept {
  tagName: string;
  attrs: Record<string, string>;
  content: string;
  fullMatch: string;
  messageId?: string;
  chatId?: string;
  isUser?: boolean;
  isStreaming?: boolean;
}

type TagInterceptorMessage = Extract<BackendToFrontend,
  | { type: 'ls_tag_interceptor_register' }
  | { type: 'ls_tag_interceptor_unregister' }
>;

function isTagInterceptorMessage(msg: unknown): msg is TagInterceptorMessage {
  const t = (msg as { type?: string })?.type;
  return t === 'ls_tag_interceptor_register' || t === 'ls_tag_interceptor_unregister';
}

// ─── State ───────────────────────────────────────────────────────────────────

interface RegisteredHandler {
  scriptId: string;
  attrs?: Record<string, string>;
  removeFromMessage?: boolean;
}

interface TagGroup {
  /** Host unsubscribe for this tag's single interceptor. */
  hostUnsub: () => void;
  /** The `removeFromMessage` value the host interceptor is currently registered with. */
  removeFromMessage: boolean;
  /** handlerId → registration. */
  handlers: Map<string, RegisteredHandler>;
}

/** tagName → group (one host interceptor per tag). */
const groups = new Map<string, TagGroup>();
/** handlerId → tagName (so unregister, which carries only handlerId, finds the group). */
const handlerToTag = new Map<string, string>();

/**
 * Persistent delivery-dedup. Keyed `scope:tagName:fullMatch:handlerId`. Survives
 * message-component remounts (this module is a singleton), so the virtualized
 * list re-firing a completed message on scroll-back doesn't re-deliver. Bounded
 * — past the cap the oldest keys drop (worst case: one stale entry re-delivers).
 */
const delivered = new Set<string>();
const DELIVERED_MAX = 5_000;

function markDelivered(key: string): void {
  delivered.add(key);
  if (delivered.size > DELIVERED_MAX) {
    const drop = delivered.size - DELIVERED_MAX;
    let i = 0;
    for (const k of delivered) {
      if (i++ >= drop) break;
      delivered.delete(k);
    }
  }
}

/** A handler's `attrs` must be a subset of the tag's actual attrs (matching values). */
function attrsMatch(want: Record<string, string> | undefined, have: Record<string, string>): boolean {
  if (!want) return true;
  for (const k of Object.keys(want)) {
    if (have[k] !== want[k]) return false;
  }
  return true;
}

/** The host interceptor strips iff ANY handler wants it (removeFromMessage defaults true). */
function wantsRemove(group: TagGroup): boolean {
  for (const h of group.handlers.values()) {
    if (h.removeFromMessage !== false) return true;
  }
  return false;
}

// ─── Handler ─────────────────────────────────────────────────────────────────

/**
 * Install the message-tag interceptor handler on the frontend message
 * multiplexer. Returns a cleanup that unregisters every host interceptor and
 * detaches the subscription.
 */
export function installTagInterceptorHandler(
  ctx: SpindleFrontendContext,
  onBackendMessage: (handler: (msg: unknown) => void) => () => void,
  sendToBackend: (msg: FrontendToBackend) => void,
): () => void {
  // Register one host interceptor for a tag; the fan-out closure delivers to
  // every matching handler in the group.
  const registerHost = (tagName: string, removeFromMessage: boolean): (() => void) =>
    ctx.messages.registerTagInterceptor(
      { tagName, removeFromMessage }, // no host-level attrs — the bridge filters per handler
      (payload: HostTagIntercept) => {
        if (payload.isStreaming) return; // v1: completed messages only
        const group = groups.get(payload.tagName);
        if (!group) return;
        for (const [handlerId, h] of group.handlers) {
          if (!attrsMatch(h.attrs, payload.attrs)) continue;
          const scope = payload.messageId ?? payload.chatId ?? ''; // mirror the host's scope fallback
          const key = `${scope}:${payload.tagName}:${payload.fullMatch}:${handlerId}`;
          if (delivered.has(key)) continue;
          markDelivered(key);
          sendToBackend({
            type: 'ls_tag_interceptor_fired',
            scriptId: h.scriptId,
            handlerId,
            event: {
              tagName:     payload.tagName,
              attrs:       payload.attrs,
              content:     payload.content,
              fullMatch:   payload.fullMatch,
              messageId:   payload.messageId,
              chatId:      payload.chatId,
              isUser:      payload.isUser,
              isStreaming: payload.isStreaming,
            },
          });
        }
      },
    );

  // (Re-)register the host interceptor for a group iff its merged
  // `removeFromMessage` changed (or it has none yet).
  const ensureHost = (group: TagGroup, tagName: string): void => {
    const want = wantsRemove(group);
    if (group.hostUnsub !== NOOP && group.removeFromMessage === want) return;
    if (group.hostUnsub !== NOOP) { try { group.hostUnsub(); } catch { /* ignore */ } }
    group.removeFromMessage = want;
    try {
      group.hostUnsub = registerHost(tagName, want);
    } catch (err) {
      console.warn('[LumiScript] ctx.messages.registerTagInterceptor failed:', err);
      group.hostUnsub = NOOP;
    }
  };

  const unsubMessages = onBackendMessage((raw) => {
    if (!isTagInterceptorMessage(raw)) return;
    const msg = raw as TagInterceptorMessage;

    switch (msg.type) {
      case 'ls_tag_interceptor_register': {
        let group = groups.get(msg.tagName);
        if (!group) {
          group = { hostUnsub: NOOP, removeFromMessage: false, handlers: new Map() };
          groups.set(msg.tagName, group);
        }
        group.handlers.set(msg.handlerId, {
          scriptId: msg.scriptId,
          ...(msg.options?.attrs !== undefined ? { attrs: msg.options.attrs } : {}),
          ...(msg.options?.removeFromMessage !== undefined ? { removeFromMessage: msg.options.removeFromMessage } : {}),
        });
        handlerToTag.set(msg.handlerId, msg.tagName);
        ensureHost(group, msg.tagName);
        break;
      }

      case 'ls_tag_interceptor_unregister': {
        const tagName = handlerToTag.get(msg.handlerId);
        if (tagName === undefined) break;
        handlerToTag.delete(msg.handlerId);
        const group = groups.get(tagName);
        if (!group) break;
        group.handlers.delete(msg.handlerId);
        if (group.handlers.size === 0) {
          try { group.hostUnsub(); } catch { /* ignore */ }
          groups.delete(tagName);
        } else {
          // Re-register if dropping this handler changed the merged removeFromMessage.
          ensureHost(group, tagName);
        }
        break;
      }
    }
  });

  return () => {
    unsubMessages();
    for (const group of groups.values()) {
      try { group.hostUnsub(); } catch { /* ignore */ }
    }
    groups.clear();
    handlerToTag.clear();
    delivered.clear();
  };
}

/** Sentinel "no host interceptor yet" unsub — lets `ensureHost` detect first-register. */
const NOOP = (): void => { /* no-op */ };

/** @internal — reset module state (tests only; the singleton state survives installs). */
export function __resetForTests(): void {
  for (const g of groups.values()) { try { g.hostUnsub(); } catch { /* ignore */ } }
  groups.clear();
  handlerToTag.clear();
  delivered.clear();
}
