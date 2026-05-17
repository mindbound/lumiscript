/**
 * ============================================================================
 * LUMISCRIPT — PRESETS API
 * ============================================================================
 * Full CRUD access to user generation presets and their prompt blocks.
 * Requires the "presets" permission.
 *
 * A preset is the complete generation configuration: sampler/provider
 * parameters, ordered prompt blocks (with roles, positions, depth),
 * prompt behavior settings, and metadata. Programmatic access lets
 * scripts rotate prompt blocks based on chat context, snapshot presets
 * for backup/share, build ephemeral per-chat configurations, etc.
 *
 * Sub-namespaces:
 *   api.presets.*            — preset CRUD
 *   api.presets.blocks.*     — prompt block CRUD (within a preset)
 *   api.presets.categories.* — category grouping (host-derived view)
 *
 * ─── DTO ↔ Info parity ──────────────────────────────────────────────────────
 *
 * Unlike most other CRUD namespaces (databanks, worldInfo, characters), the
 * Preset / PromptBlock / PromptBlockCategoryGroup shapes are structurally
 * identical to their Spindle DTOs — same field names, same casing
 * (snake_case for stored fields like `prompt_order` / `created_at` /
 * `updated_at` is preserved because those identify stored data and match
 * what callers see in host event payloads). Consequently this canonical
 * layer is a thin pass-through with permission gating: no per-field
 * DTO translation, no name→id resolution, no convenience helpers.
 * Casts at the boundary are nominally `as Preset` / `as PromptBlock[]`
 * since TypeScript treats the DTO interfaces and our re-exported
 * interfaces as distinct types even when structurally identical.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  PresetsAPI,
  Preset,
  PromptBlock,
  PromptBlockCategoryGroup,
  PresetCreateInput,
  PresetUpdateInput,
  PromptBlockCreateInput,
  PromptBlockUpdateInput,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

export function buildPresetsAPI(deps: APIBuildDeps): PresetsAPI {
  const { script, hasPerm, userId } = deps;
  // Spindle calls take `userId?: string` (omitted for user-scoped
  // extensions like LumiScript — the host infers the active user).
  // We forward `deps.userId ?? undefined` because `null` carries a
  // different signal in some Spindle methods. See cookbook §7.
  const uid = userId ?? undefined;

  return {
    // ── Preset CRUD ───────────────────────────────────────────────────────

    async list(options) {
      assertPerm('presets', hasPerm, script.name);
      const result = await spindle.presets.list({ ...options, userId: uid });
      return { data: result.data as Preset[], total: result.total };
    },

    async get(presetId: string) {
      assertPerm('presets', hasPerm, script.name);
      const dto = await spindle.presets.get(presetId, uid);
      return dto as Preset | null;
    },

    async create(input: PresetCreateInput) {
      assertPerm('presets', hasPerm, script.name);
      const dto = await spindle.presets.create(input, uid);
      return dto as Preset;
    },

    async update(presetId: string, input: PresetUpdateInput) {
      assertPerm('presets', hasPerm, script.name);
      const dto = await spindle.presets.update(presetId, input, uid);
      return dto as Preset;
    },

    async delete(presetId: string) {
      assertPerm('presets', hasPerm, script.name);
      return spindle.presets.delete(presetId, uid);
    },

    // ── Prompt-block CRUD (nested) ────────────────────────────────────────
    //
    // Block ops update the parent preset's `prompt_order` array and go
    // through the normal preset update flow on the host side — host
    // handles the array splicing + post-update prompt-variable pruning.

    blocks: {
      async list(presetId: string): Promise<PromptBlock[]> {
        assertPerm('presets', hasPerm, script.name);
        const blocks = await spindle.presets.blocks.list(presetId, uid);
        return blocks as PromptBlock[];
      },

      async get(presetId: string, blockId: string) {
        assertPerm('presets', hasPerm, script.name);
        const block = await spindle.presets.blocks.get(presetId, blockId, uid);
        return block as PromptBlock | null;
      },

      async create(
        presetId: string,
        input: PromptBlockCreateInput,
        options?: { index?: number },
      ): Promise<PromptBlock> {
        assertPerm('presets', hasPerm, script.name);
        // Conditionally include `index` so we don't send `index: undefined`
        // and trigger ambiguity in Spindle's "omit-or-set" branch.
        const block = await spindle.presets.blocks.create(presetId, input, {
          ...(options?.index !== undefined ? { index: options.index } : {}),
          userId: uid,
        });
        return block as PromptBlock;
      },

      async update(
        presetId: string,
        blockId: string,
        input: PromptBlockUpdateInput,
      ): Promise<PromptBlock> {
        assertPerm('presets', hasPerm, script.name);
        const block = await spindle.presets.blocks.update(presetId, blockId, input, uid);
        return block as PromptBlock;
      },

      async delete(presetId: string, blockId: string): Promise<boolean> {
        assertPerm('presets', hasPerm, script.name);
        return spindle.presets.blocks.delete(presetId, blockId, uid);
      },
    },

    // ── Category grouping (nested, read-only view) ────────────────────────
    //
    // Pre-computed view of `prompt_order` walked by category marker.
    // To create / update / delete a category, use `blocks.*` with
    // `marker: 'category'` — categories aren't separate records.

    categories: {
      async list(presetId: string): Promise<PromptBlockCategoryGroup[]> {
        assertPerm('presets', hasPerm, script.name);
        const groups = await spindle.presets.categories.list(presetId, uid);
        return groups as PromptBlockCategoryGroup[];
      },
    },
  };
}
