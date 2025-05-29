import { Outlet, useNavigation } from 'react-router'
import { TSLink, TSNavLink } from 'react-router-tsx'

import { routes } from '../../shared/routing'
import { useUser, useUserSetter } from '../../shared/session'

export const RootLayout = () => {
  const navigation = useNavigation()
  const user = useUser()
  const setUser = useUserSetter()

  return (
    <div>
      {navigation.state === 'loading' && 'loading...'}
      <div>
        <pre>{JSON.stringify(user)}</pre>
      </div>
      <div>
        {!user ? (
          <button onClick={() => setUser({ id: '1', firstName: 'Ivan', lastName: 'Ivanov' })}>
            Login
          </button>
        ) : (
          <button onClick={() => setUser(null)}>Logout</button>
        )}
      </div>
      <nav>
        <ul>
          <li>
            <TSLink to={routes.home}>Home</TSLink>
          </li>
          <li>
            <TSLink to={routes.protected}>Protected</TSLink>
          </li>
          <li>
            <TSNavLink to={routes.posts.list}>
              {({ isActive }) => `${isActive ? '(active)' : ''} Posts`}
            </TSNavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
