import { FC, useState, useEffect } from 'react';
import { Code2, BookMarked, Terminal } from 'lucide-react';
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
    </div>
  );
};
