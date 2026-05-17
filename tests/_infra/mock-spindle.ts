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
    },

    // ─── Connections ───────────────────────────────────────────────────
    connections: {
      list: mock(() => Promise.resolve([])),
      get: mock(() => Promise.resolve(null)),
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

    // ─── Image Generation ──────────────────────────────────────────────
    imageGen: {
      generate: mock(() => Promise.resolve({})),
      getProviders: mock(() => Promise.resolve([])),
      listConnections: mock(() => Promise.resolve([])),
      getConnection: mock(() => Promise.resolve(null)),
      getModels: mock(() => Promise.resolve([])),
    },

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
