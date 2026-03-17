import { FC, useRef, useState, useEffect, useCallback } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { Play, Loader2, Shield, ShieldAlert, Clock, Calendar } from 'lucide-react';
import type { Script, ScriptBindingEntry, ConsoleEntry } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ScriptConsole } from './ScriptConsole.js';
import { BindingsSection, type ActiveContext } from './BindingsSection.js';

interface ScriptEditorProps {
  script: Script;
  activeContext: ActiveContext;
  isRunning: boolean;
  consoleEntries: ConsoleEntry[];
  onClearConsole: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const ScriptEditor: FC<ScriptEditorProps> = ({
  script,
  activeContext,
  isRunning,
  consoleEntries,
  onClearConsole,
  sendToBackend,
}) => {
  const [localCode, setLocalCode] = useState(script.code);
  const [unsaved, setUnsaved] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(script.name);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);

  // Sync local code when script changes
  useEffect(() => {
    setLocalCode(script.code);
    setUnsaved(false);
    setRenameValue(script.name);
  }, [script.id, script.code, script.name]);

  // Immediately refresh context when a different script is opened.
  useEffect(() => {
    sendToBackend({ type: 'get_active_context' });
  }, [script.id, sendToBackend]);

  // Poll every 2 s while the editor is open so the binding buttons (+char / +chat)
  // reflect the live chat state. The backend resolves the current chat via
  // spindle.chats.getActive(), which returns null when no chat is open.
  useEffect(() => {
    const timer = setInterval(() => {
      sendToBackend({ type: 'get_active_context' });
    }, 2000);
    return () => clearInterval(timer);
  }, [sendToBackend]);

  const saveCode = useCallback((code: string) => {
    sendToBackend({ type: 'update_script', id: script.id, patch: { code } });
    setUnsaved(false);
  }, [script.id, sendToBackend]);

  const handleEditorChange = (value?: string) => {
    if (value === undefined) return;
    setLocalCode(value);
    setUnsaved(value !== script.code);
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => saveCode(value), 1200);
  };

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveCode(editor.getValue());
    });
    editor.getModel()?.setEOL(monaco.editor.EndOfLineSequence.LF);
  };

  const handleRun = () => {
    if (isRunning) return;
    if (saveTimeout.current) { clearTimeout(saveTimeout.current); saveTimeout.current = null; }
    if (unsaved) saveCode(editorRef.current?.getValue() ?? localCode);
    sendToBackend({ type: 'run_script', id: script.id });
  };

  const handleRenameSubmit = () => {
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== script.name) {
      sendToBackend({ type: 'update_script', id: script.id, patch: { name: trimmed } });
    }
    setRenaming(false);
  };

  const handleBindingAdd = (entry: ScriptBindingEntry) => {
    const current = script.bindings ?? [];
    sendToBackend({ type: 'update_script', id: script.id, patch: { bindings: [...current, entry] } });
  };

  const handleBindingRemove = (index: number) => {
    sendToBackend({
      type: 'update_script', id: script.id,
      patch: { bindings: (script.bindings ?? []).filter((_, i) => i !== index) },
    });
  };

  const handleToggleDangerous = () => {
    const next = !script.allowDangerous;
    if (next && !window.confirm('Enable dangerous mode? The script will be able to make HTTP requests and access files.')) return;
    sendToBackend({ type: 'update_script', id: script.id, patch: { allowDangerous: next } });
  };

  const fmt = (ms: number) => new Date(ms).toLocaleString();

  return (
    <div className="ls-editor-root">
      {/* Top bar */}
      <div className="ls-editor-topbar">
        {renaming ? (
          <input
            className="ls-editor-name-input"
            value={renameValue}
            autoFocus
            onChange={e => setRenameValue(e.target.value)}
            onBlur={handleRenameSubmit}
            onKeyDown={e => {
              if (e.key === 'Enter') handleRenameSubmit();
              if (e.key === 'Escape') { setRenameValue(script.name); setRenaming(false); }
            }}
          />
        ) : (
          <span
            className="ls-editor-name"
            onClick={() => setRenaming(true)}
            title="Click to rename"
            style={{ cursor: 'text' }}
          >
            {script.name}
          </span>
        )}

        {unsaved && <span className="ls-editor-unsaved" title="Unsaved changes" />}

        {script.type !== 'library' && (
          <button className={`ls-btn${isRunning ? '' : ' ls-accent'}`} onClick={handleRun} disabled={isRunning}>
            {isRunning ? <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} /> : <Play size={13} />}
            {isRunning ? 'Running…' : 'Run'}
          </button>
        )}
      </div>

      {/* Monaco editor */}
      <div className="ls-editor-monaco">
        <Editor
          key={script.id}
          height="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          value={localCode}
          onChange={handleEditorChange}
          onMount={handleMount}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: 'on',
            wordWrap: 'on',
            automaticLayout: true,
            scrollBeyondLastLine: false,
            tabSize: 2,
            insertSpaces: true,
            fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
          }}
        />
      </div>

      {/* Console */}
      <ScriptConsole entries={consoleEntries} isRunning={isRunning} onClear={onClearConsole} />

      {/* Bindings (trigger scripts only) */}
      {script.type !== 'library' && (
        <BindingsSection
          bindings={script.bindings ?? []}
          activeContext={activeContext}
          onAdd={handleBindingAdd}
          onRemove={handleBindingRemove}
        />
      )}

      {/* Metadata footer */}
      <div className="ls-meta-footer">
        <span className="ls-meta-item">
          <button className="ls-danger-btn" onClick={handleToggleDangerous} title="Toggle dangerous mode">
            {script.allowDangerous
              ? <ShieldAlert size={11} className="ls-dangerous" />
              : <Shield size={11} />}
            <span className={script.allowDangerous ? 'ls-dangerous' : ''}>
              {script.allowDangerous ? 'Dangerous' : 'Safe'}
            </span>
          </button>
        </span>
        <span className="ls-meta-item"><Clock size={10} /><span>Updated {fmt(script.updatedAt)}</span></span>
        <span className="ls-meta-item"><Calendar size={10} /><span>Created {fmt(script.createdAt)}</span></span>
      </div>
    </div>
  );
};
