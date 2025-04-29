import React, { useMemo } from 'react'
import { RouterProvider } from 'react-router'

import { useMatcher } from '../../common'
import { buildViews } from '../helpers/build-views'
import { Adapter, View } from '../types'

export const createRoutesView =
  ({
    views,
    otherwise,
    adapter,
  }: {
    views: View[]
    otherwise?: React.ComponentType
    adapter: Adapter
  }) =>
  () => {
    const matcher = useMatcher()
    const router = useMemo(() => {
      const builtViews = buildViews(views, matcher)
      if (otherwise !== undefined)
        builtViews.push({ path: '*', Component: otherwise })
      return adapter(builtViews)
    }, [matcher])
    return <RouterProvider router={router} />
  }
