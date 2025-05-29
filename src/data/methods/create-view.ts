import type { RouteObject } from 'react-router'

import type { TSRouteObject, View } from '../types'

import { ifPresent } from '../../shared/utils'
import { buildViews } from '../helpers/build-views'

/* [NOTE!]
 * Implement plugins functionality
 */

export const createView =
  ({ route, ...params }: TSRouteObject) =>
  (...childViews: View[]): View => ({
    build: (matcher): RouteObject => {
      return {
        path: ifPresent(route, (route) => matcher.getPath(route)),
        children: buildViews(childViews, matcher),
        ...params,
      }
    },
    childViews,
    route,
  })
