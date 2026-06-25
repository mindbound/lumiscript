import { FC, useState } from 'react';
import { Zap, Lock, Radio, List, Braces, Hash, Package, Blocks, Download, ChevronDown, ChevronRight, AtSign, Shield, Workflow } from 'lucide-react';
import { downloadReferenceMarkdown } from './markdown-export.js';

// ─── Section accordion ────────────────────────────────────────────────────────

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ icon, title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="ls-ref-section">
      <button className="ls-ref-section-header" onClick={() => setOpen(v => !v)}>
        <span className="ls-ref-section-title">
          {icon}
          {title}
        </span>
        {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
      </button>
      {open && <div className="ls-ref-section-body">{children}</div>}
    </div>
  );
};

// ─── Small helpers ────────────────────────────────────────────────────────────

const Code: FC<{ children: string }> = ({ children }) => (
  <code className="ls-ref-code">{children}</code>
);

const Perm: FC<{ children: string }> = ({ children }) => (
  <span className="ls-ref-perm">{children}</span>
);

const NoPerm: FC = () => (
  <span className="ls-ref-perm ls-ref-perm-none">none</span>
);

const Silent: FC = () => (
  <span className="ls-ref-muted" style={{ fontStyle: 'italic' }}>silent</span>
);

/** Full-width group header row spanning all table columns. Accepts ReactNode
 *  so callers can compose a label with inline description (e.g. the
 *  LumiScriptMacrosTable's "Character Variables" group has an explanatory
 *  subline rendered alongside the short label). */
const GroupHeader: FC<{ label: React.ReactNode; cols: number }> = ({ label, cols }) => (
  <tr>
    <td colSpan={cols} className="ls-ref-group-header">{label}</td>
  </tr>
);

// ─── Events table ─────────────────────────────────────────────────────────────

export interface EventRow { name: string; group: string; payload: string; fires?: string }

export const EVENTS: EventRow[] = [
  { group: 'LumiScript', name: 'ls:startup',                 payload: '{ __event: "ls:startup" }', fires: 'Per-script when the script enters the active state: at LumiScript boot (extension enable / app start) AND after the user toggles the script from disabled→enabled. Symmetric partner to `ls:teardown`. Use for tool registration, cache pre-warm, broadcast subscription setup, and other init that should run whenever the script becomes runnable. On re-enable the case body re-runs in full — bottom-of-body `api.broadcast.on(...)` calls also re-execute, re-registering the subscriptions disable\'s cleanup wiped, so the case body itself can be empty if all you need is the body firing. **Use the `if (data.__event === "ls:startup")` branch for code that should run EXCLUSIVELY on cold boot — not on every Reload click.** Common cold-boot-only patterns: seeding a default config into `api.scriptStorage`, logging a boot timestamp, one-shot migrations on persistent data. To make init code ALSO re-run on hot reload, branch on `(data.__event === "ls:startup" || data.__event === "ls:reload")`, or put it at the top of the body un-gated (the body re-runs on every fire including `ls:reload`). See `ls:reload` for the hot-reload counterpart.' },
  { group: 'LumiScript', name: 'ls:teardown',                payload: "{ reason: 'disabled' | 'deleted', scriptId, scriptName }", fires: 'Per-script when the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, persistent storage migrations, etc.). **NOT fired on hot reload — `ls:reload` performs the per-script state wipe silently. ls:teardown is exclusive to disable / delete.**' },
  { group: 'LumiScript', name: 'ls:reload',                  payload: "{ reason: 'autosave' | 'manual', previousCodeHash, currentCodeHash, previousLength, currentLength, triggeredAt }", fires: 'After a code edit IF the script opts in via the `// @ls:reload-on-edit` directive (~500ms debounce). Body re-runs in its existing worker so registered handlers refresh their closures. Also fires on click of the editor topbar Reload button (manual — bypasses the directive check). Branch on `data.__event === "ls:reload"` to detect. **Pairs with `ls:startup` as the lifecycle distinction**: ls:startup = cold boot (extension boot OR disable→enable transition), ls:reload = hot reload (autosave-with-directive OR manual Reload button click). **Reload performs a full per-script state wipe BEFORE the body re-runs** (DOM injections, modals, float widgets, drawer tabs, input-bar actions, handler closures, broadcast subs, tools, macros, interceptors, injections) while preserving `api.scriptStorage`, `api.theme.*` contributions, and the worker\'s `script.require()` cache. So the body re-running from `ls:reload` lands into a clean slate identical to a fresh `ls:startup` fire — the only difference is `data.__event` + the presence of `data.reason` (`"autosave" | "manual"`). v1.0.0-rc.8+. **NOT in the trigger picker UI**: ls:reload is a deterministic side-effect of the Reload button OR the `@ls:reload-on-edit` directive, not a picker-checkbox subscription (parallel to the Run button, which also has no checkbox).' },
  { group: 'Chat',       name: 'MESSAGE_SENT',               payload: '{ chatId, message: Message }', fires: 'Fires once per **message creation** — the host emits it from the generic message-insert path, so it fires for the **user\'s send AND the assistant\'s empty streaming placeholder** created immediately after (`is_user: false`, empty `content`), plus auto-greetings and manually-added messages. **To react to the user\'s send only, guard with `if (!data.message.is_user) return;`** — `data.message.is_user` (boolean) is the discriminator; `GENERATION_ENDED` is the clean hook for *generated* assistant text. For a user send it fires **before prompt assembly** for the generation that follows — `api.chat.inject(...)` calls from the handler ARE picked up by the immediate-next generation (host emits via `queueMicrotask`; assembly runs a tick later in the macrotask queue, so the inject lands first). **`message` is the raw host `Message` record — it uses `is_user` (boolean), NOT `role`, and snake_case fields (`swipe_id`, `swipe_dates`); it is NOT the camelCase `ChatMessage` DTO from `getMessages()`.** Note: `message` does NOT carry the active character — resolve via `api.chats.get(chatId).then(c => c.characterId)` then `api.characters.get(characterId)`.' },
  { group: 'Chat',       name: 'MESSAGE_EDITED',             payload: '{ chatId, message: Message }' },
  { group: 'Chat',       name: 'MESSAGE_DELETED',            payload: '{ chatId, messageId }' },
  { group: 'Chat',       name: 'MESSAGE_SWIPED',             payload: '{ chatId, message: Message, action, swipeId, previousSwipeId? }', fires: 'Twice per swipe-with-regen (initiation + completion); once for swipe-without-regen.' },
  { group: 'Chat',       name: 'SWIPE_EDITED',               payload: '{ chatId, message: Message, previousSwipeId }' },
  { group: 'Chat',       name: 'CHARACTER_MESSAGE_RENDERED', payload: '{ chatId, messageId }' },
  { group: 'Chat',       name: 'USER_MESSAGE_RENDERED',      payload: '{ chatId, messageId }' },
  { group: 'Generation', name: 'GENERATION_STARTED',         payload: '{ generationId, chatId, model }', fires: 'At the start of a new generation, **before prompt assembly + interceptor invocation** in the same generation pipeline. `api.chat.inject(...)` calls from this handler ARE picked up by this generation. Symmetric pre-assembly hook to `MESSAGE_SENT` — use whichever fits the script flow.' },
  { group: 'Generation', name: 'GENERATION_ENDED',           payload: '{ generationId, chatId, messageId, content }', fires: 'Assistant-side message arrival — the clean hook for *generated* replies (whereas `MESSAGE_SENT` fires on every message creation, user sends included). Fires **after** the generation completes — `api.chat.inject(...)` calls from this handler are too late for the just-finished generation but WILL be picked up by the next one. Payload has no `swipeId` — look it up via `api.chat.getMessages` if needed.' },
  { group: 'Generation', name: 'GENERATION_STOPPED',         payload: '{ generationId, chatId, content }' },
  { group: 'Generation', name: 'STREAM_TOKEN_RECEIVED',      payload: '{ generationId, chatId, token }', fires: 'Once per streamed token — **high-frequency**. Deliberately NOT offered in the editor event picker (wiring a whole script body per token is rarely intended); advanced use only.' },
  { group: 'Entities',   name: 'CHAT_CHANGED',               payload: '{ chat, changedFields }  // chat = the full updated Chat; chatId is `chat.id`, not flat', fires: 'Chat **metadata** mutations only (rename, etc.). The primary emission carries `{ chat, changedFields }` (read the id as `chat.id`). Does NOT fire on chat open/switch — use `CHAT_SWITCHED` for that.' },
  { group: 'Entities',   name: 'CHAT_SWITCHED',              payload: '{ chatId: string | null }  // null on return-to-home — NO characterId on the payload', fires: 'Active chat opens, switches, or closes (chatId becomes null on return-to-home). **Important — Phase-1/Phase-2 character resolution**: triggers fire during Phase 1 (chatId set sync); characterId is resolved Phase-2 ~10–15 ms later via async lookup. So `data.characterId` does NOT exist on the payload, and reading the active-context characterId at trigger-fire time can see null/stale. **Pattern**: call `api.chats.getActive()` and read `chat.characterId` — that hits the host\'s live state which has it populated regardless of Phase-2 status.' },
  { group: 'Entities',   name: 'CHAT_FORKED',                payload: '{ sourceChatId, forkedChatId, chat, branchId, forkedAtMessageId, forkedAtMessageIndex }', fires: 'A chat was forked (branched) from a message into a new chat that shares the source character — messages up to and including the fork point are copied. `forkedChatId === chat.id`; the forked `chat.metadata` carries `branched_from` + `branch_at_message`. Use it to clone per-chat state into the fork, log lineage, or re-decorate the new chat. Emitted by the host branch-chat flow on newer Lumiverse builds.' },
  { group: 'Entities',   name: 'CHARACTER_CREATED',          payload: '{ character: Character }', fires: 'A character was created OR imported (the host emits it on card import too). `data.character` is the new character record (carries its `extensions` blob). NOTE: LumiScript itself subscribes to this internally for card-embedded-script detection; your trigger handler runs alongside that, independently.' },
  { group: 'Entities',   name: 'CHARACTER_EDITED',           payload: '{ id, character: Character }' },
  { group: 'Entities',   name: 'CHARACTER_DELETED',          payload: '{ id }' },
  { group: 'Entities',   name: 'CHARACTER_DUPLICATED',       payload: '{ id, newId }' },
  { group: 'Entities',   name: 'PERSONA_CHANGED',            payload: '{ persona: Persona }' },
  { group: 'Images',     name: 'IMAGE_UPLOADED',             payload: '{ image }', fires: 'An image was saved to the user image library — manual upload OR generated/saved via api.imageGen / api.images. `data.image` is the full Image record (carries its `id`, usable with api.images.get / api.theme.extractColors / spindle.characters.setAvatar). NOTE: host docs list `{ imageId }` — that is stale; the real payload is `{ image }`.' },
  { group: 'Images',     name: 'IMAGE_DELETED',              payload: '{ id }', fires: 'An image was deleted from the library. `data.id` is the removed image id. (Host docs list `{ imageId }` — stale; real payload is `{ id }`.)' },
  { group: 'World Info', name: 'WORLD_INFO_ACTIVATED',       payload: '{ entries: WorldInfoEntry[] }', fires: 'World Info entries were activated during prompt assembly.' },
  { group: 'World Info', name: 'WORLD_BOOK_CHANGED',         payload: '{ id, worldBook: WorldInfo }', fires: 'Coarse-grained: world book was created, updated, had its semantic-activation toggled, or had any of its entries mutated (entry create / update / delete / reorder / bulk-op / import). Fires alongside `WORLD_BOOK_ENTRY_CHANGED` on per-entry mutations — handlers subscribed to both see two events per change. Bulk imports suppress per-entry events and emit this once at the end.' },
  { group: 'World Info', name: 'WORLD_BOOK_DELETED',         payload: '{ id }', fires: 'World book was deleted.' },
  { group: 'World Info', name: 'WORLD_BOOK_ENTRY_CHANGED',   payload: '{ id, worldBookId, entry: WorldInfoEntry }', fires: 'Entry was created or updated. Does NOT fire during bulk imports — those emit a single `WORLD_BOOK_CHANGED` for the parent book instead. Subscribe to `WORLD_BOOK_CHANGED` in addition if you need to catch imported entries.' },
  { group: 'World Info', name: 'WORLD_BOOK_ENTRY_DELETED',   payload: '{ id, worldBookId }', fires: 'Entry was deleted.' },
  { group: 'Settings',   name: 'SETTINGS_UPDATED',           payload: '{ key, value }' },
  { group: 'Settings',   name: 'PRESET_CHANGED',             payload: '{ presetId }' },
  { group: 'Settings',   name: 'CONNECTION_PROFILE_LOADED',  payload: '{ connectionId }' },
  { group: 'Settings',   name: 'REGEX_SCRIPT_CHANGED',       payload: '{ id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. Requires regex_scripts permission.' },
  { group: 'Settings',   name: 'REGEX_SCRIPT_DELETED',       payload: '{ id }  // Requires regex_scripts permission.' },
  { group: 'System',     name: 'PERMISSION_CHANGED',         payload: '{ extensionId, permission, granted, allGranted: string[] }', fires: 'A Lumiverse permission was granted to or revoked from LumiScript. `granted` is the new boolean state of `permission`; `allGranted` is the full current permission list. Use to (re)initialize a feature when its permission is granted, or degrade gracefully when revoked. `extensionId` identifies which extension — filter if you only care about LumiScript\'s.' },
];

const EventsTable: FC = () => {
  let lastGroup = '';
  return (
    <table className="ls-ref-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Group</th>
          <th>Payload shape</th>
          <th>Fires</th>
        </tr>
      </thead>
      <tbody>
        {EVENTS.map(ev => {
          const groupCell = ev.group !== lastGroup ? ev.group : '';
          lastGroup = ev.group;
          return (
            <tr key={ev.name}>
              <td><Code>{ev.name}</Code></td>
              <td><span className="ls-ref-muted">{groupCell}</span></td>
              <td><span className="ls-ref-muted">{ev.payload}</span></td>
              <td><span className="ls-ref-muted">{ev.fires ?? ''}</span></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// ─── Permission matrix ────────────────────────────────────────────────────────

export interface PermRow {
  method: string;
  perms: string[];
  note?: string;
}

export interface PermGroup {
  group: string;
  rows: PermRow[];
}

export const PERM_GROUPS: PermGroup[] = [
  {
    group: 'Chat',
    rows: [
      { method: 'api.chat.getMessages', perms: ['chat_mutation'] },
      { method: 'api.chat.sendMessage', perms: ['chat_mutation'] },
      { method: 'api.chat.editMessage', perms: ['chat_mutation'] },
      { method: 'api.chat.deleteMessage', perms: ['chat_mutation'] },
      { method: 'api.chat.getChatId', perms: [] },
      { method: 'api.chat.getMetadata', perms: ['chats'] },
      { method: 'api.chat.setMetadata', perms: ['chats'] },
      { method: 'api.chat.inject', perms: ['interceptor'] },
      { method: 'api.chat.removeInjection', perms: [] },
      { method: 'api.chat.getInjections', perms: [] },
      { method: 'api.chat.clearInjections', perms: ['interceptor'] },
      { method: 'api.chat.clearAllInjections', perms: ['interceptor'], note: '+ allowDangerous' },
      { method: 'api.chat.setMessageHidden', perms: ['chat_mutation'] },
      { method: 'api.chat.setMessagesHidden', perms: ['chat_mutation'] },
      { method: 'api.chat.isMessageHidden', perms: ['chat_mutation'] },
      { method: 'api.chat.registerContentProcessor', perms: ['chat_mutation'] },
      { method: 'api.chat.listContentProcessors', perms: [] },
    ],
  },
  {
    group: 'LLM',
    rows: [
      { method: 'api.llm.generate', perms: ['generation'] },
      { method: 'api.llm.generateStream', perms: ['generation'] },
      { method: 'api.llm.generateStructured', perms: ['generation'] },
      { method: 'api.llm.generateWithTools', perms: ['generation'] },
      { method: 'api.llm.dryRun', perms: ['generation'] },
      { method: 'api.connections.* (read-only)', perms: [] },
      { method: 'api.webSearch.*', perms: ['web_search'] },
      { method: 'api.users.* (read-only)', perms: [] },
      { method: 'api.version.* (read-only)', perms: [] },
    ],
  },
  {
    group: 'Variables / JSON / Utils',
    rows: [
      { method: 'api.variables.*', perms: [] },
      { method: 'api.json.*', perms: [] },
      { method: 'api.utils.uuid / shortId / wait', perms: [] },
      { method: 'api.utils.random.*', perms: [] },
      { method: 'api.utils.template.*', perms: [] },
      { method: 'api.utils.macros.resolve', perms: [] },
      { method: 'api.utils.image.*', perms: [] },
      { method: 'api.utils.http.*', perms: ['cors_proxy'], note: '+ allowDangerous' },
    ],
  },
  {
    group: 'UI',
    rows: [
      { method: 'api.ui.toast', perms: [] },
      { method: 'api.ui.prompt', perms: [] },
      { method: 'api.ui.confirm', perms: [] },
      { method: 'api.ui.showModal', perms: [] },
      { method: 'api.ui.showAdvancedModal', perms: ['app_manipulation'] },
      { method: 'api.ui.mountApp', perms: ['app_manipulation'] },
      { method: 'api.ui.editText', perms: [] },
      { method: 'api.ui.pushNotification', perms: ['push_notification'] },
      { method: 'api.ui.getPushStatus', perms: ['push_notification'] },
      { method: 'api.ui.createFloatWidget', perms: ['ui_panels'] },
      { method: 'api.ui.openDrawerTab / closeDrawer / openSettings / openCommandPalette / getDrawerTabs (navigation)', perms: [] },
      { method: 'api.ui.pickFile (native file picker)', perms: [] },
      { method: 'api.ui.events.* (reactive UI state)', perms: [] },
      { method: 'api.ui.dom.*', perms: ['app_manipulation'] },
      { method: 'api.ui.components.*', perms: ['app_manipulation'] },
    ],
  },
  {
    group: 'Files',
    rows: [
      { method: 'api.files.user*', perms: [], note: 'allowDangerous' },
      { method: 'api.files.shared*', perms: [], note: 'allowDangerous' },
      { method: 'api.files.temp*', perms: ['ephemeral_storage'], note: '+ allowDangerous' },
    ],
  },
  {
    group: 'Entity APIs',
    rows: [
      { method: 'api.characters.*', perms: ['characters'] },
      { method: 'api.chats.*', perms: ['chats'] },
      { method: 'api.worldInfo.* (CRUD + getCapturedActive)', perms: ['world_books'] },
      { method: 'api.worldInfo.registerInterceptor / listInterceptors', perms: ['generation'] },
      { method: 'api.personas.*', perms: ['personas'] },
      { method: 'api.presets.*', perms: ['presets'] },
      { method: 'api.memories.* (Memory Cortex + chat memory)', perms: ['memories'] },
      { method: 'api.regexScripts.*', perms: ['regex_scripts'] },
      { method: 'api.images.*', perms: ['images'] },
      { method: 'api.imageGen.*', perms: ['image_gen'] },
      { method: 'api.oauth.*', perms: ['oauth'] },
      { method: 'api.theme.*', perms: ['app_manipulation'] },
      { method: 'api.council.*', perms: [], note: 'free tier, read-only' },
    ],
  },
  {
    group: 'Tools & Broadcast',
    rows: [
      { method: 'api.tools.*', perms: ['tools'] },
      { method: 'api.macros.register / updateValue / unregister / list', perms: [] },
      { method: 'api.macros.registerInterceptor', perms: ['macro_interceptor'] },
      { method: 'api.macros.listInterceptors', perms: [] },
      { method: 'api.broadcast.*', perms: [] },
      { method: 'api.commands.*', perms: [] },
      { method: 'api.events.*', perms: ['event_tracking'] },
      { method: 'api.tokens.*', perms: [] },
      { method: 'api.db.*', perms: [] },
      { method: 'api.rpc.*', perms: [] },
    ],
  },
];

const PermsTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Required permissions</th>
      </tr>
    </thead>
    <tbody>
      {PERM_GROUPS.map(group => (
        <>
          <GroupHeader key={`hdr-${group.group}`} label={group.group} cols={2} />
          {group.rows.map(row => (
            <tr key={row.method}>
              <td><Code>{row.method}</Code></td>
              <td>
                {row.perms.length === 0 && !row.note ? <NoPerm /> : null}
                {row.perms.map(p => <Perm key={p}>{p}</Perm>)}
                {row.note
                  ? <span className="ls-ref-muted" style={{ marginLeft: row.perms.length ? 4 : 0 }}>{row.note}</span>
                  : null}
              </td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── Sandbox hardening ────────────────────────────────────────────────────────
//
// Two-layer sandbox protecting the script-runner subprocess from user-script
// reach into host capabilities. The data here mirrors the rendered UI section
// AND seeds the Lisa corpus via TRIGGER_MODEL_INTRO's sandbox subsection (the
// LLM-facing copy lives there for narrative cohesion; the tables here are the
// user-visible canonical form). When the rejected-patterns set in
// `host-dispatcher.ts:checkUserScriptSecurity` changes, or when SAFE_GLOBALS
// in `child-entry.ts` gains/loses categories, update both surfaces.

/** One row in the dispatch-time source-check rejected-patterns table. */
export interface SandboxRejectedPattern {
  /** The literal pattern shape rejected before the script runs. */
  pattern:     string;
  /** Why it's rejected — one-line explanation. */
  why:         string;
  /** What to use instead — the canonical replacement. */
  replacement: string;
}

/**
 * Patterns rejected by `host-dispatcher.ts:checkUserScriptSecurity` before
 * the script's body ever executes. Source check fires at dispatch time;
 * the editor console shows a `[security]` entry naming the rejected
 * pattern. See the `Sandbox hardening` Reference section.
 */
export const SANDBOX_REJECTED_PATTERNS: SandboxRejectedPattern[] = [
  {
    pattern:     "import('...')",
    why:         "Dynamic import lets scripts pull untrusted modules at runtime, bypassing every other check.",
    replacement: "`script.require('library-name')` for inter-script libraries — see the Built-in Libraries section.",
  },
  {
    pattern:     "require('...')",
    why:         "Bare CommonJS `require` would reach Node modules directly.",
    replacement: "`script.require('library-name')`. Method-style access — `obj.require(...)` — is exempt via the source check's `(?<!\\.)` lookbehind.",
  },
  {
    pattern:     "new Function('...') / Function('...')",
    why:         "Runtime-constructed code bypasses the dispatch-time source check.",
    replacement: "Normal function syntax: `function foo() {}` / `const foo = () => {}`. Method-style `obj.Function(...)` is exempt.",
  },
  {
    pattern:     ".constructor.constructor",
    why:         "Prototype-chain path that reaches the Function constructor.",
    replacement: "Same as above — define functions with normal syntax.",
  },
  {
    pattern:     "globalThis.Bun / globalThis[\"Bun\"]",
    why:         "Direct access to the Bun runtime API.",
    replacement: "`api.utils.http.*` for HTTP, `api.files.*` (with `allowDangerous`) for filesystem.",
  },
  {
    pattern:     "globalThis.process / globalThis[\"process\"]",
    why:         "Direct access to the host process (env vars, exit, signals).",
    replacement: "`api.enclave.*` for secrets, the `script.*` global for self-info. No script should ever read host env vars directly.",
  },
];

/** One row in the runtime-lockdown accessible-globals table. */
export interface SandboxAccessibleGroup {
  /** Short category label (e.g. "ES built-ins", "Streams"). */
  category: string;
  /** Globals available to user scripts in this category. */
  globals:  string[];
  /** Optional one-line note for the category (rationale, caveat). */
  note?:    string;
}

/**
 * Categorised view of `child-entry.ts:SAFE_GLOBALS` — the allowlist that the
 * runtime sandbox preserves. Every globalThis property NOT in this allowlist
 * is replaced with `undefined` at subprocess startup; reading the absent
 * global returns `undefined` (so `typeof X === 'undefined'` evaluates
 * naturally for feature-detect paths) and reaching through to a method
 * throws `TypeError: Cannot read properties of undefined`.
 *
 * The canonical list is `SAFE_GLOBALS` in `src/script-runner/child-entry.ts`
 * — when adding to that set, mirror the addition here so the Reference UI
 * stays accurate.
 */
export const SANDBOX_ACCESSIBLE_GROUPS: SandboxAccessibleGroup[] = [
  {
    category: 'ES standard',
    globals:  ['isNaN', 'isFinite', 'parseInt', 'parseFloat', 'NaN', 'Infinity', 'undefined', 'encodeURI', 'encodeURIComponent', 'decodeURI', 'decodeURIComponent', 'escape', 'unescape'],
    note:     'Standard ES global functions + value constants. Pure, no capability surface.',
  },
  {
    category: 'Core built-ins',
    globals:  ['Object', 'Array', 'Number', 'Boolean', 'String', 'Symbol', 'Date', 'RegExp', 'Map', 'Set', 'WeakMap', 'WeakSet', 'WeakRef', 'Promise', 'Proxy', 'Reflect', 'JSON', 'Math', 'Intl', 'BigInt'],
  },
  {
    category: 'Typed arrays + binary',
    globals:  ['ArrayBuffer', 'SharedArrayBuffer', 'DataView', 'Atomics', 'Int8Array', 'Uint8Array', 'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array', 'Float16Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 'BigUint64Array'],
  },
  {
    category: 'Text + URL + base64',
    globals:  ['TextEncoder', 'TextDecoder', 'URL', 'URLSearchParams', 'URLPattern', 'atob', 'btoa'],
    note:     'Pure codecs and URL parsing — no I/O surface.',
  },
  {
    category: 'Binary data carriers',
    globals:  ['Blob', 'File', 'FileReader', 'FormData'],
    note:     'In-memory only; filesystem access still gated by `api.files.*` + `allowDangerous`.',
  },
  {
    category: 'HTTP message types',
    globals:  ['Headers', 'Request', 'Response'],
    note:     'Structural types only. Outbound HTTP capability is `api.utils.http.*` (requires `cors_proxy` + `allowDangerous`).',
  },
  {
    category: 'Streams',
    globals:  ['ReadableStream', 'WritableStream', 'TransformStream', 'ByteLengthQueuingStrategy', 'CountQueuingStrategy', 'CompressionStream', 'DecompressionStream', 'TextEncoderStream', 'TextDecoderStream'],
    note:     'Pure data transforms. The dangerous part of streams is what you READ FROM or PIPE TO; those endpoints are separately gated.',
  },
  {
    category: 'Web Crypto',
    globals:  ['crypto', 'Crypto', 'CryptoKey', 'SubtleCrypto'],
    note:     'Random bytes + `crypto.subtle.*` for signing / encryption. Also powers `api.utils.shortId` / `uuid`.',
  },
  {
    category: 'Async + timers',
    globals:  ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', 'queueMicrotask', 'setImmediate', 'clearImmediate', 'structuredClone', 'reportError'],
    note:     'String-form `setTimeout(\'code\', ms)` is rejected at the wrapper — must pass a function.',
  },
  {
    category: 'Cancellation',
    globals:  ['AbortController', 'AbortSignal'],
  },
  {
    category: 'Errors + iteration',
    globals:  ['Error', 'TypeError', 'RangeError', 'ReferenceError', 'SyntaxError', 'URIError', 'EvalError', 'AggregateError', 'Iterator', 'DisposableStack', 'AsyncDisposableStack', 'SuppressedError'],
  },
  {
    category: 'Event types',
    globals:  ['Event', 'EventTarget', 'CustomEvent', 'MessageEvent', 'ErrorEvent', 'CloseEvent', 'DOMException'],
    note:     'Pure data carriers, no capability.',
  },
  {
    category: 'Function constructor',
    globals:  ['Function'],
    note:     'Whitelisted on architectural necessity — Zod\'s schema compiler and Handlebars\' template compiler both invoke `new Function(...)`. The dispatch-time source check still rejects literal `new Function(...)` / `Function(...)` in user-script source as defence-in-depth.',
  },
  {
    category: 'Buffer',
    globals:  ['Buffer'],
    note:     'Node-compat — user scripts can manipulate bytes; doesn\'t enable escape.',
  },
  {
    category: 'Performance + measurement',
    globals:  ['performance', 'Performance', 'PerformanceEntry', 'PerformanceMark', 'PerformanceMeasure', 'PerformanceObserver', 'PerformanceObserverEntryList', 'PerformanceResourceTiming', 'PerformanceServerTiming', 'PerformanceTiming'],
  },
  {
    category: 'Realm + messaging',
    globals:  ['ShadowRealm', 'MessageChannel', 'MessagePort'],
    note:     '`ShadowRealm` is whitelisted for experimentation; within a single subprocess `MessageChannel`/`MessagePort` can\'t reach anything dangerous.',
  },
  {
    category: 'Misc benign',
    globals:  ['globalThis', 'console', 'navigator', 'WebAssembly', 'FinalizationRegistry', 'HTMLRewriter', 'BuildError', 'BuildMessage', 'ResolveError', 'ResolveMessage'],
    note:     '`navigator` is the read-only Bun metadata object (`userAgent`, `platform`, etc.) — library code feature-detects via it. `console` is per-run shadowed for capture, but kept on the allowlist so the binding exists in the brief window before the per-run preamble.',
  },
  {
    category: 'Architectural necessity',
    globals:  ['spindle', 'process'],
    note:     'Both have known aliasing residuals documented in the security audit response. `spindle` is the host gateway — not present on the script-runner subprocess in production (only on the backend worker); whitelisted for test-infrastructure shape. `process` is whitelisted because Spindle\'s subprocess runtime uses the standard process lifecycle hooks internally; user-script access to bare `process` is closed by AsyncFunction parameter shadowing (Layer 1) and the dispatch-time source check (Layer 4).',
  },
];

const SandboxRejectedPatternsTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Pattern</th>
        <th>Why</th>
        <th>Use instead</th>
      </tr>
    </thead>
    <tbody>
      {SANDBOX_REJECTED_PATTERNS.map(row => (
        <tr key={row.pattern}>
          <td><Code>{row.pattern}</Code></td>
          <td><span className="ls-ref-muted">{row.why}</span></td>
          <td><span className="ls-ref-muted">{row.replacement}</span></td>
        </tr>
      ))}
    </tbody>
  </table>
);

const SandboxAccessibleGlobalsTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Category</th>
        <th>Available globals</th>
      </tr>
    </thead>
    <tbody>
      {SANDBOX_ACCESSIBLE_GROUPS.map(row => (
        <tr key={row.category}>
          <td>{row.category}</td>
          <td>
            <div>
              {row.globals.map((g, i) => (
                <span key={g}>
                  <Code>{g}</Code>
                  {i < row.globals.length - 1 ? ' ' : ''}
                </span>
              ))}
            </div>
            {row.note
              ? <div className="ls-ref-muted" style={{ marginTop: 4, fontSize: '0.95em' }}>{row.note}</div>
              : null}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

// ─── Broadcast built-in events ────────────────────────────────────────────────

export interface BroadcastEventRow {
  name: string;
  payload: string;
  emittedBy: string;
}

export const BROADCAST_EVENTS: BroadcastEventRow[] = [
  {
    name:      'ls:tool:registered',
    payload:   '{ name, scriptId }',
    emittedBy: 'api.tools.register()',
  },
  {
    name:      'ls:tool:unregistered',
    payload:   '{ name, scriptId }',
    emittedBy: 'api.tools.unregister() / auto-cleanup',
  },
  {
    name:      'ls:tool:invoked',
    payload:   '{ name, args, result, scriptId, callMs, councilMember? }',
    emittedBy: 'api.tools.invoke() + host tool dispatch (Council / direct LLM)',
  },
  {
    name:      'ls:macro:registered',
    payload:   `{ name, scriptId, mode: 'push' | 'pull' }`,
    emittedBy: 'api.macros.register()',
  },
  {
    name:      'ls:macro:unregistered',
    payload:   '{ name, scriptId }',
    emittedBy: 'api.macros.unregister() / auto-cleanup',
  },
  {
    name:      'ls:collection:created',
    payload:   '{ name, scope, scriptId, path }',
    emittedBy: 'api.db.collection()',
  },
  {
    name:      'ls:collection:dropped',
    payload:   '{ name, scope, scriptId, path, deletedCount }',
    emittedBy: 'api.db.drop()',
  },
  {
    name:      'ls:collection:inserted',
    payload:   '{ name, scope, scriptId, id, record }',
    emittedBy: 'collection.insert()',
  },
  {
    name:      'ls:collection:updated',
    payload:   `{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }`,
    emittedBy: 'collection.update() (only when count > 0)',
  },
  {
    name:      'ls:collection:deleted',
    payload:   `{ name, scope, scriptId, count, filterKind }`,
    emittedBy: 'collection.delete() / clear() (clear emits count=-1)',
  },
  {
    name:      'ls:collection:size-warning',
    payload:   '{ name, scope, scriptId, bytes }',
    emittedBy: 'auto — collection exceeds 10 MB soft threshold',
  },
  {
    name:      'ls:scriptStorage:set',
    payload:   '{ scriptId, key, value }',
    emittedBy: 'api.scriptStorage.set()',
  },
  {
    name:      'ls:scriptStorage:delete',
    payload:   '{ scriptId, key }',
    emittedBy: 'api.scriptStorage.delete() (only when the key existed)',
  },
  {
    name:      'ls:scriptStorage:clear',
    payload:   '{ scriptId }',
    emittedBy: 'api.scriptStorage.clear() / auto-cleanup on script disable / delete (only when the script HAD entries)',
  },
];

const BroadcastTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Payload fields</th>
        <th>Emitted by</th>
      </tr>
    </thead>
    <tbody>
      {BROADCAST_EVENTS.map(row => (
        <tr key={row.name}>
          <td><Code>{row.name}</Code></td>
          <td><span className="ls-ref-muted">{row.payload}</span></td>
          <td><span className="ls-ref-muted">{row.emittedBy}</span></td>
        </tr>
      ))}
    </tbody>
  </table>
);

// ─── Runtime directives ───────────────────────────────────────────────────────
//
// v1.0 — first parsed directive (`@ls:reload-on-edit`). The `@ls:` prefix
// is the runtime-directive namespace, distinguishing runtime-active
// comments from passive frontmatter tags (`@description`, `@author`, etc.).
// New runtime directives go here; they're picked up by the assistant
// corpus generator + the Markdown export.

export interface DirectiveRow {
  /** Directive form as written in code (without the leading `// `). */
  directive:   string;
  /** Brief description of what enabling the directive does. */
  description: string;
  /** Restrictions on where the directive applies. */
  appliesTo:   string;
}

export const DIRECTIVES_INTRO: string =
  'LumiScript **runtime directives** are special comments that change how the ' +
  'runtime treats your script. They live anywhere at line start in the script ' +
  'source and follow the form `// @ls:<directive-name>`. The `@ls:` prefix ' +
  'distinguishes runtime-active directives from passive frontmatter tags like ' +
  '`@description`, `@author`, `@version`, `@tags` — those are read by humans ' +
  'and the pack import/export tooling but don\'t affect runtime behavior. ' +
  'Detection happens at `update_script` time (each code save); no persistence, ' +
  'no schema change.';

export const DIRECTIVES: DirectiveRow[] = [
  {
    directive:   '@ls:reload-on-edit',
    description:
      'Opts the script INTO automatic hot-reload after a code save. Without ' +
      'this directive, the script\'s closures stay stale until the next real ' +
      'trigger fire or until the user clicks the Reload button on the editor ' +
      'topbar. Add the directive to scripts whose module-scope code is ' +
      'idempotent and cheap (no expensive LLM calls, no duplicate DB writes, ' +
      'no leaked timers). The body re-runs end-to-end on each edit ~500ms ' +
      'after the autosave settles.',
    appliesTo:
      'Enabled trigger scripts (libraries are loaded on-demand and ignore ' +
      'the directive).',
  },
];

const DirectivesTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Directive</th>
        <th>Applies to</th>
        <th>What it does</th>
      </tr>
    </thead>
    <tbody>
      {DIRECTIVES.map(row => (
        <tr key={row.directive}>
          <td><Code>{`// ${row.directive}`}</Code></td>
          <td><span className="ls-ref-muted">{row.appliesTo}</span></td>
          <td><span className="ls-ref-muted">{row.description}</span></td>
        </tr>
      ))}
    </tbody>
  </table>
);

// ─── LumiScript macros ────────────────────────────────────────────────────────

export type MacroReturns = 'boolean' | 'string' | 'silent';

export interface LsMacroRow {
  macro: string;
  aliases: string;
  returns: MacroReturns;
  desc: string;
}

export interface LsMacroGroup {
  /** Short category label shown in the table's group header. */
  label: string;
  /** Optional prose describing the group — rendered as a subline in the UI
   *  and as an italic paragraph under the heading in the Markdown export.
   *  Kept separate from `label` so the Markdown heading stays short. */
  description?: string;
  rows: LsMacroRow[];
}

export const LS_MACRO_GROUPS: LsMacroGroup[] = [
  {
    label: 'Presence',
    rows: [
      {
        macro:   '{{lumiScriptActive}}',
        aliases: '—',
        returns: 'boolean',
        desc:    'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}',
      },
    ],
  },
  {
    label:       'Character Variables',
    description: "reads/writes the active character's variable store. Write operations are silent.",
    rows: [
      {
        macro:   '{{getcvar::key}}',
        aliases: '{{getcharvar::key}}',
        returns: 'string',
        desc:    'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.',
      },
      {
        macro:   '{{setcvar::key::value}}',
        aliases: '{{setcharvar::key::value}}',
        returns: 'silent',
        desc:    'Set a character-scoped variable to value.',
      },
      {
        macro:   '{{addcvar::key::n}}',
        aliases: '{{addcharvar::key::n}}',
        returns: 'silent',
        desc:    'Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric).',
      },
      {
        macro:   '{{inccvar::key}}',
        aliases: '—',
        returns: 'silent',
        desc:    'Increment a character-scoped variable by 1.',
      },
      {
        macro:   '{{deccvar::key}}',
        aliases: '—',
        returns: 'silent',
        desc:    'Decrement a character-scoped variable by 1.',
      },
      {
        macro:   '{{hascvar::key}}',
        aliases: '{{hascharvar::key}}',
        returns: 'boolean',
        desc:    'Returns "true" if the variable exists in the active character\'s store, "false" otherwise.',
      },
      {
        macro:   '{{deletecvar::key}}',
        aliases: '{{deletecharvar::key}}',
        returns: 'silent',
        desc:    'Delete a character-scoped variable.',
      },
    ],
  },
];

const ReturnsBadge: FC<{ type: MacroReturns }> = ({ type }) => {
  if (type === 'silent') return <Silent />;
  if (type === 'boolean') return <Code>{'\"true\" / \"false\"'}</Code>;
  return <Code>string</Code>;
};

const LumiScriptMacrosTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Macro</th>
        <th>Aliases</th>
        <th>Returns</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {LS_MACRO_GROUPS.map(group => (
        <>
          <GroupHeader
            key={`hdr-${group.label}`}
            label={
              group.description
                ? <>{group.label} — <span className="ls-ref-muted" style={{ fontWeight: 'normal' }}>{group.description}</span></>
                : group.label
            }
            cols={4}
          />
          {group.rows.map(row => (
            <tr key={row.macro}>
              <td><Code>{row.macro}</Code></td>
              <td>
                {row.aliases === '—'
                  ? <span className="ls-ref-muted">—</span>
                  : <Code>{row.aliases}</Code>}
              </td>
              <td style={{ whiteSpace: 'nowrap' }}><ReturnsBadge type={row.returns} /></td>
              <td><span className="ls-ref-muted">{row.desc}</span></td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── Key types ────────────────────────────────────────────────────────────────

export interface TypeField { field: string; type: string; optional: boolean; desc: string; }
export interface TypeDoc   { name: string; note?: string; fields: TypeField[]; }

export const KEY_TYPES: TypeDoc[] = [
  // ─── Chat ────────────────────────────────────────────────────────────────────
  {
    name: 'ChatMessage',
    note: 'Returned by api.chat.getMessages().',
    fields: [
      { field: 'id',         type: 'string',                          optional: false, desc: 'Message identifier.' },
      { field: 'content',    type: 'string',                          optional: false, desc: 'Plain-text message content.' },
      { field: 'role',       type: "'user' | 'assistant' | 'system'", optional: false, desc: 'Sender role.' },
      { field: 'metadata?',  type: 'Record<string, unknown>',         optional: true,  desc: 'Arbitrary metadata attached to the message.' },
      { field: 'swipeId',    type: 'number',                          optional: false, desc: 'Index of the active swipe variant. 0 when the message has no alternates.' },
      { field: 'swipes',     type: 'string[]',                        optional: false, desc: 'All swipe variants. swipes[swipeId] equals content.' },
      { field: 'swipeDates', type: 'number[]',                        optional: false, desc: 'Per-swipe creation timestamps (unix epoch seconds), aligned with swipes.' },
      { field: 'extra',      type: 'Record<string, unknown>',         optional: false, desc: 'Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts.' },
    ],
  },
  {
    name: 'Message',
    note: 'The RAW host message record delivered as `data.message` by chat events (MESSAGE_SENT, MESSAGE_EDITED, MESSAGE_SWIPED, SWIPE_EDITED). Snake_case — distinct from the camelCase `ChatMessage` DTO returned by api.chat.getMessages(). Most importantly it uses `is_user` (boolean), NOT `role`.',
    fields: [
      { field: 'id',          type: 'string',                  optional: false, desc: 'Message identifier.' },
      { field: 'content',     type: 'string',                  optional: false, desc: 'Plain-text message content.' },
      { field: 'is_user',     type: 'boolean',                 optional: false, desc: 'True for a user message, false for an assistant message. There is NO `role` field — use this.' },
      { field: 'name',        type: 'string',                  optional: false, desc: 'Sender display name.' },
      { field: 'swipe_id',    type: 'number',                  optional: false, desc: 'Index of the active swipe variant.' },
      { field: 'swipes',      type: 'string[]',                optional: false, desc: 'All swipe variants.' },
      { field: 'swipe_dates', type: 'number[]',                optional: false, desc: 'Per-swipe creation timestamps (unix epoch seconds), aligned with swipes.' },
      { field: 'extra',       type: 'Record<string, unknown>', optional: false, desc: 'Host-maintained bag (reasoning, attachments, hidden flag, etc.). Treat as opaque.' },
    ],
  },
  {
    name: 'GetMessagesOptions',
    note: 'Passed to api.chat.getMessages(options?).',
    fields: [
      { field: 'first?', type: 'number', optional: true, desc: 'Return only the first N messages.' },
      { field: 'last?',  type: 'number', optional: true, desc: 'Return only the last N messages.' },
    ],
  },
  {
    name: 'SendMessageOptions',
    note: "Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style=\"...\" attributes is auto-extracted into a Shadow DOM \"island\" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.",
    fields: [
      { field: 'role?',     type: "'user' | 'assistant' | 'system'", optional: true, desc: "Sender role. Default 'user'." },
      { field: 'metadata?', type: 'Record<string, unknown>',         optional: true, desc: 'Arbitrary metadata to attach.' },
      { field: 'triggerGeneration?', type: 'boolean',                optional: true, desc: 'When true, the host triggers a normal LLM continuation after the message is appended (full preset / persona / world info / regex / character card / streaming pipeline — same as the user pressing Enter on an empty input bar). Use for click-to-respond UIs where the script wants the LLM to immediately reply to its appended message.' },
      { field: 'generation?', type: 'ChatGenerationOptions',         optional: true, desc: 'Per-call overrides for the triggered generation (connection / persona / preset / parameters / target character / council retention). Only consulted when triggerGeneration is true; silently ignored otherwise. Each field is optional and falls through to the active chat\'s defaults when omitted.' },
    ],
  },
  {
    name: 'ChatGenerationOptions',
    note: 'Per-call generation overrides for api.chat.sendMessage(content, { triggerGeneration: true, generation: ... }). Mirrors the host\'s ChatAppendGenerationOptionsDTO 1:1 in camelCase. Each field is optional; omitted fields fall through to the active chat\'s resolved defaults (same as a manual UI generation). Use this when a tool script needs to deviate from the user\'s normal chat configuration for a single triggered generation.',
    fields: [
      { field: 'connectionId?',       type: 'string',                          optional: true, desc: 'Override which connection profile to use. Falls back to the user\'s default connection.' },
      { field: 'personaId?',          type: 'string',                          optional: true, desc: 'Override which persona to use. Falls back to the user\'s active persona setting.' },
      { field: 'personaAddonStates?', type: 'Record<string, boolean>',         optional: true, desc: 'Per-addon enable/disable map for the chosen persona. Keys are addon ids; values are booleans. Omitted addons inherit chat-level state.' },
      { field: 'presetId?',           type: 'string',                          optional: true, desc: 'Override which preset to use. Falls back to the active preset setting (activeLoomPresetId), then to the connection\'s attached preset.' },
      { field: 'forcePresetId?',      type: 'boolean',                         optional: true, desc: 'When true, forces the supplied presetId over a connection-bound preset. Currently only consulted by the host\'s impersonation oneliner pipeline; triggerGeneration runs as generation_type "normal" where this field is a silent no-op. Exposed for fidelity with the host DTO.' },
      { field: 'parameters?',         type: 'Record<string, unknown>',         optional: true, desc: 'Per-call parameter overrides (temperature, max_tokens, top_p, etc.) layered on the resolved preset\'s parameters. Provider-specific keys accepted; forwarded verbatim.' },
      { field: 'targetCharacterId?',  type: 'string',                          optional: true, desc: 'For group chats only: which character should respond. Falls back to the chat\'s character_id.' },
      { field: 'retainCouncil?',      type: 'boolean',                         optional: true, desc: 'When true, retains council-tool results from the previous generation rather than re-running them. Useful for cheap regenerate-style flows where the council context hasn\'t changed. Default false.' },
    ],
  },
  {
    name: 'MessagePatch',
    note: 'Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.',
    fields: [
      { field: 'content?',    type: 'string',                         optional: true, desc: "Replace the active swipe's content." },
      { field: 'metadata?',   type: 'Record<string, unknown>',        optional: true, desc: 'Replace the host-maintained metadata bag. Host-side merge semantics apply.' },
      { field: 'swipes?',     type: 'string[]',                       optional: true, desc: 'Replace the full swipes array. Length changes are expressible here.' },
      { field: 'swipeId?',    type: 'number',                         optional: true, desc: 'Navigate to a different swipe index. Can be used alone to cycle without rewriting content.' },
      { field: 'swipeDates?', type: 'number[]',                       optional: true, desc: 'Replace per-swipe timestamps. Length should match swipes after the patch applies.' },
      { field: 'reasoning?',  type: '{ text?, duration? }',           optional: true, desc: 'Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null.' },
    ],
  },
  {
    name: 'InjectOptions',
    note: 'Passed to api.chat.inject(id, content, options?).',
    fields: [
      { field: 'mode?',      type: "'intercept' | 'context'",         optional: true, desc: "Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly." },
      { field: 'role?',      type: "'system' | 'user' | 'assistant'", optional: true, desc: "Message role. Default 'system'." },
      { field: 'depth?',     type: 'number',                          optional: true, desc: "intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message." },
      { field: 'ephemeral?', type: 'boolean',                         optional: true, desc: 'Auto-remove after the next generation cycle. Default false.' },
    ],
  },
  {
    name: 'InjectionInfo',
    note: 'Returned by api.chat.getInjections().',
    fields: [
      { field: 'id',        type: 'string',                          optional: false, desc: 'Injection identifier.' },
      { field: 'content',   type: 'string',                          optional: false, desc: 'Injected message content.' },
      { field: 'mode',      type: "'intercept' | 'context'",         optional: false, desc: 'Pipeline phase this injection targets.' },
      { field: 'role',      type: 'string',                          optional: false, desc: 'Message role.' },
      { field: 'depth',     type: 'number',                          optional: false, desc: 'Position from end of assembled array (intercept mode).' },
      { field: 'ephemeral', type: 'boolean',                         optional: false, desc: 'Whether the injection auto-removes after generation.' },
      { field: 'scriptId',  type: 'string',                          optional: false, desc: 'ID of the script that created this injection.' },
    ],
  },
  // ─── Message content processor ──────────────────────────────────────────────
  {
    name: 'MessageContentProcessorOptions',
    note: 'Passed to api.chat.registerContentProcessor(handler, options?).',
    fields: [
      { field: 'id?',         type: 'string',                                                         optional: true, desc: 'Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted.' },
      { field: 'priority?',   type: 'number',                                                         optional: true, desc: 'Lower runs first within the LumiScript multiplexer pass. Default 100.' },
      { field: 'origin?',     type: "MessageContentProcessorOrigin | MessageContentProcessorOrigin[]", optional: true, desc: 'Restrict to specific origins. Default: all four. Pre-filtered before invocation.' },
      { field: 'timeoutMs?',  type: 'number',                                                         optional: true, desc: 'Per-invocation soft timeout. Default 2000. The host\'s outer 10-second budget is shared across all LumiScript handlers.' },
    ],
  },
  {
    name: 'MessageContentProcessorCtx',
    note: "Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",
    fields: [
      { field: 'chatId',      type: 'string',                          optional: false, desc: 'Active chat id.' },
      { field: 'messageId?',  type: 'string',                          optional: true,  desc: "Undefined for 'create' origins (the row doesn't exist yet)." },
      { field: 'content',     type: 'string',                          optional: false, desc: 'Current content (already transformed by any earlier processors in the chain).' },
      { field: 'extra?',      type: 'Record<string, unknown>',         optional: true,  desc: 'Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins.' },
      { field: 'origin',      type: "'create' | 'update' | 'swipe_add' | 'swipe_update' | 'render'", optional: false, desc: "Which path triggered this invocation. 'create' includes auto-greetings. 'render' fires on per-message display rendering — non-persisting, fires often, returned extra ignored." },
      { field: 'swipeIndex?', type: 'number',                          optional: true,  desc: "Set for 'swipe_update' only — zero-based index of the swipe being rewritten." },
      { field: 'userId',      type: 'string',                          optional: false, desc: 'Owning user id for the write.' },
    ],
  },
  {
    name: 'MessageContentProcessorResult',
    note: "Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",
    fields: [
      { field: 'content?', type: 'string',                  optional: true, desc: "Replaces the stored content for downstream processors and the DB write. On 'render', feeds the display-regex pass before paint." },
      { field: 'extra?',   type: 'Record<string, unknown>', optional: true, desc: "Delta keys to shallow-merge. Ignored on swipe origins and 'render'." },
    ],
  },
  // ─── Macro interceptor ──────────────────────────────────────────────────────
  {
    name: 'MacroInterceptorOptions',
    note: 'Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.',
    fields: [
      { field: 'id?',              type: 'string',                                                  optional: true, desc: 'Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted.' },
      { field: 'priority?',        type: 'number',                                                  optional: true, desc: 'Lower runs first. Default 100.' },
      { field: 'phase?',           type: "MacroInterceptorPhase | MacroInterceptorPhase[]",         optional: true, desc: "Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'." },
      { field: 'matchTemplate?',   type: 'string | string[] | RegExp',                              optional: true, desc: "Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'." },
      { field: 'timeoutMs?',       type: 'number',                                                  optional: true, desc: 'Per-invocation soft timeout. Default 2000. The host\'s outer 10-second budget is shared across all LumiScript handlers.' },
    ],
  },
  {
    name: 'MacroInterceptorCtx',
    note: 'Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.',
    fields: [
      { field: 'template',     type: 'string',                  optional: false, desc: 'Current raw template (post earlier-handler transforms).' },
      { field: 'env',          type: 'MacroInterceptorEnv',     optional: false, desc: 'Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead.' },
      { field: 'commit',       type: 'boolean',                 optional: false, desc: "Whether the host is in commit mode for this evaluation." },
      { field: 'phase',        type: "'prompt' | 'display' | 'response' | 'other'", optional: false, desc: 'Which call site triggered this evaluation.' },
      { field: 'sourceHint?',  type: 'string',                  optional: true,  desc: 'Optional source hint when the host can attribute the eval (preset block name, etc.).' },
      { field: 'userId?',      type: 'string',                  optional: true,  desc: 'User ID that initiated the macro resolution (when available).' },
    ],
  },
  // ─── UI ──────────────────────────────────────────────────────────────────────
  {
    name: 'ModalItem',
    note: 'A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.',
    fields: [
      { field: "type: 'text'",      type: "{ content: string; muted?: boolean }",  optional: false, desc: 'A text block. muted: true renders in dim/muted colour.' },
      { field: "type: 'heading'",   type: '{ content: string }',                   optional: false, desc: 'A section heading.' },
      { field: "type: 'key_value'", type: '{ label: string; value: string }',       optional: false, desc: 'Label–value row (left label, right value).' },
      { field: "type: 'divider'",   type: '{}',                                    optional: false, desc: 'A horizontal separator. No extra fields.' },
      { field: "type: 'card'",      type: '{ items: ModalItem[] }',                optional: false, desc: 'A themed card grouping child items (1 level deep recommended).' },
    ],
  },
  {
    name: 'ShowModalOptions',
    note: 'Options for api.ui.showModal(items, options).',
    fields: [
      { field: 'title',       type: 'string',  optional: false, desc: 'Modal header title. Required.' },
      { field: 'width?',      type: 'number',  optional: true,  desc: 'Width in pixels (default: 420). Clamped to viewport.' },
      { field: 'maxHeight?',  type: 'number',  optional: true,  desc: 'Max height in pixels (default: 520). Clamped to viewport.' },
      { field: 'persistent?', type: 'boolean', optional: true,  desc: 'When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false.' },
    ],
  },
  {
    name: 'ModalResult',
    note: 'Dismissal payload inside ModalHandle.result.',
    fields: [
      { field: 'dismissedBy', type: "'user' | 'extension' | 'cleanup'", optional: false, desc: "'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded." },
    ],
  },
  {
    name: 'ModalHandle',
    note: 'Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.',
    fields: [
      { field: 'openRequestId', type: 'string',               optional: false, desc: 'UUID identifying this modal instance. Immediately available on the returned handle.' },
      { field: 'result',        type: 'Promise<ModalResult>',  optional: false, desc: 'Resolves with dismissal reason when the modal closes.' },
      { field: 'close()',       type: 'Promise<void>',         optional: false, desc: 'Programmatically dismiss the modal.' },
    ],
  },
  {
    name: 'AdvancedModalOptions',
    note: 'Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.',
    fields: [
      { field: 'title',       type: 'string',  optional: false, desc: 'Modal header title. Required.' },
      { field: 'width?',      type: 'number',  optional: true,  desc: 'Width in pixels. Default: 420 (host). Clamped to viewport.' },
      { field: 'maxHeight?',  type: 'number',  optional: true,  desc: 'Max height in pixels. Default: 520 (host). Clamped to viewport.' },
      { field: 'persistent?', type: 'boolean', optional: true,  desc: 'When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work.' },
    ],
  },
  {
    name: 'AdvancedModalDismissReason',
    note: "Reason a modal was dismissed. Passed to onDismiss handlers.",
    fields: [
      { field: "'user'",     type: 'literal', optional: false, desc: 'Close button, backdrop click, or Escape key.' },
      { field: "'script'",   type: 'literal', optional: false, desc: 'The script called handle.dismiss().' },
      { field: "'teardown'", type: 'literal', optional: false, desc: 'Script was disabled or deleted while the modal was open.' },
    ],
  },
  {
    name: 'AdvancedModalHandle',
    note: 'Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.',
    fields: [
      { field: 'modalId',           type: 'string',                                              optional: false, desc: 'UUID identifying this modal instance. Available synchronously.' },
      { field: 'root',              type: 'DOMHandle',                                           optional: false, desc: "DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal." },
      { field: 'dismissed',         type: 'boolean',                                             optional: false, desc: 'True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task.' },
      { field: 'setTitle(title)',   type: '(string) => void',                                    optional: false, desc: 'Update the modal header title.' },
      { field: 'dismiss()',         type: '() => void',                                          optional: false, desc: 'Close the modal programmatically. Safe to call after dismissal (no-op).' },
      { field: 'onDismiss(handler)', type: '(fn: (reason) => void) => () => void',              optional: false, desc: "Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason." },
    ],
  },
  {
    name: 'ContextMenuItem',
    note: 'A single entry in api.ui.showContextMenu()`s items array.',
    fields: [
      { field: 'key',       type: 'string',                 optional: false, desc: 'Stable key returned when this item is selected. Required.' },
      { field: 'label',     type: 'string',                 optional: false, desc: "Display text. Ignored when type === 'divider'." },
      { field: 'type?',     type: "'item' | 'divider'",     optional: true,  desc: "Entry type. Default: 'item'." },
      { field: 'disabled?', type: 'boolean',                optional: true,  desc: 'Greyed out and not clickable.' },
      { field: 'danger?',   type: 'boolean',                optional: true,  desc: 'Rendered in red / danger style.' },
      { field: 'active?',   type: 'boolean',                optional: true,  desc: 'Highlighted to indicate current selection.' },
    ],
  },
  {
    name: 'ShowContextMenuOptions',
    note: 'Options for api.ui.showContextMenu().',
    fields: [
      { field: 'position', type: '{ x: number; y: number }', optional: false, desc: 'Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler).' },
      { field: 'items',    type: 'ContextMenuItem[]',        optional: false, desc: 'Menu entries.' },
    ],
  },
  {
    name: 'InputBarActionOptions',
    note: 'Options for api.ui.registerInputBarAction().',
    fields: [
      { field: 'id',        type: 'string',  optional: false, desc: 'Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required.' },
      { field: 'label',     type: 'string',  optional: false, desc: 'Display label shown in the Extras popover row.' },
      { field: 'subtitle?', type: 'string',  optional: true,  desc: 'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.' },
      { field: 'iconSvg?',  type: 'string',  optional: true,  desc: 'Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14.' },
      { field: 'iconUrl?',  type: 'string',  optional: true,  desc: 'URL to an icon image. Takes precedence over iconSvg if both are set.' },
      { field: 'enabled?',  type: 'boolean', optional: true,  desc: 'When false, the action is hidden from the popover. Default: true.' },
    ],
  },
  {
    name: 'InputBarActionHandle',
    note: 'Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.',
    fields: [
      { field: 'actionId',                   type: 'string',                                  optional: false, desc: 'The action id (same as the id passed in options).' },
      { field: 'setLabel(label)',            type: '(string) => void',                        optional: false, desc: 'Update the display label. Safe to call after destroy (no-op).' },
      { field: 'setSubtitle(subtitle?)',     type: '(string | undefined) => void',            optional: false, desc: 'Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy.' },
      { field: 'setEnabled(enabled)',        type: '(boolean) => void',                       optional: false, desc: 'Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy.' },
      { field: 'onClick(handler)',           type: '(fn: () => void) => () => void',          optional: false, desc: 'Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour).' },
      { field: 'destroy()',                  type: '() => void',                              optional: false, desc: 'Remove the action from the popover and clear all click handlers. Idempotent.' },
    ],
  },
  {
    name: 'FloatWidgetOptions',
    note: 'Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.',
    fields: [
      { field: 'width',             type: 'number',                     optional: false, desc: 'Widget width in pixels. Required.' },
      { field: 'height',            type: 'number',                     optional: false, desc: 'Widget height in pixels. Required.' },
      { field: 'initialPosition?',  type: '{ x: number; y: number }',   optional: true,  desc: 'Starting position in viewport coordinates. If omitted, the host applies its own default placement.' },
      { field: 'snapToEdge?',       type: 'boolean',                    optional: true,  desc: 'Snap to the nearest screen edge after drag. Default: false.' },
      { field: 'tooltip?',          type: 'string',                     optional: true,  desc: 'Hover tooltip text.' },
      { field: 'chromeless?',       type: 'boolean',                    optional: true,  desc: 'Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false.' },
    ],
  },
  {
    name: 'FloatWidgetHandle',
    note: 'Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.',
    fields: [
      { field: 'widgetId',                           type: 'string',                                                 optional: false, desc: 'UUID identifying this widget instance. Available synchronously.' },
      { field: 'root',                               type: 'DOMHandle',                                              optional: false, desc: "DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget." },
      { field: 'moveTo(x, y)',                       type: '(number, number) => void',                               optional: false, desc: 'Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it.' },
      { field: 'getPosition()',                      type: '() => { x: number; y: number }',                         optional: false, desc: 'Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative).' },
      { field: 'setVisible(visible)',                type: '(boolean) => void',                                      optional: false, desc: 'Show or hide the widget.' },
      { field: 'isVisible()',                        type: '() => boolean',                                          optional: false, desc: 'Current cached visibility state.' },
      { field: 'onDragEnd(handler)',                 type: '(fn: (pos) => void) => () => void',                      optional: false, desc: 'Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe.' },
      { field: 'destroy()',                          type: '() => void',                                             optional: false, desc: 'Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops.' },
    ],
  },
  {
    name: 'MountAppOptions',
    note: 'Options for api.ui.mountApp(). All optional.',
    fields: [
      { field: 'className?', type: 'string',                          optional: true, desc: 'CSS class applied to the mount container.' },
      { field: 'position?',  type: "'start' | 'end' | 'app-overlay'",  optional: true, desc: "Where the portal sits: before / after the main view, or covering it ('app-overlay'). Default host-defined." },
    ],
  },
  {
    name: 'MountedAppHandle',
    note: 'Returned by api.ui.mountApp(). A route-persistent full-bleed document.body portal. Body DOM is script-owned via root (DOMHandle); the root element carries data-ls-script + data-ls-mount so api.ui.dom.addStyle() @scope rules match content inside.',
    fields: [
      { field: 'mountId',            type: 'string',           optional: false, desc: 'UUID identifying this mount. Available synchronously.' },
      { field: 'root',               type: 'DOMHandle',        optional: false, desc: "DOMHandle bound to the mount's content container. Render + wire via api.ui.dom.*; calls are buffered until the frontend has created the mount." },
      { field: 'setVisible(visible)', type: '(boolean) => void', optional: false, desc: 'Show or hide the mount without destroying it.' },
      { field: 'destroy()',          type: '() => void',       optional: false, desc: 'Remove the mount from the app shell. Idempotent — subsequent calls and method invocations are silent no-ops.' },
    ],
  },
  {
    name: 'DrawerTabOptions',
    note: 'Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.',
    fields: [
      { field: 'id',           type: 'string',   optional: false, desc: 'Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required.' },
      { field: 'title',        type: 'string',   optional: false, desc: 'Full display title. Shown in the panel header and the command palette listing. Required.' },
      { field: 'shortName?',   type: 'string',   optional: true,  desc: 'Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title.' },
      { field: 'description?', type: 'string',   optional: true,  desc: 'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".' },
      { field: 'keywords?',    type: 'string[]', optional: true,  desc: 'Extra terms for command-palette fuzzy search. The extension name is always included automatically.' },
      { field: 'headerTitle?', type: 'string',   optional: true,  desc: 'Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title.' },
      { field: 'iconSvg?',     type: 'string',   optional: true,  desc: 'Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream.' },
      { field: 'iconUrl?',     type: 'string',   optional: true,  desc: 'URL to an icon image. Mutually exclusive with iconSvg.' },
    ],
  },
  {
    name: 'DrawerTabHandle',
    note: "Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",
    fields: [
      { field: 'tabId',                  type: 'string',                       optional: false, desc: 'The tab id (same as the id passed in options).' },
      { field: 'root',                   type: 'DOMHandle',                    optional: false, desc: "DOMHandle bound to the tab's content container." },
      { field: 'setTitle(title)',        type: '(string) => void',             optional: false, desc: 'Update the full title (command palette + panel header).' },
      { field: 'setShortName(shortName)', type: '(string) => void',            optional: false, desc: 'Update the sidebar icon label.' },
      { field: 'setBadge(text)',         type: '(string | null) => void',      optional: false, desc: 'Show a badge next to the tab icon. Pass null to clear.' },
      { field: 'activate()',             type: '() => void',                   optional: false, desc: 'Programmatically switch the drawer to this tab.' },
      { field: 'onActivate(handler)',    type: '(fn: () => void) => () => void', optional: false, desc: 'Register an activation handler. Multiple handlers supported. Returns unsubscribe.' },
      { field: 'destroy()',              type: '() => void',                   optional: false, desc: 'Remove the tab from the sidebar and detach all handlers. Idempotent.' },
    ],
  },
  {
    name: 'UIDrawerTab',
    note: 'A drawer tab discoverable via api.ui.getDrawerTabs() — built-in or extension-contributed. The id is what you pass to api.ui.openDrawerTab().',
    fields: [
      { field: 'id',             type: 'string',                    optional: false, desc: 'Stable tab id (→ openDrawerTab(id)).' },
      { field: 'shortName',      type: 'string',                    optional: false, desc: 'Short label shown beneath the sidebar icon.' },
      { field: 'tabName',        type: 'string',                    optional: false, desc: 'Full title shown in menus and the command palette.' },
      { field: 'tabDescription', type: 'string',                    optional: false, desc: 'One-line description shown in the command palette.' },
      { field: 'keywords',       type: 'string[]',                  optional: false, desc: 'Keywords used for command-palette fuzzy search.' },
      { field: 'source',         type: "'builtin' | 'extension'",   optional: false, desc: 'Whether the tab is built into Lumiverse or contributed by an extension.' },
      { field: 'extensionId?',   type: 'string',                    optional: true,  desc: "For extension-contributed tabs, the owning extension's identifier." },
    ],
  },
  {
    name: 'UISettingsTab',
    note: 'A settings tab discoverable via api.ui.getSettingsTabs(). Role-restricted tabs are filtered out for users lacking the role. The id is what you pass to api.ui.openSettings().',
    fields: [
      { field: 'id',             type: 'string',              optional: false, desc: 'Stable tab id (→ openSettings(id)).' },
      { field: 'shortName',      type: 'string',              optional: false, desc: 'Short label shown in the settings sidebar.' },
      { field: 'tabName',        type: 'string',              optional: false, desc: 'Full title shown in the settings header / command palette.' },
      { field: 'tabDescription', type: 'string',              optional: false, desc: 'One-line description shown in the command palette.' },
      { field: 'keywords',       type: 'string[]',            optional: false, desc: 'Keywords used for command-palette fuzzy search.' },
      { field: 'role?',          type: "'admin' | 'owner'",   optional: true,  desc: 'Set when the tab is only visible to certain roles.' },
    ],
  },
  {
    name: 'PickFileOptions',
    note: 'Options for api.ui.pickFile().',
    fields: [
      { field: 'accept?',       type: 'string[]', optional: true, desc: "File-type filters — extensions and/or MIME types (e.g. ['.json', 'application/json'])." },
      { field: 'multiple?',     type: 'boolean',  optional: true, desc: 'Allow selecting more than one file. Default: false.' },
      { field: 'maxSizeBytes?', type: 'number',   optional: true, desc: 'Maximum size per file in bytes. pickFile() rejects if a selected file exceeds this.' },
    ],
  },
  {
    name: 'PickedFile',
    note: 'A file returned by api.ui.pickFile(). bytes is the raw Uint8Array — decode text via new TextDecoder().decode(bytes), or pass to api.images.upload / api.files.',
    fields: [
      { field: 'name',      type: 'string',     optional: false, desc: 'Original file name.' },
      { field: 'mimeType',  type: 'string',     optional: false, desc: "MIME type (falls back to 'application/octet-stream')." },
      { field: 'sizeBytes', type: 'number',     optional: false, desc: 'File size in bytes.' },
      { field: 'bytes',     type: 'Uint8Array', optional: false, desc: 'Raw file contents.' },
    ],
  },
  {
    name: 'UIKeyboardState',
    note: 'Snapshot from api.ui.events.getKeyboardState() / onKeyboardChange().',
    fields: [
      { field: 'visible',        type: 'boolean', optional: false, desc: 'True when the host believes a virtual keyboard is currently visible.' },
      { field: 'insetBottom',    type: 'number',  optional: false, desc: 'Safe bottom inset in CSS pixels that keeps content above the keyboard.' },
      { field: 'viewportWidth',  type: 'number',  optional: false, desc: 'Current visual viewport width in CSS pixels.' },
      { field: 'viewportHeight', type: 'number',  optional: false, desc: 'Current visual viewport height in CSS pixels.' },
    ],
  },
  {
    name: 'UIDrawerState',
    note: 'Snapshot from api.ui.events.getDrawerState() / onDrawerChange().',
    fields: [
      { field: 'open',  type: 'boolean',        optional: false, desc: 'Whether the side drawer is currently open.' },
      { field: 'tabId', type: 'string | null',  optional: false, desc: 'Active drawer tab id, or null.' },
    ],
  },
  {
    name: 'UISettingsState',
    note: 'Snapshot from api.ui.events.getSettingsState() / onSettingsChange().',
    fields: [
      { field: 'open', type: 'boolean', optional: false, desc: 'Whether the settings modal is currently open.' },
      { field: 'view', type: 'string',  optional: false, desc: 'Active settings view identifier.' },
    ],
  },
  // ─── DOM Injection ───────────────────────────────────────────────────────────
  {
    name: 'DOMInjectOptions',
    note: 'Options for api.ui.dom.inject(target, html, options?).',
    fields: [
      { field: 'position?', type: "'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'", optional: true, desc: "Insertion position relative to the target element. Default: 'beforeend'." },
      { field: 'id?',       type: 'string',                                                   optional: true, desc: 'Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate.' },
    ],
  },
  {
    name: 'DOMMessageInjectOptions',
    note: 'Options for api.ui.dom.injectAtMessage(messageId, html, options?).',
    fields: [
      { field: 'position?', type: "'header' | 'footer'", optional: true, desc: "Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content." },
      { field: 'id?',       type: 'string',              optional: true, desc: 'Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate.' },
    ],
  },
  {
    name: 'DOMDelegateOptions',
    note: 'Options for api.ui.dom.delegate(selector, event, handler, options?).',
    fields: [
      { field: 'root?',            type: "'chat' | 'document'", optional: true, desc: "Where to attach the actual host-side capture listener. 'chat' (default): restricts matching to chat content; matches descendants of [data-message-id]. 'document': matches anywhere in the page (including Lumiverse's own UI surfaces). Both gate on app_manipulation." },
      { field: 'messageId?',       type: 'string',              optional: true, desc: 'Limit matching to a specific message id. Has no effect when root is "document".' },
      { field: 'preventDefault?',  type: 'boolean | ConditionalPreventDefault', optional: true, desc: "When true, the frontend listener calls event.preventDefault() before dispatching on every selector match. Can also be a ConditionalPreventDefault object to fire only on specific key / button / modifier combinations (e.g. plain Enter on textarea while letting Shift+Enter through). Default: false." },
      { field: 'stopPropagation?', type: 'boolean',             optional: true, desc: "When true, the frontend listener calls event.stopPropagation() after dispatching, preventing host-side and other delegation listeners from also reacting. Default: false." },
    ],
  },
  {
    name: 'DOMDelegatedEventData',
    note: 'Event data delivered to handlers registered via api.ui.dom.delegate(). Extends DOMEventData with a serialized snapshot of the matched element + modifier-key state + optional message context.',
    fields: [
      { field: 'matched',                  type: '{ tagName, classList, dataset, attributes, textContent, id?, value?, checked?, selectedIndex?, selectedText?, label? }', optional: false, desc: 'Snapshot of the element matched by event.target.closest(selector). May be an ancestor of the literal event.target. Form-input fields (value/checked/selectedIndex/selectedText/label) populated only for matching element types. label is the trimmed text of the first associated <label> (input / textarea / select only — explicit "for=" or implicit wrapping).' },
      { field: 'modifiers',                type: '{ ctrl, shift, alt, meta, button? }',                                                                              optional: false, desc: 'Modifier-key state at event time. button is populated for click events (0=left, 1=middle, 2=right).' },
      { field: 'message?',                 type: '{ id, role, swipeId }',                                                                                            optional: true,  desc: "Populated when the matched element is inside an assistant or user message. role: 'user' for [data-part=\"user\"], 'assistant' otherwise. swipeId is the active swipe at dispatch time, resolved backend-side via the host's chat history. Falls through with 0 if the chat closed between event fire and dispatch or the message left the history." },
      { field: '(plus DOMEventData fields)', type: 'see DOMEventData',                                                                                                optional: false, desc: 'Inherits type, targetId, targetValue, targetChecked, dataset, detail, clientX, clientY from DOMEventData (see above).' },
    ],
  },
  {
    name: 'DOMHandle',
    note: 'Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). Most methods are fire-and-forget; the exception is `read(options?)` which is async (it awaits a frontend roundtrip).',
    fields: [
      { field: 'id',          type: 'string',                                   optional: false, desc: 'Unique element ID (generated or from stable ID).' },
      { field: 'update(html)', type: 'void',                                    optional: false, desc: 'Replace the inner HTML of the injected element. Sanitised via DOMPurify on the same FORBID_TAGS config as `api.ui.dom.inject` (`iframe` / `frame` / `object` / `embed` / `form` + default `on*` / `formaction` / `srcdoc` / `javascript:` strip). DOMPurify blocks XSS-via-tag-injection, but is not a substitute for thinking about trust — be deliberate about LLM-generated or externally-fetched HTML.' },
      { field: 'remove()',    type: 'void',                                     optional: false, desc: 'Remove the element from the DOM and detach all listeners.' },
      { field: 'on(event, handler, options?)', type: '() => void',              optional: false, desc: 'Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function. **For handlers that do async work, make the handler `async` and `await` everything** — the host keeps the per-fire activeRun alive across the handler\'s await chain, so dispatches inside the awaited chain land cleanly. A SYNC handler that kicks off async work fire-and-forget (e.g. `(ev) => { doAsync(); }` with no `await`) returns `undefined` immediately, the activeRun closes, and any `api.*` calls the lingering async work tries to make fail with `RunCompletedError: late api call … runIdSource=context`. Write `async (ev) => { await doAsync(); }` instead.' },
      { field: 'makeDraggable(handleSelector?)', type: 'void',               optional: false, desc: 'Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable.' },
      { field: 'injectChild(target, html, options?)', type: 'DOMHandle',     optional: false, desc: 'Inject HTML as a descendant of this handle\'s bound element. Target selector resolved RELATIVE to this element via the backend\'s element-map ref. Use when the parent may be orphaned at inject time (drawer tabs, modal bodies pre-mount). Sanitised via DOMPurify on the same FORBID_TAGS config as `api.ui.dom.inject` (`iframe` / `frame` / `object` / `embed` / `form` + default `on*` / `formaction` / `srcdoc` / `javascript:` strip).' },
      { field: 'read(options?)', type: 'Promise<SerializedDOMElement | null>', optional: false, desc: 'Read a snapshot of this element\'s current DOM state (tag, attrs, text, childCount, optionally innerHTML). Returns `null` when the FE no longer has the element (host shell tore down a parent, etc.). Throws DomHandleReleasedError if the handle was already removed (`.remove()` or `api.ui.dom.cleanup()`). Async — uses the same request-response IPC pattern as api.ui.showContextMenu. Common uses: verify an injection rendered as expected, inspect script-controlled widget state, walk markup via `{ html: true }`. For form-control live values use `delegate(selector, \'input\', ...)` instead — `.value` is a DOM property, not an attribute.' },
    ],
  },
  {
    name: 'MountedComponentHandle',
    note: 'Returned synchronously by api.ui.components.mountBadge / mountSpinner (display-only components). Methods are fire-and-forget.',
    fields: [
      { field: 'id',            type: 'string',                optional: false, desc: 'Unique component ID (host-assigned).' },
      { field: 'update(patch)', type: 'void',                  optional: false, desc: 'Merge a partial of the original mount options into the live component. Pass only the fields to change. Fire-and-forget (no round-trip).' },
      { field: 'destroy()',     type: 'void',                  optional: false, desc: 'Unmount the component and release host resources. The container element you mounted into is left in place. Idempotent.' },
    ],
  },
  {
    name: 'MountedValueComponentHandle',
    note: 'Generic `MountedValueComponentHandle<TOptions, TValue>`. Returned by interactive mounts (api.ui.components.mountSwitch → boolean, mountTextInput → string). Extends MountedComponentHandle with an async getValue().',
    fields: [
      { field: 'id',            type: 'string',                optional: false, desc: 'Unique component ID.' },
      { field: 'update(patch)', type: 'void',                  optional: false, desc: 'Merge a partial of the mount options into the live component. Fire-and-forget.' },
      { field: 'destroy()',     type: 'void',                  optional: false, desc: 'Unmount + release. Also drops the component\'s registered callbacks. Idempotent.' },
      { field: 'getValue()',    type: 'Promise<TValue>',       optional: false, desc: 'Read the component\'s current value. ASYNC here (a frontend round-trip across the worker boundary), unlike the host\'s synchronous getValue(). Same reason DOMHandle.read() is async. Auto-controlled state lives host-side — you don\'t need to mirror it.' },
    ],
  },
  {
    name: 'SpindleBadgeOptions',
    note: 'Options for api.ui.components.mountBadge().',
    fields: [
      { field: 'text?',  type: 'string',  optional: true, desc: 'Badge text. Default "".' },
      { field: 'color?', type: "'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'", optional: true, desc: "Accent color. Default 'neutral'." },
      { field: 'size?',  type: "'sm' | 'md' | 'pill'", optional: true, desc: "Visual size. Default 'md'." },
    ],
  },
  {
    name: 'SpindleSpinnerOptions',
    note: 'Options for api.ui.components.mountSpinner().',
    fields: [
      { field: 'size?', type: 'number',  optional: true, desc: 'Diameter in CSS pixels. Default 16.' },
      { field: 'fast?', type: 'boolean', optional: true, desc: 'Use the faster rotation variant. Default false.' },
    ],
  },
  {
    name: 'SpindleSwitchOptions',
    note: 'Options for api.ui.components.mountSwitch(). onChange fires into your script on every toggle.',
    fields: [
      { field: 'checked?',   type: 'boolean',                optional: true, desc: 'Initial state. Default false.' },
      { field: 'onChange?',  type: '(checked: boolean) => void', optional: true, desc: 'Fired on every toggle with the new state. Can be async; the host keeps the per-fire run alive across awaits.' },
      { field: 'size?',      type: "'sm' | 'md'",            optional: true, desc: "Visual size. Default 'md'." },
      { field: 'disabled?',  type: 'boolean',                optional: true, desc: 'Disable user interaction. Default false.' },
      { field: 'ariaLabel?', type: 'string',                 optional: true, desc: 'Accessible label.' },
    ],
  },
  {
    name: 'SpindleTextInputOptions',
    note: 'Options for api.ui.components.mountTextInput(). onChange fires on every user change.',
    fields: [
      { field: 'value?',       type: 'string',               optional: true, desc: 'Initial value. Default "".' },
      { field: 'onChange?',    type: '(value: string) => void', optional: true, desc: 'Fired on every user change with the full current text. Can be async.' },
      { field: 'placeholder?', type: 'string',               optional: true, desc: 'Placeholder text.' },
      { field: 'autoFocus?',   type: 'boolean',              optional: true, desc: 'Focus on mount. Default false.' },
      { field: 'disabled?',    type: 'boolean',              optional: true, desc: 'Disable user interaction. Default false.' },
      { field: 'className?',   type: 'string',               optional: true, desc: 'Additional CSS class on the wrapper.' },
      { field: 'ariaLabel?',   type: 'string',               optional: true, desc: 'Accessible label.' },
    ],
  },
  {
    name: 'SpindleTextAreaOptions',
    note: 'Options for api.ui.components.mountTextArea(). Like SpindleTextInputOptions plus rows.',
    fields: [
      { field: 'value?',       type: 'string',               optional: true, desc: 'Initial value. Default "".' },
      { field: 'onChange?',    type: '(value: string) => void', optional: true, desc: 'Fired on every user change. Can be async.' },
      { field: 'placeholder?', type: 'string',               optional: true, desc: 'Placeholder text.' },
      { field: 'rows?',        type: 'number',               optional: true, desc: 'Visible rows. Default 4.' },
      { field: 'disabled?',    type: 'boolean',              optional: true, desc: 'Disable user interaction. Default false.' },
      { field: 'className?',   type: 'string',               optional: true, desc: 'Additional CSS class.' },
      { field: 'ariaLabel?',   type: 'string',               optional: true, desc: 'Accessible label.' },
    ],
  },
  {
    name: 'SpindleNumericInputOptions',
    note: 'Options for api.ui.components.mountNumericInput(). Value is number | null (null = empty when allowEmpty).',
    fields: [
      { field: 'value?',       type: 'number | null',        optional: true, desc: 'Initial value. null = empty. Default null.' },
      { field: 'onChange?',    type: '(value: number | null) => void', optional: true, desc: 'Fired on every user change.' },
      { field: 'allowEmpty?',  type: 'boolean',              optional: true, desc: 'Allow null (empty) as a valid value. Default false.' },
      { field: 'integer?',     type: 'boolean',              optional: true, desc: 'Restrict to integers. Default false.' },
      { field: 'min?',         type: 'number',               optional: true, desc: 'Lower bound.' },
      { field: 'max?',         type: 'number',               optional: true, desc: 'Upper bound.' },
      { field: 'step?',        type: 'number',               optional: true, desc: 'Native step size.' },
      { field: 'placeholder?', type: 'string',               optional: true, desc: 'Placeholder text.' },
      { field: 'disabled?',    type: 'boolean',              optional: true, desc: 'Disable user interaction. Default false.' },
    ],
  },
  {
    name: 'SpindleNumberStepperOptions',
    note: 'Options for api.ui.components.mountNumberStepper(). Like SpindleNumericInputOptions minus integer; step defaults to 1.',
    fields: [
      { field: 'value?',       type: 'number | null',        optional: true, desc: 'Initial value. null = empty. Default null.' },
      { field: 'onChange?',    type: '(value: number | null) => void', optional: true, desc: 'Fired on every user change.' },
      { field: 'allowEmpty?',  type: 'boolean',              optional: true, desc: 'Allow null (empty). Default false.' },
      { field: 'min?',         type: 'number',               optional: true, desc: 'Lower bound.' },
      { field: 'max?',         type: 'number',               optional: true, desc: 'Upper bound.' },
      { field: 'step?',        type: 'number',               optional: true, desc: 'Step size. Default 1.' },
      { field: 'placeholder?', type: 'string',               optional: true, desc: 'Placeholder text.' },
      { field: 'disabled?',    type: 'boolean',              optional: true, desc: 'Disable user interaction. Default false.' },
    ],
  },
  {
    name: 'SpindleCheckboxOptions',
    note: 'Options for api.ui.components.mountCheckbox().',
    fields: [
      { field: 'checked?',   type: 'boolean',                optional: true, desc: 'Initial state. Default false.' },
      { field: 'onChange?',  type: '(checked: boolean) => void', optional: true, desc: 'Fired on every toggle.' },
      { field: 'label?',     type: 'string',                 optional: true, desc: 'Label rendered next to the checkbox.' },
      { field: 'hint?',      type: 'string',                 optional: true, desc: 'Helper text under the label.' },
      { field: 'disabled?',  type: 'boolean',                optional: true, desc: 'Disable user interaction. Default false.' },
    ],
  },
  {
    name: 'SpindleRangeSliderOptions',
    note: 'Options for api.ui.components.mountRangeSlider(). onCommit fires once when a drag/tap ends; onDragValue fires live during a drag.',
    fields: [
      { field: 'min',          type: 'number',               optional: false, desc: 'REQUIRED. Inclusive lower bound.' },
      { field: 'max',          type: 'number',               optional: false, desc: 'REQUIRED. Inclusive upper bound.' },
      { field: 'value?',       type: 'number',               optional: true,  desc: 'Initial committed value. Default min.' },
      { field: 'step?',        type: 'number',               optional: true,  desc: 'Snap increment. Default 1.' },
      { field: 'integer?',     type: 'boolean',              optional: true,  desc: 'Round to integers. Default false.' },
      { field: 'onCommit?',    type: '(value: number) => void', optional: true, desc: 'Fired once when the gesture ends (NOT during drag).' },
      { field: 'onDragValue?', type: '(value: number | null) => void', optional: true, desc: 'Fired with the live value during a drag; null if the gesture ends without committing.' },
      { field: 'label?',       type: 'string',               optional: true,  desc: 'Renders a header with label + live value.' },
      { field: 'hint?',        type: 'string',               optional: true,  desc: 'Helper text under the header. Ignored without label.' },
      { field: 'format?',      type: 'SpindleRangeSliderFormat', optional: true, desc: '{ decimals?, prefix?, suffix? } for the header value. Ignored without label.' },
      { field: 'disabled?',    type: 'boolean',              optional: true,  desc: 'Dim the track and ignore input. Default false.' },
      { field: 'className?',   type: 'string',               optional: true,  desc: 'Additional CSS class on the track area.' },
    ],
  },
  {
    name: 'SpindleSelectOption',
    note: 'A single option in api.ui.components.mountSelect() / mountMultiSelect().',
    fields: [
      { field: 'value',     type: 'string',                    optional: false, desc: 'Stable value emitted to onChange.' },
      { field: 'label',     type: 'string',                    optional: false, desc: 'Display label.' },
      { field: 'sublabel?', type: 'string',                    optional: true,  desc: 'Secondary text beneath the label.' },
      { field: 'group?',    type: 'string',                    optional: true,  desc: 'Group key — shared-group options cluster under a header.' },
      { field: 'leading?',  type: 'SpindleSelectOptionLeading', optional: true, desc: 'Leading cell: { type: "image"|"icon-svg"|"icon-url"|"swatch"|"initial", ... }.' },
      { field: 'disabled?', type: 'boolean',                   optional: true,  desc: 'Render as disabled.' },
    ],
  },
  {
    name: 'SpindleSelectOptions',
    note: 'Options for api.ui.components.mountSelect() (single-select). Extends SpindleSelectOptionsBase (options, placeholder, searchPlaceholder, searchThreshold, emptyMessage, noResultsMessage, triggerLabel, triggerIcon, portal, align, maxHeight, minWidth, disabled, className).',
    fields: [
      { field: 'value?',      type: 'string',                  optional: true, desc: 'Currently selected value.' },
      { field: 'onChange?',   type: '(value: string) => void', optional: true, desc: 'Fired when the user picks an option.' },
      { field: 'options?',    type: 'SpindleSelectOption[]',   optional: true, desc: 'Available choices.' },
      { field: 'clearable?',  type: 'boolean',                 optional: true, desc: 'Show a pinned "None" option that emits onChange("").' },
      { field: 'clearLabel?', type: 'string',                  optional: true, desc: 'Label for the clear option. Default "None".' },
    ],
  },
  {
    name: 'SpindleMultiSelectOptions',
    note: 'Options for api.ui.components.mountMultiSelect(). Same base as SpindleSelectOptions but value/onChange use string[].',
    fields: [
      { field: 'value?',    type: 'string[]',                  optional: true, desc: 'Currently selected values.' },
      { field: 'onChange?', type: '(value: string[]) => void', optional: true, desc: 'Fired when the selection changes.' },
      { field: 'options?',  type: 'SpindleSelectOption[]',     optional: true, desc: 'Available choices.' },
    ],
  },
  {
    name: 'SpindleFolderDropdownOptions',
    note: 'Options for api.ui.components.mountFolderDropdown().',
    fields: [
      { field: 'folders?',        type: 'string[]',               optional: true, desc: 'Available folder names.' },
      { field: 'value?',          type: 'string',                 optional: true, desc: 'Currently selected folder.' },
      { field: 'onChange?',       type: '(folder: string) => void', optional: true, desc: 'Fired when the user picks a folder.' },
      { field: 'onCreateFolder?', type: '(name: string) => void', optional: true, desc: 'Fired when the user creates a folder inline.' },
      { field: 'placeholder?',    type: 'string',                 optional: true, desc: 'Placeholder when no folder is selected.' },
      { field: 'disabled?',       type: 'boolean',                optional: true, desc: 'Disable interaction.' },
    ],
  },
  {
    name: 'SpindleModelComboboxOptions',
    note: 'Options for api.ui.components.mountModelCombobox(). Connection-bound mode (connection) is recommended; manual mode uses models + onRefresh.',
    fields: [
      { field: 'value?',       type: 'string',                  optional: true, desc: 'Currently entered model ID.' },
      { field: 'onChange?',    type: '(value: string) => void', optional: true, desc: 'Fired on every change.' },
      { field: 'connection?',  type: '{ kind: "llm"|"image"|"tts"|"embedding"; id? }', optional: true, desc: 'Bind to a host-managed connection; host fetches + updates the model list. embedding is manual-mode-only.' },
      { field: 'models?',      type: 'string[]',                optional: true, desc: 'Manual mode: explicit model list.' },
      { field: 'modelLabels?', type: 'Record<string, string>',  optional: true, desc: 'Manual mode: id → human label.' },
      { field: 'loading?',     type: 'boolean',                 optional: true, desc: 'Manual mode: show the refresh spinner.' },
      { field: 'onRefresh?',   type: '() => void',              optional: true, desc: 'Manual mode: invoked on refresh click.' },
      { field: 'appearance?',  type: "'compact' | 'standard' | 'editor'", optional: true, desc: "Visual density. Default 'compact'." },
      { field: 'placeholder?', type: 'string',                  optional: true, desc: 'Placeholder text.' },
    ],
  },
  {
    name: 'SpindlePaginationOptions',
    note: 'Options for api.ui.components.mountPagination(). Fully controlled — currentPage/totalPages/onPageChange are REQUIRED; call handle.update({currentPage}) after navigating.',
    fields: [
      { field: 'currentPage',     type: 'number',               optional: false, desc: 'REQUIRED. Current page index (1-based).' },
      { field: 'totalPages',      type: 'number',               optional: false, desc: 'REQUIRED. Total page count.' },
      { field: 'onPageChange',    type: '(page: number) => void', optional: false, desc: 'REQUIRED. Fired when the user clicks a page.' },
      { field: 'perPage?',        type: 'number',               optional: true,  desc: 'Current per-page selection (omit to hide the selector).' },
      { field: 'perPageOptions?', type: 'number[]',             optional: true,  desc: 'Page-size choices.' },
      { field: 'onPerPageChange?', type: '(n: number) => void', optional: true,  desc: 'Fired when the user changes per-page.' },
      { field: 'totalItems?',     type: 'number',               optional: true,  desc: 'Total item count for the "Showing X–Y of N" summary.' },
    ],
  },
  {
    name: 'SpindleCloseButtonOptions',
    note: 'Options for api.ui.components.mountCloseButton().',
    fields: [
      { field: 'onClick?',  type: '() => void',            optional: true, desc: 'Click handler.' },
      { field: 'size?',     type: "'sm' | 'md'",           optional: true, desc: "Visual size. Default 'md'." },
      { field: 'variant?',  type: "'subtle' | 'solid'",    optional: true, desc: "Visual variant. Default 'subtle'." },
      { field: 'position?', type: "'static' | 'absolute'", optional: true, desc: "Positioning behavior. Default 'static'." },
      { field: 'iconSize?', type: 'number',                optional: true, desc: 'Icon size override in CSS pixels.' },
    ],
  },
  {
    name: 'SpindleCollapsibleSectionOptions',
    note: 'Options for api.ui.components.mountCollapsibleSection(). title is REQUIRED.',
    fields: [
      { field: 'title',            type: 'string',          optional: false, desc: 'REQUIRED. Header text.' },
      { field: 'iconSvg?',         type: 'string',          optional: true,  desc: 'Inline SVG icon next to the title.' },
      { field: 'iconUrl?',         type: 'string',          optional: true,  desc: 'Icon image URL. Mutually exclusive with iconSvg.' },
      { field: 'badge?',           type: 'string | number', optional: true,  desc: 'Optional badge text next to the title.' },
      { field: 'defaultExpanded?', type: 'boolean',         optional: true,  desc: 'Initial expanded state. Default true.' },
      { field: 'onToggle?',        type: '(expanded: boolean) => void', optional: true, desc: 'Fired whenever the user toggles the section.' },
    ],
  },
  {
    name: 'MountedCollapsibleSectionHandle',
    note: 'Returned by api.ui.components.mountCollapsibleSection(). The host owns the header chrome; your script owns the body.',
    fields: [
      { field: 'id',           type: 'string',            optional: false, desc: 'Unique component ID.' },
      { field: 'body',         type: 'DOMHandle',         optional: false, desc: 'The section body — a DOMHandle your script owns. Use body.inject(...)/update(...)/on(...) to fill + wire it, exactly like any injected element.' },
      { field: 'update(patch)', type: 'void',             optional: false, desc: 'Merge a partial of the mount options (title/badge/etc.) into the live section. Fire-and-forget.' },
      { field: 'destroy()',    type: 'void',              optional: false, desc: 'Unmount the section + release. Idempotent.' },
      { field: 'isExpanded()', type: 'Promise<boolean>',  optional: false, desc: 'Read the current expanded state. ASYNC (a frontend round-trip), like getValue().' },
      { field: 'expand()',     type: 'void',              optional: false, desc: 'Open the section. Fire-and-forget.' },
      { field: 'collapse()',   type: 'void',              optional: false, desc: 'Close the section. Fire-and-forget.' },
      { field: 'toggle()',     type: 'void',              optional: false, desc: 'Flip the section. Fire-and-forget.' },
    ],
  },
  {
    name: 'DOMEventData',
    note: 'Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.',
    fields: [
      { field: 'type',           type: 'string',                    optional: false, desc: "Event type (e.g. 'click', 'input', 'change')." },
      { field: 'targetId?',      type: 'string',                    optional: true,  desc: 'The id attribute of the event target element.' },
      { field: 'targetValue?',   type: 'string',                    optional: true,  desc: 'The value property (for input/select elements).' },
      { field: 'targetChecked?', type: 'boolean',                   optional: true,  desc: 'The checked property (for checkbox/radio elements).' },
      { field: 'dataset?',       type: 'Record<string, string>',    optional: true,  desc: 'All data-* attributes on the event target.' },
      { field: 'detail?',        type: 'unknown',                   optional: true,  desc: 'CustomEvent.detail (must be JSON-serializable).' },
      { field: 'clientX?',       type: 'number',                    optional: true,  desc: 'Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor.' },
      { field: 'clientY?',       type: 'number',                    optional: true,  desc: 'Viewport Y coordinate. Same event families as clientX.' },
      { field: 'key?',           type: 'string',                    optional: true,  desc: "KeyboardEvent.key — the value of the key pressed, modifier-aware ('Enter', 'Escape', 'a', 'A', 'ArrowUp', 'Shift'). Populated only for keydown / keyup / keypress events. Use this to distinguish e.g. Enter-to-submit on a text input." },
      { field: 'code?',          type: 'string',                    optional: true,  desc: "KeyboardEvent.code — physical key on the keyboard, layout-independent ('Enter', 'KeyA' regardless of shift, 'ArrowUp', 'ShiftLeft'). Populated only for keydown / keyup / keypress events. Use this for physical-position bindings (e.g. WASD)." },
    ],
  },
  {
    name: 'DOMListenOptions',
    note: 'Options bag for DOMHandle.on(event, handler, options?).',
    fields: [
      { field: 'preventDefault?', type: 'boolean | ConditionalPreventDefault', optional: true, desc: "When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Can also be a ConditionalPreventDefault object to fire only on specific key / button / modifier combinations. Default: false." },
    ],
  },
  {
    name: 'DOMReadOptions',
    note: 'Options bag for DOMHandle.read(options?). All fields optional — `read()` with no argument returns a baseline snapshot.',
    fields: [
      { field: 'html?', type: 'boolean', optional: true, desc: 'Also include `innerHTML` in the returned snapshot. Default false — keeps the IPC payload small for the common case (verify attrs, check text content). Set true when the script needs to traverse the descendant markup (e.g. parse a rendered subtree via DOMParser).' },
    ],
  },
  {
    name: 'SerializedDOMElement',
    note: 'Snapshot returned by DOMHandle.read(). Frontend-built serialization of the element bound to the handle.\n\nWhich element gets snapshotted depends on the shape of what the script injected: for the common single-root case the user\'s root element is returned directly (e.g. `inject(\'<button class="x">Hi</button>\')` → `tag: \'button\'`); for multi-root or text-only content the snapshot falls back to LumiScript\'s wrapper (`tag: \'div\'`, accurate `childCount`). Either way, internal `data-ls-*` and `data-spindle-ext` wrapper attributes are stripped from the `attrs` map.\n\nDeliberate omissions: computed styles, bounding rect, recursive child snapshots, property snapshots (`.value` / `.checked`). Form-control live values can be read via `delegate(selector, \'input\', ...)` event handlers; for deep markup traversal, request `{ html: true }` and parse client-side.',
    fields: [
      { field: 'tag',        type: 'string',                  optional: false, desc: "Lowercase tag name (e.g. 'div', 'button')." },
      { field: 'attrs',      type: 'Record<string, string>',  optional: false, desc: 'All attributes set on the element, keyed by lowercased attribute name. Includes class, id, style, data-*, aria-*, etc. Internal `data-ls-*` / `data-spindle-ext` wrapper attributes are stripped. Empty object if no attributes set.' },
      { field: 'text',       type: 'string',                  optional: false, desc: "Element's textContent — concatenated text from this element and all descendants. Empty string if no text content. Includes text inside hidden-via-CSS elements (matches textContent semantics, not visibility). Use `delegate(...)` events for live form-control values like input.value (which are properties, not attributes)." },
      { field: 'childCount', type: 'number',                  optional: false, desc: 'Number of direct ELEMENT children (text nodes and comment nodes are NOT counted). Use the `html` option to inspect the full subtree.' },
      { field: 'html?',      type: 'string',                  optional: true,  desc: "Element's innerHTML. Present only when read({ html: true }) was passed. Reflects whatever the frontend currently has — including any host-side modifications (e.g. Lumiverse markdown rendering) that mutated the originally-injected HTML." },
    ],
  },
  {
    name: 'ConditionalPreventDefault',
    note: "Predicate-based preventDefault rule for DOMDelegateOptions / DOMListenOptions. Fires event.preventDefault() only when the event matches all provided filters (AND semantics). Each filter is optional; empty {} = always match (equivalent to `preventDefault: true`). Filters are evaluated synchronously frontend-side at fire time. Common shapes: { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } } (plain Enter, not Shift+Enter); { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } } (Ctrl+S override); { onButtons: [2] } (right-click only).",
    fields: [
      { field: 'onKeys?',       type: 'string[]',                       optional: true, desc: 'KeyboardEvent.key value(s) — OR-matched within the array. Non-keyboard events skipped (preventDefault does NOT fire) when this is set.' },
      { field: 'onCodes?',      type: 'string[]',                       optional: true, desc: 'KeyboardEvent.code value(s) — physical key, layout-independent. Same keyboard-only semantics as onKeys. Use for physical-position bindings (e.g. WASD).' },
      { field: 'onButtons?',    type: 'number[]',                       optional: true, desc: 'MouseEvent.button value(s) — 0=left, 1=middle, 2=right, 3=back, 4=forward. Non-mouse events skipped when set.' },
      { field: 'whenModifiers?', type: '{ require?, exclude? }',         optional: true, desc: 'Modifier-key constraint. ALL of require must be held; NONE of exclude may be held. Values: shift / ctrl / alt / meta. Applies to KeyboardEvent and MouseEvent.' },
    ],
  },
  // ─── LLM ─────────────────────────────────────────────────────────────────────
  {
    name: 'LLMMessage',
    note: 'A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.',
    fields: [
      { field: 'role',    type: "'system' | 'user' | 'assistant'",      optional: false, desc: 'Message sender role.' },
      { field: 'content', type: 'string | LlmMessagePart[]',            optional: false, desc: 'Plain string (simple case) OR an array of parts. Parts let scripts thread native tool_use / tool_result payloads through an agentic loop instead of text-encoding them.' },
      { field: 'reasoning_content?', type: 'string',                    optional: true,  desc: "Thinking-mode reasoning content from the previous assistant turn, echoed back on the next request. REQUIRED by DeepSeek thinking-mode models on tool-call continuations (the API returns 400 invalid_request_error: \"The 'reasoning_content' in the thinking mode must be passed back to the API.\" without it). Plain-text continuations and non-thinking models don't need it. Other providers routing DeepSeek (NanoGPT, OpenRouter) inherit the requirement; providers without thinking mode ignore the field. Copy from LLMRawResult.reasoning_content after each generateWithTools call." },
    ],
  },
  {
    name: 'LlmMessagePart',
    note: 'A single content part inside an LLMMessage. Discriminated union — switch on the `type` field. Mirrors the host\'s LlmMessagePartDTO.',
    fields: [
      { field: "{ type: 'text', text }",                                                                   type: '', optional: false, desc: 'A plain text segment.' },
      { field: "{ type: 'image', data, mime_type }",                                                       type: '', optional: false, desc: 'Base64-encoded image. Consumed only by connections whose model supports image input.' },
      { field: "{ type: 'audio', data, mime_type }",                                                       type: '', optional: false, desc: 'Base64-encoded audio. Consumed only by connections whose model supports audio input.' },
      { field: "{ type: 'tool_use', id, name, input }",                                                    type: '', optional: false, desc: 'A tool call the LLM is invoking. Re-pair with a matching tool_result in the next user turn (tool_result.tool_use_id === this.id).' },
      { field: "{ type: 'tool_result', tool_use_id, content, is_error? }",                                 type: '', optional: false, desc: 'Result of a tool call, paired by tool_use_id. Set is_error=true to signal failure (model adapts retry/abandon strategy).' },
      { field: 'cache_control? (all variants)',                                                            type: '', optional: true,  desc: 'Provider-specific cache hint (e.g. Anthropic ephemeral). Most callers leave undefined.' },
    ],
  },
  {
    name: 'LLMOptions',
    note: 'Resolution order: connectionId → connectionName → provider + model → active user connection.',
    fields: [
      { field: 'connectionId?',   type: 'string',      optional: true, desc: 'Connection profile ID. Takes precedence over all other options.' },
      { field: 'connectionName?', type: 'string',      optional: true, desc: 'Human-readable name (case-insensitive). Ignored when connectionId is set.' },
      { field: 'provider?',       type: 'LLMProvider', optional: true, desc: 'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.' },
      { field: 'model?',          type: 'string',      optional: true, desc: 'Model identifier. Used with provider for direct calls.' },
      { field: 'temperature?',    type: 'number',      optional: true, desc: 'Override temperature (0–2).' },
      { field: 'maxTokens?',      type: 'number',      optional: true, desc: 'Override max tokens.' },
      { field: 'parallelToolCalls?', type: 'boolean',  optional: true, desc: 'When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use.' },
      { field: 'signal?',         type: 'AbortSignal', optional: true, desc: 'Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races).' },
      { field: 'reasoning?',      type: 'GenerationReasoningOverride', optional: true, desc: "Per-request reasoning/thinking control (host 0.5.x+). source: 'inherit' (default — use the connection's bindings) | 'off' (force no reasoning) | 'custom' (use the effort/thinkingDisplay fields). Rides beside parameters on the request, not inside the sampler bag." },
    ],
  },
  {
    name: 'Connection',
    note: "Read-only view of an LLM connection profile (api.connections.*). snake_case, mirrors the host ConnectionProfileDTO. NEVER contains the API key — only has_api_key. id/name map to LLMOptions.connectionId/connectionName.",
    fields: [
      { field: 'id',                 type: 'string',                       optional: false, desc: 'Stable connection ID (→ LLMOptions.connectionId).' },
      { field: 'name',               type: 'string',                       optional: false, desc: 'Human-readable name (→ LLMOptions.connectionName).' },
      { field: 'provider',           type: 'string',                       optional: false, desc: 'Provider identifier (e.g. "anthropic", "openai").' },
      { field: 'api_url',            type: 'string',                       optional: false, desc: 'Provider API base URL.' },
      { field: 'model',              type: 'string',                       optional: false, desc: 'Model identifier.' },
      { field: 'preset_id',          type: 'string | null',                optional: false, desc: 'Bound generation preset ID, or null.' },
      { field: 'is_default',         type: 'boolean',                      optional: false, desc: "Whether this is the user's default connection." },
      { field: 'has_api_key',        type: 'boolean',                      optional: false, desc: 'Whether a key is stored. NEVER the key itself.' },
      { field: 'metadata',           type: 'Record<string, unknown>',      optional: false, desc: 'Raw provider-specific metadata bag (provider-quirk flags, etc.).' },
      { field: 'reasoning_bindings', type: 'ConnectionReasoningBindings | null', optional: false, desc: 'Typed reasoning bindings (a settings snapshot + optional promptBias), or null when the connection has none.' },
      { field: 'created_at',         type: 'number',                       optional: false, desc: 'Unix-ms creation timestamp.' },
      { field: 'updated_at',         type: 'number',                       optional: false, desc: 'Unix-ms last-update timestamp.' },
    ],
  },
  {
    name: 'GenerationReasoningOverride',
    note: "Per-request reasoning control, passed as LLMOptions.reasoning (host 0.5.x+). Resolved by the 'source' discriminator; rides beside parameters on the request, not inside the sampler bag. Mirrors the host GenerationReasoningOverrideDTO.",
    fields: [
      { field: 'source?',          type: "'inherit' | 'off' | 'custom'", optional: true, desc: "How the backend resolves reasoning. 'inherit' (default; same as omitting reasoning): use the connection's reasoning_bindings, else the user's global setting. 'off': force the provider's no-reasoning switch, even if parameters carry a thinking block. 'custom': use the fields below for this call only." },
      { field: 'apiReasoning?',    type: 'boolean',                      optional: true, desc: "Master switch — whether the provider emits thinking. Meaningful with source: 'custom' (default true)." },
      { field: 'effort?',          type: 'ReasoningEffort',              optional: true, desc: "Effort tier: 'auto' | 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'max' | 'xhigh'. source: 'custom' only (default 'auto')." },
      { field: 'thinkingDisplay?', type: 'ThinkingDisplay',              optional: true, desc: "How thinking is surfaced: 'auto' | 'summarized' | 'omitted'. Anthropic-only. source: 'custom' only (default 'auto')." },
    ],
  },
  {
    name: 'ConnectionReasoningBindings',
    note: "Typed value of Connection.reasoning_bindings (api.connections.*). Read-only snapshot of the reasoning settings bound to a profile; these override the user's global reasoning settings on this connection. Mirrors the host ConnectionReasoningBindingsDTO.",
    fields: [
      { field: 'settings',    type: 'ReasoningSettings', optional: false, desc: 'Reasoning settings snapshot: { apiReasoning, reasoningEffort, thinkingDisplay, prefix, suffix, autoParse, keepInHistory }. Only apiReasoning/reasoningEffort/thinkingDisplay affect the provider request; prefix/suffix/autoParse/keepInHistory drive the delimited-reasoning parser.' },
      { field: 'promptBias?', type: 'string',            optional: true,  desc: "Optional \"Start Reply With\" assistant prefill captured with the snapshot; overrides the user's global promptBias for this connection." },
    ],
  },
  {
    name: 'WebSearchOptions',
    note: 'Passed to api.webSearch.query().',
    fields: [
      { field: 'query',   type: 'string',  optional: false, desc: 'Free-text query (required). Trimmed by the host; empty is rejected.' },
      { field: 'count?',  type: 'number',  optional: true,  desc: 'Desired result count. Clamped to maxResultCount; omit for defaultResultCount.' },
      { field: 'scrape?', type: 'boolean', optional: true,  desc: 'Default true → scrape top results + assemble context. false → only results (no documents/context).' },
    ],
  },
  {
    name: 'WebSearchResponse',
    note: 'Returned by api.webSearch.query(). documents/context are omitted when scrape:false.',
    fields: [
      { field: 'query',      type: 'string',               optional: false, desc: 'The (trimmed) query that ran.' },
      { field: 'results',    type: 'WebSearchResult[]',     optional: false, desc: 'Normalized results { title, url, snippet, engine?, score? }.' },
      { field: 'documents?', type: 'WebSearchDocument[]',   optional: true,  desc: 'Per-result scraped content { ..., content?, contentLength?, sourceType?, error? }. Absent when scrape:false.' },
      { field: 'context?',   type: 'string',                optional: true,  desc: 'Pre-assembled prompt-ready context (query + scraped docs). Absent when scrape:false.' },
    ],
  },
  {
    name: 'WebSearchSettings',
    note: 'Returned by api.webSearch.getSettings(). Safe view — NEVER the API key (only hasApiKey).',
    fields: [
      { field: 'enabled',            type: 'boolean',     optional: false, desc: 'Whether web search is configured + enabled. Check before query().' },
      { field: 'provider',           type: 'string',      optional: false, desc: "Provider identifier (currently 'searxng')." },
      { field: 'apiUrl',             type: 'string',      optional: false, desc: 'Provider API base URL.' },
      { field: 'hasApiKey',          type: 'boolean',     optional: false, desc: 'Whether a key is stored. NEVER the key itself.' },
      { field: 'defaultResultCount', type: 'number',      optional: false, desc: 'Result count when query.count is omitted.' },
      { field: 'maxResultCount',     type: 'number',      optional: false, desc: 'Upper bound (count is clamped to this).' },
      { field: 'maxPagesToScrape',   type: 'number',      optional: false, desc: 'How many top results get scraped when scrape:true.' },
      { field: 'maxCharsPerPage',    type: 'number',      optional: false, desc: 'Per-page scraped-text character cap.' },
      { field: 'language',           type: 'string',      optional: false, desc: 'Search language code.' },
      { field: 'safeSearch',         type: '0 | 1 | 2',   optional: false, desc: 'SafeSearch: 0 off, 1 moderate, 2 strict.' },
      { field: 'engines',            type: 'string[]',    optional: false, desc: 'Provider engines to query.' },
      { field: 'requestTimeoutMs',   type: 'number',      optional: false, desc: 'Per-request timeout in ms.' },
    ],
  },
  {
    name: 'DryRunOptions',
    note: 'Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.',
    fields: [
      { field: 'chatId?',          type: 'string', optional: true, desc: 'Chat to assemble the prompt for. Defaults to the active chat.' },
      { field: 'connectionId?',    type: 'string', optional: true, desc: 'Override the connection profile used for assembly.' },
      { field: 'personaId?',       type: 'string', optional: true, desc: 'Override the persona used for assembly.' },
      { field: 'presetId?',        type: 'string', optional: true, desc: 'Override the generation preset.' },
      { field: 'generationType?',  type: "'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'", optional: true, desc: "Override generation type. Default 'normal'." },
      { field: 'parameters?',      type: 'Record<string, unknown>', optional: true, desc: 'Override sampler parameters.' },
    ],
  },
  {
    name: 'LLMRawResult',
    note: 'Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.',
    fields: [
      { field: 'content',     type: 'string',     optional: false, desc: 'Text generated by the LLM. Empty string when tool_calls is present.' },
      { field: 'tool_calls?', type: 'ToolCall[]', optional: true,  desc: 'Function calls requested by the LLM. When present, content is typically empty.' },
      { field: 'reasoning_content?', type: 'string', optional: true, desc: "Thinking-mode reasoning content from this turn. Present on tool-call iterations against DeepSeek-thinking models. Copy onto the assistant turn you append to history before the next call (set LLMMessage.reasoning_content). Other providers ignore it." },
    ],
  },
  {
    name: 'LLMRawResultStructured',
    note: 'Generic type `LLMRawResultStructured<T>`. Return type of `api.llm.generateWithTools(messages, tools, opts, schema)` — the structured-output overload. On intermediate steps only `tool_calls` is set. On the final step only `content` is set, typed as `T` (the schema-parsed result).',
    fields: [
      { field: 'content?',    type: 'T',          optional: true, desc: 'Final step: JSON-parsed and Zod-validated result typed as T (the schema you passed as the 4th arg to generateWithTools).' },
      { field: 'tool_calls?', type: 'ToolCall[]', optional: true, desc: 'Intermediate steps: function calls requested by the LLM. When present, content is absent.' },
      { field: 'reasoning_content?', type: 'string', optional: true, desc: "Thinking-mode reasoning content from this turn. Same semantics as LLMRawResult.reasoning_content — copy onto the next assistant turn for DeepSeek-thinking tool loops." },
    ],
  },
  {
    name: 'StreamChunk',
    note: 'One chunk yielded by api.llm.generateStream. Discriminated union — switch on the `type` field. snake_case throughout, mirroring LLMRawResult and the upstream StreamChunkDTO.',
    fields: [
      { field: "{ type: 'token', token }",                                                                   type: '', optional: false, desc: 'Incremental visible content chunk. Concatenate token across all token chunks to assemble the streamed text.' },
      { field: "{ type: 'reasoning', token }",                                                               type: '', optional: false, desc: 'Incremental chain-of-thought chunk. Thinking-mode models only (DeepSeek-thinking, Anthropic extended-thinking, …). Other providers skip these.' },
      { field: "{ type: 'done', content, reasoning?, finish_reason, tool_calls?, usage? }",                  type: '', optional: false, desc: "Terminal chunk emitted exactly once on successful completion. content is the full aggregated text; reasoning the full aggregated reasoning (when present); finish_reason is 'stop' | 'length' | 'tool_calls' | 'content_filter' | provider-specific; tool_calls is set when finish_reason === 'tool_calls'; usage is { prompt_tokens, completion_tokens, total_tokens } when the provider reports it. Breaking out of the for await loop before this arrives means you won't see it." },
    ],
  },
  {
    name: 'ToolCall',
    note: 'A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.',
    fields: [
      { field: 'name',    type: 'string',                  optional: false, desc: 'Tool name as given in the schema.' },
      { field: 'args',    type: 'Record<string, unknown>', optional: false, desc: 'Parsed arguments as returned by the LLM.' },
      { field: 'call_id', type: 'string',                  optional: false, desc: 'Provider call ID (Anthropic id, OpenAI id, or synthetic UUID).' },
    ],
  },
  {
    name: 'DryRunResult',
    note: 'Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.',
    fields: [
      { field: 'messages',        type: 'LLMMessage[]',             optional: false, desc: 'The fully assembled message array.' },
      { field: 'breakdown',       type: 'DryRunBlock[]',            optional: false, desc: 'Ordered prompt composition blocks.' },
      { field: 'parameters',      type: 'Record<string, unknown>',  optional: false, desc: 'Final merged sampler parameters.' },
      { field: 'model',           type: 'string',                   optional: false, desc: 'Resolved model identifier.' },
      { field: 'provider',        type: 'string',                   optional: false, desc: 'Resolved provider identifier.' },
      { field: 'tokenCount?',     type: 'DryRunTokenCount',         optional: true,  desc: 'Per-block token counts. Present only if a tokenizer is configured.' },
      { field: 'worldInfoStats?', type: 'WorldInfoActivationStats', optional: true,  desc: 'World info activation statistics.' },
      { field: 'memoryStats?',    type: 'DryRunMemoryStats',        optional: true,  desc: 'Long-term memory retrieval statistics.' },
    ],
  },
  {
    name: 'DryRunBlock',
    note: 'A single prompt composition block inside DryRunResult.breakdown.',
    fields: [
      { field: 'type',                 type: 'string',  optional: false, desc: 'Block type (e.g. "block", "chat_history", "world_info", "authors_note").' },
      { field: 'name',                 type: 'string',  optional: false, desc: 'Human-readable block name.' },
      { field: 'role?',                type: 'string',  optional: true,  desc: 'Message role for this block.' },
      { field: 'content?',             type: 'string',  optional: true,  desc: 'Block text content.' },
      { field: 'messageCount?',        type: 'number',  optional: true,  desc: 'Number of messages (for chat_history blocks).' },
      { field: 'preCountedTokens?',    type: 'number',  optional: true,  desc: 'Pre-computed token estimate.' },
      { field: 'excludeFromTotal?',    type: 'boolean', optional: true,  desc: 'Whether this block is excluded from the token total.' },
    ],
  },
  {
    name: 'DryRunTokenCount',
    note: 'Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.',
    fields: [
      { field: 'totalTokens',   type: 'number',  optional: false, desc: 'Total token count across all blocks.' },
      { field: 'breakdown',     type: 'Array',   optional: false, desc: 'Per-block breakdown: [{ name, type, tokens, role? }].' },
      { field: 'tokenizerId',   type: 'string | null', optional: false, desc: 'Tokenizer identifier used, or null.' },
      { field: 'tokenizerName', type: 'string | null', optional: false, desc: 'Human-readable tokenizer name, or null.' },
    ],
  },
  {
    name: 'WorldInfoActivationStats',
    note: 'World info activation statistics inside DryRunResult.worldInfoStats.',
    fields: [
      { field: 'totalCandidates',        type: 'number', optional: false, desc: 'Total number of WI entries evaluated.' },
      { field: 'activatedBeforeBudget',  type: 'number', optional: false, desc: 'Entries activated before budget enforcement.' },
      { field: 'activatedAfterBudget',   type: 'number', optional: false, desc: 'Entries that survived budget enforcement.' },
      { field: 'evictedByBudget',        type: 'number', optional: false, desc: 'Entries removed due to token budget.' },
      { field: 'evictedByMinPriority',   type: 'number', optional: false, desc: 'Entries removed due to minimum priority threshold.' },
      { field: 'estimatedTokens',        type: 'number', optional: false, desc: 'Total token estimate for activated entries.' },
      { field: 'recursionPassesUsed',    type: 'number', optional: false, desc: 'Number of recursive activation passes performed.' },
    ],
  },
  {
    name: 'DryRunMemoryStats',
    note: 'Long-term memory retrieval statistics inside DryRunResult.memoryStats.',
    fields: [
      { field: 'enabled',          type: 'boolean', optional: false, desc: 'Whether long-term memory is configured and active.' },
      { field: 'chunksRetrieved',  type: 'number',  optional: false, desc: 'Number of memory chunks returned by vector search.' },
      { field: 'chunksAvailable',  type: 'number',  optional: false, desc: 'Total vectorized chunks available.' },
      { field: 'chunksPending',    type: 'number',  optional: false, desc: 'Chunks awaiting vectorization (results may be incomplete if > 0).' },
      { field: 'injectionMethod',  type: "'macro' | 'fallback' | 'disabled'", optional: false, desc: 'How memories are injected into the prompt.' },
      { field: 'retrievalMode?',   type: "'vector' | 'recency' | 'empty' | 'disabled'", optional: true, desc: 'How chunks were retrieved (real vector search vs recency fallback). Absent until the chat-memory cache is populated.' },
      { field: 'queryPreview',     type: 'string',  optional: false, desc: 'The query string used for the vector search.' },
      { field: 'settingsSource',   type: "'global' | 'per_chat'",    optional: false, desc: 'Whether memory settings come from global or per-chat config.' },
    ],
  },
  // ─── Utils ────────────────────────────────────────────────────────────────────
  {
    name: 'HttpRequestOptions',
    note: 'Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.',
    fields: [
      { field: 'method?',       type: "'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'", optional: true, desc: 'HTTP method. Default depends on the helper used.' },
      { field: 'headers?',      type: 'Record<string, string>',                       optional: true, desc: 'Request headers.' },
      { field: 'body?',         type: 'string',                                        optional: true, desc: 'Request body (string). Use JSON.stringify for JSON payloads.' },
      { field: 'timeout?',      type: 'number',                                        optional: true, desc: 'Request timeout in milliseconds.' },
      { field: 'responseType?', type: "'text' | 'arraybuffer'",                        optional: true, desc: "Decoding hint for the response body. 'text' (default) yields a string; 'arraybuffer' yields a Uint8Array of the raw response bytes (LumiScript decodes the host's base64 transport transparently). Use 'arraybuffer' when fetching images, PDFs, or any binary payload destined for api.images.upload / api.utils.image.* / api.files.*." },
    ],
  },
  {
    name: 'HttpResponse',
    note: 'Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.',
    fields: [
      { field: 'status',     type: 'number',                  optional: false, desc: 'HTTP status code (e.g. 200, 404).' },
      { field: 'statusText', type: 'string',                  optional: false, desc: 'HTTP status text (e.g. "OK", "Not Found").' },
      { field: 'headers',    type: 'Record<string, string>',  optional: false, desc: 'Response headers.' },
      { field: 'body',       type: 'string | Uint8Array',     optional: false, desc: "Response body. `string` when the request's responseType was 'text' or omitted; `Uint8Array` when 'arraybuffer'. Use JSON.parse on string bodies for JSON; pipe Uint8Array bodies into api.images.upload or api.utils.image.detectMime." },
    ],
  },
  {
    name: 'TempWriteOptions',
    note: 'Passed to api.files.tempWrite / tempWriteBinary (path, data, options?).',
    fields: [
      { field: 'ttlMs?',         type: 'number', optional: true, desc: 'Time-to-live in milliseconds. If omitted the file persists until deleted or restart.' },
      { field: 'reservationId?', type: 'string', optional: true, desc: 'Charge this write against a tempRequestBlock reservation, so a large write can\'t fail partway through on a full pool.' },
    ],
  },
  {
    name: 'FileStatResult',
    note: 'Returned by api.files.sharedStat(path).',
    fields: [
      { field: 'exists',      type: 'boolean', optional: false, desc: 'Whether the path exists.' },
      { field: 'isFile',      type: 'boolean', optional: false, desc: 'Whether the path is a file.' },
      { field: 'isDirectory', type: 'boolean', optional: false, desc: 'Whether the path is a directory.' },
      { field: 'sizeBytes',   type: 'number',  optional: false, desc: 'File size in bytes.' },
      { field: 'modifiedAt',  type: 'string',  optional: false, desc: 'ISO 8601 timestamp of last modification.' },
    ],
  },
  {
    name: 'TempStatResult',
    note: 'Returned by api.files.tempStat(path).',
    fields: [
      { field: 'sizeBytes',   type: 'number', optional: false, desc: 'File size in bytes.' },
      { field: 'createdAt',   type: 'string', optional: false, desc: 'ISO 8601 creation timestamp.' },
      { field: 'expiresAt?',  type: 'string', optional: true,  desc: 'ISO 8601 expiration timestamp. Absent if no TTL was set.' },
    ],
  },
  {
    name: 'TempRequestBlockOptions',
    note: 'Passed to api.files.tempRequestBlock(sizeBytes, options?).',
    fields: [
      { field: 'ttlMs?',  type: 'number', optional: true, desc: 'Time-to-live for the reservation in milliseconds.' },
      { field: 'reason?', type: 'string', optional: true, desc: 'Free-text reason recorded with the reservation (diagnostics only).' },
    ],
  },
  {
    name: 'TempReservation',
    note: 'Returned by api.files.tempRequestBlock(). Pass reservationId to tempWrite/tempWriteBinary options, or to tempReleaseBlock.',
    fields: [
      { field: 'reservationId', type: 'string', optional: false, desc: 'The reservation handle.' },
      { field: 'sizeBytes',     type: 'number', optional: false, desc: 'The reserved size in bytes.' },
      { field: 'expiresAt',     type: 'string', optional: false, desc: 'ISO 8601 timestamp when the reservation expires if unused.' },
    ],
  },
  {
    name: 'TempPoolStatus',
    note: 'Returned by api.files.tempGetPoolStatus(). Global = across all extensions; extension* = this extension only.',
    fields: [
      { field: 'globalMaxBytes',          type: 'number', optional: false, desc: 'Total ephemeral pool size across all extensions.' },
      { field: 'globalUsedBytes',         type: 'number', optional: false, desc: 'Bytes currently stored across all extensions.' },
      { field: 'globalReservedBytes',     type: 'number', optional: false, desc: 'Bytes currently reserved (not yet written) across all extensions.' },
      { field: 'globalAvailableBytes',    type: 'number', optional: false, desc: 'Bytes still available globally (max − used − reserved).' },
      { field: 'extensionMaxBytes',       type: 'number', optional: false, desc: "This extension's ephemeral quota." },
      { field: 'extensionUsedBytes',      type: 'number', optional: false, desc: 'Bytes this extension is currently storing.' },
      { field: 'extensionReservedBytes',  type: 'number', optional: false, desc: 'Bytes this extension currently has reserved.' },
      { field: 'extensionAvailableBytes', type: 'number', optional: false, desc: 'Bytes this extension still has available.' },
      { field: 'fileCount',               type: 'number', optional: false, desc: 'Number of ephemeral files this extension currently holds.' },
      { field: 'fileCountMax',            type: 'number', optional: false, desc: 'Maximum file count allowed for this extension.' },
    ],
  },
  // ─── Characters ──────────────────────────────────────────────────────────────
  {
    name: 'Character',
    note: 'Returned by api.characters.get / create / update.',
    fields: [
      { field: 'id',                      type: 'string',   optional: false, desc: 'Character UUID.' },
      { field: 'name',                    type: 'string',   optional: false, desc: 'Character name.' },
      { field: 'description',             type: 'string',   optional: false, desc: 'Character description.' },
      { field: 'personality',             type: 'string',   optional: false, desc: 'Personality summary.' },
      { field: 'scenario',                type: 'string',   optional: false, desc: 'Scenario / setting.' },
      { field: 'firstMessage',            type: 'string',   optional: false, desc: 'Opening message / greeting.' },
      { field: 'mesExample',              type: 'string',   optional: false, desc: 'Example dialogue. Free-form text shown to the LLM as an example of how the character speaks.' },
      { field: 'creatorNotes',            type: 'string',   optional: false, desc: 'Free-form notes from the character author (usage guidance, change history, etc.). Not shown to the LLM.' },
      { field: 'systemPrompt',            type: 'string',   optional: false, desc: 'Character-level system prompt.' },
      { field: 'postHistoryInstructions', type: 'string',   optional: false, desc: 'Instructions appended after chat history.' },
      { field: 'tags',                    type: 'string[]', optional: false, desc: 'Searchable tags.' },
      { field: 'alternateGreetings',      type: 'string[]', optional: false, desc: 'Additional greeting variants.' },
      { field: 'creator',                 type: 'string',   optional: false, desc: 'Creator name / attribution string.' },
      { field: 'imageId',                 type: 'string | null', optional: false, desc: 'Avatar image ID. Null if no avatar.' },
      { field: 'worldBookIds',            type: 'string[]',     optional: false, desc: 'World book IDs attached to this character.' },
      { field: 'extensions',              type: 'Record<string, unknown>', optional: false, desc: 'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.' },
      { field: 'createdAt',               type: 'number',   optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',               type: 'number',   optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'CharacterCreateInput',
    note: 'Passed to api.characters.create(input). Only name is required.',
    fields: [
      { field: 'name',                    type: 'string',   optional: false, desc: 'Character name.' },
      { field: 'description?',            type: 'string',   optional: true,  desc: 'Character description.' },
      { field: 'personality?',            type: 'string',   optional: true,  desc: 'Personality summary.' },
      { field: 'scenario?',               type: 'string',   optional: true,  desc: 'Scenario / setting.' },
      { field: 'firstMessage?',           type: 'string',   optional: true,  desc: 'Opening message.' },
      { field: 'mesExample?',             type: 'string',   optional: true,  desc: 'Example dialogue.' },
      { field: 'creatorNotes?',           type: 'string',   optional: true,  desc: 'Free-form notes from the character author (not shown to the LLM).' },
      { field: 'systemPrompt?',           type: 'string',   optional: true,  desc: 'Character-level system prompt.' },
      { field: 'postHistoryInstructions?', type: 'string',  optional: true,  desc: 'Post-history instructions.' },
      { field: 'tags?',                   type: 'string[]', optional: true,  desc: 'Searchable tags.' },
      { field: 'alternateGreetings?',     type: 'string[]', optional: true,  desc: 'Additional greeting variants.' },
      { field: 'creator?',                type: 'string',   optional: true,  desc: 'Creator name / attribution.' },
      { field: 'worldBookIds?',           type: 'string[]', optional: true,  desc: 'World book IDs to attach. Pass [] to detach all. Omit to leave unchanged.' },
      { field: 'extensions?',             type: 'Record<string, unknown>', optional: true, desc: 'Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules.' },
    ],
  },
  {
    name: 'CharacterUpdateInput',
    note: 'Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.',
    fields: [
      { field: 'name',                    type: 'string',   optional: true, desc: 'Character name.' },
      { field: 'description?',            type: 'string',   optional: true,  desc: 'Character description.' },
      { field: 'personality?',            type: 'string',   optional: true,  desc: 'Personality summary.' },
      { field: 'scenario?',               type: 'string',   optional: true,  desc: 'Scenario / setting.' },
      { field: 'firstMessage?',           type: 'string',   optional: true,  desc: 'Opening message.' },
      { field: 'mesExample?',             type: 'string',   optional: true,  desc: 'Example dialogue.' },
      { field: 'creatorNotes?',           type: 'string',   optional: true,  desc: 'Free-form notes from the character author (not shown to the LLM).' },
      { field: 'systemPrompt?',           type: 'string',   optional: true,  desc: 'Character-level system prompt.' },
      { field: 'postHistoryInstructions?', type: 'string',  optional: true,  desc: 'Post-history instructions.' },
      { field: 'tags?',                   type: 'string[]', optional: true,  desc: 'Searchable tags.' },
      { field: 'alternateGreetings?',     type: 'string[]', optional: true,  desc: 'Additional greeting variants.' },
      { field: 'creator?',                type: 'string',   optional: true,  desc: 'Creator name / attribution.' },
      { field: 'worldBookIds?',           type: 'string[]', optional: true,  desc: 'Replace world book attachments. Pass [] to detach all.' },
      { field: 'extensions?',             type: 'Record<string, unknown>', optional: true, desc: 'Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics.' },
    ],
  },
  // ─── Chats ───────────────────────────────────────────────────────────────────
  {
    name: 'ChatSession',
    note: 'Returned by api.chats.get / getActive / update.',
    fields: [
      { field: 'id',          type: 'string',                  optional: false, desc: 'Chat session UUID.' },
      { field: 'characterId', type: 'string',                  optional: false, desc: 'UUID of the associated character.' },
      { field: 'name',        type: 'string',                  optional: false, desc: 'Chat session title.' },
      { field: 'metadata',    type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata).' },
      { field: 'createdAt',   type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',   type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'ChatSessionUpdateInput',
    note: 'Passed to api.chats.update(id, input).',
    fields: [
      { field: 'name?',     type: 'string',                  optional: true, desc: 'New chat session title.' },
      { field: 'metadata?', type: 'Record<string, unknown>', optional: true, desc: 'Metadata to merge in (replaces entire metadata object).' },
    ],
  },
  {
    name: 'ChatMemoryChunk',
    note: 'A single memory chunk inside ChatMemoryResult.chunks.',
    fields: [
      { field: 'content',  type: 'string',                  optional: false, desc: 'Chunk text (concatenated messages from a conversation segment).' },
      { field: 'score',    type: 'number | null',           optional: false, desc: 'Vector distance (lower = more similar). null for keyword-only / recency-fallback hits — do not treat a missing score as a zero-distance match.' },
      { field: 'metadata', type: 'Record<string, unknown>', optional: false, desc: 'Chunk metadata (may include startIndex, endIndex, etc.).' },
    ],
  },
  {
    name: 'ChatMemoryResult',
    note: 'Returned by api.chats.getMemories().',
    fields: [
      { field: 'enabled',         type: 'boolean',          optional: false, desc: 'Whether long-term memory is active. When false, all other fields are empty/zero.' },
      { field: 'chunks',          type: 'ChatMemoryChunk[]', optional: false, desc: 'Retrieved memory chunks, sorted by relevance.' },
      { field: 'formatted',       type: 'string',           optional: false, desc: 'Pre-formatted output using the user\'s memory template. Ready to inject directly.' },
      { field: 'count',           type: 'number',           optional: false, desc: 'Number of chunks returned.' },
      { field: 'chunksAvailable', type: 'number',           optional: false, desc: 'Total vectorized chunks available.' },
      { field: 'chunksPending',   type: 'number',           optional: false, desc: 'Chunks awaiting vectorization. Results may be incomplete if > 0.' },
      { field: 'queryPreview',    type: 'string',           optional: false, desc: 'The query used for the vector search.' },
      { field: 'settingsSource',  type: "'global' | 'per_chat'", optional: false, desc: 'Whether memory settings come from global or per-chat config.' },
      { field: 'retrievalMode?',  type: "'vector' | 'recency' | 'empty' | 'disabled'", optional: true, desc: 'How chunks were retrieved (vector search vs recency fallback). Absent until the chat-memory cache is populated.' },
    ],
  },
  // ─── World Info ───────────────────────────────────────────────────────────────
  {
    name: 'WorldInfo',
    note: 'A world book header. Returned by api.worldInfo.get / create / update.',
    fields: [
      { field: 'id',          type: 'string',                  optional: false, desc: 'World book UUID.' },
      { field: 'name',        type: 'string',                  optional: false, desc: 'World book name.' },
      { field: 'description', type: 'string',                  optional: false, desc: 'World book description.' },
      { field: 'metadata',    type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata.' },
      { field: 'createdAt',   type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',   type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'WorldInfoCreateInput',
    note: 'Passed to api.worldInfo.create(input).',
    fields: [
      { field: 'name',         type: 'string',                  optional: false, desc: 'World book name.' },
      { field: 'description?', type: 'string',                  optional: true,  desc: 'World book description.' },
      { field: 'metadata?',    type: 'Record<string, unknown>', optional: true,  desc: 'Arbitrary metadata.' },
    ],
  },
  {
    name: 'WorldInfoUpdateInput',
    note: 'Passed to api.worldInfo.update(ref, input). All fields optional.',
    fields: [
      { field: 'name?',        type: 'string',                  optional: true, desc: 'New world book name.' },
      { field: 'description?', type: 'string',                  optional: true, desc: 'New description.' },
      { field: 'metadata?',    type: 'Record<string, unknown>', optional: true, desc: 'New metadata (replaces entire object).' },
    ],
  },
  {
    name: 'WorldInfoEntry',
    note: 'A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.',
    fields: [
      { field: 'id',            type: 'string',   optional: false, desc: 'Entry UUID.' },
      { field: 'worldBookId',   type: 'string',   optional: false, desc: 'Parent world book UUID.' },
      { field: 'content',       type: 'string',   optional: false, desc: 'Entry text content injected into the prompt.' },
      { field: 'key',           type: 'string[]', optional: false, desc: 'Primary trigger keywords.' },
      { field: 'keysecondary',  type: 'string[]', optional: false, desc: 'Secondary trigger keywords (selective logic applies).' },
      { field: 'position',      type: 'number',   optional: false, desc: 'Injection position (0=WI Before, 1=WI After, 4=at depth).' },
      { field: 'depth',         type: 'number',   optional: false, desc: 'Injection depth from end of chat history.' },
      { field: 'priority',      type: 'number',   optional: false, desc: 'Activation priority (higher = evicted last).' },
      { field: 'constant',      type: 'boolean',  optional: false, desc: 'Always active regardless of keyword matches.' },
      { field: 'disabled',      type: 'boolean',  optional: false, desc: 'Entry is disabled and will not activate.' },
      { field: 'probability',   type: 'number',   optional: false, desc: 'Activation probability (0–100) when useProbability is true.' },
      { field: 'selective',     type: 'boolean',  optional: false, desc: 'Requires secondary key match when true.' },
    ],
  },
  {
    name: 'WorldInfoEntryInput',
    note: 'Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.',
    fields: [
      { field: 'content?',    type: 'string',   optional: true, desc: 'Entry text content.' },
      { field: 'key?',        type: 'string[]', optional: true, desc: 'Primary trigger keywords.' },
      { field: 'keysecondary?', type: 'string[]', optional: true, desc: 'Secondary trigger keywords.' },
      { field: 'position?',   type: 'number',   optional: true, desc: 'Injection position.' },
      { field: 'depth?',      type: 'number',   optional: true, desc: 'Injection depth.' },
      { field: 'priority?',   type: 'number',   optional: true, desc: 'Activation priority.' },
      { field: 'constant?',   type: 'boolean',  optional: true, desc: 'Always active flag.' },
      { field: 'disabled?',   type: 'boolean',  optional: true, desc: 'Disable this entry.' },
      { field: 'probability?', type: 'number',  optional: true, desc: 'Activation probability (0–100).' },
      { field: 'selective?',  type: 'boolean',  optional: true, desc: 'Require secondary key match.' },
      { field: '(+ more)',    type: '—',        optional: true, desc: 'Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover.' },
    ],
  },
  {
    name: 'ActivatedWorldInfoEntry',
    note: 'Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.',
    fields: [
      { field: '(all WorldInfoEntry fields)', type: '—',                          optional: false, desc: 'All WorldInfoEntry fields are present.' },
      { field: 'source',                      type: "'keyword' | 'vector'",        optional: false, desc: 'How this entry was activated.' },
      { field: 'score?',                      type: 'number',                      optional: true,  desc: 'Cosine similarity score for vector-activated entries. Absent for keyword-activated entries.' },
    ],
  },
  // ─── World Info Interceptor ─────────────────────────────────────────────────
  {
    name: 'WorldInfoInterceptorEntry',
    note: 'Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.',
    fields: [
      { field: 'id',             type: 'string',                  optional: false, desc: 'Entry UUID.' },
      { field: 'worldBookId',    type: 'string',                  optional: false, desc: 'Parent world book UUID.' },
      { field: 'comment',        type: 'string',                  optional: false, desc: 'Author-facing comment / label for the entry.' },
      { field: 'disabled',       type: 'boolean',                 optional: false, desc: 'Stored disabled flag (or accumulated disable from earlier handlers in the chain).' },
      { field: 'constant',       type: 'boolean',                 optional: false, desc: 'Always-active flag.' },
      { field: 'extensions',     type: 'Record<string, unknown>', optional: false, desc: 'Per-extension namespace metadata stored on the entry.' },
      { field: 'key',            type: 'readonly string[]',       optional: false, desc: 'Primary trigger keywords.' },
      { field: 'keysecondary',   type: 'readonly string[]',       optional: false, desc: 'Secondary trigger keywords.' },
      { field: 'position',       type: 'number',                  optional: false, desc: 'Injection position.' },
      { field: 'depth',          type: 'number',                  optional: false, desc: 'Injection depth.' },
      { field: 'priority',       type: 'number',                  optional: false, desc: 'Activation priority.' },
      { field: 'probability',    type: 'number',                  optional: false, desc: 'Activation probability (0–100).' },
      { field: 'useProbability', type: 'boolean',                 optional: false, desc: 'Whether probability gating applies.' },
      { field: 'content',        type: 'string',                  optional: false, desc: 'Entry text content (reflects mutations from earlier handlers in the chain).' },
    ],
  },
  {
    name: 'WorldInfoInterceptorMessage',
    note: 'One chat message exposed to a registerInterceptor handler.',
    fields: [
      { field: 'role',    type: "'system' | 'user' | 'assistant'", optional: false, desc: 'Message role.' },
      { field: 'content', type: 'string',                          optional: false, desc: 'Message content.' },
    ],
  },
  {
    name: 'WorldInfoInterceptorCtx',
    note: "Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.",
    fields: [
      { field: 'chatId',       type: 'string',                          optional: false, desc: 'Active chat id.' },
      { field: 'characterId',  type: 'string',                          optional: false, desc: 'Active character id.' },
      { field: 'userId?',      type: 'string',                          optional: true,  desc: 'Owning user id. Pass to operator-scoped Spindle calls.' },
      { field: 'entries',      type: 'readonly WorldInfoInterceptorEntry[]', optional: false, desc: 'Candidate entries with prior handlers\' mutations applied.' },
      { field: 'messages',     type: 'readonly WorldInfoInterceptorMessage[]', optional: false, desc: 'Chat-history snapshot.' },
      { field: 'chatTurn',     type: 'number',                          optional: false, desc: 'Turn number for this chat.' },
      { field: 'chatMetadata', type: 'Record<string, unknown>',         optional: false, desc: 'Chat-level metadata snapshot. Read-only.' },
    ],
  },
  {
    name: 'WorldInfoInterceptorResult',
    note: 'Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.',
    fields: [
      { field: 'disabled?', type: 'readonly string[]',                       optional: true, desc: 'Entry ids to force-disable. Wins against any later enabled / forced vote.' },
      { field: 'enabled?',  type: 'readonly string[]',                       optional: true, desc: 'Entry ids to un-disable (overrides stored disabled). No effect on entries any handler voted disabled.' },
      { field: 'forced?',   type: 'readonly string[]',                       optional: true, desc: 'Entry ids to force-activate (sets constant=true for this turn). No effect if voted disabled. Independent of enabled — to revive a stored-disabled entry, vote BOTH enabled and forced.' },
      { field: 'mutated?',  type: 'readonly { id: string; content: string }[]', optional: true, desc: 'Per-entry content overrides for this turn only. Stored entry unchanged. Last-write-wins per id.' },
    ],
  },
  {
    name: 'WorldInfoInterceptorOptions',
    note: 'Passed to api.worldInfo.registerInterceptor(handler, options?).',
    fields: [
      { field: 'id?',        type: 'string', optional: true, desc: "Stable identifier. Re-registration with the same id replaces the prior entry. Auto-generated ('auto-1', etc.) when omitted." },
      { field: 'priority?',  type: 'number', optional: true, desc: 'Lower runs first. Default 100. Tie-broken by registration order. Each handler sees prior handlers\' decisions applied to the entry list.' },
      { field: 'timeoutMs?', type: 'number', optional: true, desc: "Per-invocation soft timeout (ms). Default 2000. Host's outer 10s budget is shared across all extensions; keep handlers fast — the chain fires before activation, prompt assembly, and the LLM call." },
    ],
  },
  {
    name: 'RegisteredWorldInfoInterceptorInfo',
    note: 'Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.',
    fields: [
      { field: 'scriptId',   type: 'string', optional: false, desc: 'Owning script id.' },
      { field: 'scriptName', type: 'string', optional: false, desc: 'Owning script display name.' },
      { field: 'id',         type: 'string', optional: false, desc: 'Resolved entry id (auto-generated or user-provided).' },
      { field: 'priority',   type: 'number', optional: false, desc: 'Effective priority value.' },
      { field: 'timeoutMs',  type: 'number', optional: false, desc: 'Effective per-invocation timeout (ms).' },
    ],
  },
  // ─── Regex Scripts ─────────────────────────────────────────────────────────
  {
    name: 'RegexScriptInfo',
    note: "Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.",
    fields: [
      { field: 'id',               type: 'string',                                                          optional: false, desc: 'Unique row id.' },
      { field: 'name',             type: 'string',                                                          optional: false, desc: 'Display name shown in the regex panel.' },
      { field: 'scriptId',         type: 'string',                                                          optional: false, desc: 'Stable, normalized identifier (lowercase + underscores) for cross-instance references. Distinct from id.' },
      { field: 'findRegex',        type: 'string',                                                          optional: false, desc: 'Pattern compiled with the JavaScript regex engine.' },
      { field: 'replaceString',    type: 'string',                                                          optional: false, desc: 'Replacement template. Supports $1 / $& / $<name> capture references.' },
      { field: 'flags',            type: 'string',                                                          optional: false, desc: 'Any subset of "gimsu".' },
      { field: 'placement',        type: "RegexPlacement[]",                                                optional: false, desc: 'Which message roles the rule applies to.' },
      { field: 'scope',            type: "RegexScope",                                                      optional: false, desc: "Scope tier: 'global' | 'character' | 'chat'." },
      { field: 'scopeId',          type: 'string | null',                                                   optional: false, desc: 'Required when scope is non-global; null otherwise.' },
      { field: 'target',           type: "RegexTarget",                                                     optional: false, desc: "When the rule fires: 'prompt' (during assembly) | 'response' (after LLM stream) | 'display' (per render)." },
      { field: 'minDepth',         type: 'number | null',                                                   optional: false, desc: 'Lower bound on chat-history depth (0 = latest), or null for unbounded.' },
      { field: 'maxDepth',         type: 'number | null',                                                   optional: false, desc: 'Upper bound on chat-history depth, or null for unbounded.' },
      { field: 'trimStrings',      type: 'string[]',                                                        optional: false, desc: 'Additional substrings stripped from output after the regex pass.' },
      { field: 'runOnEdit',        type: 'boolean',                                                         optional: false, desc: 'Re-run the rule when a message is edited.' },
      { field: 'substituteMacros', type: "RegexMacroMode",                                                  optional: false, desc: "How CBS / {{...}} macros inside the rule resolve: 'none' | 'raw' | 'escaped'." },
      { field: 'disabled',         type: 'boolean',                                                         optional: false, desc: 'When true, the rule is registered but not active.' },
      { field: 'sortOrder',        type: 'number',                                                          optional: false, desc: 'Lower values run earlier within the same scope tier.' },
      { field: 'description',      type: 'string',                                                          optional: false, desc: 'Free-form note.' },
      { field: 'folder',           type: 'string',                                                          optional: false, desc: 'Folder label shown in the regex panel.' },
      { field: 'metadata',         type: 'Record<string, unknown>',                                         optional: false, desc: 'Arbitrary metadata namespaced to the creating extension.' },
      { field: 'createdAt',        type: 'number',                                                          optional: false, desc: 'Unix epoch seconds.' },
      { field: 'updatedAt',        type: 'number',                                                          optional: false, desc: 'Unix epoch seconds.' },
    ],
  },
  {
    name: 'RegexScriptListOptions',
    note: 'Filter options for api.regexScripts.list().',
    fields: [
      { field: 'scope?',   type: "'global' | 'character' | 'chat'", optional: true, desc: 'Filter to a single scope. Omit to include all scopes.' },
      { field: 'scopeId?', type: 'string',                          optional: true, desc: "Required when scope is 'character' or 'chat'. Ignored otherwise." },
      { field: 'target?',  type: "'prompt' | 'response' | 'display'", optional: true, desc: 'Filter by execution target.' },
      { field: 'limit?',   type: 'number',                          optional: true, desc: 'Page size. Default 50, max 200.' },
      { field: 'offset?',  type: 'number',                          optional: true, desc: 'Pagination offset.' },
    ],
  },
  {
    name: 'RegexScriptActiveOptions',
    note: 'Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.',
    fields: [
      { field: 'target',       type: "'prompt' | 'response' | 'display'", optional: false, desc: 'Required. The execution target to resolve for.' },
      { field: 'characterId?', type: 'string',                          optional: true,  desc: 'Include character-scoped rules attached to this character.' },
      { field: 'chatId?',      type: 'string',                          optional: true,  desc: 'Include chat-scoped rules attached to this chat.' },
    ],
  },
  {
    name: 'RegexScriptCreateInput',
    note: 'Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.',
    fields: [
      { field: 'name',              type: 'string',                                                          optional: false, desc: 'Display name.' },
      { field: 'findRegex',         type: 'string',                                                          optional: false, desc: 'Pattern (JavaScript regex).' },
      { field: 'replaceString?',    type: 'string',                                                          optional: true,  desc: 'Replacement template. Default empty string.' },
      { field: 'flags?',            type: 'string',                                                          optional: true,  desc: 'Any subset of "gimsu". Default "gi".' },
      { field: 'placement?',        type: "RegexPlacement[]",                                                optional: true,  desc: 'Default ["ai_output"].' },
      { field: 'scope?',            type: "RegexScope",                                                      optional: true,  desc: "Default 'global'." },
      { field: 'scopeId?',          type: 'string | null',                                                   optional: true,  desc: 'Required when scope is non-global.' },
      { field: 'target?',           type: "RegexTarget",                                                     optional: true,  desc: "Default 'response'." },
      { field: 'minDepth?',         type: 'number | null',                                                   optional: true,  desc: 'Lower depth bound.' },
      { field: 'maxDepth?',         type: 'number | null',                                                   optional: true,  desc: 'Upper depth bound.' },
      { field: 'trimStrings?',      type: 'string[]',                                                        optional: true,  desc: 'Additional substrings stripped from output.' },
      { field: 'runOnEdit?',        type: 'boolean',                                                         optional: true,  desc: 'Re-run on edit.' },
      { field: 'substituteMacros?', type: "RegexMacroMode",                                                  optional: true,  desc: "How CBS / {{...}} macros inside the rule resolve. Default 'none'." },
      { field: 'disabled?',         type: 'boolean',                                                         optional: true,  desc: 'Create as disabled.' },
      { field: 'sortOrder?',        type: 'number',                                                          optional: true,  desc: 'Default 0.' },
      { field: 'description?',      type: 'string',                                                          optional: true,  desc: 'Free-form note.' },
      { field: 'folder?',           type: 'string',                                                          optional: true,  desc: 'Folder label.' },
      { field: 'metadata?',         type: 'Record<string, unknown>',                                         optional: true,  desc: 'Arbitrary metadata.' },
      { field: 'scriptId?',         type: 'string',                                                          optional: true,  desc: 'Stable identifier. Normalized to lowercase + underscores by the host.' },
    ],
  },
  {
    name: 'RegexScriptUpdateInput',
    note: 'Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.',
    fields: [
      { field: '(all RegexScriptCreateInput fields, all optional)', type: '—', optional: true, desc: 'Only the fields you provide are updated; omitted fields are left unchanged.' },
    ],
  },
  // ─── Personas ─────────────────────────────────────────────────────────────────
  {
    name: 'Persona',
    note: 'Returned by api.personas.get / getDefault / getActive / create / update.',
    fields: [
      { field: 'id',                   type: 'string',                  optional: false, desc: 'Persona UUID.' },
      { field: 'name',                 type: 'string',                  optional: false, desc: 'Persona name.' },
      { field: 'title',                type: 'string',                  optional: false, desc: 'Short tagline shown in the persona picker.' },
      { field: 'description',          type: 'string',                  optional: false, desc: 'Persona description.' },
      { field: 'imageId',              type: 'string | null',           optional: false, desc: 'Avatar image ID. Null if no avatar.' },
      { field: 'attachedWorldBookId',  type: 'string | null',           optional: false, desc: 'World book attached to this persona. Null if none.' },
      { field: 'folder',               type: 'string',                  optional: false, desc: 'Organisational folder label.' },
      { field: 'isDefault',            type: 'boolean',                 optional: false, desc: 'Whether this is the default persona.' },
      { field: 'subjectivePronoun?',   type: 'string',                  optional: true,  desc: 'Subjective pronoun (e.g. "he", "she", "they").' },
      { field: 'objectivePronoun?',    type: 'string',                  optional: true,  desc: 'Objective pronoun (e.g. "him", "her", "them").' },
      { field: 'possessivePronoun?',   type: 'string',                  optional: true,  desc: 'Possessive pronoun (e.g. "his", "her", "their").' },
      { field: 'metadata',             type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata.' },
      { field: 'createdAt',            type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',            type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'PersonaCreateInput',
    note: 'Passed to api.personas.create(input). Only name is required.',
    fields: [
      { field: 'name',                  type: 'string',                  optional: false, desc: 'Persona name.' },
      { field: 'title?',                type: 'string',                  optional: true,  desc: 'Short tagline.' },
      { field: 'description?',          type: 'string',                  optional: true,  desc: 'Persona description.' },
      { field: 'folder?',               type: 'string',                  optional: true,  desc: 'Organisational folder label.' },
      { field: 'isDefault?',            type: 'boolean',                 optional: true,  desc: 'Set as default persona (clears previous default).' },
      { field: 'attachedWorldBookId?',  type: 'string',                  optional: true,  desc: 'World book UUID to attach.' },
      { field: 'subjectivePronoun?',    type: 'string',                  optional: true,  desc: 'Subjective pronoun (e.g. "he", "she", "they").' },
      { field: 'objectivePronoun?',     type: 'string',                  optional: true,  desc: 'Objective pronoun (e.g. "him", "her", "them").' },
      { field: 'possessivePronoun?',    type: 'string',                  optional: true,  desc: 'Possessive pronoun (e.g. "his", "her", "their").' },
      { field: 'metadata?',             type: 'Record<string, unknown>', optional: true,  desc: 'Arbitrary metadata.' },
    ],
  },
  {
    name: 'PersonaUpdateInput',
    note: 'Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.',
    fields: [
      { field: 'name?',                 type: 'string',                  optional: true, desc: 'New persona name.' },
      { field: 'title?',                type: 'string',                  optional: true, desc: 'Short tagline.' },
      { field: 'description?',          type: 'string',                  optional: true, desc: 'Persona description.' },
      { field: 'folder?',               type: 'string',                  optional: true, desc: 'Organisational folder label.' },
      { field: 'isDefault?',            type: 'boolean',                 optional: true, desc: 'Set as default persona (clears previous default).' },
      { field: 'attachedWorldBookId?',  type: 'string',                  optional: true, desc: 'World book UUID to attach.' },
      { field: 'subjectivePronoun?',    type: 'string',                  optional: true, desc: 'Subjective pronoun (e.g. "he", "she", "they").' },
      { field: 'objectivePronoun?',     type: 'string',                  optional: true, desc: 'Objective pronoun (e.g. "him", "her", "them").' },
      { field: 'possessivePronoun?',    type: 'string',                  optional: true, desc: 'Possessive pronoun (e.g. "his", "her", "their").' },
      { field: 'metadata?',             type: 'Record<string, unknown>', optional: true, desc: 'Arbitrary metadata (replaces entire object).' },
    ],
  },
  // ─── Council ──────────────────────────────────────────────────────────────────
  {
    name: 'CouncilSettings',
    note: "Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.",
    fields: [
      { field: 'councilMode',   type: 'boolean',              optional: false, desc: "Whether Council mode is currently enabled for this user." },
      { field: 'members',       type: 'CouncilMember[]',      optional: false, desc: "Member assignments. See CouncilMember for the per-row shape; getMembers() returns the same set enriched with Lumia context as CouncilMemberContext[]." },
      { field: 'toolsSettings', type: 'CouncilToolsSettings', optional: false, desc: "Tool-execution settings (mode, timeoutMs, sidecar context window, etc.)." },
    ],
  },
  {
    name: 'CouncilMember',
    note: 'A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].',
    fields: [
      { field: 'id',         type: 'string',   optional: false, desc: 'Unique Council member id (settings row id).' },
      { field: 'packId',     type: 'string',   optional: false, desc: 'Pack id that contains the source Lumia item.' },
      { field: 'packName',   type: 'string',   optional: false, desc: 'Pack name (display label).' },
      { field: 'itemId',     type: 'string',   optional: false, desc: 'Source Lumia item id this member is backed by.' },
      { field: 'itemName',   type: 'string',   optional: false, desc: 'Source Lumia item display name.' },
      { field: 'tools',      type: 'string[]', optional: false, desc: 'Tool names this member is assigned (empty array if no tools).' },
      { field: 'role',       type: 'string',   optional: false, desc: 'Freeform role description (e.g. "Plot Enforcer").' },
      { field: 'chance',     type: 'number',   optional: false, desc: 'Probability (0–100) that this member participates each generation.' },
    ],
  },
  {
    name: 'CouncilMemberContext',
    note: "Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.",
    fields: [
      { field: 'memberId',       type: 'string',                 optional: false, desc: 'Unique Council member id.' },
      { field: 'itemId',         type: 'string',                 optional: false, desc: 'Source Lumia item id.' },
      { field: 'packId',         type: 'string',                 optional: false, desc: 'Pack id.' },
      { field: 'packName',       type: 'string',                 optional: false, desc: 'Pack name.' },
      { field: 'name',           type: 'string',                 optional: false, desc: 'Display name (also used as the member name).' },
      { field: 'role',           type: 'string',                 optional: false, desc: 'Freeform role description.' },
      { field: 'chance',         type: 'number',                 optional: false, desc: 'Probability (0–100) per generation.' },
      { field: 'avatarUrl',      type: 'string | null',          optional: false, desc: 'Relative URL to the avatar (e.g. /api/v1/images/{id}), or null.' },
      { field: 'definition',     type: 'string',                 optional: false, desc: 'Lumia "definition" field — physical / identity description.' },
      { field: 'personality',    type: 'string',                 optional: false, desc: 'Lumia "personality" field.' },
      { field: 'behavior',       type: 'string',                 optional: false, desc: 'Lumia "behavior" field — behavioural patterns.' },
      { field: 'genderIdentity', type: '0 | 1 | 2',              optional: false, desc: '0 = unspecified, 1 = feminine, 2 = masculine. (Note: upstream council.md docs describe a wider 4-value range; LumiScript matches the actual typed surface — type-vs-doc inconsistency tracked upstream.)' },
    ],
  },
  {
    name: 'CouncilToolsSettings',
    note: 'Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.',
    fields: [
      { field: 'mode',                  type: "'sidecar' | 'inline'",     optional: false, desc: "'sidecar' uses a separate LLM connection profile for the deliberation pass; 'inline' sends tools as native function definitions to the main LLM." },
      { field: 'timeoutMs',             type: 'number',                   optional: false, desc: 'Timeout per tool call in ms.' },
      { field: 'sidecarContextWindow',  type: 'number',                   optional: false, desc: "Number of recent chat messages to include in sidecar context (only meaningful when mode is 'sidecar')." },
      { field: 'includeUserPersona',    type: 'boolean',                  optional: false, desc: 'Whether to include the user persona in tool context.' },
      { field: 'includeCharacterInfo',  type: 'boolean',                  optional: false, desc: 'Whether to include the active character info in tool context.' },
      { field: 'includeWorldInfo',      type: 'boolean',                  optional: false, desc: 'Whether to include activated world info in tool context.' },
      { field: 'allowUserControl',      type: 'boolean',                  optional: false, desc: 'Whether the user can trigger individual tools on demand.' },
      { field: 'maxWordsPerTool',       type: 'number',                   optional: false, desc: 'Word limit per tool response (0 = unlimited).' },
      { field: 'retainResultsForRegens?', type: 'boolean',                optional: true,  desc: "When true, council tools are NOT re-executed on regenerations / swipes — last successful results are reused from chat metadata. Tools still fire for fresh sends, continues, impersonations." },
      { field: 'enabled?',              type: 'boolean',                  optional: true,  desc: '@deprecated — kept for backwards compatibility with saved settings.' },
    ],
  },
  {
    name: 'LumiaItem',
    note: 'Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what\'s currently assigned to Council members.',
    fields: [
      { field: 'id',             type: 'string',        optional: false, desc: 'Unique Lumia item id.' },
      { field: 'packId',         type: 'string',        optional: false, desc: 'Pack id this item belongs to.' },
      { field: 'name',           type: 'string',        optional: false, desc: 'Display name.' },
      { field: 'avatarUrl',      type: 'string | null', optional: false, desc: 'Relative URL to the avatar image, or null when no avatar is set.' },
      { field: 'authorName',     type: 'string',        optional: false, desc: 'Display name of the pack author.' },
      { field: 'definition',     type: 'string',        optional: false, desc: 'Physical / identity description (free-form text).' },
      { field: 'personality',    type: 'string',        optional: false, desc: 'Personality description (free-form text).' },
      { field: 'behavior',       type: 'string',        optional: false, desc: 'Behavioural patterns (free-form text).' },
      { field: 'genderIdentity', type: '0 | 1 | 2',     optional: false, desc: '0 = unspecified, 1 = feminine, 2 = masculine. (Same upstream type-vs-doc inconsistency as CouncilMemberContext.genderIdentity.)' },
      { field: 'version',        type: 'string',        optional: false, desc: 'Pack-author-supplied version string (e.g. "1.0.0").' },
      { field: 'sortOrder',      type: 'number',        optional: false, desc: 'Sort index within the pack (lower renders first).' },
      { field: 'createdAt',      type: 'number',        optional: false, desc: 'Creation timestamp (Unix seconds).' },
      { field: 'updatedAt',      type: 'number',        optional: false, desc: 'Last update timestamp (Unix seconds).' },
    ],
  },
  // ─── Tools ────────────────────────────────────────────────────────────────────
  {
    name: 'ToolDefinition',
    note: 'Passed to api.tools.register(name, def, handler).',
    fields: [
      { field: 'display_name',      type: 'string',  optional: false, desc: 'Human-readable name shown in the Lumiverse Council tools list.' },
      { field: 'description',       type: 'string',  optional: false, desc: 'Description for the LLM — explains what the tool does and when to call it.' },
      { field: 'parameters?',       type: 'object',  optional: true,  desc: 'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.' },
      { field: 'council_eligible?', type: 'boolean', optional: true,  desc: 'When true, the tool appears in the Council tools list and can be assigned to Council members. Default false.' },
    ],
  },
  {
    name: 'ToolInvocationArgs',
    note: 'Parameter passed to tool handler callbacks registered via api.tools.register(). Always carries the well-known Lumiverse fields (context / __userId / __deadlineMs) on a host invocation; your registration-schema parameters are filled only on the DIRECT paths (api.tools.invoke + api.llm.generateWithTools), NOT on the Council path — see the [key] field.',
    fields: [
      { field: 'context?',     type: 'string', optional: true, desc: 'Formatted chat context provided by Lumiverse (character info, world info, recent messages).' },
      { field: '__userId?',    type: 'string', optional: true, desc: 'User ID of the invoking user. Use for scoped api.* operations inside the handler.' },
      { field: '__deadlineMs?', type: 'number', optional: true, desc: 'Timestamp (ms) by which the handler must return a result.' },
      { field: '[key]',        type: 'unknown', optional: true, desc: 'Tool-specific parameters from your registration schema — available as additional fields ONLY on the direct paths (api.tools.invoke + api.llm.generateWithTools), where the caller/model supplies them. On the Council path they are absent: the host invokes extension tools with just context + __deadlineMs (no sidecar LLM fills your schema), so read args.context and decide the values yourself.' },
    ],
  },
  {
    name: 'ToolInvocationContext',
    note: 'Optional third parameter passed to tool handlers. Populated when the host invokes the tool (Council / direct-LLM function-call); undefined when invoked via api.tools.invoke() (script-to-script). The Council-path fields (requestId, councilMember, contextMessages) are populated together; the script-to-script path leaves them all undefined.',
    fields: [
      { field: 'requestId?',       type: 'string',                optional: true, desc: 'Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs.' },
      { field: 'councilMember?',   type: 'CouncilMemberContext',  optional: true, desc: 'Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts.' },
      { field: 'contextMessages?', type: 'LLMMessage[]',          optional: true, desc: "Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts." },
    ],
  },
  {
    name: 'RegisteredToolInfo',
    note: 'Returned by api.tools.list(). A serialisable snapshot of a registered tool.',
    fields: [
      { field: 'name',             type: 'string',  optional: false, desc: 'Tool identifier (bare name, no prefix).' },
      { field: 'display_name',     type: 'string',  optional: false, desc: 'Human-readable name.' },
      { field: 'description',      type: 'string',  optional: false, desc: 'LLM-facing description.' },
      { field: 'parameters?',      type: 'object',  optional: true,  desc: 'JSON Schema for the tool\'s input parameters.' },
      { field: 'council_eligible', type: 'boolean', optional: false, desc: 'Whether the tool can be assigned to Council members.' },
      { field: 'scriptId',         type: 'string',  optional: false, desc: 'ID of the script that registered this tool.' },
      { field: 'scriptName',       type: 'string',  optional: false, desc: 'Name of the script that registered this tool.' },
    ],
  },
  // ─── Macros ──────────────────────────────────────────────────────────────────
  {
    name: 'MacroDefinition',
    note: 'Passed to api.macros.register(name, def, handler?).',
    fields: [
      { field: 'description', type: 'string',                                         optional: false, desc: 'Human-readable description shown in preset editors and macro browsers.' },
      { field: 'category?',   type: 'string',                                         optional: true,  desc: "Category label. Default: 'extension:lumiscript:user'." },
      { field: 'returnType?', type: "'string'|'integer'|'number'|'boolean'",          optional: true,  desc: 'Hint for value-type coercion on resolution. Default string.' },
      { field: 'args?',       type: 'Array<{ name, description?, required? }>',      optional: true,  desc: 'Argument schema shown to preset authors.' },
    ],
  },
  {
    name: 'MacroContext',
    note: 'Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse\'s MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.',
    fields: [
      { field: 'name',       type: 'string',                                optional: false, desc: 'The bare macro name (no `{{}}`, no arguments).' },
      { field: 'args',       type: 'string[]',                              optional: false, desc: 'Argument tokens parsed from the macro invocation.' },
      { field: 'env?',       type: '{ character?, chat?, names?, variables?, … }', optional: true, desc: 'Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it).' },
      { field: 'isScoped?',  type: 'boolean',                               optional: true,  desc: 'True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}}).' },
      { field: 'body?',      type: 'string',                                optional: true,  desc: 'Body text for scoped macros.' },
    ],
  },
  {
    name: 'RegisteredMacroInfo',
    note: 'Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).',
    fields: [
      { field: 'name',        type: 'string',                                optional: false, desc: 'Macro identifier.' },
      { field: 'description', type: 'string',                                optional: false, desc: 'Description as supplied at registration.' },
      { field: 'category',    type: 'string',                                optional: false, desc: 'Category label. User-registered macros default to `extension:lumiscript:user`.' },
      { field: 'returnType?', type: "'string'|'integer'|'number'|'boolean'", optional: true,  desc: 'Return-type hint.' },
      { field: 'args?',       type: 'Array<{ name, description?, required? }>', optional: true, desc: 'Argument schema.' },
      { field: 'mode',        type: "'push' | 'pull'",                       optional: false, desc: '`push` when registered without a handler; `pull` when handler-backed.' },
      { field: 'lastValue?',  type: 'string',                                optional: true,  desc: 'Most recent value pushed via updateValue. Only meaningful in push mode.' },
      { field: 'scriptId',    type: 'string',                                optional: false, desc: 'ID of the owning script.' },
      { field: 'scriptName',  type: 'string',                                optional: false, desc: 'Name of the owning script.' },
    ],
  },
  // ─── DB ──────────────────────────────────────────────────────────────────────
  {
    name: 'DbScope',
    note: 'Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.',
    fields: [
      { field: `'script'`,    type: `'script'`,    optional: false, desc: 'Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present).' },
      { field: `'character'`, type: `'character'`, optional: false, desc: 'Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character.' },
      { field: `'chat'`,      type: `'chat'`,      optional: false, desc: 'Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat.' },
    ],
  },
  {
    name: 'CollectionOpts',
    note: 'Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.',
    fields: [
      { field: 'scope?',  type: 'DbScope',    optional: true, desc: "Scope of the collection. Defaults to 'script'." },
      { field: 'schema?', type: 'ZodLike<T>', optional: true, desc: 'Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration.' },
    ],
  },
  {
    name: 'DbRecord',
    note: 'Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.',
    fields: [
      { field: 'id',        type: 'string', optional: false, desc: 'UUID v4 auto-assigned at insert (overridable by caller).' },
      { field: 'createdAt', type: 'number', optional: false, desc: 'Epoch ms — set once at insert. Immutable.' },
      { field: 'updatedAt', type: 'number', optional: false, desc: 'Epoch ms — bumped to Date.now() on every successful update.' },
      { field: '[key: string]', type: 'unknown', optional: false, desc: 'User-supplied fields — anything JSON-serializable.' },
    ],
  },
  {
    name: 'DbFilter',
    note: 'Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.',
    fields: [
      { field: 'undefined',          type: 'undefined',                optional: false, desc: 'Matches all records. Used as sugar for "operate on everything".' },
      { field: 'function',           type: '(record: T) => boolean',   optional: false, desc: 'Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate.' },
      { field: 'object (literal)',   type: 'Partial<T>',               optional: false, desc: "Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify." },
      { field: 'object (envelope)',  type: '{ $op: value, ... }',      optional: false, desc: 'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.' },
    ],
  },
  // ─── Events ──────────────────────────────────────────────────────────────────
  {
    name: 'EventTrackOptions',
    note: 'Options for api.events.track().',
    fields: [
      { field: 'level?',         type: "'debug'|'info'|'warn'|'error'", optional: true, desc: 'Severity level (default: info).' },
      { field: 'chatId?',        type: 'string',  optional: true, desc: 'Associate with a specific chat (defaults to active chat).' },
      { field: 'retentionDays?', type: 'number',  optional: true, desc: 'Auto-expire after this many days.' },
    ],
  },
  {
    name: 'EventQueryFilter',
    note: 'Filter for api.events.query() and api.events.replay().',
    fields: [
      { field: 'eventName?', type: 'string',  optional: true, desc: 'Filter by event name.' },
      { field: 'chatId?',    type: 'string',  optional: true, desc: 'Filter by chat.' },
      { field: 'since?',     type: 'string',  optional: true, desc: 'ISO 8601 — only events after this timestamp.' },
      { field: 'until?',     type: 'string',  optional: true, desc: 'ISO 8601 — only events before this timestamp.' },
      { field: 'level?',     type: "'debug'|'info'|'warn'|'error'", optional: true, desc: 'Filter by severity level.' },
      { field: 'limit?',     type: 'number',  optional: true, desc: 'Maximum number of results.' },
    ],
  },
  {
    name: 'EventRecord',
    note: 'Returned by api.events.query() and api.events.replay().',
    fields: [
      { field: 'id',        type: 'string',  optional: false, desc: 'Unique event ID.' },
      { field: 'ts',        type: 'string',  optional: false, desc: 'ISO 8601 timestamp.' },
      { field: 'eventName', type: 'string',  optional: false, desc: 'Name of the tracked event.' },
      { field: 'level',     type: "'debug'|'info'|'warn'|'error'", optional: false, desc: 'Severity level.' },
      { field: 'chatId?',   type: 'string',  optional: true,  desc: 'Chat this event was associated with.' },
      { field: 'payload?',  type: 'Record<string, unknown>', optional: true, desc: 'Arbitrary event data.' },
    ],
  },
  // ─── Macros ──────────────────────────────────────────────────────────────────
  {
    name: 'MacrosResolveOptions',
    note: 'Options for api.utils.macros.resolve(template, options?).',
    fields: [
      { field: 'chatId?',      type: 'string',  optional: true, desc: 'Chat ID for context-sensitive macros. Defaults to the active chat.' },
      { field: 'characterId?', type: 'string',  optional: true, desc: 'Character ID for character macros. Inferred from active chat if omitted.' },
      { field: 'commit?',      type: 'boolean', optional: true, desc: 'When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true.' },
    ],
  },
  {
    name: 'MacrosResolveResult',
    note: 'Returned by api.utils.macros.resolve().',
    fields: [
      { field: 'text',        type: 'string', optional: false, desc: 'Resolved template text.' },
      { field: 'diagnostics', type: 'Array<{ message, offset, length }>', optional: false, desc: 'Diagnostics from the macro engine (parse errors, unknown macros, etc.).' },
    ],
  },
  // ─── Tokens ──────────────────────────────────────────────────────────────────
  {
    name: 'TokenCountOptions',
    note: 'Options for api.tokens.count* methods.',
    fields: [
      { field: 'model?',       type: 'string',             optional: true, desc: 'Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set.' },
      { field: 'modelSource?', type: "'main' | 'sidecar'", optional: true, desc: "Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model." },
    ],
  },
  {
    name: 'TokenCountResult',
    note: 'Returned by api.tokens.count* methods.',
    fields: [
      { field: 'totalTokens',   type: 'number',                             optional: false, desc: 'Total token count.' },
      { field: 'model',         type: 'string',                             optional: false, desc: 'Model ID actually used to resolve the tokenizer.' },
      { field: 'modelSource',   type: "'main' | 'sidecar' | 'explicit'",    optional: false, desc: 'Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override.' },
      { field: 'tokenizerId',   type: 'string | null',                      optional: false, desc: 'Null when no exact tokenizer match was found and an approximate fallback was used.' },
      { field: 'tokenizerName', type: 'string',                             optional: false, desc: 'Human-readable tokenizer name (empty string when approximate).' },
      { field: 'approximate',   type: 'boolean',                            optional: false, desc: 'True when Lumiverse fell back to its approximate char/4 heuristic.' },
    ],
  },
  // ─── Characters ──────────────────────────────────────────────────────────────
  {
    name: 'CharacterAvatarUpload',
    note: 'Payload for api.characters.setAvatar(id, avatar).',
    fields: [
      { field: 'data',      type: 'Uint8Array', optional: false, desc: 'Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc.' },
      { field: 'filename?', type: 'string',     optional: true,  desc: 'Optional filename — preserves the file extension when stored.' },
      { field: 'mimeType?', type: 'string',     optional: true,  desc: "Optional content type. Defaults to 'image/png' on the host side." },
    ],
  },

  // ─── Databanks ───────────────────────────────────────────────────────────────
  {
    name: 'DatabankScope',
    note: "**Enum**: `'global' | 'character' | 'chat'`. Activation scope for a databank. There are EXACTLY THREE values — there is no `'script'` scope. `'global'` is unscoped (available everywhere); `'character'` is keyed by a character UUID via `scopeId`; `'chat'` is keyed by a chat UUID via `scopeId`. `scopeId` is REQUIRED for `'character'` and `'chat'`, omitted (or null) for `'global'`. Scope cannot be changed after creation — pick the right one up front.",
    fields: [],
  },
  {
    name: 'DatabankDocumentStatus',
    note: "**Enum**: `'pending' | 'processing' | 'ready' | 'error'`. Ingestion lifecycle of an uploaded document. New uploads land as `'pending'` and progress through `'processing'` to `'ready'` (success) or `'error'` (terminal failure). `documents.getContent()` returns null for anything other than `'ready'`; `documents.waitUntilReady()` polls until ready and throws on `'error'` or timeout.",
    fields: [],
  },
  {
    name: 'DatabankInfo',
    note: 'Returned by api.databanks.get / findByName / create / update; entries inside list().',
    fields: [
      { field: 'id',              type: 'string',                  optional: false, desc: 'Databank ID.' },
      { field: 'name',            type: 'string',                  optional: false, desc: 'Display name.' },
      { field: 'description',     type: 'string',                  optional: false, desc: 'Free-form description; empty string if unset.' },
      { field: 'scope',           type: 'DatabankScope',           optional: false, desc: "Activation scope: 'global' | 'character' | 'chat'." },
      { field: 'scopeId',         type: 'string | null',           optional: false, desc: "Owner key for 'character' (character UUID) or 'chat' (chat UUID) scopes. null for 'global'." },
      { field: 'enabled',         type: 'boolean',                 optional: false, desc: 'Whether the databank participates in retrieval.' },
      { field: 'metadata',        type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata bag.' },
      { field: 'documentCount?',  type: 'number',                  optional: true,  desc: 'Number of documents in the databank. May be omitted on bulk list responses for performance.' },
      { field: 'createdAt',       type: 'number',                  optional: false, desc: 'Creation timestamp (ms since epoch).' },
      { field: 'updatedAt',       type: 'number',                  optional: false, desc: 'Last-modified timestamp (ms since epoch).' },
    ],
  },
  {
    name: 'DatabankCreateInput',
    note: 'Passed to api.databanks.create(input). Validates host-side — invalid scope or missing scopeId rejects the call.',
    fields: [
      { field: 'name',         type: 'string',         optional: false, desc: 'Display name for the new databank.' },
      { field: 'description?', type: 'string',         optional: true,  desc: 'Free-form description.' },
      { field: 'scope',        type: 'DatabankScope',  optional: false, desc: "Activation scope. MUST be one of 'global' | 'character' | 'chat' — see DatabankScope. There is no 'script' scope." },
      { field: 'scopeId?',     type: 'string | null',  optional: true,  desc: "Owner key. REQUIRED when scope is 'character' or 'chat' (character UUID or chat UUID respectively). Omit (or pass null) when scope is 'global'." },
    ],
  },
  {
    name: 'DatabankUpdateInput',
    note: 'Passed to api.databanks.update(databankId, input). Scope cannot be changed after creation — there are no scope/scopeId fields here on purpose.',
    fields: [
      { field: 'name?',        type: 'string',  optional: true, desc: 'New display name.' },
      { field: 'description?', type: 'string',  optional: true, desc: 'New description.' },
      { field: 'enabled?',     type: 'boolean', optional: true, desc: 'Whether this databank participates in retrieval.' },
    ],
  },
  {
    name: 'DatabankDocumentInfo',
    note: 'Returned by api.databanks.documents.get / findByName / create / update / waitUntilReady; entries inside documents.list().',
    fields: [
      { field: 'id',           type: 'string',                  optional: false, desc: 'Document ID.' },
      { field: 'databankId',   type: 'string',                  optional: false, desc: 'Parent databank ID.' },
      { field: 'name',         type: 'string',                  optional: false, desc: 'Display name.' },
      { field: 'slug',         type: 'string',                  optional: false, desc: 'URL-safe slug derived from name. Regenerated on rename.' },
      { field: 'mimeType',     type: 'string',                  optional: false, desc: 'MIME type recorded at upload.' },
      { field: 'fileSize',     type: 'number',                  optional: false, desc: 'Size in bytes.' },
      { field: 'contentHash',  type: 'string',                  optional: false, desc: 'Content fingerprint (hash). Use to detect external content changes between uploads.' },
      { field: 'totalChunks',  type: 'number',                  optional: false, desc: 'Number of chunks the document was split into for embedding.' },
      { field: 'status',       type: 'DatabankDocumentStatus',  optional: false, desc: "Ingestion lifecycle: 'pending' | 'processing' | 'ready' | 'error'." },
      { field: 'errorMessage', type: 'string | null',           optional: false, desc: "Human-readable error description when status is 'error'. null otherwise." },
      { field: 'metadata',     type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata bag.' },
      { field: 'createdAt',    type: 'number',                  optional: false, desc: 'Upload timestamp (ms since epoch).' },
      { field: 'updatedAt',    type: 'number',                  optional: false, desc: 'Last-modified timestamp (ms since epoch).' },
    ],
  },
  {
    name: 'DatabankDocumentCreateInput',
    note: 'Passed to api.databanks.documents.create(databankId, input). Upload returns immediately with status=\'pending\' — use waitUntilReady() to await ingestion. Max size 10 MB.',
    fields: [
      { field: 'data',      type: 'string | Uint8Array', optional: false, desc: 'Document content. string values are UTF-8 encoded internally; pass Uint8Array directly for already-binary sources.' },
      { field: 'filename',  type: 'string',              optional: false, desc: 'Original filename including extension. Supported extensions: .txt .md .markdown .csv .tsv .json .xml .html .htm .yaml .yml .log .rst .rtf.' },
      { field: 'mimeType?', type: 'string',              optional: true,  desc: 'Optional MIME type recorded on the document. Derived from filename extension when omitted.' },
      { field: 'name?',     type: 'string',              optional: true,  desc: 'Display name override. Defaults to filename minus the extension.' },
    ],
  },
  {
    name: 'DatabankDocumentUpdateInput',
    note: 'Passed to api.databanks.documents.update(documentId, input). The URL-safe slug regenerates automatically from the new name.',
    fields: [
      { field: 'name', type: 'string', optional: false, desc: 'New display name.' },
    ],
  },
  {
    name: 'DatabankWaitUntilReadyOptions',
    note: 'Optional polling parameters for api.databanks.documents.waitUntilReady(documentId, options?). Throws on timeout, error status, or document deletion.',
    fields: [
      { field: 'timeoutMs?',      type: 'number', optional: true, desc: 'Max wait in ms. Default 60_000 (60s). Throws on timeout.' },
      { field: 'pollIntervalMs?', type: 'number', optional: true, desc: 'Poll interval in ms. Default 500.' },
    ],
  },

  // ─── Memories (Memory Cortex + LTCM) ─────────────────────────────────────────
  {
    name: 'CortexQuery',
    note: 'Input to api.memories.cortex.query(). chatId + queryText are required; the active userId is folded in by LumiScript.',
    fields: [
      { field: 'chatId',                 type: 'string',                       optional: false, desc: 'The chat to retrieve from.' },
      { field: 'queryText',              type: 'string',                       optional: false, desc: 'Free-text retrieval query.' },
      { field: 'entityFilter?',          type: 'string[]',                     optional: true,  desc: 'Restrict to memories mentioning these entity names.' },
      { field: 'timeRange?',             type: '{ start?: number; end?: number }', optional: true, desc: 'Restrict to a time window (Unix ms).' },
      { field: 'emotionalContext?',      type: 'EmotionalTag[]',               optional: true,  desc: "Bias scoring toward emotional tags (e.g. 'betrayal', 'fury', 'grief')." },
      { field: 'generationType?',        type: 'string',                       optional: true,  desc: 'Host hint for retrieval tuning.' },
      { field: 'topK?',                  type: 'number',                       optional: true,  desc: 'Number of memories to return.' },
      { field: 'includeConsolidations?', type: 'boolean',                      optional: true,  desc: 'Include narrative-arc consolidations in the candidate pool.' },
      { field: 'includeRelationships?',  type: 'boolean',                      optional: true,  desc: 'Include the active relationship edges in the result.' },
      { field: 'excludeMessageIds?',     type: 'string[]',                     optional: true,  desc: 'Exclude chunks tied to these message ids.' },
    ],
  },
  {
    name: 'CortexResult',
    note: 'Returned by api.memories.cortex.query() / getCached(). The same shape the host uses internally during prompt assembly.',
    fields: [
      { field: 'memories',            type: 'CortexMemory[]',     optional: false, desc: 'Ranked memories: { source ("chunk"|"consolidation"), sourceId, content, finalScore, components, emotionalTags, entityNames, messageRange, timeRange }.' },
      { field: 'entityContext',       type: 'EntitySnapshot[]',   optional: false, desc: 'Entities in context: { id, name, type, status, description, lastSeenAt, mentionCount, topFacts, emotionalProfile, relationships }.' },
      { field: 'activeRelationships', type: 'RelationEdge[]',     optional: false, desc: 'Active edges: { sourceName, targetName, type, label, strength, sentiment }.' },
      { field: 'arcContext',          type: 'string | null',      optional: false, desc: 'The current narrative arc summary, or null.' },
      { field: 'stats',               type: 'CortexStats',        optional: false, desc: 'Retrieval diagnostics: { candidatePoolSize, vectorSearchResults, entitiesMatched, scoreFusionApplied, topScore, retrievalTimeMs, timedOut?, aborted? }.' },
    ],
  },
  {
    name: 'LinkedCortexResult',
    note: 'Returned by api.memories.cortex.queryLinked() / getCachedLinked(). Attached vaults + interlink targets.',
    fields: [
      { field: 'vaults',     type: 'VaultCortexData[]',     optional: false, desc: 'Per attached vault: { vaultId, vaultName, sourceChatId?, entities, relations, memories?, arcContext? }.' },
      { field: 'interlinks', type: 'InterlinkCortexData[]', optional: false, desc: 'Per interlinked chat: { targetChatId, targetChatName, result: CortexResult }.' },
    ],
  },
  {
    name: 'MemoryCortexConfig',
    note: 'Returned by api.memories.cortex.getConfig(); patch with putConfig(). Permissive — only top-level toggles are typed; advanced + host-added fields pass through the index signature.',
    fields: [
      { field: 'enabled',              type: 'boolean', optional: false, desc: 'Master Memory Cortex toggle.' },
      { field: 'entityTracking',       type: 'boolean', optional: false, desc: 'Whether entity extraction runs.' },
      { field: 'entityExtractionMode', type: 'string',  optional: false, desc: "e.g. 'heuristic' / 'sidecar'." },
      { field: 'salienceScoring',      type: 'boolean', optional: false, desc: 'Whether per-chunk salience scoring runs.' },
      { field: '[advanced]',           type: 'unknown', optional: true,  desc: 'retrieval / decay / consolidation / entityPruning / sidecar tuning + any host-added fields pass through unchanged.' },
    ],
  },
  {
    name: 'ChatChunk',
    note: 'Returned by api.memories.chatMemory.listChunks(). A vectorized chat chunk — the {{memories}} retrieval unit.',
    fields: [
      { field: 'id',             type: 'string',          optional: false, desc: 'Chunk id.' },
      { field: 'chatId',         type: 'string',          optional: false, desc: 'Owning chat.' },
      { field: 'content',        type: 'string',          optional: false, desc: 'Chunk text.' },
      { field: 'messageIds',     type: 'string[]',        optional: false, desc: 'Source message ids (startMessageId..endMessageId).' },
      { field: 'tokenCount',     type: 'number',          optional: false, desc: 'Approx token count.' },
      { field: 'vectorizedAt',   type: 'number | null',   optional: false, desc: 'When embedded (Unix ms), or null if pending.' },
      { field: 'retrievalCount', type: 'number',          optional: false, desc: 'How many times retrieved.' },
    ],
  },
  {
    name: 'ChatMemoryWarmupResult',
    note: 'Returned by api.memories.chatMemory.warm().',
    fields: [
      { field: 'status',                type: "'skipped' | 'complete' | 'rebuilding' | 'queued' | 'error'", optional: false, desc: "'skipped' (e.g. vectorization disabled), etc." },
      { field: 'reason?',               type: 'string',  optional: true, desc: 'Human-readable detail (e.g. \'chat_vectorization_disabled\').' },
      { field: 'rebuilt?',              type: 'boolean', optional: true, desc: 'Whether chunks were rebuilt.' },
      { field: 'vectorizationsQueued?', type: 'number',  optional: true, desc: 'How many vectorizations were queued.' },
    ],
  },
  {
    name: 'CortexUsageStats',
    note: 'Returned by api.memories.stats.usage(). Host gc fields (mention counts, last GC, etc.) pass through.',
    fields: [
      { field: 'entityCount',         type: 'number', optional: false, desc: 'Tracked entities.' },
      { field: 'relationCount',       type: 'number', optional: false, desc: 'Relation edges.' },
      { field: 'salienceRecordCount', type: 'number', optional: false, desc: 'Per-chunk salience records.' },
      { field: 'consolidationCount',  type: 'number', optional: false, desc: 'Narrative-arc consolidations.' },
    ],
  },
  {
    name: 'CortexIngestionStatus',
    note: 'Returned by api.memories.stats.ingestionStatus(), or null when never ingested.',
    fields: [
      { field: 'chatId',      type: 'string',                                                              optional: false, desc: 'The chat.' },
      { field: 'status',      type: "'idle' | 'processing' | 'complete' | 'error'",                         optional: false, desc: 'Overall ingestion status.' },
      { field: 'phase',       type: "'queued'|'font'|'heuristics'|'sidecar'|'persisting'|'complete'|'error'", optional: false, desc: 'Current pipeline phase.' },
      { field: 'pendingJobs', type: 'number',                                                              optional: false, desc: 'Queued ingestion jobs.' },
      { field: 'timings?',    type: 'CortexIngestionTimings | null',                                       optional: true,  desc: 'Last per-phase timings.' },
    ],
  },
  {
    name: 'CortexIngestionTelemetry',
    note: 'Returned by api.memories.stats.ingestionTelemetry().',
    fields: [
      { field: 'samples',  type: 'number',                       optional: false, desc: 'Number of ingestion samples averaged.' },
      { field: 'last',     type: 'CortexIngestionTimings | null', optional: false, desc: 'The most recent ingestion timing sample.' },
      { field: 'averages', type: '{ fontMs, heuristicMs, sidecarMs, graphMs, dbMs, totalMs }', optional: false, desc: 'Per-phase average ms over recent ingestions.' },
    ],
  },
  {
    name: 'MemoryEntity',
    note: 'A tracked entity in the cortex graph. Returned by api.memories.entities.* and inside CortexResult.entityContext (as the lighter EntitySnapshot).',
    fields: [
      { field: 'id',               type: 'string',                 optional: false, desc: 'Entity id.' },
      { field: 'chatId',           type: 'string',                 optional: false, desc: 'Owning chat.' },
      { field: 'name',             type: 'string',                 optional: false, desc: 'Canonical name.' },
      { field: 'entityType',       type: "EntityType",             optional: false, desc: "'character' | 'location' | 'item' | 'faction' | 'concept' | 'event'." },
      { field: 'aliases',          type: 'string[]',               optional: false, desc: 'Known aliases (matched by findByName / upsert).' },
      { field: 'description',      type: 'string',                 optional: false, desc: 'Entity description.' },
      { field: 'status',           type: 'EntityStatus',           optional: false, desc: "'active' | 'inactive' | 'deceased' | 'destroyed' | 'unknown'." },
      { field: 'facts',            type: 'string[]',               optional: false, desc: 'Up to 20 most-recent facts.' },
      { field: 'emotionalValence', type: 'Record<string, number>', optional: false, desc: 'Running emotional-valence map.' },
      { field: 'mentionCount',     type: 'number',                 optional: false, desc: 'Total mentions.' },
      { field: 'salienceAvg',      type: 'number',                 optional: false, desc: 'Average salience (orders list()).' },
      { field: 'confidence',       type: "'confirmed' | 'provisional'", optional: false, desc: 'Promotion confidence.' },
      { field: '…',                type: 'more',                   optional: true,  desc: 'Plus firstSeen*/lastSeen*, statusChangedAt, factExtraction*, salienceBreakdown, recentMentionCount, metadata, createdAt, updatedAt, userEditedAt — see the host DTO.' },
    ],
  },
  {
    name: 'MemoryEntityUpsert',
    note: 'Input to api.memories.entities.upsert(). Matches the extractor shape so a script can replay its own NER results.',
    fields: [
      { field: 'name',         type: 'string',     optional: false, desc: 'Canonical name (matched against existing names + aliases).' },
      { field: 'type',         type: 'EntityType', optional: false, desc: "'character' | 'location' | 'item' | 'faction' | 'concept' | 'event'." },
      { field: 'aliases?',     type: 'string[]',   optional: true,  desc: 'Alternate names.' },
      { field: 'confidence?',  type: 'number',     optional: true,  desc: 'Raw [0,1] extractor confidence; below the configured threshold the host drops it.' },
      { field: 'role?',        type: 'MentionRole', optional: true, desc: "'subject' | 'object' | 'present' | 'referenced' | 'absent'." },
      { field: 'provisional?', type: 'boolean',    optional: true,  desc: 'Mark as needing corroboration before promotion.' },
    ],
  },
  {
    name: 'MemoryRelation',
    note: 'A typed relation edge. Returned by api.memories.relations.*.',
    fields: [
      { field: 'id',             type: 'string',         optional: false, desc: 'Edge id.' },
      { field: 'sourceEntityId', type: 'string',         optional: false, desc: 'Source entity id.' },
      { field: 'targetEntityId', type: 'string',         optional: false, desc: 'Target entity id.' },
      { field: 'relationType',   type: 'RelationType',   optional: false, desc: "'ally' | 'enemy' | 'lover' | 'rival' | 'owns' | 'member_of' | 'located_in' | … | 'custom'." },
      { field: 'relationLabel',  type: 'string | null',  optional: false, desc: 'Free-text label (e.g. "duel pending").' },
      { field: 'strength',       type: 'number',         optional: false, desc: 'Edge strength.' },
      { field: 'sentiment',      type: 'number',         optional: false, desc: 'Edge sentiment [-1, 1].' },
      { field: 'status',         type: 'RelationStatus', optional: false, desc: "'active' | 'broken' | 'dormant' | 'former'." },
      { field: '…',              type: 'more',           optional: true,  desc: 'Plus evidenceChunkIds, edgeSalience, decayRate, contradictionFlag, supersededBy, arcIds, timestamps — see the host DTO.' },
    ],
  },
  {
    name: 'MemoryRelationUpsert',
    note: 'Input to api.memories.relations.upsert(). Uses entity NAMES — both endpoints must already exist in the graph or the edge is silently dropped.',
    fields: [
      { field: 'source',    type: 'string',       optional: false, desc: 'Source entity name (resolved to id server-side).' },
      { field: 'target',    type: 'string',       optional: false, desc: 'Target entity name.' },
      { field: 'type',      type: 'RelationType', optional: false, desc: "Relation type (e.g. 'rival', 'ally', 'custom')." },
      { field: 'label',     type: 'string',       optional: false, desc: 'Free-text label.' },
      { field: 'sentiment', type: 'number',       optional: false, desc: 'Sentiment [-1, 1].' },
    ],
  },
  {
    name: 'MemoryConsolidation',
    note: 'A narrative-arc consolidation. Returned by api.memories.consolidations.list / latestArc.',
    fields: [
      { field: 'id',          type: 'string',          optional: false, desc: 'Consolidation id.' },
      { field: 'tier',        type: 'number',          optional: false, desc: 'Arc tier (1 = scene, 2 = chapter, …).' },
      { field: 'title',       type: 'string | null',   optional: false, desc: 'Arc title, or null.' },
      { field: 'summary',     type: 'string',          optional: false, desc: 'Compressed summary text.' },
      { field: 'entityIds',   type: 'string[]',        optional: false, desc: 'Entities featured in the arc.' },
      { field: 'emotionalTags', type: 'EmotionalTag[]', optional: false, desc: 'Dominant emotional tags.' },
      { field: '…',           type: 'more',            optional: true,  desc: 'Plus sourceChunkIds, messageRange*, timeRange*, salienceAvg, tokenCount, vectorizedAt, timestamps.' },
    ],
  },
  {
    name: 'MemorySalience',
    note: 'A per-chunk salience record. Returned by api.memories.salience.list.',
    fields: [
      { field: 'chunkId',        type: 'string',          optional: false, desc: 'The scored chunk.' },
      { field: 'score',          type: 'number',          optional: false, desc: 'Salience score.' },
      { field: 'scoreSource',    type: "'heuristic' | 'sidecar'", optional: false, desc: 'How it was scored.' },
      { field: 'emotionalTags',  type: 'EmotionalTag[]',  optional: false, desc: 'Emotional tags detected.' },
      { field: 'narrativeFlags', type: 'NarrativeFlag[]', optional: false, desc: "e.g. 'first_meeting', 'death', 'confession'." },
      { field: 'statusChanges',  type: '{ entity, change, detail }[]', optional: false, desc: 'Detected entity status changes.' },
      { field: 'scoredAt',       type: 'number',          optional: false, desc: 'When scored (Unix ms). Orders list().' },
    ],
  },
  {
    name: 'Vault',
    note: 'A frozen cortex snapshot. Returned by api.memories.vaults.list / create; inside VaultWithContents.vault.',
    fields: [
      { field: 'id',             type: 'string',         optional: false, desc: 'Vault id.' },
      { field: 'name',           type: 'string',         optional: false, desc: 'Vault name.' },
      { field: 'description',    type: 'string',         optional: false, desc: 'Vault description.' },
      { field: 'sourceChatId',   type: 'string | null',  optional: false, desc: 'The chat snapshotted, or null.' },
      { field: 'sourceChatName', type: 'string | null',  optional: false, desc: 'Source chat name.' },
      { field: 'entityCount',    type: 'number',         optional: false, desc: 'Entities in the snapshot.' },
      { field: 'relationCount',  type: 'number',         optional: false, desc: 'Relations in the snapshot.' },
      { field: 'chunkCount',     type: 'number',         optional: false, desc: 'Chunks copied.' },
      { field: 'createdAt',      type: 'number',         optional: false, desc: 'Unix-ms creation timestamp.' },
    ],
  },
  {
    name: 'VaultCreate',
    note: 'Input to api.memories.vaults.create().',
    fields: [
      { field: 'chatId',       type: 'string', optional: false, desc: 'The chat to snapshot.' },
      { field: 'name',         type: 'string', optional: false, desc: 'Vault name.' },
      { field: 'description?', type: 'string', optional: true,  desc: 'Optional description.' },
    ],
  },
  {
    name: 'ChatLink',
    note: 'A vault attach or chat interlink. Returned by api.memories.links.list / attach.',
    fields: [
      { field: 'id',             type: 'string',         optional: false, desc: 'Link id.' },
      { field: 'chatId',         type: 'string',         optional: false, desc: 'The chat the link is attached to.' },
      { field: 'linkType',       type: "'vault' | 'interlink'", optional: false, desc: 'Link kind.' },
      { field: 'vaultId',        type: 'string | null',  optional: false, desc: 'Attached vault id (vault links).' },
      { field: 'targetChatId',   type: 'string | null',  optional: false, desc: 'Interlinked chat id (interlinks).' },
      { field: 'label',          type: 'string',         optional: false, desc: 'Link label.' },
      { field: 'enabled',        type: 'boolean',        optional: false, desc: 'Whether the link is active.' },
      { field: '…',              type: 'more',           optional: true,  desc: 'Plus vaultName, vaultEntityCount/RelationCount, targetChatName, targetChatExists, priority, createdAt.' },
    ],
  },
  {
    name: 'ChatLinkAttach',
    note: 'Input to api.memories.links.attach(). Provide vaultId for a vault attach, or targetChatId for an interlink.',
    fields: [
      { field: 'chatId',         type: 'string',                optional: false, desc: 'The chat to attach to.' },
      { field: 'linkType',       type: "'vault' | 'interlink'", optional: false, desc: 'Link kind.' },
      { field: 'vaultId?',       type: 'string',                optional: true,  desc: 'Vault to attach (linkType: vault).' },
      { field: 'targetChatId?',  type: 'string',                optional: true,  desc: 'Chat to interlink (linkType: interlink).' },
      { field: 'label?',         type: 'string',                optional: true,  desc: 'Optional label.' },
      { field: 'bidirectional?', type: 'boolean',               optional: true,  desc: 'Interlinks only — also create the reverse link on the target chat.' },
    ],
  },

  // ─── Images ──────────────────────────────────────────────────────────────────
  {
    name: 'ImageInfo',
    note: 'Returned by api.images.upload / uploadFromDataUrl / get. Camel-case mirror of ImageDTO from Spindle.',
    fields: [
      { field: 'id',                       type: 'string',          optional: false, desc: 'Canonical image id — the handle accepted by api.images.get / api.theme.extractColors / api.imageGen img2img / spindle.characters.setAvatar.' },
      { field: 'originalFilename',         type: 'string',          optional: false, desc: 'Original filename preserved at upload time.' },
      { field: 'mimeType',                 type: 'string',          optional: false, desc: 'Image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp).' },
      { field: 'width',                    type: 'number | null',   optional: false, desc: 'Pixel width if the host could derive it from the upload.' },
      { field: 'height',                   type: 'number | null',   optional: false, desc: 'Pixel height if the host could derive it from the upload.' },
      { field: 'hasThumbnail',             type: 'boolean',         optional: false, desc: 'Whether the host has generated a thumbnail variant for this image.' },
      { field: 'url',                      type: 'string',          optional: false, desc: 'Relative authenticated URL for this image, already sized to specificity.' },
      { field: 'specificity',              type: 'string',          optional: false, desc: "Image specificity flag — 'full' / 'sm' / 'lg'." },
      { field: 'ownerExtensionIdentifier', type: 'string | null',   optional: false, desc: 'Which extension uploaded the image — null for user-uploaded.' },
      { field: 'ownerCharacterId',         type: 'string | null',   optional: false, desc: 'Character ownership tag if set at upload time.' },
      { field: 'ownerChatId',              type: 'string | null',   optional: false, desc: 'Chat ownership tag if set at upload time.' },
      { field: 'createdAt',                type: 'number',          optional: false, desc: 'Creation timestamp (Unix ms).' },
    ],
  },
  {
    name: 'ImageUploadInput',
    note: 'Passed to api.images.upload(input).',
    fields: [
      { field: 'data',              type: 'Uint8Array', optional: false, desc: "Raw image bytes. Source via api.utils.http.* with responseType:'arraybuffer', api.utils.image.dataUrlToBytes, api.files.*, etc." },
      { field: 'filename?',         type: 'string',     optional: true,  desc: 'Optional filename to preserve when storing.' },
      { field: 'mimeType?',         type: 'string',     optional: true,  desc: 'Optional content type override. Defaults to image/png when not inferable host-side.' },
      { field: 'ownerCharacterId?', type: 'string',     optional: true,  desc: 'Optional character ownership tag for the persisted image.' },
      { field: 'ownerChatId?',      type: 'string',     optional: true,  desc: 'Optional chat ownership tag for the persisted image.' },
    ],
  },
  {
    name: 'ImageUploadFromDataUrlOptions',
    note: 'Passed to api.images.uploadFromDataUrl(dataUrl, options?). The data URL itself carries the bytes + MIME; these options only set ownership / display metadata.',
    fields: [
      { field: 'originalFilename?', type: 'string', optional: true, desc: 'Original filename to preserve on the persisted image.' },
      { field: 'ownerCharacterId?', type: 'string', optional: true, desc: 'Optional character ownership tag.' },
      { field: 'ownerChatId?',      type: 'string', optional: true, desc: 'Optional chat ownership tag.' },
    ],
  },

  // ─── Image generation ────────────────────────────────────────────────────────
  {
    name: 'ImageGenInput',
    note: 'Passed to api.imageGen.generate(input). Mirrors ImageGenRequestDTO with camel-case field names on the LumiScript surface.',
    fields: [
      { field: 'prompt',            type: 'string',                       optional: false, desc: 'Text prompt for image generation. Required.' },
      { field: 'connectionId?',     type: 'string',                       optional: true,  desc: "Connection profile to use. When omitted, uses the user's default image-gen connection (set via the Lumiverse UI). Look up via api.imageGen.listConnections()." },
      { field: 'negativePrompt?',   type: 'string',                       optional: true,  desc: 'Negative prompt — provider-dependent support.' },
      { field: 'model?',            type: 'string',                       optional: true,  desc: "Override the connection profile's model. Look up via api.imageGen.getModels(connectionId)." },
      { field: 'parameters?',       type: 'Record<string, unknown>',      optional: true,  desc: 'Provider-specific parameters (width, height, steps, cfg_scale, etc.). Validate against the provider\'s `parameters` schema from getProviders() if your script accepts user input. For img2img / inpainting providers, pass arrays of imageId strings under the image_array-typed parameter (e.g. `{ input_images: [imageId, ...] }`). Merged with the connection\'s defaultParameters host-side.' },
      { field: 'ownerCharacterId?', type: 'string',                       optional: true,  desc: 'Tag the persisted result with a character ownership marker.' },
      { field: 'ownerChatId?',      type: 'string',                       optional: true,  desc: 'Tag the persisted result with a chat ownership marker.' },
    ],
  },
  {
    name: 'ImageGenResult',
    note: 'Returned by api.imageGen.generate(input). The `imageId` is the integration seam — pass to api.images.get / api.theme.extractColors / spindle.characters.setAvatar. Use `imageDataUrl` for inline rendering (no auth needed) or `imageUrl` for push-notification image fields.',
    fields: [
      { field: 'imageDataUrl', type: 'string',  optional: false, desc: 'Generated image as a base64 data URL — directly assignable to <img src>. Available immediately regardless of host-side persistence success.' },
      { field: 'model',        type: 'string',  optional: false, desc: "Model that was actually used (may differ from input if `model` was omitted and the connection's default applied)." },
      { field: 'provider',     type: 'string',  optional: false, desc: 'Provider id that handled the generation.' },
      { field: 'imageId?',     type: 'string',  optional: true,  desc: 'Canonical image id in Lumiverse\'s image table. Pass to api.images.get, api.theme.extractColors, spindle.characters.setAvatar, etc. Present when host-side persistence succeeded (the typical case). When absent, use imageDataUrl for inline rendering.' },
      { field: 'imageUrl?',    type: 'string',  optional: true,  desc: 'Public unauthenticated URL for the persisted image. Auth-free so push-notification clients can render it without an auth header: api.ui.pushNotification(title, body, { image: result.imageUrl }) — pushNotification is positional (title, body, options?), NOT object-form.' },
    ],
  },
  {
    name: 'ImageGenProviderInfo',
    note: 'Returned by api.imageGen.getProviders(). Each provider declares its capability schema; drive dynamic parameter UIs from `capabilities.parameters`.',
    fields: [
      { field: 'id',                              type: 'string',                                       optional: false, desc: 'Provider id (e.g. "nanogpt", "openai", "stability").' },
      { field: 'name',                            type: 'string',                                       optional: false, desc: 'Human-readable provider name.' },
      { field: 'capabilities.parameters',         type: 'Record<string, ImageGenParameterSchema>',      optional: false, desc: 'Per-parameter contract — validate args before generate() to surface errors fast.' },
      { field: 'capabilities.apiKeyRequired',     type: 'boolean',                                      optional: false, desc: 'Whether the provider requires an API key on the connection profile.' },
      { field: 'capabilities.modelListStyle',     type: "'static' | 'dynamic' | 'google'",              optional: false, desc: 'How models are listed. Static providers expose them under capabilities.staticModels; dynamic providers fetch from upstream via api.imageGen.getModels(connectionId).' },
      { field: 'capabilities.staticModels?',      type: 'Array<{ id: string; label: string }>',         optional: true,  desc: "Populated when modelListStyle === 'static'." },
      { field: 'capabilities.defaultUrl',         type: 'string',                                       optional: false, desc: "Provider's default API URL — used as a placeholder when creating new connection profiles." },
    ],
  },
  {
    name: 'ImageGenConnectionInfo',
    note: "Returned by api.imageGen.listConnections() / getConnection(). API keys are NEVER exposed — only `hasApiKey: boolean` indicates presence.",
    fields: [
      { field: 'id',                type: 'string',                  optional: false, desc: 'Connection profile id.' },
      { field: 'name',              type: 'string',                  optional: false, desc: 'User-assigned connection name.' },
      { field: 'provider',          type: 'string',                  optional: false, desc: 'Provider id this connection talks to.' },
      { field: 'apiUrl',            type: 'string',                  optional: false, desc: 'API URL configured on the connection.' },
      { field: 'model',             type: 'string',                  optional: false, desc: 'Default model on the connection.' },
      { field: 'isDefault',         type: 'boolean',                 optional: false, desc: "Whether this is the user's default image-gen connection — used by generate() when connectionId is omitted." },
      { field: 'hasApiKey',         type: 'boolean',                 optional: false, desc: 'Whether the user has supplied an API key for this connection. The key itself is never exposed.' },
      { field: 'defaultParameters', type: 'Record<string, unknown>', optional: false, desc: "Per-connection default parameter values — merged with the request's `parameters` at generate() time." },
      { field: 'metadata',          type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata attached to the connection.' },
      { field: 'createdAt',         type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',         type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'ImageGenParameterSchema',
    note: 'One parameter\'s contract within an ImageGenProviderInfo.capabilities.parameters record. Use to drive dynamic parameter UIs or validate user-supplied args before calling generate().',
    fields: [
      { field: 'type',         type: "'number' | 'integer' | 'boolean' | 'string' | 'select' | 'image_array'", optional: false, desc: "Parameter primitive. `select` has a fixed enum (see options); `image_array` takes arrays of imageId strings (img2img / inpainting providers)." },
      { field: 'default?',     type: 'unknown',                                                                optional: true,  desc: 'Default value when the user omits the parameter.' },
      { field: 'min?',         type: 'number',                                                                 optional: true,  desc: 'Minimum value for numeric parameters.' },
      { field: 'max?',         type: 'number',                                                                 optional: true,  desc: 'Maximum value for numeric parameters.' },
      { field: 'step?',        type: 'number',                                                                 optional: true,  desc: 'Step granularity for numeric parameters — useful for slider UIs.' },
      { field: 'description',  type: 'string',                                                                 optional: false, desc: 'Human-readable description — surface to users in your parameter UI.' },
      { field: 'required?',    type: 'boolean',                                                                optional: true,  desc: 'Whether the parameter must be supplied (no default applies).' },
      { field: 'options?',     type: 'Array<{ id: string; label: string }>',                                   optional: true,  desc: "Enum entries for select-typed parameters." },
      { field: 'group?',       type: 'string',                                                                 optional: true,  desc: 'Optional grouping label — UI may render parameters with the same group together.' },
    ],
  },

  // ─── Theme ───────────────────────────────────────────────────────────────────
  {
    name: 'ColorRGB',
    note: 'RGB color value, 0–255 per channel. Used in ColorExtractionInfo.dominant / regions.* / average.',
    fields: [
      { field: 'r', type: 'number', optional: false, desc: 'Red channel, 0–255.' },
      { field: 'g', type: 'number', optional: false, desc: 'Green channel, 0–255.' },
      { field: 'b', type: 'number', optional: false, desc: 'Blue channel, 0–255.' },
    ],
  },
  {
    name: 'ColorHSL',
    note: 'HSL color value. Used in ColorExtractionInfo.dominantHsl + ThemePaletteConfig.accent + ThemeInfo.accent. Drop-in compatible across all three — the typical pipeline is `extractColors(imageId).then(p => applyPalette({accent: p.dominantHsl}))`.',
    fields: [
      { field: 'h', type: 'number', optional: false, desc: 'Hue, 0–360 degrees.' },
      { field: 's', type: 'number', optional: false, desc: 'Saturation, 0–100 percent.' },
      { field: 'l', type: 'number', optional: false, desc: 'Lightness, 0–100 percent.' },
    ],
  },
  {
    name: 'ColorExtractionInfo',
    note: 'Returned by api.theme.extractColors(imageId). `dominantHsl` is the ready-to-pass accent for api.theme.applyPalette({accent: ...}).',
    fields: [
      { field: 'dominant',      type: 'ColorRGB',                                                                                          optional: false, desc: 'Dominant color of the full image, in RGB.' },
      { field: 'regions',       type: '{ top: ColorRGB; center: ColorRGB; bottom: ColorRGB; left: ColorRGB; right: ColorRGB }',            optional: false, desc: 'Per-region dominant colors. Useful for asymmetric layouts (e.g. character portrait centered with background dominant on edges).' },
      { field: 'flatness',      type: '{ top: number; center: number; bottom: number; left: number; right: number; full: number }',        optional: false, desc: 'Per-region + full-image flatness score (0 = highly variegated, 1 = uniform). Use to detect "all one color" cases.' },
      { field: 'average',       type: 'ColorRGB',                                                                                          optional: false, desc: 'Arithmetic mean RGB across the full image.' },
      { field: 'isLight',       type: 'boolean',                                                                                           optional: false, desc: 'Whether the dominant color is perceived as light (luminance > 152). Useful for picking complementary foreground colors.' },
      { field: 'dominantHsl',   type: 'ColorHSL',                                                                                          optional: false, desc: 'HSL representation of dominant — drop-in for api.theme.applyPalette({accent: ...}).' },
    ],
  },
  {
    name: 'ThemeOverride',
    note: 'Passed to api.theme.apply(overrides). Two-axis: `variables` applies regardless of mode, `variablesByMode` applies per dark/light at apply time. LumiScript maintains per-script attribution — multiple scripts\' apply() calls merge with per-key last-applied-wins semantics.',
    fields: [
      { field: 'variables?',       type: 'Record<string, string>',                                                                 optional: true, desc: 'Flat CSS variable map applied regardless of the current mode. Keys are `--lumiverse-*` variable names (or any custom prefix).' },
      { field: 'variablesByMode?', type: '{ dark?: Record<string, string>; light?: Record<string, string> }',                      optional: true, desc: "Mode-keyed overrides. The host picks `dark` or `light` at apply time based on the user's current mode. Mode-specific values take precedence over flat `variables` for the same key." },
    ],
  },
  {
    name: 'ThemePaletteConfig',
    note: 'Passed to api.theme.applyPalette(palette | null). Lumiverse generates the full coherent variable set from the accent — preserves the user\'s glass / radius / font / UI-scale settings. Across LumiScript scripts: most-recent-script-wins. Pass `null` to drop this script\'s palette contribution.',
    fields: [
      { field: 'accent', type: 'ColorHSL', optional: false, desc: 'Primary accent color in HSL. Drop-in compatible with the dominantHsl returned by api.theme.extractColors.' },
    ],
  },
  {
    name: 'ThemeInfo',
    note: "Returned by api.theme.getCurrent(). Read-only snapshot of the user's current theme configuration (NOT including any extension overrides).",
    fields: [
      { field: 'id',             type: 'string',           optional: false, desc: 'Theme id (e.g. "lumiverse-purple").' },
      { field: 'name',           type: 'string',           optional: false, desc: 'Theme display name.' },
      { field: 'mode',           type: "'light' | 'dark'", optional: false, desc: 'Resolved color mode.' },
      { field: 'accent',         type: 'ColorHSL',         optional: false, desc: 'Primary accent.' },
      { field: 'enableGlass',    type: 'boolean',          optional: false, desc: 'Whether glassmorphic backdrop-filter tokens are enabled.' },
      { field: 'radiusScale',    type: 'number',           optional: false, desc: 'Border radius multiplier.' },
      { field: 'fontScale',      type: 'number',           optional: false, desc: 'Font-size multiplier.' },
      { field: 'uiScale',        type: 'number',           optional: false, desc: 'Overall UI scale multiplier.' },
      { field: 'characterAware', type: 'boolean',          optional: false, desc: "Whether the theme adapts to the active character's avatar palette automatically (host-side feature, independent of api.theme.extractColors)." },
    ],
  },
  {
    name: 'ThemeVariablesConfig',
    note: 'Passed to api.theme.generateVariables(config). Mirrors the inputs that Lumiverse\'s theme engine uses to produce the full set of ~80+ CSS variables. The result can be passed to apply({variables}) for a complete coherent override, or tweaked individually before applying.',
    fields: [
      { field: 'accent',         type: 'ColorHSL',                                                                                         optional: false, desc: 'Primary accent color in HSL.' },
      { field: 'mode',           type: "'dark' | 'light'",                                                                                 optional: false, desc: 'Resolved color mode.' },
      { field: 'enableGlass?',   type: 'boolean',                                                                                          optional: true,  desc: 'Enable glassmorphic backdrop-filter tokens. Default: true.' },
      { field: 'radiusScale?',   type: 'number',                                                                                           optional: true,  desc: 'Border radius multiplier. Default: 1.' },
      { field: 'fontScale?',     type: 'number',                                                                                           optional: true,  desc: 'Font-size multiplier. Default: 1.' },
      { field: 'uiScale?',       type: 'number',                                                                                           optional: true,  desc: 'Overall UI scale multiplier. Default: 1.' },
      { field: 'baseColors?',    type: 'Record<string, string>',                                                                           optional: true,  desc: 'Optional base colors override (advanced — typically not needed; the accent + mode produce a coherent set on their own).' },
      { field: 'statusColors?',  type: 'Record<string, string>',                                                                           optional: true,  desc: 'Optional status colors override (success / warning / error / info — advanced).' },
    ],
  },
];

const KeyTypesTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {KEY_TYPES.map(type => (
        <>
          <tr key={`hdr-${type.name}`}>
            <td colSpan={3} className="ls-ref-group-header">
              {type.name}
              {type.note && (
                <div className="ls-ref-type-note">{type.note}</div>
              )}
            </td>
          </tr>
          {type.fields.map(f => (
            <tr key={`${type.name}-${f.field}`}>
              <td>
                <Code>{f.optional && !f.field.endsWith('?') ? `${f.field}?` : f.field}</Code>
              </td>
              <td><span className="ls-ref-muted">{f.type}</span></td>
              <td><span className="ls-ref-muted">{f.desc}</span></td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── API functions ────────────────────────────────────────────────────────────

export interface FnRow { name: string; args: string; desc: string; }
export interface FnGroup { group: string; rows: FnRow[]; }

export const API_GROUPS: FnGroup[] = [
  {
    group: 'api.chat',
    rows: [
      { name: 'getMessages',       args: 'options?',              desc: 'Get messages in the current chat. Pass `{ last: N }` for the N most recent or `{ first: N }` for the N oldest (omit for the full message list). Requires chat_mutation permission.' },
      { name: 'sendMessage',       args: 'content, options?',     desc: 'Append a new message. Options: role, metadata, triggerGeneration (when true, fires the host\'s full chat-orchestration pipeline after the append — same effect as the user pressing Enter on an empty input bar), generation (per-call ChatGenerationOptions overrides — connectionId / personaId / presetId / parameters / etc., consulted only when triggerGeneration is true). Requires chat_mutation permission.' },
      { name: 'editMessage',       args: 'id, contentOrPatch',    desc: 'Edit a message by ID. Pass a string to replace the active swipe\'s content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED.' },
      { name: 'deleteMessage',     args: 'id',                    desc: 'Delete a message by ID.' },
      { name: 'getChatId',         args: '—',                     desc: 'Return the active chat ID, or null.' },
      { name: 'getMetadata',       args: 'key',                   desc: 'Get a metadata value from the current chat. Requires chats permission (note: distinct from chat_mutation — chats gates session-level fields, chat_mutation gates message content).' },
      { name: 'setMetadata',       args: 'key, value',            desc: 'Set a metadata key (read-modify-write). Requires chats permission.' },
      { name: 'inject',            args: 'id, content, options?', desc: 'Register a prompt injection. Options: mode, role, depth, ephemeral.' },
      { name: 'removeInjection',   args: 'id',                    desc: 'Remove one injection by ID.' },
      { name: 'getInjections',     args: '—',                     desc: 'List all active injections across all scripts.' },
      { name: 'clearInjections',   args: '—',                     desc: "Remove all injections from this script. Requires interceptor permission." },
      { name: 'clearAllInjections', args: '—',                   desc: 'Remove ALL injections across all scripts (cross-script wipe — use sparingly). Requires interceptor permission + allowDangerous.' },
      { name: 'registerContentProcessor', args: 'handler, options?', desc: 'Register a handler that fires on chat message origin events — `create` (user/assistant message write), `update`, `swipe_add`, `swipe_update`, auto-inserted greetings on the write side, AND on per-message display rendering (`render`). Return a patch { content?, extra? } to transform what gets stored or shown. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). `extra` is IGNORED on swipe origins (swipes share the parent message\'s extra) and on `render` (no row to mutate). Returns handle { id, remove }. Requires chat_mutation permission.' },
      { name: 'listContentProcessors', args: '—',                  desc: 'List all currently registered message content processors across all scripts.' },
      { name: 'setMessageHidden',  args: 'id, hidden',              desc: 'Mark a single message as hidden or visible. Hidden messages are excluded from vector retrieval but still included in prompt assembly. Toggle pattern: pass `true` to hide, `false` to unhide. Persists on the message — survives reloads. Requires chat_mutation permission.' },
      { name: 'setMessagesHidden', args: 'ids, hidden',             desc: 'Bulk variant of `setMessageHidden`. Max 500 IDs per call. Same hidden-flag semantics (excluded from vector retrieval, still included in prompt assembly). Requires chat_mutation permission.' },
      { name: 'isMessageHidden',   args: 'id',                      desc: 'Check whether a message is hidden. Returns false for messages that have never had the flag set (default state). Requires chat_mutation permission.' },
    ],
  },
  {
    group: 'api.llm',
    rows: [
      { name: 'generate',             args: 'messages, options?',               desc: 'Generate a text response from the LLM.' },
      { name: 'generateStream',       args: 'messages, options?',               desc: 'Streaming variant of generate. Async iterator of StreamChunk values (token / reasoning / done). Break out of for await or pass options.signal to cancel.' },
      { name: 'generateStructured',   args: 'messages, schema, options?',       desc: 'Generate and parse a structured JSON response against a Zod or JSON Schema.' },
      { name: 'generateWithTools',    args: 'messages, tools, options?, schema?', desc: 'Generate with tool schemas. Returns text or function calls for an agentic loop.' },
      { name: 'dryRun',               args: 'options?',                         desc: 'Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats.' },
    ],
  },
  {
    group: 'api.connections',
    rows: [
      { name: 'list',       args: '—',            desc: "List the user's LLM connection profiles (read-only; never includes API keys — only has_api_key). Returns Connection[]. Free tier. Pair with api.ui.components.mountSelect/mountModelCombobox for pickers." },
      { name: 'get',        args: 'connectionId', desc: 'Get a connection profile by ID, or null if not found/accessible. Returns Connection | null.' },
      { name: 'getDefault', args: '—',            desc: "Get the user's default connection (is_default, or the first available), or null." },
      { name: 'findByName', args: 'name',         desc: 'Find a connection by name (case-insensitive), or null. The id/name map to api.llm options.connectionId/connectionName.' },
    ],
  },
  {
    group: 'api.webSearch',
    rows: [
      { name: 'query',       args: 'options', desc: 'Search the user\'s configured provider (SearXNG). options: { query (required), count?, scrape? (default true) }. Returns WebSearchResponse { query, results: WebSearchResult[], documents?, context? }. With scrape (default) you also get scraped documents + a prompt-ready context block; scrape:false returns only results (titles/URLs/snippets). Rejects "Web search is disabled" if no provider configured. Requires web_search.' },
      { name: 'getSettings', args: '—',       desc: 'Read the safe web-search config (NEVER the API key — only hasApiKey). Returns WebSearchSettings { enabled, provider, apiUrl, defaultResultCount, maxResultCount, maxPagesToScrape, maxCharsPerPage, language, safeSearch, engines, hasApiKey, requestTimeoutMs }. Branch on enabled before query(). Requires web_search.' },
    ],
  },
  {
    group: 'api.users',
    rows: [
      { name: 'isVisible', args: '—', desc: 'True if the active user has the app visible in at least one session; false if every session is hidden/backgrounded or there is no open session. Returns Promise<boolean>. Free tier. Use to gate push notifications (when hidden) vs. in-app UI (when visible).' },
      { name: 'getRole',   args: '—', desc: "The active user's Lumiverse role: 'operator' | 'admin' | 'user' (internal owners report as operator). Returns Promise<UserRole>. Free tier." },
    ],
  },
  {
    group: 'api.version',
    rows: [
      { name: 'getBackend',  args: '—', desc: "The running Lumiverse backend server's semantic version string (e.g. '1.2.0'). Returns Promise<string>. Free tier. Pair with feature gating / compatibility checks." },
      { name: 'getFrontend', args: '—', desc: "The running Lumiverse frontend bundle's semantic version string. Returns Promise<string>. Free tier." },
    ],
  },
  {
    group: 'api.variables.local / .global / .character / .chat',
    rows: [
      { name: 'get',    args: 'key, defaultValue?', desc: 'Get a variable. Returns defaultValue if the key does not exist.' },
      { name: 'set',    args: 'key, value',          desc: 'Set a variable (JSON-serialized).' },
      { name: 'delete', args: 'key',                 desc: 'Delete a variable. Returns true if it existed.' },
      { name: 'has',    args: 'key',                 desc: 'Check if a variable exists.' },
      { name: 'clear',  args: '—',                   desc: 'Delete all variables in this store.' },
    ],
  },
  {
    group: 'api.json',
    rows: [
      { name: 'parse',     args: 'text',                        desc: 'Parse a JSON string. Throws on invalid JSON.' },
      { name: 'stringify', args: 'data, pretty?',               desc: 'Serialize to JSON. Pass true for formatted output.' },
      { name: 'clone',     args: 'data',                        desc: 'Deep clone a value.' },
      { name: 'get',       args: 'data, path, defaultValue?',   desc: 'Get a nested value by dot-path (e.g. "user.address.city").' },
      { name: 'set',       args: 'data, path, value',           desc: 'Set a nested value by dot-path.' },
      { name: 'merge',     args: '...objects',                  desc: 'Deep merge objects. Later arguments override earlier ones.' },
      { name: 'isValid',   args: 'text',                        desc: 'Check if a string is valid JSON.' },
      { name: 'filter',    args: 'data, predicate',             desc: 'Filter an array by predicate.' },
      { name: 'sort',      args: 'data, key, direction?',       desc: 'Sort array by key (asc or desc).' },
      { name: 'uniq',      args: 'data',                        desc: 'Deduplicate array.' },
      { name: 'flatten',   args: 'data',                        desc: 'Flatten a nested array.' },
      { name: 'query',     args: 'data, queryString',             desc: 'Run a jsonquery pipeline (jq-like). See jsonquerylang.org.' },
    ],
  },
  {
    group: 'api.utils',
    rows: [
      { name: 'uuid',                   args: '—',                             desc: 'Generate a UUID v4 string. Cryptographically random (uses crypto.randomUUID).' },
      { name: 'shortId',                args: '—',                             desc: 'Generate a short random ID (8 chars, URL-safe). Cryptographically random (derived from crypto.randomUUID).' },
      { name: 'wait',                   args: 'ms',                            desc: 'Pause execution for ms milliseconds.' },
      { name: 'random.int',             args: 'min, max',                      desc: 'Random integer in [min, max] inclusive. **NOT cryptographically secure** — uses Math.random for gameplay/UI use cases. For tokens or security-sensitive identifiers use api.utils.uuid / shortId or globalThis.crypto.getRandomValues.' },
      { name: 'random.float',           args: 'min, max',                      desc: 'Random float in [min, max). **NOT cryptographically secure** (Math.random — see random.int).' },
      { name: 'random.pick',            args: 'array',                         desc: 'Pick a random element from an array. **NOT cryptographically secure** (Math.random — see random.int).' },
      { name: 'random.bool',            args: '—',                             desc: 'Random true/false. **NOT cryptographically secure** (Math.random — see random.int).' },
      { name: 'random.chance',          args: 'probability',                   desc: 'Returns true with probability p (0–1). **NOT cryptographically secure** (Math.random — see random.int).' },
      { name: 'random.shuffle',         args: 'array',                         desc: 'Return a shuffled copy of the array. **NOT cryptographically secure** (Math.random — see random.int).' },
      { name: 'http.get',               args: 'url, options?',                 desc: 'GET request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.post',              args: 'url, body, options?',           desc: 'POST request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.put',               args: 'url, body, options?',           desc: 'PUT request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.delete',            args: 'url, options?',                 desc: 'DELETE request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.request',           args: 'url, options',                  desc: 'Custom HTTP request via cors_proxy. Requires allowDangerous.' },
      { name: 'template.render',        args: 'template, data?, options?',     desc: 'Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>.' },
      { name: 'template.compile',       args: 'template',                      desc: 'Pre-compile a Handlebars template for sync reuse. No macro resolution.' },
      { name: 'template.registerHelper', args: 'name, fn',                    desc: 'Register a custom Handlebars helper scoped to this script.' },
      { name: 'macros.resolve',         args: 'template, options?',            desc: 'Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>.' },
      { name: 'image.detectMime',       args: 'bytes',                          desc: 'Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType.' },
      { name: 'image.dataUrlToBytes',   args: 'url',                            desc: 'Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs.' },
      { name: 'image.bytesToDataUrl',   args: 'bytes, mimeType',                desc: 'Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar.' },
    ],
  },
  {
    group: 'api.ui',
    rows: [
      { name: 'toast',     args: 'message, type?, options?',         desc: 'Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration.' },
      { name: 'prompt',    args: 'message, defaultValue?, options?', desc: 'Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline.' },
      { name: 'confirm',   args: 'message, title?, options?',        desc: 'Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel.' },
      { name: 'showModal', args: 'items, options',                   desc: 'Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent.' },
      { name: 'showAdvancedModal', args: 'options',                  desc: 'Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation.' },
      { name: 'showContextMenu', args: 'options',                    desc: "Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier." },
      { name: 'registerInputBarAction', args: 'options',             desc: 'Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier.' },
      { name: 'createFloatWidget', args: 'options',                  desc: 'Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels.' },
      { name: 'mountApp', args: 'options?',                          desc: "Mount a route-persistent, full-bleed document.body portal — full-screen overlays or persistent chrome beyond dock / drawer / float. options: { className?, position? ('start'|'end'|'app-overlay') }. Body DOM is fully script-owned via handle.root (DOMHandle); render + wire it via api.ui.dom.*. Returns MountedAppHandle { mountId, root, setVisible, destroy }. Requires app_manipulation." },
      { name: 'registerDrawerTab', args: 'options',                  desc: 'Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier.' },
      { name: 'editText',  args: 'title?, value?, options?',         desc: 'Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder.' },
      { name: 'pushNotification', args: 'title, body, options?',   desc: 'Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification.' },
      { name: 'getPushStatus', args: '—',                          desc: 'Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification.' },
      { name: 'getDrawerTabs', args: '—',                          desc: 'List discoverable drawer tabs (built-in + extension-contributed) visible to the user. Returns UIDrawerTab[] { id, shortName, tabName, tabDescription, keywords, source ("builtin"|"extension"), extensionId? }. Pair with openDrawerTab(id) to build a custom jump-to picker. Free-tier.' },
      { name: 'getSettingsTabs', args: '—',                        desc: 'List discoverable settings tabs visible to the user (role-restricted tabs are filtered out). Returns UISettingsTab[] { id, shortName, tabName, tabDescription, keywords, role? }. Free-tier.' },
      { name: 'openDrawerTab', args: 'tabId',                      desc: 'Open the drawer to a specific tab id (built-in or extension-contributed — ids from getDrawerTabs). Resolves once the host dispatches the navigation; the frontend applies it asynchronously. Free-tier.' },
      { name: 'closeDrawer', args: '—',                            desc: 'Close the drawer if it is currently open. Free-tier.' },
      { name: 'openSettings', args: 'viewId?',                     desc: "Open the settings modal to a tab id (e.g. 'connections', 'display' — ids from getSettingsTabs). Omit viewId to land on 'display'. Free-tier." },
      { name: 'closeSettings', args: '—',                          desc: 'Close the settings modal if it is currently open. Free-tier.' },
      { name: 'openCommandPalette', args: '—',                     desc: 'Open the command palette overlay (the Ctrl+K surface). Free-tier.' },
      { name: 'closeCommandPalette', args: '—',                    desc: 'Close the command palette overlay if it is currently open. Free-tier.' },
      { name: 'pickFile', args: 'options?',                        desc: "Open the browser's native file picker and return the selected file(s). options: { accept? (string[] of extensions/MIME types), multiple? (default false), maxSizeBytes? }. Returns Promise<PickedFile[]> where PickedFile is { name, mimeType, sizeBytes, bytes: Uint8Array }. Resolves [] if the user cancels; REJECTS if a file exceeds maxSizeBytes (mirrors the host throw). The native dialog is the user-action gate, so free-tier. Feed bytes into api.images.upload / api.db / api.files; decode text via new TextDecoder().decode(file.bytes)." },
    ],
  },
  {
    group: 'api.ui.events',
    rows: [
      { name: 'getKeyboardState', args: '—', desc: 'The current virtual-keyboard snapshot. Returns Promise<UIKeyboardState> { visible, insetBottom, viewportWidth, viewportHeight }. Free-tier. Resolves from a backend cache the frontend keeps fresh.' },
      { name: 'onKeyboardChange', args: 'handler', desc: 'Subscribe to keyboard visibility / safe-area changes. handler receives UIKeyboardState. Returns an unsubscribe fn. Free-tier. The subscription keeps the script alive while registered and is torn down on disable. Primary use: mobile-safe widget positioning (reposition on insetBottom).' },
      { name: 'getDrawerState',   args: '—', desc: 'The current side-drawer snapshot. Returns Promise<UIDrawerState> { open, tabId }. Free-tier.' },
      { name: 'onDrawerChange',   args: 'handler', desc: 'Subscribe to drawer open/close + tab changes. handler receives UIDrawerState. Returns an unsubscribe fn. Free-tier.' },
      { name: 'getSettingsState', args: '—', desc: 'The current settings-modal snapshot. Returns Promise<UISettingsState> { open, view }. Free-tier.' },
      { name: 'onSettingsChange', args: 'handler', desc: 'Subscribe to settings open/close + active-view changes. handler receives UISettingsState. Returns an unsubscribe fn. Free-tier.' },
    ],
  },
  {
    group: 'api.ui.dom',
    rows: [
      { name: 'inject',          args: 'target, html, options?',     desc: 'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options object (single arg — NOT `inject(target, html, position, options)`): `position` (default "beforeend"), `id` (stable ID for idempotent injection — re-firing with the same id triggers in-place innerHTML update via dom_update IPC instead of a fresh insert). **Note**: when the injected HTML contains an inline `<style>` block (the host-CSS-targeting pattern — see api.ui.dom NAMESPACE_CONCEPTS), do NOT use `id`-dedup. The dom_update path replaces wrapper innerHTML, and browsers don\'t reliably reactivate `<style>` blocks added that way — second fire silently loses every CSS rule. Pattern for inline-style scripts that re-fire: drop `id`, call `api.ui.dom.cleanup()` at body start instead. Requires app_manipulation.' },
      { name: 'injectAtMessage', args: 'messageId, html, options?', desc: 'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.' },
      { name: 'addStyle',         args: 'css, opts?',               desc: 'Add a `<style>` element scoped to this script via `@scope ([data-ls-script="<id>"])`. Returns `{ remove() }`. Use `--lumiverse-*` CSS variables for theming. Pass `{ id: \'foo\' }` for idempotent re-injection — calling `addStyle` again with the same id removes the prior stylesheet first (useful for dev-iteration where the CSS source changes between fires). Without an id, every call adds a fresh stylesheet. **Scope limitation**: rules ONLY match descendants of script-injected DOM. Cannot reach host elements (chat input bar, message bubbles, toolbar buttons, the body, etc.) because `@scope` excludes everything outside the script\'s wrappers. To style host UI, include an inline `<style>` block inside an `inject()` HTML payload instead — CSS rules in a `<style>` element are document-global regardless of where the tag sits. **Top-level at-rules** (`@font-face`, `@keyframes`) are likewise dropped here — they\'re invalid nested inside `@scope`, so the browser silently discards them; deliver those via an inline `<style>` block too, never `addStyle`. See api.ui.dom NAMESPACE_CONCEPTS for the full pattern. Requires app_manipulation permission.' },
      { name: 'delegate',         args: 'selector, event, handler, options?', desc: 'Attach an event-delegated listener at a known root, matching descendants by CSS selector. Lets scripts react to clicks/changes on DOM the script didn\'t inject — e.g. interactive elements emitted by the LLM in chat-message content. Single host-side capture listener per (root, event) tuple regardless of how many scripts subscribe; selector matching happens frontend-side via event.target.closest(). Default scope (options.root: "chat") restricts matching to chat content; "document" matches anywhere on the page. Returns an unsubscribe function. Requires app_manipulation.' },
      { name: 'cleanup',          args: '—',                        desc: 'Remove all DOM injections, styles, and delegations created by THIS script (other scripts\' DOM is untouched). Auto-fired on script disable / delete — manual call is for re-fire scenarios where you want to wipe and rebuild from scratch. **Canonical use**: at the top of a script body that combines re-firing triggers (`ls:startup` + `CHAT_SWITCHED` + manual Run) with inline `<style>` blocks in injected HTML. Calling `cleanup()` then `inject(...)` guarantees a fresh-inject path on every fire — which parses `<style>` correctly — instead of dom_update-via-id-dedup which doesn\'t reactivate inline styles. Requires app_manipulation.' },
    ],
  },
  {
    group: 'api.ui.components',
    rows: [
      { name: 'mountBadge',     args: 'target, options?', desc: 'Mount a themed host badge into a script-owned slot. `target` is a DOMHandle (inject an empty container via api.ui.dom.inject first). Options: text, color ("neutral"|"primary"|"success"|"warning"|"danger"|"info"), size ("sm"|"md"|"pill"). Returns MountedComponentHandle { id, update(patch), destroy() } synchronously. update/destroy are fire-and-forget. Requires app_manipulation.' },
      { name: 'mountSpinner',   args: 'target, options?', desc: 'Mount a themed loading spinner into a script-owned slot (DOMHandle target). Options: size (px, default 16), fast (boolean). Returns MountedComponentHandle. Requires app_manipulation.' },
      { name: 'mountSwitch',    args: 'target, options?', desc: 'Mount a themed toggle switch into a script-owned slot (DOMHandle target). Options: checked, onChange(checked:boolean), size ("sm"|"md"), disabled, ariaLabel. Returns MountedValueComponentHandle { id, update, destroy, getValue(): Promise<boolean> } — getValue() is ASYNC (a frontend round-trip), unlike the host\'s sync getValue. onChange fires into your script on every toggle. Requires app_manipulation.' },
      { name: 'mountTextInput', args: 'target, options?', desc: 'Mount a themed single-line text input into a script-owned slot (DOMHandle target). Options: value, onChange(value:string), placeholder, autoFocus, disabled, className, ariaLabel. Returns MountedValueComponentHandle { ..., getValue(): Promise<string> } (async getValue). onChange fires on every user change. Requires app_manipulation.' },
      { name: 'mountTextArea',  args: 'target, options?', desc: 'Mount a themed multi-line text editor (DOMHandle target). Options: value, onChange(value:string), placeholder, rows (default 4), disabled, className, ariaLabel. Returns MountedValueComponentHandle (getValue(): Promise<string>). Requires app_manipulation.' },
      { name: 'mountNumericInput', args: 'target, options?', desc: 'Mount a themed validated number input (DOMHandle target). Options: value (number|null), onChange(value:number|null), allowEmpty, integer, min, max, step, placeholder, disabled. Returns MountedValueComponentHandle (getValue(): Promise<number|null>). Requires app_manipulation.' },
      { name: 'mountNumberStepper', args: 'target, options?', desc: 'Mount a themed number input with +/- buttons (DOMHandle target). Like mountNumericInput minus integer; step defaults to 1. Returns MountedValueComponentHandle (getValue(): Promise<number|null>). Requires app_manipulation.' },
      { name: 'mountCheckbox',  args: 'target, options?', desc: 'Mount a themed checkbox (DOMHandle target). Options: checked, onChange(checked:boolean), label, hint, disabled. Returns MountedValueComponentHandle (getValue(): Promise<boolean>). Requires app_manipulation.' },
      { name: 'mountRangeSlider', args: 'target, options', desc: 'Mount a themed touch-friendly range slider (DOMHandle target). options is REQUIRED (min + max are mandatory). Options: min (required), max (required), value, step, integer, onCommit(v:number) [once per gesture], onDragValue(v:number|null) [live], label, hint, format ({decimals,prefix,suffix}), disabled, className. Returns MountedValueComponentHandle (getValue(): Promise<number>). Requires app_manipulation.' },
      { name: 'mountSelect',    args: 'target, options?', desc: 'Mount a themed searchable single-select dropdown (DOMHandle target). Options: options (SpindleSelectOption[]), value, onChange(value:string), placeholder, searchPlaceholder, clearable, clearLabel, leading cells, grouping, portal/align/maxHeight/minWidth, disabled, etc. Returns MountedValueComponentHandle (getValue(): Promise<string>). Requires app_manipulation.' },
      { name: 'mountMultiSelect', args: 'target, options?', desc: 'Mount a themed searchable multi-select (DOMHandle target). Like mountSelect but value/onChange use string[]. Returns MountedValueComponentHandle (getValue(): Promise<string[]>). Requires app_manipulation.' },
      { name: 'mountFolderDropdown', args: 'target, options?', desc: 'Mount a themed folder picker with inline create-folder (DOMHandle target). Options: folders (string[]), value, onChange(folder:string), onCreateFolder(name:string), placeholder, disabled. Returns MountedValueComponentHandle (getValue(): Promise<string>). Requires app_manipulation.' },
      { name: 'mountModelCombobox', args: 'target, options?', desc: 'Mount the themed connection-aware model picker (DOMHandle target). Connection-bound mode: pass connection {kind:"llm"|"image"|"tts"|"embedding", id?} and the host manages the model list. Manual mode: pass models[] + onRefresh. Other options: value, onChange(model:string), appearance, placeholder, etc. Returns MountedValueComponentHandle (getValue(): Promise<string>). NOTE: the handle\'s refresh() method is a deferred follow-up; connection-bound mode auto-manages the list without it. Requires app_manipulation.' },
      { name: 'mountPagination', args: 'target, options', desc: 'Mount themed page navigation (DOMHandle target). options is REQUIRED (currentPage, totalPages, onPageChange(page:number) are mandatory). Optional: perPage, perPageOptions, onPerPageChange(n:number), totalItems. Fully controlled — call handle.update({currentPage}) after navigation. Returns MountedComponentHandle (no getValue). Requires app_manipulation.' },
      { name: 'mountCloseButton', args: 'target, options?', desc: 'Mount a themed close (X) button (DOMHandle target). Options: onClick(), size ("sm"|"md"), variant ("subtle"|"solid"), position ("static"|"absolute"), iconSize. Returns MountedComponentHandle (no getValue). Requires app_manipulation.' },
      { name: 'mountCollapsibleSection', args: 'target, options', desc: 'Mount a collapsible section (DOMHandle target). options is REQUIRED (title is mandatory). Options: title (required), iconSvg, iconUrl, badge, defaultExpanded (default true), onToggle(expanded:boolean). The host owns the header chrome; the returned MountedCollapsibleSectionHandle adds: body (a DOMHandle you inject/update content into), isExpanded(): Promise<boolean>, expand(), collapse(), toggle(). Requires app_manipulation.' },
    ],
  },
  {
    group: 'api.files — user* (per-user persistent)',
    rows: [
      { name: 'userRead',   args: 'path',        desc: 'Read a file as UTF-8 text.' },
      { name: 'userWrite',  args: 'path, data',  desc: 'Write UTF-8 text (creates dirs as needed).' },
      { name: 'userDelete', args: 'path',        desc: 'Delete a file.' },
      { name: 'userExists', args: 'path',        desc: 'Check if a path exists.' },
      { name: 'userList',   args: 'prefix?',     desc: 'List files under a prefix.' },
      { name: 'userMkdir',  args: 'path',        desc: 'Create a directory.' },
    ],
  },
  {
    group: 'api.files — shared* (extension-wide persistent)',
    rows: [
      { name: 'sharedRead',   args: 'path',             desc: 'Read a file as UTF-8 text.' },
      { name: 'sharedWrite',  args: 'path, data',       desc: 'Write UTF-8 text (creates dirs as needed).' },
      { name: 'sharedDelete', args: 'path',             desc: 'Delete a file.' },
      { name: 'sharedExists', args: 'path',             desc: 'Check if a path exists.' },
      { name: 'sharedList',   args: 'prefix?',          desc: 'List files under a prefix.' },
      { name: 'sharedStat',   args: 'path',             desc: 'Get file metadata (size, modifiedAt, isFile, isDirectory).' },
      { name: 'sharedMkdir',  args: 'path',             desc: 'Create a directory.' },
      { name: 'sharedMove',   args: 'from, to',         desc: 'Move or rename a file.' },
    ],
  },
  {
    group: 'api.files — temp* (TTL-bound, requires ephemeral_storage)',
    rows: [
      { name: 'tempRead',         args: 'path',               desc: 'Read a file as UTF-8 text.' },
      { name: 'tempWrite',        args: 'path, data, options?', desc: 'Write UTF-8 text. Options: { ttlMs?, reservationId? } — ttlMs sets expiry; reservationId charges the write against a tempRequestBlock reservation.' },
      { name: 'tempReadBinary',   args: 'path',               desc: 'Read a file as raw bytes. Returns Promise<Uint8Array>. Pair with tempWriteBinary for caching images / PDFs / other binary blobs within quota.' },
      { name: 'tempWriteBinary',  args: 'path, data, options?', desc: 'Write raw bytes (Uint8Array). Options: { ttlMs?, reservationId? }, same as tempWrite. Bytes cross the IPC intact (no base64).' },
      { name: 'tempDelete',       args: 'path',               desc: 'Delete a file.' },
      { name: 'tempList',         args: 'prefix?',            desc: 'List files under a prefix.' },
      { name: 'tempStat',         args: 'path',               desc: 'Get file metadata (sizeBytes, createdAt, expiresAt?).' },
      { name: 'tempClearExpired', args: '—',                  desc: 'Remove all expired files. Returns count removed.' },
      { name: 'tempGetPoolStatus', args: '—',                 desc: 'Read the ephemeral-storage quota snapshot. Returns TempPoolStatus — global + this-extension max/used/reserved/available bytes plus fileCount / fileCountMax. Check available before a large write.' },
      { name: 'tempRequestBlock', args: 'sizeBytes, options?', desc: 'Reserve sizeBytes of quota up front (so a large write can\'t fail partway). Options: { ttlMs?, reason? }. Returns TempReservation { reservationId, sizeBytes, expiresAt } — pass reservationId to tempWrite/tempWriteBinary options, or tempReleaseBlock to free it.' },
      { name: 'tempReleaseBlock', args: 'reservationId',      desc: 'Release a reservation from tempRequestBlock you did not use.' },
    ],
  },
  {
    group: 'api.characters',
    rows: [
      { name: 'list',      args: 'options?',        desc: 'List characters (paginated). Returns { data, total }.' },
      { name: 'get',       args: 'id',              desc: 'Get a character by ID. Returns null if not found.' },
      { name: 'getByName', args: 'name',            desc: 'Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match.' },
      { name: 'create',    args: 'input',           desc: 'Create a new character.' },
      { name: 'setAvatar', args: 'id, avatar',      desc: 'Replace a character\'s avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling.' },
      { name: 'update',    args: 'id, input',       desc: 'Update a character.' },
      { name: 'delete',    args: 'id',              desc: 'Delete a character. Returns true if deleted.' },
    ],
  },
  {
    group: 'api.chats',
    rows: [
      { name: 'list',        args: 'options?',           desc: 'List chat sessions (paginated). Options: characterId, limit, offset.' },
      { name: 'get',         args: 'id',                 desc: 'Get a chat session by ID.' },
      { name: 'getActive',   args: '—',                  desc: 'Get the currently active chat session.' },
      { name: 'update',      args: 'id, input',          desc: 'Update a chat session name or metadata.' },
      { name: 'delete',      args: 'id',                 desc: 'Delete a chat session and all its messages.' },
      { name: 'getMemories', args: 'chatId?, options?',  desc: 'Retrieve long-term memory chunks via vector search. Falls back to active chat.' },
    ],
  },
  {
    group: 'api.worldInfo',
    rows: [
      { name: 'list',                args: 'options?',          desc: 'List world books (paginated).' },
      { name: 'get',                 args: 'ref',               desc: 'Get a world book by ID or name.' },
      { name: 'create',              args: 'input',             desc: 'Create a world book.' },
      { name: 'update',              args: 'ref, input',        desc: 'Update a world book by ID or name.' },
      { name: 'delete',              args: 'ref',               desc: 'Delete a world book and all its entries.' },
      { name: 'entries.list',        args: 'ref, options?',     desc: 'List entries in a world book.' },
      { name: 'entries.get',         args: 'entryId',           desc: 'Get a single entry by ID.' },
      { name: 'entries.create',      args: 'ref, input',        desc: 'Create a new entry in a world book.' },
      { name: 'entries.update',      args: 'entryId, input',    desc: 'Update an entry by ID.' },
      { name: 'entries.delete',      args: 'entryId',           desc: 'Delete an entry by ID.' },
      { name: 'entries.listByAutomationIdPrefix', args: 'prefix', desc: 'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).' },
      { name: 'getCapturedActive',   args: 'chatId?',           desc: 'Get all entries that would activate for the current chat (full pipeline).' },
      { name: 'registerInterceptor', args: 'handler, options?', desc: 'Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation.' },
      { name: 'listInterceptors',    args: '—',                 desc: 'Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[].' },
    ],
  },
  {
    group: 'api.databanks',
    rows: [
      { name: 'list',                       args: 'options?',                  desc: 'List databanks (paginated). Options: limit, offset, scope, scopeId. Returns { data: DatabankInfo[], total }. Requires databanks permission.' },
      { name: 'get',                        args: 'databankId',                desc: 'Get a databank by ID. Returns null if not found. Requires databanks permission.' },
      { name: 'findByName',                 args: 'name, scope?',              desc: 'Find the first databank whose display name exactly matches (case-sensitive) within an optional scope. Convenience over list(). Returns null if no match. Requires databanks permission.' },
      { name: 'create',                     args: 'input',                     desc: 'Create a new databank. `input.scope` must be one of `\'global\' | \'character\' | \'chat\'` (DatabankScope) — `\'script\'` is NOT a valid scope. `scopeId` is REQUIRED for `\'character\'` and `\'chat\'` scopes; omit for `\'global\'`. Requires databanks permission.' },
      { name: 'update',                     args: 'databankId, input',         desc: 'Update a databank (name / description / enabled). Scope cannot be changed after creation. Requires databanks permission.' },
      { name: 'delete',                     args: 'databankId',                desc: 'Delete a databank and all its documents. Returns true if deleted. Requires databanks permission.' },
      { name: 'documents.list',             args: 'databankId, options?',      desc: 'List documents inside a databank (paginated). Returns { data: DatabankDocumentInfo[], total }. Requires databanks permission.' },
      { name: 'documents.get',              args: 'documentId',                desc: 'Get a document by ID. Returns null if not found. Requires databanks permission.' },
      { name: 'documents.findByName',       args: 'databankId, name',          desc: 'Find the first document whose display name exactly matches inside a databank. Returns null if no match. Requires databanks permission.' },
      { name: 'documents.create',           args: 'databankId, input',         desc: 'Upload a document. **Required input fields**: `data` (`string | Uint8Array` — NOT `content`) and `filename` (string with extension, e.g. `\'notes.md\'`). **Optional**: `mimeType`, `name` (display override). Returns immediately with `status: \'pending\'` — ingestion (chunking + vectorisation) runs async. Use `waitUntilReady()` or poll `get()` to await completion. Max size 10 MB; supported extensions in DatabankDocumentCreateInput. Requires databanks permission.' },
      { name: 'documents.update',           args: 'documentId, input',         desc: 'Update document display name (URL slug regenerates). Requires databanks permission.' },
      { name: 'documents.delete',           args: 'documentId',                desc: 'Delete a document. Returns true if deleted. Requires databanks permission.' },
      { name: 'documents.getContent',       args: 'documentId',                desc: 'Read the document\'s ingested text content. Returns `{ content: string }` on success, or `null` if the document does not exist OR has not finished processing — check `status === \'ready\'` via `get()` first, or call `waitUntilReady()` to block. Requires databanks permission.' },
      { name: 'documents.reprocess',        args: 'documentId',                desc: 'Reset a document to `status: \'pending\'`, drop its vectors, and re-queue for full reingestion. Useful after upstream content changes or when ingestion errored. Requires databanks permission.' },
      { name: 'documents.waitUntilReady',   args: 'documentId, options?',      desc: 'Poll until the document reaches `status: \'ready\'`. Throws on error/timeout/deletion. Default 60s timeout, 500ms poll interval — override via DatabankWaitUntilReadyOptions. Use after `create()` or `reprocess()` to await ingestion. Requires databanks permission.' },
    ],
  },
  {
    group: 'api.memories.cortex',
    rows: [
      { name: 'getConfig',             args: '—',               desc: 'Get the Memory Cortex configuration (MemoryCortexConfig — permissive; advanced/host-added fields pass through). Requires memories permission.' },
      { name: 'putConfig',             args: 'patch',           desc: 'Patch the Memory Cortex configuration (deep merge; unspecified fields untouched). Returns the updated config. Requires memories permission.' },
      { name: 'query',                 args: 'query',           desc: 'Fused-score retrieval (semantic + salience + recency + reinforcement + emotional + entity). query: CortexQuery { chatId (required), queryText (required), entityFilter?, timeRange?, emotionalContext?, generationType?, topK?, includeConsolidations?, includeRelationships?, excludeMessageIds? }. Returns CortexResult { memories, entityContext, activeRelationships, arcContext, stats }. Server-cached ~5 min per chat + query shape. Requires memories permission.' },
      { name: 'queryLinked',           args: 'chatId, options?', desc: 'Resolve every attached vault + interlink target in parallel. options: { queryText? } — pass queryText to rank by relevance. Returns LinkedCortexResult { vaults, interlinks }. Requires memories permission.' },
      { name: 'getCached',             args: 'chatId',          desc: 'Read the warm cortex cache without re-running retrieval. Returns CortexResult or null (no/expired cache). Requires memories permission.' },
      { name: 'getCachedLinked',       args: 'chatId',          desc: 'Read the cached linked-cortex result. Returns LinkedCortexResult or null. Requires memories permission.' },
      { name: 'invalidateCache',       args: 'chatId',          desc: 'Drop the warm cortex cache for a chat. Requires memories permission.' },
      { name: 'invalidateLinkedCache', args: 'chatId',          desc: 'Drop the warm linked-cortex cache for a chat. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.entities',
    rows: [
      { name: 'list',                   args: 'chatId, options?', desc: 'List entities for a chat. options: { activeOnly? (default true), limit? }. Ordered by salience. Returns MemoryEntity[]. Requires memories permission.' },
      { name: 'get',                    args: 'entityId',         desc: 'Get an entity by id, or null if not found / not owned. Requires memories permission.' },
      { name: 'findByName',             args: 'chatId, name',     desc: 'Find an entity by canonical name OR known alias, or null. Requires memories permission.' },
      { name: 'upsert',                 args: 'chatId, entity, options?', desc: 'Smart-merge upsert against canonical name + aliases. entity: MemoryEntityUpsert { name, type ("character"|"location"|"item"|"faction"|"concept"|"event"), aliases?, confidence?, role?, provisional? }. options: { chunkId?, createdAt? } attribute the mention. Returns the merged MemoryEntity. Requires memories permission.' },
      { name: 'updateStatus',           args: 'entityId, patch',  desc: "Update status. patch: { status ('active'|'inactive'|'deceased'|'destroyed'|'unknown'), statusChangedAt? }. Returns MemoryEntity. Requires memories permission." },
      { name: 'addFacts',               args: 'entityId, facts',  desc: 'Append facts (string[]); deduplicated, keeps the most recent 20. Returns MemoryEntity. Requires memories permission.' },
      { name: 'getFacts',               args: 'entityId',         desc: 'Read an entity\'s facts (string[]; tagged branch facts stripped). Requires memories permission.' },
      { name: 'updateEmotionalValence', args: 'entityId, valence', desc: 'Replace the running emotional-valence map (Record<string, number>, e.g. { betrayal: 0.6, grief: 0.4 }). Returns MemoryEntity. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.relations',
    rows: [
      { name: 'list',        args: 'chatId',                  desc: 'Active relation edges for a chat (excludes superseded / merged). Returns MemoryRelation[]. Requires memories permission.' },
      { name: 'listAll',     args: 'chatId',                  desc: 'Every relation edge including superseded / merged — for diagnostics. Requires memories permission.' },
      { name: 'forEntity',   args: 'chatId, entityId',        desc: 'Active edges incident to one entity. Requires memories permission.' },
      { name: 'forEntities', args: 'chatId, entityIds, options?', desc: 'Active edges across a set of entity ids. options: { limit? }. Requires memories permission.' },
      { name: 'upsert',      args: 'chatId, relation, options?', desc: 'Upsert a relation by entity NAMES (not ids — the host resolves them). relation: MemoryRelationUpsert { source, target, type (RelationType), label, sentiment }. BOTH endpoints must already exist in the graph (call entities.upsert first) — returns the row or null if silently dropped. options: { chunkId? } attributes evidence. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.consolidations',
    rows: [
      { name: 'list',      args: 'chatId, options?', desc: 'List narrative-arc consolidations (compressed summaries). options: { tier? } (1 = scene, 2 = chapter, …). Ordered most-recent first. Returns MemoryConsolidation[]. Requires memories permission.' },
      { name: 'latestArc', args: 'chatId',           desc: 'The most recent arc across all tiers, or null. Requires memories permission.' },
      { name: 'run',       args: 'chatId',           desc: 'Trigger a background EXTRACTIVE consolidation pass (heuristic only — no sidecar LLM). Fire-and-forget: returns immediately; new arcs surface via list() once the job completes. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.salience',
    rows: [
      { name: 'list', args: 'chatId, options?', desc: 'Per-chunk salience records, ordered by scoredAt desc. options: { limit? (max 500/page), offset? }. Returns MemorySalience[] { chunkId, score, scoreSource, emotionalTags, narrativeFlags, statusChanges, hasDialogue/Action/InternalThought, wordCount, scoredAt }. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.vaults',
    rows: [
      { name: 'list',      args: '—',          desc: 'All vaults owned by the active user (Vault[]). Requires memories permission.' },
      { name: 'get',       args: 'vaultId',    desc: 'A vault with its entities + relations (VaultWithContents), or null if not found / not owned. Requires memories permission.' },
      { name: 'getChunks', args: 'vaultId',    desc: 'The chunk snapshot copied into the vault at creation (VaultChunk[]). Requires memories permission.' },
      { name: 'create',    args: 'input',      desc: 'Snapshot a chat into a new vault. input: VaultCreate { chatId, name, description? }. Entities + relations copy synchronously; LanceDB chunks copy in the background (queryable structural-only until done). Returns Vault. Requires memories permission.' },
      { name: 'rename',    args: 'vaultId, name', desc: 'Rename a vault. Returns true if renamed. Requires memories permission.' },
      { name: 'delete',    args: 'vaultId',    desc: 'Delete a vault + its chunks + attached links. Returns true if deleted. Requires memories permission.' },
      { name: 'reindex',   args: 'vaultId',    desc: 'Re-run the LanceDB chunk copy from the source chat (e.g. after an embedding-model swap). Returns VaultReindexResult { mode, chunkCount }. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.links',
    rows: [
      { name: 'list',   args: 'chatId',                  desc: 'All links attached to a chat — vault attaches + interlinks (ChatLink[]). Requires memories permission.' },
      { name: 'attach', args: 'input',                   desc: "Attach a vault as read-only knowledge, or interlink two chats. input: ChatLinkAttach { chatId, linkType ('vault'|'interlink'), vaultId? (for vault), targetChatId? (for interlink), label?, bidirectional? (interlinks — also creates the reverse link) }. Returns the created ChatLink(s). Requires memories permission." },
      { name: 'remove', args: 'chatId, linkId',          desc: 'Remove a link. Returns true if removed. Requires memories permission.' },
      { name: 'toggle', args: 'chatId, linkId, enabled', desc: 'Enable / disable a link without removing it. Returns true if toggled. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.chatMemory',
    rows: [
      { name: 'listChunks', args: 'chatId',           desc: 'All vectorized chunks for a chat, oldest first (ChatChunk[]). The raw index behind the {{memories}} macro. Requires memories permission.' },
      { name: 'get',        args: 'chatId, options?', desc: 'Top-K hybrid (vector + BM25) retrieval. options: { topK? }. Returns ChatMemoryResult { chunks, formatted, count, enabled, queryPreview, settingsSource, chunksAvailable, chunksPending } — same payload as the {{memories}} macro (equivalent to api.chats.getMemories but under the memories permission). Requires memories permission.' },
      { name: 'warm',       args: 'chatId, options?', desc: 'Rebuild stale chunks + queue pending vectorizations. options: { force? }. Returns ChatMemoryWarmupResult { status, reason?, rebuilt?, vectorizationsQueued? }. No-op (status:\'skipped\') when chat vectorization is disabled. Requires memories permission.' },
      { name: 'invalidate', args: 'chatId',           desc: 'Drop the cached {{memories}} retrieval result for a chat. Requires memories permission.' },
    ],
  },
  {
    group: 'api.memories.stats',
    rows: [
      { name: 'usage',               args: 'chatId', desc: 'Entity / relation / consolidation / salience counts (CortexUsageStats; host gc fields pass through). Requires memories permission.' },
      { name: 'ingestionStatus',     args: 'chatId', desc: 'Live ingestion phase + pending job count (CortexIngestionStatus), or null when the chat was never ingested. Requires memories permission.' },
      { name: 'ingestionTelemetry',  args: 'chatId', desc: 'Last sample + per-phase averages over recent ingestions (CortexIngestionTelemetry). Requires memories permission.' },
    ],
  },
  {
    group: 'api.personas',
    rows: [
      { name: 'list',         args: 'options?',           desc: 'List personas (paginated).' },
      { name: 'get',          args: 'personaId',          desc: 'Get a persona by ID.' },
      { name: 'getDefault',   args: '—',                  desc: 'Get the default persona (isDefault = true).' },
      { name: 'getActive',    args: '—',                  desc: 'Get the currently active persona.' },
      { name: 'create',       args: 'input',              desc: 'Create a persona.' },
      { name: 'update',       args: 'personaId, input',   desc: 'Update a persona.' },
      { name: 'delete',       args: 'personaId',          desc: 'Delete a persona.' },
      { name: 'switchActive', args: 'personaId',          desc: 'Switch the active persona. Pass `personaId: string` to activate a persona, or `null` to deactivate.' },
      { name: 'getWorldBook', args: 'personaId',          desc: 'Get the world book attached to a persona.' },
    ],
  },
  {
    group: 'api.presets',
    rows: [
      { name: 'list',              args: 'options?',                  desc: 'List user presets (paginated). Options: `{ limit?, offset? }`. Defaults: limit 50, max 200. Returns `{ data: Preset[], total }`. Requires presets permission.' },
      { name: 'get',               args: 'presetId',                  desc: 'Get a preset by ID. Returns `null` if not found. Requires presets permission.' },
      { name: 'create',            args: 'input',                     desc: 'Create a new preset. `input.name` and `input.provider` are required (`provider` is typically `\'loom\'` for native Lumiverse presets). All other fields optional with host defaults (`engine: \'classic\'`, empty parameters / prompt_order / prompts / metadata). Requires presets permission.' },
      { name: 'update',            args: 'presetId, input',           desc: 'Update a preset. All fields optional. When `prompt_order` or `metadata` is updated, Lumiverse prunes stale `metadata.promptVariables` entries that no longer correspond to a variable definition on a block. Requires presets permission.' },
      { name: 'delete',            args: 'presetId',                  desc: 'Delete a preset. Returns `true` if deleted. Requires presets permission.' },
      { name: 'blocks.list',       args: 'presetId',                  desc: 'Return the preset\'s ordered prompt blocks (`PromptBlock[]`), including structural category-marker blocks. Requires presets permission.' },
      { name: 'blocks.get',        args: 'presetId, blockId',         desc: 'Get a block by ID. Returns `null` if not found. Requires presets permission.' },
      { name: 'blocks.create',     args: 'presetId, input, options?', desc: 'Create a prompt block. `options.index` inserts at a specific zero-based position within the preset\'s `prompt_order`; omitted appends to the end. Block ops update the parent preset\'s `prompt_order` array and trigger the normal preset update flow. Requires presets permission.' },
      { name: 'blocks.update',     args: 'presetId, blockId, input',  desc: 'Update a block. All fields except `id` are optional. Requires presets permission.' },
      { name: 'blocks.delete',     args: 'presetId, blockId',         desc: 'Delete a block. Returns `true` if deleted. Requires presets permission.' },
      { name: 'categories.list',   args: 'presetId',                  desc: 'Return host-derived category groupings (`PromptBlockCategoryGroup[]`) for the preset\'s ordered blocks. Categories aren\'t separate records — they\'re structural prompt blocks with `marker === \'category\'`, and a group\'s children are the following non-category blocks until the next category marker. The first group may have `categoryBlock: null` if normal blocks appear before any category marker. To create / update / delete a category, use `blocks.*` with `marker: \'category\'`. Requires presets permission.' },
    ],
  },
  {
    group: 'api.regexScripts',
    rows: [
      { name: 'list',       args: 'options?',          desc: "List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'|'response'|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }." },
      { name: 'get',        args: 'scriptId',          desc: 'Get a single regex script by id. Returns null if not found.' },
      { name: 'findByName', args: 'name, scope?',      desc: 'Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case.' },
      { name: 'getActive',  args: 'options',           desc: "Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId." },
      { name: 'create',     args: 'input',             desc: "Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.)." },
      { name: 'update',     args: 'scriptId, input',   desc: 'Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found.' },
      { name: 'delete',     args: 'scriptId',          desc: 'Delete a regex script. Returns true if the row was deleted.' },
    ],
  },
  {
    group: 'api.images',
    rows: [
      { name: 'upload',            args: 'input',             desc: "Upload raw image bytes to Lumiverse's image store. `input.data` is a Uint8Array (source via api.utils.http.* with responseType:'arraybuffer', api.utils.image.dataUrlToBytes, api.files.*, etc.). Optional: filename, mimeType, ownerCharacterId, ownerChatId. Returns the ImageInfo whose `id` can be passed to api.theme.extractColors or stored on a character avatar. Requires images permission." },
      { name: 'uploadFromDataUrl', args: 'dataUrl, options?', desc: "Convenience: upload from a `data:image/...;base64,...` data URL. Optional options: originalFilename, ownerCharacterId, ownerChatId. Returns ImageInfo. Requires images permission." },
      { name: 'get',               args: 'imageId',           desc: 'Look up an image by id. Returns ImageInfo or null. Requires images permission.' },
      { name: 'delete',            args: 'imageId',           desc: "Delete an image by id. Returns `true` if a row was removed. Requires images permission." },
    ],
  },
  {
    group: 'api.imageGen',
    rows: [
      { name: 'generate',        args: 'input',         desc: "Generate an image. `input.prompt` required; optional: connectionId (default: user's default connection), negativePrompt, model, parameters (provider-specific — validate against the provider's `parameters` schema from getProviders() if your script accepts user input), ownerCharacterId, ownerChatId. Returns ImageGenResult { imageDataUrl, model, provider, imageId?, imageUrl? } — `imageId` is the canonical handle accepted by api.images.get / api.theme.extractColors / characters.setAvatar; `imageUrl` is an auth-free public URL suitable for api.ui.pushNotification(title, body, { image: result.imageUrl }) — pushNotification is positional, NOT object-form. For img2img / inpainting, pass `parameters: { input_images: [imageId, ...] }`. Requires image_gen permission." },
      { name: 'getProviders',    args: '—',             desc: "List all image-generation providers available on this Lumiverse install along with their capability schemas. Each provider's `capabilities.parameters` describes the supported `parameters` for generate() calls against that provider's connections — use to drive dynamic parameter UIs. Requires image_gen permission." },
      { name: 'listConnections', args: '—',             desc: "List the user's image-gen connection profiles. API keys are never exposed — only `hasApiKey: boolean`. Use to populate a connection picker UI. Requires image_gen permission." },
      { name: 'getConnection',   args: 'connectionId',  desc: 'Get a single image-gen connection profile by id. Returns ImageGenConnectionInfo or null. Requires image_gen permission.' },
      { name: 'getModels',       args: 'connectionId',  desc: "List the models available on a connection profile. For dynamic-list providers, this fetches live from the upstream API (network round-trip). Static-list providers return their capabilities.staticModels directly. Returns Array<{id, label}>. Requires image_gen permission." },
    ],
  },
  {
    group: 'api.oauth',
    rows: [
      { name: 'onCallback',     args: 'handler',        desc: "Register a callback handler for this extension's OAuth redirect URL. Handler receives the URL query params as Record<string, string>; optional return { html } becomes the response body shown in the user's browser tab. **Single handler per extension** (host stores in a module-scope ref; last-wins). LumiScript emits a `spindle.log.warn` on cross-script or same-script-re-register collisions — non-terminating; the host's last-wins behavior is preserved. Returns a sync unsubscribe fn. Requires oauth permission." },
      { name: 'getCallbackUrl', args: '—',              desc: "Get the host-relative callback URL path (e.g. `/api/spindle-oauth/lumiscript/callback`). Stable per-extension; use as the `redirect_uri` in your authorize URL construction. Async on the LumiScript side due to IPC boundary even though the host method is sync. Requires oauth permission." },
      { name: 'createState',    args: '—',              desc: 'Mint a CSRF state nonce. Pass to your authorize URL as `state=...`; the host verifies the returned state at callback time and rejects mismatches before invoking your handler. Requires oauth permission.' },
    ],
  },
  {
    group: 'api.theme',
    rows: [
      { name: 'apply',             args: 'overrides',         desc: "Apply CSS variable overrides on top of the user's current theme. `overrides.variables` is a flat map applied regardless of mode; `overrides.variablesByMode.{dark,light}` is mode-selected at apply time by the host. LumiScript maintains per-script attribution — multiple scripts' apply calls merge with per-key last-applied-wins semantics. Requires app_manipulation permission." },
      { name: 'applyPalette',      args: 'palette',           desc: "Apply a palette-driven theme. Pass `palette: ThemePaletteConfig` where `palette.accent` is `{h, s, l}` and Lumiverse generates the full variable set coherently, preserving the user's glass/radius/font/UI-scale. Pass `null` to drop this script's palette contribution. Across LumiScript scripts: most-recent-script-wins. Requires app_manipulation permission." },
      { name: 'clear',             args: '—',                 desc: 'Drop this script\'s contributions from the per-script override registry, re-merge, push the post-clear result to spindle.theme.{apply,applyPalette}. Auto-called on script disable / delete. Requires app_manipulation permission.' },
      { name: 'getCurrent',        args: '—',                 desc: "Get a read-only snapshot of the user's current theme configuration (NOT including any extension overrides). Returns ThemeInfo with id, name, mode ('light' | 'dark'), accent (HSL), enableGlass, radiusScale, fontScale, uiScale, characterAware. Requires app_manipulation permission." },
      { name: 'extractColors',     args: 'imageId',           desc: "Extract a color palette from an image stored in Lumiverse's image system. `imageId` is a host-side UUID (sources: `character.imageId`, `api.images.upload(...).id`). Returns ColorExtractionInfo with dominant + per-region RGB + flatness scores + isLight + dominantHsl (ready to pass to applyPalette). Throws if the id is unknown. Requires app_manipulation permission." },
      { name: 'generateVariables', args: 'config',            desc: "Generate the full set of Lumiverse CSS variables from a theme config without applying them. Pass the result to apply({variables}) for a complete coherent override (or tweak individual keys before applying). config.accent + config.mode required; glass/radius/font/UI-scale/baseColors/statusColors optional. Requires app_manipulation permission." },
    ],
  },
  {
    group: 'api.council',
    rows: [
      { name: 'getSettings',            args: '—', desc: "Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required." },
      { name: 'getMembers',             args: '—', desc: "Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle." },
      { name: 'getAvailableLumiaItems', args: '—', desc: "Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO)." },
    ],
  },
  {
    group: 'api.tools',
    rows: [
      { name: 'register',   args: 'name, def, handler',  desc: 'Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when the host invokes the tool (Council / direct LLM) — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging.' },
      { name: 'unregister', args: 'name',                desc: "Unregister a tool registered by this script. No-op if not found." },
      { name: 'list',       args: '—',                   desc: 'List all currently registered tools across all scripts.' },
      { name: 'invoke',     args: 'name, args?',         desc: 'Invoke a registered tool handler directly (for use inside an agentic loop).' },
    ],
  },
  {
    group: 'api.macros',
    rows: [
      { name: 'register',    args: 'name, def, handler?', desc: 'Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution).' },
      { name: 'updateValue', args: 'name, value',         desc: 'Push a new value for a push-mode macro. Throws if the macro was registered with a handler.' },
      { name: 'unregister',  args: 'name',                desc: 'Unregister a macro owned by this script. No-op if not found or not owned.' },
      { name: 'list',        args: '—',                   desc: 'List all currently registered macros across all scripts.' },
      { name: 'registerInterceptor', args: 'handler, options?', desc: 'Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission.' },
      { name: 'listInterceptors',    args: '—',                desc: 'List all currently registered macro interceptors across all scripts.' },
    ],
  },
  {
    group: 'api.broadcast',
    rows: [
      { name: 'emit', args: 'event, payload?', desc: 'Fire a named event to all subscribed handlers across all scripts.' },
      { name: 'on',   args: 'event, handler',  desc: 'Subscribe to a named event. Returns an unsubscribe function.' },
    ],
  },
  {
    group: 'api.rpc',
    rows: [
      { name: 'sync',       args: 'channel, value, options?', desc: 'Publish the latest value on a channel for cross-extension consumption. Endpoints are auto-namespaced as `lumiscript.<scriptSlug>.<channel>` — `scriptSlug` auto-derives from the calling script\'s name, overridable via `options.as`. `options.policy` controls cross-extension permission delegation: omit for legacy "requester must hold every gated permission the owner has" guard, `{ requires: [] }` for public/narrow endpoints, `{ requires: [\'name\'] }` to scope delegated permissions explicitly. Returns the fully-qualified endpoint string. Free tier. Endpoints auto-unregister on script disable / delete / stale-after-re-run.' },
      { name: 'handle',     args: 'channel, handler, options?', desc: 'Register an on-demand handler for a channel. Handler receives `RpcRequestContext { endpoint, requesterExtensionId, effectivePermissions }` and returns the response value (sync or async). `effectivePermissions` lists the gated permissions available to THIS delegated call per the endpoint\'s `options.policy`. Same `lumiscript.<scriptSlug>.<channel>` namespacing + `options.policy` semantics as `sync`. Returns the fully-qualified endpoint string. Free tier.' },
      { name: 'read',       args: 'endpoint',                  desc: 'Read a value from another extension\'s published endpoint. Pass the full `<extensionId>.<channel>` path. Throws on missing endpoint. For cross-extension data sharing — use `api.broadcast` for in-extension pub/sub instead.' },
      { name: 'unregister', args: 'channel, options?',         desc: 'Remove a channel previously published by the calling script via `sync` or `handle`. Idempotent — no-op if the channel isn\'t registered. Pass the same `options.as` you used at registration time if any.' },
    ],
  },
  {
    group: 'api.commands',
    rows: [
      { name: 'register',   args: 'commands[]',         desc: 'Register (or replace) command palette entries. Max 20 per extension.' },
      { name: 'unregister',  args: 'commandIds?',       desc: 'Remove specific commands by ID, or all if no IDs given.' },
      { name: 'onInvoked',  args: 'handler',            desc: 'Register a handler for when the user selects a command. Returns unsubscribe fn.' },
    ],
  },
  {
    group: 'api.events',
    rows: [
      { name: 'track',          args: 'eventName, payload?, options?', desc: 'Record a named event. Options: level, chatId, retentionDays.' },
      { name: 'query',          args: 'filter?',                      desc: 'Query events (newest-first). Filter by name, chat, date range, level, limit.' },
      { name: 'replay',         args: 'filter?',                      desc: 'Replay events (oldest-first). Same filter options as query.' },
      { name: 'getLatestState', args: 'keys[]',                       desc: 'Retrieve latest known state for a set of keys. Useful for resuming after restarts.' },
    ],
  },
  {
    group: 'api.enclave',
    rows: [
      { name: 'put',    args: 'key, value', desc: 'Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB.' },
      { name: 'get',    args: 'key',        desc: 'Retrieve a decrypted secret, or null if not found. Requires allowDangerous.' },
      { name: 'delete', args: 'key',        desc: 'Delete a secret. Returns true if it existed. Requires allowDangerous.' },
      { name: 'has',    args: 'key',        desc: 'Check if a secret exists without decrypting it. Requires allowDangerous.' },
      { name: 'list',   args: '—',          desc: 'List all secret keys for this user and extension. Requires allowDangerous.' },
    ],
  },
  {
    group: 'api.tokens',
    rows: [
      { name: 'countText',     args: 'text, options?',     desc: 'Server-side token count for an arbitrary string. Uses the provider\'s actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier.' },
      { name: 'countMessages', args: 'messages, options?', desc: 'Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier.' },
      { name: 'countChat',     args: 'chatId, options?',   desc: 'Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier.' },
    ],
  },
  {
    group: 'api.db',
    rows: [
      { name: 'collection',            args: 'name, opts?',            desc: "Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric." },
      { name: 'list',                  args: 'scope?',                 desc: 'List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported.' },
      { name: 'exists',                args: 'name, scope?',           desc: 'Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script\'s own collections. (0.20.0+)' },
      { name: 'drop',                  args: 'name, scope?',           desc: 'Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount.' },
      { name: 'collection.insert',     args: 'record',                 desc: 'Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys.' },
      { name: 'collection.insertMany', args: 'records',                desc: 'Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)' },
      { name: 'collection.find',       args: 'filter?',                desc: "Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }." },
      { name: 'collection.findOne',    args: 'filter',                 desc: 'First matching record or null.' },
      { name: 'collection.update',     args: 'filter, patch',          desc: 'Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails).' },
      { name: 'collection.delete',     args: 'filter',                 desc: 'Delete all matching records. Returns count.' },
      { name: 'collection.count',      args: 'filter?',                desc: 'Count matching records (or all if filter omitted).' },
      { name: 'collection.clear',      args: '—',                      desc: 'Remove all records, leaving an empty collection file.' },
      { name: 'collection.query',      args: 'jsonQuery',              desc: "Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries." },
    ],
  },
  {
    group: 'api.scriptStorage',
    rows: [
      { name: 'get',    args: 'key, defaultValue?', desc: "Read a value. Returns `defaultValue` (or `undefined` if not provided) when the key is missing. Generic type hint via `get<T>(...)` for IDE completion — the runtime doesn't enforce T." },
      { name: 'set',    args: 'key, value',        desc: 'Write a value. Overwrites any prior value at the key. Fires `ls:scriptStorage:set` with `{ scriptId, key, value }`. Throws "capacity exceeded" if the JSON-serialised total would cross the 1 MB per-script cap (use `api.variables.*` or `api.db.*` for storage at this scale). Value must be JSON-serialisable.' },
      { name: 'delete', args: 'key',               desc: 'Remove a key. Returns `true` if it existed (and fires `ls:scriptStorage:delete` with `{ scriptId, key }`), `false` if it didn\'t (no broadcast).' },
      { name: 'has',    args: 'key',               desc: 'Check whether a key exists. Returns true for keys with any value including 0 / false / null / "".' },
      { name: 'clear',  args: '—',                 desc: 'Remove every entry for this script. Fires `ls:scriptStorage:clear` with `{ scriptId }` if at least one entry existed; no broadcast for an already-empty storage.' },
      { name: 'keys',   args: '—',                 desc: 'List the current keys. Order is insertion-order (Map semantics).' },
    ],
  },
  {
    group: 'script',
    rows: [
      { name: 'id',      args: '(property)', desc: "This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)." },
      { name: 'name',    args: '(property)', desc: "This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)." },
      { name: 'type',    args: '(property)', desc: "Script type: 'trigger' or 'library'." },
      { name: 'require', args: 'nameOrId', desc: "Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')." },
    ],
  },
];

const ApiFunctionsTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Arguments</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {API_GROUPS.map(group => (
        <>
          <GroupHeader key={`hdr-${group.group}`} label={group.group} cols={3} />
          {group.rows.map(row => (
            <tr key={`${group.group}-${row.name}`}>
              <td><Code>{row.name}</Code></td>
              <td><span className="ls-ref-muted">{row.args}</span></td>
              <td><span className="ls-ref-muted">{row.desc}</span></td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── Built-in libraries ──────────────────────────────────────────────────────

export const BUILTIN_COMPONENTS: FnRow[] = [
  { name: 'messageFooter',  args: 'messageId, html, options?',  desc: 'Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }.' },
  { name: 'messageHeader',  args: 'messageId, html, options?',  desc: 'Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }.' },
  { name: 'progressBar',    args: 'target, options?',           desc: 'Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }.' },
  { name: 'floatingButton', args: 'label, options?',            desc: 'Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, draggable?, id?, className? }. Pass `draggable: true` to make the button user-repositionable; the new position persists per-script via api.scriptStorage.' },
  { name: 'badgeHtml',      args: 'text, options?',             desc: 'Returns badge/pill HTML string for composing inside other injections.' },
  { name: 'statBarHtml',    args: 'label, value, options?',     desc: 'Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }.' },
  { name: 'keyValueHtml',   args: 'label, value, options?',     desc: 'Returns label-value pair HTML string. Options: { muted?, className? }.' },
  { name: 'multiSelect',    args: 'options',                    desc: 'Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal).' },
];

export const BUILTIN_COUNCIL_PROMPT: FnRow[] = [
  { name: 'buildCouncilMessages',     args: 'options',                     desc: 'Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing.' },
  { name: 'buildCouncilSystemPrompt', args: 'options',                     desc: 'Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure.' },
  { name: 'buildCouncilIdentity',     args: 'councilMember',               desc: 'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.' },
  { name: 'roleNote',                 args: 'role',                        desc: 'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".' },
  { name: 'brevityNote',              args: 'maxWords',                    desc: 'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.' },
  { name: 'userControlNote',          args: 'allow',                       desc: 'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").' },
  { name: 'debug.formatMember',       args: 'councilMember',               desc: 'Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log.' },
  { name: 'debug.formatIdentity',     args: 'councilMember',               desc: 'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.' },
  { name: 'debug.formatSystemPrompt', args: 'options',                     desc: 'Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message.' },
  { name: 'debug.formatMessages',     args: 'options',                     desc: 'Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn\'t visible from the system-prompt view alone.' },
  { name: 'debug.formatReport',       args: 'options',                     desc: 'Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log.' },
];

export const BUILTIN_ICONS: FnRow[] = [
  { name: 'svg',                      args: 'Record<IconName, string>',    desc: 'Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates.' },
  { name: 'sized',                    args: 'name, pixels',                desc: 'Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged.' },
  { name: 'forInputBar',              args: 'name',                        desc: 'Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine.' },
  { name: 'names',                    args: '()',                          desc: 'All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers.' },
];

export const BUILTIN_TYPES: TypeDoc[] = [
  {
    name: 'MessageFooterOptions / MessageHeaderOptions',
    note: 'Options for messageFooter() and messageHeader().',
    fields: [
      { field: 'id?',               type: 'string',  optional: true, desc: 'Stable ID for idempotent injection (forwarded to injectAtMessage).' },
      { field: 'className?',        type: 'string',  optional: true, desc: 'Additional CSS class applied to the wrapper div.' },
      { field: 'collapsible?',      type: 'boolean', optional: true, desc: 'Render a persistent title bar with a click-to-toggle chevron. Default: false.' },
      { field: 'title?',            type: 'string',  optional: true, desc: 'HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true.' },
      { field: 'defaultCollapsed?', type: 'boolean', optional: true, desc: 'Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true.' },
    ],
  },
  {
    name: 'CollapsibleDOMHandle',
    note: 'Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.',
    fields: [
      { field: 'isCollapsed()',          type: '() => boolean',          optional: false, desc: 'Current collapsed state (false = body visible).' },
      { field: 'setCollapsed(collapsed)', type: '(boolean) => void',     optional: false, desc: 'Set collapsed state explicitly. Re-renders the inner content.' },
      { field: 'toggle()',               type: '() => void',             optional: false, desc: 'Flip the collapsed state.' },
      { field: 'setTitle(title)',        type: '(string) => void',       optional: false, desc: 'Replace the persistent title. Preserves collapsed state and body.' },
      { field: 'update(bodyHtml)',       type: '(string) => void',       optional: false, desc: 'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".' },
    ],
  },
  {
    name: 'BadgeHtmlOptions',
    note: 'Options for badgeHtml().',
    fields: [
      { field: 'variant?',   type: "'default'|'success'|'warning'|'danger'|'info'|'accent'", optional: true, desc: "Color variant. Default: 'default'." },
      { field: 'size?',      type: "'sm' | 'md'",  optional: true, desc: "Size preset. Default: 'md'." },
      { field: 'dot?',       type: 'boolean',       optional: true, desc: 'Prepend a colored dot indicator. Default: false.' },
      { field: 'className?', type: 'string',        optional: true, desc: 'Additional CSS class on the badge span.' },
    ],
  },
  {
    name: 'StatBarHtmlOptions',
    note: 'Options for statBarHtml().',
    fields: [
      { field: 'max?',       type: 'number',  optional: true, desc: 'Max value for percentage calc. Default: 100.' },
      { field: 'color?',     type: 'string',  optional: true, desc: 'CSS color or gradient for the fill.' },
      { field: 'showValue?', type: 'boolean', optional: true, desc: 'Show numeric value label. Default: true.' },
      { field: 'height?',    type: 'number',  optional: true, desc: 'Bar height in px. Default: 6.' },
      { field: 'className?', type: 'string',  optional: true, desc: 'Additional CSS class.' },
    ],
  },
  {
    name: 'ProgressBarOptions',
    note: 'Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).',
    fields: [
      { field: 'value?',       type: 'number',  optional: true, desc: 'Initial value (0-100). Default: 0.' },
      { field: 'label?',       type: 'string',  optional: true, desc: 'Text label above the bar.' },
      { field: 'color?',       type: 'string',  optional: true, desc: 'CSS color or gradient for the fill.' },
      { field: 'showPercent?', type: 'boolean', optional: true, desc: 'Show percentage text. Default: true.' },
      { field: 'height?',      type: 'number',  optional: true, desc: 'Bar height in px. Default: 8.' },
      { field: 'id?',          type: 'string',  optional: true, desc: 'Stable ID for idempotent injection.' },
      { field: 'className?',   type: 'string',  optional: true, desc: 'Additional CSS class.' },
    ],
  },
  {
    name: 'MultiSelectItem',
    note: 'A single selectable row in a multiSelect() items array.',
    fields: [
      { field: 'key',          type: 'string',  optional: false, desc: 'Stable identifier returned in the resolved array when this item is selected.' },
      { field: 'label',        type: 'string',  optional: false, desc: 'Primary label shown next to the checkbox.' },
      { field: 'description?', type: 'string',  optional: true,  desc: 'Secondary line shown below the label in dim text.' },
      { field: 'checked?',     type: 'boolean', optional: true,  desc: 'Initial checked state. Default: false.' },
      { field: 'disabled?',    type: 'boolean', optional: true,  desc: 'When true, the row is unclickable and visually dimmed.' },
    ],
  },
  {
    name: 'MultiSelectOptions',
    note: 'Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.',
    fields: [
      { field: 'title',         type: 'string',             optional: false, desc: 'Modal title. Required.' },
      { field: 'items',         type: 'MultiSelectItem[]',  optional: false, desc: 'List of selectable items.' },
      { field: 'confirmLabel?', type: 'string',             optional: true,  desc: "Label for the confirm button. Default: 'Confirm'." },
      { field: 'cancelLabel?',  type: 'string',             optional: true,  desc: "Label for the cancel button. Default: 'Cancel'." },
      { field: 'minSelect?',    type: 'number',             optional: true,  desc: 'Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0.' },
      { field: 'maxSelect?',    type: 'number',             optional: true,  desc: 'Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited.' },
      { field: 'width?',        type: 'number',             optional: true,  desc: 'Modal width in pixels. Default: 480.' },
      { field: 'maxHeight?',    type: 'number',             optional: true,  desc: 'Modal max-height in pixels. Clamped to viewport.' },
    ],
  },
  {
    name: 'FloatingButtonOptions',
    note: 'Options for floatingButton().',
    fields: [
      { field: 'position?', type: '{ top?, right?, bottom?, left? }', optional: true, desc: "Fixed position. Defaults to { bottom: '80px', right: '16px' }." },
      { field: 'icon?',      type: 'string',                           optional: true, desc: 'HTML string for an icon (e.g. SVG).' },
      { field: 'variant?',   type: "'default' | 'accent' | 'ghost'",   optional: true, desc: "Visual variant. Default: 'default'." },
      { field: 'size?',      type: "'sm' | 'md'",                      optional: true, desc: "Size preset. Default: 'md'." },
      { field: 'draggable?', type: 'boolean',                          optional: true, desc: 'Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false.' },
      { field: 'id?',        type: 'string',                           optional: true, desc: 'Stable ID for idempotent injection.' },
      { field: 'className?', type: 'string',                           optional: true, desc: 'Additional CSS class.' },
    ],
  },
  {
    name: 'CouncilSystemPromptOptions',
    note: 'Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn\'t forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.',
    fields: [
      { field: 'councilMember',     type: 'CouncilMemberContext',                    optional: false, desc: 'Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations.' },
      { field: 'tool',              type: '{ display_name, description, prompt? }', optional: false, desc: "Tool identification + optional per-tool directive. `prompt` is appended after the tool description." },
      { field: 'maxWordsPerTool?',  type: 'number',                                  optional: true,  desc: 'Per-tool word budget. 0 or omitted → no brevity note.' },
      { field: 'allowUserControl?', type: 'boolean',                                 optional: true,  desc: 'Whether the tool may direct the user-character. Default false (restrictive).' },
      { field: 'dynamicSuffix?',    type: 'string',                                  optional: true,  desc: 'Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment.' },
    ],
  },
  {
    name: 'CouncilMessagesOptions',
    note: 'Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.',
    fields: [
      { field: 'args',              type: 'ToolInvocationArgs',                      optional: false, desc: 'The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty.' },
      { field: 'contextMessages?',  type: 'LLMMessage[]',                            optional: true,  desc: "Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+." },
    ],
  },
];

const BuiltinLibrariesSection: FC = () => (
  <>
    <p className="ls-ref-muted" style={{ marginBottom: 8 }}>
      Built-in libraries are loaded via <Code>{"script.require('ls:<name>')"}</Code>.
      Three are currently shipped: <Code>ls:components</Code> (DOM widget factories — all
      operations attributed to the calling script; injection components require{' '}
      <Code>app_manipulation</Code>, HTML builders are free); <Code>ls:council-prompt</Code>{' '}
      (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in
      extension tools; no permissions required; only meaningful when the tool was invoked as
      part of a Council cycle); and <Code>ls:icons</Code> (a curated ~150-icon Lucide subset as
      pre-serialized SVG strings, ready to drop into <Code>iconSvg</Code> options or DOM
      templates; no permissions required).
    </p>

    <table className="ls-ref-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Arguments</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <GroupHeader label="ls:components" cols={3} />
        {BUILTIN_COMPONENTS.map(row => (
          <tr key={row.name}>
            <td><Code>{row.name}</Code></td>
            <td><span className="ls-ref-muted">{row.args}</span></td>
            <td><span className="ls-ref-muted">{row.desc}</span></td>
          </tr>
        ))}
        <GroupHeader label="ls:council-prompt" cols={3} />
        {BUILTIN_COUNCIL_PROMPT.map(row => (
          <tr key={row.name}>
            <td><Code>{row.name}</Code></td>
            <td><span className="ls-ref-muted">{row.args}</span></td>
            <td><span className="ls-ref-muted">{row.desc}</span></td>
          </tr>
        ))}
        <GroupHeader label="ls:icons" cols={3} />
        {BUILTIN_ICONS.map(row => (
          <tr key={row.name}>
            <td><Code>{row.name}</Code></td>
            <td><span className="ls-ref-muted">{row.args}</span></td>
            <td><span className="ls-ref-muted">{row.desc}</span></td>
          </tr>
        ))}
      </tbody>
    </table>

    <table className="ls-ref-table" style={{ marginTop: 12 }}>
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {BUILTIN_TYPES.map(type => (
          <>
            <tr key={`hdr-${type.name}`}>
              <td colSpan={3} className="ls-ref-group-header">
                {type.name}
                {type.note && <div className="ls-ref-type-note">{type.note}</div>}
              </td>
            </tr>
            {type.fields.map(f => (
              <tr key={`${type.name}-${f.field}`}>
                <td><Code>{f.optional && !f.field.endsWith('?') ? `${f.field}?` : f.field}</Code></td>
                <td><span className="ls-ref-muted">{f.type}</span></td>
                <td><span className="ls-ref-muted">{f.desc}</span></td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </table>
  </>
);

// ─── Assistant corpus constants (consumed by gen-assistant-corpus.ts) ────────
//
// The constants below feed the build-time corpus generator that produces
// the in-app assistant's cheat-sheet + lookup table. They live in this file
// rather than a separate one so the Reference tab + the assistant share a
// single source of truth — when the API surface changes, you only update
// here and both consumers refresh.

/**
 * Per-namespace conceptual context. Surfaces information that's important
 * for using a namespace correctly but doesn't fit naturally on any single
 * method's `desc` field — things like scope dimensions, async lifecycle,
 * sub-namespace organisation, or when-to-use vs. neighboring namespaces.
 *
 * Keys are fully-qualified namespace paths matching `FnGroup.group` (or
 * the first segment for multi-scope groups).
 */
export const NAMESPACE_CONCEPTS: Record<string, string> = {
  'api.variables.local / .global / .character / .chat':
    'Four scopes with identical method surface (get / set / delete / has / clear). `local` is per-script and transient between trigger fires. `global` is extension-wide, persists across scripts. `character` follows the active character UUID. `chat` follows the active chat UUID. The `character` and `chat` scopes auto-resolve from the active context — no need to pass the UUID explicitly.',

  'api.files — user* (per-user persistent)':
    'Three storage tiers, each with its own method-name prefix. `user*` is per-user persistent (survives extension reload, scoped to the active user). `shared*` is extension-wide persistent (shared across users). `temp*` is TTL-bound (deleted after `ttlMs` expires; requires `ephemeral_storage` permission). Same operations across tiers — read / write / delete / exists / list / mkdir / stat / move — just with the tier prefix on each method name.',

  'api.files — temp* (TTL-bound, requires ephemeral_storage)':
    'TTL-bound ephemeral storage (`spindle.ephemeral`), gated by `allowDangerous` + `ephemeral_storage`. Text I/O (`tempRead` / `tempWrite`) AND **binary I/O** (`tempReadBinary` → `Uint8Array`, `tempWriteBinary(path, Uint8Array, options?)`) — use the binary pair for images / PDFs / any non-text blob; bytes cross the IPC intact (no base64 hop). `tempWrite` / `tempWriteBinary` options are `{ ttlMs?, reservationId? }`. Files auto-expire after `ttlMs`; `tempClearExpired()` sweeps expired entries early. **Quota subsystem**: the ephemeral pool is bounded per-extension AND globally. `tempGetPoolStatus()` returns the snapshot (`TempPoolStatus` — global + this-extension max/used/reserved/available bytes + fileCount / fileCountMax). For a large write, **reserve up front** with `tempRequestBlock(sizeBytes, { ttlMs?, reason? })` → `TempReservation { reservationId, sizeBytes, expiresAt }`, pass that `reservationId` to the write options so it can\'t fail partway through on a full pool, and `tempReleaseBlock(reservationId)` if you end up not using it. **Use cases**: cache a downloaded asset across two fires, buffer intermediate state during a long job — anything large + transient where you don\'t want to spend durable storage. For persistent bytes use `api.files.user*` / `shared*`; for images Lumiverse should own use `api.images.*`.',

  'api.db':
    'Per-script schema-validated JSON collections. Each collection is a typed array of records persisted under the owning script\'s storage path; collections never leak across scripts. Optional Zod schema validates writes (insert + update). Built-in fields `id` / `createdAt` / `updatedAt` are reserved and auto-managed; Zod\'s `.strict()` / unknown-key stripping preserves them. Use for structured per-script data; for cross-script shared state see `api.variables.global`.',

  'api.scriptStorage':
    'Per-script in-memory key/value store for session state. Closes the "where does my script keep its session state?" UX gap that was previously covered by the `globalThis.__lumiscript_script_<id>_*` convention (verbose, easy to forget the prefix). **Free tier — no permission required.**\n\n**Picking the right storage primitive** — the LumiScript storage story now has three tiers, picked by intent:\n  - `api.scriptStorage` — in-memory, session-scoped, free-tier. Best for "remember this for the session" flags (tracker rerun-inflight, current selection, transient cache).\n  - `api.variables.*` — disk-persisted, scope-tiered (local/global/character/chat), free-tier. Best for "remember this across restarts" state.\n  - `api.db.*` — disk-persisted, structured collections with schema + filters + queries. Best for record-shaped data you want to search / aggregate.\n\n**Lifecycle**: in-memory only — values live in a parent-side `Map<scriptId, Map<key, value>>`, no disk write. Survives worker eviction / respawn (parent-side state, not in worker memory). Survives script edit / hot-reload (matches the `globalThis` convention — preserves dev iteration state). Cleared on script disable / delete via the `teardownDisabledScript` path. Lost on full backend restart.\n\n**Size cap**: 1 MB per script on the JSON-serialised size of the full map. `set()` throws `"capacity exceeded"` cleanly when a write would cross the cap, with a migration hint pointing to `api.variables.*` / `api.db.*`. The cap is intentional — scriptStorage is a "small bag of session flags" surface, not bulk storage.\n\n**Broadcasts**: every mutation fires an `ls:scriptStorage:*` event on the broadcast bus. `ls:scriptStorage:set` carries `{ scriptId, key, value }`; `ls:scriptStorage:delete` carries `{ scriptId, key }`; `ls:scriptStorage:clear` carries `{ scriptId }`. No-op `delete` / empty `clear` calls don\'t fire. The `ls:*` prefix avoids the eviction-pinning policy. Useful for debug / admin tooling; user scripts typically don\'t need to subscribe.\n\n**Values must be JSON-serialisable.** Passing functions / symbols / DOM elements throws at the IPC boundary — same posture as `api.broadcast.emit` and `api.variables.*`.\n\n**Cross-script isolation**: per-script via `scriptId`-keyed outer Map. Script A\'s writes never appear in Script B\'s reads. (Cross-script visibility for debug tooling is available via the broadcast events above.)',

  'api.broadcast':
    'In-memory real-time pub/sub between scripts. Events are NOT persisted — handlers fire synchronously when an event is emitted, and there\'s no replay across script reloads. Subscriptions persist between trigger runs, so a "subscriber-only" script can watch events from a script it isn\'t co-triggered with. The owning script\'s next run clears its subscriptions at the START (then the body re-registers them) — so a re-firing script never stacks duplicate listeners, while a script that fires once (e.g. on `ls:startup`) keeps its subscriptions until it\'s disabled or deleted. The `ls:*` prefix is reserved for system events; scripts should namespace their own events with a project-specific prefix. **Distinct from `api.events`** — that one is for persistent event tracking; this one is for real-time messaging.\n\n**Payload size cap + emit rate limit.** `api.broadcast.emit(event, payload)` synchronously throws if the JSON-serialised payload exceeds **1 MB** (matches the `api.scriptStorage` per-value ceiling), OR if the calling script has emitted more than **100 events/sec sustained** (token bucket with **1000-emit burst capacity**). Errors carry clear migration hints. The caps apply at the `api.broadcast.emit` proxy entry (NOT at the underlying bus, so internal `ls:*` events the engine emits are unaffected). For high-frequency data flow, push the data to `api.db.*` or `api.scriptStorage` and emit a small "data updated" notification on the bus instead.',

  'api.rpc':
    'Cross-extension shared RPC pool. Wraps Spindle\'s `spindle.rpcPool` with two-tier namespacing: every endpoint is fully-qualified as `lumiscript.<scriptSlug>.<channel>` where `scriptSlug` auto-derives from the calling script\'s name (overridable via `options.as`). Use `sync(channel, value)` to publish a latest-value snapshot and `handle(channel, fn)` to register on-demand handlers — other LumiScript scripts AND other Lumiverse extensions can `read(endpoint)` from these channels. Free tier (no permission). Endpoints auto-unregister on script disable / delete / stale-after-re-run. **Permission delegation**: `options.policy` controls how owner permissions flow to readers. Omit for the legacy "requester inherits every owner permission" guard; pass `{ requires: [] }` for intentionally narrow / public endpoints; pass `{ requires: [\'name\'] }` to scope delegated permissions explicitly. Handlers receive `effectivePermissions` on the `RpcRequestContext` so they can branch on what\'s actually delegated to this call. **Distinct from `api.broadcast`** — broadcast is in-process pub/sub between LumiScript user-scripts; rpc is cross-extension, asks-the-pool RPC where the caller knows the target endpoint by name. Backend-console logs registrations for cross-extension exposure visibility.',

  'api.events':
    'Persistent event tracking + replay. Events are durably stored and queryable across script reloads / extension restarts. Use cases: audit logs, state-resuming scripts (`getLatestState` for keys), custom analytics. **Distinct from `api.broadcast`** — that one is in-memory real-time pub/sub; this one is durable storage. Recording requires `event_tracking` permission.',

  'api.presets':
    'Generation preset CRUD. A preset is the complete prompt configuration: sampler/provider `parameters`, ordered `prompt_order` (prompt blocks with roles / positions / depth), `prompts` (behavior + completion settings), and `metadata` (description, model profiles, prompt-variable values). **Three sub-namespaces**: `api.presets.*` (preset CRUD), `api.presets.blocks.*` (prompt-block CRUD within a preset — block ops update the parent\'s `prompt_order` and trigger the normal preset update flow), `api.presets.categories.*` (host-derived category grouping view). **Categories are NOT separate records** — a category is a structural prompt block with `marker === \'category\'`, and its children are the following non-category blocks until the next category marker. `categoryMode` is `\'radio\'` (one enabled child) or `\'checkbox\'` (many). Use `categories.list()` for the precomputed grouping; create / update / delete category headers via `blocks.*` with `marker: \'category\'`. **Snake_case fields** (`prompt_order`, `created_at`, `updated_at`) are preserved from Spindle DTOs since they identify stored data. **Use cases**: rotate prompt blocks based on chat context, toggle radio-category options on character state changes, snapshot presets to JSON for backup, build ephemeral per-chat presets and clean up via `ls:teardown`. Requires `presets` permission.',

  'api.macros':
    'Two registration modes. **Pull mode** (`register(name, handler)`): handler runs at macro-resolution time, can be sync or async (function-reference form; string-handler form is sync-only). **Push mode** (`register(name)` + `updateMacroValue(name, value)`): register once with no handler, push values whenever they change — avoids RPC latency at generation time. Pull is simpler but pays per-resolve cost; push is faster but requires upstream "value changed" knowledge. Pick based on whether macro resolution is hot.',

  'api.tools':
    'Tool-registration surface. All tools you register via `api.tools.register` are **extension tools** — they bypass any sidecar LLM and are invoked directly by the host with `(args, ctx?)`. On a Council invocation `args` is `{context, __deadlineMs}` only — your registration-schema parameters are NOT filled (no sidecar LLM runs to populate an extension tool\'s schema), so read `args.context` and decide the values yourself — and `ctx` carries `{councilMember?, contextMessages?, requestId?}`. The "two execution paths" framing applies to **Lumiverse built-in tools** (which DO go through a sidecar LLM with description-as-prompt — that\'s how the Council reasons about which to invoke); LumiScript scripts can\'t register sidecar-LLM-driven tools. Practical implication: do your own analysis inside the handler — `generateStructured` against a fast connection is the canonical pattern. One-line tool descriptions are sufficient for extension tools — the description doesn\'t prompt anything; it\'s purely a human label shown in the tool inspector. Set `council_eligible: true` on the definition to make the tool selectable for Council `chance` rolls (the tool then receives Council context on invocation); leave it false for tools only invoked via `api.tools.invoke` or `api.llm.generateWithTools`. To **observe** invocations of your registered tools (Council or direct) with their result + timing, subscribe to the `ls:tool:invoked` broadcast via `api.broadcast.on` (fires after each handler returns; payload `{ name, args, result, scriptId, callMs, councilMember? }`) — the host delivers only invocations of YOUR tools, so built-in / DLC tools (pure LLM prompts) and tools owned by other extensions are not visible.',

  'api.webSearch':
    'Native web search against the user\'s configured provider (SearXNG today). `query({ query, count?, scrape? })` returns ranked `results` (title / url / snippet); with `scrape` (default **true**) it ALSO scrapes the top pages into `documents` (full text) and assembles a prompt-ready `context` string — drop `context` straight into an LLM prompt for grounding / RAG. `scrape: false` is the fast path: titles / URLs / snippets only, no page fetches. `query` REJECTS with "Web search is disabled" when the user has no provider configured — branch on `getSettings().enabled` first. `getSettings()` returns the SAFE config (provider, limits, language, safeSearch, engines, `hasApiKey`) — NEVER the API key itself. The active userId is folded in implicitly. Use cases: Council "look it up" tools, grounding a reply in current info, RAG over fresh results. Requires `web_search` permission.',

  'api.connections':
    'Read-only view of the user\'s LLM connection profiles — the same profiles `api.llm` resolves against. `list()` / `get(id)` / `getDefault()` (the `is_default` profile, else the first available) / `findByName(name)` (case-insensitive). Each `Connection` is snake_case (mirrors the host DTO: `id`, `name`, `provider`, `api_url`, `model`, `preset_id`, `is_default`, `has_api_key`, `metadata`, `reasoning_bindings`) and is a SAFE view — it carries `has_api_key: boolean`, NEVER the key. `id` / `name` map straight to `api.llm` options `connectionId` / `connectionName`, so you can let the user pick a connection (pair with `api.ui.components.mountSelect` / `mountModelCombobox`) and route a generation to it. **Intentionally read-only** — connections hold provider credentials and are managed by the user in Lumiverse settings, never by scripts (no create / update / delete). Free tier. The active userId is folded in implicitly.',

  'api.users':
    'Active-user context probes. `isVisible()` — true if the user has the app visible in at least one session, false if every session is hidden / backgrounded (or there is no open session); use it to choose a push notification (when the user is away) vs. an in-app toast / UI update (when present), or to defer background work. `getRole()` — the user\'s Lumiverse role: `\'operator\' | \'admin\' | \'user\'` (internal owners report as `operator`); gate operator-only diagnostics or admin-only actions on it. Free tier; the active userId is folded in implicitly.',

  'api.version':
    'The running Lumiverse versions: `getBackend()` and `getFrontend()` each return a semver string. Use for feature-gating — branch a script on whether the host is new enough for a given event or API. Compare numerically (split on `.`, strip any `-rc` / `+build` suffix) rather than string `===`; LumiScript\'s own `host-version.ts` `compareVersions` helper is the reference implementation. Free tier. (This is the script-facing view of the same version probe LumiScript uses internally for its `minimum_lumiverse_version` check.)',

  'api.databanks':
    'Three ownership scopes — `global` (no owner key), `character` (owned by character UUID), `chat` (owned by chat UUID). Documents within a databank inherit their parent\'s scope. Document ingestion is **asynchronous**: `documents.create()` returns immediately with `status: \'pending\'`; use `documents.waitUntilReady(docId)` to await chunking + vectorization. For input-bar actions or other UI surfaces that need ready-state confirmation, prefer `waitUntilReady` over manual polling.\n\n**File-type constraint**: Lumiverse accepts text-oriented uploads only — `.txt`, `.md`, `.markdown`, `.csv`, `.tsv`, `.json`, `.xml`, `.html`, `.htm`, `.yaml`, `.yml`, `.log`, `.rst`, `.rtf`. PDFs, images, archives, audio, and other binary payloads are rejected at ingestion even though `DatabankDocumentCreateInput.data` is typed `string | Uint8Array`. For non-text persistence, use `api.files.*` (UTF-8 strings — base64-encode binary first) or `api.images.*` (raw image bytes). Max 10 MB per document.',

  'api.memories.cortex':
    '`api.memories.*` bridges Lumiverse\'s **hybrid memory architecture**, under one `memories` permission. Two halves: the **Memory Cortex** (entity/relation graph + narrative-arc consolidations + salience + vaults + chat interlinks + fused retrieval) and **Long-Term Chat Memory** (the vectorized chunk store behind the `{{memories}}` macro — see `api.memories.chatMemory`). **Distinct from `api.databanks`** — databanks are explicitly-uploaded reference documents; the cortex is what Lumiverse automatically *remembers* about a chat. The active userId is folded in implicitly, and **every chat-scoped call is ownership-checked** host-side (other users\' chats return `null` on reads / throw on writes). `cortex.query(CortexQueryDTO)` is the headline call: it fuses semantic search + salience + recency + reinforcement + emotional + entity components into a ranked `CortexResult` (the same shape the host uses during prompt assembly) — use it for grounding/RAG over what the chat remembers. Results are server-cached ~5 min per chat+query shape; `getCached` / `getCachedLinked` read that warm cache without re-querying (return `null` when empty/expired); `invalidateCache` drops it. `queryLinked` resolves every attached vault + interlink target in parallel. `getConfig` / `putConfig` read + patch the (permissive, host-owned) cortex configuration.',

  'api.memories.entities':
    'The cortex **entity graph** — characters, locations, items, factions, concepts, events. `list` defaults to active-only, ordered by salience; `findByName` matches canonical name OR known aliases. `upsert` is a **smart merge** against the canonical name + aliases (not a blind insert) — pass `MemoryEntityUpsert { name, type, aliases?, confidence?, role?, provisional? }`; entities below the configured confidence threshold are dropped host-side. Mutators: `updateStatus` (active / inactive / deceased / destroyed / unknown), `addFacts` (deduplicated, keeps the most recent 20), `updateEmotionalValence` (replaces the running valence map). Use to build entity dashboards, replay your own NER into the graph, or correct what Lumiverse extracted.',

  'api.memories.relations':
    'The typed **relation graph** between entities. `list` is active edges only; `listAll` includes superseded/merged (diagnostics); `forEntity` / `forEntities` filter by incident entity. **`upsert` uses entity NAMES, not ids** (`MemoryRelationUpsert { source, target, type, label, sentiment }`) — the host resolves canonical ids server-side. **Gotcha: both endpoints must already exist in the entity graph** — call `entities.upsert` for source + target first, or the relation is silently dropped and `upsert` returns `null` (not the row). Always null-check the return.',

  'api.memories.consolidations':
    'Narrative-arc **consolidations** — compressed summaries across a tier of chunks (tier 1 = scene, 2 = chapter, …). `list` (optionally tier-filtered, most-recent-first) and `latestArc` read them; `run` triggers a background pass. **`run` is extractive / heuristic only — it does NOT call a sidecar LLM** (sidecar-driven consolidation is host-owned and runs automatically during ingestion). `run` is fire-and-forget: it returns immediately and new arcs surface via `list()` once the background job finishes.',

  'api.memories.vaults':
    '**Vaults** are frozen cortex snapshots — capture a chat\'s entities + relations + chunk content for reuse. `create({ chatId, name, description? })` copies entities + relations **synchronously** but copies the LanceDB chunks **in the background** (the vault is queryable in structural-only mode until that finishes); `reindex` re-runs the chunk copy (e.g. after an embedding-model swap). `get` returns the vault + entities + relations; `getChunks` the chunk snapshot. Attach a vault to other chats as read-only knowledge via `api.memories.links`.',

  'api.memories.links':
    'Chat **links** — two kinds via `attach(ChatLinkAttach)`: a **vault attach** (`linkType: \'vault\'`, `vaultId`) gives a chat read-only access to a frozen snapshot, and an **interlink** (`linkType: \'interlink\'`, `targetChatId`) makes two chats see each other\'s live entities/relations (pass `bidirectional: true` to also create the reverse edge on the target). `list` enumerates a chat\'s links; `toggle` enables/disables without removing; `remove` deletes. Linked data surfaces through `cortex.queryLinked`.',

  'api.memories.chatMemory':
    'Long-Term Chat Memory — the vectorized **chunk store behind the `{{memories}}` macro**. `get(chatId, { topK })` runs the same top-K hybrid (vector + BM25) retrieval the macro uses and returns `ChatMemoryResult { chunks, formatted, count, … }` — **equivalent to `api.chats.getMemories()`** but under the `memories` permission (use that lighter alias if `memories` is overkill). `listChunks` inspects the raw index; `warm` rebuilds stale chunks + queues pending vectorizations (no-op `status: \'skipped\'` when chat vectorization is disabled — check the user\'s embedding config first); `invalidate` drops the cached retrieval. **Distinct from `cortex`** — chatMemory is flat semantic chunk retrieval; cortex is the structured graph + fused scoring.',

  'api.images':
    'Thin wrapper over Lumiverse\'s image store. Use cases: persist generated / fetched / pasted images and obtain an `imageId` that can be passed to `api.theme.extractColors` for palette derivation, stored on a character avatar, or attached to a databank document. **Two upload paths**: `upload({data: Uint8Array, ...})` for raw bytes (sourceable from `api.utils.http.*` with `responseType: \'arraybuffer\'`, `api.utils.image.dataUrlToBytes(...).data`, `api.files.*`, etc.); `uploadFromDataUrl(dataUrl, options?)` for `data:image/...;base64,...` URLs. Both return `ImageInfo` whose `id` is the persisted UUID. **Distinct from `api.utils.image.*`** — those are CHILD-side byte-manipulation helpers (mime sniff, dataUrl ↔ bytes conversion); `api.images.*` is HOST-side persistence. Requires `images` permission.',

  'api.imageGen':
    'Image-generation surface. `generate({prompt, ...})` fires against the user\'s configured connection profiles (the same profiles the Lumiverse UI uses for image generation) and returns `ImageGenResult { imageDataUrl, model, provider, imageId?, imageUrl? }`. **`imageId` is the integration seam** — pass to `api.images.get`, `api.theme.extractColors`, or `spindle.characters.setAvatar` to compose with the rest of the API. `imageUrl` is an auth-free public URL suitable for `api.ui.pushNotification(title, body, { image: result.imageUrl })` (positional signature, NOT object-form). **Provider/connection metadata** via `getProviders` (capability schemas — drive parameter UIs), `listConnections` / `getConnection` (connection picker UIs; API keys masked), `getModels` (model picker; dynamic providers fetch live from upstream). **Provider-specific parameters** flow opaquely through `input.parameters` — validate against the provider\'s `parameters` schema from `getProviders()` if your script accepts user input. **img2img / inpainting** via the `image_array` parameter type: pass arrays of `imageId` strings (`parameters: { input_images: [id1, id2] }`). **Distinct from `api.images.*`** — that one is raw-byte CRUD on already-stored images; this one creates new ones. Requires `image_gen` permission.',

  'api.oauth':
    'OAuth callback surface — the **only inbound-HTTP hook** Spindle exposes to extensions. Three primitives: `onCallback(handler)` registers a handler for this extension\'s OAuth redirect URL, `getCallbackUrl()` returns the URL path to use as `redirect_uri`, `createState()` mints a CSRF state nonce. **Single handler per extension** (host stores in a module-scope ref; last-wins). LumiScript adds a `spindle.log.warn` on cross-script or same-script-re-register collisions — non-terminating; the host\'s behavior is preserved, only the silent overwrite is surfaced. **Wrapper is intentionally thin** — everything beyond these primitives (constructing the authorize URL, exchanging the code for a token, persisting + refreshing the token) is the script\'s responsibility. Pair with `api.utils.http` (`cors_proxy` + `allowDangerous`) for token-endpoint POSTs and `api.enclave` for encrypted token persistence. PKCE cookbook recipe deferred to v1.0 docs pass. Requires `oauth` permission.\n\n**Surfacing the authorize URL.** Scripts run server-side in the Bun subprocess — there is NO `window.open` and no programmatic browser-tab control. To prompt the user to visit the authorize URL, use one of: (a) `api.ui.showAdvancedModal({title:\'Authorize\', items:[{kind:\'html\', html:\'<a href=\"...\" target=\"_blank\">Click to authorize</a>\'}]})` (requires `app_manipulation`); (b) `api.ui.toast(\'Open this URL: \'+authorizeUrl, \'info\')` for a passive notice; (c) `api.ui.pushNotification(\'Authorize required\', authorizeUrl, { url: authorizeUrl })` for an OS notification (positional: title, body, options; the `url` option opens-on-click) (requires `push_notification`); (d) inject a button into the host shell via `api.ui.dom.inject` (requires `app_manipulation`).\n\n**Composing the full `redirect_uri`.** `getCallbackUrl()` returns a host-relative path (e.g. `/api/spindle-oauth/lumiscript/callback`); the OAuth provider needs the absolute URL. Scripts can\'t introspect the Lumiverse origin at runtime — pass it as a config constant in the script source, or store via `api.variables.global` from a one-time setup script.',

  'api.theme':
    'Lumiverse theme manipulation surface. Three usage tiers, increasing in flexibility: **simple** — `applyPalette({accent: {h, s, l}})` and let Lumiverse generate the full coherent ~80+ CSS variable set; **mode-aware** — `apply({variablesByMode: {dark: {...}, light: {...}}})` and the host dispatches per-mode at apply time; **expert** — `generateVariables(config)` → tweak → `apply({variables: ...})` for full programmatic control. **Per-script attribution**: multiple LumiScript scripts can apply themes concurrently — LumiScript maintains a per-script override registry and merges before pushing to spindle. Conflict resolution: per-key last-applied-wins for variables, most-recent-script-wins for palette. Auto-cleared on script disable / delete (no manual `clear()` needed for normal disable flows). **Cookbook pattern for interactive UI scripts**: scripts that combine theme apply with interactive DOM should clear their theme in the close / dismiss handler symmetric to DOM removal — `clear()` drops just this script\'s contributions, other scripts\' themes survive. `extractColors(imageId)` pairs cleanly with `applyPalette({accent: result.dominantHsl})` for image-driven theming (avatar-themed UI, dynamic mood theming, etc.). Requires `app_manipulation` permission.',

  'api.ui':
    'User-facing UI surface — notifications (`toast`, `pushNotification`), dialogs (`prompt`, `confirm`, `editText`, `showModal`, `showContextMenu`), script-owned regions (`showAdvancedModal`, `createFloatWidget`, `registerDrawerTab`), the native file picker (`pickFile`), and **navigation**. The sub-namespaces `api.ui.dom.*` (DOM injection), `api.ui.components.*` (host components), and `api.ui.events.*` (reactive keyboard / drawer / settings state) have their own concept entries. `pickFile(options?)` opens the browser\'s native file picker and resolves with the selected `PickedFile[]` (bytes as `Uint8Array`) — free tier (the native dialog is the user-action gate); rejects if a file exceeds `maxSizeBytes`, resolves `[]` on cancel. **Script-owned UI regions** form a ladder of increasing scope: `showAdvancedModal` (a modal), `createFloatWidget` (a draggable overlay, `ui_panels`), `registerDrawerTab` (a sidebar tab), and `mountApp(options?)` — a route-persistent, full-bleed `document.body` portal (`position: \'start\' | \'end\' | \'app-overlay\'`) for full-screen overlays / persistent chrome beyond the others. All hand back a `.root` DOMHandle you fill via `api.ui.dom.*`; `mountApp` / `showAdvancedModal` / DOM / components require `app_manipulation`. **Navigate vs. contribute** is the key distinction for the navigation methods: `registerDrawerTab` *contributes* a new tab your script owns, whereas `openDrawerTab(id)` / `openSettings(viewId?)` / `openCommandPalette()` *navigate* the user to surfaces that already exist (built-in OR contributed by any extension). Enumerate targets with `getDrawerTabs()` / `getSettingsTabs()` (each returns id + names + keywords + source) and deep-link by id — you can jump into another extension\'s tab if you know its id. Navigation calls resolve once the host dispatches the event (the frontend applies it asynchronously); `closeDrawer` / `closeSettings` / `closeCommandPalette` reverse them. Use for onboarding nudges ("open the Connections drawer"), agent-driven walkthroughs, and "fix it" deep links. The navigation methods are free tier — other `api.ui.*` methods carry their own permissions (see the per-method rows).',

  'api.ui.events':
    'Reactive Lumiverse UI state — virtual keyboard, side drawer, settings modal. Each surface has BOTH a snapshot getter and a change subscription. **Snapshots** (`getKeyboardState` / `getDrawerState` / `getSettingsState`) resolve with the latest known state (keyboard `{ visible, insetBottom, viewportWidth, viewportHeight }`, drawer `{ open, tabId }`, settings `{ open, view }`) — async because they cross the worker boundary, but served from a cache the frontend keeps fresh (no per-call round-trip). **Subscriptions** (`onKeyboardChange` / `onDrawerChange` / `onSettingsChange`) fire on every change with the new state and return an unsubscribe fn. **Primary use case: mobile-safe positioning** — reposition float widgets / injected DOM when the on-screen keyboard opens (`insetBottom`) or the visual viewport changes. Free tier. Lifecycle: a live subscription keeps the script pinned (it won\'t be evicted while a handler is registered) and is torn down automatically on script disable — call the returned unsub when you\'re done to release the pin sooner. Keyboard events are most relevant on mobile / PWA; on desktop the drawer + settings channels are the active ones.',

  'api.ui.dom':
    'DOM injection surface. `inject(target, html, position?)` returns a `DOMHandle`; subsequent calls go through the handle (`update`, `remove`, `on`, `injectChild`, `read`, `makeDraggable`). `addStyle(css)` adds a scoped stylesheet (wrapped in `@scope ([data-ls-script="<id>"])` — only matches script-injected DOM, doesn\'t cascade into the host app shell). `injectAtMessage(messageId, html, options?)` attaches DOM to a specific chat message (header, before, after, footer positions). `delegate(selector, event, handler, options?)` installs a capture-phase event-delegated listener at a known root — use to react to events on host DOM you didn\'t inject (e.g. LLM-emitted interactive elements inside `.mes_text` content). `cleanup()` removes ALL of this script\'s DOM in one call. Requires `app_manipulation` permission.\n\n**Styling host UI requires inline `<style>` injection, NOT `addStyle`.** Because `addStyle` wraps its CSS in `@scope ([data-ls-script="<id>"])`, every rule only matches descendants of script-injected DOM — host elements (chat input bar, message bubbles, toolbar buttons, the body itself) are unreachable. To style host DOM (`button[aria-label="..."]`, `[class*="hostClass"]`, `body:has(.my-toggle:checked) ...` selectors, etc.), include a `<style>` block in your `inject()` HTML. CSS rules inside a `<style>` element are document-global regardless of where the tag sits in the DOM, so they reach host elements. The wrapper (`data-ls-script="<id>"`) still carries cleanup attribution — script disable removes the wrapper, the `<style>` goes with it, host UI returns to baseline. Same lifecycle as `addStyle`; different reach.\n\n**Top-level at-rules don\'t survive `addStyle`.** `addStyle` wraps the whole stylesheet in its `@scope` block, and at-rules CSS only permits at the top level — `@font-face`, `@keyframes`, and similar — are invalid nested inside `@scope`, so the browser silently drops them (the surrounding scoped style rules still apply, which makes the failure easy to miss: a custom `@font-face` never registers and the text falls back to a default face, with no error and no console entry). Put any such at-rule in an inline `<style>` block inside an `inject()` HTML payload instead — that `<style>` is document-global (NOT `@scope`-wrapped), so the `@font-face` / `@keyframes` registers normally. Same split as host-UI styling above: descendant-scoped rules go through `addStyle`; anything that must live at stylesheet top level goes in an inline `<style>`.\n\n**Inline `<style>` blocks and `opts.id`-dedup DON\'T MIX.** Re-firing `inject(target, html, { id })` with an `id` that already exists triggers the `dom_update` IPC path on the frontend, which replaces the wrapper\'s `innerHTML` in place. Browsers don\'t reliably reactivate `<style>` elements added via `innerHTML` — the tag is in the DOM but its rules don\'t register into the active stylesheet list. Net effect: first fire works, second fire silently loses every CSS rule from the inline `<style>` (host elements re-appear; the script\'s own UI loses its styling too). For scripts that combine inline `<style>` blocks with re-firing triggers (`ls:startup` + `CHAT_SWITCHED` + manual Run-button), DROP the `id` and call `api.ui.dom.cleanup()` at the top of the body instead. `cleanup()` removes only THIS script\'s DOM + styles, leaves other scripts untouched, and forces every fire to take the fresh-inject path which parses `<style>` correctly.\n\n**HTML sanitisation.** Every HTML payload — `inject`, `update`, `injectChild`, `injectAtMessage` — is run through DOMPurify with strict defaults plus `FORBID_TAGS: [\'iframe\', \'frame\', \'object\', \'embed\', \'form\']` (matching the host\'s three-layer CSP + DOMPurify + X-Frame-Options policy). DOMPurify defaults strip all `on*` event handler attributes (`onclick`, `onerror`, `onload`, `onmouseover`, etc.), `<script>` tags, `javascript:` URLs, `data:` URLs on dangerous elements, the `formaction` attribute, and other XSS vectors. **When content is stripped, the affected script\'s editor console gets a `[security]` entry** naming what was removed (tells you why your `<button onclick="...">` button doesn\'t work).\n\n**Event handlers — use delegation, not inline.** Inline `onclick="..."` attributes are stripped by sanitisation. The replacement is `DOMHandle.on(event, handler)` event delegation with a `data-*` attribute on the trigger element:\n\n```js\n// Stripped at injection — button does nothing:\nhandle.update(\'<button onclick="doThing()">Click</button>\');\n\n// Recommended:\nhandle.update(\'<button data-action="do-thing">Click</button>\');\nhandle.on(\'click\', (ev) => {\n  if (ev.target.dataset.action !== \'do-thing\') return;\n  // ...do thing\n});\n```\n\nThe delegation reads `event.target.dataset.action` (not a `closest()` walk), so when the visible button content is bigger than its padded text area (icon SVG, `<img>`, decorative `<span>`), the click target can be the inner element — which lacks the `data-*` attribute, so the handler silently no-ops. Standard fix: `pointer-events: none` on the decorative inner content so clicks pass through to the button itself.\n\n**Read access.** `handle.read(options?)` returns a `SerializedDOMElement` snapshot of the bound element — `tag`, `attrs` (with internal `data-ls-*` and `data-spindle-ext` stripped), `text`, `childCount`, plus optional `html` for the inner markup. Async because it awaits a frontend roundtrip. Multi-root or text-only injections return the LumiScript wrapper snapshot; single-root injections return the user\'s element directly. Returns `null` if the element vanished on the frontend (live DOM raced ahead of script logic) — distinct from `DomHandleReleasedError` which throws after `handle.remove()`.\n\n**Spindle wrapper nesting (gotcha).** `ctx.dom.inject` wraps every payload in a Spindle wrapper `<div data-spindle-ext>` containing a LumiScript wrapper `<div data-ls-el data-ls-script>` containing your HTML. Two levels of wrapper sit ABOVE your root element. Code that walks down to the user\'s root must do `wrapper.firstElementChild?.firstElementChild`. The `data-ls-script` attribute is what `addStyle`\'s `@scope` rules match.',
};

/**
 * The architectural intro for the permission-model section of the
 * assistant's cheat-sheet. Explains how permissions are declared and
 * granted at the extension level (NOT per-script), how `allowDangerous`
 * differs (separate per-script toggle, not a Spindle permission), and
 * why script-header `@permissions` / `@permission` directives are not
 * recognised (they're a common hallucination from framework training).
 *
 * The leading "DO NOT WRITE" banner is deliberately in-your-face — Q5 and
 * Q4-retry tests showed strong models (Opus 4.6) still hallucinating
 * `@permissions` headers even after a calmer prose explanation. The bold
 * banner closes that gap for models that DO read corpus content at the
 * top of a section.
 */
export const PERMISSION_MODEL_INTRO: string =
  '**DO NOT WRITE `// @permissions` OR `// @permission` IN YOUR SCRIPT.** Neither is a LumiScript directive. **LumiScript does not parse `@permissions`, `@permission`, or `@triggers` directives** — `// @triggers`, despite the name, is purely a documentary comment with no runtime effect (event wiring happens in the editor UI; see the **Trigger model** section). (The one script-header directive LumiScript *does* read is the unrelated `// @ls:reload-on-edit` hot-reload opt-in — nothing to do with permissions or wiring.) Writing `@permissions` or `@permission` in a script header is a **no-op** — it looks like it grants permissions but actually does nothing; your script will then fail at runtime when it calls a gated method. This is the single most common script-permission-bug we see; if you find yourself reaching for an `@permission` directive, stop and re-read this section.\n\n' +
  'How permissions actually work: LumiScript permissions are declared **at the extension level** in `spindle.json` and granted once by the user when the extension is enabled. **There are no per-script permission declarations** — every script inside the LumiScript extension shares the same grant set. The user (not the script author) controls what\'s granted. ' +
  '(Earlier mental models à la SillyTavern, where each script declares its own perms, do NOT apply here.)\n\n' +
  '**Permissions gate `api.*` method calls, NOT the `data` trigger global.** Reading `data.message.content` from a `MESSAGE_SENT` trigger does NOT require `chat_mutation` — the host already routed the event payload to your script for free. Permissions only kick in when your script reaches back through the API (e.g. `api.chat.getMessages`, `api.chat.editMessage`). Don\'t list a permission unless your script actually calls a gated method.\n\n' +
  '**`allowDangerous` is SEPARATE** — it\'s a per-script LumiScript-level UI toggle (in the script-list row), NOT a Spindle permission. It gates a **fixed set of surfaces**: outbound HTTP (`api.utils.http.*`), encrypted secrets (`api.enclave.*`), file I/O (`api.files.*`), and `api.chat.clearAllInjections`. **It does NOT gate any other surface.** Raw image bytes (`api.characters.setAvatar`, `api.images.upload`), DOM injection (`api.ui.dom.*`), theme manipulation (`api.theme.*`), character mutations (`api.characters.update`), OAuth callbacks (`api.oauth.*`), image generation (`api.imageGen.*`), and every other gated method flow through their own dedicated Spindle permissions only — no `allowDangerous` toggle required. If you find yourself reaching for `allowDangerous` to "unlock" a surface that isn\'t on the fixed list above, stop: the surface is gated by its own permission instead. When a method\'s permission tag below shows `[X, + allowDangerous]`, BOTH gates must be on: the extension must have permission `X` granted AND the calling script must have `allowDangerous` toggled on.';

/**
 * Permission name → one-line description. Surfaced in the Permission Model
 * cheat-sheet section as a reference table.
 *
 * Validated at corpus-generation time: every permission appearing in
 * `PERM_GROUPS` must have a description here. New permissions added to
 * `PERM_GROUPS` will fail the build until documented.
 */
export const PERMISSION_DESCRIPTIONS: Record<string, string> = {
  chat_mutation:     'Read / send / edit / delete chat messages. Required for most `api.chat.*` operations.',
  chats:             'Chat session metadata + CRUD on the chat list. Distinct from message content (chat_mutation).',
  characters:        'CRUD on characters via `api.characters.*`.',
  personas:          'CRUD on personas via `api.personas.*`.',
  presets:           'CRUD on generation presets + their prompt blocks via `api.presets.*` (parameters, ordered prompt blocks with roles/positions/depth, behavior settings, metadata, plus host-derived category groupings).',
  world_books:       'CRUD on world books and entries via `api.worldInfo.*`.',
  regex_scripts:     'CRUD on regex find/replace scripts via `api.regexScripts.*`.',
  generation:        'Call LLM providers via `api.llm.*`. Also required to register world-info interceptors that touch the assembled prompt.',
  interceptor:       'Register prompt injections (`api.chat.inject`) and content processors (`api.chat.registerContentProcessor`) — anything that mutates host data mid-flight. **Note**: world-info interceptors (`api.worldInfo.registerInterceptor`) are gated by `generation` instead, since they run at prompt-assembly time.',
  context_handler:   'Paired with `interceptor` for `api.chat.inject`. Gates the host\'s context-handler stage where `mode: \'context\'` injections are prepended at index 0 of the assembled prompt. LumiScript declares both by default.',
  macro_interceptor: 'Register macro-resolution interceptors (`api.macros.registerInterceptor`). Performance-sensitive; gated separately from `interceptor`.',
  cors_proxy:        'Outbound HTTP via `api.utils.http.*`. Paired with `allowDangerous` (both gates required).',
  ui_panels:         'Float widgets / dock panels — surfaces that hold their own persistent UI region in the app shell.',
  app_manipulation:  'Gates ONLY `api.ui.dom.*` (DOM injection, `addStyle`, delegation), `api.ui.showAdvancedModal`, and `api.theme.*`. Does NOT gate `api.chats.*` (use `chats`), `api.characters.*` (use `characters`), `api.ui.showContextMenu` (free-tier, system-themed), `api.ui.toast`, `api.ui.pushNotification`, or any other UI primitive — those have their own permissions. Mental model: this is the "script-owns-its-own-shell-pixels" gate.',
  push_notification: 'OS-level push notifications via `api.ui.pushNotification` (delivered when the app is unfocused).',
  ephemeral_storage: 'TTL-bound `api.files.temp*` file storage with auto-expiry.',
  tools:             'Register Council-eligible LLM tools via `api.tools.*`.',
  event_tracking:    'Record + query persistent events via `api.events.*`.',
  databanks:         'CRUD on databanks + their documents via `api.databanks.*` (vectorised reference material attached to global / character / chat scopes).',
  memories:          'Full access to Lumiverse\'s hybrid memory architecture via `api.memories.*` — the Memory Cortex (entity/relation graph, narrative-arc consolidations, salience, vault snapshots, chat interlinks, fused retrieval) and Long-Term Chat Memory (the vectorized chunk store behind the `{{memories}}` macro). Read + write; every chat-scoped call is ownership-checked against the active user.',
  images:            'Persist + retrieve images in Lumiverse\'s image store via `api.images.*`. Returns `ImageInfo` whose `id` can be passed to `api.theme.extractColors`, stored on a character avatar, or attached to a databank document.',
  image_gen:         'Generate images via `api.imageGen.*` against the user\'s configured image-gen connection profiles. Returns `ImageGenResult` with both a base64 data URL (immediate render) and (when persisted) a canonical `imageId` accepted by `api.images.get` / `api.theme.extractColors` / `characters.setAvatar`, plus an auth-free `imageUrl` for push notifications. Provider/connection metadata available for dynamic parameter UIs.',
  oauth:             'OAuth callback handling via `api.oauth.*` — the only inbound-HTTP hook Spindle exposes to extensions. Wrapper is intentionally thin: it covers the callback registration, CSRF state nonce, and the callback URL path. Constructing the authorize URL, exchanging the code for a token, and persisting + refreshing tokens are the script\'s responsibility (pair with `api.utils.http` + `api.enclave`).',
  web_search:        'Run web searches via `api.webSearch.*` against the user\'s configured search provider (e.g. SearXNG). `query` returns ranked results plus optional scraped page content + an assembled context string; `getSettings` exposes the safe provider config (never the API key — only `hasApiKey`).',
};

/**
 * The architectural intro for the trigger-model section of the assistant's
 * cheat-sheet. Explains the editor-UI wiring + body-is-the-handler model.
 *
 * **Important correction (2026-05-12):** earlier versions of this constant
 * called `@triggers` a "comment directive" — that was wrong. Event wiring
 * is editor-UI-only; the host does not parse `@triggers` comments. They
 * are documentary only, with no runtime effect. A future LumiScript version
 * may add a programmatic-subscription API; current versions do not.
 */
export const TRIGGER_MODEL_INTRO: string =
  "**LumiScript does NOT use runtime event subscription.** There is no `api.on()`, no `api.events.on()`, no `api.subscribe()`, no `api.listen()`, no `api.triggers.on()` — and no, you don't write `event.on('message', handler)` either. None of those exist. **Do not lookup_api on any of them.** The paradigm is completely different from Node.js EventEmitter or DOM event listeners.\n\n" +
  '**Event wiring is configured in the editor UI, not in the script source.** When you create or edit a script in LumiScript\'s script editor, an event-selector control lets you pick which Lumiverse events should run this script\'s body. There is no script-side syntax that subscribes — the wiring lives in the script\'s editor config, alongside its name, enabled flag, and binding.\n\n' +
  '**`// @triggers EVENT_NAME[, ...]` in a script header is INFORMATIVE ONLY.** It\'s a comment convention you may write at the top of your script to document which events the script is *intended* to be wired to. The host does not parse it — writing `@triggers` has zero runtime effect. The actual events that fire your script come from the editor-UI wiring, not from this comment. (A future LumiScript version may add a programmatic-subscription API; current versions do not.)\n\n' +
  'When a wired event fires, the **script body itself runs as the handler** — the entire body executes top-to-bottom with the event\'s payload available as the `data` global. No callback, no subscription object, no listener registry. `data.__event` carries the event name (e.g. `"MESSAGE_SENT"`); the rest of `data` is the event-specific payload (see the **Lumiverse Events** section for per-event payload shapes).\n\n' +
  '```js\n' +
  '// Optional documentary comment — has no effect on what triggers the script.\n' +
  '// Actual wiring (e.g. "MESSAGE_SENT, MESSAGE_EDITED") is set in the editor UI.\n' +
  '// @triggers MESSAGE_SENT, MESSAGE_EDITED\n\n' +
  "// The body runs every time a wired event fires.\n" +
  "// `data.__event` identifies which event triggered this invocation;\n" +
  "// the rest of `data` is the event-specific payload.\n" +
  "if (data.__event === 'MESSAGE_SENT') {\n" +
  '  const score = await api.llm.generateStructured(/* ... */);\n' +
  "  await api.databanks.documents.create('reviews-databank-id', {\n" +
  '    data: JSON.stringify(score),\n' +
  '    filename: `score-${data.message.id}.json`,\n' +
  '  });\n' +
  '}\n' +
  '```\n\n' +
  'The full list of available event names + their payload shapes + firing semantics is in the **Lumiverse Events** section below. To make a script react to one of those events, open it in the editor and select the event in the UI.\n\n' +
  '**Execution isolation — every fire is a fresh function scope.** When a wired event fires, the host wraps your script body in a brand-new `AsyncFunction` and invokes it ONCE. Module-scope `let` / `const` / `var` declarations at the top of your script body are LOCAL to that one invocation — they do NOT survive to the next fire of the same script. A pattern like:\n\n' +
  '```js\n' +
  'let bankId = null;\n' +
  "if (data.__event === 'ls:startup')  bankId = await ensureBank();\n" +
  "if (data.__event === 'MESSAGE_SENT' && bankId) { /* ... */ }\n" +
  '```\n\n' +
  '...does NOT work. The `ls:startup` fire writes to `bankId` and returns; the function instance is discarded; the next `MESSAGE_SENT` fire is a fresh `AsyncFunction` invocation with its own brand-new `bankId = null`. The two fires share no local state.\n\n' +
  'For state that needs to survive across fires, pick one of:\n\n' +
  '- **`globalThis.<key>`** — process-scoped, persists for the lifetime of the script-runner subprocess (i.e. until the extension reloads). Cheapest option; ideal for in-memory caches. Example: `globalThis.lsScoringBankId ??= await ensureBank();`. (Note: globalThis values survive *editor saves* too — see the saved memory note about globalThis-cache-invalidation traps if you cache anything keyed on script identity.)\n' +
  '- **`api.variables.{local,global,character,chat}`** — durable JSON-serialised stores with explicit scope semantics. Survives extension reloads.\n' +
  '- **Registered handlers** (`api.macros.register(...)`, `api.tools.register(...)`, `api.chat.registerContentProcessor(...)`, etc.) — these capture closures over the proxy and *do* survive across fires until the script is disabled or deleted. Useful for "subscriber-only" patterns where a script registers a handler in one fire and it fires later from a different source. **`api.broadcast.on(...)` is the one exception**: its subscriptions also persist between fires, but the owning script\'s next run clears them at its START and the body re-registers — so a re-firing script never stacks duplicate listeners, and a fire-once script (e.g. wired to `ls:startup`) keeps them until disabled or deleted.\n\n' +
  '**Common misconception**: "the local variable persists until the extension reloads." It does NOT. Each fire is its own scope. The boundary is per-fire, not per-extension-load.\n\n' +
  "**Three similar-sounding systems, three different problems** — keep them straight:\n\n" +
  "- **Editor-UI event wiring** — react to Lumiverse host *lifecycle* events (MESSAGE_SENT, GENERATION_ENDED, CHAT_CHANGED, ...). Configured per-script in the script editor.\n" +
  "- `api.broadcast.*` — real-time *script-to-script* pub/sub between user scripts running inside the same LumiScript extension. Use for custom in-extension messaging.\n" +
  "- `api.events.*` — *persistent log* of custom events (`track` / `query` / `replay` / `getLatestState`). Use for audit trails, state-resuming scripts, custom analytics. **NOT** for subscribing to host events.\n\n" +
  "**Lifecycle events (`ls:startup` / `ls:teardown` / `ls:reload`).** Three LumiScript-synthetic events that mark script-state transitions. `ls:startup` fires on cold-boot entry into active state (extension boot OR disable→enable transition). `ls:teardown` fires on exit (disable / delete). `ls:reload` fires on hot in-place body refresh (autosave-with-`// @ls:reload-on-edit`-directive OR manual Reload button click). The first two are symmetric subscription events — opt in via the editor's event-picker checkbox. **`ls:reload` is the exception**: it is NOT in the picker — it fires deterministically as a side-effect of the Reload button (always) or the autosave directive (always, for scripts that declared it). Parallel to the Run button: a user action, not a subscription. The body re-runs on all three events; branch on `data.__event` to differentiate handling. **Reload also wipes per-script state** (DOM, modals, widgets, drawer tabs, handler closures, interceptors, injections, ...) BEFORE the body re-runs, while preserving `api.scriptStorage`, `api.theme.*` contributions, and the worker's `script.require()` cache — so an `ls:reload` body run lands into a clean slate equivalent to a fresh `ls:startup`. Use `if (data.__event === \"ls:startup\")` branches for code that should run EXCLUSIVELY on cold boot (default-config seeding, persistent-data migrations) — those fires once per active-state entry, not on every Reload click. To make init code re-run on both events, branch on `(data.__event === \"ls:startup\" || data.__event === \"ls:reload\")` or put it at the top of the body un-gated. v1.0.0-rc.8+ for the wipe semantics.\n\n" +
  "**Sandbox hardening.** The script-runner sandbox locks down host capabilities that user scripts have no business reaching. Two layers gate this:\n\n" +
  "- **Dispatch-time source check.** Scripts containing any of the following patterns are REJECTED before they run; the editor console shows a `[security]` entry naming the rejected pattern:\n" +
  "  - `import('...')` / `await import('...')` — dynamic import. Use `script.require('library-name')` for inter-script dependencies (see the **Built-in Libraries** section).\n" +
  "  - bare `require('...')` — CommonJS-style global require. Same migration: `script.require('library-name')`. Note: `script.require(...)` and method-style `obj.require(...)` are NOT rejected (the source check uses `(?<!\\.)` lookbehind to exclude method access).\n" +
  "  - `new Function('...')` / `Function('...')` — Function constructor. Define functions with normal syntax (`function foo() {}` / `const foo = () => {}`); same lookbehind exempts method-style `obj.Function(...)`.\n" +
  "  - `.constructor.constructor` — prototype-chain access to the Function constructor.\n" +
  "  - literal `globalThis.Bun` / `globalThis[\"Bun\"]` — Bun runtime API. Use `api.utils.http.*` for HTTP, `api.files.*` (with `allowDangerous`) for filesystem.\n" +
  "  - literal `globalThis.process` / `globalThis[\"process\"]` — host process. Use `api.enclave.*` for secrets, never read host env vars from a script.\n\n" +
  "- **Runtime globalThis lockdown.** At subprocess startup, every globalThis property not on the LumiScript allowlist is replaced with `undefined`. `typeof X` returns `'undefined'`; reading `X.method()` throws `TypeError`. Affects: `fetch`, `Worker`, `WebSocket`, `BroadcastChannel`, `XMLHttpRequest`, `EventSource`, `prompt`, `onerror`, `onmessage`, `postMessage`, `removeEventListener`, and Bun-specific Node-compat module globals (`fs`, `http`, `net`, `os`, `tls`, `vm`, `worker_threads`, `child_process`, `ffi`, `sqlite`, etc.). Standard ES built-ins (Object, Array, Promise, JSON, Math, Date, RegExp, Map, Set, etc.), timers (`setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `queueMicrotask`, `structuredClone`), cancellation primitives (`AbortController`, `AbortSignal`), `crypto`, `WebAssembly`, `performance`, `Buffer`, base64 codecs (`atob`, `btoa`), web data carriers (Blob, File, FileReader, FormData, Headers, Request, Response), event types (Event, EventTarget, CustomEvent), and streams (ReadableStream/WritableStream/TransformStream) are all left accessible. The canonical list is `SAFE_GLOBALS` in `src/script-runner/child-entry.ts`.\n\n" +
  "- **Layer-2 setTimeout/setInterval string-form rejection.** `setTimeout` and `setInterval` are whitelisted but monkey-patched to reject the string-form callback (the legacy `setTimeout('foo()', 100)` API that some runtimes still honour). Passing a string throws `TypeError: setTimeout requires a function callback (string form is not supported in the LumiScript sandbox)`. Always pass a function.\n\n" +
  "**Console rate-limit.** Unhandled rejections from a single script are rate-limited to **10 per 60s window**; further rejections drop silently with a `\"N additional rejection(s) were suppressed\"` summary on the next-window rejection. Prevents a runaway loop from filling the editor console + backend stderr with millions of lines. The 10-per-minute cap is intentional — most legitimate scripts produce ≪ 1 rejection/minute under normal operation.";

/**
 * Wrong-path → redirect-message map for `lookup_api`. The assistant's tool
 * returns these as `kind: 'redirect'` envelopes when the model queries a
 * path that doesn't exist but where the *intent* is recoverable.
 *
 * Mechanism: model probes the wrong path, hits an exact-match in the
 * lookup table, gets the redirect as a SUCCESSFUL tool result (`isError:
 * false` — so the model treats it as useful info, not a retry-provoking
 * failure), reads the corrective message, redirects. Turns the model's
 * tool-call instinct against itself.
 *
 * Pattern observation: redirect batches cluster by training-data convention
 * (EventEmitter, React useContext, etc.), not by LumiScript-internal
 * structure. New batches are added as they surface in Q-tests rather than
 * pre-enumerated.
 */
export const REDIRECTS: Record<string, string> = {
  // ─── Event-subscription antipatterns ────────────────────────────────────
  'api.on':
    "`api.on` does not exist. LumiScript does not use runtime event subscription. To make a script react to Lumiverse events, open the script in the editor UI and select the events you want in the event-wiring control — there is no script-source syntax for subscription. The script body then runs as the handler when any wired event fires (with the payload on the `data` global). See the **Trigger model** section.",
  'api.on.message':
    "Not how LumiScript works. There is no `api.on(...)` family. To react to message events, wire the script to `MESSAGE_SENT` (and/or `GENERATION_ENDED` for assistant messages) via the editor UI — there is no script-source subscription syntax. See **Trigger model**.",
  'api.events.on':
    "`api.events.on` is a category error. `api.events.*` is for *recording* custom events (track / query / replay / getLatestState), not for *subscribing* to host events. To make a script react to Lumiverse events, wire it via the editor UI — see **Trigger model**.",
  'api.events.subscribe':
    "Same category error as `api.events.on`. `api.events.*` is for persistent event *tracking*, not subscription. To subscribe to host events, wire the script via the editor UI — see **Trigger model**.",
  'api.broadcast.subscribe':
    "Wrong method. The method on `api.broadcast` for receiving events is `on(event, handler)`, not `subscribe`. BUT note that `api.broadcast` is for inter-script messaging between user scripts, NOT for subscribing to Lumiverse lifecycle events (MESSAGE_SENT etc.). For those, wire the script via the editor UI — see **Trigger model**.",
  'api.broadcast.listen':
    "Wrong method name. Use `api.broadcast.on(event, handler)`. (And if you're trying to react to Lumiverse host events like MESSAGE_SENT, wire the script via the editor UI instead — see **Trigger model**.)",
  'api.subscribe':
    "`api.subscribe` does not exist. LumiScript does not use runtime subscription patterns. To react to Lumiverse events, wire the script via the editor UI — see **Trigger model**.",
  'api.listen':
    "`api.listen` does not exist. LumiScript does not use runtime listener patterns. To react to Lumiverse events, wire the script via the editor UI — see **Trigger model**.",
  'api.triggers':
    "`api.triggers` is not an API namespace. Event wiring lives in the script editor UI, not in script source. The `// @triggers` comment some scripts carry at the top of the source is **informative only** — it documents intent but the host does not parse it. See **Trigger model**.",
  'api.triggers.on':
    "`api.triggers.on` is not real. Event wiring is editor-UI-only — there is no runtime API for subscribing scripts to events. (`// @triggers` in a script header is a documentary comment, not parsed by the host.) See **Trigger model**.",
  'api.trigger':
    "`api.trigger` is not an API namespace. Event wiring is editor-UI-only — there is no runtime API for subscribing scripts to events. (`// @triggers` in a script header is a documentary comment, not parsed by the host.) See **Trigger model**.",

  // ─── Singular/plural typos ──────────────────────────────────────────────
  'api.databank':
    "Singular `api.databank` is not a namespace — try `api.databanks` (plural). Lookup that for the methods + sub-namespace structure.",
  'api.event':
    "Singular `api.event` is not a namespace — try `api.events` (plural). BUT note: `api.events.*` is for *recording* custom events (persistent tracking), not for subscribing to host events. For subscription, see **Trigger model**.",
  'api.character':
    "Singular `api.character` is not a namespace — try `api.characters` (plural).",
  'api.persona':
    "Singular `api.persona` is not a namespace — try `api.personas` (plural).",
  'api.macro':
    "Singular `api.macro` is not a namespace — try `api.macros` (plural).",
  'api.tool':
    "Singular `api.tool` is not a namespace — try `api.tools` (plural).",
  'api.command':
    "Singular `api.command` is not a namespace — try `api.commands` (plural).",
  'api.token':
    "Singular `api.token` is not a namespace — try `api.tokens` (plural).",
  'api.chat.send':
    "Incomplete method name. Try `api.chat.sendMessage`.",

  // ─── Event-name hallucinations (real events live in the Events table) ───
  'MESSAGE_RECEIVED':
    "`MESSAGE_RECEIVED` is not a Lumiverse event. The correct events for incoming messages are `MESSAGE_SENT` (user-initiated sends) and `GENERATION_ENDED` (assistant-side message arrival). Wire the script to one or both via the editor UI (event-wiring control in the script editor — not a script-source directive). See the **Lumiverse Events** table in the cheat-sheet for the full list with firing semantics.",
  'MESSAGE_RECEIVE':
    "`MESSAGE_RECEIVE` is not a Lumiverse event. See the `MESSAGE_RECEIVED` redirect — real events are `MESSAGE_SENT` (user) and `GENERATION_ENDED` (assistant).",
  'MESSAGE_NEW':
    "`MESSAGE_NEW` is not a Lumiverse event. See the `MESSAGE_RECEIVED` redirect — real events are `MESSAGE_SENT` (user) and `GENERATION_ENDED` (assistant).",

  // ─── Context-accessor probes ────────────────────────────────────────────
  // Models reach for a central `api.context` / `getContext()` object out of
  // framework-API training prior (React useContext, Express req.context,
  // etc.). LumiScript doesn't have a unified context accessor — context is
  // composed from multiple primitives depending on what you're after.
  'api.context':
    "There is no unified `api.context` namespace. Context is composed from several primitives depending on what you need: **trigger payload** — the `data` global (already delivered to your script — e.g. `data.chatId`, `data.message`, `data.__event`). **Active chat ID** — `api.chat.getChatId()` (sync, returns string|null). **Full active chat session** — `await api.chats.getActive()` (requires `chats` permission). **Active persona** — `await api.personas.getActive()` (requires `personas`). **Script self-info** — the `script` global (`script.id`, `script.name`, `script.type`). Pick the specific primitive for your need; there's no aggregate object.",
  'api.getContext':
    "`api.getContext` does not exist. LumiScript doesn't have a unified getContext accessor. Use the specific primitive for what you need: trigger payload via the `data` global; active chat ID via `api.chat.getChatId()`; full chat session via `await api.chats.getActive()` (needs `chats` perm); active persona via `await api.personas.getActive()` (needs `personas`); script self-info via the `script` global. See `api.context` redirect note for the full list.",
  'api.ctx':
    "`api.ctx` is not a LumiScript namespace. Context-y data lives across several primitives — see the `api.context` redirect for the full enumeration. Most commonly you want the `data` global (trigger payload, free) or `api.chat.getChatId()` (active chat ID, no permission required).",
  'api.activeContext':
    "`api.activeContext` does not exist. There is no aggregate-context accessor in LumiScript. For trigger payload use the `data` global; for active chat use `api.chat.getChatId()` (sync) or `await api.chats.getActive()` (full session); for active persona use `await api.personas.getActive()`. See the `api.context` redirect for the full list.",
  'api.session':
    "`api.session` is not a namespace. If you want the active chat session, use `await api.chats.getActive()` (requires `chats` permission) — the returned object is a `ChatSession`. If you just want the active chat ID, `api.chat.getChatId()` is sync and permission-free.",
  'api.state':
    "`api.state` does not exist. LumiScript doesn't have a unified app-state accessor — there's no host-settings or app-state read surface exposed to scripts. For script-readable state: variables via `api.variables.*` (four scopes); persistent files via `api.files.*`; script-owned databases via `api.db.*`; trigger payload via the `data` global; script self-info via the `script` global.",

  // ─── Browser globals (scripts run server-side in a Bun subprocess) ──────
  // LumiScript scripts execute in the script-runner subprocess (Bun, server-
  // side), NOT in the user's browser. `window`, `document`, `localStorage`,
  // `navigator`, `location`, browser-default `fetch`, `XMLHttpRequest`,
  // `alert`/`prompt`/`confirm` — none of these exist in the script
  // environment. Models trained on web-frontend code reach for them by
  // default; redirect them to the right LumiScript primitives.
  'window':
    "`window` does not exist in LumiScript. Scripts run in the script-runner Bun subprocess (server-side), not in the user's browser. There is no `window`, no `document`, no `location`. For UI on the user's frontend, use `api.ui.*` primitives — `api.ui.toast` (passive notification), `api.ui.prompt` / `api.ui.confirm` (input modals), `api.ui.showAdvancedModal` (full-content modal), `api.ui.dom.inject` (DOM injection into the host app shell, requires `app_manipulation` permission), `api.ui.pushNotification` (OS-level when app unfocused). For HTTP, use `api.utils.http.*` (requires `cors_proxy` + `allowDangerous`). For storage, use `api.variables.*` or `api.files.*` or `api.enclave` (encrypted).",
  'window.location':
    "`window.location` does not exist in LumiScript — scripts run server-side in a Bun subprocess, not in the user's browser. There is no concept of \"the page's URL\" from the script's perspective. If you need a host-relative URL path (e.g. for OAuth `redirect_uri`), use `api.oauth.getCallbackUrl()` (returns the path, e.g. `/api/spindle-oauth/lumiscript/callback`). Composing the full absolute URL requires knowing the Lumiverse origin — script can't derive that from the runtime; pass it via a config constant in the script, or via `api.variables.global` set by a one-time setup script.",
  'window.location.origin':
    "Same as `window.location` — does not exist server-side. See the `window.location` redirect for the OAuth-redirect-URI pattern.",
  'window.open':
    "`window.open` does not exist in LumiScript (scripts run server-side, not in the user's browser). To prompt the user to navigate to a URL — for OAuth authorize URLs, external dashboards, etc. — surface the URL via a UI primitive: `api.ui.showAdvancedModal({title:'Authorize', items:[{kind:'html', html:'<a href=\"...\" target=\"_blank\">Click to authorize</a>'}]})` (requires `app_manipulation`); or `api.ui.toast('Open this URL: '+url, 'info')` for a passive notice the user can click; or `api.ui.pushNotification('Authorize', url, { url })` (positional: title, body, options) (requires `push_notification`). There is no programmatic browser-tab control from the script side.",
  'document':
    "`document` does not exist in LumiScript — scripts run server-side in a Bun subprocess. For DOM manipulation in the host frontend, use `api.ui.dom.*` (`inject`, `addStyle`, `injectAtMessage`, `delegate`, `cleanup` — all gated on `app_manipulation` permission). The returned `DOMHandle` from `inject` lets you `.update(html)` / `.remove()` / `.on(event, handler)` etc. across the IPC boundary. There is no direct DOM access.",
  'localStorage':
    "`localStorage` does not exist in LumiScript — scripts run server-side. For browser-style key/value storage, use `api.variables.local` (per-chat, transient), `api.variables.global` (per-user, durable), `api.variables.character` (per-character, durable), or `api.variables.chat` (per-chat, durable, persisted in chat metadata). For encrypted secrets specifically, use `api.enclave.*` (AES-256-GCM, per-user-per-extension scoped). All four `api.variables` scopes survive extension reloads.",
  'sessionStorage':
    "`sessionStorage` does not exist in LumiScript — scripts run server-side, there is no browser session. For in-process scope (lifetime of the script-runner subprocess), use `globalThis.<key>`. For durable per-chat scope, `api.variables.local` (transient — wiped on chat close) or `api.variables.chat` (persisted in chat metadata).",
  'fetch':
    "Top-level `fetch` is not available to LumiScript user code (the script-runner subprocess shadows it). Use `api.utils.http.*` — `get(url, opts?)`, `post(url, body, opts?)`, `put`, `delete`, `request(url, opts)`. Requires `cors_proxy` permission AND the per-script `allowDangerous` toggle (the latter is a UI flag in the script-list row, NOT a `spindle.json` field). Responses are capped at 25 MB by the host's CORS proxy.",
  'XMLHttpRequest':
    "`XMLHttpRequest` does not exist in LumiScript (and you wouldn't want it — the API is synchronous-by-default and frontend-only). Use `api.utils.http.*` for HTTP — async Promise-returning helpers, JSON-friendly body strings, `responseType: 'arraybuffer'` for binary. Requires `cors_proxy` + `allowDangerous`.",
  'navigator':
    "`navigator` does not exist in LumiScript — scripts run server-side, there is no user-agent or device context exposed. If you need a user identifier, the host already routes the right user's permissions / variables / etc. to your script based on the active session; there's no need to inspect `navigator`.",
  'alert':
    "`alert` does not exist in LumiScript. For a passive notification: `api.ui.toast(msg, 'info' | 'success' | 'warning' | 'error')`. For a blocking confirm-style dialog: `await api.ui.confirm({ title, message })` returns `{ confirmed: boolean }`. For full-content prompts: `await api.ui.prompt({ title, fields })`. All free-tier (no permission).",
  'prompt':
    "Top-level `prompt` (the browser dialog) does not exist in LumiScript. For input from the user: `await api.ui.prompt({ title, fields: [{ id, label, type, default? }, ...] })` returns `{ values: { [id]: value }, cancelled }`. Free-tier.",
  'confirm':
    "Top-level `confirm` (the browser dialog) does not exist in LumiScript. Use `await api.ui.confirm({ title, message, confirmLabel?, cancelLabel?, danger? })` — returns `{ confirmed: boolean }`. Free-tier.",

  // ─── Sandbox lockdown — rejected patterns ───────────────────────────────
  // The script-runner sandbox hardens the AsyncFunction environment against
  // direct host-capability access. The dispatch-time source check rejects scripts
  // containing literal forms of these patterns; the runtime globalThis
  // lockdown turns most non-whitelisted globals into `undefined`. Models
  // trained on Node / browser code reach for these by default — redirect.
  'globalThis.Bun':
    "`globalThis.Bun` access is rejected at dispatch time; a literal in user-script source produces a `LumiScriptSecurityError` before the script runs. The Bun runtime API is not exposed to user scripts. For the capabilities scripts typically reach for: outbound HTTP — `api.utils.http.*` (requires `cors_proxy` + `allowDangerous`); filesystem — `api.files.*` (per-user / shared / temp tiers, requires `allowDangerous`); subprocess spawn — not available, no replacement (scripts run in a sandboxed Bun subprocess by design); Bun-specific utilities like `deepEquals`, the file-write helper, etc. — use standard JS / pure helpers.",
  'globalThis.process':
    "`globalThis.process` access is rejected at dispatch time. The host process API is not exposed to user scripts — no env vars, no exit, no IPC. For the patterns scripts typically reach for: secrets — `api.enclave.*` (AES-256-GCM encrypted, per-user-per-extension, requires `allowDangerous`); script-self-info — the `script` global (`script.id`, `script.name`, `script.type`); active context — `api.chat.getChatId()` (sync), `await api.chats.getActive()`, `await api.personas.getActive()`. There is no Node-style env-var access in LumiScript — secrets live in the enclave, configuration lives in `api.variables.global` or script source constants.",
  'globalThis.fetch':
    "`globalThis.fetch` is locked at the runtime sandbox boundary — access returns `undefined`. The top-level `fetch` parameter inside an `allowDangerous` script body works (handed in via the AsyncFunction parameter slot), but the recommended path is `api.utils.http.*` (`get` / `post` / `put` / `delete` / `request`), which routes through the host's CORS proxy with SSRF validation + size caps. Requires `cors_proxy` + `allowDangerous`.",
  'new Function':
    "`new Function('...')` and bare `Function('...')` are rejected at dispatch time; the Function constructor is blocked because it would enable runtime-constructed code that bypasses the dispatch-time source check. Define functions with normal syntax — function declarations, function expressions, arrow functions, async variants. The lookbehind in the source check exempts method-style `obj.Function(...)` (rare but valid), so methods on user objects named `Function` are NOT affected.",
  'Function':
    "The `Function` *constructor* is blocked at dispatch — see `new Function`. `Function` as a *value* (`typeof x === 'function'`, `x instanceof Function`) is fine; `Function.prototype.*` access is fine. Only `Function(...)` invocation in source is rejected.",
  'eval':
    "`eval('...')` is not allowed in LumiScript user scripts (the global `eval` is locked at the runtime sandbox boundary — `globalThis.eval` returns `undefined`). There's no use case for `eval` inside a LumiScript script: dynamic code is rejected at dispatch anyway (`new Function` / `import()` / `require()` all blocked), and the canonical replacements are normal JS — function references, dispatch tables, conditional branches.",
  '.constructor.constructor':
    "`x.constructor.constructor(...)` (the prototype-chain path to the `Function` constructor) is rejected at dispatch time. Like `new Function`, this would enable runtime-constructed code that bypasses the source check. Define functions with normal syntax.",
  'import':
    "Dynamic `import('module-name')` is not allowed in LumiScript user scripts — rejected at dispatch time. User scripts can't import Node modules or NPM packages directly. The two legitimate uses of `import`-style loading in LumiScript: (a) inter-script dependencies via `script.require('library-name')` — see the **Built-in Libraries** section; (b) built-in libraries via `script.require('ls:components')` / `script.require('ls:icons')` / `script.require('ls:council-prompt')`. Static `import` declarations at the top of a script body are also a category error — user scripts are bare-top-level bodies (not modules), so `import` syntax is a parse error.",
  'require':
    "Bare `require('module-name')` (CommonJS) is rejected at dispatch time. User scripts can't reach Node modules. **`script.require('library-name')` is the LumiScript library-loading API** (loads user library-scripts or built-in `ls:*` libraries) — the source check uses `(?<!\\.)` lookbehind to exempt method-style access, so `script.require(...)` is NOT rejected. See the **Built-in Libraries** section.",
  'onclick':
    "Inline `onclick=\"...\"` event handlers in HTML strings injected via `api.ui.dom.inject` / `update` / `injectChild` are STRIPPED by DOMPurify. Same for `onerror`, `onload`, `onmouseover`, `onsubmit`, and every other `on*` event-handler attribute. **Replacement**: event delegation via `handle.on(event, fn)` with a `data-*` attribute on the trigger element. See the `api.ui.dom` namespace concept for the canonical pattern and the wrapper-nesting gotcha.",
  'onerror':
    "Same as `onclick`: inline `onerror=\"...\"` handlers in injected HTML are stripped by DOMPurify. Use `handle.on('error', fn)` event delegation. For image-error handling specifically, the pattern is `<img data-image=\"foo\">` + `handle.on('error', (ev) => { if (ev.target.matches('img[data-image]')) ... })`.",
  'onload':
    "Same as `onclick`: inline `onload=\"...\"` handlers in injected HTML are stripped by DOMPurify. Use `handle.on('load', fn)` event delegation. For image-load specifically, `<img data-image=\"foo\">` + `handle.on('load', (ev) => { if (ev.target.matches('img[data-image]')) ... })`.",
};

// ─── Reference tab root ───────────────────────────────────────────────────────

export const ReferenceTab: FC = () => (
  <div className="ls-ref">
    <div className="ls-ref-toolbar">
      <button
        type="button"
        className="ls-ref-export-btn"
        onClick={() => downloadReferenceMarkdown()}
        title="Download the current reference as a Markdown file"
      >
        <Download size={11} />
        Export Markdown
      </button>
    </div>

    <Section icon={<Workflow size={11} />} title="Trigger model" defaultOpen>
      <p style={{ marginBottom: 8 }}>
        <strong>LumiScript does NOT use runtime event subscription.</strong> There is no
        {' '}<Code>api.on()</Code>, no <Code>api.events.on()</Code>, no
        {' '}<Code>api.subscribe()</Code>, no <Code>api.listen()</Code>, no
        {' '}<Code>api.triggers.on()</Code> — and no, you don't write
        {' '}<Code>event.on('message', handler)</Code> either. None of those exist.
        The paradigm is completely different from Node.js EventEmitter or DOM event listeners.
      </p>

      <p style={{ marginBottom: 8 }}>
        <strong>Event wiring is configured in the editor UI, not in the script
        source.</strong> When you create or edit a script, the event-selector control
        in the script editor lets you pick which Lumiverse events run this script's
        body. There is no script-side syntax for subscription — the wiring lives in
        the script's editor config, alongside its name, enabled flag, and binding.
      </p>

      <p style={{ marginBottom: 8 }}>
        <Code>{'// @triggers EVENT_NAME[, ...]'}</Code> <strong>in a script header is
        informative only.</strong> It's a comment convention you may use to document
        which events the script is <em>intended</em> to be wired to. The host does not
        parse it — writing <Code>@triggers</Code> has zero runtime effect. A future
        LumiScript version may add a programmatic-subscription API; current versions
        do not.
      </p>

      <p style={{ marginBottom: 8 }}>
        When a wired event fires, the <strong>script body itself runs as the
        handler</strong> — the entire body executes top-to-bottom with the event's
        payload available as the <Code>data</Code> global. No callback, no subscription
        object, no listener registry. <Code>data.__event</Code> carries the event name
        (e.g. <Code>"MESSAGE_SENT"</Code>); the rest of <Code>data</Code> is the
        event-specific payload (see the <strong>Lumiverse Events</strong> section
        below for per-event payload shapes).
      </p>

      <pre className="ls-ref-pre">{`// Optional documentary comment — has no effect on what triggers the script.
// Actual wiring (e.g. "MESSAGE_SENT, MESSAGE_EDITED") is set in the editor UI.
// @triggers MESSAGE_SENT, MESSAGE_EDITED

// The body runs every time a wired event fires.
// \`data.__event\` identifies which event triggered this invocation;
// the rest of \`data\` is the event-specific payload.
if (data.__event === 'MESSAGE_SENT') {
  const score = await api.llm.generateStructured(/* ... */);
  await api.databanks.documents.create('reviews-databank-id', {
    data: JSON.stringify(score),
    filename: \`score-\${data.message.id}.json\`,
  });
}`}</pre>

      <p style={{ marginBottom: 8, marginTop: 10 }}>
        <strong>Execution isolation — every fire is a fresh function scope.</strong>
        {' '}When a wired event fires, the host wraps your script body in a brand-new
        {' '}<Code>AsyncFunction</Code> and invokes it ONCE. Module-scope
        {' '}<Code>let</Code> / <Code>const</Code> / <Code>var</Code> declarations at
        the top of your body are LOCAL to that one invocation — they do NOT survive
        to the next fire of the same script. A pattern like
        {' '}<Code>{'let bankId = null;'}</Code> at the top followed by branching on
        {' '}<Code>data.__event</Code> does <strong>not</strong> work; the two fires
        share no local state. For state that needs to persist across fires:
      </p>

      <ul style={{ marginBottom: 8, paddingLeft: 18 }}>
        <li>
          <Code>{'globalThis.<key>'}</Code> — process-scoped, persists for the
          lifetime of the script-runner subprocess (i.e. until the extension reloads).
          Cheapest option; ideal for in-memory caches.
        </li>
        <li>
          <Code>{'api.variables.{local,global,character,chat}'}</Code> — durable
          JSON-serialised stores with explicit scope semantics. Survive extension
          reloads.
        </li>
        <li>
          Registered handlers (<Code>api.macros.register</Code>,
          {' '}<Code>api.tools.register</Code>,
          {' '}<Code>api.chat.registerContentProcessor</Code>, …) — capture closures
          over the proxy and survive across fires until the script is disabled or
          deleted. Useful for "subscriber-only" patterns where a script registers a
          handler in one fire and it fires later from a different source.
          {' '}<Code>api.broadcast.on</Code> is the exception — subscriptions persist
          between fires too, but the next run of the owning script clears them at its
          start and the body re-registers, so re-firing never stacks duplicates while
          a fire-once script keeps them until disabled or deleted.
        </li>
      </ul>

      <p style={{ marginBottom: 8 }}>
        <strong>Three similar-sounding systems, three different problems</strong> —
        keep them straight:
      </p>

      <ul style={{ marginBottom: 8, paddingLeft: 18 }}>
        <li>
          <strong>Editor-UI event wiring</strong> — react to Lumiverse host
          {' '}<em>lifecycle</em> events (MESSAGE_SENT, GENERATION_ENDED,
          {' '}CHAT_CHANGED, …). Configured per-script in the script editor.
        </li>
        <li>
          <Code>api.broadcast.*</Code> — real-time <em>script-to-script</em> pub/sub
          between user scripts running inside the same LumiScript extension. Use for
          custom in-extension messaging.
        </li>
        <li>
          <Code>api.events.*</Code> — <em>persistent log</em> of custom events
          ({' '}<Code>track</Code> / <Code>query</Code> / <Code>replay</Code> /
          {' '}<Code>getLatestState</Code>). Use for audit trails, state-resuming
          scripts, custom analytics. <strong>NOT</strong> for subscribing to host
          events.
        </li>
      </ul>

      <p className="ls-ref-muted" style={{ marginTop: 10 }}>
        The script-runner sandbox enforces dispatch-time + runtime guards on what
        scripts can reach — see the <strong>Sandbox hardening</strong> section below
        for the full layer-by-layer breakdown. Unhandled rejections from a single
        script are rate-limited to <strong>10 per 60s window</strong>; further
        rejections drop silently with a summary count on the next-window rejection.
      </p>
    </Section>

    <Section icon={<Zap size={11} />} title="Lumiverse Events">
      <EventsTable />
    </Section>

    <Section icon={<Lock size={11} />} title="Permission Matrix">
      <PermsTable />
    </Section>

    <Section icon={<Shield size={11} />} title="Sandbox hardening">
      <p className="ls-ref-muted" style={{ marginBottom: 8 }}>
        The script-runner subprocess locks down host capabilities that user
        scripts have no business reaching. Two layers gate this — both are
        always on; there is no per-script opt-out. Cross-references:
        the <Code>app_manipulation</Code> and <Code>cors_proxy</Code>
        permissions in the <strong>Permission Matrix</strong> are how
        scripts <em>opt in</em> to specific surfaces that the sandbox
        otherwise denies.
      </p>

      <p style={{ marginBottom: 6, marginTop: 8 }}>
        <strong>Layer 1 — dispatch-time source check.</strong> Scripts
        containing any of the patterns below are <strong>rejected before
        they run</strong>; the editor console shows
        a <Code>[security]</Code> entry naming the rejected pattern.
      </p>
      <SandboxRejectedPatternsTable />

      <p style={{ marginBottom: 6, marginTop: 14 }}>
        <strong>Layer 2 — runtime <Code>globalThis</Code> lockdown.</strong> At
        subprocess startup, every <Code>globalThis</Code> property NOT on
        the allowlist below is replaced with <Code>undefined</Code>. Reading
        a locked global returns <Code>undefined</Code> (so
        {' '}<Code>typeof X === 'undefined'</Code> evaluates naturally for
        feature-detect paths); reaching through to a method throws
        {' '}<Code>TypeError: Cannot read properties of undefined</Code>.
      </p>
      <SandboxAccessibleGlobalsTable />
      <p className="ls-ref-muted" style={{ marginTop: 8 }}>
        Notable globals that are <em>not</em> on the allowlist (representative,
        not exhaustive): <Code>fetch</Code> (use <Code>api.utils.http.*</Code>),
        {' '}<Code>Worker</Code>, <Code>WebSocket</Code>, <Code>EventSource</Code>,
        {' '}<Code>BroadcastChannel</Code>, <Code>XMLHttpRequest</Code>, browser
        dialogs (<Code>alert</Code> / <Code>prompt</Code> / <Code>confirm</Code>),
        and Node-compat module globals reached via <Code>globalThis</Code>
        {' '}(<Code>fs</Code>, <Code>http</Code>, <Code>net</Code>,
        {' '}<Code>tls</Code>, <Code>vm</Code>, <Code>worker_threads</Code>,
        {' '}<Code>child_process</Code>, <Code>sqlite</Code>, etc.). The canonical
        list of accessible globals is <Code>SAFE_GLOBALS</Code>
        {' '}in <Code>src/script-runner/child-entry.ts</Code>.
      </p>
    </Section>

    <Section icon={<Radio size={11} />} title="LumiScript Events">
      <BroadcastTable />
      <p className="ls-ref-muted" style={{ marginTop: 6 }}>
        The <Code>ls:</Code> prefix is reserved for LumiScript engine events.
        Use any other name for custom events between scripts.
      </p>
    </Section>

    <Section icon={<AtSign size={11} />} title="Directives">
      <p className="ls-ref-muted" style={{ marginBottom: 8 }}>
        Runtime directives are special <Code>// @ls:&lt;name&gt;</Code> comments that
        change how the runtime treats your script. The <Code>@ls:</Code> prefix
        distinguishes them from passive frontmatter tags like <Code>@description</Code>
        or <Code>@author</Code> (read by humans + pack tooling but inert at runtime).
        Place anywhere at line start in the script source.
      </p>
      <DirectivesTable />
    </Section>

    <Section icon={<Hash size={11} />} title="LumiScript Macros">
      <LumiScriptMacrosTable />
      <p className="ls-ref-muted" style={{ marginTop: 6 }}>
        Character variable macros read from and write to the active character's
        store at <Code>{'variables/characters/<id>.json'}</Code> in user storage.
        They resolve to <Code>""</Code> when no character is active.
      </p>
    </Section>

    <Section icon={<Braces size={11} />} title="Key Types">
      <KeyTypesTable />
    </Section>

    <Section icon={<List size={11} />} title="API Functions">
      <ApiFunctionsTable />
    </Section>

    <Section icon={<Blocks size={11} />} title="Built-in Libraries">
      <BuiltinLibrariesSection />
    </Section>

    <Section icon={<Package size={11} />} title="Script Packs">
      <p className="ls-ref-muted">
        <strong>Export</strong> — click the <Code>↓</Code> button in the script list header to
        download the currently filtered scripts as a <Code>.lumiscript.zip</Code> file.
        The pack contains a <Code>pack.json</Code> with script names, code, triggers,
        bindings, folders, and metadata. IDs, timestamps, enabled state, and
        the allowDangerous flag are <em>not</em> included.
      </p>
      <p className="ls-ref-muted" style={{ marginTop: 6 }}>
        <strong>Import</strong> — click the <Code>↑</Code> button to pick a <Code>.lumiscript.zip</Code>.
        After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack),
        a confirmation dialog shows the script list. Imported scripts are always created
        with <Code>enabled: false</Code> and <Code>allowDangerous: false</Code> — review and enable
        them manually.
      </p>
    </Section>
  </div>
);
