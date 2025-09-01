import { RecursiveDefined } from './types'

/**
 * Takes an object with optional fields, or fields allowed to be undefined, and returns either the
 * fully defined object or undefined if any field is undefined.
 *
 * @param obj - Object with optional fields
 * @returns The object with all fields defined, or undefined if any field is undefined
 */
export function defined<T extends Record<string, any>>(obj: T): RecursiveDefined<T> | undefined {
  const hasUndefinedNestedField = (obj: any): boolean =>
    typeof obj === 'object'
      ? Object.values(obj).some(value => hasUndefinedNestedField(value))
      : obj === undefined

  if (hasUndefinedNestedField(obj)) {
    return undefined
  }

  return obj as RecursiveDefined<T>
}
