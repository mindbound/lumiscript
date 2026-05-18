/**
 * Parent-side coverage for `api.imageGen.*`. Each method gets a forwarding
 * test (Spindle called with the right args, DTO↔Info translation correct)
 * and a permission-gating test (rejects with PERMISSION_DENIED when
 * `image_gen` is missing). Also covers the `userId` threading on operator-
 * scoped installs.
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildImageGenAPI } from '../../../src/engine/api/imageGen.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildImageGenAPI(createTestDeps(overrides));
}

// ─── generate ──────────────────────────────────────────────────────────────

describe('generate', () => {
  test('forwards prompt + minimal input + returns mapped result', async () => {
    const api = buildApi();
    const result = await api.generate({ prompt: 'a serene landscape' });

    expect(mockSpindle.imageGen.generate).toHaveBeenCalledTimes(1);
    const dto = (mockSpindle.imageGen.generate as any).mock.calls.at(-1)![0];
    expect(dto.prompt).toBe('a serene landscape');
    // userId is threaded by default (from createTestDeps).
    expect(typeof dto.userId).toBe('string');
    // No optional fields supplied → not present in the DTO.
    expect(dto.connection_id).toBeUndefined();
    expect(dto.negativePrompt).toBeUndefined();
    expect(dto.model).toBeUndefined();
    expect(dto.parameters).toBeUndefined();
    expect(dto.owner_character_id).toBeUndefined();
    expect(dto.owner_chat_id).toBeUndefined();

    // Result is mapped through (camelCase shape preserved).
    expect(result.imageDataUrl).toContain('data:image/png');
    expect(result.model).toBe('mock-model');
    expect(result.provider).toBe('mock-provider');
    expect(result.imageId).toBe('img-mock-generated-1');
    expect(result.imageUrl).toBe('/public/images/img-mock-generated-1.png');
  });

  test('forwards all optional input fields with snake_case translation for ownership tags', async () => {
    const api = buildApi();
    await api.generate({
      prompt:            'cat sitting on a rug',
      connectionId:      'conn-special',
      negativePrompt:    'blurry, low quality',
      model:             'sdxl-1.0',
      parameters:        { width: 1024, height: 1024, steps: 40, cfg_scale: 7 },
      ownerCharacterId:  'char-42',
      ownerChatId:       'chat-99',
    });

    const dto = (mockSpindle.imageGen.generate as any).mock.calls.at(-1)![0];
    expect(dto.prompt).toBe('cat sitting on a rug');
    expect(dto.connection_id).toBe('conn-special');
    expect(dto.negativePrompt).toBe('blurry, low quality');
    expect(dto.model).toBe('sdxl-1.0');
    expect(dto.parameters).toEqual({ width: 1024, height: 1024, steps: 40, cfg_scale: 7 });
    expect(dto.owner_character_id).toBe('char-42');
    expect(dto.owner_chat_id).toBe('chat-99');
  });

  test('passes through image_array parameters (img2img / inpainting integration with api.images.*)', async () => {
    // Providers that support input images expose `image_array`-typed
    // parameters in their schema. Scripts pass arrays of `imageId`
    // strings sourced from `api.images.upload` / etc.
    const api = buildApi();
    await api.generate({
      prompt: 'enhance this',
      parameters: {
        input_images: ['img-source-1', 'img-source-2'],
        strength:     0.75,
      },
    });

    const dto = (mockSpindle.imageGen.generate as any).mock.calls.at(-1)![0];
    expect(dto.parameters.input_images).toEqual(['img-source-1', 'img-source-2']);
    expect(dto.parameters.strength).toBe(0.75);
  });

  test('handles result missing optional imageId / imageUrl (host persistence skipped)', async () => {
    (mockSpindle.imageGen.generate as any).mockImplementationOnce(() => Promise.resolve({
      imageDataUrl: 'data:image/png;base64,xxx',
      model:        'mock-model',
      provider:     'mock-provider',
      // imageId + imageUrl omitted — represents "data URL only, no persistence"
    }));

    const api = buildApi();
    const result = await api.generate({ prompt: 'no-persist case' });

    expect(result.imageDataUrl).toBe('data:image/png;base64,xxx');
    expect(result.imageId).toBeUndefined();
    expect(result.imageUrl).toBeUndefined();
  });

  test('threads userId to spindle for operator-scoped installs', async () => {
    const api = buildApi({ userId: 'user-op-1' });
    await api.generate({ prompt: 'op-scoped call' });

    const dto = (mockSpindle.imageGen.generate as any).mock.calls.at(-1)![0];
    expect(dto.userId).toBe('user-op-1');
  });

  test('omits userId from the DTO when deps userId is null', async () => {
    const api = buildApi({ userId: null });
    await api.generate({ prompt: 'no-userid case' });

    const dto = (mockSpindle.imageGen.generate as any).mock.calls.at(-1)![0];
    expect(dto.userId).toBeUndefined();
  });

  test('throws PERMISSION_DENIED when image_gen is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.generate({ prompt: 'denied' })).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── getProviders ───────────────────────────────────────────────────────────

describe('getProviders', () => {
  test('returns providers with capability schemas (DTO is already camelCase, pass-through)', async () => {
    const api = buildApi();
    const providers = await api.getProviders();

    expect(providers.length).toBe(1);
    expect(providers[0]!.id).toBe('mock-provider');
    expect(providers[0]!.name).toBe('Mock Provider');
    expect(providers[0]!.capabilities.apiKeyRequired).toBe(true);
    expect(providers[0]!.capabilities.modelListStyle).toBe('static');
    expect(providers[0]!.capabilities.staticModels).toEqual([
      { id: 'mock-model', label: 'Mock Model' },
    ]);
    expect(providers[0]!.capabilities.defaultUrl).toBe('https://mock.example.com/api');
    // Parameter schema preserves all fields including optional ones.
    expect(providers[0]!.capabilities.parameters.width).toEqual({
      type: 'integer', default: 512, min: 64, max: 2048, step: 64,
      description: 'Image width in pixels',
    });
  });

  test('forwards userId for operator-scoped installs', async () => {
    const api = buildApi({ userId: 'user-op-1' });
    await api.getProviders();
    expect((mockSpindle.imageGen.getProviders as any).mock.calls.at(-1)![0]).toBe('user-op-1');
  });

  test('omits staticModels when the DTO provider has none (dynamic providers)', async () => {
    (mockSpindle.imageGen.getProviders as any).mockImplementationOnce(() => Promise.resolve([
      {
        id:   'dyn-provider',
        name: 'Dynamic Provider',
        capabilities: {
          parameters:     {},
          apiKeyRequired: true,
          modelListStyle: 'dynamic',
          // staticModels omitted — getModels() returns the live list
          defaultUrl:     'https://dyn.example.com/api',
        },
      },
    ]));

    const api = buildApi();
    const providers = await api.getProviders();
    expect(providers[0]!.capabilities.staticModels).toBeUndefined();
    expect(providers[0]!.capabilities.modelListStyle).toBe('dynamic');
  });

  test('throws PERMISSION_DENIED when image_gen is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.getProviders()).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── listConnections ────────────────────────────────────────────────────────

describe('listConnections', () => {
  test('returns connections with snake_case → camelCase translation', async () => {
    const api = buildApi();
    const connections = await api.listConnections();

    expect(connections.length).toBe(1);
    const c = connections[0]!;
    expect(c.id).toBe('conn-mock-1');
    expect(c.name).toBe('Mock Connection');
    expect(c.provider).toBe('mock-provider');
    expect(c.apiUrl).toBe('https://mock.example.com/api');
    expect(c.model).toBe('mock-model');
    expect(c.isDefault).toBe(true);
    expect(c.hasApiKey).toBe(true);
    expect(c.defaultParameters).toEqual({ width: 512, steps: 20 });
    expect(c.metadata).toEqual({});
    expect(c.createdAt).toBe(1700000000);
    expect(c.updatedAt).toBe(1700000000);
  });

  test('forwards userId', async () => {
    const api = buildApi({ userId: 'user-op-1' });
    await api.listConnections();
    expect((mockSpindle.imageGen.listConnections as any).mock.calls.at(-1)![0]).toBe('user-op-1');
  });

  test('throws PERMISSION_DENIED when image_gen is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.listConnections()).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── getConnection ──────────────────────────────────────────────────────────

describe('getConnection', () => {
  test('forwards connectionId + returns mapped Info', async () => {
    const api = buildApi();
    const conn = await api.getConnection('conn-mock-1');

    expect((mockSpindle.imageGen.getConnection as any).mock.calls.at(-1)![0]).toBe('conn-mock-1');
    expect(conn).not.toBeNull();
    expect(conn!.id).toBe('conn-mock-1');
    expect(conn!.apiUrl).toBe('https://mock.example.com/api');
    expect(conn!.hasApiKey).toBe(true);
  });

  test('returns null when the host returns null (unknown / out-of-scope)', async () => {
    (mockSpindle.imageGen.getConnection as any).mockImplementationOnce(() => Promise.resolve(null));
    const api = buildApi();
    const conn = await api.getConnection('conn-nonexistent');
    expect(conn).toBeNull();
  });

  test('forwards userId', async () => {
    const api = buildApi({ userId: 'user-op-1' });
    await api.getConnection('conn-x');
    expect((mockSpindle.imageGen.getConnection as any).mock.calls.at(-1)![1]).toBe('user-op-1');
  });

  test('throws PERMISSION_DENIED when image_gen is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.getConnection('conn-x')).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── getModels ──────────────────────────────────────────────────────────────

describe('getModels', () => {
  test('returns model list — already camelCase shape, pure pass-through', async () => {
    const api = buildApi();
    const models = await api.getModels('conn-mock-1');

    expect((mockSpindle.imageGen.getModels as any).mock.calls.at(-1)![0]).toBe('conn-mock-1');
    expect(models).toEqual([
      { id: 'mock-model',     label: 'Mock Model' },
      { id: 'mock-model-alt', label: 'Mock Model Alt' },
    ]);
  });

  test('forwards userId', async () => {
    const api = buildApi({ userId: 'user-op-1' });
    await api.getModels('conn-x');
    expect((mockSpindle.imageGen.getModels as any).mock.calls.at(-1)![1]).toBe('user-op-1');
  });

  test('throws PERMISSION_DENIED when image_gen is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.getModels('conn-x')).rejects.toThrow('PERMISSION_DENIED');
  });
});
