/**
 * ============================================================================
 * LUMISCRIPT — JSON API
 * ============================================================================
 * JSON parsing, path access, sorting, merging, and manipulation utilities.
 * Pure functions — no spindle or script dependencies.
 */

import type { LumiScriptAPI } from '../../types/script.js';
import { jsonquery } from '@jsonquerylang/jsonquery';

/**
 * Path segments that would walk into `Object.prototype` (or its peers) if
 * accepted by `get` / `set` — write surfaces using bracket access on these
 * keys mutate the global prototype chain and leak into every plain object
 * the worker subsequently creates.
 *
 * The LumiScript trust model already runs user scripts under a permissive
 * AsyncFunction sandbox (a malicious script can mutate `Object.prototype`
 * directly via `Object.prototype.x = 1`), so this filter isn't a privilege-
 * escalation defence — it's the defensive hygiene that keeps a buggy
 * `api.json.set` call from accidentally corrupting cross-script state on
 * the same worker. Surface as a clear error rather than silently writing
 * to the prototype.
 *
 * Per the v1.0.0-rc.6 code-quality audit (F-C1).
 */
const FORBIDDEN_PATH_SEGMENTS = new Set(['__proto__', 'prototype', 'constructor']);

function assertSafePath(parts: string[], method: string): void {
  for (const p of parts) {
    if (FORBIDDEN_PATH_SEGMENTS.has(p)) {
      throw new Error(
        `api.json.${method}: path segment "${p}" is reserved (would touch the prototype chain).`,
      );
    }
  }
}

/**
 * Recursive deep merge — later sources override earlier ones key by key,
 * recursing into plain-object values rather than replacing them wholesale.
 * Arrays + primitives are replaced (not concatenated) to match the
 * principle-of-least-surprise for merge semantics.
 *
 * Replaces a pre-rc.7 `Object.assign({}, ...)` implementation that was
 * shallow despite being documented as deep — per audit finding F-H1. The
 * "Deep merge" contract in the cheat-sheet + lookup-table is the source
 * of truth; the implementation is what changed.
 *
 * Skips the same prototype-chain keys as the path helpers above (defence
 * in depth — a malicious value `{ __proto__: { polluted: 'YES' } }` in
 * one of the source objects would otherwise pollute through the recursive
 * assign).
 */
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  for (const key of Object.keys(source)) {
    if (FORBIDDEN_PATH_SEGMENTS.has(key)) continue;
    const sv = source[key];
    const tv = target[key];
    if (
      sv !== null && typeof sv === 'object' && !Array.isArray(sv) &&
      tv !== null && typeof tv === 'object' && !Array.isArray(tv)
    ) {
      target[key] = deepMerge({ ...(tv as Record<string, unknown>) }, sv as Record<string, unknown>);
    } else {
      target[key] = sv;
    }
  }
  return target;
}

export function buildJSONAPI(): LumiScriptAPI['json'] {
  return {
    parse: (text) => JSON.parse(text) as never,
    stringify: (data, pretty) => pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data),
    clone: <T>(data: T): T => JSON.parse(JSON.stringify(data)) as T,

    get(data, path, defaultValue?) {
      try {
        const parts = path.split('.');
        assertSafePath(parts, 'get');
        let cur: unknown = data;
        for (const p of parts) {
          if (cur == null) return defaultValue;
          cur = (cur as Record<string, unknown>)[p];
        }
        return cur ?? defaultValue;
      } catch (err) {
        // Surface deliberate path-validation errors (FORBIDDEN_PATH_SEGMENTS)
        // — silently returning `defaultValue` here would hide the protective
        // intent. Only treat unexpected runtime errors as "missing key".
        if (err instanceof Error && err.message.startsWith('api.json.get:')) {
          throw err;
        }
        return defaultValue;
      }
    },

    set(data, path, value) {
      const parts = path.split('.');
      assertSafePath(parts, 'set');
      let cur = data as Record<string, unknown>;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i]!;
        if (typeof cur[p] !== 'object' || cur[p] === null) cur[p] = {};
        cur = cur[p] as Record<string, unknown>;
      }
      cur[parts[parts.length - 1]!] = value;
      return data;
    },

    merge: ((...objects: unknown[]) => {
      // Filter out non-object inputs (null, undefined, primitives) to match
      // `Object.assign`-style tolerance — those just contribute nothing.
      const out: Record<string, unknown> = {};
      for (const o of objects) {
        if (o !== null && typeof o === 'object' && !Array.isArray(o)) {
          deepMerge(out, o as Record<string, unknown>);
        }
      }
      return out;
    }) as never,
    isValid: (text) => { try { JSON.parse(text); return true; } catch { return false; } },
    filter: <T>(data: T[], predicate: (item: T) => boolean) => data.filter(predicate),

    sort<T>(data: T[], key: string, dir: 'asc' | 'desc' = 'asc'): T[] {
      const sign = dir === 'asc' ? 1 : -1;
      return [...data].sort((a, b) => {
        const av = (a as Record<string, unknown>)[key];
        const bv = (b as Record<string, unknown>)[key];

        // Null / undefined handling: nullish values sort to the end in asc,
        // start in desc — same convention as SQL `ORDER BY ... NULLS LAST`
        // and most spreadsheet apps. Equal-nullish compare as 0.
        const aNull = av == null;
        const bNull = bv == null;
        if (aNull && bNull) return 0;
        if (aNull) return sign;   // nulls sort after non-nulls in asc
        if (bNull) return -sign;

        // Both values non-nullish. Use typed comparison so number-typed
        // fields compare numerically (not lexicographically) — matches
        // user expectation when sorting e.g. `{ count: 9 }` vs `{ count: 10 }`.
        if (typeof av === 'number' && typeof bv === 'number') {
          return (av - bv) * sign;
        }
        const as = String(av);
        const bs = String(bv);
        return (as < bs ? -1 : as > bs ? 1 : 0) * sign;
      });
    },

    uniq: <T>(data: T[]) => [...new Set(data)],
    flatten: <T>(data: unknown[]): T[] => data.flat(Infinity) as T[],
    query: <T>(data: unknown, queryString: string): T => jsonquery(data, queryString) as T,
  };
}
