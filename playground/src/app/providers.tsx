import { MatcherProvider, MatcherProviderProps } from 'react-router-tsx'
import { UserContextProvider, UserContextProviderProps } from '../shared/session'

type OmitChildren<T> = Omit<T, 'children'>

export interface ProvidersProps {
  matcher: OmitChildren<MatcherProviderProps>
  user: OmitChildren<UserContextProviderProps>
  children: React.ReactNode
}

export const Providers = ({ children, matcher, user }: ProvidersProps) => {
  return (
    <UserContextProvider {...user}>
      <MatcherProvider {...matcher}>{children}</MatcherProvider>
    </UserContextProvider>
  )
}
