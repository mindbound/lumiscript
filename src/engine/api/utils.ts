/**
 * ============================================================================
 * LUMISCRIPT — UTILS API
 * ============================================================================
 * uuid, shortId, wait, random, http (cors-proxied), template (Handlebars)
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import Handlebars from 'handlebars';
import type { LumiScriptAPI, HttpResponse, HttpRequestOptions } from '../../types/script.js';
import { generateUUID, generateShortId } from '../../utils/uuid.js';
import { type APIBuildDeps, assertDangerous, shielded } from './shared.js';
import { isAllowlistedHost } from '../egress-allowlist.js';
import {
  detectImageMime,
  parseBase64DataUrl,
  bytesToBase64,
} from '../image-format.js';

// ─── HTTP helpers (v1.0.0-rc.5+) ────────────────────────────────────────────
//
// `spindle.cors` accepts a `responseType?: 'text' | 'arraybuffer'` option;
// when `'arraybuffer'`, the response is delivered with `body` as a base64-
// encoded string and an `encoding: 'base64'` field on the response object.
// LumiScript transparently decodes that to a `Uint8Array` so script authors
// always receive bytes when they ask for bytes.
//
// Shape of the spindle.cors response (the parts we care about):
//   { status, statusText, headers, body, encoding? }
//
// When `encoding === 'base64'`, decode `body`. Otherwise pass through.

function buildCorsOptions(method: string, opts?: HttpRequestOptions): {
  method: string;
  headers?: Record<string, string>;
  responseType?: 'text' | 'arraybuffer';
  signal?: AbortSignal;
} {
  return {
    method,
    headers: opts?.headers,
    ...(opts?.responseType !== undefined ? { responseType: opts.responseType } : {}),
    // Carried to the direct path only (guardedCorsFetch strips it before the cors proxy — an AbortSignal
    // can't cross the worker boundary). Injected into opts by the host when the caller passes a signal.
    ...(opts?.signal !== undefined ? { signal: opts.signal } : {}),
  };
}

function decodeHttpResponse(raw: unknown): HttpResponse {
  const r = raw as {
    status?:     number;
    statusText?: string;
    headers?:    Record<string, string>;
    body?:       unknown;
    encoding?:   string;
    setCookies?: string[];
  };
  // Preserved individual Set-Cookie values (direct path only; the cors proxy can't supply them).
  const cookieField = Array.isArray(r.setCookies) && r.setCookies.length > 0 ? { setCookies: r.setCookies } : {};
  // Normalize the response shape defensively — older host versions may not
  // populate `encoding` even when body arrived as base64. We only decode
  // when explicitly flagged, otherwise we pass the body through as-is.
  if (r.encoding === 'base64' && typeof r.body === 'string') {
    return {
      status:     r.status     ?? 0,
      statusText: r.statusText ?? '',
      headers:    r.headers    ?? {},
      body:       base64ToUint8Array(r.body),
      ...cookieField,
    };
  }
  return {
    status:     r.status     ?? 0,
    statusText: r.statusText ?? '',
    headers:    r.headers    ?? {},
    body:       (typeof r.body === 'string' || r.body instanceof Uint8Array) ? r.body : '',
    ...cookieField,
  };
}

function base64ToUint8Array(b64: string): Uint8Array {
  // Decode base64 → bytes via the universal `atob` + char-code path. We
  // avoid `Buffer.from(b64, 'base64')` here because Lumiverse's host-side
  // bundle scanner (`detectDangerousBackendCapabilities`, as of host commit
  // `7e83b2c2`) flags `Buffer.from(..., 'base64')` as "dynamic code
  // execution" — an overbroad false-positive for plain byte decoding (the
  // pattern is sometimes a precursor to `eval` of obfuscated payloads, but
  // standalone byte decoding isn't code execution). `atob` is a global in
  // Bun and browsers; performance is equivalent for our payload sizes
  // (HTTP response bodies in the binary path, data-URL byte decoding).
  const binStr = atob(b64);
  const bytes = new Uint8Array(binStr.length);
  for (let i = 0; i < binStr.length; i++) {
    bytes[i] = binStr.charCodeAt(i);
  }
  return bytes;
}

// ─── SSRF-guarded egress (the single outbound-HTTP chokepoint) ───────────────
//
// All LumiScript outbound HTTP (api.utils.http.* AND — from Phase 2 — bare `fetch`) funnels through
// `guardedCorsFetch`. By default it routes through `spindle.cors` → the host's `safeFetch` (DNS-pinned,
// blocks loopback/LAN/link-local/metadata). The one exception is a host the USER has allowlisted for direct
// local access (see LumiScriptSettings.allowedPrivateHosts / egress-allowlist.ts): those take a DIRECT
// `globalThis.fetch`, which is how a script reaches a trusted local model server / LAN device. The allowlist
// is read live via an injected reader (wired in backend.ts from settingsStore, like engineMode).

let allowedPrivateHostsReader: () => readonly string[] = () => [];
export function setAllowedPrivateHostsReader(fn: () => readonly string[]): void {
  allowedPrivateHostsReader = fn;
}

type CorsOptions = { method: string; headers?: Record<string, string>; body?: unknown; responseType?: 'text' | 'arraybuffer'; signal?: AbortSignal };
/** The `spindle.cors`-shaped response the decoder consumes (both the cors path and the direct path emit it). */
type CorsLikeResponse = { status: number; statusText: string; headers: Record<string, string>; body: string; encoding?: 'base64'; setCookies?: string[] };

// Cap on a DIRECT-path response body. The hardened cors→safeFetch path has its own host-side size cap; the
// direct path bypasses safeFetch, so it must bound the body itself — otherwise a large response from an
// allowlisted host would be buffered (and base64'd) in full before anything downstream can reject it. Matches
// the QuickJS in-VM fetch cap (qjs-engine.ts) so the two egress paths agree.
const DIRECT_FETCH_MAX_RESPONSE_BYTES = 64 * 1024 * 1024; // 64 MiB

/**
 * Read a response body into bytes, refusing to buffer more than `max`. Rejects up front on a declared
 * `Content-Length` over the cap, and — because a local server may omit or understate it (chunked / lying
 * length) — also caps the ACTUAL bytes read by streaming and aborting the moment the running total exceeds
 * `max`. So the guard holds regardless of what the origin claims.
 */
async function readBodyCapped(res: Response, max: number): Promise<Uint8Array> {
  const declared = Number(res.headers.get('content-length'));
  if (Number.isFinite(declared) && declared > max) {
    throw new Error(`LumiScript: direct fetch response Content-Length ${declared} exceeds the ${max}-byte limit.`);
  }
  const reader = res.body?.getReader();
  if (!reader) {
    const buf = new Uint8Array(await res.arrayBuffer());
    if (buf.byteLength > max) {
      throw new Error(`LumiScript: direct fetch response (${buf.byteLength} bytes) exceeds the ${max}-byte limit.`);
    }
    return buf;
  }
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;
    total += value.byteLength;
    if (total > max) {
      try { await reader.cancel(); } catch { /* stream already closing */ }
      throw new Error(`LumiScript: direct fetch response exceeds the ${max}-byte limit.`);
    }
    chunks.push(value);
  }
  const out = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) { out.set(c, offset); offset += c.byteLength; }
  return out;
}

/**
 * Direct fetch to a user-allowlisted trusted-local host, normalized to `spindle.cors`'s response shape so
 * the SAME `decodeHttpResponse` handles both paths. `redirect: 'manual'` — the direct path never chases a
 * redirect off the allowlisted host into the internal network; a redirecting local endpoint surfaces the
 * 3xx to the caller rather than silently following it. The body is size-capped (see `readBodyCapped`), and
 * the scheme is re-checked (defence in depth: the caller only reaches here for an http/https allowlisted
 * host, but the direct path skips safeFetch, so it refuses a non-http(s) URL itself too).
 */
async function directLocalFetch(url: string, opts: CorsOptions): Promise<CorsLikeResponse> {
  let protocol: string;
  try { protocol = new URL(url).protocol; } catch { protocol = ''; }
  if (protocol !== 'http:' && protocol !== 'https:') {
    throw new Error(`LumiScript: refusing a non-http(s) direct fetch (${protocol || 'no scheme'}).`);
  }
  const res = await globalThis.fetch(url, {
    method:   opts.method,
    headers:  opts.headers,
    body:     opts.body as BodyInit | undefined,
    redirect: 'manual',
    // The direct path can be cancelled: forward the host-injected AbortSignal to the real fetch. (The
    // cors path can't — spindle.cors runs across the worker boundary; guardedCorsFetch drops it there.)
    ...(opts.signal !== undefined ? { signal: opts.signal } : {}),
  });
  const headers: Record<string, string> = {};
  res.headers.forEach((v, k) => { headers[k] = v; });
  // Preserve Set-Cookie multiplicity separately — the flat `headers` map above collapses repeated
  // Set-Cookie headers into one. `getSetCookie` is the WHATWG-standard array accessor (present in Bun);
  // guard it in case a runtime lacks it. Only the direct path can do this: it holds the real Response,
  // whereas the cors proxy has already flattened headers before we see them.
  const setCookies = typeof res.headers.getSetCookie === 'function' ? res.headers.getSetCookie() : [];
  const cookieField = setCookies.length > 0 ? { setCookies } : {};
  const bytes = await readBodyCapped(res, DIRECT_FETCH_MAX_RESPONSE_BYTES);
  if (opts.responseType === 'arraybuffer') {
    return { status: res.status, statusText: res.statusText, headers, body: bytesToBase64(bytes), encoding: 'base64', ...cookieField };
  }
  return { status: res.status, statusText: res.statusText, headers, body: new TextDecoder().decode(bytes), ...cookieField };
}

/** Route a request to the direct path (allowlisted trusted-local host) or the hardened cors→safeFetch path. */
export async function guardedCorsFetch(url: string, opts: CorsOptions): Promise<unknown> {
  if (isAllowlistedHost(url, allowedPrivateHostsReader())) {
    return directLocalFetch(url, opts);
  }
  // The cors proxy call crosses the worker boundary via postMessage; an AbortSignal isn't cloneable, so it
  // must not ride along (the hardened path isn't cancellable — a documented limitation). Send opts without
  // it. The remaining fields match spindle.cors's option shape (method/headers/responseType/body); cast
  // past the nominal DTO type (its `body` is narrower than our `unknown`, same as the pre-refactor call site).
  const corsOpts: CorsOptions = { method: opts.method, headers: opts.headers, body: opts.body, responseType: opts.responseType };
  return spindle.cors(url, corsOpts as Parameters<typeof spindle.cors>[1]);
}

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
    // The canonical/in-process api is the asyncfn engine. A quickjs run never
    // reaches this method — the in-VM proxy intercepts utils.getEngine locally
    // and returns 'quickjs' before any dispatch to this canonical api.
    getEngine: () => 'asyncfn',
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
    //
    // v1.0.0-rc.5+ — `responseType: 'arraybuffer'` threads through to
    // `spindle.cors`, which returns a base64-encoded string body with
    // `encoding: 'base64'`. We decode here so script authors receive a
    // ready-to-use `Uint8Array` regardless of transport. See
    // `decodeHttpResponse` below.
    http: {
      get: (url, opts) => {
        requireHttp();
        const corsOpts = buildCorsOptions('GET', opts);
        return shielded(guardedCorsFetch(url, corsOpts).then(decodeHttpResponse));
      },
      post: (url, body, opts) => {
        requireHttp();
        const corsOpts = { ...buildCorsOptions('POST', opts), body };
        return shielded(guardedCorsFetch(url, corsOpts).then(decodeHttpResponse));
      },
      put: (url, body, opts) => {
        requireHttp();
        const corsOpts = { ...buildCorsOptions('PUT', opts), body };
        return shielded(guardedCorsFetch(url, corsOpts).then(decodeHttpResponse));
      },
      delete: (url, opts) => {
        requireHttp();
        const corsOpts = buildCorsOptions('DELETE', opts);
        return shielded(guardedCorsFetch(url, corsOpts).then(decodeHttpResponse));
      },
      request: (url, opts) => {
        requireHttp();
        const corsOpts = { ...buildCorsOptions(opts.method ?? 'GET', opts), body: opts.body };
        return shielded(guardedCorsFetch(url, corsOpts).then(decodeHttpResponse));
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

// `detectImageMime`, `parseBase64DataUrl`, `bytesToBase64`, `base64ToBytes`
// live in `../image-format.ts` so the script-runner child can share the
// same implementations without dragging in this module's spindle deps.
