import { Route, Routes } from 'react-router'

import { TSNavigate } from '../components/ts-navigate'
import { renderRouteViews } from '../helpers/render-route-views'
import { useMatcher } from '../helpers/ts-router-context'
import { LayoutView, RouteView } from '../types'

export const createRoutesView =
  ({
    views,
    notFoundView,
  }: {
    views: (RouteView | LayoutView)[]
    notFoundView?: RouteView
  }) =>
  () => {
    const matcher = useMatcher()
    return (
      <Routes>
        {renderRouteViews(views, matcher)}
        {notFoundView !== undefined && (
          <>
            {notFoundView.render(matcher)}
            <Route path="*" element={<TSNavigate to={notFoundView.route} />} />
          </>
        )}
      </Routes>
    )
  }
