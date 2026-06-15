/**
 * Unit tests for `src/components/storage/utils.ts` — the pure formatting helpers
 * shared across the Storage tab (byte formatting, relative time, JSON syntax
 * highlighting, scope labels). `copyToClipboard` is omitted — it's a thin
 * try/catch over `navigator.clipboard.writeText` with no logic of its own.
 */
import { describe, test, expect } from 'bun:test';
import {
  formatBytes,
  formatValue,
  formatTimeAgo,
  highlightJson,
  SCOPE_LABEL_SHORT,
  SCOPE_LABEL_LONG,
} from '../../../src/components/storage/utils.js';

describe('formatBytes', () => {
  test('zero / negative / non-finite collapse to "0 B"', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(-100)).toBe('0 B');
    expect(formatBytes(NaN)).toBe('0 B');
    expect(formatBytes(Infinity)).toBe('0 B');
  });

  test('B / KB / MB / GB with correct precision', () => {
    expect(formatBytes(512)).toBe('512 B');        // B → no decimals
    expect(formatBytes(1536)).toBe('1.5 KB');      // KB+ → one decimal
    expect(formatBytes(1024 * 1024)).toBe('1.0 MB');
    expect(formatBytes(1024 ** 3 * 2)).toBe('2.0 GB');
  });

  test('caps at GB (no higher unit)', () => {
    expect(formatBytes(1024 ** 4)).toBe('1024.0 GB');
  });
});

describe('formatTimeAgo', () => {
  test('recent → "just now"', () => {
    expect(formatTimeAgo(Date.now() - 5_000)).toBe('just now');
  });

  test('minutes / hours / days buckets', () => {
    expect(formatTimeAgo(Date.now() - 2 * 60_000)).toBe('2m ago');
    expect(formatTimeAgo(Date.now() - 3 * 3_600_000)).toBe('3h ago');
    expect(formatTimeAgo(Date.now() - 4 * 86_400_000)).toBe('4d ago');
  });

  test('older than 30d → ISO date (YYYY-MM-DD)', () => {
    const old = Date.now() - 40 * 86_400_000;
    expect(formatTimeAgo(old)).toBe(new Date(old).toISOString().slice(0, 10));
  });

  test('accepts ISO-8601 strings, not just ms', () => {
    expect(formatTimeAgo(new Date(Date.now() - 2 * 60_000).toISOString())).toBe('2m ago');
  });

  test('missing / invalid → "—"', () => {
    expect(formatTimeAgo('')).toBe('—');
    expect(formatTimeAgo('not-a-date')).toBe('—');
    expect(formatTimeAgo(0)).toBe('—');
  });
});

describe('highlightJson', () => {
  test('wraps keys / strings / numbers / bools / null in classed spans', () => {
    const out = highlightJson('{"k": "v", "n": 42, "b": true, "z": null}');
    expect(out).toContain('<span class="ls-json-key">"k"</span>');
    expect(out).toContain('<span class="ls-json-string">"v"</span>');
    expect(out).toContain('<span class="ls-json-number">42</span>');
    expect(out).toContain('<span class="ls-json-bool">true</span>');
    expect(out).toContain('<span class="ls-json-null">null</span>');
  });

  test('HTML-escapes input before tokenizing (no raw tags survive)', () => {
    const out = highlightJson('{"x": "<script>alert(1)</script>"}');
    expect(out).not.toContain('<script>');
    expect(out).toContain('&lt;script&gt;');
  });
});

describe('scope labels', () => {
  test('short labels (compact, for chips)', () => {
    expect(SCOPE_LABEL_SHORT.script).toBe('script');
    expect(SCOPE_LABEL_SHORT.character).toBe('char');
    expect(SCOPE_LABEL_SHORT.chat).toBe('chat');
  });

  test('long labels (prose)', () => {
    expect(SCOPE_LABEL_LONG.character).toBe('Character-scoped');
  });
});

describe('formatValue', () => {
  test('undefined / null render as literal keywords', () => {
    expect(formatValue(undefined)).toBe('undefined');
    expect(formatValue(null)).toBe('null');
  });

  test('short strings render raw', () => {
    expect(formatValue('hello')).toBe('hello');
  });

  test('long strings truncate to 77 chars + ellipsis', () => {
    expect(formatValue('x'.repeat(100))).toBe('x'.repeat(77) + '…');
  });

  test('non-string values are JSON-stringified', () => {
    expect(formatValue(42)).toBe('42');
    expect(formatValue({ a: 1 })).toBe('{"a":1}');
    expect(formatValue([1, 2])).toBe('[1,2]');
  });

  test('long JSON output truncates to 77 + ellipsis', () => {
    const out = formatValue({ s: 'y'.repeat(100) });
    expect(out.endsWith('…')).toBe(true);
    expect(out.length).toBe(78);
  });

  test('unserialisable values fall back to String()', () => {
    const circular: Record<string, unknown> = {};
    circular.self = circular;
    expect(formatValue(circular)).toBe('[object Object]');
  });
});
