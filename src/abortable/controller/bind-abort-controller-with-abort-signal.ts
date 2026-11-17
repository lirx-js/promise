import { createEventListener, IRemoveEventListener } from '@lirx/utils';
import { IUnbindAbortController } from './unbind-abort-controller.type';

export function bindAbortControllerWithAbortSignal(
  abortController: AbortController,
  signal: AbortSignal,
): IUnbindAbortController {

  if (signal.aborted) {
    abortController.abort(signal.reason);
    return () => {
    };
  } else {
    let running: boolean = true;

    const end = (): void => {
      if (running) {
        running = false;
        unsubscribeOwnSignal();
        unsubscribeOfAbort();
      }
    };

    const unsubscribeOwnSignal: IRemoveEventListener = createEventListener(abortController.signal, 'abort', end);

    const unsubscribeOfAbort: IRemoveEventListener = createEventListener(signal, 'abort', (): void => {
      end();
      abortController.abort(signal.reason);
    });

    return end;
  }
}
