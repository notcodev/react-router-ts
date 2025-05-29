import type { createBrowserRouter, RouteObject } from 'react-router'

import type { AnyParams, Matcher, RouteInstance } from '../common'

export interface View {
  childViews: View[]
  route?: RouteInstance<AnyParams>
  build: (matcher: Matcher) => RouteObject
}

export type TSRouteObject = {
  route?: RouteInstance<AnyParams>
} & Omit<RouteObject, 'children' | 'index' | 'path'>

export type Adapter = (routes: RouteObject[]) => ReturnType<typeof createBrowserRouter>
