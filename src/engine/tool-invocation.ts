/**
 * ============================================================================
 * LUMISCRIPT — TOOL INVOCATION DISPATCH
 * ============================================================================
 * Handles Lumiverse's TOOL_INVOCATION event for tools registered through
 * `api.tools.register()`. Lives in its own module so the logic is directly
 * testable — the alternative is mocking a Spindle event bus.
 *
 * Contract (from `developer-docs/docs/backend-api/llm-tools.md`):
 *   The return value of the `spindle.on('TOOL_INVOCATION', ...)` callback
 *   becomes the tool's result string in Lumiverse's output pipeline. For
 *   Council-eligible tools this string lands in the Council deliberation
 *   block visible to the main LLM during generation. The worker-runtime
 *   awaits the callback's return, coerces to `String(val)`, and posts back
 *   `tool_invocation_result` with the matching requestId.
 *
 * Name resolution:
 *   - Council routes qualified names like "lumiscript:roll_dice".
 *   - Direct LLM function-calls use bare names.
 *   - We strip any "extensionId:" prefix so a single dispatch path covers both.
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { ToolInvocationPayloadDTO } from 'lumiverse-spindle-types';
import type { BackendToFrontend } from '../types/messages.js';
import type { ToolInvocationContext } from '../types/script.js';
import { getTool } from './tool-store.js';
import { emit as broadcastEmit } from './broadcast-bus.js';
import { executionStatusStore } from './execution-status.js';
import { generateUUID } from '../utils/uuid.js';

/**
 * Dispatch a TOOL_INVOCATION event to the tool's registered handler and
 * return the handler's string result. Worker-runtime forwards this to the
 * Council subsystem as `tool_invocation_result`.
 *
 * Rejects (throws) on handler errors — worker-runtime converts the rejection
 * into `tool_invocation_result { error }` on the host side. Before rethrowing,
 * the handler's owning script is marked as errored so the sidebar status dot
 * flips red, an `execution_ended` message is sent to the frontend (giving the
 * editor's console a matching entry), and a user-visible toast fires. This
 * mirrors the failure-surfacing pattern used by trigger-handler errors —
 * before this, tool-handler errors only appeared in the Council deliberation
 * panel, invisible to the LumiScript UI.
 */
export async function dispatchToolInvocation(event: unknown): Promise<string> {
  // Cast to the upstream DTO shape. `requestId` and `councilMember` landed in
  // spindle-types 0.4.25 (Lumiverse commit 8d310f8+); older hosts still send
  // `{ toolName, args }` only, which destructures safely to `undefined` for
  // the new fields. The runtime cast is safe for either shape.
  const payload = event as ToolInvocationPayloadDTO;
  const { toolName, args, councilMember, requestId } = payload;
  const bareName = toolName.includes(':') ? toolName.split(':').pop()! : toolName;

  const entry = getTool(bareName);
  if (!entry) {
    spindle.log.warn(`[LumiScript] TOOL_INVOCATION: no handler for tool '${bareName}'`);
    return '';
  }

  // Build the invocation context object that the user's ToolHandler receives
  // as its third argument. Both fields optional — pre-8d310f8 hosts and
  // non-Council invocation paths leave either or both undefined.
  const ctx: ToolInvocationContext = { requestId, councilMember };

  const start = Date.now();
  let result: string;
  try {
    result = await Promise.resolve(entry.handler(args, ctx));
  } catch (err) {
    const duration = Date.now() - start;
    const msg = err instanceof Error ? err.message : String(err);

    // Flip the owning script's status to error so the sidebar dot shows red
    // and the Status tab surfaces the failure.
    executionStatusStore.markError(entry.scriptId, duration, msg);

    // Emit the standard execution_started/_ended pair so the editor's console
    // picks up the failure the same way it picks up trigger-handler failures.
    // Tool invocations don't run inside `executeScript`, so we synthesize a
    // runId to correlate the two messages on the frontend side.
    const runId = generateUUID();
    const started: BackendToFrontend = {
      type: 'execution_started',
      scriptId: entry.scriptId,
      scriptName: entry.scriptName,
      runId,
    };
    const ended: BackendToFrontend = {
      type: 'execution_ended',
      scriptId: entry.scriptId,
      runId,
      success: false,
      duration,
      error: msg,
    };
    spindle.sendToFrontend(started);
    spindle.sendToFrontend(ended);

    // User-visible toast — mirrors the trigger-handler-failure toast so the
    // user notices even when the LumiScript panel isn't the active view.
    spindle.toast.error(msg, {
      title: `LumiScript — ${entry.scriptName}: ${bareName}`,
      duration: 10_000,
    });

    // Server-log audit line regardless of what anyone else sees.
    spindle.log.warn(
      `[LumiScript] Tool handler "${bareName}" in script "${entry.scriptName}" threw: ${msg}`,
    );

    // Rethrow so the worker-runtime reports tool_invocation_result.error
    // and Council records the failure in its deliberation panel.
    throw err;
  }

  broadcastEmit('ls:tool:invoked', {
    name:          bareName,
    args,
    result,
    scriptId:      entry.scriptId,
    callMs:        Date.now() - start,
    // `councilMember` is undefined for non-Council invocations. Included
    // explicitly so listeners can check for presence without guarding against
    // a missing key.
    councilMember,
  });
  return result;
}
