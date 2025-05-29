import { RootLayoutView } from '../layouts/root'
import { HomePageView } from '../pages/home'
import { PostDetailPageView } from '../pages/post-detail'
import { PostListPageView } from '../pages/post-list'
import { RouterContext } from '../router-context'
import { browserRouterAdapter, createRoutesView } from 'react-router-tsx/data'

export const RoutesView = createRoutesView<RouterContext>({
  adapter: browserRouterAdapter(),
  views: [RootLayoutView(HomePageView(), PostListPageView(PostDetailPageView()))],
  otherwise: () => <div>not found</div>,
})
