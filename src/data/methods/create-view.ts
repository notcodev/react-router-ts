import type { LoaderFunction, RouteObject } from 'react-router'

import type { TSLoaderFunction, TSRouteObject, View } from '../types'

import { ifPresent } from '../../shared/utils'
import { buildViews } from '../helpers/build-views'

/* [NOTE!]
 * Implement plugins functionality
 */

const createLoaderPatcher =
  <Context>(contextRef: React.MutableRefObject<Context>) =>
  (loader: TSLoaderFunction<Context, any>): LoaderFunction => {
    const patched: LoaderFunction = (args, handlerCtx) => {
      return loader(
        { ...args, builtinContext: args.context, context: contextRef.current },
        handlerCtx,
      )
    }

    patched.hydrate = loader.hydrate

    return patched
  }

const createLazyLoaderPatcher =
  <Context>(loaderPatcher: ReturnType<typeof createLoaderPatcher<Context>>) =>
  (
    lazyLoader: () => Promise<TSLoaderFunction<Context, any> | null | undefined>,
  ): (() => Promise<LoaderFunction | null | undefined>) => {
    return () => lazyLoader().then((loader) => ifPresent(loader, loaderPatcher))
  }

export const createView =
  <Context>({ route, loader, lazy, ...params }: TSRouteObject<Context, any>) =>
  (...childViews: View[]): View => ({
    build: (matcher, contextRef): RouteObject => {
      const patchLoader = createLoaderPatcher(contextRef)
      const patchLazyLoader = createLazyLoaderPatcher(patchLoader)

      return {
        path: ifPresent(route, (route) => matcher.getPath(route)),
        children: buildViews(childViews, matcher, contextRef),
        loader: ifPresent(loader, patchLoader),
        lazy: ifPresent(lazy, (lazy) => {
          if (typeof lazy === 'object') {
            return { ...lazy, loader: ifPresent(lazy.loader, patchLazyLoader) }
          }

          return () =>
            lazy().then(({ loader, ...rest }) => ({
              ...rest,
              loader: ifPresent(loader, patchLoader),
            }))
        }),
        ...params,
      }
    },
    childViews,
    route,
  })
