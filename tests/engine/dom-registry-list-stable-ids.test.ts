/**
 * v1.0.0-rc.6 — unit tests for `dom-registry.listStableIdsForScript`.
 *
 * Helper that feeds `host-dispatcher.buildScriptStateSnapshot`. Walks
 * the dom-registry's `stableIdIndex` (keyed by `${scriptId}:${stableId}`)
 * and returns the stable-id → elementId mappings for the requested
 * script as a plain object.
 *
 * Asserts:
 *   - empty result when the script has no stable-id-tagged elements
 *   - single-entry case
 *   - multi-entry case
 *   - per-script filtering (script A's entries don't leak into B's
 *     snapshot, even when A and B share a stableId string)
 *   - elements without stableId don't appear in the result
 *   - unregistration removes the entry from subsequent snapshots
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import {
  registerElement,
  unregisterElement,
  listStableIdsForScript,
  __reset as resetDomRegistry,
} from '../../src/engine/dom-registry.js';

describe('dom-registry.listStableIdsForScript', () => {
  beforeEach(() => {
    resetDomRegistry();
  });

  test('returns empty object for a script with no stable-id-tagged elements', () => {
    // Register an element WITHOUT a stableId — should not appear.
    registerElement('el-1', 'script-A');
    expect(listStableIdsForScript('script-A')).toEqual({});
  });

  test('returns empty object for a script with no registered elements at all', () => {
    expect(listStableIdsForScript('unknown-script')).toEqual({});
  });

  test('returns a single mapping when the script has one stable-id-tagged element', () => {
    registerElement('el-1', 'script-A', 'foo');
    expect(listStableIdsForScript('script-A')).toEqual({ foo: 'el-1' });
  });

  test('returns multiple mappings for multiple stable-id-tagged elements', () => {
    registerElement('el-1', 'script-A', 'foo');
    registerElement('el-2', 'script-A', 'bar');
    registerElement('el-3', 'script-A', 'baz');
    expect(listStableIdsForScript('script-A')).toEqual({
      foo: 'el-1',
      bar: 'el-2',
      baz: 'el-3',
    });
  });

  test('filters by scriptId — script A entries do not leak into script B snapshot', () => {
    registerElement('el-a1', 'script-A', 'foo');
    registerElement('el-a2', 'script-A', 'bar');
    registerElement('el-b1', 'script-B', 'baz');

    expect(listStableIdsForScript('script-A')).toEqual({
      foo: 'el-a1',
      bar: 'el-a2',
    });
    expect(listStableIdsForScript('script-B')).toEqual({
      baz: 'el-b1',
    });
  });

  test('shared stableId across scripts stays correctly partitioned', () => {
    // Two scripts both using stableId 'shared-widget' must NOT cross-
    // contaminate. The dom-registry's index key is `${scriptId}:${stableId}`,
    // so this is structurally safe — but explicit coverage guards
    // against any future refactor that flattens the key shape.
    registerElement('el-a', 'script-A', 'shared-widget');
    registerElement('el-b', 'script-B', 'shared-widget');

    expect(listStableIdsForScript('script-A')).toEqual({ 'shared-widget': 'el-a' });
    expect(listStableIdsForScript('script-B')).toEqual({ 'shared-widget': 'el-b' });
  });

  test('elements without stableId are excluded from the snapshot', () => {
    registerElement('el-1', 'script-A', 'foo');
    registerElement('el-2', 'script-A');  // no stableId — excluded
    registerElement('el-3', 'script-A', 'bar');
    registerElement('el-4', 'script-A');  // no stableId — excluded

    expect(listStableIdsForScript('script-A')).toEqual({
      foo: 'el-1',
      bar: 'el-3',
    });
  });

  test('unregistering an element removes its entry from subsequent snapshots', () => {
    registerElement('el-1', 'script-A', 'foo');
    registerElement('el-2', 'script-A', 'bar');
    expect(listStableIdsForScript('script-A')).toEqual({ foo: 'el-1', bar: 'el-2' });

    unregisterElement('el-1');
    expect(listStableIdsForScript('script-A')).toEqual({ bar: 'el-2' });

    unregisterElement('el-2');
    expect(listStableIdsForScript('script-A')).toEqual({});
  });

  test('stableId containing a colon does not break key parsing', () => {
    // The slice-after-prefix decoder must handle stableIds that contain
    // colons themselves — `'script-A:foo:bar'` could parse incorrectly
    // if the implementation used a naive split-on-colon.
    registerElement('el-1', 'script-A', 'foo:bar:baz');
    expect(listStableIdsForScript('script-A')).toEqual({ 'foo:bar:baz': 'el-1' });
  });

  test('returns a fresh object on each call — callers cannot mutate registry state', () => {
    registerElement('el-1', 'script-A', 'foo');
    const snapshot1 = listStableIdsForScript('script-A');
    const snapshot2 = listStableIdsForScript('script-A');
    expect(snapshot1).not.toBe(snapshot2);
    expect(snapshot1).toEqual(snapshot2);

    // Mutating the returned object must not affect future calls.
    (snapshot1 as Record<string, string>).foo = 'mutated';
    expect(listStableIdsForScript('script-A')).toEqual({ foo: 'el-1' });
  });
});
