import { IPromiseValue } from '../../promise-value.type';
import { IPromise } from '../promise.trait-collection';

export function promise<GValue>(
  promise: Promise<GValue>,
): IPromise<IPromiseValue<GValue>> {
  return promise as IPromise<IPromiseValue<GValue>>;
}
