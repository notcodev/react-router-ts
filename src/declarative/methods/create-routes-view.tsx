import React from 'react'
import { Route, Routes } from 'react-router'

import type { Adapter, View } from '../types'

import { useMatcher } from '../../common'
import { renderViews } from '../helpers/render-route-views'

export const createRoutesView = ({
  views,
  otherwise,
  adapter: Router,
}: {
  views: View[]
  otherwise?: React.ComponentType
  adapter: Adapter
}): (() => React.ReactElement) => {
  const RoutesView = (): React.ReactElement => {
    const matcher = useMatcher()
    return (
      <Router>
        <Routes>
          {renderViews(views, matcher)}
          {otherwise && <Route path='*' Component={otherwise} />}
        </Routes>
      </Router>
    )
  }

  RoutesView.displayName = 'RoutesView'

  return RoutesView
}
