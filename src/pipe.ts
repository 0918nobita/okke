export function pipe<T>(v: T): T;

export function pipe<T1, T2>(v1: T1, f1To2: (t1: T1) => T2): T2;

export function pipe<T1, T2, T3>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
): T3;

export function pipe<T1, T2, T3, T4>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
): T4;

export function pipe<T1, T2, T3, T4, T5>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
): T5;

export function pipe<T1, T2, T3, T4, T5, T6>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
): T6;

export function pipe<T1, T2, T3, T4, T5, T6, T7>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
): T7;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
): T8;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
): T9;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
): T10;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
): T11;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
): T12;

export function pipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
): T13;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
): T14;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
    f14To15: (t14: T14) => T15,
): T15;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
    f14To15: (t14: T14) => T15,
    f15To16: (t15: T15) => T16,
): T16;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
    f14To15: (t14: T14) => T15,
    f15To16: (t15: T15) => T16,
    f16To17: (t16: T16) => T17,
): T17;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
    f14To15: (t14: T14) => T15,
    f15To16: (t15: T15) => T16,
    f16To17: (t16: T16) => T17,
    f17To18: (t17: T17) => T18,
): T18;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
    f14To15: (t14: T14) => T15,
    f15To16: (t15: T15) => T16,
    f16To17: (t16: T16) => T17,
    f17To18: (t17: T17) => T18,
    f18To19: (t18: T18) => T19,
): T19;

export function pipe<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
>(
    v1: T1,
    f1To2: (t1: T1) => T2,
    f2To3: (t2: T2) => T3,
    f3To4: (t3: T3) => T4,
    f4To5: (t4: T4) => T5,
    f5To6: (t5: T5) => T6,
    f6To7: (t6: T6) => T7,
    f7To8: (t7: T7) => T8,
    f8To9: (t8: T8) => T9,
    f9To10: (t9: T9) => T10,
    f10To11: (t10: T10) => T11,
    f11To12: (t11: T11) => T12,
    f12To13: (t12: T12) => T13,
    f13To14: (t13: T13) => T14,
    f14To15: (t14: T14) => T15,
    f15To16: (t15: T15) => T16,
    f16To17: (t16: T16) => T17,
    f17To18: (t17: T17) => T18,
    f18To19: (t18: T18) => T19,
    f19To20: (t19: T19) => T20,
): T20;

export function pipe(
    v: unknown,
    // biome-ignore lint/suspicious/noExplicitAny:
    ...fs: readonly ((v: any) => any)[]
): unknown {
    let current = v;
    for (const f of fs) {
        current = f(current);
    }
    return current;
}
