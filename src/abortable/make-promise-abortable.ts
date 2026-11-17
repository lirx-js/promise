import { IPromiseInitResolveFunction } from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';
import { createAbortablePromise } from './create-abortable-promise';

export interface IMakePromiseAbortableFactory<GPromise> {
  (
    options?: IAbortablePromiseOptions,
  ): GPromise;
}

/**
 * Prefer to use createAbortablePromise when possible
 * @see createAbortablePromise
 */
export function makePromiseAbortable<GPromise>(
  promiseFactory: IMakePromiseAbortableFactory<GPromise>,
  options?: IAbortablePromiseOptions,
): IPromise<IPromiseValue<GPromise>> {
  return createAbortablePromise<GPromise>((
    resolve: IPromiseInitResolveFunction<GPromise>,
  ): void => {
    resolve(promiseFactory(options));
  }, options);
}
