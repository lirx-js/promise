import { IPromiseThenFunction } from './promise-then.function-definition';

export interface IPromiseThenTrait<GValue> {
  then: IPromiseThenFunction<GValue>;
}
