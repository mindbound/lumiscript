# API stability (v1.0)

This is LumiScript's pre-GA **API-stability sign-off** — the record of what the v1.0 SemVer commitment covers, what it deliberately does not, and the contract decisions taken during the pre-lock audit. After v1.0.0 is tagged, the surfaces frozen here change only under the rules below.

## What "stable" means

From v1.0.0 onward, LumiScript follows strict SemVer on its **public contract** (defined below):

- **Additive changes** (new `api.*` methods/namespaces, new optional fields, new events, new optional message fields, new permissions) ship in **minor** releases — they don't break existing scripts or data.
- **Breaking changes** — removing or renaming a public method/field/event/permission, changing a signature or return shape, or changing the meaning of a persisted field — require a **major** bump (v2.0).
- Bug fixes and internal refactors that preserve the contract ship in **patch** releases.

"Breaking" is judged against the surfaces below, not internals.

## The frozen public contract

1. **The `api.*` surface** — the script-facing API. Source of truth: `src/types/script.ts` (`LumiScriptAPI`). Casing, signatures, return shapes (incl. `null`-on-absent vs throw), and Promise-ness are part of the contract. (`src/types/editor-lib.ts` is a hand-maintained Monaco mirror — see drift note below.)
2. **Persisted data schemas** — everything written to `spindle.userStorage`: `scripts.json` (`Script`), settings (`LumiScriptSettings`), assistant threads + index, assistant memory (`MemoryNote`), `api.db` collection records (`DbRecord` reserved fields + the on-disk path templates), per-character variables. See the compatibility guarantee below.
3. **The trigger/event model** — the editor-UI event-wiring model, the recognized Lumiverse + `ls:*` event names, and each event's `data` payload shape (canonical list: the **Lumiverse Events** Reference section). Script bodies run as the handler; `data.__event` carries the name.
4. **Frontmatter directives** — exactly one is parsed at runtime: `// @ls:reload-on-edit` (opt-in hot-reload). `@triggers` / `@name` / `@version` etc. are documentary (no event-wiring effect).
5. **The permission model** — the extension-level permissions declared in `spindle.json` and the `api.*` → permission mapping. Permissions are extension-level (not per-script); the declared set is considered final for 1.0.
6. **IPC envelopes** (`src/types/script-runner-ipc.ts`, `src/types/messages.ts`) — internal: both processes ship in one build, so these are not a cross-version public contract, but the child→parent envelope is Zod-guarded with a compile-time drift assertion.

## NOT covered by the freeze — experimental tier

- **`api.memories.*`** and **`api.council.*`** are thin pass-throughs that alias host-owned `lumiverse-spindle-types` DTOs directly (one of which carries upstream `@deprecated` fields). Their shapes are owned by the Spindle host, not LumiScript, so **they track the host and are exempt from the 1.0 stability freeze** — a `lumiverse-spindle-types` bump may change them without a LumiScript major bump. Treat them as the most likely surfaces to evolve. (The rest of `api.*` either owns its types locally or is a structurally-identical thin wrapper that LumiScript controls.)

## Persisted-schema compatibility guarantee

Every on-disk surface loads through a **permissive path that tolerates both unknown and missing fields** — there is intentionally **no `schemaVersion`** and no strict-reject validation on load. Consequences (relied upon, locked):

- A file written by a newer build stays readable by an older one (extra fields ignored), and vice-versa (missing optional fields → `undefined`, handled).
- Schemas evolve **additively only**; a breaking on-disk format change would be a major-version event with an explicit migration.
- `api.db`'s only validation is the caller's opt-in write-time Zod schema; reads are never validated, and LumiScript's reserved record fields (`id`/`createdAt`/`updatedAt`) survive even a strict user schema.

## Decisions taken during the audit

- **`api.tools.invoke` / `list` / `unregister` are intentionally ungated** — only `register` checks the `tools` permission. Rationale: registration is the privileged act; `invoke` runs an already-vetted handler, and `list`/`unregister` are read-only / owner-scoped. Locked as-is.
- **The assistant thread persists `contextScriptIds` and `contextFilePaths` as parallel optional `string[]`s.** Locked. A future remote-source attachment can be added as a *third* additive optional field; convergence to one typed `contextItems` list is a read-time projection — no migration, no break.
- **Positional signatures accepted as-is** — `api.ui.toast`, `api.ui.pushNotification`, `api.utils.http.post`/`put`, and the `id/content + options` injectors keep a trailing options object, so they can still grow named options without a break. Not reshaped.
- **Cosmetic naming quirks accepted for 1.0** — `ToolDefinition.display_name` / `council_eligible` (snake_case), `api.characters.getByName` (vs the `findByName` used by 5 other namespaces), and `WorldInfoEntry.keysecondary` (ST-legacy). These are *not* worth churning the public surface + tool IPC right before lock. If they ever warrant cleanup, the clean names (`displayName`, `findByName`, `keySecondary`) can be **added additively** post-1.0 (non-breaking); only removing the old names needs a major.
- **`api.db` on-disk path templates + the collection-name regex are frozen invariants** — `db/{scope}/…/{name}.json` shapes are hard-coded in both the writer and the admin reader; changing them post-lock would orphan existing collections.
- **The parent→child IPC envelope is not Zod-guarded** (only child→parent is). Accepted: both sides ship in one bundle and the parent is the trusted host; the threat model is a hostile *child*, which is the validated direction.

## Engine divergence — QuickJS isolate (opt-in)

Scripts run under the **AsyncFunction** engine by default. A second, opt-in **QuickJS-WASM isolate** engine is behaviorally faithful to it across the observable surface (proven by the dual-engine parity harness — register-IPC and handler-fire behavior are identical), with a few divergences worth knowing:

- **`api.tools.invoke('X')` where the *calling* script itself registered tool `X`** returns the handler's value under AsyncFunction, but throws a catchable `ReentrantToolInvokeError` under QuickJS. Under QuickJS a script's runs and handler-fires serialize on a single per-script lock, so a script awaiting its **own** tool mid-run would deadlock — the engine rejects it cleanly instead. This is architectural (there is no in-engine fix on the shared-module design), but narrow: it is the **only** re-entrancy divergence, and the common cases are unaffected — registering, listing, the **LLM/Council invoking your tool**, and **another script invoking your tool** are all identical across engines. It's also strictly safer than the alternative it replaced (a hang that would take down the whole child process).

  **Portable pattern** — extract the logic into a function and call it directly instead of self-invoking (this also skips an unnecessary dispatch round-trip, so it's better code on either engine):

  ```js
  // Instead of a script invoking its OWN tool (throws under QuickJS):
  //   const r = await api.tools.invoke('summarize', { text });
  const summarize = async (args) => await api.llm.generate(/* … */);
  api.tools.register('summarize', toolDef, summarize); // thin wrapper still exposed to the LLM
  const r = await summarize({ text });                 // call the function directly — works on both engines
  ```

- **Bare `fetch` (an `allowDangerous` feature) supports a SUBSET of the platform API under QuickJS.** The AsyncFunction engine hands `allowDangerous` scripts the host's real `fetch`; the QuickJS engine bridges a faithful-but-partial `fetch` over its VM boundary. Supported: the request `method`, `headers`, `body`, and `signal` (`AbortController`/`AbortSignal`), plus the `RequestInit` fields `mode`, `credentials`, `cache`, `redirect`, `referrer`, `referrerPolicy`, `integrity`, `keepalive`; and on the response `ok` / `status` / `statusText`, `headers.get` / `.has` / `.forEach`, and the body readers `text()` / `json()` / `arrayBuffer()` / `bytes()`. NOT bridged: `Response.blob()` / `formData()` / `clone()`, the streaming `Response.body`, and passing a `Request` object (pass a URL string + an init object). An unsupported `RequestInit` field is simply not forwarded; an unsupported `Response` method is absent. **Prefer `api.utils.http.*`** (gated, identical on both engines) unless you specifically need bare `fetch`.

- **`api.llm.generateStream(messages, { signal })` rejects an `AbortSignal` under QuickJS.** The AsyncFunction engine honours it (aborting the stream); the QuickJS engine throws a clear "AbortSignal is not yet supported in the QuickJS engine" up front rather than silently ignoring it (a later phase adds general `AbortSignal` marshaling). Cancel a QuickJS stream by breaking the `for await` (or letting it finish); the upstream generation is cancelled either way.

## Known drift risk

`src/types/editor-lib.ts` is a **hand-maintained string copy** of the `api.*` surface for Monaco — not generated. It is spot-checked in sync today, but the manual model means the editor's type hints can silently diverge from the frozen contract. Keep it updated alongside `script.ts`; a generated artifact is a post-1.0 candidate.

## Provenance

Surfaced by a three-way parallel audit (2026-05-29) covering (1) the public `api.*` surface, (2) persisted schemas + IPC, (3) the trigger/event/permission contracts. Findings were verified against source before action; two "must-fix" findings (a corpus directive claim, an event-set "divergence") were downgraded on verification as essentially correct / intentional-by-design. The remaining accuracy fixes (a scoped corpus correction, two Reference event annotations, hygiene) shipped alongside this memo; the cosmetic renames were deferred by decision (see above).
