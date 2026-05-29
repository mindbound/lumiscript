/**
 * ============================================================================
 * LumiScript Assistant — Memory panel
 * ============================================================================
 * The editable view of Lisa's persistent per-user notes (see
 * `engine/assistant-memory.ts` + `notes/lisa-memory-spec.md`). This is the
 * user-in-the-loop safety valve: everything Lisa remembers is visible here, and
 * the user can add / edit / delete freely. Changes round-trip through the
 * backend (assistant_memory_* messages) and Lisa sees them on her next turn.
 *
 * Controlled component — `notes` is the source of truth (pushed from the
 * backend); local state only tracks the in-progress add/edit forms. Rendered as
 * a full overlay over the assistant modal, toggled by a header button.
 */

import { FC, useState } from 'react';
import { X, Plus, Pencil, Trash2, Check, Combine, Loader2 } from 'lucide-react';
import type { MemoryNote } from '../../engine/assistant-memory.js';

export interface MemoryPanelProps {
  notes: MemoryNote[];
  onAdd: (input: { hook: string; detail?: string; category?: string }) => void;
  onEdit: (id: string, patch: { hook: string; detail?: string; category?: string }) => void;
  onDelete: (id: string) => void;
  onConsolidate: () => void;
  /** True while a consolidation pass is in flight (disables + spins the button). */
  consolidating: boolean;
  /** Last consolidation result / connection-guard message — shown as a banner. */
  status: { kind: 'success' | 'error'; text: string } | null;
  onClose: () => void;
}

export const MemoryPanel: FC<MemoryPanelProps> = ({ notes, onAdd, onEdit, onDelete, onConsolidate, consolidating, status, onClose }) => {
  const [newHook, setNewHook] = useState('');
  const [newDetail, setNewDetail] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editHook, setEditHook] = useState('');
  const [editDetail, setEditDetail] = useState('');
  const [editCategory, setEditCategory] = useState('');

  const submitAdd = () => {
    const hook = newHook.trim();
    if (!hook) return;
    onAdd({
      hook,
      ...(newDetail.trim() ? { detail: newDetail.trim() } : {}),
      ...(newCategory.trim() ? { category: newCategory.trim() } : {}),
    });
    setNewHook(''); setNewDetail(''); setNewCategory('');
  };

  const startEdit = (n: MemoryNote) => {
    setEditingId(n.id);
    setEditHook(n.hook);
    setEditDetail(n.detail ?? '');
    setEditCategory(n.category ?? '');
  };
  const submitEdit = () => {
    if (!editingId) return;
    const hook = editHook.trim();
    if (!hook) return;
    // Full editable-field replace — empty detail/category clears them.
    onEdit(editingId, { hook, detail: editDetail.trim(), category: editCategory.trim() });
    setEditingId(null);
  };

  // Group by category (sorted), mirroring the injected index.
  const groups = new Map<string, MemoryNote[]>();
  for (const n of notes) {
    const cat = n.category?.trim() || 'misc';
    const arr = groups.get(cat);
    if (arr) arr.push(n);
    else groups.set(cat, [n]);
  }
  const sortedCats = [...groups.keys()].sort((a, b) => a.localeCompare(b));

  return (
    <div className="ls-mem-panel">
      <div className="ls-mem-header">
        <span className="ls-mem-title">
          Memory <span className="ls-mem-count">{notes.length}</span>
        </span>
        <button
          type="button"
          className="ls-mem-consolidate"
          onClick={onConsolidate}
          disabled={notes.length === 0 || consolidating}
          title="Consolidate — merge duplicates and tidy up the notes (uses the LLM)"
        >
          {consolidating ? <Loader2 size={12} className="ls-asst-spin" /> : <Combine size={12} />}
          <span>{consolidating ? 'Consolidating…' : 'Consolidate'}</span>
        </button>
        <button type="button" className="ls-asst-iconbtn" onClick={onClose} title="Back to chat">
          <X size={16} />
        </button>
      </div>
      {status && <div className={`ls-mem-status ls-mem-status-${status.kind}`}>{status.text}</div>}

      <p className="ls-mem-intro">
        Durable notes Lisa keeps about you across sessions. The API reference always overrides
        these — they hold your preferences and project context. Edit or delete anything; Lisa
        sees your changes on her next turn.
      </p>

      {/* Add form */}
      <div className="ls-mem-add">
        <input
          className="ls-mem-input"
          placeholder="New note — a short hook…"
          value={newHook}
          onChange={(e) => setNewHook(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); submitAdd(); } }}
        />
        <textarea
          className="ls-mem-textarea"
          placeholder="detail (optional)"
          rows={2}
          value={newDetail}
          onChange={(e) => setNewDetail(e.target.value)}
        />
        <div className="ls-mem-add-row">
          <input
            className="ls-mem-input ls-mem-input-cat"
            placeholder="category (optional)"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="button" className="ls-mem-add-btn" onClick={submitAdd} disabled={!newHook.trim()}>
            <Plus size={13} /> Add note
          </button>
        </div>
      </div>

      {/* List */}
      <div className="ls-mem-list">
        {notes.length === 0 ? (
          <div className="ls-mem-empty">
            No notes yet. Lisa adds them as you work, or add your own above.
          </div>
        ) : (
          sortedCats.map((cat) => (
            <div key={cat} className="ls-mem-group">
              <div className="ls-mem-group-head">{cat}</div>
              {groups.get(cat)!.map((n) => (
                <div key={n.id} className="ls-mem-note">
                  {editingId === n.id ? (
                    <div className="ls-mem-edit">
                      <input
                        className="ls-mem-input"
                        value={editHook}
                        onChange={(e) => setEditHook(e.target.value)}
                        aria-label="Edit hook"
                      />
                      <textarea
                        className="ls-mem-textarea"
                        rows={2}
                        placeholder="detail"
                        value={editDetail}
                        onChange={(e) => setEditDetail(e.target.value)}
                      />
                      <div className="ls-mem-edit-actions">
                        <input
                          className="ls-mem-input ls-mem-input-cat"
                          placeholder="category"
                          value={editCategory}
                          onChange={(e) => setEditCategory(e.target.value)}
                        />
                        <button type="button" className="ls-mem-mini" onClick={() => setEditingId(null)}>
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="ls-mem-mini ls-mem-mini-save"
                          onClick={submitEdit}
                          disabled={!editHook.trim()}
                        >
                          <Check size={11} /> Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="ls-mem-note-main">
                        <span className="ls-mem-note-hook">{n.hook}</span>
                        <span className={`ls-mem-src ls-mem-src-${n.source}`}>
                          {n.source === 'lisa' ? 'Lisa' : 'you'}
                        </span>
                      </div>
                      {n.detail && <div className="ls-mem-note-detail">{n.detail}</div>}
                      <div className="ls-mem-note-actions">
                        <button type="button" className="ls-mem-mini" onClick={() => startEdit(n)} title="Edit">
                          <Pencil size={11} />
                        </button>
                        <button
                          type="button"
                          className="ls-mem-mini ls-mem-mini-danger"
                          onClick={() => onDelete(n.id)}
                          title="Delete"
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
