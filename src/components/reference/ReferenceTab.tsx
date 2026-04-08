import { FC, useState } from 'react';
import { Zap, Lock, Radio, List, Braces, Hash, ChevronDown, ChevronRight } from 'lucide-react';

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

/** Full-width group header row spanning all table columns */
const GroupHeader: FC<{ label: string; cols: number }> = ({ label, cols }) => (
  <tr>
    <td colSpan={cols} className="ls-ref-group-header">{label}</td>
  </tr>
);

// ─── Events table ─────────────────────────────────────────────────────────────

const EVENTS: Array<{ name: string; group: string; payload: string }> = [
  { group: 'Chat',       name: 'MESSAGE_SENT',               payload: '{ chatId, message }' },
  { group: 'Chat',       name: 'MESSAGE_EDITED',             payload: '{ chatId, message }' },
  { group: 'Chat',       name: 'MESSAGE_DELETED',            payload: '{ chatId, messageId }' },
  { group: 'Chat',       name: 'MESSAGE_SWIPED',             payload: '{ chatId, messageId, swipeId }' },
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

interface PermRow {
  method: string;
  perms: string[];
  note?: string;
}

interface PermGroup {
  group: string;
  rows: PermRow[];
}

const PERM_GROUPS: PermGroup[] = [
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
      { method: 'api.broadcast.*', perms: [] },
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
      <tr>
        <td><Code>ls:tool:registered</Code></td>
        <td><span className="ls-ref-muted">{'{ name, scriptId }'}</span></td>
        <td><span className="ls-ref-muted">api.tools.register()</span></td>
      </tr>
      <tr>
        <td><Code>ls:tool:unregistered</Code></td>
        <td><span className="ls-ref-muted">{'{ name, scriptId }'}</span></td>
        <td><span className="ls-ref-muted">api.tools.unregister() / auto-cleanup</span></td>
      </tr>
      <tr>
        <td><Code>ls:tool:invoked</Code></td>
        <td><span className="ls-ref-muted">{'{ name, args, result, scriptId, callMs }'}</span></td>
        <td><span className="ls-ref-muted">api.tools.invoke() + TOOL_INVOCATION handler</span></td>
      </tr>
    </tbody>
  </table>
);

// ─── LumiScript macros ────────────────────────────────────────────────────────

type MacroReturns = 'boolean' | 'string' | 'silent';

interface LsMacroRow {
  macro: string;
  aliases: string;
  returns: MacroReturns;
  desc: string;
}

interface LsMacroGroup {
  group: string;
  rows: LsMacroRow[];
}

const LS_MACRO_GROUPS: LsMacroGroup[] = [
  {
    group: 'Presence',
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
    group: 'Character Variables — reads/writes the active character\'s variable store. Write operations are silent.',
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
          <GroupHeader key={`hdr-${group.group}`} label={group.group} cols={4} />
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

interface TypeField { field: string; type: string; optional: boolean; desc: string; }
interface TypeDoc   { name: string; note?: string; fields: TypeField[]; }

const KEY_TYPES: TypeDoc[] = [
  // ─── Chat ────────────────────────────────────────────────────────────────────
  {
    name: 'ChatMessage',
    note: 'Returned by api.chat.getMessages().',
    fields: [
      { field: 'id',        type: 'string',                          optional: false, desc: 'Message identifier.' },
      { field: 'content',   type: 'string',                          optional: false, desc: 'Plain-text message content.' },
      { field: 'role',      type: "'user' | 'assistant' | 'system'", optional: false, desc: 'Sender role.' },
      { field: 'metadata?', type: 'Record<string, unknown>',         optional: true,  desc: 'Arbitrary metadata attached to the message.' },
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
    note: 'Passed to api.chat.sendMessage(content, options?).',
    fields: [
      { field: 'role?',     type: "'user' | 'assistant' | 'system'", optional: true, desc: "Sender role. Default 'user'." },
      { field: 'metadata?', type: 'Record<string, unknown>',         optional: true, desc: 'Arbitrary metadata to attach.' },
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
    note: 'Passed to api.utils.http.get / post / put / delete / request. Requires allowDangerous + cors_proxy permission.',
    fields: [
      { field: 'method?',  type: "'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'", optional: true, desc: 'HTTP method. Default depends on the helper used.' },
      { field: 'headers?', type: 'Record<string, string>',                       optional: true, desc: 'Request headers.' },
      { field: 'body?',    type: 'string',                                        optional: true, desc: 'Request body (string). Use JSON.stringify for JSON payloads.' },
      { field: 'timeout?', type: 'number',                                        optional: true, desc: 'Request timeout in milliseconds.' },
    ],
  },
  {
    name: 'HttpResponse',
    note: 'Returned by api.utils.http.* methods.',
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
      { field: 'metadata?',             type: 'Record<string, unknown>', optional: true,  desc: 'Arbitrary metadata.' },
    ],
  },
  {
    name: 'PersonaUpdateInput',
    note: 'Passed to api.personas.update(personaId, input). Same fields as PersonaCreateInput, all optional.',
    fields: [
      { field: '(same fields as PersonaCreateInput)', type: '— all optional', optional: true, desc: 'Only the fields provided are updated. Omitted fields are left unchanged.' },
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

interface FnRow { name: string; args: string; desc: string; }
interface FnGroup { group: string; rows: FnRow[]; }

const API_GROUPS: FnGroup[] = [
  {
    group: 'api.chat',
    rows: [
      { name: 'getMessages',       args: 'options?',              desc: 'Get messages in the current chat. Pass { last: N } for the N most recent.' },
      { name: 'sendMessage',       args: 'content, options?',     desc: 'Append a new message. Options: role, metadata.' },
      { name: 'editMessage',       args: 'id, content',           desc: 'Edit a message by ID.' },
      { name: 'deleteMessage',     args: 'id',                    desc: 'Delete a message by ID.' },
      { name: 'getChatId',         args: '—',                     desc: 'Return the active chat ID, or null.' },
      { name: 'getMetadata',       args: 'key',                   desc: 'Get a metadata value from the current chat.' },
      { name: 'setMetadata',       args: 'key, value',            desc: 'Set a metadata key (read-modify-write).' },
      { name: 'inject',            args: 'id, content, options?', desc: 'Register a prompt injection. Options: mode, role, depth, ephemeral.' },
      { name: 'removeInjection',   args: 'id',                    desc: 'Remove one injection by ID.' },
      { name: 'getInjections',     args: '—',                     desc: 'List all active injections across all scripts.' },
      { name: 'clearInjections',   args: '—',                     desc: "Remove all injections from this script." },
      { name: 'clearAllInjections', args: '—',                   desc: 'Remove ALL injections across all scripts.' },
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
    ],
  },
  {
    group: 'api.ui',
    rows: [
      { name: 'toast',     args: 'message, type?, options?',         desc: 'Show a native Lumiverse toast notification. Fire-and-forget. Rate-limited 5/10s. Options: title, duration.' },
      { name: 'prompt',    args: 'message, defaultValue?, options?', desc: 'Show a themed text input dialog. Returns entered string (trimmed) or null if cancelled. Options: placeholder, submitLabel, cancelLabel, multiline.' },
      { name: 'confirm',   args: 'message, title?, options?',        desc: 'Show a themed confirmation dialog. Returns true if confirmed. Options: variant (info/warning/danger/success), confirmLabel, cancelLabel.' },
      { name: 'showModal', args: 'items, options',                   desc: 'Display structured read-only content in a themed modal. Returns ModalHandle { result, openRequestId, close() }. Await handle.result for dismissal. Options: title (required), width, maxHeight, persistent.' },
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
      { name: 'list',   args: 'options?',     desc: 'List characters (paginated). Returns { data, total }.' },
      { name: 'get',    args: 'id',           desc: 'Get a character by ID. Returns null if not found.' },
      { name: 'create', args: 'input',        desc: 'Create a new character.' },
      { name: 'update', args: 'id, input',    desc: 'Update a character.' },
      { name: 'delete', args: 'id',           desc: 'Delete a character. Returns true if deleted.' },
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
      { name: 'register',   args: 'name, def, handler',  desc: 'Register an LLM tool. Handler receives (args, api) and must return a string.' },
      { name: 'unregister', args: 'name',                desc: "Unregister a tool registered by this script. No-op if not found." },
      { name: 'list',       args: '—',                   desc: 'List all currently registered tools across all scripts.' },
      { name: 'invoke',     args: 'name, args?',         desc: 'Invoke a registered tool handler directly (for use inside an agentic loop).' },
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
    group: 'script',
    rows: [
      { name: 'require', args: 'nameOrId', desc: 'Load a library script by name or ID (lazy, cached per execution).' },
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

// ─── Reference tab root ───────────────────────────────────────────────────────

export const ReferenceTab: FC = () => (
  <div className="ls-ref">
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
  </div>
);
