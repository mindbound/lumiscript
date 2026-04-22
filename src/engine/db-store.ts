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
import type { DbRecord, DbFilter } from '../types/script.js';
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
 * Test whether `record` matches `filter`:
 *   - `undefined` → always true
 *   - function    → delegate to the predicate
 *   - object      → every (dot-notation key, value) pair matches deeply
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
    if (!deepEqual(actual, expected)) return false;
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
  ) {}

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
    records.push(injected);
    await this.persist(records);
    return injected;
  }

  async update(filter: DbFilter<T>, patch: Partial<T>): Promise<number> {
    const records = await this.load();
    let count = 0;
    const now = Date.now();
    // Strip reserved fields from the patch — id and createdAt are
    // immutable, updatedAt is always `now`. Silent strip (no throw) so
    // scripts can pass a record-shaped object without sanitising.
    const { id: _id, createdAt: _createdAt, updatedAt: _updatedAt, ...cleanPatch } = patch as Partial<DbRecord>;
    void _id; void _createdAt; void _updatedAt;
    for (let i = 0; i < records.length; i++) {
      const r = records[i]!;
      if (matchesFilter(r, filter)) {
        records[i] = { ...r, ...cleanPatch, updatedAt: now } as T;
        count++;
      }
    }
    if (count > 0) await this.persist(records);
    return count;
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
