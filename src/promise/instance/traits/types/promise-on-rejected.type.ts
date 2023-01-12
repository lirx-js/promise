export interface IPromiseOnRejected<GReturn> {
  (
    error: unknown,
  ): GReturn;
}

