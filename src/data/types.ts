import { createBrowserRouter, RouteObject } from 'react-router'

import { AnyParams, Matcher, RouteInstance } from '../common'

export interface RouteView {
  build: (matcher: Matcher) => RouteObject
  route: RouteInstance<AnyParams>
}

export interface LayoutView {
  build: (matcher: Matcher) => RouteObject
  childViews: (RouteView | LayoutView)[]
}

export type Adapter = (
  routes: RouteObject[],
) => ReturnType<typeof createBrowserRouter>
