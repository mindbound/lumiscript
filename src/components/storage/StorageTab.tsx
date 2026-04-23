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
import type { CollectionSummary } from '../../engine/db-admin.js';
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
  /** Bumps on every `collections_updated` hint — forces the modal to
   *  re-fetch with its current filter/offset. */
  inspectRefreshToken: number;
  /** Open or close the inspect modal for a given collection path. */
  onInspect: (path: string | null) => void;
  /** The collection the user is about to drop. `null` = no dialog. */
  dropTarget: CollectionSummary | null;
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
  inspectRefreshToken,
  onInspect,
  dropTarget,
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
          records={inspectRecords}
          total={inspectTotal}
          refreshToken={inspectRefreshToken}
          onClose={() => onInspect(null)}
          sendToBackend={sendToBackend}
        />
      )}
      {dropTarget !== null && (
        <DropConfirmDialog
          target={dropTarget}
          onConfirm={onDropConfirm}
          onCancel={() => onDrop(null)}
        />
      )}
    </>
  );
};
