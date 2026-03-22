/**
 * ============================================================================
 * LUMISCRIPT — FILES API
 * ============================================================================
 * Flat file-system API with three storage tiers, all gated by allowDangerous.
 *
 *  user*   → spindle.userStorage  (per-user, persistent, uid-scoped)
 *  shared* → spindle.storage      (extension-wide, persistent)
 *  temp*   → spindle.ephemeral    (TTL-bound, quota-managed; also needs ephemeral_storage perm)
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { type APIBuildDeps, assertDangerous, assertPerm } from './shared.js';

export function buildFilesAPI(deps: APIBuildDeps): LumiScriptAPI['files'] {
  const { script, hasPerm, userId: uid } = deps;

  // ── Shared guard helpers ─────────────────────────────────────────────────
  const danger = () => assertDangerous(script);
  const dangerTemp = () => {
    assertDangerous(script);
    assertPerm('ephemeral_storage', hasPerm);
  };

  return {
    // ── User storage (per-user, persistent) ────────────────────────────────
    userRead:   (path) => { danger(); return spindle.userStorage.read(path, uid ?? undefined); },
    userWrite:  (path, data) => { danger(); return spindle.userStorage.write(path, data, uid ?? undefined); },
    userDelete: (path) => { danger(); return spindle.userStorage.delete(path, uid ?? undefined); },
    userExists: (path) => { danger(); return spindle.userStorage.exists(path, uid ?? undefined); },
    userList:   (prefix) => { danger(); return spindle.userStorage.list(prefix, uid ?? undefined); },
    userMkdir:  (path) => { danger(); return spindle.userStorage.mkdir(path, uid ?? undefined); },

    // ── Shared storage (extension-wide, persistent) ────────────────────────
    sharedRead:   (path) => { danger(); return spindle.storage.read(path); },
    sharedWrite:  (path, data) => { danger(); return spindle.storage.write(path, data); },
    sharedDelete: (path) => { danger(); return spindle.storage.delete(path); },
    sharedExists: (path) => { danger(); return spindle.storage.exists(path); },
    sharedList:   (prefix) => { danger(); return spindle.storage.list(prefix); },
    sharedStat:   (path) => { danger(); return spindle.storage.stat(path); },
    sharedMkdir:  (path) => { danger(); return spindle.storage.mkdir(path); },
    sharedMove:   (from, to) => { danger(); return spindle.storage.move(from, to); },

    // ── Temp storage (ephemeral, TTL-bound) ────────────────────────────────
    tempRead:   (path) => { dangerTemp(); return spindle.ephemeral.read(path); },
    tempWrite:  (path, data, options) => {
      dangerTemp();
      return spindle.ephemeral.write(path, data, options?.ttlMs !== undefined ? { ttlMs: options.ttlMs } : undefined);
    },
    tempDelete: (path) => { dangerTemp(); return spindle.ephemeral.delete(path); },
    tempList:   (prefix) => { dangerTemp(); return spindle.ephemeral.list(prefix); },
    tempStat:   (path) => {
      dangerTemp();
      return spindle.ephemeral.stat(path).then(s => ({
        sizeBytes: s.sizeBytes,
        createdAt: s.createdAt,
        expiresAt: s.expiresAt,
      }));
    },
    tempClearExpired: () => { dangerTemp(); return spindle.ephemeral.clearExpired(); },
  };
}
