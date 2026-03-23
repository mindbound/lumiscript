/**
 * ============================================================================
 * LUMISCRIPT — INJECTION STORE
 * ============================================================================
 * Module-level singleton that holds all active prompt injections for the
 * current LumiScript backend worker lifetime. Both the api.chat.inject()
 * call-path (per script execution) and the Spindle interceptor/context-handler
 * registrations (backend.ts, registered at startup) share this store.
 *
 * Injection modes:
 *  'intercept' — spliced into the assembled message array post-assembly by the
 *                registered spindle.registerInterceptor() handler.
 *  'context'   — forwarded to the assembler context object pre-assembly by the
 *                registered spindle.registerContextHandler() handler.
 */

/** Internal record stored in the singleton map. */
export interface InjectionEntry {
  id: string;
  content: string;
  mode: 'intercept' | 'context';
  role: string;         // 'system' | 'user' | 'assistant'
  depth: number;        // intercept only — messages from end; 0 = append
  ephemeral: boolean;   // if true, cleared after the next generation cycle
  scriptId: string;     // script that registered this injection (for cleanup)
}

// ─── Singleton ────────────────────────────────────────────────────────────────

const store = new Map<string, InjectionEntry>();

// ─── Mutators ─────────────────────────────────────────────────────────────────

/** Add or overwrite an injection entry. */
export function addInjection(entry: InjectionEntry): void {
  store.set(entry.id, entry);
}

/** Remove an injection by ID. No-op if not found. */
export function removeInjection(id: string): void {
  store.delete(id);
}

/** Remove all injections created by a given script (on delete / disable). */
export function clearByScriptId(scriptId: string): void {
  for (const [id, entry] of store) {
    if (entry.scriptId === scriptId) store.delete(id);
  }
}

/** Remove all ephemeral injections of a given mode (called after generation). */
export function clearEphemeral(mode: 'intercept' | 'context'): void {
  for (const [id, entry] of store) {
    if (entry.ephemeral && entry.mode === mode) store.delete(id);
  }
}

/** Remove every injection regardless of script or mode. */
export function clearAll(): void {
  store.clear();
}

// ─── Readers ──────────────────────────────────────────────────────────────────

/** Return a snapshot array of all current entries. */
export function listAll(): InjectionEntry[] {
  return [...store.values()];
}

/** Return entries for a specific mode. */
export function listByMode(mode: 'intercept' | 'context'): InjectionEntry[] {
  return [...store.values()].filter(e => e.mode === mode);
}

/** Return entries belonging to a specific script. */
export function listByScriptId(scriptId: string): InjectionEntry[] {
  return [...store.values()].filter(e => e.scriptId === scriptId);
}
