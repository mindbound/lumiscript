/**
 * ============================================================================
 * LUMISCRIPT — TOOLS API
 * ============================================================================
 * Implements api.tools — the LumiScript interface for registering LLM tools
 * that Lumiverse can invoke via Council (inline mode) or direct LLM
 * function-calling (inline tool calls from the primary LLM).
 *
 * Permission required: 'tools'
 *
 * Handler injection:
 *   The user's ToolHandler receives (args, api). The `api` object is injected
 *   lazily via the `getApi()` callback passed at build time, which avoids a
 *   circular dependency: api.tools is part of api, so api isn't fully
 *   constructed yet when buildToolsAPI() runs. The callback resolves to the
 *   completed api object at invocation time (never at build time).
 *
 * Invocation flow:
 *   Lumiverse → invokeExtensionTool('my_tool', args)
 *   → { type: "tool_invocation" } to LumiScript worker
 *   → backend.ts spindle.on('TOOL_INVOCATION') dispatch
 *   → toolStore.getTool(name).handler(args)        ← this module's wrapper
 *   → userHandler(args, getApi())                  ← user's function with api
 *   → string result back to Lumiverse
 */

declare const spindle: import('lumiverse-spindle-types').SpindleAPI;

import type { LumiScriptAPI, ToolDefinition, ToolHandler, ToolInvocationContext, RegisteredToolInfo } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';
import { addTool, removeTool, getTool, listAll } from '../tool-store.js';
import { emit as busEmit } from '../broadcast-bus.js';

export function buildToolsAPI(
  deps: APIBuildDeps,
  getApi: () => LumiScriptAPI,
): LumiScriptAPI['tools'] {
  const { script, hasPerm, onToolsChanged, toolsRegisteredThisRun } = deps;

  return {
    register(name: string, def: ToolDefinition, handler: ToolHandler): void {
      assertPerm('tools', hasPerm, script.name);

      // Wrap the user's handler so that api is injected at invocation time,
      // not at registration time. This breaks the circular dependency and
      // ensures the handler always receives the fully-constructed api object.
      // The optional `ctx` (invocation context — councilMember + requestId)
      // is forwarded through: populated when dispatched from TOOL_INVOCATION,
      // undefined when called via api.tools.invoke().
      const wrappedHandler = (
        args: Record<string, unknown>,
        ctx?: ToolInvocationContext,
      ): string | Promise<string> =>
        handler(args, getApi(), ctx);

      addTool({
        name,
        displayName:     def.display_name,
        description:     def.description,
        parameters:      def.parameters,
        councilEligible: def.council_eligible ?? false,
        handler:         wrappedHandler,
        scriptId:        script.id,
        scriptName:      script.name,
      });

      spindle.registerTool({
        name,
        display_name:    def.display_name,
        description:     def.description,
        parameters:      def.parameters as any,
        council_eligible: def.council_eligible ?? false,
      });
      // Track this name so the post-execution auto-cleanup pass can
      // diff it against the pre-run snapshot and unregister stale tools.
      toolsRegisteredThisRun?.add(name);
      // Notify Status tab immediately so the tool appears while the script runs.
      onToolsChanged?.();
      busEmit('ls:tool:registered', { name, scriptId: script.id });
    },

    unregister(name: string): void {
      // Only removes the entry if it is owned by this script.
      if (removeTool(name, script.id)) {
        spindle.unregisterTool(name);
        onToolsChanged?.();
        busEmit('ls:tool:unregistered', { name, scriptId: script.id });
      }
    },

    list(): RegisteredToolInfo[] {
      return listAll().map(e => ({
        name:             e.name,
        display_name:     e.displayName,
        description:      e.description,
        parameters:       e.parameters,
        council_eligible: e.councilEligible,
        scriptId:         e.scriptId,
        scriptName:       e.scriptName,
      }));
    },

    invoke(name: string, args: Record<string, unknown> = {}): Promise<string> {
      const entry = getTool(name);
      if (!entry) {
        return Promise.reject(new Error(`api.tools.invoke: no handler registered for tool '${name}'`));
      }
      const start = Date.now();
      // Script-to-script invocation — no Council context applies. We emit
      // `councilMember: undefined` for payload-shape parity with the
      // dispatchToolInvocation emit, so listeners get a consistent key set.
      // #11 P7-F4 (Tier 0) — stamp the CALLER's scriptId (this run's script) via an internal ctx marker
      // so the quickjs fire path can fast-reject a self-reentrant invoke (a script awaiting its OWN tool
      // would deadlock on its runChain). The host tool wrapper strips the marker before the child handler
      // sees ctx (stays undefined for api.tools.invoke). No effect under asyncfn (its fire never checks it).
      const invokeCtx: ToolInvocationContext = { __lsCallerScriptId: script.id };
      return Promise.resolve(entry.handler(args, invokeCtx)).then(result => {
        busEmit('ls:tool:invoked', {
          name,
          args,
          result,
          scriptId:      entry.scriptId,
          callMs:        Date.now() - start,
          councilMember: undefined,
        });
        return result;
      });
    },
  };
}
