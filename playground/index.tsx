import React from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, useNavigation } from 'react-router'
import {
  createMatcher,
  createRoute,
  MatcherProvider,
  TSLink,
  TSNavLink,
  useTSParams,
} from 'react-router-tsx'
import {
  browserRouterAdapter,
  createLayoutView,
  createRoutesView,
  createRouteView,
} from 'react-router-tsx/data'

const routes = {
  home: createRoute(),
  products: { feed: createRoute(), item: createRoute({ id: 'number' }) },
  heavyPage: createRoute(),
}

const matcher = createMatcher({
  routes: [
    { path: '/', route: routes.home },
    { path: '/products/list', route: routes.products.feed },
    { path: '/products/:id', route: routes.products.item },
    { path: '/heavy', route: routes.heavyPage },
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

const delay = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms))
}

const HeavyPageView = createRouteView({
  route: routes.heavyPage,
  lazy: async () => {
    await delay(500)
    const [{ Page }, { loader }] = await Promise.all([
      import('./page'),
      import('./loader'),
    ])
    console.log('(@) Loader loaded')
    return { Component: Page, loader }
  },
})

const RootLayout = () => {
  const navigation = useNavigation()

  return (
    <div>
      {Boolean(navigation.location) && 'loading...'}
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
          <li>
            <TSNavLink to={routes.heavyPage}>Heavy</TSNavLink>
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
    RootLayoutView(
      HomePageView,
      ProductsFeedPageView,
      ProductItemPageView,
      HeavyPageView,
    ),
  ],
  otherwise: () => <div>not found</div>,
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
