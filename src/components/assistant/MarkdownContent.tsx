/**
 * ============================================================================
 * LumiScript Assistant — Markdown Renderer
 * ============================================================================
 * Renders the assistant's chat content as markdown with EDC feature coverage:
 * bold / italic / strikethrough, inline code, fenced code (syntax-highlighted),
 * ordered + unordered lists, GFM tables, links, headings (h1-h4), block
 * quotes, horizontal rules.
 *
 * Memoised by content string so re-renders during streaming are cheap once
 * the throttle layer (~50ms in the modal) settles the input.
 *
 * **Curated syntax-highlighting language set** (Phase F-1 Tier 1):
 *   - JavaScript / TypeScript — primary languages LumiScript users write
 *   - JSON — DTOs, schemas, config payloads
 *   - CSS — DOM-injection styling
 *   - HTML / XML — markup blocks in chat-card surfaces
 *
 * Unknown languages fall through to plain monospace rendering. Adding a
 * language is a single `registerLanguage()` call below.
 *
 * **HTML embedding is OFF** — react-markdown disables raw HTML by default
 * (no `rehype-raw` here on purpose). Keeps the markdown-rendering surface
 * sanitised by construction.
 */

import { memo, createContext, useContext, useState, useRef, useEffect, type FC, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FilePlus, ChevronDown, RefreshCw, Copy, Check } from 'lucide-react';

// ─── Apply-to-script context ─────────────────────────────────────────────────
//
// Lets the assistant modal expose a "create a script from this code block"
// callback to deeply-nested code-block renderers without prop-drilling
// through `memo`'d MarkdownContent (which would break memoisation). When
// the context value is non-null, fenced code blocks render an "Apply to
// script" control in the persistent header bar above the code (alongside the
// language label and Copy button).
//
// Set to null (or leave at default `null`) when there's no apply target
// (e.g. tool-chip content viewer, error message rendering, future surfaces
// that re-use MarkdownContent outside the assistant modal).

export interface AssistantApplyContextValue {
  /** Called when the user picks an apply action on a code block. Receives the
   *  raw code text, the fence-language tag (e.g. 'js', 'ts') if known, and an
   *  optional `targetScriptId` — when set, update that existing script in place
   *  instead of creating a new one. */
  onApply: (code: string, languageHint: string | undefined, targetScriptId?: string) => void;
  /** @-attached scripts offered as "Update «name»" targets in the apply menu.
   *  Empty → the apply button stays a single "create new" action (no menu). */
  attachedScripts: Array<{ id: string; name: string; type: string }>;
}

export const AssistantApplyContext = createContext<AssistantApplyContextValue | null>(null);

// ─── Language registration (one-time module-load) ────────────────────────────

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('ts', typescript);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', markup);
SyntaxHighlighter.registerLanguage('xml', markup);

// ─── Copy-to-clipboard affordance ────────────────────────────────────────────
//
// Reusable across the assistant: code blocks (below) and whole replies
// (MessageBubble). Uses the async Clipboard API when available, with a legacy
// execCommand fallback for webviews that gate `navigator.clipboard`.

async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // fall through to the legacy path
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/**
 * Small copy button with transient "Copied" feedback. `withLabel` shows a
 * "Copy"/"Copied" text label beside the icon (code blocks); without it the
 * button is icon-only (e.g. the message-reply corner).
 */
export const CopyButton: FC<{
  text: string;
  className?: string;
  withLabel?: boolean;
  title?: string;
}> = ({ text, className, withLabel, title }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const onClick = async () => {
    const ok = await copyText(text);
    if (!ok) return;
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 1500);
  };

  const label = title ?? 'Copy';
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      title={copied ? 'Copied' : label}
      aria-label={copied ? 'Copied' : label}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {withLabel && <span>{copied ? 'Copied' : 'Copy'}</span>}
    </button>
  );
};

// ─── Code component ──────────────────────────────────────────────────────────

interface CodeBlockProps {
  className?: string;
  children?: ReactNode;
  inline?: boolean;
  [key: string]: unknown;
}

const CodeBlock = ({ className, children }: CodeBlockProps) => {
  const match = /language-(\w+)/.exec(className ?? '');
  const raw = String(children ?? '');
  // Route to FencedCode both language-tagged fences (via the language- class)
  // and bare ``` fences with no language (no class) — the latter detected by a
  // newline in the content, since markdown gives a fenced block a trailing
  // newline while inline `code` is single-line. This keeps the Copy/Apply
  // toolbar on language-less blocks instead of dropping them to inline pills.
  if (match || raw.includes('\n')) {
    return <FencedCode code={raw.replace(/\n$/, '')} lang={match?.[1] ?? ''} />;
  }
  // Render only className/children — do NOT spread the rest of react-markdown's
  // props onto the DOM node: v10 injects a hast `node` object that React would
  // emit as an unknown attribute (markdown inline code carries no HTML attrs).
  return <code className="ls-asst-md-inline-code">{children}</code>;
};

/**
 * A fenced code block with its apply affordance. Split out from CodeBlock so
 * its hooks (menu open-state + click-away) don't run for every inline `<code>`
 * in the assistant's prose — only for actual fenced blocks.
 *
 * When scripts are @-attached (`apply.attachedScripts`), the Apply button opens
 * a menu offering "Create new script" plus "Update «name»" per attached script
 * (apply-to-existing). With nothing attached it stays a single create button.
 */
const FencedCode = ({ code, lang }: { code: string; lang: string }) => {
  const apply = useContext(AssistantApplyContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Close the apply menu on any click outside it.
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);

  const targets = apply?.attachedScripts ?? [];

  return (
    // The header bar (.ls-asst-md-code-actions) renders ABOVE the highlighter so
    // the Copy / Apply controls live in their own row instead of floating over
    // the code's top-right corner (which overlapped the first line). The bar's
    // rounded top + the highlighter's rounded bottom read as a single block.
    <div className="ls-asst-md-code-wrap">
      <div className="ls-asst-md-code-actions">
        <span className="ls-asst-md-code-lang">{lang || 'code'}</span>
        <div className="ls-asst-md-code-buttons">
        <CopyButton text={code} className="ls-asst-md-copy" withLabel title="Copy code" />
        {apply && (targets.length === 0 ? (
        <button
          type="button"
          className="ls-asst-md-apply"
          onClick={() => apply.onApply(code, lang)}
          title="Apply to script — create a new LumiScript from this code"
          aria-label="Apply — create new script"
        >
          <FilePlus size={11} />
          <span>Apply</span>
        </button>
      ) : (
        <div className="ls-asst-md-apply-wrap" ref={wrapRef}>
          <button
            type="button"
            className="ls-asst-md-apply"
            onClick={() => setMenuOpen((o) => !o)}
            title="Apply this code…"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <FilePlus size={11} />
            <span>Apply</span>
            <ChevronDown size={10} />
          </button>
          {menuOpen && (
            <div className="ls-asst-md-apply-menu" role="menu">
              <button
                type="button"
                role="menuitem"
                className="ls-asst-md-apply-item"
                onClick={() => { setMenuOpen(false); apply.onApply(code, lang); }}
              >
                <FilePlus size={11} />
                <span>Create new script</span>
              </button>
              {targets.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="menuitem"
                  className="ls-asst-md-apply-item"
                  onClick={() => { setMenuOpen(false); apply.onApply(code, lang, t.id); }}
                >
                  <RefreshCw size={11} />
                  <span>Update “{t.name}”</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
        </div>
      </div>
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        PreTag="div"
        customStyle={{
          margin: 0,
          padding: '10px 12px',
          borderRadius: '0 0 6px 6px',
          fontSize: '12px',
          background: 'rgba(0, 0, 0, 0.42)',
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

// ─── Main component ──────────────────────────────────────────────────────────

interface MarkdownContentProps {
  text: string;
}

export const MarkdownContent = memo(({ text }: MarkdownContentProps) => {
  return (
    <div className="ls-asst-md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock as unknown as React.FC,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
});
MarkdownContent.displayName = 'MarkdownContent';
