/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT STORAGE
 * ============================================================================
 * High-level script CRUD built on CollectionStore.
 * Provides script-specific helpers (create with defaults, getUniqueName, duplicate).
 */

import type { Script, ScriptType } from '../types/script.js';
import { CollectionStore, type UserStorageAdapter } from './collection-store.js';
import { generateUUID } from '../utils/uuid.js';

const SCRIPTS_PATH = 'scripts.json';

export class ScriptStorage {
  readonly store: CollectionStore<Script>;

  constructor(storage: UserStorageAdapter, getUserId: () => string | undefined) {
    this.store = new CollectionStore<Script>(SCRIPTS_PATH, storage, getUserId);
  }

  async load(): Promise<void> {
    await this.store.load();
  }

  // ─── Read ─────────────────────────────────────────────────────────────────

  getScripts(): Script[] {
    return this.store.getAll();
  }

  getScript(id: string): Script | null {
    return this.store.getById(id);
  }

  getTriggerScripts(): Script[] {
    return this.store.getAll().filter(s => s.type === 'trigger');
  }

  getLibraryScripts(): Script[] {
    return this.store.getAll().filter(s => s.type === 'library');
  }

  getEnabledTriggerScripts(): Script[] {
    return this.store.getAll().filter(s => s.type === 'trigger' && s.enabled);
  }

  // ─── Write ────────────────────────────────────────────────────────────────

  async createScript(name: string, type: ScriptType = 'trigger'): Promise<Script> {
    const uniqueName = await this.getUniqueName(name);
    const now = Date.now();
    return this.store.create({
      id: generateUUID(),
      name: uniqueName,
      code: '',
      enabled: true,
      allowDangerous: false,
      type,
      bindings: [],
      createdAt: now,
      updatedAt: now,
    });
  }

  async updateScript(id: string, patch: Partial<Omit<Script, 'id' | 'createdAt'>>): Promise<Script | null> {
    return this.store.update(id, { ...patch, updatedAt: Date.now() });
  }

  async deleteScript(id: string): Promise<boolean> {
    return this.store.delete(id);
  }

  async duplicateScript(id: string): Promise<Script | null> {
    const original = this.store.getById(id);
    if (!original) return null;
    const baseName = `${original.name} (copy)`;
    const uniqueName = await this.getUniqueName(baseName);
    const now = Date.now();
    return this.store.create({
      ...original,
      id: generateUUID(),
      name: uniqueName,
      createdAt: now,
      updatedAt: now,
    });
  }

  async flush(): Promise<void> {
    await this.store.flush();
  }

  // ─── Helpers ─────────────────────────────────────────────────────────────

  /**
   * Return a name that does not collide with any existing script name.
   * Appends " (2)", " (3)", etc. until unique.
   */
  async getUniqueName(base: string): Promise<string> {
    const existing = new Set(this.store.getAll().map(s => s.name));
    if (!existing.has(base)) return base;
    let n = 2;
    while (existing.has(`${base} (${n})`)) n++;
    return `${base} (${n})`;
  }

  // ─── Pub/sub passthrough ─────────────────────────────────────────────────

  subscribe(subscriber: () => void): () => void {
    return this.store.subscribe(subscriber);
  }
}
