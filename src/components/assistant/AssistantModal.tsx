/**
 * ============================================================================
 * LumiScript Assistant Modal
 * ============================================================================
 * Portal-rendered chat modal for the in-app code assistant (persona: Lisa).
 *
 * Layout: 2-column. Sidebar (left, 230px) carries the thread list + "New
 * chat" button. Main column (right) holds the connection picker, message
 * body, usage strip, and composer.
 *
 * Threads persist to `spindle.userStorage` via the backend (see
 * `src/assistant/storage.ts`); the modal mounts with the most-recent thread
 * pre-loaded and the full index pushed via `assistant_threads`.
 *
 * Streaming model: per-token IPC events accumulate into a ref at full
 * speed; the React state that drives the markdown render only updates at
 * STREAM_RENDER_THROTTLE_MS (50ms), capping markdown re-parse cost to
 * ~20Hz regardless of token rate.
 *
 * Portal note: this modal is `createPortal`-mounted under `document.body`,
 * so the host theme's `--lumiverse-*` tokens don't cascade in. All token
 * references in `assistant.css` carry hard-coded fallbacks per the
 * portal-modal CSS-token gotcha.
 */

import { FC, useState, useEffect, useRef, KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { Send, X, Loader2, Coffee, Square, Brain, ChevronRight, MessageSquarePlus, Pencil, Trash2, Check, Download } from 'lucide-react';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import type { LlmMessagePart } from '../../types/script.js';
import type { LlmMessageDTO } from 'lumiverse-spindle-types';
import type { AssistantThreadIndexEntry } from '../../assistant/types.js';
import { MarkdownContent, AssistantApplyContext } from './MarkdownContent.js';

/**
 * How often (ms) the streaming-bubble's markdown content is allowed to
 * re-parse. Token-arrival accumulates into a ref at full speed (per IPC),
 * but the React state that drives the markdown render only updates every
 * THROTTLE_MS, capping the parser cost to ~20 invocations/second.
 */
const STREAM_RENDER_THROTTLE_MS = 50;

/**
 * Display name shown on assistant bubbles' role header. Hard-coded to
 * match `LISA_PERSONA.name` rather than reading the persona at runtime —
 * the persona lives backend-side and the modal doesn't import it. If the
 * persona ever becomes user-configurable, this needs to be threaded
 * through via an IPC at modal mount instead.
 */
const ASSISTANT_DISPLAY_NAME = 'Lisa';

interface AssistantModalProps {
  onClose: () => void;
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

interface DisplayMessage {
  role: 'user' | 'assistant' | 'tool' | 'error';
  content: string;
  /** For tool rows. */
  toolName?: string;
  isError?: boolean;
  /** Marks an assistant bubble that was cut short by user-initiated stop. */
  aborted?: boolean;
  /** Reasoning / chain-of-thought tokens (DeepSeek thinking, o1, etc.). */
  reasoning?: string;
}

interface ConnectionOption {
  id: string;
  name: string;
  model: string;
  provider: string;
  isDefault: boolean;
}

/**
 * Format a token count for compact display in the usage strip.
 *   <1000   → raw count, e.g. `850`
 *   <10000  → 1-decimal kilo, e.g. `1.2k`
 *   ≥10000  → 0-decimal kilo, e.g. `42k`
 */
function formatTokens(n: number): string {
  if (n < 1000) return String(n);
  if (n < 10_000) return `${(n / 1000).toFixed(1)}k`;
  return `${Math.round(n / 1000)}k`;
}

/**
 * Compact relative-time label for thread sidebar rows. Tuned for "when was
 * this thread last touched" rather than precise dating — past 7d we fall
 * through to a short calendar date.
 */
function formatRelativeTime(epochMs: number): string {
  const seconds = (Date.now() - epochMs) / 1000;
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return `${Math.round(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.round(seconds / 86400)}d ago`;
  return new Date(epochMs).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

/**
 * Convert an `LlmMessageDTO[]` history (the LLM-context shape the agent
 * uses) into the `DisplayMessage[]` shape the modal renders. Used when
 * loading a thread from storage on switch / mount.
 *
 * Mapping rules:
 *   - `system` turns → skipped
 *   - `user` with string content → user bubble
 *   - `user` with array content → tool_result-only turn; consumed by the
 *     first pass to pair with preceding tool_use parts (no own bubble)
 *   - `assistant` with string content → assistant bubble
 *   - `assistant` with array content → tool_use parts emit tool chips
 *     (paired with their result by tool_use_id); text parts emit bubbles
 */
function historyToDisplay(history: LlmMessageDTO[]): DisplayMessage[] {
  // First pass: map tool_use_id → { content, isError }.
  const toolResults = new Map<string, { content: string; isError: boolean }>();
  for (const m of history) {
    if (m.role !== 'user' || !Array.isArray(m.content)) continue;
    for (const part of m.content as LlmMessagePart[]) {
      if (part.type === 'tool_result') {
        toolResults.set(part.tool_use_id, {
          content: typeof part.content === 'string' ? part.content : JSON.stringify(part.content),
          isError: !!part.is_error,
        });
      }
    }
  }
  // Second pass: render in order.
  const result: DisplayMessage[] = [];
  for (const m of history) {
    if (m.role === 'system') continue;
    if (m.role === 'user') {
      if (typeof m.content === 'string') {
        result.push({ role: 'user', content: m.content });
      }
    } else if (m.role === 'assistant') {
      if (typeof m.content === 'string') {
        // `reasoning_content` is a field added to `LlmMessageDTO` in
        // spindle-types 0.4.72. The agent writes the field via conditional
        // spread; the read here needs an inline assertion until we bump
        // the dependency. TODO: drop post-bump.
        const reasoning = (m as LlmMessageDTO & { reasoning_content?: string }).reasoning_content;
        result.push({
          role: 'assistant',
          content: m.content,
          ...(reasoning ? { reasoning } : {}),
        });
      } else if (Array.isArray(m.content)) {
        for (const part of m.content as LlmMessagePart[]) {
          if (part.type === 'tool_use') {
            const r = toolResults.get(part.id);
            result.push({
              role: 'tool',
              toolName: part.name,
              content: r?.content ?? '(no result recorded)',
              isError: r?.isError ?? false,
            });
          } else if (part.type === 'text') {
            result.push({ role: 'assistant', content: part.text });
          }
        }
      }
    }
  }
  return result;
}

export const AssistantModal: FC<AssistantModalProps> = ({
  onClose,
  onBackendMessage,
  sendToBackend,
}) => {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  // Streaming buffer: ref accumulates per-token; state updates throttled.
  const streamingRef = useRef('');
  const streamThrottleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [streaming, setStreaming] = useState('');
  // Streaming reasoning: same pattern — ref source of truth so the
  // `assistant_completed`/`_aborted` handlers can read latest without
  // stale-closure issues.
  const [streamingReasoning, setStreamingReasoning] = useState('');
  const reasoningRef = useRef('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  // Connection list pushed by backend on modal mount.
  const [connections, setConnections] = useState<ConnectionOption[] | null>(null);
  const [connectionId, setConnectionId] = useState<string>('');
  // Usage tracking.
  const [lastTurnUsage, setLastTurnUsage] = useState<{
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    estimated?: boolean;
  } | null>(null);
  const [totalUsage, setTotalUsage] = useState<{
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    estimated?: boolean;
  }>({
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
  });
  // Threads (multi-thread management).
  const [threads, setThreads] = useState<AssistantThreadIndexEntry[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [renamingThreadId, setRenamingThreadId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState('');
  /** Inline toast for the "Apply to script" feedback. Cleared automatically
   *  after a few seconds via the auto-dismiss effect below. */
  const [applyToast, setApplyToast] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Schedule throttled flush of the streaming ref into React state.
  const scheduleStreamFlush = () => {
    if (streamThrottleRef.current !== null) return;
    streamThrottleRef.current = setTimeout(() => {
      streamThrottleRef.current = null;
      setStreaming(streamingRef.current);
    }, STREAM_RENDER_THROTTLE_MS);
  };

  // Cancel any pending throttle timer and reset the streaming ref + state.
  const clearStreamingState = () => {
    if (streamThrottleRef.current !== null) {
      clearTimeout(streamThrottleRef.current);
      streamThrottleRef.current = null;
    }
    streamingRef.current = '';
    setStreaming('');
  };

  // Cleanup any pending throttle timer when the modal unmounts.
  useEffect(() => {
    return () => {
      if (streamThrottleRef.current !== null) {
        clearTimeout(streamThrottleRef.current);
      }
    };
  }, []);

  // Subscribe to backend messages for the lifetime of the modal.
  useEffect(() => {
    return onBackendMessage((raw) => {
      const msg = raw as BackendToFrontend;
      switch (msg.type) {
        case 'assistant_user_turn':
          setMessages((prev) => [...prev, { role: 'user', content: msg.content }]);
          break;
        case 'assistant_connections': {
          setConnections(msg.connections);
          setConnectionId((cur) => {
            if (cur) return cur;
            const def = msg.connections.find((c) => c.isDefault);
            return def?.id ?? '';
          });
          break;
        }
        case 'assistant_token':
          streamingRef.current += msg.token;
          scheduleStreamFlush();
          break;
        case 'assistant_reasoning':
          reasoningRef.current += msg.token;
          setStreamingReasoning(reasoningRef.current);
          break;
        case 'assistant_tool_call':
          setMessages((prev) => [
            ...prev,
            {
              role: 'tool',
              toolName: msg.name,
              content: msg.result,
              isError: msg.isError,
            },
          ]);
          break;
        case 'assistant_completed': {
          const capturedReasoning = reasoningRef.current;
          reasoningRef.current = '';
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: msg.content,
              ...(capturedReasoning ? { reasoning: capturedReasoning } : {}),
            },
          ]);
          clearStreamingState();
          setStreamingReasoning('');
          setIsGenerating(false);
          if (msg.usage) {
            const u = msg.usage;
            setLastTurnUsage(u);
            setTotalUsage((prev) => ({
              promptTokens:     prev.promptTokens     + u.promptTokens,
              completionTokens: prev.completionTokens + u.completionTokens,
              totalTokens:      prev.totalTokens      + u.totalTokens,
              estimated: prev.estimated || u.estimated,
            }));
          }
          break;
        }
        case 'assistant_aborted': {
          const capturedReasoning = reasoningRef.current;
          reasoningRef.current = '';
          if (msg.content || capturedReasoning) {
            setMessages((prev) => [
              ...prev,
              {
                role: 'assistant',
                content: msg.content,
                aborted: true,
                ...(capturedReasoning ? { reasoning: capturedReasoning } : {}),
              },
            ]);
          }
          clearStreamingState();
          setStreamingReasoning('');
          setIsGenerating(false);
          if (msg.usage) {
            const u = msg.usage;
            setLastTurnUsage(u);
            setTotalUsage((prev) => ({
              promptTokens:     prev.promptTokens     + u.promptTokens,
              completionTokens: prev.completionTokens + u.completionTokens,
              totalTokens:      prev.totalTokens      + u.totalTokens,
              estimated: prev.estimated || u.estimated,
            }));
          }
          break;
        }
        case 'assistant_error':
          reasoningRef.current = '';
          setError(msg.error);
          clearStreamingState();
          setStreamingReasoning('');
          setIsGenerating(false);
          break;
        case 'assistant_threads':
          setThreads(msg.threads);
          setActiveThreadId(msg.activeThreadId);
          if (renamingThreadId && !msg.threads.some((t) => t.id === renamingThreadId)) {
            setRenamingThreadId(null);
            setRenameDraft('');
          }
          break;
        case 'assistant_thread_loaded':
          setActiveThreadId(msg.threadId);
          setMessages(historyToDisplay(msg.messages));
          clearStreamingState();
          setStreamingReasoning('');
          reasoningRef.current = '';
          setIsGenerating(false);
          setLastTurnUsage(null);
          setTotalUsage({ promptTokens: 0, completionTokens: 0, totalTokens: 0 });
          setError(null);
          break;
        case 'assistant_apply_success':
          setApplyToast({
            kind: 'success',
            text: `Created ${msg.scriptType} script "${msg.scriptName}". Open it in the Script Manager to edit.`,
          });
          break;
        case 'assistant_apply_error':
          setApplyToast({
            kind: 'error',
            text: `Couldn't create script: ${msg.error}`,
          });
          break;
        case 'assistant_thread_exported': {
          // Backend assembled the Markdown — trigger a user-facing download
          // via a temporary blob URL. No host download API exists for
          // extensions; falling back to the browser-native pattern.
          try {
            const blob = new Blob([msg.content], { type: 'text/markdown;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = msg.filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            // Revoke after a tick so the browser has time to start the
            // download — premature revoke breaks the save dialog in some
            // browsers.
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          } catch (err) {
            setApplyToast({
              kind: 'error',
              text: `Couldn't export thread: ${err instanceof Error ? err.message : String(err)}`,
            });
          }
          break;
        }
        default:
          break;
      }
    });
  }, [onBackendMessage, renamingThreadId]);

  // ESC closes; also auto-focus the input on mount.
  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Request the connection list + threads index once on mount.
  useEffect(() => {
    sendToBackend({ type: 'request_assistant_connections' });
    sendToBackend({ type: 'request_assistant_threads' });
  }, [sendToBackend]);

  // Auto-scroll to the latest content.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages.length, streaming]);

  // Apply-toast auto-dismiss — success fades after 4s, errors stick longer
  // (8s) since the user may need to read the error message.
  useEffect(() => {
    if (!applyToast) return;
    const t = setTimeout(
      () => setApplyToast(null),
      applyToast.kind === 'success' ? 4000 : 8000,
    );
    return () => clearTimeout(t);
  }, [applyToast]);

  const handleSend = () => {
    const content = input.trim();
    if (!content || isGenerating) return;
    if (!connectionId) {
      setError('Pick a connection before sending — see the dropdown at the top of the modal.');
      return;
    }
    setError(null);
    sendToBackend({ type: 'assistant_send', content, connectionId });
    setInput('');
    setIsGenerating(true);
  };

  const handleNewThread = () => {
    if (isGenerating) return;
    sendToBackend({ type: 'assistant_new_thread' });
  };

  const handleSwitchThread = (threadId: string) => {
    if (isGenerating) return;
    if (threadId === activeThreadId) return;
    sendToBackend({ type: 'assistant_switch_thread', threadId });
  };

  const handleStartRename = (thread: AssistantThreadIndexEntry) => {
    setRenamingThreadId(thread.id);
    setRenameDraft(thread.title);
  };

  const handleCommitRename = () => {
    if (!renamingThreadId) return;
    const title = renameDraft.trim() || 'Untitled';
    sendToBackend({ type: 'assistant_rename_thread', threadId: renamingThreadId, title });
    setRenamingThreadId(null);
    setRenameDraft('');
  };

  const handleCancelRename = () => {
    setRenamingThreadId(null);
    setRenameDraft('');
  };

  const handleDeleteThread = (threadId: string) => {
    if (isGenerating) return;
    sendToBackend({ type: 'assistant_delete_thread', threadId });
  };

  /** Export a thread as Markdown — backend assembles the content and pushes
   *  it back via `assistant_thread_exported`, which triggers a browser
   *  download via a temporary blob URL (handled in the message subscriber
   *  above). Disabled while a turn is streaming, same lockout as other
   *  thread actions. */
  const handleExportThread = (threadId: string) => {
    if (isGenerating) return;
    sendToBackend({ type: 'assistant_export_thread', threadId });
  };

  const handleAbort = () => {
    if (!isGenerating) return;
    sendToBackend({ type: 'assistant_abort' });
  };

  /** "Apply to script" — invoked from the code-block apply button via the
   *  AssistantApplyContext. Sends the raw code + fence-language hint;
   *  backend classifies trigger vs library, generates a name, prepends a
   *  provenance header, and creates the script. Result surfaces via
   *  `assistant_apply_success` / `assistant_apply_error`. */
  const applyContextValue = {
    onApply: (code: string, languageHint: string | undefined) => {
      sendToBackend({
        type: 'assistant_apply_to_script',
        code,
        ...(languageHint ? { languageHint } : {}),
      });
    },
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return createPortal(
    <div className="ls-asst-backdrop" onClick={onClose}>
      <div className="ls-asst-modal" onClick={(e) => e.stopPropagation()}>
        <header className="ls-asst-header">
          <div className="ls-asst-title-wrap">
            <div className="ls-asst-eyebrow">
              <Coffee size={10} />
              ASSISTANT
            </div>
            <h3 className="ls-asst-title">Lisa — LumiScript code assistant</h3>
            <p className="ls-asst-subtitle">
              Ask about LumiScript or Spindle APIs. Response quality depends on the model you select.
            </p>
          </div>
          <div className="ls-asst-header-actions">
            <button
              type="button"
              className="ls-asst-iconbtn"
              onClick={onClose}
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        </header>

        {/* 2-column body: sidebar (thread list) + main column (chat). */}
        <div className="ls-asst-split">
          <ThreadSidebar
            threads={threads}
            activeThreadId={activeThreadId}
            renamingThreadId={renamingThreadId}
            renameDraft={renameDraft}
            disabled={isGenerating}
            onNewThread={handleNewThread}
            onSwitchThread={handleSwitchThread}
            onStartRename={handleStartRename}
            onCommitRename={handleCommitRename}
            onCancelRename={handleCancelRename}
            onRenameDraftChange={setRenameDraft}
            onDeleteThread={handleDeleteThread}
            onExportThread={handleExportThread}
          />

          <div className="ls-asst-main-col">

            <div className="ls-asst-connection-bar">
              <label className="ls-asst-connection-label" htmlFor="ls-asst-conn-select">
                Connection
              </label>
              <select
                id="ls-asst-conn-select"
                className="ls-asst-connection-select"
                value={connectionId}
                onChange={(e) => setConnectionId(e.target.value)}
                disabled={isGenerating || connections === null}
              >
                {connections === null && <option value="">Loading…</option>}
                {connections !== null && connections.length === 0 && (
                  <option value="">(no connections configured)</option>
                )}
                {connections !== null && connections.length > 0 && !connectionId && (
                  <option value="">— Pick a connection —</option>
                )}
                {connections?.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.provider} · {c.model}){c.isDefault ? ' — default' : ''}
                  </option>
                ))}
              </select>
              {connections !== null && connections.length === 0 && (
                <span className="ls-asst-connection-empty">
                  Configure one in Lumiverse Settings → LLM Connections.
                </span>
              )}
            </div>

            <AssistantApplyContext.Provider value={applyContextValue}>
              <main className="ls-asst-body" ref={scrollRef}>
                {messages.length === 0 && !streaming && !isGenerating && (
                  <div className="ls-asst-empty">
                    <p>
                      Ask about LumiScript or Spindle APIs. Examples:
                    </p>
                    <ul>
                      <li>"How do I send a chat message and trigger generation?"</li>
                      <li>"Show me an agentic tool-call loop"</li>
                      <li>"What's the difference between <code>api.broadcast</code> and <code>api.events</code>?"</li>
                      <li>"What permissions does <code>api.databanks.create</code> need?"</li>
                    </ul>
                  </div>
                )}

                {messages.map((m, i) => (
                  <MessageBubble key={i} message={m} />
                ))}

                {(streaming || streamingReasoning) && (
                  <MessageBubble
                    message={{
                      role: 'assistant',
                      content: streaming,
                      ...(streamingReasoning ? { reasoning: streamingReasoning } : {}),
                    }}
                    streaming
                  />
                )}

                {isGenerating && !streaming && !streamingReasoning && (
                  <div className="ls-asst-thinking">
                    <Loader2 size={14} className="ls-asst-spin" />
                    <span>Lisa is thinking…</span>
                  </div>
                )}

                {error && (
                  <div className="ls-asst-error">
                    <strong>Error:</strong> {error}
                  </div>
                )}

                {applyToast && (
                  <div className={`ls-asst-apply-toast ls-asst-apply-toast-${applyToast.kind}`}>
                    {applyToast.text}
                  </div>
                )}
              </main>
            </AssistantApplyContext.Provider>

            <div className="ls-asst-usage-bar" aria-live="polite">
              {lastTurnUsage && (
                <>
                  <span
                    className={`ls-asst-usage-segment${lastTurnUsage.estimated ? ' ls-asst-usage-segment-estimated' : ''}`}
                    title={lastTurnUsage.estimated
                      ? "Estimated client-side via spindle.tokens.countText because the provider didn't surface streaming usage. Treat numbers as approximate."
                      : undefined}
                  >
                    <span className="ls-asst-usage-num">{lastTurnUsage.estimated ? '~' : ''}{formatTokens(lastTurnUsage.promptTokens)}</span>
                    <span className="ls-asst-usage-label">in</span>
                    <span className="ls-asst-usage-sep">/</span>
                    <span className="ls-asst-usage-num">{lastTurnUsage.estimated ? '~' : ''}{formatTokens(lastTurnUsage.completionTokens)}</span>
                    <span className="ls-asst-usage-label">out · this turn</span>
                  </span>
                  <span className="ls-asst-usage-dot">·</span>
                  <span
                    className={`ls-asst-usage-segment${totalUsage.estimated ? ' ls-asst-usage-segment-estimated' : ''}`}
                    title={totalUsage.estimated
                      ? "Includes at least one estimated turn — treat as approximate."
                      : undefined}
                  >
                    <span className="ls-asst-usage-num">{totalUsage.estimated ? '~' : ''}{formatTokens(totalUsage.totalTokens)}</span>
                    <span className="ls-asst-usage-label">total · this thread</span>
                  </span>
                </>
              )}
            </div>

            <footer className="ls-asst-composer">
              <textarea
                ref={inputRef}
                className="ls-asst-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Lisa…  (Enter to send · Shift+Enter for newline)"
                rows={2}
                disabled={isGenerating}
              />
              {isGenerating ? (
                <button
                  type="button"
                  className="ls-asst-send ls-asst-stop"
                  onClick={handleAbort}
                  title="Stop generating"
                >
                  <Square size={12} fill="currentColor" />
                </button>
              ) : (
                <button
                  type="button"
                  className="ls-asst-send"
                  onClick={handleSend}
                  disabled={!input.trim()}
                  title="Send (Enter)"
                >
                  <Send size={14} />
                </button>
              )}
            </footer>

          </div> {/* ls-asst-main-col */}
        </div> {/* ls-asst-split */}
      </div>
    </div>,
    document.body,
  );
};

// ─── Thread sidebar ──────────────────────────────────────────────────────────

interface ThreadSidebarProps {
  threads: AssistantThreadIndexEntry[];
  activeThreadId: string | null;
  renamingThreadId: string | null;
  renameDraft: string;
  disabled: boolean;
  onNewThread: () => void;
  onSwitchThread: (id: string) => void;
  onStartRename: (thread: AssistantThreadIndexEntry) => void;
  onCommitRename: () => void;
  onCancelRename: () => void;
  onRenameDraftChange: (next: string) => void;
  onDeleteThread: (id: string) => void;
  onExportThread: (id: string) => void;
}

const ThreadSidebar: FC<ThreadSidebarProps> = ({
  threads,
  activeThreadId,
  renamingThreadId,
  renameDraft,
  disabled,
  onNewThread,
  onSwitchThread,
  onStartRename,
  onCommitRename,
  onCancelRename,
  onRenameDraftChange,
  onDeleteThread,
  onExportThread,
}) => {
  return (
    <aside className="ls-asst-sidebar">
      <button
        type="button"
        className="ls-asst-sidebar-newchat"
        onClick={onNewThread}
        disabled={disabled}
        title="Start a new thread"
      >
        <MessageSquarePlus size={14} />
        <span>New chat</span>
      </button>

      <div className="ls-asst-sidebar-list">
        {threads.length === 0 && (
          <div className="ls-asst-sidebar-empty">No threads yet.</div>
        )}
        {threads.map((t) => {
          const isActive   = t.id === activeThreadId;
          const isRenaming = t.id === renamingThreadId;
          return (
            <div
              key={t.id}
              className={`ls-asst-thread-row${isActive ? ' ls-asst-thread-row-active' : ''}`}
            >
              {isRenaming ? (
                <div className="ls-asst-thread-rename">
                  <input
                    type="text"
                    className="ls-asst-thread-rename-input"
                    value={renameDraft}
                    autoFocus
                    onChange={(e) => onRenameDraftChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        onCommitRename();
                      } else if (e.key === 'Escape') {
                        e.preventDefault();
                        onCancelRename();
                      }
                    }}
                    onBlur={onCancelRename}
                  />
                  <button
                    type="button"
                    className="ls-asst-thread-action"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      onCommitRename();
                    }}
                    title="Commit rename"
                  >
                    <Check size={11} />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="ls-asst-thread-main"
                  onClick={() => onSwitchThread(t.id)}
                  disabled={disabled}
                  title={t.title}
                >
                  <span className="ls-asst-thread-title">{t.title}</span>
                  <span className="ls-asst-thread-meta">
                    {formatRelativeTime(t.updatedAt)} · {t.messageCount} msg
                  </span>
                </button>
              )}

              {!isRenaming && (
                <div className="ls-asst-thread-actions">
                  <button
                    type="button"
                    className="ls-asst-thread-action"
                    onClick={(e) => {
                      e.stopPropagation();
                      onStartRename(t);
                    }}
                    disabled={disabled}
                    title="Rename thread"
                  >
                    <Pencil size={11} />
                  </button>
                  <button
                    type="button"
                    className="ls-asst-thread-action"
                    onClick={(e) => {
                      e.stopPropagation();
                      onExportThread(t.id);
                    }}
                    disabled={disabled}
                    title="Export thread as Markdown"
                  >
                    <Download size={11} />
                  </button>
                  <button
                    type="button"
                    className="ls-asst-thread-action ls-asst-thread-action-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteThread(t.id);
                    }}
                    disabled={disabled}
                    title="Delete thread"
                  >
                    <Trash2 size={11} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

// ─── Message bubble ──────────────────────────────────────────────────────────

const MessageBubble: FC<{ message: DisplayMessage; streaming?: boolean }> = ({
  message,
  streaming,
}) => {
  // Reasoning disclosure: expanded during streaming, collapsed for finalised
  // bubbles (history density). Each bubble instance owns its own toggle.
  const [reasoningExpanded, setReasoningExpanded] = useState(!!streaming);

  if (message.role === 'tool') {
    return (
      <div
        className={`ls-asst-toolchip ${message.isError ? 'ls-asst-toolchip-error' : ''}`}
        title={message.content}
      >
        <code>{message.toolName}</code>
        <span className="ls-asst-toolchip-icon">{message.isError ? '✕' : '✓'}</span>
      </div>
    );
  }
  // Display label: assistant bubbles show the persona's name ("Lisa")
  // instead of the bare 'assistant' role. User / error / tool labels are
  // unchanged.
  const roleLabel = message.role === 'assistant' ? ASSISTANT_DISPLAY_NAME : message.role;
  return (
    <div className={`ls-asst-bubble ls-asst-bubble-${message.role}${message.aborted ? ' ls-asst-bubble-aborted' : ''}`}>
      <div className="ls-asst-bubble-role">
        {roleLabel}
        {message.aborted && <span className="ls-asst-bubble-aborted-tag"> · stopped</span>}
      </div>
      {message.reasoning && (
        <div className="ls-asst-reasoning">
          <button
            type="button"
            className={`ls-asst-reasoning-toggle${reasoningExpanded ? ' ls-asst-reasoning-toggle-open' : ''}`}
            onClick={() => setReasoningExpanded((v) => !v)}
            aria-expanded={reasoningExpanded}
            title={reasoningExpanded ? 'Hide reasoning' : 'Show reasoning'}
          >
            <ChevronRight size={11} className="ls-asst-reasoning-chevron" />
            <Brain size={11} />
            <span>{streaming ? 'Thinking…' : 'Reasoning'}</span>
          </button>
          {reasoningExpanded && (
            <div className="ls-asst-reasoning-content">{message.reasoning}</div>
          )}
        </div>
      )}
      <div className="ls-asst-bubble-content">
        <MarkdownContent text={message.content} />
        {streaming && <span className="ls-asst-cursor">▍</span>}
      </div>
    </div>
  );
};
