import type { MemoryRouterProps } from 'react-router'

import React from 'react'
import { MemoryRouter } from 'react-router'

import type { Adapter } from '../types'

export type MemoryRouterAdapterOptions = Omit<MemoryRouterProps, 'children'>

export const memoryRouterAdapter = (options?: MemoryRouterAdapterOptions): Adapter => {
  const MemoryRouterAdapter: Adapter = ({ children }) => (
    <MemoryRouter {...options}>{children}</MemoryRouter>
  )

  MemoryRouterAdapter.displayName = 'MemoryRouterAdapter'

  return MemoryRouterAdapter
}
