import React, { useMemo } from 'react'
import { RouterProvider } from 'react-router'

import type { Adapter, View } from '../types'

import { useMatcher } from '../../common'
import { buildViews } from '../helpers/build-views'

export function createRoutesView({
  views,
  otherwise,
  adapter,
}: {
  views: View[]
  otherwise?: React.ComponentType
  adapter: Adapter
}): () => React.ReactElement {
  const RoutesView = (): React.ReactElement => {
    const matcher = useMatcher()

    /*
     * Router must be initialized once even if rerender happen.
     * To prevent this we wrap router initialization into useMemo.
     * Matcher provided to dependency array according to React rules, matcher is referentially constant.
     */
    const router = useMemo(() => {
      const builtViews = buildViews(views, matcher)
      if (otherwise !== undefined) builtViews.push({ path: '*', Component: otherwise })
      return adapter(builtViews)
    }, [matcher])
    return <RouterProvider router={router} />
  }

  RoutesView.displayName = 'RoutesView'

  return RoutesView
}
