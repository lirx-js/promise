import { IPromiseCatchFunction } from './promise-catch.function-definition';

export interface IPromiseCatchTrait<GValue> {
  catch: IPromiseCatchFunction<GValue>;
}
