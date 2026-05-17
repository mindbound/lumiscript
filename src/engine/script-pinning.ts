/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT-LEVEL REGISTRATION CENSUS (v1.0.0-rc.3+)
 * ============================================================================
 * Aggregates per-script counts across every registry whose entries hold
 * parent-side wrappers that route back to child-side handler closures. The
 * key property: when the worker process dies, the child-side closure dies
 * with it; the parent-side wrapper becomes a null pointer (see
 * `host-dispatcher.ts:sendRunHandlerRequest` — it throws
 * `"worker '...' for script ... not running"` with no lazy spawn).
 *
 * Consumers:
 *
 *   1. **Eviction sweep** (`host-dispatcher.ts`). The pool's idle/memory
 *      eviction skips workers that host at least one script with active
 *      registrations — those scripts genuinely need the worker warm to
 *      keep functioning. Without this guard, a script that registered
 *      e.g. a tool on `ls:startup` and went dormant would have its worker
 *      reaped after the idle threshold, leaving the host-side tool entry
 *      as a dangling pointer that throws on invocation.
 *
 *   2. **Diagnostics panel** (`diagnostics.ts`, Section B). Surfaces
 *      "which scripts are pinning which workers, and why" so users can
 *      reason about pool memory usage when they see "worker won't evict"
 *      states.
 *
 * What counts as a "registration" for pinning purposes:
 *
 *   - `tools`               — `tool-store`
 *   - `macros`              — `macro-store`
 *   - `injections`          — `injection-store` (handler-mode entries
 *                              are the load-bearing ones, but we count
 *                              all entries; conservative pinning is
 *                              cheaper than misclassifying a handler-
 *                              backed injection as ephemeral)
 *   - `drawerTabs`          — `drawer-tab-registry`
 *   - `inputBarActions`     — `input-bar-action-registry`
 *   - `worldInfoInterceptors` — `world-info-interceptor-registry`
 *   - `messageProcessors`   — `message-content-processor-registry`
 *   - `macroInterceptors`   — `macro-interceptor-registry`
 *   - `rpcEndpoints`        — `rpc-store` (sync-mode pinning is
 *                              conservative — value sits in `spindle.rpcPool`
 *                              and could survive worker death, but the
 *                              push-update side of the contract needs the
 *                              worker alive, so we pin)
 *   - `floatWidgets`        — `float-widget-registry` (LIVE widgets only;
 *                              unmounted ones don't pin)
 *   - `advancedModals`      — `advanced-modal-registry` (LIVE modals only)
 *
 * Explicitly NOT counted:
 *
 *   - **Broadcast subscriptions** (`broadcast-bus`). Many scripts subscribe
 *     to `ls:*` events (`ls:startup`, `ls:tool:invoked`, etc.) that don't
 *     require the worker to be alive between fires — `ls:startup` itself
 *     re-spawns a worker if needed (it's a trigger dispatch, not a handler
 *     fire). Counting all broadcast subs would over-pin. User-event
 *     subscribers DO need pinning; a future iteration can filter by event-
 *     name prefix and add them. Tracked as a roadmap follow-up.
 *
 *   - **DOM handles** (`dom-registry`, `pendingDomHandles`). These are
 *     covered by the post-eviction alias storage fix landed in v1.0.0-rc.3
 *     (`host-dispatcher.ts:handleDomInjectRequest`) — re-injecting after
 *     respawn re-builds the child-side cache and aliases the new elementId
 *     to the surviving parent-side handle. So pinning isn't required for
 *     DOM-only scripts; the alias path handles them.
 */

import { listNamesByScriptId as listToolNames }                from './tool-store.js';
import { listNamesByScriptId as listMacroNames }               from './macro-store.js';
import { listByScriptId      as listInjectionsByScript }       from './injection-store.js';
import { countByScript       as countDrawerTabsByScript }      from './drawer-tab-registry.js';
import { countByScript       as countInputBarActionsByScript } from './input-bar-action-registry.js';
import { countByScriptId     as countWorldInfoInterceptors }   from './world-info-interceptor-registry.js';
import { countByScriptId     as countMessageProcessors }       from './message-content-processor-registry.js';
import { countByScriptId     as countMacroInterceptors }       from './macro-interceptor-registry.js';
import { listEndpointsByScriptId }                             from './rpc-store.js';
import { countLiveWidgetsByScript }                            from './float-widget-registry.js';
import { countLiveModalsByScript }                             from './advanced-modal-registry.js';

/**
 * Per-script registration breakdown. All fields are >= 0.
 *
 * Stable JSON shape — the diagnostics panel surfaces these as separate
 * columns in the "Eviction-exempt scripts" row, and the Markdown export
 * threads them through as `details`. Don't rename existing fields without
 * a coordinated diagnostics panel update.
 */
export interface ScriptRegistrationCounts {
  tools:                 number;
  macros:                number;
  injections:            number;
  drawerTabs:            number;
  inputBarActions:       number;
  worldInfoInterceptors: number;
  messageProcessors:     number;
  macroInterceptors:     number;
  rpcEndpoints:          number;
  floatWidgets:          number;
  advancedModals:        number;
  /** Sum of every individual count. Caller convenience — derivable from the rest. */
  total:                 number;
}

/**
 * Census of `scriptId`'s long-lived registrations across every registry.
 *
 * Cheap — each registry's `*byScript*` lookup is a single Map lookup or
 * filtered iteration. The eviction sweep calls this once per
 * worker-assigned script per sweep tick (default 60 s interval), so the
 * aggregate cost is negligible even at high script counts.
 */
export function getRegistrationCountsForScript(scriptId: string): ScriptRegistrationCounts {
  const tools                 = listToolNames(scriptId).length;
  const macros                = listMacroNames(scriptId).length;
  const injections            = listInjectionsByScript(scriptId).length;
  const drawerTabs            = countDrawerTabsByScript(scriptId);
  const inputBarActions       = countInputBarActionsByScript(scriptId);
  const worldInfoInterceptors = countWorldInfoInterceptors(scriptId);
  const messageProcessors     = countMessageProcessors(scriptId);
  const macroInterceptors     = countMacroInterceptors(scriptId);
  const rpcEndpoints          = listEndpointsByScriptId(scriptId).length;
  const floatWidgets          = countLiveWidgetsByScript(scriptId);
  const advancedModals        = countLiveModalsByScript(scriptId);
  const total =
    tools + macros + injections + drawerTabs + inputBarActions +
    worldInfoInterceptors + messageProcessors + macroInterceptors +
    rpcEndpoints + floatWidgets + advancedModals;
  return {
    tools, macros, injections, drawerTabs, inputBarActions,
    worldInfoInterceptors, messageProcessors, macroInterceptors,
    rpcEndpoints, floatWidgets, advancedModals, total,
  };
}

/**
 * Fast-path boolean — true iff `scriptId` owns >= 1 entry in any pinning
 * registry. Returns on the first hit to avoid summing all eleven registries
 * when one entry is enough to gate eviction. Use this in hot paths
 * (eviction sweep filtering); use `getRegistrationCountsForScript` when
 * you need the breakdown (diagnostics).
 */
export function scriptHasPinningRegistrations(scriptId: string): boolean {
  if (listToolNames(scriptId).length > 0)              return true;
  if (listMacroNames(scriptId).length > 0)             return true;
  if (listInjectionsByScript(scriptId).length > 0)     return true;
  if (countDrawerTabsByScript(scriptId) > 0)           return true;
  if (countInputBarActionsByScript(scriptId) > 0)      return true;
  if (countWorldInfoInterceptors(scriptId) > 0)        return true;
  if (countMessageProcessors(scriptId) > 0)            return true;
  if (countMacroInterceptors(scriptId) > 0)            return true;
  if (listEndpointsByScriptId(scriptId).length > 0)    return true;
  if (countLiveWidgetsByScript(scriptId) > 0)          return true;
  if (countLiveModalsByScript(scriptId) > 0)           return true;
  return false;
}
