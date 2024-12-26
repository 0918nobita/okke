import { err, ok } from './result';
import { Validator } from './validator';

export const object = <
    const FVS extends Record<string, Validator<unknown, unknown>>,
>(
    fields: FVS,
) => {
    type Out = {
        [K in keyof FVS]: FVS[K] extends Validator<
            infer O,
            unknown,
            infer B,
            unknown
        >
            ? O & B
            : never;
    };

    type Err =
        | 'object.invalid_type'
        | {
              readonly [K in keyof FVS]: FVS[K] extends Validator<
                  unknown,
                  infer E
              >
                  ? 'object.missing_field' | E
                  : never;
          };

    return new Validator<Out, Err, unknown, unknown>((input) => {
        if (typeof input !== 'object' || input === null) {
            return err('object.invalid_type');
        }

        const results: Record<string, unknown> = {};
        const errs: Record<string, unknown> = {};

        for (const key in fields) {
            if (!(key in input)) {
                errs[key] = 'object.missing_field';
            }
            const value = (input as { [_ in typeof key]: unknown })[key];
            const res = fields[key].validate(value);
            if (res.success) {
                results[key] = res.value;
            } else {
                errs[key] = res.error;
            }
        }

        if (Object.keys(errs).length > 0) {
            return err(errs as Err);
        }

        return ok(results as Out);
    });
};

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
        { readonly [k in F]: MissingField | E },
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
