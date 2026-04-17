#!/usr/bin/env bun
/**
 * ============================================================================
 * LUMISCRIPT — PACK-TO-JS CONVERTER (pack2js)
 * ============================================================================
 * CLI tool that expands a .lumiscript.zip pack (or a bare pack.json) into a
 * directory of individual .js files plus a manifest.json carrying the
 * non-code metadata. Intended for editing scripts outside of LumiScript in
 * an editor of choice, keeping them under version control, grepping across
 * pack contents, etc. Inverse of `scripts/js2pack.ts`.
 *
 * Usage:
 *   bun scripts/pack2js.ts <input> <output-dir> [--force]
 *
 * Arguments:
 *   <input>        Path to a .lumiscript.zip OR a bare pack.json file.
 *                  Format auto-detected by extension.
 *   <output-dir>   Directory to write .js files + manifest.json into.
 *                  Refuses to overwrite existing directories unless --force
 *                  is passed.
 *
 * Output shape:
 *   <output-dir>/
 *   ├── manifest.json      Lossless metadata — triggers, bindings, folder,
 *   │                      script metadata, pointer back to each .js file.
 *   │                      Named `manifest.json` (not `pack.json`) to avoid
 *   │                      being mistaken for a full LumiScript pack file.
 *   └── <slug>.js          One file per script. Code is copied verbatim —
 *                          no mutation, no added frontmatter. If the script's
 *                          original code already contains `// @...` frontmatter
 *                          comments, they're preserved as-is.
 *
 * Round-trip note:
 *   `scripts/js2pack.ts` currently consumes `// @...` frontmatter from each
 *   .js file. The manifest.json this tool emits is richer (includes bindings,
 *   for example) and can be used as a fuller source of truth if js2pack is
 *   extended to read it. For now, scripts without frontmatter directives in
 *   their code body will lose `triggers`/`folder`/metadata on the js2pack
 *   round-trip unless the authoring tooling adds them.
 */

import { resolve, basename, extname } from 'path';
import { mkdirSync, statSync, readdirSync, writeFileSync } from 'fs';
import { readFile } from 'fs/promises';
import { unzipSync, strFromU8 } from 'fflate';
import { ScriptPackSchema } from '../src/utils/pack-schema.js';
import type { ScriptPackEntry } from '../src/types/script.js';

// ─── CLI argument parsing ────────────────────────────────────────────────────

function printUsage(): never {
  console.log(`
Usage: bun scripts/pack2js.ts <input> <output-dir> [--force]

Arguments:
  <input>        Path to a .lumiscript.zip OR a bare pack.json file.
                 Format auto-detected by extension (.zip or .json).
  <output-dir>   Directory to write .js files + manifest.json into.

Options:
  --force        Overwrite an existing output directory. Refuses otherwise.
`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) printUsage();

const force = args.includes('--force');
const positional = args.filter(a => !a.startsWith('-'));
if (positional.length !== 2) {
  console.error('Error: exactly two positional arguments required (input and output-dir).');
  printUsage();
}
const [inputPath, outDir] = positional as [string, string];

// ─── Read + parse the input pack ─────────────────────────────────────────────

const resolvedInput = resolve(inputPath);
let inputStat;
try {
  inputStat = statSync(resolvedInput);
} catch {
  console.error(`Error: input file does not exist: ${resolvedInput}`);
  process.exit(1);
}
if (!inputStat.isFile()) {
  console.error(`Error: input is not a file: ${resolvedInput}`);
  process.exit(1);
}

const ext = extname(resolvedInput).toLowerCase();
let packJsonText: string;

if (ext === '.zip') {
  // Unzip in-memory; locate pack.json regardless of whether the zip prefixes
  // entries with a directory.
  const buffer = await readFile(resolvedInput);
  const unzipped = unzipSync(new Uint8Array(buffer));
  const packKey = Object.keys(unzipped).find(k => k === 'pack.json' || k.endsWith('/pack.json'));
  if (!packKey) {
    console.error(`Error: ${resolvedInput} does not contain pack.json`);
    process.exit(1);
  }
  packJsonText = strFromU8(unzipped[packKey]!);
} else if (ext === '.json') {
  packJsonText = await readFile(resolvedInput, 'utf-8');
} else {
  console.error(`Error: unsupported input extension "${ext}". Expected .zip or .json.`);
  process.exit(1);
}

let rawPack: unknown;
try {
  rawPack = JSON.parse(packJsonText);
} catch (err) {
  console.error(`Error: invalid JSON in ${resolvedInput}: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}

const parsed = ScriptPackSchema.safeParse(rawPack);
if (!parsed.success) {
  console.error('Error: pack failed schema validation:');
  console.error(parsed.error.message);
  process.exit(1);
}
const pack = parsed.data;

// ─── Prepare output directory ────────────────────────────────────────────────

const resolvedOut = resolve(outDir);
let outExists = false;
try {
  const s = statSync(resolvedOut);
  outExists = s.isDirectory() || s.isFile();
} catch {
  // Doesn't exist — that's fine.
}

if (outExists && !force) {
  console.error(`Error: output path already exists: ${resolvedOut}`);
  console.error('Pass --force to overwrite.');
  process.exit(1);
}

mkdirSync(resolvedOut, { recursive: true });

// ─── Write .js files + manifest.json ─────────────────────────────────────────

const usedSlugs = new Set<string>();

function slugify(name: string): string {
  const slug = name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')       // strip combining diacritics
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'script';
}

function uniqueSlug(name: string): string {
  const base = slugify(name);
  if (!usedSlugs.has(base)) return base;
  for (let i = 2; i < 10_000; i++) {
    const candidate = `${base}-${i}`;
    if (!usedSlugs.has(candidate)) return candidate;
  }
  throw new Error(`Could not generate a unique slug for "${name}" after 10000 attempts.`);
}

interface ManifestEntry {
  name: string;
  file: string;
  type: ScriptPackEntry['type'];
  triggers?: ScriptPackEntry['triggers'];
  bindings?: ScriptPackEntry['bindings'];
  folder?: ScriptPackEntry['folder'];
  metadata?: ScriptPackEntry['metadata'];
}

const manifestEntries: ManifestEntry[] = [];

for (const script of pack.scripts) {
  const slug = uniqueSlug(script.name);
  usedSlugs.add(slug);
  const filename = `${slug}.js`;
  writeFileSync(resolve(resolvedOut, filename), script.code, 'utf-8');

  // Omit empty/undefined optional fields from the manifest for a cleaner output
  // (round-trips back into the same shape when re-parsed).
  const entry: ManifestEntry = {
    name: script.name,
    file: filename,
    type: script.type,
  };
  if (script.triggers && script.triggers.length > 0) entry.triggers = script.triggers;
  if (script.bindings && script.bindings.length > 0) entry.bindings = script.bindings;
  if (script.folder)   entry.folder   = script.folder;
  if (script.metadata && Object.keys(script.metadata).length > 0) entry.metadata = script.metadata;

  manifestEntries.push(entry);
  const triggerSummary = entry.triggers?.length ? `, triggers: ${entry.triggers.join(', ')}` : '';
  console.log(`  + ${filename}  ← ${script.name} (${script.type}${triggerSummary})`);
}

const manifest = {
  format:        'lumiscript-manifest-v1' as const,
  sourcePack:    basename(resolvedInput),
  sourceFormat:  pack.format,
  exportedAt:    pack.exportedAt,
  convertedAt:   new Date().toISOString(),
  scripts:       manifestEntries,
};

writeFileSync(
  resolve(resolvedOut, 'manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf-8',
);

// Detect any existing .js files in the output dir that weren't written by
// this run — if --force was used against a populated directory, alert the
// user so they don't assume the output is a clean slate.
if (force && outExists) {
  const allFiles   = readdirSync(resolvedOut);
  const expected   = new Set<string>(manifestEntries.map(e => e.file).concat(['manifest.json']));
  const unexpected = allFiles.filter(f => !expected.has(f));
  if (unexpected.length > 0) {
    console.log(`\nNote: ${unexpected.length} pre-existing file(s) in the output directory were not overwritten:`);
    for (const f of unexpected.slice(0, 10)) console.log(`  - ${f}`);
    if (unexpected.length > 10) console.log(`  … and ${unexpected.length - 10} more`);
  }
}

console.log(`\n✓ ${manifestEntries.length} script${manifestEntries.length === 1 ? '' : 's'} + manifest.json → ${resolvedOut}`);
