import { describe, test, expect } from 'bun:test';
import { buildUIEventsAPI } from '../../../src/engine/api/ui-events.js';
import {
  dispatchKeyboardChange,
  dispatchDrawerChange,
  dispatchSettingsChange,
  clearByScript,
} from '../../../src/engine/ui-event-registry.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

// The ui-event-registry is reset between tests by tests/_infra/setup.ts.

describe('api.ui.events — snapshots', () => {
  test('getKeyboardState resolves with defaults before any change', async () => {
    const api = buildUIEventsAPI(createTestDeps());
    expect(await api.getKeyboardState()).toEqual({ visible: false, insetBottom: 0, viewportWidth: 0, viewportHeight: 0 });
  });

  test('getKeyboardState reflects the latest dispatched state', async () => {
    dispatchKeyboardChange({ visible: true, insetBottom: 280, viewportWidth: 390, viewportHeight: 560 });
    const api = buildUIEventsAPI(createTestDeps());
    expect(await api.getKeyboardState()).toEqual({ visible: true, insetBottom: 280, viewportWidth: 390, viewportHeight: 560 });
  });

  test('getDrawerState / getSettingsState reflect dispatched state', async () => {
    dispatchDrawerChange({ open: true, tabId: 'connections' });
    dispatchSettingsChange({ open: true, view: 'display' });
    const api = buildUIEventsAPI(createTestDeps());
    expect(await api.getDrawerState()).toEqual({ open: true, tabId: 'connections' });
    expect(await api.getSettingsState()).toEqual({ open: true, view: 'display' });
  });
});

describe('api.ui.events — subscriptions', () => {
  test('onKeyboardChange fires on dispatch with the state; unsub stops it', () => {
    const api = buildUIEventsAPI(createTestDeps());
    const seen: Array<{ insetBottom: number }> = [];
    const unsub = api.onKeyboardChange((s) => seen.push(s));

    dispatchKeyboardChange({ visible: true, insetBottom: 100, viewportWidth: 10, viewportHeight: 20 });
    expect(seen).toHaveLength(1);
    expect(seen[0]!.insetBottom).toBe(100);

    unsub();
    dispatchKeyboardChange({ visible: false, insetBottom: 0, viewportWidth: 10, viewportHeight: 20 });
    expect(seen).toHaveLength(1); // no further fire after unsubscribe
  });

  test('onDrawerChange / onSettingsChange fire with their state', () => {
    const api = buildUIEventsAPI(createTestDeps());
    let drawer: unknown = null;
    let settings: unknown = null;
    api.onDrawerChange((s) => { drawer = s; });
    api.onSettingsChange((s) => { settings = s; });

    dispatchDrawerChange({ open: true, tabId: 't' });
    dispatchSettingsChange({ open: false, view: 'x' });

    expect(drawer).toEqual({ open: true, tabId: 't' });
    expect(settings).toEqual({ open: false, view: 'x' });
  });

  test('clearByScript removes a script\'s handlers', () => {
    const deps = createTestDeps();
    const api = buildUIEventsAPI(deps);
    let count = 0;
    api.onKeyboardChange(() => { count++; });

    clearByScript(deps.script.id);
    dispatchKeyboardChange({ visible: true, insetBottom: 1, viewportWidth: 1, viewportHeight: 1 });
    expect(count).toBe(0);
  });

  test('a throwing handler does not break dispatch to other handlers', () => {
    const api = buildUIEventsAPI(createTestDeps());
    let reached = false;
    api.onKeyboardChange(() => { throw new Error('boom'); });
    api.onKeyboardChange(() => { reached = true; });

    expect(() => dispatchKeyboardChange({ visible: true, insetBottom: 1, viewportWidth: 1, viewportHeight: 1 })).not.toThrow();
    expect(reached).toBe(true);
  });
});
