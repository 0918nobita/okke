// import type { OkkeError } from './error';
// import { type Result, ok } from './result';
// import type {
//     AnyValidator,
//     InferBrand,
//     InferError,
//     InferInput,
//     InferOutput,
//     Validator,
// } from './validator';

/*
export const orElse =
    <Alt extends AnyValidator>(alt: Alt) =>
    <
        V extends Validator<
            unknown,
            readonly OkkeError[],
            unknown,
            InferInput<Alt>
        >,
    >(
        va: V,
    ):
        | Validator<
              InferOutput<V>,
              readonly InferError<Alt>[],
              InferBrand<V>,
              InferInput<Alt>
          >
        | Validator<
              InferOutput<Alt>,
              readonly InferError<Alt>[],
              InferBrand<Alt>,
              InferInput<Alt>
          > =>
    (input) => {
        type Out = InferOutput<V> | InferOutput<Alt>;

        const result = va(input);
        // return result.success
        //     ? ok(result.value as InferInput<V> & InferBrand<V>)
        //     : (alt(input) as Result<
        //           InferOutput<Alt> & InferBrand<Alt>,
        //           readonly InferError<Alt>[]
        //       >);

        if (result.success) {
            return ok(
                result.value as
                    | (InferOutput<V> & InferBrand<V>)
                    | (InferOutput<Alt> & InferBrand<Alt>),
            );
        }

        const altResult = alt(input);
        if (altResult.success) {
            return ok(altResult.value as InferOutput<Alt> & InferBrand<Alt>);
        }

        throw new Error('not implemented');
    };
*/
