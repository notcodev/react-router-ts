import type { BrowserRouterProps } from 'react-router'

import React from 'react'
import { BrowserRouter } from 'react-router'

import type { Adapter } from '../types'

export type BrowserRouterAdapterOptions = Omit<BrowserRouterProps, 'children'>

export const browserRouterAdapter = (options?: BrowserRouterAdapterOptions): Adapter => {
  const BrowserRouterAdapter: Adapter = ({ children }) => (
    <BrowserRouter {...options}>{children}</BrowserRouter>
  )

  BrowserRouterAdapter.displayName = 'BrowserRouterAdapter'

  return BrowserRouterAdapter
}
