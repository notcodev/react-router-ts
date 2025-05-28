import type { HashRouterProps } from 'react-router'

import React from 'react'
import { HashRouter } from 'react-router'

import type { Adapter } from '../types'

export type HashRouterAdapterOptions = Omit<HashRouterProps, 'children'>

export const hashRouterAdapter = (options?: HashRouterAdapterOptions): Adapter => {
  const HashRouterAdapter: Adapter = ({ children }) => (
    <HashRouter {...options}>{children}</HashRouter>
  )

  HashRouterAdapter.displayName = 'HashRouterAdapter'

  return HashRouterAdapter
}
