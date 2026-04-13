/**
 * ============================================================================
 * LUMISCRIPT — JSON API
 * ============================================================================
 * JSON parsing, path access, sorting, merging, and manipulation utilities.
 * Pure functions — no spindle or script dependencies.
 */

import type { LumiScriptAPI } from '../../types/script.js';
import { jsonquery } from '@jsonquerylang/jsonquery';

export function buildJSONAPI(): LumiScriptAPI['json'] {
  return {
    parse: (text) => JSON.parse(text) as never,
    stringify: (data, pretty) => pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data),
    clone: <T>(data: T): T => JSON.parse(JSON.stringify(data)) as T,

    get(data, path, defaultValue?) {
      try {
        const parts = path.split('.');
        let cur: unknown = data;
        for (const p of parts) {
          if (cur == null) return defaultValue;
          cur = (cur as Record<string, unknown>)[p];
        }
        return cur ?? defaultValue;
      } catch { return defaultValue; }
    },

    set(data, path, value) {
      const parts = path.split('.');
      let cur = data as Record<string, unknown>;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i]!;
        if (typeof cur[p] !== 'object' || cur[p] === null) cur[p] = {};
        cur = cur[p] as Record<string, unknown>;
      }
      cur[parts[parts.length - 1]!] = value;
      return data;
    },

    merge: (...objects) => Object.assign({}, ...objects) as never,
    isValid: (text) => { try { JSON.parse(text); return true; } catch { return false; } },
    filter: <T>(data: T[], predicate: (item: T) => boolean) => data.filter(predicate),

    sort<T>(data: T[], key: string, dir: 'asc' | 'desc' = 'asc'): T[] {
      return [...data].sort((a, b) => {
        const av = (a as Record<string, unknown>)[key];
        const bv = (b as Record<string, unknown>)[key];
        const cmp = av! < bv! ? -1 : av! > bv! ? 1 : 0;
        return dir === 'asc' ? cmp : -cmp;
      });
    },

    uniq: <T>(data: T[]) => [...new Set(data)],
    flatten: <T>(data: unknown[]): T[] => data.flat(Infinity) as T[],
    query: <T>(data: unknown, queryString: string): T => jsonquery(data, queryString) as T,
  };
}
