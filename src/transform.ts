import type { AnyError } from './error';
import { err, ok } from './result';
import type {
    InferError,
    InferInput,
    InferOutput,
    Validator,
} from './validator';

export const transform =
    <
        Out2,
        V extends Validator<Out1, E, In>,
        Out1 = InferOutput<V>,
        E extends AnyError = InferError<V>,
        In = InferInput<V>,
    >(
        va: V,
        mapping: (out1: Out1) => Out2,
    ): Validator<Out2, E, In> =>
    (input) => {
        const result = va(input);
        return result.success ? ok(mapping(result.value)) : err(result.error);
    };
