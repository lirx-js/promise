import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { IPromiseConstructorAllValuesListReturn } from '../traits/all/promise-constructor-all.function-definition';
import { IPromiseValuesList } from '../traits/types/promise-values-list.type';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function promiseAll<GValues extends IPromiseValuesList>(
  values: GValues,
): IPromise<IPromiseConstructorAllValuesListReturn<GValues>>;
export function promiseAll<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>[]>;
export function promiseAll<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>[]> {
  return PROMISE_CONSTRUCTOR.all(values);
}
