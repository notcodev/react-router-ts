import type { NavLinkProps } from 'react-router'

import React from 'react'
import { NavLink } from 'react-router'

import type { AnyParams, TransformProps } from '../types'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'

export type TSNavLinkProps<Params extends AnyParams> = TransformProps<NavLinkProps, Params>

export const TSNavLink = <Params extends AnyParams>({
  to,
  params,
  search,
  hash,
  ...props
}: TSNavLinkProps<Params>): React.ReactElement => {
  const matcher = useMatcher()
  return (
    <NavLink
      to={buildPath({
        route: to,
        params,
        search,
        hash,
        matcher,
      })}
      {...props}
    />
  )
}
