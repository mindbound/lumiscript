/**
 * Covers `ls:icons` — the curated Lucide icon manifest + `sized` / `names`
 * helpers. The manifest itself is generator output; these tests pin the
 * invariants we rely on (all values are valid SVG strings, width/height
 * are in exact positions for `sized` to patch, manifest and names stay in
 * lockstep) without hard-coding specific SVG byte content — that would
 * break on every lucide-react version bump without signal.
 */

import { describe, test, expect } from 'bun:test';
import { createIconsLibrary } from '../../../src/engine/builtins/icons.js';
import { ICON_SVG, ICON_NAMES } from '../../../src/engine/builtins/icons/manifest.js';
import { resolveBuiltin } from '../../../src/engine/builtin-library-registry.js';
import type { LumiScriptAPI } from '../../../src/types/script.js';

// The factory ignores its api arg; passing a minimal stub is fine.
const STUB_API = {} as LumiScriptAPI;

interface IconsLib {
  svg: Record<string, string>;
  sized(name: string, pixels: number): string;
  forInputBar(name: string): string;
  names(): string[];
}

function makeLib(): IconsLib {
  return createIconsLibrary(STUB_API) as unknown as IconsLib;
}

// ─── Manifest invariants ─────────────────────────────────────────────────────

describe('icon manifest', () => {
  test('ICON_SVG and ICON_NAMES are non-empty and in lockstep', () => {
    expect(ICON_NAMES.length).toBeGreaterThan(100);
    expect(Object.keys(ICON_SVG).length).toBe(ICON_NAMES.length);
    for (const name of ICON_NAMES) {
      expect(ICON_SVG[name]).toBeDefined();
    }
  });

  test('every icon value is a self-contained <svg>…</svg> string', () => {
    for (const [name, svg] of Object.entries(ICON_SVG)) {
      expect(svg.startsWith('<svg ')).toBe(true);
      expect(svg.endsWith('</svg>')).toBe(true);
      // Sanity: default attrs from lucide — their presence + exact spelling
      // is what `sized()` pattern-matches against.
      expect(svg).toContain('width="24"');
      expect(svg).toContain('height="24"');
      expect(svg).toContain('viewBox="0 0 24 24"');
      expect(svg).toContain('stroke="currentColor"');
      // No leftover React-only props.
      expect(svg).not.toContain(' key=');
      // Sanity check: non-trivial content (at least one child element).
      expect(svg.length).toBeGreaterThan(200);
      // Unused-var linter: name is used below in the loop over Object.entries
      // but we want it available in the assertion message if anything fails.
      expect(typeof name).toBe('string');
    }
  });

  test('ICON_SVG is frozen (immutable by construction)', () => {
    expect(Object.isFrozen(ICON_SVG)).toBe(true);
    expect(Object.isFrozen(ICON_NAMES)).toBe(true);
  });

  test('names are alphabetically sorted (deterministic generator output)', () => {
    const sorted = [...ICON_NAMES].sort();
    expect(ICON_NAMES).toEqual(sorted);
  });
});

// ─── Factory shape ───────────────────────────────────────────────────────────

describe('createIconsLibrary', () => {
  test('returns { svg, sized, forInputBar, names }', () => {
    const lib = makeLib();
    expect(lib.svg).toBeDefined();
    expect(typeof lib.sized).toBe('function');
    expect(typeof lib.forInputBar).toBe('function');
    expect(typeof lib.names).toBe('function');
  });

  test('lib.svg is the same reference as the manifest (shared, no copy)', () => {
    const lib = makeLib();
    expect(lib.svg).toBe(ICON_SVG);
  });

  test('registry resolves "ls:icons" to the factory', () => {
    const factory = resolveBuiltin('ls:icons');
    expect(factory).toBe(createIconsLibrary);
  });

  test('factory is pure — multiple calls return equivalent shapes', () => {
    const a = makeLib();
    const b = makeLib();
    expect(a.svg).toBe(b.svg);
    // sized / names are fresh closures per call — not asserting ref equality
    expect(typeof a.sized).toBe(typeof b.sized);
    expect(typeof a.names).toBe(typeof b.names);
  });
});

// ─── sized() ─────────────────────────────────────────────────────────────────

describe('sized()', () => {
  test('overrides width and height in a single pass', () => {
    const lib = makeLib();
    const out = lib.sized('heart', 16);
    expect(out).toContain('width="16"');
    expect(out).toContain('height="16"');
    // Original 24×24 attrs are gone.
    expect(out).not.toContain('width="24"');
    expect(out).not.toContain('height="24"');
  });

  test('preserves viewBox so the icon scales cleanly', () => {
    const lib = makeLib();
    const out = lib.sized('heart', 48);
    expect(out).toContain('viewBox="0 0 24 24"');
  });

  test('leaves other default attrs (fill, stroke, stroke-width) untouched', () => {
    const lib = makeLib();
    const out = lib.sized('heart', 20);
    expect(out).toContain('fill="none"');
    expect(out).toContain('stroke="currentColor"');
    expect(out).toContain('stroke-width="2"');
    expect(out).toContain('stroke-linecap="round"');
    expect(out).toContain('stroke-linejoin="round"');
  });

  test('inner path markup survives the resize', () => {
    const lib = makeLib();
    const out = lib.sized('heart', 32);
    // Heart has exactly one <path>; structural integrity check.
    expect(out.match(/<path /g)?.length).toBe(1);
    expect(out).toMatch(/<\/svg>$/);
  });

  test('throws on unknown icon name with a useful message', () => {
    const lib = makeLib();
    expect(() => lib.sized('definitely-not-a-real-icon', 16))
      .toThrow(/unknown icon "definitely-not-a-real-icon"/);
    expect(() => lib.sized('definitely-not-a-real-icon', 16))
      .toThrow(/names\(\)/);  // message hints at discovery path
  });

  test('throws on non-positive pixels', () => {
    const lib = makeLib();
    expect(() => lib.sized('heart', 0)).toThrow(/positive number/);
    expect(() => lib.sized('heart', -10)).toThrow(/positive number/);
    expect(() => lib.sized('heart', NaN)).toThrow(/positive number/);
    expect(() => lib.sized('heart', Infinity)).toThrow(/positive number/);
  });

  test('original manifest entry is not mutated by sized()', () => {
    const lib = makeLib();
    const before = ICON_SVG['heart'];
    lib.sized('heart', 16);
    expect(ICON_SVG['heart']).toBe(before);
  });
});

// ─── forInputBar() ──────────────────────────────────────────────────────────

describe('forInputBar()', () => {
  test('returns a 14x14 SVG — matches the host input-bar slot size', () => {
    const lib = makeLib();
    const out = lib.forInputBar('save');
    expect(out).toContain('width="14"');
    expect(out).toContain('height="14"');
    expect(out).not.toContain('width="24"');
    expect(out).not.toContain('height="24"');
  });

  test('byte-for-byte equal to sized(name, 14)', () => {
    const lib = makeLib();
    for (const name of ['save', 'heart', 'star', 'sparkles']) {
      expect(lib.forInputBar(name)).toBe(lib.sized(name, 14));
    }
  });

  test('preserves viewBox and default stroke attrs', () => {
    const lib = makeLib();
    const out = lib.forInputBar('heart');
    expect(out).toContain('viewBox="0 0 24 24"');
    expect(out).toContain('stroke="currentColor"');
    expect(out).toContain('fill="none"');
  });

  test('throws on unknown icon name (matches sized() semantics)', () => {
    const lib = makeLib();
    expect(() => lib.forInputBar('nope')).toThrow(/unknown icon "nope"/);
  });
});

// ─── names() ─────────────────────────────────────────────────────────────────

describe('names()', () => {
  test('returns contents matching ICON_NAMES', () => {
    const lib = makeLib();
    expect(lib.names()).toEqual([...ICON_NAMES]);
  });

  test('returns a fresh array each call (mutation isolation)', () => {
    const lib = makeLib();
    const a = lib.names();
    const b = lib.names();
    expect(a).not.toBe(b);
    expect(a).toEqual(b);
    // Scripts mutating the returned array shouldn't affect the canonical list
    // or subsequent callers.
    a.push('ghost-icon' as never);
    expect(lib.names()).not.toContain('ghost-icon');
  });

  test('every returned name resolves via lib.svg', () => {
    const lib = makeLib();
    for (const name of lib.names()) {
      expect(lib.svg[name]).toBeDefined();
      expect(typeof lib.svg[name]).toBe('string');
    }
  });
});

// ─── End-to-end usage shape (dogfood smoke) ─────────────────────────────────

describe('end-to-end usage patterns', () => {
  test('svg strings compose into HTML templates as expected', () => {
    const lib = makeLib();
    const html = `<button aria-label="save">${lib.svg['save']}</button>`;
    expect(html.startsWith('<button ')).toBe(true);
    expect(html).toContain('<svg ');
    expect(html).toContain('</svg>');
    expect(html.endsWith('</button>')).toBe(true);
  });

  test('sized() output is ready to drop into iconSvg option', () => {
    const lib = makeLib();
    const iconSvg = lib.sized('save', 20);
    // The "host" receiving iconSvg only cares that it's an SVG-root string.
    expect(iconSvg.startsWith('<svg ')).toBe(true);
    expect(iconSvg.endsWith('</svg>')).toBe(true);
  });
});
