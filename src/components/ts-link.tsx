import { LinkProps } from "react-router";
import { AnyParams, TransformProps } from "../types";
import { useTSRouter } from "../helpers/ts-router-context";
import { Link } from "react-router";
import { buildPath } from "../helpers/build-path";

export type TSLinkProps<Params extends AnyParams> = TransformProps<
  LinkProps,
  Params
>;

export const TSLink = <Params extends AnyParams>({
  to,
  params,
  search,
  hash,
  ...props
}: TSLinkProps<Params>) => {
  const router = useTSRouter();
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
  );
};
