import { Providers, ProvidersProps } from './providers'
import { matcher } from '../shared/routing'
import { createRoot } from 'react-dom/client'
import { getUser } from '../shared/api/users'

const root = createRoot(document.querySelector('#app')!)

async function init() {
  const [user, { App }] = await Promise.all([getUser(), import('./app')])

  const providersProps: Omit<ProvidersProps, 'children'> = {
    matcher: { matcher },
    user: { initialUser: user },
  }

  root.render(
    <Providers {...providersProps}>
      <App />
    </Providers>,
  )
}

init()
