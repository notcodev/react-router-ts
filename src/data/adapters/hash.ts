import type { DOMRouterOpts } from 'react-router'

import { createHashRouter } from 'react-router'

import type { Adapter } from '../types'

export type HashRouterAdapterOptions = DOMRouterOpts

export const hashRouterAdapter =
  (options?: HashRouterAdapterOptions): Adapter =>
  (routes) =>
    createHashRouter(routes, options)
