import { FC, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Terminal } from 'lucide-react';
import type { Script, ConsoleEntry } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import type { ActiveContext } from './BindingsSection.js';
import type { ExecutionDot } from './ScriptListItem.js';
import { ScriptList } from './ScriptList.js';
import { ScriptEditor } from './ScriptEditor.js';

interface ScriptExecInfo {
  dot: ExecutionDot;
  duration?: number;
}

interface ScriptModalProps {
  scripts: Script[];
  initialScriptId: string;
  activeContext: ActiveContext;
  execInfo: Record<string, ScriptExecInfo>;
  activeRunScriptId: string | null;
  isRunning: boolean;
  consoleHistory: Record<string, ConsoleEntry[]>;
  editorFontSize: number;
  editorIntellisense: boolean;
  autosaveDebounceMs: number;
  onClearConsole: (scriptId: string) => void;
  onClose: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const ScriptModal: FC<ScriptModalProps> = ({
  scripts,
  initialScriptId,
  activeContext,
  execInfo,
  activeRunScriptId,
  isRunning,
  consoleHistory,
  editorFontSize,
  editorIntellisense,
  autosaveDebounceMs,
  onClearConsole,
  onClose,
  sendToBackend,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(initialScriptId);

  // If the selected script was deleted, fall back to initial or null
  const selectedScript = scripts.find(s => s.id === selectedId) ?? null;

  // Sync when initial changes (e.g. user clicks Edit on a different script while modal is open)
  useEffect(() => {
    setSelectedId(initialScriptId);
  }, [initialScriptId]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Per-script console history: always show the selected script's own history,
  // regardless of which script is currently running.
  const visibleEntries = selectedScript ? (consoleHistory[selectedScript.id] ?? []) : [];
  const scriptIsRunning = isRunning && selectedScript?.id === activeRunScriptId;
  // Bind the clear action to the currently-selected script so ScriptEditor
  // keeps its parameterless onClearConsole: () => void interface.
  const handleClearConsole = () => { if (selectedScript) onClearConsole(selectedScript.id); };

  const modal = (
    <div
      className="ls-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="ls-modal-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">
            <Terminal size={15} style={{ color: 'var(--lumiverse-accent)' }} />
            Script Manager
          </span>
          <button className="ls-modal-close" onClick={onClose} title="Close (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* Two-column body */}
        <div className="ls-modal-body">
          {/* Left: script list (navigation) */}
          <div className="ls-modal-sidebar">
            <ScriptList
              scripts={scripts}
              selectedId={selectedId}
              execInfo={execInfo}
              onSelect={setSelectedId}
              onEdit={setSelectedId}  // In modal context edit = select
              sendToBackend={sendToBackend}
            />
          </div>

          {/* Right: editor */}
          <div className="ls-modal-main">
            {selectedScript ? (
              <ScriptEditor
                script={selectedScript}
                allScripts={scripts}
                activeContext={activeContext}
                isRunning={scriptIsRunning}
                consoleEntries={visibleEntries}
                editorFontSize={editorFontSize}
                editorIntellisense={editorIntellisense}
                autosaveDebounceMs={autosaveDebounceMs}
                onClearConsole={handleClearConsole}
                sendToBackend={sendToBackend}
              />
            ) : (
              <div className="ls-placeholder">
                <Terminal size={32} style={{ color: 'var(--lumiverse-border)' }} />
                <p>Select a script from the left to edit it</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};
