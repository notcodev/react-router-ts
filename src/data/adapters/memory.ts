import type { MemoryRouterOpts } from 'react-router'

import { createMemoryRouter } from 'react-router'

import type { Adapter } from '../types'

export type MemoryRouterAdapterOptions = MemoryRouterOpts

export const memoryRouterAdapter =
  (options?: MemoryRouterAdapterOptions): Adapter =>
  (routes) =>
    createMemoryRouter(routes, options)
