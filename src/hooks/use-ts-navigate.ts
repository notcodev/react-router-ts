import { useCallback } from 'react'
import { NavigateOptions, URLSearchParamsInit, useNavigate } from 'react-router'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'
import { AnyParams, ParamsRecord, RouteInstance } from '../types'

export type TSNavigateFunctionOptions<Params extends AnyParams> = {
  to: RouteInstance<Params>
  search?: URLSearchParamsInit
  hash?: string
} & NavigateOptions &
  (Params extends ParamsRecord ? { params: Params } : { params?: never })

export interface TSNavigateFunction {
  <Params extends AnyParams>(
    options: TSNavigateFunctionOptions<Params>,
  ): Promise<void> | void
  (delta: number): Promise<void> | void
}

export const useTSNavigate = () => {
  const navigate = useNavigate()
  const matcher = useMatcher()
  const stableNavigate: TSNavigateFunction = useCallback(
    <Params extends AnyParams>(
      optionsOrDelta: TSNavigateFunctionOptions<Params> | number,
    ) => {
      if (typeof optionsOrDelta === 'number') {
        return navigate(optionsOrDelta)
      }

      const { to, params, search, hash, ...options } = optionsOrDelta

      return navigate(
        buildPath({ route: to, params, search, hash, matcher }),
        options,
      )
    },
    [navigate],
  )
  return stableNavigate
}
