/**
 * ============================================================================
 * LUMISCRIPT — LLM API
 * ============================================================================
 * generate, generateStructured
 *
 * Includes:
 * - Provider validation (KNOWN_PROVIDERS / assertProvider)
 * - Connection resolution by ID or name (resolveConnection)
 * - Structured output helpers (Zod ↔ JSON Schema, native json_schema mode,
 *   schema-in-prompt fallback for Anthropic/Google, JSON extraction)
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import * as z from 'zod';
import type {
  LumiScriptAPI,
  LLMOptions,
  LLMMessage,
  ZodLike,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm, shielded } from './shared.js';

// ─── Provider validation ──────────────────────────────────────────────────────

/**
 * Internal names of all Lumiverse LLM providers (matches `readonly name` on
 * each provider class in src/llm/providers/*).
 * Keep in sync with LLMProvider in types/script.ts.
 */
const KNOWN_PROVIDERS = new Set([
  'ai21', 'anthropic', 'chutes', 'custom', 'deepseek', 'electronhub',
  'fireworks', 'google', 'groq', 'mistral', 'moonshot', 'nanogpt',
  'openai', 'openrouter', 'perplexity', 'pollinations', 'siliconflow',
  'xai', 'zai',
]);

function assertProvider(provider: string): void {
  if (!KNOWN_PROVIDERS.has(provider)) {
    throw new Error(
      `api.llm: unknown provider "${provider}". ` +
      `Valid providers: ${[...KNOWN_PROVIDERS].sort().join(', ')}`,
    );
  }
}

// ─── Connection resolution ────────────────────────────────────────────────────

/** Minimal connection fields forwarded into the generation request. */
interface ResolvedConnection {
  id: string;
  model: string;
  provider: string;
}

/**
 * Resolve the connection profile to use for a generation call.
 * Returns { id, model, provider } so that provider-strict APIs (e.g. NanoGPT)
 * always receive an explicit model even when the caller omits opts.model.
 *
 * Precedence: connectionId > connectionName > undefined (use Lumiverse default).
 *
 * - connectionId   → spindle.connections.get()   (throws if not found)
 * - connectionName → spindle.connections.list()  (throws if name unmatched,
 *                                                  includes list of valid names)
 */
async function resolveConnection(
  opts: LLMOptions | undefined,
  userId: string | null | undefined,
): Promise<ResolvedConnection | undefined> {
  if (opts?.connectionId) {
    const conn = await spindle.connections.get(opts.connectionId, userId ?? undefined);
    if (!conn) throw new Error(`api.llm: connection ID "${opts.connectionId}" not found`);
    return { id: conn.id, model: conn.model, provider: conn.provider };
  }
  if (opts?.connectionName) {
    const connections = await spindle.connections.list(userId ?? undefined);
    const needle = opts.connectionName.toLowerCase();
    const match = connections.find(c => c.name.toLowerCase() === needle);
    if (!match) {
      const names = connections.map(c => `"${c.name}"`).join(', ');
      throw new Error(
        `api.llm: no connection found with name "${opts.connectionName}". ` +
        `Available: ${names || '(none)'}`,
      );
    }
    return { id: match.id, model: match.model, provider: match.provider };
  }
  return undefined;
}

function buildLLMParams(opts?: LLMOptions): Record<string, unknown> {
  const p: Record<string, unknown> = {};
  if (opts?.temperature !== undefined) p.temperature = opts.temperature;
  if (opts?.maxTokens   !== undefined) p.max_tokens  = opts.maxTokens;
  if (opts?.model       !== undefined) p.model       = opts.model;
  return p;
}

// ─── Structured output helpers ────────────────────────────────────────────────

/**
 * Providers whose APIs do not accept the response_format parameter at all.
 * All other Lumiverse providers use OpenAICompatibleProvider and support at
 * least response_format: json_object (including NanoGPT, Z.AI, OpenAI, etc.).
 */
const NO_RESPONSE_FORMAT_PROVIDERS = new Set(['anthropic', 'google']);

/**
 * Runtime check: is this value a Zod schema?
 * Uses instanceof z.ZodType — no false positives from duck-typing.
 */
function isZodLike(schema: unknown): schema is z.ZodType {
  return schema instanceof z.ZodType;
}

/**
 * Convert a Zod schema or raw JSON Schema to a plain JSON Schema object.
 * Zod 4 schemas are converted via z.toJSONSchema; raw objects are returned as-is.
 */
function toJsonSchemaObject(schema: ZodLike<unknown> | Record<string, unknown>): Record<string, unknown> {
  if (isZodLike(schema)) {
    return z.toJSONSchema(schema, {
      target: 'openapi-3.0',
      cycles: 'ref',
      unrepresentable: 'any',
    }) as Record<string, unknown>;
  }
  return schema as Record<string, unknown>;
}

/**
 * Inject a JSON Schema constraint into the message array's system prompt.
 * Appends to the last existing system message, or prepends a new one.
 * Used as fallback for Anthropic and Google providers.
 */
function enhanceMessagesWithSchema(
  messages: LLMMessage[],
  jsonSchema: Record<string, unknown>,
): LLMMessage[] {
  const instruction =
    '\n\nYou must respond with valid JSON matching this schema:\n```json\n' +
    JSON.stringify(jsonSchema, null, 2) +
    '\n```\nRespond ONLY with the JSON object, wrapped in a markdown code block.';
  const sysMsgs = messages.filter(m => m.role === 'system');
  const other   = messages.filter(m => m.role !== 'system');
  if (sysMsgs.length > 0) {
    const last = sysMsgs[sysMsgs.length - 1]!;
    return [
      ...sysMsgs.slice(0, -1),
      { ...last, content: last.content + instruction },
      ...other,
    ];
  }
  return [{ role: 'system', content: `You are a helpful assistant.${instruction}` }, ...messages];
}

/**
 * Extract JSON from a response that may be wrapped in a markdown code block.
 * Falls back to the first JSON-looking substring, then the raw text.
 */
function extractJsonFromResponse(text: string): string {
  const codeBlock = text.match(/```(?:json)?\s*\n([\s\S]*?)\n```/);
  if (codeBlock) return codeBlock[1]!.trim();
  const bare = text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
  if (bare) return bare[1]!.trim();
  return text.trim();
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildLLMAPI(deps: APIBuildDeps): LumiScriptAPI['llm'] {
  const { hasPerm, userId } = deps;

  return {
    generate: (messages, opts) => {
      assertPerm('generation', hasPerm);
      if (opts?.provider) assertProvider(opts.provider);
      return shielded(
        resolveConnection(opts, userId).then(conn => {
          // opts.model / opts.provider override the connection profile values.
          // When using a connection profile without explicit overrides, the profile's
          // model and provider are forwarded so strict providers (e.g. NanoGPT) don't
          // reject the request for a missing model field.
          // provider and model are passed at runtime but absent from GenerationRequestDTO
          // in the current lumiverse-spindle-types version; spread via Record cast.
          const effectiveProvider = opts?.provider ?? conn?.provider;
          const effectiveModel    = opts?.model    ?? conn?.model;
          const providerFields = {
            ...(effectiveProvider ? { provider: effectiveProvider } as Record<string, string> : {}),
            ...(effectiveModel    ? { model:    effectiveModel    } as Record<string, string> : {}),
          };
          return spindle.generate.raw({
            type: 'raw',
            messages,
            ...providerFields,
            ...(conn?.id ? { connection_id: conn.id } : {}),
            parameters: buildLLMParams(opts),
            userId: userId ?? undefined,
          }).then(result => (result as { content: string }).content);
        }),
      );
    },

    generateStructured: <T>(
      messages: LLMMessage[],
      schema: ZodLike<T> | Record<string, unknown>,
      opts?: LLMOptions,
    ): Promise<T> => {
      assertPerm('generation', hasPerm);
      if (opts?.provider) assertProvider(opts.provider);
      // Detect and convert schema before the async chain so errors surface synchronously.
      const zodSchema = isZodLike(schema) ? (schema as z.ZodType<T>) : null;
      const jsonSchema = toJsonSchemaObject(schema);
      return shielded(
        resolveConnection(opts, userId).then(conn => {
          const effectiveProvider = opts?.provider ?? conn?.provider ?? '';
          const effectiveModel    = opts?.model    ?? conn?.model;
          const providerFields = {
            ...(effectiveProvider ? { provider: effectiveProvider } as Record<string, string> : {}),
            ...(effectiveModel    ? { model:    effectiveModel    } as Record<string, string> : {}),
          };
          // Schema is always injected into the system prompt so every provider
          // (including thinking models like GLM-4.7:thinking) gets explicit schema
          // guidance even when the API-level format enforcement is unavailable.
          //
          // For OpenAI-compatible providers (all except Anthropic/Google) we additionally
          // set response_format: json_object — this instructs the model to output raw
          // JSON rather than markdown.  We use json_object (not json_schema) because
          // json_schema is not universally supported across OpenAI-compatible APIs and
          // is silently ignored by thinking-model variants (GLM, etc.).
          //
          // For Anthropic/Google the response_format field is not accepted by the API.
          const finalMessages = enhanceMessagesWithSchema(messages, jsonSchema);
          const extraParams: Record<string, unknown> = !NO_RESPONSE_FORMAT_PROVIDERS.has(effectiveProvider)
            ? { response_format: { type: 'json_object' } }
            : {};

          return spindle.generate.raw({
            type: 'raw',
            messages: finalMessages,
            ...providerFields,
            ...(conn?.id ? { connection_id: conn.id } : {}),
            parameters: { ...buildLLMParams(opts), ...extraParams },
            userId: userId ?? undefined,
          }).then(result => {
            const content = (result as { content: string }).content;
            let parsed: T;
            try {
              parsed = JSON.parse(extractJsonFromResponse(content)) as T;
            } catch {
              throw new Error(
                `api.llm.generateStructured: response was not valid JSON: ${content.slice(0, 200)}`,
              );
            }
            if (zodSchema) {
              try {
                parsed = zodSchema.parse(parsed);
              } catch (err: unknown) {
                const msg = err instanceof Error ? err.message : String(err);
                throw new Error(`api.llm.generateStructured: schema validation failed: ${msg}`);
              }
            }
            return parsed;
          });
        }),
      );
    },
  };
}
