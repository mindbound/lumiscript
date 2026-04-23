/**
 * ============================================================================
 * INSPECT MODAL
 * ============================================================================
 * Full-screen portaled modal for viewing the records in a single
 * collection. Features:
 *   - Per-field text filter (shallow, case-insensitive) — debounced 150ms
 *     before dispatching a new `inspect_collection` request
 *   - Pagination via offset/limit (50 records per page by default)
 *   - Lightweight virtualization via `content-visibility: auto` — the
 *     browser skips offscreen row layout without a library dependency
 *   - ESC closes; click on backdrop closes; X button closes
 *
 * State ownership: `path`, `records`, `total` are owned by
 * LumiScriptPanel (hydrated via `collection_records` messages). This
 * component owns its internal `filter` + `page` state and dispatches
 * requests via `sendToBackend` whenever those change.
 */

import { useState, useEffect, useMemo, type FC } from 'react';
import { createPortal } from 'react-dom';
import { X, Database, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { DbRecord } from '../../types/script.js';

/** Page size used in the panel UI. Backend caps record counts anyway. */
const PAGE_SIZE = 50;
/** Filter input debounce — 150ms feels responsive without thrashing. */
const FILTER_DEBOUNCE_MS = 150;

export interface InspectModalProps {
  /** Path of the collection being inspected. Used to display + re-dispatch. */
  path: string;
  /** Records for the current page; `null` while loading. */
  records: DbRecord[] | null;
  /** Post-filter, pre-pagination count — drives "page N of M matching" UX. */
  total: number;
  /** Any change to this value triggers a re-fetch with the current
   *  filter + page. Parent bumps it on every `collections_updated` hint
   *  so the modal reflects concurrent mutations from other scripts. */
  refreshToken: number;
  onClose: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const InspectModal: FC<InspectModalProps> = ({
  path,
  records,
  total,
  refreshToken,
  onClose,
  sendToBackend,
}) => {
  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState('');
  const [page, setPage] = useState(0);

  // Debounce the filter input so we don't re-dispatch on every keystroke.
  useEffect(() => {
    const id = setTimeout(() => setDebouncedFilter(filter), FILTER_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [filter]);

  // Reset to page 0 when the filter changes — stale pagination makes no sense.
  useEffect(() => {
    setPage(0);
  }, [debouncedFilter]);

  // Dispatch `inspect_collection` whenever path / filter / page / refresh
  // token changes. Also runs on mount to seed the initial load.
  useEffect(() => {
    sendToBackend({
      type: 'inspect_collection',
      path,
      textFilter: debouncedFilter || undefined,
      limit:  PAGE_SIZE,
      offset: page * PAGE_SIZE,
    });
  }, [path, debouncedFilter, page, refreshToken, sendToBackend]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const pageFirst = total === 0 ? 0 : page * PAGE_SIZE + 1;
  const pageLast  = Math.min(total, (page + 1) * PAGE_SIZE);

  // Pull a display-friendly collection name from the path. Examples:
  //   db/scripts/s-1/rolls.json          → rolls (script)
  //   db/characters/c/s/notes.json       → notes (character)
  const displayName = useMemo(() => {
    const m = path.match(/\/([^/]+)\.json$/);
    return m ? m[1] : path;
  }, [path]);

  const modal = (
    <div
      className="ls-modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="ls-modal-card ls-inspect-card" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="ls-modal-header">
          <span className="ls-modal-title">
            <Database size={15} style={{ color: 'var(--lumiverse-accent)' }} />
            <span className="ls-inspect-title-name">{displayName}</span>
            <span className="ls-inspect-title-path" title={path}>{path}</span>
          </span>
          <button className="ls-modal-close" onClick={onClose} title="Close (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* Toolbar: filter + pagination controls */}
        <div className="ls-inspect-toolbar">
          <div className="ls-inspect-search">
            <Search size={12} />
            <input
              type="text"
              className="ls-inspect-search-input"
              placeholder="Filter records (shallow string match)…"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              autoFocus
            />
          </div>
          <div className="ls-inspect-pager">
            <span className="ls-inspect-pager-status">
              {total === 0
                ? 'No matching records'
                : <>Showing <strong>{pageFirst}</strong>&ndash;<strong>{pageLast}</strong> of <strong>{total}</strong></>}
            </span>
            <button
              className="ls-inspect-pager-btn"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              title="Previous page"
            >
              <ChevronLeft size={12} />
            </button>
            <button
              className="ls-inspect-pager-btn"
              onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
              disabled={page >= pageCount - 1}
              title="Next page"
            >
              <ChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Records body */}
        <div className="ls-inspect-body">
          {records === null ? (
            <div className="ls-inspect-empty">Loading records…</div>
          ) : records.length === 0 ? (
            <div className="ls-inspect-empty">
              {total === 0 && debouncedFilter
                ? `No records match “${debouncedFilter}”`
                : total === 0
                  ? 'Collection is empty'
                  : 'No records on this page'}
            </div>
          ) : (
            <div className="ls-inspect-records">
              {records.map((r) => (
                <div key={r.id as string} className="ls-inspect-record">
                  <div className="ls-inspect-record-id" title={`id: ${r.id}`}>
                    <code>{String(r.id).slice(0, 12)}…</code>
                    <span className="ls-inspect-record-timestamps">
                      created <time title={new Date(r.createdAt as number).toISOString()}>
                        {formatRelative(r.createdAt as number)}
                      </time>
                      {r.updatedAt !== r.createdAt && (
                        <>
                          {' · '}updated <time title={new Date(r.updatedAt as number).toISOString()}>
                            {formatRelative(r.updatedAt as number)}
                          </time>
                        </>
                      )}
                    </span>
                  </div>
                  <pre className="ls-inspect-record-json">{prettyPrint(r)}</pre>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

// ─── helpers ─────────────────────────────────────────────────────────────────

function formatRelative(ts: number): string {
  if (!Number.isFinite(ts) || ts <= 0) return '—';
  const diff = Date.now() - ts;
  if (diff < 60_000)        return 'just now';
  if (diff < 3_600_000)     return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000)    return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 30 * 86_400_000) return `${Math.floor(diff / 86_400_000)}d ago`;
  return new Date(ts).toISOString().slice(0, 10);
}

/**
 * Pretty-print a record excluding the reserved fields (id / createdAt /
 * updatedAt). Those already show in the row header — repeating them in
 * the JSON body wastes space and draws the eye away from user data.
 */
function prettyPrint(record: DbRecord): string {
  const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, ...user } = record;
  void _id; void _createdAt; void _updatedAt;
  try {
    return JSON.stringify(user, null, 2);
  } catch {
    return String(record);
  }
}
