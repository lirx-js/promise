import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';

export interface IPromiseInitResolveFunction<GValue> {
  (
    value: GValue,
  ): void;
}

export interface IPromiseInitRejectFunction {
  (
    reason?: any,
  ): void;
}

export interface IPromiseInitFunction<GValue> {
  (
    resolve: IPromiseInitResolveFunction<GValue>,
    reject: IPromiseInitRejectFunction,
  ): void;
}

export interface IPromiseConstructorNewFunction {
  <GValue>(
    init: IPromiseInitFunction<GValue>,
  ): IPromise<IPromiseValue<GValue>>;
}
