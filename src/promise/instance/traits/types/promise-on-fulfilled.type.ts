import { IPromiseValue } from '../../../promise-value.type';

export interface IPromiseOnFulfilled<GValue, GReturn> {
  (
    value: IPromiseValue<GValue>,
  ): GReturn;
}
