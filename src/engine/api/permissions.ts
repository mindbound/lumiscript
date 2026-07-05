/**
 * ============================================================================
 * LUMISCRIPT — PERMISSIONS API
 * ============================================================================
 * Thin proxy over `spindle.permissions.*` — read the extension's runtime grant
 * set. Free tier (no permission, no userId). Lets a script pre-flight a gated
 * capability (`await api.permissions.has('images')`) and degrade gracefully
 * rather than catching a PERMISSION_DENIED error after the fact.
 *
 * Permissions are extension-level (not per-script), so `has('images')` answers
 * "did the user grant the whole extension the images permission?".
 *
 * `onDenied` / `onChanged` (the reactive host handlers) are intentionally not
 * exposed yet — the read surface covers the pre-flight use case; a handler
 * surface is a later addition if a concrete use case surfaces.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI } from '../../types/script.js';
import { shielded } from './shared.js';

export function buildPermissionsAPI(): LumiScriptAPI['permissions'] {
  return {
    getGranted(): Promise<string[]> {
      return shielded(spindle.permissions.getGranted());
    },
    has(permission: string): Promise<boolean> {
      // `spindle.permissions.has` is a SYNC local-cache read (no host round-trip);
      // wrap it so the script-facing surface is a uniform Promise like every
      // other api.* call.
      return shielded(Promise.resolve(spindle.permissions.has(permission)));
    },
  };
}
