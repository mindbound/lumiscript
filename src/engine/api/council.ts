/**
 * ============================================================================
 * LUMISCRIPT — COUNCIL API
 * ============================================================================
 * Read-only access to the user's Council configuration via spindle.council.*
 * (spindle-types 0.4.40+ / Lumiverse host commit `4e9fdbdc`).
 *
 * No permission required — Lumiverse exposes Council read-only access on
 * the free tier. The data IS user-personal (their assigned Council members,
 * their installed Lumia-item packs), so JSDoc on the script-facing API
 * should make that clear, but no `assertPerm` gate is needed at the
 * LumiScript layer.
 *
 * Three methods, each thin wrappers around the upstream namespace:
 *   getSettings()             → CouncilSettings    (verbatim, already camelCase)
 *   getMembers()              → CouncilMemberContext[] (verbatim, already camelCase)
 *   getAvailableLumiaItems()  → LumiaItem[]        (mapped from snake_case LumiaItemDTO)
 *
 * Method names mirror the host's `spindle.council.*` names verbatim so users
 * can cross-reference Lumiverse developer docs without name translation.
 *
 * **Sister surface:** if a script's `api.tools.register`-backed handler is
 * invoked via the Council execution path, the active member's
 * `CouncilMemberContext` is passed automatically as the second handler arg
 * (`ctx.councilMember`). `api.council.*` is for inspecting Council state
 * OUTSIDE a tool execution cycle — script startup, drawer-tab activation,
 * scheduled reads, etc.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  CouncilAPI,
  CouncilMemberContext,
  CouncilSettings,
  LumiaItem,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';

// ─── DTO → LumiaItem mapping ─────────────────────────────────────────────────
//
// Only `LumiaItemDTO` carries snake_case fields in the council surface —
// `CouncilSettings` / `CouncilMemberContext` / `CouncilToolsSettings` /
// `CouncilMember` are already camelCase upstream. We pass those through
// verbatim and only transform Lumia items.

function mapLumiaItem(
  dto: import('lumiverse-spindle-types').LumiaItemDTO,
): LumiaItem {
  return {
    id:             dto.id,
    packId:         dto.pack_id,
    name:           dto.name,
    avatarUrl:      dto.avatar_url,
    authorName:     dto.author_name,
    definition:     dto.definition,
    personality:    dto.personality,
    behavior:       dto.behavior,
    // Type cast: spindle-types 0.4.40 types `gender_identity: 0 | 1 | 2 | 3`
    // on the DTO but our LumiaItem narrows to `0 | 1 | 2` to match the
    // `CouncilMemberContext.genderIdentity` shape in the same release.
    // See `LumiaItem.genderIdentity` JSDoc for the documented host
    // type-vs-doc inconsistency.
    genderIdentity: dto.gender_identity as 0 | 1 | 2,
    version:        dto.version,
    sortOrder:      dto.sort_order,
    createdAt:      dto.created_at,
    updatedAt:      dto.updated_at,
  };
}

// ─── API builder ──────────────────────────────────────────────────────────────

export function buildCouncilAPI(deps: APIBuildDeps): CouncilAPI {
  const { userId } = deps;
  const uid = userId ?? undefined;

  return {
    getSettings: async (): Promise<CouncilSettings> => {
      // Pass through verbatim — types are already camelCase.
      return spindle.council.getSettings({ userId: uid });
    },

    getMembers: async (): Promise<CouncilMemberContext[]> => {
      // Pass through verbatim — types are already camelCase.
      return spindle.council.getMembers({ userId: uid });
    },

    getAvailableLumiaItems: async (): Promise<LumiaItem[]> => {
      // Map from snake_case DTOs to LumiScript-shaped camelCase.
      const dtos = await spindle.council.getAvailableLumiaItems({ userId: uid });
      return dtos.map(mapLumiaItem);
    },
  };
}
