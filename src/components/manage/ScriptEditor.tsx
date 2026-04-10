import { FC, useRef, useState, useEffect, useCallback } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { Play, Loader2, Shield, ShieldAlert, Clock, Calendar, Code2, BookOpen, Copy, Check, FolderOpen } from 'lucide-react';
import type { Script, ScriptBindingEntry, ConsoleEntry } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ScriptConsole } from './ScriptConsole.js';
import { BindingsSection, type ActiveContext } from './BindingsSection.js';
import { TriggersSection } from './TriggersSection.js';
import { LUMISCRIPT_DEFS } from '../../types/editor-lib.js';
import { ReferenceTab } from '../reference/ReferenceTab.js';

// Register the LumiScript ambient type definitions with Monaco's JavaScript
// language service once — subsequent editor mounts reuse the existing registration.
let _defsRegistered = false;

interface ScriptEditorProps {
  script: Script;
  allScripts: Script[];
  activeContext: ActiveContext;
  isRunning: boolean;
  consoleEntries: ConsoleEntry[];
  onClearConsole: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const ScriptEditor: FC<ScriptEditorProps> = ({
  script,
  allScripts,
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
  const [viewMode, setViewMode] = useState<'code' | 'docs'>('code');
  const [copied, setCopied] = useState(false);
  const [confirmDangerous, setConfirmDangerous] = useState(false);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);

  // Sync local code when script changes; also dismiss any pending dangerous confirm.
  useEffect(() => {
    setLocalCode(script.code);
    setUnsaved(false);
    setRenameValue(script.name);
    setConfirmDangerous(false);
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

    // ── IntelliSense: register LumiScript ambient types once ─────────────────
    // Runs only on the first editor mount per page session (_defsRegistered flag).
    // The editor uses `javascript` language mode, so only jsDefaults is active.
    // tsDefaults configuration is intentionally omitted — it is unused for JS
    // files and would trigger two additional TypeScript worker re-analysis cycles.
    if (!_defsRegistered) {
      _defsRegistered = true;

      const jsDefaults = monaco.languages.typescript.javascriptDefaults;

      // noSemanticValidation suppresses type-error squiggles so users can write
      // plain JavaScript without type annotations. Syntax errors still show.
      jsDefaults.setDiagnosticsOptions({ noSemanticValidation: true, noSyntaxValidation: false });

      jsDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        allowJs: true,
        noEmit: true,
      });

      // Register the ambient declarations for api, script, z, data, and all
      // public API types. This enables hover docs, autocomplete, and signature
      // help for the entire LumiScript API without any imports in user scripts.
      jsDefaults.addExtraLib(LUMISCRIPT_DEFS, 'ts:lumiverse/lumiscript-api.d.ts');
    }
    // ─────────────────────────────────────────────────────────────────────────

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
    if (script.allowDangerous) {
      // Disabling — no confirmation needed.
      sendToBackend({ type: 'update_script', id: script.id, patch: { allowDangerous: false } });
    } else if (confirmDangerous) {
      // Second click inside the confirm bar — user confirmed.
      setConfirmDangerous(false);
      sendToBackend({ type: 'update_script', id: script.id, patch: { allowDangerous: true } });
    } else {
      // First click — show the inline confirmation bar.
      setConfirmDangerous(true);
    }
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

        {/* View mode toggle */}
        <button
          className={`ls-tab-pill${viewMode === 'code' ? ' ls-active' : ''}`}
          onClick={() => setViewMode('code')}
          title="Code editor"
        >
          <Code2 size={10} style={{ display: 'inline', marginRight: 3 }} />
          Code
        </button>
        <button
          className={`ls-tab-pill${viewMode === 'docs' ? ' ls-active' : ''}`}
          onClick={() => setViewMode('docs')}
          title="API reference"
        >
          <BookOpen size={10} style={{ display: 'inline', marginRight: 3 }} />
          Docs
        </button>

        {script.type !== 'library' && (
          <button className={`ls-btn${isRunning ? '' : ' ls-accent'}`} onClick={handleRun} disabled={isRunning}>
            {isRunning ? <Loader2 size={13} style={{ animation: 'spin 1s linear infinite' }} /> : <Play size={13} />}
            {isRunning ? 'Running…' : 'Run'}
          </button>
        )}
      </div>

      {/* Monaco editor — shown in Code mode */}
      {viewMode === 'code' && (
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
              fontSize: 12,
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
      )}

      {/* API reference docs — shown in Docs mode */}
      {viewMode === 'docs' && (
        <div className="ls-editor-docs">
          <ReferenceTab />
        </div>
      )}

      {/* Console — shown in Code mode only */}
      {viewMode === 'code' && (
        <ScriptConsole entries={consoleEntries} isRunning={isRunning} onClear={onClearConsole} />
      )}

      {/* Triggers (trigger scripts only) */}
      {script.type !== 'library' && (
        <TriggersSection
          scriptId={script.id}
          triggers={script.triggers ?? []}
          sendToBackend={sendToBackend}
        />
      )}

      {/* Bindings (trigger scripts only) */}
      {script.type !== 'library' && (
        <BindingsSection
          bindings={script.bindings ?? []}
          activeContext={activeContext}
          onAdd={handleBindingAdd}
          onRemove={handleBindingRemove}
        />
      )}

      {/* Inline dangerous-mode confirmation bar (replaces browser confirm dialog) */}
      {confirmDangerous && (
        <div className="ls-danger-confirm">
          <ShieldAlert size={10} />
          <span className="ls-danger-confirm-msg">
            Enable dangerous mode? The script can make HTTP requests and access files.
          </span>
          <button className="ls-danger-confirm-yes" onClick={handleToggleDangerous}>Enable</button>
          <button className="ls-danger-confirm-no" onClick={() => setConfirmDangerous(false)}>Cancel</button>
        </div>
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
        <span className="ls-meta-item ls-meta-folder">
          <FolderOpen size={10} />
          <select
            className="ls-folder-select"
            value={script.folder ?? ''}
            onChange={e => {
              const val = e.target.value;
              if (val === '__new__') {
                const name = window.prompt('New folder name:');
                if (name?.trim()) {
                  sendToBackend({ type: 'update_script', id: script.id, patch: { folder: name.trim() } });
                }
              } else {
                sendToBackend({ type: 'update_script', id: script.id, patch: { folder: val } });
              }
            }}
          >
            <option value="">No folder</option>
            {[...new Set(allScripts.map(s => s.folder).filter((f): f is string => !!f))].sort().map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
            <option value="__new__">+ New folder...</option>
          </select>
        </span>
        <span className="ls-meta-item"><Clock size={10} /><span>Updated {fmt(script.updatedAt)}</span></span>
        <span className="ls-meta-item"><Calendar size={10} /><span>Created {fmt(script.createdAt)}</span></span>
        <span
          className="ls-meta-item ls-meta-id"
          title={script.id}
          onClick={() => {
            navigator.clipboard.writeText(script.id).catch(() => {});
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {copied ? <Check size={10} /> : <Copy size={10} />}
          <span>ID {script.id.slice(0, 8)}</span>
        </span>
      </div>
    </div>
  );
};
