/**
 * Unit tests for `src/engine/image-format.ts` — the zero-dependency image-byte
 * helpers shared between the parent + child runtimes (magic-byte sniffing,
 * base64 data-URL parsing, base64 ⇄ bytes round-trips).
 */
import { describe, test, expect } from 'bun:test';
import {
  detectImageMime,
  parseBase64DataUrl,
  bytesToBase64,
  base64ToBytes,
} from '../../src/engine/image-format.js';

describe('detectImageMime', () => {
  test('PNG signature', () => {
    expect(detectImageMime(new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a]))).toBe('image/png');
  });

  test('JPEG signature', () => {
    expect(detectImageMime(new Uint8Array([0xff, 0xd8, 0xff, 0xe0]))).toBe('image/jpeg');
  });

  test('GIF87a and GIF89a', () => {
    expect(detectImageMime(new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]))).toBe('image/gif');
    expect(detectImageMime(new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61]))).toBe('image/gif');
  });

  test('WebP (RIFF container + WEBP fourcc at offset 8)', () => {
    const b = new Uint8Array(12);
    b.set([0x52, 0x49, 0x46, 0x46], 0); // "RIFF"
    b.set([0x57, 0x45, 0x42, 0x50], 8); // "WEBP"
    expect(detectImageMime(b)).toBe('image/webp');
  });

  test('BMP signature', () => {
    expect(detectImageMime(new Uint8Array([0x42, 0x4d, 0x00, 0x00]))).toBe('image/bmp');
  });

  test('returns null for unrecognised or too-short input', () => {
    expect(detectImageMime(new Uint8Array([0x00, 0x01, 0x02, 0x03]))).toBeNull();
    expect(detectImageMime(new Uint8Array([0x89, 0x50]))).toBeNull(); // < 4 bytes
  });
});

describe('base64 ⇄ bytes round-trip', () => {
  test('base64ToBytes ∘ bytesToBase64 is identity', () => {
    const original = new Uint8Array([0, 1, 2, 250, 255, 128, 64]);
    expect(Array.from(base64ToBytes(bytesToBase64(original)))).toEqual(Array.from(original));
  });

  test('handles a buffer larger than the 0x8000 chunk size', () => {
    const big = new Uint8Array(0x8000 + 100).map((_, i) => i % 256);
    expect(Array.from(base64ToBytes(bytesToBase64(big)))).toEqual(Array.from(big));
  });
});

describe('parseBase64DataUrl', () => {
  test('parses a base64 data URL into bytes + mime', () => {
    const res = parseBase64DataUrl(`data:image/png;base64,${bytesToBase64(new Uint8Array([1, 2, 3]))}`);
    expect(res).not.toBeNull();
    expect(res!.mimeType).toBe('image/png');
    expect(Array.from(res!.data)).toEqual([1, 2, 3]);
  });

  test('tolerates a charset parameter before base64', () => {
    const res = parseBase64DataUrl(`data:text/plain;charset=utf-8;base64,${bytesToBase64(new Uint8Array([9]))}`);
    expect(res).not.toBeNull();
    expect(res!.mimeType).toBe('text/plain');
  });

  test('returns null for a non-base64 data URL', () => {
    expect(parseBase64DataUrl('data:image/svg+xml,<svg/>')).toBeNull();
  });

  test('returns null for a non-data-URL string', () => {
    expect(parseBase64DataUrl('https://example.com/x.png')).toBeNull();
  });
});
