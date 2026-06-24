/**
 * Pure (React-free) helpers for the card-scripts consent modal (#12, Phase 2),
 * split out so they're unit-testable without a DOM harness.
 */
import type { DetectedCardScript } from '../../types/card-scripts.js';

export function isActionable(item: DetectedCardScript): boolean {
  return item.action === 'install' || item.action === 'update';
}

/** bundleIds checked by default — every install/update (skips aren't checkable). */
export function defaultSelectedBundleIds(items: DetectedCardScript[]): string[] {
  return items.filter(isActionable).map((i) => i.entry.bundleId);
}

export function actionBadgeLabel(item: DetectedCardScript): string {
  if (item.action === 'install') return 'Install';
  if (item.action === 'update') {
    const d = item.versionDelta;
    return d && d.from && d.to ? `Update v${d.from} → v${d.to}` : 'Update';
  }
  switch (item.skipReason) {
    case 'up-to-date': return 'Up to date';
    case 'not-newer':  return 'Older — skipped';
    default:           return 'Unchanged';
  }
}
