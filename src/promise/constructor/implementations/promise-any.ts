import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { IPromiseConstructorAnyValuesListReturn } from '../traits/any/promise-constructor-any.function-definition';
import { IPromiseValuesList } from '../traits/types/promise-values-list.type';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function promiseAny<GValues extends IPromiseValuesList>(
  values: GValues,
): IPromise<IPromiseConstructorAnyValuesListReturn<GValues>>;
export function promiseAny<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>>;
export function promiseAny<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>> {
  return PROMISE_CONSTRUCTOR.any(values);
}
