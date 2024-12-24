import { err, ok } from './result';
import { Validator } from './validator';

export const obj = new Validator<
    Record<string, unknown>,
    'object.invalid_type',
    unknown,
    unknown
>((input) =>
    typeof input === 'object' && input !== null
        ? ok(input as Record<string, unknown>)
        : err('object.invalid_type'),
);

const missingField = 'object.missing_field';

export type MissingField = typeof missingField;

export const field = <
    const F extends string,
    In extends object & { [k in F]?: unknown },
    FOut,
    E,
    B,
>(
    fieldName: F,
    validator: Validator<FOut, E, B, In[F]>,
) =>
    new Validator<
        Omit<In, F> & { [k in F]: FOut & B },
        { [k in F]: MissingField | E },
        unknown,
        In
    >((input) => {
        if (!(fieldName in input)) {
            return err({ [fieldName]: missingField } as {
                [k in F]: MissingField | E;
            });
        }

        const fieldVal = input[fieldName];

        const result = validator.validate(fieldVal);
        if (!result.success) {
            return err({
                [fieldName]: result.error as MissingField | E,
            } as { [k in F]: MissingField | E });
        }

        return ok(input as In & { [k in F]: FOut & B });
    });
