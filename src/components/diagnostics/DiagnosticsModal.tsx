/**
 * ============================================================================
 * LUMISCRIPT — DIAGNOSTICS MODAL (v0.28.0+)
 * ============================================================================
 * Full-screen portaled modal that renders a `DiagnosticsReport` snapshot of
 * LumiScript's runtime state. Triggered from the "View Diagnostics" button
 * in the Settings panel; mirrors the shape of Lumiverse's Memory Cortex
 * Diagnostics modal (header with Refresh + Copy buttons, status-badged
 * checks grouped by section, ESC / backdrop dismissal).
 *
 * State flow:
 *   1. Mount → dispatch `request_diagnostics` to backend.
 *   2. Backend collects from registries, probes storage + script-runner,
 *      sends `diagnostics_report` back.
 *   3. Component renders the report; user can hit Refresh for a fresh
 *      snapshot, or Copy to copy the markdown-formatted dump into their
 *      clipboard for Discord support reports.
 *
 * The markdown serializer + Section F (frontend-side Monaco / fonts /
 * worker / CDN checks) are introduced in Phase 4 — this Phase 3 scaffold
 * renders just the backend-collected sections (A / B / C / D / E).
 */

import { useState, useEffect, useCallback, useMemo, type FC } from 'react';
import { createPortal } from 'react-dom';
import { X, RefreshCw, Activity, CheckCircle2, AlertTriangle, Info, XCircle, Copy, Check } from 'lucide-react';
import type { FrontendToBackend, BackendToFrontend } from '../../types/messages.js';
import type {
  DiagnosticsReport, DiagnosticStatus, DiagnosticCheck, DiagnosticSection,
} from '../../engine/diagnostics.js';
import { runSectionFChecks } from './section-f-checks.js';
import { serializeReportAsMarkdown } from './serialize-markdown.js';

export interface DiagnosticsModalProps {
  /** Closes the modal — bubbled up to the parent so it can drop state. */
  onClose:        () => void;
  /** Backend message channel subscriber. */
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  /** Backend message dispatcher. */
  sendToBackend:  (msg: FrontendToBackend) => void;
}

export const DiagnosticsModal: FC<DiagnosticsModalProps> = ({
  onClose,
  onBackendMessage,
  sendToBackend,
}) => {
  const [report,          setReport]          = useState<DiagnosticsReport | null>(null);
  const [loading,         setLoading]         = useState(true);
  const [frontendSection, setFrontendSection] = useState<DiagnosticSection | null>(null);
  const [copyState,       setCopyState]       = useState<'idle' | 'copied' | 'error'>('idle');

  // Subscribe to backend responses + kick off the initial request. After
  // receiving the backend report, fire Section F's frontend-side probes
  // (font subsystem / blob worker / CDN reachability) in parallel and
  // merge them in when they resolve.
  useEffect(() => {
    const unsub = onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;
      if (msg.type === 'diagnostics_report') {
        setReport(msg.report);
        setLoading(false);
        setFrontendSection(null);
        // Section F runs only after the backend report arrives so the
        // user sees the backend rows immediately — the FE probes append
        // when they finish (up to ~5s for the CDN HEAD probe).
        void runSectionFChecks().then(setFrontendSection).catch(() => {
          /* swallow — Section F failure shouldn't break the rest of the modal */
        });
      }
    });
    sendToBackend({ type: 'request_diagnostics' });
    return unsub;
  }, [onBackendMessage, sendToBackend]);

  // ESC to close — paired with click-on-backdrop in the JSX below.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleRefresh = useCallback(() => {
    setLoading(true);
    setFrontendSection(null);
    sendToBackend({ type: 'request_diagnostics' });
  }, [sendToBackend]);

  // Merged report = BE sections + the FE-collected Section F (when it
  // resolves). Summary is recomputed because Section F's checks need to
  // count toward the failures/warnings/passes/info totals.
  const mergedReport = useMemo<DiagnosticsReport | null>(() => {
    if (!report) return null;
    if (!frontendSection) return report;
    const sections = [...report.sections, frontendSection];
    let failures = 0, warnings = 0, passes = 0, info = 0;
    for (const section of sections) {
      for (const check of section.checks) {
        switch (check.status) {
          case 'fail': failures++; break;
          case 'warn': warnings++; break;
          case 'pass': passes++;  break;
          case 'info': info++;    break;
        }
      }
    }
    return {
      generatedAt: report.generatedAt,
      summary:     { failures, warnings, passes, info },
      sections,
    };
  }, [report, frontendSection]);

  const handleCopy = useCallback(async () => {
    if (!mergedReport) return;
    try {
      await navigator.clipboard.writeText(serializeReportAsMarkdown(mergedReport));
      setCopyState('copied');
    } catch {
      setCopyState('error');
    }
    // Auto-revert the button state so the user knows the action is repeatable.
    window.setTimeout(() => setCopyState('idle'), 2_000);
  }, [mergedReport]);

  // Pre-compute the overall tone for the header summary chip. fail > warn > pass.
  const overallTone: DiagnosticStatus =
    !mergedReport                           ? 'info'
    : mergedReport.summary.failures > 0     ? 'fail'
    : mergedReport.summary.warnings > 0     ? 'warn'
    : 'pass';

  return createPortal(
    <div
      className="ls-diag-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="ls-diag-modal" role="dialog" aria-modal="true">
        <div className="ls-diag-header">
          <div className="ls-diag-title-wrap">
            <div className="ls-diag-eyebrow">
              <Activity size={11} />
              LumiScript
            </div>
            <h2 className="ls-diag-title">Diagnostics</h2>
            <p className="ls-diag-subtitle">
              Snapshot of LumiScript&apos;s runtime state — version, granted permissions, script-runner subprocess health, active context, registrations, storage, editor.
            </p>
          </div>
          <div className="ls-diag-header-actions">
            <SummaryChip report={mergedReport} tone={overallTone} />
            <button
              type="button"
              className="ls-diag-action-btn"
              onClick={handleRefresh}
              disabled={loading}
              title="Re-run all checks"
            >
              <RefreshCw size={13} className={loading ? 'ls-diag-spin' : undefined} />
              Refresh
            </button>
            <button
              type="button"
              className={`ls-diag-action-btn${copyState === 'copied' ? ' ls-diag-action-btn-done' : ''}${copyState === 'error' ? ' ls-diag-action-btn-error' : ''}`}
              onClick={handleCopy}
              disabled={!mergedReport}
              title="Copy as Markdown for Discord support reports"
            >
              {copyState === 'copied' ? <Check size={13} /> : <Copy size={13} />}
              {copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy Report'}
            </button>
            <button type="button" className="ls-diag-close" onClick={onClose} title="Close (Esc)">
              <X size={15} />
            </button>
          </div>
        </div>

        <div className="ls-diag-body">
          {loading && !mergedReport && (
            <div className="ls-diag-loading">
              <RefreshCw size={18} className="ls-diag-spin" />
              <span>Collecting diagnostic snapshot…</span>
            </div>
          )}

          {mergedReport && mergedReport.sections.map((section) => (
            <section key={section.id} className="ls-diag-section">
              <h3 className="ls-diag-section-title">{section.name}</h3>
              <div className="ls-diag-checks">
                {section.checks.map((check, i) => (
                  <CheckRow key={`${section.id}-${i}`} check={check} />
                ))}
              </div>
            </section>
          ))}

          {/* While the frontend probes are still running, show a small
              indicator so the user knows more rows are coming. Cleared
              once `frontendSection` resolves. */}
          {report && !frontendSection && (
            <div className="ls-diag-loading">
              <RefreshCw size={14} className="ls-diag-spin" />
              <span>Running frontend probes…</span>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

// ─── Inner components ──────────────────────────────────────────────────────

interface SummaryChipProps {
  report: DiagnosticsReport | null;
  tone:   DiagnosticStatus;
}

/** Top-level health summary — a small chip in the modal header. */
const SummaryChip: FC<SummaryChipProps> = ({ report, tone }) => {
  if (!report) return null;
  const { failures, warnings, passes, info } = report.summary;
  return (
    <span className={`ls-diag-summary-chip ls-diag-tone-${tone}`}>
      {failures > 0 && <span>{failures} fail</span>}
      {warnings > 0 && <span>{warnings} warn</span>}
      <span>{passes} pass</span>
      <span>{info} info</span>
    </span>
  );
};

interface CheckRowProps {
  check: DiagnosticCheck;
}

/**
 * Single check row — status badge + label + message (or table).
 *
 * When `check.table` is set, the row renders an HTML table instead of
 * the plain message string. The Workers row uses this for per-worker
 * stats (scales cleanly to the 16-worker pool cap). All other current
 * checks use the message-only path.
 */
const CheckRow: FC<CheckRowProps> = ({ check }) => (
  <div className="ls-diag-check">
    <StatusBadge status={check.status} />
    <div className="ls-diag-check-body">
      <div className="ls-diag-check-label">{check.label}</div>
      {check.table ? (
        <table className="ls-diag-check-table">
          <thead>
            <tr>
              {check.table.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {check.table.rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="ls-diag-check-message">{check.message}</div>
      )}
    </div>
  </div>
);

interface StatusBadgeProps {
  status: DiagnosticStatus;
}

const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const Icon = status === 'pass' ? CheckCircle2
             : status === 'warn' ? AlertTriangle
             : status === 'fail' ? XCircle
             : Info;
  const label = status === 'pass' ? 'Pass'
              : status === 'warn' ? 'Warn'
              : status === 'fail' ? 'Fail'
              : 'Info';
  return (
    <span className={`ls-diag-badge ls-diag-tone-${status}`} title={label}>
      <Icon size={12} />
    </span>
  );
};
