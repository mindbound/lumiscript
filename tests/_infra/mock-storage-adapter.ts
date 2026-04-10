/**
 * In-memory implementation of UserStorageAdapter for testing.
 *
 * Simulates per-user isolation using composite keys and stores deep clones
 * to mimic real persistence behavior (no shared references).
 */

import type { UserStorageAdapter } from '../../src/storage/collection-store.js';

export class InMemoryStorageAdapter implements UserStorageAdapter {
  private data = new Map<string, unknown>();

  private key(path: string, userId?: string): string {
    return `${userId ?? ''}:${path}`;
  }

  async getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T> {
    const k = this.key(path, opts.userId);
    if (!this.data.has(k)) return opts.fallback;
    return structuredClone(this.data.get(k)) as T;
  }

  async setJson(path: string, value: unknown, opts?: { indent?: number; userId?: string }): Promise<void> {
    const k = this.key(path, opts?.userId);
    this.data.set(k, structuredClone(value));
  }

  /** Clear all stored data. Call in beforeEach for test isolation. */
  clear(): void {
    this.data.clear();
  }

  /** Inspect raw stored data for test assertions. */
  getRaw(path: string, userId?: string): unknown {
    return this.data.get(this.key(path, userId));
  }

  /** Check if a key exists. */
  has(path: string, userId?: string): boolean {
    return this.data.has(this.key(path, userId));
  }
}
