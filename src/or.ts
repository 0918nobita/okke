import type { AnyError } from './error';
import { err, ok } from './result';
import type {
    InferError,
    InferInput,
    InferOutput,
    Validator,
} from './validator';

type InferOutputUnion<Out1, Vas> = Vas extends []
    ? Out1
    : // biome-ignore lint/suspicious/noExplicitAny:
      Vas extends [Validator<infer Out2, AnyError, any>, ...infer Tail]
      ? Out2 | InferOutputUnion<Out1, Tail>
      : never;

type InferLastError<E1, Vas> = Vas extends []
    ? E1
    : // biome-ignore lint/suspicious/noExplicitAny:
      Vas extends [...unknown[], Validator<unknown, infer LastErr, any>]
      ? LastErr
      : never;

export const or =
    <
        Va1 extends Validator<Out1, E1, In>,
        Vas extends readonly Validator<unknown, AnyError, In>[],
        Out1 = InferOutput<Va1>,
        E1 extends AnyError = InferError<Va1>,
        In = InferInput<Va1>,
    >(
        va1: Va1,
        ...vas: Vas
    ): Validator<InferOutputUnion<Out1, Vas>, InferLastError<E1, Vas>, In> =>
    (input) => {
        const result1 = va1(input);
        if (result1.success) {
            return ok(result1.value as InferOutputUnion<Out1, Vas>);
        }

        let error: AnyError[] = [];

        for (const va of vas) {
            const result = va(input);
            if (result.success) {
                return ok(result.value as InferOutputUnion<Out1, Vas>);
            }
            error = result.error;
        }

        return err(error as InferLastError<E1, Vas>[]);
    };
