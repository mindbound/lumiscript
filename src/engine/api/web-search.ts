/**
 * ============================================================================
 * LUMISCRIPT — WEB SEARCH API
 * ============================================================================
 * Thin proxy over `spindle.webSearch.*` — search against the user's configured
 * provider (SearXNG today). Requires the `web_search` permission.
 *
 * The host DTOs are already safe (`getSettings` exposes only `hasApiKey`, never
 * the key) and camelCase, so this is a structural pass-through. The active
 * `userId` is folded in implicitly (operator-scoped extensions).
 *
 * `query` rejects with `"Web search is disabled"` when the user has no provider
 * configured — scripts can branch on `getSettings().enabled` first.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  WebSearchOptions,
  WebSearchResponse,
  WebSearchSettings,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm, shielded } from './shared.js';

export function buildWebSearchAPI(deps: APIBuildDeps): LumiScriptAPI['webSearch'] {
  const { hasPerm, script } = deps;
  const userId = deps.userId ?? undefined;

  return {
    query(options: WebSearchOptions): Promise<WebSearchResponse> {
      assertPerm('web_search', hasPerm, script.name);
      return shielded(
        spindle.webSearch
          .query({
            query: options.query,
            ...(options.count !== undefined  ? { count:  options.count  } : {}),
            ...(options.scrape !== undefined ? { scrape: options.scrape } : {}),
            userId,
          })
          .then((dto) => dto as unknown as WebSearchResponse),
      );
    },

    getSettings(): Promise<WebSearchSettings> {
      assertPerm('web_search', hasPerm, script.name);
      return shielded(
        spindle.webSearch.getSettings(userId).then((dto) => dto as unknown as WebSearchSettings),
      );
    },
  };
}
