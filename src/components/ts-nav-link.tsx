import { NavLinkProps } from "react-router";
import { AnyParams, TransformProps } from "../types";
import { useTSRouter } from "../helpers/ts-router-context";
import { NavLink } from "react-router";
import { buildPath } from "../helpers/build-path";

export type TSNavLinkProps<Params extends AnyParams> = TransformProps<
  NavLinkProps,
  Params
>;

export const TSNavLink = <Params extends AnyParams>({
  to,
  params,
  search,
  hash,
  ...props
}: TSNavLinkProps<Params>) => {
  const router = useTSRouter();
  return (
    <NavLink
      to={buildPath({
        route: to,
        params,
        search,
        hash,
        matcher: router.matcher,
      })}
      {...props}
    />
  );
};
