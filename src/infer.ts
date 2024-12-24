import type { Validator } from './validator';

export type infer<T> = T extends Validator<
    infer Out,
    unknown,
    infer Brands,
    unknown
>
    ? // biome-ignore lint/suspicious/noExplicitAny:
      Out & Brands extends any
        ? { [P in keyof (Out & Brands)]: (Out & Brands)[P] }
        : never
    : never;
