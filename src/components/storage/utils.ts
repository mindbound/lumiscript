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
