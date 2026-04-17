/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT PACK VALIDATION SCHEMAS
 * ============================================================================
 * Zod schemas for two related artifact formats:
 *
 *   ScriptPackSchema  — the canonical in-app pack format (`lumiscript-pack-v1`).
 *                       Used by the ZIP importer. Scripts embed their code
 *                       directly via a `code: string` field.
 *
 *   ManifestSchema    — the expanded-directory format
 *                       (`lumiscript-manifest-v1`) emitted by
 *                       `scripts/pack2js.ts` and consumed by
 *                       `scripts/js2pack.ts`. Scripts reference an external
 *                       .js file via `file: string` instead of inlining code.
 *                       Same metadata shape otherwise.
 */

import * as z from 'zod';

// ─── Shared sub-schemas ──────────────────────────────────────────────────────
// Pulled out so the two parent schemas stay byte-for-byte consistent on the
// fields they share. The only difference between pack entries and manifest
// entries is `code` vs `file`.

const BindingSchema = z.object({
  type: z.enum(['character', 'chat']),
  characterId: z.string().optional(),
  chatId: z.string().optional(),
  displayName: z.string().default(''),
});

const MetadataSchema = z.object({
  description: z.string().optional(),
  author: z.string().optional(),
  version: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

// ─── Canonical pack format (in-app import/export) ────────────────────────────

const ScriptPackEntrySchema = z.object({
  name: z.string().min(1).max(200),
  code: z.string(),
  type: z.enum(['trigger', 'library']),
  triggers: z.array(z.string()).optional(),
  bindings: z.array(BindingSchema).optional(),
  folder: z.string().optional(),
  metadata: MetadataSchema.optional(),
});

export const ScriptPackSchema = z.object({
  format: z.literal('lumiscript-pack-v1'),
  exportedAt: z.string(),
  scripts: z.array(ScriptPackEntrySchema).min(1).max(100),
});

// ─── Manifest format (expanded-directory workflow) ───────────────────────────

const ManifestEntrySchema = z.object({
  name: z.string().min(1).max(200),
  /** Relative path to the .js file containing this script's code. */
  file: z.string().min(1),
  type: z.enum(['trigger', 'library']),
  triggers: z.array(z.string()).optional(),
  bindings: z.array(BindingSchema).optional(),
  folder: z.string().optional(),
  metadata: MetadataSchema.optional(),
});

export const ManifestSchema = z.object({
  format: z.literal('lumiscript-manifest-v1'),
  // Provenance fields — all optional so a hand-written manifest stays valid.
  sourcePack: z.string().optional(),
  sourceFormat: z.string().optional(),
  exportedAt: z.string().optional(),
  convertedAt: z.string().optional(),
  scripts: z.array(ManifestEntrySchema).min(1).max(100),
});
