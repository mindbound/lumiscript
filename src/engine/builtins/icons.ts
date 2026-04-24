/**
 * ============================================================================
 * LUMISCRIPT — BUILT-IN LIBRARY: ls:icons
 * ============================================================================
 * Curated subset of Lucide icons exposed as pre-serialized SVG strings.
 * Scripts access them via:
 *
 *     const { svg, sized, names } = await script.require('ls:icons');
 *     api.ui.registerInputBarAction({
 *       id: 'save', label: 'Save', iconSvg: svg.save,
 *     });
 *     api.ui.dom.inject('body', `<h2>${svg.sparkles} Hello</h2>`);
 *
 * The manifest (~150 icons) is generated at dev time by
 * `scripts/generate-icons.ts` from lucide-react's raw `__iconNode` arrays —
 * see `manifest.ts` in this directory. Regenerate when the curated list
 * changes with `bun run generate:icons`.
 *
 * Unlike `ls:components`, this library doesn't touch DOM or chat APIs —
 * it returns pure data, so the factory ignores its `api` argument. Matches
 * `ls:council-prompt`'s shape.
 */

import type { BuiltinLibraryFactory } from '../builtin-library-registry.js';
import { ICON_SVG, ICON_NAMES } from './icons/manifest.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Return the SVG for `name` with `width` / `height` attrs overridden to
 * `pixels`. The `viewBox` is untouched so the icon scales cleanly.
 *
 * Throws on an unknown name (matches the same TypeScript-enforced
 * `IconName` union Monaco autocompletes against, surfacing typos from
 * dynamic keys at runtime).
 */
function sized(name: string, pixels: number): string {
  const svg = ICON_SVG[name];
  if (svg === undefined) {
    throw new Error(`ls:icons: unknown icon "${name}". See script.require('ls:icons').names() for the full list.`);
  }
  if (!Number.isFinite(pixels) || pixels <= 0) {
    throw new Error(`ls:icons: sized("${name}", ${pixels}) — pixels must be a positive number.`);
  }
  // The generated SVGs always carry `width="24" height="24"` in this exact
  // order per the generator's deterministic output; a single replace swaps
  // both in one pass. If the generator ever changes that convention,
  // update this regex in lockstep.
  return svg.replace(/\swidth="24"\sheight="24"/, ` width="${pixels}" height="${pixels}"`);
}

/**
 * Size the icon to match the host's built-in input-bar action rendering.
 *
 * The Lumiverse extras-popover renderer wraps extension-provided SVGs in a
 * 14×14 span (see `InputBarExtensionActions.tsx`), but the container uses CSS
 * sizing — SVG explicit `width`/`height` attributes override CSS parent
 * sizing, so our default-24×24 `svg[name]` overflows the slot and sits visibly
 * below the label baseline. Built-in actions sidestep this by rendering icons
 * via `<IconComponent size={14} />`, which emits `width="14" height="14"` on
 * the SVG directly.
 *
 * `forInputBar(name)` is exactly `sized(name, 14)` — a convention alias that
 * documents the constraint at the call site:
 *
 *     api.ui.registerInputBarAction({
 *       id: 'save', label: 'Save draft',
 *       iconSvg: forInputBar('save'),
 *     });
 *
 * For other host-UI surfaces (drawer tabs, float widgets, DOM injections),
 * the default `svg[name]` is usually correct — those have larger / flexible
 * icon slots or fully script-owned sizing.
 */
function forInputBar(name: string): string {
  return sized(name, 14);
}

/**
 * Return a fresh array of every available icon name. Freshness matters —
 * scripts that mutate the returned list (e.g. filter in place for a picker
 * UI) shouldn't corrupt the cached canonical list.
 */
function names(): string[] {
  return [...ICON_NAMES];
}

// ─── Factory ─────────────────────────────────────────────────────────────────

/**
 * Factory for `ls:icons`. Ignores its `api` argument — this library is
 * pure data + small helpers, no caller-attributed side effects.
 *
 * Exported shape is the `svg` record, plus `sized` and `names` helpers.
 * The `svg` record itself is the `ICON_SVG` frozen object from the
 * manifest — cheap to share, immutable by construction.
 */
export const createIconsLibrary: BuiltinLibraryFactory = () => ({
  svg: ICON_SVG,
  sized,
  forInputBar,
  names,
});
