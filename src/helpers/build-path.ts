import { createSearchParams, Path, URLSearchParamsInit } from 'react-router'

import { Matcher, ParamsProp, RouteInstance } from '../types'

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
    hash: hash ? `#${hash}` : undefined,
    search: search ? `?${createSearchParams(search).toString()}` : undefined,
  }
}
