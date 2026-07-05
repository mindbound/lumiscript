/**
 * Snapshots the cardinality of every long-lived engine registry, for leak
 * detection via before/after diffing. This is higher-fidelity than heap-byte
 * sampling because it *names* the structure that grew — `process.memoryUsage()`
 * only gives totals.
 *
 * Reuses the exact counters the Diagnostics panel reads
 * (`src/engine/diagnostics.ts:35-56`), so the probe can never drift from the
 * registries the product itself reports on.
 */

import { listAll as listInjections } from '../../src/engine/injection-store.js';
import { listAll as listTools } from '../../src/engine/tool-store.js';
import { listAll as listMacros } from '../../src/engine/macro-store.js';
import { listAll as listMacroInterceptors } from '../../src/engine/macro-interceptor-registry.js';
import { listAll as listContentProcessors } from '../../src/engine/message-content-processor-registry.js';
import { listAll as listWorldInfoInterceptors } from '../../src/engine/world-info-interceptor-registry.js';
import { listAll as listRpc } from '../../src/engine/rpc-store.js';
import { countSubscriptions as countBroadcastSubs } from '../../src/engine/broadcast-bus.js';
import { countTotal as countDrawerTabs } from '../../src/engine/drawer-tab-registry.js';
import { countLiveWidgetsByScript } from '../../src/engine/float-widget-registry.js';
import { countLiveAppMountsByScript } from '../../src/engine/app-mount-registry.js';
import { countLiveModalsByScript } from '../../src/engine/advanced-modal-registry.js';
import { countByScript as countInputBarActionsByScript } from '../../src/engine/input-bar-action-registry.js';
import {
  listElementInjectMessages,
  listStyleReplayMessages,
  listDelegationReplayMessages,
} from '../../src/engine/dom-registry.js';

export interface RegistrySnapshot {
  tools:                 number;
  macros:                number;
  macroInterceptors:     number;
  contentProcessors:     number;
  worldInfoInterceptors: number;
  injections:            number;
  rpc:                   number;
  broadcastSubs:         number;
  drawerTabs:            number;
  domElements:           number;
  domStyles:             number;
  domDelegations:        number;
  floatWidgets:          number;
  appMounts:             number;
  advancedModals:        number;
  inputBarActions:       number;
}

/**
 * Capture current registry cardinalities. The four per-script registries
 * (float widgets, app mounts, advanced modals, input-bar actions) have no
 * global counter — they are summed over `scriptIds`. Pass the script ids the
 * workload registered; omit to read only the globally-counted registries
 * (the four per-script ones then read 0).
 */
export function snapshotRegistries(scriptIds: readonly string[] = []): RegistrySnapshot {
  let floatWidgets = 0;
  let appMounts = 0;
  let advancedModals = 0;
  let inputBarActions = 0;
  for (const id of scriptIds) {
    floatWidgets    += countLiveWidgetsByScript(id);
    appMounts       += countLiveAppMountsByScript(id);
    advancedModals  += countLiveModalsByScript(id);
    inputBarActions += countInputBarActionsByScript(id);
  }
  return {
    tools:                 listTools().length,
    macros:                listMacros().length,
    macroInterceptors:     listMacroInterceptors().length,
    contentProcessors:     listContentProcessors().length,
    worldInfoInterceptors: listWorldInfoInterceptors().length,
    injections:            listInjections().length,
    rpc:                   listRpc().length,
    broadcastSubs:         countBroadcastSubs(),
    drawerTabs:            countDrawerTabs(),
    domElements:           listElementInjectMessages().length,
    domStyles:             listStyleReplayMessages().length,
    domDelegations:        listDelegationReplayMessages().length,
    floatWidgets,
    appMounts,
    advancedModals,
    inputBarActions,
  };
}

/**
 * Per-key delta (after − before). Only nonzero entries are returned — a
 * structure that didn't move is omitted, so a clean run yields `{}`. Nonzero
 * residual after a register→fire→cleanup workload is the leak signal.
 */
export function diffRegistries(
  before: RegistrySnapshot,
  after: RegistrySnapshot,
): Partial<RegistrySnapshot> {
  const delta: Partial<RegistrySnapshot> = {};
  for (const k of Object.keys(before) as (keyof RegistrySnapshot)[]) {
    const d = after[k] - before[k];
    if (d !== 0) delta[k] = d;
  }
  return delta;
}
