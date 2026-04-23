/**
 * ============================================================================
 * DROP CONFIRMATION DIALOG
 * ============================================================================
 * Single-step confirmation for destroying a collection via the admin
 * panel. Shows the full userStorage path prominently so the user can
 * verify scope + owner + name before committing.
 *
 * Design decisions (per the v0.20.0 plan):
 *   - Single-step click-to-confirm (no "type the name to confirm" gate) —
 *     a mistaken drop is visible immediately in the Collections list
 *     via the debounced `collections_updated` refresh, which is partial
 *     mitigation for the destructive action.
 *   - Full path shown (not just collection name) — per-character and
 *     per-chat scopes can have many collections of the same name; path
 *     disambiguates which one is being dropped.
 *   - Cancel is the default (ESC + backdrop click + Cancel button).
 */

import { useEffect, useRef, type FC } from 'react';
import { createPortal } from 'react-dom';
import { X, Trash2, AlertTriangle } from 'lucide-react';
import type { CollectionSummary } from '../../engine/db-admin.js';

/** Human-readable byte count (duplicated from CollectionsSection — tiny,
 *  not worth a shared helper). */
function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const value = bytes / Math.pow(1024, i);
  return `${i === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[i]}`;
}

const SCOPE_LABEL: Record<CollectionSummary['scope'], string> = {
  script:    'Script-scoped',
  character: 'Character-scoped',
  chat:      'Chat-scoped',
};

export interface DropConfirmDialogProps {
  target: CollectionSummary;
  onConfirm: () => void;
  onCancel: () => void;
}

export const DropConfirmDialog: FC<DropConfirmDialogProps> = ({
  target,
  onConfirm,
  onCancel,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on Escape (matches the other modals' behaviour)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onCancel]);

  // Focus trap — intercept Tab at keydown (BEFORE the browser moves
  // focus), cycle within the dialog's focusable elements. This is the
  // canonical approach; a `focusin` containment pass doesn't work
  // because Tab can land on browser chrome (address bar, page tabs),
  // at which point the document loses focus entirely and no in-page
  // event fires to pull it back.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const card = cardRef.current;
      if (!card) return;

      // Collect interactive, not-disabled, not-tabindex=-1 elements
      // inside the dialog, in DOM order.
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
        // Shift+Tab at (first|outside) → wrap to last
        if (!focusIsInside || active === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab at (last|outside) → wrap to first
        if (!focusIsInside || active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const dialog = (
    <div
      className="ls-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div
        className="ls-modal-card ls-drop-card"
        ref={cardRef}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">
            <Trash2 size={15} style={{ color: 'var(--lumiverse-danger, rgb(246, 130, 130))' }} />
            Drop collection?
          </span>
          <button className="ls-modal-close" onClick={onCancel} title="Cancel (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="ls-drop-body">
          <p className="ls-drop-intro">
            This will permanently delete the collection and all its records.
            Scripts that own this collection can re-create it, but any
            existing records will be gone.
          </p>

          <div className="ls-drop-target">
            <div className="ls-drop-target-name">{target.name}</div>
            <div className="ls-drop-target-meta">
              <span className="ls-drop-target-scope" data-scope={target.scope}>
                {SCOPE_LABEL[target.scope]}
              </span>
              <span className="ls-drop-target-size">{formatBytes(target.sizeBytes)}</span>
            </div>
            <div className="ls-drop-target-path" title={target.path}>{target.path}</div>
          </div>

          <div className="ls-drop-warning">
            <AlertTriangle size={12} />
            <span>This action cannot be undone.</span>
          </div>

          <div className="ls-drop-actions">
            <button
              className="ls-drop-btn ls-drop-btn-cancel"
              onClick={onCancel}
              autoFocus
            >
              Cancel
            </button>
            <button
              className="ls-drop-btn ls-drop-btn-confirm"
              onClick={onConfirm}
            >
              <Trash2 size={12} />
              Drop collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
};
