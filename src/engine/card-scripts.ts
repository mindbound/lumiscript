/**
 * ============================================================================
 * LUMISCRIPT — CARD-EMBEDDED SCRIPTS: PURE HELPERS (#12, Phase 0)
 * ============================================================================
 * Side-effect-free logic for the import side of character-card-embedded
 * scripts: parse the card envelope, decide install/update/skip per script, and
 * heuristically infer the permissions an embedded script needs. No IO — the
 * backend wiring (CHARACTER_CREATED handler, scriptStorage install, the consent
 * round-trip) lives in Phase 1. Spec: notes/card-embedded-scripts-design.md.
 */
import type { Script, ScriptBindingEntry, ScriptMetadata } from '../types/script.js';
import {
  LUMISCRIPT_CARD_FORMAT_VERSION,
  type EmbeddedScriptEntry,
  type InstallDecision,
  type PermissionRequirement,
} from '../types/card-scripts.js';

// ─── Defensive caps ──────────────────────────────────────────────────────────
// A character card's `extensions.lumiscript` is untrusted, host-unvalidated
// JSON. These bounds keep a hostile/oversized card from producing an enormous
// consent modal, multi-megabyte stored names, or unbounded scan work. They
// clamp the SHAREABLE/display surface only — `code` is intentionally uncapped
// (scripts are legitimately large; it's never rendered, only reviewed in-panel).
const MAX_EMBEDDED_SCRIPTS = 64;
// Hard bound on RAW entries scanned, independent of how many are valid. Invalid
// and duplicate entries don't consume an accept-slot, so without this the
// accept-cap alone wouldn't stop a card with a giant all-invalid/all-duplicate
// `scripts` array from being scanned in full — synchronously, on the main
// worker. 8× the accept-cap leaves ample headroom for legit cards.
const MAX_SCANNED_ENTRIES = MAX_EMBEDDED_SCRIPTS * 8;
const MAX_SKIP_ID_LEN = 80;   // bound an attacker-controlled bundleId echoed into a skip reason
const MAX_NAME_LEN = 200;
const MAX_FOLDER_LEN = 200;
const MAX_DESC_LEN = 1000;
const MAX_AUTHOR_LEN = 120;
const MAX_VERSION_LEN = 64;
const MAX_TAGS = 32;
const MAX_TAG_LEN = 64;

/** Clamp an untrusted string to `max` chars (display + storage hygiene). */
function clampStr(s: string, max: number): string {
  return s.length > max ? s.slice(0, max) : s;
}

// ─── extractEmbeddedScripts ──────────────────────────────────────────────────

export type ExtractResult =
  /** No `extensions.lumiscript` at all — not a card carrying LS scripts. */
  | { kind: 'none' }
  /** Present but unusable (bad format) — caller logs, does nothing. */
  | { kind: 'invalid'; reason: string }
  /** Valid envelope. `scripts` are the usable entries; `skipped` records why any
   *  malformed/duplicate entries were dropped (for diagnostics, not a failure). */
  | { kind: 'ok'; bundleCardId: string; scripts: EmbeddedScriptEntry[]; skipped: { index: number; reason: string }[] };

/**
 * Validate + extract the `extensions.lumiscript` envelope from a character's
 * raw `extensions` blob. Fully defensive — the input is untrusted arbitrary
 * JSON (the host does zero validation), so this NEVER throws: it returns
 * none / invalid / ok. Malformed entries are skipped (not fatal); a bad
 * envelope shape returns `invalid`.
 */
export function extractEmbeddedScripts(extensions: unknown): ExtractResult {
  try {
    if (extensions === null || typeof extensions !== 'object') return { kind: 'none' };
    const ls = (extensions as Record<string, unknown>).lumiscript;
    if (ls === undefined || ls === null) return { kind: 'none' };
    if (typeof ls !== 'object' || Array.isArray(ls)) {
      return { kind: 'invalid', reason: 'extensions.lumiscript is not an object' };
    }
    const env = ls as Record<string, unknown>;

    const fv = env.formatVersion;
    if (typeof fv !== 'number' || !Number.isInteger(fv) || fv < 1) {
      return { kind: 'invalid', reason: `missing/invalid formatVersion: ${String(fv)}` };
    }
    if (fv > LUMISCRIPT_CARD_FORMAT_VERSION) {
      return { kind: 'invalid', reason: `formatVersion ${fv} is newer than supported (${LUMISCRIPT_CARD_FORMAT_VERSION}); update LumiScript` };
    }

    const bundleCardId = env.bundleCardId;
    if (typeof bundleCardId !== 'string' || bundleCardId.trim() === '') {
      return { kind: 'invalid', reason: 'missing or empty bundleCardId' };
    }

    if (!Array.isArray(env.scripts)) {
      return { kind: 'invalid', reason: 'scripts is not an array' };
    }

    const scripts: EmbeddedScriptEntry[] = [];
    const skipped: { index: number; reason: string }[] = [];
    const seen = new Set<string>();
    const rawList = env.scripts;
    for (let index = 0; index < rawList.length; index++) {
      // Accept-cap: stop once we've taken MAX valid scripts. Bounds the modal /
      // message size on a card with many valid scripts.
      if (scripts.length >= MAX_EMBEDDED_SCRIPTS) {
        skipped.push({ index, reason: `exceeds ${MAX_EMBEDDED_SCRIPTS}-script cap (${rawList.length - index} more dropped)` });
        break;
      }
      // Scan-cap: stop after a bounded number of RAW entries. The accept-cap
      // above never fires for an all-invalid / all-duplicate array (those don't
      // increment scripts.length), so this is what bounds the scan + skipped[]
      // for a hostile card. One summarizing record, then stop.
      if (index >= MAX_SCANNED_ENTRIES) {
        skipped.push({ index, reason: `exceeds ${MAX_SCANNED_ENTRIES}-entry scan limit (${rawList.length - index} more not scanned)` });
        break;
      }
      let v: { ok: true; entry: EmbeddedScriptEntry } | { ok: false; reason: string };
      try {
        v = validateEntry(rawList[index]);
      } catch {
        skipped.push({ index, reason: 'threw while reading entry (hostile accessor)' });
        continue;
      }
      if (!v.ok) { skipped.push({ index, reason: v.reason }); continue; }
      if (seen.has(v.entry.bundleId)) {
        skipped.push({ index, reason: `duplicate bundleId '${clampStr(v.entry.bundleId, MAX_SKIP_ID_LEN)}'` });
        continue;
      }
      seen.add(v.entry.bundleId);
      scripts.push(v.entry);
    }

    return { kind: 'ok', bundleCardId, scripts, skipped };
  } catch {
    return { kind: 'invalid', reason: 'threw while reading extensions (malformed/hostile data)' };
  }
}

function validateEntry(raw: unknown): { ok: true; entry: EmbeddedScriptEntry } | { ok: false; reason: string } {
  if (raw === null || typeof raw !== 'object') return { ok: false, reason: 'entry is not an object' };
  const e = raw as Record<string, unknown>;
  if (typeof e.bundleId !== 'string' || e.bundleId.trim() === '') return { ok: false, reason: 'missing bundleId' };
  if (typeof e.name !== 'string' || e.name.trim() === '') return { ok: false, reason: 'missing name' };
  if (typeof e.code !== 'string') return { ok: false, reason: 'missing code' };
  // Validate-or-default to 'trigger' — mirrors scriptStorage.importScripts.
  const type: 'trigger' | 'library' = e.type === 'library' ? 'library' : 'trigger';
  const entry: EmbeddedScriptEntry = {
    bundleId: e.bundleId,
    name: clampStr(e.name, MAX_NAME_LEN),
    code: e.code,
    type,
    ...(Array.isArray(e.triggers)
      ? { triggers: e.triggers.filter((t): t is string => typeof t === 'string') }
      : {}),
    ...(Array.isArray(e.bindings) ? { bindings: validateBindings(e.bindings) } : {}),
    ...(typeof e.folder === 'string' ? { folder: clampStr(e.folder, MAX_FOLDER_LEN) } : {}),
    ...(e.metadata !== null && typeof e.metadata === 'object' && !Array.isArray(e.metadata)
      ? { metadata: sanitizeMetadata(e.metadata as Record<string, unknown>) }
      : {}),
  };
  return { ok: true, entry };
}

/** Element-validate bindings — drop anything not shaped like a ScriptBindingEntry. */
function validateBindings(raw: unknown[]): ScriptBindingEntry[] {
  const out: ScriptBindingEntry[] = [];
  for (const b of raw) {
    if (b === null || typeof b !== 'object') continue;
    const e = b as Record<string, unknown>;
    if ((e.type !== 'character' && e.type !== 'chat') || typeof e.displayName !== 'string') continue;
    const entry: ScriptBindingEntry = { type: e.type, displayName: e.displayName };
    if (typeof e.characterId === 'string') entry.characterId = e.characterId;
    if (typeof e.chatId === 'string') entry.chatId = e.chatId;
    out.push(entry);
  }
  return out;
}

function sanitizeMetadata(m: Record<string, unknown>): ScriptMetadata {
  const out: ScriptMetadata = {};
  if (typeof m.description === 'string') out.description = clampStr(m.description, MAX_DESC_LEN);
  if (typeof m.author === 'string') out.author = clampStr(m.author, MAX_AUTHOR_LEN);
  if (typeof m.version === 'string') out.version = clampStr(m.version, MAX_VERSION_LEN);
  if (Array.isArray(m.tags)) {
    out.tags = m.tags.filter((t): t is string => typeof t === 'string').slice(0, MAX_TAGS).map((t) => clampStr(t, MAX_TAG_LEN));
  }
  return out;
}

// ─── computeInstallActions ───────────────────────────────────────────────────

/**
 * Decide install / update / skip per embedded script (#12 D1). Matches an
 * installed script by the per-card key `(bundleCardId, bundleId)`.
 *   - no match → install
 *   - both versions STRICT semver: incoming > installed → update; else skip
 *   - otherwise → code-hash fallback: installing would change nothing (incoming
 *     == current) OR the card is unchanged from the original install (incoming
 *     == recorded sourceHash) → skip; else → update
 * An `update` carries `localEdits` only when the installed copy was edited since
 * install AND the incoming code differs from it (so the overwrite truly loses
 * work — no spurious warning on a no-op).
 */
export function computeInstallActions(
  bundleCardId: string,
  embedded: readonly EmbeddedScriptEntry[],
  installed: readonly Script[],
): InstallDecision[] {
  return embedded.map((entry) => {
    const match = installed.find(
      (s) => s.bundledFrom?.bundleCardId === bundleCardId && s.bundledFrom.bundleId === entry.bundleId,
    );
    if (!match) {
      // No from-this-card copy by identity. But the SAME code may already be in
      // the library as an UNLINKED script — the author bundled their own scripts,
      // or an identical script arrived via a different card. Treat that as
      // already-present (skip) so the chat-open banner doesn't over-count and the
      // consent modal doesn't tempt a duplicate install. Content identity is a
      // deliberate softening of the (bundleCardId, bundleId) model for the
      // "do you already have this behaviour?" question.
      const contentMatch = installed.find((s) => s.code === entry.code);
      if (contentMatch) return { entry, action: 'skip', skipReason: 'duplicate-code', existingScriptId: contentMatch.id };
      return { entry, action: 'install' };
    }

    const incomingHash = hashScriptCode(entry.code);
    const currentHash = hashScriptCode(match.code);
    const recordedHash = match.bundledFrom?.sourceHash;
    const localEdits = recordedHash !== undefined && recordedHash !== currentHash && incomingHash !== currentHash;
    const incomingVer = entry.metadata?.version;
    const installedVer = match.bundledFrom?.version;
    const a = parseStrictSemver(incomingVer);
    const b = parseStrictSemver(installedVer);

    if (a && b) {
      const cmp = compareSemver(a, b);
      if (cmp > 0) {
        return {
          entry, action: 'update', existingScriptId: match.id,
          ...(installedVer !== incomingVer ? { versionDelta: { from: installedVer, to: incomingVer } } : {}),
          ...(localEdits ? { localEdits: true } : {}),
        };
      }
      return { entry, action: 'skip', skipReason: cmp === 0 ? 'up-to-date' : 'not-newer', existingScriptId: match.id };
    }

    // Versions not both strict-semver → compare code.
    if (incomingHash === currentHash || (recordedHash !== undefined && incomingHash === recordedHash)) {
      return { entry, action: 'skip', skipReason: 'unchanged', existingScriptId: match.id };
    }
    return {
      entry, action: 'update', existingScriptId: match.id,
      ...(installedVer !== undefined && incomingVer !== undefined && installedVer !== incomingVer
        ? { versionDelta: { from: installedVer, to: incomingVer } } : {}),
      ...(localEdits ? { localEdits: true } : {}),
    };
  });
}

// ─── analyzeRequiredPermissions ──────────────────────────────────────────────

/**
 * Heuristically infer which Spindle permissions an embedded script needs, by
 * scanning its source for `api.<ns>.<method>` usages and mapping them to
 * permissions (#12 D2). Best-effort + WARNING-only (never a gate):
 *   - comments + single/double-quoted strings are stripped first (kills the
 *     common `// api.llm…` / `'api.chat…'` false positives);
 *   - a lookbehind rejects member access (`this.api.x`) and `myapi.`;
 *   - aliased/bracket/destructured `api` access is NOT detected (documented).
 * Deduped by permission. Map is grounded in the engine's `assertPerm` gates.
 */
export function analyzeRequiredPermissions(
  code: string,
  granted: ReadonlySet<string> | readonly string[],
): PermissionRequirement[] {
  const grantedSet = granted instanceof Set ? granted : new Set(granted);
  const scannable = stripCommentsAndStrings(code);
  const re = /(?<![\w.])api\.([a-zA-Z]\w*)(?:\.([a-zA-Z]\w*))?/g;
  const byPermission = new Map<string, { namespace: string; permission: string }>();
  let m: RegExpExecArray | null;
  while ((m = re.exec(scannable)) !== null) {
    const ns = m[1];
    if (ns === undefined) continue;
    const r = resolvePermission(ns, m[2]);
    if (r && !byPermission.has(r.permission)) byPermission.set(r.permission, r);
  }
  return [...byPermission.values()].map((r) => ({ ...r, granted: grantedSet.has(r.permission) }));
}

/** Strip block/line comments + single/double-quoted strings (replaced with a
 *  space). Template literals are intentionally NOT stripped — their `${…}`
 *  interpolations carry real code we want to see. */
function stripCommentsAndStrings(code: string): string {
  return code.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, ' ');
}

/** api.chat.* methods gated by chat_mutation (everything else under api.chat is free). */
const CHAT_MUTATION_METHODS = new Set([
  'getMessages', 'sendMessage', 'editMessage', 'deleteMessage',
  'setMessageHidden', 'setMessagesHidden', 'isMessageHidden', 'registerContentProcessor',
]);

/**
 * Map an `api.<ns>.<method>` reference to its gating Spindle permission, or null
 * for free namespaces/methods. Grounded in `assertPerm`/`hasPerm` calls across
 * `src/engine/api/*` (the runtime source of truth). Sub-namespace exceptions
 * (chat.inject → interceptor, worldInfo.registerInterceptor → generation,
 * files.temp* → ephemeral_storage, etc.) handled explicitly.
 */
function resolvePermission(ns: string, method?: string): { namespace: string; permission: string } | null {
  switch (ns) {
    case 'chat':
      if (method === 'inject' || method === 'clearInjections' || method === 'clearAllInjections') {
        return { namespace: 'chat.inject', permission: 'interceptor' };
      }
      if (method === 'getMetadata' || method === 'setMetadata') {
        return { namespace: 'chat.metadata', permission: 'chats' };
      }
      // setStyleMode manipulates the host app shell (CSS containment), not message data.
      if (method === 'setStyleMode') {
        return { namespace: 'chat.setStyleMode', permission: 'app_manipulation' };
      }
      // removeInjection / getInjections / listContentProcessors / getChatId / reads → free
      return method !== undefined && CHAT_MUTATION_METHODS.has(method)
        ? { namespace: 'chat', permission: 'chat_mutation' }
        : null;
    case 'chats':      return { namespace: 'chats', permission: 'chats' };
    case 'llm':        return { namespace: 'llm', permission: 'generation' };
    case 'utils':      return method === 'http' ? { namespace: 'utils.http', permission: 'cors_proxy' } : null;
    case 'ui':
      if (method === 'dom' || method === 'showAdvancedModal' || method === 'mountApp') {
        return { namespace: `ui.${method}`, permission: 'app_manipulation' };
      }
      if (method === 'pushNotification') return { namespace: 'ui.pushNotification', permission: 'push_notification' };
      if (method === 'requestDockPanel' || method === 'createFloatWidget') {
        return { namespace: `ui.${method}`, permission: 'ui_panels' };
      }
      return null; // toast / prompt / confirm / showModal / registerDrawerTab / registerInputBarAction / registerCommand / pickFile → free
    case 'theme':        return { namespace: 'theme', permission: 'app_manipulation' };
    case 'databanks':    return { namespace: 'databanks', permission: 'databanks' };
    case 'presets':      return { namespace: 'presets', permission: 'presets' };
    case 'images':       return { namespace: 'images', permission: 'images' };
    case 'imageGen':     return { namespace: 'imageGen', permission: 'image_gen' };
    case 'oauth':        return { namespace: 'oauth', permission: 'oauth' };
    case 'worldInfo':
      return method === 'registerInterceptor'
        ? { namespace: 'worldInfo.registerInterceptor', permission: 'generation' }
        : { namespace: 'worldInfo', permission: 'world_books' };
    case 'personas':     return { namespace: 'personas', permission: 'personas' };
    case 'characters':   return { namespace: 'characters', permission: 'characters' };
    case 'tools':        return { namespace: 'tools', permission: 'tools' };
    case 'events':       return { namespace: 'events', permission: 'event_tracking' };
    case 'regexScripts': return { namespace: 'regexScripts', permission: 'regex_scripts' };
    case 'memories':     return { namespace: 'memories', permission: 'memories' };
    case 'webSearch':    return { namespace: 'webSearch', permission: 'web_search' };
    case 'files':
      return method !== undefined && method.startsWith('temp')
        ? { namespace: 'files.temp', permission: 'ephemeral_storage' }
        : null;
    case 'macros':
      return method === 'registerInterceptor'
        ? { namespace: 'macros.registerInterceptor', permission: 'macro_interceptor' }
        : null;
    default:             return null; // variables / scriptStorage / db / broadcast / rpc / enclave / json / connections / version / permissions / council / commands → free
  }
}

// ─── shared utilities ────────────────────────────────────────────────────────

/**
 * Deterministic, dependency-free hash of a script's code (cyrb53). Used only to
 * detect change between the embedded code and the recorded install — NOT for
 * security. Returns a fixed-width hex string.
 */
export function hashScriptCode(code: string): string {
  let h1 = 0xdeadbeef ^ code.length;
  let h2 = 0x41c6ce57 ^ code.length;
  for (let i = 0; i < code.length; i++) {
    const ch = code.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const hash = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return hash.toString(16).padStart(14, '0');
}

/**
 * Parse a STRICT `X.Y.Z` semver → tuple of the raw (no-leading-zero) digit
 * strings, or null when not exactly three dot-separated no-leading-zero integer
 * segments (no whitespace, no prerelease/build). Keeping segments as strings
 * lets `compareSemver` handle arbitrarily large versions without the Number
 * 2^53 precision collapse.
 */
function parseStrictSemver(v: string | undefined): [string, string, string] | null {
  if (typeof v !== 'string') return null;
  const m = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.exec(v);
  return m ? [m[1]!, m[2]!, m[3]!] : null;
}

function compareSemver(a: [string, string, string], b: [string, string, string]): -1 | 0 | 1 {
  const c0 = cmpNumStr(a[0], b[0]); if (c0 !== 0) return c0;
  const c1 = cmpNumStr(a[1], b[1]); if (c1 !== 0) return c1;
  return cmpNumStr(a[2], b[2]);
}

/** Compare two no-leading-zero non-negative integer strings without Number(). */
function cmpNumStr(x: string, y: string): -1 | 0 | 1 {
  if (x.length !== y.length) return x.length < y.length ? -1 : 1;
  return x === y ? 0 : x < y ? -1 : 1;
}
