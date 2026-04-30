/**
 * Test-only `ScriptRunner` strategy that runs scripts in-process via
 * `executeScript` instead of dispatching through `spindle.backendProcesses`.
 *
 * Why this exists: with Phase 9c, production `TriggerRegistry` dispatches
 * scripts through a supervised child subprocess. The trigger-registry tests
 * validate orchestration logic (batch aggregation, lifecycle messages,
 * stale-handle cleanup) — they don't care WHERE the script body runs, only
 * that the result flows through the surrounding code correctly. Mocking
 * `spindle.backendProcesses` to actually execute scripts would require
 * reimplementing most of the child runtime; injecting an in-process runner
 * sidesteps that entirely.
 *
 * The runner takes the same `(script, request, opts)` shape as the
 * production `runScriptViaChild`, calls `executeScript` with the right
 * argument re-shape, and returns the same `{success, duration, error?}`
 * envelope the trigger-registry consumer expects.
 */

import type { Script } from '../../src/types/script.js';
import type { ScriptRunner } from '../../src/engine/trigger-registry.js';
import { executeScript } from '../../src/engine/executor.js';

export const inProcessRunner: ScriptRunner = async (
  script:  Script,
  request,
  opts,
) => {
  const r = await executeScript(script, {
    grantedPermissions: request.grantedPermissions,
    userId:             request.userId,
    eventData:          request.data as Record<string, unknown> | undefined,
    timeoutMs:          request.timeoutMs,
    onConsole:          opts.onConsole,
    onToolsChanged:     opts.onToolsChanged,
    toolsRegisteredThisRun:             opts.toolsRegisteredThisRun,
    macrosRegisteredThisRun:            opts.macrosRegisteredThisRun,
    macroInterceptorsRegisteredThisRun: opts.macroInterceptorsRegisteredThisRun,
    contentProcessorsRegisteredThisRun: opts.contentProcessorsRegisteredThisRun,
    // `scriptStorage` is intentionally omitted — tests that exercise
    // user-library `script.require()` should pass it via a custom runner.
    // Default in-process runner serves the trigger-registry tests, which
    // don't require library resolution.
  });
  return {
    success:  r.success,
    duration: r.duration,
    ...(r.error ? { error: { message: r.error.message } } : {}),
  };
};
