/**
 * ============================================================================
 * VARIABLES SECTION
 * ============================================================================
 * Read-only inspector for the four variable scopes (local / global / chat /
 * character) in the active context. Lives in the Storage tab alongside
 * the Collections section — both are forms of persisted state.
 *
 * Migrated from the Status tab in v0.20.0. Behaviour is unchanged.
 */

import { useState, type FC } from 'react';
import { ChevronDown, ChevronUp, Database, RefreshCw } from 'lucide-react';
import type { FrontendToBackend, VariablesSnapshot } from '../../types/messages.js';

const SCOPE_LABELS: Array<{ key: keyof VariablesSnapshot; label: string; hint?: string }> = [
  { key: 'local',     label: 'local',     hint: 'Per-chat ({{getvar}})' },
  { key: 'global',    label: 'global',    hint: 'Cross-chat ({{getgvar}})' },
  { key: 'chat',      label: 'chat',      hint: 'Chat metadata ({{@key}})' },
  { key: 'character', label: 'character', hint: 'Per-character card' },
];

function formatValue(v: unknown): string {
  if (v === undefined) return 'undefined';
  if (v === null) return 'null';
  if (typeof v === 'string') return v.length > 80 ? v.slice(0, 77) + '…' : v;
  try {
    const s = JSON.stringify(v);
    return s.length > 80 ? s.slice(0, 77) + '…' : s;
  } catch { return String(v); }
}

export interface VariablesSectionProps {
  variables: VariablesSnapshot | null;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const VariablesSection: FC<VariablesSectionProps> = ({ variables, sendToBackend }) => {
  const [expandedScopes, setExpandedScopes] = useState<Set<string>>(
    new Set(['local', 'global', 'chat', 'character']),
  );

  const toggleScope = (scope: string) => {
    setExpandedScopes(prev => {
      const next = new Set(prev);
      if (next.has(scope)) next.delete(scope);
      else next.add(scope);
      return next;
    });
  };

  const totalKeys = variables
    ? Object.values(variables).reduce((sum, scope) => sum + Object.keys(scope).length, 0)
    : 0;

  return (
    <div className="ls-status-section">
      <div className="ls-inject-header">
        <Database size={10} />
        Variables
        {totalKeys > 0 && <span className="ls-inject-count">{totalKeys}</span>}
        <button
          className="ls-vars-refresh"
          title="Refresh variables"
          onClick={() => sendToBackend({ type: 'get_variables' })}
        >
          <RefreshCw size={10} />
        </button>
      </div>
      <div className="ls-status-section-body">
        {!variables ? (
          <div className="ls-section-empty">Click refresh to load variables</div>
        ) : totalKeys === 0 ? (
          <div className="ls-section-empty">No variables in active context</div>
        ) : (
          SCOPE_LABELS.map(({ key, label, hint }) => {
            const scope = variables[key];
            const keys = Object.keys(scope);
            const isExpanded = expandedScopes.has(key);
            if (keys.length === 0) return null;
            return (
              <div key={key} className="ls-vars-scope">
                <button className="ls-vars-scope-header" onClick={() => toggleScope(key)}>
                  {isExpanded ? <ChevronDown size={10} /> : <ChevronUp size={10} />}
                  <span className="ls-vars-scope-name">{label}</span>
                  {hint && <span className="ls-vars-scope-hint">{hint}</span>}
                  <span className="ls-vars-scope-count">{keys.length}</span>
                </button>
                {isExpanded && (
                  <div className="ls-vars-scope-body">
                    {keys.sort().map(k => (
                      <div key={k} className="ls-vars-entry">
                        <span className="ls-vars-key">{k}</span>
                        <span className="ls-vars-value" title={String(scope[k])}>
                          {formatValue(scope[k])}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
