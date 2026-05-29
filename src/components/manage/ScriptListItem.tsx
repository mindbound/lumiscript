import { FC, useState } from 'react';
import { Copy, Trash2, ToggleLeft, ToggleRight, UserRound, MessageSquare, Pencil, Play, Loader2, AlertTriangle } from 'lucide-react';
import type { Script } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ConfirmDialog } from '../common/ConfirmDialog.js';

export type ExecutionDot = 'idle' | 'running' | 'success' | 'error';

interface ScriptListItemProps {
  script: Script;
  selected: boolean;
  dot: ExecutionDot;
  duration?: number;
  onSelect: () => void;
  onEdit: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

const DOT_CLASS: Record<ExecutionDot, string> = {
  idle:    'ls-item-dot',
  running: 'ls-item-dot ls-dot-running',
  success: 'ls-item-dot ls-dot-success',
  error:   'ls-item-dot ls-dot-error',
};

export const ScriptListItem: FC<ScriptListItemProps> = ({
  script,
  selected,
  dot,
  duration,
  onSelect,
  onEdit,
  sendToBackend,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    sendToBackend({ type: 'update_script', id: script.id, patch: { enabled: !script.enabled } });
  };

  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    sendToBackend({ type: 'duplicate_script', id: script.id });
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setConfirmDelete(true);
  };

  const confirmDeleteNow = () => {
    setConfirmDelete(false);
    sendToBackend({ type: 'delete_script', id: script.id });
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const isRunning = dot === 'running';

  const handleRun = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isRunning || !script.enabled) return;
    sendToBackend({ type: 'run_script', id: script.id });
  };

  const bindingCount = script.bindings?.length ?? 0;

  return (
    <>
    <div
      className={`ls-item${selected ? ' ls-selected' : ''}${!script.enabled && script.type !== 'library' ? ' ls-disabled' : ''}`}
      onClick={onSelect}
    >
      {/* Execution status dot */}
      <span className={DOT_CLASS[dot]} title={dot} />

      {/* Name + meta */}
      <div className="ls-item-body">
        <div className="ls-item-name" title={script.name}>{script.name}</div>
        <div className="ls-item-meta">
          {script.type !== 'library' && (
            <span>{script.enabled ? 'Enabled' : 'Disabled'}</span>
          )}
          {duration !== undefined && dot !== 'running' && (
            <span style={{ color: dot === 'error' ? '#ef4444' : 'var(--lumiverse-text-muted)' }}>
              {duration}ms
            </span>
          )}
        </div>

        {/* Binding badges — own row so they don't crowd the meta or action controls */}
        {script.type !== 'library' && bindingCount > 0 && (
          <div className="ls-item-bindings">
            {script.bindings!.map((b, i) => (
              <span key={i} className="ls-binding-badge">
                {b.type === 'character'
                  ? <UserRound size={9} />
                  : <MessageSquare size={9} />}
                <span style={{ maxWidth: 70, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {b.displayName}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Actions (shown on hover via CSS) */}
      <div className="ls-item-actions">
        {/* Edit button — always first, most prominent */}
        <button className="ls-icon-btn" onClick={handleEdit} title="Edit script">
          <Pencil size={13} />
        </button>

        {/* Run button — manual trigger, mirrors the editor's Run affordance.
            Hidden for library scripts (which are loaded via script.require()
            rather than executed directly); disabled when the script is
            disabled (the toggle gates manual runs alongside trigger fires)
            or while a run is already in flight. */}
        {script.type !== 'library' && (
          <button
            className="ls-icon-btn"
            onClick={handleRun}
            disabled={!script.enabled || isRunning}
            title={
              !script.enabled ? 'Enable to run'
              : isRunning ? 'Running…'
              : 'Run script'
            }
          >
            {isRunning
              ? <Loader2 size={13} style={{ animation: 'ls-spin 1s linear infinite' }} />
              : <Play size={13} />}
          </button>
        )}

        {script.type !== 'library' && (
          <button className="ls-icon-btn" onClick={handleToggle}
            title={script.enabled ? 'Disable' : 'Enable'}>
            {script.enabled
              ? <ToggleRight size={14} style={{ color: 'var(--lumiverse-accent)' }} />
              : <ToggleLeft  size={14} />}
          </button>
        )}
        <button className="ls-icon-btn" onClick={handleDuplicate} title="Duplicate">
          <Copy size={13} />
        </button>
        <button className="ls-icon-btn ls-danger" onClick={handleDelete} title="Delete">
          <Trash2 size={13} />
        </button>
      </div>
    </div>

    {confirmDelete && (
      <ConfirmDialog
        title={`Delete ${script.type === 'library' ? 'library' : 'script'}?`}
        icon={<Trash2 size={15} style={{ color: 'var(--lumiverse-danger, rgb(246, 130, 130))' }} />}
        variant="danger"
        confirmLabel="Delete"
        confirmIcon={<Trash2 size={12} />}
        onConfirm={confirmDeleteNow}
        onCancel={() => setConfirmDelete(false)}
      >
        <p className="ls-confirm-message">
          This will permanently delete the {script.type === 'library' ? 'library' : 'script'}{' '}
          <strong>{script.name}</strong>.
        </p>
        <div className="ls-confirm-warning">
          <AlertTriangle size={12} />
          <span>This action cannot be undone.</span>
        </div>
      </ConfirmDialog>
    )}
    </>
  );
};
