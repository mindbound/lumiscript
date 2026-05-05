/**
 * ============================================================================
 * LUMISCRIPT — REGEX SCRIPTS API
 * ============================================================================
 * Full CRUD over the user's regex find/replace scripts plus a context-aware
 * `getActive` resolver. Maps 1:1 onto Lumiverse's `spindle.regex_scripts.*`
 * (added in lumiverse-spindle-types 0.4.62 / Lumiverse 0.9.7). Requires the
 * `regex_scripts` permission.
 *
 * Exposed as `api.regexScripts.*`. Use cases: card-format compatibility
 * shims that bake regex rules into characters / chats, regex-rule
 * analytics or batch-edit tooling, debug surfaces that mirror the
 * resolution Lumiverse uses internally during prompt assembly + response
 * baking + display rendering.
 *
 * Convenience layered on top of the Spindle base:
 *   - `findByName(name, scope?)` — paginated `list()` + locally-applied
 *     filter. O(scripts) worst case.
 *
 * DTO snake_case is translated to camelCase at this layer (matches
 * `personas`, `characters`, `databanks`).
 *
 * Lifecycle events: scripts can subscribe to `REGEX_SCRIPT_CHANGED` and
 * `REGEX_SCRIPT_DELETED` via the `@triggers` directive — payloads are
 * forwarded as-is from the host so consumers can keep extension-side
 * caches in sync (e.g. invalidate a cached `getActive` result on either
 * event and re-fetch lazily on the next read).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  RegexScriptInfo,
  RegexScriptCreateInput,
  RegexScriptUpdateInput,
  RegexPlacement,
  RegexScope,
  RegexTarget,
  RegexMacroMode,
  RegexScriptsAPI,
} from '../../types/script.js';
import type {
  RegexScriptDTO,
  RegexScriptCreateDTO,
  RegexScriptUpdateDTO,
} from 'lumiverse-spindle-types';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

// ─── Shared paging defaults ──────────────────────────────────────────────────

/** Default page size for `findByName` lookups. Matches Lumiverse's default `list({ limit })`. */
const FIND_BY_NAME_PAGE_SIZE = 100;

/**
 * Cap on how many records `findByName` will scan before giving up. Practical
 * safeguard against pathological regex-script counts. Adjust upward if
 * real-world usage hits the cap.
 */
const FIND_BY_NAME_HARD_CAP = 1000;

// ─── DTO ↔ camelCase translation ─────────────────────────────────────────────

function mapRegexScript(dto: RegexScriptDTO): RegexScriptInfo {
  return {
    id:               dto.id,
    name:             dto.name,
    scriptId:         dto.script_id,
    findRegex:        dto.find_regex,
    replaceString:    dto.replace_string,
    flags:            dto.flags,
    placement:        dto.placement as RegexPlacement[],
    scope:            dto.scope as RegexScope,
    scopeId:          dto.scope_id,
    target:           dto.target as RegexTarget,
    minDepth:         dto.min_depth,
    maxDepth:         dto.max_depth,
    trimStrings:      dto.trim_strings,
    runOnEdit:        dto.run_on_edit,
    substituteMacros: dto.substitute_macros as RegexMacroMode,
    disabled:         dto.disabled,
    sortOrder:        dto.sort_order,
    description:      dto.description,
    folder:           dto.folder,
    metadata:         dto.metadata,
    createdAt:        dto.created_at,
    updatedAt:        dto.updated_at,
  };
}

function mapCreateInput(input: RegexScriptCreateInput): RegexScriptCreateDTO {
  // Required fields
  const dto: RegexScriptCreateDTO = {
    name:       input.name,
    find_regex: input.findRegex,
  };
  // Optional fields — only set when defined to preserve host-side defaults
  if (input.replaceString    !== undefined) dto.replace_string    = input.replaceString;
  if (input.flags            !== undefined) dto.flags             = input.flags;
  if (input.placement        !== undefined) dto.placement         = input.placement;
  if (input.scope            !== undefined) dto.scope             = input.scope;
  if (input.scopeId          !== undefined) dto.scope_id          = input.scopeId;
  if (input.target           !== undefined) dto.target            = input.target;
  if (input.minDepth         !== undefined) dto.min_depth         = input.minDepth;
  if (input.maxDepth         !== undefined) dto.max_depth         = input.maxDepth;
  if (input.trimStrings      !== undefined) dto.trim_strings      = input.trimStrings;
  if (input.runOnEdit        !== undefined) dto.run_on_edit       = input.runOnEdit;
  if (input.substituteMacros !== undefined) dto.substitute_macros = input.substituteMacros;
  if (input.disabled         !== undefined) dto.disabled          = input.disabled;
  if (input.sortOrder        !== undefined) dto.sort_order        = input.sortOrder;
  if (input.description      !== undefined) dto.description       = input.description;
  if (input.folder           !== undefined) dto.folder            = input.folder;
  if (input.metadata         !== undefined) dto.metadata          = input.metadata;
  if (input.scriptId         !== undefined) dto.script_id         = input.scriptId;
  return dto;
}

function mapUpdateInput(input: RegexScriptUpdateInput): RegexScriptUpdateDTO {
  // All fields optional on update; same translation as create but no requireds
  const dto: RegexScriptUpdateDTO = {};
  if (input.name             !== undefined) dto.name              = input.name;
  if (input.findRegex        !== undefined) dto.find_regex        = input.findRegex;
  if (input.replaceString    !== undefined) dto.replace_string    = input.replaceString;
  if (input.flags            !== undefined) dto.flags             = input.flags;
  if (input.placement        !== undefined) dto.placement         = input.placement;
  if (input.scope            !== undefined) dto.scope             = input.scope;
  if (input.scopeId          !== undefined) dto.scope_id          = input.scopeId;
  if (input.target           !== undefined) dto.target            = input.target;
  if (input.minDepth         !== undefined) dto.min_depth         = input.minDepth;
  if (input.maxDepth         !== undefined) dto.max_depth         = input.maxDepth;
  if (input.trimStrings      !== undefined) dto.trim_strings      = input.trimStrings;
  if (input.runOnEdit        !== undefined) dto.run_on_edit       = input.runOnEdit;
  if (input.substituteMacros !== undefined) dto.substitute_macros = input.substituteMacros;
  if (input.disabled         !== undefined) dto.disabled          = input.disabled;
  if (input.sortOrder        !== undefined) dto.sort_order        = input.sortOrder;
  if (input.description      !== undefined) dto.description       = input.description;
  if (input.folder           !== undefined) dto.folder            = input.folder;
  if (input.metadata         !== undefined) dto.metadata          = input.metadata;
  if (input.scriptId         !== undefined) dto.script_id         = input.scriptId;
  return dto;
}

// ─── Build ──────────────────────────────────────────────────────────────────

export function buildRegexScriptsAPI(deps: APIBuildDeps): RegexScriptsAPI {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  /**
   * Page through `spindle.regex_scripts.list()` and apply the name filter
   * locally. Returns the first match or null. Stops at FIND_BY_NAME_HARD_CAP
   * scanned to bound worst-case latency on pathological accounts.
   */
  async function findByName(
    name: string,
    scope?: RegexScope,
  ): Promise<RegexScriptInfo | null> {
    let offset = 0;
    let scanned = 0;
    while (scanned < FIND_BY_NAME_HARD_CAP) {
      const opts: Parameters<typeof spindle.regex_scripts.list>[0] = {
        limit:  FIND_BY_NAME_PAGE_SIZE,
        offset,
        userId: uid,
      };
      if (scope !== undefined) opts.scope = scope;
      const page = await spindle.regex_scripts.list(opts);
      for (const dto of page.data) {
        if (dto.name === name) return mapRegexScript(dto);
      }
      scanned += page.data.length;
      if (page.data.length === 0)                  break;
      if (offset + page.data.length >= page.total) break;
      offset += page.data.length;
    }
    return null;
  }

  return {
    async list(options) {
      assertPerm('regex_scripts', hasPerm, script.name);
      const opts: Parameters<typeof spindle.regex_scripts.list>[0] = { userId: uid };
      if (options?.scope   !== undefined) opts.scope   = options.scope;
      if (options?.scopeId !== undefined) opts.scopeId = options.scopeId;
      if (options?.target  !== undefined) opts.target  = options.target;
      if (options?.limit   !== undefined) opts.limit   = options.limit;
      if (options?.offset  !== undefined) opts.offset  = options.offset;
      const result = await spindle.regex_scripts.list(opts);
      return { data: result.data.map(mapRegexScript), total: result.total };
    },

    async get(scriptId) {
      assertPerm('regex_scripts', hasPerm, script.name);
      const dto = await spindle.regex_scripts.get(scriptId, uid);
      return dto ? mapRegexScript(dto) : null;
    },

    async findByName(name, scope) {
      assertPerm('regex_scripts', hasPerm, script.name);
      return findByName(name, scope);
    },

    async getActive(options) {
      assertPerm('regex_scripts', hasPerm, script.name);
      const opts: Parameters<typeof spindle.regex_scripts.getActive>[0] = {
        target: options.target,
        userId: uid,
      };
      if (options.characterId !== undefined) opts.characterId = options.characterId;
      if (options.chatId      !== undefined) opts.chatId      = options.chatId;
      const result = await spindle.regex_scripts.getActive(opts);
      return result.map(mapRegexScript);
    },

    async create(input) {
      assertPerm('regex_scripts', hasPerm, script.name);
      const dto = await spindle.regex_scripts.create(mapCreateInput(input), uid);
      return mapRegexScript(dto);
    },

    async update(scriptId, input) {
      assertPerm('regex_scripts', hasPerm, script.name);
      const dto = await spindle.regex_scripts.update(scriptId, mapUpdateInput(input), uid);
      return mapRegexScript(dto);
    },

    async delete(scriptId) {
      assertPerm('regex_scripts', hasPerm, script.name);
      return spindle.regex_scripts.delete(scriptId, uid);
    },
  };
}
