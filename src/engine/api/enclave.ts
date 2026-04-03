/**
 * ============================================================================
 * LUMISCRIPT — ENCLAVE API
 * ============================================================================
 * AES-256-GCM encrypted per-user secret storage for API keys, OAuth tokens,
 * and other sensitive credentials. Stateless wrapper around spindle.enclave.*.
 *
 * Gated by allowDangerous (same guard as api.utils.http.* and api.files.*).
 *
 * Key constraints:  ^[a-zA-Z0-9_\-.]{1,128}$
 * Value constraints: printable ASCII only, max 64 KB
 * Scope: per-user, per-extension (namespace: spindle:{identifier}:{key})
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { type APIBuildDeps, assertDangerous } from './shared.js';

export function buildEnclaveAPI(deps: APIBuildDeps): LumiScriptAPI['enclave'] {
  const { script, userId: uid } = deps;
  const danger = () => assertDangerous(script);

  return {
    put(key, value) {
      danger();
      return spindle.enclave.put(key, value, uid ?? undefined);
    },
    get(key) {
      danger();
      return spindle.enclave.get(key, uid ?? undefined);
    },
    delete(key) {
      danger();
      return spindle.enclave.delete(key, uid ?? undefined);
    },
    has(key) {
      danger();
      return spindle.enclave.has(key, uid ?? undefined);
    },
    list() {
      danger();
      return spindle.enclave.list(uid ?? undefined);
    },
  };
}
