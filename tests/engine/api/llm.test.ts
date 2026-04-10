import { describe, test, expect, beforeEach } from 'bun:test';
import { buildLLMAPI } from '../../../src/engine/api/llm.js';
import { createTestDeps } from '../../_infra/mock-deps.js';
// Use `any` for mock spindle — tests override mock returns with custom shapes
// that don't perfectly match the typed defaults from createMockSpindle().
let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildLLMAPI(createTestDeps(overrides));
}

// ─── generate ────────────────────────────────────────────────────────────────

describe('generate', () => {
  test('calls spindle.generate.raw with messages', async () => {
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'Hello!' }),
    );
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));

    const api = buildApi();
    const result = await api.generate([{ role: 'user', content: 'hi' }]);
    expect(result).toBe('Hello!');
    expect(mockSpindle.generate.raw).toHaveBeenCalledTimes(1);
  });

  test('resolves connection by ID', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'conn-1', model: 'gpt-4o', provider: 'openai' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'ok' }),
    );

    const api = buildApi();
    await api.generate([{ role: 'user', content: 'hi' }], { connectionId: 'conn-1' });
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].connection_id).toBe('conn-1');
  });

  test('resolves connection by name (case-insensitive)', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(
      Promise.resolve([
        { id: 'conn-1', name: 'My OpenAI', model: 'gpt-4o', provider: 'openai' },
      ]),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'ok' }),
    );

    const api = buildApi();
    await api.generate([{ role: 'user', content: 'hi' }], { connectionName: 'my openai' });
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].connection_id).toBe('conn-1');
  });

  test('throws when connectionId not found', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    await expect(
      api.generate([{ role: 'user', content: 'hi' }], { connectionId: 'bad' }),
    ).rejects.toThrow('not found');
  });

  test('throws when connectionName not found', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    const api = buildApi();
    await expect(
      api.generate([{ role: 'user', content: 'hi' }], { connectionName: 'nope' }),
    ).rejects.toThrow('no connection found');
  });

  test('throws for unknown provider', () => {
    const api = buildApi();
    expect(() =>
      api.generate([{ role: 'user', content: 'hi' }], { provider: 'fake_provider' as any }),
    ).toThrow('unknown provider');
  });

  test('throws when generation permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.generate([{ role: 'user', content: 'hi' }])).toThrow('PERMISSION_DENIED');
  });

  test('forwards temperature and maxTokens', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'ok' }),
    );
    const api = buildApi();
    await api.generate([{ role: 'user', content: 'hi' }], { temperature: 0.7, maxTokens: 100 });
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.temperature).toBe(0.7);
    expect(call[0].parameters.max_tokens).toBe(100);
  });
});

// ─── generateStructured ──────────────────────────────────────────────────────

describe('generateStructured', () => {
  test('parses JSON from response and returns typed result', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"name":"Alice","age":30}' }),
    );
    const api = buildApi();
    const result = await api.generateStructured(
      [{ role: 'user', content: 'who?' }],
      { type: 'object', properties: { name: { type: 'string' }, age: { type: 'number' } } },
    );
    expect(result).toEqual({ name: 'Alice', age: 30 });
  });

  test('extracts JSON from markdown code blocks', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '```json\n{"key":"value"}\n```' }),
    );
    const api = buildApi();
    const result = await api.generateStructured(
      [{ role: 'user', content: 'test' }],
      { type: 'object', properties: { key: { type: 'string' } } },
    );
    expect(result).toEqual({ key: 'value' });
  });

  test('throws when response is not valid JSON', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'this is not json' }),
    );
    const api = buildApi();
    await expect(
      api.generateStructured(
        [{ role: 'user', content: 'test' }],
        { type: 'object', properties: {} },
      ),
    ).rejects.toThrow('not valid JSON');
  });

  test('uses Anthropic output_config for anthropic provider', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'claude-3', provider: 'anthropic' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}' }),
    );
    const api = buildApi();
    await api.generateStructured(
      [{ role: 'user', content: 'test' }],
      { type: 'object', properties: {} },
      { connectionId: 'c1' },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.output_config).toBeDefined();
    expect(call[0].parameters.output_config.format.type).toBe('json_schema');
  });

  test('uses responseMimeType for google provider', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'gemini-pro', provider: 'google' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}' }),
    );
    const api = buildApi();
    await api.generateStructured(
      [{ role: 'user', content: 'test' }],
      { type: 'object', properties: {} },
      { connectionId: 'c1' },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.responseMimeType).toBe('application/json');
  });

  test('uses response_format json_object for other providers', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'gpt-4o', provider: 'openai' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}' }),
    );
    const api = buildApi();
    await api.generateStructured(
      [{ role: 'user', content: 'test' }],
      { type: 'object', properties: {} },
      { connectionId: 'c1' },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.response_format).toEqual({ type: 'json_object' });
  });
});

// ─── dryRun ──────────────────────────────────────────────────────────────────

describe('dryRun', () => {
  test('delegates to spindle.generate.dryRun with active chatId', async () => {
    mockSpindle.generate.dryRun.mockReturnValueOnce(
      Promise.resolve({ messages: [], breakdown: [], parameters: {} }),
    );
    const api = buildApi();
    await api.dryRun();
    expect(mockSpindle.generate.dryRun).toHaveBeenCalledTimes(1);
    const call = mockSpindle.generate.dryRun.mock.calls[0] as any;
    expect(call[0].chatId).toBe('test-chat-id');
  });

  test('uses provided chatId over active context', async () => {
    mockSpindle.generate.dryRun.mockReturnValueOnce(
      Promise.resolve({ messages: [], breakdown: [], parameters: {} }),
    );
    const api = buildApi();
    await api.dryRun({ chatId: 'custom-chat' });
    const call = mockSpindle.generate.dryRun.mock.calls[0] as any;
    expect(call[0].chatId).toBe('custom-chat');
  });

  test('throws when no chat available', () => {
    const api = buildApi({ activeContext: { chatId: null, characterId: null } });
    expect(() => api.dryRun()).toThrow('no active chat');
  });

  test('throws when generation permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() => api.dryRun()).toThrow('PERMISSION_DENIED');
  });
});

// ─── generateWithTools ───────────────────────────────────────────────────────

describe('generateWithTools', () => {
  test('returns tool_calls when the LLM makes function calls', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({
        content: '',
        tool_calls: [{ name: 'search', args: { q: 'test' }, call_id: 'call-1' }],
      }),
    );
    const api = buildApi();
    const result = await api.generateWithTools(
      [{ role: 'user', content: 'search for test' }],
      [{ name: 'search', description: 'Search', parameters: { type: 'object', properties: { q: { type: 'string' } } } }],
    );
    expect(result.tool_calls).toHaveLength(1);
    expect(result.tool_calls![0]!.name).toBe('search');
  });

  test('returns content when LLM produces a final text response (no tool_calls)', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'Final answer', tool_calls: [] }),
    );
    const api = buildApi();
    const result = await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
    );
    expect(result.content).toBe('Final answer');
    expect(result.tool_calls).toBeUndefined();
  });

  test('normalises tool parameters — missing parameters get empty object schema', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'ok', tool_calls: [] }),
    );
    const api = buildApi();
    await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }], // no parameters
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].tools[0].parameters).toEqual({ type: 'object', properties: {} });
  });

  test('applies response_format for non-Mistral providers when schema is provided', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'gpt-4o', provider: 'openai' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}', tool_calls: [] }),
    );
    const api = buildApi();
    await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      { connectionId: 'c1' },
      { type: 'object', properties: { x: { type: 'number' } } },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.response_format).toEqual({ type: 'json_object' });
  });

  test('skips response_format for Mistral provider (error 3051 avoidance)', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'mistral-large', provider: 'mistral' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}', tool_calls: [] }),
    );
    const api = buildApi();
    await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      { connectionId: 'c1' },
      { type: 'object', properties: {} },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.response_format).toBeUndefined();
  });

  test('detects Mistral models via model name regex (OpenRouter proxy path)', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'mistralai/mistral-large', provider: 'openrouter' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{}', tool_calls: [] }),
    );
    const api = buildApi();
    await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      { connectionId: 'c1' },
      { type: 'object', properties: {} },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.response_format).toBeUndefined(); // Mistral detected
  });

  test('uses Anthropic output_config when provider is anthropic + schema', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'claude-3', provider: 'anthropic' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}', tool_calls: [] }),
    );
    const api = buildApi();
    await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      { connectionId: 'c1' },
      { type: 'object', properties: {} },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.output_config.format.type).toBe('json_schema');
  });

  test('uses Google responseMimeType when provider is google + schema', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'gemini-pro', provider: 'google' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}', tool_calls: [] }),
    );
    const api = buildApi();
    await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      { connectionId: 'c1' },
      { type: 'object', properties: {} },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    expect(call[0].parameters.responseMimeType).toBe('application/json');
  });

  test('parses structured output from final response when schema provided', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '```json\n{"name":"Alice"}\n```', tool_calls: [] }),
    );
    const api = buildApi();
    const result = await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      undefined,
      { type: 'object', properties: { name: { type: 'string' } } },
    );
    expect(result.content).toEqual({ name: 'Alice' });
    expect(result.tool_calls).toBeUndefined();
  });

  test('falls back to raw content when structured output JSON parsing fails', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'not json at all', tool_calls: [] }),
    );
    const api = buildApi();
    const result = await api.generateWithTools(
      [{ role: 'user', content: 'hi' }],
      [{ name: 'tool', description: 'tool' }],
      undefined,
      { type: 'object', properties: {} },
    );
    // Falls back to raw content when parse fails
    expect(result.content).toBe('not json at all');
  });

  test('throws when generation permission denied', () => {
    const api = buildApi({ hasPerm: () => false });
    expect(() =>
      api.generateWithTools([{ role: 'user', content: 'hi' }], []),
    ).toThrow('PERMISSION_DENIED');
  });
});

// ─── generateStructured — additional coverage ────────────────────────────────

describe('generateStructured (Zod + helpers)', () => {
  test('validates response with Zod schema when provided', async () => {
    const z = await import('zod');
    const schema = z.z.object({ name: z.z.string(), age: z.z.number() });

    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"name":"Alice","age":30}' }),
    );
    const api = buildApi();
    const result = await api.generateStructured(
      [{ role: 'user', content: 'who?' }],
      schema,
    );
    expect(result).toEqual({ name: 'Alice', age: 30 });
  });

  test('throws when Zod validation fails on response', async () => {
    const z = await import('zod');
    const schema = z.z.object({ name: z.z.string(), age: z.z.number() });

    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"name":"Alice","age":"not-a-number"}' }),
    );
    const api = buildApi();
    await expect(
      api.generateStructured([{ role: 'user', content: 'who?' }], schema),
    ).rejects.toThrow('schema validation failed');
  });

  test('extracts bare JSON object without code block wrapper', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: 'Here is the result: {"key":"value"} done.' }),
    );
    const api = buildApi();
    const result = await api.generateStructured(
      [{ role: 'user', content: 'test' }],
      { type: 'object', properties: { key: { type: 'string' } } },
    );
    expect(result).toEqual({ key: 'value' });
  });

  test('strictifySchema adds additionalProperties:false to nested objects', async () => {
    mockSpindle.connections.get.mockReturnValueOnce(
      Promise.resolve({ id: 'c1', model: 'claude-3', provider: 'anthropic' }),
    );
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"a":{"b":1}}' }),
    );
    const api = buildApi();
    await api.generateStructured(
      [{ role: 'user', content: 'test' }],
      {
        type: 'object',
        properties: { a: { type: 'object', properties: { b: { type: 'number' } } } },
      },
      { connectionId: 'c1' },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    const schema = call[0].parameters.output_config.format.schema;
    expect(schema.additionalProperties).toBe(false);
    expect(schema.properties.a.additionalProperties).toBe(false);
  });

  test('enhanceMessagesWithSchema prepends system message when none exists', async () => {
    mockSpindle.connections.list.mockReturnValueOnce(Promise.resolve([]));
    mockSpindle.generate.raw.mockReturnValueOnce(
      Promise.resolve({ content: '{"x":1}' }),
    );
    const api = buildApi();
    await api.generateStructured(
      [{ role: 'user', content: 'test' }], // no system message
      { type: 'object', properties: {} },
    );
    const call = mockSpindle.generate.raw.mock.calls[0] as any;
    const messages = call[0].messages;
    expect(messages[0].role).toBe('system');
    expect(messages[0].content).toContain('You must respond with valid JSON');
  });
});
