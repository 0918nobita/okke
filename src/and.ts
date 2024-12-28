import type { AnyError } from './error';
import { err, ok } from './result';
import type {
    InferError,
    InferInput,
    InferOutput,
    Validator,
} from './validator';

type InferOutputIntersection<Out1, Vas> = Vas extends []
    ? Out1
    : // biome-ignore lint/suspicious/noExplicitAny:
      Vas extends [Validator<infer Out2, AnyError, any>, ...infer Tail]
      ? Out2 & InferOutputIntersection<Out1, Tail>
      : never;

type InferErrorUnion<E1, Vas> = Vas extends []
    ? E1
    : // biome-ignore lint/suspicious/noExplicitAny:
      Vas extends [Validator<unknown, infer E2, any>, ...infer Tail]
      ? E2 | InferErrorUnion<E1, Tail>
      : never;

export const and =
    <
        Va1 extends Validator<Out1, E1, In>,
        Vas extends readonly Validator<unknown, AnyError, In>[],
        Out1 = InferOutput<Va1>,
        E1 extends AnyError = InferError<Va1>,
        In = InferInput<Va1>,
    >(
        va: Va1,
        ...vas: Vas
    ): Validator<
        InferOutputIntersection<Out1, Vas>,
        InferErrorUnion<E1, Vas>,
        In
    > =>
    (input) => {
        const results = [va, ...vas].map((v) => v(input));

        const errors = results
            .filter((res) => res.success === false)
            .flatMap(({ error }) => error as InferErrorUnion<E1, Vas>[]);

        return errors.length === 0
            ? ok(input as InferOutputIntersection<Out1, Vas>)
            : err(errors);
    };
