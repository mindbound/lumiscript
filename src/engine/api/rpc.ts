/**
 * ============================================================================
 * LUMISCRIPT — RPC POOL API
 * ============================================================================
 * Cross-extension shared RPC pool — wraps Spindle's `spindle.rpcPool` surface
 * with two-tier namespacing (`lumiscript.<scriptSlug>.<channel>`) so multiple
 * user-scripts in the same LumiScript install can publish without colliding.
 *
 * Exposed as `api.rpc.*`. Free tier — no permission required. Spindle's
 * lifecycle guarantee tears down all owned endpoints when LumiScript itself
 * unloads; the per-script ownership tracking here adds finer granularity so
 * disabling/deleting one script doesn't tear down others' endpoints.
 *
 * ─── Wrapper-creation note ───────────────────────────────────────────────────
 *
 * `handle()` accepts a handler function. From the in-process executor path
 * (and tests) the function arrives directly. From the script-runner subprocess
 * path (every production user-script post-Step-2) the function lives in the
 * subprocess; the proxy translates the user's closure into a (channel,
 * handlerId, timeoutMs) tuple at the IPC boundary, and `host-dispatcher.ts`
 * special-cases `req.method === 'rpc.handle'` to construct a wrapper around
 * `sendRunHandlerRequest` and pass THAT to this builder. From this builder's
 * perspective both paths look the same — a function that takes the
 * RpcRequestContext and returns the value to expose.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { RpcAPI, RpcRequestContext } from '../../types/script.js';
import * as rpcStore from '../rpc-store.js';
import type { APIBuildDeps } from './shared.js';

// ─── Slugifier ───────────────────────────────────────────────────────────────

/**
 * Normalise a script name (or override) into a Spindle-acceptable channel
 * segment. Spindle accepts `[a-z0-9_-]+`. We:
 *
 *   1. Lowercase
 *   2. Replace whitespace with `-`
 *   3. Strip everything outside `[a-z0-9_-]`
 *   4. Collapse runs of `-` and `_` into single instances
 *   5. Trim leading / trailing `-` or `_`
 *
 * Throws if the result is empty (script names like `"!!!"` slugify to `""`
 * and need an explicit `options.as` override).
 */
function slugify(input: string): string {
  const slug = input
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9_-]+/g, '')
    .replace(/-+/g, '-')
    .replace(/_+/g, '_')
    .replace(/^[-_]+|[-_]+$/g, '');
  if (slug === '') {
    throw new Error(
      `api.rpc: cannot derive a slug from "${input}" — pass options.as with a ` +
      `valid slug (lowercase letters, numbers, _, -).`,
    );
  }
  return slug;
}

/**
 * Validate a user-supplied `options.as` slug. Stricter than slugify — we
 * don't auto-normalise overrides, on the theory that a typo'd override
 * should fail loudly rather than silently mangle into something else.
 */
function validateOverride(slug: string): void {
  if (!/^[a-z0-9_-]+$/.test(slug)) {
    throw new Error(
      `api.rpc: invalid slug override "${slug}" — must match /^[a-z0-9_-]+$/.`,
    );
  }
}

/**
 * Validate a user-supplied channel string. Same character rules as slugify.
 * Channels can contain dots (multi-segment paths under the slug), so we
 * allow `.` here. `lumiscript.` is added by Spindle, the slug is added by
 * us, and the user-facing channel is everything after.
 */
function validateChannel(channel: string): void {
  if (channel === '' || !/^[a-z0-9_.-]+$/.test(channel)) {
    throw new Error(
      `api.rpc: invalid channel "${channel}" — must match /^[a-z0-9_.-]+$/ ` +
      `and be non-empty.`,
    );
  }
}

// ─── API builder ─────────────────────────────────────────────────────────────

export function buildRpcAPI(deps: APIBuildDeps): RpcAPI {
  const { script, rpcEndpointsRegisteredThisRun } = deps;

  /**
   * Compute the script-side channel path (`<scriptSlug>.<channel>`) — the
   * argument we pass to `spindle.rpcPool.*`. Spindle prefixes `lumiscript.`
   * automatically, yielding the fully-qualified endpoint
   * `lumiscript.<scriptSlug>.<channel>`.
   */
  function buildChannelPath(channel: string, asOverride?: string): string {
    validateChannel(channel);
    let slug: string;
    if (asOverride !== undefined) {
      validateOverride(asOverride);
      slug = asOverride;
    } else {
      slug = slugify(script.name);
    }
    return `${slug}.${channel}`;
  }

  /**
   * Track a successful registration: record in the rpc-store (for
   * unregister-by-script and unregister-by-name), add to the per-run
   * tracking set (for diff-and-clean-stale on re-run), log to the backend
   * console (single-line per registration so cross-extension exposure is
   * observable in server logs without spamming the script console).
   */
  function recordRegistration(
    fullEndpoint: string,
    mode: 'sync' | 'handle',
  ): void {
    rpcStore.addEndpoint({
      endpoint: fullEndpoint,
      mode,
      scriptId: script.id,
      scriptName: script.name,
    });
    rpcEndpointsRegisteredThisRun?.add(fullEndpoint);
    spindle.log.info(
      `[LumiScript] script "${script.name}" registered ${fullEndpoint} (${mode}) for cross-extension visibility`,
    );
  }

  return {
    async sync<T>(channel: string, value: T, options?: { as?: string }): Promise<string> {
      const channelPath = buildChannelPath(channel, options?.as);
      const fullEndpoint = spindle.rpcPool.sync(channelPath, value);
      recordRegistration(fullEndpoint, 'sync');
      return fullEndpoint;
    },

    async handle<T>(
      channel: string,
      handler: (ctx: RpcRequestContext) => T | Promise<T>,
      options?: { as?: string },
    ): Promise<string> {
      const channelPath = buildChannelPath(channel, options?.as);
      // `spindle.rpcPool.handle` accepts both sync and async handlers per
      // its types; pass the user (or wrapper) function through directly.
      const fullEndpoint = spindle.rpcPool.handle(channelPath, handler);
      recordRegistration(fullEndpoint, 'handle');
      return fullEndpoint;
    },

    async read<T>(endpoint: string): Promise<T> {
      // No ownership tracking for reads — they don't create state. Spindle
      // validates the endpoint name and rejects on missing / unregistered
      // / handler-throw / handler-timeout.
      return spindle.rpcPool.read<T>(endpoint);
    },

    async unregister(channel: string, options?: { as?: string }): Promise<void> {
      const channelPath = buildChannelPath(channel, options?.as);
      // Spindle's `unregister` takes either bare or fully-qualified.
      // We pass the slugged channel path; Spindle prefixes `lumiscript.` to
      // match what was registered. Idempotent — if the endpoint was never
      // registered, Spindle no-ops.
      spindle.rpcPool.unregister(channelPath);
      // Drop from our per-script store. The fully-qualified endpoint is
      // what's keyed; reconstruct it by mirroring Spindle's prefixing.
      const fullEndpoint = `${spindle.manifest.identifier}.${channelPath}`;
      rpcStore.removeEndpoint(fullEndpoint, script.id);
    },
  };
}
