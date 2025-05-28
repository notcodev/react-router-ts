import type { RouteObject } from 'react-router'

import type { AnyParams, RouteInstance } from '../../common'
import type { View } from '../types'

import { buildViews } from '../helpers/build-views'

export const createView =
  ({
    route,
    ...props
  }: { route?: RouteInstance<AnyParams> } & Omit<RouteObject, 'children' | 'index' | 'path'>) =>
  (...childViews: View[]): View => ({
    build: (matcher) => {
      return {
        path: route ? matcher.getPath(route) : undefined,
        children: buildViews(childViews, matcher),
        ...props,
      }
    },
    childViews,
    route,
  })
