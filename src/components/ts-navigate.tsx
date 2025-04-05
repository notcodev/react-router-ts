import { Navigate, NavigateProps } from 'react-router'

import { buildPath } from '../helpers/build-path'
import { useTSRouter } from '../helpers/ts-router-context'
import { AnyParams, TransformProps } from '../types'

export type TSNavigateProps<Params extends AnyParams> = TransformProps<
  NavigateProps,
  Params
>

export const TSNavigate = <Params extends AnyParams>({
  to,
  params,
  search,
  hash,
  ...props
}: TSNavigateProps<Params>) => {
  const router = useTSRouter()
  return (
    <Navigate
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
