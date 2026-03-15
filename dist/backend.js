// @bun
// src/types/script.ts
var DEFAULT_SETTINGS = {
  enabled: true,
  showExecutionNotifications: true
};

// src/utils/uuid.ts
function generateUUID() {
  return crypto.randomUUID();
}
function generateShortId() {
  return crypto.randomUUID().replace(/-/g, "").slice(0, 8);
}

// src/storage/collection-store.ts
class CollectionStore {
  storagePath;
  storage;
  getUserId;
  items = [];
  loaded = false;
  subscribers = new Set;
  constructor(storagePath, storage, getUserId) {
    this.storagePath = storagePath;
    this.storage = storage;
    this.getUserId = getUserId;
  }
  async load() {
    const userId = this.getUserId();
    const data = await this.storage.getJson(this.storagePath, {
      fallback: [],
      userId
    });
    this.items = Array.isArray(data) ? data : [];
    this.loaded = true;
    this.notify();
  }
  getAll() {
    return [...this.items];
  }
  getById(id) {
    return this.items.find((item) => item.id === id) ?? null;
  }
  get size() {
    return this.items.length;
  }
  get isLoaded() {
    return this.loaded;
  }
  async create(data) {
    const item = { ...data, id: data.id ?? generateUUID() };
    this.items.push(item);
    await this.persist();
    this.notify();
    return item;
  }
  async update(id, patch) {
    const idx = this.items.findIndex((item) => item.id === id);
    if (idx === -1)
      return null;
    this.items[idx] = { ...this.items[idx], ...patch };
    await this.persist();
    this.notify();
    return this.items[idx];
  }
  async delete(id) {
    const before = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);
    if (this.items.length === before)
      return false;
    await this.persist();
    this.notify();
    return true;
  }
  async flush() {
    await this.persist();
  }
  subscribe(subscriber) {
    this.subscribers.add(subscriber);
    return () => this.subscribers.delete(subscriber);
  }
  notify() {
    for (const sub of this.subscribers) {
      try {
        sub();
      } catch {}
    }
  }
  async persist() {
    const userId = this.getUserId();
    await this.storage.setJson(this.storagePath, this.items, { indent: 2, userId });
  }
}

// src/storage/script-storage.ts
var SCRIPTS_PATH = "scripts.json";

class ScriptStorage {
  store;
  constructor(storage, getUserId) {
    this.store = new CollectionStore(SCRIPTS_PATH, storage, getUserId);
  }
  async load() {
    await this.store.load();
  }
  getScripts() {
    return this.store.getAll();
  }
  getScript(id) {
    return this.store.getById(id);
  }
  getTriggerScripts() {
    return this.store.getAll().filter((s) => s.type === "trigger");
  }
  getLibraryScripts() {
    return this.store.getAll().filter((s) => s.type === "library");
  }
  getEnabledTriggerScripts() {
    return this.store.getAll().filter((s) => s.type === "trigger" && s.enabled);
  }
  async createScript(name, type = "trigger") {
    const uniqueName = await this.getUniqueName(name);
    const now = Date.now();
    return this.store.create({
      id: generateUUID(),
      name: uniqueName,
      code: "",
      enabled: true,
      allowDangerous: false,
      type,
      bindings: [],
      createdAt: now,
      updatedAt: now
    });
  }
  async updateScript(id, patch) {
    return this.store.update(id, { ...patch, updatedAt: Date.now() });
  }
  async deleteScript(id) {
    return this.store.delete(id);
  }
  async duplicateScript(id) {
    const original = this.store.getById(id);
    if (!original)
      return null;
    const baseName = `${original.name} (copy)`;
    const uniqueName = await this.getUniqueName(baseName);
    const now = Date.now();
    return this.store.create({
      ...original,
      id: generateUUID(),
      name: uniqueName,
      createdAt: now,
      updatedAt: now
    });
  }
  async flush() {
    await this.store.flush();
  }
  async getUniqueName(base) {
    const existing = new Set(this.store.getAll().map((s) => s.name));
    if (!existing.has(base))
      return base;
    let n = 2;
    while (existing.has(`${base} (${n})`))
      n++;
    return `${base} (${n})`;
  }
  subscribe(subscriber) {
    return this.store.subscribe(subscriber);
  }
}

// src/storage/settings-store.ts
class SettingsStore {
  storagePath;
  storage;
  getUserId;
  defaults;
  data;
  loaded = false;
  constructor(storagePath, storage, getUserId, defaults) {
    this.storagePath = storagePath;
    this.storage = storage;
    this.getUserId = getUserId;
    this.defaults = defaults;
    this.data = { ...defaults };
  }
  async load() {
    const userId = this.getUserId();
    const stored = await this.storage.getJson(this.storagePath, {
      fallback: {},
      userId
    });
    this.data = { ...this.defaults, ...stored };
    this.loaded = true;
  }
  get() {
    return { ...this.data };
  }
  getField(key) {
    return this.data[key];
  }
  async update(patch) {
    this.data = { ...this.data, ...patch };
    await this.persist();
  }
  async flush() {
    await this.persist();
  }
  get isLoaded() {
    return this.loaded;
  }
  async persist() {
    const userId = this.getUserId();
    await this.storage.setJson(this.storagePath, this.data, { indent: 2, userId });
  }
}

// src/engine/execution-status.ts
class ExecutionStatusStore {
  statuses = new Map;
  markRunning(scriptId) {
    this.statuses.set(scriptId, { status: "running" });
  }
  markSuccess(scriptId, duration) {
    this.statuses.set(scriptId, { status: "success", duration });
  }
  markError(scriptId, duration, errorMessage) {
    this.statuses.set(scriptId, { status: "error", duration, errorMessage });
  }
  markIdle(scriptId) {
    this.statuses.delete(scriptId);
  }
  getStatus(scriptId) {
    return this.statuses.get(scriptId) ?? { status: "idle" };
  }
  getAll() {
    return this.statuses;
  }
  clear() {
    this.statuses.clear();
  }
}
var executionStatusStore = new ExecutionStatusStore;

// src/engine/binding.ts
var context = {
  characterId: null,
  characterName: null,
  chatId: null
};
function setActiveContext(ctx) {
  if ("characterId" in ctx)
    context.characterId = ctx.characterId ?? null;
  if ("characterName" in ctx)
    context.characterName = ctx.characterName ?? null;
  if ("chatId" in ctx)
    context.chatId = ctx.chatId ?? null;
}
function getActiveContext() {
  return { ...context };
}

// src/engine/executor.ts
var AsyncFunctionCtor = Object.getPrototypeOf(async function() {}).constructor;
async function executeScript(script, options) {
  const runId = generateUUID();
  const startTime = performance.now();
  const capturedConsole = buildCapturedConsole(options.onConsole);
  const api = buildAPI(script, options);
  const scriptNS = buildScriptNamespace(script, options);
  try {
    const fn = new AsyncFunctionCtor("api", "script", "__console", `"use strict";
const console = __console;
${script.code}
`);
    await fn(api, scriptNS, capturedConsole);
    const duration = Math.round(performance.now() - startTime);
    return { success: true, duration, scriptId: script.id, runId };
  } catch (err) {
    const duration = Math.round(performance.now() - startTime);
    const error = err instanceof Error ? err : new Error(String(err));
    return { success: false, error, duration, scriptId: script.id, runId };
  }
}
function buildCapturedConsole(onConsole) {
  const makeHandler = (type) => (...args) => {
    const message = args.map(serializeConsoleArg).join(" ");
    const entry = {
      timestamp: new Date().toLocaleTimeString(),
      type,
      message
    };
    onConsole?.(entry);
  };
  return {
    log: makeHandler("log"),
    warn: makeHandler("warn"),
    error: makeHandler("error"),
    info: makeHandler("info")
  };
}
function buildScriptNamespace(script, options) {
  const requireCache = new Map;
  const inProgress = new Set;
  return {
    on: (_event, _handler) => {},
    async require(nameOrId) {
      if (!options.scriptStorage) {
        throw new Error("script.require: ScriptStorage not available");
      }
      if (requireCache.has(nameOrId))
        return requireCache.get(nameOrId);
      if (inProgress.has(nameOrId)) {
        throw new Error(`script.require: circular dependency detected for "${nameOrId}"`);
      }
      const library = options.scriptStorage.getScript(nameOrId) ?? options.scriptStorage.getScripts().find((s) => s.type === "library" && s.name === nameOrId);
      if (!library)
        throw new Error(`script.require: library "${nameOrId}" not found`);
      if (library.type !== "library") {
        throw new Error(`script.require: "${nameOrId}" is not a library script`);
      }
      inProgress.add(nameOrId);
      try {
        const libExports = {};
        const libModule = { exports: libExports };
        const libApi = buildAPI(library, options);
        const libScriptNS = buildScriptNamespace(library, options);
        const silentConsole = { log: () => {}, warn: () => {}, error: () => {}, info: () => {} };
        const libFn = new AsyncFunctionCtor("api", "script", "__console", "exports", "module", `"use strict";
const console = __console;
${library.code}
`);
        await libFn(libApi, libScriptNS, silentConsole, libExports, libModule);
        const exports = libModule.exports;
        requireCache.set(nameOrId, exports);
        return exports;
      } finally {
        inProgress.delete(nameOrId);
      }
    }
  };
}
function buildAPI(script, options) {
  const { grantedPermissions, activeContext, userId } = options;
  const hasPerm = (p) => grantedPermissions.has(p);
  const utils = {
    uuid: () => generateUUID(),
    shortId: () => generateShortId(),
    wait: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    random: {
      int: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      float: (min, max) => Math.random() * (max - min) + min,
      pick(array) {
        if (array.length === 0)
          throw new Error("api.utils.random.pick: empty array");
        return array[Math.floor(Math.random() * array.length)];
      },
      bool: () => Math.random() < 0.5,
      chance: (p) => Math.random() < Math.max(0, Math.min(1, p)),
      shuffle(array) {
        const a = [...array];
        for (let i = a.length - 1;i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
    },
    http: {
      get: (url, opts) => {
        if (!script.allowDangerous)
          throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use api.utils.http`);
        if (!grantedPermissions.has("cors_proxy"))
          throw new Error("PERMISSION_DENIED:cors_proxy \u2014 grant this permission to use api.utils.http");
        return shielded(spindle.cors(url, { method: "GET", headers: opts?.headers }));
      },
      post: (url, body, opts) => {
        if (!script.allowDangerous)
          throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use api.utils.http`);
        if (!grantedPermissions.has("cors_proxy"))
          throw new Error("PERMISSION_DENIED:cors_proxy \u2014 grant this permission to use api.utils.http");
        return shielded(spindle.cors(url, { method: "POST", headers: opts?.headers, body }));
      },
      put: (url, body, opts) => {
        if (!script.allowDangerous)
          throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use api.utils.http`);
        if (!grantedPermissions.has("cors_proxy"))
          throw new Error("PERMISSION_DENIED:cors_proxy \u2014 grant this permission to use api.utils.http");
        return shielded(spindle.cors(url, { method: "PUT", headers: opts?.headers, body }));
      },
      delete: (url, opts) => {
        if (!script.allowDangerous)
          throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use api.utils.http`);
        if (!grantedPermissions.has("cors_proxy"))
          throw new Error("PERMISSION_DENIED:cors_proxy \u2014 grant this permission to use api.utils.http");
        return shielded(spindle.cors(url, { method: "DELETE", headers: opts?.headers }));
      },
      request: (url, opts) => {
        if (!script.allowDangerous)
          throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use api.utils.http`);
        if (!grantedPermissions.has("cors_proxy"))
          throw new Error("PERMISSION_DENIED:cors_proxy \u2014 grant this permission to use api.utils.http");
        return shielded(spindle.cors(url, { method: opts.method ?? "GET", headers: opts.headers, body: opts.body }));
      }
    }
  };
  const json = {
    parse: (text) => JSON.parse(text),
    stringify: (data, pretty) => pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data),
    clone: (data) => JSON.parse(JSON.stringify(data)),
    get(data, path, defaultValue) {
      try {
        const parts = path.split(".");
        let cur = data;
        for (const p of parts) {
          if (cur == null)
            return defaultValue;
          cur = cur[p];
        }
        return cur ?? defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set(data, path, value) {
      const parts = path.split(".");
      let cur = data;
      for (let i = 0;i < parts.length - 1; i++) {
        const p = parts[i];
        if (typeof cur[p] !== "object" || cur[p] === null)
          cur[p] = {};
        cur = cur[p];
      }
      cur[parts[parts.length - 1]] = value;
      return data;
    },
    merge: (...objects) => Object.assign({}, ...objects),
    isValid: (text) => {
      try {
        JSON.parse(text);
        return true;
      } catch {
        return false;
      }
    },
    filter: (data, predicate) => data.filter(predicate),
    sort(data, key, dir = "asc") {
      return [...data].sort((a, b) => {
        const av = a[key];
        const bv = b[key];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return dir === "asc" ? cmp : -cmp;
      });
    },
    uniq: (data) => [...new Set(data)],
    flatten: (data) => data.flat(Infinity)
  };
  const flowStore = new Map;
  const variables = {
    local: makeStorageVarStore(() => activeContext.chatId ? `variables/chats/${activeContext.chatId}.json` : null),
    global: makeStorageVarStore(() => "variables/global.json"),
    character: makeStorageVarStore(() => activeContext.characterId ? `variables/characters/${activeContext.characterId}.json` : null),
    flow: {
      get: (key, def) => flowStore.has(key) ? flowStore.get(key) : def,
      set: (_key, val) => {
        flowStore.set(_key, val);
      },
      delete: (key) => flowStore.delete(key),
      has: (key) => flowStore.has(key),
      clear: () => {
        flowStore.clear();
      }
    }
  };
  const chat = {
    getChatId: () => activeContext.chatId,
    getMessages: (opts) => {
      assertPerm("chat_mutation", hasPerm);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.getMessages(id).then((msgs) => {
        if (opts?.last !== undefined)
          return msgs.slice(-opts.last);
        if (opts?.first !== undefined)
          return msgs.slice(0, opts.first);
        return msgs;
      }));
    },
    sendMessage: (content, opts) => {
      assertPerm("chat_mutation", hasPerm);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.appendMessage(id, {
        role: opts?.role ?? "user",
        content,
        metadata: opts?.metadata
      }));
    },
    editMessage: (msgId, content) => {
      assertPerm("chat_mutation", hasPerm);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.updateMessage(id, msgId, { content }));
    },
    deleteMessage: (msgId) => {
      assertPerm("chat_mutation", hasPerm);
      const id = requireChatId(activeContext);
      return shielded(spindle.chat.deleteMessage(id, msgId));
    }
  };
  const llm = {
    generate: (messages, opts) => {
      assertPerm("generation", hasPerm);
      return shielded(spindle.generate.quiet({
        type: "quiet",
        messages,
        ...opts?.connectionId ? { connection_id: opts.connectionId } : {},
        parameters: buildLLMParams(opts),
        userId: userId ?? undefined
      }).then((result) => result.content));
    },
    generateStructured: (messages, _schema, opts) => {
      assertPerm("generation", hasPerm);
      return shielded(spindle.generate.quiet({
        type: "quiet",
        messages: [
          ...messages,
          { role: "system", content: "Respond with valid JSON only. No markdown, no extra text." }
        ],
        ...opts?.connectionId ? { connection_id: opts.connectionId } : {},
        parameters: buildLLMParams(opts),
        userId: userId ?? undefined
      }).then((result) => {
        const content = result.content;
        try {
          return JSON.parse(content.replace(/^```json\s*/i, "").replace(/\s*```$/, ""));
        } catch {
          throw new Error(`api.llm.generateStructured: response was not valid JSON: ${content.slice(0, 200)}`);
        }
      }));
    }
  };
  const files = {
    read: (path) => {
      assertDangerous(script);
      return spindle.userStorage.read(path);
    },
    write: (path, content) => {
      assertDangerous(script);
      return spindle.userStorage.write(path, content);
    },
    delete: (path) => {
      assertDangerous(script);
      return spindle.userStorage.delete(path);
    },
    exists: (path) => {
      assertDangerous(script);
      return spindle.userStorage.exists(path);
    },
    list: (prefix) => {
      assertDangerous(script);
      return spindle.userStorage.list(prefix);
    }
  };
  const bus = new Map;
  const events = {
    on(event, handler) {
      if (!bus.has(event))
        bus.set(event, []);
      const fn = (d) => {
        handler(d);
      };
      bus.get(event).push(fn);
      return { event, unsubscribe: () => {
        const ls = bus.get(event);
        if (ls)
          ls.splice(ls.indexOf(fn), 1);
      } };
    },
    off(sub) {
      sub.unsubscribe();
    },
    once(event, handler) {
      let sub;
      sub = events.on(event, (data) => {
        sub.unsubscribe();
        return handler(data);
      });
      return sub;
    },
    trigger(event, data) {
      for (const fn of bus.get(event) ?? [])
        fn(data);
    },
    list: () => [...bus.keys()],
    count: (event) => bus.get(event)?.length ?? 0
  };
  const worldInfo = new Proxy({}, {
    get: (_t, prop) => {
      if (prop === "_stub")
        return true;
      return () => {
        throw new Error(`api.worldInfo.${String(prop)}: not yet available in LumiScript`);
      };
    }
  });
  const characters = new Proxy({}, {
    get: (_t, prop) => {
      if (prop === "_stub")
        return true;
      return () => {
        throw new Error(`api.characters.${String(prop)}: not yet available in LumiScript`);
      };
    }
  });
  return { utils, json, variables, chat, llm, events, files, worldInfo, characters };
}
function serializeConsoleArg(a) {
  if (a === undefined)
    return "undefined";
  if (a === null)
    return "null";
  if (typeof a === "function")
    return `[Function: ${a.name ?? "(anonymous)"}]`;
  if (a instanceof Promise)
    return "[Promise (pending)]";
  if (a instanceof Error)
    return `${a.name}: ${a.message}`;
  if (a instanceof Map) {
    try {
      return `Map(${a.size}) { ${[...a.entries()].map(([k, v]) => `${JSON.stringify(k)} => ${serializeConsoleArg(v)}`).join(", ")} }`;
    } catch {
      return `[Map(${a.size})]`;
    }
  }
  if (a instanceof Set) {
    try {
      return `Set(${a.size}) { ${[...a].map(serializeConsoleArg).join(", ")} }`;
    } catch {
      return `[Set(${a.size})]`;
    }
  }
  if (typeof a === "object") {
    const tag = Object.prototype.toString.call(a);
    if (tag !== "[object Object]" && tag !== "[object Array]")
      return tag;
    try {
      return JSON.stringify(a, null, 2);
    } catch {
      return String(a);
    }
  }
  return String(a);
}
function assertPerm(permission, hasPerm) {
  if (!hasPerm(permission)) {
    throw new Error(`PERMISSION_DENIED:${permission} \u2014 grant this permission to use this API`);
  }
}
function assertDangerous(script) {
  if (!script.allowDangerous) {
    throw new Error(`"${script.name}" must have "Allow Dangerous" enabled to use this API`);
  }
}
function shielded(p) {
  p.catch(() => {});
  return p;
}
function requireChatId(ctx) {
  if (!ctx.chatId)
    throw new Error("api.chat: no active chat \u2014 open a chat first");
  return ctx.chatId;
}
function buildLLMParams(opts) {
  const p = {};
  if (opts?.temperature !== undefined)
    p.temperature = opts.temperature;
  if (opts?.maxTokens !== undefined)
    p.max_tokens = opts.maxTokens;
  if (opts?.model !== undefined)
    p.model = opts.model;
  return p;
}
function makeStorageVarStore(getPath) {
  return {
    async get(key, def) {
      const path = getPath();
      if (!path)
        return def;
      const store = await spindle.userStorage.getJson(path, { fallback: {} });
      return key in store ? store[key] : def;
    },
    async set(_key, value) {
      const path = getPath();
      if (!path)
        return;
      const store = await spindle.userStorage.getJson(path, { fallback: {} });
      store[_key] = value;
      await spindle.userStorage.setJson(path, store);
    },
    async delete(key) {
      const path = getPath();
      if (!path)
        return false;
      const store = await spindle.userStorage.getJson(path, { fallback: {} });
      if (!(key in store))
        return false;
      delete store[key];
      await spindle.userStorage.setJson(path, store);
      return true;
    },
    async has(key) {
      const path = getPath();
      if (!path)
        return false;
      const store = await spindle.userStorage.getJson(path, { fallback: {} });
      return key in store;
    },
    async clear() {
      const path = getPath();
      if (!path)
        return;
      await spindle.userStorage.setJson(path, {});
    }
  };
}

// src/backend.ts
var activeUserId = null;
var grantedPermissions = new Set;
async function refreshPermissions() {
  try {
    const granted = await spindle.permissions.getGranted();
    grantedPermissions.clear();
    for (const p of granted)
      grantedPermissions.add(p);
  } catch {}
}
var getUserId = () => activeUserId ?? undefined;
var scriptStorage = new ScriptStorage(spindle.userStorage, getUserId);
var settingsStore = new SettingsStore("settings.json", spindle.userStorage, getUserId, DEFAULT_SETTINGS);
function send(msg) {
  spindle.sendToFrontend(msg);
}
function pushScripts() {
  send({ type: "scripts_updated", scripts: scriptStorage.getScripts() });
}
function pushSettings() {
  send({ type: "settings_updated", settings: settingsStore.get() });
}
spindle.onFrontendMessage(async (raw, userId) => {
  activeUserId = userId;
  if (!settingsStore.isLoaded)
    await settingsStore.load();
  if (!scriptStorage.store.isLoaded)
    await scriptStorage.load();
  const msg = raw;
  try {
    switch (msg.type) {
      case "get_scripts": {
        pushScripts();
        break;
      }
      case "get_settings": {
        pushSettings();
        break;
      }
      case "get_active_context": {
        const ctx = getActiveContext();
        send({
          type: "active_context",
          characterId: ctx.characterId,
          characterName: ctx.characterName,
          chatId: ctx.chatId
        });
        break;
      }
      case "create_script": {
        await scriptStorage.createScript(msg.name, msg.scriptType);
        pushScripts();
        break;
      }
      case "update_script": {
        await scriptStorage.updateScript(msg.id, msg.patch);
        pushScripts();
        break;
      }
      case "delete_script": {
        await scriptStorage.deleteScript(msg.id);
        pushScripts();
        break;
      }
      case "duplicate_script": {
        await scriptStorage.duplicateScript(msg.id);
        pushScripts();
        break;
      }
      case "update_settings": {
        await settingsStore.update(msg.patch);
        pushSettings();
        break;
      }
      case "run_script": {
        const script = scriptStorage.getScript(msg.id);
        if (!script) {
          send({ type: "error", message: `Script not found: ${msg.id}` });
          break;
        }
        const runId = generateUUID();
        const ctx = getActiveContext();
        executionStatusStore.markRunning(script.id);
        send({
          type: "execution_started",
          scriptId: script.id,
          scriptName: script.name,
          runId
        });
        const result = await executeScript(script, {
          grantedPermissions,
          activeContext: { chatId: ctx.chatId, characterId: ctx.characterId },
          userId: activeUserId,
          onConsole: (entry) => {
            send({ type: "console_entry", scriptId: script.id, runId, entry });
          },
          scriptStorage
        });
        if (result.success) {
          executionStatusStore.markSuccess(script.id, result.duration);
        } else {
          executionStatusStore.markError(script.id, result.duration, result.error?.message ?? "Unknown error");
        }
        send({
          type: "execution_ended",
          scriptId: script.id,
          runId: result.runId,
          success: result.success,
          duration: result.duration,
          error: result.error?.message
        });
        break;
      }
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    spindle.log.error(`[LumiScript] Frontend message handler error: ${message}`);
    send({ type: "error", message });
  }
});
spindle.on("CHAT_CHANGED", (payload) => {
  const p = payload;
  setActiveContext({ chatId: p?.chatId ?? null });
  const ctx = getActiveContext();
  send({
    type: "active_context",
    characterId: ctx.characterId,
    characterName: ctx.characterName,
    chatId: ctx.chatId
  });
});
spindle.on("CHARACTER_EDITED", (payload) => {
  const p = payload;
  if (p?.id) {
    setActiveContext({
      characterId: p.id,
      characterName: p.character?.name ?? null
    });
  }
});
spindle.on("PERSONA_CHANGED", (payload) => {
  const p = payload;
  if (p?.persona?.id) {
    setActiveContext({
      characterId: p.persona.id,
      characterName: p.persona.name ?? null
    });
  }
});
spindle.permissions.onDenied(({ permission, operation }) => {
  spindle.log.warn(`[LumiScript] Permission "${permission}" denied for "${operation}"`);
});
(async () => {
  await refreshPermissions();
  spindle.log.info("LumiScript backend ready");
})();
