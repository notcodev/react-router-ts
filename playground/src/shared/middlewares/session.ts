import { unstable_MiddlewareFunction } from 'react-router'
import { redirect } from 'react-router'
import { matcher, routerContext } from '../routing'
import { createGuard } from '../session'

export const authenticatedOnlyMiddleware: unstable_MiddlewareFunction = async (
  { context },
  next,
) => {
  const { user } = context.get(routerContext)()

  console.log('[DEBUG] Auth middleware user:', user)

  return createGuard({
    getUser: () => user,
    onAnonymous: ({ route }) => {
      throw redirect(matcher.getPath(route))
    },
    onAuthenticated: () => next(),
  })
}

export const anonymousOnlyMiddleware: unstable_MiddlewareFunction = async ({ context }, next) => {
  const { user } = context.get(routerContext)()

  console.log('[DEBUG] Anon middleware user:', user)

  return createGuard({
    getUser: () => user,
    onAnonymous: () => next(),
    onAuthenticated: ({ route }) => {
      throw redirect(matcher.getPath(route))
    },
  })
}
