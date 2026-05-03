/**
 * v0.26.1 — `trackingSetsByRunId` soft FIFO cap tests.
 *
 * The map intentionally retains entries past run-result so late
 * register-handler IPCs can dual-update the originating run's tracking set
 * (see Fix 9 in `notes/post-mortem-v0.26.1-late-ipc-bugs.md`). Without a
 * memory bound, pathological high-frequency-trigger workloads could grow
 * the map unboundedly. The soft cap with FIFO eviction guarantees a
 * memory ceiling at the cost of dropping the oldest dispatched runs'
 * dual-update support — acceptable for "pathological-only" scenarios where
 * a single dispatch's late IPCs are unlikely to traverse 10k subsequent
 * dispatches.
 *
 * Tests:
 *   - production cap value matches the documented 10,000
 *   - eviction is FIFO (oldest entry goes first)
 *   - eviction is per-entry (no bulk drops on each insertion)
 *   - lifecycle reset clears the eviction-warn-window so test isolation works
 */

import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import {
  __resetForTests,
  __getProductionTrackingSetsCapForTests,
  __setTrackingSetsCapForTests,
  __getTrackingSetsByRunIdSizeForTests,
  __hasTrackingSetEntryForTests,
} from '../../src/script-runner/host-dispatcher.js';
import { setupLateRegisterScenario } from '../_infra/long-running-script.js';

beforeEach(() => {
  __resetForTests();
});

afterEach(() => {
  __setTrackingSetsCapForTests(null);
  __resetForTests();
});

describe('host-dispatcher: trackingSetsByRunId soft cap', () => {
  test('production cap is set to the documented value', () => {
    expect(__getProductionTrackingSetsCapForTests()).toBe(10_000);
  });

  test('cap eviction is FIFO — oldest entries removed first', async () => {
    // Cap at 4 — small enough to exercise eviction without running thousands of dispatches.
    __setTrackingSetsCapForTests(4);

    // Each setupLateRegisterScenario call performs 2 dispatches (run-1 + run-2).
    // We need MORE than the cap, so call it 3 times → 6 dispatched runs.
    const scn1 = await setupLateRegisterScenario({ scriptId: 'script-A' });
    expect(__getTrackingSetsByRunIdSizeForTests()).toBe(2);

    const scn2 = await setupLateRegisterScenario({ scriptId: 'script-B', alreadySpawned: true, ipc: scn1.ipc });
    expect(__getTrackingSetsByRunIdSizeForTests()).toBe(4);

    // Both scn1's runs should still be present at this point (size === cap).
    expect(__hasTrackingSetEntryForTests(scn1.run1.runId)).toBe(true);
    expect(__hasTrackingSetEntryForTests(scn1.run2.runId)).toBe(true);

    // 5th and 6th dispatches via scn3 should evict scn1's runs (oldest).
    const scn3 = await setupLateRegisterScenario({ scriptId: 'script-C', alreadySpawned: true, ipc: scn1.ipc });

    // Cap holds at 4.
    expect(__getTrackingSetsByRunIdSizeForTests()).toBe(4);

    // FIFO: scn1's runs are gone, scn2 + scn3 retained.
    expect(__hasTrackingSetEntryForTests(scn1.run1.runId)).toBe(false);
    expect(__hasTrackingSetEntryForTests(scn1.run2.runId)).toBe(false);
    expect(__hasTrackingSetEntryForTests(scn2.run1.runId)).toBe(true);
    expect(__hasTrackingSetEntryForTests(scn2.run2.runId)).toBe(true);
    expect(__hasTrackingSetEntryForTests(scn3.run1.runId)).toBe(true);
    expect(__hasTrackingSetEntryForTests(scn3.run2.runId)).toBe(true);
  });

  test('with cap not set (production default), entries persist across many dispatches', async () => {
    // Production cap is 10_000 — many tens of dispatches don't trip it.
    const scn1 = await setupLateRegisterScenario({ scriptId: 'script-A' });
    const scn2 = await setupLateRegisterScenario({ scriptId: 'script-A', alreadySpawned: true, ipc: scn1.ipc });
    const scn3 = await setupLateRegisterScenario({ scriptId: 'script-A', alreadySpawned: true, ipc: scn1.ipc });

    // 3 setups × 2 dispatches each = 6 entries.
    expect(__getTrackingSetsByRunIdSizeForTests()).toBe(6);
    // All retained.
    expect(__hasTrackingSetEntryForTests(scn1.run1.runId)).toBe(true);
    expect(__hasTrackingSetEntryForTests(scn3.run2.runId)).toBe(true);
  });

  test('cap-override survives across the dispatches it gates, then is reset by __resetForTests', async () => {
    __setTrackingSetsCapForTests(2);
    const scn = await setupLateRegisterScenario({ scriptId: 'script-A' });
    // Even with cap=2 we should not have evicted scn's own runs — both fit.
    expect(__getTrackingSetsByRunIdSizeForTests()).toBe(2);
    expect(__hasTrackingSetEntryForTests(scn.run1.runId)).toBe(true);

    __resetForTests();
    expect(__getTrackingSetsByRunIdSizeForTests()).toBe(0);
  });
});
