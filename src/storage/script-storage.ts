/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT STORAGE
 * ============================================================================
 * High-level script CRUD built on CollectionStore.
 * Provides script-specific helpers (create with defaults, getUniqueName, duplicate).
 */

import type { Script, ScriptType, ScriptPackEntry } from '../types/script.js';
import { CollectionStore, type UserStorageAdapter } from './collection-store.js';
import { generateUUID } from '../utils/uuid.js';

const SCRIPTS_PATH = 'scripts.json';

export class ScriptStorage {
  readonly store: CollectionStore<Script>;

  /**
   * Name → Script index for O(1) lookup in script.require() by name.
   * Rebuilt automatically whenever the underlying CollectionStore changes.
   */
  private readonly nameIndex = new Map<string, Script>();

  constructor(storage: UserStorageAdapter, getUserId: () => string | undefined) {
    this.store = new CollectionStore<Script>(SCRIPTS_PATH, storage, getUserId);
    // Keep the name index in sync with all store mutations.
    this.store.subscribe(() => this._rebuildNameIndex());
  }

  private _rebuildNameIndex(): void {
    this.nameIndex.clear();
    for (const s of this.store.getAll()) this.nameIndex.set(s.name, s);
  }

  async load(): Promise<void> {
    await this.store.load();
    this._rebuildNameIndex();
  }

  // ─── Read ─────────────────────────────────────────────────────────────────

  getScripts(): Script[] {
    return this.store.getAll();
  }

  getScript(id: string): Script | null {
    return this.store.getById(id);
  }

  /** O(1) lookup by script name using the maintained name index. */
  getByName(name: string): Script | undefined {
    return this.nameIndex.get(name);
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
      triggers: [],
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

  /**
   * Bulk-import scripts from a script pack.
   * All security-relevant fields are forced to safe defaults:
   *   - Fresh UUID (never from input)
   *   - enabled = false (user must review and enable)
   *   - allowDangerous = false (user must grant separately)
   *   - Fresh timestamps
   *   - Validated type (invalid values fall back to 'trigger')
   *   - Name deduplicated against existing scripts
   */
  async importScripts(entries: ScriptPackEntry[]): Promise<Script[]> {
    const results: Script[] = [];
    const now = Date.now();
    for (const entry of entries) {
      const uniqueName = await this.getUniqueName(entry.name);
      const script = await this.store.create({
        id: generateUUID(),
        name: uniqueName,
        code: entry.code,
        type: entry.type === 'library' ? 'library' : 'trigger',
        enabled: false,
        allowDangerous: false,
        bindings: entry.bindings ?? [],
        triggers: entry.triggers ?? [],
        folder: entry.folder,
        metadata: entry.metadata,
        createdAt: now,
        updatedAt: now,
      });
      results.push(script);
    }
    return results;
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
