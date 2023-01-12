import { isObject } from '@lirx/utils';
import { IPromiseLike } from './promise-like.type';

export function isPromiseLike<GValue>(
  value: unknown,
): value is IPromiseLike<GValue> {
  return isObject(value)
    && (typeof (value as any).then === 'function');
}
