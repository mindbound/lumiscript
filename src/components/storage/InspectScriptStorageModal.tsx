/**
 * ============================================================================
 * INSPECT SCRIPT STORAGE MODAL
 * ============================================================================
 * Full-screen portaled modal for viewing the key/value entries in a
 * single script's `api.scriptStorage` slot. v1.0.0-rc.6+.
 *
 * Lighter than the Collections InspectModal — `api.scriptStorage` has
 * no record schema, no createdAt/updatedAt, no scope dimension, no
 * stats / jsonquery modes. Just key/value rows with copy + delete.
 *
 * Features:
 *   - Per-key substring filter (case-insensitive)
 *   - Copy-key + Copy-value-JSON actions on every row
 *   - Per-entry delete with inline two-step confirm (matches
 *     InspectModal's per-record delete UX — 4s arm timeout)
 *   - Manual refresh button (independent of the `script_storage_updated`
 *     hint, useful when actively watching a script write)
 *   - Syntax-highlighted JSON for the value column
 *   - ESC closes; backdrop click closes; X button closes
 *
 * Uses the shared `ls-modal-overlay` / `ls-modal-card` / `ls-modal-header`
 * shell classes from modal.css (same as the Collections InspectModal),
 * with `ls-inspect-card` layered for the inspect-specific width/height,
 * and inner `ls-scriptstorage-*` classes for entry-list styling.
 *
 * State ownership: `scriptId` + `entries` are owned by LumiScriptPanel
 * (hydrated via `script_storage_entries` messages). This component owns
 * its internal `filter` + `armedDeleteKey` state.
 */

import { useEffect, useMemo, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import { X, HardDrive, Search, RefreshCw, Copy, Braces, Trash2, AlertTriangle } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { Script } from '../../types/script.js';
import { copyToClipboard, highlightJson } from './utils.js';

/** How long the "Copied" tick stays visible after a successful copy. */
const COPY_FEEDBACK_MS = 1200;
/** How long the inline two-step delete confirm pill stays armed. */
const DELETE_CONFIRM_TIMEOUT_MS = 4000;

export interface InspectScriptStorageModalProps {
  /** scriptId being inspected. Used in the header + dispatch. */
  scriptId: string;
  /** Script list for owner-name resolution in the header. */
  scripts: Script[];
  /** Entries for the current script; `null` while loading;
   *  empty array means the slot vanished between enumerate + inspect
   *  (script cleared it, was disabled, etc.). */
  entries: Array<{ key: string; value: unknown }> | null;
  /** Bumps on every `script_storage_updated` hint — forces re-fetch. */
  refreshToken: number;
  onClose: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const InspectScriptStorageModal: FC<InspectScriptStorageModalProps> = ({
  scriptId,
  scripts,
  entries,
  refreshToken,
  onClose,
  sendToBackend,
}) => {
  const [filter, setFilter] = useState('');
  /** Per-row delete-confirm state. */
  const [armedDeleteKey, setArmedDeleteKey] = useState<string | null>(null);
  /** Per-row copy-feedback state. */
  const [recentlyCopied, setRecentlyCopied] = useState<{ key: string; kind: 'key' | 'value' } | null>(null);

  // Resolve owner name for header.
  const ownerName = useMemo(() => {
    const s = scripts.find(s => s.id === scriptId);
    return s ? s.name : `(${scriptId.slice(0, 8)}…)`;
  }, [scripts, scriptId]);

  // Dispatch the initial fetch + refetch on token bump.
  useEffect(() => {
    sendToBackend({ type: 'inspect_script_storage', scriptId });
  }, [scriptId, refreshToken, sendToBackend]);

  // Close on Escape.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Auto-cancel any armed delete after the timeout.
  useEffect(() => {
    if (armedDeleteKey === null) return;
    const t = setTimeout(() => setArmedDeleteKey(null), DELETE_CONFIRM_TIMEOUT_MS);
    return () => clearTimeout(t);
  }, [armedDeleteKey]);

  // Filter visible entries client-side. `entries` is bounded by the
  // 1 MB per-script cap (well under 10k rows worst-case) so filtering
  // on every keystroke is fast.
  const visibleEntries = useMemo(() => {
    if (!entries) return null;
    const q = filter.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(e => e.key.toLowerCase().includes(q));
  }, [entries, filter]);

  const totalCount   = entries?.length ?? 0;
  const visibleCount = visibleEntries?.length ?? 0;
  const isFiltered   = filter.trim().length > 0;

  const handleCopyKey = async (key: string) => {
    const ok = await copyToClipboard(key);
    if (ok) {
      setRecentlyCopied({ key, kind: 'key' });
      setTimeout(() => setRecentlyCopied(null), COPY_FEEDBACK_MS);
    }
  };

  const handleCopyValue = async (key: string, value: unknown) => {
    const ok = await copyToClipboard(JSON.stringify(value, null, 2));
    if (ok) {
      setRecentlyCopied({ key, kind: 'value' });
      setTimeout(() => setRecentlyCopied(null), COPY_FEEDBACK_MS);
    }
  };

  const handleDeleteArm = (key: string) => {
    setArmedDeleteKey(prev => prev === key ? null : key);
  };

  const handleDeleteConfirm = (key: string) => {
    sendToBackend({ type: 'delete_script_storage_entry', scriptId, key });
    setArmedDeleteKey(null);
    // The `script_storage_updated` debounced hint will trigger a re-fetch
    // in the parent, which bumps refreshToken, which re-dispatches the
    // inspect request — entry disappears from the list within ~200 ms.
  };

  const modal = (
    <div
      className="ls-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="ls-modal-card ls-inspect-card"
        onClick={e => e.stopPropagation()}
      >
        {/* Header — shared shell classes ─────────────────────────── */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">
            <HardDrive size={15} style={{ color: 'var(--lumiverse-accent)' }} />
            <span className="ls-inspect-title-name">{ownerName}</span>
            <span className="ls-inspect-title-path">
              scriptStorage · {isFiltered ? `${visibleCount}/${totalCount}` : `${totalCount} entr${totalCount === 1 ? 'y' : 'ies'}`}
            </span>
          </span>
          <button
            className="ls-modal-close"
            onClick={() => sendToBackend({ type: 'inspect_script_storage', scriptId })}
            title="Refresh entries"
            style={{ marginRight: 4 }}
          >
            <RefreshCw size={14} />
          </button>
          <button
            className="ls-modal-close"
            onClick={onClose}
            title="Close (Esc)"
          >
            <X size={16} />
          </button>
        </div>

        {/* Filter row ─────────────────────────────────────────────── */}
        <div className="ls-scriptstorage-filter" style={{ padding: '8px 16px', borderBottom: '1px solid var(--lumiverse-border)' }}>
          <div className="ls-scriptstorage-filter-search">
            <Search size={10} />
            <input
              type="text"
              className="ls-scriptstorage-filter-input"
              placeholder="Filter by key…"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            />
            {filter && (
              <button
                className="ls-scriptstorage-filter-clear"
                title="Clear filter"
                onClick={() => setFilter('')}
              >
                <X size={9} />
              </button>
            )}
          </div>
        </div>

        {/* Body — scrollable entries list ────────────────────────── */}
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '8px 12px' }}>
          {entries === null ? (
            <div style={{ padding: '16px', color: 'var(--lumiverse-text-muted)', fontSize: 12 }}>
              Loading entries…
            </div>
          ) : entries.length === 0 ? (
            <div style={{ padding: '16px', color: 'var(--lumiverse-text-muted)', fontSize: 12 }}>
              No entries — this script's storage slot is empty (or was cleared
              between the section list and your inspect click).
            </div>
          ) : visibleCount === 0 ? (
            <div style={{ padding: '16px', color: 'var(--lumiverse-text-muted)', fontSize: 12 }}>
              No entries match the filter.
            </div>
          ) : (
            <div className="ls-scriptstorage-entries">
              {visibleEntries!.map(({ key, value }) => {
                const isArmed = armedDeleteKey === key;
                const copiedKey   = recentlyCopied?.key === key && recentlyCopied?.kind === 'key';
                const copiedValue = recentlyCopied?.key === key && recentlyCopied?.kind === 'value';
                const valueJson = JSON.stringify(value, null, 2);
                return (
                  <div key={key} className="ls-scriptstorage-entry">
                    <div className="ls-scriptstorage-entry-key-row">
                      <span className="ls-scriptstorage-entry-key" title={key}>{key}</span>
                      <div className="ls-scriptstorage-entry-actions">
                        <button
                          className="ls-scriptstorage-action"
                          title={copiedKey ? 'Copied!' : 'Copy key'}
                          onClick={() => handleCopyKey(key)}
                        >
                          <Copy size={10} />
                        </button>
                        <button
                          className="ls-scriptstorage-action"
                          title={copiedValue ? 'Copied!' : 'Copy value (JSON)'}
                          onClick={() => handleCopyValue(key, value)}
                        >
                          <Braces size={10} />
                        </button>
                        {!isArmed ? (
                          <button
                            className="ls-scriptstorage-action ls-scriptstorage-action-danger"
                            title="Delete this entry"
                            onClick={() => handleDeleteArm(key)}
                          >
                            <Trash2 size={10} />
                          </button>
                        ) : (
                          <button
                            className="ls-scriptstorage-action ls-scriptstorage-action-confirm"
                            title="Click to confirm deletion (auto-cancels in 4s)"
                            onClick={() => handleDeleteConfirm(key)}
                          >
                            <AlertTriangle size={10} /> Confirm?
                          </button>
                        )}
                      </div>
                    </div>
                    <pre
                      className="ls-scriptstorage-entry-value"
                      style={{ contentVisibility: 'auto' }}
                      dangerouslySetInnerHTML={{ __html: highlightJson(valueJson) }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};
