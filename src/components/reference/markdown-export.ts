/**
 * ============================================================================
 * LUMISCRIPT — REFERENCE TAB MARKDOWN EXPORT
 * ============================================================================
 * Renders the Reference tab's data constants into a self-contained Markdown
 * document and triggers a browser download. Pure string generation plus a
 * Blob/URL/anchor-click shim matching the `exportScriptPack` pattern in
 * `src/utils/pack-export.ts`.
 *
 * The data source of truth is ReferenceTab.tsx — this module imports the
 * exported constants and mirrors the UI's structure as Markdown. Prose
 * paragraphs are mirrored inline here (not extracted to shared strings)
 * because the amount is small and keeping them local to each rendering
 * surface avoids a larger refactor for little gain.
 */

import {
  DIRECTIVES,
  DIRECTIVES_INTRO,
  EVENTS,
  PERM_GROUPS,
  SANDBOX_REJECTED_PATTERNS,
  SANDBOX_ACCESSIBLE_GROUPS,
  BROADCAST_EVENTS,
  LS_MACRO_GROUPS,
  KEY_TYPES,
  API_GROUPS,
  BUILTIN_COMPONENTS,
  BUILTIN_COUNCIL_PROMPT,
  BUILTIN_TYPES,
  TRIGGER_MODEL_INTRO,
  type PermRow,
  type LsMacroRow,
  type MacroReturns,
  type TypeField,
  type TypeDoc,
  type FnRow,
} from './ReferenceTab.js';

// ─── Utilities ────────────────────────────────────────────────────────────────

/**
 * HTML-escape `&`, `<`, `>` in the supplied value, but only OUTSIDE of
 * backticked inline-code spans. Inside backticks, content renders as
 * inline code (no HTML parsing), so escapes would show up as literal
 * `&lt;` to the reader. Used wherever user-supplied text is inlined into
 * Markdown at places a strict parser might otherwise interpret as HTML
 * (headings, italic notes, and — via `escapeCell` — table cells).
 *
 * Why we need this: names like `LLMRawResultStructured<T>` and phrases
 * like "Add a <style> element" contain valid-looking HTML tokens.
 * GitHub's sanitizer strips them; other parsers may consume content up
 * to a closing tag that never arrives.
 */
function escapeHtmlOutsideBackticks(value: string): string {
  const parts = value.split('`');
  return parts.map((part, i) => {
    if (i % 2 === 1) return part;
    return part
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }).join('`');
}

/**
 * Escape a cell value so GitHub-flavoured Markdown tables render it literally.
 *
 * Handles three concerns on top of the shared HTML-escape logic:
 *
 *  1. Raw angle brackets outside backticks — delegated to
 *     `escapeHtmlOutsideBackticks` (inline, to avoid an extra pass that
 *     would re-escape the `<br>` we insert below).
 *
 *  2. Pipes outside backticks — must be `\|` to avoid splitting the cell.
 *     Inside backticks, GFM treats the pipe as literal code content, so
 *     we leave those alone.
 *
 *  3. Newlines — become `<br>` so the row doesn't split. This is deliberate
 *     literal HTML, inserted AFTER the HTML-escape step so it isn't mangled.
 */
function escapeCell(value: string): string {
  const parts = value.split('`');
  const transformed = parts.map((part, i) => {
    if (i % 2 === 1) return part;
    return part
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\|/g, '\\|');
  }).join('`');
  return transformed.replace(/\r?\n/g, '<br>');
}

function table(headers: readonly string[], rows: ReadonlyArray<readonly string[]>): string {
  const headerLine    = `| ${headers.join(' | ')} |`;
  const separatorLine = `| ${headers.map(() => '---').join(' | ')} |`;
  const bodyLines     = rows.map(r => `| ${r.map(escapeCell).join(' | ')} |`);
  return [headerLine, separatorLine, ...bodyLines].join('\n');
}

/** Prefix a field name with `?` to match the UI's optional-field rendering. */
function fieldLabel(field: TypeField): string {
  return field.optional && !field.field.endsWith('?') ? `${field.field}?` : field.field;
}

function returnsLabel(type: MacroReturns): string {
  if (type === 'silent')  return '*silent*';
  if (type === 'boolean') return '`"true" / "false"`';
  return '`string`';
}

function macroAliasesLabel(row: LsMacroRow): string {
  return row.aliases === '—' ? '—' : `\`${row.aliases}\``;
}

function permsLabel(row: PermRow): string {
  const perms = row.perms.length === 0 && !row.note
    ? '*none*'
    : row.perms.map(p => `\`${p}\``).join(', ');
  return row.note ? `${perms}${row.perms.length ? ' ' : ''}${row.note}` : perms;
}

// ─── Section renderers ───────────────────────────────────────────────────────

function renderTriggerModel(): string {
  return `## Trigger model\n\n${TRIGGER_MODEL_INTRO}`;
}

function renderLumiverseEvents(): string {
  const body = table(
    ['Event', 'Group', 'Payload shape'],
    EVENTS.map(ev => [`\`${ev.name}\``, ev.group, `\`${ev.payload}\``]),
  );
  return `## Lumiverse Events\n\n${body}`;
}

function renderPermissionMatrix(): string {
  const sections = PERM_GROUPS.map(group => {
    const body = table(
      ['Method', 'Required permissions'],
      group.rows.map(row => [`\`${row.method}\``, permsLabel(row)]),
    );
    return `### ${group.group}\n\n${body}`;
  });
  return `## Permission Matrix\n\n${sections.join('\n\n')}`;
}

function renderSandboxHardening(): string {
  const rejectedTable = table(
    ['Pattern', 'Why', 'Use instead'],
    SANDBOX_REJECTED_PATTERNS.map(row => [`\`${row.pattern}\``, row.why, row.replacement]),
  );

  const accessibleTable = table(
    ['Category', 'Available globals'],
    SANDBOX_ACCESSIBLE_GROUPS.map(row => {
      const globalsCell = row.globals.map(g => `\`${g}\``).join(' ');
      const cell = row.note ? `${globalsCell}<br><br>*${row.note}*` : globalsCell;
      return [row.category, cell];
    }),
  );

  return [
    '## Sandbox hardening',
    '',
    'The script-runner subprocess locks down host capabilities that user scripts have no business reaching. Two layers gate this — both are always on; there is no per-script opt-out. Cross-reference the `app_manipulation` and `cors_proxy` permissions in the **Permission Matrix** for how scripts opt in to specific surfaces that the sandbox otherwise denies.',
    '',
    '### Layer 1 — dispatch-time source check',
    '',
    'Scripts containing any of the patterns below are **rejected before they run**; the editor console shows a `[security]` entry naming the rejected pattern.',
    '',
    rejectedTable,
    '',
    '### Layer 2 — runtime `globalThis` lockdown',
    '',
    'At subprocess startup, every `globalThis` property NOT on the allowlist below is replaced with `undefined`. Reading a locked global returns `undefined` (so `typeof X === \'undefined\'` evaluates naturally for feature-detect paths); reaching through to a method throws `TypeError: Cannot read properties of undefined`.',
    '',
    accessibleTable,
    '',
    'Notable globals that are *not* on the allowlist (representative, not exhaustive): `fetch` (use `api.utils.http.*`), `Worker`, `WebSocket`, `EventSource`, `BroadcastChannel`, `XMLHttpRequest`, browser dialogs (`alert` / `prompt` / `confirm`), and Node-compat module globals reached via `globalThis` (`fs`, `http`, `net`, `tls`, `vm`, `worker_threads`, `child_process`, `sqlite`, etc.). The canonical list of accessible globals is `SAFE_GLOBALS` in `src/script-runner/child-entry.ts`.',
  ].join('\n');
}

function renderLumiScriptEvents(): string {
  const body = table(
    ['Event', 'Payload fields', 'Emitted by'],
    BROADCAST_EVENTS.map(row => [`\`${row.name}\``, `\`${row.payload}\``, row.emittedBy]),
  );
  const note = 'The `ls:` prefix is reserved for LumiScript engine events. Use any other name for custom events between scripts.';
  return `## LumiScript Events\n\n${body}\n\n*${note}*`;
}

function renderDirectives(): string {
  const body = table(
    ['Directive', 'Applies to', 'What it does'],
    DIRECTIVES.map(d => [`\`// ${d.directive}\``, d.appliesTo, d.description]),
  );
  return `## Directives\n\n${DIRECTIVES_INTRO}\n\n${body}`;
}

function renderLumiScriptMacros(): string {
  const sections = LS_MACRO_GROUPS.map(group => {
    const body = table(
      ['Macro', 'Aliases', 'Returns', 'Description'],
      group.rows.map(row => [
        `\`${row.macro}\``,
        macroAliasesLabel(row),
        returnsLabel(row.returns),
        row.desc,
      ]),
    );
    const parts = [`### ${group.label}`];
    if (group.description) parts.push(`*${group.description}*`);
    parts.push(body);
    return parts.join('\n\n');
  });
  const footer = 'Character variable macros read from and write to the active character\'s store at `variables/characters/<id>.json` in user storage. They resolve to `""` when no character is active.';
  return `## LumiScript Macros\n\n${sections.join('\n\n')}\n\n*${footer}*`;
}

function renderKeyTypes(): string {
  return `## Key Types\n\n${KEY_TYPES.map(t => renderTypeDoc(t)).join('\n\n')}`;
}

function renderTypeDoc(type: TypeDoc, headingLevel: '###' | '####' = '###'): string {
  // Escape angle brackets in the heading (e.g. `LLMRawResultStructured<T>`)
  // and defensively in the italic note, so strict GFM sanitizers don't
  // strip what they read as unclosed HTML tags.
  const safeName = escapeHtmlOutsideBackticks(type.name);
  const note = type.note ? `*${escapeHtmlOutsideBackticks(type.note)}*\n\n` : '';
  const body = table(
    ['Field', 'Type', 'Description'],
    // Type column wrapped in backticks so generics like `Record<string, unknown>`
    // and `Promise<ModalResult>` render consistently across GFM parsers — inline
    // code content isn't HTML-parsed. Also harmonises enum-union types like
    // `'user' | 'assistant' | 'system'` (pipes don't need backslash-escape
    // inside inline code).
    type.fields.map(f => [`\`${fieldLabel(f)}\``, `\`${f.type}\``, f.desc]),
  );
  return `${headingLevel} ${safeName}\n\n${note}${body}`;
}

function renderApiFunctions(): string {
  const sections = API_GROUPS.map(group => {
    const body = table(
      ['Method', 'Arguments', 'Description'],
      group.rows.map(row => [`\`${row.name}\``, row.args, row.desc]),
    );
    return `### ${group.group}\n\n${body}`;
  });
  return `## API Functions\n\n${sections.join('\n\n')}`;
}

function renderBuiltinLibraries(): string {
  const preamble = 'Built-in libraries are loaded via `script.require(\'ls:<name>\')`. Two are currently shipped: `ls:components` (DOM widget factories — all operations attributed to the calling script; injection components require `app_manipulation`, HTML builders are free) and `ls:council-prompt` (pure string helpers for replicating Lumiverse\'s built-in Council sidecar prompt in extension tools; no permissions required; only meaningful when the tool was invoked as part of a Council cycle).';
  const componentsTable = table(
    ['Method', 'Arguments', 'Description'],
    BUILTIN_COMPONENTS.map((row: FnRow) => [`\`${row.name}\``, row.args, row.desc]),
  );
  const councilPromptTable = table(
    ['Method', 'Arguments', 'Description'],
    BUILTIN_COUNCIL_PROMPT.map((row: FnRow) => [`\`${row.name}\``, row.args, row.desc]),
  );
  const typesBlock = BUILTIN_TYPES.map(t => renderTypeDoc(t, '####')).join('\n\n');
  return [
    '## Built-in Libraries',
    '',
    preamble,
    '',
    '### ls:components',
    '',
    componentsTable,
    '',
    '### ls:council-prompt',
    '',
    councilPromptTable,
    '',
    '### Built-in types',
    '',
    typesBlock,
  ].join('\n');
}

function renderScriptPacks(): string {
  return [
    '## Script Packs',
    '',
    '**Export** — click the `↓` button in the script list header to download the currently filtered scripts as a `.lumiscript.zip` file. The pack contains a `pack.json` with script names, code, triggers, bindings, folders, and metadata. IDs, timestamps, enabled state, and the allowDangerous flag are *not* included.',
    '',
    '**Import** — click the `↑` button to pick a `.lumiscript.zip`. After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack), a confirmation dialog shows the script list. Imported scripts are always created with `enabled: false` and `allowDangerous: false` — review and enable them manually.',
  ].join('\n');
}

// ─── Top-level renderer ──────────────────────────────────────────────────────

/**
 * Render the full Reference tab as a Markdown document. Self-contained; safe
 * to paste into any GitHub-flavoured Markdown renderer.
 */
export function renderReferenceMarkdown(): string {
  const today = new Date().toISOString().slice(0, 10);  // YYYY-MM-DD
  const header = `# LumiScript Reference\n\n*Exported ${today}*`;

  const sections = [
    renderTriggerModel(),
    renderLumiverseEvents(),
    renderPermissionMatrix(),
    renderSandboxHardening(),
    renderLumiScriptEvents(),
    renderDirectives(),
    renderLumiScriptMacros(),
    renderKeyTypes(),
    renderApiFunctions(),
    renderBuiltinLibraries(),
    renderScriptPacks(),
  ];

  return `${header}\n\n---\n\n${sections.join('\n\n---\n\n')}\n`;
}

// ─── Download trigger ────────────────────────────────────────────────────────

/**
 * Generate the Markdown and trigger a browser download. Mirrors the
 * Blob/URL/anchor-click pattern used by `exportScriptPack` in
 * `src/utils/pack-export.ts`.
 */
export function downloadReferenceMarkdown(): void {
  const markdown = renderReferenceMarkdown();
  const today    = new Date().toISOString().slice(0, 10);
  const filename = `lumiscript-reference-${today}.md`;

  const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
