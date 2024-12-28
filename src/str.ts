import type { OkkeError } from './error';
import { err, ok } from './result';
import type { Validator } from './validator';

export const str: Validator<
    string,
    OkkeError<'.', 'string.invalid_type'>,
    unknown
> = (input) =>
    typeof input === 'string'
        ? ok(input)
        : err([{ path: '.', reason: 'string.invalid_type' }]);

// import type { Brand } from './brand';

// declare const nonEmptyBrand: unique symbol;

// export type NonEmptyBrand = Brand<typeof nonEmptyBrand>;

// export const nonEmpty: Validator<
//     string,
//     readonly OkkeError<'.', 'string.empty'>[],
//     NonEmptyBrand
// > = (input) =>
//     input.length > 0
//         ? ok(input as string & NonEmptyBrand)
//         : err([{ path: '.', reason: 'string.empty' }]);

// export const min =
//     <const B = unknown>(
//         len: number,
//     ): Validator<
//         string,
//         readonly OkkeError<'.', { type: 'string.too_short'; len: number }>[],
//         B
//     > =>
//     (input) => {
//         if (input.length < len) {
//             return err([
//                 { path: '.', reason: { type: 'string.too_short', len } },
//             ]);
//         }
//         return ok(input as string & B);
//     };

// export const max =
//     <B = unknown>(
//         len: number,
//     ): Validator<
//         string,
//         readonly OkkeError<'.', { type: 'string.too_long'; len: number }>[],
//         B
//     > =>
//     (input) => {
//         if (input.length > len) {
//             return err([
//                 { path: '.', reason: { type: 'string.too_long', len } },
//             ]);
//         }
//         return ok(input as string & B);
//     };
