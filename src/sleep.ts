import { IAbortTimer, createTimeout } from '@lirx/utils';
import { IAbortablePromiseOptions } from './abortable/abortable-promise-options.type';
import {
  createAbortablePromise,
  IAbortablePromiseOnAbortFunction,
  IAbortablePromiseOnAbortUnsubscribeFunction,
} from './abortable/create-abortable-promise';
import {
  IPromiseInitRejectFunction,
  IPromiseInitResolveFunction,
} from './promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from './promise/instance/promise.trait-collection';

export interface ISleepOptions extends IAbortablePromiseOptions {
}

export function sleep(
  duration: number,
  options?: ISleepOptions,
): IPromise<void> {
  return createAbortablePromise<void>((
    resolve: IPromiseInitResolveFunction<void>,
    reject: IPromiseInitRejectFunction,
    abort$: IAbortablePromiseOnAbortFunction,
  ): void => {
    const end = (): void => {
      unsubscribeOfTimeout();
      unsubscribeOfAbort();
    };

    const unsubscribeOfTimeout: IAbortTimer = createTimeout(() => {
      end();
      resolve();
    }, duration);

    const unsubscribeOfAbort: IAbortablePromiseOnAbortUnsubscribeFunction = abort$(end);
  }, options);
}
