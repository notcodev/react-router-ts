import { useUser } from '../shared/session'
import { RouterContextGate, RoutesView } from './routes'

export const App = () => {
  const user = useUser()

  return (
    <>
      <RouterContextGate user={user} />
      <RoutesView />
    </>
  )
}
