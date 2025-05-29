import { createView } from 'react-router-tsx/data'

import { routes } from '../../shared/routing'

export const HomePageView = createView({
  route: routes.home,
  lazy: async () => {
    const [{ HomePage }, { loader }] = await Promise.all([import('./page'), import('./loader')])
    return { Component: HomePage, loader }
  },
})
