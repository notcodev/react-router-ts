import type { PathRouteProps } from 'react-router'

import React from 'react'
import { Route } from 'react-router'

import type { AnyParams, RouteInstance } from '../../common'
import type { View } from '../types'

import { renderViews } from '../helpers/render-route-views'

export const createView =
  ({
    route,
    ...props
  }: { route?: RouteInstance<AnyParams> } & Omit<PathRouteProps, 'children' | 'index' | 'path'>) =>
  (...childViews: View[]): View => {
    return {
      render: (matcher, key) => (
        <Route key={key} path={route ? matcher.getPath(route) : undefined} {...props}>
          {renderViews(childViews, matcher)}
        </Route>
      ),
      childViews,
      route,
    }
  }
