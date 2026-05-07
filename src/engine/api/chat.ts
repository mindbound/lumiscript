/**
 * ============================================================================
 * LUMISCRIPT — CHAT API
 * ============================================================================
 * getChatId, getMessages, sendMessage, editMessage, deleteMessage,
 * getMetadata, setMetadata,
 * inject, removeInjection, getInjections, clearInjections, clearAllInjections
 *
 * Message operations (getMessages, sendMessage, editMessage, deleteMessage)
 * use spindle.chat.* and require the chat_mutation permission.
 *
 * Metadata operations (getMetadata, setMetadata) use spindle.chats.* and
 * require the chats permission. setMetadata performs a read-modify-write so
 * that a single-key update never silently overwrites other metadata keys.
 *
 * Injection operations delegate to the module-level injection-store singleton.
 * inject / clearInjections require the `interceptor` permission.
 * clearAllInjections additionally requires `allowDangerous`.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  InjectionInfo,
  MessagePatch,
  MessageContentProcessorHandler,
  MessageContentProcessorOptions,
  MessageContentProcessorHandle,
  RegisteredMessageContentProcessorInfo,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm, assertDangerous, requireChatId, shielded } from './shared.js';
import {
  addInjection,
  removeInjection as storeRemove,
  clearByScriptId,
  clearAll,
  listAll,
} from '../injection-store.js';
// Aliased to avoid collision with the injection-store imports above. The
// content-processor registry mirrors injection-store's per-script lifecycle
// shape (addEntry / removeEntry / clearByScriptId), but they're distinct
// stores serving different host hooks.
import {
  addEntry as addProcessorEntry,
  removeEntry as removeProcessorEntry,
  listAll as listProcessors,
} from '../message-content-processor-registry.js';

/**
 * Per-chat serialization queue for setMetadata.
 *
 * setMetadata performs a read-modify-write that spans two awaits. Without
 * serialization, two concurrent calls for the same chat can interleave:
 *   Script A reads { a:1 }           Script B reads { a:1 }
 *   Script A writes { a:1, b:2 }     Script B writes { a:1, c:3 }  ← b lost
 *
 * Queuing per chatId ensures each write completes before the next begins.
 * The entry is removed once the queue drains to avoid a memory leak.
 */
const metadataQueues = new Map<string, Promise<void>>();

/**
 * Translate LumiScript's camelCase `MessagePatch` to the snake_case shape
 * `spindle.chat.updateMessage` expects. Undefined fields are omitted so
 * the host only updates what the script explicitly provided.
 */
function toUpstreamPatch(patch: MessagePatch): {
  content?: string;
  metadata?: Record<string, unknown>;
  swipes?: string[];
  swipe_id?: number;
  swipe_dates?: number[];
  reasoning?: { text?: string | null; duration?: number | null };
} {
  const out: Record<string, unknown> = {};
  if (patch.content    !== undefined) out.content     = patch.content;
  if (patch.metadata   !== undefined) out.metadata    = patch.metadata;
  if (patch.swipes     !== undefined) out.swipes      = patch.swipes;
  if (patch.swipeId    !== undefined) out.swipe_id    = patch.swipeId;
  if (patch.swipeDates !== undefined) out.swipe_dates = patch.swipeDates;
  if (patch.reasoning  !== undefined) out.reasoning   = patch.reasoning;
  return out;
}

export function buildChatAPI(deps: APIBuildDeps): LumiScriptAPI['chat'] {
  const {
    script,
    hasPerm,
    activeContext,
    userId,
    contentProcessorsRegisteredThisRun,
    onInjectionsChanged,
  } = deps;
  const uid = userId ?? undefined;

  return {
    getChatId: () => activeContext.chatId,

    getMessages: (opts) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chat.getMessages(id).then(msgs => {
          // Map upstream snake_case DTO → LumiScript's camelCase ChatMessage.
          // `swipeDates` and `extra` landed in spindle-types 0.4.27; older
          // hosts return undefined for either field, which we normalize to
          // an empty array / empty object so scripts don't have to guard.
          let mapped = msgs.map(m => ({
            id:         m.id,
            content:    m.content,
            role:       m.role,
            metadata:   m.metadata,
            swipeId:    m.swipe_id,
            swipes:     m.swipes,
            swipeDates: (m as { swipe_dates?: number[] }).swipe_dates ?? [],
            extra:      (m as { extra?: Record<string, unknown> }).extra ?? {},
          }));
          if (opts?.last  !== undefined) mapped = mapped.slice(-opts.last);
          if (opts?.first !== undefined) mapped = mapped.slice(0, opts.first);
          return mapped;
        }),
      );
    },

    sendMessage: (content, opts) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chat.appendMessage(id, {
          role: opts?.role ?? 'user',
          content,
          metadata: opts?.metadata,
        }),
      );
    },

    editMessage: (msgId, contentOrPatch) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      // Two call shapes:
      //   string → shorthand for a content-only patch (backward-compatible
      //     with the pre-0.14 signature).
      //   MessagePatch → rich patch covering content + metadata + swipes +
      //     swipe navigation + reasoning. Host-side `spindle.chat.updateMessage`
      //     fires SWIPE_EDITED alongside MESSAGE_EDITED when the patch
      //     touches any swipe-shaped field.
      // camelCase → snake_case normalization for the upstream patch surface
      // happens inline below — upstream accepts `swipe_id` / `swipe_dates`
      // rather than camelCase.
      const patch = typeof contentOrPatch === 'string'
        ? { content: contentOrPatch }
        : toUpstreamPatch(contentOrPatch);
      return shielded(spindle.chat.updateMessage(id, msgId, patch));
    },

    deleteMessage: (msgId) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.deleteMessage(id, msgId));
    },

    getMetadata: (key: string) => {
      assertPerm('chats', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chats.get(id, uid).then(dto => {
          if (!dto) throw new Error(`api.chat.getMetadata: chat "${id}" not found`);
          return dto.metadata[key];
        }),
      );
    },

    setMetadata: (key: string, value: unknown) => {
      assertPerm('chats', hasPerm, script.name);
      const id = requireChatId(activeContext);
      // Serialise via the per-chat queue so concurrent setMetadata calls for
      // the same chat cannot interleave at the two awaits and lose each other's
      // writes (read-modify-write TOCTOU race).
      const queued = metadataQueues.get(id) ?? Promise.resolve();
      const next: Promise<void> = queued.then(async () => {
        const dto = await spindle.chats.get(id, uid);
        if (!dto) throw new Error(`api.chat.setMetadata: chat "${id}" not found`);
        await spindle.chats.update(id, { metadata: { ...dto.metadata, [key]: value } }, uid);
      }).finally(() => {
        // Remove the entry only when this is still the latest queued promise
        // (a newer call may have already replaced it).
        if (metadataQueues.get(id) === next) metadataQueues.delete(id);
      });
      metadataQueues.set(id, next);
      return shielded(next);
    },

    // ── Prompt injection ────────────────────────────────────────────────────

    inject(id, content, options) {
      assertPerm('interceptor', hasPerm, script.name);
      addInjection({
        id,
        content,
        mode:      options?.mode ?? 'intercept',
        role:      options?.role ?? 'system',
        depth:     options?.depth ?? 0,
        ephemeral: options?.ephemeral ?? false,
        scriptId:  script.id,
      });
      // v0.27.2+ — notify the host so the LumiScriptPanel's Active
      // Injections section updates without waiting for the next manual
      // refresh. Optional callback; tests / fixtures that don't wire it
      // get the same store mutation but no FE push.
      onInjectionsChanged?.();
    },

    removeInjection(id) {
      storeRemove(id);
      onInjectionsChanged?.();
    },

    getInjections(): InjectionInfo[] {
      return listAll().map(e => ({
        id:       e.id,
        content:  e.content,
        mode:     e.mode,
        role:     e.role,
        depth:    e.depth,
        ephemeral: e.ephemeral,
        scriptId: e.scriptId,
      }));
    },

    clearInjections() {
      assertPerm('interceptor', hasPerm, script.name);
      clearByScriptId(script.id);
      onInjectionsChanged?.();
    },

    clearAllInjections() {
      assertPerm('interceptor', hasPerm, script.name);
      assertDangerous(script);
      clearAll();
      onInjectionsChanged?.();
    },

    // ── Message hiding ─────────────────────────────────────────────────────

    setMessageHidden: (msgId: string, hidden: boolean) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.setMessageHidden(id, msgId, hidden));
    },

    setMessagesHidden: (msgIds: string[], hidden: boolean) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.setMessagesHidden(id, msgIds, hidden));
    },

    isMessageHidden: (msgId: string) => {
      assertPerm('chat_mutation', hasPerm, script.name);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.isMessageHidden(id, msgId));
    },

    // ── Message content processor (per-script handler registration) ────────
    //
    // Multiplexed at LS backend startup behind one
    // `spindle.registerMessageContentProcessor` registration (Phase 3 wiring
    // in backend.ts). Per-script handler entries are stored in
    // `message-content-processor-registry`; the LS-house handler in
    // backend.ts walks them all in priority order, threading content +
    // shallow-merging extra deltas, and returns the final patch to the host.
    //
    // Permission: rides on the existing `chat_mutation` gate. No new
    // permission machinery required (see CLAUDE.md "Spindle Permissions").

    registerContentProcessor(
      handler: MessageContentProcessorHandler,
      options?: MessageContentProcessorOptions,
    ): MessageContentProcessorHandle {
      assertPerm('chat_mutation', hasPerm, script.name);
      // `addEntry` validates handler shape, priority, timeoutMs and throws
      // on bad input. Returns the resolved id (auto-generated when omitted)
      // so we can hand it back through the handle for later remove() calls.
      const id = addProcessorEntry(script.id, script.name, handler, options);
      // Track for post-execution stale-diff — see the matching call in
      // `api.macros.registerInterceptor` for the rationale.
      contentProcessorsRegisteredThisRun?.add(id);
      return {
        id,
        // Idempotent: removeProcessorEntry is ownership-scoped + returns
        // false if the entry is already gone, so calling remove() twice
        // (or after a teardown sweep) is a silent no-op.
        remove: () => {
          removeProcessorEntry(script.id, id);
        },
      };
    },

    listContentProcessors(): RegisteredMessageContentProcessorInfo[] {
      // Diagnostic surface — un-gated, mirrors `api.macros.list()`. Returns a
      // snapshot across all scripts (handlers themselves are excluded).
      return listProcessors();
    },
  };
}
