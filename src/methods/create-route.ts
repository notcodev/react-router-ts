import { RouteInstance } from "../types";

export function createRoute(): RouteInstance<void>;
export function createRoute<
  Definitions extends Record<string, "string" | "number">,
>(
  paramsDefinition: Definitions,
): RouteInstance<{
  [Key in keyof Definitions]: {
    string: string;
    number: number;
  }[Definitions[Key]];
}>;

export function createRoute(paramsDefinition?: any) {
  return { paramsDefinition };
}
