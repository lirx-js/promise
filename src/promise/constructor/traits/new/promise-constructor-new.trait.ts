import { IPromise } from '../../../instance/promise.trait-collection';
import { IPromiseValue } from '../../../promise-value.type';
import { IPromiseInitFunction } from './promise-constructor-new.function-definition';

export interface IPromiseConstructorNewTrait {
  new<GValue>(
    init: IPromiseInitFunction<GValue>,
  ): IPromise<IPromiseValue<GValue>>;
}
