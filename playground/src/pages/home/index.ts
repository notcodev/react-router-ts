import { createView } from 'react-router-tsx/data'

import { routes } from '../../routing'

export const HomePageView = createView({
  route: routes.home,
  lazy: async () => {
    const { HomePage } = await import('./page')
    return { Component: HomePage }
  },
})
