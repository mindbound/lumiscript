import { FC, useState } from 'react';
import { Zap, Lock, Radio, List, Braces, Hash, Package, Blocks, Download, ChevronDown, ChevronRight } from 'lucide-react';
import { downloadReferenceMarkdown } from './markdown-export.js';

// ─── Section accordion ────────────────────────────────────────────────────────

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ icon, title, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="ls-ref-section">
      <button className="ls-ref-section-header" onClick={() => setOpen(v => !v)}>
        <span className="ls-ref-section-title">
          {icon}
          {title}
        </span>
        {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
      </button>
      {open && <div className="ls-ref-section-body">{children}</div>}
    </div>
  );
};

// ─── Small helpers ────────────────────────────────────────────────────────────

const Code: FC<{ children: string }> = ({ children }) => (
  <code className="ls-ref-code">{children}</code>
);

const Perm: FC<{ children: string }> = ({ children }) => (
  <span className="ls-ref-perm">{children}</span>
);

const NoPerm: FC = () => (
  <span className="ls-ref-perm ls-ref-perm-none">none</span>
);

const Silent: FC = () => (
  <span className="ls-ref-muted" style={{ fontStyle: 'italic' }}>silent</span>
);

/** Full-width group header row spanning all table columns. Accepts ReactNode
 *  so callers can compose a label with inline description (e.g. the
 *  LumiScriptMacrosTable's "Character Variables" group has an explanatory
 *  subline rendered alongside the short label). */
const GroupHeader: FC<{ label: React.ReactNode; cols: number }> = ({ label, cols }) => (
  <tr>
    <td colSpan={cols} className="ls-ref-group-header">{label}</td>
  </tr>
);

// ─── Events table ─────────────────────────────────────────────────────────────

export interface EventRow { name: string; group: string; payload: string; }

export const EVENTS: EventRow[] = [
  { group: 'LumiScript', name: 'ls:startup',                 payload: '{ __event: "ls:startup" }' },
  { group: 'LumiScript', name: 'ls:teardown',                payload: "{ reason: 'disabled' | 'deleted', scriptId, scriptName }" },
  { group: 'Chat',       name: 'MESSAGE_SENT',               payload: '{ chatId, message }' },
  { group: 'Chat',       name: 'MESSAGE_EDITED',             payload: '{ chatId, message }' },
  { group: 'Chat',       name: 'MESSAGE_DELETED',            payload: '{ chatId, messageId }' },
  { group: 'Chat',       name: 'MESSAGE_SWIPED',             payload: '{ chatId, message, action, swipeId, previousSwipeId? }' },
  { group: 'Chat',       name: 'SWIPE_EDITED',               payload: '{ chatId, message, previousSwipeId }' },
  { group: 'Chat',       name: 'CHARACTER_MESSAGE_RENDERED', payload: '{ chatId, messageId }' },
  { group: 'Chat',       name: 'USER_MESSAGE_RENDERED',      payload: '{ chatId, messageId }' },
  { group: 'Generation', name: 'GENERATION_STARTED',         payload: '{ generationId, chatId, model }' },
  { group: 'Generation', name: 'GENERATION_ENDED',           payload: '{ generationId, chatId, messageId, content }' },
  { group: 'Generation', name: 'GENERATION_STOPPED',         payload: '{ generationId, chatId, content }' },
  { group: 'Generation', name: 'STREAM_TOKEN_RECEIVED',      payload: '{ generationId, chatId, token }' },
  { group: 'Entities',   name: 'CHAT_CHANGED',               payload: '{ chatId }' },
  { group: 'Entities',   name: 'CHARACTER_EDITED',           payload: '{ id, character }' },
  { group: 'Entities',   name: 'CHARACTER_DELETED',          payload: '{ id }' },
  { group: 'Entities',   name: 'CHARACTER_DUPLICATED',       payload: '{ id, newId }' },
  { group: 'Entities',   name: 'PERSONA_CHANGED',            payload: '{ persona }' },
  { group: 'Settings',   name: 'SETTINGS_UPDATED',           payload: '{ key, value }' },
  { group: 'Settings',   name: 'PRESET_CHANGED',             payload: '{ presetId }' },
  { group: 'Settings',   name: 'CONNECTION_PROFILE_LOADED',  payload: '{ connectionId }' },
  { group: 'Settings',   name: 'WORLD_INFO_ACTIVATED',       payload: '{ entries }' },
  { group: 'Tools',      name: 'TOOL_INVOCATION',            payload: '{ toolName, requestId, args }' },
];

const EventsTable: FC = () => {
  let lastGroup = '';
  return (
    <table className="ls-ref-table">
      <thead>
        <tr>
          <th>Event</th>
          <th>Group</th>
          <th>Payload shape</th>
        </tr>
      </thead>
      <tbody>
        {EVENTS.map(ev => {
          const groupCell = ev.group !== lastGroup ? ev.group : '';
          lastGroup = ev.group;
          return (
            <tr key={ev.name}>
              <td><Code>{ev.name}</Code></td>
              <td><span className="ls-ref-muted">{groupCell}</span></td>
              <td><span className="ls-ref-muted">{ev.payload}</span></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// ─── Permission matrix ────────────────────────────────────────────────────────

export interface PermRow {
  method: string;
  perms: string[];
  note?: string;
}

export interface PermGroup {
  group: string;
  rows: PermRow[];
}

export const PERM_GROUPS: PermGroup[] = [
  {
    group: 'Chat',
    rows: [
      { method: 'api.chat.getMessages', perms: ['chat_mutation'] },
      { method: 'api.chat.sendMessage', perms: ['chat_mutation'] },
      { method: 'api.chat.editMessage', perms: ['chat_mutation'] },
      { method: 'api.chat.deleteMessage', perms: ['chat_mutation'] },
      { method: 'api.chat.getChatId', perms: [] },
      { method: 'api.chat.getMetadata', perms: ['chats'] },
      { method: 'api.chat.setMetadata', perms: ['chats'] },
      { method: 'api.chat.inject', perms: ['interceptor'] },
      { method: 'api.chat.removeInjection', perms: [] },
      { method: 'api.chat.getInjections', perms: [] },
      { method: 'api.chat.clearInjections', perms: ['interceptor'] },
      { method: 'api.chat.clearAllInjections', perms: ['interceptor'], note: '+ allowDangerous' },
      { method: 'api.chat.setMessageHidden', perms: ['chat_mutation'] },
      { method: 'api.chat.setMessagesHidden', perms: ['chat_mutation'] },
      { method: 'api.chat.isMessageHidden', perms: ['chat_mutation'] },
      { method: 'api.chat.registerContentProcessor', perms: ['chat_mutation'] },
      { method: 'api.chat.listContentProcessors', perms: [] },
    ],
  },
  {
    group: 'LLM',
    rows: [
      { method: 'api.llm.generate', perms: ['generation'] },
      { method: 'api.llm.generateStructured', perms: ['generation'] },
      { method: 'api.llm.generateWithTools', perms: ['generation'] },
      { method: 'api.llm.dryRun', perms: ['generation'] },
    ],
  },
  {
    group: 'Variables / JSON / Utils',
    rows: [
      { method: 'api.variables.*', perms: [] },
      { method: 'api.json.*', perms: [] },
      { method: 'api.utils.uuid / shortId / wait', perms: [] },
      { method: 'api.utils.random.*', perms: [] },
      { method: 'api.utils.template.*', perms: [] },
      { method: 'api.utils.macros.resolve', perms: [] },
      { method: 'api.utils.image.*', perms: [] },
      { method: 'api.utils.http.*', perms: ['cors_proxy'], note: '+ allowDangerous' },
    ],
  },
  {
    group: 'UI',
    rows: [
      { method: 'api.ui.toast', perms: [] },
      { method: 'api.ui.prompt', perms: [] },
      { method: 'api.ui.confirm', perms: [] },
      { method: 'api.ui.showModal', perms: [] },
      { method: 'api.ui.showAdvancedModal', perms: ['app_manipulation'] },
      { method: 'api.ui.editText', perms: [] },
      { method: 'api.ui.pushNotification', perms: ['push_notification'] },
      { method: 'api.ui.getPushStatus', perms: ['push_notification'] },
      { method: 'api.ui.createFloatWidget', perms: ['ui_panels'] },
      { method: 'api.ui.dom.*', perms: ['app_manipulation'] },
    ],
  },
  {
    group: 'Files',
    rows: [
      { method: 'api.files.user*', perms: [], note: 'allowDangerous' },
      { method: 'api.files.shared*', perms: [], note: 'allowDangerous' },
      { method: 'api.files.temp*', perms: ['ephemeral_storage'], note: '+ allowDangerous' },
    ],
  },
  {
    group: 'Entity APIs',
    rows: [
      { method: 'api.characters.*', perms: ['characters'] },
      { method: 'api.chats.*', perms: ['chats'] },
      { method: 'api.worldInfo.*', perms: ['world_books'] },
      { method: 'api.personas.*', perms: ['personas'] },
    ],
  },
  {
    group: 'Tools & Broadcast',
    rows: [
      { method: 'api.tools.*', perms: ['tools'] },
      { method: 'api.macros.register / updateValue / unregister / list', perms: [] },
      { method: 'api.macros.registerInterceptor', perms: ['macro_interceptor'] },
      { method: 'api.macros.listInterceptors', perms: [] },
      { method: 'api.broadcast.*', perms: [] },
      { method: 'api.commands.*', perms: [] },
      { method: 'api.events.*', perms: ['event_tracking'] },
      { method: 'api.tokens.*', perms: [] },
      { method: 'api.db.*', perms: [] },
    ],
  },
];

const PermsTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Required permissions</th>
      </tr>
    </thead>
    <tbody>
      {PERM_GROUPS.map(group => (
        <>
          <GroupHeader key={`hdr-${group.group}`} label={group.group} cols={2} />
          {group.rows.map(row => (
            <tr key={row.method}>
              <td><Code>{row.method}</Code></td>
              <td>
                {row.perms.length === 0 && !row.note ? <NoPerm /> : null}
                {row.perms.map(p => <Perm key={p}>{p}</Perm>)}
                {row.note
                  ? <span className="ls-ref-muted" style={{ marginLeft: row.perms.length ? 4 : 0 }}>{row.note}</span>
                  : null}
              </td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── Broadcast built-in events ────────────────────────────────────────────────

export interface BroadcastEventRow {
  name: string;
  payload: string;
  emittedBy: string;
}

export const BROADCAST_EVENTS: BroadcastEventRow[] = [
  {
    name:      'ls:tool:registered',
    payload:   '{ name, scriptId }',
    emittedBy: 'api.tools.register()',
  },
  {
    name:      'ls:tool:unregistered',
    payload:   '{ name, scriptId }',
    emittedBy: 'api.tools.unregister() / auto-cleanup',
  },
  {
    name:      'ls:tool:invoked',
    payload:   '{ name, args, result, scriptId, callMs, councilMember? }',
    emittedBy: 'api.tools.invoke() + TOOL_INVOCATION handler',
  },
  {
    name:      'ls:macro:registered',
    payload:   `{ name, scriptId, mode: 'push' | 'pull' }`,
    emittedBy: 'api.macros.register()',
  },
  {
    name:      'ls:macro:unregistered',
    payload:   '{ name, scriptId }',
    emittedBy: 'api.macros.unregister() / auto-cleanup',
  },
  {
    name:      'ls:collection:created',
    payload:   '{ name, scope, scriptId, path }',
    emittedBy: 'api.db.collection()',
  },
  {
    name:      'ls:collection:dropped',
    payload:   '{ name, scope, scriptId, path, deletedCount }',
    emittedBy: 'api.db.drop()',
  },
  {
    name:      'ls:collection:inserted',
    payload:   '{ name, scope, scriptId, id, record }',
    emittedBy: 'collection.insert()',
  },
  {
    name:      'ls:collection:updated',
    payload:   `{ name, scope, scriptId, count, filterKind: 'all' | 'object' | 'fn' }`,
    emittedBy: 'collection.update() (only when count > 0)',
  },
  {
    name:      'ls:collection:deleted',
    payload:   `{ name, scope, scriptId, count, filterKind }`,
    emittedBy: 'collection.delete() / clear() (clear emits count=-1)',
  },
  {
    name:      'ls:collection:size-warning',
    payload:   '{ name, scope, scriptId, bytes }',
    emittedBy: 'auto — collection exceeds 10 MB soft threshold',
  },
];

const BroadcastTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Event</th>
        <th>Payload fields</th>
        <th>Emitted by</th>
      </tr>
    </thead>
    <tbody>
      {BROADCAST_EVENTS.map(row => (
        <tr key={row.name}>
          <td><Code>{row.name}</Code></td>
          <td><span className="ls-ref-muted">{row.payload}</span></td>
          <td><span className="ls-ref-muted">{row.emittedBy}</span></td>
        </tr>
      ))}
    </tbody>
  </table>
);

// ─── LumiScript macros ────────────────────────────────────────────────────────

export type MacroReturns = 'boolean' | 'string' | 'silent';

export interface LsMacroRow {
  macro: string;
  aliases: string;
  returns: MacroReturns;
  desc: string;
}

export interface LsMacroGroup {
  /** Short category label shown in the table's group header. */
  label: string;
  /** Optional prose describing the group — rendered as a subline in the UI
   *  and as an italic paragraph under the heading in the Markdown export.
   *  Kept separate from `label` so the Markdown heading stays short. */
  description?: string;
  rows: LsMacroRow[];
}

export const LS_MACRO_GROUPS: LsMacroGroup[] = [
  {
    label: 'Presence',
    rows: [
      {
        macro:   '{{lumiScriptActive}}',
        aliases: '—',
        returns: 'boolean',
        desc:    'Push-model boolean. "true" when the LumiScript master toggle is on, "false" when off. Ideal for conditional preset blocks: {{if::{{lumiScriptActive}}}}…{{/if}}',
      },
    ],
  },
  {
    label:       'Character Variables',
    description: "reads/writes the active character's variable store. Write operations are silent.",
    rows: [
      {
        macro:   '{{getcvar::key}}',
        aliases: '{{getcharvar::key}}',
        returns: 'string',
        desc:    'Get a character-scoped variable. Returns "" if the key is not set or there is no active character.',
      },
      {
        macro:   '{{setcvar::key::value}}',
        aliases: '{{setcharvar::key::value}}',
        returns: 'silent',
        desc:    'Set a character-scoped variable to value.',
      },
      {
        macro:   '{{addcvar::key::n}}',
        aliases: '{{addcharvar::key::n}}',
        returns: 'silent',
        desc:    'Add the number n to a character-scoped variable (treated as 0 if unset or non-numeric).',
      },
      {
        macro:   '{{inccvar::key}}',
        aliases: '—',
        returns: 'silent',
        desc:    'Increment a character-scoped variable by 1.',
      },
      {
        macro:   '{{deccvar::key}}',
        aliases: '—',
        returns: 'silent',
        desc:    'Decrement a character-scoped variable by 1.',
      },
      {
        macro:   '{{hascvar::key}}',
        aliases: '{{hascharvar::key}}',
        returns: 'boolean',
        desc:    'Returns "true" if the variable exists in the active character\'s store, "false" otherwise.',
      },
      {
        macro:   '{{deletecvar::key}}',
        aliases: '{{deletecharvar::key}}',
        returns: 'silent',
        desc:    'Delete a character-scoped variable.',
      },
    ],
  },
];

const ReturnsBadge: FC<{ type: MacroReturns }> = ({ type }) => {
  if (type === 'silent') return <Silent />;
  if (type === 'boolean') return <Code>{'\"true\" / \"false\"'}</Code>;
  return <Code>string</Code>;
};

const LumiScriptMacrosTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Macro</th>
        <th>Aliases</th>
        <th>Returns</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {LS_MACRO_GROUPS.map(group => (
        <>
          <GroupHeader
            key={`hdr-${group.label}`}
            label={
              group.description
                ? <>{group.label} — <span className="ls-ref-muted" style={{ fontWeight: 'normal' }}>{group.description}</span></>
                : group.label
            }
            cols={4}
          />
          {group.rows.map(row => (
            <tr key={row.macro}>
              <td><Code>{row.macro}</Code></td>
              <td>
                {row.aliases === '—'
                  ? <span className="ls-ref-muted">—</span>
                  : <Code>{row.aliases}</Code>}
              </td>
              <td style={{ whiteSpace: 'nowrap' }}><ReturnsBadge type={row.returns} /></td>
              <td><span className="ls-ref-muted">{row.desc}</span></td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── Key types ────────────────────────────────────────────────────────────────

export interface TypeField { field: string; type: string; optional: boolean; desc: string; }
export interface TypeDoc   { name: string; note?: string; fields: TypeField[]; }

export const KEY_TYPES: TypeDoc[] = [
  // ─── Chat ────────────────────────────────────────────────────────────────────
  {
    name: 'ChatMessage',
    note: 'Returned by api.chat.getMessages().',
    fields: [
      { field: 'id',         type: 'string',                          optional: false, desc: 'Message identifier.' },
      { field: 'content',    type: 'string',                          optional: false, desc: 'Plain-text message content.' },
      { field: 'role',       type: "'user' | 'assistant' | 'system'", optional: false, desc: 'Sender role.' },
      { field: 'metadata?',  type: 'Record<string, unknown>',         optional: true,  desc: 'Arbitrary metadata attached to the message.' },
      { field: 'swipeId',    type: 'number',                          optional: false, desc: 'Index of the active swipe variant. 0 when the message has no alternates.' },
      { field: 'swipes',     type: 'string[]',                        optional: false, desc: 'All swipe variants. swipes[swipeId] equals content.' },
      { field: 'swipeDates', type: 'number[]',                        optional: false, desc: 'Per-swipe creation timestamps (unix epoch seconds), aligned with swipes. Empty array on older hosts (pre-spindle-types 0.4.27).' },
      { field: 'extra',      type: 'Record<string, unknown>',         optional: false, desc: 'Host-maintained bag: reasoning text/duration, attachments, hidden flag, etc. Keys depend on host build — treat as opaque. Empty object on older hosts.' },
    ],
  },
  {
    name: 'GetMessagesOptions',
    note: 'Passed to api.chat.getMessages(options?).',
    fields: [
      { field: 'first?', type: 'number', optional: true, desc: 'Return only the first N messages.' },
      { field: 'last?',  type: 'number', optional: true, desc: 'Return only the last N messages.' },
    ],
  },
  {
    name: 'SendMessageOptions',
    note: "Passed to api.chat.sendMessage(content, options?). HTML rendering note: a block-level element (<div>, <section>, <article>, etc.) whose content includes a <style> tag OR three or more inline style=\"...\" attributes is auto-extracted into a Shadow DOM \"island\" by the host renderer. This isolates card-style rules from the chat UI and prevents markdown from corrupting interactive markup. To opt out (e.g. you need document-level click delegation, CSS cascade into surrounding DOM, or MutationObserver access from the message subtree), add data-no-island to the outer block element's opening tag. Opting out disables both style isolation AND the markdown-safety wrapper — scope your selectors with a unique class prefix and ensure markdown won't misinterpret your content. Standalone <style> blocks not inside a wrapper element are extracted together with subsequent sibling HTML; wrap them in <div data-no-island> if you need them inline.",
    fields: [
      { field: 'role?',     type: "'user' | 'assistant' | 'system'", optional: true, desc: "Sender role. Default 'user'." },
      { field: 'metadata?', type: 'Record<string, unknown>',         optional: true, desc: 'Arbitrary metadata to attach.' },
    ],
  },
  {
    name: 'MessagePatch',
    note: 'Passed to api.chat.editMessage(id, patch) when using the richer object form. Only fields you provide are updated. Patches touching swipes / swipeId / swipeDates fire SWIPE_EDITED alongside MESSAGE_EDITED; plain content patches fire only MESSAGE_EDITED.',
    fields: [
      { field: 'content?',    type: 'string',                         optional: true, desc: "Replace the active swipe's content." },
      { field: 'metadata?',   type: 'Record<string, unknown>',        optional: true, desc: 'Replace the host-maintained metadata bag. Host-side merge semantics apply.' },
      { field: 'swipes?',     type: 'string[]',                       optional: true, desc: 'Replace the full swipes array. Length changes are expressible here.' },
      { field: 'swipeId?',    type: 'number',                         optional: true, desc: 'Navigate to a different swipe index. Can be used alone to cycle without rewriting content.' },
      { field: 'swipeDates?', type: 'number[]',                       optional: true, desc: 'Replace per-swipe timestamps. Length should match swipes after the patch applies.' },
      { field: 'reasoning?',  type: '{ text?, duration? }',           optional: true, desc: 'Set chain-of-thought reasoning text + duration (assistant messages). text: string | null; duration: number | null.' },
    ],
  },
  {
    name: 'InjectOptions',
    note: 'Passed to api.chat.inject(id, content, options?).',
    fields: [
      { field: 'mode?',      type: "'intercept' | 'context'",         optional: true, desc: "Default 'intercept'. 'intercept' splices post-assembly at generation time. 'context' enriches the assembler context pre-assembly." },
      { field: 'role?',      type: "'system' | 'user' | 'assistant'", optional: true, desc: "Message role. Default 'system'." },
      { field: 'depth?',     type: 'number',                          optional: true, desc: "intercept mode only. Messages from the END to insert before. 0 = append (default). 1 = before last message." },
      { field: 'ephemeral?', type: 'boolean',                         optional: true, desc: 'Auto-remove after the next generation cycle. Default false.' },
    ],
  },
  {
    name: 'InjectionInfo',
    note: 'Returned by api.chat.getInjections().',
    fields: [
      { field: 'id',        type: 'string',                          optional: false, desc: 'Injection identifier.' },
      { field: 'content',   type: 'string',                          optional: false, desc: 'Injected message content.' },
      { field: 'mode',      type: "'intercept' | 'context'",         optional: false, desc: 'Pipeline phase this injection targets.' },
      { field: 'role',      type: 'string',                          optional: false, desc: 'Message role.' },
      { field: 'depth',     type: 'number',                          optional: false, desc: 'Position from end of assembled array (intercept mode).' },
      { field: 'ephemeral', type: 'boolean',                         optional: false, desc: 'Whether the injection auto-removes after generation.' },
      { field: 'scriptId',  type: 'string',                          optional: false, desc: 'ID of the script that created this injection.' },
    ],
  },
  // ─── Message content processor ──────────────────────────────────────────────
  {
    name: 'MessageContentProcessorOptions',
    note: 'Passed to api.chat.registerContentProcessor(handler, options?).',
    fields: [
      { field: 'id?',         type: 'string',                                                         optional: true, desc: 'Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted.' },
      { field: 'priority?',   type: 'number',                                                         optional: true, desc: 'Lower runs first within the LumiScript multiplexer pass. Default 100.' },
      { field: 'origin?',     type: "MessageContentProcessorOrigin | MessageContentProcessorOrigin[]", optional: true, desc: 'Restrict to specific origins. Default: all four. Pre-filtered before invocation.' },
      { field: 'timeoutMs?',  type: 'number',                                                         optional: true, desc: 'Per-invocation soft timeout. Default 2000. The host\'s outer 10-second budget is shared across all LumiScript handlers.' },
    ],
  },
  {
    name: 'MessageContentProcessorCtx',
    note: "Passed to a registerContentProcessor handler. All fields readonly. The host's chat_mutation permission gates this surface, but does NOT route api.chat.* mutations through the chain (loop safety).",
    fields: [
      { field: 'chatId',      type: 'string',                          optional: false, desc: 'Active chat id.' },
      { field: 'messageId?',  type: 'string',                          optional: true,  desc: "Undefined for 'create' origins (the row doesn't exist yet)." },
      { field: 'content',     type: 'string',                          optional: false, desc: 'Current content (already transformed by any earlier processors in the chain).' },
      { field: 'extra?',      type: 'Record<string, unknown>',         optional: true,  desc: 'Current extra map (initial.extra + delta-so-far from prior processors). Threaded through the chain even on swipe origins.' },
      { field: 'origin',      type: "'create' | 'update' | 'swipe_add' | 'swipe_update'", optional: false, desc: 'Which write path triggered this invocation. \'create\' includes auto-greetings.' },
      { field: 'swipeIndex?', type: 'number',                          optional: true,  desc: "Set for 'swipe_update' only — zero-based index of the swipe being rewritten." },
      { field: 'userId',      type: 'string',                          optional: false, desc: 'Owning user id for the write.' },
    ],
  },
  {
    name: 'MessageContentProcessorResult',
    note: "Return value of a registerContentProcessor handler. Return undefined / void to pass through, or a partial patch. content replaces the stored content. extra shallow-merges into existing — keys you omit are PRESERVED. extra is IGNORED on swipe origins (swipes share the parent message's extra). Return ONLY keys you mutated; pristine initial.extra keys are NOT round-tripped to avoid re-stamping unchanged keys on every write.",
    fields: [
      { field: 'content?', type: 'string',                  optional: true, desc: 'Replaces the stored content for downstream processors and the DB write.' },
      { field: 'extra?',   type: 'Record<string, unknown>', optional: true, desc: 'Delta keys to shallow-merge. Ignored on swipe origins.' },
    ],
  },
  // ─── Macro interceptor ──────────────────────────────────────────────────────
  {
    name: 'MacroInterceptorOptions',
    note: 'Passed to api.macros.registerInterceptor(handler, options?). Pre-filters short-circuit before the handler runs.',
    fields: [
      { field: 'id?',              type: 'string',                                                  optional: true, desc: 'Stable identifier. Re-registration with the same id from the same script replaces the prior entry. Auto-generated if omitted.' },
      { field: 'priority?',        type: 'number',                                                  optional: true, desc: 'Lower runs first. Default 100.' },
      { field: 'phase?',           type: "MacroInterceptorPhase | MacroInterceptorPhase[]",         optional: true, desc: "Restrict to specific evaluation phases. Default: all of 'prompt', 'display', 'response', 'other'." },
      { field: 'matchTemplate?',   type: 'string | string[] | RegExp',                              optional: true, desc: "Pre-filter on template content. string = simple includes() check; string[] = any-of; RegExp = test. Most common: gating on a macro family namespace like '{{tracker.'." },
      { field: 'timeoutMs?',       type: 'number',                                                  optional: true, desc: 'Per-invocation soft timeout. Default 2000. The host\'s outer 10-second budget is shared across all LumiScript handlers.' },
    ],
  },
  {
    name: 'MacroInterceptorCtx',
    note: 'Passed to a registerInterceptor handler. All fields readonly. The handler receives the CURRENT raw template (already transformed by any earlier interceptors in the chain) and returns either a transformed template string or void to pass through.',
    fields: [
      { field: 'template',     type: 'string',                  optional: false, desc: 'Current raw template (post earlier-handler transforms).' },
      { field: 'env',          type: 'MacroInterceptorEnv',     optional: false, desc: 'Read-only structured-clone snapshot of the macro evaluation environment (names, character, chat, system, variables, extra). Mutating has NO effect on the real environment — persist state via api.variables.* / api.db.* instead.' },
      { field: 'commit',       type: 'boolean',                 optional: false, desc: "Whether the host is in commit mode for this evaluation." },
      { field: 'phase',        type: "'prompt' | 'display' | 'response' | 'other'", optional: false, desc: 'Which call site triggered this evaluation.' },
      { field: 'sourceHint?',  type: 'string',                  optional: true,  desc: 'Optional source hint when the host can attribute the eval (preset block name, etc.).' },
      { field: 'userId?',      type: 'string',                  optional: true,  desc: 'User ID that initiated the macro resolution (when available).' },
    ],
  },
  // ─── UI ──────────────────────────────────────────────────────────────────────
  {
    name: 'ModalItem',
    note: 'A single content item in an api.ui.showModal() items array. Five variants rendered in order using the system theme.',
    fields: [
      { field: "type: 'text'",      type: "{ content: string; muted?: boolean }",  optional: false, desc: 'A text block. muted: true renders in dim/muted colour.' },
      { field: "type: 'heading'",   type: '{ content: string }',                   optional: false, desc: 'A section heading.' },
      { field: "type: 'key_value'", type: '{ label: string; value: string }',       optional: false, desc: 'Label–value row (left label, right value).' },
      { field: "type: 'divider'",   type: '{}',                                    optional: false, desc: 'A horizontal separator. No extra fields.' },
      { field: "type: 'card'",      type: '{ items: ModalItem[] }',                optional: false, desc: 'A themed card grouping child items (1 level deep recommended).' },
    ],
  },
  {
    name: 'ShowModalOptions',
    note: 'Options for api.ui.showModal(items, options).',
    fields: [
      { field: 'title',       type: 'string',  optional: false, desc: 'Modal header title. Required.' },
      { field: 'width?',      type: 'number',  optional: true,  desc: 'Width in pixels (default: 420). Clamped to viewport.' },
      { field: 'maxHeight?',  type: 'number',  optional: true,  desc: 'Max height in pixels (default: 520). Clamped to viewport.' },
      { field: 'persistent?', type: 'boolean', optional: true,  desc: 'When true, user cannot close the modal (no button, Escape, or backdrop). Only programmatic dismissal or cleanup will close it. Default: false.' },
    ],
  },
  {
    name: 'ModalResult',
    note: 'Dismissal payload inside ModalHandle.result.',
    fields: [
      { field: 'dismissedBy', type: "'user' | 'extension' | 'cleanup'", optional: false, desc: "'user' = close button / backdrop / Escape; 'extension' = programmatic; 'cleanup' = extension unloaded." },
    ],
  },
  {
    name: 'ModalHandle',
    note: 'Returned by api.ui.showModal(). Await handle.result for dismissal; call handle.close() to dismiss programmatically.',
    fields: [
      { field: 'openRequestId', type: 'string',               optional: false, desc: 'UUID identifying this modal instance. Immediately available on the returned handle.' },
      { field: 'result',        type: 'Promise<ModalResult>',  optional: false, desc: 'Resolves with dismissal reason when the modal closes.' },
      { field: 'close()',       type: 'Promise<void>',         optional: false, desc: 'Programmatically dismiss the modal.' },
    ],
  },
  {
    name: 'AdvancedModalOptions',
    note: 'Options for api.ui.showAdvancedModal(options). Extension-owned body DOM.',
    fields: [
      { field: 'title',       type: 'string',  optional: false, desc: 'Modal header title. Required.' },
      { field: 'width?',      type: 'number',  optional: true,  desc: 'Width in pixels. Default: 420 (host). Clamped to viewport.' },
      { field: 'maxHeight?',  type: 'number',  optional: true,  desc: 'Max height in pixels. Default: 520 (host). Clamped to viewport.' },
      { field: 'persistent?', type: 'boolean', optional: true,  desc: 'When true, backdrop click no longer dismisses. Close button and programmatic dismiss() still work.' },
    ],
  },
  {
    name: 'AdvancedModalDismissReason',
    note: "Reason a modal was dismissed. Passed to onDismiss handlers.",
    fields: [
      { field: "'user'",     type: 'literal', optional: false, desc: 'Close button, backdrop click, or Escape key.' },
      { field: "'script'",   type: 'literal', optional: false, desc: 'The script called handle.dismiss().' },
      { field: "'teardown'", type: 'literal', optional: false, desc: 'Script was disabled or deleted while the modal was open.' },
    ],
  },
  {
    name: 'AdvancedModalHandle',
    note: 'Returned by api.ui.showAdvancedModal(). Body DOM is fully script-owned via the root DOMHandle. The modal element carries data-ls-script and data-ls-modal attributes, so api.ui.dom.addStyle() @scope rules match content inside the modal just like any other injected DOM.',
    fields: [
      { field: 'modalId',           type: 'string',                                              optional: false, desc: 'UUID identifying this modal instance. Available synchronously.' },
      { field: 'root',              type: 'DOMHandle',                                           optional: false, desc: "DOMHandle bound to the modal's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the modal." },
      { field: 'dismissed',         type: 'boolean',                                             optional: false, desc: 'True once the modal has been dismissed by any path (user/script/teardown). Useful for bailing out of long-running async work if the user closed the modal mid-task.' },
      { field: 'setTitle(title)',   type: '(string) => void',                                    optional: false, desc: 'Update the modal header title.' },
      { field: 'dismiss()',         type: '() => void',                                          optional: false, desc: 'Close the modal programmatically. Safe to call after dismissal (no-op).' },
      { field: 'onDismiss(handler)', type: '(fn: (reason) => void) => () => void',              optional: false, desc: "Fire once when the modal is dismissed, with the reason. Returns unsubscribe. If already dismissed when registered, fires on next microtask with the recorded reason." },
    ],
  },
  {
    name: 'ContextMenuItem',
    note: 'A single entry in api.ui.showContextMenu()`s items array.',
    fields: [
      { field: 'key',       type: 'string',                 optional: false, desc: 'Stable key returned when this item is selected. Required.' },
      { field: 'label',     type: 'string',                 optional: false, desc: "Display text. Ignored when type === 'divider'." },
      { field: 'type?',     type: "'item' | 'divider'",     optional: true,  desc: "Entry type. Default: 'item'." },
      { field: 'disabled?', type: 'boolean',                optional: true,  desc: 'Greyed out and not clickable.' },
      { field: 'danger?',   type: 'boolean',                optional: true,  desc: 'Rendered in red / danger style.' },
      { field: 'active?',   type: 'boolean',                optional: true,  desc: 'Highlighted to indicate current selection.' },
    ],
  },
  {
    name: 'ShowContextMenuOptions',
    note: 'Options for api.ui.showContextMenu().',
    fields: [
      { field: 'position', type: '{ x: number; y: number }', optional: false, desc: 'Screen coordinates to anchor the menu. Typically taken from a pointer event (use data.clientX / data.clientY from a contextmenu handler).' },
      { field: 'items',    type: 'ContextMenuItem[]',        optional: false, desc: 'Menu entries.' },
    ],
  },
  {
    name: 'InputBarActionOptions',
    note: 'Options for api.ui.registerInputBarAction().',
    fields: [
      { field: 'id',        type: 'string',  optional: false, desc: 'Unique identifier within your script — used by the handle for subsequent setLabel / setSubtitle / setEnabled / destroy calls. Required.' },
      { field: 'label',     type: 'string',  optional: false, desc: 'Display label shown in the Extras popover row.' },
      { field: 'subtitle?', type: 'string',  optional: true,  desc: 'Optional secondary line rendered beneath the label. Useful for short status strings ("Last roll: 17"), keyboard shortcuts, or one-line descriptions. Omit (or pass undefined via setSubtitle) for a single-line row.' },
      { field: 'iconSvg?',  type: 'string',  optional: true,  desc: 'Inline SVG string (sanitized upstream via DOMPurify). Rendered at 14×14.' },
      { field: 'iconUrl?',  type: 'string',  optional: true,  desc: 'URL to an icon image. Takes precedence over iconSvg if both are set.' },
      { field: 'enabled?',  type: 'boolean', optional: true,  desc: 'When false, the action is hidden from the popover. Default: true.' },
    ],
  },
  {
    name: 'InputBarActionHandle',
    note: 'Returned by api.ui.registerInputBarAction(). Actions appear in the chat input-bar Extras popover under a teal-badged extension header. Limits: 4 per script, 12 global.',
    fields: [
      { field: 'actionId',                   type: 'string',                                  optional: false, desc: 'The action id (same as the id passed in options).' },
      { field: 'setLabel(label)',            type: '(string) => void',                        optional: false, desc: 'Update the display label. Safe to call after destroy (no-op).' },
      { field: 'setSubtitle(subtitle?)',     type: '(string | undefined) => void',            optional: false, desc: 'Update (or clear) the secondary line beneath the label. Pass undefined to remove a previously-set subtitle and collapse the row back to single-line. Safe to call after destroy.' },
      { field: 'setEnabled(enabled)',        type: '(boolean) => void',                       optional: false, desc: 'Show or hide the action in the popover. Disabled actions are hidden entirely rather than greyed out. Safe to call after destroy.' },
      { field: 'onClick(handler)',           type: '(fn: () => void) => () => void',          optional: false, desc: 'Register a click handler. Multiple handlers supported — all fire on each click. Returns unsubscribe. The Extras popover closes automatically after a click (host behaviour).' },
      { field: 'destroy()',                  type: '() => void',                              optional: false, desc: 'Remove the action from the popover and clear all click handlers. Idempotent.' },
    ],
  },
  {
    name: 'FloatWidgetOptions',
    note: 'Options for api.ui.createFloatWidget(). Widget is a small draggable overlay with script-owned body DOM.',
    fields: [
      { field: 'width',             type: 'number',                     optional: false, desc: 'Widget width in pixels. Required.' },
      { field: 'height',            type: 'number',                     optional: false, desc: 'Widget height in pixels. Required.' },
      { field: 'initialPosition?',  type: '{ x: number; y: number }',   optional: true,  desc: 'Starting position in viewport coordinates. If omitted, the host applies its own default placement.' },
      { field: 'snapToEdge?',       type: 'boolean',                    optional: true,  desc: 'Snap to the nearest screen edge after drag. Default: false.' },
      { field: 'tooltip?',          type: 'string',                     optional: true,  desc: 'Hover tooltip text.' },
      { field: 'chromeless?',       type: 'boolean',                    optional: true,  desc: 'Strip the default container chrome (border, background, shadow, border-radius). Script fully owns visual presentation via root + addStyle. Default: false.' },
    ],
  },
  {
    name: 'FloatWidgetHandle',
    note: 'Returned by api.ui.createFloatWidget(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-widget attributes, so api.ui.dom.addStyle() @scope rules match content inside the widget. getPosition() / isVisible() return backend-cached state — see docs for caching semantics around moveTo and drag-end echoes.',
    fields: [
      { field: 'widgetId',                           type: 'string',                                                 optional: false, desc: 'UUID identifying this widget instance. Available synchronously.' },
      { field: 'root',                               type: 'DOMHandle',                                              optional: false, desc: "DOMHandle bound to the widget's content container. Use root.update(html), root.on(event, handler), etc. Calls are buffered until the frontend has mounted the widget." },
      { field: 'moveTo(x, y)',                       type: '(number, number) => void',                               optional: false, desc: 'Move the widget to new viewport coordinates. Updates the cache optimistically; if the host clamps, the next drag-end corrects it.' },
      { field: 'getPosition()',                      type: '() => { x: number; y: number }',                         optional: false, desc: 'Current cached position. Synchronous — value updates via moveTo (optimistic) and drag-end echoes (authoritative).' },
      { field: 'setVisible(visible)',                type: '(boolean) => void',                                      optional: false, desc: 'Show or hide the widget.' },
      { field: 'isVisible()',                        type: '() => boolean',                                          optional: false, desc: 'Current cached visibility state.' },
      { field: 'onDragEnd(handler)',                 type: '(fn: (pos) => void) => () => void',                      optional: false, desc: 'Register a drag-end handler — fires with the final coordinates after each drag. Multiple handlers supported. Returns unsubscribe.' },
      { field: 'destroy()',                          type: '() => void',                                             optional: false, desc: 'Remove the widget from the viewport. Idempotent — subsequent calls and method invocations are silent no-ops.' },
    ],
  },
  {
    name: 'DrawerTabOptions',
    note: 'Options for api.ui.registerDrawerTab(). Tab appears in the ViewportDrawer sidebar and is automatically searchable in the command palette.',
    fields: [
      { field: 'id',           type: 'string',   optional: false, desc: 'Unique identifier within your script. Used for subsequent setTitle / setShortName / setBadge / activate / destroy calls. Required.' },
      { field: 'title',        type: 'string',   optional: false, desc: 'Full display title. Shown in the panel header and the command palette listing. Required.' },
      { field: 'shortName?',   type: 'string',   optional: true,  desc: 'Short label rendered beneath the sidebar icon (~8 chars, truncated with ellipsis). Defaults to a truncation of title.' },
      { field: 'description?', type: 'string',   optional: true,  desc: 'One-line description shown below the title in the command palette. Defaults to "Open {title} extension tab".' },
      { field: 'keywords?',    type: 'string[]', optional: true,  desc: 'Extra terms for command-palette fuzzy search. The extension name is always included automatically.' },
      { field: 'headerTitle?', type: 'string',   optional: true,  desc: 'Title shown in the panel header navbar. Useful when the full title is too long for the header. Defaults to title.' },
      { field: 'iconSvg?',     type: 'string',   optional: true,  desc: 'Inline SVG string for the sidebar icon. Rendered at 20×20, sanitized upstream.' },
      { field: 'iconUrl?',     type: 'string',   optional: true,  desc: 'URL to an icon image. Mutually exclusive with iconSvg.' },
    ],
  },
  {
    name: 'DrawerTabHandle',
    note: "Returned by api.ui.registerDrawerTab(). Body DOM is script-owned via root (DOMHandle). The root element carries data-ls-script and data-ls-tab attributes, so api.ui.dom.addStyle() @scope rules match content inside the tab. LumiScript enforces 1 drawer tab per script; if all 4 of LumiScript's host-quota tabs are in use by other scripts, registration throws with a distinct 'quota exhausted' message.",
    fields: [
      { field: 'tabId',                  type: 'string',                       optional: false, desc: 'The tab id (same as the id passed in options).' },
      { field: 'root',                   type: 'DOMHandle',                    optional: false, desc: "DOMHandle bound to the tab's content container." },
      { field: 'setTitle(title)',        type: '(string) => void',             optional: false, desc: 'Update the full title (command palette + panel header).' },
      { field: 'setShortName(shortName)', type: '(string) => void',            optional: false, desc: 'Update the sidebar icon label.' },
      { field: 'setBadge(text)',         type: '(string | null) => void',      optional: false, desc: 'Show a badge next to the tab icon. Pass null to clear.' },
      { field: 'activate()',             type: '() => void',                   optional: false, desc: 'Programmatically switch the drawer to this tab.' },
      { field: 'onActivate(handler)',    type: '(fn: () => void) => () => void', optional: false, desc: 'Register an activation handler. Multiple handlers supported. Returns unsubscribe.' },
      { field: 'destroy()',              type: '() => void',                   optional: false, desc: 'Remove the tab from the sidebar and detach all handlers. Idempotent.' },
    ],
  },
  // ─── DOM Injection ───────────────────────────────────────────────────────────
  {
    name: 'DOMInjectOptions',
    note: 'Options for api.ui.dom.inject(target, html, options?).',
    fields: [
      { field: 'position?', type: "'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'", optional: true, desc: "Insertion position relative to the target element. Default: 'beforeend'." },
      { field: 'id?',       type: 'string',                                                   optional: true, desc: 'Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate.' },
    ],
  },
  {
    name: 'DOMMessageInjectOptions',
    note: 'Options for api.ui.dom.injectAtMessage(messageId, html, options?).',
    fields: [
      { field: 'position?', type: "'header' | 'footer'", optional: true, desc: "Semantic position within the message bubble. 'footer' (default): after content/controls. 'header': before all content." },
      { field: 'id?',       type: 'string',              optional: true, desc: 'Stable ID for idempotent injection. Re-using the same ID updates the existing element instead of creating a duplicate.' },
    ],
  },
  {
    name: 'DOMHandle',
    note: 'Returned by api.ui.dom.inject() and api.ui.dom.injectAtMessage(). All methods are fire-and-forget.',
    fields: [
      { field: 'id',          type: 'string',                                   optional: false, desc: 'Unique element ID (generated or from stable ID).' },
      { field: 'update(html)', type: 'void',                                    optional: false, desc: 'Replace the inner HTML of the injected element.' },
      { field: 'remove()',    type: 'void',                                     optional: false, desc: 'Remove the element from the DOM and detach all listeners.' },
      { field: 'on(event, handler, options?)', type: '() => void',              optional: false, desc: 'Attach a DOM event listener. Handler receives DOMEventData. Pass { preventDefault: true } to suppress the browser default synchronously (e.g. to block the native context menu on right-click). Returns an unsubscribe function.' },
      { field: 'makeDraggable(handleSelector?)', type: 'void',               optional: false, desc: 'Enable frontend-only drag. Optional CSS selector picks a drag handle child; the root element moves. Without a selector, the whole element is draggable.' },
    ],
  },
  {
    name: 'DOMEventData',
    note: 'Serialized event data passed to DOM event handlers. A safe subset of the browser Event object.',
    fields: [
      { field: 'type',           type: 'string',                    optional: false, desc: "Event type (e.g. 'click', 'input', 'change')." },
      { field: 'targetId?',      type: 'string',                    optional: true,  desc: 'The id attribute of the event target element.' },
      { field: 'targetValue?',   type: 'string',                    optional: true,  desc: 'The value property (for input/select elements).' },
      { field: 'targetChecked?', type: 'boolean',                   optional: true,  desc: 'The checked property (for checkbox/radio elements).' },
      { field: 'dataset?',       type: 'Record<string, string>',    optional: true,  desc: 'All data-* attributes on the event target.' },
      { field: 'detail?',        type: 'unknown',                   optional: true,  desc: 'CustomEvent.detail (must be JSON-serializable).' },
      { field: 'clientX?',       type: 'number',                    optional: true,  desc: 'Viewport X coordinate. Populated for MouseEvent / PointerEvent / contextmenu and from the first touch of a TouchEvent. Useful for positioning api.ui.showContextMenu at the cursor.' },
      { field: 'clientY?',       type: 'number',                    optional: true,  desc: 'Viewport Y coordinate. Same event families as clientX.' },
    ],
  },
  {
    name: 'DOMListenOptions',
    note: 'Options bag for DOMHandle.on(event, handler, options?).',
    fields: [
      { field: 'preventDefault?', type: 'boolean', optional: true, desc: "When true, the frontend listener calls event.preventDefault() synchronously before dispatching to the script handler. Must be set at registration time — the async worker-boundary dispatch returns too late to preventDefault from inside the handler body. Default: false." },
    ],
  },
  // ─── LLM ─────────────────────────────────────────────────────────────────────
  {
    name: 'LLMMessage',
    note: 'A single message in the messages array passed to api.llm.generate / generateStructured / generateWithTools.',
    fields: [
      { field: 'role',    type: "'system' | 'user' | 'assistant'", optional: false, desc: 'Message sender role.' },
      { field: 'content', type: 'string',                          optional: false, desc: 'Message text content.' },
    ],
  },
  {
    name: 'LLMOptions',
    note: 'Resolution order: connectionId → connectionName → provider + model → active user connection.',
    fields: [
      { field: 'connectionId?',   type: 'string',      optional: true, desc: 'Connection profile ID. Takes precedence over all other options.' },
      { field: 'connectionName?', type: 'string',      optional: true, desc: 'Human-readable name (case-insensitive). Ignored when connectionId is set.' },
      { field: 'provider?',       type: 'LLMProvider', optional: true, desc: 'Provider string e.g. "anthropic", "openai". Ignored when connectionId or connectionName is set.' },
      { field: 'model?',          type: 'string',      optional: true, desc: 'Model identifier. Used with provider for direct calls.' },
      { field: 'temperature?',    type: 'number',      optional: true, desc: 'Override temperature (0–2).' },
      { field: 'maxTokens?',      type: 'number',      optional: true, desc: 'Override max tokens.' },
      { field: 'parallelToolCalls?', type: 'boolean',  optional: true, desc: 'When false, forces one tool call per turn. Only meaningful for generateWithTools(). Needed for Mistral and other providers that require serialised tool use.' },
      { field: 'signal?',         type: 'AbortSignal', optional: true, desc: 'Cancel an in-flight generation. On abort the promise rejects with an AbortError. The worker auto-aborts on extension teardown — use this for script-level cancellation (timeouts, user cancel, races).' },
    ],
  },
  {
    name: 'DryRunOptions',
    note: 'Passed to api.llm.dryRun(options?). All fields are optional; defaults use the active context.',
    fields: [
      { field: 'chatId?',          type: 'string', optional: true, desc: 'Chat to assemble the prompt for. Defaults to the active chat.' },
      { field: 'connectionId?',    type: 'string', optional: true, desc: 'Override the connection profile used for assembly.' },
      { field: 'personaId?',       type: 'string', optional: true, desc: 'Override the persona used for assembly.' },
      { field: 'presetId?',        type: 'string', optional: true, desc: 'Override the generation preset.' },
      { field: 'generationType?',  type: "'normal' | 'continue' | 'regenerate' | 'swipe' | 'impersonate'", optional: true, desc: "Override generation type. Default 'normal'." },
      { field: 'parameters?',      type: 'Record<string, unknown>', optional: true, desc: 'Override sampler parameters.' },
    ],
  },
  {
    name: 'LLMRawResult',
    note: 'Return type of api.llm.generateWithTools() without a schema. On intermediate steps tool_calls is set; on the final step content holds the text response.',
    fields: [
      { field: 'content',     type: 'string',     optional: false, desc: 'Text generated by the LLM. Empty string when tool_calls is present.' },
      { field: 'tool_calls?', type: 'ToolCall[]', optional: true,  desc: 'Function calls requested by the LLM. When present, content is typically empty.' },
    ],
  },
  {
    name: 'LLMRawResultStructured<T>',
    note: 'Return type of api.llm.generateWithTools(messages, tools, opts, schema). On intermediate steps only tool_calls is set. On the final step only content is set.',
    fields: [
      { field: 'content?',    type: 'T',          optional: true, desc: 'Final step: JSON-parsed and Zod-validated result typed as T.' },
      { field: 'tool_calls?', type: 'ToolCall[]', optional: true, desc: 'Intermediate steps: function calls requested by the LLM. When present, content is absent.' },
    ],
  },
  {
    name: 'ToolCall',
    note: 'A single function call inside LLMRawResult.tool_calls or LLMRawResultStructured.tool_calls.',
    fields: [
      { field: 'name',    type: 'string',                  optional: false, desc: 'Tool name as given in the schema.' },
      { field: 'args',    type: 'Record<string, unknown>', optional: false, desc: 'Parsed arguments as returned by the LLM.' },
      { field: 'call_id', type: 'string',                  optional: false, desc: 'Provider call ID (Anthropic id, OpenAI id, or synthetic UUID).' },
    ],
  },
  {
    name: 'DryRunResult',
    note: 'Return type of api.llm.dryRun(). Contains everything that would be sent to the LLM plus diagnostic data.',
    fields: [
      { field: 'messages',        type: 'LLMMessage[]',             optional: false, desc: 'The fully assembled message array.' },
      { field: 'breakdown',       type: 'DryRunBlock[]',            optional: false, desc: 'Ordered prompt composition blocks.' },
      { field: 'parameters',      type: 'Record<string, unknown>',  optional: false, desc: 'Final merged sampler parameters.' },
      { field: 'model',           type: 'string',                   optional: false, desc: 'Resolved model identifier.' },
      { field: 'provider',        type: 'string',                   optional: false, desc: 'Resolved provider identifier.' },
      { field: 'tokenCount?',     type: 'DryRunTokenCount',         optional: true,  desc: 'Per-block token counts. Present only if a tokenizer is configured.' },
      { field: 'worldInfoStats?', type: 'WorldInfoActivationStats', optional: true,  desc: 'World info activation statistics.' },
      { field: 'memoryStats?',    type: 'DryRunMemoryStats',        optional: true,  desc: 'Long-term memory retrieval statistics.' },
    ],
  },
  {
    name: 'DryRunBlock',
    note: 'A single prompt composition block inside DryRunResult.breakdown.',
    fields: [
      { field: 'type',                 type: 'string',  optional: false, desc: 'Block type (e.g. "block", "chat_history", "world_info", "authors_note").' },
      { field: 'name',                 type: 'string',  optional: false, desc: 'Human-readable block name.' },
      { field: 'role?',                type: 'string',  optional: true,  desc: 'Message role for this block.' },
      { field: 'content?',             type: 'string',  optional: true,  desc: 'Block text content.' },
      { field: 'messageCount?',        type: 'number',  optional: true,  desc: 'Number of messages (for chat_history blocks).' },
      { field: 'preCountedTokens?',    type: 'number',  optional: true,  desc: 'Pre-computed token estimate.' },
      { field: 'excludeFromTotal?',    type: 'boolean', optional: true,  desc: 'Whether this block is excluded from the token total.' },
    ],
  },
  {
    name: 'DryRunTokenCount',
    note: 'Per-block token counts inside DryRunResult.tokenCount. Only present if a tokenizer is configured.',
    fields: [
      { field: 'totalTokens',   type: 'number',  optional: false, desc: 'Total token count across all blocks.' },
      { field: 'breakdown',     type: 'Array',   optional: false, desc: 'Per-block breakdown: [{ name, type, tokens, role? }].' },
      { field: 'tokenizerId',   type: 'string | null', optional: false, desc: 'Tokenizer identifier used, or null.' },
      { field: 'tokenizerName', type: 'string | null', optional: false, desc: 'Human-readable tokenizer name, or null.' },
    ],
  },
  {
    name: 'WorldInfoActivationStats',
    note: 'World info activation statistics inside DryRunResult.worldInfoStats.',
    fields: [
      { field: 'totalCandidates',        type: 'number', optional: false, desc: 'Total number of WI entries evaluated.' },
      { field: 'activatedBeforeBudget',  type: 'number', optional: false, desc: 'Entries activated before budget enforcement.' },
      { field: 'activatedAfterBudget',   type: 'number', optional: false, desc: 'Entries that survived budget enforcement.' },
      { field: 'evictedByBudget',        type: 'number', optional: false, desc: 'Entries removed due to token budget.' },
      { field: 'evictedByMinPriority',   type: 'number', optional: false, desc: 'Entries removed due to minimum priority threshold.' },
      { field: 'estimatedTokens',        type: 'number', optional: false, desc: 'Total token estimate for activated entries.' },
      { field: 'recursionPassesUsed',    type: 'number', optional: false, desc: 'Number of recursive activation passes performed.' },
    ],
  },
  {
    name: 'DryRunMemoryStats',
    note: 'Long-term memory retrieval statistics inside DryRunResult.memoryStats.',
    fields: [
      { field: 'enabled',          type: 'boolean', optional: false, desc: 'Whether long-term memory is configured and active.' },
      { field: 'chunksRetrieved',  type: 'number',  optional: false, desc: 'Number of memory chunks returned by vector search.' },
      { field: 'chunksAvailable',  type: 'number',  optional: false, desc: 'Total vectorized chunks available.' },
      { field: 'chunksPending',    type: 'number',  optional: false, desc: 'Chunks awaiting vectorization (results may be incomplete if > 0).' },
      { field: 'injectionMethod',  type: "'macro' | 'fallback' | 'disabled'", optional: false, desc: 'How memories are injected into the prompt.' },
      { field: 'queryPreview',     type: 'string',  optional: false, desc: 'The query string used for the vector search.' },
      { field: 'settingsSource',   type: "'global' | 'per_chat'",    optional: false, desc: 'Whether memory settings come from global or per-chat config.' },
    ],
  },
  // ─── Utils ────────────────────────────────────────────────────────────────────
  {
    name: 'HttpRequestOptions',
    note: 'Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission. Responses are capped at 25 MB by the Lumiverse cors_proxy; larger bodies are rejected upstream.',
    fields: [
      { field: 'method?',  type: "'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'", optional: true, desc: 'HTTP method. Default depends on the helper used.' },
      { field: 'headers?', type: 'Record<string, string>',                       optional: true, desc: 'Request headers.' },
      { field: 'body?',    type: 'string',                                        optional: true, desc: 'Request body (string). Use JSON.stringify for JSON payloads.' },
      { field: 'timeout?', type: 'number',                                        optional: true, desc: 'Request timeout in milliseconds.' },
    ],
  },
  {
    name: 'HttpResponse',
    note: 'Returned by api.utils.http.* methods. Response body is capped at 25 MB by the Lumiverse cors_proxy — requests for larger payloads reject with an upstream error.',
    fields: [
      { field: 'status',     type: 'number',                  optional: false, desc: 'HTTP status code (e.g. 200, 404).' },
      { field: 'statusText', type: 'string',                  optional: false, desc: 'HTTP status text (e.g. "OK", "Not Found").' },
      { field: 'headers',    type: 'Record<string, string>',  optional: false, desc: 'Response headers.' },
      { field: 'body',       type: 'string',                  optional: false, desc: 'Response body as a string. Use JSON.parse for JSON responses.' },
    ],
  },
  {
    name: 'TempWriteOptions',
    note: 'Passed to api.files.tempWrite(path, data, options?).',
    fields: [
      { field: 'ttlMs?', type: 'number', optional: true, desc: 'Time-to-live in milliseconds. If omitted the file persists until deleted or restart.' },
    ],
  },
  {
    name: 'FileStatResult',
    note: 'Returned by api.files.sharedStat(path).',
    fields: [
      { field: 'exists',      type: 'boolean', optional: false, desc: 'Whether the path exists.' },
      { field: 'isFile',      type: 'boolean', optional: false, desc: 'Whether the path is a file.' },
      { field: 'isDirectory', type: 'boolean', optional: false, desc: 'Whether the path is a directory.' },
      { field: 'sizeBytes',   type: 'number',  optional: false, desc: 'File size in bytes.' },
      { field: 'modifiedAt',  type: 'string',  optional: false, desc: 'ISO 8601 timestamp of last modification.' },
    ],
  },
  {
    name: 'TempStatResult',
    note: 'Returned by api.files.tempStat(path).',
    fields: [
      { field: 'sizeBytes',   type: 'number', optional: false, desc: 'File size in bytes.' },
      { field: 'createdAt',   type: 'string', optional: false, desc: 'ISO 8601 creation timestamp.' },
      { field: 'expiresAt?',  type: 'string', optional: true,  desc: 'ISO 8601 expiration timestamp. Absent if no TTL was set.' },
    ],
  },
  // ─── Characters ──────────────────────────────────────────────────────────────
  {
    name: 'Character',
    note: 'Returned by api.characters.get / create / update.',
    fields: [
      { field: 'id',                      type: 'string',   optional: false, desc: 'Character UUID.' },
      { field: 'name',                    type: 'string',   optional: false, desc: 'Character name.' },
      { field: 'description',             type: 'string',   optional: false, desc: 'Character description.' },
      { field: 'personality',             type: 'string',   optional: false, desc: 'Personality summary.' },
      { field: 'scenario',                type: 'string',   optional: false, desc: 'Scenario / setting.' },
      { field: 'firstMessage',            type: 'string',   optional: false, desc: 'Opening message / greeting.' },
      { field: 'systemPrompt',            type: 'string',   optional: false, desc: 'Character-level system prompt.' },
      { field: 'postHistoryInstructions', type: 'string',   optional: false, desc: 'Instructions appended after chat history.' },
      { field: 'tags',                    type: 'string[]', optional: false, desc: 'Searchable tags.' },
      { field: 'alternateGreetings',      type: 'string[]', optional: false, desc: 'Additional greeting variants.' },
      { field: 'imageId',                 type: 'string | null', optional: false, desc: 'Avatar image ID. Null if no avatar.' },
      { field: 'worldBookIds',            type: 'string[]',     optional: false, desc: 'World book IDs attached to this character.' },
      { field: 'extensions',              type: 'Record<string, unknown>', optional: false, desc: 'Free-form extension data attached to the character (per-character analog of message.extra). Namespace your keys (e.g. "my-script:state") to avoid collisions with other extensions / Lumiverse-internal fields. Reads return the full blob; writes via update() shallow-merge into existing — top-level keys overwrite, omitted keys preserved, nested objects replaced wholesale (NOT recursively merged). Keep values JSON-serializable.' },
      { field: 'createdAt',               type: 'number',   optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',               type: 'number',   optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'CharacterCreateInput',
    note: 'Passed to api.characters.create(input). Only name is required.',
    fields: [
      { field: 'name',                    type: 'string',   optional: false, desc: 'Character name.' },
      { field: 'description?',            type: 'string',   optional: true,  desc: 'Character description.' },
      { field: 'personality?',            type: 'string',   optional: true,  desc: 'Personality summary.' },
      { field: 'scenario?',               type: 'string',   optional: true,  desc: 'Scenario / setting.' },
      { field: 'firstMessage?',           type: 'string',   optional: true,  desc: 'Opening message.' },
      { field: 'systemPrompt?',           type: 'string',   optional: true,  desc: 'Character-level system prompt.' },
      { field: 'postHistoryInstructions?', type: 'string',  optional: true,  desc: 'Post-history instructions.' },
      { field: 'tags?',                   type: 'string[]', optional: true,  desc: 'Searchable tags.' },
      { field: 'alternateGreetings?',     type: 'string[]', optional: true,  desc: 'Additional greeting variants.' },
      { field: 'creator?',                type: 'string',   optional: true,  desc: 'Creator name / attribution.' },
      { field: 'worldBookIds?',           type: 'string[]', optional: true,  desc: 'World book IDs to attach. Pass [] to detach all. Omit to leave unchanged.' },
      { field: 'extensions?',             type: 'Record<string, unknown>', optional: true, desc: 'Initial extension data to seed the character with. See `Character.extensions` for the namespacing + JSON-serialization conventions. Subsequent updates use the same shallow-merge rules.' },
    ],
  },
  {
    name: 'CharacterUpdateInput',
    note: 'Passed to api.characters.update(id, input). Same fields as CharacterCreateInput, all optional.',
    fields: [
      { field: 'name',                    type: 'string',   optional: true, desc: 'Character name.' },
      { field: 'description?',            type: 'string',   optional: true,  desc: 'Character description.' },
      { field: 'personality?',            type: 'string',   optional: true,  desc: 'Personality summary.' },
      { field: 'scenario?',               type: 'string',   optional: true,  desc: 'Scenario / setting.' },
      { field: 'firstMessage?',           type: 'string',   optional: true,  desc: 'Opening message.' },
      { field: 'systemPrompt?',           type: 'string',   optional: true,  desc: 'Character-level system prompt.' },
      { field: 'postHistoryInstructions?', type: 'string',  optional: true,  desc: 'Post-history instructions.' },
      { field: 'tags?',                   type: 'string[]', optional: true,  desc: 'Searchable tags.' },
      { field: 'alternateGreetings?',     type: 'string[]', optional: true,  desc: 'Additional greeting variants.' },
      { field: 'creator?',                type: 'string',   optional: true,  desc: 'Creator name / attribution.' },
      { field: 'worldBookIds?',           type: 'string[]', optional: true,  desc: 'Replace world book attachments. Pass [] to detach all.' },
      { field: 'extensions?',             type: 'Record<string, unknown>', optional: true, desc: 'Shallow-merged into existing extensions on the character. Top-level keys you provide overwrite, omitted keys are preserved, nested objects are replaced wholesale (not recursively merged). Pass an empty object to leave the field unchanged. See `Character.extensions` for the full semantics.' },
    ],
  },
  // ─── Chats ───────────────────────────────────────────────────────────────────
  {
    name: 'ChatSession',
    note: 'Returned by api.chats.get / getActive / update.',
    fields: [
      { field: 'id',          type: 'string',                  optional: false, desc: 'Chat session UUID.' },
      { field: 'characterId', type: 'string',                  optional: false, desc: 'UUID of the associated character.' },
      { field: 'name',        type: 'string',                  optional: false, desc: 'Chat session title.' },
      { field: 'metadata',    type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary key-value metadata (read/write via api.chat.getMetadata / setMetadata).' },
      { field: 'createdAt',   type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',   type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'ChatSessionUpdateInput',
    note: 'Passed to api.chats.update(id, input).',
    fields: [
      { field: 'name?',     type: 'string',                  optional: true, desc: 'New chat session title.' },
      { field: 'metadata?', type: 'Record<string, unknown>', optional: true, desc: 'Metadata to merge in (replaces entire metadata object).' },
    ],
  },
  {
    name: 'ChatMemoryChunk',
    note: 'A single memory chunk inside ChatMemoryResult.chunks.',
    fields: [
      { field: 'content',  type: 'string',                  optional: false, desc: 'Chunk text (concatenated messages from a conversation segment).' },
      { field: 'score',    type: 'number',                  optional: false, desc: 'Cosine similarity score (lower = more similar to the query).' },
      { field: 'metadata', type: 'Record<string, unknown>', optional: false, desc: 'Chunk metadata (may include startIndex, endIndex, etc.).' },
    ],
  },
  {
    name: 'ChatMemoryResult',
    note: 'Returned by api.chats.getMemories().',
    fields: [
      { field: 'enabled',         type: 'boolean',          optional: false, desc: 'Whether long-term memory is active. When false, all other fields are empty/zero.' },
      { field: 'chunks',          type: 'ChatMemoryChunk[]', optional: false, desc: 'Retrieved memory chunks, sorted by relevance.' },
      { field: 'formatted',       type: 'string',           optional: false, desc: 'Pre-formatted output using the user\'s memory template. Ready to inject directly.' },
      { field: 'count',           type: 'number',           optional: false, desc: 'Number of chunks returned.' },
      { field: 'chunksAvailable', type: 'number',           optional: false, desc: 'Total vectorized chunks available.' },
      { field: 'chunksPending',   type: 'number',           optional: false, desc: 'Chunks awaiting vectorization. Results may be incomplete if > 0.' },
      { field: 'queryPreview',    type: 'string',           optional: false, desc: 'The query used for the vector search.' },
      { field: 'settingsSource',  type: "'global' | 'per_chat'", optional: false, desc: 'Whether memory settings come from global or per-chat config.' },
    ],
  },
  // ─── World Info ───────────────────────────────────────────────────────────────
  {
    name: 'WorldInfo',
    note: 'A world book header. Returned by api.worldInfo.get / create / update.',
    fields: [
      { field: 'id',          type: 'string',                  optional: false, desc: 'World book UUID.' },
      { field: 'name',        type: 'string',                  optional: false, desc: 'World book name.' },
      { field: 'description', type: 'string',                  optional: false, desc: 'World book description.' },
      { field: 'metadata',    type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata.' },
      { field: 'createdAt',   type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',   type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'WorldInfoCreateInput',
    note: 'Passed to api.worldInfo.create(input).',
    fields: [
      { field: 'name',         type: 'string',                  optional: false, desc: 'World book name.' },
      { field: 'description?', type: 'string',                  optional: true,  desc: 'World book description.' },
      { field: 'metadata?',    type: 'Record<string, unknown>', optional: true,  desc: 'Arbitrary metadata.' },
    ],
  },
  {
    name: 'WorldInfoUpdateInput',
    note: 'Passed to api.worldInfo.update(ref, input). All fields optional.',
    fields: [
      { field: 'name?',        type: 'string',                  optional: true, desc: 'New world book name.' },
      { field: 'description?', type: 'string',                  optional: true, desc: 'New description.' },
      { field: 'metadata?',    type: 'Record<string, unknown>', optional: true, desc: 'New metadata (replaces entire object).' },
    ],
  },
  {
    name: 'WorldInfoEntry',
    note: 'A lorebook entry. Returned by api.worldInfo.entries.get / create / update. Key fields listed; full set available in IntelliSense hover.',
    fields: [
      { field: 'id',            type: 'string',   optional: false, desc: 'Entry UUID.' },
      { field: 'worldBookId',   type: 'string',   optional: false, desc: 'Parent world book UUID.' },
      { field: 'content',       type: 'string',   optional: false, desc: 'Entry text content injected into the prompt.' },
      { field: 'key',           type: 'string[]', optional: false, desc: 'Primary trigger keywords.' },
      { field: 'keysecondary',  type: 'string[]', optional: false, desc: 'Secondary trigger keywords (selective logic applies).' },
      { field: 'position',      type: 'number',   optional: false, desc: 'Injection position (0=WI Before, 1=WI After, 4=at depth).' },
      { field: 'depth',         type: 'number',   optional: false, desc: 'Injection depth from end of chat history.' },
      { field: 'priority',      type: 'number',   optional: false, desc: 'Activation priority (higher = evicted last).' },
      { field: 'constant',      type: 'boolean',  optional: false, desc: 'Always active regardless of keyword matches.' },
      { field: 'disabled',      type: 'boolean',  optional: false, desc: 'Entry is disabled and will not activate.' },
      { field: 'probability',   type: 'number',   optional: false, desc: 'Activation probability (0–100) when useProbability is true.' },
      { field: 'selective',     type: 'boolean',  optional: false, desc: 'Requires secondary key match when true.' },
    ],
  },
  {
    name: 'WorldInfoEntryInput',
    note: 'Passed to api.worldInfo.entries.create / update. All fields optional on update; content and key recommended on create.',
    fields: [
      { field: 'content?',    type: 'string',   optional: true, desc: 'Entry text content.' },
      { field: 'key?',        type: 'string[]', optional: true, desc: 'Primary trigger keywords.' },
      { field: 'keysecondary?', type: 'string[]', optional: true, desc: 'Secondary trigger keywords.' },
      { field: 'position?',   type: 'number',   optional: true, desc: 'Injection position.' },
      { field: 'depth?',      type: 'number',   optional: true, desc: 'Injection depth.' },
      { field: 'priority?',   type: 'number',   optional: true, desc: 'Activation priority.' },
      { field: 'constant?',   type: 'boolean',  optional: true, desc: 'Always active flag.' },
      { field: 'disabled?',   type: 'boolean',  optional: true, desc: 'Disable this entry.' },
      { field: 'probability?', type: 'number',  optional: true, desc: 'Activation probability (0–100).' },
      { field: 'selective?',  type: 'boolean',  optional: true, desc: 'Require secondary key match.' },
      { field: '(+ more)',    type: '—',        optional: true, desc: 'Additional fields (comment, role, groupName, scanDepth, etc.) available in IntelliSense hover.' },
    ],
  },
  {
    name: 'ActivatedWorldInfoEntry',
    note: 'Returned by api.worldInfo.getCapturedActive(). Extends WorldInfoEntry with activation metadata.',
    fields: [
      { field: '(all WorldInfoEntry fields)', type: '—',                          optional: false, desc: 'All WorldInfoEntry fields are present.' },
      { field: 'source',                      type: "'keyword' | 'vector'",        optional: false, desc: 'How this entry was activated.' },
      { field: 'score?',                      type: 'number',                      optional: true,  desc: 'Cosine similarity score for vector-activated entries. Absent for keyword-activated entries.' },
    ],
  },
  // ─── Personas ─────────────────────────────────────────────────────────────────
  {
    name: 'Persona',
    note: 'Returned by api.personas.get / getDefault / getActive / create / update.',
    fields: [
      { field: 'id',                   type: 'string',                  optional: false, desc: 'Persona UUID.' },
      { field: 'name',                 type: 'string',                  optional: false, desc: 'Persona name.' },
      { field: 'title',                type: 'string',                  optional: false, desc: 'Short tagline shown in the persona picker.' },
      { field: 'description',          type: 'string',                  optional: false, desc: 'Persona description.' },
      { field: 'imageId',              type: 'string | null',           optional: false, desc: 'Avatar image ID. Null if no avatar.' },
      { field: 'attachedWorldBookId',  type: 'string | null',           optional: false, desc: 'World book attached to this persona. Null if none.' },
      { field: 'folder',               type: 'string',                  optional: false, desc: 'Organisational folder label.' },
      { field: 'isDefault',            type: 'boolean',                 optional: false, desc: 'Whether this is the default persona.' },
      { field: 'subjectivePronoun?',   type: 'string',                  optional: true,  desc: 'Subjective pronoun (e.g. "he", "she", "they").' },
      { field: 'objectivePronoun?',    type: 'string',                  optional: true,  desc: 'Objective pronoun (e.g. "him", "her", "them").' },
      { field: 'possessivePronoun?',   type: 'string',                  optional: true,  desc: 'Possessive pronoun (e.g. "his", "her", "their").' },
      { field: 'metadata',             type: 'Record<string, unknown>', optional: false, desc: 'Arbitrary metadata.' },
      { field: 'createdAt',            type: 'number',                  optional: false, desc: 'Creation timestamp (Unix ms).' },
      { field: 'updatedAt',            type: 'number',                  optional: false, desc: 'Last update timestamp (Unix ms).' },
    ],
  },
  {
    name: 'PersonaCreateInput',
    note: 'Passed to api.personas.create(input). Only name is required.',
    fields: [
      { field: 'name',                  type: 'string',                  optional: false, desc: 'Persona name.' },
      { field: 'title?',                type: 'string',                  optional: true,  desc: 'Short tagline.' },
      { field: 'description?',          type: 'string',                  optional: true,  desc: 'Persona description.' },
      { field: 'folder?',               type: 'string',                  optional: true,  desc: 'Organisational folder label.' },
      { field: 'isDefault?',            type: 'boolean',                 optional: true,  desc: 'Set as default persona (clears previous default).' },
      { field: 'attachedWorldBookId?',  type: 'string',                  optional: true,  desc: 'World book UUID to attach.' },
      { field: 'subjectivePronoun?',    type: 'string',                  optional: true,  desc: 'Subjective pronoun (e.g. "he", "she", "they").' },
      { field: 'objectivePronoun?',     type: 'string',                  optional: true,  desc: 'Objective pronoun (e.g. "him", "her", "them").' },
      { field: 'possessivePronoun?',    type: 'string',                  optional: true,  desc: 'Possessive pronoun (e.g. "his", "her", "their").' },
      { field: 'metadata?',             type: 'Record<string, unknown>', optional: true,  desc: 'Arbitrary metadata.' },
    ],
  },
  {
    name: 'PersonaUpdateInput',
    note: 'Passed to api.personas.update(personaId, input). All fields optional — only the fields provided are updated; omitted fields are left unchanged.',
    fields: [
      { field: 'name?',                 type: 'string',                  optional: true, desc: 'New persona name.' },
      { field: 'title?',                type: 'string',                  optional: true, desc: 'Short tagline.' },
      { field: 'description?',          type: 'string',                  optional: true, desc: 'Persona description.' },
      { field: 'folder?',               type: 'string',                  optional: true, desc: 'Organisational folder label.' },
      { field: 'isDefault?',            type: 'boolean',                 optional: true, desc: 'Set as default persona (clears previous default).' },
      { field: 'attachedWorldBookId?',  type: 'string',                  optional: true, desc: 'World book UUID to attach.' },
      { field: 'subjectivePronoun?',    type: 'string',                  optional: true, desc: 'Subjective pronoun (e.g. "he", "she", "they").' },
      { field: 'objectivePronoun?',     type: 'string',                  optional: true, desc: 'Objective pronoun (e.g. "him", "her", "them").' },
      { field: 'possessivePronoun?',    type: 'string',                  optional: true, desc: 'Possessive pronoun (e.g. "his", "her", "their").' },
      { field: 'metadata?',             type: 'Record<string, unknown>', optional: true, desc: 'Arbitrary metadata (replaces entire object).' },
    ],
  },
  // ─── Tools ────────────────────────────────────────────────────────────────────
  {
    name: 'ToolDefinition',
    note: 'Passed to api.tools.register(name, def, handler).',
    fields: [
      { field: 'display_name',      type: 'string',  optional: false, desc: 'Human-readable name shown in the Lumiverse Council tools list.' },
      { field: 'description',       type: 'string',  optional: false, desc: 'Description for the LLM — explains what the tool does and when to call it.' },
      { field: 'parameters?',       type: 'object',  optional: true,  desc: 'JSON Schema describing input parameters. Format: { type: "object", properties: {...}, required: [...] }.' },
      { field: 'council_eligible?', type: 'boolean', optional: true,  desc: 'When true, the tool appears in the Council tools list and can be assigned to Council members. Default false.' },
    ],
  },
  {
    name: 'ToolInvocationArgs',
    note: 'Parameter passed to tool handler callbacks registered via api.tools.register(). Contains well-known Lumiverse fields plus tool-specific parameters.',
    fields: [
      { field: 'context?',     type: 'string', optional: true, desc: 'Formatted chat context provided by Lumiverse (character info, world info, recent messages).' },
      { field: '__userId?',    type: 'string', optional: true, desc: 'User ID of the invoking user. Use for scoped api.* operations inside the handler.' },
      { field: '__deadlineMs?', type: 'number', optional: true, desc: 'Timestamp (ms) by which the handler must return a result.' },
      { field: '[key]',        type: 'unknown', optional: true, desc: 'Tool-specific parameters from the registration schema are available as additional fields.' },
    ],
  },
  {
    name: 'ToolInvocationContext',
    note: 'Optional third parameter passed to tool handlers. Populated when invoked via Lumiverse TOOL_INVOCATION; undefined when invoked via api.tools.invoke() (script-to-script). Field-level host requirements: requestId/councilMember require Lumiverse 8d310f8+ (spindle-types 0.4.25+); contextMessages require Lumiverse 993544c8+ (spindle-types 0.4.26+). Older hosts leave the corresponding fields undefined and the helper gracefully falls back.',
    fields: [
      { field: 'requestId?',       type: 'string',                optional: true, desc: 'Host-side correlation id for this invocation. Useful for matching handler-side logs against Lumiverse server logs.' },
      { field: 'councilMember?',   type: 'CouncilMemberContext',  optional: true, desc: 'Personality snapshot of the Council member that triggered the invocation. Populated only when the tool ran as part of a Council execution cycle; undefined for inline function-calling, api.tools.invoke(), and older hosts.' },
      { field: 'contextMessages?', type: 'LLMMessage[]',          optional: true, desc: "Structured chat context for Council invocations — same content as args.context but with role boundaries preserved. Prefer this over args.context when available — the ls:council-prompt helper's buildCouncilMessages uses it automatically when passed via the contextMessages option. Multi-part (text+image) content is flattened to its text portion before delivery. Undefined for non-Council paths / older hosts." },
    ],
  },
  {
    name: 'CouncilMemberContext',
    note: 'Re-exported from lumiverse-spindle-types. Personality snapshot of the Council member that triggered a tool invocation — identity, role, avatar, and Lumia personality fields. Delivered on ToolInvocationContext.councilMember.',
    fields: [
      { field: 'memberId',       type: 'string',  optional: false, desc: 'Unique Council member id (Council settings row id).' },
      { field: 'itemId',         type: 'string',  optional: false, desc: 'Source Lumia item id this member is backed by.' },
      { field: 'packId',         type: 'string',  optional: false, desc: 'Pack id the Lumia item lives in.' },
      { field: 'packName',       type: 'string',  optional: false, desc: 'Pack name the Lumia item lives in.' },
      { field: 'name',           type: 'string',  optional: false, desc: 'Display name of the Lumia item (also used as the member name).' },
      { field: 'role',           type: 'string',  optional: false, desc: 'Freeform role description assigned by the user (e.g. "Plot Enforcer", "Comic Relief").' },
      { field: 'chance',         type: 'number',  optional: false, desc: 'Probability (0–100) that this member participates in each generation.' },
      { field: 'avatarUrl',      type: 'string | null', optional: false, desc: 'Relative URL to the member\'s avatar (e.g. "/api/v1/images/{id}"), or null.' },
      { field: 'definition',     type: 'string',  optional: false, desc: 'Lumia "definition" field — physical/identity description.' },
      { field: 'personality',    type: 'string',  optional: false, desc: 'Lumia "personality" field.' },
      { field: 'behavior',       type: 'string',  optional: false, desc: 'Lumia "behavior" field — behavioural patterns.' },
      { field: 'genderIdentity', type: '0 | 1 | 2', optional: false, desc: 'Gender identity marker (0=unspecified, 1=feminine, 2=masculine).' },
    ],
  },
  {
    name: 'RegisteredToolInfo',
    note: 'Returned by api.tools.list(). A serialisable snapshot of a registered tool.',
    fields: [
      { field: 'name',             type: 'string',  optional: false, desc: 'Tool identifier (bare name, no prefix).' },
      { field: 'display_name',     type: 'string',  optional: false, desc: 'Human-readable name.' },
      { field: 'description',      type: 'string',  optional: false, desc: 'LLM-facing description.' },
      { field: 'parameters?',      type: 'object',  optional: true,  desc: 'JSON Schema for the tool\'s input parameters.' },
      { field: 'council_eligible', type: 'boolean', optional: false, desc: 'Whether the tool can be assigned to Council members.' },
      { field: 'scriptId',         type: 'string',  optional: false, desc: 'ID of the script that registered this tool.' },
      { field: 'scriptName',       type: 'string',  optional: false, desc: 'Name of the script that registered this tool.' },
    ],
  },
  // ─── Macros ──────────────────────────────────────────────────────────────────
  {
    name: 'MacroDefinition',
    note: 'Passed to api.macros.register(name, def, handler?).',
    fields: [
      { field: 'description', type: 'string',                                         optional: false, desc: 'Human-readable description shown in preset editors and macro browsers.' },
      { field: 'category?',   type: 'string',                                         optional: true,  desc: "Category label. Default: 'extension:lumiscript:user'." },
      { field: 'returnType?', type: "'string'|'integer'|'number'|'boolean'",          optional: true,  desc: 'Hint for value-type coercion on resolution. Default string.' },
      { field: 'args?',       type: 'Array<{ name, description?, required? }>',      optional: true,  desc: 'Argument schema shown to preset authors.' },
    ],
  },
  {
    name: 'MacroContext',
    note: 'Parameter passed to a pull-mode macro handler at resolution time. Mirrors Lumiverse\'s MacroExecContext. Per convention, `args` is on ctx — not a top-level variable.',
    fields: [
      { field: 'name',       type: 'string',                                optional: false, desc: 'The bare macro name (no `{{}}`, no arguments).' },
      { field: 'args',       type: 'string[]',                              optional: false, desc: 'Argument tokens parsed from the macro invocation.' },
      { field: 'env?',       type: '{ character?, chat?, names?, variables?, … }', optional: true, desc: 'Environment context populated by the macro engine (character UUID is NOT in here; use globalThis.__lsActiveCharId if you need it).' },
      { field: 'isScoped?',  type: 'boolean',                               optional: true,  desc: 'True when the macro is resolved inside a scoped block (e.g. {{if::…}}…{{/if}}).' },
      { field: 'body?',      type: 'string',                                optional: true,  desc: 'Body text for scoped macros.' },
    ],
  },
  {
    name: 'RegisteredMacroInfo',
    note: 'Returned by api.macros.list(). Visible across scripts — any script can see push-values set by any other script (matches the already-world-readable nature of macros).',
    fields: [
      { field: 'name',        type: 'string',                                optional: false, desc: 'Macro identifier.' },
      { field: 'description', type: 'string',                                optional: false, desc: 'Description as supplied at registration.' },
      { field: 'category',    type: 'string',                                optional: false, desc: 'Category label. User-registered macros default to `extension:lumiscript:user`.' },
      { field: 'returnType?', type: "'string'|'integer'|'number'|'boolean'", optional: true,  desc: 'Return-type hint.' },
      { field: 'args?',       type: 'Array<{ name, description?, required? }>', optional: true, desc: 'Argument schema.' },
      { field: 'mode',        type: "'push' | 'pull'",                       optional: false, desc: '`push` when registered without a handler; `pull` when handler-backed.' },
      { field: 'lastValue?',  type: 'string',                                optional: true,  desc: 'Most recent value pushed via updateValue. Only meaningful in push mode.' },
      { field: 'scriptId',    type: 'string',                                optional: false, desc: 'ID of the owning script.' },
      { field: 'scriptName',  type: 'string',                                optional: false, desc: 'Name of the owning script.' },
    ],
  },
  // ─── DB ──────────────────────────────────────────────────────────────────────
  {
    name: 'DbScope',
    note: 'Scope of an api.db collection — determines the storage path and resolution requirements. Baked into the collection handle at api.db.collection() time.',
    fields: [
      { field: `'script'`,    type: `'script'`,    optional: false, desc: 'Per-scriptId, cross-chat. Default. Stored at db/scripts/{scriptId}/{name}.json. Always resolves (scriptId always present).' },
      { field: `'character'`, type: `'character'`, optional: false, desc: 'Per-active-character, per-scriptId. Stored at db/characters/{characterId}/{scriptId}/{name}.json. Throws if there is no active character.' },
      { field: `'chat'`,      type: `'chat'`,      optional: false, desc: 'Per-active-chat, per-scriptId. Stored at db/chats/{chatId}/{scriptId}/{name}.json. Throws if there is no active chat.' },
    ],
  },
  {
    name: 'CollectionOpts',
    note: 'Options for api.db.collection(name, opts). Generic over the record type so schema (if provided) infers field shapes.',
    fields: [
      { field: 'scope?',  type: 'DbScope',    optional: true, desc: "Scope of the collection. Defaults to 'script'." },
      { field: 'schema?', type: 'ZodLike<T>', optional: true, desc: 'Optional Zod schema (or any object with a parse(data): T method) applied on every write — insert / insertMany / update. On update the MERGED record is validated against the full schema, not the raw patch. Validation failures throw `api.db: schema validation failed on <op>: <msg>`. find / findOne / count / query are NOT validated — if your schema evolves, use drop() + re-insert rather than expecting lazy migration.' },
    ],
  },
  {
    name: 'DbRecord',
    note: 'Record shape produced by api.db.*. Every inserted record carries id + createdAt + updatedAt alongside user-supplied fields. id and createdAt are immutable (update() silently strips them from the patch). updatedAt is bumped on every successful update.',
    fields: [
      { field: 'id',        type: 'string', optional: false, desc: 'UUID v4 auto-assigned at insert (overridable by caller).' },
      { field: 'createdAt', type: 'number', optional: false, desc: 'Epoch ms — set once at insert. Immutable.' },
      { field: 'updatedAt', type: 'number', optional: false, desc: 'Epoch ms — bumped to Date.now() on every successful update.' },
      { field: '[key: string]', type: 'unknown', optional: false, desc: 'User-supplied fields — anything JSON-serializable.' },
    ],
  },
  {
    name: 'DbFilter',
    note: 'Filter shapes accepted by find() / findOne() / update() / delete() / count(). The store picks a matching strategy based on the runtime type. Operator envelopes (LumiScript 0.20.0+) unlock Mongo-style comparisons without dropping to a function filter.',
    fields: [
      { field: 'undefined',          type: 'undefined',                optional: false, desc: 'Matches all records. Used as sugar for "operate on everything".' },
      { field: 'function',           type: '(record: T) => boolean',   optional: false, desc: 'Caller predicate. Full expressive power. A throwing predicate is treated as no-match — errors never propagate.' },
      { field: 'object (literal)',   type: 'Partial<T>',               optional: false, desc: "Deep-equality match with dot-notation path resolution. { 'author.name': 'alice' } matches nested fields. Arrays compared via JSON.stringify." },
      { field: 'object (envelope)',  type: '{ $op: value, ... }',      optional: false, desc: 'Value position accepts an operator envelope — all keys must start with `$`; mixed-key envelopes throw. Supported: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin, $exists, $regex. Example: { margin: { $gt: 0 }, tier: { $in: ["hard", "very_hard"] } }. $eq is the explicit form of literal equality ({ name: { $eq: "alice" } } and { name: "alice" } match identically). Numeric comparisons return false on type mismatch (never throw); bad arg shapes ($in without array, invalid $regex) throw. $regex also accepts a RegExp instance shorthand: { name: /alice/i }. $options sibling is honored alongside $regex for flag control.' },
    ],
  },
  // ─── Events ──────────────────────────────────────────────────────────────────
  {
    name: 'EventTrackOptions',
    note: 'Options for api.events.track().',
    fields: [
      { field: 'level?',         type: "'debug'|'info'|'warn'|'error'", optional: true, desc: 'Severity level (default: info).' },
      { field: 'chatId?',        type: 'string',  optional: true, desc: 'Associate with a specific chat (defaults to active chat).' },
      { field: 'retentionDays?', type: 'number',  optional: true, desc: 'Auto-expire after this many days.' },
    ],
  },
  {
    name: 'EventQueryFilter',
    note: 'Filter for api.events.query() and api.events.replay().',
    fields: [
      { field: 'eventName?', type: 'string',  optional: true, desc: 'Filter by event name.' },
      { field: 'chatId?',    type: 'string',  optional: true, desc: 'Filter by chat.' },
      { field: 'since?',     type: 'string',  optional: true, desc: 'ISO 8601 — only events after this timestamp.' },
      { field: 'until?',     type: 'string',  optional: true, desc: 'ISO 8601 — only events before this timestamp.' },
      { field: 'level?',     type: "'debug'|'info'|'warn'|'error'", optional: true, desc: 'Filter by severity level.' },
      { field: 'limit?',     type: 'number',  optional: true, desc: 'Maximum number of results.' },
    ],
  },
  {
    name: 'EventRecord',
    note: 'Returned by api.events.query() and api.events.replay().',
    fields: [
      { field: 'id',        type: 'string',  optional: false, desc: 'Unique event ID.' },
      { field: 'ts',        type: 'string',  optional: false, desc: 'ISO 8601 timestamp.' },
      { field: 'eventName', type: 'string',  optional: false, desc: 'Name of the tracked event.' },
      { field: 'level',     type: "'debug'|'info'|'warn'|'error'", optional: false, desc: 'Severity level.' },
      { field: 'chatId?',   type: 'string',  optional: true,  desc: 'Chat this event was associated with.' },
      { field: 'payload?',  type: 'Record<string, unknown>', optional: true, desc: 'Arbitrary event data.' },
    ],
  },
  // ─── Macros ──────────────────────────────────────────────────────────────────
  {
    name: 'MacrosResolveOptions',
    note: 'Options for api.utils.macros.resolve(template, options?).',
    fields: [
      { field: 'chatId?',      type: 'string',  optional: true, desc: 'Chat ID for context-sensitive macros. Defaults to the active chat.' },
      { field: 'characterId?', type: 'string',  optional: true, desc: 'Character ID for character macros. Inferred from active chat if omitted.' },
      { field: 'commit?',      type: 'boolean', optional: true, desc: 'When false, requests a dry / non-committing resolve — extension macro handlers that honour the flag skip side effects (disk writes, event emissions, etc.). Default: true.' },
    ],
  },
  {
    name: 'MacrosResolveResult',
    note: 'Returned by api.utils.macros.resolve().',
    fields: [
      { field: 'text',        type: 'string', optional: false, desc: 'Resolved template text.' },
      { field: 'diagnostics', type: 'Array<{ message, offset, length }>', optional: false, desc: 'Diagnostics from the macro engine (parse errors, unknown macros, etc.).' },
    ],
  },
  // ─── Tokens ──────────────────────────────────────────────────────────────────
  {
    name: 'TokenCountOptions',
    note: 'Options for api.tokens.count* methods.',
    fields: [
      { field: 'model?',       type: 'string',             optional: true, desc: 'Explicit model ID to resolve the tokenizer against. Takes precedence over modelSource when both are set.' },
      { field: 'modelSource?', type: "'main' | 'sidecar'", optional: true, desc: "Which configured model to use when `model` isn't set. 'main' = user's default connection profile (default), 'sidecar' = user's selected sidecar model." },
    ],
  },
  {
    name: 'TokenCountResult',
    note: 'Returned by api.tokens.count* methods.',
    fields: [
      { field: 'totalTokens',   type: 'number',                             optional: false, desc: 'Total token count.' },
      { field: 'model',         type: 'string',                             optional: false, desc: 'Model ID actually used to resolve the tokenizer.' },
      { field: 'modelSource',   type: "'main' | 'sidecar' | 'explicit'",    optional: false, desc: 'Whether the tokenizer model came from the main connection, sidecar selection, or an explicit override.' },
      { field: 'tokenizerId',   type: 'string | null',                      optional: false, desc: 'Null when no exact tokenizer match was found and an approximate fallback was used.' },
      { field: 'tokenizerName', type: 'string',                             optional: false, desc: 'Human-readable tokenizer name (empty string when approximate).' },
      { field: 'approximate',   type: 'boolean',                            optional: false, desc: 'True when Lumiverse fell back to its approximate char/4 heuristic.' },
    ],
  },
  // ─── Characters ──────────────────────────────────────────────────────────────
  {
    name: 'CharacterAvatarUpload',
    note: 'Payload for api.characters.setAvatar(id, avatar).',
    fields: [
      { field: 'data',      type: 'Uint8Array', optional: false, desc: 'Raw avatar image bytes. Source from api.utils.http.*, api.files.*, api.enclave.*, etc.' },
      { field: 'filename?', type: 'string',     optional: true,  desc: 'Optional filename — preserves the file extension when stored.' },
      { field: 'mimeType?', type: 'string',     optional: true,  desc: "Optional content type. Defaults to 'image/png' on the host side." },
    ],
  },
];

const KeyTypesTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {KEY_TYPES.map(type => (
        <>
          <tr key={`hdr-${type.name}`}>
            <td colSpan={3} className="ls-ref-group-header">
              {type.name}
              {type.note && (
                <div className="ls-ref-type-note">{type.note}</div>
              )}
            </td>
          </tr>
          {type.fields.map(f => (
            <tr key={`${type.name}-${f.field}`}>
              <td>
                <Code>{f.optional && !f.field.endsWith('?') ? `${f.field}?` : f.field}</Code>
              </td>
              <td><span className="ls-ref-muted">{f.type}</span></td>
              <td><span className="ls-ref-muted">{f.desc}</span></td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── API functions ────────────────────────────────────────────────────────────

export interface FnRow { name: string; args: string; desc: string; }
export interface FnGroup { group: string; rows: FnRow[]; }

export const API_GROUPS: FnGroup[] = [
  {
    group: 'api.chat',
    rows: [
      { name: 'getMessages',       args: 'options?',              desc: 'Get messages in the current chat. Pass { last: N } for the N most recent.' },
      { name: 'sendMessage',       args: 'content, options?',     desc: 'Append a new message. Options: role, metadata.' },
      { name: 'editMessage',       args: 'id, contentOrPatch',    desc: 'Edit a message by ID. Pass a string to replace the active swipe\'s content, or a MessagePatch to update swipes / swipeId / swipeDates / reasoning / metadata. Patches touching swipe-shaped fields fire SWIPE_EDITED alongside MESSAGE_EDITED.' },
      { name: 'deleteMessage',     args: 'id',                    desc: 'Delete a message by ID.' },
      { name: 'getChatId',         args: '—',                     desc: 'Return the active chat ID, or null.' },
      { name: 'getMetadata',       args: 'key',                   desc: 'Get a metadata value from the current chat.' },
      { name: 'setMetadata',       args: 'key, value',            desc: 'Set a metadata key (read-modify-write).' },
      { name: 'inject',            args: 'id, content, options?', desc: 'Register a prompt injection. Options: mode, role, depth, ephemeral.' },
      { name: 'removeInjection',   args: 'id',                    desc: 'Remove one injection by ID.' },
      { name: 'getInjections',     args: '—',                     desc: 'List all active injections across all scripts.' },
      { name: 'clearInjections',   args: '—',                     desc: "Remove all injections from this script." },
      { name: 'clearAllInjections', args: '—',                   desc: 'Remove ALL injections across all scripts.' },
      { name: 'registerContentProcessor', args: 'handler, options?', desc: 'Register a handler that fires before a user-initiated message write hits SQLite. Returns a patch { content?, extra? } to transform what gets stored. Options: id, priority (default 100), origin filter, timeoutMs (default 2000). NOT invoked for api.chat.* mutations (loop safety). Returns handle { id, remove }. Requires chat_mutation.' },
      { name: 'listContentProcessors', args: '—',                  desc: 'List all currently registered message content processors across all scripts.' },
    ],
  },
  {
    group: 'api.llm',
    rows: [
      { name: 'generate',             args: 'messages, options?',               desc: 'Generate a text response from the LLM.' },
      { name: 'generateStructured',   args: 'messages, schema, options?',       desc: 'Generate and parse a structured JSON response against a Zod or JSON Schema.' },
      { name: 'generateWithTools',    args: 'messages, tools, options?, schema?', desc: 'Generate with tool schemas. Returns text or function calls for an agentic loop.' },
      { name: 'dryRun',               args: 'options?',                         desc: 'Assemble the full prompt without calling the LLM. Returns messages, token counts, WI stats.' },
    ],
  },
  {
    group: 'api.variables.local / .global / .character',
    rows: [
      { name: 'get',    args: 'key, defaultValue?', desc: 'Get a variable. Returns defaultValue if the key does not exist.' },
      { name: 'set',    args: 'key, value',          desc: 'Set a variable (JSON-serialized).' },
      { name: 'delete', args: 'key',                 desc: 'Delete a variable. Returns true if it existed.' },
      { name: 'has',    args: 'key',                 desc: 'Check if a variable exists.' },
      { name: 'clear',  args: '—',                   desc: 'Delete all variables in this store.' },
    ],
  },
  {
    group: 'api.json',
    rows: [
      { name: 'parse',     args: 'text',                        desc: 'Parse a JSON string. Throws on invalid JSON.' },
      { name: 'stringify', args: 'data, pretty?',               desc: 'Serialize to JSON. Pass true for formatted output.' },
      { name: 'clone',     args: 'data',                        desc: 'Deep clone a value.' },
      { name: 'get',       args: 'data, path, defaultValue?',   desc: 'Get a nested value by dot-path (e.g. "user.address.city").' },
      { name: 'set',       args: 'data, path, value',           desc: 'Set a nested value by dot-path.' },
      { name: 'merge',     args: '...objects',                  desc: 'Deep merge objects. Later arguments override earlier ones.' },
      { name: 'isValid',   args: 'text',                        desc: 'Check if a string is valid JSON.' },
      { name: 'filter',    args: 'data, predicate',             desc: 'Filter an array by predicate.' },
      { name: 'sort',      args: 'data, key, direction?',       desc: 'Sort array by key (asc or desc).' },
      { name: 'uniq',      args: 'data',                        desc: 'Deduplicate array.' },
      { name: 'flatten',   args: 'data',                        desc: 'Flatten a nested array.' },
      { name: 'query',     args: 'data, queryString',             desc: 'Run a jsonquery pipeline (jq-like). See jsonquerylang.org.' },
    ],
  },
  {
    group: 'api.utils',
    rows: [
      { name: 'uuid',                   args: '—',                             desc: 'Generate a UUID v4 string.' },
      { name: 'shortId',                args: '—',                             desc: 'Generate a short random ID (8 chars, URL-safe).' },
      { name: 'wait',                   args: 'ms',                            desc: 'Pause execution for ms milliseconds.' },
      { name: 'random.int',             args: 'min, max',                      desc: 'Random integer in [min, max] inclusive.' },
      { name: 'random.float',           args: 'min, max',                      desc: 'Random float in [min, max).' },
      { name: 'random.pick',            args: 'array',                         desc: 'Pick a random element from an array.' },
      { name: 'random.bool',            args: '—',                             desc: 'Random true/false.' },
      { name: 'random.chance',          args: 'probability',                   desc: 'Returns true with probability p (0–1).' },
      { name: 'random.shuffle',         args: 'array',                         desc: 'Return a shuffled copy of the array.' },
      { name: 'http.get',               args: 'url, options?',                 desc: 'GET request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.post',              args: 'url, body, options?',           desc: 'POST request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.put',               args: 'url, body, options?',           desc: 'PUT request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.delete',            args: 'url, options?',                 desc: 'DELETE request via cors_proxy. Requires allowDangerous.' },
      { name: 'http.request',           args: 'url, options',                  desc: 'Custom HTTP request via cors_proxy. Requires allowDangerous.' },
      { name: 'template.render',        args: 'template, data?, options?',     desc: 'Two-pass render: Lumiverse macros first, then Handlebars. Returns Promise<string>.' },
      { name: 'template.compile',       args: 'template',                      desc: 'Pre-compile a Handlebars template for sync reuse. No macro resolution.' },
      { name: 'template.registerHelper', args: 'name, fn',                    desc: 'Register a custom Handlebars helper scoped to this script.' },
      { name: 'macros.resolve',         args: 'template, options?',            desc: 'Resolve Lumiverse macros without the Handlebars pass. Pass { commit: false } for a dry resolve — extension macro handlers that honour the flag skip their side effects (useful for template previews). chatId / characterId default to the active context. Returns Promise<{ text, diagnostics }>.' },
      { name: 'image.detectMime',       args: 'bytes',                          desc: 'Magic-byte sniff. Returns image MIME type (image/png, image/jpeg, image/webp, image/gif, image/bmp) or null. Pair with api.characters.setAvatar when the source format is unknown — the host defaults to image/png on missing mimeType.' },
      { name: 'image.dataUrlToBytes',   args: 'url',                            desc: 'Parse a base64 data URL (data:<mime>;base64,<payload>) into { data: Uint8Array, mimeType }. Returns null for malformed or non-base64 data URIs.' },
      { name: 'image.bytesToDataUrl',   args: 'bytes, mimeType',                desc: 'Encode bytes + MIME into a base64 data URL. Useful for previewing proposed avatars in the UI before committing via setAvatar.' },
    ],
  },
  {
    group: 'api.ui',
    rows: [
      { name: 'toast',     args: 'message, type?, options?',         desc: 'Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration.' },
      { name: 'prompt',    args: 'message, defaultValue?, options?', desc: 'Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline.' },
      { name: 'confirm',   args: 'message, title?, options?',        desc: 'Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel.' },
      { name: 'showModal', args: 'items, options',                   desc: 'Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent.' },
      { name: 'showAdvancedModal', args: 'options',                  desc: 'Open a modal whose body is fully script-owned via a DOMHandle (handle.root). Use api.ui.dom.* on root.update/on/... to render and wire interactive UIs. Up to 2 concurrent modals per script (pre-checked backend-side). Returns AdvancedModalHandle { modalId, root, dismissed, setTitle, dismiss, onDismiss }. Requires app_manipulation.' },
      { name: 'showContextMenu', args: 'options',                    desc: "Show a themed context menu at a screen position and await the user's selection. Resolves with the chosen item's key, or null if dismissed. Options: { position: { x, y }, items: [{ key, label, type?, disabled?, danger?, active? }] }. Pair with a contextmenu event listener using { preventDefault: true } to suppress the native browser menu. Free-tier." },
      { name: 'registerInputBarAction', args: 'options',             desc: 'Register an action inside the chat input-bar Extras popover. Extension actions are visually grouped under a teal-badged extension header. Optional subtitle adds a second line under the label (status text, shortcut, etc.) — settable via setSubtitle for live updates. Limits: 4 per script (pre-checked backend-side), 12 global. Returns InputBarActionHandle { actionId, setLabel, setSubtitle, setEnabled, onClick, destroy }. Free-tier.' },
      { name: 'createFloatWidget', args: 'options',                  desc: 'Create a small draggable widget overlaying the app. Body DOM is fully script-owned via handle.root (DOMHandle). Supports snap-to-edge, chromeless mode, drag-end callbacks for position persistence. Limits: 2 widgets per script (pre-checked backend-side), 8 global. Returns FloatWidgetHandle { widgetId, root, moveTo, getPosition, setVisible, isVisible, onDragEnd, destroy }. Requires ui_panels.' },
      { name: 'registerDrawerTab', args: 'options',                  desc: 'Register a tab in the ViewportDrawer sidebar. Body DOM is script-owned via handle.root (DOMHandle). Tabs auto-appear in the command palette (Ctrl+K) searchable by title, shortName, description terms, keywords, and the extension name. Limits: 1 tab per script (LumiScript-enforced), 4 total across all LumiScript scripts (Spindle host cap), 8 global. Returns DrawerTabHandle { tabId, root, setTitle, setShortName, setBadge, activate, onActivate, destroy }. Free-tier.' },
      { name: 'editText',  args: 'title?, value?, options?',         desc: 'Open the native Lumiverse expanded text editor with macro syntax highlighting. Blocks until close. Returns edited text or null if cancelled. Options: placeholder.' },
      { name: 'pushNotification', args: 'title, body, options?',   desc: 'Send an OS push notification. Only delivered when app is unfocused. Returns { sent }. Options: tag (dedup), url, icon, rawTitle, image. Requires push_notification.' },
      { name: 'getPushStatus', args: '—',                          desc: 'Check if push notifications are available. Returns { available, subscriptionCount }. Requires push_notification.' },
    ],
  },
  {
    group: 'api.ui.dom',
    rows: [
      { name: 'inject',          args: 'target, html, options?',     desc: 'Inject sanitized HTML at a CSS selector. Returns DOMHandle { id, update, remove, on }. Options: position (default "beforeend"), id (stable ID for idempotent injection). Requires app_manipulation.' },
      { name: 'injectAtMessage', args: 'messageId, html, options?', desc: 'Inject sanitized HTML into a message bubble. Waits up to 5 s for the element if not yet rendered. Options: position ("footer" default / "header"), id (stable ID). Returns DOMHandle. Requires app_manipulation.' },
      { name: 'addStyle',         args: 'css',                      desc: 'Add a <style> element scoped to this script via @scope. Returns { remove() }. Use --lumiverse-* CSS variables for theming. Requires app_manipulation.' },
      { name: 'cleanup',          args: '—',                        desc: 'Remove all DOM injections and styles created by this script. Requires app_manipulation.' },
    ],
  },
  {
    group: 'api.files — user* (per-user persistent)',
    rows: [
      { name: 'userRead',   args: 'path',        desc: 'Read a file as UTF-8 text.' },
      { name: 'userWrite',  args: 'path, data',  desc: 'Write UTF-8 text (creates dirs as needed).' },
      { name: 'userDelete', args: 'path',        desc: 'Delete a file.' },
      { name: 'userExists', args: 'path',        desc: 'Check if a path exists.' },
      { name: 'userList',   args: 'prefix?',     desc: 'List files under a prefix.' },
      { name: 'userMkdir',  args: 'path',        desc: 'Create a directory.' },
    ],
  },
  {
    group: 'api.files — shared* (extension-wide persistent)',
    rows: [
      { name: 'sharedRead',   args: 'path',             desc: 'Read a file as UTF-8 text.' },
      { name: 'sharedWrite',  args: 'path, data',       desc: 'Write UTF-8 text (creates dirs as needed).' },
      { name: 'sharedDelete', args: 'path',             desc: 'Delete a file.' },
      { name: 'sharedExists', args: 'path',             desc: 'Check if a path exists.' },
      { name: 'sharedList',   args: 'prefix?',          desc: 'List files under a prefix.' },
      { name: 'sharedStat',   args: 'path',             desc: 'Get file metadata (size, modifiedAt, isFile, isDirectory).' },
      { name: 'sharedMkdir',  args: 'path',             desc: 'Create a directory.' },
      { name: 'sharedMove',   args: 'from, to',         desc: 'Move or rename a file.' },
    ],
  },
  {
    group: 'api.files — temp* (TTL-bound, requires ephemeral_storage)',
    rows: [
      { name: 'tempRead',         args: 'path',               desc: 'Read a file as UTF-8 text.' },
      { name: 'tempWrite',        args: 'path, data, options?', desc: 'Write UTF-8 text. Options: { ttlMs } for expiry.' },
      { name: 'tempDelete',       args: 'path',               desc: 'Delete a file.' },
      { name: 'tempList',         args: 'prefix?',            desc: 'List files under a prefix.' },
      { name: 'tempStat',         args: 'path',               desc: 'Get file metadata (sizeBytes, createdAt, expiresAt?).' },
      { name: 'tempClearExpired', args: '—',                  desc: 'Remove all expired files. Returns count removed.' },
    ],
  },
  {
    group: 'api.characters',
    rows: [
      { name: 'list',      args: 'options?',        desc: 'List characters (paginated). Returns { data, total }.' },
      { name: 'get',       args: 'id',              desc: 'Get a character by ID. Returns null if not found.' },
      { name: 'getByName', args: 'name',            desc: 'Find the first character whose name exactly matches (case-sensitive). Scans all pages. Returns null if no match.' },
      { name: 'create',    args: 'input',           desc: 'Create a new character.' },
      { name: 'setAvatar', args: 'id, avatar',      desc: 'Replace a character\'s avatar image. `avatar` is { data: Uint8Array, filename?, mimeType? }. Useful for image-gen integrations or bulk avatar tooling.' },
      { name: 'update',    args: 'id, input',       desc: 'Update a character.' },
      { name: 'delete',    args: 'id',              desc: 'Delete a character. Returns true if deleted.' },
    ],
  },
  {
    group: 'api.chats',
    rows: [
      { name: 'list',        args: 'options?',           desc: 'List chat sessions (paginated). Options: characterId, limit, offset.' },
      { name: 'get',         args: 'id',                 desc: 'Get a chat session by ID.' },
      { name: 'getActive',   args: '—',                  desc: 'Get the currently active chat session.' },
      { name: 'update',      args: 'id, input',          desc: 'Update a chat session name or metadata.' },
      { name: 'delete',      args: 'id',                 desc: 'Delete a chat session and all its messages.' },
      { name: 'getMemories', args: 'chatId?, options?',  desc: 'Retrieve long-term memory chunks via vector search. Falls back to active chat.' },
    ],
  },
  {
    group: 'api.worldInfo',
    rows: [
      { name: 'list',                args: 'options?',          desc: 'List world books (paginated).' },
      { name: 'get',                 args: 'ref',               desc: 'Get a world book by ID or name.' },
      { name: 'create',              args: 'input',             desc: 'Create a world book.' },
      { name: 'update',              args: 'ref, input',        desc: 'Update a world book by ID or name.' },
      { name: 'delete',              args: 'ref',               desc: 'Delete a world book and all its entries.' },
      { name: 'entries.list',        args: 'ref, options?',     desc: 'List entries in a world book.' },
      { name: 'entries.get',         args: 'entryId',           desc: 'Get a single entry by ID.' },
      { name: 'entries.create',      args: 'ref, input',        desc: 'Create a new entry in a world book.' },
      { name: 'entries.update',      args: 'entryId, input',    desc: 'Update an entry by ID.' },
      { name: 'entries.delete',      args: 'entryId',           desc: 'Delete an entry by ID.' },
      { name: 'entries.listByAutomationIdPrefix', args: 'prefix', desc: 'Find all entries across all world books whose automationId starts with the given prefix. Useful for enumerating / cleaning up entries a script owns (e.g. "lumiscript:<scriptId>:" convention). Returns WorldInfoEntry[]; O(books × entries-per-book).' },
      { name: 'getCapturedActive',   args: 'chatId?',           desc: 'Get all entries that would activate for the current chat (full pipeline).' },
    ],
  },
  {
    group: 'api.personas',
    rows: [
      { name: 'list',         args: 'options?',           desc: 'List personas (paginated).' },
      { name: 'get',          args: 'personaId',          desc: 'Get a persona by ID.' },
      { name: 'getDefault',   args: '—',                  desc: 'Get the default persona (isDefault = true).' },
      { name: 'getActive',    args: '—',                  desc: 'Get the currently active persona.' },
      { name: 'create',       args: 'input',              desc: 'Create a persona.' },
      { name: 'update',       args: 'personaId, input',   desc: 'Update a persona.' },
      { name: 'delete',       args: 'personaId',          desc: 'Delete a persona.' },
      { name: 'switchActive', args: 'personaId | null',   desc: 'Switch the active persona. Pass null to deactivate.' },
      { name: 'getWorldBook', args: 'personaId',          desc: 'Get the world book attached to a persona.' },
    ],
  },
  {
    group: 'api.tools',
    rows: [
      { name: 'register',   args: 'name, def, handler',  desc: 'Register an LLM tool. Handler receives (args, api, ctx?) and must return a string. ctx is populated when invoked via Lumiverse TOOL_INVOCATION — read ctx.councilMember to personalise output per Council member, ctx.requestId to correlate with host-side logging.' },
      { name: 'unregister', args: 'name',                desc: "Unregister a tool registered by this script. No-op if not found." },
      { name: 'list',       args: '—',                   desc: 'List all currently registered tools across all scripts.' },
      { name: 'invoke',     args: 'name, args?',         desc: 'Invoke a registered tool handler directly (for use inside an agentic loop).' },
    ],
  },
  {
    group: 'api.macros',
    rows: [
      { name: 'register',    args: 'name, def, handler?', desc: 'Register a Lumiverse macro. Omit handler for push-mode (value set via updateValue); provide handler for pull-mode (computed at resolution).' },
      { name: 'updateValue', args: 'name, value',         desc: 'Push a new value for a push-mode macro. Throws if the macro was registered with a handler.' },
      { name: 'unregister',  args: 'name',                desc: 'Unregister a macro owned by this script. No-op if not found or not owned.' },
      { name: 'list',        args: '—',                   desc: 'List all currently registered macros across all scripts.' },
      { name: 'registerInterceptor', args: 'handler, options?', desc: 'Register a handler that receives the RAW template before Lumiverse parses it; return a transformed template or void to pass through. Use for iteration-heavy templates ({{#each LARGE_LIST}}…{{my_macro}}…{{/each}}) where per-macro RPC cost dominates. Options: id, priority (default 100), phase filter (prompt/display/response/other), matchTemplate (string | string[] | RegExp), timeoutMs (default 2000). Returns handle { id, remove }. Requires macro_interceptor permission.' },
      { name: 'listInterceptors',    args: '—',                desc: 'List all currently registered macro interceptors across all scripts.' },
    ],
  },
  {
    group: 'api.broadcast',
    rows: [
      { name: 'emit', args: 'event, payload?', desc: 'Fire a named event to all subscribed handlers across all scripts.' },
      { name: 'on',   args: 'event, handler',  desc: 'Subscribe to a named event. Returns an unsubscribe function.' },
    ],
  },
  {
    group: 'api.commands',
    rows: [
      { name: 'register',   args: 'commands[]',         desc: 'Register (or replace) command palette entries. Max 20 per extension.' },
      { name: 'unregister',  args: 'commandIds?',       desc: 'Remove specific commands by ID, or all if no IDs given.' },
      { name: 'onInvoked',  args: 'handler',            desc: 'Register a handler for when the user selects a command. Returns unsubscribe fn.' },
    ],
  },
  {
    group: 'api.events',
    rows: [
      { name: 'track',          args: 'eventName, payload?, options?', desc: 'Record a named event. Options: level, chatId, retentionDays.' },
      { name: 'query',          args: 'filter?',                      desc: 'Query events (newest-first). Filter by name, chat, date range, level, limit.' },
      { name: 'replay',         args: 'filter?',                      desc: 'Replay events (oldest-first). Same filter options as query.' },
      { name: 'getLatestState', args: 'keys[]',                       desc: 'Retrieve latest known state for a set of keys. Useful for resuming after restarts.' },
    ],
  },
  {
    group: 'api.enclave',
    rows: [
      { name: 'put',    args: 'key, value', desc: 'Store or overwrite an AES-256-GCM encrypted secret. Requires allowDangerous. Key: alphanumeric + _ - . (max 128 chars); value: printable ASCII, max 64 KB.' },
      { name: 'get',    args: 'key',        desc: 'Retrieve a decrypted secret, or null if not found. Requires allowDangerous.' },
      { name: 'delete', args: 'key',        desc: 'Delete a secret. Returns true if it existed. Requires allowDangerous.' },
      { name: 'has',    args: 'key',        desc: 'Check if a secret exists without decrypting it. Requires allowDangerous.' },
      { name: 'list',   args: '—',          desc: 'List all secret keys for this user and extension. Requires allowDangerous.' },
    ],
  },
  {
    group: 'api.tokens',
    rows: [
      { name: 'countText',     args: 'text, options?',     desc: 'Server-side token count for an arbitrary string. Uses the provider\'s actual tokenizer (falls back to char/4 heuristic with `approximate: true`). Options: { model?, modelSource? } — `model` overrides `modelSource`. Returns { totalTokens, model, modelSource, tokenizerId, tokenizerName, approximate }. Free-tier.' },
      { name: 'countMessages', args: 'messages, options?', desc: 'Same as countText but for an array of LLMMessage-shaped items. Accepts the output of api.chat.getMessages directly (only role + content are used). Free-tier.' },
      { name: 'countChat',     args: 'chatId, options?',   desc: 'Count tokens for a live stored chat by ID. Convenient when you want to size a whole chat without fetching messages yourself. Free-tier.' },
    ],
  },
  {
    group: 'api.db',
    rows: [
      { name: 'collection',            args: 'name, opts?',            desc: "Open or create a collection. opts.scope = 'script' (default, per-scriptId) / 'character' (per-active-character) / 'chat' (per-active-chat). opts.schema (0.20.0+) attaches a ZodLike validator applied on every write. Path is baked into the handle at creation — throws if scope requires context (e.g. 'chat') that isn't present. Collection name: 1-64 chars, alphanumeric + _ - ., leading char must be alphanumeric." },
      { name: 'list',                  args: 'scope?',                 desc: 'List collection names visible to this script in the given scope (default `script`). Owner-scoped — cross-script visibility is not supported.' },
      { name: 'exists',                args: 'name, scope?',           desc: 'Cheap existence check — true if the collection file exists, false otherwise. Does NOT load or parse. Ownership-safe: scope paths bake in the calling script id, so exists only sees this script\'s own collections. (0.20.0+)' },
      { name: 'drop',                  args: 'name, scope?',           desc: 'Delete a collection entirely. No-op if the collection does not exist. Fires `ls:collection:dropped` with deletedCount.' },
      { name: 'collection.insert',     args: 'record',                 desc: 'Insert a record. Auto-assigns id (UUID v4), createdAt, updatedAt unless caller supplies them. Returns the persisted record. With schema: validates AFTER injection; reserved fields (id/createdAt/updatedAt) are preserved even when the schema strips unknown keys.' },
      { name: 'collection.insertMany', args: 'records',                desc: 'Batch-insert N records with a single file-write. All records share one timestamp (batch-commit semantic). Atomicity: validation + size guard run on the final array before persist — if any record fails, NOTHING lands. Fires one `ls:collection:inserted` per record in insertion order after the persist resolves. Empty array is a fast no-op. (0.20.0+)' },
      { name: 'collection.find',       args: 'filter?',                desc: "Find matching records. Filter: undefined = all, Partial<T> = literal match with dot-notation paths, (r) => boolean = caller predicate, or operator envelope { $gt, $in, $regex, ... } per-value (0.20.0+). Direct RegExp shorthand also works: { name: /alice/i }." },
      { name: 'collection.findOne',    args: 'filter',                 desc: 'First matching record or null.' },
      { name: 'collection.update',     args: 'filter, patch',          desc: 'Update all matching records. Returns count. Silently strips id/createdAt/updatedAt from patch — updatedAt is bumped to Date.now() on every match. With schema: validates the MERGED record against the full schema (not the patch alone); atomic (no records persist if any validation fails).' },
      { name: 'collection.delete',     args: 'filter',                 desc: 'Delete all matching records. Returns count.' },
      { name: 'collection.count',      args: 'filter?',                desc: 'Count matching records (or all if filter omitted).' },
      { name: 'collection.clear',      args: '—',                      desc: 'Remove all records, leaving an empty collection file.' },
      { name: 'collection.query',      args: 'jsonQuery',              desc: "Run a jsonquery string against the full collection. Escape hatch for aggregations / sorts / complex projections. Example: 'filter(.margin > 0) | size()'. Throws SyntaxError on malformed queries." },
    ],
  },
  {
    group: 'script',
    rows: [
      { name: 'id',      args: '(property)', desc: "This script's stable UUID. Immutable across enables, edits, renames. Use as owner key for any external state the script creates (world-book entries via automation_id, persistent storage paths, etc.)." },
      { name: 'name',    args: '(property)', desc: "This script's current human-readable name. Tracks the Script Manager — can change when the user renames. Useful for log lines; NOT stable for ownership (use script.id for that)." },
      { name: 'type',    args: '(property)', desc: "Script type: 'trigger' or 'library'." },
      { name: 'require', args: 'nameOrId', desc: "Load a library by name/ID, or a built-in library by ls: prefix (e.g. 'ls:components')." },
    ],
  },
];

const ApiFunctionsTable: FC = () => (
  <table className="ls-ref-table">
    <thead>
      <tr>
        <th>Method</th>
        <th>Arguments</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {API_GROUPS.map(group => (
        <>
          <GroupHeader key={`hdr-${group.group}`} label={group.group} cols={3} />
          {group.rows.map(row => (
            <tr key={`${group.group}-${row.name}`}>
              <td><Code>{row.name}</Code></td>
              <td><span className="ls-ref-muted">{row.args}</span></td>
              <td><span className="ls-ref-muted">{row.desc}</span></td>
            </tr>
          ))}
        </>
      ))}
    </tbody>
  </table>
);

// ─── Built-in libraries ──────────────────────────────────────────────────────

export const BUILTIN_COMPONENTS: FnRow[] = [
  { name: 'messageFooter',  args: 'messageId, html, options?',  desc: 'Attach a styled footer below a message bubble. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }.' },
  { name: 'messageHeader',  args: 'messageId, html, options?',  desc: 'Attach a styled header above message content. Returns DOMHandle, or CollapsibleDOMHandle when options.collapsible is true. Options: { id?, className?, collapsible?, title?, defaultCollapsed? }.' },
  { name: 'progressBar',    args: 'target, options?',           desc: 'Inject a progress bar with live setValue(). Returns ProgressBarHandle. Options: { value?, label?, color?, showPercent?, height?, id?, className? }.' },
  { name: 'floatingButton', args: 'label, options?',            desc: 'Fixed-position action button. Returns DOMHandle. Options: { position?, icon?, variant?, size?, id?, className? }.' },
  { name: 'badgeHtml',      args: 'text, options?',             desc: 'Returns badge/pill HTML string for composing inside other injections.' },
  { name: 'statBarHtml',    args: 'label, value, options?',     desc: 'Returns labeled stat bar HTML string. Options: { max?, color?, showValue?, height?, className? }.' },
  { name: 'keyValueHtml',   args: 'label, value, options?',     desc: 'Returns label-value pair HTML string. Options: { muted?, className? }.' },
  { name: 'multiSelect',    args: 'options',                    desc: 'Open an advanced modal with a checkbox list + Confirm / Cancel. Resolves Promise<string[] | null> — selected keys on confirm, null on cancel / dismiss / teardown. Options: { title, items, confirmLabel?, cancelLabel?, minSelect?, maxSelect?, width?, maxHeight? }. Keys returned in input item order. Requires app_manipulation (transitively via showAdvancedModal).' },
];

export const BUILTIN_COUNCIL_PROMPT: FnRow[] = [
  { name: 'buildCouncilMessages',     args: 'options',                     desc: 'Build the full LLMMessage[] array for a Council-voice tool invocation — identity + role + tool spec + flattened context + closing directive. Returns [system, system?, user]. Throws if options.councilMember is missing.' },
  { name: 'buildCouncilSystemPrompt', args: 'options',                     desc: 'Build just the system-prompt string used by buildCouncilMessages. Useful when composing your own message structure.' },
  { name: 'buildCouncilIdentity',     args: 'councilMember',               desc: 'Member-identity block: "You are a council member named ..." plus WHO YOU ARE / INSTRUCTION sections when personality fields are present.' },
  { name: 'roleNote',                 args: 'role',                        desc: 'Role-aware directive block. Returns "" when role is empty; otherwise prepends "\\n".' },
  { name: 'brevityNote',              args: 'maxWords',                    desc: 'Word-budget directive. Returns "" when maxWords ≤ 0; otherwise prepends "\\n\\n" to attach as a paragraph.' },
  { name: 'userControlNote',          args: 'allow',                       desc: 'User-character guidance block. Permissive variant when allow=true, restrictive variant when false. Always non-empty (prepended with "\\n\\n").' },
  { name: 'debug.formatMember',       args: 'councilMember',               desc: 'Pretty-printed snapshot of all CouncilMemberContext fields — identifiers, identity strings, chance, gender label, avatar URL, personality strings (truncated for long values). Returns a framed string ready to console.log.' },
  { name: 'debug.formatIdentity',     args: 'councilMember',               desc: 'Framed wrapper around buildCouncilIdentity output with the member name in the header. For "what does the identity prefix look like for this member" inspection.' },
  { name: 'debug.formatSystemPrompt', args: 'options',                     desc: 'Framed wrapper around buildCouncilSystemPrompt output with character count in the header. Shows exactly what goes to the LLM as the system message.' },
  { name: 'debug.formatMessages',     args: 'options',                     desc: 'Framed rendering of the full LLMMessage[] array with per-message headers (index, role, char count). Reveals the context system message that isn\'t visible from the system-prompt view alone.' },
  { name: 'debug.formatReport',       args: 'options',                     desc: 'Comprehensive one-call dump: member snapshot + identity + system prompt + all messages, stitched together. What you reach for when you want the whole picture in one console.log.' },
];

export const BUILTIN_ICONS: FnRow[] = [
  { name: 'svg',                      args: 'Record<IconName, string>',    desc: 'Map of icon name to inline SVG string. Direct-property access is sync and typed — e.g. svg.heart returns a 24×24 <svg>…</svg> string with stroke: currentColor and fill: none. Drop straight into iconSvg options (except input-bar actions — see forInputBar) or DOM-injected HTML templates.' },
  { name: 'sized',                    args: 'name, pixels',                desc: 'Return svg[name] with width/height attributes overridden to pixels. viewBox is preserved so the icon scales cleanly. Throws on unknown name or non-positive pixels. All other default attrs (fill, stroke, stroke-width, stroke-linecap, stroke-linejoin) pass through unchanged.' },
  { name: 'forInputBar',              args: 'name',                        desc: 'Equivalent to sized(name, 14). Use for api.ui.registerInputBarAction iconSvg — the host renders input-bar icons in a 14×14 slot, and the default 24×24 svg[name] overflows and misaligns with the label. For drawer tabs / float widgets / DOM injections, the default size is usually fine.' },
  { name: 'names',                    args: '()',                          desc: 'All available icon names — returns a FRESH array each call, so scripts can safely mutate it (e.g. filter in place for a picker UI) without corrupting the canonical list or affecting subsequent callers.' },
];

export const BUILTIN_TYPES: TypeDoc[] = [
  {
    name: 'MessageFooterOptions / MessageHeaderOptions',
    note: 'Options for messageFooter() and messageHeader().',
    fields: [
      { field: 'id?',               type: 'string',  optional: true, desc: 'Stable ID for idempotent injection (forwarded to injectAtMessage).' },
      { field: 'className?',        type: 'string',  optional: true, desc: 'Additional CSS class applied to the wrapper div.' },
      { field: 'collapsible?',      type: 'boolean', optional: true, desc: 'Render a persistent title bar with a click-to-toggle chevron. Default: false.' },
      { field: 'title?',            type: 'string',  optional: true, desc: 'HTML shown in the persistent title bar (visible when collapsed). Composable with badgeHtml / keyValueHtml. Only meaningful when collapsible is true.' },
      { field: 'defaultCollapsed?', type: 'boolean', optional: true, desc: 'Initial collapsed state. Default: false (expanded). Only meaningful when collapsible is true.' },
    ],
  },
  {
    name: 'CollapsibleDOMHandle',
    note: 'Extends DOMHandle. Returned by messageHeader() / messageFooter() when collapsible is true.',
    fields: [
      { field: 'isCollapsed()',          type: '() => boolean',          optional: false, desc: 'Current collapsed state (false = body visible).' },
      { field: 'setCollapsed(collapsed)', type: '(boolean) => void',     optional: false, desc: 'Set collapsed state explicitly. Re-renders the inner content.' },
      { field: 'toggle()',               type: '() => void',             optional: false, desc: 'Flip the collapsed state.' },
      { field: 'setTitle(title)',        type: '(string) => void',       optional: false, desc: 'Replace the persistent title. Preserves collapsed state and body.' },
      { field: 'update(bodyHtml)',       type: '(string) => void',       optional: false, desc: 'Replace the body HTML. Preserves collapsed state and title. Overrides DOMHandle.update() — for collapsible handles, update() means "replace body", not "replace wrapper".' },
    ],
  },
  {
    name: 'BadgeHtmlOptions',
    note: 'Options for badgeHtml().',
    fields: [
      { field: 'variant?',   type: "'default'|'success'|'warning'|'danger'|'info'|'accent'", optional: true, desc: "Color variant. Default: 'default'." },
      { field: 'size?',      type: "'sm' | 'md'",  optional: true, desc: "Size preset. Default: 'md'." },
      { field: 'dot?',       type: 'boolean',       optional: true, desc: 'Prepend a colored dot indicator. Default: false.' },
      { field: 'className?', type: 'string',        optional: true, desc: 'Additional CSS class on the badge span.' },
    ],
  },
  {
    name: 'StatBarHtmlOptions',
    note: 'Options for statBarHtml().',
    fields: [
      { field: 'max?',       type: 'number',  optional: true, desc: 'Max value for percentage calc. Default: 100.' },
      { field: 'color?',     type: 'string',  optional: true, desc: 'CSS color or gradient for the fill.' },
      { field: 'showValue?', type: 'boolean', optional: true, desc: 'Show numeric value label. Default: true.' },
      { field: 'height?',    type: 'number',  optional: true, desc: 'Bar height in px. Default: 6.' },
      { field: 'className?', type: 'string',  optional: true, desc: 'Additional CSS class.' },
    ],
  },
  {
    name: 'ProgressBarOptions',
    note: 'Options for progressBar(). Returns ProgressBarHandle (extends DOMHandle + setValue).',
    fields: [
      { field: 'value?',       type: 'number',  optional: true, desc: 'Initial value (0-100). Default: 0.' },
      { field: 'label?',       type: 'string',  optional: true, desc: 'Text label above the bar.' },
      { field: 'color?',       type: 'string',  optional: true, desc: 'CSS color or gradient for the fill.' },
      { field: 'showPercent?', type: 'boolean', optional: true, desc: 'Show percentage text. Default: true.' },
      { field: 'height?',      type: 'number',  optional: true, desc: 'Bar height in px. Default: 8.' },
      { field: 'id?',          type: 'string',  optional: true, desc: 'Stable ID for idempotent injection.' },
      { field: 'className?',   type: 'string',  optional: true, desc: 'Additional CSS class.' },
    ],
  },
  {
    name: 'MultiSelectItem',
    note: 'A single selectable row in a multiSelect() items array.',
    fields: [
      { field: 'key',          type: 'string',  optional: false, desc: 'Stable identifier returned in the resolved array when this item is selected.' },
      { field: 'label',        type: 'string',  optional: false, desc: 'Primary label shown next to the checkbox.' },
      { field: 'description?', type: 'string',  optional: true,  desc: 'Secondary line shown below the label in dim text.' },
      { field: 'checked?',     type: 'boolean', optional: true,  desc: 'Initial checked state. Default: false.' },
      { field: 'disabled?',    type: 'boolean', optional: true,  desc: 'When true, the row is unclickable and visually dimmed.' },
    ],
  },
  {
    name: 'MultiSelectOptions',
    note: 'Options for multiSelect(). Built on api.ui.showAdvancedModal — inherits the 2-per-script stack limit.',
    fields: [
      { field: 'title',         type: 'string',             optional: false, desc: 'Modal title. Required.' },
      { field: 'items',         type: 'MultiSelectItem[]',  optional: false, desc: 'List of selectable items.' },
      { field: 'confirmLabel?', type: 'string',             optional: true,  desc: "Label for the confirm button. Default: 'Confirm'." },
      { field: 'cancelLabel?',  type: 'string',             optional: true,  desc: "Label for the cancel button. Default: 'Cancel'." },
      { field: 'minSelect?',    type: 'number',             optional: true,  desc: 'Minimum selections to confirm. Below this, Confirm shows a warning toast and the modal stays open. Default: 0.' },
      { field: 'maxSelect?',    type: 'number',             optional: true,  desc: 'Maximum selections allowed. Over-limit on Confirm shows a warning toast and the modal stays open. Default: unlimited.' },
      { field: 'width?',        type: 'number',             optional: true,  desc: 'Modal width in pixels. Default: 480.' },
      { field: 'maxHeight?',    type: 'number',             optional: true,  desc: 'Modal max-height in pixels. Clamped to viewport.' },
    ],
  },
  {
    name: 'FloatingButtonOptions',
    note: 'Options for floatingButton().',
    fields: [
      { field: 'position?', type: '{ top?, right?, bottom?, left? }', optional: true, desc: "Fixed position. Defaults to { bottom: '80px', right: '16px' }." },
      { field: 'icon?',      type: 'string',                           optional: true, desc: 'HTML string for an icon (e.g. SVG).' },
      { field: 'variant?',   type: "'default' | 'accent' | 'ghost'",   optional: true, desc: "Visual variant. Default: 'default'." },
      { field: 'size?',      type: "'sm' | 'md'",                      optional: true, desc: "Size preset. Default: 'md'." },
      { field: 'draggable?', type: 'boolean',                          optional: true, desc: 'Enable drag-to-reposition. Handled on the frontend for smooth UX. Default: false.' },
      { field: 'id?',        type: 'string',                           optional: true, desc: 'Stable ID for idempotent injection.' },
      { field: 'className?', type: 'string',                           optional: true, desc: 'Additional CSS class.' },
    ],
  },
  {
    name: 'CouncilSystemPromptOptions',
    note: 'Options for buildCouncilSystemPrompt() from ls:council-prompt. Three Council settings the host doesn\'t forward to extension tools (tool.prompt, maxWordsPerTool, allowUserControl) are supplied here — published tools probably want deterministic behavior regardless of local user preferences.',
    fields: [
      { field: 'councilMember',     type: 'CouncilMemberContext',                    optional: false, desc: 'Member snapshot from ToolInvocationContext.councilMember. Required — this helper only makes sense for Council-originated invocations.' },
      { field: 'tool',              type: '{ display_name, description, prompt? }', optional: false, desc: "Tool identification + optional per-tool directive. `prompt` is appended after the tool description." },
      { field: 'maxWordsPerTool?',  type: 'number',                                  optional: true,  desc: 'Per-tool word budget. 0 or omitted → no brevity note.' },
      { field: 'allowUserControl?', type: 'boolean',                                 optional: true,  desc: 'Whether the tool may direct the user-character. Default false (restrictive).' },
      { field: 'dynamicSuffix?',    type: 'string',                                  optional: true,  desc: 'Extra text appended after tool.prompt, before the brevity note. Use for tool-specific dynamic enrichment.' },
    ],
  },
  {
    name: 'CouncilMessagesOptions',
    note: 'Extends CouncilSystemPromptOptions. Passed to buildCouncilMessages() — adds context-source fields so the helper can include chat history in the output message array. When both contextMessages and args.context are present, contextMessages takes priority (preserves role boundaries); args.context is the fallback path for older Lumiverse hosts.',
    fields: [
      { field: 'args',              type: 'ToolInvocationArgs',                      optional: false, desc: 'The args object from the tool handler. args.context (flattened chat context) is used as a fallback when contextMessages is absent or empty.' },
      { field: 'contextMessages?',  type: 'LLMMessage[]',                            optional: true,  desc: "Structured chat context from ToolInvocationContext.contextMessages. When provided and non-empty, takes priority over args.context — preserves role boundaries for better LLM voice continuity. Pass through as `contextMessages: ctx.contextMessages` from your handler. Requires Lumiverse 993544c8+." },
    ],
  },
];

const BuiltinLibrariesSection: FC = () => (
  <>
    <p className="ls-ref-muted" style={{ marginBottom: 8 }}>
      Built-in libraries are loaded via <Code>{"script.require('ls:<name>')"}</Code>.
      Three are currently shipped: <Code>ls:components</Code> (DOM widget factories — all
      operations attributed to the calling script; injection components require{' '}
      <Code>app_manipulation</Code>, HTML builders are free); <Code>ls:council-prompt</Code>{' '}
      (pure string helpers for replicating Lumiverse's built-in Council sidecar prompt in
      extension tools; no permissions required; only meaningful when the tool was invoked as
      part of a Council cycle); and <Code>ls:icons</Code> (a curated ~150-icon Lucide subset as
      pre-serialized SVG strings, ready to drop into <Code>iconSvg</Code> options or DOM
      templates; no permissions required).
    </p>

    <table className="ls-ref-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Arguments</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <GroupHeader label="ls:components" cols={3} />
        {BUILTIN_COMPONENTS.map(row => (
          <tr key={row.name}>
            <td><Code>{row.name}</Code></td>
            <td><span className="ls-ref-muted">{row.args}</span></td>
            <td><span className="ls-ref-muted">{row.desc}</span></td>
          </tr>
        ))}
        <GroupHeader label="ls:council-prompt" cols={3} />
        {BUILTIN_COUNCIL_PROMPT.map(row => (
          <tr key={row.name}>
            <td><Code>{row.name}</Code></td>
            <td><span className="ls-ref-muted">{row.args}</span></td>
            <td><span className="ls-ref-muted">{row.desc}</span></td>
          </tr>
        ))}
        <GroupHeader label="ls:icons" cols={3} />
        {BUILTIN_ICONS.map(row => (
          <tr key={row.name}>
            <td><Code>{row.name}</Code></td>
            <td><span className="ls-ref-muted">{row.args}</span></td>
            <td><span className="ls-ref-muted">{row.desc}</span></td>
          </tr>
        ))}
      </tbody>
    </table>

    <table className="ls-ref-table" style={{ marginTop: 12 }}>
      <thead>
        <tr>
          <th>Field</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {BUILTIN_TYPES.map(type => (
          <>
            <tr key={`hdr-${type.name}`}>
              <td colSpan={3} className="ls-ref-group-header">
                {type.name}
                {type.note && <div className="ls-ref-type-note">{type.note}</div>}
              </td>
            </tr>
            {type.fields.map(f => (
              <tr key={`${type.name}-${f.field}`}>
                <td><Code>{f.optional && !f.field.endsWith('?') ? `${f.field}?` : f.field}</Code></td>
                <td><span className="ls-ref-muted">{f.type}</span></td>
                <td><span className="ls-ref-muted">{f.desc}</span></td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </table>
  </>
);

// ─── Reference tab root ───────────────────────────────────────────────────────

export const ReferenceTab: FC = () => (
  <div className="ls-ref">
    <div className="ls-ref-toolbar">
      <button
        type="button"
        className="ls-ref-export-btn"
        onClick={() => downloadReferenceMarkdown()}
        title="Download the current reference as a Markdown file"
      >
        <Download size={11} />
        Export Markdown
      </button>
    </div>

    <Section icon={<Zap size={11} />} title="Lumiverse Events" defaultOpen>
      <EventsTable />
    </Section>

    <Section icon={<Lock size={11} />} title="Permission Matrix">
      <PermsTable />
    </Section>

    <Section icon={<Radio size={11} />} title="LumiScript Events">
      <BroadcastTable />
      <p className="ls-ref-muted" style={{ marginTop: 6 }}>
        The <Code>ls:</Code> prefix is reserved for LumiScript engine events.
        Use any other name for custom events between scripts.
      </p>
    </Section>

    <Section icon={<Hash size={11} />} title="LumiScript Macros">
      <LumiScriptMacrosTable />
      <p className="ls-ref-muted" style={{ marginTop: 6 }}>
        Character variable macros read from and write to the active character's
        store at <Code>{'variables/characters/<id>.json'}</Code> in user storage.
        They resolve to <Code>""</Code> when no character is active.
      </p>
    </Section>

    <Section icon={<Braces size={11} />} title="Key Types">
      <KeyTypesTable />
    </Section>

    <Section icon={<List size={11} />} title="API Functions">
      <ApiFunctionsTable />
    </Section>

    <Section icon={<Blocks size={11} />} title="Built-in Libraries">
      <BuiltinLibrariesSection />
    </Section>

    <Section icon={<Package size={11} />} title="Script Packs">
      <p className="ls-ref-muted">
        <strong>Export</strong> — click the <Code>↓</Code> button in the script list header to
        download the currently filtered scripts as a <Code>.lumiscript.zip</Code> file.
        The pack contains a <Code>pack.json</Code> with script names, code, triggers,
        bindings, folders, and metadata. IDs, timestamps, enabled state, and
        the allowDangerous flag are <em>not</em> included.
      </p>
      <p className="ls-ref-muted" style={{ marginTop: 6 }}>
        <strong>Import</strong> — click the <Code>↑</Code> button to pick a <Code>.lumiscript.zip</Code>.
        After validation (format version, schema, 1 MB decompressed size limit, max 100 scripts per pack),
        a confirmation dialog shows the script list. Imported scripts are always created
        with <Code>enabled: false</Code> and <Code>allowDangerous: false</Code> — review and enable
        them manually.
      </p>
    </Section>
  </div>
);
