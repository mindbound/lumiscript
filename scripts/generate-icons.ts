#!/usr/bin/env bun
/**
 * ============================================================================
 * LUMISCRIPT — ls:icons MANIFEST GENERATOR
 * ============================================================================
 * Reads the curated icon list below, pulls each icon's `__iconNode` from
 * lucide-react's per-icon module, serializes to a self-contained SVG string,
 * and writes out:
 *
 *   1. src/engine/builtins/icons/manifest.ts  — runtime map + names list
 *   2. src/types/editor-lib.ts                — IconName union (between markers)
 *
 * Run manually when the curated list changes:
 *
 *     bun run generate:icons
 *
 * NOT wired into the main build — the manifest is source-controlled, so
 * regeneration is explicit and reviewable.
 */

import { writeFile, readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Config ──────────────────────────────────────────────────────────────────

const REPO_ROOT   = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST_TS = resolve(REPO_ROOT, 'src/engine/builtins/icons/manifest.ts');
const EDITOR_LIB  = resolve(REPO_ROOT, 'src/types/editor-lib.ts');

/**
 * The curated subset — lucide-standard kebab-case names, grouped by category
 * for readability. Add/remove here, then re-run `bun run generate:icons`.
 *
 * Every entry must exist in `node_modules/lucide-react/dist/esm/icons/<name>.mjs`
 * or the generator throws with a clear message.
 */
const CURATED_NAMES: string[] = [
  // Actions & IO
  'save', 'copy', 'clipboard', 'clipboard-copy', 'trash', 'trash-2', 'pencil',
  'plus', 'minus', 'refresh-cw', 'refresh-ccw', 'rotate-cw', 'send', 'upload',
  'download', 'share-2', 'play', 'pause', 'square', 'search', 'filter',
  'settings', 'settings-2', 'menu', 'x',

  // Status & feedback
  'check', 'check-check', 'circle-check', 'x-circle', 'alert-circle',
  'alert-triangle', 'info', 'circle-help', 'loader-circle', 'circle', 'dot',
  'clock', 'timer', 'ban', 'shield', 'shield-check', 'shield-alert', 'zap',

  // Emphasis & favourites
  'sparkles', 'star', 'flame', 'heart', 'bookmark', 'flag',

  // Navigation
  'chevron-up', 'chevron-down', 'chevron-left', 'chevron-right',
  'chevrons-up-down', 'chevrons-left-right', 'arrow-up', 'arrow-down',
  'arrow-left', 'arrow-right', 'arrow-up-right', 'external-link', 'link',
  'corner-up-left',

  // Data, files, content
  'database', 'file', 'file-text', 'file-code-2', 'file-plus', 'folder',
  'folder-open', 'archive', 'book', 'book-open', 'book-marked', 'hash',
  'braces', 'list', 'table', 'layers', 'package', 'boxes',

  // Media
  'image', 'video', 'mic', 'mic-off', 'volume-2', 'volume-x', 'music',
  'camera', 'film',

  // Toggles, visibility, access
  'eye', 'eye-off', 'lock', 'unlock', 'key', 'bell', 'bell-off', 'toggle-left',
  'toggle-right', 'shield-x',

  // User & chat
  'user', 'users', 'user-plus', 'user-minus', 'message-circle',
  'message-square', 'smile', 'at-sign', 'circle-user-round',

  // Dev, code, system
  'code-2', 'terminal', 'bug', 'cpu', 'server', 'git-branch', 'network',
  'command', 'puzzle', 'activity', 'wrench',

  // UI chrome & navigation
  'home', 'calendar', 'calendar-days', 'map-pin', 'compass', 'globe', 'gift',
  'tag', 'inbox', 'sliders', 'grid-2x2',

  // More / overflow
  'more-horizontal', 'more-vertical', 'ellipsis', 'plus-circle', 'minus-circle',
  'download-cloud', 'upload-cloud', 'hard-drive', 'clipboard-list', 'printer',

  // Misc ergonomics
  'paperclip', 'pin', 'thumbs-up', 'thumbs-down', 'check-square', 'x-square',
  'mouse-pointer', 'move', 'crown',
];

// Lucide's defaultAttributes, kebab-cased and stringified for SVG output.
// Source of truth: lucide-react/dist/esm/defaultAttributes.mjs
const DEFAULT_SVG_ATTRS: Record<string, string> = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** kebab-case → camelCase (e.g. "arrow-up-right" → "arrowUpRight"). */
function toCamelCase(kebab: string): string {
  return kebab.replace(/-([a-z0-9])/g, (_, ch) => ch.toUpperCase());
}

/** Turn an iconNode tuple array into a stringified SVG body (no root <svg>). */
function serializeChildren(
  nodes: Array<[string, Record<string, string | number>, ...unknown[]]>,
): string {
  return nodes.map(([tag, attrs]) => {
    const pairs: string[] = [];
    for (const [k, v] of Object.entries(attrs)) {
      // Skip React-only props (currently just `key` on every icon).
      if (k === 'key') continue;
      // iconNode attrs are already SVG-case (`d`, not `pathLength`) — no
      // camelCase-to-kebab transform needed.
      pairs.push(`${k}="${String(v)}"`);
    }
    return `<${tag} ${pairs.join(' ')}/>`;
  }).join('');
}

/** Wrap iconNode children in lucide's default <svg> root. */
function serializeIcon(iconNode: Array<[string, Record<string, string | number>, ...unknown[]]>): string {
  const attrs = Object.entries(DEFAULT_SVG_ATTRS)
    .map(([k, v]) => `${k}="${v}"`)
    .join(' ');
  return `<svg ${attrs}>${serializeChildren(iconNode)}</svg>`;
}

// ─── Load + serialize every icon ─────────────────────────────────────────────

type IconNode = Array<[string, Record<string, string | number>, ...unknown[]]>;

interface LucideIconModule {
  __iconNode: IconNode;
}

/**
 * Some lucide icons are alias files that just re-export another icon's
 * default (e.g. `more-horizontal.mjs` → `export { default } from './ellipsis.mjs'`).
 * These files don't re-export `__iconNode`. Follow the redirect chain by
 * reading the source text until we land on a file that defines its own
 * `__iconNode`, then import that canonical module.
 */
async function resolveCanonicalIconName(kebab: string, seen = new Set<string>()): Promise<string> {
  if (seen.has(kebab)) {
    throw new Error(`alias cycle at "${kebab}" — check lucide-react internals`);
  }
  seen.add(kebab);

  const iconsDir = resolve(REPO_ROOT, 'node_modules/lucide-react/dist/esm/icons');
  const sourcePath = resolve(iconsDir, `${kebab}.mjs`);
  const source = await readFile(sourcePath, 'utf8');

  // Pattern: `export { default } from './<target>.mjs';`
  const aliasMatch = source.match(/export\s+\{\s*default\s*\}\s+from\s+['"]\.\/([a-z0-9-]+)\.mjs['"]/);
  if (aliasMatch) {
    return resolveCanonicalIconName(aliasMatch[1]!, seen);
  }

  // Not an alias — confirm `__iconNode` is present before returning.
  if (!/const\s+__iconNode\s*=/.test(source)) {
    throw new Error(`icon "${kebab}" is neither a canonical icon (no __iconNode) nor a recognized alias`);
  }
  return kebab;
}

async function loadIconNode(kebab: string): Promise<IconNode> {
  const canonical = await resolveCanonicalIconName(kebab);
  const modulePath = `lucide-react/dist/esm/icons/${canonical}.mjs`;
  try {
    const mod = (await import(modulePath)) as LucideIconModule;
    if (!Array.isArray(mod.__iconNode)) {
      throw new Error(`canonical "${canonical}" (from alias "${kebab}") is missing \`__iconNode\` — lucide-react internals may have changed`);
    }
    return mod.__iconNode;
  } catch (err) {
    throw new Error(
      `Failed to load icon "${kebab}" (canonical "${canonical}") from lucide-react.\n` +
      `Expected: node_modules/${modulePath}\n` +
      `Cause: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

async function buildManifest(): Promise<{
  kebabToSvg: Map<string, string>;
  camelToSvg: Map<string, string>;
  camelNames: string[];
}> {
  // Load + serialize in parallel, preserve deterministic (alphabetical) order.
  const pairs = await Promise.all(
    [...CURATED_NAMES].sort().map(async kebab => {
      const iconNode = await loadIconNode(kebab);
      return [kebab, serializeIcon(iconNode)] as const;
    }),
  );

  const kebabToSvg = new Map(pairs);
  const camelToSvg = new Map(pairs.map(([kebab, svg]) => [toCamelCase(kebab), svg]));
  const camelNames = [...camelToSvg.keys()];
  return { kebabToSvg, camelToSvg, camelNames };
}

// ─── Emit manifest.ts ────────────────────────────────────────────────────────

async function writeManifest(camelToSvg: Map<string, string>, camelNames: string[]): Promise<void> {
  const entries = [...camelToSvg.entries()]
    .map(([name, svg]) => `  ${name}: ${JSON.stringify(svg)},`)
    .join('\n');

  const namesLiteral = camelNames.map(n => `  '${n}',`).join('\n');

  const content = `/**
 * ============================================================================
 * LUMISCRIPT — ICON MANIFEST (generated)
 * ============================================================================
 * DO NOT EDIT BY HAND — regenerate with:
 *
 *     bun run generate:icons
 *
 * Each value is a self-contained <svg> string with lucide's default attrs
 * (24x24, stroke-width 2, stroke: currentColor, fill: none). Safe to drop
 * into \`iconSvg\` options or DOM-injected HTML templates.
 */

/** Opaque runtime type — the narrower \`IconName\` union lives in editor-lib.ts. */
export type IconNameRuntime = string;

export const ICON_SVG: Record<string, string> = Object.freeze({
${entries}
});

export const ICON_NAMES: ReadonlyArray<string> = Object.freeze([
${namesLiteral}
]);
`;

  await writeFile(MANIFEST_TS, content, 'utf8');
  console.log(`[generate-icons] wrote ${MANIFEST_TS}`);
}

// ─── Patch editor-lib.ts union between markers ───────────────────────────────

async function patchEditorLib(camelNames: string[]): Promise<void> {
  const source = await readFile(EDITOR_LIB, 'utf8');

  const startMarker = '// @BEGIN-ICON-NAMES';
  const endMarker   = '// @END-ICON-NAMES';

  const startIdx = source.indexOf(startMarker);
  const endIdx   = source.indexOf(endMarker);
  if (startIdx < 0 || endIdx < 0 || endIdx <= startIdx) {
    throw new Error(
      `Cannot locate @BEGIN-ICON-NAMES / @END-ICON-NAMES markers in ${EDITOR_LIB}.\n` +
      `Add them once by hand, then this script will keep them in sync.`,
    );
  }

  const unionLines = camelNames.map((n, i) => {
    const leader = i === 0 ? '  = ' : '  | ';
    return `${leader}'${n}'`;
  }).join('\n');

  const replacement =
    `${startMarker} — generated by scripts/generate-icons.ts; do not edit by hand\n` +
    `type IconName\n${unionLines};\n` +
    endMarker;

  const before = source.slice(0, startIdx);
  const after  = source.slice(endIdx + endMarker.length);
  const patched = `${before}${replacement}${after}`;

  await writeFile(EDITOR_LIB, patched, 'utf8');
  console.log(`[generate-icons] patched ${EDITOR_LIB} (${camelNames.length} icon names)`);
}

// ─── Run ─────────────────────────────────────────────────────────────────────

const { kebabToSvg, camelToSvg, camelNames } = await buildManifest();

if (kebabToSvg.size !== CURATED_NAMES.length) {
  throw new Error(
    `Expected ${CURATED_NAMES.length} icons, got ${kebabToSvg.size}.\n` +
    `(Check for duplicate entries in CURATED_NAMES.)`,
  );
}

await writeManifest(camelToSvg, camelNames);
await patchEditorLib(camelNames);

console.log(`[generate-icons] done. ${camelNames.length} icons serialized.`);
