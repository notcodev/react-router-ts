import { LayoutView, Matcher, RouteView } from "src/types";

export const renderRouteViews = (
  views: (RouteView | LayoutView)[],
  matcher: Matcher,
) => views.map((view) => view.render(matcher));
