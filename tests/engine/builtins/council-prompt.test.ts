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

interface Lib {
  buildCouncilIdentity:     (cm: CouncilMemberContext) => string;
  roleNote:                 (role: string) => string;
  brevityNote:              (maxWords: number) => string;
  userControlNote:          (allow: boolean) => string;
  buildCouncilSystemPrompt: (opts: {
    councilMember: CouncilMemberContext;
    tool: { display_name: string; description: string; prompt?: string };
    maxWordsPerTool?: number;
    allowUserControl?: boolean;
    dynamicSuffix?: string;
  }) => string;
  buildCouncilMessages: (opts: {
    councilMember: CouncilMemberContext;
    args: ToolInvocationArgs;
    tool: { display_name: string; description: string; prompt?: string };
    maxWordsPerTool?: number;
    allowUserControl?: boolean;
    dynamicSuffix?: string;
  }) => LLMMessage[];
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
