import { FC, useState, useEffect } from 'react';
import type { Script, ConsoleEntry } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import type { ActiveContext } from './BindingsSection.js';
import type { ExecutionDot } from './ScriptListItem.js';
import { ScriptList } from './ScriptList.js';
import { ScriptModal } from './ScriptModal.js';

interface ScriptExecInfo {
  dot: ExecutionDot;
  duration?: number;
}

interface ManagePanelProps {
  scripts: Script[];
  activeContext: ActiveContext;
  execInfo: Record<string, ScriptExecInfo>;
  activeRunScriptId: string | null;
  isRunning: boolean;
  consoleHistory: Record<string, ConsoleEntry[]>;
  editorFontSize: number;
  autosaveDebounceMs: number;
  onClearConsole: (scriptId: string) => void;
  /**
   * Fires whenever the user opens the editor modal for a script (i.e. whenever
   * `openScriptId` transitions to a non-null value). Parent uses this to clear
   * sticky-error state — opening the editor is the acknowledgment signal.
   */
  onScriptOpened?: (scriptId: string) => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const ManagePanel: FC<ManagePanelProps> = ({
  scripts,
  activeContext,
  execInfo,
  activeRunScriptId,
  isRunning,
  consoleHistory,
  editorFontSize,
  autosaveDebounceMs,
  onClearConsole,
  onScriptOpened,
  sendToBackend,
}) => {
  // openScriptId: the script whose Edit button was clicked; null = modal closed
  const [openScriptId, setOpenScriptId] = useState<string | null>(null);

  // Notify the parent whenever the editor opens for a given script. The parent
  // (LumiScriptPanel) uses this to clear sticky-error state — opening the
  // editor is the "user has seen it" acknowledgment. Guarded on transition
  // to non-null so repeated renders with the same openScriptId don't re-fire.
  useEffect(() => {
    if (openScriptId && onScriptOpened) onScriptOpened(openScriptId);
  }, [openScriptId, onScriptOpened]);

  const handleClose = () => setOpenScriptId(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {/* Always-visible full-width script list */}
      <ScriptList
        scripts={scripts}
        selectedId={openScriptId}  // highlight the currently-open script
        execInfo={execInfo}
        onSelect={() => {}}         // selection is handled via Edit button only
        onEdit={setOpenScriptId}    // opens the modal
        sendToBackend={sendToBackend}
      />

      {/* Script editor modal — rendered into document.body via createPortal */}
      {openScriptId !== null && (
        <ScriptModal
          scripts={scripts}
          initialScriptId={openScriptId}
          activeContext={activeContext}
          execInfo={execInfo}
          activeRunScriptId={activeRunScriptId}
          isRunning={isRunning}
          consoleHistory={consoleHistory}
          editorFontSize={editorFontSize}
          autosaveDebounceMs={autosaveDebounceMs}
          onClearConsole={onClearConsole}
          onClose={handleClose}
          sendToBackend={sendToBackend}
        />
      )}
    </div>
  );
};
