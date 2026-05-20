# LumiScript API Cheat-Sheet

> Auto-generated from `src/components/reference/ReferenceTab.tsx` and `src/types/editor-lib.ts` by `scripts/gen-assistant-corpus.ts`. Do not edit by hand — re-run `bun run gen:corpus` instead.

> For deeper detail (full TS signature, examples, see-also), call the `lookup_api(method)` tool with the fully-qualified method name from any table below.

## Globals

Bindings available in every script body:

- `api` — full LumiScript API surface (`api.chat`, `api.llm`, `api.utils`, ...). See sections below.
- `script` — script self-info and built-in library loader. `script.id`, `script.name`, `script.type`, `script.require(name)`.
- `z` — [Zod](https://zod.dev) schema builder. Use for `api.llm.generateStructured(messages, schema)`.
- `data` — trigger-event payload object. The triggering event is identified by `data.__event` (e.g. `"MESSAGE_SENT"`). Shape varies per event — see the **Events** section.
- `console` — log to the LumiScript console panel. Standard `log`, `warn`, `error` methods.

## Trigger model

**LumiScript does NOT use runtime event subscription.** There is no `api.on()`, no `api.events.on()`, no `api.subscribe()`, no `api.listen()`, no `api.triggers.on()` — and no, you don't write `event.on('message', handler)` either. None of those exist. **Do not lookup_api on any of them.** The paradigm is completely different from Node.js EventEmitter or DOM event listeners.

**Event wiring is configured in the editor UI, not in the script source.** When you create or edit a script in LumiScript's script editor, an event-selector control lets you pick which Lumiverse events should run this script's body. There is no script-side syntax that subscribes — the wiring lives in the script's editor config, alongside its name, enabled flag, and binding.

**`// @triggers EVENT_NAME[, ...]` in a script header is INFORMATIVE ONLY.** It's a comment convention you may write at the top of your script to document which events the script is *intended* to be wired to. The host does not parse it — writing `@triggers` has zero runtime effect. The actual events that fire your script come from the editor-UI wiring, not from this comment. (A future LumiScript version may add a programmatic-subscription API; current versions do not.)

When a wired event fires, the **script body itself runs as the handler** — the entire body executes top-to-bottom with the event's payload available as the `data` global. No callback, no subscription object, no listener registry. `data.__event` carries the event name (e.g. `"MESSAGE_SENT"`); the rest of `data` is the event-specific payload (see the **Events** section for per-event payload shapes).

```js
// Optional documentary comment — has no effect on what triggers the script.
// Actual wiring (e.g. "MESSAGE_SENT, MESSAGE_EDITED") is set in the editor UI.
// @triggers MESSAGE_SENT, MESSAGE_EDITED

// The body runs every time a wired event fires.
// `data.__event` identifies which event triggered this invocation;
// the rest of `data` is the event-specific payload.
if (data.__event === 'MESSAGE_SENT') {
  const score = await api.llm.generateStructured(/* ... */);
  await api.databanks.documents.create('reviews-databank-id', {
    data: JSON.stringify(score),
    filename: `score-${data.message.id}.json`,
  });
}
```

The full list of available event names + their payload shapes + firing semantics is in the **Events** section below. To make a script react to one of those events, open it in the editor and select the event in the UI.

**Execution isolation — every fire is a fresh function scope.** When a wired event fires, the host wraps your script body in a brand-new `AsyncFunction` and invokes it ONCE. Module-scope `let` / `const` / `var` declarations at the top of your script body are LOCAL to that one invocation — they do NOT survive to the next fire of the same script. A pattern like:

```js
let bankId = null;
if (data.__event === 'ls:startup')  bankId = await ensureBank();
if (data.__event === 'MESSAGE_SENT' && bankId) { /* ... */ }
```

...does NOT work. The `ls:startup` fire writes to `bankId` and returns; the function instance is discarded; the next `MESSAGE_SENT` fire is a fresh `AsyncFunction` invocation with its own brand-new `bankId = null`. The two fires share no local state.

For state that needs to survive across fires, pick one of:

- **`globalThis.<key>`** — process-scoped, persists for the lifetime of the script-runner subprocess (i.e. until the extension reloads). Cheapest option; ideal for in-memory caches. Example: `globalThis.lsScoringBankId ??= await ensureBank();`. (Note: globalThis values survive *editor saves* too — see the saved memory note about globalThis-cache-invalidation traps if you cache anything keyed on script identity.)
- **`api.variables.{local,global,character,chat}`** — durable JSON-serialised stores with explicit scope semantics. Survives extension reloads.
- **Registered handlers** (`api.broadcast.on(event, handler)`, `api.macros.register(...)`, `api.tools.register(...)`, `api.chat.registerContentProcessor(...)`, etc.) — these capture closures over the proxy and *do* survive across fires until the script is disabled or deleted. Useful for "subscriber-only" patterns where a script registers a handler in one fire and that handler fires later from a different source.

**Common misconception**: "the local variable persists until the extension reloads." It does NOT. Each fire is its own scope. The boundary is per-fire, not per-extension-load.

**Three similar-sounding systems, three different problems** — keep them straight:

- **Editor-UI event wiring** — react to Lumiverse host *lifecycle* events (MESSAGE_SENT, GENERATION_ENDED, CHAT_CHANGED, ...). Configured per-script in the script editor.
- `api.broadcast.*` — real-time *script-to-script* pub/sub between user scripts running inside the same LumiScript extension. Use for custom in-extension messaging.
- `api.events.*` — *persistent log* of custom events (`track` / `query` / `replay` / `getLatestState`). Use for audit trails, state-resuming scripts, custom analytics. **NOT** for subscribing to host events.

**Sandbox hardening (v1.0.0-rc.7+).** The script-runner sandbox locks down host capabilities that user scripts have no business reaching. Two layers gate this:

- **Dispatch-time source check.** Scripts containing any of the following patterns are REJECTED before they run; the editor console shows a `[security]` entry naming the rejected pattern:
  - `import('...')` / `await import('...')` — dynamic import. Use `script.require('library-name')` for inter-script dependencies (see the **Libraries** section).
  - bare `require('...')` — CommonJS-style global require. Same migration: `script.require('library-name')`. Note: `script.require(...)` and method-style `obj.require(...)` are NOT rejected (the source check uses `(?<!\.)` lookbehind to exclude method access).
  - `new Function('...')` / `Function('...')` — Function constructor. Define functions with normal syntax (`function foo() {}` / `const foo = () => {}`); same lookbehind exempts method-style `obj.Function(...)`.
  - `.constructor.constructor` — prototype-chain access to the Function constructor.
  - literal `globalThis.Bun` / `globalThis["Bun"]` — Bun runtime API. Use `api.utils.http.*` for HTTP, `api.files.*` (with `allowDangerous`) for filesystem.
  - literal `globalThis.process` / `globalThis["process"]` — host process. Use `api.enclave.*` for secrets, never read host env vars from a script.

- **Runtime globalThis lockdown.** At subprocess startup, every globalThis property not on the LumiScript allowlist is replaced with `undefined`. `typeof X` returns `'undefined'`; reading `X.method()` throws `TypeError`. Affects: `fetch`, `Worker`, `WebSocket`, `BroadcastChannel`, `XMLHttpRequest`, `EventSource`, `prompt`, `onerror`, `onmessage`, `postMessage`, `removeEventListener`, and Bun-specific Node-compat module globals (`fs`, `http`, `net`, `os`, `tls`, `vm`, `worker_threads`, `ffi`, `sqlite`, etc.). Standard ES built-ins (Object, Array, Promise, JSON, Math, Date, RegExp, Map, Set, etc.), web data carriers (Blob, File, FileReader, FormData, Headers, Request, Response), event types (Event, EventTarget, CustomEvent), streams (Readable/Writable/Transform), and Web Crypto are all left accessible.

**Console rate-limit.** Unhandled rejections from a single script are rate-limited to **10 per 60s window**; further rejections drop silently with a `"N additional rejection(s) were suppressed"` summary on the next-window rejection. Prevents a runaway loop from filling the editor console + backend stderr with millions of lines. The 10-per-minute cap is intentional — most legitimate scripts produce ≪ 1 rejection/minute under normal operation.

## Permission model

**DO NOT WRITE `// @permissions` OR `// @permission` IN YOUR SCRIPT.** Neither is a LumiScript directive. **LumiScript does not parse ANY script-header directives currently** — including `// @triggers`, which despite the name is purely a documentary comment with no runtime effect (event wiring happens in the editor UI; see the **Trigger model** section). Writing `@permissions` or `@permission` in a script header is a **no-op** — it looks like it grants permissions but actually does nothing; your script will then fail at runtime when it calls a gated method. This is the single most common script-permission-bug we see; if you find yourself reaching for an `@permission` directive, stop and re-read this section.

How permissions actually work: LumiScript permissions are declared **at the extension level** in `spindle.json` and granted once by the user when the extension is enabled. **There are no per-script permission declarations** — every script inside the LumiScript extension shares the same grant set. The user (not the script author) controls what's granted. (Earlier mental models à la SillyTavern, where each script declares its own perms, do NOT apply here.)

**Permissions gate `api.*` method calls, NOT the `data` trigger global.** Reading `data.message.content` from a `MESSAGE_SENT` trigger does NOT require `chat_mutation` — the host already routed the event payload to your script for free. Permissions only kick in when your script reaches back through the API (e.g. `api.chat.getMessages`, `api.chat.editMessage`). Don't list a permission unless your script actually calls a gated method.

**`allowDangerous` is SEPARATE** — it's a per-script LumiScript-level UI toggle (in the script-list row), NOT a Spindle permission. It gates a **fixed set of surfaces**: outbound HTTP (`api.utils.http.*`), encrypted secrets (`api.enclave.*`), file I/O (`api.files.*`), and `api.chat.clearAllInjections`. **It does NOT gate any other surface.** Raw image bytes (`api.characters.setAvatar`, `api.images.upload`), DOM injection (`api.ui.dom.*`), theme manipulation (`api.theme.*`), character mutations (`api.characters.update`), OAuth callbacks (`api.oauth.*`), image generation (`api.imageGen.*`), and every other gated method flow through their own dedicated Spindle permissions only — no `allowDangerous` toggle required. If you find yourself reaching for `allowDangerous` to "unlock" a surface that isn't on the fixed list above, stop: the surface is gated by its own permission instead. When a method's permission tag below shows `[X, + allowDangerous]`, BOTH gates must be on: the extension must have permission `X` granted AND the calling script must have `allowDangerous` toggled on.

| Permission | What it gates |
|---|---|
| `app_manipulation` | Gates ONLY `api.ui.dom.*` (DOM injection, `addStyle`, delegation), `api.ui.showAdvancedModal`, `api.ui.showContextMenu`, and `api.theme.*`. Does NOT gate `api.chats.*` (use `chats`), `api.characters.*` (use `characters`), `api.ui.toast`, `api.ui.pushNotification`, or any other UI primitive — those have their own permissions. Mental model: this is the "script-owns-its-own-shell-pixels" gate. |
| `characters` | CRUD on characters via `api.characters.*`. |
| `chat_mutation` | Read / send / edit / delete chat messages. Required for most `api.chat.*` operations. |
| `chats` | Chat session metadata + CRUD on the chat list. Distinct from message content (chat_mutation). |
| `cors_proxy` | Outbound HTTP via `api.utils.http.*`. Paired with `allowDangerous` (both gates required). |
| `databanks` | CRUD on databanks + their documents via `api.databanks.*` (vectorised reference material attached to global / character / chat scopes). |
| `ephemeral_storage` | TTL-bound `api.files.temp*` file storage with auto-expiry. |
| `event_tracking` | Record + query persistent events via `api.events.*`. |
| `generation` | Call LLM providers via `api.llm.*`. Also required to register world-info interceptors that touch the assembled prompt. |
| `image_gen` | Generate images via `api.imageGen.*` against the user's configured image-gen connection profiles. Returns `ImageGenResult` with both a base64 data URL (immediate render) and (when persisted) a canonical `imageId` accepted by `api.images.get` / `api.theme.extractColors` / `characters.setAvatar`, plus an auth-free `imageUrl` for push notifications. Provider/connection metadata available for dynamic parameter UIs. |
| `images` | Persist + retrieve images in Lumiverse's image store via `api.images.*`. Returns `ImageInfo` whose `id` can be passed to `api.theme.extractColors`, stored on a character avatar, or attached to a databank document. |
| `interceptor` | Register prompt injections, content processors, world-info interceptors — anything that mutates host data mid-flight. |
| `macro_interceptor` | Register macro-resolution interceptors (`api.macros.registerInterceptor`). Performance-sensitive; gated separately from `interceptor`. |
| `oauth` | OAuth callback handling via `api.oauth.*` — the only inbound-HTTP hook Spindle exposes to extensions. Wrapper is intentionally thin: it covers the callback registration, CSRF state nonce, and the callback URL path. Constructing the authorize URL, exchanging the code for a token, and persisting + refreshing tokens are the script's responsibility (pair with `api.utils.http` + `api.enclave`). |
| `personas` | CRUD on personas via `api.personas.*`. |
| `presets` | CRUD on generation presets + their prompt blocks via `api.presets.*` (parameters, ordered prompt blocks with roles/positions/depth, behavior settings, metadata, plus host-derived category groupings). |
| `push_notification` | OS-level push notifications via `api.ui.pushNotification` (delivered when the app is unfocused). |
| `regex_scripts` | CRUD on regex find/replace scripts via `api.regexScripts.*`. |
| `tools` | Register Council-eligible LLM tools via `api.tools.*`. |
| `ui_panels` | Float widgets / dock panels — surfaces that hold their own persistent UI region in the app shell. |
| `world_books` | CRUD on world books and entries via `api.worldInfo.*`. |

## api.chat

| Method | Args | Description |
|---|---|---|
| async `getMessages` | options? | Get messages in the current chat. Pass { last: N } for the N most recent. [chat_mutation] |
| async `sendMessage` | content, options? | Append a new message. Options: role, metadata. [chat_mutation] |
| async `editMessage` | id, contentOrPatch | Edit a message by ID. Pass a string to replace the active swipe's content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED. [chat_mutation] |
| async `deleteMessage` | id | Delete a message by ID. [chat_mutation] |
| `getChatId` | — | Return the active chat ID, or null. |
| async `getMetadata` | key | Get a metadata value from the current chat. [chats] |
| async `setMetadata` | key, value | Set a metadata key (read-modify-write). [chats] |
| `inject` | id, content, options? | Register a prompt injection. Options: mode, role, depth, ephemeral. [interceptor] |
| `removeInjection` | id | Remove one injection by ID. |
| `getInjections` | — | List all active injections across all scripts. |
| `clearInjections` | — | Remove all injections from this script. [interceptor] |
| `clearAllInjections` | — | Remove ALL injections across all scripts. [interceptor, + allowDangerous] |
| `registerContentProcessor` | handler, options? | Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation. [chat_mutation] |
| `listContentProcessors` | — | List all currently registered message content processors across all scripts. |
| async `setMessageHidden` | id, hidden | Mark a single message as hidden or visible. Hidden messages are excluded from vector retrieval but still included in prompt assembly. Toggle pattern: pass `true` to hide, `false` to unhide. Persists on the message — survives reloads. Requires chat_mutation permission. [chat_mutation] |
| async `setMessagesHidden` | ids, hidden | Bulk variant of `setMessageHidden`. Max 500 IDs per call. Same hidden-flag semantics (excluded from vector retrieval, still included in prompt assembly). Requires chat_mutation permission. [chat_mutation] |
| async `isMessageHidden` | id | Check whether a message is hidden. Returns false for messages that have never had the flag set (default state). Requires chat_mutation permission. [chat_mutation] |

## api.llm

| Method | Args | Description |
|---|---|---|
| async `generate` | messages, options? | Generate a text response from the LLM. [generation] |
| async `generateStructured` | messages, schema, options? | Generate and parse a structured JSON response against a Zod or JSON Schema. [generation] |
| async `generateWithTools` | messages, tools, options?, schema? | Generate with tool schemas. Returns text or function calls for an agentic loop. [generation] |
| async `dryRun` | options? | Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats. [generation] |

## api.variables.local / api.variables.global / api.variables.character / api.variables.chat

_The same method set applies to each of the 4 namespaces above._

> **Concepts:** Four scopes with identical method surface (get / set / delete / has / clear). `local` is per-script and transient between trigger fires. `global` is extension-wide, persists across scripts. `character` follows the active character UUID. `chat` follows the active chat UUID. The `character` and `chat` scopes auto-resolve from the active context — no need to pass the UUID explicitly.

| Method | Args | Description |
|---|---|---|
| async `get` | key, defaultValue? | Get a variable. Returns defaultValue if the key does not exist. |
| async `set` | key, value | Set a variable (JSON-serialized). |
| async `delete` | key | Delete a variable. Returns true if it existed. |
| async `has` | key | Check if a variable exists. |
| async `clear` | — | Delete all variables in this store. |

## api.json

| Method | Args | Description |
|---|---|---|
| `parse` | text | Parse a JSON string. Throws on invalid JSON. |
| `stringify` | data, pretty? | Serialize to JSON. Pass true for formatted output. |
| `clone` | data | Deep clone a value. |
| `get` | data, path, defaultValue? | Get a nested value by dot-path (e.g. "user.address.city"). |
| `set` | data, path, value | Set a nested value by dot-path. |
| `merge` | ...objects | Deep merge objects. Later arguments override earlier ones. |
| `isValid` | text | Check if a string is valid JSON. |
| `filter` | data, predicate | Filter an array by predicate. |
| `sort` | data, key, direction? | Sort array by key (asc or desc). |
| `uniq` | data | Deduplicate array. |
| `flatten` | data | Flatten a nested array. |
| `query` | data, queryString | Run a jsonquery pipeline (jq-like). See jsonquerylang.org. |

## api.utils

| Method | Args | Description |
|---|---|---|
| `uuid` | — | Generate a UUID v4 string. Cryptographically random (uses crypto.randomUUID). |
| `shortId` | — | Generate a short random ID (8 chars, URL-safe). Cryptographically random (derived from crypto.randomUUID). |
| async `wait` | ms | Pause execution for ms milliseconds. |
| `random.int` | min, max | Random integer in [min, max] inclusive. **NOT cryptographically secure** — uses Math.random for gameplay/UI use cases. For tokens or security-sensitive identifiers use api.utils.uuid / shortId or globalThis.crypto.getRandomValues. |
| `random.float` | min, max | Random float in [min, max). **NOT cryptographically secure** (Math.random — see random.int). |
| `random.pick` | array | Pick a random element from an array. **NOT cryptographically secure** (Math.random — see random.int). |
| `random.bool` | — | Random true/false. **NOT cryptographically secure** (Math.random — see random.int). |
| `random.chance` | probability | Returns true with probability p (0–1). **NOT cryptographically secure** (Math.random — see random.int). |
| `random.shuffle` | array | Return a shuffled copy of the array. **NOT cryptographically secure** (Math.random — see random.int). |
| async `http.get` | url, options? | GET request via cors_proxy. Requires allowDangerous. [cors_proxy, + allowDangerous] |
| async `http.post` | url, body, options? | POST request via cors_proxy. Requires allowDangerous. [cors_proxy, + allowDangerous] |
| async `http.put` | url, body, options? | PUT request via cors_proxy. Requires allowDangerous. [cors_proxy, + allowDangerous] |
| async `http.delete` | url, options? | DELETE request via cors_proxy. Requires allowDangerous. [cors_proxy, + allowDangerous] |
| async `http.request` | url, options | Custom HTTP request via cors_proxy. Requires allowDangerous. [cors_proxy, + allowDangerous] |
| async `template.render` | template, data?, options? | Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>. |
| `template.compile` | template | Pre-compile a Handlebars template for sync reuse. No macro resolution. |
| `template.registerHelper` | name, fn | Register a custom Handlebars helper scoped to this script. |
| async `macros.resolve` | template, options? | Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>. |
| `image.detectMime` | bytes | Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType. |
| `image.dataUrlToBytes` | url | Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs. |
| `image.bytesToDataUrl` | bytes, mimeType | Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar. |

## api.ui

| Method | Args | Description |
|---|---|---|
| `toast` | message, type?, options? | Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration. |
| async `prompt` | message, defaultValue?, options? | Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline. |
| async `confirm` | message, title?, options? | Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel. |
| `showModal` | items, options | Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent. |
| `showAdvancedModal` | options | Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation. [app_manipulation] |
| async `showContextMenu` | options | Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier. |
| `registerInputBarAction` | options | Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier. |
| `createFloatWidget` | options | Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels. [ui_panels] |
| `registerDrawerTab` | options | Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier. |
| async `editText` | title?, value?, options? | Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder. |
| async `pushNotification` | title, body, options? | Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification. [push_notification] |
| async `getPushStatus` | — | Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification. [push_notification] |

## api.ui.dom

> **Concepts:** DOM injection surface. `inject(target, html, position?)` returns a `DOMHandle`; subsequent calls go through the handle (`update`, `remove`, `on`, `injectChild`, `read`, `makeDraggable`). `addStyle(css)` adds a scoped stylesheet (wrapped in `@scope ([data-ls-script="<id>"])` — only matches script-injected DOM, doesn't cascade into the host app shell). `injectAtMessage(messageId, html, options?)` attaches DOM to a specific chat message (header, before, after, footer positions). `delegate(selector, event, handler, options?)` (v0.27.1+) installs a capture-phase event-delegated listener at a known root — use to react to events on host DOM you didn't inject (e.g. LLM-emitted interactive elements inside `.mes_text` content). `cleanup()` removes ALL of this script's DOM in one call. Requires `app_manipulation` permission.

**HTML sanitisation (v1.0.0-rc.7+).** Every HTML payload — `inject`, `update`, `injectChild`, `injectAtMessage` — is run through DOMPurify with strict defaults plus `FORBID_TAGS: ['iframe', 'frame', 'object', 'embed', 'form']` (matching the host's three-layer CSP+DOMPurify+X-Frame-Options policy from commit `dd6d7cd3`). DOMPurify defaults strip all `on*` event handler attributes (`onclick`, `onerror`, `onload`, `onmouseover`, etc.), `<script>` tags, `javascript:` URLs, `data:` URLs on dangerous elements, the `formaction` attribute, and other XSS vectors. **When content is stripped, the affected script's editor console gets a `[security]` entry** naming what was removed (deprecation aid: tells you why your `<button onclick="...">` button stopped working).

**Event handler migration — inline → delegation.** Pre-rc.7 some scripts attached behaviour via inline `onclick="someFn()"` in `update()` HTML. Post-rc.7 those handlers are silently stripped. The replacement is `DOMHandle.on(event, handler)` event delegation with a `data-*` attribute on the trigger element:

```js
// Pre-rc.7 (handler now stripped, button does nothing):
handle.update('<button onclick="doThing()">Click</button>');

// rc.7+ (recommended):
handle.update('<button data-action="do-thing">Click</button>');
handle.on('click', (ev) => {
  if (ev.target.dataset.action !== 'do-thing') return;
  // ...do thing
});
```

The delegation reads `event.target.dataset.action` (not a `closest()` walk), so when the visible button content is bigger than its padded text area (icon SVG, `<img>`, decorative `<span>`), the click target can be the inner element — which lacks the `data-*` attribute, so the handler silently no-ops. Standard fix: `pointer-events: none` on the decorative inner content so clicks pass through to the button itself.

**Read access (v1.0.0-rc.6+).** `handle.read(options?)` returns a `SerializedDOMElement` snapshot of the bound element — `tag`, `attrs` (with internal `data-ls-*` and `data-spindle-ext` stripped), `text`, `childCount`, plus optional `html` for the inner markup. Async because it awaits a frontend roundtrip. Multi-root or text-only injections return the LumiScript wrapper snapshot; single-root injections return the user's element directly. Returns `null` if the element vanished on the frontend (live DOM raced ahead of script logic) — distinct from `DomHandleReleasedError` which throws after `handle.remove()`.

**Spindle wrapper nesting (gotcha).** `ctx.dom.inject` wraps every payload in a Spindle wrapper `<div data-spindle-ext>` containing a LumiScript wrapper `<div data-ls-el data-ls-script>` containing your HTML. Two levels of wrapper sit ABOVE your root element. Code that walks down to the user's root must do `wrapper.firstElementChild?.firstElementChild`. The `data-ls-script` attribute is what `addStyle`'s `@scope` rules match.

| Method | Args | Description |
|---|---|---|
| `inject` | target, html, options? | Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation. [app_manipulation] |
| `injectAtMessage` | messageId, html, options? | Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation. [app_manipulation] |
| `addStyle` | css | Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation. [app_manipulation] |
| `delegate` | selector, event, handler, options? | Attach an event-delegated listener at a known root, matching descendants by CSS selector. Lets scripts react to clicks/changes on DOM the script didn't inject — e.g. interactive elements emitted by the LLM in chat-message content. Single host-side capture listener per (root, event) tuple regardless of how many scripts subscribe; selector matching happens frontend-side via event.target.closest(). Default scope (options.root: "chat") restricts matching to chat content; "document" matches anywhere on the page. Returns an unsubscribe function. v0.27.1+. Requires app_manipulation. [app_manipulation] |
| `cleanup` | — | Remove all DOM injections, styles, and delegations created by this script. Requires app_manipulation. [app_manipulation] |

## api.files

> **Concepts:** Three storage tiers, each with its own method-name prefix. `user*` is per-user persistent (survives extension reload, scoped to the active user). `shared*` is extension-wide persistent (shared across users). `temp*` is TTL-bound (deleted after `ttlMs` expires; requires `ephemeral_storage` permission). Same operations across tiers — read / write / delete / exists / list / mkdir / stat / move — just with the tier prefix on each method name.

| Method | Args | Description |
|---|---|---|
| async `userRead` | path | Read a file as UTF-8 text. |
| async `userWrite` | path, data | Write UTF-8 text (creates dirs as needed). |
| async `userDelete` | path | Delete a file. |
| async `userExists` | path | Check if a path exists. |
| async `userList` | prefix? | List files under a prefix. |
| async `userMkdir` | path | Create a directory. |

## api.files

| Method | Args | Description |
|---|---|---|
| async `sharedRead` | path | Read a file as UTF-8 text. |
| async `sharedWrite` | path, data | Write UTF-8 text (creates dirs as needed). |
| async `sharedDelete` | path | Delete a file. |
| async `sharedExists` | path | Check if a path exists. |
| async `sharedList` | prefix? | List files under a prefix. |
| async `sharedStat` | path | Get file metadata (size, modifiedAt, isFile, isDirectory). |
| async `sharedMkdir` | path | Create a directory. |
| async `sharedMove` | from, to | Move or rename a file. |

## api.files

| Method | Args | Description |
|---|---|---|
| async `tempRead` | path | Read a file as UTF-8 text. |
| async `tempWrite` | path, data, options? | Write UTF-8 text. Options: { ttlMs } for expiry. |
| async `tempDelete` | path | Delete a file. |
| async `tempList` | prefix? | List files under a prefix. |
| async `tempStat` | path | Get file metadata (sizeBytes, createdAt, expiresAt?). |
| async `tempClearExpired` | — | Remove all expired files. Returns count removed. |

## api.characters

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List characters (paginated). Returns { data, total }. [characters] |
| async `get` | id | Get a character by ID. Returns null if not found. [characters] |
| async `getByName` | name | Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match. [characters] |
| async `create` | input | Create a new character. [characters] |
| async `setAvatar` | id, avatar | Replace a character's avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling. [characters] |
| async `update` | id, input | Update a character. [characters] |
| async `delete` | id | Delete a character. Returns true if deleted. [characters] |

## api.chats

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List chat sessions (paginated). Options: characterId, limit, offset. [chats] |
| async `get` | id | Get a chat session by ID. [chats] |
| async `getActive` | — | Get the currently active chat session. [chats] |
| async `update` | id, input | Update a chat session name or metadata. [chats] |
| async `delete` | id | Delete a chat session and all its messages. [chats] |
| async `getMemories` | chatId?, options? | Retrieve long-term memory chunks via vector search. Falls back to active chat. [chats] |

## api.worldInfo

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List world books (paginated). |
| async `get` | ref | Get a world book by ID or name. |
| async `create` | input | Create a world book. |
| async `update` | ref, input | Update a world book by ID or name. |
| async `delete` | ref | Delete a world book and all its entries. |
| async `entries.list` | ref, options? | List entries in a world book. |
| async `entries.get` | entryId | Get a single entry by ID. |
| async `entries.create` | ref, input | Create a new entry in a world book. |
| async `entries.update` | entryId, input | Update an entry by ID. |
| async `entries.delete` | entryId | Delete an entry by ID. |
| async `entries.listByAutomationIdPrefix` | prefix | Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book). |
| async `getCapturedActive` | chatId? | Get all entries that would activate for the current chat (full pipeline). |
| `registerInterceptor` | handler, options? | Register a handler that runs BEFORE world info activation. Returns disable / enable / force / mutate decisions for the candidate entries. Returns handle { id, remove }. Multiple handlers compose by priority; vote-off precedence on disabled. 2s soft timeout (configurable). Requires generation. v0.27.0+. [generation] |
| `listInterceptors` | — | Sync read of all currently-registered world-info interceptors. Diagnostic surface. Returns RegisteredWorldInfoInterceptorInfo[]. v0.27.0+. [generation] |

## api.databanks

> **Concepts:** Three ownership scopes — `global` (no owner key), `character` (owned by character UUID), `chat` (owned by chat UUID). Documents within a databank inherit their parent's scope. Document ingestion is **asynchronous**: `documents.create()` returns immediately with `status: 'pending'`; use `documents.waitUntilReady(docId)` to await chunking + vectorization. For input-bar actions or other UI surfaces that need ready-state confirmation, prefer `waitUntilReady` over manual polling.

**File-type constraint**: Lumiverse accepts text-oriented uploads only — `.txt`, `.md`, `.markdown`, `.csv`, `.tsv`, `.json`, `.xml`, `.html`, `.htm`, `.yaml`, `.yml`, `.log`, `.rst`, `.rtf`. PDFs, images, archives, audio, and other binary payloads are rejected at ingestion even though `DatabankDocumentCreateInput.data` is typed `string | Uint8Array`. For non-text persistence, use `api.files.*` (UTF-8 strings — base64-encode binary first) or `api.images.*` (raw image bytes). Max 10 MB per document.

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List databanks (paginated). Options: limit, offset, scope, scopeId. Returns { data: DatabankInfo[], total }. Requires databanks permission. |
| async `get` | databankId | Get a databank by ID. Returns null if not found. Requires databanks permission. |
| async `findByName` | name, scope? | Find the first databank whose display name exactly matches (case-sensitive) within an optional scope. Convenience over list(). Returns null if no match. Requires databanks permission. |
| async `create` | input | Create a new databank. `input.scope` must be one of `'global' \| 'character' \| 'chat'` (DatabankScope) — `'script'` is NOT a valid scope. `scopeId` is REQUIRED for `'character'` and `'chat'` scopes; omit for `'global'`. Requires databanks permission. |
| async `update` | databankId, input | Update a databank (name / description / enabled). Scope cannot be changed after creation. Requires databanks permission. |
| async `delete` | databankId | Delete a databank and all its documents. Returns true if deleted. Requires databanks permission. |
| async `documents.list` | databankId, options? | List documents inside a databank (paginated). Returns { data: DatabankDocumentInfo[], total }. Requires databanks permission. |
| async `documents.get` | documentId | Get a document by ID. Returns null if not found. Requires databanks permission. |
| async `documents.findByName` | databankId, name | Find the first document whose display name exactly matches inside a databank. Returns null if no match. Requires databanks permission. |
| async `documents.create` | databankId, input | Upload a document. **Required input fields**: `data` (`string \| Uint8Array` — NOT `content`) and `filename` (string with extension, e.g. `'notes.md'`). **Optional**: `mimeType`, `name` (display override). Returns immediately with `status: 'pending'` — ingestion (chunking + vectorisation) runs async. Use `waitUntilReady()` or poll `get()` to await completion. Max size 10 MB; supported extensions in DatabankDocumentCreateInput. Requires databanks permission. |
| async `documents.update` | documentId, input | Update document display name (URL slug regenerates). Requires databanks permission. |
| async `documents.delete` | documentId | Delete a document. Returns true if deleted. Requires databanks permission. |
| async `documents.getContent` | documentId | Read the document's ingested text content. Returns null if the document does not exist OR has not finished processing — check `status === 'ready'` via `get()` first, or call `waitUntilReady()` to block. Requires databanks permission. |
| async `documents.reprocess` | documentId | Reset a document to `status: 'pending'`, drop its vectors, and re-queue for full reingestion. Useful after upstream content changes or when ingestion errored. Requires databanks permission. |
| async `documents.waitUntilReady` | documentId, options? | Poll until the document reaches `status: 'ready'`. Throws on error/timeout/deletion. Default 60s timeout, 500ms poll interval — override via DatabankWaitUntilReadyOptions. Use after `create()` or `reprocess()` to await ingestion. Requires databanks permission. |

## api.personas

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List personas (paginated). [personas] |
| async `get` | personaId | Get a persona by ID. [personas] |
| async `getDefault` | — | Get the default persona (isDefault = true). [personas] |
| async `getActive` | — | Get the currently active persona. [personas] |
| async `create` | input | Create a persona. [personas] |
| async `update` | personaId, input | Update a persona. [personas] |
| async `delete` | personaId | Delete a persona. [personas] |
| async `switchActive` | personaId \| null | Switch the active persona. Pass null to deactivate. [personas] |
| async `getWorldBook` | personaId | Get the world book attached to a persona. [personas] |

## api.presets

> **Concepts:** Generation preset CRUD. A preset is the complete prompt configuration: sampler/provider `parameters`, ordered `prompt_order` (prompt blocks with roles / positions / depth), `prompts` (behavior + completion settings), and `metadata` (description, model profiles, prompt-variable values). **Three sub-namespaces**: `api.presets.*` (preset CRUD), `api.presets.blocks.*` (prompt-block CRUD within a preset — block ops update the parent's `prompt_order` and trigger the normal preset update flow), `api.presets.categories.*` (host-derived category grouping view). **Categories are NOT separate records** — a category is a structural prompt block with `marker === 'category'`, and its children are the following non-category blocks until the next category marker. `categoryMode` is `'radio'` (one enabled child) or `'checkbox'` (many). Use `categories.list()` for the precomputed grouping; create / update / delete category headers via `blocks.*` with `marker: 'category'`. **Snake_case fields** (`prompt_order`, `created_at`, `updated_at`) are preserved from Spindle DTOs since they identify stored data. **Use cases**: rotate prompt blocks based on chat context, toggle radio-category options on character state changes, snapshot presets to JSON for backup, build ephemeral per-chat presets and clean up via `ls:teardown`. Requires `presets` permission.

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List user presets (paginated). Options: `{ limit?, offset? }`. Defaults: limit 50, max 200. Returns `{ data: Preset[], total }`. Requires presets permission. [presets] |
| async `get` | presetId | Get a preset by ID. Returns `null` if not found. Requires presets permission. [presets] |
| async `create` | input | Create a new preset. `input.name` and `input.provider` are required (`provider` is typically `'loom'` for native Lumiverse presets). All other fields optional with host defaults (`engine: 'classic'`, empty parameters / prompt_order / prompts / metadata). Requires presets permission. [presets] |
| async `update` | presetId, input | Update a preset. All fields optional. When `prompt_order` or `metadata` is updated, Lumiverse prunes stale `metadata.promptVariables` entries that no longer correspond to a variable definition on a block. Requires presets permission. [presets] |
| async `delete` | presetId | Delete a preset. Returns `true` if deleted. Requires presets permission. [presets] |
| async `blocks.list` | presetId | Return the preset's ordered prompt blocks (`PromptBlock[]`), including structural category-marker blocks. Requires presets permission. [presets] |
| async `blocks.get` | presetId, blockId | Get a block by ID. Returns `null` if not found. Requires presets permission. [presets] |
| async `blocks.create` | presetId, input, options? | Create a prompt block. `options.index` inserts at a specific zero-based position within the preset's `prompt_order`; omitted appends to the end. Block ops update the parent preset's `prompt_order` array and trigger the normal preset update flow. Requires presets permission. [presets] |
| async `blocks.update` | presetId, blockId, input | Update a block. All fields except `id` are optional. Requires presets permission. [presets] |
| async `blocks.delete` | presetId, blockId | Delete a block. Returns `true` if deleted. Requires presets permission. [presets] |
| async `categories.list` | presetId | Return host-derived category groupings (`PromptBlockCategoryGroup[]`) for the preset's ordered blocks. Categories aren't separate records — they're structural prompt blocks with `marker === 'category'`, and a group's children are the following non-category blocks until the next category marker. The first group may have `categoryBlock: null` if normal blocks appear before any category marker. To create / update / delete a category, use `blocks.*` with `marker: 'category'`. Requires presets permission. [presets] |

## api.regexScripts

| Method | Args | Description |
|---|---|---|
| async `list` | options? | List regex find/replace scripts (paginated). Options: scope, scopeId (required for character/chat scope), target ('prompt'\|'response'\|'display'), limit (max 200), offset. Returns { data: RegexScriptInfo[], total }. [regex_scripts] |
| async `get` | scriptId | Get a single regex script by id. Returns null if not found. [regex_scripts] |
| async `findByName` | name, scope? | Find the first regex script whose name exactly matches. Convenience over list() — pages through. O(scripts) worst case. [regex_scripts] |
| async `getActive` | options | Resolve enabled rules that would actually fire for the given target + character/chat context, merged across global + character + chat scopes and ordered by scope tier then sortOrder. Mirrors Lumiverse's internal resolution. Required: target. Optional: characterId, chatId. [regex_scripts] |
| async `create` | input | Create a new regex script. name and findRegex are required; everything else gets host-side defaults (placement: ['ai_output'], scope: 'global', target: 'response', flags: 'gi', etc.). [regex_scripts] |
| async `update` | scriptId, input | Update a regex script. All fields optional; only provided fields are touched. Throws if the script is not found. [regex_scripts] |
| async `delete` | scriptId | Delete a regex script. Returns true if the row was deleted. [regex_scripts] |

## api.images

> **Concepts:** Thin wrapper over Lumiverse's image store. Use cases: persist generated / fetched / pasted images and obtain an `imageId` that can be passed to `api.theme.extractColors` for palette derivation, stored on a character avatar, or attached to a databank document. **Two upload paths**: `upload({data: Uint8Array, ...})` for raw bytes (sourceable from `api.utils.http.*` with `responseType: 'arraybuffer'`, `api.utils.image.dataUrlToBytes(...).data`, `api.files.*`, etc.); `uploadFromDataUrl(dataUrl, options?)` for `data:image/...;base64,...` URLs. Both return `ImageInfo` whose `id` is the persisted UUID. **Distinct from `api.utils.image.*`** — those are CHILD-side byte-manipulation helpers (mime sniff, dataUrl ↔ bytes conversion); `api.images.*` is HOST-side persistence. Requires `images` permission.

| Method | Args | Description |
|---|---|---|
| async `upload` | input | Upload raw image bytes to Lumiverse's image store. `input.data` is a Uint8Array (source via api.utils.http.* with responseType:'arraybuffer', api.utils.image.dataUrlToBytes, api.files.*, etc.). Optional: filename, mimeType, ownerCharacterId, ownerChatId. Returns the ImageInfo whose `id` can be passed to api.theme.extractColors or stored on a character avatar. Requires images permission. [images] |
| async `uploadFromDataUrl` | dataUrl, options? | Convenience: upload from a `data:image/...;base64,...` data URL. Optional options: originalFilename, ownerCharacterId, ownerChatId. Returns ImageInfo. Requires images permission. [images] |
| async `get` | imageId | Look up an image by id. Returns ImageInfo or null. Requires images permission. [images] |
| async `delete` | imageId | Delete an image by id. Returns `true` if a row was removed. Requires images permission. [images] |

## api.imageGen

> **Concepts:** Image-generation surface. `generate({prompt, ...})` fires against the user's configured connection profiles (the same profiles the Lumiverse UI uses for image generation) and returns `ImageGenResult { imageDataUrl, model, provider, imageId?, imageUrl? }`. **`imageId` is the integration seam** — pass to `api.images.get`, `api.theme.extractColors`, or `spindle.characters.setAvatar` to compose with the rest of the API. `imageUrl` is an auth-free public URL suitable for `api.ui.pushNotification({image: result.imageUrl})`. **Provider/connection metadata** via `getProviders` (capability schemas — drive parameter UIs), `listConnections` / `getConnection` (connection picker UIs; API keys masked), `getModels` (model picker; dynamic providers fetch live from upstream). **Provider-specific parameters** flow opaquely through `input.parameters` — validate against the provider's `parameters` schema from `getProviders()` if your script accepts user input. **img2img / inpainting** via the `image_array` parameter type: pass arrays of `imageId` strings (`parameters: { input_images: [id1, id2] }`). **Distinct from `api.images.*`** — that one is raw-byte CRUD on already-stored images; this one creates new ones. Requires `image_gen` permission.

| Method | Args | Description |
|---|---|---|
| async `generate` | input | Generate an image. `input.prompt` required; optional: connectionId (default: user's default connection), negativePrompt, model, parameters (provider-specific — validate against the provider's `parameters` schema from getProviders() if your script accepts user input), ownerCharacterId, ownerChatId. Returns ImageGenResult { imageDataUrl, model, provider, imageId?, imageUrl? } — `imageId` is the canonical handle accepted by api.images.get / api.theme.extractColors / characters.setAvatar; `imageUrl` is an auth-free public URL suitable for api.ui.pushNotification({image:...}). For img2img / inpainting, pass `parameters: { input_images: [imageId, ...] }`. Requires image_gen permission. [image_gen] |
| async `getProviders` | — | List all image-generation providers available on this Lumiverse install along with their capability schemas. Each provider's `capabilities.parameters` describes the supported `parameters` for generate() calls against that provider's connections — use to drive dynamic parameter UIs. Requires image_gen permission. [image_gen] |
| async `listConnections` | — | List the user's image-gen connection profiles. API keys are never exposed — only `hasApiKey: boolean`. Use to populate a connection picker UI. Requires image_gen permission. [image_gen] |
| async `getConnection` | connectionId | Get a single image-gen connection profile by id. Returns ImageGenConnectionInfo or null. Requires image_gen permission. [image_gen] |
| async `getModels` | connectionId | List the models available on a connection profile. For dynamic-list providers, this fetches live from the upstream API (network round-trip). Static-list providers return their capabilities.staticModels directly. Returns Array<{id, label}>. Requires image_gen permission. [image_gen] |

## api.oauth

> **Concepts:** OAuth callback surface — the **only inbound-HTTP hook** Spindle exposes to extensions. Three primitives: `onCallback(handler)` registers a handler for this extension's OAuth redirect URL, `getCallbackUrl()` returns the URL path to use as `redirect_uri`, `createState()` mints a CSRF state nonce. **Single handler per extension** (host stores in a module-scope ref; last-wins). LumiScript adds a `spindle.log.warn` on cross-script or same-script-re-register collisions — non-terminating; the host's behavior is preserved, only the silent overwrite is surfaced. **Wrapper is intentionally thin** — everything beyond these primitives (constructing the authorize URL, exchanging the code for a token, persisting + refreshing the token) is the script's responsibility. Pair with `api.utils.http` (`cors_proxy` + `allowDangerous`) for token-endpoint POSTs and `api.enclave` for encrypted token persistence. PKCE cookbook recipe deferred to v1.0 docs pass. Requires `oauth` permission.

**Surfacing the authorize URL.** Scripts run server-side in the Bun subprocess — there is NO `window.open` and no programmatic browser-tab control. To prompt the user to visit the authorize URL, use one of: (a) `api.ui.showAdvancedModal({title:'Authorize', items:[{kind:'html', html:'<a href="..." target="_blank">Click to authorize</a>'}]})` (requires `app_manipulation`); (b) `api.ui.toast('Open this URL: '+authorizeUrl, 'info')` for a passive notice; (c) `api.ui.pushNotification({title:'Authorize required', body:authorizeUrl, actionUrl: authorizeUrl})` for an OS notification (requires `push_notification`); (d) inject a button into the host shell via `api.ui.dom.inject` (requires `app_manipulation`).

**Composing the full `redirect_uri`.** `getCallbackUrl()` returns a host-relative path (e.g. `/api/spindle-oauth/lumiscript/callback`); the OAuth provider needs the absolute URL. Scripts can't introspect the Lumiverse origin at runtime — pass it as a config constant in the script source, or store via `api.variables.global` from a one-time setup script.

| Method | Args | Description |
|---|---|---|
| `onCallback` | handler | Register a callback handler for this extension's OAuth redirect URL. Handler receives the URL query params as Record<string, string>; optional return { html } becomes the response body shown in the user's browser tab. **Single handler per extension** (host stores in a module-scope ref; last-wins). LumiScript emits a `spindle.log.warn` on cross-script or same-script-re-register collisions — non-terminating; the host's last-wins behavior is preserved. Returns a sync unsubscribe fn (wrapped in Promise per the IPC boundary). Requires oauth permission. [oauth] |
| async `getCallbackUrl` | — | Get the host-relative callback URL path (e.g. `/api/spindle-oauth/lumiscript/callback`). Stable per-extension; use as the `redirect_uri` in your authorize URL construction. Async on the LumiScript side due to IPC boundary even though the host method is sync. Requires oauth permission. [oauth] |
| async `createState` | — | Mint a CSRF state nonce. Pass to your authorize URL as `state=...`; the host verifies the returned state at callback time and rejects mismatches before invoking your handler. Requires oauth permission. [oauth] |

## api.theme

> **Concepts:** Lumiverse theme manipulation surface. Three usage tiers, increasing in flexibility: **simple** — `applyPalette({accent: {h, s, l}})` and let Lumiverse generate the full coherent ~80+ CSS variable set; **mode-aware** — `apply({variablesByMode: {dark: {...}, light: {...}}})` and the host dispatches per-mode at apply time; **expert** — `generateVariables(config)` → tweak → `apply({variables: ...})` for full programmatic control. **Per-script attribution**: multiple LumiScript scripts can apply themes concurrently — LumiScript maintains a per-script override registry and merges before pushing to spindle. Conflict resolution: per-key last-applied-wins for variables, most-recent-script-wins for palette. Auto-cleared on script disable / delete (no manual `clear()` needed for normal disable flows). **Cookbook pattern for interactive UI scripts**: scripts that combine theme apply with interactive DOM should clear their theme in the close / dismiss handler symmetric to DOM removal — `clear()` drops just this script's contributions, other scripts' themes survive. `extractColors(imageId)` pairs cleanly with `applyPalette({accent: result.dominantHsl})` for image-driven theming (avatar-themed UI, dynamic mood theming, etc.). Requires `app_manipulation` permission.

| Method | Args | Description |
|---|---|---|
| async `apply` | overrides | Apply CSS variable overrides on top of the user's current theme. `overrides.variables` is a flat map applied regardless of mode; `overrides.variablesByMode.{dark,light}` is mode-selected at apply time by the host. LumiScript maintains per-script attribution — multiple scripts' apply calls merge with per-key last-applied-wins semantics. Requires app_manipulation permission. [app_manipulation] |
| async `applyPalette` | palette \| null | Apply a palette-driven theme. `palette.accent` is `{h, s, l}` and Lumiverse generates the full variable set coherently, preserving the user's glass/radius/font/UI-scale. Pass `null` to drop this script's palette contribution. Across LumiScript scripts: most-recent-script-wins. Requires app_manipulation permission. [app_manipulation] |
| async `clear` | — | Drop this script's contributions from the per-script override registry, re-merge, push the post-clear result to spindle.theme.{apply,applyPalette}. Auto-called on script disable / delete. Requires app_manipulation permission. [app_manipulation] |
| async `getCurrent` | — | Get a read-only snapshot of the user's current theme configuration (NOT including any extension overrides). Returns ThemeInfo with id, name, mode ('light' \| 'dark'), accent (HSL), enableGlass, radiusScale, fontScale, uiScale, characterAware. Requires app_manipulation permission. [app_manipulation] |
| async `extractColors` | imageId | Extract a color palette from an image stored in Lumiverse's image system. `imageId` is a host-side UUID (sources: `character.imageId`, `api.images.upload(...).id`). Returns ColorExtractionInfo with dominant + per-region RGB + flatness scores + isLight + dominantHsl (ready to pass to applyPalette). Throws if the id is unknown. Requires app_manipulation permission. [app_manipulation] |
| async `generateVariables` | config | Generate the full set of Lumiverse CSS variables from a theme config without applying them. Pass the result to apply({variables}) for a complete coherent override (or tweak individual keys before applying). config.accent + config.mode required; glass/radius/font/UI-scale/baseColors/statusColors optional. Requires app_manipulation permission. [app_manipulation] |

## api.council

| Method | Args | Description |
|---|---|---|
| async `getSettings` | — | Get the user's full Council settings: mode flag, members[], tool-execution settings (timeout, sidecar context window, etc.). Returns CouncilSettings verbatim. No permission required. |
| async `getMembers` | — | Get the user's currently-assigned Council members with full Lumia context (role + chance from the assignment, plus avatar / definition / personality / behavior from the source Lumia item). Returns CouncilMemberContext[]. Inside a tool handler, prefer the ctx.councilMember arg passed automatically — this method is for inspecting Council state OUTSIDE a tool execution cycle. |
| async `getAvailableLumiaItems` | — | Get all Lumia items available across the user's installed packs. Superset of getMembers() — includes items not currently assigned. Returns LumiItem[] (camelCase mapping of the upstream snake_case DTO). |

## api.tools

> **Concepts:** Two execution paths for tool registration. **Council tools** go through a sidecar LLM with the tool's description-as-prompt — the sidecar reasons about which tools to invoke. **Extension tools** bypass the LLM entirely and receive `{context, __deadlineMs}` directly from the Council pipeline. For extension tools, do your own analysis inside the handler (`generateStructured` against a fast connection is the common pattern). One-line tool descriptions are sufficient for extension tools — the description doesn't prompt anything; it's purely a human label.

| Method | Args | Description |
|---|---|---|
| `register` | name, def, handler | Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging. [tools] |
| `unregister` | name | Unregister a tool registered by this script. No-op if not found. [tools] |
| `list` | — | List all currently registered tools across all scripts. [tools] |
| async `invoke` | name, args? | Invoke a registered tool handler directly (for use inside an agentic loop). [tools] |

## api.macros

> **Concepts:** Two registration modes. **Pull mode** (`register(name, handler)`): handler runs at macro-resolution time, can be sync or async (function-reference form; string-handler form is sync-only). **Push mode** (`register(name)` + `updateMacroValue(name, value)`): register once with no handler, push values whenever they change — avoids RPC latency at generation time. Pull is simpler but pays per-resolve cost; push is faster but requires upstream "value changed" knowledge. Pick based on whether macro resolution is hot.

| Method | Args | Description |
|---|---|---|
| `register` | name, def, handler? | Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution). |
| `updateValue` | name, value | Push a new value for a push-mode macro. Throws if the macro was registered with a handler. |
| `unregister` | name | Unregister a macro owned by this script. No-op if not found or not owned. |
| `list` | — | List all currently registered macros across all scripts. |
| `registerInterceptor` | handler, options? | Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string \| string[] \| RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission. [macro_interceptor] |
| `listInterceptors` | — | List all currently registered macro interceptors across all scripts. |

## api.broadcast

> **Concepts:** In-memory real-time pub/sub between scripts. Events are NOT persisted — handlers fire synchronously when an event is emitted, and there's no replay across script reloads. Subscriptions persist between trigger runs (host wipes them at the START of each new run, not the end), so a "subscriber-only" script can watch events from a script it isn't co-triggered with. The `ls:*` prefix is reserved for system events; scripts should namespace their own events with a project-specific prefix. **Distinct from `api.events`** — that one is for persistent event tracking; this one is for real-time messaging.

**Payload size cap + emit rate limit (v1.0.0-rc.7+).** `api.broadcast.emit(event, payload)` synchronously throws if the JSON-serialised payload exceeds **1 MB** (matches the `api.scriptStorage` per-value ceiling), OR if the calling script has emitted more than **100 events/sec sustained** (token bucket with **1000-emit burst capacity**). Errors carry clear migration hints. The caps apply at the `api.broadcast.emit` proxy entry (NOT at the underlying bus, so internal `ls:*` events the engine emits are unaffected). For high-frequency data flow, push the data to `api.db.*` or `api.scriptStorage` and emit a small "data updated" notification on the bus instead.

| Method | Args | Description |
|---|---|---|
| `emit` | event, payload? | Fire a named event to all subscribed handlers across all scripts. |
| `on` | event, handler | Subscribe to a named event. Returns an unsubscribe function. |

## api.rpc

> **Concepts:** Cross-extension shared RPC pool. Wraps Spindle's `spindle.rpcPool` with two-tier namespacing: every endpoint is fully-qualified as `lumiscript.<scriptSlug>.<channel>` where `scriptSlug` auto-derives from the calling script's name (overridable via `options.as`). Use `sync(channel, value)` to publish a latest-value snapshot and `handle(channel, fn)` to register on-demand handlers — other LumiScript scripts AND other Lumiverse extensions can `read(endpoint)` from these channels. Free tier (no permission). Endpoints auto-unregister on script disable / delete / stale-after-re-run. **Permission delegation**: `options.policy` controls how owner permissions flow to readers. Omit for the legacy "requester inherits every owner permission" guard; pass `{ requires: [] }` for intentionally narrow / public endpoints; pass `{ requires: ['name'] }` to scope delegated permissions explicitly. Handlers receive `effectivePermissions` on the `RpcRequestContext` so they can branch on what's actually delegated to this call. **Distinct from `api.broadcast`** — broadcast is in-process pub/sub between LumiScript user-scripts; rpc is cross-extension, asks-the-pool RPC where the caller knows the target endpoint by name. Backend-console logs registrations for cross-extension exposure visibility.

| Method | Args | Description |
|---|---|---|
| async `sync` | channel, value, options? | Publish the latest value on a channel for cross-extension consumption. Endpoints are auto-namespaced as `lumiscript.<scriptSlug>.<channel>` — `scriptSlug` auto-derives from the calling script's name, overridable via `options.as`. `options.policy` controls cross-extension permission delegation: omit for legacy "requester must hold every gated permission the owner has" guard, `{ requires: [] }` for public/narrow endpoints, `{ requires: ['name'] }` to scope delegated permissions explicitly. Returns the fully-qualified endpoint string. Free tier. Endpoints auto-unregister on script disable / delete / stale-after-re-run. |
| async `handle` | channel, handler, options? | Register an on-demand handler for a channel. Handler receives `RpcRequestContext { endpoint, requesterExtensionId, effectivePermissions }` and returns the response value (sync or async). `effectivePermissions` lists the gated permissions available to THIS delegated call per the endpoint's `options.policy`. Same `lumiscript.<scriptSlug>.<channel>` namespacing + `options.policy` semantics as `sync`. Returns the fully-qualified endpoint string. Free tier. |
| async `read` | endpoint | Read a value from another extension's published endpoint. Pass the full `<extensionId>.<channel>` path. Throws on missing endpoint. For cross-extension data sharing — use `api.broadcast` for in-extension pub/sub instead. |
| async `unregister` | channel, options? | Remove a channel previously published by the calling script via `sync` or `handle`. Idempotent — no-op if the channel isn't registered. Pass the same `options.as` you used at registration time if any. |

## api.commands

| Method | Args | Description |
|---|---|---|
| `register` | commands[] | Register (or replace) command palette entries. Max 20 per extension. |
| `unregister` | commandIds? | Remove specific commands by ID, or all if no IDs given. |
| `onInvoked` | handler | Register a handler for when the user selects a command. Returns unsubscribe fn. |

## api.events

> **Concepts:** Persistent event tracking + replay. Events are durably stored and queryable across script reloads / extension restarts. Use cases: audit logs, state-resuming scripts (`getLatestState` for keys), custom analytics. **Distinct from `api.broadcast`** — that one is in-memory real-time pub/sub; this one is durable storage. Recording requires `event_tracking` permission.

| Method | Args | Description |
|---|---|---|
| async `track` | eventName, payload?, options? | Record a named event. Options: level, chatId, retentionDays. [event_tracking] |
| async `query` | filter? | Query events (newest-first). Filter by name, chat, date range, level, limit. [event_tracking] |
| async `replay` | filter? | Replay events (oldest-first). Same filter options as query. [event_tracking] |
| async `getLatestState` | keys[] | Retrieve latest known state for a set of keys. Useful for resuming after restarts. [event_tracking] |

## api.enclave

| Method | Args | Description |
|---|---|---|
| async `put` | key, value | Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB. |
| async `get` | key | Retrieve a decrypted secret, or null if not found. Requires allowDangerous. |
| async `delete` | key | Delete a secret. Returns true if it existed. Requires allowDangerous. |
| async `has` | key | Check if a secret exists without decrypting it. Requires allowDangerous. |
| async `list` | — | List all secret keys for this user and extension. Requires allowDangerous. |

## api.tokens

| Method | Args | Description |
|---|---|---|
| async `countText` | text, options? | Server-side token count for an arbitrary string. Uses the provider's actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier. |
| async `countMessages` | messages, options? | Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier. |
| async `countChat` | chatId, options? | Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier. |

## api.db

> **Concepts:** Per-script schema-validated JSON collections. Each collection is a typed array of records persisted under the owning script's storage path; collections never leak across scripts. Optional Zod schema validates writes (insert + update). Built-in fields `id` / `createdAt` / `updatedAt` are reserved and auto-managed; Zod's `.strict()` / unknown-key stripping preserves them. Use for structured per-script data; for cross-script shared state see `api.variables.global`.

| Method | Args | Description |
|---|---|---|
| async `collection` | name, opts? | Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric. |
| async `list` | scope? | List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported. |
| async `exists` | name, scope? | Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script's own collections. (0.20.0+) |
| async `drop` | name, scope? | Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount. |
| `collection.insert` | record | Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys. |
| `collection.insertMany` | records | Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+) |
| `collection.find` | filter? | Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }. |
| `collection.findOne` | filter | First matching record or null. |
| `collection.update` | filter, patch | Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails). |
| `collection.delete` | filter | Delete all matching records. Returns count. |
| `collection.count` | filter? | Count matching records (or all if filter omitted). |
| `collection.clear` | — | Remove all records, leaving an empty collection file. |
| `collection.query` | jsonQuery | Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) \| size()'. Throws SyntaxError on malformed queries. |

## api.scriptStorage

> **Concepts:** Per-script in-memory key/value store for session state. Closes the "where does my script keep its session state?" UX gap that was previously covered by the `globalThis.__lumiscript_script_<id>_*` convention (verbose, easy to forget the prefix). **Free tier — no permission required.** v1.0.0-rc.6+.

**Picking the right storage primitive** — the LumiScript storage story now has three tiers, picked by intent:
  - `api.scriptStorage` — in-memory, session-scoped, free-tier. Best for "remember this for the session" flags (tracker rerun-inflight, current selection, transient cache).
  - `api.variables.*` — disk-persisted, scope-tiered (local/global/character/chat), free-tier. Best for "remember this across restarts" state.
  - `api.db.*` — disk-persisted, structured collections with schema + filters + queries. Best for record-shaped data you want to search / aggregate.

**Lifecycle**: in-memory only — values live in a parent-side `Map<scriptId, Map<key, value>>`, no disk write. Survives worker eviction / respawn (parent-side state, not in worker memory). Survives script edit / hot-reload (matches the `globalThis` convention — preserves dev iteration state). Cleared on script disable / delete via the `teardownDisabledScript` path. Lost on full backend restart.

**Size cap**: 1 MB per script on the JSON-serialised size of the full map. `set()` throws `"capacity exceeded"` cleanly when a write would cross the cap, with a migration hint pointing to `api.variables.*` / `api.db.*`. The cap is intentional — scriptStorage is a "small bag of session flags" surface, not bulk storage.

**Broadcasts**: every mutation fires an `ls:scriptStorage:*` event on the broadcast bus. `ls:scriptStorage:set` carries `{ scriptId, key, value }`; `ls:scriptStorage:delete` carries `{ scriptId, key }`; `ls:scriptStorage:clear` carries `{ scriptId }`. No-op `delete` / empty `clear` calls don't fire. The `ls:*` prefix avoids the eviction-pinning policy. Useful for debug / admin tooling; user scripts typically don't need to subscribe.

**Values must be JSON-serialisable.** Passing functions / symbols / DOM elements throws at the IPC boundary — same posture as `api.broadcast.emit` and `api.variables.*`.

**Cross-script isolation**: per-script via `scriptId`-keyed outer Map. Script A's writes never appear in Script B's reads. (Cross-script visibility for debug tooling is available via the broadcast events above.)

| Method | Args | Description |
|---|---|---|
| async `get` | key, defaultValue? | Read a value. Returns `defaultValue` (or `undefined` if not provided) when the key is missing. Generic type hint via `get<T>(...)` for IDE completion — the runtime doesn't enforce T. v1.0.0-rc.6+. |
| async `set` | key, value | Write a value. Overwrites any prior value at the key. Fires `ls:scriptStorage:set` with `{ scriptId, key, value }`. Throws "capacity exceeded" if the JSON-serialised total would cross the 1 MB per-script cap (use `api.variables.*` or `api.db.*` for storage at this scale). Value must be JSON-serialisable. |
| async `delete` | key | Remove a key. Returns `true` if it existed (and fires `ls:scriptStorage:delete` with `{ scriptId, key }`), `false` if it didn't (no broadcast). |
| async `has` | key | Check whether a key exists. Returns true for keys with any value including 0 / false / null / "". |
| async `clear` | — | Remove every entry for this script. Fires `ls:scriptStorage:clear` with `{ scriptId }` if at least one entry existed; no broadcast for an already-empty storage. |
| async `keys` | — | List the current keys. Order is insertion-order (Map semantics). |

## script

| Method | Args | Description |
|---|---|---|
| `id` | (property) | This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.). |
| `name` | (property) | This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that). |
| `type` | (property) | Script type: 'trigger' or 'library'. |
| async `require` | nameOrId | Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components'). |

## Events

Lumiverse + LumiScript lifecycle events. Scripts react to these by being **wired in the editor UI** — open the script in the script editor and pick events in the event-wiring control. There is no script-source syntax for subscription; the `// @triggers` comment some scripts carry is informative-only and not parsed by the host (see the **Trigger model** section above). At handler time, the event name appears in `data.__event`; payload fields are listed below. The **Fires** column flags non-obvious firing semantics — read it before writing role-based or count-based filtering logic.

| Event | Payload | Fires |
|---|---|---|
| `ls:startup` | { __event: "ls:startup" } | Per-script when the script enters the active state: at LumiScript boot (extension enable / app start) AND after the user toggles the script from disabled→enabled. Symmetric partner to `ls:teardown`. Use for tool registration, cache pre-warm, broadcast subscription setup, and other init that should run whenever the script becomes runnable. On re-enable the case body re-runs in full — bottom-of-body `api.broadcast.on(...)` calls also re-execute, re-registering the subscriptions disable's cleanup wiped, so the case body itself can be empty if all you need is the body firing. |
| `ls:teardown` | { reason: 'disabled' \| 'deleted', scriptId, scriptName } | Per-script when the script is disabled or deleted. Use for cleanup. |
| `ls:reload` | { reason: 'autosave' \| 'manual', previousCodeHash, currentCodeHash, previousLength, currentLength, triggeredAt } | After a code edit IF the script opts in via the `// @ls:reload-on-edit` directive (~500ms debounce). Body re-runs in its existing worker so registered handlers refresh their closures. Also fires on click of the editor topbar Reload button (manual — bypasses the directive check). Branch on `data.__event === "ls:reload"` to detect. |
| `MESSAGE_SENT` | { chatId, message: ChatMessage } | Once per **user**-initiated send. Does NOT fire for assistant-side messages — use `GENERATION_ENDED` for those. Note: `message` does NOT carry the active character — resolve via `api.chats.get(chatId).then(c => c.characterId)` then `api.characters.get(characterId)`. |
| `MESSAGE_EDITED` | { chatId, message: ChatMessage } |  |
| `MESSAGE_DELETED` | { chatId, messageId } |  |
| `MESSAGE_SWIPED` | { chatId, message: ChatMessage, action, swipeId, previousSwipeId? } | Twice per swipe-with-regen (initiation + completion); once for swipe-without-regen. |
| `SWIPE_EDITED` | { chatId, message: ChatMessage, previousSwipeId } |  |
| `CHARACTER_MESSAGE_RENDERED` | { chatId, messageId } |  |
| `USER_MESSAGE_RENDERED` | { chatId, messageId } |  |
| `GENERATION_STARTED` | { generationId, chatId, model } |  |
| `GENERATION_ENDED` | { generationId, chatId, messageId, content } | Assistant-side message arrival (the counterpart to `MESSAGE_SENT` for user messages). Payload has no `swipeId` — look it up via `api.chat.getMessages` if needed. |
| `GENERATION_STOPPED` | { generationId, chatId, content } |  |
| `STREAM_TOKEN_RECEIVED` | { generationId, chatId, token } |  |
| `CHAT_CHANGED` | { chatId } | Chat **metadata** mutations only (rename, etc.). Does NOT fire on chat open/switch — use `CHAT_SWITCHED` for that. |
| `CHAT_SWITCHED` | { chatId: string \| null }  // null on return-to-home — NO characterId on the payload | Active chat opens, switches, or closes (chatId becomes null on return-to-home). **Important — Phase-1/Phase-2 character resolution**: triggers fire during Phase 1 (chatId set sync); characterId is resolved Phase-2 ~10–15 ms later via async lookup. So `data.characterId` does NOT exist on the payload, and reading the active-context characterId at trigger-fire time can see null/stale. **Pattern**: call `api.chats.getActive()` and read `chat.characterId` — that hits the host's live state which has it populated regardless of Phase-2 status. Caught during v1.0.0-rc.5 manual testing. |
| `CHARACTER_EDITED` | { id, character: Character } |  |
| `CHARACTER_DELETED` | { id } |  |
| `CHARACTER_DUPLICATED` | { id, newId } |  |
| `PERSONA_CHANGED` | { persona: Persona } |  |
| `WORLD_INFO_ACTIVATED` | { entries: WorldInfoEntry[] } | World Info entries were activated during prompt assembly. |
| `WORLD_BOOK_CHANGED` | { id, worldBook: WorldInfo } | Coarse-grained: world book was created, updated, had its semantic-activation toggled, or had any of its entries mutated (entry create / update / delete / reorder / bulk-op / import). Fires alongside `WORLD_BOOK_ENTRY_CHANGED` on per-entry mutations — handlers subscribed to both see two events per change. Bulk imports suppress per-entry events and emit this once at the end. |
| `WORLD_BOOK_DELETED` | { id } | World book was deleted. |
| `WORLD_BOOK_ENTRY_CHANGED` | { id, worldBookId, entry: WorldInfoEntry } | Entry was created or updated. Does NOT fire during bulk imports — those emit a single `WORLD_BOOK_CHANGED` for the parent book instead. Subscribe to `WORLD_BOOK_CHANGED` in addition if you need to catch imported entries. |
| `WORLD_BOOK_ENTRY_DELETED` | { id, worldBookId } | Entry was deleted. |
| `SETTINGS_UPDATED` | { key, value } |  |
| `PRESET_CHANGED` | { presetId } |  |
| `CONNECTION_PROFILE_LOADED` | { connectionId } |  |
| `REGEX_SCRIPT_CHANGED` | { id, script: RegexScriptInfo }  // create / update / duplicate / reorder / enable / disable. v0.27.0+ — requires regex_scripts permission |  |
| `REGEX_SCRIPT_DELETED` | { id }  // v0.27.0+ — requires regex_scripts permission |  |
| `TOOL_INVOCATION` | { toolName, requestId, args } |  |

## Broadcast events (script-to-script pub/sub)

Emitted on the broadcast bus (`api.broadcast.on(event, handler)`). Built-in events are listed below; scripts can also publish custom events (any non-`ls:` prefix).

| Event | Payload | Emitted by |
|---|---|---|
| `ls:tool:registered` | { name, scriptId } | api.tools.register() |
| `ls:tool:unregistered` | { name, scriptId } | api.tools.unregister() / auto-cleanup |
| `ls:tool:invoked` | { name, args, result, scriptId, callMs, councilMember? } | api.tools.invoke() + TOOL_INVOCATION handler |
| `ls:macro:registered` | { name, scriptId, mode: 'push' \| 'pull' } | api.macros.register() |
| `ls:macro:unregistered` | { name, scriptId } | api.macros.unregister() / auto-cleanup |
| `ls:collection:created` | { name, scope, scriptId, path } | api.db.collection() |
| `ls:collection:dropped` | { name, scope, scriptId, path, deletedCount } | api.db.drop() |
| `ls:collection:inserted` | { name, scope, scriptId, id, record } | collection.insert() |
| `ls:collection:updated` | { name, scope, scriptId, count, filterKind: 'all' \| 'object' \| 'fn' } | collection.update() (only when count > 0) |
| `ls:collection:deleted` | { name, scope, scriptId, count, filterKind } | collection.delete() / clear() (clear emits count=-1) |
| `ls:collection:size-warning` | { name, scope, scriptId, bytes } | auto — collection exceeds 10 MB soft threshold |

## Runtime directives

LumiScript **runtime directives** are special comments that change how the runtime treats your script. They live anywhere at line start in the script source and follow the form `// @ls:<directive-name>`. The `@ls:` prefix distinguishes runtime-active directives from passive frontmatter tags like `@description`, `@author`, `@version`, `@tags` — those are read by humans and the pack import/export tooling but don't affect runtime behavior. Detection happens at `update_script` time (each code save); no persistence, no schema change.

| Directive | Applies to | What it does |
|---|---|---|
| `// @ls:reload-on-edit` | Enabled trigger scripts (libraries are loaded on-demand and ignore the directive). | Opts the script INTO automatic hot-reload after a code save. Without this directive, the script's closures stay stale until the next real trigger fire or until the user clicks the Reload button on the editor topbar. Add the directive to scripts whose module-scope code is idempotent and cheap (no expensive LLM calls, no duplicate DB writes, no leaked timers). The body re-runs end-to-end on each edit ~500ms after the autosave settles. |

## Macros

Built-in `{{macros}}` LumiScript registers with the Lumiverse macro engine. Available in chat templates, presets, and `api.utils.template.render()`.

### Presence

| Macro | Aliases | Returns | Description |
|---|---|---|---|
| `{{lumiScriptActive}}` | — | boolean | Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}} |

### Character Variables

| Macro | Aliases | Returns | Description |
|---|---|---|---|
| `{{getcvar::key}}` | {{getcharvar::key}} | string | Get a character-scoped variable. Returns "" if the key is not set or there is no active character. |
| `{{setcvar::key::value}}` | {{setcharvar::key::value}} | silent | Set a character-scoped variable to value. |
| `{{addcvar::key::n}}` | {{addcharvar::key::n}} | silent | Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric). |
| `{{inccvar::key}}` | — | silent | Increment a character-scoped variable by 1. |
| `{{deccvar::key}}` | — | silent | Decrement a character-scoped variable by 1. |
| `{{hascvar::key}}` | {{hascharvar::key}} | boolean | Returns "true" if the variable exists in the active character's store, "false" otherwise. |
| `{{deletecvar::key}}` | {{deletecharvar::key}} | silent | Delete a character-scoped variable. |

## Key types

Public types referenced by `api.*` method signatures. **Each type is in the lookup table** — call `lookup_api("TypeName")` for the full field list with per-field type, optionality, and description.

- `ChatMessage` — Returned by api.chat.getMessages().
- `GetMessagesOptions` — Passed to api.chat.getMessages(options?).
- `SendMessageOptions` — Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style="..." attributes is auto-extracted into a Shadow DOM "island" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.
- `ChatGenerationOptions` — Per-call generation overrides for api.chat.sendMessage(content, { triggerGeneration: true, generation: ... }). Mirrors the host's ChatAppendGenerationOptionsDTO 1:1 in camelCase. Each field is optional; omitted fields fall through to the active chat's resolved defaults (same as a manual UI generation). Use this when a tool script needs to deviate from the user's normal chat configuration for a single triggered generation. v0.27.4+.
- `MessagePatch` — Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.
- `InjectOptions` — Passed to api.chat.inject(id, content, options?).
- `InjectionInfo` — Returned by api.chat.getInjections().
- `MessageContentProcessorOptions` — Passed to api.chat.registerContentProcessor(handler, options?).
- `MessageContentProcessorCtx` — Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).
- `MessageContentProcessorResult` — Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra) and on 'render' (no row to mutate; host ≥0.9.7). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.
- `MacroInterceptorOptions` — Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.
- `MacroInterceptorCtx` — Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.
- `ModalItem` — A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.
- `ShowModalOptions` — Options for api.ui.showModal(items, options).
- `ModalResult` — Dismissal payload inside ModalHandle.result.
- `ModalHandle` — Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.
- `AdvancedModalOptions` — Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.
- `AdvancedModalDismissReason` — Reason a modal was dismissed. Passed to onDismiss handlers.
- `AdvancedModalHandle` — Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.
- `ContextMenuItem` — A single entry in api.ui.showContextMenu()`s items array.
- `ShowContextMenuOptions` — Options for api.ui.showContextMenu().
- `InputBarActionOptions` — Options for api.ui.registerInputBarAction().
- `InputBarActionHandle` — Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.
- `FloatWidgetOptions` — Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.
- `FloatWidgetHandle` — Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.
- `DrawerTabOptions` — Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.
- `DrawerTabHandle` — Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.
- `DOMInjectOptions` — Options for api.ui.dom.inject(target, html, options?).
- `DOMMessageInjectOptions` — Options for api.ui.dom.injectAtMessage(messageId, html, options?).
- `DOMDelegateOptions` — Options for api.ui.dom.delegate(selector, event, handler, options?). v0.27.1+.
- `DOMDelegatedEventData` — Event data delivered to handlers registered via api.ui.dom.delegate(). Extends DOMEventData with a serialized snapshot of the matched element + modifier-key state + optional message context. v0.27.1+.
- `DOMHandle` — Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). Most methods are fire-and-forget; the exception is `read(options?)` which is async (it awaits a frontend roundtrip).
- `DOMEventData` — Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.
- `DOMListenOptions` — Options bag for DOMHandle.on(event, handler, options?).
- `DOMReadOptions` — Options bag for DOMHandle.read(options?). All fields optional — `read()` with no argument returns a baseline snapshot. v1.0.0-rc.6+.
- `SerializedDOMElement` — Snapshot returned by DOMHandle.read(). Frontend-built serialization of the element bound to the handle. v1.0.0-rc.6+.

Which element gets snapshotted depends on the shape of what the script injected: for the common single-root case the user's root element is returned directly (e.g. `inject('<button class="x">Hi</button>')` → `tag: 'button'`); for multi-root or text-only content the snapshot falls back to LumiScript's wrapper (`tag: 'div'`, accurate `childCount`). Either way, internal `data-ls-*` and `data-spindle-ext` wrapper attributes are stripped from the `attrs` map.

Deliberate omissions for v1.0: computed styles, bounding rect, recursive child snapshots, property snapshots (`.value` / `.checked`). Form-control live values can be read via `delegate(selector, 'input', ...)` event handlers; for deep markup traversal, request `{ html: true }` and parse client-side.
- `ConditionalPreventDefault` — Predicate-based preventDefault rule for DOMDelegateOptions / DOMListenOptions (v0.27.5+). Fires event.preventDefault() only when the event matches all provided filters (AND semantics). Each filter is optional; empty {} = always match (equivalent to `preventDefault: true`). Filters are evaluated synchronously frontend-side at fire time. Common shapes: { onKeys: ['Enter'], whenModifiers: { exclude: ['shift'] } } (plain Enter, not Shift+Enter); { onKeys: ['s', 'S'], whenModifiers: { require: ['ctrl'] } } (Ctrl+S override); { onButtons: [2] } (right-click only).
- `LLMMessage` — A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.
- `LlmMessagePart` — A single content part inside an LLMMessage. Discriminated union — switch on the `type` field. Mirrors the host's LlmMessagePartDTO; available since v0.29.0 / lumiverse-spindle-types ≥0.4.71.
- `LLMOptions` — Resolution order: connectionId → connectionName → provider + model → active user connection.
- `DryRunOptions` — Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.
- `LLMRawResult` — Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.
- `LLMRawResultStructured` — Generic type `LLMRawResultStructured<T>`. Return type of `api.llm.generateWithTools(messages, tools, opts, schema)` — the structured-output overload. On intermediate steps only `tool_calls` is set. On the final step only `content` is set, typed as `T` (the schema-parsed result).
- `ToolCall` — A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.
- `DryRunResult` — Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.
- `DryRunBlock` — A single prompt composition block inside DryRunResult.breakdown.
- `DryRunTokenCount` — Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.
- `WorldInfoActivationStats` — World info activation statistics inside DryRunResult.worldInfoStats.
- `DryRunMemoryStats` — Long-term memory retrieval statistics inside DryRunResult.memoryStats.
- `HttpRequestOptions` — Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.
- `HttpResponse` — Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.
- `TempWriteOptions` — Passed to api.files.tempWrite(path, data, options?).
- `FileStatResult` — Returned by api.files.sharedStat(path).
- `TempStatResult` — Returned by api.files.tempStat(path).
- `Character` — Returned by api.characters.get / create / update.
- `CharacterCreateInput` — Passed to api.characters.create(input). Only name is required.
- `CharacterUpdateInput` — Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.
- `ChatSession` — Returned by api.chats.get / getActive / update.
- `ChatSessionUpdateInput` — Passed to api.chats.update(id, input).
- `ChatMemoryChunk` — A single memory chunk inside ChatMemoryResult.chunks.
- `ChatMemoryResult` — Returned by api.chats.getMemories().
- `WorldInfo` — A world book header. Returned by api.worldInfo.get / create / update.
- `WorldInfoCreateInput` — Passed to api.worldInfo.create(input).
- `WorldInfoUpdateInput` — Passed to api.worldInfo.update(ref, input). All fields optional.
- `WorldInfoEntry` — A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.
- `WorldInfoEntryInput` — Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.
- `ActivatedWorldInfoEntry` — Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.
- `WorldInfoInterceptorEntry` — Subset of WorldInfoEntry exposed to a registerInterceptor handler. Read-only — to mutate, return a result patch from the handler.
- `WorldInfoInterceptorMessage` — One chat message exposed to a registerInterceptor handler.
- `WorldInfoInterceptorCtx` — Passed to a registerInterceptor handler. All fields readonly. Persist cross-turn state via api.chats.update(chatId, { metadata: ... }) — chatMetadata here is a snapshot.
- `WorldInfoInterceptorResult` — Return value of a registerInterceptor handler. Return undefined / void / omit all four arrays for full pass-through. Vote-off precedence: once any handler in the chain votes disabled for an id, no later enabled or forced vote can revive it. mutated is last-write-wins per id.
- `WorldInfoInterceptorOptions` — Passed to api.worldInfo.registerInterceptor(handler, options?).
- `RegisteredWorldInfoInterceptorInfo` — Returned by api.worldInfo.listInterceptors(). Diagnostic surface — un-gated.
- `RegexScriptInfo` — Snapshot of a regex find/replace script. Returned by api.regexScripts.list / get / findByName / getActive / create / update. Field names are camelCase translations of the underlying snake_case host DTO.
- `RegexScriptListOptions` — Filter options for api.regexScripts.list().
- `RegexScriptActiveOptions` — Required + optional fields for api.regexScripts.getActive(). Mirrors the resolution Lumiverse uses internally during a generation: only enabled rules, only rules whose target matches, only rules whose scope applies.
- `RegexScriptCreateInput` — Passed to api.regexScripts.create(input). Only name and findRegex are required; everything else gets host-side defaults.
- `RegexScriptUpdateInput` — Passed to api.regexScripts.update(scriptId, input). Same shape as RegexScriptCreateInput but ALL fields optional.
- `Persona` — Returned by api.personas.get / getDefault / getActive / create / update.
- `PersonaCreateInput` — Passed to api.personas.create(input). Only name is required.
- `PersonaUpdateInput` — Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.
- `CouncilSettings` — Returned by api.council.getSettings(). The user's top-level Council configuration object. All fields camelCase — no DTO transform on the LumiScript side.
- `CouncilMember` — A single Council member assignment — the binding row stored in CouncilSettings.members. Includes role + chance + tool assignment list. getMembers() returns the same data enriched with full Lumia source fields as CouncilMemberContext[].
- `CouncilMemberContext` — Returned by api.council.getMembers() AND delivered as the second arg to api.tools.register handlers when invoked via the Council execution path. Merges a member's assignment (role + chance) with the source Lumia item's full definition (avatar / definition / personality / behavior). When you're inside a tool handler, prefer reading ctx.councilMember directly rather than calling getMembers() — it's faster and tied to the active invocation.
- `CouncilToolsSettings` — Settings governing Council tool execution. Nested inside CouncilSettings.toolsSettings.
- `LumiaItem` — Returned by api.council.getAvailableLumiaItems(). LumiScript-shaped (camelCase) mapping of upstream LumiaItemDTO. The full pool of Lumia items the user has across all installed packs — superset of what's currently assigned to Council members.
- `ToolDefinition` — Passed to api.tools.register(name, def, handler).
- `ToolInvocationArgs` — Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.
- `ToolInvocationContext` — Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.
- `CouncilMemberContext` — Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.
- `RegisteredToolInfo` — Returned by api.tools.list(). A serialisable snapshot of a registered tool.
- `MacroDefinition` — Passed to api.macros.register(name, def, handler?).
- `MacroContext` — Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse's MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.
- `RegisteredMacroInfo` — Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).
- `DbScope` — Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.
- `CollectionOpts` — Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.
- `DbRecord` — Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.
- `DbFilter` — Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.
- `EventTrackOptions` — Options for api.events.track().
- `EventQueryFilter` — Filter for api.events.query() and api.events.replay().
- `EventRecord` — Returned by api.events.query() and api.events.replay().
- `MacrosResolveOptions` — Options for api.utils.macros.resolve(template, options?).
- `MacrosResolveResult` — Returned by api.utils.macros.resolve().
- `TokenCountOptions` — Options for api.tokens.count* methods.
- `TokenCountResult` — Returned by api.tokens.count* methods.
- `CharacterAvatarUpload` — Payload for api.characters.setAvatar(id, avatar).
- `DatabankScope` — **Enum**: `'global' | 'character' | 'chat'`. Activation scope for a databank. There are EXACTLY THREE values — there is no `'script'` scope. `'global'` is unscoped (available everywhere); `'character'` is keyed by a character UUID via `scopeId`; `'chat'` is keyed by a chat UUID via `scopeId`. `scopeId` is REQUIRED for `'character'` and `'chat'`, omitted (or null) for `'global'`. Scope cannot be changed after creation — pick the right one up front.
- `DatabankDocumentStatus` — **Enum**: `'pending' | 'processing' | 'ready' | 'error'`. Ingestion lifecycle of an uploaded document. New uploads land as `'pending'` and progress through `'processing'` to `'ready'` (success) or `'error'` (terminal failure). `documents.getContent()` returns null for anything other than `'ready'`; `documents.waitUntilReady()` polls until ready and throws on `'error'` or timeout.
- `DatabankInfo` — Returned by api.databanks.get / findByName / create / update; entries inside list().
- `DatabankCreateInput` — Passed to api.databanks.create(input). Validates host-side — invalid scope or missing scopeId rejects the call.
- `DatabankUpdateInput` — Passed to api.databanks.update(databankId, input). Scope cannot be changed after creation — there are no scope/scopeId fields here on purpose.
- `DatabankDocumentInfo` — Returned by api.databanks.documents.get / findByName / create / update / waitUntilReady; entries inside documents.list().
- `DatabankDocumentCreateInput` — Passed to api.databanks.documents.create(databankId, input). Upload returns immediately with status='pending' — use waitUntilReady() to await ingestion. Max size 10 MB.
- `DatabankDocumentUpdateInput` — Passed to api.databanks.documents.update(documentId, input). The URL-safe slug regenerates automatically from the new name.
- `DatabankWaitUntilReadyOptions` — Optional polling parameters for api.databanks.documents.waitUntilReady(documentId, options?). Throws on timeout, error status, or document deletion.
- `ImageInfo` — Returned by api.images.upload / uploadFromDataUrl / get. Camel-case mirror of ImageDTO from Spindle.
- `ImageUploadInput` — Passed to api.images.upload(input).
- `ImageUploadFromDataUrlOptions` — Passed to api.images.uploadFromDataUrl(dataUrl, options?). The data URL itself carries the bytes + MIME; these options only set ownership / display metadata.
- `ImageGenInput` — Passed to api.imageGen.generate(input). Mirrors ImageGenRequestDTO with camel-case field names on the LumiScript surface.
- `ImageGenResult` — Returned by api.imageGen.generate(input). The `imageId` is the integration seam — pass to api.images.get / api.theme.extractColors / spindle.characters.setAvatar. Use `imageDataUrl` for inline rendering (no auth needed) or `imageUrl` for push-notification image fields.
- `ImageGenProviderInfo` — Returned by api.imageGen.getProviders(). Each provider declares its capability schema; drive dynamic parameter UIs from `capabilities.parameters`.
- `ImageGenConnectionInfo` — Returned by api.imageGen.listConnections() / getConnection(). API keys are NEVER exposed — only `hasApiKey: boolean` indicates presence.
- `ImageGenParameterSchema` — One parameter's contract within an ImageGenProviderInfo.capabilities.parameters record. Use to drive dynamic parameter UIs or validate user-supplied args before calling generate().
- `ColorRGB` — RGB color value, 0–255 per channel. Used in ColorExtractionInfo.dominant / regions.* / average.
- `ColorHSL` — HSL color value. Used in ColorExtractionInfo.dominantHsl + ThemePaletteConfig.accent + ThemeInfo.accent. Drop-in compatible across all three — the typical pipeline is `extractColors(imageId).then(p => applyPalette({accent: p.dominantHsl}))`.
- `ColorExtractionInfo` — Returned by api.theme.extractColors(imageId). `dominantHsl` is the ready-to-pass accent for api.theme.applyPalette({accent: ...}).
- `ThemeOverride` — Passed to api.theme.apply(overrides). Two-axis: `variables` applies regardless of mode, `variablesByMode` applies per dark/light at apply time. LumiScript maintains per-script attribution — multiple scripts' apply() calls merge with per-key last-applied-wins semantics.
- `ThemePaletteConfig` — Passed to api.theme.applyPalette(palette | null). Lumiverse generates the full coherent variable set from the accent — preserves the user's glass / radius / font / UI-scale settings. Across LumiScript scripts: most-recent-script-wins. Pass `null` to drop this script's palette contribution.
- `ThemeInfo` — Returned by api.theme.getCurrent(). Read-only snapshot of the user's current theme configuration (NOT including any extension overrides).
- `ThemeVariablesConfig` — Passed to api.theme.generateVariables(config). Mirrors the inputs that Lumiverse's theme engine uses to produce the full set of ~80+ CSS variables. The result can be passed to apply({variables}) for a complete coherent override, or tweaked individually before applying.

## Built-in libraries

Load via `script.require('ls:<name>')`. **Each entry below is in the lookup table** — call `lookup_api("ls:<name>.<method>")` for the full record.

### ls:components

| Method | Args | Description |
|---|---|---|
| `messageFooter` | messageId, html, options? | Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }. |
| `messageHeader` | messageId, html, options? | Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }. |
| `progressBar` | target, options? | Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }. |
| `floatingButton` | label, options? | Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }. |
| `badgeHtml` | text, options? | Returns badge/pill HTML string for composing inside other injections. |
| `statBarHtml` | label, value, options? | Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }. |
| `keyValueHtml` | label, value, options? | Returns label-value pair HTML string. Options: { muted?, className? }. |
| `multiSelect` | options | Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] \| null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal). |

### ls:council-prompt

| Method | Args | Description |
|---|---|---|
| `buildCouncilMessages` | options | Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing. |
| `buildCouncilSystemPrompt` | options | Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure. |
| `buildCouncilIdentity` | councilMember | Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present. |
| `roleNote` | role | Role-aware directive block. Returns "" when role is empty; otherwise prepends "\n". |
| `brevityNote` | maxWords | Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\n\n" to attach as a paragraph. |
| `userControlNote` | allow | User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\n\n"). |
| `debug.formatMember` | councilMember | Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log. |
| `debug.formatIdentity` | councilMember | Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection. |
| `debug.formatSystemPrompt` | options | Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message. |
| `debug.formatMessages` | options | Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn't visible from the system-prompt view alone. |
| `debug.formatReport` | options | Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log. |

### ls:icons

| Method | Args | Description |
|---|---|---|
| `svg` | Record<IconName, string> | Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates. |
| `sized` | name, pixels | Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged. |
| `forInputBar` | name | Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine. |
| `names` | () | All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers. |

### Built-in types

- `MessageFooterOptions / MessageHeaderOptions` — Options for messageFooter() and messageHeader().
- `CollapsibleDOMHandle` — Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.
- `BadgeHtmlOptions` — Options for badgeHtml().
- `StatBarHtmlOptions` — Options for statBarHtml().
- `ProgressBarOptions` — Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).
- `MultiSelectItem` — A single selectable row in a multiSelect() items array.
- `MultiSelectOptions` — Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.
- `FloatingButtonOptions` — Options for floatingButton().
- `CouncilSystemPromptOptions` — Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn't forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.
- `CouncilMessagesOptions` — Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.
