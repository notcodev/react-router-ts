export type UnsupportedLazyRouteObjectKey =
  | 'caseSensitive'
  | 'children'
  | 'id'
  | 'index'
  | 'lazy'
  | 'path'

export type UnsupportedLazyRouteFunctionKey = 'unstable_middleware' | UnsupportedLazyRouteObjectKey
