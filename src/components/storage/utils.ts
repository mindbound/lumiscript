/**
 * ============================================================================
 * STORAGE TAB — SHARED UI UTILITIES
 * ============================================================================
 * Formatting helpers + label maps used across CollectionsSection,
 * InspectModal, and DropConfirmDialog. Previously duplicated (with subtle
 * drift) across each consumer; consolidated here so changes to byte
 * formatting, time-ago thresholds, or scope labels touch one file.
 */

import type { CollectionSummary } from '../../engine/db-admin.js';

// ─── Byte formatting ─────────────────────────────────────────────────────────

/**
 * Human-readable byte count. `0` → `'0 B'`; `1536` → `'1.5 KB'`; etc.
 * Negative / non-finite inputs collapse to `'0 B'` so callers can pass
 * stat-failure sentinels safely.
 */
export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const value = bytes / Math.pow(1024, i);
  return `${i === 0 ? value.toFixed(0) : value.toFixed(1)} ${units[i]}`;
}

// ─── Value formatting ────────────────────────────────────────────────────────

/**
 * Compact one-line preview of an arbitrary variable value for the
 * Variables inspector. `undefined` / `null` render as their literal
 * keywords; strings show raw (truncated past 80 chars); everything else
 * is JSON-stringified (truncated past 80 chars), falling back to
 * `String(v)` if it can't be serialised (circular refs, etc.).
 */
export function formatValue(v: unknown): string {
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  if (typeof v === 'string') return v.length > 80 ? v.slice(0, 77) + '…' : v;
  try {
    const s = JSON.stringify(v);
    return s.length > 80 ? s.slice(0, 77) + '…' : s;
  } catch { return String(v); }
}

// ─── Time-ago formatting ─────────────────────────────────────────────────────

/**
 * Relative time string ("just now", "Nm ago", "Nh ago", "Nd ago", or
 * `YYYY-MM-DD` for older).
 *
 * Accepts either a ms-since-epoch number (e.g. `record.createdAt`) or an
 * ISO 8601 string (e.g. `CollectionSummary.modifiedAt`). Unifies the two
 * call sites that previously had near-identical helpers.
 *
 * Returns `'—'` for missing / invalid timestamps so it's safe to render
 * directly without extra null checks.
 */
export function formatTimeAgo(input: string | number): string {
  let t: number;
  if (typeof input === 'number') {
    t = input;
  } else {
    if (!input) return '—';
    t = new Date(input).getTime();
  }
  if (!Number.isFinite(t) || t <= 0) return '—';
  const diff = Date.now() - t;
  if (diff < 60_000)         return 'just now';
  if (diff < 3_600_000)      return `${Math.floor(diff / 60_000)}m ago`;
  if (diff < 86_400_000)     return `${Math.floor(diff / 3_600_000)}h ago`;
  if (diff < 30 * 86_400_000) return `${Math.floor(diff / 86_400_000)}d ago`;
  return new Date(t).toISOString().slice(0, 10);
}

// ─── Scope labels ────────────────────────────────────────────────────────────

/**
 * Compact labels for badge-style rendering (table cells, chips). Keep
 * these short — they appear next to colour-coded backgrounds where
 * length matters more than precision. The CSS uppercases on render,
 * so `'character'` renders as `CHARACTER` and overflows the Scope
 * column in the sidebar — abbreviate to `'char'` to fit comfortably.
 */
export const SCOPE_LABEL_SHORT: Record<CollectionSummary['scope'], string> = {
  script:    'script',
  character: 'char',
  chat:      'chat',
};

/**
 * Long labels for prose contexts (dialog body, tooltips). Use when the
 * label is read as part of a sentence — "drop a Character-scoped
 * collection" — rather than viewed as a chip.
 */
export const SCOPE_LABEL_LONG: Record<CollectionSummary['scope'], string> = {
  script:    'Script-scoped',
  character: 'Character-scoped',
  chat:      'Chat-scoped',
};

// ─── JSON syntax highlighting ────────────────────────────────────────────────

/**
 * Tiny regex-based JSON syntax highlighter — wraps tokens in
 * `<span class="ls-json-…">` for CSS coloring. Used by:
 *
 *   - InspectModal (read-only `<pre>` rendering of each record)
 *   - EditRecordModal (overlay layer beneath a transparent textarea
 *     for live highlighting while typing)
 *
 * Why hand-rolled vs a library: 30-line regex pass costs zero KB of
 * deps; libraries like Prism / highlight.js add 30+ KB gzipped for a
 * feature that only renders here.
 *
 * Safety: input is HTML-escaped FIRST (`&` `<` `>` neutralised), so
 * even if a record contains `<script>` or other HTML-like content, the
 * rendered output only contains our own controlled `<span>` wrappers.
 *
 * Token order in the alternation matters: keys before plain strings,
 * because keys are detected by the trailing colon and we want the more
 * specific match to win. Partial / invalid JSON (mid-edit in the
 * editor overlay) tokenizes whatever IS valid and leaves the rest
 * unstyled — graceful degradation is the right behaviour for live edits.
 */
export function highlightJson(jsonString: string): string {
  const escaped = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(
    /("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false)\b|\b(null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    (_match, key, colon, str, bool, nul, num) => {
      if (key)  return `<span class="ls-json-key">${key}</span>${colon}`;
      if (str)  return `<span class="ls-json-string">${str}</span>`;
      if (bool) return `<span class="ls-json-bool">${bool}</span>`;
      if (nul)  return `<span class="ls-json-null">${nul}</span>`;
      if (num)  return `<span class="ls-json-number">${num}</span>`;
      return _match;
    },
  );
}

// ─── Per-record highlight cache + body cap (collection-search perf) ───────────

/**
 * Cap (chars) on the pretty-printed body fed to {@link highlightJson}. A record
 * larger than this highlights only its head; the remainder is replaced by a
 * plain truncation marker, so the synchronous highlight + `dangerouslySetInnerHTML`
 * DOM build stays bounded for pathologically large records. Copy-JSON / Edit
 * still expose the full record, so nothing is lost — only the inline
 * syntax-highlighted preview is clipped.
 */
export const RECORD_BODY_HIGHLIGHT_CAP = 8192;

/**
 * Highlight a pretty-printed record body, capping the highlighted portion at
 * {@link RECORD_BODY_HIGHLIGHT_CAP}. The truncation marker is appended AFTER the
 * `highlightJson` call (never inside its input), so a mid-string slice cannot
 * leave an unbalanced quote that mis-tokenizes the tail; the marker contains no
 * `& < >`, so it is safe to emit unescaped alongside the highlighter's output.
 */
export function highlightBodyCapped(pretty: string): string {
  if (pretty.length <= RECORD_BODY_HIGHLIGHT_CAP) return highlightJson(pretty);
  const omitted = pretty.length - RECORD_BODY_HIGHLIGHT_CAP;
  return (
    highlightJson(pretty.slice(0, RECORD_BODY_HIGHLIGHT_CAP)) +
    `\n… (${omitted} more chars truncated — use Copy JSON for the full record)`
  );
}

/**
 * Module-level LRU cache of highlighted record HTML, keyed on record identity +
 * version (`id:updatedAt`). Records are immutable except for an `updatedAt` bump
 * on edit (see `DbStore.update`), so the key changes exactly when the body
 * changes: a stale entry is structurally impossible, and an edit auto-busts it.
 *
 * Why it exists: every filter response hands the InspectModal a FRESH set of
 * deserialized record objects (new identities), which defeats an identity-keyed
 * `useMemo` and would force a full re-highlight + `dangerouslySetInnerHTML` DOM
 * rebuild of every matching row on each keystroke. Returning a reference-stable
 * HTML string for an unchanged record lets React skip both the recompute AND the
 * innerHTML re-parse (its `dangerouslySetInnerHTML` diff is then a no-op).
 */
const HL_CACHE = new Map<string, string>();
const HL_CACHE_MAX = 512;

/** Return the cached highlighted HTML for `key`, or build + cache (LRU) it. */
export function cachedRecordHtml(key: string, build: () => string): string {
  const hit = HL_CACHE.get(key);
  if (hit !== undefined) {
    // Touch for LRU recency (delete + re-insert moves it to the tail).
    HL_CACHE.delete(key);
    HL_CACHE.set(key, hit);
    return hit;
  }
  const html = build();
  HL_CACHE.set(key, html);
  if (HL_CACHE.size > HL_CACHE_MAX) {
    const oldest = HL_CACHE.keys().next().value;
    if (oldest !== undefined) HL_CACHE.delete(oldest);
  }
  return html;
}

/** Test seam — drop all cached highlight HTML. */
export function _clearHighlightCache(): void {
  HL_CACHE.clear();
}

/** Test seam — current cache entry count. */
export function _highlightCacheSize(): number {
  return HL_CACHE.size;
}

// ─── Clipboard helpers ───────────────────────────────────────────────────────

/**
 * Best-effort clipboard write. Returns `true` on success, `false` if
 * the browser's clipboard API rejected (insecure context, missing
 * permission, etc.). Callers can show a toast or inline checkmark
 * based on the boolean.
 *
 * Wraps the await in a try/catch because `navigator.clipboard.writeText`
 * rejects rather than throwing synchronously, and we want a clean
 * boolean return rather than forcing every caller to handle the
 * Promise rejection.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
