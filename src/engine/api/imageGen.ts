/**
 * ============================================================================
 * LUMISCRIPT — IMAGE GENERATION API
 * ============================================================================
 * Thin wrapper over Spindle's image-generation surface (`spindle.imageGen.*`).
 * Scripts fire generations via the user's configured connection profiles
 * and receive an `ImageGenResult` whose `imageId` (when persistence
 * succeeds) integrates cleanly with `api.images.*` /
 * `api.theme.extractColors` / `api.characters.setAvatar`.
 *
 * Permission: `image_gen`. Separate from `images` (raw-byte CRUD on the
 * image store). Most generation scripts will want both — `image_gen` to
 * fire the generation, `images` to read/delete the persisted result.
 *
 * Wrapped methods (full surface):
 *   - `generate(input)`              — fire a generation
 *   - `getProviders()`               — list providers + capability schemas
 *   - `listConnections()`            — list user's connection profiles
 *   - `getConnection(connectionId)`  — read a single connection
 *   - `getModels(connectionId)`      — list models for a connection
 *
 * The metadata methods (`getProviders` / `listConnections` / `getConnection`
 * / `getModels`) are what enable scripts to build dynamic UIs around
 * generation: parameter forms keyed off the provider's schema, model
 * pickers, connection switchers, etc.
 *
 * Integration with rest of api:
 *   - `result.imageId` → `api.images.get(id)` / `api.theme.extractColors(id)`
 *     / `spindle.characters.setAvatar({id})`
 *   - `result.imageUrl` → `api.ui.pushNotification(title, body, { image: result.imageUrl })`
 *     (positional signature; public unauthenticated URL — push clients render without auth)
 *   - `parameters: { input_images: [imageId, ...] }` for img2img / inpainting
 *     providers (capability schema type `'image_array'`)
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  ImageGenAPI,
  ImageGenInput,
  ImageGenResult,
  ImageGenProviderInfo,
  ImageGenConnectionInfo,
} from '../../types/script.js';
import type {
  ImageGenRequestDTO,
  ImageGenResultDTO,
  ImageGenProviderDTO,
  ImageGenConnectionDTO,
} from 'lumiverse-spindle-types';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

export function buildImageGenAPI(deps: APIBuildDeps): ImageGenAPI {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    async generate(input: ImageGenInput) {
      assertPerm('image_gen', hasPerm, script.name);
      const dto = await spindle.imageGen.generate(mapGenerateInput(input, uid));
      return mapGenerateResult(dto);
    },

    async getProviders() {
      assertPerm('image_gen', hasPerm, script.name);
      const dtos = await spindle.imageGen.getProviders(uid);
      return dtos.map(mapProvider);
    },

    async listConnections() {
      assertPerm('image_gen', hasPerm, script.name);
      const dtos = await spindle.imageGen.listConnections(uid);
      return dtos.map(mapConnection);
    },

    async getConnection(connectionId: string) {
      assertPerm('image_gen', hasPerm, script.name);
      const dto = await spindle.imageGen.getConnection(connectionId, uid);
      return dto ? mapConnection(dto) : null;
    },

    async getModels(connectionId: string) {
      assertPerm('image_gen', hasPerm, script.name);
      // `getModels` returns `[{id, label}]` — already camelCase, no
      // translation needed. Pass-through.
      return spindle.imageGen.getModels(connectionId, uid);
    },
  };
}

// ─── DTO translation ────────────────────────────────────────────────────────

function mapGenerateInput(input: ImageGenInput, uid: string | undefined): ImageGenRequestDTO {
  // The DTO uses snake_case on every ownership/connection field but
  // camelCase on `negativePrompt`. Match the host shape exactly.
  return {
    prompt: input.prompt,
    ...(input.connectionId      !== undefined ? { connection_id:      input.connectionId      } : {}),
    ...(input.negativePrompt    !== undefined ? { negativePrompt:     input.negativePrompt    } : {}),
    ...(input.model             !== undefined ? { model:              input.model             } : {}),
    ...(input.parameters        !== undefined ? { parameters:         input.parameters        } : {}),
    ...(input.ownerCharacterId  !== undefined ? { owner_character_id: input.ownerCharacterId  } : {}),
    ...(input.ownerChatId       !== undefined ? { owner_chat_id:      input.ownerChatId       } : {}),
    ...(uid                     !== undefined ? { userId:             uid                     } : {}),
  };
}

function mapGenerateResult(dto: ImageGenResultDTO): ImageGenResult {
  // `ImageGenResultDTO` is structurally camelCase already — no field-name
  // translation needed. The cast at the boundary documents the type
  // boundary (TS treats `ImageGenResultDTO` and `ImageGenResult` as
  // distinct nominal types even when shape-compatible).
  return {
    imageDataUrl: dto.imageDataUrl,
    model:        dto.model,
    provider:     dto.provider,
    ...(dto.imageId  !== undefined ? { imageId:  dto.imageId  } : {}),
    ...(dto.imageUrl !== undefined ? { imageUrl: dto.imageUrl } : {}),
  };
}

function mapProvider(dto: ImageGenProviderDTO): ImageGenProviderInfo {
  // `ImageGenProviderDTO`'s `capabilities` object is already camelCase
  // (`apiKeyRequired`, `modelListStyle`, `staticModels`, `defaultUrl`).
  // The nested `parameters` field is `Record<string, ImageGenParameterSchemaDTO>`
  // which is structurally identical to `ImageGenParameterSchema` — pass
  // through with a cast at the boundary.
  return {
    id:   dto.id,
    name: dto.name,
    capabilities: {
      parameters:        dto.capabilities.parameters as ImageGenProviderInfo['capabilities']['parameters'],
      apiKeyRequired:    dto.capabilities.apiKeyRequired,
      modelListStyle:    dto.capabilities.modelListStyle,
      ...(dto.capabilities.staticModels !== undefined ? { staticModels: dto.capabilities.staticModels } : {}),
      defaultUrl:        dto.capabilities.defaultUrl,
    },
  };
}

function mapConnection(dto: ImageGenConnectionDTO): ImageGenConnectionInfo {
  return {
    id:                dto.id,
    name:              dto.name,
    provider:          dto.provider,
    apiUrl:            dto.api_url,
    model:             dto.model,
    isDefault:         dto.is_default,
    hasApiKey:         dto.has_api_key,
    defaultParameters: dto.default_parameters,
    metadata:          dto.metadata,
    createdAt:         dto.created_at,
    updatedAt:         dto.updated_at,
  };
}
