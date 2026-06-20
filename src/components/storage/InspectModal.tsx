/**
 * ============================================================================
 * INSPECT MODAL
 * ============================================================================
 * Full-screen portaled modal for viewing the records in a single
 * collection. Features:
 *   - Per-field text filter (shallow, case-insensitive) — debounced 150ms
 *     before dispatching a new `inspect_collection` request
 *   - Pagination via offset/limit (50 records per page by default)
 *   - Per-record "Copy ID" + "Copy JSON" actions
 *   - Manual refresh button (independent of the global `collections_updated`
 *     hint, useful when actively watching a script write to the collection)
 *   - Resolved character / chat name in the header for non-script scopes
 *   - Lightweight virtualization via `content-visibility: auto` — the
 *     browser skips offscreen row layout without a library dependency
 *   - ESC closes; click on backdrop closes; X button closes
 *
 * State ownership: `path`, `records`, `total` are owned by
 * LumiScriptPanel (hydrated via `collection_records` messages). This
 * component owns its internal `filter` + `page` state and dispatches
 * requests via `sendToBackend` whenever those change.
 */

import { useState, useEffect, useMemo, useCallback, useRef, memo, type FC, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { X, Database, Search, ChevronLeft, ChevronRight, RefreshCw, Copy, Braces, Layers, Code2, AlertTriangle, Pencil, Trash2, ListOrdered, BarChart3 } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';
import type { DbRecord } from '../../types/script.js';
import type { CollectionSummary, CollectionStats, FieldStats, StatsTypeTag } from '../../engine/db-admin.js';
import { formatTimeAgo, copyToClipboard, cachedRecordHtml, highlightBodyCapped } from './utils.js';
import { EditRecordModal } from './EditRecordModal.js';
import { buildInspectRequest, prettyPrintUserData, formatTopValue, formatNum, type FilterMode } from './record-logic.js';
import { filterRecords, type RecordFilterOptions } from '../../engine/record-filter.js';

/** Page size used in the panel UI. Backend caps record counts anyway. */
const PAGE_SIZE = 50;
/**
 * Collections with at most this many records are loaded ONCE in full and then
 * filtered + paginated entirely in the browser — no per-keystroke round trip
 * (which was the inspect-filter freeze). Larger collections fall back to the
 * server-side paginated path.
 */
const CLIENT_FILTER_MAX = 1000;
/** Filter input debounce — 150ms feels responsive without thrashing. */
const FILTER_DEBOUNCE_MS = 150;
/** How long the "Copied" tick stays visible after a successful copy. */
const COPY_FEEDBACK_MS = 1200;
/**
 * How long the inline two-step delete confirm pill stays armed before
 * reverting to its idle state. 4 seconds is enough for the user to
 * click Confirm intentionally without leaving destructive UI primed
 * indefinitely if they get distracted.
 */
const DELETE_CONFIRM_TIMEOUT_MS = 4000;

export interface InspectModalProps {
  /** Path of the collection being inspected. Used to display + re-dispatch. */
  path: string;
  /**
   * Optional summary for the open collection — when provided, the header
   * surfaces the resolved character / chat name (when applicable) so
   * users don't have to mentally parse UUIDs in the path. Falls back to
   * path-only display when absent.
   */
  summary?: CollectionSummary;
  /** Records for the current page; `null` while loading. */
  records: DbRecord[] | null;
  /** Post-filter, pre-pagination count — drives "page N of M matching" UX. */
  total: number;
  /**
   * Set when the inspect request failed — currently only `jsonquery`
   * mode produces errors (parse, runtime, non-array result). The modal
   * renders this inline below the filter input so users can fix their
   * query without losing context. Null in normal operation.
   */
  error: string | null;
  /**
   * Per-field aggregate stats for the Stats tab. `null` while not yet
   * loaded (modal lazily dispatches the analyze request only when the
   * user switches to the Stats tab) or during a refresh after a
   * `collections_updated` hint. The modal renders a "Computing
   * stats…" placeholder while null.
   */
  stats: CollectionStats | null;
  /** Any change to this value triggers a re-fetch with the current
   *  filter + page. Parent bumps it on every `collections_updated` hint
   *  so the modal reflects concurrent mutations from other scripts. */
  refreshToken: number;
  onClose: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

/** View mode — Records (default) vs Stats (per-field aggregate). */
type ViewMode = 'records' | 'stats';

/**
 * Base style for the per-record action buttons (Copy ID / JSON / Edit / Delete).
 * Hoisted to a module constant so it isn't reallocated per button per row per
 * render; the dynamic bits (color / opacity / the armed-delete pill) are merged
 * in per button at the call site.
 */
const RECORD_ACTION_BTN: CSSProperties = {
  background:    'transparent',
  border:        'none',
  padding:       4,
  cursor:        'pointer',
  display:       'inline-flex',
  alignItems:    'center',
  gap:           3,
  font:          'inherit',
  fontSize:      10,
};

interface RecordRowProps {
  record:          DbRecord;
  idCopied:        boolean;
  jsonCopied:      boolean;
  isPendingDelete: boolean;
  onCopyId:        (r: DbRecord) => void;
  onCopyJson:      (r: DbRecord) => void;
  onEdit:          (r: DbRecord) => void;
  onDelete:        (r: DbRecord) => void;
}

/**
 * Build the highlighted body HTML for a record, content-keyed (`id:updatedAt`)
 * in a module cache so an unchanged record returns a reference-stable string
 * (see {@link cachedRecordHtml}). A record missing `updatedAt` bypasses the
 * cache (build fresh, don't store under an unstable key).
 */
function recordBodyHtml(record: DbRecord): string {
  const build = (): string => highlightBodyCapped(prettyPrintUserData(record));
  return record.updatedAt == null
    ? build()
    : cachedRecordHtml(`${String(record.id)}:${String(record.updatedAt)}`, build);
}

/**
 * One record row — extracted and `React.memo`'d so a parent re-render that does
 * NOT change this row (a filter keystroke before the debounce, a copy/delete on
 * another row, pagination hover, etc.) skips it entirely. Two more guards keep
 * the body cheap: the highlighted HTML is content-keyed + cached (so an
 * unchanged record never re-highlights across filter responses), and the body
 * is LAZY — its `<pre>` DOM is built only once the row reaches the viewport (via
 * an IntersectionObserver), so a filter that surfaces many never-rendered rows
 * doesn't build every row's DOM in one synchronous commit (the first-narrow
 * hitch). This is the render half of the collection-search perf fix.
 */
const RecordRow: FC<RecordRowProps> = memo(function RecordRow({
  record, idCopied, jsonCopied, isPendingDelete, onCopyId, onCopyJson, onEdit, onDelete,
}) {
  const idStr = String(record.id);
  const rowRef = useRef<HTMLDivElement>(null);
  // Lazy body: build the highlighted <pre> DOM only once the row is at/near the
  // viewport. A filter that surfaces many never-rendered rows then builds only
  // the visible rows' DOM per commit, not all of them — bounding the first-narrow
  // render hitch. One-shot: once shown we stop observing and keep it rendered (no
  // rebuild churn on scroll). Eager fallback where IntersectionObserver is absent.
  const [bodyShown, setBodyShown] = useState(false);
  useEffect(() => {
    if (bodyShown) return;
    const el = rowRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setBodyShown(true); return; }
    const root = el.closest('.ls-inspect-body');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setBodyShown(true);
          io.disconnect();
        }
      },
      { root: root instanceof Element ? root : null, rootMargin: '400px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [bodyShown]);
  // Highlighted body, content-keyed + cached (reference-stable for an unchanged
  // record, so React skips the re-highlight AND the innerHTML re-parse). Built
  // only once the row is shown.
  const html = useMemo(
    () => (bodyShown ? recordBodyHtml(record) : ''),
    [bodyShown, record.id, record.updatedAt],
  );
  return (
    <div ref={rowRef} className="ls-inspect-record">
      <div className="ls-inspect-record-id" title={`id: ${idStr}`}>
        <code>{idStr.slice(0, 12)}…</code>
        <span className="ls-inspect-record-timestamps">
          created <time title={new Date(record.createdAt as number).toISOString()}>
            {formatTimeAgo(record.createdAt as number)}
          </time>
          {record.updatedAt !== record.createdAt && (
            <>
              {' · '}updated <time title={new Date(record.updatedAt as number).toISOString()}>
                {formatTimeAgo(record.updatedAt as number)}
              </time>
            </>
          )}
        </span>
        <span style={{ flex: 1 }} />
        <button
          className="ls-inspect-record-action"
          title={idCopied ? 'Copied!' : 'Copy ID'}
          onClick={() => onCopyId(record)}
          style={{ ...RECORD_ACTION_BTN, marginLeft: 4, color: idCopied ? 'var(--lumiverse-accent)' : 'inherit', opacity: idCopied ? 1 : 0.6 }}
        >
          <Copy size={11} />
          ID
        </button>
        <button
          className="ls-inspect-record-action"
          title={jsonCopied ? 'Copied!' : 'Copy full JSON'}
          onClick={() => onCopyJson(record)}
          style={{ ...RECORD_ACTION_BTN, marginLeft: 2, color: jsonCopied ? 'var(--lumiverse-accent)' : 'inherit', opacity: jsonCopied ? 1 : 0.6 }}
        >
          <Braces size={11} />
          JSON
        </button>
        <button
          className="ls-inspect-record-action"
          title="Edit record"
          onClick={() => onEdit(record)}
          style={{ ...RECORD_ACTION_BTN, marginLeft: 2, color: 'inherit', opacity: 0.6 }}
        >
          <Pencil size={11} />
          Edit
        </button>
        <button
          className={'ls-inspect-record-action' + (isPendingDelete ? ' ls-inspect-record-action-confirm' : '')}
          title={isPendingDelete ? 'Click again to confirm — auto-cancels in a few seconds' : 'Delete record'}
          onClick={() => onDelete(record)}
          style={{
            ...RECORD_ACTION_BTN,
            marginLeft:  2,
            borderRadius: 3,
            background:  isPendingDelete ? 'rgba(246, 130, 130, 0.18)' : 'transparent',
            border:      isPendingDelete ? '1px solid rgba(246, 130, 130, 0.4)' : 'none',
            padding:     isPendingDelete ? '3px 6px' : 4,
            color:       isPendingDelete ? 'var(--lumiverse-danger, rgb(246, 130, 130))' : 'inherit',
            opacity:     isPendingDelete ? 1 : 0.6,
            fontWeight:  isPendingDelete ? 600 : 400,
          }}
        >
          <Trash2 size={11} />
          {isPendingDelete ? 'Confirm?' : 'Delete'}
        </button>
      </div>
      <pre
        className="ls-inspect-record-json"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
});

// ── Filter-match highlighting (CSS Custom Highlight API) ──────────────────────
// Marks the active text needle across the rendered record bodies as a PAINT-only
// overlay: `Highlight` ranges sit on top of the existing text without mutating
// the (cached, lazily-built) <pre> DOM, so marking the match never re-parses
// innerHTML or invalidates the body cache. Degrades to a no-op where the API is
// absent — the filter itself still works.
const MATCH_HIGHLIGHT_NAME = 'ls-inspect-match';
let matchHighlight: Highlight | null = null;
let matchHighlightResolved = false;
function getMatchHighlight(): Highlight | null {
  if (matchHighlightResolved) return matchHighlight;
  matchHighlightResolved = true;
  if (typeof CSS !== 'undefined' && CSS.highlights && typeof Highlight !== 'undefined') {
    matchHighlight = new Highlight();
    CSS.highlights.set(MATCH_HIGHLIGHT_NAME, matchHighlight);
  }
  return matchHighlight;
}

/**
 * Rebuild the match-highlight ranges for `needle` across the record bodies in
 * `container`. Walks only the text nodes of already-built `<pre>` bodies (lazy
 * placeholders have none), so the cost scales with the rendered rows, not the
 * whole collection. Case-insensitive substring match — mirrors the shallow/deep
 * text filter.
 */
function updateMatchRanges(container: HTMLElement, needle: string): void {
  const hl = getMatchHighlight();
  if (!hl) return;
  hl.clear();
  const lc = needle.trim().toLowerCase();
  if (!lc) return;
  const bodies = container.querySelectorAll('.ls-inspect-record-json');
  for (const body of bodies) {
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const text = (node.textContent ?? '').toLowerCase();
      for (let idx = text.indexOf(lc); idx !== -1; idx = text.indexOf(lc, idx + lc.length)) {
        const range = new Range();
        range.setStart(node, idx);
        range.setEnd(node, idx + lc.length);
        hl.add(range);
      }
    }
  }
}

export const InspectModal: FC<InspectModalProps> = ({
  path,
  summary,
  records,
  total,
  error,
  stats,
  refreshToken,
  onClose,
  sendToBackend,
}) => {
  const [filter, setFilter] = useState('');
  const [debouncedFilter, setDebouncedFilter] = useState('');
  const [page, setPage] = useState(0);
  /**
   * Filter mode tri-state, selected via the segmented control next to
   * the search input:
   *   - `shallow` (default) — case-insensitive substring match against
   *     top-level string fields. Cheapest; fits flat records.
   *   - `deep` — same string match, recursive into nested objects /
   *     arrays.
   *   - `jsonquery` — power-user mode: input becomes a jsonquery
   *     expression evaluated against the records array. Errors surface
   *     inline below the input. Sister to `api.db.collection().query()`.
   *
   * Resets to `shallow` only on full unmount (parent recreates the modal
   * for a different path) — within one collection's session, the user's
   * mode preference survives closing/reopening if the parent keeps the
   * tree mounted.
   */
  const [filterMode, setFilterMode] = useState<FilterMode>('shallow');
  /**
   * Local refresh counter — bumped by the in-modal refresh button to
   * trigger an immediate re-fetch without involving the parent's
   * `refreshToken` state machine (which fires on every global
   * `collections_updated` broadcast). Folded into the inspect-effect's
   * dep list alongside `refreshToken`; both produce the same outcome
   * (a fresh `inspect_collection` request with current filter + page).
   */
  const [localRefreshTick, setLocalRefreshTick] = useState(0);
  /**
   * Per-record + per-action ephemeral "just copied" indicator. Keyed by
   * `${recordId}:${kind}` so Copy ID and Copy JSON show their ticks
   * independently. The Map approach lets multiple records flash a
   * confirmation simultaneously (mass copy, etc.) without state-update
   * races.
   */
  const [copiedKeys, setCopiedKeys] = useState<Set<string>>(() => new Set());
  /**
   * Record currently being edited via `EditRecordModal`. `null` = no
   * edit modal open. The full record object is captured at click time
   * so the editor's textarea can hydrate with the user-data JSON; the
   * recordId alone wouldn't be enough without an extra fetch.
   *
   * On save the modal closes and the broadcast forwarder bumps
   * `refreshToken` (debounced), which re-fetches the records grid.
   */
  const [editingRecord, setEditingRecord] = useState<DbRecord | null>(null);
  /**
   * Inline delete-confirm armed state. `null` = no record currently
   * pending confirmation; otherwise the recordId of the row whose
   * Delete button has been pressed once and is now waiting on a
   * confirm click. After `DELETE_CONFIRM_TIMEOUT_MS` of inactivity it
   * auto-reverts so destructive UI doesn't linger.
   */
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  /**
   * Top-level view mode. Records (default) shows the paginated record
   * grid; Stats shows the per-field aggregate produced by the
   * `analyze_collection` backend call.
   *
   * Resets to `'records'` when `path` changes (the user opens a
   * different collection) — see the effect below. Stays in whatever
   * mode the user last selected within a single collection's session.
   */
  const [viewMode, setViewMode] = useState<ViewMode>('records');
  /**
   * Filter execution mode for the open collection:
   *   - 'probe'  — fetched a cheap unfiltered page; awaiting `total` to decide.
   *   - 'client' — whole collection (≤ CLIENT_FILTER_MAX) held in `records`;
   *                filter + paginate happen in-memory (no per-keystroke fetch).
   *   - 'server' — collection too large; keep the server-side paginated path.
   * Reset to 'probe' whenever the open collection (`path`) changes or refreshes.
   */
  const [mode, setMode] = useState<'probe' | 'client' | 'server'>('probe');

  // Debounce the filter input so we don't re-dispatch on every keystroke.
  useEffect(() => {
    const id = setTimeout(() => setDebouncedFilter(filter), FILTER_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [filter]);

  // Reset to page 0 when the filter input or mode changes — stale
  // pagination makes no sense.
  useEffect(() => {
    setPage(0);
  }, [debouncedFilter, filterMode]);

  // ── Filter dispatch — client-side for small collections, server-side for big.
  // Small collections (≤ CLIENT_FILTER_MAX records) are loaded ONCE in full and
  // filtered + paginated in the browser on each keystroke; that removes the
  // per-keystroke inspect_collection round trip (the filter-freeze cause). Large
  // collections keep the server-side paginated path. `mode` is decided per
  // collection from the first response's `total`.

  // Latest `path`, for effects that must read it WITHOUT re-firing on a change.
  const pathRef = useRef(path);
  pathRef.current = path;

  // Probe on open: fetch a cheap unfiltered page to learn `total`, and reset to
  // 'probe' so the decision below re-runs for the new collection. Keyed on
  // `path` ONLY — the parent nulls `records` on a path change, so the decision
  // can't act on the previous collection's data. (Refreshes reload in-place via
  // the mode effects below and must NOT re-probe: the parent does NOT null
  // `records` on a refresh, so a re-probe could let the decision fire on the
  // stale in-memory set before the new probe response lands.)
  useEffect(() => {
    setMode('probe');
    sendToBackend(buildInspectRequest(path, 'shallow', '', 0, PAGE_SIZE));
  }, [path, sendToBackend]);

  // Decide the mode from the probe response's `total` (no fetch here — the client
  // load below reacts to the mode flip).
  useEffect(() => {
    if (mode !== 'probe' || records === null) return;
    setMode(total <= CLIENT_FILTER_MAX ? 'client' : 'server');
  }, [mode, records, total]);

  // Client load: pull the WHOLE (small) collection into `records` for in-memory
  // filtering — on entering client mode and on every refresh. Reads `path` via
  // the ref so a path change (owned by the probe effect) can't trigger a stale
  // full-load of a not-yet-probed collection.
  useEffect(() => {
    if (mode !== 'client') return;
    sendToBackend(buildInspectRequest(pathRef.current, 'shallow', '', 0, CLIENT_FILTER_MAX));
  }, [mode, refreshToken, localRefreshTick, sendToBackend]);

  // Server-side query (large collections only): one debounced request per
  // filter / mode / page / refresh change. Inert in client mode.
  useEffect(() => {
    if (mode !== 'server') return;
    sendToBackend(buildInspectRequest(path, filterMode, debouncedFilter, page, PAGE_SIZE));
  }, [path, debouncedFilter, filterMode, page, refreshToken, localRefreshTick, mode, sendToBackend]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Client-side filter result for small collections (null in server mode or
  // before the collection has loaded). filterRecords is the SAME logic the
  // backend uses, so client and server results match exactly.
  const clientResult = useMemo(() => {
    if (mode !== 'client' || records === null) return null;
    const opts: RecordFilterOptions = filterMode === 'jsonquery'
      ? { jsonqueryFilter: debouncedFilter }
      : { textFilter: debouncedFilter, deepFilter: filterMode === 'deep' };
    return filterRecords(records, opts);
  }, [mode, records, filterMode, debouncedFilter]);

  // The records / total / error actually shown: derived locally in client mode,
  // straight from the (server-paginated) props in server mode. Never null after
  // the `records === null` loading guard below.
  const viewRecords: DbRecord[] = mode === 'client'
    ? (clientResult ? clientResult.records.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE) : [])
    : (records ?? []);
  const viewTotal = mode === 'client' ? (clientResult?.records.length ?? 0) : total;
  const viewError = mode === 'client' ? (clientResult?.error ?? null) : error;

  // Filter-match highlighting: paint the active needle over the rendered bodies
  // (paint-only — see updateMatchRanges, no DOM mutation / no cache hit). Re-runs
  // on filter / mode / page / view change; a MutationObserver (rAF-coalesced)
  // catches lazy bodies building + rows re-rendering. jsonquery has no text
  // needle → no highlight.
  const bodyContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = bodyContainerRef.current;
    if (!container) return;
    const needle = filterMode === 'jsonquery' ? '' : debouncedFilter;
    let raf = 0;
    const run = (): void => { raf = 0; updateMatchRanges(container, needle); };
    const schedule = (): void => { if (raf === 0) raf = requestAnimationFrame(run); };
    schedule();
    const mo = new MutationObserver(schedule);
    mo.observe(container, { childList: true, subtree: true, characterData: true });
    return () => {
      mo.disconnect();
      if (raf !== 0) cancelAnimationFrame(raf);
      getMatchHighlight()?.clear();
    };
  }, [debouncedFilter, filterMode, mode, page, viewMode]);

  const pageCount = Math.max(1, Math.ceil(viewTotal / PAGE_SIZE));
  const pageFirst = viewTotal === 0 ? 0 : page * PAGE_SIZE + 1;
  const pageLast  = Math.min(viewTotal, (page + 1) * PAGE_SIZE);

  // Pull a display-friendly collection name from the path. Examples:
  //   db/scripts/s-1/rolls.json          → rolls (script)
  //   db/characters/c/s/notes.json       → notes (character)
  const displayName = useMemo(() => {
    const m = path.match(/\/([^/]+)\.json$/);
    return m ? m[1] : path;
  }, [path]);

  /**
   * Resolved scope identity for the header — surfaces the character /
   * chat name when one is available, so the user doesn't have to parse
   * the UUID-laden path. Falls back to nothing for script scope (the
   * collection name + path already convey enough context).
   */
  const scopeIdentity = useMemo((): string | null => {
    if (!summary) return null;
    if (summary.scope === 'character' && summary.characterName) {
      return `character: ${summary.characterName}`;
    }
    if (summary.scope === 'chat' && summary.chatName) {
      return `chat: ${summary.chatName}`;
    }
    return null;
  }, [summary]);

  // ── Per-record copy actions ────────────────────────────────────────
  // Both copy paths route through `copyToClipboard` (utils) and flash
  // a per-record indicator on success. On failure (insecure context,
  // permission denied, etc.) the indicator simply doesn't show — the
  // user re-runs or copies manually from the rendered JSON.
  const flashCopied = useCallback((key: string) => {
    setCopiedKeys((prev) => {
      const next = new Set(prev);
      next.add(key);
      return next;
    });
    setTimeout(() => {
      setCopiedKeys((prev) => {
        if (!prev.has(key)) return prev;
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    }, COPY_FEEDBACK_MS);
  }, []);

  const handleCopyId = useCallback(async (record: DbRecord) => {
    const ok = await copyToClipboard(String(record.id));
    if (ok) flashCopied(`${record.id}:id`);
  }, [flashCopied]);

  const handleCopyJson = useCallback(async (record: DbRecord) => {
    const ok = await copyToClipboard(JSON.stringify(record, null, 2));
    if (ok) flashCopied(`${record.id}:json`);
  }, [flashCopied]);

  // ── Per-record delete (two-step inline confirm) ────────────────────
  // First click arms `pendingDeleteId` and visually swaps the button
  // for "Confirm?" pill. Second click on the same record's button
  // dispatches `delete_record`. Auto-revert after 4s so a stale armed
  // state doesn't sit waiting indefinitely if the user gets distracted.
  useEffect(() => {
    if (pendingDeleteId === null) return;
    const id = setTimeout(() => setPendingDeleteId(null), DELETE_CONFIRM_TIMEOUT_MS);
    return () => clearTimeout(id);
  }, [pendingDeleteId]);

  // Keep a ref of the armed-delete id so `handleDelete` can read the latest
  // value while staying referentially stable (a `pendingDeleteId` dependency
  // would re-create it on every arm/disarm, breaking the RecordRow memo for
  // every row).
  const pendingDeleteIdRef = useRef<string | null>(pendingDeleteId);
  useEffect(() => { pendingDeleteIdRef.current = pendingDeleteId; }, [pendingDeleteId]);

  const handleDelete = useCallback((record: DbRecord) => {
    const idStr = String(record.id);
    if (pendingDeleteIdRef.current === idStr) {
      // Second click — commit the deletion. The backend's broadcast
      // forwarder bumps refreshToken on success and the records grid
      // re-fetches; failures surface via toast.
      sendToBackend({
        type:     'delete_record',
        path,
        recordId: idStr,
      });
      setPendingDeleteId(null);
    } else {
      setPendingDeleteId(idStr);
    }
  }, [path, sendToBackend]);

  // Cancel any armed delete + close any open edit modal whenever the
  // page changes — armed state for an off-page record is meaningless,
  // and an open edit modal targeting an off-page record could re-display
  // a stale record after save.
  useEffect(() => {
    setPendingDeleteId(null);
    setEditingRecord(null);
  }, [page, debouncedFilter, filterMode, path]);

  // Reset the view mode when the user opens a different collection —
  // sticking on Stats while opening a fresh collection would briefly
  // show the previous one's aggregate.
  useEffect(() => {
    setViewMode('records');
  }, [path]);

  // Lazy stats fetch — only dispatch when the Stats tab is active.
  // Re-fires whenever EITHER refresh source bumps:
  //   - `refreshToken`     — debounced `collections_updated` forwarder,
  //                          covers concurrent mutations from other
  //                          scripts.
  //   - `localRefreshTick` — manual refresh from the header button,
  //                          symmetric with the records-mode behaviour
  //                          so the user gets a single "refresh" affordance
  //                          that works on whichever tab is visible.
  useEffect(() => {
    if (viewMode !== 'stats') return;
    sendToBackend({ type: 'analyze_collection', path });
  }, [viewMode, path, refreshToken, localRefreshTick, sendToBackend]);

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
            {scopeIdentity && (
              <span className="ls-inspect-title-path" title={path} style={{ color: 'var(--lumiverse-accent)' }}>
                {scopeIdentity}
              </span>
            )}
            <span className="ls-inspect-title-path" title={path}>{path}</span>
          </span>
          <button
            className="ls-modal-close"
            onClick={() => setLocalRefreshTick(t => t + 1)}
            title="Refresh records"
            style={{ marginRight: 4 }}
          >
            <RefreshCw size={14} />
          </button>
          <button className="ls-modal-close" onClick={onClose} title="Close (Esc)">
            <X size={16} />
          </button>
        </div>

        {/* View tabs — Records / Stats. Sticky between header and the
            filter toolbar so the user can toggle without scrolling
            mid-record. Stats lazy-loads on first activation; subsequent
            activations are instant (state cached at the panel level)
            and refresh in step with collections_updated. */}
        <div className="ls-inspect-tabs" role="tablist" aria-label="Inspect view">
          <button
            type="button"
            role="tab"
            className="ls-inspect-tab"
            aria-selected={viewMode === 'records'}
            onClick={() => setViewMode('records')}
          >
            <ListOrdered size={12} />
            Records
          </button>
          <button
            type="button"
            role="tab"
            className="ls-inspect-tab"
            aria-selected={viewMode === 'stats'}
            onClick={() => setViewMode('stats')}
          >
            <BarChart3 size={12} />
            Stats
          </button>
        </div>

        {/* Toolbar: filter + pagination controls — Records mode only.
            Hidden in Stats view because filter / pagination don't apply
            to the always-full-collection aggregate. */}
        {viewMode === 'records' && <>
        <div className="ls-inspect-toolbar">
          <div className="ls-inspect-search">
            <Search size={12} />
            <input
              type={filterMode === 'jsonquery' ? 'text' : 'text'}
              className="ls-inspect-search-input"
              placeholder={
                filterMode === 'jsonquery'
                  ? 'jsonquery expression — e.g. filter(.hp > 50) or pipe(filter(...), sort(.created))'
                  : filterMode === 'deep'
                    ? 'Filter records (deep string match — all nested fields)…'
                    : 'Filter records (shallow string match)…'
              }
              value={filter}
              onChange={e => setFilter(e.target.value)}
              autoFocus
              spellCheck={filterMode !== 'jsonquery'}
              autoCorrect={filterMode === 'jsonquery' ? 'off' : 'on'}
              autoCapitalize={filterMode === 'jsonquery' ? 'off' : 'sentences'}
            />
            {/* Mode selector — segmented control, pressed-state highlight
                indicates the active mode. Click cycles through three:
                shallow (Search) → deep (Layers) → jsonquery (Code2). */}
            <div className="ls-inspect-mode-selector" role="radiogroup" aria-label="Filter mode">
              <button
                type="button"
                className="ls-inspect-mode-btn"
                role="radio"
                aria-checked={filterMode === 'shallow'}
                title="Shallow text filter — top-level string fields only"
                onClick={() => setFilterMode('shallow')}
              >
                <Search size={11} />
              </button>
              <button
                type="button"
                className="ls-inspect-mode-btn"
                role="radio"
                aria-checked={filterMode === 'deep'}
                title="Deep text filter — search all nested string fields"
                onClick={() => setFilterMode('deep')}
              >
                <Layers size={11} />
              </button>
              <button
                type="button"
                className="ls-inspect-mode-btn"
                role="radio"
                aria-checked={filterMode === 'jsonquery'}
                title="jsonquery expression — power-user typed query"
                onClick={() => setFilterMode('jsonquery')}
              >
                <Code2 size={11} />
              </button>
            </div>
          </div>
          <div className="ls-inspect-pager">
            <span className="ls-inspect-pager-status">
              {viewTotal === 0
                ? 'No matching records'
                : <>Showing <strong>{pageFirst}</strong>&ndash;<strong>{pageLast}</strong> of <strong>{viewTotal}</strong></>}
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

        {/* jsonquery error banner — slots between the toolbar and the
            records body, only when an error came back from the backend.
            Disappears as soon as the next non-erroring response arrives. */}
        {viewError && (
          <div className="ls-inspect-error" role="alert">
            <AlertTriangle size={12} />
            <span>{viewError}</span>
          </div>
        )}

        {/* Records body */}
        <div ref={bodyContainerRef} className="ls-inspect-body">
          {records === null ? (
            <div className="ls-inspect-empty">Loading records…</div>
          ) : viewRecords.length === 0 ? (
            <div className="ls-inspect-empty">
              {viewTotal === 0 && debouncedFilter ? (
                <>
                  <div>No records match &ldquo;{debouncedFilter}&rdquo;</div>
                  <button
                    onClick={() => setFilter('')}
                    style={{
                      marginTop: 12,
                      padding: '6px 12px',
                      background: 'var(--lumiverse-fill)',
                      border: '1px solid var(--lumiverse-border)',
                      borderRadius: 4,
                      color: 'inherit',
                      font: 'inherit',
                      cursor: 'pointer',
                    }}
                  >
                    Clear filter
                  </button>
                </>
              ) : viewTotal === 0 ? (
                'Collection is empty'
              ) : (
                'No records on this page'
              )}
            </div>
          ) : (
            <div className="ls-inspect-records">
              {viewRecords.map((r) => (
                <RecordRow
                  key={String(r.id)}
                  record={r}
                  idCopied={copiedKeys.has(`${r.id}:id`)}
                  jsonCopied={copiedKeys.has(`${r.id}:json`)}
                  isPendingDelete={pendingDeleteId === String(r.id)}
                  onCopyId={handleCopyId}
                  onCopyJson={handleCopyJson}
                  onEdit={setEditingRecord}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
        </>}

        {/* Stats view — per-field aggregate. Lazily loaded on first
            activation via the analyze_collection effect above; bumps
            in step with `refreshToken` so concurrent mutations refresh
            it alongside the records grid. */}
        {viewMode === 'stats' && (
          <div className="ls-inspect-body ls-inspect-stats-body">
            {stats === null ? (
              <div className="ls-inspect-empty">Computing stats…</div>
            ) : stats.fields.length === 0 ? (
              <div className="ls-inspect-empty">
                {stats.totalRecords === 0
                  ? 'Collection is empty — no fields to analyze.'
                  : 'No user-data fields in this collection (only reserved fields).'}
              </div>
            ) : (
              <StatsPanel stats={stats} />
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {createPortal(modal, document.body)}
      {editingRecord && (
        <EditRecordModal
          path={path}
          record={editingRecord}
          onClose={() => setEditingRecord(null)}
          sendToBackend={sendToBackend}
        />
      )}
    </>
  );
};

// ─── helpers ─────────────────────────────────────────────────────────────────

// Record pretty-printing (strip reserved fields) now lives in
// `./record-logic.ts` as `prettyPrintUserData`, shared with EditRecordModal.

// ─── Stats view ──────────────────────────────────────────────────────────────

/** Color-coded label per JSON-value type — the same palette used by
 *  the `highlightJson` token classes for visual continuity between
 *  the Records and Stats views. Falls back to muted grey for `array`
 *  and `object` since those don't have a dedicated highlighter color. */
const TYPE_TAG_CLASS: Record<StatsTypeTag, string> = {
  string:  'ls-stats-type ls-stats-type-string',
  number:  'ls-stats-type ls-stats-type-number',
  boolean: 'ls-stats-type ls-stats-type-bool',
  null:    'ls-stats-type ls-stats-type-null',
  array:   'ls-stats-type ls-stats-type-complex',
  object:  'ls-stats-type ls-stats-type-complex',
};


interface StatsPanelProps { stats: CollectionStats; }

/**
 * Renders the per-field aggregate. Each field gets a card with:
 *   - Field name + presence ratio header
 *   - Type chips (counts per JSON-value type)
 *   - Numeric range (when any values are numeric)
 *   - Top-N primitive values (when cardinality > 0)
 *
 * Layout uses a CSS grid that wraps to one column at narrow widths
 * (the modal can be resized) without per-card flex juggling.
 */
const StatsPanel: FC<StatsPanelProps> = ({ stats }) => {
  return (
    <div className="ls-inspect-stats">
      <div className="ls-inspect-stats-summary">
        Aggregating across <strong>{stats.totalRecords.toLocaleString()}</strong>{' '}
        {stats.totalRecords === 1 ? 'record' : 'records'} ·{' '}
        <strong>{stats.fields.length}</strong>{' '}
        {stats.fields.length === 1 ? 'field' : 'fields'}
      </div>
      <div className="ls-inspect-stats-grid">
        {stats.fields.map((f) => (
          <StatsFieldCard key={f.name} field={f} totalRecords={stats.totalRecords} />
        ))}
      </div>
    </div>
  );
};

interface StatsFieldCardProps { field: FieldStats; totalRecords: number; }

const StatsFieldCard: FC<StatsFieldCardProps> = ({ field, totalRecords }) => {
  const presencePct = totalRecords === 0
    ? 0
    : Math.round((field.presence / totalRecords) * 100);
  const typeEntries = Object.entries(field.types) as Array<[StatsTypeTag, number]>;
  // Sort type chips by descending count so the dominant type leads.
  typeEntries.sort((a, b) => b[1] - a[1]);

  return (
    <div className="ls-inspect-stats-card">
      <div className="ls-inspect-stats-card-head">
        <code className="ls-inspect-stats-card-name" title={field.name}>{field.name}</code>
        <span className="ls-inspect-stats-card-presence" title={`${field.presence} of ${totalRecords} records`}>
          {presencePct}%
        </span>
      </div>
      <div className="ls-inspect-stats-card-types">
        {typeEntries.map(([tag, n]) => (
          <span key={tag} className={TYPE_TAG_CLASS[tag]}>
            {tag} · {n}
          </span>
        ))}
      </div>
      {field.numericRange && (
        <div className="ls-inspect-stats-card-numeric">
          <span>min <strong>{formatNum(field.numericRange.min)}</strong></span>
          <span>·</span>
          <span>max <strong>{formatNum(field.numericRange.max)}</strong></span>
          <span>·</span>
          <span>mean <strong>{formatNum(field.numericRange.mean)}</strong></span>
        </div>
      )}
      {field.topValues.length > 0 && (
        <div className="ls-inspect-stats-card-values">
          <div className="ls-inspect-stats-card-values-label">
            Top {field.topValues.length} of {field.cardinality.toLocaleString()} distinct
          </div>
          <div className="ls-inspect-stats-card-values-list">
            {field.topValues.map((v, i) => (
              <span key={i} className="ls-inspect-stats-value-chip" title={String(v.value)}>
                <code>{formatTopValue(v.value)}</code>
                <span className="ls-inspect-stats-value-count">×{v.count}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

