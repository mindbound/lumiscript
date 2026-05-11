/**
 * ============================================================================
 * LUMISCRIPT — DIAGNOSTICS MARKDOWN SERIALIZER
 * ============================================================================
 * Serialize a `DiagnosticsReport` to plain Markdown for paste-to-Discord
 * support flows.
 *
 * **Format stability commitment** (per `notes/diagnostics-design.md`):
 * once users start including diagnostic dumps in support reports, this
 * format becomes a quasi-public API. Future versions extend (new
 * sections appended, new check rows within sections) but **do not
 * rename existing sections or check labels, and do not reorder
 * sections**. The summary block at the top stays in the same shape so
 * users / supporters can scan it consistently across releases.
 */

import type { DiagnosticsReport, DiagnosticStatus } from '../../engine/diagnostics.js';

const STATUS_LABEL: Record<DiagnosticStatus, string> = {
  pass: 'Pass',
  warn: 'Warn',
  fail: 'Fail',
  info: 'Info',
};

/** Serialize a report to plain Markdown. */
export function serializeReportAsMarkdown(report: DiagnosticsReport): string {
  const lines: string[] = [];

  // Header — version-ish (timestamp + overall). Locale-formatted date is
  // friendly for Discord pastes; ISO would be more precise but less readable.
  lines.push('# LumiScript Diagnostics');
  lines.push(`Generated: ${new Date(report.generatedAt).toLocaleString()}`);
  lines.push(`Overall: ${determineOverall(report)}`);
  lines.push('');

  // Summary block — drives the scan-this-first usefulness.
  lines.push('## Summary');
  lines.push(`- Failures: ${report.summary.failures}`);
  lines.push(`- Warnings: ${report.summary.warnings}`);
  lines.push(`- Passes: ${report.summary.passes}`);
  lines.push(`- Info: ${report.summary.info}`);
  lines.push('');

  // Sectioned checks — flat bullet list per section. Each check on
  // one line so paste targets (Discord with its message length cap)
  // don't blow up vertically.
  for (const section of report.sections) {
    lines.push(`## ${section.name}`);
    for (const check of section.checks) {
      lines.push(`- [${STATUS_LABEL[check.status]}] ${check.label}: ${check.message}`);
    }
    lines.push('');
  }

  return lines.join('\n').trimEnd() + '\n';
}

/** Compute the overall health label for the report header. */
function determineOverall(report: DiagnosticsReport): string {
  if (report.summary.failures > 0) return 'Needs attention (failures present)';
  if (report.summary.warnings > 0) return 'Needs attention (warnings present)';
  return 'Healthy';
}
