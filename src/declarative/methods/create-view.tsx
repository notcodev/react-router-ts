import React from 'react'
import { Route } from 'react-router'

import type { TSRouteProps, View } from '../types'

import { ifPresent } from '../../shared/utils'
import { renderViews } from '../helpers/render-route-views'

export const createView =
  ({ route, ...props }: TSRouteProps) =>
  (...childViews: View[]): View => {
    return {
      render: (matcher, key) => (
        <Route key={key} path={ifPresent(route, (route) => matcher.getPath(route))} {...props}>
          {renderViews(childViews, matcher)}
        </Route>
      ),
      childViews,
      route,
    }
  }
