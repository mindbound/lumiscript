/**
 * ============================================================================
 * LUMISCRIPT — WORLD INFO API
 * ============================================================================
 * Full CRUD access to world books (lorebooks) and their entries.
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
 * api.worldInfo.getCapturedActive(chatId?) — activated entries for a chat
 *
 * WorldInfoRef resolution:
 *   All methods that accept a world book reference (WorldInfoRef) accept
 *   either a UUID or the world book's human-readable name. On first name
 *   lookup, a spindle.world_books.list() call is made and the results are
 *   cached for the lifetime of the script execution to avoid redundant
 *   round-trips.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  WorldInfo,
  WorldInfoEntry,
  WorldInfoCreateInput,
  WorldInfoUpdateInput,
  WorldInfoEntryInput,
  ActivatedWorldInfoEntry,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import {
  addEntry as addWorldInfoInterceptorEntry,
  removeEntry as removeWorldInfoInterceptorEntry,
  listAll as listWorldInfoInterceptorEntries,
} from '../world-info-interceptor-registry.js';
import type {
  WorldInfoInterceptorHandler,
  WorldInfoInterceptorOptions,
  WorldInfoInterceptorHandle,
  RegisteredWorldInfoInterceptorInfo,
} from '../../types/script.js';
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
  const { script, hasPerm, userId, activeContext, worldInfoInterceptorsRegisteredThisRun } = deps;
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
      assertPerm('world_books', hasPerm, script.name);
      const result = await spindle.world_books.list({ ...options, userId: uid });
      // Populate name cache as a side-effect so subsequent name lookups are free.
      for (const book of result.data) nameCache.set(book.name, book.id);
      return { data: result.data.map(mapWorldBook), total: result.total };
    },

    async get(ref) {
      assertPerm('world_books', hasPerm, script.name);
      const id = await resolveBookId(ref);
      const dto = await spindle.world_books.get(id, uid);
      if (dto) nameCache.set(dto.name, dto.id); // keep cache warm
      return dto ? mapWorldBook(dto) : null;
    },

    async create(input: WorldInfoCreateInput) {
      assertPerm('world_books', hasPerm, script.name);
      const dto = await spindle.world_books.create(input, uid);
      nameCache.set(dto.name, dto.id);
      return mapWorldBook(dto);
    },

    async update(ref, input: WorldInfoUpdateInput) {
      assertPerm('world_books', hasPerm, script.name);
      const id = await resolveBookId(ref);
      const dto = await spindle.world_books.update(id, input, uid);
      nameCache.set(dto.name, dto.id); // name may have changed
      return mapWorldBook(dto);
    },

    async delete(ref) {
      assertPerm('world_books', hasPerm, script.name);
      const id = await resolveBookId(ref);
      return spindle.world_books.delete(id, uid);
    },

    // ── Entry CRUD ────────────────────────────────────────────────────────────

    entries: {
      async list(ref, options) {
        assertPerm('world_books', hasPerm, script.name);
        const id = await resolveBookId(ref);
        const result = await spindle.world_books.entries.list(id, {
          ...options,
          userId: uid,
        });
        return { data: result.data.map(mapEntry), total: result.total };
      },

      async get(entryId) {
        assertPerm('world_books', hasPerm, script.name);
        const dto = await spindle.world_books.entries.get(entryId, uid);
        return dto ? mapEntry(dto) : null;
      },

      async create(ref, input: WorldInfoEntryInput) {
        assertPerm('world_books', hasPerm, script.name);
        const id = await resolveBookId(ref);
        const dto = await spindle.world_books.entries.create(
          id,
          mapEntryInput(input),
          uid,
        );
        return mapEntry(dto);
      },

      async update(entryId, input: WorldInfoEntryInput) {
        assertPerm('world_books', hasPerm, script.name);
        const dto = await spindle.world_books.entries.update(
          entryId,
          mapEntryInput(input),
          uid,
        );
        return mapEntry(dto);
      },

      async delete(entryId) {
        assertPerm('world_books', hasPerm, script.name);
        return spindle.world_books.entries.delete(entryId, uid);
      },

      async listByAutomationIdPrefix(prefix: string): Promise<WorldInfoEntry[]> {
        assertPerm('world_books', hasPerm, script.name);

        // Page through ALL world books. `list()` defaults to limit 50, max 200;
        // we use 200 to minimise round-trips. Books are small in practice (users
        // rarely have more than a few dozen), so this is usually one page.
        const matches: WorldInfoEntry[] = [];
        let bookOffset = 0;
        const BOOK_PAGE = 200;
        // Single pass — most users have well under 200 books. Additional
        // pages are handled by the while-loop below if the count exceeds.
        while (true) {
          const books = await spindle.world_books.list({
            userId: uid,
            limit:  BOOK_PAGE,
            offset: bookOffset,
          });
          if (books.data.length === 0) break;

          // For each book, page through its entries and filter by prefix.
          // Running in parallel per book to minimise wall-clock time; each
          // book's entry paging is sequential since page N depends on N-1.
          const perBookResults = await Promise.all(
            books.data.map(async (book) => {
              const bookMatches: WorldInfoEntry[] = [];
              let entryOffset = 0;
              const ENTRY_PAGE = 200;
              while (true) {
                const page = await spindle.world_books.entries.list(book.id, {
                  userId: uid,
                  limit:  ENTRY_PAGE,
                  offset: entryOffset,
                });
                for (const dto of page.data) {
                  if (dto.automation_id && dto.automation_id.startsWith(prefix)) {
                    bookMatches.push(mapEntry(dto));
                  }
                }
                if (page.data.length < ENTRY_PAGE) break;
                entryOffset += page.data.length;
              }
              return bookMatches;
            }),
          );
          for (const subset of perBookResults) matches.push(...subset);

          if (books.data.length < BOOK_PAGE) break;
          bookOffset += books.data.length;
        }

        return matches;
      },
    },

    // ── Activation scan ───────────────────────────────────────────────────────

    async getCapturedActive(chatId?: string): Promise<ActivatedWorldInfoEntry[]> {
      assertPerm('world_books', hasPerm, script.name);

      const id = chatId ?? activeContext.chatId;
      if (!id) throw new Error('api.worldInfo.getCapturedActive: no active chat — open a chat first');

      // 1. Get the lightweight list of activated entries (runs the full pipeline).
      const activated = await spindle.world_books.getActivated(id, uid);
      if (activated.length === 0) return [];

      // 2. Fetch full entry data in parallel for TavernScript parity.
      //    Each activated entry provides only { id, comment, keys, source, score? };
      //    we merge with the full WorldInfoEntry from entries.get().
      const results = await Promise.all(
        activated.map(async (a) => {
          const dto = await spindle.world_books.entries.get(a.id, uid);
          if (!dto) return null;
          const entry: ActivatedWorldInfoEntry = {
            ...mapEntry(dto),
            source: a.source,
            score:  a.score,
          };
          return entry;
        }),
      );

      // Filter out any nulls (entries deleted between activation scan and fetch).
      return results.filter((e): e is ActivatedWorldInfoEntry => e !== null);
    },

    // ── World Info interceptor (v0.27.0+) ────────────────────────────────────
    //
    // Same registration / stale-clean lifecycle as macros' interceptor and
    // chat's content processor: scripts call `registerInterceptor`, the
    // resolved id is added to a per-execution tracking set, and the
    // post-run `diffAndCleanStale` pass drops entries the new run no
    // longer creates. Without that, a trigger script that re-registers on
    // every event would accumulate auto-id'd entries across runs.

    registerInterceptor(
      handler: WorldInfoInterceptorHandler,
      options?: WorldInfoInterceptorOptions,
    ): WorldInfoInterceptorHandle {
      assertPerm('generation', hasPerm, script.name);
      const id = addWorldInfoInterceptorEntry(script.id, script.name, handler, options);
      worldInfoInterceptorsRegisteredThisRun?.add(id);
      return {
        id,
        remove: () => {
          removeWorldInfoInterceptorEntry(script.id, id);
        },
      };
    },

    listInterceptors(): RegisteredWorldInfoInterceptorInfo[] {
      // Diagnostic surface — un-gated, mirrors `listInterceptors` on macros.
      return listWorldInfoInterceptorEntries();
    },
  };
}
