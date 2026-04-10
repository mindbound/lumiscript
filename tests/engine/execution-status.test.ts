import { describe, test, expect, beforeEach } from 'bun:test';
import { executionStatusStore } from '../../src/engine/execution-status.js';

beforeEach(() => executionStatusStore.clear());

// ─── State transitions ───────────────────────────────────────────────────────

describe('markRunning', () => {
  test('sets status to running', () => {
    executionStatusStore.markRunning('s1');
    expect(executionStatusStore.getStatus('s1').status).toBe('running');
  });

  test('running entry has no duration or errorMessage', () => {
    executionStatusStore.markRunning('s1');
    const entry = executionStatusStore.getStatus('s1');
    expect(entry.duration).toBeUndefined();
    expect(entry.errorMessage).toBeUndefined();
  });
});

describe('markSuccess', () => {
  test('sets status to success with duration', () => {
    executionStatusStore.markSuccess('s1', 42);
    const entry = executionStatusStore.getStatus('s1');
    expect(entry.status).toBe('success');
    expect(entry.duration).toBe(42);
  });
});

describe('markError', () => {
  test('sets status to error with duration and message', () => {
    executionStatusStore.markError('s1', 100, 'TypeError: x is not a function');
    const entry = executionStatusStore.getStatus('s1');
    expect(entry.status).toBe('error');
    expect(entry.duration).toBe(100);
    expect(entry.errorMessage).toBe('TypeError: x is not a function');
  });
});

describe('markIdle', () => {
  test('removes the entry (getStatus returns idle)', () => {
    executionStatusStore.markRunning('s1');
    executionStatusStore.markIdle('s1');
    expect(executionStatusStore.getStatus('s1').status).toBe('idle');
  });
});

// ─── getStatus ───────────────────────────────────────────────────────────────

describe('getStatus', () => {
  test('returns idle for an unknown scriptId', () => {
    expect(executionStatusStore.getStatus('unknown').status).toBe('idle');
  });
});

// ─── getAll ──────────────────────────────────────────────────────────────────

describe('getAll', () => {
  test('returns a map of all tracked scripts', () => {
    executionStatusStore.markRunning('s1');
    executionStatusStore.markSuccess('s2', 10);
    const all = executionStatusStore.getAll();
    expect(all.size).toBe(2);
    expect(all.get('s1')!.status).toBe('running');
    expect(all.get('s2')!.status).toBe('success');
  });
});

// ─── clear ───────────────────────────────────────────────────────────────────

describe('clear', () => {
  test('empties all tracked state', () => {
    executionStatusStore.markRunning('s1');
    executionStatusStore.markError('s2', 5, 'err');
    executionStatusStore.clear();
    expect(executionStatusStore.getAll().size).toBe(0);
    expect(executionStatusStore.getStatus('s1').status).toBe('idle');
  });
});
