import { URLSearchParamsInit } from 'react-router'

export type ParamsRecord = Record<string, string | number>
export type AnyParams = ParamsRecord | void
export type ParamsProp = ParamsRecord | undefined

export interface RouteInstance<Params extends AnyParams | void> {
  paramsDefinition?: Record<keyof Params, 'string' | 'number'>
}

export interface Matcher {
  getPath: (route: RouteInstance<AnyParams>) => string
}

export type TransformProps<Props extends object, Params extends AnyParams> = {
  to: RouteInstance<Params>
  search?: URLSearchParamsInit
  hash?: string
} & Omit<Props, 'to'> &
  (Params extends ParamsRecord ? { params: Params } : { params?: never })
