/**
 * Parent-side coverage for `api.images.*`. Mirrors the presets/databanks
 * pattern: each method gets a forwarding test (Spindle called with the
 * right args, DTO↔Info translation correct) and a permission-gating test
 * (rejects with PERMISSION_DENIED when `images` is missing).
 */

import { describe, test, expect, beforeEach } from 'bun:test';
import { buildImagesAPI } from '../../../src/engine/api/images.js';
import { createTestDeps } from '../../_infra/mock-deps.js';

let mockSpindle: any;

beforeEach(() => {
  mockSpindle = (globalThis as any).spindle;
});

function buildApi(overrides?: Parameters<typeof createTestDeps>[0]) {
  return buildImagesAPI(createTestDeps(overrides));
}

// ─── Fixtures ────────────────────────────────────────────────────────────────

const imageDTO = {
  id:                          'image-abc',
  original_filename:           'avatar.png',
  mime_type:                   'image/png',
  width:                       512,
  height:                      512,
  has_thumbnail:               true,
  url:                         '/api/images/image-abc',
  specificity:                 'avatar',
  owner_extension_identifier:  null,
  owner_character_id:          'char-1',
  owner_chat_id:               null,
  created_at:                  1_700_000_000,
};

// ─── upload ─────────────────────────────────────────────────────────────────

describe('upload', () => {
  test('forwards bytes + camelCase→snake_case mapped input + returns camelCase ImageInfo', async () => {
    mockSpindle.images.upload.mockReturnValueOnce(Promise.resolve(imageDTO));
    const api = buildApi();
    const bytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47]);
    const info = await api.upload({
      data:             bytes,
      filename:         'avatar.png',
      mimeType:         'image/png',
      ownerCharacterId: 'char-1',
      ownerChatId:      undefined,
    });

    // Returned info is the camelCase mirror of the DTO.
    expect(info.id).toBe('image-abc');
    expect(info.originalFilename).toBe('avatar.png');
    expect(info.mimeType).toBe('image/png');
    expect(info.width).toBe(512);
    expect(info.hasThumbnail).toBe(true);
    expect(info.ownerCharacterId).toBe('char-1');
    expect(info.createdAt).toBe(1_700_000_000);

    // Spindle saw the snake_case DTO + the raw bytes.
    const callArgs = (mockSpindle.images.upload as any).mock.calls.at(-1)!;
    expect(callArgs[0].data).toBe(bytes);
    expect(callArgs[0].filename).toBe('avatar.png');
    expect(callArgs[0].mime_type).toBe('image/png');
    expect(callArgs[0].owner_character_id).toBe('char-1');
    // owner_chat_id was undefined on input → conditionally-spread out of
    // the call args (NOT present, NOT explicitly undefined).
    expect('owner_chat_id' in callArgs[0]).toBe(false);
  });

  test('forwards bare data-only input', async () => {
    mockSpindle.images.upload.mockReturnValueOnce(Promise.resolve(imageDTO));
    const api = buildApi();
    const bytes = new Uint8Array([0x47, 0x49, 0x46]);
    await api.upload({ data: bytes });

    const callArgs = (mockSpindle.images.upload as any).mock.calls.at(-1)!;
    expect(callArgs[0].data).toBe(bytes);
    expect('filename' in callArgs[0]).toBe(false);
    expect('mime_type' in callArgs[0]).toBe(false);
    expect('owner_character_id' in callArgs[0]).toBe(false);
    expect('owner_chat_id' in callArgs[0]).toBe(false);
  });

  test('throws PERMISSION_DENIED when images permission is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.upload({ data: new Uint8Array(0) })).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── uploadFromDataUrl ──────────────────────────────────────────────────────

describe('uploadFromDataUrl', () => {
  test('forwards data URL + options DTO + returns camelCase ImageInfo', async () => {
    mockSpindle.images.uploadFromDataUrl.mockReturnValueOnce(Promise.resolve(imageDTO));
    const api = buildApi({ userId: 'user-42' });
    const dataUrl = 'data:image/png;base64,iVBORw0KGgo=';
    const info = await api.uploadFromDataUrl(dataUrl, {
      originalFilename: 'snap.png',
      ownerCharacterId: 'char-9',
    });

    expect(info.id).toBe('image-abc');
    const callArgs = (mockSpindle.images.uploadFromDataUrl as any).mock.calls.at(-1)!;
    expect(callArgs[0]).toBe(dataUrl);
    expect(callArgs[1]).toEqual({
      originalFilename:   'snap.png',
      owner_character_id: 'char-9',
      userId:             'user-42',
    });
  });

  test('omits options when none are passed (uid still forwards)', async () => {
    mockSpindle.images.uploadFromDataUrl.mockReturnValueOnce(Promise.resolve(imageDTO));
    const api = buildApi({ userId: 'user-7' });
    await api.uploadFromDataUrl('data:image/png;base64,AAAA');

    const callArgs = (mockSpindle.images.uploadFromDataUrl as any).mock.calls.at(-1)!;
    expect(callArgs[1]).toEqual({ userId: 'user-7' });
  });

  test('throws PERMISSION_DENIED when images permission is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.uploadFromDataUrl('data:image/png;base64,AAAA')).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── get ────────────────────────────────────────────────────────────────────

describe('get', () => {
  test('returns camelCase ImageInfo when found', async () => {
    mockSpindle.images.get.mockReturnValueOnce(Promise.resolve(imageDTO));
    const api = buildApi();
    const info = await api.get('image-abc');
    expect(info).not.toBeNull();
    expect(info!.id).toBe('image-abc');
    expect(info!.originalFilename).toBe('avatar.png');
  });

  test('returns null when not found', async () => {
    mockSpindle.images.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi();
    expect(await api.get('image-missing')).toBeNull();
  });

  test('forwards userId', async () => {
    mockSpindle.images.get.mockReturnValueOnce(Promise.resolve(null));
    const api = buildApi({ userId: 'user-42' });
    await api.get('image-abc');
    const callArgs = (mockSpindle.images.get as any).mock.calls.at(-1)!;
    expect(callArgs[0]).toBe('image-abc');
    expect(callArgs[1]).toBe('user-42');
  });

  test('throws PERMISSION_DENIED when images permission is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.get('image-abc')).rejects.toThrow('PERMISSION_DENIED');
  });
});

// ─── delete ─────────────────────────────────────────────────────────────────

describe('delete', () => {
  test('forwards imageId + returns the boolean result', async () => {
    mockSpindle.images.delete.mockReturnValueOnce(Promise.resolve(true));
    const api = buildApi();
    const result = await api.delete('image-abc');
    expect(result).toBe(true);
    expect((mockSpindle.images.delete as any).mock.calls.at(-1)![0]).toBe('image-abc');
  });

  test('returns false when nothing was deleted', async () => {
    mockSpindle.images.delete.mockReturnValueOnce(Promise.resolve(false));
    const api = buildApi();
    expect(await api.delete('image-missing')).toBe(false);
  });

  test('throws PERMISSION_DENIED when images permission is missing', async () => {
    const api = buildApi({ hasPerm: () => false });
    await expect(api.delete('image-abc')).rejects.toThrow('PERMISSION_DENIED');
  });
});
