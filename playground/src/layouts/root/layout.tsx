import { Outlet, useNavigation } from 'react-router'
import { TSLink, TSNavLink } from 'react-router-tsx'

import { routes } from '../../routing'

export const RootLayout = () => {
  const navigation = useNavigation()

  return (
    <div>
      {navigation.state === 'loading' && 'loading...'}
      <nav>
        <ul>
          <li>
            <TSLink to={routes.home}>Home</TSLink>
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
