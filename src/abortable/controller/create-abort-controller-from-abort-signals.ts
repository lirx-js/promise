import { createEventListener, IRemoveEventListener } from '@lirx/utils';

/**
 * Creates an AbortController which will be aborted if/when one of the 'signals' is aborted
 */
export function createAbortControllerFromAbortSignals(
  signals: Iterable<AbortSignal>,
): AbortController {
  const abortController: AbortController = new AbortController();

  const _signals: readonly AbortSignal[] = Array.isArray(signals)
    ? signals
    : Array.from(signals);

  for (let i = 0, l = _signals.length; i < l; i++) {
    const signal: AbortSignal = _signals[i];
    if (signal.aborted) {
      abortController.abort(signal.reason);
      return abortController;
    }
  }

  /* no signal aborted yet */

  const end = (): void => {
    for (let i = 0, l = unsubscribeSignalList.length; i < l; i++) {
      unsubscribeSignalList[i]();
    }
    unsubscribeOwnSignal();
  };

  // in the case of our abortController.signal is aborted, it's no more required to listen to 'abort' from input 'signals'
  const unsubscribeOwnSignal: IRemoveEventListener = createEventListener(abortController.signal, 'abort', end);

  const unsubscribeSignalList: IRemoveEventListener[] = _signals.map((signal: AbortSignal): IRemoveEventListener => {
    return createEventListener(signal, 'abort', (): void => {
      end();
      abortController.abort(signal.reason);
    });
  });

  return abortController;
}


