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

import { memo, createContext, useContext, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FilePlus } from 'lucide-react';

// ─── Apply-to-script context ─────────────────────────────────────────────────
//
// Lets the assistant modal expose a "create a script from this code block"
// callback to deeply-nested code-block renderers without prop-drilling
// through `memo`'d MarkdownContent (which would break memoisation). When
// the context value is non-null, fenced code blocks render a hover-
// revealed "Apply to script" button in the top-right.
//
// Set to null (or leave at default `null`) when there's no apply target
// (e.g. tool-chip content viewer, error message rendering, future surfaces
// that re-use MarkdownContent outside the assistant modal).

export interface AssistantApplyContextValue {
  /** Called when the user clicks the apply button on a code block. Receives
   *  the raw code text + the fence-language tag (e.g. 'js', 'ts') if known. */
  onApply: (code: string, languageHint: string | undefined) => void;
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

// ─── Code component ──────────────────────────────────────────────────────────

interface CodeBlockProps {
  className?: string;
  children?: ReactNode;
  inline?: boolean;
  [key: string]: unknown;
}

const CodeBlock = ({ className, children, ...rest }: CodeBlockProps) => {
  const match = /language-(\w+)/.exec(className ?? '');
  const apply = useContext(AssistantApplyContext);
  if (match) {
    const lang = match[1]!;
    const code = String(children ?? '').replace(/\n$/, '');
    return (
      // Wrapper sets `position: relative` so the apply button can sit
      // absolutely in the top-right. The block's outer chrome (margin /
      // background / border-radius) is supplied by .ls-asst-md-code-wrap
      // in assistant.css so the absolutely-positioned button doesn't
      // escape its rounded corner.
      <div className="ls-asst-md-code-wrap">
        <SyntaxHighlighter
          language={lang}
          style={oneDark}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: '10px 12px',
            borderRadius: 6,
            fontSize: '12px',
            background: 'rgba(0, 0, 0, 0.42)',
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
        {apply && (
          <button
            type="button"
            className="ls-asst-md-apply"
            onClick={() => apply.onApply(code, lang)}
            title="Apply to script — drop this code into a new LumiScript slot"
            aria-label="Apply to script"
          >
            <FilePlus size={11} />
            <span>Apply</span>
          </button>
        )}
      </div>
    );
  }
  return <code className="ls-asst-md-inline-code" {...rest}>{children}</code>;
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
