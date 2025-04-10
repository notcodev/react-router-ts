import { Matcher } from '../../common/types'
import { LayoutView, RouteView } from '../types'

export const renderRouteViews = (
  views: (RouteView | LayoutView)[],
  matcher: Matcher,
) => views.map((view, index) => view.render(matcher, index))
