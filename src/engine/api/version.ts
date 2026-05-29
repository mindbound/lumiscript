/**
 * ============================================================================
 * LUMISCRIPT — VERSION API
 * ============================================================================
 * Thin proxy over `spindle.version.*` — the running Lumiverse backend +
 * frontend semantic versions. Free tier (no permission, no userId). Useful
 * for feature gating / compatibility checks from scripts.
 *
 * Pairs with `compareVersions` in `src/utils/host-version.ts` if a script
 * wants to gate on a minimum host version.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { shielded } from './shared.js';

export function buildVersionAPI(): LumiScriptAPI['version'] {
  return {
    getBackend(): Promise<string> {
      return shielded(spindle.version.getBackend());
    },
    getFrontend(): Promise<string> {
      return shielded(spindle.version.getFrontend());
    },
  };
}
