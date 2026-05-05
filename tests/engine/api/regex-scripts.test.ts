/**
 * Parent-side unit tests for the api.regexScripts namespace.
 *
 * Mirrors the databanks.test.ts shape (mock-spindle injected via global,
 * `createTestDeps` for APIBuildDeps, named `mockSpindle.regex_scripts.*`
 * functions used as MockReturnValueOnce hooks). Coverage:
 *
 *   - DTO ↔ camelCase translation (RegexScriptDTO → RegexScriptInfo).
 *   - Permission gating on every method.
 *   - Input mapping (snake_case ↔ camelCase translation in create/update).
 *   - findByName helper: match found, no match, scope filter pass-through.
 *   - getActive: required `target`, optional characterId/chatId pass-through.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildRegexScriptsAPI } from '../../../src/engine/api/regex-scripts.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildRegexScriptsAPI(createTestDeps(overrides));
}

// ─── Fixture ─────────────────────────────────────────────────────────────────

const regexScriptDTO = {
  id:                'rgx-1',
  name:              'Strip OOC',
  script_id:         'strip_ooc',
  find_regex:        '\\(\\(.*?\\)\\)',
  replace_string:    '',
  flags:             'g',
  placement:         ['ai_output' as const],
  scope:             'global' as const,
  scope_id:          null,
  target:            'display' as const,
  min_depth:         null,
  max_depth:         5,
  trim_strings:      ['---'],
  run_on_edit:       true,
  substitute_macros: 'none' as const,
  disabled:          false,
  sort_order:        10,
  description:       'Strip OOC blocks',
  folder:            'cleanup',
  metadata:          { author: 'me' },
  created_at:        1700000000,
  updated_at:        1700000100,
};

// ─── DTO → camelCase translation ─────────────────────────────────────────────

describe('list', () => {
  test('maps DTOs to camelCase', async () => {
    mockSpindle.regex_scripts.list.mockReturnValueOnce(
      Promise.resolve({ data: [regexScriptDTO], total: 1 }),
    );
    const api = buildApi();
    const result = await api.list();
    expect(result.total).toBe(1);
    const rs = result.data[0]!;
    expect(rs.id).toBe('rgx-1');
    expect(rs.scriptId).toBe('strip_ooc');
    expect(rs.findRegex).toBe('\\(\\(.*?\\)\\)');
    expect(rs.replaceString).toBe('');
    expect(rs.scopeId).toBeNull();
    expect(rs.minDepth).toBeNull();
    expect(rs.maxDepth).toBe(5);
    expect(rs.trimStrings).toEqual(['---']);
    expect(rs.runOnEdit).toBe(true);
    expect(rs.substituteMacros).toBe('none');
    expect(rs.sortOrder).toBe(10);
    expect(rs.createdAt).toBe(1700000000);
    expect(rs.updatedAt).toBe(1700000100);
  });

  test('forwards filter options to spindle (scope, scopeId, target, limit, offset)', async () => {
    mockSpindle.regex_scripts.list.mockReturnValueOnce(
      Promise.resolve({ data: [], total: 0 }),
    );
    const api = buildApi();
    await api.list({ scope: 'character', scopeId: 'char-1', target: 'prompt', limit: 25, offset: 50 });
    const callArgs = mockSpindle.regex_scripts.list.mock.calls[0][0];
    expect(callArgs.scope).toBe('character');
    expect(callArgs.scopeId).toBe('char-1');
    expect(callArgs.target).toBe('prompt');
    expect(callArgs.limit).toBe(25);
    expect(callArgs.offset).toBe(50);
  });

  test('omits undefined options from spindle call (preserves host-side defaults)', async () => {
    mockSpindle.regex_scripts.list.mockReturnValueOnce(
      Promise.resolve({ data: [], total: 0 }),
    );
    const api = buildApi();
    await api.list();
    const callArgs = mockSpindle.regex_scripts.list.mock.calls[0][0];
    // only userId should be in the call args (carries the test scope)
    expect(callArgs.scope).toBeUndefined();
    expect(callArgs.target).toBeUndefined();
    expect(callArgs.limit).toBeUndefined();
  });
});

describe('get', () => {
  test('returns null when not found', async () => {
    mockSpindle.regex_scripts.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.get('nope')).toBeNull();
  });

  test('returns mapped info when found', async () => {
    mockSpindle.regex_scripts.get.mockReturnValueOnce(Promise.resolve(regexScriptDTO));
    const api = buildApi();
    const rs = await api.get('rgx-1');
    expect(rs).not.toBeNull();
    expect(rs!.scriptId).toBe('strip_ooc');
  });
});

describe('getActive', () => {
  test('passes required target + optional context to spindle', async () => {
    mockSpindle.regex_scripts.getActive.mockReturnValueOnce(Promise.resolve([]));
    const api = buildApi();
    await api.getActive({ target: 'display', characterId: 'char-1', chatId: 'chat-9' });
    const callArgs = mockSpindle.regex_scripts.getActive.mock.calls[0][0];
    expect(callArgs.target).toBe('display');
    expect(callArgs.characterId).toBe('char-1');
    expect(callArgs.chatId).toBe('chat-9');
  });

  test('omits optional fields when not provided', async () => {
    mockSpindle.regex_scripts.getActive.mockReturnValueOnce(Promise.resolve([]));
    const api = buildApi();
    await api.getActive({ target: 'response' });
    const callArgs = mockSpindle.regex_scripts.getActive.mock.calls[0][0];
    expect(callArgs.target).toBe('response');
    expect(callArgs.characterId).toBeUndefined();
    expect(callArgs.chatId).toBeUndefined();
  });

  test('maps each result through to RegexScriptInfo', async () => {
    mockSpindle.regex_scripts.getActive.mockReturnValueOnce(
      Promise.resolve([regexScriptDTO, regexScriptDTO]),
    );
    const api = buildApi();
    const result = await api.getActive({ target: 'display' });
    expect(result).toHaveLength(2);
    expect(result[0]!.scriptId).toBe('strip_ooc');
  });
});

describe('create', () => {
  test('translates camelCase input to snake_case DTO + maps response back', async () => {
    mockSpindle.regex_scripts.create.mockReturnValueOnce(Promise.resolve(regexScriptDTO));
    const api = buildApi();
    const result = await api.create({
      name:             'Strip OOC',
      findRegex:        '\\(\\(.*?\\)\\)',
      replaceString:    '',
      flags:            'g',
      placement:        ['ai_output'],
      scope:            'character',
      scopeId:          'char-1',
      target:           'display',
      minDepth:         0,
      maxDepth:         10,
      trimStrings:      ['---'],
      runOnEdit:        true,
      substituteMacros: 'raw',
      disabled:         false,
      sortOrder:        5,
      description:      'd',
      folder:           'cleanup',
      metadata:         { x: 1 },
      scriptId:         'my_id',
    });

    const sentDTO = mockSpindle.regex_scripts.create.mock.calls[0][0];
    expect(sentDTO.name).toBe('Strip OOC');
    expect(sentDTO.find_regex).toBe('\\(\\(.*?\\)\\)');
    expect(sentDTO.replace_string).toBe('');
    expect(sentDTO.scope).toBe('character');
    expect(sentDTO.scope_id).toBe('char-1');
    expect(sentDTO.min_depth).toBe(0);
    expect(sentDTO.max_depth).toBe(10);
    expect(sentDTO.trim_strings).toEqual(['---']);
    expect(sentDTO.run_on_edit).toBe(true);
    expect(sentDTO.substitute_macros).toBe('raw');
    expect(sentDTO.sort_order).toBe(5);
    expect(sentDTO.script_id).toBe('my_id');

    expect(result.scriptId).toBe('strip_ooc');
  });

  test('omits undefined optional fields (preserves host defaults)', async () => {
    mockSpindle.regex_scripts.create.mockReturnValueOnce(Promise.resolve(regexScriptDTO));
    const api = buildApi();
    await api.create({ name: 'minimal', findRegex: '/x/' });
    const sentDTO = mockSpindle.regex_scripts.create.mock.calls[0][0];
    expect(sentDTO.name).toBe('minimal');
    expect(sentDTO.find_regex).toBe('/x/');
    expect(sentDTO.replace_string).toBeUndefined();
    expect(sentDTO.scope).toBeUndefined();
    expect(sentDTO.target).toBeUndefined();
  });
});

describe('update', () => {
  test('translates camelCase patch to snake_case DTO', async () => {
    mockSpindle.regex_scripts.update.mockReturnValueOnce(Promise.resolve(regexScriptDTO));
    const api = buildApi();
    await api.update('rgx-1', { disabled: true, sortOrder: 99, runOnEdit: false });
    const [scriptId, sentDTO] = mockSpindle.regex_scripts.update.mock.calls[0];
    expect(scriptId).toBe('rgx-1');
    expect(sentDTO.disabled).toBe(true);
    expect(sentDTO.sort_order).toBe(99);
    expect(sentDTO.run_on_edit).toBe(false);
    // Untouched fields don't appear in the DTO patch
    expect(Object.keys(sentDTO).sort()).toEqual(['disabled', 'run_on_edit', 'sort_order']);
  });
});

describe('delete', () => {
  test('returns the boolean from spindle', async () => {
    mockSpindle.regex_scripts.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    expect(await api.delete('rgx-1')).toBe(true);
  });
});

describe('findByName', () => {
  test('returns first match within scope', async () => {
    mockSpindle.regex_scripts.list.mockReturnValueOnce(
      Promise.resolve({
        data: [
          { ...regexScriptDTO, name: 'Other'   },
          { ...regexScriptDTO, name: 'TARGET'  },
          { ...regexScriptDTO, name: 'Another' },
        ],
        total: 3,
      }),
    );
    const api = buildApi();
    const result = await api.findByName('TARGET', 'character');
    expect(result).not.toBeNull();
    expect(result!.name).toBe('TARGET');
    // Scope filter passed through
    const callArgs = mockSpindle.regex_scripts.list.mock.calls[0][0];
    expect(callArgs.scope).toBe('character');
  });

  test('returns null when no match', async () => {
    mockSpindle.regex_scripts.list.mockReturnValueOnce(
      Promise.resolve({ data: [{ ...regexScriptDTO, name: 'Other' }], total: 1 }),
    );
    const api = buildApi();
    const result = await api.findByName('nope');
    expect(result).toBeNull();
  });
});

// ─── Permission gating ───────────────────────────────────────────────────────

describe('permission gating', () => {
  function buildWithoutPerm() {
    // hasPerm returns false → assertPerm throws PERMISSION_DENIED:regex_scripts
    return buildApi({ hasPerm: () => false });
  }

  test.each([
    ['list',      async (api: any) => api.list()],
    ['get',       async (api: any) => api.get('id')],
    ['findByName', async (api: any) => api.findByName('x')],
    ['getActive', async (api: any) => api.getActive({ target: 'display' })],
    ['create',    async (api: any) => api.create({ name: 'x', findRegex: '/x/' })],
    ['update',    async (api: any) => api.update('id', {})],
    ['delete',    async (api: any) => api.delete('id')],
  ])('%s throws PERMISSION_DENIED when regex_scripts not granted', async (_label, call) => {
    const api = buildWithoutPerm();
    await expect(call(api)).rejects.toThrow(/PERMISSION_DENIED:regex_scripts/);
  });
});
