import { createView } from 'react-router-tsx/data'

import { routes } from '../../shared/routing'

export const PostDetailPageView = createView({
  route: routes.posts.detail,
  lazy: async () => {
    const [{ PostDetailPage }, { loader }] = await Promise.all([
      import('./page'),
      import('./loader'),
    ])

    return { Component: PostDetailPage, loader }
  },
})

/* [NOTE!]
 * Implement building routeTree and provide
 * it to global context to allow use getRouteApi
 * with auto typed loader data and params
 */
