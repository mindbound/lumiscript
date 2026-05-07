/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT TYPE DEFINITIONS
 * ============================================================================
 * All public-facing types for the script API, storage model, and execution.
 * This is the single source of truth for what scripts can do.
 */

// ─── Core script model ────────────────────────────────────────────────────────

/**
 * Script type.
 * - 'trigger'  Registers event handlers at startup; auto-runs when bound events fire.
 * - 'library'  Reusable utilities; only loaded on demand via script.require().
 */
export type ScriptType = 'trigger' | 'library';

/**
 * A single binding condition.
 * Scripts can have an array of these; any match permits execution (OR semantics).
 *
 * Types:
 * - 'character': matches when chatting with the specified character (by ID)
 * - 'chat':      matches when the specified chat is active
 *
 * Note: Lumiverse uses character UUIDs (not avatar filenames like SillyTavern).
 */
export interface ScriptBindingEntry {
  type: 'character' | 'chat';
  /** Character UUID — set when type === 'character' */
  characterId?: string;
  /** Chat UUID — set when type === 'chat' */
  chatId?: string;
  /** Human-readable label for UI display (character name / chat title) */
  displayName: string;
}

/** Script metadata (optional, informational) */
export interface ScriptMetadata {
  description?: string;
  author?: string;
  version?: string;
  tags?: string[];
}

/** Core script record stored in user storage */
export interface Script {
  id: string;
  name: string;
  code: string;
  enabled: boolean;
  /**
   * When true, the script may call api.utils.http.* (routes through the
   * cors_proxy permission). Requires the user to have granted cors_proxy.
   */
  allowDangerous: boolean;
  type: ScriptType;
  /**
   * Binding entries — constrain execution to specific characters and/or chats.
   * Empty/undefined → global (runs in every context when enabled).
   * Non-empty → runs if ANY entry matches the current context (OR semantics).
   */
  bindings?: ScriptBindingEntry[];
  /**
   * Lumiverse event names this trigger script listens to.
   * Selected in the editor UI. When any declared event fires, the entire script
   * body is executed with `data` (event payload + `__event` name) and `api`
   * injected as top-level variables. Library and tool scripts ignore this field.
   */
  triggers?: string[];
  /** Virtual folder for organizing scripts in the UI. No OS-level directory. */
  folder?: string;
  createdAt: number;   // Unix ms
  updatedAt: number;   // Unix ms
  metadata?: ScriptMetadata;
}

/**
 * A script entry as serialized in a script pack ZIP.
 * Contains only the fields meaningful for sharing — no id, enabled, allowDangerous,
 * or timestamps (all regenerated on import with safe defaults).
 */
export interface ScriptPackEntry {
  name: string;
  code: string;
  type: ScriptType;
  triggers?: string[];
  bindings?: ScriptBindingEntry[];
  folder?: string;
  metadata?: ScriptMetadata;
}

// ─── LumiScript global settings ──────────────────────────────────────────────

export interface LumiScriptSettings {
  /** Master on/off toggle */
  enabled: boolean;
  // ─── Script Execution ────────────────────────────────────────────────────────
  /**
   * Maximum time in milliseconds a single script execution may run before it is
   * aborted with a timeout error.  Applies to async loops — the async version of
   * `Promise.race` is used so only awaited operations count towards this limit.
   * Default: 60 000 (60 s).  Range: 5 000 – 300 000.
   */
  scriptTimeoutMs: number;
  /**
   * Maximum number of console log entries retained per script in the editor
   * console.  Older entries are silently dropped once this cap is reached.
   * Default: 500.  Range: 50 – 2 000.
   */
  consoleHistoryLimit: number;
  // ─── Editor ──────────────────────────────────────────────────────────────────
  /**
   * Monaco editor font size in pixels.  Affects the code editor only; reference
   * docs and console output are unchanged.
   * Default: 12.  Range: 10 – 24.
   */
  editorFontSize: number;
  /**
   * Debounce (in milliseconds) between the last keystroke and autosave.
   * Larger values reduce backend round-trips while typing, at the cost of
   * waiting longer before unsaved edits are persisted.
   * Default: 1 200.  Range: 300 – 5 000.
   */
  autosaveDebounceMs: number;
  // ─── Templates ───────────────────────────────────────────────────────────────
  /**
   * Starter code pre-seeded into newly created trigger scripts.
   * Typically used to stub the pack-import frontmatter directives.
   */
  defaultTriggerTemplate: string;
  /**
   * Starter code pre-seeded into newly created library scripts.
   * Typically used to stub the pack-import frontmatter directives plus a
   * placeholder `module.exports`.
   */
  defaultLibraryTemplate: string;
}

export const DEFAULT_TRIGGER_TEMPLATE =
`// @description
// @author
// @version     1.0.0
// @tags

`;

export const DEFAULT_LIBRARY_TEMPLATE =
`// @description
// @author
// @version     1.0.0
// @tags

module.exports = {

};
`;

export const DEFAULT_SETTINGS: LumiScriptSettings = {
  enabled: true,
  scriptTimeoutMs: 60_000,
  consoleHistoryLimit: 500,
  editorFontSize: 12,
  autosaveDebounceMs: 1_200,
  defaultTriggerTemplate: DEFAULT_TRIGGER_TEMPLATE,
  defaultLibraryTemplate: DEFAULT_LIBRARY_TEMPLATE,
};

// ─── Execution ────────────────────────────────────────────────────────────────

export type ConsoleEntryType = 'log' | 'warn' | 'error' | 'info' | 'success' | 'separator';

export interface ConsoleEntry {
  timestamp: string;   // Formatted time string (HH:MM:SS)
  type: ConsoleEntryType;
  message: string;
}

export interface ScriptExecutionResult {
  success: boolean;
  error?: Error;
  duration: number;    // ms — measured inside the executor
  scriptId: string;
  runId: string;
  /**
   * The resolved value of the script's body (the last-expression return).
   * Populated only on successful execution; undefined on failure or timeout.
   * Callers may use this value to obtain a script's computed result.
   */
  returnValue?: unknown;
}

// ─── Script API ───────────────────────────────────────────────────────────────

/**
 * The api.* object exposed to scripts running in the sandbox.
 * API modules are implemented progressively; stubs throw descriptive errors
 * for capabilities not yet available.
 */
export interface LumiScriptAPI {
  chat: ChatAPI;
  llm: LLMAPI;
  variables: VariablesAPI;
  json: JSONAPI;
  utils: UtilsAPI;
  /** User-facing notifications and dialogs. Fire-and-forget toast + async prompt/confirm. */
  ui: UIAPI;
  /** Character CRUD. Requires characters permission. */
  characters: CharactersAPI;
  /** Chat session management. Requires chats permission. */
  chats: ChatsAPI;
  /** World Info / Lorebook CRUD. Requires world_books permission. */
  worldInfo: WorldInfoAPI;
  /** Databank (vectorised document collection) CRUD + per-document upload, fetch, and reprocess. Requires databanks permission. */
  databanks: DatabanksAPI;
  /** Persona (identity profile) CRUD + active persona switching. Requires personas permission. */
  personas: PersonasAPI;
  /** Regex find/replace script CRUD plus context-aware `getActive` resolver. Mirrors the resolution Lumiverse uses internally during prompt assembly + response baking + display rendering. Requires regex_scripts permission. */
  regexScripts: RegexScriptsAPI;
  /** Read-only access to the user's Council configuration: settings, members, and the available Lumia-item pool. No permission required. */
  council: CouncilAPI;
  /** Requires allowDangerous */
  files: FilesAPI;
  /** AES-256-GCM encrypted per-user secret storage. Requires allowDangerous. */
  enclave: EnclaveAPI;
  /** Register LLM tools invocable by Lumiverse Council and inline LLM function-calling. Requires tools permission. */
  tools: ToolsAPI;
  /** Register Lumiverse macros from scripts. Both push-model (register + updateValue) and pull-model (register with handler) are supported. No permission required. */
  macros: MacrosAPI;
  /** Real-time script-to-script pub/sub broadcast bus. No permission required. */
  broadcast: BroadcastAPI;
  /** Cross-extension shared RPC pool (Spindle's `spindle.rpcPool` surface). Publish lightweight state for other extensions to read, register on-demand handlers, or read another extension's published values. Free tier — no permission required. */
  rpc: RpcAPI;
  /** Command palette registration. No permission required. */
  commands: CommandsAPI;
  /** Persistent event tracking (track, query, replay). Requires event_tracking permission. */
  events: EventsAPI;
  /** Server-side token counting helpers. Uses the provider's actual tokenizer rather than character-count heuristics. No permission required. */
  tokens: TokensAPI;
  /** JSON-file-backed micro-DB. Per-script / per-character / per-chat collections with CRUD, filter predicates, and jsonquery escape hatch. No permission required. */
  db: DbAPI;
}

// ─── Chat API ─────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
  /** Index of the active swipe variant. `0` when the message has no alternates. */
  swipeId: number;
  /** All swipe variants for this message. `swipes[swipeId]` equals `content`. */
  swipes: string[];
  /**
   * Per-swipe creation timestamps (unix epoch seconds), aligned index-wise
   * with `swipes`. Populated by Lumiverse hosts at the commit that shipped
   * spindle-types 0.4.27; older hosts deliver an empty array.
   */
  swipeDates: number[];
  /**
   * Free-form host-maintained metadata bag. Carries reasoning text + duration
   * (for assistant messages with chain-of-thought), attachments, a `hidden`
   * flag, plus any other fields the host or other extensions attach. The
   * exact keys depend on the host build and are not part of LumiScript's
   * contract — treat as opaque `unknown` at read time.
   */
  extra: Record<string, unknown>;
}

/**
 * Patch shape accepted by `api.chat.editMessage(id, patch)`. Mirrors the
 * upstream `spindle.chat.updateMessage` signature in spindle-types 0.4.27
 * with camelCase field names matching the rest of the `ChatMessage` surface
 * (`swipeId` → `swipe_id`, `swipeDates` → `swipe_dates` are mapped at the
 * chat API boundary).
 *
 * Only the fields you provide get updated. Writing `swipes`, `swipeId`,
 * or `swipeDates` fires Lumiverse's `SWIPE_EDITED` event in addition to
 * `MESSAGE_EDITED`; a plain `content` edit fires only `MESSAGE_EDITED`.
 */
export interface MessagePatch {
  /** Replace the active swipe's content. */
  content?: string;
  /** Replace the host-maintained metadata bag. Merges at the host level. */
  metadata?: Record<string, unknown>;
  /**
   * Replace the full swipes array. Length changes (adding/removing variants)
   * are expressible here — the host emits `SWIPE_EDITED` with the whole new
   * message state.
   */
  swipes?: string[];
  /**
   * Navigate to a different swipe index. Usually paired with `swipes` when
   * rewriting both, but can be used alone to cycle without content changes.
   */
  swipeId?: number;
  /**
   * Replace per-swipe timestamps. Length should match `swipes` after the
   * patch is applied; otherwise the host may reject the patch.
   */
  swipeDates?: number[];
  /**
   * Set the chain-of-thought reasoning text + duration shown in Lumiverse's
   * reasoning panel. Pass `{ text: null }` to clear, or just `text` to set
   * without a duration.
   */
  reasoning?: {
    text?: string | null;
    duration?: number | null;
  };
}

export interface GetMessagesOptions {
  first?: number;
  last?: number;
}

export interface SendMessageOptions {
  role?: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
}

/**
 * Options for `api.chat.inject`.
 *
 * Two modes:
 * - `'intercept'` (default) — injection is spliced into the fully assembled
 *   message array at the given depth position before it reaches the LLM.
 * - `'context'` — injection is provided to the generation context handler
 *   *before* prompt assembly. Whether the assembler acts on it depends on
 *   Lumiverse dev support for `_lumiScriptInjections` in the context object.
 */
export interface InjectOptions {
  /**
   * Which pipeline phase to inject into.
   * - `'intercept'`: post-assembly, splice into message array (default)
   * - `'context'`: pre-assembly, enrich the assembler context
   */
  mode?: 'intercept' | 'context';
  /** Message role. Default: `'system'`. */
  role?: 'system' | 'user' | 'assistant';
  /**
   * For `mode: 'intercept'` only — how many messages from the END of the
   * assembled array to insert before. `0` = append after all messages (default).
   * `1` = before the last message. `4` = before the 4th-to-last, etc.
   */
  depth?: number;
  /**
   * If `true` the injection is automatically removed after the next generation
   * cycle. Default: `false`.
   */
  ephemeral?: boolean;
}

/** A snapshot of a single active injection entry. */
export interface InjectionInfo {
  id: string;
  content: string;
  mode: 'intercept' | 'context';
  role: string;
  depth: number;
  ephemeral: boolean;
  /** The ID of the script that created this injection. */
  scriptId: string;
}

// ─── Message content processor (api.chat.registerContentProcessor) ──────────

/**
 * Origin tag identifying which user-initiated message-write path triggered
 * a content-processor invocation. `'create'` covers both ordinary
 * `POST .../messages` writes and auto-inserted greeting rows.
 *
 * `'render'` (host ≥0.9.7) is a non-persisting per-render variant — fires
 * once per visible message paint, returned `content` feeds into the display-
 * regex pass before paint, returned `extra` is ignored (no row to mutate).
 * Use it for per-render rewrites that depend on transient context (chat-var
 * values, message position) and would pollute history if persisted.
 */
export type MessageContentProcessorOrigin =
  | 'create'
  | 'update'
  | 'swipe_add'
  | 'swipe_update'
  | 'render';

/**
 * Context passed to a message content processor before a user-initiated
 * message write reaches SQLite. Handlers can inspect this and return a
 * patch (new `content` / merged `extra`) to transform what gets stored
 * and what WebSocket subscribers observe on first paint.
 */
export interface MessageContentProcessorCtx {
  readonly chatId: string;
  /** Undefined for `'create'` origins (the row doesn't exist yet). */
  readonly messageId?: string;
  readonly content: string;
  readonly extra?: Record<string, unknown>;
  readonly origin: MessageContentProcessorOrigin;
  /** Set for `'swipe_update'` only — zero-based index of the swipe being rewritten. */
  readonly swipeIndex?: number;
  readonly userId: string;
}

/**
 * Return value for a message content processor handler. Return `undefined`
 * / `void` to pass through, or a partial patch to modify the write:
 *  - `content` (if present) replaces the content for downstream processors
 *    and the DB write.
 *  - `extra` (if present) shallow-merges into the existing `extra` — keys
 *    you omit are preserved. Ignored on swipe origins (swipes share the
 *    parent message's `extra`).
 */
export interface MessageContentProcessorResult {
  content?: string;
  extra?: Record<string, unknown>;
}

/**
 * User-supplied message content processor handler. Sync or async. Returns
 * either a `MessageContentProcessorResult` patch or `void`/`undefined`
 * to pass through.
 */
export type MessageContentProcessorHandler = (
  ctx: MessageContentProcessorCtx,
) =>
  | MessageContentProcessorResult
  | void
  | Promise<MessageContentProcessorResult | void>;

/** Registration options for `api.chat.registerContentProcessor`. */
export interface MessageContentProcessorOptions {
  /** Stable identifier. Re-registration with the same `id` from the same script replaces. */
  id?: string;
  /** Lower runs first within a single LS multiplexer pass. Default `100`. */
  priority?: number;
  /**
   * Restrict the handler to specific origins. Default: all four origins.
   * Pre-filtered before invocation — non-matching contexts skip without
   * calling the handler at all. Common shape: `origin: 'create'` for
   * handlers that only care about new messages.
   */
  origin?: MessageContentProcessorOrigin | MessageContentProcessorOrigin[];
  /**
   * Per-invocation soft timeout in milliseconds. Default `2000`. The host's
   * outer 10-second budget is shared across all LumiScript handlers; on
   * timeout the handler is skipped and the chain forwards the prior content.
   */
  timeoutMs?: number;
}

/** Handle returned by `registerContentProcessor`. Calling `remove()` deregisters. */
export interface MessageContentProcessorHandle {
  readonly id: string;
  remove(): void;
}

/** Snapshot of a registered processor. Returned from `listContentProcessors()`. */
export interface RegisteredMessageContentProcessorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  /** `null` when no origin filter was supplied. */
  origins: MessageContentProcessorOrigin[] | null;
  timeoutMs: number;
}

export interface ChatAPI {
  /** Get all messages in the current chat. Requires chat_mutation permission. */
  getMessages(options?: GetMessagesOptions): Promise<ChatMessage[]>;
  /** Append a new message. Requires chat_mutation permission. */
  sendMessage(content: string, options?: SendMessageOptions): Promise<{ id: string }>;
  /**
   * Edit a message. Requires chat_mutation permission.
   *
   * Two call shapes:
   *   - `editMessage(id, 'new content')` — replace the active swipe's content.
   *     Fires Lumiverse's `MESSAGE_EDITED` event.
   *   - `editMessage(id, patch)` — apply a richer patch (content, metadata,
   *     swipes, swipe navigation, reasoning text). Fires `SWIPE_EDITED`
   *     alongside (or instead of) `MESSAGE_EDITED` when the patch touches
   *     any swipe-shaped field. See `MessagePatch` for the full shape.
   */
  editMessage(id: string, contentOrPatch: string | MessagePatch): Promise<void>;
  /** Delete a message. Requires chat_mutation permission. */
  deleteMessage(id: string): Promise<void>;
  /** Get the current chat ID from the active context. */
  getChatId(): string | null;
  /**
   * Get a single metadata value from the current chat.
   * Returns undefined if the key does not exist.
   * Convenience wrapper over api.chats.get() with active-context auto-resolve.
   * Requires chats permission.
   */
  getMetadata(key: string): Promise<unknown>;
  /**
   * Set a single metadata key on the current chat.
   * Performs a read-modify-write to safely merge the new key without
   * overwriting other metadata keys.
   * Requires chats permission.
   */
  setMetadata(key: string, value: unknown): Promise<void>;

  /**
   * Register a prompt injection under the given ID. Overwrites any existing
   * injection with the same ID. Requires `interceptor` permission.
   *
   * - `mode: 'intercept'` (default): injected post-assembly at the requested
   *   depth position in the message array.
   * - `mode: 'context'`: injected into the assembler context pre-assembly.
   */
  inject(id: string, content: string, options?: InjectOptions): void;
  /** Remove a single injection by ID. */
  removeInjection(id: string): void;
  /** List all currently active injections (across all scripts). */
  getInjections(): InjectionInfo[];
  /**
   * Remove all injections created by this script.
   * Requires `interceptor` permission.
   */
  clearInjections(): void;
  /**
   * Remove ALL injections across all scripts.
   * Requires `interceptor` permission + `allowDangerous`.
   */
  clearAllInjections(): void;

  /**
   * Mark a single message as hidden or visible. Hidden messages are excluded
   * from chat-memory embeddings (vector retrieval) but still included in
   * prompt-assembly chat history. Requires chat_mutation permission.
   */
  setMessageHidden(id: string, hidden: boolean): Promise<void>;
  /**
   * Bulk variant — mark multiple messages as hidden or visible.
   * Capped at 500 IDs per call. Requires chat_mutation permission.
   */
  setMessagesHidden(ids: string[], hidden: boolean): Promise<void>;
  /**
   * Check whether a message is hidden. Returns false for messages that have
   * never had the flag set. Requires chat_mutation permission.
   */
  isMessageHidden(id: string): Promise<boolean>;

  /**
   * Register a message content processor — a handler that fires before a
   * user-initiated message write reaches SQLite (create, update, swipe_add,
   * swipe_update, auto-inserted greetings) AND on per-message display
   * rendering (render, host ≥0.9.7). Handlers can transform `content` and
   * / or shallow-merge `extra`. Returned `extra` is ignored on swipe
   * origins (swipes share the parent message's `extra`) and on `render`
   * (no row to mutate). Requires `chat_mutation` permission.
   *
   * Use this when the transform belongs on the stored message itself —
   * not just on the in-flight LLM call. Common patterns:
   *  - Pre-resolve macros at write time so stored rows are already-resolved.
   *  - Strip state markers (e.g. `<state>...</state>` blocks) out of the
   *    visible content into `extra` before commit.
   *  - Sanitize / normalize content uniformly.
   *
   * **Critical perf note** — handler runs synchronously inside the message
   * write path. Every millisecond of handler work is visible latency on
   * send/edit/swipe. Each handler runs inside a 2-second soft timeout
   * (configurable). Do NOT call `api.llm.*`, `api.utils.http.*`, or any
   * other potentially-slow API from a handler.
   *
   * **Loop safety**: The host does NOT invoke this hook for `api.chat.*`
   * mutations (sendMessage / editMessage / etc.) — those bypass the
   * processor chain to avoid an extension's own writes triggering its
   * own handler.
   *
   * @returns A handle whose `remove()` deregisters the handler.
   *
   * @example
   * const handle = api.chat.registerContentProcessor((ctx) => {
   *   const m = ctx.content.match(/<state>([\s\S]*?)<\/state>/);
   *   if (!m) return;
   *   return {
   *     content: ctx.content.replace(m[0], '').trim(),
   *     extra: { tracker: { state: m[1] } },
   *   };
   * }, { origin: 'create' });
   *
   * // Later: handle.remove();
   */
  registerContentProcessor(
    handler: MessageContentProcessorHandler,
    options?: MessageContentProcessorOptions,
  ): MessageContentProcessorHandle;

  /**
   * List all currently registered message content processors (across all
   * scripts). Use for diagnostics. Excludes the live handler reference.
   */
  listContentProcessors(): RegisteredMessageContentProcessorInfo[];
}

// ─── LLM API ─────────────────────────────────────────────────────────────────

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

/**
 * Provider identifier strings as used internally by Lumiverse.
 * Maps directly to the `readonly name` field of each provider class in
 * src/llm/providers/*.  Update when Lumiverse adds or removes providers.
 */
export type LLMProvider =
  | 'ai21' | 'anthropic' | 'chutes' | 'custom' | 'deepseek' | 'electronhub'
  | 'fireworks' | 'google' | 'groq' | 'mistral' | 'moonshot' | 'nanogpt'
  | 'openai' | 'openrouter' | 'perplexity' | 'pollinations' | 'siliconflow'
  | 'xai' | 'zai';

export interface LLMOptions {
  /**
   * Connection profile ID. When provided, the named saved connection is used
   * (its provider, model, and API key).
   * Takes precedence over connectionName, provider, and model.
   */
  connectionId?: string;
  /**
   * Connection profile name (human-readable label as shown in Lumiverse
   * settings). Resolved to an ID at call time via spindle.connections.list().
   * Ignored when connectionId is set. Matching is case-insensitive.
   */
  connectionName?: string;
  /**
   * LLM provider identifier. Must be one of the LLMProvider values.
   * Validated at call time — an unknown value throws immediately.
   * Ignored when connectionId or connectionName is set.
   */
  provider?: LLMProvider;
  /** Model identifier. Used together with provider for direct calls. */
  model?: string;
  /** Override temperature. */
  temperature?: number;
  /** Override max tokens. */
  maxTokens?: number;
  /**
   * When false, instructs the model to issue at most one tool call per turn
   * (`parallel_tool_calls: false` in the request body). Useful for Mistral and
   * other providers that require serialised multi-step tool use.
   * Default: provider decides (usually true / model's own discretion).
   * Only meaningful when calling `generateWithTools()`.
   */
  parallelToolCalls?: boolean;
  /**
   * Optional `AbortSignal` to cancel an in-flight generation. When aborted,
   * the upstream LLM request is torn down and the returned promise rejects
   * with an `AbortError` (`err.name === 'AbortError'`). Composes naturally
   * with `AbortSignal.timeout()` and `AbortSignal.any([...])`.
   *
   * Note: the worker host automatically aborts any in-flight generation
   * when the extension is torn down, so scripts don't need to thread a
   * signal just to avoid leaking requests on disable/reload. Use this
   * when you want *script-level* cancellation — e.g. user-cancellable
   * actions, per-request timeouts, or racing multiple calls.
   *
   * @example
   * ```ts
   * const ctrl = new AbortController();
   * setTimeout(() => ctrl.abort(), 10_000);
   * try {
   *   const text = await api.llm.generate(messages, { signal: ctrl.signal });
   * } catch (err) {
   *   if (err instanceof Error && err.name === 'AbortError') {
   *     // timed out — not an error condition
   *   }
   * }
   * ```
   */
  signal?: AbortSignal;
}

/**
 * Structural interface for a Zod schema (or any compatible object with a `parse` method).
 * Avoids importing Zod into this types file while still providing TypeScript-level
 * expressiveness.  The executor uses `instanceof z.ZodType` for runtime discrimination.
 */
export interface ZodLike<T> {
  parse(data: unknown): T;
}

// ─── Dry Run types ────────────────────────────────────────────────────────────

export interface DryRunOptions {
  /** The chat to assemble the prompt for. Defaults to the active chat. */
  chatId?: string;
  /** Override the connection profile used for assembly. */
  connectionId?: string;
  /** Override the persona used for assembly. */
  personaId?: string;
  /** Override the generation preset. */
  presetId?: string;
  /** Override the generation type (default: "normal"). */
  generationType?: 'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate';
  /** Override sampler parameters. */
  parameters?: Record<string, unknown>;
}

/** A single block in the assembled prompt. */
export interface DryRunBlock {
  /** Block type: "block", "chat_history", "world_info", "authors_note", "utility", etc. */
  type: string;
  name: string;
  role?: string;
  content?: string;
  blockId?: string;
  marker?: string;
  messageCount?: number;
  firstMessageIndex?: number;
  preCountedTokens?: number;
  excludeFromTotal?: boolean;
}

/** World info activation statistics from a dry run. */
export interface WorldInfoActivationStats {
  totalCandidates: number;
  activatedBeforeBudget: number;
  activatedAfterBudget: number;
  evictedByBudget: number;
  evictedByMinPriority: number;
  estimatedTokens: number;
  recursionPassesUsed: number;
}

/** Per-block token count data from a dry run. Only present when a tokenizer is configured. */
export interface DryRunTokenCount {
  totalTokens: number;
  breakdown: Array<{ name: string; type: string; tokens: number; role?: string }>;
  tokenizerId: string | null;
  tokenizerName: string | null;
}

/** Long-term memory retrieval statistics from a dry run. */
export interface DryRunMemoryStats {
  enabled: boolean;
  chunksRetrieved: number;
  chunksAvailable: number;
  chunksPending: number;
  injectionMethod: 'macro' | 'fallback' | 'disabled';
  retrievedChunks: Array<{
    score: number;
    tokenEstimate: number;
    messageRange: [number, number];
    preview: string;
  }>;
  queryPreview: string;
  settingsSource: 'global' | 'per_chat';
}

/** Result of a dry run — the assembled prompt state without calling the LLM. */
export interface DryRunResult {
  /** The fully assembled message array that would be sent to the LLM. */
  messages: LLMMessage[];
  /** Ordered prompt composition blocks (one entry per prompt section). */
  breakdown: DryRunBlock[];
  /** Final merged sampler parameters. */
  parameters: Record<string, unknown>;
  model: string;
  provider: string;
  /** Per-block token counts. Only present if a tokenizer is configured. */
  tokenCount?: DryRunTokenCount;
  /** World info activation statistics. */
  worldInfoStats?: WorldInfoActivationStats;
  /** Long-term memory retrieval statistics. */
  memoryStats?: DryRunMemoryStats;
}

/**
 * Full result from `api.llm.generateWithTools()` when a schema is provided.
 * The LLM produces either a structured object (final step) or function calls
 * (intermediate step). Both are never present simultaneously.
 */
export interface LLMRawResultStructured<T> {
  /**
   * Parsed and validated structured content from the final LLM response.
   * Absent when `tool_calls` is set (intermediate function-call step).
   */
  content?: T;
  /** Function calls requested by the LLM. When present, `content` is absent. */
  tool_calls?: ToolCall[];
}

/** A single function call made by the LLM during a `generateWithTools()` call. */
export interface ToolCall {
  /** Tool name as given in the schema. */
  name: string;
  /** Parsed arguments as returned by the LLM. */
  args: Record<string, unknown>;
  /** Provider call ID (Anthropic `id`, OpenAI `id`, or synthetic UUID for providers that don't supply one). */
  call_id: string;
}

/**
 * Full result from `api.llm.generateWithTools()`.
 * The LLM produces either text content, function calls, or both (rare).
 */
export interface LLMRawResult {
  /** Text content generated by the LLM. May be empty when tool_calls is set. */
  content: string;
  /** Function calls requested by the LLM. When present, content is typically empty. */
  tool_calls?: ToolCall[];
}

export interface LLMAPI {
  /** Generate using the user's active connection and preset. Requires generation permission. */
  generate(messages: LLMMessage[], options?: LLMOptions): Promise<string>;
  /**
   * Generate and parse a structured JSON response. Requires generation permission.
   *
   * - Pass a **Zod schema** (`z.object({...})`) for automatic JSON-Schema conversion,
   *   native `response_format` mode on OpenAI-compatible providers, and Zod validation.
   * - Pass a **raw JSON Schema** object (`Record<string, unknown>`) to skip Zod validation
   *   while still benefiting from native structured-output mode where supported.
   *
   * Anthropic and Google fall back to schema-in-prompt when native JSON mode is unavailable.
   */
  generateStructured<T = unknown>(
    messages: LLMMessage[],
    schema: ZodLike<T> | Record<string, unknown>,
    options?: LLMOptions
  ): Promise<T>;
  /**
   * Generate with tool schemas — returns the full LLM response including any
   * function calls the model requested. Use this to implement an autonomous
   * agentic tool loop independent of Lumiverse's Council system.
   *
   * When the LLM returns function calls, `result.tool_calls` is set.
   * Execute each call with `api.tools.invoke(call.name, call.args)`, then
   * append the result to the message array and call `generateWithTools` again
   * until `result.tool_calls` is undefined (text-only response).
   *
   * Requires generation permission.
   *
   * @example
   * const schemas = api.tools.list().map(t => ({
   *   name: t.name, description: t.description, parameters: t.parameters,
   * }));
   * let msgs = [...history];
   * for (let i = 0; i < 8; i++) {
   *   const r = await api.llm.generateWithTools(msgs, schemas, { connection: 'tools' });
   *   if (!r.tool_calls?.length) {
   *     if (r.content) api.chat.inject('result', r.content, { mode: 'intercept' });
   *     break;
   *   }
   *   for (const call of r.tool_calls) {
   *     const result = await api.tools.invoke(call.name, call.args);
   *     msgs = [...msgs,
   *       { role: 'assistant', content: `[Tool call: ${call.name}]` },
   *       { role: 'user',      content: `[Result]: ${result}` },
   *     ];
   *   }
   * }
   */
  generateWithTools(
    messages: LLMMessage[],
    tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
    options?: LLMOptions
  ): Promise<LLMRawResult>;
  /**
   * Structured-output variant of `generateWithTools`. Pass a **Zod schema**
   * (`z.object({...})`) or a plain JSON Schema object as the 4th argument.
   *
   * - The schema is injected into the system prompt and, where supported,
   *   activates native structured-output mode (Anthropic `output_config`,
   *   Google `responseMimeType`, OpenAI-compatible `response_format`).
   * - **During intermediate steps** (when `tool_calls` is set) `content` is the
   *   raw LLM text; it is **not** typed as `T` until the final step.
   * - **On the final step** (no `tool_calls`) `content` is JSON-parsed and,
   *   if a Zod schema was passed, Zod-validated. Validation failure is silent —
   *   the raw-parsed value is returned rather than throwing.
   */
  generateWithTools<T = unknown>(
    messages: LLMMessage[],
    tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
    options: LLMOptions | undefined,
    schema: ZodLike<T> | Record<string, unknown>
  ): Promise<LLMRawResultStructured<T>>;

  /**
   * Run the full prompt assembly pipeline without calling the LLM.
   * Returns the assembled messages, breakdown blocks, token counts, world info
   * activation stats, and memory stats — identical to what a real generation
   * would use, but with the LLM call skipped.
   *
   * Uses the active chat if chatId is not provided in options.
   * Requires generation permission.
   */
  dryRun(options?: DryRunOptions): Promise<DryRunResult>;
}

// ─── Variables API ────────────────────────────────────────────────────────────

export interface VariableStore {
  get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined>;
  set<T = unknown>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<boolean>;
  has(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

export interface VariablesAPI {
  /** Per-chat persistence (stored under chatId via spindle.variables.local) */
  local: VariableStore;
  /** Cross-chat persistence (stored via spindle.variables.global) */
  global: VariableStore;
  /** Per-character persistence (stored under characterId via userStorage) */
  character: VariableStore;
  /** Chat-metadata persisted variables (stored in chat.metadata.chat_variables). Accessible via {{@key}} macros. */
  chat: VariableStore;
}

// ─── JSON API ─────────────────────────────────────────────────────────────────

export interface JSONAPI {
  parse<T = unknown>(text: string): T;
  stringify(data: unknown, pretty?: boolean): string;
  clone<T>(data: T): T;
  get(data: unknown, path: string, defaultValue?: unknown): unknown;
  set(data: unknown, path: string, value: unknown): unknown;
  merge<T = unknown>(...objects: unknown[]): T;
  isValid(text: string): boolean;
  filter<T = unknown>(data: T[], predicate: (item: T) => boolean): T[];
  sort<T = unknown>(data: T[], key: string, direction?: 'asc' | 'desc'): T[];
  uniq<T = unknown>(data: T[]): T[];
  flatten<T = unknown>(data: unknown[]): T[];
  /** Run a jsonquery pipeline against data. See https://jsonquerylang.org */
  query<T = unknown>(data: unknown, queryString: string): T;
}

// ─── Utils API ────────────────────────────────────────────────────────────────

export interface HttpRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: string;
  /** Timeout in ms */
  timeout?: number;
}

export interface HttpResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  body: string;
}

export interface UtilsAPI {
  uuid(): string;
  shortId(): string;
  wait(ms: number): Promise<void>;
  random: {
    int(min: number, max: number): number;
    float(min: number, max: number): number;
    pick<T>(array: T[]): T;
    bool(): boolean;
    chance(probability: number): boolean;
    shuffle<T>(array: T[]): T[];
  };
  /** HTTP via cors_proxy. Requires allowDangerous and the cors_proxy permission. */
  http: {
    get(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    post(url: string, body: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    put(url: string, body: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    delete(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    request(url: string, options: HttpRequestOptions): Promise<HttpResponse>;
  };
  /**
   * Handlebars template rendering with automatic Lumiverse macro resolution.
   * Each script has its own isolated Handlebars environment so `registerHelper`
   * calls do not bleed across scripts.
   *
   * **Two-pass rendering**: `render()` runs Lumiverse macros first (resolving
   * `{{char}}`, `{{user}}`, `{{getvar::key}}`, time/date, etc.) then passes the
   * result to Handlebars. The two passes compose safely because the macro engine
   * leaves unknown tokens — Handlebars variables, `{{#if}}`, helper calls, etc.
   * — untouched.
   *
   * Supports the full Handlebars syntax: `{{variable}}`, `{{#if}}`, `{{#each}}`,
   * `{{#with}}`, triple-stash `{{{html}}}`, partials, and custom helpers.
   */
  template: {
    /**
     * Resolve Lumiverse macros then render the template as Handlebars.
     *
     * `chatId` and `characterId` default to the active context when omitted.
     * Macro diagnostics are silently dropped; the string always reflects the
     * best-effort output.
     *
     * @example
     * // Lumiverse macros and Handlebars data in the same template
     * const prompt = await api.utils.template.render(
     *   'You are {{char}}. Personality: {{personality}}\n' +
     *   'Today\'s task for {{user_name}}: {{task}}.',
     *   { user_name: persona.name, task: 'summarise the chat' },
     * );
     *
     * @example
     * await api.utils.template.render(
     *   '{{#each items}}• {{this}}\n{{/each}}',
     *   { items: ['apples', 'bananas'] },
     * )
     * // → '• apples\n• bananas\n'
     */
    render(
      template: string,
      data?: Record<string, unknown>,
      options?: {
        /** Chat ID for context-sensitive macros. Defaults to the active chat. */
        chatId?: string;
        /** Character ID for character macros. Inferred from the active chat if omitted. */
        characterId?: string;
      }
    ): Promise<string>;

    /**
     * Pre-compile a template string and return a reusable **synchronous** render
     * function. No macro resolution is performed — only Handlebars expressions
     * are evaluated. Use when the template is known at build time and macros are
     * not needed, or when you want to resolve macros once and cache the result.
     *
     * @example
     * const greet = api.utils.template.compile('Hello, {{name}}!');
     * greet({ name: 'Alice' }) // → 'Hello, Alice!'
     * greet({ name: 'Bob' })   // → 'Hello, Bob!'
     */
    compile(template: string): (data?: Record<string, unknown>) => string;

    /**
     * Register a custom helper for use in templates rendered by this script.
     * Helpers are scoped to this script's isolated Handlebars environment.
     *
     * @example
     * api.utils.template.registerHelper('upper', (s) => String(s).toUpperCase());
     * await api.utils.template.render('{{upper name}}', { name: 'alice' })
     * // → 'ALICE'
     */
    registerHelper(name: string, fn: (...args: unknown[]) => unknown): void;
  };

  /**
   * Lumiverse macro resolution (`{{char}}`, `{{user}}`, `{{getvar::key}}`,
   * `{{roll::2d6}}`, extension-registered macros, etc.). Thin wrapper over
   * `spindle.macros.resolve` exposing the `commit` option for dry resolves.
   *
   * Unlike `api.utils.template.render`, this is macro-only — no Handlebars
   * pass — so the output is whatever the macro engine produced. Use this
   * when you want to preview what a template WOULD render to without
   * triggering any side-effecting macro handlers (dry resolves).
   */
  macros: {
    /**
     * Resolve all macros in a template string.
     *
     * `chatId` / `characterId` default to the active context when omitted
     * (consistent with `api.utils.template.render`). Without either, only
     * context-free macros (time, random, etc.) resolve.
     *
     * `commit: false` requests a dry / non-committing resolve. Extension
     * macro handlers that honour this flag will skip their side effects
     * (disk writes, event emissions, external calls). Well-behaved macro
     * handlers SHOULD honour it; older handlers that don't may still run
     * their side effects.
     *
     * Default: `commit: true` (side effects happen, matching Lumiverse's
     * normal prompt-assembly behaviour).
     *
     * @example
     * // Preview a template without triggering {{setvar}} writes
     * const { text, diagnostics } = await api.utils.macros.resolve(
     *   'Current turn: {{@turn}}. {{incvar::turn}}',
     *   { commit: false },
     * );
     * // `text` contains the rendered output; the {{incvar}} side effect
     * // is suppressed for macro handlers that honour `commit`.
     */
    resolve(
      template: string,
      options?: MacrosResolveOptions,
    ): Promise<MacrosResolveResult>;
  };

  /**
   * Image-byte utilities, primarily intended to ease `api.characters.setAvatar`
   * workflows. No permission required. No image-decoding dependencies — these
   * are cheap byte-level helpers, not a canvas replacement.
   *
   * Out of scope:
   *   - Format conversion (JPG ↔ PNG etc.) — Lumiverse's setAvatar endpoint
   *     accepts any common image format; the host normalises.
   *   - Resize / crop — same reasoning.
   */
  image: {
    /**
     * Detect an image's MIME type from the first few bytes (magic-byte sniff).
     * Returns `null` for unrecognised or truncated input.
     *
     * Recognises: PNG, JPEG, WebP, GIF (87a + 89a), BMP.
     *
     * @example
     * // Typical setAvatar flow from unknown source bytes:
     * const mimeType = api.utils.image.detectMime(bytes) ?? 'image/png';
     * await api.characters.setAvatar(charId, { data: bytes, mimeType });
     */
    detectMime(bytes: Uint8Array): string | null;

    /**
     * Parse a `data:<mime>;base64,<payload>` URL into bytes + MIME.
     * Returns `null` for malformed input or non-base64 data URIs.
     *
     * @example
     * const parsed = api.utils.image.dataUrlToBytes(apiOutput);
     * if (parsed) await api.characters.setAvatar(charId, parsed);
     */
    dataUrlToBytes(url: string):
      | { data: Uint8Array; mimeType: string }
      | null;

    /**
     * Encode bytes + a MIME type into a `data:<mime>;base64,<payload>` URL.
     * Useful for previewing proposed avatars in the UI before committing
     * with `setAvatar`, or for embedding in generated HTML.
     */
    bytesToDataUrl(bytes: Uint8Array, mimeType: string): string;
  };
}

/** Options for `api.utils.macros.resolve`. */
export interface MacrosResolveOptions {
  /** Chat ID for context-sensitive macros. Defaults to the active chat. */
  chatId?: string;
  /** Character ID for character macros. Inferred from the active chat if omitted. */
  characterId?: string;
  /**
   * When `false`, requests a dry / non-committing resolve — extension macro
   * handlers should skip side effects (disk writes, event emissions, etc.).
   * Default: `true` (side effects happen).
   */
  commit?: boolean;
}

/** Result returned by `api.utils.macros.resolve`. */
export interface MacrosResolveResult {
  /** Resolved template text. */
  text: string;
  /** Diagnostics from the macro engine (parse errors, unknown macros, etc.). */
  diagnostics: Array<{ message: string; offset: number; length: number }>;
}

// ─── Files API ────────────────────────────────────────────────────────────────

/** Metadata returned by `api.files.sharedStat`. */
export interface FileStatResult {
  exists: boolean;
  isFile: boolean;
  isDirectory: boolean;
  sizeBytes: number;
  /** ISO 8601 timestamp of last modification. */
  modifiedAt: string;
}

/** Metadata returned by `api.files.tempStat`. */
export interface TempStatResult {
  sizeBytes: number;
  /** ISO 8601 creation timestamp. */
  createdAt: string;
  /** ISO 8601 expiration timestamp. Absent if no TTL was set. */
  expiresAt?: string;
}

/** Options for `api.files.tempWrite`. */
export interface TempWriteOptions {
  /** Time-to-live in milliseconds. If omitted the file persists until manually deleted or restart. */
  ttlMs?: number;
}

/**
 * Flat file-system API with three storage tiers. All methods require
 * `allowDangerous` on the script. `temp*` methods additionally require the
 * `ephemeral_storage` permission.
 *
 * - `user*`   — per-user persistent storage (`spindle.userStorage`)
 * - `shared*` — extension-wide persistent storage (`spindle.storage`)
 * - `temp*`   — TTL-bound, quota-managed storage (`spindle.ephemeral`)
 */
export interface FilesAPI {
  // ── User storage (per-user, persistent) ─────────────────────────────────
  /** Read a file from per-user storage as UTF-8 text. */
  userRead(path: string): Promise<string>;
  /** Write UTF-8 text to per-user storage (creates directories as needed). */
  userWrite(path: string, data: string): Promise<void>;
  /** Delete a file from per-user storage. */
  userDelete(path: string): Promise<void>;
  /** Check if a path exists in per-user storage. */
  userExists(path: string): Promise<boolean>;
  /** List files in per-user storage, optionally under a prefix. */
  userList(prefix?: string): Promise<string[]>;
  /** Create a directory in per-user storage. */
  userMkdir(path: string): Promise<void>;

  // ── Shared storage (extension-wide, persistent) ──────────────────────────
  /** Read a file from extension-wide shared storage as UTF-8 text. */
  sharedRead(path: string): Promise<string>;
  /** Write UTF-8 text to extension-wide shared storage (creates directories as needed). */
  sharedWrite(path: string, data: string): Promise<void>;
  /** Delete a file from extension-wide shared storage. */
  sharedDelete(path: string): Promise<void>;
  /** Check if a path exists in extension-wide shared storage. */
  sharedExists(path: string): Promise<boolean>;
  /** List files in extension-wide shared storage, optionally under a prefix. */
  sharedList(prefix?: string): Promise<string[]>;
  /** Get file metadata from extension-wide shared storage. */
  sharedStat(path: string): Promise<FileStatResult>;
  /** Create a directory in extension-wide shared storage. */
  sharedMkdir(path: string): Promise<void>;
  /** Move or rename a file in extension-wide shared storage. */
  sharedMove(from: string, to: string): Promise<void>;

  // ── Temp storage (ephemeral, TTL-bound) ──────────────────────────────────
  /** Read a file from ephemeral storage as UTF-8 text. Requires ephemeral_storage permission. */
  tempRead(path: string): Promise<string>;
  /** Write UTF-8 text to ephemeral storage. Requires ephemeral_storage permission. */
  tempWrite(path: string, data: string, options?: TempWriteOptions): Promise<void>;
  /** Delete a file from ephemeral storage. Requires ephemeral_storage permission. */
  tempDelete(path: string): Promise<void>;
  /** List files in ephemeral storage, optionally under a prefix. Requires ephemeral_storage permission. */
  tempList(prefix?: string): Promise<string[]>;
  /** Get file metadata from ephemeral storage (includes expiration). Requires ephemeral_storage permission. */
  tempStat(path: string): Promise<TempStatResult>;
  /** Remove all expired ephemeral files. Returns count of files removed. Requires ephemeral_storage permission. */
  tempClearExpired(): Promise<number>;
}

// ─── Enclave API ──────────────────────────────────────────────────────────────

/**
 * AES-256-GCM encrypted per-user secret storage for API keys, OAuth tokens,
 * and other sensitive credentials. All methods require `allowDangerous`.
 *
 * Keys are namespaced as `spindle:{identifier}:{key}` — extensions cannot read
 * each other's secrets. `list()` returns bare key names without the prefix.
 *
 * Key constraints:  alphanumeric + `_`, `-`, `.` characters, 1–128 chars.
 * Value constraints: printable ASCII only, max 64 KB.
 */
export interface EnclaveAPI {
  /**
   * Store or overwrite an encrypted secret.
   * @example
   * await api.enclave.put('api_key', 'sk-...');
   */
  put(key: string, value: string): Promise<void>;

  /**
   * Retrieve a decrypted secret, or `null` if the key is not found.
   * @example
   * const key = await api.enclave.get('api_key');
   * if (key) { ... }
   */
  get(key: string): Promise<string | null>;

  /**
   * Delete a secret. Returns `true` if the key existed, `false` if not found.
   */
  delete(key: string): Promise<boolean>;

  /**
   * Check whether a secret exists without decrypting it.
   * More efficient than `get()` when you only need to check presence.
   */
  has(key: string): Promise<boolean>;

  /**
   * List all secret keys for this user and extension.
   * Returns bare key names (without the namespace prefix).
   */
  list(): Promise<string[]>;
}

// ─── Characters API ───────────────────────────────────────────────────────────

/**
 * A character card as exposed to scripts.
 * Maps directly to CharacterDTO from lumiverse-spindle-types.
 */
export interface Character {
  id: string;
  name: string;
  description: string;
  personality: string;
  scenario: string;
  /** First message / greeting */
  firstMessage: string;
  mesExample: string;
  creatorNotes: string;
  systemPrompt: string;
  postHistoryInstructions: string;
  tags: string[];
  alternateGreetings: string[];
  creator: string;
  imageId: string | null;
  /** World book IDs attached to this character. */
  worldBookIds: string[];
  /**
   * Raw extensions blob — a free-form map of namespaced keys for extension-
   * specific state attached directly to the character row. Complements the
   * `extra` bag on chat messages: that one is per-message, this one is
   * per-character. Reads return the full object (host no longer redacts as
   * of spindle-types 0.4.39).
   *
   * **Best practices:**
   *  - **Namespace your keys.** Use a unique prefix (your script id, or a
   *    reverse-DNS-style identifier) to avoid collisions with other extensions
   *    or future Lumiverse features. Lumiverse-internal state (world books,
   *    expressions, alternate fields) lives at host-reserved keys that
   *    aren't namespaced via the script-id convention; reading any of those
   *    is fine but writing to them is not advised.
   *  - **Keep values JSON-serializable.** The blob persists as JSON in the
   *    database.
   *
   * Writes go through `update({ extensions: { 'your-key': value } })` and
   * shallow-merge into the existing object (top-level keys you provide
   * overwrite; omitted keys are preserved). Nested objects are replaced
   * wholesale at the top level, NOT recursively merged — read–modify–write
   * inside your script if you need to merge a sub-tree.
   */
  extensions: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

export interface CharacterCreateInput {
  name: string;
  description?: string;
  personality?: string;
  scenario?: string;
  firstMessage?: string;
  mesExample?: string;
  creatorNotes?: string;
  systemPrompt?: string;
  postHistoryInstructions?: string;
  tags?: string[];
  alternateGreetings?: string[];
  creator?: string;
  /** Replace the character's world book attachments. Pass [] to detach all. Omit to leave unchanged. */
  worldBookIds?: string[];
  /**
   * Initial extension data to seed the character with on creation. See
   * `Character.extensions` for the namespacing + JSON-serialization
   * conventions; the same shallow-merge rules apply on subsequent updates.
   */
  extensions?: Record<string, unknown>;
}

export interface CharacterUpdateInput extends Partial<CharacterCreateInput> {}

/** Payload for `api.characters.setAvatar()`. */
export interface CharacterAvatarUpload {
  /**
   * Raw avatar image bytes. Scripts can source these from `api.utils.http.*`,
   * `api.files.*`, `api.enclave.*`, or any other byte-producing path.
   */
  data: Uint8Array;
  /** Optional filename — preserves the file extension when stored. */
  filename?: string;
  /** Optional content type. Defaults to `image/png` on the host side. */
  mimeType?: string;
}

export interface CharactersAPI {
  /** List characters (paginated). Requires characters permission. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Character[]; total: number }>;
  /** Get a character by ID. Returns null if not found. Requires characters permission. */
  get(id: string): Promise<Character | null>;
  /**
   * Find the first character whose name exactly matches `name` (case-sensitive).
   * Scans all pages — unlike calling `list()` manually, this never misses
   * characters that appear on later pages.
   * Returns `null` if no character has that name.
   * Character names are not unique in Lumiverse; the first match is returned.
   * Requires characters permission.
   */
  getByName(name: string): Promise<Character | null>;
  /** Create a new character. Requires characters permission. */
  create(input: CharacterCreateInput): Promise<Character>;
  /**
   * Replace a character's avatar image. Accepts raw bytes; the host handles
   * storage and image-ID assignment. Returns the updated character record.
   * Useful for scripts that generate avatars (image-gen integrations), fetch
   * them from external sources, or bulk-apply from local storage.
   * Requires characters permission.
   */
  setAvatar(id: string, avatar: CharacterAvatarUpload): Promise<Character>;
  /** Update a character. Requires characters permission. */
  update(id: string, input: CharacterUpdateInput): Promise<Character>;
  /** Delete a character. Returns true if deleted. Requires characters permission. */
  delete(id: string): Promise<boolean>;
}

// ─── Chat Session API ─────────────────────────────────────────────────────────
// (Separate from ChatAPI which handles individual messages within a chat.)

/**
 * A chat session entity.
 * Maps directly to ChatDTO from lumiverse-spindle-types.
 */
export interface ChatSession {
  id: string;
  characterId: string;
  name: string;
  metadata: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

export interface ChatSessionUpdateInput {
  name?: string;
  metadata?: Record<string, unknown>;
}

/** A single long-term memory chunk retrieved via vector search. */
export interface ChatMemoryChunk {
  /** The chunk text (concatenated messages from a conversation segment). */
  content: string;
  /** Cosine similarity score (lower = more similar). */
  score: number;
  /** Chunk metadata (may include startIndex, endIndex, etc.). */
  metadata: Record<string, unknown>;
}

/** Result of a chat memory vector search. */
export interface ChatMemoryResult {
  chunks: ChatMemoryChunk[];
  /** Pre-formatted output using the user's memory template settings. Ready to inject. */
  formatted: string;
  count: number;
  /** Whether chat memory is enabled (requires embedding config + vectorized messages). */
  enabled: boolean;
  queryPreview: string;
  settingsSource: 'global' | 'per_chat';
  chunksAvailable: number;
  /** Chunks awaiting vectorization. If > 0, results may be incomplete. */
  chunksPending: number;
}

export interface ChatsAPI {
  /** List chat sessions, optionally filtered by character. Requires chats permission. */
  list(options?: { characterId?: string; limit?: number; offset?: number }): Promise<{ data: ChatSession[]; total: number }>;
  /** Get a chat session by ID. Returns null if not found. Requires chats permission. */
  get(id: string): Promise<ChatSession | null>;
  /** Get the currently active chat session. Returns null if none is open. Requires chats permission. */
  getActive(): Promise<ChatSession | null>;
  /** Update a chat session's name or metadata. Requires chats permission. */
  update(id: string, input: ChatSessionUpdateInput): Promise<ChatSession>;
  /** Delete a chat session and all its messages. Returns true if deleted. Requires chats permission. */
  delete(id: string): Promise<boolean>;
  /**
   * Retrieve long-term memory chunks for a chat via vector search — the same
   * semantic search used by the `{{memories}}` macro during prompt assembly.
   * Falls back to the active chat if chatId is not provided.
   * Returns `{ enabled: false }` without error if memory is not configured.
   * Requires chats permission.
   */
  getMemories(chatId?: string, options?: { topK?: number }): Promise<ChatMemoryResult>;
}

// ─── WorldInfo API ────────────────────────────────────────────────────────────

/** A world book / lorebook header. Maps to WorldBookDTO. */
export interface WorldInfo {
  id: string;
  name: string;
  description: string;
  metadata: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

export interface WorldInfoCreateInput {
  name: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface WorldInfoUpdateInput {
  name?: string;
  description?: string;
  metadata?: Record<string, unknown>;
}

/** A world book entry (lorebook entry). Maps to WorldBookEntryDTO. */
export interface WorldInfoEntry {
  id: string;
  worldBookId: string;
  uid: string;
  key: string[];
  keysecondary: string[];
  content: string;
  comment: string;
  position: number;
  depth: number;
  role: string | null;
  orderValue: number;
  selective: boolean;
  constant: boolean;
  disabled: boolean;
  groupName: string;
  groupOverride: boolean;
  groupWeight: number;
  probability: number;
  scanDepth: number | null;
  caseSensitive: boolean;
  matchWholeWords: boolean;
  automationId: string | null;
  useRegex: boolean;
  preventRecursion: boolean;
  excludeRecursion: boolean;
  delayUntilRecursion: boolean;
  priority: number;
  sticky: number;
  cooldown: number;
  delay: number;
  /** 0 = AND, 1 = NOT, 2 = OR for secondary key matching */
  selectiveLogic: number;
  useProbability: boolean;
  vectorized: boolean;
  extensions: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

/** Input for creating or updating a world book entry. All fields are optional. */
export interface WorldInfoEntryInput {
  key?: string[];
  keysecondary?: string[];
  content?: string;
  comment?: string;
  /** Injection position: 0=WI Before, 1=WI After, 4=at depth */
  position?: number;
  depth?: number;
  role?: string;
  orderValue?: number;
  selective?: boolean;
  constant?: boolean;
  disabled?: boolean;
  groupName?: string;
  groupOverride?: boolean;
  groupWeight?: number;
  probability?: number;
  scanDepth?: number;
  caseSensitive?: boolean;
  matchWholeWords?: boolean;
  automationId?: string;
  useRegex?: boolean;
  preventRecursion?: boolean;
  excludeRecursion?: boolean;
  delayUntilRecursion?: boolean;
  priority?: number;
  sticky?: number;
  cooldown?: number;
  delay?: number;
  selectiveLogic?: number;
  useProbability?: boolean;
  vectorized?: boolean;
  extensions?: Record<string, unknown>;
}

// ─── Personas API ────────────────────────────────────────────────────────────

/** A user persona (identity profile). Maps to PersonaDTO. */
export interface Persona {
  id: string;
  name: string;
  /** Short tagline displayed in the persona picker. */
  title: string;
  description: string;
  /** Avatar image ID (use the Images API to fetch). Null if no avatar set. */
  imageId: string | null;
  /** ID of the world book attached to this persona. Null if none. */
  attachedWorldBookId: string | null;
  /** Organisational folder label. */
  folder: string;
  isDefault: boolean;
  /** Subjective pronoun (e.g. "he", "she", "they"). Optional. */
  subjectivePronoun?: string;
  /** Objective pronoun (e.g. "him", "her", "them"). Optional. */
  objectivePronoun?: string;
  /** Possessive pronoun (e.g. "his", "her", "their"). Optional. */
  possessivePronoun?: string;
  metadata: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

export interface PersonaCreateInput {
  name: string;
  title?: string;
  description?: string;
  folder?: string;
  /** Set as the user's default persona (clears the previous default). */
  isDefault?: boolean;
  /** Attach a world book by ID. */
  attachedWorldBookId?: string;
  /** Subjective pronoun (e.g. "he", "she", "they"). */
  subjectivePronoun?: string;
  /** Objective pronoun (e.g. "him", "her", "them"). */
  objectivePronoun?: string;
  /** Possessive pronoun (e.g. "his", "her", "their"). */
  possessivePronoun?: string;
  metadata?: Record<string, unknown>;
}

/** All fields optional — only provided fields are updated. */
export interface PersonaUpdateInput {
  name?: string;
  title?: string;
  description?: string;
  folder?: string;
  isDefault?: boolean;
  attachedWorldBookId?: string;
  subjectivePronoun?: string;
  objectivePronoun?: string;
  possessivePronoun?: string;
  metadata?: Record<string, unknown>;
}

export interface PersonasAPI {
  /** List personas. Requires personas permission. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Persona[]; total: number }>;
  /** Get a persona by ID. Returns null if not found. Requires personas permission. */
  get(personaId: string): Promise<Persona | null>;
  /** Get the user's default persona (is_default = true). Returns null if none set. Requires personas permission. */
  getDefault(): Promise<Persona | null>;
  /** Get the currently active persona. Returns null if none is active. Requires personas permission. */
  getActive(): Promise<Persona | null>;
  /** Create a persona. Requires personas permission. */
  create(input: PersonaCreateInput): Promise<Persona>;
  /** Update a persona. Requires personas permission. */
  update(personaId: string, input: PersonaUpdateInput): Promise<Persona>;
  /** Delete a persona. Returns true if deleted. Requires personas permission. */
  delete(personaId: string): Promise<boolean>;
  /**
   * Switch the active persona. Pass null to deactivate.
   * Emits a SETTINGS_UPDATED event so the frontend updates immediately.
   * Requires personas permission.
   */
  switchActive(personaId: string | null): Promise<void>;
  /**
   * Get the world book attached to a persona. Returns null if none is attached.
   * Only requires personas permission (not world_books).
   */
  getWorldBook(personaId: string): Promise<WorldInfo | null>;
}

// ─── Databanks API ───────────────────────────────────────────────────────────

/**
 * Activation scope for a databank — controls when Lumiverse treats it as
 * available during retrieval.
 *
 * - `'global'`     — available everywhere for the active user.
 * - `'character'`  — active when the matching character is in context.
 * - `'chat'`       — active when the matching chat is in context.
 */
export type DatabankScope = 'global' | 'character' | 'chat';

/**
 * Lifecycle status of an uploaded document. Documents move through
 * `pending` → `processing` → `ready` (or `error` on failure). Use
 * `documents.waitUntilReady()` rather than polling manually.
 */
export type DatabankDocumentStatus = 'pending' | 'processing' | 'ready' | 'error';

/** A databank — a vectorised collection of documents. Maps to DatabankDTO. */
export interface DatabankInfo {
  id: string;
  name: string;
  description: string;
  /** Activation scope: 'global', 'character', or 'chat'. */
  scope: DatabankScope;
  /** Required for `character` and `chat` scopes; null for `global`. */
  scopeId: string | null;
  enabled: boolean;
  metadata: Record<string, unknown>;
  /** Number of documents in the bank. May be omitted on bulk list responses. */
  documentCount?: number;
  createdAt: number;
  updatedAt: number;
}

/** A single document inside a databank. Maps to DatabankDocumentDTO. */
export interface DatabankDocumentInfo {
  id: string;
  databankId: string;
  name: string;
  /** URL-safe form of the display name (auto-derived). */
  slug: string;
  mimeType: string;
  fileSize: number;
  contentHash: string;
  totalChunks: number;
  status: DatabankDocumentStatus;
  /** Populated when `status === 'error'`; null otherwise. */
  errorMessage: string | null;
  metadata: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

export interface DatabankCreateInput {
  name: string;
  description?: string;
  scope: DatabankScope;
  /** Required for `character` and `chat` scopes; omit for `global`. */
  scopeId?: string | null;
}

/** All fields optional. `scope` cannot be changed after creation. */
export interface DatabankUpdateInput {
  name?: string;
  description?: string;
  enabled?: boolean;
}

export interface DatabankDocumentCreateInput {
  /**
   * Document content. `string` values are UTF-8 encoded internally; use
   * `Uint8Array` directly when the source is already binary.
   *
   * Lumiverse only accepts text-oriented uploads: .txt, .md, .markdown,
   * .csv, .tsv, .json, .xml, .html, .htm, .yaml, .yml, .log, .rst, .rtf.
   * Maximum size: 10 MB.
   */
  data: string | Uint8Array;
  /** Original filename, including extension. */
  filename: string;
  /** Optional MIME type recorded on the document. */
  mimeType?: string;
  /** Display name override. Defaults to `filename` minus the extension. */
  name?: string;
}

export interface DatabankDocumentUpdateInput {
  /** New display name (the URL-safe slug is regenerated automatically). */
  name: string;
}

/**
 * Options for `documents.waitUntilReady()` — a polling helper that
 * resolves once a document reaches `'ready'` status.
 */
export interface DatabankWaitUntilReadyOptions {
  /**
   * Maximum total time to wait, in milliseconds. Default: 60_000 (60s).
   * Throws on timeout.
   */
  timeoutMs?: number;
  /**
   * Interval between status polls, in milliseconds. Default: 500ms.
   */
  pollIntervalMs?: number;
}

export interface DatabanksAPI {
  /** List databanks, optionally filtered by scope. Requires databanks permission. */
  list(options?: {
    limit?: number;
    offset?: number;
    /** Filter by scope. */
    scope?: DatabankScope;
    /** Required when filtering by `'character'` or `'chat'` scope. */
    scopeId?: string | null;
  }): Promise<{ data: DatabankInfo[]; total: number }>;

  /** Get a databank by ID. Returns null if not found. Requires databanks permission. */
  get(databankId: string): Promise<DatabankInfo | null>;

  /**
   * Find a databank by display name. Returns the first match within the
   * given scope (or the first match across ALL banks if scope is omitted).
   * Returns null if not found. Convenience wrapper over `list()` —
   * O(banks) on the user's databank count. Requires databanks permission.
   */
  findByName(name: string, scope?: DatabankScope): Promise<DatabankInfo | null>;

  /**
   * Create a databank. `name` and `scope` are required; `scopeId` is
   * required for `'character'` and `'chat'` scopes.
   * Requires databanks permission.
   */
  create(input: DatabankCreateInput): Promise<DatabankInfo>;

  /** Update a databank. Scope cannot be changed. Requires databanks permission. */
  update(databankId: string, input: DatabankUpdateInput): Promise<DatabankInfo>;

  /**
   * Delete a databank and all of its documents and vectors.
   * Returns true if deleted. Requires databanks permission.
   */
  delete(databankId: string): Promise<boolean>;

  documents: {
    /** List documents in a databank. Requires databanks permission. */
    list(databankId: string, options?: { limit?: number; offset?: number }): Promise<{ data: DatabankDocumentInfo[]; total: number }>;

    /** Get a document by ID. Returns null if not found. Requires databanks permission. */
    get(documentId: string): Promise<DatabankDocumentInfo | null>;

    /**
     * Find a document by display name within a databank. Returns the
     * first match. Returns null if not found. Convenience wrapper over
     * `list()` — O(documents-in-bank). Requires databanks permission.
     */
    findByName(databankId: string, name: string): Promise<DatabankDocumentInfo | null>;

    /**
     * Upload a document. Returns immediately with a `'pending'`-status
     * record; processing happens asynchronously. Use `waitUntilReady()` or
     * poll `get()` to detect completion. Requires databanks permission.
     */
    create(databankId: string, input: DatabankDocumentCreateInput): Promise<DatabankDocumentInfo>;

    /** Rename a document (also regenerates the slug). Requires databanks permission. */
    update(documentId: string, input: DatabankDocumentUpdateInput): Promise<DatabankDocumentInfo>;

    /** Delete a document, its parsed chunks, and its vectors. Returns true if deleted. Requires databanks permission. */
    delete(documentId: string): Promise<boolean>;

    /**
     * Get the parsed plain-text content of a document. Returns null when
     * the document doesn't exist OR its status is not yet `'ready'` (still
     * pending/processing or it failed before chunks were created).
     * Requires databanks permission.
     */
    getContent(documentId: string): Promise<{ content: string } | null>;

    /**
     * Reset a document to `'pending'`, drop its existing vectors, and
     * queue it for full reingestion. Useful after embedding changes or
     * recovering from a prior ingestion failure. Requires databanks permission.
     */
    reprocess(documentId: string): Promise<{ success: true; status: 'processing' }>;

    /**
     * Poll a document until its status is `'ready'`. Resolves with the
     * up-to-date `DatabankDocumentInfo`. Throws if the document reaches
     * `'error'` status, the timeout elapses, or the document is deleted
     * mid-poll. Requires databanks permission.
     *
     * Defaults: timeoutMs 60_000, pollIntervalMs 500.
     */
    waitUntilReady(documentId: string, options?: DatabankWaitUntilReadyOptions): Promise<DatabankDocumentInfo>;
  };
}

/**
 * A reference to a world book — either a UUID (e.g. `"a1b2c3d4-..."`) or the
 * world book's human-readable name (e.g. `"My Character Lore"`).
 * The API resolves names to IDs automatically on first use and caches the
 * result for the lifetime of the script execution.
 */
export type WorldInfoRef = string;

/**
 * A world info entry that is currently activated for a chat.
 * Extends WorldInfoEntry with activation metadata (source and optional vector
 * similarity score) from the Lumiverse activation pipeline.
 */
export type ActivatedWorldInfoEntry = WorldInfoEntry & {
  /** How the entry was activated — via keyword matching or vector similarity. */
  source: 'keyword' | 'vector';
  /**
   * For vector-activated entries: the cosine similarity score (lower = more
   * similar). Not present for keyword-activated entries.
   */
  score?: number;
};

// ─── Regex Scripts API ──────────────────────────────────────────────────────
//
// Full CRUD over the user's regex find/replace scripts plus a context-aware
// `getActive` resolver. Maps onto Lumiverse's `spindle.regex_scripts.*`
// surface (lumiverse-spindle-types ≥0.4.62 / Lumiverse ≥0.9.7). Requires
// the `regex_scripts` permission.
//
// Targets and where they fire:
//   - `'prompt'`   — runs during prompt assembly, against each message
//     before it goes to the LLM. Does not modify stored content.
//   - `'response'` — runs once after the LLM stream ends, against the
//     full assistant message. The result is written back to chat storage.
//   - `'display'`  — runs per render in the frontend. Does not modify
//     stored content.

/** Which message roles a regex rule applies to. */
export type RegexPlacement = 'user_input' | 'ai_output' | 'world_info' | 'reasoning';

/** Scope tier of a regex rule. */
export type RegexScope = 'global' | 'character' | 'chat';

/** Execution-target tier of a regex rule. */
export type RegexTarget = 'prompt' | 'response' | 'display';

/** How CBS / `{{...}}` macros inside a rule's pattern resolve. */
export type RegexMacroMode = 'none' | 'raw' | 'escaped';

/**
 * Snapshot of a regex script. Returned by `list()`, `get()`, `findByName()`,
 * `getActive()`, `create()`, and `update()`. Field names are camelCase
 * translations of the underlying snake_case `RegexScriptDTO`.
 */
export interface RegexScriptInfo {
  /** Unique row id. */
  id: string;
  /** Display name shown in the regex panel. */
  name: string;
  /**
   * Stable, normalized identifier (lowercase + underscores) for cross-instance
   * references. Distinct from `id`; `id` is generated at row creation, while
   * `scriptId` is the user-controllable stable handle.
   */
  scriptId: string;
  /** Pattern compiled with the JavaScript regex engine. */
  findRegex: string;
  /** Replacement template. Supports `$1` / `$&` / `$<name>` capture references. */
  replaceString: string;
  /** Any subset of `gimsu`. */
  flags: string;
  /** Which message roles the rule applies to. */
  placement: RegexPlacement[];
  /** Scope tier. Default `'global'`. */
  scope: RegexScope;
  /** Required when `scope` is non-global; null otherwise. */
  scopeId: string | null;
  /** When the rule fires. */
  target: RegexTarget;
  /** Lower bound on chat-history depth (0 = latest), or null for unbounded. */
  minDepth: number | null;
  /** Upper bound on chat-history depth, or null for unbounded. */
  maxDepth: number | null;
  /** Additional substrings stripped from output after the regex pass. */
  trimStrings: string[];
  /** Re-run the rule when a message is edited. */
  runOnEdit: boolean;
  /** How CBS / `{{...}}` macros inside the rule resolve. */
  substituteMacros: RegexMacroMode;
  /** When true, the rule is registered but not active. */
  disabled: boolean;
  /** Lower values run earlier within the same scope tier. */
  sortOrder: number;
  /** Free-form note. */
  description: string;
  /** Folder label shown in the regex panel. */
  folder: string;
  /** Arbitrary metadata namespaced to the creating extension. */
  metadata: Record<string, unknown>;
  /** Unix epoch seconds. */
  createdAt: number;
  /** Unix epoch seconds. */
  updatedAt: number;
}

/** Filter options for `RegexScriptsAPI.list()`. */
export interface RegexScriptListOptions {
  /** Filter to a single scope. Omit to include all scopes. */
  scope?: RegexScope;
  /**
   * Required when `scope` is `character` or `chat` to narrow to a single
   * entity. Ignored otherwise.
   */
  scopeId?: string;
  /** Filter by execution target. */
  target?: RegexTarget;
  /** Page size. Default 50, max 200. */
  limit?: number;
  /** Pagination offset. */
  offset?: number;
}

/** Required + optional fields for `RegexScriptsAPI.getActive()`. */
export interface RegexScriptActiveOptions {
  /** **Required.** The execution target to resolve for. */
  target: RegexTarget;
  /** Include character-scoped rules attached to this character. */
  characterId?: string;
  /** Include chat-scoped rules attached to this chat. */
  chatId?: string;
}

/**
 * Fields accepted by `RegexScriptsAPI.create()`. `name` and `findRegex`
 * are required; everything else gets host-side defaults if omitted.
 */
export interface RegexScriptCreateInput {
  name: string;
  findRegex: string;
  replaceString?: string;
  flags?: string;
  placement?: RegexPlacement[];
  scope?: RegexScope;
  scopeId?: string | null;
  target?: RegexTarget;
  minDepth?: number | null;
  maxDepth?: number | null;
  trimStrings?: string[];
  runOnEdit?: boolean;
  substituteMacros?: RegexMacroMode;
  disabled?: boolean;
  sortOrder?: number;
  description?: string;
  folder?: string;
  metadata?: Record<string, unknown>;
  /** Stable identifier. Normalized to lowercase + underscores by the host. */
  scriptId?: string;
}

/** All fields optional. Same shape as `RegexScriptCreateInput`. */
export type RegexScriptUpdateInput = Partial<RegexScriptCreateInput>;

/**
 * `api.regexScripts.*` — full CRUD over the user's regex find/replace
 * scripts. Requires the `regex_scripts` permission.
 *
 * Lifecycle events: scripts can subscribe to `REGEX_SCRIPT_CHANGED` and
 * `REGEX_SCRIPT_DELETED` via the `@triggers` directive to keep
 * extension-side caches in sync (e.g. invalidate a cached `getActive`
 * result on either event).
 */
export interface RegexScriptsAPI {
  /**
   * List regex scripts with strict scope filtering. Default page size 50,
   * max 200. Requires `regex_scripts` permission.
   */
  list(options?: RegexScriptListOptions): Promise<{ data: RegexScriptInfo[]; total: number }>;

  /** Get a regex script by id. Returns null if not found. Requires `regex_scripts` permission. */
  get(scriptId: string): Promise<RegexScriptInfo | null>;

  /**
   * Find a regex script by display name. Convenience wrapper over `list()`
   * — pages through and applies the name filter locally. O(scripts) on
   * worst-case account size. Requires `regex_scripts` permission.
   */
  findByName(name: string, scope?: RegexScope): Promise<RegexScriptInfo | null>;

  /**
   * Resolve the enabled scripts that would actually fire for the given
   * target + character/chat context, merged across global + character +
   * chat scopes and ordered by scope tier then `sortOrder`. Mirrors the
   * resolution Lumiverse uses internally during a generation. Requires
   * `regex_scripts` permission.
   */
  getActive(options: RegexScriptActiveOptions): Promise<RegexScriptInfo[]>;

  /** Create a new regex script. `name` and `findRegex` are required. Requires `regex_scripts` permission. */
  create(input: RegexScriptCreateInput): Promise<RegexScriptInfo>;

  /** Update a regex script. All fields optional. Throws if the script is not found. Requires `regex_scripts` permission. */
  update(scriptId: string, input: RegexScriptUpdateInput): Promise<RegexScriptInfo>;

  /** Delete a regex script. Returns true if the row was deleted. Requires `regex_scripts` permission. */
  delete(scriptId: string): Promise<boolean>;
}

// ─── World Info Interceptor (api.worldInfo.registerInterceptor) ────────────
//
// Runs BEFORE world info activation. Receives the candidate entries + chat
// state, returns disable / enable / force / mutate decisions for those
// entries. Use cases: turn-based gates ("activate this entry only after
// turn 5"), sticky flags, external-state lookups, retrieval-driven content
// rewrites — anything the stored-fields-only WI activation rules can't
// express.
//
// Permission: rides on the existing `generation` gate (same as other
// interceptor-family hooks).

/**
 * One world info entry exposed to a `registerInterceptor` handler. Subset
 * of `WorldInfoEntry` covering the fields the interceptor needs to inspect
 * for activation gating.
 */
export interface WorldInfoInterceptorEntry {
  readonly id: string;
  readonly worldBookId: string;
  readonly comment: string;
  readonly disabled: boolean;
  readonly constant: boolean;
  readonly extensions: Record<string, unknown>;
  readonly key: readonly string[];
  readonly keysecondary: readonly string[];
  readonly position: number;
  readonly depth: number;
  readonly priority: number;
  readonly probability: number;
  readonly useProbability: boolean;
  readonly content: string;
}

/** One chat message exposed to a `registerInterceptor` handler. */
export interface WorldInfoInterceptorMessage {
  readonly role: 'system' | 'user' | 'assistant';
  readonly content: string;
}

/**
 * Context passed to a `registerInterceptor` handler. Read-only. To
 * persist cross-turn state, write to chat metadata via
 * `api.chats.update(chatId, { metadata: ... })` rather than mutating
 * `chatMetadata` here (it's a snapshot).
 */
export interface WorldInfoInterceptorCtx {
  readonly chatId: string;
  readonly characterId: string;
  /** Owning user id. Pass to operator-scoped Spindle calls. */
  readonly userId?: string;
  readonly entries: readonly WorldInfoInterceptorEntry[];
  readonly messages: readonly WorldInfoInterceptorMessage[];
  readonly chatTurn: number;
  readonly chatMetadata: Record<string, unknown>;
}

/** Per-entry content override emitted by a `registerInterceptor` handler. */
export interface WorldInfoInterceptorMutation {
  readonly id: string;
  readonly content: string;
}

/**
 * Return value of a `registerInterceptor` handler. All four lists are
 * independent; return `void` (or omit all four arrays) to pass through.
 *
 * Vote-off precedence: once any handler in the chain votes `disabled`
 * for an entry id, no later handler's `enabled` or `forced` vote can
 * revive it. To force a stored-disabled entry, vote BOTH `enabled` AND
 * `forced` from the same (or earlier) handler.
 *
 * `mutated` is last-write-wins per id (later handlers override earlier
 * mutations of the same entry).
 */
export interface WorldInfoInterceptorResult {
  readonly disabled?: readonly string[];
  readonly enabled?: readonly string[];
  readonly forced?: readonly string[];
  readonly mutated?: readonly WorldInfoInterceptorMutation[];
}

/**
 * User-supplied world-info interceptor handler. Sync or async. Returns
 * a partial result patch or `void` to pass through.
 */
export type WorldInfoInterceptorHandler = (
  ctx: WorldInfoInterceptorCtx,
) =>
  | WorldInfoInterceptorResult
  | void
  | Promise<WorldInfoInterceptorResult | void>;

/** Registration options for `api.worldInfo.registerInterceptor`. */
export interface WorldInfoInterceptorOptions {
  /**
   * Stable identifier. Re-registration with the same id replaces the
   * prior entry rather than accumulating. When omitted, an auto-id is
   * assigned (`auto-1`, `auto-2`, …).
   */
  id?: string;
  /**
   * Lower runs first. Default 100. Tie-broken by registration order.
   * Each handler in the chain sees prior handlers' decisions applied
   * to the entries list.
   */
  priority?: number;
  /**
   * Per-invocation soft timeout in ms. Default 2000. The host's outer
   * 10s budget is shared across ALL extensions' interceptors, so each
   * LS-side handler should stay well under it. Slow handlers add
   * visible latency before the LLM call.
   */
  timeoutMs?: number;
}

/** Handle returned from `api.worldInfo.registerInterceptor`. */
export interface WorldInfoInterceptorHandle {
  readonly id: string;
  /** Remove this interceptor. Idempotent on already-removed entries. */
  remove(): void;
}

/** Snapshot for diagnostics surfaces — see `api.worldInfo.listInterceptors()`. */
export interface RegisteredWorldInfoInterceptorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  timeoutMs: number;
}

export interface WorldInfoAPI {
  /** List world books. Requires world_books permission. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: WorldInfo[]; total: number }>;
  /**
   * Get a world book by ID or name. Returns null if not found.
   * Requires world_books permission.
   */
  get(ref: WorldInfoRef): Promise<WorldInfo | null>;
  /** Create a world book. Requires world_books permission. */
  create(input: WorldInfoCreateInput): Promise<WorldInfo>;
  /**
   * Update a world book by ID or name. Requires world_books permission.
   */
  update(ref: WorldInfoRef, input: WorldInfoUpdateInput): Promise<WorldInfo>;
  /**
   * Delete a world book and all its entries by ID or name.
   * Requires world_books permission.
   */
  delete(ref: WorldInfoRef): Promise<boolean>;
  entries: {
    /**
     * List entries in a world book, identified by ID or name.
     * Requires world_books permission.
     */
    list(ref: WorldInfoRef, options?: { limit?: number; offset?: number }): Promise<{ data: WorldInfoEntry[]; total: number }>;
    /** Get a single entry by its entry ID. Returns null if not found. Requires world_books permission. */
    get(entryId: string): Promise<WorldInfoEntry | null>;
    /**
     * Create a new entry in a world book, identified by ID or name.
     * Requires world_books permission.
     */
    create(ref: WorldInfoRef, input: WorldInfoEntryInput): Promise<WorldInfoEntry>;
    /** Update an entry by its entry ID. Requires world_books permission. */
    update(entryId: string, input: WorldInfoEntryInput): Promise<WorldInfoEntry>;
    /** Delete an entry by its entry ID. Returns true if deleted. Requires world_books permission. */
    delete(entryId: string): Promise<boolean>;
    /**
     * Find all entries across ALL world books whose `automationId` starts
     * with the given prefix. Useful for scripts that create entries under
     * their own convention (e.g. `'lumiscript:<scriptId>:'` for managed
     * dynamic entries) and need to enumerate, update, or clean them up.
     *
     * Implementation is O(books × entries-per-book) — each book is listed
     * and each entry is scanned. Acceptable for typical world-book sizes;
     * not recommended for hot-path use. Requires world_books permission.
     *
     * Returns a flat `WorldInfoEntry[]` (not paginated). The `worldBookId`
     * field on each entry identifies which book it belongs to.
     */
    listByAutomationIdPrefix(prefix: string): Promise<WorldInfoEntry[]>;
  };
  /**
   * Get all world info entries that would activate for the current (or specified) chat.
   * Runs the full Lumiverse activation pipeline (keyword matching, selective logic,
   * probability rolls, sticky/cooldown/delay state, group competition, budget enforcement,
   * vector search) and returns full WorldInfoEntry objects enriched with activation metadata.
   *
   * Falls back to the active chat if chatId is not provided.
   * Performs one getActivated call + one entries.get call per activated entry (in parallel).
   * Requires world_books permission.
   */
  getCapturedActive(chatId?: string): Promise<ActivatedWorldInfoEntry[]>;

  /**
   * Register a world-info interceptor — a handler that runs BEFORE world
   * info activation, receives the candidate entries + chat state, and
   * returns disable / enable / force / mutate decisions. Requires
   * `generation` permission (same gate as `api.llm.*` and the macro/
   * content-processor interceptors).
   *
   * Multiple handlers compose: each runs in priority order (lower first;
   * tie-broken by registration order) and sees prior handlers' decisions
   * applied to the entry list. Vote-off precedence on `disabled` —
   * once any handler in the chain votes disabled for an id, no later
   * `enabled` or `forced` vote can revive it.
   *
   * **Critical perf**: the chain fires before activation, which fires
   * before prompt assembly, which fires before the LLM call. Slow
   * handlers add visible latency before the first streamed token. Each
   * invocation has a 2s soft timeout (configurable via `options.timeoutMs`).
   * DO NOT call `api.llm.*` or `api.utils.http.*` from a handler — pre-
   * compute via a trigger handler, store in `api.db.*`, read here.
   *
   * @example  turn-based gate
   * api.worldInfo.registerInterceptor(async (ctx) => {
   *   if (ctx.chatTurn < 5) {
   *     // Suppress all "early-game-only" entries until turn 5
   *     const disabled = ctx.entries
   *       .filter(e => (e.extensions as any)?.gate === 'early-game-only')
   *       .map(e => e.id);
   *     return { disabled };
   *   }
   * });
   *
   * @example  content rewrite from extension state
   * api.worldInfo.registerInterceptor(async (ctx) => {
   *   const overrides = await api.db.collection('wi-overrides').find({});
   *   return {
   *     mutated: overrides.map(o => ({ id: o.entryId, content: o.content })),
   *   };
   * }, { priority: 50 });
   */
  registerInterceptor(
    handler: WorldInfoInterceptorHandler,
    options?: WorldInfoInterceptorOptions,
  ): WorldInfoInterceptorHandle;

  /**
   * List all currently-registered world-info interceptors across all
   * scripts. Diagnostic surface — useful for the Status panel and
   * extension-author debugging. No permission required (read-only
   * inspection of LS-side state).
   */
  listInterceptors(): RegisteredWorldInfoInterceptorInfo[];
}

// ─── Script namespace (inside script body) ────────────────────────────────────

// ─── UI API ────────────────────────────────────────────────────────────────────────

export type UINotificationType = 'info' | 'success' | 'warning' | 'error';

// ─── Modal item types (mirrors SpindleModalItemDTO) ──────────────────────────

/**
 * A single item in a `showModal()` content list.
 * Items are rendered sequentially in the modal body using the system theme.
 */
export type ModalItem =
  /** A block of text. `muted: true` renders in the dim/muted text colour. */
  | { type: 'text'; content: string; muted?: boolean }
  /** A horizontal divider line between sections. */
  | { type: 'divider' }
  /** A label–value pair in a horizontal row — useful for metadata and stats. */
  | { type: 'key_value'; label: string; value: string }
  /** A section heading within the modal body. */
  | { type: 'heading'; content: string }
  /** A themed card container that groups child items (one level deep recommended). */
  | { type: 'card'; items: ModalItem[] };

/** Options for `api.ui.showModal()`. */
export interface ShowModalOptions {
  /** Modal header title. Required. */
  title: string;
  /** Width in pixels. Default: 420. Clamped to viewport. */
  width?: number;
  /** Maximum height in pixels. Default: 520. Clamped to viewport. */
  maxHeight?: number;
  /**
   * When `true`, the user cannot dismiss the modal — the close button, Escape key, and
   * backdrop click are all disabled. The modal can only be closed programmatically
   * (`api.ui.closeModal()`, pending platform MR) or via extension cleanup.
   * Default: `false`.
   */
  persistent?: boolean;
  /**
   * @internal — used by the script-runner child runtime to thread a
   * child-generated openRequestId through the canonical impl so the
   * sync-shaped `ModalHandle` returned to user code carries an id that
   * matches the parent-side stored handle. Do not set this from user code.
   *
   * When omitted (the typical user-code case), the canonical impl
   * generates an id via `crypto.randomUUID()`. Behaviour is identical
   * either way; the field exists purely for the child-runtime IPC bridge.
   */
  openRequestId?: string;
}

/** Result returned when `api.ui.showModal()` resolves. */
export interface ModalResult {
  /**
   * How the modal was dismissed:
   * - `'user'` — close button, backdrop click (when not persistent), or Escape key
   * - `'extension'` — programmatic dismissal
   * - `'cleanup'` — extension was disabled or unloaded while modal was open
   */
  dismissedBy: 'user' | 'extension' | 'cleanup';
}

/**
 * Handle returned by `api.ui.showModal()`.
 *
 * - `result` — awaitable promise that resolves when the modal closes.
 * - `openRequestId` — UUID identifying this modal instance. Immediately available
 *   on the returned handle (not deferred until close).
 * - `close()` — programmatic dismissal. Resolves once the modal has been dismissed.
 */
export interface ModalHandle {
  /** UUID identifying this modal instance. Immediately available on the returned handle. */
  readonly openRequestId: string;
  /** Resolves with the dismissal reason when the modal closes. */
  readonly result: Promise<ModalResult>;
  /** Close the modal programmatically. */
  close(): Promise<void>;
}

// ─── Advanced modal (DOM-owned) ──────────────────────────────────────────────

/**
 * Options for `api.ui.showAdvancedModal()`.
 *
 * Unlike `showModal()`, which renders a structured item list, advanced modals
 * give the extension full control over the body via a `DOMHandle` on the
 * returned handle's `.root` field.
 */
export interface AdvancedModalOptions {
  /** Modal header title. Required. */
  title: string;
  /** Width in pixels. Default: 420 (host). Clamped to viewport by the host. */
  width?: number;
  /** Maximum height in pixels. Default: 520 (host). Clamped to viewport by the host. */
  maxHeight?: number;
  /**
   * When `true`, clicking the backdrop no longer dismisses the modal — the
   * user must use the close button, or the script must call `dismiss()`.
   */
  persistent?: boolean;
  /**
   * @internal — used by the script-runner child runtime (Phase 9d.4.d)
   * to thread child-generated ids through the canonical impl so the
   * sync-shaped `AdvancedModalHandle` returned to user code carries
   * stable ids that match parent-side state. Don't set from user code.
   *
   * When omitted (the typical user-code case), the canonical generates
   * via `crypto.randomUUID()` (modalId) / `nextDOMId('mr')` (rootElementId).
   */
  _modalId?: string;
  /** @internal — see `_modalId`. */
  _rootElementId?: string;
}

/**
 * Why an advanced modal was dismissed.
 *
 * - `'user'` — user clicked the close button, the backdrop, or pressed Escape.
 * - `'script'` — the script called `handle.dismiss()`.
 * - `'teardown'` — the script was disabled or deleted while the modal was open,
 *    and cleanup forced dismissal.
 */
export type AdvancedModalDismissReason = 'user' | 'script' | 'teardown';

/**
 * Handle returned by `api.ui.showAdvancedModal()`.
 *
 * Scripts own the modal body via `root` (a `DOMHandle` bound to the modal's
 * content container). Use the existing `api.ui.dom.*` pattern: call
 * `root.update(html)` to set content, `root.on('click', ...)` to wire events,
 * or delegate to higher-level libraries like `ls:components`.
 *
 * Calling `root.remove()` is discouraged — it removes the content container but
 * leaves the surrounding modal chrome intact. Use `dismiss()` to close the modal.
 */
export interface AdvancedModalHandle {
  /** UUID identifying this modal instance. Available synchronously. */
  readonly modalId: string;
  /**
   * `DOMHandle` bound to the modal's content container.
   *
   * The handle is live the moment `showAdvancedModal` returns — calls are
   * buffered and applied in order once the frontend has mounted the modal.
   */
  readonly root: DOMHandle;
  /**
   * Has the modal been dismissed? Flips to `true` on any dismissal path
   * (user, script, or teardown) — handy inside long-running async work to
   * bail out if the user closed the modal mid-task.
   */
  readonly dismissed: boolean;
  /** Update the modal header title. */
  setTitle(title: string): void;
  /** Close the modal programmatically. Safe to call after dismissal (no-op). */
  dismiss(): void;
  /**
   * Register a handler that fires once when the modal is dismissed.
   * Receives the dismissal reason (`'user' | 'script' | 'teardown'`).
   * Returns an unsubscribe function.
   *
   * If the modal was already dismissed when `onDismiss` is called, the handler
   * fires on the next microtask with the recorded reason.
   */
  onDismiss(handler: (reason: AdvancedModalDismissReason) => void): () => void;
}

// ─── Context menu (request-response) ─────────────────────────────────────────

/** A single entry in `api.ui.showContextMenu(options)`'s items array. */
export interface ContextMenuItem {
  /** Stable key returned when this item is selected. Required. */
  key: string;
  /** Display text. Ignored when `type === 'divider'`. */
  label: string;
  /** Entry type. Default: `'item'`. */
  type?: 'item' | 'divider';
  /** Greyed out and not clickable. Default: `false`. */
  disabled?: boolean;
  /** Rendered in red / danger style. Default: `false`. */
  danger?: boolean;
  /** Highlighted to indicate current selection. Default: `false`. */
  active?: boolean;
}

/** Options for `api.ui.showContextMenu()`. */
export interface ShowContextMenuOptions {
  /** Screen coordinates to anchor the menu. Typically taken from a pointer event. */
  position: { x: number; y: number };
  /** Menu entries. */
  items: ContextMenuItem[];
}

// ─── Input bar actions (lifecycle) ───────────────────────────────────────────

/** Options for `api.ui.registerInputBarAction()`. */
export interface InputBarActionOptions {
  /**
   * Unique identifier within your script. Used by the handle for subsequent
   * `setLabel` / `setSubtitle` / `setEnabled` / `destroy` calls — pick
   * something stable.
   */
  id: string;
  /** Display label shown in the Extras popover row. */
  label: string;
  /**
   * Optional secondary line rendered beneath the label in the Extras
   * popover row. Useful for short status strings ("Last roll: 17"),
   * keyboard shortcuts, or one-line descriptions. Omit (or pass
   * `undefined` via `setSubtitle`) for a single-line row.
   */
  subtitle?: string;
  /** Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14. */
  iconSvg?: string;
  /** URL to an icon image. Takes precedence over `iconSvg` if both are set. */
  iconUrl?: string;
  /** When `false`, the action is hidden from the popover. Default: `true`. */
  enabled?: boolean;
}

/**
 * Handle returned by `api.ui.registerInputBarAction()`.
 *
 * Input bar actions appear inside the **Extras** popover on the chat input
 * bar, visually grouped under a teal-badged header with the extension name.
 * Host-enforced limits: 4 actions per extension, 12 global.
 */
export interface InputBarActionHandle {
  /**
   * The action's identifier — the same `id` passed in `InputBarActionOptions`.
   * Kept on the handle for convenience when dispatching click events or
   * looking up actions from external state.
   */
  readonly actionId: string;
  /** Update the display label. Safe to call after dismissal (no-op). */
  setLabel(label: string): void;
  /**
   * Update (or clear) the secondary line beneath the label. Pass
   * `undefined` to remove a previously-set subtitle and collapse the
   * row back to single-line. Safe to call after `destroy()` (no-op).
   */
  setSubtitle(subtitle?: string): void;
  /**
   * Show or hide the action in the popover. Disabled actions are hidden
   * entirely rather than greyed out. Safe to call after `destroy()` (no-op).
   */
  setEnabled(enabled: boolean): void;
  /**
   * Register a click handler. Multiple handlers are supported — all fire on
   * each click. Returns an unsubscribe function. The Extras popover is
   * automatically closed after a click (host behaviour).
   */
  onClick(handler: () => void): () => void;
  /**
   * Remove the action from the popover and clear all registered click
   * handlers. Idempotent — subsequent calls are no-ops.
   */
  destroy(): void;
}

// ─── Float widgets (lifecycle, DOM-owned) ────────────────────────────────────

/** Options for `api.ui.createFloatWidget()`. */
export interface FloatWidgetOptions {
  /** Widget width in pixels. */
  width: number;
  /** Widget height in pixels. */
  height: number;
  /** Starting position in viewport coordinates. */
  initialPosition?: { x: number; y: number };
  /** Snap to the nearest screen edge after drag. Default: `false`. */
  snapToEdge?: boolean;
  /** Hover tooltip text. */
  tooltip?: string;
  /**
   * Strip the default container chrome (border, background, shadow,
   * border-radius). The script fully owns the visual presentation via
   * `handle.root` content + `api.ui.dom.addStyle`. Default: `false`.
   */
  chromeless?: boolean;
  /**
   * @internal — used by the script-runner child runtime (Phase 9d.4.e-2-a)
   * to thread child-generated ids through the canonical impl so the
   * sync-shaped `FloatWidgetHandle` returned to user code carries
   * stable ids that match parent-side state. Don't set from user code.
   *
   * When omitted (the typical user-code case), the canonical generates
   * via `crypto.randomUUID()` (widgetId) / `nextDOMId('fw')` (rootElementId).
   */
  _widgetId?: string;
  /** @internal — see `_widgetId`. */
  _rootElementId?: string;
}

/**
 * Handle returned by `api.ui.createFloatWidget()`.
 *
 * Float widgets are small draggable overlays. The body DOM is fully
 * script-owned via `handle.root` (a `DOMHandle` bound to the widget's content
 * container), mirroring the `api.ui.showAdvancedModal` pattern. Host-enforced
 * limit: 2 widgets per script, 8 global.
 *
 * `getPosition()` and `isVisible()` return backend-cached state updated via
 * drag-end echoes from the frontend and explicit `moveTo`/`setVisible`
 * commands. Values may briefly lag if the host clamps a `moveTo` to viewport
 * bounds; the next drag-end corrects the cache.
 */
export interface FloatWidgetHandle {
  /** UUID identifying this widget instance. Available synchronously. */
  readonly widgetId: string;
  /**
   * `DOMHandle` bound to the widget's content container.
   *
   * Content is managed via the existing `api.ui.dom.*` pipeline. Calls are
   * buffered and applied in order once the frontend has mounted the widget.
   */
  readonly root: DOMHandle;
  /** Move the widget to new viewport coordinates. */
  moveTo(x: number, y: number): void;
  /** Current cached position. See interface docs for caching semantics. */
  getPosition(): { x: number; y: number };
  /** Show or hide the widget. */
  setVisible(visible: boolean): void;
  /** Current cached visibility state. */
  isVisible(): boolean;
  /**
   * Register a handler fired after the user completes a drag gesture, with
   * the final coordinates. Returns an unsubscribe function. Multiple
   * handlers supported — all fire on each drag-end.
   */
  onDragEnd(handler: (pos: { x: number; y: number }) => void): () => void;
  /**
   * Remove the widget from the viewport. Idempotent — subsequent calls and
   * method invocations on this handle are silent no-ops.
   */
  destroy(): void;
}

// ─── Drawer tabs (lifecycle, DOM-owned) ──────────────────────────────────────

/** Options for `api.ui.registerDrawerTab()`. */
export interface DrawerTabOptions {
  /**
   * Unique identifier within your script. Used by the handle for subsequent
   * `setTitle` / `setShortName` / `setBadge` / `activate` / `destroy` calls
   * and for routing `onActivate` events — pick something stable.
   */
  id: string;
  /**
   * Full display title. Shown in the panel header and the command palette
   * listing (users can jump to your tab via `Ctrl+K` → type the title).
   */
  title: string;
  /**
   * Short label rendered beneath the sidebar icon. Keep to ~8 characters;
   * longer values are truncated with an ellipsis. Defaults to a truncation
   * of `title`.
   */
  shortName?: string;
  /**
   * One-line description shown below the title in the command palette.
   * Defaults to `"Open {title} extension tab"`.
   */
  description?: string;
  /**
   * Extra terms for command-palette fuzzy search. The extension name is
   * always included automatically; list topic-specific synonyms here
   * (e.g. `['analytics', 'metrics', 'charts']`).
   */
  keywords?: string[];
  /**
   * Title shown in the panel header navbar. Useful when the full `title`
   * is too long for the header. Defaults to `title`.
   */
  headerTitle?: string;
  /** Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream. */
  iconSvg?: string;
  /** URL to an icon image. Mutually exclusive with `iconSvg`. */
  iconUrl?: string;
  /**
   * @internal — used by the script-runner child runtime (Phase 9d.4.e-3-a)
   * to thread the child-generated rootElementId through the canonical
   * impl so the proxy-side `.root` DOMHandle's id matches parent state.
   * The tabId is user-supplied (`options.id`) so no threading is needed
   * for that.
   *
   * When omitted (the typical user-code case), the canonical generates
   * via `nextDOMId('dt')`.
   */
  _rootElementId?: string;
}

/**
 * Handle returned by `api.ui.registerDrawerTab()`.
 *
 * Drawer tabs live in the ViewportDrawer sidebar. Each tab registration
 * automatically appears in the command palette (`Ctrl+K`) as well, searchable
 * by title, shortName, description terms, keywords, and the extension name.
 *
 * Host-enforced limits: 4 tabs per extension, 8 global. Because LumiScript
 * is a single Spindle extension, all user scripts share the 4-tab quota.
 * LumiScript enforces **at most 1 drawer tab per script** synchronously at
 * register time so a single script can't starve the shared quota.
 */
export interface DrawerTabHandle {
  /** The tab's identifier — the same `id` passed in `DrawerTabOptions`. */
  readonly tabId: string;
  /**
   * `DOMHandle` bound to the tab's content container.
   *
   * Render tab content via the existing `api.ui.dom.*` pipeline. Calls are
   * buffered and applied once the frontend has mounted the tab.
   */
  readonly root: DOMHandle;
  /** Update the full title (affects command palette + panel header). */
  setTitle(title: string): void;
  /** Update the sidebar icon label. */
  setShortName(shortName: string): void;
  /** Show a badge next to the tab icon. Pass `null` to clear. */
  setBadge(text: string | null): void;
  /** Programmatically switch the drawer to this tab. */
  activate(): void;
  /**
   * Register a handler fired when the user switches to this tab. Returns an
   * unsubscribe function. Multiple handlers supported — all fire on each
   * activation.
   */
  onActivate(handler: () => void): () => void;
  /**
   * Remove the tab from the sidebar and detach all handlers. Idempotent —
   * subsequent method calls on this handle are silent no-ops.
   */
  destroy(): void;
}

// ─── UI API ───────────────────────────────────────────────────────────────────

export interface UIAPI {
  /**
   * Show a temporary notification toast via the native Lumiverse toast system.
   * Fire-and-forget — returns void. Toasts are rate-limited to 5 per 10 seconds.
   * The extension name is automatically prepended as the toast title.
   */
  toast(
    message: string,
    type?: UINotificationType,
    options?: { title?: string; duration?: number },
  ): void;
  /**
   * Show a themed text input dialog using the native Lumiverse prompt.
   * Returns the entered string, or null if the user cancels or dismisses.
   * Resolves after the user responds.
   * @param options.placeholder  Placeholder text shown inside the empty input
   * @param options.submitLabel  Label for the submit button (default: 'Submit')
   * @param options.cancelLabel  Label for the cancel button (default: 'Cancel')
   * @param options.multiline    Use a multi-line textarea instead of a single-line input
   */
  prompt(
    message: string,
    defaultValue?: string,
    options?: {
      /** Placeholder text shown inside the empty input. */
      placeholder?: string;
      /** Label for the submit button. Default: 'Submit'. */
      submitLabel?: string;
      /** Label for the cancel button. Default: 'Cancel'. */
      cancelLabel?: string;
      /** Use a multi-line textarea instead of a single-line input. */
      multiline?: boolean;
    },
  ): Promise<string | null>;
  /**
   * Show a themed yes/no confirmation dialog using the native Lumiverse modal.
   * Returns true if the user clicks Confirm, false if they cancel or dismiss.
   * Resolves after the user responds.
   * @param options.variant  Visual style for the confirm button (default: 'info')
   * @param options.confirmLabel  Label for the confirm button (default: 'Confirm')
   * @param options.cancelLabel   Label for the cancel button (default: 'Cancel')
   */
  confirm(
    message: string,
    title?: string,
    options?: {
      /** Visual variant for the confirm button. Default: 'info'. */
      variant?: 'info' | 'warning' | 'danger' | 'success';
      /** Label for the confirm button. Default: 'Confirm'. */
      confirmLabel?: string;
      /** Label for the cancel button. Default: 'Cancel'. */
      cancelLabel?: string;
    },
  ): Promise<boolean>;
  /**
   * Open a structured read-only modal using the native Lumiverse modal system.
   * Returns a `ModalHandle` — await `handle.result` for dismissal, or call
   * `handle.close()` to dismiss programmatically.
   * Use `items` to build the body from `text`, `heading`, `key_value`, `divider`, `card`.
   *
   * @example
   * const handle = api.ui.showModal([
   *   { type: 'heading', content: 'Chat Stats' },
   *   { type: 'key_value', label: 'Messages', value: String(msgs.length) },
   *   { type: 'divider' },
   *   { type: 'card', items: [{ type: 'text', content: summary }] },
   * ], { title: 'Analysis Results' });
   * const result = await handle.result;
   */
  showModal(items: ModalItem[], options: ShowModalOptions): ModalHandle;

  /**
   * Open an **advanced** modal — the extension owns the body DOM via a
   * `DOMHandle` exposed on `handle.root`.
   *
   * Unlike `showModal()` (which renders a structured `ModalItem[]`), the
   * advanced modal provides a blank content container and returns a handle
   * for full-fidelity DOM manipulation using the existing `api.ui.dom.*`
   * pattern. Ideal for complex interactive UIs: configuration editors,
   * tabbed panels, live-updating status boards, etc.
   *
   * Requires the `app_manipulation` permission (same as `api.ui.dom.*`).
   *
   * Up to **two** advanced modals may be open concurrently per extension
   * (host-enforced); the backend pre-checks this limit and throws
   * synchronously if exceeded.
   *
   * @example
   * const modal = api.ui.showAdvancedModal({ title: 'Settings', width: 480 });
   * modal.root.update('<div class="panel"><button id="save">Save</button></div>');
   * modal.root.on('click', (e) => {
   *   if (e.targetId === 'save') modal.dismiss();
   * });
   * modal.onDismiss((reason) => api.chat.console(`modal closed: ${reason}`));
   */
  showAdvancedModal(options: AdvancedModalOptions): AdvancedModalHandle;

  /**
   * Show a themed context menu at a screen position and await the user's
   * selection. Resolves with the selected item's `key`, or `null` if the
   * user dismissed the menu without selecting.
   *
   * The menu is rendered by Lumiverse using the system theme — it
   * automatically matches the user's accent color, glass mode, and
   * dark/light preference. Viewport-clamped so it never renders off-screen.
   *
   * Free-tier (no permission required).
   *
   * @example
   * const key = await api.ui.showContextMenu({
   *   position: { x: event.clientX, y: event.clientY },
   *   items: [
   *     { key: 'edit',   label: 'Edit'                             },
   *     { key: 'div',    label: '',              type: 'divider'   },
   *     { key: 'delete', label: 'Delete',        danger: true      },
   *   ],
   * });
   * if (key === 'delete') { ... }
   */
  showContextMenu(options: ShowContextMenuOptions): Promise<string | null>;

  /**
   * Register an action inside the **Extras** popover on the chat input bar.
   * Extension actions are visually grouped under a teal-badged header with
   * the extension name.
   *
   * Host-enforced limits: 4 actions per script (LumiScript pre-checks this
   * limit synchronously and throws with a clear message on overflow), 12
   * global across all extensions.
   *
   * Free-tier (no permission required).
   *
   * @example
   * const action = api.ui.registerInputBarAction({
   *   id:    'translate-last',
   *   label: 'Translate last reply',
   * });
   * action.onClick(async () => {
   *   const msgs = await api.chat.getMessages();
   *   const last = msgs[msgs.length - 1];
   *   // ...do work...
   * });
   * // On script teardown, action.destroy() is invoked automatically.
   */
  registerInputBarAction(options: InputBarActionOptions): InputBarActionHandle;

  /**
   * Create a small draggable float widget overlaying the app. The body DOM
   * is fully script-owned via `handle.root` (`DOMHandle`), mirroring
   * `api.ui.showAdvancedModal`. Host-enforced limits: 2 widgets per script
   * (pre-checked backend-side), 8 global across extensions.
   *
   * Unlike `api.ui.dom.floatingButton` (which is a free-tier styled button
   * injection), `createFloatWidget` uses Lumiverse's native float-widget
   * infrastructure — snap-to-edge after drag, chromeless mode, drag-end
   * callbacks for position persistence.
   *
   * Requires the `ui_panels` permission.
   *
   * @example
   * const widget = api.ui.createFloatWidget({
   *   width: 200,
   *   height: 120,
   *   initialPosition: { x: 100, y: 100 },
   *   snapToEdge: true,
   *   tooltip: 'Stats',
   * });
   * widget.root.update('<div style="padding:10px">Hello</div>');
   * widget.onDragEnd((pos) => api.variables.local.set('widget-pos', pos));
   */
  createFloatWidget(options: FloatWidgetOptions): FloatWidgetHandle;

  /**
   * Register a tab in the ViewportDrawer sidebar. The tab's body DOM is
   * fully script-owned via `handle.root` (`DOMHandle`), mirroring the
   * `api.ui.showAdvancedModal` / `createFloatWidget` pattern.
   *
   * Host-enforced limits: 4 tabs per Spindle extension, 8 global.
   * LumiScript-enforced: **1 tab per script** (pre-checked synchronously).
   * Because all user scripts share LumiScript's 4-tab host quota, the
   * per-script cap ensures one script can't starve the others.
   *
   * Registered tabs automatically appear in the command palette (`Ctrl+K`)
   * — users can jump to your tab by typing its title, shortName, any word
   * from its description, any entry in its keywords, or the LumiScript
   * extension name. No extra code needed.
   *
   * Free-tier (no permission required).
   *
   * @example
   * const tab = api.ui.registerDrawerTab({
   *   id:    'stats',
   *   title: 'Character Stats',
   *   shortName: 'Stats',
   *   description: 'View character performance metrics',
   *   keywords: ['analytics', 'metrics'],
   *   iconSvg: '<svg>...</svg>',
   * });
   * tab.root.update('<div>...</div>');
   * tab.onActivate(() => api.chat.console('user opened stats tab'));
   */
  registerDrawerTab(options: DrawerTabOptions): DrawerTabHandle;

  /**
   * Open the native Lumiverse expanded text editor with macro syntax highlighting.
   * Blocks until the user closes the editor.
   * Returns the edited text, or null if the user cancelled.
   */
  editText(
    title?: string,
    value?: string,
    options?: { placeholder?: string },
  ): Promise<string | null>;

  /**
   * Send an OS-level push notification to the user's registered devices.
   * Only delivered when the app is not focused (avoids double-notification).
   * Requires push_notification permission.
   * @returns The number of devices the notification was sent to.
   */
  pushNotification(
    title: string,
    body: string,
    options?: {
      /** Deduplication tag — replaces a previous notification with the same tag. */
      tag?: string;
      /** URL to open when the notification is clicked. */
      url?: string;
      /** Relative URL path to an icon image. Must start with '/'. */
      icon?: string;
      /** When true, the title is used as-is without the extension name prefix. */
      rawTitle?: boolean;
      /** Relative URL path to a large image in the notification body. Must start with '/'. */
      image?: string;
    },
  ): Promise<{ sent: number }>;

  /**
   * Check if push notifications are available for the current user.
   * Requires push_notification permission.
   */
  getPushStatus(): Promise<{
    available: boolean;
    subscriptionCount: number;
  }>;

  /**
   * DOM injection sub-API. Allows scripts to inject HTML and CSS into the
   * Lumiverse frontend and receive DOM events back.
   * Requires the `app_manipulation` permission.
   */
  dom: DOMAPI;
}

// ─── DOM Injection API ───────────────────────────────────────────────────────

/** Options for `api.ui.dom.inject()`. */
export interface DOMInjectOptions {
  /** Insertion position relative to the target element. Default: 'beforeend'. */
  position?: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
  /**
   * Stable ID for idempotent injection. If an element with this ID was already
   * injected by this script, its content is updated instead of creating a duplicate.
   * Essential for trigger scripts that fire repeatedly.
   */
  id?: string;
  /**
   * @internal — used by the script-runner child runtime (Phase 9d.4.c-1
   * sync-return repair) to thread the child-generated elementId through
   * the canonical impl so the sync-shaped DOMHandle returned to user code
   * carries an id matching parent-side state. Don't set from user code.
   *
   * When omitted (the typical user-code case), the canonical generates
   * via `nextDOMId('de')`. When set, the canonical uses it directly for
   * the new element's elementId. The canonical's stable-id idempotency
   * lookup (`resolveStableId`) still runs first when `options.id` is set
   * and finds a matching prior element — in that case the canonical
   * returns the existing handle (with its existing elementId) and our
   * threaded `_elementId` is ignored. The proxy's per-script
   * stableId→elementId cache prevents that mismatch in steady state.
   */
  _elementId?: string;
}

/** Options for `api.ui.dom.injectAtMessage()`. */
export interface DOMMessageInjectOptions {
  /**
   * Semantic injection position within the message.
   * - 'footer' (default): end of the bubble container, after content and controls.
   * - 'header': beginning of the bubble container, before all content.
   */
  position?: 'header' | 'footer';
  /**
   * Stable ID for idempotent injection. If an element with this ID was already
   * injected by this script, its content is updated instead of creating a duplicate.
   */
  id?: string;
  /**
   * @internal — see `DOMInjectOptions._elementId`. Same threading pattern
   * for `injectAtMessage`.
   */
  _elementId?: string;
}

/** Options for `api.ui.dom.addStyle()`. */
export interface DOMAddStyleOptions {
  /**
   * Optional script-scoped identifier for this stylesheet. When provided,
   * a subsequent `addStyle` call with the same `id` (within this script)
   * removes the prior stylesheet before injecting the new one. Without
   * `id`, every call adds a fresh stylesheet — the original accumulating
   * behaviour, useful for situations where multiple cumulative
   * stylesheets are intentional.
   *
   * Common pattern (dev iteration): give your "primary" stylesheet a
   * stable id and call `addStyle(css, { id: 'main' })` on every script
   * fire. Repeated calls trivially replace the prior — no `globalThis`
   * flag bookkeeping, no version constants, no extension toggle when
   * you edit the CSS and save.
   *
   * Ids are scoped per scriptId — different scripts can use the same
   * `id` value without colliding. The id namespace is independent of
   * `DOMInjectOptions.id` and `DOMMessageInjectOptions.id` (those scope
   * element injections, this scopes stylesheets).
   */
  id?: string;
}

/** Serialized subset of a DOM event, safe to transfer across the message channel. */
export interface DOMEventData {
  /** Event type (e.g. 'click', 'input', 'change'). */
  type: string;
  /** `event.target.id`, if present. */
  targetId?: string;
  /** `event.target.value`, for input/select elements. */
  targetValue?: string;
  /** `event.target.checked`, for checkbox/radio elements. */
  targetChecked?: boolean;
  /** All `data-*` attributes on the event target, as a flat record. */
  dataset?: Record<string, string>;
  /** `event.detail` for CustomEvents (must be JSON-serializable). */
  detail?: unknown;
  /**
   * Viewport X coordinate. Populated for `MouseEvent` / `PointerEvent`, and
   * from the first touch of a `TouchEvent`. Useful for positioning
   * `api.ui.showContextMenu(...)` at the cursor or tap location.
   */
  clientX?: number;
  /** Viewport Y coordinate. Populated for the same event families as `clientX`. */
  clientY?: number;
  /**
   * `KeyboardEvent.key` — the value of the key pressed, accounting for
   * modifiers (`'Enter'`, `'Escape'`, `'a'`, `'A'`, `'ArrowUp'`,
   * `'Shift'`). Populated only for `keydown` / `keyup` / `keypress`
   * events. Use this when you care about *what character / named key*
   * the user produced.
   */
  key?: string;
  /**
   * `KeyboardEvent.code` — the physical key on the keyboard, independent
   * of layout / modifiers (`'Enter'`, `'Escape'`, `'KeyA'` regardless of
   * shift, `'ArrowUp'`, `'ShiftLeft'`). Populated only for `keydown` /
   * `keyup` / `keypress` events. Use this when you care about the
   * *physical key location* (e.g. WASD bindings).
   */
  code?: string;
}

/** Options for `DOMHandle.on(event, handler, options?)`. */
export interface DOMListenOptions {
  /**
   * When `true`, the frontend listener calls `event.preventDefault()` on the
   * native DOM event *before* dispatching to the script handler. Needed to
   * suppress the browser's native right-click menu when handling
   * `contextmenu` events, or to suppress form-submit defaults, link
   * navigation, etc.
   *
   * Because the handler dispatches asynchronously across the worker boundary,
   * `preventDefault` must be decided at listener-registration time rather
   * than inside the handler body. Default: `false`.
   */
  preventDefault?: boolean;
}

/** Options for `api.ui.dom.delegate()`. */
export interface DOMDelegateOptions {
  /**
   * Where to attach the actual host-side capture listener. Default: `'chat'`.
   *
   * - `'chat'` — restricts matching to the chat-content container.
   *   Matches descendants of `[data-message-id]` (assistant + user
   *   messages). The natural surface for reacting to interactive
   *   elements emitted by the LLM.
   * - `'document'` — matches anywhere in the page (including Lumiverse's
   *   own UI surfaces). Both scopes gate on the same `app_manipulation`
   *   permission as the rest of `api.ui.dom.*` — `'document'` doesn't
   *   require additional grants beyond what's needed to inject DOM.
   */
  root?: 'chat' | 'document';

  /**
   * When set, only matches inside the `.mes_text` content of the specified
   * message id. Useful for narrowing a delegation to a particular message
   * — e.g. wiring up clickables for one specific in-chat form. Has no
   * effect when `root: 'document'`.
   */
  messageId?: string;

  /**
   * When `true`, the frontend listener calls `event.preventDefault()` on the
   * native DOM event *before* dispatching to the script handler. Same
   * rationale as `DOMListenOptions.preventDefault`. Default: `false`.
   */
  preventDefault?: boolean;

  /**
   * When `true`, the frontend listener calls `event.stopPropagation()` after
   * dispatching, preventing host-side and other delegation listeners from
   * also reacting. Use when the script wants to fully own the matched
   * event. Default: `false` (compose with the host).
   */
  stopPropagation?: boolean;
}

/**
 * Event data delivered to handlers registered via `api.ui.dom.delegate()`.
 * Extends `DOMEventData` with a serialized snapshot of the element actually
 * matched by the delegation selector — which may be an ancestor of the
 * literal `event.target` when the user clicked a child.
 */
export interface DOMDelegatedEventData extends DOMEventData {
  /** The element matched by `event.target.closest(selector)`. */
  matched: {
    /** Uppercase tag name (e.g. `'BUTTON'`, `'INPUT'`). */
    tagName:    string;
    /** `element.id`, when present. */
    id?:        string;
    /** Class list as a flat array. */
    classList:  string[];
    /** All `data-*` attributes on the matched element. */
    dataset:    Record<string, string>;
    /** Sanitized subset of attributes (excludes `on*` event handlers). */
    attributes: Record<string, string>;
    /** `element.textContent`, trimmed of leading/trailing whitespace. */
    textContent: string;
    /** `element.value`, for input/select/textarea. Undefined otherwise. */
    value?:        string;
    /** `element.checked`, for checkbox/radio. Undefined otherwise. */
    checked?:      boolean;
    /** `element.selectedIndex`, for select. Undefined otherwise. */
    selectedIndex?: number;
    /** `element.options[selectedIndex].text`, for select. Undefined otherwise. */
    selectedText?:  string;
    /**
     * Trimmed text of the first `<label>` associated with the matched
     * element. Populated only for input / textarea / select (the labelable
     * form elements that expose `.labels`); undefined otherwise and when
     * no label is associated.
     *
     * Resolution looks at both `<label for="x">…</label> <input id="x">`
     * (explicit association) and `<label>Notes <input></label>`
     * (implicit / wrapping association) — same as the host's
     * `HTMLInputElement.labels` accessor. Use this in preference to
     * `attributes['aria-label']` / `attributes.name` when the LLM emits
     * conventional `<label>` markup.
     */
    label?:         string;
  };
  /** Modifier-key state at event time. `button` populated for click events. */
  modifiers: {
    ctrl:    boolean;
    shift:   boolean;
    alt:     boolean;
    meta:    boolean;
    /** Mouse button (0=left, 1=middle, 2=right). Click events only. */
    button?: number;
  };
  /**
   * Populated when the matched element is inside an assistant or user
   * message. Lets the handler know which message the click came from
   * without inspecting the DOM tree.
   *
   * `swipeId` is the active swipe at dispatch time, resolved backend-
   * side via the host's chat history. Falls through with `0` if the
   * chat closed between event fire and dispatch, or if the message id
   * isn't in the active chat's history (e.g. deleted in the same
   * window). Scripts that need watertight swipe-resolution can
   * re-resolve via `api.chat.getMessages()` inside the handler.
   */
  message?: {
    id:      string;
    role:    'user' | 'assistant';
    swipeId: number;
  };
}

/**
 * Handle returned by `api.ui.dom.inject()`.
 * All methods are fire-and-forget — they send a message to the frontend and return immediately.
 */
export interface DOMHandle {
  /** Unique element ID (generated or stable). */
  readonly id: string;
  /** Replace the element's inner HTML with new sanitized content. */
  update(html: string): void;
  /** Remove the element from the DOM and clean up listeners. */
  remove(): void;
  /**
   * Attach a DOM event listener on the injected element.
   * The handler receives a serialized `DOMEventData` subset (not the raw Event).
   * Returns an unsubscribe function that detaches the listener.
   *
   * Pass `{ preventDefault: true }` to suppress the browser's default action
   * for the event (e.g. to stop the native right-click menu when handling
   * `contextmenu`). Because the handler runs asynchronously across the worker
   * boundary, this must be set at listener-registration time — a handler
   * can't decide mid-dispatch.
   */
  on(
    event: string,
    handler: (data: DOMEventData) => void,
    options?: DOMListenOptions,
  ): () => void;
  /**
   * Enable frontend-only drag on this element.
   * @param handleSelector  Optional CSS selector for the drag handle within the element.
   *                        When provided, only that child initiates drag; the root element moves.
   *                        When omitted, the entire element is both handle and move target.
   */
  makeDraggable(handleSelector?: string): void;
  /**
   * Inject HTML as a descendant of this handle's bound element. Target
   * selector is resolved RELATIVE to this element via the backend's
   * element-map ref, NOT via `document.querySelector`. Returns a fresh
   * `DOMHandle` for the injected child.
   *
   * Use when the parent may be orphaned at inject time — drawer tabs
   * mount lazily on first activation, modal / widget bodies mount when
   * their parent shell mounts. `api.ui.dom.inject` (document-scoped)
   * fails on those; `injectChild` works regardless of mount state.
   *
   * For document-scoped injection outside a handle's subtree, keep
   * using `api.ui.dom.inject` directly.
   *
   * **Sanitization note.** The scoped path does NOT run the host's
   * DOMPurify sanitization on `html` (the manual insert can't reach
   * orphaned parents via the host API). Sanitize untrusted HTML
   * yourself before calling `injectChild`; script-generated markup
   * with safe interpolation is fine.
   */
  injectChild(target: string, html: string, options?: DOMInjectOptions): DOMHandle;
}

/** DOM injection and styling API exposed as `api.ui.dom`. */
export interface DOMAPI {
  /**
   * Inject sanitized HTML into the page at the target CSS selector.
   * Returns a `DOMHandle` for updating, removing, or attaching event listeners.
   *
   * If `options.id` is provided and an element with that ID was already injected
   * by this script, its content is updated and old event listeners are cleared.
   *
   * @param target CSS selector for the injection target (e.g. '#chat-container')
   * @param html HTML string (sanitized via DOMPurify on the frontend)
   * @param options Injection options (position, stable ID)
   */
  inject(target: string, html: string, options?: DOMInjectOptions): DOMHandle;

  /**
   * Inject sanitized HTML into a specific chat message's bubble container.
   * Handles timing automatically — if the message element is not yet in the DOM
   * (e.g. after a chat switch), waits for it via MutationObserver (up to 5 s).
   *
   * Resolves the correct injection target internally based on the active chat
   * layout (Bubble or Minimal), so scripts do not need to know the DOM structure.
   *
   * @param messageId  UUID of the target message (from event data or api.chat.*)
   * @param html       HTML string (sanitized via DOMPurify on the frontend)
   * @param options    Position ('header'/'footer') and optional stable ID
   */
  injectAtMessage(messageId: string, html: string, options?: DOMMessageInjectOptions): DOMHandle;

  /**
   * Add a `<style>` element scoped to this script via `@scope`.
   * Returns an object with a `remove()` method to remove the style.
   *
   * When `opts.id` is provided, repeated `addStyle` calls with the same
   * id (within this script) replace the prior stylesheet rather than
   * accumulating. Without `id`, every call injects a new stylesheet.
   * See `DOMAddStyleOptions.id` for the use-case rationale.
   */
  addStyle(css: string, opts?: DOMAddStyleOptions): { remove(): void };

  /**
   * Attach an event-delegated listener at a known root, matching descendant
   * elements by CSS selector. Lets scripts react to user interactions with
   * DOM that the script itself didn't inject — most commonly, interactive
   * elements (buttons, inputs, selects, textareas) emitted by the LLM into
   * `.mes_text` content.
   *
   * The host installs a SINGLE capture-phase listener per (root, event)
   * tuple regardless of how many scripts subscribe; selector matching
   * happens frontend-side via `event.target.closest(selector)`. The IPC
   * round-trip to the script's handler fires only when a selector matches
   * — non-matching events have zero overhead beyond the closest() walk.
   *
   * Default scope (`options.root: 'chat'`) restricts matching to the chat
   * content container; wider scope (`options.root: 'document'`) matches
   * anywhere in the page. Both gate on `app_manipulation` (the same
   * permission as `inject` / `injectAtMessage` / `addStyle`).
   *
   * @param selector  CSS selector matched against `event.target.closest()`
   * @param event     Event name — `'click'`, `'change'`, `'input'`,
   *                  `'keydown'`, `'submit'`, etc.
   * @param handler   Called with serialized `DOMDelegatedEventData` when
   *                  the selector matches. Async handlers are awaited;
   *                  thrown errors are logged + swallowed (don't propagate
   *                  back to the host event loop).
   * @param options   Scope, message scoping, prevention flags. See
   *                  `DOMDelegateOptions`.
   * @returns         An unsubscribe function. Calling it removes this
   *                  registration; if it's the last subscriber for the
   *                  (root, event) tuple, the host listener is detached.
   *
   * @example
   * // React to clicks on any LLM-emitted button:
   * const unsub = api.ui.dom.delegate('button[data-clickable]', 'click', (data) => {
   *   console.log('clicked:', data.matched.textContent);
   * });
   */
  delegate(
    selector: string,
    event:    string,
    handler:  (data: DOMDelegatedEventData) => void | Promise<void>,
    options?: DOMDelegateOptions,
  ): () => void;

  /** Remove all DOM injections and styles created by this script. */
  cleanup(): void;

}

// ─── Commands API ──────────────────────────────────────────────────────────────

/** Scope controlling when a command appears in the Lumiverse command palette. */
export type CommandScope = 'global' | 'chat' | 'chat-idle' | 'landing' | 'character';

/** A command registration entry for the Lumiverse command palette (Cmd/Ctrl+K). */
export interface CommandDefinition {
  /** Unique identifier for this command within the script. */
  id: string;
  /** Display label shown in the command palette. Max 80 characters. */
  label: string;
  /** Description shown below the label. Max 200 characters. */
  description: string;
  /** Optional search keywords for fuzzy matching. Max 10 keywords, 30 chars each. */
  keywords?: string[];
  /**
   * Scope controlling when the command appears.
   * - `'global'` (default) — always visible
   * - `'chat'` — only when viewing a chat
   * - `'chat-idle'` — only when in a chat and not streaming
   * - `'landing'` — only on the home page
   * - `'character'` — only on character pages
   */
  scope?: CommandScope;
}

/** Context snapshot provided to command invocation handlers. */
export interface CommandContext {
  /** Current route path (e.g. "/chat/abc-123", "/"). */
  route: string;
  /** Active chat ID, if the user is in a chat view. */
  chatId?: string;
  /** Active character ID, if available. */
  characterId?: string;
  /** Whether the active chat is a group chat. */
  isGroupChat?: boolean;
}

/**
 * Command palette API — register discoverable actions in Lumiverse's Cmd/Ctrl+K palette.
 * No permission required (free tier).
 */
export interface CommandsAPI {
  /**
   * Register (or replace) command palette entries for this script.
   * Each call replaces the full set — pass the complete list of commands you want visible.
   * Max 20 commands per extension (shared across all scripts).
   */
  register(commands: CommandDefinition[]): void;
  /**
   * Remove specific commands by ID, or all commands registered by this script if no IDs given.
   */
  unregister(commandIds?: string[]): void;
  /**
   * Register a handler called when the user selects a command from the palette.
   * The handler receives the command ID and a context snapshot.
   * Returns an unsubscribe function.
   */
  onInvoked(handler: (commandId: string, context: CommandContext) => void | Promise<void>): () => void;
}

// ─── Events API ──────────────────────────────────────────────────────────────

/** Severity level for tracked events. */
export type EventLevel = 'debug' | 'info' | 'warn' | 'error';

/** Options for api.events.track(). */
export interface EventTrackOptions {
  /** Severity level (default: 'info'). */
  level?: EventLevel;
  /** Associate event with a specific chat (defaults to active chat). */
  chatId?: string;
  /** Auto-expire after this many days. Omit for default retention. */
  retentionDays?: number;
}

/** Filter used by api.events.query() and api.events.replay(). */
export interface EventQueryFilter {
  /** Filter by event name. */
  eventName?: string;
  /** Filter by chat. */
  chatId?: string;
  /** ISO 8601 date string — only events after this timestamp. */
  since?: string;
  /** ISO 8601 date string — only events before this timestamp. */
  until?: string;
  /** Filter by severity level. */
  level?: EventLevel;
  /** Maximum number of results (default depends on host). */
  limit?: number;
}

/** A single tracked event record returned by query/replay. */
export interface EventRecord {
  id: string;
  /** ISO 8601 timestamp. */
  ts: string;
  eventName: string;
  level: EventLevel;
  chatId?: string;
  payload?: Record<string, unknown>;
}

export interface EventsAPI {
  /**
   * Record a named event with optional payload and options.
   * Events are persisted by the host and can be queried later.
   * Requires event_tracking permission.
   */
  track(eventName: string, payload?: Record<string, unknown>, options?: EventTrackOptions): Promise<void>;
  /**
   * Query persisted events (newest-first).
   * Requires event_tracking permission.
   */
  query(filter?: EventQueryFilter): Promise<EventRecord[]>;
  /**
   * Replay persisted events in chronological order (oldest-first).
   * Requires event_tracking permission.
   */
  replay(filter?: EventQueryFilter): Promise<EventRecord[]>;
  /**
   * Retrieve the latest known state for a set of keys.
   * Useful for resuming stateful scripts after restarts.
   * Requires event_tracking permission.
   */
  getLatestState(keys: string[]): Promise<Record<string, unknown>>;
}

// ─── Tokens API ───────────────────────────────────────────────────────────────

/** Options for `api.tokens.countText()` / `countMessages()` / `countChat()`. */
export interface TokenCountOptions {
  /**
   * Explicit model ID to resolve the tokenizer against. Takes precedence over
   * `modelSource` when both are set. Useful when budgeting for a specific
   * downstream model rather than "whatever the user has configured."
   */
  model?: string;
  /**
   * Which configured model to use when `model` is not set.
   * - `'main'`    → the user's default main connection profile model (default)
   * - `'sidecar'` → the user's selected sidecar model
   */
  modelSource?: 'main' | 'sidecar';
}

/** Result returned by `api.tokens.count*()` methods. */
export interface TokenCountResult {
  /** Total token count. */
  totalTokens: number;
  /** Model ID actually used to resolve the tokenizer. */
  model: string;
  /** Where the tokenizer model came from: main connection, sidecar selection, or an explicit override. */
  modelSource: 'main' | 'sidecar' | 'explicit';
  /** Null when no exact tokenizer match was found and an approximate fallback was used. */
  tokenizerId: string | null;
  /** Human-readable tokenizer name (empty string when approximate). */
  tokenizerName: string;
  /** True when Lumiverse fell back to its approximate char/4 heuristic. */
  approximate: boolean;
}

/**
 * Server-side token counting. Uses the actual provider tokenizer when
 * available, falling back to a char/4 heuristic (`approximate: true`) when
 * the tokenizer for the resolved model isn't bundled.
 *
 * No permission required. Useful for:
 *   - Pre-flight prompt budgeting before `api.llm.generate*`
 *   - Summariser / chunker scripts that need to fit exact token limits
 *   - Multi-step chains that want to avoid blowing the context window
 */
export interface TokensAPI {
  /**
   * Count tokens for an arbitrary text string.
   *
   * @example
   * const { totalTokens } = await api.tokens.countText(longPrompt);
   * if (totalTokens > 3000) longPrompt = truncate(longPrompt);
   */
  countText(text: string, options?: TokenCountOptions): Promise<TokenCountResult>;

  /**
   * Count tokens for an array of chat-style messages. Accepts the normalised
   * output of `api.chat.getMessages(...)` directly (only `role` + `content`
   * are used for counting; other fields are ignored).
   */
  countMessages(messages: LLMMessage[], options?: TokenCountOptions): Promise<TokenCountResult>;

  /**
   * Count tokens for a live stored chat by ID. Convenient when the script
   * wants to size the chat without fetching messages itself.
   */
  countChat(chatId: string, options?: TokenCountOptions): Promise<TokenCountResult>;
}

/** The `script.*` namespace available inside script bodies */
// ─── Tools API ────────────────────────────────────────────────────────────────

/**
 * Arguments passed to a tool handler when Lumiverse invokes the tool.
 * The well-known Lumiverse-injected fields are explicitly typed; additional
 * entries come from the tool's own parameter schema.
 */
export interface ToolInvocationArgs {
  /** Formatted chat context: character info, world info, recent messages. */
  context?: string;
  /** The user ID of the invoking user (for scoped api.* operations). */
  __userId?: string;
  /** Timestamp (ms) by which the handler must return a result. */
  __deadlineMs?: number;
  /** Tool-specific parameters from the registration schema. */
  [key: string]: unknown;
}

/**
 * Registration definition for a LumiScript tool.
 * Passed to `api.tools.register()` alongside the handler.
 */
export interface ToolDefinition {
  /** Human-readable name shown in the Council tools list. */
  display_name: string;
  /** Description for the LLM — explains what the tool does and when to call it. */
  description: string;
  /** JSON Schema object describing the tool's input parameters. */
  parameters?: Record<string, unknown>;
  /**
   * When `true`, the tool appears in Lumiverse's Council tools list and can be
   * assigned to Council members. Default: `false`.
   */
  council_eligible?: boolean;
}

/**
 * Re-exported from `lumiverse-spindle-types`. Personality snapshot of the
 * Council member that triggered a tool invocation — identity, role, Lumia
 * personality fields, avatar URL, etc. Populated on `ToolInvocationContext`
 * only when the tool was invoked as part of a Council execution cycle.
 *
 * We re-export rather than mirror because this type is tightly coupled to
 * upstream's Council implementation: if upstream adds/changes fields, scripts
 * should see those changes automatically rather than drift silently against
 * a local copy.
 *
 * Requires Lumiverse host commit `8d310f8` or later for the `councilMember`
 * field to be populated; older hosts omit it and scripts see `undefined`.
 */
import type {
  CouncilMember as CouncilMember_,
  CouncilMemberContext as CouncilMemberContext_,
  CouncilToolsSettings as CouncilToolsSettings_,
  CouncilSettings as CouncilSettings_,
} from 'lumiverse-spindle-types';
// Re-export under their canonical names so scripts can import them
// directly from LumiScript's public type surface.
export type CouncilMember = CouncilMember_;
export type CouncilMemberContext = CouncilMemberContext_;
export type CouncilToolsSettings = CouncilToolsSettings_;
export type CouncilSettings = CouncilSettings_;

/**
 * A Lumia item available in the user's installed packs — a single
 * character/entity definition that can be assigned to a Council member.
 * LumiScript-shaped (camelCase) mapping of upstream `LumiaItemDTO`.
 *
 * The full pool returned by `api.council.getAvailableLumiaItems()` is a
 * superset of what's currently assigned to Council members; assignments
 * live in `CouncilSettings.members` (which `api.council.getMembers()`
 * returns enriched with the corresponding Lumia fields as
 * `CouncilMemberContext[]`).
 */
export interface LumiaItem {
  id: string;
  packId: string;
  name: string;
  /**
   * Relative URL to the avatar image (e.g. `/api/v1/images/{id}`), or null
   * when no avatar is set. The path is host-served — fetch via
   * `api.utils.http.*` if you need the bytes, or pass through to UI
   * surfaces that accept relative URLs (host serves them transparently).
   */
  avatarUrl: string | null;
  /** Display name of the pack author. */
  authorName: string;
  /** Physical / identity description (free-form text). */
  definition: string;
  /** Personality description (free-form text). */
  personality: string;
  /** Behavioural patterns (free-form text). */
  behavior: string;
  /**
   * Gender identity marker. Per spindle-types 0.4.40 council types:
   * `0` = unspecified, `1` = feminine, `2` = masculine. Note: upstream
   * docs (council.md) describe a wider four-value range
   * (0=feminine, 1=masculine, 2=neutral, 3=any) — this is a documented
   * type-vs-doc inconsistency in 0.4.40; LumiScript matches the typed
   * surface for now and will widen if/when upstream reconciles.
   */
  genderIdentity: 0 | 1 | 2;
  /** Pack-author-supplied version string (e.g. `"1.0.0"`). */
  version: string;
  /** Sort index within the pack (lower values render first). */
  sortOrder: number;
  /** Creation timestamp (Unix seconds). */
  createdAt: number;
  /** Last update timestamp (Unix seconds). */
  updatedAt: number;
}

/**
 * `api.council` — read-only access to the user's active Council
 * configuration: settings, currently-assigned members with full Lumia
 * context, and the broader pool of available Lumia items across the
 * user's installed packs.
 *
 * **No permission required** — Lumiverse exposes Council config to all
 * extensions on the free tier (no `council` permission to declare).
 *
 * Common use cases:
 *  - Tailor a script's narrative output to the active directors (e.g. read
 *    `getMembers()` and weight prompts toward members with high `chance`).
 *  - Build a Council-aware UI (e.g. drawer tab listing members with
 *    avatars + roles).
 *  - Audit which Lumia items a user has installed without surfacing a tool.
 *
 * **Note on `api.tools.*` Council tools:** if a script's tool handler is
 * invoked via the Council execution path, the active member's
 * `CouncilMemberContext` is delivered to the handler automatically as the
 * second arg (`ctx.councilMember`). `api.council.getMembers()` is for
 * inspecting Council state OUTSIDE a tool execution cycle — script
 * startup, drawer-tab activation, scheduled reads, etc.
 */
export interface CouncilAPI {
  /**
   * Get the user's full Council settings: mode flag, members list, and
   * tool-execution settings (timeout, sidecar context window, etc.).
   * Returns the verbatim `CouncilSettings` shape from spindle-types.
   */
  getSettings(): Promise<CouncilSettings>;

  /**
   * Get the user's currently-assigned Council members with full Lumia
   * context (role + chance from the assignment, plus avatar / definition /
   * personality / behavior from the source Lumia item). Returns the
   * verbatim `CouncilMemberContext[]` shape from spindle-types.
   */
  getMembers(): Promise<CouncilMemberContext[]>;

  /**
   * Get all Lumia items the user has access to across their installed
   * packs. Superset of `getMembers()` — includes items not currently
   * assigned to a Council member. Returns LumiScript-shaped `LumiaItem[]`
   * (camelCase mapping of the upstream snake_case DTO).
   */
  getAvailableLumiaItems(): Promise<LumiaItem[]>;
}

/**
 * Optional context object passed to `ToolHandler` as the third parameter.
 *
 * Always defined when the handler is invoked via Lumiverse's `TOOL_INVOCATION`
 * event; `undefined` when invoked via `api.tools.invoke()` (script-to-script).
 *
 * Modeled as an object (rather than a flat positional `councilMember?`)
 * so upstream can add future correlation fields without another arg.
 */
export interface ToolInvocationContext {
  /**
   * Host-side correlation id for this invocation. Populated by Lumiverse
   * hosts at commit `8d310f8` or later; `undefined` on older hosts.
   */
  requestId?: string;
  /**
   * Personality snapshot of the Council member that triggered the invocation.
   * Populated only when the tool was invoked as part of a Council execution
   * cycle (and the host supports it). `undefined` for all other paths —
   * inline function-calling, `api.tools.invoke()`, older hosts.
   */
  councilMember?: import('lumiverse-spindle-types').CouncilMemberContext;
  /**
   * Structured chat context for Council invocations — the same content the
   * host flattens into `args.context`, but as a typed `LLMMessage[]` with
   * role boundaries preserved. Populated by Lumiverse hosts at commit
   * `993544c8` or later (spindle-types 0.4.26+); `undefined` for
   * non-Council paths and older hosts. Multi-part (text+image) message
   * content is flattened to its text portion before delivery.
   *
   * Prefer this over `args.context` when available — the structured form
   * gives the analyst LLM real turn-taking boundaries and voice precedent
   * from prior assistant messages, closing most of the behavioural gap
   * between extension tools and the built-in sidecar tools. The
   * `ls:council-prompt` helper's `buildCouncilMessages` will use these
   * automatically when you pass them through via the `contextMessages`
   * option.
   */
  contextMessages?: LLMMessage[];
}

/**
 * Tool handler callback. Invoked by Lumiverse when the tool is called.
 *
 * @param args  Tool invocation arguments. `args.context` contains formatted
 *              chat context; `args.__userId` is the invoking user; additional
 *              keys match the tool's parameter schema.
 * @param api   Full LumiScript API. Use `api.llm.generate()` (or other api.*
 *              methods) to build the tool's response with the script-configured
 *              connection and parameters.
 * @param ctx   Invocation context — populated when called via Lumiverse's
 *              `TOOL_INVOCATION` event, `undefined` when called via
 *              `api.tools.invoke()`. Read `ctx.councilMember` to personalise
 *              output for the invoking Council member, or `ctx.requestId` to
 *              correlate with host-side logging.
 * @returns     A string that Lumiverse uses as the tool's result in the Council
 *              deliberation block or inline function-call response.
 */
export type ToolHandler = (
  args: ToolInvocationArgs,
  api: LumiScriptAPI,
  ctx?: ToolInvocationContext,
) => string | Promise<string>;

/** Serialisable snapshot of a registered tool, used in the Status tab. */
export interface RegisteredToolInfo {
  name: string;
  display_name: string;
  description: string;
  /** JSON Schema for the tool's input parameters. Used when building the tools
   *  array for `api.llm.generateWithTools`. */
  parameters?: Record<string, unknown>;
  council_eligible: boolean;
  scriptId: string;
  scriptName: string;
}

/**
 * `api.tools` — register LLM tools that Lumiverse can invoke via Council
 * (inline mode) or native LLM function-calling.
 *
 * Requires the `tools` permission in `spindle.json`.
 */
export interface ToolsAPI {
  /**
   * Register a tool with Lumiverse.
   *
   * The handler receives `(args, api)`. Use `api.llm.generate()` inside the
   * handler to make LLM calls with the script-configured connection.
   *
   * @param name    Unique tool identifier (bare name, no colons). Lumiverse
   *                qualifies it internally as `lumiscript:name`.
   * @param def     Tool definition (display name, description, schema,
   *                council eligibility).
   * @param handler Called when the tool is invoked. Must return a string.
   *
   * @example
   * api.tools.register('weather_lookup', {
   *   display_name: 'Weather Lookup',
   *   description: 'Get current weather for a city.',
   *   parameters: {
   *     type: 'object',
   *     properties: { city: { type: 'string', description: 'City name' } },
   *     required: ['city'],
   *   },
   *   council_eligible: true,
   * }, async (args, api) => {
   *   // api.llm.generate() uses the script-configured LLM connection —
   *   // independent of Lumiverse's Council LLM.
   *   return api.llm.generate([
   *     { role: 'system', content: 'Summarise the weather data concisely.' },
   *     { role: 'user',   content: `City: ${args.city}\nContext: ${args.context}` },
   *   ], { connection: 'my-connection' });
   * });
   */
  register(name: string, def: ToolDefinition, handler: ToolHandler): void;

  /**
   * Unregister a tool by name.
   * Only removes tools that were registered by the calling script.
   * No-op if the tool is not found or belongs to another script.
   */
  unregister(name: string): void;

  /**
   * Return a list of all currently registered tools across all scripts.
   * Useful for monitoring tool registration state in the Status tab.
   */
  list(): RegisteredToolInfo[];

  /**
   * Directly invoke a registered tool handler by name with the given arguments.
   * Use this inside an agentic loop to execute function calls that the LLM
   * requested via `api.llm.generateWithTools()`.
   *
   * The handler runs exactly as it would if Lumiverse had invoked it — it
   * receives `(args, api)` internally and may make its own LLM calls.
   *
   * Throws if no handler is registered for `name`.
   */
  invoke(name: string, args?: Record<string, unknown>): Promise<string>;
}

// ─── Macros API ──────────────────────────────────────────────────────────────

/**
 * Context passed to a pull-model macro handler at resolution time.
 *
 * Mirrors Lumiverse's internal `MacroExecContext`. Handlers receive a single
 * parameter named `ctx` — per Lumiverse convention, `args` is a property on
 * ctx (`ctx.args[0]`), NOT a top-level variable.
 *
 * Async data must be pre-loaded into `globalThis` before macro resolution if
 * the handler is a SYNC string-compiled handler. Function-reference handlers
 * (the path used by `api.macros.register()` with a function argument) can
 * be async directly.
 */
export interface MacroContext {
  /** The bare macro name (no `{{}}`, no arguments). */
  name: string;
  /** Argument tokens parsed from the macro invocation. */
  args: string[];
  /** Environment context populated by the macro engine at resolution time. */
  env?: {
    character?: { id?: string; name?: string; [k: string]: unknown };
    chat?:      { id?: string; [k: string]: unknown };
    names?:     { char?: string; user?: string; [k: string]: unknown };
    variables?: { local?: Record<string, string>; global?: Record<string, string> };
    [k: string]: unknown;
  };
  /** True when the macro is resolved inside a scoped block (e.g. `{{if::...}}…{{/if}}`). */
  isScoped?: boolean;
  /** Body text for scoped macros. */
  body?: string;
}

/** Pull-model handler signature. May be sync or async. */
export type MacroHandler = (ctx: MacroContext) => string | Promise<string>;

/** Passed to `api.macros.register(name, def, handler?)`. */
export interface MacroDefinition {
  /** Human-readable description shown in preset editors and macro browsers. */
  description: string;
  /**
   * Category label used to group the macro in Lumiverse's macro browser.
   * Defaults to `extension:lumiscript:user` so script-registered macros stay
   * separate from LumiScript's internal `extension:lumiscript` family.
   */
  category?: string;
  /** Hint for value-type coercion on resolution. Defaults to `string`. */
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  /** Argument schema shown to preset authors. */
  args?: { name: string; description?: string; required?: boolean }[];
  /**
   * Mark the macro as producing output that isn't a pure function of its
   * args + tracked env reads — time-based output, randomness, IO, mutable
   * state external to the host's `env.variables.*` maps, etc. The host's
   * display-regex cache will skip storing resolutions that include a
   * volatile macro (otherwise stale reads can survive across renders).
   *
   * Default behaviour for LumiScript:
   *   - Pull-mode (handler provided)  → defaults to `true`
   *   - Push-mode (no handler)        → defaults to `false`
   *
   * The pull-mode default is conservative because LumiScript handlers
   * read external state via `api.db`, `api.variables`, `api.chat.*`, and
   * other namespaces that are invisible to the host's variable-read
   * fingerprinter. Without `volatile: true`, the host has no way to know
   * the cached output went stale when that external state mutates.
   *
   * Override only when you know the handler IS pure-from-args (no api.*
   * reads, no Date / Math.random, no closure-over-mutable-state):
   *   `api.macros.register('square', { description: '…', volatile: false }, ctx => String(Number(ctx.args[0]) ** 2))`
   *
   * Push-mode's `false` default is correct because push-mode resolution
   * returns whatever string was last `updateValue`'d, which is pure
   * relative to push events; the host already invalidates the cache on
   * macro-value updates.
   *
   * Available on host builds Lumiverse ≥0.9.7 (lumiverse-spindle-types
   * ≥0.4.62). Older builds silently ignore the flag.
   */
  volatile?: boolean;
}

/**
 * Serialisable snapshot of a registered macro. Returned from `api.macros.list()`.
 *
 * `lastValue` is visible across scripts — any script calling `list()` can see
 * push-values set by any other script. This matches the already-world-readable
 * nature of macros (any preset can reference any macro by name).
 */
export interface RegisteredMacroInfo {
  name: string;
  description: string;
  category: string;
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  args?: { name: string; description?: string; required?: boolean }[];
  /** `'push'` if registered without a handler; `'pull'` if registered with one. */
  mode: 'push' | 'pull';
  /** Most recent value pushed via `updateValue`. Only meaningful for push-mode macros. */
  lastValue?: string;
  scriptId: string;
  scriptName: string;
}

/**
 * `api.macros` — register Lumiverse macros from scripts.
 *
 * Two registration modes share one surface:
 *
 * - **Push-mode** (no handler): register the macro, then push values via
 *   `updateValue`. The Lumiverse macro engine resolves each occurrence to
 *   whatever value was last pushed. Best for state that changes on
 *   script-internal events (e.g. "current scene", "active quest"). No
 *   resolution-time latency.
 *
 * - **Pull-mode** (handler provided): the handler runs every time the macro
 *   is resolved during prompt assembly. Handlers may be sync or async. Best
 *   for values that depend on live context (current character, chat ID,
 *   argument tokens) or need computation at resolution time.
 *
 * LumiScript reserves macro names used by its own internal macros
 * (`lumiScriptActive`, the character-variable family). Attempting to
 * register one throws.
 *
 * No Lumiverse permission required — macro registration is a naming
 * operation. Side effects inside a pull-mode handler are still gated by
 * the permissions its inner API calls require.
 */
export interface MacrosAPI {
  /**
   * Register a macro. Omit `handler` for push-mode; provide it for pull-mode.
   *
   * @throws  if `name` matches a reserved LumiScript-internal macro name.
   * @throws  if `name` is already registered by a different script.
   *
   * @example  push-mode
   * api.macros.register('currentScene', { description: 'Active scene name.', returnType: 'string' });
   * api.macros.updateValue('currentScene', 'Market square');
   *
   * @example  pull-mode
   * api.macros.register(
   *   'unread_count',
   *   { description: 'Count of unread messages.', returnType: 'integer' },
   *   async (ctx) => {
   *     const msgs = await api.chat.getMessages();
   *     return String(msgs.filter(m => !m.metadata?.read).length);
   *   },
   * );
   */
  register(name: string, def: MacroDefinition, handler?: MacroHandler): void;

  /**
   * Push a new value for a push-mode macro. Only valid against macros
   * registered by the calling script.
   *
   * @throws  if the named macro was registered with a handler (pull-mode).
   *          Pull-mode macros compute their value from the handler and
   *          ignore pushed values; failing fast here surfaces the mistake.
   */
  updateValue(name: string, value: string): void;

  /**
   * Unregister a macro by name. Only removes macros owned by the calling
   * script. Silent no-op if not found or not owned.
   */
  unregister(name: string): void;

  /**
   * List all currently registered macros across all scripts. Use for
   * diagnostics, dashboards, or debugging.
   */
  list(): RegisteredMacroInfo[];

  /**
   * Register a macro interceptor — a handler that receives the RAW template
   * before Lumiverse parses it, and returns either a transformed template or
   * `void` to pass through. Requires the `macro_interceptor` permission
   * (declared by LumiScript at the extension level — no per-script gate).
   *
   * Use this when per-macro RPC cost dominates iteration-heavy templates
   * like `{{#each LARGE_LIST}}…{{my_macro}}…{{/each}}`. One interceptor call
   * resolves all hits in-worker instead of paying N RPCs across the worker
   * boundary. For single non-iterated macros, prefer `register()`.
   *
   * **Critical perf note** — handlers run on a hot path (every prompt-
   * assembly evaluate pass, plus display/response/other phases). The host
   * gives all extensions a 10-second budget per evaluation; LumiScript
   * shares this across every script's handlers. Each handler runs inside a
   * 2-second soft timeout (configurable). Do NOT call `api.llm.*`,
   * `api.utils.http.*`, or any other potentially-slow API from a handler.
   *
   * Recommended pattern: a trigger handler precomputes state and writes it
   * to `api.db.*`; the interceptor handler reads the cached value and
   * substitutes it into the template — fast, idempotent, side-effect-free.
   *
   * @returns A handle whose `remove()` deregisters the handler.
   *
   * @example
   * const handle = api.macros.registerInterceptor((ctx) => {
   *   const intensity = api.db.collection({ scope: 'chat' })
   *     .get('tracker:state')?.intensity ?? 0;
   *   return ctx.template.replaceAll('{{tracker.intensity}}', String(intensity));
   * }, { matchTemplate: '{{tracker.', priority: 100 });
   *
   * // Later: handle.remove();
   */
  registerInterceptor(
    handler: MacroInterceptorHandler,
    options?: MacroInterceptorOptions,
  ): MacroInterceptorHandle;

  /**
   * List all currently registered macro interceptors (across all scripts).
   * Use for diagnostics. Excludes the live handler reference.
   */
  listInterceptors(): RegisteredMacroInterceptorInfo[];
}

/**
 * Phase tag passed to a macro interceptor. Lets handlers gate their work to
 * specific call sites — e.g. `phase === 'prompt'` for prompt-assembly only.
 *
 * - `'prompt'`: macro evaluation during prompt assembly (the most common
 *   and most performance-sensitive site).
 * - `'display'`: evaluation for chat-display rendering.
 * - `'response'`: evaluation on LLM-returned content during post-processing.
 * - `'other'`: any other call site that doesn't match the above.
 */
export type MacroInterceptorPhase = 'prompt' | 'display' | 'response' | 'other';

/**
 * Read-only snapshot of the macro evaluation environment, passed to a
 * macro interceptor handler. Mutating these values has NO effect on the
 * real environment — they're a structured-clone snapshot. Persist state
 * via `api.variables.*`, `api.db.*`, or `api.macros.updateValue()`.
 */
export interface MacroInterceptorEnv {
  readonly commit: boolean;
  readonly names: Record<string, string>;
  readonly character: Record<string, unknown>;
  readonly chat: Record<string, unknown>;
  readonly system: Record<string, unknown>;
  readonly variables: {
    readonly local: Record<string, string>;
    readonly global: Record<string, string>;
    readonly chat: Record<string, string>;
  };
  /**
   * Per-call macro overrides supplied by the caller. Available on Lumiverse
   * host ≥0.9.7 (lumiverse-spindle-types ≥0.4.62). Older builds omit the
   * field, so handlers must guard with `?? {}` if they read it.
   *
   * The display-regex pipeline (`phase === 'display'`) sets
   * `chat_index` to the rendered message's index in the chat — useful for
   * computing per-message context that registered macros can't reach on
   * their own (e.g. relative position of THIS message in history).
   *
   * Other callers may set additional fields. Keys are arbitrary strings;
   * values are pre-resolved string content.
   */
  readonly dynamicMacros?: Record<string, string>;
  readonly extra: Record<string, unknown>;
}

/**
 * Context passed to a macro interceptor handler. The handler receives the
 * current raw template (already transformed by any earlier interceptors
 * in the chain) and returns either a transformed template string or
 * `void` to pass through.
 */
export interface MacroInterceptorCtx {
  readonly template: string;
  readonly env: MacroInterceptorEnv;
  readonly commit: boolean;
  readonly phase: MacroInterceptorPhase;
  readonly sourceHint?: string;
  /**
   * User ID that initiated the macro resolution (when available). Relevant
   * for operator-scoped extensions that need to route work through other
   * APIs on that user's behalf.
   */
  readonly userId?: string;
}

/**
 * User-supplied macro interceptor handler. Sync or async. Returns either:
 *  - a transformed template `string` to replace the input for downstream
 *    handlers + the host's parser.
 *  - `void` / `undefined` to pass through unchanged.
 */
export type MacroInterceptorHandler = (
  ctx: MacroInterceptorCtx,
) => string | void | Promise<string | void>;

/** Registration options for `api.macros.registerInterceptor`. */
export interface MacroInterceptorOptions {
  /**
   * Stable identifier for this handler. Re-registration with the same
   * `id` from the same script replaces the prior entry. Auto-generated
   * if omitted — auto-generated entries can only be removed via the
   * returned handle or the script's lifecycle teardown.
   */
  id?: string;
  /** Lower values run first within a single LS multiplexer pass. Default `100`. */
  priority?: number;
  /**
   * Restrict the handler to specific evaluation phases. Default: all
   * phases. Pre-filtered before the handler runs — non-matching contexts
   * skip without invoking the handler at all.
   */
  phase?: MacroInterceptorPhase | MacroInterceptorPhase[];
  /**
   * Pre-filter on template content. Skip the handler unless the template
   * contains the marker(s).
   *  - `string`: simple `includes` check.
   *  - `string[]`: any-of (skip unless at least one element is present).
   *  - `RegExp`: skip unless the regex matches.
   *
   * Most common use: gating on a macro family namespace like
   * `'{{tracker.'` so handlers don't write the same `if (!ctx.template
   * .includes(...)) return` boilerplate.
   */
  matchTemplate?: string | string[] | RegExp;
  /**
   * Per-invocation soft timeout in milliseconds. Default `2000`. The host's
   * outer 10-second budget is shared across all LumiScript handlers, so
   * each individual handler should stay well under the cap. On timeout the
   * handler is skipped and the chain forwards the prior template.
   */
  timeoutMs?: number;
}

/** Handle returned by `registerInterceptor`. Calling `remove()` deregisters. */
export interface MacroInterceptorHandle {
  /** The handler's id (auto-generated when not supplied via options). */
  readonly id: string;
  /** Deregister this handler. Idempotent — safe to call repeatedly. */
  remove(): void;
}

/** Snapshot of a registered macro interceptor. Returned from `listInterceptors()`. */
export interface RegisteredMacroInterceptorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  /** `null` when no phase filter was supplied (handler runs for all phases). */
  phases: MacroInterceptorPhase[] | null;
  /**
   * Stringified template-marker filter, or `null` when no filter was supplied.
   * RegExps are stringified via `String(regexp)`; string-array filters are
   * preserved as arrays.
   */
  matchTemplate: string[] | string | null;
  timeoutMs: number;
}

// ─── DB API ──────────────────────────────────────────────────────────────────

/**
 * Record shape produced by `api.db.*`. Every inserted record carries an
 * auto-generated `id` (UUID v4) plus `createdAt` / `updatedAt` epoch-ms
 * timestamps. User-supplied fields are preserved alongside these reserved
 * fields.
 *
 * `id` and `createdAt` are immutable — `Collection.update()` silently strips
 * them from the patch. `updatedAt` is always bumped to `Date.now()` on any
 * successful update.
 */
export interface DbRecord {
  id: string;
  createdAt: number;
  updatedAt: number;
  [key: string]: unknown;
}

/**
 * Scope of a collection — determines the storage path and lifetime.
 *
 * - `'script'` (default): per-scriptId, cross-chat. Lives at
 *   `db/scripts/{scriptId}/{name}.json`. Best for script-wide state
 *   (counters, caches, user preferences).
 * - `'character'`: per-active-character, per-scriptId. Lives at
 *   `db/characters/{characterId}/{scriptId}/{name}.json`. Best for data
 *   tied to a specific character (dice-roll history, relationship state).
 * - `'chat'`: per-active-chat, per-scriptId. Lives at
 *   `db/chats/{chatId}/{scriptId}/{name}.json`. Best for data scoped to
 *   a single chat session (scene event logs, pacing trackers).
 *
 * Path resolution happens once at `collection()` creation, baking the
 * scoped IDs into the handle. Missing context (e.g. `scope: 'chat'` with
 * no active chat) throws at creation time.
 */
export type DbScope = 'script' | 'character' | 'chat';

/**
 * Filter shapes accepted by `find()` / `findOne()` / `update()` / `delete()` /
 * `count()`:
 *
 * - `undefined` → matches all records (sugar for "operate on everything").
 * - Function `(r) => boolean` → caller predicate. Full expressive power,
 *   but not serialisable across the worker↔host boundary (runs in-script).
 * - Object `{ 'a.b': value }` → deep-equality match with dot-notation
 *   path resolution. Arrays compared via `JSON.stringify`. No Mongo-style
 *   `$gt` / `$in` operators — use a function filter or `query()` for those.
 */
export type DbFilter<T = DbRecord> =
  | undefined
  | Partial<T>
  | ((record: T) => boolean);

/**
 * Options for `api.db.collection(name, opts)`.
 */
export interface CollectionOpts<T extends DbRecord = DbRecord> {
  /** Scope of the collection. Defaults to `'script'`. */
  scope?: DbScope;
  /**
   * Optional Zod schema (or any object with a `parse(data): T` method)
   * applied on every write — `insert`, `insertMany`, and `update`.
   *
   * On `update`, the validated candidate is the *merged* record
   * (`{ ...existing, ...patch, updatedAt: now }`), not the raw patch —
   * this preserves the invariant that every stored record conforms to
   * the schema.
   *
   * Validation failures throw `Error('api.db: schema validation failed
   * on <op>: <zod-message>')`. `find` / `findOne` / `count` / `query`
   * are NOT validated (no read-side checks) — if your schema evolves,
   * use `drop()` + re-insert rather than expecting lazy migration.
   *
   * Attaching a schema to a collection that already contains records
   * violating it is a no-op at creation time; the next mutation will
   * surface the issue.
   */
  schema?: ZodLike<T>;
}

/**
 * A handle to a single JSON-file-backed collection. Obtained via
 * `api.db.collection(name, opts?)`. Methods are per-operation atomic —
 * concurrent mutations on the same collection are serialised through a
 * per-path Promise chain in the backend.
 *
 * Reads (`find` / `findOne` / `count` / `query`) snapshot the collection
 * state at call time and bypass the mutation queue. A read that races a
 * write may see pre-mutation data; this matches MongoDB-ish consistency
 * semantics.
 */
export interface Collection<T extends DbRecord = DbRecord> {
  /**
   * Insert a record. Auto-assigns `id` (UUID v4) and `createdAt` /
   * `updatedAt` timestamps unless caller supplies them. Returns the
   * persisted record including the injected fields.
   */
  insert(record: Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>): Promise<T>;

  /**
   * Batch-insert multiple records with a single file-write. Each record is
   * processed the same as `insert()` — auto-id, auto-timestamps unless
   * caller-provided. All records in a batch share the same `createdAt` /
   * `updatedAt` timestamp (the batch-commit semantic).
   *
   * Broadcast: fires one `ls:collection:inserted` event per record in
   * insertion order, AFTER the single persist resolves. Subscribers
   * always see individual events; there is no `inserted-many` event.
   *
   * Atomicity: if validation (schema) or size governance rejects the
   * batch, NO records are persisted. Empty input is a fast no-op that
   * returns `[]` and fires no broadcasts.
   *
   * @example
   * const rolls = await api.db.collection('dice-rolls', { scope: 'character' });
   * await rolls.insertMany([
   *   { notation: '1d20+3', total: 18, outcome: 'success' },
   *   { notation: '2d6',    total: 7,  outcome: null },
   * ]);
   */
  insertMany(records: Array<Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>>): Promise<T[]>;

  /** Find all records matching the filter. `undefined` matches all. */
  find(filter?: DbFilter<T>): Promise<T[]>;

  /** Find the first record matching the filter. Returns `null` on no match. */
  findOne(filter: DbFilter<T>): Promise<T | null>;

  /**
   * Update all records matching the filter with the given patch. Returns
   * the number of records updated. `id` and `createdAt` cannot be
   * overwritten — the patch silently strips them. `updatedAt` is always
   * bumped to `Date.now()`.
   */
  update(filter: DbFilter<T>, patch: Partial<T>): Promise<number>;

  /** Delete all records matching the filter. Returns the number deleted. */
  delete(filter: DbFilter<T>): Promise<number>;

  /** Count records matching the filter. `undefined` counts all. */
  count(filter?: DbFilter<T>): Promise<number>;

  /** Remove all records, leaving an empty collection file. */
  clear(): Promise<void>;

  /**
   * Run a jsonquery string against the full collection. Escape hatch for
   * aggregations, sorts, and complex projections the filter model doesn't
   * cover. Throws `SyntaxError` on malformed queries, matching
   * `api.json.query()` behaviour.
   *
   * @example
   * // Count records with a positive margin:
   * await collection.query('filter(.margin > 0) | size()');
   *
   * @example
   * // Group by a field and count each bucket:
   * await collection.query('groupBy(.tier) | map({ tier: .key, count: .values | size() })');
   */
  query<R = unknown>(jsonQuery: string): Promise<R>;
}

/**
 * `api.db` — script-facing JSON micro-DB namespace. JSON-file-backed
 * collections with CRUD, filter predicates, and a jsonquery escape hatch.
 *
 * Designed for the "dozens to hundreds of records per collection" profile
 * (dice-roll logs, relationship trackers, scene event logs). Not a
 * real database — soft-warns at 10 MB per collection, hard-stops at 50 MB.
 *
 * No permission required. Collections are always owner-scoped by
 * `scriptId` — script A cannot read or mutate script B's collections.
 * Collections persist across script disable / delete; use `drop()` for
 * explicit cleanup.
 */
export interface DbAPI {
  /**
   * Open or create a collection. Path is resolved at creation time based
   * on the scope and the script's active context (chatId / characterId).
   * Calling this twice with the same (name, scope) returns two distinct
   * handles that share the same underlying file and mutation queue.
   *
   * Throws if the scope requires context the script doesn't have (e.g.
   * `scope: 'chat'` with no active chat).
   *
   * @example
   * // Script-scoped counter (default):
   * const counter = await api.db.collection('visits');
   *
   * @example
   * // Character-scoped dice-roll history:
   * const rolls = await api.db.collection('dice-rolls', { scope: 'character' });
   * await rolls.insert({ notation: '1d20+3', total: 18 });
   */
  collection<T extends DbRecord = DbRecord>(
    name: string,
    opts?: CollectionOpts<T>,
  ): Promise<Collection<T>>;

  /**
   * List all collection names visible to the calling script in the given
   * scope (default `'script'`). Only returns collections owned by this
   * script — cross-script visibility is not supported in v1.
   */
  list(scope?: DbScope): Promise<string[]>;

  /**
   * Delete a collection entirely. No-op if the collection doesn't exist.
   * Ownership-safe: scripts can only drop their own collections.
   */
  drop(name: string, scope?: DbScope): Promise<void>;

  /**
   * Quick existence check — returns `true` if the collection's backing
   * file exists in the given scope, `false` otherwise. Does NOT load or
   * parse the file, so it's cheap to call speculatively before an
   * `insert` / `insertMany` workflow. Ownership-safe: scope paths bake
   * in the calling script's id, so `exists` only sees this script's
   * own collections.
   *
   * @example
   * if (!(await api.db.exists('dice-rolls', 'character'))) {
   *   // seed initial state
   *   await (await api.db.collection('dice-rolls', { scope: 'character' }))
   *     .insert({ ...defaultRoll });
   * }
   */
  exists(name: string, scope?: DbScope): Promise<boolean>;
}

// ─── Broadcast API ───────────────────────────────────────────────────────────

/**
 * Real-time pub/sub bus for script-to-script communication within the
 * LumiScript worker. No Lumiverse platform changes required — the bus is
 * a shared singleton in the worker bundle.
 *
 * LumiScript reserves event names prefixed with `ls:` for internal events
 * emitted automatically by the engine:
 *
 * | Event                   | Payload                                              |
 * |-------------------------|------------------------------------------------------|
 * | `ls:tool:invoked`       | `{ name, args, result, scriptId, callMs }`           |
 * | `ls:tool:registered`    | `{ name, scriptId }`                                 |
 * | `ls:tool:unregistered`  | `{ name, scriptId }`                                 |
 * | `ls:macro:registered`   | `{ name, scriptId, mode }` where mode is 'push'|'pull' |
 * | `ls:macro:unregistered` | `{ name, scriptId }`                                 |
 *
 * Use any other name for your own custom events.
 */
export interface BroadcastAPI {
  /**
   * Emit a named event. All subscribed handlers across all scripts receive it
   * synchronously in registration order. Errors in individual handlers are
   * caught so one bad handler cannot block the others.
   */
  emit(event: string, payload?: unknown): void;

  /**
   * Subscribe to a named event.
   * Returns an unsubscribe function — call it to stop receiving the event.
   * Subscriptions are also cleaned up automatically when the owning script
   * is disabled, deleted, or finishes a one-shot execution.
   *
   * **Async-tracking opt-in (LumiScript ≥0.26.4):** if the handler returns
   * a Promise / thenable, the sidebar status indicator (the green/amber
   * dot in Manage and Status tabs) tracks the awaited work — flips to
   * "running" while the Promise is pending, then "success" / "error" on
   * settle. Sync handlers and fire-and-forget handlers (`void (...)()`)
   * produce no status update.
   *
   * @example  fire-and-forget handler — no status tracking
   * api.broadcast.on('tracker:state-changed', (payload) => {
   *   void (async () => { await rerender(); })();
   * });
   *
   * @example  RETURN the IIFE to opt into status tracking
   * api.broadcast.on('tracker:request-rerun', (payload) =>
   *   (async () => { await runRerun(payload); })()
   * );
   *
   * @example  classic sync handler
   * const unsub = api.broadcast.on('ls:tool:invoked', (ev) => {
   *   console.log(ev.name, 'took', ev.callMs, 'ms');
   * });
   */
  on(event: string, handler: (payload: unknown) => void): () => void;
}

// ─── RPC pool (cross-extension) ───────────────────────────────────────────────

/**
 * Context delivered to an `api.rpc.handle()` callback when another extension
 * reads its endpoint. Mirrors Spindle's `SharedRpcRequestContextDTO`.
 */
export interface RpcRequestContext {
  /** Fully-qualified endpoint being read (e.g. `lumiscript.tracker.state`). */
  endpoint: string;
  /** Identifier of the extension performing the read. */
  requesterExtensionId: string;
}

/**
 * Cross-extension shared RPC pool.
 *
 * Wraps Spindle's `spindle.rpcPool` surface. Publish lightweight state on a
 * channel name; readers in other extensions call `read()` to retrieve it. The
 * underlying value lives in the host registry, not in any single worker, so
 * extensions can share state across the worker isolation boundary without
 * touching shared memory.
 *
 * **Two-tier namespacing.** Every endpoint is fully-qualified as
 * `lumiscript.<scriptSlug>.<channel>`. The `<scriptSlug>` segment is derived
 * automatically from the calling script's name (slugified to
 * `[a-z0-9_-]+`), so two scripts publishing the same channel name don't
 * collide. Override the slug via `options.as` when the auto-derived form is
 * unsuitable.
 *
 * **No permission required.** This is a free-tier API. LumiScript logs every
 * registration to the backend console (server-side) so that cross-extension
 * exposure is observable; user-script consoles aren't spammed.
 *
 * **Lifecycle.** Endpoints registered by a script are auto-unregistered when
 * the script is disabled, deleted, replaced, or fails to re-register on a
 * subsequent run (same diff-and-clean-stale pass that applies to macros and
 * tools). The extension as a whole also tears down all owned endpoints when
 * Lumiverse unloads it (Spindle-side guarantee).
 */
export interface RpcAPI {
  /**
   * Publish the latest value on a channel. Replaces any prior `sync()` value
   * or `handle()` registration on the same channel by the same script.
   *
   * Returns the fully-qualified endpoint string (e.g.
   * `lumiscript.tracker.state`) so callers can log or pass it onward without
   * recomputing the prefix.
   *
   * @example
   * await api.rpc.sync('state', currentState);
   * // → 'lumiscript.tracker.state'
   *
   * await api.rpc.sync('state', currentState, { as: 'world' });
   * // → 'lumiscript.world.state' (override script-slug)
   */
  sync<T = unknown>(
    channel: string,
    value: T,
    options?: { as?: string },
  ): Promise<string>;

  /**
   * Register an on-demand handler. Invoked by Spindle when another extension
   * calls `read()` against this endpoint. The handler receives the
   * fully-qualified endpoint and the requester's extension identifier so it
   * can tailor responses (rate-limit per caller, audit-log, etc.).
   *
   * Replaces any prior `sync()` value or `handle()` registration on the same
   * channel by the same script. Returns the fully-qualified endpoint string.
   *
   * Handler exceptions surface to the calling extension as a rejected
   * `read()` promise.
   *
   * @example
   * await api.rpc.handle('history', async ({ requesterExtensionId }) => {
   *   const events = await loadRecentEvents();
   *   return { caller: requesterExtensionId, events };
   * });
   */
  handle<T = unknown>(
    channel: string,
    handler: (ctx: RpcRequestContext) => T | Promise<T>,
    options?: { as?: string },
  ): Promise<string>;

  /**
   * Read a value from another extension's published endpoint. Endpoint must
   * be fully-qualified — use the form `<extensionId>.<channel>` (or, for
   * reading a LumiScript-published endpoint, `lumiscript.<scriptSlug>.<channel>`).
   *
   * Rejects on:
   *   - invalid endpoint name
   *   - target endpoint not registered (or producer disabled / unloaded)
   *   - target handler throwing
   *   - target handler timing out (Spindle-side default)
   *
   * @example
   * const weather = await api.rpc.read<WeatherSnapshot>('weather_ext.current');
   */
  read<T = unknown>(endpoint: string): Promise<T>;

  /**
   * Remove a channel previously published by the calling script. Idempotent
   * — no-op if the channel was never registered.
   *
   * Use the same `as` value (if any) as the original `sync()` / `handle()`
   * call.
   */
  unregister(
    channel: string,
    options?: { as?: string },
  ): Promise<void>;
}

// ─── Script namespace ─────────────────────────────────────────────────────────

export interface ScriptNamespace {
  /**
   * This script's stable identifier. UUID; never changes across enables,
   * edits, or rename. Use as the owner key for any external state the
   * script creates (world-book entries via `automation_id`, persistent
   * storage paths, broadcast channel prefixes, etc.).
   */
  id: string;
  /**
   * This script's current human-readable name. Tracks the name field in
   * the Script Manager — can change when the user renames. Useful for
   * log lines and user-visible messages; NOT suitable as a stable owner
   * key (use `script.id` for that).
   */
  name: string;
  /**
   * This script's type — trigger or library. Library scripts are loaded
   * on demand via `script.require()` and don't receive trigger events.
   */
  type: ScriptType;
  /**
   * Load a library script by name or ID (lazy, cached per execution).
   * Built-in libraries use the `ls:` prefix (e.g. `'ls:components'`).
   * Throws if the library is not found or if a circular dependency is detected.
   *
   * Type-safe overloads for built-in libraries are declared in editor-lib.ts
   * (Monaco autocomplete only). The runtime signature returns `Promise<unknown>`.
   */
  require(nameOrId: string): Promise<unknown>;
}

// ─── Built-in library: ls:components ──────────────────────────────────────────

// ── Shared component options ──────────────────────────────────────────────

/** Options for the `messageFooter` component from `ls:components`. */
export interface MessageFooterOptions {
  /** Stable ID for idempotent injection (forwarded to `injectAtMessage`). */
  id?: string;
  /** Additional CSS class applied to the footer wrapper div. */
  className?: string;
  /**
   * When true, renders a persistent title bar with a click-to-toggle chevron.
   * The body HTML collapses/expands; the title remains visible in both states.
   */
  collapsible?: boolean;
  /**
   * HTML shown in the persistent title bar. Accepts the same HTML vocabulary
   * as the `html` body parameter (composable with `badgeHtml` / `keyValueHtml`).
   * Only meaningful when `collapsible: true`; omitted → chevron-only bar.
   */
  title?: string;
  /**
   * Initial collapsed state. Only meaningful when `collapsible: true`.
   * Default: `false` (expanded).
   */
  defaultCollapsed?: boolean;
}

/** Options for the `messageHeader` component from `ls:components`. */
export interface MessageHeaderOptions {
  /** Stable ID for idempotent injection (forwarded to `injectAtMessage`). */
  id?: string;
  /** Additional CSS class applied to the header wrapper div. */
  className?: string;
  /**
   * When true, renders a persistent title bar with a click-to-toggle chevron.
   * The body HTML collapses/expands; the title remains visible in both states.
   */
  collapsible?: boolean;
  /**
   * HTML shown in the persistent title bar. Accepts the same HTML vocabulary
   * as the `html` body parameter (composable with `badgeHtml` / `keyValueHtml`).
   * Only meaningful when `collapsible: true`; omitted → chevron-only bar.
   */
  title?: string;
  /**
   * Initial collapsed state. Only meaningful when `collapsible: true`.
   * Default: `false` (expanded).
   */
  defaultCollapsed?: boolean;
}

/**
 * Extended handle returned by `messageHeader()` / `messageFooter()` when
 * called with `collapsible: true`. Adds imperative controls for collapsed
 * state and title updates. `update(bodyHtml)` overrides the base
 * `DOMHandle.update()` so callers can replace only the body without
 * destroying the title bar or resetting the collapsed state.
 */
export interface CollapsibleDOMHandle extends DOMHandle {
  /** Current collapsed state (`false` = body visible). */
  isCollapsed(): boolean;
  /** Set collapsed state explicitly. Re-renders the inner content. */
  setCollapsed(collapsed: boolean): void;
  /** Flip the collapsed state. */
  toggle(): void;
  /**
   * Replace the persistent title. Preserves collapsed state and body.
   * Accepts HTML — same vocabulary as the constructor's `title` option.
   */
  setTitle(title: string): void;
  /**
   * Replace the body HTML. Preserves collapsed state and title.
   * Overrides `DOMHandle.update()` — for collapsible handles, `update()`
   * means "replace body HTML", not "replace the whole wrapper".
   */
  update(bodyHtml: string): void;
}

/** Options for `badgeHtml()` from `ls:components`. */
export interface BadgeHtmlOptions {
  /** Color variant. Default: `'default'`. */
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'accent';
  /** Size preset. Default: `'md'`. */
  size?: 'sm' | 'md';
  /** Prepend a colored dot indicator. Default: `false`. */
  dot?: boolean;
  /** Additional CSS class on the badge span. */
  className?: string;
}

/** Options for `statBarHtml()` from `ls:components`. */
export interface StatBarHtmlOptions {
  /** Maximum value for the display label (bar always maps to 0–100%). Default: `100`. */
  max?: number;
  /** CSS color or gradient for the fill. Default: `var(--lumiverse-accent)`. */
  color?: string;
  /** Show the numeric value text. Default: `true`. */
  showValue?: boolean;
  /** Bar height in pixels. Default: `6`. */
  height?: number;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for `keyValueHtml()` from `ls:components`. */
export interface KeyValueHtmlOptions {
  /** Dim the value text. Default: `false`. */
  muted?: boolean;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for `progressBar()` from `ls:components`. */
export interface ProgressBarOptions {
  /** Initial value (0–100). Default: `0`. */
  value?: number;
  /** Text label above the bar. */
  label?: string;
  /** CSS color or gradient for the fill. Default: `var(--lumiverse-accent)`. */
  color?: string;
  /** Show percentage text. Default: `true`. */
  showPercent?: boolean;
  /** Bar height in pixels. Default: `8`. */
  height?: number;
  /** Stable ID for idempotent injection. */
  id?: string;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Extended handle returned by `progressBar()`. */
export interface ProgressBarHandle extends DOMHandle {
  /** Update the bar value (0–100) and optionally the label text. */
  setValue(value: number, label?: string): void;
}

/** CSS position coordinates for `floatingButton()`. */
export interface FloatingButtonPosition {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

/** Options for `floatingButton()` from `ls:components`. */
export interface FloatingButtonOptions {
  /** Fixed position on screen. Defaults to `{ bottom: '80px', right: '16px' }`. */
  position?: FloatingButtonPosition;
  /** HTML string for an icon (e.g. SVG). Sanitized by DOMPurify. */
  icon?: string;
  /** Visual variant. Default: `'default'`. */
  variant?: 'default' | 'accent' | 'ghost';
  /** Size preset. Default: `'md'`. */
  size?: 'sm' | 'md';
  /** Enable drag-to-reposition. Drag is handled entirely on the frontend for smooth UX. Default: false. */
  draggable?: boolean;
  /** Stable ID for idempotent injection. */
  id?: string;
  /** Additional CSS class on the button element. */
  className?: string;
}

// ── multiSelect ──────────────────────────────────────────────────────────

/** A single selectable item in `multiSelect()`. */
export interface MultiSelectItem {
  /** Stable key returned in the resolved array when this item is selected. */
  key: string;
  /** Primary label shown next to the checkbox. */
  label: string;
  /** Optional secondary line shown below the label in dim text. */
  description?: string;
  /** Initial checked state. Default: `false`. */
  checked?: boolean;
  /** When `true`, the row is unclickable and visually dimmed. Default: `false`. */
  disabled?: boolean;
}

/** Options for `multiSelect()` from `ls:components`. */
export interface MultiSelectOptions {
  /** Modal title. Required. */
  title: string;
  /** List of selectable items. */
  items: MultiSelectItem[];
  /** Label for the confirm button. Default: `'Confirm'`. */
  confirmLabel?: string;
  /** Label for the cancel button. Default: `'Cancel'`. */
  cancelLabel?: string;
  /**
   * Minimum number of selections required to confirm. If the user clicks
   * Confirm with fewer selections, a warning toast is shown and the modal
   * stays open. Default: `0`.
   */
  minSelect?: number;
  /**
   * Maximum number of selections allowed. Evaluated on Confirm; over-limit
   * shows a warning toast and keeps the modal open. Default: unlimited.
   */
  maxSelect?: number;
  /** Modal width in pixels. Default: `480`. */
  width?: number;
  /** Modal max-height in pixels. Clamped to viewport. */
  maxHeight?: number;
}

// ── Library exports ──────────────────────────────────────────────────────

/** Exports of the `ls:components` built-in library. */
export interface LSComponentsExports {
  // ── Injection functions (return DOMHandle) ─────────────────────────────

  /**
   * Attach a styled footer section below a message bubble.
   * Wraps `api.ui.dom.injectAtMessage()` with built-in footer styling.
   *
   * When called with `collapsible: true`, returns a `CollapsibleDOMHandle`
   * with imperative controls (`toggle`, `setCollapsed`, `setTitle`,
   * `isCollapsed`) and a body-only `update(bodyHtml)` method.
   */
  messageFooter(
    messageId: string,
    html: string,
    options: MessageFooterOptions & { collapsible: true },
  ): CollapsibleDOMHandle;
  messageFooter(messageId: string, html: string, options?: MessageFooterOptions): DOMHandle;

  /**
   * Attach a styled header section above message content inside the bubble.
   * Wraps `api.ui.dom.injectAtMessage()` with built-in header styling.
   *
   * When called with `collapsible: true`, returns a `CollapsibleDOMHandle`
   * with imperative controls (`toggle`, `setCollapsed`, `setTitle`,
   * `isCollapsed`) and a body-only `update(bodyHtml)` method.
   */
  messageHeader(
    messageId: string,
    html: string,
    options: MessageHeaderOptions & { collapsible: true },
  ): CollapsibleDOMHandle;
  messageHeader(messageId: string, html: string, options?: MessageHeaderOptions): DOMHandle;

  /**
   * Inject a standalone progress bar with a live `setValue()` method.
   * Useful for long-running operations.
   */
  progressBar(target: string, options?: ProgressBarOptions): ProgressBarHandle;

  /**
   * Inject a fixed-position action button. Defaults to bottom-right.
   * Attach click handlers via `handle.on('click', handler)`.
   */
  floatingButton(label: string, options?: FloatingButtonOptions): DOMHandle;

  // ── HTML string builders (composable) ──────────────────────────────────

  /** Return a styled badge/pill HTML string. Composable inside other components. */
  badgeHtml(text: string, options?: BadgeHtmlOptions): string;

  /** Return a labeled stat bar HTML string. Composable inside other components. */
  statBarHtml(label: string, value: number, options?: StatBarHtmlOptions): string;

  /** Return a label–value pair HTML string. Composable inside other components. */
  keyValueHtml(label: string, value: string, options?: KeyValueHtmlOptions): string;

  // ── Modal-based components (require `app_manipulation` via api.ui.showAdvancedModal) ─

  /**
   * Open an advanced modal with a checkbox list and Confirm / Cancel buttons.
   * Resolves with an array of selected `key`s when the user confirms, or
   * `null` if they cancel, dismiss, or the script is torn down.
   *
   * Demonstrates the `api.ui.showAdvancedModal` API — an extension-owned
   * modal body driven by the existing `DOMHandle` pipeline.
   *
   * @example
   * const picked = await multiSelect({
   *   title: 'Pick companions',
   *   items: [
   *     { key: 'alice', label: 'Alice', description: 'Alchemist' },
   *     { key: 'bob',   label: 'Bob',   description: 'Bard' },
   *     { key: 'cara',  label: 'Cara',  description: 'Cleric', checked: true },
   *   ],
   *   minSelect: 1,
   *   maxSelect: 2,
   * });
   * if (picked) api.ui.toast(`Chose: ${picked.join(', ')}`);
   */
  multiSelect(options: MultiSelectOptions): Promise<string[] | null>;
}

// ─── Built-in library: ls:council-prompt ──────────────────────────────────────

/**
 * Options for `buildCouncilSystemPrompt` from `ls:council-prompt`.
 *
 * The helper mirrors Lumiverse's built-in sidecar Council tool prompt —
 * identity block, optional role note, tool spec, optional per-tool prompt
 * directive, optional brevity budget, and user-control guidance.
 *
 * Three settings the host keeps for itself (per-tool `prompt`,
 * `maxWordsPerTool`, `allowUserControl`) are supplied by the tool author
 * here. Extension tools don't receive the user's live Council settings,
 * and published tools probably want deterministic behavior regardless
 * of whatever local preferences the invoking user has configured.
 */
export interface CouncilSystemPromptOptions {
  /**
   * Council member snapshot for the invocation. Unwrap from
   * `ToolInvocationContext.councilMember` — this helper is only meaningful
   * when the tool was invoked via a Council execution cycle.
   */
  councilMember: import('lumiverse-spindle-types').CouncilMemberContext;
  /** Tool display-name + description + optional per-tool prompt directive. */
  tool: {
    display_name: string;
    description: string;
    /** Tool-specific directive appended after the description. */
    prompt?: string;
  };
  /** Per-tool word budget. Pass 0 or omit to skip the brevity note. */
  maxWordsPerTool?: number;
  /**
   * Whether the tool is permitted to direct the user-character's actions.
   * Default `false`.
   */
  allowUserControl?: boolean;
  /**
   * Additional text appended after `tool.prompt`, before the brevity note.
   * Useful for tool-specific dynamic enrichment (e.g. available expression
   * labels, world-state summaries, etc.).
   *
   * Include your own leading `\n\n` if you want the suffix to appear as a
   * separate paragraph — the helper doesn't add spacing, matching the host's
   * convention where `dynamicSuffix` is rendered as-authored (see
   * `council-execution.service.ts` — the built-in `detect_expression`
   * enrichment uses `\n\n## Available Expression Labels\n...`).
   */
  dynamicSuffix?: string;
}

/**
 * Options for `buildCouncilMessages` from `ls:council-prompt`. Extends
 * `CouncilSystemPromptOptions` with the `args` object delivered to the tool
 * handler, so the helper can pull `args.context` into the message array.
 */
export interface CouncilMessagesOptions extends CouncilSystemPromptOptions {
  /**
   * Tool invocation args. Used as a fallback source of chat context via
   * `args.context` — the flattened string the host builds for extension
   * tools on older Lumiverse hosts (pre-993544c8). When absent or empty
   * AND `contextMessages` is also absent, no context message is included
   * in the output array.
   */
  args: ToolInvocationArgs;
  /**
   * Structured chat context from `ToolInvocationContext.contextMessages`.
   * When provided and non-empty, takes priority over the flattened
   * `args.context` string — preserves role boundaries from the host's chat
   * history for better LLM voice continuity and turn-taking awareness.
   *
   * Pass through as `contextMessages: ctx.contextMessages` from your handler.
   * Requires Lumiverse host commit `993544c8` or later (spindle-types
   * 0.4.26+). Older hosts don't populate the field; the helper gracefully
   * falls back to the flattened-string path.
   */
  contextMessages?: LLMMessage[];
}
