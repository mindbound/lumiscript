import { describe, test, expect } from 'bun:test';
import { ScriptPackSchema } from '../../src/utils/pack-schema.js';

const validEntry = {
  name: 'Test Script',
  code: 'api.chat.sendMessage("hello");',
  type: 'trigger' as const,
};

const validPack = {
  format: 'lumiscript-pack-v1' as const,
  exportedAt: '2026-04-11T12:00:00.000Z',
  scripts: [validEntry],
};

// ─── Valid packs ────────────────────────────────────────────────────────────

describe('valid packs', () => {
  test('parses a minimal valid pack', () => {
    const result = ScriptPackSchema.parse(validPack);
    expect(result.format).toBe('lumiscript-pack-v1');
    expect(result.scripts).toHaveLength(1);
    expect(result.scripts[0]!.name).toBe('Test Script');
  });

  test('parses a pack with all optional fields', () => {
    const full = {
      ...validPack,
      scripts: [{
        name: 'Full Script',
        code: 'console.log("hi")',
        type: 'library' as const,
        triggers: ['MESSAGE_SENT', 'GENERATION_ENDED'],
        bindings: [{
          type: 'character' as const,
          characterId: 'abc-123',
          displayName: 'Test Char',
        }],
        folder: 'Utilities',
        metadata: {
          description: 'A test script',
          author: 'Test Author',
          version: '1.0.0',
          tags: ['utility', 'test'],
        },
      }],
    };
    const result = ScriptPackSchema.parse(full);
    expect(result.scripts[0]!.folder).toBe('Utilities');
    expect(result.scripts[0]!.metadata?.author).toBe('Test Author');
    expect(result.scripts[0]!.bindings?.[0]?.displayName).toBe('Test Char');
  });

  test('accepts library type', () => {
    const pack = { ...validPack, scripts: [{ ...validEntry, type: 'library' as const }] };
    const result = ScriptPackSchema.parse(pack);
    expect(result.scripts[0]!.type).toBe('library');
  });

  test('accepts multiple scripts up to 100', () => {
    const scripts = Array.from({ length: 100 }, (_, i) => ({
      name: `Script ${i}`,
      code: '',
      type: 'trigger' as const,
    }));
    const pack = { ...validPack, scripts };
    const result = ScriptPackSchema.parse(pack);
    expect(result.scripts).toHaveLength(100);
  });

  test('defaults displayName to empty string when omitted in bindings', () => {
    const pack = {
      ...validPack,
      scripts: [{
        ...validEntry,
        bindings: [{ type: 'character' as const, characterId: 'abc' }],
      }],
    };
    const result = ScriptPackSchema.parse(pack);
    expect(result.scripts[0]!.bindings?.[0]?.displayName).toBe('');
  });
});

// ─── Invalid packs ──────────────────────────────────────────────────────────

describe('invalid packs', () => {
  test('rejects missing format field', () => {
    const { format, ...noFormat } = validPack;
    expect(() => ScriptPackSchema.parse(noFormat)).toThrow();
  });

  test('rejects wrong format version', () => {
    expect(() => ScriptPackSchema.parse({ ...validPack, format: 'lumiscript-pack-v2' })).toThrow();
  });

  test('rejects missing exportedAt', () => {
    const { exportedAt, ...noDate } = validPack;
    expect(() => ScriptPackSchema.parse(noDate)).toThrow();
  });

  test('rejects empty scripts array', () => {
    expect(() => ScriptPackSchema.parse({ ...validPack, scripts: [] })).toThrow();
  });

  test('rejects scripts array exceeding 100 entries', () => {
    const scripts = Array.from({ length: 101 }, (_, i) => ({
      name: `Script ${i}`,
      code: '',
      type: 'trigger' as const,
    }));
    expect(() => ScriptPackSchema.parse({ ...validPack, scripts })).toThrow();
  });

  test('rejects script entry missing name', () => {
    const { name, ...noName } = validEntry;
    expect(() => ScriptPackSchema.parse({ ...validPack, scripts: [noName] })).toThrow();
  });

  test('rejects script entry with empty name', () => {
    expect(() =>
      ScriptPackSchema.parse({ ...validPack, scripts: [{ ...validEntry, name: '' }] }),
    ).toThrow();
  });

  test('rejects script entry with name exceeding 200 characters', () => {
    expect(() =>
      ScriptPackSchema.parse({ ...validPack, scripts: [{ ...validEntry, name: 'x'.repeat(201) }] }),
    ).toThrow();
  });

  test('rejects script entry missing code', () => {
    const { code, ...noCode } = validEntry;
    expect(() => ScriptPackSchema.parse({ ...validPack, scripts: [noCode] })).toThrow();
  });

  test('rejects script entry missing type', () => {
    const { type, ...noType } = validEntry;
    expect(() => ScriptPackSchema.parse({ ...validPack, scripts: [noType] })).toThrow();
  });

  test('rejects invalid script type', () => {
    expect(() =>
      ScriptPackSchema.parse({ ...validPack, scripts: [{ ...validEntry, type: 'evil' }] }),
    ).toThrow();
  });

  test('rejects invalid binding type', () => {
    const pack = {
      ...validPack,
      scripts: [{
        ...validEntry,
        bindings: [{ type: 'invalid', characterId: 'abc' }],
      }],
    };
    expect(() => ScriptPackSchema.parse(pack)).toThrow();
  });

  test('rejects non-object input', () => {
    expect(() => ScriptPackSchema.parse('not an object')).toThrow();
    expect(() => ScriptPackSchema.parse(42)).toThrow();
    expect(() => ScriptPackSchema.parse(null)).toThrow();
  });
});
