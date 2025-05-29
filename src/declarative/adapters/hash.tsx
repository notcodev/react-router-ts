import type { HashRouterProps } from 'react-router'

import React from 'react'
import { HashRouter } from 'react-router'

import type { Adapter } from '../types'

import { withDisplayName } from '../../shared/hocs'

export type HashRouterAdapterOptions = Omit<HashRouterProps, 'children'>

export const hashRouterAdapter = (options?: HashRouterAdapterOptions): Adapter =>
  withDisplayName<Adapter>('HashRouterAdapter', ({ children }) => (
    <HashRouter {...options}>{children}</HashRouter>
  ))
