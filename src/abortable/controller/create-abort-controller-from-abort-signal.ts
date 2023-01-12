import { createEventListener, IRemoveEventListener } from '@lirx/utils';

export function createAbortControllerFromAbortSignal(
  signal: AbortSignal,
): AbortController {
  const abortController: AbortController = new AbortController();

  if (signal.aborted) {
    abortController.abort(signal.reason);
  } else {
    const end = (): void => {
      unsubscribeOwnSignal();
      unsubscribeOfAbort();
    };

    const unsubscribeOwnSignal: IRemoveEventListener = createEventListener(abortController.signal, 'abort', end);

    const unsubscribeOfAbort: IRemoveEventListener = createEventListener(signal, 'abort', (): void => {
      end();
      abortController.abort(signal.reason);
    });
  }

  return abortController;
}
