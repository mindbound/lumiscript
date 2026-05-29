/**
 * ============================================================================
 * PROMPT DIALOG (generic, Lumiverse-native)
 * ============================================================================
 * Text-input replacement for browser-native `window.prompt()`. Same portal +
 * ESC + backdrop + focus-trap model as ConfirmDialog, plus:
 *   - the input is auto-focused and its initial value pre-selected (so a
 *     supplied default is easy to overwrite),
 *   - Enter submits (when the value passes validation),
 *   - an optional `validate` callback gates the confirm button and surfaces
 *     an inline error.
 *
 * `onConfirm` receives the TRIMMED value. Empty-after-trim is always rejected
 * (confirm stays disabled), so callers never receive an empty string.
 */

import { useEffect, useRef, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface PromptDialogProps {
  /** Header title (e.g. "New script", "Rename folder"). */
  title: string;
  /** Label shown above the input (e.g. "Script name:"). */
  label?: string;
  /** Pre-filled value; selected on open so it's easy to replace. */
  initialValue?: string;
  /** Placeholder shown when the input is empty. */
  placeholder?: string;
  /** Confirm button label. Defaults to "OK". */
  confirmLabel?: string;
  /** Cancel button label. Defaults to "Cancel". */
  cancelLabel?: string;
  /**
   * Optional extra validation, run against the trimmed value. Return an error
   * message to block submission (disables confirm + shows the message), or
   * null when valid. Empty values are always blocked regardless.
   */
  validate?: (value: string) => string | null;
  /** Receives the trimmed value. */
  onConfirm: (value: string) => void;
  onCancel: () => void;
}

export const PromptDialog: FC<PromptDialogProps> = ({
  title,
  label,
  initialValue = '',
  placeholder,
  confirmLabel = 'OK',
  cancelLabel = 'Cancel',
  validate,
  onConfirm,
  onCancel,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);

  // Focus + select the input on open — a supplied default is easy to overwrite.
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.focus();
    el.select();
  }, []);

  // Close on Escape.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onCancel]);

  // Focus trap — same canonical implementation as ConfirmDialog /
  // DropConfirmDialog (intercept Tab at keydown, cycle within the card).
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
        if (!focusIsInside || active === first) { e.preventDefault(); last.focus(); }
      } else {
        if (!focusIsInside || active === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const trimmed = value.trim();
  const isEmpty = trimmed.length === 0;
  const customError = !isEmpty && validate ? validate(trimmed) : null;
  const canSubmit = !isEmpty && customError === null;

  const submit = () => {
    if (canSubmit) onConfirm(trimmed);
  };

  const dialog = (
    <div
      className="ls-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onCancel(); }}
    >
      <div
        className="ls-modal-card ls-confirm-card"
        ref={cardRef}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">{title}</span>
          <button className="ls-modal-close" onClick={onCancel} title="Cancel (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="ls-confirm-body">
          {label && <div className="ls-prompt-label">{label}</div>}
          <input
            ref={inputRef}
            className="ls-prompt-input"
            type="text"
            value={value}
            placeholder={placeholder}
            aria-label={label ?? title}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } }}
          />
          {customError && <p className="ls-prompt-error">{customError}</p>}

          <div className="ls-confirm-actions">
            <button
              className="ls-confirm-btn ls-confirm-btn-cancel"
              onClick={onCancel}
            >
              {cancelLabel}
            </button>
            <button
              className="ls-confirm-btn ls-confirm-btn-primary"
              onClick={submit}
              disabled={!canSubmit}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
};
