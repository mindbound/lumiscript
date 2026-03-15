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
  createdAt: number;   // Unix ms
  updatedAt: number;   // Unix ms
  metadata?: ScriptMetadata;
}

// ─── LumiScript global settings ──────────────────────────────────────────────

export interface LumiScriptSettings {
  /** Master on/off toggle */
  enabled: boolean;
  /** Show a toast notification when a trigger script completes */
  showExecutionNotifications: boolean;
}

export const DEFAULT_SETTINGS: LumiScriptSettings = {
  enabled: true,
  showExecutionNotifications: true,
};

// ─── Execution ────────────────────────────────────────────────────────────────

export type ConsoleEntryType = 'log' | 'warn' | 'error' | 'info' | 'success';

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
  events: EventsAPI;
  utils: UtilsAPI;
  /** Not yet available — stub only */
  worldInfo: WorldInfoAPIStub;
  /** Not yet available — stub only */
  characters: CharactersAPIStub;
  /** Requires allowDangerous */
  files: FilesAPI;
}

// ─── Chat API ─────────────────────────────────────────────────────────────────

export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
}

export interface GetMessagesOptions {
  first?: number;
  last?: number;
}

export interface SendMessageOptions {
  role?: 'user' | 'assistant' | 'system';
  metadata?: Record<string, unknown>;
}

export interface ChatAPI {
  /** Get all messages in the current chat. Requires chat_mutation permission. */
  getMessages(options?: GetMessagesOptions): Promise<ChatMessage[]>;
  /** Append a new message. Requires chat_mutation permission. */
  sendMessage(content: string, options?: SendMessageOptions): Promise<{ id: string }>;
  /** Edit a message. Requires chat_mutation permission. */
  editMessage(id: string, content: string): Promise<void>;
  /** Delete a message. Requires chat_mutation permission. */
  deleteMessage(id: string): Promise<void>;
  /** Get the current chat ID from the active context. */
  getChatId(): string | null;
}

// ─── LLM API ─────────────────────────────────────────────────────────────────

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMOptions {
  /** Connection profile ID. If omitted, uses the user's active connection. */
  connectionId?: string;
  /** Override model. */
  model?: string;
  /** Override temperature. */
  temperature?: number;
  /** Override max tokens. */
  maxTokens?: number;
}

export interface LLMAPI {
  /** Generate using the user's active connection and preset. Requires generation permission. */
  generate(messages: LLMMessage[], options?: LLMOptions): Promise<string>;
  /** Generate with a JSON schema and return a typed object. Requires generation permission. */
  generateStructured<T = unknown>(
    messages: LLMMessage[],
    schema: Record<string, unknown>,
    options?: LLMOptions
  ): Promise<T>;
}

// ─── Variables API ────────────────────────────────────────────────────────────

export interface VariableStore {
  get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined>;
  set<T = unknown>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<boolean>;
  has(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

/** Synchronous in-memory store (no persistence) */
export interface SyncVariableStore {
  get<T = unknown>(key: string, defaultValue?: T): T | undefined;
  set<T = unknown>(key: string, value: T): void;
  delete(key: string): boolean;
  has(key: string): boolean;
  clear(): void;
}

export interface VariablesAPI {
  /** Per-chat persistence (stored under chatId) */
  local: VariableStore;
  /** Cross-chat persistence (stored in shared file) */
  global: VariableStore;
  /** Per-character persistence (stored under characterId) */
  character: VariableStore;
  /** In-memory only; cleared after the current execution */
  flow: SyncVariableStore;
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
}

// ─── Events API ───────────────────────────────────────────────────────────────

export type EventHandler<T = unknown> = (data: T) => void | Promise<void>;

export interface EventSubscription {
  event: string;
  unsubscribe(): void;
}

export interface EventsAPI {
  on<T = unknown>(event: string, handler: EventHandler<T>): EventSubscription;
  off(subscription: EventSubscription): void;
  once<T = unknown>(event: string, handler: EventHandler<T>): EventSubscription;
  trigger(event: string, data?: unknown): void;
  list(): string[];
  count(event: string): number;
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
}

// ─── Files API ────────────────────────────────────────────────────────────────

/** Requires allowDangerous on the script */
export interface FilesAPI {
  read(path: string): Promise<string>;
  write(path: string, content: string): Promise<void>;
  delete(path: string): Promise<void>;
  exists(path: string): Promise<boolean>;
  list(prefix?: string): Promise<string[]>;
}

// ─── Stub APIs (not yet implemented) ─────────────────────────────────────────

export type WorldInfoAPIStub = {
  [K in string]: (...args: unknown[]) => never;
} & { _stub: true };

export type CharactersAPIStub = {
  [K in string]: (...args: unknown[]) => never;
} & { _stub: true };

// ─── Script namespace (inside script body) ────────────────────────────────────

export type ScriptEventHandler<T = unknown> = (data: T, api: LumiScriptAPI) => void | Promise<void>;

/** The `script.*` namespace available inside script bodies */
export interface ScriptNamespace {
  /**
   * Register a Lumiverse event handler.
   * The binding gate is applied: if the script has bindings, the handler
   * only fires when a binding is satisfied.
   */
  on<T = unknown>(event: string, handler: ScriptEventHandler<T>): void;
  /**
   * Load a library script by name or ID (lazy, cached per execution).
   * Throws if the library is not found or if a circular dependency is detected.
   */
  require(nameOrId: string): Promise<unknown>;
}
