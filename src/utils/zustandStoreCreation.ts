import { StateCreator } from 'zustand'

export type StoreElementBase<T, A, U> = {
  value: T | undefined
  defaultValue: T | undefined
  context: A
  actions: StoreElementActions<A, T>
  utils: StoreElementUtils<U>
}

export type StoreElementActions<T, V> = {
  update: (value: V) => void
  reset: (value?: V) => void
} & T

export type StoreElementUtils<T> = {
  isInitialized: () => boolean
  isEditable: () => boolean
} & T

export type StoreElement<
  T,
  AdditionalStates = Record<string, never>,
  AdditionalActions = Record<string, never>,
  AdditionalUtils = Record<string, never>,
> = {
  value: T | undefined
  defaultValue: T | undefined
  context: AdditionalStates
  actions: StoreElementActions<AdditionalActions, T>
  utils: StoreElementUtils<AdditionalUtils>
}

export function createStoreElementEntry<
  T extends { [K in keyof T]: StoreElement<any, any, any, any> },
  K extends keyof T,
  V = T[K] extends StoreElement<infer U, any, any, any> ? U : never,
  S = T[K] extends StoreElement<any, infer P, any, any> ? P : Record<string, never>,
  A = T[K]['actions'] extends StoreElementActions<infer Q, any> ? Q : Record<string, never>,
  U = T[K]['utils'] extends StoreElementUtils<infer R> ? R : Record<string, never>,
>(
  key: K,
  set: Parameters<StateCreator<T>>[0],
  get: Parameters<StateCreator<T>>[1],
  baseOverride?: {
    defaultValue?: V
    update?: (value: V) => void
    reset?: (value?: V) => void
    isEditable?: () => boolean
  },
  additionalStates?: S,
  additionalActions?: A,
  additionalUtils?: U
): Pick<T, K> {
  const {
    defaultValue,
    update: updateFromUser,
    reset: resetFromUser,
    isEditable: isEditableFromUser,
  } = baseOverride ?? {}
  const getState = () => get()[key] as unknown as StoreElement<V, S>

  const isInitialized = () => {
    return getState().defaultValue !== undefined && getState().value !== undefined
  }

  const isEditable = () => {
    return isInitialized() && (isEditableFromUser?.() ?? true)
  }

  const assertInitialized = () => {
    if (!isInitialized()) throw new Error(`Store element ${String(key)} is not initialized`)
  }

  const assertEditable = () => {
    if (!isEditable()) throw new Error(`Store element editing is disabled for ${String(key)}`)
  }

  const defaultUpdate = (value: V) =>
    set(state => {
      return { [key]: { ...state[key], value } } as unknown as Partial<T>
    })

  const defaultReset = (value?: V) =>
    set(state => {
      const nestedState = state[key] as unknown as StoreElement<V, S>
      const newDefaultValue = value ?? nestedState.defaultValue
      return {
        [key]: { ...nestedState, defaultValue: newDefaultValue, value: newDefaultValue },
      } as unknown as Partial<T>
    })

  return {
    [key]: {
      value: defaultValue,
      defaultValue,
      context: additionalStates,
      actions: {
        update: (value: V) => {
          assertEditable()
          defaultUpdate(value)
          updateFromUser?.(value)
        },
        reset: (value?: V) => {
          if (value !== undefined) {
            assertInitialized()
          }
          defaultReset(value)
          resetFromUser?.(value)
        },
        ...additionalActions,
      },
      utils: {
        isInitialized,
        isEditable,
        ...additionalUtils,
      },
    },
  } as Pick<T, K>
}
