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
 *
 * Future tools (deferred to expansion options in the design doc — gated on
 * opt-in flags):
 *   - `read_current_script()` — read the user's currently-open script (opt-in).
 *   - `read_diagnostics()`    — read the LumiScript diagnostics report.
 *
 * See `notes/code-assistant-design.md` § S4 for the design rationale.
 */

import { LOOKUP_TABLE } from './corpus/lookup-table.js';
import type { LookupEntry } from './types.js';

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

/**
 * All tool specs the assistant has available. Pass directly into
 * `api.llm.generateWithTools(messages, ASSISTANT_TOOLS, ...)`.
 */
export const ASSISTANT_TOOLS: readonly AssistantToolSpec[] = Object.freeze([
  LOOKUP_API_SPEC,
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
        description: e.kind === 'builtin' ? e.description : e.description,
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

// ─── Dispatch ────────────────────────────────────────────────────────────────

/**
 * Route a tool invocation to its handler. Called by the backend agent loop
 * when the LLM returns a `tool_calls` array — for each call, the loop
 * passes the name + parsed args to this dispatcher, takes the returned
 * string, and feeds it back to the LLM as the tool's reply.
 *
 * Unknown tool names return an error envelope rather than throwing — keeps
 * the loop resilient if the LLM hallucinates a tool name.
 */
export function dispatchAssistantTool(
  name: string,
  args: Record<string, unknown>,
): ToolResult {
  switch (name) {
    case 'lookup_api':
      return handleLookupApi(args);
    default:
      return {
        content: JSON.stringify({
          error: `Unknown tool "${name}". Available tools: ${ASSISTANT_TOOLS.map((t) => t.name).join(', ')}.`,
        }),
        isError: true,
      };
  }
}
