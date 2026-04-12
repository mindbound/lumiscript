#!/usr/bin/env bun
/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT PACK BUILDER
 * ============================================================================
 * CLI tool that creates a .lumiscript.zip pack from a directory of .js files.
 *
 * Usage:
 *   bun scripts/build-pack.ts <directory> [--name <pack-name>] [--output <path>]
 *
 * Each .js file can contain frontmatter directives in leading comments:
 *
 *   // @name       My Script
 *   // @type       trigger
 *   // @triggers   MESSAGE_SENT, GENERATION_ENDED
 *   // @folder     Utilities
 *   // @description Does useful things
 *   // @author     mindbound
 *   // @version    1.0.0
 *   // @tags       utility, chat
 *
 * Frontmatter is optional — defaults: name from filename, type = trigger.
 * Lines are kept in the code (valid JS comments, self-documenting).
 */

import { resolve, basename } from 'path';
import { zipSync, strToU8 } from 'fflate';
import { ScriptPackSchema } from '../src/utils/pack-schema.js';
import type { ScriptPackEntry, ScriptMetadata } from '../src/types/script.js';

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
Usage: bun scripts/build-pack.ts <directory> [--name <pack-name>] [--output <path>]

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

// ─── Main ────────────────────────────────────────────────────────────────────

const resolvedDir = resolve(dirPath);
const stat = await Bun.file(resolvedDir).exists()
  ? undefined // Bun.file doesn't stat directories well, use node:fs
  : undefined;

// Verify directory exists
import { readdirSync, statSync } from 'fs';
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

// Find .js files (non-recursive, sorted)
const jsFiles = readdirSync(resolvedDir)
  .filter(f => f.endsWith('.js'))
  .sort();

if (jsFiles.length === 0) {
  console.error(`Error: no .js files found in ${resolvedDir}`);
  process.exit(1);
}

// Resolve pack name and output path
const resolvedName = packName ?? basename(resolvedDir);
const resolvedOutput = outputPath
  ? resolve(outputPath)
  : resolve(`${resolvedName}.lumiscript.zip`);

// Build entries
const entries: ScriptPackEntry[] = [];

for (const filename of jsFiles) {
  const filePath = resolve(resolvedDir, filename);
  const code = await Bun.file(filePath).text();
  const fm = parseFrontmatter(code);

  const metadata: ScriptMetadata = {};
  if (fm.description) metadata.description = fm.description;
  if (fm.author) metadata.author = fm.author;
  if (fm.version) metadata.version = fm.version;
  if (fm.tags) metadata.tags = fm.tags;

  const entry: ScriptPackEntry = {
    name: fm.name ?? filename.replace(/\.js$/, ''),
    code,
    type: fm.type === 'library' ? 'library' : 'trigger',
    ...(fm.triggers?.length ? { triggers: fm.triggers } : {}),
    ...(fm.folder ? { folder: fm.folder } : {}),
    ...(Object.keys(metadata).length > 0 ? { metadata } : {}),
  };

  entries.push(entry);
  console.log(`  + ${entry.name} (${entry.type}${fm.triggers?.length ? `, triggers: ${fm.triggers.join(', ')}` : ''})`);
}

// Validate
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
