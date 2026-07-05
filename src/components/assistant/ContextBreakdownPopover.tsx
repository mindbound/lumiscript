import { FC } from 'react';
import { formatTokens } from './assistant-logic.js';

export interface ContextBreakdown {
  corpus: number;
  memory: number;
  chat: number;
  attachments: number;
}

/**
 * Click-popover breakdown of what fills Lisa's context window — a colour-coded
 * segmented bar + a legend (corpus / memories / this chat / attachments / free).
 * All figures are LOCAL token estimates (shown with `~`); it shows occupancy
 * PROPORTIONS, which is the point. Mainly there to make legible that a fresh
 * chat is mostly the fixed API corpus, not the conversation.
 */
export const ContextBreakdownPopover: FC<{
  breakdown: ContextBreakdown;
  budget: number;
  onClose: () => void;
}> = ({ breakdown, budget, onClose }) => {
  const segs = [
    { key: 'corpus', label: 'Corpus (API reference)', tokens: breakdown.corpus },
    { key: 'memory', label: 'Memories', tokens: breakdown.memory },
    { key: 'chat', label: 'This chat', tokens: breakdown.chat },
    { key: 'attachments', label: 'Attachments', tokens: breakdown.attachments },
  ].filter((s) => s.key !== 'attachments' || s.tokens > 0);
  const total = breakdown.corpus + breakdown.memory + breakdown.chat + breakdown.attachments;
  // Denominator: the budget normally, or the total when over budget (so the bar
  // fills and "free" disappears instead of overflowing).
  const denom = Math.max(budget, total, 1);
  const free = Math.max(0, budget - total);
  return (
    <div className="ls-asst-bd-popover" role="dialog" aria-label="Context breakdown">
      <div className="ls-asst-bd-head">
        <span className="ls-asst-bd-title">Context · ~{formatTokens(total)} / {formatTokens(budget)}</span>
        <button type="button" className="ls-asst-bd-close" onClick={onClose} aria-label="Close breakdown">×</button>
      </div>
      <div className="ls-asst-bd-bar">
        {segs.map((s) => (
          <span
            key={s.key}
            className={`ls-asst-bd-seg ls-asst-bd-${s.key}`}
            style={{ width: `${(s.tokens / denom) * 100}%` }}
          />
        ))}
        {free > 0 && (
          <span className="ls-asst-bd-seg ls-asst-bd-free" style={{ width: `${(free / denom) * 100}%` }} />
        )}
      </div>
      <ul className="ls-asst-bd-legend">
        {segs.map((s) => (
          <li key={s.key}>
            <span className={`ls-asst-bd-swatch ls-asst-bd-${s.key}`} />
            <span className="ls-asst-bd-label">{s.label}</span>
            <span className="ls-asst-bd-tok">~{formatTokens(s.tokens)}</span>
          </li>
        ))}
        <li>
          <span className="ls-asst-bd-swatch ls-asst-bd-free" />
          <span className="ls-asst-bd-label">Free</span>
          <span className="ls-asst-bd-tok">{formatTokens(free)}</span>
        </li>
      </ul>
      {total > budget && (
        <p className="ls-asst-bd-over">Over budget — Lisa drops or compacts the oldest turns to fit.</p>
      )}
      <p className="ls-asst-bd-note">
        Estimates. Corpus is Lisa's fixed API knowledge — prompt-cached, so it costs little even though it occupies space.
      </p>
    </div>
  );
};
