import React from 'react'
import { PathRouteProps, Route } from 'react-router'

import { AnyParams, RouteInstance } from '../../common'
import { RouteView } from '../types'

export const createRouteView = ({
  route,
  ...props
}: { route: RouteInstance<AnyParams> } & Omit<
  PathRouteProps,
  'path' | 'index' | 'children'
>): RouteView => ({
  render: (matcher, key) => {
    const path = matcher.getPath(route)
    return <Route key={key} path={path} {...props} />
  },
  route,
})
