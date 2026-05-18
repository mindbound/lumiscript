/**
 * ============================================================================
 * LUMISCRIPT — OAUTH API
 * ============================================================================
 * Thin wrapper over Spindle's OAuth surface (`spindle.oauth.*`). Three
 * methods: register a callback handler for the extension's redirect URL,
 * get the URL path (stable per-extension), mint a CSRF state nonce.
 *
 * Everything beyond these primitives (constructing the authorize URL,
 * exchanging the code for a token, persisting + refreshing the token)
 * lives in the script — pair with `api.utils.http` (`cors_proxy`
 * permission + `allowDangerous`) for token-endpoint POSTs and
 * `api.enclave` for encrypted token persistence. The full PKCE recipe
 * belongs in the v1.0 cookbook (`notes/oauth-cookbook.md` — deferred
 * docs item).
 *
 * Permission: `oauth`.
 *
 * **Single-handler-per-extension warning.** The host stores the OAuth
 * callback in a single module-scope ref (last-write-wins). LumiScript's
 * parent-side dispatch (`case 'oauthCallback'` in `host-dispatcher.ts`)
 * detects cross-script + same-script-re-register collisions and emits a
 * `spindle.log.warn` — non-terminating; the host's behaviour is
 * preserved, only the silent overwrite is surfaced. This builder is
 * pure pass-through; the warning lives in the IPC path so all
 * registrations (user-script + library-script alike) flow through it.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { OAuthAPI } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

export function buildOAuthAPI(deps: APIBuildDeps): OAuthAPI {
  const { script, hasPerm } = deps;

  return {
    onCallback(
      handler: (params: Record<string, string>) => Promise<{ html?: string } | void>,
    ): () => void {
      assertPerm('oauth', hasPerm, script.name);
      // Pure pass-through — `spindle.oauth.onCallback` is sync on the host
      // and we keep the LumiScript-side surface sync to match (same shape
      // as `commands.onInvoked`). The proxy returns sync too (dispatch
      // is fire-and-forget at the proxy layer).
      return spindle.oauth.onCallback(handler);
    },

    async getCallbackUrl(): Promise<string> {
      assertPerm('oauth', hasPerm, script.name);
      return spindle.oauth.getCallbackUrl();
    },

    async createState(): Promise<string> {
      assertPerm('oauth', hasPerm, script.name);
      return spindle.oauth.createState();
    },
  };
}
