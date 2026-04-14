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

import type { LumiScriptAPI, ToolDefinition, ToolHandler, RegisteredToolInfo } from '../../types/script.js';
import type { APIBuildDeps } from './shared.js';
import { assertPerm } from './shared.js';
import { addTool, removeTool, getTool, listAll } from '../tool-store.js';
import { emit as busEmit } from '../broadcast-bus.js';

export function buildToolsAPI(
  deps: APIBuildDeps,
  getApi: () => LumiScriptAPI,
): LumiScriptAPI['tools'] {
  const { script, hasPerm, onToolsChanged } = deps;

  return {
    register(name: string, def: ToolDefinition, handler: ToolHandler): void {
      assertPerm('tools', hasPerm);

      // Wrap the user's handler so that api is injected at invocation time,
      // not at registration time. This breaks the circular dependency and
      // ensures the handler always receives the fully-constructed api object.
      const wrappedHandler = (args: Record<string, unknown>): string | Promise<string> =>
        handler(args, getApi());

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
      return Promise.resolve(entry.handler(args)).then(result => {
        busEmit('ls:tool:invoked', {
          name,
          args,
          result,
          scriptId: entry.scriptId,
          callMs:   Date.now() - start,
        });
        return result;
      });
    },
  };
}
