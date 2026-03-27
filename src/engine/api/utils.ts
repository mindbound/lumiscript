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
  };
}
