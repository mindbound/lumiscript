/**
 * ============================================================================
 * LUMISCRIPT — DB STORE
 * ============================================================================
 * Low-level file-backed collection store underlying `api.db.*`.
 *
 * Wraps a `UserStorageAdapter` (same shape as `src/storage/collection-store.ts`
 * uses) and adds:
 *   - Filter-predicate semantics (undefined / object deep-equal / function)
 *   - Dot-notation path resolution for object filters
 *   - Auto-injected id / createdAt / updatedAt
 *   - jsonquery escape hatch via `query()`
 *   - Soft-warn (10 MB) + hard-throw (50 MB) size governance
 *
 * No concurrency primitives here — callers must wrap mutations in
 * `runExclusive()` from `db-queue.ts` when serialization matters.
 *
 * No broadcast emission here — the `api/db.ts` builder layers that on top.
 */

import { jsonquery } from '@jsonquerylang/jsonquery';
import type { DbRecord, DbFilter, ZodLike } from '../types/script.js';
import { generateUUID } from '../utils/uuid.js';
import type { UserStorageAdapter } from '../storage/collection-store.js';

// ─── Size governance ─────────────────────────────────────────────────────────

/** Soft warning threshold — callers emit `ls:collection:size-warning`. */
export const DB_SIZE_WARN_BYTES = 10 * 1024 * 1024; // 10 MB

/** Hard stop — mutation throws and does NOT persist. */
export const DB_SIZE_MAX_BYTES = 50 * 1024 * 1024; // 50 MB

/** Thrown when a mutation would push the serialized collection past `DB_SIZE_MAX_BYTES`. */
export class DbSizeExceededError extends Error {
  readonly bytes: number;
  constructor(bytes: number) {
    super(`api.db: DB_SIZE_EXCEEDED — serialized collection would be ${bytes} bytes (max ${DB_SIZE_MAX_BYTES})`);
    this.name = 'DbSizeExceededError';
    this.bytes = bytes;
  }
}

// ─── Filter matching ─────────────────────────────────────────────────────────

/** Tag describing which filter shape was supplied — surfaced in broadcast payloads. */
export type FilterKind = 'all' | 'object' | 'fn';

export function classifyFilter(filter: DbFilter<DbRecord>): FilterKind {
  if (filter == null) return 'all';
  if (typeof filter === 'function') return 'fn';
  return 'object';
}

/**
 * Walk a dot-notation path through an object. Returns `undefined` on any
 * missing / non-object intermediate step — no exceptions on null refs.
 */
function getPath(obj: unknown, path: string): unknown {
  const parts = path.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

/**
 * Deep-equality comparison. Primitives compare by `===`; arrays and objects
 * compare structurally via `JSON.stringify`. Functions / Date / Map / Set
 * are not expected in DB records (JSON-serializable only) and will compare
 * by reference via stringify's fallback behaviour.
 */
function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object') return false;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
}

/**
 * Classify what shape the right-hand side of an object-filter entry is:
 *   - `regex`    — direct `RegExp` instance shorthand (`{ name: /pat/i }`)
 *   - `envelope` — operator envelope, every key starts with `$`
 *                  (`{ margin: { $gt: 0 } }`)
 *   - `mixed`    — object with BOTH `$`-keys AND non-`$` keys — user error,
 *                  caller throws
 *   - `literal`  — anything else; falls through to deep-equality
 */
type ExpectedKind = 'regex' | 'envelope' | 'mixed' | 'literal';

function classifyExpected(v: unknown): ExpectedKind {
  if (v instanceof RegExp) return 'regex';
  if (typeof v !== 'object' || v === null || Array.isArray(v)) return 'literal';
  const keys = Object.keys(v);
  if (keys.length === 0) return 'literal';
  const dollarCount = keys.reduce((n, k) => (k.startsWith('$') ? n + 1 : n), 0);
  if (dollarCount === 0) return 'literal';
  if (dollarCount === keys.length) return 'envelope';
  return 'mixed';
}

/**
 * Match a single operator against a field's actual value.
 *
 * Numeric comparisons (`$gt` / `$gte` / `$lt` / `$lte`) return false on any
 * type mismatch — never throw. Other operators throw on malformed arguments
 * (invalid `$regex`, non-array `$in` / `$nin`) because those are author
 * bugs, not "no match" outcomes.
 *
 * `envelope` is passed so `$regex` can read its sibling `$options` key.
 */
function matchOperator(
  actual: unknown,
  op: string,
  arg: unknown,
  envelope: Record<string, unknown>,
): boolean {
  switch (op) {
    case '$gt':
      return typeof actual === 'number' && typeof arg === 'number' && actual > arg;
    case '$gte':
      return typeof actual === 'number' && typeof arg === 'number' && actual >= arg;
    case '$lt':
      return typeof actual === 'number' && typeof arg === 'number' && actual < arg;
    case '$lte':
      return typeof actual === 'number' && typeof arg === 'number' && actual <= arg;
    case '$eq':
      // Explicit equivalent of the literal fall-through. Accepted for
      // symmetry with Mongo-standard syntax — users who write
      // `{ name: { $eq: 'alice' } }` expect it to work even though
      // `{ name: 'alice' }` is the idiomatic form.
      return deepEqual(actual, arg);
    case '$ne':
      return !deepEqual(actual, arg);
    case '$in':
      if (!Array.isArray(arg)) {
        throw new Error('api.db: $in requires an array argument');
      }
      return arg.some((x) => deepEqual(actual, x));
    case '$nin':
      if (!Array.isArray(arg)) {
        throw new Error('api.db: $nin requires an array argument');
      }
      return !arg.some((x) => deepEqual(actual, x));
    case '$exists':
      return (actual !== undefined) === Boolean(arg);
    case '$regex': {
      if (typeof actual !== 'string') return false;
      let pattern: RegExp;
      if (arg instanceof RegExp) {
        pattern = arg;
      } else if (typeof arg === 'string') {
        const rawOptions = envelope['$options'];
        const options = typeof rawOptions === 'string' ? rawOptions : undefined;
        try {
          pattern = new RegExp(arg, options);
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err);
          throw new Error(`api.db: invalid $regex: ${msg}`);
        }
      } else {
        throw new Error('api.db: $regex requires a string or RegExp argument');
      }
      return pattern.test(actual);
    }
    case '$options':
      // Sibling key of $regex — the $regex case reads envelope['$options']
      // directly. Arriving here means the caller should skip this op, but
      // returning true is a safe fallback (all-match for the key) that
      // never falsely excludes a record.
      return true;
    default:
      throw new Error(`api.db: unknown operator "${op}"`);
  }
}

function matchEnvelope(actual: unknown, envelope: Record<string, unknown>): boolean {
  for (const [op, arg] of Object.entries(envelope)) {
    if (op === '$options') continue; // handled alongside $regex
    if (!matchOperator(actual, op, arg, envelope)) return false;
  }
  return true;
}

/**
 * Test whether `record` matches `filter`:
 *   - `undefined` → always true
 *   - function    → delegate to the predicate
 *   - object      → every (dot-notation key, value) pair matches, where each
 *                   value is interpreted as either:
 *                     • `RegExp` instance      — string match shorthand
 *                     • operator envelope      — `{ $gt, $in, $regex, ... }`
 *                     • literal                — deep-equality match
 *
 * Mixed envelopes (`{ $gt: 5, foo: 1 }`) throw — author bug, fail loud.
 */
export function matchesFilter<T extends DbRecord>(
  record: T,
  filter: DbFilter<T>,
): boolean {
  if (filter == null) return true;
  if (typeof filter === 'function') {
    try {
      return Boolean(filter(record));
    } catch {
      // A throwing predicate is treated as "no match" — prevents one bad
      // filter from nuking the entire operation. Errors never propagate
      // out of matchesFilter to the callsite.
      return false;
    }
  }
  for (const [key, expected] of Object.entries(filter)) {
    const actual = getPath(record, key);
    const kind = classifyExpected(expected);
    switch (kind) {
      case 'regex': {
        if (typeof actual !== 'string') return false;
        if (!(expected as RegExp).test(actual)) return false;
        break;
      }
      case 'envelope': {
        if (!matchEnvelope(actual, expected as Record<string, unknown>)) return false;
        break;
      }
      case 'mixed':
        throw new Error(
          `api.db: mixed operator/literal envelope at filter key "${key}" — ` +
          `split into separate keys (e.g. {"x": {$gt: 0}, "y": "foo"} not {"x": {$gt: 0, foo: 1}})`,
        );
      case 'literal':
      default:
        if (!deepEqual(actual, expected)) return false;
        break;
    }
  }
  return true;
}

// ─── Store ───────────────────────────────────────────────────────────────────

/**
 * Callback type for size-governance warnings. Called by the store when a
 * mutation's serialized size crosses `DB_SIZE_WARN_BYTES`. The `api/db.ts`
 * builder hooks this up to emit `ls:collection:size-warning` + a
 * `spindle.log.warn`. Optional — tests can omit.
 */
export type SizeWarnCallback = (bytes: number) => void;

/**
 * Low-level collection store. Per-collection lifetime; each
 * `api.db.collection()` call constructs one. Not thread-safe — wrap
 * mutations in `runExclusive` from `db-queue.ts`.
 */
export class DbStore<T extends DbRecord = DbRecord> {
  constructor(
    private readonly path: string,
    private readonly storage: UserStorageAdapter,
    private readonly getUserId: () => string | undefined,
    private readonly onSizeWarn?: SizeWarnCallback,
    private readonly schema?: ZodLike<T>,
  ) {}

  /**
   * Run the schema (if attached) against a candidate record. Throws a
   * wrapped error matching `api/llm.ts`'s convention on failure —
   * surfaces the underlying Zod message while identifying which
   * `api.db` operation triggered the check.
   *
   * `context` is the operation label — `'insert'`, `'insertMany[N]'`,
   * or `'update (id=XYZ)'` — and is interpolated into the thrown
   * error message verbatim.
   *
   * Returns the parsed value so callers can swap in a Zod-transformed
   * version of the candidate if the schema does shape coercion (e.g.
   * `.transform()`, `.default()`).
   */
  private validate(candidate: unknown, context: string): T {
    if (!this.schema) return candidate as T;
    try {
      return this.schema.parse(candidate);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`api.db: schema validation failed on ${context}: ${msg}`);
    }
  }

  // ─── Load ────────────────────────────────────────────────────────────────

  /** Read the entire collection from disk. Returns `[]` if missing. */
  private async load(): Promise<T[]> {
    const userId = this.getUserId();
    const data = await this.storage.getJson<T[]>(this.path, {
      fallback: [] as T[],
      userId,
    });
    return Array.isArray(data) ? data : [];
  }

  // ─── Persist with size-guard ─────────────────────────────────────────────

  private async persist(records: T[]): Promise<void> {
    const serialized = JSON.stringify(records, null, 2);
    const bytes = serialized.length;
    if (bytes > DB_SIZE_MAX_BYTES) {
      throw new DbSizeExceededError(bytes);
    }
    if (bytes > DB_SIZE_WARN_BYTES && this.onSizeWarn) {
      try {
        this.onSizeWarn(bytes);
      } catch {
        // Size-warn callback is fire-and-forget — never let a failing
        // warn listener abort the actual persist.
      }
    }
    const userId = this.getUserId();
    // Pre-serialized. Re-stringifying via setJson would double the work;
    // the UserStorageAdapter only exposes setJson, which re-stringifies,
    // but this is cheap (tens of ms at 10 MB).
    await this.storage.setJson(this.path, records, { indent: 2, userId });
  }

  // ─── Mutations ───────────────────────────────────────────────────────────

  async insert(
    record: Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<T> {
    const records = await this.load();
    const now = Date.now();
    const injected = {
      ...record,
      id:        (record as Partial<T>).id        ?? generateUUID(),
      createdAt: (record as Partial<T>).createdAt ?? now,
      updatedAt: (record as Partial<T>).updatedAt ?? now,
    } as T;
    // Validate AFTER timestamp/id injection so the schema sees the
    // full record that will land on disk. `validate` returns the parsed
    // value so Zod transforms (`.default()`, `.transform()`, etc.) are
    // honored. BUT: Zod's `z.object()` strips unknown keys by default,
    // which would silently drop our reserved fields. Reserved fields are
    // LumiScript invariants, not part of the user-data schema — preserve
    // them explicitly after validation.
    const validated = this.validate(injected, 'insert') as Record<string, unknown>;
    const persisted = {
      ...validated,
      id:        injected.id,
      createdAt: injected.createdAt,
      updatedAt: injected.updatedAt,
    } as T;
    records.push(persisted);
    await this.persist(records);
    return persisted;
  }

  /**
   * Batch-insert N records with a single persist. Auto-injects id / createdAt /
   * updatedAt per record (all share the same `now` — the batch-insert
   * semantic, not one-timestamp-per-record). Empty input is a fast no-op.
   *
   * Returns the injected records only — not the full collection. Caller is
   * responsible for the per-record broadcast fan-out; this method fires no
   * events of its own.
   */
  async insertMany(
    newRecords: Array<Omit<T, 'id' | 'createdAt' | 'updatedAt'> & Partial<Pick<T, 'id' | 'createdAt' | 'updatedAt'>>>,
  ): Promise<T[]> {
    if (newRecords.length === 0) return [];
    const existing = await this.load();
    const now = Date.now();
    // Inject first so schema sees the full record shape...
    const injected = newRecords.map((record) => ({
      ...record,
      id:        (record as Partial<T>).id        ?? generateUUID(),
      createdAt: (record as Partial<T>).createdAt ?? now,
      updatedAt: (record as Partial<T>).updatedAt ?? now,
    }) as T);
    // ...then validate the entire batch BEFORE persist. Throw on first
    // failure with the offending record's index — no records land if any
    // fails (atomicity via early-throw). Reserved fields preserved
    // post-validation (see `insert` for rationale).
    const validated = injected.map((r, i) => {
      const parsed = this.validate(r, `insertMany[${i}]`) as Record<string, unknown>;
      return {
        ...parsed,
        id:        r.id,
        createdAt: r.createdAt,
        updatedAt: r.updatedAt,
      } as T;
    });
    const combined = [...existing, ...validated];
    await this.persist(combined);
    return validated;
  }

  async update(filter: DbFilter<T>, patch: Partial<T>): Promise<number> {
    const records = await this.load();
    const now = Date.now();
    // Strip reserved fields from the patch — id and createdAt are
    // immutable, updatedAt is always `now`. Silent strip (no throw) so
    // scripts can pass a record-shaped object without sanitising.
    const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, ...cleanPatch } = patch as Partial<DbRecord>;
    void _id; void _createdAt; void _updatedAt;
    // Two-pass so schema validation is atomic: first compute all
    // merged candidates and validate, then commit to the records array.
    // If any candidate fails validation, throw before mutating anything —
    // no partial updates land on disk.
    const pendingUpdates: Array<{ index: number; merged: T }> = [];
    for (let i = 0; i < records.length; i++) {
      const r = records[i]!;
      if (matchesFilter(r, filter)) {
        const merged = { ...r, ...cleanPatch, updatedAt: now } as T;
        const validated = this.validate(merged, `update (id=${r.id})`) as Record<string, unknown>;
        // Preserve reserved fields regardless of whether the schema strips
        // them (Zod `z.object()` default). See `insert` for rationale.
        const committed = {
          ...validated,
          id:        r.id,
          createdAt: r.createdAt,
          updatedAt: now,
        } as T;
        pendingUpdates.push({ index: i, merged: committed });
      }
    }
    if (pendingUpdates.length === 0) return 0;
    for (const { index, merged } of pendingUpdates) {
      records[index] = merged;
    }
    await this.persist(records);
    return pendingUpdates.length;
  }

  async delete(filter: DbFilter<T>): Promise<number> {
    const records = await this.load();
    const before = records.length;
    const kept = records.filter(r => !matchesFilter(r, filter));
    const count = before - kept.length;
    if (count > 0) await this.persist(kept);
    return count;
  }

  async clear(): Promise<void> {
    await this.persist([]);
  }

  // ─── Reads (bypass the queue at the caller side) ─────────────────────────

  async find(filter?: DbFilter<T>): Promise<T[]> {
    const records = await this.load();
    if (filter == null) return records;
    return records.filter(r => matchesFilter(r, filter));
  }

  async findOne(filter: DbFilter<T>): Promise<T | null> {
    const records = await this.load();
    for (const r of records) {
      if (matchesFilter(r, filter)) return r;
    }
    return null;
  }

  async count(filter?: DbFilter<T>): Promise<number> {
    const records = await this.load();
    if (filter == null) return records.length;
    let n = 0;
    for (const r of records) if (matchesFilter(r, filter)) n++;
    return n;
  }

  async query<R = unknown>(jsonQuery: string): Promise<R> {
    const records = await this.load();
    // jsonquery throws SyntaxError on malformed queries; we propagate it
    // unchanged to match `api.json.query()` behaviour.
    return jsonquery(records, jsonQuery) as R;
  }
}
