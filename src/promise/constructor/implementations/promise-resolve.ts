import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function promiseResolve(): IPromise<void>;
export function promiseResolve<GValue>(
  input: GValue,
): IPromise<IPromiseValue<GValue>>;
export function promiseResolve<GValue>(
  input?: GValue,
): IPromise<IPromiseValue<GValue>> {
  return PROMISE_CONSTRUCTOR.resolve(input) as IPromise<IPromiseValue<GValue>>;
}
