import { bindAbortControllerWithAbortSignal } from './bind-abort-controller-with-abort-signal';

export function createAbortControllerFromAbortSignal(
  signal: AbortSignal,
): AbortController {
  const abortController: AbortController = new AbortController();
  bindAbortControllerWithAbortSignal(abortController, signal);
  return abortController;
}
