import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromiseValuesList } from '../types/promise-values-list.type';

export type IPromiseConstructorAnyValuesListReturn<GValues extends IPromiseValuesList> = IPromiseValue<GValues[number]>;

export interface IPromiseConstructorAnyFunction {
  <GValues extends IPromiseValuesList>(
    values: GValues,
  ): IPromise<IPromiseConstructorAnyValuesListReturn<GValues>>;

  <GValue>(
    values: Iterable<GValue>,
  ): IPromise<IPromiseValue<GValue>>;
}
