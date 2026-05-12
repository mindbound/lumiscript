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

import { memo, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
  if (match) {
    const lang = match[1]!;
    const code = String(children ?? '').replace(/\n$/, '');
    return (
      <SyntaxHighlighter
        language={lang}
        style={oneDark}
        PreTag="div"
        customStyle={{
          margin: '8px 0',
          padding: '10px 12px',
          borderRadius: 6,
          fontSize: '12px',
          background: 'rgba(0, 0, 0, 0.42)',
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
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
