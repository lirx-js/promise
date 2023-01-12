import { createAbortError, IGenericFunction } from '@lirx/utils';
import { IAbortablePromiseOptions } from './abortable-promise-options.type';

/**
 * Creates a function with an abortable context
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
    return signal?.aborted
      ? createAbortError({ signal })
      : fnc.apply(this, args);
  }) as GFunction;
}
