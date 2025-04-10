import React from 'react'
import { PathRouteProps, Route } from 'react-router'

import { renderRouteViews } from '../helpers/render-route-views'
import { LayoutView, RouteView } from '../types'

export const createLayoutView =
  (props: Omit<PathRouteProps, 'path' | 'index' | 'children'>) =>
  (...childViews: (RouteView | LayoutView)[]): LayoutView => {
    return {
      render: (matcher, key) => (
        <Route key={key} {...props}>
          {renderRouteViews(childViews, matcher)}
        </Route>
      ),
      childViews,
    }
  }
