/**
 * ============================================================================
 * LUMISCRIPT — MACROS API
 * ============================================================================
 * Implements `api.macros` — the LumiScript interface for registering
 * Lumiverse macros from user scripts. Mirrors `api.tools` structurally:
 * registry-backed via `macro-store`, owner-scoped, lifecycle-cleaned,
 * auto-stale-diffed on re-run.
 *
 * Two registration modes share one `register()` call:
 *
 *   - **Push-mode** (handler omitted): the script calls `updateValue(name, val)`
 *     whenever its internal state changes. Spindle resolves each occurrence
 *     of the macro to the most-recent pushed value. Zero resolution-time cost.
 *
 *   - **Pull-mode** (handler provided): the handler runs every time Lumiverse
 *     resolves the macro during prompt assembly. Handlers may be sync or
 *     async. Best for values that depend on live context (args, chat state,
 *     character data) or need computation at resolution time.
 *
 * No permission required. Macros are named string producers; side effects
 * inside a handler are already gated by whatever API surfaces the handler
 * uses. Registration itself has no Spindle-level permission.
 *
 * Reserved-name protection: `addMacro` rejects user registrations matching
 * the LumiScript-internal names listed in `reserved-macro-names.ts`.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  MacroContext,
  MacroDefinition,
  MacroHandler,
  MacroInterceptorHandler,
  MacroInterceptorOptions,
  MacroInterceptorHandle,
  RegisteredMacroInfo,
  RegisteredMacroInterceptorInfo,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm } from './shared.js';
import {
  addMacro,
  removeMacro,
  listAll,
  recordValue,
  getMacro,
} from '../macro-store.js';
import { emit as busEmit } from '../broadcast-bus.js';
// Macro interceptor registry — multiplexed at LS backend startup behind one
// `spindle.registerMacroInterceptor` registration (Phase 3 wiring in
// backend.ts). Imports are aliased so the existing macro-store readers /
// writers retain their unprefixed names.
import {
  addEntry as addInterceptorEntry,
  removeEntry as removeInterceptorEntry,
  listAll as listInterceptorEntries,
} from '../macro-interceptor-registry.js';

const DEFAULT_CATEGORY = 'extension:lumiscript:user';

export function buildMacrosAPI(deps: APIBuildDeps): import('../../types/script.js').MacrosAPI {
  const {
    script,
    hasPerm,
    onMacrosChanged,
    macrosRegisteredThisRun,
    macroInterceptorsRegisteredThisRun,
  } = deps;

  return {
    register(name: string, def: MacroDefinition, handler?: MacroHandler): void {
      const category = def.category ?? DEFAULT_CATEGORY;
      const mode: 'push' | 'pull' = handler ? 'pull' : 'push';

      // Volatile flag default policy:
      //   - Pull-mode (handler provided): default `true`. LumiScript
      //     handlers read external state via api.* namespaces that the
      //     host's variable-fingerprinter can't see, so the safe default
      //     is "always re-resolve". Authors who know their handler is
      //     pure-from-args can opt out via `volatile: false`.
      //   - Push-mode: default `false`. Push-mode resolution returns
      //     the last `updateValue`'d string, which IS pure relative to
      //     push events; the host already invalidates on macro-value
      //     updates so additional volatile-flagging is redundant.
      // Explicit `def.volatile` always wins over both defaults.
      const volatile = def.volatile ?? (mode === 'pull');

      // Store first — `addMacro` enforces reserved-name + cross-script
      // collision rules and throws before we touch Spindle. This avoids the
      // "registered with Spindle but not in our store" split-brain state.
      addMacro({
        name,
        description: def.description,
        category,
        returnType:  def.returnType,
        args:        def.args,
        mode,
        handler,
        scriptId:    script.id,
        scriptName:  script.name,
      });

      // Register with Spindle. The `as any` cast on `handler` is deliberate:
      // `MacroDefinitionDTO.handler` is typed `string` upstream, but the
      // runtime accepts function references — the character-variable macros
      // in `src/macros.ts` already rely on this, proven in production. A
      // handler-less (push-mode) registration passes an empty string, which
      // is the documented push-mode shape.
      //
      // ─── v0.26.1 — non-committing-resolve race tolerance ────────────────
      //
      // Spindle blocks `registerMacro` with an error matching
      // `'non-committing macro resolution'` when ANY caller (another
      // LumiScript user-script, or Lumiverse's own prompt-assembly path)
      // is concurrently running a `commit:false` macro resolve. The block
      // is temporary — the prior registration stays active on Spindle's
      // side, so the macro continues to fire correctly.
      //
      // Pre-fix: the throw propagated through this method, skipping
      // `macrosRegisteredThisRun.add(name)`. The end-of-run stale-diff
      // (`diffAndCleanStaleMacros` in trigger-registry) then saw the macro
      // as "registered before the run, not re-registered during it"
      // → DROPPED it from BOTH LumiScript's store AND Spindle's macro
      // engine via `spindle.unregisterMacro`. Concrete repro: the tracker
      // pattern where one script registers `{{tracker}}` and a co-script
      // (tracker-ui) resolves it via `commit:false`. After every
      // generation the macro got orphaned, leaving co-script resolves
      // returning the literal `{{tracker}}` text.
      //
      // Resolution: catch the specific `'non-committing macro resolution'`
      // signature, log at info-level (the server log audit trail still
      // captures the race; warn-level would spam normal generation), and
      // FALL THROUGH so `macrosRegisteredThisRun` sees the name. The
      // prior Spindle-side registration is still in force — the macro
      // continues to fire — and the stale-diff no longer drops it.
      //
      // Other thrown errors (reserved name, etc.) propagate normally.
      try {
        spindle.registerMacro({
          name,
          category,
          description: def.description,
          returnType:  def.returnType,
          args:        def.args,
          // `volatile` available on host builds Lumiverse ≥0.9.7
          // (lumiverse-spindle-types ≥0.4.62). Older builds silently
          // ignore unknown fields, so passing it unconditionally is safe.
          volatile,
          handler:     (handler ?? '') as any,
        });
      } catch (err) {
        const msg = String((err as { message?: unknown })?.message ?? '');
        if (msg.includes('non-committing macro resolution')) {
          spindle.log.info(
            `[LumiScript] api.macros.register("${name}"): spindle.registerMacro ` +
            `temporarily blocked by concurrent commit:false resolve — prior ` +
            `registration kept; this update will land on the next call.`,
          );
        } else {
          throw err;
        }
      }

      // Track for the post-execution stale-diff (parallel to tools).
      macrosRegisteredThisRun?.add(name);
      onMacrosChanged?.();

      busEmit('ls:macro:registered', { name, scriptId: script.id, mode });
    },

    updateValue(name: string, value: string): void {
      const entry = getMacro(name);
      // Silent no-op when not found OR not owned by this script. Mirrors
      // the ownership-gated behavior of `api.tools.unregister`.
      if (!entry || entry.scriptId !== script.id) return;

      // Fail-fast on push/pull collision. Pushing a value against a handler-
      // backed macro is a no-op at the Spindle layer (handler wins on
      // resolution) — surfacing the mismatch as an exception saves the user
      // a confusing silent-no-effect debugging session.
      if (entry.mode === 'pull') {
        throw new Error(
          `api.macros.updateValue: "${name}" was registered with a handler (pull mode) — ` +
          `updateValue is only valid for push-mode macros.`,
        );
      }

      const stringValue = String(value);
      recordValue(name, stringValue);
      spindle.updateMacroValue(name, stringValue);
    },

    unregister(name: string): void {
      if (removeMacro(name, script.id)) {
        spindle.unregisterMacro(name);
        onMacrosChanged?.();
        busEmit('ls:macro:unregistered', { name, scriptId: script.id });
      }
    },

    list(): RegisteredMacroInfo[] {
      return listAll().map(e => ({
        name:        e.name,
        description: e.description,
        category:    e.category,
        returnType:  e.returnType,
        args:        e.args,
        mode:        e.mode,
        lastValue:   e.lastValue,
        scriptId:    e.scriptId,
        scriptName:  e.scriptName,
      }));
    },

    // ── Macro interceptor (per-script handler registration) ───────────────
    //
    // Permission: `macro_interceptor` — declared by LumiScript at the
    // extension level (no per-script gate). The host's
    // `spindle.registerMacroInterceptor` call is gated on this same
    // permission, so denial surfaces here at the API call (assertPerm
    // throws) rather than silently at host-registration time.

    registerInterceptor(
      handler: MacroInterceptorHandler,
      options?: MacroInterceptorOptions,
    ): MacroInterceptorHandle {
      assertPerm('macro_interceptor', hasPerm, script.name);
      // `addEntry` validates handler shape, priority, timeoutMs and throws
      // on bad input; auto-generates id when omitted.
      const id = addInterceptorEntry(script.id, script.name, handler, options);
      // Track for the post-execution stale-diff. Parallel to how `register`
      // (above) tracks via `macrosRegisteredThisRun`. Without this, a
      // trigger script that re-registers an interceptor on every event
      // would accumulate auto-id'd entries across runs; with it, the
      // post-run `diffAndCleanStale` pass drops anything the new run
      // didn't re-create (matching tools / macros semantics).
      macroInterceptorsRegisteredThisRun?.add(id);
      return {
        id,
        // Idempotent: removeInterceptorEntry is ownership-scoped + returns
        // false if the entry is already gone. Safe to call repeatedly or
        // after a teardown sweep.
        remove: () => {
          removeInterceptorEntry(script.id, id);
        },
      };
    },

    listInterceptors(): RegisteredMacroInterceptorInfo[] {
      // Diagnostic surface — un-gated, mirrors `list()` above.
      return listInterceptorEntries();
    },
  };
}

// `MacroContext` is re-exported here so that tests / callers importing from
// this module don't have to dual-import from `../types/script.js`.
export type { MacroContext };
