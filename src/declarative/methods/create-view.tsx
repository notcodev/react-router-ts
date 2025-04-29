import React from 'react'
import { PathRouteProps, Route } from 'react-router'

import { AnyParams, RouteInstance } from '../../common'
import { renderViews } from '../helpers/render-route-views'
import { View } from '../types'

export const createView =
  ({
    route,
    ...props
  }: { route?: RouteInstance<AnyParams> } & Omit<
    PathRouteProps,
    'path' | 'index' | 'children'
  >) =>
  (...childViews: View[]): View => {
    return {
      render: (matcher, key) => (
        <Route
          key={key}
          path={route ? matcher.getPath(route) : undefined}
          {...props}
        >
          {renderViews(childViews, matcher)}
        </Route>
      ),
      childViews,
      route,
    }
  }
