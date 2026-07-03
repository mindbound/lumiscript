/**
 * Shared `api.broadcast.emit` limits — a size cap + per-script token-bucket rate limit, enforced IDENTICALLY
 * on both engines. Without them a hostile or buggy script can flood the bus with multi-megabyte payloads or
 * thousands of emits/sec and saturate co-tenant scripts' synchronous message-loop time (the bus dispatches
 * subscribers synchronously — see engine/broadcast-bus.ts:emit).
 *
 * Enforced at the emit ENTRY (not at the bus) so internal `ls:*` events routed through the bus are
 * unaffected. The AsyncFunction engine calls this from its child-side proxy (api-proxy.ts) before dispatch;
 * the QuickJS engine calls it from a sync host-fn driven by the in-VM proxy (qjs-engine.ts). The rate bucket
 * is module-scoped (child-wide) and keyed by scriptId, so a script's budget is coherent regardless of which
 * engine it runs under. See notes/lumiscript-security-audit.md LOW-01 + the rc.7 audit response.
 */

/** 1 MB JSON-serialised cap (matches `api.scriptStorage` per-value ceiling). */
export const BROADCAST_EMIT_MAX_BYTES = 1_048_576;

/** Sustained emit rate (per second per script). */
export const BROADCAST_EMIT_RATE_PER_SEC = 100;

/** Token-bucket burst capacity (per script). */
export const BROADCAST_EMIT_BURST = 1_000;

interface BroadcastEmitRateState {
  /** Current available emit tokens. Refilled at `BROADCAST_EMIT_RATE_PER_SEC` per second up to BURST. */
  tokens:       number;
  /** Wall-clock ms timestamp of the last token-bucket refill. */
  lastRefillMs: number;
}

const broadcastEmitRateState = new Map<string, BroadcastEmitRateState>();

/**
 * Throw if the already-serialised payload exceeds the size cap OR the script is over its emit rate. Call
 * AFTER a `JSON.stringify` serializability check (which yields `payloadBytes` — its `.length`). `now` is
 * injectable for deterministic tests; production passes the default.
 */
export function enforceBroadcastEmitLimits(scriptId: string, payloadBytes: number, now: number = Date.now()): void {
  if (payloadBytes > BROADCAST_EMIT_MAX_BYTES) {
    throw new Error(
      `api.broadcast.emit: payload size cap exceeded — ` +
      `${payloadBytes} bytes serialised (cap: ${BROADCAST_EMIT_MAX_BYTES / 1024 / 1024} MB). ` +
      `Use api.db.* or api.scriptStorage for the data and broadcast a small notification instead.`,
    );
  }
  const state = broadcastEmitRateState.get(scriptId) ?? { tokens: BROADCAST_EMIT_BURST, lastRefillMs: now };
  const elapsedSec = (now - state.lastRefillMs) / 1000;
  state.tokens = Math.min(BROADCAST_EMIT_BURST, state.tokens + elapsedSec * BROADCAST_EMIT_RATE_PER_SEC);
  state.lastRefillMs = now;
  if (state.tokens < 1) {
    // Pre-set state back so the refill timer keeps advancing on subsequent throws — otherwise rapid-fire
    // attempts would all see the same lastRefillMs and never recover.
    broadcastEmitRateState.set(scriptId, state);
    throw new Error(
      `api.broadcast.emit: rate limit exceeded — ` +
      `max ${BROADCAST_EMIT_RATE_PER_SEC}/sec sustained, ${BROADCAST_EMIT_BURST} burst per script. ` +
      `Batch high-frequency events (e.g. coalesce on a 100ms timer) or push the data to api.db.* ` +
      `and emit a single "data updated" notification.`,
    );
  }
  state.tokens -= 1;
  broadcastEmitRateState.set(scriptId, state);
}

/** @internal Test seam — clear the per-script rate buckets between tests. */
export function _resetBroadcastEmitLimitsForTests(): void {
  broadcastEmitRateState.clear();
}
