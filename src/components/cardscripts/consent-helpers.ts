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

/**
 * Whether the scope toggle applies to a row — only FRESH-INSTALL trigger scripts.
 * Updates preserve the script's current bindings (scope is install-only, so an
 * update can't silently clobber a scope the user set manually — #12 Q1); and
 * libraries are `require()`d regardless of context, so scoping is meaningless.
 */
export function isScopable(item: DetectedCardScript): boolean {
  return item.action === 'install' && item.entry.type === 'trigger';
}

/**
 * bundleIds character-scoped by DEFAULT: scopable scripts the author bundled with
 * a character binding (signalling "scope to a character"). The author's binding
 * UUIDs are dead on import, so this is just the default for the consent toggle —
 * the toggle, not the author's binding, is what actually scopes the install.
 */
export function defaultScopedBundleIds(items: DetectedCardScript[]): string[] {
  return items
    .filter((i) => isScopable(i) && (i.entry.bindings?.some((b) => b.type === 'character') ?? false))
    .map((i) => i.entry.bundleId);
}

export function actionBadgeLabel(item: DetectedCardScript): string {
  if (item.action === 'install') return 'Install';
  if (item.action === 'update') {
    const d = item.versionDelta;
    return d && d.from && d.to ? `Update v${d.from} → v${d.to}` : 'Update';
  }
  switch (item.skipReason) {
    case 'up-to-date':     return 'Up to date';
    case 'not-newer':      return 'Older — skipped';
    case 'duplicate-code': return 'Already in your library';
    default:               return 'Unchanged';
  }
}
