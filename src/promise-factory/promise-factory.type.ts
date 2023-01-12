import { IAbortablePromiseOptions } from '../abortable/abortable-promise-options.type';
import { IPromise } from '../promise/instance/promise.trait-collection';

export interface IPromiseFactory<GValue> {
  (
    options?: IAbortablePromiseOptions,
  ): IPromise<GValue>;
}
