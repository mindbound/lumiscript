/**
 * ============================================================================
 * LUMISCRIPT — USERS API
 * ============================================================================
 * Read-only proxy over `spindle.users.*` — active-user context queries. Free
 * tier (no permission). Two probes:
 *   - `isVisible()` — true if the user has the app visible in ≥1 session.
 *   - `getRole()`   — the user's Lumiverse role ('operator' | 'admin' | 'user').
 *
 * The active `userId` is folded in implicitly so scripts don't have to reason
 * about operator-scoped extensions (mirrors `api.connections` / `api.llm`).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, UserRole } from '../../types/script.js';
import { type APIBuildDeps, shielded } from './shared.js';

export function buildUsersAPI(deps: APIBuildDeps): LumiScriptAPI['users'] {
  const userId = deps.userId ?? undefined;

  return {
    isVisible(): Promise<boolean> {
      return shielded(spindle.users.isVisible(userId));
    },

    getRole(): Promise<UserRole> {
      // SpindleUserRoleDTO is the same string union as our UserRole.
      return shielded(spindle.users.getRole(userId).then((role) => role as UserRole));
    },
  };
}
