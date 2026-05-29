/**
 * Zod runtime validation schemas for the `ChildToParentMessage` discriminated
 * union defined in `script-runner-ipc.ts`. Phase 3c / MED-04 defence-in-depth.
 *
 * **Source of truth split:**
 *   - TypeScript types in `script-runner-ipc.ts` = compile-time IPC contract.
 *   - Zod schemas in this file                   = runtime validation against
 *                                                   the same contract.
 *
 * If you add/remove/change a `ChildToParentMessage` variant in `*-ipc.ts`,
 * update the matching schema here. Drift between the two is a regression —
 * the `host-dispatcher.test.ts` IPC-validation fuzz suite catches it.
 *
 * **Validation policy** (per user / audit-response design walkthrough):
 *   - **Strict object parsing** (`.strict()`): every schema rejects unknown
 *     keys. Forward-compatibility cost is acceptable — we ship parent
 *     updates before child updates so any new field lands typed in both
 *     places before crossing the IPC wire.
 *   - **Drop-on-fail** at the dispatch boundary: `handleChildMessage` logs
 *     a `spindle.log.warn` with the validation issue path and returns
 *     without dispatching the message. Per-handler validation that already
 *     exists stays in place as defence-in-depth.
 *   - **Nested option/definition bags use `z.unknown()`** rather than full
 *     deep schemas. The auditor's intent (MED-04 §4.11) is catching malformed
 *     IPC envelopes; deep-validating MacroDefinition / ToolDefinition /
 *     DOMListenOptions / etc. is the job of the existing per-handler code
 *     that consumes them. Adding deep schemas here would double the surface
 *     for drift without proportional security gain.
 *
 * v1.0.0-rc.7+.
 */

import * as z from 'zod';
import type { ChildToParentMessage } from './script-runner-ipc.js';

// ─── Shared primitive schemas ───────────────────────────────────────────────

/**
 * Categories of host-resident objects that can be referenced by a `HandleRef`
 * on the wire. Mirrors `HandleKind` in `script-runner-ipc.ts:88-103`.
 */
const HandleKindSchema = z.enum([
  'Collection',
  'DOMHandle',
  'CollapsibleDOMHandle',
  'ProgressBarHandle',
  'RegisteredMacroHandle',
  'RegisteredToolHandle',
  'RegisteredDrawerTab',
  'RegisteredInputBarAction',
  'RegisteredCommandHandle',
  'RegisteredFloatWidget',
  'BroadcastSubscription',
  'MacroInterceptorHandle',
  'ContentProcessorHandle',
  'StyleHandle',
  'EnclaveHandle',
  'MountedComponent',
]);

/**
 * Function-handler kinds. Mirrors `HandlerKind` in `script-runner-ipc.ts:250-263`.
 * Used by `UnregisterHandler.kind` (the `RegisterHandler` discriminated union
 * uses a more restricted subset — see per-kind schemas below).
 */
const HandlerKindSchema = z.enum([
  'macro',
  'tool',
  'commandsOnInvoked',
  'contentProcessor',
  'macroInterceptor',
  'worldInfoInterceptor',
  'domEventListener',
  'domDelegate',
  'inputBarActionClick',
  'floatWidgetDragEnd',
  'drawerTabActivate',
  'rpc',
  'oauthCallback',
  'componentCallback',
  'uiKeyboardChange',
  'uiDrawerChange',
  'uiSettingsChange',
]);

/** Wire format for a host-resident object handle. Mirrors `HandleRef`. */
const HandleRefSchema = z.object({
  __handleRef: z.literal(true),
  id:          z.string(),
  kind:        HandleKindSchema,
}).strict();

/** Serialized form of a thrown error. Mirrors `SerializedError`. */
const SerializedErrorSchema = z.object({
  name:    z.string(),
  message: z.string(),
  stack:   z.string().optional(),
}).strict();

/** Console entry shape. Mirrors `ConsoleEntry` in `types/script.ts`. */
const ConsoleEntrySchema = z.object({
  timestamp: z.string(),
  type:      z.enum(['log', 'warn', 'error', 'info', 'success', 'separator', 'security']),
  message:   z.string(),
}).strict();

// ─── Per-message-type schemas (ChildToParentMessage) ────────────────────────

const ScriptRunningNoticeSchema = z.object({
  type:       z.literal('script-running'),
  runId:      z.string(),
  scriptId:   z.string(),
  scriptName: z.string(),
  startedAt:  z.number(),
}).strict();

const RunScriptResultSchema = z.object({
  type:       z.literal('run-result'),
  runId:      z.string(),
  scriptId:   z.string(),
  ok:         z.boolean(),
  value:      z.unknown().optional(),
  error:      SerializedErrorSchema.optional(),
  durationMs: z.number(),
}).strict();

const ApiProxyRequestSchema = z.object({
  type:          z.literal('api-request'),
  requestId:     z.string(),
  runId:         z.string(),
  scriptId:      z.string(),
  method:        z.string(),
  args:          z.array(z.unknown()),
  targetHandle:  HandleRefSchema.optional(),
  hasSignal:     z.boolean().optional(),
  _runIdSource:  z.enum(['context', 'latest', 'ctx']).optional(),
}).strict();

const AbortRequestSchema = z.object({
  type:      z.literal('abort-request'),
  requestId: z.string(),
}).strict();

// v1.0.0-rc.9 — streaming-IPC (api.llm.generateStream). `stream-request`
// mirrors `api-request` minus `targetHandle` (streaming has no handle-method
// form). `stream-cancel` mirrors `abort-request` (bare requestId envelope).
const StreamRequestSchema = z.object({
  type:          z.literal('stream-request'),
  requestId:     z.string(),
  runId:         z.string(),
  scriptId:      z.string(),
  method:        z.string(),
  args:          z.array(z.unknown()),
  hasSignal:     z.boolean().optional(),
  _runIdSource:  z.enum(['context', 'latest', 'ctx']).optional(),
}).strict();

const StreamCancelRequestSchema = z.object({
  type:      z.literal('stream-cancel'),
  requestId: z.string(),
}).strict();

const BroadcastSubscribeMessageSchema = z.object({
  type:     z.literal('broadcast-subscribe'),
  scriptId: z.string(),
  subId:    z.string(),
  event:    z.string(),
}).strict();

const BroadcastUnsubscribeMessageSchema = z.object({
  type:     z.literal('broadcast-unsubscribe'),
  scriptId: z.string(),
  subId:    z.string(),
}).strict();

const BroadcastHandlerStartedSchema = z.object({
  type:     z.literal('broadcast-handler-started'),
  scriptId: z.string(),
  subId:    z.string(),
  event:    z.string(),
}).strict();

const BroadcastHandlerFinishedOkSchema = z.object({
  type:       z.literal('broadcast-handler-finished'),
  scriptId:   z.string(),
  subId:      z.string(),
  event:      z.string(),
  durationMs: z.number(),
  ok:         z.literal(true),
}).strict();

const BroadcastHandlerFinishedErrSchema = z.object({
  type:       z.literal('broadcast-handler-finished'),
  scriptId:   z.string(),
  subId:      z.string(),
  event:      z.string(),
  durationMs: z.number(),
  ok:         z.literal(false),
  error:      z.string(),
}).strict();

const ConsoleEntryNoticeSchema = z.object({
  type:     z.literal('console-entry'),
  runId:    z.string(),
  scriptId: z.string(),
  entry:    ConsoleEntrySchema,
}).strict();

const UnregisterHandlerSchema = z.object({
  type:       z.literal('unregister-handler'),
  kind:       HandlerKindSchema,
  scriptId:   z.string(),
  handlerId:  z.string().optional(),
  name:       z.string().optional(),
}).strict();

const DiagnosticStatsResponseSchema = z.object({
  type:        z.literal('diagnostic-stats-response'),
  requestId:   z.string(),
  rss:         z.number(),
  heapTotal:   z.number(),
  heapUsed:    z.number(),
  external:    z.number(),
  cpuUserUs:   z.number(),
  cpuSystemUs: z.number(),
  uptimeSec:   z.number(),
}).strict();

const HandlerResultSchema = z.object({
  type:       z.literal('handler-result'),
  runId:      z.string(),
  ok:         z.boolean(),
  value:      z.unknown().optional(),
  error:      SerializedErrorSchema.optional(),
  durationMs: z.number(),
}).strict();

// ─── RegisterHandler — per-kind schemas (smaller discriminated union) ───────
//
// Each `register-handler` IPC has the same outer envelope (type, kind, runId,
// scriptId, handlerId, hasHandler) plus per-kind payload fields. The
// `RegisterHandler` discriminated union in `*-ipc.ts:608-797` enumerates 12
// kinds — NOT all 13 `HandlerKind` values (note: `rpc` registers via a
// different IPC path, not through `register-handler`).

const RegisterHandlerMacroSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('macro'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  name:       z.string(),
  def:        z.unknown(),  // MacroDefinition — validated by macro-store on apply
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerToolSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('tool'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  name:       z.string(),
  def:        z.unknown(),  // ToolDefinition — validated by tool-store on apply
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerCommandsOnInvokedSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('commandsOnInvoked'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerMacroInterceptorSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('macroInterceptor'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  options:    z.unknown().optional(),  // MacroInterceptorOptions
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerContentProcessorSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('contentProcessor'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  options:    z.unknown().optional(),  // MessageContentProcessorOptions
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerWorldInfoInterceptorSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('worldInfoInterceptor'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  options:    z.unknown().optional(),  // WorldInfoInterceptorOptions
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerDomEventListenerSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('domEventListener'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  elementId:  z.string(),
  event:      z.string(),
  options:    z.unknown().optional(),  // DOMListenOptions
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerDomDelegateSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('domDelegate'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  selector:   z.string(),
  event:      z.string(),
  options:    z.unknown().optional(),  // DOMDelegateOptions
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerInputBarActionClickSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('inputBarActionClick'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  actionId:   z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerFloatWidgetDragEndSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('floatWidgetDragEnd'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  widgetId:   z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerDrawerTabActivateSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('drawerTabActivate'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  tabId:      z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerOauthCallbackSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('oauthCallback'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  hasHandler: z.literal(true),
}).strict();

// v1.0.0-rc.9 — api.ui.events.on*Change subscriptions. Same envelope as
// commandsOnInvoked (no per-handle id); the fired handler receives the changed
// UI state as its arg.
const RegisterHandlerUiKeyboardChangeSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('uiKeyboardChange'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerUiDrawerChangeSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('uiDrawerChange'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerUiSettingsChangeSchema = z.object({
  type:       z.literal('register-handler'),
  kind:       z.literal('uiSettingsChange'),
  runId:      z.string(),
  scriptId:   z.string(),
  handlerId:  z.string(),
  hasHandler: z.literal(true),
}).strict();

const RegisterHandlerSchema = z.discriminatedUnion('kind', [
  RegisterHandlerMacroSchema,
  RegisterHandlerToolSchema,
  RegisterHandlerCommandsOnInvokedSchema,
  RegisterHandlerMacroInterceptorSchema,
  RegisterHandlerContentProcessorSchema,
  RegisterHandlerWorldInfoInterceptorSchema,
  RegisterHandlerDomEventListenerSchema,
  RegisterHandlerDomDelegateSchema,
  RegisterHandlerInputBarActionClickSchema,
  RegisterHandlerFloatWidgetDragEndSchema,
  RegisterHandlerDrawerTabActivateSchema,
  RegisterHandlerOauthCallbackSchema,
  RegisterHandlerUiKeyboardChangeSchema,
  RegisterHandlerUiDrawerChangeSchema,
  RegisterHandlerUiSettingsChangeSchema,
]);

// ─── Top-level ChildToParentMessage discriminated union ─────────────────────

/**
 * Top-level Zod schema for every legal `ChildToParentMessage`. Validated at
 * the IPC dispatch boundary in `host-dispatcher.ts:handleChildMessage` —
 * messages that don't match are logged with the validation issue path and
 * silently dropped (no handler dispatch).
 *
 * Uses `z.union` rather than `z.discriminatedUnion('type', …)` because the
 * nested `RegisterHandlerSchema` is itself a discriminated union (by `kind`)
 * whose variants all share `type: 'register-handler'` — Zod can't enumerate
 * unique `type` values across the outer union when one option's discriminator
 * collides like that. The `z.union` cost is each variant tried in declaration
 * order via try-parse; for our IPC validation (sub-millisecond budget per
 * message) the difference vs. discriminatedUnion is unobservable.
 * `BroadcastHandlerFinishedOk` and `BroadcastHandlerFinishedErr` share their
 * `type` field for the same reason.
 *
 * The bulk of error-noise-on-bad-input still surfaces useful paths because
 * each variant's `.strict()` object schema raises specific "unrecognized key"
 * or "expected X, received Y" issues that point at the wrong-shaped field —
 * the `handleChildMessage` post-mortem log reads them off `error.issues[0]`.
 */
/**
 * Walk a `ZodError.issues` array (including nested `invalid_union` branch
 * errors) and return the issue with the deepest `path` — i.e. the narrowest
 * field-level diagnostic available. Used by `handleChildMessage` for the
 * drop-warn log so post-mortems read the offending field name rather than
 * a "(root): Invalid input" generic message.
 *
 * Zod v4 wraps union failures in a top-level `invalid_union` issue whose
 * `errors` field is `[issuesArrayPerBranch][]`. Every branch independently
 * reports a discriminator-mismatch on `path: ['type']` plus per-field issues
 * for whatever else fails. The branch whose discriminator matched the payload
 * yields the deepest, most specific path; branches that didn't match yield
 * shallow `path: ['type']` noise. Picking the deepest non-empty path is a
 * cheap heuristic that lands on the matched branch's real issue.
 *
 * Falls back to `(root)` when no issue has a path.
 */
export function findMostSpecificIpcIssue(
  issues: readonly { code?: string; path?: readonly PropertyKey[]; message?: string; errors?: unknown }[],
): { path: string; message: string } {
  let bestPath:    readonly PropertyKey[] | null = null;
  let bestMessage: string | undefined            = undefined;

  function walk(items: readonly { code?: string; path?: readonly PropertyKey[]; message?: string; errors?: unknown }[]): void {
    for (const issue of items) {
      if (issue.code === 'invalid_union' && Array.isArray(issue.errors)) {
        for (const branch of issue.errors) {
          if (Array.isArray(branch)) {
            walk(branch as readonly { code?: string; path?: readonly PropertyKey[]; message?: string; errors?: unknown }[]);
          }
        }
      } else if (issue.path && issue.path.length > 0) {
        if (bestPath === null || issue.path.length > bestPath.length) {
          bestPath    = issue.path;
          bestMessage = issue.message;
        }
      }
    }
  }
  walk(issues);

  if (bestPath !== null) {
    return {
      path:    (bestPath as readonly PropertyKey[]).map(p => String(p)).join('.'),
      message: bestMessage ?? 'unknown validation error',
    };
  }
  return {
    path:    '(root)',
    message: issues[0]?.message ?? 'unknown validation error',
  };
}

export const ChildToParentMessageSchema = z.union([
  ScriptRunningNoticeSchema,
  RunScriptResultSchema,
  ApiProxyRequestSchema,
  AbortRequestSchema,
  StreamRequestSchema,
  StreamCancelRequestSchema,
  BroadcastSubscribeMessageSchema,
  BroadcastUnsubscribeMessageSchema,
  BroadcastHandlerStartedSchema,
  BroadcastHandlerFinishedOkSchema,
  BroadcastHandlerFinishedErrSchema,
  ConsoleEntryNoticeSchema,
  RegisterHandlerSchema,
  UnregisterHandlerSchema,
  DiagnosticStatsResponseSchema,
  HandlerResultSchema,
]);

// ─── Compile-time drift guard (v1.0.0-rc.9) ─────────────────────────────────
//
// `ChildToParentMessageSchema` is a SEPARATE source of truth from the
// `ChildToParentMessage` TS union in `script-runner-ipc.ts`. A union member
// that lacks a matching schema branch is DROPPED at runtime by
// `handleChildMessage`'s `safeParse` gate — a silent hang (request dropped →
// no response → consumer awaits forever), invisible to both `tsc` and
// `bun test`. This exact gap shipped in rc.9 Track B: `stream-request` was
// added to the union + the message switch + everything else, but not this
// schema, so every `api.llm.generateStream` consumer hung on first iteration.
//
// The assertion below closes the gap by forcing the set of `type`
// discriminators the schema covers to EXACTLY equal the set the TS union
// declares. Add a `ChildToParentMessage` variant without a schema (or a
// schema branch without a union member) and this line fails to compile —
// drift becomes a `bun run typecheck` error instead of a runtime hang.
//
// If you land here via a compile error ("Type 'true' is not assignable to
// type 'never'"), the two sets have drifted: cross-check the union members
// in `ChildToParentMessageSchema` above against the `ChildToParentMessage`
// union in `script-runner-ipc.ts`. The missing/extra `type` literal is the
// culprit. Also add a happy-path case to
// `tests/script-runner/host-dispatcher-ipc-validation.test.ts`.
type SchemaCoveredMessageTypes = z.infer<typeof ChildToParentMessageSchema>['type'];
type UnionDeclaredMessageTypes = ChildToParentMessage['type'];

// `[A] extends [B]` is tuple-wrapped to suppress union distribution, so it
// asks "is every member of A also a member of B" as a whole-set comparison.
// The bidirectional form is exact set-equality.
type ExactlyEqual<A, B> = [A] extends [B] ? ([B] extends [A] ? true : never) : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _childToParentSchemaExhaustive: ExactlyEqual<
  SchemaCoveredMessageTypes,
  UnionDeclaredMessageTypes
> = true;
void _childToParentSchemaExhaustive;
