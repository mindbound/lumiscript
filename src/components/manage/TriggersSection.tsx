import { FC, useState } from 'react';
import { Zap, ChevronDown, ChevronUp } from 'lucide-react';
import type { FrontendToBackend } from '../../types/messages.js';

// ─── Available events grouped by category ─────────────────────────────────────

interface EventGroup {
  label: string;
  events: Array<{ name: string; description: string }>;
}

export const TRIGGER_EVENT_GROUPS: EventGroup[] = [
  {
    label: 'LumiScript',
    events: [
      { name: 'ls:startup', description: 'Fires once at LumiScript boot. Use for tool registration, cache pre-warming, and other one-time init.' },
      { name: 'ls:teardown', description: "Fires before the script is disabled or deleted. Use for cleanup of external state (dynamic world-book entries, registered tools outside api.tools lifecycle, persistent storage). Handler has full api access and a 10s budget — errors are logged, not toasted. data.reason is 'disabled' | 'deleted'." },
    ],
  },
  {
    label: 'Chat',
    events: [
      { name: 'MESSAGE_SENT',               description: 'A message was appended to the chat' },
      { name: 'MESSAGE_EDITED',             description: 'A message was edited' },
      { name: 'MESSAGE_DELETED',            description: 'A message was deleted' },
      { name: 'MESSAGE_SWIPED',             description: 'A swipe action occurred. Fine-grained: action=added|updated|deleted|navigated + swipeId + previousSwipeId discriminators' },
      { name: 'SWIPE_EDITED',               description: 'Coarser swipe-edit event — fires when a message edit touches swipes/swipe_id/swipe_dates. Use MESSAGE_SWIPED for per-action semantics' },
      { name: 'CHARACTER_MESSAGE_RENDERED', description: 'A character message finished rendering' },
      { name: 'USER_MESSAGE_RENDERED',      description: 'A user message finished rendering' },
    ],
  },
  {
    label: 'Generation',
    events: [
      { name: 'GENERATION_STARTED', description: 'LLM generation started' },
      { name: 'GENERATION_ENDED',   description: 'LLM generation completed' },
      { name: 'GENERATION_STOPPED', description: 'LLM generation was stopped' },
    ],
  },
  {
    label: 'Entities',
    events: [
      { name: 'CHAT_CHANGED',         description: 'A chat was updated (rename, metadata, or message reattribution). Does NOT fire on navigation — use CHAT_SWITCHED for open/close.' },
      { name: 'CHAT_SWITCHED',        description: 'The user opened a chat or returned to the home screen. data.chatId is the new chatId, or null on return-to-home.' },
      { name: 'CHARACTER_EDITED',     description: 'A character card was saved' },
      { name: 'CHARACTER_DELETED',    description: 'A character was deleted' },
      { name: 'CHARACTER_DUPLICATED', description: 'A character was duplicated' },
      { name: 'PERSONA_CHANGED',      description: 'Active persona changed' },
    ],
  },
  {
    label: 'Settings',
    events: [
      { name: 'SETTINGS_UPDATED',          description: 'A setting was updated. data.key + data.value identify the change. (Chat navigation moved to its own CHAT_SWITCHED event in host 0.9.5+.)' },
      { name: 'PRESET_CHANGED',            description: 'Active prompt preset changed' },
      { name: 'CONNECTION_PROFILE_LOADED', description: 'A connection profile was activated' },
      { name: 'WORLD_INFO_ACTIVATED',      description: 'World Info entries were activated' },
      { name: 'REGEX_SCRIPT_CHANGED',      description: 'A regex find/replace script was created, updated, duplicated, reordered, or had its enabled state toggled. data.id + data.script (RegexScriptInfo). Requires regex_scripts permission. v0.27.0+.' },
      { name: 'REGEX_SCRIPT_DELETED',      description: 'A regex find/replace script was deleted. data.id. Requires regex_scripts permission. v0.27.0+.' },
    ],
  },
];

/** Flat list of all event names for quick lookup */
export const ALL_TRIGGER_EVENTS = TRIGGER_EVENT_GROUPS.flatMap(g => g.events.map(e => e.name));

// ─── Component ─────────────────────────────────────────────────────────────────

interface TriggersSectionProps {
  scriptId: string;
  triggers: string[];
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const TriggersSection: FC<TriggersSectionProps> = ({
  scriptId,
  triggers,
  sendToBackend,
}) => {
  // Starts collapsed to save editor space; expands when user needs to change events
  const [collapsed, setCollapsed] = useState(true);
  const selected = new Set(triggers);

  const toggle = (event: string) => {
    const next = selected.has(event)
      ? triggers.filter(e => e !== event)
      : [...triggers, event];
    sendToBackend({ type: 'update_script', id: scriptId, patch: { triggers: next } });
  };

  return (
    <div className={`ls-triggers${collapsed ? ' ls-triggers-collapsed' : ''}`}>
      {/* Header — click to toggle collapse */}
      <div className="ls-triggers-header" onClick={() => setCollapsed(c => !c)}>
        <Zap size={11} style={{ color: 'var(--lumiverse-text-muted)', flexShrink: 0 }} />
        <span className="ls-triggers-title">Events</span>
        {selected.size > 0 && (
          <span className="ls-triggers-count">{selected.size}</span>
        )}
        <span style={{ color: 'var(--lumiverse-text-muted)' }}>
          {collapsed ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
        </span>
      </div>

      {/* Body — hidden when collapsed */}
      {!collapsed && (
        <div className="ls-triggers-body">
          {TRIGGER_EVENT_GROUPS.map(group => (
            <div key={group.label} className="ls-trigger-group">
              <span className="ls-trigger-group-label">{group.label}</span>
              <div className="ls-trigger-chips">
                {group.events.map(ev => (
                  <button
                    key={ev.name}
                    className={`ls-trigger-chip${selected.has(ev.name) ? ' ls-trigger-chip-active' : ''}`}
                    onClick={() => toggle(ev.name)}
                    title={ev.description}
                  >
                    {ev.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
