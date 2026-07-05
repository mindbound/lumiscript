/**
 * Formatting + serialization helpers for bench output: aligned timing tables
 * for the console, plus JSON/CSV emit for `bench/results/` (gitignored).
 */

import type { HistogramSummary } from './timer.js';

/** Format milliseconds compactly (µs below 1ms, s above 1000ms). */
export function fmtMs(ms: number): string {
  if (Number.isNaN(ms)) return '—';
  if (ms < 1) return `${(ms * 1000).toFixed(1)}µs`;
  if (ms < 1000) return `${ms.toFixed(2)}ms`;
  return `${(ms / 1000).toFixed(2)}s`;
}

/** Format a byte count as MB (1 decimal). */
export function fmtMb(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export interface NamedSummary {
  label:   string;
  summary: HistogramSummary;
}

/** Render a set of named timing summaries as an aligned text table. */
export function timingTable(rows: NamedSummary[]): string {
  const header = ['label', 'count', 'p50', 'p95', 'p99', 'mean', 'max'];
  const body = rows.map((r) => [
    r.label,
    String(r.summary.count),
    fmtMs(r.summary.p50),
    fmtMs(r.summary.p95),
    fmtMs(r.summary.p99),
    fmtMs(r.summary.mean),
    fmtMs(r.summary.max),
  ]);
  return renderTable(header, body);
}

/** Render a header row + body rows as a monospace-aligned table. */
export function renderTable(header: string[], rows: string[][]): string {
  const widths = header.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => (r[i] ?? '').length)),
  );
  const fmtRow = (cells: string[]): string =>
    cells.map((c, i) => c.padEnd(widths[i] as number)).join('  ');
  const sep = widths.map((w) => '─'.repeat(w)).join('  ');
  return [fmtRow(header), sep, ...rows.map(fmtRow)].join('\n');
}

/** Serialize an arbitrary results object to pretty JSON. */
export function toJson(obj: unknown): string {
  return JSON.stringify(obj, null, 2);
}

/** Serialize records to CSV (header from the first row's keys). */
export function toCsv(rows: Array<Record<string, string | number>>): string {
  const first = rows[0];
  if (first === undefined) return '';
  const keys = Object.keys(first);
  const esc = (v: string | number): string => {
    const s = String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [
    keys.join(','),
    ...rows.map((r) => keys.map((k) => esc(r[k] ?? '')).join(',')),
  ].join('\n');
}
