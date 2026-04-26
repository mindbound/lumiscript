/**
 * ============================================================================
 * LUMISCRIPT — CHARACTERS API
 * ============================================================================
 * Full CRUD access to the user's character cards via spindle.characters.
 * Requires the "characters" permission.
 *
 * CharacterDTO fields are mapped to camelCase for consistency with the
 * rest of the LumiScript API surface.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  Character,
  CharacterCreateInput,
  CharacterUpdateInput,
  CharacterAvatarUpload,
} from '../../types/script.js';
import { type APIBuildDeps, assertPerm } from './shared.js';

// ─── DTO → Character mapping ──────────────────────────────────────────────────

function mapCharacter(dto: import('lumiverse-spindle-types').CharacterDTO): Character {
  return {
    id:                      dto.id,
    name:                    dto.name,
    description:             dto.description,
    personality:             dto.personality,
    scenario:                dto.scenario,
    firstMessage:            dto.first_mes,
    mesExample:              dto.mes_example,
    creatorNotes:            dto.creator_notes,
    systemPrompt:            dto.system_prompt,
    postHistoryInstructions: dto.post_history_instructions,
    tags:                    dto.tags,
    alternateGreetings:      dto.alternate_greetings,
    creator:                 dto.creator,
    imageId:                 dto.image_id,
    worldBookIds:            dto.world_book_ids,
    // Spindle-types 0.4.39+ surfaces the full `extensions` blob to extensions
    // (it used to redact and only expose `world_book_ids`). Older Lumiverse
    // hosts or older spindle-types builds may not populate this — fall back
    // to an empty object so scripts can rely on the field being present
    // without guarding for `undefined` on every access.
    extensions:              (dto as { extensions?: Record<string, unknown> }).extensions ?? {},
    createdAt:               dto.created_at,
    updatedAt:               dto.updated_at,
  };
}

function toCreateDTO(
  input: CharacterCreateInput,
): import('lumiverse-spindle-types').CharacterCreateDTO {
  return {
    name:                      input.name,
    description:               input.description,
    personality:               input.personality,
    scenario:                  input.scenario,
    first_mes:                 input.firstMessage,
    mes_example:               input.mesExample,
    creator_notes:             input.creatorNotes,
    system_prompt:             input.systemPrompt,
    post_history_instructions: input.postHistoryInstructions,
    tags:                      input.tags,
    alternate_greetings:       input.alternateGreetings,
    creator:                   input.creator,
    world_book_ids:            input.worldBookIds,
    // Pass-through. Host shallow-merges into existing extensions on update;
    // initial value on create. JSON-serialization is the host's responsibility.
    extensions:                input.extensions,
  };
}

function toUpdateDTO(
  input: CharacterUpdateInput,
): import('lumiverse-spindle-types').CharacterUpdateDTO {
  return toCreateDTO({ name: '', ...input }) as import('lumiverse-spindle-types').CharacterUpdateDTO;
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildCharactersAPI(deps: APIBuildDeps): LumiScriptAPI['characters'] {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    list: async (options) => {
      assertPerm('characters', hasPerm, script.name);
      const result = await spindle.characters.list({ ...options, userId: uid });
      return { data: result.data.map(mapCharacter), total: result.total };
    },

    get: async (id) => {
      assertPerm('characters', hasPerm, script.name);
      const dto = await spindle.characters.get(id, uid);
      return dto ? mapCharacter(dto) : null;
    },

    create: async (input) => {
      assertPerm('characters', hasPerm, script.name);
      const dto = await spindle.characters.create(toCreateDTO(input), uid);
      return mapCharacter(dto);
    },

    update: async (id, input) => {
      assertPerm('characters', hasPerm, script.name);
      const dto = await spindle.characters.update(id, toUpdateDTO(input), uid);
      return mapCharacter(dto);
    },

    setAvatar: async (id: string, avatar: CharacterAvatarUpload) => {
      assertPerm('characters', hasPerm, script.name);
      // LumiScript uses camelCase `mimeType`; the upstream DTO field is
      // `mime_type`. Re-map at the boundary so scripts keep a clean surface.
      const dto = await spindle.characters.setAvatar(id, {
        data:      avatar.data,
        filename:  avatar.filename,
        mime_type: avatar.mimeType,
      }, uid);
      return mapCharacter(dto);
    },

    delete: async (id) => {
      assertPerm('characters', hasPerm, script.name);
      return spindle.characters.delete(id, uid);
    },

    getByName: async (name: string) => {
      assertPerm('characters', hasPerm, script.name);
      // Scan all pages until a match is found or the list is exhausted.
      // Character names are not guaranteed unique in Lumiverse; the first
      // matching character is returned. Using a page size of 100 to minimise
      // round-trips while staying within typical Spindle limits.
      const PAGE_SIZE = 100;
      let offset = 0;
      while (true) {
        const page = await spindle.characters.list({ limit: PAGE_SIZE, offset, userId: uid });
        const found = page.data.find(c => c.name === name);
        if (found) return mapCharacter(found);
        offset += PAGE_SIZE;
        if (offset >= page.total) return null; // all pages exhausted
      }
    },
  };
}
