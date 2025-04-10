import { createMemoryRouter, MemoryRouterOpts } from 'react-router'

import { Adapter } from '../types'

export type MemoryRouterAdapterOptions = MemoryRouterOpts

export const memoryRouterAdapter =
  (options?: MemoryRouterAdapterOptions): Adapter =>
  (routes) =>
    createMemoryRouter(routes, options)
