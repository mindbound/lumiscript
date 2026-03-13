# LumiScript

A JavaScript scripting platform for [Lumiverse](https://github.com/lumiverse). Write scripts that react to chat events, automate behaviour, inject prompt context, and build complex interactions — without touching Lumiverse's internal code.

LumiScript is a port of [TavernScript](https://github.com/mindbound/tavernscript) (SillyTavern) to the Lumiverse platform, rebuilt from the ground up to take advantage of Lumiverse's modern architecture and the Spindle extension runtime.

## Features

- **Event-driven scripting** — React to messages, generations, character switches, setting changes, and more
- **Sandboxed execution** — Scripts run server-side in isolated `AsyncFunction` sandboxes with granular permission controls
- **Rich API** — Chat manipulation, LLM generation, variable storage, HTTP requests, UI dialogs, JSON utilities, and a custom event bus
- **Script bindings** — Bind scripts to specific characters or chats so they only fire in the right context
- **Library scripts** — Write reusable library modules and `require()` them from other scripts
- **Variable system** — Local (per-chat), global (cross-chat), character (per-card), and flow (per-execution) variable scopes
- **Built-in editor** — Full Monaco Editor integration for writing and managing scripts
- **Push-model macros** — Register custom `{{macros}}` that stay up to date without generation-time latency

## Requirements

- [Lumiverse](https://github.com/lumiverse) v0.1.0 or later
- The following Spindle permissions must be granted after installation:

| Permission | Used for |
|---|---|
| `chat_mutation` | Reading and modifying chat messages |
| `generation` | Calling LLM providers from scripts |
| `interceptor` | Prompt injection and context modification |
| `cors_proxy` | HTTP requests in scripts marked `allowDangerous` |
| `ui_panels` | Script manager panel and status sidebar |

## Installation

### From GitHub

Open Lumiverse, go to **Settings > Extensions**, and install from URL:

```
https://github.com/mindbound/lumiscript
```

Lumiverse will clone the repository, build the extension, and register it automatically. Enable it and grant the requested permissions to get started.

### Manual / Development

```bash
cd data/extensions/lumiscript/repo

# Install dependencies
bun install

# Build both backend and frontend
bun run build

# Or build individually
bun run build:backend    # Bun worker target
bun run build:frontend   # Browser target

# Type-check without building
bun run typecheck
```

## How It Works

LumiScript has two modules that work together:

**Backend** (Bun worker thread) — The script engine. Loads and persists scripts, evaluates bindings, executes code in `AsyncFunction` sandboxes, and exposes the `api.*` object to each script. Communicates with Lumiverse through the Spindle API.

**Frontend** (browser) — The UI layer. Provides the script manager (Monaco editor, script list, bindings editor, console output) and the status sidebar. Renders UI actions requested by scripts (toasts, prompts, popups). All DOM injection is sanitized through DOMPurify.

The two modules communicate exclusively through Spindle's frontend-backend messaging channel.

### Script Anatomy

```javascript
// Scripts receive an `api` object with everything they need.
// This script logs every new message and tracks a counter.

const count = await api.variables.local.get('msg_count', 0);
const messages = await api.chat.getMessages();
const latest = messages[messages.length - 1];

api.log(`Message #${count + 1}: ${latest.content.substring(0, 50)}...`);
await api.variables.local.set('msg_count', count + 1);
```

### Script Types

| Type | Description |
|---|---|
| **Trigger** | Fires automatically on bound events (message sent, generation ended, etc.) |
| **Library** | Loaded on demand via `script.require('name')` from other scripts |

### Variable Scopes

| Scope | Persistence | Use case |
|---|---|---|
| `api.variables.local` | Per-chat, survives restarts | Conversation-specific state |
| `api.variables.global` | Cross-chat, survives restarts | User-wide preferences and counters |
| `api.variables.character` | Per-character card | Character-specific data |
| `api.variables.flow` | In-memory, current execution only | Temporary scratch space |

### The `allowDangerous` Flag

Scripts that need to make HTTP requests must have `allowDangerous` enabled. This is a per-script toggle that gates access to `api.utils.http.*` and is backed by Lumiverse's `cors_proxy` permission. Scripts without this flag cannot make network calls.

## API Reference

Scripts interact with Lumiverse through the `api` object:

| Namespace | Description |
|---|---|
| `api.chat` | Read, send, edit, and delete chat messages |
| `api.variables` | Get and set variables across four scopes |
| `api.events` | Register handlers and trigger custom script-to-script events |
| `api.llm` | Generate text using any configured LLM provider |
| `api.ui` | Show toasts, prompts, confirms, and popup dialogs |
| `api.json` | JSONPath queries and utility functions |
| `api.utils` | Handlebars templates, UUIDs, HTTP requests, random helpers |
| `api.log` | Log messages to the script console |

## Coming from TavernScript?

LumiScript preserves TavernScript's core concepts — the scripting model, API shape, variable scopes, binding system, and library scripts all work the same way. Key differences:

| | TavernScript | LumiScript |
|---|---|---|
| **Execution** | Client-side (browser tab) | Server-side (Bun worker) |
| **DOM access** | Direct | Proxied through messaging |
| **Character identity** | Avatar filename | Character UUID |
| **Persistence** | ST user files API | Spindle scoped storage |
| **UI framework** | React 18 | Vanilla DOM |
| **Build system** | Webpack | `bun build` |

Most scripts will port with minimal changes — primarily swapping avatar-based character references for UUID-based ones.

## Development

### Building from Source

```bash
bun install
bun run build
```

### Project Structure

```
src/
  backend.ts          Backend entry point (Bun worker)
  frontend.ts         Frontend entry point (browser)
  types/
    script.ts         LumiScriptAPI interface
  engine/
    executor.ts       Script sandbox and API assembly
    event-registry.ts Internal event bus
    execution-status.ts Status tracking
    binding.ts        Binding evaluation
  storage/
    collection-store.ts Generic array store
    script-storage.ts   Script persistence
    settings-store.ts   Settings persistence
  api/
    chat.ts           Chat message operations
    variables.ts      Variable scopes
    events.ts         Event registration and triggering
    json.ts           JSON utilities
    llm.ts            LLM generation
    ui.ts             UI dialogs
    utils.ts          Handlebars, HTTP, random, etc.
  components/
    manager.ts        Script manager UI
    sidebar.ts        Status sidebar
    styles.ts         CSS constants
dist/
  backend.js          Built backend module
  frontend.js         Built frontend module
```

## License

[MIT](LICENSE)

## Author

[mindbound](https://github.com/mindbound)
