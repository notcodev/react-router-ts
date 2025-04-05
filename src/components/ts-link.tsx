import { Link, LinkProps } from 'react-router'

import { buildPath } from '../helpers/build-path'
import { useTSRouter } from '../helpers/ts-router-context'
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
  const router = useTSRouter()
  return (
    <Link
      to={buildPath({
        route: to,
        params,
        search,
        hash,
        matcher: router.matcher,
      })}
      {...props}
    />
  )
}
