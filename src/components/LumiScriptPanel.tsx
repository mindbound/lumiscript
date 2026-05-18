import { FC, useState, useEffect, useCallback } from 'react';
import { Code2, Activity, Zap, ArrowDownToLine, ArrowUpToLine, Timer, ChevronDown, ChevronUp, Wrench, Syringe, Database, Trash2 } from 'lucide-react';
import type { Script, LumiScriptSettings, ConsoleEntry, InjectionInfo, RegisteredToolInfo, DbRecord } from '../types/script.js';
import type { BackendToFrontend, FrontendToBackend, VariablesSnapshot } from '../types/messages.js';
import type { ActiveContext } from './manage/BindingsSection.js';
import type { ExecutionDot } from './manage/ScriptListItem.js';
import type { CollectionSummary, CollectionStats } from '../engine/db-admin.js';
import type { ScriptStorageSummary } from '../engine/api/script-storage.js';
import { DEFAULT_SETTINGS } from '../types/script.js';
import { ManagePanel } from './manage/ManagePanel.js';
import { StorageTab } from './storage/StorageTab.js';

interface ScriptExecInfo {
  dot: ExecutionDot;
  duration?: number;
  error?: string;
  /**
   * True when the most recent error for this script has not yet been
   * acknowledged by the user. While set, the displayed `dot` stays red
   * through subsequent successful runs — this prevents no-op trigger
   * spam (e.g. non-matching SETTINGS_UPDATED fires that early-return
   * cleanly) from silently overwriting a real failure. Cleared when the
   * user opens the editor for this script, at which point `dot` drops
   * to `'idle'` and the next real run determines the displayed state.
   */
  stickyError?: boolean;
}

interface ExecState {
  activeScriptId: string | null;
  runId: string | null;
  isRunning: boolean;
  /** Per-script console history, capped at MAX_CONSOLE_ENTRIES entries each. */
  consoleHistory: Record<string, ConsoleEntry[]>;
  scriptExecInfo: Record<string, ScriptExecInfo>;
}

interface LumiScriptPanelProps {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

type TabId = 'manage' | 'status' | 'storage';

export const LumiScriptPanel: FC<LumiScriptPanelProps> = ({
  onBackendMessage,
  sendToBackend,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('manage');
  const [scripts, setScripts] = useState<Script[]>([]);
  const [settings, setSettings] = useState<LumiScriptSettings>(DEFAULT_SETTINGS);
  const [activeContext, setActiveContext] = useState<ActiveContext>({
    characterId: null,
    characterName: null,
    chatId: null,
  });
  const [execState, setExecState] = useState<ExecState>({
    activeScriptId: null,
    runId: null,
    isRunning: false,
    consoleHistory: {},
    scriptExecInfo: {},
  });
  const [injections, setInjections] = useState<InjectionInfo[]>([]);
  const [tools, setTools] = useState<RegisteredToolInfo[]>([]);

  const [variables, setVariables] = useState<VariablesSnapshot | null>(null);

  /** Storage-tab collection list. `null` before first load; `[]` means
   *  no collections on disk. Populated by `collections_list` messages;
   *  re-requested on Storage-tab activation + on every debounced
   *  `collections_updated` broadcast hint. */
  const [collections, setCollections] = useState<CollectionSummary[] | null>(null);

  /** Path of the collection currently open in the Inspect modal.
   *  `null` when the modal is closed. */
  const [inspectPath, setInspectPath] = useState<string | null>(null);
  /** Records returned from the last `inspect_collection` response for the
   *  currently-open modal. `null` = loading. */
  const [inspectRecords, setInspectRecords] = useState<DbRecord[] | null>(null);
  /** Post-filter, pre-pagination count — drives "page N of M matching". */
  const [inspectTotal, setInspectTotal] = useState<number>(0);
  /** Backend-side error for the open inspect modal — currently only
   *  jsonquery-mode errors (parse / runtime / non-array result) surface
   *  here. The modal renders this inline below the filter input so users
   *  can fix their query without losing context. `null` for normal
   *  (non-erroring) responses; cleared as soon as the next clean
   *  response arrives. */
  const [inspectError, setInspectError] = useState<string | null>(null);
  /** Bumps on every `collections_updated` hint so an open inspect modal
   *  can re-fetch its records (the modal owns its own filter/offset, so
   *  Panel can't dispatch the fetch directly — a token dep does it). */
  const [collectionsRefreshToken, setCollectionsRefreshToken] = useState(0);
  /**
   * Per-field aggregate stats for the open inspect modal's "Stats" tab.
   * `null` while loading or when the user hasn't switched to the Stats
   * tab yet — InspectModal lazily dispatches `analyze_collection` only
   * when the tab becomes active, so we don't pay the full-load cost
   * unless the user actually wants stats.
   *
   * Refresh: re-dispatches whenever `collectionsRefreshToken` bumps,
   * same as records. Only the open inspect modal's path is fetched —
   * if the modal is closed the stats request never fires.
   */
  const [inspectStats, setInspectStats] = useState<CollectionStats | null>(null);

  /** Collection the user is about to drop. `null` = confirmation dialog
   *  is closed. Holding the full summary (not just the path) lets the
   *  dialog show scope, size, and the resolved display name without
   *  re-looking-up from the collections list. */
  const [dropTarget, setDropTarget] = useState<CollectionSummary | null>(null);
  /**
   * Record count for the open drop-confirm dialog's target. `null` =
   * count not yet returned (dialog shows a small loading indicator
   * instead of a number). Updated from `collection_count` messages
   * dispatched against the dropTarget's path; reset to null whenever
   * dropTarget changes so a new dialog opens fresh rather than
   * showing the stale count from the previous one. */
  const [dropTargetCount, setDropTargetCount] = useState<number | null>(null);

  // ── Storage tab: Script Storage section (v1.0.0-rc.6+) ──────────────────
  /** Per-script scriptStorage summaries. `null` before first load; `[]`
   *  means no scripts have stored entries. Populated by
   *  `script_storage_list` messages; re-requested on Storage-tab
   *  activation + on every debounced `script_storage_updated` hint. */
  const [scriptStorageEntries, setScriptStorageEntries] = useState<ScriptStorageSummary[] | null>(null);
  /** scriptId currently open in the scriptStorage inspect modal.
   *  `null` when the modal is closed. */
  const [inspectScriptStorageId, setInspectScriptStorageId] = useState<string | null>(null);
  /** Entries for the open scriptStorage inspect modal; `null` = loading. */
  const [inspectScriptStorageEntries, setInspectScriptStorageEntries] = useState<Array<{ key: string; value: unknown }> | null>(null);
  /** Bumps on every `script_storage_updated` hint so an open inspect
   *  modal re-fetches and the section list re-renders. Mirrors the
   *  collections refresh-token pattern. */
  const [scriptStorageRefreshToken, setScriptStorageRefreshToken] = useState(0);

  /** Per-trigger invocation counter (session-local, increments on execution_started) */
  const [invocationCounts, setInvocationCounts] = useState<Record<string, number>>({});

  // Register a single backend message handler at the top level
  useEffect(() => {
    const unsub = onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;

      switch (msg.type) {
        case 'scripts_updated':
          // eslint-disable-next-line no-console
          console.log(`[LumiScript] scripts_updated: ${msg.scripts.length} script(s)`);
          setScripts(msg.scripts);
          break;

        case 'script_patched': {
          // eslint-disable-next-line no-console
          console.log(`[LumiScript] script_patched: id=${msg.script.id}, codeLen=${msg.script.code?.length ?? -1}`);
          setScripts(prev => prev.map(s => s.id === msg.script.id ? msg.script : s));
          break;
        }

        case 'settings_updated':
          setSettings(msg.settings);
          break;

        case 'active_context':
          setActiveContext({
            characterId: msg.characterId,
            characterName: msg.characterName,
            chatId: msg.chatId,
          });
          // Auto-refresh variables when context changes
          sendToBackend({ type: 'get_variables' });
          break;

        case 'variables_updated':
          setVariables(msg.variables);
          break;

        case 'collections_list':
          setCollections(msg.collections);
          break;

        case 'collection_records':
          // Ignore stale responses — if the user closed the modal or
          // switched to a different collection between request and
          // response, drop this payload. Compare against the current
          // inspectPath via a functional setter to avoid a stale-closure
          // read (this handler is registered in a single useEffect).
          setInspectRecords(prev => {
            // Defer: the panel-level `inspectPath` state check happens
            // in the effect that dispatches the request; here we just
            // accept any arriving payload. The filter/offset effect
            // below re-dispatches when state changes, so last-write-wins
            // naturally matches the current state.
            void prev;
            return msg.records;
          });
          setInspectTotal(msg.total);
          // Error is set when present, cleared otherwise — so the next
          // successful response after a jsonquery error wipes the banner.
          setInspectError(msg.error ?? null);
          break;

        case 'collection_stats':
          // Stats result for the open InspectModal's Stats tab. Like
          // collection_records, accept any arriving payload — the
          // modal's effect that dispatched the request is gated on its
          // current path + tab state, so a stale message would only
          // arrive in a tight race window. Functional setter is here
          // purely for symmetry with the records handler.
          setInspectStats(prev => {
            void prev;
            return msg.stats;
          });
          break;

        case 'collection_count':
          // Drop-confirmation dialog requested a count. Functional
          // setter reads the current dropTarget via prev — we keep
          // late-arrival responses harmless: if the user closed the
          // dialog or moved to a different collection between request
          // and response, just discard the stale payload.
          setDropTargetCount(prev => {
            void prev;
            // Always accept — the parent effect that dispatched this
            // request was guarded by dropTarget?.path matching msg.path
            // at dispatch time. Race window between dispatch and
            // response is acceptable; worst case the user sees a
            // briefly-mismatched count for ~50ms before clicking
            // anything.
            return msg.count;
          });
          break;

        case 'collections_updated':
          // Debounced hint from the backend (any `ls:collection:*` event
          // caused a mutation). Always re-request the full list — even
          // when the Storage tab isn't the active tab — so switching to
          // it later shows fresh state without a perceptible load.
          sendToBackend({ type: 'list_collections' });
          // Bump the refresh token so an open inspect modal re-fetches
          // with its current filter/offset.
          setCollectionsRefreshToken(t => t + 1);
          break;

        // ── Storage tab: Script Storage section (v1.0.0-rc.6+) ─────────
        case 'script_storage_list':
          setScriptStorageEntries(msg.entries);
          break;

        case 'script_storage_entries':
          // Echoed scriptId carries the inspect target. Functional setter
          // accepts any arriving payload (the modal's effect that
          // dispatched the request was gated on its current scriptId).
          setInspectScriptStorageEntries(prev => {
            void prev;
            return msg.entries;
          });
          break;

        case 'script_storage_updated':
          // Debounced hint from any `ls:scriptStorage:*` broadcast. Same
          // shape as the collections refresh: re-list always (covers the
          // tab-not-active case for free), bump the token so an open
          // modal re-fetches.
          sendToBackend({ type: 'list_script_storage' });
          setScriptStorageRefreshToken(t => t + 1);
          break;

        case 'injections_updated':
          setInjections(msg.injections);
          break;

        case 'tools_updated':
          setTools(msg.tools);
          break;

        case 'execution_started': {
          // Add a run-separator divider to the script's history when it already
          // has prior output, so multiple runs are visually distinguished.
          const sepEntry: ConsoleEntry = {
            timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
            type: 'separator',
            message: '',
          };
          setExecState(prev => {
            const existing = prev.consoleHistory[msg.scriptId] ?? [];
            const updated = existing.length > 0 ? [...existing, sepEntry] : existing;
            return {
              ...prev,
              activeScriptId: msg.scriptId,
              runId: msg.runId,
              isRunning: true,
              consoleHistory: { ...prev.consoleHistory, [msg.scriptId]: updated },
              scriptExecInfo: {
                ...prev.scriptExecInfo,
                [msg.scriptId]: {
                  // Preserve stickyError + error across the running state so
                  // a fresh run that succeeds can restore the sticky red dot
                  // in the execution_ended handler below.
                  ...prev.scriptExecInfo[msg.scriptId],
                  dot: 'running',
                },
              },
            };
          });
          // Count invocations for trigger scripts
          setInvocationCounts(prev => ({
            ...prev,
            [msg.scriptId]: (prev[msg.scriptId] ?? 0) + 1,
          }));
          break;
        }

        case 'console_entry': {
          const MAX_CONSOLE_ENTRIES = settings.consoleHistoryLimit;
          setExecState(prev => {
            const existing = prev.consoleHistory[msg.scriptId] ?? [];
            if (existing.length >= MAX_CONSOLE_ENTRIES) return prev; // per-script cap — drop silently
            // When the last available slot is reached, show a truncation notice
            // instead of the real entry so the user knows output has stopped.
            const isLastSlot = existing.length === MAX_CONSOLE_ENTRIES - 1;
            const entry = isLastSlot
              ? {
                  timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
                  type: 'warn' as const,
                  message: `[Console output truncated at ${MAX_CONSOLE_ENTRIES} entries. Clear the console to resume capture.]`,
                }
              : msg.entry;
            return {
              ...prev,
              consoleHistory: {
                ...prev.consoleHistory,
                [msg.scriptId]: [...existing, entry],
              },
            };
          });
          break;
        }

        case 'execution_ended':
          setExecState(prev => {
            const existing = prev.consoleHistory[msg.scriptId] ?? [];
            const existingInfo = prev.scriptExecInfo[msg.scriptId];
            const errorEntry = !msg.success && msg.error
              ? [{
                  timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
                  type: 'error' as const,
                  message: msg.error,
                }]
              : [];
            // Sticky-error semantics: once a run fails, keep the dot red
            // through subsequent successes until the user opens the editor
            // (which acknowledges and clears the sticky flag). Preserves
            // the prior error message across success runs so the Console
            // tab can still surface it when the user eventually looks.
            const stickyError = !msg.success
              ? true
              : existingInfo?.stickyError ?? false;
            // v1.0 — `idleAfter: true` overrides the success/error inference
            // and resets to 'idle' (grey). Used by the synthetic
            // `execution_ended` the backend sends when a script is
            // disabled mid-flight: the script didn't really succeed or
            // fail, it was forcibly stopped. 'idle' communicates that
            // more truthfully than green-success or red-error. Only the
            // dot is overridden — sticky-error semantics still apply for
            // the next REAL run-end (so a prior failure stays sticky
            // through the disable cleanup).
            const displayDot: ExecutionDot = msg.idleAfter
              ? 'idle'
              : !msg.success || stickyError
                ? 'error'
                : 'success';
            // Preserve a meaningful prior duration across trailing no-op
            // batches. The trigger-registry aggregator already reports the
            // correct max duration for any single burst of concurrent fires,
            // but consecutive *separate* batches still each dispatch their
            // own execution_ended — so a later solo SETTINGS_UPDATED that
            // the script guard-returns in <1 ms would otherwise clobber the
            // real duration from a prior meaningful batch. We only carry
            // duration forward when the incoming run succeeds with a
            // rounded-to-zero duration AND we have a non-zero historical
            // value; any meaningful duration or failure dispatches through
            // normally.
            const incomingDuration = msg.duration ?? 0;
            const preserveDuration =
              msg.success && incomingDuration === 0 && (existingInfo?.duration ?? 0) > 0;
            const duration = preserveDuration ? existingInfo!.duration : msg.duration;
            return {
              ...prev,
              isRunning: false,
              consoleHistory: errorEntry.length
                ? { ...prev.consoleHistory, [msg.scriptId]: [...existing, ...errorEntry] }
                : prev.consoleHistory,
              scriptExecInfo: {
                ...prev.scriptExecInfo,
                [msg.scriptId]: {
                  dot: displayDot,
                  duration,
                  error: msg.error ?? existingInfo?.error,
                  stickyError,
                },
              },
            };
          });
          break;

        case 'error':
          console.warn('[LumiScript]', msg.message);
          break;
      }
    });

    // Request initial data
    sendToBackend({ type: 'get_scripts' });
    sendToBackend({ type: 'get_settings' });
    sendToBackend({ type: 'get_active_context' });
    sendToBackend({ type: 'get_injections' });
    sendToBackend({ type: 'get_tools' });

    return unsub;
  }, [onBackendMessage, sendToBackend]);

  // Auto-refresh the Collections list when the Storage tab becomes active.
  // Live updates between activations are driven by `collections_updated`
  // broadcast hints (handled above). A fresh request on activation covers
  // the cold-start case (first time the user opens the tab this session).
  useEffect(() => {
    if (activeTab === 'storage') {
      sendToBackend({ type: 'list_collections' });
      sendToBackend({ type: 'list_script_storage' });
    }
  }, [activeTab, sendToBackend]);

  // Drop confirmation dialog needs a record count for the target. On
  // every dropTarget change, reset the cached count to null (so the
  // dialog shows a brief "Loading…" instead of last dialog's stale
  // number) and dispatch a fresh `count_collection` request. The
  // backend reply lands in the `collection_count` handler above.
  useEffect(() => {
    setDropTargetCount(null);
    if (dropTarget) {
      sendToBackend({ type: 'count_collection', path: dropTarget.path });
    }
  }, [dropTarget, sendToBackend]);

  const clearConsole = useCallback((scriptId: string) => {
    setExecState(prev => ({
      ...prev,
      consoleHistory: { ...prev.consoleHistory, [scriptId]: [] },
    }));
  }, []);

  /**
   * Clear the sticky-error flag for a script once the user opens its editor.
   * Dropping the dot to `'idle'` signals that the user has seen the error;
   * the next real run will repaint the dot according to its actual result.
   * No-op if the script has no sticky error.
   */
  const handleScriptOpened = useCallback((scriptId: string) => {
    setExecState(prev => {
      const existing = prev.scriptExecInfo[scriptId];
      if (!existing?.stickyError) return prev;
      return {
        ...prev,
        scriptExecInfo: {
          ...prev.scriptExecInfo,
          [scriptId]: {
            ...existing,
            dot: 'idle',
            stickyError: false,
          },
        },
      };
    });
  }, []);

  return (
    <div className="ls-panel">
      {/* Tab pills */}
      <div className="ls-tabs">
        <button
          className={`ls-tab-pill${activeTab === 'manage' ? ' ls-active' : ''}`}
          onClick={() => setActiveTab('manage')}
        >
          <Code2 size={11} style={{ display: 'inline', marginRight: 4 }} />
          Manage
        </button>
        <button
          className={`ls-tab-pill${activeTab === 'status' ? ' ls-active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          <Activity size={11} style={{ display: 'inline', marginRight: 4 }} />
          Status
        </button>
        <button
          className={`ls-tab-pill${activeTab === 'storage' ? ' ls-active' : ''}`}
          onClick={() => setActiveTab('storage')}
        >
          <Database size={11} style={{ display: 'inline', marginRight: 4 }} />
          Storage
        </button>
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'manage' && (
          <ManagePanel
            scripts={scripts}
            activeContext={activeContext}
            execInfo={execState.scriptExecInfo}
            activeRunScriptId={execState.activeScriptId}
            isRunning={execState.isRunning}
            consoleHistory={execState.consoleHistory}
            editorFontSize={settings.editorFontSize}
            autosaveDebounceMs={settings.autosaveDebounceMs}
            onClearConsole={clearConsole}
            onScriptOpened={handleScriptOpened}
            sendToBackend={sendToBackend}
          />
        )}
        {activeTab === 'status' && (
          <StatusTab
            scripts={scripts}
            execInfo={execState.scriptExecInfo}
            invocationCounts={invocationCounts}
            injections={injections}
            tools={tools}
            sendToBackend={sendToBackend}
          />
        )}
        {activeTab === 'storage' && (
          <StorageTab
            variables={variables}
            collections={collections}
            scripts={scripts}
            sendToBackend={sendToBackend}
            inspectPath={inspectPath}
            inspectRecords={inspectRecords}
            inspectTotal={inspectTotal}
            inspectError={inspectError}
            inspectStats={inspectStats}
            inspectRefreshToken={collectionsRefreshToken}
            onInspect={(path) => {
              // Clear the old records immediately so the modal shows a
              // "loading…" state while the new request is in flight — and
              // so stale data never flashes if the user opens modal → close
              // → reopen on a different collection. Also clear stats so a
              // re-opened modal on a different path doesn't briefly render
              // the previous collection's aggregate.
              setInspectPath(path);
              setInspectRecords(null);
              setInspectTotal(0);
              setInspectStats(null);
            }}
            dropTarget={dropTarget}
            dropTargetCount={dropTargetCount}
            onDrop={setDropTarget}
            onDropConfirm={() => {
              if (!dropTarget) return;
              const path = dropTarget.path;
              // If the user is inspecting the collection they just confirmed
              // to drop, close the inspect modal alongside the dialog — it'd
              // otherwise show stale records for a collection that no longer
              // exists (until the next collections_updated round-trip).
              if (inspectPath === path) {
                setInspectPath(null);
                setInspectRecords(null);
                setInspectTotal(0);
                setInspectStats(null);
              }
              sendToBackend({ type: 'drop_collection', path });
              setDropTarget(null);
            }}
            scriptStorageEntries={scriptStorageEntries}
            inspectScriptStorageId={inspectScriptStorageId}
            inspectScriptStorageEntries={inspectScriptStorageEntries}
            scriptStorageRefreshToken={scriptStorageRefreshToken}
            onInspectScriptStorage={(id) => {
              // Same loading-state-clear pattern as collections.
              setInspectScriptStorageId(id);
              setInspectScriptStorageEntries(null);
            }}
            onClearScriptStorage={(summary) => {
              // Fire-and-forget admin clear. No confirmation dialog
              // for v1.0 — scriptStorage is session-scoped (volatile)
              // and the broadcast-driven live refresh makes the
              // result immediately visible. Polish: inline confirm
              // pill in v1.x if real footguns surface.
              sendToBackend({ type: 'clear_script_storage', scriptId: summary.scriptId });
              // If the user has the inspect modal open on the script
              // they just cleared, close it — same rationale as the
              // drop-confirm path closing the records modal.
              if (inspectScriptStorageId === summary.scriptId) {
                setInspectScriptStorageId(null);
                setInspectScriptStorageEntries(null);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

// ─── Status tab ───────────────────────────────────────────────────────────────

const DOT_TITLE: Record<ExecutionDot, string> = {
  idle:    'Not yet run this session',
  running: 'Running…',
  success: 'Last run succeeded',
  error:   'Last run failed',
};

interface StatusTabProps {
  scripts: Script[];
  execInfo: Record<string, ScriptExecInfo>;
  invocationCounts: Record<string, number>;
  injections: InjectionInfo[];
  tools: RegisteredToolInfo[];
  sendToBackend: (msg: FrontendToBackend) => void;
}

const StatusTab: FC<StatusTabProps> = ({ scripts, execInfo, invocationCounts, injections, tools, sendToBackend }) => {
  const enabled = scripts.filter(s => s.type === 'trigger' && s.enabled);

  /** Quick lookup: scriptId → script name for injection attribution. */
  const scriptNameById = Object.fromEntries(scripts.map(s => [s.id, s.name]));

  /** Set of injection IDs whose content is currently expanded. */
  const [expandedInjections, setExpandedInjections] = useState<Set<string>>(new Set());

  const toggleInjection = (id: string) => {
    setExpandedInjections(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="ls-status-list">
      {/* ── Scripts section ─────────────────────────────────────────────────── */}
      <div className="ls-status-section">
        <div className="ls-inject-header">
          <Code2 size={10} />
          Scripts
          {enabled.length > 0 && <span className="ls-inject-count">{enabled.length}</span>}
        </div>
        <div className="ls-status-section-body">
          {enabled.length === 0 ? (
            <div className="ls-section-empty">No enabled trigger scripts</div>
          ) : enabled.map(script => {
        const info = execInfo[script.id];
        const dot = info?.dot ?? 'idle';
        const dotClass = {
          idle:    'ls-item-dot',
          running: 'ls-item-dot ls-dot-running',
          success: 'ls-item-dot ls-dot-success',
          error:   'ls-item-dot ls-dot-error',
        }[dot];

        // Event subscriptions come directly from the script's declared triggers
        const events = script.triggers ?? [];
        const invokeCount = invocationCounts[script.id];

        return (
          <div key={script.id} className="ls-status-row">
            {/* Row 1: dot + name + invocation count + duration */}
            <div className="ls-status-row-main">
              <span className={dotClass} title={DOT_TITLE[dot]} />
              <span className="ls-status-name">{script.name}</span>
              <span className="ls-status-right">
                {invokeCount !== undefined && invokeCount > 0 && (
                  <span className="ls-invoke-count" title={`Fired ${invokeCount} time${invokeCount !== 1 ? 's' : ''} this session`}>
                    ×{invokeCount}
                  </span>
                )}
                {info?.duration !== undefined && dot !== 'running' && (
                  <span
                    className="ls-status-duration"
                    style={{ color: dot === 'error' ? '#ef4444' : undefined }}
                  >
                    {info.duration}ms
                  </span>
                )}
              </span>
            </div>

            {/* Row 2: declared event badges or "no events" note */}
            {events.length > 0 ? (
              <div className="ls-status-events">
                {events.map(ev => (
                  <span key={ev} className="ls-event-badge">
                    <Zap size={9} />
                    {ev}
                  </span>
                ))}
              </div>
            ) : (
              <div className="ls-no-handlers">
                no events selected — choose events in the editor
              </div>
            )}

            {/* Row 3: error message (only on failure) */}
            {dot === 'error' && info?.error && (
              <div className="ls-status-error-row">
                <span className="ls-status-error-text">{info.error}</span>
              </div>
            )}
          </div>
        );
      })}
        </div>
      </div>

      {/* ── Active Tools section ────────────────────────────────────────────── */}
      <div className="ls-status-section">
        <div className="ls-inject-header">
          <Wrench size={10} />
          Active Tools
          {tools.length > 0 && <span className="ls-inject-count">{tools.length}</span>}
        </div>
        <div className="ls-status-section-body">
          {tools.length === 0 ? (
            <div className="ls-section-empty">No tools registered</div>
          ) : (
            tools.map(tool => (
              <div key={tool.name} className="ls-tool-row">
                <div className="ls-tool-name" title={tool.description}>{tool.name}</div>
                <div className="ls-tool-meta">
                  {tool.council_eligible && (
                    <span className="ls-tool-badge ls-tool-council" title="Available in Council">
                      council
                    </span>
                  )}
                  <span className="ls-inject-script" title={tool.scriptId}>
                    {tool.scriptName}
                  </span>
                  <button
                    type="button"
                    className="ls-tool-remove"
                    aria-label={`Unregister tool ${tool.name}`}
                    title={
                      `Unregister "${tool.name}" from Lumiverse.\n` +
                      `The owning script is not disabled — the next script edit/enable ` +
                      `will re-register declaratively-defined tools.`
                    }
                    onClick={() => sendToBackend({ type: 'unregister_tool', name: tool.name })}
                  >
                    <Trash2 size={11} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Variables section migrated to Storage tab in v0.20.0 */}

      {/* ── Active Injections section ───────────────────────────────────────── */}
      <div className="ls-status-section">
        <div className="ls-inject-header">
          <Syringe size={10} />
          Active Injections
          {injections.length > 0 && <span className="ls-inject-count">{injections.length}</span>}
        </div>
        <div className="ls-status-section-body">
          {injections.length === 0 ? (
            <div className="ls-section-empty">No injections active</div>
          ) : injections.map(inj => {
            const isExpanded = expandedInjections.has(inj.id);
            return (
              <div key={inj.id} className="ls-inject-row ls-inject-row-clickable" onClick={() => toggleInjection(inj.id)}>
                {/* Mode icon: ⇣ blue for intercept, ⇡ purple for context */}
                <span
                  className={`ls-inject-mode-icon ls-inject-${inj.mode}`}
                  title={inj.mode === 'intercept' ? 'Post-assembly intercept' : 'Pre-assembly context'}
                >
                  {inj.mode === 'intercept'
                    ? <ArrowDownToLine size={11} />
                    : <ArrowUpToLine size={11} />
                  }
                </span>

                <div className="ls-inject-body">
                  {/* Header row: ID + meta + chevron */}
                  <div className="ls-inject-header-row">
                    <span className="ls-inject-id" title={inj.id}>{inj.id}</span>
                    <div className="ls-inject-meta">
                      <span className="ls-inject-role">{inj.role}</span>
                      {inj.mode === 'intercept' && inj.depth > 0 && (
                        <span className="ls-inject-depth" title={`Insert before last ${inj.depth} message${inj.depth !== 1 ? 's' : ''}`}>
                          d:{inj.depth}
                        </span>
                      )}
                      {inj.ephemeral && (
                        <span className="ls-inject-ephemeral" title="Ephemeral — clears after next generation">
                          <Timer size={9} />
                        </span>
                      )}
                      <span className="ls-inject-script" title={inj.scriptId}>
                        {scriptNameById[inj.scriptId] ?? inj.scriptId.slice(0, 8)}
                      </span>
                    </div>
                    <span className="ls-inject-chevron">
                      {isExpanded ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                    </span>
                  </div>

                  {/* Collapsible content */}
                  {isExpanded && (
                    <div className="ls-inject-content" onClick={e => e.stopPropagation()}>
                      {inj.content}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Variables inspector extracted to src/components/storage/VariablesSection.tsx
// in v0.20.0. Storage tab (src/components/storage/StorageTab.tsx) now owns it.
