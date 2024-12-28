import type { OkkeError } from './error';
import { err, ok } from './result';
import type {
    InferBrand,
    InferError,
    InferInput,
    Validator,
} from './validator';

export const map =
    <Out1, Out2>(mapping: (out1: Out1) => Out2) =>
    // biome-ignore lint/suspicious/noExplicitAny:
    <V extends Validator<Out1, readonly OkkeError[], unknown, any>>(
        va: V,
    ): Validator<
        Out2,
        readonly InferError<V>[],
        InferBrand<V>,
        InferInput<V>
    > => {
        return (input) => {
            const result = va(input);
            return result.success
                ? ok(mapping(result.value) as Out2 & InferBrand<V>)
                : err(result.error as readonly InferError<V>[]);
        };
    };
