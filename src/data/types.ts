import { createBrowserRouter, RouteObject } from 'react-router'

import { AnyParams, Matcher, RouteInstance } from '../common'

export interface View {
  build: (matcher: Matcher) => RouteObject
  route?: RouteInstance<AnyParams>
  childViews: View[]
}

export type Adapter = (
  routes: RouteObject[],
) => ReturnType<typeof createBrowserRouter>
