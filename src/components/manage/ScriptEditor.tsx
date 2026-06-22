import { FC, useRef, useState, useEffect, useCallback } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { Play, Loader2, Shield, ShieldAlert, Clock, Calendar, Code2, BookOpen, Copy, Check, FolderOpen, MessageCircle, RotateCcw } from 'lucide-react';
import type { Script, ScriptBindingEntry, ConsoleEntry } from '../../types/script.js';
import type { FrontendToBackend } from '../../types/messages.js';
import { ScriptConsole } from './ScriptConsole.js';
import { BindingsSection, type ActiveContext } from './BindingsSection.js';
import { TriggersSection } from './TriggersSection.js';
import { LUMISCRIPT_DEFS } from '../../types/editor-lib.js';
import { ReferenceTab } from '../reference/ReferenceTab.js';
import { dispatchOpenAssistant } from '../assistant/openAssistant.js';
import { PromptDialog } from '../common/PromptDialog.js';

// Register the LumiScript ambient type definitions with Monaco's JavaScript
// language service once — subsequent editor mounts reuse the existing registration.
let _defsRegistered = false;

interface ScriptEditorProps {
  script: Script;
  allScripts: Script[];
  activeContext: ActiveContext;
  isRunning: boolean;
  consoleEntries: ConsoleEntry[];
  editorFontSize: number;
  editorIntellisense: boolean;
  autosaveDebounceMs: number;
  onClearConsole: () => void;
  sendToBackend: (msg: FrontendToBackend) => void;
}

export const ScriptEditor: FC<ScriptEditorProps> = ({
  script,
  allScripts,
  activeContext,
  isRunning,
  consoleEntries,
  editorFontSize,
  editorIntellisense,
  autosaveDebounceMs,
  onClearConsole,
  sendToBackend,
}) => {
  const [localCode, setLocalCode] = useState(script.code);
  const [unsaved, setUnsaved] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState(script.name);
  const [viewMode, setViewMode] = useState<'code' | 'docs'>('code');
  const [copied, setCopied] = useState(false);
  const [confirmDangerous, setConfirmDangerous] = useState(false);
  const [namingFolder, setNamingFolder] = useState(false);
  // v0.27.5 — Monaco init-success detection. Surfaces a troubleshooting
  // overlay if the editor either fails to mount within 15s ('mount-timeout')
  // or mounts but its input pipeline doesn't respond to user clicks
  // ('unresponsive'). Catches silent failure modes like the Firefox/Windows
  // DirectWrite hang documented in
  // `notes/known-issue-monaco-firefox-windows-init-hang.md`. Without this,
  // the user sees a blank-looking editor with no clue what went wrong.
  const [editorHealth, setEditorHealth] = useState<
    'pending' | 'ok' | 'mount-timeout' | 'unresponsive'
  >('pending');
  const mountTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const editorRef = useRef<any>(null);
  // v0.26.x diagnostic — last value the user typed/pasted that hasn't been
  // confirmed-saved (cleared in saveCode after the IPC fires). Used by the
  // unmount-flush effect so closing the modal before the autosave debounce
  // fires still persists the latest content.
  const pendingValueRef = useRef<string | null>(null);
  // Stable refs for the unmount cleanup — captures the *latest* script.id
  // and sendToBackend even if the prop changes during the editor's lifetime
  // (e.g. user switches scripts via the sidebar without unmounting the editor).
  const scriptIdRef = useRef(script.id);
  const sendToBackendRef = useRef(sendToBackend);
  useEffect(() => { scriptIdRef.current = script.id; }, [script.id]);
  useEffect(() => { sendToBackendRef.current = sendToBackend; }, [sendToBackend]);

  // Sync local code when script changes; also dismiss any pending dangerous confirm.
  useEffect(() => {
    setLocalCode(script.code);
    setUnsaved(false);
    setRenameValue(script.name);
    setConfirmDangerous(false);
  }, [script.id, script.code, script.name]);

  // v0.27.5 — reset Monaco health probe ONLY on actual script switch (script.id
  // change), not on every code/name update. The Editor below is keyed by
  // script.id, so switching scripts unmounts + remounts the Monaco component
  // and re-fires handleMount — which clears the timeout and sets health 'ok'.
  //
  // v0.29.0 — split off from the script-sync effect above. Keeping it bundled
  // with `[script.id, script.code, script.name]` deps caused the false-positive
  // "Monaco failed to load" overlay reported after every script run: each
  // autosave round-trip mutates `script.code` (backend → pushScripts → new
  // prop), the bundled effect re-ran, reset editorHealth → 'pending', the
  // mount-timeout effect re-ran and scheduled a fresh 15s timer. Monaco
  // doesn't re-mount in that scenario (script.id unchanged → same key), so
  // handleMount never fired again to clear the timer, and ~15s after the
  // most recent autosave the overlay appeared. Most reliably reproduced via
  // handleRun, which calls saveCode synchronously when unsaved=true → forced
  // round-trip every Run.
  useEffect(() => {
    setEditorHealth('pending');
  }, [script.id]);

  // v0.27.5 — Mount-timeout probe (layer 1). If `handleMount` doesn't fire
  // within 15s of the code view being active, Monaco failed to load entirely
  // (network blockage, CSP violation, etc.) and the user is staring at a
  // blank panel with no feedback. 15s is generous — typical mount on a
  // healthy machine is sub-second. We keep this on a generous side because
  // false positives are worse than slow legitimate mounts; the user can
  // always dismiss the overlay.
  useEffect(() => {
    if (viewMode !== 'code')         return;
    if (editorHealth !== 'pending')  return;
    mountTimeoutRef.current = setTimeout(() => {
      setEditorHealth(curr => (curr === 'pending' ? 'mount-timeout' : curr));
    }, 15_000);
    return () => {
      if (mountTimeoutRef.current) {
        clearTimeout(mountTimeoutRef.current);
        mountTimeoutRef.current = null;
      }
    };
  }, [viewMode, editorHealth]);

  // v0.26.x diagnostic + safety net — on unmount, flush any pending autosave.
  // Without this, closing the modal within `autosaveDebounceMs` of the last
  // edit would lose the change (the timer fires after unmount, but its
  // closure references the now-stale saveCode). The pendingValueRef path
  // sends the IPC directly using the latest scriptIdRef + sendToBackendRef.
  useEffect(() => {
    return () => {
      if (saveTimeout.current) {
        clearTimeout(saveTimeout.current);
        saveTimeout.current = null;
      }
      const pending = pendingValueRef.current;
      if (pending !== null) {
        try {
          sendToBackendRef.current({
            type: 'update_script',
            id: scriptIdRef.current,
            patch: { code: pending },
          });
        } catch (err) {
          // Keep the error log — unmount-flush failures are actually
          // actionable for the user (their last edits didn't make it).
          console.error('[LumiScript] ScriptEditor unmount-flush failed:', err);
        }
        pendingValueRef.current = null;
      }
    };
  }, []);  // mount/unmount only — refs hold the latest values

  // Immediately refresh context when a different script is opened.
  useEffect(() => {
    sendToBackend({ type: 'get_active_context' });
  }, [script.id, sendToBackend]);

  // Poll every 2 s while the editor is open so the binding buttons (+char / +chat)
  // reflect the live chat state. The backend resolves the current chat via
  // spindle.chats.getActive(), which returns null when no chat is open.
  useEffect(() => {
    const timer = setInterval(() => {
      sendToBackend({ type: 'get_active_context' });
    }, 2000);
    return () => clearInterval(timer);
  }, [sendToBackend]);

  const saveCode = useCallback((code: string) => {
    sendToBackend({ type: 'update_script', id: script.id, patch: { code } });
    pendingValueRef.current = null;
    setUnsaved(false);
  }, [script.id, sendToBackend]);

  const handleEditorChange = (value?: string) => {
    if (value === undefined) return;
    setLocalCode(value);
    setUnsaved(value !== script.code);
    pendingValueRef.current = value;  // remember latest for unmount-flush
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => saveCode(value), autosaveDebounceMs);
  };

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    // v0.27.5 — handleMount fired, so layer-1 mount succeeded. Clear the
    // 15s mount-timeout guard and mark health 'ok'. Layer-2 (responsiveness
    // probe) is set up below — it kicks in on the user's first mousedown.
    if (mountTimeoutRef.current) {
      clearTimeout(mountTimeoutRef.current);
      mountTimeoutRef.current = null;
    }
    setEditorHealth('ok');

    // ── IntelliSense: register LumiScript ambient types once ─────────────────
    // Runs only on the first editor mount per page session (_defsRegistered flag).
    // The editor uses `javascript` language mode, so only jsDefaults is active.
    // tsDefaults configuration is intentionally omitted — it is unused for JS
    // files and would trigger two additional TypeScript worker re-analysis cycles.
    if (!_defsRegistered) {
      _defsRegistered = true;

      const jsDefaults = monaco.languages.typescript.javascriptDefaults;

      // noSemanticValidation suppresses type-error squiggles so users can write
      // plain JavaScript without type annotations. Syntax errors still show.
      jsDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: [7044, 80001],
      });

      jsDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        allowJs: true,
        checkJs: true,
        noEmit: true,
      });

      // Register the ambient declarations for api, script, z, data, and all
      // public API types. This enables hover docs, autocomplete, and signature
      // help for the entire LumiScript API without any imports in user scripts.
      jsDefaults.addExtraLib(LUMISCRIPT_DEFS, 'ts:lumiverse/lumiscript-api.d.ts');
    }
    // ─────────────────────────────────────────────────────────────────────────

    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
      saveCode(editor.getValue());
    });
    editor.getModel()?.setEOL(monaco.editor.EndOfLineSequence.LF);

    // v0.27.5 — Responsiveness probe (layer 2). Once on the user's first
    // mousedown inside the editor DOM, listen for the corresponding
    // `onDidFocusEditorWidget` event. If focus doesn't fire within 1s,
    // Monaco's input pipeline is broken even though the DOM rendered
    // (the failure mode observed on the affected Firefox/Windows user —
    // see `notes/known-issue-monaco-firefox-windows-init-hang.md`). The
    // capture phase + `{ once: true }` listener self-detaches after the
    // single probe — we don't keep re-checking on every click, the layer-1
    // mount timeout already covered the cold-start case.
    const editorDom = editor.getDomNode();
    if (editorDom) {
      const onFirstMousedown = () => {
        let focused = false;
        const focusDisposable = editor.onDidFocusEditorWidget(() => {
          focused = true;
        });
        setTimeout(() => {
          focusDisposable.dispose();
          if (!focused) {
            setEditorHealth(curr => (curr === 'ok' ? 'unresponsive' : curr));
          }
        }, 1000);
      };
      editorDom.addEventListener('mousedown', onFirstMousedown, { once: true, capture: true });
    }
  };

  const handleRun = () => {
    if (isRunning) return;
    if (saveTimeout.current) { clearTimeout(saveTimeout.current); saveTimeout.current = null; }
    if (unsaved) saveCode(editorRef.current?.getValue() ?? localCode);
    sendToBackend({ type: 'run_script', id: script.id });
  };

  const handleRenameSubmit = () => {
    const trimmed = renameValue.trim();
    if (trimmed && trimmed !== script.name) {
      sendToBackend({ type: 'update_script', id: script.id, patch: { name: trimmed } });
    }
    setRenaming(false);
  };

  const handleBindingAdd = (entry: ScriptBindingEntry) => {
    const current = script.bindings ?? [];
    sendToBackend({ type: 'update_script', id: script.id, patch: { bindings: [...current, entry] } });
  };

  const handleBindingRemove = (index: number) => {
    sendToBackend({
      type: 'update_script', id: script.id,
      patch: { bindings: (script.bindings ?? []).filter((_, i) => i !== index) },
    });
  };

  const handleToggleDangerous = () => {
    if (script.allowDangerous) {
      // Disabling — no confirmation needed.
      sendToBackend({ type: 'update_script', id: script.id, patch: { allowDangerous: false } });
    } else if (confirmDangerous) {
      // Second click inside the confirm bar — user confirmed.
      setConfirmDangerous(false);
      sendToBackend({ type: 'update_script', id: script.id, patch: { allowDangerous: true } });
    } else {
      // First click — show the inline confirmation bar.
      setConfirmDangerous(true);
    }
  };

  const fmt = (ms: number) => new Date(ms).toLocaleString();

  return (
    <>
    <div className="ls-editor-root">
      {/* Top bar */}
      <div className="ls-editor-topbar">
        {renaming ? (
          <input
            className="ls-editor-name-input"
            value={renameValue}
            autoFocus
            onChange={e => setRenameValue(e.target.value)}
            onBlur={handleRenameSubmit}
            onKeyDown={e => {
              if (e.key === 'Enter') handleRenameSubmit();
              if (e.key === 'Escape') { setRenameValue(script.name); setRenaming(false); }
            }}
          />
        ) : (
          <span
            className="ls-editor-name"
            onClick={() => setRenaming(true)}
            title="Click to rename"
            style={{ cursor: 'text' }}
          >
            {script.name}
          </span>
        )}

        {unsaved && <span className="ls-editor-unsaved" title="Unsaved changes" />}

        {/* View mode toggle */}
        <button
          className={`ls-tab-pill${viewMode === 'code' ? ' ls-active' : ''}`}
          onClick={() => setViewMode('code')}
          title="Code editor"
        >
          <Code2 size={10} style={{ display: 'inline', marginRight: 3 }} />
          Code
        </button>
        <button
          className={`ls-tab-pill${viewMode === 'docs' ? ' ls-active' : ''}`}
          onClick={() => setViewMode('docs')}
          title="API reference"
        >
          <BookOpen size={10} style={{ display: 'inline', marginRight: 3 }} />
          Docs
        </button>

        {/* v0.30.x — open the in-app code assistant (persona: Lisa) directly
            from the editor topbar. Cross-root dispatch via window event; the
            modal lives in the SettingsPanel React root. Icon + label matches
            Run's shape (so heights track automatically), but with an accent
            BORDER instead of Run's accent FILL — so Lisa reads as a secondary
            affordance, not a duplicate primary action. The inline `borderColor`
            (vs a base.css class) is deliberate: the host can be flaky about
            reloading the CSS-in-JS bundle on extension toggle, and inline wins
            on specificity. */}
        <button
          type="button"
          className="ls-btn"
          style={{ borderColor: 'var(--lumiverse-accent)' }}
          onClick={() => dispatchOpenAssistant()}
          title="Ask Lisa about LumiScript"
          aria-label="Ask Lisa about LumiScript"
        >
          <MessageCircle size={15} />
          Lisa
        </button>

        {/* v1.0 Phase F — manual "Reload script" affordance. Sends
            `reload_script` IPC; the backend fires the synthetic ls:reload
            event. Always fires (the `@ls:reload-on-edit` directive gates
            only the autosave-driven path — manual reload works
            unconditionally). Trigger-only (libraries have no body to
            re-fire). Icon + label + accent border, matching the Lisa button
            — see its comment for the styling rationale. */}
        {script.type !== 'library' && (
          <button
            type="button"
            className="ls-btn"
            style={{ borderColor: 'var(--lumiverse-accent)' }}
            onClick={() => sendToBackend({ type: 'reload_script', id: script.id })}
            title="Reload script — re-fire the body to refresh handler closures. Works for any enabled trigger script regardless of directives."
            aria-label="Reload script"
          >
            <RotateCcw size={15} />
            Reload
          </button>
        )}

        {script.type !== 'library' && (
          <button className={`ls-btn${isRunning ? '' : ' ls-accent'}`} onClick={handleRun} disabled={isRunning}>
            {isRunning ? <Loader2 size={15} style={{ animation: 'ls-spin 1s linear infinite' }} /> : <Play size={15} />}
            {isRunning ? 'Running…' : 'Run'}
          </button>
        )}
      </div>

      {/* Monaco editor — shown in Code mode */}
      {viewMode === 'code' && (
        <div className="ls-editor-monaco">
          <Editor
            key={script.id}
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={localCode}
            onChange={handleEditorChange}
            onMount={handleMount}
            options={{
              minimap: { enabled: false },
              fontSize: editorFontSize,
              lineNumbers: 'on',
              wordWrap: 'on',
              automaticLayout: true,
              scrollBeyondLastLine: false,
              tabSize: 2,
              insertSpaces: true,
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
              // IntelliSense toggle (editorIntellisense setting): when off,
              // suppress the autocomplete popup, trigger-char suggestions,
              // signature help, and hover docs. Left at Monaco defaults when on;
              // syntax-error squiggles are separate and unaffected. The options
              // object is reactive — @monaco-editor/react applies the change via
              // updateOptions, so toggling takes effect without a remount.
              ...(editorIntellisense ? {} : {
                quickSuggestions: false,
                suggestOnTriggerCharacters: false,
                parameterHints: { enabled: false },
                hover: { enabled: false },
              }),
            }}
          />
          {/* v0.27.5 — Init-failure overlay. Renders over the Monaco area
              when our two-layer init-success probe (mount timeout + first-
              mousedown focus probe) detects that the editor didn't load or
              isn't accepting input. The Monaco DOM stays mounted underneath
              so dismissing the overlay (which sets health back to 'ok')
              gives the user a chance to retry without a full re-render. */}
          {(editorHealth === 'mount-timeout' || editorHealth === 'unresponsive') && (
            <div className="ls-editor-failed-overlay">
              <h3 className="ls-editor-failed-title">
                {editorHealth === 'mount-timeout'
                  ? 'The script editor failed to load.'
                  : "The editor isn't accepting input."}
              </h3>
              <p className="ls-editor-failed-desc">
                {editorHealth === 'mount-timeout'
                  ? 'Monaco did not finish initialising within 15 seconds. This usually means the Monaco CDN is blocked (corporate firewall, browser extension, restrictive network), or the browser environment is preventing the bundle from running.'
                  : 'You clicked into the editor but it did not receive focus within 1 second. This usually means a browser-specific Monaco init failure — most commonly seen on Firefox with corrupted Windows font cache or aggressive security software.'}
              </p>
              <p className="ls-editor-failed-steps-label">Try these steps:</p>
              <ul className="ls-editor-failed-steps">
                <li>Reload the page (Ctrl+R / Cmd+R).</li>
                <li>Try a different browser — Chrome and Edge are generally most reliable.</li>
                {editorHealth === 'unresponsive' && (
                  <>
                    <li>
                      On Firefox + Windows: clear the Windows Font Cache.
                      Open <code>services.msc</code>, stop <em>Windows Font Cache Service</em>,
                      delete <code>C:\Windows\System32\FNTCACHE.DAT</code>, start the service
                      again, then reload the page.
                    </li>
                    <li>
                      Try a fresh Firefox profile via <code>about:profiles</code> to rule
                      out profile-level configuration interference.
                    </li>
                  </>
                )}
                {editorHealth === 'mount-timeout' && (
                  <li>Open the browser console and look for network errors or CSP violations against <code>cdn.jsdelivr.net</code>.</li>
                )}
                <li>
                  Open <strong>LumiScript Settings &rarr; Support &rarr; View Diagnostics</strong> for a runtime
                  state snapshot — there&apos;s a <strong>Copy Report</strong> button that produces a
                  Markdown dump you can paste into Discord support reports.
                </li>
                <li>If none of the above resolves it, please report on Discord with browser + OS details and any console output.</li>
              </ul>
              <button
                className="ls-editor-failed-dismiss"
                onClick={() => setEditorHealth('ok')}
              >
                Dismiss
              </button>
            </div>
          )}
        </div>
      )}

      {/* API reference docs — shown in Docs mode */}
      {viewMode === 'docs' && (
        <div className="ls-editor-docs">
          <ReferenceTab />
        </div>
      )}

      {/* Console — shown in Code mode only */}
      {viewMode === 'code' && (
        <ScriptConsole entries={consoleEntries} isRunning={isRunning} onClear={onClearConsole} />
      )}

      {/* Triggers (trigger scripts only) */}
      {script.type === 'trigger' && (
        <TriggersSection
          scriptId={script.id}
          triggers={script.triggers ?? []}
          sendToBackend={sendToBackend}
        />
      )}

      {/* Bindings (trigger scripts only) */}
      {script.type === 'trigger' && (
        <BindingsSection
          bindings={script.bindings ?? []}
          activeContext={activeContext}
          onAdd={handleBindingAdd}
          onRemove={handleBindingRemove}
        />
      )}

      {/* Inline dangerous-mode confirmation bar (replaces browser confirm dialog) */}
      {confirmDangerous && (
        <div className="ls-danger-confirm">
          <ShieldAlert size={10} />
          <span className="ls-danger-confirm-msg">
            Enable dangerous mode? The script can make HTTP requests and access files.
          </span>
          <button className="ls-danger-confirm-yes" onClick={handleToggleDangerous}>Enable</button>
          <button className="ls-danger-confirm-no" onClick={() => setConfirmDangerous(false)}>Cancel</button>
        </div>
      )}

      {/* Metadata footer */}
      <div className="ls-meta-footer">
        <span className="ls-meta-item">
          <button className="ls-danger-btn" onClick={handleToggleDangerous} title="Toggle dangerous mode">
            {script.allowDangerous
              ? <ShieldAlert size={11} className="ls-dangerous" />
              : <Shield size={11} />}
            <span className={script.allowDangerous ? 'ls-dangerous' : ''}>
              {script.allowDangerous ? 'Dangerous' : 'Safe'}
            </span>
          </button>
        </span>
        <span className="ls-meta-item ls-meta-folder">
          <FolderOpen size={10} />
          <select
            className="ls-folder-select"
            value={script.folder ?? ''}
            onChange={e => {
              const val = e.target.value;
              if (val === '__new__') {
                setNamingFolder(true);
              } else {
                sendToBackend({ type: 'update_script', id: script.id, patch: { folder: val } });
              }
            }}
          >
            <option value="">No folder</option>
            {[...new Set(allScripts.map(s => s.folder).filter((f): f is string => !!f))].sort().map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
            <option value="__new__">+ New folder...</option>
          </select>
        </span>
        <span className="ls-meta-item"><Clock size={10} /><span>Updated {fmt(script.updatedAt)}</span></span>
        <span className="ls-meta-item"><Calendar size={10} /><span>Created {fmt(script.createdAt)}</span></span>
        <span
          className="ls-meta-item ls-meta-id"
          title={script.id}
          onClick={() => {
            navigator.clipboard.writeText(script.id).catch(() => {});
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {copied ? <Check size={10} /> : <Copy size={10} />}
          <span>ID {script.id.slice(0, 8)}</span>
        </span>
      </div>
    </div>

    {namingFolder && (
      <PromptDialog
        title="New folder"
        label="Folder name:"
        confirmLabel="Create"
        onConfirm={name => {
          sendToBackend({ type: 'update_script', id: script.id, patch: { folder: name } });
          setNamingFolder(false);
        }}
        onCancel={() => setNamingFolder(false)}
      />
    )}
    </>
  );
};
