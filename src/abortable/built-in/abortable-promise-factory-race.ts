import { IGenericPromiseFactoriesList } from '../../promise-factory/list/promise-factories-list.type';
import { promiseFactoryIterableToEvaluatedArray } from '../../promise-factory/list/promise-factory-iterable-to-evaluated-array';
import { IPromiseFactory } from '../../promise-factory/promise-factory.type';
import { promiseRace } from '../../promise/constructor/implementations/promise-race';
import { IPromise } from '../../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../../promise/promise-value.type';
import { IAbortablePromiseOptions } from '../abortable-promise-options.type';
import { callAndHandleSelfAbortablePromiseFactory, ICallSelfAbortablePromiseFactoryOptions } from '../call-self-abortable-promise-factory';

export type IAbortablePromiseFactoryRaceFactoriesListReturn<GItems extends IGenericPromiseFactoriesList> = {
  [P in keyof GItems]: IPromiseValue<ReturnType<GItems[P]>>;
}[number];

export function abortablePromiseFactoryRace<GItems extends IGenericPromiseFactoriesList>(
  promiseFactories: GItems,
  options?: IAbortablePromiseOptions,
): IPromise<IAbortablePromiseFactoryRaceFactoriesListReturn<GItems>>;
export function abortablePromiseFactoryRace<GValue>(
  promiseFactories: Iterable<IPromiseFactory<GValue>>,
  options?: IAbortablePromiseOptions,
): IPromise<IPromiseValue<GValue>>;
export function abortablePromiseFactoryRace<GValue>(
  promiseFactories: Iterable<IPromiseFactory<GValue>>,
  options?: IAbortablePromiseOptions,
): IPromise<IPromiseValue<GValue>> {
  return callAndHandleSelfAbortablePromiseFactory<IPromiseValue<GValue>>((
    options: ICallSelfAbortablePromiseFactoryOptions,
  ): IPromise<IPromiseValue<GValue>> => {
    return promiseRace<IPromise<GValue>>(
      promiseFactoryIterableToEvaluatedArray<GValue>(promiseFactories, options),
    );
  }, options);
}
