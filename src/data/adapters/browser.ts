import { createBrowserRouter, DOMRouterOpts } from 'react-router'

import { Adapter } from '../types'

export type BrowserRouterAdapterOptions = DOMRouterOpts

export const browserRouterAdapter =
  (options?: BrowserRouterAdapterOptions): Adapter =>
  (routes) =>
    createBrowserRouter(routes, options)
