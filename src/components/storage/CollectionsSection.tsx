/**
 * ============================================================================
 * COLLECTIONS SECTION
 * ============================================================================
 * Admin view of api.db.* collections across all scripts and scopes.
 *
 * Data flow:
 *   - LumiScriptPanel owns the `collections` state + dispatches
 *     `list_collections` requests on tab activation and on every
 *     `collections_updated` hint.
 *   - `collections_list` messages populate state.
 *   - This component is a pure render of the state it's handed.
 *
 * Row layout (grid): name · scope · owner · size · modified · actions
 */

import { type FC } from 'react';
import { Database, RefreshCw, Eye, Trash2 } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { Script } from '../../types/script.js';
import type { CollectionSummary } from '../../engine/db-admin.js';

// ─── Formatting helpers ──────────────────────────────────────────────────────

/** Human-readable byte count. 0 → '0 B'; 1536 → '1.5 KB'; etc. */
function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const value = bytes / Math.pow(1024, i);
  return `${i === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[i]}`;
}

/** Relative time ("2m ago", "3h ago", "5d ago", "—" for epoch-0). */
function formatTimeAgo(iso: string): string {
  if (!iso) return '—';
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t) || t <= 0) return '—';
  const diff = Date.now() - t;
  if (diff < 0)              return 'just now';
  if (diff < 60_000)         return 'just now';
  if (diff < 3_600_000)      return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000)     return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 30 * 86_400_000) return `${Math.floor(diff / 86_400_000)}d ago`;
  return new Date(t).toISOString().slice(0, 10); // fall back to YYYY-MM-DD
}

const SCOPE_LABEL: Record<CollectionSummary['scope'], string> = {
  script:    'script',
  character: 'char',
  chat:      'chat',
};

// ─── Component ───────────────────────────────────────────────────────────────

export interface CollectionsSectionProps {
  collections: CollectionSummary[] | null;
  /** Script list for owner-name resolution (scriptId → script.name). */
  scripts: Script[];
  sendToBackend: (msg: FrontendToBackend) => void;
  /** Invoked when the user clicks the inspect button on a collection row. */
  onInspect: (path: string) => void;
  /** Invoked when the user clicks the drop button — parent opens the
   *  confirmation dialog with the full summary. */
  onDrop: (summary: CollectionSummary) => void;
}

export const CollectionsSection: FC<CollectionsSectionProps> = ({
  collections,
  scripts,
  sendToBackend,
  onInspect,
  onDrop,
}) => {
  const scriptNameById = new Map<string, string>();
  for (const s of scripts) scriptNameById.set(s.id, s.name);

  const handleRefresh = () => sendToBackend({ type: 'list_collections' });

  const totalCount = collections?.length ?? 0;

  return (
    <div className="ls-status-section">
      <div className="ls-inject-header">
        <Database size={10} />
        Collections
        {totalCount > 0 && <span className="ls-inject-count">{totalCount}</span>}
        <button
          className="ls-vars-refresh"
          title="Refresh collections"
          onClick={handleRefresh}
        >
          <RefreshCw size={10} />
        </button>
      </div>
      <div className="ls-status-section-body">
        {collections === null ? (
          <div className="ls-section-empty">Click refresh to load collections</div>
        ) : collections.length === 0 ? (
          <div className="ls-section-empty">No api.db collections on disk</div>
        ) : (
          <div className="ls-collections-list">
            {/* Header row — sticky so it stays visible as the body scrolls. */}
            <div className="ls-collections-row ls-collections-header-row">
              <span>Name</span>
              <span>Scope</span>
              <span>Owner</span>
              <span>Size</span>
              <span>Updated</span>
              <span>{/* actions */}</span>
            </div>
            {collections.map((c) => {
              const ownerName = scriptNameById.get(c.scriptId) ?? `(${c.scriptId.slice(0, 8)}…)`;
              const ownerIsUnknown = !scriptNameById.has(c.scriptId);
              // Human-readable path hint: scope-aware so `db/chats/ABC/SID/x.json`
              // is described, not just dumped raw.
              const ownerTooltip = ownerIsUnknown
                ? `scriptId: ${c.scriptId} (not currently loaded)`
                : `${ownerName} (${c.scriptId})`;
              return (
                <div key={c.path} className="ls-collections-row">
                  <span className="ls-collections-name" title={c.name}>{c.name}</span>
                  <span className="ls-collections-scope" data-scope={c.scope} title={c.path}>
                    {SCOPE_LABEL[c.scope]}
                  </span>
                  <span
                    className={`ls-collections-owner${ownerIsUnknown ? ' ls-collections-owner-unknown' : ''}`}
                    title={ownerTooltip}
                  >
                    {ownerName}
                  </span>
                  <span className="ls-collections-size" title={`${c.sizeBytes.toLocaleString()} bytes`}>
                    {formatBytes(c.sizeBytes)}
                  </span>
                  <span className="ls-collections-updated" title={c.modifiedAt}>
                    {formatTimeAgo(c.modifiedAt)}
                  </span>
                  <span className="ls-collections-actions">
                    <button
                      className="ls-collections-action"
                      title="Inspect records"
                      onClick={() => onInspect(c.path)}
                    >
                      <Eye size={10} />
                    </button>
                    <button
                      className="ls-collections-action ls-collections-action-danger"
                      title="Drop collection"
                      onClick={() => onDrop(c)}
                    >
                      <Trash2 size={10} />
                    </button>
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
