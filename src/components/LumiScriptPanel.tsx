import { FC, useState, useEffect, useCallback } from 'react';
import { Code2, Activity } from 'lucide-react';
import type { Script, LumiScriptSettings, ConsoleEntry } from '../types/script.js';
import type { BackendToFrontend, FrontendToBackend } from '../types/messages.js';
import type { ActiveContext } from './manage/BindingsSection.js';
import type { ExecutionDot } from './manage/ScriptListItem.js';
import { DEFAULT_SETTINGS } from '../types/script.js';
import { ManagePanel } from './manage/ManagePanel.js';

interface ScriptExecInfo {
  dot: ExecutionDot;
  duration?: number;
}

interface ExecState {
  activeScriptId: string | null;
  runId: string | null;
  isRunning: boolean;
  entries: ConsoleEntry[];
  scriptExecInfo: Record<string, ScriptExecInfo>;
}

interface LumiScriptPanelProps {
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

type TabId = 'manage' | 'status';

export const LumiScriptPanel: FC<LumiScriptPanelProps> = ({
  onBackendMessage,
  sendToBackend,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>('manage');
  const [scripts, setScripts] = useState<Script[]>([]);
  const [_settings, setSettings] = useState<LumiScriptSettings>(DEFAULT_SETTINGS);
  const [activeContext, setActiveContext] = useState<ActiveContext>({
    characterId: null,
    characterName: null,
    chatId: null,
  });
  const [execState, setExecState] = useState<ExecState>({
    activeScriptId: null,
    runId: null,
    isRunning: false,
    entries: [],
    scriptExecInfo: {},
  });

  // Register a single backend message handler at the top level
  useEffect(() => {
    const unsub = onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;

      switch (msg.type) {
        case 'scripts_updated':
          setScripts(msg.scripts);
          break;

        case 'settings_updated':
          setSettings(msg.settings);
          break;

        case 'active_context':
          setActiveContext({
            characterId: msg.characterId,
            characterName: msg.characterName,
            chatId: msg.chatId,
          });
          break;

        case 'execution_started':
          setExecState(prev => ({
            ...prev,
            activeScriptId: msg.scriptId,
            runId: msg.runId,
            isRunning: true,
            entries: [],
            scriptExecInfo: {
              ...prev.scriptExecInfo,
              [msg.scriptId]: { dot: 'running' },
            },
          }));
          break;

        case 'console_entry':
          setExecState(prev => ({
            ...prev,
            entries: [...prev.entries, msg.entry],
          }));
          break;

        case 'execution_ended':
          setExecState(prev => ({
            ...prev,
            isRunning: false,
            scriptExecInfo: {
              ...prev.scriptExecInfo,
              [msg.scriptId]: {
                dot: msg.success ? 'success' : 'error',
                duration: msg.duration,
              },
            },
          }));
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

    return unsub;
  }, [onBackendMessage, sendToBackend]);

  const clearConsole = useCallback(() => {
    setExecState(prev => ({ ...prev, entries: [] }));
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
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {activeTab === 'manage' ? (
          <ManagePanel
            scripts={scripts}
            activeContext={activeContext}
            execInfo={execState.scriptExecInfo}
            activeRunScriptId={execState.activeScriptId}
            isRunning={execState.isRunning}
            consoleEntries={execState.entries}
            onClearConsole={clearConsole}
            sendToBackend={sendToBackend}
          />
        ) : (
          <StatusTab scripts={scripts} execInfo={execState.scriptExecInfo} />
        )}
      </div>
    </div>
  );
};

// ─── Status tab (Phase 1 — execution dots only) ──────────────────────────────

const DOT_TITLE: Record<ExecutionDot, string> = {
  idle:    'Not yet run this session',
  running: 'Running…',
  success: 'Last run succeeded',
  error:   'Last run failed',
};

interface StatusTabProps {
  scripts: Script[];
  execInfo: Record<string, ScriptExecInfo>;
}

const StatusTab: FC<StatusTabProps> = ({ scripts, execInfo }) => {
  const enabled = scripts.filter(s => s.type === 'trigger' && s.enabled);

  if (enabled.length === 0) {
    return (
      <div className="ls-placeholder">
        <Activity size={28} style={{ color: 'var(--lumiverse-border)' }} />
        <p>No enabled scripts</p>
        <p>Enable trigger scripts to see their status here.</p>
      </div>
    );
  }

  return (
    <div className="ls-status-list">
      {enabled.map(script => {
        const info = execInfo[script.id];
        const dot = info?.dot ?? 'idle';
        const dotClass = {
          idle:    'ls-item-dot',
          running: 'ls-item-dot ls-dot-running',
          success: 'ls-item-dot ls-dot-success',
          error:   'ls-item-dot ls-dot-error',
        }[dot];

        return (
          <div key={script.id} className="ls-status-row">
            <span className={dotClass} title={DOT_TITLE[dot]} />
            <span className="ls-status-name">{script.name}</span>
            {info?.duration !== undefined && dot !== 'running' && (
              <span className="ls-status-duration">{info.duration}ms</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
