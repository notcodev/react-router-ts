import React, { useMemo } from 'react'
import { RouterProvider } from 'react-router'

import { useMatcher } from '../../common'
import { buildRouteViews } from '../helpers/build-route-views'
import { Adapter, LayoutView, RouteView } from '../types'

export const createRoutesView =
  ({
    views,
    otherwise,
    adapter,
  }: {
    views: (RouteView | LayoutView)[]
    otherwise?: React.ComponentType
    adapter: Adapter
  }) =>
  () => {
    const matcher = useMatcher()
    const router = useMemo(() => {
      const builtViews = buildRouteViews(views, matcher)
      if (otherwise !== undefined)
        builtViews.push({ path: '*', Component: otherwise })
      return adapter(builtViews)
    }, [matcher])
    return <RouterProvider router={router} />
  }
