import { IAbortablePromiseOnAbortFunction } from './abortable-promise-on-abort-function.type';

export function onAbortFunctionToAbortSignal(
  abort$: IAbortablePromiseOnAbortFunction,
): AbortSignal {
  const controller: AbortController = new AbortController();

  const end = abort$((reason: any): void => {
    controller.abort(reason);
    end();
  });

  return controller.signal;
}
