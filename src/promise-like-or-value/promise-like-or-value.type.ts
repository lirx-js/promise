import { IPromiseLike } from '../promise-like/promise-like.type';

export type IPromiseLikeOrValue<GValue> =
  | IPromiseLike<GValue>
  | GValue;
