import { createEventListener } from '@lirx/utils';
import {
  IAbortablePromiseOnAbortCallbackFunction,
  IAbortablePromiseOnAbortFunction,
  IAbortablePromiseOnAbortUnsubscribeFunction,
} from './abortable-promise-on-abort-function.type';

export function abortSignalToOnAbortFunction(
  signal: AbortSignal,
): IAbortablePromiseOnAbortFunction {
  return (
    callback: IAbortablePromiseOnAbortCallbackFunction,
  ): IAbortablePromiseOnAbortUnsubscribeFunction => {
    if (signal.aborted) {
      callback(signal.reason);
      return () => {
      };
    } else {
      return createEventListener<'abort', Event>(
        signal,
        'abort',
        (): void => {
          callback(signal.reason);
        },
        { once: true },
      );
    }
  };
}
