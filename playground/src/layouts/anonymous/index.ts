import { anonymousOnlyMiddleware } from '../../shared/middlewares/session'
import { createView } from 'react-router-tsx/data'
import { AnonymousLayout } from './layout'

export const AnonymousLayoutView = createView({
  unstable_middleware: [anonymousOnlyMiddleware],
  Component: AnonymousLayout,
})
