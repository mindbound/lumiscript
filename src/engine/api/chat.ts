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

import type { LumiScriptAPI, InjectionInfo } from '../../types/script.js';
import { type APIBuildDeps, assertPerm, assertDangerous, requireChatId, shielded } from './shared.js';
import {
  addInjection,
  removeInjection as storeRemove,
  clearByScriptId,
  clearAll,
  listAll,
} from '../injection-store.js';

export function buildChatAPI(deps: APIBuildDeps): LumiScriptAPI['chat'] {
  const { script, hasPerm, activeContext, userId } = deps;
  const uid = userId ?? undefined;

  return {
    getChatId: () => activeContext.chatId,

    getMessages: (opts) => {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chat.getMessages(id).then(msgs => {
          if (opts?.last  !== undefined) return msgs.slice(-opts.last);
          if (opts?.first !== undefined) return msgs.slice(0, opts.first);
          return msgs;
        }),
      );
    },

    sendMessage: (content, opts) => {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chat.appendMessage(id, {
          role: opts?.role ?? 'user',
          content,
          metadata: opts?.metadata,
        }),
      );
    },

    editMessage: (msgId, content) => {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.updateMessage(id, msgId, { content }));
    },

    deleteMessage: (msgId) => {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.deleteMessage(id, msgId));
    },

    getMetadata: (key: string) => {
      assertPerm('chats', hasPerm);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chats.get(id, uid).then(dto => {
          if (!dto) throw new Error(`api.chat.getMetadata: chat "${id}" not found`);
          return dto.metadata[key];
        }),
      );
    },

    setMetadata: (key: string, value: unknown) => {
      assertPerm('chats', hasPerm);
      const id = requireChatId(activeContext);
      return shielded(
        spindle.chats.get(id, uid).then(async dto => {
          if (!dto) throw new Error(`api.chat.setMetadata: chat "${id}" not found`);
          // Read-modify-write: spread existing metadata and set the new key.
          // This prevents a partial update from wiping other metadata keys.
          const merged = { ...dto.metadata, [key]: value };
          await spindle.chats.update(id, { metadata: merged }, uid);
        }),
      );
    },

    // ── Prompt injection ────────────────────────────────────────────────────

    inject(id, content, options) {
      assertPerm('interceptor', hasPerm);
      addInjection({
        id,
        content,
        mode:      options?.mode ?? 'intercept',
        role:      options?.role ?? 'system',
        depth:     options?.depth ?? 0,
        ephemeral: options?.ephemeral ?? false,
        scriptId:  script.id,
      });
    },

    removeInjection(id) {
      storeRemove(id);
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
      assertPerm('interceptor', hasPerm);
      clearByScriptId(script.id);
    },

    clearAllInjections() {
      assertPerm('interceptor', hasPerm);
      assertDangerous(script);
      clearAll();
    },
  };
}
