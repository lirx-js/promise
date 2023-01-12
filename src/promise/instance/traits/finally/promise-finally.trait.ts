import { IPromiseFinallyFunction } from './promise-finally.function-definition';

export interface IPromiseFinallyTrait<GValue> {
  finally: IPromiseFinallyFunction<GValue>;
}
