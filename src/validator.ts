import type { AnyError } from './error';
import type { Result } from './result';

export type Validator<out Out, out Err extends AnyError, in In> = (
    input: In,
) => Result<Out, Err[]>;

// biome-ignore lint/suspicious/noExplicitAny:
type AnyValidator = Validator<unknown, AnyError, any>;

export type InferOutput<V extends AnyValidator> = V extends Validator<
    infer Out,
    AnyError,
    // biome-ignore lint/suspicious/noExplicitAny:
    any
>
    ? Out
    : never;

export type InferError<V extends AnyValidator> = V extends Validator<
    unknown,
    infer E,
    // biome-ignore lint/suspicious/noExplicitAny:
    any
>
    ? E
    : never;

export type InferInput<V extends AnyValidator> = V extends Validator<
    unknown,
    AnyError,
    infer In
>
    ? In
    : never;
