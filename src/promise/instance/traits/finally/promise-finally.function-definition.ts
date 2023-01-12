import { INullish } from '@lirx/utils';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromise } from '../../promise.trait-collection';
import { IPromiseOnFinally } from '../types/promise-on-finally.type';

export interface IPromiseFinallyFunction<GValue> {
  // none
  (): IPromise<IPromiseValue<GValue>>;

  (
    onFinally: INullish,
  ): IPromise<IPromiseValue<GValue>>;

  // onFinally
  (
    onFinally: IPromiseOnFinally,
  ): IPromise<IPromiseValue<GValue>>;
}


