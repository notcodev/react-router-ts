import React, { useMemo } from 'react'
import { RouterProvider } from 'react-router'

import type { Adapter, View } from '../types'

import { useMatcher } from '../../common'
import { useLatest } from '../../shared/hooks'
import { buildViews } from '../helpers/build-views'

export interface RoutesViewProps<Context> {
  context?: Context
}

const defaultContext = {}

export function createRoutesView<Context>({
  views,
  otherwise,
  adapter,
}: {
  views: View[]
  otherwise?: React.ComponentType
  adapter: Adapter
}): (props: RoutesViewProps<Context>) => React.ReactElement {
  const RoutesView = ({
    context = defaultContext as Context,
  }: RoutesViewProps<Context>): React.ReactElement => {
    const matcher = useMatcher()
    const latestContext = useLatest(context)

    /*
     * Router must be initialized once even if rerender happen.
     * To prevent this we wrap router initialization into useMemo.
     * Matcher provided to dependency array according to React rules, matcher is referentially constant.
     */
    const router = useMemo(() => {
      const builtViews = buildViews(views, matcher, latestContext)
      if (otherwise !== undefined) builtViews.push({ path: '*', Component: otherwise })
      return adapter(builtViews)
    }, [matcher, latestContext])
    return <RouterProvider router={router} />
  }

  RoutesView.displayName = 'RoutesView'

  return RoutesView
}
