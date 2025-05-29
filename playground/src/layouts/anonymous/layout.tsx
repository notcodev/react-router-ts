import { createGuard, useUser } from '../../shared/session'
import { TSNavigate } from 'react-router-tsx'
import { Outlet } from 'react-router'

export const AnonymousLayout = () => {
  return createGuard({
    getUser: useUser,
    onAnonymous: () => <Outlet />,
    onAuthenticated: ({ route }) => <TSNavigate to={route} />,
  })
}
