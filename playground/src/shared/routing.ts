import { unstable_createContext } from 'react-router'
import { createMatcher, createRoute } from 'react-router-tsx'
import { User } from './session'

export interface RouterContextValue {
  user: User | null
}

export const routerContext = unstable_createContext<() => RouterContextValue>()

export const routes = {
  home: createRoute(),
  posts: { list: createRoute(), detail: createRoute({ id: 'number' }) },
  protected: createRoute(),
}

export const matcher = createMatcher({
  routes: [
    { path: '/', route: routes.home },
    { path: '/posts', route: routes.posts.list },
    { path: '/posts/:id', route: routes.posts.detail },
    { path: '/protected', route: routes.protected },
  ],
})
