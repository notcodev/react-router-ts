export type UnsupportedLazyRouteObjectKey =
  | 'caseSensitive'
  | 'children'
  | 'id'
  | 'index'
  | 'lazy'
  | 'path'

export type UnsupportedLazyRouteFunctionKey = 'unstable_middleware' | UnsupportedLazyRouteObjectKey

export type MaybePromise<T> = Promise<T> | T

export interface unstable_MiddlewareNextFunction<Result = unknown> {
  (): MaybePromise<Result>
}
