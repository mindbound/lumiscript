/**
 * ============================================================================
 * LUMISCRIPT — UTILS API
 * ============================================================================
 * uuid, shortId, wait, random, http (cors-proxied), template (Handlebars)
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import Handlebars from 'handlebars';
import type { LumiScriptAPI, HttpResponse } from '../../types/script.js';
import { generateUUID, generateShortId } from '../../utils/uuid.js';
import { type APIBuildDeps, assertDangerous, shielded } from './shared.js';

export function buildUtilsAPI(deps: APIBuildDeps): LumiScriptAPI['utils'] {
  const { script, hasPerm, userId, activeContext } = deps;

  // Isolated Handlebars environment per script — helpers registered by one
  // script don't pollute the template environment of any other script.
  const hbs = Handlebars.create();

  function requireHttp(): void {
    assertDangerous(script);
    if (!hasPerm('cors_proxy')) {
      throw new Error('PERMISSION_DENIED:cors_proxy — grant this permission to use api.utils.http');
    }
  }

  return {
    uuid:    () => generateUUID(),
    shortId: () => generateShortId(),
    wait:    (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms)),

    random: {
      int:    (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      float:  (min, max) => Math.random() * (max - min) + min,
      pick<T>(array: T[]): T {
        if (array.length === 0) throw new Error('api.utils.random.pick: empty array');
        return array[Math.floor(Math.random() * array.length)]!;
      },
      bool:   () => Math.random() < 0.5,
      chance: (p) => Math.random() < Math.max(0, Math.min(1, p)),
      shuffle<T>(array: T[]): T[] {
        const a = [...array];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j]!, a[i]!];
        }
        return a;
      },
    },

    // Synchronous guards throw directly in the AsyncFunction body — reliably
    // caught by executeScript's try/catch. shielded() prevents the returned
    // spindle.cors() Promise from becoming an unhandled rejection in Bun
    // when the user script calls the method without await.
    http: {
      get: (url, opts) => {
        requireHttp();
        return shielded(spindle.cors(url, { method: 'GET', headers: opts?.headers }) as unknown as Promise<HttpResponse>);
      },
      post: (url, body, opts) => {
        requireHttp();
        return shielded(spindle.cors(url, { method: 'POST', headers: opts?.headers, body }) as unknown as Promise<HttpResponse>);
      },
      put: (url, body, opts) => {
        requireHttp();
        return shielded(spindle.cors(url, { method: 'PUT', headers: opts?.headers, body }) as unknown as Promise<HttpResponse>);
      },
      delete: (url, opts) => {
        requireHttp();
        return shielded(spindle.cors(url, { method: 'DELETE', headers: opts?.headers }) as unknown as Promise<HttpResponse>);
      },
      request: (url, opts) => {
        requireHttp();
        return shielded(spindle.cors(url, { method: opts.method ?? 'GET', headers: opts.headers, body: opts.body }) as unknown as Promise<HttpResponse>);
      },
    },

    template: {
      async render(
        template: string,
        data: Record<string, unknown> = {},
        options: { chatId?: string; characterId?: string } = {},
      ): Promise<string> {
        const { text } = await spindle.macros.resolve(template, {
          chatId:      options.chatId      ?? activeContext.chatId      ?? undefined,
          characterId: options.characterId ?? activeContext.characterId ?? undefined,
          userId:      userId              ?? undefined,
        });
        return hbs.compile(text)(data);
      },

      compile(template: string): (data?: Record<string, unknown>) => string {
        const compiled = hbs.compile(template);
        return (data: Record<string, unknown> = {}) => compiled(data);
      },

      registerHelper(name: string, fn: (...args: unknown[]) => unknown): void {
        hbs.registerHelper(name, fn as Handlebars.HelperDelegate);
      },
    },

    macros: {
      async resolve(
        template: string,
        options: { chatId?: string; characterId?: string; commit?: boolean } = {},
      ) {
        // `commit` defaults to true (host's normal behaviour). Passing it
        // through as-is means older Lumiverse hosts (pre-0.4.32 types) that
        // ignore the field still run committing resolves — backward-compat
        // safe. `chatId` / `characterId` default to the active context for
        // consistency with `template.render`.
        return shielded(spindle.macros.resolve(template, {
          chatId:      options.chatId      ?? activeContext.chatId      ?? undefined,
          characterId: options.characterId ?? activeContext.characterId ?? undefined,
          userId:      userId              ?? undefined,
          commit:      options.commit,
        }));
      },
    },

    image: {
      detectMime(bytes: Uint8Array): string | null {
        return detectImageMime(bytes);
      },
      dataUrlToBytes(url: string): { data: Uint8Array; mimeType: string } | null {
        return parseBase64DataUrl(url);
      },
      bytesToDataUrl(bytes: Uint8Array, mimeType: string): string {
        return `data:${mimeType};base64,${bytesToBase64(bytes)}`;
      },
    },
  };
}

// ─── Image helpers (module-private) ──────────────────────────────────────────

/**
 * Magic-byte sniff. Returns the canonical MIME type, or null for
 * unrecognised / truncated input. Kept narrow to image formats that
 * Lumiverse / common browsers render natively.
 *
 * Signatures (offsets in bytes, values in hex):
 *   PNG   0–3  89 50 4E 47
 *   JPEG  0–2  FF D8 FF
 *   GIF   0–5  47 49 46 38 37 61 ("GIF87a") or 47 49 46 38 39 61 ("GIF89a")
 *   WebP  0–3  52 49 46 46 ("RIFF")        + 8–11  57 45 42 50 ("WEBP")
 *   BMP   0–1  42 4D
 */
function detectImageMime(bytes: Uint8Array): string | null {
  if (bytes.length < 4) return null;

  // PNG
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4E && bytes[3] === 0x47) {
    return 'image/png';
  }
  // JPEG
  if (bytes[0] === 0xFF && bytes[1] === 0xD8 && bytes[2] === 0xFF) {
    return 'image/jpeg';
  }
  // GIF (both 87a and 89a)
  if (
    bytes.length >= 6 &&
    bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 &&
    bytes[3] === 0x38 && (bytes[4] === 0x37 || bytes[4] === 0x39) &&
    bytes[5] === 0x61
  ) {
    return 'image/gif';
  }
  // WebP — RIFF container with WEBP fourcc at offset 8
  if (
    bytes.length >= 12 &&
    bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
    bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
  ) {
    return 'image/webp';
  }
  // BMP
  if (bytes[0] === 0x42 && bytes[1] === 0x4D) {
    return 'image/bmp';
  }
  return null;
}

/**
 * Parse a base64-encoded data URL. Only the `data:<mime>;base64,<payload>`
 * shape is accepted — non-base64 data URIs (`data:image/svg+xml,<raw>`)
 * return null rather than being silently misinterpreted. `;charset=<cs>`
 * parameters are tolerated (ignored) because some producers include them.
 */
function parseBase64DataUrl(url: string): { data: Uint8Array; mimeType: string } | null {
  // Shape: data:<mime>[;<param>]*;base64,<payload>
  // Parameter list is semicolon-delimited; `base64` must be the LAST one.
  const match = /^data:([^;,]+)(;[^,]+)?,(.*)$/s.exec(url);
  if (!match) return null;
  const mimeType = match[1] ?? '';
  const params   = match[2] ?? '';
  const payload  = match[3] ?? '';
  if (!mimeType) return null;
  if (!/(^|;)base64$/i.test(params)) return null;
  try {
    return { data: base64ToBytes(payload), mimeType };
  } catch {
    // atob throws InvalidCharacterError on non-base64 input.
    return null;
  }
}

/**
 * Uint8Array → base64 string. Chunks the input so String.fromCharCode
 * doesn't blow the argument-count stack limit on large buffers (typical
 * limit is ~65 535 args).
 */
function bytesToBase64(bytes: Uint8Array): string {
  const CHUNK = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += CHUNK) {
    const slice = bytes.subarray(i, Math.min(i + CHUNK, bytes.length));
    binary += String.fromCharCode.apply(null, Array.from(slice));
  }
  return btoa(binary);
}

/**
 * base64 string → Uint8Array. Inverse of `bytesToBase64`. Throws via
 * atob on invalid input (caller catches).
 */
function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
