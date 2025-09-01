import { TextFieldProps } from '../components/form/TextField'

export function mergeElementsIntoArray<T>(...elements: (T | T[] | undefined)[]): T[] {
  return elements.reduce<T[]>((acc, element) => {
    if (element === undefined) return acc
    return [...acc, ...(Array.isArray(element) ? element : [element])]
  }, [])
}

export const mergeValidationProps = (
  ...props: Pick<TextFieldProps, 'validate' | 'validationMessage'>[]
): Pick<TextFieldProps, 'validate' | 'validationMessage'> => {
  return {
    validate: mergeElementsIntoArray(...props.map(p => p.validate)),
    validationMessage: mergeElementsIntoArray(...props.map(p => p.validationMessage)),
  }
}
