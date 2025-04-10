import React from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router'

import { Adapter } from '../types'

export type MemoryRouterAdapterOptions = Omit<MemoryRouterProps, 'children'>

export const memoryRouterAdapter =
  (options?: MemoryRouterAdapterOptions): Adapter =>
  ({ children }) => <MemoryRouter {...options}>{children}</MemoryRouter>
