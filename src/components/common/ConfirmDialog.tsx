/**
 * ============================================================================
 * CONFIRM / ALERT DIALOG (generic, Lumiverse-native)
 * ============================================================================
 * A portal-rendered confirmation dialog that replaces browser-native
 * `window.confirm()` / `window.alert()` across the editor UI. Matches the
 * look + interaction model of the Storage tab's DropConfirmDialog (ESC to
 * cancel, click-outside to cancel, focus trap), but is content-agnostic:
 * the caller supplies the title, icon, body, and button labels.
 *
 * Two modes:
 *   - Confirm (default)  → Cancel + affirmative button. `onConfirm` runs the
 *                          action, `onCancel` (also ESC / backdrop) dismisses.
 *   - Alert (`hideCancel`) → single acknowledgement button. Use for the
 *                          `window.alert()` replacement; wire both
 *                          `onConfirm` and `onCancel` to the same dismiss.
 *
 * The affirmative button's treatment is driven by `variant`:
 *   - 'default' → accent-filled (neutral affirmative, e.g. "Import")
 *   - 'danger'  → red-filled (destructive, e.g. "Delete")
 *
 * Portal note: rendered under <body>, so `--lumiverse-accent` / `-danger`
 * don't always cascade in. The CSS (modal.css → "Generic confirm / alert
 * dialog") carries hard-coded RGB fallbacks for every themed token, same as
 * the other portal modals.
 */

import { useEffect, useRef, type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { getPortalRoot } from '../../host-ui.js';

export interface ConfirmDialogProps {
  /** Header title text. */
  title: string;
  /** Optional icon rendered left of the title (e.g. `<Trash2 size={15} />`). */
  icon?: ReactNode;
  /** Dialog body — message text, detail blocks, lists, etc. */
  children: ReactNode;
  /** Affirmative button label. Defaults to "Confirm". */
  confirmLabel?: string;
  /** Optional icon rendered inside the affirmative button. */
  confirmIcon?: ReactNode;
  /** Cancel button label. Defaults to "Cancel". Ignored when `hideCancel`. */
  cancelLabel?: string;
  /**
   * Affirmative-button treatment:
   *   - 'default' → accent-filled (neutral)
   *   - 'danger'  → red-filled (destructive)
   */
  variant?: 'default' | 'danger';
  /**
   * Alert mode — hide the Cancel button and render a single acknowledgement
   * button (defaults to "OK" unless `confirmLabel` is given). ESC / backdrop
   * still fire `onCancel`, so wire it to the same dismiss as `onConfirm`.
   */
  hideCancel?: boolean;
  /**
   * Override the overlay z-index. The CSS default (`.ls-modal-overlay`, 9999)
   * is right for editor/storage-context dialogs, but when launched from ABOVE
   * that layer the dialog would render BEHIND its trigger. Lisa's modal sits at
   * 10001, so dialogs opened from it must pass a higher value (e.g. 10002).
   */
  overlayZIndex?: number;
  /** Widen the card (e.g. to host a code diff). Default is the narrow confirm width. */
  wide?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  title,
  icon,
  children,
  confirmLabel,
  confirmIcon,
  cancelLabel = 'Cancel',
  variant = 'default',
  hideCancel = false,
  overlayZIndex,
  wide = false,
  onConfirm,
  onCancel,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Close on Escape (matches the other portal modals' behaviour).
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onCancel]);

  // Focus trap — intercept Tab at keydown (BEFORE the browser moves focus)
  // and cycle within the dialog's focusable elements. Mirrors the canonical
  // implementation in DropConfirmDialog (see its comment for why a focusin
  // containment pass is insufficient).
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

  const confirmClass =
    'ls-confirm-btn ' +
    (variant === 'danger' ? 'ls-confirm-btn-danger' : 'ls-confirm-btn-primary');

  const dialog = (
    <div
      className="ls-modal-overlay"
      style={overlayZIndex !== undefined ? { zIndex: overlayZIndex } : undefined}
      onClick={e => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div
        className={'ls-modal-card ls-confirm-card' + (wide ? ' ls-confirm-card-wide' : '')}
        ref={cardRef}
        onClick={e => e.stopPropagation()}
        role="alertdialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">
            {icon}
            {title}
          </span>
          <button className="ls-modal-close" onClick={onCancel} title="Close (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="ls-confirm-body">
          {children}

          <div className="ls-confirm-actions">
            {!hideCancel && (
              <button
                className="ls-confirm-btn ls-confirm-btn-cancel"
                onClick={onCancel}
                autoFocus
              >
                {cancelLabel}
              </button>
            )}
            <button
              className={confirmClass}
              onClick={onConfirm}
              // In alert mode the single button is the only action — focus it.
              autoFocus={hideCancel}
            >
              {confirmIcon}
              {confirmLabel ?? (hideCancel ? 'OK' : 'Confirm')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Portal into the extension-owned, host-registered root (falls back to
  // document.body) so shared components rendered inside the dialog — e.g.
  // HostSelect — pass the host's placement-ownership check. See host-ui.ts.
  return createPortal(dialog, getPortalRoot());
};
