import { createGuard, useUser } from '../../shared/session'
import { TSNavigate } from 'react-router-tsx'
import { Outlet } from 'react-router'

export const AuthenticatedLayout = () => {
  return createGuard({
    getUser: useUser,
    onAnonymous: ({ route }) => <TSNavigate to={route} />,
    onAuthenticated: () => <Outlet />,
  })
}
