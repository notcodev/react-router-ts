import type { NavigateProps } from 'react-router'

import React from 'react'
import { Navigate } from 'react-router'

import type { AnyParams, TransformProps } from '../types'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'

export type TSNavigateProps<Params extends AnyParams> = TransformProps<NavigateProps, Params>

export const TSNavigate = <Params extends AnyParams>({
  to: route,
  params,
  search,
  hash,
  ...props
}: TSNavigateProps<Params>): React.ReactElement => {
  const matcher = useMatcher()
  return <Navigate to={buildPath({ route, params, search, hash, matcher })} {...props} />
}
