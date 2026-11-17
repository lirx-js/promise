import { createAbortError, IGenericFunction } from '@lirx/utils';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';

/**
 * @experimental
 * Creates a function with an abortable context.
 * If the incoming signal is in an aborted state when the returned function is called, an AbortError is thrown,
 * else it calls the incoming function and returns its result.
 */
export function createAbortableFunction<GFunction extends IGenericFunction>(
  fnc: GFunction,
  {
    signal,
  }: IAbortablePromiseOptions = {},
): GFunction {
  return (function(
    this: any,
    ...args: Parameters<GFunction>
  ): ReturnType<GFunction> {
    if (signal?.aborted) {
      throw createAbortError({ signal });
    } else {
      return fnc.apply(this, args);
    }
  }) as GFunction;
}
