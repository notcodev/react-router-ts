export const ifPresent = <T, R>(
  checkable: T,
  callback: (item: T & {}) => R,
): Exclude<T, T & {}> | R =>
  checkable === null || checkable === undefined
    ? (checkable as Exclude<T, T & {}>)
    : callback(checkable)
