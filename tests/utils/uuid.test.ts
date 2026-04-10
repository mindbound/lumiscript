import { describe, test, expect } from 'bun:test';
import { generateUUID, generateShortId } from '../../src/utils/uuid.js';

const UUID_V4_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const SHORT_ID_RE = /^[0-9a-f]{8}$/;

describe('generateUUID', () => {
  test('returns a string matching UUID v4 format', () => {
    expect(generateUUID()).toMatch(UUID_V4_RE);
  });

  test('returns unique values on successive calls', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateUUID()));
    expect(ids.size).toBe(100);
  });
});

describe('generateShortId', () => {
  test('returns an 8-character hex string', () => {
    const id = generateShortId();
    expect(id).toHaveLength(8);
    expect(id).toMatch(SHORT_ID_RE);
  });

  test('returns unique values on successive calls', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateShortId()));
    expect(ids.size).toBe(100);
  });
});
