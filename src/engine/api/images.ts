/**
 * ============================================================================
 * LUMISCRIPT — IMAGES API
 * ============================================================================
 * Thin wrapper over Spindle's image-store surface (`spindle.images.*`).
 * Scripts upload raw image bytes (or `data:` URLs) and receive an
 * `ImageInfo` whose `id` can be passed to `api.theme.extractColors(id)`,
 * stored on a character avatar via `spindle.characters.setAvatar`, or
 * retained on a databank document.
 *
 * Permission: `images`. Separate from `app_manipulation` (theme / DOM)
 * so users can grant theme manipulation WITHOUT granting arbitrary
 * image uploads.
 *
 * Wrapped methods (subset of `spindle.images.*`):
 *   - `upload(input)` — bytes → ImageInfo
 *   - `uploadFromDataUrl(dataUrl, opts?)` — data-URL convenience wrapper
 *   - `get(imageId)` — read
 *   - `delete(imageId)` — cleanup
 *
 * Not wrapped (v1.0.0-rc.5):
 *   - `list` — exposes arbitrary enumeration of all the user's images
 *     (privacy surface). Add if real demand surfaces and we agree on a
 *     scope-bounded filter set.
 *   - `uploadMany` — perf-optimization scripts can reach via
 *     `Promise.all(items.map(api.images.upload))`. Add if real demand
 *     justifies the wider surface.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  ImagesAPI,
  ImageInfo,
  ImageUploadInput,
  ImageUploadFromDataUrlOptions,
} from '../../types/script.js';
import type {
  ImageDTO,
  ImageUploadDTO,
  ImageUploadFromDataUrlOptionsDTO,
} from 'lumiverse-spindle-types';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

export function buildImagesAPI(deps: APIBuildDeps): ImagesAPI {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  return {
    async upload(input: ImageUploadInput) {
      assertPerm('images', hasPerm, script.name);
      const dto = await spindle.images.upload(mapUploadInput(input), uid);
      return mapImageInfo(dto);
    },

    async uploadFromDataUrl(dataUrl: string, options?: ImageUploadFromDataUrlOptions) {
      assertPerm('images', hasPerm, script.name);
      const dto = await spindle.images.uploadFromDataUrl(dataUrl, mapDataUrlOptions(options, uid));
      return mapImageInfo(dto);
    },

    async get(imageId: string) {
      assertPerm('images', hasPerm, script.name);
      const dto = await spindle.images.get(imageId, uid);
      return dto ? mapImageInfo(dto) : null;
    },

    async delete(imageId: string) {
      assertPerm('images', hasPerm, script.name);
      return spindle.images.delete(imageId, uid);
    },
  };
}

// ─── DTO translation ────────────────────────────────────────────────────────

function mapImageInfo(dto: ImageDTO): ImageInfo {
  return {
    id:                       dto.id,
    originalFilename:         dto.original_filename,
    mimeType:                 dto.mime_type,
    width:                    dto.width,
    height:                   dto.height,
    hasThumbnail:             dto.has_thumbnail,
    url:                      dto.url,
    specificity:              dto.specificity,
    ownerExtensionIdentifier: dto.owner_extension_identifier,
    ownerCharacterId:         dto.owner_character_id,
    ownerChatId:              dto.owner_chat_id,
    createdAt:                dto.created_at,
  };
}

function mapUploadInput(input: ImageUploadInput): ImageUploadDTO {
  return {
    data: input.data,
    ...(input.filename         !== undefined ? { filename:           input.filename         } : {}),
    ...(input.mimeType         !== undefined ? { mime_type:          input.mimeType         } : {}),
    ...(input.ownerCharacterId !== undefined ? { owner_character_id: input.ownerCharacterId } : {}),
    ...(input.ownerChatId      !== undefined ? { owner_chat_id:      input.ownerChatId      } : {}),
  };
}

function mapDataUrlOptions(
  opts: ImageUploadFromDataUrlOptions | undefined,
  uid:  string | undefined,
): ImageUploadFromDataUrlOptionsDTO {
  // The host DTO mixes naming conventions: `originalFilename` (camelCase)
  // alongside `owner_character_id` / `owner_chat_id` (snake_case).
  // Match the host shape exactly.
  return {
    ...(opts?.originalFilename !== undefined ? { originalFilename:   opts.originalFilename } : {}),
    ...(opts?.ownerCharacterId !== undefined ? { owner_character_id: opts.ownerCharacterId } : {}),
    ...(opts?.ownerChatId      !== undefined ? { owner_chat_id:      opts.ownerChatId      } : {}),
    ...(uid !== undefined ? { userId: uid } : {}),
  };
}
