import { describe, test, expect, beforeEach, mock } from 'bun:test';
import { buildUtilsAPI } from '../../../src/engine/api/utils.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
import type { MockSpindle } from '../../_infra/mock-spindle.js';

let mockSpindle: MockSpindle;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildUtilsAPI(createTestDeps(overrides));
}

// ─── uuid / shortId ──────────────────────────────────────────────────────────

describe('uuid', () => {
  test('returns a UUID v4 string', () => {
    const api = buildApi();
    expect(api.uuid()).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
  });
});

describe('shortId', () => {
  test('returns an 8-char hex string', () => {
    const api = buildApi();
    expect(api.shortId()).toMatch(/^[0-9a-f]{8}$/);
  });
});

// ─── wait ────────────────────────────────────────────────────────────────────

describe('wait', () => {
  test('resolves after the specified delay', async () => {
    const api = buildApi();
    const start = Date.now();
    await api.wait(10);
    expect(Date.now() - start).toBeGreaterThanOrEqual(5); // allow some timing slack
  });
});

// ─── random ──────────────────────────────────────────────────────────────────

describe('random', () => {
  test('int returns integer in range [min, max]', () => {
    const api = buildApi();
    for (let i = 0; i < 100; i++) {
      const n = api.random.int(1, 5);
      expect(n).toBeGreaterThanOrEqual(1);
      expect(n).toBeLessThanOrEqual(5);
      expect(Number.isInteger(n)).toBe(true);
    }
  });

  test('float returns number in range [min, max)', () => {
    const api = buildApi();
    for (let i = 0; i < 100; i++) {
      const n = api.random.float(0, 1);
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(1);
    }
  });

  test('pick returns an element from the array', () => {
    const api = buildApi();
    const items = ['a', 'b', 'c'];
    for (let i = 0; i < 50; i++) {
      expect(items).toContain(api.random.pick(items));
    }
  });

  test('pick throws on empty array', () => {
    const api = buildApi();
    expect(() => api.random.pick([])).toThrow('empty array');
  });

  test('bool returns a boolean', () => {
    const api = buildApi();
    const results = new Set(Array.from({ length: 100 }, () => api.random.bool()));
    expect(results.has(true)).toBe(true);
    expect(results.has(false)).toBe(true);
  });

  test('chance(1) always returns true, chance(0) always returns false', () => {
    const api = buildApi();
    for (let i = 0; i < 50; i++) {
      expect(api.random.chance(1)).toBe(true);
      expect(api.random.chance(0)).toBe(false);
    }
  });

  test('shuffle returns a new array with the same elements', () => {
    const api = buildApi();
    const original = [1, 2, 3, 4, 5];
    const shuffled = api.random.shuffle(original);
    expect(shuffled).not.toBe(original); // new array
    expect(shuffled.sort()).toEqual([1, 2, 3, 4, 5]); // same elements
  });
});

// ─── http ────────────────────────────────────────────────────────────────────

describe('http', () => {
  test('get delegates to spindle.cors with GET method', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.get('https://example.com');
    expect(mockSpindle.cors).toHaveBeenCalledWith(
      'https://example.com',
      { method: 'GET', headers: undefined },
    );
  });

  test('post delegates with POST method and body', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.post('https://example.com', 'body', { headers: { 'Content-Type': 'application/json' } });
    expect(mockSpindle.cors).toHaveBeenCalledWith(
      'https://example.com',
      { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: 'body' },
    );
  });

  test('throws when allowDangerous is false', () => {
    const api = buildApi({ script: { allowDangerous: false } });
    expect(() => api.http.get('https://example.com')).toThrow('Allow Dangerous');
  });

  test('throws when cors_proxy permission denied', () => {
    const api = buildApi({
      script: { allowDangerous: true },
      hasPerm: (p: string) => p !== 'cors_proxy',
    });
    expect(() => api.http.get('https://example.com')).toThrow('PERMISSION_DENIED:cors_proxy');
  });

  test('put, delete, and request all work', async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.put('https://example.com', 'data');
    await api.http.delete('https://example.com');
    await api.http.request('https://example.com', { method: 'PATCH' });
    expect(mockSpindle.cors).toHaveBeenCalledTimes(3);
  });

  // ─── v1.0.0-rc.5+ binary response decoding ──────────────────────────────

  test("responseType: 'arraybuffer' threads through to spindle.cors", async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.get('https://example.com/image.png', { responseType: 'arraybuffer' });
    expect(mockSpindle.cors).toHaveBeenCalledWith(
      'https://example.com/image.png',
      { method: 'GET', headers: undefined, responseType: 'arraybuffer' },
    );
  });

  test("responseType: 'text' threads through to spindle.cors", async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.get('https://example.com', { responseType: 'text' });
    expect(mockSpindle.cors).toHaveBeenCalledWith(
      'https://example.com',
      { method: 'GET', headers: undefined, responseType: 'text' },
    );
  });

  test('base64-encoded response body is decoded to a Uint8Array', async () => {
    // Spindle's arraybuffer transport returns base64 in `body` with
    // `encoding: 'base64'` on the response object. Verify the wrapper
    // produces a Uint8Array regardless.
    const payload = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]); // PNG header
    const b64 = Buffer.from(payload).toString('base64');
    mockSpindle.cors.mockReturnValueOnce(Promise.resolve({
      status:     200,
      statusText: 'OK',
      headers:    { 'content-type': 'image/png' },
      body:       b64,
      encoding:   'base64',
    }));
    const api = buildApi({ script: { allowDangerous: true } });
    const resp = await api.http.get('https://example.com/image.png', { responseType: 'arraybuffer' });
    expect(resp.body).toBeInstanceOf(Uint8Array);
    expect(Array.from(resp.body as Uint8Array)).toEqual(Array.from(payload));
    expect(resp.status).toBe(200);
    expect(resp.headers).toEqual({ 'content-type': 'image/png' });
  });

  test('text-mode response body passes through as string', async () => {
    mockSpindle.cors.mockReturnValueOnce(Promise.resolve({
      status:     200,
      statusText: 'OK',
      headers:    {},
      body:       'hello world',
      // No `encoding` field — text mode.
    }));
    const api = buildApi({ script: { allowDangerous: true } });
    const resp = await api.http.get('https://example.com');
    expect(typeof resp.body).toBe('string');
    expect(resp.body).toBe('hello world');
  });

  test("post + responseType: 'arraybuffer' works through the post path", async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.post('https://example.com', 'request-body', { responseType: 'arraybuffer' });
    expect(mockSpindle.cors).toHaveBeenCalledWith(
      'https://example.com',
      { method: 'POST', headers: undefined, responseType: 'arraybuffer', body: 'request-body' },
    );
  });

  test("request method honours responseType in the options object", async () => {
    const api = buildApi({ script: { allowDangerous: true } });
    await api.http.request('https://example.com', { method: 'GET', responseType: 'arraybuffer' });
    expect(mockSpindle.cors).toHaveBeenCalledWith(
      'https://example.com',
      { method: 'GET', headers: undefined, responseType: 'arraybuffer', body: undefined },
    );
  });
});

// ─── template ────────────────────────────────────────────────────────────────

describe('template', () => {
  test('render resolves macros then compiles with Handlebars', async () => {
    mockSpindle.macros.resolve.mockReturnValueOnce(
      Promise.resolve({ text: 'Hello {{name}}!', diagnostics: [] }),
    );
    const api = buildApi();
    const result = await api.template.render('Hello {{name}}!', { name: 'World' });
    expect(result).toBe('Hello World!');
  });

  test('render passes context options to macro resolver', async () => {
    mockSpindle.macros.resolve.mockReturnValueOnce(
      Promise.resolve({ text: 'ok', diagnostics: [] }),
    );
    const api = buildApi();
    await api.template.render('test', {}, { chatId: 'custom-chat', characterId: 'custom-char' });
    const call = mockSpindle.macros.resolve.mock.calls[0] as any;
    expect(call[1].chatId).toBe('custom-chat');
    expect(call[1].characterId).toBe('custom-char');
  });

  test('compile returns a reusable template function (no macros)', () => {
    const api = buildApi();
    const fn = api.template.compile('{{greeting}}, {{name}}!');
    expect(fn({ greeting: 'Hi', name: 'Alice' })).toBe('Hi, Alice!');
    expect(fn({ greeting: 'Bye', name: 'Bob' })).toBe('Bye, Bob!');
  });

  test('registerHelper makes a custom helper available in templates', () => {
    const api = buildApi();
    api.template.registerHelper('shout', (text: unknown) => String(text).toUpperCase());
    const fn = api.template.compile('{{shout name}}');
    expect(fn({ name: 'alice' })).toBe('ALICE');
  });

  test('helpers are isolated per buildUtilsAPI call', () => {
    const api1 = buildApi();
    const api2 = buildApi();
    api1.template.registerHelper('only1', () => 'from-1');
    // api2 should NOT have the helper from api1
    const fn = api2.template.compile('{{only1}}');
    expect(fn({})).toBe(''); // missing helper renders empty
  });
});
