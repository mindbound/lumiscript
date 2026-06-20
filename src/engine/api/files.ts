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
import { isValidCollectionPath } from '../db-admin.js';
import { dbCacheKey, invalidateDbCache } from '../db-cache.js';

export function buildFilesAPI(deps: APIBuildDeps): LumiScriptAPI['files'] {
  const { script, hasPerm, userId: uid } = deps;

  // ── Shared guard helpers ─────────────────────────────────────────────────
  const danger = () => assertDangerous(script);
  const dangerTemp = () => {
    assertDangerous(script);
    assertPerm('ephemeral_storage', hasPerm, script.name);
  };

  // The flat files.* escape hatch can target a raw `db/` collection path,
  // bypassing DbStore and its cache refresh. Keep the api.db cache honest: after
  // a write/delete that landed on a collection file, drop its cached array so a
  // subsequent api.db read re-reads from disk instead of serving a stale entry.
  // (Out-of-contract — mixing raw files.* with api.db on the same path — but the
  // cache must not introduce a staleness the pre-cache code didn't have.)
  const invalidateIfCollection = (path: string): void => {
    if (isValidCollectionPath(path)) invalidateDbCache(dbCacheKey(uid ?? undefined, path));
  };

  return {
    // ── User storage (per-user, persistent) ────────────────────────────────
    userRead:   (path) => { danger(); return spindle.userStorage.read(path, uid ?? undefined); },
    userWrite:  (path, data) => { danger(); return spindle.userStorage.write(path, data, uid ?? undefined).then((r) => { invalidateIfCollection(path); return r; }); },
    userDelete: (path) => { danger(); return spindle.userStorage.delete(path, uid ?? undefined).then((r) => { invalidateIfCollection(path); return r; }); },
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

    // ── Temp storage (ephemeral, TTL-bound, quota-managed) ──────────────────
    // TempWriteOptions ({ ttlMs?, reservationId? }) is structurally identical to
    // the host's write options, so it passes straight through. Uint8Array args/
    // returns cross the child↔parent IPC intact (same path as api.images.upload
    // / api.utils.http arraybuffer) — no base64 needed.
    tempRead:        (path) => { dangerTemp(); return spindle.ephemeral.read(path); },
    tempWrite:       (path, data, options) => { dangerTemp(); return spindle.ephemeral.write(path, data, options); },
    tempReadBinary:  (path) => { dangerTemp(); return spindle.ephemeral.readBinary(path); },
    tempWriteBinary: (path, data, options) => { dangerTemp(); return spindle.ephemeral.writeBinary(path, data, options); },
    tempDelete:      (path) => { dangerTemp(); return spindle.ephemeral.delete(path); },
    tempList:        (prefix) => { dangerTemp(); return spindle.ephemeral.list(prefix); },
    tempStat:        (path) => {
      dangerTemp();
      return spindle.ephemeral.stat(path).then(s => ({
        sizeBytes: s.sizeBytes,
        createdAt: s.createdAt,
        expiresAt: s.expiresAt,
      }));
    },
    tempClearExpired: () => { dangerTemp(); return spindle.ephemeral.clearExpired(); },

    // ── Temp storage quota subsystem ────────────────────────────────────────
    // Structural pass-throughs: the host DTOs match TempPoolStatus / TempReservation
    // field-for-field.
    tempGetPoolStatus: () => { dangerTemp(); return spindle.ephemeral.getPoolStatus(); },
    tempRequestBlock:  (sizeBytes, options) => { dangerTemp(); return spindle.ephemeral.requestBlock(sizeBytes, options); },
    tempReleaseBlock:  (reservationId) => { dangerTemp(); return spindle.ephemeral.releaseBlock(reservationId); },
  };
}
