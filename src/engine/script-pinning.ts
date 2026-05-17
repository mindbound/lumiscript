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
 *   - **DOM handles without event listeners** (`dom-registry`,
 *     `pendingDomHandles`). The post-eviction alias-storage fix landed in
 *     v1.0.0-rc.3 (`host-dispatcher.ts:handleDomInjectRequest`) covers
 *     re-injection idempotency: re-injecting after respawn re-builds the
 *     child-side cache and aliases the new elementId to the surviving
 *     parent-side handle. Purely static DOM (no event handlers, no
 *     delegates) needs no further protection — the elements stay on
 *     screen and the user has no way to interact with the dead worker.
 *
 * v1.0.0-rc.4+ additions — closed via the hook-injection mechanism below
 * because they live outside the engine layer's import horizon:
 *
 *   - **`handlerCleanups` entries** (host-dispatcher.ts). Every
 *     `register-handler` IPC for kind `domEventListener` / `domDelegate`
 *     / `commandsOnInvoked` / etc. records a parent-side cleanup closure
 *     here keyed by `(scriptId, handlerId)`. The cleanup represents an
 *     active wrapper that routes back to the child via
 *     `sendRunHandlerRequest`. If the worker dies, the wrapper becomes a
 *     null pointer (the v1.0.0-rc.3 tool-pinning rationale extended to
 *     DOM listeners + command handlers). Pinning on any entry closes
 *     the surface — host-dispatcher.ts wires the count via
 *     `setPinningHooks` at module init.
 *
 *   - **User-event broadcast subscriptions** (`broadcast-bus`). Subs to
 *     non-`ls:*` events ARE load-bearing: cross-worker broadcasts
 *     forwarded into a dead worker silently drop. `ls:*` subs filtered
 *     out (engine lifecycle events that only fire as side-effects of
 *     local activity). Hook lets script-pinning.ts call broadcast-bus's
 *     `countUserEventSubscriptionsByScriptId` without an explicit
 *     import (keeps script-pinning.ts dependency-graph stable across
 *     future broadcast-bus refactors).
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
 *
 * v1.0.0-rc.4+ added `handlerClosures` and `userBroadcastSubs`; their
 * values arrive via the hook-injection mechanism (`setPinningHooks`)
 * since the underlying state lives outside the engine layer's natural
 * import horizon.
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
  /**
   * v1.0.0-rc.4+ — count of active `handlerCleanups` entries for the
   * script. Aggregates every `register-handler` IPC kind: DOM event
   * listeners (`handle.on`), DOM delegates (`api.ui.dom.delegate`),
   * command handlers (`api.commands.registerCommand({ onInvoked })`),
   * plus the handler-IPC kinds that ALSO surface through their own
   * per-handle registries (drawer-tab activate, input-bar-action click,
   * float-widget drag-end). Overlap with the registry-backed counts
   * above is benign: the boolean pin check returns true on first hit
   * regardless of category, and the breakdown is informational.
   */
  handlerClosures:       number;
  /**
   * v1.0.0-rc.4+ — count of broadcast-bus subscriptions to USER events
   * (non-`ls:*`) owned by the script. `ls:*` engine-lifecycle subs are
   * excluded — they only fire as side-effects of local activity (the
   * worker is necessarily alive when they fire), so they don't motivate
   * pinning.
   */
  userBroadcastSubs:     number;
  /** Sum of every individual count. Caller convenience — derivable from the rest. */
  total:                 number;
}

// ─── Hook injection (v1.0.0-rc.4+) ──────────────────────────────────────────
//
// Cross-layer state — `handlerCleanups` lives in host-dispatcher.ts and
// `broadcastIndex` lives in broadcast-bus.ts. Direct imports either create
// cycles (host-dispatcher already imports this module) or split
// script-pinning's dependency surface across architectural layers
// awkwardly. The hook pattern lets each owner inject a per-script counter
// at module-init time without polluting the import graph.
//
// Production wiring: `host-dispatcher.ts` calls `setPinningHooks` once at
// module load.
//
// Test wiring: production hooks survive `__resetForTests` (they're
// constant closures, not data state); tests don't need to re-wire them.
// Tests that exercise the new sources install entries via the existing
// `__recordHandlerCleanupForTests` seam (host-dispatcher) or
// `broadcast-bus.on(...)` (broadcast bus), and the hooks read from the
// real maps as production would.

interface PinningHooks {
  /** Returns count of `handlerCleanups[scriptId]` entries. */
  handlerCleanupCount:     (scriptId: string) => number;
  /** Returns count of non-`ls:*` broadcast subs owned by `scriptId`. */
  userBroadcastSubCount:   (scriptId: string) => number;
}

let pinningHooks: PinningHooks = {
  // Safe defaults until host-dispatcher.ts wires the real hooks at init.
  // Treating an un-wired hook as "0" means a unit-test that imports
  // script-pinning.ts in isolation (without host-dispatcher) sees the
  // engine-registries-only behaviour — matches pre-rc.4 semantics.
  handlerCleanupCount:   () => 0,
  userBroadcastSubCount: () => 0,
};

/**
 * Wire the hooks that grant script-pinning visibility into host-
 * dispatcher's `handlerCleanups` map and broadcast-bus's user-event
 * subscription index. Idempotent — called at most once at host-
 * dispatcher module init, but tests calling it again do no harm.
 */
export function setPinningHooks(hooks: PinningHooks): void {
  pinningHooks = hooks;
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
  const handlerClosures       = pinningHooks.handlerCleanupCount(scriptId);
  const userBroadcastSubs     = pinningHooks.userBroadcastSubCount(scriptId);
  const total =
    tools + macros + injections + drawerTabs + inputBarActions +
    worldInfoInterceptors + messageProcessors + macroInterceptors +
    rpcEndpoints + floatWidgets + advancedModals +
    handlerClosures + userBroadcastSubs;
  return {
    tools, macros, injections, drawerTabs, inputBarActions,
    worldInfoInterceptors, messageProcessors, macroInterceptors,
    rpcEndpoints, floatWidgets, advancedModals,
    handlerClosures, userBroadcastSubs, total,
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
  // v1.0.0-rc.4+ — handler closures (DOM listeners, command handlers,
  // delegates) + non-`ls:*` broadcast subs. See module-level JSDoc.
  if (pinningHooks.handlerCleanupCount(scriptId)   > 0) return true;
  if (pinningHooks.userBroadcastSubCount(scriptId) > 0) return true;
  return false;
}
