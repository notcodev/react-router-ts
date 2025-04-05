import { Route, Routes } from 'react-router'

import { TSNavigate } from '../components/ts-navigate'
import { renderRouteViews } from '../helpers/render-route-views'
import { useTSRouter } from '../helpers/ts-router-context'
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
    const router = useTSRouter()
    return (
      <Routes>
        {renderRouteViews(views, router.matcher)}
        {notFoundView !== undefined && (
          <>
            {notFoundView.render(router.matcher)}
            <Route path="*" element={<TSNavigate to={notFoundView.route} />} />
          </>
        )}
      </Routes>
    )
  }
