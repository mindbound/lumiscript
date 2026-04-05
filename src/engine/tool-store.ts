/**
 * ============================================================================
 * LUMISCRIPT — TOOL STORE
 * ============================================================================
 * Module-level singleton that holds all active tool registrations from user
 * scripts. When Lumiverse invokes a LumiScript tool via the TOOL_INVOCATION
 * event, backend.ts dispatches to the handler stored here.
 *
 * Tools are keyed by bare tool name. LumiScript registers all tools under its
 * own extension_id with Lumiverse (via spindle.registerTool), so there is no
 * name-collision risk between different Lumiverse extensions.
 *
 * Lifecycle:
 *  - api.tools.register() → addTool() + spindle.registerTool()
 *  - api.tools.unregister() → removeTool() + spindle.unregisterTool()
 *  - Script delete / disable → clearByScriptId() + spindle.unregisterTool() × N
 */

/** Internal record stored in the singleton map. */
export interface ToolEntry {
  name: string;
  displayName: string;
  description: string;
  /** JSON Schema for the tool's input parameters (used by the auto-sidecar loop). */
  parameters?: Record<string, unknown>;
  councilEligible: boolean;
  /**
   * Wrapped handler: (args) → string. The user's ToolHandler has already been
   * partially applied with the api reference via buildToolsAPI's getApi() lazy
   * getter, so backend.ts calls this with just the raw args object.
   */
  handler: (args: Record<string, unknown>) => string | Promise<string>;
  scriptId: string;
  scriptName: string;
}

// ─── Singleton ────────────────────────────────────────────────────────────────

const store = new Map<string, ToolEntry>();

// ─── Mutators ─────────────────────────────────────────────────────────────────

/**
 * Register a tool entry.
 *
 * Re-registration by the **same** script (e.g. a trigger script re-running)
 * is allowed and simply replaces the handler.
 *
 * Re-registration by a **different** script throws: allowing silent overwrites
 * would let Script B hijack Script A's tool and receive its invocation args.
 */
export function addTool(entry: ToolEntry): void {
  const existing = store.get(entry.name);
  if (existing && existing.scriptId !== entry.scriptId) {
    throw new Error(
      `api.tools.register: tool name "${entry.name}" is already registered by ` +
      `"${existing.scriptName}". Unregister it first or choose a different name.`,
    );
  }
  store.set(entry.name, entry);
}

/**
 * Remove a tool by name. Only removes the entry if it is owned by `scriptId`.
 * Returns `true` if the entry was removed, `false` if not found or not owned.
 */
export function removeTool(name: string, scriptId: string): boolean {
  const entry = store.get(name);
  if (!entry || entry.scriptId !== scriptId) return false;
  store.delete(name);
  return true;
}

/**
 * Remove all tools registered by the given script.
 * Returns the names of the removed tools so the caller can call
 * `spindle.unregisterTool(name)` for each.
 */
export function clearByScriptId(scriptId: string): string[] {
  const cleared: string[] = [];
  for (const [name, entry] of store) {
    if (entry.scriptId === scriptId) {
      store.delete(name);
      cleared.push(name);
    }
  }
  return cleared;
}

/** Remove all tools regardless of script. */
export function clearAll(): void {
  store.clear();
}

// ─── Readers ──────────────────────────────────────────────────────────────────

/** Look up a tool by name. Returns undefined if not registered. */
export function getTool(name: string): ToolEntry | undefined {
  return store.get(name);
}

/** Return a snapshot array of all current entries. */
export function listAll(): ToolEntry[] {
  return [...store.values()];
}
