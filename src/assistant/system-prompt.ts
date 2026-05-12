/**
 * ============================================================================
 * LUMISCRIPT — ASSISTANT SYSTEM PROMPT BUILDER
 * ============================================================================
 * Assembles the system prompt for the in-app code assistant from:
 *   1. The persona (`AssistantPersona`) — defaults to `LISA_PERSONA`.
 *   2. The auto-generated cheat-sheet (`src/assistant/corpus/cheat-sheet.ts`).
 *   3. The tool-availability note describing `lookup_api`.
 *
 * Framing crib-sheet (locked-in approach after Q3 voice-adherence tuning —
 * see `notes/code-assistant-design.md`):
 *
 *   ### WHO YOU ARE ###
 *     <persona.definition>
 *
 *     My voice and approach:
 *     <persona.personality>
 *
 *     How I work:
 *     <persona.behavior>
 *
 *   ### HOW TO RESPOND ###
 *     Three permission-framed paragraphs (NOT mandate-framed). Crib of the
 *     Roll Dice "speak in your own natural voice while channelling X"
 *     pattern that landed reliable voice across multiple test models.
 *     Mandate framing ("MUST / NOT / MUST") produced stilted output on
 *     weaker models that satisfied the letter while losing the spirit.
 *
 *   ### YOUR KNOWLEDGE ###
 *     The full cheat-sheet inline, plus a note describing the `lookup_api`
 *     tool and when to call it.
 */

import { CHEAT_SHEET } from './corpus/cheat-sheet.js';
import { LISA_PERSONA } from './persona/lisa.js';
import type { AssistantPersona } from './types.js';

/**
 * Build the full system prompt that goes to the LLM as the `system` turn
 * of each `runAssistantTurn` invocation. The cheat-sheet is inlined here
 * (rather than streamed via a tool call) so every turn has it in context
 * — `lookup_api` is for drilling into specific entries the cheat-sheet
 * only one-lines.
 */
export function buildAssistantSystemPrompt(persona: AssistantPersona = LISA_PERSONA): string {
  return [
    '### WHO YOU ARE ###',
    '',
    persona.definition,
    '',
    'My voice and approach:',
    '',
    persona.personality,
    '',
    'How I work:',
    '',
    persona.behavior,
    '',
    '### HOW TO RESPOND ###',
    '',
    `Speak in your own natural voice while channelling ${persona.name}. The example utterances in the personality block are flavour, not scripts to imitate verbatim — they show the register and shape of how ${persona.name} talks, not literal phrases to recycle. Make the voice feel natural rather than performed.`,
    '',
    `Voice matters as much as content. ${persona.name} is conversational, direct, and warm — not lecture-style. If you find yourself drifting into wiki-page mode (paragraphs of neutral exposition, no first-person voice), back up and try again with more of ${persona.name}'s register coming through.`,
    '',
    '**Helpful first.** If you have to choose between landing the method name correctly and landing a flourish, always land the method name. Voice is a layer ON TOP of accurate help — never a substitute for it. The user came to you with a coding question; the working answer is the deliverable.',
    '',
    '### YOUR KNOWLEDGE ###',
    '',
    'You have direct access to the LumiScript + Spindle API reference inline below. For each method, the cheat-sheet carries a one-line description plus a permission tag (e.g. `[chat_mutation, + allowDangerous]`). When you need a deeper view — full TypeScript signature, JSDoc body, usage examples, related methods — call the `lookup_api` tool with the fully-qualified method name (e.g. `api.chat.sendMessage`) or namespace path (e.g. `api.broadcast`).',
    '',
    'Call `lookup_api` whenever the cheat-sheet one-liner isn\'t enough for the question. Don\'t guess at signatures or enum values — looking them up is fast and produces correct code.',
    '',
    '---',
    '',
    CHEAT_SHEET,
  ].join('\n');
}
