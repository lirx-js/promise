export interface IAbortablePromiseOnAbortCallbackFunction {
  (
    reason: any,
  ): void;
}

export interface IAbortablePromiseOnAbortUnsubscribeFunction {
  (): void;
}

export interface IAbortablePromiseOnAbortFunction {
  (
    callback: IAbortablePromiseOnAbortCallbackFunction,
  ): IAbortablePromiseOnAbortUnsubscribeFunction;
}
