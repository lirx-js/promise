import { INullish } from '@lirx/utils';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromise } from '../../promise.trait-collection';
import { IPromiseOnRejected } from '../types/promise-on-rejected.type';

export interface IPromiseCatchFunction<GValue> {
  // none
  (): IPromise<IPromiseValue<GValue>>;

  (
    onRejected: INullish,
  ): IPromise<IPromiseValue<GValue>>;

  // onRejected
  // (
  //   onRejected: IPromiseOnRejected<never>,
  // ): IPromise<IPromiseValue<GValue>>;
  <GRejectedReturn>(
    onRejected: IPromiseOnRejected<GRejectedReturn>,
  ): IPromise<IPromiseValue<GRejectedReturn>>;
}
