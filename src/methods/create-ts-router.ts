import { createRoutesMatcher } from "../helpers/create-routes-matcher";
import { AnyParams, RouteInstance, TSRouter } from "../types";

export function createTSRouter(params: {
  routes: { path: string; route: RouteInstance<AnyParams> }[];
}): TSRouter {
  return { matcher: createRoutesMatcher(params) };
}
