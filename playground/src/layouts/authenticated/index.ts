import { authenticatedOnlyMiddleware } from '../../shared/middlewares/session'
import { createView } from 'react-router-tsx/data'
import { AuthenticatedLayout } from './layout'

export const AuthenticatedLayoutView = createView({
  unstable_middleware: [authenticatedOnlyMiddleware],
  Component: AuthenticatedLayout,
})
