import { createView } from 'react-router-tsx/data'

import { routes } from '../../routing'

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
