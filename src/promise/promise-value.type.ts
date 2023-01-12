export type IPromiseValue<GValue> =
  GValue extends null | undefined
    ? GValue
    : (
      GValue extends (object & { then: (onFulfilled: infer GOnFulfilled, ...args: any[]) => any })
        ? GOnFulfilled extends ((value: infer GNewValue, ...args: any[]) => any)
          ? IPromiseValue<GNewValue>
          : never
        : GValue
      );
