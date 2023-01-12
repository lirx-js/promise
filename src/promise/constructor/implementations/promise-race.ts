import { IPromise } from '../../instance/promise.trait-collection';
import { IPromiseValue } from '../../promise-value.type';
import { IPromiseConstructorRaceValuesListReturn } from '../traits/race/promise-constructor-race.function-definition';
import { IPromiseValuesList } from '../traits/types/promise-values-list.type';
import { PROMISE_CONSTRUCTOR } from './promise-constructor.constant';

export function promiseRace<GValues extends IPromiseValuesList>(
  values: GValues,
): IPromise<IPromiseConstructorRaceValuesListReturn<GValues>>;
export function promiseRace<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>>;
export function promiseRace<GValue>(
  values: Iterable<GValue>,
): IPromise<IPromiseValue<GValue>> {
  return PROMISE_CONSTRUCTOR.race(values);
}
