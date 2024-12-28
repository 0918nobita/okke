import type { OkkeError } from './error';
import type { Result } from './result';

export type Validator<
    out Out,
    out Err extends readonly OkkeError[],
    out Brands = unknown,
    in In = Out,
> = (input: In) => Result<Out & Brands, Err>;

// TODO: Out, Brands の組を複数用意して union で表現できるように Validator を修正する

export type AnyValidator = Validator<
    unknown,
    readonly OkkeError[],
    unknown,
    // biome-ignore lint/suspicious/noExplicitAny:
    any
>;

export type InferOutput<V extends AnyValidator> = V extends Validator<
    infer Out,
    readonly OkkeError[],
    unknown,
    // biome-ignore lint/suspicious/noExplicitAny:
    any
>
    ? Out
    : never;

export type InferError<V extends AnyValidator> = V extends Validator<
    unknown,
    readonly OkkeError<infer Path, infer Reason>[],
    unknown,
    // biome-ignore lint/suspicious/noExplicitAny:
    any
>
    ? OkkeError<Path, Reason>
    : never;

export type InferErrors<Vas extends readonly AnyValidator[]> = Vas extends [
    Validator<
        unknown,
        readonly OkkeError<infer Path, infer Reason>[],
        unknown,
        // biome-ignore lint/suspicious/noExplicitAny:
        any
    >,
    ...infer Tail,
]
    ? Tail extends readonly AnyValidator[]
        ? OkkeError<Path, Reason> | InferErrors<Tail>
        : never
    : Vas extends [
            Validator<
                unknown,
                readonly OkkeError<infer Path, infer Reason>[],
                unknown,
                // biome-ignore lint/suspicious/noExplicitAny:
                any
            >,
        ]
      ? OkkeError<Path, Reason>
      : never;

export type InferBrand<V extends AnyValidator> = V extends Validator<
    unknown,
    readonly OkkeError[],
    infer Brands,
    // biome-ignore lint/suspicious/noExplicitAny:
    any
>
    ? Brands
    : never;

export type InferBrands<Vas extends readonly AnyValidator[]> = Vas extends [
    // biome-ignore lint/suspicious/noExplicitAny:
    Validator<unknown, readonly OkkeError[], infer B, any>,
    ...infer Tail,
]
    ? Tail extends readonly AnyValidator[]
        ? B | InferBrands<Tail>
        : never
    : // biome-ignore lint/suspicious/noExplicitAny:
      Vas extends [Validator<unknown, readonly OkkeError[], infer B, any>]
      ? B
      : never;

export type InferInput<V> = V extends Validator<
    unknown,
    readonly OkkeError[],
    unknown,
    infer In
>
    ? In
    : never;
