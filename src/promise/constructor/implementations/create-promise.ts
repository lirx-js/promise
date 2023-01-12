import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { IPromiseInitFunction } from '../traits/new/promise-constructor-new.function-definition';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function createPromise<GValue>(
  init: IPromiseInitFunction<GValue>,
): IPromise<IPromiseValue<GValue>> {
  return new PROMISE_CONSTRUCTOR<GValue>(init) as IPromise<IPromiseValue<GValue>>;
}
