import {
  IPromiseInitRejectFunction,
  IPromiseInitResolveFunction,
} from '../promise/constructor/traits/new/promise-constructor-new.function-definition';
import { IPromise } from '../promise/instance/promise.trait-collection';
import { IPromiseValue } from '../promise/promise-value.type';

export interface IDeferredPromise<GValue> {
  readonly promise: IPromise<IPromiseValue<GValue>>;
  readonly resolve: IPromiseInitResolveFunction<GValue>;
  readonly reject: IPromiseInitRejectFunction;
}
