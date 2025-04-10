import { createHashRouter, DOMRouterOpts } from 'react-router'

import { Adapter } from '../types'

export type HashRouterAdapterOptions = DOMRouterOpts

export const hashRouterAdapter =
  (options?: HashRouterAdapterOptions): Adapter =>
  (routes) =>
    createHashRouter(routes, options)
