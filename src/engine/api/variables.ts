/**
 * ============================================================================
 * LUMISCRIPT — VARIABLES API
 * ============================================================================
 * flow (in-memory), local (per-chat), global (cross-chat), character (per-character)
 *
 * local/global/character are backed by spindle.userStorage JSON files.
 * flow is an in-memory Map cleared at the end of each script execution.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';

export function buildVariablesAPI(deps: APIBuildDeps): LumiScriptAPI['variables'] {
  const { activeContext } = deps;
  const flowStore = new Map<string, unknown>();

  return {
    local:     makeStorageVarStore(() => activeContext.chatId      ? `variables/chats/${activeContext.chatId}.json`           : null),
    global:    makeStorageVarStore(() => 'variables/global.json'),
    character: makeStorageVarStore(() => activeContext.characterId ? `variables/characters/${activeContext.characterId}.json` : null),

    flow: {
      get:    <T>(key: string, def?: T): T | undefined => (flowStore.has(key) ? flowStore.get(key) as T : def),
      set:    (_key: string, val: unknown) => { flowStore.set(_key, val); },
      delete: (key: string) => flowStore.delete(key),
      has:    (key: string) => flowStore.has(key),
      clear:  () => { flowStore.clear(); },
    },
  };
}

function makeStorageVarStore(
  getPath: () => string | null,
): LumiScriptAPI['variables']['local'] {
  return {
    async get<T>(key: string, def?: T): Promise<T | undefined> {
      const path = getPath();
      if (!path) return def;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      return (key in store ? store[key] as T : def);
    },
    async set<T>(_key: string, value: T): Promise<void> {
      const path = getPath();
      if (!path) return;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      store[_key] = value;
      await spindle.userStorage.setJson(path, store);
    },
    async delete(key: string): Promise<boolean> {
      const path = getPath();
      if (!path) return false;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      if (!(key in store)) return false;
      delete store[key];
      await spindle.userStorage.setJson(path, store);
      return true;
    },
    async has(key: string): Promise<boolean> {
      const path = getPath();
      if (!path) return false;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      return key in store;
    },
    async clear(): Promise<void> {
      const path = getPath();
      if (!path) return;
      await spindle.userStorage.setJson(path, {});
    },
  };
}
