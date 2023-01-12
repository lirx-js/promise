import { INullish } from '@lirx/utils';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromise } from '../../promise.trait-collection';
import { IPromiseOnFulfilled } from '../types/promise-on-fulfilled.type';
import { IPromiseOnRejected } from '../types/promise-on-rejected.type';

export interface IPromiseThenFunction<GValue> {
  // none
  (): IPromise<IPromiseValue<GValue>>;

  (
    onFulfilled: INullish,
  ): IPromise<IPromiseValue<GValue>>;

  (
    onFulfilled: INullish,
    onRejected: INullish,
  ): IPromise<IPromiseValue<GValue>>;

  // onFulfilled only
  // (
  //   onFulfilled: IPromiseOnFulfilled<GValue, never>,
  // ): IPromise<IPromiseValue<GValue>>;
  <GFulfilledReturn>(
    onFulfilled: IPromiseOnFulfilled<GValue, GFulfilledReturn>,
  ): IPromise<IPromiseValue<GFulfilledReturn>>;

  <GFulfilledReturn, GRejectedReturn>(
    onFulfilled: IPromiseOnFulfilled<GValue, GFulfilledReturn>,
    onRejected: INullish,
  ): IPromise<IPromiseValue<GFulfilledReturn>>;

  // onRejected only
  // (
  //   onFulfilled: INullish,
  //   onRejected: IPromiseOnRejected<never>,
  // ): IPromise<IPromiseValue<GValue>>;
  <GRejectedReturn>(
    onFulfilled: INullish,
    onRejected: IPromiseOnRejected<GRejectedReturn>,
  ): IPromise<IPromiseValue<GRejectedReturn>>;

  // both
  // <GRejectedReturn>(
  //   onFulfilled: IPromiseOnFulfilled<GValue, never>,
  //   onRejected: IPromiseOnRejected<never>,
  // ): IPromise<IPromiseValue<GValue>>;
  // <GRejectedReturn>(
  //   onFulfilled: IPromiseOnFulfilled<GValue, never>,
  //   onRejected: IPromiseOnRejected<GRejectedReturn>,
  // ): IPromise<IPromiseValue<GRejectedReturn>>;
  <GFulfilledReturn, GRejectedReturn>(
    onFulfilled: IPromiseOnFulfilled<GValue, GFulfilledReturn>,
    onRejected: IPromiseOnRejected<GRejectedReturn>,
  ): IPromise<IPromiseValue<GFulfilledReturn | GRejectedReturn>>;
}
