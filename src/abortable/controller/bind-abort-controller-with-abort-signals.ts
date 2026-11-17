import { createEventListener, IRemoveEventListener } from '@lirx/utils';
import { IUnbindAbortController } from './unbind-abort-controller.type';

/**
 * The provided AbortController will be aborted if/when one of the 'signals' is aborted
 */
export function bindAbortControllerFromAbortSignals(
  abortController: AbortController,
  signals: Iterable<AbortSignal>,
): IUnbindAbortController {

  const _signals: readonly AbortSignal[] = Array.isArray(signals)
    ? signals
    : Array.from(signals);

  for (let i = 0, l = _signals.length; i < l; i++) {
    const signal: AbortSignal = _signals[i];
    if (signal.aborted) {
      abortController.abort(signal.reason);
      return () => {
      };
    }
  }

  /* no signal aborted yet */

  let running: boolean = true;

  const end = (): void => {
    if (running) {
      running = false;
      for (let i = 0, l = unsubscribeSignalList.length; i < l; i++) {
        unsubscribeSignalList[i]();
      }
      unsubscribeOwnSignal();
    }
  };

  // in the case of our abortController.signal is aborted, it's no more required to listen to 'abort' from input 'signals'
  const unsubscribeOwnSignal: IRemoveEventListener = createEventListener(abortController.signal, 'abort', end);

  const unsubscribeSignalList: IRemoveEventListener[] = _signals.map((signal: AbortSignal): IRemoveEventListener => {
    return createEventListener(signal, 'abort', (): void => {
      end();
      abortController.abort(signal.reason);
    });
  });

  return end;
}

