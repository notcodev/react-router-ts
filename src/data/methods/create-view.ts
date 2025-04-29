import { RouteObject } from 'react-router'

import { AnyParams, RouteInstance } from '../../common'
import { buildViews } from '../helpers/build-views'
import { View } from '../types'

export const createView =
  ({
    route,
    ...props
  }: { route?: RouteInstance<AnyParams> } & Omit<
    RouteObject,
    'path' | 'index' | 'children'
  >) =>
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
