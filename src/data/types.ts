import type { createBrowserRouter, LoaderFunctionArgs, RouteObject } from 'react-router'

import type { AnyParams, Matcher, RouteInstance } from '../common'
import type {
  UnsupportedLazyRouteFunctionKey,
  UnsupportedLazyRouteObjectKey,
} from './interals/types'

export interface View {
  childViews: View[]
  route?: RouteInstance<AnyParams>
  build: (matcher: Matcher, contextRef: React.MutableRefObject<any>) => RouteObject
}

export type TSLoaderFunctionArgs<Context = unknown, BuiltinContext = unknown> = Omit<
  LoaderFunctionArgs<BuiltinContext>,
  'context'
> & {
  context: Context
  builtinContext: BuiltinContext
}

export type TSLoaderFunction<Context, BuiltinContext> = {
  (args: TSLoaderFunctionArgs<Context, BuiltinContext>, handlerCtx?: unknown): unknown
} & {
  hydrate?: boolean
}

export type TSLazyRouteObject<R extends TSRouteObject<any, any>> = {
  [K in keyof R as K extends UnsupportedLazyRouteObjectKey ? never : K]?: () => Promise<
    R[K] | null | undefined
  >
}

export interface TSLazyRouteFunction<R extends TSRouteObject<any, any>> {
  (): Promise<
    Omit<R, UnsupportedLazyRouteFunctionKey> &
      Partial<Record<UnsupportedLazyRouteFunctionKey, never>>
  >
}

export type TSLazyRouteDefenition<R extends TSRouteObject<any, any>> =
  | TSLazyRouteFunction<R>
  | TSLazyRouteObject<R>

export type TSRouteObject<Context, BuiltinContext> = {
  route?: RouteInstance<AnyParams>
  loader?: TSLoaderFunction<Context, BuiltinContext>
  lazy?: TSLazyRouteDefenition<TSRouteObject<Context, BuiltinContext>>
} & Omit<RouteObject, 'children' | 'index' | 'lazy' | 'loader' | 'path'>

export type Adapter = (routes: RouteObject[]) => ReturnType<typeof createBrowserRouter>
