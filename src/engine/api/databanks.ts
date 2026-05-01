/**
 * ============================================================================
 * LUMISCRIPT — DATABANKS API
 * ============================================================================
 * Full CRUD over user databanks (vectorised document collections) plus
 * per-document upload, fetch, rename, reprocess, and delete. Requires the
 * "databanks" permission.
 *
 * Exposed as `api.databanks.*` and `api.databanks.documents.*` — a new
 * capability with no TavernScript equivalent. Maps 1:1 onto Lumiverse's
 * `spindle.databanks.*` surface (added in lumiverse-spindle-types 0.4.48).
 *
 * Convenience layered on top of the Spindle base:
 *   - `findByName(name, scope?)` and `documents.findByName(databankId, name)`
 *     — paginated `list()` + locally-applied filter. O(banks) / O(documents).
 *   - `documents.create(input)` accepts `data: string | Uint8Array`. Strings
 *     are UTF-8 encoded internally; this matches the supported-text-only
 *     upload contract (Lumiverse rejects non-text formats anyway).
 *   - `documents.waitUntilReady(documentId, opts?)` polls `documents.get()`
 *     at `pollIntervalMs` (default 500ms) until `status === 'ready'`. Throws
 *     on timeout, error status, or mid-poll deletion.
 *
 * DTO snake_case is translated to LumiScript-flavoured camelCase at this
 * layer (matches `personas`, `characters`, etc.).
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type {
  DatabankInfo,
  DatabankDocumentInfo,
  DatabankScope,
  DatabankCreateInput,
  DatabankUpdateInput,
  DatabankDocumentCreateInput,
  DatabankDocumentUpdateInput,
  DatabankWaitUntilReadyOptions,
  DatabanksAPI,
} from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';

// ─── Shared paging defaults ──────────────────────────────────────────────────

/**
 * Default page size for `findByName` lookups. Matches Lumiverse's default
 * `list({ limit })` (50). Iterated up to 200 (Lumiverse's max) before
 * falling back to a final unbounded scan via `total`.
 */
const FIND_BY_NAME_PAGE_SIZE = 100;

/**
 * Cap on how many records `findByName` will scan before giving up.
 * Practical safeguard against pathological databank/document counts.
 * Adjust upward if real-world usage hits the cap.
 */
const FIND_BY_NAME_HARD_CAP = 1000;

// ─── DatabankDTO → DatabankInfo mapping ──────────────────────────────────────

function mapDatabank(
  dto: import('lumiverse-spindle-types').DatabankDTO,
): DatabankInfo {
  return {
    id:            dto.id,
    name:          dto.name,
    description:   dto.description,
    scope:         dto.scope,
    scopeId:       dto.scope_id,
    enabled:       dto.enabled,
    metadata:      dto.metadata,
    ...(dto.document_count !== undefined ? { documentCount: dto.document_count } : {}),
    createdAt:     dto.created_at,
    updatedAt:     dto.updated_at,
  };
}

function mapDocument(
  dto: import('lumiverse-spindle-types').DatabankDocumentDTO,
): DatabankDocumentInfo {
  return {
    id:            dto.id,
    databankId:    dto.databank_id,
    name:          dto.name,
    slug:          dto.slug,
    mimeType:      dto.mime_type,
    fileSize:      dto.file_size,
    contentHash:   dto.content_hash,
    totalChunks:   dto.total_chunks,
    status:        dto.status,
    errorMessage:  dto.error_message,
    metadata:      dto.metadata,
    createdAt:     dto.created_at,
    updatedAt:     dto.updated_at,
  };
}

// ─── Input → DTO mapping ─────────────────────────────────────────────────────

function mapCreateInput(
  input: DatabankCreateInput,
): import('lumiverse-spindle-types').DatabankCreateDTO {
  const dto: import('lumiverse-spindle-types').DatabankCreateDTO = {
    name:  input.name,
    scope: input.scope,
  };
  if (input.description !== undefined) dto.description = input.description;
  if (input.scopeId !== undefined)     dto.scope_id    = input.scopeId;
  return dto;
}

function mapUpdateInput(
  input: DatabankUpdateInput,
): import('lumiverse-spindle-types').DatabankUpdateDTO {
  const dto: import('lumiverse-spindle-types').DatabankUpdateDTO = {};
  if (input.name        !== undefined) dto.name        = input.name;
  if (input.description !== undefined) dto.description = input.description;
  if (input.enabled     !== undefined) dto.enabled     = input.enabled;
  return dto;
}

function mapDocumentCreateInput(
  input: DatabankDocumentCreateInput,
): import('lumiverse-spindle-types').DatabankDocumentCreateDTO {
  // Convenience: accept string OR Uint8Array. Strings are UTF-8 encoded
  // here so the user-facing surface doesn't force `new TextEncoder()` for
  // every text upload. Lumiverse only accepts text-oriented uploads anyway,
  // so encoding ambiguity is a non-issue.
  const data = typeof input.data === 'string'
    ? new TextEncoder().encode(input.data)
    : input.data;

  const dto: import('lumiverse-spindle-types').DatabankDocumentCreateDTO = {
    data,
    filename: input.filename,
  };
  if (input.mimeType !== undefined) dto.mime_type = input.mimeType;
  if (input.name     !== undefined) dto.name      = input.name;
  return dto;
}

function mapDocumentUpdateInput(
  input: DatabankDocumentUpdateInput,
): import('lumiverse-spindle-types').DatabankDocumentUpdateDTO {
  return { name: input.name };
}

// ─── API builder ─────────────────────────────────────────────────────────────

export function buildDatabanksAPI(deps: APIBuildDeps): DatabanksAPI {
  const { script, hasPerm, userId } = deps;
  const uid = userId ?? undefined;

  // ── findByName helper (databanks) ─────────────────────────────────────────
  //
  // Pages through `spindle.databanks.list()` and applies the name filter
  // locally. Returns the first match or null. Stops at FIND_BY_NAME_HARD_CAP
  // entries scanned to bound worst-case latency on pathological accounts;
  // raise that constant if real-world usage warrants.
  async function findDatabankByName(
    name: string,
    scope?: DatabankScope,
  ): Promise<DatabankInfo | null> {
    let offset = 0;
    let scanned = 0;
    while (scanned < FIND_BY_NAME_HARD_CAP) {
      const opts: Parameters<typeof spindle.databanks.list>[0] = {
        limit: FIND_BY_NAME_PAGE_SIZE,
        offset,
        userId: uid,
      };
      if (scope !== undefined) opts.scope = scope;
      const page = await spindle.databanks.list(opts);
      for (const dto of page.data) {
        if (dto.name === name) return mapDatabank(dto);
      }
      scanned += page.data.length;
      // No more pages.
      if (page.data.length === 0)             break;
      if (offset + page.data.length >= page.total) break;
      offset += page.data.length;
    }
    return null;
  }

  async function findDocumentByName(
    databankId: string,
    name: string,
  ): Promise<DatabankDocumentInfo | null> {
    let offset = 0;
    let scanned = 0;
    while (scanned < FIND_BY_NAME_HARD_CAP) {
      const page = await spindle.databanks.documents.list(databankId, {
        limit: FIND_BY_NAME_PAGE_SIZE,
        offset,
        userId: uid,
      });
      for (const dto of page.data) {
        if (dto.name === name) return mapDocument(dto);
      }
      scanned += page.data.length;
      if (page.data.length === 0)             break;
      if (offset + page.data.length >= page.total) break;
      offset += page.data.length;
    }
    return null;
  }

  // ── waitUntilReady (documents) ────────────────────────────────────────────
  //
  // Poll spindle.databanks.documents.get(documentId) at pollIntervalMs until
  // status reaches 'ready'. Throws on:
  //   - 'error' status (with errorMessage in the thrown Error)
  //   - timeoutMs elapsed (default 60s)
  //   - document deleted mid-poll (get() returned null)
  async function waitUntilReady(
    documentId: string,
    options?: DatabankWaitUntilReadyOptions,
  ): Promise<DatabankDocumentInfo> {
    const timeoutMs      = options?.timeoutMs      ?? 60_000;
    const pollIntervalMs = options?.pollIntervalMs ?? 500;
    const deadline       = Date.now() + timeoutMs;

    // Fast path: check once before waiting at all. Avoids a wasted
    // pollIntervalMs delay for documents that are already ready.
    let dto = await spindle.databanks.documents.get(documentId, uid);
    while (true) {
      if (dto === null) {
        throw new Error(
          `api.databanks.documents.waitUntilReady: document ${documentId} disappeared (deleted?) before reaching 'ready'`,
        );
      }
      if (dto.status === 'ready') return mapDocument(dto);
      if (dto.status === 'error') {
        throw new Error(
          `api.databanks.documents.waitUntilReady: document ${documentId} failed processing: ${dto.error_message ?? '(no error message)'}`,
        );
      }
      // pending or processing — wait, then re-check.
      const remaining = deadline - Date.now();
      if (remaining <= 0) {
        throw new Error(
          `api.databanks.documents.waitUntilReady: document ${documentId} did not reach 'ready' within ${timeoutMs}ms (last status: ${dto.status})`,
        );
      }
      const sleepFor = Math.min(pollIntervalMs, remaining);
      await new Promise<void>((resolve) => setTimeout(resolve, sleepFor));
      dto = await spindle.databanks.documents.get(documentId, uid);
    }
  }

  return {
    async list(options) {
      assertPerm('databanks', hasPerm, script.name);
      const opts: Parameters<typeof spindle.databanks.list>[0] = { userId: uid };
      if (options?.limit   !== undefined) opts.limit   = options.limit;
      if (options?.offset  !== undefined) opts.offset  = options.offset;
      if (options?.scope   !== undefined) opts.scope   = options.scope;
      if (options?.scopeId !== undefined) opts.scopeId = options.scopeId;
      const result = await spindle.databanks.list(opts);
      return { data: result.data.map(mapDatabank), total: result.total };
    },

    async get(databankId) {
      assertPerm('databanks', hasPerm, script.name);
      const dto = await spindle.databanks.get(databankId, uid);
      return dto ? mapDatabank(dto) : null;
    },

    async findByName(name, scope) {
      assertPerm('databanks', hasPerm, script.name);
      return findDatabankByName(name, scope);
    },

    async create(input) {
      assertPerm('databanks', hasPerm, script.name);
      const dto = await spindle.databanks.create(mapCreateInput(input), uid);
      return mapDatabank(dto);
    },

    async update(databankId, input) {
      assertPerm('databanks', hasPerm, script.name);
      const dto = await spindle.databanks.update(databankId, mapUpdateInput(input), uid);
      return mapDatabank(dto);
    },

    async delete(databankId) {
      assertPerm('databanks', hasPerm, script.name);
      return spindle.databanks.delete(databankId, uid);
    },

    documents: {
      async list(databankId, options) {
        assertPerm('databanks', hasPerm, script.name);
        const opts: Parameters<typeof spindle.databanks.documents.list>[1] = { userId: uid };
        if (options?.limit  !== undefined) opts.limit  = options.limit;
        if (options?.offset !== undefined) opts.offset = options.offset;
        const result = await spindle.databanks.documents.list(databankId, opts);
        return { data: result.data.map(mapDocument), total: result.total };
      },

      async get(documentId) {
        assertPerm('databanks', hasPerm, script.name);
        const dto = await spindle.databanks.documents.get(documentId, uid);
        return dto ? mapDocument(dto) : null;
      },

      async findByName(databankId, name) {
        assertPerm('databanks', hasPerm, script.name);
        return findDocumentByName(databankId, name);
      },

      async create(databankId, input) {
        assertPerm('databanks', hasPerm, script.name);
        const dto = await spindle.databanks.documents.create(databankId, mapDocumentCreateInput(input), uid);
        return mapDocument(dto);
      },

      async update(documentId, input) {
        assertPerm('databanks', hasPerm, script.name);
        const dto = await spindle.databanks.documents.update(documentId, mapDocumentUpdateInput(input), uid);
        return mapDocument(dto);
      },

      async delete(documentId) {
        assertPerm('databanks', hasPerm, script.name);
        return spindle.databanks.documents.delete(documentId, uid);
      },

      async getContent(documentId) {
        assertPerm('databanks', hasPerm, script.name);
        return spindle.databanks.documents.getContent(documentId, uid);
      },

      async reprocess(documentId) {
        assertPerm('databanks', hasPerm, script.name);
        return spindle.databanks.documents.reprocess(documentId, uid);
      },

      async waitUntilReady(documentId, options) {
        assertPerm('databanks', hasPerm, script.name);
        return waitUntilReady(documentId, options);
      },
    },
  };
}
