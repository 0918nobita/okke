import type { AnyError } from './error';
import { err } from './result';
import type {
    InferError,
    InferInput,
    InferOutput,
    Validator,
} from './validator';

export const andThen =
    <
        Va1 extends Validator<Out1, E1, In>,
        Va2 extends Validator<Out2, E2, Out1>,
        Out1 = InferOutput<Va1>,
        Out2 = InferOutput<Va2>,
        E1 extends AnyError = InferError<Va1>,
        E2 extends AnyError = InferError<Va2>,
        In = InferInput<Va1>,
    >(
        va1: Va1,
        va2: Va2,
    ): Validator<Out2, E1 | E2, In> =>
    (input) => {
        const result1 = va1(input);
        return !result1.success ? err(result1.error) : va2(result1.value);
    };
