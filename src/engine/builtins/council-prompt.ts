/**
 * ============================================================================
 * LUMISCRIPT — BUILT-IN LIBRARY: ls:council-prompt
 * ============================================================================
 * Helpers for building Council-voice system prompts and message arrays that
 * mirror Lumiverse's built-in sidecar Council tool prompt construction. Uses
 * the `CouncilMemberContext` delivered via `ToolInvocationContext` (upstream
 * Lumiverse commit 8d310f8+) to reproduce the "speak as this member" behavior
 * that built-in Council tools get natively.
 *
 * Three user-level Council settings that the host keeps for itself are NOT
 * exposed to extension tools: per-tool prompt directives (`tool.prompt`),
 * `maxWordsPerTool`, and `allowUserControl`. These are supplied by the tool
 * author through the helper's options — published tools probably want
 * deterministic behavior rather than inheriting whatever local preferences
 * the invoking user has configured.
 *
 * Context shape difference: extension tools receive `args.context` as a
 * pre-flattened single string (roles inlined with `role:` prefixes), not as
 * the structured chat-message array the sidecar path sees. This is a host-
 * side delivery-path choice and can't be reversed. `buildCouncilMessages`
 * passes the flattened string through as a single system message.
 *
 * Usage:
 *   const { buildCouncilMessages } = await script.require('ls:council-prompt');
 *   api.tools.register('analyze_tone', def, async (args, api, ctx) => {
 *     if (!ctx?.councilMember) {
 *       return await api.llm.generate([
 *         { role: 'user', content: `Analyze: ${args.context}` }
 *       ]);
 *     }
 *     const messages = buildCouncilMessages({
 *       councilMember: ctx.councilMember,
 *       args,
 *       tool: { display_name: '...', description: '...', prompt: '...' },
 *       maxWordsPerTool: 100,
 *       allowUserControl: false,
 *     });
 *     return await api.llm.generate(messages);
 *   });
 *
 * Low-level building blocks (`buildCouncilIdentity`, `roleNote`,
 * `brevityNote`, `userControlNote`) are also exported so scripts can compose
 * their own prompts using individual pieces.
 */

import type {
  CouncilMemberContext,
  CouncilMessagesOptions,
  CouncilSystemPromptOptions,
  LLMMessage,
} from '../../types/script.js';
import type { BuiltinLibraryFactory } from '../builtin-library-registry.js';

// ─── Building blocks ─────────────────────────────────────────────────────────

/**
 * Member identity block. Returns the name-only line when the member has no
 * personality fields; otherwise emits the full "WHO YOU ARE" + "INSTRUCTION"
 * structure that forces the model to speak through the member's voice.
 *
 * Byte-equivalent to the host's `buildMemberIdentity` helper in
 * `council-execution.service.ts`.
 */
function buildCouncilIdentity(councilMember: CouncilMemberContext): string {
  let identity = `You are a council member named "${councilMember.name}".`;

  const parts: string[] = [];
  if (councilMember.definition)  parts.push(`### Your Physical Identity ###\n${councilMember.definition}`);
  if (councilMember.personality) parts.push(`### Your Personality ###\n${councilMember.personality}`);
  if (councilMember.behavior)    parts.push(`### Your Behavioral Patterns ###\n${councilMember.behavior}`);
  if (parts.length > 0) {
    identity += `\n\n### WHO YOU ARE ###\n\n${parts.join('\n\n')}`;
    identity += `\n\n### INSTRUCTION ###\nYou MUST answer ALL tool calls and contributions through the lens of your personality, behavior, and identity described above. Your biases, quirks, speech patterns, and perspective should color every observation and suggestion you make. Do NOT provide generic or neutral responses—filter everything through who you are. Your unique voice and worldview must be evident in every contribution.`;
  }

  return identity;
}

/**
 * Role-aware directive. Returns '' when `role` is empty or whitespace — the
 * system prompt stays clean for members without an assigned role. The
 * returned string (when non-empty) starts with a single '\n' so it
 * concatenates naturally after the identity block.
 */
function roleNote(role: string): string {
  if (!role || !role.trim()) return '';
  return `\nYour role on the council is: ${role}\nWhen using your tools, consider how your role influences your perspective and recommendations. Draw upon your expertise as ${role} to provide valuable insights.`;
}

/**
 * Per-tool word-budget note. Returns '' when `maxWords <= 0`, otherwise
 * emits the brevity directive the host uses. The returned string starts
 * with '\n\n' so it attaches as its own paragraph in the tool block.
 */
function brevityNote(maxWords: number): string {
  if (!maxWords || maxWords <= 0) return '';
  return `\n\nIMPORTANT — BREVITY REQUIREMENT: Keep each tool response field under ${maxWords} words. Be direct, specific, and actionable. No preamble, filler, or repetition. Every word must earn its place.`;
}

/**
 * User-character-guidance block. Unlike `roleNote` and `brevityNote`, this
 * is always present — the host always emits one variant or the other.
 * Starts with '\n\n' so it attaches as its own paragraph.
 *
 * @param allow  `true` permits the model to direct user-character actions;
 *               `false` forbids it (the restrictive default).
 */
function userControlNote(allow: boolean): string {
  return allow
    ? `\n\n### User Character Guidance ###\nYou may plan and suggest actions, dialogue, thoughts, and development for ALL characters in the story, including the user's character. Treat all participants — including the user — as characters whose arcs, actions, and dialogue you can direct and shape.`
    : `\n\n### User Character Guidance ###\nIMPORTANT: Do NOT plan actions, dialogue, thoughts, or decisions for the user's character. Focus exclusively on how the story's non-player characters should react, behave, and develop in response to the user's input. Your suggestions should only concern the characters, world, and narrative elements — never dictate what the user's character does, says, thinks, or feels.`;
}

// ─── Full prompt builders ────────────────────────────────────────────────────

/**
 * Assemble the full system prompt used in the Council-voice message array.
 * Byte-equivalent to the host's sidecar-path system prompt when all options
 * are supplied.
 *
 * Layout:
 *   <identity block>
 *   <role note (optional)>
 *
 *   You are being asked to use the following analysis tool...
 *
 *   ## Tool: <display_name>
 *   <description>
 *
 *   <tool.prompt (optional)><dynamicSuffix (optional)><brevity (optional)><user-control>
 */
function buildCouncilSystemPrompt(opts: CouncilSystemPromptOptions): string {
  if (!opts.councilMember) {
    throw new Error(
      `ls:council-prompt: buildCouncilSystemPrompt requires councilMember. ` +
      `This helper is only meaningful for Council-originated invocations — ` +
      `check ctx?.councilMember before calling.`,
    );
  }
  const identity    = buildCouncilIdentity(opts.councilMember);
  const role        = roleNote(opts.councilMember.role);
  const brevity     = brevityNote(opts.maxWordsPerTool ?? 0);
  const userControl = userControlNote(opts.allowUserControl ?? false);
  const toolPrompt  = opts.tool.prompt ?? '';
  const dynamic     = opts.dynamicSuffix ?? '';

  return `${identity}${role}

You are being asked to use the following analysis tool. Respond with your analysis directly — do not use JSON formatting.

## Tool: ${opts.tool.display_name}
${opts.tool.description}

${toolPrompt}${dynamic}${brevity}${userControl}`;
}

/**
 * Assemble the full `LLMMessage[]` array ready to feed into `api.llm.generate`.
 *
 * Output shape:
 *   [ system: identity + tool spec + directives,
 *     system: flattened chat context (only when args.context is non-empty),
 *     user:   closing "Review the story context..." directive ]
 *
 * Extension tools receive `args.context` as a pre-flattened string rather
 * than structured chat messages — this is a host-side delivery-path choice
 * that can't be undone here. The context is attached as a system message
 * (not user) because its role semantically is "background context", and
 * providers that specialize on system-vs-user (e.g. Anthropic) handle it
 * better that way.
 */
function buildCouncilMessages(opts: CouncilMessagesOptions): LLMMessage[] {
  // buildCouncilSystemPrompt already asserts councilMember — don't duplicate.
  const messages: LLMMessage[] = [];
  messages.push({ role: 'system', content: buildCouncilSystemPrompt(opts) });

  const context = typeof opts.args?.context === 'string' ? opts.args.context.trim() : '';
  if (context.length > 0) {
    messages.push({ role: 'system', content: context });
  }

  messages.push({
    role: 'user',
    content: `Review the story context above. Provide specific, actionable input from your unique perspective as ${opts.councilMember.name}. Filter every contribution through your personality, biases, and worldview.`,
  });

  return messages;
}

// ─── Factory ─────────────────────────────────────────────────────────────────

/**
 * Factory for `ls:council-prompt`. Unlike `ls:components`, this library
 * doesn't depend on the calling script's api (pure string helpers, no DOM
 * or chat operations), so the factory ignores its argument. The returned
 * exports are shared — safe to memoize across callers, but the registry's
 * per-require cache already handles that.
 */
export const createCouncilPromptLibrary: BuiltinLibraryFactory = () => ({
  buildCouncilIdentity,
  roleNote,
  brevityNote,
  userControlNote,
  buildCouncilSystemPrompt,
  buildCouncilMessages,
});
