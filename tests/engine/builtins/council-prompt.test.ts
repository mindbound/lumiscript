/**
 * Covers `ls:council-prompt` — the helper library that mirrors Lumiverse's
 * built-in sidecar Council tool prompt. Assertions are intentionally phrased
 * against specific substrings rather than full-text snapshots so that minor
 * stylistic edits to the host prompt can be ported across without forcing
 * a wholesale test rewrite, while still catching structural regressions.
 */

import { describe, test, expect } from 'bun:test';
import { createCouncilPromptLibrary } from '../../../src/engine/builtins/council-prompt.js';
import type { CouncilMemberContext, ToolInvocationArgs, LLMMessage } from '../../../src/types/script.js';

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface SystemPromptOpts {
  councilMember: CouncilMemberContext;
  tool: { display_name: string; description: string; prompt?: string };
  maxWordsPerTool?: number;
  allowUserControl?: boolean;
  dynamicSuffix?: string;
}

interface MessagesOpts extends SystemPromptOpts {
  args: ToolInvocationArgs;
  contextMessages?: LLMMessage[];
}

interface Lib {
  buildCouncilIdentity:     (cm: CouncilMemberContext) => string;
  roleNote:                 (role: string) => string;
  brevityNote:              (maxWords: number) => string;
  userControlNote:          (allow: boolean) => string;
  buildCouncilSystemPrompt: (opts: SystemPromptOpts) => string;
  buildCouncilMessages:     (opts: MessagesOpts) => LLMMessage[];
  debug: {
    formatMember:       (cm: CouncilMemberContext) => string;
    formatIdentity:     (cm: CouncilMemberContext) => string;
    formatSystemPrompt: (opts: SystemPromptOpts) => string;
    formatMessages:     (opts: MessagesOpts) => string;
    formatReport:       (opts: MessagesOpts) => string;
  };
}

/** Factory ignores its api argument — pass `null` cast as any. */
function getLib(): Lib {
  return createCouncilPromptLibrary(null as any) as unknown as Lib;
}

function makeMember(overrides: Partial<CouncilMemberContext> = {}): CouncilMemberContext {
  return {
    memberId:       'cm-1',
    itemId:         'item-1',
    packId:         'pack-1',
    packName:       'Test Pack',
    name:           'Lyra',
    role:           'Plot Enforcer',
    chance:         75,
    avatarUrl:      null,
    definition:     'A sharp-eyed narrator with a precise memory.',
    personality:    'Decisive. Skeptical of vague motivations.',
    behavior:       'Calls out inconsistencies immediately.',
    genderIdentity: 1,
    ...overrides,
  };
}

// ─── buildCouncilIdentity ────────────────────────────────────────────────────

describe('buildCouncilIdentity', () => {
  test('returns the name-only line when no personality fields are set', () => {
    const { buildCouncilIdentity } = getLib();
    const member = makeMember({ definition: '', personality: '', behavior: '' });
    const out = buildCouncilIdentity(member);
    expect(out).toBe('You are a council member named "Lyra".');
  });

  test('emits the full WHO YOU ARE + INSTRUCTION block when personality fields are present', () => {
    const { buildCouncilIdentity } = getLib();
    const out = buildCouncilIdentity(makeMember());
    expect(out).toContain('You are a council member named "Lyra".');
    expect(out).toContain('### WHO YOU ARE ###');
    expect(out).toContain('### Your Physical Identity ###');
    expect(out).toContain('A sharp-eyed narrator with a precise memory.');
    expect(out).toContain('### Your Personality ###');
    expect(out).toContain('Decisive. Skeptical of vague motivations.');
    expect(out).toContain('### Your Behavioral Patterns ###');
    expect(out).toContain('Calls out inconsistencies immediately.');
    expect(out).toContain('### INSTRUCTION ###');
    expect(out).toContain('filter everything through who you are');
  });

  test('includes only the personality sections that are present', () => {
    const { buildCouncilIdentity } = getLib();
    const member = makeMember({ definition: 'Only this one.', personality: '', behavior: '' });
    const out = buildCouncilIdentity(member);
    expect(out).toContain('### Your Physical Identity ###');
    expect(out).toContain('Only this one.');
    expect(out).not.toContain('### Your Personality ###');
    expect(out).not.toContain('### Your Behavioral Patterns ###');
    // Still includes the instruction trailer when any section is present.
    expect(out).toContain('### INSTRUCTION ###');
  });
});

// ─── roleNote ────────────────────────────────────────────────────────────────

describe('roleNote', () => {
  test('returns empty string when role is empty', () => {
    const { roleNote } = getLib();
    expect(roleNote('')).toBe('');
    expect(roleNote('   ')).toBe('');
  });

  test('includes the role twice (declaration + reinforcement) when present', () => {
    const { roleNote } = getLib();
    const out = roleNote('Plot Enforcer');
    expect(out).toContain('Your role on the council is: Plot Enforcer');
    expect(out).toContain('Draw upon your expertise as Plot Enforcer');
  });

  test('starts with a single newline for concatenation after the identity block', () => {
    const { roleNote } = getLib();
    expect(roleNote('Plot Enforcer').startsWith('\n')).toBe(true);
    // But not double — it's meant to immediately follow the identity block,
    // which has no trailing newline.
    expect(roleNote('Plot Enforcer').startsWith('\n\n')).toBe(false);
  });
});

// ─── brevityNote ─────────────────────────────────────────────────────────────

describe('brevityNote', () => {
  test('returns empty string for zero or negative word budget', () => {
    const { brevityNote } = getLib();
    expect(brevityNote(0)).toBe('');
    expect(brevityNote(-1)).toBe('');
  });

  test('includes the word count in the directive', () => {
    const { brevityNote } = getLib();
    const out = brevityNote(100);
    expect(out).toContain('under 100 words');
    expect(out).toContain('BREVITY REQUIREMENT');
  });
});

// ─── userControlNote ─────────────────────────────────────────────────────────

describe('userControlNote', () => {
  test('emits the permissive block when allow is true', () => {
    const { userControlNote } = getLib();
    const out = userControlNote(true);
    expect(out).toContain('### User Character Guidance ###');
    expect(out).toContain('You may plan and suggest actions');
    expect(out).toContain("including the user's character");
  });

  test('emits the restrictive block when allow is false', () => {
    const { userControlNote } = getLib();
    const out = userControlNote(false);
    expect(out).toContain('### User Character Guidance ###');
    expect(out).toContain('Do NOT plan actions');
    expect(out).toContain("user's character");
  });

  test('the two variants are different', () => {
    const { userControlNote } = getLib();
    expect(userControlNote(true)).not.toBe(userControlNote(false));
  });
});

// ─── buildCouncilSystemPrompt ────────────────────────────────────────────────

describe('buildCouncilSystemPrompt', () => {
  test('composes identity + role + tool spec + user-control block by default', () => {
    const { buildCouncilSystemPrompt } = getLib();
    const out = buildCouncilSystemPrompt({
      councilMember: makeMember(),
      tool: {
        display_name: 'Tone Analyzer',
        description:  'Analyzes the emotional register of the scene.',
      },
    });
    // Identity + role
    expect(out).toContain('You are a council member named "Lyra".');
    expect(out).toContain('Your role on the council is: Plot Enforcer');
    // Tool spec
    expect(out).toContain('## Tool: Tone Analyzer');
    expect(out).toContain('Analyzes the emotional register of the scene.');
    // Default user-control = false → restrictive block
    expect(out).toContain('Do NOT plan actions');
    // No brevity by default
    expect(out).not.toContain('BREVITY REQUIREMENT');
  });

  test('includes brevity note when maxWordsPerTool > 0', () => {
    const { buildCouncilSystemPrompt } = getLib();
    const out = buildCouncilSystemPrompt({
      councilMember: makeMember(),
      tool: { display_name: 'T', description: 'D' },
      maxWordsPerTool: 50,
    });
    expect(out).toContain('under 50 words');
  });

  test('switches to permissive user-control block when allowUserControl is true', () => {
    const { buildCouncilSystemPrompt } = getLib();
    const out = buildCouncilSystemPrompt({
      councilMember: makeMember(),
      tool: { display_name: 'T', description: 'D' },
      allowUserControl: true,
    });
    expect(out).toContain('You may plan and suggest actions');
    expect(out).not.toContain('Do NOT plan actions');
  });

  test('inserts tool.prompt between description and user-control block', () => {
    const { buildCouncilSystemPrompt } = getLib();
    const out = buildCouncilSystemPrompt({
      councilMember: makeMember(),
      tool: {
        display_name: 'T',
        description:  'D',
        prompt:       'CUSTOM_TOOL_DIRECTIVE_SENTINEL',
      },
    });
    expect(out).toContain('CUSTOM_TOOL_DIRECTIVE_SENTINEL');
    // The directive must appear before the user-control block (which is last).
    const directiveIdx = out.indexOf('CUSTOM_TOOL_DIRECTIVE_SENTINEL');
    const userCtrlIdx  = out.indexOf('### User Character Guidance ###');
    expect(directiveIdx).toBeGreaterThan(0);
    expect(userCtrlIdx).toBeGreaterThan(directiveIdx);
  });

  test('inserts dynamicSuffix after tool.prompt, before brevity and user-control', () => {
    const { buildCouncilSystemPrompt } = getLib();
    const out = buildCouncilSystemPrompt({
      councilMember:   makeMember(),
      tool:            { display_name: 'T', description: 'D', prompt: 'DIRECTIVE' },
      dynamicSuffix:   '\n\n## Labels\nhappy, sad',
      maxWordsPerTool: 50,
    });
    const dirIdx     = out.indexOf('DIRECTIVE');
    const dynamicIdx = out.indexOf('## Labels');
    const brevityIdx = out.indexOf('BREVITY REQUIREMENT');
    const userCtrlIdx = out.indexOf('### User Character Guidance ###');
    expect(dirIdx).toBeGreaterThan(0);
    expect(dynamicIdx).toBeGreaterThan(dirIdx);
    expect(brevityIdx).toBeGreaterThan(dynamicIdx);
    expect(userCtrlIdx).toBeGreaterThan(brevityIdx);
  });

  test('omits role note when councilMember.role is empty', () => {
    const { buildCouncilSystemPrompt } = getLib();
    const out = buildCouncilSystemPrompt({
      councilMember: makeMember({ role: '' }),
      tool: { display_name: 'T', description: 'D' },
    });
    expect(out).not.toContain('Your role on the council is');
  });
});

// ─── buildCouncilMessages ────────────────────────────────────────────────────

describe('buildCouncilMessages', () => {
  test('emits [system(prompt), system(context), user(closing)] when context is present', () => {
    const { buildCouncilMessages } = getLib();
    const messages = buildCouncilMessages({
      councilMember: makeMember(),
      args:          { context: 'Recent chat: user asked about the heist plan.' },
      tool:          { display_name: 'Tone Analyzer', description: 'D' },
    });
    expect(messages).toHaveLength(3);
    expect(messages[0]!.role).toBe('system');
    expect(messages[0]!.content).toContain('## Tool: Tone Analyzer');
    expect(messages[1]!.role).toBe('system');
    expect(messages[1]!.content).toBe('Recent chat: user asked about the heist plan.');
    expect(messages[2]!.role).toBe('user');
    expect(messages[2]!.content).toContain('Review the story context above');
    // Closing directive name-substitutes from councilMember.name.
    expect(messages[2]!.content).toContain('your unique perspective as Lyra');
  });

  test('omits the context message when args.context is missing or empty', () => {
    const { buildCouncilMessages } = getLib();
    const noContext = buildCouncilMessages({
      councilMember: makeMember(),
      args:          {},
      tool:          { display_name: 'T', description: 'D' },
    });
    expect(noContext).toHaveLength(2);
    expect(noContext[0]!.role).toBe('system');
    expect(noContext[1]!.role).toBe('user');

    const emptyContext = buildCouncilMessages({
      councilMember: makeMember(),
      args:          { context: '   \n   ' }, // whitespace only
      tool:          { display_name: 'T', description: 'D' },
    });
    expect(emptyContext).toHaveLength(2);
  });

  test('throws when councilMember is falsy (defensive runtime check)', () => {
    const { buildCouncilMessages } = getLib();
    expect(() => buildCouncilMessages({
      councilMember: undefined as unknown as CouncilMemberContext,
      args:          {},
      tool:          { display_name: 'T', description: 'D' },
    })).toThrow(/requires councilMember/);
  });
});

// ─── buildCouncilMessages — structured contextMessages (Lumiverse 993544c8+)

describe('buildCouncilMessages — structured contextMessages', () => {
  test('uses structured context when contextMessages is present and non-empty', () => {
    const { buildCouncilMessages } = getLib();
    const contextMessages: LLMMessage[] = [
      { role: 'system',    content: '## Character Information\nName: Miyo' },
      { role: 'system',    content: '## User Persona\nName: Bernard' },
      { role: 'assistant', content: 'first greeting message' },
      { role: 'user',      content: 'first user reply' },
    ];
    const messages = buildCouncilMessages({
      councilMember:   makeMember(),
      args:            { context: 'SHOULD_BE_IGNORED' },  // flattened fallback present but ignored
      contextMessages,
      tool:            { display_name: 'T', description: 'D' },
    });

    // [system(prompt), ...contextMessages, user(closing)] — 6 messages total.
    expect(messages).toHaveLength(1 + contextMessages.length + 1);
    expect(messages[0]!.role).toBe('system');
    expect(messages[0]!.content).toContain('## Tool: T');

    // Structured messages preserved in order with their original roles.
    expect(messages[1]!.role).toBe('system');
    expect(messages[1]!.content).toContain('Name: Miyo');
    expect(messages[2]!.role).toBe('system');
    expect(messages[2]!.content).toContain('Name: Bernard');
    expect(messages[3]!.role).toBe('assistant');
    expect(messages[3]!.content).toBe('first greeting message');
    expect(messages[4]!.role).toBe('user');
    expect(messages[4]!.content).toBe('first user reply');

    // Flattened fallback string must NOT appear anywhere — structured wins.
    const joined = messages.map(m => m.content).join('\n');
    expect(joined).not.toContain('SHOULD_BE_IGNORED');

    // Closing user directive still emitted with member-name substitution.
    expect(messages[5]!.role).toBe('user');
    expect(messages[5]!.content).toContain('your unique perspective as Lyra');
  });

  test('falls back to flattened args.context when contextMessages is absent', () => {
    const { buildCouncilMessages } = getLib();
    const messages = buildCouncilMessages({
      councilMember: makeMember(),
      args:          { context: 'Flattened context string.' },
      tool:          { display_name: 'T', description: 'D' },
    });
    // No contextMessages → old three-message shape: [system, system(flat), user]
    expect(messages).toHaveLength(3);
    expect(messages[0]!.role).toBe('system');
    expect(messages[1]!.role).toBe('system');
    expect(messages[1]!.content).toBe('Flattened context string.');
    expect(messages[2]!.role).toBe('user');
  });

  test('falls back to flattened args.context when contextMessages is an empty array', () => {
    // Defensive: empty structured array shouldn't cause us to emit nothing
    // and drop on the floor — fall through to the flattened path so the
    // model still sees the context the host did produce.
    const { buildCouncilMessages } = getLib();
    const messages = buildCouncilMessages({
      councilMember:   makeMember(),
      args:            { context: 'Flattened context string.' },
      contextMessages: [],
      tool:            { display_name: 'T', description: 'D' },
    });
    expect(messages).toHaveLength(3);
    expect(messages[1]!.content).toBe('Flattened context string.');
  });

  test('emits two messages when both contextMessages and args.context are absent', () => {
    // No context at all — minimal output, just system prompt + closing.
    const { buildCouncilMessages } = getLib();
    const messages = buildCouncilMessages({
      councilMember: makeMember(),
      args:          {},
      tool:          { display_name: 'T', description: 'D' },
    });
    expect(messages).toHaveLength(2);
    expect(messages[0]!.role).toBe('system');
    expect(messages[1]!.role).toBe('user');
  });
});

// ─── debug namespace ─────────────────────────────────────────────────────────

describe('debug.formatMember', () => {
  test('includes all CouncilMemberContext fields in the snapshot', () => {
    const { debug } = getLib();
    const out = debug.formatMember(makeMember());
    // Identifiers + identity fields all present.
    expect(out).toContain('name:           Lyra');
    expect(out).toContain('role:           Plot Enforcer');
    expect(out).toContain('memberId:       cm-1');
    expect(out).toContain('itemId:         item-1');
    expect(out).toContain('packId:         pack-1');
    expect(out).toContain('packName:       Test Pack');
    expect(out).toContain('chance:         75');
    expect(out).toContain('genderIdentity: 1 (feminine)');
    expect(out).toContain('avatarUrl:      (null)');
    // Personality fields present (not truncated — makeMember strings < 60 chars).
    expect(out).toContain('A sharp-eyed narrator with a precise memory.');
    expect(out).toContain('Decisive. Skeptical of vague motivations.');
    expect(out).toContain('Calls out inconsistencies immediately.');
  });

  test('renders empty strings as "(empty)" and null avatar as "(null)"', () => {
    const { debug } = getLib();
    const out = debug.formatMember(makeMember({ role: '', personality: '', avatarUrl: null }));
    expect(out).toContain('role:           (empty)');
    expect(out).toContain('personality:    (empty)');
    expect(out).toContain('avatarUrl:      (null)');
  });

  test('truncates long personality strings with [N chars] prefix', () => {
    const { debug } = getLib();
    const longDefinition = 'x'.repeat(200);
    const out = debug.formatMember(makeMember({ definition: longDefinition }));
    expect(out).toContain('definition:     [200 chars]');
    expect(out).toContain('...');
    expect(out).not.toContain(longDefinition); // full string is NOT in the output
  });

  test('labels gender identity correctly for each variant', () => {
    const { debug } = getLib();
    expect(debug.formatMember(makeMember({ genderIdentity: 0 }))).toContain('0 (unspecified)');
    expect(debug.formatMember(makeMember({ genderIdentity: 1 }))).toContain('1 (feminine)');
    expect(debug.formatMember(makeMember({ genderIdentity: 2 }))).toContain('2 (masculine)');
  });

  test('wraps the snapshot in a titled frame', () => {
    const { debug } = getLib();
    const out = debug.formatMember(makeMember());
    expect(out).toContain('COUNCIL MEMBER SNAPSHOT');
    // Frame uses === rule lines (60 chars each).
    expect(out).toContain('='.repeat(60));
  });
});

describe('debug.formatIdentity', () => {
  test('includes the member name in the header', () => {
    const { debug } = getLib();
    const out = debug.formatIdentity(makeMember());
    expect(out).toContain('COUNCIL IDENTITY BLOCK — Lyra');
  });

  test('body is byte-equivalent to buildCouncilIdentity output', () => {
    const { debug, buildCouncilIdentity } = getLib();
    const framed = debug.formatIdentity(makeMember());
    const raw    = buildCouncilIdentity(makeMember());
    // The raw identity block must appear verbatim inside the framed output.
    expect(framed).toContain(raw);
  });
});

describe('debug.formatSystemPrompt', () => {
  test('includes the char count in the header', () => {
    const { debug, buildCouncilSystemPrompt } = getLib();
    const opts = {
      councilMember: makeMember(),
      tool: { display_name: 'T', description: 'D' },
    };
    const raw    = buildCouncilSystemPrompt(opts);
    const framed = debug.formatSystemPrompt(opts);
    expect(framed).toContain(`COUNCIL SYSTEM PROMPT — ${raw.length} chars`);
    expect(framed).toContain(raw);
  });
});

describe('debug.formatMessages', () => {
  test('header reports message count and total chars', () => {
    const { debug, buildCouncilMessages } = getLib();
    const opts = {
      councilMember: makeMember(),
      args:          { context: 'Context string.' },
      tool:          { display_name: 'T', description: 'D' },
    };
    const msgs  = buildCouncilMessages(opts);
    const total = msgs.reduce((n, m) => n + m.content.length, 0);
    const out   = debug.formatMessages(opts);
    expect(out).toContain(`COUNCIL MESSAGES — ${msgs.length} messages, ${total} chars total`);
  });

  test('each message gets an indexed header with role and char count', () => {
    const { debug } = getLib();
    const out = debug.formatMessages({
      councilMember: makeMember(),
      args:          { context: 'Context string.' },
      tool:          { display_name: 'T', description: 'D' },
    });
    expect(out).toMatch(/\[1\] system — \d+ chars/);
    expect(out).toMatch(/\[2\] system — \d+ chars/);
    expect(out).toMatch(/\[3\] user — \d+ chars/);
  });

  test('separates messages with --- subrule lines', () => {
    const { debug } = getLib();
    const out = debug.formatMessages({
      councilMember: makeMember(),
      args:          {},
      tool:          { display_name: 'T', description: 'D' },
    });
    expect(out).toContain('-'.repeat(60));
  });
});

describe('debug.formatReport', () => {
  test('includes all four sub-report headers', () => {
    const { debug } = getLib();
    const out = debug.formatReport({
      councilMember: makeMember(),
      args:          { context: 'Scene context.' },
      tool:          { display_name: 'T', description: 'D' },
    });
    expect(out).toContain('COUNCIL MEMBER SNAPSHOT');
    expect(out).toContain('COUNCIL IDENTITY BLOCK — Lyra');
    expect(out).toContain('COUNCIL SYSTEM PROMPT —');
    expect(out).toContain('COUNCIL MESSAGES —');
  });

  test('stitches sub-reports in member → identity → system → messages order', () => {
    const { debug } = getLib();
    const out = debug.formatReport({
      councilMember: makeMember(),
      args:          {},
      tool:          { display_name: 'T', description: 'D' },
    });
    const memberIdx   = out.indexOf('COUNCIL MEMBER SNAPSHOT');
    const identityIdx = out.indexOf('COUNCIL IDENTITY BLOCK');
    const promptIdx   = out.indexOf('COUNCIL SYSTEM PROMPT');
    const messagesIdx = out.indexOf('COUNCIL MESSAGES');
    expect(memberIdx).toBeGreaterThanOrEqual(0);
    expect(identityIdx).toBeGreaterThan(memberIdx);
    expect(promptIdx).toBeGreaterThan(identityIdx);
    expect(messagesIdx).toBeGreaterThan(promptIdx);
  });
});
