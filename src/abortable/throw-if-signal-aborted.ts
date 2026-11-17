import { createAbortError } from '@lirx/utils';

export function throwIfSignalAborted(
  signal: AbortSignal,
) {
  if (signal.aborted) {
    throw createAbortError({ signal });
  }
}
