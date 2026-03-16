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
  };
}

function toUpdateDTO(
  input: CharacterUpdateInput,
): import('lumiverse-spindle-types').CharacterUpdateDTO {
  return toCreateDTO({ name: '', ...input }) as import('lumiverse-spindle-types').CharacterUpdateDTO;
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildCharactersAPI(deps: APIBuildDeps): LumiScriptAPI['characters'] {
  const { hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    list: async (options) => {
      assertPerm('characters', hasPerm);
      const result = await spindle.characters.list({ ...options, userId: uid });
      return { data: result.data.map(mapCharacter), total: result.total };
    },

    get: async (id) => {
      assertPerm('characters', hasPerm);
      const dto = await spindle.characters.get(id, uid);
      return dto ? mapCharacter(dto) : null;
    },

    create: async (input) => {
      assertPerm('characters', hasPerm);
      const dto = await spindle.characters.create(toCreateDTO(input), uid);
      return mapCharacter(dto);
    },

    update: async (id, input) => {
      assertPerm('characters', hasPerm);
      const dto = await spindle.characters.update(id, toUpdateDTO(input), uid);
      return mapCharacter(dto);
    },

    delete: async (id) => {
      assertPerm('characters', hasPerm);
      return spindle.characters.delete(id, uid);
    },
  };
}
