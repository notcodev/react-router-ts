import { PathRouteProps, Route } from "react-router";
import { AnyParams, RouteInstance, RouteView } from "../types";

export const createRouteView = ({
  route,
  ...props
}: { route: RouteInstance<AnyParams> } & Omit<
  PathRouteProps,
  "path" | "index" | "children"
>): RouteView => ({
  render: (matcher) => {
    const path = matcher.getPath(route);
    return <Route key={path} path={path} {...props} />;
  },
  route,
});
