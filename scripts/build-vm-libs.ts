/**
 * #11 P3 B — generate the in-VM library bundles for the QuickJS engine.
 *
 * The QuickJS isolate has no module system, so libraries that user scripts use
 * as VM globals (currently `z` / zod) must be bundled into a self-contained IIFE
 * that assigns to `globalThis`, then eval'd into the context. This script
 * bundles each `scripts/vm-libs/*-entry.ts` into such an IIFE and emits it as a
 * string constant under `src/script-runner/generated/` (committed + regenerated
 * by the build chain, mirroring the gen:corpus pattern). qjs-engine.ts evals the
 * constant once per context.
 *
 * Run via `bun run gen:vm-libs` (chained into `bun run build` before typecheck).
 */
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { createHash } from 'node:crypto';

const OUT_DIR = join('src', 'script-runner', 'generated');
const MANIFEST = join(OUT_DIR, 'vm-libs.manifest.json');
const CWD = process.cwd();

interface VmLib { entry: string; out: string; constName: string; label: string; }

const LIBS: VmLib[] = [
  {
    entry:     join('scripts', 'vm-libs', 'zod-entry.ts'),
    out:       'vm-zod-bundle.ts',
    constName: 'VM_ZOD_BUNDLE',
    label:     'zod',
  },
  {
    entry:     join('scripts', 'vm-libs', 'handlebars-entry.ts'),
    out:       'vm-handlebars-bundle.ts',
    constName: 'VM_HANDLEBARS_BUNDLE',
    label:     'handlebars',
  },
  // ls:* built-in libraries — registered on globalThis.__lsBuiltins so
  // script.require('ls:*') can invoke the factory in-VM (asyncfn parity).
  {
    entry:     join('scripts', 'vm-libs', 'ls-components-entry.ts'),
    out:       'vm-ls-components-bundle.ts',
    constName: 'VM_LS_COMPONENTS_BUNDLE',
    label:     'ls:components',
  },
  {
    entry:     join('scripts', 'vm-libs', 'ls-icons-entry.ts'),
    out:       'vm-ls-icons-bundle.ts',
    constName: 'VM_LS_ICONS_BUNDLE',
    label:     'ls:icons',
  },
  {
    entry:     join('scripts', 'vm-libs', 'ls-council-prompt-entry.ts'),
    out:       'vm-ls-council-prompt-bundle.ts',
    constName: 'VM_LS_COUNCIL_PROMPT_BUNDLE',
    label:     'ls:council-prompt',
  },
];

/**
 * Normalize a sourcemap `sources` entry to a stable, machine-independent,
 * repo-relative POSIX path. Bun may emit absolute paths (`C:\…` on Windows,
 * `/home/runner/…` in CI); without this the host prefix would leak into the
 * hash and make the manifest differ per machine.
 */
function normPath(src: string): string {
  return relative(CWD, resolve(CWD, src)).split(sep).join('/');
}

/** Strip CR so a Windows (autocrlf) CRLF checkout and CI's LF hash identically. */
function normEol(s: string): string {
  return s.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

/**
 * Hash a bundle's transitive SOURCE GRAPH — every input file's normalized path
 * + normalized content. This is independent of the bun minifier's exact output,
 * so it stays stable across bun versions (incl. the moving `canary` CI uses),
 * yet still changes the moment any input source is edited. That's what the CI
 * drift guard compares, rather than the minified bytes (which legitimately vary
 * between bun builds).
 *
 * The input list comes from a SEPARATE, non-minified build whose only purpose is
 * to enumerate the graph via its sourcemap. Minification is irrelevant to WHICH
 * files are inputs, and — importantly — `sourcemap: 'external'` perturbs the
 * minifier's output, so it must NOT be enabled on the build that emits the
 * committed bundle. Keeping the graph harvest on its own build leaves the shipped
 * bundle byte-identical to the plain minify-only output.
 */
async function hashSourceGraph(entry: string, label: string): Promise<string> {
  const res = await Bun.build({
    entrypoints: [entry],
    format:      'iife',
    minify:      false,      // graph is independent of minification; skip it for speed
    target:      'browser',
    sourcemap:   'external',  // harvested for the input list below
  });
  if (!res.success) {
    console.error(`[vm-libs] source-graph build failed for ${label}:`);
    for (const log of res.logs) console.error('  ', log);
    process.exit(1);
  }
  const mapArtifact = res.outputs.find((o) => o.kind === 'sourcemap')
    ?? res.outputs.find((o) => o.path.endsWith('.map'));
  if (!mapArtifact) {
    console.error(`[vm-libs] ${label}: no sourcemap emitted — cannot hash the source graph.`);
    process.exit(1);
  }
  const map = JSON.parse(await mapArtifact.text()) as { sources: string[]; sourcesContent?: (string | null)[] };

  const items: { path: string; hash: string }[] = [];
  for (let i = 0; i < map.sources.length; i++) {
    const src = map.sources[i]!;
    let content = map.sourcesContent?.[i] ?? null;
    if (content == null) {
      // Sourcemap omitted the inline content — read the file off disk instead.
      try { content = await readFile(resolve(CWD, src), 'utf8'); } catch { content = ''; }
    }
    items.push({ path: normPath(src), hash: createHash('sha256').update(normEol(content)).digest('hex') });
  }
  items.sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0)); // order-independent
  const top = createHash('sha256');
  for (const it of items) { top.update(it.path); top.update('\0'); top.update(it.hash); top.update('\0'); }
  return `sha256:${top.digest('hex')}`;
}

await mkdir(OUT_DIR, { recursive: true });

const manifest: Record<string, string> = {};

for (const lib of LIBS) {
  const result = await Bun.build({
    entrypoints: [lib.entry],
    format:      'iife',     // self-contained; no top-level import/export (eval-able in QuickJS)
    minify:      true,
    target:      'browser',  // closest to QuickJS — no node builtins
  });
  if (!result.success) {
    console.error(`[vm-libs] FAILED to bundle ${lib.label}:`);
    for (const log of result.logs) console.error('  ', log);
    process.exit(1);
  }
  const code = await result.outputs[0]!.text();
  // Sanity: a stray top-level import/export would make QuickJS reject the eval.
  if (/^\s*(import|export)\b/m.test(code)) {
    console.error(`[vm-libs] ${lib.label}: bundle has a top-level import/export — not eval-able in QuickJS.`);
    process.exit(1);
  }
  // Record the transitive source-graph hash (bundler-independent) for the manifest.
  manifest[lib.label] = await hashSourceGraph(lib.entry, lib.label);

  const file = join(OUT_DIR, lib.out);
  const banner =
    `// GENERATED by scripts/build-vm-libs.ts — DO NOT EDIT.\n` +
    `// Bundled ${lib.label} as a self-contained IIFE for the QuickJS VM (#11 P3 B).\n` +
    `// Regenerate with \`bun run gen:vm-libs\` after upgrading ${lib.label}.\n`;
  await writeFile(file, `${banner}export const ${lib.constName} = ${JSON.stringify(code)};\n`, 'utf8');
  console.log(`[vm-libs] Wrote ${file}  (${lib.label}: ${(code.length / 1024).toFixed(0)} KB)`);
}

// Source-graph manifest — the CI drift guard diffs THIS (bundler-independent),
// not the minified bundles (whose bytes legitimately vary across bun versions).
const sortedLibs: Record<string, string> = {};
for (const key of Object.keys(manifest).sort()) sortedLibs[key] = manifest[key]!;
const manifestJson = {
  note: 'GENERATED by scripts/build-vm-libs.ts — sha256 of each in-VM library bundle\'s transitive source graph (input paths + contents, line-ending/path-normalized). Bundler-version-independent, so it survives bun/canary bumps yet still changes when a vm-lib source is edited. CI diffs THIS file, not the minified bundles. Regenerate with `bun run gen:vm-libs`.',
  libs: sortedLibs,
};
await writeFile(MANIFEST, `${JSON.stringify(manifestJson, null, 2)}\n`, 'utf8');
console.log(`[vm-libs] Wrote ${MANIFEST}  (${Object.keys(sortedLibs).length} libs)`);

console.log('[vm-libs] Done.');
