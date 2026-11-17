import { bindAbortControllerFromAbortSignals } from './bind-abort-controller-with-abort-signals';

/**
 * Creates an AbortController which will be aborted if/when one of the 'signals' is aborted
 */
export function createAbortControllerFromAbortSignals(
  signals: Iterable<AbortSignal>,
): AbortController {
  const abortController: AbortController = new AbortController();
  bindAbortControllerFromAbortSignals(abortController, signals);
  return abortController;
}

