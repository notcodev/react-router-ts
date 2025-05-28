import type { RouteInstance } from '../types'

export function createRoute(): RouteInstance<void>
export function createRoute<Definitions extends Record<string, 'number' | 'string'>>(
  paramsDefinition: Definitions,
): RouteInstance<{
  [Key in keyof Definitions]: {
    string: string
    number: number
  }[Definitions[Key]]
}>

export function createRoute(paramsDefinition?: any): RouteInstance<any> {
  return { paramsDefinition }
}
