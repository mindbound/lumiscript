/**
 * ============================================================================
 * LUMISCRIPT — CHAT API
 * ============================================================================
 * getChatId, getMessages, sendMessage, editMessage, deleteMessage,
 * getMetadata, setMetadata
 *
 * Message operations (getMessages, sendMessage, editMessage, deleteMessage)
 * use spindle.chat.* and require the chat_mutation permission.
 *
 * Metadata operations (getMetadata, setMetadata) use spindle.chats.* and
 * require the chats permission. setMetadata performs a read-modify-write so
 * that a single-key update never silently overwrites other metadata keys.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { type APIBuildDeps, assertPerm, requireChatId, shielded } from './shared.js';

export function buildChatAPI(deps: APIBuildDeps): LumiScriptAPI['chat'] {
  const { hasPerm, activeContext, userId } = deps;
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
  };
}
