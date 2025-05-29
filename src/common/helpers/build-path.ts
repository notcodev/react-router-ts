import type { Path, URLSearchParamsInit } from 'react-router'

import { createSearchParams } from 'react-router'

import type { Matcher, ParamsProp, RouteInstance } from '../types'

import { ifPresent } from '../../shared/utils'

export const buildPath = <Params extends ParamsProp>({
  route,
  params,
  search,
  hash,
  matcher,
}: {
  route: RouteInstance<Params>
  params: Params
  search?: URLSearchParamsInit
  hash?: string
  matcher: Matcher
}): Partial<Path> => {
  const path = matcher.getPath(route)
  const pathname =
    params !== undefined
      ? Object.entries(params).reduce(
          (path, [param, value]) => path.replace(`:${param}`, String(value)),
          path,
        )
      : path
  return {
    pathname,
    hash: ifPresent(hash, (hash) => `#${hash}`),
    search: ifPresent(search, (search) => `?${createSearchParams(search).toString()}`),
  }
}
