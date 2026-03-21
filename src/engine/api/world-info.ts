/**
 * ============================================================================
 * LUMISCRIPT — WORLD INFO API
 * ============================================================================
 * Full CRUD access to world books (lorebbooks) and their entries.
 * Requires the "world_books" permission.
 *
 * Naming convention:
 *   TavernScript used "worldInfo" / "WIEntry" (lorebook terminology).
 *   Lumiverse calls these "world books" / "entries" internally.
 *   LumiScript preserves the "worldInfo" namespace for TavernScript parity
 *   while mapping the snake_case Spindle DTOs to camelCase.
 *
 * api.worldInfo.*           — world book CRUD
 * api.worldInfo.entries.*   — entry CRUD (nested)
 *
 * WorldInfoRef resolution:
 *   All methods that accept a world book reference (WorldInfoRef) accept
 *   either a UUID or the world book's human-readable name. On first name
 *   lookup, a spindle.world_books.list() call is made and the results are
 *   cached for the lifetime of the script execution to avoid redundant
 *   round-trips.
 *
 * getCapturedActive() is deferred — the dry-run activation scan has no
 * Spindle equivalent yet. It will be added when Lumiverse exposes it.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  WorldInfo,
  WorldInfoEntry,
  WorldInfoCreateInput,
  WorldInfoUpdateInput,
  WorldInfoEntryInput,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

// ─── DTO → WorldInfo mapping ───────────────────────────────────────────────────

function mapWorldBook(
  dto: import('lumiverse-spindle-types').WorldBookDTO,
): WorldInfo {
  return {
    id:          dto.id,
    name:        dto.name,
    description: dto.description,
    metadata:    dto.metadata,
    createdAt:   dto.created_at,
    updatedAt:   dto.updated_at,
  };
}

// ─── DTO → WorldInfoEntry mapping ─────────────────────────────────────────────

function mapEntry(
  dto: import('lumiverse-spindle-types').WorldBookEntryDTO,
): WorldInfoEntry {
  return {
    id:                 dto.id,
    worldBookId:        dto.world_book_id,
    uid:                dto.uid,
    key:                dto.key,
    keysecondary:       dto.keysecondary,
    content:            dto.content,
    comment:            dto.comment,
    position:           dto.position,
    depth:              dto.depth,
    role:               dto.role,
    orderValue:         dto.order_value,
    selective:          dto.selective,
    constant:           dto.constant,
    disabled:           dto.disabled,
    groupName:          dto.group_name,
    groupOverride:      dto.group_override,
    groupWeight:        dto.group_weight,
    probability:        dto.probability,
    scanDepth:          dto.scan_depth,
    caseSensitive:      dto.case_sensitive,
    matchWholeWords:    dto.match_whole_words,
    automationId:       dto.automation_id,
    useRegex:           dto.use_regex,
    preventRecursion:   dto.prevent_recursion,
    excludeRecursion:   dto.exclude_recursion,
    delayUntilRecursion: dto.delay_until_recursion,
    priority:           dto.priority,
    sticky:             dto.sticky,
    cooldown:           dto.cooldown,
    delay:              dto.delay,
    selectiveLogic:     dto.selective_logic,
    useProbability:     dto.use_probability,
    vectorized:         dto.vectorized,
    extensions:         dto.extensions,
    createdAt:          dto.created_at,
    updatedAt:          dto.updated_at,
  };
}

// ─── WorldInfoEntryInput → WorldBookEntryCreateDTO mapping ────────────────────

function mapEntryInput(
  input: WorldInfoEntryInput,
): import('lumiverse-spindle-types').WorldBookEntryCreateDTO {
  return {
    key:                  input.key,
    keysecondary:         input.keysecondary,
    content:              input.content,
    comment:              input.comment,
    position:             input.position,
    depth:                input.depth,
    role:                 input.role,
    order_value:          input.orderValue,
    selective:            input.selective,
    constant:             input.constant,
    disabled:             input.disabled,
    group_name:           input.groupName,
    group_override:       input.groupOverride,
    group_weight:         input.groupWeight,
    probability:          input.probability,
    scan_depth:           input.scanDepth,
    case_sensitive:       input.caseSensitive,
    match_whole_words:    input.matchWholeWords,
    automation_id:        input.automationId,
    use_regex:            input.useRegex,
    prevent_recursion:    input.preventRecursion,
    exclude_recursion:    input.excludeRecursion,
    delay_until_recursion: input.delayUntilRecursion,
    priority:             input.priority,
    sticky:               input.sticky,
    cooldown:             input.cooldown,
    delay:                input.delay,
    selective_logic:      input.selectiveLogic,
    use_probability:      input.useProbability,
    vectorized:           input.vectorized,
    extensions:           input.extensions,
  };
}

// ─── UUID detection ───────────────────────────────────────────────────────────

/** Matches a standard UUID v4 string. World books are never named as UUIDs. */
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildWorldInfoAPI(deps: APIBuildDeps): LumiScriptAPI['worldInfo'] {
  const { hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  // Per-execution name→id cache to avoid redundant list() calls when the same
  // world book is referenced by name multiple times in one script run.
  const nameCache = new Map<string, string>();

  /**
   * Resolve a WorldInfoRef (UUID or human-readable name) to a UUID.
   * - If the ref looks like a UUID: return it as-is.
   * - Otherwise: check the cache; if not found, fetch the full book list and
   *   populate the cache from it. Throws if the name does not match any book.
   */
  async function resolveBookId(ref: string): Promise<string> {
    if (UUID_RE.test(ref)) return ref;
    if (nameCache.has(ref)) return nameCache.get(ref)!;

    // Cold resolution: fetch book list and populate cache.
    const { data } = await spindle.world_books.list({ userId: uid, limit: 200 });
    for (const book of data) {
      nameCache.set(book.name, book.id);
    }

    const resolved = nameCache.get(ref);
    if (!resolved) {
      throw new Error(`api.worldInfo: world book "${ref}" not found`);
    }
    return resolved;
  }

  return {
    // ── World book CRUD ───────────────────────────────────────────────────────

    async list(options) {
      assertPerm('world_books', hasPerm);
      const result = await spindle.world_books.list({ ...options, userId: uid });
      // Populate name cache as a side-effect so subsequent name lookups are free.
      for (const book of result.data) nameCache.set(book.name, book.id);
      return { data: result.data.map(mapWorldBook), total: result.total };
    },

    async get(ref) {
      assertPerm('world_books', hasPerm);
      const id = await resolveBookId(ref);
      const dto = await spindle.world_books.get(id, uid);
      if (dto) nameCache.set(dto.name, dto.id); // keep cache warm
      return dto ? mapWorldBook(dto) : null;
    },

    async create(input: WorldInfoCreateInput) {
      assertPerm('world_books', hasPerm);
      const dto = await spindle.world_books.create(input, uid);
      nameCache.set(dto.name, dto.id);
      return mapWorldBook(dto);
    },

    async update(ref, input: WorldInfoUpdateInput) {
      assertPerm('world_books', hasPerm);
      const id = await resolveBookId(ref);
      const dto = await spindle.world_books.update(id, input, uid);
      nameCache.set(dto.name, dto.id); // name may have changed
      return mapWorldBook(dto);
    },

    async delete(ref) {
      assertPerm('world_books', hasPerm);
      const id = await resolveBookId(ref);
      return spindle.world_books.delete(id, uid);
    },

    // ── Entry CRUD ────────────────────────────────────────────────────────────

    entries: {
      async list(ref, options) {
        assertPerm('world_books', hasPerm);
        const id = await resolveBookId(ref);
        const result = await spindle.world_books.entries.list(id, {
          ...options,
          userId: uid,
        });
        return { data: result.data.map(mapEntry), total: result.total };
      },

      async get(entryId) {
        assertPerm('world_books', hasPerm);
        const dto = await spindle.world_books.entries.get(entryId, uid);
        return dto ? mapEntry(dto) : null;
      },

      async create(ref, input: WorldInfoEntryInput) {
        assertPerm('world_books', hasPerm);
        const id = await resolveBookId(ref);
        const dto = await spindle.world_books.entries.create(
          id,
          mapEntryInput(input),
          uid,
        );
        return mapEntry(dto);
      },

      async update(entryId, input: WorldInfoEntryInput) {
        assertPerm('world_books', hasPerm);
        const dto = await spindle.world_books.entries.update(
          entryId,
          mapEntryInput(input),
          uid,
        );
        return mapEntry(dto);
      },

      async delete(entryId) {
        assertPerm('world_books', hasPerm);
        return spindle.world_books.entries.delete(entryId, uid);
      },
    },
  };
}
