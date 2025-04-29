import React from 'react'
import { Route, Routes } from 'react-router'

import { useMatcher } from '../../common'
import { renderViews } from '../helpers/render-route-views'
import { Adapter, View } from '../types'

export const createRoutesView =
  ({
    views,
    otherwise,
    adapter: Router,
  }: {
    views: View[]
    otherwise?: React.ComponentType
    adapter: Adapter
  }) =>
  () => {
    const matcher = useMatcher()
    return (
      <Router>
        <Routes>
          {renderViews(views, matcher)}
          {otherwise && <Route Component={otherwise} path="*" />}
        </Routes>
      </Router>
    )
  }
