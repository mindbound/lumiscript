import { FC, useState, useEffect, useMemo } from 'react';
import { Code2, BookMarked, Terminal, Timer, Type, FileCode2, Activity, MessageCircle, Trash2, RotateCcw, Cpu, Shuffle } from 'lucide-react';
import type { Script, LumiScriptSettings } from '../../types/script.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import { DEFAULT_SETTINGS } from '../../types/script.js';
import { DiagnosticsModal } from '../diagnostics/DiagnosticsModal.js';
import { AssistantModal } from '../assistant/AssistantModal.js';
import { LS_OPEN_ASSISTANT_EVENT, dispatchOpenAssistant } from '../assistant/openAssistant.js';
import { HostSelect } from '../common/HostSelect.js';

// Connection rows as pushed by the backend's `assistant_connections` reply —
// derived from the message contract so the shape can't drift.
type AssistantConnRow = Extract<BackendToFrontend, { type: 'assistant_connections' }>['connections'][number];

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

  const handleToggleEnabled = (enabled: boolean) => {
    sendToBackend({ type: 'update_settings', patch: { enabled } });
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

        <button
          type="button"
          className="ls-btn"
          onClick={() => dispatchOpenAssistant()}
          title="Open the in-app code assistant. Quality depends on the LLM connection you're using."
        >
          <MessageCircle size={11} style={{ marginRight: 4 }} />
          Ask Lisa
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
          onClose={() => setAssistantOpen(false)}
          onBackendMessage={onBackendMessage}
          sendToBackend={sendToBackend}
        />
      )}
    </div>
  );
};
