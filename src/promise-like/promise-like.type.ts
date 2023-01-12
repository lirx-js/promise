import { IPromiseThenTrait } from '../promise/instance/traits/then/promise-then.trait';

export type IPromiseLike<GValue> = IPromiseThenTrait<GValue>;
