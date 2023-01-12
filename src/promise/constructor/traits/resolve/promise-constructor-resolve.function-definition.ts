import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';

export interface IPromiseConstructorResolveFunction {
  (): IPromise<void>;

  <GValue>(
    input: GValue,
  ): IPromise<IPromiseValue<GValue>>;
}
