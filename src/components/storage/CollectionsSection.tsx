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
 *   - This component is a pure render of the state it's handed,
 *     plus its own search/filter/sort UI state (purely client-side
 *     — never sent to the backend).
 *
 * Row layout (grid): name · scope · owner · size · modified · actions
 *
 * Filter + sort (v0.23+):
 *   - A filter row above the table accepts a name substring and a
 *     trio of scope toggle chips. Empty query + all chips on = no
 *     filtering (default).
 *   - Column headers Name / Scope / Owner / Size / Updated are
 *     click-to-sort. Three-state cycle per column: off → asc → desc → off.
 *     Backend insertion order is the default when no column is active.
 */

import { useMemo, useState, type FC } from 'react';
import { Database, RefreshCw, Eye, Trash2, Search, X, ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { Script } from '../../types/script.js';
import type { CollectionSummary } from '../../engine/db-admin.js';
import { formatBytes, formatTimeAgo, SCOPE_LABEL_SHORT } from './utils.js';

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

/** Sortable column keys — must match the header `<span>` in render order. */
type SortKey = 'name' | 'scope' | 'owner' | 'size' | 'updated';
type SortDir = 'asc' | 'desc';
/** Available scope filter values — same set as `CollectionSummary['scope']`. */
type Scope = CollectionSummary['scope'];
const ALL_SCOPES: ReadonlyArray<Scope> = ['script', 'character', 'chat'];

/**
 * Storage budget thresholds, in bytes — anchored to the api.db.* size
 * governance constants from `db-store.ts`. The soft-warn threshold is
 * 10 MB (the host emits an `ls:collection:size-warning` broadcast); the
 * hard-stop is 50 MB (writes throw above that). Tinting:
 *   - < 10 MB        — default text color (no concern)
 *   - 10–40 MB       — warning tint (orange-ish, matches the
 *                      character-scope chip palette)
 *   - ≥ 40 MB        — danger tint (red, matches the trash-action color
 *                      token); the cap is imminent.
 * Helps admins spot collections about to hit the cap on a glance,
 * without changing the existing column layout. Tooltip on the cell
 * spells out the percentage so the user can verify their reading.
 */
const SIZE_WARN_THRESHOLD_BYTES   = 10 * 1024 * 1024;
const SIZE_DANGER_THRESHOLD_BYTES = 40 * 1024 * 1024;
const SIZE_CAP_BYTES              = 50 * 1024 * 1024;

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
 * Build a scope-badge tooltip string that includes the resolved
 * character / chat identity when available. For script scope (or when
 * the host couldn't resolve a name), falls back to the full path.
 *
 * Surfacing the identity in the tooltip rather than adding a visible
 * column keeps the row layout compact; the InspectModal + DropConfirmDialog
 * show the name prominently in their own headers, which is where users
 * spend the most time when they need to disambiguate "which character
 * does this collection belong to?".
 */
function scopeTooltip(c: CollectionSummary): string {
  if (c.scope === 'character') {
    if (c.characterName) return `character: ${c.characterName} (${c.characterId})\n${c.path}`;
    if (c.characterId)   return `character: ${c.characterId} (not currently loaded)\n${c.path}`;
  }
  if (c.scope === 'chat') {
    if (c.chatName) return `chat: ${c.chatName} (${c.chatId})\n${c.path}`;
    if (c.chatId)   return `chat: ${c.chatId} (not currently loaded)\n${c.path}`;
  }
  return c.path;
}

/**
 * Compare two collections by the given sort key. Returns a number whose
 * sign matches `a vs b` (negative = a-first, positive = b-first), like
 * `Array#sort`. Caller multiplies by the direction sign.
 *
 * String comparisons use `localeCompare` so non-ASCII names sort
 * naturally (case-insensitive). Numeric / date comparisons use plain
 * subtraction. Owner sort uses the resolved script name when known
 * (falls back to scriptId so unknown-owner rows still sort
 * deterministically).
 */
function compareCollections(
  a: CollectionSummary,
  b: CollectionSummary,
  key: SortKey,
  scriptNameById: Map<string, string>,
): number {
  switch (key) {
    case 'name':
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    case 'scope':
      return a.scope.localeCompare(b.scope);
    case 'owner': {
      const an = scriptNameById.get(a.scriptId) ?? a.scriptId;
      const bn = scriptNameById.get(b.scriptId) ?? b.scriptId;
      return an.localeCompare(bn, undefined, { sensitivity: 'base' });
    }
    case 'size':
      return a.sizeBytes - b.sizeBytes;
    case 'updated':
      return new Date(a.modifiedAt).getTime() - new Date(b.modifiedAt).getTime();
  }
}

export const CollectionsSection: FC<CollectionsSectionProps> = ({
  collections,
  scripts,
  sendToBackend,
  onInspect,
  onDrop,
}) => {
  // ── Filter + sort state (purely client-side, doesn't survive remount) ──
  const [searchQuery, setSearchQuery] = useState('');
  const [scopeFilter, setScopeFilter] = useState<Set<Scope>>(() => new Set(ALL_SCOPES));
  const [sortBy, setSortBy] = useState<SortKey | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  // Memoize the scriptId → name lookup so the filter/sort effect doesn't
  // rebuild it on every keystroke.
  const scriptNameById = useMemo(() => {
    const m = new Map<string, string>();
    for (const s of scripts) m.set(s.id, s.name);
    return m;
  }, [scripts]);

  // Apply scope filter, then name substring filter, then sort. The result
  // is what we render. Empty filters short-circuit to the original list
  // (no allocation) for the common no-filter path.
  const visibleCollections = useMemo(() => {
    if (!collections) return null;
    let result: CollectionSummary[] = collections;

    if (scopeFilter.size < ALL_SCOPES.length) {
      result = result.filter(c => scopeFilter.has(c.scope));
    }
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(c => c.name.toLowerCase().includes(q));
    }
    if (sortBy) {
      const dir = sortDir === 'asc' ? 1 : -1;
      // Slice before sorting — avoid mutating the parent's array.
      result = result.slice().sort((a, b) => compareCollections(a, b, sortBy, scriptNameById) * dir);
    }
    return result;
  }, [collections, scopeFilter, searchQuery, sortBy, sortDir, scriptNameById]);

  // ── Handlers ──────────────────────────────────────────────────────
  const handleRefresh = () => sendToBackend({ type: 'list_collections' });

  const toggleScope = (scope: Scope) => {
    setScopeFilter(prev => {
      const next = new Set(prev);
      if (next.has(scope)) next.delete(scope);
      else next.add(scope);
      // Don't allow zero scopes — that would render an "empty filtered"
      // state with no obvious recovery. Re-enable all if user
      // deselected the last one.
      if (next.size === 0) return new Set(ALL_SCOPES);
      return next;
    });
  };

  /**
   * Three-state click cycle on a column header: null → asc → desc → null.
   * Per-column independent — sorting a different column starts fresh at asc.
   */
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

  const clearFilters = () => {
    setSearchQuery('');
    setScopeFilter(new Set(ALL_SCOPES));
  };

  const totalCount   = collections?.length ?? 0;
  const visibleCount = visibleCollections?.length ?? 0;
  const isFiltered   = searchQuery.trim().length > 0 || scopeFilter.size < ALL_SCOPES.length;

  // ── Sort-indicator chevron for header cells ──────────────────────
  const renderSortIndicator = (key: SortKey) => {
    const active = sortBy === key;
    if (!active) {
      return <ChevronsUpDown size={9} className="ls-collections-sort-icon" />;
    }
    return sortDir === 'asc'
      ? <ChevronUp   size={9} className="ls-collections-sort-icon ls-collections-sort-icon-active" />
      : <ChevronDown size={9} className="ls-collections-sort-icon ls-collections-sort-icon-active" />;
  };

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
          <>
            {/* Filter row: name search + scope chips + counter ── */}
            <div className="ls-collections-filter">
              <div className="ls-collections-filter-search">
                <Search size={10} />
                <input
                  type="text"
                  className="ls-collections-filter-input"
                  placeholder="Filter by name…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="ls-collections-filter-clear"
                    title="Clear search"
                    onClick={() => setSearchQuery('')}
                  >
                    <X size={9} />
                  </button>
                )}
              </div>
              <div className="ls-collections-filter-chips">
                {ALL_SCOPES.map(scope => {
                  const pressed = scopeFilter.has(scope);
                  return (
                    <button
                      key={scope}
                      type="button"
                      className="ls-collections-filter-chip"
                      data-scope={scope}
                      aria-pressed={pressed}
                      title={pressed ? `Hide ${scope}-scoped` : `Show ${scope}-scoped`}
                      onClick={() => toggleScope(scope)}
                    >
                      {SCOPE_LABEL_SHORT[scope]}
                    </button>
                  );
                })}
              </div>
              <span className="ls-collections-filter-count">
                {isFiltered ? `${visibleCount}/${totalCount}` : totalCount}
              </span>
            </div>

            {/* Table or filtered-empty fallback ── */}
            {visibleCount === 0 ? (
              <div className="ls-section-empty">
                <div>No collections match the filter</div>
                <button
                  onClick={clearFilters}
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
              <div className="ls-collections-list">
                {/* Header row — sticky so it stays visible as the body scrolls.
                    Each header span doubles as a sort toggle (except actions). */}
                <div className="ls-collections-row ls-collections-header-row">
                  <span className="ls-collections-sortable" onClick={() => handleSort('name')} title="Sort by name">
                    Name {renderSortIndicator('name')}
                  </span>
                  <span className="ls-collections-sortable" onClick={() => handleSort('scope')} title="Sort by scope">
                    Scope {renderSortIndicator('scope')}
                  </span>
                  <span className="ls-collections-sortable" onClick={() => handleSort('owner')} title="Sort by owner">
                    Owner {renderSortIndicator('owner')}
                  </span>
                  <span className="ls-collections-sortable" onClick={() => handleSort('size')} title="Sort by size">
                    Size {renderSortIndicator('size')}
                  </span>
                  <span className="ls-collections-sortable" onClick={() => handleSort('updated')} title="Sort by last updated">
                    Updated {renderSortIndicator('updated')}
                  </span>
                  <span>{/* actions — not sortable */}</span>
                </div>
                {visibleCollections!.map((c) => {
                  const ownerName = scriptNameById.get(c.scriptId) ?? `(${c.scriptId.slice(0, 8)}…)`;
                  const ownerIsUnknown = !scriptNameById.has(c.scriptId);
                  const ownerTooltip = ownerIsUnknown
                    ? `scriptId: ${c.scriptId} (not currently loaded)`
                    : `${ownerName} (${c.scriptId})`;
                  return (
                    <div key={c.path} className="ls-collections-row">
                      <span className="ls-collections-name" title={c.name}>{c.name}</span>
                      <span className="ls-collections-scope" data-scope={c.scope} title={scopeTooltip(c)}>
                        {SCOPE_LABEL_SHORT[c.scope]}
                      </span>
                      <span
                        className={`ls-collections-owner${ownerIsUnknown ? ' ls-collections-owner-unknown' : ''}`}
                        title={ownerTooltip}
                      >
                        {ownerName}
                      </span>
                      {(() => {
                        const budget = sizeBudget(c.sizeBytes);
                        const pct = (c.sizeBytes / SIZE_CAP_BYTES * 100).toFixed(c.sizeBytes < 1024 * 1024 ? 2 : 1);
                        const tooltip = `${c.sizeBytes.toLocaleString()} bytes (${pct}% of 50 MB cap)`;
                        return (
                          <span
                            className="ls-collections-size"
                            data-budget={budget.tier}
                            title={tooltip}
                            style={budget.tier === 'normal' ? undefined : { color: budget.color, fontWeight: 600 }}
                          >
                            {formatBytes(c.sizeBytes)}
                          </span>
                        );
                      })()}
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
          </>
        )}
      </div>
    </div>
  );
};
