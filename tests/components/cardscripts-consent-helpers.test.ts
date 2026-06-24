/**
 * Card-scripts consent modal pure helpers (#12, Phase 2): default selection +
 * action-badge labels. (The React component itself is field-tested.)
 */
import { describe, test, expect } from 'bun:test';
import { isActionable, defaultSelectedBundleIds, actionBadgeLabel } from '../../src/components/cardscripts/consent-helpers.js';
import type { DetectedCardScript } from '../../src/types/card-scripts.js';

function di(action: DetectedCardScript['action'], extra: Partial<DetectedCardScript> = {}, bundleId = 'b1'): DetectedCardScript {
  return { entry: { bundleId, name: 'X', code: '', type: 'trigger' }, action, permissions: [], ...extra };
}

describe('consent-helpers', () => {
  test('isActionable: install/update yes, skip no', () => {
    expect(isActionable(di('install'))).toBe(true);
    expect(isActionable(di('update'))).toBe(true);
    expect(isActionable(di('skip', { skipReason: 'up-to-date' }))).toBe(false);
  });

  test('defaultSelectedBundleIds = every actionable bundleId, in order', () => {
    const items = [di('install', {}, 'a'), di('skip', { skipReason: 'up-to-date' }, 'b'), di('update', {}, 'c')];
    expect(defaultSelectedBundleIds(items)).toEqual(['a', 'c']);
  });

  test('actionBadgeLabel covers install / update (with + without delta) / skip reasons', () => {
    expect(actionBadgeLabel(di('install'))).toBe('Install');
    expect(actionBadgeLabel(di('update', { versionDelta: { from: '1.0.0', to: '1.1.0' } }))).toBe('Update v1.0.0 → v1.1.0');
    expect(actionBadgeLabel(di('update'))).toBe('Update');                                  // no delta
    expect(actionBadgeLabel(di('update', { versionDelta: { to: '2.0.0' } }))).toBe('Update'); // partial delta → plain
    expect(actionBadgeLabel(di('skip', { skipReason: 'up-to-date' }))).toBe('Up to date');
    expect(actionBadgeLabel(di('skip', { skipReason: 'not-newer' }))).toBe('Older — skipped');
    expect(actionBadgeLabel(di('skip', { skipReason: 'unchanged' }))).toBe('Unchanged');
  });
});
