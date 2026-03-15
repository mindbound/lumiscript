/**
 * ============================================================================
 * LUMISCRIPT — CHAT API
 * ============================================================================
 * getChatId, getMessages, sendMessage, editMessage, deleteMessage
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { type APIBuildDeps, assertPerm, requireChatId, shielded } from './shared.js';

export function buildChatAPI(deps: APIBuildDeps): LumiScriptAPI['chat'] {
  const { hasPerm, activeContext } = deps;

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
  };
}
