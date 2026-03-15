import { FC, useState } from 'react';
import { Code2, BookMarked, Plus, FileCode2 } from 'lucide-react';
import type { Script, ScriptType } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ScriptListItem, type ExecutionDot } from './ScriptListItem.js';

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

export const ScriptList: FC<ScriptListProps> = ({
  scripts,
  selectedId,
  execInfo,
  onSelect,
  onEdit,
  sendToBackend,
}) => {
  const [activeType, setActiveType] = useState<ScriptType>('trigger');

  const filtered = scripts.filter(s => s.type === activeType);

  const handleNew = () => {
    const name = window.prompt(activeType === 'library' ? 'Library name:' : 'Script name:');
    if (!name?.trim()) return;
    sendToBackend({ type: 'create_script', name: name.trim(), scriptType: activeType });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {/* Type tabs + New button */}
      <div className="ls-list-header">
        <div className="ls-list-type-tabs">
          <button
            className={`ls-type-tab${activeType === 'trigger' ? ' ls-active' : ''}`}
            onClick={() => setActiveType('trigger')}
          >
            <Code2 size={11} style={{ display: 'inline', marginRight: 4 }} />
            Scripts
          </button>
          <button
            className={`ls-type-tab${activeType === 'library' ? ' ls-active' : ''}`}
            onClick={() => setActiveType('library')}
          >
            <BookMarked size={11} style={{ display: 'inline', marginRight: 4 }} />
            Libraries
          </button>
        </div>
        <button className="ls-icon-btn" onClick={handleNew} title="New script">
          <Plus size={15} />
        </button>
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
        ) : (
          filtered.map(script => {
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
          })
        )}
      </div>
    </div>
  );
};
