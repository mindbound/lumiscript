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

import { FC, useState, useEffect, useRef, useMemo, useCallback, memo, KeyboardEvent, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { Send, X, Loader2, Coffee, Square, Brain, ChevronRight, MessageSquarePlus, Pencil, Trash2, Check, Download, RotateCcw, Code2, BookMarked, RefreshCw, AlertTriangle, NotebookPen, Paperclip, FileText, FoldVertical } from 'lucide-react';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
import { ContextBreakdownPopover, type ContextBreakdown } from './ContextBreakdownPopover.js';
import type { Script } from '../../types/script.js';
import type { AssistantThreadIndexEntry } from '../../assistant/types.js';
import { historyToDisplay, formatTokens, formatRelativeTime, type DisplayMessage } from './assistant-logic.js';
import { MarkdownContent, AssistantApplyContext, CopyButton } from './MarkdownContent.js';
import { HostSelect } from '../common/HostSelect.js';
import { ScriptMentionMenu } from './ScriptMentionMenu.js';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { MemoryPanel } from './MemoryPanel.js';
import type { MemoryNote } from '../../engine/assistant-memory.js';
import { UserFilePicker, type PickerFile } from './UserFilePicker.js';
import { userFileDisplayName } from '../../assistant/user-files.js';

/**
 * How often (ms) the streaming-bubble's markdown content is allowed to
 * re-parse. Token-arrival accumulates into a ref at full speed (per IPC),
 * but the React state that drives the markdown render only updates every
 * THROTTLE_MS, capping the parser cost to ~20 invocations/second.
 */
const STREAM_RENDER_THROTTLE_MS = 50;

/**
 * Distance (px) from the bottom of the transcript within which the view is
 * still treated as "pinned" — new content auto-scrolls. Past it (the user
 * scrolled up to read history) their scroll position is left alone.
 */
const SCROLL_PIN_THRESHOLD_PX = 64;

/**
 * Display name shown on assistant bubbles' role header. Hard-coded to
 * match `LISA_PERSONA.name` rather than reading the persona at runtime —
 * the persona lives backend-side and the modal doesn't import it. If the
 * persona ever becomes user-configurable, this needs to be threaded
 * through via an IPC at modal mount instead.
 */
const ASSISTANT_DISPLAY_NAME = 'Lisa';

/**
 * Starter prompts shown on an empty thread. Clicking one drops it into the
 * composer — it does NOT auto-send, so the user can tweak it first.
 */
const EXAMPLE_PROMPTS = [
  'How do I send a chat message and trigger generation?',
  'Show me an agentic tool-call loop',
  "What's the difference between api.broadcast and api.events?",
  'What permissions does api.databanks.create need?',
];

interface AssistantModalProps {
  /** All of the user's scripts — feeds the @-mention picker + chip labels. */
  scripts: Script[];
  /**
   * Connection id the picker should default to (from extension settings —
   * `assistantConnectionId`). Empty string = no preference; fall back to the
   * Lumiverse default connection. Only seeds the initial selection — the user
   * can still switch connections per-session inside the modal.
   */
  defaultConnectionId: string;
  /**
   * Token budget for the context-fullness gauge denominator (from
   * `LumiScriptSettings.assistantContextTokens`). The gauge shows the last
   * turn's prompt tokens as a fraction of this.
   */
  contextTokens: number;
  onClose: () => void;
  onBackendMessage: (handler: (msg: unknown) => void) => () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

interface ConnectionOption {
  id: string;
  name: string;
  model: string;
  provider: string;
  isDefault: boolean;
}


export const AssistantModal: FC<AssistantModalProps> = ({
  scripts,
  defaultConnectionId,
  contextTokens,
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
  // Inline edit of the last user message (null = not editing). When set, the
  // last user bubble renders as an editable textarea; saving resends the edited
  // content as a fresh turn (see handleEditResend).
  const [editDraft, setEditDraft] = useState<string | null>(null);
  // Bumped each time a thread's messages are (re)loaded. Drives the
  // jump-to-bottom-on-load effect — keyed on this rather than messages.length so
  // switching to an equal-length thread still scrolls to the tail.
  const [loadNonce, setLoadNonce] = useState(0);
  // @-mention / attached-script context. `attachedScriptIds` are the chips above
  // the composer — CONVERSATION-SCOPED: they persist with the thread (restored on
  // reload/switch from assistant_thread_loaded, synced to the backend on
  // attach/detach via assistant_set_context, re-injected fresh each send) and do
  // NOT clear after sending. `mention` tracks an in-progress "@query" token in the
  // textarea (null when not mentioning); `mentionIndex` is the highlighted row.
  const [attachedScriptIds, setAttachedScriptIds] = useState<string[]>([]);
  // Attached reference files (reserved "userfiles/" folder) — conversation-scoped,
  // same lifecycle as attachedScriptIds (persisted via assistant_set_context,
  // restored on thread load). `userFiles` is the picker's listing (null = not yet
  // loaded); `filePickerOpen` toggles the attach-file popover.
  const [attachedFilePaths, setAttachedFilePaths] = useState<string[]>([]);
  const [userFiles, setUserFiles] = useState<PickerFile[] | null>(null);
  const [userFilesError, setUserFilesError] = useState<string | null>(null);
  const [filePickerOpen, setFilePickerOpen] = useState(false);
  const [mention, setMention] = useState<{ query: string; start: number } | null>(null);
  const [mentionIndex, setMentionIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  // Connection list pushed by backend on modal mount.
  const [connections, setConnections] = useState<ConnectionOption[] | null>(null);
  const [connectionId, setConnectionId] = useState<string>('');
  // Mirror the settings-driven default into a ref so the effect-scoped
  // `assistant_connections` handler reads the freshest value without
  // re-subscribing (same idiom as HostSelect's onChange ref).
  const preferredConnectionIdRef = useRef(defaultConnectionId);
  preferredConnectionIdRef.current = defaultConnectionId;
  // Connection options for the host <select> — memoized so a stable array
  // identity reaches HostSelect (avoids redundant handle.update() churn).
  const connectionOptions = useMemo(
    () => (connections ?? []).map((c) => ({
      value: c.id,
      label: c.name,
      sublabel: `${c.provider} · ${c.model}${c.isDefault ? ' · default' : ''}`,
    })),
    [connections],
  );
  // Attached scripts shown as chips (attach order preserved; deleted scripts
  // silently drop out).
  const attachedScripts = useMemo(
    () => attachedScriptIds
      .map((id) => scripts.find((s) => s.id === id))
      .filter((s): s is Script => s != null),
    [attachedScriptIds, scripts],
  );
  // @-mention menu candidates: not-yet-attached scripts whose name matches the
  // typed query (case-insensitive substring), sorted by name. NOT capped — the
  // menu scrolls (max-height + overflow-y), so every match is reachable even
  // with a large library; the query narrows it.
  const mentionMatches = useMemo(() => {
    if (mention === null) return [];
    const q = mention.query.toLowerCase();
    return scripts
      .filter((s) => !attachedScriptIds.includes(s.id))
      .filter((s) => s.name.toLowerCase().includes(q))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [mention, scripts, attachedScriptIds]);
  // The menu only intercepts keyboard nav when it has candidates to offer.
  const menuActive = mention !== null && mentionMatches.length > 0;
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
  // Context-fullness gauge: the last turn's prompt-token count (provider or
  // estimate), shown as a fraction of the configured `contextTokens` budget.
  // Set on turn completion/abort AND restored from the persisted thread on load
  // (so the gauge shows immediately, not blank until the next turn). null hides it.
  const [contextFill, setContextFill] = useState<{ promptTokens: number; estimated: boolean } | null>(null);
  // Manual "Compact now" in flight — disables the button + composer until the
  // backend returns assistant_compacted.
  const [compacting, setCompacting] = useState(false);
  // Context-breakdown popover (click the gauge): open state + the fetched
  // per-segment estimates (null until the on-demand request resolves).
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [contextBreakdown, setContextBreakdown] = useState<ContextBreakdown | null>(null);
  const [breakdownFailed, setBreakdownFailed] = useState(false);
  const gaugeWrapRef = useRef<HTMLSpanElement>(null);
  // Threads (multi-thread management).
  const [threads, setThreads] = useState<AssistantThreadIndexEntry[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [renamingThreadId, setRenamingThreadId] = useState<string | null>(null);
  const [renameDraft, setRenameDraft] = useState('');
  /** Inline toast for the "Apply to script" feedback. Cleared automatically
   *  after a few seconds via the auto-dismiss effect below. */
  const [applyToast, setApplyToast] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);
  // Pending "Update «script»" apply awaiting overwrite confirmation. Set when the
  // user picks an existing-script target from a code block's apply menu; cleared
  // on confirm (dispatches) or cancel.
  const [pendingApply, setPendingApply] = useState<
    { code: string; languageHint?: string; targetScriptId: string; scriptName: string } | null
  >(null);
  // Memory panel (editable view of Lisa's persistent notes about this user).
  const [memoryOpen, setMemoryOpen] = useState(false);
  const [memoryNotes, setMemoryNotes] = useState<MemoryNote[]>([]);
  const [memoryConsolidating, setMemoryConsolidating] = useState(false);
  const [memoryStatus, setMemoryStatus] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Whether the transcript is scrolled near the bottom (updated on real user
  // scroll, not during streaming — see handleTranscriptScroll). Gates
  // auto-scroll so a stream doesn't yank the user back down while they read.
  const isPinnedToBottomRef = useRef(true);

  // Schedule a throttled flush of the streaming refs into React state. A single
  // timer drives BOTH the content and the reasoning bubble: tokens accumulate
  // into refs at full IPC speed, but the React state that re-runs the markdown
  // + Prism render only updates every STREAM_RENDER_THROTTLE_MS. Flushing
  // reasoning here (rather than calling setStreamingReasoning per token) caps
  // reasoning-driven re-renders to the same ~20Hz — thinking models otherwise
  // emit a reasoning token stream that forced a full-modal re-render per token.
  const scheduleStreamFlush = () => {
    if (streamThrottleRef.current !== null) return;
    streamThrottleRef.current = setTimeout(() => {
      streamThrottleRef.current = null;
      setStreaming(streamingRef.current);
      setStreamingReasoning(reasoningRef.current);
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

  // Abort an in-flight turn if the modal closes mid-stream. Otherwise the
  // backend keeps generating (and streaming) to an unmounted frontend — wasted
  // model spend + WebSocket traffic with nothing rendering it. A ref mirrors
  // isGenerating so the unmount cleanup reads the live value, not a stale one.
  const isGeneratingRef = useRef(false);
  isGeneratingRef.current = isGenerating;
  useEffect(() => {
    return () => {
      if (isGeneratingRef.current) {
        sendToBackend({ type: 'assistant_abort' });
      }
    };
  }, [sendToBackend]);

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
            // Prefer the user-configured default Lisa connection (extension
            // settings → `assistantConnectionId`), but only if it still exists
            // in the list; otherwise fall back to the Lumiverse default.
            const preferred = preferredConnectionIdRef.current;
            if (preferred && msg.connections.some((c) => c.id === preferred)) {
              return preferred;
            }
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
          scheduleStreamFlush();
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
            setContextFill({ promptTokens: u.occupancyTokens ?? u.promptTokens, estimated: u.estimated ?? false });
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
            setContextFill({ promptTokens: u.occupancyTokens ?? u.promptTokens, estimated: u.estimated ?? false });
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
          setMessages(historyToDisplay(msg.messages, msg.appliedEvents, msg.compactedThrough));
          setLoadNonce((n) => n + 1);
          clearStreamingState();
          setStreamingReasoning('');
          reasoningRef.current = '';
          setIsGenerating(false);
          // Restore the persisted usage strip (last turn + lifetime total) so it
          // survives thread switches, like the gauge — not a per-session reset.
          setLastTurnUsage(msg.lastTurnUsage ?? null);
          setTotalUsage(msg.totalUsage ?? { promptTokens: 0, completionTokens: 0, totalTokens: 0 });
          // Restore the persisted context-fullness gauge (undefined → hidden).
          setContextFill(
            msg.lastPromptTokens !== undefined
              ? { promptTokens: msg.lastPromptTokens, estimated: msg.lastPromptEstimated ?? false }
              : null,
          );
          // The breakdown is thread-specific + on-demand — close it on a switch
          // so a stale breakdown can't linger against the new thread.
          setBreakdownOpen(false);
          setContextBreakdown(null);
          setError(null);
          // Restore this thread's attached-script + file chips (empty for new threads).
          setAttachedScriptIds(msg.contextScriptIds);
          setAttachedFilePaths(msg.contextFilePaths);
          setMention(null);
          break;
        case 'assistant_compacted': {
          const wasManual = compacting;
          setCompacting(false);
          if (msg.ok && msg.occupancyTokens !== undefined) {
            // Gauge drops to the new (estimated) occupancy. For auto-compaction,
            // this turn's assistant_completed then refines it to the real number.
            setContextFill({ promptTokens: msg.occupancyTokens, estimated: msg.estimated ?? false });
            // Manual compaction has no streaming turn to signal "done" — a
            // transient toast confirms it (the "compacted here" divider appears on
            // the next reload). Auto-compaction's signal is the gauge drop itself.
            if (wasManual) setApplyToast({ kind: 'success', text: 'Context compacted — older messages summarized.' });
          } else if (!msg.ok && msg.error) {
            // Transient toast, not the sticky error banner — these are benign
            // ("nothing to compact", "busy", "conversation changed").
            setApplyToast({ kind: 'error', text: msg.error });
          }
          break;
        }
        case 'assistant_context_breakdown':
          setContextBreakdown({ corpus: msg.corpus, memory: msg.memory, chat: msg.chat, attachments: msg.attachments });
          break;
        case 'user_files':
          setUserFiles(msg.files);
          setUserFilesError(msg.error ?? null);
          break;
        case 'assistant_apply_success':
          setApplyToast({
            kind: 'success',
            text: msg.updated
              ? `Updated ${msg.scriptType} script "${msg.scriptName}" in place.`
              : `Created ${msg.scriptType} script "${msg.scriptName}". Open it in the Script Manager to edit.`,
          });
          // Live transcript marker (persisted backend-side as an appliedEvent, so
          // it reconstructs on reload). Apply happens after the latest message →
          // append at the end.
          setMessages((prev) => [
            ...prev,
            { role: 'applied', content: '', scriptName: msg.scriptName, appliedUpdated: !!msg.updated },
          ]);
          break;
        case 'assistant_apply_error':
          setApplyToast({
            kind: 'error',
            text: `Couldn't apply to script: ${msg.error}`,
          });
          break;
        case 'assistant_memory':
          setMemoryNotes(msg.notes);
          break;
        case 'assistant_memory_consolidated':
          setMemoryConsolidating(false);
          setMemoryStatus(
            msg.error
              ? { kind: 'error', text: msg.error }
              : { kind: 'success', text: `Consolidated ${msg.before} → ${msg.after} notes.` },
          );
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

  // Recompute the "pinned to bottom" flag on real user scroll. Cheap — fires
  // only on actual scroll events, never on the ~20Hz streaming flush.
  const handleTranscriptScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    isPinnedToBottomRef.current =
      el.scrollHeight - el.scrollTop - el.clientHeight < SCROLL_PIN_THRESHOLD_PX;
  };

  // Auto-scroll to the latest content — but only while pinned near the bottom,
  // and deferred to an animation frame so the scrollHeight read happens at
  // paint time instead of forcing a synchronous reflow on every streaming flush.
  useEffect(() => {
    if (!isPinnedToBottomRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const raf = requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
    return () => cancelAnimationFrame(raf);
  }, [messages.length, streaming]);

  // Jump to the bottom when a thread (re)loads. Separate from the streaming
  // auto-scroll above, and keyed on loadNonce (NOT messages.length) so it (a)
  // also fires when switching to an equal-length thread and (b) never runs on a
  // per-streaming-flush render — so it adds no streaming-perf cost. A single
  // scrollTop=scrollHeight lands SHORT because content-visibility reports
  // off-screen bubbles at their 160px estimate until they enter the viewport;
  // re-pinning across a few frames lets scrollHeight settle to the true tail.
  // Stops once the height is stable for two frames (or a small frame cap), so it
  // costs nothing once the thread has landed.
  useEffect(() => {
    if (loadNonce === 0) return;
    isPinnedToBottomRef.current = true;
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    let frames = 0;
    let stableFor = 0;
    let prevHeight = -1;
    const settle = () => {
      el.scrollTop = el.scrollHeight;
      if (el.scrollHeight === prevHeight) stableFor += 1;
      else { stableFor = 0; prevHeight = el.scrollHeight; }
      if (stableFor < 2 && frames++ < 20) raf = requestAnimationFrame(settle);
    };
    raf = requestAnimationFrame(settle);
    return () => cancelAnimationFrame(raf);
  }, [loadNonce]);

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

  // Auto-dismiss the Memory-panel consolidation status (success shorter than error).
  useEffect(() => {
    if (!memoryStatus) return;
    const t = setTimeout(() => setMemoryStatus(null), memoryStatus.kind === 'success' ? 5000 : 8000);
    return () => clearTimeout(t);
  }, [memoryStatus]);

  const handleSend = () => {
    const content = input.trim();
    if (!content || isGenerating) return;
    if (!connectionId) {
      setError('Pick a connection before sending — see the dropdown at the top of the modal.');
      return;
    }
    setError(null);
    // A fresh send always re-pins to the bottom even if the user had scrolled up.
    isPinnedToBottomRef.current = true;
    sendToBackend({
      type: 'assistant_send',
      content,
      connectionId,
      ...(attachedScriptIds.length > 0 ? { contextScriptIds: attachedScriptIds } : {}),
      ...(attachedFilePaths.length > 0 ? { contextFilePaths: attachedFilePaths } : {}),
    });
    setInput('');
    // Chips are conversation-scoped — they persist across sends (NOT cleared).
    setMention(null);
    setIsGenerating(true);
  };

  // ── @-mention handling ──────────────────────────────────────────────────────
  // Detect an in-progress "@token" immediately left of the caret (the `@` must
  // start the string or follow whitespace, so emails like "a@b" don't trigger).
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    const caret = e.target.selectionStart ?? value.length;
    const m = /(?:^|\s)@([^\s@]*)$/.exec(value.slice(0, caret));
    if (m) {
      const query = m[1] ?? '';
      setMention({ query, start: caret - query.length - 1 });
      setMentionIndex(0);
    } else if (mention !== null) {
      setMention(null);
    }
  };

  // Persist the conversation's full attachment set (scripts + files) on the
  // active thread so it survives reload. assistant_set_context carries BOTH
  // lists, so every attach/detach sends the current value of both — sending one
  // without the other would clear the other on the backend.
  const persistContext = (scriptIds: string[], filePaths: string[]) => {
    sendToBackend({ type: 'assistant_set_context', scriptIds, filePaths });
  };

  // Attach the chosen script as a chip and strip the "@query" token from the
  // textarea (the chip is the canonical reference, so the text stays clean).
  const selectMention = (script: Script) => {
    if (!attachedScriptIds.includes(script.id)) {
      const next = [...attachedScriptIds, script.id];
      setAttachedScriptIds(next);
      persistContext(next, attachedFilePaths);
    }
    if (mention !== null) {
      const end = mention.start + 1 + mention.query.length;
      setInput((cur) => cur.slice(0, mention.start) + cur.slice(end));
    }
    setMention(null);
    inputRef.current?.focus();
  };

  const removeChip = (id: string) => {
    const next = attachedScriptIds.filter((x) => x !== id);
    setAttachedScriptIds(next);
    persistContext(next, attachedFilePaths);
  };

  // ── Attached files (reserved "userfiles/" folder) ────────────────────────────
  const openFilePicker = () => {
    setFilePickerOpen(true);
    sendToBackend({ type: 'request_user_files' }); // refresh the listing
  };
  const toggleFile = (path: string) => {
    const next = attachedFilePaths.includes(path)
      ? attachedFilePaths.filter((p) => p !== path)
      : [...attachedFilePaths, path];
    setAttachedFilePaths(next);
    persistContext(attachedScriptIds, next);
  };
  const removeFileChip = (path: string) => {
    const next = attachedFilePaths.filter((p) => p !== path);
    setAttachedFilePaths(next);
    persistContext(attachedScriptIds, next);
  };
  const addUserFile = (name: string, content: string) => {
    sendToBackend({ type: 'add_user_file', name, content });
  };
  const deleteUserFile = (path: string) => {
    // If the deleted file was attached, drop it from the set too.
    if (attachedFilePaths.includes(path)) {
      const next = attachedFilePaths.filter((p) => p !== path);
      setAttachedFilePaths(next);
      persistContext(attachedScriptIds, next);
    }
    sendToBackend({ type: 'delete_user_file', path });
  };

  // ── Retry support ──────────────────────────────────────────────────────────
  // A turn is retryable when its user message was echoed but never got an
  // assistant response (the send failed) — i.e. the last user bubble sits after
  // the last assistant bubble. The failed attempt was NOT persisted backend-side,
  // so retrying re-runs against the unchanged history; we keep the existing user
  // bubble and pass `isRetry` so the backend skips the duplicate echo.
  const lastUserIdx = messages.map((m) => m.role).lastIndexOf('user');
  const lastAssistantIdx = messages.map((m) => m.role).lastIndexOf('assistant');
  const canRetry = error !== null && lastUserIdx !== -1 && lastUserIdx > lastAssistantIdx;

  const handleRetry = () => {
    if (isGenerating || lastUserIdx === -1) return;
    if (!connectionId) {
      setError('Pick a connection before retrying — see the dropdown at the top of the modal.');
      return;
    }
    const content = messages[lastUserIdx]!.content;
    // Drop anything after the failed user turn (stale tool rows / partial
    // output from the failed attempt), keeping the user bubble itself in place.
    setMessages((prev) => prev.slice(0, lastUserIdx + 1));
    setError(null);
    // Chips persist (conversation-scoped), so the current set IS what the failed
    // turn carried — re-send it as-is.
    sendToBackend({
      type: 'assistant_send',
      content,
      connectionId,
      isRetry: true,
      ...(attachedScriptIds.length > 0 ? { contextScriptIds: attachedScriptIds } : {}),
      ...(attachedFilePaths.length > 0 ? { contextFilePaths: attachedFilePaths } : {}),
    });
    setIsGenerating(true);
  };

  // ── Edit & resend the last user message ─────────────────────────────────────
  // Offered only when the last user turn already has an assistant reply (a
  // completed, persisted exchange); the failed-turn case is covered by Retry.
  const canEditLast =
    !isGenerating && editDraft === null && lastUserIdx !== -1 && lastUserIdx < lastAssistantIdx;

  const startEditLast = useCallback(() => {
    setEditDraft(messages[lastUserIdx]?.content ?? '');
  }, [messages, lastUserIdx]);

  const handleEditResend = () => {
    if (editDraft === null || isGenerating) return;
    const content = editDraft.trim();
    if (!content) return;
    if (!connectionId) {
      setError('Pick a connection before resending — see the dropdown at the top of the modal.');
      return;
    }
    // Optimistically replace the last user bubble's content and drop everything
    // after it (its assistant reply / tool rows); the backend trims the matching
    // history and regenerates a fresh reply.
    setMessages((prev) => {
      const next = prev.slice(0, lastUserIdx + 1);
      next[lastUserIdx] = { ...next[lastUserIdx]!, content };
      return next;
    });
    setEditDraft(null);
    setError(null);
    isPinnedToBottomRef.current = true;
    sendToBackend({
      type: 'assistant_send',
      content,
      connectionId,
      editLast: true,
      ...(attachedScriptIds.length > 0 ? { contextScriptIds: attachedScriptIds } : {}),
      ...(attachedFilePaths.length > 0 ? { contextFilePaths: attachedFilePaths } : {}),
    });
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
    // The backend's assistant_delete_thread handler shows a host-native confirm
    // (spindle.modal.confirm) before deleting — so no second in-modal confirm.
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

  const handleCompact = () => {
    if (isGenerating || compacting) return;
    if (!connectionId) {
      setError('Pick a connection before compacting — see the dropdown at the top of the modal.');
      return;
    }
    setCompacting(true);
    sendToBackend({ type: 'assistant_compact', connectionId });
  };

  // Toggle the context-breakdown popover; fetch fresh estimates on open.
  const toggleBreakdown = () => {
    setBreakdownOpen((open) => {
      if (open) return false;
      setContextBreakdown(null);
      setBreakdownFailed(false);
      sendToBackend({ type: 'request_context_breakdown' });
      return true;
    });
  };
  // Close the breakdown popover on a click outside it.
  useEffect(() => {
    if (!breakdownOpen) return;
    const onDown = (e: MouseEvent) => {
      if (gaugeWrapRef.current && !gaugeWrapRef.current.contains(e.target as Node)) setBreakdownOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [breakdownOpen]);
  // Don't spin forever — surface a fallback if the estimate doesn't arrive
  // (covers the rare case where the backend has no active thread/user to reply).
  useEffect(() => {
    if (!breakdownOpen || contextBreakdown) return;
    const t = setTimeout(() => setBreakdownFailed(true), 6000);
    return () => clearTimeout(t);
  }, [breakdownOpen, contextBreakdown]);

  /** "Apply to script" — invoked from the code-block apply button via the
   *  AssistantApplyContext. Sends the raw code + fence-language hint;
   *  backend classifies trigger vs library, generates a name, prepends a
   *  provenance header, and creates the script. Result surfaces via
   *  `assistant_apply_success` / `assistant_apply_error`. */
  // Stable {id,name,type} projection of the attached scripts, KEYED ON THE VALUE
  // SIGNATURE rather than the `attachedScripts` array identity. `attachedScripts`
  // gets a fresh identity whenever the `scripts` prop does — e.g. an unrelated
  // script autosave/edit pushes a new list while Lisa is open — which would
  // otherwise churn `applyContextValue` below and re-highlight every code block
  // in the transcript (the same Prism storm the streaming memo fixed, just
  // triggered by script edits). The signature only changes when an attached
  // script's id/name/type actually changes, so the context value stays stable.
  const applyScriptsSig = JSON.stringify(attachedScripts.map((s) => [s.id, s.name, s.type]));
  const applyScripts = useMemo(
    () => attachedScripts.map((s) => ({ id: s.id, name: s.name, type: s.type })),
    [applyScriptsSig],
  );
  const onApply = useCallback(
    (code: string, languageHint: string | undefined, targetScriptId?: string) => {
      if (targetScriptId) {
        // Updating an existing script overwrites its code — gate on a confirm.
        const target = applyScripts.find((s) => s.id === targetScriptId);
        setPendingApply({
          code,
          languageHint,
          targetScriptId,
          scriptName: target?.name ?? 'this script',
        });
      } else {
        sendToBackend({
          type: 'assistant_apply_to_script',
          code,
          ...(languageHint ? { languageHint } : {}),
        });
      }
    },
    [applyScripts, sendToBackend],
  );
  // Memoized so the Provider value identity is STABLE across re-renders — both
  // streaming-tick re-renders AND unrelated `scripts`-prop churns (see above). A
  // fresh value forces every AssistantApplyContext consumer (every fenced code
  // block's apply button) to re-render, piercing MarkdownContent's `memo` and
  // re-running Prism highlighting over every code block in the whole transcript.
  const applyContextValue = useMemo(
    () => ({ attachedScripts: applyScripts, onApply }),
    [applyScripts, onApply],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // When the @-mention menu has candidates, it owns the nav keys.
    if (menuActive) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setMentionIndex((i) => Math.min(i + 1, mentionMatches.length - 1));
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setMentionIndex((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        const pick = mentionMatches[mentionIndex];
        if (pick) selectMention(pick);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setMention(null);
        return;
      }
    } else if (mention !== null && e.key === 'Escape') {
      // Menu open but empty — Escape still dismisses the (no-match) menu.
      e.preventDefault();
      setMention(null);
      return;
    }
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
              onClick={() => { setMemoryOpen(true); sendToBackend({ type: 'request_assistant_memory' }); }}
              title="Memory — what Lisa remembers about you"
            >
              <NotebookPen size={15} />
            </button>
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

        {memoryOpen && (
          <MemoryPanel
            notes={memoryNotes}
            onAdd={(input) => sendToBackend({ type: 'assistant_memory_add', ...input })}
            onEdit={(id, patch) => sendToBackend({ type: 'assistant_memory_edit', id, ...patch })}
            onDelete={(id) => sendToBackend({ type: 'assistant_memory_delete', id })}
            onConsolidate={() => {
              if (!connectionId) {
                setMemoryStatus({ kind: 'error', text: 'Pick a connection first (top of the modal).' });
                return;
              }
              setMemoryConsolidating(true);
              setMemoryStatus(null);
              sendToBackend({ type: 'assistant_memory_consolidate', connectionId });
            }}
            consolidating={memoryConsolidating}
            status={memoryStatus}
            onClose={() => setMemoryOpen(false)}
          />
        )}

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
              <span className="ls-asst-connection-label">Connection</span>
              <HostSelect
                options={connectionOptions}
                value={connectionId}
                onChange={setConnectionId}
                placeholder={connections === null ? 'Loading…' : '— Pick a connection —'}
                disabled={isGenerating || connections === null}
                ariaLabel="Connection"
                searchThreshold={8}
              />
              {connections !== null && connections.length === 0 && (
                <span className="ls-asst-connection-empty">
                  Configure one in Lumiverse Settings → LLM Connections.
                </span>
              )}
            </div>

            <AssistantApplyContext.Provider value={applyContextValue}>
              <main className="ls-asst-body" ref={scrollRef} onScroll={handleTranscriptScroll}>
                {messages.length === 0 && !streaming && !isGenerating && (
                  <div className="ls-asst-empty">
                    <p>Ask about LumiScript or Spindle APIs. Try one of these:</p>
                    <ul>
                      {EXAMPLE_PROMPTS.map((ex) => (
                        <li key={ex}>
                          <button
                            type="button"
                            className="ls-asst-example"
                            onClick={() => { setInput(ex); inputRef.current?.focus(); }}
                          >
                            {ex}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {messages.map((m, i) =>
                  i === lastUserIdx && editDraft !== null ? (
                    <div key={i} className="ls-asst-edit-box">
                      <textarea
                        className="ls-asst-edit-input"
                        value={editDraft}
                        onChange={(e) => setEditDraft(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleEditResend(); }
                          else if (e.key === 'Escape') { e.preventDefault(); setEditDraft(null); }
                        }}
                        rows={Math.min(8, Math.max(2, editDraft.split('\n').length))}
                        autoFocus
                      />
                      <div className="ls-asst-edit-actions">
                        <button type="button" className="ls-asst-edit-cancel" onClick={() => setEditDraft(null)}>
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="ls-asst-edit-save"
                          onClick={handleEditResend}
                          disabled={!editDraft.trim()}
                        >
                          Save &amp; resend
                        </button>
                      </div>
                    </div>
                  ) : (
                    <MessageBubble
                      key={i}
                      message={m}
                      scrollRoot={scrollRef}
                      eager={i >= messages.length - 1}
                      {...(i === lastUserIdx && canEditLast ? { onEdit: startEditLast } : {})}
                    />
                  )
                )}

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
                    <div className="ls-asst-error-text"><strong>Error:</strong> {error}</div>
                    {canRetry && (
                      <button
                        type="button"
                        className="ls-asst-retry-btn"
                        onClick={handleRetry}
                        disabled={isGenerating || compacting}
                        title="Re-send the last message"
                      >
                        <RotateCcw size={12} />
                        Retry
                      </button>
                    )}
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
              {contextFill && contextTokens > 0 && (() => {
                const pct = contextFill.promptTokens / contextTokens;
                // Label/title show the TRUE percent (can exceed 100% — the
                // "over budget, older turns dropping" signal); only the fill-bar
                // width below is clamped to 100%.
                const pctDisplay = Math.round(pct * 100);
                const level = pct >= 0.9 ? 'crit' : pct >= 0.75 ? 'warn' : 'ok';
                return (
                  <span className="ls-asst-gauge-wrap" ref={gaugeWrapRef}>
                    <button
                      type="button"
                      className={`ls-asst-usage-gauge ls-asst-usage-gauge-${level}`}
                      title={`Context window: ${contextFill.estimated ? '~' : ''}${formatTokens(contextFill.promptTokens)} of ${formatTokens(contextTokens)} tokens (${pctDisplay}%). Click for a breakdown of what's filling it.`}
                      onClick={toggleBreakdown}
                      aria-label="Context usage — click for a breakdown"
                    >
                      <span className="ls-asst-usage-gauge-track">
                        <span
                          className="ls-asst-usage-gauge-fill"
                          style={{ width: `${Math.min(100, pctDisplay)}%` }}
                        />
                      </span>
                      <span className="ls-asst-usage-label">{contextFill.estimated ? '~' : ''}{pctDisplay}% ctx</span>
                    </button>
                    {breakdownOpen && (
                      contextBreakdown
                        ? <ContextBreakdownPopover breakdown={contextBreakdown} budget={contextTokens} onClose={() => setBreakdownOpen(false)} />
                        : <div className="ls-asst-bd-popover ls-asst-bd-loading">{breakdownFailed ? "Couldn't compute the breakdown — try reopening." : 'Calculating breakdown…'}</div>
                    )}
                  </span>
                );
              })()}
              {contextFill && contextTokens > 0 && (
                <button
                  type="button"
                  className="ls-asst-compact-btn"
                  onClick={handleCompact}
                  disabled={isGenerating || compacting}
                  title="Compact now — summarize the older messages to free up context, keeping the recent ones verbatim. Most useful once the conversation is long; it also runs automatically as the context nears full."
                  aria-label="Compact conversation context"
                >
                  {compacting ? <Loader2 size={11} className="ls-asst-spin" /> : <FoldVertical size={11} />}
                </button>
              )}
              {contextFill && contextTokens > 0 && lastTurnUsage && (
                <span className="ls-asst-usage-dot">·</span>
              )}
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
              {(attachedScripts.length > 0 || attachedFilePaths.length > 0) && (
                <div className="ls-asst-chips">
                  {attachedScripts.map((s) => (
                    <span key={s.id} className="ls-asst-chip" title={`${s.type} script — attached as context`}>
                      {s.type === 'library' ? <BookMarked size={11} /> : <Code2 size={11} />}
                      <span className="ls-asst-chip-name">{s.name}</span>
                      <button
                        type="button"
                        className="ls-asst-chip-remove"
                        onClick={() => removeChip(s.id)}
                        title="Remove"
                        aria-label={`Remove ${s.name}`}
                      >
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                  {attachedFilePaths.map((p) => (
                    <span key={p} className="ls-asst-chip ls-asst-chip-file" title="reference file — attached as context">
                      <FileText size={11} />
                      <span className="ls-asst-chip-name">{userFileDisplayName(p)}</span>
                      <button
                        type="button"
                        className="ls-asst-chip-remove"
                        onClick={() => removeFileChip(p)}
                        title="Remove"
                        aria-label={`Remove ${userFileDisplayName(p)}`}
                      >
                        <X size={10} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div className="ls-asst-composer-row">
                {mention !== null && (
                  <ScriptMentionMenu
                    matches={mentionMatches}
                    activeIndex={mentionIndex}
                    onPick={selectMention}
                    onHoverIndex={setMentionIndex}
                  />
                )}
                {filePickerOpen && (
                  <UserFilePicker
                    files={userFiles}
                    attachedPaths={attachedFilePaths}
                    error={userFilesError}
                    onToggle={toggleFile}
                    onAdd={addUserFile}
                    onDelete={deleteUserFile}
                    onClose={() => setFilePickerOpen(false)}
                  />
                )}
                <button
                  type="button"
                  className={`ls-asst-attach${filePickerOpen ? ' ls-asst-attach-on' : ''}`}
                  onClick={() => (filePickerOpen ? setFilePickerOpen(false) : openFilePicker())}
                  title="Attach a file from your storage"
                  aria-label="Attach a file"
                  disabled={isGenerating}
                >
                  <Paperclip size={15} />
                </button>
                <textarea
                  ref={inputRef}
                  className="ls-asst-input"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onBlur={() => setMention(null)}
                  placeholder="Ask Lisa…  (Enter to send · Shift+Enter for newline · @ to attach a script)"
                  rows={2}
                  disabled={isGenerating || compacting}
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
                    disabled={!input.trim() || compacting}
                    title="Send (Enter)"
                  >
                    <Send size={14} />
                  </button>
                )}
              </div>
            </footer>

          </div> {/* ls-asst-main-col */}
        </div> {/* ls-asst-split */}

        {/* Overwrite confirmation for "Update «script»" applies. Renders its own
            portal, so its position in the tree here is just logical grouping. */}
        {pendingApply && (
          <ConfirmDialog
            title="Update script?"
            icon={<RefreshCw size={15} style={{ color: 'var(--lumiverse-danger, rgb(246, 130, 130))' }} />}
            variant="danger"
            confirmLabel="Update & overwrite"
            confirmIcon={<RefreshCw size={12} />}
            // Lisa's modal backdrop is z-index 10001; sit above it so the
            // confirm isn't occluded (default overlay z-index is 9999).
            overlayZIndex={10002}
            onConfirm={() => {
              sendToBackend({
                type: 'assistant_apply_to_script',
                code: pendingApply.code,
                targetScriptId: pendingApply.targetScriptId,
                ...(pendingApply.languageHint ? { languageHint: pendingApply.languageHint } : {}),
              });
              setPendingApply(null);
            }}
            onCancel={() => setPendingApply(null)}
          >
            <p className="ls-confirm-message">
              This replaces the entire code of <strong>{pendingApply.scriptName}</strong> with
              the code from this block.
            </p>
            <div className="ls-confirm-warning">
              <AlertTriangle size={12} />
              <span>The current code is overwritten — this can't be undone.</span>
            </div>
          </ConfirmDialog>
        )}
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

const MessageBubble = memo(({
  message,
  streaming,
  onEdit,
  scrollRoot,
  eager,
}: {
  message: DisplayMessage;
  streaming?: boolean;
  onEdit?: () => void;
  scrollRoot?: { current: HTMLElement | null } | null;
  eager?: boolean;
}) => {
  // Reasoning disclosure: expanded during streaming, collapsed for finalised
  // bubbles (history density). Each bubble instance owns its own toggle.
  const [reasoningExpanded, setReasoningExpanded] = useState(!!streaming);
  // Lazy content: defer the expensive markdown + Prism render of off-screen
  // historical bubbles until they scroll near the viewport. Opening a long /
  // code-heavy thread otherwise markdown-parses + syntax-highlights EVERY bubble
  // in one synchronous commit — seconds of main-thread freeze plus a starved WS
  // heartbeat (the "connection lost"). The streaming bubble and the eager (last)
  // bubble render rich immediately, so the part of the thread you actually look
  // at on open never flashes. Once rich, a bubble stays rich (state never resets).
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [rich, setRich] = useState(!!streaming || !!eager);
  useEffect(() => {
    if (rich) return;
    const el = bubbleRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setRich(true); return; }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) { setRich(true); obs.disconnect(); }
      },
      { root: scrollRoot?.current ?? null, rootMargin: '600px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rich, scrollRoot]);

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
  if (message.role === 'applied') {
    return (
      <div className="ls-asst-applied">
        <Check size={11} />
        <span>{message.appliedUpdated ? 'Updated' : 'Created'} <strong>{message.scriptName}</strong> from this conversation</span>
      </div>
    );
  }
  if (message.role === 'compacted') {
    return (
      <div className="ls-asst-compacted">
        <FoldVertical size={11} />
        <span>Earlier messages compacted — Lisa sees a summary of everything above this point</span>
      </div>
    );
  }
  // Display label: assistant bubbles show the persona's name ("Lisa")
  // instead of the bare 'assistant' role. User / error / tool labels are
  // unchanged.
  const roleLabel = message.role === 'assistant' ? ASSISTANT_DISPLAY_NAME : message.role;
  return (
    <div ref={bubbleRef} className={`ls-asst-bubble ls-asst-bubble-${message.role}${message.aborted ? ' ls-asst-bubble-aborted' : ''}`}>
      <div className="ls-asst-bubble-role">
        <span>
          {roleLabel}
          {message.aborted && <span className="ls-asst-bubble-aborted-tag"> · stopped</span>}
        </span>
        {message.role === 'assistant' && message.content && (
          <CopyButton text={message.content} className="ls-asst-bubble-copy" title="Copy reply" />
        )}
        {message.role === 'user' && onEdit && (
          <button
            type="button"
            className="ls-asst-bubble-edit"
            onClick={onEdit}
            title="Edit & resend"
            aria-label="Edit and resend this message"
          >
            <Pencil size={12} />
          </button>
        )}
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
        {rich
          ? <MarkdownContent text={message.content} />
          : <div className="ls-asst-bubble-deferred">{message.content}</div>}
        {streaming && <span className="ls-asst-cursor">▍</span>}
      </div>
    </div>
  );
});
MessageBubble.displayName = 'MessageBubble';
