export type ParserOutput<T> =
  | { valid: true; rawValue: unknown; value: T }
  | { valid: false; rawValue: unknown; value: null }

export const parsers = {
  number: (param: unknown) => {
    if (typeof param !== 'string') {
      return { valid: false, rawValue: param, value: null } as const
    }

    const parsedParam = Number.parseFloat(param)

    if (Number.isNaN(parsedParam)) {
      return { valid: false, rawValue: param, value: null } as const
    }

    return { valid: true, rawValue: param, value: parsedParam } as const
  },
  string: (param: unknown) => {
    if (typeof param !== 'string') {
      return { valid: false, rawValue: param, value: null } as const
    }

    return { valid: true, rawValue: param, value: param } as const
  },
} satisfies Record<string, (param: unknown) => ParserOutput<any>>
