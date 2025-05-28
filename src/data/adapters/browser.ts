import type { DOMRouterOpts } from 'react-router'

import { createBrowserRouter } from 'react-router'

import type { Adapter } from '../types'

export type BrowserRouterAdapterOptions = DOMRouterOpts

export const browserRouterAdapter =
  (options?: BrowserRouterAdapterOptions): Adapter =>
  (routes) =>
    createBrowserRouter(routes, options)
