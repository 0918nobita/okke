export type MergeErrors<Errs> = Errs extends [infer X, infer Y, ...infer Tail]
    ? MergeErrors<[X | Y, ...Tail]>
    : Errs extends [infer Y]
      ? Y | Y[]
      : never;
