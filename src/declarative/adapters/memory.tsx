import type { MemoryRouterProps } from 'react-router'

import React from 'react'
import { MemoryRouter } from 'react-router'

import type { Adapter } from '../types'

import { withDisplayName } from '../../shared/hocs'

export type MemoryRouterAdapterOptions = Omit<MemoryRouterProps, 'children'>

export const memoryRouterAdapter = (options?: MemoryRouterAdapterOptions): Adapter =>
  withDisplayName<Adapter>('MemoryRouterAdapter', ({ children }) => (
    <MemoryRouter {...options}>{children}</MemoryRouter>
  ))
