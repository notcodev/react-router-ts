import React, { createContext, useContext } from 'react'

import type { Matcher } from '../types'

const MatcherContext = createContext<Matcher | null>(null)

export const useMatcher = (): Matcher => {
  const context = useContext(MatcherContext)

  if (!context) {
    throw new Error('useTSRouter must be used within a TSRouterProvider')
  }

  return context
}

export interface MatcherProviderProps {
  children: React.ReactNode
  matcher: Matcher
}

export const MatcherProvider = ({
  children,
  matcher,
}: MatcherProviderProps): React.ReactElement => {
  return <MatcherContext.Provider value={matcher}>{children}</MatcherContext.Provider>
}
