import { createAbortControllerFromAbortSignals } from './create-abort-controller-from-abort-signals';

export function createAbortSignalFromAbortSignals(
  signals: Iterable<AbortSignal>,
): AbortSignal | undefined {

  const _signals: readonly AbortSignal[] = Array.isArray(signals)
    ? signals
    : Array.from(signals);

  if (_signals.length === 0) {
    return void 0;
  } else if (_signals.length === 1) {
    return _signals[0];
  } else {
    return createAbortControllerFromAbortSignals(_signals).signal;
  }
}
