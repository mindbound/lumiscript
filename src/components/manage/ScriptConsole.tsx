import { FC, useRef, useEffect, useState } from 'react';
import { Terminal, Copy, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import type { ConsoleEntry } from '../../types/script.js';

interface ScriptConsoleProps {
  entries: ConsoleEntry[];
  isRunning: boolean;
  onClear: () => void;
}

const TYPE_CLASS: Record<string, string> = {
  log:     'ls-log',
  warn:    'ls-warn',
  error:   'ls-error',
  info:    'ls-info',
  success: 'ls-success',
  // 'separator' entries are rendered as a divider row (handled separately below)
};

export const ScriptConsole: FC<ScriptConsoleProps> = ({ entries, isRunning, onClear }) => {
  const [collapsed, setCollapsed] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new entries arrive
  useEffect(() => {
    if (!collapsed && outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [entries, collapsed]);

  const handleCopy = () => {
    const text = entries
      .filter(e => e.type !== 'separator')
      .map(e => `[${e.timestamp}] ${e.type.toUpperCase()}: ${e.message}`)
      .join('\n');
    navigator.clipboard.writeText(text).catch(() => {});
  };

  return (
    <div className={`ls-console${collapsed ? ' ls-collapsed' : ''}`}>
      {/* Header row — click to toggle collapse */}
      <div className="ls-console-header" onClick={() => setCollapsed(c => !c)}>
        <Terminal size={12} style={{ color: 'var(--lumiverse-text-muted)', flexShrink: 0 }} />
        <span className="ls-console-title">
          Console{isRunning ? ' — running…' : entries.length > 0 ? ` (${entries.length})` : ''}
        </span>
        <button
          className="ls-icon-btn"
          onClick={e => { e.stopPropagation(); handleCopy(); }}
          title="Copy output"
          disabled={entries.length === 0}
        >
          <Copy size={11} />
        </button>
        <button
          className="ls-icon-btn"
          onClick={e => { e.stopPropagation(); onClear(); }}
          title="Clear console"
          disabled={entries.length === 0}
        >
          <Trash2 size={11} />
        </button>
        {collapsed
          ? <ChevronDown size={12} style={{ color: 'var(--lumiverse-text-muted)' }} />
          : <ChevronUp   size={12} style={{ color: 'var(--lumiverse-text-muted)' }} />}
      </div>

      {/* Output area */}
      {!collapsed && (
        <div className="ls-console-output" ref={outputRef}>
          {entries.length === 0 ? (
            <div className="ls-console-empty">
              {isRunning ? 'Running…' : 'No output yet. Click Run to execute the script.'}
            </div>
          ) : (
            entries.map((entry, i) => (
              entry.type === 'separator'
                ? <div key={i} className="ls-entry-separator" aria-hidden="true" />
                : (
                  <div key={i} className={`ls-entry ${TYPE_CLASS[entry.type] ?? 'ls-log'}`}>
                    <span className="ls-entry-time">{entry.timestamp}</span>
                    <span className="ls-entry-type">{entry.type.toUpperCase()}</span>
                    <span className="ls-entry-msg">{entry.message}</span>
                  </div>
                )
            ))
          )}
        </div>
      )}
    </div>
  );
};
