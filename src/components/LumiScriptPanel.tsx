import { FC, useState, useEffect, useCallback } from 'react';
import { Code2, Activity, Zap, ArrowDownToLine, ArrowUpToLine, Timer, ChevronDown, ChevronUp, Wrench, Bot, Syringe } from 'lucide-react';
import type { Script, LumiScriptSettings, ConsoleEntry, InjectionInfo, RegisteredToolInfo } from '../types/script.js';
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
  const [injections, setInjections] = useState<InjectionInfo[]>([]);
  const [tools, setTools] = useState<RegisteredToolInfo[]>([]);
  const [sidecarResult, setSidecarResult] = useState<{
    turns: number;
    toolCalls: Array<{ name: string; success: boolean }>;
    injected: boolean;
    error?: string;
  } | null>(null);

  /** Per-trigger invocation counter (session-local, increments on execution_started) */
  const [invocationCounts, setInvocationCounts] = useState<Record<string, number>>({});

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

        case 'injections_updated':
          setInjections(msg.injections);
          break;

        case 'tools_updated':
          setTools(msg.tools);
          break;

        case 'sidecar_run_result':
          setSidecarResult({
            turns:     msg.turns,
            toolCalls: msg.toolCalls,
            injected:  msg.injected,
            error:     msg.error,
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
          // Count invocations for trigger scripts
          setInvocationCounts(prev => ({
            ...prev,
            [msg.scriptId]: (prev[msg.scriptId] ?? 0) + 1,
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
    sendToBackend({ type: 'get_injections' });
    sendToBackend({ type: 'get_tools' });

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
          <StatusTab
            scripts={scripts}
            execInfo={execState.scriptExecInfo}
            invocationCounts={invocationCounts}
            injections={injections}
            tools={tools}
            sidecarResult={sidecarResult}
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

interface SidecarRunResult {
  turns: number;
  toolCalls: Array<{ name: string; success: boolean }>;
  injected: boolean;
  error?: string;
}

interface StatusTabProps {
  scripts: Script[];
  execInfo: Record<string, ScriptExecInfo>;
  invocationCounts: Record<string, number>;
  injections: InjectionInfo[];
  tools: RegisteredToolInfo[];
  sidecarResult: SidecarRunResult | null;
}

const StatusTab: FC<StatusTabProps> = ({ scripts, execInfo, invocationCounts, injections, tools, sidecarResult }) => {
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
      {enabled.map(script => {
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
          </div>
        );
      })}

      {/* ── Active Tools section — always visible ───────────────────────────── */}
      <div className="ls-inject-section">
        <div className="ls-inject-header">
          <Wrench size={10} />
          Active Tools
          {tools.length > 0 && <span className="ls-inject-count">{tools.length}</span>}
        </div>
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
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── Last Sidecar Run section ──────────────────────────────────────── */}
      {sidecarResult && (
        <div className="ls-inject-section">
          <div className="ls-inject-header">
            <Bot size={10} />
            Last Sidecar Run
            {sidecarResult.injected && (
              <span className="ls-inject-count" title="Result injected into prompt">✓</span>
            )}
          </div>
          {sidecarResult.error ? (
            <div className="ls-sidecar-error">{sidecarResult.error}</div>
          ) : (
            <div className="ls-sidecar-summary">
              {sidecarResult.toolCalls.length === 0
                ? <span className="ls-sidecar-noop">No tool calls — sidecar loop skipped</span>
                : <span>{sidecarResult.toolCalls.length} call{sidecarResult.toolCalls.length !== 1 ? 's' : ''} in {sidecarResult.turns} turn{sidecarResult.turns !== 1 ? 's' : ''}</span>
              }
            </div>
          )}
          {sidecarResult.toolCalls.length > 0 && (
            <div className="ls-sidecar-calls">
              {sidecarResult.toolCalls.map((call, i) => (
                <span
                  key={i}
                  className={`ls-sidecar-call ${call.success ? 'ls-sidecar-call-ok' : 'ls-sidecar-call-err'}`}
                  title={call.success ? `${call.name}: success` : `${call.name}: failed`}
                >
                  {call.name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Active Injections section — always visible ──────────────────────── */}
      <div className="ls-inject-section">
        <div className="ls-inject-header">
          <Syringe size={10} />
          Active Injections
          {injections.length > 0 && <span className="ls-inject-count">{injections.length}</span>}
        </div>
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
  );
};
