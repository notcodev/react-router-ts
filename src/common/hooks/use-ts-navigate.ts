import type { NavigateOptions, URLSearchParamsInit } from 'react-router'

import { useCallback } from 'react'
import { useNavigate } from 'react-router'

import type { AnyParams, ParamsRecord, RouteInstance } from '../types'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'

export type TSNavigateFunctionOptions<Params extends AnyParams> = {
  to: RouteInstance<Params>
  search?: URLSearchParamsInit
  hash?: string
} & NavigateOptions &
  (Params extends ParamsRecord ? { params: Params } : { params?: never })

export interface TSNavigateFunction {
  <Params extends AnyParams>(options: TSNavigateFunctionOptions<Params>): Promise<void> | void
  (delta: number): Promise<void> | void
}

export const useTSNavigate = (): TSNavigateFunction => {
  const navigate = useNavigate()
  const matcher = useMatcher()

  return useCallback(
    <Params extends AnyParams>(optionsOrDelta: number | TSNavigateFunctionOptions<Params>) => {
      if (typeof optionsOrDelta === 'number') {
        return navigate(optionsOrDelta)
      }

      const { to, params, search, hash, ...options } = optionsOrDelta

      return navigate(buildPath({ route: to, params, search, hash, matcher }), options)
    },
    [navigate, matcher],
  )
}
