/**
 * ============================================================================
 * LUMISCRIPT — RESERVED MACRO NAMES
 * ============================================================================
 * Names reserved by LumiScript's own internal macros (registered at boot by
 * `src/macros.ts`). User scripts cannot register macros with these names —
 * `macro-store.addMacro` rejects attempts before they reach Spindle, which
 * avoids the messier "name collision with LumiScript itself" failure mode at
 * the host layer.
 *
 * Single source of truth consumed by both:
 *   - `src/macros.ts`    — which iterates this set when registering internal macros
 *   - `src/engine/macro-store.ts` — which checks incoming names against it
 *
 * When adding a new internal LumiScript macro, add its name (and every alias)
 * here in the same commit.
 */

export const RESERVED_MACRO_NAMES: ReadonlySet<string> = new Set([
  // Presence
  'lumiScriptActive',

  // Character variables (plus "charvar" aliases preserved from TavernScript)
  'getcvar',     'getcharvar',
  'setcvar',     'setcharvar',
  'addcvar',     'addcharvar',
  'inccvar',
  'deccvar',
  'hascvar',     'hascharvar',
  'deletecvar',  'deletecharvar',
]);
