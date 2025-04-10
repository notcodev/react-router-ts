import { RouteObject } from 'react-router'

import { AnyParams, RouteInstance } from '../../common'
import { RouteView } from '../types'

export const createRouteView = ({
  route,
  ...props
}: { route: RouteInstance<AnyParams> } & Omit<
  RouteObject,
  'path' | 'index' | 'children'
>): RouteView => ({
  build: (matcher) => {
    const path = matcher.getPath(route)
    return { path, ...props }
  },
  route,
})
