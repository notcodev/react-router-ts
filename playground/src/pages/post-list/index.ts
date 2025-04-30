import { createView } from 'react-router-tsx/data'

import { routes } from '../../routing'

export const PostListPageView = createView({
  route: routes.posts.list,
  lazy: async () => {
    const [{ PostsPage }, { loader }] = await Promise.all([
      import('./page'),
      import('./loader'),
    ])

    return { Component: PostsPage, loader }
  },
})
