import { useParams } from 'react-router'

import { ParserOutput, parsers } from '../helpers/parsers'
import { AnyParams, RouteInstance } from '../types'

export type UseTSParamsOutput<Params extends AnyParams> = Readonly<{
  [Key in keyof Params]: ParserOutput<Params[Key]>
}>

export const useTSParams = <Params extends AnyParams>(
  route: RouteInstance<Params>,
): UseTSParamsOutput<Params> => {
  const params = useParams()

  if (!route.paramsDefinition) {
    return {} as UseTSParamsOutput<Params>
  }

  const entries = Object.entries(route.paramsDefinition) as [
    keyof Params,
    'string' | 'number',
  ][]

  const parsedParamsEntries = entries.map(
    ([key, value]) => [key, parsers[value](params[key])] as const,
  )

  return Object.fromEntries(parsedParamsEntries) as UseTSParamsOutput<Params>
}
