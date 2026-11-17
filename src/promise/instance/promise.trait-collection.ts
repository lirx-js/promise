import { IPromiseCatchTrait } from './traits/catch/promise-catch.trait';
import { IPromiseFinallyTrait } from './traits/finally/promise-finally.trait';
import { IPromiseSymbolToStringTagTrait } from './traits/symbol-to-string-tag/promise-symbol-to-string-tag.trait';
import { IPromiseThenTrait } from './traits/then/promise-then.trait';

export interface IPromise<GValue> extends // traits
  IPromiseThenTrait<GValue>,
  IPromiseCatchTrait<GValue>,
  IPromiseFinallyTrait<GValue>,
  IPromiseSymbolToStringTagTrait
//
{

}
