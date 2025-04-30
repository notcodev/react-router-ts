import { createMatcher, createRoute } from 'react-router-tsx'

export const routes = {
  home: createRoute(),
  posts: { list: createRoute(), detail: createRoute({ id: 'number' }) },
}

export const matcher = createMatcher({
  routes: [
    { path: '/', route: routes.home },
    { path: '/posts', route: routes.posts.list },
    { path: '/posts/:id', route: routes.posts.detail },
  ],
})
