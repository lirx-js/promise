import { createAbortError, isNullish } from '@lirx/utils';
import { createPromise } from '../promise/constructor/implementations/create-promise';
import {
  IPromiseInitRejectFunction,
  IPromiseInitResolveFunction,
} from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';
import { abortSignalToOnAbortFunction } from './on-abort/abort-signal-to-on-abort-function';
import { IAbortablePromiseOnAbortFunction } from './on-abort/abortable-promise-on-abort-function.type';

/** TYPES **/

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


/*
@example

createAbortablePromise<GValue>((
  resolve: IPromiseInitResolveFunction<GValue>,
  reject: IPromiseInitRejectFunction,
  abort$: IAbortablePromiseOnAbortCallbackFunction,
) => {

}, options)

 */
/**
 * Creates a Promise with an abortable context.
 * If the incoming signal is aborted while the returned Promise is still pending, this Promise is rejected with an AbortError,
 * and an "abort" event is sent to the abort$ function.
 * This function is useful to create Promises that can be cancelled.
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

        const _abort = () => {
          _reject(createAbortError({ signal }));
        };

        const abort$ = abortSignalToOnAbortFunction(signal);

        const unsubscribeOfAbort = abort$(_abort);

        try {
          init(_resolve, _reject, abort$);
        } catch (error: unknown) {
          _reject(error);
        }
      }
    }
  })
    // support this special case if _resolve was called with a promise
    .then((value: IPromiseValue<GValue>): IPromiseValue<GValue> => {
      if (signal?.aborted) {
        throw createAbortError({ signal });
      } else {
        return value;
      }
    });
}
