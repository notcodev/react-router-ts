import type { BrowserRouterProps } from 'react-router'

import React from 'react'
import { BrowserRouter } from 'react-router'

import type { Adapter } from '../types'

import { withDisplayName } from '../../shared/hocs'

export type BrowserRouterAdapterOptions = Omit<BrowserRouterProps, 'children'>

export const browserRouterAdapter = (options?: BrowserRouterAdapterOptions): Adapter =>
  withDisplayName<Adapter>('BrowserRouterAdapter', ({ children }) => (
    <BrowserRouter {...options}>{children}</BrowserRouter>
  ))
