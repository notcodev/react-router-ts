import { createContext, useContext } from 'react'

import { TSRouter } from '../types'

const TSRouterContext = createContext<TSRouter | null>(null)

export const useTSRouter = () => {
  const context = useContext(TSRouterContext)

  if (!context) {
    throw new Error('useTSRouter must be used within a TSRouterProvider')
  }

  return context
}

export const TSRouterProvider = ({
  children,
  router,
}: {
  children: React.ReactNode
  router: TSRouter
}) => {
  return (
    <TSRouterContext.Provider value={router}>
      {children}
    </TSRouterContext.Provider>
  )
}
