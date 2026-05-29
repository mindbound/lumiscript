/**
 * ============================================================================
 * Attachable user files — eligibility rules (shared)
 * ============================================================================
 * Source of truth for which `spindle.userStorage` files the user may attach to
 * a Lisa conversation as read-context. Used by BOTH the backend resolve/inject
 * path (the agent turn) and the file-picker listing / add-file path (frontend
 * acquisition), so the two can never disagree about what's eligible.
 *
 * Files live under a single RESERVED root inside the extension's per-user
 * `spindle.userStorage`. Scoping to one folder — rather than the whole user
 * store — is deliberate and load-bearing: userStorage ALSO holds LumiScript's
 * own internals (scripts.json, assistant/* threads + memory, variables/*, db
 * collections, enclave/*). Those must never be surfaceable as attachable files.
 * A dedicated root makes that impossible by construction — no fragile denylist
 * of internal prefixes to keep in sync. Nothing else in LumiScript writes here.
 *
 * (RC9 ships local files only. A remote-URL source is planned post-v1.0; when
 *  it lands, the per-source caps + the "untrusted content" framing here carry
 *  over, and the two acquisition paths unify into one typed context list.)
 */

/** Reserved userStorage folder holding user-attachable reference files.
 *  Trailing slash included; `contextFilePaths` store full paths under it
 *  (e.g. "userfiles/notes.md"). */
export const USER_FILES_ROOT = 'userfiles/';

/** Text extensions eligible for attachment (lower-case, dot-prefixed). Binary
 *  / unknown types are excluded — Lisa reads text only. */
export const ALLOWED_FILE_EXTENSIONS: readonly string[] = [
  '.md', '.markdown', '.txt', '.text', '.json', '.csv', '.tsv',
  '.log', '.yaml', '.yml', '.js', '.ts', '.jsonc', '.xml', '.html',
];

/** Max on-disk size (bytes) of a single eligible file. Larger files are hidden
 *  from the picker and skipped on read, so one huge file can't be attached. */
export const MAX_USER_FILE_BYTES = 256 * 1024;

/** Normalize a userStorage path to forward slashes. The host's
 *  `userStorage.list` returns native separators on Windows (see
 *  `engine/db-admin.ts`), so every path is normalized before comparison. */
export function normalizeUserPath(path: string): string {
  return path.replace(/\\/g, '/');
}

/** Lower-case file extension including the dot (e.g. ".md"), or '' if none. */
export function fileExtension(path: string): string {
  const base = normalizeUserPath(path).split('/').pop() ?? '';
  const dot = base.lastIndexOf('.');
  return dot > 0 ? base.slice(dot).toLowerCase() : '';
}

/**
 * True when `path` (userStorage-relative, any separator) is an eligible
 * attachable file: under the reserved root, no traversal, an allowed extension.
 * Size is enforced separately at read/list time (needs a `stat`).
 */
export function isEligibleUserFile(path: string): boolean {
  const p = normalizeUserPath(path);
  if (!p.startsWith(USER_FILES_ROOT)) return false;
  if (p.includes('..')) return false;            // no parent-dir escapes
  const rest = p.slice(USER_FILES_ROOT.length);
  if (!rest || rest.endsWith('/')) return false; // must be a file, not the dir
  return ALLOWED_FILE_EXTENSIONS.includes(fileExtension(p));
}

/** Build a full reserved-root path from a name the user supplies (add-file).
 *  Strips any leading slash and a redundant leading root so callers can pass
 *  either "notes.md" or "userfiles/notes.md". */
export function toUserFilePath(name: string): string {
  let p = normalizeUserPath(name).replace(/^\/+/, '');
  if (p.startsWith(USER_FILES_ROOT)) p = p.slice(USER_FILES_ROOT.length);
  return USER_FILES_ROOT + p;
}

/** Display label for a file chip / picker row — the path with the reserved
 *  root stripped (e.g. "userfiles/docs/api.md" → "docs/api.md"). */
export function userFileDisplayName(path: string): string {
  const p = normalizeUserPath(path);
  return p.startsWith(USER_FILES_ROOT) ? p.slice(USER_FILES_ROOT.length) : p;
}

/** Markdown fence language hint for the prompt block, by extension. '' = none. */
export function fenceLangForFile(path: string): string {
  switch (fileExtension(path)) {
    case '.md': case '.markdown': return 'md';
    case '.json': case '.jsonc': return 'json';
    case '.csv': case '.tsv': return 'csv';
    case '.yaml': case '.yml': return 'yaml';
    case '.js': return 'js';
    case '.ts': return 'ts';
    case '.xml': return 'xml';
    case '.html': return 'html';
    default: return '';
  }
}
