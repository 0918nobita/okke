export type OkkeError<
    Path extends string = string,
    Reason = unknown,
> = Readonly<{
    path: Path;
    reason: Reason;
}>;
