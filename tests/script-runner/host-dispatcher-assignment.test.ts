/**
 * Phase C1 — host-dispatcher worker-assignment tests.
 *
 * Covers the in-memory `scriptWorkerAssignments` Map + helpers introduced
 * by the v1.0 runtime-isolation refactor. Phase C1 always assigns to
 * `DEFAULT_WORKER_KEY` (single-worker behaviour preserved); these tests
 * verify the API surface so Phase C2's promotion to least-loaded
 * distribution can swap the implementation in confidence.
 *
 * Pure unit tests — no IPC, no mock spindle, no spawn machinery. Just
 * exercise the assignment helpers and the lifecycle integration with
 * `__resetForTests`.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  __resetForTests,
  __getWorkerForScriptForTests,
  __releaseScriptFromWorkerForTests,
  __getKnownWorkerKeysForTests,
  __getAssignedScriptCountForTests,
  DEFAULT_WORKER_KEY,
} from '../../src/script-runner/host-dispatcher.js';

describe('worker assignment (Phase C1 — single-worker default)', () => {
  beforeEach(() => __resetForTests());

  test('DEFAULT_WORKER_KEY is "worker-1"', () => {
    expect(DEFAULT_WORKER_KEY).toBe('worker-1');
  });

  test('getKnownWorkerKeys returns just [DEFAULT_WORKER_KEY] in C1', () => {
    expect(__getKnownWorkerKeysForTests()).toEqual([DEFAULT_WORKER_KEY]);
  });

  test('getWorkerForScript returns DEFAULT_WORKER_KEY for any script', () => {
    expect(__getWorkerForScriptForTests('script-A')).toBe(DEFAULT_WORKER_KEY);
    expect(__getWorkerForScriptForTests('script-B')).toBe(DEFAULT_WORKER_KEY);
    expect(__getWorkerForScriptForTests('whatever-id')).toBe(DEFAULT_WORKER_KEY);
  });

  test('repeat lookup of same scriptId returns the same assignment', () => {
    const first  = __getWorkerForScriptForTests('script-A');
    const second = __getWorkerForScriptForTests('script-A');
    const third  = __getWorkerForScriptForTests('script-A');
    expect(first).toBe(second);
    expect(second).toBe(third);
  });

  test('first lookup persists the assignment in the Map', () => {
    expect(__getAssignedScriptCountForTests()).toBe(0);
    __getWorkerForScriptForTests('script-A');
    expect(__getAssignedScriptCountForTests()).toBe(1);
    __getWorkerForScriptForTests('script-B');
    expect(__getAssignedScriptCountForTests()).toBe(2);
    __getWorkerForScriptForTests('script-C');
    expect(__getAssignedScriptCountForTests()).toBe(3);
  });

  test('repeat lookups of the same scriptId do not duplicate Map entries', () => {
    __getWorkerForScriptForTests('script-A');
    __getWorkerForScriptForTests('script-A');
    __getWorkerForScriptForTests('script-A');
    expect(__getAssignedScriptCountForTests()).toBe(1);
  });

  test('releaseScriptFromWorker drops the assignment', () => {
    __getWorkerForScriptForTests('script-A');
    __getWorkerForScriptForTests('script-B');
    expect(__getAssignedScriptCountForTests()).toBe(2);

    __releaseScriptFromWorkerForTests('script-A');
    expect(__getAssignedScriptCountForTests()).toBe(1);
  });

  test('releaseScriptFromWorker is idempotent on never-assigned scriptId', () => {
    expect(() => __releaseScriptFromWorkerForTests('never-assigned')).not.toThrow();
    expect(__getAssignedScriptCountForTests()).toBe(0);

    // Also idempotent on already-released
    __getWorkerForScriptForTests('script-A');
    __releaseScriptFromWorkerForTests('script-A');
    expect(() => __releaseScriptFromWorkerForTests('script-A')).not.toThrow();
    expect(__getAssignedScriptCountForTests()).toBe(0);
  });

  test('release-then-relookup creates a fresh assignment (still DEFAULT in C1)', () => {
    __getWorkerForScriptForTests('script-A');
    __releaseScriptFromWorkerForTests('script-A');
    const reassigned = __getWorkerForScriptForTests('script-A');
    expect(reassigned).toBe(DEFAULT_WORKER_KEY);
    expect(__getAssignedScriptCountForTests()).toBe(1);
  });

  test('__resetForTests clears all assignments', () => {
    __getWorkerForScriptForTests('script-A');
    __getWorkerForScriptForTests('script-B');
    __getWorkerForScriptForTests('script-C');
    expect(__getAssignedScriptCountForTests()).toBe(3);

    __resetForTests();
    expect(__getAssignedScriptCountForTests()).toBe(0);
  });

  test('many distinct scriptIds all map to DEFAULT_WORKER_KEY in C1', () => {
    const ids = Array.from({ length: 50 }, (_, i) => `script-${i}`);
    for (const id of ids) {
      expect(__getWorkerForScriptForTests(id)).toBe(DEFAULT_WORKER_KEY);
    }
    expect(__getAssignedScriptCountForTests()).toBe(50);
  });
});
