/**
 * This type enforces that all fields are not undefined.
 * Applying only Required does not work because it applies only to
 * optional fields marked with '?'.
 */
export type Defined<T> = Required<Partial<T>>

export type RecursiveDefined<T> = Defined<{
  [P in keyof T]: T[P] extends object | undefined ? RecursiveDefined<Defined<T[P]>> : T[P]
}>

export type RecursiveRequired<T> = Required<{
  [P in keyof T]: T[P] extends object | undefined ? RecursiveRequired<Required<T[P]>> : T[P]
}>

export type RecursivePartial<T> = Partial<{
  [P in keyof T]: T[P] extends object | undefined ? RecursivePartial<Partial<T[P]>> : T[P]
}>
