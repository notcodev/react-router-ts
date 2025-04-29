import { AnyParams, Matcher, RouteInstance } from '../common'

export interface View {
  render: (matcher: Matcher, key?: React.Key) => React.ReactElement
  childViews: View[]
  route?: RouteInstance<AnyParams>
}

export type Adapter = (props: {
  children: React.ReactNode
}) => React.ReactElement
