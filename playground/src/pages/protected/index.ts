import { createView } from 'react-router-tsx/data'

import { routes } from '../../shared/routing'

export const ProtectedPageView = createView({
  route: routes.protected,
  lazy: async () => {
    const [{ ProtectedPage }, { loader }] = await Promise.all([
      import('./page'),
      import('./loader'),
    ])

    return { Component: ProtectedPage, loader }
  },
})
