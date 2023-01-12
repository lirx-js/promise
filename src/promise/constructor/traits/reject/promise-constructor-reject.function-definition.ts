import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';

export interface IPromiseConstructorRejectFunction {
  <GValue = never>(
    reason?: any,
  ): IPromise<IPromiseValue<GValue>>;
}

