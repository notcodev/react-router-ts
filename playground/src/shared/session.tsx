import { RouteInstance } from 'react-router-tsx'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'
import { RouteObject } from 'react-router'
import { routes } from './routing'

export interface User {
  id: string
  firstName: string
  lastName: string
}

export type UserContextState = User | null

const UserContext = createContext<UserContextState | undefined>(undefined)
const UserSetterContext = createContext<Dispatch<SetStateAction<UserContextState>> | undefined>(
  undefined,
)

export interface UserContextProviderProps {
  children: React.ReactNode
  initialUser: UserContextState
}

export const UserContextProvider = ({ children, initialUser }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserContextState>(initialUser)

  return (
    <UserContext.Provider value={user}>
      <UserSetterContext.Provider value={setUser}>{children}</UserSetterContext.Provider>
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const ctx = useContext(UserContext)

  if (ctx === undefined) {
    throw new Error('useUser hook should be user inside UserContextProvider')
  }

  return ctx
}

export const useUserSetter = () => {
  const ctx = useContext(UserSetterContext)

  if (ctx === undefined) {
    throw new Error('useUserSetter hook should be user inside UserContextProvider')
  }

  return ctx
}

interface GuardEventOptions {
  route: RouteInstance<any>
}

export const createGuard = ({
  getUser,
  onAnonymous,
  onAuthenticated,
}: {
  getUser: () => User | null
  onAuthenticated: (options: GuardEventOptions) => any
  onAnonymous: (options: GuardEventOptions) => any
}) => {
  const user = getUser()
  return user ? onAuthenticated({ route: routes.protected }) : onAnonymous({ route: routes.home })
}
