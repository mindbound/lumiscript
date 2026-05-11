/**
 * ============================================================================
 * LUMISCRIPT — DIAGNOSTICS SECTION F (FE-SIDE CHECKS)
 * ============================================================================
 * Browser-environment probes that can only be evaluated frontend-side:
 *   - `document.fonts` state + readiness (catches the Firefox-Windows
 *     font subsystem hang documented in
 *     `notes/known-issue-monaco-firefox-windows-init-hang.md`)
 *   - Blob-URL worker support (catches the worker-src CSP issue
 *     mindbound relayed to Prolix — Monaco's language workers depend on
 *     blob: workers).
 *   - Monaco CDN reachability (corporate proxy / firewall detection).
 *
 * Each probe has its own bounded timeout. The full suite resolves in
 * at most ~5s (the CDN HEAD limit, the slowest probe). All probes run
 * concurrently via Promise.all.
 *
 * Output shape matches `DiagnosticSection` so it can be merged into the
 * backend-collected report by `DiagnosticsModal` before rendering.
 */

import type { DiagnosticSection, DiagnosticCheck } from '../../engine/diagnostics.js';

const MONACO_CDN_PROBE_URL  = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/package.json';
const FONTS_READY_TIMEOUT_MS = 2_000;
const WORKER_PROBE_TIMEOUT_MS = 1_000;
const CDN_HEAD_TIMEOUT_MS    = 5_000;

/**
 * Run all frontend-side diagnostic probes concurrently and return a
 * `DiagnosticSection` ready to merge into the backend report's sections.
 */
export async function runSectionFChecks(): Promise<DiagnosticSection> {
  // Synchronous reads happen up front; async probes run concurrently.
  const checks: DiagnosticCheck[] = [];

  // ── document.fonts.status / size — sync reads ─────────────────────────
  if ('fonts' in document) {
    const status = document.fonts.status; // 'loaded' | 'loading'
    checks.push({
      label:   'Document fonts state',
      status:  status === 'loaded' ? 'pass' : 'warn',
      message: status === 'loaded'
        ? `Loaded (${document.fonts.size} font face(s) registered)`
        : 'Still loading after page mount — possible font subsystem hang',
      details: { status, size: document.fonts.size },
    });
  } else {
    checks.push({
      label:   'Document fonts state',
      status:  'info',
      message: 'document.fonts API unavailable (very old browser)',
    });
  }

  // ── Async probes concurrently ─────────────────────────────────────────
  const [readyCheck, workerCheck, cdnCheck] = await Promise.all([
    'fonts' in document ? probeFontsReady() : Promise.resolve<DiagnosticCheck | null>(null),
    probeBlobWorker(),
    probeMonacoCdn(),
  ]);
  if (readyCheck) checks.push(readyCheck);
  checks.push(workerCheck);
  checks.push(cdnCheck);

  return { id: 'editor', name: 'Editor / Monaco', checks };
}

// ─── Individual probes ──────────────────────────────────────────────────────

async function probeFontsReady(): Promise<DiagnosticCheck> {
  const start = performance.now();
  const result = await Promise.race([
    document.fonts.ready.then(() => 'resolved' as const).catch((err: unknown) => err as Error),
    new Promise<'timeout'>((r) => setTimeout(() => r('timeout'), FONTS_READY_TIMEOUT_MS)),
  ]);
  if (result === 'resolved') {
    return {
      label:   'document.fonts.ready',
      status:  'pass',
      message: `Resolved in ${Math.round(performance.now() - start)}ms`,
    };
  }
  if (result === 'timeout') {
    return {
      label:   'document.fonts.ready',
      status:  'fail',
      // Tied directly to the Firefox-Windows font hang scenario.
      message: `Did not resolve within ${FONTS_READY_TIMEOUT_MS}ms — font subsystem may be hung (Firefox + Windows: try clearing the Windows font cache)`,
    };
  }
  return {
    label:   'document.fonts.ready',
    status:  'fail',
    message: `Rejected: ${result instanceof Error ? result.message : String(result)}`,
  };
}

function probeBlobWorker(): Promise<DiagnosticCheck> {
  return new Promise<DiagnosticCheck>((resolve) => {
    let worker: Worker | null = null;
    let blobUrl: string | null = null;
    let settled = false;

    const settle = (check: DiagnosticCheck) => {
      if (settled) return;
      settled = true;
      if (worker)  { try { worker.terminate(); } catch { /* ignore */ } }
      if (blobUrl) { try { URL.revokeObjectURL(blobUrl); } catch { /* ignore */ } }
      resolve(check);
    };

    const timer = setTimeout(() => {
      settle({
        label:   'Blob-URL worker support',
        status:  'warn',
        message: `Worker created but didn't dispatch within ${WORKER_PROBE_TIMEOUT_MS}ms`,
      });
    }, WORKER_PROBE_TIMEOUT_MS);

    try {
      const blob = new Blob(['self.postMessage("ok");'], { type: 'application/javascript' });
      blobUrl = URL.createObjectURL(blob);
      worker  = new Worker(blobUrl);
      worker.onmessage = () => {
        clearTimeout(timer);
        settle({
          label:   'Blob-URL worker support',
          status:  'pass',
          message: 'Worker created and dispatched a message',
        });
      };
      worker.onerror = (err) => {
        clearTimeout(timer);
        settle({
          label:   'Blob-URL worker support',
          status:  'fail',
          // Common cause: CSP worker-src 'self' without 'blob:' — that's
          // the issue mindbound relayed to Prolix; Monaco's language
          // workers fail the same way.
          message: `Worker errored: ${err.message ?? '<unknown>'} (likely a CSP worker-src violation)`,
        });
      };
    } catch (err) {
      clearTimeout(timer);
      settle({
        label:   'Blob-URL worker support',
        status:  'fail',
        message: `new Worker() threw: ${err instanceof Error ? err.message : String(err)} — likely a CSP worker-src violation`,
      });
    }
  });
}

async function probeMonacoCdn(): Promise<DiagnosticCheck> {
  const start = performance.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), CDN_HEAD_TIMEOUT_MS);
  try {
    const res = await fetch(MONACO_CDN_PROBE_URL, {
      method: 'HEAD',
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (res.ok) {
      return {
        label:   'Monaco CDN reachability',
        status:  'pass',
        message: `HTTP ${res.status} in ${Math.round(performance.now() - start)}ms`,
      };
    }
    return {
      label:   'Monaco CDN reachability',
      status:  'fail',
      message: `HTTP ${res.status} ${res.statusText}`,
    };
  } catch (err) {
    clearTimeout(timer);
    if (err instanceof Error && err.name === 'AbortError') {
      return {
        label:   'Monaco CDN reachability',
        status:  'fail',
        message: `Timed out after ${CDN_HEAD_TIMEOUT_MS}ms — CDN unreachable or blocked (corporate proxy / firewall?)`,
      };
    }
    return {
      label:   'Monaco CDN reachability',
      status:  'fail',
      message: `Fetch failed: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}
