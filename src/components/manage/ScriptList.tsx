import { FC, useRef, useState } from 'react';
import { Code2, BookMarked, Plus, Upload, Download, Package, FileCode2, FolderOpen, ChevronDown, ChevronRight, Pencil, AlertTriangle } from 'lucide-react';
import type { Script, ScriptType, ScriptPackEntry } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ScriptListItem, type ExecutionDot } from './ScriptListItem.js';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { PromptDialog } from '../common/PromptDialog.js';
import { exportScriptPack, buildScriptPackBytes } from '../../utils/pack-export.js';
import { parseScriptPack } from '../../utils/pack-import.js';
import { openBundleModal } from '../cardscripts/bundle-helpers.js';
import { bytesToBase64, groupByFolder } from './script-list-logic.js';

interface ScriptExecInfo {
  dot: ExecutionDot;
  duration?: number;
}

interface ScriptListProps {
  scripts: Script[];
  selectedId: string | null;
  execInfo: Record<string, ScriptExecInfo>;
  onSelect: (id: string) => void;
  onEdit: (id: string) => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

// `bytesToBase64` (pack export) + `groupByFolder` live in `./script-list-logic.ts`.

/** Which text-prompt dialog is open (replaces the former window.prompt calls). */
type PromptKind =
  | { kind: 'newScript' }
  | { kind: 'exportPack' }
  | { kind: 'renameFolder'; folder: string };

export const ScriptList: FC<ScriptListProps> = ({
  scripts,
  selectedId,
  execInfo,
  onSelect,
  onEdit,
  sendToBackend,
}) => {
  const [activeType, setActiveType] = useState<ScriptType>('trigger');
  const [collapsedFolders, setCollapsedFolders] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Pack-import flow: parsed entries awaiting the user's confirm, and a
  // parse/validation error message to surface in an alert dialog. Both
  // replace the former window.confirm / window.alert.
  const [pendingImport, setPendingImport] = useState<ScriptPackEntry[] | null>(null);
  const [importError, setImportError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<PromptKind | null>(null);

  const filtered = scripts.filter(s => s.type === activeType);
  const grouped = groupByFolder(filtered);
  const hasFolders = grouped.size > 1 || (grouped.size === 1 && !grouped.has(''));

  const toggleFolder = (folder: string) => {
    setCollapsedFolders(prev => {
      const next = new Set(prev);
      if (next.has(folder)) next.delete(folder);
      else next.add(folder);
      return next;
    });
  };

  const handleNew = () => {
    setPrompt({ kind: 'newScript' });
  };

  const handleExport = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (filtered.length === 0) return;
    // Shift+click → save to extension storage instead of browser download.
    // Used by external dev tooling that polls a fixed path on disk.
    if (e.shiftKey) {
      const bytes = buildScriptPackBytes(filtered);
      sendToBackend({
        type: 'save_pack_to_disk',
        bytesB64: bytesToBase64(bytes),
        scriptType: activeType,
      });
      return;
    }
    setPrompt({ kind: 'exportPack' });
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Reset the input so the same file can be re-selected if needed
    e.target.value = '';
    try {
      const entries = await parseScriptPack(file);
      // Defer to the native confirm dialog (rendered below) so the user can
      // review the script list before the import is dispatched.
      setPendingImport(entries);
    } catch (err) {
      setImportError(err instanceof Error ? err.message : String(err));
    }
  };

  const confirmImport = () => {
    if (pendingImport) sendToBackend({ type: 'import_scripts', entries: pendingImport });
    setPendingImport(null);
  };

  // Single confirm handler for all three text prompts. PromptDialog passes the
  // already-trimmed value (and guarantees it's non-empty).
  const handlePromptConfirm = (value: string) => {
    if (!prompt) return;
    switch (prompt.kind) {
      case 'newScript':
        sendToBackend({ type: 'create_script', name: value, scriptType: activeType });
        break;
      case 'exportPack':
        exportScriptPack(filtered, value);
        break;
      case 'renameFolder':
        for (const s of grouped.get(prompt.folder) ?? []) {
          sendToBackend({ type: 'update_script', id: s.id, patch: { folder: value } });
        }
        break;
    }
    setPrompt(null);
  };

  // Render the active text prompt. Takes the non-null kind as a parameter so
  // each branch's fields (e.g. `folder`) are captured into plain locals —
  // discriminated-union narrowing doesn't survive into the `validate` closure.
  const renderPrompt = (p: PromptKind) => {
    const onCancel = () => setPrompt(null);
    switch (p.kind) {
      case 'newScript':
        return (
          <PromptDialog
            title={`New ${activeType === 'library' ? 'library' : 'script'}`}
            label={activeType === 'library' ? 'Library name:' : 'Script name:'}
            confirmLabel="Create"
            onConfirm={handlePromptConfirm}
            onCancel={onCancel}
          />
        );
      case 'exportPack':
        return (
          <PromptDialog
            title="Export pack"
            label="Pack name:"
            initialValue="my-scripts"
            confirmLabel="Export"
            onConfirm={handlePromptConfirm}
            onCancel={onCancel}
          />
        );
      case 'renameFolder': {
        const current = p.folder;
        return (
          <PromptDialog
            title="Rename folder"
            label="Folder name:"
            initialValue={current}
            confirmLabel="Rename"
            validate={v => (v === current ? 'Enter a different folder name.' : null)}
            onConfirm={handlePromptConfirm}
            onCancel={onCancel}
          />
        );
      }
    }
  };

  const renderItem = (script: Script) => {
    const info = execInfo[script.id];
    return (
      <ScriptListItem
        key={script.id}
        script={script}
        selected={script.id === selectedId}
        dot={info?.dot ?? 'idle'}
        duration={info?.duration}
        onSelect={() => onSelect(script.id)}
        onEdit={() => onEdit(script.id)}
        sendToBackend={sendToBackend}
      />
    );
  };

  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {/* Type tabs + New button */}
      <div className="ls-list-header">
        <div className="ls-list-type-tabs">
          <button
            className={`ls-type-tab${activeType === 'trigger' ? ' ls-active' : ''}`}
            onClick={() => setActiveType('trigger')}
            title="Scripts"
          >
            <Code2 size={15} />
          </button>
          <button
            className={`ls-type-tab${activeType === 'library' ? ' ls-active' : ''}`}
            onClick={() => setActiveType('library')}
            title="Libraries"
          >
            <BookMarked size={15} />
          </button>
        </div>
        <div className="ls-list-actions">
          <button className="ls-icon-btn" onClick={handleImportClick} title="Import script pack">
            <Upload size={15} />
          </button>
          <button
            className="ls-icon-btn"
            onClick={handleExport}
            title="Export current scripts as pack (Shift+click: save to extension storage)"
            disabled={filtered.length === 0}
          >
            <Download size={15} />
          </button>
          <button
            className="ls-icon-btn"
            onClick={() => openBundleModal(scripts)}
            title="Bundle scripts into a character card"
            disabled={scripts.length === 0}
          >
            <Package size={15} />
          </button>
          <button className="ls-icon-btn" onClick={handleNew} title="New script">
            <Plus size={15} />
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".zip"
          style={{ display: 'none' }}
          onChange={handleImportFile}
        />
      </div>

      {/* List */}
      <div className="ls-list-body">
        {filtered.length === 0 ? (
          <div className="ls-list-empty">
            <FileCode2 size={28} style={{ color: 'var(--lumiverse-border)', margin: '0 auto 8px' }} />
            <p>
              No {activeType === 'library' ? 'libraries' : 'scripts'} yet
            </p>
            <p style={{ marginTop: 4, color: 'var(--lumiverse-text-muted)' }}>
              Click + to create one
            </p>
          </div>
        ) : hasFolders ? (
          /* Grouped by folder with collapsible headers */
          [...grouped.entries()].map(([folder, folderScripts]) => {
            const isCollapsed = collapsedFolders.has(folder);
            return folder === '' ? (
              /* Unfiled scripts — no header, always visible */
              <div key="__unfiled">{folderScripts.map(renderItem)}</div>
            ) : (
              <div key={`folder-${folder}`} className="ls-folder-group">
                <button
                  className="ls-folder-header"
                  onClick={() => toggleFolder(folder)}
                >
                  {isCollapsed
                    ? <ChevronRight size={11} />
                    : <ChevronDown size={11} />}
                  <FolderOpen size={11} />
                  <span className="ls-folder-name">{folder}</span>
                  <span
                    className="ls-folder-rename"
                    title="Rename folder"
                    role="button"
                    onClick={e => {
                      e.stopPropagation();
                      setPrompt({ kind: 'renameFolder', folder });
                    }}
                  >
                    <Pencil size={10} />
                  </span>
                  <span className="ls-folder-count">{folderScripts.length}</span>
                </button>
                {!isCollapsed && folderScripts.map(renderItem)}
              </div>
            );
          })
        ) : (
          /* Flat list (no folders used) */
          filtered.map(renderItem)
        )}
      </div>
    </div>

    {pendingImport !== null && (
      <ConfirmDialog
        title={`Import ${pendingImport.length} script${pendingImport.length === 1 ? '' : 's'}?`}
        icon={<Upload size={15} style={{ color: 'var(--lumiverse-accent, rgb(147, 112, 219))' }} />}
        confirmLabel="Import"
        confirmIcon={<Upload size={12} />}
        onConfirm={confirmImport}
        onCancel={() => setPendingImport(null)}
      >
        <p className="ls-confirm-message">
          Imported scripts are added <strong>disabled</strong> — review and
          enable them manually.
        </p>
        <ul className="ls-confirm-list">
          {pendingImport.map((s, i) => {
            const hooks = s.type === 'trigger' && s.triggers && s.triggers.length > 0 ? s.triggers : null;
            const hasBindings = !!(s.bindings && s.bindings.length > 0);
            return (
              <li key={i} style={{ display: 'block' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                  <span className="ls-confirm-list-type">
                    {s.type === 'library' ? 'Library' : 'Script'}
                  </span>
                  <span className="ls-confirm-list-name">{s.name}</span>
                </div>
                {hooks ? (
                  <div style={{ marginTop: 2, color: 'rgb(150,166,205)', fontSize: 11, lineHeight: 1.4 }}>
                    Event hooks: {hooks.join(', ')}
                  </div>
                ) : null}
                {hasBindings ? (
                  <div style={{ marginTop: 3, color: 'rgb(214,158,46)', fontSize: 11, lineHeight: 1.4 }}>
                    ⚠ Bound to specific characters/chats — those won&apos;t match after import; re-bind it in the script&apos;s settings.
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </ConfirmDialog>
    )}

    {importError !== null && (
      <ConfirmDialog
        title="Import failed"
        icon={<AlertTriangle size={15} style={{ color: 'var(--lumiverse-danger, rgb(246, 130, 130))' }} />}
        variant="danger"
        hideCancel
        confirmLabel="OK"
        onConfirm={() => setImportError(null)}
        onCancel={() => setImportError(null)}
      >
        <p className="ls-confirm-message">{importError}</p>
      </ConfirmDialog>
    )}

    {prompt !== null && renderPrompt(prompt)}
    </>
  );
};
