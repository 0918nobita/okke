import type { Brand } from './brand';
import { err, ok } from './result';
import { Validator } from './validator';

export const str = new Validator<
    string,
    'string.invalid_type',
    unknown,
    unknown
>((input) =>
    typeof input === 'string' ? ok(input) : err('string.invalid_type'),
);

declare const nonEmptyBrand: unique symbol;

export type NonEmptyBrand = Brand<typeof nonEmptyBrand>;

export const nonEmpty = new Validator<string, 'string.empty', NonEmptyBrand>(
    (input) =>
        input.length > 0
            ? ok(input as string & NonEmptyBrand)
            : err('string.empty'),
);

export const min = <B = unknown>(len: number) =>
    new Validator<string, 'string.too_short', B>((input) => {
        if (input.length < len) {
            return err('string.too_short');
        }
        return ok(input as string & B);
    });

export const max = <B = unknown>(len: number) =>
    new Validator<string, 'string.too_long', B>((input) => {
        if (input.length > len) {
            return err('string.too_long');
        }
        return ok(input as string & B);
    });
