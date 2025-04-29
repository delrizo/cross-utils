import { safeDestr } from 'destr'

export const jParse = <T>(value: Parameters<typeof safeDestr>['0']) => {
    try {
        return safeDestr<T>(value)
    } catch (error) {
        console.error(error)
    }
}
