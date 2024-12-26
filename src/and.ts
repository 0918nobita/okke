import type { MergeErrors } from './mergeErrors';
import { err, ok } from './result';
import { Validator } from './validator';

type InferErrors<VS extends unknown[]> = VS extends [
    Validator<unknown, infer X>,
    Validator<unknown, infer Y>,
    ...infer Tail,
]
    ? InferErrors<[Validator<unknown, MergeErrors<[X, Y]>>, ...Tail]>
    : VS extends [Validator<unknown, infer X>]
      ? X
      : never;

type InferBrands<VS extends unknown[]> = VS extends [
    Validator<unknown, unknown, infer X>,
    Validator<unknown, unknown, infer Y>,
    ...infer Tail,
]
    ? InferBrands<[Validator<unknown, unknown, X & Y>, ...Tail]>
    : VS extends [Validator<unknown, unknown, infer X>]
      ? X
      : never;

export const and = <
    const V extends Validator<Out, unknown, unknown, In>,
    const VS extends Validator<Out, unknown, unknown, In>[],
    Out,
    In,
>(
    v: V,
    ...vs: VS
): Validator<Out, InferErrors<[V, ...VS]>, InferBrands<[V, ...VS]>, In> => {
    return new Validator((input) => {
        const results = [v, ...vs].map((va) => va.validate(input));
        const errors = results.filter((r) => !r.success).map((r) => r.error);

        return errors.length > 0
            ? err(
                  (errors.length === 1 ? errors[0] : errors) as InferErrors<
                      [V, ...VS]
                  >,
              )
            : ok(input as Out & InferBrands<[V, ...VS]>);
    });
};
