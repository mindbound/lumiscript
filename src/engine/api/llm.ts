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
              output_config: { format: { type: 'json_schema', schema: jsonSchema } },
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
