/**
 * ============================================================================
 * LUMISCRIPT — SETTINGS STORE
 * ============================================================================
 * Single-object file store for extension settings.
 * Uses dependency injection for storage operations.
 */

import type { UserStorageAdapter } from './collection-store.js';

export class SettingsStore<T extends object> {
  private data: T;
  private loaded = false;

  constructor(
    private readonly storagePath: string,
    private readonly storage: UserStorageAdapter,
    private readonly getUserId: () => string | undefined,
    private readonly defaults: T,
  ) {
    this.data = { ...defaults };
  }

  async load(): Promise<void> {
    const userId = this.getUserId();
    const stored = await this.storage.getJson<Partial<T>>(this.storagePath, {
      fallback: {} as Partial<T>,
      userId,
    });
    // Merge stored values over defaults so new keys added in code get their default
    this.data = { ...this.defaults, ...stored };
    this.loaded = true;
  }

  get(): T {
    return { ...this.data };
  }

  getField<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  async update(patch: Partial<T>): Promise<void> {
    this.data = { ...this.data, ...patch };
    await this.persist();
  }

  async flush(): Promise<void> {
    await this.persist();
  }

  get isLoaded(): boolean {
    return this.loaded;
  }

  private async persist(): Promise<void> {
    const userId = this.getUserId();
    await this.storage.setJson(this.storagePath, this.data, { indent: 2, userId });
  }
}
