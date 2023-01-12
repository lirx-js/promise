import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromiseValuesList } from '../types/promise-values-list.type';

export interface IPromiseFulfilledResult<GValue> {
  status: 'fulfilled';
  value: GValue;
}

export interface IPromiseRejectedResult {
  status: 'rejected';
  reason: any;
}

export type IPromiseSettledResult<GValue> =
  | IPromiseFulfilledResult<GValue>
  | IPromiseRejectedResult
  ;

export type IPromiseConstructorAllSettledValuesListReturn<GValues extends IPromiseValuesList> = {
  -readonly [P in keyof GValues]: IPromiseSettledResult<IPromiseValue<GValues[P]>>;
};

export interface IPromiseConstructorAllSettledFunction {
  <GValues extends IPromiseValuesList>(
    values: GValues,
  ): IPromise<IPromiseConstructorAllSettledValuesListReturn<GValues>>;

  <GValue>(
    values: Iterable<GValue>,
  ): IPromise<IPromiseValue<GValue>[]>;
}
