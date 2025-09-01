import { Choice } from '../types'

export class ChoiceGroup<T> {
  private readonly choices: Map<string, Choice<T>>

  private constructor(choices: Map<string, Choice<T>>) {
    this.choices = choices
  }

  static create<T>(
    objects: T[],
    initialPickedObjects: T[] = [],
    getLabel: (object: T) => string
  ): ChoiceGroup<T> {
    const choices = new Map<string, Choice<T>>()
    const initialPickedLabels = new Set(initialPickedObjects.map(obj => getLabel(obj)))

    for (const object of objects) {
      const choice = {
        type: 'object' as const,
        object,
        picked: false,
        getLabel: () => getLabel(object),
      }
      const label = getLabel(object)

      if (choices.has(label)) {
        throw new Error(`Duplicate label found: ${label}`)
      }

      choices.set(label, { ...choice, picked: initialPickedLabels.has(label) })
    }

    return new ChoiceGroup<T>(choices)
  }

  pick(label: string): ChoiceGroup<T> {
    const choice = this.choices.get(label)
    if (!choice) {
      throw new Error(`No choice found with label: ${label}`)
    }

    const newChoices = new Map(this.choices)
    newChoices.set(label, { ...choice, picked: true })
    return new ChoiceGroup<T>(newChoices)
  }

  unpick(label: string): ChoiceGroup<T> {
    const choice = this.choices.get(label)
    if (!choice) {
      throw new Error(`No choice found with label: ${label}`)
    }

    const newChoices = new Map(this.choices)
    newChoices.set(label, { ...choice, picked: false })
    return new ChoiceGroup<T>(newChoices)
  }

  toggle(label: string): ChoiceGroup<T> {
    const choice = this.choices.get(label)
    if (!choice) {
      throw new Error(`No choice found with label: ${label}`)
    }

    const newChoices = new Map(this.choices)
    newChoices.set(label, { ...choice, picked: !choice.picked })
    return new ChoiceGroup<T>(newChoices)
  }

  isPicked(label: string): boolean {
    const choice = this.choices.get(label)
    if (!choice) {
      throw new Error(`No choice found with label: ${label}`)
    }
    return choice.picked
  }

  getObject(label: string): T {
    const choice = this.choices.get(label)
    if (!choice) {
      throw new Error(`No choice found with label: ${label}`)
    }
    return choice.object
  }

  getPickedLabels(): Set<string> {
    return new Set(
      Array.from(this.choices.entries())
        .filter(([_, choice]) => choice.picked)
        .map(([label]) => label)
    )
  }

  getPickedObjects(): T[] {
    return Array.from(this.choices.values())
      .filter(choice => choice.picked)
      .map(choice => choice.object)
  }

  filterBySearch(search: string): string[] {
    const searchLower = search.toLowerCase()
    return Array.from(this.choices.values())
      .map(choice => choice.getLabel())
      .filter(label => label.toLowerCase().includes(searchLower))
  }
}
