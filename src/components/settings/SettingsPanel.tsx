import { FC, useState, useEffect, useMemo, type CSSProperties } from 'react';
import { Code2, BookMarked, Terminal, Timer, Type, FileCode2, Activity, MessageCircle, Trash2, RotateCcw, Cpu, Shuffle, Globe } from 'lucide-react';
import type { Script, LumiScriptSettings } from '../../types/script.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import { DEFAULT_SETTINGS, scriptRunsOnStartup } from '../../types/script.js';
import { parseAllowlistEntry, isDirectEligibleHost } from '../../engine/egress-allowlist.js';
import { DiagnosticsModal } from '../diagnostics/DiagnosticsModal.js';
import { AssistantModal } from '../assistant/AssistantModal.js';
import { LS_OPEN_ASSISTANT_EVENT } from '../assistant/openAssistant.js';
import { HostSelect } from '../common/HostSelect.js';
import { ConfirmDialog } from '../common/ConfirmDialog.js';

// Connection rows as pushed by the backend's `assistant_connections` reply —
// derived from the message contract so the shape can't drift.
type AssistantConnRow = Extract<BackendToFrontend, { type: 'assistant_connections' }>['connections'][number];

// ─── Engine-switch confirm modal styling ────────────────────────────────────
// The confirm dialog is portal-rendered under <body>, where `--lumiverse-*`
// tokens don't cascade, so colours are hard-coded rgb() (same convention as the
// card-bundle modal this layout mirrors). Structure: an intro paragraph, then a
// labelled section + read-only script list for each of the two migration paths.
const esText  = 'rgb(222,223,230)';
const esMuted = 'rgba(222,223,230,0.6)';
const esNote:         CSSProperties = { color: esMuted, fontSize: 12,   lineHeight: 1.5,  margin: '0 0 10px' };
const esSectionLabel: CSSProperties = { color: esText,  fontSize: 12,   fontWeight: 600,  margin: '14px 0 4px' };
const esSubNote:      CSSProperties = { color: esMuted, fontSize: 11.5, lineHeight: 1.45, margin: '0 0 6px' };
const esFoot:         CSSProperties = { color: esMuted, fontSize: 11.5, lineHeight: 1.45, margin: '14px 0 0' };
const esList:         CSSProperties = { maxHeight: 132, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2, margin: '0 0 2px' };
const esRow:          CSSProperties = { display: 'flex', alignItems: 'center', gap: 8, padding: '3px 2px' };
const esName:         CSSProperties = {
  fontWeight: 600, fontSize: 12.5, color: esText,
  flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
};

/** A read-only, scrollable column of script names with a leading action icon —
 *  presentational counterpart to the card-bundle picker (no checkboxes). */
function renderEngineSwitchScriptList(list: Script[], Icon: typeof RotateCcw) {
  return (
    <div style={esList}>
      {list.map((s) => (
        <div key={s.id} style={esRow}>
          <Icon size={11} style={{ color: esMuted, flexShrink: 0 }} />
          <span style={esName} title={s.name}>{s.name}</span>
        </div>
      ))}
    </div>
  );
}

interface SettingsPanelProps {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const SettingsPanel: FC<SettingsPanelProps> = ({
  onBackendMessage,
  sendToBackend,
}) => {
  const [settings, setSettings] = useState<LumiScriptSettings>(DEFAULT_SETTINGS);
  const [scripts, setScripts] = useState<Script[]>([]);
  // v0.28.0 — diagnostics modal visibility. Triggered from the "View
  // Diagnostics" button below; the modal mounts via portal under
  // document.body so it overlays the entire app, not just this panel.
  const [diagnosticsOpen, setDiagnosticsOpen] = useState(false);
  // v0.30.x — assistant modal visibility. Opens the in-app code assistant
  // (persona: Lisa). Portal-mounted same way as Diagnostics.
  const [assistantOpen, setAssistantOpen] = useState(false);
  // v1.0.0-rc.9 — LLM connections for the "Default connection" picker below.
  // null = not yet loaded (picker disabled); [] = loaded, none configured.
  const [assistantConnections, setAssistantConnections] = useState<AssistantConnRow[] | null>(null);
  // #11 engine-toggle — the engine the user picked but hasn't confirmed yet. Switching engines
  // reloads all active scripts, so the dropdown stashes the choice here and only dispatches on confirm.
  const [pendingEngineMode, setPendingEngineMode] = useState<'asyncfn' | 'quickjs' | null>(null);
  // The host <select> commits its display optimistically on selection, but we don't change
  // settings.engineMode until the user confirms — so on Cancel the dropdown would keep showing the
  // un-chosen engine (and, worse, a re-pick of the real value would no-op the guard below). Bumping this
  // key on Cancel remounts the dropdown so it re-reads the true value. (Confirm needs no remount: the
  // display already shows the new value, and settings catches up via the settings_updated round-trip.)
  const [engineSelectResetKey, setEngineSelectResetKey] = useState(0);
  // #11 P7 context-model toggle — mirrors the engine toggle. Switching the QuickJS context-isolation
  // model respawns the QuickJS worker(s) and reloads active scripts, so the dropdown stashes the pending
  // choice and only dispatches on confirm; its reset key remounts the dropdown on Cancel to re-read the
  // true value (same reasoning as engineSelectResetKey above).
  const [pendingContextModel, setPendingContextModel] = useState<'shared' | 'per-script' | null>(null);
  const [contextModelSelectResetKey, setContextModelSelectResetKey] = useState(0);
  // Outbound-egress allowlist editor — the host currently being typed into the "add" field, plus
  // an inline validation message (null = valid/empty). The committed list is settings.allowedPrivateHosts.
  const [newHost, setNewHost] = useState('');
  const [hostError, setHostError] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;
      if (msg.type === 'scripts_updated') setScripts(msg.scripts);
      if (msg.type === 'settings_updated') setSettings(msg.settings);
      if (msg.type === 'assistant_connections') setAssistantConnections(msg.connections);
    });

    sendToBackend({ type: 'get_settings' });
    sendToBackend({ type: 'get_scripts' });
    sendToBackend({ type: 'request_assistant_connections' });

    return unsub;
  }, [onBackendMessage, sendToBackend]);

  // v0.30.x — cross-root invocation. The dock-panel React root (where the
  // script editor lives) can't reach this component's state directly because
  // the two roots have no common React parent (see `openAssistant.ts`).
  // Listening for the `ls:open-assistant` window event lets the editor's
  // topbar button — and any future invocation site — pop this modal without
  // a shared ancestor.
  useEffect(() => {
    const handleOpen = () => setAssistantOpen(true);
    window.addEventListener(LS_OPEN_ASSISTANT_EVENT, handleOpen);
    return () => window.removeEventListener(LS_OPEN_ASSISTANT_EVENT, handleOpen);
  }, []);

  const triggerCount = scripts.filter(s => s.type === 'trigger').length;
  const libraryCount = scripts.filter(s => s.type === 'library').length;

  // Options for the default-connection picker: a "Lumiverse default" sentinel
  // (value '') ahead of every configured connection. Memoized for a stable
  // array identity into HostSelect.
  const assistantConnectionOptions = useMemo(
    () => [
      { value: '', label: 'Lumiverse default', sublabel: 'Follow the app’s own default connection' },
      ...(assistantConnections ?? []).map((c) => ({
        value: c.id,
        label: c.name,
        sublabel: `${c.provider} · ${c.model}${c.isDefault ? ' · app default' : ''}`,
      })),
    ],
    [assistantConnections],
  );

  // Runtime-switch impact counts for the confirm modals (shared by the engine and the context-isolation
  // switch — both migrate every enabled trigger the same way). Same predicate the backend fan-out uses
  // (scriptRunsOnStartup), so what the modal says always matches what the switch actually does:
  // startup-triggered scripts re-run now; event-driven ones re-arm on their next trigger.
  const engineSwitchImpact = useMemo(() => {
    const enabledTriggers = scripts.filter((s) => s.enabled && s.type === 'trigger');
    return {
      startup: enabledTriggers.filter(scriptRunsOnStartup),
      event:   enabledTriggers.filter((s) => !scriptRunsOnStartup(s)),
    };
  }, [scripts]);

  // #11 engine-toggle — the two sandbox engines. Stable identity for HostSelect.
  const engineModeOptions = useMemo(
    () => [
      { value: 'asyncfn', label: 'AsyncFunction',                 sublabel: 'Default engine' },
      { value: 'quickjs', label: 'QuickJS (experimental isolate)', sublabel: 'Stronger WASM sandbox isolation' },
    ],
    [],
  );

  // #11 P7 context-model toggle — the QuickJS context-isolation model. Stable identity for HostSelect.
  const contextModelOptions = useMemo(
    () => [
      { value: 'shared',     label: 'Shared context',      sublabel: 'One sandbox for all scripts (default)' },
      { value: 'per-script', label: 'Per-script isolation', sublabel: 'Each script in its own sandbox' },
    ],
    [],
  );

  const handleToggleEnabled = (enabled: boolean) => {
    sendToBackend({ type: 'update_settings', patch: { enabled } });
  };

  // Outbound-egress allowlist — the hosts the user permits scripts to reach DIRECTLY, bypassing the
  // SSRF-safe proxy that otherwise blocks loopback / LAN / link-local addresses. The backend re-validates
  // every entry when a request is made; the check here only guides input. Only fixed addresses are
  // accepted (an IP literal or localhost, optionally with a port) — a plain hostname would resolve at
  // connect time with no pinning, so it is rejected here and, as defence in depth, also by the backend.
  const allowedHosts = settings.allowedPrivateHosts ?? [];
  const addAllowedHost = () => {
    const parsed = parseAllowlistEntry(newHost);
    if (!parsed || !isDirectEligibleHost(parsed.host)) {
      setHostError('Enter an IP address or localhost, optionally with a port — e.g. localhost:11434, 192.168.1.50, or [::1]:8080.');
      return;
    }
    // Normalize to a stable display form (the parser already lowercased the host; re-bracket IPv6).
    const normalized = parsed.host.includes(':')
      ? `[${parsed.host}]${parsed.port ? `:${parsed.port}` : ''}`
      : `${parsed.host}${parsed.port ? `:${parsed.port}` : ''}`;
    if (allowedHosts.includes(normalized)) { setNewHost(''); setHostError(null); return; }
    sendToBackend({ type: 'update_settings', patch: { allowedPrivateHosts: [...allowedHosts, normalized] } });
    setNewHost('');
    setHostError(null);
  };
  const removeAllowedHost = (host: string) => {
    sendToBackend({ type: 'update_settings', patch: { allowedPrivateHosts: allowedHosts.filter((h) => h !== host) } });
  };

  return (
    <div className="ls-settings">
      {/* Header */}
      <div className="ls-settings-header">
        <span className="ls-settings-title">
          <Terminal size={14} style={{ color: 'var(--lumiverse-accent)' }} />
          LumiScript
        </span>
      </div>

      {/* Master enable */}
      <div className="ls-toggle-row">
        <label className="ls-toggle">
          <input
            type="checkbox"
            checked={settings.enabled}
            onChange={e => handleToggleEnabled(e.target.checked)}
          />
          <span className="ls-toggle-slider" />
        </label>
        <span style={{ fontSize: 12 }}>Master Enable</span>
      </div>

      {/* Script / library count cards — informational only */}
      <div className="ls-settings-counts">
        <div className="ls-count-card">
          <Code2 size={14} style={{ color: 'var(--lumiverse-accent)', margin: '0 auto 4px' }} />
          <div className="ls-count-num">{triggerCount}</div>
          <div className="ls-count-label">Scripts</div>
        </div>
        <div className="ls-count-card">
          <BookMarked size={14} style={{ color: 'var(--lumiverse-accent)', margin: '0 auto 4px' }} />
          <div className="ls-count-num">{libraryCount}</div>
          <div className="ls-count-label">Libraries</div>
        </div>
      </div>

      {/* Script Execution */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <Timer size={11} />
          Script Execution
        </div>

        {/* #11 engine-toggle — sandbox engine. QuickJS is the experimental WASM isolate.
            Changing it confirms first (switching reloads all active scripts). */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Which sandbox engine runs script bodies + handler fires. AsyncFunction is the default. QuickJS is an experimental WASM isolate with stronger sandboxing — behaviourally faithful to AsyncFunction bar one documented divergence (a script invoking its OWN tool). Switching engines reloads all active scripts so their handlers re-register under the new engine.">
            Engine
          </label>
          <HostSelect
            key={engineSelectResetKey}
            options={engineModeOptions}
            value={settings.engineMode ?? 'asyncfn'}
            onChange={(v) => {
              const next = v === 'quickjs' ? 'quickjs' : 'asyncfn';
              if (next !== (settings.engineMode ?? 'asyncfn')) setPendingEngineMode(next);
            }}
            ariaLabel="Script engine"
          />
        </div>

        {/* #11 P7 context-model — QuickJS context-isolation model. Only has an effect under the QuickJS
            engine; switching it respawns the QuickJS worker(s) and reloads active scripts, so it confirms
            first (same reload impact as an engine switch). */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="QuickJS engine only. 'Shared context' runs every script in one QuickJS context (default). 'Per-script isolation' gives each script its own context — its own globalThis and library instances — so one script cannot observe or poison another's sandbox. Switching respawns the QuickJS worker(s) and reloads all active scripts.">
            Isolation
          </label>
          <HostSelect
            key={contextModelSelectResetKey}
            options={contextModelOptions}
            value={settings.contextModel ?? 'shared'}
            onChange={(v) => {
              const next = v === 'per-script' ? 'per-script' : 'shared';
              if (next !== (settings.contextModel ?? 'shared')) setPendingContextModel(next);
            }}
            ariaLabel="Script context isolation"
          />
        </div>

        {/* Execution timeout */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Async execution timeout. If a script does not complete within this period it is aborted with a timeout error.">
            Timeout (s)
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={5}
            max={300}
            value={Math.round(settings.scriptTimeoutMs / 1000)}
            onChange={e => {
              const secs = Math.max(5, Math.min(300, Number(e.target.value) || 60));
              sendToBackend({ type: 'update_settings', patch: { scriptTimeoutMs: secs * 1000 } });
            }}
          />
        </div>

        {/* Console history limit */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Maximum console log entries kept per script. Older entries are dropped once this cap is reached.">
            Console history
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={50}
            max={2000}
            value={settings.consoleHistoryLimit}
            onChange={e => {
              const limit = Math.max(50, Math.min(2000, Number(e.target.value) || 500));
              sendToBackend({ type: 'update_settings', patch: { consoleHistoryLimit: limit } });
            }}
          />
        </div>

        {/* Stream buffer cap (QuickJS engine) — max undrained generateStream chunks before the stream is cancelled */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="QuickJS engine only. Max chunks buffered for a single api.llm.generateStream that is not being consumed fast enough (or at all) — once this many chunks are queued undrained, the stream is cancelled with an error so it can't grow without limit.">
            Stream buffer
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={16}
            max={100000}
            value={settings.streamQueueCap ?? 512}
            onChange={e => {
              const cap = Math.max(16, Math.min(100000, Number(e.target.value) || 512));
              sendToBackend({ type: 'update_settings', patch: { streamQueueCap: cap } });
            }}
          />
        </div>
      </div>

      {/* Network — the user-managed allowlist of private hosts that outbound HTTP (bare `fetch`
          and `api.utils.http.*`) may reach directly. By default every request is routed through an
          SSRF-safe proxy that resolves + pins DNS and blocks loopback / LAN / link-local addresses;
          entries here are the deliberate local exceptions (a local model server, a LAN device),
          named by the user and never writable by a script. */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <Globe size={11} />
          Network
        </div>

        <div
          className="ls-settings-template-label"
          title="Hosts that outbound HTTP may reach directly, bypassing the private-address block. By default every request goes through an SSRF-safe proxy that blocks loopback / LAN / link-local addresses. Only fixed addresses are accepted: an IP literal or localhost, optionally with a port. Omit the port to allow any port on that host, or include one to scope to a single port. This list lives in your settings and is never writable by a script."
        >
          Allowed private hosts
        </div>

        <div className="ls-allowlist">
          {allowedHosts.length === 0 ? (
            <div className="ls-allowlist-empty">None — every request uses the SSRF-safe path.</div>
          ) : (
            <div className="ls-allowlist-list">
              {allowedHosts.map((h) => (
                <div key={h} className="ls-allowlist-row">
                  <span className="ls-allowlist-host" title={h}>{h}</span>
                  <button
                    type="button"
                    className="ls-allowlist-remove"
                    title={`Remove ${h}`}
                    aria-label={`Remove ${h}`}
                    onClick={() => removeAllowedHost(h)}
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="ls-allowlist-add">
            <input
              type="text"
              className="ls-allowlist-input"
              placeholder="localhost:11434"
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              value={newHost}
              onChange={(e) => { setNewHost(e.target.value); if (hostError) setHostError(null); }}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addAllowedHost(); } }}
            />
            <button
              type="button"
              className="ls-btn ls-accent"
              disabled={!newHost.trim()}
              onClick={addAllowedHost}
            >
              Add
            </button>
          </div>

          {hostError ? (
            <div className="ls-allowlist-error">{hostError}</div>
          ) : (
            <div className="ls-allowlist-hint">Examples: localhost, localhost:11434, 192.168.1.50, [::1]:8080</div>
          )}
        </div>
      </div>

      {/* Workers — Phase F (v1.0 runtime-isolation). Worker pool size +
          eviction thresholds + manual rebalance action. Decreasing the
          worker count from a higher value auto-shuts down over-cap workers
          (soft-decrease via rebalanceWorkerPool); the manual Rebalance
          button below redistributes ALL script assignments. */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <Cpu size={11} />
          Workers
        </div>

        {/* Pool size — count of concurrent script-runner subprocesses */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Number of concurrent script-runner worker subprocesses. Larger values distribute scripts across more processes for better fault isolation, at the cost of more memory (~50-100 MB per worker at idle). Capped at 16 by the host (Spindle's MAX_BACKEND_PROCESSES).">
            Worker count
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={1}
            max={16}
            value={settings.workerCount}
            onChange={e => {
              const count = Math.max(1, Math.min(16, Number(e.target.value) || 1));
              sendToBackend({ type: 'update_settings', patch: { workerCount: count } });
            }}
          />
        </div>

        {/* Idle timeout — displayed in minutes, stored as ms */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="How long a worker may remain idle (no script fires, no handler invocations) before it's torn down to reclaim memory. On next event for any of its assigned scripts, the worker respawns (~150-300 ms cold-start hitch).">
            Idle timeout (min)
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={1}
            max={1440}
            value={Math.round(settings.workerIdleTimeoutMs / 60_000)}
            onChange={e => {
              const mins = Math.max(1, Math.min(1440, Number(e.target.value) || 30));
              sendToBackend({ type: 'update_settings', patch: { workerIdleTimeoutMs: mins * 60_000 } });
            }}
          />
        </div>

        {/* Memory ceiling — displayed in MB, stored as MB */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Total memory ceiling (sum across all worker subprocesses). When exceeded, the eviction sweep LRU-evicts idle workers until total memory drops back under the ceiling. Workers with active runs are exempt; the sweep always keeps at least one worker warm.">
            Memory ceiling (MB)
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={64}
            max={8192}
            value={settings.workerMemoryCeilingMb}
            onChange={e => {
              const mb = Math.max(64, Math.min(8192, Number(e.target.value) || 512));
              sendToBackend({ type: 'update_settings', patch: { workerMemoryCeilingMb: mb } });
            }}
          />
        </div>

        {/* Rebalance pool — manual full redistribution */}
        <button
          type="button"
          className="ls-btn"
          onClick={() => sendToBackend({ type: 'rebalance_pool' })}
          title="Releases all script→worker assignments. Each script's next fire reassigns via least-loaded over the current pool. Useful after increasing Worker count to redistribute existing scripts onto the new workers (assignments are sticky by default)."
        >
          <Shuffle size={11} style={{ marginRight: 4 }} />
          Rebalance pool
        </button>
      </div>

      {/* Editor */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <Type size={11} />
          Editor
        </div>

        {/* Monaco font size */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Font size (in pixels) used by the Monaco code editor. Affects the code editor only; reference docs and console output are unchanged.">
            Font size
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={10}
            max={24}
            value={settings.editorFontSize}
            onChange={e => {
              const size = Math.max(10, Math.min(24, Number(e.target.value) || 12));
              sendToBackend({ type: 'update_settings', patch: { editorFontSize: size } });
            }}
          />
        </div>

        {/* Autosave debounce */}
        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Delay (in milliseconds) between the last keystroke and autosave. Larger values reduce backend round-trips while typing.">
            Autosave (ms)
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={300}
            max={5000}
            step={100}
            value={settings.autosaveDebounceMs}
            onChange={e => {
              const ms = Math.max(300, Math.min(5000, Number(e.target.value) || 1200));
              sendToBackend({ type: 'update_settings', patch: { autosaveDebounceMs: ms } });
            }}
          />
        </div>

        {/* IntelliSense toggle */}
        <div className="ls-toggle-row" title="Show the editor's IntelliSense — autocomplete suggestions, api.* signature help, and hover docs. Turn off to suppress the popups (syntax-error squiggles stay). Takes effect immediately.">
          <label className="ls-toggle">
            <input
              type="checkbox"
              checked={settings.editorIntellisense}
              onChange={e => sendToBackend({ type: 'update_settings', patch: { editorIntellisense: e.target.checked } })}
            />
            <span className="ls-toggle-slider" />
          </label>
          <span style={{ fontSize: 12 }}>IntelliSense</span>
        </div>
      </div>

      {/* Templates — pre-seeded starter code for new scripts */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <FileCode2 size={11} />
          New-Script Templates
        </div>

        <div className="ls-settings-template-field">
          <label className="ls-settings-template-label" title="Starter code inserted into newly created trigger scripts.">
            Trigger
          </label>
          <textarea
            className="ls-textarea"
            rows={6}
            spellCheck={false}
            value={settings.defaultTriggerTemplate}
            onChange={e => sendToBackend({
              type: 'update_settings',
              patch: { defaultTriggerTemplate: e.target.value },
            })}
          />
        </div>

        <div className="ls-settings-template-field">
          <label className="ls-settings-template-label" title="Starter code inserted into newly created library scripts.">
            Library
          </label>
          <textarea
            className="ls-textarea"
            rows={8}
            spellCheck={false}
            value={settings.defaultLibraryTemplate}
            onChange={e => sendToBackend({
              type: 'update_settings',
              patch: { defaultLibraryTemplate: e.target.value },
            })}
          />
        </div>

      </div>

      {/* Support — Diagnostics affordance. v0.28.0+. Opens a modal that
          shows runtime state (versions, permissions, registrations,
          script-runner health, etc.) with a one-click markdown dump for
          Discord support reports. Lives in Settings rather than as a
          dock-panel tab to keep it on-demand (matches Memory Cortex
          Diagnostics pattern in the host's Settings → Memory). */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <Activity size={11} />
          Support
        </div>
        <button
          type="button"
          className="ls-btn"
          onClick={() => setDiagnosticsOpen(true)}
          title="Open the diagnostics modal — runtime state snapshot + copy-as-markdown for Discord support reports"
        >
          <Activity size={11} style={{ marginRight: 4 }} />
          View Diagnostics
        </button>
      </div>

      {/* Assistant — v0.30.x. Opens the in-app code assistant (persona:
          Lisa) for Q&A about LumiScript / Spindle APIs. Tool-iteration
          ceiling is user-configurable for models that thrash on hard
          questions (see notes/model-observation-opus-4.6.md). */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <MessageCircle size={11} />
          Assistant
        </div>

        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="The LLM connection Lisa's chat starts on. Leave as “Lumiverse default” to follow the app's own default connection, or point Lisa at a model that's a stronger coding brain than your main-chat pick (e.g. GLM-5.1). You can still switch connections per-session inside the chat — this only sets the starting point.">
            Connection
          </label>
          <HostSelect
            options={assistantConnectionOptions}
            value={settings.assistantConnectionId ?? ''}
            onChange={(v) => sendToBackend({ type: 'update_settings', patch: { assistantConnectionId: v } })}
            placeholder={assistantConnections === null ? 'Loading…' : 'Lumiverse default'}
            disabled={assistantConnections === null}
            ariaLabel="Default Lisa connection"
            searchThreshold={8}
          />
        </div>

        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Maximum tool-call iterations Lisa is allowed per turn. Each lookup_api call counts as one. Lower this if your model thrashes on hard questions; raise it if Lisa hits the ceiling on genuinely complex Q&A.">
            Tool iterations
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={2}
            max={20}
            value={settings.assistantMaxIterations}
            onChange={e => {
              const n = Math.max(2, Math.min(20, Number(e.target.value) || 8));
              sendToBackend({ type: 'update_settings', patch: { assistantMaxIterations: n } });
            }}
          />
        </div>

        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Token budget for Lisa's context window. Her per-turn prompt is trimmed to fit this, and the fullness gauge in chat reads against it. The app can't detect a model's real context length, so set this to match your model: 200K suits most modern models; lower it for small/local models, raise it for 1M-context ones.">
            Context budget (tokens)
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={8000}
            max={1000000}
            step={1000}
            value={settings.assistantContextTokens}
            onChange={e => {
              const n = Math.max(8000, Math.min(1_000_000, Number(e.target.value) || 200_000));
              sendToBackend({ type: 'update_settings', patch: { assistantContextTokens: n } });
            }}
          />
        </div>

        {/* Generation defaults — passed to runAssistantTurn via parameters.
            Numeric fields use "blank = no override; use connection preset"
            semantic. Empty input value → undefined in settings → field
            omitted in the IPC. */}
        <div className="ls-settings-subheading-row">
          <span className="ls-settings-subheading">Generation defaults</span>
          <button
            type="button"
            className="ls-settings-subheading-action"
            onClick={() => sendToBackend({ type: 'assistant_reset_generation_defaults' })}
            title="Clear all four overrides — temperature, top-p, and max tokens go blank; parallel tool calls returns to the default (on)."
          >
            <RotateCcw size={10} />
            <span>Reset</span>
          </button>
        </div>

        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Sampling temperature (0-2). Higher = more creative / random; lower = more deterministic. Leave blank to use the connection's preset.">
            Temperature
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={0}
            max={2}
            step={0.1}
            value={settings.assistantTemperature ?? ''}
            placeholder="default"
            onChange={e => {
              const raw = e.target.value;
              const parsed = raw === '' ? undefined : Math.max(0, Math.min(2, Number(raw)));
              const v: number | undefined = parsed === undefined || Number.isNaN(parsed) ? undefined : parsed;
              sendToBackend({ type: 'update_settings', patch: { assistantTemperature: v } });
            }}
          />
        </div>

        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Top-P nucleus sampling (0-1). Independent of temperature; most users tune one or the other, not both. Leave blank to use the connection's preset.">
            Top-P
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={0}
            max={1}
            step={0.05}
            value={settings.assistantTopP ?? ''}
            placeholder="default"
            onChange={e => {
              const raw = e.target.value;
              const parsed = raw === '' ? undefined : Math.max(0, Math.min(1, Number(raw)));
              const v: number | undefined = parsed === undefined || Number.isNaN(parsed) ? undefined : parsed;
              sendToBackend({ type: 'update_settings', patch: { assistantTopP: v } });
            }}
          />
        </div>

        <div className="ls-settings-field">
          <label className="ls-settings-field-label" title="Output token cap per turn. Lower bounds the response length; raise for long-form answers. Leave blank to use the connection's preset.">
            Max tokens
          </label>
          <input
            type="number"
            className="ls-number-input"
            min={1}
            max={32768}
            step={256}
            value={settings.assistantMaxTokens ?? ''}
            placeholder="default"
            onChange={e => {
              const raw = e.target.value;
              const parsed = raw === '' ? undefined : Math.max(1, Math.min(32768, Number(raw)));
              const v: number | undefined = parsed === undefined || Number.isNaN(parsed) ? undefined : parsed;
              sendToBackend({ type: 'update_settings', patch: { assistantMaxTokens: v } });
            }}
          />
        </div>

        <div className="ls-toggle-row" title="When unchecked, Lisa requests serialised (one-at-a-time) tool calls. Most providers handle parallel calls fine; uncheck only for Mistral and other providers that choke on parallelism.">
          <label className="ls-toggle">
            <input
              type="checkbox"
              checked={settings.assistantParallelToolCalls}
              onChange={e => sendToBackend({ type: 'update_settings', patch: { assistantParallelToolCalls: e.target.checked } })}
            />
            <span className="ls-toggle-slider" />
          </label>
          <span style={{ fontSize: 12 }}>Parallel tool calls</span>
        </div>

        <div className="ls-toggle-row" title="When on, Lisa automatically summarizes the older part of a long conversation once its context fills past ~85%, so the chat can keep going without overflowing. The summary runs as a background LLM call on the turn that crosses the line. Turn off to compact only manually (the “Compact now” button in chat still works).">
          <label className="ls-toggle">
            <input
              type="checkbox"
              checked={settings.assistantAutoCompact}
              onChange={e => sendToBackend({ type: 'update_settings', patch: { assistantAutoCompact: e.target.checked } })}
            />
            <span className="ls-toggle-slider" />
          </label>
          <span style={{ fontSize: 12 }}>Auto-compact context</span>
        </div>

        <div className="ls-toggle-row" title="When on, Lisa marks the stable part of her system prompt (her persona + the API cheat-sheet) for prompt caching, so caching providers (Anthropic and others) read it from cache instead of re-billing ~44K tokens every turn — a large cost/latency saving. Harmless on providers that don't cache. Turn off only if a provider misbehaves with cache markers.">
          <label className="ls-toggle">
            <input
              type="checkbox"
              checked={settings.assistantPromptCaching}
              onChange={e => sendToBackend({ type: 'update_settings', patch: { assistantPromptCaching: e.target.checked } })}
            />
            <span className="ls-toggle-slider" />
          </label>
          <span style={{ fontSize: 12 }}>Cache system prompt</span>
        </div>

        <div className="ls-settings-subheading">Conversation management</div>

        <button
          type="button"
          className="ls-btn ls-btn-danger"
          onClick={() => sendToBackend({ type: 'assistant_clear_all_threads' })}
          title="Permanently delete every Lisa thread and its conversation history. Confirms before acting."
        >
          <Trash2 size={11} style={{ marginRight: 4 }} />
          Clear all threads
        </button>
      </div>

      {diagnosticsOpen && (
        <DiagnosticsModal
          onClose={() => setDiagnosticsOpen(false)}
          onBackendMessage={onBackendMessage}
          sendToBackend={sendToBackend}
        />
      )}
      {assistantOpen && (
        <AssistantModal
          scripts={scripts}
          defaultConnectionId={settings.assistantConnectionId ?? ''}
          contextTokens={settings.assistantContextTokens}
          onClose={() => setAssistantOpen(false)}
          onBackendMessage={onBackendMessage}
          sendToBackend={sendToBackend}
        />
      )}
      {/* #11 engine-toggle — confirm before switching engines (reloads startup scripts, wipes the rest). */}
      {pendingEngineMode && (
        <ConfirmDialog
          title="Switch script engine?"
          confirmLabel="Switch & reload"
          variant="danger"
          onConfirm={() => {
            sendToBackend({ type: 'update_settings', patch: { engineMode: pendingEngineMode } });
            setPendingEngineMode(null);
          }}
          onCancel={() => { setPendingEngineMode(null); setEngineSelectResetKey((k) => k + 1); }}
        >
          <p style={esNote}>
            Switching to {pendingEngineMode === 'quickjs' ? 'the QuickJS isolate' : 'AsyncFunction'} changes
            which sandbox runs your scripts. Each script's live state — handlers, panels, timers — belongs to
            one engine and can't be moved, so it is rebuilt under the new engine.
          </p>

          {engineSwitchImpact.startup.length > 0 && (
            <>
              <div style={esSectionLabel}>Re-run now ({engineSwitchImpact.startup.length})</div>
              <p style={esSubNote}>
                Startup scripts re-run immediately (spaced out) — panels, toasts, and any LLM calls they
                make on startup happen again.
              </p>
              {renderEngineSwitchScriptList(engineSwitchImpact.startup, RotateCcw)}
            </>
          )}

          {engineSwitchImpact.event.length > 0 && (
            <>
              <div style={esSectionLabel}>State cleared ({engineSwitchImpact.event.length})</div>
              <p style={esSubNote}>
                Event-driven scripts have their live state cleared now and re-arm on their next trigger —
                no automatic re-run.
              </p>
              {renderEngineSwitchScriptList(engineSwitchImpact.event, Timer)}
            </>
          )}

          <p style={esFoot}>
            In-flight runs finish on the current engine first, and any in-memory (non-persisted) state is
            reset. Consider disabling expensive startup scripts before switching.
          </p>
        </ConfirmDialog>
      )}
      {/* #11 P7 context-model — confirm before switching isolation (respawns the QuickJS worker(s), reloads). */}
      {pendingContextModel && (
        <ConfirmDialog
          title="Switch script isolation?"
          confirmLabel="Switch & reload"
          variant="danger"
          onConfirm={() => {
            sendToBackend({ type: 'update_settings', patch: { contextModel: pendingContextModel } });
            setPendingContextModel(null);
          }}
          onCancel={() => { setPendingContextModel(null); setContextModelSelectResetKey((k) => k + 1); }}
        >
          <p style={esNote}>
            Switching to {pendingContextModel === 'per-script' ? 'per-script isolation' : 'a shared context'} changes
            how the QuickJS engine sandboxes your scripts. The QuickJS worker is respawned so every context is
            rebuilt under the new model, and each script's live state — handlers, panels, timers — is rebuilt
            with it.
          </p>

          {engineSwitchImpact.startup.length > 0 && (
            <>
              <div style={esSectionLabel}>Re-run now ({engineSwitchImpact.startup.length})</div>
              <p style={esSubNote}>
                Startup scripts re-run immediately (spaced out) — panels, toasts, and any LLM calls they
                make on startup happen again.
              </p>
              {renderEngineSwitchScriptList(engineSwitchImpact.startup, RotateCcw)}
            </>
          )}

          {engineSwitchImpact.event.length > 0 && (
            <>
              <div style={esSectionLabel}>State cleared ({engineSwitchImpact.event.length})</div>
              <p style={esSubNote}>
                Event-driven scripts have their live state cleared now and re-arm on their next trigger —
                no automatic re-run.
              </p>
              {renderEngineSwitchScriptList(engineSwitchImpact.event, Timer)}
            </>
          )}

          <p style={esFoot}>
            This setting only affects the QuickJS engine. In-flight runs finish first, and any in-memory
            (non-persisted) state is reset.
          </p>
        </ConfirmDialog>
      )}
    </div>
  );
};
