import type { OkkeError } from './error';
import { err, ok } from './result';
import type {
    AnyValidator,
    InferBrand,
    InferBrands,
    InferError,
    InferErrors,
    InferInput,
    InferOutput,
    Validator,
} from './validator';

export const and = <
    Va extends AnyValidator,
    Vas extends ReadonlyArray<
        Validator<
            InferOutput<Va>,
            readonly OkkeError[],
            unknown,
            InferInput<Va>
        >
    >,
>(
    va: Va,
    ...vas: Vas
): Validator<
    InferOutput<Va>,
    ReadonlyArray<InferError<Va> | InferErrors<Vas>>,
    InferBrand<Va> & InferBrands<Vas>,
    InferInput<Va>
> => {
    return (input) => {
        const results = [va, ...vas].map((v) => v(input));

        const errors = results
            .filter((res) => res.success === false)
            .flatMap(
                ({ error }) =>
                    error as ReadonlyArray<InferError<Va> | InferErrors<Vas>>,
            );

        return errors.length === 0
            ? ok(input as InferOutput<Va> & InferBrand<Va> & InferBrands<Vas>)
            : err(errors);
    };
};
