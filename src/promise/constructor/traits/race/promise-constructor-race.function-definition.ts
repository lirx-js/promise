import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromiseValuesList } from '../types/promise-values-list.type';

export type IPromiseConstructorRaceValuesListReturn<GValues extends IPromiseValuesList> = IPromiseValue<GValues[number]>;

export interface IPromiseConstructorRaceFunction {
  <GValues extends IPromiseValuesList>(
    values: GValues,
  ): IPromise<IPromiseConstructorRaceValuesListReturn<GValues>>;

  <GValue>(
    values: Iterable<GValue>,
  ): IPromise<IPromiseValue<GValue>>;
}
