import React from 'react'
import { Route, Routes } from 'react-router'

import { useMatcher } from '../../common'
import { renderRouteViews } from '../helpers/render-route-views'
import { Adapter, LayoutView, RouteView } from '../types'

export const createRoutesView =
  ({
    views,
    otherwise,
    adapter: Router,
  }: {
    views: (RouteView | LayoutView)[]
    otherwise?: React.ComponentType
    adapter: Adapter
  }) =>
  () => {
    const matcher = useMatcher()
    return (
      <Router>
        <Routes>
          {renderRouteViews(views, matcher)}
          {otherwise && <Route Component={otherwise} path="*" />}
        </Routes>
      </Router>
    )
  }
