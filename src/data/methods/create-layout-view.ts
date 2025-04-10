import { RouteObject } from 'react-router'

import { buildRouteViews } from '../helpers/build-route-views'
import { LayoutView, RouteView } from '../types'

export const createLayoutView =
  (props: Omit<RouteObject, 'path' | 'index' | 'children'>) =>
  (...childViews: (RouteView | LayoutView)[]): LayoutView => ({
    build: (matcher) => {
      return { children: buildRouteViews(childViews, matcher), ...props }
    },
    childViews,
  })
