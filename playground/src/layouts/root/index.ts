import { createView } from 'react-router-tsx/data'

import { HydrateFallback } from './hydrate-fallback'

export const RootLayoutView = createView({
  lazy: async () => {
    const [{ RootLayout }, { ErrorBoundary }] = await Promise.all([
      import('./layout'),
      import('./error-boundary'),
    ])

    return { ErrorBoundary, Component: RootLayout }
  },
  HydrateFallback,
})
