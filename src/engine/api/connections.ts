/**
 * ============================================================================
 * LUMISCRIPT — CONNECTIONS API
 * ============================================================================
 * Read-only proxy over `spindle.connections.*` — the user's LLM connection
 * profiles. Free-tier (no permission). The host DTO is already a SAFE view:
 * it never carries the API key, only a `has_api_key` boolean. Our `Connection`
 * type mirrors `ConnectionProfileDTO` field-for-field (snake_case, like
 * presets / LLMRawResult), so this is a structural pass-through.
 *
 * Intentionally read-only: connections hold provider credentials and are
 * managed by the user in Lumiverse settings, not by scripts.
 *
 * The active `userId` is folded in implicitly so scripts don't have to think
 * about operator-scoped extensions (mirrors `api.tokens` / `api.llm`).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, Connection } from '../../types/script.js';
import { type APIBuildDeps, shielded } from './shared.js';

export function buildConnectionsAPI(deps: APIBuildDeps): LumiScriptAPI['connections'] {
  const userId = deps.userId ?? undefined;

  // ConnectionProfileDTO and our `Connection` are structurally identical
  // (snake_case); the double-cast documents the nominal-type boundary (the
  // DTO's `reasoning_bindings` is a typed interface, ours is the opaque
  // `Record | null` view).
  const list = (): Promise<Connection[]> =>
    shielded(spindle.connections.list(userId).then((dtos) => dtos as unknown as Connection[]));

  return {
    list,

    get(connectionId: string): Promise<Connection | null> {
      return shielded(
        spindle.connections.get(connectionId, userId).then(
          (dto) => (dto ?? null) as unknown as Connection | null,
        ),
      );
    },

    getDefault(): Promise<Connection | null> {
      // Mirror api.llm's resolveConnection fallback: the is_default profile,
      // else the first available.
      return shielded(list().then((all) => all.find((c) => c.is_default) ?? all[0] ?? null));
    },

    findByName(name: string): Promise<Connection | null> {
      const needle = name.toLowerCase();
      return shielded(list().then((all) => all.find((c) => c.name.toLowerCase() === needle) ?? null));
    },
  };
}
