import stringify from 'safe-stable-stringify'

export const jStringify = (v: unknown, r?: ((key: string, value: unknown) => unknown) | (string | number)[], s?: string | number) =>
    stringify(v, r, s)
