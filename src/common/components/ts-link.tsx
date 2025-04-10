import React from 'react'
import { Link, LinkProps } from 'react-router'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'
import { AnyParams, TransformProps } from '../types'

export type TSLinkProps<Params extends AnyParams> = TransformProps<
  LinkProps,
  Params
>

export const TSLink = <Params extends AnyParams>({
  to,
  params,
  search,
  hash,
  ...props
}: TSLinkProps<Params>) => {
  const matcher = useMatcher()
  return (
    <Link
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
