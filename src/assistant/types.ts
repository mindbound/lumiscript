/**
 * ============================================================================
 * LUMISCRIPT — ASSISTANT MODULE TYPES
 * ============================================================================
 * Shared type surface for the in-app code-assistant module. See
 * `notes/code-assistant-design.md` for the design rationale.
 */

/**
 * Max characters of code inlined per attached script — the most Lisa "sees" of a
 * script she's been @-attached. Longer scripts are truncated with a marker so a
 * single huge file can't blow the context window; the AssistantModal apply-diff
 * also reads this to warn when a script is longer than Lisa could have seen.
 * Lives here (not agent.ts) so the frontend can import it without pulling the
 * backend assistant module into its bundle.
 */
export const ATTACHED_SCRIPT_CODE_CAP = 24_000;

/**
 * Persona definition for the assistant's voice and behaviour.
 *
 * Mirrors the LumiScript Council member shape (`CouncilMemberContext.name` /
 * `.definition` / `.personality` / `.behavior`) so the persona renders through
 * the same `### WHO YOU ARE ###` + `### INSTRUCTION ###` framing the Council
 * uses. This three-field structure is well-tested for LLM voice adherence
 * across providers.
 *
 * - `definition`  — 3rd-person identity setup. Who this character is, what
 *   their setting is, what their tonal hints are. ~150 words.
 * - `personality` — 1st-person voice statement with example utterances in
 *   italicised quotes. Lets the LLM mimic concrete phrasing, not just abstract
 *   descriptors.
 * - `behavior`    — Markdown bulleted list of specific behavioural patterns.
 *   Specific over generic ("Cites method names verbatim" beats "Is helpful").
 */
export interface AssistantPersona {
  /** Display name. Used in the identity-block header and may surface in UI. */
  name: string;
  /** 3rd-person identity setup. */
  definition: string;
  /** 1st-person voice statement, including example utterances. */
  personality: string;
  /** Markdown bulleted list of behavioural patterns. */
  behavior: string;
}

/**
 * One entry in the assistant's lookup table. The `lookup_api(name)` tool
 * returns one of these (as JSON) per call.
 *
 * Discriminated union over four kinds of lookupable thing:
 *
 *   - `'method'`   — A regular `api.*` or `script.*` method. Default kind;
 *     covers ~95% of entries.
 *   - `'builtin'`  — A function inside a built-in library (`ls:icons.svg`,
 *     `ls:components.messageHeader`, `ls:council-prompt.buildCouncilIdentity`,
 *     etc.). Called via `script.require(libName)`.
 *   - `'type'`     — A documented type from `KEY_TYPES` or `BUILTIN_TYPES`.
 *     Field list rather than signature.
 *   - `'redirect'` — Wrong-path probe with a corrective message pointing at
 *     the right primitive. The model reads + redirects rather than treating
 *     it as a failure.
 *
 * Built at extension build time by `scripts/gen-assistant-corpus.ts` from
 * the merge of `ReferenceTab.tsx` (curated) + `editor-lib.ts` (typed). See
 * `notes/code-assistant-design.md` § S1 for the merge rules.
 */
export type LookupEntry =
  | MethodLookupEntry
  | BuiltinLookupEntry
  | TypeLookupEntry
  | RedirectLookupEntry;

export interface MethodLookupEntry {
  kind: 'method';
  /** Fully-qualified method name, e.g. `api.chat.sendMessage`. */
  method: string;
  /** Namespace path, e.g. `api.chat`. */
  namespace: string;
  /** Full TypeScript signature including args and return type. */
  signature: string;
  /** Method description — JSDoc body if available, else Reference-tab desc. */
  description: string;
  /** Permission names that gate this method. Empty array = no perm required. */
  permissions: string[];
  /** Optional human note from PERM_GROUPS (e.g. "+ allowDangerous"). */
  permNote?: string;
  /** `@example` blocks from JSDoc, if any. */
  examples: string[];
  /** Related methods or types worth looking at next. Inferred at build time. */
  see_also: string[];
}

export interface BuiltinLookupEntry {
  kind: 'builtin';
  /** Library-qualified function name, e.g. `ls:icons.svg`. */
  method: string;
  /** Library name, e.g. `ls:icons`. Loaded via `script.require(library)`. */
  library: string;
  /** Synthesized signature `name(args)` from the cheat-sheet row. */
  signature: string;
  /** Function description. */
  description: string;
  /** Related entries in the same library or types referenced. */
  see_also: string[];
}

export interface TypeLookupEntry {
  kind: 'type';
  /** Type name, e.g. `SendMessageOptions`, `ChatMessage`. */
  type: string;
  /** Top-level type note from `KEY_TYPES` / `BUILTIN_TYPES`. */
  note: string;
  /** Field list with per-field type, optionality, and description. */
  fields: Array<{
    field: string;
    type: string;
    optional: boolean;
    desc: string;
  }>;
  /** Methods whose signatures reference this type. Inferred at build time. */
  usedBy: string[];
}

/**
 * Returned by `lookup_api` when the queried path doesn't exist but the model's
 * *intent* is recoverable. Built from `REDIRECTS` in `ReferenceTab.tsx`.
 * The assistant should read the `message`, internalize the redirect, and
 * proceed — NOT treat it as a failure and retry the same path. Common
 * triggers: probing for `.on()` event-subscription methods (LumiScript
 * doesn't have those — uses editor-UI wiring instead), singular/plural
 * namespace typos (`api.databank` vs `api.databanks`).
 */
export interface RedirectLookupEntry {
  kind: 'redirect';
  /** The path the model queried. */
  attempted: string;
  /** Human-readable corrective message pointing at the right primitive. */
  message: string;
}

// ─── Thread persistence (v0.30.2) ────────────────────────────────────────────

/**
 * One conversation thread, persisted as `assistant/threads/<id>.json` under
 * `spindle.userStorage`. Survives extension reloads / restarts. The list of
 * threads is maintained as a separate index file (`AssistantThreadIndexEntry[]`)
 * so the modal can render the sidebar without paying the cost of loading
 * every thread body up front — bodies are loaded lazily on thread switch.
 *
 * **Wire format note**: `messages` carries the full LLM context including
 * `tool_use` / `tool_result` parts on assistant/user turns. The FE
 * reconstructs display bubbles + tool chips from this array on thread load.
 * System messages are filtered out before persisting (the system prompt is
 * rebuilt fresh each turn from the current persona + corpus).
 *
 * **Not persisted**: per-turn streaming state (reasoning buffers, partial
 * content, aborted flag, usage). Those are ephemeral — relevant only to
 * the in-flight turn, not the thread's historical record.
 */
/**
 * A record that the user applied assistant-proposed code to a script — either
 * created a new one or updated an existing one in place. Stored parallel to
 * `messages` (NEVER sent to the LLM) and rendered as an inline transcript marker
 * so the user can see provenance. `afterMessageCount` anchors it after the Nth
 * message so it reconstructs in the right spot on reload.
 */
export interface AppliedEvent {
  /** Count of messages in the thread (`messages.length`) when the apply happened. */
  afterMessageCount: number;
  scriptName: string;
  scriptType: import('../types/script.js').ScriptType;
  /** True = updated an existing script in place; false = created a new one. */
  updated: boolean;
}

export interface AssistantThread {
  /** UUID v4. Stable across renames / edits. */
  id: string;
  /** User-visible label. Auto-derived from the first user message
   *  (truncated to ~40 chars) on initial save; user-renameable from the
   *  thread sidebar. */
  title: string;
  /** Creation timestamp (ms since epoch). */
  createdAt: number;
  /** Last-modified timestamp (ms since epoch). Bumped on every message
   *  append + on rename. Drives sidebar sort order (most-recent first). */
  updatedAt: number;
  /** Full LLM-context history. Stored shape mirrors `AssistantHistoryMessage[]`
   *  exactly — what the agent module would feed into the next turn's
   *  `runAssistantTurn` call. */
  messages: import('lumiverse-spindle-types').LlmMessageDTO[];
  /** IDs of the user's scripts attached as persistent read-context for this
   *  conversation (@-mentioned in the composer). Re-resolved to fresh code on
   *  every send and folded into the ephemeral system prompt, so the code stays
   *  current and never bloats `messages`. Persisting just the IDs lets the chip
   *  tray restore on thread reload / switch. Optional — threads persisted before
   *  this field shipped load as `undefined` (treated as no context). */
  contextScriptIds?: string[];
  /** Per-attached-script code hashes as of the last turn Lisa was shown them
   *  (scriptId → cheap hash). Lets the next turn detect that an attached script's
   *  code changed since she last saw it (her own Apply, or a manual edit) and flag
   *  it in-context, so she isn't confused by code shifting under her. Only
   *  currently-attached scripts are tracked; persisted so detection survives
   *  reload. Optional — older threads load as `undefined` (no baseline → no flag). */
  seenScriptHashes?: Record<string, string>;
  /** Reserved-folder ("userfiles/") file paths attached as persistent read-
   *  context for this conversation (the file equivalent of contextScriptIds).
   *  Re-resolved to fresh text on every send; persisting the paths restores the
   *  chips on reload. Optional — older threads load as `undefined` (no files). */
  contextFilePaths?: string[];
  /** Per-attached-file content hashes as of the last turn Lisa saw them
   *  (path → hash) — the file analogue of seenScriptHashes, driving the
   *  "file changed since your last message" note. Optional; older threads
   *  load as `undefined` (no baseline → no flag). */
  seenFileHashes?: Record<string, string>;
  /** "Apply to script" events (create/update from a code block's Apply button)
   *  recorded for this conversation, rendered as inline transcript markers.
   *  Parallel to `messages` — never sent to the LLM. Optional; older threads
   *  load without it. */
  appliedEvents?: AppliedEvent[];
  /** Prompt-token count of this thread's most recent turn — drives the chat's
   *  context-fullness gauge (tokens ÷ budget) and is replayed on thread load so
   *  the gauge is populated the moment a thread opens, not blank until the next
   *  turn. Provider-reported when available, else the local countText estimate.
   *  Optional; brand-new + pre-gauge threads load as undefined (gauge hidden
   *  until a turn produces a count). */
  lastPromptTokens?: number;
  /** True when `lastPromptTokens` came from the local `spindle.tokens.countText`
   *  estimate rather than provider usage — the gauge renders a `~` then. */
  lastPromptEstimated?: boolean;
  /** The most recent turn's token usage (in / out / total) — replayed on load so
   *  the "this turn" segment of the usage strip survives thread switches / modal
   *  reopen, like the gauge. Optional; older / brand-new threads load as undefined. */
  lastTurnUsage?: { promptTokens: number; completionTokens: number; totalTokens: number; estimated?: boolean };
  /** Lifetime token usage across ALL turns in this thread — replayed on load so
   *  "total · this thread" is a true running total, not a per-session one. Optional;
   *  older threads start accumulating from their next turn. */
  totalUsage?: { promptTokens: number; completionTokens: number; totalTokens: number; estimated?: boolean };
  /** ── Tier-2 compaction marker (context-window management) ────────────────
   *  Index into `messages` marking the compaction boundary: messages
   *  `[0..compactedThrough)` are collapsed into the single `handoff` summary
   *  for the MODEL's view only (see `buildModelHistory`), so the LLM sees
   *  `[handoff, ...messages.slice(compactedThrough)]`. `messages` itself — the
   *  full record shown to the user and persisted — is NEVER touched, so
   *  compaction is non-destructive and cannot lose data. Dormant until
   *  compaction ships; undefined = the thread has never been compacted (the
   *  model sees the full history). */
  compactedThrough?: number;
  /** The compaction summary prepended to the model-facing history when
   *  `compactedThrough` is set — transient in-thread task state only (durable
   *  cross-session facts are harvested into the memory system instead).
   *  Undefined when uncompacted. */
  handoff?: string;
}

/**
 * Lightweight entry in the threads index file — just enough for the sidebar
 * to render the list without loading bodies. Index file lives at
 * `assistant/threads.json` and is kept in sync with the per-thread files.
 */
export interface AssistantThreadIndexEntry {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  /** Number of NON-SYSTEM messages in the thread — drives the optional
   *  "N messages" display next to the thread title in the sidebar. */
  messageCount: number;
}
