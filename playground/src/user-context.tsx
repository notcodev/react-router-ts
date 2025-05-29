import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

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
