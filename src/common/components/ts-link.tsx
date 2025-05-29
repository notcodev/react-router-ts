import type { LinkProps } from 'react-router'

import React from 'react'
import { Link } from 'react-router'

import type { AnyParams, TransformProps } from '../types'

import { buildPath } from '../helpers/build-path'
import { useMatcher } from '../helpers/ts-router-context'

export type TSLinkProps<Params extends AnyParams> = TransformProps<LinkProps, Params>

export const TSLink = <Params extends AnyParams>({
  to: route,
  params,
  search,
  hash,
  ...props
}: TSLinkProps<Params>): React.ReactElement => {
  const matcher = useMatcher()
  return <Link to={buildPath({ route, params, search, hash, matcher })} {...props} />
}
