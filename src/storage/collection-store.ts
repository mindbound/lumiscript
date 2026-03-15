/**
 * ============================================================================
 * LUMISCRIPT — COLLECTION STORE
 * ============================================================================
 * Generic file-backed array store for items with a string `id` field.
 * Uses dependency injection for storage operations so the store has no
 * direct reference to the `spindle` global (enabling unit testing and
 * clean module separation).
 *
 * Ported from TavernScript's CollectionStore but adapted for Lumiverse:
 * - Uses spindle.userStorage instead of ST user files API
 * - No useSyncExternalStore (backend worker, not React)
 * - Plain pub/sub for backend-internal notifications
 */

import { generateUUID } from '../utils/uuid.js';

// ─── Storage interface (fulfilled by spindle.userStorage) ─────────────────────

export interface UserStorageAdapter {
  getJson<T>(path: string, opts: { fallback: T; userId?: string }): Promise<T>;
  setJson(path: string, value: unknown, opts?: { indent?: number; userId?: string }): Promise<void>;
}

// ─── CollectionStore ─────────────────────────────────────────────────────────

export type Subscriber = () => void;

export class CollectionStore<T extends { id: string }> {
  private items: T[] = [];
  private loaded = false;
  private subscribers: Set<Subscriber> = new Set();

  constructor(
    private readonly storagePath: string,
    private readonly storage: UserStorageAdapter,
    private readonly getUserId: () => string | undefined,
  ) {}

  // ─── Load ────────────────────────────────────────────────────────────────

  async load(): Promise<void> {
    const userId = this.getUserId();
    const data = await this.storage.getJson<T[]>(this.storagePath, {
      fallback: [],
      userId,
    });
    this.items = Array.isArray(data) ? data : [];
    this.loaded = true;
    this.notify();
  }

  // ─── Read ─────────────────────────────────────────────────────────────────

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: string): T | null {
    return this.items.find(item => item.id === id) ?? null;
  }

  get size(): number {
    return this.items.length;
  }

  get isLoaded(): boolean {
    return this.loaded;
  }

  // ─── Write ────────────────────────────────────────────────────────────────

  async create(data: Omit<T, 'id'> & { id?: string }): Promise<T> {
    const item = { ...data, id: data.id ?? generateUUID() } as T;
    this.items.push(item);
    await this.persist();
    this.notify();
    return item;
  }

  async update(id: string, patch: Partial<T>): Promise<T | null> {
    const idx = this.items.findIndex(item => item.id === id);
    if (idx === -1) return null;
    this.items[idx] = { ...this.items[idx], ...patch };
    await this.persist();
    this.notify();
    return this.items[idx];
  }

  async delete(id: string): Promise<boolean> {
    const before = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    if (this.items.length === before) return false;
    await this.persist();
    this.notify();
    return true;
  }

  /** Force a save of the current in-memory state. */
  async flush(): Promise<void> {
    await this.persist();
  }

  // ─── Pub/sub ─────────────────────────────────────────────────────────────

  subscribe(subscriber: Subscriber): () => void {
    this.subscribers.add(subscriber);
    return () => this.subscribers.delete(subscriber);
  }

  private notify(): void {
    for (const sub of this.subscribers) {
      try {
        sub();
      } catch {
        // Don't let a subscriber error break the store
      }
    }
  }

  // ─── Persistence ─────────────────────────────────────────────────────────

  private async persist(): Promise<void> {
    const userId = this.getUserId();
    await this.storage.setJson(this.storagePath, this.items, { indent: 2, userId });
  }
}
