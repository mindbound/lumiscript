/**
 * ============================================================================
 * UserFilePicker — attach reference files from the reserved "Lisa files" folder
 * ============================================================================
 * A small popover above the composer for attaching text files (from the
 * reserved `userfiles/` userStorage folder) as read-context, mirroring the
 * `@`-mention flow for scripts. Lists eligible files (click to attach/detach),
 * with an inline "add a file" form (name + paste text) and per-file delete so
 * it's a self-contained reference library even without a script writing files.
 *
 * Pure presentational + local form state; all persistence flows through the
 * callbacks (the parent owns attachedPaths + sends the backend messages).
 */

import { FC, useState } from 'react';
import { X, Plus, Trash2, FileText, Loader2, Check } from 'lucide-react';
import { ALLOWED_FILE_EXTENSIONS } from '../../assistant/user-files.js';

export interface PickerFile {
  path: string;
  name: string;
  sizeBytes: number;
}

interface UserFilePickerProps {
  /** Eligible files, or `null` while the first listing is in flight. */
  files: PickerFile[] | null;
  /** Currently-attached file paths (drives the per-row checked state). */
  attachedPaths: string[];
  /** Validation / I/O message from the last add attempt, if any. */
  error: string | null;
  /** Toggle attach/detach for a file path. */
  onToggle: (path: string) => void;
  /** Save a new file to the reserved folder. */
  onAdd: (name: string, content: string) => void;
  /** Delete a file from the reserved folder. */
  onDelete: (path: string) => void;
  onClose: () => void;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export const UserFilePicker: FC<UserFilePickerProps> = ({
  files,
  attachedPaths,
  error,
  onToggle,
  onAdd,
  onDelete,
  onClose,
}) => {
  const [adding, setAdding] = useState(false);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const resetForm = () => { setName(''); setContent(''); setAdding(false); };
  const submitAdd = () => {
    if (!name.trim()) return;
    onAdd(name.trim(), content);
    resetForm();
  };

  return (
    <div className="ls-asst-filepicker" role="dialog" aria-label="Attach a file">
      <div className="ls-asst-filepicker-head">
        <span>Attach a file</span>
        <button
          type="button"
          className="ls-asst-filepicker-close"
          onClick={onClose}
          aria-label="Close file picker"
        >
          <X size={14} />
        </button>
      </div>

      {error && <div className="ls-asst-filepicker-error">{error}</div>}

      <div className="ls-asst-filepicker-list">
        {files === null ? (
          <div className="ls-asst-filepicker-empty">
            <Loader2 size={12} style={{ animation: 'ls-spin 1s linear infinite' }} /> Loading…
          </div>
        ) : files.length === 0 ? (
          <div className="ls-asst-filepicker-empty">
            No files yet. Add one below — or have a script write text to <code>userfiles/</code>.
          </div>
        ) : (
          files.map((f) => {
            const attached = attachedPaths.includes(f.path);
            return (
              <div key={f.path} className={`ls-asst-filerow${attached ? ' ls-asst-filerow-on' : ''}`}>
                <button
                  type="button"
                  className="ls-asst-filerow-main"
                  onClick={() => onToggle(f.path)}
                  title={attached ? 'Detach' : 'Attach as context'}
                >
                  <FileText size={12} />
                  <span className="ls-asst-filerow-name">{f.name}</span>
                  <span className="ls-asst-filerow-size">{formatSize(f.sizeBytes)}</span>
                  {attached && <Check size={12} className="ls-asst-filerow-check" />}
                </button>
                <button
                  type="button"
                  className="ls-asst-filerow-del"
                  onClick={() => onDelete(f.path)}
                  title="Delete file"
                  aria-label={`Delete ${f.name}`}
                >
                  <Trash2 size={11} />
                </button>
              </div>
            );
          })
        )}
      </div>

      {adding ? (
        <div className="ls-asst-filepicker-add">
          <input
            className="ls-asst-filepicker-name"
            placeholder="name.md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <textarea
            className="ls-asst-filepicker-content"
            placeholder="Paste the reference text…"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
          <div className="ls-asst-filepicker-add-actions">
            <button type="button" className="ls-asst-fp-ghost" onClick={resetForm}>Cancel</button>
            <button type="button" className="ls-asst-fp-accent" onClick={submitAdd} disabled={!name.trim()}>
              Add file
            </button>
          </div>
          <div className="ls-asst-filepicker-hint">
            Allowed: {ALLOWED_FILE_EXTENSIONS.slice(0, 6).join(' ')} … · 256 KB max
          </div>
        </div>
      ) : (
        <button type="button" className="ls-asst-filepicker-addbtn" onClick={() => setAdding(true)}>
          <Plus size={12} /> Add a file
        </button>
      )}
    </div>
  );
};
