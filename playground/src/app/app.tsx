import { useUser } from '../user-context'
import { RoutesView } from './routes'

export const App = () => {
  const user = useUser()

  return <RoutesView context={{ user }} />
}
