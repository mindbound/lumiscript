import { FC, useState, useEffect } from 'react';
import { Code2, BookMarked, Terminal, Timer, Type, FileCode2, Activity, MessageCircle, Trash2, RotateCcw } from 'lucide-react';
import type { Script, LumiScriptSettings } from '../../types/script.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import { DEFAULT_SETTINGS } from '../../types/script.js';
import { DiagnosticsModal } from '../diagnostics/DiagnosticsModal.js';
import { AssistantModal } from '../assistant/AssistantModal.js';
import { LS_OPEN_ASSISTANT_EVENT, dispatchOpenAssistant } from '../assistant/openAssistant.js';

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

  useEffect(() => {
    const unsub = onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;
      if (msg.type === 'scripts_updated') setScripts(msg.scripts);
      if (msg.type === 'settings_updated') setSettings(msg.settings);
    });

    sendToBackend({ type: 'get_settings' });
    sendToBackend({ type: 'get_scripts' });

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
          onClose={() => setAssistantOpen(false)}
          onBackendMessage={onBackendMessage}
          sendToBackend={sendToBackend}
        />
      )}
    </div>
  );
};
