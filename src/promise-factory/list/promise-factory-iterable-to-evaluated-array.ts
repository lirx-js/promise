import { IAbortablePromiseOptions } from '../../abortable/abortable-promise-options.type';
import { IPromise } from '../../promise/instance/promise.trait-collection';
import { IPromiseFactory } from '../promise-factory.type';

export function promiseFactoryIterableToEvaluatedArray<GValue>(
  promiseFactories: Iterable<IPromiseFactory<GValue>>,
  options?: IAbortablePromiseOptions,
): IPromise<GValue>[] {
  return Array.from<IPromiseFactory<GValue>, IPromise<GValue>>(
    promiseFactories,
    (
      factory: IPromiseFactory<GValue>,
    ): IPromise<GValue> => {
      return factory(options);
    },
  );
}
