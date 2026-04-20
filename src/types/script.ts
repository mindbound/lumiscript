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
  /** Persona (identity profile) CRUD + active persona switching. Requires personas permission. */
  personas: PersonasAPI;
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
  /** Command palette registration. No permission required. */
  commands: CommandsAPI;
  /** Persistent event tracking (track, query, replay). Requires event_tracking permission. */
  events: EventsAPI;
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
}

export interface CharacterUpdateInput extends Partial<CharacterCreateInput> {}

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
   */
  on(event: string, handler: (data: DOMEventData) => void): () => void;
  /**
   * Enable frontend-only drag on this element.
   * @param handleSelector  Optional CSS selector for the drag handle within the element.
   *                        When provided, only that child initiates drag; the root element moves.
   *                        When omitted, the entire element is both handle and move target.
   */
  makeDraggable(handleSelector?: string): void;
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
   */
  addStyle(css: string): { remove(): void };

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
export type { CouncilMemberContext } from 'lumiverse-spindle-types';

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
   * @example
   * const unsub = api.broadcast.on('ls:tool:invoked', (ev) => {
   *   console.log(ev.name, 'took', ev.callMs, 'ms');
   * });
   */
  on(event: string, handler: (payload: unknown) => void): () => void;
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
