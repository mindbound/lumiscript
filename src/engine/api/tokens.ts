/**
 * ============================================================================
 * LUMISCRIPT — TOKENS API
 * ============================================================================
 * Thin proxy over `spindle.tokens.*` (available from lumiverse-spindle-types
 * v0.4.29+). Server-side token counting using the provider's actual
 * tokenizer, falling back to a char/4 heuristic (`approximate: true`) when
 * the tokenizer for the resolved model isn't bundled.
 *
 * Free-tier — no permission required.
 *
 * The upstream DTO uses snake_case (`total_tokens`, `tokenizer_id`,
 * `tokenizer_name`). We re-map to camelCase at the boundary to match the
 * rest of the LumiScript API surface, and pass the active `userId` through
 * as an implicit option so scripts don't need to think about operator-scoped
 * extensions.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  TokenCountOptions,
  TokenCountResult,
  LLMMessage,
} from '../../types/script.js';
import { type APIBuildDeps, shielded } from './shared.js';

export function buildTokensAPI(deps: APIBuildDeps): LumiScriptAPI['tokens'] {
  const { userId } = deps;

  /**
   * Convert the upstream snake_case DTO to our camelCase shape. Also narrows
   * `model` to a string — upstream declares it as `string` unconditionally,
   * which is what we want.
   */
  function fromDTO(dto: {
    total_tokens: number;
    model: string;
    modelSource: 'main' | 'sidecar' | 'explicit';
    tokenizer_id: string | null;
    tokenizer_name: string;
    approximate: boolean;
  }): TokenCountResult {
    return {
      totalTokens:    dto.total_tokens,
      model:          dto.model,
      modelSource:    dto.modelSource,
      tokenizerId:    dto.tokenizer_id,
      tokenizerName:  dto.tokenizer_name,
      approximate:    dto.approximate,
    };
  }

  /**
   * Build the upstream options DTO with `userId` folded in. Kept as a helper
   * so the three methods stay three-liners.
   */
  function toDTO(options: TokenCountOptions | undefined): {
    model?: string;
    modelSource?: 'main' | 'sidecar';
    userId?: string;
  } {
    return {
      model:       options?.model,
      modelSource: options?.modelSource,
      userId:      userId ?? undefined,
    };
  }

  return {
    countText(text: string, options?: TokenCountOptions): Promise<TokenCountResult> {
      return shielded(
        spindle.tokens.countText(text, toDTO(options)).then(fromDTO),
      );
    },

    countMessages(messages: LLMMessage[], options?: TokenCountOptions): Promise<TokenCountResult> {
      // Upstream accepts any array whose items expose `{ role, content }`,
      // matching our `LLMMessage` shape exactly. No re-mapping needed.
      return shielded(
        spindle.tokens.countMessages(messages, toDTO(options)).then(fromDTO),
      );
    },

    countChat(chatId: string, options?: TokenCountOptions): Promise<TokenCountResult> {
      return shielded(
        spindle.tokens.countChat(chatId, toDTO(options)).then(fromDTO),
      );
    },
  };
}
