/**
 * ============================================================================
 * LUMISCRIPT — CHATS SESSION API
 * ============================================================================
 * Chat session CRUD: list, get, getActive, update, delete.
 * Requires the "chats" permission.
 *
 * NOTE: This is separate from src/engine/api/chat.ts which handles individual
 * messages within a chat (chat_mutation permission). This module operates on
 * the chat session entities themselves.
 *
 * ChatDTO fields are mapped to camelCase for consistency with the rest of the
 * LumiScript API surface.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  ChatSession,
  ChatSessionUpdateInput,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm } from './shared.js';

// ─── DTO → ChatSession mapping ────────────────────────────────────────────────

function mapChatSession(dto: import('lumiverse-spindle-types').ChatDTO): ChatSession {
  return {
    id:          dto.id,
    characterId: dto.character_id,
    name:        dto.name,
    metadata:    dto.metadata,
    createdAt:   dto.created_at,
    updatedAt:   dto.updated_at,
  };
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildChatsAPI(deps: APIBuildDeps): LumiScriptAPI['chats'] {
  const { hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    list: async (options) => {
      assertPerm('chats', hasPerm);
      const result = await spindle.chats.list({ ...options, userId: uid });
      return { data: result.data.map(mapChatSession), total: result.total };
    },

    get: async (id) => {
      assertPerm('chats', hasPerm);
      const dto = await spindle.chats.get(id, uid);
      return dto ? mapChatSession(dto) : null;
    },

    getActive: async () => {
      assertPerm('chats', hasPerm);
      const dto = await spindle.chats.getActive(uid);
      return dto ? mapChatSession(dto) : null;
    },

    update: async (id, input: ChatSessionUpdateInput) => {
      assertPerm('chats', hasPerm);
      const dto = await spindle.chats.update(id, input, uid);
      return mapChatSession(dto);
    },

    delete: async (id) => {
      assertPerm('chats', hasPerm);
      return spindle.chats.delete(id, uid);
    },
  };
}
