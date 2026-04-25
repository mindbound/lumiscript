/**
 * ============================================================================
 * STORAGE TAB
 * ============================================================================
 * Landing page for scripts' persisted state. Contains:
 *   - Variables section (four scopes: local / global / chat / character)
 *   - Collections section (api.db collections, admin view across scripts)
 *
 * Both represent persisted-state, unlike the Status tab which surfaces
 * runtime activity (Scripts / Active Tools / Active Injections).
 *
 * State ownership: `variables` and `collections` are owned by the parent
 * LumiScriptPanel and threaded through as props. The parent also
 * dispatches the `list_collections` refresh on tab activation and on
 * every `collections_updated` broadcast hint.
 */

import { type FC } from 'react';
import type { FrontendToBackend, VariablesSnapshot } from '../../types/messages.js';
import type { Script, DbRecord } from '../../types/script.js';
import type { CollectionSummary, CollectionStats } from '../../engine/db-admin.js';
import { VariablesSection } from './VariablesSection.js';
import { CollectionsSection } from './CollectionsSection.js';
import { InspectModal } from './InspectModal.js';
import { DropConfirmDialog } from './DropConfirmDialog.js';

export interface StorageTabProps {
  variables: VariablesSnapshot | null;
  collections: CollectionSummary[] | null;
  scripts: Script[];
  sendToBackend: (msg: FrontendToBackend) => void;
  /** Path of the collection currently being inspected. `null` = no modal. */
  inspectPath: string | null;
  /** Records returned for the open inspect modal. `null` = loading. */
  inspectRecords: DbRecord[] | null;
  /** Post-filter, pre-pagination count for the open modal. */
  inspectTotal: number;
  /** Backend error for the open inspect modal (currently only
   *  jsonquery-mode errors). `null` for normal responses. */
  inspectError: string | null;
  /** Per-field aggregate stats for the open modal — populated on
   *  demand when the user switches to the Stats tab. `null` while
   *  loading or never-requested. */
  inspectStats: CollectionStats | null;
  /** Bumps on every `collections_updated` hint — forces the modal to
   *  re-fetch with its current filter/offset. */
  inspectRefreshToken: number;
  /** Open or close the inspect modal for a given collection path. */
  onInspect: (path: string | null) => void;
  /** The collection the user is about to drop. `null` = no dialog. */
  dropTarget: CollectionSummary | null;
  /** Record count for `dropTarget` — `null` while the count is loading,
   *  `-1` if the backend couldn't read the file, otherwise the number
   *  of records that will be deleted. Drives the dialog's "you're about
   *  to delete N records" line. */
  dropTargetCount: number | null;
  /** Open (with summary) or close (null) the drop confirmation dialog. */
  onDrop: (target: CollectionSummary | null) => void;
  /** Called when the user commits the drop from the dialog. */
  onDropConfirm: () => void;
}

export const StorageTab: FC<StorageTabProps> = ({
  variables,
  collections,
  scripts,
  sendToBackend,
  inspectPath,
  inspectRecords,
  inspectTotal,
  inspectError,
  inspectStats,
  inspectRefreshToken,
  onInspect,
  dropTarget,
  dropTargetCount,
  onDrop,
  onDropConfirm,
}) => {
  return (
    <>
      <div className="ls-storage-list">
        <VariablesSection variables={variables} sendToBackend={sendToBackend} />
        <CollectionsSection
          collections={collections}
          scripts={scripts}
          sendToBackend={sendToBackend}
          onInspect={onInspect}
          onDrop={onDrop}
        />
      </div>
      {inspectPath !== null && (
        <InspectModal
          path={inspectPath}
          /* Look up the summary by path so the modal can surface the
             resolved character / chat name (when applicable) in its
             header. Returns undefined for collections that vanished
             between open + lookup (host raced ahead of UI) — modal
             then falls back to path-only display. */
          summary={collections?.find(c => c.path === inspectPath)}
          records={inspectRecords}
          total={inspectTotal}
          error={inspectError}
          stats={inspectStats}
          refreshToken={inspectRefreshToken}
          onClose={() => onInspect(null)}
          sendToBackend={sendToBackend}
        />
      )}
      {dropTarget !== null && (
        <DropConfirmDialog
          target={dropTarget}
          recordCount={dropTargetCount}
          onConfirm={onDropConfirm}
          onCancel={() => onDrop(null)}
        />
      )}
    </>
  );
};
