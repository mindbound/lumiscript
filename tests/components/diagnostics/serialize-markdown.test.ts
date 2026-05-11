/**
 * Tests for `src/components/diagnostics/serialize-markdown.ts`.
 *
 * The serializer's output is a quasi-public surface — users paste these
 * reports into Discord support reports — so format stability matters.
 * These tests pin the structural invariants:
 *   - Top-level title + timestamp + overall + summary blocks
 *   - One section header per section, in input order
 *   - One bullet per check, with the `[Status]` prefix
 *   - Overall label flips based on summary state
 */

import { describe, test, expect } from 'bun:test';
import { serializeReportAsMarkdown } from '../../../src/components/diagnostics/serialize-markdown.js';
import type { DiagnosticsReport } from '../../../src/engine/diagnostics.js';

function buildReport(overrides?: Partial<DiagnosticsReport>): DiagnosticsReport {
  return {
    generatedAt: new Date('2026-05-08T12:00:00Z').getTime(),
    summary:     { failures: 0, warnings: 0, passes: 0, info: 0 },
    sections:    [],
    ...overrides,
  };
}

describe('serializeReportAsMarkdown — top-level structure', () => {
  test('includes title, timestamp, overall, summary, in stable order', () => {
    const md = serializeReportAsMarkdown(buildReport());
    const lines = md.split('\n');
    expect(lines[0]).toBe('# LumiScript Diagnostics');
    expect(lines[1]).toMatch(/^Generated:/);
    expect(lines[2]).toMatch(/^Overall:/);
    // line 3 blank, line 4 ## Summary
    expect(lines[3]).toBe('');
    expect(lines[4]).toBe('## Summary');
  });

  test('summary block lines are in stable order: Failures, Warnings, Passes, Info', () => {
    const md = serializeReportAsMarkdown(buildReport({
      summary: { failures: 1, warnings: 2, passes: 3, info: 4 },
    }));
    const summaryStart = md.indexOf('## Summary');
    const block = md.slice(summaryStart).split('\n').slice(1, 5);
    expect(block).toEqual([
      '- Failures: 1',
      '- Warnings: 2',
      '- Passes: 3',
      '- Info: 4',
    ]);
  });

  test('ends with a trailing newline', () => {
    const md = serializeReportAsMarkdown(buildReport());
    expect(md.endsWith('\n')).toBe(true);
  });
});

describe('serializeReportAsMarkdown — overall health label', () => {
  test('all zeros → Healthy', () => {
    const md = serializeReportAsMarkdown(buildReport());
    expect(md).toContain('Overall: Healthy');
  });

  test('any warning, no failures → Needs attention (warnings present)', () => {
    const md = serializeReportAsMarkdown(buildReport({
      summary: { failures: 0, warnings: 1, passes: 5, info: 0 },
    }));
    expect(md).toContain('Overall: Needs attention (warnings present)');
  });

  test('any failure → Needs attention (failures present), even when warnings also present', () => {
    const md = serializeReportAsMarkdown(buildReport({
      summary: { failures: 1, warnings: 3, passes: 5, info: 0 },
    }));
    expect(md).toContain('Overall: Needs attention (failures present)');
    expect(md).not.toContain('warnings present');
  });
});

describe('serializeReportAsMarkdown — sections', () => {
  test('each section gets its own h2 header in input order', () => {
    const md = serializeReportAsMarkdown(buildReport({
      sections: [
        { id: 'a', name: 'Alpha',   checks: [] },
        { id: 'b', name: 'Beta',    checks: [] },
        { id: 'c', name: 'Gamma',   checks: [] },
      ],
    }));
    const aIdx = md.indexOf('## Alpha');
    const bIdx = md.indexOf('## Beta');
    const cIdx = md.indexOf('## Gamma');
    expect(aIdx).toBeGreaterThan(-1);
    expect(bIdx).toBeGreaterThan(aIdx);
    expect(cIdx).toBeGreaterThan(bIdx);
  });

  test('each check renders as "- [Label] label: message"', () => {
    const md = serializeReportAsMarkdown(buildReport({
      summary: { failures: 1, warnings: 1, passes: 1, info: 1 },
      sections: [
        {
          id: 's1',
          name: 'Section One',
          checks: [
            { label: 'Check P', status: 'pass', message: 'all good' },
            { label: 'Check W', status: 'warn', message: 'mild' },
            { label: 'Check F', status: 'fail', message: 'broken' },
            { label: 'Check I', status: 'info', message: 'fyi' },
          ],
        },
      ],
    }));
    expect(md).toContain('- [Pass] Check P: all good');
    expect(md).toContain('- [Warn] Check W: mild');
    expect(md).toContain('- [Fail] Check F: broken');
    expect(md).toContain('- [Info] Check I: fyi');
  });

  test('empty section renders the header but no bullets', () => {
    const md = serializeReportAsMarkdown(buildReport({
      sections: [{ id: 'x', name: 'Empty', checks: [] }],
    }));
    expect(md).toContain('## Empty');
    // No "- [" prefix anywhere in the empty section.
    const emptyStart = md.indexOf('## Empty');
    const afterEmpty = md.slice(emptyStart);
    expect(afterEmpty).not.toMatch(/^- \[/m);
  });
});

describe('serializeReportAsMarkdown — full integration shape', () => {
  test('realistic report produces a Discord-paste-ready dump', () => {
    const md = serializeReportAsMarkdown(buildReport({
      summary: { failures: 0, warnings: 1, passes: 8, info: 3 },
      sections: [
        {
          id:   'lumiscript',
          name: 'LumiScript',
          checks: [
            { label: 'Version',                         status: 'info', message: '0.28.0' },
            { label: 'Minimum Lumiverse host version',  status: 'info', message: 'Requires 0.9.5' },
            { label: 'Granted permissions',             status: 'pass', message: '6 permission(s) granted' },
          ],
        },
        {
          id:   'editor',
          name: 'Editor / Monaco',
          checks: [
            { label: 'Document fonts state', status: 'pass', message: 'Loaded (12 font face(s) registered)' },
            { label: 'Blob-URL worker support', status: 'warn', message: 'Worker created but did not dispatch within 1000ms' },
          ],
        },
      ],
    }));
    // Sanity-check the gestalt — header, summary, both sections, status
    // prefixes, all present and in plausible order.
    expect(md).toContain('# LumiScript Diagnostics');
    expect(md).toContain('Overall: Needs attention (warnings present)');
    expect(md).toContain('## Summary');
    expect(md.indexOf('## LumiScript')).toBeLessThan(md.indexOf('## Editor / Monaco'));
    expect(md).toContain('- [Info] Version: 0.28.0');
    expect(md).toContain('- [Warn] Blob-URL worker support:');
  });
});
