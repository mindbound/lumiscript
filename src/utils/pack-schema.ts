/**
 * ============================================================================
 * LUMISCRIPT — SCRIPT PACK VALIDATION SCHEMA
 * ============================================================================
 * Zod schema for validating pack.json contents during ZIP import.
 * Rejects malformed packs before data reaches the backend.
 */

import * as z from 'zod';

const ScriptPackEntrySchema = z.object({
  name: z.string().min(1).max(200),
  code: z.string(),
  type: z.enum(['trigger', 'library']),
  triggers: z.array(z.string()).optional(),
  bindings: z.array(z.object({
    type: z.enum(['character', 'chat']),
    characterId: z.string().optional(),
    chatId: z.string().optional(),
    displayName: z.string().default(''),
  })).optional(),
  folder: z.string().optional(),
  metadata: z.object({
    description: z.string().optional(),
    author: z.string().optional(),
    version: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }).optional(),
});

export const ScriptPackSchema = z.object({
  format: z.literal('lumiscript-pack-v1'),
  exportedAt: z.string(),
  scripts: z.array(ScriptPackEntrySchema).min(1).max(100),
});
