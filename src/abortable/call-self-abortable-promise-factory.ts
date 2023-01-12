import { isNullish } from '@lirx/utils';
import { IPromiseInitResolveFunction } from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';
import { createAbortControllerFromAbortSignal } from './controller/create-abort-controller-from-abort-signal';
import { createAbortablePromise } from './create-abortable-promise';

export type ICallSelfAbortablePromiseFactoryOptions<GOptions extends IAbortablePromiseOptions = IAbortablePromiseOptions> =
  Omit<GOptions, 'signal'>
  & Required<Pick<GOptions, 'signal'>>
  ;

export interface ICallSelfAbortablePromiseFactory<GValue, GOptions extends IAbortablePromiseOptions = IAbortablePromiseOptions> {
  (
    options: ICallSelfAbortablePromiseFactoryOptions<GOptions>,
  ): IPromise<GValue>;
}

export function callSelfAbortablePromiseFactory<GValue, GOptions extends IAbortablePromiseOptions = IAbortablePromiseOptions>(
  factory: ICallSelfAbortablePromiseFactory<GValue, GOptions>,
  options?: GOptions,
): IPromise<IPromiseValue<GValue>> {
  const controller: AbortController = ((options === void 0) || isNullish(options.signal))
    ? new AbortController()
    : createAbortControllerFromAbortSignal(options.signal);

  return factory({
    ...options,
    signal: controller.signal,
  } as ICallSelfAbortablePromiseFactoryOptions<GOptions>)
    .finally((): void => {
      controller.abort();
    });
}

/*---------*/

export function callAndHandleSelfAbortablePromiseFactory<GValue, GOptions extends IAbortablePromiseOptions = IAbortablePromiseOptions>(
  factory: ICallSelfAbortablePromiseFactory<GValue, GOptions>,
  options?: GOptions,
): IPromise<IPromiseValue<GValue>> {
  return createAbortablePromise<IPromise<GValue>>((
    resolve: IPromiseInitResolveFunction<IPromise<GValue>>,
  ): void => {
    resolve(callSelfAbortablePromiseFactory<GValue, GOptions>(factory, options));
  }, options);
}
