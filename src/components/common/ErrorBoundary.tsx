import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  /** Human label for the faulting region — shown in the fallback + console log. */
  label: string;
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Class error boundary (audit C10-05). React unmounts the ENTIRE `createRoot`
 * tree when an uncaught render error reaches the root, leaving a blank panel.
 * Wrapping each root (and, where useful, each major tab/feature) in a boundary
 * degrades a fault to a localized fallback instead of a blank dock / settings
 * panel — and surfaces the error to the host console for debugging.
 *
 * Colors are hard-coded rather than `--lumiverse-*` tokens so the fallback still
 * renders if the faulting subtree was what set up the themed surface.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  override componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(`[LumiScript] ${this.props.label} crashed:`, error, info.componentStack);
  }

  override render(): ReactNode {
    const { error } = this.state;
    if (error !== null) {
      return (
        <div style={{ padding: 16, color: 'rgb(214, 158, 46)', fontSize: 13, lineHeight: 1.5 }}>
          <strong>{this.props.label} hit an error.</strong>
          <div style={{ marginTop: 6, opacity: 0.85, wordBreak: 'break-word' }}>{error.message}</div>
          <div style={{ marginTop: 8, opacity: 0.6, fontSize: 11 }}>
            Reopen the panel or reload Lumiverse to retry.
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
