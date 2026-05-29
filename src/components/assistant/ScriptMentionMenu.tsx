/**
 * ============================================================================
 * LumiScript Assistant — @-mention script picker
 * ============================================================================
 * Autocomplete dropdown shown when the user types `@` in the Lisa composer.
 * Lists the user's scripts (filtered by the typed query) so they can attach
 * one or more as read-context for the turn. Selecting a script adds a chip
 * above the composer (the parent owns that state); this component is purely
 * the menu.
 *
 * Positioned absolutely above the input row by `.ls-asst-mention-menu`
 * (bottom: 100%). Items use `onMouseDown` + `preventDefault` so clicking one
 * doesn't blur the textarea first (which would close the menu before the
 * click registers).
 */

import type { FC } from 'react';
import { Code2, BookMarked } from 'lucide-react';
import type { Script } from '../../types/script.js';

interface ScriptMentionMenuProps {
  /** Scripts matching the current `@query` (already filtered + capped). */
  matches: Script[];
  /** Index of the keyboard-highlighted item. */
  activeIndex: number;
  /** Attach the chosen script. */
  onPick: (script: Script) => void;
  /** Sync the highlighted index to the hovered item. */
  onHoverIndex: (index: number) => void;
}

export const ScriptMentionMenu: FC<ScriptMentionMenuProps> = ({
  matches,
  activeIndex,
  onPick,
  onHoverIndex,
}) => {
  if (matches.length === 0) {
    return (
      <div className="ls-asst-mention-menu">
        <div className="ls-asst-mention-empty">No matching scripts</div>
      </div>
    );
  }

  return (
    <div className="ls-asst-mention-menu" role="listbox">
      {matches.map((s, i) => (
        <button
          key={s.id}
          type="button"
          role="option"
          aria-selected={i === activeIndex}
          className={`ls-asst-mention-item${i === activeIndex ? ' ls-asst-mention-item-active' : ''}`}
          onMouseDown={(e) => { e.preventDefault(); onPick(s); }}
          onMouseEnter={() => onHoverIndex(i)}
        >
          {s.type === 'library' ? <BookMarked size={12} /> : <Code2 size={12} />}
          <span className="ls-asst-mention-name">{s.name}</span>
          <span className="ls-asst-mention-type">{s.type}</span>
        </button>
      ))}
    </div>
  );
};
