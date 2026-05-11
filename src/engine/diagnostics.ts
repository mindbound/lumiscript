/**
 * ============================================================================
 * LUMISCRIPT — DIAGNOSTICS COLLECTOR (v0.28.0+)
 * ============================================================================
 * Pure data-aggregation module that builds a `DiagnosticsReport` snapshot
 * of LumiScript's runtime state. Consumed by the Diagnostics modal in the
 * Settings panel (and the markdown-serialized form pasted into Discord
 * support exchanges).
 *
 * Scope (per `notes/diagnostics-design.md`):
 *   - Section A — LumiScript (version, min-host, granted permissions)
 *   - Section C — Active context (chat / character / user resolution)
 *   - Section D — Registrations (all engine registry counts)
 *   - Section E — Storage health (probe results threaded in by caller)
 *
 * Sections B (script-runner subprocess) and F (Monaco / fonts / worker /
 * CDN) are collected separately — B by the script-runner host-dispatcher,
 * F entirely frontend-side. Backend merges B into this report before
 * forwarding; F is appended frontend-side after the modal receives the
 * backend report.
 *
 * Determinism: no async work, no IPC. Stateful deps (script storage,
 * trigger registry, granted permissions, storage probe result) are passed
 * in by `backend.ts` rather than imported globally so tests can construct
 * known states.
 */

import type { ScriptStorage } from '../storage/script-storage.js';
import type { TriggerRegistry } from './trigger-registry.js';
import { getActiveContext } from './binding.js';
import { listAll as listInjections } from './injection-store.js';
import { listAll as listTools } from './tool-store.js';
import { listAll as listMacros } from './macro-store.js';
import { listAll as listMacroInterceptors } from './macro-interceptor-registry.js';
import { listAll as listContentProcessors } from './message-content-processor-registry.js';
import { listAll as listWorldInfoInterceptors } from './world-info-interceptor-registry.js';
import { listAll as listRpc } from './rpc-store.js';
import { countSubscriptions as countBroadcastSubs } from './broadcast-bus.js';
import { countTotal as countDrawerTabs } from './drawer-tab-registry.js';
import { countLiveWidgetsByScript } from './float-widget-registry.js';
import { countLiveModalsByScript } from './advanced-modal-registry.js';
import { countByScript as countInputBarActionsByScript } from './input-bar-action-registry.js';
import {
  listElementInjectMessages,
  listStyleReplayMessages,
  listDelegationReplayMessages,
} from './dom-registry.js';

// ─── Public types ───────────────────────────────────────────────────────────

export type DiagnosticStatus = 'pass' | 'warn' | 'fail' | 'info';

export interface DiagnosticCheck {
  /** Short human-readable label for the row (e.g. "Granted permissions"). */
  label: string;
  /** Status badge — drives the summary count + colour in the FE modal. */
  status: DiagnosticStatus;
  /** One-line human-readable message. */
  message: string;
  /**
   * Optional structured details. Must be JSON-serializable — gets wired
   * across the FE→BE boundary verbatim and also serialized into the
   * markdown dump's "details" lines.
   */
  details?: Record<string, unknown>;
}

export interface DiagnosticSection {
  /**
   * Stable string identifier — used by the FE for ordering + by the
   * markdown serializer for stable headers across versions. Future
   * sections extend; existing IDs must not be renamed (the markdown
   * dump is a quasi-public surface once users start including it in
   * Discord support reports).
   */
  id: string;
  /** Human-readable section header for the modal. */
  name: string;
  checks: DiagnosticCheck[];
}

export interface DiagnosticsReport {
  /** ms-precision timestamp (Date.now()) of report generation. */
  generatedAt: number;
  /** Aggregate counts across every check in every section. */
  summary: {
    failures: number;
    warnings: number;
    passes: number;
    info: number;
  };
  /** Sections in stable order. Future sections appended, not reordered. */
  sections: DiagnosticSection[];
}

/** Optional async-probe result threaded in by the caller. */
export interface StorageProbeResult {
  ok: boolean;
  latencyMs?: number;
  error?: string;
}

/**
 * Script-runner subprocess snapshot threaded in by the caller — combines
 * `getRunnerHealth()` (sync, from host-dispatcher module state) with the
 * optional async stats from `queryRunnerStats()` (IPC to the child). When
 * `stats` is `null` the child either timed out or no child is currently
 * alive; surface this distinction in the report rather than synthesising
 * a fake value.
 */
export interface ScriptRunnerProbeResult {
  totalRestartCount:      number;
  lastRestartReason:      string | null;
  currentBackoffAttempts: number;
  childAlive:             boolean;
  processId:              string | null;
  /** Async stats from the child process. Null if not available. */
  stats: {
    rss:         number;
    heapTotal:   number;
    heapUsed:    number;
    external:    number;
    cpuUserUs:   number;
    cpuSystemUs: number;
    uptimeSec:   number;
  } | null;
}

/**
 * Stateful singletons + async-probe outputs the collector needs. Passed in
 * by `backend.ts`'s diagnostic message handler — kept off the module surface
 * so the collector stays a pure function for testing.
 */
export interface DiagnosticsCollectorDeps {
  scriptStorage:       ScriptStorage;
  triggerRegistry:     TriggerRegistry;
  /** LumiScript extension version (from package.json / spindle.json). */
  lumiScriptVersion:   string;
  /** Minimum Lumiverse host version declared in spindle.json. */
  minLumiverseVersion: string;
  /** Spindle-granted permissions snapshot. */
  grantedPermissions:  string[];
  /**
   * Currently-active Lumiverse user id, tracked by `backend.ts` from the
   * frontend's setting-updated payloads (not stored on `binding.ts`'s
   * ActiveContext — userId lives separately at the backend.ts module
   * scope; the collector reads it via this dep).
   */
  activeUserId:        string | null;
  /**
   * Result of an async userStorage round-trip probe run by the caller
   * before invoking this collector. `undefined` if the caller chose not
   * to probe (e.g. for unit tests that don't need storage diagnostics).
   */
  storageProbe?:       StorageProbeResult;
  /**
   * Script-runner subprocess health + stats snapshot. `undefined` if the
   * caller chose to skip Section B (e.g. tests that don't exercise
   * script-runner state). When present, drives Section B's checks.
   */
  scriptRunner?:       ScriptRunnerProbeResult;
}

// ─── Entry point ────────────────────────────────────────────────────────────

/**
 * Aggregate the backend portion of a diagnostics report. Synchronous and
 * deterministic given fixed deps + the current registry state — the only
 * async work (storage probe) is hoisted to the caller so this function can
 * be unit-tested without timing complications.
 */
export function collectBackendDiagnostics(deps: DiagnosticsCollectorDeps): DiagnosticsReport {
  const sections: DiagnosticSection[] = [
    buildLumiScriptSection(deps),
    buildScriptRunnerSection(deps),
    buildActiveContextSection(deps),
    buildRegistrationsSection(deps),
    buildStorageSection(deps),
  ];
  return {
    generatedAt: Date.now(),
    summary:     summarize(sections),
    sections,
  };
}

// ─── Section A — LumiScript ─────────────────────────────────────────────────

function buildLumiScriptSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  return {
    id:   'lumiscript',
    name: 'LumiScript',
    checks: [
      {
        label:   'Version',
        status:  'info',
        message: deps.lumiScriptVersion,
      },
      {
        label:   'Minimum Lumiverse host version',
        status:  'info',
        // We don't currently have a runtime API to read the CURRENT
        // Lumiverse host version from the spindle surface, so this is
        // info-only — we surface the requirement. Once a future
        // `spindle.host.version` (or similar) ships, promote to pass/fail
        // comparing requirement vs current.
        message: `Requires ${deps.minLumiverseVersion}`,
      },
      {
        label:   'Granted permissions',
        status:  deps.grantedPermissions.length > 0 ? 'pass' : 'warn',
        message: deps.grantedPermissions.length > 0
          ? `${deps.grantedPermissions.length} permission(s) granted`
          : 'No permissions granted — extension features will be degraded',
        details: { granted: [...deps.grantedPermissions].sort() },
      },
    ],
  };
}

// ─── Section B — Script-runner subprocess ──────────────────────────────────

function buildScriptRunnerSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  // When the caller didn't probe (e.g. unit tests that don't exercise the
  // subprocess), emit a single info row noting that. Better than guessing
  // values; matches storage section's "not probed" pattern.
  if (deps.scriptRunner === undefined) {
    return {
      id:   'scriptRunner',
      name: 'Script-runner subprocess',
      checks: [
        { label: 'Status', status: 'info', message: 'Not probed (caller chose to skip)' },
      ],
    };
  }

  const probe = deps.scriptRunner;
  const checks: DiagnosticCheck[] = [];

  // Liveness — primary health signal. A subprocess that's dead in a
  // sustained way is the bug we most want to catch.
  checks.push({
    label:   'Subprocess alive',
    status:  probe.childAlive ? 'pass' : 'fail',
    message: probe.childAlive
      ? `Running (processId: ${probe.processId ?? '<unknown>'})`
      : 'Not running — no child process handle (post-crash or pre-spawn state)',
  });

  // Restart history. Zero is the expected steady state. Any non-zero is
  // worth surfacing; sustained / growing is a sign of a crash loop.
  checks.push({
    label:   'Total restarts (this session)',
    status:  probe.totalRestartCount === 0 ? 'pass'
           : probe.totalRestartCount <= 3 ? 'warn'
           : 'fail',
    message: probe.totalRestartCount === 0
      ? 'No respawns since LumiScript loaded'
      : `${probe.totalRestartCount} respawn(s)${probe.lastRestartReason ? ` (last reason: ${probe.lastRestartReason})` : ''}`,
    details: {
      totalRestartCount:      probe.totalRestartCount,
      lastRestartReason:      probe.lastRestartReason,
      currentBackoffAttempts: probe.currentBackoffAttempts,
    },
  });

  // CPU + memory snapshot from the child (via IPC). When null, the child
  // either timed out or wasn't alive at probe time.
  if (probe.stats !== null) {
    checks.push({
      label:   'Memory',
      status:  'info',
      message: `${formatBytes(probe.stats.rss)} RSS, ${formatBytes(probe.stats.heapUsed)} / ${formatBytes(probe.stats.heapTotal)} heap`,
      details: {
        rss:       probe.stats.rss,
        heapTotal: probe.stats.heapTotal,
        heapUsed:  probe.stats.heapUsed,
        external:  probe.stats.external,
      },
    });
    checks.push({
      label:   'CPU time',
      status:  'info',
      message: `${formatMicros(probe.stats.cpuUserUs)} user, ${formatMicros(probe.stats.cpuSystemUs)} system (uptime: ${formatSeconds(probe.stats.uptimeSec)})`,
      details: {
        cpuUserUs:   probe.stats.cpuUserUs,
        cpuSystemUs: probe.stats.cpuSystemUs,
        uptimeSec:   probe.stats.uptimeSec,
      },
    });
  } else {
    checks.push({
      label:   'Resource stats',
      status:  probe.childAlive ? 'warn' : 'info',
      message: probe.childAlive
        ? 'Stats request timed out — child may be hung in a sync block'
        : 'Stats unavailable (no child alive)',
    });
  }

  return { id: 'scriptRunner', name: 'Script-runner subprocess', checks };
}

// Format helpers for Section B. Local — not exported because they're
// presentation-layer concerns specific to this section's check messages.
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(1)} MB`;
  return `${(mb / 1024).toFixed(2)} GB`;
}

function formatMicros(us: number): string {
  const ms = us / 1_000;
  if (ms < 1) return `${us} µs`;
  if (ms < 1_000) return `${ms.toFixed(1)} ms`;
  return `${(ms / 1_000).toFixed(2)} s`;
}

function formatSeconds(sec: number): string {
  if (sec < 60) return `${sec.toFixed(1)}s`;
  const min = sec / 60;
  if (min < 60) return `${min.toFixed(1)}min`;
  return `${(min / 60).toFixed(1)}h`;
}

// ─── Section C — Active context ─────────────────────────────────────────────

function buildActiveContextSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  const ctx = getActiveContext();
  const chatOpen = !!ctx.chatId;

  return {
    id:   'activeContext',
    name: 'Active context',
    checks: [
      {
        label:   'Chat ID',
        status:  chatOpen ? 'pass' : 'info',
        message: ctx.chatId ?? '(no chat open)',
      },
      {
        label:   'Character ID',
        // Warning if chat is open but characterId is null — that's the
        // exact stale-context race we patched in v0.23.3. Diagnostic
        // surface should flag it loudly because per-character collection
        // access throws against null and silent corruption against the
        // wrong character is possible.
        status:  chatOpen ? (ctx.characterId ? 'pass' : 'warn') : 'info',
        message: ctx.characterId
          ?? (chatOpen
            ? '(missing — chat open but no character resolved; see v0.23.3 post-mortem)'
            : '(no chat open)'),
      },
      {
        label:   'Character name',
        status:  'info',
        message: ctx.characterName ?? '(not resolved)',
      },
      {
        label:   'User ID',
        status:  deps.activeUserId ? 'pass' : 'warn',
        message: deps.activeUserId ?? '(not set — no user activity from the frontend yet)',
      },
    ],
  };
}

// ─── Section D — Registrations ──────────────────────────────────────────────

function buildRegistrationsSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  const scripts        = deps.scriptStorage.getScripts();
  const enabledCount   = scripts.filter(s => s.enabled).length;
  const disabledCount  = scripts.length - enabledCount;
  const triggerType    = scripts.filter(s => s.type === 'trigger').length;
  const libraryType    = scripts.filter(s => s.type === 'library').length;

  // Per-script registries with no aggregate count export. Iterate scripts
  // and sum. Cheap — typical install is dozens of scripts at most.
  let floatWidgets    = 0;
  let advancedModals  = 0;
  let inputBarActions = 0;
  for (const s of scripts) {
    floatWidgets    += countLiveWidgetsByScript(s.id);
    advancedModals  += countLiveModalsByScript(s.id);
    inputBarActions += countInputBarActionsByScript(s.id);
  }

  return {
    id:   'registrations',
    name: 'Registrations',
    checks: [
      {
        label:   'Scripts',
        status:  'info',
        message: `${scripts.length} total — ${enabledCount} enabled, ${disabledCount} disabled (${triggerType} trigger, ${libraryType} library)`,
        details: {
          total: scripts.length, enabled: enabledCount, disabled: disabledCount,
          triggerType, libraryType,
        },
      },
      {
        label:   'Spindle event subscriptions',
        status:  'info',
        message: `${deps.triggerRegistry.handlerCount} live subscription(s)`,
      },
      {
        label:   'Tools',
        status:  'info',
        message: `${listTools().length} registered`,
      },
      {
        label:   'Macros',
        status:  'info',
        message: `${listMacros().length} registered`,
      },
      {
        label:   'Macro interceptors',
        status:  'info',
        message: `${listMacroInterceptors().length} registered`,
      },
      {
        label:   'Content-message processors',
        status:  'info',
        message: `${listContentProcessors().length} registered`,
      },
      {
        label:   'World-info interceptors',
        status:  'info',
        message: `${listWorldInfoInterceptors().length} registered`,
      },
      {
        label:   'Injections',
        status:  'info',
        message: `${listInjections().length} active`,
      },
      {
        label:   'RPC endpoints',
        status:  'info',
        message: `${listRpc().length} registered`,
      },
      {
        label:   'Broadcast subscriptions',
        status:  'info',
        message: `${countBroadcastSubs()} active`,
      },
      {
        label:   'DOM injections',
        status:  'info',
        message: `${listElementInjectMessages().length} element(s), ${listStyleReplayMessages().length} stylesheet(s), ${listDelegationReplayMessages().length} delegation(s)`,
        details: {
          elements:    listElementInjectMessages().length,
          styles:      listStyleReplayMessages().length,
          delegations: listDelegationReplayMessages().length,
        },
      },
      {
        label:   'Drawer tabs',
        status:  'info',
        message: `${countDrawerTabs()} registered`,
      },
      {
        label:   'Float widgets',
        status:  'info',
        message: `${floatWidgets} live`,
      },
      {
        label:   'Advanced modals',
        status:  'info',
        message: `${advancedModals} live`,
      },
      {
        label:   'Input-bar actions',
        status:  'info',
        message: `${inputBarActions} registered`,
      },
    ],
  };
}

// ─── Section E — Storage ────────────────────────────────────────────────────

function buildStorageSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  const checks: DiagnosticCheck[] = [];

  if (deps.storageProbe === undefined) {
    checks.push({
      label:   'userStorage reachability',
      status:  'info',
      message: 'Not probed (caller chose to skip)',
    });
  } else if (deps.storageProbe.ok) {
    checks.push({
      label:   'userStorage reachability',
      status:  'pass',
      message: typeof deps.storageProbe.latencyMs === 'number'
        ? `Reachable (${deps.storageProbe.latencyMs}ms round-trip)`
        : 'Reachable',
    });
  } else {
    checks.push({
      label:   'userStorage reachability',
      status:  'fail',
      message: deps.storageProbe.error ?? 'Probe failed without an error message',
    });
  }

  return {
    id:   'storage',
    name: 'Storage',
    checks,
  };
}

// ─── Summary helper ─────────────────────────────────────────────────────────

function summarize(sections: DiagnosticSection[]): DiagnosticsReport['summary'] {
  let failures = 0, warnings = 0, passes = 0, info = 0;
  for (const section of sections) {
    for (const check of section.checks) {
      switch (check.status) {
        case 'fail': failures++; break;
        case 'warn': warnings++; break;
        case 'pass': passes++;  break;
        case 'info': info++;    break;
      }
    }
  }
  return { failures, warnings, passes, info };
}
