/**
 * ============================================================================
 * EDIT RECORD MODAL
 * ============================================================================
 * Compact JSON editor for a single collection record. Reached via the
 * Pencil action in the InspectModal record header.
 *
 * Design decisions:
 *   - Reserved fields (`id` / `createdAt` / `updatedAt`) are NOT shown in
 *     the editor (same as the InspectModal's pretty-print) — they're
 *     immutable from the user's perspective and would just create
 *     surface area for confusion. The backend strips them again
 *     defensively if a re-paste includes them.
 *   - Save runs JSON.parse client-side first; parse errors render
 *     inline below the textarea so users can fix without losing
 *     context. Backend errors (record gone, size cap, write fail)
 *     surface via toast — they're rare and need cross-tool visibility.
 *   - Optimistic close: on a successful local parse, dispatch the
 *     `update_record` and close. The InspectModal's existing
 *     `refreshToken` bump (driven by the broadcast forwarder) refreshes
 *     the records grid; if the backend rejects, the toast tells the
 *     user and the unchanged record stays visible.
 *   - Same focus-trap + ESC + backdrop close pattern as DropConfirmDialog
 *     for consistency across the storage modals.
 */

import { useEffect, useRef, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import { getPortalRoot } from '../../host-ui.js';
import { X, Save, Pencil, AlertTriangle } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { DbRecord } from '../../types/script.js';
import { highlightJson } from './utils.js';
import { prettyPrintUserData, parseRecordDraft } from './record-logic.js';

export interface EditRecordModalProps {
  /** Path of the collection that owns the record. */
  path: string;
  /** Record being edited — used for the initial textarea value + the
   *  recordId echoed back in the `update_record` request. */
  record: DbRecord;
  onClose: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const EditRecordModal: FC<EditRecordModalProps> = ({
  path,
  record,
  onClose,
  sendToBackend,
}) => {
  const [draft, setDraft] = useState(() => prettyPrintUserData(record));
  const [parseError, setParseError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  /**
   * Sibling `<pre>` rendering the highlighted JSON underneath the
   * (transparent-text) textarea. Scroll position has to be kept in
   * lock-step with the textarea so the highlighted text stays
   * registered against what the user is typing — see the onScroll
   * handler below.
   */
  const highlightRef = useRef<HTMLPreElement>(null);

  // Close on Escape (matches the other storage modals)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Focus trap — same approach as DropConfirmDialog (intercept Tab at
  // keydown so we can wrap focus within the dialog even when the
  // browser would land on chrome). Worth duplicating: focus traps need
  // to live close to the component to handle nested modal cases
  // correctly.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const card = cardRef.current;
      if (!card) return;
      const focusables = Array.from(
        card.querySelectorAll<HTMLElement>(
          'button:not(:disabled), [href], input:not(:disabled),' +
          ' select:not(:disabled), textarea:not(:disabled),' +
          ' [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      const active = document.activeElement as HTMLElement | null;
      const focusIsInside = active !== null && card.contains(active);
      if (e.shiftKey) {
        if (!focusIsInside || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (!focusIsInside || active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Auto-focus the textarea on mount so the user can start editing
  // immediately. Defer to next microtask so the portal is mounted.
  useEffect(() => {
    const id = setTimeout(() => textareaRef.current?.focus(), 0);
    return () => clearTimeout(id);
  }, []);

  const handleSave = () => {
    const result = parseRecordDraft(draft);
    if (!result.ok) {
      setParseError(result.error);
      return;
    }
    setParseError(null);
    sendToBackend({
      type:     'update_record',
      path,
      recordId: String(record.id),
      patch:    result.patch,
    });
    onClose();
  };

  // Cmd/Ctrl + Enter to save — common shortcut in JSON editors
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };

  const idStr = String(record.id);

  const dialog = (
    <div
      className="ls-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="ls-modal-card ls-edit-card"
        ref={cardRef}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">
            <Pencil size={14} style={{ color: 'var(--lumiverse-accent)' }} />
            Edit record
          </span>
          <button className="ls-modal-close" onClick={onClose} title="Cancel (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="ls-edit-body">
          <div className="ls-edit-meta">
            <span className="ls-edit-meta-label">id:</span>
            <code className="ls-edit-meta-value" title={idStr}>{idStr}</code>
          </div>
          <p className="ls-edit-hint">
            Reserved fields (<code>id</code>, <code>createdAt</code>,{' '}
            <code>updatedAt</code>) are managed automatically and aren&rsquo;t
            shown here. <code>updatedAt</code> will be re-stamped on save.
          </p>

          {/* Live syntax-highlighted editor: a transparent-text
              textarea sits on top of a `<pre>` rendering the same
              content with `highlightJson` token spans. The textarea
              owns input, focus, selection, and the caret; the `<pre>`
              is purely visual (`pointer-events: none; aria-hidden`).
              Scroll positions are kept in lock-step via onScroll so
              the visual highlighted text stays registered against
              what the user is typing in long records.

              Trailing `\n` on the highlighted content matches a
              well-known textarea quirk: textareas implicitly render
              a trailing line so the caret has somewhere to land after
              a final newline; without the `\n` here, the highlighter
              would be one line short and the bottom of the editor
              would visibly mis-align as the user types.
            */}
          <div className="ls-edit-textarea-wrap">
            <pre
              ref={highlightRef}
              className="ls-edit-textarea-highlight"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: highlightJson(draft) + '\n' }}
            />
            <textarea
              ref={textareaRef}
              className="ls-edit-textarea"
              value={draft}
              onChange={e => { setDraft(e.target.value); if (parseError) setParseError(null); }}
              onKeyDown={handleKeyDown}
              onScroll={e => {
                const pre = highlightRef.current;
                if (!pre) return;
                pre.scrollTop  = e.currentTarget.scrollTop;
                pre.scrollLeft = e.currentTarget.scrollLeft;
              }}
              spellCheck={false}
              autoCorrect="off"
              autoCapitalize="off"
            />
          </div>

          {parseError && (
            <div className="ls-edit-error" role="alert">
              <AlertTriangle size={12} />
              <span>{parseError}</span>
            </div>
          )}

          <div className="ls-drop-actions">
            <button
              className="ls-drop-btn ls-drop-btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="ls-drop-btn ls-edit-btn-save"
              onClick={handleSave}
              title="Save (Ctrl/Cmd+Enter)"
            >
              <Save size={12} />
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Extension-owned, host-registered portal root (see host-ui.ts) so shared
  // components rendered inside keep working; falls back to document.body.
  return createPortal(dialog, getPortalRoot());
};
