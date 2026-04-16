/**
 * ============================================================================
 * LUMISCRIPT — PERSONAS API
 * ============================================================================
 * Full CRUD access to user personas (identity profiles).
 * Requires the "personas" permission.
 *
 * Exposed as api.personas.* — a new capability with no TavernScript equivalent.
 *
 * Notable methods:
 *   switchActive(personaId | null) — changes the active persona and emits a
 *     SETTINGS_UPDATED event so the frontend updates immediately.
 *   getWorldBook(personaId) — returns the WorldInfo attached to a persona.
 *     Only personas permission is required (not world_books).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  LumiScriptAPI,
  Persona,
  PersonaCreateInput,
  PersonaUpdateInput,
  WorldInfo,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

// ─── DTO pronoun extension (pre-spindle-types 0.4.22 workaround) ──────────────
// Lumiverse@staging added persona pronoun fields but spindle-types 0.4.21 does
// not yet carry them on PersonaDTO / PersonaCreateDTO / PersonaUpdateDTO. We
// access/write them through this narrow shape until a future types bump makes
// the cast redundant. Remove this helper once PersonaDTO gains the fields.
interface PersonaPronounFields {
  subjective_pronoun?: string;
  objective_pronoun?: string;
  possessive_pronoun?: string;
}

// ─── DTO → Persona mapping ────────────────────────────────────────────────────

function mapPersona(
  dto: import('lumiverse-spindle-types').PersonaDTO,
): Persona {
  const pronouns = dto as unknown as PersonaPronounFields;
  return {
    id:                  dto.id,
    name:                dto.name,
    title:               dto.title,
    description:         dto.description,
    imageId:             dto.image_id,
    attachedWorldBookId: dto.attached_world_book_id,
    folder:              dto.folder,
    isDefault:           dto.is_default,
    subjectivePronoun:   pronouns.subjective_pronoun,
    objectivePronoun:    pronouns.objective_pronoun,
    possessivePronoun:   pronouns.possessive_pronoun,
    metadata:            dto.metadata,
    createdAt:           dto.created_at,
    updatedAt:           dto.updated_at,
  };
}

// ─── PersonaCreateInput → PersonaCreateDTO mapping ────────────────────────────

function mapCreateInput(
  input: PersonaCreateInput,
): import('lumiverse-spindle-types').PersonaCreateDTO {
  const dto: import('lumiverse-spindle-types').PersonaCreateDTO & PersonaPronounFields = {
    name:                    input.name,
    title:                   input.title,
    description:             input.description,
    folder:                  input.folder,
    is_default:              input.isDefault,
    attached_world_book_id:  input.attachedWorldBookId,
    metadata:                input.metadata,
  };
  if (input.subjectivePronoun !== undefined) dto.subjective_pronoun = input.subjectivePronoun;
  if (input.objectivePronoun  !== undefined) dto.objective_pronoun  = input.objectivePronoun;
  if (input.possessivePronoun !== undefined) dto.possessive_pronoun = input.possessivePronoun;
  return dto;
}

// ─── PersonaUpdateInput → PersonaUpdateDTO mapping ────────────────────────────

function mapUpdateInput(
  input: PersonaUpdateInput,
): import('lumiverse-spindle-types').PersonaUpdateDTO {
  const dto: import('lumiverse-spindle-types').PersonaUpdateDTO & PersonaPronounFields = {
    name:                    input.name,
    title:                   input.title,
    description:             input.description,
    folder:                  input.folder,
    is_default:              input.isDefault,
    attached_world_book_id:  input.attachedWorldBookId,
    metadata:                input.metadata,
  };
  if (input.subjectivePronoun !== undefined) dto.subjective_pronoun = input.subjectivePronoun;
  if (input.objectivePronoun  !== undefined) dto.objective_pronoun  = input.objectivePronoun;
  if (input.possessivePronoun !== undefined) dto.possessive_pronoun = input.possessivePronoun;
  return dto;
}

// ─── WorldBookDTO → WorldInfo mapping (local, persona-scoped) ─────────────────

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

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildPersonasAPI(deps: APIBuildDeps): LumiScriptAPI['personas'] {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    async list(options) {
      assertPerm('personas', hasPerm, script.name);
      const result = await spindle.personas.list({ ...options, userId: uid });
      return { data: result.data.map(mapPersona), total: result.total };
    },

    async get(personaId) {
      assertPerm('personas', hasPerm, script.name);
      const dto = await spindle.personas.get(personaId, uid);
      return dto ? mapPersona(dto) : null;
    },

    async getDefault() {
      assertPerm('personas', hasPerm, script.name);
      const dto = await spindle.personas.getDefault(uid);
      return dto ? mapPersona(dto) : null;
    },

    async getActive() {
      assertPerm('personas', hasPerm, script.name);
      const dto = await spindle.personas.getActive(uid);
      return dto ? mapPersona(dto) : null;
    },

    async create(input: PersonaCreateInput) {
      assertPerm('personas', hasPerm, script.name);
      const dto = await spindle.personas.create(mapCreateInput(input), uid);
      return mapPersona(dto);
    },

    async update(personaId, input: PersonaUpdateInput) {
      assertPerm('personas', hasPerm, script.name);
      const dto = await spindle.personas.update(personaId, mapUpdateInput(input), uid);
      return mapPersona(dto);
    },

    async delete(personaId) {
      assertPerm('personas', hasPerm, script.name);
      return spindle.personas.delete(personaId, uid);
    },

    async switchActive(personaId) {
      assertPerm('personas', hasPerm, script.name);
      return spindle.personas.switchActive(personaId, uid);
    },

    async getWorldBook(personaId) {
      assertPerm('personas', hasPerm, script.name);
      const dto = await spindle.personas.getWorldBook(personaId, uid);
      return dto ? mapWorldBook(dto) : null;
    },
  };
}
