export type OkkeError<Path, Reason> = Readonly<{
    path: Path;
    reason: Reason;
}>;

export type AnyError = OkkeError<string, unknown>;
