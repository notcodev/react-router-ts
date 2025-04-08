import { Route, Routes } from 'react-router'

import { TSNavigate } from '../components/ts-navigate'
import { renderRouteViews } from '../helpers/render-route-views'
import { useMatcher } from '../helpers/ts-router-context'
import { Adapter, LayoutView, RouteView } from '../types'

export const createRoutesView =
  ({
    views,
    notFoundView,
    adapter: Router,
  }: {
    views: (RouteView | LayoutView)[]
    notFoundView?: RouteView
    adapter: Adapter
  }) =>
  () => {
    const matcher = useMatcher()
    return (
      <Router>
        <Routes>
          {renderRouteViews(views, matcher)}
          {notFoundView !== undefined && (
            <>
              {notFoundView.render(matcher)}
              <Route
                path="*"
                element={<TSNavigate to={notFoundView.route} />}
              />
            </>
          )}
        </Routes>
      </Router>
    )
  }
