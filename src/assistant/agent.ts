/**
 * ============================================================================
 * LUMISCRIPT — ASSISTANT BACKEND AGENT LOOP
 * ============================================================================
 * Orchestrates one turn of the in-app assistant conversation:
 *
 *   1. Assemble messages: [system prompt, ...history, new user message].
 *   2. Stream a generation via `spindle.generate.rawStream`, with the
 *      `ASSISTANT_TOOLS` array passed in so the model can call them.
 *   3. As `token` / `reasoning` chunks arrive, fire the caller's events
 *      callbacks so the frontend can render incrementally.
 *   4. On the terminal `done` chunk, inspect for `tool_calls`. If present:
 *      - Dispatch each through `dispatchAssistantTool`.
 *      - Append an assistant turn (tool_use parts) + a user turn
 *        (tool_result parts) to the message history.
 *      - Roundtrip `reasoning_content` from the assistant turn back into
 *        the next request (required for DeepSeek thinking-mode tool loops,
 *        ignored harmlessly by other providers).
 *      - Loop back to step 2.
 *   5. When no `tool_calls` remain, the final assistant content is the
 *      answer. Emit it via `events.onTurnCompleted` and return.
 *
 * See `notes/code-assistant-design.md` § S7.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LlmMessageDTO, ToolCallDTO } from 'lumiverse-spindle-types';
import type { LlmMessagePart } from '../types/script.js';
import { buildAssistantSystemPrompt } from './system-prompt.js';
import { ASSISTANT_TOOLS, dispatchAssistantTool } from './tools.js';
import type { AssistantPersona } from './types.js';

// ─── Public types ────────────────────────────────────────────────────────────

/** One turn's worth of history, in the host's wire format. */
export type AssistantHistoryMessage = LlmMessageDTO;

export interface RunTurnOptions {
  /** Conversation history prior to the new user message. */
  history: AssistantHistoryMessage[];
  /** The new user message that triggered this turn. */
  userInput: string;
  /**
   * Active Lumiverse user ID. **Required** — LumiScript is an operator-scoped
   * extension and `spindle.generate.rawStream` rejects requests missing it
   * with "userId is required for operator-scoped extensions". Backend passes
   * `activeUserId` here.
   */
  userId: string;
  /** Lumiverse LLM connection ID the user has selected for this conversation. */
  connectionId?: string;
  /** Direct provider + model fields, used when no connectionId is supplied. */
  provider?: string;
  model?: string;
  /** Sampler parameters (temperature / top_p / max_tokens / parallel_tool_calls). */
  parameters?: Record<string, unknown>;
  /** Optional abort signal — propagates into the underlying generation. */
  signal?: AbortSignal;
  /** Persona override; defaults to LISA_PERSONA inside `buildAssistantSystemPrompt`. */
  persona?: AssistantPersona;
  /**
   * Safety limit on agentic-loop iterations. Each tool-call response counts
   * as one iteration. Default 8 — generous for normal Q&A, hard ceiling for
   * runaway loops.
   */
  maxIterations?: number;
}

/** A single tool call event surfaced to the caller mid-turn. */
export interface AssistantToolCallEvent {
  callId: string;
  name: string;
  args: Record<string, unknown>;
  result: string;
  isError: boolean;
}

export interface TurnEvents {
  onToken?: (token: string) => void;
  onReasoning?: (token: string) => void;
  onToolCall?: (event: AssistantToolCallEvent) => void;
  onTurnCompleted?: (final: { content: string; usage?: TurnUsage }) => void;
  onError?: (error: string) => void;
  /**
   * Caller-supplied `opts.signal` aborted the turn. Distinct from `onError`
   * so callers can render a clean "stopped" state instead of an error toast.
   * Fired AFTER any partial-token events that arrived before the abort
   * propagated through the stream.
   */
  onAborted?: () => void;
}

export interface TurnUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  /**
   * True when these numbers were computed locally via `spindle.tokens.countText`
   * because the upstream provider didn't surface usage on the streaming
   * response (empirically: GLM-5.1:thinking via NanoGPT, some OpenAI-compat
   * gateways). Affects UI display — typically rendered with a `~` prefix
   * and a tooltip explaining the approximation.
   *
   * **Known limitation**: single-shot count at end of turn. For multi-
   * iteration tool loops, providers bill prompt tokens per-iteration (each
   * upstream call is a separate billable prompt with the growing history);
   * our count is based on the FINAL messages array, so earlier iterations'
   * prompt costs are under-counted. Acceptable for the "approximate"
   * display contract; revisit if strict billing parity ever matters.
   */
  estimated?: boolean;
}

export interface TurnResult {
  /** Final assistant message content (text). */
  content: string;
  /** Full message history including the new user message, all tool turns,
   *  and the final assistant turn. Suitable for persisting as the thread's
   *  new state. */
  messages: AssistantHistoryMessage[];
  /** Aggregated token usage across all iterations of the loop. Undefined
   *  when the upstream host/provider didn't surface usage on any iteration
   *  (some streaming endpoints don't — empirically observed with GLM-5.1
   *  thinking-mode via NanoGPT, and some OpenAI-compat gateways). Callers
   *  should treat undefined as "unknown" rather than "zero". */
  usage?: TurnUsage;
}

// ─── The loop ────────────────────────────────────────────────────────────────

const MAX_ITERATIONS_DEFAULT = 8;

interface DoneShape {
  content: string;
  reasoning?: string;
  finish_reason: string;
  tool_calls?: ToolCallDTO[];
  usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
}

/**
 * Run one assistant turn end-to-end.
 *
 * The function streams the model's response via the provided event callbacks,
 * dispatches any tool calls locally, and loops until the model produces a
 * text-only response (no more `tool_calls`). On any error mid-loop, calls
 * `onError` and rejects with the same string.
 */
export async function runAssistantTurn(
  opts: RunTurnOptions,
  events: TurnEvents = {},
): Promise<TurnResult> {
  const maxIterations = opts.maxIterations ?? MAX_ITERATIONS_DEFAULT;

  // Resolve the connection profile up front. The host accepts `connection_id`
  // alone for some flows but requires explicit `model` + `provider` for
  // others (NanoGPT errors with "Missing or invalid required parameter:
  // model"; Anthropic / Google return "unknown provider for model"; DeepSeek
  // errors with an empty model field). The user-script LLM API
  // (`engine/api/llm.ts:resolveConnection`) does the same — looks up the
  // connection by ID, pulls model + provider, passes all three on the
  // request. We mirror that here.
  let resolvedProvider = opts.provider;
  let resolvedModel = opts.model;
  if (opts.connectionId && (!resolvedProvider || !resolvedModel)) {
    try {
      const conn = await spindle.connections.get(opts.connectionId, opts.userId);
      if (conn) {
        resolvedProvider = resolvedProvider ?? conn.provider;
        resolvedModel = resolvedModel ?? conn.model;
      } else {
        const msg = `Connection "${opts.connectionId}" not found.`;
        events.onError?.(msg);
        throw new Error(msg);
      }
    } catch (err) {
      const msg = `Failed to resolve connection "${opts.connectionId}": ` +
        (err instanceof Error ? err.message : String(err));
      events.onError?.(msg);
      throw err instanceof Error ? err : new Error(msg);
    }
  }

  // Assemble the initial message array. The user-input new turn rounds it
  // out; subsequent tool-call iterations append turn pairs to this array.
  const messages: AssistantHistoryMessage[] = [
    { role: 'system', content: buildAssistantSystemPrompt(opts.persona) },
    ...opts.history,
    { role: 'user', content: opts.userInput },
  ];

  let totalPromptTokens = 0;
  let totalCompletionTokens = 0;
  // Track whether ANY iteration's done chunk carried real (non-zero) usage.
  // Some providers send `done.usage` with all-zero fields on streaming
  // responses, which we treat as "didn't report" — same as `usage` being
  // omitted entirely. Lets the caller distinguish "0 tokens" (impossible —
  // we definitely generated SOME output) from "unknown".
  let hasRealUsage = false;

  try {
    for (let iter = 0; iter < maxIterations; iter++) {
      // Build the generation request. `connection_id` wins over explicit
      // provider/model when both are present (host convention). `userId` is
      // required by the host for operator-scoped extensions — without it
      // the host rejects with "userId is required for operator-scoped
      // extensions".
      // Pass connection_id alongside the resolved provider+model. Provider
      // and model aren't declared on GenerationRequestDTO but the host
      // accepts them at runtime — same as `engine/api/llm.ts` does for the
      // user-script LLM surface. Cast through a Record so the spread
      // typechecks against the wider DTO type.
      const providerFields: Record<string, string> = {};
      if (resolvedProvider) providerFields.provider = resolvedProvider;
      if (resolvedModel)    providerFields.model    = resolvedModel;
      const request = {
        type: 'raw' as const,
        messages,
        tools: ASSISTANT_TOOLS as unknown as Array<{ name: string; description: string; parameters?: Record<string, unknown> }>,
        userId: opts.userId,
        ...providerFields,
        ...(opts.connectionId ? { connection_id: opts.connectionId } : {}),
        ...(opts.parameters ? { parameters: opts.parameters } : {}),
        ...(opts.signal ? { signal: opts.signal } : {}),
      };

      // Stream the response. We collect the terminal `done` chunk separately
      // from the incremental tokens so we can inspect it for tool calls and
      // for the `reasoning` field after the stream ends.
      let done: DoneShape | undefined;
      // `spindle.generate.rawStream` is typed as returning `unknown`-yielding
      // async iterable on some host versions; cast for narrower handling.
      const stream = spindle.generate.rawStream(request as unknown as Parameters<typeof spindle.generate.rawStream>[0]) as AsyncIterable<unknown>;
      for await (const chunk of stream) {
        const c = chunk as { type: string; token?: string } & Partial<DoneShape>;
        if (c.type === 'token' && typeof c.token === 'string') {
          events.onToken?.(c.token);
        } else if (c.type === 'reasoning' && typeof c.token === 'string') {
          events.onReasoning?.(c.token);
        } else if (c.type === 'done') {
          done = c as DoneShape;
        }
      }

      if (!done) {
        // Stream ended without a `done` chunk — provider or host error.
        const msg = 'Generation ended without a terminal done chunk.';
        events.onError?.(msg);
        throw new Error(msg);
      }

      // Aggregate usage across iterations. Only flip `hasRealUsage` when at
      // least one field carries a positive value — a `done.usage` payload of
      // all zeros (some providers' streaming default) is functionally
      // equivalent to "didn't report", and we'd rather hide the display
      // than show misleading zeros.
      if (done.usage) {
        const pt = done.usage.prompt_tokens ?? 0;
        const ct = done.usage.completion_tokens ?? 0;
        if (pt > 0 || ct > 0) hasRealUsage = true;
        totalPromptTokens += pt;
        totalCompletionTokens += ct;
      }

      const toolCalls = done.tool_calls ?? [];

      if (toolCalls.length === 0) {
        // Final answer turn. Append to history and return.
        const finalContent = done.content ?? '';
        const finalTurn: AssistantHistoryMessage = {
          role: 'assistant',
          content: finalContent,
          ...(done.reasoning ? { reasoning_content: done.reasoning } : {}),
        };
        messages.push(finalTurn);

        let usage: TurnUsage | undefined;
        if (hasRealUsage) {
          usage = {
            promptTokens: totalPromptTokens,
            completionTokens: totalCompletionTokens,
            totalTokens: totalPromptTokens + totalCompletionTokens,
          };
        } else {
          // Upstream didn't report usage. Fall back to client-side counting
          // via `spindle.tokens.countText` against the resolved model. Returns
          // undefined on counting failure — modal then hides the strip
          // rather than mislead with bad numbers.
          usage = await estimateUsageLocally(messages, finalContent, resolvedModel, opts.userId);
        }
        events.onTurnCompleted?.({ content: finalContent, usage });
        return { content: finalContent, messages, usage };
      }

      // Tool-call iteration. Build the assistant turn with tool_use parts,
      // dispatch each tool locally, build the user turn with tool_result
      // parts, append both to history, loop.
      const assistantParts: LlmMessagePart[] = toolCalls.map((tc) => ({
        type: 'tool_use',
        id: tc.call_id,
        name: tc.name,
        input: tc.args ?? {},
      }));
      const assistantTurn: AssistantHistoryMessage = {
        role: 'assistant',
        content: assistantParts,
        // Echo reasoning_content on the assistant turn — DeepSeek
        // thinking-mode rejects continuations missing it. Other providers
        // ignore the field harmlessly.
        ...(done.reasoning ? { reasoning_content: done.reasoning } : {}),
      };

      const toolResultParts: LlmMessagePart[] = [];
      for (const call of toolCalls) {
        const result = dispatchAssistantTool(call.name, call.args ?? {});
        events.onToolCall?.({
          callId: call.call_id,
          name: call.name,
          args: call.args ?? {},
          result: result.content,
          isError: result.isError,
        });
        toolResultParts.push({
          type: 'tool_result',
          tool_use_id: call.call_id,
          content: result.content,
          ...(result.isError ? { is_error: true } : {}),
        });
      }
      const userToolTurn: AssistantHistoryMessage = {
        role: 'user',
        content: toolResultParts,
      };

      messages.push(assistantTurn, userToolTurn);
      // Loop continues — next iteration sends the augmented history.
    }

    // Iteration ceiling hit without a final text answer.
    const msg = `Assistant loop exceeded ${maxIterations} iterations without converging.`;
    events.onError?.(msg);
    throw new Error(msg);
  } catch (err) {
    // Abort path takes precedence over error path. `spindle.generate.rawStream`
    // throws an AbortError (or similar — host-dependent) when the upstream
    // signal fires; we don't want to treat that as an error toast. Check the
    // caller's signal directly rather than introspecting the error type, which
    // varies across providers (DOMException, Error with name='AbortError', etc.).
    if (opts.signal?.aborted) {
      events.onAborted?.();
      throw err instanceof Error ? err : new Error('aborted');
    }
    const msg = err instanceof Error ? err.message : String(err);
    events.onError?.(msg);
    throw err instanceof Error ? err : new Error(msg);
  }
}

// ─── Client-side token estimation fallback ───────────────────────────────────

/**
 * Estimate prompt + completion tokens locally via `spindle.tokens.countText`
 * when the upstream provider didn't surface streaming usage.
 *
 * Approximation notes (also called out on `TurnUsage.estimated`'s JSDoc):
 *   - **Prompt**: serialise the full messages array as JSON for counting.
 *     This slightly OVER-counts vs the actual wire format (extra quotes,
 *     braces, key names) but providers add their own serialisation overhead
 *     that roughly compensates. Treat the result as directionally accurate,
 *     not exact.
 *   - **Completion**: just the final answer text. Tool-call iterations'
 *     intermediate generations aren't counted separately — they appear in
 *     the final messages array as `tool_use` parts, so they get folded into
 *     the prompt count rather than completion.
 *   - **Multi-iteration under-count**: single shot at end-of-turn, so each
 *     iteration's prompt isn't counted separately the way providers bill.
 *     For typical 1–3 iteration loops this is a small undercount; for the
 *     worst-case 8-iteration bound it could miss meaningful prompt-token
 *     cost. Acceptable for the "approximate" display contract.
 *
 * Returns `undefined` on any failure — caller treats that the same as the
 * "no usage" path, i.e. modal hides the strip rather than show bad numbers.
 */
async function estimateUsageLocally(
  messages: AssistantHistoryMessage[],
  finalContent: string,
  model: string | undefined,
  userId: string,
): Promise<TurnUsage | undefined> {
  try {
    const promptText = JSON.stringify(messages);
    const opts = {
      ...(model ? { model } : {}),
      userId,
    };
    const [promptResult, completionResult] = await Promise.all([
      spindle.tokens.countText(promptText, opts),
      finalContent
        ? spindle.tokens.countText(finalContent, opts)
        : Promise.resolve({ total_tokens: 0 } as { total_tokens: number }),
    ]);
    return {
      promptTokens: promptResult.total_tokens,
      completionTokens: completionResult.total_tokens,
      totalTokens: promptResult.total_tokens + completionResult.total_tokens,
      estimated: true,
    };
  } catch {
    return undefined;
  }
}
