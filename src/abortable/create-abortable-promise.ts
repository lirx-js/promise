import { createEventListener, createAbortError, isNullish } from '@lirx/utils';
import { createPromise } from '../promise/constructor/implementations/create-promise';
import {
  IPromiseInitRejectFunction,
  IPromiseInitResolveFunction,
} from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';

/** TYPES **/

export interface IAbortablePromiseOnAbortCallbackFunction {
  (
    event: Event,
  ): void;
}

export interface IAbortablePromiseOnAbortUnsubscribeFunction {
  (): void;
}

export interface IAbortablePromiseOnAbortFunction {
  (
    callback: IAbortablePromiseOnAbortCallbackFunction,
  ): IAbortablePromiseOnAbortUnsubscribeFunction;
}

export interface ICreateAbortablePromiseInitFunction<GValue> {
  (
    resolve: IPromiseInitResolveFunction<GValue>,
    reject: IPromiseInitRejectFunction,
    abort$: IAbortablePromiseOnAbortFunction,
  ): void;
}

/** FUNCTION **/

const empty = () => (() => {
});

/**
 * Creates a Promise with an abortable context
 */
export function createAbortablePromise<GValue>(
  init: ICreateAbortablePromiseInitFunction<GValue>,
  {
    signal,
  }: IAbortablePromiseOptions = {},
): IPromise<IPromiseValue<GValue>> {
  return createPromise<GValue>((
    resolve: IPromiseInitResolveFunction<GValue>,
    reject: IPromiseInitRejectFunction,
  ): void => {
    if (signal?.aborted) {
      reject(createAbortError({ signal }));
    } else {
      if (isNullish(signal)) {
        init(resolve, reject, empty);
      } else {
        const end = () => {
          unsubscribeOfAbort();
        };

        const _resolve = (
          value: GValue,
        ): void => {
          end();
          resolve(value);
        };

        const _reject = (
          reason?: any,
        ): void => {
          end();
          reject(reason);
        };

        const onAbort = () => {
          _reject(createAbortError({ signal }));
        };

        const abort$ = (
          callback: IAbortablePromiseOnAbortCallbackFunction,
        ): IAbortablePromiseOnAbortUnsubscribeFunction => {
          return createEventListener<'abort', Event>(
            signal,
            'abort',
            callback,
            { once: true },
          );
        };

        const unsubscribeOfAbort = abort$(onAbort);

        try {
          init(_resolve, _reject, abort$);
        } catch (error: unknown) {
          _reject(error);
        }
      }
    }
  });
}
