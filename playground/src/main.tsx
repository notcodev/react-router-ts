import { createRoot } from 'react-dom/client'
import { MatcherProvider } from 'react-router-tsx'
import { browserRouterAdapter, createRoutesView } from 'react-router-tsx/data'

import { RootLayoutView } from './layouts/root'
import { HomePageView } from './pages/home'
import { PostDetailPageView } from './pages/post-detail'
import { PostListPageView } from './pages/post-list'
import { matcher } from './routing'

const RoutesView = createRoutesView({
  adapter: browserRouterAdapter(),
  views: [RootLayoutView(HomePageView(), PostListPageView(PostDetailPageView()))],
  otherwise: () => <div>not found</div>,
})

const App = () => {
  return (
    <MatcherProvider matcher={matcher}>
      <RoutesView />
    </MatcherProvider>
  )
}

const root = createRoot(document.querySelector('#app')!)

root.render(<App />)
