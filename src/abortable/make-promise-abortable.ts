import { IPromiseInitResolveFunction } from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';
import { createAbortablePromise } from './create-abortable-promise';

/**
 * Use only if you cannot use createAbortablePromise
 * @see createAbortablePromise
 */
export function makePromiseAbortable<GValue>(
  promise: IPromise<GValue>,
  options?: IAbortablePromiseOptions,
): IPromise<IPromiseValue<GValue>> {
  return createAbortablePromise<IPromise<GValue>>((
    resolve: IPromiseInitResolveFunction<IPromise<GValue>>,
  ): void => {
    resolve(promise);
  }, options);
}
