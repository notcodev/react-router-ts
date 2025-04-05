import { useParams } from 'react-router'

import { AnyParams, RouteInstance } from '../types'

export const useTSParams = <Params extends AnyParams>(
  route: RouteInstance<Params>,
): Readonly<Params> => {
  const params = useParams()

  if (!route.paramsDefinition) {
    return {} as Params
  }

  const entries = Object.entries(route.paramsDefinition) as [
    keyof Params,
    'string' | 'number',
  ][]

  const parsedParamsEntries = entries.map(([key, value]) => [
    key,
    {
      number: (param: any) => Number(param),
      string: (param: any) => param,
    }[value](params[key]),
  ])

  return Object.fromEntries(parsedParamsEntries)
}
