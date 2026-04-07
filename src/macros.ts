/**
 * ============================================================================
 * LUMISCRIPT — MACRO REGISTRATION
 * ============================================================================
 * Registers two families of macros with the Lumiverse macro engine:
 *
 * ## 1. {{lumiScriptActive}}  (push model)
 * Returns "true"/"false" based on the LumiScript master enable toggle.
 *
 * ## 2. Character variable macros  (function handler, async)
 * Read/write per-character variables stored in spindle.userStorage at
 * `variables/characters/{characterId}.json`.
 *
 * ### TypeScript note
 * MacroDefinitionDTO.handler is typed as `string`. The runtime accepts
 * functions, so we cast via `as any` to bypass the TypeScript constraint.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

const CATEGORY = 'extension:lumiscript';

// ─── Typed context interface (subset of MacroExecContext sent via IPC) ────────

interface MacroCtx {
  name: string;
  args: string[];
  env?: {
    character?: { id?: string; name?: string; [k: string]: unknown };
    chat?: { id?: string; [k: string]: unknown };
    names?: { char?: string; user?: string; [k: string]: unknown };
    variables?: { local?: Record<string, string>; global?: Record<string, string> };
    [k: string]: unknown;
  };
  isScoped?: boolean;
  body?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// ─── Character ID resolution ──────────────────────────────────────────────────
//
// ctx.env.character contains card data (name, description, ...) but NO id field.
// spindle.chats.get() requires userId in multi-user mode and can't be called
// from inside a macro handler without it.
//
// Solution: backend.ts publishes the active characterId to globalThis.__lsActiveCharId
// after every refreshActiveContext() call. The macro handler reads it synchronously.

/** Read the active character UUID from globalThis (set by backend.ts). */
function resolveCharId(): string | null {
  return ((globalThis as Record<string, unknown>).__lsActiveCharId as string) ?? null;
}

/** Read the active userId from globalThis (set by backend.ts). */
function resolveUserId(): string | undefined {
  return ((globalThis as Record<string, unknown>).__lsActiveUserId as string) ?? undefined;
}

/** Get the first argument, trimmed, or empty string. */
function key(ctx: MacroCtx): string {
  return (ctx.args?.[0] ?? '').trim();
}

/** Read the full character variable store for the given character. */
async function readCharVars(characterId: string): Promise<Record<string, unknown>> {
  return spindle.userStorage.getJson<Record<string, unknown>>(
    `variables/characters/${characterId}.json`,
    { fallback: {}, userId: resolveUserId() },
  );
}

/** Write the full character variable store for the given character. */
async function writeCharVars(characterId: string, data: Record<string, unknown>): Promise<void> {
  await spindle.userStorage.setJson(
    `variables/characters/${characterId}.json`,
    data,
    { userId: resolveUserId() },
  );
}

/** Register a macro and zero or more aliases sharing the same definition. */
function reg(def: Record<string, unknown>, ...aliases: string[]): void {
  spindle.registerMacro(def as any);
  for (const alias of aliases) {
    spindle.registerMacro({ ...def, name: alias } as any);
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Register all LumiScript macros.  Call once after settings are loaded.
 * @param isEnabled  Getter for the current master-enable toggle state.
 */
export function registerLumiScriptMacros(isEnabled: () => boolean): void {

  // ── {{lumiScriptActive}} — push model ─────────────────────────────────────

  spindle.registerMacro({
    name: 'lumiScriptActive',
    category: CATEGORY,
    description:
      'Returns "true" when LumiScript is enabled (master toggle on), ' +
      '"false" when the master toggle is off. ' +
      'Use in conditional preset blocks: {{if::lumiScriptActive}}...{{/if}}',
    returnType: 'boolean',
    handler: '',
  });
  spindle.updateMacroValue('lumiScriptActive', isEnabled() ? 'true' : 'false');

  // ── Character variable macros — async function handlers ───────────────────

  const KEY_ARG = [{ name: 'key', description: 'Variable name', required: true }];
  const KEY_VAL = [
    { name: 'key',   description: 'Variable name',   required: true },
    { name: 'value', description: 'Value to assign',  required: true },
  ];
  const KEY_NUM = [
    { name: 'key',   description: 'Variable name',   required: true },
    { name: 'value', description: 'Number to add',    required: true },
  ];

  // {{getcvar::key}} / {{getcharvar::key}}
  reg({
    name: 'getcvar',
    category: CATEGORY,
    description: 'Get a LumiScript character-scoped variable for the active character.',
    args: KEY_ARG,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return '';
      const data = await readCharVars(cid);
      const val = data[k];
      return val !== undefined ? String(val) : '';
    },
  }, 'getcharvar');

  // {{setcvar::key::value}} / {{setcharvar::key::value}}
  reg({
    name: 'setcvar',
    category: CATEGORY,
    description: 'Set a LumiScript character-scoped variable for the active character.',
    args: KEY_VAL,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return '';
      const value = ctx.args[1] !== undefined ? String(ctx.args[1]) : '';
      const data = await readCharVars(cid);
      data[k] = value;
      await writeCharVars(cid, data);
      return '';
    },
  }, 'setcharvar');

  // {{addcvar::key::n}} / {{addcharvar::key::n}}
  reg({
    name: 'addcvar',
    category: CATEGORY,
    description: 'Add a number to a LumiScript character-scoped variable.',
    args: KEY_NUM,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return '';
      const addVal = parseFloat(ctx.args[1] ?? '');
      if (isNaN(addVal)) return '';
      const data = await readCharVars(cid);
      const current = parseFloat(String(data[k])) || 0;
      data[k] = String(current + addVal);
      await writeCharVars(cid, data);
      return '';
    },
  }, 'addcharvar');

  // {{inccvar::key}}
  reg({
    name: 'inccvar',
    category: CATEGORY,
    description: 'Increment a LumiScript character-scoped variable by 1.',
    args: KEY_ARG,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return '';
      const data = await readCharVars(cid);
      const current = parseFloat(String(data[k])) || 0;
      data[k] = String(current + 1);
      await writeCharVars(cid, data);
      return '';
    },
  });

  // {{deccvar::key}}
  reg({
    name: 'deccvar',
    category: CATEGORY,
    description: 'Decrement a LumiScript character-scoped variable by 1.',
    args: KEY_ARG,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return '';
      const data = await readCharVars(cid);
      const current = parseFloat(String(data[k])) || 0;
      data[k] = String(current - 1);
      await writeCharVars(cid, data);
      return '';
    },
  });

  // {{hascvar::key}} / {{hascharvar::key}}
  reg({
    name: 'hascvar',
    category: CATEGORY,
    description: 'Returns "true" if the character-scoped variable exists, "false" otherwise.',
    returnType: 'boolean',
    args: KEY_ARG,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return 'false';
      const data = await readCharVars(cid);
      return k in data ? 'true' : 'false';
    },
  }, 'hascharvar');

  // {{deletecvar::key}} / {{deletecharvar::key}}
  reg({
    name: 'deletecvar',
    category: CATEGORY,
    description: 'Delete a LumiScript character-scoped variable.',
    args: KEY_ARG,
    handler: async (ctx: MacroCtx) => {
      const k = key(ctx), cid = resolveCharId();
      if (!k || !cid) return '';
      const data = await readCharVars(cid);
      delete data[k];
      await writeCharVars(cid, data);
      return '';
    },
  }, 'deletecharvar');
}

/**
 * Push the current value of `{{lumiScriptActive}}` to the macro engine.
 * Call whenever the LumiScript master enable setting changes.
 */
export function updateLumiScriptActiveMacro(enabled: boolean): void {
  spindle.updateMacroValue('lumiScriptActive', enabled ? 'true' : 'false');
}
