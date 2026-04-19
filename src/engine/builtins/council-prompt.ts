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
 * Output shape depends on whether structured context is available:
 *
 *   With `opts.contextMessages` (preferred, Lumiverse 993544c8+):
 *     [ system: identity + tool spec + directives,
 *       ...contextMessages,          // real system/user/assistant turns
 *       user:   closing directive ]
 *
 *   Fallback (older hosts or script didn't pass contextMessages):
 *     [ system: identity + tool spec + directives,
 *       system: flattened chat context from args.context (when non-empty),
 *       user:   closing directive ]
 *
 * The structured path preserves role boundaries from the host's chat
 * history, which gives the analyst LLM real turn-taking and voice precedent
 * from prior assistant messages — closes most of the behavioural gap
 * between extension tools and sidecar tools.
 *
 * The fallback path attaches the flattened context as a system message
 * (not user) because its role semantically is "background context," and
 * providers that specialize on system-vs-user (e.g. Anthropic) handle it
 * better that way. Both paths emit the same closing user directive.
 *
 * Precedence rule when both are present: structured wins, flattened
 * ignored. Empty structured array (`contextMessages: []`) is treated as
 * "structured not available" — we fall back to the flattened string.
 */
function buildCouncilMessages(opts: CouncilMessagesOptions): LLMMessage[] {
  // buildCouncilSystemPrompt already asserts councilMember — don't duplicate.
  const messages: LLMMessage[] = [];
  messages.push({ role: 'system', content: buildCouncilSystemPrompt(opts) });

  // Prefer structured contextMessages when available. Empty array is
  // treated as "not available" — an empty flattened string wouldn't emit
  // anything either, so falling back doesn't lose anything.
  if (opts.contextMessages && opts.contextMessages.length > 0) {
    messages.push(...opts.contextMessages);
  } else {
    const context = typeof opts.args?.context === 'string' ? opts.args.context.trim() : '';
    if (context.length > 0) {
      messages.push({ role: 'system', content: context });
    }
  }

  messages.push({
    role: 'user',
    content: `Review the story context above. Provide specific, actionable input from your unique perspective as ${opts.councilMember.name}. Filter every contribution through your personality, biases, and worldview.`,
  });

  return messages;
}

// ─── Debug namespace ────────────────────────────────────────────────────────
//
// Presentation-friendly inspection helpers for Council-tool development.
// All five functions return pre-formatted strings — scripts decide whether
// to console.log, spindle.log.info, toast, or persist. Useful during chats
// where the editor is closed: entries queue up in the frontend panel's
// consoleHistory state (always-mounted, per-script-capped) and surface
// when the user opens the editor later.
//
// Style conventions: ASCII rule lines, ALL-CAPS section headers, no ANSI
// colors (LS console doesn't render them), no emoji. Rule width fixed at
// 60 to fit typical dock-panel widths without wrapping.

const RULE    = '='.repeat(60);
const SUBRULE = '-'.repeat(60);

/**
 * Wrap content in a titled frame: rule / title / rule / content / rule.
 * Used by every public debug function for visual consistency.
 */
function frame(title: string, content: string): string {
  return `${RULE}\n${title}\n${RULE}\n${content}\n${RULE}`;
}

/**
 * Preview a string field for the member snapshot. Null renders as
 * `(null)`, empty as `(empty)`, short strings pass through verbatim, and
 * long strings (> 60 chars) truncate to a `[N chars] <preview>...` form
 * so a single snapshot doesn't blow up the console.
 */
function previewString(s: string | null, maxLen: number = 60): string {
  if (s === null) return '(null)';
  if (s === '') return '(empty)';
  if (s.length <= maxLen) return s;
  return `[${s.length} chars] ${s.slice(0, maxLen - 3)}...`;
}

/** Unframed snapshot body — shared between `formatMember` and `formatReport`. */
function memberSnapshotContent(cm: CouncilMemberContext): string {
  const genderLabel = cm.genderIdentity === 1 ? ' (feminine)'
                    : cm.genderIdentity === 2 ? ' (masculine)'
                    : ' (unspecified)';
  return [
    `name:           ${cm.name}`,
    `role:           ${cm.role || '(empty)'}`,
    `memberId:       ${cm.memberId}`,
    `itemId:         ${cm.itemId}`,
    `packId:         ${cm.packId}`,
    `packName:       ${cm.packName}`,
    `chance:         ${cm.chance}`,
    `genderIdentity: ${cm.genderIdentity}${genderLabel}`,
    `avatarUrl:      ${cm.avatarUrl ?? '(null)'}`,
    `definition:     ${previewString(cm.definition)}`,
    `personality:    ${previewString(cm.personality)}`,
    `behavior:       ${previewString(cm.behavior)}`,
  ].join('\n');
}

/** Unframed messages body — each message gets a header + subrule + content. */
function messagesContent(messages: LLMMessage[]): string {
  return messages.map((m, i) => {
    const header = `[${i + 1}] ${m.role} — ${m.content.length} chars`;
    return `${header}\n${SUBRULE}\n${m.content}`;
  }).join('\n\n');
}

/**
 * Pretty-printed snapshot of all `CouncilMemberContext` fields. Shows
 * identifiers (memberId/itemId/packId/packName), identity strings
 * (name/role), personality fields (with truncation for long values),
 * chance, gender-identity label, and avatar URL.
 *
 * Useful for "which member is this invocation tagged to?" debugging
 * and for confirming that upstream sent a well-formed snapshot.
 */
function debugFormatMember(cm: CouncilMemberContext): string {
  return frame('COUNCIL MEMBER SNAPSHOT', memberSnapshotContent(cm));
}

/**
 * Framed wrapper around `buildCouncilIdentity` — the identity block
 * with the member's name in the header. Shows what the LLM sees as the
 * "you are X" framing prefix in the system prompt.
 */
function debugFormatIdentity(cm: CouncilMemberContext): string {
  return frame(`COUNCIL IDENTITY BLOCK — ${cm.name}`, buildCouncilIdentity(cm));
}

/**
 * Framed wrapper around `buildCouncilSystemPrompt` — the complete
 * system prompt that will go to the LLM as `messages[0]`, with
 * character count in the header for size comparison across runs.
 */
function debugFormatSystemPrompt(opts: CouncilSystemPromptOptions): string {
  const content = buildCouncilSystemPrompt(opts);
  return frame(`COUNCIL SYSTEM PROMPT — ${content.length} chars`, content);
}

/**
 * Framed rendering of the full `LLMMessage[]` array produced by
 * `buildCouncilMessages`. Each message gets a sub-header (index, role,
 * char count) followed by its content separated by a subrule. Shows
 * the context system message that's often the largest piece going to
 * the LLM and isn't visible from the system-prompt view alone.
 */
function debugFormatMessages(opts: CouncilMessagesOptions): string {
  const msgs  = buildCouncilMessages(opts);
  const total = msgs.reduce((n, m) => n + m.content.length, 0);
  return frame(
    `COUNCIL MESSAGES — ${msgs.length} messages, ${total} chars total`,
    messagesContent(msgs),
  );
}

/**
 * Comprehensive one-call report: member snapshot + identity + system
 * prompt + full messages, stitched together with `\n\n` between
 * sections. What you reach for when you want the whole picture in one
 * `console.log` dump for inspection or bug reporting.
 */
function debugFormatReport(opts: CouncilMessagesOptions): string {
  return [
    debugFormatMember(opts.councilMember),
    debugFormatIdentity(opts.councilMember),
    debugFormatSystemPrompt(opts),
    debugFormatMessages(opts),
  ].join('\n\n');
}

// ─── Factory ─────────────────────────────────────────────────────────────────

/**
 * Factory for `ls:council-prompt`. Unlike `ls:components`, this library
 * doesn't depend on the calling script's api (pure string helpers, no DOM
 * or chat operations), so the factory ignores its argument. The returned
 * exports are shared — safe to memoize across callers, but the registry's
 * per-require cache already handles that.
 *
 * The `debug` namespace hosts presentation-friendly inspection helpers
 * that wrap the core builders. Split into a sub-object rather than flat
 * top-level exports so tab-complete in the script editor stays focused
 * on the builders by default; debug surfaces explicitly via `.debug.*`.
 */
export const createCouncilPromptLibrary: BuiltinLibraryFactory = () => ({
  buildCouncilIdentity,
  roleNote,
  brevityNote,
  userControlNote,
  buildCouncilSystemPrompt,
  buildCouncilMessages,
  debug: {
    formatMember:       debugFormatMember,
    formatIdentity:     debugFormatIdentity,
    formatSystemPrompt: debugFormatSystemPrompt,
    formatMessages:     debugFormatMessages,
    formatReport:       debugFormatReport,
  },
});
