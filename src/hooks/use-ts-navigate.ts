import {
  NavigateOptions,
  URLSearchParamsInit,
  useNavigate,
} from "react-router";
import { AnyParams, ParamsRecord, RouteInstance } from "../types";
import { useTSRouter } from "../helpers/ts-router-context";
import { useCallback } from "react";
import { buildPath } from "../helpers/build-path";

export type TSNavigateFunctionOptions<Params extends AnyParams> = {
  to: RouteInstance<Params>;
  search?: URLSearchParamsInit;
  hash?: string;
} & NavigateOptions &
  (Params extends ParamsRecord ? { params: Params } : { params?: never });

export interface TSNavigateFunction {
  <Params extends AnyParams>(
    options: TSNavigateFunctionOptions<Params>,
  ): Promise<void> | void;
  (delta: number): Promise<void> | void;
}

export const useTSNavigate = () => {
  const navigate = useNavigate();
  const router = useTSRouter();
  const stableNavigate: TSNavigateFunction = useCallback(
    <Params extends AnyParams>(
      optionsOrDelta: TSNavigateFunctionOptions<Params> | number,
    ) => {
      if (typeof optionsOrDelta === "number") {
        return navigate(optionsOrDelta);
      }

      const { to, params, search, hash, ...options } = optionsOrDelta;

      return navigate(
        buildPath({ route: to, params, search, hash, matcher: router.matcher }),
        options,
      );
    },
    [navigate],
  );
  return stableNavigate;
};
