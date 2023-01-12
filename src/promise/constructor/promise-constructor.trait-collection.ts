import { IPromiseConstructorAllSettledTrait } from './traits/all-settled/promise-constructor-all-settled.trait';
import { IPromiseConstructorAllTrait } from './traits/all/promise-constructor-all.trait';
import { IPromiseConstructorAnyTrait } from './traits/any/promise-constructor-any.trait';
import { IPromiseConstructorNewTrait } from './traits/new/promise-constructor-new.trait';
import { IPromiseConstructorRaceTrait } from './traits/race/promise-constructor-race.trait';
import { IPromiseConstructorRejectTrait } from './traits/reject/promise-constructor-reject.trait';
import { IPromiseConstructorResolveTrait } from './traits/resolve/promise-constructor-resolve.trait';

export interface IPromiseConstructor extends // traits
  IPromiseConstructorNewTrait,
  IPromiseConstructorResolveTrait,
  IPromiseConstructorRejectTrait,
  IPromiseConstructorAllTrait,
  IPromiseConstructorRaceTrait,
  IPromiseConstructorAllSettledTrait,
  IPromiseConstructorAnyTrait
//
{

}
