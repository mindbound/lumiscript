/**
 * Mock SpindleAPI factory for bun:test.
 *
 * Every leaf method is a mock() with safe defaults. Tests override specific
 * mocks as needed. The mock covers all surfaces used by LumiScript's API
 * builders — unused Spindle surfaces are stubbed to satisfy the type.
 */

import { mock } from 'bun:test';
import type {
  BackendProcessHandle,
  BackendProcessInfoDTO,
  BackendProcessLifecycleEventDTO,
  BackendProcessSpawnOptionsDTO,
} from 'lumiverse-spindle-types';

/**
 * Permissive shape for the mock's `backendProcesses` slot. Accepts both
 * the default no-op stub form (Mock-typed function refs) and the real-
 * routing form installed by `installScriptRunnerMockIpc()` (plain
 * function refs that close over the IPC pair's state). The loose typing
 * lets tests swap implementations without TS narrowing pain.
 */
export interface MockBackendProcesses {
  spawn:       (opts: BackendProcessSpawnOptionsDTO)              => Promise<BackendProcessHandle>;
  list:        ()                                                 => Promise<BackendProcessInfoDTO[]>;
  get:         (processId: string)                                => Promise<BackendProcessInfoDTO | null>;
  stop:        (processId: string)                                => Promise<void>;
  onLifecycle: (handler: (event: BackendProcessLifecycleEventDTO) => void) => () => void;
  onMessage:   (handler: (event: { processId: string; payload: unknown; userId: string }) => void) => () => void;
}

/**
 * Create a fresh SpindleAPI-shaped mock. Call this in beforeEach to get
 * a clean mock per test (done automatically by setup.ts preload).
 */
export function createMockSpindle() {
  return {
    // ─── Events ────────────────────────────────────────────────────────
    on: mock(() => mock(() => {})),  // returns unsubscribe fn

    // ─── Macros ────────────────────────────────────────────────────────
    registerMacro: mock(() => {}),
    unregisterMacro: mock(() => {}),
    updateMacroValue: mock(() => {}),

    // ─── Interceptor / Context Handler ─────────────────────────────────
    registerInterceptor: mock(() => {}),
    registerContextHandler: mock(() => {}),
    registerMacroInterceptor: mock(() => {}),
    registerMessageContentProcessor: mock(() => {}),

    // ─── Council (read-only, free tier) ────────────────────────────────
    council: {
      getSettings: mock(() => Promise.resolve({
        councilMode: false,
        members: [],
        toolsSettings: {
          mode: 'sidecar' as const,
          timeoutMs: 30000,
          sidecarContextWindow: 10,
          includeUserPersona: true,
          includeCharacterInfo: true,
          includeWorldInfo: true,
          allowUserControl: true,
          maxWordsPerTool: 0,
        },
      })),
      getMembers: mock(() => Promise.resolve([])),
      getAvailableLumiaItems: mock(() => Promise.resolve([])),
    },

    // ─── Tools ─────────────────────────────────────────────────────────
    registerTool: mock(() => {}),
    unregisterTool: mock(() => {}),

    // ─── Generation ────────────────────────────────────────────────────
    generate: {
      raw: mock(() => Promise.resolve({ content: '', tool_calls: [] })),
      quiet: mock(() => Promise.resolve({})),
      batch: mock(() => Promise.resolve({})),
      dryRun: mock(() => Promise.resolve({ messages: [], token_count: 0 })),
      observe: mock(() => ({
        onStart: mock(() => {}),
        onToken: mock(() => {}),
        onEnd: mock(() => {}),
        onStop: mock(() => {}),
        dispose: mock(() => {}),
        content: '',
        reasoning: '',
      })),
      rawStream: mock(() => (async function* () {
        yield { type: 'done', content: '', finish_reason: 'stop' };
      })()),
    },

    // ─── Storage ───────────────────────────────────────────────────────
    storage: {
      read: mock(() => Promise.resolve('')),
      write: mock(() => Promise.resolve()),
      readBinary: mock(() => Promise.resolve(new Uint8Array())),
      writeBinary: mock(() => Promise.resolve()),
      delete: mock(() => Promise.resolve()),
      list: mock(() => Promise.resolve([])),
      exists: mock(() => Promise.resolve(false)),
      mkdir: mock(() => Promise.resolve()),
      move: mock(() => Promise.resolve()),
      stat: mock(() => Promise.resolve({ exists: false, isFile: false, isDirectory: false, sizeBytes: 0, modifiedAt: '' })),
      getJson: mock(((_path: string, options?: { fallback?: unknown }) => Promise.resolve(options?.fallback ?? null)) as any),
      setJson: mock(() => Promise.resolve()),
    },

    // ─── User Storage ──────────────────────────────────────────────────
    userStorage: {
      read: mock(() => Promise.resolve('')),
      write: mock(() => Promise.resolve()),
      delete: mock(() => Promise.resolve()),
      list: mock(() => Promise.resolve([])),
      exists: mock(() => Promise.resolve(false)),
      mkdir: mock(() => Promise.resolve()),
      getJson: mock(((_path: string, options?: { fallback?: unknown; userId?: string }) => Promise.resolve(options?.fallback ?? null)) as any),
      setJson: mock(() => Promise.resolve()),
    },

    // ─── Enclave ───────────────────────────────────────────────────────
    enclave: {
      put: mock(() => Promise.resolve()),
      get: mock(() => Promise.resolve(null)),
      delete: mock(() => Promise.resolve(false)),
      has: mock(() => Promise.resolve(false)),
      list: mock(() => Promise.resolve([])),
    },

    // ─── Ephemeral ─────────────────────────────────────────────────────
    ephemeral: {
      read: mock(() => Promise.resolve('')),
      write: mock(() => Promise.resolve()),
      readBinary: mock(() => Promise.resolve(new Uint8Array())),
      writeBinary: mock(() => Promise.resolve()),
      delete: mock(() => Promise.resolve()),
      list: mock(() => Promise.resolve([])),
      stat: mock(() => Promise.resolve({ sizeBytes: 0, createdAt: '', expiresAt: undefined })),
      clearExpired: mock(() => Promise.resolve(0)),
      getPoolStatus: mock(() => Promise.resolve({
        globalMaxBytes: 0, globalUsedBytes: 0, globalReservedBytes: 0, globalAvailableBytes: 0,
        extensionMaxBytes: 0, extensionUsedBytes: 0, extensionReservedBytes: 0, extensionAvailableBytes: 0,
        fileCount: 0, fileCountMax: 0,
      })),
      requestBlock: mock(() => Promise.resolve({ reservationId: 'mock-res', sizeBytes: 0, expiresAt: '' })),
      releaseBlock: mock(() => Promise.resolve()),
    },

    // ─── Chat Mutation ─────────────────────────────────────────────────
    chat: {
      getMessages: mock(() => Promise.resolve([])),
      appendMessage: mock(() => Promise.resolve({ id: 'mock-msg-id' })),
      updateMessage: mock(() => Promise.resolve()),
      deleteMessage: mock(() => Promise.resolve()),
      setMessageHidden: mock(() => Promise.resolve()),
      setMessagesHidden: mock(() => Promise.resolve()),
      isMessageHidden: mock(() => Promise.resolve(false)),
      setStyleMode: mock(() => Promise.resolve()),
    },

    // ─── Connections ───────────────────────────────────────────────────
    connections: {
      list: mock(() => Promise.resolve([])),
      get: mock(() => Promise.resolve(null)),
    },

    // ─── Memories (gated: memories) — Phase 1: cortex + chatMemory + stats ──
    memories: {
      cortex: {
        getConfig: mock(() => Promise.resolve({ enabled: false, entityTracking: false, entityExtractionMode: 'heuristic', salienceScoring: false })),
        putConfig: mock(() => Promise.resolve({ enabled: false, entityTracking: false, entityExtractionMode: 'heuristic', salienceScoring: false })),
        query: mock(() => Promise.resolve({ memories: [], entityContext: [], activeRelationships: [], arcContext: null, stats: { candidatePoolSize: 0, vectorSearchResults: 0, entitiesMatched: 0, scoreFusionApplied: false, topScore: 0, retrievalTimeMs: 0 } })),
        queryLinked: mock(() => Promise.resolve({ vaults: [], interlinks: [] })),
        getCached: mock(() => Promise.resolve(null)),
        getCachedLinked: mock(() => Promise.resolve(null)),
        invalidateCache: mock(() => Promise.resolve()),
        invalidateLinkedCache: mock(() => Promise.resolve()),
      },
      entities: {
        list: mock(() => Promise.resolve([])),
        get: mock(() => Promise.resolve(null)),
        findByName: mock(() => Promise.resolve(null)),
        upsert: mock(() => Promise.resolve({ id: 'mock-entity', name: 'Mock', entityType: 'character' })),
        updateStatus: mock(() => Promise.resolve({ id: 'mock-entity' })),
        addFacts: mock(() => Promise.resolve({ id: 'mock-entity' })),
        getFacts: mock(() => Promise.resolve([])),
        updateEmotionalValence: mock(() => Promise.resolve({ id: 'mock-entity' })),
      },
      relations: {
        list: mock(() => Promise.resolve([])),
        listAll: mock(() => Promise.resolve([])),
        forEntity: mock(() => Promise.resolve([])),
        forEntities: mock(() => Promise.resolve([])),
        upsert: mock(() => Promise.resolve(null)),
      },
      consolidations: {
        list: mock(() => Promise.resolve([])),
        latestArc: mock(() => Promise.resolve(null)),
        run: mock(() => Promise.resolve()),
      },
      salience: {
        list: mock(() => Promise.resolve([])),
      },
      vaults: {
        list: mock(() => Promise.resolve([])),
        get: mock(() => Promise.resolve(null)),
        getChunks: mock(() => Promise.resolve([])),
        create: mock(() => Promise.resolve({ id: 'mock-vault', name: 'Mock', entityCount: 0, relationCount: 0, chunkCount: 0 })),
        rename: mock(() => Promise.resolve(true)),
        delete: mock(() => Promise.resolve(true)),
        reindex: mock(() => Promise.resolve({ mode: 'structural', chunkCount: 0 })),
      },
      links: {
        list: mock(() => Promise.resolve([])),
        attach: mock(() => Promise.resolve([])),
        remove: mock(() => Promise.resolve(true)),
        toggle: mock(() => Promise.resolve(true)),
      },
      chatMemory: {
        listChunks: mock(() => Promise.resolve([])),
        get: mock(() => Promise.resolve({ chunks: [], formatted: '', count: 0, enabled: false, queryPreview: '', settingsSource: 'global', chunksAvailable: 0, chunksPending: 0 })),
        warm: mock(() => Promise.resolve({ status: 'skipped', reason: 'chat_vectorization_disabled' })),
        invalidate: mock(() => Promise.resolve()),
      },
      stats: {
        usage: mock(() => Promise.resolve({ entityCount: 0, relationCount: 0, salienceRecordCount: 0, consolidationCount: 0 })),
        ingestionStatus: mock(() => Promise.resolve(null)),
        ingestionTelemetry: mock(() => Promise.resolve({ samples: 0, last: null, averages: { fontMs: 0, heuristicMs: 0, sidecarMs: 0, graphMs: 0, dbMs: 0, totalMs: 0 } })),
      },
    },

    // ─── Web search (gated: web_search) ────────────────────────────────
    webSearch: {
      query: mock(() => Promise.resolve({ query: '', results: [] })),
      getSettings: mock(() => Promise.resolve({
        enabled: false, provider: 'searxng', apiUrl: '', requestTimeoutMs: 10000,
        defaultResultCount: 5, maxResultCount: 20, maxPagesToScrape: 3,
        maxCharsPerPage: 4000, language: 'en', safeSearch: 1, engines: [], hasApiKey: false,
      })),
    },

    // ─── Users (free tier) ─────────────────────────────────────────────
    users: {
      isVisible: mock(() => Promise.resolve(true)),
      getRole: mock(() => Promise.resolve('user')),
    },

    // ─── Version (free tier) ───────────────────────────────────────────
    version: {
      getBackend: mock(() => Promise.resolve('1.0.0')),
      getFrontend: mock(() => Promise.resolve('1.0.0')),
    },

    // ─── UI navigation (free tier) ─────────────────────────────────────
    ui: {
      getDrawerTabs:       mock(() => Promise.resolve([])),
      getSettingsTabs:     mock(() => Promise.resolve([])),
      openDrawerTab:       mock(() => Promise.resolve()),
      closeDrawer:         mock(() => Promise.resolve()),
      openSettings:        mock(() => Promise.resolve()),
      closeSettings:       mock(() => Promise.resolve()),
      openCommandPalette:  mock(() => Promise.resolve()),
      closeCommandPalette: mock(() => Promise.resolve()),
    },

    // ─── Characters ────────────────────────────────────────────────────
    characters: {
      list: mock(() => Promise.resolve({ data: [], total: 0 })),
      get: mock(() => Promise.resolve(null)),
      create: mock(() => Promise.resolve({ id: 'mock-char-id' })),
      update: mock(() => Promise.resolve({ id: 'mock-char-id' })),
      delete: mock(() => Promise.resolve(true)),
    },

    // ─── Chats ─────────────────────────────────────────────────────────
    chats: {
      list: mock(() => Promise.resolve({ data: [], total: 0 })),
      get: mock(() => Promise.resolve(null)),
      getActive: mock(() => Promise.resolve(null)),
      update: mock(() => Promise.resolve({})),
      delete: mock(() => Promise.resolve(true)),
      getMemories: mock(() => Promise.resolve({ results: [] })),
    },

    // ─── World Books ───────────────────────────────────────────────────
    world_books: {
      list: mock(() => Promise.resolve({ data: [], total: 0 })),
      get: mock(() => Promise.resolve(null)),
      create: mock(() => Promise.resolve({ id: 'mock-wb-id' })),
      update: mock(() => Promise.resolve({ id: 'mock-wb-id' })),
      delete: mock(() => Promise.resolve(true)),
      entries: {
        list: mock(() => Promise.resolve({ data: [], total: 0 })),
        get: mock(() => Promise.resolve(null)),
        create: mock(() => Promise.resolve({ id: 'mock-entry-id' })),
        update: mock(() => Promise.resolve({ id: 'mock-entry-id' })),
        delete: mock(() => Promise.resolve(true)),
      },
      getActivated: mock(() => Promise.resolve([])),
      getGlobal: mock(() => Promise.resolve([])),
      setGlobal: mock(() => Promise.resolve([])),
      activateGlobal: mock(() => Promise.resolve([])),
      deactivateGlobal: mock(() => Promise.resolve([])),
    },

    // ─── Personas ──────────────────────────────────────────────────────
    personas: {
      list: mock(() => Promise.resolve({ data: [], total: 0 })),
      get: mock(() => Promise.resolve(null)),
      getDefault: mock(() => Promise.resolve(null)),
      getActive: mock(() => Promise.resolve(null)),
      create: mock(() => Promise.resolve({ id: 'mock-persona-id' })),
      update: mock(() => Promise.resolve({ id: 'mock-persona-id' })),
      delete: mock(() => Promise.resolve(true)),
      switchActive: mock(() => Promise.resolve()),
      getWorldBook: mock(() => Promise.resolve(null)),
    },

    // ─── Global add-ons (persona-adjacent) ─────────────────────────────
    global_addons: {
      list: mock(() => Promise.resolve({ data: [], total: 0 })),
      get: mock(() => Promise.resolve(null)),
      update: mock(() => Promise.resolve({ id: 'mock-addon-id' })),
    },

    // ─── Presets (v1.0.0-rc.2+) ────────────────────────────────────────
    presets: {
      list:   mock(() => Promise.resolve({ data: [], total: 0 })),
      get:    mock(() => Promise.resolve(null)),
      create: mock(() => Promise.resolve({ id: 'mock-preset-id' })),
      update: mock(() => Promise.resolve({ id: 'mock-preset-id' })),
      delete: mock(() => Promise.resolve(true)),
      blocks: {
        list:   mock(() => Promise.resolve([])),
        get:    mock(() => Promise.resolve(null)),
        create: mock(() => Promise.resolve({ id: 'mock-block-id' })),
        update: mock(() => Promise.resolve({ id: 'mock-block-id' })),
        delete: mock(() => Promise.resolve(true)),
      },
      categories: {
        list:   mock(() => Promise.resolve([])),
      },
    },

    // ─── Images (v1.0.0-rc.5+) ─────────────────────────────────────────
    images: {
      list:              mock(() => Promise.resolve({ data: [], total: 0 })),
      get:               mock(() => Promise.resolve(null)),
      upload:            mock(() => Promise.resolve({
        id:                          'mock-image-id',
        original_filename:           'mock.png',
        mime_type:                   'image/png',
        width:                       1,
        height:                      1,
        has_thumbnail:               false,
        url:                         '/api/images/mock-image-id',
        specificity:                 'full',
        owner_extension_identifier:  'lumiscript',
        owner_character_id:          null,
        owner_chat_id:               null,
        created_at:                  0,
      })),
      uploadMany:        mock(() => Promise.resolve([])),
      uploadFromDataUrl: mock(() => Promise.resolve({
        id:                          'mock-image-id',
        original_filename:           'data-url.png',
        mime_type:                   'image/png',
        width:                       1,
        height:                      1,
        has_thumbnail:               false,
        url:                         '/api/images/mock-image-id',
        specificity:                 'full',
        owner_extension_identifier:  'lumiscript',
        owner_character_id:          null,
        owner_chat_id:               null,
        created_at:                  0,
      })),
      delete:            mock(() => Promise.resolve(true)),
    },

    // ─── Theme (v1.0.0-rc.5+) ──────────────────────────────────────────
    theme: {
      apply:             mock(() => Promise.resolve()),
      applyPalette:      mock(() => Promise.resolve()),
      clear:             mock(() => Promise.resolve()),
      getCurrent:        mock(() => Promise.resolve({
        id:             'lumiverse-purple',
        name:           'Lumiverse Purple',
        mode:           'dark',
        accent:         { h: 280, s: 70, l: 60 },
        enableGlass:    true,
        radiusScale:    1,
        fontScale:      1,
        uiScale:        1,
        characterAware: false,
      })),
      extractColors:     mock(() => Promise.resolve({
        dominant:    { r: 100, g: 50, b: 200 },
        regions:     {
          top:    { r: 100, g: 50, b: 200 },
          center: { r: 100, g: 50, b: 200 },
          bottom: { r: 100, g: 50, b: 200 },
          left:   { r: 100, g: 50, b: 200 },
          right:  { r: 100, g: 50, b: 200 },
        },
        flatness:    { top: 0.5, center: 0.5, bottom: 0.5, left: 0.5, right: 0.5, full: 0.5 },
        average:     { r: 100, g: 50, b: 200 },
        isLight:     false,
        dominantHsl: { h: 280, s: 70, l: 60 },
      })),
      generateVariables: mock(() => Promise.resolve({} as Record<string, string>)),
    },

    // ─── Regex Scripts (v0.27.0+) ──────────────────────────────────────
    regex_scripts: {
      list:      mock(() => Promise.resolve({ data: [], total: 0 })),
      get:       mock(() => Promise.resolve(null)),
      getActive: mock(() => Promise.resolve([])),
      create:    mock(() => Promise.resolve({ id: 'mock-regex-script-id' })),
      update:    mock(() => Promise.resolve({ id: 'mock-regex-script-id' })),
      delete:    mock(() => Promise.resolve(true)),
    },

    // ─── Databanks ─────────────────────────────────────────────────────
    databanks: {
      list:   mock(() => Promise.resolve({ data: [], total: 0 })),
      get:    mock(() => Promise.resolve(null)),
      create: mock(() => Promise.resolve({ id: 'mock-databank-id' })),
      update: mock(() => Promise.resolve({ id: 'mock-databank-id' })),
      delete: mock(() => Promise.resolve(true)),
      documents: {
        list:        mock(() => Promise.resolve({ data: [], total: 0 })),
        get:         mock(() => Promise.resolve(null)),
        create:      mock(() => Promise.resolve({ id: 'mock-document-id' })),
        update:      mock(() => Promise.resolve({ id: 'mock-document-id' })),
        delete:      mock(() => Promise.resolve(true)),
        getContent:  mock(() => Promise.resolve(null)),
        reprocess:   mock(() => Promise.resolve({ success: true, status: 'processing' })),
      },
    },

    // ─── Variables ─────────────────────────────────────────────────────
    variables: {
      local: {
        get: mock(() => Promise.resolve('')),
        set: mock(() => Promise.resolve()),
        delete: mock(() => Promise.resolve()),
        list: mock(() => Promise.resolve({})),
        has: mock(() => Promise.resolve(false)),
      },
      global: {
        get: mock(() => Promise.resolve('')),
        set: mock(() => Promise.resolve()),
        delete: mock(() => Promise.resolve()),
        list: mock(() => Promise.resolve({})),
        has: mock(() => Promise.resolve(false)),
      },
      chat: {
        get: mock(() => Promise.resolve('')),
        set: mock(() => Promise.resolve()),
        delete: mock(() => Promise.resolve()),
        list: mock(() => Promise.resolve({})),
        has: mock(() => Promise.resolve(false)),
      },
    },

    // ─── Permissions ───────────────────────────────────────────────────
    permissions: {
      getGranted: mock(() => Promise.resolve([])),
      has: mock(() => true),
      onDenied: mock(() => mock(() => {})),
      onChanged: mock(() => mock(() => {})),
    },

    // ─── CORS ──────────────────────────────────────────────────────────
    cors: mock(() => Promise.resolve({ status: 200, statusText: 'OK', headers: {}, body: '' })),

    // ─── Frontend Messaging ────────────────────────────────────────────
    sendToFrontend: mock(() => {}),
    onFrontendMessage: mock(() => mock(() => {})),

    // ─── Logging ───────────────────────────────────────────────────────
    log: {
      info: mock(() => {}),
      warn: mock(() => {}),
      error: mock(() => {}),
    },

    // ─── Events tracking ───────────────────────────────────────────────
    events: {
      track: mock(() => Promise.resolve()),
      query: mock(() => Promise.resolve([])),
      replay: mock(() => Promise.resolve([])),
      getLatestState: mock(() => Promise.resolve({})),
    },

    // ─── Image Generation (v1.0.0-rc.5+) ──────────────────────────────
    imageGen: {
      generate: mock(() => Promise.resolve({
        imageDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
        model:        'mock-model',
        provider:     'mock-provider',
        imageId:      'img-mock-generated-1',
        imageUrl:     '/public/images/img-mock-generated-1.png',
      })),
      getProviders: mock(() => Promise.resolve([
        {
          id:   'mock-provider',
          name: 'Mock Provider',
          capabilities: {
            parameters: {
              width:  { type: 'integer', default: 512, min: 64, max: 2048, step: 64, description: 'Image width in pixels' },
              steps:  { type: 'integer', default: 20, min: 1, max: 100, description: 'Number of sampling steps' },
              prompt: { type: 'string', description: 'Text prompt', required: true },
            },
            apiKeyRequired: true,
            modelListStyle: 'static',
            staticModels:   [{ id: 'mock-model', label: 'Mock Model' }],
            defaultUrl:     'https://mock.example.com/api',
          },
        },
      ])),
      listConnections: mock(() => Promise.resolve([
        {
          id:                 'conn-mock-1',
          name:               'Mock Connection',
          provider:           'mock-provider',
          api_url:            'https://mock.example.com/api',
          model:              'mock-model',
          is_default:         true,
          has_api_key:        true,
          default_parameters: { width: 512, steps: 20 },
          metadata:           {},
          created_at:         1700000000,
          updated_at:         1700000000,
        },
      ])),
      getConnection: mock(() => Promise.resolve({
        id:                 'conn-mock-1',
        name:               'Mock Connection',
        provider:           'mock-provider',
        api_url:            'https://mock.example.com/api',
        model:              'mock-model',
        is_default:         true,
        has_api_key:        true,
        default_parameters: { width: 512, steps: 20 },
        metadata:           {},
        created_at:         1700000000,
        updated_at:         1700000000,
      })),
      getModels: mock(() => Promise.resolve([
        { id: 'mock-model',     label: 'Mock Model' },
        { id: 'mock-model-alt', label: 'Mock Model Alt' },
      ])),
    },

    // ─── OAuth (v1.0.0-rc.5+) ─────────────────────────────────────────
    //
    // Mock returns:
    //   - `onCallback` stores the handler in a per-mock module-scope ref
    //     (matching the host's single-handler-per-extension behavior) and
    //     returns a sync unsub that nulls the ref. Tests can verify which
    //     handler is "registered" via the mock's recorded call args.
    //   - `getCallbackUrl` returns a stable mock path.
    //   - `createState` returns a deterministic mock nonce.
    oauth: (() => {
      const onCallbackMock = mock((_handler: unknown) => () => {});
      return {
        onCallback: onCallbackMock,
        getCallbackUrl: mock(() => '/api/spindle-oauth/lumiscript/callback'),
        createState:    mock(() => Promise.resolve('mock-state-nonce-abc123')),
      };
    })(),

    // ─── Push Notifications ────────────────────────────────────────────
    push: {
      send: mock(() => Promise.resolve({ sent: 0 })),
      getStatus: mock(() => Promise.resolve({ available: false, subscriptionCount: 0 })),
    },

    // ─── Text Editor ───────────────────────────────────────────────────
    textEditor: {
      open: mock(() => Promise.resolve({ text: '', cancelled: true })),
    },

    // ─── Macros resolution ─────────────────────────────────────────────
    macros: {
      resolve: mock(((template: string) => Promise.resolve({ text: template, diagnostics: [] })) as any),
    },

    // ─── Toast / Prompt / Modal ────────────────────────────────────────
    toast: {
      success: mock(() => {}),
      warning: mock(() => {}),
      error: mock(() => {}),
      info: mock(() => {}),
    },

    prompt: {
      input: mock(() => Promise.resolve({ value: null, cancelled: true })),
    },

    modal: {
      confirm: mock(() => Promise.resolve({ confirmed: true })),
      open: mock(() => Promise.resolve({ openRequestId: 'mock-req', dismissedBy: 'user' })),
      close: mock(() => Promise.resolve()),
    },

    // ─── Commands ──────────────────────────────────────────────────────
    commands: {
      register: mock(() => {}),
      unregister: mock(() => {}),
      onInvoked: mock(() => mock(() => {})),
    },

    // ─── RPC Pool (cross-extension shared) ─────────────────────────────
    // Tests for the canonical `api.rpc.*` surface override `rpcPool.sync` /
    // `rpcPool.handle` to capture the wire format LumiScript dispatches and
    // typically return the fully-qualified endpoint name (`<extId>.<channel>`)
    // for assertion. Default behaviour mirrors Spindle: prefix the channel
    // path with the manifest identifier on `sync`/`handle`, return undefined
    // on `read` (no-one published), no-op on `unregister`.
    rpcPool: {
      sync:       mock((channelPath: string) => `lumiscript.${channelPath}`),
      handle:     mock((channelPath: string) => `lumiscript.${channelPath}`),
      read:       mock(() => Promise.resolve(undefined)),
      unregister: mock(() => {}),
    },

    // ─── Manifest ──────────────────────────────────────────────────────
    manifest: {
      version: '0.10.1',
      name: 'LumiScript',
      identifier: 'lumiscript',
      author: 'mindbound',
      permissions: [],
    },

    // ─── Backend Processes ─────────────────────────────────────────────
    // Default stub: spawn rejects with a clear error so any accidental
    // use during an unconfigured test surfaces immediately. Tests that
    // exercise the script-runner subsystem call
    // `installScriptRunnerMockIpc(spindle)` from
    // `tests/_infra/script-runner-mock-ipc.ts` to swap these in for real-
    // routing implementations connected to a child-side mock controller.
    //
    // Field is explicitly typed to `MockBackendProcesses` so the test-side
    // installer can replace it with a plain-function shape without
    // TS-narrowing into the default mock's structural shape.
    backendProcesses: {
      spawn: () => Promise.reject(new Error(
        'spindle.backendProcesses.spawn called on the default mock — ' +
        'tests that exercise the script-runner subsystem should call ' +
        'installScriptRunnerMockIpc(spindle) before triggering a spawn.',
      )),
      list:        () => Promise.resolve([]),
      get:         () => Promise.resolve(null),
      stop:        () => Promise.resolve(),
      onLifecycle: () => () => {},
      onMessage:   () => () => {},
    } satisfies MockBackendProcesses as MockBackendProcesses,
  };
}

export type MockSpindle = ReturnType<typeof createMockSpindle>;
