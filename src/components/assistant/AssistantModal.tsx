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

import { FC, useState, useEffect, useRef, useMemo, KeyboardEvent, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { Send, X, Loader2, Coffee, Square, Brain, ChevronRight, MessageSquarePlus, Pencil, Trash2, Check, Download, RotateCcw, Code2, BookMarked, RefreshCw, AlertTriangle, NotebookPen, Paperclip, FileText } from 'lucide-react';
import type { BackendToFrontend, FrontendToBackend } from '../../types/messages.js';
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
          setMessages(historyToDisplay(msg.messages, msg.appliedEvents));
          clearStreamingState();
          setStreamingReasoning('');
          reasoningRef.current = '';
          setIsGenerating(false);
          setLastTurnUsage(null);
          setTotalUsage({ promptTokens: 0, completionTokens: 0, totalTokens: 0 });
          setError(null);
          // Restore this thread's attached-script + file chips (empty for new threads).
          setAttachedScriptIds(msg.contextScriptIds);
          setAttachedFilePaths(msg.contextFilePaths);
          setMention(null);
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

  /** "Apply to script" — invoked from the code-block apply button via the
   *  AssistantApplyContext. Sends the raw code + fence-language hint;
   *  backend classifies trigger vs library, generates a name, prepends a
   *  provenance header, and creates the script. Result surfaces via
   *  `assistant_apply_success` / `assistant_apply_error`. */
  const applyContextValue = {
    attachedScripts: attachedScripts.map((s) => ({ id: s.id, name: s.name, type: s.type })),
    onApply: (code: string, languageHint: string | undefined, targetScriptId?: string) => {
      if (targetScriptId) {
        // Updating an existing script overwrites its code — gate on a confirm.
        const target = attachedScripts.find((s) => s.id === targetScriptId);
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
  };

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
              <main className="ls-asst-body" ref={scrollRef}>
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
                    <div className="ls-asst-error-text"><strong>Error:</strong> {error}</div>
                    {canRetry && (
                      <button
                        type="button"
                        className="ls-asst-retry-btn"
                        onClick={handleRetry}
                        disabled={isGenerating}
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
  if (message.role === 'applied') {
    return (
      <div className="ls-asst-applied">
        <Check size={11} />
        <span>{message.appliedUpdated ? 'Updated' : 'Created'} <strong>{message.scriptName}</strong> from this conversation</span>
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
        <span>
          {roleLabel}
          {message.aborted && <span className="ls-asst-bubble-aborted-tag"> · stopped</span>}
        </span>
        {message.role === 'assistant' && message.content && (
          <CopyButton text={message.content} className="ls-asst-bubble-copy" title="Copy reply" />
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
        <MarkdownContent text={message.content} />
        {streaming && <span className="ls-asst-cursor">▍</span>}
      </div>
    </div>
  );
};
