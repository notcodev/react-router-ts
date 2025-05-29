import { createGate } from '../shared/lib/gates'
import { RootLayoutView } from '../layouts/root'
import { HomePageView } from '../pages/home'
import { PostDetailPageView } from '../pages/post-detail'
import { PostListPageView } from '../pages/post-list'
import { ProtectedPageView } from '../pages/protected'
import { browserRouterAdapter, createRoutesView } from 'react-router-tsx/data'
import { routerContext, RouterContextValue } from '../shared/routing'
import { AuthenticatedLayoutView } from '../layouts/authenticated'

export const RouterContextGate = createGate<RouterContextValue>({ defaultState: { user: null } })

function getContext() {
  console.log('[DEBUG] Called get context')
  return new Map([[routerContext, RouterContextGate.state.get]])
}

export const RoutesView = createRoutesView({
  adapter: browserRouterAdapter({
    unstable_getContext: getContext,
    future: { unstable_middleware: true },
  }),
  views: [
    RootLayoutView(
      HomePageView(),
      AuthenticatedLayoutView(ProtectedPageView()),
      PostListPageView(PostDetailPageView()),
    ),
  ],
  otherwise: () => <div>not found</div>,
})
