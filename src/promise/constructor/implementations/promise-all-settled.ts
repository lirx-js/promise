import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { IPromiseConstructorAllSettledValuesListReturn } from '../traits/all-settled/promise-constructor-all-settled.function-definition';
import { IPromiseValuesList } from '../traits/types/promise-values-list.type';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function promiseAllSettled<GValues extends IPromiseValuesList>(
  values: GValues,
): IPromise<IPromiseConstructorAllSettledValuesListReturn<GValues>>;
export function promiseAllSettled<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>[]>;
export function promiseAllSettled<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>[]> {
  return PROMISE_CONSTRUCTOR.allSettled(values);
}
