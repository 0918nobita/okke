export type Ok<out T> = Readonly<{
    success: true;
    value: T;
}>;

export type Err<out E> = Readonly<{
    success: false;
    error: E;
}>;

export type Result<T, E> = Ok<T> | Err<E>;

export const ok = <const T>(value: T): Ok<T> => ({ success: true, value });

export const err = <const E>(error: E): Err<E> => ({ success: false, error });
