/**
 * ============================================================================
 * LUMISCRIPT — VARIABLES API
 * ============================================================================
 * flow (in-memory), local (chat-scoped), global (cross-chat), character (per-character)
 *
 * local and global now use spindle.variables — the same storage as Lumiverse's
 * built-in {{getvar}}/{{setvar}} macros.  Values are JSON-serialized so scripts
 * can store any type while still being macro-compatible (macro users see the
 * JSON string; script users transparently get the original type back).
 *
 * character continues to use userStorage JSON files (no native Spindle equivalent).
 * No permission required for local/global. character uses userStorage.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';

// ─── Serialization helpers ────────────────────────────────────────────────────

function serialize(value: unknown): string {
  if (typeof value === 'string') return value;
  return JSON.stringify(value);
}

function deserialize<T>(raw: string, def?: T): T | undefined {
  if (raw === '') return def;
  try { return JSON.parse(raw) as T; } catch { return raw as unknown as T; }
}

// ─── Per-character userStorage store (unchanged) ──────────────────────────────

function makeCharacterVarStore(
  getPath: () => string | null,
  userId?: string,
): LumiScriptAPI['variables']['character'] {
  return {
    async get<T>(key: string, def?: T): Promise<T | undefined> {
      const path = getPath();
      if (!path) return def;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {}, userId });
      return (key in store ? store[key] as T : def);
    },
    async set<T>(_key: string, value: T): Promise<void> {
      const path = getPath();
      if (!path) return;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {}, userId });
      store[_key] = value;
      await spindle.userStorage.setJson(path, store, { userId });
    },
    async delete(key: string): Promise<boolean> {
      const path = getPath();
      if (!path) return false;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {}, userId });
      if (!(key in store)) return false;
      delete store[key];
      await spindle.userStorage.setJson(path, store, { userId });
      return true;
    },
    async has(key: string): Promise<boolean> {
      const path = getPath();
      if (!path) return false;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {}, userId });
      return key in store;
    },
    async clear(): Promise<void> {
      const path = getPath();
      if (!path) return;
      await spindle.userStorage.setJson(path, {}, { userId });
    },
  };
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildVariablesAPI(deps: APIBuildDeps): LumiScriptAPI['variables'] {
  const { activeContext, userId } = deps;
  const uid = userId ?? undefined;

  return {
    // ── local: spindle.variables.local (macro-compatible, JSON-serialized) ─────
    local: {
      async get<T>(key: string, def?: T): Promise<T | undefined> {
        const chatId = activeContext.chatId;
        if (!chatId) return def;
        const raw = await spindle.variables.local.get(chatId, key);
        return deserialize<T>(raw, def);
      },
      async set<T>(key: string, value: T): Promise<void> {
        const chatId = activeContext.chatId;
        if (!chatId) return;
        await spindle.variables.local.set(chatId, key, serialize(value));
      },
      async delete(key: string): Promise<boolean> {
        const chatId = activeContext.chatId;
        if (!chatId) return false;
        const exists = await spindle.variables.local.has(chatId, key);
        if (!exists) return false;
        await spindle.variables.local.delete(chatId, key);
        return true;
      },
      async has(key: string): Promise<boolean> {
        const chatId = activeContext.chatId;
        if (!chatId) return false;
        return spindle.variables.local.has(chatId, key);
      },
      async clear(): Promise<void> {
        const chatId = activeContext.chatId;
        if (!chatId) return;
        const all = await spindle.variables.local.list(chatId);
        await Promise.all(Object.keys(all).map(k => spindle.variables.local.delete(chatId, k)));
      },
    },

    // ── global: spindle.variables.global (macro-compatible, JSON-serialized) ───
    global: {
      async get<T>(key: string, def?: T): Promise<T | undefined> {
        const raw = await spindle.variables.global.get(key, uid);
        return deserialize<T>(raw, def);
      },
      async set<T>(key: string, value: T): Promise<void> {
        await spindle.variables.global.set(key, serialize(value), uid);
      },
      async delete(key: string): Promise<boolean> {
        const exists = await spindle.variables.global.has(key, uid);
        if (!exists) return false;
        await spindle.variables.global.delete(key, uid);
        return true;
      },
      async has(key: string): Promise<boolean> {
        return spindle.variables.global.has(key, uid);
      },
      async clear(): Promise<void> {
        const all = await spindle.variables.global.list(uid);
        await Promise.all(Object.keys(all).map(k => spindle.variables.global.delete(k, uid)));
      },
    },

    // ── character: userStorage JSON (no native Spindle equivalent) ────────────
    character: makeCharacterVarStore(
      () => activeContext.characterId
        ? `variables/characters/${activeContext.characterId}.json`
        : null,
      uid,
    ),

  };
}
