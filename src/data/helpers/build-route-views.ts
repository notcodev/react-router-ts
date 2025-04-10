import { Matcher } from '../../common/types'
import { LayoutView, RouteView } from '../types'

export const buildRouteViews = (
  views: (RouteView | LayoutView)[],
  matcher: Matcher,
) => views.map((view) => view.build(matcher))
