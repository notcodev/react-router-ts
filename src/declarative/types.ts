import type { AnyParams, Matcher, RouteInstance } from '../common'

export interface View {
  childViews: View[]
  route?: RouteInstance<AnyParams>
  render: (matcher: Matcher, key?: React.Key) => React.ReactElement
}

export type Adapter = React.FC<{ children: React.ReactNode }>
