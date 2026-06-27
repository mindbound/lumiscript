/**
 * ============================================================================
 * LUMISCRIPT — MONACO EDITOR AMBIENT DECLARATIONS
 * ============================================================================
 * Exported as a string and registered with Monaco's JavaScript language service
 * via `addExtraLib`. Provides hover documentation, autocomplete, and parameter
 * hints for the `api`, `script`, `z`, `data`, and `console` globals injected
 * into every script sandbox.
 *
 * Maintenance: update this file whenever `script.ts` API interfaces change.
 * Strip `export` from copied declarations — this file is an ambient module.
 */

/** @internal assembled once, re-used across editor mounts */
export const LUMISCRIPT_DEFS = `
// ─── Minimal Zod ambient declarations ────────────────────────────────────────

interface ZodType<T = unknown> {
  parse(data: unknown): T;
  optional(): ZodOptional<T>;
  nullable(): ZodNullable<T>;
  describe(description: string): this;
  default(value: T): this;
}
interface ZodOptional<T> extends ZodType<T | undefined> {}
interface ZodNullable<T> extends ZodType<T | null> {}
interface ZodString extends ZodType<string> {
  min(len: number): ZodString;
  max(len: number): ZodString;
  email(): ZodString;
  url(): ZodString;
  regex(pattern: RegExp): ZodString;
  nonempty(): ZodString;
  trim(): ZodString;
}
interface ZodNumber extends ZodType<number> {
  min(val: number): ZodNumber;
  max(val: number): ZodNumber;
  int(): ZodNumber;
  positive(): ZodNumber;
  nonnegative(): ZodNumber;
  negative(): ZodNumber;
}
interface ZodBoolean extends ZodType<boolean> {}
interface ZodLiteral<T> extends ZodType<T> {}
interface ZodEnum<T extends string[]> extends ZodType<T[number]> {}
interface ZodUnknown extends ZodType<unknown> {}
interface ZodAny extends ZodType<any> {}
interface ZodNull extends ZodType<null> {}
interface ZodUndefined extends ZodType<undefined> {}
interface ZodArray<T> extends ZodType<T[]> {
  nonempty(): ZodArray<T>;
  min(n: number): ZodArray<T>;
  max(n: number): ZodArray<T>;
}
interface ZodRecord<T = unknown> extends ZodType<Record<string, T>> {}
type ZodShape = Record<string, ZodType>;
type ZodObjectOutput<T extends ZodShape> = { [K in keyof T]: ReturnType<T[K]['parse']> };
interface ZodObject<T extends ZodShape> extends ZodType<ZodObjectOutput<T>> {
  shape: T;
  extend<U extends ZodShape>(shape: U): ZodObject<T & U>;
  pick<K extends keyof T>(keys: { [Key in K]: true }): ZodObject<Pick<T, K>>;
  omit<K extends keyof T>(keys: { [Key in K]: true }): ZodObject<Omit<T, K>>;
  partial(): ZodObject<{ [K in keyof T]: ZodOptional<ReturnType<T[K]['parse']>> }>;
}
interface ZodUnion<T extends unknown[]> extends ZodType<T[number]> {}

interface ZodModule {
  /** Creates a string schema. */
  string(): ZodString;
  /** Creates a number schema. */
  number(): ZodNumber;
  /** Creates a boolean schema. */
  boolean(): ZodBoolean;
  /** Creates a literal schema matching exactly one value. */
  literal<T extends string | number | boolean | null>(value: T): ZodLiteral<T>;
  /** Creates an enum schema (union of string literals). */
  enum<T extends string[]>(values: T): ZodEnum<T>;
  /** Creates an object schema from a shape map. */
  object<T extends ZodShape>(shape: T): ZodObject<T>;
  /** Creates an array schema wrapping an element schema. */
  array<T>(element: ZodType<T>): ZodArray<T>;
  /** Creates a union of two or more schemas. */
  union<T extends ZodType[]>(options: T): ZodUnion<{ [K in keyof T]: T[K] extends ZodType<infer U> ? U : never }>;
  /** Creates a string-keyed record schema. */
  record<T>(valueType: ZodType<T>): ZodRecord<T>;
  /** Creates an unknown schema (always valid, typed as unknown). */
  unknown(): ZodUnknown;
  /** Creates an any schema (always valid, typed as any). */
  any(): ZodAny;
  /** Creates a null schema. */
  null(): ZodNull;
  /** Creates an undefined schema. */
  undefined(): ZodUndefined;
  /** Wraps a schema as optional (T | undefined). */
  optional<T>(type: ZodType<T>): ZodOptional<T>;
  /** Wraps a schema as nullable (T | null). */
  nullable<T>(type: ZodType<T>): ZodNullable<T>;
}

// ─── Chat API ─────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
  /** Index of the active swipe variant. 0 when the message has no alternates. */
  swipeId: number;
  /** All swipe variants for this message. swipes[swipeId] equals content. */
  swipes: string[];
  /** Per-swipe timestamps (unix epoch seconds), aligned with swipes. */
  swipeDates: number[];
  /** Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. */
  extra: Record<string, unknown>;
}

/** Patch shape accepted by api.chat.editMessage(id, patch). */
interface MessagePatch {
  content?: string;
  metadata?: Record<string, unknown>;
  swipes?: string[];
  swipeId?: number;
  swipeDates?: number[];
  reasoning?: {
    text?: string | null;
    duration?: number | null;
  };
}

interface GetMessagesOptions {
  first?: number;
  last?: number;
}

interface SendMessageOptions {
  role?: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
  /**
   * When true, asks the host to trigger a normal LLM continuation after
   * the message is appended. Fires the full chat-orchestration pipeline
   * (preset + persona + world info + regex + character card + streaming).
   */
  triggerGeneration?: boolean;
  /**
   * Per-call overrides for the triggered generation. Only consulted when
   * triggerGeneration: true. Each field is optional; omitted fields fall
   * through to the active chat's resolved defaults.
   */
  generation?: ChatGenerationOptions;
}

/** Per-call generation overrides for sendMessage with triggerGeneration. */
interface ChatGenerationOptions {
  /** Override the connection profile. Falls back to user's default. */
  connectionId?: string;
  /** Override the persona. Falls back to active persona setting. */
  personaId?: string;
  /** Per-addon enable map for the chosen persona. */
  personaAddonStates?: Record<string, boolean>;
  /** Override the preset. Falls back to activeLoomPresetId / connection preset. */
  presetId?: string;
  /** Force the supplied presetId over connection-attached one. Impersonation-only; no-op for triggerGeneration. */
  forcePresetId?: boolean;
  /** Per-call parameter overrides (temperature, max_tokens, etc.) layered on the preset. */
  parameters?: Record<string, unknown>;
  /** For group chats: which character should respond. Falls back to chat character. */
  targetCharacterId?: string;
  /** Retain council-tool results from the previous generation rather than re-running. */
  retainCouncil?: boolean;
}

interface InjectOptions {
  /**
   * Which pipeline phase to inject into.
   * - \`'intercept'\`: post-assembly, splice into message array (default)
   * - \`'context'\`: pre-assembly, enrich the assembler context
   */
  mode?: 'intercept' | 'context';
  /** Message role. Default: \`'system'\`. */
  role?: 'system' | 'user' | 'assistant';
  /**
   * For \`mode: 'intercept'\` only — how many messages from the END of the
   * assembled array to insert before. \`0\` = append after all messages (default).
   * \`1\` = before the last message.
   */
  depth?: number;
  /**
   * If \`true\` the injection is automatically removed after the next generation
   * cycle. Default: \`false\`.
   */
  ephemeral?: boolean;
}

interface InjectionInfo {
  id: string;
  content: string;
  mode: 'intercept' | 'context';
  role: string;
  depth: number;
  ephemeral: boolean;
  scriptId: string;
}

// ─── Message content processor (api.chat.registerContentProcessor) ──────────

/**
 * Origin tag identifying which user-initiated message-write path triggered
 * a content-processor invocation. \`'create'\` covers both ordinary
 * \`POST .../messages\` writes and auto-inserted greeting rows.
 */
type MessageContentProcessorOrigin =
  | 'create'
  | 'update'
  | 'swipe_add'
  | 'swipe_update'
  /**
   * Per-message display rendering — non-persisting: fires once per visible
   * message paint, returned \`content\` feeds the display-regex pass,
   * returned \`extra\` is ignored (no row to mutate). Use for per-render
   * transforms that depend on transient context.
   */
  | 'render';

/**
 * Context passed to a message content processor before a user-initiated
 * message write reaches SQLite. Handlers can return a patch
 * (\`{ content?, extra? }\`) to transform what gets stored AND what
 * WebSocket subscribers observe on first paint.
 */
interface MessageContentProcessorCtx {
  readonly chatId: string;
  /** Undefined for \`'create'\` origins (the row doesn't exist yet). */
  readonly messageId?: string;
  readonly content: string;
  readonly extra?: Record<string, unknown>;
  readonly origin: MessageContentProcessorOrigin;
  /** Set for \`'swipe_update'\` only — zero-based index of the swipe. */
  readonly swipeIndex?: number;
  readonly userId: string;
}

/**
 * Return value for a message content processor handler. Return \`undefined\`
 * / \`void\` to pass through, or a partial patch:
 *  - \`content\` (if present) replaces the stored content.
 *  - \`extra\` (if present) shallow-merges into the existing \`extra\`.
 *    Ignored on swipe origins (swipes share the parent message's \`extra\`).
 */
interface MessageContentProcessorResult {
  content?: string;
  extra?: Record<string, unknown>;
}

type MessageContentProcessorHandler = (
  ctx: MessageContentProcessorCtx,
) =>
  | MessageContentProcessorResult
  | void
  | Promise<MessageContentProcessorResult | void>;

/** Registration options for \`api.chat.registerContentProcessor\`. */
interface MessageContentProcessorOptions {
  /** Stable identifier. Re-registration with the same id from the same script replaces. */
  id?: string;
  /** Lower runs first within the LumiScript multiplexer pass. Default 100. */
  priority?: number;
  /**
   * Restrict the handler to specific origins. Default: all four origins.
   * Pre-filtered before invocation.
   */
  origin?: MessageContentProcessorOrigin | MessageContentProcessorOrigin[];
  /**
   * Per-invocation soft timeout in milliseconds. Default 2000. The host's
   * outer 10-second budget is shared across all LumiScript handlers, so
   * each handler should stay well under it.
   */
  timeoutMs?: number;
}

/** Handle returned by \`registerContentProcessor\`. \`remove()\` deregisters. */
interface MessageContentProcessorHandle {
  readonly id: string;
  remove(): void;
}

/** Snapshot returned by \`api.chat.listContentProcessors()\`. */
interface RegisteredMessageContentProcessorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  /** \`null\` when no origin filter was supplied. */
  origins: MessageContentProcessorOrigin[] | null;
  timeoutMs: number;
}

interface ChatAPI {
  /** Get messages in the current chat. Pass \`{ last: N }\` for the N most recent. Requires chat_mutation permission. */
  getMessages(options?: GetMessagesOptions): Promise<ChatMessage[]>;
  /** Append a new message to the current chat. Requires chat_mutation permission. */
  sendMessage(content: string, options?: SendMessageOptions): Promise<{ id: string }>;
  /**
   * Edit a message by ID. Requires chat_mutation permission.
   * Pass a string to replace the active swipe's content, or a MessagePatch
   * to update swipes, swipe navigation, reasoning, or metadata. Patches
   * that touch swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED.
   */
  editMessage(id: string, contentOrPatch: string | MessagePatch): Promise<void>;
  /** Delete a message by ID. Requires chat_mutation permission. */
  deleteMessage(id: string): Promise<void>;
  /**
   * Get the current chat ID. Returns null if no chat is active.
   *
   * Sync — returns immediately. Lives across fires: when called from a
   * long-lived registered handler (widget click, modal \`onDismiss\`,
   * drawer-tab \`onActivate\`, input-bar \`onClick\`, tool fires, etc.) the
   * result reflects the active chat at HANDLER-FIRE time, not the time
   * the handler was registered. Trigger-fire callers (script body
   * running for \`MESSAGE_SENT\` / \`CHAT_SWITCHED\` / etc.) get the
   * snapshot taken at trigger-fire time.
   *
   * For the full active-chat object (characterId and other metadata),
   * use \`await api.chats.getActive()\`.
   */
  getChatId(): string | null;
  /**
   * Get a single metadata value from the current chat.
   * Returns undefined if the key does not exist. Requires chats permission.
   */
  getMetadata(key: string): Promise<unknown>;
  /**
   * Set a single metadata key on the current chat (read-modify-write).
   * Requires chats permission.
   */
  setMetadata(key: string, value: unknown): Promise<void>;
  /**
   * Register a prompt injection. Spliced into the assembled message array
   * at generation time. Requires interceptor permission.
   * @example
   * api.chat.inject('my-context', 'Remember: the user is a wizard.', { mode: 'intercept', depth: 1 });
   */
  inject(id: string, content: string, options?: InjectOptions): void;
  /** Remove a single injection by ID. */
  removeInjection(id: string): void;
  /** List all currently active injections (across all scripts). */
  getInjections(): InjectionInfo[];
  /** Remove all injections created by this script. Requires interceptor permission. */
  clearInjections(): void;
  /** Remove ALL injections across all scripts. Requires interceptor permission + allowDangerous. */
  clearAllInjections(): void;

  /** Mark a single message as hidden or visible. Hidden messages are excluded from vector retrieval but still included in prompt assembly. Requires chat_mutation permission. */
  setMessageHidden(id: string, hidden: boolean): Promise<void>;
  /** Bulk variant — mark multiple messages as hidden or visible. Max 500 IDs per call. Requires chat_mutation permission. */
  setMessagesHidden(ids: string[], hidden: boolean): Promise<void>;
  /** Check whether a message is hidden. Returns false for messages that have never had the flag set. Requires chat_mutation permission. */
  isMessageHidden(id: string): Promise<boolean>;

  /**
   * Register a message content processor — handler fires before a
   * user-initiated message write hits SQLite (create, update, swipe_add,
   * swipe_update, and auto-greetings) AND on per-message display rendering
   * (render). Return a patch \`{ content?, extra? }\` to
   * transform the stored row, or \`void\` to pass through. Returned \`extra\`
   * is ignored on swipe origins and on \`render\`. Requires \`chat_mutation\`.
   *
   * **Critical perf**: handler runs synchronously inside the message-write
   * (or per-render) path. Each invocation has a 2-second soft timeout
   * (configurable). DO NOT call \`api.llm.*\` or \`api.utils.http.*\` from a
   * handler — pre-compute via a trigger handler, store in \`api.db.*\`, read
   * here. The \`render\` origin is especially perf-sensitive: it fires on
   * every visible message paint, so prefer scoping write-time-only handlers
   * to the four write origins via \`{ origin: ['create', ...] }\`.
   *
   * **Loop safety**: NOT invoked for \`api.chat.*\` mutations — the host
   * intentionally bypasses the processor chain on extension-initiated writes
   * to avoid an extension's own writes triggering its own handler.
   *
   * Returns a handle whose \`remove()\` deregisters the handler.
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
   */
  registerContentProcessor(
    handler: MessageContentProcessorHandler,
    options?: MessageContentProcessorOptions,
  ): MessageContentProcessorHandle;

  /** List all currently registered message content processors (across all scripts). Diagnostic surface — un-gated. */
  listContentProcessors(): RegisteredMessageContentProcessorInfo[];
}

// ─── LLM API ─────────────────────────────────────────────────────────────────

/**
 * A single message content part. Used to thread native \`tool_use\` /
 * \`tool_result\` payloads through an agentic loop without text-encoding them
 * as pseudo-turns. Available since v0.29.0.
 */
type LlmMessagePart =
  | { type: 'text';        text: string;                                                  cache_control?: Record<string, unknown> }
  | { type: 'image';       data: string; mime_type: string;                               cache_control?: Record<string, unknown> }
  | { type: 'audio';       data: string; mime_type: string;                               cache_control?: Record<string, unknown> }
  | { type: 'tool_use';    id: string;   name: string; input: Record<string, unknown>;    cache_control?: Record<string, unknown> }
  | { type: 'tool_result'; tool_use_id: string; content: string; is_error?: boolean;      cache_control?: Record<string, unknown> };

interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  /**
   * Either a plain string OR an array of \`LlmMessagePart\`. Parts let scripts
   * thread native \`tool_use\` / \`tool_result\` through an agentic loop
   * (preferable to text-encoded pseudo-turns).
   */
  content: string | LlmMessagePart[];
  /**
   * Thinking-mode reasoning content from the previous assistant turn, echoed
   * back on the next request. Required by DeepSeek thinking-mode models on
   * tool-call continuations (the API rejects with 400 otherwise). Plain-text
   * continuations and non-thinking models don't need it. Other providers
   * routing DeepSeek (NanoGPT, OpenRouter) inherit the requirement; providers
   * without thinking mode ignore the field. Copy from
   * \`LLMRawResult.reasoning_content\` after each generateWithTools call.
   * Available since v0.30.2.
   */
  reasoning_content?: string;
}

type LLMProvider =
  | 'ai21' | 'anthropic' | 'chutes' | 'custom' | 'deepseek' | 'electronhub'
  | 'fireworks' | 'google' | 'groq' | 'mistral' | 'moonshot' | 'nanogpt'
  | 'openai' | 'openrouter' | 'perplexity' | 'pollinations' | 'siliconflow'
  | 'xai' | 'zai';

type ReasoningEffort = 'auto' | 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'max' | 'xhigh';
type ThinkingDisplay = 'auto' | 'summarized' | 'omitted';
/** Per-request reasoning override for api.llm.* — source 'inherit' | 'off' | 'custom'. */
interface GenerationReasoningOverride { source?: 'inherit' | 'off' | 'custom'; apiReasoning?: boolean; effort?: ReasoningEffort; thinkingDisplay?: ThinkingDisplay; }
interface ReasoningSettings { apiReasoning: boolean; reasoningEffort: ReasoningEffort; thinkingDisplay: ThinkingDisplay; prefix: string; suffix: string; autoParse: boolean; keepInHistory: number; }
interface ConnectionReasoningBindings { settings: ReasoningSettings; promptBias?: string; }

interface LLMOptions {
  /** Connection profile ID (takes precedence over all other options). */
  connectionId?: string;
  /** Connection profile name (resolved case-insensitively). Ignored when connectionId is set. */
  connectionName?: string;
  /** LLM provider identifier. Ignored when connectionId or connectionName is set. */
  provider?: LLMProvider;
  /** Model identifier. Used together with provider for direct calls. */
  model?: string;
  /** Override temperature (0–2). */
  temperature?: number;
  /** Override max tokens. */
  maxTokens?: number;
  /** When false, forces single tool call per turn (parallel_tool_calls: false). Useful for Mistral and other providers that require serialised multi-step tool use. Only meaningful in generateWithTools(). */
  parallelToolCalls?: boolean;
  /**
   * Optional \`AbortSignal\` to cancel an in-flight generation. When aborted,
   * the upstream LLM request is torn down and the returned promise rejects
   * with an \`AbortError\` (\`err.name === 'AbortError'\`). Composes with
   * \`AbortSignal.timeout()\` / \`AbortSignal.any([...])\`. The worker host
   * automatically aborts in-flight generations on extension teardown — thread
   * a signal only for script-level cancellation (user-cancellable actions,
   * per-request timeouts, racing multiple calls).
   */
  signal?: AbortSignal;
  /** Per-request reasoning override (inherit / off / custom effort). The host
   *  maps it to provider-specific knobs. */
  reasoning?: GenerationReasoningOverride;
}

interface ZodLike<T> {
  parse(data: unknown): T;
}

interface DryRunOptions {
  chatId?: string;
  connectionId?: string;
  personaId?: string;
  presetId?: string;
  generationType?: 'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate';
  parameters?: Record<string, unknown>;
}

interface DryRunBlock {
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

interface WorldInfoActivationStats {
  totalCandidates: number;
  activatedBeforeBudget: number;
  activatedAfterBudget: number;
  evictedByBudget: number;
  evictedByMinPriority: number;
  estimatedTokens: number;
  recursionPassesUsed: number;
}

interface DryRunTokenCount {
  totalTokens: number;
  breakdown: Array<{ name: string; type: string; tokens: number; role?: string }>;
  tokenizerId: string | null;
  tokenizerName: string | null;
}

interface DryRunMemoryStats {
  enabled: boolean;
  chunksRetrieved: number;
  chunksAvailable: number;
  chunksPending: number;
  injectionMethod: 'macro' | 'fallback' | 'disabled';
  retrievalMode?: 'vector' | 'recency' | 'empty' | 'disabled';
  retrievedChunks: Array<{ score: number | null; tokenEstimate: number; messageRange: [number, number]; preview: string }>;
  queryPreview: string;
  settingsSource: 'global' | 'per_chat';
}

interface DryRunResult {
  messages: LLMMessage[];
  breakdown: DryRunBlock[];
  parameters: Record<string, unknown>;
  model: string;
  provider: string;
  tokenCount?: DryRunTokenCount;
  worldInfoStats?: WorldInfoActivationStats;
  memoryStats?: DryRunMemoryStats;
}

interface ToolCall {
  name: string;
  args: Record<string, unknown>;
  call_id: string;
}

interface LLMRawResult {
  /** Text content generated by the LLM. Empty when tool_calls is set. */
  content: string;
  /** Function calls requested by the LLM. Present on intermediate agentic steps. */
  tool_calls?: ToolCall[];
  /**
   * Thinking-mode reasoning content. Present on tool-call iterations against
   * DeepSeek-thinking models. Copy onto the assistant turn you append to
   * history before the next call. See \`LLMMessage.reasoning_content\`.
   */
  reasoning_content?: string;
}

interface LLMRawResultStructured<T> {
  /** Parsed and validated structured content. Present on the final step (no tool_calls). */
  content?: T;
  /** Function calls requested by the LLM. Present on intermediate agentic steps. */
  tool_calls?: ToolCall[];
  /**
   * Thinking-mode reasoning content. Present on tool-call iterations against
   * DeepSeek-thinking models. Copy onto the assistant turn you append to
   * history before the next call. See \`LLMMessage.reasoning_content\`.
   */
  reasoning_content?: string;
}

/**
 * One chunk yielded by \`api.llm.generateStream\`. Three variants:
 *  - \`'token'\`     — incremental visible content chunk
 *  - \`'reasoning'\` — incremental chain-of-thought chunk (thinking-mode models only)
 *  - \`'done'\`      — terminal chunk emitted exactly once on successful completion
 *
 * The \`'done'\` chunk carries the full aggregated content, \`finish_reason\`,
 * optional \`tool_calls\`, and optional \`usage\` token counts. Stream-only
 * surface — non-streaming methods don't currently expose \`usage\`.
 *
 * Cancellation: breaking out of the consumer's \`for await\` loop calls
 * \`.return()\` on the iterator, which propagates to the upstream stream and
 * tears down the HTTP request. You can also pass an \`AbortSignal\` via
 * \`options.signal\` for external cancellation.
 *
 * Field-naming: snake_case throughout, mirroring \`LLMRawResult\` and the
 * upstream \`StreamChunkDTO\`. No DTO translation at the boundary.
 */
type StreamChunk =
  | { type: 'token';     token: string }
  | { type: 'reasoning'; token: string }
  | {
      type:           'done';
      /** Full aggregated content (concatenation of all \`token\` chunks). */
      content:        string;
      /** Aggregated reasoning content (concatenation of all \`reasoning\` chunks). Absent when the model didn't produce reasoning. */
      reasoning?:     string;
      /** Why the generation stopped: \`'stop'\`, \`'length'\`, \`'tool_calls'\`, \`'content_filter'\`, provider-specific. */
      finish_reason:  string;
      /** Function calls requested by the LLM. Present when \`finish_reason === 'tool_calls'\` (or provider-equivalent). */
      tool_calls?:    ToolCall[];
      /**
       * Token-count statistics. Present when the provider reports them
       * (most do; some self-hosted providers don't, and some report all
       * zeros which is functionally equivalent to "didn't report").
       *
       * Stream-only — the non-stream \`generate\` / \`generateStructured\` /
       * \`generateWithTools\` methods don't currently surface \`usage\`.
       * Breaking out of the stream before the \`'done'\` chunk arrives
       * means you won't see usage at all.
       */
      usage?: {
        prompt_tokens:     number;
        completion_tokens: number;
        total_tokens:      number;
      };
    };

interface LLMAPI {
  /**
   * Generate a text response from the LLM. Requires generation permission.
   * @example
   * const reply = await api.llm.generate([
   *   { role: 'system', content: 'You are a helpful assistant.' },
   *   { role: 'user',   content: 'Summarise this chat.' },
   * ], { connectionName: 'My GPT-4o' });
   */
  generate(messages: LLMMessage[], options?: LLMOptions): Promise<string>;

  /**
   * Streaming variant of \`generate\`. Returns an async iterator yielding
   * \`StreamChunk\` values: incremental \`'token'\` and \`'reasoning'\` chunks
   * followed by exactly one terminal \`'done'\` chunk with the full aggregated
   * content + \`finish_reason\` + optional \`tool_calls\` + optional \`usage\`.
   *
   * Same connection-resolution, provider/model-override, and \`options.signal\`
   * cancellation semantics as \`generate\`.
   *
   * Cancellation:
   *  - Breaking out of the \`for await\` loop calls \`.return()\` on the iterator,
   *    which propagates to the upstream stream and tears down the HTTP request.
   *  - Passing an \`AbortSignal\` via \`options.signal\` cancels externally. After
   *    abort, the iterator rejects on the next \`.next()\` with an \`AbortError\`.
   *
   * Requires generation permission.
   *
   * @example basic streaming consumer
   * let content = '';
   * for await (const chunk of api.llm.generateStream(messages)) {
   *   if (chunk.type === 'token')     content += chunk.token;
   *   else if (chunk.type === 'done') console.log('done:', chunk.finish_reason);
   * }
   *
   * @example partial-output-informed abort — stop early when banned content appears
   * const ctrl = new AbortController();
   * for await (const chunk of api.llm.generateStream(messages, { signal: ctrl.signal })) {
   *   if (chunk.type === 'token' && chunk.token.toLowerCase().includes('banned-word')) {
   *     ctrl.abort();
   *     break;
   *   }
   * }
   */
  generateStream(messages: LLMMessage[], options?: LLMOptions): AsyncGenerator<StreamChunk, void, void>;

  /**
   * Generate and parse a structured JSON response. Requires generation permission.
   * Pass a Zod schema for automatic conversion and validation.
   * @example
   * const result = await api.llm.generateStructured(messages, z.object({
   *   sentiment: z.enum(['positive', 'neutral', 'negative']),
   *   score: z.number(),
   * }));
   * console.log(result.sentiment);
   */
  generateStructured<T = unknown>(
    messages: LLMMessage[],
    schema: ZodLike<T> | Record<string, unknown>,
    options?: LLMOptions
  ): Promise<T>;

  /**
   * Generate with tool schemas — returns text content or function calls.
   * Use in an agentic loop: call repeatedly until \`result.tool_calls\` is empty.
   * Requires generation permission.
   * @example
   * // Recommended (v0.30.2+): native parts content + echo reasoning_content
   * // on the assistant turn so DeepSeek-thinking accepts the continuation.
   * // Other providers ignore both fields; pattern is provider-portable.
   * const schemas = api.tools.list().map(t => ({ name: t.name, description: t.description, parameters: t.parameters }));
   * let msgs = [...history];
   * for (let i = 0; i < 8; i++) {
   *   const r = await api.llm.generateWithTools(msgs, schemas, { connectionName: 'tools' });
   *   if (!r.tool_calls?.length) { if (r.content) api.chat.inject('res', r.content); break; }
   *   const toolUses = r.tool_calls.map(c => ({ type: 'tool_use' as const, id: c.call_id, name: c.name, input: c.args }));
   *   msgs.push({
   *     role: 'assistant',
   *     content: toolUses,
   *     ...(r.reasoning_content ? { reasoning_content: r.reasoning_content } : {}),
   *   });
   *   const results = await Promise.all(r.tool_calls.map(async c => ({
   *     type: 'tool_result' as const, tool_use_id: c.call_id, content: await api.tools.invoke(c.name, c.args),
   *   })));
   *   msgs.push({ role: 'user', content: results });
   * }
   */
  generateWithTools(
    messages: LLMMessage[],
    tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
    options?: LLMOptions
  ): Promise<LLMRawResult>;

  /**
   * Structured-output variant of generateWithTools. The 4th argument is a Zod schema
   * or JSON Schema. On the final step (no tool_calls), \`content\` is typed as \`T\`.
   */
  generateWithTools<T = unknown>(
    messages: LLMMessage[],
    tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
    options: LLMOptions | undefined,
    schema: ZodLike<T> | Record<string, unknown>
  ): Promise<LLMRawResultStructured<T>>;

  /**
   * Run the full prompt assembly pipeline without calling the LLM.
   * Returns the assembled messages, token counts, world info activation stats, and memory stats.
   * Useful for inspecting what the LLM would receive. Requires generation permission.
   */
  dryRun(options?: DryRunOptions): Promise<DryRunResult>;
}

// ─── Connections API ────────────────────────────────────────────────────────────

/** Read-only view of an LLM connection profile. NEVER contains the API key (only has_api_key). */
interface Connection {
  id: string;
  name: string;
  provider: string;
  api_url: string;
  model: string;
  preset_id: string | null;
  is_default: boolean;
  has_api_key: boolean;
  metadata: Record<string, unknown>;
  reasoning_bindings: ConnectionReasoningBindings | null;
  created_at: number;
  updated_at: number;
}

/** Read-only access to the user's LLM connection profiles. Free tier. No create/update/delete (connections hold credentials). */
interface ConnectionsAPI {
  /** List all of the user's connection profiles. */
  list(): Promise<Connection[]>;
  /** Get a connection profile by ID, or null. */
  get(connectionId: string): Promise<Connection | null>;
  /** Get the user's default connection (is_default, or first available), or null. */
  getDefault(): Promise<Connection | null>;
  /** Find a connection by name (case-insensitive), or null. */
  findByName(name: string): Promise<Connection | null>;
}

// ─── Web Search API ───────────────────────────────────────────────────────────

/** Safe view of the user's web-search config. NEVER contains the API key (only hasApiKey). */
interface WebSearchSettings {
  enabled: boolean;
  provider: string;
  apiUrl: string;
  requestTimeoutMs: number;
  defaultResultCount: number;
  maxResultCount: number;
  maxPagesToScrape: number;
  maxCharsPerPage: number;
  language: string;
  safeSearch: 0 | 1 | 2;
  engines: string[];
  hasApiKey: boolean;
}
interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
  engine?: string;
  score?: number;
}
interface WebSearchDocument {
  title: string;
  url: string;
  snippet: string;
  sourceType?: string;
  content?: string;
  contentLength?: number;
  error?: string;
}
interface WebSearchOptions {
  query: string;
  count?: number;
  scrape?: boolean;
}
interface WebSearchResponse {
  query: string;
  results: WebSearchResult[];
  documents?: WebSearchDocument[];
  context?: string;
}
/** Web search against the user's configured provider. Requires web_search permission. */
interface WebSearchAPI {
  /** Run a search. With scrape (default) you also get scraped documents + a prompt-ready context. */
  query(options: WebSearchOptions): Promise<WebSearchResponse>;
  /** Read the safe web-search config (never the API key). */
  getSettings(): Promise<WebSearchSettings>;
}

// ─── Users API ────────────────────────────────────────────────────────────────

/** The active user's Lumiverse role. Internal owners report as 'operator'. */
type UserRole = 'operator' | 'admin' | 'user';

/** Active-user context queries: session visibility + Lumiverse role. Free tier. */
interface UsersAPI {
  /** True if the active user has the app visible in at least one session. */
  isVisible(): Promise<boolean>;
  /** The active user's role: 'operator' | 'admin' | 'user'. */
  getRole(): Promise<UserRole>;
}

// ─── Version API ────────────────────────────────────────────────────────────────

/** Running Lumiverse backend + frontend versions. Free tier. */
interface VersionAPI {
  /** The running backend server's semantic version (e.g. '1.2.0'). */
  getBackend(): Promise<string>;
  /** The running frontend bundle's semantic version. */
  getFrontend(): Promise<string>;
}

// ─── Variables API ────────────────────────────────────────────────────────────

interface VariableStore {
  /** Get a variable. Returns defaultValue (or undefined) if the key does not exist. */
  get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined>;
  /** Set a variable. Value is JSON-serialized. */
  set<T = unknown>(key: string, value: T): Promise<void>;
  /** Delete a variable. Returns true if it existed. */
  delete(key: string): Promise<boolean>;
  /** Check if a variable exists. */
  has(key: string): Promise<boolean>;
  /** Delete all variables in this store. */
  clear(): Promise<void>;
}

interface VariablesAPI {
  /** Per-chat variables. Scoped to the current chat ID. Compatible with Lumiverse {{getvar}} macro. */
  local: VariableStore;
  /** Cross-chat variables. Shared across all chats. Compatible with {{getglobalvar}} macro. */
  global: VariableStore;
  /** Per-character variables. Scoped to the current character ID. */
  character: VariableStore;
  /** Chat-metadata persisted variables. Stored in chat.metadata.chat_variables. Accessible via {{@key}} / {{getchatvar}} macros. Persists across generations within the same chat. */
  chat: VariableStore;
}

// ─── JSON API ─────────────────────────────────────────────────────────────────

interface JSONAPI {
  /** Parse a JSON string. Throws on invalid JSON. */
  parse<T = unknown>(text: string): T;
  /** Serialize to JSON. Pass pretty=true for formatted output. */
  stringify(data: unknown, pretty?: boolean): string;
  /** Deep clone a value. */
  clone<T>(data: T): T;
  /** Get a nested value by dot-path (e.g. "user.address.city"). Returns defaultValue if missing. */
  get(data: unknown, path: string, defaultValue?: unknown): unknown;
  /** Set a nested value by dot-path. Returns the mutated object. */
  set(data: unknown, path: string, value: unknown): unknown;
  /** Deep merge objects. Later arguments override earlier ones. */
  merge<T = unknown>(...objects: unknown[]): T;
  /** Check if a string is valid JSON. */
  isValid(text: string): boolean;
  filter<T = unknown>(data: T[], predicate: (item: T) => boolean): T[];
  sort<T = unknown>(data: T[], key: string, direction?: 'asc' | 'desc'): T[];
  uniq<T = unknown>(data: T[]): T[];
  flatten<T = unknown>(data: unknown[]): T[];
  /**
   * Run a jsonquery pipeline against data.
   * Uses the jsonquery text query language (pipe-based, jq-like).
   * @see https://jsonquerylang.org
   * @example
   * // Filter and pick fields
   * const names = api.json.query(users, '.friends | filter(.age >= 18) | sort(.name) | pick(.name)');
   *
   * // Nested access + transformation
   * const totals = api.json.query(orders, '.items | groupBy(.category) | map(sum(.price))');
   */
  query<T = unknown>(data: unknown, queryString: string): T;
}

// ─── Utils API ────────────────────────────────────────────────────────────────

interface HttpRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: string;
  timeout?: number;
  /**
   * v1.0.0-rc.5+ — response body decoding hint.
   * \`'text'\` (default) → body is a UTF-8 string.
   * \`'arraybuffer'\`    → body is a Uint8Array of the raw response bytes.
   * LumiScript transparently decodes the host's base64 transport.
   */
  responseType?: 'text' | 'arraybuffer';
}

interface HttpResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  /** \`string\` when responseType is 'text'/omitted; \`Uint8Array\` when 'arraybuffer'. */
  body: string | Uint8Array;
}

interface UtilsAPI {
  /** Generate a UUID v4 string. */
  uuid(): string;
  /** Generate a short random ID (8 chars, URL-safe). */
  shortId(): string;
  /** Pause execution for \`ms\` milliseconds. */
  wait(ms: number): Promise<void>;
  random: {
    /** Random integer in [min, max] inclusive. */
    int(min: number, max: number): number;
    /** Random float in [min, max). */
    float(min: number, max: number): number;
    /** Pick a random element from an array. */
    pick<T>(array: T[]): T;
    /** Random true/false. */
    bool(): boolean;
    /** Returns true with probability p (0–1). */
    chance(probability: number): boolean;
    /** Return a shuffled copy of the array (Fisher-Yates). */
    shuffle<T>(array: T[]): T[];
  };
  /** HTTP via cors_proxy. Requires allowDangerous + cors_proxy permission. */
  http: {
    get(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    post(url: string, body: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    put(url: string, body: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    delete(url: string, options?: HttpRequestOptions): Promise<HttpResponse>;
    request(url: string, options: HttpRequestOptions): Promise<HttpResponse>;
  };
  /**
   * Handlebars template rendering with automatic Lumiverse macro resolution.
   * Each script has its own isolated Handlebars environment.
   *
   * Two-pass rendering: macros resolved first ({{char}}, {{user}}, {{getvar::key}}, etc.),
   * then Handlebars expressions evaluated ({{variable}}, {{#if}}, {{#each}}, helpers).
   */
  template: {
    /**
     * Resolve Lumiverse macros then render the template as Handlebars.
     * chatId and characterId default to the active context when omitted.
     * @example
     * const prompt = await api.utils.template.render(
     *   'Hello {{char}}! Today: {{date}}. Score: {{score}}.',
     *   { score: 42 },
     * );
     */
    render(
      template: string,
      data?: Record<string, unknown>,
      options?: { chatId?: string; characterId?: string }
    ): Promise<string>;
    /**
     * Pre-compile a template for repeated synchronous use. No macro resolution.
     * @example
     * const greet = api.utils.template.compile('Hello, {{name}}!');
     * greet({ name: 'Alice' }) // → 'Hello, Alice!'
     */
    compile(template: string): (data?: Record<string, unknown>) => string;
    /**
     * Register a custom Handlebars helper scoped to this script.
     * @example
     * api.utils.template.registerHelper('upper', (s) => String(s).toUpperCase());
     */
    registerHelper(name: string, fn: (...args: unknown[]) => unknown): void;
  };

  /**
   * Lumiverse macro resolution (\`{{char}}\`, \`{{user}}\`, \`{{getvar::key}}\`,
   * \`{{roll::2d6}}\`, etc.). Thin wrapper over \`spindle.macros.resolve\`.
   *
   * Unlike \`api.utils.template.render\`, this is macro-only — no Handlebars
   * pass — so use this when you want to preview what a template WOULD render
   * to without triggering side-effecting macros (via \`commit: false\`).
   */
  macros: {
    /**
     * Resolve all macros in a template string.
     *
     * \`commit: false\` requests a dry resolve; well-behaved extension macro
     * handlers skip side effects (disk writes, event emissions). Default:
     * \`commit: true\` (matches normal prompt-assembly behaviour).
     *
     * @example
     * const { text, diagnostics } = await api.utils.macros.resolve(
     *   'Current turn: {{@turn}}. {{incvar::turn}}',
     *   { commit: false },
     * );
     */
    resolve(
      template: string,
      options?: MacrosResolveOptions,
    ): Promise<MacrosResolveResult>;
  };

  /**
   * Image-byte utilities, primarily intended to ease \`api.characters.setAvatar\`
   * workflows. No permission required. Cheap byte-level helpers, not a canvas
   * replacement — no format conversion or resize/crop (setAvatar normalises).
   */
  image: {
    /**
     * Detect an image's MIME type from the first few bytes (magic-byte sniff).
     * Returns \`null\` for unrecognised or truncated input. Recognises PNG,
     * JPEG, WebP, GIF (87a + 89a), BMP.
     * @example
     * const mime = api.utils.image.detectMime(bytes) ?? 'image/png';
     * await api.characters.setAvatar(charId, { data: bytes, mimeType: mime });
     */
    detectMime(bytes: Uint8Array): string | null;

    /**
     * Parse a \`data:<mime>;base64,<payload>\` URL into bytes + MIME.
     * Returns \`null\` for malformed input or non-base64 data URIs.
     */
    dataUrlToBytes(url: string): { data: Uint8Array; mimeType: string } | null;

    /**
     * Encode bytes + a MIME type into a \`data:<mime>;base64,<payload>\` URL.
     * Useful for previewing proposed avatars or embedding in generated HTML.
     */
    bytesToDataUrl(bytes: Uint8Array, mimeType: string): string;
  };
}

/** Options for \`api.utils.macros.resolve\`. */
interface MacrosResolveOptions {
  /** Chat ID for context-sensitive macros. Defaults to the active chat. */
  chatId?: string;
  /** Character ID for character macros. Inferred from the active chat if omitted. */
  characterId?: string;
  /**
   * When \`false\`, requests a dry / non-committing resolve — well-behaved
   * extension macro handlers skip side effects. Default: \`true\`.
   */
  commit?: boolean;
}

/** Result returned by \`api.utils.macros.resolve\`. */
interface MacrosResolveResult {
  /** Resolved template text. */
  text: string;
  /** Diagnostics from the macro engine. */
  diagnostics: Array<{ message: string; offset: number; length: number }>;
}

// ─── UI API ───────────────────────────────────────────────────────────────────

type UINotificationType = 'info' | 'success' | 'warning' | 'error';

// ─── Shared host components (api.ui.components.*) ──────────────────────────────

/** Handle to a mounted host shared-component. Returned synchronously by mount*. */
interface MountedComponentHandle<TOptions = Record<string, unknown>> {
  /** Unique component ID (host-assigned). */
  readonly id: string;
  /** Merge a partial of the mount options into the live component. Fire-and-forget. */
  update(patch: Partial<TOptions>): void;
  /** Unmount the component and release host resources. Idempotent. */
  destroy(): void;
}

/** Handle to a mounted interactive component — adds an async getValue(). */
interface MountedValueComponentHandle<TOptions = Record<string, unknown>, TValue = unknown>
  extends MountedComponentHandle<TOptions> {
  /** Read the current value. Async here (a frontend round-trip), unlike the host's sync getValue(). */
  getValue(): Promise<TValue>;
}

/** Handle to a mounted collapsible section. The host owns the chrome; the body is a DOMHandle you fill. */
interface MountedCollapsibleSectionHandle extends MountedComponentHandle<SpindleCollapsibleSectionOptions> {
  /** The section body — a DOMHandle your script owns. Inject/update content into it. */
  readonly body: DOMHandle;
  /** Read the current expanded state. Async (a frontend round-trip). */
  isExpanded(): Promise<boolean>;
  /** Open the section. Fire-and-forget. */
  expand(): void;
  /** Close the section. Fire-and-forget. */
  collapse(): void;
  /** Flip the section. Fire-and-forget. */
  toggle(): void;
}

interface SpindleBadgeOptions {
  text?: string;
  color?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'pill';
}
interface SpindleSpinnerOptions {
  size?: number;
  fast?: boolean;
}
interface SpindleSwitchOptions {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: 'sm' | 'md';
  disabled?: boolean;
  ariaLabel?: string;
}
interface SpindleTextInputOptions {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
interface SpindleTextAreaOptions {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}
interface SpindleNumericInputOptions {
  value?: number | null;
  onChange?: (value: number | null) => void;
  allowEmpty?: boolean;
  integer?: boolean;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
}
interface SpindleNumberStepperOptions {
  value?: number | null;
  onChange?: (value: number | null) => void;
  allowEmpty?: boolean;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
}
interface SpindleCheckboxOptions {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  hint?: string;
  disabled?: boolean;
}
interface SpindleRangeSliderFormat {
  decimals?: number;
  prefix?: string;
  suffix?: string;
}
interface SpindleRangeSliderOptions {
  min: number;
  max: number;
  value?: number;
  step?: number;
  integer?: boolean;
  onCommit?: (value: number) => void;
  onDragValue?: (value: number | null) => void;
  label?: string;
  hint?: string;
  format?: SpindleRangeSliderFormat;
  disabled?: boolean;
  className?: string;
}
type SpindleSelectOptionLeading =
  | { type: 'image';    src: string; rounded?: boolean; fallback?: { text?: string; background?: string } }
  | { type: 'icon-svg'; svg: string; color?: string }
  | { type: 'icon-url'; url: string }
  | { type: 'swatch';   color: string }
  | { type: 'initial';  text: string; background?: string; color?: string };
interface SpindleSelectOption {
  value: string;
  label: string;
  sublabel?: string;
  group?: string;
  leading?: SpindleSelectOptionLeading;
  disabled?: boolean;
}
interface SpindleSelectOptionsBase {
  options?: SpindleSelectOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  searchThreshold?: number;
  emptyMessage?: string;
  noResultsMessage?: string;
  triggerLabel?: string;
  triggerIcon?: SpindleSelectOptionLeading;
  triggerClassName?: string;
  ariaLabel?: string;
  portal?: boolean;
  align?: 'left' | 'right';
  maxHeight?: number;
  minWidth?: number;
  disabled?: boolean;
  className?: string;
}
interface SpindleSelectOptions extends SpindleSelectOptionsBase {
  value?: string;
  onChange?: (value: string) => void;
  clearable?: boolean;
  clearLabel?: string;
}
interface SpindleMultiSelectOptions extends SpindleSelectOptionsBase {
  value?: string[];
  onChange?: (value: string[]) => void;
}
interface SpindleFolderDropdownOptions {
  folders?: string[];
  value?: string;
  onChange?: (folder: string) => void;
  onCreateFolder?: (name: string) => void;
  placeholder?: string;
  disabled?: boolean;
}
interface SpindleModelComboboxConnection {
  kind: 'llm' | 'image' | 'tts' | 'embedding';
  id?: string;
}
interface SpindleModelComboboxOptions {
  value?: string;
  onChange?: (value: string) => void;
  connection?: SpindleModelComboboxConnection;
  models?: string[];
  modelLabels?: Record<string, string>;
  loading?: boolean;
  onRefresh?: () => void;
  autoRefreshOnFocus?: boolean;
  refreshKey?: string;
  appearance?: 'compact' | 'standard' | 'editor';
  placeholder?: string;
  emptyMessage?: string;
  loadingMessage?: string;
  browseHint?: string;
  disabled?: boolean;
}
interface SpindlePaginationOptions {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  perPage?: number;
  perPageOptions?: number[];
  onPerPageChange?: (n: number) => void;
  totalItems?: number;
}
interface SpindleCloseButtonOptions {
  onClick?: () => void;
  size?: 'sm' | 'md';
  variant?: 'subtle' | 'solid';
  position?: 'static' | 'absolute';
  iconSize?: number;
}
interface SpindleCollapsibleSectionOptions {
  title: string;
  iconSvg?: string;
  iconUrl?: string;
  badge?: string | number;
  defaultExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
}

/** A drawer tab discoverable via api.ui.getDrawerTabs() — built-in or extension-contributed. */
interface UIDrawerTab {
  /** Stable id to pass to api.ui.openDrawerTab(). */
  id: string;
  /** Short label shown beneath the sidebar icon. */
  shortName: string;
  /** Full title shown in menus and the command palette. */
  tabName: string;
  /** One-line description shown in the command palette. */
  tabDescription: string;
  /** Keywords used for command-palette fuzzy search. */
  keywords: string[];
  /** Whether the tab is built into Lumiverse or contributed by an extension. */
  source: 'builtin' | 'extension';
  /** For extension-contributed tabs, the owning extension's identifier. */
  extensionId?: string;
}

/** A settings tab discoverable via api.ui.getSettingsTabs(). Role-restricted tabs are filtered out. */
interface UISettingsTab {
  /** Stable id to pass to api.ui.openSettings(). */
  id: string;
  /** Short label shown in the settings sidebar. */
  shortName: string;
  /** Full title shown in the settings header / command palette. */
  tabName: string;
  /** One-line description shown in the command palette. */
  tabDescription: string;
  /** Keywords used for command-palette fuzzy search. */
  keywords: string[];
  /** Set when the tab is only visible to certain roles. */
  role?: 'admin' | 'owner';
}

/** Options for api.ui.pickFile(). */
interface PickFileOptions {
  /** File-type filters — extensions and/or MIME types (e.g. ['.json', 'application/json']). */
  accept?: string[];
  /** Allow selecting more than one file. Default: false. */
  multiple?: boolean;
  /** Maximum size per file in bytes. pickFile() rejects if a selected file exceeds this. */
  maxSizeBytes?: number;
}

/** A file returned by api.ui.pickFile(). */
interface PickedFile {
  /** Original file name. */
  name: string;
  /** MIME type (falls back to 'application/octet-stream'). */
  mimeType: string;
  /** File size in bytes. */
  sizeBytes: number;
  /** Raw file contents. */
  bytes: Uint8Array;
}

/** Virtual-keyboard snapshot from api.ui.events. */
interface UIKeyboardState {
  visible: boolean;
  insetBottom: number;
  viewportWidth: number;
  viewportHeight: number;
}

/** Side-drawer snapshot from api.ui.events. */
interface UIDrawerState {
  open: boolean;
  tabId: string | null;
}

/** Settings-modal snapshot from api.ui.events. */
interface UISettingsState {
  open: boolean;
  view: string;
}

/** Reactive Lumiverse UI state — keyboard / drawer / settings. Free tier. */
interface UIEventsAPI {
  /** The current virtual-keyboard snapshot. */
  getKeyboardState(): Promise<UIKeyboardState>;
  /** Subscribe to keyboard changes. Returns an unsubscribe fn. */
  onKeyboardChange(handler: (state: UIKeyboardState) => void): () => void;
  /** The current side-drawer snapshot. */
  getDrawerState(): Promise<UIDrawerState>;
  /** Subscribe to drawer changes. Returns an unsubscribe fn. */
  onDrawerChange(handler: (state: UIDrawerState) => void): () => void;
  /** The current settings-modal snapshot. */
  getSettingsState(): Promise<UISettingsState>;
  /** Subscribe to settings changes. Returns an unsubscribe fn. */
  onSettingsChange(handler: (state: UISettingsState) => void): () => void;
}

interface UIAPI {
  /**
   * Show a native Lumiverse toast notification. Fire-and-forget.
   * Rate-limited to 5 per 10 seconds. Extension name auto-prefixed.
   * @example
   * api.ui.toast('Analysis complete.', 'success');
   */
  toast(message: string, type?: UINotificationType, options?: { title?: string; duration?: number }): void;
  /**
   * Show a themed text input dialog using the native Lumiverse prompt.
   * Returns the entered string (trimmed), or null if the user cancels or dismisses.
   * @param options.placeholder  Placeholder text shown inside the empty input
   * @param options.submitLabel  Label for the submit button (default: 'Submit')
   * @param options.cancelLabel  Label for the cancel button (default: 'Cancel')
   * @param options.multiline    Use a multi-line textarea instead of a single-line input
   * @example
   * const name = await api.ui.prompt('Enter character name:', 'Alice');
   * const notes = await api.ui.prompt('Add notes:', '', { multiline: true });
   */
  prompt(
    message: string,
    defaultValue?: string,
    options?: { placeholder?: string; submitLabel?: string; cancelLabel?: string; multiline?: boolean },
  ): Promise<string | null>;
  /**
   * Show a themed yes/no confirmation dialog using the native Lumiverse modal.
   * Returns true if the user clicks Confirm, false if they cancel or dismiss.
   * @param options.variant  Button colour: 'info' | 'warning' | 'danger' | 'success' (default: 'info')
   * @param options.confirmLabel  Label for the confirm button (default: 'Confirm')
   * @param options.cancelLabel   Label for the cancel button (default: 'Cancel')
   * @example
   * if (await api.ui.confirm('Delete all variables?', 'Confirm Clear', { variant: 'danger', confirmLabel: 'Delete' })) {
   *   await api.variables.local.clear();
   * }
   */
  confirm(
    message: string,
    title?: string,
    options?: { variant?: 'info' | 'warning' | 'danger' | 'success'; confirmLabel?: string; cancelLabel?: string },
  ): Promise<boolean>;
  /**
   * Open a structured read-only modal using the native Lumiverse modal system.
   * Returns a ModalHandle — await handle.result for dismissal, or call handle.close() to dismiss programmatically.
   * Items are rendered in order: text, heading, key_value, divider, card.
   * @param options.title  Modal header title (required)
   * @param options.width  Width in pixels (default: 420)
   * @param options.maxHeight  Max height in pixels (default: 520)
   * @param options.persistent  When true, user cannot close the modal — only programmatic dismissal or cleanup
   * @example
   * var handle = api.ui.showModal([
   *   { type: 'heading', content: 'Chat Stats' },
   *   { type: 'key_value', label: 'Messages', value: String(msgs.length) },
   *   { type: 'divider' },
   *   { type: 'card', items: [{ type: 'text', content: summary }] },
   * ], { title: 'Analysis Results' });
   * var result = await handle.result;
   */
  showModal(items: ModalItem[], options: ShowModalOptions): ModalHandle;

  /**
   * Open the native Lumiverse expanded text editor with macro syntax highlighting.
   * Blocks until the user closes the editor.
   * @returns The edited text, or null if the user cancelled.
   * @example
   * var text = await api.ui.editText('Edit System Prompt', currentPrompt);
   * if (text !== null) { // user submitted }
   */
  editText(title?: string, value?: string, options?: { placeholder?: string }): Promise<string | null>;

  /**
   * Open a DOM-owned modal — script has full control of the body via the
   * returned handle's \`root\` (a \`DOMHandle\`). Requires app_manipulation
   * permission. Host limit: 2 modals per extension.
   * @example
   * const modal = api.ui.showAdvancedModal({ title: 'Details', width: 520 });
   * modal.root.update(\`<div class="stats">Loading…</div>\`);
   * modal.onDismiss(reason => console.log('closed:', reason));
   */
  showAdvancedModal(options: AdvancedModalOptions): AdvancedModalHandle;

  /**
   * Show a popover context menu at the given screen coordinates. Resolves with
   * the \`key\` of the selected item, or \`null\` if the user dismissed the menu.
   * @example
   * handle.on('contextmenu', async (data) => {
   *   const key = await api.ui.showContextMenu({
   *     position: { x: 200, y: 300 },
   *     items: [
   *       { key: 'edit', label: 'Edit' },
   *       { key: 'delete', label: 'Delete', danger: true },
   *     ],
   *   });
   *   if (key === 'delete') { ... }
   * });
   */
  showContextMenu(options: ShowContextMenuOptions): Promise<string | null>;

  /**
   * Register an action in the chat input bar's Extras popover. Returns a
   * handle for subsequent setLabel / setSubtitle / setEnabled / onClick /
   * destroy calls. Same-id re-registration silently replaces the existing
   * entry — safe to call from recurring event handlers (e.g.
   * SETTINGS_UPDATED). Host limits: 4 per extension, 12 global.
   * @example
   * const action = api.ui.registerInputBarAction({
   *   id: 'summarize', label: 'Summarize chat',
   *   subtitle: 'Last run: never',
   *   iconSvg: '<svg>...</svg>',
   * });
   * action.onClick(async () => {
   *   const ts = new Date().toLocaleTimeString();
   *   action.setSubtitle(\`Last run: \${ts}\`);
   * });
   */
  registerInputBarAction(options: InputBarActionOptions): InputBarActionHandle;

  /**
   * Create a draggable floating widget over the chat viewport. The body DOM
   * is fully script-owned via \`handle.root\`. Requires ui_panels permission.
   * Host limit: 2 widgets per script, 8 global.
   * @example
   * const w = api.ui.createFloatWidget({ width: 200, height: 80, initialPosition: { x: 100, y: 100 } });
   * w.root.update(\`<div>Hello</div>\`);
   * w.onDragEnd(pos => console.log('dropped at', pos));
   */
  createFloatWidget(options: FloatWidgetOptions): FloatWidgetHandle;
  /** Mount a route-persistent full-bleed document.body portal. Requires app_manipulation. */
  mountApp(options?: MountAppOptions): MountedAppHandle;

  /**
   * Register a tab in the ViewportDrawer sidebar. The tab body is script-owned
   * via \`handle.root\`. Automatically appears in the command palette (Ctrl+K).
   * LumiScript enforces at most 1 drawer tab per script.
   * @example
   * const tab = api.ui.registerDrawerTab({
   *   id: 'dashboard', title: 'Script Dashboard', shortName: 'Dash',
   *   iconSvg: '<svg>...</svg>',
   * });
   * tab.root.update(\`<div class="dash">…</div>\`);
   * tab.onActivate(() => { ... });
   */
  registerDrawerTab(options: DrawerTabOptions): DrawerTabHandle;

  /**
   * Send an OS-level push notification to the user's devices.
   * Only delivered when the app is not focused. Requires push_notification permission.
   * @returns { sent: number } — how many devices received the notification.
   */
  pushNotification(title: string, body: string, options?: {
    tag?: string; url?: string; icon?: string; rawTitle?: boolean; image?: string;
  }): Promise<{ sent: number }>;

  /** Check if push notifications are available. Requires push_notification permission. */
  getPushStatus(): Promise<{ available: boolean; subscriptionCount: number }>;

  // ── Navigation (free tier) ───────────────────────────────────────────────
  /** List discoverable drawer tabs (built-in + extension-contributed) visible to the user. */
  getDrawerTabs(): Promise<UIDrawerTab[]>;
  /** List discoverable settings tabs visible to the user (role-restricted tabs filtered out). */
  getSettingsTabs(): Promise<UISettingsTab[]>;
  /** Open the drawer to a specific tab id (built-in or extension-contributed). */
  openDrawerTab(tabId: string): Promise<void>;
  /** Close the drawer if it is currently open. */
  closeDrawer(): Promise<void>;
  /** Open the settings modal to a tab id (e.g. 'connections', 'display'); omit to land on 'display'. */
  openSettings(viewId?: string): Promise<void>;
  /** Close the settings modal if it is currently open. */
  closeSettings(): Promise<void>;
  /** Open the command palette overlay. */
  openCommandPalette(): Promise<void>;
  /** Close the command palette overlay if it is currently open. */
  closeCommandPalette(): Promise<void>;

  /**
   * Open the browser's native file picker and return the selected file(s).
   * Free tier (the native dialog is the user-action gate). Resolves [] if the
   * user cancels; rejects if a file exceeds maxSizeBytes. Feed bytes into
   * api.images.upload / api.db / api.files, or decode text via TextDecoder.
   */
  pickFile(options?: PickFileOptions): Promise<PickedFile[]>;

  /** Reactive UI state: keyboard / drawer / settings snapshots + subscriptions. Free tier. */
  events: UIEventsAPI;

  /**
   * Shared host-component sub-API. Mounts Lumiverse's first-party themed React
   * components into a script-owned container element (inject a slot via
   * api.ui.dom.inject first, then mount into it). Components inherit the active
   * Lumiverse theme automatically. Requires the app_manipulation permission.
   */
  components: {
    /** Mount an inline status/label badge. */
    mountBadge(target: DOMHandle, options?: SpindleBadgeOptions): MountedComponentHandle<SpindleBadgeOptions>;
    /** Mount a loading spinner. */
    mountSpinner(target: DOMHandle, options?: SpindleSpinnerOptions): MountedComponentHandle<SpindleSpinnerOptions>;
    /** Mount a toggle switch. onChange fires with the new boolean; getValue() reads the current state. */
    mountSwitch(target: DOMHandle, options?: SpindleSwitchOptions): MountedValueComponentHandle<SpindleSwitchOptions, boolean>;
    /** Mount a single-line text input. onChange fires with the current text; getValue() reads it. */
    mountTextInput(target: DOMHandle, options?: SpindleTextInputOptions): MountedValueComponentHandle<SpindleTextInputOptions, string>;
    /** Mount a multi-line text editor. onChange fires with the current text; getValue() reads it. */
    mountTextArea(target: DOMHandle, options?: SpindleTextAreaOptions): MountedValueComponentHandle<SpindleTextAreaOptions, string>;
    /** Mount a validated number input. onChange/getValue() use number | null. */
    mountNumericInput(target: DOMHandle, options?: SpindleNumericInputOptions): MountedValueComponentHandle<SpindleNumericInputOptions, number | null>;
    /** Mount a number input with +/- steppers. onChange/getValue() use number | null. */
    mountNumberStepper(target: DOMHandle, options?: SpindleNumberStepperOptions): MountedValueComponentHandle<SpindleNumberStepperOptions, number | null>;
    /** Mount a checkbox. onChange fires with the new boolean; getValue() reads the checked state. */
    mountCheckbox(target: DOMHandle, options?: SpindleCheckboxOptions): MountedValueComponentHandle<SpindleCheckboxOptions, boolean>;
    /** Mount a range slider. options.min/options.max required; onCommit fires once per gesture; onDragValue fires live; getValue() reads the committed value. */
    mountRangeSlider(target: DOMHandle, options: SpindleRangeSliderOptions): MountedValueComponentHandle<SpindleRangeSliderOptions, number>;
    /** Mount a searchable single-select. onChange fires with the value; getValue() reads it. */
    mountSelect(target: DOMHandle, options?: SpindleSelectOptions): MountedValueComponentHandle<SpindleSelectOptions, string>;
    /** Mount a searchable multi-select. onChange/getValue() use string[]. */
    mountMultiSelect(target: DOMHandle, options?: SpindleMultiSelectOptions): MountedValueComponentHandle<SpindleMultiSelectOptions, string[]>;
    /** Mount a folder picker with inline create-folder. onChange fires with the folder; getValue() reads it. */
    mountFolderDropdown(target: DOMHandle, options?: SpindleFolderDropdownOptions): MountedValueComponentHandle<SpindleFolderDropdownOptions, string>;
    /** Mount the connection-aware model picker. onChange fires with the model id; getValue() reads it. */
    mountModelCombobox(target: DOMHandle, options?: SpindleModelComboboxOptions): MountedValueComponentHandle<SpindleModelComboboxOptions, string>;
    /** Mount page navigation (fully controlled; onPageChange required). No getValue(). */
    mountPagination(target: DOMHandle, options: SpindlePaginationOptions): MountedComponentHandle<SpindlePaginationOptions>;
    /** Mount a themed close (X) button. onClick fires on click. No getValue(). */
    mountCloseButton(target: DOMHandle, options?: SpindleCloseButtonOptions): MountedComponentHandle<SpindleCloseButtonOptions>;
    /** Mount a collapsible section. Host owns the chrome; handle.body is a DOMHandle you fill. options.title required. */
    mountCollapsibleSection(target: DOMHandle, options: SpindleCollapsibleSectionOptions): MountedCollapsibleSectionHandle;
  };

  /**
   * DOM injection sub-API. Inject HTML and CSS into the Lumiverse frontend and
   * receive DOM events back. Requires the app_manipulation permission.
   */
  dom: {
    /**
     * Inject sanitized HTML at a CSS selector target.
     * Returns a DOMHandle for updating, removing, or attaching event listeners.
     */
    inject(target: string, html: string, options?: DOMInjectOptions): DOMHandle;

    /**
     * Inject sanitized HTML into a chat message's bubble container.
     * Handles timing automatically (waits up to 5s for the element to appear).
     * Resolves the correct target based on chat layout (Bubble or Minimal).
     *
     * @param messageId UUID of the target message
     * @param html HTML string (sanitized on frontend)
     * @param options Position and stable ID
     */
    injectAtMessage(messageId: string, html: string, options?: DOMMessageInjectOptions): DOMHandle;

    /**
     * Add a style element scoped to this script via CSS at-scope.
     * Returns an object with remove() to remove the style.
     * Use --lumiverse-* CSS variables for theming.
     *
     * When \`opts.id\` is provided, repeated calls with the same id
     * replace the prior stylesheet rather than accumulating — useful
     * for dev iteration loops where you edit the CSS and re-run
     * without manual cleanup.
     */
    addStyle(css: string, opts?: DOMAddStyleOptions): { remove(): void };

    /**
     * Attach an event-delegated listener at a known root, matching descendant
     * elements by CSS selector. Lets scripts react to user interactions with
     * DOM that the script itself didn't inject — most commonly, interactive
     * elements (buttons, inputs, selects, textareas) emitted by the LLM
     * into \`.mes_text\` content.
     *
     * Single host-side capture listener per (root, event) tuple; selector
     * matching happens frontend-side via \`event.target.closest(selector)\`.
     * IPC fires only when a selector matches.
     *
     * Default scope (\`options.root: 'chat'\`) restricts matching to chat
     * content; wider scope (\`options.root: 'document'\`) matches anywhere
     * in the page. Both gate on \`app_manipulation\` — same permission
     * as inject / injectAtMessage / addStyle.
     *
     * @param selector CSS selector matched against \`event.target.closest()\`
     * @param event    Event name ('click', 'change', 'input', 'keydown', ...)
     * @param handler  Called with serialized DOMDelegatedEventData on match
     * @param options  Scope, message scoping, prevention flags
     * @returns        Unsubscribe function
     */
    delegate(
      selector: string,
      event:    string,
      handler:  (data: DOMDelegatedEventData) => void | Promise<void>,
      options?: DOMDelegateOptions,
    ): () => void;

    /** Remove all DOM injections and styles created by this script. */
    cleanup(): void;
  };
}

// ─── DOM Injection API ───────────────────────────────────────────────────────

interface DOMInjectOptions {
  /** Insertion position. Default: 'beforeend'. */
  position?: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend';
  /**
   * Stable ID for idempotent injection. Re-using the same ID updates the
   * existing element instead of creating a duplicate.
   */
  id?: string;
}

/** Options for api.ui.dom.injectAtMessage(messageId, html, options?). */
interface DOMMessageInjectOptions {
  /** Semantic position: 'footer' (default, end of bubble) or 'header' (start of bubble). */
  position?: 'header' | 'footer';
  /** Stable ID for idempotent injection. */
  id?: string;
}

/** Options for api.ui.dom.addStyle(css, opts?). */
interface DOMAddStyleOptions {
  /**
   * Optional script-scoped identifier. Repeated \`addStyle\` calls with
   * the same id (within this script) replace the prior stylesheet rather
   * than accumulating. Useful for dev iteration: \`addStyle(css, { id: 'main' })\`
   * on every fire trivially reflects edits without globalThis-flag
   * bookkeeping or extension toggles. Ids are scoped per scriptId.
   */
  id?: string;
}

/** Serialized subset of a DOM event. */
interface DOMEventData {
  type: string;
  targetId?: string;
  targetValue?: string;
  targetChecked?: boolean;
  dataset?: Record<string, string>;
  detail?: unknown;
  /** Viewport X coordinate. Populated for MouseEvent / PointerEvent / TouchEvent (first touch). */
  clientX?: number;
  /** Viewport Y coordinate. Same event families as clientX. */
  clientY?: number;
  /** KeyboardEvent.key — value of the key pressed ('Enter', 'a', 'Shift', 'ArrowUp'). KeyboardEvents only. */
  key?: string;
  /** KeyboardEvent.code — physical key, layout-independent ('Enter', 'KeyA', 'ShiftLeft'). KeyboardEvents only. */
  code?: string;
}

/** Options for api.ui.dom.delegate(selector, event, handler, options?). */
interface DOMDelegateOptions {
  /**
   * Where to attach the actual host-side capture listener. Default: 'chat'.
   * - 'chat': restricts matching to the chat content container.
   * - 'document': matches anywhere in the page (including Lumiverse's
   *   own UI surfaces). Both gate on \`app_manipulation\`.
   */
  root?: 'chat' | 'document';
  /** Narrow matching to the .mes_text content of one specific message. */
  messageId?: string;
  /**
   * Call event.preventDefault() before dispatching. Default: false.
   * v0.27.5+: can also be a ConditionalPreventDefault object to fire
   * only on specific key / button / modifier combinations.
   */
  preventDefault?: boolean | ConditionalPreventDefault;
  /** Call event.stopPropagation() after dispatching. Default: false. */
  stopPropagation?: boolean;
  /**
   * When \`true\`, ALSO intercept events on elements inside the host's OPEN
   * shadow-DOM "islands" (styled assistant-message HTML Lumiverse isolates when
   * it has a <style> tag or several inline styles). Lets a delegation reach
   * LLM-emitted controls inside styled blocks that would otherwise be
   * unreachable. \`change\` / \`submit\` work because the listener attaches
   * inside the shadow root. A leading \`[data-component="MessageContent"] \`
   * selector prefix is stripped and re-validated in light DOM; selectors that
   * can't be decomposed fall back to light-DOM-only. Only mode:'open' roots;
   * pairs with root:'chat'. Default: false.
   */
  pierceShadow?: boolean;
}

/** Options for DOMHandle.on(event, handler, options?). */
interface DOMListenOptions {
  /**
   * Call event.preventDefault() before dispatching. Default: false.
   * v0.27.5+: can also be a ConditionalPreventDefault object to fire
   * only on specific key / button / modifier combinations.
   */
  preventDefault?: boolean | ConditionalPreventDefault;
}

/**
 * Predicate-based preventDefault — fires only when event data matches
 * specific filters. Use when you want browser defaults suppressed on a
 * specific key / button / modifier combo while letting others through.
 *
 * All filters are AND'd. Empty {} is "always match" (equivalent to true).
 *
 * Examples:
 *   { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } }  // plain Enter only
 *   { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } }  // Ctrl+S
 *   { onButtons: [2] }                                            // right-click only
 *
 * Available since LumiScript v0.27.5.
 */
interface ConditionalPreventDefault {
  /** KeyboardEvent.key value(s) — OR-matched. Non-keyboard events skipped when set. */
  onKeys?: string[];
  /** KeyboardEvent.code value(s) — layout-independent. Non-keyboard events skipped when set. */
  onCodes?: string[];
  /** MouseEvent.button value(s) — 0=left, 1=middle, 2=right, 3=back, 4=forward. */
  onButtons?: number[];
  /** Modifier constraint. ALL require must be held; NONE of exclude may be. */
  whenModifiers?: {
    require?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
    exclude?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
  };
}

/**
 * Event data delivered to handlers registered via api.ui.dom.delegate().
 * Extends DOMEventData with a serialized snapshot of the element actually
 * matched by the selector — which may be an ancestor of event.target.
 */
interface DOMDelegatedEventData extends DOMEventData {
  matched: {
    tagName:        string;
    id?:            string;
    classList:      string[];
    dataset:        Record<string, string>;
    attributes:     Record<string, string>;
    textContent:    string;
    value?:         string;
    checked?:       boolean;
    selectedIndex?: number;
    selectedText?:  string;
    /** Trimmed text of the first associated <label>. Input / textarea / select only. */
    label?:         string;
  };
  modifiers: {
    ctrl:    boolean;
    shift:   boolean;
    alt:     boolean;
    meta:    boolean;
    button?: number;
  };
  /**
   * Populated when the matched element is inside an assistant or user
   * message. swipeId is the active swipe at dispatch time, resolved
   * backend-side via the host's chat history. Falls through with 0 if
   * the chat closed before dispatch or the message left the history.
   */
  message?: {
    id:      string;
    role:    'user' | 'assistant';
    swipeId: number;
  };
}

/**
 * Handle to an injected DOM element.
 * All methods are fire-and-forget (send a message to the frontend).
 */
interface DOMHandle {
  readonly id: string;
  /** Replace the element's inner HTML. */
  update(html: string): void;
  /** Remove the element and its listeners. */
  remove(): void;
  /**
   * Attach a DOM event listener. Returns an unsubscribe function.
   *
   * **For handlers that do async work, make the handler \`async\` and
   * \`await\` everything.** The host keeps the per-fire activeRun alive
   * across the handler's await chain, so dispatches inside the awaited
   * chain land cleanly. A SYNC handler that kicks off async work
   * fire-and-forget (e.g. \`(ev) => { doAsync(); }\` with no \`await\`)
   * returns \`undefined\` immediately, the activeRun closes, and any
   * \`api.*\` calls the lingering async work tries to make fail with
   * \`RunCompletedError: late api call ... runIdSource=context\`. Write
   * \`async (ev) => { await doAsync(); }\` instead.
   *
   * @example
   * const unsub = handle.on('click', async (data) => {
   *   if (data.dataset?.action !== 'open') return;
   *   await openModal();
   * });
   * // Later: unsub();
   */
  on(event: string, handler: (data: DOMEventData) => void, options?: DOMListenOptions): () => void;
  /**
   * Enable frontend-only drag on this element.
   * @param handleSelector Optional CSS selector for the drag handle.
   *   When provided, only that child initiates drag; the root element moves.
   *   When omitted, the entire element is both handle and move target.
   * @example
   * const panel = api.ui.dom.inject('body', panelHtml, { id: 'my-panel' });
   * panel.makeDraggable('.title-bar');
   */
  makeDraggable(handleSelector?: string): void;
  /**
   * Inject HTML as a descendant of this handle's bound element — selector
   * resolved RELATIVE to this element, not via \`document.querySelector\`.
   * Returns a fresh \`DOMHandle\` for the injected child so you can call
   * \`update(html)\` on it independently without touching sibling DOM.
   *
   * This is the right choice when the parent may be orphaned at inject
   * time — drawer tabs mount lazily on first activation, advanced-modal
   * and float-widget bodies mount when the host shell mounts, and all
   * three are unreachable via global \`document.querySelector\` until
   * then. \`injectChild\` resolves through the backend's element-map ref
   * and works regardless of mount state.
   *
   * For document-scoped (host-wide) injection, keep using
   * \`api.ui.dom.inject(target, html, opts)\` — it bypasses this scoping.
   *
   * **Sanitisation** (v1.0.0-rc.7+): the scoped path runs HTML through
   * the host's DOMPurify pass with the same FORBID_TAGS set as
   * \`api.ui.dom.inject\` — \`iframe\` / \`frame\` / \`object\` / \`embed\` /
   * \`form\` tags and inline \`on*\` / \`formaction\` / \`javascript:\`
   * attributes are stripped here too. (The scoped path runs its own
   * DOMPurify call rather than delegating to \`ctx.dom.inject\` because
   * the manual scoped-insert can't reach orphaned parents via the host
   * API; the config and threat model match exactly.)
   *
   * @example
   * // Inside a drawer tab — render shell once, then update the grid
   * // in place on every filter change without rebuilding the inputs:
   * tab.root.update(\`
   *   <div class="search"><input data-action="filter" /></div>
   *   <div data-grid></div>
   * \`);
   * function renderGrid() {
   *   tab.root.injectChild('[data-grid]', gridHtml, { id: 'grid' });
   * }
   * tab.onActivate(renderGrid);
   * tab.root.on('input', (d) => { if (d.dataset?.action === 'filter') renderGrid(); });
   */
  injectChild(target: string, html: string, options?: DOMInjectOptions): DOMHandle;
  /**
   * Read a snapshot of the element's current state from the frontend.
   * Returns \`null\` if the element no longer exists. Async because it
   * routes through a frontend roundtrip (the DOM lives there, not on
   * the backend).
   * @example
   * const snap = await handle.read({ html: true });
   * if (snap) console.log(snap.attrs['data-state'], snap.text);
   */
  read(options?: DOMReadOptions): Promise<SerializedDOMElement | null>;
}

/** Options for \`DOMHandle.read()\`. */
interface DOMReadOptions {
  /**
   * Also include \`innerHTML\` in the snapshot. Default \`false\` — most use
   * cases (verify attrs, check text, structural inspection) don't need
   * the full markup, and the omission keeps the IPC payload small. Set
   * \`true\` when the script needs to traverse descendant markup.
   */
  html?: boolean;
}

/** Snapshot returned by \`DOMHandle.read()\`. */
interface SerializedDOMElement {
  /** Lowercase tag name (e.g. \`'div'\`, \`'button'\`). */
  tag: string;
  /**
   * All attributes set on the element, keyed by lowercased attribute name.
   * Includes \`id\`, \`class\`, \`style\`, \`data-*\`, \`aria-*\`, etc. Empty
   * object if no attributes are set.
   */
  attrs: Record<string, string>;
  /** \`textContent\` — concatenated text from this element and all descendants. */
  text: string;
  /** Number of direct element children (text + comment nodes excluded). */
  childCount: number;
  /** \`innerHTML\` — present only when \`read({ html: true })\` was passed. */
  html?: string;
}

type ModalItem =
  | { type: 'text'; content: string; muted?: boolean }
  | { type: 'divider' }
  | { type: 'key_value'; label: string; value: string }
  | { type: 'heading'; content: string }
  | { type: 'card'; items: ModalItem[] };

interface ShowModalOptions {
  title: string;
  width?: number;
  maxHeight?: number;
  persistent?: boolean;
}

interface ModalResult {
  dismissedBy: 'user' | 'extension' | 'cleanup';
}

interface ModalHandle {
  /** UUID identifying this modal instance. Immediately available on the returned handle. */
  readonly openRequestId: string;
  /** Resolves with the dismissal reason when the modal closes. */
  readonly result: Promise<ModalResult>;
  /** Close the modal programmatically. */
  close(): Promise<void>;
}

// ─── Advanced modal (DOM-owned body) ─────────────────────────────────────────

/**
 * Options for \`api.ui.showAdvancedModal()\`.
 *
 * Unlike \`showModal()\`, which renders a structured item list, advanced modals
 * give the script full control over the body via a \`DOMHandle\` returned on
 * \`handle.root\`.
 */
interface AdvancedModalOptions {
  /** Modal header title. Required. */
  title: string;
  /** Width in pixels. Default: 420. Clamped to viewport by the host. */
  width?: number;
  /** Maximum height in pixels. Default: 520. Clamped to viewport by the host. */
  maxHeight?: number;
  /**
   * When \`true\`, clicking the backdrop no longer dismisses the modal — the
   * user must use the close button, or the script must call \`dismiss()\`.
   */
  persistent?: boolean;
}

/**
 * Why an advanced modal was dismissed.
 *
 * - \`'user'\` — user clicked the close button, the backdrop, or pressed Escape.
 * - \`'script'\` — the script called \`handle.dismiss()\`.
 * - \`'teardown'\` — the script was disabled or deleted while the modal was open.
 */
type AdvancedModalDismissReason = 'user' | 'script' | 'teardown';

/**
 * Handle returned by \`api.ui.showAdvancedModal()\`. Scripts own the modal body
 * via \`root\` — a \`DOMHandle\` bound to the modal's content container.
 * Host-enforced limit: 2 modals per extension.
 */
interface AdvancedModalHandle {
  /** UUID identifying this modal instance. Available synchronously. */
  readonly modalId: string;
  /** \`DOMHandle\` bound to the modal's content container. */
  readonly root: DOMHandle;
  /** Has the modal been dismissed? Flips to true on any dismissal path. */
  readonly dismissed: boolean;
  /** Update the modal header title. */
  setTitle(title: string): void;
  /** Close the modal programmatically. Safe to call after dismissal (no-op). */
  dismiss(): void;
  /**
   * Register a handler that fires once when the modal is dismissed. Receives
   * the dismissal reason. Returns an unsubscribe function. If already
   * dismissed, the handler fires on the next microtask.
   */
  onDismiss(handler: (reason: AdvancedModalDismissReason) => void): () => void;
}

// ─── Context menu (request-response) ─────────────────────────────────────────

/** A single entry in \`api.ui.showContextMenu()\`'s items array. */
interface ContextMenuItem {
  /** Stable key returned when this item is selected. Required. */
  key: string;
  /** Display text. Ignored when \`type === 'divider'\`. */
  label: string;
  /** Entry type. Default: 'item'. */
  type?: 'item' | 'divider';
  /** Greyed out and not clickable. Default: false. */
  disabled?: boolean;
  /** Rendered in red / danger style. Default: false. */
  danger?: boolean;
  /** Highlighted to indicate current selection. Default: false. */
  active?: boolean;
}

/** Options for \`api.ui.showContextMenu()\`. */
interface ShowContextMenuOptions {
  /** Screen coordinates to anchor the menu. Typically from a pointer event. */
  position: { x: number; y: number };
  /** Menu entries. */
  items: ContextMenuItem[];
}

// ─── Input bar actions (lifecycle) ───────────────────────────────────────────

/** Options for \`api.ui.registerInputBarAction()\`. */
interface InputBarActionOptions {
  /**
   * Unique identifier within your script. Used by the handle for subsequent
   * calls — pick something stable. Same-id re-registration silently replaces
   * the existing entry and clears old click handlers.
   */
  id: string;
  /** Display label shown in the Extras popover row. */
  label: string;
  /**
   * Optional secondary line rendered beneath the label in the Extras
   * popover row. Useful for short status strings (\`"Last roll: 17"\`),
   * keyboard shortcuts, or one-line descriptions. Omit (or pass
   * \`undefined\` via \`setSubtitle\`) for a single-line row.
   */
  subtitle?: string;
  /**
   * Inline SVG string (sanitized). The host renders it inside a 14x14 slot
   * via CSS — **the SVG must carry width="14" height="14" attrs** or it
   * overflows and misaligns with the label. When using \`ls:icons\`, call
   * \`forInputBar(name)\` (or \`sized(name, 14)\`) instead of the default 24x24
   * \`svg[name]\` to get a correctly-sized string.
   */
  iconSvg?: string;
  /** URL to an icon image. Takes precedence over \`iconSvg\`. */
  iconUrl?: string;
  /** When false, the action is hidden from the popover. Default: true. */
  enabled?: boolean;
}

/**
 * Handle returned by \`api.ui.registerInputBarAction()\`. Actions appear in the
 * Extras popover on the chat input bar. Host-enforced limits: 4 per extension,
 * 12 global.
 */
interface InputBarActionHandle {
  /** The action's identifier — the same \`id\` passed in options. */
  readonly actionId: string;
  /** Update the display label. Safe to call after destroy (no-op). */
  setLabel(label: string): void;
  /**
   * Update (or clear) the secondary line beneath the label. Pass
   * \`undefined\` to remove a previously-set subtitle and collapse the
   * row back to single-line. Safe to call after destroy (no-op).
   */
  setSubtitle(subtitle?: string): void;
  /** Show or hide the action. Disabled actions are hidden, not greyed. */
  setEnabled(enabled: boolean): void;
  /**
   * Register a click handler. Multiple handlers fan out. Returns an
   * unsubscribe function. The Extras popover auto-closes after a click.
   */
  onClick(handler: () => void): () => void;
  /** Remove the action and clear all click handlers. Idempotent. */
  destroy(): void;
}

// ─── Float widgets (lifecycle, DOM-owned) ────────────────────────────────────

/** Options for \`api.ui.createFloatWidget()\`. */
interface FloatWidgetOptions {
  /** Widget width in pixels. */
  width: number;
  /** Widget height in pixels. */
  height: number;
  /** Starting position in viewport coordinates. */
  initialPosition?: { x: number; y: number };
  /** Snap to the nearest screen edge after drag. Default: false. */
  snapToEdge?: boolean;
  /** Hover tooltip text. */
  tooltip?: string;
  /**
   * Strip default container chrome (border, background, shadow, radius).
   * The script fully owns presentation via \`handle.root\` + \`addStyle\`.
   */
  chromeless?: boolean;
}

/**
 * Handle returned by \`api.ui.createFloatWidget()\`. Float widgets are small
 * draggable overlays. The body DOM is fully script-owned via \`handle.root\`.
 * Host-enforced limit: 2 widgets per script, 8 global.
 */
interface FloatWidgetHandle {
  /** UUID identifying this widget instance. */
  readonly widgetId: string;
  /** \`DOMHandle\` bound to the widget's content container. */
  readonly root: DOMHandle;
  /** Move the widget to new viewport coordinates. */
  moveTo(x: number, y: number): void;
  /** Current cached position. May briefly lag host clamps. */
  getPosition(): { x: number; y: number };
  /** Show or hide the widget. */
  setVisible(visible: boolean): void;
  /** Current cached visibility state. */
  isVisible(): boolean;
  /**
   * Register a handler fired after the user completes a drag gesture.
   * Returns an unsubscribe function. Multiple handlers supported.
   */
  onDragEnd(handler: (pos: { x: number; y: number }) => void): () => void;
  /** Remove the widget. Idempotent — subsequent calls are no-ops. */
  destroy(): void;
}

/** Options for api.ui.mountApp(). All optional. */
interface MountAppOptions {
  /** CSS class applied to the mount container. */
  className?: string;
  /** Where the full-bleed portal sits: 'start' / 'end' / 'app-overlay'. */
  position?: 'start' | 'end' | 'app-overlay';
}

/** Handle returned by api.ui.mountApp() — a route-persistent full-bleed portal. */
interface MountedAppHandle {
  /** UUID identifying this mount instance. */
  readonly mountId: string;
  /** DOMHandle bound to the mount's content container. Fill via api.ui.dom.*. */
  readonly root: DOMHandle;
  /** Show or hide the mount without destroying it. */
  setVisible(visible: boolean): void;
  /** Remove the mount. Idempotent — subsequent calls are no-ops. */
  destroy(): void;
}

// ─── Drawer tabs (lifecycle, DOM-owned) ──────────────────────────────────────

/** Options for \`api.ui.registerDrawerTab()\`. */
interface DrawerTabOptions {
  /** Unique identifier within your script. Pick something stable. */
  id: string;
  /**
   * Full display title. Shown in the panel header and the command palette
   * listing (Ctrl+K).
   */
  title: string;
  /**
   * Short label rendered beneath the sidebar icon. Keep to ~8 characters;
   * longer values are truncated. Defaults to a truncation of \`title\`.
   */
  shortName?: string;
  /** One-line description shown in the command palette. */
  description?: string;
  /** Extra terms for command-palette fuzzy search. */
  keywords?: string[];
  /** Title shown in the panel header navbar. Defaults to \`title\`. */
  headerTitle?: string;
  /** Inline SVG string for the sidebar icon. Rendered at 20x20. */
  iconSvg?: string;
  /** URL to an icon image. Mutually exclusive with \`iconSvg\`. */
  iconUrl?: string;
}

/**
 * Handle returned by \`api.ui.registerDrawerTab()\`. Drawer tabs live in the
 * ViewportDrawer sidebar and automatically appear in the command palette.
 * LumiScript enforces at most 1 drawer tab per script.
 */
interface DrawerTabHandle {
  /** The tab's identifier — the same \`id\` passed in options. */
  readonly tabId: string;
  /** \`DOMHandle\` bound to the tab's content container. */
  readonly root: DOMHandle;
  /** Update the full title. */
  setTitle(title: string): void;
  /** Update the sidebar icon label. */
  setShortName(shortName: string): void;
  /** Show a badge next to the tab icon. Pass \`null\` to clear. */
  setBadge(text: string | null): void;
  /** Programmatically switch the drawer to this tab. */
  activate(): void;
  /**
   * Register a handler fired when the user switches to this tab. Returns an
   * unsubscribe function.
   */
  onActivate(handler: () => void): () => void;
  /** Remove the tab. Idempotent — subsequent calls are no-ops. */
  destroy(): void;
}

// ─── Files API ────────────────────────────────────────────────────────────────

interface FileStatResult {
  exists: boolean;
  isFile: boolean;
  isDirectory: boolean;
  sizeBytes: number;
  modifiedAt: string;
}

interface TempStatResult {
  sizeBytes: number;
  createdAt: string;
  expiresAt?: string;
}

interface TempWriteOptions {
  /** Time-to-live in milliseconds. Omit for no expiry. */
  ttlMs?: number;
  /** Charge this write against a tempRequestBlock reservation. */
  reservationId?: string;
}

interface TempRequestBlockOptions {
  /** Time-to-live for the reservation in milliseconds. */
  ttlMs?: number;
  /** Free-text reason recorded with the reservation (diagnostics only). */
  reason?: string;
}

interface TempReservation {
  /** Pass to tempWrite/tempWriteBinary options.reservationId, or to tempReleaseBlock. */
  reservationId: string;
  /** The reserved size in bytes. */
  sizeBytes: number;
  /** ISO 8601 timestamp when the reservation expires if unused. */
  expiresAt: string;
}

interface TempPoolStatus {
  globalMaxBytes: number;
  globalUsedBytes: number;
  globalReservedBytes: number;
  globalAvailableBytes: number;
  extensionMaxBytes: number;
  extensionUsedBytes: number;
  extensionReservedBytes: number;
  extensionAvailableBytes: number;
  fileCount: number;
  fileCountMax: number;
}

/**
 * Flat file API with three storage tiers. All methods require allowDangerous.
 * - user*   — per-user persistent storage
 * - shared* — extension-wide persistent storage
 * - temp*   — TTL-bound quota-managed storage (also requires ephemeral_storage permission)
 */
interface FilesAPI {
  userRead(path: string): Promise<string>;
  userWrite(path: string, data: string): Promise<void>;
  userDelete(path: string): Promise<void>;
  userExists(path: string): Promise<boolean>;
  userList(prefix?: string): Promise<string[]>;
  userMkdir(path: string): Promise<void>;
  sharedRead(path: string): Promise<string>;
  sharedWrite(path: string, data: string): Promise<void>;
  sharedDelete(path: string): Promise<void>;
  sharedExists(path: string): Promise<boolean>;
  sharedList(prefix?: string): Promise<string[]>;
  sharedStat(path: string): Promise<FileStatResult>;
  sharedMkdir(path: string): Promise<void>;
  sharedMove(from: string, to: string): Promise<void>;
  tempRead(path: string): Promise<string>;
  tempWrite(path: string, data: string, options?: TempWriteOptions): Promise<void>;
  tempReadBinary(path: string): Promise<Uint8Array>;
  tempWriteBinary(path: string, data: Uint8Array, options?: TempWriteOptions): Promise<void>;
  tempDelete(path: string): Promise<void>;
  tempList(prefix?: string): Promise<string[]>;
  tempStat(path: string): Promise<TempStatResult>;
  tempClearExpired(): Promise<number>;
  tempGetPoolStatus(): Promise<TempPoolStatus>;
  tempRequestBlock(sizeBytes: number, options?: TempRequestBlockOptions): Promise<TempReservation>;
  tempReleaseBlock(reservationId: string): Promise<void>;
}

// ─── Enclave API ──────────────────────────────────────────────────────────────

/**
 * AES-256-GCM encrypted per-user secret storage. All methods require allowDangerous.
 * Keys: alphanumeric + underscore, dash, dot — max 128 chars. Values: printable ASCII, max 64 KB.
 */
interface EnclaveAPI {
  /** Store or overwrite an encrypted secret. */
  put(key: string, value: string): Promise<void>;
  /** Retrieve a decrypted secret, or null if not found. */
  get(key: string): Promise<string | null>;
  /** Delete a secret. Returns true if it existed. */
  delete(key: string): Promise<boolean>;
  /** Check if a secret exists without decrypting it. */
  has(key: string): Promise<boolean>;
  /** List all secret keys for this user and extension. */
  list(): Promise<string[]>;
}

// ─── Characters API ───────────────────────────────────────────────────────────

interface Character {
  id: string; name: string; description: string; personality: string;
  scenario: string; firstMessage: string; mesExample: string; creatorNotes: string;
  systemPrompt: string; postHistoryInstructions: string; tags: string[];
  alternateGreetings: string[]; creator: string; imageId: string | null;
  /** World book IDs attached to this character. */
  worldBookIds: string[];
  /**
   * Free-form extensions blob — namespace your keys (e.g. \`'my-script:state'\`).
   * Complements the \`extra\` bag on chat messages: per-character, not per-message.
   * Reads return the full object. Writes via \`update({ extensions: { ... } })\`
   * shallow-merge into existing — top-level keys you provide overwrite, omitted
   * keys are preserved. Nested objects are replaced wholesale (NOT recursively
   * merged) — read-modify-write inside your script if you need sub-tree merge.
   * Keep values JSON-serializable.
   */
  extensions: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}
interface CharacterCreateInput {
  name: string; description?: string; personality?: string; scenario?: string;
  firstMessage?: string; mesExample?: string; creatorNotes?: string;
  systemPrompt?: string; postHistoryInstructions?: string;
  tags?: string[]; alternateGreetings?: string[]; creator?: string;
  /** Replace the character's world book attachments. Pass [] to detach all. Omit to leave unchanged. */
  worldBookIds?: string[];
  /** Initial extension data. See \`Character.extensions\` for namespacing + JSON conventions. */
  extensions?: Record<string, unknown>;
}
interface CharacterUpdateInput extends Partial<CharacterCreateInput> {}

/** Payload for \`api.characters.setAvatar()\`. */
interface CharacterAvatarUpload {
  /** Raw avatar image bytes. Source via http, files, enclave, etc. */
  data: Uint8Array;
  /** Optional filename — preserves the file extension when stored. */
  filename?: string;
  /** Optional content type. Defaults to \`image/png\` on the host side. */
  mimeType?: string;
}

interface CharactersAPI {
  /** List characters (paginated). Requires characters permission. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Character[]; total: number }>;
  /** Get a character by ID. Returns null if not found. Requires characters permission. */
  get(id: string): Promise<Character | null>;
  /**
   * Find the first character whose name exactly matches the given name (case-sensitive).
   * Scans all pages so no character is missed regardless of library size.
   * Returns null if no character has that name. Character names are not unique
   * in Lumiverse; the first match is returned. Requires characters permission.
   */
  getByName(name: string): Promise<Character | null>;
  /** Create a new character. Requires characters permission. */
  create(input: CharacterCreateInput): Promise<Character>;
  /**
   * Replace a character's avatar image. Accepts raw bytes; the host handles
   * storage and image-ID assignment. Useful for image-gen integrations,
   * external fetches, or bulk avatar application. Pair with
   * \`api.utils.image.detectMime\` for unknown-source bytes.
   * Requires characters permission.
   * @example
   * const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer());
   * const mimeType = api.utils.image.detectMime(bytes) ?? 'image/png';
   * await api.characters.setAvatar(charId, { data: bytes, mimeType });
   */
  setAvatar(id: string, avatar: CharacterAvatarUpload): Promise<Character>;
  /** Update a character. Requires characters permission. */
  update(id: string, input: CharacterUpdateInput): Promise<Character>;
  /** Delete a character by ID. Requires characters permission. */
  delete(id: string): Promise<boolean>;
}

// ─── Chats API ────────────────────────────────────────────────────────────────

interface ChatSession {
  id: string; characterId: string; name: string;
  metadata: Record<string, unknown>; createdAt: number; updatedAt: number;
}
interface ChatSessionUpdateInput { name?: string; metadata?: Record<string, unknown>; }
interface ChatMemoryChunk { content: string; score: number | null; metadata: Record<string, unknown>; }
interface ChatMemoryResult {
  chunks: ChatMemoryChunk[]; formatted: string; count: number; enabled: boolean;
  queryPreview: string; settingsSource: 'global' | 'per_chat';
  chunksAvailable: number; chunksPending: number;
  retrievalMode?: 'vector' | 'recency' | 'empty' | 'disabled';
}

interface ChatsAPI {
  /** List chat sessions. Requires chats permission. */
  list(options?: { characterId?: string; limit?: number; offset?: number }): Promise<{ data: ChatSession[]; total: number }>;
  get(id: string): Promise<ChatSession | null>;
  getActive(): Promise<ChatSession | null>;
  update(id: string, input: ChatSessionUpdateInput): Promise<ChatSession>;
  delete(id: string): Promise<boolean>;
  /**
   * Retrieve long-term memory chunks via vector search (same as {{memories}} macro).
   * Falls back to active chat if chatId is omitted. Requires chats permission.
   */
  getMemories(chatId?: string, options?: { topK?: number }): Promise<ChatMemoryResult>;
}

// ─── World Info API ───────────────────────────────────────────────────────────

interface WorldInfo {
  id: string; name: string; description: string;
  metadata: Record<string, unknown>; createdAt: number; updatedAt: number;
}
interface WorldInfoCreateInput { name: string; description?: string; metadata?: Record<string, unknown>; }
interface WorldInfoUpdateInput { name?: string; description?: string; metadata?: Record<string, unknown>; }
interface WorldInfoEntry {
  id: string; worldBookId: string; uid: string; key: string[]; keysecondary: string[];
  content: string; comment: string; position: number; depth: number; role: string | null;
  orderValue: number; selective: boolean; constant: boolean; disabled: boolean;
  groupName: string; groupOverride: boolean; groupWeight: number; probability: number;
  scanDepth: number | null; caseSensitive: boolean; matchWholeWords: boolean;
  automationId: string | null; useRegex: boolean; preventRecursion: boolean;
  excludeRecursion: boolean; delayUntilRecursion: boolean; priority: number;
  sticky: number; cooldown: number; delay: number; selectiveLogic: number;
  useProbability: boolean; vectorized: boolean; extensions: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}
interface WorldInfoEntryInput {
  key?: string[]; keysecondary?: string[]; content?: string; comment?: string;
  position?: number; depth?: number; role?: string; orderValue?: number;
  selective?: boolean; constant?: boolean; disabled?: boolean; groupName?: string;
  groupOverride?: boolean; groupWeight?: number; probability?: number;
  scanDepth?: number; caseSensitive?: boolean; matchWholeWords?: boolean;
  automationId?: string; useRegex?: boolean; preventRecursion?: boolean;
  excludeRecursion?: boolean; delayUntilRecursion?: boolean; priority?: number;
  sticky?: number; cooldown?: number; delay?: number; selectiveLogic?: number;
  useProbability?: boolean; vectorized?: boolean; extensions?: Record<string, unknown>;
}
type WorldInfoRef = string;
type ActivatedWorldInfoEntry = WorldInfoEntry & { source: 'keyword' | 'vector'; score?: number };

// ─── Regex Scripts API (api.regexScripts.*) ─────────────────────────────────
//
// Full CRUD over the user's regex find/replace scripts. Requires the
// \`regex_scripts\` permission. Mirrors the resolution Lumiverse uses
// internally during prompt assembly + response baking + display rendering.
//
// Targets:
//   - \`'prompt'\`   — runs during prompt assembly, against each message
//     before it goes to the LLM. Does not modify stored content.
//   - \`'response'\` — runs once after the LLM stream ends, against the
//     full assistant message. The result is written back to chat storage.
//   - \`'display'\`  — runs per render in the frontend. Does not modify
//     stored content.

type RegexPlacement = 'user_input' | 'ai_output' | 'world_info' | 'reasoning';
type RegexScope     = 'global' | 'character' | 'chat';
type RegexTarget    = 'prompt' | 'response' | 'display';
type RegexMacroMode = 'none' | 'raw' | 'escaped';

/**
 * Snapshot of a regex script. Returned by \`list()\`, \`get()\`, \`findByName()\`,
 * \`getActive()\`, \`create()\`, and \`update()\`.
 */
interface RegexScriptInfo {
  id: string;
  name: string;
  /** Stable, normalized identifier (lowercase + underscores). */
  scriptId: string;
  findRegex: string;
  replaceString: string;
  /** Any subset of \`gimsu\`. */
  flags: string;
  placement: RegexPlacement[];
  scope: RegexScope;
  scopeId: string | null;
  target: RegexTarget;
  minDepth: number | null;
  maxDepth: number | null;
  trimStrings: string[];
  runOnEdit: boolean;
  substituteMacros: RegexMacroMode;
  disabled: boolean;
  sortOrder: number;
  description: string;
  folder: string;
  metadata: Record<string, unknown>;
  createdAt: number;
  updatedAt: number;
}

interface RegexScriptListOptions {
  scope?: RegexScope;
  scopeId?: string;
  target?: RegexTarget;
  /** Default 50, max 200. */
  limit?: number;
  offset?: number;
}

interface RegexScriptActiveOptions {
  /** Required. The execution target to resolve for. */
  target: RegexTarget;
  characterId?: string;
  chatId?: string;
}

interface RegexScriptCreateInput {
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
  scriptId?: string;
}

type RegexScriptUpdateInput = Partial<RegexScriptCreateInput>;

/**
 * \`api.regexScripts.*\` — full CRUD over the user's regex find/replace
 * scripts. Requires the \`regex_scripts\` permission.
 *
 * Lifecycle events: scripts can subscribe to \`REGEX_SCRIPT_CHANGED\` and
 * \`REGEX_SCRIPT_DELETED\` via the \`@triggers\` directive to keep
 * extension-side caches in sync.
 *
 * @example
 * // Mirror Lumiverse's resolution for the current chat + character
 * const active = await api.regexScripts.getActive({
 *   target: 'display',
 *   chatId: data.chatId,
 *   characterId: data.characterId,
 * });
 */
interface RegexScriptsAPI {
  list(options?: RegexScriptListOptions): Promise<{ data: RegexScriptInfo[]; total: number }>;
  get(scriptId: string): Promise<RegexScriptInfo | null>;
  /** Convenience: page through \`list()\` and apply name filter locally. */
  findByName(name: string, scope?: RegexScope): Promise<RegexScriptInfo | null>;
  /** Resolve enabled rules for the given target + character/chat context. */
  getActive(options: RegexScriptActiveOptions): Promise<RegexScriptInfo[]>;
  create(input: RegexScriptCreateInput): Promise<RegexScriptInfo>;
  update(scriptId: string, input: RegexScriptUpdateInput): Promise<RegexScriptInfo>;
  delete(scriptId: string): Promise<boolean>;
}

interface WorldInfoAPI {
  list(options?: { limit?: number; offset?: number }): Promise<{ data: WorldInfo[]; total: number }>;
  get(ref: WorldInfoRef): Promise<WorldInfo | null>;
  create(input: WorldInfoCreateInput): Promise<WorldInfo>;
  update(ref: WorldInfoRef, input: WorldInfoUpdateInput): Promise<WorldInfo>;
  delete(ref: WorldInfoRef): Promise<boolean>;
  entries: {
    list(ref: WorldInfoRef, options?: { limit?: number; offset?: number }): Promise<{ data: WorldInfoEntry[]; total: number }>;
    get(entryId: string): Promise<WorldInfoEntry | null>;
    create(ref: WorldInfoRef, input: WorldInfoEntryInput): Promise<WorldInfoEntry>;
    update(entryId: string, input: WorldInfoEntryInput): Promise<WorldInfoEntry>;
    delete(entryId: string): Promise<boolean>;
    /**
     * Find all entries across ALL world books whose automationId starts
     * with the given prefix. Useful for enumerating / cleaning up entries
     * a script owns (e.g. 'lumiscript:<scriptId>:' for managed entries).
     * O(books × entries-per-book) — not recommended for hot paths.
     * Requires world_books permission.
     */
    listByAutomationIdPrefix(prefix: string): Promise<WorldInfoEntry[]>;
  };
  /**
   * Get all world info entries that would activate for the current (or specified) chat.
   * Runs the full Lumiverse activation pipeline. Requires world_books permission.
   */
  getCapturedActive(chatId?: string): Promise<ActivatedWorldInfoEntry[]>;
}

// ─── Personas API ─────────────────────────────────────────────────────────────

interface Persona {
  id: string; name: string; title: string; description: string;
  imageId: string | null; attachedWorldBookId: string | null;
  folder: string; isDefault: boolean;
  /** Subjective pronoun (e.g. "he", "she", "they"). Optional. */
  subjectivePronoun?: string;
  /** Objective pronoun (e.g. "him", "her", "them"). Optional. */
  objectivePronoun?: string;
  /** Possessive pronoun (e.g. "his", "her", "their"). Optional. */
  possessivePronoun?: string;
  metadata: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}
interface PersonaCreateInput {
  name: string; title?: string; description?: string; folder?: string;
  isDefault?: boolean; attachedWorldBookId?: string;
  /** Subjective pronoun (e.g. "he", "she", "they"). */
  subjectivePronoun?: string;
  /** Objective pronoun (e.g. "him", "her", "them"). */
  objectivePronoun?: string;
  /** Possessive pronoun (e.g. "his", "her", "their"). */
  possessivePronoun?: string;
  metadata?: Record<string, unknown>;
}
interface PersonaUpdateInput {
  name?: string; title?: string; description?: string; folder?: string;
  isDefault?: boolean; attachedWorldBookId?: string;
  /** Subjective pronoun (e.g. "he", "she", "they"). */
  subjectivePronoun?: string;
  /** Objective pronoun (e.g. "him", "her", "them"). */
  objectivePronoun?: string;
  /** Possessive pronoun (e.g. "his", "her", "their"). */
  possessivePronoun?: string;
  metadata?: Record<string, unknown>;
}

interface PersonasAPI {
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Persona[]; total: number }>;
  get(personaId: string): Promise<Persona | null>;
  getDefault(): Promise<Persona | null>;
  getActive(): Promise<Persona | null>;
  create(input: PersonaCreateInput): Promise<Persona>;
  update(personaId: string, input: PersonaUpdateInput): Promise<Persona>;
  delete(personaId: string): Promise<boolean>;
  /** Switch the active persona. Pass null to deactivate. Emits SETTINGS_UPDATED. */
  switchActive(personaId: string | null): Promise<void>;
  getWorldBook(personaId: string): Promise<WorldInfo | null>;
}

// ─── Presets API ──────────────────────────────────────────────────────────────

/** Prompt block role — message role or append injection tag. */
type PromptBlockRole = 'system' | 'user' | 'assistant' | 'user_append' | 'assistant_append';

/** Where a prompt block injects relative to chat history. */
type PromptBlockPosition = 'pre_history' | 'post_history' | 'in_history';

/** Category selection mode — \`'radio'\` allows one enabled child; \`'checkbox'\` allows many. */
type PromptBlockCategoryMode = 'radio' | 'checkbox' | null;

/** Prompt variable definition (discriminated by \`type\`). */
type PromptVariableDef =
  | { id: string; name: string; label: string; type: 'text';     defaultValue: string; description?: string }
  | { id: string; name: string; label: string; type: 'textarea'; defaultValue: string; rows?: number; description?: string }
  | { id: string; name: string; label: string; type: 'number';   defaultValue: number; min?: number; max?: number; step?: number; description?: string }
  | { id: string; name: string; label: string; type: 'slider';   defaultValue: number; min: number; max: number; step?: number; description?: string };

/** Prompt block — a single segment of the preset's prompt assembly. */
interface PromptBlock {
  id: string; name: string; content: string;
  role: PromptBlockRole; enabled: boolean;
  position: PromptBlockPosition; depth: number;
  /** \`'category'\` marks a structural category header; \`null\` is a normal block. */
  marker: string | null;
  isLocked: boolean; color: string | null;
  injectionTrigger: string[]; group: string | null;
  /** Only meaningful when \`marker === 'category'\`. */
  categoryMode?: PromptBlockCategoryMode;
  variables?: PromptVariableDef[];
}

/** Category grouping derived from the preset's ordered blocks. */
interface PromptBlockCategoryGroup {
  /** The category header block, or \`null\` for uncategorized leading blocks. */
  categoryBlock: PromptBlock | null;
  /** Non-category blocks after the header until the next category header. */
  children: PromptBlock[];
}

/** User generation preset — full prompt configuration. */
interface Preset {
  id: string; name: string;
  provider: string; engine: string;
  parameters: Record<string, unknown>;
  /** Ordered prompt blocks, including category markers. */
  prompt_order: PromptBlock[];
  prompts: Record<string, unknown>;
  metadata: Record<string, unknown>;
  /** Unix epoch seconds. */
  created_at: number; updated_at: number;
}

/** Input for creating a preset. \`name\` + \`provider\` required. */
interface PresetCreateInput {
  name: string; provider: string;
  engine?: string;
  parameters?: Record<string, unknown>;
  prompt_order?: PromptBlock[];
  prompts?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

/** Input for updating a preset. All fields optional. */
type PresetUpdateInput = Partial<PresetCreateInput>;

/** Input for creating a prompt block. Missing fields are defaulted by host. */
type PromptBlockCreateInput = Partial<PromptBlock>;

/** Input for updating a prompt block. Any subset of \`PromptBlock\` except \`id\`. */
type PromptBlockUpdateInput = Partial<Omit<PromptBlock, 'id'>>;

/**
 * Preset CRUD API. Requires the \`presets\` permission. Sub-namespaces:
 * \`api.presets.*\` (preset CRUD), \`api.presets.blocks.*\` (prompt-block
 * CRUD within a preset), \`api.presets.categories.*\` (host-derived
 * category grouping view). A preset is the complete generation
 * configuration: parameters, ordered prompt blocks, behavior settings,
 * metadata. Categories aren't separate records — they're prompt blocks
 * with \`marker === 'category'\` and the following non-category blocks
 * as children until the next category marker.
 */
interface PresetsAPI {
  /** List presets. Defaults: limit 50, max 200. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Preset[]; total: number }>;
  /** Get a preset by id. Returns \`null\` if not found. */
  get(presetId: string): Promise<Preset | null>;
  /** Create a new preset. \`name\` + \`provider\` required. */
  create(input: PresetCreateInput): Promise<Preset>;
  /** Update a preset. All fields optional. */
  update(presetId: string, input: PresetUpdateInput): Promise<Preset>;
  /** Delete a preset. Returns \`true\` if deleted. */
  delete(presetId: string): Promise<boolean>;
  /** Prompt-block CRUD within a preset. */
  blocks: {
    /** Return the preset's ordered prompt blocks. */
    list(presetId: string): Promise<PromptBlock[]>;
    /** Get a block by id. Returns \`null\` if not found. */
    get(presetId: string, blockId: string): Promise<PromptBlock | null>;
    /** Create a prompt block. \`options.index\` inserts at a specific position; omitted appends. */
    create(presetId: string, input: PromptBlockCreateInput, options?: { index?: number }): Promise<PromptBlock>;
    /** Update a block. All fields except \`id\` are optional. */
    update(presetId: string, blockId: string, input: PromptBlockUpdateInput): Promise<PromptBlock>;
    /** Delete a block. Returns \`true\` if deleted. */
    delete(presetId: string, blockId: string): Promise<boolean>;
  };
  /** Host-derived category grouping view (read-only). To mutate a
   *  category, use \`blocks.*\` with \`marker: 'category'\`. */
  categories: {
    /** Return category groups derived from the preset's ordered blocks. */
    list(presetId: string): Promise<PromptBlockCategoryGroup[]>;
  };
}

// ─── Databanks API ────────────────────────────────────────────────────────────

/** Activation scope for a databank. */
type DatabankScope = 'global' | 'character' | 'chat';

/** Lifecycle status of an uploaded document. */
type DatabankDocumentStatus = 'pending' | 'processing' | 'ready' | 'error';

interface DatabankInfo {
  id: string; name: string; description: string;
  scope: DatabankScope; scopeId: string | null;
  enabled: boolean; metadata: Record<string, unknown>;
  /** May be omitted on bulk list responses. */
  documentCount?: number;
  createdAt: number; updatedAt: number;
}

interface DatabankDocumentInfo {
  id: string; databankId: string;
  name: string; slug: string;
  mimeType: string; fileSize: number; contentHash: string;
  totalChunks: number; status: DatabankDocumentStatus;
  errorMessage: string | null; metadata: Record<string, unknown>;
  createdAt: number; updatedAt: number;
}

interface DatabankCreateInput {
  name: string; description?: string;
  scope: DatabankScope;
  /** Required for 'character' and 'chat' scopes; omit for 'global'. */
  scopeId?: string | null;
}

/** Scope cannot be changed after creation. */
interface DatabankUpdateInput {
  name?: string; description?: string; enabled?: boolean;
}

interface DatabankDocumentCreateInput {
  /**
   * Document content. \`string\` values are UTF-8 encoded internally; pass a
   * \`Uint8Array\` directly when the source is already binary.
   *
   * Supported extensions: .txt, .md, .markdown, .csv, .tsv, .json, .xml,
   * .html, .htm, .yaml, .yml, .log, .rst, .rtf. Max size: 10 MB.
   */
  data: string | Uint8Array;
  /** Original filename, including extension. */
  filename: string;
  /** Optional MIME type recorded on the document. */
  mimeType?: string;
  /** Display name override. Defaults to \`filename\` minus the extension. */
  name?: string;
}

interface DatabankDocumentUpdateInput {
  /** New display name (the URL-safe slug is regenerated automatically). */
  name: string;
}

interface DatabankWaitUntilReadyOptions {
  /** Max wait, in ms. Default: 60_000. Throws on timeout. */
  timeoutMs?: number;
  /** Poll interval, in ms. Default: 500. */
  pollIntervalMs?: number;
}

interface DatabanksAPI {
  list(options?: { limit?: number; offset?: number; scope?: DatabankScope; scopeId?: string | null }): Promise<{ data: DatabankInfo[]; total: number }>;
  get(databankId: string): Promise<DatabankInfo | null>;
  /** Find a databank by display name within an optional scope. Returns the first match or null. */
  findByName(name: string, scope?: DatabankScope): Promise<DatabankInfo | null>;
  create(input: DatabankCreateInput): Promise<DatabankInfo>;
  update(databankId: string, input: DatabankUpdateInput): Promise<DatabankInfo>;
  delete(databankId: string): Promise<boolean>;
  documents: {
    list(databankId: string, options?: { limit?: number; offset?: number }): Promise<{ data: DatabankDocumentInfo[]; total: number }>;
    get(documentId: string): Promise<DatabankDocumentInfo | null>;
    /** Find a document by display name inside a databank. Returns the first match or null. */
    findByName(databankId: string, name: string): Promise<DatabankDocumentInfo | null>;
    /** Upload returns immediately with status='pending'. Use waitUntilReady() or poll get(). */
    create(databankId: string, input: DatabankDocumentCreateInput): Promise<DatabankDocumentInfo>;
    update(documentId: string, input: DatabankDocumentUpdateInput): Promise<DatabankDocumentInfo>;
    delete(documentId: string): Promise<boolean>;
    /** Returns null if the document doesn't exist OR has not finished processing. */
    getContent(documentId: string): Promise<{ content: string } | null>;
    /** Resets status to 'pending', drops vectors, queues for full reingestion. */
    reprocess(documentId: string): Promise<{ success: true; status: 'processing' }>;
    /** Polls until status === 'ready'. Throws on error/timeout/deletion. */
    waitUntilReady(documentId: string, options?: DatabankWaitUntilReadyOptions): Promise<DatabankDocumentInfo>;
  };
}

// ─── Memories API (Memory Cortex + Long-Term Chat Memory) — requires 'memories' ──

type EmotionalTag = 'grief'|'joy'|'tension'|'dread'|'intimacy'|'betrayal'|'revelation'|'resolve'|'humor'|'melancholy'|'awe'|'fury';
type EntityType = 'character'|'location'|'item'|'faction'|'concept'|'event';
type EntityStatus = 'active'|'inactive'|'deceased'|'destroyed'|'unknown';
type RelationType = 'ally'|'enemy'|'lover'|'parent'|'child'|'sibling'|'mentor'|'rival'|'owns'|'member_of'|'located_in'|'fears'|'serves'|'custom';

/** Input to api.memories.cortex.query(). chatId + queryText required; userId folded in by LumiScript. */
interface CortexQuery {
  chatId: string;
  queryText: string;
  entityFilter?: string[];
  timeRange?: { start?: number; end?: number };
  emotionalContext?: EmotionalTag[];
  generationType?: string;
  topK?: number;
  includeConsolidations?: boolean;
  includeRelationships?: boolean;
  excludeMessageIds?: string[];
}
interface CortexMemoryComponents { semantic: number; salience: number; recency: number; reinforcement: number; emotional: number; entity: number }
interface CortexMemory {
  source: 'chunk' | 'consolidation';
  sourceId: string;
  content: string;
  finalScore: number;
  components: CortexMemoryComponents;
  emotionalTags: EmotionalTag[];
  entityNames: string[];
  messageRange: [number, number];
  timeRange: [number, number];
}
interface EntitySnapshotRelationship { targetName: string; type: RelationType; label: string | null; strength: number; sentiment: number }
interface EntitySnapshot {
  id: string;
  name: string;
  type: EntityType;
  status: EntityStatus;
  description: string;
  lastSeenAt: number | null;
  mentionCount: number;
  topFacts: string[];
  emotionalProfile: Record<string, number>;
  relationships: EntitySnapshotRelationship[];
}
interface RelationEdge { sourceName: string; targetName: string; type: RelationType; label: string | null; strength: number; sentiment: number }
interface CortexStats {
  candidatePoolSize: number;
  vectorSearchResults: number;
  entitiesMatched: number;
  scoreFusionApplied: boolean;
  topScore: number;
  retrievalTimeMs: number;
  timedOut?: boolean;
  aborted?: boolean;
}
/** Fused-score cortex retrieval result. */
interface CortexResult {
  memories: CortexMemory[];
  entityContext: EntitySnapshot[];
  activeRelationships: RelationEdge[];
  arcContext: string | null;
  stats: CortexStats;
}
interface VaultCortexData {
  vaultId: string;
  vaultName: string;
  sourceChatId?: string;
  entities: EntitySnapshot[];
  relations: RelationEdge[];
  memories?: CortexMemory[];
  arcContext?: string | null;
}
interface InterlinkCortexData { targetChatId: string; targetChatName: string; result: CortexResult }
/** Linked-cortex result — attached vaults + interlink targets. */
interface LinkedCortexResult { vaults: VaultCortexData[]; interlinks: InterlinkCortexData[] }
/** Memory Cortex configuration. Permissive — advanced + host-added fields pass through. */
interface MemoryCortexConfig {
  enabled: boolean;
  entityTracking: boolean;
  entityExtractionMode: string;
  salienceScoring: boolean;
  [key: string]: unknown;
}
/** A vectorized chat chunk — the {{memories}} retrieval unit. */
interface ChatChunk {
  id: string;
  chatId: string;
  startMessageId: string;
  endMessageId: string;
  messageIds: string[];
  content: string;
  tokenCount: number;
  messageCount: number;
  vectorizedAt: number | null;
  vectorModel: string | null;
  retrievalCount: number;
  lastRetrievedAt: number | null;
  createdAt: number;
  updatedAt: number;
}
// ChatMemoryChunk + ChatMemoryResult are already declared above (shared with
// api.chats.getMemories) — chatMemory.get reuses them.
interface ChatMemoryWarmupResult {
  status: 'skipped' | 'complete' | 'rebuilding' | 'queued' | 'error';
  reason?: string;
  rebuilt?: boolean;
  vectorizationsQueued?: number;
}
interface CortexUsageStats {
  entityCount: number;
  relationCount: number;
  salienceRecordCount: number;
  consolidationCount: number;
  [key: string]: number | string | boolean | null | undefined;
}
interface CortexIngestionTimings {
  mode: 'heuristic' | 'sidecar' | 'mixed';
  totalMs: number;
  completedAt: number;
  chunkId: string;
  [key: string]: unknown;
}
interface CortexIngestionStatus {
  chatId: string;
  status: 'idle' | 'processing' | 'complete' | 'error';
  phase: 'queued' | 'font' | 'heuristics' | 'sidecar' | 'persisting' | 'complete' | 'error';
  chunkId: string | null;
  startedAt: number | null;
  updatedAt: number;
  pendingJobs: number;
  error?: string;
  timings?: CortexIngestionTimings | null;
}
interface CortexIngestionTelemetry {
  samples: number;
  last: CortexIngestionTimings | null;
  averages: { fontMs: number; heuristicMs: number; sidecarMs: number; graphMs: number; dbMs: number; totalMs: number };
}

interface MemoriesCortexAPI {
  getConfig(): Promise<MemoryCortexConfig>;
  putConfig(patch: Partial<MemoryCortexConfig>): Promise<MemoryCortexConfig>;
  query(query: CortexQuery): Promise<CortexResult>;
  queryLinked(chatId: string, options?: { queryText?: string }): Promise<LinkedCortexResult>;
  getCached(chatId: string): Promise<CortexResult | null>;
  getCachedLinked(chatId: string): Promise<LinkedCortexResult | null>;
  invalidateCache(chatId: string): Promise<void>;
  invalidateLinkedCache(chatId: string): Promise<void>;
}
interface MemoriesChatMemoryAPI {
  listChunks(chatId: string): Promise<ChatChunk[]>;
  get(chatId: string, options?: { topK?: number }): Promise<ChatMemoryResult>;
  warm(chatId: string, options?: { force?: boolean }): Promise<ChatMemoryWarmupResult>;
  invalidate(chatId: string): Promise<void>;
}
interface MemoriesStatsAPI {
  usage(chatId: string): Promise<CortexUsageStats>;
  ingestionStatus(chatId: string): Promise<CortexIngestionStatus | null>;
  ingestionTelemetry(chatId: string): Promise<CortexIngestionTelemetry>;
}

type MentionRole = 'subject' | 'object' | 'present' | 'referenced' | 'absent';
type RelationStatus = 'active' | 'broken' | 'dormant' | 'former';

/** A tracked entity in the cortex graph. */
interface MemoryEntity {
  id: string;
  chatId: string;
  name: string;
  entityType: EntityType;
  aliases: string[];
  description: string;
  status: EntityStatus;
  facts: string[];
  emotionalValence: Record<string, number>;
  mentionCount: number;
  salienceAvg: number;
  confidence: 'confirmed' | 'provisional';
  createdAt: number;
  updatedAt: number;
  [key: string]: unknown;
}
/** Input for upserting an entity (smart-merge against canonical name + aliases). */
interface MemoryEntityUpsert {
  name: string;
  type: EntityType;
  aliases?: string[];
  confidence?: number;
  role?: MentionRole;
  provisional?: boolean;
}
interface MemoryEntityStatusUpdate { status: EntityStatus; statusChangedAt?: number }
/** A typed relation edge between two entities. */
interface MemoryRelation {
  id: string;
  chatId: string;
  sourceEntityId: string;
  targetEntityId: string;
  relationType: RelationType;
  relationLabel: string | null;
  strength: number;
  sentiment: number;
  status: RelationStatus;
  createdAt: number;
  updatedAt: number;
  [key: string]: unknown;
}
/** Input for upserting a relation (uses entity NAMES; both endpoints must already exist). */
interface MemoryRelationUpsert {
  source: string;
  target: string;
  type: RelationType;
  label: string;
  sentiment: number;
}

interface MemoriesEntitiesAPI {
  list(chatId: string, options?: { activeOnly?: boolean; limit?: number }): Promise<MemoryEntity[]>;
  get(entityId: string): Promise<MemoryEntity | null>;
  findByName(chatId: string, name: string): Promise<MemoryEntity | null>;
  upsert(chatId: string, entity: MemoryEntityUpsert, options?: { chunkId?: string | null; createdAt?: number }): Promise<MemoryEntity>;
  updateStatus(entityId: string, patch: MemoryEntityStatusUpdate): Promise<MemoryEntity>;
  addFacts(entityId: string, facts: string[]): Promise<MemoryEntity>;
  getFacts(entityId: string): Promise<string[]>;
  updateEmotionalValence(entityId: string, valence: Record<string, number>): Promise<MemoryEntity>;
}
interface MemoriesRelationsAPI {
  list(chatId: string): Promise<MemoryRelation[]>;
  listAll(chatId: string): Promise<MemoryRelation[]>;
  forEntity(chatId: string, entityId: string): Promise<MemoryRelation[]>;
  forEntities(chatId: string, entityIds: string[], options?: { limit?: number }): Promise<MemoryRelation[]>;
  upsert(chatId: string, relation: MemoryRelationUpsert, options?: { chunkId?: string | null }): Promise<MemoryRelation | null>;
}

type NarrativeFlag = 'first_meeting'|'death'|'promise'|'confession'|'departure'|'transformation'|'battle'|'discovery'|'reunion'|'loss';
type ChatLinkType = 'vault' | 'interlink';

/** A narrative-arc consolidation (compressed summary). */
interface MemoryConsolidation {
  id: string;
  chatId: string;
  tier: number;
  title: string | null;
  summary: string;
  entityIds: string[];
  emotionalTags: EmotionalTag[];
  createdAt: number;
  updatedAt: number;
  [key: string]: unknown;
}
/** A per-chunk salience record. */
interface MemorySalience {
  chunkId: string;
  chatId: string;
  score: number;
  scoreSource: 'heuristic' | 'sidecar';
  emotionalTags: EmotionalTag[];
  narrativeFlags: NarrativeFlag[];
  statusChanges: { entity: string; change: string; detail: string }[];
  hasDialogue: boolean;
  hasAction: boolean;
  hasInternalThought: boolean;
  wordCount: number;
  scoredAt: number;
}
/** A frozen cortex snapshot. */
interface Vault {
  id: string;
  userId: string;
  sourceChatId: string | null;
  sourceChatName: string | null;
  name: string;
  description: string;
  entityCount: number;
  relationCount: number;
  chunkCount: number;
  createdAt: number;
}
interface VaultEntity {
  id: string; vaultId: string; name: string; entityType: EntityType; aliases: string[];
  description: string; status: EntityStatus; facts: string[]; emotionalValence: Record<string, number>; salienceAvg: number;
}
interface VaultRelation {
  id: string; vaultId: string; sourceEntityName: string; targetEntityName: string;
  relationType: RelationType; relationLabel: string | null; strength: number; sentiment: number; status: RelationStatus;
}
interface VaultWithContents { vault: Vault; entities: VaultEntity[]; relations: VaultRelation[] }
interface VaultChunk {
  id: string; vaultId: string; sourceChunkId: string; content: string;
  salienceScore: number | null; emotionalTags: string[]; entityNames: string[]; sourceCreatedAt: number; copiedAt: number;
}
interface VaultCreate { chatId: string; name: string; description?: string }
interface VaultReindexResult { mode: string; chunkCount: number }
/** A vault attach or chat interlink. */
interface ChatLink {
  id: string;
  userId: string;
  chatId: string;
  linkType: ChatLinkType;
  vaultId: string | null;
  vaultName: string | null;
  vaultEntityCount: number | null;
  vaultRelationCount: number | null;
  targetChatId: string | null;
  targetChatName: string | null;
  targetChatExists: boolean;
  label: string;
  enabled: boolean;
  priority: number;
  createdAt: number;
}
interface ChatLinkAttach {
  chatId: string;
  linkType: ChatLinkType;
  vaultId?: string;
  targetChatId?: string;
  label?: string;
  bidirectional?: boolean;
}

interface MemoriesConsolidationsAPI {
  list(chatId: string, options?: { tier?: number }): Promise<MemoryConsolidation[]>;
  latestArc(chatId: string): Promise<MemoryConsolidation | null>;
  run(chatId: string): Promise<void>;
}
interface MemoriesSalienceAPI {
  list(chatId: string, options?: { limit?: number; offset?: number }): Promise<MemorySalience[]>;
}
interface MemoriesVaultsAPI {
  list(): Promise<Vault[]>;
  get(vaultId: string): Promise<VaultWithContents | null>;
  getChunks(vaultId: string): Promise<VaultChunk[]>;
  create(input: VaultCreate): Promise<Vault>;
  rename(vaultId: string, name: string): Promise<boolean>;
  delete(vaultId: string): Promise<boolean>;
  reindex(vaultId: string): Promise<VaultReindexResult>;
}
interface MemoriesLinksAPI {
  list(chatId: string): Promise<ChatLink[]>;
  attach(input: ChatLinkAttach): Promise<ChatLink[]>;
  remove(chatId: string, linkId: string): Promise<boolean>;
  toggle(chatId: string, linkId: string, enabled: boolean): Promise<boolean>;
}

/** Memory Cortex + Long-Term Chat Memory. Requires the 'memories' permission. */
interface MemoriesAPI {
  cortex: MemoriesCortexAPI;
  entities: MemoriesEntitiesAPI;
  relations: MemoriesRelationsAPI;
  consolidations: MemoriesConsolidationsAPI;
  salience: MemoriesSalienceAPI;
  vaults: MemoriesVaultsAPI;
  links: MemoriesLinksAPI;
  chatMemory: MemoriesChatMemoryAPI;
  stats: MemoriesStatsAPI;
}

// ─── Council API (read-only, free tier) ──────────────────────────────────────

/** A single Council member assignment (member id + Lumia binding + role/chance). */
interface CouncilMember {
  id: string;
  packId: string;
  packName: string;
  itemId: string;
  itemName: string;
  /** Tool names this member is assigned. */
  tools: string[];
  /** Freeform role description (e.g. \`"Plot Enforcer"\`). */
  role: string;
  /** Probability (0–100) that this member participates each generation. */
  chance: number;
}

/** Settings governing Council tool execution. */
interface CouncilToolsSettings {
  /** @deprecated Tools are active when any member has tools assigned. */
  enabled?: boolean;
  /** \`'sidecar'\` uses a separate LLM; \`'inline'\` sends tools as function definitions to the main LLM. */
  mode: 'sidecar' | 'inline';
  /** Timeout per tool call in ms. */
  timeoutMs: number;
  /** Number of recent chat messages to include in sidecar context. */
  sidecarContextWindow: number;
  includeUserPersona: boolean;
  includeCharacterInfo: boolean;
  includeWorldInfo: boolean;
  /** Whether the user can trigger individual tools on demand. */
  allowUserControl: boolean;
  /** Word limit per tool response (0 = unlimited). */
  maxWordsPerTool: number;
  /** When true, council tools aren't re-executed on regenerations / swipes — last results are reused from chat metadata. */
  retainResultsForRegens?: boolean;
}

/** Top-level Council configuration object persisted per user. */
interface CouncilSettings {
  councilMode: boolean;
  members: CouncilMember[];
  toolsSettings: CouncilToolsSettings;
}

/**
 * Personality snapshot of a Council member (assignment + Lumia source data
 * merged into one record). Returned by \`api.council.getMembers()\` and also
 * delivered as the second arg to \`api.tools.register\` handlers when invoked
 * via the Council execution path.
 */
interface CouncilMemberContext {
  memberId: string;
  itemId: string;
  packId: string;
  packName: string;
  name: string;
  /** Freeform role description. */
  role: string;
  /** Probability (0–100) that this member participates each generation. */
  chance: number;
  /** Relative URL to the avatar (e.g. \`/api/v1/images/{id}\`), or null. */
  avatarUrl: string | null;
  /** Lumia "definition" field — physical/identity description. */
  definition: string;
  /** Lumia "personality" field. */
  personality: string;
  /** Lumia "behavior" field — behavioural patterns. */
  behavior: string;
  /** \`0\` = unspecified, \`1\` = feminine, \`2\` = masculine. */
  genderIdentity: 0 | 1 | 2;
}

/**
 * A Lumia item available in the user's installed packs. Returned by
 * \`api.council.getAvailableLumiaItems()\`. Superset of what's currently
 * assigned to Council members (assignments live in
 * \`CouncilSettings.members\` / \`CouncilMemberContext[]\`).
 */
interface LumiaItem {
  id: string;
  packId: string;
  name: string;
  /** Relative URL to the avatar image, or null when no avatar is set. */
  avatarUrl: string | null;
  authorName: string;
  /** Physical / identity description. */
  definition: string;
  personality: string;
  /** Behavioural patterns. */
  behavior: string;
  /** \`0\` = unspecified, \`1\` = feminine, \`2\` = masculine. */
  genderIdentity: 0 | 1 | 2;
  /** Pack-author-supplied version string. */
  version: string;
  /** Sort index within the pack (lower renders first). */
  sortOrder: number;
  createdAt: number;
  updatedAt: number;
}

// ─── Images API ──────────────────────────────────────────────────────────────

/** Camel-case mirror of Spindle's safe image-store DTO. */
interface ImageInfo {
  id:                  string;
  originalFilename:    string;
  mimeType:            string;
  width:               number | null;
  height:              number | null;
  hasThumbnail:        boolean;
  url:                 string;
  specificity:         string;
  ownerExtensionIdentifier: string | null;
  ownerCharacterId:    string | null;
  ownerChatId:         string | null;
  createdAt:           number;
}

interface ImageUploadInput {
  /** Raw image bytes. Source via \`api.utils.http.* responseType:'arraybuffer'\`, \`api.utils.image.dataUrlToBytes\`, \`api.files.*\`, etc. */
  data:               Uint8Array;
  filename?:          string;
  mimeType?:          string;
  ownerCharacterId?:  string;
  ownerChatId?:       string;
}

interface ImageUploadFromDataUrlOptions {
  originalFilename?:  string;
  ownerCharacterId?:  string;
  ownerChatId?:       string;
}

/**
 * \`api.images\` — thin wrapper over Spindle's image-store surface.
 * Requires \`images\` permission. The returned \`id\` field can be passed
 * to \`api.theme.extractColors(id)\` or stored on a character avatar /
 * databank document / etc. for later retrieval.
 */
interface ImagesAPI {
  upload(input: ImageUploadInput): Promise<ImageInfo>;
  uploadFromDataUrl(dataUrl: string, options?: ImageUploadFromDataUrlOptions): Promise<ImageInfo>;
  get(imageId: string): Promise<ImageInfo | null>;
  delete(imageId: string): Promise<boolean>;
}

// ─── Image Generation API ───────────────────────────────────────────────────

/** One parameter's contract within a provider's capability schema. */
interface ImageGenParameterSchema {
  type:         'number' | 'integer' | 'boolean' | 'string' | 'select' | 'image_array';
  default?:     unknown;
  min?:         number;
  max?:         number;
  step?:        number;
  description:  string;
  required?:    boolean;
  options?:     Array<{ id: string; label: string }>;
  group?:       string;
}

/** Provider id + capability schema. */
interface ImageGenProviderInfo {
  id:   string;
  name: string;
  capabilities: {
    parameters:       Record<string, ImageGenParameterSchema>;
    apiKeyRequired:   boolean;
    modelListStyle:   'static' | 'dynamic' | 'google';
    staticModels?:    Array<{ id: string; label: string }>;
    defaultUrl:       string;
  };
}

/** A single image-gen connection profile (API keys masked to \`hasApiKey\`). */
interface ImageGenConnectionInfo {
  id:                 string;
  name:               string;
  provider:           string;
  apiUrl:             string;
  model:              string;
  isDefault:          boolean;
  hasApiKey:          boolean;
  defaultParameters:  Record<string, unknown>;
  metadata:           Record<string, unknown>;
  createdAt:          number;
  updatedAt:          number;
}

/** Input for \`api.imageGen.generate\`. */
interface ImageGenInput {
  connectionId?:      string;
  prompt:             string;
  negativePrompt?:    string;
  model?:             string;
  /** Provider-specific parameters; \`image_array\` types take arrays of \`imageId\` strings. */
  parameters?:        Record<string, unknown>;
  ownerCharacterId?:  string;
  ownerChatId?:       string;
}

/** Result from \`api.imageGen.generate\`. */
interface ImageGenResult {
  /** Generated image as a base64 data URL. */
  imageDataUrl:  string;
  model:         string;
  provider:      string;
  /** Canonical image id — accepted by \`api.images.get\` / \`api.theme.extractColors\` / \`spindle.characters.setAvatar\`. */
  imageId?:      string;
  /** Public unauthenticated URL — suitable for \`api.ui.pushNotification(title, body, { image: result.imageUrl })\` (positional signature). */
  imageUrl?:     string;
}

interface ImageGenAPI {
  generate(input: ImageGenInput): Promise<ImageGenResult>;
  getProviders(): Promise<ImageGenProviderInfo[]>;
  listConnections(): Promise<ImageGenConnectionInfo[]>;
  getConnection(connectionId: string): Promise<ImageGenConnectionInfo | null>;
  getModels(connectionId: string): Promise<Array<{ id: string; label: string }>>;
}

// ─── OAuth API ──────────────────────────────────────────────────────────────

interface OAuthAPI {
  /** Register a callback handler. Single handler per extension (last-wins); LumiScript emits a warn on cross-script or same-script-re-register collisions. Returns sync unsubscribe fn (matches host + the commands.onInvoked proxy pattern). */
  onCallback(
    handler: (params: Record<string, string>) => Promise<{ html?: string } | void>,
  ): () => void;
  /** Get the callback URL path (host-relative). Stable per-extension; use as \`redirect_uri\` in your authorize URL. */
  getCallbackUrl(): Promise<string>;
  /** Mint a CSRF state nonce; pass to the authorize URL and the host verifies at callback time. */
  createState(): Promise<string>;
}

// ─── Theme API ───────────────────────────────────────────────────────────────

/** RGB color value, 0–255 per channel. */
interface ColorRGB { r: number; g: number; b: number; }
/** HSL color value (h: 0–360, s: 0–100, l: 0–100). */
interface ColorHSL { h: number; s: number; l: number; }

/** Palette extracted from an image via \`api.theme.extractColors\`. */
interface ColorExtractionInfo {
  dominant: ColorRGB;
  regions:  { top: ColorRGB; center: ColorRGB; bottom: ColorRGB; left: ColorRGB; right: ColorRGB; };
  flatness: { top: number; center: number; bottom: number; left: number; right: number; full: number; };
  average:  ColorRGB;
  isLight:  boolean;
  dominantHsl: ColorHSL;
}

/** Read-only snapshot of the user's current theme configuration. */
interface ThemeInfo {
  id:             string;
  name:           string;
  mode:           'light' | 'dark';
  accent:         ColorHSL;
  enableGlass:    boolean;
  radiusScale:    number;
  fontScale:      number;
  uiScale:        number;
  characterAware: boolean;
}

/** CSS variable overrides applied via \`api.theme.apply\`. */
interface ThemeOverride {
  variables?: Record<string, string>;
  variablesByMode?: {
    dark?:  Record<string, string>;
    light?: Record<string, string>;
  };
}

interface ThemePaletteConfig { accent: ColorHSL; }

interface ThemeVariablesConfig {
  accent:        ColorHSL;
  mode:          'dark' | 'light';
  enableGlass?:  boolean;
  radiusScale?:  number;
  fontScale?:    number;
  uiScale?:      number;
  baseColors?:   {
    primary?:    string;
    secondary?:  string;
    background?: string;
    text?:       string;
    danger?:     string;
    success?:    string;
    warning?:    string;
    speech?:     string;
    thoughts?:   string;
  };
  statusColors?: {
    danger?:  string;
    success?: string;
    warning?: string;
  };
}

/**
 * \`api.theme\` — Lumiverse theme manipulation. Requires \`app_manipulation\`
 * permission. Multiple LumiScript scripts can apply themes concurrently;
 * LumiScript merges per-script overrides before pushing to Spindle, with
 * last-applied-wins conflict resolution. Auto-cleared on script disable.
 */
interface ThemeAPI {
  apply(overrides: ThemeOverride): Promise<void>;
  applyPalette(palette: ThemePaletteConfig | null): Promise<void>;
  clear(): Promise<void>;
  getCurrent(): Promise<ThemeInfo>;
  extractColors(imageId: string): Promise<ColorExtractionInfo>;
  generateVariables(config: ThemeVariablesConfig): Promise<Record<string, string>>;
}

/**
 * \`api.council\` — read-only access to the user's Council configuration.
 * No permission required (free-tier surface). Useful for tailoring scripts
 * to the user's narrative directors. If you need the active Council member
 * inside a tool handler, prefer the \`ctx.councilMember\` arg passed
 * automatically to \`api.tools.register\` handlers — \`api.council\` is for
 * inspecting Council state OUTSIDE a tool execution cycle.
 */
interface CouncilAPI {
  /** Get the user's full Council settings (mode, members, tool settings). */
  getSettings(): Promise<CouncilSettings>;
  /** Get currently-assigned Council members with full Lumia context. */
  getMembers(): Promise<CouncilMemberContext[]>;
  /** Get all Lumia items available to the user across installed packs. */
  getAvailableLumiaItems(): Promise<LumiaItem[]>;
}

// ─── Tools API ────────────────────────────────────────────────────────────────

interface ToolInvocationArgs {
  /** Formatted chat context provided by Lumiverse (character info, world info, recent messages). */
  context?: string;
  /** The user ID of the invoking user. */
  __userId?: string;
  /** Timestamp (ms) by which the handler must return. */
  __deadlineMs?: number;
  [key: string]: unknown;
}

/**
 * Third argument to tool handlers — invocation context delivered by the host.
 * \`councilMember\` is a \`CouncilMemberContext\` (defined above in the Council
 * types section) — populated only for Council-path invocations.
 */
interface ToolInvocationContext {
  /**
   * Council-member snapshot when the tool was invoked via a Council cycle.
   * Undefined for inline function-calling and \`api.tools.invoke()\`.
   * Pass this to \`buildCouncilMessages\` from \`ls:council-prompt\`.
   */
  councilMember?: CouncilMemberContext;
  /**
   * Structured chat context for Council invocations — same content as
   * \`args.context\` but with role boundaries preserved. Prefer this over the
   * flattened string when available.
   */
  contextMessages?: LLMMessage[];
}

interface ToolDefinition {
  /** Human-readable name shown in the Council tools list. */
  display_name: string;
  /** Description for the LLM — explains what the tool does and when to call it. */
  description: string;
  /** JSON Schema describing input parameters. */
  parameters?: Record<string, unknown>;
  /** When true, the tool appears in Lumiverse's Council tools list. Default: false. */
  council_eligible?: boolean;
}
type ToolHandler = (
  args: ToolInvocationArgs,
  api: LumiScriptAPI,
  ctx?: ToolInvocationContext,
) => string | Promise<string>;
interface RegisteredToolInfo {
  name: string; display_name: string; description: string;
  parameters?: Record<string, unknown>; council_eligible: boolean;
  scriptId: string; scriptName: string;
}

interface ToolsAPI {
  /**
   * Register an LLM tool invocable by Lumiverse Council or inline function-calling.
   * The handler receives (args, api) and must return a string.
   * Requires tools permission.
   * @example
   * api.tools.register('weather', {
   *   display_name: 'Weather Lookup',
   *   description: 'Get current weather for a city.',
   *   parameters: { type: 'object', properties: { city: { type: 'string' } }, required: ['city'] },
   *   council_eligible: true,
   * }, async (args, api) => {
   *   return \`Weather in \${args.city}: sunny, 22°C\`;
   * });
   */
  register(name: string, def: ToolDefinition, handler: ToolHandler): void;
  /** Unregister a tool registered by this script. No-op if not found. */
  unregister(name: string): void;
  /** List all currently registered tools across all scripts. */
  list(): RegisteredToolInfo[];
  /**
   * Invoke a registered tool handler directly (no Lumiverse routing needed).
   * Use inside an agentic loop to execute LLM-requested function calls.
   * @example
   * const result = await api.tools.invoke(call.name, call.args);
   */
  invoke(name: string, args?: Record<string, unknown>): Promise<string>;
}

// ─── Broadcast API ────────────────────────────────────────────────────────────

/**
 * Worker-scoped pub/sub bus for real-time script-to-script communication.
 * No permission required. LumiScript reserves the \`ls:\` prefix for built-in events.
 *
 * Built-in events:
 * - \`ls:tool:registered\`   { name, scriptId }
 * - \`ls:tool:unregistered\` { name, scriptId }
 * - \`ls:tool:invoked\`      { name, args, result, scriptId, callMs }
 */
interface BroadcastAPI {
  /**
   * Emit a named event to all subscribed handlers across all scripts.
   * @example
   * api.broadcast.emit('analysis:done', { summary: 'All clear.' });
   */
  emit(event: string, payload?: unknown): void;
  /**
   * Subscribe to a named event. Returns an unsubscribe function.
   * Subscriptions are auto-cleaned when the owning script is disabled or deleted.
   *
   * **Async-tracking opt-in (LumiScript ≥0.26.4):** RETURN a Promise from
   * the handler to make the sidebar status indicator track the awaited
   * work. Fire-and-forget handlers (\`void (...)()\`) produce no status
   * update; sync handlers don't either.
   *
   * @example  RETURN the async IIFE → status dot blinks amber until settle
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

// ─── RPC pool (cross-extension) ────────────────────────────────────────────────

/**
 * Optional read policy for an RPC endpoint. Omit for legacy
 * owner-permission inheritance (requester must hold every gated permission
 * the owner has). \`requires: []\` makes the endpoint readable without
 * delegating any permissions. \`requires: ['name']\` requires both owner
 * AND requester to hold the named permission.
 */
interface RpcPolicy {
  requires?: readonly string[];
}

interface RpcRequestContext {
  endpoint: string;
  requesterExtensionId: string;
  /** Gated permissions available to this delegated handler call (per the
   *  endpoint's policy). Inside the handler, gated api.* calls are limited
   *  to this set. */
  effectivePermissions: readonly string[];
}

/**
 * Cross-extension shared RPC pool — wraps Spindle's \`spindle.rpcPool\`.
 * Two-tier namespacing: every endpoint is fully-qualified as
 * \`lumiscript.<scriptSlug>.<channel>\` where scriptSlug auto-derives from
 * the calling script's name, overridable via \`options.as\`. Free tier (no
 * permission). Endpoints auto-unregister on script disable / delete /
 * stale-after-re-run.
 */
interface RpcAPI {
  /** Publish the latest value on a channel. Returns the fully-qualified endpoint. */
  sync<T = unknown>(channel: string, value: T, options?: { as?: string; policy?: RpcPolicy }): Promise<string>;
  /** Register an on-demand handler. Returns the fully-qualified endpoint. */
  handle<T = unknown>(
    channel: string,
    handler: (ctx: RpcRequestContext) => T | Promise<T>,
    options?: { as?: string; policy?: RpcPolicy },
  ): Promise<string>;
  /** Read a value from another extension's published endpoint (\`<extensionId>.<channel>\`). */
  read<T = unknown>(endpoint: string): Promise<T>;
  /** Remove a channel previously published by the calling script. Idempotent. */
  unregister(channel: string, options?: { as?: string }): Promise<void>;
}

// ─── Commands API ──────────────────────────────────────────────────────────────

type CommandScope = 'global' | 'chat' | 'chat-idle' | 'landing' | 'character';

interface CommandDefinition {
  /** Unique identifier for this command. */
  id: string;
  /** Display label shown in the command palette. Max 80 characters. */
  label: string;
  /** Description shown below the label. Max 200 characters. */
  description: string;
  /** Optional search keywords for fuzzy matching. */
  keywords?: string[];
  /** Scope controlling when the command appears. Default: 'global'. */
  scope?: CommandScope;
}

interface CommandContext {
  /** Current route path (e.g. "/chat/abc-123"). */
  route: string;
  /** Active chat ID, if in a chat view. */
  chatId?: string;
  /** Active character ID, if available. */
  characterId?: string;
  /** Whether the active chat is a group chat. */
  isGroupChat?: boolean;
}

interface CommandsAPI {
  /**
   * Register command palette entries. Each call replaces the full set.
   * Max 20 commands per extension.
   * @example
   * api.commands.register([
   *   { id: 'summarize', label: 'Summarize Chat', description: 'Generate a chat summary', scope: 'chat' },
   * ]);
   */
  register(commands: CommandDefinition[]): void;
  /** Remove specific commands by ID, or all if no IDs given. */
  unregister(commandIds?: string[]): void;
  /**
   * Register a handler called when the user selects a command.
   * Returns an unsubscribe function.
   * @example
   * api.commands.onInvoked((id, ctx) => {
   *   if (id === 'summarize') {
   *     // ctx.chatId, ctx.characterId available
   *   }
   * });
   */
  onInvoked(handler: (commandId: string, context: CommandContext) => void | Promise<void>): () => void;
}

// ─── Events API ──────────────────────────────────────────────────────────────

/** Severity level for tracked events. */
type EventLevel = 'debug' | 'info' | 'warn' | 'error';

/** Options for api.events.track(). */
interface EventTrackOptions {
  /** Severity level (default: 'info'). */
  level?: EventLevel;
  /** Associate with a specific chat (defaults to active chat). */
  chatId?: string;
  /** Auto-expire after this many days. */
  retentionDays?: number;
}

/** Filter for api.events.query() and api.events.replay(). */
interface EventQueryFilter {
  /** Filter by event name. */
  eventName?: string;
  /** Filter by chat. */
  chatId?: string;
  /** ISO 8601 — only events after this timestamp. */
  since?: string;
  /** ISO 8601 — only events before this timestamp. */
  until?: string;
  /** Filter by severity level. */
  level?: EventLevel;
  /** Maximum number of results. */
  limit?: number;
}

/** A single tracked event record. */
interface EventRecord {
  id: string;
  /** ISO 8601 timestamp. */
  ts: string;
  eventName: string;
  level: EventLevel;
  chatId?: string;
  payload?: Record<string, unknown>;
}

interface EventsAPI {
  /**
   * Record a named event with optional payload and options.
   * Requires event_tracking permission.
   * @example
   * await api.events.track('user_action', { action: 'clicked_button' });
   * await api.events.track('error_occurred', { msg: 'timeout' }, { level: 'error' });
   */
  track(eventName: string, payload?: Record<string, unknown>, options?: EventTrackOptions): Promise<void>;
  /**
   * Query persisted events (newest-first).
   * Requires event_tracking permission.
   * @example
   * const recent = await api.events.query({ eventName: 'user_action', limit: 10 });
   */
  query(filter?: EventQueryFilter): Promise<EventRecord[]>;
  /**
   * Replay persisted events in chronological order (oldest-first).
   * Requires event_tracking permission.
   * @example
   * const history = await api.events.replay({ since: '2026-01-01' });
   */
  replay(filter?: EventQueryFilter): Promise<EventRecord[]>;
  /**
   * Retrieve the latest known state for a set of keys.
   * Useful for resuming stateful scripts after restarts.
   * Requires event_tracking permission.
   * @example
   * const state = await api.events.getLatestState(['counter', 'lastSeen']);
   */
  getLatestState(keys: string[]): Promise<Record<string, unknown>>;
}

// ─── Macros API ──────────────────────────────────────────────────────────────

/** Parameter passed to a pull-mode macro handler at resolution time. */
interface MacroContext {
  /** The bare macro name (no \`{{}}\`, no arguments). */
  name: string;
  /** Argument tokens parsed from the macro invocation. */
  args: string[];
  /**
   * Environment context populated by the macro engine.
   *
   * **Note on \`env.character.id\`:** Lumiverse populates \`env.character\` with
   * card data (name, description, etc.) but the \`id\` field is NOT reliably
   * present here. For the active character UUID, prefer
   * \`await api.chats.getActive()\` (canonical) or read \`globalThis.__lsActiveCharId\`
   * (sync shortcut set by the engine).
   */
  env?: {
    character?: { id?: string; name?: string; [k: string]: unknown };
    chat?:      { id?: string; [k: string]: unknown };
    names?:     { char?: string; user?: string; [k: string]: unknown };
    variables?: { local?: Record<string, string>; global?: Record<string, string> };
    [k: string]: unknown;
  };
  /** True when resolved inside a scoped block (e.g. \`{{if::…}}…{{/if}}\`). */
  isScoped?: boolean;
  /** Body text for scoped macros. */
  body?: string;
  /**
   * \`false\` when the host is performing a dry / non-committing macro
   * resolution (prompt previews, chat-title regen, etc.). Handlers with
   * side effects MUST skip them when \`commit === false\`. Guard writes
   * with \`ctx.commit !== false\`, not \`ctx.commit === true\` (undefined
   * also means "commit").
   */
  commit?: boolean;
}

type MacroHandler = (ctx: MacroContext) => string | Promise<string>;

interface MacroDefinition {
  /** Human-readable description shown in preset editors and macro browsers. */
  description: string;
  /** Category label. Default: 'extension:lumiscript:user'. */
  category?: string;
  /** Return-type hint for value coercion. Default string. */
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  /** Argument schema shown to preset authors. */
  args?: { name: string; description?: string; required?: boolean }[];
  /**
   * Mark the macro as producing output that isn't a pure function of its
   * args + tracked env reads (time, randomness, IO, mutable external state).
   * The host's display-regex cache will skip storing resolutions that
   * include a volatile macro, preventing stale reads across renders.
   *
   * LumiScript-specific defaults:
   *   - Pull-mode (handler provided)  → \`true\` (safe default; LumiScript
   *     handlers typically read external state via api.* that the host's
   *     fingerprinter can't see)
   *   - Push-mode (no handler)        → \`false\` (push-mode resolution is
   *     pure relative to push events; host invalidates on updateValue)
   *
   * Set explicit \`false\` only when you know the handler is pure-from-args
   * (no api.* reads, no Date / Math.random, no mutable closure state).
   */
  volatile?: boolean;
}

/** Returned by api.macros.list(). */
interface RegisteredMacroInfo {
  name: string;
  description: string;
  category: string;
  returnType?: 'string' | 'integer' | 'number' | 'boolean';
  args?: { name: string; description?: string; required?: boolean }[];
  /** Push = registered without handler (value set via updateValue). Pull = handler-backed. */
  mode: 'push' | 'pull';
  /** Most recent value pushed via updateValue. Only meaningful in push mode. */
  lastValue?: string;
  scriptId: string;
  scriptName: string;
}

// ─── Macro interceptor (api.macros.registerInterceptor) ─────────────────────

/**
 * Phase tag passed to a macro interceptor. Lets handlers gate their work
 * to specific call sites — e.g. \`phase === 'prompt'\` for prompt-assembly
 * only. Pre-filtered before invocation when the registration specifies
 * \`phase\`.
 */
type MacroInterceptorPhase = 'prompt' | 'display' | 'response' | 'other';

/**
 * Read-only snapshot of the macro evaluation environment passed to a
 * macro interceptor handler. Mutating these values has NO effect on the
 * real environment. Persist state via \`api.variables.*\`, \`api.db.*\`,
 * or \`api.macros.updateValue()\` instead.
 */
interface MacroInterceptorEnv {
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
   * Per-call macro overrides supplied by the caller. The display-regex
   * pipeline (\`phase === 'display'\`) sets \`chat_index\` to the rendered
   * message's index in the chat. Other callers may set additional fields.
   */
  readonly dynamicMacros?: Record<string, string>;
  readonly extra: Record<string, unknown>;
}

/**
 * Context passed to a macro interceptor handler. Receives the current raw
 * template (already transformed by any earlier interceptors in the chain)
 * and returns either a transformed template string or \`void\` to pass through.
 */
interface MacroInterceptorCtx {
  readonly template: string;
  readonly env: MacroInterceptorEnv;
  readonly commit: boolean;
  readonly phase: MacroInterceptorPhase;
  readonly sourceHint?: string;
  /** User ID that initiated the macro resolution (when available). */
  readonly userId?: string;
}

type MacroInterceptorHandler = (
  ctx: MacroInterceptorCtx,
) => string | void | Promise<string | void>;

/** Registration options for \`api.macros.registerInterceptor\`. */
interface MacroInterceptorOptions {
  /** Stable identifier. Re-registration with the same id from the same script replaces. */
  id?: string;
  /** Lower runs first within the LumiScript multiplexer pass. Default 100. */
  priority?: number;
  /**
   * Restrict the handler to specific evaluation phases. Default: all phases.
   * Pre-filtered before invocation.
   */
  phase?: MacroInterceptorPhase | MacroInterceptorPhase[];
  /**
   * Pre-filter on template content. Skip the handler unless the template
   * contains the marker(s).
   *  - \`string\` — simple \`includes\` check.
   *  - \`string[]\` — any-of (skip unless at least one element is present).
   *  - \`RegExp\` — skip unless the regex matches.
   *
   * Most common use: gating on a macro family namespace like \`'{{tracker.'\`
   * so handlers don't write the same \`if (!ctx.template.includes(...)) return\`
   * boilerplate.
   */
  matchTemplate?: string | string[] | RegExp;
  /** Per-invocation soft timeout in ms. Default 2000. */
  timeoutMs?: number;
}

/** Handle returned by \`registerInterceptor\`. \`remove()\` deregisters. */
interface MacroInterceptorHandle {
  readonly id: string;
  remove(): void;
}

/** Snapshot returned by \`api.macros.listInterceptors()\`. */
interface RegisteredMacroInterceptorInfo {
  scriptId: string;
  scriptName: string;
  id: string;
  priority: number;
  /** \`null\` when no phase filter was supplied. */
  phases: MacroInterceptorPhase[] | null;
  /**
   * Stringified template-marker filter, or \`null\` when no filter was supplied.
   * RegExps are stringified via \`String(regexp)\`; string-array filters are
   * preserved as arrays.
   */
  matchTemplate: string[] | string | null;
  timeoutMs: number;
}

/**
 * Register Lumiverse macros from scripts. Two modes:
 *  - **Push** (no handler) — set values via \`updateValue(name, value)\`.
 *  - **Pull** (with handler) — computed at resolution time.
 *
 * No permission required. Reserved LS-internal names (\`lumiScriptActive\`,
 * the 7 char-var macros + aliases) can't be overwritten.
 */
interface MacrosAPI {
  /**
   * Register a macro.
   * @example
   * // Push mode:
   * api.macros.register('playerMood', { description: 'Current mood' });
   * api.macros.updateValue('playerMood', 'curious');
   * @example
   * // Pull mode:
   * api.macros.register('randomLine', { description: 'Random flavor' }, (ctx) => {
   *   return pickRandomLine(ctx.args[0]);
   * });
   */
  register(name: string, def: MacroDefinition, handler?: MacroHandler): void;
  /** Push a new value for a push-mode macro. Throws if the macro is pull-mode. */
  updateValue(name: string, value: string): void;
  /** Unregister a macro owned by this script. No-op if not found or not owned. */
  unregister(name: string): void;
  /** List all currently registered macros across all scripts. */
  list(): RegisteredMacroInfo[];

  /**
   * Register a macro interceptor — handler that receives the RAW template
   * before Lumiverse parses it, and returns either a transformed template
   * or \`void\` to pass through. Requires \`macro_interceptor\` permission.
   *
   * Use when per-macro RPC cost dominates iteration-heavy templates like
   * \`{{#each LARGE_LIST}}…{{my_macro}}…{{/each}}\` — one interceptor call
   * resolves all hits in-worker instead of paying N RPCs across the
   * worker boundary. For single non-iterated macros, prefer \`register()\`.
   *
   * **Critical perf**: handler runs on a hot path (every prompt-assembly
   * evaluate pass). Each invocation has a 2-second soft timeout
   * (configurable). DO NOT call \`api.llm.*\` or \`api.utils.http.*\` from
   * a handler — pre-compute via a trigger handler, store in \`api.db.*\`,
   * read here.
   *
   * Returns a handle whose \`remove()\` deregisters the handler.
   *
   * @example
   * const handle = api.macros.registerInterceptor((ctx) => {
   *   const intensity = api.db.collection({ scope: 'chat' })
   *     .get('tracker:state')?.intensity ?? 0;
   *   return ctx.template.replaceAll('{{tracker.intensity}}', String(intensity));
   * }, { matchTemplate: '{{tracker.', priority: 100 });
   */
  registerInterceptor(
    handler: MacroInterceptorHandler,
    options?: MacroInterceptorOptions,
  ): MacroInterceptorHandle;

  /** List all currently registered macro interceptors (across all scripts). Diagnostic surface — un-gated. */
  listInterceptors(): RegisteredMacroInterceptorInfo[];
}

// ─── Tokens API ──────────────────────────────────────────────────────────────

/** Options accepted by every \`api.tokens.*\` method. */
interface TokenCountOptions {
  /** Explicit model name (overrides modelSource). */
  model?: string;
  /** Which LLM profile's tokenizer to use. Default: 'main'. */
  modelSource?: 'main' | 'sidecar';
}

/** Shape returned by every \`api.tokens.*\` method. */
interface TokenCountResult {
  totalTokens: number;
  model: string;
  /**
   * Where the tokenizer model came from: \`'main'\` (main connection),
   * \`'sidecar'\` (sidecar selection), or \`'explicit'\` (emitted when
   * \`options.model\` was supplied directly).
   */
  modelSource: 'main' | 'sidecar' | 'explicit';
  /** \`null\` when no exact tokenizer match was found and an approximate fallback was used. */
  tokenizerId: string | null;
  tokenizerName: string;
  /** \`true\` when no tokenizer matched; count fell back to char/4 heuristic. */
  approximate: boolean;
}

/**
 * Server-side token counting using the provider's actual tokenizer.
 * Free-tier. Falls back to char/4 heuristic with \`approximate: true\`
 * when no tokenizer matches the selected connection.
 */
interface TokensAPI {
  /**
   * Count tokens in an arbitrary string.
   * @example
   * const { totalTokens } = await api.tokens.countText(prompt);
   */
  countText(text: string, options?: TokenCountOptions): Promise<TokenCountResult>;
  /**
   * Count tokens across an array of \`{ role, content }\` messages — accepts
   * the output of \`api.chat.getMessages()\` directly.
   */
  countMessages(messages: LLMMessage[], options?: TokenCountOptions): Promise<TokenCountResult>;
  /** Count tokens for a live stored chat by ID. */
  countChat(chatId: string, options?: TokenCountOptions): Promise<TokenCountResult>;
}

// ─── DB API ──────────────────────────────────────────────────────────────────

/**
 * Record shape produced by \`api.db.*\`. Every inserted record carries
 * auto-generated \`id\` + \`createdAt\` / \`updatedAt\` timestamps. \`id\` and
 * \`createdAt\` are immutable — \`update()\` silently strips them from the
 * patch. \`updatedAt\` bumps to Date.now() on every successful update.
 */
interface DbRecord {
  id: string;
  createdAt: number;
  updatedAt: number;
  [key: string]: unknown;
}

/** Scope of a collection — determines the storage path + lifetime. */
type DbScope = 'script' | 'character' | 'chat';

/**
 * Filter shapes accepted by find / findOne / update / delete / count:
 *
 *   - \`undefined\` → matches all records.
 *   - function \`(r) => boolean\` → caller predicate.
 *   - object (literal) \`Partial<T>\` → deep-equality with dot-notation
 *     path resolution. \`{ 'author.name': 'alice' }\` works on nested fields.
 *   - object (operator envelope) \`{ field: { $op: arg, ... } }\` — all keys
 *     inside the envelope must start with \`$\`. Mixed-key envelopes throw.
 *
 * Supported operators (LumiScript 0.20.0+):
 *   - \`$eq\` / \`$ne\` — structural (in)equality.
 *   - \`$gt\` / \`$gte\` / \`$lt\` / \`$lte\` — numeric comparison (type-mismatch = false, never throws).
 *   - \`$in\` / \`$nin\` — membership / non-membership in an array.
 *   - \`$exists: true | false\` — field presence (null counts as present).
 *   - \`$regex\` — string pattern. Accepts a \`RegExp\` instance OR
 *     \`{ $regex: 'pat', $options?: 'i' }\`. Direct \`RegExp\` value is
 *     also accepted as a shorthand: \`{ name: /alice/i }\`.
 */
/**
 * Operator envelope for \`DbFilter<T>\`. Each \`$op\` key maps to its argument
 * type. All keys inside a single envelope must start with \`$\`; mixed-key
 * envelopes (mix of \`$op\` and plain field keys) throw at filter-parse time.
 *
 * @example
 *   { ts:     { $gte: Date.now() - 3600_000 } }
 *   { tags:   { $in:  ['a', 'b'] } }
 *   { author: { $exists: true } }
 *   { name:   { $regex: /alice/i } }
 */
interface DbFilterOperators<V = unknown> {
  $eq?:     V;
  $ne?:     V;
  $gt?:     V;
  $gte?:    V;
  $lt?:     V;
  $lte?:    V;
  $in?:     readonly V[];
  $nin?:    readonly V[];
  $exists?: boolean;
  $regex?:  RegExp | { $regex: string; $options?: string };
}

type DbFilter<T = DbRecord> =
  | undefined
  | { [K in keyof T]?: T[K] | RegExp | DbFilterOperators<T[K]> }
  | ((record: T) => boolean);

interface CollectionOpts<T extends DbRecord = DbRecord> {
  /** Scope of the collection. Defaults to 'script'. */
  scope?: DbScope;
  /**
   * Optional Zod (or any \`parse(data): T\`) schema applied on every write —
   * insert / insertMany / update. On update the MERGED record is validated,
   * not the raw patch. Reserved fields are preserved even when Zod's
   * default object-schema strips unknown keys. \`find\` / \`findOne\` /
   * \`count\` / \`query\` are NOT validated — schema evolution is drop + re-insert.
   */
  schema?: ZodLike<T>;
}

interface Collection<T extends DbRecord = DbRecord> {
  /**
   * Insert one record. Auto-assigns id / createdAt / updatedAt.
   * @example
   * await rolls.insert({ notation: '1d20+3', total: 18 });
   */
  insert(record: Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>): Promise<T>;
  /**
   * Batch-insert N records with a single file-write. All share the same
   * timestamp (batch-commit semantic). Atomic: if schema/size guard rejects
   * any record, nothing lands. Fires one \`ls:collection:inserted\` event
   * per record in insertion order. (0.20.0+)
   * @example
   * await rolls.insertMany([
   *   { notation: '1d20+3', total: 18 },
   *   { notation: '2d6',    total:  7 },
   * ]);
   */
  insertMany(records: Array<Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>>): Promise<T[]>;
  /**
   * Find all records matching the filter. \`undefined\` matches all.
   * Filter accepts literal partials, function predicates, or operator
   * envelopes — see DbFilter.
   * @example
   * await rolls.find({ margin: { $gt: 0 }, tier: { $in: ['hard', 'very_hard'] } });
   */
  find(filter?: DbFilter<T>): Promise<T[]>;
  /** Find the first record matching the filter. Returns null on no match. */
  findOne(filter: DbFilter<T>): Promise<T | null>;
  /**
   * Update matching records with the given patch. Returns count.
   * id / createdAt / updatedAt cannot be overwritten — stripped silently.
   * updatedAt bumps to Date.now() on every match.
   */
  update(filter: DbFilter<T>, patch: Partial<T>): Promise<number>;
  /** Delete matching records. Returns count. */
  delete(filter: DbFilter<T>): Promise<number>;
  /** Count matching records (or all if filter omitted). */
  count(filter?: DbFilter<T>): Promise<number>;
  /** Remove all records, leaving an empty collection file. */
  clear(): Promise<void>;
  /**
   * Run a jsonquery string against the full collection. Escape hatch for
   * aggregations / sorts / projections beyond the filter model.
   * @example
   * await rolls.query('groupBy(.difficultyTier) | mapValues(size())');
   */
  query<R = unknown>(jsonQuery: string): Promise<R>;
}

/**
 * JSON-file-backed micro-DB namespace. Collections are owner-scoped by
 * scriptId — scripts cannot see or mutate other scripts' collections.
 * No permission required. Size governance: soft-warn at 10 MB, hard-stop
 * at 50 MB per collection.
 */
interface DbAPI {
  /**
   * Open or create a collection. Path resolves at creation and is baked
   * into the handle. Throws if the scope requires context the script
   * lacks (e.g. \`scope: 'chat'\` with no active chat).
   * @example
   * const rolls = await api.db.collection('dice-rolls', {
   *   scope: 'character',
   *   schema: z.object({ notation: z.string(), total: z.number().int() }),
   * });
   */
  collection<T extends DbRecord = DbRecord>(name: string, opts?: CollectionOpts<T>): Promise<Collection<T>>;
  /** List collection names in the given scope (default 'script'). Owner-scoped. */
  list(scope?: DbScope): Promise<string[]>;
  /** Delete a collection entirely. No-op if it doesn't exist. */
  drop(name: string, scope?: DbScope): Promise<void>;
  /**
   * O(1) existence check for a collection file. Does NOT load or parse.
   * Ownership-safe — only sees this script's own collections.
   * (0.20.0+)
   */
  exists(name: string, scope?: DbScope): Promise<boolean>;
}

// ─── ScriptStorage API ───────────────────────────────────────────────────────

/**
 * Per-script in-memory key/value store for session state. v1.0.0-rc.6+.
 *
 * Values live on the backend in a parent-side Map keyed first by scriptId
 * then by user-supplied key. No disk persistence. Lifecycle: survives
 * worker eviction/respawn and script edits, cleared on script disable/
 * delete, lost on backend restart.
 *
 * Cap: 1 MB per script on the JSON-serialised total. \`set()\` throws
 * "capacity exceeded" when a write would cross the cap.
 *
 * Broadcasts: every mutation fires \`ls:scriptStorage:set\` /
 * \`:delete\` / \`:clear\` on the broadcast bus.
 *
 * Pick the right primitive:
 *   - \`api.scriptStorage\` — session-scoped flags (this).
 *   - \`api.variables.*\` — disk-persisted, scope-tiered.
 *   - \`api.db.*\` — structured collections with schema + filters.
 */
interface ScriptStorageAPI {
  /** Read a value. Returns \`defaultValue\` (or undefined) when the key is missing. */
  get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined>;
  /** Write a value. Throws if the per-script size cap would be exceeded. Fires \`ls:scriptStorage:set\`. */
  set(key: string, value: unknown): Promise<void>;
  /** Remove a key. Returns \`true\` if it existed (fires broadcast), \`false\` if not. */
  delete(key: string): Promise<boolean>;
  /** Check whether a key exists. */
  has(key: string): Promise<boolean>;
  /** Remove every entry for this script. Fires \`ls:scriptStorage:clear\` if any entries existed. */
  clear(): Promise<void>;
  /** List the current keys in insertion order. */
  keys(): Promise<string[]>;
}

// ─── Top-level API ────────────────────────────────────────────────────────────

interface LumiScriptAPI {
  chat: ChatAPI;
  llm: LLMAPI;
  /** Read-only access to the user's LLM connection profiles (never includes API keys). */
  connections: ConnectionsAPI;
  /** Web search against the user's configured provider. Requires web_search permission. */
  webSearch: WebSearchAPI;
  /** Active-user context queries: session visibility + Lumiverse role. Free tier. */
  users: UsersAPI;
  /** Running Lumiverse backend + frontend versions. Free tier. */
  version: VersionAPI;
  variables: VariablesAPI;
  json: JSONAPI;
  utils: UtilsAPI;
  /** User-facing notifications and dialogs. */
  ui: UIAPI;
  /** Character CRUD. Requires characters permission. */
  characters: CharactersAPI;
  /** Chat session management. Requires chats permission. */
  chats: ChatsAPI;
  /** World Info / Lorebook CRUD. Requires world_books permission. */
  worldInfo: WorldInfoAPI;
  /** Databank (vectorised document collection) CRUD + per-document upload, fetch, and reprocess. Requires databanks permission. */
  databanks: DatabanksAPI;
  /** Memory Cortex + Long-Term Chat Memory. Requires memories permission. */
  memories: MemoriesAPI;
  /** Persona CRUD + active persona switching. Requires personas permission. */
  personas: PersonasAPI;
  /** Generation preset CRUD + nested prompt-block CRUD + host-derived category grouping. Requires presets permission. */
  presets: PresetsAPI;
  /** Regex find/replace script CRUD plus context-aware \`getActive\` resolver. Requires regex_scripts permission. */
  regexScripts: RegexScriptsAPI;
  /** Image-store CRUD: upload raw bytes / data URLs, get, delete. Requires images permission. */
  images: ImagesAPI;
  /** Image generation: fire generations against the user's configured connection profiles, list providers + connections + models. Returns an \`imageId\` that integrates with \`api.images.*\` / \`api.theme.extractColors\` / \`api.characters.setAvatar\`. Requires image_gen permission. */
  imageGen: ImageGenAPI;
  /** OAuth callback handling: register a callback handler for this extension's OAuth redirect URL, get the URL path itself, mint CSRF state nonces. Pair with \`api.utils.http\` for token-endpoint POSTs and \`api.enclave\` for encrypted token persistence. Requires oauth permission. */
  oauth: OAuthAPI;
  /** Theme manipulation: apply CSS variable overrides, palette-driven theming, read current theme, extract palettes from stored images. Requires app_manipulation permission. */
  theme: ThemeAPI;
  /** Read-only access to the user's Council configuration: settings, members, and the available Lumia-item pool. No permission required. */
  council: CouncilAPI;
  /** File storage across three tiers. Requires allowDangerous. */
  files: FilesAPI;
  /** AES-256-GCM encrypted per-user secret storage. Requires allowDangerous. */
  enclave: EnclaveAPI;
  /** Register LLM tools for Council and inline function-calling. Requires tools permission. */
  tools: ToolsAPI;
  /** Real-time script-to-script pub/sub. No permission required. */
  broadcast: BroadcastAPI;
  /** Cross-extension shared RPC pool. Publish state, register on-demand handlers, or read another extension's endpoints. Free tier — no permission required. */
  rpc: RpcAPI;
  /** Register commands in the Lumiverse command palette (Cmd/Ctrl+K). No permission required. */
  commands: CommandsAPI;
  /** Persistent event tracking (track, query, replay). Requires event_tracking permission. */
  events: EventsAPI;
  /** Register custom Lumiverse macros for use in prompt templates. No permission required. */
  macros: MacrosAPI;
  /** Token counting for prompt-budget planning. No permission required. */
  tokens: TokensAPI;
  /** JSON-file-backed micro-DB. Owner-scoped collections, no permission required. */
  db: DbAPI;
  /** Per-script in-memory key/value store for session state. Lives on the backend, survives worker eviction/respawn, cleared on script disable. 1 MB cap per script. v1.0.0-rc.6+. */
  scriptStorage: ScriptStorageAPI;
}

interface ScriptNamespace {
  /** This script's stable UUID. Use as owner key for external state. */
  id: string;
  /** This script's current human-readable name (tracks Script Manager). */
  name: string;
  /** This script's type — 'trigger' or 'library'. */
  type: 'trigger' | 'library';
  /**
   * Load a library script by name or ID (lazy, cached per execution).
   * Built-in libraries use the ls: prefix (e.g. 'ls:components').
   * Throws if the library is not found or if a circular dependency is detected.
   * @example
   * const myLib = await script.require('My Helper Library');
   * const result = myLib.processData(input);
   * @example
   * const { messageFooter } = await script.require('ls:components');
   */
  require(nameOrId: string): Promise<unknown>;
  /** Type-safe overload for the built-in components library. */
  require(nameOrId: 'ls:components'): Promise<LSComponentsExports>;
  /** Type-safe overload for the built-in council-prompt library. */
  require(nameOrId: 'ls:council-prompt'): Promise<LSCouncilPromptExports>;
  /** Type-safe overload for the built-in icons library. */
  require(nameOrId: 'ls:icons'): Promise<LSIconsExports>;
}

// ─── Built-in library: ls:icons ─────────────────────────────────────────────

// @BEGIN-ICON-NAMES — generated by scripts/generate-icons.ts; do not edit by hand
type IconName
  = 'activity'
  | 'alertCircle'
  | 'alertTriangle'
  | 'archive'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowUpRight'
  | 'atSign'
  | 'ban'
  | 'bell'
  | 'bellOff'
  | 'book'
  | 'bookMarked'
  | 'bookOpen'
  | 'bookmark'
  | 'boxes'
  | 'braces'
  | 'bug'
  | 'calendar'
  | 'calendarDays'
  | 'camera'
  | 'check'
  | 'checkCheck'
  | 'checkSquare'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'chevronsLeftRight'
  | 'chevronsUpDown'
  | 'circle'
  | 'circleCheck'
  | 'circleHelp'
  | 'circleUserRound'
  | 'clipboard'
  | 'clipboardCopy'
  | 'clipboardList'
  | 'clock'
  | 'code2'
  | 'command'
  | 'compass'
  | 'copy'
  | 'cornerUpLeft'
  | 'cpu'
  | 'crown'
  | 'database'
  | 'dot'
  | 'download'
  | 'downloadCloud'
  | 'ellipsis'
  | 'externalLink'
  | 'eye'
  | 'eyeOff'
  | 'file'
  | 'fileCode2'
  | 'filePlus'
  | 'fileText'
  | 'film'
  | 'filter'
  | 'flag'
  | 'flame'
  | 'folder'
  | 'folderOpen'
  | 'gift'
  | 'gitBranch'
  | 'globe'
  | 'grid2x2'
  | 'hardDrive'
  | 'hash'
  | 'heart'
  | 'home'
  | 'image'
  | 'inbox'
  | 'info'
  | 'key'
  | 'layers'
  | 'link'
  | 'list'
  | 'loaderCircle'
  | 'lock'
  | 'mapPin'
  | 'menu'
  | 'messageCircle'
  | 'messageSquare'
  | 'mic'
  | 'micOff'
  | 'minus'
  | 'minusCircle'
  | 'moreHorizontal'
  | 'moreVertical'
  | 'mousePointer'
  | 'move'
  | 'music'
  | 'network'
  | 'package'
  | 'paperclip'
  | 'pause'
  | 'pencil'
  | 'pin'
  | 'play'
  | 'plus'
  | 'plusCircle'
  | 'printer'
  | 'puzzle'
  | 'refreshCcw'
  | 'refreshCw'
  | 'rotateCw'
  | 'save'
  | 'search'
  | 'send'
  | 'server'
  | 'settings'
  | 'settings2'
  | 'share2'
  | 'shield'
  | 'shieldAlert'
  | 'shieldCheck'
  | 'shieldX'
  | 'sliders'
  | 'smile'
  | 'sparkles'
  | 'square'
  | 'star'
  | 'table'
  | 'tag'
  | 'terminal'
  | 'thumbsDown'
  | 'thumbsUp'
  | 'timer'
  | 'toggleLeft'
  | 'toggleRight'
  | 'trash'
  | 'trash2'
  | 'unlock'
  | 'upload'
  | 'uploadCloud'
  | 'user'
  | 'userMinus'
  | 'userPlus'
  | 'users'
  | 'video'
  | 'volume2'
  | 'volumeX'
  | 'wrench'
  | 'x'
  | 'xCircle'
  | 'xSquare'
  | 'zap';
// @END-ICON-NAMES

/**
 * Exports of the \`ls:icons\` built-in library — a curated subset of Lucide
 * icons pre-serialized as inline SVG strings, ready to drop into DOM-injected
 * UIs and host-UI \`iconSvg\` options (input-bar actions, drawer tabs, float
 * widgets, advanced modals).
 *
 * All SVGs render at 24x24 by default with \`stroke: currentColor\` and
 * \`fill: none\`, so they inherit text color from their parent element.
 * Override dimensions via \`sized(name, pixels)\` or via CSS — \`viewBox\` is
 * preserved so the icon scales cleanly.
 *
 * For the full ~1944-icon lucide catalog, see https://lucide.dev. This
 * library ships a ~150-icon subset chosen to cover the 80/20 of typical UI
 * needs; a dynamic-lookup escape hatch for the long tail may arrive in a
 * future release.
 *
 * @example
 * const { svg, sized } = await script.require('ls:icons');
 * api.ui.registerInputBarAction({
 *   id: 'save', label: 'Save draft',
 *   iconSvg: svg.save,
 * });
 * // Or in a DOM injection:
 * api.ui.dom.inject('#chat-header', \`<h2>\${svg.sparkles} Ready</h2>\`);
 * // Custom size:
 * const tinyHeart = sized('heart', 14);
 */
interface LSIconsExports {
  /**
   * Map of icon name to inline SVG string. Direct property access is
   * sync and typed — hover on any key for lucide's official icon name.
   */
  svg: Record<IconName, string>;
  /**
   * Return \`svg[name]\` with \`width\`/\`height\` attributes overridden to
   * \`pixels\`. The \`viewBox\` is preserved so the icon scales cleanly.
   * @example
   * const chip = sized('check', 12);  // 12x12 check icon
   */
  sized(name: IconName, pixels: number): string;
  /**
   * Size the icon to match the host's built-in input-bar action rendering
   * (14x14). Equivalent to \`sized(name, 14)\`. Passing the default 24x24
   * \`svg[name]\` to \`api.ui.registerInputBarAction\`'s \`iconSvg\` option
   * causes the SVG's explicit width/height attrs to override the host's
   * 14x14 container, leaving the icon visually misaligned with the label.
   * Use this helper to avoid that.
   * @example
   * api.ui.registerInputBarAction({
   *   id: 'save', label: 'Save draft',
   *   iconSvg: forInputBar('save'),
   * });
   */
  forInputBar(name: IconName): string;
  /**
   * All icon names available in this library. Useful for building a
   * picker UI inside a script.
   * @example
   * for (const name of names()) console.log(name, svg[name]);
   */
  names(): IconName[];
}

// ─── Built-in library: ls:council-prompt ────────────────────────────────────

/** Options for \`buildCouncilSystemPrompt\` from \`ls:council-prompt\`. */
interface CouncilSystemPromptOptions {
  /**
   * Council member snapshot. Unwrap from \`ctx.councilMember\` — this helper is
   * only meaningful when the tool was invoked via a Council execution cycle.
   */
  councilMember: CouncilMemberContext;
  /** Tool display-name + description + optional per-tool prompt directive. */
  tool: {
    display_name: string;
    description: string;
    /** Tool-specific directive appended after the description. */
    prompt?: string;
  };
  /** Per-tool word budget. Pass 0 or omit to skip the brevity note. */
  maxWordsPerTool?: number;
  /** Whether the tool may direct the user-character's actions. Default false. */
  allowUserControl?: boolean;
  /**
   * Additional text appended after \`tool.prompt\`, before the brevity note.
   * Include your own leading \`\\n\\n\` if you want paragraph separation.
   */
  dynamicSuffix?: string;
}

/** Options for \`buildCouncilMessages\` from \`ls:council-prompt\`. */
interface CouncilMessagesOptions extends CouncilSystemPromptOptions {
  /** Tool invocation args. Used as a fallback source of chat context. */
  args: ToolInvocationArgs;
  /**
   * Structured chat context from \`ToolInvocationContext.contextMessages\`.
   * Preferred when available (preserves role boundaries for better voice
   * continuity).
   */
  contextMessages?: LLMMessage[];
}

/**
 * Exports of the \`ls:council-prompt\` built-in library. Helpers for building
 * Council-voice system prompts and message arrays that mirror Lumiverse's
 * built-in sidecar Council tool prompt construction.
 * @example
 * const { buildCouncilMessages } = await script.require('ls:council-prompt');
 * api.tools.register('analyze_tone', def, async (args, api, ctx) => {
 *   if (!ctx?.councilMember) return await api.llm.generate([{ role: 'user', content: args.context ?? '' }]);
 *   const messages = buildCouncilMessages({
 *     councilMember: ctx.councilMember,
 *     contextMessages: ctx.contextMessages,
 *     args,
 *     tool: { display_name: 'Tone Analyzer', description: 'Analyze emotional tone.' },
 *     maxWordsPerTool: 100,
 *   });
 *   return await api.llm.generate(messages);
 * });
 */
interface LSCouncilPromptExports {
  /** Member identity block — "WHO YOU ARE" + "INSTRUCTION" when personality fields exist. */
  buildCouncilIdentity(councilMember: CouncilMemberContext): string;
  /** Role-note line for the given member, or empty string when role is blank. */
  roleNote(councilMember: CouncilMemberContext): string;
  /** Brevity directive for the given word budget, or empty string when 0. */
  brevityNote(maxWords: number): string;
  /** User-control guidance block. Pass false to get the "do not direct" note. */
  userControlNote(allow: boolean): string;
  /** Full Council-voice system prompt. Composes the blocks above + tool spec. */
  buildCouncilSystemPrompt(options: CouncilSystemPromptOptions): string;
  /**
   * Assemble the full Council-voice message array (system + context + user).
   * Pass directly to \`api.llm.generate()\`.
   */
  buildCouncilMessages(options: CouncilMessagesOptions): LLMMessage[];
  /** Debug pretty-printers. Return framed strings safe to \`console.log\`. */
  debug: {
    formatMember(councilMember: CouncilMemberContext): string;
    formatIdentity(councilMember: CouncilMemberContext): string;
    formatSystemPrompt(options: CouncilSystemPromptOptions): string;
    formatMessages(options: CouncilMessagesOptions): string;
    formatReport(options: CouncilMessagesOptions): string;
  };
}

// ─── Built-in library: ls:components ────────────────────────────────────────

// Options for messageFooter() from ls:components.
interface MessageFooterOptions {
  // Stable ID for idempotent injection.
  id?: string;
  // Additional CSS class on the footer wrapper.
  className?: string;
  // When true, renders a persistent title bar with a click-to-toggle chevron.
  // The body HTML collapses/expands; the title remains visible in both states.
  collapsible?: boolean;
  // HTML shown in the persistent title bar. Accepts the same HTML vocabulary
  // as the body parameter (composable with badgeHtml / keyValueHtml).
  // Only meaningful when collapsible is true; omitted → chevron-only bar.
  title?: string;
  // Initial collapsed state. Only meaningful when collapsible is true.
  // Default: false (expanded).
  defaultCollapsed?: boolean;
}

// Options for messageHeader() from ls:components.
interface MessageHeaderOptions {
  // Stable ID for idempotent injection.
  id?: string;
  // Additional CSS class on the header wrapper.
  className?: string;
  // When true, renders a persistent title bar with a click-to-toggle chevron.
  // The body HTML collapses/expands; the title remains visible in both states.
  collapsible?: boolean;
  // HTML shown in the persistent title bar. Accepts the same HTML vocabulary
  // as the body parameter (composable with badgeHtml / keyValueHtml).
  // Only meaningful when collapsible is true; omitted → chevron-only bar.
  title?: string;
  // Initial collapsed state. Only meaningful when collapsible is true.
  // Default: false (expanded).
  defaultCollapsed?: boolean;
}

// Extended handle returned by messageHeader() / messageFooter() when called
// with collapsible: true. Adds imperative controls and overrides update() so
// it replaces only the body (not the whole wrapper).
interface CollapsibleDOMHandle extends DOMHandle {
  // Current collapsed state (false = body visible).
  isCollapsed(): boolean;
  // Set collapsed state explicitly. Re-renders the inner content.
  setCollapsed(collapsed: boolean): void;
  // Flip the collapsed state.
  toggle(): void;
  // Replace the persistent title. Preserves collapsed state and body.
  setTitle(title: string): void;
  // Replace the body HTML. Preserves collapsed state and title.
  // Overrides DOMHandle.update() — for collapsible handles, update() means
  // "replace body HTML", not "replace the whole wrapper".
  update(bodyHtml: string): void;
}

/** Options for badgeHtml() from ls:components. */
interface BadgeHtmlOptions {
  /** Color variant. Default: 'default'. */
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'accent';
  /** Size preset. Default: 'md'. */
  size?: 'sm' | 'md';
  /** Prepend a colored dot indicator. Default: false. */
  dot?: boolean;
  /** Additional CSS class on the badge span. */
  className?: string;
}

/** Options for statBarHtml() from ls:components. */
interface StatBarHtmlOptions {
  /** Max value for display label (bar maps 0-100%). Default: 100. */
  max?: number;
  /** CSS color or gradient for the fill. Default: var(--lumiverse-accent). */
  color?: string;
  /** Show numeric value text. Default: true. */
  showValue?: boolean;
  /** Bar height in pixels. Default: 6. */
  height?: number;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for keyValueHtml() from ls:components. */
interface KeyValueHtmlOptions {
  /** Dim the value text. Default: false. */
  muted?: boolean;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for progressBar() from ls:components. */
interface ProgressBarOptions {
  /** Initial value (0-100). Default: 0. */
  value?: number;
  /** Text label above the bar. */
  label?: string;
  /** CSS color or gradient for the fill. */
  color?: string;
  /** Show percentage text. Default: true. */
  showPercent?: boolean;
  /** Bar height in pixels. Default: 8. */
  height?: number;
  /** Stable ID for idempotent injection. */
  id?: string;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Extended handle returned by progressBar(). */
interface ProgressBarHandle extends DOMHandle {
  /** Update the bar value (0-100) and optionally the label. */
  setValue(value: number, label?: string): void;
}

/** CSS position for floatingButton(). */
interface FloatingButtonPosition {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

/** Options for floatingButton() from ls:components. */
interface FloatingButtonOptions {
  /** Fixed position on screen. Defaults to bottom-right above chat input. */
  position?: FloatingButtonPosition;
  /** HTML string for an icon (e.g. SVG). Sanitized by DOMPurify. */
  icon?: string;
  /** Visual variant. Default: 'default'. */
  variant?: 'default' | 'accent' | 'ghost';
  /** Size preset. Default: 'md'. */
  size?: 'sm' | 'md';
  /** Enable drag-to-reposition. Drag handled on the frontend for smooth UX. Default: false. */
  draggable?: boolean;
  /** Stable ID for idempotent injection. */
  id?: string;
  /** Additional CSS class on the button. */
  className?: string;
}

/** Exports of the ls:components built-in library. */
interface LSComponentsExports {
  // ── Injection functions (return DOMHandle) ─────────────────────────

  // Styled footer below a message bubble.
  // With collapsible: true → returns CollapsibleDOMHandle
  // (imperative toggle/setCollapsed/setTitle/isCollapsed, body-only update()).
  // @example
  // const f = messageFooter(msg.id, bodyHtml, {
  //   collapsible: true,
  //   title: badgeHtml('AI', { dot: true }) + ' ' + words + ' words',
  //   defaultCollapsed: true,
  // });
  // f.toggle();         // flip collapsed state
  // f.update(newBody);  // replace body, keep title + state
  messageFooter(
    messageId: string,
    html: string,
    options: MessageFooterOptions & { collapsible: true },
  ): CollapsibleDOMHandle;
  messageFooter(messageId: string, html: string, options?: MessageFooterOptions): DOMHandle;

  // Styled header above message content inside the bubble.
  // With collapsible: true → returns CollapsibleDOMHandle
  // (imperative toggle/setCollapsed/setTitle/isCollapsed, body-only update()).
  messageHeader(
    messageId: string,
    html: string,
    options: MessageHeaderOptions & { collapsible: true },
  ): CollapsibleDOMHandle;
  messageHeader(messageId: string, html: string, options?: MessageHeaderOptions): DOMHandle;

  /**
   * Standalone progress bar with live setValue().
   * @example
   * const bar = progressBar('#chat', { label: 'Loading...', id: 'load' });
   * bar.setValue(50, 'Halfway...');
   * bar.setValue(100, 'Done');
   */
  progressBar(target: string, options?: ProgressBarOptions): ProgressBarHandle;

  /**
   * Fixed-position action button. Attach click handlers via handle.on('click', handler).
   * @example
   * const btn = floatingButton('Analyze', { variant: 'accent', id: 'fab' });
   * btn.on('click', () => api.ui.toast('Clicked!'));
   */
  floatingButton(label: string, options?: FloatingButtonOptions): DOMHandle;

  // ── HTML string builders (composable) ──────────────────────────────

  /**
   * Styled badge/pill HTML string. Composable inside messageFooter/messageHeader.
   * @example
   * badgeHtml('Online', { variant: 'success', dot: true })
   */
  badgeHtml(text: string, options?: BadgeHtmlOptions): string;

  /**
   * Labeled stat bar HTML string. Composable inside messageFooter/messageHeader.
   * @example
   * statBarHtml('Health', 75, { color: '#e74c3c', max: 100 })
   */
  statBarHtml(label: string, value: number, options?: StatBarHtmlOptions): string;

  /**
   * Label-value pair HTML string. Composable inside messageFooter/messageHeader.
   * @example
   * keyValueHtml('Location', 'Castle Throne Room')
   */
  keyValueHtml(label: string, value: string, options?: KeyValueHtmlOptions): string;
}

// ─── Globals injected into every script sandbox ───────────────────────────────

/** Full LumiScript API. Use api.chat, api.llm, api.tools, etc. */
declare const api: LumiScriptAPI;

/** Script utilities. Use script.require() to load library scripts and built-in libraries (ls:*). */
declare const script: ScriptNamespace;

/**
 * Zod schema builder. Use z.object(), z.string(), etc. to define schemas
 * for api.llm.generateStructured() and api.llm.generateWithTools() calls.
 * @example
 * const result = await api.llm.generateStructured(messages, z.object({
 *   answer: z.string(),
 *   confidence: z.number().min(0).max(1),
 * }));
 */
declare const z: ZodModule;

/**
 * Event payload injected for trigger scripts.
 * Contains the event-specific data plus \`__event\` (the event name string).
 * @example
 * if (data.__event === 'MESSAGE_SENT') {
 *   console.log('New message:', data.message?.content);
 * }
 */
declare const data: Record<string, unknown>;
`;
