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
 *   - Assistant (Lisa) — corpus, threads, connections, generation
 *     settings. Added in v0.30.0 — not lettered because the existing
 *     section-letter scheme is full and this slot was inserted at the
 *     end of the backend output rather than renumbering Section F.
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
import type { EngineTelemetry } from '../types/script-runner-ipc.js';
import { getActiveContext } from './binding.js';
import { listAll as listInjections } from './injection-store.js';
import { listAll as listTools } from './tool-store.js';
import { listAll as listMacros } from './macro-store.js';
import { listAll as listMacroInterceptors } from './macro-interceptor-registry.js';
import { listAll as listContentProcessors } from './message-content-processor-registry.js';
import { listAll as listWorldInfoInterceptors } from './world-info-interceptor-registry.js';
import { listAll as listRpc } from './rpc-store.js';
import { countSubscriptions as countBroadcastSubs } from './broadcast-bus.js';
import {
  listScriptIdsInApplyOrder as listThemeScriptIds,
  getContributionSummaryByScriptId as getThemeContributionSummary,
} from './theme-store.js';
import { countTotal as countDrawerTabs } from './drawer-tab-registry.js';
import { countLiveWidgetsByScript } from './float-widget-registry.js';
import { countLiveAppMountsByScript } from './app-mount-registry.js';
import { countLiveModalsByScript } from './advanced-modal-registry.js';
import { countByScript as countInputBarActionsByScript } from './input-bar-action-registry.js';
import { countByScriptId as countMessageTagInterceptors } from './message-tag-handler-registry.js';
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
  /**
   * One-line human-readable message. Always present so renderers that
   * don't (or can't) consume `table` still have something to show.
   *
   * When `table` is also set, this should be a compact one-liner that
   * conveys the same info in summary form — e.g. a bullet-separated
   * row listing. The FE modal prefers `table` when both are set; the
   * Markdown export (`serialize-markdown.ts`) uses `message` only,
   * since Discord paste targets benefit from one-line-per-check.
   */
  message: string;
  /**
   * Optional structured table for rich rendering of multi-row data
   * (e.g. per-worker stats). Strings only — must be JSON-serializable
   * for the FE→BE wire. Renderers that support tables (the FE modal)
   * format it as an HTML table; renderers that don't fall back to
   * `message`.
   *
   * `cellTooltips` is an optional per-cell tooltip overlay, same shape
   * as `rows`. The FE modal applies tooltip strings as `title=` on the
   * matching `<td>` (hover-to-reveal). Use `null` to skip cells without
   * a tooltip. Markdown export ignores `cellTooltips` — surface the
   * same information through a follow-up check row when it should land
   * in support reports.
   */
  table?: {
    headers:       string[];
    rows:          string[][];
    cellTooltips?: Array<Array<string | null>>;
  };
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

/**
 * Slimmed report for LLM consumption (the Lisa `read_diagnostics` tool).
 * Keeps the high-signal prose — section names + each check's label / status /
 * message — and drops the bulky `table` / `details` payloads (the modal's
 * drill-down) that would balloon the token cost. The check `message` fields are
 * already written for human display, so they read well to the model; a typical
 * compact report is ~3–6 KB vs the full ~8–15 KB.
 */
export interface CompactDiagnostics {
  generatedAt: number;
  summary: DiagnosticsReport['summary'];
  sections: Array<{
    name: string;
    checks: Array<{ label: string; status: DiagnosticStatus; message: string }>;
  }>;
}

/** Project a full {@link DiagnosticsReport} down to its {@link CompactDiagnostics} form. */
export function compactDiagnostics(report: DiagnosticsReport): CompactDiagnostics {
  return {
    generatedAt: report.generatedAt,
    summary: report.summary,
    sections: report.sections.map((s) => ({
      name: s.name,
      checks: s.checks.map((c) => ({ label: c.label, status: c.status, message: c.message })),
    })),
  };
}

/** Optional async-probe result threaded in by the caller. */
export interface StorageProbeResult {
  ok: boolean;
  latencyMs?: number;
  error?: string;
}

/**
 * Snapshot of assistant-subsystem state threaded in by the caller. All
 * fields are populated synchronously where possible; the storage + the
 * connections inspections are async at the caller and bundled into this
 * shape before invoking the collector so the collector itself stays
 * pure. `undefined` (as a whole) signals "caller chose to skip", matching
 * the storage / script-runner probe-result patterns above.
 */
export interface AssistantProbeResult {
  /** True once `bootstrapAssistant()` has completed for the current user.
   *  Bootstrap is lazy (deferred until the first assistant IPC), so
   *  `false` is normal when the user hasn't opened Lisa yet — surfaced as
   *  `info` not `fail`. */
  initialised: boolean;
  /** Number of entries in the runtime corpus lookup table (methods +
   *  types + namespaces). Zero is a hard fail — Lisa's `lookup_api` tool
   *  would silently return nothing and she'd hallucinate API surface. */
  corpusEntries: number;
  /** Thread-storage probe outcome. */
  storage: {
    indexLoaded: boolean;
    threadsIndexed: number;
    threadsReadable: number;
    totalBytes: number;
    /** First error encountered (per-thread or index-level). Present on
     *  any failure path; absent on the clean-pass case. */
    error?: string;
  };
  /** LLM-connections probe — same `spindle.connections.list` call the
   *  modal's connection picker uses. */
  connections: {
    count: number;
    defaultName?: string;
    defaultModel?: string;
    defaultProvider?: string;
  };
  /** Current assistant-related settings snapshot. Mirrors the four
   *  generation-default fields + the iteration ceiling — used to
   *  contextualise behaviour reports ("Lisa thrashed" → check ceiling). */
  settings: {
    maxIterations: number;
    temperature?: number;
    topP?: number;
    maxTokens?: number;
    parallelToolCalls: boolean;
  };
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
  /**
   * Phase F — worker-pool snapshot (sync state from
   * `getWorkerPoolDiagnostics()` + async per-worker memory from parallel
   * `queryWorkerMemoryBytes()` calls). Optional so unit tests can pass a
   * minimal probe without exercising the pool surface; in production this
   * is always present.
   */
  pool?: {
    configuredWorkerCount: number;
    workers: Array<{
      workerKey:           string;
      processId:           string;
      lastActivityMs:      number;
      assignedScriptCount: number;
      /**
       * Script IDs currently assigned to this worker (alphabetically
       * sorted for stable output). The collector resolves names via
       * `scriptStorage.getScript(id)?.name` to drive the Scripts-column
       * tooltip + the "Script assignments by worker" row.
       */
      assignedScripts:     string[];
      restartAttempts:     number;
      /** Async-collected RSS for this worker. Null if the per-worker query timed out or failed. */
      rss:                 number | null;
      /**
       * v1.0.0-rc.3+ — true when at least one assigned script holds
       * active long-lived registrations (tools, macros, drawer tabs,
       * RPC endpoints, etc.). Pinned workers are exempt from idle +
       * memory eviction; the diagnostics panel surfaces this via the
       * "Eviction-exempt scripts" row.
       */
      pinnedByRegistrations: boolean;
      /**
       * v1.0.0-rc.3+ — per-pinning-script registration breakdown. Each
       * entry's `counts` is a copy of `ScriptRegistrationCounts` from
       * `script-pinning.ts`. Cross-process JSON-only — typed `unknown`-
       * compatible at this layer since the diagnostics report is what
       * the FE modal consumes.
       */
      pinningScripts: Array<{
        scriptId: string;
        counts: {
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
          appMounts:             number;
          advancedModals:        number;
          /**
           * v1.0.0-rc.4+ — DOM event listeners (`handle.on`), DOM
           * delegates (`api.ui.dom.delegate`), command handlers, and
           * the handler-IPC kinds also surfaced by per-handle registry
           * counts above. See `script-pinning.ts` for the full
           * breakdown of contributing register-handler kinds.
           */
          handlerClosures:       number;
          /**
           * v1.0.0-rc.4+ — non-`ls:*` broadcast subscriptions. `ls:*`
           * engine-lifecycle subs excluded since they only fire as
           * side-effects of local activity.
           */
          userBroadcastSubs:     number;
          total:                 number;
        };
      }>;
    }>;
    totalAssignedScripts: number;
    evictionTelemetry: {
      totalEvictions:     number;
      lastEvictionAt:     number | null;
      lastEvictionReason: string | null;
      /**
       * v1.0.0-rc.3+ — sweep-tick decisions to skip eviction because the
       * candidate worker hosts at least one script with active
       * registrations. Surfaced in the "Evictions" diagnostics row when
       * non-zero.
       */
      totalEvictionsSkippedByPin: number;
    };
    settings: {
      idleTimeoutMs:      number;
      memoryCeilingBytes: number;
    };
  };
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
  /**
   * Lumiverse host versions probed at the call site via `spindle.version.*`
   * (free tier — no permission, added in host bf974cfb / lumiverse-spindle-
   * types 0.4.74-era). `undefined` when the caller chose to skip the
   * probe (older hosts that predate this surface — the call would throw
   * — or unit tests). When present, Section A promotes the "Minimum
   * Lumiverse host version" row from info to pass/warn (comparing
   * `backend >= minimum`) and adds two new explicit "Lumiverse backend
   * version" + "Lumiverse frontend version" info rows.
   */
  lumiverseVersions?: {
    backend:  string;
    frontend: string;
  };
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
  /**
   * Assistant subsystem snapshot. `undefined` if the caller chose to
   * skip the assistant section (e.g. tests that don't exercise it).
   * When present, drives the "Assistant (Lisa)" section's checks.
   */
  assistantProbe?:     AssistantProbeResult;
  /**
   * #11 observability — aggregated QuickJS-engine telemetry from the script-runner children
   * (`queryRunnerStats().engine`). `undefined` when the caller skipped the probe OR no worker
   * reported engine stats (older/hung child); the "Engine (QuickJS-WASM)" section then renders a
   * single "Not probed" info row. Counters read 0 + the pool snapshot reads 'shared'/empty until
   * quickjs is actually selected in the field (the engine is default-off, flag-gated).
   */
  engineProbe?:        EngineTelemetry;
  /**
   * The active script engine (LumiScriptSettings.engineMode, default 'asyncfn'). Selects which single
   * engine section is emitted — "Engine (AsyncFunction)" or "Engine (QuickJS-WASM)" — so the panel always
   * shows the engine actually in use. Absent → treated as 'asyncfn' (the default engine).
   */
  engineMode?:         'asyncfn' | 'quickjs';
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
    // Only the ACTIVE engine's section renders (they share the slot + id — mutually exclusive).
    (deps.engineMode === 'quickjs' ? buildEngineSection(deps) : buildAsyncFnSection(deps)),
    buildActiveContextSection(deps),
    buildRegistrationsSection(deps),
    buildStorageSection(deps),
    buildAssistantSection(deps),
  ];
  return {
    generatedAt: Date.now(),
    summary:     summarize(sections),
    sections,
  };
}

// ─── Section A — LumiScript ─────────────────────────────────────────────────

/**
 * Loose semver compare — `version >= minimum`. Parses dotted
 * MAJOR.MINOR.PATCH segments numerically; ignores any pre-release /
 * build suffixes (`-rc.1`, `+sha`, etc.) since Lumiverse host versions
 * today are plain MAJOR.MINOR.PATCH. NaN segments coerce to 0. Mirrors
 * the comparator pattern documented in Spindle's `version.md`.
 */
function gteSemver(version: string, minimum: string): boolean {
  const a = version.split('.').map((s) => parseInt(s, 10));
  const b = minimum.split('.').map((s) => parseInt(s, 10));
  for (let i = 0; i < 3; i++) {
    const av = Number.isFinite(a[i]) ? (a[i] as number) : 0;
    const bv = Number.isFinite(b[i]) ? (b[i] as number) : 0;
    if (av > bv) return true;
    if (av < bv) return false;
  }
  return true;
}

function buildLumiScriptSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  const checks: DiagnosticCheck[] = [
    {
      label:   'Version',
      status:  'info',
      message: deps.lumiScriptVersion,
    },
  ];

  if (deps.lumiverseVersions !== undefined) {
    // Promoted variant: now that we have the actual running backend
    // version, compare it against the declared requirement and emit
    // pass / warn. Bumps from the original info-only row that
    // surfaced only the requirement.
    const meets = gteSemver(deps.lumiverseVersions.backend, deps.minLumiverseVersion);
    checks.push({
      label:   'Minimum Lumiverse host version',
      status:  meets ? 'pass' : 'warn',
      // Drop the actual backend version from the message — the
      // "Lumiverse backend version" row immediately below covers it
      // explicitly, so repeating it here would duplicate in the
      // visual UI AND the Markdown export. The pass/warn status
      // badge is the actionable signal; the "may misbehave"
      // qualifier on the warn branch keeps the warn state
      // self-describing.
      message: meets
        ? `Requires ${deps.minLumiverseVersion}`
        : `Requires ${deps.minLumiverseVersion} — extension may misbehave`,
      details: {
        required: deps.minLumiverseVersion,
        backend:  deps.lumiverseVersions.backend,
        frontend: deps.lumiverseVersions.frontend,
      },
    });
    checks.push({
      label:   'Lumiverse backend version',
      status:  'info',
      message: deps.lumiverseVersions.backend,
    });
    checks.push({
      label:   'Lumiverse frontend version',
      status:  'info',
      message: deps.lumiverseVersions.frontend,
    });
  } else {
    // Fallback: caller didn't probe `spindle.version.*` (older host
    // pre-bf974cfb that lacks the API, probe failed, or unit test
    // that doesn't exercise version reporting). Keep the original
    // info-only row + skip the explicit backend/frontend rows.
    checks.push({
      label:   'Minimum Lumiverse host version',
      status:  'info',
      message: `Requires ${deps.minLumiverseVersion}`,
    });
  }

  checks.push({
    label:   'Granted permissions',
    status:  deps.grantedPermissions.length > 0 ? 'pass' : 'warn',
    message: deps.grantedPermissions.length > 0
      // Name the permissions inline (not just a count): the compact form fed to
      // the Lisa `read_diagnostics` tool drops `details`, and "which permission
      // is missing" is a top cause of "why does api.* silently fail". Enriches
      // the markdown export for free; stays well under the tool-result cap.
      ? `${deps.grantedPermissions.length} permission(s) granted: ${[...deps.grantedPermissions].sort().join(', ')}`
      : 'No permissions granted — extension features will be degraded',
    details: { granted: [...deps.grantedPermissions].sort() },
  });

  return {
    id:   'lumiscript',
    name: 'LumiScript',
    checks,
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
  //
  // The legacy "one subprocess with one processId" framing predates
  // the v1.0 multi-worker pool; with Phase F, the per-worker IDs live
  // in the Workers table further down. Reporting a single processId
  // here read as "there's one subprocess" when in fact there are N.
  // Drop processId from the message and surface a pool-aware "X
  // worker(s) alive" instead. The "Subprocess alive" label itself is
  // preserved per the Markdown-export format-stability commitment
  // (don't rename existing check labels).
  const aliveWorkerCount = probe.pool?.workers.length ?? (probe.childAlive ? 1 : 0);
  checks.push({
    label:   'Subprocess alive',
    status:  probe.childAlive ? 'pass' : 'fail',
    message: probe.childAlive
      ? aliveWorkerCount === 1
        ? 'Running — 1 worker alive (see the Workers check below for per-worker details)'
        : `Running — ${aliveWorkerCount} workers alive (see the Workers check below for per-worker details)`
      : 'Not running — no workers alive (post-crash or pre-spawn state)',
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

  // ── Worker pool (Phase F — v1.0 runtime-isolation) ─────────────────────
  // Optional `pool` field. Older callers (or unit tests with minimal probes)
  // omit it; the section then matches its pre-v1.0 shape exactly.
  if (probe.pool !== undefined) {
    const p = probe.pool;

    // Pool config recap. `info` status — these are knobs, not health signals.
    checks.push({
      label:   'Worker pool config',
      status:  'info',
      message:
        `${p.configuredWorkerCount} configured` +
        `, ${p.workers.length} spawned` +
        `, idle timeout ${Math.round(p.settings.idleTimeoutMs / 60_000)} min` +
        `, memory ceiling ${Math.round(p.settings.memoryCeilingBytes / 1024 / 1024)} MB`,
      details: {
        configuredWorkerCount: p.configuredWorkerCount,
        spawnedWorkerCount:    p.workers.length,
        idleTimeoutMs:         p.settings.idleTimeoutMs,
        memoryCeilingBytes:    p.settings.memoryCeilingBytes,
      },
    });

    // Per-worker rows. Surfaced two ways:
    //   - `message`: bullet-separated single-line summary, used by the
    //     Markdown export (Discord-friendly compact paste) and as the
    //     fallback for any renderer that doesn't consume `table`. Pre-fix
    //     this was `\n`-joined which the FE modal's <div> rendering
    //     collapsed to spaces — the rows ran together as a single line.
    //   - `table`: structured per-worker rows, rendered as an HTML table
    //     in the FE modal. Scales to 16 workers (the host's
    //     `MAX_BACKEND_PROCESSES` cap) without becoming illegible.
    // `details` continues to carry the raw per-worker objects for
    // programmatic consumers (parsing support reports etc.).
    if (p.workers.length > 0) {
      const now = Date.now();
      // Pre-resolve script names per worker so the Scripts-column
      // tooltip + the follow-up "Script assignments by worker" row
      // use the same resolved values. Falls back to scriptId when
      // name lookup fails (rare — script deleted between assignment
      // and diagnostic snapshot).
      const scriptNamesByWorker = p.workers.map((w) =>
        w.assignedScripts.map((id) => deps.scriptStorage.getScript(id)?.name ?? id),
      );
      const summarised = p.workers.map((w, idx) => {
        const idleSec = Math.max(0, Math.round((now - w.lastActivityMs) / 1_000));
        const rssMb   = w.rss !== null ? `${Math.round(w.rss / 1024 / 1024)} MB` : '? MB';
        return {
          workerKey:   w.workerKey,
          pidShort:    w.processId.slice(0, 8),
          idle:        formatIdle(idleSec),
          scripts:     String(w.assignedScriptCount),
          memory:      rssMb,
          restarts:    String(w.restartAttempts),
          scriptNames: scriptNamesByWorker[idx]!,
        };
      });
      const messageLines = summarised.map((s) =>
        `${s.workerKey}: pid ${s.pidShort}, idle ${s.idle}, ${s.scripts} script(s), ${s.memory}` +
        (s.restarts !== '0' ? `, restart-attempts ${s.restarts}` : ''),
      );
      // Per-row tooltip overlay. Headers are
      // ['Worker', 'PID', 'Idle', 'Scripts', 'Memory', 'Restarts'];
      // only the Scripts column (index 3) carries a tooltip — the
      // comma-separated list of resolved script names assigned to
      // that worker. `null` in the other slots tells the modal "no
      // tooltip here". The breakdown is ALSO surfaced in the
      // follow-up "Script assignments by worker" row below so it
      // lands in the Markdown export (`cellTooltips` is FE-only).
      const cellTooltips: Array<Array<string | null>> = summarised.map((s) => [
        null,
        null,
        null,
        s.scriptNames.length > 0 ? s.scriptNames.join(', ') : null,
        null,
        null,
      ]);
      checks.push({
        label:   'Workers',
        status:  'info',
        message: messageLines.join(' · '),
        table: {
          headers: ['Worker', 'PID', 'Idle', 'Scripts', 'Memory', 'Restarts'],
          rows:    summarised.map((s) => [
            s.workerKey, s.pidShort, s.idle, s.scripts, s.memory, s.restarts,
          ]),
          cellTooltips,
        },
        details: { workers: p.workers },
      });

      // Per-worker script-name breakdown. Visible in the modal as its
      // own row AND in the Markdown export (which ignores the
      // `cellTooltips` overlay above, so without this row anyone
      // pasting the report into a Discord support thread wouldn't
      // see which scripts are on which worker).
      const assignmentLines = summarised.map((s) =>
        `${s.workerKey}: ${s.scriptNames.length > 0 ? s.scriptNames.join(', ') : '(none)'}`,
      );
      checks.push({
        label:   'Script assignments by worker',
        status:  'info',
        message: assignmentLines.join(' · '),
        details: {
          assignmentsByWorker: Object.fromEntries(
            summarised.map((s) => [s.workerKey, s.scriptNames]),
          ),
        },
      });
    }

    // Total assignments — separate row so it shows even at 0 spawned.
    checks.push({
      label:   'Total script assignments',
      status:  'info',
      message: `${p.totalAssignedScripts} script(s) assigned across the pool`,
      details: { totalAssignedScripts: p.totalAssignedScripts },
    });

    // v1.0.0-rc.3+ — registration-pinning breakdown. Surfaces ONLY when
    // at least one worker has at least one pinning script; the row is
    // omitted entirely for users with no tool/macro/panel-style scripts
    // so the panel stays uncluttered. Each row lists worker → script →
    // per-registry counts breakdown. Status is `info` — pinning is the
    // desired behaviour, not a health concern.
    const pinnedEntries = p.workers.flatMap((w) =>
      w.pinningScripts.map((s) => ({ workerKey: w.workerKey, ...s })),
    );
    if (pinnedEntries.length > 0) {
      const rows = pinnedEntries.map((entry) => {
        const scriptName = deps.scriptStorage.getScript(entry.scriptId)?.name ?? entry.scriptId;
        return [
          entry.workerKey,
          scriptName,
          String(entry.counts.total),
          formatRegistrationBreakdown(entry.counts),
        ];
      });
      const messageLines = pinnedEntries.map((entry) => {
        const scriptName = deps.scriptStorage.getScript(entry.scriptId)?.name ?? entry.scriptId;
        return `${entry.workerKey}/${scriptName}: ${entry.counts.total} registration(s)`;
      });
      checks.push({
        label:   'Eviction-exempt scripts (registrations)',
        status:  'info',
        message: messageLines.join(' · '),
        table: {
          headers: ['Worker', 'Script', 'Total', 'Breakdown'],
          rows,
        },
        details: {
          pinnedByWorker: Object.fromEntries(
            p.workers
              .filter((w) => w.pinnedByRegistrations)
              .map((w) => [w.workerKey, w.pinningScripts]),
          ),
        },
      });
    }

    // Eviction telemetry. `info` at 0; `info` with detail at higher counts —
    // not a health signal per se (eviction is the desired behaviour), so
    // we don't escalate the status.
    //
    // v1.0.0-rc.3+ — `totalEvictionsSkippedByPin` is collected and threaded
    // through `details` for completeness, but NOT surfaced in `message`:
    // the counter is monotonic over sweep ticks × pinned-worker count, so
    // its growth tracks session uptime rather than anything actionable.
    // The dedicated "Eviction-exempt scripts (registrations)" row above
    // conveys the actually-useful state (which scripts pin which workers).
    // A growing "N skipped" number alongside "no evictions" reads like a
    // bug to users who don't know the internals; better to omit it.
    const ev = p.evictionTelemetry;
    checks.push({
      label:   'Evictions (this session)',
      status:  'info',
      message: ev.totalEvictions === 0
        ? 'No evictions since LumiScript loaded'
        : `${ev.totalEvictions} eviction(s)${ev.lastEvictionReason ? ` — last reason: ${ev.lastEvictionReason}` : ''}`,
      details: {
        totalEvictions:             ev.totalEvictions,
        lastEvictionAt:             ev.lastEvictionAt,
        lastEvictionReason:         ev.lastEvictionReason,
        totalEvictionsSkippedByPin: ev.totalEvictionsSkippedByPin,
      },
    });
  }

  return { id: 'scriptRunner', name: 'Script-runner subprocess', checks };
}

/** Format a duration in seconds as a brief human-readable string. */
function formatIdle(seconds: number): string {
  if (seconds < 60)   return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
  return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
}

/**
 * v1.0.0-rc.3+ — comma-joined registration breakdown, e.g.
 * `"tools=2, drawerTabs=1"`. Zero-valued fields are dropped so the
 * resulting string is the minimal informative view. Used by the
 * "Eviction-exempt scripts" table's Breakdown column.
 *
 * Field name → display label mapping is stable across versions per the
 * Markdown export format-commitment.
 */
function formatRegistrationBreakdown(c: {
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
  appMounts:             number;
  advancedModals:        number;
  handlerClosures:       number;
  userBroadcastSubs:     number;
}): string {
  const parts: string[] = [];
  if (c.tools > 0)                  parts.push(`tools=${c.tools}`);
  if (c.macros > 0)                 parts.push(`macros=${c.macros}`);
  if (c.injections > 0)             parts.push(`injections=${c.injections}`);
  if (c.drawerTabs > 0)             parts.push(`drawerTabs=${c.drawerTabs}`);
  if (c.inputBarActions > 0)        parts.push(`inputBarActions=${c.inputBarActions}`);
  if (c.worldInfoInterceptors > 0)  parts.push(`worldInfoInterceptors=${c.worldInfoInterceptors}`);
  if (c.messageProcessors > 0)      parts.push(`messageProcessors=${c.messageProcessors}`);
  if (c.macroInterceptors > 0)      parts.push(`macroInterceptors=${c.macroInterceptors}`);
  if (c.rpcEndpoints > 0)           parts.push(`rpcEndpoints=${c.rpcEndpoints}`);
  if (c.floatWidgets > 0)           parts.push(`floatWidgets=${c.floatWidgets}`);
  if (c.appMounts > 0)              parts.push(`appMounts=${c.appMounts}`);
  if (c.advancedModals > 0)         parts.push(`advancedModals=${c.advancedModals}`);
  if (c.handlerClosures > 0)        parts.push(`handlerClosures=${c.handlerClosures}`);
  if (c.userBroadcastSubs > 0)      parts.push(`userBroadcastSubs=${c.userBroadcastSubs}`);
  return parts.join(', ');
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

// ─── Section B2 — Engine (QuickJS-WASM) ─────────────────────────────────────
//
// #11 observability — field-diagnostics for the flag-gated QuickJS isolate engine. Everything here
// reads 0 / 'shared' / 'not probed' until quickjs is actually selected in the field (the engine is
// default-off), so the section is honest-but-quiet on a stock asyncfn install. `warn` is reserved for
// the genuine trouble signals (cold-start failure, degraded runs, timeouts, in-VM OOM, over-cap
// tolerated); plain counters + the pool snapshot are `info`. Pool rows branch on contextModel so a
// field dev is never misled into reading a bare '0/8' as an exercised pool.

function buildEngineSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  // Not probed — no worker reported engine stats (no child alive, an older child predating the
  // `engine` field, or a caller that skipped the runner probe). Mirror the script-runner section's
  // single info row rather than guessing values.
  if (deps.engineProbe === undefined) {
    return {
      id:   'engine',
      name: 'Engine (QuickJS-WASM)',
      checks: [
        { label: 'Status', status: 'info', message: 'Not probed (no worker reported engine telemetry)' },
      ],
    };
  }

  const e = deps.engineProbe;
  const checks: DiagnosticCheck[] = [];

  // WASM availability — the primary "is the isolate usable on this platform" signal.
  checks.push({
    label:   'WASM availability',
    status:  !e.coldStartProbed ? 'info' : e.coldStartOk ? 'pass' : 'warn',
    message: !e.coldStartProbed
      ? 'Not probed this session — no run has selected the quickjs engine yet (default is AsyncFunction)'
      : e.coldStartOk
        ? `Instantiated in ${e.coldStartMs}ms — isolate engine usable`
        : 'WASM module failed to instantiate — all quickjs runs degrade to the AsyncFunction engine',
    details: { coldStartProbed: e.coldStartProbed, coldStartOk: e.coldStartOk, coldStartMs: e.coldStartMs },
  });

  // Engine mix — the quickjs-vs-asyncfn run split (the rollout's adoption denominator).
  checks.push({
    label:   'Runs by engine',
    status:  'info',
    message: `${e.quickjsRuns} quickjs / ${e.asyncfnRuns} asyncfn body-run(s)`,
    details: { quickjsRuns: e.quickjsRuns, asyncfnRuns: e.asyncfnRuns },
  });

  // Degraded runs — quickjs-requested runs that fell back (a platform / cold-start-failure signal).
  checks.push({
    label:   'Degraded runs',
    status:  e.degradedRuns > 0 ? 'warn' : 'pass',
    message: e.degradedRuns > 0
      ? `${e.degradedRuns} run(s) degraded quickjs→asyncfn (WASM uninstantiable on this platform)`
      : 'None — no quickjs run has fallen back to AsyncFunction',
    details: { degradedRuns: e.degradedRuns },
  });

  // Errors — non-timeout run + fire errors. Info, not warn: a user script legitimately throwing also
  // lands here, so this is a rate to eyeball against the run counts, not a health verdict on its own.
  checks.push({
    label:   'Engine errors',
    status:  'info',
    message: `${e.quickjsRunErrors} run error(s), ${e.quickjsFireErrors} fire error(s) (excludes timeouts + self-invoke rejects)`,
    details: { quickjsRunErrors: e.quickjsRunErrors, quickjsFireErrors: e.quickjsFireErrors },
  });

  // Timeouts — each one forced a whole-child respawn. The load-bearing stability signal.
  checks.push({
    label:   'Timeouts (→ respawn)',
    status:  e.quickjsTimeouts > 0 ? 'warn' : 'pass',
    message: e.quickjsTimeouts > 0
      ? `${e.quickjsTimeouts} quickjs run/fire timeout(s) — each respawned the child`
      : 'None — no quickjs run/fire hit its execution timeout',
    details: { quickjsTimeouts: e.quickjsTimeouts },
  });

  // In-VM OOM — a per-context memory-limit hit. Warn: worth surfacing even once.
  checks.push({
    label:   'In-VM out-of-memory',
    status:  e.inVmOom > 0 ? 'warn' : 'pass',
    message: e.inVmOom > 0
      ? `${e.inVmOom} in-VM OOM error(s) — a script hit the per-context WASM memory ceiling`
      : 'None — no run exhausted its per-context WASM memory budget',
    details: { inVmOom: e.inVmOom },
  });

  // Reentrant rejects — expected user errors (a script invoked its own tool mid-run). Info-only.
  checks.push({
    label:   'Self-invoke rejects',
    status:  'info',
    message: `${e.reentrantRejects} self-\`api.tools.invoke\` fast-reject(s) (an expected user error, not an engine fault)`,
    details: { reentrantRejects: e.reentrantRejects },
  });

  // Streams — generateStream usage. Cancelled = broke early / overflowed / torn down before a normal end.
  checks.push({
    label:   'Streams (generateStream)',
    status:  'info',
    message: `${e.streamsOpened} opened, ${e.streamsCancelled} cancelled early`,
    details: { streamsOpened: e.streamsOpened, streamsCancelled: e.streamsCancelled },
  });

  // Context pool — branch on the model so 'shared' (prod default) never reads as an exercised pool.
  if (e.contextModel === 'shared') {
    checks.push({
      label:   'Context pool',
      status:  'info',
      message: 'n/a (shared context model — the per-script pool is inactive until the rollout flip)',
      details: { contextModel: e.contextModel, poolCap: e.poolCap, perCtxLimitBytes: e.perCtxLimitBytes },
    });
  } else {
    checks.push({
      label:   'Context pool',
      status:  e.overCapTolerated > 0 ? 'warn' : 'info',
      message:
        `${e.liveContexts}/${e.poolCap} live context(s) — ${e.pinnedContexts} pinned, ` +
        `${e.reservedContexts} reserved, ${formatBytes(e.perCtxLimitBytes)}/ctx` +
        (e.overCapTolerated > 0 ? `; ${e.overCapTolerated} over-cap insert(s) tolerated (all pinned)` : ''),
      details: {
        contextModel:     e.contextModel,
        liveContexts:     e.liveContexts,
        poolCap:          e.poolCap,
        pinnedContexts:   e.pinnedContexts,
        reservedContexts: e.reservedContexts,
        perCtxLimitBytes: e.perCtxLimitBytes,
        overCapTolerated: e.overCapTolerated,
      },
    });
    checks.push({
      label:   'Context evictions',
      status:  'info',
      message: e.contextEvictions > 0
        ? `${e.contextEvictions} eviction(s) (idle-TTL + cap); last ${formatSeconds((Date.now() - e.lastEvictionAt) / 1000)} ago`
        : 'None — no per-script context has been reaped',
      details: { contextEvictions: e.contextEvictions, lastEvictionAt: e.lastEvictionAt },
    });
  }

  return {
    id:   'engine',
    name: 'Engine (QuickJS-WASM)',
    checks,
  };
}

// ─── Section B2 (AsyncFunction variant) — Engine (AsyncFunction) ─────────────
//
// Field-diagnostics for the DEFAULT in-process AsyncFunction engine — the counterpart to
// buildEngineSection. Only one engine section renders (collectBackendDiagnostics picks by the active
// engineMode), so a stock install shows this one. Same honesty convention: `warn` is reserved for genuine
// trouble (run timeouts, each of which respawns the child); runs/errors/streams are `info`. It omits the
// WASM / cold-start / in-VM-OOM / context-pool rows, which don't exist for the in-process engine, and reads
// from the run/error/timeout/stream counters shared with the QuickJS section.

function buildAsyncFnSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  if (deps.engineProbe === undefined) {
    return {
      id:   'engine',
      name: 'Engine (AsyncFunction)',
      checks: [
        { label: 'Status', status: 'info', message: 'Not probed (no worker reported engine telemetry)' },
      ],
    };
  }

  const e = deps.engineProbe;
  const checks: DiagnosticCheck[] = [];

  // Sandbox — the AsyncFunction engine's isolation model (the counterpart to the QuickJS "WASM
  // availability" row). No WASM / context pool; isolation is the supervised child + respawn ladder.
  checks.push({
    label:   'Sandbox',
    status:  'pass',
    message: 'In-process `new AsyncFunction` in the supervised child subprocess — no WASM isolate or per-script context pool; isolation is the child heartbeat watchdog + respawn ladder (see Script-runner subprocess)',
  });

  // Runs — asyncfn body-runs (the default engine's throughput). quickjs runs are shown only if any exist
  // (e.g. left from a prior quickjs session before the setting was flipped back).
  checks.push({
    label:   'Runs',
    status:  'info',
    message: `${e.asyncfnRuns} asyncfn body-run(s)` + (e.quickjsRuns > 0 ? ` (+${e.quickjsRuns} quickjs)` : ''),
    details: { asyncfnRuns: e.asyncfnRuns, quickjsRuns: e.quickjsRuns },
  });

  // Run errors — non-timeout throws. Info, not warn: a user script legitimately throwing lands here too,
  // so read it as a rate against the run count, not a health verdict on its own.
  checks.push({
    label:   'Run errors',
    status:  'info',
    message: `${e.asyncfnRunErrors} run error(s) (excludes timeouts; a user script throwing counts here too)`,
    details: { asyncfnRunErrors: e.asyncfnRunErrors },
  });

  // Timeouts — each one SIGKILLed + respawned the child. The load-bearing stability signal.
  checks.push({
    label:   'Timeouts (→ respawn)',
    status:  e.asyncfnTimeouts > 0 ? 'warn' : 'pass',
    message: e.asyncfnTimeouts > 0
      ? `${e.asyncfnTimeouts} asyncfn run timeout(s) — each respawned the child`
      : 'None — no asyncfn run hit its execution timeout',
    details: { asyncfnTimeouts: e.asyncfnTimeouts },
  });

  // Streams — generateStream usage (engine-neutral; the asyncfn engine opens streams too).
  checks.push({
    label:   'Streams (generateStream)',
    status:  'info',
    message: `${e.streamsOpened} opened, ${e.streamsCancelled} cancelled early`,
    details: { streamsOpened: e.streamsOpened, streamsCancelled: e.streamsCancelled },
  });

  return {
    id:   'engine',
    name: 'Engine (AsyncFunction)',
    checks,
  };
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
  let appMounts       = 0;
  let advancedModals  = 0;
  let inputBarActions = 0;
  let messageTagInterceptors = 0;
  for (const s of scripts) {
    floatWidgets    += countLiveWidgetsByScript(s.id);
    appMounts       += countLiveAppMountsByScript(s.id);
    advancedModals  += countLiveModalsByScript(s.id);
    inputBarActions += countInputBarActionsByScript(s.id);
    messageTagInterceptors += countMessageTagInterceptors(s.id);
  }

  const checks: DiagnosticCheck[] = [
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
        label:   'App mounts',
        status:  'info',
        message: `${appMounts} live`,
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
      {
        label:   'Message-tag interceptors',
        status:  'info',
        message: `${messageTagInterceptors} registered`,
      },
  ];

  // v1.0.0-rc.5+ — Active theme overrides row. Surfaces per-script
  // attribution that survives worker eviction (theme state lives
  // parent-side in `theme-store`, decoupled from the script's worker
  // liveness — so a script that applied a theme and went dormant
  // disappears from the worker / assignment views but its theme is
  // still applied). The row only emits when at least one script has
  // an active contribution; users without any theme-applying scripts
  // see the panel unchanged. Worker-status column relies on
  // `scriptRunner.pool` data — gracefully degrades to "unknown" when
  // the caller didn't probe the pool.
  const themeScriptIds = listThemeScriptIds();
  if (themeScriptIds.length > 0) {
    // Build a scriptId → workerKey map from the optional pool snapshot.
    // Scripts not in any worker's assignedScripts have been evicted
    // (or never had a worker assignment), but their theme state
    // persists.
    const assignedWorkerByScript = new Map<string, string>();
    if (deps.scriptRunner?.pool) {
      for (const w of deps.scriptRunner.pool.workers) {
        for (const sid of w.assignedScripts) assignedWorkerByScript.set(sid, w.workerKey);
      }
    }
    const poolProbed = deps.scriptRunner?.pool !== undefined;
    const rows: string[][] = [];
    const detailsByScript: Record<string, unknown> = {};
    for (const scriptId of themeScriptIds) {
      const summary = getThemeContributionSummary(scriptId);
      if (!summary) continue; // shouldn't happen — listScriptIdsInApplyOrder is authoritative
      const scriptName = deps.scriptStorage.getScript(scriptId)?.name ?? scriptId;
      const varsCell =
        summary.totalVariables === 0
          ? '—'
          : `${summary.totalVariables}` +
            (summary.darkVariables > 0 || summary.lightVariables > 0
              ? ` (flat=${summary.flatVariables}, dark=${summary.darkVariables}, light=${summary.lightVariables})`
              : '');
      const paletteCell =
        summary.palette === 'set'     ? 'set' :
        summary.palette === 'cleared' ? 'cleared' :
                                         '—';
      const assignedWorker = assignedWorkerByScript.get(scriptId);
      const workerCell =
        !poolProbed         ? 'unknown' :
        assignedWorker      ? assignedWorker :
                              'evicted';
      rows.push([scriptName, varsCell, paletteCell, workerCell]);
      detailsByScript[scriptId] = { name: scriptName, ...summary, worker: workerCell };
    }
    const messageLines = rows.map((r) =>
      `${r[0]}: ${r[1] === '—' ? '' : `${r[1]} var(s)`}${r[2] !== '—' ? `, palette ${r[2]}` : ''} (${r[3]})`,
    );
    checks.push({
      label:   'Active theme overrides',
      status:  'info',
      message: `${themeScriptIds.length} script(s) contributing — ${messageLines.join(' · ')}`,
      table: {
        headers: ['Script', 'Variables', 'Palette', 'Worker'],
        rows,
      },
      details: { contributorsByScriptId: detailsByScript },
    });
  }

  return {
    id:   'registrations',
    name: 'Registrations',
    checks,
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

// ─── Assistant section (Lisa) ───────────────────────────────────────────────
//
// Surfaces the assistant-subsystem state most likely to inform a support
// report when a user says "Lisa is misbehaving":
//
//   • Initialised — bootstrap lifecycle marker. False is normal until the
//     user opens the modal for the first time this session; surfaced as
//     `info`, not `fail`.
//   • Corpus loaded — the single highest-value check. An empty corpus
//     means `lookup_api` silently returns nothing and Lisa hallucinates;
//     `fail` if zero, `pass` otherwise.
//   • Thread storage — index parseable + per-thread readability. `fail`
//     on index-load failure, `warn` when some-but-not-all threads load,
//     `pass` on full readability. Aggregated byte count goes in the
//     details for capacity-trending support reports.
//   • LLM connections — count + default. `warn` if zero (Lisa can't
//     run), `pass` otherwise. We don't validate the default model
//     against Lisa's needs (that would require a live API call); we
//     just confirm there's something configured.
//   • Generation defaults — info dump of the current overrides. Lets
//     support see at a glance what knobs the user has turned.
//   • Tool iterations ceiling — info, separately surfaced since it's
//     the most commonly-tuned knob and worth scanning quickly.

function buildAssistantSection(deps: DiagnosticsCollectorDeps): DiagnosticSection {
  if (deps.assistantProbe === undefined) {
    return {
      id:   'assistant',
      name: 'Assistant (Lisa)',
      checks: [
        { label: 'Status', status: 'info', message: 'Not probed (caller chose to skip)' },
      ],
    };
  }

  const probe = deps.assistantProbe;
  const checks: DiagnosticCheck[] = [];

  checks.push({
    label:   'Initialised',
    status:  probe.initialised ? 'pass' : 'info',
    message: probe.initialised
      ? 'Bootstrap complete'
      : 'Not yet bootstrapped (will initialise on first assistant IPC)',
  });

  checks.push({
    label:   'Corpus loaded',
    status:  probe.corpusEntries > 0 ? 'pass' : 'fail',
    message: probe.corpusEntries > 0
      ? `${probe.corpusEntries} entries indexed`
      : "No entries found — Lisa's lookup_api tool will return nothing",
    details: { corpusEntries: probe.corpusEntries },
  });

  const s = probe.storage;
  let storageStatus: DiagnosticStatus;
  let storageMessage: string;
  if (!s.indexLoaded) {
    storageStatus  = 'fail';
    storageMessage = s.error ? `Index unreadable: ${s.error}` : 'Index unreadable';
  } else if (s.threadsReadable < s.threadsIndexed) {
    storageStatus = 'warn';
    storageMessage =
      `${s.threadsReadable} of ${s.threadsIndexed} threads readable, ${formatBytes(s.totalBytes)} on disk` +
      (s.error ? ` (${s.error})` : '');
  } else {
    storageStatus  = 'pass';
    storageMessage = `${s.threadsIndexed} thread(s) readable, ${formatBytes(s.totalBytes)} on disk`;
  }
  checks.push({
    label:   'Thread storage',
    status:  storageStatus,
    message: storageMessage,
    details: {
      indexLoaded:     s.indexLoaded,
      threadsIndexed:  s.threadsIndexed,
      threadsReadable: s.threadsReadable,
      totalBytes:      s.totalBytes,
      ...(s.error ? { error: s.error } : {}),
    },
  });

  const c = probe.connections;
  checks.push({
    label:   'LLM connections',
    status:  c.count > 0 ? 'pass' : 'warn',
    message: c.count > 0
      ? `${c.count} connection(s)` +
        (c.defaultName
          ? ` · default: "${c.defaultName}" (${c.defaultModel ?? '<no model>'} via ${c.defaultProvider ?? '<no provider>'})`
          : ' · no default set')
      : 'No LLM connections configured — Lisa cannot generate responses',
    details: {
      count: c.count,
      ...(c.defaultName     ? { defaultName:     c.defaultName     } : {}),
      ...(c.defaultModel    ? { defaultModel:    c.defaultModel    } : {}),
      ...(c.defaultProvider ? { defaultProvider: c.defaultProvider } : {}),
    },
  });

  // Generation defaults — info, dumps current settings values.
  // Renders compactly when nothing is overridden ("No overrides") so the
  // common case is one line; expands to a comma-separated list when the
  // user has tweaked.
  const set = probe.settings;
  const overrides: string[] = [];
  if (set.temperature !== undefined)   overrides.push(`temperature=${set.temperature}`);
  if (set.topP !== undefined)          overrides.push(`top-p=${set.topP}`);
  if (set.maxTokens !== undefined)     overrides.push(`max-tokens=${set.maxTokens}`);
  if (set.parallelToolCalls === false) overrides.push('parallel-tool-calls=off');
  checks.push({
    label:   'Generation defaults',
    status:  'info',
    message: overrides.length > 0
      ? `Overrides: ${overrides.join(', ')}`
      : 'No overrides (all defaults inherited from active connection)',
    details: {
      maxIterations: set.maxIterations,
      ...(set.temperature !== undefined ? { temperature: set.temperature } : {}),
      ...(set.topP !== undefined        ? { topP:        set.topP        } : {}),
      ...(set.maxTokens !== undefined   ? { maxTokens:   set.maxTokens   } : {}),
      parallelToolCalls: set.parallelToolCalls,
    },
  });

  checks.push({
    label:   'Tool iterations ceiling',
    status:  'info',
    message: `${set.maxIterations} per turn`,
  });

  return { id: 'assistant', name: 'Assistant (Lisa)', checks };
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
