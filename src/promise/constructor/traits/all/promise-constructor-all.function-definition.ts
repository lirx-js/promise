import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromiseValuesList } from '../types/promise-values-list.type';

export type IPromiseConstructorAllValuesListReturn<GValues extends IPromiseValuesList> = {
  -readonly [P in keyof GValues]: IPromiseValue<GValues[P]>;
};

export interface IPromiseConstructorAllFunction {
  <GValues extends IPromiseValuesList>(
    values: GValues,
  ): IPromise<IPromiseConstructorAllValuesListReturn<GValues>>;

  <GValue>(
    values: Iterable<GValue>,
  ): IPromise<IPromiseValue<GValue>[]>;
}
