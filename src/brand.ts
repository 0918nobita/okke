declare const brand: unique symbol;

export interface Brand<in K extends symbol> {
    readonly [brand]: {
        readonly [k in K]: unknown;
    };
}
