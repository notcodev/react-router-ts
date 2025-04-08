import { BrowserRouter, BrowserRouterProps } from 'react-router'

import { Adapter } from '../types'

export type BrowserRouterAdapterOptions = Omit<BrowserRouterProps, 'children'>

export const browserRouterAdapter =
  (options?: BrowserRouterAdapterOptions): Adapter =>
  ({ children }) => <BrowserRouter {...options}>{children}</BrowserRouter>
