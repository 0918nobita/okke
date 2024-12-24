export type ValidationResult<T, Err> =
    | { success: false; error: Err }
    | { success: true; value: T };

export const ok = <T>(t: T) => ({
    success: true as const,
    value: t,
});

export const err = <Err>(err: Err) => ({
    success: false as const,
    error: err,
});
