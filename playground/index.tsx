import React from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet } from 'react-router'
import {
  createMatcher,
  createRoute,
  MatcherProvider,
  TSLink,
  useTSParams,
} from 'react-router-tsx'
import {
  browserRouterAdapter,
  createLayoutView,
  createRoutesView,
  createRouteView,
} from 'react-router-tsx/declarative'

const routes = {
  home: createRoute(),
  products: { feed: createRoute(), item: createRoute({ id: 'number' }) },
}

const matcher = createMatcher({
  routes: [
    { path: '/', route: routes.home },
    { path: '/products', route: routes.products.feed },
    { path: '/products/:id', route: routes.products.item },
  ],
})

const HomePage = () => {
  return <div>Home</div>
}

const ProductsFeedPage = () => {
  return <div>Products feed page</div>
}

const ProductItemPage = () => {
  const { id } = useTSParams(routes.products.item)

  return (
    <div>
      Product item page, id: {id}, typeof: {typeof id}
    </div>
  )
}

const HomePageView = createRouteView({
  route: routes.home,
  Component: HomePage,
})

const ProductsFeedPageView = createRouteView({
  route: routes.products.feed,
  Component: ProductsFeedPage,
})

const ProductItemPageView = createRouteView({
  route: routes.products.item,
  Component: ProductItemPage,
})

const RootLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <TSLink to={routes.home}>Home</TSLink>
          </li>
          <li>
            <TSLink to={routes.products.feed}>Products</TSLink>
          </li>
          <li>
            <TSLink to={routes.products.item} params={{ id: 1 }}>
              Product
            </TSLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

const RootLayoutView = createLayoutView({
  Component: RootLayout,
})

const RoutesView = createRoutesView({
  adapter: browserRouterAdapter(),
  views: [
    RootLayoutView(HomePageView, ProductsFeedPageView, ProductItemPageView),
  ],
})

const root = createRoot(document.querySelector('#app')!)

const App = () => {
  return (
    <MatcherProvider matcher={matcher}>
      <RoutesView />
    </MatcherProvider>
  )
}

root.render(<App />)
