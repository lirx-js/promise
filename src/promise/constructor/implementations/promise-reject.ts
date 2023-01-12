import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function promiseReject<GValue = never>(
  reason?: any,
): IPromise<IPromiseValue<GValue>> {
  return PROMISE_CONSTRUCTOR.reject(reason);
}
