/**
 * Card-scripts consent modal pure helpers (#12, Phase 2): default selection +
 * action-badge labels. (The React component itself is field-tested.)
 */
import { describe, test, expect } from 'bun:test';
import { isActionable, isScopable, defaultSelectedBundleIds, defaultScopedBundleIds, actionBadgeLabel } from '../../src/components/cardscripts/consent-helpers.js';
import type { DetectedCardScript } from '../../src/types/card-scripts.js';
import type { ScriptBindingEntry } from '../../src/types/script.js';

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
    expect(actionBadgeLabel(di('skip', { skipReason: 'duplicate-code' }))).toBe('Already in your library');
  });
});

describe('scoping helpers (#12 Q1)', () => {
  const charBinding: ScriptBindingEntry[] = [{ type: 'character', displayName: 'Alice', characterId: 'c1' }];
  const chatBinding: ScriptBindingEntry[] = [{ type: 'chat', displayName: 'Chat', chatId: 'h1' }];
  const si = (bundleId: string, type: 'trigger' | 'library', bindings?: ScriptBindingEntry[]): DetectedCardScript =>
    ({ entry: { bundleId, name: 'X', code: '', type, ...(bindings ? { bindings } : {}) }, action: 'install', permissions: [] });

  test('isScopable: only fresh-install trigger scripts (update/library/skip → no toggle)', () => {
    expect(isScopable(si('b', 'trigger'))).toBe(true);                                          // install trigger
    expect(isScopable(si('b', 'library'))).toBe(false);                                         // library
    expect(isScopable({ ...si('b', 'trigger'), action: 'update' })).toBe(false);                // update preserves bindings
    expect(isScopable({ ...si('b', 'trigger'), action: 'skip', skipReason: 'unchanged' })).toBe(false);
  });

  test('defaultScopedBundleIds = trigger scripts the author CHARACTER-bound (not chat-only, not libraries)', () => {
    const items: DetectedCardScript[] = [
      si('bound', 'trigger', charBinding),
      si('global', 'trigger'),                 // no binding → global by default
      si('chatonly', 'trigger', chatBinding),  // chat binding only → not character-scoped
      si('lib', 'library', charBinding),        // library → excluded (bindings don't gate require())
    ];
    expect(defaultScopedBundleIds(items)).toEqual(['bound']);
  });
});
