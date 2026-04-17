#!/usr/bin/env bun
/**
 * ============================================================================
 * LUMISCRIPT — JS-TO-PACK CONVERTER (js2pack)
 * ============================================================================
 * CLI tool that creates a .lumiscript.zip pack from a directory of .js files.
 * Inverse of `scripts/pack2js.ts`.
 *
 * Usage:
 *   bun scripts/js2pack.ts <directory> [--name <pack-name>] [--output <path>]
 *
 * Two input modes — selected automatically based on directory contents:
 *
 *   MANIFEST MODE — used when `manifest.json` is present in the directory.
 *     The manifest is the source of truth for all metadata (name, type,
 *     triggers, bindings, folder, description, author, version, tags).
 *     Code is loaded from the file each manifest entry references via
 *     `file`. Frontmatter in the .js files is ignored in this mode. This
 *     gives a lossless round-trip when paired with `pack2js.ts`, which
 *     emits a manifest alongside the .js files.
 *
 *   FRONTMATTER MODE — used when no manifest is present. Each .js file's
 *     leading `// @...` comment block supplies metadata:
 *
 *       // @name       My Script
 *       // @type       trigger
 *       // @triggers   MESSAGE_SENT, GENERATION_ENDED
 *       // @folder     Utilities
 *       // @description Does useful things
 *       // @author     mindbound
 *       // @version    1.0.0
 *       // @tags       utility, chat
 *
 *     Frontmatter is optional — defaults: name from filename, type = trigger.
 *     Bindings cannot be expressed this way. Useful for hand-authored packs.
 */

import { resolve, basename } from 'path';
import { readdirSync, statSync, existsSync } from 'fs';
import * as z from 'zod';
import { zipSync, strToU8 } from 'fflate';
import { ScriptPackSchema, ManifestSchema } from '../src/utils/pack-schema.js';
import type { ScriptPackEntry, ScriptMetadata } from '../src/types/script.js';

type Manifest = z.infer<typeof ManifestSchema>;

// ─── Frontmatter parser ─────────────────────────────────────────────────────

interface Frontmatter {
  name?: string;
  type?: string;
  triggers?: string[];
  folder?: string;
  description?: string;
  author?: string;
  version?: string;
  tags?: string[];
}

const DIRECTIVE_RE = /^\/\/\s*@(\w+)\s+(.*)/;

function parseFrontmatter(code: string): Frontmatter {
  const fm: Frontmatter = {};
  for (const line of code.split('\n')) {
    const trimmed = line.trim();
    // Stop at first non-comment, non-blank line
    if (trimmed !== '' && !trimmed.startsWith('//')) break;

    const match = trimmed.match(DIRECTIVE_RE);
    if (!match) continue;

    const [, key, rawValue] = match;
    const value = rawValue!.trim();
    if (!value) continue;

    switch (key) {
      case 'name':        fm.name = value; break;
      case 'type':        fm.type = value; break;
      case 'triggers':    fm.triggers = value.split(',').map(s => s.trim()).filter(Boolean); break;
      case 'folder':      fm.folder = value; break;
      case 'description': fm.description = value; break;
      case 'author':      fm.author = value; break;
      case 'version':     fm.version = value; break;
      case 'tags':        fm.tags = value.split(',').map(s => s.trim()).filter(Boolean); break;
    }
  }
  return fm;
}

// ─── CLI argument parsing ────────────────────────────────────────────────────

function printUsage(): never {
  console.log(`
Usage: bun scripts/js2pack.ts <directory> [--name <pack-name>] [--output <path>]

Arguments:
  <directory>        Path to folder containing .js script files
  --name <name>      Pack name for the output filename (default: directory name)
  --output <path>    Output path for the ZIP file (default: ./<name>.lumiscript.zip)

Frontmatter directives (in // comments at the top of each .js file):
  @name, @type, @triggers, @folder, @description, @author, @version, @tags
`);
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('--help') || args.includes('-h')) printUsage();

let dirPath: string | undefined;
let packName: string | undefined;
let outputPath: string | undefined;

for (let i = 0; i < args.length; i++) {
  const arg = args[i]!;
  if (arg === '--name' && args[i + 1]) { packName = args[++i]; continue; }
  if (arg === '--output' && args[i + 1]) { outputPath = args[++i]; continue; }
  if (!arg.startsWith('-') && !dirPath) { dirPath = arg; continue; }
  console.error(`Unknown argument: ${arg}`);
  printUsage();
}

if (!dirPath) {
  console.error('Error: directory path is required');
  printUsage();
}

// ─── Entry builders ──────────────────────────────────────────────────────────

/**
 * Build pack entries from a manifest.json that references individual .js
 * files. Lossless: `triggers`, `bindings`, `folder`, and full `metadata`
 * are read from the manifest and copied through verbatim. Frontmatter in
 * the .js files is ignored in this mode — the manifest is the source of
 * truth.
 */
async function buildEntriesFromManifest(dir: string, manifest: Manifest): Promise<ScriptPackEntry[]> {
  const entries: ScriptPackEntry[] = [];
  for (const m of manifest.scripts) {
    const filePath = resolve(dir, m.file);
    if (!existsSync(filePath)) {
      console.error(`Error: manifest entry "${m.name}" references missing file: ${m.file}`);
      process.exit(1);
    }
    const code = await Bun.file(filePath).text();

    const entry: ScriptPackEntry = {
      name: m.name,
      code,
      type: m.type,
      ...(m.triggers?.length ? { triggers: m.triggers } : {}),
      ...(m.bindings?.length ? { bindings: m.bindings } : {}),
      ...(m.folder            ? { folder:   m.folder   } : {}),
      ...(m.metadata && Object.keys(m.metadata).length > 0 ? { metadata: m.metadata } : {}),
    };
    entries.push(entry);
    const triggerSummary = m.triggers?.length ? `, triggers: ${m.triggers.join(', ')}` : '';
    console.log(`  + ${m.name} (${m.type}${triggerSummary})`);
  }

  // Warn about orphan .js files not referenced by the manifest so the user
  // notices if their intent diverged from the manifest contents.
  const referenced = new Set(manifest.scripts.map(s => s.file));
  const orphans = readdirSync(dir).filter(f => f.endsWith('.js') && !referenced.has(f));
  if (orphans.length > 0) {
    console.log(`\nNote: ${orphans.length} .js file(s) not referenced by manifest.json:`);
    for (const f of orphans.slice(0, 10)) console.log(`  - ${f}`);
    if (orphans.length > 10) console.log(`  … and ${orphans.length - 10} more`);
  }

  return entries;
}

/**
 * Build pack entries by parsing `// @...` frontmatter directives from the
 * leading comment block of each .js file in the directory. Partial-fidelity:
 * `bindings` cannot be expressed in frontmatter and are never recovered;
 * other fields depend on the authoring script including the right directives.
 */
async function buildEntriesFromFrontmatter(dir: string): Promise<ScriptPackEntry[]> {
  const jsFiles = readdirSync(dir).filter(f => f.endsWith('.js')).sort();
  if (jsFiles.length === 0) {
    console.error(`Error: no .js files found in ${dir}`);
    process.exit(1);
  }

  const entries: ScriptPackEntry[] = [];
  for (const filename of jsFiles) {
    const filePath = resolve(dir, filename);
    const code = await Bun.file(filePath).text();
    const fm = parseFrontmatter(code);

    const metadata: ScriptMetadata = {};
    if (fm.description) metadata.description = fm.description;
    if (fm.author)      metadata.author      = fm.author;
    if (fm.version)     metadata.version     = fm.version;
    if (fm.tags)        metadata.tags        = fm.tags;

    const entry: ScriptPackEntry = {
      name: fm.name ?? filename.replace(/\.js$/, ''),
      code,
      type: fm.type === 'library' ? 'library' : 'trigger',
      ...(fm.triggers?.length ? { triggers: fm.triggers } : {}),
      ...(fm.folder            ? { folder:   fm.folder   } : {}),
      ...(Object.keys(metadata).length > 0 ? { metadata } : {}),
    };
    entries.push(entry);
    console.log(`  + ${entry.name} (${entry.type}${fm.triggers?.length ? `, triggers: ${fm.triggers.join(', ')}` : ''})`);
  }
  return entries;
}

// ─── Main ────────────────────────────────────────────────────────────────────

const resolvedDir = resolve(dirPath);

let dirStat;
try {
  dirStat = statSync(resolvedDir);
} catch {
  console.error(`Error: path does not exist: ${resolvedDir}`);
  process.exit(1);
}
if (!dirStat.isDirectory()) {
  console.error(`Error: not a directory: ${resolvedDir}`);
  process.exit(1);
}

// Detect manifest.json and branch. Presence of a manifest implies the
// user wants lossless round-trip; frontmatter mode is the fallback for
// directories authored by hand.
const manifestPath = resolve(resolvedDir, 'manifest.json');
let manifest: Manifest | null = null;

if (existsSync(manifestPath)) {
  let manifestText: string;
  try {
    manifestText = await Bun.file(manifestPath).text();
  } catch (err) {
    console.error(`Error: could not read manifest.json: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }

  let rawManifest: unknown;
  try {
    rawManifest = JSON.parse(manifestText);
  } catch (err) {
    console.error(`Error: manifest.json is not valid JSON: ${err instanceof Error ? err.message : String(err)}`);
    process.exit(1);
  }

  const parsed = ManifestSchema.safeParse(rawManifest);
  if (!parsed.success) {
    console.error('Error: manifest.json failed schema validation:');
    console.error(parsed.error.message);
    process.exit(1);
  }
  manifest = parsed.data;
}

const resolvedName = packName ?? basename(resolvedDir);
const resolvedOutput = outputPath
  ? resolve(outputPath)
  : resolve(`${resolvedName}.lumiscript.zip`);

let entries: ScriptPackEntry[];
if (manifest) {
  console.log(`Using manifest.json as source of truth (${manifest.scripts.length} script${manifest.scripts.length === 1 ? '' : 's'}).`);
  entries = await buildEntriesFromManifest(resolvedDir, manifest);
} else {
  console.log('No manifest.json found — parsing frontmatter from .js files.');
  entries = await buildEntriesFromFrontmatter(resolvedDir);
}

// Validate the assembled pack against the canonical schema before writing.
const pack = {
  format: 'lumiscript-pack-v1' as const,
  exportedAt: new Date().toISOString(),
  scripts: entries,
};

try {
  ScriptPackSchema.parse(pack);
} catch (err) {
  console.error('\nValidation failed:');
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
}

// Create ZIP and write
const zipped = zipSync({ 'pack.json': strToU8(JSON.stringify(pack, null, 2)) });
await Bun.write(resolvedOutput, zipped);

const sizeKB = (zipped.byteLength / 1024).toFixed(1);
console.log(`\n✓ ${entries.length} script${entries.length > 1 ? 's' : ''} → ${resolvedOutput} (${sizeKB} KB)`);
