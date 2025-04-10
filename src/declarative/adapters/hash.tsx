import React from 'react'
import { HashRouter, HashRouterProps } from 'react-router'

import { Adapter } from '../types'

export type HashRouterAdapterOptions = Omit<HashRouterProps, 'children'>

export const hashRouterAdapter =
  (options?: HashRouterAdapterOptions): Adapter =>
  ({ children }) => <HashRouter {...options}>{children}</HashRouter>
