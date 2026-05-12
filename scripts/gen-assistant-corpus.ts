#!/usr/bin/env bun
/**
 * ============================================================================
 * LumiScript — Assistant Corpus Generator
 * ============================================================================
 * Build-time pipeline that produces the in-app code assistant's API knowledge
 * corpus from the existing source-of-truth data in ReferenceTab.tsx
 * (primary) and editor-lib.ts (enrichment, JSDoc + @example blocks).
 *
 * See notes/code-assistant-design.md § S1 for the full design rationale.
 *
 * Outputs:
 *  - src/assistant/corpus/cheat-sheet.md   (~70-80 KB markdown, system prompt)
 *  - src/assistant/corpus/cheat-sheet.ts   (TS shim re-exporting the markdown as a string)
 *  - src/assistant/corpus/lookup-table.json (O(1) keyed dict, tool-call returns)
 *  - src/assistant/corpus/lookup-table.ts   (TS shim re-exporting the table)
 *
 * Runs as `bun run gen:corpus`. Chained into `bun run build` before the
 * typecheck pass so the generated files exist when the assistant module
 * imports them.
 *
 * Five merge passes produce the lookup table:
 *   1. apiIndex methods (curated cheat-sheet rows from API_GROUPS)
 *   2. editor-only methods (typed but not yet curated — fallback path)
 *   3. see_also enrichment (stem-siblings + namespace-siblings + type refs)
 *   4. built-in libraries (BUILTIN_COMPONENTS / BUILTIN_COUNCIL_PROMPT / BUILTIN_ICONS)
 *   4.5. redirects (REDIRECTS — wrong-path → corrective message)
 *   5. types (KEY_TYPES + BUILTIN_TYPES)
 *
 * Bidirectional drift validation runs after the indexes are built — checks
 * that API_GROUPS and editor-lib stay in sync, with an explicit allowlist
 * for known-explainable mismatches (synthetic groupings, properties-not-
 * methods). Unexpected drift fails the build.
 */

import {
  EVENTS,
  PERM_GROUPS,
  BROADCAST_EVENTS,
  LS_MACRO_GROUPS,
  KEY_TYPES,
  API_GROUPS,
  BUILTIN_COMPONENTS,
  BUILTIN_COUNCIL_PROMPT,
  BUILTIN_ICONS,
  BUILTIN_TYPES,
  NAMESPACE_CONCEPTS,
  PERMISSION_MODEL_INTRO,
  PERMISSION_DESCRIPTIONS,
  TRIGGER_MODEL_INTRO,
  REDIRECTS,
} from '../src/components/reference/ReferenceTab.js';
import { LUMISCRIPT_DEFS } from '../src/types/editor-lib.js';
import type {
  LookupEntry,
  MethodLookupEntry,
  BuiltinLookupEntry,
  TypeLookupEntry,
  RedirectLookupEntry,
} from '../src/assistant/types.js';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// ─── Output paths ────────────────────────────────────────────────────────────

const REPO_ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const CORPUS_DIR = join(REPO_ROOT, 'src/assistant/corpus');
const CHEATSHEET_PATH = join(CORPUS_DIR, 'cheat-sheet.md');
const LOOKUP_PATH = join(CORPUS_DIR, 'lookup-table.json');
// TS shims that re-export the corpus as typed constants for runtime import
// by the assistant module. Ship alongside the .md / .json (which stay for
// human inspection during PR reviews).
const CHEATSHEET_TS_PATH = join(CORPUS_DIR, 'cheat-sheet.ts');
const LOOKUP_TS_PATH = join(CORPUS_DIR, 'lookup-table.ts');

// ─── Types ───────────────────────────────────────────────────────────────────

interface ApiEntry {
  fqName: string;
  namespace: string;
  name: string;
  args: string;
  desc: string;
}

interface PermResolution {
  perms: string[];
  note?: string;
}

interface EditorEntry {
  fqName: string;
  signature: string;
  description: string;
  examples: string[];
}

interface PermIndex {
  exact: Map<string, PermResolution>;
  wildcards: Array<{ prefix: string; perms: PermResolution }>;
}

// ─── Multi-namespace group title parsing ────────────────────────────────────
//
// API_GROUPS can have multi-scope group titles like
// `api.variables.local / .global / .character / .chat` or
// `api.files — user* (per-user persistent)`. parseGroupNamespaces returns
// the namespace path(s) that should receive the group's method rows.

function parseGroupNamespaces(group: string): string[] {
  // Multi-scope shorthand: `api.variables.local / .global / .character / .chat`
  // → ['api.variables.local', 'api.variables.global', 'api.variables.character', 'api.variables.chat']
  if (group.includes(' / .')) {
    const parts = group.split(' / ');
    const head = parts[0]!;                          // 'api.variables.local'
    const headParts = head.split('.');
    const stem = headParts.slice(0, -1).join('.');   // 'api.variables'
    return [
      head,
      ...parts.slice(1).map((p) => `${stem}${p}`),   // '.global' → 'api.variables.global'
    ];
  }
  // Description-style title: `api.files — user* (per-user persistent)`
  // → ['api.files']
  if (group.includes(' — ')) {
    return [group.split(' — ')[0]!];
  }
  return [group];
}

// ─── apiIndex (from API_GROUPS) ──────────────────────────────────────────────

function buildApiIndex(): Map<string, ApiEntry> {
  const out = new Map<string, ApiEntry>();
  for (const g of API_GROUPS) {
    const namespaces = parseGroupNamespaces(g.group);
    for (const ns of namespaces) {
      for (const row of g.rows) {
        const fqName = `${ns}.${row.name}`;
        out.set(fqName, {
          fqName,
          namespace: ns,
          name: row.name,
          args: row.args,
          desc: row.desc,
        });
      }
    }
  }
  return out;
}

// ─── permIndex (from PERM_GROUPS) ────────────────────────────────────────────

function buildPermIndex(): PermIndex {
  const exact = new Map<string, PermResolution>();
  const wildcards: Array<{ prefix: string; perms: PermResolution }> = [];
  for (const g of PERM_GROUPS) {
    for (const row of g.rows) {
      const res: PermResolution = { perms: row.perms, ...(row.note ? { note: row.note } : {}) };
      if (row.method.endsWith('.*')) {
        wildcards.push({ prefix: row.method.slice(0, -1), perms: res });   // drop just the '*' — keep the trailing '.'
      } else if (row.method.includes('/')) {
        // Compact "api.utils.uuid / shortId / wait" form — split and register each.
        const parts = row.method.split(' / ');
        const head = parts[0]!;
        const headParts = head.split('.');
        const stem = headParts.slice(0, -1).join('.');
        exact.set(head, res);
        for (const p of parts.slice(1)) {
          exact.set(`${stem}.${p.trim()}`, res);
        }
      } else {
        exact.set(row.method, res);
      }
    }
  }
  return { exact, wildcards };
}

function resolvePerms(fqName: string, index: PermIndex): PermResolution {
  const direct = index.exact.get(fqName);
  if (direct) return direct;
  // Longest wildcard prefix wins.
  let best: PermResolution | null = null;
  let bestLen = -1;
  for (const w of index.wildcards) {
    if (fqName.startsWith(w.prefix) && w.prefix.length > bestLen) {
      best = w.perms;
      bestLen = w.prefix.length;
    }
  }
  return best ?? { perms: [] };
}

// ─── editorLibIndex (regex walk over LUMISCRIPT_DEFS) ───────────────────────
//
// LUMISCRIPT_DEFS is a single template-string of ambient TS declarations that
// the Monaco editor consumes via addExtraLib. We extract per-method
// signatures + JSDoc + @example blocks via regex walk.
//
// The walk is intentionally regex-based (not a real TS parser) — we don't
// need full type resolution, just `name(args): RetType` strings + nearby
// JSDoc. Two roots: `LumiScriptAPI` (the `api` global) and `ScriptNamespace`
// (the `script` global).

function findMatchingBrace(text: string, startIdx: number): number {
  let depth = 1;
  let i = startIdx + 1;
  while (i < text.length) {
    const ch = text[i]!;
    const next = text[i + 1];
    if (ch === '/' && next === '*') {
      const end = text.indexOf('*/', i + 2);
      if (end === -1) return -1;
      i = end + 2;
      continue;
    }
    if (ch === '/' && next === '/') {
      const eol = text.indexOf('\n', i + 2);
      i = eol === -1 ? text.length : eol + 1;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  return -1;
}

interface ParsedMember {
  kind: 'method' | 'property';
  name: string;
  signature: string;
  typeName: string | undefined;
  inlineBody: string | undefined;
}

function parseMember(decl: string): ParsedMember | null {
  const method = decl.match(/^(\w+)\s*[<(]/);
  if (method) {
    return {
      kind: 'method',
      name: method[1]!,
      signature: decl.replace(/;$/, '').trim(),
      typeName: undefined,
      inlineBody: undefined,
    };
  }
  const colonIdx = decl.indexOf(':');
  if (colonIdx === -1) return null;
  const nameMatch = decl.slice(0, colonIdx).match(/^(\w+)\s*[?]?\s*$/);
  if (!nameMatch) return null;
  const name = nameMatch[1]!;
  const rest = decl.slice(colonIdx + 1).trim();
  if (rest.startsWith('{')) {
    const braceStart = decl.indexOf('{', colonIdx);
    const braceEnd = findMatchingBrace(decl, braceStart);
    if (braceEnd === -1) return null;
    return {
      kind: 'property',
      name,
      signature: decl.replace(/;$/, '').trim(),
      typeName: undefined,
      inlineBody: decl.slice(braceStart + 1, braceEnd),
    };
  }
  const named = rest.match(/^(\w+)/);
  return {
    kind: 'property',
    name,
    signature: decl.replace(/;$/, '').trim(),
    typeName: named ? named[1] : undefined,
    inlineBody: undefined,
  };
}

/**
 * Split an interface body (just the text between the outer braces) into
 * individual member declarations + their preceding JSDoc. Comment-aware:
 * handles nested braces, line and block comments.
 */
function parseInterfaceMembers(body: string): Array<{ jsdoc: string; declaration: string }> {
  const out: Array<{ jsdoc: string; declaration: string }> = [];
  let i = 0;
  let pendingJsdoc = '';
  while (i < body.length) {
    while (i < body.length && /\s/.test(body[i]!)) i++;
    if (i >= body.length) break;
    // JSDoc block — capture content (without /**, */, and per-line `*` prefix).
    if (body.slice(i, i + 3) === '/**') {
      const end = body.indexOf('*/', i + 3);
      if (end === -1) break;
      const raw = body.slice(i + 3, end);
      pendingJsdoc = raw
        .split('\n')
        .map((l) => l.replace(/^\s*\*\s?/, ''))
        .join('\n')
        .trim();
      i = end + 2;
      continue;
    }
    // Line comment — skip.
    if (body.slice(i, i + 2) === '//') {
      const eol = body.indexOf('\n', i + 2);
      i = eol === -1 ? body.length : eol + 1;
      continue;
    }
    // Member declaration — scan forward to `;` at depth 0, handling nested braces.
    let depth = 0;
    let declStart = i;
    let cursor = i;
    while (cursor < body.length) {
      const ch = body[cursor]!;
      if (ch === '/' && body[cursor + 1] === '*') {
        const end = body.indexOf('*/', cursor + 2);
        if (end === -1) { cursor = body.length; break; }
        cursor = end + 2;
        continue;
      }
      if (ch === '/' && body[cursor + 1] === '/') {
        const eol = body.indexOf('\n', cursor + 2);
        cursor = eol === -1 ? body.length : eol + 1;
        continue;
      }
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (ch === ';' && depth === 0) { cursor++; break; }
      cursor++;
    }
    const declaration = body.slice(declStart, cursor).trim();
    if (declaration) {
      out.push({ jsdoc: pendingJsdoc, declaration });
      pendingJsdoc = '';
    }
    i = cursor;
  }
  return out;
}

/**
 * Recursively walk an interface declared at the top level of LUMISCRIPT_DEFS,
 * yielding fully-qualified method entries with their signatures + JSDoc.
 * Sub-namespaces (properties whose type is another named interface, OR an
 * inline object-literal type) recurse into the same walk.
 */
function* walkInterface(
  defs: string,
  ifaceName: string,
  prefix: string,
  visited: Set<string>,
): Generator<EditorEntry> {
  if (visited.has(ifaceName)) return;
  visited.add(ifaceName);
  const re = new RegExp(`interface\\s+${ifaceName}\\s*\\{`);
  const m = defs.match(re);
  if (!m) return;
  const bodyStart = defs.indexOf('{', m.index!);
  const bodyEnd = findMatchingBrace(defs, bodyStart);
  if (bodyEnd === -1) return;
  const body = defs.slice(bodyStart + 1, bodyEnd);
  for (const { jsdoc, declaration } of parseInterfaceMembers(body)) {
    const parsed = parseMember(declaration);
    if (!parsed) continue;
    if (parsed.kind === 'method') {
      const examples: string[] = [];
      const exampleRe = /@example\s*\n?([\s\S]*?)(?=\n\s*@\w+|\n\n\s*$|$)/g;
      let em: RegExpExecArray | null;
      while ((em = exampleRe.exec(jsdoc)) !== null) {
        examples.push(em[1]!.trim());
      }
      const description = jsdoc.replace(/@example[\s\S]*$/, '').replace(/^@\w+.*$/gm, '').trim();
      yield {
        fqName: `${prefix}.${parsed.name}`,
        signature: parsed.signature,
        description,
        examples,
      };
    } else if (parsed.kind === 'property') {
      const subPrefix = `${prefix}.${parsed.name}`;
      if (parsed.typeName) {
        yield* walkInterface(defs, parsed.typeName, subPrefix, visited);
      } else if (parsed.inlineBody) {
        // Inline object-literal subnamespace — parse its body directly.
        for (const inner of parseInterfaceMembers(parsed.inlineBody)) {
          const innerParsed = parseMember(inner.declaration);
          if (!innerParsed || innerParsed.kind !== 'method') continue;
          const examples: string[] = [];
          const description = inner.jsdoc.replace(/@example[\s\S]*$/, '').replace(/^@\w+.*$/gm, '').trim();
          yield {
            fqName: `${subPrefix}.${innerParsed.name}`,
            signature: innerParsed.signature,
            description,
            examples,
          };
        }
      }
    }
  }
}

function buildEditorLibIndex(): Map<string, EditorEntry> {
  const out = new Map<string, EditorEntry>();
  for (const entry of walkInterface(LUMISCRIPT_DEFS, 'LumiScriptAPI', 'api', new Set())) {
    out.set(entry.fqName, entry);
  }
  for (const entry of walkInterface(LUMISCRIPT_DEFS, 'ScriptNamespace', 'script', new Set())) {
    out.set(entry.fqName, entry);
  }
  return out;
}

// ─── Sanity logging ──────────────────────────────────────────────────────────

console.log('[corpus] Source data:');
console.log(`         · API_GROUPS               ${API_GROUPS.length}`);
console.log(`         · PERM_GROUPS              ${PERM_GROUPS.length}`);
console.log(`         · EVENTS                   ${EVENTS.length}`);
console.log(`         · BROADCAST_EVENTS         ${BROADCAST_EVENTS.length}`);
console.log(`         · LS_MACRO_GROUPS          ${LS_MACRO_GROUPS.length}`);
console.log(`         · KEY_TYPES                ${KEY_TYPES.length}`);
console.log(`         · BUILTIN_COMPONENTS       ${BUILTIN_COMPONENTS.length}`);
console.log(`         · BUILTIN_COUNCIL_PROMPT   ${BUILTIN_COUNCIL_PROMPT.length}`);
console.log(`         · BUILTIN_ICONS            ${BUILTIN_ICONS.length}`);
console.log(`         · BUILTIN_TYPES            ${BUILTIN_TYPES.length}`);
console.log(`         · LUMISCRIPT_DEFS          ${LUMISCRIPT_DEFS.length} chars`);

const apiIndex = buildApiIndex();
const permIndex = buildPermIndex();
const editorLibIndex = buildEditorLibIndex();

console.log('[corpus] Indexes built:');
console.log(`         · apiIndex         ${apiIndex.size} methods`);
console.log(`         · permIndex.exact  ${permIndex.exact.size} exact entries`);
console.log(`         · permIndex.wildcards ${permIndex.wildcards.length} wildcards`);
console.log(`         · editorLibIndex   ${editorLibIndex.size} methods`);

// ─── Drift validation (with allowlists) ─────────────────────────────────────
//
// Surfaces drift between API_GROUPS (curated) and editor-lib (typed).
// New unexplained drift fails the build; known-explainable drift goes in
// the allowlists below with a reason.

type Allowlist = Array<{ match: string; prefix?: boolean; reason: string }>;

const API_ONLY_ALLOWLIST: Allowlist = [
  // Properties on ScriptNamespace, surfaced as method-shaped rows in the
  // Reference tab for usability. The editor-lib walk only catches methods.
  { match: 'script.id',   reason: 'Property on ScriptNamespace (not a method).' },
  { match: 'script.name', reason: 'Property on ScriptNamespace (not a method).' },
  { match: 'script.type', reason: 'Property on ScriptNamespace (not a method).' },
  // Reference tab presents api.db.collection.* as a synthetic group, but the
  // actual editor-lib shape is Collection<T> returned by api.db.collection(name).
  { match: 'api.db.collection.', prefix: true, reason: 'Synthetic Reference-tab grouping; editor-lib types Collection<T> on the return of api.db.collection(name).' },
  // Reference tab and editor-lib use different paths for these.
  { match: 'api.worldInfo.registerInterceptor', reason: 'Reference-tab entry has no 1:1 editor-lib counterpart at this path.' },
  { match: 'api.worldInfo.listInterceptors',    reason: 'Reference-tab entry has no 1:1 editor-lib counterpart at this path.' },
  // The four api.variables scopes share a single VariablesAPI interface at
  // the type level — editor-lib only walks under api.variables.local. The
  // .global / .character / .chat methods all exist in the API surface (same
  // shape, different storage backend) but don't appear in editorLibIndex.
  // Allowlisted as a known-multi-scope expansion.
  { match: 'api.variables.global.',    prefix: true, reason: 'Multi-scope group: api.variables.{local,global,character,chat} share one VariablesAPI interface; editor-lib walks only the .local instance.' },
  { match: 'api.variables.character.', prefix: true, reason: 'Multi-scope group: api.variables.{local,global,character,chat} share one VariablesAPI interface; editor-lib walks only the .local instance.' },
  { match: 'api.variables.chat.',      prefix: true, reason: 'Multi-scope group: api.variables.{local,global,character,chat} share one VariablesAPI interface; editor-lib walks only the .local instance.' },
];

const EDITOR_ONLY_ALLOWLIST: Allowlist = [
  // Real Reference-tab data gaps. These methods exist in editor-lib (and
  // ship in the API surface) but aren't documented in API_GROUPS yet. The
  // assistant lookup table still covers them via the editor-lib fallback;
  // the cheat-sheet should be updated when API_GROUPS catches up.
  { match: 'api.chat.setMessageHidden',   reason: 'TODO: backfill API_GROUPS entry.' },
  { match: 'api.chat.setMessagesHidden',  reason: 'TODO: backfill API_GROUPS entry.' },
  { match: 'api.chat.isMessageHidden',    reason: 'TODO: backfill API_GROUPS entry.' },
  // (Resolved 2026-05-12 — multi-scope group now includes `.chat` so the
  //  fourth variables scope is documented and no longer drifts.)
  // (Resolved 2026-05-12 — api.databanks namespace backfilled into API_GROUPS
  //  with full method surface + 9 type entries in KEY_TYPES.)
  // Entire api.rpc namespace missing from API_GROUPS.
  { match: 'api.rpc.', prefix: true, reason: 'TODO: backfill api.rpc namespace into API_GROUPS.' },
];

function isAllowlisted(fqName: string, allowlist: Allowlist): boolean {
  return allowlist.some((entry) =>
    entry.prefix ? fqName.startsWith(entry.match) : fqName === entry.match
  );
}

const apiOnly: string[] = [];
const editorOnly: string[] = [];
for (const fq of apiIndex.keys())       if (!editorLibIndex.has(fq)) apiOnly.push(fq);
for (const fq of editorLibIndex.keys()) if (!apiIndex.has(fq))      editorOnly.push(fq);

const unexpectedApiOnly = apiOnly.filter((fq) => !isAllowlisted(fq, API_ONLY_ALLOWLIST));
const unexpectedEditorOnly = editorOnly.filter((fq) => !isAllowlisted(fq, EDITOR_ONLY_ALLOWLIST));

console.log('[corpus] Drift validation:');
console.log(`         · apiIndex \\ editorLibIndex: ${apiOnly.length} total (${unexpectedApiOnly.length} unexpected)`);
console.log(`         · editorLibIndex \\ apiIndex: ${editorOnly.length} total (${unexpectedEditorOnly.length} unexpected)`);

if (unexpectedApiOnly.length > 0 || unexpectedEditorOnly.length > 0) {
  console.error('[corpus] Unexpected drift — failing the build.');
  if (unexpectedApiOnly.length > 0) {
    console.error('         · apiIndex-only (in Reference but not editor-lib):');
    for (const fq of unexpectedApiOnly) console.error(`           - ${fq}`);
  }
  if (unexpectedEditorOnly.length > 0) {
    console.error('         · editorLib-only (in editor-lib but not Reference):');
    for (const fq of unexpectedEditorOnly) console.error(`           - ${fq}`);
  }
  console.error('         Either add the missing entry to the other side, or add it to the');
  console.error('         appropriate allowlist in scripts/gen-assistant-corpus.ts with a rationale.');
  process.exit(1);
}

// Permission descriptions coverage check.
const declaredPerms = new Set<string>();
for (const g of PERM_GROUPS) {
  for (const row of g.rows) for (const p of row.perms) declaredPerms.add(p);
}
const missingDescs = [...declaredPerms].filter((p) => !PERMISSION_DESCRIPTIONS[p]);
if (missingDescs.length > 0) {
  console.error('[corpus] Permission(s) without description in PERMISSION_DESCRIPTIONS:');
  for (const p of missingDescs) console.error(`           - ${p}`);
  process.exit(1);
}

// ─── Lookup table merge (5 passes) ──────────────────────────────────────────

function findTypeReferences(signature: string): string[] {
  const out: string[] = [];
  const re = /\b([A-Z]\w+)\b/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(signature)) !== null) {
    out.push(m[1]!);
  }
  return out;
}

function mergeLookupEntries(): Record<string, LookupEntry> {
  const out: Record<string, LookupEntry> = {};
  const bySignature = new Map<string, string>();

  // Pass 1: apiIndex methods (curated rows from API_GROUPS, enriched with
  // editor-lib JSDoc + signatures where available).
  for (const [fqName, api] of apiIndex) {
    const editor = editorLibIndex.get(fqName);
    const perms = resolvePerms(fqName, permIndex);
    const signature = editor?.signature ?? `${api.name}(${api.args})`;
    bySignature.set(fqName, signature);
    const desc = editor?.description ? editor.description : api.desc;
    const entry: MethodLookupEntry = {
      kind: 'method',
      method: fqName,
      namespace: api.namespace,
      signature,
      description: desc,
      permissions: perms.perms,
      ...(perms.note ? { permNote: perms.note } : {}),
      examples: editor?.examples ?? [],
      see_also: [],
    };
    out[fqName] = entry;
  }

  // Pass 2: editor-only methods (typed but not curated; still useful in
  // the lookup table for tool calls).
  for (const [fqName, editor] of editorLibIndex) {
    if (out[fqName]) continue;
    const perms = resolvePerms(fqName, permIndex);
    const namespace = fqName.slice(0, fqName.lastIndexOf('.'));
    bySignature.set(fqName, editor.signature);
    const entry: MethodLookupEntry = {
      kind: 'method',
      method: fqName,
      namespace,
      signature: editor.signature,
      description: editor.description,
      permissions: perms.perms,
      ...(perms.note ? { permNote: perms.note } : {}),
      examples: editor.examples,
      see_also: [],
    };
    out[fqName] = entry;
  }

  // Pass 3: see_also enrichment (stem-siblings + type-refs).
  for (const fqName of Object.keys(out)) {
    const entry = out[fqName] as MethodLookupEntry;
    if (entry.kind !== 'method') continue;
    const siblings = Object.keys(out)
      .filter((k) => {
        if (k === fqName) return false;
        const ent = out[k];
        if (!ent || ent.kind !== 'method') return false;
        return ent.namespace === entry.namespace;
      })
      .slice(0, 5);
    const sig = bySignature.get(fqName) ?? '';
    const typeRefs = findTypeReferences(sig).slice(0, 4);
    entry.see_also = [...new Set([...siblings, ...typeRefs])].slice(0, 6);
  }

  // Pass 4: built-in libraries.
  const builtinLibs = [
    { rows: BUILTIN_COMPONENTS,       library: 'ls:components' },
    { rows: BUILTIN_COUNCIL_PROMPT,   library: 'ls:council-prompt' },
    { rows: BUILTIN_ICONS,            library: 'ls:icons' },
  ];
  for (const { rows, library } of builtinLibs) {
    for (const row of rows) {
      const fqName = `${library}.${row.name}`;
      const entry: BuiltinLookupEntry = {
        kind: 'builtin',
        method: fqName,
        library,
        signature: `${row.name}(${row.args})`,
        description: row.desc,
        see_also: rows.filter((r) => r.name !== row.name).slice(0, 4).map((r) => `${library}.${r.name}`),
      };
      out[fqName] = entry;
    }
  }

  // Pass 4.5: redirects.
  for (const [attempted, message] of Object.entries(REDIRECTS)) {
    const entry: RedirectLookupEntry = {
      kind: 'redirect',
      attempted,
      message,
    };
    out[attempted] = entry;
  }

  // Pass 5: types (KEY_TYPES + BUILTIN_TYPES).
  const allTypes = [...KEY_TYPES, ...BUILTIN_TYPES];
  // usedBy: scan method signatures for type-name references.
  const typeUsedBy = new Map<string, Set<string>>();
  for (const [fqName, sig] of bySignature) {
    for (const ref of findTypeReferences(sig)) {
      if (!typeUsedBy.has(ref)) typeUsedBy.set(ref, new Set());
      typeUsedBy.get(ref)!.add(fqName);
    }
  }
  for (const t of allTypes) {
    const entry: TypeLookupEntry = {
      kind: 'type',
      type: t.name,
      note: t.note ?? '',
      fields: t.fields.map((f) => ({
        field: f.field,
        type: f.type,
        optional: f.optional,
        desc: f.desc,
      })),
      usedBy: [...(typeUsedBy.get(t.name) ?? new Set())].slice(0, 8),
    };
    out[t.name] = entry;
  }

  return out;
}

// ─── Cheat-sheet rendering ──────────────────────────────────────────────────

function escapeCell(text: string): string {
  return text.replace(/\|/g, '\\|').replace(/\n+/g, ' ');
}

/**
 * Return true if the signature's return type is a `Promise<...>`. Heuristic:
 * find the last `)` in the signature, take everything after it, and check
 * whether the trimmed suffix starts with `: Promise<`. The last `)` is the
 * outermost-args closer (any deeper `)`s are inside nested arg-type generics,
 * which TS parses left-to-right). The suffix is therefore the return-type
 * annotation.
 */
function isPromiseReturning(signature: string): boolean {
  const lastParen = signature.lastIndexOf(')');
  if (lastParen === -1) return false;
  const suffix = signature.slice(lastParen + 1).trim();
  return /^:\s*Promise</.test(suffix);
}

function renderApiGroup(group: typeof API_GROUPS[number]): string {
  const namespaces = parseGroupNamespaces(group.group);
  const header = namespaces.length > 1
    ? `## ${namespaces.join(' / ')}\n\n_The same method set applies to each of the ${namespaces.length} namespaces above._\n`
    : `## ${namespaces[0]}\n`;

  const lines: string[] = [header];

  const concepts = NAMESPACE_CONCEPTS[group.group];
  if (concepts) {
    lines.push(`> **Concepts:** ${concepts}`);
    lines.push('');
  }

  lines.push('| Method | Args | Description |');
  lines.push('|---|---|---|');
  for (const row of group.rows) {
    const primaryNs = namespaces[0]!;
    const fqName = `${primaryNs}.${row.name}`;
    const perms = resolvePerms(fqName, permIndex);
    const permTag = perms.perms.length > 0
      ? ` [${perms.perms.join(' + ')}${perms.note ? `, ${perms.note}` : ''}]`
      : '';
    // Async marker: prefix the method name with `async ` when the editor-lib
    // signature returns `Promise<...>`.
    const sig = editorLibIndex.get(fqName)?.signature;
    const isAsync = sig ? isPromiseReturning(sig) : false;
    const methodCell = isAsync ? `async \`${row.name}\`` : `\`${row.name}\``;
    const args = escapeCell(row.args);
    const desc = escapeCell(row.desc + permTag);
    lines.push(`| ${methodCell} | ${args} | ${desc} |`);
  }
  return lines.join('\n');
}

function renderCheatSheet(): string {
  const lines: string[] = [];

  lines.push('# LumiScript API Cheat-Sheet');
  lines.push('');
  lines.push('> Auto-generated from `src/components/reference/ReferenceTab.tsx` and `src/types/editor-lib.ts` by `scripts/gen-assistant-corpus.ts`. Do not edit by hand — re-run `bun run gen:corpus` instead.');
  lines.push('');
  lines.push('> For deeper detail (full TS signature, examples, see-also), call the `lookup_api(method)` tool with the fully-qualified method name from any table below.');
  lines.push('');

  // ── Globals ────────────────────────────────────────────────────────────────
  lines.push('## Globals');
  lines.push('');
  lines.push('Bindings available in every script body:');
  lines.push('');
  lines.push('- `api` — full LumiScript API surface (`api.chat`, `api.llm`, `api.utils`, ...). See sections below.');
  lines.push('- `script` — script self-info and built-in library loader. `script.id`, `script.name`, `script.type`, `script.require(name)`.');
  lines.push('- `z` — [Zod](https://zod.dev) schema builder. Use for `api.llm.generateStructured(messages, schema)`.');
  lines.push('- `data` — trigger-event payload object. The triggering event is identified by `data.__event` (e.g. `"MESSAGE_SENT"`). Shape varies per event — see the **Events** section.');
  lines.push('- `console` — log to the LumiScript console panel. Standard `log`, `warn`, `error` methods.');
  lines.push('');

  // ── Trigger model ─────────────────────────────────────────────────────────
  lines.push('## Trigger model');
  lines.push('');
  lines.push(TRIGGER_MODEL_INTRO);
  lines.push('');

  // ── Permission model ──────────────────────────────────────────────────────
  lines.push('## Permission model');
  lines.push('');
  lines.push(PERMISSION_MODEL_INTRO);
  lines.push('');
  lines.push('| Permission | What it gates |');
  lines.push('|---|---|');
  for (const perm of [...Object.keys(PERMISSION_DESCRIPTIONS)].sort()) {
    lines.push(`| \`${perm}\` | ${escapeCell(PERMISSION_DESCRIPTIONS[perm]!)} |`);
  }
  lines.push('');

  // ── API namespaces ────────────────────────────────────────────────────────
  for (const group of API_GROUPS) {
    lines.push(renderApiGroup(group));
    lines.push('');
  }

  // ── Events ────────────────────────────────────────────────────────────────
  lines.push('## Events');
  lines.push('');
  lines.push('Lumiverse + LumiScript lifecycle events. Scripts react to these by being **wired in the editor UI** — open the script in the script editor and pick events in the event-wiring control. There is no script-source syntax for subscription; the `// @triggers` comment some scripts carry is informative-only and not parsed by the host (see the **Trigger model** section above). At handler time, the event name appears in `data.__event`; payload fields are listed below. The **Fires** column flags non-obvious firing semantics — read it before writing role-based or count-based filtering logic.');
  lines.push('');
  lines.push('| Event | Payload | Fires |');
  lines.push('|---|---|---|');
  for (const ev of EVENTS) {
    lines.push(`| \`${ev.name}\` | ${escapeCell(ev.payload)} | ${escapeCell(ev.fires ?? '')} |`);
  }
  lines.push('');

  // ── Broadcast events ──────────────────────────────────────────────────────
  lines.push('## Broadcast events (script-to-script pub/sub)');
  lines.push('');
  lines.push('Emitted on the broadcast bus (`api.broadcast.on(event, handler)`). Built-in events are listed below; scripts can also publish custom events (any non-`ls:` prefix).');
  lines.push('');
  lines.push('| Event | Payload | Emitted by |');
  lines.push('|---|---|---|');
  for (const ev of BROADCAST_EVENTS) {
    lines.push(`| \`${ev.name}\` | ${escapeCell(ev.payload)} | ${escapeCell(ev.emittedBy)} |`);
  }
  lines.push('');

  // ── Macros ────────────────────────────────────────────────────────────────
  lines.push('## Macros');
  lines.push('');
  lines.push('Built-in `{{macros}}` LumiScript registers with the Lumiverse macro engine. Available in chat templates, presets, and `api.utils.template.render()`.');
  lines.push('');
  for (const group of LS_MACRO_GROUPS) {
    lines.push(`### ${group.label}`);
    lines.push('');
    lines.push('| Macro | Aliases | Returns | Description |');
    lines.push('|---|---|---|---|');
    for (const row of group.rows) {
      lines.push(`| \`${row.macro}\` | ${escapeCell(row.aliases)} | ${escapeCell(String(row.returns))} | ${escapeCell(row.desc)} |`);
    }
    lines.push('');
  }

  // ── Key types ─────────────────────────────────────────────────────────────
  lines.push('## Key types');
  lines.push('');
  lines.push('Public types referenced by `api.*` method signatures. **Each type is in the lookup table** — call `lookup_api("TypeName")` for the full field list with per-field type, optionality, and description.');
  lines.push('');
  for (const t of KEY_TYPES) {
    lines.push(`- \`${t.name}\` — ${t.note ?? ''}`);
  }
  lines.push('');

  // ── Built-in libraries ────────────────────────────────────────────────────
  lines.push('## Built-in libraries');
  lines.push('');
  lines.push('Load via `script.require(\'ls:<name>\')`. **Each entry below is in the lookup table** — call `lookup_api("ls:<name>.<method>")` for the full record.');
  lines.push('');
  lines.push('### ls:components');
  lines.push('');
  lines.push('| Method | Args | Description |');
  lines.push('|---|---|---|');
  for (const row of BUILTIN_COMPONENTS) {
    lines.push(`| \`${row.name}\` | ${escapeCell(row.args)} | ${escapeCell(row.desc)} |`);
  }
  lines.push('');
  lines.push('### ls:council-prompt');
  lines.push('');
  lines.push('| Method | Args | Description |');
  lines.push('|---|---|---|');
  for (const row of BUILTIN_COUNCIL_PROMPT) {
    lines.push(`| \`${row.name}\` | ${escapeCell(row.args)} | ${escapeCell(row.desc)} |`);
  }
  lines.push('');
  lines.push('### ls:icons');
  lines.push('');
  lines.push('| Method | Args | Description |');
  lines.push('|---|---|---|');
  for (const row of BUILTIN_ICONS) {
    lines.push(`| \`${row.name}\` | ${escapeCell(row.args)} | ${escapeCell(row.desc)} |`);
  }
  lines.push('');
  lines.push('### Built-in types');
  lines.push('');
  for (const t of BUILTIN_TYPES) {
    lines.push(`- \`${t.name}\` — ${t.note ?? ''}`);
  }
  lines.push('');

  return lines.join('\n');
}

// ─── Write outputs ──────────────────────────────────────────────────────────

const lookupTable = mergeLookupEntries();
const cheatSheet = renderCheatSheet();

await mkdir(CORPUS_DIR, { recursive: true });
await writeFile(CHEATSHEET_PATH, cheatSheet, 'utf8');
console.log(`[corpus] Wrote cheat-sheet.md   (${cheatSheet.length.toLocaleString()} chars)`);

const cheatSheetTs = `// Auto-generated by scripts/gen-assistant-corpus.ts — do not edit.\n` +
  `// Re-run \`bun run gen:corpus\` to refresh.\n` +
  `export const CHEAT_SHEET: string = ${JSON.stringify(cheatSheet)};\n`;
await writeFile(CHEATSHEET_TS_PATH, cheatSheetTs, 'utf8');
console.log(`[corpus] Wrote cheat-sheet.ts   (${cheatSheetTs.length.toLocaleString()} chars)`);

const lookupJson = JSON.stringify(lookupTable, null, 2);
await writeFile(LOOKUP_PATH, lookupJson, 'utf8');
console.log(`[corpus] Wrote lookup-table.json (${Object.keys(lookupTable).length} entries, ${lookupJson.length.toLocaleString()} chars)`);

const lookupTs = `// Auto-generated by scripts/gen-assistant-corpus.ts — do not edit.\n` +
  `// Re-run \`bun run gen:corpus\` to refresh.\n` +
  `import type { LookupEntry } from '../types.js';\n\n` +
  `export const LOOKUP_TABLE: Record<string, LookupEntry> = ${JSON.stringify(lookupTable)};\n`;
await writeFile(LOOKUP_TS_PATH, lookupTs, 'utf8');
console.log(`[corpus] Wrote lookup-table.ts   (${lookupTs.length.toLocaleString()} chars)`);

console.log('[corpus] Done.');
