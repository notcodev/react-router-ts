import type { RouteObject } from 'react-router'

import type { Matcher } from '../../common/types'
import type { View } from '../types'

export const buildViews = (views: View[], matcher: Matcher): RouteObject[] =>
  views.map((view) => view.build(matcher))
