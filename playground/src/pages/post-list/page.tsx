import { Outlet, useLoaderData } from 'react-router'
import { TSLink } from 'react-router-tsx'

import { routes } from '../../shared/routing'
import { loader } from './loader'

export const PostsPage = () => {
  const posts = useLoaderData<typeof loader>()

  return (
    <ol>
      {posts.map(({ id, name }) => (
        <li key={id}>
          <TSLink to={routes.posts.detail} params={{ id }}>
            {name}
          </TSLink>
        </li>
      ))}
      <Outlet />
    </ol>
  )
}
