import { describe, test, expect, beforeEach } from 'bun:test';
import { buildWebSearchAPI } from '../../../src/engine/api/web-search.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;
beforeEach(() => { mockSpindle = (globalThis as any).spindle; });

describe('api.webSearch — permission gate', () => {
  test('query throws without web_search', () => {
    const api = buildWebSearchAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => api.query({ query: 'hi' })).toThrow('PERMISSION_DENIED');
  });
  test('getSettings throws without web_search', () => {
    const api = buildWebSearchAPI(createTestDeps({ hasPerm: () => false }));
    expect(() => api.getSettings()).toThrow('PERMISSION_DENIED');
  });
});

describe('api.webSearch — query', () => {
  test('forwards query/count/scrape + active userId; passes the response through', async () => {
    mockSpindle.webSearch.query.mockReturnValueOnce(Promise.resolve({
      query: 'cats', results: [{ title: 'T', url: 'https://x', snippet: 's' }],
      documents: [{ title: 'T', url: 'https://x', snippet: 's', content: 'body' }],
      context: 'ctx',
    }));
    const api = buildWebSearchAPI(createTestDeps({ userId: 'u-1' }));
    const r = await api.query({ query: 'cats', count: 3, scrape: true });

    const call = mockSpindle.webSearch.query.mock.calls[0][0];
    expect(call.query).toBe('cats');
    expect(call.count).toBe(3);
    expect(call.scrape).toBe(true);
    expect(call.userId).toBe('u-1');

    expect(r.results).toHaveLength(1);
    expect(r.documents?.[0]?.content).toBe('body');
    expect(r.context).toBe('ctx');
  });

  test('omits count/scrape when not supplied', async () => {
    mockSpindle.webSearch.query.mockReturnValueOnce(Promise.resolve({ query: 'x', results: [] }));
    const api = buildWebSearchAPI(createTestDeps());
    await api.query({ query: 'x' });
    const call = mockSpindle.webSearch.query.mock.calls[0][0];
    expect('count' in call).toBe(false);
    expect('scrape' in call).toBe(false);
  });
});

describe('api.webSearch — getSettings', () => {
  test('passes the safe settings through (hasApiKey, no key)', async () => {
    mockSpindle.webSearch.getSettings.mockReturnValueOnce(Promise.resolve({
      enabled: true, provider: 'searxng', apiUrl: 'https://s', requestTimeoutMs: 9000,
      defaultResultCount: 5, maxResultCount: 20, maxPagesToScrape: 3, maxCharsPerPage: 4000,
      language: 'en', safeSearch: 1, engines: ['google'], hasApiKey: true,
    }));
    const api = buildWebSearchAPI(createTestDeps());
    const s = await api.getSettings();
    expect(s.enabled).toBe(true);
    expect(s.provider).toBe('searxng');
    expect(s.hasApiKey).toBe(true);
    expect('apiKey' in s).toBe(false);
  });
});
