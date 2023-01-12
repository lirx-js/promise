import { createPromise } from '../promise/constructor/implementations/create-promise';
import {
  IPromiseInitRejectFunction,
  IPromiseInitResolveFunction,
} from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';
import { IDeferredPromise } from './deferred-promise.type';

export function createDeferredPromise<GValue>(): IDeferredPromise<GValue> {
  let resolve!: IPromiseInitResolveFunction<GValue>;
  let reject!: IPromiseInitRejectFunction;

  const promise: IPromise<IPromiseValue<GValue>> = createPromise<GValue>((
    _resolve: IPromiseInitResolveFunction<GValue>,
    _reject: IPromiseInitRejectFunction,
  ): void => {
    resolve = _resolve;
    reject = _reject;
  });

  return {
    promise,
    resolve,
    reject,
  };
}
