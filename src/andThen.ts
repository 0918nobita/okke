import type { OkkeError } from './error';
import { err, ok } from './result';
import type {
    AnyValidator,
    InferBrand,
    InferError,
    InferInput,
    InferOutput,
    Validator,
} from './validator';

export const andThen =
    <Cont extends AnyValidator>(cont: Cont) =>
    // biome-ignore lint/suspicious/noExplicitAny:
    <V extends Validator<InferInput<Cont>, readonly OkkeError[], unknown, any>>(
        va: V,
    ): Validator<
        InferOutput<Cont>,
        ReadonlyArray<InferError<V> | InferError<Cont>>,
        InferBrand<V> & InferBrand<Cont>,
        InferInput<V>
    > =>
    (input) => {
        const result1 = va(input);
        if (!result1.success) {
            return err(result1.error as readonly InferError<V>[]);
        }

        const result2 = cont(result1.value);
        return result2.success
            ? ok(
                  result2.value as InferOutput<Cont> &
                      InferBrand<V> &
                      InferBrand<Cont>,
              )
            : err(result2.error as readonly InferError<Cont>[]);
    };
