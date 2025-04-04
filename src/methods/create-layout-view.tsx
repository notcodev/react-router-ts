import { PathRouteProps, Route } from "react-router";
import { LayoutView, RouteView } from "../types";
import { renderRouteViews } from "src/helpers/render-route-views";

export const createLayoutView =
  (props: Omit<PathRouteProps, "path" | "index" | "children">) =>
  (...childViews: (RouteView | LayoutView)[]): LayoutView => {
    // Important: spread operator on renderRouteViews output used to prevent warning about key prop
    return {
      render: (matcher) => (
        <Route {...props}>{...renderRouteViews(childViews, matcher)}</Route>
      ),
      childViews,
    };
  };
