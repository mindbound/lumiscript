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

// ─── DTO → Persona mapping ────────────────────────────────────────────────────

function mapPersona(
  dto: import('lumiverse-spindle-types').PersonaDTO,
): Persona {
  return {
    id:                  dto.id,
    name:                dto.name,
    title:               dto.title,
    description:         dto.description,
    imageId:             dto.image_id,
    attachedWorldBookId: dto.attached_world_book_id,
    folder:              dto.folder,
    isDefault:           dto.is_default,
    metadata:            dto.metadata,
    createdAt:           dto.created_at,
    updatedAt:           dto.updated_at,
  };
}

// ─── PersonaCreateInput → PersonaCreateDTO mapping ────────────────────────────

function mapCreateInput(
  input: PersonaCreateInput,
): import('lumiverse-spindle-types').PersonaCreateDTO {
  return {
    name:                    input.name,
    title:                   input.title,
    description:             input.description,
    folder:                  input.folder,
    is_default:              input.isDefault,
    attached_world_book_id:  input.attachedWorldBookId,
    metadata:                input.metadata,
  };
}

// ─── PersonaUpdateInput → PersonaUpdateDTO mapping ────────────────────────────

function mapUpdateInput(
  input: PersonaUpdateInput,
): import('lumiverse-spindle-types').PersonaUpdateDTO {
  return {
    name:                    input.name,
    title:                   input.title,
    description:             input.description,
    folder:                  input.folder,
    is_default:              input.isDefault,
    attached_world_book_id:  input.attachedWorldBookId,
    metadata:                input.metadata,
  };
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
  const { hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    async list(options) {
      assertPerm('personas', hasPerm);
      const result = await spindle.personas.list({ ...options, userId: uid });
      return { data: result.data.map(mapPersona), total: result.total };
    },

    async get(personaId) {
      assertPerm('personas', hasPerm);
      const dto = await spindle.personas.get(personaId, uid);
      return dto ? mapPersona(dto) : null;
    },

    async getDefault() {
      assertPerm('personas', hasPerm);
      const dto = await spindle.personas.getDefault(uid);
      return dto ? mapPersona(dto) : null;
    },

    async getActive() {
      assertPerm('personas', hasPerm);
      const dto = await spindle.personas.getActive(uid);
      return dto ? mapPersona(dto) : null;
    },

    async create(input: PersonaCreateInput) {
      assertPerm('personas', hasPerm);
      const dto = await spindle.personas.create(mapCreateInput(input), uid);
      return mapPersona(dto);
    },

    async update(personaId, input: PersonaUpdateInput) {
      assertPerm('personas', hasPerm);
      const dto = await spindle.personas.update(personaId, mapUpdateInput(input), uid);
      return mapPersona(dto);
    },

    async delete(personaId) {
      assertPerm('personas', hasPerm);
      return spindle.personas.delete(personaId, uid);
    },

    async switchActive(personaId) {
      assertPerm('personas', hasPerm);
      return spindle.personas.switchActive(personaId, uid);
    },

    async getWorldBook(personaId) {
      assertPerm('personas', hasPerm);
      const dto = await spindle.personas.getWorldBook(personaId, uid);
      return dto ? mapWorldBook(dto) : null;
    },
  };
}
