/**
 * Unit tests for `src/components/reference/markdown-export.ts` —
 * `renderReferenceMarkdown()` is pure string generation over the Reference data
 * constants, so it's covered directly. `downloadReferenceMarkdown()` (the
 * Blob/URL/anchor download shim) is omitted — no logic beyond the browser API.
 */
import { describe, test, expect } from 'bun:test';
import { renderReferenceMarkdown } from '../../../src/components/reference/markdown-export.js';

describe('renderReferenceMarkdown', () => {
  const md = renderReferenceMarkdown();

  test('produces a substantial markdown document with headings', () => {
    expect(md.length).toBeGreaterThan(1000);
    expect(md).toMatch(/^#/m); // at least one markdown heading
  });

  test('includes reference data from the source constants', () => {
    // Event names come straight from the EVENTS array — including CHAT_FORKED,
    // which was added this session, so this also guards the export against drift.
    expect(md).toContain('MESSAGE_SENT');
    expect(md).toContain('GENERATION_ENDED');
    expect(md).toContain('CHAT_FORKED');
  });

  test('is deterministic across calls', () => {
    expect(renderReferenceMarkdown()).toBe(md);
  });
});
