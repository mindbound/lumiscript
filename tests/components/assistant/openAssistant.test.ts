/**
 * Unit test for `src/components/assistant/openAssistant.ts` — the cross-root
 * window-event bus used to open the Lisa modal from either React root.
 */
import { describe, test, expect, mock } from 'bun:test';
import { useDOM } from '../../_infra/dom-env.js';
import { dispatchOpenAssistant, LS_OPEN_ASSISTANT_EVENT } from '../../../src/components/assistant/openAssistant.js';

useDOM();

describe('dispatchOpenAssistant', () => {
  test('dispatches the ls:open-assistant window event', () => {
    const listener = mock(() => {});
    window.addEventListener(LS_OPEN_ASSISTANT_EVENT, listener);
    dispatchOpenAssistant();
    window.removeEventListener(LS_OPEN_ASSISTANT_EVENT, listener);
    expect(listener).toHaveBeenCalledTimes(1);
  });

  test('exports the canonical event name', () => {
    expect(LS_OPEN_ASSISTANT_EVENT).toBe('ls:open-assistant');
  });
});
