import type { RouteProps } from 'react-router'

import type { AnyParams, Matcher, RouteInstance } from '../common'

export interface View {
  childViews: View[]
  route?: RouteInstance<AnyParams>
  render: (matcher: Matcher, key?: React.Key) => React.ReactElement
}

export type TSRouteProps = { route?: RouteInstance<AnyParams> } & Omit<
  RouteProps,
  'children' | 'index' | 'path'
>

export type Adapter = React.ComponentType<{ children: React.ReactNode }>
