/**
 * ============================================================================
 * SCRIPT STORAGE SECTION
 * ============================================================================
 * Admin view of `api.scriptStorage.*` slots across all scripts.
 * v1.0.0-rc.6+.
 *
 * Data flow mirrors the Collections section:
 *   - LumiScriptPanel owns the `scriptStorageEntries` state + dispatches
 *     `list_script_storage` requests on tab activation and on every
 *     `script_storage_updated` hint.
 *   - `script_storage_list` messages populate state.
 *   - This component is a pure render of the state it's handed plus
 *     its own search/sort UI state (purely client-side).
 *
 * Row layout (grid): script · keys · size · modified · actions
 * Filter + sort: name substring + click-to-sort columns (three-state
 * cycle per column, same as CollectionsSection).
 *
 * No scope dimension — `api.scriptStorage` is single-tier (per-script
 * only), so the scope-chip row from CollectionsSection isn't needed.
 */

import { useMemo, useState, type FC } from 'react';
import { HardDrive, RefreshCw, Eye, Trash2, Search, X, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { Script } from '../../types/script.js';
import type { ScriptStorageSummary } from '../../engine/api/script-storage.js';
import { formatBytes, formatTimeAgo } from './utils.js';

// ─── Component ───────────────────────────────────────────────────────────────

export interface ScriptStorageSectionProps {
  entries: ScriptStorageSummary[] | null;
  /** Script list for owner-name resolution (scriptId → script.name). */
  scripts: Script[];
  sendToBackend: (msg: FrontendToBackend) => void;
  /** Invoked when the user clicks the inspect button on a row. */
  onInspect: (scriptId: string) => void;
  /** Invoked when the user clicks the clear button — parent opens
   *  the confirmation dialog with the full summary. */
  onClear: (summary: ScriptStorageSummary) => void;
}

/** Sortable column keys — must match the header `<span>` in render order. */
type SortKey = 'script' | 'keys' | 'size' | 'modified';
type SortDir = 'asc' | 'desc';

/**
 * Storage budget thresholds anchored to the 1 MB per-script cap defined
 * in `src/engine/api/script-storage.ts:SCRIPT_STORAGE_CAP_BYTES`. Pattern
 * matches the CollectionsSection sizeBudget: warn approaching the cap,
 * danger imminent at the cap.
 *
 *   - < 800 KB  — default (no concern)
 *   - 800–950 KB — warn tint (orange)
 *   - ≥ 950 KB  — danger tint (red) — cap is imminent
 */
const SIZE_WARN_THRESHOLD_BYTES   = 800 * 1024;
const SIZE_DANGER_THRESHOLD_BYTES = 950 * 1024;
const SIZE_CAP_BYTES              = 1 * 1024 * 1024;

function sizeBudget(bytes: number): { tier: 'normal' | 'warn' | 'danger'; color: string } {
  if (bytes >= SIZE_DANGER_THRESHOLD_BYTES) {
    return { tier: 'danger', color: 'var(--lumiverse-danger, rgb(246, 130, 130))' };
  }
  if (bytes >= SIZE_WARN_THRESHOLD_BYTES) {
    return { tier: 'warn',   color: 'rgb(246, 175, 125)' };
  }
  return   { tier: 'normal', color: 'inherit' };
}

/**
 * Compare two summaries by the given sort key. `localeCompare` for
 * strings, plain subtraction for numbers. Owner sort falls back to
 * `scriptId` when the script isn't currently loaded so unknown-owner
 * rows still sort deterministically.
 */
function compareEntries(
  a: ScriptStorageSummary,
  b: ScriptStorageSummary,
  key: SortKey,
  scriptNameById: Map<string, string>,
): number {
  switch (key) {
    case 'script': {
      const an = scriptNameById.get(a.scriptId) ?? a.scriptId;
      const bn = scriptNameById.get(b.scriptId) ?? b.scriptId;
      return an.localeCompare(bn, undefined, { sensitivity: 'base' });
    }
    case 'keys':
      return a.keyCount - b.keyCount;
    case 'size':
      return a.sizeBytes - b.sizeBytes;
    case 'modified':
      return a.modifiedAtMs - b.modifiedAtMs;
  }
}

export const ScriptStorageSection: FC<ScriptStorageSectionProps> = ({
  entries,
  scripts,
  sendToBackend,
  onInspect,
  onClear,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  // Memoize the scriptId → name lookup so the filter/sort effect doesn't
  // rebuild it on every keystroke.
  const scriptNameById = useMemo(() => {
    const m = new Map<string, string>();
    for (const s of scripts) m.set(s.id, s.name);
    return m;
  }, [scripts]);

  const visibleEntries = useMemo(() => {
    if (!entries) return null;
    let result: ScriptStorageSummary[] = entries;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(e => {
        const name = scriptNameById.get(e.scriptId) ?? e.scriptId;
        return name.toLowerCase().includes(q);
      });
    }
    if (sortBy) {
      const dir = sortDir === 'asc' ? 1 : -1;
      result = result.slice().sort((a, b) => compareEntries(a, b, sortBy, scriptNameById) * dir);
    }
    return result;
  }, [entries, searchQuery, sortBy, sortDir, scriptNameById]);

  // ── Handlers ──────────────────────────────────────────────────────
  const handleRefresh = () => sendToBackend({ type: 'list_script_storage' });

  /** Three-state click cycle on a column header: null → asc → desc → null. */
  const handleSort = (key: SortKey) => {
    if (sortBy !== key) {
      setSortBy(key);
      setSortDir('asc');
      return;
    }
    if (sortDir === 'asc') {
      setSortDir('desc');
      return;
    }
    setSortBy(null);
  };

  const totalCount   = entries?.length ?? 0;
  const visibleCount = visibleEntries?.length ?? 0;
  const isFiltered   = searchQuery.trim().length > 0;

  const renderSortIndicator = (key: SortKey) => {
    const active = sortBy === key;
    if (!active) {
      return <ChevronsUpDown size={9} className="ls-scriptstorage-sort-icon" />;
    }
    return sortDir === 'asc'
      ? <ChevronUp   size={9} className="ls-scriptstorage-sort-icon ls-scriptstorage-sort-icon-active" />
      : <ChevronDown size={9} className="ls-scriptstorage-sort-icon ls-scriptstorage-sort-icon-active" />;
  };

  return (
    <div className="ls-status-section">
      <div className="ls-inject-header">
        <HardDrive size={10} />
        Script Storage
        {totalCount > 0 && <span className="ls-inject-count">{totalCount}</span>}
        <button
          className="ls-vars-refresh"
          title="Refresh script storage"
          onClick={handleRefresh}
        >
          <RefreshCw size={10} />
        </button>
      </div>
      <div className="ls-status-section-body">
        {entries === null ? (
          <div className="ls-section-empty">Click refresh to load script storage</div>
        ) : entries.length === 0 ? (
          <div className="ls-section-empty">No scripts have stored entries via api.scriptStorage</div>
        ) : (
          <>
            <div className="ls-scriptstorage-filter">
              <div className="ls-scriptstorage-filter-search">
                <Search size={10} />
                <input
                  type="text"
                  className="ls-scriptstorage-filter-input"
                  placeholder="Filter by script name…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="ls-scriptstorage-filter-clear"
                    title="Clear search"
                    onClick={() => setSearchQuery('')}
                  >
                    <X size={9} />
                  </button>
                )}
              </div>
              <span className="ls-scriptstorage-filter-count">
                {isFiltered ? `${visibleCount}/${totalCount}` : totalCount}
              </span>
            </div>

            {visibleCount === 0 ? (
              <div className="ls-section-empty">
                <div>No scripts match the filter</div>
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    marginTop: 8,
                    padding: '4px 10px',
                    background: 'var(--lumiverse-fill)',
                    border: '1px solid var(--lumiverse-border)',
                    borderRadius: 3,
                    color: 'inherit',
                    font: 'inherit',
                    fontSize: 11,
                    cursor: 'pointer',
                  }}
                >
                  Clear filter
                </button>
              </div>
            ) : (
              <div className="ls-scriptstorage-list">
                <div className="ls-scriptstorage-row ls-scriptstorage-header-row">
                  <span className="ls-scriptstorage-sortable" onClick={() => handleSort('script')} title="Sort by script name">
                    Script {renderSortIndicator('script')}
                  </span>
                  <span className="ls-scriptstorage-sortable" onClick={() => handleSort('keys')} title="Sort by key count">
                    Keys {renderSortIndicator('keys')}
                  </span>
                  <span className="ls-scriptstorage-sortable" onClick={() => handleSort('size')} title="Sort by size">
                    Size {renderSortIndicator('size')}
                  </span>
                  <span className="ls-scriptstorage-sortable" onClick={() => handleSort('modified')} title="Sort by last modified">
                    Modified {renderSortIndicator('modified')}
                  </span>
                  <span>{/* actions — not sortable */}</span>
                </div>
                {visibleEntries!.map((e) => {
                  const ownerName = scriptNameById.get(e.scriptId) ?? `(${e.scriptId.slice(0, 8)}…)`;
                  const ownerIsUnknown = !scriptNameById.has(e.scriptId);
                  const ownerTooltip = ownerIsUnknown
                    ? `scriptId: ${e.scriptId} (not currently loaded)`
                    : `${ownerName} (${e.scriptId})`;
                  const budget = sizeBudget(e.sizeBytes);
                  const pct = (e.sizeBytes / SIZE_CAP_BYTES * 100).toFixed(e.sizeBytes < 100 * 1024 ? 2 : 1);
                  const sizeTooltip = `${e.sizeBytes.toLocaleString()} bytes (${pct}% of 1 MB cap)`;
                  const modifiedIso = e.modifiedAtMs > 0
                    ? new Date(e.modifiedAtMs).toISOString()
                    : 'unknown';
                  return (
                    <div key={e.scriptId} className="ls-scriptstorage-row">
                      <span
                        className={`ls-scriptstorage-script${ownerIsUnknown ? ' ls-scriptstorage-script-unknown' : ''}`}
                        title={ownerTooltip}
                      >
                        {ownerName}
                      </span>
                      <span className="ls-scriptstorage-keys" title={`${e.keyCount} key${e.keyCount === 1 ? '' : 's'}`}>
                        {e.keyCount}
                      </span>
                      <span
                        className="ls-scriptstorage-size"
                        data-budget={budget.tier}
                        title={sizeTooltip}
                        style={budget.tier === 'normal' ? undefined : { color: budget.color, fontWeight: 600 }}
                      >
                        {formatBytes(e.sizeBytes)}
                      </span>
                      <span className="ls-scriptstorage-modified" title={modifiedIso}>
                        {e.modifiedAtMs > 0 ? formatTimeAgo(e.modifiedAtMs) : '—'}
                      </span>
                      <span className="ls-scriptstorage-actions">
                        <button
                          className="ls-scriptstorage-action"
                          title="Inspect entries"
                          onClick={() => onInspect(e.scriptId)}
                        >
                          <Eye size={10} />
                        </button>
                        <button
                          className="ls-scriptstorage-action ls-scriptstorage-action-danger"
                          title="Clear this script's storage"
                          onClick={() => onClear(e)}
                        >
                          <Trash2 size={10} />
                        </button>
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
