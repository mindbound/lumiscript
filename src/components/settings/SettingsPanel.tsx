import { FC, useState, useEffect } from 'react';
import { Code2, BookMarked, Terminal, Timer, Type, FileCode2 } from 'lucide-react';
import type { Script, LumiScriptSettings } from '../../types/script.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import { DEFAULT_SETTINGS } from '../../types/script.js';

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
    </div>
  );
};
