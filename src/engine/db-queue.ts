/**
 * ============================================================================
 * LUMISCRIPT — DB QUEUE
 * ============================================================================
 * Per-collection-path mutation serialization primitive.
 *
 * Lumiverse/Spindle has no existing concurrency primitives — `variables.*`
 * already has documented last-write-wins races. `api.db.*` fixes this for
 * its own scope: mutations on the same collection path queue through a
 * shared Promise chain, so two parallel `insert()` calls complete without
 * one stomping the other's persist.
 *
 * Reads don't enqueue. A `find()` racing a concurrent `insert()` may see
 * pre-mutation data. This matches MongoDB-ish read semantics and is
 * documented as `api.db.*` behaviour.
 *
 * ## Memory management
 *
 * The `Map<path, Promise>` grows one entry per unique path used. In a
 * long-running worker this would leak unboundedly, so we settle-and-trim:
 * when a chain tip resolves, if the map entry still points at that tip
 * (no later chain ops have been appended), delete the entry. Callers
 * never observe this — they just see their operation complete.
 */

// ─── Internal state ──────────────────────────────────────────────────────────

/**
 * Keyed by collection path. Each entry is the current tail of a
 * serialized Promise chain — the next op appends onto it.
 *
 * The stored Promise always resolves (never rejects) — see `chainNext`.
 * This keeps `Promise.all` usage by callers unaffected by op failures.
 */
const queues = new Map<string, Promise<void>>();

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Run `op` exclusively with respect to other `runExclusive` calls on the
 * same `path`. Ops queued under different paths run concurrently.
 *
 * The caller's Promise resolves / rejects with the op's outcome. A
 * rejected op does NOT poison the chain — subsequent ops on the same
 * path still run.
 *
 * @example
 * // Two parallel inserts on the same collection serialize:
 * const [a, b] = await Promise.all([
 *   runExclusive('db/scripts/X/rolls.json', () => store.insert({ x: 1 })),
 *   runExclusive('db/scripts/X/rolls.json', () => store.insert({ x: 2 })),
 * ]);
 */
export function runExclusive<T>(
  path: string,
  op: () => Promise<T>,
): Promise<T> {
  const prev = queues.get(path) ?? Promise.resolve();

  // Build the tail: wait for prev to settle, THEN run op. Critical that
  // op() is called inside the chained `.then`, not synchronously — if it
  // were synchronous, parallel `runExclusive` calls on the same path
  // would all invoke op() at once and the "exclusive" guarantee would
  // be broken.
  //
  // Swallow prev's rejection so a failed op doesn't poison subsequent
  // ops on the same path.
  const tail: Promise<T> = prev.then(() => op(), () => op());

  // tailVoid is the never-rejecting chain marker stored in `queues`. It
  // performs cleanup (settle-and-trim) inline. Forward-declared because
  // the cleanup closure identity-compares against `tailVoid` itself.
  let tailVoid!: Promise<void>;
  tailVoid = tail.then(
    () => { if (queues.get(path) === tailVoid) queues.delete(path); },
    () => { if (queues.get(path) === tailVoid) queues.delete(path); },
  );
  queues.set(path, tailVoid);

  // Return a combined promise that settles (with op's value or error)
  // only AFTER tailVoid has run its cleanup. This means when the caller's
  // `await runExclusive(...)` returns, the map entry has been released
  // (unless another op queued on top of us, in which case tailVoid's
  // identity check leaves the newer entry alone).
  return tailVoid.then(() => tail);
}

// ─── Test hooks ──────────────────────────────────────────────────────────────

/**
 * Reset all internal queues. Test-only — the module-level `queues` map
 * is process-local, so tests must clear it between runs to avoid
 * inter-test state bleed.
 */
export function __resetQueues(): void {
  queues.clear();
}

/**
 * Current number of tracked queue entries. Test-only — used to assert
 * settle-and-trim behavior (queue should drain to zero entries after a
 * batch of ops completes).
 */
export function __queueCount(): number {
  return queues.size;
}
