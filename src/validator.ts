import { type ValidationResult, err, ok } from './result';

export type ValidateFn<Out, Err, Brands = unknown, In = Out> = (
    input: In,
) => ValidationResult<Out & Brands, Err>;

type CombineErrs<Err1, Err2> = Err1 extends readonly (infer Elem1)[]
    ? Err2 extends readonly (infer Elem2)[]
        ? Readonly<Elem1 | Elem2>
        : Readonly<Elem1 | Err2>
    : Err2 extends readonly (infer Elem2)[]
      ? Readonly<Err1 | Elem2>
      : Err1 extends Record<string, unknown>
        ? Err2 extends Record<string, unknown>
            ? Err1 & Err2
            : ReadonlyArray<Err1 | Err2>
        : ReadonlyArray<Err1 | Err2>;

export class Validator<Out, Err, Brands = unknown, In = Out> {
    constructor(private validateFn: ValidateFn<Out, Err, Brands, In>) {}

    validate(input: In): ValidationResult<Out & Brands, Err> {
        return this.validateFn(input);
    }

    map<U>(mapping: (x: Out & Brands) => U): Validator<U, Err, Brands, In> {
        return new Validator((input) => {
            const result = this.validateFn(input);
            return result.success
                ? ok(mapping(result.value) as U & Brands)
                : err(result.error);
        });
    }

    static and<Out, E1, E2, B1, B2, In>(
        va1: Validator<Out, E1, B1, In>,
        va2: Validator<Out, E2, B2, In>,
    ): Validator<Out, CombineErrs<E1, E2>, B1 & B2, In> {
        return new Validator((input) => {
            type ErrAlias = CombineErrs<E1, E2>;

            const result1 = va1.validateFn(input);
            const result2 = va2.validateFn(input);

            if (result1.success) {
                return result2.success
                    ? ok(result1.value as Out & B1 & B2)
                    : err(result2.error as ErrAlias);
            }

            if (result2.success) {
                return err(result1.error as ErrAlias);
            }

            if (
                typeof result1.error === 'object' &&
                typeof result2.error === 'object'
            ) {
                return err({
                    ...result1.error,
                    ...result2.error,
                } as ErrAlias);
            }

            if (Array.isArray(result1.error)) {
                return err(
                    (Array.isArray(result2.error)
                        ? [...result1.error, ...result2.error]
                        : [...result1.error, result2.error]) as ErrAlias,
                );
            }

            return err(
                (Array.isArray(result2.error)
                    ? [result1.error, ...result2.error]
                    : [result1.error, result2.error]) as ErrAlias,
            );
        });
    }

    and<U, E, B>(
        va: Validator<U, E, B, In>,
    ): Validator<Out & U, CombineErrs<Err, E>, Brands & B, In> {
        return new Validator((input) => {
            type ErrAlias = CombineErrs<Err, E>;

            const result1 = this.validateFn(input);
            const result2 = va.validateFn(input);

            if (result1.success) {
                return result2.success
                    ? ok(result1.value as Out & U & Brands & B)
                    : err(result2.error as CombineErrs<Err, E>);
            }

            if (result2.success) {
                return err(result1.error as ErrAlias);
            }

            if (
                typeof result1.error === 'object' &&
                typeof result2.error === 'object'
            ) {
                return err({
                    ...result1.error,
                    ...result2.error,
                } as ErrAlias);
            }

            if (Array.isArray(result1.error)) {
                return err(
                    (Array.isArray(result2.error)
                        ? [...result1.error, ...result2.error]
                        : [...result1.error, result2.error]) as ErrAlias,
                );
            }

            return err(
                (Array.isArray(result2.error)
                    ? [result1.error, ...result2.error]
                    : [result1.error, result2.error]) as ErrAlias,
            );
        });
    }

    andThen<U, E, B>(
        cont: Validator<U, E, B, Out>,
    ): Validator<U, Err | E, Brands & B, In> {
        return new Validator((input) => {
            const result1 = this.validateFn(input);
            if (!result1.success) {
                return err(result1.error as Err | E);
            }
            const result2 = cont.validateFn(result1.value);
            return result2.success
                ? ok(result2.value as U & Brands & B)
                : err(result2.error);
        });
    }

    orElse<E, B>(
        fallback: Validator<Out, E, B, In>,
    ): Validator<Out, E, Brands | B, In> {
        return new Validator((input) => {
            const result = this.validateFn(input);
            return result.success
                ? ok(result.value)
                : fallback.validateFn(input);
        });
    }
}
