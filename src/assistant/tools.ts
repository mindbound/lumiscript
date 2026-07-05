/**
 * ============================================================================
 * LUMISCRIPT — ASSISTANT TOOL DEFINITIONS + DISPATCH
 * ============================================================================
 * Tools the in-app assistant can call mid-conversation to fetch deeper detail
 * than the system-prompt cheat-sheet carries. The LLM invokes them via
 * `api.llm.generateWithTools` (or equivalent agentic-loop wrapper); the
 * dispatch function below routes each invocation to its handler and returns
 * a string for the model to consume.
 *
 * Current tools:
 *   - `lookup_api(method)` — return the full LookupEntry for one method,
 *     keyed by fully-qualified name. O(1) dict access into LOOKUP_TABLE.
 *   - `remember` / `recall` / `forget` — durable per-user notes.
 *   - `read_diagnostics()` — compact snapshot of backend runtime state
 *     (script-runner health, registrations, permissions, active context),
 *     served by a host-supplied collector (RunTurnOptions.collectDiagnostics).
 *   - `list_scripts()` / `read_script(id)` — read-only view of the user's
 *     script library (RunTurnOptions.scriptLibrary), so the assistant can reason
 *     across scripts the user didn't @-attach (conflicts, shared channels).
 *
 * Future tools (deferred to expansion options in the design doc — gated on
 * opt-in flags):
 *   - `read_current_script()` — read the script currently OPEN in the editor
 *     buffer (distinct from read_script, which reads any saved script by id).
 *
 * See `notes/code-assistant-design.md` § S4 for the design rationale.
 */

import { LOOKUP_TABLE } from './corpus/lookup-table.js';
import type { LookupEntry, AssistantScriptLibrary } from './types.js';
import { remember, recall, forget } from '../engine/assistant-memory.js';
import type { CompactDiagnostics } from '../engine/diagnostics.js';

// ─── Tool schemas (for api.llm.generateWithTools) ────────────────────────────

/**
 * Shape of an assistant tool spec — matches the `tools` array entry shape
 * accepted by `api.llm.generateWithTools` and the underlying spindle host.
 */
export interface AssistantToolSpec {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

const LOOKUP_API_SPEC: AssistantToolSpec = {
  name: 'lookup_api',
  description:
    'Look up a LumiScript API method OR namespace. ' +
    'Pass a fully-qualified method name (e.g. "api.chat.sendMessage", "api.llm.generate", "api.utils.random.int") to get the full record — signature, description, permissions, examples, see_also. ' +
    'Pass a namespace path (e.g. "api.broadcast", "api.utils.random", "api.chat") to get a summary listing all methods in that namespace plus any sub-namespaces. ' +
    'Call this whenever the cheat-sheet\'s one-liner is too thin, when you need the real TypeScript signature, when you want example code, or when you want to enumerate a namespace. ' +
    'Prefer calling this over guessing.',
  parameters: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description:
          'Either a fully-qualified method name ("api.chat.sendMessage") or a namespace path ("api.broadcast", "api.utils.random"). Must include all path segments — case-sensitive, dot-separated.',
      },
    },
    required: ['name'],
    additionalProperties: false,
  },
};

// ─── Memory tools (Phase 1) — durable, user-editable notes about THIS user ────

const REMEMBER_SPEC: AssistantToolSpec = {
  name: 'remember',
  description:
    'Save a durable note about THIS user so you recall it in future sessions. Use a concise one-line `hook` (it shows in your always-loaded SESSION NOTES index) plus optional longer `detail`. ' +
    'Remember things like: coding-style preferences, naming conventions, recurring project facts, decisions you agreed on, or a correction to something you learned earlier in conversation. ' +
    'Do NOT remember: API facts (the reference is the source of truth — if you think it is wrong, tell the user instead), the current code of a script (that comes live from @-attached scripts), or transient chat detail. Keep hooks specific and self-contained.',
  parameters: {
    type: 'object',
    properties: {
      hook:     { type: 'string', description: 'Concise one-line summary — the index entry. Required.' },
      detail:   { type: 'string', description: 'Optional longer detail, retrieved later via recall().' },
      category: { type: 'string', description: 'Optional grouping, e.g. "preference", "project", "correction".' },
    },
    required: ['hook'],
    additionalProperties: false,
  },
};

const RECALL_SPEC: AssistantToolSpec = {
  name: 'recall',
  description:
    'Search your saved notes about this user and return matches with their full detail. Call this when a hook in the SESSION NOTES index looks relevant to the current question and you want the detail behind it. Terms are matched case-insensitively (all terms must match); an empty query returns every note.',
  parameters: {
    type: 'object',
    properties: {
      query: { type: 'string', description: 'Search terms. Empty string returns all notes.' },
    },
    required: ['query'],
    additionalProperties: false,
  },
};

const FORGET_SPEC: AssistantToolSpec = {
  name: 'forget',
  description:
    'Delete a saved note by its id (shown as "(id)" in the SESSION NOTES index). Use when a note is stale or wrong — to correct earlier knowledge, forget the old note and remember the corrected one.',
  parameters: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'The id of the note to remove.' },
    },
    required: ['id'],
    additionalProperties: false,
  },
};

// ─── Diagnostics tool — read-only snapshot of backend runtime state ───────────

const READ_DIAGNOSTICS_SPEC: AssistantToolSpec = {
  name: 'read_diagnostics',
  description:
    'Read a live snapshot of LumiScript\'s backend runtime state for THIS user — the same data as the Settings → "View Diagnostics" panel, compacted. ' +
    'Returns sections of checks (each with a status of pass/warn/fail/info and a human-readable message) covering: granted permissions, script enrollment (enabled vs disabled, trigger vs library), trigger/macro/tool/injection registrations, the script-runner subprocess health (workers alive, restart count), the active chat/character/user context, storage reachability, and the assistant subsystem. ' +
    'Call this to diagnose "why isn\'t my script firing / why didn\'t my trigger run / why is my api.* call failing?" — read the fail and warn checks first, they pinpoint the problem. Takes no arguments.',
  parameters: {
    type: 'object',
    properties: {},
    additionalProperties: false,
  },
};

// ─── Script-library tools — read-only view of the user's scripts ─────────────

const LIST_SCRIPTS_SPEC: AssistantToolSpec = {
  name: 'list_scripts',
  description:
    'List THIS user\'s LumiScript scripts — id, name, type (trigger / library / etc.) and enabled state, no code. ' +
    'Use this to see the whole library when reasoning about cross-script interactions the user did NOT @-attach: macro / command-name collisions, shared api.broadcast channels, duplicate triggers, or "which of my scripts does X". Follow up with read_script(id) for the actual code. Takes no arguments.',
  parameters: {
    type: 'object',
    properties: {},
    additionalProperties: false,
  },
};

const READ_SCRIPT_SPEC: AssistantToolSpec = {
  name: 'read_script',
  description:
    'Read the full current code of one of THIS user\'s scripts by id (get ids from list_scripts). ' +
    'Use when you need to inspect a script the user did NOT @-attach — to check for conflicts, explain its behaviour, or compare two scripts. Returns the live code from storage (not a cached copy). A very large script may be truncated in the tool result.',
  parameters: {
    type: 'object',
    properties: {
      id: { type: 'string', description: 'The script id (from list_scripts).' },
    },
    required: ['id'],
    additionalProperties: false,
  },
};

/**
 * All tool specs the assistant has available. Pass directly into
 * `api.llm.generateWithTools(messages, ASSISTANT_TOOLS, ...)`.
 */
export const ASSISTANT_TOOLS: readonly AssistantToolSpec[] = Object.freeze([
  LOOKUP_API_SPEC,
  REMEMBER_SPEC,
  RECALL_SPEC,
  FORGET_SPEC,
  READ_DIAGNOSTICS_SPEC,
  LIST_SCRIPTS_SPEC,
  READ_SCRIPT_SPEC,
]);

// ─── Tool handlers ───────────────────────────────────────────────────────────

/**
 * Result envelope returned by every tool handler. The `content` field is
 * what gets passed back to the LLM as the tool's reply (typically as JSON
 * stringified); `isError` lets the loop log/surface failed lookups without
 * conflating them with successful empty results.
 */
interface ToolResult {
  content: string;
  isError: boolean;
}

/**
 * Polymorphic lookup — accepts a fully-qualified method name OR a namespace
 * path. Three branches in priority order:
 *
 *   1. Exact match against the lookup table key → return the full entry.
 *   2. Treat the arg as a namespace prefix. Walk the table for keys starting
 *      with `${arg}.`. If any match, partition into direct methods
 *      (single-segment remainder) and sub-namespaces (multi-segment remainder
 *      — count methods per sub-namespace). Return a structured summary.
 *   3. Miss — return an error with helpful suggestions (keys sharing the
 *      longest common prefix with the attempted name).
 *
 * The handler accepts both `name` (current spec) and `method` (older spec) on
 * the args object — defensive against models that have older calling
 * conventions baked into context from earlier turns.
 */
function handleLookupApi(args: Record<string, unknown>): ToolResult {
  const raw = typeof args.name === 'string'
    ? args.name
    : typeof args.method === 'string'
      ? args.method
      : '';
  const name = raw.trim();
  if (!name) {
    return {
      content: JSON.stringify({
        error:
          'lookup_api requires a `name` string argument — either a fully-qualified method name (e.g. "api.chat.sendMessage") or a namespace path (e.g. "api.broadcast").',
      }),
      isError: true,
    };
  }

  const table = LOOKUP_TABLE as Record<string, LookupEntry>;

  // Branch 1: exact method match.
  const entry = table[name];
  if (entry) {
    return { content: JSON.stringify(entry), isError: false };
  }

  // Branch 2: namespace summary.
  const summary = getNamespaceSummary(name);
  if (summary.directMethods.length > 0 || summary.subNamespaces.length > 0) {
    return {
      content: JSON.stringify({
        namespace: name,
        note:
          `\`${name}\` is a namespace, not a method. Listing direct methods` +
          (summary.subNamespaces.length > 0 ? ' and sub-namespaces.' : '.') +
          ' Call lookup_api again with one of the full method names below for the full record (signature, examples, etc.).',
        directMethods: summary.directMethods,
        ...(summary.subNamespaces.length > 0 ? { subNamespaces: summary.subNamespaces } : {}),
      }),
      isError: false,
    };
  }

  // Branch 3: real miss. Suggest nearby keys by prefix.
  const suggestions = suggestNearbyKeys(name);
  return {
    content: JSON.stringify({
      error:
        `No entry for "${name}". Use a fully-qualified method name or namespace path as listed in the cheat-sheet (case-sensitive, dot-pathed).`,
      ...(suggestions.length > 0 ? { suggestions } : {}),
    }),
    isError: true,
  };
}

/**
 * For a namespace path, partition the lookup table into:
 *   - directMethods   : entries whose key is `${ns}.<leaf>` (one segment beyond)
 *   - subNamespaces   : entries whose key has 2+ segments beyond `${ns}.`,
 *                       grouped by their first sub-segment, with method counts
 *
 * Used by Branch 2 of `handleLookupApi` and as a safe summary for the LLM
 * when it queries a namespace.
 */
function getNamespaceSummary(namespace: string): {
  directMethods: Array<{ method: string; signature: string; description: string }>;
  subNamespaces: Array<{ namespace: string; methodCount: number }>;
} {
  const prefix = `${namespace}.`;
  const directMethods: Array<{ method: string; signature: string; description: string }> = [];
  const subNsCounts = new Map<string, number>();

  for (const [key, entry] of Object.entries(LOOKUP_TABLE)) {
    if (!key.startsWith(prefix)) continue;
    // Type entries are keyed by bare PascalCase name, redirect entries by
    // wrong-paths like `api.on` — neither should pollute a namespace
    // summary, even if a key happens to share prefix shape with the
    // requested namespace.
    const e = entry as LookupEntry;
    if (e.kind === 'type' || e.kind === 'redirect') continue;
    const remainder = key.slice(prefix.length);
    const dotIdx = remainder.indexOf('.');
    if (dotIdx === -1) {
      directMethods.push({
        method: e.method,
        signature: e.signature,
        description: e.description,
      });
    } else {
      const subNs = `${namespace}.${remainder.slice(0, dotIdx)}`;
      subNsCounts.set(subNs, (subNsCounts.get(subNs) ?? 0) + 1);
    }
  }

  const subNamespaces = [...subNsCounts.entries()]
    .map(([n, c]) => ({ namespace: n, methodCount: c }))
    .sort((a, b) => a.namespace.localeCompare(b.namespace));

  return { directMethods, subNamespaces };
}

/**
 * On a real lookup miss, find nearby keys by longest-common-prefix match.
 *
 * Two passes:
 *   1. Direct prefix match — keys starting with the attempted name. Useful
 *      when the model passed an incomplete path like `api.chat.send` (would
 *      match `api.chat.sendMessage`).
 *   2. Sibling fallback — drop the leaf segment, find methods in that
 *      narrower namespace. Useful when the leaf was a typo.
 *
 * Returns up to 5 keys (methods or namespace prefixes), preferring the
 * direct-prefix matches.
 */
function suggestNearbyKeys(attempted: string): string[] {
  const limit = 5;
  const direct: string[] = [];
  for (const key of Object.keys(LOOKUP_TABLE)) {
    if (key.startsWith(attempted) && key !== attempted) {
      direct.push(key);
      if (direct.length >= limit) break;
    }
  }
  if (direct.length > 0) return direct;

  const segments = attempted.split('.');
  if (segments.length < 2) return [];
  const narrowerNs = segments.slice(0, -1).join('.');
  const fallback: string[] = [];
  for (const key of Object.keys(LOOKUP_TABLE)) {
    if (key.startsWith(`${narrowerNs}.`)) {
      fallback.push(key);
      if (fallback.length >= limit) break;
    }
  }
  return fallback;
}

// ─── Memory tool handlers (Phase 1) ──────────────────────────────────────────

async function handleRemember(args: Record<string, unknown>, userId: string): Promise<ToolResult> {
  const hook = typeof args.hook === 'string' ? args.hook : '';
  if (!hook.trim()) {
    return { content: JSON.stringify({ error: 'remember requires a non-empty `hook`.' }), isError: true };
  }
  const res = await remember(userId, {
    hook,
    ...(typeof args.detail === 'string' ? { detail: args.detail } : {}),
    ...(typeof args.category === 'string' ? { category: args.category } : {}),
    source: 'lisa',
  });
  return res.ok
    ? { content: JSON.stringify({ saved: true, id: res.id }), isError: false }
    : { content: JSON.stringify({ error: res.error }), isError: true };
}

async function handleRecall(args: Record<string, unknown>, userId: string): Promise<ToolResult> {
  const query = typeof args.query === 'string' ? args.query : '';
  const matches = await recall(userId, query);
  return {
    content: JSON.stringify({
      count: matches.length,
      notes: matches.map((n) => ({
        id:   n.id,
        hook: n.hook,
        ...(n.detail ? { detail: n.detail } : {}),
        ...(n.category ? { category: n.category } : {}),
      })),
    }),
    isError: false,
  };
}

async function handleForget(args: Record<string, unknown>, userId: string): Promise<ToolResult> {
  const id = typeof args.id === 'string' ? args.id : '';
  if (!id) return { content: JSON.stringify({ error: 'forget requires an `id`.' }), isError: true };
  const removed = await forget(userId, id);
  return {
    content: JSON.stringify(removed ? { forgotten: id } : { error: `No note with id "${id}".` }),
    isError: !removed,
  };
}

// ─── Diagnostics tool handler ────────────────────────────────────────────────

/**
 * Run the host-supplied diagnostics collector and return its compact report.
 * The collector (RunTurnOptions.collectDiagnostics) is owned by the backend —
 * it runs the async probes (storage, script-runner IPC, assistant) and compacts
 * the result. Absent when the turn wasn't given one → reports unavailable.
 */
async function handleReadDiagnostics(
  collect: (() => Promise<CompactDiagnostics>) | undefined,
): Promise<ToolResult> {
  if (!collect) {
    return {
      content: JSON.stringify({ error: 'Diagnostics are unavailable in this context.' }),
      isError: true,
    };
  }
  try {
    const report = await collect();
    return { content: JSON.stringify(report), isError: false };
  } catch (err) {
    return {
      content: JSON.stringify({
        error: `Failed to collect diagnostics: ${err instanceof Error ? err.message : String(err)}`,
      }),
      isError: true,
    };
  }
}

// ─── Script-library tool handlers ────────────────────────────────────────────

function handleListScripts(lib: AssistantScriptLibrary | undefined): ToolResult {
  if (!lib) {
    return { content: JSON.stringify({ error: 'The script library is unavailable in this context.' }), isError: true };
  }
  try {
    const scripts = lib.list();
    return { content: JSON.stringify({ count: scripts.length, scripts }), isError: false };
  } catch (err) {
    return {
      content: JSON.stringify({ error: `Failed to list scripts: ${err instanceof Error ? err.message : String(err)}` }),
      isError: true,
    };
  }
}

/**
 * Char budget for a script's code in a `read_script` result. Truncating INSIDE
 * the `code` field (vs letting agent.ts's outer TOOL_RESULT_CHAR_CAP clip the
 * JSON mid-string) keeps the result valid JSON and tells the model the script's
 * true size. Sized so the serialized result stays under the 40k outer cap even
 * after JSON-escaping expands the code; an over-budget script falls back to the
 * outer cap (still safe, just the generic marker).
 */
const READ_SCRIPT_CODE_CAP = 30_000;

function handleReadScript(args: Record<string, unknown>, lib: AssistantScriptLibrary | undefined): ToolResult {
  if (!lib) {
    return { content: JSON.stringify({ error: 'The script library is unavailable in this context.' }), isError: true };
  }
  const id = typeof args.id === 'string' ? args.id : '';
  if (!id) return { content: JSON.stringify({ error: 'read_script requires an `id`.' }), isError: true };
  try {
    const script = lib.read(id);
    if (!script) {
      return { content: JSON.stringify({ error: `No script with id "${id}". Call list_scripts to see available ids.` }), isError: true };
    }
    if (script.code.length > READ_SCRIPT_CODE_CAP) {
      const truncated = {
        ...script,
        code: script.code.slice(0, READ_SCRIPT_CODE_CAP) +
          `\n\n/* … [read_script truncated this script: ${script.code.length} characters total, ` +
          `showing the first ${READ_SCRIPT_CODE_CAP}.] */`,
        truncated: true,
        fullLength: script.code.length,
      };
      return { content: JSON.stringify(truncated), isError: false };
    }
    return { content: JSON.stringify(script), isError: false };
  } catch (err) {
    return {
      content: JSON.stringify({ error: `Failed to read script: ${err instanceof Error ? err.message : String(err)}` }),
      isError: true,
    };
  }
}

// ─── Dispatch ────────────────────────────────────────────────────────────────

/**
 * Route a tool invocation to its handler. Called by the backend agent loop
 * when the LLM returns a `tool_calls` array — for each call, the loop passes
 * the name + parsed args (+ turn context) to this dispatcher, takes the
 * returned string, and feeds it back to the LLM as the tool's reply.
 *
 * Async because the memory tools (`remember` / `recall` / `forget`) touch
 * `userStorage` and `read_diagnostics` calls the host-supplied collector;
 * `lookup_api` stays a pure synchronous lookup, just returned from the async
 * fn. Unknown tool names return an error envelope rather than throwing — keeps
 * the loop resilient if the LLM hallucinates a tool name.
 */
export async function dispatchAssistantTool(
  name: string,
  args: Record<string, unknown>,
  ctx: {
    userId: string;
    collectDiagnostics?: () => Promise<CompactDiagnostics>;
    scriptLibrary?: AssistantScriptLibrary;
  },
): Promise<ToolResult> {
  switch (name) {
    case 'lookup_api':
      return handleLookupApi(args);
    case 'remember':
      return handleRemember(args, ctx.userId);
    case 'recall':
      return handleRecall(args, ctx.userId);
    case 'forget':
      return handleForget(args, ctx.userId);
    case 'read_diagnostics':
      return handleReadDiagnostics(ctx.collectDiagnostics);
    case 'list_scripts':
      return handleListScripts(ctx.scriptLibrary);
    case 'read_script':
      return handleReadScript(args, ctx.scriptLibrary);
    default:
      return {
        content: JSON.stringify({
          error: `Unknown tool "${name}". Available tools: ${ASSISTANT_TOOLS.map((t) => t.name).join(', ')}.`,
        }),
        isError: true,
      };
  }
}
