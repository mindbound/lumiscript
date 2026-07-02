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

/**
 * Provenance stamped on a script installed from a character-card bundle
 * (`extensions.lumiscript`). The re-import de-dup key is (`bundleCardId`,
 * `bundleId`). See notes/card-embedded-scripts-design.md.
 */
export interface ScriptBundleProvenance {
  /** Author-assigned stable id of the card bundle — NOT the host character
   *  UUID (the host regenerates that on every import). */
  bundleCardId: string;
  /** Author-assigned id of this script within the bundle. */
  bundleId: string;
  /** The host character UUID this was last installed from (provenance only). */
  hostCharacterId?: string;
  /** Display name of the source bundle / character. */
  bundleName?: string;
  /** `metadata.version` at install time — drives update-if-newer on re-import. */
  version?: string;
  /** Hash of the code at install time — detects local edits before overwrite. */
  sourceHash?: string;
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
  /** Set when this script was installed from a character-card bundle (#12). */
  bundledFrom?: ScriptBundleProvenance;
}

/**
 * True if this trigger script re-runs immediately on an engine switch. A script with an
 * `ls:startup` trigger only runs naturally at extension activation, so dropping its registered
 * live state (handlers, panels, macros…) without a re-run would leave it inert for the rest of
 * the session. Event-driven scripts skip the auto re-run instead: their state is wiped at the
 * switch and repopulates on their next natural trigger fire — avoiding auto-running potentially
 * expensive bodies (LLM calls, long loops). Shared by the backend's engine-switch fan-out and the
 * settings confirm modal so the modal's counts always match what the switch actually does.
 */
export function scriptRunsOnStartup(script: Pick<Script, 'triggers'>): boolean {
  return (script.triggers ?? []).includes('ls:startup');
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
   * Which sandbox engine runs script bodies + handler fires.
   *   - 'asyncfn'  (default): the shipped `new AsyncFunction` engine.
   *   - 'quickjs'  (experimental): the QuickJS-WASM isolate — stronger sandbox
   *      isolation. Behaviorally faithful to asyncfn (dual-engine parity harness)
   *      bar one documented divergence (self-`api.tools.invoke` — see
   *      docs/api-stability.md). Switching engines fire-reloads active scripts so
   *      their handlers re-register under the new engine (see `update_settings`).
   * Read live per-dispatch (`engineModeReader` in host-dispatcher); persisted GLOBAL
   * (not per-script). Default: 'asyncfn'.
   */
  engineMode: 'asyncfn' | 'quickjs';
  /**
   * Max chunks the QuickJS engine will buffer for a single `api.llm.generateStream`
   * that isn't being consumed fast enough (or at all). A stream opened under the
   * QuickJS engine can outlive the run that created it, so its chunk queue is bounded:
   * once this many chunks are queued undrained, the stream is cancelled with an error
   * so it can't grow without limit. Only affects the QuickJS engine.
   * Default: 512.  Range: 16 – 100 000.
   */
  streamQueueCap: number;
  /**
   * Number of concurrent script-runner worker subprocesses to spawn.
   * Larger values distribute scripts across more processes for better fault
   * isolation (one bad script no longer affects others) at the cost of
   * more memory (~50-100 MB per worker at idle).
   * Default: 4.  Range: 1 – 16 (host enforces a 16-process cap per
   * extension via Spindle's `MAX_BACKEND_PROCESSES`).
   *
   * v1.0: full multi-worker dispatch via assignment + lazy spawn;
   * eviction, rebalancing, and cross-worker routing all implemented.
   * Default 4 ships on by default after Sections 1–8 of the manual
   * test pass came back clean and the disable-mid-flight cluster
   * closed.
   */
  workerCount: number;
  /**
   * How long a worker may remain idle (no script firing, no handler
   * invocation) before it's torn down to reclaim memory. On next event
   * for any script assigned to that worker, the worker respawns (~150-300
   * ms cold-start hitch).
   * Default: 1 800 000 (30 minutes).  Range: 60 000 (1 min) – 86 400 000
   * (24 hours).  Set to a very large value to effectively disable
   * idle eviction.
   *
   * Phase E (v1.0 runtime-isolation): consumed by the eviction sweep.
   */
  workerIdleTimeoutMs: number;
  /**
   * Total memory ceiling (in MB) for all script-runner workers combined.
   * When the sum of all workers' resident-set sizes exceeds this, the
   * eviction sweep LRU-evicts an eligible worker (no active runs, above
   * the minimum-warm-worker count) until the total falls under the
   * ceiling.
   * Default: 512 (MB).  Range: 64 – 8 192.
   *
   * Phase E (v1.0 runtime-isolation): consumed by the eviction sweep.
   */
  workerMemoryCeilingMb: number;
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
   * Show the Monaco editor's IntelliSense — autocomplete suggestions, `api.*`
   * signature help, and hover docs. When off, those popups are suppressed
   * (syntax-error squiggles are unaffected).
   * Default: true.
   */
  editorIntellisense: boolean;
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
  // ─── Assistant (Lisa) ────────────────────────────────────────────────────────
  /**
   * Connection (LLM profile) the assistant's connection picker defaults to,
   * keyed by connection id. Empty string / undefined = "follow Lumiverse's own
   * default connection" (the original behaviour). Lets you point Lisa at a
   * model that shines as a coding brain even if it isn't your main-chat pick
   * (e.g. GLM-5.1). Per-session choice is unaffected — the in-modal picker
   * still switches freely; this only seeds its initial value. A stored id that
   * no longer exists silently falls back to the Lumiverse default at pick time.
   */
  assistantConnectionId?: string;
  /**
   * Maximum tool-call iterations the in-app assistant's agentic loop is
   * allowed before failing with a "did not converge" error. Each
   * `lookup_api` call counts as one iteration. Lower values fail fast for
   * models that thrash on negative-evidence loops (observed with Opus 4.6
   * — see `notes/model-observation-opus-4.6.md`); higher values give
   * headroom on genuinely hard agentic questions. Default: 8.
   * Range: 2 – 20.
   */
  assistantMaxIterations: number;
  /**
   * Token budget for Lisa's model-facing context window. Her per-turn prompt
   * (system turn + windowed history) is trimmed to fit this, and the chat's
   * fullness gauge reads against it. The host doesn't expose a model's real
   * context length, so this is a manual setting; the default (200K) sits under
   * the common ~256K floor of modern models and well under 1M-context ones.
   * Lower it for small/local models; raise it for big windows. UI range:
   * 8K – 1,000K.
   */
  assistantContextTokens: number;
  /**
   * Generation defaults passed through `RunTurnOptions.parameters` to the
   * underlying `spindle.generate.rawStream` call. The three numeric fields
   * are OPTIONAL — blank / undefined means "no override; use the
   * connection's preset value." `parallelToolCalls` is a non-optional
   * boolean (the checkbox UI can't carry an undefined state); defaults to
   * `true` (most providers' default). Only forces serialised tool use
   * when set to `false` — useful for Mistral and other providers that
   * choke on parallel tool calls.
   */
  assistantTemperature?: number;
  assistantTopP?: number;
  assistantMaxTokens?: number;
  assistantParallelToolCalls: boolean;
  /**
   * Whether Lisa auto-compacts a conversation once its context fills past the
   * threshold — folding older turns into a summary so the chat can continue
   * without overflowing. Fires an LLM summary call in the background after a
   * turn, so it's opt-out for the cost/latency-averse (manual "Compact now"
   * still works regardless). Default: true.
   */
  assistantAutoCompact: boolean;
  /**
   * Whether Lisa marks the stable part of her system prompt (persona + the
   * ~44K-token API cheat-sheet) with a prompt-cache breakpoint, so caching
   * providers (Anthropic et al.) read it from cache instead of re-billing it on
   * every turn. Harmless no-op on providers that don't cache. Default: true;
   * turn off only if a provider misbehaves with cache markers.
   */
  assistantPromptCaching: boolean;
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
  // #11 — the AsyncFunction engine is the default; the QuickJS isolate is opt-in.
  // Flipping this default to 'quickjs' is the P8 "make it default" one-liner.
  engineMode: 'asyncfn',
  streamQueueCap: 512,
  // v1.0 — multi-worker default. Phases A–F shipped; Sections 1–8 of
  // the manual test pass came back green; the disable-mid-flight bug
  // cluster closed; tracker pair migrated to the broadcast pattern as
  // the canonical cross-worker cookbook. Bumping the default from 1
  // to 4 makes multi-worker fanout the out-of-the-box behaviour.
  workerCount: 4,
  workerIdleTimeoutMs: 30 * 60 * 1000,
  workerMemoryCeilingMb: 512,
  consoleHistoryLimit: 500,
  editorFontSize: 12,
  editorIntellisense: true,
  autosaveDebounceMs: 1_200,
  defaultTriggerTemplate: DEFAULT_TRIGGER_TEMPLATE,
  defaultLibraryTemplate: DEFAULT_LIBRARY_TEMPLATE,
  assistantMaxIterations: 8,
  assistantContextTokens: 200_000,
  // Generation defaults — temperature / topP / maxTokens are intentionally
  // omitted (undefined). The "no override; use connection preset" semantic
  // is meaningful state — only set them if the user explicitly tweaks.
  assistantParallelToolCalls: true,
  assistantAutoCompact: true,
  assistantPromptCaching: true,
};

// ─── Execution ────────────────────────────────────────────────────────────────

export type ConsoleEntryType = 'log' | 'warn' | 'error' | 'info' | 'success' | 'separator' | 'security';

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
  /** Read-only access to the user's LLM connection profiles (never includes API keys). Free tier. */
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
  /** Memory Cortex + Long-Term Chat Memory — entity/relation graph, arcs, vaults, links, retrieval, and the {{memories}} chunk store. Requires memories permission. */
  memories: MemoriesAPI;
  /** Persona (identity profile) CRUD + active persona switching. Requires personas permission. */
  personas: PersonasAPI;
  /** Generation preset CRUD + nested prompt-block CRUD + host-derived category grouping. Mirrors Spindle's `spindle.presets.*` surface. Requires presets permission. */
  presets: PresetsAPI;
  /** Regex find/replace script CRUD plus context-aware `getActive` resolver. Mirrors the resolution Lumiverse uses internally during prompt assembly + response baking + display rendering. Requires regex_scripts permission. */
  regexScripts: RegexScriptsAPI;
  /** Image-store CRUD: upload raw bytes / data URLs, get, delete. Requires images permission. */
  images: ImagesAPI;
  /** Image generation: fire generations against the user's configured connection profiles, list providers + connections + models. Returns an `imageId` that integrates with `api.images.*` / `api.theme.extractColors` / `api.characters.setAvatar`. Requires image_gen permission. */
  imageGen: ImageGenAPI;
  /** OAuth callback handling: register a callback handler for this extension's OAuth redirect URL, get the URL path itself, mint CSRF state nonces. Pair with api.utils.http for token-endpoint POSTs and api.enclave for encrypted token persistence. Requires oauth permission. */
  oauth: OAuthAPI;
  /** Theme manipulation: apply CSS variable overrides, palette-driven theming, read current theme, extract palettes from stored images. Requires app_manipulation permission. */
  theme: ThemeAPI;
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
  /** Per-script in-memory key/value store. Lives on the parent (backend), so values survive worker eviction / respawn — but are cleared on script disable / delete and lost on full backend restart. No permission required. v1.0.0-rc.6+. */
  scriptStorage: ScriptStorageAPI;
}

/**
 * Per-script in-memory key/value store. Closes the "where does my script keep its session state?"
 * UX gap that previously had users picking between `globalThis.__lumiscript_script_<id>_*`
 * (verbose convention, easy to forget the prefix), `api.variables.local` (disk-persisted —
 * overkill for ephemeral flags), or `api.db.*` (heavy machinery for a single boolean).
 *
 * **Lifecycle**:
 *   - **In-memory only.** Values live in a parent-side `Map<scriptId, Map<key, value>>`. No disk
 *     persistence. The full state is lost on backend restart / Lumiverse restart.
 *   - **Survives** worker eviction + respawn (parent-side state, not in worker memory).
 *   - **Survives** script edit / hot-reload (same as the `globalThis` convention — useful for
 *     dev iteration).
 *   - **Cleared** on script disable / delete (matches the `globalThis` sweep).
 *
 * **Scope**: per-script — `scriptA`'s `set('foo', ...)` doesn't reach `scriptB`'s slot. No
 * cross-script visibility through the API itself. (`ls:scriptStorage:*` broadcasts are
 * observable cross-script for debug / admin tooling — see below.)
 *
 * **Size cap**: 1 MB per script on the JSON-serialised size of the full map. `set()` throws
 * a clear "scriptStorage capacity exceeded" error when a write would cross the cap. Anyone
 * needing more should use `api.variables.*` (persisted) or `api.db.*` (structured collections).
 *
 * **Broadcasts**: every mutation fires an `ls:*`-prefixed event on the broadcast bus so
 * debug / admin tooling can react without polling. `ls:scriptStorage:set` (payload
 * `{ scriptId, key, value }`), `ls:scriptStorage:delete` (`{ scriptId, key }`),
 * `ls:scriptStorage:clear` (`{ scriptId }`). No-op `delete` / `clear` calls don't fire.
 *
 * **Values must be JSON-serialisable.** Functions / symbols / DOM elements throw at the
 * IPC boundary. Same posture as `api.broadcast.emit` / `api.variables.*`.
 *
 * **Races**: concurrent `set` to the same key from different runs / handler-fires is
 * last-write-wins (the parent's Map is single-threaded). `get` is atomic — reads the
 * current value, never observes a partial write.
 */
export interface ScriptStorageAPI {
  /**
   * Read a value. Returns `defaultValue` (or `undefined` if not provided) when the key
   * is missing. The generic `T` is a type hint for IDE completion — the runtime can't
   * enforce it.
   */
  get<T = unknown>(key: string, defaultValue?: T): Promise<T | undefined>;
  /**
   * Write a value. Throws if the JSON-serialised total size of this script's storage
   * would exceed the 1 MB per-script cap. Fires `ls:scriptStorage:set`. Overwrites
   * any prior value at the key.
   */
  set(key: string, value: unknown): Promise<void>;
  /**
   * Remove a key. Returns `true` if it existed (and fires `ls:scriptStorage:delete`),
   * `false` if it didn't (no broadcast).
   */
  delete(key: string): Promise<boolean>;
  /** Check whether a key exists. Does not return the value. */
  has(key: string): Promise<boolean>;
  /** Remove every entry for this script. Fires `ls:scriptStorage:clear` if at least one entry existed. */
  clear(): Promise<void>;
  /** List the current keys. Order is insertion-order (Map semantics). */
  keys(): Promise<string[]>;
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
   * with `swipes`.
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
 * upstream `spindle.chat.updateMessage` signature with camelCase field
 * names matching the rest of the `ChatMessage` surface (`swipeId` →
 * `swipe_id`, `swipeDates` → `swipe_dates` are mapped at the chat API
 * boundary).
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
  /**
   * When `true`, asks the host to trigger a normal LLM continuation after
   * the message is appended (same as the user pressing Enter on an empty
   * input bar). Forwarded to `spindle.chat.appendMessage(..., {
   * triggerGeneration: true })` — fires the host's full chat-orchestration
   * pipeline (preset + persona + world info + regex + character card +
   * streaming).
   *
   * Use for "click-to-respond" interactions where the script wants the
   * LLM to immediately reply to its own appended message — clickable-
   * inputs / form-submit UIs / tool-result follow-ups. Without this, the
   * appended message just sits in history until the user manually
   * triggers a continuation.
   *
   * Generation defaults (connection / persona / preset / parameters)
   * follow the active chat's resolved settings. Use `generation` to
   * override per-call.
   */
  triggerGeneration?: boolean;
  /**
   * Per-call overrides for the triggered generation. Only consulted when
   * `triggerGeneration: true`; silently ignored otherwise. Each field is
   * optional and falls through to the active chat's defaults when omitted.
   *
   * See `ChatGenerationOptions` for field-level docs.
   */
  generation?: ChatGenerationOptions;
}

/**
 * Per-call generation overrides for `api.chat.sendMessage(..., {
 * triggerGeneration: true, generation: ... })`. Mirrors the host's
 * `ChatAppendGenerationOptionsDTO` 1:1 in camelCase.
 *
 * Each field is optional. Omitted fields fall through to the active
 * chat's resolved defaults — same as if the user manually triggered a
 * continuation through the input bar. Use this to deviate from those
 * defaults for a single triggered generation (e.g. a tool script that
 * needs a specific connection / preset / parameters bundle different
 * from the user's normal chat configuration).
 */
export interface ChatGenerationOptions {
  /**
   * Override which connection profile to use. Falls back to the user's
   * default connection when omitted.
   */
  connectionId?: string;
  /**
   * Override which persona to use. Falls back to the user's active
   * persona setting when omitted.
   */
  personaId?: string;
  /**
   * Per-addon enable/disable map for the chosen persona. Keys are addon
   * ids; values are booleans. Omitted addons inherit the chat-level
   * persona-addon state, or the persona's own defaults when none.
   */
  personaAddonStates?: Record<string, boolean>;
  /**
   * Override which preset to use. Falls back to the user's active
   * preset setting (`activeLoomPresetId`) when omitted, then to the
   * connection's attached preset.
   */
  presetId?: string;
  /**
   * When `true`, forces the supplied `presetId` over a connection-bound
   * preset. Currently only consulted by the host's impersonation
   * oneliner pipeline — `triggerGeneration` runs as `generation_type:
   * 'normal'`, where this field is a silent no-op. Exposed for
   * fidelity with the host DTO + future-proofing.
   */
  forcePresetId?: boolean;
  /**
   * Per-call parameter overrides (temperature, max_tokens, top_p, etc.)
   * layered on top of the resolved preset's parameters. Provider-
   * specific keys are accepted; the host forwards verbatim.
   */
  parameters?: Record<string, unknown>;
  /**
   * For group chats only: which character should respond to this
   * generation. Falls back to the chat's `character_id` when omitted.
   */
  targetCharacterId?: string;
  /**
   * When `true`, retains council-tool results from the previous
   * generation rather than re-running them — useful for cheap
   * regenerate-style flows where the council context hasn't changed.
   * Default `false`.
   */
  retainCouncil?: boolean;
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
 * `'render'` is a non-persisting per-render variant — fires
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
   * rendering (render). Handlers can transform `content` and
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

  /**
   * Subscribe to a message tag — react when the model (or user) emits an inline
   * tag like `<dice>20</dice>` in a chat message. Returns an unsubscribe
   * function; call it to stop receiving the tag. Subscriptions are also cleaned
   * up automatically when the owning script is disabled, deleted, or finishes a
   * one-shot run. Requires `chat_mutation` permission.
   *
   * **Delivery (v1):** the handler fires **once per completed message** that
   * contains a match. Streaming partials are NOT delivered, and an edit re-fires
   * with the new content. Delivery is render-coupled and best-effort: a message
   * that completes while scrolled far off-screen may not deliver until it is
   * viewed again — so **handlers should be idempotent**. The handler's return
   * value is ignored (an async handler is awaited only for status tracking).
   *
   * `options.attrs` narrows to tags whose attributes include the given pairs
   * (subset match — `{ type: 'd20' }` matches `<roll type="d20">`).
   * `options.removeFromMessage` (default `true`) strips the matched tag from the
   * RENDERED message; the stored message is unchanged.
   *
   * @example
   * const off = api.chat.onMessageTag('dice', (ev) => {
   *   console.log('rolled', ev.content, 'in message', ev.messageId);
   * }, { removeFromMessage: true });
   * // later: off();
   */
  onMessageTag(
    tagName: string,
    handler: (event: MessageTagEvent) => void | Promise<void>,
    options?: MessageTagOptions,
  ): () => void;
}

/**
 * Payload delivered to an `api.chat.onMessageTag` handler when a matching tag is
 * found in a completed chat message. Mirrors the host's tag-intercept shape.
 */
export interface MessageTagEvent {
  /** The matched tag name (no brackets), e.g. `'dice'` for `<dice>…</dice>`. */
  tagName: string;
  /** Parsed tag attributes, e.g. `<roll type="d20">` → `{ type: 'd20' }`. */
  attrs: Record<string, string>;
  /** The inner text between the open/close tags. */
  content: string;
  /** The full matched substring, including the tags. */
  fullMatch: string;
  /** Id of the message the tag was found in (when available). */
  messageId?: string;
  /** Id of the chat the message belongs to (when available). */
  chatId?: string;
  /** True if the matched message is a user message (vs assistant). */
  isUser?: boolean;
  /**
   * True if the match came from a still-streaming render. v1 only delivers
   * completed (`isStreaming: false`) matches, so this is always `false` for now —
   * reserved for the streaming opt-in (see notes/message-tag-delivery-roadmap.md).
   */
  isStreaming?: boolean;
}

/** Options for `api.chat.onMessageTag`. */
export interface MessageTagOptions {
  /**
   * Only fire for tags whose attributes include these key/value pairs (subset
   * match). Omit to match the tag regardless of attributes.
   */
  attrs?: Record<string, string>;
  /**
   * Strip the matched tag from the RENDERED message (the stored message is
   * untouched). Defaults to `true`; set `false` to leave the tag visible.
   */
  removeFromMessage?: boolean;
}

// ─── LLM API ─────────────────────────────────────────────────────────────────

/**
 * A single message content part.
 *
 * `LLMMessage.content` can be either a plain string (the simple case — most
 * scripts won't need parts) OR an array of these parts. Parts let scripts
 * pass native `tool_use` / `tool_result` payloads back into the LLM during
 * an agentic loop (preferable to text-encoded `[Tool: X]` / `[Result]: ...`
 * pseudo-turns — providers understand parts as first-class signals).
 *
 * Mirrors `LlmMessagePartDTO` from `lumiverse-spindle-types`. Image and
 * audio parts are accepted by the host but most providers will only consume
 * them when the connection's model supports the modality.
 */
export type LlmMessagePart =
  | { type: 'text';        text: string;                                          cache_control?: Record<string, unknown> }
  | { type: 'image';       data: string; mime_type: string;                       cache_control?: Record<string, unknown> }
  | { type: 'audio';       data: string; mime_type: string;                       cache_control?: Record<string, unknown> }
  | { type: 'tool_use';    id: string;   name: string; input: Record<string, unknown>; cache_control?: Record<string, unknown> }
  | { type: 'tool_result'; tool_use_id: string; content: string; is_error?: boolean;   cache_control?: Record<string, unknown> };

export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  /**
   * Either a plain string OR an array of `LlmMessagePart`. Parts let scripts
   * thread native `tool_use` / `tool_result` payloads through an agentic loop
   * — preferable to text-encoded pseudo-turns. See `LlmMessagePart`.
   */
  content: string | LlmMessagePart[];
  /**
   * Thinking-mode reasoning content from the previous assistant turn, echoed
   * back on the next request. **Required** by DeepSeek's thinking-mode models
   * (`deepseek-reasoner`, `deepseek-chat` with thinking enabled) **on
   * tool-call continuations** — without it the upstream API rejects the
   * request with `400 invalid_request_error: "The 'reasoning_content' in the
   * thinking mode must be passed back to the API."` Plain-text continuations
   * (no tool calls in the message) don't need this; nor do non-thinking
   * models. Other providers routing DeepSeek (NanoGPT, OpenRouter, etc.)
   * inherit the same requirement; providers without reasoning_content
   * ignore the field harmlessly.
   *
   * Pattern: after each `generateWithTools` call that returns `tool_calls`,
   * copy the result's `reasoning_content` onto the assistant turn you append
   * to your message history before the next iteration. Lisa's own agent
   * loop does this automatically; for user-script tool loops it's your
   * responsibility.
   */
  reasoning_content?: string;
}

/**
 * Flatten an `LLMMessage`'s content to a plain string. Used by code paths
 * that need a `string` (e.g. concatenating system-prompt schema instructions,
 * rendering messages in diagnostic previews). `text` parts contribute their
 * text; `tool_use` / `tool_result` parts render as bracketed placeholders;
 * `image` / `audio` parts render as a `[<type>]` marker.
 *
 * NB: this is a lossy projection — only call it when string content is what
 * you actually need. Forwarding to the LLM should pass parts through as-is.
 */
export function messageContentToString(content: LLMMessage['content']): string {
  if (typeof content === 'string') return content;
  return content.map(p => {
    switch (p.type) {
      case 'text':        return p.text;
      case 'tool_use':    return `[tool_use ${p.name}(${JSON.stringify(p.input)})]`;
      case 'tool_result': return `[tool_result ${p.tool_use_id}: ${p.content}]`;
      case 'image':       return '[image]';
      case 'audio':       return '[audio]';
      default:            return '';
    }
  }).join('');
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

// ─── Reasoning (per-request override + connection bindings) ────────────────────
// Host-DTO-backed — the host owns reasoning semantics and translates the
// high-level intent into per-provider knobs (`thinking`, `reasoning_effort`, …),
// so these are import-aliased to track `lumiverse-spindle-types` rather than
// re-drift. `editor-lib.ts` carries the concrete inlined shapes for Monaco.
/** Per-request reasoning override for `api.llm.*`. `source: 'inherit'` (default —
 *  use the connection binding / user's global setting), `'off'` (force no reasoning),
 *  or `'custom'` (set `effort` / `apiReasoning` / `thinkingDisplay` for this call). */
export type GenerationReasoningOverride = import('lumiverse-spindle-types').GenerationReasoningOverrideDTO;
/** Reasoning effort tier: 'auto' | 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'max' | 'xhigh'. */
export type ReasoningEffort = import('lumiverse-spindle-types').ReasoningEffortDTO;
/** Anthropic-only thinking-block display mode: 'auto' | 'summarized' | 'omitted'. */
export type ThinkingDisplay = import('lumiverse-spindle-types').ThinkingDisplayDTO;
/** Full reasoning-settings snapshot (on `Connection.reasoning_bindings.settings`). */
export type ReasoningSettings = import('lumiverse-spindle-types').ReasoningSettingsDTO;
/** Reasoning settings bound to a connection profile (overrides the global setting). */
export type ConnectionReasoningBindings = import('lumiverse-spindle-types').ConnectionReasoningBindingsDTO;

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
  /**
   * Per-request reasoning override — dial reasoning for this call without
   * touching the connection's saved binding:
   *  - omitted / `{ source: 'inherit' }` — use the connection's reasoning
   *    binding if any, else the user's global reasoning setting (default).
   *  - `{ source: 'off' }` — force no reasoning for this call (cheap / fast).
   *  - `{ source: 'custom', effort: 'high', apiReasoning: true }` — explicit
   *    settings for this call only; omitted fields fall back to defaults.
   * The host maps this to provider-specific knobs, so scripts don't reason
   * about per-provider quirks. Raw values in `parameters` still win field-wise.
   */
  reasoning?: GenerationReasoningOverride;
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

/** Long-term memory retrieval statistics from a dry run. Import-aliased to the
 *  host DTO so it auto-tracks `lumiverse-spindle-types` rather than re-drifting
 *  (see docs/api-stability.md). `retrievedChunks[].score` is `number | null`.
 *  `editor-lib.ts` carries the concrete inlined shape for Monaco. */
export type DryRunMemoryStats = import('lumiverse-spindle-types').MemoryStatsDTO;

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
  /**
   * Thinking-mode reasoning content from this turn. Present on tool-call
   * iterations against DeepSeek-thinking models — copy onto the assistant
   * turn you append to history before the next call. See
   * `LLMMessage.reasoning_content` for the full rationale.
   */
  reasoning_content?: string;
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
  /**
   * Thinking-mode reasoning content from this turn. Present on tool-call
   * iterations against DeepSeek-thinking models — copy onto the assistant
   * turn you append to history before the next call. See
   * `LLMMessage.reasoning_content` for the full rationale.
   */
  reasoning_content?: string;
}

/**
 * One chunk yielded by `api.llm.generateStream`. Three variants:
 *  - `'token'`     — incremental visible content chunk
 *  - `'reasoning'` — incremental chain-of-thought chunk (thinking-mode models only)
 *  - `'done'`      — terminal chunk emitted exactly once on successful completion
 *
 * The `'done'` chunk carries the full aggregated content, `finish_reason`,
 * optional `tool_calls`, and optional `usage` token counts. Stream-only
 * surface — non-streaming methods don't currently expose `usage`.
 *
 * Cancellation: breaking out of the consumer's `for await` loop calls
 * `.return()` on the iterator, which propagates to the upstream stream and
 * tears down the HTTP request. You can also pass an `AbortSignal` via
 * `options.signal` for external cancellation.
 *
 * Field-naming: snake_case throughout, mirroring `LLMRawResult` and the
 * upstream `StreamChunkDTO`. No DTO translation at the boundary.
 */
export type StreamChunk =
  | { type: 'token';     token: string }
  | { type: 'reasoning'; token: string }
  | {
      type:           'done';
      /** Full aggregated content (concatenation of all `token` chunks). */
      content:        string;
      /** Aggregated reasoning content (concatenation of all `reasoning` chunks). Absent when the model didn't produce reasoning. */
      reasoning?:     string;
      /** Why the generation stopped: `'stop'`, `'length'`, `'tool_calls'`, `'content_filter'`, provider-specific. */
      finish_reason:  string;
      /** Function calls requested by the LLM. Present when `finish_reason === 'tool_calls'` (or provider-equivalent). */
      tool_calls?:    ToolCall[];
      /**
       * Token-count statistics. Present when the provider reports them
       * (most do; some self-hosted providers don't, and some report all
       * zeros which is functionally equivalent to "didn't report").
       *
       * Stream-only — the non-stream `generate` / `generateStructured` /
       * `generateWithTools` methods don't currently surface `usage`.
       * Breaking out of the stream before the `'done'` chunk arrives
       * means you won't see usage at all.
       */
      usage?: {
        prompt_tokens:     number;
        completion_tokens: number;
        total_tokens:      number;
      };
    };

export interface LLMAPI {
  /** Generate using the user's active connection and preset. Requires generation permission. */
  generate(messages: LLMMessage[], options?: LLMOptions): Promise<string>;
  /**
   * Streaming variant of `generate`. Returns an async iterator yielding
   * `StreamChunk` values: incremental `'token'` and `'reasoning'` chunks
   * followed by exactly one terminal `'done'` chunk with the full aggregated
   * content + `finish_reason` + optional `tool_calls` + optional `usage`.
   *
   * Same connection-resolution, provider/model-override, and `options.signal`
   * cancellation semantics as `generate`.
   *
   * Cancellation:
   *  - Breaking out of the `for await` loop calls `.return()` on the iterator,
   *    which propagates to the upstream stream and tears down the HTTP request.
   *  - Passing an `AbortSignal` via `options.signal` cancels externally. After
   *    abort, the iterator rejects on the next `.next()` with an `AbortError`.
   *
   * Requires `generation` permission.
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
   * // Recommended (v0.30.2+): thread tool calls through native parts content
   * // AND echo back `reasoning_content` on the assistant turn — required by
   * // DeepSeek thinking-mode tool loops, harmlessly ignored by other
   * // providers. Without it, DeepSeek-thinking returns a 400 on the next
   * // turn ("The 'reasoning_content' in the thinking mode must be passed
   * // back to the API."). Providers without parts arrays / reasoning_content
   * // ignore both fields, so this pattern is provider-portable.
   * const schemas = api.tools.list().map(t => ({
   *   name: t.name, description: t.description, parameters: t.parameters,
   * }));
   * let msgs: LLMMessage[] = [...history];
   * for (let i = 0; i < 8; i++) {
   *   const r = await api.llm.generateWithTools(msgs, schemas, { connectionName: 'tools' });
   *   if (!r.tool_calls?.length) {
   *     if (r.content) api.chat.inject('result', r.content, { mode: 'intercept' });
   *     break;
   *   }
   *   // Assistant turn: one tool_use part per call + echo reasoning_content
   *   // back so DeepSeek-thinking accepts the continuation.
   *   msgs.push({
   *     role: 'assistant',
   *     content: r.tool_calls.map(c => ({
   *       type: 'tool_use', id: c.call_id, name: c.name, input: c.args,
   *     })),
   *     ...(r.reasoning_content ? { reasoning_content: r.reasoning_content } : {}),
   *   });
   *   // User turn: one tool_result part per call, paired by call_id.
   *   const results = await Promise.all(r.tool_calls.map(async c => ({
   *     type: 'tool_result' as const,
   *     tool_use_id: c.call_id,
   *     content: await api.tools.invoke(c.name, c.args),
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

// ─── Connections API ──────────────────────────────────────────────────────────

/**
 * Safe, read-only view of one of the user's LLM connection profiles. **Never
 * contains the API key** — only the `has_api_key` boolean. Mirrors the host's
 * `ConnectionProfileDTO` field-for-field (snake_case, like `LLMRawResult`).
 *
 * The `id` is what you pass to {@link LLMOptions.connectionId}; `name` to
 * {@link LLMOptions.connectionName}. Pair `list()` with
 * `api.ui.components.mountSelect` / `mountModelCombobox` to build connection /
 * model pickers.
 */
export interface Connection {
  /** Stable connection ID. Pass to `api.llm.*` via `options.connectionId`. */
  id: string;
  /** Human-readable name. Pass to `api.llm.*` via `options.connectionName`. */
  name: string;
  /** Provider identifier (e.g. `'anthropic'`, `'openai'`). */
  provider: string;
  /** Provider API base URL. */
  api_url: string;
  /** Model identifier. */
  model: string;
  /** Bound generation preset ID, or `null`. */
  preset_id: string | null;
  /** Whether this is the user's default connection. */
  is_default: boolean;
  /** Whether an API key is stored. NEVER the key itself. */
  has_api_key: boolean;
  /** Raw provider-specific metadata bag (provider-quirk flags, etc.). */
  metadata: Record<string, unknown>;
  /** Parsed, typed reasoning bindings (settings snapshot + optional promptBias),
   *  or `null` when the connection has none (generation falls back to the user's
   *  global reasoning setting). */
  reasoning_bindings: ConnectionReasoningBindings | null;
  /** Unix-ms creation timestamp. */
  created_at: number;
  /** Unix-ms last-update timestamp. */
  updated_at: number;
}

/**
 * Read-only access to the user's LLM connection profiles. Free tier (no
 * permission) — the surface exposes no secrets (`has_api_key` is a boolean).
 * There is intentionally no create/update/delete: connections hold provider
 * credentials and are managed by the user in Lumiverse settings.
 */
export interface ConnectionsAPI {
  /** List all of the user's connection profiles. */
  list(): Promise<Connection[]>;
  /** Get a connection profile by ID, or `null` if it doesn't exist / isn't accessible. */
  get(connectionId: string): Promise<Connection | null>;
  /** Get the user's default connection (the `is_default` one, or the first available), or `null`. */
  getDefault(): Promise<Connection | null>;
  /** Find a connection by name (case-insensitive), or `null` if unmatched. */
  findByName(name: string): Promise<Connection | null>;
}

// ─── Web Search API ───────────────────────────────────────────────────────────

/** Safe view of the user's web-search configuration. NEVER contains the API key — only `hasApiKey`. Mirrors the host `WebSearchSettingsDTO`. */
export interface WebSearchSettings {
  /** Whether web search is configured + enabled. Check before calling `query`. */
  enabled: boolean;
  /** Search provider identifier (currently `'searxng'`). */
  provider: string;
  /** Provider API base URL. */
  apiUrl: string;
  /** Per-request timeout in ms. */
  requestTimeoutMs: number;
  /** Default result count when `query`'s `count` is omitted. */
  defaultResultCount: number;
  /** Maximum result count (`count` is clamped to this). */
  maxResultCount: number;
  /** How many top results get scraped when `scrape` is true. */
  maxPagesToScrape: number;
  /** Per-page scraped-text character cap. */
  maxCharsPerPage: number;
  /** Search language code. */
  language: string;
  /** SafeSearch level: 0 = off, 1 = moderate, 2 = strict. */
  safeSearch: 0 | 1 | 2;
  /** Provider engines to query. */
  engines: string[];
  /** Whether an API key is stored. NEVER the key itself. */
  hasApiKey: boolean;
}

/** A single normalized search result. */
export interface WebSearchResult {
  title: string;
  url: string;
  snippet: string;
  /** Provider-reported engine (e.g. `'google'`, `'bing'`), when available. */
  engine?: string;
  /** Provider-reported relevance score, when available. */
  score?: number;
}

/** A search result enriched with scraped page content. Only present when `query` ran with `scrape: true` (the default). */
export interface WebSearchDocument {
  title: string;
  url: string;
  snippet: string;
  /** How the page content was extracted (e.g. `'html'`, `'pdf'`). */
  sourceType?: string;
  /** Extracted page text, clipped to `maxCharsPerPage`. Absent when scraping failed (see `error`). */
  content?: string;
  /** Source page content length before clipping. */
  contentLength?: number;
  /** Populated when scraping this result failed; `content` is then absent. */
  error?: string;
}

/** Options for `api.webSearch.query()`. */
export interface WebSearchOptions {
  /** Free-text query. Trimmed by the host; empty values are rejected. */
  query: string;
  /** Desired result count. Clamped to `maxResultCount`; omit for `defaultResultCount`. */
  count?: number;
  /**
   * When `true` (default), the host scrapes the top results, fills
   * `documents[].content`, and assembles a prompt-ready `context` block. Set
   * `false` to skip scraping — only `results` are returned (no `documents` /
   * `context`). Use `false` when you only need titles / URLs / snippets.
   */
  scrape?: boolean;
}

/** Result of `api.webSearch.query()`. `documents` / `context` are omitted when `scrape: false`. */
export interface WebSearchResponse {
  /** The (trimmed) query that was executed. */
  query: string;
  /** Normalized results from the provider. */
  results: WebSearchResult[];
  /** Per-result scraped page content. Absent when `scrape: false`. */
  documents?: WebSearchDocument[];
  /** Pre-assembled, prompt-ready context block (query + scraped docs). Absent when `scrape: false`. */
  context?: string;
}

/**
 * Web search against the user's configured provider (SearXNG today). Requires
 * the `web_search` permission. `query` rejects with `"Web search is disabled"`
 * when the user hasn't configured a provider — branch on
 * `getSettings().enabled` first if that's a possibility.
 */
export interface WebSearchAPI {
  /** Run a search. With `scrape` (default) you also get scraped `documents` + a prompt-ready `context`. */
  query(options: WebSearchOptions): Promise<WebSearchResponse>;
  /** Read the safe web-search config (never the API key). Useful for branching on `enabled` / `provider`. */
  getSettings(): Promise<WebSearchSettings>;
}

// ─── Users API ──────────────────────────────────────────────────────────────

/**
 * The active user's Lumiverse role as exposed to extensions. Internal owners
 * are reported as `operator`; admins as `admin`; everyone else as `user`.
 */
export type UserRole = 'operator' | 'admin' | 'user';

export interface UsersAPI {
  /**
   * True if the active user has the app visible in at least one session.
   * False if every session is hidden/backgrounded, or the user has no open
   * session. Useful for gating notifications vs. in-app UI.
   */
  isVisible(): Promise<boolean>;
  /** The active user's role: `'operator' | 'admin' | 'user'`. */
  getRole(): Promise<UserRole>;
}

// ─── Version API ──────────────────────────────────────────────────────────────

export interface VersionAPI {
  /** The running backend server's semantic version (e.g. `"1.2.0"`). */
  getBackend(): Promise<string>;
  /** The running frontend bundle's semantic version. */
  getFrontend(): Promise<string>;
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
  /** Timeout in ms. NOTE: not currently honored — the host CORS proxy ignores this; reserved for a future host capability. */
  timeout?: number;
  /**
   * v1.0.0-rc.5+ — response body decoding hint.
   *
   * - `'text'` (default) — `body` is a UTF-8 string.
   * - `'arraybuffer'`    — `body` is a `Uint8Array` of the raw response bytes.
   *   LumiScript transparently decodes Spindle's internal base64 transport so
   *   script authors receive ready-to-use bytes (suitable for piping into
   *   `api.images.upload`, `api.utils.image.detectMime`, etc.).
   *
   * Discriminate at runtime via `typeof response.body === 'string'` if your
   * script accepts either responseType dynamically; otherwise rely on the
   * value you passed in to determine the body's shape.
   */
  responseType?: 'text' | 'arraybuffer';
}

export interface HttpResponse {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  /**
   * Response body. `string` when the request's `responseType` was `'text'` or
   * omitted; `Uint8Array` when `'arraybuffer'`.
   */
  body: string | Uint8Array;
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

/** Options for `api.files.tempWrite` / `tempWriteBinary`. */
export interface TempWriteOptions {
  /** Time-to-live in milliseconds. If omitted the file persists until manually deleted or restart. */
  ttlMs?: number;
  /**
   * Charge this write against a reservation from `tempRequestBlock`. Lets you
   * pre-reserve quota before producing the bytes, so a large write can't fail
   * partway through on a full pool.
   */
  reservationId?: string;
}

/** Options for `api.files.tempRequestBlock`. */
export interface TempRequestBlockOptions {
  /** Time-to-live for the reservation in milliseconds. */
  ttlMs?: number;
  /** Free-text reason recorded with the reservation (diagnostics only). */
  reason?: string;
}

/** A quota reservation returned by `api.files.tempRequestBlock`. */
export interface TempReservation {
  /** Pass to `tempWrite` / `tempWriteBinary` `options.reservationId`, or to `tempReleaseBlock`. */
  reservationId: string;
  /** The reserved size in bytes. */
  sizeBytes: number;
  /** ISO 8601 timestamp when the reservation expires if unused. */
  expiresAt: string;
}

/** Ephemeral-storage quota snapshot returned by `api.files.tempGetPoolStatus`. */
export interface TempPoolStatus {
  /** Total ephemeral pool size across all extensions, in bytes. */
  globalMaxBytes: number;
  /** Bytes currently stored across all extensions. */
  globalUsedBytes: number;
  /** Bytes currently reserved (not yet written) across all extensions. */
  globalReservedBytes: number;
  /** Bytes still available globally (max − used − reserved). */
  globalAvailableBytes: number;
  /** This extension's ephemeral quota, in bytes. */
  extensionMaxBytes: number;
  /** Bytes this extension is currently storing. */
  extensionUsedBytes: number;
  /** Bytes this extension currently has reserved. */
  extensionReservedBytes: number;
  /** Bytes this extension still has available. */
  extensionAvailableBytes: number;
  /** Number of ephemeral files this extension currently holds. */
  fileCount: number;
  /** Maximum file count allowed for this extension. */
  fileCountMax: number;
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
  /** Read a file from ephemeral storage as raw bytes. Requires ephemeral_storage permission. */
  tempReadBinary(path: string): Promise<Uint8Array>;
  /** Write raw bytes to ephemeral storage. Requires ephemeral_storage permission. */
  tempWriteBinary(path: string, data: Uint8Array, options?: TempWriteOptions): Promise<void>;
  /** Delete a file from ephemeral storage. Requires ephemeral_storage permission. */
  tempDelete(path: string): Promise<void>;
  /** List files in ephemeral storage, optionally under a prefix. Requires ephemeral_storage permission. */
  tempList(prefix?: string): Promise<string[]>;
  /** Get file metadata from ephemeral storage (includes expiration). Requires ephemeral_storage permission. */
  tempStat(path: string): Promise<TempStatResult>;
  /** Remove all expired ephemeral files. Returns count of files removed. Requires ephemeral_storage permission. */
  tempClearExpired(): Promise<number>;

  // ── Temp storage quota subsystem ──────────────────────────────────────────
  /** Read the ephemeral-storage quota snapshot (global + this-extension usage/reservations + file counts). Requires ephemeral_storage permission. */
  tempGetPoolStatus(): Promise<TempPoolStatus>;
  /**
   * Reserve `sizeBytes` of ephemeral quota up front. Returns a reservation whose
   * `reservationId` you pass to `tempWrite` / `tempWriteBinary` options, so a
   * large write can't fail partway through on a full pool. Release with
   * `tempReleaseBlock` if you don't use it. Requires ephemeral_storage permission.
   */
  tempRequestBlock(sizeBytes: number, options?: TempRequestBlockOptions): Promise<TempReservation>;
  /** Release a previously requested reservation. Requires ephemeral_storage permission. */
  tempReleaseBlock(reservationId: string): Promise<void>;
}

// ─── Memories API (Memory Cortex + Long-Term Chat Memory) ───────────────────
//
// Bridges `spindle.memories.*`. The host owns the schema and the DTOs are
// camelCase + already-safe, so the script-facing types are direct aliases of
// the host DTOs (no per-field translation — and host field additions are
// visible immediately). The active userId is folded in implicitly. Requires the
// `memories` permission. (Phase 1 surface: cortex + chatMemory + stats.)

/** Memory Cortex retrieval input. `userId` is folded in by LumiScript. */
export type CortexQuery = Omit<import('lumiverse-spindle-types').CortexQueryDTO, 'userId'>;
/** Fused-score cortex retrieval result (memories + entity/relation context + arc + stats). */
export type CortexResult = import('lumiverse-spindle-types').CortexResultDTO;
/** Linked-cortex result — attached vaults + interlink targets. */
export type LinkedCortexResult = import('lumiverse-spindle-types').LinkedCortexResultDTO;
/** Memory Cortex configuration (permissive — advanced/host-added fields pass through). */
export type MemoryCortexConfig = import('lumiverse-spindle-types').MemoryCortexConfigDTO;
/** A vectorized chat chunk — the {{memories}} retrieval unit. */
export type ChatChunk = import('lumiverse-spindle-types').ChatChunkDTO;
// `ChatMemoryResult` is already defined above (shared with api.chats.getMemories) —
// it's structurally identical to the host ChatMemoryResultDTO, so chatMemory.get reuses it.
/** Result of a long-term chat-memory warmup. */
export type ChatMemoryWarmupResult = import('lumiverse-spindle-types').ChatMemoryWarmupResultDTO;
/** Entity / relation / consolidation / salience counts for a chat. */
export type CortexUsageStats = import('lumiverse-spindle-types').CortexUsageStatsDTO;
/** Live ingestion phase + pending job count. */
export type CortexIngestionStatus = import('lumiverse-spindle-types').CortexIngestionStatusDTO;
/** Per-phase ingestion timing averages over recent ingestions. */
export type CortexIngestionTelemetry = import('lumiverse-spindle-types').CortexIngestionTelemetryDTO;
/** A tracked entity in the cortex graph (character / location / item / faction / concept / event). */
export type MemoryEntity = import('lumiverse-spindle-types').MemoryEntityDTO;
/** Input for upserting an entity (smart-merge against canonical name + aliases). */
export type MemoryEntityUpsert = import('lumiverse-spindle-types').MemoryEntityUpsertDTO;
/** Status patch for an entity. */
export type MemoryEntityStatusUpdate = import('lumiverse-spindle-types').MemoryEntityStatusUpdateDTO;
/** A typed relation edge between two entities. */
export type MemoryRelation = import('lumiverse-spindle-types').MemoryRelationDTO;
/** Input for upserting a relation (uses entity *names*; both endpoints must already exist). */
export type MemoryRelationUpsert = import('lumiverse-spindle-types').MemoryRelationUpsertDTO;
/** A narrative-arc consolidation (compressed summary across a tier of chunks). */
export type MemoryConsolidation = import('lumiverse-spindle-types').MemoryConsolidationDTO;
/** A per-chunk salience record (importance score + tags). */
export type MemorySalience = import('lumiverse-spindle-types').MemorySalienceDTO;
/** A frozen cortex snapshot (entities + relations + chunk copy). */
export type Vault = import('lumiverse-spindle-types').VaultDTO;
/** A vault plus its snapshotted entities + relations. */
export type VaultWithContents = import('lumiverse-spindle-types').VaultWithContentsDTO;
/** A chunk copied into a vault snapshot. */
export type VaultChunk = import('lumiverse-spindle-types').VaultChunkDTO;
/** Input for creating a vault from a chat. */
export type VaultCreate = import('lumiverse-spindle-types').VaultCreateDTO;
/** Result of a vault LanceDB re-index. */
export type VaultReindexResult = import('lumiverse-spindle-types').VaultReindexResultDTO;
/** A link attaching a vault to a chat, or interlinking two chats. */
export type ChatLink = import('lumiverse-spindle-types').ChatLinkDTO;
/** Input for attaching a vault or setting up a chat interlink. */
export type ChatLinkAttach = import('lumiverse-spindle-types').ChatLinkAttachDTO;

export interface MemoriesCortexAPI {
  /** Get the user's Memory Cortex configuration. */
  getConfig(): Promise<MemoryCortexConfig>;
  /** Patch the Memory Cortex configuration (deep merge; unspecified fields left untouched). */
  putConfig(patch: Partial<MemoryCortexConfig>): Promise<MemoryCortexConfig>;
  /** Fused-score retrieval (semantic + salience + recency + reinforcement + emotional + entity). Server-cached ~5 min per chat + query shape. */
  query(query: CortexQuery): Promise<CortexResult>;
  /** Resolve every attached vault + interlink target in parallel. Pass `queryText` to rank by relevance to the current conversation. */
  queryLinked(chatId: string, options?: { queryText?: string }): Promise<LinkedCortexResult>;
  /** Read the warm cache without re-running retrieval. `null` if none / expired. */
  getCached(chatId: string): Promise<CortexResult | null>;
  /** Read the cached linked-cortex result. `null` if none / expired. */
  getCachedLinked(chatId: string): Promise<LinkedCortexResult | null>;
  /** Drop the warm cortex cache for a chat. */
  invalidateCache(chatId: string): Promise<void>;
  /** Drop the warm linked-cortex cache for a chat. */
  invalidateLinkedCache(chatId: string): Promise<void>;
}

export interface MemoriesChatMemoryAPI {
  /** All vectorized chunks for a chat, oldest first. */
  listChunks(chatId: string): Promise<ChatChunk[]>;
  /** Top-K hybrid (vector + BM25) retrieval — the same payload the {{memories}} macro uses. */
  get(chatId: string, options?: { topK?: number }): Promise<ChatMemoryResult>;
  /** Rebuild stale chunks + queue pending vectorizations. `force: true` rebuilds even when fresh. No-op when chat vectorization is disabled. */
  warm(chatId: string, options?: { force?: boolean }): Promise<ChatMemoryWarmupResult>;
  /** Drop the cached {{memories}} retrieval result for a chat. */
  invalidate(chatId: string): Promise<void>;
}

export interface MemoriesStatsAPI {
  /** Entity / relation / consolidation / salience counts for a chat. */
  usage(chatId: string): Promise<CortexUsageStats>;
  /** Live ingestion phase + pending job count; `null` when the chat was never ingested. */
  ingestionStatus(chatId: string): Promise<CortexIngestionStatus | null>;
  /** Last sample + per-phase averages over recent ingestions. */
  ingestionTelemetry(chatId: string): Promise<CortexIngestionTelemetry>;
}

export interface MemoriesEntitiesAPI {
  /** List entities for a chat. Defaults to active-only, ordered by salience. */
  list(chatId: string, options?: { activeOnly?: boolean; limit?: number }): Promise<MemoryEntity[]>;
  /** Get an entity by id, or `null` if not found / not owned. */
  get(entityId: string): Promise<MemoryEntity | null>;
  /** Find an entity by canonical name or known alias, or `null`. */
  findByName(chatId: string, name: string): Promise<MemoryEntity | null>;
  /** Smart-merge upsert against canonical name + aliases. `chunkId`/`createdAt` attribute the mention. */
  upsert(chatId: string, entity: MemoryEntityUpsert, options?: { chunkId?: string | null; createdAt?: number }): Promise<MemoryEntity>;
  /** Update an entity's status (active / inactive / deceased / destroyed / unknown). */
  updateStatus(entityId: string, patch: MemoryEntityStatusUpdate): Promise<MemoryEntity>;
  /** Append facts (deduplicated; keeps the most recent 20). */
  addFacts(entityId: string, facts: string[]): Promise<MemoryEntity>;
  /** Read an entity's facts (tagged branch facts stripped). */
  getFacts(entityId: string): Promise<string[]>;
  /** Replace the running emotional-valence map. */
  updateEmotionalValence(entityId: string, valence: Record<string, number>): Promise<MemoryEntity>;
}

export interface MemoriesRelationsAPI {
  /** Active edges only (excludes superseded / merged). */
  list(chatId: string): Promise<MemoryRelation[]>;
  /** Every edge including superseded / merged — for diagnostics. */
  listAll(chatId: string): Promise<MemoryRelation[]>;
  /** Active edges incident to one entity. */
  forEntity(chatId: string, entityId: string): Promise<MemoryRelation[]>;
  /** Active edges across a set of entities. */
  forEntities(chatId: string, entityIds: string[], options?: { limit?: number }): Promise<MemoryRelation[]>;
  /** Upsert a relation by entity *names*. Both endpoints must already exist (use entities.upsert first) — returns `null` if dropped. */
  upsert(chatId: string, relation: MemoryRelationUpsert, options?: { chunkId?: string | null }): Promise<MemoryRelation | null>;
}

export interface MemoriesConsolidationsAPI {
  /** List narrative-arc consolidations. Pass `tier` to filter (1 = scene, 2 = chapter, …); ordered most-recent first. */
  list(chatId: string, options?: { tier?: number }): Promise<MemoryConsolidation[]>;
  /** The most recent arc across all tiers, or `null`. */
  latestArc(chatId: string): Promise<MemoryConsolidation | null>;
  /** Trigger a background extractive consolidation pass (no sidecar LLM). Returns immediately; new arcs appear via `list()` once it completes. */
  run(chatId: string): Promise<void>;
}

export interface MemoriesSalienceAPI {
  /** Per-chunk salience records, ordered by `scoredAt` desc. Max 500 per page. */
  list(chatId: string, options?: { limit?: number; offset?: number }): Promise<MemorySalience[]>;
}

export interface MemoriesVaultsAPI {
  /** All vaults owned by the active user. */
  list(): Promise<Vault[]>;
  /** A vault with its entities + relations, or `null` if not found / not owned. */
  get(vaultId: string): Promise<VaultWithContents | null>;
  /** The chunk snapshot copied into a vault at creation time. */
  getChunks(vaultId: string): Promise<VaultChunk[]>;
  /** Snapshot a chat's cortex state into a new vault. Entities + relations copy synchronously; LanceDB chunks copy in the background. */
  create(input: VaultCreate): Promise<Vault>;
  /** Rename a vault. Returns whether it was renamed. */
  rename(vaultId: string, name: string): Promise<boolean>;
  /** Delete a vault + its chunks + attached links. Returns whether it was deleted. */
  delete(vaultId: string): Promise<boolean>;
  /** Re-run the LanceDB chunk copy (e.g. after an embedding-model swap). */
  reindex(vaultId: string): Promise<VaultReindexResult>;
}

export interface MemoriesLinksAPI {
  /** All links attached to a chat (vault attaches + interlinks). */
  list(chatId: string): Promise<ChatLink[]>;
  /** Attach a vault as read-only knowledge, or interlink two chats (pass `bidirectional: true` for the reverse edge). Returns the created link(s). */
  attach(input: ChatLinkAttach): Promise<ChatLink[]>;
  /** Remove a link. Returns whether it was removed. */
  remove(chatId: string, linkId: string): Promise<boolean>;
  /** Enable / disable a link without removing it. Returns whether it was toggled. */
  toggle(chatId: string, linkId: string, enabled: boolean): Promise<boolean>;
}

/**
 * Memory Cortex + Long-Term Chat Memory. Requires the `memories` permission;
 * the active userId is folded in implicitly. Every chat-scoped call is
 * ownership-checked against the active user host-side.
 */
export interface MemoriesAPI {
  /** Cortex config, fused retrieval, linked cortex, and the warm cache. */
  cortex: MemoriesCortexAPI;
  /** The entity graph — characters / locations / items / factions / concepts / events. */
  entities: MemoriesEntitiesAPI;
  /** The typed relation graph between entities. */
  relations: MemoriesRelationsAPI;
  /** Narrative-arc consolidations (compressed summaries). */
  consolidations: MemoriesConsolidationsAPI;
  /** Per-chunk salience records. */
  salience: MemoriesSalienceAPI;
  /** Frozen cortex snapshots (vaults). */
  vaults: MemoriesVaultsAPI;
  /** Vault attaches + chat-to-chat interlinks. */
  links: MemoriesLinksAPI;
  /** Long-term chat memory — the {{memories}} chunk store. */
  chatMemory: MemoriesChatMemoryAPI;
  /** Cortex usage counts + ingestion telemetry. */
  stats: MemoriesStatsAPI;
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
   * per-character. Reads return the full object.
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

/** A single long-term memory chunk retrieved via vector search.
 *  Import-aliased to the host DTO so it auto-tracks `lumiverse-spindle-types`
 *  rather than re-drifting on each host bump — the chat-memory surface is
 *  host-DTO-backed (see docs/api-stability.md). `score` is `number | null`
 *  (null for keyword-only / recency-fallback hits — don't treat missing as
 *  zero distance). `editor-lib.ts` carries the concrete inlined shape for Monaco. */
export type ChatMemoryChunk = import('lumiverse-spindle-types').ChatMemoryChunkDTO;

/** Result of a chat-memory vector search (the `{{memories}}` payload). Shared by
 *  `api.chats.getMemories` + `api.memories.chatMemory.get`. Import-aliased to the
 *  host DTO — see ChatMemoryChunk above. */
export type ChatMemoryResult = import('lumiverse-spindle-types').ChatMemoryResultDTO;

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

// ─── Presets API ─────────────────────────────────────────────────────────────
//
// Full CRUD over user generation presets + nested prompt-block CRUD + a
// host-derived category grouping view. Maps onto Lumiverse's
// `spindle.presets.*` surface. Requires the `presets` permission.
//
// A preset is the complete generation configuration: sampler/provider
// parameters, ordered prompt blocks (with roles, positions, depth),
// prompt behavior settings, and metadata. Programmatic access lets
// scripts rotate prompt blocks based on chat context, snapshot presets
// for backup/share, build ephemeral per-chat configurations, audit the
// active preset for analytics, etc.
//
// Categories are NOT separate records — they're structural prompt
// blocks where `marker === 'category'`, with children being the
// following non-category blocks until the next category marker.
// Category mode is `'radio'` (one enabled child) or `'checkbox'` (many).
// Use `categories.list()` for host-derived grouping; use `blocks.*` to
// mutate both normal blocks AND category-marker blocks.
//
// Naming convention: snake_case fields (`prompt_order`, `created_at`,
// `updated_at`) are preserved from Spindle DTOs since they identify
// stored data and match what callers see in host event payloads. The
// DTO ↔ Info shape is structurally identical for this namespace; the
// canonical layer is a thin pass-through with permission gating, no
// per-field DTO translation.

/** Prompt block role — message role or append injection tag. */
export type PromptBlockRole =
  | 'system' | 'user' | 'assistant' | 'user_append' | 'assistant_append';

/** Where a prompt block injects relative to chat history. */
export type PromptBlockPosition = 'pre_history' | 'post_history' | 'in_history';

/** Selection mode for a category marker block — `'radio'` allows one
 *  enabled child; `'checkbox'` allows many. Only meaningful when the
 *  containing block's `marker === 'category'`. */
export type PromptBlockCategoryMode = 'radio' | 'checkbox' | null;

/**
 * Prompt variable definition attached to a prompt block. Drives the
 * preset-editor UI inputs that produce runtime substitution values.
 * Discriminated union by `type`.
 */
export type PromptVariableDef =
  | { id: string; name: string; label: string; type: 'text';     defaultValue: string; description?: string }
  | { id: string; name: string; label: string; type: 'textarea'; defaultValue: string; rows?: number; description?: string }
  | { id: string; name: string; label: string; type: 'number';   defaultValue: number; min?: number; max?: number; step?: number; description?: string }
  | { id: string; name: string; label: string; type: 'slider';   defaultValue: number; min: number; max: number; step?: number; description?: string };

/**
 * Prompt block — a single segment of the preset's prompt assembly.
 * Structurally identical to Spindle's `PromptBlockDTO`.
 */
export interface PromptBlock {
  id: string;
  name: string;
  content: string;
  role: PromptBlockRole;
  enabled: boolean;
  position: PromptBlockPosition;
  /** Depth offset when `position` is `'in_history'`. */
  depth: number;
  /** `'category'` marks a structural category header; other strings are
   *  structural insertion markers; `null` is a normal prompt block. */
  marker: string | null;
  isLocked: boolean;
  color: string | null;
  injectionTrigger: string[];
  group: string | null;
  /** Only meaningful when `marker === 'category'`. */
  categoryMode?: PromptBlockCategoryMode;
  variables?: PromptVariableDef[];
}

/**
 * Prompt block category grouping derived from the preset's ordered
 * blocks. Categories aren't separate records — `categoryBlock` is a
 * marker-tagged `PromptBlock` and `children` are the following
 * non-category blocks until the next category marker.
 */
export interface PromptBlockCategoryGroup {
  /** The category header block, or `null` for uncategorized leading blocks. */
  categoryBlock: PromptBlock | null;
  /** Non-category blocks after the header until the next category header. */
  children: PromptBlock[];
}

/**
 * User generation preset — full prompt configuration (parameters,
 * prompt blocks, behavior settings, metadata). Structurally identical
 * to Spindle's `UserPresetDTO`.
 */
export interface Preset {
  id: string;
  name: string;
  /** Preset provider, usually `'loom'` for native Lumiverse presets. */
  provider: string;
  /** Engine identifier. Defaults to `'classic'` on create. */
  engine: string;
  /** Sampler / provider parameters and Loom custom-body settings. */
  parameters: Record<string, unknown>;
  /** Ordered prompt blocks, including structural category markers. */
  prompt_order: PromptBlock[];
  /** Prompt behavior, completion settings, advanced prompt settings. */
  prompts: Record<string, unknown>;
  /** Loom metadata: description, source, model profiles, default status, prompt-variable values. */
  metadata: Record<string, unknown>;
  /** Unix epoch seconds. */
  created_at: number;
  /** Unix epoch seconds. */
  updated_at: number;
}

/** Input for creating a new preset. `name` and `provider` required. */
export interface PresetCreateInput {
  name: string;
  provider: string;
  engine?: string;
  parameters?: Record<string, unknown>;
  prompt_order?: PromptBlock[];
  prompts?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
}

/** Input for updating a preset. All fields optional, including `name` and `provider`. */
export type PresetUpdateInput = Partial<PresetCreateInput>;

/** Input for creating a prompt block. Missing fields are defaulted by the host. */
export type PromptBlockCreateInput = Partial<PromptBlock>;

/** Input for updating a prompt block. Any subset of `PromptBlock` except `id`. */
export type PromptBlockUpdateInput = Partial<Omit<PromptBlock, 'id'>>;

/**
 * Preset CRUD API. Requires the `presets` permission.
 *
 * Sub-namespaces:
 *   - `api.presets.*`            — preset CRUD (list / get / create / update / delete)
 *   - `api.presets.blocks.*`     — prompt-block CRUD within a preset
 *   - `api.presets.categories.*` — host-derived category grouping view
 *
 * Use block CRUD for localized prompt edits — rewriting the entire
 * `prompt_order` array on each change is wasteful. Use `categories.list()`
 * for analytics or UI grouping; create/update/delete category headers
 * through `blocks.*` (a category header is a block with `marker: 'category'`).
 *
 * @example
 * // Rotate a system block based on chat context
 * api.broadcast.on('scene-changed', async ({ tone }) => {
 *   const blocks = await api.presets.blocks.list(activePresetId);
 *   const styleBlock = blocks.find(b => b.name === 'Style');
 *   if (styleBlock) {
 *     await api.presets.blocks.update(activePresetId, styleBlock.id, {
 *       content: tone === 'tense' ? '...' : '...',
 *     });
 *   }
 * });
 */
export interface PresetsAPI {
  /** List presets. Defaults: limit 50, max 200. */
  list(options?: { limit?: number; offset?: number }): Promise<{ data: Preset[]; total: number }>;

  /** Get a preset by id. Returns `null` if not found. */
  get(presetId: string): Promise<Preset | null>;

  /** Create a new preset. `name` and `provider` required. */
  create(input: PresetCreateInput): Promise<Preset>;

  /** Update a preset. All fields optional. */
  update(presetId: string, input: PresetUpdateInput): Promise<Preset>;

  /** Delete a preset. Returns `true` if deleted. */
  delete(presetId: string): Promise<boolean>;

  /**
   * Prompt-block CRUD within a preset. Block operations update the
   * parent preset's `prompt_order` array and go through the normal
   * preset update flow.
   */
  blocks: {
    /** Return the preset's ordered prompt blocks. */
    list(presetId: string): Promise<PromptBlock[]>;

    /** Get a block by id. Returns `null` if not found. */
    get(presetId: string, blockId: string): Promise<PromptBlock | null>;

    /**
     * Create a prompt block. `options.index` inserts at a specific
     * zero-based position within `prompt_order`; omitted appends to
     * the end.
     */
    create(
      presetId: string,
      input: PromptBlockCreateInput,
      options?: { index?: number },
    ): Promise<PromptBlock>;

    /** Update a block. All fields except `id` are optional. */
    update(
      presetId: string,
      blockId: string,
      input: PromptBlockUpdateInput,
    ): Promise<PromptBlock>;

    /** Delete a block. Returns `true` if deleted. */
    delete(presetId: string, blockId: string): Promise<boolean>;
  };

  /**
   * Host-derived category grouping. Categories aren't separate records;
   * this is a precomputed view of `prompt_order` walked by category
   * marker. Read-only — to create / update / delete a category, use
   * `blocks.*` with `marker: 'category'`.
   */
  categories: {
    /** Return category groups derived from the preset's ordered blocks.
     *  The first group may have `categoryBlock: null` when normal blocks
     *  appear before the first category marker. */
    list(presetId: string): Promise<PromptBlockCategoryGroup[]>;
  };
}

// ─── Regex Scripts API ──────────────────────────────────────────────────────
//
// Full CRUD over the user's regex find/replace scripts plus a context-aware
// `getActive` resolver. Maps onto Lumiverse's `spindle.regex_scripts.*`
// surface. Requires the `regex_scripts` permission.
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

// ─── Images API ──────────────────────────────────────────────────────────────
//
// Thin wrapper over Spindle's image-store surface (`spindle.images.*`).
// Scripts upload raw bytes and receive an `ImageInfo` whose `id` field can
// then be passed to `api.theme.extractColors(id)` or stored on a character
// avatar / databank document / etc. for later retrieval.
//
// Permission: `images`. (Distinct from `app_manipulation` which gates the
// theme + DOM surfaces; uploading images is its own permission tier so
// users can grant theme manipulation WITHOUT granting arbitrary image
// uploads.)
//
// The wrapper covers the most common image-storage workflows. Less-used
// `spindle.images.list` and `spindle.images.uploadMany` are not wrapped
// in v1.0.0-rc.5 — `list` would expose arbitrary enumeration of all the
// user's images (privacy surface), `uploadMany` is a perf-optimization
// scripts can reach via a `Promise.all` over single `upload` calls. Add
// either if real-world demand surfaces.

/** Camel-case mirror of `ImageDTO` (Spindle's safe image-store DTO). */
export interface ImageInfo {
  id:                  string;
  originalFilename:    string;
  mimeType:            string;
  /** Pixel width if the host could derive it from the upload. */
  width:               number | null;
  /** Pixel height if the host could derive it from the upload. */
  height:              number | null;
  hasThumbnail:        boolean;
  /** Relative authenticated URL for this image, already sized to `specificity`. */
  url:                 string;
  /** Image specificity flag (`'full'` / `'avatar'` / `'thumbnail'`) — see `ImageSpecificityDTO`. */
  specificity:         string;
  ownerExtensionIdentifier: string | null;
  ownerCharacterId:    string | null;
  ownerChatId:         string | null;
  createdAt:           number;
}

/** Input for `api.images.upload`. Mirrors `ImageUploadDTO`. */
export interface ImageUploadInput {
  /** Raw image bytes. Source via `api.utils.http.* responseType:'arraybuffer'`, `api.utils.image.dataUrlToBytes`, `api.files.*`, etc. */
  data:               Uint8Array;
  /** Optional filename to preserve when storing. */
  filename?:          string;
  /** Optional content type override (defaults to `image/png` when not inferable). */
  mimeType?:          string;
  /** Optional character ownership tag for the persisted image. */
  ownerCharacterId?:  string;
  /** Optional chat ownership tag for the persisted image. */
  ownerChatId?:       string;
}

/** Convenience input for `api.images.uploadFromDataUrl`. */
export interface ImageUploadFromDataUrlOptions {
  /** Original filename to preserve on the persisted image. */
  originalFilename?:  string;
  /** Optional character ownership tag. */
  ownerCharacterId?:  string;
  /** Optional chat ownership tag. */
  ownerChatId?:       string;
}

export interface ImagesAPI {
  /**
   * Upload raw image bytes to Lumiverse's image store. Returns an
   * `ImageInfo` whose `id` field can be passed to `api.theme.extractColors`,
   * stored on a character avatar, or retained on a databank document.
   * Requires `images` permission.
   */
  upload(input: ImageUploadInput): Promise<ImageInfo>;

  /**
   * Upload an image from a `data:image/...;base64,...` data URL. Convenience
   * wrapper that calls `api.utils.image.dataUrlToBytes` then `upload` under
   * the hood. Requires `images` permission.
   */
  uploadFromDataUrl(dataUrl: string, options?: ImageUploadFromDataUrlOptions): Promise<ImageInfo>;

  /**
   * Look up an image by id. Returns `null` if no row with that id exists or
   * the script's scope can't see it. Requires `images` permission.
   */
  get(imageId: string): Promise<ImageInfo | null>;

  /**
   * Delete an image by id. Returns `true` if a row was removed, `false` if
   * the id was unknown / out-of-scope / already gone. Requires `images`
   * permission.
   */
  delete(imageId: string): Promise<boolean>;
}

// ─── Image Generation API ───────────────────────────────────────────────────
//
// Wrapper over Spindle's image-generation surface (`spindle.imageGen.*`).
// Lets scripts generate images via the user's configured image-gen
// connection profiles, list available providers + their capability
// schemas, and inspect / select connections + models.
//
// Permission: `image_gen` (separate from `images`, which only covers
// raw-byte CRUD on the image store). A script that GENERATES needs
// `image_gen`; one that just stores/retrieves needs `images`. Most
// generation scripts will want both since the result auto-persists.
//
// **Integration with the rest of the API.** A successful `generate()`
// returns the result image as a base64 data URL AND (when persistence
// succeeds host-side) a canonical `imageId`. That `imageId` is the same
// handle type accepted by `api.images.get(imageId)`,
// `api.theme.extractColors(imageId)`, and `spindle.characters.setAvatar`.
// The `imageUrl` field is a public unauthenticated URL suitable for
// `api.ui.pushNotification(title, body, { image: result.imageUrl })` —
// auth-free so push-notification clients can render it without an auth
// header. (Note: pushNotification is positional, NOT object-form.)

/** Camel-case mirror of `ImageGenParameterSchemaDTO` — one parameter's contract within a provider's capability schema. */
export interface ImageGenParameterSchema {
  type:         'number' | 'integer' | 'boolean' | 'string' | 'select' | 'image_array';
  default?:     unknown;
  min?:         number;
  max?:         number;
  step?:        number;
  description:  string;
  required?:    boolean;
  options?:     Array<{ id: string; label: string }>;
  /** Optional grouping label — UI may render parameters with the same `group` together. */
  group?:       string;
}

/** Camel-case mirror of `ImageGenProviderDTO` — provider id + capability schema (used to build dynamic parameter UIs). */
export interface ImageGenProviderInfo {
  id:   string;
  name: string;
  capabilities: {
    /** Per-parameter contract (validate args before `generate` to surface errors fast). */
    parameters:       Record<string, ImageGenParameterSchema>;
    apiKeyRequired:   boolean;
    modelListStyle:   'static' | 'dynamic' | 'google';
    /** Populated when `modelListStyle === 'static'`. Dynamic providers expose models via `getModels(connectionId)`. */
    staticModels?:    Array<{ id: string; label: string }>;
    defaultUrl:       string;
  };
}

/** Camel-case mirror of `ImageGenConnectionDTO` — a single connection profile (API keys masked to `hasApiKey`). */
export interface ImageGenConnectionInfo {
  id:                 string;
  name:               string;
  provider:           string;
  apiUrl:             string;
  model:              string;
  isDefault:          boolean;
  /** `true` if the user has supplied an API key for this connection (key itself is never exposed). */
  hasApiKey:          boolean;
  /** Per-connection default parameter values — merged with the request's `parameters` at `generate` time. */
  defaultParameters:  Record<string, unknown>;
  metadata:           Record<string, unknown>;
  createdAt:          number;
  updatedAt:          number;
}

/** Input for `api.imageGen.generate`. Mirrors `ImageGenRequestDTO`. */
export interface ImageGenInput {
  /**
   * Connection profile ID to use. When omitted, uses the user's default
   * image-gen connection (set via the Lumiverse UI). Look up via
   * `api.imageGen.listConnections()`.
   */
  connectionId?:      string;
  /** Text prompt for image generation. Required. */
  prompt:             string;
  /** Negative prompt — provider-dependent support. */
  negativePrompt?:    string;
  /** Override the connection profile's model. Look up via `api.imageGen.getModels(connectionId)`. */
  model?:             string;
  /**
   * Provider-specific parameters (e.g. `width`, `height`, `steps`, `cfg_scale`,
   * `input_images` for img2img, …). Validate against the provider's
   * `parameters` schema from `getProviders()` if your script accepts
   * user input. Merged with the connection's `defaultParameters` host-side.
   *
   * **Image inputs** — providers that support img2img / inpainting expose
   * `image_array`-typed parameters. Pass them as arrays of `imageId`
   * strings sourced from `api.images.upload` / `api.images.get` etc.:
   * `parameters: { input_images: [resultFromPriorGen.imageId] }`.
   */
  parameters?:        Record<string, unknown>;
  /** Tag the persisted result with a character ownership marker. */
  ownerCharacterId?:  string;
  /** Tag the persisted result with a chat ownership marker. */
  ownerChatId?:       string;
}

/** Result from `api.imageGen.generate`. Mirrors `ImageGenResultDTO`. */
export interface ImageGenResult {
  /** Generated image as a base64 data URL — directly assignable to `<img src>` etc. */
  imageDataUrl:  string;
  /** Model that was actually used (may differ from input if `model` was omitted and the connection's default applied). */
  model:         string;
  /** Provider id that handled the generation. */
  provider:      string;
  /**
   * Canonical image id in Lumiverse's image table. Pass to
   * `api.images.get`, `api.theme.extractColors`,
   * `spindle.characters.setAvatar`, etc. Present when host-side
   * persistence succeeded (the typical case).
   */
  imageId?:      string;
  /**
   * Public unauthenticated URL for the persisted image. Auth-free so
   * push-notification clients can render it without an auth header:
   * `api.ui.pushNotification(title, body, { image: result.imageUrl })`.
   * (pushNotification is positional, NOT object-form.)
   */
  imageUrl?:     string;
}

export interface ImageGenAPI {
  /**
   * Generate an image. Returns the result image as a base64 data URL plus
   * (when persistence succeeds) a canonical `imageId` you can pass to
   * `api.images.*`, `api.theme.extractColors`, etc. Requires `image_gen`
   * permission. Persistence ownership tags (`ownerCharacterId` /
   * `ownerChatId`) attach to the result row when supplied.
   */
  generate(input: ImageGenInput): Promise<ImageGenResult>;

  /**
   * List all image-generation providers available on this Lumiverse install
   * along with their capability schemas. Each provider's `capabilities.parameters`
   * field describes the supported `parameters` for `generate()` calls
   * against that provider's connections. Requires `image_gen` permission.
   */
  getProviders(): Promise<ImageGenProviderInfo[]>;

  /**
   * List the user's image-gen connection profiles. API keys are never
   * exposed — only `hasApiKey: boolean` indicates whether the key is
   * present. Requires `image_gen` permission.
   */
  listConnections(): Promise<ImageGenConnectionInfo[]>;

  /**
   * Get a single image-gen connection profile by id. Returns `null` when
   * the id is unknown or the script's scope can't see it. Requires
   * `image_gen` permission.
   */
  getConnection(connectionId: string): Promise<ImageGenConnectionInfo | null>;

  /**
   * List the models available on a connection profile. For providers with
   * dynamic model lists (most cloud providers), this fetches live from
   * the upstream API and may incur a network round-trip. Static-list
   * providers return their `capabilities.staticModels` directly.
   * Requires `image_gen` permission.
   */
  getModels(connectionId: string): Promise<Array<{ id: string; label: string }>>;
}

// ─── OAuth API ──────────────────────────────────────────────────────────────
//
// Thin wrapper over Spindle's OAuth surface (`spindle.oauth.*`). Gives
// scripts the inbound-HTTP callback hook + a CSRF-state nonce primitive;
// everything else (constructing the authorize URL, exchanging the code
// for a token, persisting + refreshing the token) is the script's
// responsibility — pair with `api.utils.http` (`cors_proxy` permission)
// for token-endpoint POSTs and `api.enclave` for encrypted persistence.
//
// Permission: `oauth`.
//
// **Single handler per extension.** The host stores the callback handler
// in a single module-scope ref (last-write-wins). LumiScript adds a
// non-terminating warning when two scripts (or the same script twice)
// race for the slot — the host's underlying behavior is preserved, only
// the silent-overwrite is surfaced.
//
// **Cookbook recipe** for the full PKCE flow at
// `notes/oauth-cookbook.md` once we cut a v1 docs pass.

export interface OAuthAPI {
  /**
   * Register a callback handler for this extension's OAuth redirect URL.
   *
   * Handler receives the URL query params from the redirect (typed as
   * `Record<string, string>`); optional return `{html}` becomes the
   * response body shown in the user's browser tab once the redirect
   * lands. Return `void` (or omit the html field) and the host renders
   * a generic success page.
   *
   * **Single handler per extension.** Calling `onCallback` again replaces
   * the prior registration (host-side, not LumiScript-scoped). When a
   * different script — or the same script without first calling its
   * returned unsub — re-registers, LumiScript emits a `spindle.log.warn`
   * naming both scripts so the silent overwrite is visible during
   * development.
   *
   * Returns an unsubscribe function synchronously (no await needed —
   * matches the host's `spindle.oauth.onCallback` shape and the
   * `commands.onInvoked` proxy pattern: dispatch is fire-and-forget at
   * the proxy layer so we can return sync). Requires `oauth` permission.
   */
  onCallback(
    handler: (params: Record<string, string>) => Promise<{ html?: string } | void>,
  ): () => void;

  /**
   * Get the callback URL path. Stable per-extension — use as the
   * `redirect_uri` in your authorize-URL construction. Returns the path
   * (host-relative, e.g. `/api/spindle-oauth/lumiscript/callback`);
   * prefix with your Lumiverse origin to form the absolute URL the
   * provider will redirect to.
   *
   * (The host's `spindle.oauth.getCallbackUrl` is synchronous since the
   * value is derived from the manifest identifier at module init.
   * LumiScript scripts run in a subprocess, so all API calls cross an
   * IPC boundary — this method is async on the script side.)
   * Requires `oauth` permission.
   */
  getCallbackUrl(): Promise<string>;

  /**
   * Mint a CSRF state nonce. Pass to the authorize URL as `state=...`;
   * the host verifies the returned state at callback time and rejects
   * mismatched values before invoking your callback handler. Requires
   * `oauth` permission.
   */
  createState(): Promise<string>;
}

// ─── Theme API ───────────────────────────────────────────────────────────────
//
// Wrapper over Spindle's theme-engine surface (`spindle.theme.*`). Lets
// scripts apply CSS variable overrides, drive theming from an accent
// palette (Lumiverse generates the coherent ~80+ variable set), read the
// user's current theme info, and extract color palettes from stored
// images for image-driven theming patterns.
//
// Permission: `app_manipulation` (shared with `api.ui.dom.*`).
//
// **Per-script attribution.** Multiple LumiScript scripts can apply
// themes concurrently — LumiScript maintains a per-script override
// registry and merges them before calling `spindle.theme.apply`.
// Conflict resolution: last-applied-wins per variable key, ordered by
// the script's most recent `apply` / `applyPalette` call. Auto-cleared
// on script disable / delete via the standard teardown path; explicit
// `clear()` available for in-script removal.

/**
 * Camel-case mirror of `ColorRGB` — RGB color value, 0–255 per channel.
 */
export interface ColorRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * Camel-case mirror of `ColorHSL` — HSL color value
 * (h: 0–360, s: 0–100, l: 0–100).
 */
export interface ColorHSL {
  h: number;
  s: number;
  l: number;
}

/**
 * Camel-case mirror of `ColorExtractionResult` — palette extracted from
 * an image via `api.theme.extractColors`. `dominantHsl` pairs cleanly
 * with `api.theme.applyPalette({ accent: ... })` for image-driven theming.
 */
export interface ColorExtractionInfo {
  dominant: ColorRGB;
  regions: {
    top:    ColorRGB;
    center: ColorRGB;
    bottom: ColorRGB;
    left:   ColorRGB;
    right:  ColorRGB;
  };
  flatness: {
    top:    number;
    center: number;
    bottom: number;
    left:   number;
    right:  number;
    full:   number;
  };
  average:     ColorRGB;
  /** Whether the dominant color is perceived as light (luminance > 152). */
  isLight:     boolean;
  /** HSL representation of the dominant color (ready to pass to applyPalette). */
  dominantHsl: ColorHSL;
}

/**
 * Camel-case mirror of `ThemeInfoDTO` — read-only snapshot of the user's
 * current theme configuration (NOT including any extension overrides).
 */
export interface ThemeInfo {
  /** Theme preset ID (e.g. `'lumiverse-purple'`, `'character-aware'`). */
  id:             string;
  /** Display name of the theme. */
  name:           string;
  /** Resolved mode — always `'light'` or `'dark'`, never `'system'`. */
  mode:           'light' | 'dark';
  /** Primary accent color in HSL. */
  accent:         ColorHSL;
  enableGlass:    boolean;
  radiusScale:    number;
  fontScale:      number;
  uiScale:        number;
  characterAware: boolean;
}

/**
 * Camel-case mirror of `ThemeOverrideDTO`. Direct CSS variable overrides
 * applied via `api.theme.apply`. See `ThemeOverrideDTO` JSDoc upstream
 * for the canonical variable groupings (~80+ variables) covering
 * primary accent, backgrounds, text, borders, status, glass, prose,
 * shadows, radii, fills, cards, icons, modals, typography, transitions.
 */
export interface ThemeOverride {
  /** Flat variable map applied regardless of light/dark mode. */
  variables?: Record<string, string>;
  /** Mode-specific overrides — `dark` / `light` selected at apply time by the host. */
  variablesByMode?: {
    dark?:  Record<string, string>;
    light?: Record<string, string>;
  };
}

/**
 * Camel-case mirror of `ThemePaletteConfigDTO` — input for
 * `api.theme.applyPalette`. Lumiverse derives the full mode-aware
 * variable maps from the supplied accent + preserves the user's glass /
 * radius / font / UI-scale settings.
 */
export interface ThemePaletteConfig {
  accent: ColorHSL;
}

/**
 * Camel-case mirror of `ThemeVariablesConfigDTO` — input for
 * `api.theme.generateVariables`. Returned map can be passed to
 * `api.theme.apply({ variables: ... })` for a complete coherent override.
 */
export interface ThemeVariablesConfig {
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

export interface ThemeAPI {
  /**
   * Apply CSS variable overrides on top of the user's current theme.
   *
   * Within LumiScript, the call updates this script's slot in the
   * per-script override registry, then the merged result of every
   * script's contributions is pushed to `spindle.theme.apply`. Conflict
   * resolution: last-applied-wins per variable key (ordered by the
   * script's most recent `apply` / `applyPalette` call). Requires
   * `app_manipulation` permission.
   */
  apply(overrides: ThemeOverride): Promise<void>;

  /**
   * Apply a palette-driven theme. Lumiverse derives the full ~80+
   * variable set coherently from the supplied accent, preserving the
   * user's glass / radius / font / UI-scale settings. Pass `null` to
   * clear THIS script's palette override (other scripts' overrides are
   * unaffected; use `clear()` to drop this script's variables-based
   * overrides too). Requires `app_manipulation` permission.
   */
  applyPalette(palette: ThemePaletteConfig | null): Promise<void>;

  /**
   * Drop this script's contributions from the per-script override
   * registry, re-merge, and push to `spindle.theme.apply` (or
   * `spindle.theme.clear` if no scripts remain with active overrides).
   * Idempotent on a script with no active overrides. Auto-called on
   * script disable / delete via the standard teardown path. Requires
   * `app_manipulation` permission.
   */
  clear(): Promise<void>;

  /**
   * Get a read-only snapshot of the user's current theme configuration.
   * Returns the BASE theme — does not include any extension overrides.
   * Requires `app_manipulation` permission.
   */
  getCurrent(): Promise<ThemeInfo>;

  /**
   * Extract a color palette from an image stored in Lumiverse's image
   * system. The `imageId` must reference a row in the host's images
   * table — sources include `character.imageId` and the id returned
   * from `api.images.upload`. Throws if the id is unknown. Requires
   * `app_manipulation` permission.
   */
  extractColors(imageId: string): Promise<ColorExtractionInfo>;

  /**
   * Generate the full set of Lumiverse CSS variables from a theme
   * config without applying them. Returns a `Record<string, string>`
   * containing every variable the theme engine would produce (~80+).
   * Pass the result to `apply({ variables: ... })` for a complete
   * coherent override, or tweak individual keys before applying.
   * Requires `app_manipulation` permission.
   */
  generateVariables(config: ThemeVariablesConfig): Promise<Record<string, string>>;
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
   * (`handle.close()` on the returned `ModalHandle`) or via extension cleanup.
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

// ─── App mount (route-persistent full-bleed portal, DOM-owned) ───────────────

/** Options for `api.ui.mountApp()`. */
export interface MountAppOptions {
  /** Optional CSS class applied to the mount container. */
  className?: string;
  /**
   * Where the full-bleed portal sits relative to the app shell:
   * `'start'` / `'end'` (before / after the main view) or `'app-overlay'`
   * (covering it). Default is host-defined.
   */
  position?: 'start' | 'end' | 'app-overlay';
  /**
   * @internal — used by the script-runner child runtime to thread child-
   * generated ids through the canonical impl so the sync-shaped
   * `MountedAppHandle` returned to user code carries stable ids that match
   * parent-side state. Don't set from user code.
   */
  _mountId?: string;
  /** @internal — see `_mountId`. */
  _rootElementId?: string;
}

/**
 * Handle for a mounted app — a route-persistent, full-bleed `document.body`
 * portal your script fully owns. Use for full-screen overlays or persistent
 * chrome beyond what dock panels / drawers / float widgets provide.
 */
export interface MountedAppHandle {
  /** UUID identifying this mount instance. Available synchronously. */
  readonly mountId: string;
  /**
   * `DOMHandle` bound to the mount's content container. Render + wire it via
   * the existing `api.ui.dom.*` pipeline; calls are buffered and applied once
   * the frontend has created the mount.
   */
  readonly root: DOMHandle;
  /** Show or hide the mount without destroying it. */
  setVisible(visible: boolean): void;
  /**
   * Remove the mount from the app shell. Idempotent — subsequent calls and
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

// ─── UI navigation DTOs ─────────────────────────────────────────────────────

/** A drawer tab discoverable via api.ui.getDrawerTabs() — built-in or extension-contributed. */
export interface UIDrawerTab {
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

/** A settings tab discoverable via api.ui.getSettingsTabs(). Role-restricted tabs are filtered out for users lacking the role. */
export interface UISettingsTab {
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
export interface PickFileOptions {
  /** File-type filters — extensions and/or MIME types (e.g. ['.json', 'application/json']). */
  accept?: string[];
  /** Allow selecting more than one file. Default: false. */
  multiple?: boolean;
  /** Maximum size per file in bytes. pickFile() rejects if a selected file exceeds this. */
  maxSizeBytes?: number;
}

/** A file returned by api.ui.pickFile(). */
export interface PickedFile {
  /** Original file name. */
  name: string;
  /** MIME type (falls back to 'application/octet-stream'). */
  mimeType: string;
  /** File size in bytes. */
  sizeBytes: number;
  /** Raw file contents. */
  bytes: Uint8Array;
}

// ─── UI events (reactive UI state) ──────────────────────────────────────────

/** Virtual-keyboard snapshot from api.ui.events.getKeyboardState() / onKeyboardChange(). */
export interface UIKeyboardState {
  /** True when the host believes a virtual keyboard is currently visible. */
  visible: boolean;
  /** Safe bottom inset in CSS pixels that keeps content above the keyboard. */
  insetBottom: number;
  /** Current visual viewport width in CSS pixels. */
  viewportWidth: number;
  /** Current visual viewport height in CSS pixels. */
  viewportHeight: number;
}

/** Side-drawer snapshot from api.ui.events.getDrawerState() / onDrawerChange(). */
export interface UIDrawerState {
  /** Whether the side drawer is currently open. */
  open: boolean;
  /** Active drawer tab id, or null. */
  tabId: string | null;
}

/** Settings-modal snapshot from api.ui.events.getSettingsState() / onSettingsChange(). */
export interface UISettingsState {
  /** Whether the settings modal is currently open. */
  open: boolean;
  /** Active settings view identifier. */
  view: string;
}

/**
 * Reactive Lumiverse UI state — virtual keyboard, side drawer, settings modal.
 * Each surface has a snapshot getter (resolves with the latest known state) and
 * a change subscription (fires on every change, returns an unsubscribe fn).
 * Free tier. Subscriptions keep the script alive while registered and are torn
 * down automatically when the script is disabled.
 *
 * Primary use case: mobile-safe widget positioning — reposition float widgets /
 * injected DOM when the on-screen keyboard opens (`insetBottom`) or the visual
 * viewport changes.
 */
export interface UIEventsAPI {
  /** The current virtual-keyboard snapshot. */
  getKeyboardState(): Promise<UIKeyboardState>;
  /** Subscribe to keyboard visibility / safe-area changes. Returns an unsubscribe fn. */
  onKeyboardChange(handler: (state: UIKeyboardState) => void): () => void;
  /** The current side-drawer snapshot. */
  getDrawerState(): Promise<UIDrawerState>;
  /** Subscribe to drawer open/close + tab changes. Returns an unsubscribe fn. */
  onDrawerChange(handler: (state: UIDrawerState) => void): () => void;
  /** The current settings-modal snapshot. */
  getSettingsState(): Promise<UISettingsState>;
  /** Subscribe to settings open/close + active-view changes. Returns an unsubscribe fn. */
  onSettingsChange(handler: (state: UISettingsState) => void): () => void;
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
   * modal.onDismiss((reason) => console.log(`modal closed: ${reason}`));
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
   * Mount a route-persistent, full-bleed portal into the app shell — a
   * full-screen overlay or persistent chrome beyond dock / drawer / float.
   * Returns a `MountedAppHandle` whose `.root` you fill via `api.ui.dom.*`.
   * Requires the `app_manipulation` permission.
   */
  mountApp(options?: MountAppOptions): MountedAppHandle;

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
   * tab.onActivate(() => console.log('user opened stats tab'));
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

  // ── Navigation (free tier) ─────────────────────────────────────────────
  // UI automation: enumerate + drive the same drawer / settings / command-
  // palette surfaces the built-in Command Palette uses. Free tier. Useful for
  // onboarding flows ("open the Connections drawer"), "fix it" deep links, or
  // building a custom command-palette-style picker over getDrawerTabs().

  /** List the discoverable drawer tabs (built-in + extension-contributed) visible to the user. */
  getDrawerTabs(): Promise<UIDrawerTab[]>;
  /** List the discoverable settings tabs visible to the user (role-restricted tabs are filtered out). */
  getSettingsTabs(): Promise<UISettingsTab[]>;
  /** Open the drawer to a specific tab id (built-in or extension-contributed). Resolves once the host dispatches the navigation. */
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

  // ── File picker (free tier) ────────────────────────────────────────────
  /**
   * Open the browser's native file picker and return the selected file(s).
   * The native dialog is the user-action gate, so this is free tier — but it
   * only resolves when the user actually picks (or cancels). Use it to import
   * JSON configs, character cards, images, etc. and feed the bytes into
   * `api.images.upload`, `api.db`, `api.files`, etc.
   *
   * Resolves with `[]` if the user cancels. **Rejects** if a selected file
   * exceeds `maxSizeBytes` (mirrors the host's throw).
   *
   * @example
   * const [file] = await api.ui.pickFile({ accept: ['.json'], maxSizeBytes: 1_000_000 });
   * if (file) {
   *   const config = JSON.parse(new TextDecoder().decode(file.bytes));
   * }
   */
  pickFile(options?: PickFileOptions): Promise<PickedFile[]>;

  /**
   * Reactive UI state sub-API: virtual keyboard, side drawer, settings modal —
   * snapshot getters + change subscriptions. Free tier. Useful for mobile-safe
   * widget positioning (reposition on keyboard open via `insetBottom`).
   */
  events: UIEventsAPI;

  /**
   * DOM injection sub-API. Allows scripts to inject HTML and CSS into the
   * Lumiverse frontend and receive DOM events back.
   * Requires the `app_manipulation` permission.
   */
  dom: DOMAPI;

  /**
   * Shared host-component sub-API. Mounts Lumiverse's first-party, themed
   * React components (switches, selects, sliders, model pickers, …) into a
   * script-owned container element. The mounted components automatically
   * inherit the active Lumiverse theme — no CSS to ship.
   *
   * Mount into a container you injected via {@link DOMAPI.inject}:
   * @example
   * const slot = api.ui.dom.inject('body', '<div></div>');
   * const toggle = api.ui.components.mountSwitch(slot, {
   *   checked: true,
   *   onChange: (on) => console.log('toggled', on),
   * });
   *
   * Requires the `app_manipulation` permission.
   */
  components: ComponentsAPI;
}

// ─── Shared Components API (api.ui.components.*, v1.0.0-rc.9) ──────────────────

/**
 * Handle to a mounted host shared-component. Returned synchronously by every
 * `api.ui.components.mount*` call (the underlying mount is dispatched
 * fire-and-forget, like {@link DOMAPI.inject}).
 *
 * @typeParam TOptions - the component's options type; `update()` accepts a
 *   partial of it.
 */
export interface MountedComponentHandle<TOptions = Record<string, unknown>> {
  /** Unique component ID (host-assigned, stable for this handle's lifetime). */
  readonly id: string;
  /**
   * Merge a partial of the original mount options into the live component.
   * Pass only the fields you want to change. Fire-and-forget (no round-trip).
   */
  update(patch: Partial<TOptions>): void;
  /**
   * Unmount the component and release host resources. The target container
   * element you mounted into is left in place. Idempotent.
   */
  destroy(): void;
}

/** Options for `api.ui.components.mountBadge()`. Mirrors the host `SpindleBadgeOptions`. */
export interface SpindleBadgeOptions {
  /** Badge text. Default: `""`. */
  text?: string;
  /** Accent color. Default: `'neutral'`. */
  color?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** Visual size. Default: `'md'`. */
  size?: 'sm' | 'md' | 'pill';
}

/** Options for `api.ui.components.mountSpinner()`. Mirrors the host `SpindleSpinnerOptions`. */
export interface SpindleSpinnerOptions {
  /** Diameter in CSS pixels. Default: `16`. */
  size?: number;
  /** Use the faster rotation variant. Default: `false`. */
  fast?: boolean;
}

/**
 * Handle to a mounted interactive (value-bearing) component. Adds an async
 * `getValue()` to the base handle.
 *
 * @typeParam TOptions - the component's options type
 * @typeParam TValue   - the component's value type (e.g. `boolean`, `string`)
 */
export interface MountedValueComponentHandle<TOptions = Record<string, unknown>, TValue = unknown>
  extends MountedComponentHandle<TOptions> {
  /**
   * Read the component's current value.
   *
   * **Async here**, unlike the host's synchronous `getValue()` — reading the
   * live value is a round-trip to the frontend across the worker boundary
   * (same reason {@link DOMHandle.read} is async). Auto-controlled state still
   * lives host-side; you don't need to mirror it.
   */
  getValue(): Promise<TValue>;
}

/**
 * Handle to a mounted collapsible section. Unlike other components, the host
 * owns the header chrome (title / chevron / badge) and hands back a `body`
 * element your script fully owns — append/inject your own content into it
 * exactly as you would a drawer-tab root.
 */
export interface MountedCollapsibleSectionHandle
  extends MountedComponentHandle<SpindleCollapsibleSectionOptions> {
  /** The section body — a {@link DOMHandle} your script owns. Inject/update content into it. */
  readonly body: DOMHandle;
  /** Read the current expanded state. Async (a frontend round-trip), like {@link MountedValueComponentHandle.getValue}. */
  isExpanded(): Promise<boolean>;
  /** Open the section. Fire-and-forget. */
  expand(): void;
  /** Close the section. Fire-and-forget. */
  collapse(): void;
  /** Flip the section's expanded state. Fire-and-forget. */
  toggle(): void;
}

/** Options for `api.ui.components.mountSwitch()`. Mirrors the host `SpindleSwitchOptions`. */
export interface SpindleSwitchOptions {
  /** Initial state. Default: `false`. */
  checked?: boolean;
  /** Fired on every toggle, with the new checked state. */
  onChange?: (checked: boolean) => void;
  /** Visual size. Default: `'md'`. */
  size?: 'sm' | 'md';
  /** Disable user interaction. Default: `false`. */
  disabled?: boolean;
  /** Accessible label. */
  ariaLabel?: string;
}

/** Options for `api.ui.components.mountTextInput()`. Mirrors the host `SpindleTextInputOptions`. */
export interface SpindleTextInputOptions {
  /** Initial value. Default: `""`. */
  value?: string;
  /** Fired on every user change, with the full current text. */
  onChange?: (value: string) => void;
  /** Placeholder text. */
  placeholder?: string;
  /** Focus on mount. Default: `false`. */
  autoFocus?: boolean;
  /** Disable user interaction. Default: `false`. */
  disabled?: boolean;
  /** Additional CSS class on the wrapper. */
  className?: string;
  /** Accessible label. */
  ariaLabel?: string;
}

/** Options for `api.ui.components.mountTextArea()`. Mirrors the host `SpindleTextAreaOptions`. */
export interface SpindleTextAreaOptions {
  /** Initial value. Default: `""`. */
  value?: string;
  /** Fired on every user change, with the full current text. */
  onChange?: (value: string) => void;
  /** Placeholder text. */
  placeholder?: string;
  /** Visible rows. Default: `4`. */
  rows?: number;
  /** Disable user interaction. Default: `false`. */
  disabled?: boolean;
  /** Additional CSS class on the wrapper. */
  className?: string;
  /** Accessible label. */
  ariaLabel?: string;
}

/** Options for `api.ui.components.mountNumericInput()`. Mirrors the host `SpindleNumericInputOptions`. */
export interface SpindleNumericInputOptions {
  /** Initial value. `null` means empty. Default: `null`. */
  value?: number | null;
  /** Fired on every user change. */
  onChange?: (value: number | null) => void;
  /** Allow `null` (empty) as a valid value. Default: `false`. */
  allowEmpty?: boolean;
  /** Restrict to integers. Default: `false`. */
  integer?: boolean;
  /** Lower bound. */
  min?: number;
  /** Upper bound. */
  max?: number;
  /** Native step size. */
  step?: number;
  /** Placeholder text. */
  placeholder?: string;
  /** Disable user interaction. Default: `false`. */
  disabled?: boolean;
}

/** Options for `api.ui.components.mountNumberStepper()`. Like `SpindleNumericInputOptions` minus `integer`; `step` defaults to `1`. */
export interface SpindleNumberStepperOptions {
  /** Initial value. `null` means empty. Default: `null`. */
  value?: number | null;
  /** Fired on every user change. */
  onChange?: (value: number | null) => void;
  /** Allow `null` (empty) as a valid value. Default: `false`. */
  allowEmpty?: boolean;
  /** Lower bound. */
  min?: number;
  /** Upper bound. */
  max?: number;
  /** Step size. Default: `1`. */
  step?: number;
  /** Placeholder text. */
  placeholder?: string;
  /** Disable user interaction. Default: `false`. */
  disabled?: boolean;
}

/** Options for `api.ui.components.mountCheckbox()`. Mirrors the host `SpindleCheckboxOptions`. */
export interface SpindleCheckboxOptions {
  /** Initial state. Default: `false`. */
  checked?: boolean;
  /** Fired on every toggle. */
  onChange?: (checked: boolean) => void;
  /** Label rendered next to the checkbox. */
  label?: string;
  /** Helper text rendered under the label. */
  hint?: string;
  /** Disable user interaction. Default: `false`. */
  disabled?: boolean;
}

/** Declarative value formatting for the range slider's header. */
export interface SpindleRangeSliderFormat {
  /** Decimal places to show. Defaults to whatever `step` implies (0 for integer sliders). */
  decimals?: number;
  /** Prepended before the value, e.g. `"$"`. */
  prefix?: string;
  /** Appended after the value, e.g. `"%"` or `"ms"`. */
  suffix?: string;
}

/** Options for `api.ui.components.mountRangeSlider()`. Mirrors the host `SpindleRangeSliderOptions`. */
export interface SpindleRangeSliderOptions {
  /** **Required.** Inclusive lower bound. */
  min: number;
  /** **Required.** Inclusive upper bound. */
  max: number;
  /** Initial committed value. Default: `min`. */
  value?: number;
  /** Snap increment. Default: `1`. */
  step?: number;
  /** Round to integers regardless of `step`. Default: `false`. */
  integer?: boolean;
  /** Fired once when a drag ends or the user taps the track (NOT during the drag). */
  onCommit?: (value: number) => void;
  /** Fired with the live value during a drag, and with `null` if the gesture ends without committing. */
  onDragValue?: (value: number | null) => void;
  /** If set, renders a header above the track with the label and live value. */
  label?: string;
  /** Helper text under the header. Ignored if `label` is omitted. */
  hint?: string;
  /** Declarative value formatting for the header. Ignored if `label` is omitted. */
  format?: SpindleRangeSliderFormat;
  /** Dim the track and ignore input. Default: `false`. */
  disabled?: boolean;
  /** Additional CSS class merged onto the track area. */
  className?: string;
}

/** Leading-cell content for a select option (avatar / icon / swatch / initial). Mirrors the host `SpindleSelectOptionLeading`. */
export type SpindleSelectOptionLeading =
  | { type: 'image';    src: string; rounded?: boolean; fallback?: { text?: string; background?: string } }
  | { type: 'icon-svg'; svg: string; color?: string }
  | { type: 'icon-url'; url: string }
  | { type: 'swatch';   color: string }
  | { type: 'initial';  text: string; background?: string; color?: string };

/** A single option in a select / multi-select. Mirrors the host `SpindleSelectOption`. */
export interface SpindleSelectOption {
  /** Stable value emitted to `onChange`. */
  value: string;
  /** Display label. */
  label: string;
  /** Secondary text rendered beneath the label. */
  sublabel?: string;
  /** Group key — options sharing a group cluster under a shared header. */
  group?: string;
  /** Leading-cell content (avatar / icon / swatch / initial). */
  leading?: SpindleSelectOptionLeading;
  /** Render as disabled. */
  disabled?: boolean;
}

/** Shared option fields for single- and multi-select. Mirrors `SpindleSelectOptionsBase`. */
export interface SpindleSelectOptionsBase {
  /** Available choices. */
  options?: SpindleSelectOption[];
  /** Placeholder shown when no value is selected. */
  placeholder?: string;
  /** Placeholder for the search input. */
  searchPlaceholder?: string;
  /** Minimum option count before the search input is shown. Default: `8`. */
  searchThreshold?: number;
  /** Message when no options were supplied. */
  emptyMessage?: string;
  /** Message when the search query has no matches. */
  noResultsMessage?: string;
  /** Force a trigger label (e.g. `"+ Add"`), ignoring current selection. */
  triggerLabel?: string;
  /** Custom icon shown on the trigger. */
  triggerIcon?: SpindleSelectOptionLeading;
  /** Additional CSS class on the trigger button. */
  triggerClassName?: string;
  /** Accessible label for the trigger. */
  ariaLabel?: string;
  /** Render the dropdown into `document.body` so it escapes `overflow:hidden` ancestors. Default: `true`. */
  portal?: boolean;
  /** Dropdown horizontal alignment relative to the trigger. Default: `'left'`. */
  align?: 'left' | 'right';
  /** Maximum dropdown height in CSS pixels. */
  maxHeight?: number;
  /** Minimum dropdown width in CSS pixels. */
  minWidth?: number;
  /** Disable interaction. */
  disabled?: boolean;
  /** Additional CSS class on the wrapper. */
  className?: string;
}

/** Options for `api.ui.components.mountSelect()` (searchable single-select). */
export interface SpindleSelectOptions extends SpindleSelectOptionsBase {
  /** Currently selected value. */
  value?: string;
  /** Fired when the user picks an option. */
  onChange?: (value: string) => void;
  /** Show a pinned "None" option that emits `onChange("")`. */
  clearable?: boolean;
  /** Label for the clear option. Default: `"None"`. */
  clearLabel?: string;
}

/** Options for `api.ui.components.mountMultiSelect()` (searchable multi-select). */
export interface SpindleMultiSelectOptions extends SpindleSelectOptionsBase {
  /** Currently selected values. */
  value?: string[];
  /** Fired when the selection changes. */
  onChange?: (value: string[]) => void;
}

/** Options for `api.ui.components.mountFolderDropdown()`. */
export interface SpindleFolderDropdownOptions {
  /** Available folder names. */
  folders?: string[];
  /** Currently selected folder. */
  value?: string;
  /** Fired when the user picks a folder. */
  onChange?: (folder: string) => void;
  /** Fired when the user creates a new folder inline. */
  onCreateFolder?: (name: string) => void;
  /** Placeholder shown when no folder is selected. */
  placeholder?: string;
  /** Disable interaction. */
  disabled?: boolean;
}

/** A host connection reference for the model combobox's connection-bound mode. */
export interface SpindleModelComboboxConnection {
  /** Connection kind. `'embedding'` is not yet supported in connection-bound mode — use manual mode. */
  kind: 'llm' | 'image' | 'tts' | 'embedding';
  /** Pin to a specific connection profile id instead of the active one. */
  id?: string;
}

/** Options for `api.ui.components.mountModelCombobox()`. Connection-bound mode (supply `connection`) is recommended; manual mode (supply `models` + `onRefresh`) is for custom catalogs. */
export interface SpindleModelComboboxOptions {
  /** Currently entered model ID. */
  value?: string;
  /** Fired on every change. */
  onChange?: (value: string) => void;
  /** Bind to a host-managed connection (recommended). When set, `models`/`loading`/`onRefresh` are ignored. */
  connection?: SpindleModelComboboxConnection;
  /** Manual mode: explicit model list. */
  models?: string[];
  /** Manual mode: model id → human label. */
  modelLabels?: Record<string, string>;
  /** Manual mode: show the spinner in the refresh affordance. */
  loading?: boolean;
  /** Manual mode: invoked when the user clicks refresh. */
  onRefresh?: () => void;
  /** Auto-refresh once the first time the input gains focus. */
  autoRefreshOnFocus?: boolean;
  /** Opaque key — when it changes, re-arms `autoRefreshOnFocus`. */
  refreshKey?: string;
  /** Visual density. Default: `'compact'`. */
  appearance?: 'compact' | 'standard' | 'editor';
  /** Placeholder text. Default: `"gpt-4o"`. */
  placeholder?: string;
  /** Message when the list is empty. */
  emptyMessage?: string;
  /** Message shown while loading. */
  loadingMessage?: string;
  /** Optional hint shown beneath the input. */
  browseHint?: string;
  /** Disable interaction. */
  disabled?: boolean;
}

/** Options for `api.ui.components.mountPagination()`. Fully controlled — call `update({ currentPage })` after navigating. */
export interface SpindlePaginationOptions {
  /** **Required.** Current page index (1-based). */
  currentPage: number;
  /** **Required.** Total page count. */
  totalPages: number;
  /** **Required.** Fired when the user clicks a page. */
  onPageChange: (page: number) => void;
  /** Current per-page selection (omit to hide the selector). */
  perPage?: number;
  /** Page-size choices. */
  perPageOptions?: number[];
  /** Fired when the user changes per-page. */
  onPerPageChange?: (n: number) => void;
  /** Total item count for the "Showing X–Y of N" summary. */
  totalItems?: number;
}

/** Options for `api.ui.components.mountCloseButton()`. */
export interface SpindleCloseButtonOptions {
  /** Click handler. */
  onClick?: () => void;
  /** Visual size. Default: `'md'`. */
  size?: 'sm' | 'md';
  /** Visual variant. Default: `'subtle'`. */
  variant?: 'subtle' | 'solid';
  /** Positioning behavior. Default: `'static'`. */
  position?: 'static' | 'absolute';
  /** Icon size override in CSS pixels. */
  iconSize?: number;
}

/** Options for `api.ui.components.mountCollapsibleSection()`. Mirrors the host `SpindleCollapsibleSectionOptions`. */
export interface SpindleCollapsibleSectionOptions {
  /** **Required.** Header text. */
  title: string;
  /** Inline SVG icon shown next to the title. */
  iconSvg?: string;
  /** Icon image URL. Mutually exclusive with `iconSvg`. */
  iconUrl?: string;
  /** Optional badge text rendered next to the title. */
  badge?: string | number;
  /** Initial expanded state. Default: `true`. */
  defaultExpanded?: boolean;
  /** Fired whenever the user toggles the section. */
  onToggle?: (expanded: boolean) => void;
}

/**
 * Mounts Lumiverse's first-party shared UI components into script-owned
 * container elements. Every `mount*` takes a {@link DOMHandle} (the slot you
 * injected) as its target and returns a {@link MountedComponentHandle}
 * synchronously. Requires the `app_manipulation` permission.
 *
 * The component catalog is being brought over from the host incrementally;
 * display-only badge/spinner landed first (v1.0.0-rc.9), with interactive
 * form components following.
 */
export interface ComponentsAPI {
  /** Mount an inline status/label badge. */
  mountBadge(target: DOMHandle, options?: SpindleBadgeOptions): MountedComponentHandle<SpindleBadgeOptions>;
  /** Mount a loading spinner. */
  mountSpinner(target: DOMHandle, options?: SpindleSpinnerOptions): MountedComponentHandle<SpindleSpinnerOptions>;
  /** Mount a toggle switch. `onChange` fires with the new boolean; `getValue()` reads the current state. */
  mountSwitch(target: DOMHandle, options?: SpindleSwitchOptions): MountedValueComponentHandle<SpindleSwitchOptions, boolean>;
  /** Mount a single-line text input. `onChange` fires with the current text; `getValue()` reads it. */
  mountTextInput(target: DOMHandle, options?: SpindleTextInputOptions): MountedValueComponentHandle<SpindleTextInputOptions, string>;
  /** Mount a multi-line text editor. `onChange` fires with the current text; `getValue()` reads it. */
  mountTextArea(target: DOMHandle, options?: SpindleTextAreaOptions): MountedValueComponentHandle<SpindleTextAreaOptions, string>;
  /** Mount a validated number input. `onChange`/`getValue()` use `number | null` (`null` = empty when `allowEmpty`). */
  mountNumericInput(target: DOMHandle, options?: SpindleNumericInputOptions): MountedValueComponentHandle<SpindleNumericInputOptions, number | null>;
  /** Mount a number input with +/- steppers. `onChange`/`getValue()` use `number | null`. */
  mountNumberStepper(target: DOMHandle, options?: SpindleNumberStepperOptions): MountedValueComponentHandle<SpindleNumberStepperOptions, number | null>;
  /** Mount a checkbox. `onChange` fires with the new boolean; `getValue()` reads the checked state. */
  mountCheckbox(target: DOMHandle, options?: SpindleCheckboxOptions): MountedValueComponentHandle<SpindleCheckboxOptions, boolean>;
  /** Mount a touch-friendly range slider. `options.min`/`options.max` are required; `onCommit` fires once per gesture; `onDragValue` fires live; `getValue()` reads the committed value. */
  mountRangeSlider(target: DOMHandle, options: SpindleRangeSliderOptions): MountedValueComponentHandle<SpindleRangeSliderOptions, number>;
  /** Mount a searchable single-select dropdown. `onChange` fires with the value; `getValue()` reads it. */
  mountSelect(target: DOMHandle, options?: SpindleSelectOptions): MountedValueComponentHandle<SpindleSelectOptions, string>;
  /** Mount a searchable multi-select dropdown. `onChange`/`getValue()` use `string[]`. */
  mountMultiSelect(target: DOMHandle, options?: SpindleMultiSelectOptions): MountedValueComponentHandle<SpindleMultiSelectOptions, string[]>;
  /** Mount a folder picker with inline "create folder". `onChange` fires with the folder; `getValue()` reads it. */
  mountFolderDropdown(target: DOMHandle, options?: SpindleFolderDropdownOptions): MountedValueComponentHandle<SpindleFolderDropdownOptions, string>;
  /** Mount the connection-aware model picker. `onChange` fires with the model id; `getValue()` reads it. (Manual-mode `refresh()` is a deferred follow-up.) */
  mountModelCombobox(target: DOMHandle, options?: SpindleModelComboboxOptions): MountedValueComponentHandle<SpindleModelComboboxOptions, string>;
  /** Mount page navigation. Fully controlled — `onPageChange` is required; call `update({ currentPage })` after navigating. No `getValue()`. */
  mountPagination(target: DOMHandle, options: SpindlePaginationOptions): MountedComponentHandle<SpindlePaginationOptions>;
  /** Mount a themed close (X) button. `onClick` fires on click. No `getValue()`. */
  mountCloseButton(target: DOMHandle, options?: SpindleCloseButtonOptions): MountedComponentHandle<SpindleCloseButtonOptions>;
  /** Mount a collapsible section. The host owns the header chrome; `handle.body` is a `DOMHandle` your script fills. `options.title` is required. */
  mountCollapsibleSection(target: DOMHandle, options: SpindleCollapsibleSectionOptions): MountedCollapsibleSectionHandle;
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

/**
 * Predicate-based `preventDefault` rule, evaluated synchronously on the
 * frontend before the script handler dispatches. Use when you want to
 * suppress browser defaults for a specific key / mouse button / modifier
 * combination only, while letting other events through (the binary
 * `preventDefault: true` cannot do this — it fires on every selector match).
 *
 * Each filter is optional. When multiple filters are set, ALL must match
 * for `preventDefault` to fire (AND semantics). An empty `{}` is treated
 * as "always match" (equivalent to `preventDefault: true`).
 *
 * Common shapes:
 *
 *   // Plain Enter on a textarea, but let Shift+Enter through (newline):
 *   { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } }
 *
 *   // Ctrl+S override (suppress browser Save dialog) but let other keys type:
 *   { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } }
 *
 *   // Right-click only (custom context menu on a button), pass left-click through:
 *   { onButtons: [2] }
 *
 * Available since LumiScript v0.27.5.
 */
export interface ConditionalPreventDefault {
  /**
   * Match a specific `KeyboardEvent.key` value (or any of several — OR
   * semantics within the array). When set, non-KeyboardEvents are skipped
   * (preventDefault does NOT fire for them).
   */
  onKeys?: string[];
  /**
   * Match a specific `KeyboardEvent.code` value (or any of several). Same
   * KeyboardEvent-only semantics as `onKeys`. Use this for physical-key
   * bindings (e.g. WASD) that should be layout-independent.
   */
  onCodes?: string[];
  /**
   * Match a specific `MouseEvent.button` value (or any of several).
   * 0=left, 1=middle, 2=right, 3=back, 4=forward. When set,
   * non-MouseEvents are skipped.
   */
  onButtons?: number[];
  /**
   * Modifier-key constraint. ALL of `require` must be held; NONE of
   * `exclude` may be held. Applies to KeyboardEvent and MouseEvent. When
   * set, other event types are skipped.
   */
  whenModifiers?: {
    require?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
    exclude?: Array<'shift' | 'ctrl' | 'alt' | 'meta'>;
  };
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
   *
   * **Conditional form** (v0.27.5+) — pass a `ConditionalPreventDefault`
   * object to fire `preventDefault` only when event data matches specific
   * key / button / modifier filters. The binary `true` fires on every
   * event matching the selector, which is the wrong granularity for cases
   * like "plain Enter on textarea but let Shift+Enter through" or
   * "Ctrl+S override but let other keystrokes type normally".
   */
  preventDefault?: boolean | ConditionalPreventDefault;
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
   *
   * **Conditional form** (v0.27.5+) — pass a `ConditionalPreventDefault`
   * object to fire `preventDefault` only when event data matches specific
   * key / button / modifier filters. Particularly useful for keyboard-driven
   * delegations where the selector matches every keystroke on the element
   * but only specific keys should suppress browser defaults.
   */
  preventDefault?: boolean | ConditionalPreventDefault;

  /**
   * When `true`, the frontend listener calls `event.stopPropagation()` after
   * dispatching, preventing host-side and other delegation listeners from
   * also reacting. Use when the script wants to fully own the matched
   * event. Default: `false` (compose with the host).
   */
  stopPropagation?: boolean;

  /**
   * When `true`, ALSO intercept events on elements inside the host's OPEN
   * shadow-DOM "islands" — the isolated subtrees Lumiverse renders when a
   * message's HTML contains a `<style>` tag or several inline styles. Without
   * this, controls the LLM emits inside a styled block (e.g. `<button>` /
   * `<input>` / `<select>` choice UIs) are unreachable: their events retarget
   * to the island host at `document.body`, so a light-DOM selector never
   * matches. Default: `false`.
   *
   * Notes:
   * - Only `mode: 'open'` islands are reachable (Lumiverse's are open).
   * - `change` / `submit` are `composed: false` and only surface because this
   *   mode attaches the listener *inside* the shadow root.
   * - Selectors are matched relative to the island: a leading
   *   `[data-component="MessageContent"] ` scope prefix is stripped and the
   *   host placement re-validated in light DOM. Selectors that reference a
   *   light-DOM ancestor mid-string, or span the boundary via `>` / sibling
   *   combinators, fall back to light-DOM-only matching.
   * - Pairs with `root: 'chat'`.
   */
  pierceShadow?: boolean;
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
  /**
   * Replace the element's inner HTML.
   *
   * **Sanitisation** (v1.0.0-rc.7+): `handle.update()` routes through
   * the host's DOMPurify pass with the same `FORBID_TAGS` set as
   * `api.ui.dom.inject()` (`iframe`, `frame`, `object`, `embed`,
   * `form`) and the same default attribute strip — inline `on*`
   * handlers, `formaction`, `srcdoc`, and `javascript:` URLs are all
   * removed. XSS-via-tag-injection is blocked at the frontend boundary
   * regardless of how `html` was constructed.
   *
   * Sanitisation is not a substitute for thinking about trust, though.
   * Injecting LLM-generated or remotely-fetched HTML is still worth
   * being deliberate about — DOMPurify blocks XSS vectors but not
   * socially-engineered text content, hostile inline `<style>` rules,
   * or misleading link text.
   */
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
   * **Sanitisation** (v1.0.0-rc.7+): the scoped path runs `html`
   * through the host's DOMPurify pass with the same `FORBID_TAGS` set
   * as `api.ui.dom.inject()` (`iframe`, `frame`, `object`, `embed`,
   * `form`) and the same default attribute strip (inline `on*`
   * handlers, `formaction`, `srcdoc`, `javascript:` URLs). Because
   * the manual scoped-insert can't reach orphaned parents via the
   * host's `ctx.dom.inject` API, the scoped path runs its own
   * DOMPurify call rather than delegating — but the threat model and
   * config match the host-API path exactly.
   */
  injectChild(target: string, html: string, options?: DOMInjectOptions): DOMHandle;
  /**
   * v1.0.0-rc.6 — read a serialized snapshot of this handle's current DOM
   * state from the frontend.
   *
   * The snapshot captures: `tag`, `attrs` (all attributes set on the
   * element, lowercase-keyed; internal `data-ls-*` / `data-spindle-ext`
   * wrapper attributes are stripped), `text` (full descendant
   * textContent), `childCount` (direct element children only — text
   * nodes not counted). Pass `{ html: true }` to also include
   * `innerHTML` — opt-in because innerHTML can be a large payload for
   * deep subtrees and many use cases (verify attrs, check text content)
   * don't need it.
   *
   * Which element gets snapshotted depends on the shape of what was
   * injected. For the overwhelmingly common single-root case
   * (`inject('body', '<button class="x">Hi</button>')` → snapshot has
   * `tag: 'button'`), the user's root element is returned directly.
   * For multi-root content (`<span>1</span><span>2</span>`) or
   * text-only content, the snapshot falls back to LumiScript's wrapper
   * element (`tag: 'div'`, accurate `childCount`).
   *
   * Resolution outcomes:
   *   - Resolves with `SerializedDOMElement` when the read succeeded.
   *   - Resolves with `null` when the parent knows about the element
   *     but the frontend's `elementMap` no longer has it at read-time
   *     (host shell tore down a parent container, frontend was reloaded
   *     between dispatch and snapshot, etc.) — clean async-race
   *     surface for "element vanished out from under us".
   *   - Rejects with `DomHandleReleasedError` when the handle has been
   *     released parent-side: script previously called `.remove()` on
   *     this handle, `api.ui.dom.cleanup()` swept this script's state,
   *     etc. Matches sibling methods (`update` / `remove` /
   *     `makeDraggable`) — calling `read()` on a stale handle is a
   *     script bug, surface as a throw.
   *
   * Deliberate omissions for v1.0: computed styles, bounding rect,
   * recursive child snapshots, property snapshots (`.value` /
   * `.checked`). Form-control live values can be read via
   * `delegate(selector, 'input', ...)` event handlers; for deep markup
   * traversal, request `{ html: true }` and parse client-side.
   *
   * Async because it routes through a frontend roundtrip (the DOM lives
   * there, not on the backend). Same request-response correlation
   * pattern as `api.ui.showContextMenu`.
   */
  read(options?: DOMReadOptions): Promise<SerializedDOMElement | null>;
}

/** Options for `DOMHandle.read()`. */
export interface DOMReadOptions {
  /**
   * Also include `innerHTML` in the snapshot. Default `false` — most
   * use cases (verify attrs, check text, structural inspection) don't
   * need the full markup, and the omission keeps the IPC payload small.
   * Set `true` when the script needs to traverse the descendant markup.
   */
  html?: boolean;
}

/** Snapshot returned by `DOMHandle.read()`. */
export interface SerializedDOMElement {
  /** Lowercase tag name (e.g. `'div'`, `'button'`). */
  tag: string;
  /**
   * All attributes set on the element, keyed by lowercased attribute
   * name. Includes `id`, `class`, `style`, `data-*`, `aria-*`, etc.
   * Empty object if no attributes are set.
   */
  attrs: Record<string, string>;
  /**
   * Element's `textContent` — concatenated text from this element and
   * all descendants. Empty string if the element has no text content.
   */
  text: string;
  /**
   * Number of direct element children. Text nodes and comment nodes are
   * NOT counted. Use the `html` option to inspect the full subtree.
   */
  childCount: number;
  /**
   * Element's `innerHTML`. Present only when `read({ html: true })` was
   * passed. The markup reflects whatever the frontend currently has —
   * including any host-side modifications (e.g. Lumiverse markdown
   * rendering, scrollbar synthesis) that mutated the originally-injected
   * HTML.
   */
  html?: string;
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
   * Gender identity marker: `0` = unspecified, `1` = feminine, `2` = masculine.
   * Note: upstream docs (council.md) describe a wider four-value range
   * (0=feminine, 1=masculine, 2=neutral, 3=any) — this is a documented
   * type-vs-doc inconsistency upstream; LumiScript matches the actual typed
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
  /** Host-side correlation id for this invocation. Populated on the Council path. */
  requestId?: string;
  /**
   * Personality snapshot of the Council member that triggered the invocation.
   * Populated only when the tool was invoked as part of a Council execution
   * cycle. `undefined` for all other paths — inline function-calling and
   * `api.tools.invoke()`.
   */
  councilMember?: import('lumiverse-spindle-types').CouncilMemberContext;
  /**
   * Structured chat context for Council invocations — the same content the
   * host flattens into `args.context`, but as a typed `LLMMessage[]` with
   * role boundaries preserved. Populated on the Council path; `undefined`
   * for non-Council paths. Multi-part (text+image) message content is
   * flattened to its text portion before delivery.
   *
   * Prefer this over `args.context` when available — the structured form
   * gives the analyst LLM real turn-taking boundaries and voice precedent
   * from prior assistant messages, closing most of the behavioural gap
   * between extension tools and the built-in sidecar tools. The
   * `ls:council-prompt` helper's `buildCouncilMessages` uses these
   * automatically when you pass them through via the `contextMessages`
   * option.
   */
  contextMessages?: LLMMessage[];
  /**
   * @internal #11 P7-F4 — the invoking script's id, stamped by `api.tools.invoke` so the quickjs fire
   * path can fast-reject a self-reentrant invoke. The host tool wrapper EXTRACTS and STRIPS this before
   * the child handler's ctx is built, so a user tool handler never receives it (ctx stays `undefined`
   * for `api.tools.invoke`, as documented). Not part of the public contract — do not read it.
   */
  __lsCallerScriptId?: string;
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
   *   ], { connectionName: 'my-connection' });
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
  /**
   * Environment context populated by the macro engine at resolution time.
   *
   * **Note on `env.character.id`:** Lumiverse populates `env.character` with
   * card data (name, description, etc.) but the `id` field is NOT reliably
   * present here — it's character-card metadata, not chat-level state. For
   * the active character UUID, prefer `await api.chats.getActive()` and read
   * `chat.characterId`. LumiScript's built-in macros use the sync shortcut
   * `globalThis.__lsActiveCharId` (set by the engine after every active-
   * context refresh) when an `await` would slow down a tight handler.
   */
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
  /**
   * `false` when the host is performing a dry / non-committing macro
   * resolution (e.g. prompt previews, chat-title regeneration). Handlers
   * with side effects (disk writes, event emissions, external HTTP, mutating
   * `api.*` calls) MUST skip those when `commit === false` — the resolved
   * value isn't going to be used, and side effects would happen against an
   * imaginary timeline.
   *
   * Only an explicit `false` signals a dry resolve — guard writes with
   * `ctx.commit !== false`, not `ctx.commit === true`.
   */
  commit?: boolean;
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
   * Per-call macro overrides supplied by the caller.
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
 * Operator envelope for `DbFilter<T>`. Each `$op` key maps to its argument
 * type. All keys inside a single envelope must start with `$`; mixed-key
 * envelopes (mix of `$op` and plain field keys) throw at filter-parse time.
 *
 * Available from LumiScript 0.20.0+.
 *
 * @example
 *   { ts:     { $gte: Date.now() - 3600_000 } }
 *   { tags:   { $in:  ['a', 'b'] } }
 *   { author: { $exists: true } }
 *   { name:   { $regex: /alice/i } }
 */
export interface DbFilterOperators<V = unknown> {
  /** Structural equality. */
  $eq?:     V;
  /** Structural inequality. */
  $ne?:     V;
  /** Numeric `>` — type-mismatch evaluates to false (never throws). */
  $gt?:     V;
  /** Numeric `>=` — type-mismatch evaluates to false (never throws). */
  $gte?:    V;
  /** Numeric `<` — type-mismatch evaluates to false (never throws). */
  $lt?:     V;
  /** Numeric `<=` — type-mismatch evaluates to false (never throws). */
  $lte?:    V;
  /** Membership in an array. Empty array → matches nothing. */
  $in?:     readonly V[];
  /** Non-membership in an array. Empty array → matches everything (sans missing field). */
  $nin?:    readonly V[];
  /** Field presence — `null` counts as present. */
  $exists?: boolean;
  /**
   * String pattern. Accepts a `RegExp` instance, or `{ $regex: 'pat', $options?: 'i' }`.
   * Direct `RegExp` at the field-value level is also accepted as a shorthand:
   * `{ name: /alice/i }`.
   */
  $regex?:  RegExp | { $regex: string; $options?: string };
}

/**
 * Filter shapes accepted by `find()` / `findOne()` / `update()` / `delete()` /
 * `count()`:
 *
 * - `undefined` → matches all records (sugar for "operate on everything").
 * - Function `(r) => boolean` → caller predicate. Full expressive power,
 *   but not serialisable across the worker↔host boundary (runs in-script).
 * - Object literal — two flavours, can NOT be mixed in a single envelope:
 *   - **Plain equality**: `{ 'a.b': value }` matches deep-equally with
 *     dot-notation path resolution. Arrays compared via `JSON.stringify`.
 *   - **Operator envelope**: `{ field: { $gt: 5 } }` / `{ tags: { $in: [...] } }` /
 *     etc. All keys inside the envelope must start with `$` (mixed-key
 *     envelopes throw).
 *
 * Supported operators (LumiScript 0.20.0+): `$eq`, `$ne`, `$gt`, `$gte`,
 * `$lt`, `$lte`, `$in`, `$nin`, `$exists`, `$regex` — see `DbFilterOperators`.
 *
 * `RegExp` is accepted at the field-value level as a shorthand for
 * `{ $regex: <re> }` — `{ name: /alice/i }` is equivalent to
 * `{ name: { $regex: /alice/i } }`.
 */
export type DbFilter<T = DbRecord> =
  | undefined
  | { [K in keyof T]?: T[K] | RegExp | DbFilterOperators<T[K]> }
  | ((record: T) => boolean);

/**
 * Per-collection retention policy (opt-in). Enforced lazily ON INSERT
 * (`insert` / `insertMany`) — there is no background timer, so a collection
 * that stops receiving inserts keeps its records until the next insert.
 * Reads, `update`, and `delete` never prune.
 *
 * Both bounds may be combined. Per insert: expiry (`maxAgeMs`) is applied to
 * the EXISTING records first, then the newly-inserted record(s) are appended,
 * then `maxRecords` caps the total by dropping the oldest (by insertion order).
 * Applying expiry before the append means a freshly-inserted record is never
 * pruned by `maxAgeMs` in the same call (even if given an explicitly old
 * `createdAt`), so `insert()` never returns a record it didn't persist. When an
 * `insertMany` batch is larger than `maxRecords`, only the records that survive
 * the cap are returned (and broadcast). Pruning is silent — no
 * `ls:collection:deleted` event fires for auto-pruned records.
 *
 * Available from LumiScript 1.4.0+.
 */
export interface DbRetention {
  /**
   * Keep at most this many records. On insert, once the collection would
   * exceed this count the oldest records (by insertion order) are dropped
   * until it fits. Must be a positive integer.
   */
  maxRecords?: number;
  /**
   * Drop records older than this many milliseconds (measured from each
   * record's `createdAt`) when an insert touches the collection. Must be a
   * positive number.
   */
  maxAgeMs?: number;
}

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
  /**
   * Optional retention policy — auto-prune old records on insert. See
   * {@link DbRetention}. Omit for unbounded retention (the default). Like
   * `schema`, the policy from the FIRST `collection()` call for a given
   * (scope, name) wins; later calls with a different policy reuse the cached
   * handle.
   */
  retention?: DbRetention;
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
 * Optional read policy for an `api.rpc.sync()` / `api.rpc.handle()` endpoint.
 * Mirrors Spindle's `SharedRpcEndpointPolicyDTO`.
 *
 * Three modes:
 *   - **omit policy** → legacy default: requester must hold every gated
 *     permission the owner currently has. Prevents confused-deputy-style
 *     exploits where one extension uses another as a proxy for permissions
 *     it doesn't own. Backward-compatible with pre-RC2 scripts.
 *   - **`{ requires: [] }`** → readable without delegating any owner
 *     permissions. Use for intentionally narrow / "public" endpoints
 *     where requester permissions are irrelevant (presence, version,
 *     status snapshots).
 *   - **`{ requires: ['name'] }`** → both owner AND requester must hold
 *     `'name'`. Inside the handler, gated api.* calls are limited to
 *     this declared set — unrelated owner permissions do not bleed into
 *     the delegated call.
 *
 * @example
 * await api.rpc.sync('presence.online', true, { policy: { requires: [] } });
 *
 * @example
 * await api.rpc.handle('logs.tail', tailLogs, { policy: { requires: ['chat_mutation'] } });
 */
export interface RpcPolicy {
  /**
   * Gated permission names required to read this endpoint.
   * - omitted entirely → "inherit all owner permissions" (legacy default)
   * - `[]` → no permission delegation; readable by any extension
   * - `['name', ...]` → both owner and requester need every listed permission
   */
  requires?: readonly string[];
}

/**
 * Context delivered to an `api.rpc.handle()` callback when another extension
 * reads its endpoint. Mirrors Spindle's `SharedRpcRequestContextDTO`.
 */
export interface RpcRequestContext {
  /** Fully-qualified endpoint being read (e.g. `lumiscript.tracker.state`). */
  endpoint: string;
  /** Identifier of the extension performing the read. */
  requesterExtensionId: string;
  /**
   * Gated permissions available to THIS delegated handler call, per the
   * endpoint's policy. Inside the handler, gated api.* calls are limited
   * to this set — unrelated owner permissions are NOT delegated. Read-only
   * informational signal for handler logic; the host enforces the actual
   * restriction.
   *
   * Values by policy:
   *   - no policy → full owner permissions (legacy behaviour)
   *   - `requires: []` → empty array
   *   - `requires: ['name']` → exactly the listed names (intersection of
   *     owner-grants and requester-grants)
   */
  effectivePermissions: readonly string[];
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
    options?: { as?: string; policy?: RpcPolicy },
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
    options?: { as?: string; policy?: RpcPolicy },
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
   * Pass through as `contextMessages: ctx.contextMessages` from your
   * handler; the helper falls back to the flattened-string path when not
   * provided.
   */
  contextMessages?: LLMMessage[];
}
