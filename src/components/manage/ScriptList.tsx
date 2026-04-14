import { FC, useRef, useState } from 'react';
import { Code2, BookMarked, Plus, Upload, Download, FileCode2, FolderOpen, ChevronDown, ChevronRight, Pencil } from 'lucide-react';
import type { Script, ScriptType } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ScriptListItem, type ExecutionDot } from './ScriptListItem.js';
import { exportScriptPack } from '../../utils/pack-export.js';
import { parseScriptPack } from '../../utils/pack-import.js';

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

/** Group scripts by folder. Scripts without a folder go into the '' group. */
function groupByFolder(scripts: Script[]): Map<string, Script[]> {
  const groups = new Map<string, Script[]>();
  for (const s of scripts) {
    const folder = s.folder ?? '';
    if (!groups.has(folder)) groups.set(folder, []);
    groups.get(folder)!.push(s);
  }
  // Sort: unfiled first, then alphabetical folder names
  const sorted = new Map<string, Script[]>();
  if (groups.has('')) sorted.set('', groups.get('')!);
  const folderNames = [...groups.keys()].filter(k => k !== '').sort();
  for (const name of folderNames) sorted.set(name, groups.get(name)!);
  return sorted;
}

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
    const name = window.prompt(activeType === 'library' ? 'Library name:' : 'Script name:');
    if (!name?.trim()) return;
    sendToBackend({ type: 'create_script', name: name.trim(), scriptType: activeType });
  };

  const handleExport = () => {
    if (filtered.length === 0) return;
    const packName = window.prompt('Pack name:', 'my-scripts');
    if (!packName?.trim()) return;
    exportScriptPack(filtered, packName.trim());
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
      const names = entries.map(s => `  ${s.type === 'library' ? '[L]' : '[T]'} ${s.name}`).join('\n');
      const confirmed = window.confirm(
        `Import ${entries.length} script${entries.length > 1 ? 's' : ''}?\n\n${names}\n\nImported scripts will be disabled. Review and enable them manually.`,
      );
      if (!confirmed) return;
      sendToBackend({ type: 'import_scripts', entries });
    } catch (err) {
      window.alert(`Import failed: ${err instanceof Error ? err.message : String(err)}`);
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
            title="Export current scripts as pack"
            disabled={filtered.length === 0}
          >
            <Download size={15} />
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
            <p>No {activeType === 'library' ? 'libraries' : 'scripts'} yet</p>
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
                      const newName = window.prompt('Rename folder:', folder);
                      if (newName === null || newName.trim() === '' || newName.trim() === folder) return;
                      for (const s of folderScripts) {
                        sendToBackend({ type: 'update_script', id: s.id, patch: { folder: newName.trim() } });
                      }
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
  );
};
