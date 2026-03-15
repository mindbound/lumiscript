/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT EXECUTOR
 * ============================================================================
 * Runs user scripts in an AsyncFunction sandbox with a clean api.* object.
 *
 * Security model:
 * - Scripts run in `new AsyncFunction` (not eval). No direct DOM access.
 * - api.utils.http.* requires allowDangerous on the script AND cors_proxy permission.
 * - api.chat.* requires chat_mutation permission.
 * - api.llm.* requires generation permission.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI

import type {
  Script,
  LumiScriptAPI,
  ScriptExecutionResult,
  ConsoleEntry,
  ConsoleEntryType,
  ScriptNamespace,
  ScriptEventHandler,
  HttpResponse,
  HttpRequestOptions,
} from '../types/script.js';
import type { ScriptStorage } from '../storage/script-storage.js';
import { generateUUID, generateShortId } from '../utils/uuid.js';

// ─── Executor options ─────────────────────────────────────────────────────────

export interface ExecutorOptions {
  grantedPermissions: Set<string>;
  activeContext: {
    chatId: string | null;
    characterId: string | null;
  };
  onConsole?: (entry: ConsoleEntry) => void;
  scriptStorage?: ScriptStorage;
}

// ─── Async function constructor (with correct type for `new`) ─────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AsyncFunctionCtor = Object.getPrototypeOf(async function () {}).constructor as any;

// ─── Main entry point ─────────────────────────────────────────────────────────

export async function executeScript(
  script: Script,
  options: ExecutorOptions,
): Promise<ScriptExecutionResult> {
  const runId = generateUUID();
  const startTime = performance.now();

  const capturedConsole = buildCapturedConsole(options.onConsole);
  const api = buildAPI(script, options);
  const scriptNS = buildScriptNamespace(script, options);

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const fn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
      'api',
      'script',
      '__console',
      `"use strict";\nconst console = __console;\n${script.code}\n`,
    );

    await fn(api, scriptNS, capturedConsole);

    const duration = Math.round(performance.now() - startTime);
    return { success: true, duration, scriptId: script.id, runId };
  } catch (err: unknown) {
    const duration = Math.round(performance.now() - startTime);
    const error = err instanceof Error ? err : new Error(String(err));
    return { success: false, error, duration, scriptId: script.id, runId };
  }
}

// ─── Console capture ──────────────────────────────────────────────────────────

function buildCapturedConsole(
  onConsole?: (e: ConsoleEntry) => void,
): Record<string, (...args: unknown[]) => void> {
  const makeHandler = (type: ConsoleEntryType) =>
    (...args: unknown[]) => {
      const message = args.map(a => {
        if (typeof a === 'object' && a !== null) {
          try { return JSON.stringify(a, null, 2); } catch { return String(a); }
        }
        return String(a);
      }).join(' ');

      const entry: ConsoleEntry = {
        timestamp: new Date().toLocaleTimeString(),
        type,
        message,
      };
      onConsole?.(entry);
    };

  return {
    log:   makeHandler('log'),
    warn:  makeHandler('warn'),
    error: makeHandler('error'),
    info:  makeHandler('info'),
  };
}

// ─── Script namespace (script.on, script.require) ─────────────────────────────

function buildScriptNamespace(
  script: Script,
  options: ExecutorOptions,
): ScriptNamespace {
  const requireCache = new Map<string, unknown>();
  const inProgress = new Set<string>();

  return {
    // Phase 1: handlers are registered but not fired automatically.
    // Phase 2 will wire these to Lumiverse events via spindle.on().
    on: ((_event: unknown, _handler: unknown) => { /* no-op in Phase 1 */ }) as ScriptNamespace['on'],

    async require(nameOrId: string): Promise<unknown> {
      if (!options.scriptStorage) {
        throw new Error('script.require: ScriptStorage not available');
      }
      if (requireCache.has(nameOrId)) return requireCache.get(nameOrId);
      if (inProgress.has(nameOrId)) {
        throw new Error(`script.require: circular dependency detected for "${nameOrId}"`);
      }

      const library =
        options.scriptStorage.getScript(nameOrId) ??
        options.scriptStorage.getScripts().find(
          s => s.type === 'library' && s.name === nameOrId,
        );

      if (!library) throw new Error(`script.require: library "${nameOrId}" not found`);
      if (library.type !== 'library') {
        throw new Error(`script.require: "${nameOrId}" is not a library script`);
      }

      inProgress.add(nameOrId);
      try {
        const libExports: Record<string, unknown> = {};
        const libModule = { exports: libExports };
        const libApi = buildAPI(library, options);
        const libScriptNS = buildScriptNamespace(library, options);
        const silentConsole = { log: () => {}, warn: () => {}, error: () => {}, info: () => {} };

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        const libFn: (...args: unknown[]) => Promise<unknown> = new AsyncFunctionCtor(
          'api', 'script', '__console', 'exports', 'module',
          `"use strict";\nconst console = __console;\n${library.code}\n`,
        );

        await libFn(libApi, libScriptNS, silentConsole, libExports, libModule);
        const exports = libModule.exports;
        requireCache.set(nameOrId, exports);
        return exports;
      } finally {
        inProgress.delete(nameOrId);
      }
    },
  };
}

// ─── API factory ──────────────────────────────────────────────────────────────

function buildAPI(script: Script, options: ExecutorOptions): LumiScriptAPI {
  const { grantedPermissions, activeContext } = options;
  const hasPerm = (p: string) => grantedPermissions.has(p);

  // ── api.utils ──────────────────────────────────────────────────────────────
  const utils: LumiScriptAPI['utils'] = {
    uuid: () => generateUUID(),
    shortId: () => generateShortId(),
    wait: (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms)),

    random: {
      int: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      float: (min, max) => Math.random() * (max - min) + min,
      pick<T>(array: T[]): T {
        if (array.length === 0) throw new Error('api.utils.random.pick: empty array');
        return array[Math.floor(Math.random() * array.length)]!;
      },
      bool: () => Math.random() < 0.5,
      chance: (p) => Math.random() < Math.max(0, Math.min(1, p)),
      shuffle<T>(array: T[]): T[] {
        const a = [...array];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j]!, a[i]!];
        }
        return a;
      },
    },

    http: {
      get: (url, opts) => doHttp(url, { ...opts, method: 'GET' }, script, grantedPermissions),
      post: (url, body, opts) => doHttp(url, { ...opts, method: 'POST', body }, script, grantedPermissions),
      put: (url, body, opts) => doHttp(url, { ...opts, method: 'PUT', body }, script, grantedPermissions),
      delete: (url, opts) => doHttp(url, { ...opts, method: 'DELETE' }, script, grantedPermissions),
      request: (url, opts) => doHttp(url, opts, script, grantedPermissions),
    },
  };

  // ── api.json ───────────────────────────────────────────────────────────────
  const json: LumiScriptAPI['json'] = {
    parse: (text) => JSON.parse(text) as never,
    stringify: (data, pretty) => pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data),
    clone: <T>(data: T): T => JSON.parse(JSON.stringify(data)) as T,
    get(data, path, defaultValue?) {
      try {
        const parts = path.split('.');
        let cur: unknown = data;
        for (const p of parts) {
          if (cur == null) return defaultValue;
          cur = (cur as Record<string, unknown>)[p];
        }
        return cur ?? defaultValue;
      } catch { return defaultValue; }
    },
    set(data, path, value) {
      const parts = path.split('.');
      let cur = data as Record<string, unknown>;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i]!;
        if (typeof cur[p] !== 'object' || cur[p] === null) cur[p] = {};
        cur = cur[p] as Record<string, unknown>;
      }
      cur[parts[parts.length - 1]!] = value;
      return data;
    },
    merge: (...objects) => Object.assign({}, ...objects) as never,
    isValid: (text) => { try { JSON.parse(text); return true; } catch { return false; } },
    filter: <T>(data: T[], predicate: (item: T) => boolean) => data.filter(predicate),
    sort<T>(data: T[], key: string, dir: 'asc' | 'desc' = 'asc'): T[] {
      return [...data].sort((a, b) => {
        const av = (a as Record<string, unknown>)[key];
        const bv = (b as Record<string, unknown>)[key];
        const cmp = av! < bv! ? -1 : av! > bv! ? 1 : 0;
        return dir === 'asc' ? cmp : -cmp;
      });
    },
    uniq: <T>(data: T[]) => [...new Set(data)],
    flatten: <T>(data: unknown[]): T[] => data.flat(Infinity) as T[],
  };

  // ── api.variables ──────────────────────────────────────────────────────────
  const flowStore = new Map<string, unknown>();

  const variables: LumiScriptAPI['variables'] = {
    local:     makeStorageVarStore(() => activeContext.chatId ? `variables/chats/${activeContext.chatId}.json` : null),
    global:    makeStorageVarStore(() => 'variables/global.json'),
    character: makeStorageVarStore(() => activeContext.characterId ? `variables/characters/${activeContext.characterId}.json` : null),
    flow: {
      get:    <T>(key: string, def?: T): T | undefined => (flowStore.has(key) ? flowStore.get(key) as T : def),
      set:    (_key: string, val: unknown) => { flowStore.set(_key, val); },
      delete: (key: string) => flowStore.delete(key),
      has:    (key: string) => flowStore.has(key),
      clear:  () => { flowStore.clear(); },
    },
  };

  // ── api.chat ───────────────────────────────────────────────────────────────
  const chat: LumiScriptAPI['chat'] = {
    getChatId: () => activeContext.chatId,

    async getMessages(opts) {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      const msgs = await spindle.chat.getMessages(id);
      if (opts?.last !== undefined) return msgs.slice(-opts.last);
      if (opts?.first !== undefined) return msgs.slice(0, opts.first);
      return msgs;
    },

    async sendMessage(content, opts) {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      return spindle.chat.appendMessage(id, {
        role: opts?.role ?? 'user',
        content,
        metadata: opts?.metadata,
      });
    },

    async editMessage(msgId, content) {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      await spindle.chat.updateMessage(id, msgId, { content });
    },

    async deleteMessage(msgId) {
      assertPerm('chat_mutation', hasPerm);
      const id = requireChatId(activeContext);
      await spindle.chat.deleteMessage(id, msgId);
    },
  };

  // ── api.llm ────────────────────────────────────────────────────────────────
  const llm: LumiScriptAPI['llm'] = {
    async generate(messages, opts) {
      assertPerm('generation', hasPerm);
      const result = await spindle.generate.quiet({
        type: 'quiet',
        messages,
        ...(opts?.connectionId ? { connection_id: opts.connectionId } : {}),
        parameters: buildLLMParams(opts),
      });
      return (result as { content: string }).content;
    },

    async generateStructured<T>(messages: import('../types/script.js').LLMMessage[], _schema: Record<string, unknown>, opts?: import('../types/script.js').LLMOptions): Promise<T> {
      assertPerm('generation', hasPerm);
      const result = await spindle.generate.quiet({
        type: 'quiet',
        messages: [
          ...messages,
          { role: 'system', content: 'Respond with valid JSON only. No markdown, no extra text.' },
        ],
        ...(opts?.connectionId ? { connection_id: opts.connectionId } : {}),
        parameters: buildLLMParams(opts),
      });
      const content = (result as { content: string }).content;
      try {
        return JSON.parse(content.replace(/^```json\s*/i, '').replace(/\s*```$/, '')) as T;
      } catch {
        throw new Error(`api.llm.generateStructured: response was not valid JSON: ${content.slice(0, 200)}`);
      }
    },
  };

  // ── api.files ──────────────────────────────────────────────────────────────
  const files: LumiScriptAPI['files'] = {
    read:   (path) => { assertDangerous(script); return spindle.userStorage.read(path); },
    write:  (path, content) => { assertDangerous(script); return spindle.userStorage.write(path, content); },
    delete: (path) => { assertDangerous(script); return spindle.userStorage.delete(path); },
    exists: (path) => { assertDangerous(script); return spindle.userStorage.exists(path); },
    list:   (prefix) => { assertDangerous(script); return spindle.userStorage.list(prefix); },
  };

  // ── api.events (internal bus — Phase 1) ───────────────────────────────────
  const bus = new Map<string, Array<(d: unknown) => void>>();

  const events: LumiScriptAPI['events'] = {
    on<T>(event: string, handler: (d: T) => void | Promise<void>) {
      if (!bus.has(event)) bus.set(event, []);
      const fn = (d: unknown) => { void handler(d as T); };
      bus.get(event)!.push(fn);
      return { event, unsubscribe: () => {
        const ls = bus.get(event);
        if (ls) ls.splice(ls.indexOf(fn), 1);
      }};
    },
    off(sub) { sub.unsubscribe(); },
    once<T>(event: string, handler: (d: T) => void | Promise<void>) {
      let sub: ReturnType<typeof events.on>;
      sub = events.on<T>(event, (data) => { sub.unsubscribe(); return handler(data); });
      return sub;
    },
    trigger(event, data) { for (const fn of bus.get(event) ?? []) fn(data); },
    list: () => [...bus.keys()],
    count: (event) => bus.get(event)?.length ?? 0,
  };

  // ── Stubs ─────────────────────────────────────────────────────────────────
  const worldInfo = new Proxy({} as LumiScriptAPI['worldInfo'], {
    get: (_t, prop) => {
      if (prop === '_stub') return true;
      return () => { throw new Error(`api.worldInfo.${String(prop)}: not yet available in LumiScript`); };
    },
  });

  const characters = new Proxy({} as LumiScriptAPI['characters'], {
    get: (_t, prop) => {
      if (prop === '_stub') return true;
      return () => { throw new Error(`api.characters.${String(prop)}: not yet available in LumiScript`); };
    },
  });

  return { utils, json, variables, chat, llm, events, files, worldInfo, characters };
}

// ─── Small helpers ────────────────────────────────────────────────────────────

function assertPerm(permission: string, hasPerm: (p: string) => boolean): void {
  if (!hasPerm(permission)) {
    throw new Error(`PERMISSION_DENIED:${permission} — grant this permission to use this API`);
  }
}

function assertDangerous(script: Script): void {
  if (!script.allowDangerous) {
    throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use this API`);
  }
}

function requireChatId(ctx: { chatId: string | null }): string {
  if (!ctx.chatId) throw new Error('api.chat: no active chat — open a chat first');
  return ctx.chatId;
}

function buildLLMParams(opts?: import('../types/script.js').LLMOptions): Record<string, unknown> {
  const p: Record<string, unknown> = {};
  if (opts?.temperature !== undefined) p.temperature = opts.temperature;
  if (opts?.maxTokens !== undefined) p.max_tokens = opts.maxTokens;
  if (opts?.model !== undefined) p.model = opts.model;
  return p;
}

function makeStorageVarStore(
  getPath: () => string | null,
): LumiScriptAPI['variables']['local'] {
  return {
    async get<T>(key: string, def?: T): Promise<T | undefined> {
      const path = getPath();
      if (!path) return def;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      return (key in store ? store[key] as T : def);
    },
    async set<T>(_key: string, value: T): Promise<void> {
      const path = getPath();
      if (!path) return;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      store[_key] = value;
      await spindle.userStorage.setJson(path, store);
    },
    async delete(key: string): Promise<boolean> {
      const path = getPath();
      if (!path) return false;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      if (!(key in store)) return false;
      delete store[key];
      await spindle.userStorage.setJson(path, store);
      return true;
    },
    async has(key: string): Promise<boolean> {
      const path = getPath();
      if (!path) return false;
      const store = await spindle.userStorage.getJson<Record<string, unknown>>(path, { fallback: {} });
      return key in store;
    },
    async clear(): Promise<void> {
      const path = getPath();
      if (!path) return;
      await spindle.userStorage.setJson(path, {});
    },
  };
}

async function doHttp(
  url: string,
  opts: HttpRequestOptions & { method?: string },
  script: Script,
  granted: Set<string>,
): Promise<HttpResponse> {
  assertDangerous(script);
  if (!granted.has('cors_proxy')) {
    throw new Error('PERMISSION_DENIED:cors_proxy — grant this permission to use api.utils.http');
  }
  const result = await spindle.cors(url, {
    method: opts.method ?? 'GET',
    headers: opts.headers,
    body: opts.body,
  });
  return result as HttpResponse;
}
