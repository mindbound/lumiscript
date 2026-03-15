/**
 * ============================================================================
 * LUMISCRIPT — EXECUTION STATUS STORE
 * ============================================================================
 * Per-script execution state: idle / running / success / error.
 * Maintained in memory; sent to the frontend via BackendToFrontend messages.
 */

export type ExecutionStatus = 'idle' | 'running' | 'success' | 'error';

export interface ExecutionStatusEntry {
  status: ExecutionStatus;
  duration?: number;    // ms — only set after completion
  errorMessage?: string;
}

export class ExecutionStatusStore {
  private statuses: Map<string, ExecutionStatusEntry> = new Map();

  markRunning(scriptId: string): void {
    this.statuses.set(scriptId, { status: 'running' });
  }

  markSuccess(scriptId: string, duration: number): void {
    this.statuses.set(scriptId, { status: 'success', duration });
  }

  markError(scriptId: string, duration: number, errorMessage: string): void {
    this.statuses.set(scriptId, { status: 'error', duration, errorMessage });
  }

  markIdle(scriptId: string): void {
    this.statuses.delete(scriptId);
  }

  getStatus(scriptId: string): ExecutionStatusEntry {
    return this.statuses.get(scriptId) ?? { status: 'idle' };
  }

  getAll(): ReadonlyMap<string, ExecutionStatusEntry> {
    return this.statuses;
  }

  clear(): void {
    this.statuses.clear();
  }
}

/** Module singleton */
export const executionStatusStore = new ExecutionStatusStore();
