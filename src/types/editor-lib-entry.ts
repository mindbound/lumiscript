/**
 * Curated entry for the Monaco-mirror generator (`scripts/gen-editor-lib.ts`).
 *
 * `dts-bundle-generator` rolls up the transitive `.d.ts` closure of these exports
 * into one self-contained declaration bundle, which becomes the `api`/`script`
 * type surface inside `src/types/editor-lib.ts`. Because it's generated from the
 * SAME `script.ts` the runtime uses, the editor's IntelliSense can never drift
 * from the frozen `api.*` contract.
 *
 * Add a type here ONLY if it's script-facing AND not already reachable from
 * `LumiScriptAPI` (which pulls in the bulk of the surface transitively). The
 * editor-only overlay (the minimal Zod shim, the `ls:*` library overloads, the
 * ambient-globals block) lives in `scripts/editor-lib-fragments/`, not here.
 */
// NOTE: `ScriptNamespace` (the `script` global) is intentionally NOT exported here —
// it carries editor-only `ls:*` `require()` overloads, so it's kept hand-authored in
// `scripts/editor-lib-fragments/03-script-and-ls.d.ts` alongside those overloads.
export type {
  LumiScriptAPI,   // the `api` global — the entire api.* surface
  MacroContext,    // macro-handler ctx (also reachable via api.macros.register)
  MessageTagEvent, // chat.onMessageTag event (also reachable via api.chat.onMessageTag)
} from './script.js';
