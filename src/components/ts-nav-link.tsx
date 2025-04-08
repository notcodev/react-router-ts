import { NavLink, NavLinkProps } from 'react-router'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'
import { AnyParams, TransformProps } from '../types'

export type TSNavLinkProps<Params extends AnyParams> = TransformProps<
  NavLinkProps,
  Params
>

export const TSNavLink = <Params extends AnyParams>({
  to,
  params,
  search,
  hash,
  ...props
}: TSNavLinkProps<Params>) => {
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
