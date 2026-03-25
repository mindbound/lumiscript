import { FC, useState, useEffect } from 'react';
import { Code2, BookMarked, Terminal, Bot } from 'lucide-react';
import type { Script, LumiScriptSettings } from '../../types/script.js';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import { DEFAULT_SETTINGS } from '../../types/script.js';

interface SettingsPanelProps {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
  onOpenPanel: () => void;
}

export const SettingsPanel: FC<SettingsPanelProps> = ({
  onBackendMessage,
  sendToBackend,
  onOpenPanel,
}) => {
  const [settings, setSettings] = useState<LumiScriptSettings>(DEFAULT_SETTINGS);
  const [scripts, setScripts] = useState<Script[]>([]);
  const [connections, setConnections] = useState<Array<{ id: string; name: string; provider: string }>>([]);

  useEffect(() => {
    const unsub = onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;
      if (msg.type === 'scripts_updated') setScripts(msg.scripts);
      if (msg.type === 'settings_updated') setSettings(msg.settings);
      if (msg.type === 'connections_updated') setConnections(msg.connections);
    });

    sendToBackend({ type: 'get_settings' });
    sendToBackend({ type: 'get_scripts' });
    sendToBackend({ type: 'get_connections' });

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
        <button className="ls-btn" onClick={onOpenPanel} title="Open Script Manager">
          Open
        </button>
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

      {/* Script / library count cards */}
      <div className="ls-settings-counts">
        <div className="ls-count-card" onClick={onOpenPanel} title="Open Script Manager">
          <Code2 size={14} style={{ color: 'var(--lumiverse-accent)', margin: '0 auto 4px' }} />
          <div className="ls-count-num">{triggerCount}</div>
          <div className="ls-count-label">Scripts</div>
        </div>
        <div className="ls-count-card" onClick={onOpenPanel} title="Open Script Manager">
          <BookMarked size={14} style={{ color: 'var(--lumiverse-accent)', margin: '0 auto 4px' }} />
          <div className="ls-count-num">{libraryCount}</div>
          <div className="ls-count-label">Libraries</div>
        </div>
      </div>

      {/* Tool Sidecar */}
      <div className="ls-settings-section">
        <div className="ls-settings-section-label">
          <Bot size={11} />
          Tool Sidecar
        </div>

        {/* Enable toggle */}
        <div className="ls-toggle-row" style={{ marginBottom: 6 }}>
          <label className="ls-toggle">
            <input
              type="checkbox"
              checked={settings.sidecarEnabled}
              onChange={e => sendToBackend({ type: 'update_settings', patch: { sidecarEnabled: e.target.checked } })}
            />
            <span className="ls-toggle-slider" />
          </label>
          <span style={{ fontSize: 12 }}>Auto-run tools before generation</span>
        </div>

        {settings.sidecarEnabled && (
          <>
            {/* Connection picker */}
            <div className="ls-settings-field">
              <label className="ls-settings-field-label">Connection</label>
              <select
                className="ls-select"
                value={settings.sidecarConnectionId ?? ''}
                onChange={e => sendToBackend({
                  type: 'update_settings',
                  patch: { sidecarConnectionId: e.target.value || null },
                })}
              >
                <option value="">— select a connection —</option>
                {connections.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.provider})</option>
                ))}
              </select>
            </div>

            {/* Max turns */}
            <div className="ls-settings-field">
              <label className="ls-settings-field-label">Max turns</label>
              <input
                type="number"
                className="ls-number-input"
                min={1}
                max={20}
                value={settings.sidecarMaxTurns}
                onChange={e => sendToBackend({
                  type: 'update_settings',
                  patch: { sidecarMaxTurns: Math.max(1, Math.min(20, Number(e.target.value))) },
                })}
              />
            </div>

            {/* Injection depth */}
            <div className="ls-settings-field">
              <label className="ls-settings-field-label">Inject result</label>
              <select
                className="ls-select"
                value={settings.sidecarInjectionDepth}
                onChange={e => sendToBackend({
                  type: 'update_settings',
                  patch: { sidecarInjectionDepth: Number(e.target.value) },
                })}
              >
                <option value={0}>After all messages</option>
                <option value={1}>Before last message</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
