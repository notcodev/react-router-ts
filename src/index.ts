export { TSLink, type TSLinkProps } from "./components/ts-link";
export { TSNavLink, type TSNavLinkProps } from "./components/ts-nav-link";
export { TSNavigate, type TSNavigateProps } from "./components/ts-navigate";

export {
  useTSNavigate,
  type TSNavigateFunction,
  type TSNavigateFunctionOptions,
} from "./hooks/use-ts-navigate";
export { useTSParams } from "./hooks/use-ts-params";

export { createRoute } from "./methods/create-route";
export { createLayoutView } from "./methods/create-layout-view";
export { createRouteView } from "./methods/create-route-view";
export { createTSRouter } from "./methods/create-ts-router";
export { createRoutesView } from "./methods/create-routes-view";

export type {
  RouteView,
  LayoutView,
  ParamsRecord,
  AnyParams,
  ParamsProp,
  RouteInstance,
  TSRouter,
  Matcher,
} from "./types";
