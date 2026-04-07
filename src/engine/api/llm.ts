/**
 * ============================================================================
 * LUMISCRIPT — LLM API
 * ============================================================================
 * generate, generateStructured, dryRun
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
  DryRunOptions,
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
 * Precedence:
 *  1. opts.connectionId   → spindle.connections.get()  (throws if not found)
 *  2. opts.connectionName → spindle.connections.list() (throws if name unmatched)
 *  3. no explicit connection → user's default connection (is_default flag, or
 *     first in the list). Mirrors the fallback behaviour of the main generation
 *     path so that calling api.llm.generate() without options "just works" when
 *     the user has a connection configured.
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
  // Fall back to the user's default connection (is_default, or first available).
  const connections = await spindle.connections.list(userId ?? undefined).catch(() => []);
  const def = connections.find(c => c.is_default) ?? connections[0];
  if (!def) return undefined;
  return { id: def.id, model: def.model, provider: def.provider };
}

function buildLLMParams(opts?: LLMOptions): Record<string, unknown> {
  const p: Record<string, unknown> = {};
  if (opts?.temperature       !== undefined) p.temperature         = opts.temperature;
  if (opts?.maxTokens         !== undefined) p.max_tokens          = opts.maxTokens;
  if (opts?.model             !== undefined) p.model               = opts.model;
  if (opts?.parallelToolCalls !== undefined) p.parallel_tool_calls = opts.parallelToolCalls;
  return p;
}

// ─── Structured output helpers ────────────────────────────────────────────────

/** Provider name for Google Gemini (uses responseMimeType/responseSchema parameters). */
const GOOGLE_PROVIDER = 'google';
/** Provider name for Anthropic Claude (uses output_config.format, not response_format). */
const ANTHROPIC_PROVIDER = 'anthropic';

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
 * Used for all providers as a supplemental hint alongside native structured output modes.
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

/**
 * Recursively add `additionalProperties: false` to every `object` node in a
 * JSON Schema. Required by Anthropic's `output_config.format.json_schema` mode,
 * which refuses schemas where object types do not explicitly forbid extra keys.
 */
function strictifySchema(schema: Record<string, unknown>): Record<string, unknown> {
  const s = { ...schema };
  if (s.type === 'object') {
    s.additionalProperties = false;
    if (s.properties && typeof s.properties === 'object') {
      const strict: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(s.properties as Record<string, Record<string, unknown>>)) {
        strict[k] = strictifySchema(v);
      }
      s.properties = strict;
    }
  }
  if (s.type === 'array' && s.items && typeof s.items === 'object' && s.items !== null) {
    s.items = strictifySchema(s.items as Record<string, unknown>);
  }
  return s;
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildLLMAPI(deps: APIBuildDeps): LumiScriptAPI['llm'] {
  const { hasPerm, userId, activeContext } = deps;

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
          // Schema is always injected into the system prompt — universal guidance
          // for every model regardless of API-level format enforcement.
          const finalMessages = enhanceMessagesWithSchema(messages, jsonSchema);

          // Three-tier native structured output support:
          //
          // Tier 1 — Anthropic: output_config.format.json_schema
          //   AnthropicProvider.buildBody explicitly copies params.output_config to
          //   body.output_config, so this lands correctly in the API request.
          //
          // Tier 2 — Google Gemini: responseMimeType + responseSchema
          //   GoogleProvider.buildBody forwards top-level parameters responseMimeType and
          //   responseSchema (or its alias responseJsonSchema) into generationConfig.
          //   Schema-in-prompt (above) is still included as an additional hint.
          //
          // Tier 3 — OpenAI-compatible (all other providers incl. NanoGPT, Z.AI, etc.):
          //   response_format: json_object — widely supported, including thinking models
          //   (GLM, etc.) that silently ignore json_schema mode.
          //   Passed through OpenAICompatibleProvider.buildBody's parameter passthrough.
          let extraParams: Record<string, unknown> = {};
          if (effectiveProvider === ANTHROPIC_PROVIDER) {
            extraParams = {
              output_config: { format: { type: 'json_schema', schema: strictifySchema(jsonSchema) } },
            };
          } else if (effectiveProvider === GOOGLE_PROVIDER) {
            extraParams = {
              responseMimeType: 'application/json',
              responseSchema: jsonSchema,
            };
          } else {
            extraParams = {
              response_format: { type: 'json_object' },
            };
          }

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

    generateWithTools: (<T = unknown>(
      messages: LLMMessage[],
      tools: Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
      opts?: LLMOptions,
      schema?: ZodLike<T> | Record<string, unknown>,
    ) => {
      assertPerm('generation', hasPerm);
      if (opts?.provider) assertProvider(opts.provider);
      return shielded(
        resolveConnection(opts, userId).then(conn => {
          const effectiveProvider = opts?.provider ?? conn?.provider;
          const effectiveModel    = opts?.model    ?? conn?.model;
          // Strip :thinking(:\d+)? suffixes — extended-reasoning model variants
          // reject function-calling requests on most providers (e.g. Mistral
          // routed via NanoGPT), causing all fallbacks to fail and a 503 to be
          // returned. Tool selection does not benefit from reasoning output; the
          // base model handles function calling correctly.
          const toolModel = effectiveModel?.replace(/:thinking(:\d+)?$/, '') ?? effectiveModel;
          const providerFields = {
            ...(effectiveProvider ? { provider: effectiveProvider } as Record<string, string> : {}),
            ...(toolModel         ? { model:    toolModel         } as Record<string, string> : {}),
          };
          // When a schema is supplied, inject it into the system prompt so the
          // model knows the expected JSON shape.  We intentionally do NOT add
          // response_format / output_config / responseMimeType here: combining
          // those API-level format constraints with a tools array causes
          // intermittent 503 rejections on multi-backend providers (NanoGPT →
          // Mistral, etc.).  The schema-in-prompt + extractJsonFromResponse +
          // Zod validation pipeline handles structured output reliably without
          // the API-level constraint.
          let effectiveMessages = messages;
          if (schema) {
            const jsonSchema = toJsonSchemaObject(schema as ZodLike<unknown> | Record<string, unknown>);
            effectiveMessages = enhanceMessagesWithSchema(messages, jsonSchema);
          }
          // Normalise tool parameter schemas: Anthropic requires input_schema to be
          // present; default to an empty object schema when the caller omitted it.
          const normalisedTools = tools.map(t => ({
            ...t,
            parameters: t.parameters ?? { type: 'object', properties: {} },
          }));
          return (spindle.generate.raw({
            type: 'raw' as const,
            messages: effectiveMessages,
            tools: normalisedTools,
            ...providerFields,
            ...(conn?.id ? { connection_id: conn.id } : {}),
            parameters: buildLLMParams(opts),
            userId: userId ?? undefined,
          } as any) as Promise<{ content?: string; tool_calls?: Array<{ name: string; args: Record<string, unknown>; call_id: string }> }>).then(raw => {
            // Structured output path: parse/validate on the final step (no tool_calls returned)
            if (schema && !raw.tool_calls?.length) {
              let parsed: unknown;
              try {
                const jsonText = extractJsonFromResponse(raw.content ?? '');
                parsed = JSON.parse(jsonText);
              } catch {
                parsed = raw.content;
              }
              if (isZodLike(schema)) {
                try {
                  parsed = (schema as ZodLike<T>).parse(parsed);
                } catch { /* return raw-parsed value if Zod validation fails */ }
              }
              return { content: parsed as T, tool_calls: undefined };
            }
            return {
              content:    raw.content ?? '',
              tool_calls: raw.tool_calls?.length ? raw.tool_calls : undefined,
            };
          });
        }),
      );
    }) as any,

    dryRun: (options?: DryRunOptions) => {
      assertPerm('generation', hasPerm);

      const chatId = options?.chatId ?? activeContext.chatId;
      if (!chatId) {
        throw new Error('api.llm.dryRun: no active chat — open a chat first');
      }

      return shielded(
        spindle.generate.dryRun({
          chatId,
          connectionId:   options?.connectionId,
          personaId:      options?.personaId,
          presetId:       options?.presetId,
          generationType: options?.generationType,
          parameters:     options?.parameters,
        }, userId ?? undefined).then(result => ({
          messages: result.messages.map(m => ({
            role:    m.role as 'system' | 'user' | 'assistant',
            content: m.content,
          })),
          // AssemblyBreakdownEntryDTO fields match DryRunBlock — pass through.
          breakdown:  result.breakdown,
          parameters: result.parameters,
          model:      result.model,
          provider:   result.provider,
          // DryRunTokenCountDTO needs snake_case → camelCase remapping.
          tokenCount: result.tokenCount ? {
            totalTokens:   result.tokenCount.total_tokens,
            breakdown:     result.tokenCount.breakdown,
            tokenizerId:   result.tokenCount.tokenizer_id,
            tokenizerName: result.tokenCount.tokenizer_name,
          } : undefined,
          // ActivationStatsDTO and MemoryStatsDTO are already camelCase — pass through.
          worldInfoStats: result.worldInfoStats,
          memoryStats:    result.memoryStats,
        })),
      );
    },
  };
}
