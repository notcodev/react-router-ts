import { AnyParams, Matcher, RouteInstance } from '../common'

export interface RouteView {
  render: (matcher: Matcher, key?: React.Key) => React.ReactElement
  route: RouteInstance<AnyParams>
}

export interface LayoutView {
  render: (matcher: Matcher, key?: React.Key) => React.ReactElement
  childViews: (RouteView | LayoutView)[]
}

export type Adapter = (props: {
  children: React.ReactNode
}) => React.ReactElement
